// The real Galata zone as painted plates (step 35P): each view along the route is ONE anime painting (FLUX.2 [klein] 4B as an
// instruction editor on the game's own render of a rough model of the real place: assets/real/galata/CREDITS5.md), projected back onto
// that model (the proxy: Karaköy's and Eminönü's blocks on their OpenStreetMap outlines, Yeni Cami and Eminönü's pavilion, the awnings,
// plants and signs along their shops, the old city's ~6,000 buildings on the real ground, the far ring) from its own camera. The two
// plates round the camera paint the proxy together, cross-faded by where the camera is along the road; each paints only what its own
// camera saw (its depth of the proxy, rendered once per plate) and says less where it saw a surface edge-on. The road, its rails,
// railings, lamps and masts, the trees, the tram, people, boats, the sea, the sky and its clouds and the car stay the game's own 3D; the
// shops' windows keep their rooms behind the glass. By the hour the noon plates are relit as the band and the landmark cards are, and
// at night the night plates (the same paintings edited to night) fade in. Landscape screens take the L set, portrait phones the P set
// (taller: the near facades' tops). Two active plates, two more fetched ahead, the rest let go. Without the plates' index the zone is
// built exactly as before (chunks.js reads PLATES.on when it builds); without a plate it falls back to the built look.
import * as THREE from 'three';
import { UNGRADE, gradeUniforms, ASSETS, orNull, BAND_TONES, paintSky } from './painted.js';
import { galL, zoneWeight, galFrame } from './path.js';
import { TOD } from './sky.js';
import { PROP_DEPTH } from './materials.js';

/** on: the plates' index is in (chunks.js builds Galata's proxy split from it on); layout: Galata's chunks also build the painter's layout's
 *  own extras (every seen wall's storeys to the ground: never drawn in a drive; the tools' P.setLayout) */
export const PLATES = { on: false, layout: false };
/** the layer the proxy's meshes are on as well (the plates' depth maps, the tools' masks) */
export const PX_LAYER = 5;
const BASE = ASSETS + 'real/galata/plates1/';
const DFAR = 8192; // (the depth maps' far end, m)

/** The plates' index (assets/real/galata/plates1/plates1.json): its two sets (L landscape, P portrait: fov, aspect, each tier's size)
 *  and its stops along the route (each: its name, l (m into the zone), each set's camera in the zone's frame (c: E', N', y; f: its
 *  forward, u: its up, in E', N', y) and files (each set's tiers 'hi', 'lo' and night 'nhi', 'nlo': [file, bytes])). Checked whole;
 *  null (never rejects) on any failure: the zone is then built as before */
export async function loadPlates(timeoutMs = 15000) {
  return orNull((async () => {
    const r = await fetch(BASE + 'plates1.json');
    if (!r.ok) throw new Error('plates1.json ' + r.status);
    const J = await r.json(), bad = w => { throw new Error(w); };
    if (J.v !== 1 || !J.sets || !Array.isArray(J.stops) || J.stops.length < 2) bad('not a plate index');
    for (const k of ['L', 'P']) { const S = J.sets[k]; if (!S || !(S.fov > 0) || !(S.asp > 0) || !S.px || !S.px.hi || !S.px.lo) bad('set ' + k + ' incomplete'); }
    let pl = -Infinity;
    for (const p of J.stops) {
      if (!(p.l > pl) || !p.files) bad('stop ' + p.n + ' out of order'); pl = p.l;
      for (const k of ['L', 'P']) {
        const q = p[k], F = p.files[k];
        if (!q || !q.c || q.c.length !== 3 || !q.f || q.f.length !== 3 || !q.u || q.u.length !== 3 || !F) bad('stop ' + p.n + ' ' + k + ' incomplete');
        for (const t of ['hi', 'lo']) if (!F[t] || typeof F[t][0] !== 'string' || !(F[t][1] > 0)) bad('stop ' + p.n + ' ' + k + ' ' + t + ' missing');
      }
    }
    return J;
  })(), timeoutMs, "Galata's painted plates unavailable, keeping its built look:");
}

// ---- the old city's mass (the plates' far proxy): GALATA-3's (5c882da) data, assets/real/galata/mass1.* (map data © OpenStreetMap
// contributors; the ground: AWS Terrain Tiles, SRTM: CREDITS4.md), drawn only under the plates

/** Loads the far city's buildings: 'hi' (~6,200 of them) or 'lo' (phones: ~3,900). Checked whole; null (never rejects) on any failure:
 *  the plates then paint the far ring alone */
export async function loadMass(tier, timeoutMs = 15000) {
  const base = ASSETS + 'real/galata/';
  return orNull((async () => {
    const r = await fetch(base + 'mass1.json');
    if (!r.ok) throw new Error('mass1.json ' + r.status);
    const J = await r.json(), file = J.files && J.files[tier] ? tier : 'hi', name = J.files && J.files[file], bytes = J.bytes && J.bytes[file];
    if (!name || !(bytes > 16)) throw new Error('nothing listed');
    const q = await fetch(base + name); if (!q.ok) throw new Error(name + ' ' + q.status);
    const b = await q.arrayBuffer(); if (b.byteLength !== bytes) throw new Error(name + ' is ' + b.byteLength + ' bytes, not ' + bytes);
    return parseMass(b);
  })(), timeoutMs, "Galata's far city unavailable, its plates on the far ring alone:");
}
/** the binary's buildings (struct of arrays), minarets and trees, checked against its length */
function parseMass(buf) {
  const dv = new DataView(buf), n = buf.byteLength;
  if (n < 20 || dv.getUint8(0) !== 71 || dv.getUint8(1) !== 77 || dv.getUint8(2) !== 48 || dv.getUint8(3) !== 49) throw new Error('not a far city');
  const nB = dv.getUint32(4, true), nV = dv.getUint32(8, true), nM = dv.getUint32(12, true), nT = dv.getUint32(16, true);
  if (20 + nB * 12 + nV * 4 + nM * 8 + nT * 8 !== n) throw new Error('its parts and its length disagree');
  const B = { n: new Uint8Array(nB), kind: new Uint8Array(nB), seg: new Uint8Array(nB), lv: new Uint8Array(nB), roof: new Uint8Array(nB), tint: new Uint8Array(nB), base: new Float32Array(nB), top: new Float32Array(nB), mask: new Uint32Array(nB) };
  let o = 20, nv = 0;
  for (let i = 0; i < nB; i++, o += 12) {
    const k = dv.getUint8(o); if (k < 3 || k > 32) throw new Error('a building of ' + k + ' corners');
    B.n[i] = k; const kb = dv.getUint8(o + 1); B.kind[i] = kb & 7; B.seg[i] = (kb >> 3) || 15; B.lv[i] = dv.getUint8(o + 2); const rt = dv.getUint8(o + 3); B.roof[i] = rt & 3; B.tint[i] = rt >> 2;
    B.base[i] = dv.getInt16(o + 4, true) / 10; B.top[i] = dv.getInt16(o + 6, true) / 10; B.mask[i] = dv.getUint32(o + 8, true); nv += k;
  }
  if (nv !== nV) throw new Error('its corners miscounted');
  const V = new Float32Array(nV * 2);
  for (let i = 0; i < nV * 2; i++, o += 2) V[i] = dv.getInt16(o, true) / 10;
  const Mn = new Float32Array(nM * 5);
  for (let i = 0; i < nM; i++, o += 8) { Mn[i * 5] = dv.getInt16(o, true) / 10; Mn[i * 5 + 1] = dv.getInt16(o + 2, true) / 10; Mn[i * 5 + 2] = dv.getInt16(o + 4, true) / 10; Mn[i * 5 + 3] = dv.getUint8(o + 6); Mn[i * 5 + 4] = dv.getUint8(o + 7) / 10; }
  const Tr = new Float32Array(nT * 5); // (the trees: E', N', ground, height, crown radius)
  for (let i = 0; i < nT; i++, o += 8) { Tr[i * 5] = dv.getInt16(o, true) / 10; Tr[i * 5 + 1] = dv.getInt16(o + 2, true) / 10; Tr[i * 5 + 2] = dv.getInt16(o + 4, true) / 10; Tr[i * 5 + 3] = dv.getUint8(o + 6) / 10; Tr[i * 5 + 4] = dv.getUint8(o + 7) / 10; }
  return { nB, nV, nM, nT, B, V, Mn, Tr };
}
// (its surfaces' codes in aF.w: a wall's kind + 8 · its colour; a flat roof 1000 + colour, a hipped one 2000 + colour, a mosque's dome
// 3000, a minaret's shaft 4000, its cone 5000, its balcony 6000, a tree's crown 7000 + its shade: the layout's look, the painter's input)
const MK = { flat: 1000, hip: 2000, dome: 3000, shaft: 4000, cone: 5000, balc: 6000, tree: 7000 };
const ROOF_SEEN = 14; // (a flat roof is built only where the road's cameras can look down on it: lower than this, m over the sea)
/** the far city's geometry in parts (each its own build, and its own upload: in a drive a frame each, makePlates addMassAsync): its
 *  buildings MASS_N at a time, then its minarets and trees. [first building, end, the minarets and trees] */
const MASS_N = 1000;
const massSpans = D => { const s = []; for (let i = 0; i < D.nB; i += MASS_N) s.push([i, Math.min(D.nB, i + MASS_N), false]); s.push([D.nB, D.nB, true]); return s; };
/** a part of the far city's geometry in the zone's frame (x = −E', z = N': the compass's mirror, as the far ring's; turned and placed each
 *  frame): buildings i0 … i1 − 1, each one's walls where they face the road somewhere (the binary's mask) with their facade's coordinates
 *  (aF), its roof (flat, hipped, a mosque's dome); with tail, each minaret and each tree; its index buffer as four stretches of the route,
 *  each what can be seen from it (userData.ranges: start, count each; the minarets and trees in all four) */
