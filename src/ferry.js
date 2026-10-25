// Istanbul's city ferries (Şehir Hatları vapurları, W2): one at a time out on the Bosphorus, crossing the strait or plying up
// and down it at a ferry's 6 m/s, as the concept painting has one: white, two decks of windows, the yellow funnel, prominent
// on the left in the middle distance. Its wake is painted into the sea itself (sea.js ferryWake: the white water at its bow
// and along its hull, the churned trail behind its stern, the two arms of its V spreading out behind it). A Turkish start
// finds it where the concept has it; then, each time it has fallen behind or gone far off, the next one comes into view
// ahead after a while. Shown only on the Bosphorus.
import * as THREE from 'three';
import { GB } from './geom.js';
import * as P from './props.js';
import { rng, sstep } from './util.js';
import { SEA, zoneWeight, tunnelNear } from './path.js';

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
  // before the next one comes into view)
  const st = { x: 0, z: 0, psi: 0, on: false, wait: 0, r: rng(613) };
  /** puts it sRel metres ahead of s, u off the road's middle (negative: out on the strait), heading phi round from the road's
   *  direction towards the strait (0: along the road, 90°: straight out, 180°: back towards us) */
  function place(path, s, sRel, u, phi) {
    path.at(s + sRel, _f);
    st.x = _f.x + _f.rx * u; st.z = _f.z + _f.rz * u; st.psi = _f.h + phi; st.on = true;
  }
  const api = {
    group, st,
    /** the opening view of a Turkish start: crossing out from our shore ~95 m ahead, ~50 m off it, broadside to us, its bow to
     *  the left, as the concept painting has it */
    opening(path, s) { place(path, s, 95, -52, (100 * Math.PI) / 180); },
    /** dt; path, s: the road and where we are on it; origin: the world's (the scene is drawn relative to it); bos: the
     *  Bosphorus's weight at the camera (0: hidden, its wake off) */
    update(dt, path, s, origin, bos) {
      const u = sea.u;
      if (bos < 0.5) { group.visible = false; u.uFerry.value.w = 0; st.on = false; st.wait = 2; return; }
      if (!st.on) { // the next one: ahead, after a pause, where the strait is open (not by a tunnel's headland)
        if ((st.wait -= dt) > 0) { group.visible = false; u.uFerry.value.w = 0; return; }
        const r = st.r, sRel = r.range(260, 480);
        if (zoneWeight(s + sRel, 'bosphorus') < 0.95 || (tunnelNear(s + sRel) && Math.abs(s + sRel - tunnelNear(s + sRel).s) < 280)) { st.wait = 3; return; }
        const along = r() < 0.4, phi = along ? (r() < 0.5 ? r.range(0, 0.12) : Math.PI - r.range(0, 0.12)) : r.range(1.25, 2.0);
        place(path, s, sRel, -r.range(60, 300), phi);
      }
      const dx = Math.sin(st.psi), dz = Math.cos(st.psi);
      st.x += dx * V * dt; st.z += dz * V * dt;
      // gone: fallen behind us, or far off (out of sight in the haze)
      path.at(s, _f);
      const rx = st.x - _f.x, rz = st.z - _f.z, ahead = rx * _f.fx + rz * _f.fz;
      if (ahead < -80 || rx * rx + rz * rz > 1300 * 1300) { st.on = false; st.wait = st.r.range(6, 30); group.visible = false; u.uFerry.value.w = 0; return; }
      group.visible = true;
      group.position.set(st.x - origin.x, SEA - 0.3, st.z - origin.z); group.rotation.set(0, st.psi - Math.PI / 2, 0);
      // its wake in the sea: from its bow (absolute), its heading; how much (fading in as it comes into view)
      u.uFerry.value.set(st.x + dx * BOW, st.z + dz * BOW, st.psi, sstep(0.5, 0.8, bos));
      u.uFerryB.value.set(LEN, BEAM, V, 0);
    },
  };
  return api;
}
