// The world is built in 60 m chunks along the infinite road; each chunk merges its contents into a handful of meshes.
import * as THREE from 'three';
import { zoneMix, zoneW, zoneAt, zparam, groundOffsetMix, SEA, WALL_U, crossingS, crossingValid, crossingNear, XING, XOFF, riverS, riverValid, riverNear, riverBank, RIV, ROFF, RIVER_DROP, tunnelNear, T_HALF, T_RIDGE, RAISE, ridgeHr, tubeHalf } from './path.js';
import { xingPosts } from './crossing.js';
import { GB } from './geom.js';
import * as P from './props.js';
import { rng, hash2, clamp, sstep } from './util.js';
import { S_WRAP, groundMaterialFor, PROP_DEPTH } from './materials.js';
import { SURF, surfGeometry } from './surf.js';

export const CH = 60;
const WBEAM = [[0.5, 0.055], [0.6, 0.075], [0.67, 0.025], [0.74, 0.075], [0.84, 0.055]]; // guardrail profile (m up, m out)
const NEAR = [0.7, 0.9, 1.45, 1.5, 1.9, 2.0, 2.1, 2.65, 3.05, 3.4]; // 1.45: just outside a tunnel tube's wall
const FAR = [7, 9, 11.5, 14.5, 18, 23, 29, 36, 45, 56, 70, 86, 104, 124, 140, 160, 185, 215];
const POLE_SP = 32;
// the coast's water along its sea wall (placeCoast): how far out from the wall each column of the strip lies (m)
const SHORE_D = [-0.2, 2.2, 5.5, 10, 17, 27, 38];
const WIRE = [0.025, 0.026, 0.032], BIRD = [0.05, 0.05, 0.065];
const IDENT = new THREE.Matrix4();
const mod = (a, n) => ((a % n) + n) % n;
/** true within m metres of a level crossing (keeps the track corridor clear) */
const nearX = (s, m) => { const c = crossingNear(s); return !!c && Math.abs(s - c.s) < m; };
/** true within m metres of a city side street (they open at every 150 m crosswalk) */
const nearSide = (s, m) => Math.abs(s - Math.round(s / 150) * 150) < m;
/** true within m metres of a tunnel's centre (keeps roadside things out of the ridge and the tube) */
const nearT = (s, m) => { const t = tunnelNear(s); return !!t && Math.abs(s - t.s) < m; };
/** true within m metres of a river (keeps houses, poles and trees out of the channel) */
const nearR = (s, m) => { const r = riverNear(s); return !!r && Math.abs(s - r.s) < m; };

class GroundB {
  constructor() { this.P = []; this.N = []; this.SU = []; this.ZW = []; this.RK = []; this.RV = []; this.ZS = []; this.I = []; }
  grid(nr, nc, fn) {
    const base = this.P.length / 3;
    for (let i = 0; i < nr; i++) for (let j = 0; j < nc; j++) {
      const v = fn(i, j);
      this.P.push(v[0], v[1], v[2]); this.N.push(v[3], v[4], v[5]); this.SU.push(v[6], v[7]);
      this.ZW.push(v[8], v[9], v[10], v[11]); this.RK.push(v[12], v[13]); this.RV.push(v[14] || 0); this.ZS.push(v[15] || 0);
    }
    for (let i = 0; i < nr - 1; i++) for (let j = 0; j < nc - 1; j++) {
      const a = base + i * nc + j, b = a + 1, c = a + nc, d = c + 1;
      this.I.push(a, b, c, b, d, c);
    }
  }
  /** like grid(), but normals come from the grid's own neighbours (one height sample per vertex instead of five).
   *  gl / gr extra "ghost" columns on either side are evaluated only for the normals, so pieces join without creases. */
  gridN(nr, nc, fn, gl = 0, gr = 0) {
    const NC = nc + gl + gr, V = new Array(nr * NC);
    for (let i = 0; i < nr; i++) for (let j = 0; j < NC; j++) V[i * NC + j] = fn(i, j - gl);
    const at = (i, j) => V[Math.min(nr - 1, Math.max(0, i)) * NC + Math.min(NC - 1, Math.max(0, j))];
    for (let i = 0; i < nr; i++) for (let j = gl; j < gl + nc; j++) {
      const a = at(i, j - 1), b = at(i, j + 1), c = at(i - 1, j), d = at(i + 1, j), v = V[i * NC + j];
      const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = d[0] - c[0], vy = d[1] - c[1], vz = d[2] - c[2];
      let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
      if (ny < 0) { nx = -nx; ny = -ny; nz = -nz; }
      const l = Math.hypot(nx, ny, nz) || 1; v[3] = nx / l; v[4] = ny / l; v[5] = nz / l;
    }
    this.grid(nr, nc, (i, j) => V[i * NC + j + gl]);
  }
  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.P, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.N, 3));
    g.setAttribute('su', new THREE.Float32BufferAttribute(this.SU, 2));
    g.setAttribute('zw', new THREE.Float32BufferAttribute(this.ZW, 4));
    g.setAttribute('rk', new THREE.Float32BufferAttribute(this.RK, 2));
    g.setAttribute('rv', new THREE.Float32BufferAttribute(this.RV, 1));
    g.setAttribute('zs', new THREE.Float32BufferAttribute(this.ZS, 1)); // snow-country weight (the 6th zone)
    g.setIndex(this.I); g.computeBoundingSphere();
    return g;
  }
}

export class World {
  constructor(scene, path, M, riverMat) {
    this.path = path; this.M = M; this.riverMat = riverMat; this.heapCache = new Map(); // (M.shore, M.surf: the coast's water along its wall, and its surf)
    this.group = new THREE.Group(); scene.add(this.group);
    this.chunks = new Map(); this.origin = { x: 0, z: 0 }; this.reveal = [];
    this.ahead = 760; this.behind = 40;
  }
  setOrigin(x, z) {
    this.origin.x = x; this.origin.z = z;
    for (const ch of this.chunks.values()) ch.group.position.set(ch.ox - x, 0, ch.oz - z);
  }
  /** keep chunks around s; builds nearest-first, spread over frames within the time budget. Returns 1 while busy. */
  update(s, budgetMs) {
    const c0 = Math.floor((s - this.behind) / CH), c1 = Math.floor((s + this.ahead) / CH);
    for (const [k, ch] of this.chunks) if (k < c0 - 1 || k > c1 + 1) { this.dispose(ch); this.chunks.delete(k); }
    if (this.job && (this.job.c < c0 - 1 || this.job.c > c1 + 1)) this.job = null;
    { const ch = this.reveal[0]; if (ch) { const m = ch.pending.shift(); if (m) ch.group.add(m); if (!ch.pending.length) this.reveal.shift(); } }
    const t0 = performance.now();
    for (;;) {
      if (!this.job) {
        let next = -1;
        for (let c = Math.max(0, c0); c <= c1; c++) if (!this.chunks.has(c)) { next = c; break; }
        if (next < 0) return 0;
        if (next * CH - s < 320) budgetMs = Math.max(budgetMs, 12); // falling behind: catch up
        this.job = { c: next, it: this.gen(next) };
      }
      const res = this.job.it.next();
      if (res.done) { // stage the meshes: they are revealed one per frame so their GPU uploads don't all land at once
        const ch = res.value; ch.pending = ch.group.children.slice(); ch.group.clear();
        this.chunks.set(this.job.c, ch); this.group.add(ch.group); this.reveal.push(ch); this.job = null;
      }
      if (performance.now() - t0 > budgetMs) return 1;
    }
  }
  dispose(ch) {
    this.group.remove(ch.group); ch.group.traverse(o => { if (o.geometry) o.geometry.dispose(); });
    if (ch.pending) { for (const m of ch.pending) m.geometry && m.geometry.dispose(); ch.pending.length = 0; }
    const i = this.reveal.indexOf(ch); if (i >= 0) this.reveal.splice(i, 1);
  }
  /** Small details — signal lamps, road paint, lamp heads, light pools — are hidden in chunks more than `far` metres
   *  ahead (tree leaf cards beyond `farLeaf`), where they'd be a pixel or less and mostly fogged anyway. Each is a draw
   *  call, and draw calls are most of the main thread's work on phones. Lamp heads and light pools stay at night. */
  lod(s, far, night, farLeaf = Infinity) {
    this.chunks.forEach((ch, c) => { // (forEach + index loop: no per-frame garbage)
      const d = c * CH - s, kids = ch.group.children;
      for (let i = 0; i < kids.length; i++) {
        const m = kids[i], k = m.userData.detail;
        if (k) m.visible = k === 'leaf' ? d < farLeaf : d < far || (night && k === 'light');
      }
    });
  }
  /** reveal everything staged right away (used while the title screen is up) */
  flush() { for (const ch of this.reveal) { for (const m of ch.pending) ch.group.add(m); ch.pending.length = 0; } this.reveal.length = 0; }