function massPart(D, i0, i1, tail) {
  const { B, V, Mn, nM, Tr, nT } = D;
  let nv = 0, ni = 0, o0 = 0;
  for (let i = 0; i < i0; i++) o0 += B.n[i];
  for (let i = i0; i < i1; i++) {
    const k = B.n[i]; let w = 0; for (let e = 0; e < k; e++) if (B.mask[i] >>> e & 1) w++;
    nv += w * 4; ni += w * 6;
    if (B.roof[i] === 1) { nv += k * 3; ni += k * 3; } else if (B.top[i] - 0.7 < ROOF_SEEN) { nv += k; ni += (k - 2) * 3; }
    if (B.roof[i] === 2) { nv += 9 * 5; ni += 8 * 4 * 6; }
    if (B.roof[i] === 3) { nv += k * 4; ni += k * 6; }
  }
  if (tail) { nv += nM * 6 * 2 * 4; ni += nM * 6 * 6 * 4; nv += nT * 7; ni += nT * 10 * 3; }
  const pos = new Float32Array(nv * 3), nrm = new Int8Array(nv * 3), af = new Float32Array(nv * 4), idx = new Uint32Array(ni);
  let v = 0, t = 0;
  const vert = (x, y, z, nx, ny, nz, a, b, c, d) => {
    pos[v * 3] = x; pos[v * 3 + 1] = y; pos[v * 3 + 2] = z;
    nrm[v * 3] = Math.round(nx * 127); nrm[v * 3 + 1] = Math.round(ny * 127); nrm[v * 3 + 2] = Math.round(nz * 127);
    af[v * 4] = a; af[v * 4 + 1] = b; af[v * 4 + 2] = c; af[v * 4 + 3] = d; return v++;
  };
  const tri = (a, b, c) => { idx[t++] = a; idx[t++] = b; idx[t++] = c; };
  const pts = [], nb = i1 - i0, T0 = new Uint32Array(nb + 1);
  for (let i = i0, o = o0; i < i1; o += B.n[i], i++) {
    T0[i - i0] = t;
    const k = B.n[i], y0 = B.base[i], y1 = B.top[i], code = B.kind[i] + 8 * B.tint[i], H = y1 - y0 - 1.5;
    let cx = 0, cz = 0, per = 0;
    for (let e = 0; e < k; e++) { cx -= V[(o + e) * 2] / k; cz += V[(o + e) * 2 + 1] / k; }
    for (let e = 0; e < k; e++) { // (the walls: with the mirror a CCW outline in E', N' is clockwise here; its quads wound to face out)
      const q = (e + 1) % k, ax = -V[(o + e) * 2], az = V[(o + e) * 2 + 1], bx = -V[(o + q) * 2], bz = V[(o + q) * 2 + 1];
      const dx = bx - ax, dz = bz - az, L = Math.hypot(dx, dz) || 1;
      if (B.mask[i] >>> e & 1) {
        const nx = -dz / L, nz = dx / L, f = -1.5;
        const a0 = vert(ax, y0, az, nx, 0, nz, per, f, H, code), b0 = vert(bx, y0, bz, nx, 0, nz, per + L, f, H, code);
        const b1 = vert(bx, y1, bz, nx, 0, nz, per + L, H, H, code), a1 = vert(ax, y1, az, nx, 0, nz, per, H, H, code);
        tri(a0, b0, b1); tri(a0, b1, a1);
      }
      per += L;
    }
    if (B.roof[i] === 1) { // (a hipped tile roof: a face from each eave to the ridge's point over the middle)
      const rise = Math.min(4.0, 0.9 + Math.sqrt(Math.abs(per)) * 0.18), ay = y1 + rise, rc = MK.hip + B.tint[i];
      for (let e = 0; e < k; e++) {
        const q = (e + 1) % k, ax = -V[(o + e) * 2], az = V[(o + e) * 2 + 1], bx = -V[(o + q) * 2], bz = V[(o + q) * 2 + 1];
        const ux = bx - ax, uz = bz - az, wx = cx - ax, wy = rise, wz = cz - az;
        let nx = -uz * wy, ny = uz * wx - ux * wz, nz = ux * wy; if (ny < 0) { nx = -nx; ny = -ny; nz = -nz; }
        const l = Math.hypot(nx, ny, nz) || 1; nx /= l; ny /= l; nz /= l;
        const a = vert(ax, y1, az, nx, ny, nz, 0, 0, 0, rc), b = vert(bx, y1, bz, nx, ny, nz, 0, 0, 0, rc), c = vert(cx, ay, cz, nx, ny, nz, 0, 1, 0, rc);
        if ((bz - az) * (cx - ax) - (bx - ax) * (cz - az) > 0) tri(a, b, c); else tri(a, c, b);
      }
    } else { // (a flat roof behind its parapet: only where the road can look down on it)
      const ry = y1 - 0.7, rc = MK.flat + B.tint[i], v0 = v; pts.length = 0;
      if (ry < ROOF_SEEN) {
        for (let e = 0; e < k; e++) { const x = -V[(o + e) * 2], z = V[(o + e) * 2 + 1]; vert(x, ry, z, 0, 1, 0, 0, 0, 0, rc); pts.push(new THREE.Vector2(x, z)); }
        const T = THREE.ShapeUtils.triangulateShape(pts, []); if (T.length > k - 2) T.length = k - 2;
        for (const [a, b, c] of T) { const A = pts[a], Bq = pts[b], Cq = pts[c]; if ((Bq.y - A.y) * (Cq.x - A.x) - (Bq.x - A.x) * (Cq.y - A.y) > 0) tri(v0 + a, v0 + b, v0 + c); else tri(v0 + a, v0 + c, v0 + b); }
        for (let j = T.length; j < k - 2; j++) tri(v0, v0, v0);
      }
      if (B.roof[i] === 3) { // (a set-back top floor over the flat roof)
        const sc = 0.62, ty = ry + 2.9, pc = 3 + 8 * ((B.tint[i] + 23) % 64); let pp = 0;
        for (let e = 0; e < k; e++) {
          const q = (e + 1) % k, ax = cx + (-V[(o + e) * 2] - cx) * sc, az = cz + (V[(o + e) * 2 + 1] - cz) * sc, bx = cx + (-V[(o + q) * 2] - cx) * sc, bz = cz + (V[(o + q) * 2 + 1] - cz) * sc;
          const dx = bx - ax, dz = bz - az, L = Math.hypot(dx, dz) || 1, nx = -dz / L, nz = dx / L, h = ty - ry;
          const a0 = vert(ax, ry, az, nx, 0, nz, pp, 4.0, 5.0 + h, pc), b0 = vert(bx, ry, bz, nx, 0, nz, pp + L, 4.0, 5.0 + h, pc), b1 = vert(bx, ty, bz, nx, 0, nz, pp + L, 4.0 + h, 5.0 + h, pc), a1 = vert(ax, ty, az, nx, 0, nz, pp, 4.0 + h, 5.0 + h, pc);
          tri(a0, b0, b1); tri(a0, b1, a1); pp += L;
        }
      }
      if (B.roof[i] === 2) { // (a mosque's lead dome on a low drum over its middle)
        let area = 0; for (let e = 0; e < k; e++) { const q = (e + 1) % k; area += V[(o + e) * 2] * V[(o + q) * 2 + 1] - V[(o + q) * 2] * V[(o + e) * 2 + 1]; }
        const r = Math.min(12, Math.max(2.5, Math.sqrt(Math.abs(area) / 2) * 0.33)), d0 = v;
        for (let ri = 0; ri <= 4; ri++) {
          const a = ri < 2 ? 0 : ((ri - 1) / 3) * (Math.PI / 2), rr = ri < 2 ? r * 1.03 : r * Math.cos(Math.min(a, Math.PI / 2)), yy = ri === 0 ? ry - 0.2 : ri === 1 ? ry + r * 0.22 : ry + r * 0.22 + r * Math.sin(Math.min(a, Math.PI / 2));
          for (let sj = 0; sj <= 8; sj++) {
            const b = (sj / 8) * Math.PI * 2, c = Math.cos(b), sn = Math.sin(b), ny = ri < 2 ? 0 : Math.sin(Math.min(a, Math.PI / 2)), nh = ri < 2 ? 1 : Math.cos(Math.min(a, Math.PI / 2));
            vert(cx + c * rr, yy, cz + sn * rr, c * nh, ny, sn * nh, 0, ri, 0, MK.dome);
          }
        }
        for (let ri = 0; ri < 4; ri++) for (let sj = 0; sj < 8; sj++) { const a = d0 + ri * 9 + sj, b = a + 1, c = a + 9, d = c + 1; tri(a, d, b); tri(a, c, d); }
      }
    }
  }
  T0[nb] = t;
  if (tail) for (let m = 0; m < nM; m++) { // (the minarets: a shaft of six sides, the balcony's ring at three quarters of its height, the upper shaft, the lead cone)
    const x = -Mn[m * 5], z = Mn[m * 5 + 1], y0 = Mn[m * 5 + 2], h = Mn[m * 5 + 3], r = Mn[m * 5 + 4];
    const rings = [[y0, r, MK.shaft], [y0 + h * 0.74, r, MK.shaft], [y0 + h * 0.74, r * 1.55, MK.balc], [y0 + h * 0.77, r * 1.55, MK.balc], [y0 + h * 0.77, r * 0.85, MK.shaft], [y0 + h * 0.86, r * 0.85, MK.shaft], [y0 + h * 0.86, r * 0.92, MK.cone], [y0 + h, 0.02, MK.cone]];
    for (let s2 = 0; s2 < 4; s2++) {
      const [ya, ra, ca] = rings[s2 * 2], [yb, rb] = rings[s2 * 2 + 1], v0 = v, cone = ca === MK.cone, sl = cone ? (ra - rb) / (yb - ya) : 0, nl = Math.hypot(1, sl);
      for (let j = 0; j < 6; j++) { const b = (j / 6) * Math.PI * 2, c = Math.cos(b), sn = Math.sin(b);
        vert(x + c * ra, ya, z + sn * ra, c / nl, sl / nl, sn / nl, 0, 0, 0, ca); vert(x + c * rb, yb, z + sn * rb, c / nl, sl / nl, sn / nl, 0, 1, 0, ca); }
      for (let j = 0; j < 6; j++) { const a = v0 + j * 2, b = v0 + ((j + 1) % 6) * 2; tri(a, b + 1, b); tri(a, a + 1, b + 1); }
    }
  }
  if (tail) for (let m = 0; m < nT; m++) { // (the trees: a crown each, a five-sided double cone rounded by its normals)
    const x = -Tr[m * 5], z = Tr[m * 5 + 1], g0 = Tr[m * 5 + 2], h = Tr[m * 5 + 3], r = Tr[m * 5 + 4], cy = g0 + h - r * 0.9, v0 = v, sh = MK.tree + ((m * 37) % 64);
    vert(x, cy + r * 0.95, z, 0, 1, 0, 0, 1, 0, sh); vert(x, cy - r * 0.8, z, 0, -1, 0, 0, -1, 0, sh);
    for (let j = 0; j < 5; j++) { const b = (j / 5) * Math.PI * 2 + m, c = Math.cos(b), sn = Math.sin(b); vert(x + c * r, cy, z + sn * r, c * 0.92, 0.38, sn * 0.92, 0, 0, 0, sh); }
    for (let j = 0; j < 5; j++) { const a = v0 + 2 + j, b = v0 + 2 + ((j + 1) % 5); tri(v0, b, a); tri(v0 + 1, a, b); }
  }
  let all, ranges;
  if (tail) { all = idx.subarray(0, t); ranges = [0, t, 0, t, 0, t, 0, t]; } // (the minarets and trees: seen from all four stretches)
  else {
    let tot = 0; for (let q = 0; q < 4; q++) for (let j = 0; j < nb; j++) if (B.seg[i0 + j] >> q & 1) tot += T0[j + 1] - T0[j];
    all = new Uint32Array(tot); ranges = []; let w = 0;
    for (let q = 0; q < 4; q++) {
      const w0 = w;
      for (let j = 0; j < nb; j++) if (B.seg[i0 + j] >> q & 1) { all.set(idx.subarray(T0[j], T0[j + 1]), w); w += T0[j + 1] - T0[j]; }
      ranges.push(w0, w - w0);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos.subarray(0, v * 3), 3)); g.setAttribute('normal', new THREE.BufferAttribute(nrm.subarray(0, v * 3), 3, true));
  g.setAttribute('aF', new THREE.BufferAttribute(af.subarray(0, v * 4), 4)); g.setIndex(new THREE.BufferAttribute(all, 1));
  g.userData.ranges = ranges; g.setDrawRange(ranges[0], ranges[1]);
  return g;
}
/** the stretch of the route whose far city is drawn, by l (m into the zone) */
const massQ = l => (l < 380 ? 0 : l < 700 ? 1 : l < 1080 ? 2 : 3);

