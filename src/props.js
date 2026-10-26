// Street furniture, trees and buildings. Every builder writes into the chunk's GBs (G.atlas, G.color, G.foliage,
// G.lamp, G.pool, G.wire) using the matrix M that places the prop. Prop-local convention: origin at the base,
// x runs along the road, the front faces −Z (towards the road), depth goes to +Z.
import * as THREE from 'three';
import { C, mulC, mixC, rng } from './util.js';
import { GB, BILL_OCT, BILL_HEX } from './geom.js';
import { TS_CAP, TS_PAD, TOWN_SHOPS, TOWN_AWNINGS } from './textures.js';

const W1 = [1, 1, 1];
export const PAL = {
  pole: C('#b1b0a9'), metal: C('#8d9198'), black: C('#2a2b30'), yellow: C('#f2c230'), white: C('#f4f3ee'), trans: C('#a0a3a8'),
  lampPole: C('#727780'), lampHead: C('#dcdcd6'), trunk: C('#6a5444'), trunkDark: C('#4b3a33'), bark: C('#7a6556'),
  leaf: C('#86ba4c'), leafShade: C('#2c6640'), sakura: C('#ffd3e3'), sakuraShade: C('#de94b4'),
  pine: C('#55874c'), pineShade: C('#1d4632'), cedar: C('#41713e'), cedarShade: C('#1b3e2a'),
  roof: C('#bdbbb3'), parapet: C('#dcdad2'), pipe: C('#c4c4bf'), orange: C('#f07a22'), red: C('#d8352a'),
  vermilion: C('#e2482c'), concrete: C('#c9c7c0'), stone: C('#a8a69e'), terracotta: C('#b8653d'), rail: C('#eeeeea'),
};
// warm plasters (漆喰) for the plastered shophouses: cream, sand, warm white, a pale ochre
export const PLASTER = ['#f4ead8', '#efe2c8', '#f6efe2', '#e9d8bc', '#f2e4cf', '#e6d5c0'].map(C);
export const TINTS = ['#f6f2ea', '#efe4d2', '#e7eaee', '#f3e2d8', '#e2eadf', '#ebe3f0', '#f6ecd4', '#e1e7f1', '#ececec', '#ddd2c4', '#f2d9cf', '#d8e6ec'].map(C);
const AWNINGS = ['#c8352b', '#2f7d4a', '#1f4e9c', '#e8c070', '#7a2f2f', '#3b6e8f'].map(C);
// the shophouses' awnings, in the city painting's colours: red, royal blue, purple, magenta, a deeper red, navy
const AWN_REF = ['#c62f2a', '#2b46a6', '#7b3c9e', '#b8336f', '#a8282a', '#273b86'].map(C);

let A = null;
export function setAtlas(a) { A = a; }
const uv = n => A.uv(n);
/** a cell of the atlases (their one namespace): for the modules that draw painted pieces of their own (ferry.js) */
export const atlasCell = n => A.uv(n);
export const uvOf = uv;
// a cell or one of its variants (base, base2, base3 …), with one random number when there are any (layouts stay as before)
const pickV = (r, base) => { let n = 1; while (A.has(base + (n + 1))) n++; if (n === 1) return base; const k = Math.floor(r() * n); return k ? base + (k + 1) : base; };

export function sub(M, x, y, z, yaw = 0) {
  const m = new THREE.Matrix4().makeRotationY(yaw); m.setPosition(x, y, z);
  const r = new THREE.Matrix4().multiplyMatrices(M, m); r.groundY = M.groundY; return r; // (keeps the prop's ground: contact AO)
}
// atlas quads: front (faces −Z), +X side, −X side
// at dusk the town lights up one window at a time: a lit home window ('win…L' / 'win…C') switches on at its own moment —
// a byte hashed from where it is (geom.js aLit, materials.js windowLights); shops, signs and the konbini (0) are always on
const litOf = (g, cell, a, b) => {
  if (!g.hasLit) return; const c0 = cell.charCodeAt(0);
  if (c0 === 118 && cell.charCodeAt(1) === 115) { g.litV = 12; return; } // a neon vertical sign: glows by day too
  if (c0 === 115 && cell.startsWith('shop_')) { const c5 = cell[5]; if ((c5 === 'g' && cell[6] === 'l') || c5 === 'd' || c5 === 'k' || c5 === 'c' || c5 === 'n' || c5 === 'p') g.litV = 6; return; } // a lit shop: warm by day too (shop_p…: the painted ones)
  if (c0 !== 119) return; const k = cell.charCodeAt(cell.length - 1); if (k !== 76 && k !== 67) return;
  const h = Math.sin(a * 12.9898 + b * 78.233 + g.e[12] * 0.731 + g.e[14] * 0.513) * 43758.5453; g.litV = 24 + Math.floor((h - Math.floor(h)) * 231);
};
const fq = (g, x0, x1, y0, y1, z, cell, c = W1) => { litOf(g, cell, x0 + z, y0); g.quad([x1, y0, z], [x0, y0, z], [x0, y1, z], [x1, y1, z], c, uv(cell)); g.litV = 0; };
const pxq = (g, x, z0, z1, y0, y1, cell, c = W1) => { litOf(g, cell, x + z0, y0); g.quad([x, y0, z1], [x, y0, z0], [x, y1, z0], [x, y1, z1], c, uv(cell)); g.litV = 0; };
const nxq = (g, x, z0, z1, y0, y1, cell, c = W1) => { litOf(g, cell, x + z0, y0); g.quad([x, y0, z0], [x, y0, z1], [x, y1, z1], [x, y1, z0], c, uv(cell)); g.litV = 0; };
const tri = (g, a, b, c, col, cell) => g.quad(a, b, c, c, col, cell ? uv(cell) : undefined);

// ------------------------------------------------------------------ street furniture
/** where a pole's wires attach (world space) — without building the pole */
const POLE_ANCH = [[0, 10.8, -0.85], [0, 10.8, -0.3], [0, 10.8, 0.3], [0, 10.8, 0.85], [0, 9.68, -0.7], [0, 9.68, 0], [0, 9.68, 0.7], [0, 5.72, -0.3], [0, 5.72, 0.3]];
export function poleAnchors(M) { return POLE_ANCH.map(p => new THREE.Vector3(p[0], p[1], p[2]).applyMatrix4(M)); }
export function utilityPole(G, M, r, opt = {}) {
  const c = G.color; c.setM(M);
  const H = 11.2;
  c.cyl(0, 0, 0, 0.17, 0.12, H, 10, opt.tr ? TR_POLE : PAL.pole);
  if (!opt.tr) for (let i = 0; i < 5; i++) c.cyl(0, 0.25 + i * 0.3, 0, 0.185, 0.185, 0.15, 10, i % 2 ? PAL.black : PAL.yellow, false); // (Japan's yellow-and-black bands)
  c.box(-0.05, H - 0.65, -0.95, 0.05, H - 0.53, 0.95, PAL.metal);
  c.box(-0.05, H - 1.75, -0.8, 0.05, H - 1.65, 0.8, PAL.metal);
  const A1 = [-0.85, -0.3, 0.3, 0.85], A2 = [-0.7, 0, 0.7];
  for (const z of A1) c.cyl(0, H - 0.53, z, 0.05, 0.035, 0.17, 6, PAL.white);
  for (const z of A2) c.cyl(0, H - 1.65, z, 0.045, 0.03, 0.15, 6, PAL.white);
  if (opt.trans) {
    c.cyl(0, 6.9, 0.5, 0.27, 0.27, 0.9, 12, PAL.trans); c.cyl(0, 7.8, 0.5, 0.27, 0.18, 0.1, 12, PAL.trans);
    c.box(-0.06, 7.2, 0.12, 0.06, 7.35, 0.26, PAL.metal);
    if (r() < 0.5) c.cyl(0, 6.0, -0.48, 0.2, 0.2, 0.62, 10, PAL.trans);
  }
  c.box(-0.04, 5.6, -0.4, 0.04, 5.68, 0.4, PAL.metal);
  if (r() < 0.6) c.box(-0.17, 3.0, -0.3, 0.17, 3.5, -0.13, PAL.concrete);
  for (let y = 2.4, k = 0; y < H - 2; y += 0.45, k++) c.rod([0, y, 0], [k % 2 ? 0.3 : -0.3, y, 0], 0.015, 0.015, 3, PAL.metal);
  G.atlas.setM(M);
  // (Japan's address plate and a festival poster; not on Turkey's poles: the same random numbers are drawn there)
  if (!opt.tr) fq(G.atlas, -0.12, 0.12, 1.7, 2.45, -0.2, 'pole_plate');
  if (r() < 0.4) { const k = Math.floor(r() * 4); if (!opt.tr) fq(G.atlas, -0.14, 0.14, 2.6, 3.0, -0.2, 'poster' + k); }
  const anchors = [...A1.map(z => [0, H - 0.4, z]), ...A2.map(z => [0, H - 1.52, z]), [0, 5.72, -0.3], [0, 5.72, 0.3]];
  return anchors.map(p => new THREE.Vector3(p[0], p[1], p[2]).applyMatrix4(M));
}

// where a light comes from (chunk-local) and how strong it is, so the car can be lit as it passes (main.js picks the two
// that light it most): overhead street lamps 1.1, park lanterns 0.9, a lit shop window 0.7 (tunnel lamps: chunks.js)
const _lp = new THREE.Vector3();
export function lampAt(G, M, x, y, z, power) { if (G.lamps) { _lp.set(x, y, z).applyMatrix4(M); G.lamps.push(_lp.x, _lp.y, _lp.z, power); } }
export function streetLamp(G, M, r, opt = {}) {
  const c = G.color; c.setM(M); lampAt(G, M, 0, 6.28, -1.42, 1.1);
  c.cyl(0, 0, 0, 0.08, 0.06, 6.0, 8, PAL.lampPole);
  c.rod([0, 5.95, 0], [0, 6.35, -0.45], 0.05, 0.045, 6, PAL.lampPole);
  c.rod([0, 6.35, -0.45], [0, 6.45, -1.35], 0.045, 0.04, 6, PAL.lampPole);
  c.box(-0.17, 6.34, -1.72, 0.17, 6.52, -1.12, PAL.lampHead);
  G.lamp.setM(M); G.lamp.box(-0.14, 6.29, -1.68, 0.14, 6.34, -1.16, W1);
  const py = opt.poolY ?? 0.04;
  G.pool.setM(M); G.pool.quad([-3.6, py, 2.2], [3.6, py, 2.2], [3.6, py, -5.2], [-3.6, py, -5.2], W1, { u0: 0, u1: 1, v0: 0, v1: 1 });
}
export function poleLamp(G, M, poolY = 0.04) { // lamp arm bolted onto a utility pole
  const c = G.color; c.setM(M); lampAt(G, M, 0, 6.6, -1.5, 1.1);
  c.rod([0, 6.2, -0.12], [0, 6.75, -0.7], 0.045, 0.04, 6, PAL.lampPole); c.rod([0, 6.75, -0.7], [0, 6.8, -1.45], 0.04, 0.035, 6, PAL.lampPole);
  c.box(-0.16, 6.68, -1.78, 0.16, 6.86, -1.22, PAL.lampHead);
  G.lamp.setM(M); G.lamp.box(-0.13, 6.63, -1.74, 0.13, 6.68, -1.26, W1);
  G.pool.setM(M); G.pool.quad([-3.6, poolY, 2.2], [3.6, poolY, 2.2], [3.6, poolY, -5.2], [-3.6, poolY, -5.2], W1, { u0: 0, u1: 1, v0: 0, v1: 1 });
}
/** a square frustum: half-width a at y0 → b at y1, faces along x and z, with optional top and bottom caps */
function sqFrustum(g, y0, y1, a, b, col, cap = false, bottom = false) {
  const P = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
  for (let i = 0; i < 4; i++) {
    const [x0, z0] = P[i], [x1, z1] = P[(i + 1) % 4];
    g.quad([x0 * a, y0, z0 * a], [x0 * b, y1, z0 * b], [x1 * b, y1, z1 * b], [x1 * a, y0, z1 * a], col);
  }
  if (cap && b > 0.001) g.quad([-b, y1, -b], [-b, y1, b], [b, y1, b], [b, y1, -b], col);
  if (bottom) g.quad([-a, y0, -a], [a, y0, -a], [a, y0, a], [-a, y0, a], col);
}
const LAMP_IRON = C('#202127');
/** a lantern-headed park lamp (as along the cherry avenue, by river bridges and on station platforms): a slim black
 *  post, a square black lantern of four warm glass panes in a frame, under a pyramid roof with a finial */
export function oldLamp(G, M) {
  const c = G.color; c.setM(M); lampAt(G, M, 0, 3.4, 0, 0.9);
  const K = LAMP_IRON, NB = { noBottom: true }; // (every chunk of the avenue builds five: kept to ~350 vertices)
  c.cyl(0, 0, 0, 0.12, 0.1, 0.28, 6, K); c.cyl(0, 0.28, 0, 0.065, 0.05, 2.8, 6, K, false); // plinth and post
  sqFrustum(c, 3.04, 3.17, 0.05, 0.17, K, true);                                      // the cup under the lantern
  for (const [x, z] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) c.box(x * 0.155 - 0.018, 3.17, z * 0.155 - 0.018, x * 0.155 + 0.018, 3.6, z * 0.155 + 0.018, K, null, NB); // corner frames
  c.box(-0.165, 3.6, -0.165, 0.165, 3.64, 0.165, K, null, NB);                        // top band
  sqFrustum(c, 3.64, 3.84, 0.23, 0.05, K); sqFrustum(c, 3.6, 3.64, 0.2, 0.23, K, false, true); // roof (with its eave)
  c.cyl(0, 3.84, 0, 0.035, 0.0, 0.12, 4, K, false);                                   // finial
  G.lamp.setM(M); G.lamp.box(-0.14, 3.17, -0.14, 0.14, 3.6, 0.14, W1);                // the glass
  G.pool.setM(M); G.pool.quad([-2.5, 0.04, 2.5], [2.5, 0.04, 2.5], [2.5, 0.04, -2.5], [-2.5, 0.04, -2.5], W1, { u0: 0, u1: 1, v0: 0, v1: 1 });
}

export function vendingMachine(G, M, r) {
  const v = Math.floor(r() * 3), body = [PAL.red, C('#2f6fd8'), PAL.white][v];
  G.color.setM(M); G.color.box(-0.5, 0, 0.01, 0.5, 1.83, 0.75, body); G.color.box(-0.53, 1.83, -0.06, 0.53, 1.9, 0.78, mulC(body, 0.8));
  G.atlas.setM(M); fq(G.atlas, -0.5, 0.5, 0, 1.83, 0, 'vend' + v);
}
export function acUnit(G, M, x, y, z) {
  G.color.setM(M); G.color.box(x - 0.4, y, z, x + 0.4, y + 0.56, z + 0.28, C('#e6e6e1'));
  G.atlas.setM(M); fq(G.atlas, x - 0.4, x + 0.4, y, y + 0.56, z - 0.003, 'ac');
}
export function bicycle(G, M, r) {
  const c = G.color; c.setM(M);
  const col = r.pick([C('#c8ccd2'), C('#c0392b'), C('#2c6fb7'), C('#2b2b2b'), C('#e8c84a'), C('#e98fb0')]);
  for (const wx of [-0.52, 0.52]) for (let i = 0; i < 12; i++) {
    const a0 = (i / 12) * Math.PI * 2, a1 = ((i + 1) / 12) * Math.PI * 2;
    c.rod([wx + Math.cos(a0) * 0.33, 0.34 + Math.sin(a0) * 0.33, 0], [wx + Math.cos(a1) * 0.33, 0.34 + Math.sin(a1) * 0.33, 0], 0.022, 0.022, 3, PAL.black);
  }
  const R = (p, q) => c.rod(p, q, 0.022, 0.022, 4, col);
  R([-0.52, 0.34, 0], [-0.05, 0.36, 0]); R([-0.05, 0.36, 0], [-0.17, 0.86, 0]); R([-0.17, 0.82, 0], [0.42, 0.8, 0]); R([0.42, 0.8, 0], [0.52, 0.34, 0]); R([-0.05, 0.36, 0], [0.42, 0.8, 0]);
  c.box(-0.28, 0.88, -0.08, -0.06, 0.94, 0.08, PAL.black);
  c.rod([0.44, 1.0, -0.27], [0.44, 1.0, 0.27], 0.018, 0.018, 4, PAL.metal); R([0.42, 0.8, 0], [0.44, 1.0, 0]);
  c.box(0.5, 0.78, -0.16, 0.8, 0.98, 0.16, PAL.metal); // front basket (mamachari)
}
export function cone(G, M) {
  const c = G.color; c.setM(M);
  c.box(-0.2, 0, -0.2, 0.2, 0.04, 0.2, PAL.orange); c.cyl(0, 0.04, 0, 0.16, 0.03, 0.68, 10, PAL.orange); c.cyl(0, 0.32, 0, 0.115, 0.095, 0.12, 10, PAL.white, false);
}
export function pottedPlant(G, M, r, x = 0, z = 0) {
  G.color.setM(M); G.color.cyl(x, 0, z, 0.17, 0.21, 0.34, 8, PAL.terracotta);
  G.leaf.setM(M); cards(G, [x, 0.45, z], x, 0.62, z, 0.32 + r() * 0.1, r() < 0.5 ? 'leafA' : 'leafB', 5, r, [1, 1, 1], [0.55, 0.62, 0.7], [0.35, 0.9]);
}
// a bookshop's magazine rack out on the pavement (the city painting's foreground): three tiers of magazines leaning back
// on a timber frame, stepping up towards the shop. The magazines are the painted bookshop window's own rows (textures.js
// shop_p1), so it takes no texture of its own
const RACK_ROWS = [[0.35, 0.455], [0.455, 0.56], [0.56, 0.665]], RACK_WOOD = C('#6b4a32');
export function magazineRack(G, M, x, z, r) {
  const c = G.color, a = G.atlas, W = 0.62, q = uv('shop_p1'), du = q.u1 - q.u0, dv = q.v1 - q.v0;
  c.setM(M); a.setM(M);
  for (const sx of [-1, 1]) c.box(x + sx * W - 0.03, 0, z - 0.32, x + sx * W + 0.03, 1.32, z + 0.24, RACK_WOOD); // the side frames
  for (let i = 0, k = Math.floor(r() * 3); i < 3; i++) {
    const yb = 0.2 + i * 0.4, yt = yb + 0.36, zf = z - 0.26 + i * 0.16, zb = zf + 0.14, [t0, t1] = RACK_ROWS[(i + k) % 3];
    a.quad([x + W, yb, zf], [x - W, yb, zf], [x - W, yt, zb], [x + W, yt, zb], W1, { u0: q.u0 + du * 0.14, u1: q.u0 + du * 0.86, v0: q.v1 - dv * t1, v1: q.v1 - dv * t0 });
    c.box(x - W, yb - 0.05, zf - 0.06, x + W, yb, zf + 0.12, RACK_WOOD); // the ledge the tier stands on
  }
}
export function bush(G, M, r, R = 0.8) {
  G.leaf.setM(M); cards(G, [0, R * 0.3, 0], 0, R * 0.6, 0, R, r() < 0.5 ? 'leafA' : 'leafB', 7, r, [1, 1, 1], [0.5, 0.58, 0.66], [0, R * 1.4]);
}
export function signPost(G, M, cell, dir, h = 2.3, size = 0.6) {
  G.color.setM(M); G.color.cyl(0, 0, 0, 0.035, 0.035, h + size / 2, 6, PAL.metal);
  G.atlas.setM(M);
  // dir = −1 → the sign faces local −X, +1 → faces +X (always towards the driver)
  if (dir < 0) nxq(G.atlas, -0.05, -size / 2, size / 2, h - size / 2, h + size / 2, cell);
  else pxq(G.atlas, 0.05, -size / 2, size / 2, h - size / 2, h + size / 2, cell);
}
export function snowPole(G, M, dir) { // 矢羽根: red-white striped pole, a down-pointing arrow hanging over the road edge
  const c = G.color; c.setM(M);
  for (let i = 0; i < 8; i++) c.cyl(0, i * 0.5, 0, 0.045, 0.045, 0.5, 6, i % 2 ? PAL.white : PAL.red, false);
  c.rod([0, 3.85, 0], [0, 3.85, -0.95], 0.025, 0.025, 4, PAL.metal);
  c.box(-0.02, 3.0, -1.12, 0.02, 3.9, -0.62, PAL.black);
  G.atlas.setM(M);
  if (dir < 0) nxq(G.atlas, -0.03, -1.12, -0.62, 3.02, 3.88, 'yabane'); else pxq(G.atlas, 0.03, -1.12, -0.62, 3.02, 3.88, 'yabane');
}
export function reflectorPost(G, M) { // 視線誘導標: a small white post with an amber reflector, on the guardrail
  const c = G.color; c.setM(M);
  c.box(-0.035, 0.84, -0.035, 0.035, 1.12, 0.035, C('#efefea'));
  c.box(-0.06, 1.0, -0.06, 0.06, 1.1, 0.06, C('#f0a020'));
}
export function curveMirror(G, M, dir) {
  const c = G.color; c.setM(M);
  c.cyl(0, 0, 0, 0.05, 0.05, 3.3, 8, PAL.orange);
  const cx = 0, cy = 3.25, R = 0.42, n = 14;
  // disc facing the oncoming driver, slightly turned towards the road
  for (let i = 0; i < n; i++) {
    const a0 = (i / n) * Math.PI * 2, a1 = ((i + 1) / n) * Math.PI * 2;
    const p = (a, rr, off) => [dir * off, cy + Math.sin(a) * rr, cx + Math.cos(a) * rr - 0.25];
    tri(c, p(0, 0, -0.02), p(dir > 0 ? a1 : a0, R, -0.02), p(dir > 0 ? a0 : a1, R, -0.02), PAL.orange);
    tri(c, p(0, 0, -0.035), p(dir > 0 ? a1 : a0, R * 0.86, -0.035), p(dir > 0 ? a0 : a1, R * 0.86, -0.035), C('#dfe9f2'));
  }
}

// ------------------------------------------------------------------ trees
// Foliage = many alpha-tested "clump cards" (painted leaf / blossom clusters) whose normals point away from the
// canopy centre, so the whole crown shades like one soft volume — the usual trick for painterly stylised trees.
let FOL = null;
export function setFoliage(f) { FOL = f; }
// foliage density: fewer, slightly larger cards per clump (overdraw of alpha-tested cards was the top GPU cost)
let LEAF_D = 1;
export function setLeafDensity(d) { LEAF_D = d; }
function cards(G, cen, cx, cy, cz, R, cell, n, r, col, dark, yr, flat = 0) {
  const uvr = FOL[cell], grow = 1 + (1 - LEAF_D) * 0.35;
  n = Math.max(2, Math.round(n * LEAF_D));
  for (let i = 0; i < n; i++) {
    let nx = r() * 2 - 1, ny = r() * 2 - 1, nz = r() * 2 - 1;
    if (flat) { ny = 1.2 + r(); }
    let l = Math.hypot(nx, ny, nz) || 1; nx /= l; ny /= l; nz /= l;
    let ax = -nz, ay = 0, az = nx; l = Math.hypot(ax, az); if (l < 0.1) { ax = 1; az = 0; l = 1; } ax /= l; az /= l;
    let bx = ny * az - nz * ay, by = nz * ax - nx * az, bz = nx * ay - ny * ax;
    const rot = Math.PI + (r() - 0.5) * 0.9, cr = Math.cos(rot), sr = Math.sin(rot); // keep each clump's sunlit top facing up
    const Ax = ax * cr + bx * sr, Ay = ay * cr + by * sr, Az = az * cr + bz * sr, Bx = bx * cr - ax * sr, By = by * cr - ay * sr, Bz = bz * cr - az * sr;
    const h = (R * (1.3 + r() * 0.45) * grow) / 2;
    const ox = cx + (r() - 0.5) * R * 0.6, oy = cy + (r() - 0.5) * R * (flat ? 0.15 : 0.5), oz = cz + (r() - 0.5) * R * 0.6;
    const P = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([u, v]) => [ox + (Ax * u + Bx * v) * h, oy + (Ay * u + By * v) * h * (flat ? 0.6 : 1), oz + (Az * u + Bz * v) * h]);
    const N = P.map(p => {
      let x = p[0] - cen[0], y = p[1] - cen[1], z = p[2] - cen[2]; let k = Math.hypot(x, y, z) || 1; x /= k; y /= k; z /= k;
      let x2 = p[0] - cx, y2 = p[1] - cy, z2 = p[2] - cz; k = Math.hypot(x2, y2, z2) || 1;
      return [x * 0.7 + (x2 / k) * 0.3, y * 0.7 + (y2 / k) * 0.3 + (flat ? 0.5 : 0), z * 0.7 + (z2 / k) * 0.3];
    });
    const Cc = P.map(p => mixC(dark, col, 0.45 + 0.55 * Math.max(0, Math.min(1, (p[1] - yr[0]) / (yr[1] - yr[0])))));
    G.leaf.card(P, N, uvr, Cc);
  }
}
/** a roadside tuft of grass (or wildflowers): two crossed cards, shaded like the ground, bending in the breeze */
export function tuft(G, M, r, kind = 'grass', s = 1) {
  const uvr = FOL[kind], h = (0.42 + r() * 0.38) * s, w = h * 1.2, a0 = r() * Math.PI;
  const UP = [0, 1, 0], N = [UP, UP, UP, UP], lo = [0.6, 0.64, 0.58], hi = [1, 1, 1];
  G.leaf.setM(M);
  for (const a of [a0, a0 + Math.PI / 2]) {
    const cx = (Math.cos(a) * w) / 2, cz = (Math.sin(a) * w) / 2;
    G.leaf.card([[-cx, -0.05, -cz], [cx, -0.05, cz], [cx, h, cz], [-cx, h, -cz]], N, uvr, [lo, lo, hi, hi]);
  }
}
/** a low round bush in white flower (白い花の茂み) on the coast road's verge, as in the reference art: two crossed cards of
 *  the foliage atlas's flowering bush, shaded like the ground (it stands still in the breeze: woody) */
export function flowerBush(G, M, r, s = 1) {
  const uvr = FOL.flowerbush; if (!uvr) return;
  const h = (0.8 + r() * 0.35) * s, w = h * 1.7, a0 = r() * Math.PI;
  const UP = [0, 1, 0], N = [UP, UP, UP, UP], lo = [0.6, 0.64, 0.6], hi = [1, 1, 1];
  G.leaf.setM(M);
  for (const a of [a0, a0 + Math.PI / 2]) {
    const cx = (Math.cos(a) * w) / 2, cz = (Math.sin(a) * w) / 2;
    G.leaf.card([[-cx, -0.06, -cz], [cx, -0.06, cz], [cx, h, cz], [-cx, h, -cz]], N, uvr, [lo, lo, hi, hi]);
  }
}
/** 花壇: a clump of a flower bed in pink and violet among white (round the cherry avenue's trees, along its pavements and
 *  on the coast's verge): two crossed cards of the foliage atlas's flower bed, twice as wide as tall, shaded like the
 *  ground (white beds are the flowering bush, smaller: flowerBush) */
export function flowerBed(G, M, r, s = 1) {
  const uvr = FOL.bedA; if (!uvr) return;
  const h = (0.36 + r() * 0.16) * s, w = h * 2, a0 = r() * Math.PI;
  const UP = [0, 1, 0], N = [UP, UP, UP, UP], lo = [0.6, 0.64, 0.6], hi = [1, 1, 1];
  G.leaf.setM(M);
  for (const a of [a0, a0 + Math.PI / 2]) {
    const cx = (Math.cos(a) * w) / 2, cz = (Math.sin(a) * w) / 2;
    G.leaf.card([[-cx, -0.04, -cz], [cx, -0.04, cz], [cx, h, cz], [-cx, h, -cz]], N, uvr, [lo, lo, hi, hi]);
  }
}
/** a clump of the country verge's bank of tall grass and wildflowers (土手の草むら): one wide card standing across the
 *  verge, its low end at the road, so it faces the road ahead and behind (turned by up to ±23°). Shaded like
 *  the ground and bending in the breeze, like the tufts. Overlapping along the verge, the clumps make one bank rising
 *  from the road edge towards the field */
