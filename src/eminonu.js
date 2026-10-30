// Eminönü's square (step 35R-galata-2c): what stands round it east of Yeni Cami, as the real place has it (OpenStreetMap's places,
// © OpenStreetMap contributors; Wikimedia Commons photos, painted with Grok Imagine: assets/real/galata/CREDITS3.md):
// - the Hünkâr Kasrı, the Sultan's pavilion on Yeni Cami's south-east corner (OSM way 939052267): its tall ashlar base with the great
//   pointed arch of the passage through it, its upper floor in banded stone and brick with its shuttered and arched windows, its wide
//   eave and low hipped lead roof; and its long ramp gallery running south from it (way 528081263): an ashlar wall under a row of
//   timber gallery windows, its own eave and roof. (In the zone's data both were plain blocks, GR.blk 205 and 217: placeGalBlocks
//   leaves them to this module once its paintings are in, eminSkip)
// - the tomb garden's wall (Turhan Hatice Sultan's, way 1272081057): pale ashlar, a row of iron-grilled windows, a stone coping
// - the Nimet Abla lottery kiosk (node 14230444948) on the square east of the pavilion, its yellow gable, red Milli Piyango board
//   and blue awning over its counters, facing the square
// - the İETT bus shelters of the Eminönü İskele stops on Reşadiye Caddesi (nodes 11514094866, 11245684759): a slim anthracite frame
//   on round posts, a roof with the stop's name, a bench, a lit city-light poster at its end, the İETT stop sign on its pole
// The paintings are one sheet (assets/real/galata/eminonu1*: its albedo and its glow at half scale), drawn by a clone of the atlas's
// material (its program: nothing new compiles) with its own shadow twin (main.js M.atlasEm, as the dolmuş's); the plain parts (roofs,
// eaves, frames, posts) in the props' colour material. Without the sheet nothing here is built and the square is as it was.
import * as THREE from 'three';
import { ASSETS, orNull } from './painted.js';
import { galL, galWorld } from './path.js';
import { galSect } from './galata.js';
import { C, mulC } from './util.js';

/** the paintings' cells (setEminonu: null until they are in, and if they failed) */
export const EMIN = { cells: null };
export function setEminonu(e) { EMIN.cells = e ? e.cells : null; }

/** Loads the sheet: assets/real/galata/eminonu1.json, its albedo and its glow ('hi' 2048 wide, 'lo' half: phones, the embed), each checked
 *  whole (bytes, size); the cells' uv (the bitmaps uploaded unflipped: v runs down, a cell's bottom at v0). Null (never rejects) on any
 *  failure */
export async function loadEminonu(tier, timeoutMs = 15000) {
  const base = ASSETS + 'real/galata/';
  return orNull((async () => {
    const r = await fetch(base + 'eminonu1.json');
    if (!r.ok) throw new Error('eminonu1.json ' + r.status);
    const J = await r.json(), file = J.files && J.files[tier] ? tier : 'hi', F = J.files[file], B = J.bytes && J.bytes[file], S = J.size && J.size[file];
    if (!F || !B || !S || !J.tiles || !J.m) throw new Error('nothing listed');
    const img = async k => {
      const ri = await fetch(base + F[k]); if (!ri.ok) throw new Error(F[k] + ' ' + ri.status);
      const blob = await ri.blob(); // (checked whole: a truncated image decodes without complaint)
      if (blob.size !== B[k]) throw new Error(F[k] + ' is ' + blob.size + ' bytes, not ' + B[k]);
      const im = await createImageBitmap(blob, { premultiplyAlpha: 'none' });
      if (im.width !== S[k][0] || im.height !== S[k][1]) { im.close(); throw new Error(F[k] + ' has the wrong size'); }
      return im;
    };
    const [a, e] = await Promise.all([img('a'), img('e')]);
    const W = S.a[0], H = S.a[1], cells = {};
    for (const [n, t] of Object.entries(J.tiles)) {
      const [x, y, w, h] = t, m = J.m[n]; if (!(w > 0 && h > 0 && m)) continue;
      cells[n] = { u0: x + 0.5 / W, u1: x + w - 0.5 / W, v0: y + h - 0.5 / H, v1: y + 0.5 / H, w: m[0], h: m[1] };
    }
    for (const n of NEED) if (!cells[n]) { a.close(); e.close(); throw new Error('no cell ' + n); }
    return { a, e, cells, tier: file };
  })(), timeoutMs, "Eminönü's square's paintings unavailable, keeping the square as it was:");
}
const NEED = ['emk_nw', 'emk_ne', 'emk_ash', 'emk_ramp', 'emk_gwall', 'emk_nimet', 'emk_ad', 'emk_name', 'emk_sign'];

