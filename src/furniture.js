// (step 35g) The street furniture as an anime film paints it: the vending machines, the bicycles, the Turkish town's simit cart, its
// tea tables and chairs, the country bus stop. Each is a small model built once, here, from bevelled boxes, tubes and lathed tyres,
// and painted from one shared atlas of their own (painted.js loadFurniture: assets/furniture/furn1.*, made by ~/cdtest/s35g/scripts/
// pack.py from Grok Imagine elevations of a Japanese drinks machine in three liveries, a mamachari in three frames and a simit cart's
// long side and end, with the small cells (wood, a tea glass, the cart's spoked wheel, the bus stop's sign, timetable and shelter)
// drawn in code). The chunks stamp them into one mesh of their own (chunks.js G.furn), drawn with the atlas's program on that texture
// pair (main.js M.atlasF: makeAtlasChain, nothing new compiles); what glows at night (the machines' windows and buttons) is in its
// emissive map, always on (aLit 0). Prop-local frame as props.js: origin at the base, x along the road, the front faces −Z.
import { GB } from './geom.js';

/** the templates ({ vend: [3], bike: [3], cart, table, chair, glass, sugar, stop }), once the atlas is in (setFurniture), else null:
 *  props.js then keeps the old builders */
export const FURN = { T: null };

const W1 = [1, 1, 1];
let CELLS = null, AW = 1, AH = 1;
// a cell's rect, normalised: [u0, v0, u1, v1] (v runs down: the sheet's top row is v = 0, as decoded and uploaded unflipped)
const cell = n => { const c = CELLS[n]; if (!c) throw new Error('furniture cell ' + n + ' missing'); return [c[0] / AW, c[1] / AH, (c[0] + c[2]) / AW, (c[1] + c[3]) / AH]; };
// a point in a cell: fx from its left, fy from its top (0…1)
const at = (c, fx, fy) => [c[0] + (c[2] - c[0]) * fx, c[1] + (c[3] - c[1]) * fy];
// a plain cell's middle (its flat paint, away from its edges)
const mid = c => at(c, 0.5, 0.5);