const BANK_LO = [0.62, 0.68, 0.74]; // (the clump's own shade at its root: darker, cooler)
// the card follows the clump's outline (x from the road end across, y up): the painting leaves the top corner over its
// low road end empty, and every fragment there would only be shaded and thrown away (5% fewer fragments than a quad)
const BANK_HULL = [[0, 0], [1, 0], [1, 1], [0.36, 1], [0, 0.7]], BANK_TRI = [0, 1, 2, 0, 2, 3, 0, 3, 4];
const BANK_COL = BANK_HULL.map(([, y]) => mixC(BANK_LO, W1, y));
export function bank(G, px, py, pz, dx, dz, r, s = 1, cell = null, tint = null) { // (base point, and the horizontal direction away from the road; cell: bankA, bankB, or bankC (the coast's, without flowers, which stands still in the breeze); else A or B at random; tint: its vertex colours' multiplier (the Bosphorus's))
  const c = FOL[cell || (r() < 0.5 ? 'bankA' : 'bankB')], h = 0.82 * s, w = (h + 0.06) * 2.03, g = G.leaf;
  for (const k of BANK_TRI) {
    const [x, y] = BANK_HULL[k], o = (x - 0.5) * w, bc = BANK_COL[k];
    g.vtx(px + dx * o, py + y * (h + 0.06) - 0.06, pz + dz * o, 0, 1, 0, c.u0 + (c.u1 - c.u0) * x, c.v0 + (c.v1 - c.v0) * y, tint ? [bc[0] * tint[0], bc[1] * tint[1], bc[2] * tint[2]] : bc);
  }
}
/** how far apart the bank's clumps stand along the verge (m): fewer on phones (set with the foliage density) */
export const bankStep = () => (LEAF_D > 0.7 ? 0.9 : 1.25);
export function treeBroad(G, M, r, s = 1) {
  const h = r.range(5.5, 7.5) * s;
  G.color.setM(M); G.color.cyl(0, 0, 0, 0.2 * s, 0.13 * s, h * 0.55, 7, PAL.trunk);
  for (let i = 0; i < 3; i++) { const a = r() * 6.28; G.color.rod([0, h * 0.42, 0], [Math.cos(a) * 1.1 * s, h * 0.68, Math.sin(a) * 1.1 * s], 0.09 * s, 0.05 * s, 5, PAL.trunk); }
  G.leaf.setM(M);
  const cen = [0, h * 0.78, 0], cell = r() < 0.5 ? 'leafA' : 'leafB', yr = [h * 0.45, h * 1.15];
  const n = 7 + Math.floor(r() * 3);
  for (let i = 0; i < n; i++) {
    const a = r() * 6.28, rr = (0.6 + r()) * 1.3 * s;
    cards(G, cen, Math.cos(a) * rr, h * (0.62 + r() * 0.3), Math.sin(a) * rr, (1.1 + r() * 0.6) * s, cell, 6, r, [1, 1, 1], [0.55, 0.62, 0.7], yr);
  }
  cards(G, cen, 0, h * 0.98, 0, 1.4 * s, cell, 7, r, [1, 1, 1], [0.55, 0.62, 0.7], yr);
}
export function treeSakura(G, M, r, s = 1) {
  const h = r.range(5.5, 7) * s;
  G.color.setM(M); G.color.cyl(0, 0, 0, 0.26 * s, 0.17 * s, h * 0.45, 7, PAL.trunkDark);
  const tips = [];
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * 6.28 + r() * 0.8, L = (2.2 + r() * 1.6) * s, tip = [Math.cos(a) * L, h * (0.62 + r() * 0.18), Math.sin(a) * L];
    G.color.rod([0, h * 0.4, 0], tip, 0.12 * s, 0.05 * s, 5, PAL.trunkDark); tips.push(tip);
    G.color.rod(tip, [tip[0] * 1.25, tip[1] + 0.9 * s, tip[2] * 1.25], 0.05 * s, 0.02 * s, 4, PAL.trunkDark);
  }
  G.leaf.setM(M);
  const cen = [0, h * 0.72, 0], yr = [h * 0.5, h * 1.1], dark = [0.72, 0.62, 0.72];
  for (const t of tips) for (let j = 0; j < 2; j++) cards(G, cen, t[0] + (r() - 0.5) * 1.4 * s, t[1] + r() * 0.9 * s, t[2] + (r() - 0.5) * 1.4 * s, (1.2 + r() * 0.5) * s, 'sakura', 6, r, [1, 1, 1], dark, yr);
  cards(G, cen, 0, h * 0.92, 0, 1.9 * s, 'sakura', 9, r, [1, 1, 1], dark, yr);
}
export function treePine(G, M, r, s = 1) {
  const c = G.color; c.setM(M);
  const lean = (r() - 0.5) * 1.6 * s, h = r.range(5, 7.5) * s;
  const p1 = [lean * 0.4, h * 0.45, 0.2], p2 = [lean, h * 0.8, -0.2];
  c.rod([0, 0, 0], p1, 0.2 * s, 0.15 * s, 6, PAL.trunkDark); c.rod(p1, p2, 0.15 * s, 0.09 * s, 6, PAL.trunkDark);
  G.leaf.setM(M);
  const pads = [[p2[0], p2[1] + 0.3, p2[2], 1.7], [p1[0] + 1.4 * s, p1[1] + 0.8, 0.5, 1.3], [p1[0] - 1.3 * s, p1[1] + 1.4, -0.4, 1.2], [p2[0] + 0.9 * s, p2[1] - 0.6, 0.8, 1.1]];
  for (const [x, y, z, rr] of pads) {
    c.rod(x > p1[0] ? p1 : p2, [x, y - 0.2, z], 0.07 * s, 0.04 * s, 4, PAL.trunkDark);
    cards(G, [x, y - 0.8, z], x, y, z, rr * s * 1.3, 'pine', 9, r, [1, 1, 1], [0.62, 0.68, 0.74], [y - 0.7, y + 0.5], 1);
  }
}
export function treeMaple(G, M, r, s = 1) { // momiji: low, wide crown of red and orange
  const h = r.range(4.5, 6.5) * s;
  G.color.setM(M); G.color.cyl(0, 0, 0, 0.18 * s, 0.12 * s, h * 0.5, 7, PAL.trunkDark);
  const tips = [];
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * 6.28 + r() * 0.8, L = (1.8 + r() * 1.4) * s, tip = [Math.cos(a) * L, h * (0.55 + r() * 0.2), Math.sin(a) * L];
    G.color.rod([0, h * 0.38, 0], tip, 0.09 * s, 0.04 * s, 5, PAL.trunkDark); tips.push(tip);
  }
  G.leaf.setM(M);
  const cen = [0, h * 0.7, 0], yr = [h * 0.45, h * 1.1], dark = [0.62, 0.52, 0.56];
  for (const t of tips) cards(G, cen, t[0], t[1] + 0.4 * s, t[2], (1.15 + r() * 0.4) * s, 'momiji', 6, r, [1, 1, 1], dark, yr);
  cards(G, cen, 0, h * 0.92, 0, 1.6 * s, 'momiji', 8, r, [1, 1, 1], dark, yr);
}
export function treeGinkgo(G, M, r, s = 1) { // a tall golden ginkgo
  const h = r.range(8, 11) * s;
  G.color.setM(M); G.color.cyl(0, 0, 0, 0.22 * s, 0.1 * s, h * 0.85, 7, PAL.trunk);
  G.leaf.setM(M);
  const cen = [0, h * 0.62, 0], yr = [h * 0.3, h * 1.02], dark = [0.68, 0.6, 0.52];
  for (let i = 0; i < 7; i++) {
    const y = h * (0.34 + i * 0.09), rad = (2.1 - i * 0.24) * s, a = r() * 6.28;
    cards(G, cen, Math.cos(a) * rad * 0.35, y, Math.sin(a) * rad * 0.35, Math.max(0.7, rad) * 1.05, 'ginkgo', 5, r, [1, 1, 1], dark, yr);
  }
}
export function treeBirch(G, M, r, s = 1) { // 白樺: a bare winter birch, white bark with dark marks
  const c = G.color; c.setM(M);
  const h = r.range(7, 10) * s, lean = (r() - 0.5) * 0.5;
  c.rod([0, 0, 0], [lean, h, 0], 0.13 * s, 0.05 * s, 7, C('#eeece6'));
  for (let i = 0; i < 7; i++) { const y = r.range(0.4, h * 0.85), t = y / h; c.cyl(lean * t, y, 0, 0.135 * s * (1 - t * 0.6), 0.13 * s * (1 - t * 0.6), 0.05, 7, C('#2b2b30'), false); }
  for (let i = 0; i < 7; i++) {
    const y = h * (0.45 + r() * 0.5), a = r() * 6.28, L = (0.8 + r() * 1.6) * s, t = y / h;
    c.rod([lean * t, y, 0], [lean * t + Math.cos(a) * L, y + L * 0.9, Math.sin(a) * L], 0.035 * s, 0.012 * s, 4, C('#8b7f78'));
  }
  // the crown of fine bare twigs, a purple-brown haze around the branches (it was a white pole with a few sticks)
  const cy = h * 0.7, R = (1.5 + r() * 0.5) * s;
  G.leaf.setM(M); cards(G, [lean * 0.7, cy, 0], lean * 0.7, cy, 0, R, 'twigs', 3, r, [1, 1, 1], [0.92, 0.9, 0.92], [cy - R, cy + R]);
}
export function treeSnowCedar(G, M, r, s = 1) { // a cedar weighed down with snow
  const h = r.range(9, 13) * s;
  G.color.setM(M); G.color.cyl(0, 0, 0, 0.22 * s, 0.15 * s, h * 0.3, 6, PAL.trunkDark);
  G.foliage.setM(M);
  const DK = C('#1d3a2c'), SN = C('#eef2f8'), SN2 = C('#d7e0ec');
  for (let i = 0; i < 4; i++) {
    const y0 = h * (0.16 + i * 0.19), r0 = (1.9 - i * 0.38) * s, hh = h * 0.3;
    G.foliage.cyl(0, y0, 0, r0, r0 * 0.3, hh, 9, DK);
    G.foliage.cyl(0, y0 + hh * 0.45, 0, r0 * 0.72, 0.05, hh * 0.62, 9, i % 2 ? SN : SN2); // snow resting on each tier
  }
}
export function treeCedar(G, M, r, s = 1) {
  const h = r.range(9, 14) * s;
  G.color.setM(M); G.color.cyl(0, 0, 0, 0.22 * s, 0.15 * s, h * 0.3, 6, PAL.trunkDark);
  G.foliage.setM(M);
  G.foliage.cyl(0, h * 0.18, 0, 1.9 * s, 0.9 * s, h * 0.45, 9, PAL.cedarShade);
  G.foliage.cyl(0, h * 0.5, 0, 1.45 * s, 0.05, h * 0.5, 9, PAL.cedar);
}

// ---- smooth bark: the painted trees' trunks, limbs and branches as tapered tubes along gentle curves (GB.tube), drawn in
// their own soft bark material (materials.js barkMaterial) instead of the props' faceted rods in hard toon steps ----
// sides round a trunk, a limb, a branch and a twig, and the steps along a limb: more on desktops (a near cherry trunk is
// ~100 px wide), fewer on phones
const barkSides = () => (LEAF_D > 0.7 ? [12, 9, 6, 4, 5] : [8, 6, 4, 3, 4]);
// the vertex colour is a key, not a colour: r the kind of bark (0 cherry, 1 broadleaf), g light (1 open … deep in a crown)
const BARK_SAK = [0, 1, 1], BARK_BROAD = [1, 1, 1], BARK_SAK_IN = [0, 0.82, 1], BARK_BROAD_IN = [1, 0.8, 1];
const SEAM_UP = [0, 1, 0], SEAM_BACK = [0, 0, 1];
// the parameters 0…1 of n equal steps
const steps = n => { const T = []; for (let i = 0; i <= n; i++) T.push(i / n); return T; };
/** points along a quadratic Bézier from p0 to p2 that passes through m halfway (at the parameters T) */
function curve(p0, m, p2, T) {
  const cx = 2 * m[0] - (p0[0] + p2[0]) / 2, cy = 2 * m[1] - (p0[1] + p2[1]) / 2, cz = 2 * m[2] - (p0[2] + p2[2]) / 2;
  return T.map(t => { const u = 1 - t, a = u * u, b = 2 * u * t, d = t * t; return [a * p0[0] + b * cx + d * p2[0], a * p0[1] + b * cy + d * p2[1], a * p0[2] + b * cz + d * p2[2]]; });
}
/** radii from r0 to r1: the wood stays full a while, then thins (the curve of three's TreeGenerator) */
const taper = (T, r0, r1) => T.map(t => r1 + (r0 - r1) * Math.pow(1 - t, 0.7));
/** a trunk from under the ground (y −0.25) to `top`, bowing a little through its middle (bow: x, z offsets), with a root
 *  flare and a rounded crotch over the fork, out of which the limbs rise (they start inside it) */
function trunkTube(k, top, rb, rt, bow, sides, col) {
  const T = [0, 0.06, 0.15, 0.4, 0.7, 1], y0 = -0.25, y1 = top[1] + 0.1;
  const P = curve([0, y0, 0], [top[0] * 0.5 + bow[0], (y0 + y1) / 2, top[2] * 0.5 + bow[1]], [top[0], y1, top[2]], T);
  const R = T.map((t, i) => { const fl = Math.max(0, 1 - (P[i][1] - y0) / 0.75); return (rb + (rt - rb) * Math.pow(t, 1.3)) * (1 + 0.62 * Math.pow(fl, 2.5)); });
  P.push([top[0], y1 + rt * 0.5, top[2]]); R.push(rt * 0.1);
  k.tube(P, R, sides, col, SEAM_BACK);
}

// ---- Ghibli-style broadleaf crowns from painted leaf clusters (ghibli.js; materials.js makeGhibliLeaf lights them) ----
// GHIBLI.cells: the cluster atlas's leaf cells, once it has loaded (main.js); until then, and if it fails, the broadleaf
// trees keep their card crowns (treeBroad)
export const GHIBLI = { cells: null, bcells: null };
/** a broadleaf tree with a crown of painted leaf clusters, like the reference art's: a stout bole forking into limbs
 *  that reach up into the crown, and 26–32 camera-facing clusters on the crown's shell, pulled toward 5–7 lobe
 *  directions so the crown reads as a few big masses with gaps between them. Through the gaps shows the crown's core:
 *  one big cluster in the middle, in deep shade, drawn first, so it also hides every cluster behind it from the GPU.
 *  The cards are octagons just round each painted cluster (a third fewer fragments than squares). */
export function treeGhibli(G, M, r, s = 1) {
  const big = r() < 0.3 ? 1.22 : 1, h = r.range(6.2, 8.0) * s * big;
  const k = G.bark; k.setM(M);
  const bh = h * r.range(0.3, 0.38); // the bole, forking into limbs that reach up into the crown (seen through its gaps)
  // (the smooth bark's own random numbers: the layout and the crown keep theirs)
  const q = rng(Math.floor(h * 7919 + bh * 104729)), [nT, nL, nB, , nS] = barkSides();
  trunkTube(k, [0, bh, 0], 0.27 * s * big, 0.2 * s * big, [q.range(-0.05, 0.05) * s, q.range(-0.05, 0.05) * s], nT, BARK_BROAD);
  const cy = h * 0.64, Rx = r.range(2.6, 3.2) * s * big, Ry = r.range(2.0, 2.5) * s * big, k3 = s * big;
  const lobeDirs = [], nl = 5 + Math.floor(r() * 3);
  for (let i = 0; i < nl; i++) { const a = (i / nl) * 6.283 + r() * 0.6, el = r.range(-0.15, 0.75), ce = Math.sqrt(1 - el * el); lobeDirs.push([Math.cos(a) * ce, el, Math.sin(a) * ce]); }
  lobeDirs.push([0, 1, 0]);
  const all = [[0, cy + 0.15 * Ry, 0, 1.76 * k3, 1]]; // the core
  const nc = 26 + Math.floor(r() * 7);
  for (let i = 0; i < nc; i++) { // the shell: smaller clusters pulled toward the lobe directions
    let dx = r() * 2 - 1, dy = r.range(-0.55, 1), dz = r() * 2 - 1, l = Math.hypot(dx, dy, dz) || 1; dx /= l; dy /= l; dz /= l;
    let best = lobeDirs[0], bd = -2; for (const L of lobeDirs) { const d = L[0] * dx + L[1] * dy + L[2] * dz; if (d > bd) { bd = d; best = L; } }
    dx = dx * 0.45 + best[0] * 0.55; dy = dy * 0.45 + best[1] * 0.55; dz = dz * 0.45 + best[2] * 0.55; l = Math.hypot(dx, dy, dz) || 1; dx /= l; dy /= l; dz /= l;
    const rr = r.range(0.78, 0.95);
    all.push([dx * Rx * rr, cy + dy * Ry * rr, dz * Rx * rr, r.range(0.8, 1.1) * k3, 0]);
  }
  // the limbs: out of the crotch, rising steeply and curving out towards four of the crown's lobes, each with a branch or
  // two reaching on up into the crown
  for (let i = 0; i < 4; i++) {
    const d = lobeDirs[i % nl], dh = Math.hypot(d[0], d[2]) || 1, ox = d[0] / dh, oz = d[2] / dh;
    const b0 = [ox * 0.06 * k3, bh * 0.86, oz * 0.06 * k3], e = [d[0] * Rx * 0.55, cy + Math.min(0, d[1]) * Ry * 0.4 - 0.3 * s, d[2] * Rx * 0.55];
    const m = [(b0[0] + e[0]) * 0.5 - ox * 0.12 * k3, (b0[1] + e[1]) * 0.5 + 0.18 * k3, (b0[2] + e[2]) * 0.5 - oz * 0.12 * k3];
    const T = steps(nS), P = curve(b0, m, e, T);
    k.tube(P, taper(T, 0.16 * k3, 0.06 * s), nL, BARK_BROAD, SEAM_UP);
    for (let j = 0, nb = 1 + (q() < 0.5 ? 1 : 0); j < nb; j++) {
      const p = P[nS - 2 + j], a = Math.atan2(oz, ox) + (j ? 1 : -1) * q.range(0.35, 0.8), L = q.range(0.9, 1.4) * k3;
      const e2 = [p[0] + Math.cos(a) * L * 0.8, p[1] + L * q.range(0.6, 0.9), p[2] + Math.sin(a) * L * 0.8];
      const T2 = steps(3);
      k.tube(curve(p, [(p[0] + e2[0]) / 2, (p[1] + e2[1]) / 2 + 0.1 * L, (p[2] + e2[2]) / 2], e2, T2), taper(T2, 0.07 * k3, 0.025 * s), nB, BARK_BROAD_IN, SEAM_UP);
    }
  }
  const hue = r(), tint = hue < 0.5 ? [1, 1, 0.92 + hue * 0.16] : [1.0 - (hue - 0.5) * 0.12, 1, 0.9];
  const g = G.gleaf; g.setM(M);
  for (const [x, y, z, rad, core] of all) {
    let nx = x, ny = (y - cy) * (Rx / Ry) + 0.1 * Rx, nz = z; const l = Math.hypot(nx, ny, nz) || 1; nx /= l; ny /= l; nz /= l;
    if (core) { nx = nz = 0; ny = -1; } // (a straight-down normal marks the core for the shader: it casts no shadow, and takes the crown's)
    // crown occlusion: the core and the underside get less light (a painter's darker core and underside)
    const ht = Math.min(1, Math.max(0, (y - (cy - Ry)) / (2 * Ry))), k = core ? 0.55 : 0.72 + 0.28 * ht, hh = (rad / 0.8) * 0.88;
    g.bill(x, y, z, nx, ny, nz, hh, hh, GHIBLI.cells[Math.floor(r() * GHIBLI.cells.length)], [tint[0] * k, tint[1] * k, tint[2] * k], BILL_OCT, 0.88);
  }
}

/** a plane tree (çınar) of a Turkish town's pavements (W4), as the concept paints them: treeGhibli's painted crown and smooth
 *  bark, but a tall bole forking at ~4.5 m and the crown high over the pavement (its underside ~4.5 m up, clear of the shops'
 *  signs and awnings), narrower, and reaching a little out over the road (−z: built facing it) */
export function treeGhibliPlane(G, M, r, s = 1) {
  const h = r.range(9.6, 11.2) * s, k = G.bark; k.setM(M);
  const bh = h * r.range(0.4, 0.45), cz = -0.65 * s;
  const q = rng(Math.floor(h * 7919 + bh * 104729) + 31), [nT, nL, nB, , nS] = barkSides();
  trunkTube(k, [0, bh, cz * 0.35], 0.25 * s, 0.18 * s, [q.range(-0.05, 0.05) * s, q.range(-0.05, 0.05) * s], nT, BARK_BROAD);
  const cy = h * 0.7, Rx = r.range(2.9, 3.4) * s, Ry = r.range(2.4, 2.8) * s;
  const lobeDirs = [], nl = 5 + Math.floor(r() * 3);
  for (let i = 0; i < nl; i++) { const a = (i / nl) * 6.283 + r() * 0.6, el = r.range(-0.1, 0.75), ce = Math.sqrt(1 - el * el); lobeDirs.push([Math.cos(a) * ce, el, Math.sin(a) * ce]); }
  lobeDirs.push([0, 1, 0]);
  const all = [[0, cy + 0.15 * Ry, cz, 1.8 * s, 1]];
  const nc = 28 + Math.floor(r() * 7);
  for (let i = 0; i < nc; i++) {
    let dx = r() * 2 - 1, dy = r.range(-0.5, 1), dz = r() * 2 - 1, l = Math.hypot(dx, dy, dz) || 1; dx /= l; dy /= l; dz /= l;
    let best = lobeDirs[0], bd = -2; for (const L of lobeDirs) { const d = L[0] * dx + L[1] * dy + L[2] * dz; if (d > bd) { bd = d; best = L; } }
    dx = dx * 0.45 + best[0] * 0.55; dy = dy * 0.45 + best[1] * 0.55; dz = dz * 0.45 + best[2] * 0.55; l = Math.hypot(dx, dy, dz) || 1; dx /= l; dy /= l; dz /= l;
    const rr = r.range(0.78, 0.95);
    all.push([dx * Rx * rr, cy + dy * Ry * rr, cz + dz * Rx * rr, r.range(0.8, 1.05) * s, 0]);
  }
  for (let i = 0; i < 4; i++) { // the limbs out of the fork, up into the crown
    const d = lobeDirs[i % nl], dh = Math.hypot(d[0], d[2]) || 1, ox = d[0] / dh, oz = d[2] / dh;
    const b0 = [ox * 0.05 * s, bh * 0.9, cz * 0.35 + oz * 0.05 * s], e = [d[0] * Rx * 0.55, cy + Math.min(0, d[1]) * Ry * 0.4 - 0.3 * s, cz + d[2] * Rx * 0.55];
    const m = [(b0[0] + e[0]) * 0.5 - ox * 0.1 * s, (b0[1] + e[1]) * 0.5 + 0.2 * s, (b0[2] + e[2]) * 0.5 - oz * 0.1 * s];
    const T = steps(nS), P = curve(b0, m, e, T);
    k.tube(P, taper(T, 0.14 * s, 0.05 * s), nL, BARK_BROAD, SEAM_UP);
    const p = P[nS - 1], a = Math.atan2(oz, ox) + q.range(-0.6, 0.6), L = q.range(0.9, 1.3) * s;
    const e2 = [p[0] + Math.cos(a) * L * 0.7, p[1] + L * q.range(0.6, 0.9), p[2] + Math.sin(a) * L * 0.7], T2 = steps(3);
    k.tube(curve(p, [(p[0] + e2[0]) / 2, (p[1] + e2[1]) / 2 + 0.1 * L, (p[2] + e2[2]) / 2], e2, T2), taper(T2, 0.06 * s, 0.022 * s), nB, BARK_BROAD_IN, SEAM_UP);
  }
  const hue = r(), tint = [0.64 - hue * 0.04, 0.63, 0.56 + hue * 0.06]; // (the concept's: a deeper olive green than the coast's crowns)
  const g = G.gleaf; g.setM(M);
  for (const [x, y, z, rad, core] of all) {
    let nx = x, ny = (y - cy) * (Rx / Ry) + 0.1 * Rx, nz = z - cz; const l = Math.hypot(nx, ny, nz) || 1; nx /= l; ny /= l; nz /= l;
    if (core) { nx = nz = 0; ny = -1; }
    const ht = Math.min(1, Math.max(0, (y - (cy - Ry)) / (2 * Ry))), kk = core ? 0.55 : 0.72 + 0.28 * ht, hh = (rad / 0.8) * 0.88;
    g.bill(x, y, z, nx, ny, nz, hh, hh, GHIBLI.cells[Math.floor(r() * GHIBLI.cells.length)], [tint[0] * kk, tint[1] * kk, tint[2] * kk], BILL_OCT, 0.88);
  }
}

// ---- cherry trees (桜) from painted blossom clusters, as the sakura painting draws them (GHIBLI.bcells: the atlas's
// blossom cells; without them the cherry trees keep their card crowns, treeSakura) ----
/** A big old cherry tree: a thick dark trunk forking at 2.2–2.7 m into three or four limbs that rise in a wide V, and a
 *  broad crown of blossom clusters high on them, 8–9 m across (at s = 1). `ave`: an avenue tree, built facing the road
 *  (−z): its trunk leans a little away from the road and its crown reaches a little out over it, so the crowns of the two
 *  rows close into a tunnel down the road, as in the painting, leaving a slot of sky over the middle near the car. The
 *  crown's core (two big clusters in its shade) is drawn first and hides the clusters behind it. 23–26 hexagonal cards
 *  in all (the old card crown had ~46 square ones, at random angles) */
