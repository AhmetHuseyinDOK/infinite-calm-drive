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
 *  anything is missing, broken or too slow: the bridge then keeps the painted band's old city (main.js). (Step 35R-galata-2: and the second
 *  set, cards2: Hagia Sophia, the Blue Mosque, the Beyazıt Tower, the Haliç Metro Bridge with the Atatürk Bridge, Kız Kulesi before Üsküdar;
 *  in .more when it is in, else the first set alone) */
export async function loadRealSky(tier, timeoutMs = 15000, more = true) {
  const [a, b] = await Promise.all([loadCards(tier, 'cards1', timeoutMs), more ? loadCards(tier, 'cards2', timeoutMs) : null]);
  if (!a) { if (b) b.img.close(); return null; }
  a.more = b ? [b] : []; return a;
}
/** (step 35R-galata-2) one more sheet of cards (cards2), loaded after the start at a Galata start (realSky.addSheet) */
export async function loadCards(tier, name, timeoutMs = 15000) {
  const base = ASSETS + 'real/galata/';
  return orNull((async () => {
    const r = await fetch(base + name + '.json');
    if (!r.ok) throw new Error(name + '.json ' + r.status);
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
  })(), timeoutMs, name === 'cards1' ? "the Galata Bridge's real skyline unavailable, keeping the painted band's:" : "the Galata Bridge's second skyline cards unavailable, keeping the first:");
}

/** (GALATA-3) the far city as real massing: assets/real/galata/mass1.json and its binary (~/cdtest/g38/scripts/gen_mass.py: every
 *  OpenStreetMap building over both shores of the Golden Horn's mouth seen from the road that the chunks' near blocks don't build, on its
 *  real outline in the zone's frame, its foot on the real ground (open elevation), its height from its storeys, its kind, roof and colour; the
 *  minarets), the phones' lighter one ('lo': the far small ones left out). Checked whole; null (never rejects) when anything is missing,
 *  broken or too slow: the far ring then holds the far city alone */
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
  })(), timeoutMs, "the Galata zone's far city unavailable, keeping the far ring alone:");
}
/** the binary's buildings (struct of arrays) and minarets, checked against its length */
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
// (the far city's surfaces, their codes in aF.w: a wall's kind + 8 · its colour; a flat roof 1000 + colour, a hipped one 2000 + colour, a
// mosque's dome 3000, a minaret's shaft 4000, its cone 5000, its balcony 6000, a tree's crown 7000 + its shade)
const MK = { flat: 1000, hip: 2000, dome: 3000, shaft: 4000, cone: 5000, balc: 6000, tree: 7000 };
/** (a flat roof is drawn only where the road's cameras can look down on it: lower than this, m above the sea) */
const ROOF_SEEN = 14;
/** the far city's geometry from loadMass's data, in the zone's frame (x = −E', z = N': the compass's mirror, as the ring's; turned and placed
 *  each frame by realsky's update): each building's walls where they face the road somewhere (the binary's mask), with their facade's
 *  coordinates (aF: metres along the outline, metres over its ground floor's foot, its height, its code); its roof (flat behind its
 *  parapet, a hipped tile roof, or a mosque's dome over its flat roof); each minaret (its shaft, balcony and cone) */
