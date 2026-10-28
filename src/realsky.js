// The real Galata zone's skyline (step 35R): the landmarks round the Golden Horn as painted cards standing where the real ones stand
// (OpenStreetMap's places, © OpenStreetMap contributors: real_galata.js and the cards' index), at their real sizes, so their bearings and
// distances from the road (and their parallax as the car drives on) are the real ones: the Süleymaniye on its hill, Yeni Cami over
// Eminönü, the Galata Tower over Karaköy, Sarayburnu and Topkapı. Each a painting (Grok Imagine on an open-licence photo:
// assets/real/galata/CREDITS.md), keyed out of its magenta, turned about its upright to the camera, unlit (the painting's own colours by
// day, ungrade) and in the band's tones by the hour, the far city's windows lit at night; all in one mesh, one draw. Behind them, all
// round, the far shores' skyline at its real height from open elevation (the horizon's angle every 0.5°: AWS Terrain Tiles, SRTM), a far
// city in haze. (The painted band's Galata row, the concept's old city, gives way to them: main.js)
import * as THREE from 'three';
import { UNGRADE, gradeUniforms, ASSETS, orNull, BAND_TONES, paintSky, PAINT_TOD } from './painted.js';
import { galL, galWorld, galFrame, zoneWeight } from './path.js';
import { TOD } from './sky.js';
import { GR } from './real_galata.js';

/** Loads the cards: assets/real/galata/cards1.json and its sheet ('hi' 2048 wide, 'lo' half), checked whole; null (never rejects) when
 *  anything is missing, broken or too slow: the bridge then keeps the painted band's old city (main.js) */
export async function loadRealSky(tier, timeoutMs = 15000) {
  const base = ASSETS + 'real/galata/';
  return orNull((async () => {
    const r = await fetch(base + 'cards1.json');
    if (!r.ok) throw new Error('cards1.json ' + r.status);
    const J = await r.json(), file = J.files && J.files[tier] ? tier : 'hi', sz = J.size && J.size[file];
    const cards = (J.cards || []).filter(c => c.uv && c.uv[2] > c.uv[0] && c.uv[3] > c.uv[1] && c.w > 0 && c.h > 0);
    if (!sz || !cards.length) throw new Error('no cards listed');
    const ri = await fetch(base + J.files[file]);
    if (!ri.ok) throw new Error(J.files[file] + ' ' + ri.status);
    const blob = await ri.blob(); // (checked whole: a truncated image decodes without complaint)
    if (J.bytes && J.bytes[file] && blob.size !== J.bytes[file]) throw new Error(J.files[file] + ' is ' + blob.size + ' bytes, not ' + J.bytes[file]);
    const img = await createImageBitmap(blob, { premultiplyAlpha: 'none', colorSpaceConversion: 'none' });
    if (img.width !== sz[0] || img.height !== sz[1]) { img.close(); throw new Error(J.files[file] + ' has the wrong size'); }
    return { img, cards, tier: file };
  })(), timeoutMs, "the Galata Bridge's real skyline unavailable, keeping the painted band's:");
}

const RING_R = 2400, D2 = Math.PI / 180;
const _p = [0, 0], _bn = new THREE.Color(), _bc = new THREE.Vector3(), NOON_SUN = new THREE.Color('#fff5dd').multiplyScalar(3.35), NOON_SKY = new THREE.Color('#8fb1ec').multiplyScalar(1.35 * 2);
/** sk: loadRealSky's; post: the grade's; fog: the scene's fog colour. update(camera, s, origin) each frame: returns how much of the far
 *  horizon it holds (0 … 1: the procedural rings give way) */