/** the far city's look in the painter's input (the tools' layout only, never in a drive): GALATA-3's (5c882da) painted massing, its
 *  plaster by its own hash, its windows box-filtered, its roofs, domes, minarets and crowns, lit by a painter's key, in a light haze */
function layoutMassMaterial(post, fog) {
  return new THREE.ShaderMaterial({
    fog: false, side: THREE.FrontSide,
    uniforms: { uFogC: { value: fog }, uSun: { value: new THREE.Vector3(0, 1, 0) }, uHz: { value: 0.00035 }, ...gradeUniforms(post) },
    vertexShader: /* glsl */`attribute vec4 aF; uniform float uHz; uniform vec3 uSun; varying float vHz; varying vec4 vF; varying vec3 vWall, vGlass, vDark;
      float h1(float x){ return fract(sin(x * 127.1) * 43758.5453); }
      vec3 plaster(float kind, float t){
        float a = h1(t * 3.17 + 0.37), b = h1(t * 7.13 + 1.3); vec3 c;
        if (a < 0.20) c = vec3(0.93, 0.89, 0.80); else if (a < 0.36) c = vec3(0.88, 0.80, 0.66); else if (a < 0.47) c = vec3(0.86, 0.73, 0.54);
        else if (a < 0.57) c = vec3(0.88, 0.73, 0.66); else if (a < 0.74) c = vec3(0.95, 0.94, 0.91); else if (a < 0.82) c = vec3(0.92, 0.88, 0.68);
        else if (a < 0.92) c = vec3(0.79, 0.78, 0.75); else c = vec3(0.80, 0.84, 0.87);
        if (kind > 1.5 && kind < 2.5) c = mix(c, vec3(0.80, 0.74, 0.64), 0.55); else if (kind > 2.5 && kind < 3.5) c = mix(c, vec3(0.88, 0.89, 0.90), 0.7);
        else if (kind > 3.5 && kind < 5.5) c = vec3(0.88, 0.86, 0.80); else if (kind > 5.5) c = mix(c, vec3(0.86, 0.80, 0.70), 0.4);
        return c * (0.95 + 0.09 * b);
      }
      void main(){
        vF = aF; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv;
        vec3 n = normalize(mat3(modelMatrix) * normal); float code = floor(aF.w + 0.5), lit = smoothstep(-0.2, 0.3, dot(n, uSun));
        vec3 L = mix(vec3(0.62, 0.67, 0.82), vec3(1.02, 0.99, 0.93), lit) * (0.97 + 0.06 * n.y), p;
        vGlass = vDark = vec3(0.0);
        if (code < 999.5) { p = plaster(mod(code, 8.0), floor(code / 8.0)); vGlass = vec3(0.31, 0.36, 0.43) * L; vDark = vec3(0.19, 0.21, 0.24) * L; }
        else if (code < 1999.5) p = mix(vec3(0.66, 0.64, 0.61), vec3(0.75, 0.72, 0.66), h1(code));
        else if (code < 2999.5) p = mix(vec3(0.72, 0.39, 0.28), vec3(0.63, 0.42, 0.34), h1(code * 1.3));
        else if (code < 3999.5) p = vec3(0.55, 0.59, 0.65);
        else if (code < 4999.5) p = vec3(0.88, 0.87, 0.83);
        else if (code < 5999.5) p = vec3(0.50, 0.55, 0.62);
        else if (code < 6999.5) p = vec3(0.74, 0.73, 0.70);
        else p = mix(vec3(0.22, 0.38, 0.21), vec3(0.36, 0.52, 0.27), h1((code - 7000.0) * 0.77)) * (0.86 + 0.22 * clamp(aF.y * 0.5 + 0.5, 0.0, 1.0));
        vWall = p * L;
        float d = -mv.z, hz = uHz * 1.45; vHz = (1.0 - exp(-d * hz * d * hz)) * 0.85;
      }`,
    fragmentShader: UNGRADE + /* glsl */`
      uniform vec3 uFogC; varying float vHz; varying vec4 vF; varying vec3 vWall, vGlass, vDark;
      float pulse(float x, float d, float w){ w = max(w, 1e-4); float o = 0.5 - 0.5 * d, a = x - 0.5 * w, b = x + 0.5 * w;
        return ((floor(b) * d + clamp(fract(b) - o, 0.0, d)) - (floor(a) * d + clamp(fract(a) - o, 0.0, d))) / w; }
      void main(){
        float code = floor(vF.w + 0.5); vec3 c = vWall;
        if (code < 999.5) {
          float kind = mod(code, 8.0), u = vF.x, v = vF.y, H = vF.z;
          vec4 K = kind < 0.5 ? vec4(2.3, 0.85, 2.9, 1.45) : kind < 1.5 ? vec4(2.8, 1.15, 3.2, 1.5) : kind < 2.5 ? vec4(3.3, 1.5, 3.6, 2.0) : kind < 3.5 ? vec4(3.0, 2.5, 3.2, 1.7) : kind < 5.5 ? vec4(4.2, 1.0, 4.5, 2.4) : vec4(3.6, 1.6, 4.0, 2.2);
          float gh = kind < 0.5 ? 0.4 : kind > 3.5 && kind < 5.5 ? 1.6 : kind > 5.5 ? 1.0 : 4.0;
          float x = u / K.x, yw = (v - gh - 0.9 - 0.5 * K.w) / K.z + 0.5, fx = fwidth(x), fy = fwidth(yw);
          float inUp = clamp((v - gh + 0.15) / 0.3, 0.0, 1.0) * clamp((H - 1.15 - v) / 0.3, 0.0, 1.0);
          float win = (fx > 0.7 ? (K.y / K.x) * (K.w / K.z) : pulse(x, K.y / K.x, fx) * pulse(yw, K.w / K.z, fy)) * inUp;
          c = mix(vWall, vGlass, win);
          if (v < gh && kind > 0.5 && kind < 3.5) { float xs = u / 3.4; c = mix(vWall * 0.84, vDark, pulse(xs, 0.74, fwidth(xs)) * clamp((v - 0.15) * 5.0, 0.0, 1.0) * clamp((gh - 0.95 - v) * 5.0, 0.0, 1.0)); }
          c *= 1.0 + 0.12 * clamp((v - H + 1.0) * 8.0, 0.0, 1.0) * clamp((H - 0.5 - v) * 8.0, 0.0, 1.0);
          c *= 0.84 + 0.16 * clamp((v + 0.5) / 3.0, 0.0, 1.0);
        }
        gl_FragColor = vec4(mix(ungrade(clamp(c, 0.0, 1.0)), uFogC, vHz), 1.0);
      }`,
  });
}