export function treeGhibliSakura(G, M, r, s = 1, ave = false) {
  const k = G.bark; k.setM(M);
  const lean = ave ? 1 : 0, h0 = r.range(2.2, 2.7) * s, r0 = r.range(0.3, 0.35) * s;
  const top = [r.range(-0.15, 0.15) * s, h0, lean * 0.3 * s];
  // (the smooth bark's own random numbers: the layout and the crown keep theirs)
  const q = rng(Math.floor(h0 * 7919 + r0 * 104729) + (ave ? 17 : 0)), [nT, nLs, nB, nW, nS] = barkSides();
  trunkTube(k, top, r0, r0 * 0.8, [q.range(-0.07, 0.07) * s, q.range(-0.07, 0.07) * s], nT, BARK_SAK);
  // the crown: a broad dome high over the fork, pushed out over the road on an avenue
  const cy = r.range(6.3, 6.9) * s, cz = -lean * 0.5 * s, Rx = r.range(4.0, 4.5) * s, Rz = r.range(3.6, 4.0) * s, Ry = r.range(1.7, 2.0) * s;
  // the limbs: three or four rising steeply in a wide V from the fork (one of them toward the road on an avenue), each
  // bending once on its way up, then forking into branches that reach into the crown's underside
  const nL = r() < 0.35 ? 4 : 3, a0 = ave ? -Math.PI / 2 + r.range(-0.35, 0.35) : r() * 6.283;
  for (let i = 0; i < nL; i++) {
    const a = a0 + (i / nL) * 6.283 + r.range(-0.3, 0.3), ca = Math.cos(a), sa = Math.sin(a), out = r.range(0.32, 0.46);
    const tip = [top[0] + ca * Rx * out, cy - Ry * r.range(0.35, 0.55), top[2] * 0.5 + cz * 0.4 + sa * Rz * out];
    const mid = [top[0] + (tip[0] - top[0]) * 0.45 + ca * 0.25 * s, h0 + (tip[1] - h0) * 0.55, top[2] + (tip[2] - top[2]) * 0.45 + sa * 0.25 * s];
    // one smooth limb out of the trunk's crotch (it starts inside it), curving out through mid to tip as it thins
    const b0 = [top[0] + ca * r0 * 0.3, h0 - r0 * 0.45, top[2] + sa * r0 * 0.3], T = steps(nS), P = curve(b0, mid, tip, T);
    k.tube(P, taper(T, r0 * 0.64, r0 * 0.3), nLs, BARK_SAK, SEAM_UP);
    const tb = P[nS - 1], nb = i % 2 ? 1 : 2; // (branches up into the crown: two on every other limb)
    for (let j = 0; j < nb; j++) {
      const b = (j ? 1 : -1) * r.range(0.3, 0.9), L = r.range(1.2, 1.9) * s;
      const e = [tip[0] + Math.cos(a + b) * L, tip[1] + r.range(0.7, 1.2) * s, tip[2] + Math.sin(a + b) * L];
      // bowing up a little on its way out, and a thinner twig off it on towards the crown's underside
      const T2 = steps(3), P2 = curve(tb, [(tb[0] + e[0]) / 2, (tb[1] + e[1]) / 2 + L * 0.1, (tb[2] + e[2]) / 2], e, T2);
      k.tube(P2, taper(T2, r0 * 0.27, 0.035 * s), nB, BARK_SAK_IN, SEAM_UP);
      const p = P2[1], a2 = a + b + (q() < 0.5 ? -1 : 1) * q.range(0.5, 1.0), L2 = q.range(0.8, 1.3) * s;
      const e2 = [p[0] + Math.cos(a2) * L2, p[1] + L2 * q.range(0.15, 0.45), p[2] + Math.sin(a2) * L2];
      k.tube([p, [(p[0] + e2[0]) / 2, (p[1] + e2[1]) / 2 + 0.06 * L2, (p[2] + e2[2]) / 2], e2], [0.05 * s, 0.032 * s, 0.014 * s], nW, BARK_SAK_IN);
    }
  }
  // 6–7 lobe directions, as on the broadleaf crowns: the clusters gather toward them, so the crown reads as a few big
  // billows of blossom with gaps between them
  const lobes = [], nl = 6 + Math.floor(r() * 2);
  for (let i = 0; i < nl; i++) { const a = (i / nl) * 6.283 + r() * 0.5, el = r.range(-0.2, 0.6), ce = Math.sqrt(1 - el * el); lobes.push([Math.cos(a) * ce, el, Math.sin(a) * ce]); }
  lobes.push([0, 1, 0]);
  const all = [[-Rx * 0.3, cy, cz, 1.75 * s, 1], [Rx * 0.3, cy, cz, 1.75 * s, 1]]; // the core
  const nc = 21 + Math.floor(r() * 4);
  for (let i = 0; i < nc; i++) {
    let dx = r() * 2 - 1, dy = r.range(-0.3, 1), dz = r() * 2 - 1, l = Math.hypot(dx, dy, dz) || 1; dx /= l; dy /= l; dz /= l;
    let best = lobes[0], bd = -2; for (const L of lobes) { const d = L[0] * dx + L[1] * dy + L[2] * dz; if (d > bd) { bd = d; best = L; } }
    dx = dx * 0.5 + best[0] * 0.5; dy = dy * 0.5 + best[1] * 0.5; dz = dz * 0.5 + best[2] * 0.5; l = Math.hypot(dx, dy, dz) || 1; dx /= l; dy /= l; dz /= l;
    const rr = r.range(0.8, 0.95);
    all.push([dx * Rx * rr, cy + dy * Ry * rr, cz + dz * Rz * rr, r.range(1.0, 1.3) * s, 0]);
  }
  const tint = [1, r.range(0.96, 1.03), r.range(0.97, 1.02)]; // (a little variety: some trees rosier, some paler)
  const g = G.gblossom; g.setM(M);
  for (const [x, y, z, rad, core] of all) {
    let nx = x / Rx, ny = (y - cy) / Ry + 0.12, nz = (z - cz) / Rz; const l = Math.hypot(nx, ny, nz) || 1; nx /= l; ny /= l; nz /= l;
    if (core) { nx = nz = 0; ny = -1; } // (a straight-down normal marks the core for the shader: it casts no shadow, and takes the crown's)
    // (hexagons round each cluster's paint, mapped with a 0.86 inset: the same painted size as the broadleaf crowns'
    // octagons at 0.88, with a third fewer vertices to stamp into every chunk)
    const ht = Math.min(1, Math.max(0, (y - (cy - Ry)) / (2 * Ry))), k = core ? 0.62 : 0.8 + 0.2 * ht, hh = (rad / 0.8) * 0.86;
    g.bill(x, y, z, nx, ny, nz, hh, hh, GHIBLI.bcells[Math.floor(r() * GHIBLI.bcells.length)], [tint[0] * k, tint[1] * k, tint[2] * k], BILL_HEX, 0.86);
  }
}

// trees are built once per (kind, variant) and then stamped — much cheaper than rebuilding every tree. 'sakuraAve': the
// avenue's cherry trees, built facing the road (chunks.js placeSakura)
const TREE_BUILDERS = { broad: (G, M, r, s) => (GHIBLI.cells ? treeGhibli : treeBroad)(G, M, r, s), sakura: (G, M, r, s) => (GHIBLI.bcells ? treeGhibliSakura(G, M, r, s) : treeSakura(G, M, r, s)),
  sakuraAve: (G, M, r, s) => (GHIBLI.bcells ? treeGhibliSakura(G, M, r, s, true) : treeSakura(G, M, r, s)), pine: treePine, cedar: treeCedar, maple: treeMaple, ginkgo: treeGinkgo, birch: treeBirch, snowcedar: treeSnowCedar,
  cypress: treeCypress, plane: (G, M, r, s) => (GHIBLI.cells ? treeGhibliPlane : treeBroad)(G, M, r, s), bare: (G, M, r, s) => treeBare(G, M, r, s) };
const TCACHE = {};
function treeTemplate(kind, v) {
  const key = kind + v;
  let t = TCACHE[key];
  if (!t) {
    const g = { color: new GB(), foliage: new GB(), leaf: new GB({ uv: true }), gleaf: new GB({ uv: true, off: true }), gblossom: new GB({ uv: true, off: true }), bark: new GB({ uv: true, idx: true }),
      twig: new GB({ uv: true }) }; // (Cappadocia's bare crowns, W5: its own atlas's cards)
    TREE_BUILDERS[kind](g, new THREE.Matrix4(), rng(1000 + v * 77 + kind.length * 13), 1);
    t = TCACHE[key] = { c: g.color.toArrays(), f: g.foliage.toArrays(), l: g.leaf.toArrays(), g: g.gleaf.toArrays(), b: g.gblossom.toArrays(), k: g.bark.toArrays(), w: g.twig.toArrays() };
  }
  return t;
}
/** build every tree template up front (during loading, once the cluster atlas has loaded or failed), so no chunk build
 *  ever pays for one mid-drive */
export function warmTrees() { for (const kind in TREE_BUILDERS) if (kind !== 'bare' || A.has('uchTwig0')) for (let v = 0; v < 4; v++) treeTemplate(kind, v); }
/** …and Cappadocia's bare trees (W5), whose crowns are its own atlas's cells: once it is built (a Japanese start: Turkey's lazy
 *  load, main.js trLazy; else warmTrees) */
export function warmBare() { for (let v = 0; v < 4; v++) treeTemplate('bare', v); }
export function tree(G, M, kind, r, s = 1) {
  const t = treeTemplate(kind, Math.floor(r() * 4));
  const m = M.clone().scale(new THREE.Vector3(s, s, s)); m.groundY = M.groundY;
  G.color.stamp(t.c, m); G.foliage.stamp(t.f, m); G.leaf.stamp(t.l, m);
  if (t.g.n) G.gleaf.stamp(t.g, m);
  if (t.b.n) G.gblossom.stamp(t.b, m);
  if (t.k.n) G.bark.stamp(t.k, m);
  if (t.w.n && G.cap) G.cap.stamp(t.w, m); // (the bare crowns' twigs: Cappadocia's atlas's cells, W5)
}

// ------------------------------------------------------------------ buildings
// a lit window's cell: about a third of the lit homes have cool-white ceiling lights (one random number, as before)
const COOLWIN = new Set(['win0', 'win2', 'win5', 'win6']);
const litCell = (cell, v, litP) => (v < litP ? cell + (v < litP * 0.35 && COOLWIN.has(cell) ? 'C' : 'L') : cell);
function addSides(g, w, d, floorsY, tint, r, litP) {
  const segs = Math.max(1, Math.round(d / 3)), sd = d / segs;
  for (const sx of [-1, 1]) for (let f = 0; f < floorsY.length - 1; f++) for (let j = 0; j < segs; j++) {
    const cell = f > 0 && r() < 0.3 ? litCell('win6', r(), litP) : r() < 0.2 ? 'win5' : 'plain';
    (sx > 0 ? pxq : nxq)(g, (sx * w) / 2, j * sd, (j + 1) * sd, floorsY[f], floorsY[f + 1], cell, tint);
  }
}
function flatRoof(c, w, d, H, r, tall = false) {
  c.quad([-w / 2, H, d], [w / 2, H, d], [w / 2, H, 0], [-w / 2, H, 0], PAL.roof);
  const p = 0.5, t = 0.15;
  c.box(-w / 2, H, -0.02, w / 2, H + p, t, PAL.parapet);
  c.box(-w / 2, H, d - t, w / 2, H + p, d, PAL.parapet);
  c.box(-w / 2, H, 0, -w / 2 + t, H + p, d, PAL.parapet); c.box(w / 2 - t, H, 0, w / 2, H + p, d, PAL.parapet);
  if (r() < 0.4) { const x = (r() - 0.5) * w * 0.5, z = d * (0.4 + r() * 0.3); for (const [lx, lz] of [[-0.6, -0.6], [0.6, -0.6], [-0.6, 0.6], [0.6, 0.6]]) c.box(x + lx - 0.05, H, z + lz - 0.05, x + lx + 0.05, H + 1.0, z + lz + 0.05, PAL.metal);
    c.cyl(x, H + 1.0, z, 0.85, 0.85, 1.3, 12, C('#cfd2d4')); }
  if (tall && r() < 0.6) c.box(-w * 0.15, H, d * 0.4, w * 0.15, H + 2.6, d * 0.75, PAL.parapet);
  if (r() < 0.3) c.rod([w * 0.3, H, d * 0.5], [w * 0.3, H + 3.5, d * 0.5], 0.03, 0.02, 4, PAL.metal);
}
function vsign(G, x, y0, y1, r) {
  G.color.box(x - 0.06, y0, -0.88, x + 0.06, y1, -0.12, PAL.black);
  const k = 'vs' + Math.floor(r() * 10);
  nxq(G.atlas, x - 0.065, -0.88, -0.12, y0, y1, k); pxq(G.atlas, x + 0.065, -0.88, -0.12, y0, y1, k);
  G.color.box(x - 0.03, y0 + 0.3, -0.12, x + 0.03, y0 + 0.36, 0, PAL.metal); G.color.box(x - 0.03, y1 - 0.36, -0.12, x + 0.03, y1 - 0.3, 0, PAL.metal);
}
// the city painting's big lit signs (袖看板, textures.js BIG_SIGNS: the painted atlas's vsB… cells): a light box up to 1.15 m
// wide and 2.7 m tall standing off the first floor, its faces along the street (so they face the drive), on two arms.
// One random number, as vsign: the street's layout stays as it was
const SIGN_BOX = C('#d9d6cf');
function vsignBig(G, x, y0, y1, r, hero = '') {
  const kr = Math.floor(r() * 10), cell = hero || 'vsB' + kr, d = Math.min(1.15, (y1 - y0) * 0.417), z1 = -0.14, z0 = z1 - d, t = 0.1, c = G.color;
  // the box's edges only (its sides are the two painted faces: the colour pass, drawn first, would shade them for nothing)
  c.quad([x + t, y0, z0], [x - t, y0, z0], [x - t, y1, z0], [x + t, y1, z0], SIGN_BOX); // (facing the road)
  c.quad([x - t, y1, z1], [x + t, y1, z1], [x + t, y1, z0], [x - t, y1, z0], SIGN_BOX); // (the top)
  c.quad([x - t, y0, z0], [x + t, y0, z0], [x + t, y0, z1], [x - t, y0, z1], SIGN_BOX); // (the underside)
  nxq(G.atlas, x - t, z0, z1, y0, y1, cell); pxq(G.atlas, x + t, z0, z1, y0, y1, cell);
  for (const y of [y0 + 0.28, y1 - 0.34]) G.color.box(x - 0.03, y, z1, x + 0.03, y + 0.06, 0, PAL.metal);
}

export function building(G, M, r, spec) {
  G.atlas.setM(M); G.color.setM(M);
  G.color.box(-spec.w / 2, -1.6, 0.02, spec.w / 2, 0.02, spec.d || 10, PAL.concrete, null, { noBottom: true });
  switch (spec.type) {
    case 'shop': return shopHouse(G, M, r, spec);
    case 'machiya': return machiya(G, M, r, spec);
    case 'apt': return apartment(G, M, r, spec);
    case 'konbini': return konbini(G, M, r, spec);
    case 'house': return spec.ptype ? paintedHouse(G, M, r, spec) : woodHouse(G, M, r, spec);
    case 'block': return block(G, M, r, spec);
    case 'townApt': return townApt(G, M, r, spec);
    case 'townBack': return townBack(G, M, r, spec);
  }
}