/** a quad p0…p3 (counter-clockwise seen from its front, as GB.quad) with each corner's uv from uvf(p) */
function q4(g, p0, p1, p2, p3, uvf, c = W1) {
  const ax = p1[0] - p0[0], ay = p1[1] - p0[1], az = p1[2] - p0[2];
  let bx = p3[0] - p0[0], by = p3[1] - p0[1], bz = p3[2] - p0[2];
  if (bx * bx + by * by + bz * bz < 1e-12) { bx = p2[0] - p0[0]; by = p2[1] - p0[1]; bz = p2[2] - p0[2]; }
  const nx = ay * bz - az * by, ny = az * bx - ax * bz, nz = ax * by - ay * bx;
  const t0 = uvf(p0), t1 = uvf(p1), t2 = uvf(p2), t3 = uvf(p3);
  g.vtx(p0[0], p0[1], p0[2], nx, ny, nz, t0[0], t0[1], c); g.vtx(p1[0], p1[1], p1[2], nx, ny, nz, t1[0], t1[1], c); g.vtx(p2[0], p2[1], p2[2], nx, ny, nz, t2[0], t2[1], c);
  g.vtx(p0[0], p0[1], p0[2], nx, ny, nz, t0[0], t0[1], c); g.vtx(p2[0], p2[1], p2[2], nx, ny, nz, t2[0], t2[1], c); g.vtx(p3[0], p3[1], p3[2], nx, ny, nz, t3[0], t3[1], c);
}
/** a quad wound so its front faces away from ctr (convex pieces: no winding to get wrong) */
function q4c(g, ctr, p0, p1, p2, p3, uvf, c = W1) {
  const ax = p1[0] - p0[0], ay = p1[1] - p0[1], az = p1[2] - p0[2], bx = p3[0] - p0[0], by = p3[1] - p0[1], bz = p3[2] - p0[2];
  const nx = ay * bz - az * by, ny = az * bx - ax * bz, nz = ax * by - ay * bx;
  const fx = (p0[0] + p1[0] + p2[0] + p3[0]) / 4 - ctr[0], fy = (p0[1] + p1[1] + p2[1] + p3[1]) / 4 - ctr[1], fz = (p0[2] + p1[2] + p2[2] + p3[2]) / 4 - ctr[2];
  if (nx * fx + ny * fy + nz * fz >= 0) q4(g, p0, p1, p2, p3, uvf, c); else q4(g, p1, p0, p3, p2, uvf, c);
}
/** …and its back face too (thin things seen from both sides: cards, valances, gables) */
const q4b = (g, p0, p1, p2, p3, uvf, c, cb = c) => { q4(g, p0, p1, p2, p3, uvf, c); q4(g, p1, p0, p3, p2, uvf, cb); };
function tri(g, p0, p1, p2, uvf, c = W1) {
  const ax = p1[0] - p0[0], ay = p1[1] - p0[1], az = p1[2] - p0[2], bx = p2[0] - p0[0], by = p2[1] - p0[1], bz = p2[2] - p0[2];
  const nx = ay * bz - az * by, ny = az * bx - ax * bz, nz = ax * by - ay * bx, t0 = uvf(p0), t1 = uvf(p1), t2 = uvf(p2);
  g.vtx(p0[0], p0[1], p0[2], nx, ny, nz, t0[0], t0[1], c); g.vtx(p1[0], p1[1], p1[2], nx, ny, nz, t1[0], t1[1], c); g.vtx(p2[0], p2[1], p2[2], nx, ny, nz, t2[0], t2[1], c);
}
const flatUV = c => { const t = mid(c); return () => t; };
/** an axis-aligned box's faces (fl: which to draw, 'zZxXyY' = −z +z −x +x −y +y), each face's uv from uvf(face, p), colour per face (cf) */
function box(g, x0, y0, z0, x1, y1, z1, uvf, c = W1, fl = 'zZxXyY', cf = null) {
  const C = k => (cf && cf[k]) || c;
  if (fl.includes('z')) q4(g, [x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], p => uvf('z', p), C('z'));
  if (fl.includes('Z')) q4(g, [x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], p => uvf('Z', p), C('Z'));
  if (fl.includes('x')) q4(g, [x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0], p => uvf('x', p), C('x'));
  if (fl.includes('X')) q4(g, [x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1], p => uvf('X', p), C('X'));
  if (fl.includes('Y')) q4(g, [x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [x0, y1, z0], p => uvf('Y', p), C('Y'));
  if (fl.includes('y')) q4(g, [x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1], p => uvf('y', p), C('y'));
}
/** a tapered square leg / rail from a to b (half-widths ra at a, rb at b), its four sides; uv along its length in a cell (grain) */
function bar(g, a, b, ra, rb, cl, c = W1, ends = false) {
  const dx = b[0] - a[0], dy = b[1] - a[1], dz = b[2] - a[2], L = Math.hypot(dx, dy, dz), tx = dx / L, ty = dy / L, tz = dz / L;
  let ux = 0, uy = 1, uz = 0; if (Math.abs(ty) > 0.9) { ux = 1; uy = 0; }
  let sx = ty * uz - tz * uy, sy = tz * ux - tx * uz, sz = tx * uy - ty * ux; const sl = Math.hypot(sx, sy, sz); sx /= sl; sy /= sl; sz /= sl;
  const vx = sy * tz - sz * ty, vy = sz * tx - sx * tz, vz = sx * ty - sy * tx;
  const C = [[1, 1], [-1, 1], [-1, -1], [1, -1]], P = (p, r, k) => [p[0] + (sx * C[k][0] + vx * C[k][1]) * r, p[1] + (sy * C[k][0] + vy * C[k][1]) * r, p[2] + (sz * C[k][0] + vz * C[k][1]) * r];
  for (let k = 0; k < 4; k++) {
    const k1 = (k + 1) % 4, A0 = P(a, ra, k), A1 = P(a, ra, k1), B1 = P(b, rb, k1), B0 = P(b, rb, k);
    const u0 = k / 4, u1 = (k + 1) / 4;
    q4(g, A0, A1, B1, B0, p => (p === A0 ? at(cl, u0 * 0.3, 0.1) : p === A1 ? at(cl, u1 * 0.3, 0.1) : p === B1 ? at(cl, u1 * 0.3, 0.9) : at(cl, u0 * 0.3, 0.9)), c);
  }
  if (ends) { const m = flatUV(cl); q4(g, P(b, rb, 0), P(b, rb, 1), P(b, rb, 2), P(b, rb, 3), m, c); q4(g, P(a, ra, 3), P(a, ra, 2), P(a, ra, 1), P(a, ra, 0), m, c); }
}
/** a tyre: a ring of radius R round (cx, cy) in the x–y plane at z, its cross-section r (radial) by w (across), smooth normals */
function tyre(g, cx, cy, z, R, r, w, segs, uvt, c = W1, S = 4) {
  const t = mid(uvt);
  for (let i = 0; i < segs; i++) for (let j = 0; j < S; j++) {
    const P = (ii, jj) => { const th = (ii / segs) * Math.PI * 2, ph = (jj / S) * Math.PI * 2 + Math.PI / 4, ct = Math.cos(th), st = Math.sin(th), cp = Math.cos(ph), sp = Math.sin(ph);
      return [cx + (R + r * cp) * ct, cy + (R + r * cp) * st, z + w * sp, cp * ct, cp * st, sp]; };
    const a = P(i, j), b = P(i + 1, j), d = P(i + 1, j + 1), e = P(i, j + 1);
    for (const q of [a, b, d, a, d, e]) g.vtx(q[0], q[1], q[2], q[3], q[4], q[5], t[0], t[1], c);
  }
}
const dim = k => [k, k, k];

// ------------------------------------------------------------------------------------------------ the vending machine
// 1.0 × 1.83 m, 0.74 deep (the old box's footprint). Its front is the painting (geo.vend: where the window, the collection slot and the
// coin unit are, from its left edge (local +x: the painting's left as seen from the road) and the ground): the window and the slot
// recessed, the coin unit standing out, the front's vertical edges chamfered, a plinth set back under it, a cap with a lip over the top
function vending(v, G) {
  const g = new GB({ uv: true }), F = cell('vend' + v), Sd = cell('vside' + v), D = cell('fdark'), Gr = cell('fgrey');
  const W = G.W, H = G.H, zf = 0.02, ch = 0.02, BK = 0.75, hw = W / 2;
  const fu = (x, y) => at(F, (hw - x) / W, (H - y) / H); // (the painting: its left at x = +hw, its top at y = H)
  const fr = p => fu(p[0], p[1]);
  const front = (x0, x1, y0, y1, z) => q4(g, [x1, y0, z], [x0, y0, z], [x0, y1, z], [x1, y1, z], fr);
  const px = q => hw - q; // (the layout's x from the left edge → local x)
  const [wl, wb, wr, wt] = G.win, [sl, sb, sr, st] = G.slot, [cl, cb, cr, ct] = G.coin, e = 0.004;
  const X = { w0: px(wr), w1: px(wl), s0: px(sr), s1: px(sl), c0: px(cr), c1: px(cl) }, xe = hw - ch;
  // the flush front, band by band (around the openings)
  front(-xe, xe, G.plinth, sb, zf);
  front(-xe, X.s0, sb, st, zf); front(X.s1, xe, sb, st, zf);
  front(-xe, xe, st, cb, zf);
  front(-xe, X.c0, cb, ct, zf); front(X.c1, xe, cb, ct, zf);
  front(-xe, xe, ct, wb, zf);
  front(-xe, X.w0, wb, wt, zf); front(X.w1, xe, wb, wt, zf);
  front(-xe, xe, wt, H, zf);
  // a recess (x0 < x1, y0 < y1, depth d): its back (the painting, pushed in) and four walls (the opening's edge rows and columns of the
  // painting, stretched over the depth), shaded a little
  const recess = (x0, x1, y0, y1, d, k) => {
    const zb = zf + d, cw = dim(k);
    front(x0, x1, y0, y1, zb);
    q4(g, [x1, y0, zf], [x0, y0, zf], [x0, y0, zb], [x1, y0, zb], p => fu(p[0], y0 + e), cw);   // bottom (facing up)
    q4(g, [x0, y1, zf], [x1, y1, zf], [x1, y1, zb], [x0, y1, zb], p => fu(p[0], y1 - e), cw);   // top (facing down)
    q4(g, [x1, y0, zf], [x1, y0, zb], [x1, y1, zb], [x1, y1, zf], p => fu(x1 - e, p[1]), cw);   // its +x side (facing −x)
    q4(g, [x0, y0, zb], [x0, y0, zf], [x0, y1, zf], [x0, y1, zb], p => fu(x0 + e, p[1]), cw);   // its −x side (facing +x)
  };
  recess(X.w0, X.w1, wb, wt, 0.035, 0.82); recess(X.s0, X.s1, sb, st, 0.05, 0.6);
  // the coin unit, standing 1.5 cm out of the front
  { const zc = zf - 0.015, x0 = X.c0, x1 = X.c1;
    front(x0, x1, cb, ct, zc);
    q4(g, [x0, cb, zc], [x1, cb, zc], [x1, cb, zf], [x0, cb, zf], p => fu(p[0], cb + e), dim(0.8)); // underside
    q4(g, [x1, ct, zc], [x0, ct, zc], [x0, ct, zf], [x1, ct, zf], p => fu(p[0], ct - e)); // top
    q4(g, [x1, cb, zf], [x1, cb, zc], [x1, ct, zc], [x1, ct, zf], p => fu(x1 - e, p[1])); // +x side
    q4(g, [x0, cb, zc], [x0, cb, zf], [x0, ct, zf], [x0, ct, zc], p => fu(x0 + e, p[1])); } // −x side
  // the chamfered front edges (the painting's outer columns), the sides (the livery's side panel), the back
  const y0 = G.plinth;
  q4(g, [hw, y0, zf + ch], [xe, y0, zf], [xe, H, zf], [hw, H, zf + ch], fr);
  q4(g, [-xe, y0, zf], [-hw, y0, zf + ch], [-hw, H, zf + ch], [-xe, H, zf], fr);
  const sd = (z, y) => at(Sd, (z - zf) / (BK - zf), (H - y) / (H - y0));
  q4(g, [hw, y0, BK], [hw, y0, zf + ch], [hw, H, zf + ch], [hw, H, BK], p => sd(p[2], p[1]));
  q4(g, [-hw, y0, zf + ch], [-hw, y0, BK], [-hw, H, BK], [-hw, H, zf + ch], p => sd(p[2], p[1]));
  q4(g, [-hw, y0, BK], [hw, y0, BK], [hw, H, BK], [-hw, H, BK], flatUV(Gr), dim(0.85));
  // the plinth, set back 3 cm (its front the painting's bottom strip)
  { const pz = zf + 0.03, px0 = hw - 0.03;
    front(-px0, px0, 0, y0, pz);
    box(g, -px0, 0, pz, px0, y0, BK - 0.03, flatUV(D), W1, 'xX'); }
  // the cap: 6 cm over the top, its lip 4 cm out over the front (its face the painting's header strip, stretched), 1 cm over the sides
  { const c0 = H, c1 = H + 0.06, cz0 = zf - 0.04, cx = hw + 0.01, top = at(Sd, 0.5, 0.04), sdu = () => top;
    q4(g, [cx, c0, cz0], [-cx, c0, cz0], [-cx, c1, cz0], [cx, c1, cz0], p => fu(Math.max(-hw, Math.min(hw, p[0])), G.head + (p[1] - c0) / (c1 - c0) * (H - G.head)));
    box(g, -cx, c0, cz0, cx, c1, BK + 0.01, sdu, W1, 'ZxXY');
    q4(g, [-cx, c0, cz0], [cx, c0, cz0], [cx, c0, zf], [-cx, c0, zf], flatUV(D), dim(0.7)); } // its underside over the front
  return g;
}

// ------------------------------------------------------------------------------------------------ the bicycle
// The painted side elevation (geo.bike: the card's corners, where the wheels, the basket and the saddle are, in metres: x along the
// bike, its front (the basket) at +x, y up from the tyres' bottoms) on a card down its middle, seen from both sides (the far side
// mirrored); in 3D what the card can't show end-on: the two tyres, the handlebar and its grips, the wire basket, the saddle, the frame's tubes
function bicycle(k, B, lite) {
  const g = new GB({ uv: true }), Bk = cell('bike' + k), K = cell('bask'), D = cell('fdark'), T = cell('ftyre'), Sv = cell('fsteel');
  const [x0, y0, x1, y1] = B.card, cu = p => at(Bk, (p[0] - x0) / (x1 - x0), (y1 - p[1]) / (y1 - y0));
  // (the card's outline: an enclosing hexagon round the paintings' opaque texels when listed, a third fewer cut-out fragments than the
  // rectangle; each face a fan, wound to face its side: from −z the painting shows mirrored, its front still at +x)
  const O = B.outline && B.outline.length >= 3 ? B.outline.map(([u, v]) => [x0 + u * (x1 - x0), y1 - v * (y1 - y0), 0]) : [[x0, y0, 0], [x1, y0, 0], [x1, y1, 0], [x0, y1, 0]];
  for (let i = 1; i + 1 < O.length; i++) {
    const a = O[0], b = O[i], c = O[i + 1], up = (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]) > 0; // (counter-clockwise seen from +z)
    if (up) { tri(g, a, b, c, cu); tri(g, a, c, b, cu); } else { tri(g, a, c, b, cu); tri(g, a, b, c, cu); }
  }
  for (const [cx, cy, R, r] of B.wheels) if (lite) tyre(g, cx, cy, 0, R, r, 0.017, 10, T, W1, 3); else tyre(g, cx, cy, 0, R, r, 0.017, 14, T); // (phones: 60 triangles a tyre, not 112)
  // the basket: an open box of wire mesh (its painting on every face, both sides; its bottom)
  { const [bx0, by0, bx1, by1] = B.basket, bz = 0.17, ku = (fx, fy) => at(K, fx, fy);
    const side = (a, b, c, d, fu) => q4b(g, a, b, c, d, fu, W1, dim(0.8));
    side([bx1, by0, -bz], [bx0, by0, -bz], [bx0, by1, -bz], [bx1, by1, -bz], p => ku((bx1 - p[0]) / (bx1 - bx0), (by1 - p[1]) / (by1 - by0)));
    side([bx0, by0, bz], [bx1, by0, bz], [bx1, by1, bz], [bx0, by1, bz], p => ku((p[0] - bx0) / (bx1 - bx0), (by1 - p[1]) / (by1 - by0)));
    side([bx1, by0, bz], [bx1, by0, -bz], [bx1, by1, -bz], [bx1, by1, bz], p => ku((p[2] + bz) / (2 * bz), (by1 - p[1]) / (by1 - by0)));
    side([bx0, by0, -bz], [bx0, by0, bz], [bx0, by1, bz], [bx0, by1, -bz], p => ku((bz - p[2]) / (2 * bz), (by1 - p[1]) / (by1 - by0)));
    side([bx0, by0 + 0.02, -bz], [bx1, by0 + 0.02, -bz], [bx1, by0 + 0.02, bz], [bx0, by0 + 0.02, bz], p => ku((p[0] - bx0) / (bx1 - bx0), 0.3 + 0.4 * (p[2] + bz) / (2 * bz))); }
  // the saddle: a rounded wedge, wider at the back
  { const [sx0, sy0, sx1, sy1] = B.saddle, u = flatUV(D), wb = 0.09, wf = 0.035, yb = sy0 + 0.02, zt = x => wb + (wf - wb) * (x - sx0) / (sx1 - sx0);
    const a0 = zt(sx0), a1 = zt(sx1), yt1 = sy1 - 0.01, ctr = [(sx0 + sx1) / 2, (yb + sy1) / 2, 0];
    q4c(g, ctr, [sx0, sy1, a0], [sx1, yt1, a1], [sx1, yt1, -a1], [sx0, sy1, -a0], u, dim(1.25));   // top
    q4c(g, ctr, [sx0, yb, -a0], [sx1, yb, -a1], [sx1, yt1, -a1], [sx0, sy1, -a0], u);              // its sides
    q4c(g, ctr, [sx0, yb, a0], [sx1, yb, a1], [sx1, yt1, a1], [sx0, sy1, a0], u);
    q4c(g, ctr, [sx0, yb, a0], [sx0, yb, -a0], [sx0, sy1, -a0], [sx0, sy1, a0], u);                // back
    q4c(g, ctr, [sx1, yb, a1], [sx1, yb, -a1], [sx1, yt1, -a1], [sx1, yt1, a1], u);                // nose
    q4c(g, ctr, [sx0, yb, a0], [sx0, yb, -a0], [sx1, yb, -a1], [sx1, yb, a1], u, dim(0.6)); }      // under
  // the frame end-on: each painted tube a ribbon across the card through its centreline, as wide as the tube (seen side-on it is edge-on and
  // the painting shows; seen end-on it is the frame; between, it lies over the painted tube wherever the eye is)
  if (!lite) { const fc = cell('bframe' + k), u = flatUV(fc); // (not on phones: the frame end-on is rare from their chase camera)
    const rib = (a, b, r) => q4b(g, [a[0], a[1], -r], [b[0], b[1], -r], [b[0], b[1], r], [a[0], a[1], r], u, W1, dim(0.85));
    for (const [r, ...P] of B.frame) for (let i = 0; i + 1 < P.length; i++) rib(P[i], P[i + 1], r);
    if (B.stem) rib(B.stem[0], B.stem[1], 0.012); }
  // the handlebar: swept back from the stem to the grips, a black grip at each end
  { const hx = B.stem ? B.stem[1][0] : B.basket[0] + 0.005, hy = B.stem ? B.stem[1][1] : B.saddle[3] + 0.225, s = [hx, hy, 0];
    for (const sz of [-1, 1]) {
      const m = [hx - 0.02, hy + 0.012, sz * 0.17], e = [hx - 0.1, hy - 0.005, sz * 0.27], gtip = [hx - 0.15, hy - 0.012, sz * 0.31];
      bar(g, s, m, 0.011, 0.011, Sv, W1, false); bar(g, m, e, 0.011, 0.011, Sv, W1, false); bar(g, e, gtip, 0.017, 0.017, D, W1, true);
    } }
  return g;
}

