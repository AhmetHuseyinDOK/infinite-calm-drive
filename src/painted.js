// Painted pieces of the reference art inside the 3D world. For now: the cumulus. Painted clouds are cut from the four
// reference paintings (SAM mattes) and generated in their style (Grok Imagine), packed into one atlas
// (assets/clouds/, made by ~/cdtest/pc/scripts/packclouds.py) and drawn as one instanced mesh of camera-facing billboards
// around the horizon.
//  - On a bright clear day they are the paintings themselves: their shader runs the exact inverse of the grade pass
//    (`ungrade`), so the frame shows the painted colours while the 3D world around them keeps the game's light.
//  - At dawn, dusk, night and under grey skies they are recoloured with the time-of-day cloud palette (TOD.cLit, cShade,
//    cRim), the way the procedural clouds are: the painted luminance (the brushwork) sets where each pixel falls between
//    the shade and the lit colour, and the rim facing the sun gets a silver lining.
//  - Each sprite is painted lit from one side; it is mirrored to face the sun (only while it is out of view, so it never
//    flips in front of the camera).
// If the atlas can't be loaded the game keeps its procedural clouds (sky.js).
import * as THREE from 'three';
import { rng } from './util.js';
import { TOD } from './sky.js';

export const ASSETS = './assets/';

/** GLSL: the inverse of post.js's grade pass (Neutral tone mapping with exposure, sRGB, saturation, shadow/highlight
 *  tint, vignette): ungrade(p) is the linear scene colour that comes out of the grade as the display colour p. */
export const UNGRADE = /* glsl */`
uniform float toneMappingExposure, uSat, uVig, uDay; uniform vec3 uLo; uniform vec2 uGRes;
vec3 pgSrgbToLin(vec3 c){ return mix(pow((c + 0.055) / 1.055, vec3(2.4)), c / 12.92, step(c, vec3(0.04045))); }
vec3 pgInvNeutral(vec3 o){
  const float SC = 0.76, D = 0.24;
  o = clamp(o, 0.0, 0.985);
  float np = max(o.r, max(o.g, o.b));
  vec3 c = o;
  if (np >= SC) {
    float peak = D * D / (1.0 - np) - D + SC;
    float g = 1.0 - 1.0 / (0.15 * (peak - np) + 1.0);
    c = (o - g * np) / max(1.0 - g, 1e-3) * (peak / np);
  }
  float m = min(c.r, min(c.g, c.b));
  float off = m < 0.04 ? sqrt(max(m, 0.0) / 6.25) - m : 0.04;
  return (c + off) / toneMappingExposure;
}
vec3 ungrade(vec3 p){
  vec2 v = gl_FragCoord.xy / uGRes - 0.5;
  p /= max(1.0 - dot(v, v) * uVig, 0.2);
  const vec3 LW = vec3(0.299, 0.587, 0.114), WARM = vec3(0.03, 0.014, -0.018);
  float lo = dot(uLo, LW), wl = dot(WARM, LW) * uDay;
  float l = (dot(p, LW) - lo) / (1.0 - lo + wl);
  vec3 c2 = p - uLo * (1.0 - l) - WARM * l * uDay;
  vec3 c = l + (c2 - l) / uSat;
  return pgInvNeutral(pgSrgbToLin(clamp(c, 0.0, 1.0)));
}`;
/** the drawing buffer's size (the vignette of ungrade); set on resize */
export const PG_RES = { value: new THREE.Vector2(1280, 720) };
export function updatePainted(renderer) { renderer.getDrawingBufferSize(PG_RES.value); }
/** the grade pass's own uniform objects, shared, so painted materials follow the grade every frame */
export function gradeUniforms(post) {
  const g = post.grade.uniforms;
  return { toneMappingExposure: g.toneMappingExposure, uSat: g.uSat, uVig: g.uVig, uDay: g.uDay, uLo: g.uLo, uGRes: PG_RES };
}

/** Loads the cloud atlas: 'hi' (4096×2048) or 'lo' (2048×1024, phones). Resolves to null (never rejects) when the
 *  JSON or the image is missing, broken or too slow: the caller then keeps the procedural clouds. */
