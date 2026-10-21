// Street furniture, trees and buildings. Every builder writes into the chunk's GBs (G.atlas, G.color, G.foliage,
// G.lamp, G.pool, G.wire) using the matrix M that places the prop. Prop-local convention: origin at the base,
// x runs along the road, the front faces −Z (towards the road), depth goes to +Z.
import * as THREE from 'three';
import { C, mulC, mixC, rng } from './util.js';
import { GB } from './geom.js';

const W1 = [1, 1, 1];
export const PAL = {
  pole: C('#b1b0a9'), metal: C('#8d9198'), black: C('#2a2b30'), yellow: C('#f2c230'), white: C('#f4f3ee'), trans: C('#a0a3a8'),
  lampPole: C('#727780'), lampHead: C('#dcdcd6'), trunk: C('#6a5444'), trunkDark: C('#4b3a33'),
  leaf: C('#86ba4c'), leafShade: C('#2c6640'), sakura: C('#ffd3e3'), sakuraShade: C('#de94b4'),
  pine: C('#55874c'), pineShade: C('#1d4632'), cedar: C('#41713e'), cedarShade: C('#1b3e2a'),
  roof: C('#bdbbb3'), parapet: C('#dcdad2'), pipe: C('#c4c4bf'), orange: C('#f07a22'), red: C('#d8352a'),
  vermilion: C('#e2482c'), concrete: C('#c9c7c0'), stone: C('#a8a69e'), terracotta: C('#b8653d'), rail: C('#eeeeea'),
};
export const TINTS = ['#f6f2ea', '#efe4d2', '#e7eaee', '#f3e2d8', '#e2eadf', '#ebe3f0', '#f6ecd4', '#e1e7f1', '#ececec', '#ddd2c4', '#f2d9cf', '#d8e6ec'].map(C);
const AWNINGS = ['#c8352b', '#2f7d4a', '#1f4e9c', '#e8c070', '#7a2f2f', '#3b6e8f'].map(C);

let A = null;
export function setAtlas(a) { A = a; }
const uv = n => A.uv(n);
export const uvOf = uv;
const pickV = (r, base) => (A.has(base + '2') && r() < 0.5 ? base + '2' : base);

export function sub(M, x, y, z, yaw = 0) {
  const m = new THREE.Matrix4().makeRotationY(yaw); m.setPosition(x, y, z);
  return new THREE.Matrix4().multiplyMatrices(M, m);
}
// atlas quads: front (faces −Z), +X side, −X side
const fq = (g, x0, x1, y0, y1, z, cell, c = W1) => g.quad([x1, y0, z], [x0, y0, z], [x0, y1, z], [x1, y1, z], c, uv(cell));
const pxq = (g, x, z0, z1, y0, y1, cell, c = W1) => g.quad([x, y0, z1], [x, y0, z0], [x, y1, z0], [x, y1, z1], c, uv(cell));
const nxq = (g, x, z0, z1, y0, y1, cell, c = W1) => g.quad([x, y0, z0], [x, y0, z1], [x, y1, z1], [x, y1, z0], c, uv(cell));
const tri = (g, a, b, c, col, cell) => g.quad(a, b, c, c, col, cell ? uv(cell) : undefined);

// ------------------------------------------------------------------ street furniture
export function utilityPole(G, M, r, opt = {}) {
  const c = G.color; c.setM(M);
  const H = 11.2;
  c.cyl(0, 0, 0, 0.17, 0.12, H, 10, PAL.pole);
  for (let i = 0; i < 5; i++) c.cyl(0, 0.25 + i * 0.3, 0, 0.185, 0.185, 0.15, 10, i % 2 ? PAL.black : PAL.yellow, false);
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
  fq(G.atlas, -0.12, 0.12, 1.7, 2.45, -0.2, 'pole_plate');
  if (r() < 0.4) fq(G.atlas, -0.14, 0.14, 2.6, 3.0, -0.2, 'poster' + Math.floor(r() * 4));
  const anchors = [...A1.map(z => [0, H - 0.4, z]), ...A2.map(z => [0, H - 1.52, z]), [0, 5.72, -0.3], [0, 5.72, 0.3]];
  return anchors.map(p => new THREE.Vector3(p[0], p[1], p[2]).applyMatrix4(M));
}