// ------------------------------------------------------------------------------------------------ the simit cart
// The long side's and the end's paintings (cells cartS, cartE; each part's rect in them: cS_body, cS_case, cS_val, cS_top, cE_…) on a
// red body box 1.2 × 0.62 m, its glass case of simit, four white posts, a gabled red canopy with its scalloped valance (cut out on the
// paintings' alpha); in 3D: two spoked wheels (painted cards, rubber tyres), its axle, a stand and the handles at the other end
const CART = { bx: 0.6, bz: 0.31, by0: 0.38, by1: 0.88, cx: 0.586, cz: 0.30, cy1: 1.353, ey: 1.811, vy0: 1.614, rx: 0.75, rz: 0.46, ry: 1.97 };
function simit() {
  const g = new GB({ uv: true }), C = CART, Sv = cell('fsteel'), Wh = cell('fwhite'), D = cell('fdark'), T = cell('ftyre'), Wl = cell('wheel');
  const sb = cell('cS_body'), sc = cell('cS_case'), sv = cell('cS_val'), st = cell('cS_top'), eb = cell('cE_body'), ec = cell('cE_case'), ev = cell('cE_val'), eg = cell('cE_gable'), er = cell('cE_roof');
  // a face of the box x0…x1, y0…y1 on its long side (±z) or its end (±x), painted by the rect R (its left edge at the face's left as seen)
  const longF = (R, x0, x1, y0, y1, z, out, both = false) => { const uv = p => at(R, out < 0 ? (x1 - p[0]) / (x1 - x0) : (p[0] - x0) / (x1 - x0), (y1 - p[1]) / (y1 - y0));
    const P = out < 0 ? [[x1, y0, z], [x0, y0, z], [x0, y1, z], [x1, y1, z]] : [[x0, y0, z], [x1, y0, z], [x1, y1, z], [x0, y1, z]];
    (both ? q4b : q4)(g, P[0], P[1], P[2], P[3], uv, W1, dim(0.62)); };
  const endF = (R, z0, z1, y0, y1, x, out, both = false) => { const uv = p => at(R, out > 0 ? (z1 - p[2]) / (z1 - z0) : (p[2] - z0) / (z1 - z0), (y1 - p[1]) / (y1 - y0));
    const P = out > 0 ? [[x, y0, z1], [x, y0, z0], [x, y1, z0], [x, y1, z1]] : [[x, y0, z0], [x, y0, z1], [x, y1, z1], [x, y1, z0]];
    (both ? q4b : q4)(g, P[0], P[1], P[2], P[3], uv, W1, dim(0.62)); };
  // the body and the case
  for (const s of [-1, 1]) { longF(sb, -C.bx, C.bx, C.by0, C.by1, s * C.bz, s); endF(eb, -C.bz, C.bz, C.by0, C.by1, s * C.bx, s); }
  box(g, -C.bx, C.by0, -C.bz, C.bx, C.by1, C.bz, () => mid(Wh), W1, 'Y'); box(g, -C.bx, C.by0, -C.bz, C.bx, C.by1, C.bz, () => mid(D), W1, 'y');
  for (const s of [-1, 1]) { longF(sc, -C.cx, C.cx, C.by1, C.cy1, s * C.cz, s); endF(ec, -C.cz, C.cz, C.by1, C.cy1, s * C.cx, s); }
  q4(g, [-C.cx, C.cy1, C.cz], [C.cx, C.cy1, C.cz], [C.cx, C.cy1, -C.cz], [-C.cx, C.cy1, -C.cz], p => at(st, (p[0] + C.cx) / (2 * C.cx), (p[2] + C.cz) / (2 * C.cz)));
  // the posts, up from the case's corners to the eaves
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) { const x = sx * (C.cx - 0.014), z = sz * (C.cz - 0.014); box(g, x - 0.012, C.cy1, z - 0.012, x + 0.012, C.ey, z + 0.012, () => mid(Wh), W1, 'zZxX'); }
  // the canopy: the valance round it (both faces: it is seen from under the canopy too), the gables, the roof's two slopes (top and under)
  for (const s of [-1, 1]) { longF(sv, -C.rx, C.rx, C.vy0, C.ey, s * C.rz, s, true); endF(ev, -C.rz, C.rz, C.vy0, C.ey, s * C.rx, s, true); }
  for (const s of [-1, 1]) {
    const x = s * C.rx, gu = p => at(eg, s > 0 ? (C.rz - p[2]) / (2 * C.rz) : (p[2] + C.rz) / (2 * C.rz), (C.ry - p[1]) / (C.ry - C.ey));
    const a = [x, C.ey, -C.rz], b = [x, C.ey, C.rz], t = [x, C.ry, 0];
    if (s > 0) { tri(g, b, a, t, gu); tri(g, a, b, t, gu, dim(0.6)); } else { tri(g, a, b, t, gu); tri(g, b, a, t, gu, dim(0.6)); }
  }
  const ru = p => at(er, (p[0] + C.rx) / (2 * C.rx), Math.abs(p[2]) / C.rz);
  q4b(g, [C.rx, C.ey, -C.rz], [-C.rx, C.ey, -C.rz], [-C.rx, C.ry, 0], [C.rx, C.ry, 0], ru, W1, dim(0.55)); // (the top faces up and out, the under dimmer)
  q4b(g, [-C.rx, C.ey, C.rz], [C.rx, C.ey, C.rz], [C.rx, C.ry, 0], [-C.rx, C.ry, 0], ru, W1, dim(0.55));
  // the wheels: spoked cards (both faces) with rubber tyres, an axle under the body
  const wx = 0.3, wy = 0.3, wr = 0.3;
  for (const s of [-1, 1]) {
    const z = s * 0.37, wu = p => at(Wl, 0.5 + (p[0] - wx) / (2 * wr) * 0.98, 0.5 - (p[1] - wy) / (2 * wr) * 0.98);
    q4b(g, [wx + wr, wy - wr, z], [wx - wr, wy - wr, z], [wx - wr, wy + wr, z], [wx + wr, wy + wr, z], wu);
    tyre(g, wx, wy, z, wr - 0.02, 0.022, 0.022, 14, T);
  }
  bar(g, [wx, wy, -0.38], [wx, wy, 0.38], 0.014, 0.014, Sv);
  // the stand (two legs splayed out to the ground, a foot bar) and the handles at that end
  for (const s of [-1, 1]) bar(g, [-0.46, C.by0, s * 0.2], [-0.52, 0.01, s * 0.25], 0.014, 0.014, D);
  bar(g, [-0.52, 0.02, -0.26], [-0.52, 0.02, 0.26], 0.012, 0.012, D);
  for (const s of [-1, 1]) bar(g, [-C.bx, 0.78, s * 0.24], [-0.98, 0.84, s * 0.24], 0.013, 0.013, Sv, W1, true);
  bar(g, [-0.98, 0.84, -0.26], [-0.98, 0.84, 0.26], 0.017, 0.017, D, W1, true);
  return g;
}

