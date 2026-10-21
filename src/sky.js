// Sky dome, GPU-painted anime cumulus billboards, distant mountain silhouettes and the time-of-day palette.
import * as THREE from 'three';
import { clamp, lerp, smooth, rng, fbm1 } from './util.js';
import { GLSL_NOISE, U as MU } from './materials.js';

// ---------------------------------------------------------------- palette
//  t, zenith, horizon, sun colour, sun I, hemi sky, hemi ground, hemi I, fog, cloud lit, cloud shade, cloud rim, night, warm
const KEYS = [
  [0.00, '#070b26', '#1c2752', '#8ea4ff', 0.55, '#2a3c74', '#16141f', 1.0, '#19223f', '#3d4a78', '#1b2244', '#2a3050', 1.0, 0],
  [0.20, '#1c2560', '#56568a', '#9fb0ff', 0.45, '#42508a', '#262432', 1.0, '#41497a', '#6a6a9a', '#3a3a6a', '#7a6aa0', 0.85, 0],
  [0.245, '#3a56aa', '#f2aa8a', '#ffb48a', 1.7, '#8a92cc', '#6a5060', 1.25, '#dcaca2', '#ffd2b2', '#9a88b2', '#ffd8a8', 0.3, 0.9],
  [0.30, '#3473d4', '#cde3f8', '#fff0d8', 3.1, '#9cc0ff', '#b8a890', 1.5, '#cfe0ef', '#ffffff', '#a2b6d8', '#fff4e0', 0.0, 0.2],
  [0.45, '#1656d6', '#b6daff', '#fffaf0', 3.5, '#a4c8ff', '#c8b8a0', 1.6, '#bfdaf4', '#ffffff', '#9ab0d6', '#ffffff', 0.0, 0],
  [0.62, '#1a5cd4', '#bcdfff', '#fff4e4', 3.4, '#a8c8f8', '#c8b49a', 1.55, '#c4ddf3', '#ffffff', '#9eb2d6', '#fffaf0', 0.0, 0.1],
  [0.70, '#2e5ec2', '#ffd8a6', '#ffcf8a', 2.9, '#a8b4e0', '#c0a080', 1.4, '#eed0ae', '#fff2d8', '#a2a0c8', '#ffd890', 0.0, 0.6],
  [0.75, '#3a3a9a', '#ff946c', '#ff8a52', 1.9, '#9a88c8', '#8a6070', 1.2, '#e0968a', '#ffb894', '#8a6aa0', '#ffcf8a', 0.15, 1.0],
  // end of civil twilight (sun ~6° down): no more sunlight on the ground — the light softens and cools into skylight
  // (faint shadows), while the sky towards the sunset and the high clouds keep the afterglow
  [0.765, '#2f3488', '#c8788a', '#e8806e', 0.9, '#7076b8', '#5a4a5e', 1.15, '#a07890', '#ffa890', '#6a5a92', '#ffb48a', 0.4, 0.85],
  [0.80, '#1f2466', '#86709e', '#a08ac8', 0.35, '#4f5a98', '#2f3040', 1.0, '#4f5285', '#c08ab8', '#4a3a70', '#ff9a8a', 0.7, 0.5],
  [0.86, '#0a0f30', '#24305e', '#8ea4ff', 0.55, '#2c3e78', '#16141f', 1.0, '#1c2548', '#404c7c', '#1c2346', '#2a3050', 1.0, 0],
  [1.00, '#070b26', '#1c2752', '#8ea4ff', 0.55, '#2a3c74', '#16141f', 1.0, '#19223f', '#3d4a78', '#1b2244', '#2a3050', 1.0, 0],
].map(k => k.map(v => (typeof v === 'string' ? new THREE.Color(v) : v)));