const LIT_SHOP = new Set(['glass', 'door', 'cafe', 'noren']);
// the machiya's painted windows (besides the bookshop): goods, café, bakery, florist, clothes, tea, sweets; its painted
// entrances: under a noren with a lantern (twice as often), a ramen shop's, an izakaya's; the boards that go with them
const GLASS_P = ['shop_p0', 'shop_p3', 'shop_p4', 'shop_p5', 'shop_p6', 'shop_p8', 'shop_p9'], DOOR_P = ['shop_p2', 'shop_p2', 'shop_p7', 'shop_p10'];
const BOARD_P = { shop_p1: 'hs9', shop_p3: 'hs7', shop_p4: 'hs5', shop_p5: 'hs_花屋', shop_p6: 'hsN_洋品店', shop_p8: 'hs13', shop_p9: 'hs12' }; // 書店 珈琲 パン 花屋 洋品店 喫茶 和菓子
const THEME_SIGN = { 3: 'hs5', 4: 'hs9', 5: 'hs_花屋', 6: 'hs_洋品店' }; // shop_glass3 bakery → パン, 4 books → 書店, 5 → 花屋, 6 → 洋品店
function shopHouse(G, M, r, s) {
  const { w, d, floors, tint, litP } = s, a = G.atlas, c = G.color, fh0 = 3.6, fh = 3.0, H = fh0 + (floors - 1) * fh;
  const bays = Math.max(1, Math.round(w / 3)), bw = w / bays, x0 = -w / 2;
  const kinds = r.pick([['glass', 'door', 'glass'], ['noren', 'noren'], ['cafe', 'door'], ['shutter', 'shutter', 'door'], ['glass', 'glass', 'door'], ['house', 'garage'], ['noren', 'glass']]);
  // a bakery, bookshop, florist or clothes shop window: the signboard above says so, and every glass bay of the shop shows
  // it (a florist used to have one window of flowers between two of a grocer's shelves). The picks are drawn first, in
  // the same order as before, so the rng stream — and everything built after — is unchanged
  const cells = []; let theme = 0;
  for (let i = 0; i < bays; i++) { const cell = pickV(r, 'shop_' + kinds[i % kinds.length]); cells.push(cell); if (!theme && cell.startsWith('shop_glass') && cell.length > 10) theme = +cell.slice(10); }
  for (let i = 0; i < bays; i++) {
    const k = kinds[i % kinds.length]; fq(a, x0 + i * bw, x0 + (i + 1) * bw, 0, fh0, 0, theme && k === 'glass' ? 'shop_glass' + theme : cells[i]);
    if (LIT_SHOP.has(k)) lampAt(G, M, x0 + (i + 0.5) * bw, 1.9, -0.8, 0.7); // its window lights the street (and the car)
  }
  const wk = r.pick([0, 0, 1, 5, 0, 1]);
  const fy = [0, fh0]; for (let f = 1; f < floors; f++) fy.push(fh0 + f * fh);
  for (let f = 1; f < floors; f++) for (let i = 0; i < bays; i++) {
    const k = i % 2 === 1 && r() < 0.3 ? 5 : wk;
    fq(a, x0 + i * bw, x0 + (i + 1) * bw, fy[f], fy[f + 1], 0, litCell('win' + k, r(), litP), tint);
  }
  addSides(a, w, d, fy, tint, r, litP);
  c.quad([-w / 2, 0, d], [w / 2, 0, d], [w / 2, H, d], [-w / 2, H, d], mulC(tint, 0.8));
  flatRoof(c, w, d, H, r);
  // signboard over the shop
  const sw = w * 0.94;
  c.box(-sw / 2, fh0 - 0.8, -0.3, sw / 2, fh0 + 0.08, -0.02, PAL.black);
  const hs = 'hs' + Math.floor(r() * 14);
  fq(a, -sw / 2, sw / 2, fh0 - 0.8, fh0 + 0.08, -0.305, THEME_SIGN[theme] || hs);
  if (r() < 0.55) { // awning
    const col = r.pick(AWNINGS), y = fh0 - 0.85;
    c.quad([w / 2 - 0.2, y - 0.35, -1.1], [-w / 2 + 0.2, y - 0.35, -1.1], [-w / 2 + 0.2, y, -0.02], [w / 2 - 0.2, y, -0.02], col);
    c.quad([w / 2 - 0.2, y - 0.6, -1.1], [-w / 2 + 0.2, y - 0.6, -1.1], [-w / 2 + 0.2, y - 0.35, -1.1], [w / 2 - 0.2, y - 0.35, -1.1], mulC(col, 0.85));
  }
  if (floors >= 2 && r() < 0.85) { const vx = (r() < 0.5 ? 1 : -1) * (w / 2 - 0.35); vsign(G, vx, fh0 + 0.3, Math.min(H - 0.15, fh0 + 2.8), r); }
  for (let f = 1; f < floors; f++) {
    if (r() < 0.4) { // little balcony with a metal railing
      const i = Math.floor(r() * bays), xa = x0 + i * bw + 0.15, xb = x0 + (i + 1) * bw - 0.15, y = fy[f];
      c.box(xa, y - 0.12, -0.9, xb, y, 0, PAL.parapet);
      fq(a, xa, xb, y, y + 1.0, -0.9, 'rail'); nxq(a, xa, -0.9, 0, y, y + 1.0, 'rail'); pxq(a, xb, -0.9, 0, y, y + 1.0, 'rail');
      if (r() < 0.45) laundry(c, xa + 0.1, xb - 0.1, y + 1.95, -0.55, r);
      if (r() < 0.6) acUnit(G, M, (xa + xb) / 2 + 0.6, y, -0.75);
    } else if (r() < 0.35) {
      const i = Math.floor(r() * bays); acUnit(G, M, x0 + (i + 0.5) * bw, fy[f] + 0.15, -0.3);
      G.color.setM(M); G.atlas.setM(M);
    }
  }
  c.cyl(x0 + 0.12, 0, -0.08, 0.05, 0.05, H, 6, PAL.pipe, false);
  c.box(w / 2 - 0.5, 1.2, -0.12, w / 2 - 0.25, 1.55, 0, C('#d9d9d3'));
  if (floors >= 3 && r() < 0.18) billboard(G, w, H, d, r);
}
// 町家 shophouse, the reference art's shopping street: a shop on the ground floor under a deep tiled canopy whose front
// board carries the shop's sign, warm bulbs hanging under it, a timber upper floor of lattice windows behind a wooden
// balcony rail hung with flower boxes, a tiled gable roof, and pots of plants out on the pavement
function machiya(G, M, r, s) {
  const { w, d, floors, litP } = s, a = G.atlas, c = G.color, fh0 = 3.6, fh = 2.9, H = fh0 + (floors - 1) * fh, x0 = -w / 2;
  const bays = Math.max(2, Math.round(w / 3)), bw = w / bays, WOOD = C('#5c4030'), DARK = C('#3a2a20');
  let kinds = r.pick([['glass', 'door', 'glass'], ['noren', 'door'], ['cafe', 'door'], ['noren', 'glass'], ['glass', 'glass', 'door'], ['glass', 'door']]);
  // the opening view (the drive starts at s = 140): the shophouse beside the car on either side is the city painting's
  // nearest one: on the left a bookshop with its magazine racks out on the pavement under a red awning, on the right a
  // clothes shop under the navy 洋品店 board and a red awning; each with a big 焼き鳥 light box (violet on the left, pink on
  // the right). (With any seed: only that chunk's later layout changes)
  const hero = s.at !== undefined && Math.abs(s.at - (s.side < 0 ? 139 : 146)) < w / 2 && floors >= 2 ? s.side : 0; // (the one in the frame's near edge)
  if (hero) kinds = ['glass', 'door', 'glass'];
  // the painted bays (textures.js shop_p…, from the city painting): a shop's window of goods, a bookshop's of magazines, a
  // café's of cakes, a bakery's, a florist's, a clothes shop's, a tea shop's, a sweets shop's (one kind a shop, and its
  // sign mostly says so); an entrance under a noren with a lantern, a ramen shop's, an izakaya's; now and then the
  // procedural noren fronts (とんかつ, そば …). All warm-lit by day, as in the painting. Which painting each bay shows comes
  // from the building's own random numbers (q): the street's (r) are drawn as before, so its layout stays as it was
  const q = rng(Math.floor((G.atlas.e[12] * 71.3 + G.atlas.e[14] * 37.9) * 977) ^ 0x2b5d);
  const glassOld = r.pick(['shop_p0', 'shop_p0', 'shop_p1', 'shop_p3']), cells = [];
  const glassP = hero ? (hero < 0 ? 'shop_p1' : 'shop_p6') : glassOld === 'shop_p1' ? glassOld : GLASS_P[Math.floor(q() * GLASS_P.length)]; // (the bookshops stay where they were: their racks)
  const doorP = q.pick(DOOR_P), norenP = q() < 0.65 ? q.pick(['shop_p7', 'shop_p10']) : '';
  for (let i = 0; i < bays; i++) { const k = kinds[i % kinds.length]; cells.push(k === 'glass' ? glassP : k === 'door' ? doorP : k === 'cafe' ? 'shop_p3' : (k2 => (k === 'noren' && norenP) || k2)(pickV(r, 'shop_' + k))); }
  const tr = r(), oldTheme = tr < 0.5 ? '' : kinds.includes('glass') && glassOld === 'shop_p1' ? 'hs9' : kinds.includes('cafe') || (kinds.includes('glass') && glassOld === 'shop_p3') ? 'hs7' : '';
  const door = cells.includes('shop_p7') ? 'hs0' : cells.includes('shop_p10') ? 'hs3' : ''; // ラーメン, 居酒屋
  const theme = hero ? (hero > 0 ? 'hsN_洋品店' : 'hs9') : kinds.includes('glass') && tr >= 0.2 ? BOARD_P[glassP] || door : kinds.includes('cafe') && tr >= 0.5 ? 'hs7' : tr >= 0.2 ? door : '';
  for (let i = 0; i < bays; i++) {
    const k = kinds[i % kinds.length]; fq(a, x0 + i * bw, x0 + (i + 1) * bw, 0, fh0, 0, cells[i]);
    if (LIT_SHOP.has(k)) lampAt(G, M, x0 + (i + 0.5) * bw, 1.9, -0.8, 0.7);
  }
  // timber, or (s.plaster) the cream-plastered kind: painted upper floors (win7: cream plaster between timber posts, a
  // timber-framed window of blue sky with curtains; win8: dark boards and a shoji lattice), now and then a pair of small
  // windows in the plaster, a dark timber beam between the floors, plaster gables under the same tiled roof
  const P = !!s.plaster, PT = s.tint;
  const fy = [0, fh0]; for (let f = 1; f < floors; f++) fy.push(fh0 + f * fh);
  const up = P ? q.pick(['win7', 'win7', 'win9', 'win10']) : q.pick(['win8', 'win8', 'win11']); // (one kind a building)
  for (let f = 1; f < floors; f++) for (let i = 0; i < bays; i++) {
    const cell = P ? (i % 2 === 1 && r() < 0.3 ? 'win5' : up) : up;
    fq(a, x0 + i * bw, x0 + (i + 1) * bw, fy[f], fy[f + 1], 0, litCell(cell, r(), litP), cell === 'win5' ? PT : W1);
  }
  { // the side walls: timber boards and lattice windows, or plaster and small windows (seen down every side street)
    const segs = Math.max(1, Math.round(d / 3)), sd = d / segs;
    // (the plaster kind's upper floors: its painted bays (win7, plaster between timber posts) or a small window)
    for (const sx of [-1, 1]) for (let f = 0; f < fy.length - 1; f++) for (let j = 0; j < segs; j++) {
      const cell = P ? (f > 0 ? litCell(r() < 0.5 ? 'win7' : 'win6', r(), litP) : 'plain') : f > 0 && r() < 0.45 ? litCell('win4', r(), litP) : 'woodwall';
      (sx > 0 ? pxq : nxq)(a, (sx * w) / 2, j * sd, (j + 1) * sd, fy[f], fy[f + 1], cell, P && cell[3] !== '7' ? PT : W1);
    }
  }
  c.quad([-w / 2, 0, d], [w / 2, 0, d], [w / 2, H, d], [-w / 2, H, d], P ? mulC(PT, 0.8) : C('#6a5240'));
  for (const x of [x0, -x0]) c.box(x - 0.09, 0, -0.12, x + 0.09, H, 0.02, DARK); // corner posts
  if (P) for (let f = 2; f < floors; f++) c.box(x0, fy[f] - 0.1, -0.08, -x0, fy[f] + 0.06, 0.0, DARK); // beams between the upper floors
  const { RC, k } = gableRoof(G, s, w, d, H, r, !P);
  // the canopy (庇): tiles in ~3 m strips sloping down over the pavement, dark timber under it, the sign on its front board.
  // Steep (44°) and high at the wall, so its tiles show above the board from the street as the deep band of blue-grey tiles
  // over every shop of the city painting (at 33° they were a thin stripe, at 22° a sliver); the eave and the board are
  // where they were, the balcony on it a little higher
  const cd = 1.05, drop = 1.0, cy = fh0 - 0.08 + drop, nS = Math.max(2, Math.round((w + 0.3) / 3));
  // (its tiles: the painted atlas's kawaraC, a lighter slate than the roof's, with the round tile ends along the eave)
  const kc = A.has('kawaraC') ? uv('kawaraC') : null;
  for (let i = 0; i < nS; i++) { const xa = x0 - 0.15 + ((w + 0.3) * i) / nS, xb = x0 - 0.15 + ((w + 0.3) * (i + 1)) / nS; a.quad([xb, cy - drop, -cd], [xa, cy - drop, -cd], [xa, cy, 0], [xb, cy, 0], kc ? W1 : RC, kc || k); }
  // (and along its eave the round tile ends face on, the painting's bold scalloped edge over each shop)
  const ke = A.has('kawaraE') ? uv('kawaraE') : null;
  if (ke) for (let i = 0; i < nS; i++) { const xa = x0 - 0.15 + ((w + 0.3) * i) / nS, xb = x0 - 0.15 + ((w + 0.3) * (i + 1)) / nS, ye = cy - drop; a.quad([xb, ye, -cd - 0.03], [xa, ye, -cd - 0.03], [xa, ye + 0.24, -cd - 0.03], [xb, ye + 0.24, -cd - 0.03], W1, ke); }
  c.quad([x0 - 0.15, cy - drop - 0.03, -cd], [-x0 + 0.15, cy - drop - 0.03, -cd], [-x0 + 0.15, cy - 0.1, 0], [x0 - 0.15, cy - 0.1, 0], WOOD);
  const sw = Math.min(w * 0.9, 4.4), y1 = cy - drop + 0.02, y0 = y1 - 0.62; // (a board at most 4.4 m long, its sign's own shape: the eave shows either side)
  c.box(-sw / 2, y0, -cd - 0.02, sw / 2, y1, -cd + 0.07, DARK);
  { const hsR = oldTheme ? '' : 'hs' + Math.floor(r() * 14); fq(a, -sw / 2, sw / 2, y0, y1, -cd - 0.025, theme || hsR || 'hs' + Math.floor(q() * 14)); } // (r as before)
  for (const x of [-sw / 2 + 0.25, sw / 2 - 0.25]) c.box(x - 0.03, y1, -cd + 0.02, x + 0.03, cy - drop * 0.1, -cd + 0.06, DARK); // the board's hangers
  // warm bulbs on short flexes under the canopy (lit by day too, as in a shopping street)
  G.sodium.setM(M);
  c.noShadow = true; for (let i = 0; i < bays; i++) { const x = x0 + (i + 0.5) * bw; c.box(x - 0.008, y0 - 0.02, -0.62, x + 0.008, cy - drop * 0.6, -0.6, DARK); G.sodium.box(x - 0.06, y0 - 0.16, -0.67, x + 0.06, y0 - 0.04, -0.55, null); } c.noShadow = false;
  let awn = false;
  if (r() < 0.5 || hero) { awn = true; // a fabric awning under the board
    const col = hero ? AWN_REF[0] : r.pick(AWN_REF), y = y0 - 0.12;
    c.quad([w / 2 - 0.2, y - 0.32, -0.95], [-w / 2 + 0.2, y - 0.32, -0.95], [-w / 2 + 0.2, y, -0.02], [w / 2 - 0.2, y, -0.02], col);
    c.quad([w / 2 - 0.2, y - 0.55, -0.95], [-w / 2 + 0.2, y - 0.55, -0.95], [-w / 2 + 0.2, y - 0.32, -0.95], [w / 2 - 0.2, y - 0.32, -0.95], mulC(col, 0.85));
  }
  // the balcony on the floor above: a plank floor on the canopy, the wooden rail, flower boxes hung on it
  const yb = fy[1] + 0.56, zr = -0.5, balc = floors >= 2 && (!P || r() < 0.5); // (its plank floor just over the canopy's tiles)
  if (balc) {
    const xa = x0 + 0.12, xb = -x0 - 0.12;
    c.box(xa, yb - 0.07, zr - 0.04, xb, yb, 0, WOOD);
    for (let i = 0; i < bays; i++) fq(a, x0 + 0.12 + ((w - 0.24) * i) / bays, x0 + 0.12 + ((w - 0.24) * (i + 1)) / bays, yb, yb + 0.95, zr, 'wrail');
    nxq(a, xa, zr, 0, yb, yb + 0.95, 'wrail'); pxq(a, xb, zr, 0, yb, yb + 0.95, 'wrail');
    G.leaf.setM(M);
    for (let i = 0; i < bays; i++) if (r() < 0.7) {
      const xc = x0 + (i + 0.5) * bw, bl = Math.min(bw * 0.7, 1.6);
      c.noShadow = true; c.box(xc - bl / 2, yb + 0.72, zr - 0.2, xc + bl / 2, yb + 0.92, zr - 0.02, C('#7a5236')); c.noShadow = false;
      for (let fx = xc - bl / 2 + 0.2; fx < xc + bl / 2 - 0.1; fx += 0.32) cards(G, [fx, yb + 0.95, zr - 0.11], fx, yb + 1.05, zr - 0.11, 0.26, r() < 0.65 ? 'sakura' : 'flowers', 3, r, [1, 0.92, 0.96], [0.7, 0.55, 0.62], [yb + 0.9, yb + 1.3]);
    }
  }
  // a big lit sign over the canopy (and on a wide front now and then a small one at its other end)
  if (floors >= 2 && (r() < 0.9 || hero)) { const sdR = r() < 0.5 ? 1 : -1, sd = hero || sdR; /* (the opening view's: at the end further along the road, in view) */ vsignBig(G, sd * (w / 2 - 0.35), cy + 0.1, Math.min(H - 0.2, cy + 2.8), r, hero ? (hero < 0 ? 'vsB10' : 'vsB0') : ''); if (w > 7 && r() < 0.35) vsign(G, -sd * (w / 2 - 0.35), fh0 + 1.0, Math.min(H - 0.2, fh0 + 2.7), r); }
  // paper lanterns (提灯) glowing at the canopy's edge: a pair by a noren or a café's door, now and then one elsewhere
  { const pair = kinds.includes('noren') || kinds.includes('cafe'), nL = awn ? 0 : pair ? 2 : r() < 0.3 ? 1 : 0; // (not where an awning hangs)
    G.sodium.setM(M);
    for (let j = 0; j < nL; j++) { const x = nL === 2 ? (j ? 1 : -1) * Math.min(1.4, w / 2 - 0.6) : (r() - 0.5) * (w - 1.5), y = y0 - 0.5;
      c.noShadow = true; c.box(x - 0.006, y + 0.42, -cd + 0.12, x + 0.006, y0, -cd + 0.14, DARK);
      G.sodium.cyl(x, y, -cd + 0.13, 0.11, 0.16, 0.18, 10, null, false); G.sodium.cyl(x, y + 0.18, -cd + 0.13, 0.16, 0.11, 0.18, 10, null, false); // a barrel of paper
      c.cyl(x, y - 0.035, -cd + 0.13, 0.1, 0.1, 0.04, 8, DARK); c.cyl(x, y + 0.355, -cd + 0.13, 0.1, 0.1, 0.04, 8, DARK); c.noShadow = false; } }
  // a bookshop's magazine rack out in front of its window, and pots of plants along the shopfront
  let xr = 1e9, xr2 = 1e9;
  if (glassP === 'shop_p1' && kinds.includes('glass')) { xr = x0 + (kinds.indexOf('glass') + 0.5) * bw; magazineRack(G, M, xr, -0.62, r); }
  if (hero < 0 && bays >= 3) { xr2 = x0 + 2.5 * bw; magazineRack(G, M, xr2, -0.62, r); } // (the opening view's bookshop: racks along its front)
  for (let x = x0 + 0.45 + r() * 0.4; x < -x0 - 0.3; x += 0.7 + r() * 1.3) if (r() < 0.7 && Math.abs(x - xr) > 0.95 && Math.abs(x - xr2) > 0.95) pottedPlant(G, M, r, x, -0.4);
  G.color.setM(M); G.atlas.setM(M);
  // neon tubes, as in the city painting: a pink, violet or green one along the top floor under the eave, and a green or pink
  // one along the canopy's top (under the balcony, at its plank floor's edge); the opening view's bookshop has both, as its
  // painted twin. From the building's own random numbers (q, drawn last: nothing else changes)
  if (A.has('vsNg')) {
    const n1 = q(), n2 = q(), n3 = q();
    if (hero < 0 || n1 < 0.4) neonTube(a, x0 + 0.15, -x0 - 0.15, H - 0.2, -0.07, hero < 0 ? 'vsNv' : n2 < 0.45 ? 'vsNp' : n2 < 0.8 ? 'vsNv' : 'vsNg');
    if (hero < 0 || n3 < 0.3) neonTube(a, x0 + 0.15, -x0 - 0.15, balc ? yb - 0.16 : cy + 0.04, balc ? zr - 0.06 : -0.08, hero < 0 || n2 < 0.5 ? 'vsNg' : 'vsNp');
  }
}
// a neon tube along a front from x xa to xb at height y, z out from the wall: a strip facing the street and one facing down,
// so it reads from below and along the street (the neon light code: bright by day, with the bloom's soft halo)
function neonTube(a, xa, xb, y, z, cell) {
  const t = 0.075, c = uv(cell);
  fq(a, xa, xb, y, y + t, z, cell);
  a.litV = 12; a.quad([xa, y, z - t], [xb, y, z - t], [xb, y, z], [xa, y, z], W1, c); a.litV = 0;
}
function billboard(G, w, H, d, r) {
  const bw = Math.min(w * 0.85, 7), bh = bw * 0.47, z = d * 0.3;
  for (const x of [-bw * 0.35, bw * 0.35]) G.color.box(x - 0.06, H, z, x + 0.06, H + 1.2 + bh, z + 0.12, PAL.metal);
  G.color.box(-bw / 2, H + 1.2, z + 0.12, bw / 2, H + 1.2 + bh, z + 0.3, PAL.metal);
  fq(G.atlas, -bw / 2, bw / 2, H + 1.2, H + 1.2 + bh, z + 0.115, 'bb' + Math.floor(r() * 4));
}
function apartment(G, M, r, s) {
  const { w, d, floors, tint, litP } = s, a = G.atlas, c = G.color, fh0 = 3.2, fh = 2.95, H = fh0 + (floors - 1) * fh;
  const bays = Math.max(2, Math.round(w / 3.2)), bw = w / bays, x0 = -w / 2;
  const fy = [0, fh0]; for (let f = 1; f < floors; f++) fy.push(fh0 + f * fh);
  for (let i = 0; i < bays; i++) fq(a, x0 + i * bw, x0 + (i + 1) * bw, 0, fh0, 0, i === Math.floor(bays / 2) ? 'shop_door' : r.pick(['shop_house', 'shop_garage', 'plain']), i === Math.floor(bays / 2) ? W1 : tint);
  const bal = 'bal' + Math.floor(r() * 3), slab = mulC(tint, 0.97);
  for (let f = 1; f < floors; f++) {
    const y = fy[f];
    for (let i = 0; i < bays; i++) fq(a, x0 + i * bw, x0 + (i + 1) * bw, y, fy[f + 1], 0, litCell('win2', r(), litP), tint);
    c.box(x0, y - 0.15, -1.3, -x0, y, 0, slab);
    c.box(x0, y, -1.3, -x0, y + 1.1, -1.18, slab, null, { noBottom: true });
    for (let i = 0; i < bays; i++) fq(a, x0 + i * bw, x0 + (i + 1) * bw, y, y + 1.1, -1.305, bal, tint);
    for (let i = 0; i <= bays; i++) c.box(x0 + i * bw - 0.05, y, -1.18, x0 + i * bw + 0.05, y + 2.4, 0, mulC(tint, 0.92));
    for (let i = 0; i < bays; i++) {
      const q = r(), xa = x0 + i * bw + 0.2, xb = x0 + (i + 1) * bw - 0.2;
      if (q < 0.34) laundry(c, xa, xb, y + 2.02, -0.98, r);
      else if (q < 0.46) futon(c, xa + 0.25, Math.min(xb - 0.25, xa + 1.9), y + 1.1, -1.3, r);
    }
    G.atlas.setM(M);
    for (let i = 0; i < bays; i++) if (r() < 0.55) { acUnit(G, M, x0 + (i + 0.78) * bw, y, -0.55); G.atlas.setM(M); G.color.setM(M); }
  }
  c.box(x0, H - 0.15, -1.3, -x0, H, 0, slab);
  addSides(a, w, d, fy, tint, r, litP);
  c.quad([-w / 2, 0, d], [w / 2, 0, d], [w / 2, H, d], [-w / 2, H, d], mulC(tint, 0.8));
  flatRoof(c, w, d, H, r, true);
}
function konbini(G, M, r, s) {
  const { w, d } = s, a = G.atlas, c = G.color, H = 4.4, x0 = -w / 2, bays = Math.max(3, Math.round(w / 3)), bw = w / bays;
  for (let i = 0; i < bays; i++) { fq(a, x0 + i * bw, x0 + (i + 1) * bw, 0, 3.4, 0, 'shop_konbini'); lampAt(G, M, x0 + (i + 0.5) * bw, 1.9, -0.8, 0.8); }
  c.box(x0, 3.4, -0.35, -x0, H, 0, PAL.white);
  fq(a, x0, -x0, 3.4, H, -0.355, 'konbini_band');
  addSides(a, w, d, [0, H], C('#f2f2ee'), r, 0);
  flatRoof(c, w, d, H, r);
}
const gcol = (s, wood) => (wood ? C('#7a5a42') : s.tint); // a house's gable / wall colour
let _kawara = null; // the used 240 px of the kawara cell (textures.js), inside its margin of tiles
const KAWARA = () => { if (!_kawara) { const c = uv('kawara'), du = (16 / 272) * (c.u1 - c.u0); _kawara = { u0: c.u0 + du, u1: c.u1 - du, v0: c.v0, v1: c.v1 }; } return _kawara; };
// a tiled gable roof (ridge parallel to the road) over a w × d footprint at height H, with its fascia boards, barge boards,
// the underside of the overhang and the gable ends; returns what an eave lower down needs (tile colour, uv, fascia())
function gableRoof(G, s, w, d, H, r, wood) {
  const a = G.atlas, c = G.color;
  const snow = !!s.snow, o = snow ? 0.75 : 0.6, rh = snow ? Math.min(3.4, d * 0.46) : Math.min(2.4, d * 0.32);
  const k = snow ? uv('white') : KAWARA(), RC = snow ? C('#f3f5fa') : C('#c8ccd8'), EDGE = snow ? C('#e4e8f0') : C('#3d4456');
  // the tiles at their real size: the roof is laid in strips ~3 m wide, each carrying the whole tile texture (one stretched
  // texture made each tile ~1 m wide). (Snow has no tiles to show: one strip)
  const nS = snow ? 1 : Math.max(2, Math.round((w + 2 * o) / 3)), xs = i => -w / 2 - o + ((w + 2 * o) * i) / nS;
  for (let i = 0; i < nS; i++) {
    const xa = xs(i), xb = xs(i + 1);
    a.quad([xb, H - 0.25, -o], [xa, H - 0.25, -o], [xa, H + rh, d / 2], [xb, H + rh, d / 2], RC, k);
    a.quad([xa, H - 0.25, d + o], [xb, H - 0.25, d + o], [xb, H + rh, d / 2], [xa, H + rh, d / 2], RC, k);
  }
  // the roof's edges have thickness: a fascia board along each eave, barge boards up the gables, and the underside of
  // the overhang (it used to be a paper-thin sheet, invisible from below)
  const fascia = (xa, xb, y0, y1, z, out) => { // the board's outer face and underside only (the rest is never seen)
    if (out < 0) { c.quad([xb, y0, z], [xa, y0, z], [xa, y1, z], [xb, y1, z], EDGE); c.quad([xa, y0, z], [xb, y0, z], [xb, y0, z + 0.08], [xa, y0, z + 0.08], EDGE); }
    else { c.quad([xa, y0, z], [xb, y0, z], [xb, y1, z], [xa, y1, z], EDGE); c.quad([xb, y0, z], [xa, y0, z], [xa, y0, z - 0.08], [xb, y0, z - 0.08], EDGE); }
  };
  for (const [ze, zw] of [[-o, 0], [d + o, d]]) {
    fascia(-w / 2 - o, w / 2 + o, H - 0.42, H - 0.22, ze < 0 ? ze - 0.04 : ze + 0.04, ze < 0 ? -1 : 1);
    c.quad(ze < 0 ? [-w / 2 - o, H - 0.26, ze] : [w / 2 + o, H - 0.26, ze], ze < 0 ? [w / 2 + o, H - 0.26, ze] : [-w / 2 - o, H - 0.26, ze], ze < 0 ? [w / 2 + o, H - 0.26, zw] : [-w / 2 - o, H - 0.26, zw], ze < 0 ? [-w / 2 - o, H - 0.26, zw] : [w / 2 + o, H - 0.26, zw], mulC(gcol(s, wood), 0.62));
  }
  for (const sx of [-1, 1]) {
    const x = sx * (w / 2 + o + 0.02), t = 0.2, A0 = [x, H - 0.25, -o], A1 = [x, H + rh, d / 2], A2 = [x, H - 0.25, d + o];
    const dn = p => [p[0], p[1] - t, p[2]];
    if (sx > 0) { c.quad(dn(A1), dn(A0), A0, A1, EDGE); c.quad(dn(A2), dn(A1), A1, A2, EDGE); } // (facing outwards, ±x)
    else { c.quad(dn(A0), dn(A1), A1, A0, EDGE); c.quad(dn(A1), dn(A2), A2, A1, EDGE); }
  }
  const gc = gcol(s, wood);
  tri(c, [-w / 2, H, 0], [-w / 2, H, d], [-w / 2, H + rh - 0.1, d / 2], gc);
  tri(c, [w / 2, H, d], [w / 2, H, 0], [w / 2, H + rh - 0.1, d / 2], gc);
  c.box(-w / 2 - o, H + rh - 0.05, d / 2 - 0.15, w / 2 + o, H + rh + 0.18, d / 2 + 0.15, snow ? C('#f6f7fb') : C('#3d4456'));
  if (snow) { // the thick snow slab shows along the eaves, with a few icicles
    c.box(-w / 2 - o - 0.05, H - 0.42, -o - 0.1, w / 2 + o + 0.05, H - 0.12, -o + 0.3, C('#eef1f7'));
    c.box(-w / 2 - o - 0.05, H - 0.42, d + o - 0.3, w / 2 + o + 0.05, H - 0.12, d + o + 0.1, C('#eef1f7'));
    for (let x = -w / 2; x < w / 2; x += 0.45 + r() * 0.5) c.cyl(x, H - 0.42 - 0.35, -o + 0.02, 0.0, 0.04, 0.35, 4, C('#dfe8f3'), false);
  }
  return { RC, k, fascia, nS };
}
function woodHouse(G, M, r, s) {
  const { w, d, floors, tint, litP } = s, a = G.atlas, c = G.color, fh = 2.9, H = floors * fh, x0 = -w / 2;
  const wood = r() < 0.5, bays = Math.max(2, Math.round(w / 3)), bw = w / bays;
  const fy = []; for (let f = 0; f <= floors; f++) fy.push(f * fh);
  const tw = wood ? W1 : tint;
  for (let f = 0; f < floors; f++) for (let i = 0; i < bays; i++) {
    let cell = wood ? 'win4' : 'win0';
    if (f === 0 && i === 0) cell = 'shop_house'; else cell = litCell(cell, r(), litP);
    fq(a, x0 + i * bw, x0 + (i + 1) * bw, fy[f], fy[f + 1], 0, cell, cell === 'shop_house' ? W1 : tw);
  }
  addSides(a, w, d, fy, wood ? C('#9a7a62') : tint, r, litP);
  c.quad([-w / 2, 0, d], [w / 2, 0, d], [w / 2, H, d], [-w / 2, H, d], mulC(tint, 0.75));
  const { RC, k, fascia, nS } = gableRoof(G, s, w, d, H, r, wood);
  if (floors > 1) { // little eave between floors
    const y = fh + 0.05;
    for (let i = 0; i < nS; i++) { const xa = -w / 2 - 0.1 + ((w + 0.2) * i) / nS, xb = -w / 2 - 0.1 + ((w + 0.2) * (i + 1)) / nS; a.quad([xb, y - 0.3, -0.75], [xa, y - 0.3, -0.75], [xa, y + 0.05, 0], [xb, y + 0.05, 0], RC, k); }
    fascia(-w / 2 - 0.1, w / 2 + 0.1, y - 0.42, y - 0.28, -0.79, -1);
  }
  if (s.fence) { // concrete block wall in front, with a gap for the gate
    const z = -s.fence, h = 1.2;
    for (const [xa, xb] of [[-w / 2, -1.0], [0.4, w / 2]]) { c.box(xa, 0, z - 0.08, xb, h, z + 0.08, PAL.concrete); fq(a, xa, xb, 0, h, z - 0.085, 'block'); }
  }
}
// ------------------------------------------------------------------ painted houses
// The reference art's houses (country, coast, cherry avenue): flat painted elevations (painted.js loadHouseAtlas, drawn
// into atlas cells of their own by textures.js paintHouses) on a box with a gable roof. Each type lists its pieces (pack.py):
// the walls (the front painting on the long walls, the gable-end painting on the short ones), the gables out at the roof's
// ends, the front painting's tiles on both roof slopes, a pent roof between the floors, what stands above the ridge, and
// plain soffits under the overhangs. Their outlines are the paintings' alpha. HOUSES.byZone: the types by zone, once their
// cells are in; until then, and if they failed, houses keep their procedural look (woodHouse).
export const HOUSES = { byZone: null };
export function setHouses(types) {
  const z = {};
  for (const t of types) for (const k of t.zones) (z[k] || (z[k] = [])).push(t);
  HOUSES.byZone = z;
}
/** a painted house type for the zone (one random number), or null (then the caller keeps its procedural house) */
export function houseType(zone, r) { const L = HOUSES.byZone && HOUSES.byZone[zone]; return L ? L[Math.floor(r() * L.length)] : null; }
const IDENT4 = new THREE.Matrix4(), _huv = { u0: 0, u1: 0, v0: 0, v1: 0 }, _hp = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];
const hp = (p, o) => { for (let k = 0; k < 4; k++) { _hp[k][0] = p[o + k * 3]; _hp[k][1] = p[o + k * 3 + 1]; _hp[k][2] = p[o + k * 3 + 2]; } };
// a home window's moment at dusk (as litOf): a byte hashed from where the wall is
const homeLit = (g, a, b) => { const h = Math.sin(a * 12.9898 + b * 78.233 + g.e[12] * 0.731 + g.e[14] * 0.513) * 43758.5453; return 24 + Math.floor((h - Math.floor(h)) * 231); };
function paintedHouse(G, M, r, s) {
  const T = s.ptype, a = G.atlas, c = G.color, cf = uv(T.f), cs = uv(T.s);
  for (const q of T.pieces) {
    const cl = q.t === 'f' ? cf : cs, du = cl.u1 - cl.u0, dv = cl.v1 - cl.v0;
    _huv.u0 = cl.u0 + q.uv[0] * du; _huv.u1 = cl.u0 + q.uv[2] * du; _huv.v1 = cl.v1 - q.uv[1] * dv; _huv.v0 = cl.v1 - q.uv[3] * dv;
    hp(q.p, 0);
    // the walls' windows: a home's, lit at its own moment at dusk, or (T.day: the coast painting's house) warm by day too
    if (q.lit && a.hasLit) a.litV = T.day ? 6 : homeLit(a, q.p[0] + q.p[2], q.p[1]);
    a.quad(_hp[0], _hp[1], _hp[2], _hp[3], W1, _huv); a.litV = 0;
  }
  c.noShadow = true; // (soffits: high up, in the roof's shadow anyway)
  for (const p of T.soffits) { hp(p, 0); c.quad(_hp[0], _hp[1], _hp[2], _hp[3], T.soffit); }
  c.noShadow = false;
  if (s.fence) { // a low block wall in front (the cherry avenue's houses), with a gap for the gate
    const z = -s.fence, h = 1.1, w = T.ww + 1;
    for (const [xa, xb] of [[-w / 2, -1.0], [0.4, w / 2]]) { c.box(xa, 0, z - 0.08, xb, h, z + 0.08, PAL.concrete); fq(a, xa, xb, 0, h, z - 0.085, 'block'); }
  }
}
// the city painting's tall pale blocks (6–12 storeys) standing right behind the shophouses and closing the street from the
// middle distance on: plain boxes of pale concrete, their front (along the street) and the end that faces the drive (s.near:
// which local x end looks back down the road) in painted faces two floors to a cell (textures.js blockFace: ribbon windows,
// punched windows, balconies; the end wall mostly plain). The back and the far end are never seen from the road (the drive
// only looks ahead): one plain quad each, so the shadow pass (it draws the faces turned from the sun) still sees a closed box.
// A parapet along the roof's edge, now and then a stair house or a water tank on top. ~40–60 quads a block (a block of flats
// with its balconies, laundry and air conditioners is ~400)
export const BLOCK_TINTS = ['#f4eee3', '#efe6d6', '#e9e9e6', '#e3e7ec', '#f2e5d3', '#ece1d1', '#e8e1ea', '#f1e0d8', '#dfe3e6', '#f6f3ec'].map(C);
function block(G, M, r, s) {
  const { w, d, floors, tint, litP, near } = s, a = G.atlas, c = G.color, fh = 3.1, H = floors * fh, x0 = -w / 2;
  const kind = s.kind || 'A', bays = Math.max(2, Math.round(w / 3.4)), bw = w / bays, rows = floors / 2;
  for (let f = 0; f < rows; f++) for (let i = 0; i < bays; i++) fq(a, x0 + i * bw, x0 + (i + 1) * bw, f * 2 * fh, (f + 1) * 2 * fh, 0, litCell('wb' + kind, r(), litP), tint);
  // the end facing the drive: its own kind (mostly the plain end wall), and the far end and the back as one quad each
  const ek = s.endKind || 'D', segs = Math.max(1, Math.round(d / 3.4)), sd = d / segs, xe = near * (w / 2);
  for (let f = 0; f < rows; f++) for (let j = 0; j < segs; j++) (near > 0 ? pxq : nxq)(a, xe, j * sd, (j + 1) * sd, f * 2 * fh, (f + 1) * 2 * fh, litCell('wb' + ek, r(), litP), tint);
  const shade = mulC(tint, 0.82);
  (near > 0 ? nxq : pxq)(a, -xe, 0, d, 0, H, 'plain', shade);
  c.quad([-w / 2, 0, d], [w / 2, 0, d], [w / 2, H, d], [-w / 2, H, d], shade); // (the back, facing away from the road)
  c.quad([-w / 2, H, d], [w / 2, H, d], [w / 2, H, 0], [-w / 2, H, 0], PAL.roof);
  const pc = mulC(tint, 0.96); // the parapet: a lip along the front and the near end, its top catching the sun
  c.box(-w / 2, H, -0.06, w / 2, H + 0.65, 0.18, pc, null, { noBottom: true });
  if (near > 0) c.box(w / 2 - 0.24, H, 0.18, w / 2 + 0.06, H + 0.65, d, pc, null, { noBottom: true });
  else c.box(-w / 2 - 0.06, H, 0.18, -w / 2 + 0.24, H + 0.65, d, pc, null, { noBottom: true });
  const t = r();
  if (t < 0.4) { const x = (r() - 0.5) * w * 0.4, z = d * (0.35 + r() * 0.25); c.box(x - 2.2, H, z, x + 2.2, H + 3.0, z + 3.6, mulC(tint, 0.93)); } // a stair house
  else if (t < 0.6) { const x = (r() - 0.5) * w * 0.5, z = d * (0.4 + r() * 0.3); c.cyl(x, H, z, 1.1, 1.1, 2.0, 8, C('#d6d8da')); } // a water tank
}

export function parkedCar(G, M, r) {
  const c = G.color; c.setM(M);
  const col = r.pick([C('#f2f2ee'), C('#c9cdd2'), C('#2b2f38'), C('#b33a32'), C('#9fc6c0'), C('#e7d9b4'), C('#4a6a9a')]);
  c.box(-1.7, 0.3, -0.75, 1.7, 1.0, 0.75, col);
  c.box(-1.1, 1.0, -0.68, 1.0, 1.55, 0.68, mulC(col, 0.95));
  c.box(-1.05, 1.06, -0.69, 0.95, 1.48, 0.69, C('#2a3346'));
  for (const [x, z] of [[-1.15, -0.62], [1.15, -0.62], [-1.15, 0.62], [1.15, 0.62]]) { c.box(x - 0.3, 0, z - 0.11, x + 0.3, 0.6, z + 0.11, PAL.black); }
}

// ------------------------------------------------------------------ city intersections
/** a horizontal Japanese traffic signal on an arm over the lane; dir: +1 faces local +X, −1 faces −X */
export function trafficSignal(G, M, dir, reach) {
  const c = G.color, GRAY = C('#8d9096'), DARK = C('#3a3d42');
  c.setM(M);
  c.cyl(0, 0, 0, 0.11, 0.09, 6.0, 10, GRAY);
  c.box(-0.05, 5.62, -reach - 0.1, 0.05, 5.74, 0.05, GRAY);
  const z0 = -reach - 0.62, z1 = -reach + 0.62;
  c.box(-0.14, 5.08, z0, 0.14, 5.56, z1, DARK);
  const fx = dir * 0.141;
  G.atlas.setM(M);
  (dir > 0 ? pxq : nxq)(G.atlas, fx, z0, z1, 5.08, 5.56, 'signal');
  const left = dir > 0 ? z1 : z0, step = dir > 0 ? -1 : 1;
  for (let i = 0; i < 3; i++) { const zc = left + step * (0.2 + i * 0.4); c.box(dir > 0 ? 0.14 : -0.36, 5.47, zc - 0.15, dir > 0 ? 0.36 : -0.14, 5.5, zc + 0.15, DARK); }
  const zg = left + step * 0.2;
  G.sig.setM(M); G.sig.box(dir > 0 ? 0.145 : -0.16, 5.21, zg - 0.11, dir > 0 ? 0.16 : -0.145, 5.43, zg + 0.11, W1);
}
/** 歩道橋: a pedestrian overpass spanning ±span across the road, stairs down to both sidewalks */
export function pedestrianBridge(G, M, span, name) {
  const c = G.color, STEEL = C('#3d6ea8'), PANEL = C('#e8eef2'), CONC = C('#c7c5bf'), h = 5.35;
  c.setM(M);
  c.box(-1.1, h - 0.65, -span, 1.1, h, span, STEEL);
  for (const x of [-1.1, 1.0]) { c.box(x, h, -span, x + 0.1, h + 1.1, span, PANEL); c.box(x - 0.02, h + 1.1, -span, x + 0.12, h + 1.18, span, STEEL); }
  G.atlas.setM(M);
  nxq(G.atlas, -1.105, -2.2, 2.2, h - 0.62, h - 0.06, name); pxq(G.atlas, 1.105, -2.2, 2.2, h - 0.62, h - 0.06, name);
  c.setM(M);
  for (const zs of [-1, 1]) {
    const za = zs * (span - 1.65), zb = zs * (span - 0.15), lo = Math.min(za, zb), hi = Math.max(za, zb);
    c.box(-0.45, 0.15, lo + 0.3, 0.45, h - 0.65, hi - 0.3, STEEL);           // column under the deck end
    const n = 20, rise = (h - 0.15) / n;
    for (let k = 0; k < n; k++) c.box(1.1 + k * 0.3, 0.15, lo, 1.1 + (k + 1) * 0.3, h - (k + 1) * rise + 0.04, hi, CONC);
    c.box(1.1, h - 0.1, lo - 0.05, 1.1 + n * 0.3, h - 0.02, lo + 0.05, STEEL); // a simple handrail line along the stair
  }
}