// ---- the places (the zone's frame, E', N' m: ~/cdtest/g37/scripts/feats.py, through gen_galata.py's fit; l: m into the zone)
const KASRI = { blk: 205, l: 1194.4, p: [[-489.4, -1023.3], [-484.2, -1019.8], [-480.4, -1017.2], [-470.0, -1010.9], [-463.8, -1006.7], [-470.3, -994.1], [-488.7, -1004.7], [-490.1, -1005.6], [-499.6, -1014.3]] };
const RAMP = { blk: 217, l: 1200.5, p: [[-480.4, -1017.2], [-470.0, -1010.9], [-477.6, -1055.1], [-479.9, -1057.8], [-487.1, -1056.3]] };
const GWALL = { l: 1175.0, p: [[-531.0, -1041.5], [-512.0, -1046.7], [-506.1, -1048.3], [-503.0, -1048.5], [-500.8, -1046.9], [-497.5, -1040.0], [-489.4, -1023.3]] };
const NIMET = { l: 1221.8, E: -456.2, N: -1014.6 };
/** the bus stops: l, the side (1: our kerb; −1: beyond the far pavement), u for the far one */
const STOPS = [{ l: 1421.9, side: 1 }, { l: 1412.0, side: -1, u: -33.8 }];
/** the zone's blocks this module builds instead (GR.blk: the pavilion and its ramp), once its paintings are in */
export function eminSkip(b) { return !!EMIN.cells && ((b.id === KASRI.blk && Math.abs(b.l - KASRI.l) < 1) || (b.id === RAMP.blk && Math.abs(b.l - RAMP.l) < 1)); }
/** the square's trees (chunks.js placeGalSquares) keep clear of the kiosk (E', N' in the zone's frame) */
export function eminFree(E, N) { return !EMIN.cells || Math.hypot(E - NIMET.E, N - NIMET.N) > 6.5; }

// ---- colours of the plain parts
const LEAD = C('#7a838c'), LEAD_D = C('#5d656e'), SOFFIT = C('#4a3a2e'), FASCIA = C('#3b2f27'), ASHLAR = C('#d9d2c2'), COPING = C('#c9c3b6');
const ANTH = C('#3c4046'), ANTH_L = C('#565b62'), ROOF_U = C('#c4c7cb'), WOOD = C('#9a6a3e'), YELLOW = C('#dca93c'), KBLUE = C('#2c6fb8'), KROOF = C('#4a4d52');
const _q = [0, 0];

/** a wall along the ground from a to b (chunk-local [x, z]) from y0 to y1, its face out (the side `out` points to: [x, z]), painted with
 *  `cell` from u-fraction ua to ub across (the painting's left at a as seen from outside) and v-fraction va (bottom) to vb (top) up */
