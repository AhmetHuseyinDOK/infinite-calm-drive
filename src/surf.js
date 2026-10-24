// 波しぶき: the surf breaking over the tetrapod heaps at the foot of the coast's sea wall, as in the reference art. Each
// heap throws up a burst of spray when a wave reaches it: the same waves that break white along the wall (sea.js
// SHORE_PHASE), each one hitting a little harder or softer. All of it on the GPU: every puff is a camera-facing card whose
// flight (thrown up and in over the blocks, falling back into the sea) is worked out in the vertex shader from the time
// and the wave's phase, so nothing is updated on the CPU and no buffer changes. A chunk's puffs are one mesh, built with
// the chunk (chunks.js placeCoast) and hidden with its other small details far ahead.
// The splash is painted lace: a white cloud with a bumpy edge that grows and erodes into droplets as it falls apart (the
// stepped alpha erosion of stylised VFX), white in the sun with a light-blue shade below. It is lit like the shore's foam
// (sea.js SEA_U): at night only by the moon, so it never glows.
import * as THREE from 'three';
import { GLSL_NOISE } from './materials.js';
import { SEA_U, SHORE_PHASE, SW } from './sea.js';

/** puffs per 7 m of heap (main.js: fewer on phones) */
export const SURF = { n: 8 };

export function surfMaterial() {
  return new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, fog: false,
    uniforms: SEA_U,
    // position: where the puff leaves the water (the heap's face to the sea); aB: the way out to sea (x, z), how far out
    // that face is from the wall (d: its wave's phase), the puff's seed; aC: its corner, and its road distance s (the
    // wave reaches the heap's puffs one after another as it runs along the wall)
    vertexShader: /* glsl */`
      uniform float uTime, uVis; attribute vec4 aB; attribute vec3 aC;
      varying vec2 vUv; varying vec3 vK;
      ${SHORE_PHASE}
      float h11(float p){ p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
      void main(){
        float seed = aB.w, s = aC.z;
        float ph = shorePhase(s, aB.z) - 0.02 - 0.08 * fract(seed * 7.13);        // each puff a moment after the wave arrives
        float wave = floor(ph), str = h11(wave * 7.37 + floor(s / 12.0) * 1.13);   // how hard this wave hits here
        float age = fract(ph) * ${SW.T.toFixed(2)}, dur = 1.15 + 1.1 * str, k = age / dur;
        float h1 = fract(seed * 13.7), h2 = fract(seed * 71.3), h3 = fract(seed * 3.31), h4 = fract(seed * 27.9);
        vec2 o = aB.xy;
        float up = (4.2 + 3.6 * h1) * (0.6 + 0.5 * str), vin = 0.6 + 1.8 * h2, side = (h3 - 0.5) * 3.0;
        vec2 hv = -o * vin + vec2(-o.y, o.x) * side;
        vec3 p = position + vec3(hv.x * age, up * age - 4.9 * age * age, hv.y * age);
        p.y = max(p.y, position.y - 0.15);
        float size = (0.55 + 1.5 * sqrt(min(k, 1.0))) * (0.75 + 0.55 * h4) * (0.7 + 0.45 * str);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float near = smoothstep(2.5, 7.0, -mv.z);   // (right by the camera it thins out and shrinks: big cards cost fill)
        mv.xy += aC.xy * size * (0.4 + 0.6 * near) * vec2(1.0, 1.25); // (a little taller than wide: spray thrown up)
        vUv = aC.xy; vK = vec3(k, uVis * near * smoothstep(0.0, 0.06, k) * (1.0 - smoothstep(0.7, 1.0, k)), seed);
        gl_Position = k < 1.0 && str > 0.25 ? projectionMatrix * mv : vec4(2.0, 2.0, 2.0, 1.0);
      }`,
    fragmentShader: /* glsl */`
      uniform vec3 uFoamLit, uFoamShade; varying vec2 vUv; varying vec3 vK;
      ${GLSL_NOISE}
      vec4 vnoise4g(vec2 p, vec2 gx, vec2 gy){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, gx / 256.0, gy / 256.0); }
      void main(){
        float r2 = dot(vUv, vUv);
        // (the card's corners hold nothing: out before the noise is read)
        vec2 pa = vUv * 2.2 + vK.z * 97.0, pb = vUv * 5.5 + vK.z * 53.0, ga = dFdx(pa), gb = dFdx(pb), ha = dFdy(pa), hb = dFdy(pb);
        float fw = 0.75 * fwidth(r2) + 0.3 * (length(ga) + length(ha) + length(gb) + length(hb)); // (m's footprint: taken before any discard)
        if (r2 > 0.98 || vK.y < 0.01) discard;
        vec4 n = vnoise4g(pa, ga, ha), n2 = vnoise4g(pb, gb, hb);
        float lace = n.x * 0.5 + n2.x * 0.5;
        // white lace with a ragged edge, eroding into droplets as the splash falls apart
        float m = (1.0 - r2) * 0.75 + (lace - 0.5) * 1.3 - (0.2 + 0.55 * vK.x);
        float a = smoothstep(0.0, fw + 0.03, m) * vK.y * 0.92;
        if (a < 0.01) discard;
        vec3 col = mix(uFoamShade, uFoamLit, clamp(0.45 + 0.6 * vUv.y + 0.5 * (n2.y - 0.5), 0.0, 1.0));
        gl_FragColor = vec4(col, a);
      }`,
  });
}