// ------------------------------------------------------------------ a little rural station (無人駅)
/** platform along local x from xa to xb (road end at xRoad), beside the near track; local z = across the tracks */
export function station(G, M, xa, xb, xRoad, idx, r) {
  const c = G.color, top = 1.22, zE = 3.55, zB = 6.7, CONC = C('#c8c5bd'), EDGE = C('#ebe8de'), WOOD = C('#7a5a42'), WOOD2 = C('#5e4433'), ROOF = C('#4d5468');
  c.setM(M);
  c.box(xa, -1.4, zE, xb, top, zB, CONC, null, { noBottom: true });
  c.box(xa, top, zE, xb, top + 0.025, zE + 0.32, EDGE);                        // white coping along the edge
  c.box(xa, top, zE + 0.6, xb, top + 0.04, zE + 0.9, PAL.yellow);              // tactile strip (点字ブロック)
  // ramp down to the road
  const dir = Math.sign(xRoad - (xa + xb) / 2), xr0 = dir > 0 ? xb : xa, xr1 = xr0 + dir * 6.2;
  const rz0 = zE + 0.9, rz1 = zB - 0.2;
  const RP = (x, y, z) => [x, y, z];
  if (dir > 0) c.quad(RP(xr1, 0.1, rz1), RP(xr1, 0.1, rz0), RP(xr0, top, rz0), RP(xr0, top, rz1), CONC);
  else c.quad(RP(xr1, 0.1, rz0), RP(xr1, 0.1, rz1), RP(xr0, top, rz1), RP(xr0, top, rz0), CONC);
  for (const z of [rz0, rz1]) { // sloped handrails on posts
    const RAILC = C('#9aa0a6');
    c.rod([xr1, 0.1 + 0.9, z], [xr0, top + 0.9, z], 0.03, 0.03, 5, RAILC);
    for (let k = 0; k <= 3; k++) { const x = xr1 + ((xr0 - xr1) * k) / 3, y = 0.1 + ((top - 0.1) * k) / 3; c.box(x - 0.03, y, z - 0.03, x + 0.03, y + 0.9, z + 0.03, RAILC); }
  }
  // the platform's long side walls: weathered concrete panels instead of a blank face
  G.atlas.setM(M);
  for (let x = xa; x < xb - 0.01; x += 3) {
    const x2 = Math.min(xb, x + 3);
    G.atlas.quad([x, -0.6, zB + 0.004], [x2, -0.6, zB + 0.004], [x2, top, zB + 0.004], [x, top, zB + 0.004], C('#d8d4ca'), uv('concrete'));
  }
  c.setM(M);
  // low fence along the back edge
  for (let x = xa + 0.4; x < xb; x += 2) c.box(x - 0.05, top, zB - 0.12, x + 0.05, top + 1.0, zB - 0.02, C('#8f949a'));
  for (const y of [0.45, 0.95]) c.box(xa, top + y, zB - 0.1, xb, top + y + 0.06, zB - 0.04, C('#8f949a'));
  // the shelter (待合所): wooden walls, a sloping roof, a bench inside, the station's name on its back wall
  const len = xb - xa, fromRoad = f => (dir > 0 ? xb - len * f : xa + len * f);
  const xm = fromRoad(0.47), s0 = xm - 2.3, s1 = xm + 2.3, zf = zE + 1.35, zb = zB - 0.25;
  c.box(s0, top, zb - 0.12, s1, top + 2.45, zb, WOOD);
  for (const x of [s0, s1 - 0.12]) c.box(x, top, zf + 0.6, x + 0.12, top + 2.45, zb, WOOD2);
  for (const x of [s0, s1 - 0.12]) c.box(x, top, zf, x + 0.12, top + 2.45, zf + 0.12, WOOD2);
  c.quad([s1 + 0.4, top + 2.5, zf - 0.45], [s0 - 0.4, top + 2.5, zf - 0.45], [s0 - 0.4, top + 2.85, zb + 0.35], [s1 + 0.4, top + 2.85, zb + 0.35], ROOF);
  c.quad([s0 - 0.4, top + 2.42, zf - 0.45], [s1 + 0.4, top + 2.42, zf - 0.45], [s1 + 0.4, top + 2.77, zb + 0.35], [s0 - 0.4, top + 2.77, zb + 0.35], C('#3a3f50'));
  c.box(s0 + 0.3, top + 0.42, zb - 0.55, s1 - 0.3, top + 0.48, zb - 0.15, C('#8a6a4a'));
  for (const x of [s0 + 0.4, s1 - 0.5]) c.box(x, top, zb - 0.5, x + 0.08, top + 0.42, zb - 0.2, PAL.metal);
  G.atlas.setM(M);
  G.atlas.quad([xm - 1.1, top + 1.55, zb + 0.005], [xm + 1.1, top + 1.55, zb + 0.005], [xm + 1.1, top + 2.03, zb + 0.005], [xm - 1.1, top + 2.03, zb + 0.005], W1, uv('ekiplate' + idx));
  // the station-name board on two posts, printed on both faces
  const bx = fromRoad(0.2), bz = zE + 1.6, bw = 1.25, by0 = top + 1.25, by1 = by0 + 0.95;
  c.setM(M);
  for (const x of [bx - bw + 0.12, bx + bw - 0.12]) c.cyl(x, top, bz, 0.05, 0.05, by1 - top + 0.05, 8, C('#6b7078'));
  c.box(bx - bw, by0 - 0.03, bz - 0.03, bx + bw, by1 + 0.03, bz + 0.03, C('#3a3d42'));
  G.atlas.setM(M);
  G.atlas.quad([bx - bw, by0, bz + 0.035], [bx + bw, by0, bz + 0.035], [bx + bw, by1, bz + 0.035], [bx - bw, by1, bz + 0.035], W1, uv('ekimei' + idx));
  G.atlas.quad([bx + bw, by0, bz - 0.035], [bx - bw, by0, bz - 0.035], [bx - bw, by1, bz - 0.035], [bx + bw, by1, bz - 0.035], W1, uv('ekimei' + idx));
  // a bench out on the platform and a few old lamps
  c.setM(M);
  const bench = xm - dir * 4.2;
  c.box(bench - 0.9, top + 0.42, zB - 1.25, bench + 0.9, top + 0.47, zB - 0.85, C('#3b6ea8'));
  c.box(bench - 0.9, top + 0.47, zB - 0.88, bench + 0.9, top + 0.9, zB - 0.83, C('#3b6ea8'));
  for (const x of [bench - 0.75, bench + 0.7]) c.box(x, top, zB - 1.2, x + 0.06, top + 0.42, zB - 0.9, PAL.metal);
  for (let x = xa + 3; x < xb - 1; x += 9) oldLamp(G, sub(M, x, top, zB - 0.45));
}

// ------------------------------------------------------------------ washing on the balcony
const CLOTH = ['#f4f4ef', '#f4f4ef', '#dfe9f3', '#f6d8de', '#f3e7b8', '#cfe3d2', '#3d4a6b', '#e9c9a8'].map(C);
const FUTON = ['#f3dfe4', '#dde8f4', '#f4ecd6', '#d9ecdf', '#f6f2ea'].map(C);
/** a laundry pole with shirts and towels hanging between xa and xb, top at y, plane at z (faces −z, the street) */
export function laundry(c, xa, xb, y, z, r) {
  c.rod([xa, y, z], [xb, y, z], 0.018, 0.018, 4, PAL.metal);
  let x = xa + 0.12 + r() * 0.2;
  while (x < xb - 0.35) {
    const w = 0.28 + r() * 0.34, h = 0.36 + r() * 0.42, col = r.pick(CLOTH), zz = z + (r() - 0.5) * 0.06;
    c.quad([x + w, y - h, zz], [x, y - h, zz], [x, y - 0.02, zz], [x + w, y - 0.02, zz], col);
    c.quad([x, y - h, zz + 0.01], [x + w, y - h, zz + 0.01], [x + w, y - 0.02, zz + 0.01], [x, y - 0.02, zz + 0.01], mulC(col, 0.85));
    if (r() < 0.4) c.box(x + w * 0.45, y - 0.02, zz - 0.02, x + w * 0.55, y + 0.06, zz + 0.02, C('#d8d8d0')); // a peg
    x += w + 0.06 + r() * 0.22;
  }
}
/** a futon airing over a balcony parapet whose outer face is at zFront and top at yTop */
export function futon(c, xa, xb, yTop, zFront, r) {
  const col = r.pick(FUTON), d = 0.11;
  c.box(xa, yTop - 0.02, zFront - d, xb, yTop + 0.09, zFront + 0.22, col);
  c.box(xa, yTop - 0.72, zFront - d, xb, yTop + 0.09, zFront - 0.005, col);
  c.box(xa + 0.08, yTop - 0.5, zFront - d - 0.004, xb - 0.08, yTop - 0.42, zFront - d + 0.01, mulC(col, 0.86)); // a quilted seam
}

// ------------------------------------------------------------------ お地蔵さん: a little stone Jizo in a roadside shelter
export function jizo(G, M) {
  const c = G.color, STONE = C('#a19f97'), WOOD = C('#6b4a35'), ROOF = C('#4f4a44'), RED = C('#c8342a');
  c.setM(M);
  c.box(-0.62, -0.6, -0.46, 0.62, 0.32, 0.46, C('#8d8b84'));
  for (const x of [-0.52, 0.48]) for (const z of [-0.36, 0.32]) c.box(x, 0.32, z, x + 0.05, 1.5, z + 0.05, WOOD);
  c.box(-0.55, 1.42, 0.3, 0.55, 1.5, 0.4, WOOD);
  c.quad([0.72, 1.46, -0.6], [-0.72, 1.46, -0.6], [-0.72, 1.78, 0.02], [0.72, 1.78, 0.02], ROOF);
  c.quad([-0.72, 1.46, 0.62], [0.72, 1.46, 0.62], [0.72, 1.78, 0.02], [-0.72, 1.78, 0.02], ROOF);
  c.cyl(0, 0.32, 0, 0.17, 0.13, 0.44, 10, STONE);
  c.blob(0, 0.86, 0, 0.11, STONE, mulC(STONE, 0.8), 0);
  c.cyl(0, 0.6, 0, 0.19, 0.11, 0.16, 10, RED, false);                 // red bib (よだれかけ)
  c.cyl(0, 0.93, 0, 0.115, 0.03, 0.1, 8, RED);                       // knitted red cap
  for (const x of [-0.32, 0.3]) c.cyl(x, 0.32, -0.18, 0.05, 0.06, 0.07, 8, C('#e9e6dc')); // little offering cups
  c.box(-0.06, 0.32, -0.32, 0.06, 0.58, -0.28, C('#5b8d3d'));          // a sprig of greenery
}

// ------------------------------------------------------------------ level crossing alarm post (static part)
export function alarmPost(G, M) {
  const c = G.color; c.setM(M);
  for (let i = 0; i < 8; i++) c.cyl(0, i * 0.4, 0, 0.075, 0.075, 0.4, 8, i % 2 ? PAL.black : PAL.yellow, false);
  c.cyl(0, 3.2, 0, 0.075, 0.055, 0.75, 8, PAL.black);
  c.box(-0.5, 2.55, -0.06, 0.5, 2.95, 0.02, PAL.black);
  for (const x of [-0.28, 0.28]) c.box(x - 0.17, 2.9, -0.3, x + 0.17, 2.95, -0.06, PAL.black);
  c.box(-0.78, -0.9, -0.34, 0.3, 0.0, 0.34, PAL.concrete, null, { noBottom: true });
  c.box(-0.68, 0, -0.26, -0.16, 1.18, 0.26, C('#e9e9e3'));
  c.box(-0.68, 1.18, -0.26, -0.16, 1.24, 0.26, PAL.yellow);
  for (const a of [Math.PI / 4, -Math.PI / 4]) {
    c.setM(new THREE.Matrix4().multiplyMatrices(M, new THREE.Matrix4().makeRotationZ(a).setPosition(0, 3.62, -0.1)));
    for (let i = 0; i < 4; i++) c.box(-0.6 + i * 0.3, -0.075, -0.02, -0.3 + i * 0.3, 0.075, 0.02, i % 2 ? PAL.black : PAL.yellow);
  }
  c.setM(M);
  G.atlas.setM(M); fq(G.atlas, -0.33, 0.33, 3.0, 3.24, -0.09, 'xing_plate');
}

// ------------------------------------------------------------------ shrine / park / coast bits
/** a stone lantern (石灯籠), square throughout as in the cherry avenue's painting: a footing, a post, a platform, the fire
 *  box with its two windows, a pyramid roof and a knob on top */
export function stoneLantern(G, M) {
  const c = G.color; c.setM(M);
  const S0 = PAL.stone, S1 = mulC(PAL.stone, 1.06), S2 = mulC(PAL.stone, 0.92);
  c.box(-0.36, 0, -0.36, 0.36, 0.18, 0.36, S2); c.box(-0.26, 0.18, -0.26, 0.26, 0.26, 0.26, S0); // footing
  c.box(-0.13, 0.26, -0.13, 0.13, 1.0, 0.13, S0);                                                 // post
  sqFrustum(c, 1.0, 1.1, 0.16, 0.3, S1, true, true);                                              // platform
  c.box(-0.2, 1.1, -0.2, 0.2, 1.48, 0.2, S1);                                                     // fire box
  sqFrustum(c, 1.48, 1.54, 0.25, 0.35, S2, false, true); sqFrustum(c, 1.54, 1.78, 0.35, 0.07, S2); // roof
  c.cyl(0, 1.78, 0, 0.07, 0.04, 0.1, 6, S0); c.cyl(0, 1.88, 0, 0.05, 0.0, 0.08, 6, S0);           // knob (宝珠)
  G.lamp.setM(M); G.lamp.box(-0.1, 1.2, -0.205, 0.1, 1.38, -0.195, W1); G.lamp.box(-0.1, 1.2, 0.195, 0.1, 1.38, 0.205, W1);
}
export function torii(G, M, span, h = 6.2) {
  const c = G.color; c.setM(M);
  for (const z of [-span, span]) { c.cyl(0, 0, z, 0.32, 0.27, h, 12, PAL.vermilion); c.cyl(0, 0, z, 0.38, 0.38, 0.5, 12, PAL.black); }
  c.box(-0.2, h * 0.78, -span - 0.6, 0.2, h * 0.78 + 0.35, span + 0.6, PAL.vermilion);
  c.box(-0.35, h - 0.1, -span - 1.0, 0.35, h + 0.3, span + 1.0, PAL.vermilion);
  c.box(-0.45, h + 0.3, -span - 1.3, 0.45, h + 0.6, span + 1.3, PAL.black);
  c.box(-0.12, h * 0.78 + 0.35, -0.3, 0.12, h - 0.1, 0.3, PAL.vermilion);
}
export function busStop(G, M, r) {
  const c = G.color; c.setM(M);
  for (const x of [-1.5, 1.5]) c.box(x - 0.05, 0, 0.6, x + 0.05, 2.4, 0.7, C('#7d8a96'));
  c.box(-1.7, 2.4, -0.3, 1.7, 2.5, 0.9, C('#5c7590'));
  c.box(-1.55, 0, 0.7, 1.55, 2.3, 0.75, C('#c9d8e2'));
  c.box(-1.2, 0.42, 0.25, 1.2, 0.48, 0.6, C('#8a6a4a')); c.box(-1.2, 0, 0.3, -1.1, 0.42, 0.55, PAL.metal); c.box(1.1, 0, 0.3, 1.2, 0.42, 0.55, PAL.metal);
  c.cyl(2.3, 0, -0.2, 0.04, 0.04, 2.3, 6, PAL.metal);
  G.atlas.setM(M); nxq(G.atlas, 2.25, -0.55, 0.15, 2.0, 2.7, 'busstop'); pxq(G.atlas, 2.35, -0.55, 0.15, 2.0, 2.7, 'busstop');
}
// ---- 消波ブロック: tetrapods, piled in heaps at the foot of the coast's sea wall (chunks.js placeCoast) ----
// A tetrapod is four chunky legs, truncated cones from its middle out to end faces with a rounded rim, as the reference
// art paints them: smooth round concrete (12 sides a leg on desktops, 6 on phones; the rim a bevel whose normals turn
// from the leg's side to its end, so it shades round). Built once per shade and tier and stamped: a heap is many of them.
// Its origin is its middle; legs 1.0 long at scale 1 (the up leg along +y, the other three splayed below). Drawn with
// their own soft concrete (materials.js M.tetra), which takes from uv: x how far out along its leg a point is (the creases
// where the legs meet, ~0.27 out, are shaded), y the road distance s (set per block: its foam rises with the big waves)
const TETRA_DIRS = [[0, 1, 0], [0.943, -0.333, 0], [-0.471, -0.333, 0.816], [-0.471, -0.333, -0.816]];
const TETRA_GREY = C('#a7a7aa'), TETRA_SHADES = [1, 0.95, 0.9], TCACHE_T = {}; // (the reference's grey concrete)
const tetraSeg = () => (LEAF_D > 0.7 ? 12 : 6);
// (indexed: each leg's three rings (its middle, where the rim starts, the end face's edge) and the end face's middle are
// shared by the triangles round them, 148 vertices a block on desktops instead of 720: the same triangles, in the same
// order, with the same vertices, for a fifth of the vertex work in the main and the shadow pass)
function tetraTemplate(k, seg) {
  const key = k * 16 + seg;
  let t = TCACHE_T[key];
  if (!t) {
    const g = new GB({ uv: true, idx: true }), col = mulC(TETRA_GREY, TETRA_SHADES[k]), r0 = 0.42, r1 = 0.25, bv = 0.075;
    const sl = r0 - r1, tb = 1 - bv, rb = r0 + (r1 - r0) * tb, rc = rb - bv; // (the cone's taper; where the rim starts, its radius; the end face's)
    const V = (p, n, u) => g.vtx(p[0], p[1], p[2], n[0], n[1], n[2], u, 0, col), I = [];
    for (const d of TETRA_DIRS) {
      // (wound outwards: GB.rod's sides face inwards)
      let ux = 0, uy = 1, uz = 0; if (Math.abs(d[1]) > 0.99) { ux = 1; uy = 0; }
      let ax = d[1] * uz - d[2] * uy, ay = d[2] * ux - d[0] * uz, az = d[0] * uy - d[1] * ux; const al = Math.hypot(ax, ay, az); ax /= al; ay /= al; az /= al;
      const bx = ay * d[2] - az * d[1], by = az * d[0] - ax * d[2], bz = ax * d[1] - ay * d[0];
      const ring = [];
      for (let i = 0; i < seg; i++) { const a = (i / seg) * Math.PI * 2, c = Math.cos(a), s = Math.sin(a); ring.push([ax * c + bx * s, ay * c + by * s, az * c + bz * s]); }
      const at = (n, r, t) => [d[0] * t + n[0] * r, d[1] * t + n[1] * r, d[2] * t + n[2] * r];
      // the rings: A round the middle and D where the rim starts (the side's normals, leaning out along the leg by the cone's
      // taper), E round the end face (its normal); then the end face's middle
      const a0 = g.n, d0 = a0 + seg, e0 = d0 + seg, c0 = e0 + seg;
      for (const n of ring) V(at(n, r0, 0), [n[0] + d[0] * sl, n[1] + d[1] * sl, n[2] + d[2] * sl], 0);
      for (const n of ring) V(at(n, rb, tb), [n[0] + d[0] * sl, n[1] + d[1] * sl, n[2] + d[2] * sl], tb);
      for (const n of ring) V(at(n, rc, 1), d, 1);
      V(d, d, 1);
      for (let i = 0; i < seg; i++) {
        const j = (i + 1) % seg;
        I.push(a0 + i, d0 + j, a0 + j, a0 + i, d0 + i, d0 + j); // the leg's side, from the middle out to where the rim starts
        I.push(d0 + i, e0 + j, d0 + j, d0 + i, e0 + i, e0 + j); // the rounded rim: its normals turn from the side's to the end's
        I.push(c0, e0 + j, e0 + i);                             // the end face (a fan from its middle)
      }
    }
    t = TCACHE_T[key] = g.toArrays(); t.I = Uint16Array.from(I);
  }
  return t;
}
const _tq = new THREE.Quaternion(), _te = new THREE.Euler(), _tv = new THREE.Vector3(), _ts = new THREE.Vector3();
/** one tetrapod, its middle at (x, y, z) in the chunk's frame, `s` its leg length (m). Standing on three legs (one up,
 *  as most of the reference art's do, leaning a little) or tumbled (stand: how likely it stands); `wet`: the water
 *  line (its contact shading); `rs`: its road distance, wrapped as the shaders' (its foam keeps time with the waves).
 *  Into G.tetra (its own soft concrete) */
export function tetrapod(G, x, y, z, r, s, wet = 0, stand = 0.6, rs = 0) {
  if (r() < stand) _te.set((r() - 0.5) * 0.4, r() * 6.283, (r() - 0.5) * 0.4); else _te.set(r() * 6.283, r() * 6.283, r() * 6.283);
  const m = new THREE.Matrix4().compose(_tv.set(x, y, z), _tq.setFromEuler(_te), _ts.set(s, s, s)); m.groundY = wet;
  const g = G.tetra, o = g.n;
  g.stamp(tetraTemplate(Math.floor(r() * 3), tetraSeg()), m);
  for (let i = o * 2 + 1; i < g.n * 2; i += 2) g.U[i] = rs;
}
export function warmTetrapods() { for (let k = 0; k < 3; k++) for (const seg of [6, 12]) tetraTemplate(k, seg); }
export function lighthouse(G, M) {
  const c = G.color; c.setM(M);
  G.foliage.setM(M); G.foliage.blob(0, 0.5, 0, 6, C('#8f8a80'), C('#55524c'), 1, 0.5);
  c.cyl(0, 2, 0, 2.0, 1.4, 15, 14, PAL.white);
  for (const y of [6, 11]) c.cyl(0, y, 0, 2.0 - (y - 2) * 0.04 + 0.03, 2.0 - (y + 1.6 - 2) * 0.04 + 0.03, 1.6, 14, PAL.red, false);
  c.cyl(0, 17, 0, 1.9, 1.9, 0.25, 14, PAL.black); c.cyl(0, 18.6, 0, 1.0, 0.25, 1.2, 12, PAL.red);
  G.lamp.setM(M); G.lamp.cyl(0, 17.25, 0, 0.95, 0.95, 1.35, 12, W1);
}
export function boat(G, M, r) {
  const c = G.color; c.setM(M);
  const hull = r.pick([C('#f4f4f0'), C('#3b6ea5'), C('#d0d8e0')]);
  c.box(-2.4, 0, -0.9, 2.0, 0.9, 0.9, hull);
  tri(c, [2.0, 0, -0.9], [3.4, 0.9, 0], [2.0, 0.9, -0.9], hull); tri(c, [2.0, 0, 0.9], [2.0, 0.9, 0.9], [3.4, 0.9, 0], hull);
  c.box(-2.4, 0.86, -0.95, 3.0, 1.0, 0.95, PAL.red);
  c.box(-1.6, 0.9, -0.6, -0.1, 2.1, 0.6, PAL.white); c.box(-1.55, 1.5, -0.62, -0.15, 1.85, 0.62, C('#2a3346'));
  c.rod([0.6, 0.9, 0], [0.6, 4.0, 0], 0.05, 0.04, 5, PAL.metal);
}
export function smallShrine(G, M, r) {
  const c = G.color; c.setM(M);
  c.box(-0.8, 0, 0.6, 0.8, 0.5, 2.0, PAL.stone);
  c.box(-0.55, 0.5, 0.9, 0.55, 1.5, 1.8, C('#8a6a4a'));
  c.quad([0.8, 1.4, 0.6], [-0.8, 1.4, 0.6], [-0.8, 1.95, 1.35], [0.8, 1.95, 1.35], C('#4d5468'));
  c.quad([-0.8, 1.4, 2.1], [0.8, 1.4, 2.1], [0.8, 1.95, 1.35], [-0.8, 1.95, 1.35], C('#4d5468'));
  torii(G, sub(M, 0, 0, -0.3, Math.PI / 2), 0.75, 2.2);
}

// ------------------------------------------------------------------ Istanbul: the Bosphorus shore road (Arnavutköy)
const TR_POLE = C('#8b8379'); // (a weathered concrete pole, without Japan's bands)
/** servi: an Italian cypress, the tall dark spindle that stands over Istanbul's gardens and graveyards */
export function treeCypress(G, M, r, s = 1) {
  const h = r.range(10, 15) * s, R = r.range(0.85, 1.1) * s;
  G.color.setM(M); G.color.cyl(0, 0, 0, 0.16 * s, 0.12 * s, h * 0.12, 6, PAL.trunkDark);
  G.foliage.setM(M); // (a tall narrow flame: a lumpy spindle, its top drawn out to a soft point)
  G.foliage.blob(0, h * 0.42, 0, R, C('#3a6a43'), C('#18392a'), 1, (h * 0.42) / R);
  G.foliage.blob(0, h * 0.78, 0, R * 0.62, C('#467a4c'), C('#1f4430'), 2, (h * 0.22) / (R * 0.62));
}
// a lit window's moment at dusk for the world atlas's cells (its names aren't the procedural atlas's 'win…L')
const trLit = (a, cell, lit, x, y) => { a.litV = lit ? homeLit(a, x, y) : 0; return lit ? cell + 'L' : cell; };
/** a roof's tiles: one sloping face, from its eave line (e0 → e1) up to its top line (t0 → t1: the ridge, or a hip's apex),
 *  laid in strips about 2.2 m wide each carrying the whole tile cell (alaturka kiremit at their real size) */
function tileFace(a, e0, e1, t0, t1, cell) {
  const len = Math.hypot(e1[0] - e0[0], e1[2] - e0[2]), n = Math.max(1, Math.round(len / 2.2)), L = (p, q, k) => [p[0] + (q[0] - p[0]) * k, p[1] + (q[1] - p[1]) * k, p[2] + (q[2] - p[2]) * k];
  for (let i = 0; i < n; i++) { const k0 = i / n, k1 = (i + 1) / n; a.quad(L(e0, e1, k0), L(e0, e1, k1), L(t0, t1, k1), L(t0, t1, k0), W1, uv(cell)); }
}
/** an Ottoman wooden house of the Bosphorus (Arnavutköy), as the concept painting has them: a ground floor of grey stone or
 *  plaster, one or two upper floors jutting out over it on a sloping soffit, most with a bay window (cumba) standing out
 *  further over the street, a tall sash window in every ~2 m bay (dark frames on stained wood, white on paint and plaster:
 *  the world atlas's trW / trS / trSt / trP cells, their rooms lit one by one at dusk), the upper floors in stained boards or
 *  (pastel) plaster, wide eaves and a hipped roof of terracotta barrel tiles or a gable to the street; now and then a flag
 *  out of an upper window. Local frame as every building's: x along the road, the front facing −z, its
 *  depth +z. s: w, d, floors (2–3), wood (0–3), plaster (0–2), stone (a ground floor of grey stone blocks), pastel (−1:
 *  wood; else 0–3), cumba, gable (the roof's gable to the street, as the concept's nearest houses, instead of hipped), litP,
 *  flag */
