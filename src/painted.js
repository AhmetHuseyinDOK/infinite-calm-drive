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
import { TOD, MOON_EL, MOON_R } from './sky.js';
import { S_WRAP, U as MU } from './materials.js';

// The painted assets' WebPs are encoded from lossless masters (PLAN 14b, ~/cdtest/dl/scripts/pack14b.py: the packers'
// outputs before their WebP step, each proven to re-encode byte-for-byte to the file it replaced): the horizon band, the
// fronts, the houses and the meadow at quality 50, where 2× crops of the game's frames at noon, sunset and night, on
// desktops and phones, could not be told from the old q84–90 files (a first visit fetches ~1.1 MB less on a desktop,
// ~0.34 MB less on a phone); the clouds keep their colour at q88 (their near-white brushwork showed every step below it)
// with a lossless alpha plane (exact, and smaller than the old alpha_quality 90).
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
    const r = await fetch(base + 'clouds2.json');
    if (!r.ok) throw new Error('clouds2.json ' + r.status);
    const J = await r.json();
    const list = (J.clouds || []).filter(c => c.u1 > c.u0 && c.v1 > c.v0 && c.w > 0 && c.h > 0 && c.lum && c.lum[1] > c.lum[0]);
    if (!list.length) throw new Error('no clouds listed');
    const { tex } = await paintedTexture(base, J, tier);
    return { tex, list, tier };
  })(), timeoutMs, 'painted clouds unavailable, keeping the procedural ones:');
}

/** Loads the shopping street's painted fronts (assets/fronts/fronts3.*, made by ~/cdtest/cf2/scripts/pack2.py from Grok
 *  Imagine edits anchored on the city painting): eleven warm-lit shopfront bays (a general store, a bookshop, a noren'd
 *  entrance, a café, a bakery, a florist, a clothes shop, a ramen shop, a tea shop, a sweets shop, an izakaya) and five
 *  upper-floor bays, flat-on, with what glows in them (rows of emissive tiles under the albedo ones; an unlit window has
 *  none, ey −1). They are drawn into their cells of the painted atlas (textures.js buildPaintedAtlas) before it goes to the
 *  GPU. 'hi' (360×432 px a bay) or 'lo' (half that: phones, the embed). Resolves to null (never rejects) when the index or
 *  the image is missing, broken, truncated or too slow: the cells then keep their procedural paint. */