export async function loadCloudAtlas(tier, timeoutMs = 15000) {
  const base = ASSETS + 'clouds/';
  const work = (async () => {
    const r = await fetch(base + 'clouds.json');
    if (!r.ok) throw new Error('clouds.json ' + r.status);
    const J = await r.json();
    const list = (J.clouds || []).filter(c => c.u1 > c.u0 && c.v1 > c.v0 && c.w > 0 && c.h > 0 && c.lum && c.lum[1] > c.lum[0]);
    if (!list.length) throw new Error('no clouds listed');
    // (fetched whole and checked against its listed size first: a browser decodes a truncated image without complaint,
    // which would leave an empty sky)
    const file = J.files[tier] ? tier : 'hi', ri = await fetch(base + J.files[file]);
    if (!ri.ok) throw new Error(J.files[file] + ' ' + ri.status);
    const blob = await ri.blob();
    if (J.bytes && J.bytes[file] && blob.size !== J.bytes[file]) throw new Error(J.files[file] + ' is ' + blob.size + ' bytes, not ' + J.bytes[file]);
    const url = URL.createObjectURL(blob);
    let tex;
    try { tex = await new THREE.TextureLoader().loadAsync(url); } catch (e) { URL.revokeObjectURL(url); throw e; }
    tex.onUpdate = () => { URL.revokeObjectURL(url); tex.onUpdate = null; }; // (once it is on the GPU)
    tex.colorSpace = THREE.NoColorSpace; // the raw painted (display) values: ungrade() expects them
    tex.generateMipmaps = true; tex.minFilter = THREE.LinearMipmapLinearFilter; tex.magFilter = THREE.LinearFilter;
    return { tex, list, tier };
  })();
  let timer;
  const late = new Promise(res => { timer = setTimeout(() => res(null), timeoutMs); });
  try { return await Promise.race([work, late]); }
  catch (e) { console.warn('painted clouds unavailable, keeping the procedural ones:', e.message || e); return null; }
  finally { clearTimeout(timer); }
}

// The sky's composition, after the references: giant towers rising from just below the horizon up past the top of the
// frame (2–3 in any view), cumulus between and in front of their feet, a low bank along the horizon behind them, and
// smaller cumulus floating higher up (they fill the taller sky of a portrait phone). The ring is fixed in the world
// (the clouds stay put while the road turns), turned once at the start so two tall towers flank the road ahead, as in
// the country and coast paintings (or, where the sky is a narrow slot over the road, as in the sakura avenue and the
// shopping street, so one tall tower stands right over it). Angles in degrees.
//  role, count, distance (m), base elevation, angular height, sprite kinds it takes (first = preferred), haze at the base
const ROLES = [
  ['tower', 10, [4300, 4800], [-1.6, -0.4], [22, 33], ['tower'], 0.3],
  ['bank', 8, [4820, 4960], [-1.2, 0.2], [5, 8.5], ['wide', 'mid'], 0.42],
  ['mid', 8, [3500, 4200], [-1.0, 2.0], [9, 15], ['mid', 'wide', 'tower'], 0.26],
  ['high', 7, [2300, 3200], [11, 27], [6, 11], ['mid', 'wide', 'tower'], 0.0],
];
const SEP = (140 * Math.PI) / 180; // two uses of one sprite are never closer than this (never both in one view)
const D2R = Math.PI / 180;
const wrapA = a => Math.atan2(Math.sin(a), Math.cos(a));

function layout(list, seed) {
  const r = rng(seed), out = [];
  const a0 = r() * Math.PI * 2, step = (Math.PI * 2) / ROLES[0][1];
  for (const [role, n, dR, eR, hR, kinds, haze] of ROLES) {
    for (let i = 0; i < n; i++) {
      let phi;
      if (role === 'tower') phi = a0 + i * step + r.range(-0.22, 0.22) * step;
      else if (role === 'mid') phi = a0 + (i + 0.5) * step * (ROLES[0][1] / n) + r.range(-0.2, 0.2) * step;
      else if (role === 'high') phi = a0 + (i * (ROLES[0][1] / n) + 0.5) * step + r.range(-0.3, 0.3) * step;
      else phi = a0 + ((i + r()) / n) * Math.PI * 2;
      out.push({ role, kinds, phi, d: r.range(dR[0], dR[1]), e0: r.range(eR[0], eR[1]) * D2R, ah: r.range(hR[0], hR[1]) * D2R, haze, k: -1, flip: false });
    }
  }
  // sprites: the least used one of the preferred kinds that has no other use within SEP (a random pick among equals)
  const uses = list.map(() => []);
  const order = out.map((c, i) => i);
  for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)), t = order[i]; order[i] = order[j]; order[j] = t; }
  for (const i of order) {
    const c = out[i];
    let best = -1, bestS = 1e9;
    list.forEach((s, k) => {
      const pref = c.kinds.indexOf(s.kind); if (pref < 0) return;
      const clash = uses[k].some(p => Math.abs(wrapA(p - c.phi)) < SEP);
      const sc = (clash ? 1000 : 0) + uses[k].length * 10 + pref * 4 + r();
      if (sc < bestS) { bestS = sc; best = k; }
    });
    if (best < 0) best = Math.floor(r() * list.length);
    c.k = best; uses[best].push(c.phi);
  }
  for (const c of out) {
    const s = list[c.k], y0 = c.d * Math.tan(c.e0);
    c.y0 = y0; c.h = c.d * Math.tan(c.e0 + c.ah) - y0; c.w = (c.h * s.w) / s.h;
    c.half = Math.atan2(c.w / 2, c.d); // angular half-width
  }
  return out.sort((a, b) => b.d - a.d); // far → near, for blending (one instanced draw, in order)
}

