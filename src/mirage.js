// 逃げ水 — the road mirage of a hot summer day: far down a sunny road, past ~70 m, the asphalt seems to hold patches of
// water that mirror the sky, and they shimmer and recede as you drive towards them (hot air just above the road bends
// the low sky into view). A thin strip along the road ahead, its shape from a uniform array of road samples (no buffer
// uploads), drawn only while it's hot: clear summer zones around midday.
import * as THREE from 'three';
import { GLSL_NOISE, U as MU } from './materials.js';

const M = 24, S0 = 55, DS = 12; // road samples from 55 m ahead, every 12 m (to ~330 m)

export function makeMirage() {
  const idx = [], ai = new Float32Array(M * 2 * 2), pos = new Float32Array(M * 2 * 3);
  for (let i = 0; i < M; i++) {
    ai.set([i, -1, i, 1], i * 4);
    if (i < M - 1) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('aI', new THREE.BufferAttribute(ai, 2)); geo.setIndex(idx);
  const samples = new Float32Array(M * 4); // x, y, z (scene) and heading
  const U = { uS: { value: samples }, uW: { value: 2.6 }, uHot: { value: 0 }, uSky: { value: new THREE.Color() }, uTime: { value: 0 }, uNoiseTex: MU.uNoiseTex };
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, fog: false, uniforms: U,
    polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -6,
    vertexShader: /* glsl */`
      attribute vec2 aI; uniform vec4 uS[${M}]; uniform float uW; varying vec3 vW; varying float vSide;
      void main(){
        vec4 S = uS[int(aI.x)]; vSide = aI.y;
        vec3 p = S.xyz + vec3(-cos(S.w), 0.0, sin(S.w)) * aI.y * uW + vec3(0.0, 0.02, 0.0);
        vW = p; gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }`,
    fragmentShader: /* glsl */`
      uniform float uHot, uTime; uniform vec3 uSky; varying vec3 vW; varying float vSide;
      ${GLSL_NOISE}
      void main(){
        vec3 v = vW - cameraPosition; float d = length(v), e = -v.y / d;  // e: how steeply we look down at it
        float m = smoothstep(0.042, 0.016, e) * smoothstep(55.0, 95.0, d) * (1.0 - smoothstep(240.0, 340.0, d));
        // a few patches that come and go along the road, their edges wavering in the rising heat
        vec2 q = vW.xz;
        float patches = smoothstep(0.42, 0.62, vnoise(q * 0.035 + vec2(0.0, uTime * 0.05)));
        float waver = 0.65 + 0.35 * vnoise(q * vec2(0.6, 0.6) + vec2(uTime * 0.9, -uTime * 0.6));
        float a = uHot * m * patches * waver * (1.0 - smoothstep(0.55, 1.0, abs(vSide)));
        gl_FragColor = vec4(uSky * 1.06, a * 0.95);
      }`,
  });
  const mesh = new THREE.Mesh(geo, mat); mesh.frustumCulled = false; mesh.renderOrder = 1; mesh.visible = false;
  const f = {};
  return {
    mesh,
    /** hot: 0…1 (clear, summer, around midday); s: where the car is; ox/oz: the world origin; rw: road half-width */
    update(path, s, ox, oz, rw, hot, t, sky) {
      mesh.visible = hot > 0.01; if (!mesh.visible) return;
      for (let i = 0; i < M; i++) { path.at(s + S0 + i * DS, f); samples[i * 4] = f.x - ox; samples[i * 4 + 1] = f.y; samples[i * 4 + 2] = f.z - oz; samples[i * 4 + 3] = f.h; }
      U.uW.value = rw * 0.85; U.uHot.value = hot; U.uTime.value = t; U.uSky.value.copy(sky);
    },
  };
}
