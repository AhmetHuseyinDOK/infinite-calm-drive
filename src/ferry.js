// Istanbul's city ferries (Şehir Hatları vapurları, W2): one at a time out on the Bosphorus, crossing the strait or plying up
// and down it at a ferry's 6 m/s, as the concept painting has one: white, two decks of windows, the yellow funnel, prominent
// on the left in the middle distance. Its wake is painted into the sea itself (sea.js ferryWake: the white water at its bow
// and along its hull, the churned trail behind its stern, the two arms of its V spreading out behind it). A Turkish start
// finds it where the concept has it; then, each time it has fallen behind or gone far off, the next one comes into view
// ahead after a while. Shown only on the Bosphorus and (W3) on the Golden Horn either side of the Galata Bridge, where a second
// one plies too (its concept has three in view).
import * as THREE from 'three';
import { GB } from './geom.js';
import * as P from './props.js';
import { rng, sstep } from './util.js';
import { SEA, zoneWeight, tunnelNear, galL, galWaterXZ } from './path.js';

const V = 6.0, BOW = 24.5, LEN = 47, BEAM = 9.2; // its speed (m/s); its bow from its origin, its length and beam (props.js ferry)
const _f = {};

const _uv = { u0: 0, u1: 0, v0: 0, v1: 0 }, W1 = [1, 1, 1], I4 = new THREE.Matrix4();
/** the ferry as painted (the world atlas's trFerry: a Grok painting of a Şehir Hatları ferry's side, anchored on the concept's):
 *  its painted side on both sides of the hull (the far one mirrored, its bow still forward), white hull and decks between them
 *  for a view from ahead or astern, the yellow funnel. info: the painting's extent (props.js TR_HOUSES.extras.trFerry) */
function paintedFerry(G, info) {
  const a = G.atlas, c = G.color, cl = P.atlasCell('trFerry'), len = info.len, Lt = len / (info.x1 - info.x0), Ht = info.h / (info.wl - info.top);
  const xa = len / 2 + info.x0 * Lt, xb = xa - Lt, yb = -(1 - info.wl) * Ht, yt = yb + Ht, B = 4.4; // (image left: its bow, at +x)
  a.setM(I4); c.setM(I4); a.world = true; a.litV = 40; // (its windows light up early in the dusk: the atlas's home-window code)
  _uv.u0 = cl.u0; _uv.u1 = cl.u1; _uv.v0 = cl.v0; _uv.v1 = cl.v1;
  a.quad([xa, yb, -B], [xb, yb, -B], [xb, yt, -B], [xa, yt, -B], W1, _uv); // (its side to −z, seen from there: its bow to the left)
  _uv.u0 = cl.u1; _uv.u1 = cl.u0;
  a.quad([xb, yb, B], [xa, yb, B], [xa, yt, B], [xb, yt, B], W1, _uv);     // (to +z, mirrored)
  a.litV = 0;
  // between the two: the hull (to the main deck), its pointed bow, the decks' houses, the funnel
  const WH = [0.8, 0.8, 0.78], DK = [0.62, 0.6, 0.56], b = B - 0.06, L2 = len / 2;
  c.box(-L2 + 1, -0.6, -b, L2 - 7, 4.6, b, WH);
  c.quad([L2 - 7, -0.6, -b], [L2 - 0.5, -0.6, 0], [L2, 4.6, 0], [L2 - 7, 4.6, -b], WH); c.quad([L2 - 0.5, -0.6, 0], [L2 - 7, -0.6, b], [L2 - 7, 4.6, b], [L2, 4.6, 0], WH);
  c.quad([L2 - 7, 4.6, b], [L2 - 7, 4.6, -b], [L2, 4.6, 0], [L2, 4.6, 0], DK);
  c.box(-L2 + 3, 4.6, -b + 0.4, L2 - 12, 5.8, b - 0.4, WH); // (the decks' houses: under the painting's own outline)
  c.cyl(-1.8, 5.8, 0, 1.5, 1.4, 3.9, 10, [0.85, 0.6, 0.12]); c.cyl(-1.8, 9.7, 0, 1.4, 1.38, 0.4, 10, [0.06, 0.06, 0.07]);
}