  *gen(c) {
    const path = this.path, s0 = c * CH, s1 = s0 + CH;
    const O = path.at(s0), ox = O.x, oz = O.z;
    const r = rng(Math.floor(hash2(c, 777) * 4294967295));
    const G = { atlas: new GB({ uv: true, ao: true, lit: true }), color: new GB({ ao: true }), foliage: new GB(), leaf: new GB({ uv: true }), lamp: new GB({ color: false }), sig: new GB({ color: false }), sodium: new GB({ color: false }), decal: new GB({ uv: true }), pool: new GB({ uv: true, color: false }),
      gleaf: new GB({ uv: true, off: true }), gblossom: new GB({ uv: true, off: true }) }; // (the broadleaf and cherry crowns' painted clusters, camera-facing)
    const ground = new GroundB(), shore = { rows: [], puffs: [] }, river = [];
    G.lamps = []; // lights that can light the car: chunk-local x, y, z, power … (props.js lampAt)
    const f = {}, f2 = {};

    // ---------- helpers ----------
    const H = (s, u) => { path.at(s, f2); const rw = zparam(s, 'rw'); return f2.y + groundOffsetMix(s, u, f2.y, rw); };
    const zw4 = s => { const w = zoneW(s); return [w.city, w.sakura, w.coast, w.country, w.snow]; };
    const world = (s, u, y) => { path.at(s, f); return [f.x + f.rx * u - ox, y, f.z + f.rz * u - oz]; };
    const matAt = (s, u, y, extraYaw = 0, faceRoad = true) => {
      path.at(s, f);
      const yaw = f.h - Math.PI / 2 + (faceRoad && u < 0 ? Math.PI : 0) + extraYaw;
      const m = new THREE.Matrix4().makeRotationY(yaw); m.setPosition(f.x + f.rx * u - ox, y, f.z + f.rz * u - oz);
      m.groundY = y; return m; // a prop's base is on the ground (contact AO in geom.js); onGround / snow poles say otherwise
    };
    const onGround = (s, u, dy = 0, extraYaw = 0, faceRoad = true) => { const h = H(s, u), m = matAt(s, u, h + dy, extraYaw, faceRoad); m.groundY = h; return m; };
    const road = s => path.at(s, f2).y;
    const rwAt = s => zparam(s, 'rw');
    const walkW = s => { const w = zoneW(s); return w.city + w.sakura > 0.5 ? (w.city >= w.sakura ? 3.0 : 2.6) : 0; };

    // ---------- terrain ----------
    {
      const rr = riverNear(s0 + CH / 2), fine = !!rr && rr.s > s0 - 40 && rr.s < s1 + 40;
      const rows = fine ? 61 : 21, rwMid = rwAt(s0 + CH / 2);
      const cols = (() => { const right = [0, ...NEAR]; const out = right.map(n => n); FAR.forEach(v => out.push(v - rwMid)); return out; })();
      // columns: −far … −rw | rw … far, expressed as offsets from the road edge
      const offs = [...cols.slice().reverse().map(v => -v), ...cols];
      const nc = offs.length;
      // two halves (left / right of the road) so neither build step is long; normals from grid neighbours
      // rows: uniform, plus a pair right at each tunnel portal so the ground steps up exactly behind the portal face
      const sl = Array.from({ length: rows }, (_, i) => s0 + (i / (rows - 1)) * CH);
      { const tq = tunnelNear(s0 + CH / 2); if (tq) for (const sp of [tq.s - T_HALF, tq.s + T_HALF]) if (sp > s0 + 0.1 && sp < s1 - 0.1) sl.push(sp - 0.03, sp + 0.03); }
      sl.sort((p, q) => p - q);
      const half = nc / 2, rowS = sl.map(s => { path.at(s, f); return { s, f: { ...f }, rw: rwAt(s), w: zw4(s), rb: fine ? riverBank(s) : 0 }; });
      const qtr = Math.round(half / 2);
      // quarters, so no single build step is long; they share a column and use ghost columns for seamless normals
      for (const [j0, j1, gl, gr] of [[0, qtr, 0, 1], [qtr - 1, half, 1, 0], [half, half + qtr + 1, 0, 1], [half + qtr, nc, 1, 0]]) {
        ground.gridN(rowS.length, j1 - j0, (i, jj) => {
          // (on the coast the ground's edge tucks 15 cm under the road's: the low road leaves the bright sea plane just
          // below the 6 cm step between them, and from the side it showed through that slit as a blue line)
          const R = rowS[i], F = R.f, j = j0 + jj, o = offs[j], tk = o === 0 && R.w[2] > 0 ? 0.15 : 0;
          const u = o < 0 || (o === 0 && j < half) ? o - R.rw + tk : o + R.rw - tk;
          // the ridge look (slope-protection grid) belongs on the cutting face only — it starts 1 m beyond the road edge — at full
          // weight once the face stands 0.5 m proud of the natural ground. (It used to be RAISE / 1.5 everywhere: the bottom ~2 m
          // of every face blended into the beach sand / verge — a white fog smear on the coast's sea side — and the flat verge
          // took a third of the grid colour)
          const y = F.y + groundOffsetMix(R.s, u, F.y, R.rw), rg = Math.abs(u) > R.rw + 0.98 ? Math.min(1, RAISE / 0.5) : 0;
          return [F.x + F.rx * u - ox, y, F.z + F.rz * u - oz, 0, 1, 0, mod(R.s, S_WRAP), u, R.w[0], R.w[1], R.w[2], R.w[3], R.rw, 0, R.rb > 0 ? R.rb : -rg, R.w[4]];
        }, gl, gr);
        yield;
      }
    }
    yield;
    // ---------- road ----------
    {
      const rows = 31;
      ground.grid(rows, 2, (i, j) => {
        const s = s0 + (i / (rows - 1)) * CH, rw = rwAt(s), u = j ? rw : -rw;
        path.at(s, f); const e = f.y, de = (road(s + 1) - road(s - 1)) / 2;
        let nx = -de * f.fx, ny = 1, nz = -de * f.fz; const nl = Math.hypot(nx, ny, nz);
        const w = zw4(s);
        return [f.x + f.rx * u - ox, e, f.z + f.rz * u - oz, nx / nl, ny / nl, nz / nl, mod(s, S_WRAP), u, w[0], w[1], w[2], w[3], rw, 1, 0, w[4]];
      });
    }
    // ---------- sidewalks + curbs (only where the zone has them) ----------
    {
      const rows = [];
      for (let i = 0; i <= 30; i++) { const s = s0 + (i / 30) * CH; rows.push({ s, sw: walkW(s) }); }
      const runs = []; let cur = null;
      for (const rw of rows) { if (rw.sw > 0) { if (!cur) { cur = []; runs.push(cur); } cur.push(rw); } else cur = null; }
      for (const run of runs) {
        if (run.length < 2) continue;
        for (const side of [-1, 1]) {
          ground.grid(run.length, 2, (i, j) => {
            const { s, sw } = run[i], rw = rwAt(s), u = side * (j === (side > 0 ? 0 : 1) ? rw : rw + sw);
            path.at(s, f); const w = zw4(s);
            return [f.x + f.rx * u - ox, f.y + 0.15, f.z + f.rz * u - oz, 0, 1, 0, mod(s, S_WRAP), u, w[0], w[1], w[2], w[3], rw, 2, 0, w[4]];
          });
          ground.grid(run.length, 2, (i, j) => {
            const { s } = run[i], rw = rwAt(s), u = side * rw, top = side > 0 ? j : 1 - j;
            path.at(s, f); const w = zw4(s);
            return [f.x + f.rx * u - ox, f.y + (top ? 0.15 : 0), f.z + f.rz * u - oz, -side * f.rx, 0, -side * f.rz, mod(s, S_WRAP), u, w[0], w[1], w[2], w[3], rw, 3, 0, w[4]];
          });
        }
      }
    }

    yield;
    // ---------- scenery ----------
    yield* this.placePoles(c, s0, s1, r, G, matAt, H, world, road, rwAt);
    {
      const kx = Math.ceil((s0 - XOFF) / XING), sx = crossingS(kx);
      if (sx < s1 && crossingValid(sx)) yield* this.placeCrossing(G, ground, sx, matAt, road, rwAt, H, walkW, ox, oz);
      const kr = Math.ceil((s0 - ROFF) / RIV), sr = riverS(kr);
      if (sr < s1 && riverValid(sr)) yield* this.placeRiver(G, ground, sr, matAt, road, rwAt, H, walkW, ox, oz, r, river);
      const tt = tunnelNear(s0 + CH / 2);
      if (tt && tt.s + T_RIDGE > s0 && tt.s - T_RIDGE < s1) yield* this.placeTunnel(G, ground, tt, s0, s1, matAt, onGround, H, rwAt, ox, oz, r);
    }
    yield;
    for (let s = s0; s < s1; s += 4) {
      const z = zoneAt(s);
      if (((z === 'coast' && zoneW(s).coast > 0.45) || (z === 'mountain' && zoneW(s).mountain > 0.45)) && !nearT(s + 2, T_RIDGE + 4)) this.guardrail(G, s, Math.min(s + 4, s1), world, road, rwAt);
    }
    yield* this.placeCity(G, r, s0, s1, matAt, onGround, road, rwAt, walkW, H, ground, ox, oz);
    yield* this.placeSakura(G, r, s0, s1, matAt, onGround, road, rwAt, H);
    yield* this.placeCoast(G, r, c, s0, s1, matAt, onGround, rwAt, shore, world);
    yield;
    yield* this.placeCountry(G, r, s0, s1, matAt, onGround, road, rwAt, H);
    yield* this.placeMountain(G, r, s0, s1, matAt, onGround, road, rwAt, H);
    yield* this.placeSnow(G, r, s0, s1, matAt, onGround, road, rwAt, H);
    yield* this.placeVerge(G, r, s0, s1, matAt, H, rwAt, c, ox, oz);
    yield;

    // ---------- assemble ----------
    const grp = new THREE.Group();
    const add = (geo, mat, cast, recv, order = 0, detail) => { if (!geo) return null; const m = new THREE.Mesh(geo, mat); m.castShadow = cast; m.receiveShadow = recv; m.renderOrder = order; if (detail) m.userData.detail = detail; grp.add(m); return m; };
    const zset = new Set();
    for (const sq of [s0, s0 + 20, s0 + 40, s1]) { const m = zoneMix(sq); zset.add(m.a); if (m.t > 0) zset.add(m.b); }
    add(ground.build(), groundMaterialFor([...zset]), false, true); yield;
    add(G.atlas.build(), this.M.atlas, true, true); yield;
    { const m = add(G.color.build(), this.M.color, true, true); if (m) m.customDepthMaterial = PROP_DEPTH; } yield; // (wires cast no shadow)
    add(G.foliage.build(), this.M.foliage, true, true);
    add(G.leaf.build(), this.M.leaf, true, true, 0, 'leaf');
    if (this.M.gleaf) { const m = add(G.gleaf.build(), this.M.gleaf, true, true, 0, 'leaf'); if (m) m.customDepthMaterial = this.M.gleafDepth; } // (clusters face the sun in the shadow pass)
    // (blossom casts shadows but doesn't receive them: its shaded undersides already face away from the sun, and the
    // received shadows changed its colours by under 1% for ~0.4 ms on desktop)
    if (this.M.gblossom) { const m = add(G.gblossom.build(), this.M.gblossom, true, false, 0, 'leaf'); if (m) m.customDepthMaterial = this.M.gleafDepth; }
    yield;
    add(G.lamp.build(), this.M.lamp, false, false, 0, 'light');
    add(G.sig.build(), this.M.sig, false, false, 0, 'small');
    add(G.sodium.build(), this.M.sodium, false, false);
    add(G.decal.build(), this.M.decal, false, true, 1, 'small');
    add(G.pool.build(), this.M.pool, false, false, 2, 'light');
    if (shore.rows.length > 1) { // the water along the sea wall: a strip of rows across it (SHORE_D), drawn just before the sea
      const R = shore.rows, nc = SHORE_D.length, n = R.length * nc, pos = new Float32Array(n * 3), su = new Float32Array(n * 2), hf = new Float32Array(n * 2), idx = [];
      R.forEach((row, i) => {
        for (let j = 0; j < nc; j++) { const v = i * nc + j, o = j * 7; pos.set(row.subarray(o, o + 3), v * 3); su[v * 2] = row[o + 3]; su[v * 2 + 1] = row[o + 4]; hf[v * 2] = row[o + 5]; hf[v * 2 + 1] = row[o + 6]; }
        if (i > 0) for (let j = 0; j < nc - 1; j++) { const a = (i - 1) * nc + j, b = a + nc; idx.push(a, b, a + 1, a + 1, b, b + 1); } // (facing up)
      });
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('su', new THREE.BufferAttribute(su, 2)); g.setAttribute('hf', new THREE.BufferAttribute(hf, 2));
      g.setIndex(idx); g.computeBoundingSphere();
      add(g, this.M.shore, false, false, 997); // (opaque, before the sea plane (998): the plane is skipped under it)
    }
    if (shore.puffs.length) add(surfGeometry(shore.puffs), this.M.surf, false, false, 2, 'small'); // (the surf over the tetrapods)
    for (const g of river) add(g, this.riverMat, false, true);
    grp.position.set(ox - this.origin.x, 0, oz - this.origin.z);
    return { group: grp, ox, oz, s0, lamps: new Float32Array(G.lamps) };
  }