// ------------------------------------------------------------------------------------------------ the tea table and its chairs
// Light wooden kahvehane furniture (the town's concept): a square table with a bevelled top on four tapered legs and an apron; a chair
// with a seat, four legs (the back ones raked up into its back), stretchers and two back slats. Its grain runs along each piece
function table() {
  const g = new GB({ uv: true }), Wd = cell('wood'), Wk = cell('woodd');
  const t0 = 0.665, t1 = 0.70, h = 0.33, b = 0.012, gu = p => at(Wd, (p[0] + h) / (2 * h), (p[2] + h) / (2 * h));
  q4(g, [-h + b, t1, h - b], [h - b, t1, h - b], [h - b, t1, -h + b], [-h + b, t1, -h + b], gu, dim(1.04));          // the top
  const E = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
  for (let i = 0; i < 4; i++) { // its bevel and its edge, side by side
    const [ax, az] = E[i], [bx, bz] = E[(i + 1) % 4];
    q4(g, [bx * h, t1 - b, bz * h], [ax * h, t1 - b, az * h], [ax * (h - b), t1, az * (h - b)], [bx * (h - b), t1, bz * (h - b)], gu, dim(0.96));
    q4(g, [bx * h, t0, bz * h], [ax * h, t0, az * h], [ax * h, t1 - b, az * h], [bx * h, t1 - b, bz * h], gu, dim(0.9));
  }
  q4(g, [-h, t0, -h], [h, t0, -h], [h, t0, h], [-h, t0, h], gu, dim(0.55)); // under
  for (const [x, z] of E) bar(g, [x * 0.27, 0, z * 0.27], [x * 0.27, t0, z * 0.27], 0.017, 0.023, Wk, dim(0.92), true);
  for (let i = 0; i < 4; i++) { const [ax, az] = E[i], [bx, bz] = E[(i + 1) % 4]; bar(g, [ax * 0.25, t0 - 0.04, az * 0.25], [bx * 0.25, t0 - 0.04, bz * 0.25], 0.012, 0.012, Wd, dim(0.85)); }
  return g;
}
function chair() { // facing −z (its back at +z), as the old one
  const g = new GB({ uv: true }), Wd = cell('wood'), Wk = cell('woodd'), s = 0.205, sy0 = 0.43, sy1 = 0.46;
  const su = p => at(Wd, (p[0] + s) / (2 * s), (p[2] + s) / (2 * s));
  box(g, -s, sy0, -s, s, sy1, s, (f, p) => f === 'Y' || f === 'y' ? su(p) : at(Wd, (p[0] + p[2] + 2 * s) / (4 * s), 0.5 + (p[1] - sy0) * 2), W1, 'zZxXyY', { Y: dim(1.04), y: dim(0.55) });
  for (const x of [-0.175, 0.175]) {
    bar(g, [x, 0, -0.175], [x, sy0, -0.175], 0.016, 0.018, Wk, dim(0.92), false);                 // a front leg
    bar(g, [x, 0, 0.19], [x, 0.9, 0.235], 0.017, 0.016, Wk, dim(0.92), true);                    // a back leg, up into the back
    bar(g, [x, 0.16, -0.175], [x, 0.16, 0.19], 0.009, 0.009, Wd, dim(0.85));                     // a side stretcher
  }
  bar(g, [-0.175, 0.2, -0.175], [0.175, 0.2, -0.175], 0.009, 0.009, Wd, dim(0.85));              // the front stretcher
  for (const [y, hh] of [[0.62, 0.03], [0.8, 0.045]]) { const z = 0.19 + (0.045 * (y - sy1)) / (0.9 - sy1);
    box(g, -0.175, y - hh, z - 0.011, 0.175, y + hh, z + 0.011, (f, p) => at(Wd, (p[0] + 0.175) / 0.35, 0.3 + (p[1] - y + hh) * 4), W1, 'zZY'); }
  return g;
}
/** a small upright picture (a tea glass on its saucer, the sugar bowl) as two crossed cards, each seen from both sides */
function crossed(name, w, h) {
  const g = new GB({ uv: true }), c = cell(name), hw = w / 2;
  const ux = p => at(c, (p[0] + hw) / w, (h - p[1]) / h), uz = p => at(c, (p[2] + hw) / w, (h - p[1]) / h);
  q4b(g, [-hw, 0, 0], [hw, 0, 0], [hw, h, 0], [-hw, h, 0], ux);
  q4b(g, [0, 0, hw], [0, 0, -hw], [0, h, -hw], [0, h, hw], uz);
  return g;
}

