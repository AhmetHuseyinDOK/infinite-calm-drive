// Painted pieces of the reference art inside the 3D world. For now: the cumulus. Painted clouds are cut from the four
// reference paintings (SAM mattes) and generated in their style (Grok Imagine), packed into one atlas
// (assets/clouds/, made by ~/cdtest/pc/scripts/packclouds.py) and drawn as one instanced mesh of camera-facing billboards
// around the horizon.
//  - On a bright clear day they are the paintings themselves: their shader runs the exact inverse of the grade pass
//    (`ungrade`), so the frame shows the painted colours while the 3D world around them keeps the game's light.
//  - At golden hour, sunset and night they are recoloured with a palette read from the paintings repainted at those hours
//    (ref/tod/): the painted luminance (the brushwork) sets where each pixel falls between the shade, middle and lit tones,
//    and the rim facing the sun gets a silver lining. Under grey skies, the old time-of-day palette (TOD.cLit, cShade, cRim),
//    as the procedural clouds'.
//  - Each sprite is painted lit from one side; it is mirrored to face the sun (only while it is out of view, so it never
//    flips in front of the camera).
// If the atlas can't be loaded the game keeps its procedural clouds (sky.js).
import * as THREE from 'three';
import { rng } from './util.js';
import { TOD } from './sky.js';
import { S_WRAP, U as MU } from './materials.js';

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
/** ungrade() on the CPU, for a few flat colours a frame (the painted sea, sea.js): the linear scene colour that the grade
 *  pass turns into the display colour (r, g, b) (0…255), at the middle of the frame (no vignette). `g`: the grade's
 *  uniforms (post.grade.uniforms); writes `out` (a THREE.Color) and returns it. */