/** a chunk's puffs as one mesh: P is a flat list of x, y, z (chunk frame), out-to-sea x, z, d, seed, s for each puff */
export function surfGeometry(P) {
  const n = P.length / 8; if (!n) return null;
  const pos = new Float32Array(n * 12), b = new Float32Array(n * 16), cc = new Float32Array(n * 12), idx = new Uint16Array(n * 6);
  const CX = [-1, 1, 1, -1], CY = [-1, -1, 1, 1];
  let x0 = Infinity, y0 = Infinity, z0 = Infinity, x1 = -Infinity, y1 = -Infinity, z1 = -Infinity;
  for (let i = 0; i < n; i++) {
    const o = i * 8;
    for (let k = 0; k < 4; k++) {
      const v = i * 4 + k;
      pos[v * 3] = P[o]; pos[v * 3 + 1] = P[o + 1]; pos[v * 3 + 2] = P[o + 2];
      b[v * 4] = P[o + 3]; b[v * 4 + 1] = P[o + 4]; b[v * 4 + 2] = P[o + 5]; b[v * 4 + 3] = P[o + 6];
      cc[v * 3] = CX[k]; cc[v * 3 + 1] = CY[k]; cc[v * 3 + 2] = P[o + 7];
    }
    idx.set([i * 4, i * 4 + 1, i * 4 + 2, i * 4, i * 4 + 2, i * 4 + 3], i * 6);
    x0 = Math.min(x0, P[o]); y0 = Math.min(y0, P[o + 1]); z0 = Math.min(z0, P[o + 2]); x1 = Math.max(x1, P[o]); y1 = Math.max(y1, P[o + 1]); z1 = Math.max(z1, P[o + 2]);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('aB', new THREE.BufferAttribute(b, 4)); g.setAttribute('aC', new THREE.BufferAttribute(cc, 3));
  g.setIndex(new THREE.BufferAttribute(idx, 1));
  // (the puffs fly up to ~3 m and ~4 m out from where they leave the water, and are up to ~2.6 m across)
  g.boundingBox = new THREE.Box3(new THREE.Vector3(x0 - 6, y0 - 1, z0 - 6), new THREE.Vector3(x1 + 6, y1 + 6, z1 + 6));
  g.boundingSphere = g.boundingBox.getBoundingSphere(new THREE.Sphere());
  return g;
}