// ---- the plates' materials
const PLATE_VS = /* glsl */`varying vec3 vW; varying float vD;
  #ifdef PX_FADE
  varying vec3 vPxC;
  #endif
  void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vec4 mv = viewMatrix * w; vD = -mv.z; gl_Position = projectionMatrix * mv;
    #ifdef PX_FADE
    vPxC = color;
    #endif
  }`;
// ---- (step 35P) the built look where the plates saw a surface too thinly for the view. A plate's texels on a surface go as f / l (f: how
// squarely its camera saw it, l: how far); the view's as its own f / l. Where the plates in use give a near surface fewer than 1 / PX_M0 … 1 /
// PX_M1 of the view's (seen edge-on, from far behind, hidden, or out of their frames: the facade beside the car on a narrow street), it fades
// to its built look (pxFadeAt): its crisp painted fronts (Galata's fronts, drawn over the plates: materials.js makePlateFronts, pxFrontsHook)
// and its walls' and extras' own colours (the plate material's PX_FADE). Within PX_FAR m of the eye only
const PX_M0 = 2.0, PX_M1 = 4.0, PX_FAR = 70.0;
/** the plates' uniforms the fronts' material shares (its program is made before the plates are: main.js) */
const PXU = { uD0: { value: null }, uD1: { value: null }, uM0: { value: new THREE.Matrix4() }, uM1: { value: new THREE.Matrix4() }, uC0: { value: new THREE.Vector3() },
  uC1: { value: new THREE.Vector3() }, uW: { value: new THREE.Vector2(1, 0) }, uFade: { value: 0 } };
const PX_FADE = /* glsl */`
float pxUnpack(vec4 v) { return dot(v, vec4(255.0 / 256.0, 255.0 / 65536.0, 255.0 / 16777216.0, 1.0 / 16777216.0)); }
vec2 pxSeen(sampler2D D, mat4 M, vec3 C, vec3 P, vec3 N, float wt) { // (a plate's weight in the plates' blend here (as the plate material
  // weighs it: seen, how squarely, its share of the cross-fade) and its texels' density on this surface (f / l, softened at its frame's edge))
  vec4 c = M * vec4(P, 1.0); if (c.w < 0.5) return vec2(0.0);
  vec2 q = c.xy / c.w; float e = max(abs(q.x), abs(q.y)); if (e >= 1.0) return vec2(0.0);
  float dref = pxUnpack(textureLod(D, q * 0.5 + 0.5, 0.0)) * ${DFAR}.0; if (c.w > dref * 1.02 + 1.5) return vec2(0.0);
  vec3 d = C - P; float l = max(length(d), 0.5), f = abs(dot(N, d)) / l;
  return vec2(smoothstep(0.06, 0.3, f) * (wt + 0.002), f / l * (1.0 - smoothstep(0.92, 1.0, e)));
}
// (0: the plates' painting; 1: the built look. The view's texels over the blend's, past PX_M0 … PX_M1)
float pxFadeAt(sampler2D D0, sampler2D D1, mat4 M0, mat4 M1, vec3 C0, vec3 C1, vec2 W, vec3 P, vec3 N) {
  vec2 a = pxSeen(D0, M0, C0, P, N, W.x), b = pxSeen(D1, M1, C1, P, N, W.y); float ws = a.x + b.x, dens = ws > 1e-6 ? (a.x * a.y + b.x * b.y) / ws : 0.0;
  vec3 dv = cameraPosition - P; float lv = max(length(dv), 0.5);
  return smoothstep(${PX_M0.toFixed(1)}, ${PX_M1.toFixed(1)}, abs(dot(N, dv)) / (lv * lv) / max(dens, 1e-6));
}`;
/** (step 35P) Galata's fronts under the plates (materials.js makePlateFronts: their built look's material): drawn over the painted walls
 *  where the plates saw them too thinly (PX_FADE), with that weight; their shops' rooms always (rooms: the material's glass mask, rmK) */
export function pxFrontsHook(rooms) {
  return sh => {
    Object.assign(sh.uniforms, { uPxD0: PXU.uD0, uPxD1: PXU.uD1, uPxM0: PXU.uM0, uPxM1: PXU.uM1, uPxC0: PXU.uC0, uPxC1: PXU.uC1, uPxW: PXU.uW, uPxFade: PXU.uFade });
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vPxW, vPxN;')
      .replace('#include <project_vertex>', '#include <project_vertex>\nvPxW = (modelMatrix * vec4(transformed, 1.0)).xyz; vPxN = mat3(modelMatrix) * objectNormal;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform sampler2D uPxD0, uPxD1; uniform mat4 uPxM0, uPxM1; uniform vec3 uPxC0, uPxC1; uniform vec2 uPxW; uniform float uPxFade;\nvarying vec3 vPxW, vPxN;' + PX_FADE)
      .replace('#include <clipping_planes_fragment>', /* glsl */`float pxE = 0.0;
{ vec3 N = normalize(vPxN);
  if (uPxFade > 0.5 && length(cameraPosition - vPxW) < ${PX_FAR.toFixed(1)}) pxE = pxFadeAt(uPxD0, uPxD1, uPxM0, uPxM1, uPxC0, uPxC1, uPxW, vPxW, N);
  if (pxE < 0.004${rooms ? ' && vRmI < 0.5' : ''}) discard; }
#include <clipping_planes_fragment>`)
      .replace('#include <opaque_fragment>', `diffuseColor.a = ${rooms ? 'max(pxE, rmK)' : 'pxE'}; if (diffuseColor.a < 0.004) discard;\n#include <opaque_fragment>`);
  };
}
/** the plate material: the proxy painted by the two active plates (uP0/uP1, their depth maps uD0/uD1, their cameras uM0/uM1 at
 *  uC0/uC1, their weights uW, whether each is ready uOk), the night plates (uQ0/uQ1) by uNight; relit by the hour as the landmark
 *  cards are (realsky.js: the painting itself on a bright day, its colours relit under the hour's light, the band's tones far off at
 *  dusk), the band's haze far off. uRing: the far ring's (a backstop: the sky where no plate saw it). uDbg: the tools' (1 coverage,
 *  2 plate a's own colours) */