// ------------------------------------------------------------------------------------------------ the country bus stop
// A small steel shelter (four posts, a corrugated roof falling to the back with the company's fascia board, a pale green back wall with a
// poster and the route map, one side panel, a wooden bench) and, by the road, the stop's round sign on its post over a concrete foot with
// the timetable. In the old one's place and footprint (x along the road, the front, −z, to the road)
function busStop() {
  const g = new GB({ uv: true }), Sv = cell('fsteel'), Gr = cell('fgrey'), Wl = cell('bsWall'), Rf = cell('bsRoof'), Fa = cell('bsFascia');
  const Sl = cell('slats'), Wk = cell('woodd'), Sg = cell('bsSign'), Sb = cell('bsSignB'), Tt = cell('bsTT'), Wh = cell('fwhite');
  const xp = 1.45, zf = 0.0, zb = 0.82;
  for (const x of [-xp, xp]) { bar(g, [x, 0, zf], [x, 2.36, zf], 0.032, 0.032, Sv, W1, true); bar(g, [x, 0, zb], [x, 2.26, zb], 0.032, 0.032, Sv, W1, true); }
  // the roof (its top corrugated, falling 12 cm to the back), its fascia over the front
  { const x0 = -1.66, x1 = 1.66, z0 = -0.28, z1 = 1.04, yf = 2.42, yb = 2.30, t = 0.05, fh = t + 0.12, ctr = [0, (yf + yb) / 2 - t, (z0 + z1) / 2];
    const rUV = p => at(Rf, (p[0] - x0) / (x1 - x0), (p[2] - z0) / (z1 - z0)), sv = flatUV(Sv);
    q4c(g, ctr, [x0, yb, z1], [x1, yb, z1], [x1, yf, z0], [x0, yf, z0], rUV);                               // top
    q4c(g, ctr, [x0, yf - t, z0], [x1, yf - t, z0], [x1, yb - t, z1], [x0, yb - t, z1], flatUV(Gr), dim(0.75)); // under
    q4c(g, [0, yf - fh / 2, 0], [x1, yf - fh, z0], [x0, yf - fh, z0], [x0, yf, z0], [x1, yf, z0], p => at(Fa, (x1 - p[0]) / (x1 - x0), (yf - p[1]) / fh)); // the fascia board
    q4c(g, [0, yf - fh / 2, -1], [x0, yf - fh, z0 + 0.01], [x1, yf - fh, z0 + 0.01], [x1, yf - t, z0 + 0.01], [x0, yf - t, z0 + 0.01], sv, dim(0.7)); // …its back
    q4c(g, ctr, [x0, yb - t, z1], [x0, yf - t, z0], [x0, yf, z0], [x0, yb, z1], sv); q4c(g, ctr, [x1, yf - t, z0], [x1, yb - t, z1], [x1, yb, z1], [x1, yf, z0], sv);
    q4c(g, ctr, [x1, yb - t, z1], [x0, yb - t, z1], [x0, yb, z1], [x1, yb, z1], sv); }
  // the back wall (its inside painted, its outside plain), one side panel (at −x), both 12 cm off the ground
  q4(g, [xp, 0.12, zb], [-xp, 0.12, zb], [-xp, 2.2, zb], [xp, 2.2, zb], p => at(Wl, (xp - p[0]) / (2 * xp), (2.2 - p[1]) / 2.08));
  q4(g, [-xp, 0.12, zb + 0.02], [xp, 0.12, zb + 0.02], [xp, 2.2, zb + 0.02], [-xp, 2.2, zb + 0.02], flatUV(Gr), dim(0.8));
  q4b(g, [-xp, 0.12, zf + 0.06], [-xp, 0.12, zb - 0.02], [-xp, 2.2, zb - 0.02], [-xp, 2.2, zf + 0.06], p => at(Wl, 0.02 + 0.06 * (p[2] / zb), (2.2 - p[1]) / 2.08), W1, dim(0.85));
  // the bench: a slatted seat on two steel legs
  { const x0 = -1.1, x1 = 1.1, z0 = 0.36, z1 = 0.7, y0 = 0.42, y1 = 0.46;
    box(g, x0, y0, z0, x1, y1, z1, (f, p) => f === 'Y' ? at(Sl, (p[0] - x0) / (x1 - x0), (p[2] - z0) / (z1 - z0)) : at(Wk, (p[0] - x0) / (x1 - x0), 0.5), W1, 'zZxXyY', { y: dim(0.5) });
    for (const x of [-0.92, 0.92]) box(g, x - 0.02, 0, z0 + 0.03, x + 0.02, y0, z1 - 0.03, flatUV(Sv), W1, 'zZxX'); }
  // the stop's sign by the road: its foot, its post, the timetable on it, the round plate (its face along the road, both ways)
  { const sx = 2.3, sz = -0.2;
    box(g, sx - 0.18, 0, sz - 0.18, sx + 0.18, 0.13, sz + 0.18, flatUV(Wh), dim(0.78), 'zZxXY');
    bar(g, [sx, 0.13, sz], [sx, 2.62, sz], 0.032, 0.032, Sv, W1, true);
    box(g, sx - 0.02, 1.2, sz - 0.17, sx + 0.02, 1.82, sz + 0.17, (f, p) => f === 'x' || f === 'X' ? at(Tt, f === 'X' ? (sz + 0.17 - p[2]) / 0.34 : (p[2] - sz + 0.17) / 0.34, (1.82 - p[1]) / 0.62) : mid(Sv), W1, 'zZxXY');
    const R = 0.27, cy = 2.4, oc = [];
    for (let i = 0; i < 12; i++) { const a = (i / 12) * Math.PI * 2; oc.push([Math.cos(a), Math.sin(a)]); }
    for (const s of [-1, 1]) { const x = sx + s * 0.035, cl = s > 0 ? Sg : Sb;
      const P = c => [x, cy + c[1] * R, sz + c[0] * R * -s], uv = p => at(cl, 0.5 + (s > 0 ? -(p[2] - sz) : (p[2] - sz)) / (2 * R) * 0.98, 0.5 - (p[1] - cy) / (2 * R) * 0.98);
      for (let i = 0; i < 12; i++) tri(g, [x, cy, sz], P(oc[i]), P(oc[(i + 1) % 12]), uv); } }
  return g;
}