export function streetLamp(G, M, r, opt = {}) {
  const c = G.color; c.setM(M);
  c.cyl(0, 0, 0, 0.08, 0.06, 6.0, 8, PAL.lampPole);
  c.rod([0, 5.95, 0], [0, 6.35, -0.45], 0.05, 0.045, 6, PAL.lampPole);
  c.rod([0, 6.35, -0.45], [0, 6.45, -1.35], 0.045, 0.04, 6, PAL.lampPole);
  c.box(-0.17, 6.34, -1.72, 0.17, 6.52, -1.12, PAL.lampHead);
  G.lamp.setM(M); G.lamp.box(-0.14, 6.29, -1.68, 0.14, 6.34, -1.16, W1);
  const py = opt.poolY ?? 0.04;
  G.pool.setM(M); G.pool.quad([-3.6, py, 2.2], [3.6, py, 2.2], [3.6, py, -5.2], [-3.6, py, -5.2], W1, { u0: 0, u1: 1, v0: 0, v1: 1 });
}
export function poleLamp(G, M, poolY = 0.04) { // lamp arm bolted onto a utility pole
  const c = G.color; c.setM(M);
  c.rod([0, 6.2, -0.12], [0, 6.75, -0.7], 0.045, 0.04, 6, PAL.lampPole); c.rod([0, 6.75, -0.7], [0, 6.8, -1.45], 0.04, 0.035, 6, PAL.lampPole);
  c.box(-0.16, 6.68, -1.78, 0.16, 6.86, -1.22, PAL.lampHead);
  G.lamp.setM(M); G.lamp.box(-0.13, 6.63, -1.74, 0.13, 6.68, -1.26, W1);
  G.pool.setM(M); G.pool.quad([-3.6, poolY, 2.2], [3.6, poolY, 2.2], [3.6, poolY, -5.2], [-3.6, poolY, -5.2], W1, { u0: 0, u1: 1, v0: 0, v1: 1 });
}
export function oldLamp(G, M) { // short park/shrine lamp
  const c = G.color; c.setM(M);
  c.cyl(0, 0, 0, 0.07, 0.06, 3.2, 8, C('#3a3a3e'));
  c.box(-0.2, 3.2, -0.2, 0.2, 3.25, 0.2, C('#3a3a3e')); c.cyl(0, 3.75, 0, 0.26, 0.04, 0.3, 8, C('#3a3a3e'));
  G.lamp.setM(M); G.lamp.box(-0.16, 3.25, -0.16, 0.16, 3.75, 0.16, W1);
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
function cards(G, cen, cx, cy, cz, R, cell, n, r, col, dark, yr, flat = 0) {
  const uvr = FOL[cell];
  for (let i = 0; i < n; i++) {
    let nx = r() * 2 - 1, ny = r() * 2 - 1, nz = r() * 2 - 1;
    if (flat) { ny = 1.2 + r(); }
    let l = Math.hypot(nx, ny, nz) || 1; nx /= l; ny /= l; nz /= l;
    let ax = -nz, ay = 0, az = nx; l = Math.hypot(ax, az); if (l < 0.1) { ax = 1; az = 0; l = 1; } ax /= l; az /= l;
    let bx = ny * az - nz * ay, by = nz * ax - nx * az, bz = nx * ay - ny * ax;
    const rot = Math.PI + (r() - 0.5) * 0.9, cr = Math.cos(rot), sr = Math.sin(rot); // keep each clump's sunlit top facing up
    const Ax = ax * cr + bx * sr, Ay = ay * cr + by * sr, Az = az * cr + bz * sr, Bx = bx * cr - ax * sr, By = by * cr - ay * sr, Bz = bz * cr - az * sr;
    const h = (R * (1.3 + r() * 0.45)) / 2;
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

// trees are built once per (kind, variant) and then stamped — much cheaper than rebuilding every tree
const TREE_BUILDERS = { broad: treeBroad, sakura: treeSakura, pine: treePine, cedar: treeCedar, maple: treeMaple, ginkgo: treeGinkgo, birch: treeBirch, snowcedar: treeSnowCedar };
const TCACHE = {};
export function tree(G, M, kind, r, s = 1) {
  const v = Math.floor(r() * 4), key = kind + v;
  let t = TCACHE[key];
  if (!t) {
    const g = { color: new GB(), foliage: new GB(), leaf: new GB({ uv: true }) };
    TREE_BUILDERS[kind](g, new THREE.Matrix4(), rng(1000 + v * 77 + kind.length * 13), 1);
    t = TCACHE[key] = { c: g.color.toArrays(), f: g.foliage.toArrays(), l: g.leaf.toArrays() };
  }
  const m = M.clone().scale(new THREE.Vector3(s, s, s));
  G.color.stamp(t.c, m); G.foliage.stamp(t.f, m); G.leaf.stamp(t.l, m);
}

// ------------------------------------------------------------------ buildings
function addSides(g, w, d, floorsY, tint, r, litP) {
  const segs = Math.max(1, Math.round(d / 3)), sd = d / segs;
  for (const sx of [-1, 1]) for (let f = 0; f < floorsY.length - 1; f++) for (let j = 0; j < segs; j++) {
    const cell = f > 0 && r() < 0.3 ? 'win6' + (r() < litP ? 'L' : '') : r() < 0.2 ? 'win5' : 'plain';
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

export function building(G, M, r, spec) {
  G.atlas.setM(M); G.color.setM(M);
  G.color.box(-spec.w / 2, -1.6, 0.02, spec.w / 2, 0.02, spec.d || 10, PAL.concrete, null, { noBottom: true });
  switch (spec.type) {
    case 'shop': return shopHouse(G, M, r, spec);
    case 'apt': return apartment(G, M, r, spec);
    case 'office': return office(G, M, r, spec);
    case 'konbini': return konbini(G, M, r, spec);
    case 'house': return woodHouse(G, M, r, spec);
    case 'tower': return tower(G, M, r, spec);
  }
}

function shopHouse(G, M, r, s) {
  const { w, d, floors, tint, litP } = s, a = G.atlas, c = G.color, fh0 = 3.6, fh = 3.0, H = fh0 + (floors - 1) * fh;
  const bays = Math.max(1, Math.round(w / 3)), bw = w / bays, x0 = -w / 2;
  const kinds = r.pick([['glass', 'door', 'glass'], ['noren', 'noren'], ['cafe', 'door'], ['shutter', 'shutter', 'door'], ['glass', 'glass', 'door'], ['house', 'garage'], ['noren', 'glass']]);
  for (let i = 0; i < bays; i++) fq(a, x0 + i * bw, x0 + (i + 1) * bw, 0, fh0, 0, pickV(r, 'shop_' + kinds[i % kinds.length]));
  const wk = r.pick([0, 0, 1, 5, 0, 1]);
  const fy = [0, fh0]; for (let f = 1; f < floors; f++) fy.push(fh0 + f * fh);
  for (let f = 1; f < floors; f++) for (let i = 0; i < bays; i++) {
    const k = i % 2 === 1 && r() < 0.3 ? 5 : wk;
    fq(a, x0 + i * bw, x0 + (i + 1) * bw, fy[f], fy[f + 1], 0, 'win' + k + (r() < litP ? 'L' : ''), tint);
  }
  addSides(a, w, d, fy, tint, r, litP);
  c.quad([-w / 2, 0, d], [w / 2, 0, d], [w / 2, H, d], [-w / 2, H, d], mulC(tint, 0.8));
  flatRoof(c, w, d, H, r);
  // signboard over the shop
  const sw = w * 0.94;
  c.box(-sw / 2, fh0 - 0.8, -0.3, sw / 2, fh0 + 0.08, -0.02, PAL.black);
  fq(a, -sw / 2, sw / 2, fh0 - 0.8, fh0 + 0.08, -0.305, 'hs' + Math.floor(r() * 14));
  if (r() < 0.55) { // awning
    const col = r.pick(AWNINGS), y = fh0 - 0.85;
    c.quad([w / 2 - 0.2, y - 0.35, -1.1], [-w / 2 + 0.2, y - 0.35, -1.1], [-w / 2 + 0.2, y, -0.02], [w / 2 - 0.2, y, -0.02], col);
    c.quad([w / 2 - 0.2, y - 0.6, -1.1], [-w / 2 + 0.2, y - 0.6, -1.1], [-w / 2 + 0.2, y - 0.35, -1.1], [w / 2 - 0.2, y - 0.35, -1.1], mulC(col, 0.85));
  }
  if (floors >= 2 && r() < 0.65) { const vx = (r() < 0.5 ? 1 : -1) * (w / 2 - 0.35); vsign(G, vx, fh0 + 0.3, Math.min(H - 0.15, fh0 + 2.8), r); }
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
    for (let i = 0; i < bays; i++) fq(a, x0 + i * bw, x0 + (i + 1) * bw, y, fy[f + 1], 0, 'win2' + (r() < litP ? 'L' : ''), tint);
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
function office(G, M, r, s) {
  const { w, d, floors, tint, litP } = s, a = G.atlas, c = G.color, fh0 = 4.0, fh = 3.4, H = fh0 + (floors - 1) * fh;
  const bays = Math.max(2, Math.round(w / 3)), bw = w / bays, x0 = -w / 2;
  const fy = [0, fh0]; for (let f = 1; f < floors; f++) fy.push(fh0 + f * fh);
  for (let i = 0; i < bays; i++) fq(a, x0 + i * bw, x0 + (i + 1) * bw, 0, fh0, 0, i === 1 ? 'shop_door' : 'shop_glass');
  for (let f = 1; f < floors; f++) for (let i = 0; i < bays; i++) fq(a, x0 + i * bw, x0 + (i + 1) * bw, fy[f], fy[f + 1], 0, 'win3' + (r() < litP ? 'L' : ''), tint);
  addSides(a, w, d, fy, tint, r, litP);
  c.quad([-w / 2, 0, d], [w / 2, 0, d], [w / 2, H, d], [-w / 2, H, d], mulC(tint, 0.8));
  flatRoof(c, w, d, H, r, true);
  if (r() < 0.6) vsign(G, (r() < 0.5 ? 1 : -1) * (w / 2 - 0.3), fh0 + 0.4, Math.min(H - 0.3, fh0 + 4.5), r);
  if (r() < 0.3) billboard(G, w, H, d, r);
}
function konbini(G, M, r, s) {
  const { w, d } = s, a = G.atlas, c = G.color, H = 4.4, x0 = -w / 2, bays = Math.max(3, Math.round(w / 3)), bw = w / bays;
  for (let i = 0; i < bays; i++) fq(a, x0 + i * bw, x0 + (i + 1) * bw, 0, 3.4, 0, 'shop_konbini');
  c.box(x0, 3.4, -0.35, -x0, H, 0, PAL.white);
  fq(a, x0, -x0, 3.4, H, -0.355, 'konbini_band');
  addSides(a, w, d, [0, H], C('#f2f2ee'), r, 0);
  flatRoof(c, w, d, H, r);
}
function woodHouse(G, M, r, s) {
  const { w, d, floors, tint, litP } = s, a = G.atlas, c = G.color, fh = 2.9, H = floors * fh, x0 = -w / 2;
  const wood = r() < 0.5, bays = Math.max(2, Math.round(w / 3)), bw = w / bays;
  const fy = []; for (let f = 0; f <= floors; f++) fy.push(f * fh);
  const tw = wood ? W1 : tint;
  for (let f = 0; f < floors; f++) for (let i = 0; i < bays; i++) {
    let cell = wood ? 'win4' : 'win0';
    if (f === 0 && i === 0) cell = 'shop_house'; else if (r() < litP) cell += 'L';
    fq(a, x0 + i * bw, x0 + (i + 1) * bw, fy[f], fy[f + 1], 0, cell, cell === 'shop_house' ? W1 : tw);
  }
  addSides(a, w, d, fy, wood ? C('#9a7a62') : tint, r, litP);
  c.quad([-w / 2, 0, d], [w / 2, 0, d], [w / 2, H, d], [-w / 2, H, d], mulC(tint, 0.75));
  // gable roof, ridge parallel to the road
  const snow = !!s.snow, o = snow ? 0.75 : 0.6, rh = snow ? Math.min(3.4, d * 0.46) : Math.min(2.4, d * 0.32);
  const k = uv(snow ? 'white' : 'kawara'), RC = snow ? C('#f3f5fa') : C('#c8ccd8');
  a.quad([w / 2 + o, H - 0.25, -o], [-w / 2 - o, H - 0.25, -o], [-w / 2 - o, H + rh, d / 2], [w / 2 + o, H + rh, d / 2], RC, k);
  a.quad([-w / 2 - o, H - 0.25, d + o], [w / 2 + o, H - 0.25, d + o], [w / 2 + o, H + rh, d / 2], [-w / 2 - o, H + rh, d / 2], RC, k);
  const gc = wood ? C('#7a5a42') : tint;
  tri(c, [-w / 2, H, 0], [-w / 2, H, d], [-w / 2, H + rh - 0.1, d / 2], gc);
  tri(c, [w / 2, H, d], [w / 2, H, 0], [w / 2, H + rh - 0.1, d / 2], gc);
  c.box(-w / 2 - o, H + rh - 0.05, d / 2 - 0.15, w / 2 + o, H + rh + 0.18, d / 2 + 0.15, snow ? C('#f6f7fb') : C('#3d4456'));
  if (snow) { // the thick snow slab shows along the eaves, with a few icicles
    c.box(-w / 2 - o - 0.05, H - 0.42, -o - 0.1, w / 2 + o + 0.05, H - 0.12, -o + 0.3, C('#eef1f7'));
    c.box(-w / 2 - o - 0.05, H - 0.42, d + o - 0.3, w / 2 + o + 0.05, H - 0.12, d + o + 0.1, C('#eef1f7'));
    for (let x = -w / 2; x < w / 2; x += 0.45 + r() * 0.5) c.cyl(x, H - 0.42 - 0.35, -o + 0.02, 0.0, 0.04, 0.35, 4, C('#dfe8f3'), false);
  }
  if (floors > 1) { // little eave between floors
    const y = fh + 0.05;
    a.quad([w / 2 + 0.1, y - 0.3, -0.75], [-w / 2 - 0.1, y - 0.3, -0.75], [-w / 2 - 0.1, y + 0.05, 0], [w / 2 + 0.1, y + 0.05, 0], RC, k);
  }
  if (s.fence) { // concrete block wall in front, with a gap for the gate
    const z = -s.fence, h = 1.2;
    for (const [xa, xb] of [[-w / 2, -1.0], [0.4, w / 2]]) { c.box(xa, 0, z - 0.08, xb, h, z + 0.08, PAL.concrete); fq(a, xa, xb, 0, h, z - 0.085, 'block'); }
  }
}
function tower(G, M, r, s) {
  const { w, d, floors, tint, litP } = s, a = G.atlas, c = G.color, fh = 3.4, H = floors * fh;
  const bays = Math.max(2, Math.round(w / 6)), bw = w / bays, x0 = -w / 2, cell = r() < 0.5 ? 'win3' : 'win2';
  const fy = []; for (let f = 0; f <= floors; f++) fy.push(f * fh);
  for (let f = 0; f < floors; f++) for (let i = 0; i < bays; i++) fq(a, x0 + i * bw, x0 + (i + 1) * bw, fy[f], fy[f + 1], 0, cell + (r() < litP ? 'L' : ''), tint);
  const segs = Math.max(1, Math.round(d / 6)), sd = d / segs;
  for (const sx of [-1, 1]) for (let f = 0; f < floors; f++) for (let j = 0; j < segs; j++)
    (sx > 0 ? pxq : nxq)(a, (sx * w) / 2, j * sd, (j + 1) * sd, fy[f], fy[f + 1], cell + (r() < litP ? 'L' : ''), tint);
  flatRoof(c, w, d, H, r, true);
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
export function stoneLantern(G, M) {
  const c = G.color; c.setM(M);
  c.box(-0.4, 0, -0.4, 0.4, 0.25, 0.4, PAL.stone); c.cyl(0, 0.25, 0, 0.14, 0.12, 0.95, 8, PAL.stone);
  c.box(-0.32, 1.2, -0.32, 0.32, 1.3, 0.32, PAL.stone); c.box(-0.26, 1.3, -0.26, 0.26, 1.72, 0.26, mulC(PAL.stone, 1.05));
  c.cyl(0, 1.72, 0, 0.55, 0.08, 0.38, 6, mulC(PAL.stone, 0.92));
  G.lamp.setM(M); G.lamp.box(-0.18, 1.38, -0.27, 0.18, 1.62, -0.25, W1); G.lamp.box(-0.18, 1.38, 0.25, 0.18, 1.62, 0.27, W1);
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
export function tetrapod(G, M, r, s = 1) {
  const c = G.color; c.setM(M);
  const col = mulC(PAL.concrete, 0.85 + r() * 0.15);
  const dirs = [[0, 1, 0], [0.943, -0.333, 0], [-0.471, -0.333, 0.816], [-0.471, -0.333, -0.816]];
  const y0 = 0.55 * s;
  for (const d of dirs) c.rod([0, y0, 0], [d[0] * 0.95 * s, y0 + d[1] * 0.95 * s, d[2] * 0.95 * s], 0.42 * s, 0.26 * s, 7, col);
}
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