function plateMaterial(post, U, ring, fade = false) {
  return new THREE.ShaderMaterial({
    fog: false, side: THREE.FrontSide, vertexColors: fade, defines: fade ? { PX_FADE: '' } : {},
    uniforms: { ...U, uRing: { value: ring ? 1 : 0 } },
    vertexShader: PLATE_VS,
    fragmentShader: '#include <packing>\n' + UNGRADE + PX_FADE + /* glsl */`
      uniform sampler2D uP0, uP1, uQ0, uQ1, uD0, uD1; uniform mat4 uM0, uM1; uniform vec3 uC0, uC1; uniform vec2 uW, uOk;
      uniform float uNight, uRing, uDbg, uPaint, uTone, uBCh, uHaze; uniform vec3 uFogC, uLightC, uBS, uBM, uBH;
      varying vec3 vW; varying float vD;
      #ifdef PX_FADE
      uniform float uFade; uniform vec3 uLDir; varying vec3 vPxC;
      #endif
      // (where this point falls in a plate (st: the painting's uv) and whether its camera saw it: inside its frame and not behind the
      // proxy's nearer surface there, by the plate's depth map)
      float seen(sampler2D D, mat4 M, out vec2 st, out float inside){
        vec4 c = M * vec4(vW, 1.0); vec2 q = c.xy / max(c.w, 1e-3) * 0.5 + 0.5;
        inside = step(0.5, c.w) * step(0.0, q.x) * step(q.x, 1.0) * step(0.0, q.y) * step(q.y, 1.0);
        q = clamp(q, 0.0005, 0.9995); st = vec2(q.x, 1.0 - q.y); // (the painting is uploaded unflipped: its first row at v 0)
        float dref = unpackRGBAToDepth(texture2D(D, q)) * ${DFAR}.0;
        return inside * step(c.w, uRing > 0.5 ? dref * 1.1 + 4.0 : dref * 1.02 + 1.5); // (the far ring follows the camera: its depth then and now differ by up to ~6 %)
      }
      vec3 dayTone(vec3 t, float far){ // (as the cards: the painting on a bright day; relit by the hour's light; far off, the band's tones at dusk)
        vec3 c = pgSrgbToLin(t) * 0.8 * uLightC; float tn = uTone * far;
        if (tn > 0.001) { float l = dot(t, vec3(0.299, 0.587, 0.114)), k = clamp((l - 0.25) * 1.54, 0.0, 1.0); vec3 d = (k < 0.5 ? mix(uBS, uBM, k * 2.0) : mix(uBM, uBH, k * 2.0 - 1.0)) + (t - l) * uBCh; c = mix(c, ungrade(clamp(d, 0.0, 0.97)), tn); }
        if (uPaint > 0.001) c = mix(c, ungrade(t), uPaint);
        return c;
      }
      void main(){
        vec2 s0, s1; float i0, i1;
        float v0 = seen(uD0, uM0, s0, i0) * uOk.x, v1 = seen(uD1, uM1, s1, i1) * uOk.y;
        // (how squarely each plate saw it: a surface seen edge-on stretches the painting, so that plate says less (view-dependent
        // texturing's weight); the normal from the surface's own derivatives)
        vec3 nn = normalize(cross(dFdx(vW), dFdy(vW)));
        float f0 = abs(dot(nn, normalize(vW - uC0))), f1 = abs(dot(nn, normalize(vW - uC1)));
        vec4 a = texture2D(uP0, s0), b = texture2D(uP1, s1), ab = texture2D(uP0, s0, 4.0), bb = texture2D(uP1, s1, 4.0);
        float w0 = v0 * smoothstep(0.06, 0.3, f0) * (uW.x + 0.002), w1 = v1 * smoothstep(0.06, 0.3, f1) * (uW.y + 0.002), ws = w0 + w1;
        // (seen by neither, or only edge-on: the painting's local tone there, from whichever plate faced it best)
        float pa = step(i1 * (f1 + 0.02) * (uOk.y + 0.001), i0 * (f0 + 0.02) * (uOk.x + 0.001));
        vec4 cb = mix(bb, ab, pa), c = ws > 1e-5 ? (a * w0 + b * w1) / ws : cb;
        float gm = smoothstep(0.06, 0.18, max(v0 * f0, v1 * f1));
        c.rgb = mix(cb.rgb, c.rgb, gm);
        if (uRing > 0.5 && v0 + v1 < 0.5) discard; // (the far ring is only a backstop)
        float pxE = 0.0; vec3 nf = nn;
        #ifdef PX_FADE
        // (seen too thinly by the plates in use for this view: the walls' and the extras' own colours, under the hour's light (the fronts
        // over them their built look: pxFrontsHook))
        nf = nn * sign(dot(nn, cameraPosition - vW) + 1e-6);
        if (uFade > 0.5 && length(cameraPosition - vW) < ${PX_FAR.toFixed(1)}) pxE = pxFadeAt(uD0, uD1, uM0, uM1, uC0, uC1, uW, vW, nf);
        #endif
        if (ws > 1e-5 && c.a < 0.5 && pxE < 0.5) discard; // (the painting's sky)
        if (uDbg > 0.5) { gl_FragColor = vec4(ungrade(uDbg < 1.5 ? vec3(v0, v1, step(0.5, c.a)) : a.rgb), 1.0); return; }
        float far = smoothstep(250.0, 1500.0, vD);
        // (the far layer recedes: a painting's far city is paler and greyer than its near streets, as the cards over it and the real view's)
        c.rgb = mix(c.rgb, vec3(dot(c.rgb, vec3(0.299, 0.587, 0.114))), 0.32 * far);
        vec3 col = dayTone(c.rgb, far);
        if (uNight > 0.004) { // (the night plates, the same paintings at night)
          vec4 an = texture2D(uQ0, s0), bn = texture2D(uQ1, s1), cn = mix(texture2D(uQ1, s1, 4.0), texture2D(uQ0, s0, 4.0), pa);
          vec3 n = mix(cn.rgb, ws > 1e-5 ? (an.rgb * w0 + bn.rgb * w1) / ws : cn.rgb, gm);
          col = mix(col, ungrade(n), uNight);
        }
        #ifdef PX_FADE
        if (pxE > 0.0) col = mix(col, vPxC * uLightC * mix(0.62, 1.0, smoothstep(-0.02, 0.12, dot(nf, uLDir))), pxE);
        #endif
        // (the air between, as over the landmark cards (realsky.js: their haze with distance), so the painted far city and the cards over it
        // stand in the same air; the band's haze at dusk and in grey weather far off)
        float hz = vD * 0.00035; hz = (1.0 - exp(-hz * hz)) * 0.85;
        gl_FragColor = vec4(mix(col, uFogC, max(hz, uHaze * far)), 1.0);
      }`,
  });
}
/** the plates' depth maps: each surface's distance from the plate's camera, packed (0 … DFAR m) */
function depthMaterial() {
  return new THREE.ShaderMaterial({
    side: THREE.FrontSide, fog: false,
    vertexShader: /* glsl */`varying float vZ; void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); vZ = -mv.z; gl_Position = projectionMatrix * mv; }`,
    fragmentShader: /* glsl */`#include <packing>
      varying float vZ; void main(){ gl_FragColor = packDepthToRGBA(clamp(vZ / ${DFAR}.0, 0.0, 0.9999)); }`,
  });
}

const NOON_SUN = new THREE.Color('#fff5dd').multiplyScalar(3.35), NOON_SKY = new THREE.Color('#8fb1ec').multiplyScalar(1.35 * 2);
const _f = {}, _c = new THREE.Color(), _v = new THREE.Vector3(), _t = new THREE.Vector3(), _u = new THREE.Vector3(), _q = new THREE.Quaternion();

/** The plates. o: { renderer, scene, world, path, post, J (loadPlates'), mass (loadMass's or null), tier ('hi' | 'lo'), lite (phones: smaller
 *  depth maps), fog (the scene's fog colour), aniso, quietIds (main.js: three's ids from a private generator), ring (realsky's far ring
 *  mesh, or null) }. update(camera, s) once a frame, right before the frame is drawn */