export async function loadFrontAtlas(tier, timeoutMs = 15000) {
  const base = ASSETS + 'fronts/';
  return orNull((async () => {
    const r = await fetch(base + 'fronts3.json');
    if (!r.ok) throw new Error('fronts3.json ' + r.status);
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

/** (step 38) Loads the shophouses' painted pieces (assets/fronts/pieces1.*, made by ~/cdtest/s38/scripts/pack38.py from Grok Imagine edits
 *  of the city painting's own flower boxes): cut-out flower boxes (alpha), drawn over their cells' procedural paint in the painted atlas
 *  (textures.js buildPaintedAtlas). 'hi' or 'lo' (half: phones, the embed), as the fronts. Null (never rejects) when the index or the image
 *  is missing, broken, truncated or too slow: the flower boxes then keep their procedural paint */
export async function loadPieceAtlas(tier, timeoutMs = 15000) {
  const base = ASSETS + 'fronts/';
  return orNull((async () => {
    const r = await fetch(base + 'pieces1.json');
    if (!r.ok) throw new Error('pieces1.json ' + r.status);
    const J = await r.json();
    const tiles = (J.tiles || []).filter(t => t.name && t.w > 0 && t.h > 0 && t.x >= 0 && t.x + t.w <= 1 && t.y >= 0 && t.y + t.h <= 1);
    if (!tiles.length) throw new Error('no pieces listed');
    const file = J.files && J.files[tier] ? tier : 'hi', ri = await fetch(base + J.files[file]);
    if (!ri.ok) throw new Error(J.files[file] + ' ' + ri.status);
    const blob = await ri.blob(); // (checked whole: a truncated image decodes without complaint)
    if (!J.bytes || blob.size !== J.bytes[file]) throw new Error(J.files[file] + ' is ' + blob.size + ' bytes, not ' + (J.bytes && J.bytes[file]));
    const img = await createImageBitmap(blob);
    if (!J.size || img.width !== J.size[file][0] || img.height !== J.size[file][1]) { img.close(); throw new Error(J.files[file] + ' has the wrong size'); }
    return { img, tiles, tier: file };
  })(), timeoutMs, 'painted flower boxes unavailable, keeping their procedural paint:');
}

/** (step 31) Loads the rooms behind the painted shop windows (assets/rooms/rooms1.*, made by ~/cdtest/s31/scripts/packrooms.py from
 *  Grok Imagine edits of a drawn room carrying each bay's own goods): one painted one-point-perspective view a room (its back wall the
 *  middle f × f of it), padded, in one sheet; each painted bay's rooms (.cells: shop_p0 → [room, second room]); and the bays' glass,
 *  a mask sheet laid out as the fronts' albedo tiles (its alpha; a texture of its own: materials.js makeAtlasRooms), with each bay's
 *  glass box (its panes' bounds, a little grown: the room is cast only inside it). 'hi' or 'lo' (half:
 *  phones, the embed), as the fronts. Null (never rejects) when anything is missing, broken, truncated or too slow: the windows then
 *  keep their painted glass (materials.js makeAtlasRooms is not made). Room corners are returned in GL texture space (v up).
 *  (Step 34: name: the sheet, rooms1 (the shopping street's) or a region's (rooms1tr: the Turkish town's and its chain markets', rooms1jp:
 *  Japan's konbini; ~/cdtest/s34/scripts/packrooms2.py), whose glass is listed as each cell's panes and holes ([x0, y0, x1, y1] in
 *  fractions of the cell from its top-left: roomGlass draws them) and whose rooms come in sets (.sets: { name: { cells, bay (m), e } },
 *  a material each). A rooms1-style sheet is one set, 'street') */
export async function loadRoomAtlas(tier, timeoutMs = 15000, name = 'rooms1') {
  const base = ASSETS + 'rooms/';
  return orNull((async () => {
    const r = await fetch(base + name + '.json');
    if (!r.ok) throw new Error(name + '.json ' + r.status);
    const J = await r.json(), file = J.files && J.files[tier] ? tier : 'hi', mk = J.mask || null;
    const sheet = async (F, opt) => { // (checked whole: a truncated image decodes without complaint)
      const ri = await fetch(base + F.files[file]);
      if (!ri.ok) throw new Error(F.files[file] + ' ' + ri.status);
      const blob = await ri.blob();
      if (F.bytes && F.bytes[file] && blob.size !== F.bytes[file]) throw new Error(F.files[file] + ' is ' + blob.size + ' bytes, not ' + F.bytes[file]);
      const img = await createImageBitmap(blob, opt);
      if (F.size && F.size[file] && (img.width !== F.size[file][0] || img.height !== F.size[file][1])) throw new Error(F.files[file] + ' has the wrong size');
      return img;
    };
    const sz = J.room || [0, 0], rooms = {}, okR = v => Array.isArray(v) && v.length === 4 && v[2] > v[0] && v[3] > v[1];
    for (const [n, p] of Object.entries(J.rooms || {})) if (p[0] >= 0 && p[1] >= 0 && p[0] + sz[0] <= 1 && p[1] + sz[1] <= 1) rooms[n] = [p[0], 1 - p[1] - sz[1]];
    // (each set's cells: those with at least one room; with a pane list, at least one pane)
    const sets = {}, panes = {}, setsJ = J.sets || (J.cells ? { street: { cells: J.cells, bay: [3, 3.6], e: J.e || 1 } } : {});
    for (const [n, g] of Object.entries(J.glass || {})) { const pq = (g.panes || []).filter(okR); if (pq.length) panes[n] = { panes: pq, holes: (g.holes || []).filter(okR) }; }
    for (const [sn, S] of Object.entries(setsJ)) {
      const cells = {};
      for (const [c, rs] of Object.entries(S.cells || {})) { const ok = (rs || []).filter(n => rooms[n]); if (ok.length && (mk || panes[c])) cells[c] = ok; }
      const bay = Array.isArray(S.bay) && S.bay[0] > 0 && S.bay[1] > 0 ? S.bay : [3, 3.6], e = Array.isArray(S.e) ? S.e : [S.e || 1, S.e || 1, S.e || 1];
      if (Object.keys(cells).length) sets[sn] = { cells, bay, e };
    }
    if (!(sz[0] > 0 && sz[1] > 0) || !Object.keys(sets).length || !(J.f > 0 && J.f < 1) || !(J.depth > 0)) throw new Error('no rooms listed');
    if (mk && (!mk.files || !(mk.tiles || []).length)) throw new Error('no glass listed');
    const [img, mimg] = await Promise.all([sheet(J, { imageOrientation: 'flipY', premultiplyAlpha: 'none' }), mk ? sheet(mk, { premultiplyAlpha: 'none' }) : null]);
    let mask = null;
    if (mk) {
      const W = mimg.width, H = mimg.height, okBox = b => Array.isArray(b) && b.length === 4 && b[0] >= 0 && b[1] >= 0 && b[2] <= 1 && b[3] <= 1 && b[2] > b[0] && b[3] > b[1];
      const tiles = mk.tiles.filter(t => t.w > 0 && t.h > 0 && t.x >= 0 && t.y >= 0 && t.x + t.w <= 1 && t.y + t.h <= 1).map(t => ({ name: t.name, x: t.x * W, y: t.y * H, w: t.w * W, h: t.h * H, box: okBox(t.box) ? t.box : [0, 0, 1, 1] }));
      if (!tiles.length) throw new Error('no glass listed');
      mask = { img: mimg, tiles };
    }
    return { img, mask, panes, rooms, sets, cells: (sets.street || {}).cells || {}, size: sz, f: J.f, depth: J.depth, e: J.e || 1, warp: J.warp > 0 && J.warp <= 1 ? J.warp : 1, tier: file, name };
  })(), timeoutMs, 'the shops\' rooms (' + name + ') unavailable, keeping their painted glass:');
}
/** (step 34) a rooms sheet (loadRoomAtlas's img, flipped as decoded) as a texture: mipmapped, anisotropic on desktops, plain trilinear on
 *  phones; the bitmap closed once it is on the GPU */
export function roomTexture(img, aniso) {
  const t = new THREE.Texture(img); t.colorSpace = THREE.SRGBColorSpace; t.flipY = false; t.generateMipmaps = true;
  t.minFilter = THREE.LinearMipmapLinearFilter; t.anisotropy = aniso; t.needsUpdate = true;
  t.onUpdate = () => { t.onUpdate = null; img.close(); };
  return t;
}
/** (step 34) a room set's glass as a one-channel texture (rows from the bottom: v up), and each listed cell's tile in it. base: a mask
 *  image whose alpha is the glass (rooms1's: { img, tiles: [{ name, x, y, w, h, box }] in px }) or null; extra: [{ name, panes, holes }]
 *  (fractions of the cell from its top-left) drawn into base's free slots (a grid of its first tile's size: the slots no tile of it
 *  touches) or, without a base, into a grid of tiles of their own (tw × th px, as the cell's own px); cells with the same glass share a tile. Returns { tex, tiles: { name: {
 *  mask: [u, v, du, dv], box: [x0, y0, x1, y1] (the panes' bounds in the bay from its bottom-left, grown by 0.03) } } } */
export function roomGlass(base, extra, tw = 256, th = 256) {
  const pad = 0.03, tiles = {};
  let W, H, slots = [];
  if (base) {
    W = base.img.width; H = base.img.height; const t0 = base.tiles[0], sw = Math.round(t0.w), sh = Math.round(t0.h);
    for (let y = 0; y + sh <= H; y += sh) for (let x = 0; x + sw <= W; x += sw) if (!base.tiles.some(t => t.x < x + sw && t.x + t.w > x && t.y < y + sh && t.y + t.h > y)) slots.push([x, y, sw, sh]);
  } else {
    const n = new Set(extra.map(q => JSON.stringify([q.panes, q.holes || []]))).size, cols = Math.max(1, Math.ceil(Math.sqrt(n))), rows = Math.ceil(n / cols); W = cols * tw; H = rows * th;
    for (let i = 0; i < n; i++) slots.push([(i % cols) * tw, Math.floor(i / cols) * th, tw, th]);
  }
  const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
  const g = cv.getContext('2d', { willReadFrequently: true });
  if (base) { g.drawImage(base.img, 0, 0); for (const t of base.tiles) tiles[t.name] = { mask: [t.x / W, 1 - (t.y + t.h) / H, t.w / W, t.h / H], box: t.box }; }
  const seen = new Map(); let k = 0; // (cells with the same glass share a tile)
  extra.forEach(q => {
    const key = JSON.stringify([q.panes, q.holes || []]), had = seen.get(key); if (had) { tiles[q.name] = had; return; }
    const sl = slots[k++]; if (!sl) { console.warn('rooms: no room left in the glass mask for', q.name); return; } const [x, y, w, h] = sl;
    g.globalCompositeOperation = 'source-over'; g.fillStyle = '#fff';
    for (const p of q.panes) g.fillRect(x + p[0] * w, y + p[1] * h, (p[2] - p[0]) * w, (p[3] - p[1]) * h);
    g.globalCompositeOperation = 'destination-out';
    for (const p of q.holes || []) g.fillRect(x + p[0] * w, y + p[1] * h, (p[2] - p[0]) * w, (p[3] - p[1]) * h);
    g.globalCompositeOperation = 'source-over';
    const bx0 = Math.min(...q.panes.map(p => p[0])), by0 = Math.min(...q.panes.map(p => p[1])), bx1 = Math.max(...q.panes.map(p => p[2])), by1 = Math.max(...q.panes.map(p => p[3]));
    tiles[q.name] = { mask: [x / W, 1 - (y + h) / H, w / W, h / H], box: [Math.max(0, bx0 - pad), Math.max(0, 1 - by1 - pad), Math.min(1, bx1 + pad), Math.min(1, 1 - by0 + pad)] };
    seen.set(key, tiles[q.name]);
  });
  const px = g.getImageData(0, 0, W, H).data, a8 = new Uint8Array(W * H);
  for (let y = 0; y < H; y++) { const r = (H - 1 - y) * W * 4, o = y * W; for (let x = 0; x < W; x++) a8[o + x] = px[r + x * 4 + 3]; }
  if (base) base.img.close();
  const tex = new THREE.DataTexture(a8, W, H, THREE.RedFormat, THREE.UnsignedByteType);
  tex.generateMipmaps = true; tex.minFilter = THREE.LinearMipmapLinearFilter; tex.magFilter = THREE.LinearFilter; tex.needsUpdate = true;
  return { tex, tiles };
}

/** Loads the painted houses of the country, the coast and the cherry avenue (assets/houses/, made by
 *  ~/cdtest/hs/scripts/pack.py from asset batch 1's elevations and Grok Imagine gable ends, anchored on the reference
 *  art): a sheet of flat elevations (front = eave side, gable end) cut out on their alpha, the lit windows' emissive tiles
 *  under them, and each house type's 3D pieces. The tiles are drawn into cells of their own in the painted atlas
 *  (textures.js buildPaintedAtlas, paintHouses), so the houses take them with no new material or draw. 'hi' (48 px/m) or 'lo' (32 px/m: phones,
 *  the embed). Resolves to null (never rejects) when the index or the image is missing, broken, truncated or too slow:
 *  the houses then keep their procedural look (props.js woodHouse). */
export async function loadHouseAtlas(tier, timeoutMs = 15000, dir = 'houses/', name = 'houses2', what = 'painted houses unavailable, keeping the procedural ones:') {
  const base = ASSETS + dir;
  return orNull((async () => {
    const r = await fetch(base + name + '.json');
    if (!r.ok) throw new Error(name + '.json ' + r.status);
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
    return { img, tiles, types, rows: J.rows[file], tier: file, extras: J.extras || {} };
  })(), timeoutMs, what);
}
/** The coast painting's house as painted (step 27; assets/houses/coasthouse1.*, ~/cdtest/s27/house/coasthouse1.py): its two
 *  elevations (h4s, h4f) with the painting's grey-beige plaster and darker timber, and their glow, drawn over houses2's own h4 tiles
 *  (textures.js paintHouses: ha.patch), so every other house keeps houses2's pixels. Null when missing or broken: the coast house
 *  then keeps houses2's cream */
export async function loadHousePatch(tier, timeoutMs = 15000) {
  const base = ASSETS + 'houses/';
  return orNull((async () => {
    const r = await fetch(base + 'coasthouse1.json');
    if (!r.ok) throw new Error('coasthouse1.json ' + r.status);
    const J = await r.json();
    const file = J.files && J.files[tier] ? tier : 'hi', tiles = (J.tiles && J.tiles[file]) || [];
    if (!tiles.length) throw new Error('no tiles listed');
    const ri = await fetch(base + J.files[file]);
    if (!ri.ok) throw new Error(J.files[file] + ' ' + ri.status);
    const blob = await ri.blob(); // (checked whole: a truncated image decodes without complaint)
    if (J.bytes && J.bytes[file] && blob.size !== J.bytes[file]) throw new Error(J.files[file] + ' is ' + blob.size + ' bytes, not ' + J.bytes[file]);
    const img = await createImageBitmap(blob, { premultiplyAlpha: 'none' });
    if (J.size && J.size[file] && (img.width !== J.size[file][0] || img.height !== J.size[file][1])) throw new Error(J.files[file] + ' has the wrong size');
    const t = {}; for (const q of tiles) t[q.name] = q;
    return { img, tiles: t, tier: file };
  })(), timeoutMs, "the coast painting's house unavailable, keeping houses2's:");
}
/** …and the Bosphorus's painted Ottoman houses (assets/trhouses/, made by ~/cdtest/w2/scripts/packtr.py from Grok Imagine
 *  elevations anchored on its concept painting, ref/world/istanbul_bosphorus.png): each type's gable end (its front to the
 *  lane: the stone or plastered ground floor, the upper floor jutting out on brackets, the gable) and its long side, cut out
 *  on their alpha, the windows' glow under them, and the 3D pieces. Drawn into rows of their own in the world atlas
 *  (textures.js buildWorldAtlas). 'hi' (32 px/m) or 'lo' (24 px/m). Null when missing or broken: the Bosphorus then keeps its
 *  procedural houses (props.js ottomanHouse) */
export const loadTrHouseAtlas = (tier, timeoutMs = 15000) => loadHouseAtlas(tier, timeoutMs, 'trhouses/', 'trhouses1', "the Bosphorus's painted houses unavailable, keeping the procedural ones:");

/** Loads the Turkish town's painted pieces (W4: assets/town/, made by ~/cdtest/w4/scripts/pack4.py from Grok Imagine edits
 *  anchored on its concept painting, ref/world/turkish_town.png): its shops' bays (a bakery, a grocer, a mini market, a tea
 *  house, a barber, a pharmacy, a greengrocer; an apartment's entrance), its windows (cut out on their alpha) and a cat, with
 *  what glows in each under it. Drawn into rows of their own in the world atlas (textures.js buildWorldAtlas). 'hi' (100 px/m)
 *  or 'lo' (50: phones, the embed). Null when missing, broken or truncated: the town then keeps procedural shopfronts and
 *  windows (textures.js townBayP, townWinP) and no cat */
export async function loadTownAtlas(tier, timeoutMs = 15000) {
  const base = ASSETS + 'town/';
  return orNull((async () => {
    const r = await fetch(base + 'town1.json');
    if (!r.ok) throw new Error('town1.json ' + r.status);
    const J = await r.json();
    const file = J.files && J.files[tier] ? tier : 'hi', tiles = (J.tiles && J.tiles[file]) || [];
    if (!tiles.length || !(J.rows && J.rows[file] > 0)) throw new Error('no tiles listed');
    const ri = await fetch(base + J.files[file]);
    if (!ri.ok) throw new Error(J.files[file] + ' ' + ri.status);
    const blob = await ri.blob(); // (checked whole: a truncated image decodes without complaint)
    if (J.bytes && J.bytes[file] && blob.size !== J.bytes[file]) throw new Error(J.files[file] + ' is ' + blob.size + ' bytes, not ' + J.bytes[file]);
    const img = await createImageBitmap(blob, { premultiplyAlpha: 'none' });
    if (J.size && J.size[file] && (img.width !== J.size[file][0] || img.height !== J.size[file][1])) throw new Error(J.files[file] + ' has the wrong size');
    if (tiles.some(t => !(t.w > 0 && t.h > 0 && t.x >= 0 && t.x + t.w <= img.width && t.ey + t.h <= img.height))) throw new Error('a tile lies outside the sheet');
    return { img, tiles, rows: J.rows[file], tier: file, m: J.m || {} };
  })(), timeoutMs, "the town's painted shops and windows unavailable, keeping procedural ones:");
}

/** (step 35R-galata-2) Loads Galata's own painted fronts (assets/real/galata/galfronts1.*, made by ~/cdtest/g36/scripts/packfronts2.py from
 *  Grok Imagine elevations of Commons photos of the real buildings: Karaköy Palas, Nordstern Han, the Karaköy PTT, Surp Pırgiç, Surp Krikor
 *  Lusavoriç, Saint-Benoît, Liman Han, the İTO, Eminönü's ferry terminals, and the street's kinds of building): an albedo sheet of bays and
 *  its emissive sheet at half scale in the same layout, each decoded flipped (GL's v up, as the atlases' cells: textures.js Atlas), and the
 *  index (each tile's px, its size in metres and its kind; the shops' panes). Drawn straight from these two textures (no canvas: main.js
 *  galFrontTex), their cells listed in the atlases' one namespace. 'hi' (100 px/m) or 'lo' (50: phones, the embed). Null (never rejects) on
 *  anything missing, broken, truncated or too slow: Galata then keeps the town's painted bays (props.js galFacade) */
export async function loadGalFronts(tier, timeoutMs = 15000) {
  const base = ASSETS + 'real/galata/';
  return orNull((async () => {
    const r = await fetch(base + 'galfronts1.json');
    if (!r.ok) throw new Error('galfronts1.json ' + r.status);
    const J = await r.json(), file = J.files && J.files[tier] ? tier : 'hi', F = J.files && J.files[file], B = (J.bytes && J.bytes[file]) || {}, S = J.size && J.size[file];
    const tiles = (J.tiles && J.tiles[file]) || [], m = J.m || {}, kinds = J.cells || {};
    if (!F || !F.a || !F.e || !S || !S.a || !S.e || !tiles.length) throw new Error('no tiles listed');
    if (S.e[0] * 2 !== S.a[0] || S.e[1] * 2 !== S.a[1]) throw new Error('the glow is not at half the albedo\'s size');
    if (tiles.some(t => !(t.w > 0 && t.h > 0 && t.x >= 0 && t.y >= 0 && t.x + t.w <= S.a[0] && t.y + t.h <= S.a[1] && m[t.name] && m[t.name][0] > 0 && m[t.name][1] > 0 && kinds[t.name]))) throw new Error('a tile lies outside the sheet or is unlisted');
    const sheet = async k => {
      const ri = await fetch(base + F[k]);
      if (!ri.ok) throw new Error(F[k] + ' ' + ri.status);
      const blob = await ri.blob(); // (checked whole: a truncated image decodes without complaint)
      if (B[k] && blob.size !== B[k]) throw new Error(F[k] + ' is ' + blob.size + ' bytes, not ' + B[k]);
      const img = await createImageBitmap(blob, { imageOrientation: 'flipY', premultiplyAlpha: 'none' });
      if (img.width !== S[k][0] || img.height !== S[k][1]) { img.close(); throw new Error(F[k] + ' has the wrong size'); }
      return img;
    };
    const a = await sheet('a'); let e;
    try { e = await sheet('e'); } catch (err) { a.close(); throw err; }
    const kind = {}; for (const t of tiles) kind[t.name] = kinds[t.name].kind;
    const glass = {}; for (const [n, g] of Object.entries(J.glass || {})) if (kind[n] === 'shop' && (g.panes || []).length) glass[n] = { panes: g.panes, holes: g.holes || [] };
    return { a, e, tiles, W: S.a[0], H: S.a[1], m, kind, glass, tier: file };
  })(), timeoutMs, "Galata's painted fronts unavailable, keeping the town's bays:");
}

/** (step 32) Loads a region's chain stores' painted bays (assets/chains/chains1<region>.*, made by ~/cdtest/s32/scripts/packchains.py
 *  from Grok Imagine edits of the game's own painted bays): Japan's konbini ('jp': a window with the magazine rack behind the glass, a
 *  window onto the coffee machine and the bento, the automatic sliding doors, all lit a cool white) or the Turkish town's discount
 *  markets ('tr': blue- and red-framed windows covered in offer posters, their glass doors), each with what glows in it under it. Drawn
 *  with the chains' signs (textures.js buildChainAtlas) into an atlas of their own. 'hi' (100 px/m) or 'lo' (50: phones, the embed).
 *  Null when missing, broken or truncated: the konbini and the markets then keep their old look */
export async function loadChainAtlas(tier, region, timeoutMs = 15000) {
  const base = ASSETS + 'chains/', name = 'chains1' + region;
  return orNull((async () => {
    const r = await fetch(base + name + '.json');
    if (!r.ok) throw new Error(name + '.json ' + r.status);
    const J = await r.json();
    const file = J.files && J.files[tier] ? tier : 'hi', tiles = (J.tiles && J.tiles[file]) || [];
    if (!tiles.length || !(J.rows && J.rows[file] > 0)) throw new Error('no tiles listed');
    const ri = await fetch(base + J.files[file]);
    if (!ri.ok) throw new Error(J.files[file] + ' ' + ri.status);
    const blob = await ri.blob(); // (checked whole: a truncated image decodes without complaint)
    if (J.bytes && J.bytes[file] && blob.size !== J.bytes[file]) throw new Error(J.files[file] + ' is ' + blob.size + ' bytes, not ' + J.bytes[file]);
    const img = await createImageBitmap(blob, { premultiplyAlpha: 'none' });
    if (J.size && J.size[file] && (img.width !== J.size[file][0] || img.height !== J.size[file][1])) throw new Error(J.files[file] + ' has the wrong size');
    if (tiles.some(t => !(t.w > 0 && t.h > 0 && t.x >= 0 && t.x + t.w <= img.width && t.ey + t.h <= img.height))) throw new Error('a tile lies outside the sheet');
    return { img, tiles, rows: J.rows[file], tier: file, m: J.m || [] };
  })(), timeoutMs, `the ${region === 'jp' ? 'konbini' : "markets'"} chain fronts unavailable, keeping the old ones:`);
}

/** (step 35a) Loads the Galata Bridge's fishermen as painted figures (assets/people/fishers1.*, made by ~/cdtest/s35/scripts/pack.py from
 *  Grok Imagine turnaround sheets: twelve men, four holding the rod in both hands, four leaning on the railing, four on camping stools;
 *  each sheet's five views round his back half, cut on their magenta, the hold pose's rod cut away above his hands): the atlas (its colours
 *  premultiplied by their alpha, sRGB as stored: its texture (fishers.js) decodes nothing, the shader does) and its index (each sheet's pose and its
 *  five views' cells, mirrored or not, the hold pose's hand point H and rod direction D; each cell's place, its feet's and px a metre).
 *  'hi' (230 px a metre) or 'lo' (half: phones, the embed). Null (never rejects) when anything is missing, broken, truncated or too slow:
 *  the fishermen then keep their smooth figures (props.js, step 33) */
export async function loadFisherAtlas(tier, timeoutMs = 15000) {
  const base = ASSETS + 'people/';
  return orNull((async () => {
    const r = await fetch(base + 'fishers1.json');
    if (!r.ok) throw new Error('fishers1.json ' + r.status);
    const J = await r.json(), file = J.files && J.files[tier] ? tier : 'hi', sz = J.size && J.size[file], hi = J.size && J.size.hi;
    const cells = J.cells || [], sheets = J.sheets || [];
    if (!sz || !hi || !(J.ppm > 0) || !cells.length || !sheets.length) throw new Error('nothing listed');
    if (String(J.views) !== '90,135,180,-135,-90') throw new Error('views listed as ' + J.views + ', not the five the shader picks from'); // (materials.js FISH_CARD)
    if (cells.some(c => !(c.w > 0 && c.h > 0 && c.x >= 0 && c.y >= 0 && c.x + c.w <= hi[0] && c.y + c.h <= hi[1]))) throw new Error('a cell lies outside the sheet');
    if (sheets.some(S => !['hold', 'lean', 'sit'].includes(S.pose) || !S.views || S.views.length !== 5 || S.views.some(v => !cells[v[0]]) || (S.pose === 'hold' && !(S.H && S.D)))) throw new Error('a sheet is incomplete');
    for (const pose of ['hold', 'lean', 'sit']) if (!sheets.some(S => S.pose === pose)) throw new Error('no ' + pose + ' sheet');
    const ri = await fetch(base + J.files[file]);
    if (!ri.ok) throw new Error(J.files[file] + ' ' + ri.status);
    const blob = await ri.blob(); // (checked whole: a truncated image decodes without complaint)
    if (J.bytes && J.bytes[file] && blob.size !== J.bytes[file]) throw new Error(J.files[file] + ' is ' + blob.size + ' bytes, not ' + J.bytes[file]);
    const img = await createImageBitmap(blob, { premultiplyAlpha: 'none', colorSpaceConversion: 'none' });
    if (img.width !== sz[0] || img.height !== sz[1]) { img.close(); throw new Error(J.files[file] + ' has the wrong size'); }
    return { img, J, tier: file, scale: sz[0] / hi[0], size: sz }; // (its texture made with the rest of them: fishers.js)
  })(), timeoutMs, "the Galata Bridge's painted fishermen unavailable, keeping the smooth figures:");
}

/** (step 35f) Loads a cast of painted people (assets/people/<name>.*, made by ~/cdtest/s35f/scripts/pack_people.py from Grok Imagine
 *  turnaround sheets, one person in one pose each, five views cut on their magenta): Paşabağ's tourists ('people1t', anchored on its concept
 *  painting) or Istanbul's people in the Galata zone ('people1i', on the Galata Bridge's). As loadFisherAtlas: the atlas (premultiplied,
 *  sRGB as stored) and its index, each sheet's EIGHT views round the person (phi 0, 45, 90, 135, 180, −135, −90, −45: painted, or the
 *  painted opposite mirrored) on the fishermen's programs (materials.js makeFisherMaterials, ring [0, 8]); ids: the sheets' ids in their
 *  order (the chunks pick people by their place in it). 'hi' (200 px a metre) or 'lo' (half: phones, the embed). Null (never rejects) when
 *  anything is missing, broken, truncated or too slow: then nobody stands there (never the old box figures) */
export async function loadPeopleAtlas(tier, name, ids, timeoutMs = 15000) {
  const base = ASSETS + 'people/';
  return orNull((async () => {
    const r = await fetch(base + name + '.json');
    if (!r.ok) throw new Error(name + '.json ' + r.status);
    const J = await r.json(), file = J.files && J.files[tier] ? tier : 'hi', sz = J.size && J.size[file], hi = J.size && J.size.hi;
    const cells = J.cells || [], sheets = J.sheets || [];
    if (!sz || !hi || !(J.ppm > 0) || !cells.length || !sheets.length) throw new Error('nothing listed');
    if (String(J.views) !== '0,45,90,135,180,-135,-90,-45') throw new Error('views listed as ' + J.views + ', not the eight the shader picks from'); // (materials.js FISH_CARD, ring [0, 8])
    if (String(sheets.map(S => S.id)) !== String(ids)) throw new Error('sheets listed as ' + sheets.map(S => S.id) + ', not ' + ids);
    if (cells.some(c => !(c.w > 0 && c.h > 0 && c.x >= 0 && c.y >= 0 && c.x + c.w <= hi[0] && c.y + c.h <= hi[1]))) throw new Error('a cell lies outside the sheet');
    if (sheets.some(S => !S.views || S.views.length !== 8 || S.views.some(v => !cells[v[0]]))) throw new Error('a sheet is incomplete');
    const ri = await fetch(base + J.files[file]);
    if (!ri.ok) throw new Error(J.files[file] + ' ' + ri.status);
    const blob = await ri.blob(); // (checked whole: a truncated image decodes without complaint)
    if (!(J.bytes && J.bytes[file] > 0) || blob.size !== J.bytes[file]) throw new Error(J.files[file] + ' is ' + blob.size + ' bytes, not ' + (J.bytes && J.bytes[file]));
    const img = await createImageBitmap(blob, { premultiplyAlpha: 'none', colorSpaceConversion: 'none' });
    if (img.width !== sz[0] || img.height !== sz[1]) { img.close(); throw new Error(J.files[file] + ' has the wrong size'); }
    return { img, J, tier: file, scale: sz[0] / hi[0], size: sz }; // (its texture made with the rest of them: fishers.js)
  })(), timeoutMs, `the painted people (${name}) unavailable, leaving their places empty:`);
}

/** (step 35b) Loads the Turkish town's dolmuş as a painted 3D model (assets/models/dolmus/dolmus1.*, made by ~/cdtest/s35b/scripts/dolhull.py
 *  and pack.py from Grok Imagine elevations of a yellow Ford Transit minibus: its body the elevations' visual hull, the paintings projected
 *  back onto it, its wheels, mirrors and wipers modelled): its geometry, one binary of two meshes (near, and far: ~1.5k triangles), each
 *  u16 positions on the model's box, i8 normals, u16 uv, u16 indices; and its texture pair (sRGB as stored, no flip: v runs down), the
 *  yellow livery and the white one with its blue band side by side over what glows at night (the lamps, the saloon's warm light).
 *  'hi' (2048 × 1024) or 'lo' (half: phones, the embed). Resolves to its GB templates ({ nearA, farA, nearB, farB }: the B ones share
 *  the A ones' arrays but their uv, moved to the sheet's right half) and its two images; null (never rejects) when anything is missing,
 *  broken, truncated or too slow: the town then keeps the old dolmuş (props.js) */
export async function loadDolmus(tier, timeoutMs = 15000) {
  const base = ASSETS + 'models/dolmus/';
  return orNull((async () => {
    const r = await fetch(base + 'dolmus1.json');
    if (!r.ok) throw new Error('dolmus1.json ' + r.status);
    const J = await r.json(), file = J.files && J.files[tier] ? tier : 'hi', F = J.files && J.files[file], sz = J.size && J.size[file];
    if (!F || !sz || !sz.map || !sz.em || !J.bytes || !J.bin || !(J.binBytes > 0) || !J.box || !J.meshes || J.meshes.length !== 2) throw new Error('nothing listed');
    const get = async (name, bytes) => { // (each file checked whole: a truncated image decodes without complaint)
      if (!(bytes > 0)) throw new Error(name + ': no size listed');
      const q = await fetch(base + name); if (!q.ok) throw new Error(name + ' ' + q.status);
      const b = await q.blob(); if (b.size !== bytes) throw new Error(name + ' is ' + b.size + ' bytes, not ' + bytes);
      return b;
    };
    const [bin, mb, eb] = await Promise.all([get(J.bin, J.binBytes), get(F.map, J.bytes[F.map]), get(F.em, J.bytes[F.em])]);
    const buf = await bin.arrayBuffer(), b0 = J.box[0], b1 = J.box[1], T = {};
    for (const m of J.meshes) { // (decoded once: the templates every chunk with a dolmuş stamps, props.js dolmus)
      const n = m.n, ni = m.tris * 3, end = buf.byteLength;
      if (!(n > 0 && n < 65536 && ni > 0) || (m.name !== 'near' && m.name !== 'far') || m.pos % 2 || m.uv % 2 || m.idx % 2 || m.pos + n * 6 > end || m.nrm + n * 3 > end || m.uv + n * 4 > end || m.idx + ni * 2 > end) throw new Error('a mesh lies outside the binary');
      const q = new Uint16Array(buf, m.pos, n * 3), P = new Float32Array(n * 3), uq = new Uint16Array(buf, m.uv, n * 2), U = new Float32Array(n * 2), UB = new Float32Array(n * 2), I = new Uint16Array(buf, m.idx, ni);
      for (let i = 0; i < n * 3; i++) { const k = i % 3; P[i] = b0[k] + (q[i] / 65535) * (b1[k] - b0[k]); }
      for (let i = 0; i < n * 2; i++) { U[i] = uq[i] / 65535; UB[i] = i % 2 ? U[i] : U[i] + 0.5; }
      for (let i = 0; i < ni; i++) if (I[i] >= n) throw new Error('an index past its mesh');
      const N = new Int8Array(buf, m.nrm, n * 3);
      T[m.name + 'A'] = { n, P, N, U, C: null, I }; T[m.name + 'B'] = { n, P, N, U: UB, C: null, I };
    }
    if (!T.nearA || !T.farA) throw new Error('no near or far mesh');
    const opt = { premultiplyAlpha: 'none', colorSpaceConversion: 'none' }, [map, em] = await Promise.all([createImageBitmap(mb, opt), createImageBitmap(eb, opt)]);
    if (map.width !== sz.map[0] || map.height !== sz.map[1] || em.width !== sz.em[0] || em.height !== sz.em[1]) { map.close(); em.close(); throw new Error('a texture has the wrong size'); }
    return { T, map, em, tier: file };
  })(), timeoutMs, "the town's painted dolmuş unavailable, keeping the old one:");
}

/** (step 35c) Loads Japan's crossing train as painted 3D cars (assets/models/train/train1.*, made by ~/cdtest/s35c/scripts/train.py and
 *  pack.py from Grok Imagine elevations of a JR East E231-like commuter train: each car type's body lofted from the paintings' own
 *  cross-section, its sides, cab face and inner ends painted by projection; bogies, pantograph, roof units, bellows and couplers
 *  modelled): its geometry, one binary of parts (each u16 positions on the part's box, i8 normals, u16 uv, u16 indices; shared parts
 *  stored once), the cars as lists of parts and matrices; its texture pair (sRGB as stored, no flip: v runs down; what glows: the
 *  saloon's light, the display, the lamps). 'hi' (2048 × 1024) or 'lo' (half: phones, the embed). Resolves to { P (the parts' GB
 *  templates by name), J, map, em, tier }; null (never rejects) when anything is missing, broken, truncated or too slow: the crossing
 *  then keeps the old train (crossing.js) */
export async function loadTrain(tier, timeoutMs = 15000) {
  const base = ASSETS + 'models/train/';
  return orNull((async () => {
    const r = await fetch(base + 'train1.json');
    if (!r.ok) throw new Error('train1.json ' + r.status);
    const J = await r.json(), file = J.files && J.files[tier] ? tier : 'hi', F = J.files && J.files[file], sz = J.size && J.size[file];
    if (!F || !sz || !sz.map || !sz.em || !J.bytes || !J.bin || !(J.binBytes > 0) || !J.parts || !J.cars || !J.cars.cab || !J.cars.mid || !J.lamps) throw new Error('nothing listed');
    const get = async (name, bytes) => { // (each file checked whole: a truncated image decodes without complaint)
      if (!(bytes > 0)) throw new Error(name + ': no size listed');
      const q = await fetch(base + name); if (!q.ok) throw new Error(name + ' ' + q.status);
      const b = await q.blob(); if (b.size !== bytes) throw new Error(name + ' is ' + b.size + ' bytes, not ' + bytes);
      return b;
    };
    const [bin, mb, eb] = await Promise.all([get(J.bin, J.binBytes), get(F.map, J.bytes[F.map]), get(F.em, J.bytes[F.em])]);
    const buf = await bin.arrayBuffer(), end = buf.byteLength, P = {};
    for (const m of J.parts) { // (decoded once: the templates the train stamps, crossing.js)
      const n = m.n, ni = m.tris * 3, b0 = m.box && m.box[0], b1 = m.box && m.box[1];
      if (!(n > 0 && n < 65536 && ni > 0) || !b0 || !b1 || m.pos % 2 || m.uv % 2 || m.idx % 2 || m.pos + n * 6 > end || m.nrm + n * 3 > end || m.uv + n * 4 > end || m.idx + ni * 2 > end) throw new Error('a part lies outside the binary');
      const q = new Uint16Array(buf, m.pos, n * 3), Pp = new Float32Array(n * 3), uq = new Uint16Array(buf, m.uv, n * 2), U = new Float32Array(n * 2), I = new Uint16Array(buf, m.idx, ni);
      for (let i = 0; i < n * 3; i++) { const k = i % 3; Pp[i] = b0[k] + (q[i] / 65535) * (b1[k] - b0[k]); }
      for (let i = 0; i < n * 2; i++) U[i] = uq[i] / 65535;
      for (let i = 0; i < ni; i++) if (I[i] >= n) throw new Error('an index past its part');
      P[m.name] = { n, P: Pp, N: new Int8Array(buf, m.nrm, n * 3), U, C: null, I, lit: m.lit };
    }
    for (const car of ['cab', 'mid']) for (const [name, e] of J.cars[car]) if (!P[name] || !e || e.length !== 12) throw new Error('car ' + car + ': part ' + name + ' missing');
    if (!P[J.lamps.lead] || !P[J.lamps.trail]) throw new Error('no lamps');
    const opt = { premultiplyAlpha: 'none', colorSpaceConversion: 'none' }, [map, em] = await Promise.all([createImageBitmap(mb, opt), createImageBitmap(eb, opt)]);
    if (map.width !== sz.map[0] || map.height !== sz.map[1] || em.width !== sz.em[0] || em.height !== sz.em[1]) { map.close(); em.close(); throw new Error('a texture has the wrong size'); }
    return { P, J, map, em, tier: file };
  })(), timeoutMs, "the crossing's painted train unavailable, keeping the old one:");
}

/** (step 35d) Loads the Galata T1 tram's painted livery (assets/models/tram/tram1.*, made by ~/cdtest/s35d/scripts/cut.py and pack.py from
 *  Grok Imagine elevations of a Flexity Swift's cab section, middle section and face, each repainted from a layout drawn at the game's loft's
 *  own proportions, so every window, door and stripe lands where the body is): one texture pair (sRGB as stored, no flip: v runs down) of
 *  the two side cells (columns along the section, rows by the cross-section's arc length), three faces (the head's with each terminus on
 *  its display, the tail's), the roof fairings', the under-skirt's and the bellows' cells, a plain patch; and what glows (the saloon's
 *  windows round their passengers, the headlamps, the displays, the tail lamps). Its geometry stays tram.js's loft. 'hi' (2048 × 992) or
 *  'lo' (half: phones, the embed). Resolves to { J (the cells in hi pixels, each profile point's v in a side cell), map, em, tier }; null
 *  (never rejects) when anything is missing, broken, truncated or too slow: the tram then keeps its canvas painting (tram.js paintTram) */
export async function loadTram(tier, timeoutMs = 15000) {
  const base = ASSETS + 'models/tram/';
  return orNull((async () => {
    const r = await fetch(base + 'tram1.json');
    if (!r.ok) throw new Error('tram1.json ' + r.status);
    const J = await r.json(), file = J.files && J.files[tier] ? tier : 'hi', F = J.files && J.files[file], sz = J.size && J.size[file];
    if (J.v !== 1 || !F || !F.map || !F.em || !sz || !sz.map || !sz.em || !J.bytes || !J.cells || !Array.isArray(J.vtab) || J.vtab.length !== 10 || !J.hiSize) throw new Error('nothing listed');
    for (const n of ['side_cab', 'side_mid', 'face_K', 'face_B', 'face_T', 'box1', 'box2', 'bellows', 'plain', 'under_cab', 'under_mid']) {
      const c = J.cells[n]; if (!Array.isArray(c) || c.length !== 4 || !c.every(v => typeof v === 'number' && v >= 0)) throw new Error('cell ' + n + ' missing');
    }
    const get = async (name, bytes) => { // (each file checked whole: a truncated image decodes without complaint)
      if (!(bytes > 0)) throw new Error(name + ': no size listed');
      const q = await fetch(base + name); if (!q.ok) throw new Error(name + ' ' + q.status);
      const b = await q.blob(); if (b.size !== bytes) throw new Error(name + ' is ' + b.size + ' bytes, not ' + bytes);
      return b;
    };
    const [mb, eb] = await Promise.all([get(F.map, J.bytes[F.map]), get(F.em, J.bytes[F.em])]);
    const opt = { premultiplyAlpha: 'none', colorSpaceConversion: 'none' }, [map, em] = await Promise.all([createImageBitmap(mb, opt), createImageBitmap(eb, opt)]);
    if (map.width !== sz.map[0] || map.height !== sz.map[1] || em.width !== sz.em[0] || em.height !== sz.em[1]) { map.close(); em.close(); throw new Error('a texture has the wrong size'); }
    return { J, map, em, tier: file };
  })(), timeoutMs, "the tram's painted livery unavailable, keeping its canvas painting:");
}

/** (step 35e) Loads the player's car as a painted 3D model (assets/models/car/car1.*, made by ~/cdtest/s35e/scripts/carhull.py and
 *  pack.py from Grok Imagine elevations of the city painting's mint kei crossover: its body the elevations' visual hull with the paintings
 *  projected back onto it, its wheels, mirrors, wipers and tailpipe modelled): its geometry, one binary of meshes (the body; one wheel and
 *  its blurred face's uv, stamped four times; the rear wiper; ~77 KB for ~8k triangles), in the car's frame (x its left, y up, z its
 *  nose); its texture pair (sRGB as stored, no flip: v runs down): one livery's painting (the city's mint 'mint', the coast's lighter
 *  'coast', the cherry avenue's light blue 'blue', the country's mint with a white band 'band': only the one asked for is fetched) and
 *  what glows, as masks (R the tail lamps' red lenses and reflectors, G their light guides, B on the rear's part of the sheet the stop
 *  lamp and the amber indicators, elsewhere the head and fog lamps: car.js sets their colours each frame). 'hi' (2048 × 1024) or 'lo'
 *  (half: phones, the embed). Resolves to { M (the meshes' arrays by name), J, map, em, tier, livery, fill (the livery's fill in the shade
 *  by the hour, or null) }; null (never rejects) when anything is missing, broken, truncated or too slow: the car then stays the
 *  procedural one (car.js) */
export async function loadCar(tier, livery, timeoutMs = 15000) {
  const base = ASSETS + 'models/car/';
  return orNull((async () => {
    const r = await fetch(base + 'car1.json');
    if (!r.ok) throw new Error('car1.json ' + r.status);
    const J = await r.json(), file = J.files && J.files[tier] ? tier : 'hi', F = J.files && J.files[file], sz = J.size && J.size[file];
    const liv = F && F.map && F.map[livery] ? livery : 'mint';
    if (J.v !== 2 || !F || !F.map || !F.map[liv] || !F.em || !sz || !sz.map || !sz.em || !J.bytes || !J.bin || !(J.binBytes > 0) || !J.meshes) throw new Error('nothing listed');
    for (const k of ['RT', 'track', 'L', 'W', 'rearZ', 'splitU', 'splitV']) if (!(typeof J[k] === 'number' && isFinite(J[k]))) throw new Error(k + ' missing');
    if (!J.axles || J.axles.length !== 2 || !J.ring || J.ring.length !== 2 || !J.plate || !J.stop || !J.rwiper) throw new Error('a place is missing');
    const get = async (name, bytes) => { // (each file checked whole: a truncated image decodes without complaint)
      if (!(bytes > 0)) throw new Error(name + ': no size listed');
      const q = await fetch(base + name); if (!q.ok) throw new Error(name + ' ' + q.status);
      const b = await q.blob(); if (b.size !== bytes) throw new Error(name + ' is ' + b.size + ' bytes, not ' + bytes);
      return b;
    };
    const [bin, mb, eb] = await Promise.all([get(J.bin, J.binBytes), get(F.map[liv], J.bytes[F.map[liv]]), get(F.em, J.bytes[F.em])]);
    // (each mesh: positions and uv as 12-bit integers on its box, each component's step from the vertex before as a zigzag varint; normals
    // octahedral, two bytes; indices as varint steps; the wheel's blurred face shares the wheel's vertices, its own uv)
    const buf = await bin.arrayBuffer(), end = buf.byteLength, vb = new Uint8Array(buf), M = {};
    const stream = (off, len) => { let p = off; const e = off + len; if (!(off >= 0 && len > 0 && e <= end)) throw new Error('a stream lies outside the binary');
      return () => { let v = 0, sh = 0, b; do { if (p >= e) throw new Error('a stream runs past its end'); b = vb[p++]; v |= (b & 127) << sh; sh += 7; } while (b & 128 && sh < 35); return (v >>> 1) ^ -(v & 1); }; };
    for (const m of J.meshes) { // (decoded once)
      const n = m.n, ni = m.tris * 3, b0 = m.box && m.box[0], b1 = m.box && m.box[1], q = m.q;
      if (!(n > 0 && n < 65536 && ni > 0 && q > 0) || !b0 || !b1 || !(m.nrm >= 0 && m.nrm + n * 2 <= end)) throw new Error('a mesh lies outside the binary');
      const P = new Float32Array(n * 3), U = new Float32Array(n * 2), N = new Float32Array(n * 3), I = new Uint16Array(ni);
      { const rd = stream(m.pos, m.posBytes); let x = 0, y = 0, z = 0;
        for (let i = 0; i < n; i++) { x += rd(); y += rd(); z += rd(); P[i * 3] = b0[0] + (x / q) * (b1[0] - b0[0]); P[i * 3 + 1] = b0[1] + (y / q) * (b1[1] - b0[1]); P[i * 3 + 2] = b0[2] + (z / q) * (b1[2] - b0[2]); } }
      { const rd = stream(m.uv, m.uvBytes); let u = 0, v = 0; for (let i = 0; i < n; i++) { u += rd(); v += rd(); U[i * 2] = u / q; U[i * 2 + 1] = v / q; } }
      { const nb = new Int8Array(buf, m.nrm, n * 2);
        for (let i = 0; i < n; i++) {
          let x = nb[i * 2] / 127, y = nb[i * 2 + 1] / 127; const z = 1 - Math.abs(x) - Math.abs(y);
          if (z < 0) { const t = x; x = (1 - Math.abs(y)) * (t >= 0 ? 1 : -1); y = (1 - Math.abs(t)) * (y >= 0 ? 1 : -1); }
          const l = Math.hypot(x, y, z); if (l > 0) { N[i * 3] = x / l; N[i * 3 + 1] = y / l; N[i * 3 + 2] = z / l; } else N[i * 3 + 1] = 1; // (a zero normal is NaN in the shader: step 33)
        } }
      { const rd = stream(m.idx, m.idxBytes); let k = 0; for (let i = 0; i < ni; i++) { k += rd(); if (k < 0 || k >= n) throw new Error('an index past its mesh'); I[i] = k; } }
      M[m.name] = { n, P, N, U, I };
    }
    for (const k of ['body', 'wheel', 'wheelblur', 'rwiper']) if (!M[k]) throw new Error('no ' + k + ' mesh');
    const opt = { premultiplyAlpha: 'none', colorSpaceConversion: 'none' }, [map, em] = await Promise.all([createImageBitmap(mb, opt), createImageBitmap(eb, opt)]);
    if (map.width !== sz.map[0] || map.height !== sz.map[1] || em.width !== sz.em[0] || em.height !== sz.em[1]) { map.close(); em.close(); throw new Error('a texture has the wrong size'); }
    const fl = J.fill && J.fill[liv], fill = fl && ['golden', 'sunset', 'night'].every(k => Array.isArray(fl[k]) && fl[k].length === 3 && fl[k].every(v => typeof v === 'number' && v >= 0 && v < 8)) ? fl : null;
    return { M, J, map, em, tier: file, livery: liv, fill }; // (fill: the livery's fill in the shade by the hour, × the procedural car's; null: 1)
  })(), timeoutMs, "the painted car unavailable, keeping the procedural one:");
}

/** (step 35g) Loads the street furniture's painted atlas (assets/furniture/furn1.*, made by ~/cdtest/s35g/scripts/pack.py: Grok Imagine
 *  elevations of a Japanese drinks vending machine in three liveries (each repainted from a layout drawn at the model's proportions), a
 *  mamachari in three frames, a simit cart's long side and end, keyed off their magenta and packed with the small cells drawn in code: wood,
 *  a tea glass, the cart's spoked wheel, the country bus stop's sign, timetable, shelter wall, roof and fascia): its texture pair (sRGB as
 *  stored, no flip: v runs down; the albedo's alpha cuts the bicycles, the wheel, the valance; what glows at night: the machines' windows,
 *  buttons and displays) and its index (cells in hi px, the models' measured geometry: furniture.js). 'hi' (1024²) or 'lo' (half: phones,
 *  the embed). Null (never rejects) when anything is missing, broken, truncated or too slow: the furniture then keeps its old builders */
export async function loadFurniture(tier, timeoutMs = 15000) {
  const base = ASSETS + 'furniture/';
  return orNull((async () => {
    const r = await fetch(base + 'furn1.json');
    if (!r.ok) throw new Error('furn1.json ' + r.status);
    const J = await r.json(), file = J.files && J.files[tier] ? tier : 'hi', F = J.files && J.files[file], sz = J.size && J.size[file];
    if (J.v !== 1 || !F || !F.map || !F.em || !sz || !sz.map || !sz.em || !J.bytes || !J.cells || !J.geo || !J.geo.vend || !J.geo.bike || !Array.isArray(J.hiSize)) throw new Error('nothing listed');
    const [W, H] = J.hiSize;
    for (const c of Object.values(J.cells)) if (!(Array.isArray(c) && c.length === 4 && c[0] >= 0 && c[1] >= 0 && c[2] > 0 && c[3] > 0 && c[0] + c[2] <= W && c[1] + c[3] <= H)) throw new Error('a cell lies outside the sheet');
    const get = async (name, bytes) => { // (each file checked whole: a truncated image decodes without complaint)
      if (!(bytes > 0)) throw new Error(name + ': no size listed');
      const q = await fetch(base + name); if (!q.ok) throw new Error(name + ' ' + q.status);
      const b = await q.blob(); if (b.size !== bytes) throw new Error(name + ' is ' + b.size + ' bytes, not ' + bytes);
      return b;
    };
    const [mb, eb] = await Promise.all([get(F.map, J.bytes[F.map]), get(F.em, J.bytes[F.em])]);
    const opt = { premultiplyAlpha: 'none', colorSpaceConversion: 'none' }, [map, em] = await Promise.all([createImageBitmap(mb, opt), createImageBitmap(eb, opt)]);
    if (map.width !== sz.map[0] || map.height !== sz.map[1] || em.width !== sz.em[0] || em.height !== sz.em[1]) { map.close(); em.close(); throw new Error('a texture has the wrong size'); }
    return { J, map, em, tier: file };
  })(), timeoutMs, "the street furniture's paintings unavailable, keeping the old furniture:");
}

/** (step 35h) Loads a region's boats as painted 3D models (assets/boats/boats1<region>.*, made by ~/cdtest/s35h/scripts (fb.py, kayik.py,
 *  motor.py, ferry.py + ferry2.py: designed hulls; layouts drawn from them repainted by Grok Imagine; bake.py, pack.py, packweb.py): Japan's
 *  ('jp': the coast's fishing boat, two liveries) or Turkey's ('tr': the kayık (three liveries), the small motor boat (two), the city ferry's
 *  bow, stern, decks and masts; and the ferry's sides, whose uv are fractions of the world atlas's trFerry cell: its painting stays there).
 *  Each mesh: positions and uv as 12-bit integers on its box (zigzag delta varints), octahedral normals, varint index steps (step 35e's
 *  encoding); each livery past the first a uv shift of vertex ranges (liv: [[name, [[v0, v1, du, dv], ...]], ...]). Its texture pair (sRGB as
 *  stored, no flip: v runs down; what glows: windows and lamps) 'hi' (1024 wide) or 'lo' (half). Resolves to { T (templates by name: an
 *  array of liveries, each { n, P, N, U, C: null, I }; the ferry's sides as T.ferrySide[0] with U in cell fractions, v up), J, map, em,
 *  tier }; null (never rejects) when anything is missing, broken, truncated or too slow: the old boats (and the old painted ferry) stay */
export async function loadBoats(tier, region, timeoutMs = 15000) {
  const base = ASSETS + 'boats/', name = 'boats1' + region;
  return orNull((async () => {
    const r = await fetch(base + name + '.json');
    if (!r.ok) throw new Error(name + '.json ' + r.status);
    const J = await r.json(), file = J.files && J.files[tier] ? tier : 'hi', F = J.files && J.files[file], sz = J.size && J.size[file];
    if (J.v !== 1 || !F || !F.map || !F.em || !sz || !sz.map || !sz.em || !J.bytes || !J.bin || !(J.binBytes > 0) || !Array.isArray(J.meshes)) throw new Error('nothing listed');
    const get = async (n, bytes) => { // (each file checked whole: a truncated image decodes without complaint)
      if (!(bytes > 0)) throw new Error(n + ': no size listed');
      const q = await fetch(base + n); if (!q.ok) throw new Error(n + ' ' + q.status);
      const b = await q.blob(); if (b.size !== bytes) throw new Error(n + ' is ' + b.size + ' bytes, not ' + bytes);
      return b;
    };
    const [bin, mb, eb] = await Promise.all([get(J.bin, J.binBytes), get(F.map, J.bytes[F.map]), get(F.em, J.bytes[F.em])]);
    const buf = await bin.arrayBuffer(), end = buf.byteLength, vb = new Uint8Array(buf), T = {};
    const stream = (off, len) => { let p = off; const e = off + len; if (!(off >= 0 && len > 0 && e <= end)) throw new Error('a stream lies outside the binary');
      return () => { let v = 0, sh = 0, b; do { if (p >= e) throw new Error('a stream runs past its end'); b = vb[p++]; v |= (b & 127) << sh; sh += 7; } while (b & 128 && sh < 35); return (v >>> 1) ^ -(v & 1); }; };
    for (const m of J.meshes) { // (decoded once: the templates the chunks and the ferry stamp)
      const n = m.n, ni = m.tris * 3, b0 = m.box && m.box[0], b1 = m.box && m.box[1], q = m.q;
      if (!(n > 0 && n < 65536 && ni > 0 && q > 0) || !b0 || !b1 || !(m.nrm >= 0 && m.nrm + n * 2 <= end) || typeof m.name !== 'string') throw new Error('a mesh lies outside the binary');
      const P = new Float32Array(n * 3), U = new Float32Array(n * 2), N = new Int8Array(n * 3), I = new Uint16Array(ni);
      { const rd = stream(m.pos, m.posBytes); let x = 0, y = 0, z = 0;
        for (let i = 0; i < n; i++) { x += rd(); y += rd(); z += rd(); P[i * 3] = b0[0] + (x / q) * (b1[0] - b0[0]); P[i * 3 + 1] = b0[1] + (y / q) * (b1[1] - b0[1]); P[i * 3 + 2] = b0[2] + (z / q) * (b1[2] - b0[2]); } }
      { const rd = stream(m.uv, m.uvBytes); let u = 0, v = 0; for (let i = 0; i < n; i++) { u += rd(); v += rd(); U[i * 2] = u / q; U[i * 2 + 1] = v / q; } }
      { const nb = new Int8Array(buf, m.nrm, n * 2); // (octahedral; stored as GB's normals: int8 × 127)
        for (let i = 0; i < n; i++) {
          let x = nb[i * 2] / 127, y = nb[i * 2 + 1] / 127; const z = 1 - Math.abs(x) - Math.abs(y);
          if (z < 0) { const t = x; x = (1 - Math.abs(y)) * (t >= 0 ? 1 : -1); y = (1 - Math.abs(t)) * (y >= 0 ? 1 : -1); }
          const l = Math.hypot(x, y, z);
          if (l > 0) { N[i * 3] = Math.round((x / l) * 127); N[i * 3 + 1] = Math.round((y / l) * 127); N[i * 3 + 2] = Math.round((z / l) * 127); } else N[i * 3 + 1] = 127; // (never a zero normal: NaN in the shader, step 33)
        } }
      { const rd = stream(m.idx, m.idxBytes); let k = 0; for (let i = 0; i < ni; i++) { k += rd(); if (k < 0 || k >= n) throw new Error('an index past its mesh'); I[i] = k; } }
      const L = [{ n, P, N, U, C: null, I }];
      for (const [lv, rngs] of m.liv || []) { // (a livery: livery A's uv, its regions' ranges shifted onto their copies in the sheet)
        if (typeof lv !== 'string' || !Array.isArray(rngs)) throw new Error('a livery is broken');
        const U2 = U.slice();
        for (const [v0, v1, du, dv] of rngs) { if (!(v0 >= 0 && v1 <= n && v0 < v1)) throw new Error('a livery range lies outside its mesh'); for (let i = v0; i < v1; i++) { U2[i * 2] += du; U2[i * 2 + 1] += dv; } }
        L.push({ n, P, N, U: U2, C: null, I });
      }
      T[m.name] = L;
    }
    if (region === 'jp' ? !T.fishing : !(T.kayik && T.motor && T.ferry && T.ferrySide)) throw new Error('a boat is missing');
    const opt = { premultiplyAlpha: 'none', colorSpaceConversion: 'none' }, [map, em] = await Promise.all([createImageBitmap(mb, opt), createImageBitmap(eb, opt)]);
    if (map.width !== sz.map[0] || map.height !== sz.map[1] || em.width !== sz.em[0] || em.height !== sz.em[1]) { map.close(); em.close(); throw new Error('a texture has the wrong size'); }
    return { T, J, map, em, tier: file };
  })(), timeoutMs, region === 'jp' ? "the coast's painted fishing boats unavailable, keeping the old ones:" : "Turkey's painted boats and ferry unavailable, keeping the old ones:");
}

/** Loads the painted meadow (assets/fields/, made by ~/cdtest/ft/scripts/field.py): a tileable top-down painting of the
 *  country paintings' grass, 'hi' or 'lo' (phones, the embed). Resolves to null (never rejects) when the index or the
 *  image is missing, broken, truncated or too slow: the countryside then keeps its procedural paddies. */
export async function loadFieldTexture(tier, timeoutMs = 15000) {
  const base = ASSETS + 'fields/';
  return orNull((async () => {
    const r = await fetch(base + 'fields2.json');
    if (!r.ok) throw new Error('fields2.json ' + r.status);
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
// (Audit 2: at golden hour the repaints' cloud shade is a cool blue-grey under a mauve-grey middle (the darkest quarter of their cumulus
// (80–112, 101–108, 132), the median (153–165, 127–130, 133–134)); the old warm taupe ones (137, 114, 117) and (184, 147, 138) read muddy)
const CL_GOLD = { shade: [66, 89, 133], mid: [149, 118, 132], lit: [238, 196, 146], rim: [255, 214, 150] };
const CL_SUNSET = { shade: [96, 65, 92], mid: [158, 82, 98], lit: [226, 124, 100], rim: [242, 172, 122] };
const CL_NIGHT = { shade: [33, 58, 90], mid: [45, 76, 116], lit: [125, 152, 186], rim: [180, 205, 232] };
// (dusk: the high clouds keep the afterglow, lilac over a slate shade, on the way from the sunset's salmon to the moonlit grey)
const CL_DUSK = { shade: [58, 56, 96], mid: [104, 86, 132], lit: [170, 128, 168], rim: [214, 150, 170] };
const CLOUD_TONES = todTones([
  [0.0, CL_NIGHT], [0.2, mixTones(CL_NIGHT, CL_DUSK, 0.5)], [0.245, mixTones(CL_SUNSET, CL_GOLD, 0.4)], [0.3, CL_DAY], [0.62, CL_DAY],
  [0.7, CL_GOLD], [0.75, CL_SUNSET], [0.765, mixTones(CL_SUNSET, CL_DUSK, 0.4)], [0.8, CL_DUSK], [0.86, CL_NIGHT], [1.0, CL_NIGHT],
]);
// (step 37) Japan's sunset cumulus zone by zone, as each zone's repaint has them (ref/tod/*_sunset.png, their cloud boxes' pixels by
// lightness: ~/cdtest/s37/tools/cloudq.py): the avenue's and the coast's brighter, salmon-pink and orange over a mauve middle, the country's
// a dark purple-grey with rose-lit tops, the city's pink; blended in by the zones' weights here (api.zw, main.js), so Turkey's keep
// CL_SUNSET (and the mountain's and the snow country's, which have no repaint)
const CL_SUNSET_Z = {
  city: { shade: [96, 65, 92], mid: [158, 82, 98], lit: [240, 132, 145], rim: [242, 172, 122] },
  sakura: { shade: [67, 71, 119], mid: [202, 96, 113], lit: [255, 139, 113], rim: [242, 172, 122] },
  coast: { shade: [88, 65, 105], mid: [189, 85, 93], lit: [253, 135, 94], rim: [242, 172, 122] },
  country: { shade: [64, 55, 102], mid: [104, 71, 116], lit: [197, 89, 97], rim: [242, 172, 122] },
};
const CLOUD_TONES_Z = {};
for (const z in CL_SUNSET_Z) { const S = CL_SUNSET_Z[z]; CLOUD_TONES_Z[z] = todTones([
  [0.0, CL_NIGHT], [0.2, mixTones(CL_NIGHT, CL_DUSK, 0.5)], [0.245, mixTones(S, CL_GOLD, 0.4)], [0.3, CL_DAY], [0.62, CL_DAY],
  [0.7, CL_GOLD], [0.75, S], [0.765, mixTones(S, CL_DUSK, 0.4)], [0.8, CL_DUSK], [0.86, CL_NIGHT], [1.0, CL_NIGHT],
]); }
const CL_N = ['shade', 'mid', 'lit', 'rim'];
const _cm = new THREE.Color(), _cj = new THREE.Color(), CL_U = [null, null, null, null];

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
      uPaint: { value: 1 }, uOpacity: { value: 1 }, uRimLod: { value: atlas.tier === 'hi' ? 3.0 : 2.0 }, uKn: { value: 0 }, ...gradeUniforms(post),
    },
    vertexShader: /* glsl */`
      attribute vec4 aRect, aInfo; attribute float aRim; varying vec2 vUv; varying vec4 vInfo; varying float vRim, vY;
      void main(){
        vUv = aRect.xy + vec2(aInfo.x > 0.5 ? 1.0 - uv.x : uv.x, uv.y) * aRect.zw; vInfo = aInfo; vRim = aRim; vY = uv.y;
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: UNGRADE + /* glsl */`
      uniform sampler2D map; uniform vec3 uLit, uMid, uShade, uRimCol, uHaze; uniform float uPaint, uOpacity, uRimLod, uKn;
      varying vec2 vUv; varying vec4 vInfo; varying float vRim, vY;
      void main(){
        vec4 t = texture2D(map, vUv);
        if (t.a < 0.004) discard;
        vec3 c = vec3(0.0);
        if (uPaint < 0.999) { // the time-of-day palette, keeping the brushwork (the painted luminance) and a silver lining
          float k = clamp((dot(t.rgb, vec3(0.299, 0.587, 0.114)) - vInfo.y) * vInfo.z, 0.0, 1.0);
          k = mix(k, k * k * k, uKn); // (step 30: at night as painted, mostly in the dusk's shade, only the tops and edges moonlit)
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
  function frame(az, mode, raise = true) {
    const T = C.filter(c => c.role === 'tower').sort((a, b) => wrapA(a.phi - az) - wrapA(b.phi - az));
    let best = null, bd = 1e9;
    for (let i = 0; i < T.length; i++) {
      const a = T[i], b = T[(i + 1) % T.length], mid = mode === 'center' ? a.phi : a.phi + wrapA(b.phi - a.phi) / 2, d = Math.abs(wrapA(mid - az));
      if (d < bd) { bd = d; best = mode === 'center' ? [a, a, mid] : [a, b, mid]; }
    }
    if (!best) return;
    const [a, b, mid] = best, rot = wrapA(az - mid);
    for (const c of C) c.phi += rot;
    if (raise) for (const c of new Set([a, b])) { // (taller, keeping the sprite's aspect; not round the moon at night: the repaints keep its sky open)
      const ah = Math.max(c.ah, 31 * D2R), h = c.d * Math.tan(c.e0 + ah) - c.y0;
      c.w *= h / c.h; c.h = h; c.ah = ah; c.half = Math.atan2(c.w / 2, c.d);
    }
  }
  // (step 30) the moon kept clear of the cumulus, as in all the night repaints: a few of its diameters from the nearest cloud's side
  // (MOON_C), or at least its disc and the first of its halo (MOON_M) if that is all there is. Each sprite's painted cloud taken as
  // ~0.92 of its card's width, its top half narrowing to half of that at its top
  const MOON_M = MOON_R + 1.8 * D2R, MOON_C = MOON_R + 5 * D2R, MOON_TURN = 0.4 * D2R;
  /** how far the moon at world bearing `az` stands clear of the cumulus' sides with the ring turned by `rot` (radians; ≤ 0: behind one) */
  const moonClear = (az, rot) => {
    let g = 9;
    for (const c of C) {
      const eb = Math.atan2(c.y0, c.d), et = Math.atan2(c.y0 + c.h, c.d);
      if (et < MOON_EL - MOON_M || eb > MOON_EL + MOON_M) continue;
      const f = Math.min(Math.max((MOON_EL - eb) / Math.max(et - eb, 1e-3), 0), 1), x = Math.min(Math.max((f - 0.5) * 2, 0), 1);
      g = Math.min(g, Math.abs(wrapA(c.phi + rot - az)) - c.half * 0.92 * (1 - 0.5 * x * x * (3 - 2 * x)));
    }
    return g;
  };
  /** the smallest turn of the ring (within ±40°, by 1°) that leaves the moon at world bearing `az` MOON_C clear of the clouds (else
   *  MOON_M); 0 if none does */
  const moonTurn = az => {
    let fb = NaN;
    for (let i = 0; i <= 80; i++) { const r = (i % 2 ? 1 : -1) * Math.ceil(i / 2) * D2R, g = moonClear(az, r); if (g >= MOON_C) return r; if (fb !== fb && g >= MOON_M) fb = r; }
    return fb === fb ? fb : 0;
  };
  const api = {
    mesh, count: N,
    /** the opening composition (set before the first update): 'flank' or 'center' */
    opening: 'flank',
    /** (step 30, main.js, each frame) the drawn moon's world bearing while it shows under a clear sky (NaN otherwise): at a night
     *  start the ring opens round it (two towers flanking it, as the country's night repaint), and while it shows the ring turns
     *  (at most MOON_TURN a second: the clouds drifting) to keep it clear of them; `night`: the night's painted look's weight */
    moon: NaN, night: 0,
    /** (step 37, main.js, each frame) the zones' weights here (path.js zoneW): Japan's zones' own sunset tones (CL_SUNSET_Z) by them */
    zw: null,
    /** (test) the layout, for checks */
    layout: C,
    update(camera, dt) {
      const cam = camera.position, sunAz = Math.atan2(TOD.lightDir.x, TOD.lightDir.z);
      camera.getWorldDirection(fw);
      const camAz = Math.atan2(fw.x, fw.z), halfH = Math.atan(Math.tan((camera.fov * D2R) / 2) * camera.aspect);
      const moon = api.moon === api.moon;
      if (first) frame(moon ? api.moon : camAz, moon ? 'flank' : api.opening, !moon);
      if (moon) { const r = moonTurn(api.moon), k = first ? r : Math.min(Math.max(r, -MOON_TURN * dt), MOON_TURN * dt); if (k !== 0) for (const c of C) c.phi += k; }
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
        const fr = Math.max(Math.cos(dAz), 0), r0 = 0.35 + 0.9 * fr * fr * fr * (0.4 + TOD.warm);
        // (step 30: at night as painted, the clouds next to the moon catch its light along their edges, fading over ~15° from it)
        if (api.night > 0 && moon) { const e = Math.max(Math.abs(wrapA(c.phi - api.moon)) - c.half * 0.8, 0); aRim.setX(i, r0 + api.night * (0.25 + 1.35 * Math.exp(-e / (12 * D2R)) - r0)); }
        else aRim.setX(i, r0);
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
      const g = post.grade.uniforms, P = CLOUD_TONES.at(TOD.t), ov = 1 - paintSky(), zw = api.zw, cu = CL_U;
      cu[0] = u.uShade.value; cu[1] = u.uMid.value; cu[2] = u.uLit.value; cu[3] = u.uRimCol.value;
      for (let i = 0; i < 4; i++) P.ug(g, CL_N[i], cu[i]);
      let sw = 0; if (zw) for (const z in CLOUD_TONES_Z) sw += zw[z] || 0;
      if (sw > 0) { // (step 37: Japan's zones' own at sunset, by their weights)
        for (let i = 0; i < 4; i++) cu[i].multiplyScalar(1 - sw);
        for (const z in CLOUD_TONES_Z) { const wz = zw[z]; if (!(wz > 0)) continue; const Q = CLOUD_TONES_Z[z].at(TOD.t); for (let i = 0; i < 4; i++) cu[i].add(Q.ug(g, CL_N[i], _cj).multiplyScalar(wz)); }
      }
      u.uShade.value.lerp(TOD.cShade, ov); u.uMid.value.lerp(_cm.copy(TOD.cShade).lerp(TOD.cLit, 0.5), ov);
      u.uLit.value.lerp(_cm.copy(TOD.cLit).multiplyScalar(1 + 0.35 * TOD.bright), ov); u.uRimCol.value.lerp(TOD.cRim, ov);
      // as the procedural clouds: in rain they melt into the low grey deck the sky draws; at night, under a clear sky, the
      // moonlit cumulus stand as clearly as in the paintings (only dimmer under cloud)
      u.uOpacity.value = (1 - TOD.night * (0.08 + 0.27 * ov)) * (1 - TOD.overcast * 0.55) * (1 - 0.85 * TOD.rain);
      u.uKn.value = api.night;
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

/** Loads the band atlas (assets/band/band3.*: the five zones' bands and, since Restyle 15, the shopping street's far city
 *  of pale high-rise flats in haze, ~/cdtest/hb2/scripts/band2.py): 'hi' (32 px/°) or 'lo' (16 px/°, phones). Resolves to
 *  null (never rejects) when the JSON or the image is missing, broken or too slow: the caller then keeps the procedural
 *  mountain rings. */
export async function loadBandAtlas(tier, timeoutMs = 15000, name = 'band3') {
  const base = ASSETS + 'band/';
  return orNull((async () => {
    const r = await fetch(base + name + '.json');
    if (!r.ok) throw new Error(name + '.json ' + r.status);
    const J = await r.json();
    const { tex, file } = await paintedTexture(base, J, tier);
    const zones = {}, ahead = {};
    for (const [z, m] of Object.entries((J.zones && J.zones[file]) || {})) {
      if (m.v1 > m.v0 && m.e1 > m.e0) zones[z] = new THREE.Vector4(m.v0, m.v1, Math.tan((m.e0 * Math.PI) / 180), Math.tan((m.e1 * Math.PI) / 180));
      if (zones[z] && m.ahead !== undefined) ahead[z] = m.ahead; // (a row that faces the road: the u of its view ahead, W3)
    }
    if (!Object.keys(zones).length) throw new Error('no zones listed');
    tex.wrapS = THREE.RepeatWrapping; // (each zone's row is one seamless loop)
    return { tex, zones, ahead, period: J.period || 120, tier: file };
  })(), timeoutMs, 'painted horizon unavailable, keeping the mountain rings:');
}

// the horizon band's tones by time of day (display sRGB), read from the paintings repainted at golden hour, sunset and night
// (ref/tod/; the far ranges', hills' and far city's pixels by their painted day lightness: ~/cdtest/tod/tools/ramps.py):
// honey-brown ranges at golden hour, mauve and rose with an orange light on the peaks at sunset, deep blue at night; ch: how
// much of the painting's own colour stays. (By day the band is the painting itself: the day key only shows in hand-overs)
export const BT_DAY = { shade: [84, 112, 132], mid: [142, 170, 190], lit: [200, 220, 234], ch: [0.6, 0.6, 0.6] };
export const BT_GOLD = { shade: [70, 78, 100], mid: [110, 108, 124], lit: [160, 140, 134], ch: [0.3, 0.3, 0.3] };
export const BT_SUNSET = { shade: [46, 36, 58], mid: [84, 56, 84], lit: [130, 76, 92], ch: [0.25, 0.25, 0.25] };
export const BT_NIGHT = { shade: [20, 38, 60], mid: [30, 54, 84], lit: [46, 76, 112], ch: [0.12, 0.12, 0.12] };
export const BAND_TONES = todTones([
  [0.0, BT_NIGHT], [0.2, mixTones(BT_NIGHT, BT_SUNSET, 0.3)], [0.245, mixTones(BT_SUNSET, BT_GOLD, 0.4)], [0.3, BT_DAY], [0.62, BT_DAY],
  [0.7, BT_GOLD], [0.75, BT_SUNSET], [0.765, mixTones(BT_SUNSET, BT_NIGHT, 0.25)], [0.8, mixTones(BT_SUNSET, BT_NIGHT, 0.55)], [0.86, BT_NIGHT], [1.0, BT_NIGHT],
]);
export const BAND_R = 2500; const BAND_LO = -8; // ring radius (m) and its bottom (degrees: far fields below the painting)
// the light the paintings stand in: the clear noon's sun and twice its sky light (sky.js KEYS at t = 0.45)
const _bc = new THREE.Vector3(), _bn = new THREE.Color(), NOON_SUN = new THREE.Color('#fff5dd').multiplyScalar(3.35), NOON_SKY = new THREE.Color('#8fb1ec').multiplyScalar(1.35 * 2);

/** The painted horizon. `atlas` from loadBandAtlas (or a list of them, of one period: a region's rows from files of their own,
 *  each row read from its own texture); `post` for the grade's uniforms; `fog` the scene's fog colour (the 3D world fades
 *  into it at its far edge); `alias`: zones without a row that borrow another's ({ zone: its stand-in }); `haze0`: the haze
 *  its far shores stand in on a bright day (Turkey's: the concept painting's Asian shore is a hazy one), or per zone
 *  ({ zone: haze }); `winZone`: the zone (or zones) whose row's light pixels take lit windows at night (Japan's far city;
 *  Turkey's Asian shore and old city). update(camera, mix) each frame, with mix = { a, b, t } from path.zoneMix; returns how
 *  much of the view's far horizon the band covers (0…1), for the procedural rings to give way. Each region's bands are an
 *  atlas (or atlases) of their own (Japan's band3, Turkey's bandtr1 and bandtr2: main.js draws one band per region, each
 *  fading the zones it has in and out). A row can be turned to face a road (rot: { zone: the u straight ahead along a
 *  heading … }: the Galata Bridge's old city ahead down the bridge, W3); the rest keep the turn of the band's first view */
export function makePaintedBand(atlas, post, fog, alias = null, haze0 = 0, winZone = 'city') {
  const AL = (Array.isArray(atlas) ? atlas : [atlas]).filter(Boolean), Z = {}, ZT = {}, AH = {};
  for (const at of AL) for (const z in at.zones) { Z[z] = at.zones[z]; ZT[z] = at.tex; if (at.ahead && at.ahead[z] !== undefined) AH[z] = at.ahead[z]; }
  atlas = AL[0];
  const top = Math.max(...Object.values(Z).map(v => v.w)), N = 192, per = 360 / atlas.period;
  const wins = new Set(Array.isArray(winZone) ? winZone : [winZone]), hz0 = z => (typeof haze0 === 'number' ? haze0 : (haze0 && haze0[z]) || 0);
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
      map: { value: atlas.tex }, mapB: { value: atlas.tex }, uRowA: { value: new THREE.Vector4() }, uRowB: { value: new THREE.Vector4() }, uMix: { value: 0 }, uAlpha: { value: 1 }, uRot: { value: 0 }, uRotAB: { value: new THREE.Vector2() },
      uLightC: { value: new THREE.Color(1, 1, 1) }, uPaint: { value: 1 }, uFogC: { value: fog }, uHaze: { value: 0 }, uHz: { value: Math.tan(0.8 * D2) },
      uGnd: { value: new THREE.Vector3(2.8, 0.0014, 700) }, uSpan: { value: new THREE.Vector2(yLo, yHi) }, ...gradeUniforms(post),
      // under a clear sky at golden hour, sunset and night: the painting in the time of day's tones (display sRGB: shade,
      // middle and light by its painted lightness, and how much of its own colour it keeps), and the far city's lit windows
      uTone: { value: 0 }, uBS: { value: new THREE.Vector3() }, uBM: { value: new THREE.Vector3() }, uBH: { value: new THREE.Vector3() }, uBCh: { value: 0 }, uSkirt: { value: 1 },
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
      uniform sampler2D map, mapB; uniform vec4 uRowA, uRowB; uniform float uMix, uAlpha, uRot, uHaze, uHz, uPaint; uniform vec3 uLightC, uFogC, uGnd;
      uniform float uTone, uBCh, uLightsOn, uSkirt; uniform vec3 uBS, uBM, uBH; uniform vec2 uWin, uRotAB;
      varying vec2 vUv;
      // a zone's row: x = v of its bottom edge, y = v of its top edge, z / w = tan(elevation) there. Above it, sky (the
      // top rows fade out: coarse mips bleed the next row's fields into them); below it, its bottom row (opaque far
      // fields, hazed into the fog: the skirt under the painting). Sampled in uniform control flow (mip selection). m: its
      // texture, o: its own turn (0 but for a row facing a road)
      vec4 band(vec4 r, sampler2D m, float o){
        float t = (vUv.y - r.z) / (r.w - r.z);
        return texture2D(m, vec2(vUv.x + uRot + o, mix(r.x, r.y, clamp(t, 0.0, 1.0)))) * (1.0 - smoothstep(0.96, 0.995, t));
      }
      void main(){
        vec4 t = band(uRowA, map, uRotAB.x);
        if (uMix > 0.001) { // the next zone's band (premultiplied: ridges dissolve into each other)
          vec4 b = band(uRowB, mapB, uRotAB.y);
          t = vec4(mix(t.rgb * t.a, b.rgb * b.a, uMix), mix(t.a, b.a, uMix));
          t.rgb /= max(t.a, 1e-4);
        }
        float a = t.a * uAlpha;
        // (a row over water without its skirt: the sea plane behind it shows, W3; but for the sliver between the horizon and
        // the plane's far edge, beyond the camera's far plane, where its own water's row shows unhazed: below)
        if (vUv.y < -0.0025 && uSkirt < 0.5) discard;
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
        float e = vUv.y, hz = (1.0 - smoothstep(0.0, uHz, e)) * uSkirt; // (a row over water: its quays crisp at the water)
        if (e < 0.0) { float d = uGnd.x / max(-e, 1e-5), fd = d * uGnd.y; hz = max(1.0 - exp(-fd * fd), smoothstep(uGnd.z * 0.8, uGnd.z, d)) * uSkirt; }
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
  /** a row's own turn against the band's (uRot): 0, or for a row turned to face a road (rot[z]) the difference, in 0…1 */
  const rotOf = z => { const r = api.rot[z]; if (r === undefined) return 0; const d = r - u.uRot.value; return d - Math.floor(d); };
  const api = {
    mesh, zones: Z,
    /** the zones without a row of their own that borrow another's (it can change: Turkey's band loads later, main.js) */
    alias,
    /** the opening view: where in its loop the band starts, straight ahead (0.125: the middle of its first painting) */
    hero: 0.125,
    /** the rows turned to face a road: { zone: the turn (its u ahead + the road's heading's share of the loop) }; ahead[z]:
     *  the u of a row's view ahead (its file lists it), for main.js to turn it with: turnTo(z, heading) */
    rot: {}, ahead: AH,
    /** rows without the skirt under their foot (the far fields, hazed into the world's far edge) and without the haze over it:
     *  over open water the sea plane runs on up to them instead ({ zone: true }: the Golden Horn up to the old city's quays) */
    noSkirt: {},
    /** zones whose row is hidden ({ zone: true }: the real Galata zone's skyline, realsky.js, stands there instead: main.js) */
    hide: {},
    /** rows with their own tones by the time of day ({ zone: todTones(…) with shade, mid, lit, ch }: Cappadocia's, W5, read from its
     *  concept's repaints); the rest take BAND_TONES */
    tones: {},
    /** (step 37) blend two rows' own tones over a hand-over between them (Japan's band: the country's row has its own since then),
     *  where the rows used to switch tables halfway through */
    blend: false,
    turnTo(z, h) { if (AH[z] === undefined) return; const r = AH[z] + (h / (Math.PI * 2)) * per; this.rot[z] = r - Math.floor(r); },
    /** m: { a, b, t } from path.zoneMix; camH: the camera's height above the ground; fogD / fogFar: the scene fog's
     *  exp² density and draw distance */
    update(camera, m, camH = 2.8, fogD = 0.0014, fogFar = 700) {
      const al = this.alias, za = Z[m.a] ? m.a : al && Z[al[m.a]] ? al[m.a] : null, zb = Z[m.b] ? m.b : al && Z[al[m.b]] ? al[m.b] : null;
      const A = za && Z[za], B = zb && Z[zb], t = m.t, hA = !!(A && this.hide[m.a]), hB = !!(B && this.hide[m.b]);
      // how much band: a zone without one fades it out and leaves the far horizon to the rings (and a zone whose row is hidden, step
      // 35R: the real Galata zone's skyline stands there instead; its row's still counted in the ring's span, so its neighbours draw as
      // they did)
      let w = 0;
      if (A && B) { u.uRowA.value.copy(hA ? B : A); u.uRowB.value.copy(B); u.map.value = ZT[hA ? zb : za]; u.mapB.value = ZT[zb]; u.uMix.value = A === B || hA || hB ? 0 : t; w = hA && hB ? 0 : hA ? Math.min(1, Math.max(0, (t - 0.7) / 0.3)) ** 2 : hB ? 1 - t : 1; } // (after a hidden row the next one comes in late: not a ghost over the hidden zone's own skyline)
      else if (A || B) { u.uRowA.value.copy(A || B); u.map.value = ZT[za || zb]; u.uMix.value = 0; w = A ? (hA ? 0 : 1 - t) : (hB ? 0 : t); }
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
      u.uRotAB.value.set(rotOf(A && !hA ? za : zb), rotOf(zb)); // (the rows' own turns: 0 but for a row facing a road)
      // the light now against the light at noon (sun + sky), and the haze: none on a bright clear day, some at dusk and
      // night, more under grey skies, most in rain; the painting itself on a bright day
      _bn.copy(TOD.sunCol).multiplyScalar(TOD.sunI); _bc.set(_bn.r, _bn.g, _bn.b);
      _bn.copy(TOD.hemiSky).multiplyScalar(TOD.hemiI * 2); _bc.x += _bn.r; _bc.y += _bn.g; _bc.z += _bn.b;
      const k = Math.min(Math.max((TOD.bright - 0.55) / 0.4, 0), 1), paint = k * k * (3 - 2 * k);
      u.uLightC.value.setRGB(_bc.x / (NOON_SUN.r + NOON_SKY.r), _bc.y / (NOON_SUN.g + NOON_SKY.g), _bc.z / (NOON_SUN.b + NOON_SKY.b)); u.uPaint.value = paint;
      // the time of day's tones (all but a bright day's: the painting itself), under a clear sky; the far city's windows
      u.uTone.value = paintSky() * (1 - paint);
      if (u.uTone.value > 0) { const P = (this.tones[(A && B ? (t < 0.5 && !hA ? za : zb) : za || zb)] || BAND_TONES).at(TOD.t); u.uBS.value.fromArray(P.rgb('shade')).divideScalar(255); u.uBM.value.fromArray(P.rgb('mid')).divideScalar(255); u.uBH.value.fromArray(P.rgb('lit')).divideScalar(255); u.uBCh.value = P.rgb('ch')[0];
        const Pa = this.tones[za] || BAND_TONES, Pb = this.tones[zb] || BAND_TONES;
        if (this.blend && A && B && !hA && !hB && Pa !== Pb) { // (step 37: Japan's rows' tones blended by the hand-over, a: 1 − t, b: t)
          Pa.at(TOD.t); Pb.at(TOD.t); const sa = Pa.rgb('shade'), sb = Pb.rgb('shade'), ma = Pa.rgb('mid'), mb = Pb.rgb('mid'), la = Pa.rgb('lit'), lb = Pb.rgb('lit');
          u.uBS.value.set(sa[0] + (sb[0] - sa[0]) * t, sa[1] + (sb[1] - sa[1]) * t, sa[2] + (sb[2] - sa[2]) * t).divideScalar(255);
          u.uBM.value.set(ma[0] + (mb[0] - ma[0]) * t, ma[1] + (mb[1] - ma[1]) * t, ma[2] + (mb[2] - ma[2]) * t).divideScalar(255);
          u.uBH.value.set(la[0] + (lb[0] - la[0]) * t, la[1] + (lb[1] - la[1]) * t, la[2] + (lb[2] - la[2]) * t).divideScalar(255);
          u.uBCh.value = Pa.rgb('ch')[0] + (Pb.rgb('ch')[0] - Pa.rgb('ch')[0]) * t; } }
      const nk = Math.min(Math.max((TOD.night - 0.15) / 0.65, 0), 1), wn = nk * nk * (3 - 2 * nk) * (1 - 0.6 * TOD.overcast);
      u.uWin.value.set(wins.has(m.a) ? wn * PAINT_TOD.on : 0, wins.has(m.b) ? wn * PAINT_TOD.on : 0); // (Turkey's: the Asian shore's houses, the old city's)
      // (alpha-tested, without MSAA: a passing haze while one zone's skyline gives way to the next, or to the rings)
      const k2 = Math.max(4 * u.uMix.value * (1 - u.uMix.value), Math.min(1, 2 * (1 - w))), fade = a2c ? 0 : 0.45 * k2 * k2 * k2;
      u.uHaze.value = 1 - (1 - (1 - (1 - 0.12 * TOD.warm - 0.25 * TOD.night) * (1 - 0.55 * TOD.overcast) * (1 - 0.6 * TOD.rain)) * (1 - paint)) * (1 - fade);
      { const h0 = A && B ? hz0(za) + (hz0(zb) - hz0(za)) * t : hz0(za || zb); if (h0 > 0) u.uHaze.value = Math.max(u.uHaze.value, h0 * paint); }
      u.uSkirt.value = (A && B ? (t < 0.5 ? this.noSkirt[za] : this.noSkirt[zb]) : this.noSkirt[za || zb]) ? 0 : 1;
      return w;
    },
  };
  return api;
}