function massGeometry(D) {
  const { nB, B, V, Mn, nM, Tr, nT } = D;
  // (counted first: one allocation each)
  let nv = 0, ni = 0;
  for (let i = 0, o = 0; i < nB; o += B.n[i], i++) {
    const k = B.n[i]; let w = 0; for (let e = 0; e < k; e++) if (B.mask[i] >>> e & 1) w++;
    nv += w * 4; ni += w * 6;
    if (B.roof[i] === 1) { nv += k * 3; ni += k * 3; } else if (B.top[i] - 0.7 < ROOF_SEEN) { nv += k; ni += (k - 2) * 3; }
    if (B.roof[i] === 2) { nv += 9 * 5; ni += 8 * 4 * 6; }
    if (B.roof[i] === 3) { nv += k * 4; ni += k * 6; }
  }
  nv += nM * 6 * 2 * 4; ni += nM * 6 * 6 * 4; nv += nT * 7; ni += nT * 10 * 3;
  const pos = new Float32Array(nv * 3), nrm = new Int8Array(nv * 3), af = new Float32Array(nv * 4), idx = new Uint32Array(ni);
  let v = 0, t = 0;
  const vert = (x, y, z, nx, ny, nz, a, b, c, d) => {
    pos[v * 3] = x; pos[v * 3 + 1] = y; pos[v * 3 + 2] = z;
    nrm[v * 3] = Math.round(nx * 127); nrm[v * 3 + 1] = Math.round(ny * 127); nrm[v * 3 + 2] = Math.round(nz * 127);
    af[v * 4] = a; af[v * 4 + 1] = b; af[v * 4 + 2] = c; af[v * 4 + 3] = d; return v++;
  };
  const tri = (a, b, c) => { idx[t++] = a; idx[t++] = b; idx[t++] = c; };
  const pts = [], T0 = new Uint32Array(nB + 1);
  for (let i = 0, o = 0; i < nB; o += B.n[i], i++) {
    T0[i] = t;
    const k = B.n[i], y0 = B.base[i], y1 = B.top[i], code = B.kind[i] + 8 * B.tint[i], H = y1 - y0 - 1.5;
    let cx = 0, cz = 0, per = 0;
    for (let e = 0; e < k; e++) { cx -= V[(o + e) * 2] / k; cz += V[(o + e) * 2 + 1] / k; }
    // the walls (x = −E: with the mirror, a CCW outline in E', N' is clockwise here; its quads wound to face out)
    for (let e = 0; e < k; e++) {
      const q = (e + 1) % k, ax = -V[(o + e) * 2], az = V[(o + e) * 2 + 1], bx = -V[(o + q) * 2], bz = V[(o + q) * 2 + 1];
      const dx = bx - ax, dz = bz - az, L = Math.hypot(dx, dz) || 1;
      if (B.mask[i] >>> e & 1) {
        const nx = -dz / L, nz = dx / L, f = -1.5; // (out: a CCW outline in E', N' is clockwise in the mirrored x, z: out is (−dz, dx))
        const a0 = vert(ax, y0, az, nx, 0, nz, per, f, H, code), b0 = vert(bx, y0, bz, nx, 0, nz, per + L, f, H, code);
        const b1 = vert(bx, y1, bz, nx, 0, nz, per + L, H, H, code), a1 = vert(ax, y1, az, nx, 0, nz, per, H, H, code);
        tri(a0, b0, b1); tri(a0, b1, a1); // (facing out: (b0 − a0) × (b1 − a0) ∝ (−dz, 0, dx))
      }
      per += L;
    }
    if (B.roof[i] === 1) { // (a hipped tile roof: a face from each eave to the ridge's point over the middle)
      const rise = Math.min(4.0, 0.9 + Math.sqrt(Math.abs(per)) * 0.18), ay = y1 + rise, rc = MK.hip + B.tint[i];
      for (let e = 0; e < k; e++) {
        const q = (e + 1) % k, ax = -V[(o + e) * 2], az = V[(o + e) * 2 + 1], bx = -V[(o + q) * 2], bz = V[(o + q) * 2 + 1];
        // (its normal: (b − a) × (apex − a), turned up)
        const ux = bx - ax, uz = bz - az, wx = cx - ax, wy = rise, wz = cz - az;
        let nx = 0 * wz - uz * wy, ny = uz * wx - ux * wz, nz = ux * wy - 0 * wx; if (ny < 0) { nx = -nx; ny = -ny; nz = -nz; }
        const l = Math.hypot(nx, ny, nz) || 1; nx /= l; ny /= l; nz /= l;
        const a = vert(ax, y1, az, nx, ny, nz, 0, 0, 0, rc), b = vert(bx, y1, bz, nx, ny, nz, 0, 0, 0, rc), c = vert(cx, ay, cz, nx, ny, nz, 0, 1, 0, rc);
        // (counter-clockwise seen from above: the cross of (b − a, c − a) has y > 0)
        if ((bz - az) * (cx - ax) - (bx - ax) * (cz - az) > 0) tri(a, b, c); else tri(a, c, b);
      }
    } else { // (a flat roof behind its parapet: only where the road can look down on it; higher, never seen)
      const ry = y1 - 0.7, rc = MK.flat + B.tint[i], v0 = v; pts.length = 0;
      if (ry < ROOF_SEEN) {
      for (let e = 0; e < k; e++) { const x = -V[(o + e) * 2], z = V[(o + e) * 2 + 1]; vert(x, ry, z, 0, 1, 0, 0, 0, 0, rc); pts.push(new THREE.Vector2(x, z)); }
      const T = THREE.ShapeUtils.triangulateShape(pts, []); if (T.length > k - 2) T.length = k - 2;
      for (const [a, b, c] of T) { const A = pts[a], Bq = pts[b], Cq = pts[c]; if ((Bq.y - A.y) * (Cq.x - A.x) - (Bq.x - A.x) * (Cq.y - A.y) > 0) tri(v0 + a, v0 + b, v0 + c); else tri(v0 + a, v0 + c, v0 + b); }
      for (let j = T.length; j < k - 2; j++) tri(v0, v0, v0); // (degenerate: the count kept)
      }
      if (B.roof[i] === 3) { // (a set-back top floor over the flat roof, as so many of the city's blocks have: its outline drawn in about its middle)
        const sc = 0.62, ty = ry + 2.9, pc = 3 + 8 * ((B.tint[i] + 23) % 64); let pp = 0; pts.length = 0;
        for (let e = 0; e < k; e++) {
          const q = (e + 1) % k, ax = cx + (-V[(o + e) * 2] - cx) * sc, az = cz + (V[(o + e) * 2 + 1] - cz) * sc, bx = cx + (-V[(o + q) * 2] - cx) * sc, bz = cz + (V[(o + q) * 2 + 1] - cz) * sc;
          const dx = bx - ax, dz = bz - az, L = Math.hypot(dx, dz) || 1, nx = -dz / L, nz = dx / L, h = ty - ry;
          const a0 = vert(ax, ry, az, nx, 0, nz, pp, 4.0, 5.0 + h, pc), b0 = vert(bx, ry, bz, nx, 0, nz, pp + L, 4.0, 5.0 + h, pc), b1 = vert(bx, ty, bz, nx, 0, nz, pp + L, 4.0 + h, 5.0 + h, pc), a1 = vert(ax, ty, az, nx, 0, nz, pp, 4.0 + h, 5.0 + h, pc);
          tri(a0, b0, b1); tri(a0, b1, a1); pp += L;
        }
        // (its own roof over the eye's reach: never seen)
      }
      if (B.roof[i] === 2) { // (a mosque's lead dome on a low drum over its middle)
        let area = 0; for (let e = 0; e < k; e++) { const q = (e + 1) % k; area += V[(o + e) * 2] * V[(o + q) * 2 + 1] - V[(o + q) * 2] * V[(o + e) * 2 + 1]; }
        const r = Math.min(12, Math.max(2.5, Math.sqrt(Math.abs(area) / 2) * 0.33)), d0 = v;
        for (let ri = 0; ri <= 4; ri++) { // (rings: the drum's foot, its top, then the dome to its crown)
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
  T0[nB] = t;
  // the minarets: a shaft of eight sides, the balcony's ring at three quarters of its height, the upper shaft, the lead cone
  for (let m = 0; m < nM; m++) {
    const x = -Mn[m * 5], z = Mn[m * 5 + 1], y0 = Mn[m * 5 + 2], h = Mn[m * 5 + 3], r = Mn[m * 5 + 4];
    const rings = [[y0, r, MK.shaft], [y0 + h * 0.74, r, MK.shaft], [y0 + h * 0.74, r * 1.55, MK.balc], [y0 + h * 0.77, r * 1.55, MK.balc], [y0 + h * 0.77, r * 0.85, MK.shaft], [y0 + h * 0.86, r * 0.85, MK.shaft], [y0 + h * 0.86, r * 0.92, MK.cone], [y0 + h, 0.02, MK.cone]];
    for (let s2 = 0; s2 < 4; s2++) {
      const [ya, ra, ca] = rings[s2 * 2], [yb, rb] = rings[s2 * 2 + 1], v0 = v, cone = ca === MK.cone, sl = cone ? (ra - rb) / (yb - ya) : 0, nl = Math.hypot(1, sl);
      for (let j = 0; j < 6; j++) { const b = (j / 6) * Math.PI * 2, c = Math.cos(b), sn = Math.sin(b);
        vert(x + c * ra, ya, z + sn * ra, c / nl, sl / nl, sn / nl, 0, 0, 0, ca); vert(x + c * rb, yb, z + sn * rb, c / nl, sl / nl, sn / nl, 0, 1, 0, ca); }
      for (let j = 0; j < 6; j++) { const a = v0 + j * 2, b = v0 + ((j + 1) % 6) * 2; tri(a, b + 1, b); tri(a, a + 1, b + 1); }
    }
  }
  // the trees: a crown each, a six-sided double cone rounded by its normals (from its middle), on a stretch of trunk under it
  for (let m = 0; m < nT; m++) {
    const x = -Tr[m * 5], z = Tr[m * 5 + 1], g0 = Tr[m * 5 + 2], h = Tr[m * 5 + 3], r = Tr[m * 5 + 4], cy = g0 + h - r * 0.9, v0 = v, sh = MK.tree + ((m * 37) % 64);
    vert(x, cy + r * 0.95, z, 0, 1, 0, 0, 1, 0, sh); vert(x, cy - r * 0.8, z, 0, -1, 0, 0, -1, 0, sh);
    for (let j = 0; j < 5; j++) { const b = (j / 5) * Math.PI * 2 + m, c = Math.cos(b), sn = Math.sin(b); vert(x + c * r, cy, z + sn * r, c * 0.92, 0.38, sn * 0.92, 0, 0, 0, sh); }
    for (let j = 0; j < 5; j++) { const a = v0 + 2 + j, b = v0 + 2 + ((j + 1) % 5); tri(v0, b, a); tri(v0 + 1, a, b); }
  }
  // (GALATA-3: the index buffer as four stretches of the route, each the buildings seen from it (gen_mass.py's panoramas along it: the stretch
  // ±60 m), near to far, then the minarets and the trees; the draw range picks the camera's stretch each frame: what no camera there sees isn't
  // drawn)
  let tot = 0; const tail = t - T0[nB];
  for (let q = 0; q < 4; q++) { for (let i = 0; i < nB; i++) if (B.seg[i] >> q & 1) tot += T0[i + 1] - T0[i]; tot += tail; }
  const all = new Uint32Array(tot), ranges = []; let w = 0;
  for (let q = 0; q < 4; q++) {
    const w0 = w;
    for (let i = 0; i < nB; i++) if (B.seg[i] >> q & 1) { all.set(idx.subarray(T0[i], T0[i + 1]), w); w += T0[i + 1] - T0[i]; }
    all.set(idx.subarray(T0[nB], t), w); w += tail; ranges.push(w0, w - w0);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos.subarray(0, v * 3), 3)); g.setAttribute('normal', new THREE.BufferAttribute(nrm.subarray(0, v * 3), 3, true));
  g.setAttribute('aF', new THREE.BufferAttribute(af.subarray(0, v * 4), 4)); g.setIndex(new THREE.BufferAttribute(all, 1));
  g.userData.ranges = ranges; g.setDrawRange(ranges[0], ranges[1]);
  return g;
}

const RING_R = 2400, D2 = Math.PI / 180, KEY_A = 40 * D2, KEY_E = 40 * D2, _kf = new THREE.Vector3();
const _p = [0, 0], _bn = new THREE.Color(), _bc = new THREE.Vector3(), NOON_SUN = new THREE.Color('#fff5dd').multiplyScalar(3.35), NOON_SKY = new THREE.Color('#8fb1ec').multiplyScalar(1.35 * 2);
/** sk: loadRealSky's (GALATA-3: or null, its cards failed: the far ring and the far city alone); post: the grade's; fog: the scene's fog
 *  colour; mass: loadMass's (or null). update(camera, s, origin) each frame: returns how much of the far horizon it holds (0 … 1: the
 *  procedural rings give way) */
export function makeRealSky(sk, post, fog, aniso = 1, mass = null) {
  // (each sheet's cards in a mesh of their own, one draw each: the same shader, so the same program (step 35R-galata-2: cards2's five))
  const mkSheet = q => {
    const tex = new THREE.Texture(q.img); tex.colorSpace = THREE.NoColorSpace; tex.flipY = false; tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipmapLinearFilter; tex.magFilter = THREE.LinearFilter; tex.anisotropy = aniso; tex.needsUpdate = true;
    const C = q.cards, n = C.length, pos = new Float32Array(n * 12), uv = new Float32Array(n * 8), idx = [];
    for (let i = 0; i < n; i++) {
      const [u0, v0, u1, v1] = C[i].uv; // (v from the sheet's top, as the image bitmap is uploaded: unflipped)
      uv.set([u0, v1, u1, v1, u1, v0, u0, v0], i * 8);
      idx.push(i * 4, i * 4 + 1, i * 4 + 2, i * 4, i * 4 + 2, i * 4 + 3);
    }
    const geo = new THREE.BufferGeometry(), pa = new THREE.BufferAttribute(pos, 3); pa.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('position', pa); geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); geo.setIndex(idx);
    return { tex, C, n, pos, pa, geo };
  };
  const sheets = sk ? [sk, ...(sk.more || [])].map(mkSheet) : [];
  let C = sheets.flatMap(q => q.C), n = C.length; const tex = sheets.length ? sheets[0].tex : null;
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
  const uHz = { value: 0.00035 }, cardMat = map => new THREE.ShaderMaterial({
    fog: false, side: THREE.DoubleSide,
    uniforms: { map: { value: map }, uHz, ...shared },
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
  const cmats = sheets.map(q => cardMat(q.tex));
  const meshes = sheets.map((q, k) => { const m = new THREE.Mesh(q.geo, cmats[k]); m.frustumCulled = false; m.renderOrder = 2; return m; });
  // (GALATA-3: without its first cards, a stand-in drawing nothing, so the cards' program is compiled with the rest and the second sheet
  // (addSheet, after the start) compiles nothing)
  if (!sheets.length) { const t0 = new THREE.DataTexture(new Uint8Array(4), 1, 1); t0.needsUpdate = true; const g0 = new THREE.BufferGeometry(); g0.setAttribute('position', new THREE.BufferAttribute(new Float32Array(9), 3)); g0.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(6), 2));
    const m0 = new THREE.Mesh(g0, cardMat(t0)); m0.frustumCulled = false; m0.renderOrder = 2; meshes.push(m0); }
  // the far skyline all round from open elevation (GR.hz: the horizon's angle over the eye every 0.5° of compass bearing, from the
  // bridge): a ring RING_R out round the camera (no parallax: the far shores), its compass turned to the zone's, its top at the real
  // skyline's angle; painted as a far city in haze (blocks of light and shade, window rows), lighter at its foot over the water.
  // (GALATA-3: its top in aF.x; drawn by the far city's program, below)
  // (GALATA-3: its houses' roofline is geometry now, a step each house (1100 round the ring), not a cut-out: the far city's program has no
  // discard, so its depth test stays early and the hidden layers of the far city cost nothing)
  const HZ = GR.hz, m = HZ.elev.length, NH = 1100, rp = new Float32Array(NH * 12), ru = new Float32Array(NH * 8), tops = new Float32Array(NH * 16), ri = new Uint16Array(NH * 6);
  const hzTop = u => { const q = u * m, i = Math.floor(q) % m, t = q - Math.floor(q), e = HZ.elev[i] * (1 - t) + HZ.elev[(i + 1) % m] * t; return HZ.eye + Math.tan(Math.max(e, 0.15) * D2) * RING_R; };
  const hh = x => { const v = Math.sin(x * 127.1) * 43758.5453; return v - Math.floor(v); };
  for (let c = 0; c < NH; c++) {
    const u0 = c / NH, u1 = (c + 1) / NH, b0 = u0 * Math.PI * 2, b1 = u1 * Math.PI * 2, top = hzTop((u0 + u1) / 2) - 6 * hh(Math.floor(c / 3) * 3.3) - 2 * hh(c * 3.3);
    rp.set([-Math.sin(b0) * RING_R, -30, Math.cos(b0) * RING_R, -Math.sin(b0) * RING_R, top, Math.cos(b0) * RING_R, -Math.sin(b1) * RING_R, -30, Math.cos(b1) * RING_R, -Math.sin(b1) * RING_R, top, Math.cos(b1) * RING_R], c * 12); // (x = −east: the game's world is the compass's mirror)
    ru.set([u0, 0, u0, 1, u1, 0, u1, 1], c * 8);
    for (let k = 0; k < 4; k++) tops[c * 16 + k * 4] = top + 6 * hh(Math.floor(c / 3) * 3.3) + 2 * hh(c * 3.3); // (the real skyline's height there: the shader's rows hang from it)
    const k = c * 4; ri.set([k, k + 2, k + 1, k + 1, k + 2, k + 3], c * 6);
  }
  const rg = new THREE.BufferGeometry(); rg.setAttribute('position', new THREE.BufferAttribute(rp, 3)); rg.setAttribute('uv', new THREE.BufferAttribute(ru, 2)); rg.setAttribute('aF', new THREE.BufferAttribute(tops, 4));
  rg.setAttribute('normal', new THREE.BufferAttribute(new Int8Array(NH * 4 * 3), 3, true)); rg.setIndex(new THREE.BufferAttribute(ri, 1));
  // (GALATA-3) the far ring and the far city's massing in one program: its own branch each (uMass, a uniform: a material each, the same
  // source); the massing lit by the scene's light (uSun: its direction) in painted sun and blue shade, its walls' windows box-filtered (no
  // shimmer at any distance), the band's tones by the hour, its windows lit at night, the cards' haze with distance
  const sharedM = { ...shared, uHz, uSun: { value: new THREE.Vector3(0, 1, 0) }, uRingHz: { value: 0 } };
  const farMat = mass => new THREE.ShaderMaterial({
    fog: false, side: THREE.FrontSide, uniforms: { ...sharedM, uMass: { value: mass ? 1 : 0 } }, // (both front faces only, so one program: the ring's face the camera at its middle)
    // (GALATA-3: what is the same over a surface is worked out per vertex: its painted colour (the old city's plaster by its own hash, a roof's,
    // a dome's, a minaret's, a crown's), the light on it (the painter's key: sun and blue shade), its glass and its shops' dark; per pixel only
    // its windows (box-filtered), its shops, its cornice, then the grade's inverse once and the haze)
    vertexShader: /* glsl */`attribute vec4 aF; uniform float uMass, uHz, uHaze; uniform vec3 uSun; varying vec2 vUv; varying float vY, vHz; varying vec4 vF; varying vec3 vWall, vGlass, vDark;
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
        vUv = uv; vY = position.y; vF = aF; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv;
        vWall = vGlass = vDark = vec3(0.0); vHz = 0.0;
        if (uMass > 0.5) {
          vec3 n = normalize(mat3(modelMatrix) * normal); float code = floor(aF.w + 0.5), lit = smoothstep(-0.2, 0.3, dot(n, uSun));
          vec3 L = mix(vec3(0.62, 0.67, 0.82), vec3(1.02, 0.99, 0.93), lit) * (0.97 + 0.06 * n.y), p;
          if (code < 999.5) { p = plaster(mod(code, 8.0), floor(code / 8.0)); vGlass = vec3(0.31, 0.36, 0.43) * L; vDark = vec3(0.19, 0.21, 0.24) * L; }
          else if (code < 1999.5) p = mix(vec3(0.66, 0.64, 0.61), vec3(0.75, 0.72, 0.66), h1(code)); // (a flat roof's concrete and its tar)
          else if (code < 2999.5) p = mix(vec3(0.72, 0.39, 0.28), vec3(0.63, 0.42, 0.34), h1(code * 1.3)); // (a hipped roof's tiles)
          else if (code < 3999.5) p = vec3(0.55, 0.59, 0.65); // (a mosque's lead dome)
          else if (code < 4999.5) p = vec3(0.88, 0.87, 0.83); // (a minaret's stone)
          else if (code < 5999.5) p = vec3(0.50, 0.55, 0.62); // (its lead cone)
          else if (code < 6999.5) p = vec3(0.74, 0.73, 0.70); // (its balcony)
          else p = mix(vec3(0.22, 0.38, 0.21), vec3(0.36, 0.52, 0.27), h1((code - 7000.0) * 0.77)) * (0.86 + 0.22 * clamp(aF.y * 0.5 + 0.5, 0.0, 1.0)); // (a crown, lighter at its top)
          vWall = p * L;
          float d = -mv.z, hz = uHz * 1.45; vHz = max((1.0 - exp(-d * hz * d * hz)) * 0.85, uHaze);
        }
      }`,
    fragmentShader: UNGRADE + TONE + /* glsl */`
      uniform float uMass, uHz, uRingHz; uniform vec3 uSun; varying vec2 vUv; varying float vY, vHz; varying vec4 vF; varying vec3 vWall, vGlass, vDark;
      float h1(float x){ return fract(sin(x * 127.1) * 43758.5453); }
      float h2(vec2 p){ vec3 h3 = fract(vec3(p.xyx) * 0.1031); h3 += dot(h3, h3.yzx + 33.33); return fract((h3.x + h3.y) * h3.z); }
      // (a periodic pulse of duty d centred in each period, box-filtered over w periods: exact coverage, so far windows average to a tone)
      float pulse(float x, float d, float w){ w = max(w, 1e-4); float o = 0.5 - 0.5 * d, a = x - 0.5 * w, b = x + 0.5 * w;
        return ((floor(b) * d + clamp(fract(b) - o, 0.0, d)) - (floor(a) * d + clamp(fract(a) - o, 0.0, d))) / w; }
      void main(){
        if (uMass > 0.5) {
          float code = floor(vF.w + 0.5), glow = 0.0; vec3 c = vWall;
          if (code < 999.5) {
            // a wall: its storeys' windows by its kind (bay, window width, storey, window height; the ground floor's height, its shops), the
            // cornice under the parapet, the shade at its foot
            float kind = mod(code, 8.0), u = vF.x, v = vF.y, H = vF.z;
            vec4 K = kind < 0.5 ? vec4(2.3, 0.85, 2.9, 1.45) : kind < 1.5 ? vec4(2.8, 1.15, 3.2, 1.5) : kind < 2.5 ? vec4(3.3, 1.5, 3.6, 2.0) : kind < 3.5 ? vec4(3.0, 2.5, 3.2, 1.7) : kind < 5.5 ? vec4(4.2, 1.0, 4.5, 2.4) : vec4(3.6, 1.6, 4.0, 2.2);
            float gh = kind < 0.5 ? 0.4 : kind > 3.5 && kind < 5.5 ? 1.6 : kind > 5.5 ? 1.0 : 4.0;
            float x = u / K.x, yw = (v - gh - 0.9 - 0.5 * K.w) / K.z + 0.5, fx = fwidth(x), fy = fwidth(yw);
            float inUp = clamp((v - gh + 0.15) / 0.3, 0.0, 1.0) * clamp((H - 1.15 - v) / 0.3, 0.0, 1.0);
            // (far off, a window under a pixel: its storeys' average; nearer, each window box-filtered)
            float win = (fx > 0.7 ? (K.y / K.x) * (K.w / K.z) : pulse(x, K.y / K.x, fx) * pulse(yw, K.w / K.z, fy)) * inUp;
            c = mix(vWall, vGlass, win);
            if (v < gh && kind > 0.5 && kind < 3.5) { float xs = u / 3.4; c = mix(vWall * 0.84, vDark, pulse(xs, 0.74, fwidth(xs)) * clamp((v - 0.15) * 5.0, 0.0, 1.0) * clamp((gh - 0.95 - v) * 5.0, 0.0, 1.0)); }
            c *= 1.0 + 0.12 * clamp((v - H + 1.0) * 8.0, 0.0, 1.0) * clamp((H - 0.5 - v) * 8.0, 0.0, 1.0); // (the cornice)
            c *= 0.84 + 0.16 * clamp((v + 0.5) / 3.0, 0.0, 1.0); // (the shade at its foot)
            if (uWin > 0.003) { float hw = h2(vec2(floor(x), floor(yw)) + floor(code / 8.0) * 17.0); glow = win * (fx > 0.7 ? 0.18 : step(hw, 0.32) * (0.55 + 1.3 * hw)); } // (a third of its windows lit at night)
          }
          gl_FragColor = vec4(mix(skyTone(c) + vec3(1.25, 0.82, 0.42) * glow * uWin, uFogC, vHz), 1.0);
          return;
        }
        // the far city on its hill, as the cards paint it: small houses and blocks ~8 m wide stepping up the slope to the real skyline
        // (vTop), each column of them with its own storey height and its rows staggered from its neighbours' (no lines across), each
        // house a beige, ochre, old pink, white or grey wall with its windows, a terracotta (or lead-grey) roof and the shade under its
        // eaves, round dark green trees among them (GALATA-3: its roofline the geometry's steps)
        float u = vUv.x * 1100.0, col = floor(u), fu = fract(u), y = vY, top = vF.x;
        float rowH = 8.0 + 4.0 * h1(col * 2.17), yy = top - y + rowH * h1(col * 0.731);
        float r = floor(yy / rowH), fr = fract(yy / rowH); // (fr 0 at a house's roof ridge)
        float k = h1(col * 1.7 + r * 31.3), k2 = h1(col * 5.1 + r * 7.7);
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
        // (the air between, 2 km and more of it: the far city soft in a blue-grey haze, as the cards have it)
        p = mix(p, vec3(0.60, 0.66, 0.74), 0.36);
        vec3 c = skyWin(skyTone(p), p, vec2(u * 0.5, y * 0.4));
        gl_FragColor = vec4(mix(c, uFogC, max(uHaze, uRingHz)), 1.0);
      }`,
  });
  const rm = farMat(false);
  const ring = new THREE.Mesh(rg, rm); ring.frustumCulled = false; ring.renderOrder = 998;
  // (GALATA-3) the far city's massing (loadMass: its geometry in the zone's frame, placed each frame; drawn after the world, whose near
  // blocks hide most of it, and before the ring)
  let mm = mass ? farMat(true) : null, massMesh = mass ? new THREE.Mesh(massGeometry(mass), mm) : null;
  if (massMesh) { massMesh.frustumCulled = false; massMesh.renderOrder = 997; }
  const group = new THREE.Group(); group.add(...meshes); if (massMesh) group.add(massMesh); group.add(ring); group.visible = false;
  const u = shared; let fade = new Float32Array(n), at = new Float32Array(n * 2); // (at: each card's place in the world, for the tools)
  return {
    group, tex, texes: sheets.map(q => q.tex), mats: [...cmats, rm, ...(mm ? [mm] : [])], cards: C, at, mass: massMesh, massInfo: mass ? { nB: mass.nB, nM: mass.nM, nT: mass.nT } : null, ringOn: true, on: false,
    /** (step 35R-galata-2) one more sheet of cards (loadCards: cards2 after the start), its mesh on the same program (nothing compiles);
     *  returns its texture, to upload */
    addSheet(q) {
      const S = mkSheet(q), mt = cardMat(S.tex), m = new THREE.Mesh(S.geo, mt); m.frustumCulled = false; m.renderOrder = 2;
      sheets.push(S); cmats.push(mt); this.mats.push(mt); this.texes.push(S.tex); group.add(m); group.remove(ring); group.add(ring); // (the ring stays the group's last child)
      C = sheets.flatMap(s => s.C); n = C.length; fade = new Float32Array(n); at = new Float32Array(n * 2); this.cards = C; this.at = at;
      return S.tex;
    },
    /** (GALATA-3) the far city's massing after the start (loadMass's; at a start far from Galata): its mesh on the ring's program
     *  (compiled with it: nothing compiles); returns the mesh */
    addMass(ms) {
      if (massMesh || !ms) return null;
      mm = farMat(true); massMesh = new THREE.Mesh(massGeometry(ms), mm); massMesh.frustumCulled = false; massMesh.renderOrder = 997;
      group.remove(ring); group.add(massMesh); group.add(ring); this.mats.push(mm); this.mass = massMesh; // (the ring stays the group's last child)
      return massMesh;
    },
    /** each frame: the camera; s, its road position; origin, the world's render origin. Returns its share of the far horizon */
    update(camera, s, origin) {
      const l = galL(s), w = Math.max(zoneWeight(s, 'galata'), zoneWeight(s + 300, 'galata'));
      group.visible = l === l && w > 0.02; if (!group.visible) return 0;
      u.uA.value = Math.min(1, w * 1.6); this.on = u.uA.value >= 0.5; // (GALATA-3: the far ring and the far city shown from there: main.js; they have no discard)
      const zs = s - l, F = galFrame(zs), cx = camera.position.x + origin.x, cz = camera.position.z + origin.z;
      for (let i = 0, q = 0, j = 0; i < n; i++, j++) {
        if (j === sheets[q].n) { sheets[q].pa.needsUpdate = true; q++; j = 0; } // (the next sheet's cards)
        const pos = sheets[q].pos, c = C[i], lo = c.l[0], hi = c.l[1], f = Math.min(1, Math.max(0, Math.min((l - lo) / 25, (hi - l) / 25)));
        fade[i] = f; galWorld(zs, c.E, c.N, _p); at[i * 2] = _p[0]; at[i * 2 + 1] = _p[1];
        const x = _p[0], z = _p[1], dx = cx - x, dz = cz - z, d = Math.hypot(dx, dz) || 1, rx = dz / d, rz = -dx / d; // (its right, facing the camera)
        const k = f > 0.5 && (massMesh || c.y0 < 40) ? 1 : 0, wl = c.w * c.ax * k, wr = c.w * (1 - c.ax) * k, y0 = c.y0, y1 = c.y0 + c.h * k, X = x - origin.x, Z = z - origin.z;
        const o = j * 12; // (its four corners, written in place: no array a frame)
        pos[o] = X - rx * wl; pos[o + 1] = y0; pos[o + 2] = Z - rz * wl; pos[o + 3] = X + rx * wr; pos[o + 4] = y0; pos[o + 5] = Z + rz * wr;
        pos[o + 6] = X + rx * wr; pos[o + 7] = y1; pos[o + 8] = Z + rz * wr; pos[o + 9] = X - rx * wl; pos[o + 10] = y1; pos[o + 11] = Z - rz * wl;
      }
      if (sheets.length) sheets[sheets.length - 1].pa.needsUpdate = true;
      // (the ring round the camera, its compass turned to the zone's: a bearing b along the game's heading h0 − b)
      ring.position.set(camera.position.x, 0, camera.position.z); ring.rotation.set(0, Math.atan2(F.s, F.c), 0);
      // (GALATA-3: the far city where the zone's frame puts it: x = −E', z = N' turned to the zone's compass, as the ring)
      // (its light the painter's key: from behind the camera and to its left, 40° up, so the city's faces towards us stand in the sun and
      // its sides part into light and blue shade, as a sunlit city painted; the real sun stands ahead of the road)
      if (massMesh) { massMesh.position.set(F.x - origin.x, 0, F.z - origin.z); massMesh.rotation.set(0, Math.atan2(F.s, F.c), 0);
        { const R = massMesh.geometry.userData.ranges, q = l < 380 ? 0 : l < 700 ? 1 : l < 1080 ? 2 : 3; if (R && massMesh.geometry.drawRange.start !== R[q * 2]) massMesh.geometry.setDrawRange(R[q * 2], R[q * 2 + 1]); } // (the camera's stretch of the route)
        camera.getWorldDirection(_kf); const fl = Math.hypot(_kf.x, _kf.z) || 1, fx = _kf.x / fl, fz = _kf.z / fl, ce = Math.cos(KEY_E), se = Math.sin(KEY_E), ca = Math.cos(KEY_A), sa = Math.sin(KEY_A);
        sharedM.uSun.value.set((-fx * ca + fz * sa) * ce, se, (-fz * ca - fx * sa) * ce); }
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
      sharedM.uRingHz.value = 0.42 * paint; // (GALATA-3: the far ring, 2.4 km off, in the bright day's haze: a far city, not a tiled wall)
      return w;
    },
  };
}