function wallQ(g, a, b, y0, y1, out, cell, ua, ub, va = 0, vb = 1, lit = 0) {
  const dx = b[0] - a[0], dz = b[1] - a[1], fwd = -dz * out[0] + dx * out[1] > 0; // (quad(a, b, …)'s normal is (−dz, dx))
  const U = (f) => cell.u0 + (cell.u1 - cell.u0) * f, V = (f) => cell.v0 + (cell.v1 - cell.v0) * f;
  const uv = { u0: U(fwd ? ua : ub), u1: U(fwd ? ub : ua), v0: V(va), v1: V(vb) };
  const p = fwd ? a : b, q = fwd ? b : a; g.litV = lit;
  g.quad([p[0], y0, p[1]], [q[0], y0, q[1]], [q[0], y1, q[1]], [p[0], y1, p[1]], null, uv); g.litV = 0;
}
/** the same wall tiled with a cell tw m wide and th m tall (whole tiles and the last part of one), from y0 up to y1 */
function wallTiled(g, a, b, y0, y1, out, cell, tw, th, lit = 0) {
  const L = Math.hypot(b[0] - a[0], b[1] - a[1]), nx = Math.max(1, Math.round(L / tw)), sw = L / nx; // (whole tiles, stretched to fit)
  for (let i = 0; i < nx; i++) {
    const p = [a[0] + ((b[0] - a[0]) * i) / nx, a[1] + ((b[1] - a[1]) * i) / nx], q = [a[0] + ((b[0] - a[0]) * (i + 1)) / nx, a[1] + ((b[1] - a[1]) * (i + 1)) / nx];
    for (let y = y0; y < y1 - 0.01; y += th) { const yt = Math.min(y1, y + th); wallQ(g, p, q, y, yt, out, cell, 0, 1, 0, (yt - y) / th, lit); }
  }
  return sw;
}
/** the outline's middle and each edge's outward direction (chunk-local; works for either winding) */
function outward(P) {
  let cx = 0, cz = 0; for (const [x, z] of P) { cx += x / P.length; cz += z / P.length; }
  let ar = 0; for (let i = 0; i < P.length; i++) { const [x0, z0] = P[i], [x1, z1] = P[(i + 1) % P.length]; ar += x0 * z1 - x1 * z0; }
  return { cx, cz, out: (i) => { const a = P[i], b = P[(i + 1) % P.length], dx = b[0] - a[0], dz = b[1] - a[1], L = Math.hypot(dx, dz) || 1, s = ar > 0 ? -1 : 1; return [(s * -dz) / L, (s * dx) / L]; } };
}
/** an oriented box round the outline along the direction (ax, az): its middle, half length along, half width across */
function obb(P, ax, az) {
  let a0 = Infinity, a1 = -Infinity, b0 = Infinity, b1 = -Infinity;
  for (const [x, z] of P) { const s = x * ax + z * az, t = -x * az + z * ax; a0 = Math.min(a0, s); a1 = Math.max(a1, s); b0 = Math.min(b0, t); b1 = Math.max(b1, t); }
  const sm = (a0 + a1) / 2, tm = (b0 + b1) / 2;
  return { x: sm * ax - tm * az, z: sm * az + tm * ax, hl: (a1 - a0) / 2, hw: (b1 - b0) / 2, ax, az };
}
/** a wide eave and a low hipped roof over an oriented box (obb) grown by `ov` m: the eave's dark timber soffit and fascia, the lead roof's
 *  four faces up to its ridge, `rise` m over the eave */
function hipRoof(c, O, y, ov, rise) {
  const { ax, az } = O, hl = O.hl + ov, hw = O.hw + ov, bx = -az, bz = ax;
  const P = (s, t, yy) => [O.x + ax * s + bx * t, yy, O.z + az * s + bz * t];
  const A = P(-hl, -hw, y), B = P(hl, -hw, y), Cc = P(hl, hw, y), D = P(-hl, hw, y), ft = 0.32;
  const r = Math.max(0, hl - hw), R0 = P(-r, 0, y + ft + rise), R1 = P(r, 0, y + ft + rise);
  // (its soffit, facing down; its fascia round the edge; the roof's faces, each facing out and up)
  const up = (p, d) => [p[0], p[1] + d, p[2]];
  c.quad(A, B, Cc, D, SOFFIT); // (facing down)
  const rim = [A, B, Cc, D];
  for (let i = 0; i < 4; i++) { const p = rim[i], q = rim[(i + 1) % 4]; c.quad(q, p, up(p, ft), up(q, ft), FASCIA); }
  const a = up(A, ft), b = up(B, ft), cc = up(Cc, ft), d = up(D, ft);
  c.quad(b, a, R0, R1, LEAD); c.quad(d, cc, R1, R0, LEAD); // (the long faces)
  c.quad(cc, b, R1, R1, LEAD_D); c.quad(a, d, R0, R0, LEAD_D); // (the hips' ends)
}
/** a footprint's walls from y0 to y1 by face: paint(i, a, b, out) draws edge i (or returns false: plain ashlar, tiled) */
function walls(g, P, y0, y1, paint) {
  const O = outward(P), A = EMIN.cells.emk_ash;
  for (let i = 0; i < P.length; i++) { const a = P[i], b = P[(i + 1) % P.length], out = O.out(i); if (!paint(i, a, b, out)) wallTiled(g, a, b, y0, y1, out, A, A.w, A.h); }
  return O;
}

/** the Hünkâr Kasrı: its walls (the north-west side as its painting, edges 5–7, the painting running from its north-east end on the left;
 *  the north-east end's upper floor and corbels over ashlar; the south-east side as the north-west's painting, the arch at its passage;
 *  the south-west end plain ashlar) to the eave 15.6 m over the square, the eave 1.8 m out, the low hipped lead roof */