export function makeRealSky(sk, post, fog, aniso = 1) {
  const tex = new THREE.Texture(sk.img); tex.colorSpace = THREE.NoColorSpace; tex.flipY = false; tex.generateMipmaps = true;
  tex.minFilter = THREE.LinearMipmapLinearFilter; tex.magFilter = THREE.LinearFilter; tex.anisotropy = aniso; tex.needsUpdate = true;
  const C = sk.cards, n = C.length, pos = new Float32Array(n * 12), uv = new Float32Array(n * 8), idx = [];
  for (let i = 0; i < n; i++) {
    const [u0, v0, u1, v1] = C[i].uv; // (v from the sheet's top, as the image bitmap is uploaded: unflipped)
    uv.set([u0, v1, u1, v1, u1, v0, u0, v0], i * 8);
    idx.push(i * 4, i * 4 + 1, i * 4 + 2, i * 4, i * 4 + 2, i * 4 + 3);
  }
  const geo = new THREE.BufferGeometry(), pa = new THREE.BufferAttribute(pos, 3); pa.setUsage(THREE.DynamicDrawUsage);
  geo.setAttribute('position', pa); geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); geo.setIndex(idx);
  // (the painting by day; the band's tones by the hour under a clear sky (its shade, middle and light by the painting's lightness,
  // keeping some of its own colour); under grey skies its colours relit; a light haze with distance; the light pixels' windows at night)
  const shared = { uFogC: { value: fog }, uA: { value: 1 }, uLightC: { value: new THREE.Color(1, 1, 1) }, uPaint: { value: 1 }, uTone: { value: 0 }, uBS: { value: new THREE.Vector3() },
    uBM: { value: new THREE.Vector3() }, uBH: { value: new THREE.Vector3() }, uBCh: { value: 0 }, uHaze: { value: 0 }, uWin: { value: 0 }, ...gradeUniforms(post) };
  const TONE = /* glsl */`
    uniform vec3 uFogC, uLightC, uBS, uBM, uBH; uniform float uA, uPaint, uTone, uBCh, uHaze, uWin;
    vec3 skyTone(vec3 t){
      vec3 c = pgSrgbToLin(t) * 0.8 * uLightC;
      if (uTone > 0.001) { float l = dot(t, vec3(0.299, 0.587, 0.114)), k = clamp((l - 0.25) * 1.54, 0.0, 1.0); vec3 d = (k < 0.5 ? mix(uBS, uBM, k * 2.0) : mix(uBM, uBH, k * 2.0 - 1.0)) + (t - l) * uBCh; c = mix(c, ungrade(clamp(d, 0.0, 0.97)), uTone); }
      if (uPaint > 0.001) c = mix(c, ungrade(t), uPaint);
      return c;
    }
    vec3 skyWin(vec3 c, vec3 t, vec2 q){ // (a fifth of the light pixels' windows lit at night, warm or cool white)
      if (uWin < 0.003 || dot(t, vec3(0.299, 0.587, 0.114)) < 0.4) return c;
      vec2 wi = floor(q), wf = fract(q) - 0.5; vec3 h3 = fract(vec3(wi.xyx) * 0.1031); h3 += dot(h3, h3.yzx + 33.33); float h = fract((h3.x + h3.y) * h3.z);
      if (h > 0.2) return c;
      float box = step(abs(wf.x), 0.26) * step(abs(wf.y), 0.22);
      return c + mix(vec3(1.25, 0.8, 0.36), vec3(0.85, 0.8, 0.68), step(0.15, h)) * (0.45 + 2.0 * h) * box * uWin;
    }`;
  const mat = new THREE.ShaderMaterial({
    fog: false, side: THREE.DoubleSide,
    uniforms: { map: { value: tex }, uHz: { value: 0.00035 }, ...shared },
    vertexShader: /* glsl */`varying vec2 vUv; varying float vD; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position, 1.0); vD = -mv.z; gl_Position = projectionMatrix * mv; }`,
    fragmentShader: UNGRADE + TONE + /* glsl */`
      uniform sampler2D map; uniform float uHz; varying vec2 vUv; varying float vD;
      void main(){
        vec4 t = texture2D(map, vUv);
        if (t.a * uA < 0.5) discard;
        vec3 c = skyWin(skyTone(t.rgb), t.rgb, vUv * vec2(1400.0, 900.0));
        float h = 1.0 - exp(-vD * uHz * vD * uHz); // (the air between: a little haze with distance, as the far shores have it)
        gl_FragColor = vec4(mix(c, uFogC, max(h * 0.85, uHaze)), 1.0);
      }`,
  });
  const mesh = new THREE.Mesh(geo, mat); mesh.frustumCulled = false; mesh.renderOrder = 2;
  // the far skyline all round from open elevation (GR.hz: the horizon's angle over the eye every 0.5° of compass bearing, from the
  // bridge): a ring RING_R out round the camera (no parallax: the far shores), its compass turned to the zone's, its top at the real
  // skyline's angle; painted as a far city in haze (blocks of light and shade, a few window rows and minarets' needles), lighter at its
  // foot over the water
  const HZ = GR.hz, m = HZ.elev.length, rp = new Float32Array((m + 1) * 6), ru = new Float32Array((m + 1) * 4), ri = [];
  for (let i = 0; i <= m; i++) {
    const b = (i % m) * HZ.step * D2, e = HZ.elev[i % m], top = HZ.eye + Math.tan(Math.max(e, 0.15) * D2) * RING_R;
    rp.set([-Math.sin(b) * RING_R, -30, Math.cos(b) * RING_R, -Math.sin(b) * RING_R, top + 26, Math.cos(b) * RING_R], i * 6); // (x = −east: the game's world is the compass's mirror)
    ru.set([i / m, 0, i / m, 1], i * 4);
    if (i < m) { const k = i * 2; ri.push(k, k + 2, k + 1, k + 1, k + 2, k + 3); }
  }
  const tops = new Float32Array((m + 1) * 2); for (let i = 0; i <= m; i++) tops[i * 2] = tops[i * 2 + 1] = rp[i * 6 + 4] - 26; // (the real skyline's height there: the ring reaches 26 m over it for domes and minarets)
  const rg = new THREE.BufferGeometry(); rg.setAttribute('position', new THREE.BufferAttribute(rp, 3)); rg.setAttribute('uv', new THREE.BufferAttribute(ru, 2)); rg.setAttribute('top', new THREE.BufferAttribute(tops, 1)); rg.setIndex(ri);
  const rm = new THREE.ShaderMaterial({
    fog: false, side: THREE.DoubleSide, uniforms: shared,
    vertexShader: /* glsl */`varying vec2 vUv; varying float vY, vTop; attribute float top; void main(){ vUv = uv; vY = position.y; vTop = top; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: UNGRADE + TONE + /* glsl */`
      varying vec2 vUv; varying float vY, vTop;
      float h1(float x){ return fract(sin(x * 127.1) * 43758.5453); }
      void main(){
        if (uA < 0.5) discard;
        // the far city on its hill, as the cards paint it: small houses and blocks ~8 m wide stepping up the slope to the real skyline
        // (vTop), each column of them with its own storey height and its rows staggered from its neighbours' (no lines across), each
        // house a beige, ochre, old pink, white or grey wall with its windows, a terracotta (or lead-grey) roof and the shade under its
        // eaves, round dark green trees among them, now and then a dome or a minaret's needle over the roofs
        float u = vUv.x * 1100.0, col = floor(u), fu = fract(u), y = vY, top = vTop;
        float rowH = 8.0 + 4.0 * h1(col * 2.17), yy = top - y + rowH * h1(col * 0.731);
        float r = floor(yy / rowH), fr = fract(yy / rowH); // (fr 0 at a house's roof ridge)
        float k = h1(col * 1.7 + r * 31.3), k2 = h1(col * 5.1 + r * 7.7);
        float roofTop = top - 6.0 * h1(floor(u / 3.0) * 3.3) - 2.0 * h1(col * 3.3); // (the skyline's own blocks and houses, each its height)
        float m = vUv.x * 450.0, mi = floor(m), mf = fract(m) - 0.5, hasM = step(0.97, h1(mi * 0.37)), hasD = step(0.92, h1(mi * 1.91));
        float needle = hasM * step(abs(mf), 0.03) * step(y, top + 14.0);
        float dome = hasD * step(y, top - 1.0 + 6.0 * sqrt(max(0.0, 1.0 - mf * mf * 9.0)));
        if (y > roofTop && needle < 0.5 && dome < 0.5) discard;
        if (y > top + 20.0) discard;
        // (its walls in the cards' muted palette: stone grey, beige, ochre, old pink, a white now and then)
        vec3 wall = vec3(0.70, 0.67, 0.62);
        wall = mix(wall, vec3(0.74, 0.66, 0.54), step(0.40, k)); wall = mix(wall, vec3(0.72, 0.62, 0.58), step(0.62, k));
        wall = mix(wall, vec3(0.80, 0.79, 0.76), step(0.78, k)); wall = mix(wall, vec3(0.58, 0.58, 0.58), step(0.92, k));
        wall *= 1.0 - 0.22 * smoothstep(0.80, 0.9, fu); // (each house's side in shade)
        float wx = fract(u * 4.0), wy = fract(fr * 2.0);
        wall *= 1.0 - 0.18 * step(0.3, wx) * step(wx, 0.62) * step(0.42, wy) * step(wy, 0.74) * step(0.3, fr);
        vec3 roof = mix(vec3(0.62, 0.42, 0.34), vec3(0.52, 0.40, 0.35), k2); roof = mix(roof, vec3(0.48, 0.50, 0.53), step(0.7, k2));
        vec3 p = fr < 0.16 ? roof : wall * (1.0 - 0.2 * step(fr, 0.22)); // (the shade under the eaves)
        // (trees: round dark clumps here and there, over the houses below them)
        float tq = h1(col * 2.9 + r * 13.1); vec2 tc = vec2(fu - 0.5, fr - 0.55);
        if (tq > 0.76 && dot(tc, tc) < 0.2) p = mix(vec3(0.27, 0.34, 0.26), vec3(0.36, 0.43, 0.32), smoothstep(0.1, -0.25, tc.y));
        p = mix(p, vec3(0.76, 0.76, 0.75), max(needle, dome * step(top - 1.0, y)));
        p = mix(p, vec3(0.50, 0.53, 0.57), dome * step(top - 1.0, y) * 0.5); // (the domes' lead)
        // (the air between, 2 km and more of it: the far city soft in a blue-grey haze, as the cards have it)
        p = mix(p, vec3(0.60, 0.66, 0.74), 0.36);
        vec3 c = skyWin(skyTone(p), p, vec2(u * 0.5, y * 0.4));
        gl_FragColor = vec4(mix(c, uFogC, uHaze), 1.0);
      }`,
  });
  const ring = new THREE.Mesh(rg, rm); ring.frustumCulled = false; ring.renderOrder = 998;
  const group = new THREE.Group(); group.add(mesh, ring); group.visible = false;
  const u = shared, fade = new Float32Array(n), at = new Float32Array(n * 2); // (at: each card's place in the world, for the tools)
  return {
    group, tex, mats: [mat, rm], cards: C, at,
    /** each frame: the camera; s, its road position; origin, the world's render origin. Returns its share of the far horizon */
    update(camera, s, origin) {
      const l = galL(s), w = Math.max(zoneWeight(s, 'galata'), zoneWeight(s + 300, 'galata'));
      group.visible = l === l && w > 0.02; if (!group.visible) return 0;
      u.uA.value = Math.min(1, w * 1.6);
      const zs = s - l, F = galFrame(zs), cx = camera.position.x + origin.x, cz = camera.position.z + origin.z;
      for (let i = 0; i < n; i++) {
        const c = C[i], lo = c.l[0], hi = c.l[1], f = Math.min(1, Math.max(0, Math.min((l - lo) / 25, (hi - l) / 25)));
        fade[i] = f; galWorld(zs, c.E, c.N, _p); at[i * 2] = _p[0]; at[i * 2 + 1] = _p[1];
        const x = _p[0], z = _p[1], dx = cx - x, dz = cz - z, d = Math.hypot(dx, dz) || 1, rx = dz / d, rz = -dx / d; // (its right, facing the camera)
        const k = f > 0.5 ? 1 : 0, wl = c.w * c.ax * k, wr = c.w * (1 - c.ax) * k, y0 = c.y0, y1 = c.y0 + c.h * k, X = x - origin.x, Z = z - origin.z;
        const o = i * 12; // (its four corners, written in place: no array a frame)
        pos[o] = X - rx * wl; pos[o + 1] = y0; pos[o + 2] = Z - rz * wl; pos[o + 3] = X + rx * wr; pos[o + 4] = y0; pos[o + 5] = Z + rz * wr;
        pos[o + 6] = X + rx * wr; pos[o + 7] = y1; pos[o + 8] = Z + rz * wr; pos[o + 9] = X - rx * wl; pos[o + 10] = y1; pos[o + 11] = Z - rz * wl;
      }
      pa.needsUpdate = true;
      // (the ring round the camera, its compass turned to the zone's: a bearing b along the game's heading h0 − b)
      ring.position.set(camera.position.x, 0, camera.position.z); ring.rotation.set(0, Math.atan2(F.s, F.c), 0);
      // the light, the tones and the haze as the painted band's (painted.js makePaintedBand)
      _bn.copy(TOD.sunCol).multiplyScalar(TOD.sunI); _bc.set(_bn.r, _bn.g, _bn.b);
      _bn.copy(TOD.hemiSky).multiplyScalar(TOD.hemiI * 2); _bc.x += _bn.r; _bc.y += _bn.g; _bc.z += _bn.b;
      const kb = Math.min(Math.max((TOD.bright - 0.55) / 0.4, 0), 1), paint = kb * kb * (3 - 2 * kb);
      u.uLightC.value.setRGB(_bc.x / (NOON_SUN.r + NOON_SKY.r), _bc.y / (NOON_SUN.g + NOON_SKY.g), _bc.z / (NOON_SUN.b + NOON_SKY.b)); u.uPaint.value = paint;
      u.uTone.value = paintSky() * (1 - paint);
      if (u.uTone.value > 0) { const P = BAND_TONES.at(TOD.t); u.uBS.value.fromArray(P.rgb('shade')).divideScalar(255); u.uBM.value.fromArray(P.rgb('mid')).divideScalar(255); u.uBH.value.fromArray(P.rgb('lit')).divideScalar(255); u.uBCh.value = P.rgb('ch')[0]; }
      const nk = Math.min(Math.max((TOD.night - 0.15) / 0.65, 0), 1); u.uWin.value = nk * nk * (3 - 2 * nk) * (1 - 0.6 * TOD.overcast) * PAINT_TOD.on;
      // (the haze over them, as the band's: none on a bright clear day, some at dusk and night, more under grey skies and in rain)
      u.uHaze.value = Math.min(1, Math.max(0, (1 - (1 - 0.12 * TOD.warm - 0.25 * TOD.night) * (1 - 0.55 * TOD.overcast) * (1 - 0.6 * TOD.rain) * (1 - paint)) * (1 - paint)));
      return w;
    },
  };
}