  // poles + overhead wires (country / coast / city share the rule so wires connect across zones)
  poleSpec(k) {
    const s = k * POLE_SP + 6, z = zoneAt(s);
    if (z === 'sakura' || nearX(s, 6) || nearR(s, 34) || nearT(s, T_RIDGE + 12)) return null;
    const rw = zparam(s, 'rw');
    const u = z === 'city' ? rw + 0.45 : z === 'coast' ? rw + 1.35 : z === 'mountain' ? -(rw + 1.45) : z === 'snow' ? rw + 2.9 : rw + 2.35;
    return { s, u, z };
  }
  *placePoles(c, s0, s1, r, G, matAt, H, world, road, rwAt) {
    const k0 = Math.ceil((s0 - 6) / POLE_SP), k1 = Math.floor((s1 - 6 - 0.001) / POLE_SP);
    for (let k = k0; k <= k1; k++) {
      const p = this.poleSpec(k); if (!p) continue;
      const y = p.z === 'city' ? road(p.s) + 0.15 : H(p.s, p.u);
      const M = matAt(p.s, p.u, y);
      const pr = rng(Math.floor(hash2(k, 31) * 4294967295));
      const anchors = P.utilityPole(G, M, pr, { trans: pr() < 0.45 });
      if (p.z === 'city' && (k % 2 === 0)) P.poleLamp(G, M, -0.11);
      if (k % 2) yield;
      const q = this.poleSpec(k + 1);
      if (q) {
        const qy = q.z === 'city' ? road(q.s) + 0.15 : H(q.s, q.u);
        const B = P.poleAnchors(matAt(q.s, q.u, qy));
        G.color.setM(new THREE.Matrix4());
        const sags = [];
        for (let i = 0; i < anchors.length; i++) {
          const a = anchors[i], b = B[i], sag = 0.35 + pr() * 0.4 + (i >= 7 ? 0.3 : 0);
          sags.push(sag);
          G.color.wire([a.x, a.y, a.z], [b.x, b.y, b.z], sag, i >= 7 ? 0.022 : 0.015, WIRE, 10);
        }
        if (p.z !== 'coast' && pr() < 0.38) { // a few birds resting on a top wire
          const i = Math.floor(pr() * 4), a = anchors[i], b = B[i], n = 1 + Math.floor(pr() * 4), t0 = 0.18 + pr() * 0.5;
          for (let j = 0; j < n; j++) {
            const tt = Math.min(0.92, t0 + j * (0.018 + pr() * 0.025));
            const x = a.x + (b.x - a.x) * tt, z = a.z + (b.z - a.z) * tt, y = a.y + (b.y - a.y) * tt - sags[i] * 4 * tt * (1 - tt);
            G.color.box(x - 0.07, y + 0.015, z - 0.07, x + 0.07, y + 0.19, z + 0.07, BIRD);
            G.color.box(x - 0.045, y + 0.19, z - 0.045, x + 0.045, y + 0.27, z + 0.045, BIRD);
          }
        }
      }
      if (p.z === 'city') {
        // service drops: across the street and to the near side
        G.color.setM(new THREE.Matrix4());
        const n = 1 + Math.floor(pr() * 3);
        for (let i = 0; i < n; i++) {
          const a = anchors[7 + (i % 2)], ds = (pr() - 0.5) * 14, rw = rwAt(p.s + ds);
          const far = pr() < 0.55, u = far ? -(rw + 3.15) : rw + 3.15;
          const b = world(p.s + ds, u, road(p.s + ds) + 5.2 + pr() * 2.5);
          G.color.wire([a.x, a.y, a.z], b, 0.25 + pr() * 0.4, 0.012, WIRE, 8);
        }
      }
    }
  }

  /** a city intersection: side streets lined with houses and wires, traffic signals, 止まれ markings, sometimes a 歩道橋 */
  *intersection(G, r, sc, k, matAt, road, rwAt, walkW, ground, ox, oz) {
    const f0 = this.path.at(sc, {}), e = road(sc), rw = rwAt(sc), sw = walkW(sc) || 3.0, cs = sc - 0.5, w = zoneW(sc), w4 = [w.city, w.sakura, w.coast, w.country];
    const xw = (ds, u, y) => [f0.x + f0.fx * (ds - 0.5) + f0.rx * u - ox, y, f0.z + f0.fz * (ds - 0.5) + f0.rz * u - oz];
    const front = rw + sw + 0.15;
    for (const side of [-1, 1]) {
      // the side street itself (kind 10: its own asphalt + white edge lines), just above the lots (which sit at +0.14)
      const ua = side * (rw + sw), ub = side * 80;
      ground.grid(21, 2, (i, j) => { const u = ua + ((ub - ua) * i) / 20, ds = (j ? -3.0 : 3.0) * side, p = xw(ds, u, e + 0.165); return [p[0], p[1], p[2], 0, 1, 0, ds * side, u, w4[0], w4[1], w4[2], w4[3], rw, 10]; });
      // 止まれ painted in the lane that approaches the main road
      {
        const cu = side * (rw + sw + 3.2), cds = -side * 1.35, hw = 1.15, hh = 0.42;
        const P0 = (rx, uy) => xw(cds + side * rx, cu - side * uy, e + 0.18);
        G.decal.setM(new THREE.Matrix4());
        G.decal.quad(P0(-hw, -hh), P0(hw, -hh), P0(hw, hh), P0(-hw, hh), [1, 1, 1], P.uvOf('tomare'));
      }
      // houses and little shops facing the side street, behind the main-street row
      for (const bank of [-1, 1]) {
        let u = front + 15 + r() * 3;
        while (u < 52) {
          const wd = r.range(5.5, 8.5), uc = side * (u + wd / 2), t = r();
          const M = matAt(cs + bank * 3.3, uc, e + 0.14, bank > 0 ? Math.PI / 2 : -Math.PI / 2, false);
          P.building(G, M, r, { type: t < 0.5 ? 'house' : 'shop', w: wd, d: r.range(7, 10), floors: t < 0.5 ? 2 : r.int(2, 3), tint: r.pick(P.TINTS), litP: 0.45, fence: 0 });
          u += wd + r.range(0.2, 1.2);
          yield;
        }
        yield;
      }
      // a couple of utility poles with wires running down the side street
      const poles = [30, 54].map(uu => matAt(cs + 2.8, side * uu, e + 0.15, -Math.PI / 2, false));
      const pr = rng(Math.floor(hash2(k, side > 0 ? 71 : 73) * 4294967295));
      const an = poles.map(Mp => P.utilityPole(G, Mp, pr, { trans: pr() < 0.4 }));
      G.color.setM(new THREE.Matrix4());
      for (let i = 0; i < 7; i++) { const a = an[0][i], b = an[1][i]; G.color.wire([a.x, a.y, a.z], [b.x, b.y, b.z], 0.3 + pr() * 0.4, 0.014, WIRE, 10); }
    }
    // traffic signals for both directions (青 lit — it's always a calm green wave)
    P.trafficSignal(G, matAt(sc - 9, -(rw + 0.55), e + 0.15, 0, true), 1, rw + 0.55 - 1.6);
    P.trafficSignal(G, matAt(sc + 8, rw + 0.55, e + 0.15, 0, true), 1, rw + 0.55 - 1.6);
    if (k % 3 === 1) P.pedestrianBridge(G, matAt(sc + 15, 0, e, 0, false), rw + sw + 0.1, 'hodokyo' + (Math.abs(k) % 3));
  }

  /** level crossing: gravel bed + sleepers (shader), rails, rubber crossing panels, catenary, alarm posts, signs */
  *placeCrossing(G, ground, sx, matAt, road, rwAt, H, walkW, ox, oz) {
    const f0 = this.path.at(sx, {}), e = f0.y, rw = rwAt(sx), sw = walkW(sx), edge = rw + sw + 0.2, L = 150, bedY = e + 0.18;
    const w = zoneW(sx), w4 = [w.city, w.sakura, w.coast, w.country];
    const xw = (ds, u, y) => [f0.x + f0.fx * ds + f0.rx * u - ox, y, f0.z + f0.fz * ds + f0.rz * u - oz];
    const DS = [7.6, 4.7, -4.7, -7.6];
    for (const [ua, ub] of [[-L, -edge], [edge, L]]) {
      const nu = 24;
      ground.grid(nu + 1, DS.length, (i, j) => {
        const u = ua + ((ub - ua) * i) / nu, ds = DS[j], top = Math.abs(ds) < 5;
        const y = top ? bedY : Math.min(bedY - 0.05, H(sx + ds, u) - 0.03);
        const p = xw(ds, u, y);
        return [p[0], p[1], p[2], 0, 1, 0, ds, u, w4[0], w4[1], w4[2], w4[3], rw, 5];
      });
    }
    const panel = (ua, ub, y) => ground.grid(2, 2, (i, j) => { const u = i ? ub : ua, ds = j ? -3.3 : 3.3, p = xw(ds, u, y); return [p[0], p[1], p[2], 0, 1, 0, ds, u, w4[0], w4[1], w4[2], w4[3], rw, 6]; });
    panel(-rw, rw, e + 0.03);
    if (sw > 0) { panel(-edge, -rw, e + 0.165); panel(rw, edge, e + 0.165); }
    const stop = (dsa, dsb, ua, ub) => ground.grid(2, 2, (i, j) => { const u = i ? ub : ua, ds = j ? dsb : dsa, p = xw(ds, u, e + 0.025); return [p[0], p[1], p[2], 0, 1, 0, ds, u, w4[0], w4[1], w4[2], w4[3], rw, 7]; });
    stop(-7.15, -7.6, -rw + 0.3, -0.12); stop(7.6, 7.15, 0.12, rw - 0.3);
    yield;
    // rails + catenary in a frame whose local x runs along the track (u) and local z = −(s − sx)
    const M = matAt(sx, 0, e, -Math.PI / 2, false), c = G.color;
    c.setM(M);
    const STEEL = [0.42, 0.40, 0.38], STEEL2 = [0.3, 0.29, 0.28], POLE = [0.55, 0.57, 0.6];
    for (const td of [-2, 2]) for (const gg of [-0.5335, 0.5335]) {
      const z = -(td + gg);
      for (const [ua, ub] of [[-L, -edge], [edge, L]]) c.box(ua, 0.26, z - 0.035, ub, 0.34, z + 0.035, STEEL);
      c.box(-edge, 0.0, z - 0.035, edge, 0.04, z + 0.035, STEEL2);
    }
    const PU = [-146, -104, -64, -26, 26, 64, 104, 146];
    for (const u of PU) {
      for (const z of [-4.95, 4.95]) c.box(u - 0.12, 0.18, z - 0.12, u + 0.12, 7.4, z + 0.12, POLE);
      c.box(u - 0.1, 6.95, -5.15, u + 0.1, 7.2, 5.15, POLE);
      for (const td of [-2, 2]) c.box(u - 0.04, 6.3, -td - 0.04, u + 0.04, 6.95, -td + 0.04, POLE);
    }
    for (const td of [-2, 2]) for (let i = 0; i < PU.length - 1; i++) {
      c.wire([PU[i], 5.35, -td], [PU[i + 1], 5.35, -td], 0.05, 0.011, WIRE, 6);
      c.wire([PU[i], 6.4, -td], [PU[i + 1], 6.4, -td], 0.45, 0.011, WIRE, 8);
    }
    yield;
    // a little unstaffed station beside the near track at most countryside crossings
    const kx = Math.round((sx - XOFF) / XING);
    if (w.country > 0.9 && hash2(kx, 17) < 0.7) {
      const sd = hash2(kx, 19) < 0.5 ? -1 : 1, xa = sd > 0 ? rw + 9 : -(rw + 9 + 46), xb = sd > 0 ? rw + 9 + 46 : -(rw + 9);
      P.station(G, M, xa, xb, sd * (rw + 9), Math.abs(kx) % 4, rng(Math.floor(hash2(kx, 23) * 4294967295)));
      c.setM(M);
    }
    yield;
    // alarm posts (barrier arms + lamps are animated by the crossing rig)
    for (const p of xingPosts(this.path, sx)) {
      const m = new THREE.Matrix4().makeRotationY(p.yaw); m.setPosition(p.x - ox, p.y, p.z - oz);
      P.alarmPost(G, m);
    }
    // "railway crossing ahead" signs for both directions
    P.signPost(G, matAt(sx - 70, -(rwAt(sx - 70) + 0.6), road(sx - 70) + 0.15 * (sw > 0 ? 1 : 0)), 'sign_xing', 1, 2.2, 0.85);
    P.signPost(G, matAt(sx + 70, rwAt(sx + 70) + 0.6, road(sx + 70) + 0.15 * (sw > 0 ? 1 : 0)), 'sign_xing', 1, 2.2, 0.85); // for oncoming traffic
  }