/** a built template, indexed: its corners welded where every attribute is the same (a quad's 6 vertices to 4, a smooth tyre's to one a
 *  grid point), so each stamp copies and transforms ~3× fewer vertices; in toArrays' own shape (n, P, N, C, U, O, I: GB.stamp's other
 *  templates have it too) */
function arrays(g) {
  const t = g.toArrays(), n = t.n, seen = new Map(), I = new Uint16Array(n), keep = [];
  for (let i = 0; i < n; i++) {
    const k = t.P[i * 3] + ',' + t.P[i * 3 + 1] + ',' + t.P[i * 3 + 2] + ',' + t.N[i * 3] + ',' + t.N[i * 3 + 1] + ',' + t.N[i * 3 + 2] + ',' + t.U[i * 2] + ',' + t.U[i * 2 + 1] + ',' + t.C[i * 3] + ',' + t.C[i * 3 + 1] + ',' + t.C[i * 3 + 2];
    let j = seen.get(k); if (j === undefined) { j = keep.length; seen.set(k, j); keep.push(i); } I[i] = j;
  }
  const m = keep.length, P = new Float32Array(m * 3), N = new Int8Array(m * 3), C = new Uint8Array(m * 3), U = new Float32Array(m * 2);
  keep.forEach((i, j) => { P.set(t.P.subarray(i * 3, i * 3 + 3), j * 3); N.set(t.N.subarray(i * 3, i * 3 + 3), j * 3); C.set(t.C.subarray(i * 3, i * 3 + 3), j * 3); U.set(t.U.subarray(i * 2, i * 2 + 2), j * 2); });
  return { n: m, P, N, C, U, O: null, I };
}
/** (main.js) builds the templates from the atlas's index (painted.js loadFurniture: J.cells in hi px, J.hiSize, J.geo); null: none. lite (phones,
 *  the embed: every tier but high): the bicycles lighter (coarser tyres, no frame ribbons: 216 triangles, not 368) */