export function ottomanHouse(G, M, r, s) {
  const { w, d, floors } = s, a = G.atlas, c = G.color, fh = 3.0, jut = 0.6, H = floors * fh, o = 0.75;
  a.setM(M); c.setM(M); a.world = true; // (the world atlas's cells: the chunk takes the atlas material's world variant)
  const nb = Math.max(2, Math.round(w / 2.1)), bw = w / nb, pastel = s.pastel ?? -1, up = pastel >= 0 ? 'trP' + pastel : 'trW' + s.wood, gf = s.stone ? 'trSt' : 'trS' + s.plaster, litP = s.litP ?? 0.55;
  const door = Math.floor(r() * nb);
  for (let i = 0; i < nb; i++) { // the ground floor's front: a door, windows
    const x0 = -w / 2 + i * bw, x1 = x0 + bw, cell = i === door ? 'trDoor' : trLit(a, gf, r() < litP, x0, 0);
    fq(a, x0, x1, 0, fh, 0, cell); a.litV = 0;
  }
  const segs = Math.max(1, Math.round(d / 2.7)), sd = d / segs;
  for (const sx of [-1, 1]) for (let j = 0; j < segs; j++) { // its sides
    const cell = trLit(a, gf, r() < litP * 0.6, sx * w + j, 0); (sx > 0 ? pxq : nxq)(a, (sx * w) / 2, j * sd, (j + 1) * sd, 0, fh, cell); a.litV = 0;
  }
  // the bay window: the middle one or two bays of the upper floors standing out a further cj over the street
  const nc = s.cumba ? (nb >= 4 ? 2 : 1) : 0, c0 = Math.floor((nb - nc) / 2), cj = 0.6, xc0 = -w / 2 + c0 * bw, xc1 = xc0 + nc * bw;
  const WOODC = pastel >= 0 ? C(['#e2d6bd', '#dbc794', '#dbc1b5', '#c1c9cb'][pastel]) : C(['#6e4a33', '#93704a', '#7c7062', '#d8ccb2'][s.wood]);
  for (let f = 1; f < floors; f++) { // the upper floors
    const y0 = f * fh, y1 = y0 + fh;
    for (let i = 0; i < nb; i++) { const x0 = -w / 2 + i * bw, inC = i >= c0 && i < c0 + nc, cell = trLit(a, up, r() < (inC ? litP + 0.15 : litP), x0, y0); fq(a, x0, x0 + bw, y0, y1, inC ? -jut - cj : -jut, cell); a.litV = 0; }
    if (nc) { // the bay's two sides, plain boards
      c.quad([xc0, y0, -jut - cj], [xc0, y0, -jut], [xc0, y1, -jut], [xc0, y1, -jut - cj], mulC(WOODC, 0.85)); // (facing −x)
      c.quad([xc1, y0, -jut], [xc1, y0, -jut - cj], [xc1, y1, -jut - cj], [xc1, y1, -jut], mulC(WOODC, 0.85)); // (facing +x)
    }
    const segU = Math.max(1, Math.round((d + jut) / 2.7)), su = (d + jut) / segU;
    for (const sx of [-1, 1]) for (let j = 0; j < segU; j++) {
      const cell = trLit(a, up, r() < litP * 0.6, sx * w + j, y0); (sx > 0 ? pxq : nxq)(a, (sx * w) / 2, -jut + j * su, -jut + (j + 1) * su, y0, y1, cell); a.litV = 0;
    }
  }
  // the soffit under the jut: sloping in from the jut's edge to the ground floor's wall, and its two ends; the bay's underside
  c.quad([w / 2, fh - 0.4, 0], [-w / 2, fh - 0.4, 0], [-w / 2, fh, -jut], [w / 2, fh, -jut], mulC(WOODC, 0.7));
  for (const sx of [-1, 1]) { const x = (sx * w) / 2; if (sx > 0) c.quad([x, fh - 0.4, 0], [x, fh, -jut], [x, fh, -jut], [x, fh, 0], mulC(WOODC, 0.8)); else c.quad([x, fh, -jut], [x, fh - 0.4, 0], [x, fh, 0], [x, fh, 0], mulC(WOODC, 0.8)); }
  if (nc) c.quad([xc1, fh, -jut], [xc0, fh, -jut], [xc0, fh, -jut - cj], [xc1, fh, -jut - cj], mulC(WOODC, 0.6));
  c.quad([-w / 2, 0, d], [w / 2, 0, d], [w / 2, H, d], [-w / 2, H, d], mulC(WOODC, 0.8)); // (the back: never seen from the road; closes the box for the shadows)
  const SOF = mulC(WOODC, 0.62), zw = -jut; // (zw: the main front wall the eaves stand out from; over a bay window they cover its top)
  let chX = 0, chY = H + 1, chZ = d / 2;
  if (!s.gable) {
    // the roof: hipped, its eaves o out all round (their undersides painted), the ridge along the road, ~33° (from the street
    // its tiles show over the eaves)
    const zf = -jut - (nc ? cj : 0) - o, zb = d + o, xw = w / 2 + o, yE = H - 0.2, rh = Math.min(3.6, (zb - zf) * 0.33), zc = (zf + zb) / 2, hd = (zb - zf) / 2, xl = Math.min(0, -xw + hd), xr = -xl, yR = H + rh;
    const E0 = [-xw, yE, zf], E1 = [xw, yE, zf], E2 = [xw, yE, zb], E3 = [-xw, yE, zb], R0 = [xl, yR, zc], R1 = [xr, yR, zc];
    tileFace(a, E1, E0, R1, R0, 'trTile'); tileFace(a, E3, E2, R0, R1, 'trTile'); // front, back (each from its eave's right end, seen from outside)
    tileFace(a, E2, E1, R1, R1, 'trTile'); tileFace(a, E0, E3, R0, R0, 'trTile'); // the hips at either end
    c.noShadow = true; // (the eaves' undersides: high up, in the roof's shadow anyway)
    c.quad([-xw, yE, zf], [xw, yE, zf], [w / 2, yE, zw], [-w / 2, yE, zw], SOF); c.quad([xw, yE, zb], [-xw, yE, zb], [-w / 2, yE, d], [w / 2, yE, d], SOF);
    c.quad([xw, yE, zf], [xw, yE, zb], [w / 2, yE, d], [w / 2, yE, zw], SOF); c.quad([-xw, yE, zb], [-xw, yE, zf], [-w / 2, yE, zw], [-w / 2, yE, d], SOF);
    c.noShadow = false;
    chX = xr * 0.4; chY = yR; chZ = zc;
  } else {
    // …or its gable to the street: the ridge running back from the street, ~36°, the eaves and the gable's rake standing out
    // o all round; the gable's triangle in the upper floors' boards (or plaster), a little round window in it
    const zf = zw - o, zb = d + o, xw = w / 2 + o, yE = H - 0.2, k = 0.72, yR = yE + xw * k, yW = yE + o * k;
    tileFace(a, [-xw, yE, zf], [-xw, yE, zb], [0, yR, zf], [0, yR, zb], 'trTile'); tileFace(a, [xw, yE, zb], [xw, yE, zf], [0, yR, zb], [0, yR, zf], 'trTile');
    const GC = mulC(WOODC, 0.95);
    c.quad([w / 2, H, zw], [-w / 2, H, zw], [-w / 2, yW, zw], [w / 2, yW, zw], GC); // (the gable's foot, up to the roof at the walls)
    c.quad([w / 2, yW, zw], [-w / 2, yW, zw], [0, yR - 0.1, zw], [0, yR - 0.1, zw], GC); // its triangle, facing the street
    c.quad([-w / 2, H, d], [w / 2, H, d], [w / 2, yW, d], [-w / 2, yW, d], GC); c.quad([-w / 2, yW, d], [w / 2, yW, d], [0, yR - 0.1, d], [0, yR - 0.1, d], GC); // (the back's)
    c.box(-0.32, (yW + yR) / 2 - 0.32, zw - 0.04, 0.32, (yW + yR) / 2 + 0.32, zw, C('#f1ece2')); c.box(-0.22, (yW + yR) / 2 - 0.22, zw - 0.06, 0.22, (yW + yR) / 2 + 0.22, zw - 0.04, C('#3c4a64')); // (its little window)
    c.noShadow = true; // the undersides: the eaves along the sides, the rake over the gables
    for (const sx of [-1, 1]) {
      const x0 = sx * xw, x1 = sx * (w / 2);
      if (sx > 0) c.quad([x0, yE, zf], [x0, yE, zb], [x1, yE, zb], [x1, yE, zf], SOF); else c.quad([x0, yE, zb], [x0, yE, zf], [x1, yE, zf], [x1, yE, zb], SOF);
      for (const [za, zb2] of [[zf, zw], [d, zb]]) { // (the rake: from the eave's corner up to the ridge, its underside)
        const P0 = [x0, yE - 0.01, za], P1 = [x0, yE - 0.01, zb2], P2 = [0, yR - 0.01, zb2], P3 = [0, yR - 0.01, za];
        if (sx > 0) c.quad(P0, P1, P2, P3, SOF); else c.quad(P1, P0, P3, P2, SOF); // (facing down and out under its slope)
      }
    }
    c.noShadow = false;
    chX = w * 0.18; chY = yE + (xw - w * 0.18) * k; chZ = d * 0.6;
  }
  if (r() < 0.5) c.box(chX - 0.3, chY - 0.9, chZ + 0.6, chX + 0.3, chY + 0.7, chZ + 1.2, C('#b8ad9b')); // a chimney
  if (s.flag) { // a flag out of an upper window, on a pole at 40°
    const x = -w / 2 + bw * 0.5, y = H - 1.0, z = -jut - 0.05, L = 1.9, tip = [x, y + L * 0.64, z - L * 0.77];
    c.rod([x, y, z], tip, 0.025, 0.02, 4, PAL.white);
    flagCloth(G, M, tip, 1.0, 0.77, -1);
  }
}
/** the Bosphorus's painted Ottoman houses (painted.js loadTrHouseAtlas; textures.js buildWorldAtlas draws their cells): their
 *  types, once those cells are in the world atlas; null until then, and if they failed (the Bosphorus then keeps ottomanHouse) */
export const TR_HOUSES = { types: null, extras: {} };
/** types: the house types; extras: the hillside village strips' and the ferry's sizes (their cells: trV1…, trFerry) */
export const setTrHouses = (types, extras = {}) => { TR_HOUSES.types = types && types.length ? types : null; TR_HOUSES.extras = TR_HOUSES.types ? extras : {}; };
/** the hillside village higher up the hill, as the concept paints it (the rows of houses stacked up the slope among cypresses
 *  and round trees: Grok repaints of its own hillside, cut as panoramas): a big flat card standing on the hill, from its
 *  bottom-left corner p0 to its bottom-right p1, h tall, turned towards the drive (chunks.js placeBosphorus). In three upright
 *  strips, each with its own moment for its lit windows at dusk */
export function trVillage(G, p0, p1, h, cell) {
  const a = G.atlas, cl = uv(cell); a.setM(IDENT4); a.world = true;
  for (let i = 0; i < 3; i++) {
    const k0 = i / 3, k1 = (i + 1) / 3, L = (k) => [p0[0] + (p1[0] - p0[0]) * k, p0[1] + (p1[1] - p0[1]) * k, p0[2] + (p1[2] - p0[2]) * k];
    const b0 = L(k0), b1 = L(k1), t0 = [b0[0], b0[1] + h, b0[2]], t1 = [b1[0], b1[1] + h, b1[2]];
    _huv.u0 = cl.u0 + (cl.u1 - cl.u0) * k0; _huv.u1 = cl.u0 + (cl.u1 - cl.u0) * k1; _huv.v0 = cl.v0; _huv.v1 = cl.v1;
    if (a.hasLit) a.litV = homeLit(a, b0[0] * 0.37 + b0[2], i * 7.1);
    a.quad(b0, b1, t1, t0, W1, _huv); a.litV = 0;
  }
}
/** a painted Ottoman house of the Bosphorus (Arnavutköy), as its concept painting has them: its gable end (its front to the
 *  lane: a stone or plastered ground floor, the upper floor jutting out over it on brackets, the gable under the verges of
 *  the tiled roof) and its long sides painted, the long side's tiles over both slopes of its roof; the jut's underside, the
 *  eaves', its back and a plinth carrying its walls down into the slope in plain paint. T: one of TR_HOUSES.types. Local
 *  frame as every building's (the front facing −z). Each painted wall's windows light up at their own moment at dusk */
export function trHouse(G, M, r, T) {
  const a = G.atlas, c = G.color, cf = uv(T.f), cs = uv(T.s);
  a.setM(M); c.setM(M); a.world = true; // (the world atlas's cells: the chunk takes the atlas material's world variant)
  for (const q of T.pieces) {
    const cl = q.t === 'f' ? cf : cs, du = cl.u1 - cl.u0, dv = cl.v1 - cl.v0;
    _huv.u0 = cl.u0 + q.uv[0] * du; _huv.u1 = cl.u0 + q.uv[2] * du; _huv.v1 = cl.v1 - q.uv[1] * dv; _huv.v0 = cl.v1 - q.uv[3] * dv;
    hp(q.p, 0);
    if (q.lit && a.hasLit) a.litV = homeLit(a, q.p[0] + q.p[2] * 1.7, q.p[1] + q.p[5]);
    a.quad(_hp[0], _hp[1], _hp[2], _hp[3], W1, _huv); a.litV = 0;
  }
  for (const q of T.plains) { hp(q.p, 0); c.noShadow = !!q.ns; c.quad(_hp[0], _hp[1], _hp[2], _hp[3], q.c); }
  c.noShadow = false;
}
/** a flag's cloth hanging from the top of its pole (top: the pole's tip, in the prop's frame) out along ±x (dir), its height
 *  hh, length 1.5 hh, in three panels with a gentle wave; both faces (the back shows it mirrored, as cloth does) */
export function flagCloth(G, M, top, hh, sway = 0.6, dir = 1) {
  const a = G.atlas, cl = uv('trFlag'); a.setM(M); a.noShadow = false; a.world = true;
  const L = hh * 1.5, n = 3, P = k => [top[0] + dir * L * k, top[1] - 0.05 - hh * 0.06 * k, top[2] + Math.sin(k * 5.2) * 0.12 * sway * k];
  for (let i = 0; i < n; i++) {
    const k0 = i / n, k1 = (i + 1) / n, p0 = P(k0), p1 = P(k1), u0 = cl.u0 + (cl.u1 - cl.u0) * k0, u1 = cl.u0 + (cl.u1 - cl.u0) * k1;
    const b0 = [p0[0], p0[1] - hh, p0[2]], b1 = [p1[0], p1[1] - hh, p1[2]], q = { u0, u1, v0: cl.v0, v1: cl.v1 };
    if (dir > 0) { a.quad(b0, b1, p1, p0, W1, q); a.quad(b1, b0, p0, p1, W1, { u0: u1, u1: u0, v0: cl.v0, v1: cl.v1 }); }
    else { a.quad(b1, b0, p0, p1, W1, { u0: u1, u1: u0, v0: cl.v0, v1: cl.v1 }); a.quad(b0, b1, p1, p0, W1, q); }
  }
}
/** a tall flagpole with the Turkish flag (on the pavement, on a stone plinth) */
export function flagPole(G, M, h = 9) {
  const c = G.color; c.setM(M);
  c.box(-0.35, 0, -0.35, 0.35, 0.45, 0.35, C('#cfc6b2'));
  c.cyl(0, 0.45, 0, 0.07, 0.045, h - 0.45, 8, C('#e8e8e4'));
  c.cyl(0, h, 0, 0.08, 0.08, 0.14, 8, C('#d6b24a'));
  flagCloth(G, M, [0, h - 0.1, 0], 1.5, 1, 1);
}
/** a road sign on a post (the world atlas's Turkish signs), facing the drive (local −x: back along the road) */
export function trSign(G, M, cell, h = 2.4, w = 0.7, hgt = 0.7) {
  G.color.setM(M); G.color.cyl(0, 0, 0, 0.04, 0.04, h + hgt / 2, 6, PAL.metal);
  G.atlas.setM(M); G.atlas.world = true; nxq(G.atlas, -0.05, -w / 2, w / 2, h - hgt / 2, h + hgt / 2, cell);
  G.color.quad([-0.06, h - hgt / 2, w / 2], [-0.06, h - hgt / 2, -w / 2], [-0.06, h + hgt / 2, -w / 2], [-0.06, h + hgt / 2, w / 2], C('#9a9ea4')); // (its back)
}
/** an Istanbul city ferry (Şehir Hatları vapuru), as the concept painting has it: a white hull with a navy boot-top, two
 *  decks of windows, a yellow funnel with a black top, the flag at the stern. ~44 m, local x its length (bow at +x) */
export function ferry(G, M, r) {
  const c = G.color; c.setM(M);
  const WH = C('#f4f4f0'), NAVY = C('#23304a'), WIN = C('#33405a'), DECK = C('#e6e4dc');
  const L = 22, B = 4.6;
  c.box(-L, -0.8, -B, L - 6, 1.2, B, NAVY, null, { py: WH }); c.box(-L, 1.2, -B, L - 6, 2.6, B, WH);
  for (const sz of [-1, 1]) { // the bow's two sides
    const p = (x, y, z) => [x, y, z];
    if (sz < 0) { c.quad(p(L + 2, -0.8, 0), p(L - 6, -0.8, -B), p(L - 6, 2.6, -B), p(L + 3, 2.6, 0), WH); }
    else { c.quad(p(L - 6, -0.8, B), p(L + 2, -0.8, 0), p(L + 3, 2.6, 0), p(L - 6, 2.6, B), WH); }
  }
  c.quad([L - 6, 2.6, B], [L + 3, 2.6, 0], [L + 3, 2.6, 0], [L - 6, 2.6, -B], DECK);
  c.box(-L + 2, 2.6, -B + 0.3, L - 8, 5.0, B - 0.3, WH); c.box(-L + 2.2, 3.4, -B + 0.25, L - 8.2, 4.4, B - 0.25, WIN);
  c.box(-L + 5, 5.0, -B + 0.8, L - 12, 7.2, B - 0.8, WH); c.box(-L + 5.2, 5.7, -B + 0.75, L - 12.2, 6.6, B - 0.75, WIN);
  c.box(L - 15, 7.2, -2.2, L - 11, 9.0, 2.2, WH); c.box(L - 14.8, 7.9, -2.25, L - 11.2, 8.6, 2.25, WIN); // the wheelhouse
  c.cyl(-4, 7.2, 0, 1.3, 1.2, 3.2, 10, C('#e9b730')); c.cyl(-4, 10.4, 0, 1.2, 1.18, 0.9, 10, PAL.black); // the funnel
  c.rod([L - 13, 9, 0], [L - 13, 12.5, 0], 0.08, 0.06, 5, PAL.white);
  flagCloth(G, M, [-L + 0.5, 6.4, 0], 0.9, 1, -1);
}

// ------------------------------------------------------------------ the Galata Bridge (W3)
// its steel in the concept's green-grey, the lamps' dark housings, the control towers' pale concrete
const GAL_POLE = C('#5d6b63'), GAL_LAMP = C('#3a403d'), GAL_CONC = C('#cdcbc3'), GAL_JOINT = C('#a9a7a0'), GAL_DARK = C('#34383d'), GAL_WIN = C('#46525e');
const POOL_UV = { u0: 0, u1: 1, v0: 0, v1: 1 };
/** a face to −z (towards the road, in a prop's own frame): x0 … x1, y0 … y1 at z */
const fz = (c, x0, x1, y0, y1, z, col) => c.quad([x1, y0, z], [x0, y0, z], [x0, y1, z], [x1, y1, z], col);
/** the T1 tram line's portal over its two tracks, in a frame at the road's middle (local x along the road, z across it: +z the
 *  right), as the bridge's: green-grey steel posts at the reserve's edges (z0 by the road, z1 beyond), a crossbar, drop arms
 *  over the tracks (tz) holding the contact wires (chunks.js strings them, their anchors returned); the road-side post goes on
 *  up to a street lamp, its short arm reaching over our right lane (lampZ), as the concept's */
export function galPortal(G, M, z0, z1, tz, lampZ) {
  const c = G.color; c.setM(M);
  c.cyl(0, 0, z0, 0.14, 0.1, 9.0, 8, GAL_POLE); c.cyl(0, 0, z1, 0.13, 0.1, 7.3, 8, GAL_POLE);
  c.box(-0.09, 6.95, z0, 0.09, 7.22, z1, GAL_POLE); c.box(-0.05, 6.4, z0 + 0.1, 0.05, 6.5, z1 - 0.1, GAL_POLE); // (a truss's two chords)
  for (let z = z0 + 0.6; z < z1 - 0.3; z += 1.2) c.rod([0, 6.47, z], [0, 6.96, z + 0.6], 0.025, 0.025, 4, GAL_POLE);
  for (const t of tz) { c.box(-0.035, 5.95, t - 0.035, 0.035, 6.45, t + 0.035, GAL_POLE); c.box(-0.45, 5.92, t - 0.03, 0.45, 5.99, t + 0.03, GAL_POLE); }
  c.rod([0, 8.75, z0], [0, 8.95, lampZ + 0.35], 0.055, 0.045, 6, GAL_POLE);
  c.box(-0.22, 8.84, lampZ - 0.4, 0.22, 9.02, lampZ + 0.4, GAL_LAMP);
  G.lamp.setM(M); G.lamp.box(-0.17, 8.81, lampZ - 0.34, 0.17, 8.84, lampZ + 0.34, W1);
  lampAt(G, M, 0, 8.7, lampZ, 1.1);
  G.pool.setM(M); G.pool.quad([-4.2, 0.04, lampZ + 4.2], [4.2, 0.04, lampZ + 4.2], [4.2, 0.04, lampZ - 4.2], [-4.2, 0.04, lampZ - 4.2], W1, POOL_UV);
}
/** a lamp post on the bridge's walkway (its own frame: −z to the road): a tall slender post, its arm curving out over the road
 *  to a flat luminaire */
export function galLamp(G, M) {
  const c = G.color; c.setM(M);
  c.cyl(0, 0, 0, 0.11, 0.075, 8.4, 8, GAL_POLE);
  c.rod([0, 8.2, 0], [0, 8.72, -0.55], 0.055, 0.05, 6, GAL_POLE); c.rod([0, 8.72, -0.55], [0, 8.86, -1.65], 0.05, 0.045, 6, GAL_POLE);
  c.box(-0.22, 8.76, -2.2, 0.22, 8.95, -1.5, GAL_LAMP);
  G.lamp.setM(M); G.lamp.box(-0.17, 8.73, -2.15, 0.17, 8.76, -1.55, W1);
  lampAt(G, M, 0, 8.62, -1.85, 1.1);
  G.pool.setM(M); G.pool.quad([-4.2, 0.04, 2.3], [4.2, 0.04, 2.3], [4.2, 0.04, -6.1], [-4.2, 0.04, -6.1], W1, POOL_UV);
}
const JACKETS = ['#2f3d5a', '#5b5f3d', '#676c73', '#77482f', '#8a2f2a', '#3d5a6e', '#45474b', '#b9a47c', '#2d4a3a'].map(C);
const TROUSERS = ['#2b2e36', '#3a3d45', '#4a4238', '#22252b', '#5a5d64'].map(C), SKIN = ['#c99a7a', '#b58463', '#d6a98a'].map(C);
const CAPS = ['#22252b', '#8a2f2a', '#e6e2d8', '#2f3d5a', '#5b5f3d'].map(C), BUCKETS = ['#2f6fb0', '#e4e4de', '#c9402e', '#e8b93a'].map(C);
/** a fisherman at the bridge's railing, the bridge's best-known sight (its own frame: −z to the road; he faces +z, out over the
 *  water): standing, or now and then on a stool; a cap or not; his long rod leaning out over the railing, its line hanging down
 *  into the Golden Horn `drop` m below his feet; a bucket for his catch beside him now and then */
export function fisherman(G, M, r, drop) {
  const c = G.color; c.setM(M);
  const jk = r.pick(JACKETS), tr = r.pick(TROUSERS), sk = r.pick(SKIN), sit = r() < 0.22, hat = r() < 0.65 ? r.pick(CAPS) : null, s = r.range(0.94, 1.06);
  const hip = sit ? 0.46 : 0.84 * s, sh = hip + 0.58 * s, lean = sit ? 0.06 : 0.0;
  if (sit) {
    c.box(-0.2, 0, -0.18, 0.2, 0.42, 0.18, C('#4a3f36')); // the stool
    c.box(-0.2, hip - 0.12, -0.05, 0.2, hip, 0.42, tr); c.cyl(-0.11, 0, 0.37, 0.07, 0.075, hip - 0.1, 5, tr); c.cyl(0.11, 0, 0.37, 0.07, 0.075, hip - 0.1, 5, tr); // thighs, shins
  } else { c.cyl(-0.11, 0, 0, 0.07, 0.085, hip, 5, tr); c.cyl(0.11, 0, 0, 0.07, 0.085, hip, 5, tr); }
  c.cyl(0, hip - 0.04, lean, 0.21, 0.18, sh - hip + 0.06, 6, jk);                    // the jacket (rounded: a tapered prism)
  c.cyl(0, sh + 0.02, lean, 0.085, 0.07, 0.04, 6, sk); c.cyl(0, sh + 0.06, lean, 0.1, 0.095, 0.19 * s, 7, sk); // the neck, the head
  if (hat) { c.cyl(0, sh + 0.19 * s, lean, 0.108, 0.1, 0.075, 7, hat); c.box(-0.08, sh + 0.19 * s, 0.06 + lean, 0.08, sh + 0.21 * s, 0.2 + lean, hat); }
  const hand = [0.02, sh - 0.3, 0.36 + lean];
  c.rod([-0.2, sh - 0.06, lean], hand, 0.045, 0.04, 4, jk); c.rod([0.2, sh - 0.06, lean], hand, 0.045, 0.04, 4, jk);
  // the rod: 4–5 m, 35–50° up, out over the railing (and a little to one side); its line down to the water
  const L = r.range(4, 5.2), el = r.range(0.6, 0.87), sw = r.range(-0.35, 0.35), tip = [hand[0] + L * Math.cos(el) * sw, hand[1] + L * Math.sin(el), hand[2] + L * Math.cos(el) * Math.cos(sw)];
  const bt = [hand[0] - 0.08 * sw, hand[1] - 0.35, hand[2] - 0.45];
  c.noShadow = true; c.rod(bt, tip, 0.022, 0.009, 3, C('#2a2724')); c.rod(tip, [tip[0], -drop, tip[2] + 0.4], 0.004, 0.004, 3, C('#d8d8d0')); c.noShadow = false;
  if (r() < 0.45) c.cyl(0.45, 0, -0.05, 0.13, 0.15, 0.3, 8, r.pick(BUCKETS));
}
/** one of the bridge's control towers by its lifting span, as the concept and the real bridge have them (its own frame: −z to
 *  the road): a block of pale concrete panels 13 m along the road, 7.5 m deep and 10.5 m tall over the deck, a great round-headed
 *  arch in its face to the road, small windows in its ends, a hood curving up over the back of its roof; a flag on the roof.
 *  pier: standing beyond the deck's edge, on a pier of dressed stone that many metres down into the water */