const UG_LW = [0.299, 0.587, 0.114], UG_WARM = [0.03, 0.014, -0.018];
const ugLin = c => (c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
const _ug = [0, 0, 0];
const ugCh = (p, lv, w, l, day, sat) => { const c2 = p - lv * (1 - l) - w * l * day; return Math.min(0.985, Math.max(0, ugLin(Math.min(1, Math.max(0, l + (c2 - l) / sat))))); };
export function ungradeRGB(g, r, gr, b, out) {
  const exp = g.toneMappingExposure.value, sat = g.uSat.value, lo = g.uLo.value, day = g.uDay.value;
  const p0 = r / 255, p1 = gr / 255, p2 = b / 255;
  const loL = lo.x * UG_LW[0] + lo.y * UG_LW[1] + lo.z * UG_LW[2], wl = (UG_WARM[0] * UG_LW[0] + UG_WARM[1] * UG_LW[1] + UG_WARM[2] * UG_LW[2]) * day;
  const l = (p0 * UG_LW[0] + p1 * UG_LW[1] + p2 * UG_LW[2] - loL) / (1 - loL + wl);
  _ug[0] = ugCh(p0, lo.x, UG_WARM[0], l, day, sat); _ug[1] = ugCh(p1, lo.y, UG_WARM[1], l, day, sat); _ug[2] = ugCh(p2, lo.z, UG_WARM[2], l, day, sat);
  // the inverse of three's Neutral tone mapping (as pgInvNeutral)
  const SC = 0.76, D = 0.24, np = Math.max(_ug[0], _ug[1], _ug[2]);
  if (np >= SC) {
    const peak = (D * D) / (1 - np) - D + SC, gg = 1 - 1 / (0.15 * (peak - np) + 1), k = peak / np;
    for (let i = 0; i < 3; i++) _ug[i] = ((_ug[i] - gg * np) / Math.max(1 - gg, 1e-3)) * k;
  }
  const m = Math.min(_ug[0], _ug[1], _ug[2]), off = m < 0.04 ? Math.sqrt(Math.max(m, 0) / 6.25) - m : 0.04;
  return out.setRGB((_ug[0] + off) / exp, (_ug[1] + off) / exp, (_ug[2] + off) / exp);
}
/** Painted tones by time of day. The reference paintings are bright days; for golden hour, sunset and night the same
 *  scenes were repainted (Grok Imagine edits of each painting, ref/tod/) and each painted piece's tones read from them by
 *  the same roles as its day tones. keys: [[t, { tone: [r, g, b] (display sRGB, 0…255), … }], …], t rising from 0 to 1
 *  (as sky.js KEYS). at(t) blends the two keys around t (smoothly, as KEYS); ug(grade, tone, out) writes a tone as the
 *  linear scene colour that the grade shows as it (ungradeRGB); rgb(tone) is the blended display colour. No allocation. */
export function todTones(keys) {
  const names = Object.keys(keys[0][1]), cur = {};
  for (const n of names) cur[n] = [0, 0, 0];
  return {
    cur,
    at(t) {
      let k = 0; while (k < keys.length - 2 && keys[k + 1][0] <= t) k++;
      const a = keys[k], b = keys[k + 1], x = Math.min(Math.max((t - a[0]) / (b[0] - a[0]), 0), 1), f = x * x * (3 - 2 * x);
      for (const n of names) { const A = a[1][n], B = b[1][n], o = cur[n]; o[0] = A[0] + (B[0] - A[0]) * f; o[1] = A[1] + (B[1] - A[1]) * f; o[2] = A[2] + (B[2] - A[2]) * f; }
      return this;
    },
    ug(grade, n, out) { const c = cur[n]; return ungradeRGB(grade, c[0], c[1], c[2], out); },
    rgb(n) { return cur[n]; },
  };
}
/** mixes two tone sets (display sRGB): a new key between them (k: 0 → a, 1 → b) */
export function mixTones(a, b, k) {
  const o = {};
  for (const n of Object.keys(a)) o[n] = [0, 1, 2].map(i => a[n][i] + (b[n][i] - a[n][i]) * k);
  return o;
}
/** how much of the painted look, by the weather: all of it under a clear sky at any hour, none under grey skies and in
 *  rain (they keep their own look). (PAINT_TOD.on, a test switch, main.js st.todpaint: 0 = only on a bright day, as before) */
export const PAINT_TOD = { on: 1 };
export const paintSky = () => { const k = Math.min(Math.max(((PAINT_TOD.on ? 1 - TOD.overcast : TOD.bright) - 0.55) / 0.4, 0), 1); return k * k * (3 - 2 * k); };

/** the drawing buffer's size (the vignette of ungrade); set on resize */
export const PG_RES = { value: new THREE.Vector2(1280, 720) };
export function updatePainted(renderer) { renderer.getDrawingBufferSize(PG_RES.value); }
/** the grade pass's own uniform objects, shared, so painted materials follow the grade every frame */
export function gradeUniforms(post) {
  const g = post.grade.uniforms;
  return { toneMappingExposure: g.toneMappingExposure, uSat: g.uSat, uVig: g.uVig, uDay: g.uDay, uLo: g.uLo, uGRes: PG_RES };
}

/** The image of one tier of a painted atlas, as a texture of the raw painted (display) values (ungrade() expects them).
 *  It is fetched whole and checked against its listed size first: a browser decodes a truncated image without complaint,
 *  which would leave an empty sky. Throws when it is missing or broken. */
async function paintedTexture(base, J, tier) {
  const file = J.files[tier] ? tier : 'hi', ri = await fetch(base + J.files[file]);
  if (!ri.ok) throw new Error(J.files[file] + ' ' + ri.status);
  const blob = await ri.blob();
  if (J.bytes && J.bytes[file] && blob.size !== J.bytes[file]) throw new Error(J.files[file] + ' is ' + blob.size + ' bytes, not ' + J.bytes[file]);
  const url = URL.createObjectURL(blob);
  let tex;
  try { tex = await new THREE.TextureLoader().loadAsync(url); } catch (e) { URL.revokeObjectURL(url); throw e; }
  tex.onUpdate = () => { URL.revokeObjectURL(url); tex.onUpdate = null; }; // (once it is on the GPU)
  tex.colorSpace = THREE.NoColorSpace;
  tex.generateMipmaps = true; tex.minFilter = THREE.LinearMipmapLinearFilter; tex.magFilter = THREE.LinearFilter;
  return { tex, file };
}
/** `work` (a promise), or null if it fails or takes longer than timeoutMs (never rejects) */
export async function orNull(work, timeoutMs, what) {
  let timer;
  const late = new Promise(res => { timer = setTimeout(() => res(null), timeoutMs); });
  try { return await Promise.race([work, late]); }
  catch (e) { console.warn(what, e.message || e); return null; }
  finally { clearTimeout(timer); }
}

/** Loads the cloud atlas: 'hi' (4096×2048) or 'lo' (2048×1024, phones). Resolves to null (never rejects) when the
 *  JSON or the image is missing, broken or too slow: the caller then keeps the procedural clouds. */
export async function loadCloudAtlas(tier, timeoutMs = 15000) {
  const base = ASSETS + 'clouds/';
  return orNull((async () => {
    const r = await fetch(base + 'clouds.json');
    if (!r.ok) throw new Error('clouds.json ' + r.status);
    const J = await r.json();
    const list = (J.clouds || []).filter(c => c.u1 > c.u0 && c.v1 > c.v0 && c.w > 0 && c.h > 0 && c.lum && c.lum[1] > c.lum[0]);
    if (!list.length) throw new Error('no clouds listed');
    const { tex } = await paintedTexture(base, J, tier);
    return { tex, list, tier };
  })(), timeoutMs, 'painted clouds unavailable, keeping the procedural ones:');
}

/** Loads the shopping street's painted fronts (assets/fronts/fronts2.*, made by ~/cdtest/cf2/scripts/pack2.py from Grok
 *  Imagine edits anchored on the city painting): eleven warm-lit shopfront bays (a general store, a bookshop, a noren'd
 *  entrance, a café, a bakery, a florist, a clothes shop, a ramen shop, a tea shop, a sweets shop, an izakaya) and five
 *  upper-floor bays, flat-on, with what glows in them (rows of emissive tiles under the albedo ones; an unlit window has
 *  none, ey −1). They are drawn into their cells of the painted atlas (textures.js buildPaintedAtlas) before it goes to the
 *  GPU. 'hi' (360×432 px a bay) or 'lo' (half that: phones, the embed). Resolves to null (never rejects) when the index or
 *  the image is missing, broken, truncated or too slow: the cells then keep their procedural paint. */
export async function loadFrontAtlas(tier, timeoutMs = 15000) {
  const base = ASSETS + 'fronts/';
  return orNull((async () => {
    const r = await fetch(base + 'fronts2.json');
    if (!r.ok) throw new Error('fronts2.json ' + r.status);
    const J = await r.json();
    const tiles = (J.tiles || []).filter(t => t.name && t.w > 0 && t.h > 0 && t.x >= 0 && t.x + t.w <= 1 && t.y >= 0 && t.y + t.h <= 1 && t.ey + t.h <= 1);
    if (!tiles.length) throw new Error('no fronts listed');
    const file = J.files && J.files[tier] ? tier : 'hi', ri = await fetch(base + J.files[file]);
    if (!ri.ok) throw new Error(J.files[file] + ' ' + ri.status);
    const blob = await ri.blob(); // (checked whole: a truncated image decodes without complaint)
    if (J.bytes && J.bytes[file] && blob.size !== J.bytes[file]) throw new Error(J.files[file] + ' is ' + blob.size + ' bytes, not ' + J.bytes[file]);
    const img = await createImageBitmap(blob);
    if (J.size && J.size[file] && (img.width !== J.size[file][0] || img.height !== J.size[file][1])) throw new Error(J.files[file] + ' has the wrong size');
    return { img, tiles, tier: file };
  })(), timeoutMs, 'painted fronts unavailable, keeping the procedural shopfronts:');
}

/** Loads the painted houses of the country, the coast and the cherry avenue (assets/houses/, made by
 *  ~/cdtest/hs/scripts/pack.py from asset batch 1's elevations and Grok Imagine gable ends, anchored on the reference
 *  art): a sheet of flat elevations (front = eave side, gable end) cut out on their alpha, the lit windows' emissive tiles
 *  under them, and each house type's 3D pieces. The tiles are drawn into cells of their own in the painted atlas
 *  (textures.js buildPaintedAtlas, paintHouses), so the houses take them with no new material or draw. 'hi' (48 px/m) or 'lo' (32 px/m: phones,
 *  the embed). Resolves to null (never rejects) when the index or the image is missing, broken, truncated or too slow:
 *  the houses then keep their procedural look (props.js woodHouse). */
export async function loadHouseAtlas(tier, timeoutMs = 15000) {
  const base = ASSETS + 'houses/';
  return orNull((async () => {
    const r = await fetch(base + 'houses.json');
    if (!r.ok) throw new Error('houses.json ' + r.status);
    const J = await r.json();
    const file = J.files && J.files[tier] ? tier : 'hi', tiles = (J.tiles && J.tiles[file]) || [];
    const types = (J.types || []).filter(t => t.f && t.s && t.pieces && t.pieces.length && tiles.some(q => q.name === t.f) && tiles.some(q => q.name === t.s));
    if (!types.length || !(J.rows && J.rows[file] > 0)) throw new Error('no houses listed');
    const ri = await fetch(base + J.files[file]);
    if (!ri.ok) throw new Error(J.files[file] + ' ' + ri.status);
    const blob = await ri.blob(); // (checked whole: a truncated image decodes without complaint)
    if (J.bytes && J.bytes[file] && blob.size !== J.bytes[file]) throw new Error(J.files[file] + ' is ' + blob.size + ' bytes, not ' + J.bytes[file]);
    const img = await createImageBitmap(blob, { premultiplyAlpha: 'none' });
    if (J.size && J.size[file] && (img.width !== J.size[file][0] || img.height !== J.size[file][1])) throw new Error(J.files[file] + ' has the wrong size');
    if (tiles.some(t => !(t.w > 0 && t.h > 0 && t.x >= 0 && t.x + t.w <= img.width && t.ey + t.h <= img.height))) throw new Error('a tile lies outside the sheet');
    return { img, tiles, types, rows: J.rows[file], tier: file };
  })(), timeoutMs, 'painted houses unavailable, keeping the procedural ones:');
}

/** Loads the painted meadow (assets/fields/, made by ~/cdtest/ft/scripts/field.py): a tileable top-down painting of the
 *  country paintings' grass, 'hi' or 'lo' (phones, the embed). Resolves to null (never rejects) when the index or the
 *  image is missing, broken, truncated or too slow: the countryside then keeps its procedural paddies. */
export async function loadFieldTexture(tier, timeoutMs = 15000) {
  const base = ASSETS + 'fields/';
  return orNull((async () => {
    const r = await fetch(base + 'fields.json');
    if (!r.ok) throw new Error('fields.json ' + r.status);
    const J = await r.json();
    // (its length along the road must divide the shaders' wrapped road distance, S_WRAP, or it would jump there)
    if (!(J.tile && J.tile[0] > 0 && J.tile[1] > 0 && Math.abs(S_WRAP / J.tile[1] - Math.round(S_WRAP / J.tile[1])) < 1e-6)) throw new Error('bad tile size');
    if (!(J.mean && J.mean.length === 3)) throw new Error('no average colour listed');
    const { tex, file } = await paintedTexture(base, J, tier);
    tex.colorSpace = THREE.SRGBColorSpace; tex.wrapS = tex.wrapT = THREE.RepeatWrapping; // (albedo: decoded to linear)
    return { tex, tile: J.tile, mean: J.mean, tier: file };
  })(), timeoutMs, 'painted fields unavailable, keeping the procedural paddies:');
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

// the painted cumulus's palette by time of day (display sRGB): its shade, middle and lit tones by the painted (day)
// lightness, and the silver lining towards the sun, read from the four paintings repainted at golden hour, at sunset and
// at night (ref/tod/; the zones' ramps averaged): honey and peach at golden hour, salmon and orange over mauve at sunset,
// moonlit blue-grey at night. By day the clouds are the painting itself (these only show while it hands over)
const CL_DAY = { shade: [172, 196, 234], mid: [214, 226, 246], lit: [246, 249, 253], rim: [255, 246, 228] };
const CL_GOLD = { shade: [137, 114, 117], mid: [184, 147, 138], lit: [238, 196, 146], rim: [255, 214, 150] };
const CL_SUNSET = { shade: [96, 65, 92], mid: [158, 82, 98], lit: [226, 124, 100], rim: [242, 172, 122] };
const CL_NIGHT = { shade: [33, 58, 90], mid: [45, 76, 116], lit: [78, 112, 152], rim: [140, 166, 200] };
// (dusk: the high clouds keep the afterglow, lilac over a slate shade, on the way from the sunset's salmon to the moonlit grey)
const CL_DUSK = { shade: [58, 56, 96], mid: [104, 86, 132], lit: [170, 128, 168], rim: [214, 150, 170] };
const CLOUD_TONES = todTones([
  [0.0, CL_NIGHT], [0.2, mixTones(CL_NIGHT, CL_DUSK, 0.5)], [0.245, mixTones(CL_SUNSET, CL_GOLD, 0.4)], [0.3, CL_DAY], [0.62, CL_DAY],
  [0.7, CL_GOLD], [0.75, CL_SUNSET], [0.765, mixTones(CL_SUNSET, CL_DUSK, 0.4)], [0.8, CL_DUSK], [0.86, CL_NIGHT], [1.0, CL_NIGHT],
]);
const _cm = new THREE.Color();

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
      map: { value: atlas.tex }, uLit: { value: new THREE.Color() }, uMid: { value: new THREE.Color() }, uShade: { value: new THREE.Color() }, uRimCol: { value: new THREE.Color() }, uHaze: { value: TOD.horizon },
      uPaint: { value: 1 }, uOpacity: { value: 1 }, uRimLod: { value: atlas.tier === 'hi' ? 3.0 : 2.0 }, ...gradeUniforms(post),
    },
    vertexShader: /* glsl */`
      attribute vec4 aRect, aInfo; attribute float aRim; varying vec2 vUv; varying vec4 vInfo; varying float vRim, vY;
      void main(){
        vUv = aRect.xy + vec2(aInfo.x > 0.5 ? 1.0 - uv.x : uv.x, uv.y) * aRect.zw; vInfo = aInfo; vRim = aRim; vY = uv.y;
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: UNGRADE + /* glsl */`
      uniform sampler2D map; uniform vec3 uLit, uMid, uShade, uRimCol, uHaze; uniform float uPaint, uOpacity, uRimLod;
      varying vec2 vUv; varying vec4 vInfo; varying float vRim, vY;
      void main(){
        vec4 t = texture2D(map, vUv);
        if (t.a < 0.004) discard;
        vec3 c = vec3(0.0);
        if (uPaint < 0.999) { // the time-of-day palette, keeping the brushwork (the painted luminance) and a silver lining
          float k = clamp((dot(t.rgb, vec3(0.299, 0.587, 0.114)) - vInfo.y) * vInfo.z, 0.0, 1.0);
          float rim = 1.0 - smoothstep(0.35, 0.95, textureLod(map, vUv, uRimLod).a);
          c = (k < 0.5 ? mix(uShade, uMid, k * 2.0) : mix(uMid, uLit, k * 2.0 - 1.0)) + uRimCol * rim * smoothstep(0.35, 0.8, k) * vRim;
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
      // the palette: under a clear sky the targets' cloud tones by the time of day (ref/tod/, read by the painted day
      // lightness of each cloud pixel: ~/cdtest/tod/tools/ramps.py), ungraded; under grey skies the old time-of-day palette
      const g = post.grade.uniforms, P = CLOUD_TONES.at(TOD.t), ov = 1 - paintSky();
      P.ug(g, 'shade', u.uShade.value).lerp(TOD.cShade, ov); P.ug(g, 'mid', u.uMid.value).lerp(_cm.copy(TOD.cShade).lerp(TOD.cLit, 0.5), ov);
      P.ug(g, 'lit', u.uLit.value).lerp(_cm.copy(TOD.cLit).multiplyScalar(1 + 0.35 * TOD.bright), ov); P.ug(g, 'rim', u.uRimCol.value).lerp(TOD.cRim, ov);
      // as the procedural clouds: in rain they melt into the low grey deck the sky draws; at night, under a clear sky, the
      // moonlit cumulus stand as clearly as in the paintings (only dimmer under cloud)
      u.uOpacity.value = (1 - TOD.night * (0.08 + 0.27 * ov)) * (1 - TOD.overcast * 0.55) * (1 - 0.85 * TOD.rain);
    },
  };
  return api;
}