export const TOD = {
  zenith: new THREE.Color(), horizon: new THREE.Color(), sunCol: new THREE.Color(), sunI: 1, hemiSky: new THREE.Color(), hemiGround: new THREE.Color(), hemiI: 1,
  fog: new THREE.Color(), cLit: new THREE.Color(), cShade: new THREE.Color(), cRim: new THREE.Color(), night: 0, warm: 0, overcast: 0, rain: 0,
  sunDir: new THREE.Vector3(), moonDir: new THREE.Vector3(), lightDir: new THREE.Vector3(), sunEl: 0,
};
export function updateTOD(t) {
  let k = 0; while (k < KEYS.length - 2 && KEYS[k + 1][0] <= t) k++;
  const a = KEYS[k], b = KEYS[k + 1], f = smooth(clamp((t - a[0]) / (b[0] - a[0]), 0, 1));
  const lc = (i, out) => out.copy(a[i]).lerp(b[i], f);
  lc(1, TOD.zenith); lc(2, TOD.horizon); lc(3, TOD.sunCol); TOD.sunI = lerp(a[4], b[4], f);
  lc(5, TOD.hemiSky); lc(6, TOD.hemiGround); TOD.hemiI = lerp(a[7], b[7], f); lc(8, TOD.fog);
  lc(9, TOD.cLit); lc(10, TOD.cShade); lc(11, TOD.cRim); TOD.night = lerp(a[12], b[12], f); TOD.warm = lerp(a[13], b[13], f);
  TOD.sunEl = skyDirs(t, TOD.sunDir, TOD.moonDir, TOD.lightDir);
}
// the sun climbs to ~62° at noon and sweeps east → west; the moon mirrors it. The light used for shading is the sun
// while it's up and the moon otherwise (with a soft hand-over). Returns the sun's elevation.
function skyDirs(t, sun, moon, light) {
  const el = Math.sin((t - 0.25) * Math.PI * 2) * 1.08, az = (t - 0.25) * Math.PI + 0.9;
  sun.set(Math.cos(el) * Math.sin(az), Math.sin(el), Math.cos(el) * Math.cos(az)).normalize();
  moon.set(-sun.x, Math.abs(Math.sin(el)) * 0.8 + 0.25, -sun.z).normalize();
  light.copy(sun);
  if (el < 0.08) light.lerpVectors(moon, sun, clamp((el + 0.12) / 0.2, 0, 1)).normalize();
  if (light.y < 0.12) { light.y = 0.12; light.normalize(); }
  return el;
}
const _sd = new THREE.Vector3(), _md = new THREE.Vector3();
/** the shading light direction at time of day t (no side effects) */
export function lightDirAt(t, out) { skyDirs(((t % 1) + 1) % 1, _sd, _md, out); return out; }

// overcast palette (day / night), blended over the clear-sky palette by the weather
const OV = {
  zenith: [new THREE.Color('#7b8594'), new THREE.Color('#141a28')], horizon: [new THREE.Color('#b5bcc6'), new THREE.Color('#283042')],
  fog: [new THREE.Color('#a8b0ba'), new THREE.Color('#232b3c')], hemiSky: [new THREE.Color('#aab3bf'), new THREE.Color('#3c4866')],
  hemiGround: [new THREE.Color('#8b8983'), new THREE.Color('#1e2030')], cLit: [new THREE.Color('#d0d5dc'), new THREE.Color('#2c3240')],
  cShade: [new THREE.Color('#7c8593'), new THREE.Color('#151922')],
};
const _oc = new THREE.Color();
export function applyWeather(ov, rain) {
  TOD.overcast = ov; TOD.rain = rain;
  if (ov <= 0.001) return;
  const n = TOD.night;
  for (const k of ['zenith', 'horizon', 'fog', 'hemiSky', 'hemiGround', 'cLit', 'cShade']) {
    _oc.copy(OV[k][0]).lerp(OV[k][1], n);
    TOD[k].lerp(_oc, ov * (k === 'cLit' || k === 'cShade' ? 0.75 : 0.85));
  }
  TOD.sunI *= 1 - 0.82 * ov; TOD.warm *= 1 - ov; TOD.cRim.multiplyScalar(1 - ov);
  TOD.sunCol.lerp(_oc.setRGB(0.85, 0.87, 0.9), ov * 0.6);
}