export function setFurniture(J, lite = false) {
  if (!J) { FURN.T = null; return; }
  CELLS = J.cells; AW = J.hiSize[0]; AH = J.hiSize[1];
  const T = { vend: [0, 1, 2].map(v => arrays(vending(v, J.geo.vend))), bike: [0, 1, 2].map(k => arrays(bicycle(k, J.geo.bike, lite))), cart: arrays(simit()),
    table: arrays(table()), chair: arrays(chair()), glass: arrays(crossed('tea', 0.1, 0.12)), sugar: arrays(crossed('sugar', 0.1, 0.09)), stop: arrays(busStop()) };
  FURN.T = T;
}
/** each template's triangles and vertices (the tools: the budget) */
export const furnTris = () => FURN.T && Object.fromEntries(Object.entries(FURN.T).map(([k, v]) => [k, Array.isArray(v) ? v.map(t => [t.I.length / 3, t.n]) : [v.I.length / 3, v.n]])); // (triangles, vertices)
/** stamps a template into the chunk's furniture mesh (G.furn, indexed) under M, and lists it for the tools (G.furnList: its kind, where) */
export function stampF(G, T, M, kind) {
  if (!G.furn.cap) { G.furn.grow(8192); G.furn.growI(16384); } // (sized once for a busy street's chunk: no copies as it grows)
  G.furn.stamp(T, M);
  G.furnList.push(kind, M.elements[12], M.elements[13], M.elements[14]);
}