/** The painted cloud field. `atlas` from loadCloudAtlas; `post` for the grade's uniforms. update(camera, dt) each frame. */
export function makePaintedClouds(atlas, post, seed = 5) {
  const L = atlas.list, C = layout(L, seed), N = C.length;
  const geo = new THREE.PlaneGeometry(1, 1); geo.translate(0, 0.5, 0);
  const aRect = new THREE.InstancedBufferAttribute(new Float32Array(N * 4), 4);
  const aInfo = new THREE.InstancedBufferAttribute(new Float32Array(N * 4), 4); // mirrored, lum lo, 1/(hi−lo), haze
  const aRim = new THREE.InstancedBufferAttribute(new Float32Array(N), 1);
  geo.setAttribute('aRect', aRect); geo.setAttribute('aInfo', aInfo); geo.setAttribute('aRim', aRim);
  C.forEach((c, i) => {
    const s = L[c.k];
    aRect.setXYZW(i, s.u0, s.v0, s.u1 - s.u0, s.v1 - s.v0);
    aInfo.setXYZW(i, 0, s.lum[0], 1 / Math.max(0.05, s.lum[1] - s.lum[0]), c.haze);
  });
  // (one blended pass, far → near: drawing the opaque cores in a separate opaque pass measured no faster)
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, fog: false, premultipliedAlpha: true,
    uniforms: {
      map: { value: atlas.tex }, uLit: { value: new THREE.Color() }, uShade: { value: TOD.cShade }, uRimCol: { value: TOD.cRim }, uHaze: { value: TOD.horizon },
      uPaint: { value: 1 }, uOpacity: { value: 1 }, uRimLod: { value: atlas.tier === 'hi' ? 3.0 : 2.0 }, ...gradeUniforms(post),
    },
    vertexShader: /* glsl */`
      attribute vec4 aRect, aInfo; attribute float aRim; varying vec2 vUv; varying vec4 vInfo; varying float vRim, vY;
      void main(){
        vUv = aRect.xy + vec2(aInfo.x > 0.5 ? 1.0 - uv.x : uv.x, uv.y) * aRect.zw; vInfo = aInfo; vRim = aRim; vY = uv.y;
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: UNGRADE + /* glsl */`
      uniform sampler2D map; uniform vec3 uLit, uShade, uRimCol, uHaze; uniform float uPaint, uOpacity, uRimLod;
      varying vec2 vUv; varying vec4 vInfo; varying float vRim, vY;
      void main(){
        vec4 t = texture2D(map, vUv);
        if (t.a < 0.004) discard;
        vec3 c = vec3(0.0);
        if (uPaint < 0.999) { // the time-of-day palette, keeping the brushwork (the painted luminance) and a silver lining
          float k = clamp((dot(t.rgb, vec3(0.299, 0.587, 0.114)) - vInfo.y) * vInfo.z, 0.0, 1.0);
          float rim = 1.0 - smoothstep(0.35, 0.95, textureLod(map, vUv, uRimLod).a);
          c = mix(uShade, uLit, k) + uRimCol * rim * smoothstep(0.35, 0.8, k) * vRim;
        }
        if (uPaint > 0.001) c = mix(c, clamp(ungrade(t.rgb), 0.0, 2.0), uPaint); // a bright day: the painting itself
        c = mix(c, uHaze, vInfo.w * (1.0 - smoothstep(0.0, 0.45, vY)));         // the far feet melt into the horizon haze
        gl_FragColor = vec4(c, 1.0) * (t.a * uOpacity);
      }`,
  });
  const mesh = new THREE.InstancedMesh(geo, mat, N);
  mesh.frustumCulled = false; mesh.renderOrder = -5;
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), sc = new THREE.Vector3(), Y = new THREE.Vector3(0, 1, 0), fw = new THREE.Vector3();
  let first = true;
  /** the opening view: turn the ring so the gap between two neighbouring towers is centred on the road ahead (the
   *  two flank it, ~15° either side), or ('center') so the nearest tower stands over it; and raise those past the top
   *  of the frame */
  function frame(az, mode) {
    const T = C.filter(c => c.role === 'tower').sort((a, b) => wrapA(a.phi - az) - wrapA(b.phi - az));
    let best = null, bd = 1e9;
    for (let i = 0; i < T.length; i++) {
      const a = T[i], b = T[(i + 1) % T.length], mid = mode === 'center' ? a.phi : a.phi + wrapA(b.phi - a.phi) / 2, d = Math.abs(wrapA(mid - az));
      if (d < bd) { bd = d; best = mode === 'center' ? [a, a, mid] : [a, b, mid]; }
    }
    if (!best) return;
    const [a, b, mid] = best, rot = wrapA(az - mid);
    for (const c of C) c.phi += rot;
    for (const c of new Set([a, b])) { // (taller, keeping the sprite's aspect)
      const ah = Math.max(c.ah, 31 * D2R), h = c.d * Math.tan(c.e0 + ah) - c.y0;
      c.w *= h / c.h; c.h = h; c.ah = ah; c.half = Math.atan2(c.w / 2, c.d);
    }
  }
  const api = {
    mesh, count: N,
    /** the opening composition (set before the first update): 'flank' or 'center' */
    opening: 'flank',
    /** (test) the layout, for checks */
    layout: C,
    update(camera, dt) {
      const cam = camera.position, sunAz = Math.atan2(TOD.lightDir.x, TOD.lightDir.z);
      camera.getWorldDirection(fw);
      const camAz = Math.atan2(fw.x, fw.z), halfH = Math.atan(Math.tan((camera.fov * D2R) / 2) * camera.aspect);
      if (first) frame(camAz, api.opening);
      for (let i = 0; i < N; i++) {
        const c = C[i];
        c.phi += (dt * 1.2) / c.d; // the slow drift of the procedural clouds
        p.set(cam.x + Math.sin(c.phi) * c.d, cam.y + c.y0, cam.z + Math.cos(c.phi) * c.d);
        q.setFromAxisAngle(Y, c.phi + Math.PI); sc.set(c.w, c.h, 1);
        m.compose(p, q, sc); mesh.setMatrixAt(i, m);
        // lit side towards the sun (the moon at night): mirror the sprite when the light is on its other side — only
        // when that is clear (not with the light straight behind it or behind us) and the cloud is out of view
        const dAz = wrapA(sunAz - c.phi), flip = dAz > 0 !== L[c.k].litLeft;
        if (flip !== c.flip && Math.abs(Math.sin(dAz)) > 0.2 && (first || Math.abs(wrapA(c.phi - camAz)) > halfH + c.half + 0.05)) c.flip = flip;
        aInfo.setX(i, c.flip ? 1 : 0);
        const fr = Math.max(Math.cos(dAz), 0);
        aRim.setX(i, 0.35 + 0.9 * fr * fr * fr * (0.4 + TOD.warm));
      }
      first = false;
      mesh.instanceMatrix.needsUpdate = true; aInfo.needsUpdate = true; aRim.needsUpdate = true;
      const u = mat.uniforms;
      // a bright clear day shows the painting; dawn, golden hour, dusk, night and grey skies blend to the time-of-day
      // palette (by golden hour, TOD.bright 0.4, it is all palette: the noon painting's whites, run through the inverse
      // grade, are bright enough there to bloom)
      { const b = Math.min(Math.max((TOD.bright - 0.55) / 0.4, 0), 1); u.uPaint.value = b * b * (3 - 2 * b); }
      u.uLit.value.copy(TOD.cLit).multiplyScalar(1 + 0.35 * TOD.bright);
      // as the procedural clouds: dimmer at night, and in rain they melt into the low grey deck the sky draws
      u.uOpacity.value = (1 - TOD.night * 0.35) * (1 - TOD.overcast * 0.55) * (1 - 0.85 * TOD.rain);
    },
  };
  return api;
}