/** M: the materials (M.color, and M.atlasW for its painted side and flag: the world atlas's cells); sea: makeSea's (its uniforms) */
export function makeFerry(M, sea) {
  const G = { color: new GB({ ao: true }), atlas: new GB({ uv: true, ao: true, lit: true }) };
  const info = P.TR_HOUSES.extras && P.TR_HOUSES.extras.trFerry;
  if (info) paintedFerry(G, info); else P.ferry(G, new THREE.Matrix4(), rng(61)); // (without its painting: the box ferry)
  const group = new THREE.Group(); group.visible = false;
  for (const [g, m] of [[G.color, M.color], [G.atlas, M.atlasW]]) { const geo = g.build(); if (geo) { const o = new THREE.Mesh(geo, m); o.frustumCulled = true; group.add(o); } }
  // (its position in absolute world coordinates, its heading ψ (its bow towards (sin ψ, cos ψ), as the road's), its pause
  // before the next one comes into view; its wake's uniform)
  const st = { x: 0, z: 0, psi: 0, on: false, wait: 0, r: rng(613), g: group, w: sea.u.uFerry, gal: false, zs: NaN };
  // a second one (W3), out on the Golden Horn by the Galata Bridge only (its concept has three in view): the same meshes, a
  // wake of its own, random numbers of its own (so the first one's comings and goings on the Bosphorus are as before)
  const group2 = new THREE.Group(); group2.visible = false; for (const o of group.children) group2.add(new THREE.Mesh(o.geometry, o.material));
  const st2 = { x: 0, z: 0, psi: 0, on: false, wait: 5, r: rng(617), g: group2, w: sea.u.uFerry2, gal: true, zs: NaN };
  /** puts ferry F sRel metres ahead of s, u off the road's middle (negative: out on the strait), heading phi round from the
   *  road's direction towards the strait (0: along the road, 90°: straight out, 180°: back towards us) */
  function place(F, path, s, sRel, u, phi) {
    path.at(s + sRel, _f);
    F.x = _f.x + _f.rx * u; F.z = _f.z + _f.rz * u; F.psi = _f.h + phi; F.on = true;
  }
  function hide(F) { F.g.visible = false; F.w.value.w = 0; }
  /** one ferry's frame: w its waters' weight at the camera (the Bosphorus's and the Galata Bridge's; the second one's: the
   *  Golden Horn's only) */
  function step(F, dt, path, s, origin, w) {
    if (w < 0.5) { hide(F); F.on = false; F.wait = 2; return; }
    if (!F.on) { // the next one: ahead, after a pause, where the strait is open (not by a tunnel's headland)
      if ((F.wait -= dt) > 0) { hide(F); return; }
      const r = F.r, sRel = r.range(260, 480), gal = zoneWeight(s + sRel, 'galata');
      if ((F.gal ? 0 : zoneWeight(s + sRel, 'bosphorus')) + gal < 0.95 || (tunnelNear(s + sRel) && Math.abs(s + sRel - tunnelNear(s + sRel).s) < 280)) { F.wait = 3; return; }
      const along = r() < 0.4, phi = along ? (r() < 0.5 ? r.range(0, 0.12) : Math.PI - r.range(0, 0.12)) : r.range(1.25, 2.0);
      // (the Golden Horn either side of the bridge: on the right half the time, heading out to the right)
      const sd = gal > 0.5 && r() < 0.5 ? -1 : 1;
      place(F, path, s, sRel, -sd * r.range(60, 300), sd * phi);
      // (the real Galata zone, step 35R: only where the real Golden Horn is, its bow and its stern on the water)
      if (gal > 0.5) { const zs = s + sRel - galL(s + sRel), hx = Math.sin(F.psi) * BOW, hz = Math.cos(F.psi) * BOW; if (!galWaterXZ(zs, F.x + hx, F.z + hz) || !galWaterXZ(zs, F.x - hx, F.z - hz)) { F.on = false; F.wait = 1; return; } F.zs = zs; } else F.zs = NaN;
    }
    const dx = Math.sin(F.psi), dz = Math.cos(F.psi);
    F.x += dx * V * dt; F.z += dz * V * dt;
    // (…and its run ends where it would come to the shore)
    if (F.zs === F.zs && !galWaterXZ(F.zs, F.x + dx * (BOW + 8), F.z + dz * (BOW + 8))) { F.on = false; F.wait = F.r.range(6, 30); hide(F); return; }
    // gone: fallen behind us, or far off (out of sight in the haze)
    path.at(s, _f);
    const rx = F.x - _f.x, rz = F.z - _f.z, ahead = rx * _f.fx + rz * _f.fz;
    if (ahead < -80 || rx * rx + rz * rz > 1300 * 1300) { F.on = false; F.wait = F.r.range(6, 30); hide(F); return; }
    F.g.visible = true;
    F.g.position.set(F.x - origin.x, SEA - 0.3, F.z - origin.z); F.g.rotation.set(0, F.psi - Math.PI / 2, 0);
    // its wake in the sea: from its bow (absolute), its heading; how much (fading in as it comes into view)
    F.w.value.set(F.x + dx * BOW, F.z + dz * BOW, F.psi, sstep(0.5, 0.8, w));
  }
  const api = {
    group, group2, st, st2,
    /** the opening view of a Turkish start: on the Bosphorus crossing out from our shore ~95 m ahead, ~50 m off it, broadside to
     *  us, its bow to the left, as the concept painting has it; on the Galata Bridge (W3) two, heading out across the Golden Horn
     *  on the left, ~120 m ahead and ~40 m out, and ~210 m ahead and ~70 m out, as its concept has them */
    opening(path, s, zone = 'bosphorus') {
      if (zone === 'galata') { place(st, path, s, 120, -60, (80 * Math.PI) / 180); place(st2, path, s, 210, -90, (100 * Math.PI) / 180); st.zs = st2.zs = s - galL(s); }
      else place(st, path, s, 95, -52, (100 * Math.PI) / 180);
    },
    /** dt; path, s: the road and where we are on it; origin: the world's (the scene is drawn relative to it); bos: the ferries'
     *  waters' weight at the camera (the Bosphorus's and the Galata Bridge's; 0: hidden, its wake off); gal: the Golden Horn's */
    update(dt, path, s, origin, bos, gal = 0) {
      step(st, dt, path, s, origin, bos); step(st2, dt, path, s, origin, gal);
      sea.u.uFerryB.value.set(LEN, BEAM, V, 0);
    },
  };
  return api;
}