export function makePlates(o) {
  const { renderer, scene, world, path, post, quietIds } = o;
  let J = o.J, base = BASE, stops = J.stops, n = stops.length;
  const tier = o.tier, DW = o.lite ? 512 : 1024, DH = o.lite ? 288 : 576;
  const blank = quietIds(() => { const t = new THREE.DataTexture(new Uint8Array([128, 128, 128, 255]), 1, 1); t.needsUpdate = true; return t; });
  const blankD = quietIds(() => { const t = new THREE.DataTexture(new Uint8Array([255, 255, 255, 255]), 1, 1); t.needsUpdate = true; return t; });
  PXU.uD0.value = PXU.uD1.value = blankD; PXU.uW.value.set(1, 0); PXU.uFade.value = 0;
  const U = {
    uP0: { value: blank }, uP1: { value: blank }, uQ0: { value: blank }, uQ1: { value: blank }, uD0: PXU.uD0, uD1: PXU.uD1,
    uM0: PXU.uM0, uM1: PXU.uM1, uC0: PXU.uC0, uC1: PXU.uC1, uW: PXU.uW, uOk: { value: new THREE.Vector2(0, 0) }, uNight: { value: 0 }, uDbg: { value: 0 },
    uLightC: { value: new THREE.Color(1, 1, 1) }, uPaint: { value: 1 }, uTone: { value: 0 }, uBS: { value: new THREE.Vector3() }, uBM: { value: new THREE.Vector3() },
    uBH: { value: new THREE.Vector3() }, uBCh: { value: 0 }, uHaze: { value: 0 }, uFogC: { value: o.fog }, uFade: PXU.uFade, uLDir: { value: TOD.lightDir }, ...gradeUniforms(post),
  };
  // (the plate material; the far ring's; the depth maps'; and the proxy's walls' and extras' (the built look's colours where the plates saw
  // them too thinly: PX_FADE))
  const [mat, ringMat, dMat, matF] = quietIds(() => [plateMaterial(post, U, false), plateMaterial(post, U, true), depthMaterial(), plateMaterial(post, U, false, true)]);
  const pcam = quietIds(() => new THREE.PerspectiveCamera(60, 16 / 9, 0.5, DFAR)); pcam.layers.set(PX_LAYER);
  let ring = o.ring, ringOrig = ring ? ring.material : null;
  // (the far city: under the plates only)
  // (its parts in a group (massPart), each part's buffers sent up on its own (warmPart: drawn once, alone, into a 4 × 4 target): at a start
  // all at once, before the title (addMass); in a drive a part's build a frame, then its upload a frame (addMassAsync))
  let mass = null, massQNow = -1, wrt = null;
  const wsc = quietIds(() => new THREE.Scene()); wsc.overrideMaterial = dMat;
  const massMesh = g => { const m = new THREE.Mesh(g, mat); m.frustumCulled = false; m.renderOrder = 997; m.layers.enable(PX_LAYER); return m; };
  const warmPart = m => {
    if (!wrt) wrt = quietIds(() => new THREE.WebGLRenderTarget(4, 4));
    const pt = renderer.getRenderTarget(), au = renderer.shadowMap.autoUpdate; wsc.add(m); renderer.shadowMap.autoUpdate = false;
    renderer.setRenderTarget(wrt); renderer.render(wsc, pcam); renderer.setRenderTarget(pt); renderer.shadowMap.autoUpdate = au; wsc.remove(m);
  };
  const massIn = parts => { mass = quietIds(() => new THREE.Group()); mass.visible = false; for (const m of parts) mass.add(m); massQNow = -1; scene.add(mass); if (wrt) { wrt.dispose(); wrt = null; } };
  const addMass = D => { if (mass || !D) return null; const parts = []; for (const [i0, i1, tl] of massSpans(D)) { const m = quietIds(() => massMesh(massPart(D, i0, i1, tl))); warmPart(m); parts.push(m); } massIn(parts); return mass; };
  // each stop's state: its painting (day, night: 0 idle, 1 fetching, 2 decoded, 3 ready, 4 failed), its depth map, its camera now
  const mkSlot = () => ({ tok: 0, img: null, tex: null, st: 0, ub: 0, nimg: null, ntex: null, nst: 0, nub: 0, rt: null, dv: -1, df: -1e9, mat: new THREE.Matrix4(), cp: new THREE.Vector3() });
  let slots = stops.map(mkSlot);
  let set = 'L', mode = 0, pver = -1, frame = 0, inflight = 0, zsNow = NaN, gen = 0;
  const P = { mat, ringMat, matF, fade: true, depthMat: dMat, mode: 0, a: 0, b: 0, t: 0, camL: 0, set: 'L', ok: false, depthMs: 0, depthN: 0, loads: 0, fails: 0, ov: null, only: null, frozen: null, layout: false, clean: false, keep: null };
  if (o.mass) addMass(o.mass);

  // ---- the camera of stop i in the scene now (zone start zs, the world's origin): pcam placed, the stop's matrix and place written
  const place = (i, zs) => {
    const q = stops[i][set], F = galFrame(zs), O = world.origin, S = J.sets[set], c = q.c, f = q.f, u = q.u;
    pcam.position.set(F.x + F.s * c[1] - F.c * c[0] - O.x, c[2], F.z + F.c * c[1] + F.s * c[0] - O.z); // (the zone's frame into the world: galWorld's)
    _t.set(F.s * f[1] - F.c * f[0], f[2], F.c * f[1] + F.s * f[0]).add(pcam.position); pcam.up.set(F.s * u[1] - F.c * u[0], u[2], F.c * u[1] + F.s * u[0]); pcam.lookAt(_t);
    pcam.fov = S.fov; pcam.aspect = S.asp; pcam.near = 0.5; pcam.far = DFAR; pcam.updateProjectionMatrix(); pcam.updateMatrixWorld(true);
    const s = slots[i]; s.mat.multiplyMatrices(pcam.projectionMatrix, pcam.matrixWorldInverse); s.cp.copy(pcam.position);
  };
  // (the proxy's painted kinds shown for a depth pass, then back as the mode has them)
  let pxShow = false, litLayer = false;
  const showPx = ch => { if (ch.px) for (let i = 0; i < ch.px.length; i++) { const m = ch.px[i], k = m.userData.px; if (k === 'w' || k === 'wi' || k === 'e' || k === 'x' || k === 'sg') { if (pxShow) { m.userData.v0 = m.visible; m.visible = true; } else m.visible = m.userData.v0; } } };
  // ---- its depth map: the proxy (its layer) seen from its camera, once its chunks are in (again should more of them come)
  const renderDepth = (i, zs) => {
    const t0 = performance.now(), s = slots[i];
    if (!s.rt) { const W = set === 'P' ? DH : DW, H = set === 'P' ? DW : DH; s.rt = quietIds(() => new THREE.WebGLRenderTarget(W, H, { type: THREE.UnsignedByteType, format: THREE.RGBAFormat, minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter, depthBuffer: true, generateMipmaps: false })); }
    place(i, zs);
    const prevT = renderer.getRenderTarget(), prevO = scene.overrideMaterial, prevBg = scene.background, prevAU = renderer.shadowMap.autoUpdate, prevA = renderer.getClearAlpha();
    renderer.getClearColor(_c);
    const rv = ring && ring.visible, mv = mass && mass.visible; if (ring) { ring.visible = true; ring.material = ringMat; } if (mass) mass.visible = true;
    pxShow = true; world.chunks.forEach(showPx); const rsv = P.realSky ? P.realSky.group.visible : true; if (P.realSky) P.realSky.group.visible = true;
    // (the scene's lights on the plates' layer too: three sets its lights' state up from what the camera sees and the next frame's shadow pass
    // compiles against that state; a pass without them left it empty, and shadow twins compiled later were new programs)
    if (!litLayer) { litLayer = true; scene.traverse(ob => { if (ob.isLight) ob.layers.enable(PX_LAYER); }); }
    scene.overrideMaterial = dMat; scene.background = null; renderer.shadowMap.autoUpdate = false;
    renderer.setRenderTarget(s.rt); renderer.setClearColor(0xffffff, 1); renderer.clear(true, true, false); renderer.render(scene, pcam);
    renderer.setRenderTarget(prevT); renderer.setClearColor(_c, prevA); scene.overrideMaterial = prevO; scene.background = prevBg; renderer.shadowMap.autoUpdate = prevAU;
    if (ring) { ring.visible = rv; ring.material = mode === 1 ? ringMat : ringOrig; } if (mass) mass.visible = mv;
    pxShow = false; world.chunks.forEach(showPx); if (P.realSky) P.realSky.group.visible = rsv;
    s.dv = world.plateVer; s.df = frame; P.depthMs = performance.now() - t0; P.depthN++;
  };
  // ---- fetching and decoding a painting (off the main thread), its upload a band a frame (band)
  const fetchImg = async (file, bytes, w, h) => {
    const r = await fetch(base + file); if (!r.ok) throw new Error(file + ' ' + r.status);
    const b = await r.blob(); if (b.size !== bytes) throw new Error(file + ' is ' + b.size + ' bytes, not ' + bytes); // (a truncated image decodes without complaint)
    const img = await createImageBitmap(b, { premultiplyAlpha: 'none', colorSpaceConversion: 'none' });
    if (img.width !== w || img.height !== h) { img.close(); throw new Error(file + ' is ' + img.width + '×' + img.height); }
    return img;
  };
  const want = (i, night) => {
    const s = slots[i], key = night ? 'n' + tier : tier, F = stops[i].files[set], f = F && F[key];
    if ((night ? s.nst : s.st) !== 0 || inflight >= 2) return;
    if (!f) { if (night) s.nst = 4; else s.st = 4; return; }
    const sz = J.sets[set].px[tier], g = gen, tk = s.tok; inflight++;
    if (night) s.nst = 1; else s.st = 1;
    fetchImg(f[0], f[1], sz[0], sz[1]).then(img => {
      inflight--; if (g !== gen || slots[i] !== s || s.tok !== tk) { img.close(); return; }
      if (night) { s.nimg = img; s.nst = 2; } else { s.img = img; s.st = 2; } P.loads++;
    }, e => { inflight--; if (g !== gen || slots[i] !== s || s.tok !== tk) return; console.warn('plate', f[0] + ':', e.message || e); if (night) s.nst = 4; else s.st = 4; P.fails++; });
  };
  // (its upload a band of rows a frame: its texture's storage made first with no pixels, then each band through three's copyTextureToTexture
  // (texSubImage2D from the decoded bitmap), the mipmaps with the last; a whole plate in one call made the drive's slowest frames on phones)
  const BANDS = 4, _rg = { min: { x: 0, y: 0 }, max: { x: 0, y: 0 } }, _at = { x: 0, y: 0 };
  const mkTex = img => { const t = new THREE.Texture(img); t.colorSpace = THREE.NoColorSpace; t.flipY = false; t.generateMipmaps = true;
    t.minFilter = THREE.LinearMipmapLinearFilter; t.magFilter = THREE.LinearFilter; t.anisotropy = o.aniso || 1; return t; };
  const srcTex = quietIds(() => mkTex(null)); // (the bands' source: never uploaded itself)
  /** the next band of slot s's painting (its night's: night); true once all of it is in (its bitmap let go) */
  const band = (s, night) => {
    const img = night ? s.nimg : s.img; let t = night ? s.ntex : s.tex;
    if (!t) { t = quietIds(() => { const d = mkTex({ width: img.width, height: img.height }); d.source.dataReady = false; d.needsUpdate = true; return d; }); renderer.initTexture(t); if (night) { s.ntex = t; s.nub = 0; } else { s.tex = t; s.ub = 0; } }
    const k = night ? s.nub : s.ub, bh = Math.ceil(img.height / BANDS), y0 = k * bh;
    _rg.min.y = y0; _rg.max.x = img.width; _rg.max.y = Math.min(img.height, y0 + bh); _at.y = y0;
    srcTex.image = img; t.generateMipmaps = k === BANDS - 1; renderer.copyTextureToTexture(srcTex, t, _rg, _at); t.generateMipmaps = true; srcTex.image = null;
    if (k < BANDS - 1) { if (night) s.nub = k + 1; else s.ub = k + 1; return false; }
    img.close(); if (night) s.nimg = null; else s.img = null; return true;
  };
  const drop = s => {
    if (s.tex) s.tex.dispose(); if (s.ntex) s.ntex.dispose(); if (s.img) s.img.close(); if (s.nimg) s.nimg.close(); if (s.rt) s.rt.dispose();
    s.tex = s.ntex = s.img = s.nimg = s.rt = null; s.st = s.nst = s.ub = s.nub = 0; s.dv = -1; s.tok++;
  };
  // (a depth map due: none yet; or, one of the two in use, a chunk come in since within what it paints (60 m behind its stop to 400 m
  // ahead; the drive's own chunks are revealed far ahead of the plates in use))
  const depthDue = (sl, i, k, zs) => {
    if (sl.dv >= 0 && sl.dv !== world.plateVer && !world.pxSince(sl.dv, zs + stops[i].l - 60, zs + stops[i].l + 400)) sl.dv = world.plateVer;
    return sl.dv < 0 || (k < 2 && sl.dv !== world.plateVer && frame - sl.df > 20);
  };
  const ready = i => slots[i].st === 3 && slots[i].rt !== null && slots[i].dv >= 0;

  // ---- the proxy's meshes by the mode: 0 the built look (the zone as it was), 1 painted by the plates, 2 the painter's layout (tools)
  // (each kind's look in modes 0, 1, 2: 0 hidden, 1 its built look (mode 1: the plates'), 2 under the plates the fronts' (their built look
  // where the plates saw them too thinly, their shops' rooms always: makePlateFronts), 3 its built look always (the shelters' glass))
  const MODE_PX = { w: [1, 1, 1], wi: [1, 1, 1], e: [1, 1, 1], g: [1, 2, 1], a: [1, 0, 1], gs: [1, 2, 1], x: [0, 1, 1], xg: [0, 0, 1], sg: [1, 3, 1] };
  const applyMesh = m => {
    const k = m.userData.px, r = MODE_PX[k]; if (!r) return;
    const v = r[mode < 0 ? 0 : mode], gi = o.M.atlasGIg;
    m.visible = v > 0 && !(v === 2 && !gi);
    m.material = v === 1 && mode === 1 ? (k === 'e' ? mat : matF) : v === 2 ? gi || m.userData.lm : m.userData.lm;
    // (three hands a shadow twin its mesh's own map: under the plate material there is none, and the atlas's twin reads one; the props' twin
    // (no map) casts their shadows meanwhile)
    if (m.userData.dm) m.customDepthMaterial = mode === 1 && v === 1 && k !== 'w' && k !== 'wi' && k !== 'x' ? PROP_DEPTH : m.userData.dm;
  };
  const applyChunk = ch => { if (ch.px) for (let i = 0; i < ch.px.length; i++) applyMesh(ch.px[i]); };
  world.pxHook = applyChunk;
  const applyAll = () => {
    world.chunks.forEach(applyChunk);
    if (ring) ring.material = mode === 1 ? ringMat : ringOrig;
    if (mass) { mass.visible = mode !== 0; const mm = mode === 2 ? (P.massLayout || (P.massLayout = quietIds(() => layoutMassMaterial(post, o.fog)))) : mat; for (const m of mass.children) m.material = mm; }
  };
  const setMode = m => { if (m !== mode || pver !== world.plateVer) { mode = m; P.mode = m; pver = world.plateVer; applyAll(); } };
  // (the fronts over the plates drawn only near the eye: their fade is within PX_FAR m of it)
  let eye = null;
  const frontsNear = ch => { if (ch.px) for (let i = 0; i < ch.px.length; i++) { const m = ch.px[i]; if (m.userData.px !== 'g') continue; const bs = m.geometry.boundingSphere; _v.copy(bs.center).applyMatrix4(m.matrixWorld); m.visible = _v.distanceTo(eye) < bs.radius + PX_FAR; } };

  /** each frame, right before the frame is drawn: the camera (placed), s its road position. Returns whether the plates paint */
  P.update = (camera, s, on = true) => {
    frame++;
    const l = galL(s), w = l === l ? Math.max(zoneWeight(s, 'galata'), zoneWeight(s + 300, 'galata')) : 0;
    if (P.ov) { // (the tools: a camera put at a stop's pose)
      const zs = s - l, F = galFrame(zs), O = world.origin, q = P.ov, S = J.sets[q.set || set];
      _v.set(F.s * q.c[1] - F.c * q.c[0], 0, F.c * q.c[1] + F.s * q.c[0]); camera.position.set(F.x + _v.x - O.x, q.c[2], F.z + _v.z - O.z);
      _t.set(F.s * q.f[1] - F.c * q.f[0], q.f[2], F.c * q.f[1] + F.s * q.f[0]); _u.set(F.s * q.u[1] - F.c * q.u[0], q.u[2], F.c * q.u[1] + F.s * q.u[0]);
      camera.up.copy(_u); _t.add(camera.position); camera.lookAt(_t); camera.fov = q.fov || S.fov; camera.updateProjectionMatrix(); camera.updateMatrixWorld(true);
    }
    if (!(w > 0.02) || !on) { setMode(0); P.ok = false; return false; }
    const zs = s - l; if (zs !== zsNow) { zsNow = zs; for (const sl of slots) sl.dv = -1; } // (another pass of the zone: its depth maps again)
    if (mass) { const F = galFrame(zs), O = world.origin, q = massQ(l);
      mass.position.set(F.x - O.x, 0, F.z - O.z); mass.rotation.set(0, Math.atan2(F.s, F.c), 0);
      if (q !== massQNow) { massQNow = q; for (const m of mass.children) { const R = m.geometry.userData.ranges; m.geometry.setDrawRange(R[q * 2], R[q * 2 + 1]); } } }
    if (P.layout) { setMode(2); if (P.clean) cleanScene(true); P.ok = false; return false; }
    // (the set by the screen's shape: a portrait phone the tall plates; a change of shape lets every plate go)
    const ws = camera.aspect < 1 ? 'P' : 'L';
    if (ws !== set) { set = ws; P.set = ws; gen++; for (const sl of slots) drop(sl); inflight = 0; }
    // the camera's place along the route, and the two stops round it: the last at or behind it and the next, cross-faded over the
    // middle 60 % of the gap between them
    path.at(s, _f); const O = world.origin;
    const camL = P.frozen !== null ? P.frozen : l + (camera.position.x + O.x - _f.x) * _f.fx + (camera.position.z + O.z - _f.z) * _f.fz; P.camL = camL;
    let a = 0; while (a + 1 < n && stops[a + 1].l <= camL) a++;
    let b = Math.min(a + 1, n - 1), t = 0;
    if (b !== a) { const L = stops[b].l - stops[a].l, x0 = stops[a].l + 0.2 * L, x1 = stops[b].l - 0.2 * L; t = Math.min(1, Math.max(0, (camL - x0) / (x1 - x0))); t = t * t * (3 - 2 * t); }
    if (camL < stops[0].l) { a = b = 0; t = 0; }
    if (P.only !== null) { a = b = P.only; t = 0; }
    // (fetch the two and the next two; the night's too from dusk on; let the rest go)
    const night = TOD.night > 0.02 || TOD.t > 0.68 || TOD.t < 0.28;
    want(a, false); want(b, false); if (b + 1 < n) want(b + 1, false); if (b + 2 < n) want(b + 2, false);
    if (night) { want(a, true); want(b, true); if (b + 1 < n) want(b + 1, true); }
    for (let i = 0; i < n; i++) if (i < a - 1 || i > b + 3) { const sl = slots[i]; if (sl.st || sl.nst || sl.rt) drop(sl); }
    // (one heavy step a frame, the nearest first: a band of a painting's upload, or its depth map once the chunks round its stop are in
    // (nothing waiting to be revealed); then the nights' bands)
    const dOK = !world.reveal.length; let did = false;
    for (let k = 0; k < 4 && !did; k++) { const i = k === 0 ? a : k === 1 ? b : b + k - 1; if (i >= n) continue; const sl = slots[i];
      if (sl.st === 2) { if (band(sl, false)) sl.st = 3; did = true; } else if (sl.st === 3 && dOK && depthDue(sl, i, k, zs)) { renderDepth(i, zs); did = true; } }
    for (let k = 0; k < 3 && !did; k++) { const i = k === 0 ? a : k === 1 ? b : b + 1; if (i >= n) continue; const sl = slots[i];
      if (sl.nst === 2) { if (band(sl, true)) sl.nst = 3; did = true; } }
    // (should the two not be ready, the nearest ready ones: a stale plate paints better than none)
    if (!ready(a) || !ready(b)) {
      let best = -1, bd = Infinity; for (let i = 0; i < n; i++) if (ready(i) && Math.abs(stops[i].l - camL) < bd) { bd = Math.abs(stops[i].l - camL); best = i; }
      if (!ready(a) && !ready(b)) { if (best < 0) { setMode(0); P.ok = false; return false; } a = b = best; t = 0; }
      else if (!ready(a)) { a = b; t = 0; } else { b = a; t = 0; }
    }
    P.a = a; P.b = b; P.t = t;
    place(a, zs); place(b, zs);
    const sa = slots[a], sb = slots[b];
    U.uP0.value = sa.tex; U.uP1.value = sb.tex; U.uD0.value = sa.rt.texture; U.uD1.value = sb.rt.texture;
    U.uM0.value.copy(sa.mat); U.uM1.value.copy(sb.mat); U.uC0.value.copy(sa.cp); U.uC1.value.copy(sb.cp);
    U.uW.value.set(1 - t, t); U.uOk.value.set(1, 1); U.uDbg.value = P.dbg || 0;
    // (by the hour as the landmark cards: realsky.js)
    _c.copy(TOD.sunCol).multiplyScalar(TOD.sunI); let r = _c.r, g = _c.g, bl = _c.b;
    _c.copy(TOD.hemiSky).multiplyScalar(TOD.hemiI * 2); r += _c.r; g += _c.g; bl += _c.b;
    const kb = Math.min(Math.max((TOD.bright - 0.55) / 0.4, 0), 1), paint = kb * kb * (3 - 2 * kb);
    U.uLightC.value.setRGB(r / (NOON_SUN.r + NOON_SKY.r), g / (NOON_SUN.g + NOON_SKY.g), bl / (NOON_SUN.b + NOON_SKY.b)); U.uPaint.value = paint;
    U.uTone.value = paintSky() * (1 - paint);
    if (U.uTone.value > 0) { const B = BAND_TONES.at(TOD.t); U.uBS.value.fromArray(B.rgb('shade')).divideScalar(255); U.uBM.value.fromArray(B.rgb('mid')).divideScalar(255); U.uBH.value.fromArray(B.rgb('lit')).divideScalar(255); U.uBCh.value = B.rgb('ch')[0]; }
    U.uHaze.value = Math.min(1, Math.max(0, (1 - (1 - 0.12 * TOD.warm - 0.25 * TOD.night) * (1 - 0.55 * TOD.overcast) * (1 - 0.6 * TOD.rain) * (1 - paint)) * (1 - paint)));
    // (the night plates as the night comes, once both are in)
    const nk = Math.min(Math.max((TOD.night - 0.15) / 0.65, 0), 1);
    if (nk > 0 && sa.nst === 3 && sb.nst === 3) { U.uQ0.value = sa.ntex; U.uQ1.value = sb.ntex; U.uNight.value = nk * nk * (3 - 2 * nk); } else { U.uQ0.value = U.uQ1.value = blank; U.uNight.value = 0; }
    setMode(1); P.ok = true; if (P.clean) cleanScene(true); // (the tools: the plates' reprojection alone, for the next plate's painter)
    PXU.uFade.value = P.fade ? 1 : 0; if (o.M.atlasGIg) { eye = camera.position; world.chunks.forEach(frontsNear); }
    return true;
  };

  // ---- warming up: the plate programs (with and without normals: the far ring has none; the walls' and extras' with their colours) and
  // the depth's, compiled at load (target: the composer's buffer, as the game draws) so nothing compiles in a drive
  const warmScene = () => quietIds(() => {
    const t = new THREE.BufferGeometry(); t.setAttribute('position', new THREE.Float32BufferAttribute([0, -60, 0, 0.01, -60, 0, 0, -59.99, 0], 3));
    const tn = t.clone(); tn.setAttribute('normal', new THREE.Float32BufferAttribute([0, 1, 0, 0, 1, 0, 0, 1, 0], 3));
    const tc = tn.clone(); tc.setAttribute('color', new THREE.BufferAttribute(new Uint8Array(9).fill(255), 3, true)); // (as the proxy's GBs: geom.js)
    const q = new THREE.Scene(); for (const x of [new THREE.Mesh(tn, mat), new THREE.Mesh(t, ringMat), new THREE.Mesh(tc, matF)]) { x.frustumCulled = false; x.layers.enable(PX_LAYER); q.add(x); }
    return [q, [t, tn, tc]];
  });
  P.warm = (camera, target) => {
    const [sc, geos] = warmScene(), rt = quietIds(() => new THREE.WebGLRenderTarget(4, 4)), pt = renderer.getRenderTarget();
    renderer.setRenderTarget(target); renderer.compile(sc, camera, scene);
    sc.overrideMaterial = dMat; renderer.setRenderTarget(rt); renderer.render(sc, pcam); // (the depth programs, both kinds)
    renderer.setRenderTarget(pt); rt.dispose(); for (const g of geos) g.dispose();
  };
  /** (main.js, once it has compiled its programs off the main thread: Turkey's lazy load) */
  P.warmAsync = async (camera, target) => {
    const [sc, geos] = warmScene();
    const pt = renderer.getRenderTarget(); renderer.setRenderTarget(target); const ready = renderer.compileAsync(sc, camera, scene); renderer.setRenderTarget(pt); await ready;
    const rt = quietIds(() => new THREE.WebGLRenderTarget(4, 4)); sc.overrideMaterial = dMat; renderer.setRenderTarget(rt); renderer.render(sc, pcam); renderer.setRenderTarget(pt); rt.dispose(); for (const g of geos) g.dispose();
  };
  /** every plate's depth map drawn again (the far city came in) */
  P.invalidate = () => { for (const sl of slots) sl.dv = -1; pver = -1; };
  /** at a start by Galata: the plates round s fetched (and decoded) before the title, so the first view is painted. Resolves when they are
   *  in, failed, or after 6 s */
  P.preload = (s) => {
    const l = galL(s); if (!(l === l)) return Promise.resolve();
    set = innerWidth < innerHeight ? 'P' : 'L'; P.set = set;
    const camL = l - 7; let a = 0; while (a + 1 < n && stops[a + 1].l <= camL) a++; const b = Math.min(a + 1, n - 1);
    want(a, false); want(b, false);
    const t0 = performance.now();
    return new Promise(res => { const tick = () => { const sa = slots[a].st, sb = slots[b].st; if ((sa >= 2 && sb >= 2) || performance.now() - t0 > 6000) res(); else setTimeout(tick, 30); }; tick(); });
  };
  P.addMass = addMass;
  /** the far city in, in a drive (its file came after the start, or in Turkey's lazy load): a part's build a frame, then a part's upload a
   *  frame, then in, every plate's depth map drawn again with it */
  P.addMassAsync = async (D, nextFrame) => {
    if (mass || !D) return; const parts = [];
    for (const [i0, i1, tl] of massSpans(D)) { await nextFrame(); if (mass) return; parts.push(quietIds(() => massMesh(massPart(D, i0, i1, tl)))); }
    for (const m of parts) { await nextFrame(); if (mass) return; warmPart(m); }
    await nextFrame(); if (mass) return; massIn(parts); P.invalidate();
  };
  P.setRing = r => { ring = r; ringOrig = r ? r.material : null; if (r) r.layers.enable(PX_LAYER); pver = -1; };
  if (ring) ring.layers.enable(PX_LAYER);
  P.hasMass = () => !!mass;
  P.massMesh = () => mass;

  // ---- the tools (never in a drive): the painter's layout, its masks, the stops' poses, other indexes
  /** the camera's pose in the zone's frame: { l, c: [E', N', y], f, u, fov, asp } */
  P.pose = (camera, s) => {
    const l = galL(s), zs = s - l, F = galFrame(zs), O = world.origin, x = camera.position.x + O.x - F.x, z = camera.position.z + O.z - F.z;
    const toZ = (dx, dz) => [-F.c * dx + F.s * dz, F.s * dx + F.c * dz]; // (E', N')
    camera.getWorldDirection(_t); _u.set(0, 1, 0).applyQuaternion(camera.quaternion);
    const c = toZ(x, z), f = toZ(_t.x, _t.z), u = toZ(_u.x, _u.z);
    path.at(s, _f); const camL = l + (camera.position.x + O.x - _f.x) * _f.fx + (camera.position.z + O.z - _f.z) * _f.fz;
    return { l: +camL.toFixed(2), c: [+c[0].toFixed(3), +c[1].toFixed(3), +camera.position.y.toFixed(3)], f: [+f[0].toFixed(5), +f[1].toFixed(5), +_t.y.toFixed(5)], u: [+u[0].toFixed(5), +u[1].toFixed(5), +_u.y.toFixed(5)], fov: camera.fov, asp: camera.aspect };
  };
  /** a point in the scene into the zone's frame (E', N'): the tools' */
  P.toZone = (x, z, s) => { const l = galL(s), F = galFrame(s - l), O = world.origin, dx = x + O.x - F.x, dz = z + O.z - F.z; return [-F.c * dx + F.s * dz, F.s * dx + F.c * dz]; };
  /** another index (the pipeline's, from another directory: the chain's previous plates, a set being painted), its files from base */
  P.setIndex = (J2, base2) => { gen++; for (const sl of slots) drop(sl); inflight = 0; J = J2; base = base2 || BASE; stops = J.stops; n = stops.length; slots = stops.map(mkSlot); pver = -1; };
  P.index = () => J;
  // (what the layout and the masks show: the world's chunks' ground and proxy, the sea, the sky dome (not in the masks), the far ring
  // and the far city; the landmark cards are drawn over the plates as they are, so neither painted nor projected)
  const hid = new Set();
  const hide = ob => { if (ob.visible) { ob.visible = false; hid.add(ob); } };
  const unhide = () => { for (const ob of hid) ob.visible = true; hid.clear(); };
  const cleanScene = sky => {
    const K = P.keep || {}, rs = P.realSky;
    for (const ob of scene.children) { if (ob.isLight || ob === K.world || ob === K.sea || (sky && ob === K.sky) || ob === mass || (rs && ob === rs.group)) continue; hide(ob); }
    if (rs) { const ch = rs.group.children; for (let i = 0; i < ch.length - 1; i++) hide(ch[i]); }
    world.chunks.forEach(ch => { for (const m of ch.group.children) if (!m.userData.px && !m.userData.ground) hide(m); });
  };
  /** masks at the current camera (an RGBA PNG data URL): R the proxy (what the plates paint), G anything of the layout (the ground, the
   *  sea, the proxy) */
  P.mask = (camera, W, H) => {
    const rt = quietIds(() => new THREE.WebGLRenderTarget(W, H, { depthBuffer: true })), white = quietIds(() => new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.FrontSide, fog: false }));
    const prevT = renderer.getRenderTarget(), prevO = scene.overrideMaterial, prevBg = scene.background, prevAU = renderer.shadowMap.autoUpdate, prevA = renderer.getClearAlpha(), prevL = camera.layers.mask;
    renderer.getClearColor(_c); scene.background = null; renderer.shadowMap.autoUpdate = false;
    const had = new Set(hid); cleanScene(false);
    const read = () => { const b = new Uint8Array(W * H * 4); renderer.readRenderTargetPixels(rt, 0, 0, W, H, b); return b; };
    renderer.setRenderTarget(rt); renderer.setClearColor(0x000000, 1);
    scene.overrideMaterial = white; renderer.clear(); camera.layers.set(PX_LAYER); renderer.render(scene, camera); const px = read();
    camera.layers.mask = prevL; renderer.clear(); renderer.render(scene, camera); const all = read();
    renderer.setRenderTarget(prevT); renderer.setClearColor(_c, prevA); scene.overrideMaterial = prevO; scene.background = prevBg; renderer.shadowMap.autoUpdate = prevAU; rt.dispose(); white.dispose();
    for (const ob of hid) if (!had.has(ob)) { ob.visible = true; hid.delete(ob); }
    const cv = document.createElement('canvas'); cv.width = W; cv.height = H; const g = cv.getContext('2d'), id = g.createImageData(W, H);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { const i = ((H - 1 - y) * W + x) * 4, j = (y * W + x) * 4; id.data[j] = px[i]; id.data[j + 1] = all[i]; id.data[j + 2] = 0; id.data[j + 3] = 255; }
    g.putImageData(id, 0, 0); return cv.toDataURL('image/png');
  };
  /** the painter's layout (on): the proxy in its built look with its extras (the first time, the world built again with the layout's own:
   *  PLATES.layout), the far city in its own; clean: nothing else but the ground, the sea and the sky dome (kept clean each frame: P.update).
   *  Off: the drive as it is */
  P.setLayout = (on, clean) => { P.layout = !!on; P.clean = !!(on && clean); unhide(); pver = -1; mode = -1; setMode(on ? 2 : 0);
    if (on && !PLATES.layout) { PLATES.layout = true; world.chunks.forEach(ch => world.dispose(ch)); world.chunks.clear(); world.job = null; } }; // (the world built again with the layout's extras: wait for its chunks)
  /** the tools: the plates painting with nothing else drawn but the ground, the sea and the sky (on), or the drive as it is (off) */
  P.setClean = on => { P.clean = !!on; if (!on) unhide(); };
  return P;
}