function kasri(G, P, yg) {
  const a = G.emin, c = G.color, K = EMIN.cells, HT = 15.6, y0 = yg - 0.3, y1 = yg + HT;
  const L = (i) => Math.hypot(P[(i + 1) % P.length][0] - P[i][0], P[(i + 1) % P.length][1] - P[i][1]);
  const nwL = L(5) + L(6) + L(7), seL = L(0) + L(1) + L(2) + L(3);
  walls(a, P, y0, y1, (i, p, q, out) => {
    if (i >= 5 && i <= 7) { let s = 0; for (let k = 5; k < i; k++) s += L(k); wallQ(a, p, q, y0, y1, out, K.emk_nw, s / nwL, (s + L(i)) / nwL); return true; }
    if (i <= 3) { let s = 0; for (let k = 3; k > i; k--) s += L(k); wallQ(a, p, q, y0, y1, out, K.emk_nw, (s + L(i)) / seL, s / seL); return true; } // (mirrored: the arch at its south-west end, over the passage's street)
    if (i === 4) { const yn = y1 - K.emk_ne.h; wallQ(a, p, q, yn, y1, out, K.emk_ne, 0, 1); wallTiled(a, p, q, y0, yn, out, K.emk_ash, K.emk_ash.w, K.emk_ash.h); return true; }
    return false;
  });
  // (its roof over the box along its length: the north-west side's direction)
  const dx = P[7][0] - P[5][0], dz = P[7][1] - P[5][1], l = Math.hypot(dx, dz);
  c.setM(IDENT); hipRoof(c, obb(P, dx / l, dz / l), y1, 1.8, 3.4);
}
/** its ramp gallery: the long sides as their painting, a bay every ~8 m (the timber gallery windows under the eave), the south end
 *  ashlar, the end against the pavilion not drawn; the eave 2 m out, its roof */
function ramp(G, P, yg) {
  const a = G.emin, c = G.color, K = EMIN.cells, HT = 12.4, y0 = yg - 0.3, y1 = yg + HT;
  walls(a, P, y0, y1, (i, p, q, out) => {
    if (i === 0) return true; // (against the pavilion)
    if (i === 1 || i === 4) { wallTiled(a, p, q, y0, y1, out, K.emk_ramp, K.emk_ramp.w, HT + 0.3); return true; }
    return false;
  });
  const dx = P[2][0] - P[1][0], dz = P[2][1] - P[1][1], l = Math.hypot(dx, dz);
  c.setM(IDENT); hipRoof(c, obb(P, dx / l, dz / l), y1, 2.0, 2.4);
}
/** the tomb garden's wall along its line: 2.9 m of ashlar with its grilled windows, both faces, a sloping coping */
function gardenWall(G, P, yg) {
  const a = G.emin, c = G.color, K = EMIN.cells.emk_gwall, H = K.h, T = 0.3;
  c.setM(IDENT);
  for (let i = 0; i < P.length - 1; i++) {
    const p = P[i], q = P[i + 1], dx = q[0] - p[0], dz = q[1] - p[1], Ln = Math.hypot(dx, dz) || 1, nx = -dz / Ln, nz = dx / Ln;
    const pa = [p[0] + nx * T, p[1] + nz * T], qa = [q[0] + nx * T, q[1] + nz * T], pb = [p[0] - nx * T, p[1] - nz * T], qb = [q[0] - nx * T, q[1] - nz * T];
    wallTiled(a, pa, qa, yg - 0.3, yg + H, [nx, nz], K, K.w, H + 0.3); wallTiled(a, pb, qb, yg - 0.3, yg + H, [-nx, -nz], K, K.w, H + 0.3);
    const y = yg + H, ce = 0.08; // (the coping: a ridge over the wall, its two slopes overhanging a little)
    const o1 = [p[0] + nx * (T + ce), y, p[1] + nz * (T + ce)], o2 = [q[0] + nx * (T + ce), y, q[1] + nz * (T + ce)], r1 = [p[0], y + 0.22, p[1]], r2 = [q[0], y + 0.22, q[1]];
    const i1 = [p[0] - nx * (T + ce), y, p[1] - nz * (T + ce)], i2 = [q[0] - nx * (T + ce), y, q[1] - nz * (T + ce)];
    c.quad(o1, o2, r2, r1, COPING); c.quad(i2, i1, r1, r2, COPING);
  }
}
/** the Nimet Abla kiosk at (x, z), its front facing (fx, fz): its painted front (its gable cut out of the sky), its yellow sides and back,
 *  a flat roof behind the gable, its blue awning out over the counters; the counters and the sign board lit (a shop's light) */