// ------------------------------------------------------------------------------------------------ the horizon band
// A painted 360° horizon per zone (assets/band/, made by ~/cdtest/hb/scripts/band.py): far mountain ranges, forested
// hills, headlands across the bay, painted in the reference art's style (Grok Imagine panoramas, keyed, ordered and
// joined into one seamless loop per zone with LaMa over every join). It replaces the procedural mountain rings
// wherever a zone has one.
//  - Geometry: one ring around the camera, 2.5 km out (in front of the cumulus feet: the towers stand 4.3–5 km away),
//    from 8° below the horizon to the top of the tallest band. The painting's columns are mapped by angle, fixed in
//    the world (the band stays put while the road turns); each zone's loop spans 120°, so it repeats three times around
//    and never twice in one view. Its rows are mapped by elevation: the band's ground line sits just under the horizon
//    of the 3D world, which hides the painting's near fields; below it the painting's last row carries on as far fields
//    (seen only from a high camera, beyond the edge of the 3D world).
//  - Drawn opaque, after the 3D world and the sea (which hide it) and before the sky: the sky dome then skips every
//    pixel it covers (its cirrus noise is not cheap), and so do the cumulus behind it. Its ridges are cut out of the
//    painting's alpha: with MSAA (desktop) the alpha sets each pixel's coverage, so they keep a soft edge and two zones'
//    bands cross-fade smoothly; without it (phones) they are alpha-tested, and a cross-fade hides the moment one
//    skyline gives way to the other in a passing haze.
//  - Colour: on a bright clear day the painting itself (the inverse grade, as for the clouds); under a clear sky at golden
//    hour, sunset and night the painting in that hour's tones, read from the paintings repainted then (ref/tod/: honey
//    ranges, mauve and rose ones, deep blue ones), with the far city's windows lit at night. Under grey skies it is relit:
//    the painted colours times the ratio of the light now to the light at noon, then hazed: more under grey skies and in
//    rain. Below the horizon it takes the haze
//    the 3D world's own fog puts on flat ground at that angle, so its foot melts into the fog colour the world fades
//    into at its far edge: there is no seam where the two meet.
//  - Between zones the two bands cross-fade (premultiplied, so ridges dissolve rather than smear).
// If the atlas can't be loaded the game keeps the procedural mountain rings.