export function galTower(G, M, pier = 0) {
  const c = G.color; c.setM(M);
  const L = 6.5, D = 7.5, H = 10.5;
  if (pier > 0) c.box(-L - 0.35, -pier, -0.2, L + 0.35, 0.02, D + 0.35, C('#a39d92'), null, { noBottom: true });
  c.box(-L, 0, 0, L, H, D, GAL_CONC, null, { noBottom: true });
  c.box(-L - 0.12, H - 0.45, -0.12, L + 0.12, H, D + 0.12, C('#d9d7cf'));       // the cornice
  // the arch in the face to the road: a dark round-headed opening (6 m high, 4.2 wide) in a frame a shade darker than the wall
  const R = 2.6, ya = 4.6, z = -0.012, N = 12, arc = (k, rr) => { const t = (k / N) * Math.PI; return [rr * Math.cos(t), ya + rr * Math.sin(t)]; };
  for (const [rr, col, zz] of [[R + 0.3, GAL_JOINT, z], [R, GAL_DARK, z - 0.01]]) {
    fz(c, -rr, rr, 0, ya, zz, col);
    for (let k = 0; k < N; k++) { const [x0, y0] = arc(k, rr), [x1, y1] = arc(k + 1, rr); c.quad([0, ya, zz], [x1, y1, zz], [x0, y0, zz], [x0, y0, zz], col); }
  }
  // the panels' joints (on the face, either side of the arch) and the ends' windows, a column of three
  for (const x of [-5.4, -4.2, -3.0, 3.0, 4.2, 5.4]) fz(c, x - 0.03, x + 0.03, 0.2, H - 0.5, -0.006, GAL_JOINT);
  for (const y of [3.0, 6.2]) { fz(c, -L + 0.1, -R - 0.35, y - 0.03, y + 0.03, -0.006, GAL_JOINT); fz(c, R + 0.35, L - 0.1, y - 0.03, y + 0.03, -0.006, GAL_JOINT); }
  for (const sx of [-1, 1]) for (const y of [2.4, 5.2, 8.0]) for (const zc of [2.2, 5.3]) {
    const x = sx * (L + 0.006), z0 = zc - 0.5, z1 = zc + 0.5;
    if (sx < 0) c.quad([x, y, z0], [x, y, z1], [x, y + 1.1, z1], [x, y + 1.1, z0], GAL_WIN); else c.quad([x, y, z1], [x, y, z0], [x, y + 1.1, z0], [x, y + 1.1, z1], GAL_WIN);
  }
  // the hood over the back of the roof: a quarter round rising 2.4 m from the middle of the roof to its back edge, its ends closed
  const K = 6, hz = t => D - 3.0 + 3.0 * Math.sin(t), hy = t => H + 2.4 * (1 - Math.cos(t)), HL = L - 0.4, HC = C('#dedcd5');
  for (let k = 0; k < K; k++) {
    const t0 = (k / K) * (Math.PI / 2), t1 = ((k + 1) / K) * (Math.PI / 2);
    c.quad([HL, hy(t0), hz(t0)], [-HL, hy(t0), hz(t0)], [-HL, hy(t1), hz(t1)], [HL, hy(t1), hz(t1)], HC);
    for (const sx of [-1, 1]) { const p0 = [sx * HL, H, D], p1 = [sx * HL, hy(t0), hz(t0)], p2 = [sx * HL, hy(t1), hz(t1)]; if (sx > 0) c.quad(p0, p1, p2, p2, HC); else c.quad(p0, p2, p1, p1, HC); }
  }
  c.quad([-HL, H, D], [HL, H, D], [HL, hy(Math.PI / 2), D], [-HL, hy(Math.PI / 2), D], HC); // (its back)
  flagPole(G, sub(M, -L + 1.2, H, 1.2), 4.2);
}
/** the lifting span's barrier beside a control tower (its own frame: −z to the road): an orange steel gate 5 m long, its
 *  frame braced with white diagonals, as the concept paints it */
export function galBarrier(G, M) {
  const c = G.color; c.setM(M);
  const OR = C('#e2742c'), WH = C('#f2f0ea'), L = 2.5;
  for (const x of [-L, 0, L]) c.box(x - 0.07, 0, -0.07, x + 0.07, 1.35, 0.07, OR);
  c.box(-L, 1.2, -0.06, L, 1.36, 0.06, OR); c.box(-L, 0.18, -0.05, L, 0.3, 0.05, OR);
  for (const x0 of [-L, 0]) { c.rod([x0 + 0.1, 0.3, 0], [x0 + L - 0.1, 1.2, 0], 0.04, 0.04, 4, WH); c.rod([x0 + 0.1, 1.2, 0], [x0 + L - 0.1, 0.3, 0], 0.04, 0.04, 4, WH); }
}

// ------------------------------------------------------------------ the Turkish town (W4)
// As its concept painting has it (ref/world/turkish_town.png, after a real street, Eskişehir's İnönü Caddesi): five- to
// seven-storey blocks of flats in pastel plaster over a row of shops, their balconies' iron railings hung with laundry, pots of
// plants, satellite dishes and air conditioners, a flag hung from a balcony now and then; the shops' painted bays (the world
// atlas's twBay…: painted.js loadTownAtlas), their signboards (twSg…) and striped awnings (twAwn…, twVal…); plane trees in
// square planters, tea tables with tulip glasses, a simit cart, a parked dolmuş, a cat on the pavement
/** the blocks' plaster, as the concept paints them: peach, salmon, a pale yellow, cream, white, a pale grey, a dusty pink, a
 *  light ochre, a pale apricot */
// (lighter and calmer than their painted colours: the sun and the grade's saturation turn them into the concept's lit pastels)
export const TOWN_TINTS = ['#f2c8b4', '#f4d2bd', '#f1e2b6', '#f4ead2', '#f5f3ee', '#e3e2de', '#efcfcf', '#efd8ad', '#f3dcc8'].map(C);
// (the shops' painted bays a little calmer than painted: lit by the scene and graded, the bakery's bread went a burning orange)
const TW_SHOP = [0.9, 0.88, 0.9];
const TW_STONE = C('#a9a59d'), TW_CORN = C('#efebe2'), TW_DARK = C('#3a3a3e'), TW_SOIL = C('#5a4433'), TW_KERB = C('#b7b4ad');
const TCLOTH = ['#d23c3c', '#2e5fa8', '#f4f4ef', '#3aa6a0', '#e98fb0', '#f0c84a', '#7a4ca0', '#f4f4ef', '#f2f2ee'].map(C);
/** a quad facing −z (towards the road) with an atlas cell and an explicit light code (the world atlas's cells aren't named as
 *  the procedural atlas's lit cells are: litOf can't tell) */
function wq(a, x0, x1, y0, y1, z, cell, col = W1, lit = 0) { a.litV = lit; a.quad([x1, y0, z], [x0, y0, z], [x0, y1, z], [x1, y1, z], col, uv(cell)); a.litV = 0; }
/** a plain quad on a +x / −x face (the colour material: x at x, z0…z1, y0…y1) */
const pxc = (c, x, z0, z1, y0, y1, col) => c.quad([x, y0, z1], [x, y0, z0], [x, y1, z0], [x, y1, z1], col);
const nxc = (c, x, z0, z1, y0, y1, col) => c.quad([x, y0, z0], [x, y0, z1], [x, y1, z1], [x, y1, z0], col);
/** a uv rect: the cell's columns px0…px1 (of its w px), whole height (mirrored when px0 > px1) */
const cols = (cl, px0, px1) => ({ u0: cl.u0 + ((cl.u1 - cl.u0) * px0) / cl.w, u1: cl.u0 + ((cl.u1 - cl.u0) * px1) / cl.w, v0: cl.v0, v1: cl.v1 });
/** a shop's signboard (x0…x1, y0…y1, its face at z, facing −z): its painted cell (textures.js townSign) in five strips, its two
 *  caps (the rule at its ends) and the word at their own shape, the plain margins between stretched to the board's length; the
 *  board's top, underside and ends in its own colour. Lit at dusk (the lettering glows: lit) */
function townSignboard(G, x0, x1, y0, y1, z, cell, board, lit) {
  const a = G.atlas, c = G.color, cl = uv(cell), h = y1 - y0, pc = TS_CAP * cl.h, pp = TS_PAD * cl.h;
  const cap = TS_CAP * h, wn = ((cl.w - 2 * (pc + pp)) / cl.h) * h, room = x1 - x0 - 2 * cap - 0.6 * TS_PAD * h, ww = Math.min(wn, room), xm = (x0 + x1) / 2;
  // (from the viewer's left, +x: the cap, the margin, the word, the margin, the cap)
  const X = [x1, x1 - cap, xm + ww / 2, xm - ww / 2, x0 + cap, x0], U = [[0, pc], [pc + 2, pc + pp - 2], [pc + pp, cl.w - pc - pp], [cl.w - pc - pp + 2, cl.w - pc - 2], [cl.w - pc, cl.w]];
  a.litV = lit; a.noShadow = true; // (in front of the fascia: it casts the board's shadow)
  for (let i = 0; i < 5; i++) { const q = cols(cl, U[i][0], U[i][1]); a.quad([X[i], y0, z], [X[i + 1], y0, z], [X[i + 1], y1, z], [X[i], y1, z], W1, q); }
  a.litV = 0; a.noShadow = false;
  const d = 0.14; // (its depth: the board stands off the fascia)
  c.quad([x0, y1, z], [x1, y1, z], [x1, y1, z + d], [x0, y1, z + d], mulC(board, 0.95)); // its top
  c.quad([x1, y0, z], [x0, y0, z], [x0, y0, z + d], [x1, y0, z + d], mulC(board, 0.8)); // its underside
  c.quad([x0, y0, z + d], [x0, y0, z], [x0, y1, z], [x0, y1, z + d], mulC(board, 0.88)); c.quad([x1, y0, z], [x1, y0, z + d], [x1, y1, z + d], [x1, y1, z], mulC(board, 0.88)); // its ends
}
/** a shop's awning over x0…x1: its canvas (twAwn k, 1 m a cell) sloping out and down from the fascia at y over the pavement,
 *  its scalloped valance (twVal k) along the front, its underside (the canvas seen through), its two end pieces */
function townAwning(G, x0, x1, y, k) {
  // (they cast their shade over the shop windows, whose interiors glow warm by day too (light code 6), as the concept's)
  townAwning0(G, x0, x1, y, k);
}
function townAwning0(G, x0, x1, y, k) {
  const a = G.atlas, c = G.color, D = 1.35, drop = 0.55, yl = y - drop, zf = -D, n = Math.max(1, Math.round(x1 - x0)), cw = (x1 - x0) / n, ca = uv('twAwn' + k), cv = uv('twVal' + k);
  const col = C(TOWN_AWNINGS[k][0]);
  for (let i = 0; i < n; i++) {
    const xa = x0 + i * cw, xb = xa + cw;
    a.quad([xb, yl, zf], [xa, yl, zf], [xa, y, -0.02], [xb, y, -0.02], W1, ca); // (its top, sloping to the front)
    a.quad([xa, yl, zf], [xb, yl, zf], [xb, y, -0.02], [xa, y, -0.02], [0.72, 0.72, 0.72], ca); // (its underside, seen from the road)
    a.noShadow = true; // (the valance's scalloped alpha: no shadow)
    a.quad([xb, yl - 0.3, zf - 0.005], [xa, yl - 0.3, zf - 0.005], [xa, yl, zf - 0.005], [xb, yl, zf - 0.005], W1, cv); // (the valance)
    a.quad([xa, yl - 0.3, zf], [xb, yl - 0.3, zf], [xb, yl, zf], [xa, yl, zf], [0.75, 0.75, 0.75], cv);
    a.noShadow = false;
  }
  for (const x of [x0, x1]) { // the end pieces (both faces)
    c.quad([x, yl, zf], [x, y, -0.02], [x, y, -0.02], [x, yl - 0.3, zf], mulC(col, 0.85));
    c.quad([x, yl - 0.3, zf], [x, y, -0.02], [x, y, -0.02], [x, yl, zf], mulC(col, 0.7));
  }
}
/** a balcony's iron railing panel from (xa, za) to (xb, zb) at height y (twRail k, alpha-tested; both faces: seen from the road
 *  and through the balcony) */
function townRailing(G, xa, za, xb, zb, y, k) {
  const a = G.atlas, cl = uv('twRail' + k), L = Math.hypot(xb - xa, zb - za), n = Math.max(1, Math.round(L / 2));
  for (let i = 0; i < n; i++) {
    const t0 = i / n, t1 = (i + 1) / n, p0 = [xa + (xb - xa) * t0, y, za + (zb - za) * t0], p1 = [xa + (xb - xa) * t1, y, za + (zb - za) * t1];
    const q0 = [p0[0], y + 1.05, p0[2]], q1 = [p1[0], y + 1.05, p1[2]];
    a.quad(p0, p1, q1, q0, W1, cl); a.quad(p1, p0, q0, q1, W1, { u0: cl.u1, u1: cl.u0, v0: cl.v0, v1: cl.v1 });
  }
}
/** a line of brightly coloured washing on a balcony (as the concept's): between xa and xb, the line at y, at z */
function townLaundry(c, xa, xb, y, z, r) {
  c.rod([xa, y, z], [xb, y, z], 0.012, 0.012, 3, PAL.metal);
  for (let x = xa + 0.1 + r() * 0.2; x < xb - 0.3;) {
    const w = 0.25 + r() * 0.35, h = 0.35 + r() * 0.45, col = r.pick(TCLOTH), zz = z + (r() - 0.5) * 0.05;
    c.quad([x + w, y - h, zz], [x, y - h, zz], [x, y - 0.02, zz], [x + w, y - 0.02, zz], col);
    c.quad([x, y - h, zz + 0.01], [x + w, y - h, zz + 0.01], [x + w, y - 0.02, zz + 0.01], [x, y - 0.02, zz + 0.01], mulC(col, 0.8));
    x += w + 0.05 + r() * 0.2;
  }
}
/** a satellite dish on a short arm, looking up and out (its back to the wall at z0): a shallow grey dish in eight facets */
function satDish(c, x, y, z0, R = 0.33) {
  const D = C('#dcdcd8'), Dd = C('#b9b9b4'), cx = x, cy = y + 0.1, cz = z0 - 0.22, ux = 0, uy = 0.5, uz = -0.87; // (its axis)
  // the dish's rim in its plane (axis u): two vectors across it
  const ax = [1, 0, 0], ay = [0, 0.87, 0.5];
  const P = k => { const t = (k / 8) * Math.PI * 2, ct = Math.cos(t) * R, st = Math.sin(t) * R; return [cx + ax[0] * ct + ay[0] * st, cy + ax[1] * ct + ay[1] * st, cz + ax[2] * ct + ay[2] * st]; };
  const back = [cx - ux * 0.08, cy - uy * 0.08, cz - uz * 0.08];
  for (let k = 0; k < 8; k++) { const p = P(k), q = P(k + 1); c.quad(back, q, p, p, D); c.quad(back, p, q, q, Dd); }
  c.rod([cx, cy, cz + 0.05], [x, y - 0.1, z0], 0.02, 0.02, 3, Dd);
  c.rod([cx, cy, cz], [cx + ux * 0.45, cy + uy * 0.45, cz + uz * 0.45], 0.012, 0.012, 3, Dd); // (the feed arm)
}
/** a block of flats over a row of shops (props.js building type 'townApt'), as the concept's. s: w, d, floors (in all, the
 *  shops' floor too: 5–7), tint (its plaster), shops ([{ k: its kind (textures.js TOWN_SHOPS), j: its sign, aw: its awning
 *  (−1 none), n: its bays }] from the −x end), door (the entrance's bay), bal ('full': a balcony across the front on every upper
 *  floor; 'alt': on every other bay; 'mid': the middle bays; 'none'), rail (0 dark iron, 1 white), flag (a flag hung from a
 *  balcony), near (which end looks back down the road: its end wall a shade lighter), painted (the town's paintings are in) */
function townApt(G, M, r, s) {
  const { w, d, floors, tint } = s, a = G.atlas, c = G.color; a.setM(M); c.setM(M); a.world = true;
  const G0 = 4.55, FH = 3.0, H = G0 + (floors - 1) * FH, x0 = -w / 2, nb = Math.max(2, Math.round(w / 3.3)), bw = w / nb, SB = 3.35; // (SB: the shop bays' top)
  const wall = mulC(tint, 1), dark = mulC(tint, 0.9);
  // ---- the ground floor: the shops' painted bays (warm-lit by day too: light code 6) and the entrance, the fascia over them,
  // the shops' signboards and awnings
  let bay = 0;
  const bayX = i => x0 + i * bw;
  for (const sh of s.shops) {
    if (bay === s.door) { wq(a, bayX(bay) + bw, bayX(bay), 0, SB, 0, 'twBay7', W1, 24 + Math.floor(r() * 120)); lampAt(G, M, bayX(bay) + bw / 2, 3.0, -0.6, 0.35); bay++; }
    const xa = bayX(bay), xb = bayX(bay + sh.n);
    // (their interiors warm by day too: light code 6, as the shopping street's)
    for (let i = 0; i < sh.n; i++) { wq(a, bayX(bay + i), bayX(bay + i + 1), 0, SB, 0, 'twBay' + sh.k, TW_SHOP, 6); lampAt(G, M, bayX(bay + i) + bw / 2, 1.9, -0.8, 0.7); }
    const S = TOWN_SHOPS[sh.k][sh.j];
    // (its signboard as large as the concept's: the fascia's height, ~1 m, along the shop's whole front)
    townSignboard(G, xa + 0.1, xb - 0.1, SB + 0.1, G0 - 0.12, -0.15, 'twSg' + sh.k + '_' + sh.j, C(S[1]), 24 + Math.floor(r() * 60));
    if (sh.aw >= 0) townAwning(G, xa + 0.08, xb - 0.08, SB + 0.02, sh.aw);
    if (sh.k === 5) { // the pharmacy's green cross, standing out from the wall at the board's end
      const xc = xb - 0.35, yc = SB + 0.5; c.box(xc - 0.03, yc + 0.3, -0.62, xc + 0.03, yc + 0.38, 0, PAL.metal);
      a.litV = 12; const q = uv('twCross'); a.quad([xc, yc, -0.95], [xc, yc, -0.35], [xc, yc + 0.6, -0.35], [xc, yc + 0.6, -0.95], W1, q); a.quad([xc + 0.01, yc, -0.35], [xc + 0.01, yc, -0.95], [xc + 0.01, yc + 0.6, -0.95], [xc + 0.01, yc + 0.6, -0.35], W1, q); a.litV = 0;
    }
    bay += sh.n;
  }
  for (; bay < nb; bay++) { if (bay === s.door) { wq(a, bayX(bay) + bw, bayX(bay), 0, SB, 0, 'twBay7', W1, 24 + Math.floor(r() * 120)); continue; } wq(a, bayX(bay + 1), bayX(bay), 0, SB, 0, 'twBay' + Math.floor(r() * 7), TW_SHOP, 6); }
  fz(c, x0, -x0, SB, G0, 0, dark); // the fascia (the walls in plain plaster: the colour material, its painterly grain, no texture: in
  // the shadow pass the props' plain depth, where the textured atlas's alpha test made the town's walls cost 9 ms a frame)
  c.box(x0, SB - 0.02, -0.06, -x0, SB + 0.04, 0.0, TW_STONE); // (a stone string course over the shops)
  // ---- the upper floors: plaster, a window in each bay (a balcony door where it has a balcony), the balconies' slabs, railings,
  // washing, pots, dishes, air conditioners
  const winCells = ['twWinA', 'twWinB', 'twWinC'], wk = winCells[Math.floor(r() * 3)], slab = mulC(tint, 1.02), under = mulC(tint, 0.78);
  const hasBal = (f, i) => s.bal === 'full' || (s.bal === 'alt' && (i + f) % 2 === 0) || (s.bal === 'mid' && i > 0 && i < nb - 1);
  let flags = s.flag ? (w > 11 ? 2 : 1) : 0; // (as many flags as the concept's: hung from the balconies, one or two a block)
  fz(c, x0, -x0, G0, H, 0, wall); // the upper floors' plaster, one quad (the windows over it; neither casts a shadow: the wall does)
  for (let f = 1; f < floors; f++) {
    const y0 = G0 + (f - 1) * FH;
    for (let i = 0; i < nb; i++) {
      const xa = bayX(i), xb = bayX(i + 1), xm = (xa + xb) / 2, bal = hasBal(f, i);
      // the window (or the balcony's door and window), at its own size (its cell's metres: textures.js / pack4.py); in front of the
      // wall, casting no shadow (the wall behind it does)
      a.noShadow = true;
      if (bal) { const dw = Math.min(2.2, bw - 0.3), dh = dw * 1.3; wq(a, xm - dw / 2, xm + dw / 2, y0 + 0.02, y0 + 0.02 + dh, -0.02, 'twWinD', W1, homeLit(a, xm + y0, f)); }
      else { const cell = r() < 0.75 ? wk : winCells[Math.floor(r() * 3)], ww = cell === 'twWinB' ? 1.6 : cell === 'twWinC' ? 1.25 : 1.45, wh = ww * (cell === 'twWinB' ? 1.1 : cell === 'twWinC' ? 1.24 : 1.18);
        wq(a, xm - ww / 2, xm + ww / 2, y0 + 0.75, y0 + 0.75 + wh, -0.02, cell, W1, homeLit(a, xm + y0, f)); }
      a.noShadow = false;
      if (!bal && r() < 0.12) acUnit(G, M, xm + (r() < 0.5 ? -1 : 1) * (bw / 2 - 0.55), y0 + 0.4, -0.3);
      a.setM(M); c.setM(M);
    }
    // the balconies: runs of neighbouring balcony bays share one slab and railing
    for (let i = 0; i < nb;) {
      if (!hasBal(f, i)) { i++; continue; }
      let j = i; while (j + 1 < nb && hasBal(f, j + 1)) j++;
      const xa = bayX(i) + 0.08, xb = bayX(j + 1) - 0.08, D = 1.5; // (deep, with a thick slab, as the concept's)
      // (casting no shadow: the high sun put every storey's wall under the slab above it in shade, where the concept's walls stand
      // in the sun with a narrow shade under each balcony (their undersides face down, in shade anyway))
      c.noShadow = true; c.box(xa, y0 - 0.34, -D, xb, y0 + 0.02, 0, slab, null, { ny: under }); c.noShadow = false;
      a.noShadow = true; // (the railings' alpha-tested bars cast no shadow either: a third of the shadow pass's cost)
      townRailing(G, xb, -D + 0.04, xa, -D + 0.04, y0 + 0.02, s.rail);
      townRailing(G, xa + 0.04, -D + 0.04, xa + 0.04, -0.02, y0 + 0.02, s.rail); townRailing(G, xb - 0.04, -0.02, xb - 0.04, -D + 0.04, y0 + 0.02, s.rail);
      a.noShadow = false;
      const q = r();
      if (q < 0.4) townLaundry(c, xa + 0.15, xb - 0.15, y0 + 2.05, -D * 0.55, r);
      if (r() < 0.55) for (let x = xa + 0.35 + r() * 0.4; x < xb - 0.3; x += 0.9 + r() * 1.6) if (r() < 0.6) pottedPlant(G, sub(M, 0, y0 + 0.02, 0), r, x, -D + 0.35);
      a.setM(M); c.setM(M);
      if (r() < 0.22) satDish(c, xb - 0.35, y0 + 1.2, -D + 0.06);
      if (flags > 0 && f >= 2 && r() < 0.55) { // the flag hung over the railing, as the concept's
        flags--; const xf = (xa + xb) / 2 + (r() - 0.5) * (xb - xa - 1.2), fw = 0.95, fh = 1.42, zf = -D - 0.03, cl = uv('twFlag');
        a.quad([xf + fw / 2, y0 + 1.07 - fh, zf], [xf - fw / 2, y0 + 1.07 - fh, zf], [xf - fw / 2, y0 + 1.07, zf], [xf + fw / 2, y0 + 1.07, zf], W1, cl);
        a.quad([xf - fw / 2, y0 + 1.07 - fh, zf + 0.01], [xf + fw / 2, y0 + 1.07 - fh, zf + 0.01], [xf + fw / 2, y0 + 1.07, zf + 0.01], [xf - fw / 2, y0 + 1.07, zf + 0.01], W1, { u0: cl.u1, u1: cl.u0, v0: cl.v0, v1: cl.v1 });
      }
      i = j + 1;
    }
  }
  // ---- the cornice, the roof, the ends and the back
  c.box(x0 - 0.04, H, -0.32, -x0 + 0.04, H + 0.42, 0.2, TW_CORN, null, { ny: mulC(tint, 0.85) });
  c.quad([-w / 2, H + 0.42, d], [w / 2, H + 0.42, d], [w / 2, H + 0.42, 0.2], [-w / 2, H + 0.42, 0.2], PAL.roof);
  if (r() < 0.5) { // a solar water heater on the roof (its panel and its tank), as on Turkish roofs
    const xs = (r() - 0.5) * w * 0.5, zs = d * 0.4; c.box(xs - 1.0, H + 0.42, zs, xs + 1.0, H + 1.5, zs + 0.08, C('#2e3d5c'));
    c.cyl(xs, H + 1.55, zs + 0.5, 0.28, 0.28, 0.2, 8, C('#e8e8e4')); c.box(xs - 1.0, H + 1.45, zs + 0.3, xs + 1.0, H + 1.85, zs + 0.7, C('#e6e6e2'));
  }
  // the ends: the one that looks back down the road (s.near: seen over a lower neighbour, and from the bridge's landing and down
  // the side streets) with a window in every ~3.3 m of every upper floor, the other plain
  const endC = mulC(tint, 0.9), ns = Math.max(2, Math.round((d - 0.5) / 3.3)), sd = (d - 0.5) / ns, ek = winCells[Math.floor(r() * 3)];
  for (const sx of [-1, 1]) {
    const xe = (sx * w) / 2, q = sx > 0 ? pxq : nxq, qc = sx > 0 ? pxc : nxc;
    if (sx !== s.near) { qc(c, xe, 0, d, 0, H, endC); continue; }
    const xo = xe + sx * 0.02;
    qc(c, xe, 0, d, 0, G0, mulC(tint, 0.86)); qc(c, xe, 0, d, G0, H, mulC(tint, 0.96));
    a.noShadow = true;
    for (let f = 1; f < floors; f++) {
      const y0 = G0 + (f - 1) * FH;
      for (let j = 0; j < ns; j++) {
        const zm = 0.25 + j * sd + sd / 2, ww = 1.25, wh = ww * 1.18;
        a.litV = homeLit(a, zm + y0 * sx, f + 7); q(a, xo, zm - ww / 2, zm + ww / 2, y0 + 0.8, y0 + 0.8 + wh, ek); a.litV = 0;
      }
    }
    a.noShadow = false;
  }
  c.quad([-w / 2, 0, d], [w / 2, 0, d], [w / 2, H, d], [-w / 2, H, d], mulC(tint, 0.8));
}
/** a plane tree in its square planter on the pavement (its kerb, its soil and grass), the tree facing the road (−z) */
export function townTree(G, M, r, s = 1) {
  const c = G.color; c.setM(M);
  c.box(-0.75, 0, -0.75, 0.75, 0.13, -0.6, TW_KERB); c.box(-0.75, 0, 0.6, 0.75, 0.13, 0.75, TW_KERB);
  c.box(-0.75, 0, -0.6, -0.6, 0.13, 0.6, TW_KERB); c.box(0.6, 0, -0.6, 0.75, 0.13, 0.6, TW_KERB);
  c.quad([-0.6, 0.08, 0.6], [0.6, 0.08, 0.6], [0.6, 0.08, -0.6], [-0.6, 0.08, -0.6], TW_SOIL);
  G.leaf.setM(M); for (let k = 0; k < 3; k++) cards(G, [(r() - 0.5) * 0.8, 0.1, (r() - 0.5) * 0.8], (r() - 0.5) * 0.8, 0.22, (r() - 0.5) * 0.8, 0.28, 'leafB', 3, r, [1, 1, 1], [0.6, 0.66, 0.7], [0.08, 0.4]);
  tree(G, M, 'plane', r, s);
}
const TEA = C('#8a2a12'), GLASS = C('#e8e4dc'), WOOD_T = C('#b98a5c'), WOOD_TD = C('#8f6440');
/** a tea table on the pavement (çay masası): a small square wooden table, two to four wooden chairs round it, tulip glasses of
 *  tea on their saucers, now and then a sugar bowl */