function nimet(G, x, z, yg, fx, fz) {
  const a = G.emin, c = G.color, K = EMIN.cells.emk_nimet, W = K.w, D = 2.6, HB = 5.7, rx = fz, rz = -fx; // (the right of one facing it)
  const P = (s, t) => [x + rx * s + fx * t, z + rz * s + fz * t]; // (s across, t out to the front)
  const fl = P(-W / 2, D / 2), fr = P(W / 2, D / 2), bl = P(-W / 2, -D / 2), br = P(W / 2, -D / 2);
  wallQ(a, fl, fr, yg, yg + K.h, [fx, fz], K, 0, 1, 0, 1, 6);
  c.setM(IDENT);
  const Q = (p, q, y0, y1, col) => c.quad([p[0], y0, p[1]], [q[0], y0, q[1]], [q[0], y1, q[1]], [p[0], y1, p[1]], col);
  Q(fr, br, yg - 0.2, yg + HB, YELLOW); Q(bl, fl, yg - 0.2, yg + HB, YELLOW); Q(br, bl, yg - 0.2, yg + HB, mulC(YELLOW, 0.82));
  c.quad([fl[0], yg + HB, fl[1]], [fr[0], yg + HB, fr[1]], [br[0], yg + HB, br[1]], [bl[0], yg + HB, bl[1]], KROOF);
  // (the awning: from the front's painted awning out over the counters, a valance along its edge)
  const ya = yg + 3.55, out = 1.15, A0 = P(-W / 2 + 0.25, D / 2 + 0.02), A1 = P(W / 2 - 0.25, D / 2 + 0.02), B0 = P(-W / 2 + 0.25, D / 2 + out), B1 = P(W / 2 - 0.25, D / 2 + out);
  c.quad([B0[0], ya - 0.42, B0[1]], [B1[0], ya - 0.42, B1[1]], [A1[0], ya, A1[1]], [A0[0], ya, A0[1]], KBLUE);
  c.quad([A0[0], ya, A0[1]], [A1[0], ya, A1[1]], [B1[0], ya - 0.42, B1[1]], [B0[0], ya - 0.42, B0[1]], mulC(KBLUE, 0.7));
  c.quad([B0[0], ya - 0.72, B0[1]], [B1[0], ya - 0.72, B1[1]], [B1[0], ya - 0.42, B1[1]], [B0[0], ya - 0.42, B0[1]], mulC(KBLUE, 0.9));
}
/** an İETT bus shelter at (x, z), its front facing (fx, fz): round anthracite posts, the back's frame (its glass is all but invisible: its
 *  rails and mullions), a thin roof sloping back with the stop's name along its front, a slatted bench, the lit city-light poster at its
 *  far end (both faces), the İETT stop sign on its pole */