/** Loads the band atlas (assets/band/band2.*: the five zones' bands and, since Restyle 15, the shopping street's far city
 *  of pale high-rise flats in haze, ~/cdtest/hb2/scripts/band2.py): 'hi' (32 px/°) or 'lo' (16 px/°, phones). Resolves to
 *  null (never rejects) when the JSON or the image is missing, broken or too slow: the caller then keeps the procedural
 *  mountain rings. */
export async function loadBandAtlas(tier, timeoutMs = 15000) {
  const base = ASSETS + 'band/';
  return orNull((async () => {
    const r = await fetch(base + 'band2.json');
    if (!r.ok) throw new Error('band2.json ' + r.status);
    const J = await r.json();
    const { tex, file } = await paintedTexture(base, J, tier);
    const zones = {};
    for (const [z, m] of Object.entries((J.zones && J.zones[file]) || {})) {
      if (m.v1 > m.v0 && m.e1 > m.e0) zones[z] = new THREE.Vector4(m.v0, m.v1, Math.tan((m.e0 * Math.PI) / 180), Math.tan((m.e1 * Math.PI) / 180));
    }
    if (!Object.keys(zones).length) throw new Error('no zones listed');
    tex.wrapS = THREE.RepeatWrapping; // (each zone's row is one seamless loop)
    return { tex, zones, period: J.period || 120, tier: file };
  })(), timeoutMs, 'painted horizon unavailable, keeping the mountain rings:');
}