// ---------------------------------------------------------------- sky dome
export function makeSky() {
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: {
      uZenith: { value: TOD.zenith }, uHorizon: { value: TOD.horizon }, uSunDir: { value: TOD.sunDir }, uMoonDir: { value: TOD.moonDir },
      uNoiseTex: MU.uNoiseTex, uSunCol: { value: TOD.sunCol }, uNight: { value: 0 }, uWarm: { value: 0 }, uTime: { value: 0 }, uCirrus: { value: 0.6 }, uCirrusCol: { value: new THREE.Color() }, uOvercast: { value: 0 }, uDeckLit: { value: new THREE.Color() }, uDeckDark: { value: new THREE.Color() },
      uMilky: { value: 0 }, uMetA: { value: new THREE.Vector3(0, 1, 0) }, uMetB: { value: new THREE.Vector3(0, 1, 0) }, uMetP: { value: -1 },
    },
    vertexShader: /* glsl */`varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }`,
    fragmentShader: /* glsl */`
      uniform vec3 uZenith, uHorizon, uSunDir, uMoonDir, uSunCol, uCirrusCol, uDeckLit, uDeckDark, uMetA, uMetB; uniform float uNight, uWarm, uTime, uCirrus, uOvercast, uMilky, uMetP;
      varying vec3 vDir;
      ${GLSL_NOISE}
      float hash13(vec3 p){ p = fract(p * .1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
      void main(){
        vec3 d = normalize(vDir); float e = d.y;
        float h = pow(clamp(1.0 - max(e, 0.0), 0.0, 1.0), 4.0);
        vec3 col = mix(uZenith, uHorizon, h);
        if (e < 0.0) col = uHorizon * (1.0 - clamp(-e * 2.0, 0.0, 0.25));
        float sd = max(dot(d, uSunDir), 0.0);
        float day = (1.0 - uNight) * (1.0 - uOvercast);
        col += uSunCol * (pow(sd, 6.0) * (0.10 + 0.35 * uWarm) * (0.4 + h) + pow(sd, 48.0) * 0.45) * day;
        // high wispy cirrus, brushed along one direction
        if (e > 0.015) {
          vec2 p = d.xz / (e + 0.12);
          p = mat2(0.8, -0.6, 0.6, 0.8) * p;
          float c = fbm2(p * vec2(1.4, 5.0) + vec2(uTime * 0.004, 0.0)) * 0.75 + fbm2(p * 6.0) * 0.25;
          c = smoothstep(0.52, 0.86, c) * smoothstep(0.015, 0.22, e) * (1.0 - smoothstep(0.55, 0.95, e));
          col = mix(col, uCirrusCol, c * uCirrus);
        }
        float disc = smoothstep(0.99935, 0.99965, sd);
        col = mix(col, uSunCol * 4.0 + 1.5, disc * day);
        // a soft grey stratus deck when the weather turns
        if (uOvercast > 0.01 && e > -0.02) {
          vec2 q = d.xz / (e + 0.22) * 0.75 + vec2(uTime * 0.012, uTime * 0.004);
          float n = fbm2(q) * 0.7 + fbm2(q * 2.6 + 5.0) * 0.3;
          float cov = smoothstep(0.2, 0.62, n + uOvercast * 0.5 - 0.2);
          vec3 deck = mix(uDeckDark, uDeckLit, smoothstep(0.35, 0.85, n));
          col = mix(col, deck, cov * uOvercast * smoothstep(-0.02, 0.1, e));
        }
        float band = 0.0;
        if (uMilky > 0.01 && e > -0.05) { // the Milky Way: a soft, clumpy band with dark dust lanes
          vec3 bn = normalize(vec3(0.62, 0.3, 0.72)), t1 = normalize(cross(bn, vec3(0.0, 1.0, 0.0))), t2 = cross(bn, t1);
          float v = dot(d, bn), ang = atan(dot(d, t2), dot(d, t1));
          band = exp(-(v * v) / 0.045);
          float clump = fbm2(vec2(ang * 3.2, v * 9.0)) * 0.7 + fbm2(vec2(ang * 9.0 + 4.0, v * 26.0)) * 0.3;
          float dust = smoothstep(0.52, 0.68, fbm2(vec2(ang * 6.0 + 11.0, v * 30.0 + 2.0))) * exp(-(v * v) / 0.006);
          float speck = 0.55 + 0.45 * vnoise(vec2(ang * 60.0, v * 160.0));   // grainy, made of faint stars
          float glow = band * smoothstep(0.36, 0.8, clump) * (1.0 - 0.8 * dust) * speck;
          vec3 mw = mix(vec3(0.36, 0.44, 0.85), vec3(0.8, 0.76, 0.78), smoothstep(0.6, 0.88, clump) * exp(-(v * v) / 0.008));
          col += mw * glow * 0.36 * uMilky * smoothstep(-0.05, 0.3, e);
        }
        if (uNight * (1.0 - uOvercast) > 0.01 && e > 0.0) {
          vec3 sp = d * 380.0; vec3 cell = floor(sp); float hs = hash13(cell);
          if (hs > 0.9965 - 0.004 * band * uMilky) { float st = (1.0 - smoothstep(0.0, 0.42, length(fract(sp) - 0.5))) * (0.55 + 0.45 * sin(uTime * 1.7 + hs * 400.0));
            col += vec3(0.85, 0.9, 1.0) * st * uNight * smoothstep(0.0, 0.25, e) * 1.3; }
          if (uMetP >= 0.0 && uMetP < 1.3) { // a shooting star: a bright head with a fading tail
            float p = min(uMetP, 1.0);
            vec3 head = normalize(mix(uMetA, uMetB, p)), tail = normalize(mix(uMetA, uMetB, max(0.0, p - 0.32)));
            vec3 ab = head - tail; float tt = clamp(dot(d - tail, ab) / max(dot(ab, ab), 1e-6), 0.0, 1.0);
            float dist = length(d - (tail + ab * tt));
            float fade = smoothstep(0.0, 0.06, uMetP) * (1.0 - smoothstep(1.0, 1.3, uMetP));
            col += vec3(0.9, 0.95, 1.0) * (1.0 - smoothstep(0.0, 0.0024, dist)) * tt * tt * fade * 2.2 * uNight;
          }
          float md = dot(d, uMoonDir);
          col += vec3(0.5, 0.58, 0.85) * pow(max(md, 0.0), 60.0) * 0.35 * uNight;
          col = mix(col, vec3(1.6, 1.6, 1.5), smoothstep(0.99955, 0.9998, md) * uNight);
        }
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(5000, 48, 24), mat);
  mesh.renderOrder = 1000; mesh.frustumCulled = false; // drawn last among opaques: the depth test skips every hidden sky pixel
  return mesh;
}

// ---------------------------------------------------------------- clouds
function cumulusPuffs(r, tall) {
  const P = [], base = 0.1, width = tall ? 0.6 : 0.88, lean = (r() - 0.5) * 0.04;
  const nb = tall ? 6 : 9;
  for (let i = 0; i < nb; i++) { const rad = 0.06 + r() * 0.05; P.push([((i / (nb - 1)) - 0.5) * width + (r() - 0.5) * 0.03, base + rad * 0.5, (r() - 0.5) * 0.2, rad]); }
  const tiers = tall ? 6 : 2;
  let w = width * 0.82, y = base + 0.09;
  for (let t = 0; t < tiers; t++) {
    const n = Math.max(1, Math.round(w / 0.11));
    for (let i = 0; i < n; i++) {
      const x = (n === 1 ? 0 : (i / (n - 1) - 0.5)) * w + (r() - 0.5) * 0.05 + lean * t;
      P.push([x, y + r() * 0.05, (r() - 0.5) * 0.25 + 0.05, (0.075 + r() * 0.05) * (tall ? 1.25 : 1)]);
    }
    y += tall ? 0.115 : 0.075; w *= tall ? 0.8 : 0.66;
  }
  // cauliflower bumps on the upper rims
  const big = P.slice();
  for (const p of big) {
    if (P.length > 92) break;
    const k = 1 + Math.floor(r() * 2);
    for (let j = 0; j < k; j++) {
      const a = 0.35 + r() * 2.4, rr = p[3] * (0.35 + r() * 0.2);
      P.push([p[0] + Math.cos(a) * p[3] * 0.82, p[1] + Math.sin(a) * p[3] * 0.82, p[2] + 0.04, rr]);
    }
  }
  const out = P.slice(0, 96);
  // fit the whole cloud inside the texture (no flat clipped tops/sides)
  let minX = 1e9, maxX = -1e9, maxY = -1e9;
  for (const p of out) { minX = Math.min(minX, p[0] - p[3] * 1.12); maxX = Math.max(maxX, p[0] + p[3] * 1.12); maxY = Math.max(maxY, p[1] + p[3] * 1.12); }
  const k = Math.min(1, 0.92 / (maxX - minX), (0.95 - base) / (maxY - base)), cx = (minX + maxX) / 2;
  for (const p of out) { p[0] = (p[0] - cx) * k; p[1] = base + (p[1] - base) * k; p[3] *= k; }
  return out;
}

export function paintClouds(renderer) {
  const SZ = 1024, puffU = { value: Array.from({ length: 96 }, () => new THREE.Vector4()) };
  const mat = new THREE.ShaderMaterial({
    uniforms: { uP: puffU, uN: { value: 0 }, uSeed: { value: 0 }, uBase: { value: 0.1 }, uNoiseTex: MU.uNoiseTex },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }',
    fragmentShader: /* glsl */`
      uniform vec4 uP[96]; uniform int uN; uniform float uSeed, uBase; varying vec2 vUv;
      ${GLSL_NOISE}
      void main(){
        vec2 p = vec2(vUv.x - 0.5, vUv.y);
        float best = -1e9, union_ = 0.0; vec3 nrm = vec3(0.0, 0.0, 1.0);
        for (int i = 0; i < 96; i++) {
          if (i >= uN) break;
          vec4 q = uP[i]; vec2 d = p - q.xy;
          float ang = atan(d.y, d.x);
          float r = q.w * (1.0 + 0.09 * (fbm2(vec2(ang * 2.5 + float(i) * 7.1, uSeed)) - 0.5) + 0.05 * (vnoise(p * 60.0 + float(i)) - 0.5));
          float dd = dot(d, d);
          union_ = max(union_, 1.0 - smoothstep(r * 0.93, r, sqrt(dd)));
          if (dd < r * r) { float hz = sqrt(r * r - dd); float depth = q.z + hz; if (depth > best) { best = depth; nrm = normalize(vec3(d, hz)); } }
        }
        float a = union_ * smoothstep(uBase - 0.012, uBase + 0.02, p.y);
        if (a < 0.002) { gl_FragColor = vec4(0.0); return; }
        float ao = smoothstep(uBase, uBase + 0.32, p.y), grain = (fbm2(p * 18.0 + uSeed) - 0.5) * 0.1;
        // lit from the upper left (R) and from the upper right (B): the billboard blends between them,
        // so a cloud never "flips" when the sun passes behind it
        float lamL = dot(nrm, normalize(vec3(-0.55, 0.62, 0.55))), lamR = dot(nrm, normalize(vec3(0.55, 0.62, 0.55)));
        float litL = clamp((smoothstep(-0.25, 0.12, lamL) * 0.55 + smoothstep(0.32, 0.58, lamL) * 0.45) * mix(0.5, 1.0, ao) + grain, 0.0, 1.0);
        float litR = clamp((smoothstep(-0.25, 0.12, lamR) * 0.55 + smoothstep(0.32, 0.58, lamR) * 0.45) * mix(0.5, 1.0, ao) + grain, 0.0, 1.0);
        float rim = 1.0 - smoothstep(0.0, 0.55, nrm.z);
        gl_FragColor = vec4(vec3(litL, rim, litR) * a, a);
      }`,
    depthTest: false, depthWrite: false, blending: THREE.NoBlending,
  });
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat), scene = new THREE.Scene(), cam = new THREE.Camera();
  scene.add(quad);
  // one 2048² atlas with four 1024² clouds (two towering, two wide)
  const rt = new THREE.WebGLRenderTarget(SZ * 2, SZ * 2, { generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter, magFilter: THREE.LinearFilter });
  const prevRT = renderer.getRenderTarget(), prevAuto = renderer.autoClear, r = rng(99);
  renderer.setRenderTarget(rt); renderer.setClearColor(0x000000, 0); renderer.clear(); renderer.autoClear = false;
  const kinds = [];
  for (let i = 0; i < 4; i++) {
    const tall = i % 2 === 0, P = cumulusPuffs(r, tall);
    P.forEach((p, j) => puffU.value[j].set(p[0], p[1], p[2], p[3]));
    mat.uniforms.uN.value = P.length; mat.uniforms.uSeed.value = i * 13.7;
    rt.viewport.set((i % 2) * SZ, Math.floor(i / 2) * SZ, SZ, SZ);
    renderer.setRenderTarget(rt); renderer.render(scene, cam);
    kinds.push({ cell: [i % 2, Math.floor(i / 2)], tall });
  }
  rt.viewport.set(0, 0, SZ * 2, SZ * 2);
  renderer.autoClear = prevAuto; renderer.setRenderTarget(prevRT);
  // regenerate mipmaps for the whole atlas now that all cells are painted
  mat.dispose(); quad.geometry.dispose();
  return { tex: rt.texture, kinds, rt };
}

export function makeClouds(atlas) {
  const r = rng(5), N = 22, list = [];
  const geo = new THREE.PlaneGeometry(1, 1); geo.translate(0, 0.5, 0);
  const aD = new THREE.InstancedBufferAttribute(new Float32Array(N * 4), 4), aR = new THREE.InstancedBufferAttribute(new Float32Array(N), 1);
  geo.setAttribute('aD', aD); geo.setAttribute('aR', aR);
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, fog: false, premultipliedAlpha: true,
    uniforms: { map: { value: atlas.tex }, uLit: { value: TOD.cLit }, uShade: { value: TOD.cShade }, uRim: { value: TOD.cRim }, uHaze: { value: TOD.horizon }, uOpacity: { value: 1 } },
    vertexShader: /* glsl */`
      attribute vec4 aD; attribute float aR; varying vec2 vUv; varying vec4 vD; varying float vR;
      void main(){ vUv = uv; vD = aD; vR = aR; gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */`
      uniform sampler2D map; uniform vec3 uLit, uShade, uRim, uHaze; uniform float uOpacity; varying vec2 vUv; varying vec4 vD; varying float vR;
      void main(){
        vec4 t = texture2D(map, (vD.xy + vUv) * 0.5);
        if (t.a < 0.003) discard;
        vec3 v = t.rgb / t.a;
        float lit = mix(v.r, v.b, vD.z);
        vec3 c = mix(uShade, uLit, lit) + uRim * v.g * smoothstep(0.35, 0.8, lit) * vR;
        c = mix(c, uHaze, clamp(vD.w * (1.0 - smoothstep(0.0, 0.75, vUv.y)), 0.0, 1.0));
        gl_FragColor = vec4(c, 1.0) * t.a * uOpacity;
      }`,
  });
  const mesh = new THREE.InstancedMesh(geo, mat, N);
  mesh.frustumCulled = false; mesh.renderOrder = -5;
  for (let i = 0; i < N; i++) {
    const far = i < 12, k = atlas.kinds[(i * 3 + (far ? 0 : 1)) % atlas.kinds.length];
    const size = far ? (k.tall ? r.range(900, 1500) : r.range(1100, 1700)) : r.range(380, 700);
    list.push({ phi: (i / N) * Math.PI * 2 + r.range(-0.15, 0.15), d: far ? r.range(2600, 3400) : r.range(1300, 2200), base: far ? r.range(-60, 60) : r.range(260, 700), size, cell: k.cell, haze: far ? 0.45 : 0.18 });
  }
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), sc = new THREE.Vector3(), Y = new THREE.Vector3(0, 1, 0);
  return {
    group: mesh,
    update(cam, dt) {
      const sunAz = Math.atan2(TOD.lightDir.x, TOD.lightDir.z);
      for (const c of list) c.phi += (dt * 1.2) / c.d;
      const order = list.slice().sort((a, b) => b.d - a.d); // far → near for correct blending
      order.forEach((c, i) => {
        p.set(cam.x + Math.sin(c.phi) * c.d, cam.y + c.base, cam.z + Math.cos(c.phi) * c.d);
        q.setFromAxisAngle(Y, c.phi + Math.PI); sc.set(c.size, c.size, 1);
        m.compose(p, q, sc); mesh.setMatrixAt(i, m);
        let dAz = sunAz - c.phi; dAz = Math.atan2(Math.sin(dAz), Math.cos(dAz));
        const k = Math.max(0, Math.min(1, (dAz + 0.35) / 0.7)), rightLit = 1 - k * k * (3 - 2 * k);
        aD.setXYZW(i, c.cell[0], c.cell[1], rightLit, c.haze);
        aR.setX(i, 0.35 + 0.9 * Math.pow(Math.max(Math.cos(dAz), 0), 3) * (0.4 + TOD.warm));
      });
      mesh.instanceMatrix.needsUpdate = true; aD.needsUpdate = true; aR.needsUpdate = true;
      // in rain the towering fair-weather cumulus melt into the low grey deck: under rain clouds you see one even grey
      // ceiling, not crisp white towers (they used to stay out, half-transparent, all through the rain)
      mat.uniforms.uOpacity.value = (1 - TOD.night * 0.35) * (1 - TOD.overcast * 0.55) * (1 - 0.85 * TOD.rain);
    },
  };
}