function shelter(G, x, z, yg, fx, fz) {
  const a = G.emin, c = G.color, K = EMIN.cells, L = 4.6, D = 1.5, H = 2.45, rx = fz, rz = -fx; // (rx, rz: the right of one facing it)
  const P = (s, t, y) => [x + rx * s + fx * t, y, z + rz * s + fz * t];
  c.setM(IDENT);
  // posts: two at the back, two at the front corners (smooth), rails along the back at three heights
  for (const s of [-L / 2 + 0.1, 0, L / 2 - 0.1]) { const p = P(s, -D / 2 + 0.08, yg); c.cyl(p[0], yg, p[2], 0.05, 0.05, H, 10, ANTH, false); }
  for (const s of [-L / 2 + 0.1, L / 2 - 0.1]) { const p = P(s, D / 2 - 0.15, yg); c.cyl(p[0], yg, p[2], 0.045, 0.045, H + 0.1, 10, ANTH, false); }
  const bar = (s0, s1, t, y, h, col) => { const p0 = P(s0, t, y), p1 = P(s1, t, y); c.quad(p0, p1, [p1[0], y + h, p1[2]], [p0[0], y + h, p0[2]], col); c.quad(p1, p0, [p0[0], y + h, p0[2]], [p1[0], y + h, p1[2]], col); };
  for (const y of [0.12, 1.05, 2.25]) bar(-L / 2 + 0.1, L / 2 - 0.1, -D / 2 + 0.08, yg + y, 0.05, ANTH_L);
  for (const s of [-L / 4, L / 4]) { const p0 = P(s, -D / 2 + 0.08, yg + 0.12); c.quad(p0, P(s + 0.04, -D / 2 + 0.08, yg + 0.12), P(s + 0.04, -D / 2 + 0.08, yg + 2.3), P(s, -D / 2 + 0.08, yg + 2.3), ANTH_L); }
  // the roof: its top, its underside, its front with the name board, its sides
  const yr = yg + H, r0 = P(-L / 2 - 0.15, D / 2 + 0.25, yr + 0.08), r1 = P(L / 2 + 0.15, D / 2 + 0.25, yr + 0.08), r2 = P(L / 2 + 0.15, -D / 2 - 0.1, yr + 0.2), r3 = P(-L / 2 - 0.15, -D / 2 - 0.1, yr + 0.2);
  const dn = (p, d) => [p[0], p[1] - d, p[2]];
  c.quad(r0, r1, r2, r3, ANTH); c.quad(dn(r1, 0.12), dn(r0, 0.12), dn(r3, 0.12), dn(r2, 0.12), ROOF_U);
  c.quad(dn(r0, 0.12), dn(r1, 0.12), r1, r0, ANTH); c.quad(dn(r2, 0.12), dn(r3, 0.12), r3, r2, ANTH); c.quad(dn(r3, 0.12), dn(r0, 0.12), r0, r3, ANTH); c.quad(dn(r1, 0.12), dn(r2, 0.12), r2, r1, ANTH);
  const nb = K.emk_name, n0 = P(-nb.w / 2, D / 2 + 0.27, yr - 0.32), n1 = P(nb.w / 2, D / 2 + 0.27, yr - 0.32); a.litV = 0;
  a.quad(n0, n1, [n1[0], yr + 0.03, n1[2]], [n0[0], yr + 0.03, n0[2]], null, nb);
  // the bench: three slats on two legs
  for (const s of [-1.2, 1.2]) { const p = P(s, -D / 2 + 0.35, yg); c.cyl(p[0], yg, p[2], 0.035, 0.035, 0.45, 8, ANTH, false); }
  for (let k = 0; k < 3; k++) { const t = -D / 2 + 0.2 + k * 0.13, y = yg + 0.45; const p0 = P(-1.5, t, y), p1 = P(1.5, t, y), p2 = P(1.5, t + 0.1, y), p3 = P(-1.5, t + 0.1, y); c.quad(p3, p2, p1, p0, WOOD); c.quad(p0, p1, [p1[0], y - 0.035, p1[2]], [p0[0], y - 0.035, p0[2]], mulC(WOOD, 0.8)); }
  // the city-light poster at its far end, across the shelter's end: a slim lit box on two feet (both faces), its frame
  const ad = K.emk_ad, s = L / 2 + 0.55, yt = yg + 0.35 + ad.h;
  const g0 = P(s + 0.08, -ad.w / 2, yg + 0.35), g1 = P(s + 0.08, ad.w / 2, yg + 0.35), h0 = P(s - 0.08, -ad.w / 2, yg + 0.35), h1 = P(s - 0.08, ad.w / 2, yg + 0.35);
  a.quad(g1, g0, [g0[0], yt, g0[2]], [g1[0], yt, g1[2]], null, ad); a.quad(h0, h1, [h1[0], yt, h1[2]], [h0[0], yt, h0[2]], null, ad);
  const fr = (p, q, y0, y1) => { c.quad(p, q, [q[0], y1, q[2]], [p[0], y1, p[2]], ANTH); c.quad(q, p, [p[0], y1, p[2]], [q[0], y1, q[2]], ANTH); };
  fr(P(s - 0.09, -ad.w / 2 - 0.06, yg), P(s + 0.09, -ad.w / 2 - 0.06, yg), yg, yt + 0.06); fr(P(s + 0.09, ad.w / 2 + 0.06, yg), P(s - 0.09, ad.w / 2 + 0.06, yg), yg, yt + 0.06);
  { const p0 = P(s - 0.09, -ad.w / 2 - 0.06, yt), p1 = P(s - 0.09, ad.w / 2 + 0.06, yt), p2 = P(s + 0.09, ad.w / 2 + 0.06, yt), p3 = P(s + 0.09, -ad.w / 2 - 0.06, yt);
    c.quad(p0, p1, [p1[0], yt + 0.08, p1[2]], [p0[0], yt + 0.08, p0[2]], ANTH); c.quad([p0[0], yt + 0.08, p0[2]], [p1[0], yt + 0.08, p1[2]], [p2[0], yt + 0.08, p2[2]], [p3[0], yt + 0.08, p3[2]], ANTH); }
  // the stop sign on its pole by the kerb at the shelter's near end (both faces)
  const sg = K.emk_sign, ps = P(-L / 2 - 0.7, D / 2 + 0.3, yg); c.cyl(ps[0], yg, ps[2], 0.04, 0.04, 3.05, 8, ANTH, false);
  const ya = yg + 2.25, s0 = P(-L / 2 - 0.7 - sg.w / 2, D / 2 + 0.36, ya), s1 = P(-L / 2 - 0.7 + sg.w / 2, D / 2 + 0.36, ya);
  a.quad(s0, s1, [s1[0], ya + sg.h, s1[2]], [s0[0], ya + sg.h, s0[2]], null, sg); // (to the road)
  const t0 = P(-L / 2 - 0.7 - sg.w / 2, D / 2 + 0.33, ya), t1 = P(-L / 2 - 0.7 + sg.w / 2, D / 2 + 0.33, ya);
  a.quad(t1, t0, [t0[0], ya + sg.h, t0[2]], [t1[0], ya + sg.h, t1[2]], null, sg); // (and back)
}
const IDENT = new THREE.Matrix4();