// the horizon band's tones by time of day (display sRGB), read from the paintings repainted at golden hour, sunset and night
// (ref/tod/; the far ranges', hills' and far city's pixels by their painted day lightness: ~/cdtest/tod/tools/ramps.py):
// honey-brown ranges at golden hour, mauve and rose with an orange light on the peaks at sunset, deep blue at night; ch: how
// much of the painting's own colour stays. (By day the band is the painting itself: the day key only shows in hand-overs)
const BT_DAY = { shade: [84, 112, 132], mid: [142, 170, 190], lit: [200, 220, 234], ch: [0.6, 0.6, 0.6] };
const BT_GOLD = { shade: [70, 78, 100], mid: [110, 108, 124], lit: [160, 140, 134], ch: [0.3, 0.3, 0.3] };
const BT_SUNSET = { shade: [46, 36, 58], mid: [84, 56, 84], lit: [130, 76, 92], ch: [0.25, 0.25, 0.25] };
const BT_NIGHT = { shade: [20, 38, 60], mid: [30, 54, 84], lit: [46, 76, 112], ch: [0.12, 0.12, 0.12] };
const BAND_TONES = todTones([
  [0.0, BT_NIGHT], [0.2, mixTones(BT_NIGHT, BT_SUNSET, 0.3)], [0.245, mixTones(BT_SUNSET, BT_GOLD, 0.4)], [0.3, BT_DAY], [0.62, BT_DAY],
  [0.7, BT_GOLD], [0.75, BT_SUNSET], [0.765, mixTones(BT_SUNSET, BT_NIGHT, 0.25)], [0.8, mixTones(BT_SUNSET, BT_NIGHT, 0.55)], [0.86, BT_NIGHT], [1.0, BT_NIGHT],
]);
const BAND_R = 2500, BAND_LO = -8; // ring radius (m) and its bottom (degrees: far fields below the painting)
// the light the paintings stand in: the clear noon's sun and twice its sky light (sky.js KEYS at t = 0.45)
const _bc = new THREE.Vector3(), _bn = new THREE.Color(), NOON_SUN = new THREE.Color('#fff5dd').multiplyScalar(3.35), NOON_SKY = new THREE.Color('#8fb1ec').multiplyScalar(1.35 * 2);