// ---------------------------------------------------------------- mountains
export function makeMountains() {
  const group = new THREE.Group();
  const layers = [
    { R: 4300, h: 820, k: 5, col: '#8ea6d8', haze: 0.62 },
    { R: 3200, h: 520, k: 8, col: '#6f90b8', haze: 0.45 },
    { R: 2300, h: 300, k: 13, col: '#5f8a76', haze: 0.32 },
  ];
  layers.forEach((L, li) => {
    const N = 360, pos = [], hf = [], idx = [];
    for (let i = 0; i <= N; i++) {
      const th = (i / N) * Math.PI * 2, x = Math.sin(th) * L.R, z = Math.cos(th) * L.R;
      const n = fbm1((i / N) * L.k * 4, 40 + li * 9);
      const ridge = Math.pow(Math.max(0, n - 0.18) / 0.82, 1.6);
      const H = L.h * (0.12 + ridge);
      pos.push(x, -60, z, x, -60 + H, z); hf.push(0, i / N, 1, i / N);
      if (i < N) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('hf', new THREE.Float32BufferAttribute(hf, 2));
    g.setIndex(idx);
    const mat = new THREE.ShaderMaterial({
      side: THREE.DoubleSide, fog: false,
      uniforms: { uCol: { value: new THREE.Color(L.col) }, uHaze: { value: TOD.fog }, uHazeK: { value: L.haze }, uLight: { value: 1 }, uSeed: { value: li * 17.0 }, uSnow: { value: 0 }, uNoiseTex: MU.uNoiseTex },
      vertexShader: 'attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: /* glsl */`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed, uSnow; varying vec2 vH; varying float vY;
        ${GLSL_NOISE}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float cap = uSnow * smoothstep(0.55, 0.75, vH.x + (ridge - 0.5) * 0.25);           // snowcaps in snow country
          c = mix(c, vec3(0.93, 0.95, 1.0) * uLight * (0.85 + 0.2 * ridge), cap);
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`,
    });
    const m = new THREE.Mesh(g, mat); m.frustumCulled = false; m.renderOrder = 999;
    group.add(m);
  });
  return {
    group,
    update(cam, snow = 0) {
      group.position.set(cam.x, 0, cam.z);
      for (const m of group.children) m.material.uniforms.uSnow.value = snow;
      const light = (0.35 + 0.65 * (1 - TOD.night)) * (1 - 0.35 * TOD.overcast);
      for (const m of group.children) m.material.uniforms.uLight.value = light;
    },
  };
}