  /** river crossing: flowing water, levee-top paths, a bridge with railings and named stone posts, trees on the banks */
  *placeRiver(G, ground, sr, matAt, road, rwAt, H, walkW, ox, oz, r, river) {
    const f0 = this.path.at(sr, {}), e = f0.y, rw = rwAt(sr), sw = walkW(sr), w = zoneW(sr), w4 = [w.city, w.sakura, w.coast, w.country];
    const sak = w.sakura > 0.5, L = 222, edge = rw + sw + 0.5, wy = e - RIVER_DROP;
    const xw = (ds, u, y) => [f0.x + f0.fx * ds + f0.rx * u - ox, y, f0.z + f0.fz * ds + f0.rz * u - oz];
    // water surface (su = (Δs, u) so the shader can flow it along the channel)
    {
      const pos = [], su = [], idx = [], n = 74;
      for (let i = 0; i <= n; i++) {
        const u = -L + (2 * L * i) / n;
        for (const ds of [14.3, -14.3]) { const p = xw(ds, u, wy); pos.push(p[0], p[1], p[2]); su.push(ds, u); } // (to the waterline on the banks)
        if (i > 0) { const a = (i - 1) * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('su', new THREE.Float32BufferAttribute(su, 2));
      g.setIndex(idx); g.computeBoundingSphere(); river.push(g);
    }
    // gravel paths along the top of both levees
    for (const [dsA, dsB] of [[28.9, 25.7], [-25.7, -28.9]]) for (const [ua, ub] of [[-L, -(rw + 3.4)], [rw + 3.4, L]]) {
      ground.grid(41, 2, (i, j) => { const u = ua + ((ub - ua) * i) / 40, ds = j ? dsB : dsA, p = xw(ds, u, e + 0.38); return [p[0], p[1], p[2], 0, 1, 0, ds, u, w4[0], w4[1], w4[2], w4[3], rw, 9, 1]; });
    }
    yield;
    // the bridge, in a frame where x runs along the road and z across it
    const M = matAt(sr, 0, e, 0, false), c = G.color, CONC = [0.74, 0.73, 0.7], RAIL = sak ? [0.78, 0.2, 0.15] : [0.55, 0.72, 0.64];
    c.setM(M);
    c.box(-24.5, -1.0, -edge, 24.5, -0.03, edge, CONC, null, { noBottom: false });
    for (const zz of [-1, 1]) c.box(-24.5, -1.3, zz > 0 ? edge - 0.35 : -edge, 24.5, -0.95, zz > 0 ? edge : -edge + 0.35, [0.62, 0.61, 0.58]);
    for (const x of [-8, 8]) c.box(x - 0.7, -RIVER_DROP - 1.4, -edge + 0.6, x + 0.7, -1.0, edge - 0.6, CONC);
    for (const x of [-25.7, 25.7]) c.box(x - 1.2, -RIVER_DROP + 0.4, -edge - 0.4, x + 1.2, -0.05, edge + 0.4, CONC);
    // steel expansion joints across the road where the deck meets each abutment (the car goes ka-tan over them, main.js)
    for (const x of [-24.5, 24.5]) { c.box(x - 0.16, 0.004, -rw, x + 0.16, 0.016, rw, [0.33, 0.32, 0.31]); c.box(x - 0.02, 0.016, -rw, x + 0.02, 0.02, rw, [0.2, 0.19, 0.19]); }
    const yb = sw > 0 ? 0.15 : 0.0;
    for (const zz of [-1, 1]) {
      const z = zz * (edge - 0.14);
      for (let x = -24; x <= 24.01; x += 2) c.box(x - 0.06, yb, z - 0.06, x + 0.06, yb + 1.0, z + 0.06, RAIL);
      c.box(-24, yb + 0.95, z - 0.08, 24, yb + 1.08, z + 0.08, RAIL);
      c.box(-24, yb + 0.48, z - 0.03, 24, yb + 0.54, z + 0.03, RAIL);
      c.box(-24, yb + 0.06, z - 0.03, 24, yb + 0.12, z + 0.03, RAIL);
    }
    // stone end posts (親柱) carrying the bridge's name
    const name = 'bridge' + (Math.abs(Math.round(sr / RIV)) % 4);
    for (const x of [-25, 25]) for (const zz of [-1, 1]) {
      const z = zz * (edge - 0.1), stone = [0.7, 0.69, 0.65];
      c.box(x - 0.32, yb, z - 0.32, x + 0.32, yb + 1.45, z + 0.32, stone);
      c.box(x - 0.38, yb + 1.45, z - 0.38, x + 0.38, yb + 1.58, z + 0.38, [0.62, 0.61, 0.57]);
      G.atlas.setM(M);
      const pl = (x < 0 ? -1 : 1) * 0.325, cell = name;
      if (x < 0) G.atlas.quad([x - 0.325, yb + 0.3, z - 0.22], [x - 0.325, yb + 0.3, z + 0.22], [x - 0.325, yb + 1.3, z + 0.22], [x - 0.325, yb + 1.3, z - 0.22], [1, 1, 1], P.uvOf(cell));
      else G.atlas.quad([x + 0.325, yb + 0.3, z + 0.22], [x + 0.325, yb + 0.3, z - 0.22], [x + 0.325, yb + 1.3, z - 0.22], [x + 0.325, yb + 1.3, z + 0.22], [1, 1, 1], P.uvOf(cell));
      c.setM(M);
    }
    P.oldLamp(G, matAt(sr - 14, -(edge - 0.45), e + yb, 0, true)); P.oldLamp(G, matAt(sr + 14, edge - 0.45, e + yb, 0, true));
    yield;
    // the low-water banks are faced with concrete blocks (護岸) from just under the water up to the riverside flats, and
    // reeds (ヨシ) stand in clumps along the top of them — the banks used to be lawn right down to the water
    {
      G.atlas.setM(new THREE.Matrix4());
      const cell = P.uvOf('gogan'), SEG = 2.4, UMAX = 150;
      for (const sg of [-1, 1]) for (let ua = -UMAX; ua < UMAX - 0.01; ua += SEG) {
        const ub = ua + SEG, A = xw(sg * 13.9, ua, wy - 0.12), B = xw(sg * 13.9, ub, wy - 0.12), Cq = xw(sg * 16.05, ub, wy + 0.72), D = xw(sg * 16.05, ua, wy + 0.72);
        // face the river (and the sky): the quad's normal is (B − A) × (D − A)
        const nx = (B[1] - A[1]) * (D[2] - A[2]) - (B[2] - A[2]) * (D[1] - A[1]), nz = (B[0] - A[0]) * (D[1] - A[1]) - (B[1] - A[1]) * (D[0] - A[0]);
        const toC = xw(0, (ua + ub) / 2, wy); const ok = nx * (toC[0] - A[0]) + nz * (toC[2] - A[2]) > 0;
        const uv = { u0: cell.u0, u1: cell.u1, v0: cell.v0, v1: cell.v1 };
        if (ok) G.atlas.quad(A, B, Cq, D, [1, 1, 1], uv); else G.atlas.quad(B, A, D, Cq, [1, 1, 1], { u0: cell.u1, u1: cell.u0, v0: cell.v0, v1: cell.v1 });
      }
      // (not right beside the road, where they'd fill the chase camera's view with cut-out cards: from 14 m out)
      for (const sg of [-1, 1]) for (const side of [-1, 1]) for (let u = 14 + r() * 3; u < 125; u += r.range(2.4, 5)) {
        if (r() < 0.35) continue; // gaps between the stands
        const ds = sg * (16.2 + r() * 1.1), uu = side * u, n = 1 + (r() < 0.4 ? 1 : 0);
        for (let k = 0; k < n; k++) { const p = xw(ds + sg * r() * 0.6, uu + (r() - 0.5) * 0.9, wy + 0.7); const m = new THREE.Matrix4().makeRotationY(r() * 6.28); m.setPosition(p[0], p[1], p[2]); P.tuft(G, m, r, 'grass', r.range(1.9, 2.8)); }
      }
    }
    yield;
    // trees along both banks: a sakura tunnel on the avenue, a few broad trees in the countryside
    for (const ds of [-18, 18]) for (const side of [-1, 1]) {
      yield;
      for (let u = 11 + r() * 4; u < (sak ? 125 : 170); u += sak ? r.range(8.5, 11) : r.range(18, 34)) {
        const s = sr + ds + (r() - 0.5) * 1.5, uu = side * u;
        P.tree(G, matAt(s, uu, H(s, uu), r() * 6, false), sak ? 'sakura' : 'broad', r, sak ? r.range(1.0, 1.25) : r.range(0.9, 1.25));
      }
    }
  }

  /** トンネル: the cap of the ridge over the road, the tube (walls, walkways, arch), sodium lamps, evacuation lights,
   *  jet fans, the two portal faces with their name plates, and trees on the ridge */
  *placeTunnel(G, ground, t, s0, s1, matAt, onGround, H, rwAt, ox, oz, r) {
    const f0 = this.path.at(t.s, {}), e = f0.y, rw = rwAt(t.s), WT = rw + 1.4, w = zoneW(t.s), w4 = [w.city, w.sakura, w.coast, w.country];
    const M = matAt(t.s, 0, e, 0, false), c = G.color;              // local X = along the road (ds), local Z = across (u)
    const xa = Math.max(s0, t.s - T_HALF) - t.s, xb = Math.min(s1, t.s + T_HALF) - t.s;
    if (xb > xa + 0.01) {
      const rows = Math.max(2, Math.ceil((xb - xa) / 3) + 1), cols = [-(rw + 1.5), -rw, -rw * 0.5, 0, rw * 0.5, rw, rw + 1.5];
      ground.gridN(rows, cols.length, (i, j) => {
        const ds = xa + ((xb - xa) * i) / (rows - 1), s = t.s + ds, u = cols[j], y = e + ridgeHr(ds, u);
        return [f0.x + f0.fx * ds + f0.rx * u - ox, y, f0.z + f0.fz * ds + f0.rz * u - oz, 0, 1, 0, mod(s, S_WRAP), u, w4[0], w4[1], w4[2], w4[3], rw, 0, -1];
      });
      // the tube, seen from inside (faces point inwards)
      const prof = [[-rw, 0], [-rw, 0.2], [-WT, 0.2], [-WT, 3.2]];
      for (let k = 1; k < 12; k++) { const th = Math.PI * (1 - k / 12); prof.push([WT * Math.cos(th), 3.2 + 3.0 * Math.sin(th)]); }
      prof.push([WT, 3.2], [WT, 0.2], [rw, 0.2], [rw, 0]);
      const TILE = [0.86, 0.82, 0.72], ARCH = [0.44, 0.45, 0.47], WALK = [0.62, 0.61, 0.58];
      const xs = []; for (let x = xa; x < xb - 0.01; x += 6) xs.push(x); xs.push(xb);
      c.setM(M);
      for (let i = 0; i < xs.length - 1; i++) for (let j = 0; j < prof.length - 1; j++) {
        const [za, ya] = prof[j], [zb, yb] = prof[j + 1];
        const col = Math.max(ya, yb) <= 0.21 ? WALK : Math.abs(za) > WT - 0.01 && Math.abs(zb) > WT - 0.01 ? TILE : ARCH;
        c.quad([xs[i], ya, za], [xs[i + 1], ya, za], [xs[i + 1], yb, zb], [xs[i], yb, zb], col);
      }
      // sodium lamps on both arch shoulders every 6 m, green evacuation lights every 24 m, jet fans every 60 m
      G.sodium.setM(M); G.sig.setM(M);
      const zl = WT * Math.cos(Math.PI / 6) - 0.12, yl = 3.2 + 3.0 * Math.sin(Math.PI / 6) - 0.08;
      for (let x = Math.ceil((xa + T_HALF - 3) / 6) * 6 + 3 - T_HALF; x < xb; x += 6) for (const sd of [-1, 1]) {
        G.sodium.box(x - 0.45, yl - 0.07, sd * zl - 0.13, x + 0.45, yl + 0.07, sd * zl + 0.13, null);
        P.lampAt(G, M, x, yl - 0.1, sd * zl, 1.0); // (they sweep bands of orange light over the car as it drives through)
      }
      for (let x = Math.ceil((xa + T_HALF) / 24) * 24 - T_HALF; x < xb; x += 24) G.sig.box(x - 0.3, 0.95, -WT + 0.01, x + 0.3, 1.2, -WT + 0.06, null);
      for (let x = Math.ceil((xa + T_HALF - 30) / 60) * 60 + 30 - T_HALF; x < xb; x += 60) for (const z of [-1.15, 1.15]) {
        c.box(x - 1.1, 5.2, z - 0.36, x + 1.1, 5.78, z + 0.36, [0.56, 0.57, 0.6], null, { nx: [0.22, 0.22, 0.24], px: [0.22, 0.22, 0.24] });
        c.box(x - 0.08, 5.78, z - 0.05, x + 0.08, 6.15, z + 0.05, [0.4, 0.4, 0.42]);
      }
      yield;
    }
    // the portal faces: from the arch (or the cutting) up to the ridge, wide enough to hide the step in the terrain.
    // A weathered concrete headwall round the opening — a projecting arch ring, a coping along its top, rain streaks
    // running down from it, dirt at its foot — and above and beside it the steep hill face held by a concrete lattice
    // frame (法枠), like the cutting slopes either side. (It used to be one huge flat cream wall up to the ridge)
    const hk = (a, b) => { const h = Math.sin(a * 12.9898 + b * 78.233 + t.k * 37.719) * 43758.5453; return h - Math.floor(h); };
    const mix3 = (p, q, k) => [p[0] + (q[0] - p[0]) * k, p[1] + (q[1] - p[1]) * k, p[2] + (q[2] - p[2]) * k];
    const CB = [0.5, 0.5, 0.47], BEAM = [0.55, 0.53, 0.47], CAP = [0.6, 0.6, 0.57], RING = [0.58, 0.58, 0.55], mulRing = [0.42, 0.42, 0.4];
    const cellCol = (zi, yi) => { const h = hk(zi, yi); return autumnT ? mix3([0.26, 0.29, 0.08], [0.42, 0.3, 0.09], h) : mix3([0.22, 0.29, 0.08], [0.36, 0.36, 0.12], h); };
    const autumnT = w.mountain > 0.5, HW = WT + 2.6, LAT = 2.6;
    for (const sd of [-1, 1]) {
      const sp = t.s + sd * T_HALF, xp = sd * (T_HALF + 0.08);
      if (sp < s0 || sp >= s1) continue;
      const zs = [];
      for (const o of NEAR) if (o >= 1.44) zs.push(rw + o, -(rw + o));
      for (const a of FAR) if (a > rw + 3.5 && a < rw + 21) zs.push(a, -a);
      for (let k = 0; k <= 24; k++) zs.push(-WT + (2 * WT * k) / 24);
      zs.push(-WT - 0.01, WT + 0.01, -HW, HW); zs.sort((p, q) => p - q);
      const arch = z => 3.2 + 3.0 * Math.sqrt(Math.max(0, 1 - (z / WT) ** 2));
      const top = z => Math.max(H(sp - sd * 0.03, z) - e, ridgeHr(sd * (T_HALF - 0.03), z));
      const bot = z => (Math.abs(z) <= WT + 1e-6 ? arch(z) : H(sp + sd * 0.03, z) - e);
      // the headwall's height: ~2.2 m over the crown of the arch, lower where the ridge is low
      let HY = 8.4; for (const z of zs) if (Math.abs(z) <= HW) HY = Math.min(HY, top(z) - 0.4);
      const wall = HY > 6.6;
      c.setM(M);
      const nx = sd; // the face looks out along the road
      const quad4 = (z0, z1, y00, y01, y10, y11, c0, c1) => { // a face strip from (z0: y00→y10) to (z1: y01→y11), colour c0 below → c1 above
        const P0 = [xp, y00, z0], P1 = [xp, y01, z1], P2 = [xp, y11, z1], P3 = [xp, y10, z0];
        const A = sd < 0 ? [P0, P1, P2, P3] : [P1, P0, P3, P2], Cc = sd < 0 ? [c0, c0, c1, c1] : [c0, c0, c1, c1];
        for (const k of [0, 1, 2, 0, 2, 3]) c.vtx(A[k][0], A[k][1], A[k][2], nx, 0, 0, 0, 0, Cc[k]);
      };
      const lerp = (p, q, k) => p + (q - p) * k;
      for (let i = 0; i < zs.length - 1; i++) {
        const za = zs[i], zb = zs[i + 1]; if (zb - za < 1e-4) continue;
        const ta = top(za), tb = top(zb), ba = bot(za), bb = bot(zb);
        if (ta - ba < 0.01 && tb - bb < 0.01) continue;
        const zm = (za + zb) / 2, inWall = wall && Math.abs(zm) < HW;
        let y0a = ba, y0b = bb;
        if (inWall) { // concrete from the bottom up to the coping: cast in ~2.4 m panels, streaked below the top, dirty at the foot
          const pc = mix3(CB, [0.46, 0.46, 0.44], hk(Math.floor(zm / 2.4), 3.1)), streak = 0.8 + 2.6 * hk(Math.floor(zm / 0.8), 7.7), dark = mix3(pc, [0.27, 0.27, 0.26], 0.35 + 0.3 * hk(Math.floor(zm / 0.8), 9.9));
          const ha = Math.min(HY, ta), hb = Math.min(HY, tb), sa = Math.max(ba, ha - streak), sb = Math.max(bb, hb - streak);
          if (Math.abs(zm) > WT) { // the foot meets the ground: a band of grime and moss
            const fa = Math.min(sa, ba + 0.9), fb = Math.min(sb, bb + 0.9);
            quad4(za, zb, ba, bb, fa, fb, mix3(pc, [0.25, 0.29, 0.18], 0.45), pc); quad4(za, zb, fa, fb, sa, sb, pc, pc);
          } else quad4(za, zb, ba, bb, sa, sb, pc, pc);
          quad4(za, zb, sa, sb, ha, hb, pc, dark);
          y0a = ha; y0b = hb;
          if (ta - ha < 0.01 && tb - hb < 0.01) continue;
        }
        // the lattice frame's cells, a row at a time (the beams go over the joins)
        const zi = Math.floor(zm / LAT);
        let ya = y0a, yb = y0b;
        for (let row = Math.floor(Math.min(ya, yb) / LAT) + 1; ya < ta - 0.01 || yb < tb - 0.01; row++) {
          const yc = row * LAT, na = Math.min(ta, Math.max(ya, yc)), nb = Math.min(tb, Math.max(yb, yc));
          const cc = cellCol(zi, row);
          quad4(za, zb, ya, yb, na, nb, mix3(cc, [0.2, 0.22, 0.1], 0.25), cc);
          ya = na; yb = nb; if (row > 60) break;
        }
      }
      // the lattice beams (they stand 12 cm proud of the face)
      const x0 = Math.min(xp, xp + sd * 0.12), x1 = Math.max(xp, xp + sd * 0.12);
      const colAt = z => { for (let i = 0; i < zs.length - 1; i++) if (z >= zs[i] && z <= zs[i + 1] && zs[i + 1] > zs[i]) { const k = (z - zs[i]) / (zs[i + 1] - zs[i]); return [lerp(bot(zs[i]), bot(zs[i + 1]), k), lerp(top(zs[i]), top(zs[i + 1]), k)]; } return null; };
      const zMin = zs[0], zMax = zs[zs.length - 1];
      for (let zj = Math.ceil(zMin / LAT) * LAT; zj < zMax; zj += LAT) { // uprights
        const bt = colAt(zj); if (!bt) continue;
        const lo = (wall && Math.abs(zj) < HW ? Math.max(HY + 0.3, bt[0]) : bt[0]) + 0.05, hi = bt[1] - 0.05;
        if (hi - lo > 0.4 && !(Math.abs(zj) <= WT + 0.3 && !wall)) c.box(x0, lo, zj - 0.14, x1, hi, zj + 0.14, BEAM);
      }
      for (let row = 1; row < 60; row++) { // crossbars, in runs between the face's edges
        const y = row * LAT; let run = null;
        const flush = () => { if (run && run[1] - run[0] > 0.3) c.box(x0, y - 0.14, run[0], x1, y + 0.14, run[1], BEAM); run = null; };
        let any = false;
        for (let i = 0; i < zs.length - 1; i++) {
          const za = zs[i], zb = zs[i + 1]; if (zb - za < 1e-4) continue;
          const zm = (za + zb) / 2, lo = Math.max(bot(za), bot(zb), wall && Math.abs(zm) < HW ? HY + 0.3 : -1e9), hi = Math.min(top(za), top(zb));
          if (y > lo + 0.2 && y < hi - 0.2) { any = true; if (run) run[1] = zb; else run = [za, zb]; } else flush();
        }
        flush(); if (!any && y > 30) break;
      }
      if (wall) { // the coping along the headwall's top, and the ring round the opening standing proud of it
        c.box(Math.min(xp, xp + sd * 0.32), HY - 0.05, -HW, Math.max(xp, xp + sd * 0.32), HY + 0.3, HW, CAP);
      }
      const xo = xp + sd * 0.32, rz = k => -WT + (2 * WT * k) / 24, inner = k => [rz(k), arch(rz(k))], outer = k => [rz(k) * 1.12, arch(rz(k)) + 0.6];
      for (let k = 0; k < 24; k++) {
        const [z0, y0] = inner(k), [z1, y1] = inner(k + 1), [oz0, oy0] = outer(k), [oz1, oy1] = outer(k + 1);
        if (sd < 0) c.quad([xo, y0, z0], [xo, y1, z1], [xo, oy1, oz1], [xo, oy0, oz0], RING); else c.quad([xo, y1, z1], [xo, y0, z0], [xo, oy0, oz0], [xo, oy1, oz1], RING);
        if (sd < 0) c.quad([xp, y0, z0], [xp, y1, z1], [xo, y1, z1], [xo, y0, z0], mulRing); else c.quad([xp, y1, z1], [xp, y0, z0], [xo, y0, z0], [xo, y1, z1], mulRing);
        if (sd < 0) c.quad([xp, oy1, oz1], [xp, oy0, oz0], [xo, oy0, oz0], [xo, oy1, oz1], RING); else c.quad([xp, oy0, oz0], [xp, oy1, oz1], [xo, oy1, oz1], [xo, oy0, oz0], RING);
      }
      for (const zz of [-1, 1]) c.box(Math.min(xp, xo), 0.2, zz > 0 ? WT : -WT * 1.12, Math.max(xp, xo), 3.2, zz > 0 ? WT * 1.12 : -WT, RING); // its legs down to the walkway
      G.atlas.setM(M);
      const pw = 1.9, py0 = 7.05, py1 = 7.85, xq = xp + sd * 0.03, cell = P.uvOf('tunnel' + (w.coast > 0.5 ? 1 : Math.abs(t.k) % 2 ? 2 : 0));
      if (sd < 0) G.atlas.quad([xq, py0, -pw], [xq, py0, pw], [xq, py1, pw], [xq, py1, -pw], [1, 1, 1], cell);
      else G.atlas.quad([xq, py0, pw], [xq, py0, -pw], [xq, py1, -pw], [xq, py1, pw], [1, 1, 1], cell);
    }
    yield;
    // trees on the ridge
    const autumn = w.mountain > 0.5;
    for (let s = Math.max(s0, t.s - T_RIDGE * 0.95) + r() * 3; s < Math.min(s1, t.s + T_RIDGE * 0.95); s += r.range(4, 8)) {
      const minU = Math.abs(s - t.s) > T_HALF - 4 ? 17 : 4;   // not on the faces of the approach cutting
      for (const side of [-1, 1]) {
        const u = side * (rw + r.range(minU, 50)), q = r();
        P.tree(G, onGround(s, u, -0.3, r() * 6, false), autumn ? (q < 0.5 ? 'maple' : q < 0.8 ? 'cedar' : 'ginkgo') : (q < 0.65 ? 'pine' : 'broad'), r, r.range(0.9, 1.3));
      }
    }
  }

  /** 雪国: farmhouses under deep snow, white birch groves, snow-laden cedars, and the red-white arrow poles (矢羽根) */
  *placeSnow(G, r, s0, s1, matAt, onGround, road, rwAt, H) {
    const sw = s => zoneW(s).snow;
    if (sw(s0) < 0.3 && sw(s1) < 0.3) return;
    for (const side of [-1, 1]) {
      for (let s = s0 + r() * 20; s < s1; s += r.range(22, 40)) { // farmhouses with steep, snow-laden roofs
        if (sw(s) < 0.6 || r() < 0.5) continue;
        const u = side * r.range(18, 90);
        P.building(G, onGround(s, u, -0.3), r, { type: 'house', w: r.range(9, 12.5), d: r.range(8, 10), floors: r() < 0.5 ? 2 : 1, tint: r.pick(P.TINTS), litP: 0.62, fence: 0, snow: true });
        for (let k = 0; k < 2 + r() * 3; k++) P.tree(G, onGround(s + r.range(-9, 9), u + side * r.range(7, 15), -0.3, r() * 6, false), r() < 0.6 ? 'snowcedar' : 'birch', r, r.range(0.9, 1.25));
      }
      yield;
      for (let s = s0 + r() * 5; s < s1; s += r.range(3, 7)) { // birch groves near the road, cedars on the far hills
        if (sw(s) < 0.5) continue;
        if (r() < 0.32) P.tree(G, onGround(s, side * r.range(9, 40), -0.25, r() * 6, false), 'birch', r, r.range(0.85, 1.25));
        if (r() < 0.55) P.tree(G, onGround(s, side * r.range(120, 205), -0.4, r() * 6, false), 'snowcedar', r, r.range(1.1, 1.6));
      }
      yield;
    }
    // 矢羽根: striped poles with a downward arrow over the road edge, so the plough knows where the road is
    for (let s = Math.ceil(s0 / 36) * 36; s < s1; s += 36) {
      if (sw(s) < 0.55) continue;
      const rw = rwAt(s);
      { const a = matAt(s, -(rw + 0.95), road(s) + 1.3), b = matAt(s + 18, rw + 0.95, road(s + 18) + 1.3); a.groundY = road(s); b.groundY = road(s + 18);
        P.snowPole(G, a, 1); P.snowPole(G, b, -1); }
    }
  }

  /** 紅葉の峠: maples, ginkgo and cedars on the slopes, chevrons on the bends, reflector posts along the guardrail */
  *placeMountain(G, r, s0, s1, matAt, onGround, road, rwAt, H) {
    const mw = s => zoneW(s).mountain;
    if (mw(s0) < 0.3 && mw(s1) < 0.3) return;
    for (const side of [-1, 1]) {
      for (let s = s0 + r() * 4; s < s1; s += r.range(4.5, 8.5)) {
        if (mw(s) < 0.45 || nearT(s, T_RIDGE + 6)) continue;
        const rw = rwAt(s), q = r();
        if (side > 0) { // uphill: above the cut face, up the forest slope
          const kind = q < 0.5 ? 'maple' : q < 0.72 ? 'ginkgo' : 'cedar';
          P.tree(G, onGround(s, rw + r.range(17, 70), -0.25, r() * 6, false), kind, r, r.range(0.9, 1.3));
        } else { // valley side: down the steep drop
          const kind = q < 0.55 ? 'maple' : q < 0.8 ? 'cedar' : 'ginkgo';
          P.tree(G, onGround(s, -(rw + r.range(3.5, 34)), -0.25, r() * 6, false), kind, r, r.range(0.95, 1.35));
        }
      }
      yield;
    }
    for (let s = s0 + r() * 4; s < s1; s += r.range(3, 6)) { // the far mountainside across the valley, and the valley floor
      if (mw(s) < 0.5) continue;
      const far = r() < 0.7, u = -(rwAt(s) + (far ? r.range(108, 205) : r.range(36, 100)));
      P.tree(G, onGround(s, u, -0.3, r() * 6, false), r() < 0.5 ? 'cedar' : r() < 0.75 ? 'maple' : 'ginkgo', r, r.range(1.1, 1.6));
    }
    yield;
    // white reflector posts on the guardrail (視線誘導標)
    G.color.setM(new THREE.Matrix4());
    for (let s = Math.ceil(s0 / 10) * 10; s < s1; s += 10) {
      if (mw(s) < 0.5 || nearT(s, T_RIDGE + 4)) continue;
      const rw = rwAt(s), M = matAt(s, -(rw + 0.95), road(s));
      P.reflectorPost(G, M);
    }
    // chevrons on the outside of the sharper bends (線形誘導標)
    for (let s = Math.ceil(s0 / 14) * 14; s < s1; s += 14) {
      if (mw(s) < 0.6) continue;
      const k = this.path.curv(s);
      if (Math.abs(k) < 1 / 230) continue;
      const rw = rwAt(s);
      if (k > 0) P.signPost(G, matAt(s, rw + 0.42, road(s)), 'chev_l', -1, 1.25, 0.58); // bending left → signs on the right
      else P.signPost(G, matAt(s, -(rw + 1.15), road(s)), 'chev_r', 1, 1.35, 0.58);       // bending right → behind the left guardrail
    }
  }

  /** 土手の草むら: the countryside's verges are banks of tall grass and wildflowers along both edges of the road, as in
   *  the reference art — one clump card a metre or so apart (fewer on phones), with their own random numbers. Not in
   *  front of the bus stop, the vending machine or a お地蔵さん. Written straight into chunk space (no matrix per clump) */
  *placeBanks(G, c, s0, s1, ox, oz, rwAt) {
    const path = this.path, f = {}, br = rng(Math.floor(hash2(c, 1789) * 4294967295)), step = P.bankStep();
    const sb = Math.floor((s0 + CH / 2) / 600) * 600 + 300, sv = Math.floor((s0 + CH / 2) / 700) * 700 + 120;
    const sj = Math.floor((s0 + CH / 2) / 380) * 380 + 190, jside = hash2(Math.round(sj), 5) < 0.5 ? -1 : 1;
    for (const side of [-1, 1]) {
      G.leaf.setM(IDENT);
      for (let s = s0 + br() * step; s < s1; s += step * br.range(0.75, 1.25)) {
        if (zoneAt(s) !== 'country' || nearX(s, 10) || nearR(s, 31)) continue;
        if (side < 0 && (Math.abs(s - sb) < 2.9 || (s > sv - 1.3 && s < sv + 2.7))) continue;
        if (side === jside && Math.abs(s - sj) < 1.6) continue;
        path.at(s, f);
        const rw = rwAt(s), u = side * (rw + 0.95 + (br() - 0.5) * 0.36), y = f.y + groundOffsetMix(s, u, f.y, rw);
        // across the verge, away from the road (the clump's low end at the road), turned by up to ±23°
        const a = (br() - 0.5) * 0.8, ca = Math.cos(a) * side, sa = Math.sin(a) * side;
        P.bank(G, f.x + f.rx * u - ox, y, f.z + f.rz * u - oz, f.rx * ca + f.fx * sa, f.rz * ca + f.fz * sa, br, br.range(0.85, 1.15));
      }
      yield;
    }
    // 花壇: low flower beds along the cherry avenue's lawns, a few clumps of daisies and wildflowers between the trees, as
    // in the painting (their own random numbers: the rest of the layout is unchanged)
    const fb = rng(Math.floor(hash2(c, 2417) * 4294967295));
    for (const side of [-1, 1]) {
      G.leaf.setM(IDENT);
      for (let s = s0 + fb() * 8; s < s1; s += fb.range(8, 14)) {
        if (zoneW(s).sakura < 0.6 || nearR(s, 31)) continue;
        const n = 2 + Math.floor(fb() * 4), u0 = side * (rwAt(s) + 2.85 + fb() * 0.5);
        path.at(s, f); const y = f.y + groundOffsetMix(s, u0, f.y, rwAt(s)); // (one ground height for the bed: it is 1–2.5 m long)
        for (let k = 0; k < n; k++) {
          const d = k * 0.5 + fb() * 0.2, u = u0 + side * (fb() - 0.5) * 0.35, a = (fb() - 0.5) * 1.2, ca = Math.cos(a) * side, sa = Math.sin(a) * side;
          P.bank(G, f.x + f.fx * d + f.rx * u - ox, y, f.z + f.fz * d + f.rz * u - oz, f.rx * ca + f.fx * sa, f.rz * ca + f.fz * sa, fb, fb.range(0.42, 0.58));
        }
      }
    }
  }

  /** 雑草: tufts of grass and wildflowers along shoulders, field edges and verges (sparse weeds at the foot of city walls) */
  *placeVerge(G, r, s0, s1, matAt, H, rwAt, c, ox, oz) {
    yield* this.placeBanks(G, c, s0, s1, ox, oz, rwAt);
    for (const side of [-1, 1]) {
      for (let s = s0 + r() * 1.2; s < s1; s += r.range(0.55, 1.5)) {
        if (nearX(s, 10) || nearR(s, 31) || nearT(s, T_RIDGE + 4)) continue;
        const z = zoneAt(s), rw = rwAt(s);
        let u, dens, fl = 0.22, sc = 1;
        if (z === 'country') { u = rw + r.range(2.05, 2.8); dens = 0.25; fl = 0.35; } // (behind the bank, at the field's edge)
        else if (z === 'sakura') { u = rw + 2.68 + r() * 1.3; dens = 0.55; fl = 0.3; }
        else if (z === 'coast') { if (side < 0) continue; u = rw + 0.95 + r() * 1.7; dens = 0.75; fl = 0.18; }
        else if (z === 'snow') continue;
        else if (z === 'mountain') { u = side < 0 ? rw + 1.0 + r() * 0.35 : rw + 0.25 + r() * 0.2; dens = side < 0 ? 0.55 : 0.18; fl = 0.12; sc = 0.85; }
        else { if (nearSide(s, 5)) continue; u = rw + 3.02 + r() * 0.1; dens = 0.1; fl = 0.08; sc = 0.65; }
        if (r() > dens) continue;
        const uu = side * u;
        P.tuft(G, matAt(s, uu, H(s, uu), r() * 6.28, false), r, r() < fl ? 'flowers' : 'grass', sc * r.range(0.8, 1.2));
      }
      yield;
    }
  }

  // ガードレール: a corrugated W-beam (two bulges and a valley, folded edges) on round posts behind it, with an orange
  // reflector in the valley at every other post. The facets catch the light in bands, as a real one does (it used to be
  // one flat strip on square sticks)
  guardrail(G, sa, sb, world, road, rwAt) {
    G.color.setM(new THREE.Matrix4());
    const n = Math.max(1, Math.round((sb - sa) / 2)), RAIL = P.PAL.rail, BACK = [0.62, 0.64, 0.66], POST = [0.74, 0.76, 0.79], REFL = [0.95, 0.55, 0.16];
    for (let i = 0; i < n; i++) {
      const s = sa + ((sb - sa) * i) / n, t = sa + ((sb - sa) * (i + 1)) / n;
      const ua = -(rwAt(s) + 0.95), ub = -(rwAt(t) + 0.95), ya = road(s), yb = road(t);
      for (let k = 0; k < WBEAM.length - 1; k++) { // the profile: (height, how far it stands out towards the road)
        const [h0, d0] = WBEAM[k], [h1, d1] = WBEAM[k + 1];
        G.color.quad(world(s, ua + d0, ya + h0), world(t, ub + d0, yb + h0), world(t, ub + d1, yb + h1), world(s, ua + d1, ya + h1), RAIL);
      }
      G.color.quad(world(t, ub + 0.05, yb + 0.5), world(s, ua + 0.05, ya + 0.5), world(s, ua + 0.05, ya + 0.84), world(t, ub + 0.05, yb + 0.84), BACK);
      // posts and reflectors cast no shadow (the beam's shadow line on the road is the one you see): with them out of the
      // shadow passes the rail costs those passes less than the old flat one did
      G.color.noShadow = true;
      const q = world(s, ua - 0.04, ya);
      G.color.cyl(q[0], ya, q[2], 0.055, 0.055, 0.8, 6, POST, false); // (no caps: never seen)
      if (Math.round(s / 2) % 2 === 0) { const c0 = world(s, ua + 0.035, ya + 0.64), c1 = world(s + 0.09, ua + 0.035, ya + 0.64); G.color.quad(c1, c0, [c0[0], c0[1] + 0.07, c0[2]], [c1[0], c1[1] + 0.07, c1[2]], REFL); }
      G.color.noShadow = false;
    }
  }

  *placeCity(G, r, s0, s1, matAt, onGround, road, rwAt, walkW, H, ground, ox, oz) {
    for (const side of [-1, 1]) {
      let s = s0 + r() * 2;
      while (s < s1 - 2) {
        { const wz = zoneW(s); if (wz.city < 0.62 || wz.mountain > 0.1) { s += 4; continue; } } // not into the mountain's rising slope
        { const cx = crossingNear(s + 6); if (cx && s < cx.s + 8.5 && s + 14 > cx.s - 8.5) { s = Math.max(s + 1, cx.s + 8.5); continue; } }
        const cs = mod(s, 150);
        if (cs > 145.6 || cs < 3.4) { s += 1; continue; }          // side street at each crosswalk (≈ sc−4.4 … sc+3.4)
        const rw = rwAt(s), sw = walkW(s) || 3.0, front = rw + sw + 0.15;
        const t = r();
        // a shopping street (商店街) first: mostly 町家 shophouses and shops, a few blocks of flats and offices between them
        // (shophouses, timber or plastered, make the street as in the reference art; a few flats, offices and modern shops)
        const type = t < 0.7 ? 'machiya' : t < 0.75 ? 'shop' : t < 0.81 ? 'apt' : t < 0.83 ? 'office' : t < 0.88 ? 'house' : t < 0.92 ? 'konbini' : t < 0.96 ? 'parking' : 'gap';
        let w = type === 'shop' ? r.range(5, 9) : type === 'machiya' ? r.range(6, 9.5) : type === 'apt' ? r.range(10, 16) : type === 'office' ? r.range(10, 14) : type === 'house' ? r.range(7, 9.5)
          : type === 'konbini' ? r.range(12, 14) : type === 'parking' ? r.range(7, 11) : r.range(2, 3.5);
        if (s + w > s1) { if (s1 - s < 5 || type === 'konbini') break; w = s1 - s - 0.2; }
        { const gap = Math.ceil((s + 4.4) / 150) * 150 - 4.4; // never build into the side-street mouth
          if (s + w > gap - 0.1) { if (gap - 0.1 - s < 4) { s = gap + 7.9; continue; } w = gap - 0.1 - s; } }
        const sm = s + w / 2, e = road(sm), tint = r.pick(P.TINTS), litP = 0.42, plaster = type === 'machiya' && r() < 0.42;
        if (type === 'parking') {
          const M = matAt(sm, side * (front + 3), e + 0.15);
          if (r() < 0.8) P.parkedCar(G, P.sub(M, 0, 0, 0.5, (r() - 0.5) * 0.1), r);
          G.color.setM(M); G.color.box(-w / 2, 0, 5.5, w / 2, 1.6, 5.7, P.PAL.concrete);
        } else if (type !== 'gap') {
          const M = matAt(sm, side * front, e + 0.15);
          const spec = { type, w, d: type === 'apt' || type === 'office' ? r.range(10, 14) : r.range(8, 12),
            floors: type === 'shop' ? r.int(2, 4) : type === 'machiya' ? (r() < 0.7 ? 2 : 3) : type === 'apt' ? r.int(4, 9) : type === 'office' ? r.int(4, 8) : 2, tint: plaster ? P.PLASTER[Math.floor(r() * P.PLASTER.length)] : tint, litP, plaster, fence: type === 'house' && r() < 0.5 ? 1.2 : 0 };
          P.building(G, M, r, spec);
          if (type !== 'house' && r() < 0.28) P.vendingMachine(G, matAt(sm + (r() - 0.5) * (w - 1.2), side * (front - 0.42), e + 0.15), r);
          if ((type === 'shop' || type === 'konbini' || type === 'machiya') && r() < 0.3) for (let b = 0; b < 1 + r() * 3; b++) P.bicycle(G, matAt(sm - w / 2 + 0.8 + b * 0.55, side * (front - 0.75), e + 0.15, Math.PI / 2 + 0.1), r);
          if (type === 'house' && r() < 0.6) for (let p = 0; p < 2 + r() * 3; p++) P.pottedPlant(G, matAt(sm + 1 + p * 0.5, side * (front - 0.3), e + 0.15), r);
          if (r() < 0.03) for (let k = 0; k < 3; k++) P.cone(G, matAt(sm + k * 0.9, side * (rw + 0.35), e));
        }
        s += w + r.range(0.05, 0.5);
        yield;
      }
      // second row: taller buildings peeking over the street
      for (let s2 = s0 + r() * 10; s2 < s1 - 8; s2 += r.range(14, 26)) {
        if (zoneW(s2).city < 0.7 || zoneW(s2).mountain > 0.1 || r() < 0.3 || nearX(s2, 18) || nearSide(s2, 15)) continue;
        const rw = rwAt(s2), M = matAt(s2, side * (rw + 3.2 + r.range(14, 20)), road(s2) + 0.1);
        P.building(G, M, r, { type: r() < 0.6 ? 'apt' : 'office', w: r.range(12, 18), d: 12, floors: r.int(6, 11), tint: r.pick(P.TINTS), litP: 0.4 });
      }
      // far towers for a skyline
      if (zoneW(s0 + 30).city > 0.7 && zoneW(s0 + 30).mountain < 0.1 && r() < 0.65) {
        const sm = s0 + r() * CH; if (nearX(sm, 24) || nearSide(sm, 20)) continue;
        const M = matAt(sm, side * r.range(55, 150), road(sm));
        P.building(G, M, r, { type: 'tower', w: r.range(16, 26), d: r.range(16, 22), floors: r.int(12, 26), tint: r.pick(P.TINTS), litP: 0.45 });
      }
    }
    // signs & mirrors at crossings
    const k0 = Math.ceil(s0 / 150), k1 = Math.floor((s1 - 0.01) / 150);
    for (let k = k0; k <= k1; k++) {
      const sc = k * 150; if (zoneAt(sc) !== 'city' || zoneW(sc).mountain > 0.1) continue;
      const rw = rwAt(sc);
      yield* this.intersection(G, r, sc, k, matAt, road, rwAt, walkW, ground, ox, oz);
      P.signPost(G, matAt(sc - 1, -(rw + 0.4), road(sc) + 0.15), 'sign_blue', 1);
      P.signPost(G, matAt(sc - 6, -(rw + 0.4), road(sc) + 0.15), 'sign_stop', 1, 2.1, 0.75);
      P.curveMirror(G, matAt(sc + 7, rw + 0.4, road(sc) + 0.15), -1);
      if (k % 3 === 0) P.signPost(G, matAt(sc + 20, -(rw + 0.4), road(sc) + 0.15), 'sign_speed', 1);
    }
  }

  *placeSakura(G, r, s0, s1, matAt, onGround, road, rwAt, H) {
    for (const side of [-1, 1]) {
      for (let s = s0 + r() * 4; s < s1; s += r.range(7.5, 10)) {
        if (zoneW(s).sakura < 0.45 || nearR(s, 30)) continue;
        const rw = rwAt(s);
        // the avenue's trees face the road (a little turned, at random), so their crowns arch out over it
        P.tree(G, onGround(s, side * (rw + 3.7), 0, P.GHIBLI.bcells ? (r() - 0.5) * 0.6 : r() * 6), 'sakuraAve', r, r.range(1.05, 1.3));
        if (r() < 0.45) P.tree(G, onGround(s + 3, side * (rw + r.range(9, 18)), 0, r() * 6), 'sakura', r, r.range(0.9, 1.25));
      }
      yield;
      for (let s = s0 + (side > 0 ? 0 : 12); s < s1; s += 24) {
        if (zoneAt(s) !== 'sakura' || nearR(s, 30)) continue;
        const rw = rwAt(s);
        P.oldLamp(G, matAt(s, side * (rw + 2.25), road(s) + 0.15));
        if (mod(s, 48) < 24) P.stoneLantern(G, matAt(s + 6, side * (rw + 3.0), H(s + 6, side * (rw + 3.0))));
      }
      for (let s = s0 + r() * 15; s < s1; s += r.range(14, 24)) {
        if (zoneAt(s) !== 'sakura' || r() < 0.35 || nearR(s, 45)) continue;
        const rw = rwAt(s);
        P.building(G, onGround(s, side * (rw + r.range(20, 30))), r, { type: 'house', w: r.range(8, 11), d: r.range(7, 9), floors: r() < 0.6 ? 2 : 1, tint: r.pick(P.TINTS), litP: 0.45, fence: r() < 0.6 ? 1.4 : 0 });
      }
    }
    const k = Math.floor((s0 + CH / 2) / 480);
    const st = k * 480 + 240;
    if (st >= s0 && st < s1 && zoneAt(st) === 'sakura' && !nearR(st, 60)) P.torii(G, matAt(st, 0, road(st), 0, false), rwAt(st) + 1.6, 6.4);
  }

  /** where the coast's sea wall stands in the sea with its surf: from 70% of the way into the coast in its transitions,
   *  and not where a tunnel's headland runs out into the sea (its spur stands above the water to ~T_RIDGE + 7 m from the
   *  tunnel's middle) */
  coastWall(s) { return zoneW(s).coast >= 0.7 && !nearT(s, T_RIDGE + 14); }
  /** 消波ブロック: chunk c's heaps of tetrapods at the foot of the sea wall (their own random numbers, so the rest of the
   *  layout is unchanged): every 12–26 m, 4.5–11 m long, two or three rows deep. Cached: the water strip's foam gathers
   *  round the heaps of the chunks either side as well */
  coastHeaps(c) {
    let hs = this.heapCache.get(c); if (hs) return hs;
    hs = [];
    const hr = rng(Math.floor(hash2(c, 5501) * 4294967295)), s0 = c * CH, s1 = s0 + CH;
    for (let s = s0 + 1 + hr() * 12; s < s1 - 3; s += hr.range(12, 26)) {
      const L = hr.range(1.25, 1.5), len = hr.range(4.5, 11), rows = hr() < 0.4 ? 3 : 2, sb = Math.min(s + len, s1 - 0.5);
      if (!this.coastWall(s) || !this.coastWall(sb)) continue;
      hs.push({ sa: s, sb, L, rows, dOut: (0.8 + (rows - 1) * 1.45 + 0.95) * L }); // (dOut: its face to the sea, from the wall)
    }
    if (this.heapCache.size > 48) this.heapCache.clear();
    this.heapCache.set(c, hs);
    return hs;
  }
  /** 海沿いの道 (the reference art's coast road): the sea right against the sea wall (path.js), tetrapods heaped at its
   *  foot with the surf breaking over them, and the water along the wall with its foam; on the land side big round
   *  broadleaf trees on the green slope (a few pines), houses and lamps; boats and a lighthouse out at sea */
  *placeCoast(G, r, c, s0, s1, matAt, onGround, rwAt, shore, world) {
    const path = this.path, f = {};
    // the tetrapods: piled two or three deep against the wall, the first row standing half out of the water (their legs
    // in the surf), the rows further out lower, a few more wedged on top; contact shading darkens them at the water line
    const heaps = this.coastHeaps(c), tr = rng(Math.floor(hash2(c, 5507) * 4294967295));
    for (const h of heaps) {
      const L = h.L;
      for (let k = 0; k < h.rows; k++) {
        const dm = 0.8 * L + k * 1.45 * L, y0 = (k === 0 ? 0.28 : k === 1 ? 0.0 : -0.3) * L;
        for (let ss = h.sa + tr() * 0.7 * L; ss < h.sb; ss += 1.5 * L * tr.range(0.88, 1.12)) {
          const rw = rwAt(ss), p = world(ss, -(rw + WALL_U + dm + (tr() - 0.5) * 0.45 * L), 0);
          P.tetrapod(G, p[0], SEA + y0 + (tr() - 0.5) * 0.3 * L, p[2], tr, L * tr.range(0.92, 1.08), SEA - 0.7, k === 0 ? 0.8 : 0.45);
          if (k === 0 && h.rows > 1 && tr() < 0.4) {
            const q = world(ss + 0.7 * L, -(rw + WALL_U + dm + 0.72 * L), 0);
            P.tetrapod(G, q[0], SEA + 1.05 * L, q[2], tr, L * tr.range(0.9, 1.0), SEA - 0.7);
          }
        }
      }
      // the surf: puffs leaving the water along the heap's face to the sea (surf.js flies them)
      const n = Math.max(3, Math.round((SURF.n * (h.sb - h.sa + 2)) / 7)), sw = mod(s0, S_WRAP) - s0;
      for (let i = 0; i < n; i++) {
        const ss = h.sa + ((h.sb - h.sa) * (i + 0.5)) / n + (tr() - 0.5) * 1.4, rw = rwAt(ss);
        path.at(ss, f);
        const p = world(ss, -(rw + WALL_U + h.dOut * (0.45 + 0.55 * tr()) - 0.3), SEA + 0.35); // (from its face to the sea, and among its blocks)
        shore.puffs.push(p[0], p[1], p[2], -f.rx, -f.rz, h.dOut, tr(), ss + sw);
      }
    }
    if (heaps.length) yield;
    // the water along the wall, out to 38 m (SHORE_D), with how close a tetrapod heap is (its foam) and how far the
    // nearest break in the strip is (its waves fade out over 6 m there). s runs on from the chunk's start without wrapping,
    // so nothing jumps inside a chunk (the shader's patterns repeat with S_WRAP: the next chunk's start matches)
    const near = [...this.coastHeaps(c - 1), ...heaps, ...this.coastHeaps(c + 1)], sw0 = mod(s0, S_WRAP);
    // rows every 6 m (big triangles: small ones cost the GPU every pixel quad along their edges again, and this shader is
    // the sea's plus its waves), and rows where a heap's foam starts and ends, so it keeps its shape
    const rs = []; for (let i = 0; i <= 10; i++) rs.push(s0 + i * 6);
    for (const h of near) for (const q of [h.sa - 3.2, h.sa - 0.4, h.sb + 0.4, h.sb + 3.2]) if (q > s0 + 0.5 && q < s1 - 0.5) rs.push(q);
    rs.sort((p, q) => p - q);
    for (let i = 0; i < rs.length; i++) {
      const s = rs[i]; if (i > 0 && s - rs[i - 1] < 0.6) continue;
      if (!this.coastWall(s)) { if (shore.rows.length) break; continue; } // (one run: a gap only comes with a tunnel or a zone's end)
      let ef = 1; for (let k = 1; k <= 3; k++) if (!this.coastWall(s - 2 * k) || !this.coastWall(s + 2 * k)) { ef = (k - 1) / 3; break; }
      const rw = rwAt(s), row = new Float32Array(SHORE_D.length * 7);
      SHORE_D.forEach((d, j) => {
        const p = world(s, -(rw + WALL_U + d), SEA + 0.03);
        let hf = 0;
        for (const h of near) hf = Math.max(hf, (1 - sstep(0.4, 3.2, Math.max(h.sa - s, s - h.sb, 0))) * (1 - sstep(0.2, 3.4, d - h.dOut)));
        row.set([p[0], p[1], p[2], sw0 + (s - s0), d, hf, ef], j * 7);
      });
      shore.rows.push(row);
    }
    if (shore.rows.length) yield;
    // the land side: big round broadleaf trees on the green slope, as in the reference art (it was mostly pines), and a
    // few pines; nothing on the sea side any more (it is water). (The chunk's shared random numbers are drawn as before
    // outside the coast, walks and all, so every other zone's layout is unchanged; the coast's new things have their own)
    for (let s = s0 + r() * 6; s < s1; s += r.range(5, 9)) {
      if (zoneAt(s) !== 'coast' || nearT(s, T_RIDGE + 6)) continue;
      const rw = rwAt(s), k = r();
      if (k < 0.58) P.tree(G, onGround(s, rw + r.range(4.5, 30), 0, r() * 6, false), k < 0.48 ? 'broad' : 'pine', r, r.range(1.0, 1.4));
    }
    for (let s = s0 + 4; s < s1; ) s += r.range(18, 30); // (the old beach tetrapods' walk: its draws, as above)
    for (let s = s0 + 12; s < s1; s += 48) {
      if (zoneAt(s) !== 'coast' || nearT(s, T_RIDGE + 4)) continue;
      const rw = rwAt(s); P.streetLamp(G, onGround(s, rw + 1.0), r);
    }
    // 白い花の茂み: low round bushes in white flower along the verge, in ones, twos and threes, as in the reference art
    // (their own random numbers; clear of the poles and lamps)
    const fb = rng(Math.floor(hash2(c, 5519) * 4294967295));
    for (let s = s0 + fb() * 6; s < s1; s += fb.range(6, 14)) {
      if (zoneW(s).coast < 0.6 || nearT(s, T_RIDGE + 6)) continue;
      const n = 1 + Math.floor(fb() * 2.4);
      for (let k = 0; k < n; k++) {
        const ss = s + k * fb.range(0.9, 1.6), u = rwAt(ss) + fb.range(1.25, 2.4), a = fb() * 6.28, sc = fb.range(0.85, 1.25);
        const dp = ss - 6 - Math.round((ss - 6) / POLE_SP) * POLE_SP, dl = ss - 12 - Math.round((ss - 12) / 48) * 48;
        if (Math.abs(dp) < 1.4 || Math.abs(dl) < 1.2) continue;
        P.flowerBush(G, onGround(ss, u, 0, a, false), fb, sc);
      }
    }
    if (zoneAt(s0 + 30) === 'coast' && r() < 0.5) {
      const s = s0 + r() * CH, rw = rwAt(s);
      if (!nearT(s, T_RIDGE + 25)) P.building(G, onGround(s, rw + r.range(9, 16)), r, { type: 'house', w: r.range(7, 10), d: 8, floors: r() < 0.5 ? 2 : 1, tint: r.pick(P.TINTS), litP: 0.5, fence: 0 });
    }
    if (zoneAt(s0 + 30) === 'coast' && r() < 0.55) {
      const s = s0 + r() * CH; P.boat(G, matAt(s, -(rwAt(s) + r.range(45, 220)), SEA - 0.25, r() * 6, false), r);
    }
    const lh = Math.floor((s0 + CH / 2) / 1500) * 1500 + 700;
    if (lh >= s0 && lh < s1 && zoneAt(lh) === 'coast' && !nearT(lh, T_RIDGE * 1.6)) P.lighthouse(G, matAt(lh, -(rwAt(lh) + 75), SEA - 1, 0, false));
  }

  *placeCountry(G, r, s0, s1, matAt, onGround, road, rwAt, H) {
    for (const side of [-1, 1]) {
      yield;
      for (let s = s0 + r() * 20; s < s1; s += r.range(20, 40)) {
        if (zoneAt(s) !== 'country' || r() < 0.55 || nearX(s, 16) || nearR(s, 48)) continue;
        const u = side * r.range(16, 95), M = onGround(s, u);
        P.building(G, M, r, { type: 'house', w: r.range(9, 13), d: r.range(8, 10), floors: r() < 0.45 ? 2 : 1, tint: r.pick(P.TINTS), litP: 0.5, fence: 0 });
        for (let t = 0; t < 2 + r() * 3; t++) { const tu = u + side * r.range(6, 14), ts = s + r.range(-8, 8); P.tree(G, onGround(ts, tu, 0, r() * 6), 'broad', r, r.range(0.9, 1.3)); }
      }
      for (let s = s0 + r() * 8; s < s1; s += r.range(5, 9)) {
        if (zoneAt(s) !== 'country' || nearX(s, 7) || nearR(s, 36)) continue;
        const u = side * r.range(140, 210);
        P.tree(G, onGround(s, u, -0.3, r() * 6, false), 'cedar', r, r.range(0.9, 1.4));
        if (r() < 0.12 && !nearX(s + 2, 8) && !nearR(s + 2, 34)) P.tree(G, onGround(s + 2, side * r.range(10, 130), 0, r() * 6), 'broad', r, r.range(0.8, 1.2));
      }
    }
    const sb = Math.floor((s0 + CH / 2) / 600) * 600 + 300;
    if (sb >= s0 && sb < s1 && zoneAt(sb) === 'country' && !nearR(sb, 40)) { const rw = rwAt(sb); P.busStop(G, matAt(sb, -(rw + 1.6), road(sb) - 0.08), r); }
    const sv = Math.floor((s0 + CH / 2) / 700) * 700 + 120;
    if (sv >= s0 && sv < s1 && zoneAt(sv) === 'country' && !nearR(sv, 40)) { const rw = rwAt(sv); P.vendingMachine(G, matAt(sv, -(rw + 0.95), road(sv) - 0.08), r); P.streetLamp(G, matAt(sv + 2, -(rw + 0.8), road(sv) - 0.08), r); }
    const sh = Math.floor((s0 + CH / 2) / 900) * 900 + 450;
    if (sh >= s0 && sh < s1 && zoneAt(sh) === 'country' && !nearR(sh, 40)) { const rw = rwAt(sh); P.smallShrine(G, onGround(sh, rw + 5), r); }
    const sj = Math.floor((s0 + CH / 2) / 380) * 380 + 190;
    if (sj >= s0 && sj < s1 && zoneAt(sj) === 'country' && !nearR(sj, 40) && !nearX(sj, 30)) { const rw = rwAt(sj), u = (hash2(Math.round(sj), 5) < 0.5 ? -1 : 1) * (rw + 2.75); P.jizo(G, onGround(sj, u, 0.0)); }
    for (let s = s0; s < s1; s += 30) {
      if (zoneAt(s) !== 'country') continue;
      const k = this.path.curv(s);
      if (Math.abs(k) > 1 / 450 && r() < 0.5) { const out = k > 0 ? -1 : 1, rw = rwAt(s); P.curveMirror(G, onGround(s, out * (rw + 0.75)), out > 0 ? -1 : 1); }
    }
  }
}