/** The painted horizon. `atlas` from loadBandAtlas; `post` for the grade's uniforms; `fog` the scene's fog colour (the
 *  3D world fades into it at its far edge). update(camera, mix) each frame, with mix = { a, b, t } from path.zoneMix;
 *  returns how much of the view's far horizon the band covers (0…1), for the procedural rings to give way. */
export function makePaintedBand(atlas, post, fog) {
  const Z = atlas.zones, top = Math.max(...Object.values(Z).map(v => v.w)), N = 192, per = 360 / atlas.period;
  const pos = new Float32Array((N + 1) * 6), uv = new Float32Array((N + 1) * 4), idx = [];
  const yLo = Math.tan((BAND_LO * Math.PI) / 180), yHi = top + 0.004;
  for (let i = 0; i <= N; i++) {
    const a = (i / N) * Math.PI * 2, x = Math.sin(a) * BAND_R, z = Math.cos(a) * BAND_R;
    pos.set([x, yLo * BAND_R, z, x, yHi * BAND_R, z], i * 6);
    // u runs the other way round from the angle: looking out from inside the ring, the painting reads left to right
    uv.set([-(i / N) * per, yLo, -(i / N) * per, yHi], i * 4);
    if (i < N) { const k = i * 2; idx.push(k, k + 2, k + 1, k + 1, k + 2, k + 3); }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); geo.setIndex(idx);
  const D2 = Math.PI / 180, a2c = (post.composer.readBuffer.samples || 0) > 0;
  const mat = new THREE.ShaderMaterial({
    fog: false, side: THREE.DoubleSide, alphaToCoverage: a2c, defines: a2c ? { A2C: 1 } : {},
    uniforms: {
      map: { value: atlas.tex }, uRowA: { value: new THREE.Vector4() }, uRowB: { value: new THREE.Vector4() }, uMix: { value: 0 }, uAlpha: { value: 1 }, uRot: { value: 0 },
      uLightC: { value: new THREE.Color(1, 1, 1) }, uPaint: { value: 1 }, uFogC: { value: fog }, uHaze: { value: 0 }, uHz: { value: Math.tan(0.8 * D2) },
      uGnd: { value: new THREE.Vector3(2.8, 0.0014, 700) }, uSpan: { value: new THREE.Vector2(yLo, yHi) }, ...gradeUniforms(post),
      // under a clear sky at golden hour, sunset and night: the painting in the time of day's tones (display sRGB: shade,
      // middle and light by its painted lightness, and how much of its own colour it keeps), and the far city's lit windows
      uTone: { value: 0 }, uBS: { value: new THREE.Vector3() }, uBM: { value: new THREE.Vector3() }, uBH: { value: new THREE.Vector3() }, uBCh: { value: 0 },
      uWin: { value: new THREE.Vector2() }, uLightsOn: MU.uLightsOn,
    },
    // the ring is trimmed every frame to what can show (uSpan: tan of its bottom and top elevation): from just under the
    // 3D world's horizon (lower from a high camera) to the top of the bands on show
    vertexShader: /* glsl */`
      uniform vec2 uSpan; varying vec2 vUv;
      void main(){
        float y = uv.y > 0.0 ? uSpan.y : uSpan.x; vUv = vec2(uv.x, y);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, y * ${BAND_R.toFixed(1)}, position.z, 1.0);
      }`,
    fragmentShader: UNGRADE + /* glsl */`
      uniform sampler2D map; uniform vec4 uRowA, uRowB; uniform float uMix, uAlpha, uRot, uHaze, uHz, uPaint; uniform vec3 uLightC, uFogC, uGnd;
      uniform float uTone, uBCh, uLightsOn; uniform vec3 uBS, uBM, uBH; uniform vec2 uWin;
      varying vec2 vUv;
      // a zone's row: x = v of its bottom edge, y = v of its top edge, z / w = tan(elevation) there. Above it, sky (the
      // top rows fade out: coarse mips bleed the next row's fields into them); below it, its bottom row (opaque far
      // fields, hazed into the fog: the skirt under the painting). Sampled in uniform control flow (mip selection)
      vec4 band(vec4 r){
        float t = (vUv.y - r.z) / (r.w - r.z);
        return texture2D(map, vec2(vUv.x + uRot, mix(r.x, r.y, clamp(t, 0.0, 1.0)))) * (1.0 - smoothstep(0.96, 0.995, t));
      }
      void main(){
        vec4 t = band(uRowA);
        if (uMix > 0.001) { // the next zone's band (premultiplied: ridges dissolve into each other)
          vec4 b = band(uRowB);
          t = vec4(mix(t.rgb * t.a, b.rgb * b.a, uMix), mix(t.a, b.a, uMix));
          t.rgb /= max(t.a, 1e-4);
        }
        float a = t.a * uAlpha;
        #ifdef A2C
        if (a < 0.02) discard; // (the rest: coverage from alpha, resolved by MSAA into a soft edge or a cross-fade)
        #else
        if (a < 0.5) discard;
        #endif
        // a bright day: the painting itself; under a clear sky at golden hour, sunset and night the painting in that hour's
        // tones (as the targets repaint it: its lightness through a shade-middle-light ramp, keeping some of its own colour);
        // under grey skies its colours relit (a plain linear relight, bounded: the inverse grade would blow its pale peaks up
        // past the bloom threshold at dusk)
        vec3 c = pgSrgbToLin(t.rgb) * 0.8 * uLightC;
        if (uTone > 0.001) {
          float l = dot(t.rgb, vec3(0.299, 0.587, 0.114)), k = clamp((l - 0.25) * 1.54, 0.0, 1.0);
          vec3 d = (k < 0.5 ? mix(uBS, uBM, k * 2.0) : mix(uBM, uBH, k * 2.0 - 1.0)) + (t.rgb - l) * uBCh;
          c = mix(c, ungrade(clamp(d, 0.0, 0.97)), uTone);
        }
        if (uPaint > 0.001) c = mix(c, ungrade(t.rgb), uPaint);
        // the far city's windows lit at night (the city's row only): a grid of small windows over its pale towers (the
        // painting's own opaque, light pixels), some lit, warm or cool white, coming on as the town's do
        float win = mix(uWin.x, uWin.y, uMix);
        if (win > 0.003) {
          vec2 wq = vec2((vUv.x + uRot) * 720.0, vUv.y * 400.0), ww = fwidth(wq); // (derivatives first, while every pixel is here)
          // (only the towers' opaque light pixels hold a window, and only a fifth of those windows are lit: the rest skip it)
          if (t.a >= 0.97 && dot(t.rgb, vec3(0.299, 0.587, 0.114)) >= 0.42) {
            vec2 wi = floor(wq), wf = fract(wq) - 0.5;
            vec3 h3 = fract(vec3(wi.xyx) * 0.1031); h3 += dot(h3, h3.yzx + 33.33); float h = fract((h3.x + h3.y) * h3.z);
            if (h <= 0.2 * uLightsOn) {
              float h2 = fract(h * 13.7);
              float box = (1.0 - smoothstep(0.26 - ww.x * 0.5, 0.26 + ww.x * 0.5, abs(wf.x))) * (1.0 - smoothstep(0.22 - ww.y * 0.5, 0.22 + ww.y * 0.5, abs(wf.y)));
              c += mix(vec3(1.25, 0.8, 0.36), vec3(0.85, 0.8, 0.68), step(0.75, h2)) * (0.45 + 0.4 * h2) * box * win;
            }
          }
        }
        // haze: below the horizon as much as the 3D world's own fog puts on flat ground seen at that angle (uGnd: the
        // camera's height above it, the fog density, the draw distance, where the world fades out completely), so the
        // band's foot meets the world's far edge in its colour, and from a high camera the skirt reads as far fields;
        // above it the mountains' feet stand in haze; and more haze all over at dusk, under grey skies and in rain
        float e = vUv.y, hz = 1.0 - smoothstep(0.0, uHz, e);
        if (e < 0.0) { float d = uGnd.x / max(-e, 1e-5), fd = d * uGnd.y; hz = max(1.0 - exp(-fd * fd), smoothstep(uGnd.z * 0.8, uGnd.z, d)); }
        c = mix(c, uFogC, max(uHaze, hz));
        #ifdef A2C
        gl_FragColor = vec4(c, a);
        #else
        gl_FragColor = vec4(c, 1.0);
        #endif
      }`,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false; mesh.renderOrder = 999; // (with the sea and the mountain rings: after the world, before the sky)
  const u = mat.uniforms, fw = new THREE.Vector3();
  let first = true;
  return {
    mesh, zones: Z,
    /** the opening view: where in its loop the band starts, straight ahead (0.125: the middle of its first painting) */
    hero: 0.125,
    /** m: { a, b, t } from path.zoneMix; camH: the camera's height above the ground; fogD / fogFar: the scene fog's
     *  exp² density and draw distance */
    update(camera, m, camH = 2.8, fogD = 0.0014, fogFar = 700) {
      const A = Z[m.a], B = Z[m.b], t = m.t;
      // how much band: a zone without one fades it out and leaves the far horizon to the rings
      let w = 0;
      if (A && B) { u.uRowA.value.copy(A); u.uRowB.value.copy(B); u.uMix.value = A === B ? 0 : t; w = 1; }
      else if (A || B) { u.uRowA.value.copy(A || B); u.uMix.value = 0; w = A ? 1 - t : t; }
      u.uAlpha.value = w;
      mesh.visible = w > 0.002;
      if (!mesh.visible) return 0;
      mesh.position.copy(camera.position); u.uGnd.value.set(camH, fogD, fogFar);
      // the ring from just under the 3D world's horizon (the world hides everything below; from a high camera its edge is
      // lower) to the top of the bands on show
      u.uSpan.value.set(Math.max(yLo, -Math.tan(Math.atan(camH / 140) + 0.3 * D2)), Math.max(A ? A.w : 0, B ? B.w : 0) + 0.003);
      if (first) { // the opening view: the loop's first painting straight ahead
        camera.getWorldDirection(fw);
        u.uRot.value = this.hero + (Math.atan2(fw.x, fw.z) / (Math.PI * 2)) * per; first = false;
      }
      // the light now against the light at noon (sun + sky), and the haze: none on a bright clear day, some at dusk and
      // night, more under grey skies, most in rain; the painting itself on a bright day
      _bn.copy(TOD.sunCol).multiplyScalar(TOD.sunI); _bc.set(_bn.r, _bn.g, _bn.b);
      _bn.copy(TOD.hemiSky).multiplyScalar(TOD.hemiI * 2); _bc.x += _bn.r; _bc.y += _bn.g; _bc.z += _bn.b;
      const k = Math.min(Math.max((TOD.bright - 0.55) / 0.4, 0), 1), paint = k * k * (3 - 2 * k);
      u.uLightC.value.setRGB(_bc.x / (NOON_SUN.r + NOON_SKY.r), _bc.y / (NOON_SUN.g + NOON_SKY.g), _bc.z / (NOON_SUN.b + NOON_SKY.b)); u.uPaint.value = paint;
      // the time of day's tones (all but a bright day's: the painting itself), under a clear sky; the far city's windows
      u.uTone.value = paintSky() * (1 - paint);
      if (u.uTone.value > 0) { const P = BAND_TONES.at(TOD.t); u.uBS.value.fromArray(P.rgb('shade')).divideScalar(255); u.uBM.value.fromArray(P.rgb('mid')).divideScalar(255); u.uBH.value.fromArray(P.rgb('lit')).divideScalar(255); u.uBCh.value = P.rgb('ch')[0]; }
      const nk = Math.min(Math.max((TOD.night - 0.15) / 0.65, 0), 1), wn = nk * nk * (3 - 2 * nk) * (1 - 0.6 * TOD.overcast);
      u.uWin.value.set(m.a === 'city' ? wn * PAINT_TOD.on : 0, m.b === 'city' ? wn * PAINT_TOD.on : 0);
      // (alpha-tested, without MSAA: a passing haze while one zone's skyline gives way to the next, or to the rings)
      const k2 = Math.max(4 * u.uMix.value * (1 - u.uMix.value), Math.min(1, 2 * (1 - w))), fade = a2c ? 0 : 0.45 * k2 * k2 * k2;
      u.uHaze.value = 1 - (1 - (1 - (1 - 0.12 * TOD.warm - 0.25 * TOD.night) * (1 - 0.55 * TOD.overcast) * (1 - 0.6 * TOD.rain)) * (1 - paint)) * (1 - fade);
      return w;
    },
  };
}