/** the square's buildings and furniture in a chunk (each built whole by the chunk its anchor falls in, where the zone is: world.galOn),
 *  into G.emin (the sheet's material) and G.color; road(s), rwAt(s); (ox, oz) the chunk's origin; path the world's road */
export function* placeEminonu(world, G, s0, s1, road, rwAt, ox, oz, path) {
  if (!EMIN.cells) return;
  const l0 = galL(s0); if (l0 !== l0) return;
  const zs = s0 - l0, l1 = s1 - zs; if (l1 < 1150 || l0 > 1450) return;
  const loc = (E, N) => { galWorld(zs, E, N, _q); return [_q[0] - ox, _q[1] - oz]; };
  G.emin.setM(IDENT); G.color.setM(IDENT);
  const at = (l) => l >= l0 && l < l1 && world.galOn(zs + l);
  // (step 35P: under the painted plates the pavilion, its ramp and the garden's wall are part of their proxy: its own GBs (chunks.js G.prx))
  const X = G.prx, e0 = G.emin, c0 = G.color, px = on => { if (!X) return; G.emin = on ? X.e : e0; G.color = on ? X.w : c0; G.emin.setM(IDENT); G.color.setM(IDENT); };
  px(true);
  try {
    if (at(KASRI.l)) { const yg = road(zs + KASRI.l); G.emin.aoY0 = yg; kasri(G, KASRI.p.map(([E, N]) => loc(E, N)), yg); G.emin.aoY0 = NaN; yield; }
    if (at(RAMP.l)) { const yg = road(zs + RAMP.l); ramp(G, RAMP.p.map(([E, N]) => loc(E, N)), yg); yield; }
    if (at(GWALL.l)) { const yg = road(zs + GWALL.l); gardenWall(G, GWALL.p.map(([E, N]) => loc(E, N)), yg); yield; }
  } finally { px(false); }
  if (at(NIMET.l)) {
    // (facing the square: towards the road, square to it there)
    const s = zs + NIMET.l, f = path.at(s, {}), p = loc(NIMET.E, NIMET.N), yg = road(s) + 0.15;
    nimet(G, p[0], p[1], yg, -f.rx, -f.rz); yield;
  }
  const Gs = {};
  for (const S of STOPS) {
    if (!at(S.l)) continue;
    const s = zs + S.l, f = path.at(s, {}), rw = rwAt(s), g = galSect(S.l, rw, Gs);
    const u = S.side > 0 ? rw + 0.15 + 1.25 : Math.min(S.u, g.p1 - 1.1), sd = S.side > 0 ? 1 : -1, yg = road(s) + 0.15;
    // (its front to the road: facing −sd across it)
    shelter(G, f.x + f.rx * u - ox, f.z + f.rz * u - oz, yg, -sd * f.rx, -sd * f.rz); yield;
  }
}