export function teaTable(G, M, r) {
  const c = G.color; c.setM(M);
  c.box(-0.33, 0.66, -0.33, 0.33, 0.7, 0.33, WOOD_T);
  for (const [x, z] of [[-0.29, -0.29], [0.29, -0.29], [-0.29, 0.29], [0.29, 0.29]]) c.box(x - 0.025, 0, z - 0.025, x + 0.025, 0.66, z + 0.025, WOOD_TD);
  const n = 2 + Math.floor(r() * 3), a0 = r() * 1.6;
  for (let i = 0; i < n; i++) { // the chairs: a seat, four legs, a back
    const t = a0 + (i / n) * Math.PI * 2, cx = Math.cos(t) * 0.62, cz = Math.sin(t) * 0.62, m = sub(M, cx, 0, cz, -t + Math.PI / 2);
    c.setM(m); c.box(-0.21, 0.43, -0.21, 0.21, 0.47, 0.21, WOOD_T);
    for (const [x, z] of [[-0.18, -0.18], [0.18, -0.18], [-0.18, 0.18], [0.18, 0.18]]) c.box(x - 0.02, 0, z - 0.02, x + 0.02, 0.43, z + 0.02, WOOD_TD);
    c.box(-0.21, 0.47, 0.17, 0.21, 0.9, 0.21, WOOD_TD); c.box(-0.19, 0.72, 0.16, 0.19, 0.84, 0.17, WOOD_T);
  }
  c.setM(M);
  for (let i = 0, ng = 1 + Math.floor(r() * 3); i < ng; i++) { // tulip glasses of tea on red-rimmed saucers
    const x = (r() - 0.5) * 0.4, z = (r() - 0.5) * 0.4;
    c.cyl(x, 0.7, z, 0.055, 0.055, 0.008, 8, PAL.red, true); c.cyl(x, 0.708, z, 0.022, 0.016, 0.05, 6, TEA, false); c.cyl(x, 0.758, z, 0.016, 0.025, 0.045, 6, TEA, true);
  }
  if (r() < 0.4) c.cyl(0.12, 0.7, -0.1, 0.05, 0.045, 0.07, 8, GLASS);
}
/** a simit cart (simitçi): a red barrow on two wheels, its glass case stacked with simit (twSimit), a red canopy on four posts,
 *  its handles towards the road. Local x along the road */
export function simitCart(G, M, r) {
  const c = G.color, a = G.atlas, RED = C('#cf3328'), REDD = C('#a82820'); c.setM(M); a.setM(M); a.world = true;
  c.box(-0.65, 0.42, -0.32, 0.65, 0.92, 0.32, RED, null, { py: C('#e8e2d6') });
  c.box(-0.6, 0.3, -0.28, 0.6, 0.42, 0.28, REDD);
  for (const z of [-0.36, 0.36]) { c.rod([0.25, 0.3, z], [0.25, 0.3, z + (z > 0 ? 0.06 : -0.06)], 0.3, 0.3, 12, C('#2b2b30')); c.rod([0.25, 0.3, z - 0.002], [0.25, 0.3, z + (z > 0 ? 0.062 : -0.062)], 0.12, 0.12, 8, C('#c9c9c4')); }
  c.box(-0.62, 0, -0.04, -0.56, 0.42, 0.04, C('#2b2b30')); // (its stand)
  const cl = uv('twSimit'), ct = { u0: cl.u0, u1: cl.u1, v0: cl.v0, v1: cl.v1 }, y0 = 0.92, y1 = 1.38;
  a.litV = 6;
  a.quad([0.55, y0, -0.27], [-0.55, y0, -0.27], [-0.55, y1, -0.27], [0.55, y1, -0.27], W1, ct); a.quad([-0.55, y0, 0.27], [0.55, y0, 0.27], [0.55, y1, 0.27], [-0.55, y1, 0.27], W1, ct);
  a.quad([-0.55, y0, -0.27], [-0.55, y0, 0.27], [-0.55, y1, 0.27], [-0.55, y1, -0.27], W1, ct); a.quad([0.55, y0, 0.27], [0.55, y0, -0.27], [0.55, y1, -0.27], [0.55, y1, 0.27], W1, ct);
  a.litV = 0;
  c.box(-0.58, y1, -0.3, 0.58, y1 + 0.05, 0.3, C('#f0ece4'));
  for (const [x, z] of [[-0.6, -0.3], [0.6, -0.3], [-0.6, 0.3], [0.6, 0.3]]) c.box(x - 0.015, 0.92, z - 0.015, x + 0.015, 2.0, z + 0.015, C('#d8d8d2'));
  c.box(-0.78, 2.0, -0.45, 0.78, 2.07, 0.45, RED, null, { ny: REDD }); c.box(-0.78, 1.9, -0.46, 0.78, 2.0, -0.44, RED); c.box(-0.78, 1.9, 0.44, 0.78, 2.0, 0.46, RED);
  for (const z of [-0.22, 0.22]) c.rod([0.65, 0.85, z], [1.15, 0.9, z], 0.02, 0.02, 4, C('#2b2b30'));
}
/** a ginger cat sitting on the pavement (the world atlas's painted card, twCat), its back to the drive: its card faces −x (a
 *  frame along the road: back towards the camera); mirror: it looks the other way (towards the road from either pavement) */
export function townCat(G, M, mirror = false) {
  if (!A.has('twCat')) return; // (its painting failed: no cat)
  const a = G.atlas; a.setM(M); a.world = true;
  const cl = uv('twCat'), h = 0.46, w = (h * cl.w) / cl.h, q = mirror ? { u0: cl.u1, u1: cl.u0, v0: cl.v0, v1: cl.v1 } : cl;
  a.quad([-0.02, 0, -w / 2], [-0.02, 0, w / 2], [-0.02, h, w / 2], [-0.02, h, -w / 2], W1, q);
}
/** a yellow dolmuş (a shared minibus, Ford Transit-like), parked: local x its length (its nose at +x), the road side −z */
export function dolmus(G, M) {
  const c = G.color, Y = C('#f0c419'), Yd = C('#d8a812'), GL = C('#2a3036'), BL = C('#1d1f22');
  c.setM(M);
  c.box(-2.6, 0.38, -0.98, 2.15, 1.2, 0.98, Y, null, { ny: BL }); // the body
  c.box(-2.6, 1.2, -0.96, 1.6, 1.95, 0.96, GL); // the windows' band
  for (const x of [-2.6, -1.55, -0.45, 0.6, 1.55]) c.box(x - 0.04, 1.2, -0.97, x + 0.04, 1.95, 0.97, Y); // (its pillars)
  c.box(-2.6, 1.95, -0.98, 1.65, 2.32, 0.98, Y); // the roof
  c.quad([2.15, 1.2, 0.9], [2.15, 1.2, -0.9], [1.65, 1.95, -0.9], [1.65, 1.95, 0.9], GL); // the windscreen, sloping back to the roof
  c.box(2.15, 0.38, -0.98, 2.62, 1.0, 0.98, Y); c.box(2.62, 0.45, -0.85, 2.66, 0.9, 0.85, BL); // the bonnet, the grille
  c.box(-2.64, 0.4, -0.98, -2.6, 0.62, 0.98, BL); // (the rear bumper)
  for (const z of [-0.8, 0.8]) c.box(-2.63, 0.75, z - 0.14, -2.6, 1.05, z + 0.14, C('#d0282a')); // the tail lamps
  c.box(-2.63, 0.62, -0.26, -2.61, 0.74, 0.26, C('#f4f4ef')); // the plate
  for (const [x, z] of [[-1.7, -0.92], [-1.7, 0.92], [1.6, -0.92], [1.6, 0.92]]) c.rod([x, 0.36, z], [x, 0.36, z + (z > 0 ? 0.1 : -0.1)], 0.36, 0.36, 10, BL);
  c.box(-0.5, 2.32, -0.25, 0.5, 2.55, 0.25, Yd); // (its roof sign)
}
/** a dolmuş stop's sign: a blue plate on a post (DOLMUŞ DURAĞI) */
export function durakSign(G, M) {
  G.color.setM(M); G.color.cyl(0, 0, 0, 0.04, 0.04, 2.5, 6, PAL.metal);
  G.atlas.setM(M); G.atlas.world = true; nxq(G.atlas, -0.05, -0.32, 0.32, 1.95, 2.55, 'twDurak');
}
/** a block of flats in the town's second row (W4), behind the street's front row: a plain box of 6–8 storeys, its face to the
 *  road and the end that looks back down the road in plaster with a window in every ~3.3 m of every floor (lit one by one at
 *  dusk), the far end and the back plain, a cornice and a flat roof. Seen over the front row's lower blocks, down the gaps and
 *  from the Galata Bridge's landing (~40 quads a floor: no balconies, no shops). s: w, d, floors, tint, near */
export function townBack(G, M, r, s) {
  const { w, d, floors, tint } = s, a = G.atlas, c = G.color; a.setM(M); c.setM(M); a.world = true;
  const FH = 3.0, H = floors * FH, nb = Math.max(2, Math.round(w / 3.3)), bw = w / nb, x0 = -w / 2, cell = ['twWinA', 'twWinB', 'twWinC'][Math.floor(r() * 3)];
  fz(c, x0, -x0, 0, H, 0, tint); // (its plaster: the colour material, as the front row's)
  a.noShadow = true;
  for (let f = 1; f < floors; f++) for (let i = 0; i < nb; i++) { const xm = x0 + i * bw + bw / 2, y0 = f * FH; wq(a, xm - 0.68, xm + 0.68, y0 + 0.8, y0 + 0.8 + 1.6, -0.02, cell, W1, homeLit(a, xm + y0, f + 3)); }
  const ns = Math.max(2, Math.round(d / 3.3)), sd = d / ns, endC = mulC(tint, 0.9);
  for (const sx of [-1, 1]) {
    const xe = (sx * w) / 2, q = sx > 0 ? pxq : nxq, qc = sx > 0 ? pxc : nxc;
    if (sx !== s.near) { qc(c, xe, 0, d, 0, H, endC); continue; }
    qc(c, xe, 0, d, 0, H, mulC(tint, 0.96));
    for (let f = 1; f < floors; f++) for (let j = 0; j < ns; j++) {
      const zm = j * sd + sd / 2, y0 = f * FH; a.litV = homeLit(a, zm + y0 * sx, f + 11); q(a, xe + sx * 0.02, zm - 0.62, zm + 0.62, y0 + 0.8, y0 + 0.8 + 1.46, cell); a.litV = 0;
    }
  }
  a.noShadow = false;
  c.quad([-w / 2, 0, d], [w / 2, 0, d], [w / 2, H, d], [-w / 2, H, d], mulC(tint, 0.8));
  c.box(x0 - 0.04, H, -0.3, -x0 + 0.04, H + 0.4, 0.2, TW_CORN, null, { ny: mulC(tint, 0.85) });
  c.quad([-w / 2, H + 0.4, d], [w / 2, H + 0.4, d], [w / 2, H + 0.4, 0.2], [-w / 2, H + 0.4, 0.2], PAL.roof);
  if (r() < 0.45) { const xs = (r() - 0.5) * w * 0.5, zs = d * 0.4; c.box(xs - 1.0, H + 0.4, zs, xs + 1.0, H + 1.5, zs + 0.08, C('#2e3d5c')); c.box(xs - 1.0, H + 1.45, zs + 0.3, xs + 1.0, H + 1.85, zs + 0.7, C('#e6e6e2')); }
}

// ------------------------------------------------------------------ Cappadocia (W5)
/** sides round a fairy chimney, near (lod 0) … far (2): more on desktops (a near one stands a fifth of the frame tall), fewer on
 *  phones */
const tuffSides = lod => (LEAF_D > 0.7 ? [18, 13, 9] : [12, 10, 8])[lod || 0];
// fairy chimneys' profiles: [height / H, radius / R] from under the ground (its skirt sunk into it) up to the tip: a bell with
// rounded shoulders and a pointed head (as the concept's near one), a straighter cone, and a squatter one with a rounder head
const CONE_PROFS = [
  [[-0.05, 1.16], [0, 1.12], [0.05, 1.07], [0.12, 1.02], [0.22, 0.95], [0.33, 0.85], [0.44, 0.73], [0.55, 0.6], [0.65, 0.48], [0.74, 0.37], [0.82, 0.27], [0.89, 0.18], [0.94, 0.11], [0.975, 0.06], [0.993, 0.03], [1, 0]],
  [[-0.05, 1.2], [0, 1.15], [0.04, 1.04], [0.1, 0.94], [0.2, 0.84], [0.32, 0.72], [0.45, 0.6], [0.58, 0.48], [0.7, 0.37], [0.8, 0.27], [0.88, 0.19], [0.94, 0.12], [0.975, 0.065], [0.993, 0.03], [1, 0]],
  [[-0.05, 1.18], [0, 1.14], [0.06, 1.08], [0.14, 1.0], [0.26, 0.9], [0.4, 0.78], [0.53, 0.66], [0.65, 0.54], [0.75, 0.43], [0.84, 0.32], [0.91, 0.22], [0.955, 0.14], [0.982, 0.07], [0.996, 0.03], [1, 0]],
];
// …and a pillar under a dark basalt cap (as Paşabağ's, W6; a few here): the body narrowing to a neck, the cap flaring out over it
const CAP_PROF = [[-0.05, 1.3], [0, 1.24], [0.05, 1.05], [0.14, 0.88], [0.3, 0.74], [0.46, 0.66], [0.6, 0.6], [0.7, 0.56], [0.76, 0.55], [0.775, 0.62], [0.79, 0.9], [0.82, 0.94], [0.88, 0.8], [0.93, 0.56], [0.97, 0.3], [0.99, 0.12], [1, 0]];
const CAP_T = 0.77; // (where the cap begins on CAP_PROF)
/** the profile's radius (÷ R) at height t (÷ H) */
const profAt = (pr, t) => { for (let i = 1; i < pr.length; i++) if (t <= pr[i][0]) { const [t0, r0] = pr[i - 1], [t1, r1] = pr[i]; return r0 + ((r1 - r0) * (t - t0)) / (t1 - t0); } return 0; };
/** A fairy chimney (peri bacası) of soft tuff, as the concept paints them along its road (ref/world/cappadocia_uchisar.png): a lathe
 *  of rings up a gently leaning axis, each ring's radius wobbling round it (lobes and runnels that drift a little as they rise),
 *  from a flared skirt sunk into the ground up a cone to a rounded tip; or (sp.cap) a pillar under a dark basalt cap. Written into
 *  G.tuff (an indexed GB drawn in materials.js tuffMaterial: uv x the angle round it, y metres up; its colour a key: r the stone
 *  (0 tuff, 1 the cap), g the light (its lobes' hollows darker), b how far up it (0 at the foot … 1 at the tip)). Normals from
 *  the grid's neighbours. Cave openings cut into the side that faces the road and the oncoming car (sp.caves: doors at the foot,
 *  windows higher, some lit at dusk: the world atlas's cells, casting no shadow). sp: h, r, v (its profile), cap, side (u's sign),
 *  caves. M: from matAt with faceRoad (−z towards the road) */
export function fairyChimney(G, M, r, sp) {
  const k = G.tuff; if (!k) return;
  k.setM(M);
  const H = sp.h, R = sp.r, pr = sp.cap ? CAP_PROF : CONE_PROFS[sp.v % CONE_PROFS.length], n = tuffSides(sp.lod), w = n + 1;
  const lx = r.range(-0.05, 0.05) * H, lz = r.range(-0.05, 0.05) * H; // (the axis leans a little: x(t) = lx·t²)
  const A2 = r.range(0.03, 0.08), A3 = r.range(0.02, 0.06), A5 = r.range(0.015, 0.035), P2 = r() * 6.28, P3 = r() * 6.28, P5 = r() * 6.28, TW = r.range(-0.8, 0.8);
  const wob = (th, t) => 1 + A2 * Math.sin(2 * th + P2 + TW * t) + A3 * Math.sin(3 * th + P3 - TW * t) + A5 * Math.sin(5 * th + P5 + 2 * TW * t);
  const K = pr.length, V = new Float32Array(K * w * 3), WB = new Float32Array(K * w);
  for (let i = 0; i < K; i++) {
    const t = pr[i][0], y = t * H, rr = pr[i][1] * R, ax = lx * t * Math.abs(t), az = lz * t * Math.abs(t);
    for (let j = 0; j <= n; j++) {
      const th = ((j % n) / n) * Math.PI * 2, wv = wob(th, t), o = (i * w + j) * 3;
      V[o] = ax + Math.sin(th) * rr * wv; V[o + 1] = y; V[o + 2] = az + Math.cos(th) * rr * wv; WB[i * w + j] = wv;
    }
  }
  const base = k.n, P = (i, j) => (Math.min(K - 1, Math.max(0, i)) * w + ((j + n) % n)) * 3;
  for (let i = 0; i < K; i++) for (let j = 0; j <= n; j++) {
    const o = (i * w + j) * 3, a = P(i, j - 1), b = P(i, j + 1), c = P(i - 1, j), d = P(i + 1, j);
    const tx = V[b] - V[a], ty = V[b + 1] - V[a + 1], tz = V[b + 2] - V[a + 2], ux = V[d] - V[c], uy = V[d + 1] - V[c + 1], uz = V[d + 2] - V[c + 2];
    let nx = ty * uz - tz * uy, ny = tz * ux - tx * uz, nz = tx * uy - ty * ux; const l = Math.hypot(nx, ny, nz);
    if (l < 1e-6) { nx = 0; ny = 1; nz = 0; } // (the tip)
    const t = pr[i][0], cap = sp.cap && t >= CAP_T ? 1 : 0, g = Math.min(1, Math.max(0.74, 0.86 + 1.8 * (WB[i * w + j] - 1)));
    k.vtx(V[o], V[o + 1], V[o + 2], nx, ny, nz, ((j % n === 0 && j > 0) ? n : j % n) / n * Math.PI * 2, V[o + 1], [cap, g, Math.max(0, t)]);
  }
  const nt = (K - 1) * n * 6; if (k.ni + nt > k.icap) k.growI(k.ni + nt);
  for (let i = 0; i < K - 1; i++) for (let j = 0; j < n; j++) { // (wound outward: tube()'s order, θ running from +z towards +x)
    const a = base + i * w + j, b = a + 1, cc = a + w, dd = cc + 1, o = k.ni;
    k.I[o] = a; k.I[o + 1] = b; k.I[o + 2] = dd; k.I[o + 3] = a; k.I[o + 4] = dd; k.I[o + 5] = cc; k.ni += 6;
  }
  // the cave openings: on the side towards the road (−z) and the oncoming car (−x on the right of the road, +x on the left: its
  // frame turned round there), each a flat quad 6 cm out from the surface, along it and up its slope
  if (!sp.caves) return;
  const at = G.cap; at.setM(M);
  const th0 = sp.side > 0 ? 1.25 * Math.PI : 0.75 * Math.PI;
  for (let q = 0; q < sp.caves; q++) {
    const door = q === 0 && r() < 0.7, t = door ? r.range(0.0, 0.03) : r.range(0.16, sp.cap ? 0.55 : 0.5), th = th0 + r.range(-0.55, 0.55);
    const ww = door ? r.range(0.8, 1.05) : r.range(0.42, 0.6), hh = door ? ww * 1.75 : ww * 1.45, yc = t * H;
    const rr = profAt(pr, t) * R * wob(th, t), rr2 = profAt(pr, Math.min(1, t + 0.05)) * R * wob(th, t + 0.05), slope = (rr - rr2) / (0.05 * H);
    const ax = lx * t * t, az = lz * t * t, sx = Math.sin(th), cz = Math.cos(th);
    let nx = sx, ny = slope, nz = cz; const l = Math.hypot(nx, ny, nz); nx /= l; ny /= l; nz /= l;
    const Tx = cz, Tz = -sx, ux = ny * Tz, uy = nz * Tx - nx * Tz, uz = -ny * Tx; // (U = n × T: up its slope)
    const cx = ax + sx * rr + nx * 0.06, cy = yc + ny * 0.06 + (door ? 0.05 : 0), czz = az + cz * rr + nz * 0.06, hw = ww / 2;
    const p0 = [cx - Tx * hw, cy, czz - Tz * hw], p1 = [cx + Tx * hw, cy, czz + Tz * hw];
    const p2 = [p1[0] + ux * hh, p1[1] + uy * hh, p1[2] + uz * hh], p3 = [p0[0] + ux * hh, p0[1] + uy * hh, p0[2] + uz * hh];
    const lit = !door && r() < 0.45, cell = door ? 'uchDoor' + Math.floor(r() * 3) : 'uchWin' + Math.floor(r() * 3) + (lit ? 'L' : '');
    at.litV = lit ? homeLit(at, th * 3.1 + q, t * 17 + H) : 0;
    at.quad(p0, p1, p2, p3, W1, uv(cell)); at.litV = 0;
  }
}
/** the bare trees of the steppe (W5), as the concept paints them along its road: a short dark trunk forking low into three or four
 *  limbs that spread wide and up, their branches dividing into a broad dome of fine twigs (the foliage atlas's bare crown, in
 *  clumps at the branches' ends and over the top), not a leaf on them. Smooth bark (G.bark: dark grey-brown, between the
 *  cherries' and the broadleaf trees' tones) */
const BARK_BARE = [0.6, 0.95, 1], BARK_BARE_IN = [0.6, 0.85, 1], TWIG_C = [1, 1, 1], TWIG_D = [0.74, 0.72, 0.76];
/** n cards of the bare crown's twigs (Cappadocia's atlas's uchTwig cells: textures.js) round (cx, cy, cz), R across, their normals
 *  out of the crown's centre `cen` (it shades as one soft dome), lighter towards its top (yr); into G.twig (the tree templates':
 *  stamped into the chunk's Cappadocia atlas mesh, G.cap, casting no shadow) */
function twigCards(G, cen, cx, cy, cz, R, n, r, yr) {
  const g = G.twig; if (!g) return;
  for (let i = 0; i < n; i++) {
    const uvr = uv('uchTwig' + Math.floor(r() * 2)), a = r() * Math.PI, ca = Math.cos(a), sa = Math.sin(a), h = (R * (0.9 + r() * 0.35)) / 2;
    const ox = cx + (r() - 0.5) * R * 0.5, oy = cy + (r() - 0.5) * R * 0.3, oz = cz + (r() - 0.5) * R * 0.5, tl = (r() - 0.5) * 0.5;
    const P = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([u, v]) => [ox + ca * u * h + tl * v * h * sa, oy + v * h * 0.8, oz + sa * u * h - tl * v * h * ca]);
    const N = P.map(p => { const x = p[0] - cen[0], y = p[1] - cen[1] + 0.4, z = p[2] - cen[2], l = Math.hypot(x, y, z) || 1; return [x / l, y / l, z / l]; });
    const Cc = P.map(p => mixC(TWIG_D, TWIG_C, Math.max(0, Math.min(1, (p[1] - yr[0]) / (yr[1] - yr[0])))));
    g.card(P, N, uvr, Cc);
  }
}
export function treeBare(G, M, r, s = 1) {
  const k = G.bark; k.setM(M); if (G.twig) G.twig.setM(M);
  const bh = r.range(1.3, 2.1) * s, r0 = r.range(0.13, 0.19) * s, top = [r.range(-0.2, 0.2) * s, bh, r.range(-0.2, 0.2) * s];
  const q = rng(Math.floor(bh * 7919 + r0 * 104729) + 53), [nT, nL, nB, , nS] = barkSides();
  trunkTube(k, top, r0, r0 * 0.78, [q.range(-0.08, 0.08) * s, q.range(-0.08, 0.08) * s], nT, BARK_BARE);
  const W = r.range(2.6, 3.5) * s, Hc = r.range(4.8, 6.4) * s, cen = [top[0], (bh + Hc) * 0.62, top[2]], yr = [bh, Hc];
  const nl = 3 + (r() < 0.55 ? 1 : 0), a0 = r() * 6.283;
  for (let i = 0; i < nl; i++) {
    const a = a0 + (i / nl) * 6.283 + r.range(-0.4, 0.4), ca = Math.cos(a), sa = Math.sin(a), out = r.range(0.42, 0.62);
    const tip = [top[0] + ca * W * out, bh + (Hc - bh) * r.range(0.42, 0.62), top[2] + sa * W * out];
    const b0 = [top[0] + ca * r0 * 0.3, bh - r0 * 0.45, top[2] + sa * r0 * 0.3];
    const mid = [top[0] + (tip[0] - top[0]) * 0.42, bh + (tip[1] - bh) * 0.55, top[2] + (tip[2] - top[2]) * 0.42];
    const T = steps(nS), P = curve(b0, mid, tip, T);
    k.tube(P, taper(T, r0 * 0.64, r0 * 0.26), nL, BARK_BARE, SEAM_UP);
    for (let j = 0, nb = 2 + (r() < 0.45 ? 1 : 0); j < nb; j++) {
      const p = P[Math.max(1, nS - 1 - j)], b = (j - (nb - 1) / 2) * r.range(0.55, 0.95), L = r.range(1.0, 1.7) * s;
      const e = [p[0] + Math.cos(a + b) * L * 0.85, p[1] + L * r.range(0.4, 0.75), p[2] + Math.sin(a + b) * L * 0.85], T2 = steps(3);
      k.tube(curve(p, [(p[0] + e[0]) / 2, (p[1] + e[1]) / 2 + 0.12 * L, (p[2] + e[2]) / 2], e, T2), taper(T2, r0 * 0.24, 0.02 * s), nB, BARK_BARE_IN, SEAM_UP);
      if (j < 2) twigCards(G, cen, e[0], e[1] + 0.2 * s, e[2], r.range(1.5, 2.0) * s, 1, r, yr);
    }
  }
  twigCards(G, cen, top[0], Hc * 0.84, top[2], W * 1.1, 1, r, yr);
}
/** a dry shrub of the steppe (W5): three crossed cards of the bare crowns' twigs (Cappadocia's atlas's uchTwig cells, G.cap), low
 *  and wide, grey-mauve as the concept's, shaded like the ground, casting no shadow */
export function dryBush(G, M, r, s = 1) {
  const at = G.cap, uvr = uv('uchTwig' + Math.floor(r() * 2)), h = (0.8 + r() * 0.4) * s, w = h * 1.5, a0 = r() * Math.PI, UP = [0, 1, 0], N = [UP, UP, UP, UP], lo = [0.62, 0.6, 0.64], hi = [1, 1, 1];
  at.setM(M);
  for (let i = 0; i < 3; i++) {
    const a = a0 + (i * Math.PI) / 3, cx = (Math.cos(a) * w) / 2, cz = (Math.sin(a) * w) / 2;
    at.card([[-cx, -0.08, -cz], [cx, -0.08, cz], [cx, h, cz], [-cx, h, -cz]], N, uvr, [lo, lo, hi, hi]);
  }
}
/** a road sign on a post whose panel is a cell of Cappadocia's atlas (W5: trSign's, G.cap), facing the drive (local −x) */
export function capSign(G, M, cell, h = 2.4, w = 0.7, hgt = 0.7) {
  G.color.setM(M); G.color.cyl(0, 0, 0, 0.04, 0.04, h + hgt / 2, 6, PAL.metal);
  G.cap.setM(M); nxq(G.cap, -0.05, -w / 2, w / 2, h - hgt / 2, h + hgt / 2, cell);
}
/** a clump of the steppe's dry golden grass (W5): two crossed cards of a cell of Cappadocia's atlas (textures.js uchGrass, G.cap),
 *  twice as wide as tall, shaded like the ground, casting no shadow (an alpha-tested caster in the shadow pass costs more than it
 *  shows). Written straight into chunk space (x, y, z), turned by a */
const DG_LO = [0.66, 0.62, 0.6], DG_HI = [1, 1, 1], DG_N = [[0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0]];
export function dryGrass(G, x, y, z, a, r, s = 1) {
  const at = G.cap, c = uv('uchGrass' + Math.floor(r() * 3)), h = (0.4 + r() * 0.3) * s, w = h * 2.1;
  for (const b of [a, a + Math.PI / 2]) {
    const cx = (Math.cos(b) * w) / 2, cz = (Math.sin(b) * w) / 2;
    at.card([[x - cx, y - 0.05, z - cz], [x + cx, y - 0.05, z + cz], [x + cx, y + h, z + cz], [x - cx, y + h, z - cz]], DG_N, c, [DG_LO, DG_LO, DG_HI, DG_HI]);
  }
}
