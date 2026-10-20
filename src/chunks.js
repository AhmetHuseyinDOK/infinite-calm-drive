// The world is built in 60 m chunks along the infinite road; each chunk merges its contents into a handful of meshes.
import * as THREE from 'three';
import { zoneMix, zoneW, zoneAt, zparam, groundOffsetMix, SEA, crossingS, crossingValid, crossingNear, XING, XOFF } from './path.js';
import { xingPosts } from './crossing.js';
import { GB } from './geom.js';
import * as P from './props.js';
import { rng, hash2, clamp, sstep } from './util.js';
import { S_WRAP } from './materials.js';

export const CH = 60;
const NEAR = [0.7, 0.9, 1.5, 1.9, 2.0, 2.1, 2.65, 3.05, 3.4];
const FAR = [7, 9, 11.5, 14.5, 18, 23, 29, 36, 45, 56, 70, 86, 104, 124, 140, 160, 185, 215];
const POLE_SP = 32;
const WIRE = [0.025, 0.026, 0.032];
const mod = (a, n) => ((a % n) + n) % n;
/** true within m metres of a level crossing (keeps the track corridor clear) */
const nearX = (s, m) => { const c = crossingNear(s); return !!c && Math.abs(s - c.s) < m; };

class GroundB {
  constructor() { this.P = []; this.N = []; this.SU = []; this.ZW = []; this.RK = []; this.I = []; }
  grid(nr, nc, fn) {
    const base = this.P.length / 3;
    for (let i = 0; i < nr; i++) for (let j = 0; j < nc; j++) {
      const v = fn(i, j);
      this.P.push(v[0], v[1], v[2]); this.N.push(v[3], v[4], v[5]); this.SU.push(v[6], v[7]);
      this.ZW.push(v[8], v[9], v[10], v[11]); this.RK.push(v[12], v[13]);
    }
    for (let i = 0; i < nr - 1; i++) for (let j = 0; j < nc - 1; j++) {
      const a = base + i * nc + j, b = a + 1, c = a + nc, d = c + 1;
      this.I.push(a, b, c, b, d, c);
    }
  }
  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.P, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.N, 3));
    g.setAttribute('su', new THREE.Float32BufferAttribute(this.SU, 2));
    g.setAttribute('zw', new THREE.Float32BufferAttribute(this.ZW, 4));
    g.setAttribute('rk', new THREE.Float32BufferAttribute(this.RK, 2));
    g.setIndex(this.I); g.computeBoundingSphere();
    return g;
  }
}

export class World {
  constructor(scene, path, M, foamMat) {
    this.path = path; this.M = M; this.foamMat = foamMat;
    this.group = new THREE.Group(); scene.add(this.group);
    this.chunks = new Map(); this.origin = { x: 0, z: 0 };
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
    const t0 = performance.now();
    for (;;) {
      if (!this.job) {
        let next = -1;
        for (let c = Math.max(0, c0); c <= c1; c++) if (!this.chunks.has(c)) { next = c; break; }
        if (next < 0) return 0;
        this.job = { c: next, it: this.gen(next) };
      }
      const res = this.job.it.next();
      if (res.done) { this.chunks.set(this.job.c, res.value); this.group.add(res.value.group); this.job = null; }
      if (performance.now() - t0 > budgetMs) return 1;
    }
  }
  dispose(ch) { this.group.remove(ch.group); ch.group.traverse(o => { if (o.geometry) o.geometry.dispose(); }); }

  *gen(c) {
    const path = this.path, s0 = c * CH, s1 = s0 + CH;
    const O = path.at(s0), ox = O.x, oz = O.z;
    const r = rng(Math.floor(hash2(c, 777) * 4294967295));
    const G = { atlas: new GB({ uv: true }), color: new GB(), foliage: new GB(), leaf: new GB({ uv: true }), lamp: new GB({ color: false }), pool: new GB({ uv: true, color: false }) };
    const ground = new GroundB(), foam = [];
    const f = {}, f2 = {};

    // ---------- helpers ----------
    const H = (s, u) => { path.at(s, f2); const rw = zparam(s, 'rw'); return f2.y + groundOffsetMix(s, u, f2.y, rw); };
    const zw4 = s => { const w = zoneW(s); return [w.city, w.sakura, w.coast, w.country]; };
    const world = (s, u, y) => { path.at(s, f); return [f.x + f.rx * u - ox, y, f.z + f.rz * u - oz]; };
    const matAt = (s, u, y, extraYaw = 0, faceRoad = true) => {
      path.at(s, f);
      const yaw = f.h - Math.PI / 2 + (faceRoad && u < 0 ? Math.PI : 0) + extraYaw;
      const m = new THREE.Matrix4().makeRotationY(yaw); m.setPosition(f.x + f.rx * u - ox, y, f.z + f.rz * u - oz); return m;
    };
    const onGround = (s, u, dy = 0, extraYaw = 0, faceRoad = true) => matAt(s, u, H(s, u) + dy, extraYaw, faceRoad);
    const road = s => path.at(s, f2).y;
    const rwAt = s => zparam(s, 'rw');
    const walkW = s => { const w = zoneW(s); return w.city + w.sakura > 0.5 ? (w.city >= w.sakura ? 3.0 : 2.6) : 0; };

    // ---------- terrain ----------
    {
      const rows = 21, rwMid = rwAt(s0 + CH / 2);
      const cols = (() => { const right = [0, ...NEAR]; const out = right.map(n => n); FAR.forEach(v => out.push(v - rwMid)); return out; })();
      // columns: −far … −rw | rw … far, expressed as offsets from the road edge
      const offs = [...cols.slice().reverse().map(v => -v), ...cols];
      const nc = offs.length;
      ground.grid(rows, nc, (i, j) => {
        const s = s0 + (i / (rows - 1)) * CH, rw = rwAt(s), o = offs[j], u = o < 0 || (o === 0 && j < nc / 2) ? o - rw : o + rw;
        path.at(s, f); const e = f.y;
        const y = e + groundOffsetMix(s, u, e, rw);
        const d = 0.6, du = (H(s, u + d) - H(s, u - d)) / (2 * d), ds = (H(s + d, u) - H(s - d, u)) / (2 * d);
        // normal = −du·R + 1·Up − ds·F (local frame), then to world
        let nx = -du * f.rx - ds * f.fx, ny = 1, nz = -du * f.rz - ds * f.fz; const nl = Math.hypot(nx, ny, nz); nx /= nl; ny /= nl; nz /= nl;
        const w = zw4(s);
        return [f.x + f.rx * u - ox, y, f.z + f.rz * u - oz, nx, ny, nz, mod(s, S_WRAP), u, w[0], w[1], w[2], w[3], rw, 0];
      });
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
        return [f.x + f.rx * u - ox, e, f.z + f.rz * u - oz, nx / nl, ny / nl, nz / nl, mod(s, S_WRAP), u, w[0], w[1], w[2], w[3], rw, 1];
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
            return [f.x + f.rx * u - ox, f.y + 0.15, f.z + f.rz * u - oz, 0, 1, 0, mod(s, S_WRAP), u, w[0], w[1], w[2], w[3], rw, 2];
          });
          ground.grid(run.length, 2, (i, j) => {
            const { s } = run[i], rw = rwAt(s), u = side * rw, top = side > 0 ? j : 1 - j;
            path.at(s, f); const w = zw4(s);
            return [f.x + f.rx * u - ox, f.y + (top ? 0.15 : 0), f.z + f.rz * u - oz, -side * f.rx, 0, -side * f.rz, mod(s, S_WRAP), u, w[0], w[1], w[2], w[3], rw, 3];
          });
        }
      }
    }

    yield;
    // ---------- scenery ----------
    this.placePoles(c, s0, s1, r, G, matAt, H, world, road, rwAt);
    {
      const kx = Math.ceil((s0 - XOFF) / XING), sx = crossingS(kx);
      if (sx < s1 && crossingValid(sx)) this.placeCrossing(G, ground, sx, matAt, road, rwAt, H, walkW, ox, oz);
    }
    yield;
    for (let s = s0; s < s1; s += 4) {
      const z = zoneAt(s);
      if (z === 'coast' && zoneW(s).coast > 0.45) this.guardrail(G, s, Math.min(s + 4, s1), world, road, rwAt);
    }
    yield* this.placeCity(G, r, s0, s1, matAt, onGround, road, rwAt, walkW, H);
    yield* this.placeSakura(G, r, s0, s1, matAt, onGround, road, rwAt, H);
    this.placeCoast(G, r, s0, s1, matAt, onGround, road, rwAt, H, foam, world);
    yield;
    this.placeCountry(G, r, s0, s1, matAt, onGround, road, rwAt, H);
    yield;

    // ---------- assemble ----------
    const grp = new THREE.Group();
    const add = (geo, mat, cast, recv, order = 0) => { if (!geo) return; const m = new THREE.Mesh(geo, mat); m.castShadow = cast; m.receiveShadow = recv; m.renderOrder = order; grp.add(m); };
    add(ground.build(), this.M.ground, false, true); yield;
    add(G.atlas.build(), this.M.atlas, true, true); yield;
    add(G.color.build(), this.M.color, true, true); yield;
    add(G.foliage.build(), this.M.foliage, true, true);
    add(G.leaf.build(), this.M.leaf, true, true); yield;
    add(G.lamp.build(), this.M.lamp, false, false);
    add(G.pool.build(), this.M.pool, false, false, 2);
    if (foam.length) {
      const g = new THREE.BufferGeometry(), pos = [], su = [], idx = [];
      foam.forEach((row, i) => { for (const v of row) { pos.push(v[0], v[1], v[2]); su.push(v[3], v[4]); } if (i > 0) { const a = (i - 1) * 2; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); } });
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('su', new THREE.Float32BufferAttribute(su, 2)); g.setIndex(idx); g.computeBoundingSphere();
      add(g, this.foamMat, false, false, 1);
    }
    grp.position.set(ox - this.origin.x, 0, oz - this.origin.z);
    return { group: grp, ox, oz, s0 };
  }

  // poles + overhead wires (country / coast / city share the rule so wires connect across zones)
  poleSpec(k) {
    const s = k * POLE_SP + 6, z = zoneAt(s);
    if (z === 'sakura' || nearX(s, 6)) return null;
    const rw = zparam(s, 'rw');
    const u = z === 'city' ? rw + 0.45 : z === 'coast' ? rw + 1.35 : rw + 2.35;
    return { s, u, z };
  }
  placePoles(c, s0, s1, r, G, matAt, H, world, road, rwAt) {
    const k0 = Math.ceil((s0 - 6) / POLE_SP), k1 = Math.floor((s1 - 6 - 0.001) / POLE_SP);
    for (let k = k0; k <= k1; k++) {
      const p = this.poleSpec(k); if (!p) continue;
      const y = p.z === 'city' ? road(p.s) + 0.15 : H(p.s, p.u);
      const M = matAt(p.s, p.u, y);
      const pr = rng(Math.floor(hash2(k, 31) * 4294967295));
      const anchors = P.utilityPole(G, M, pr, { trans: pr() < 0.45 });
      if (p.z === 'city' && (k % 2 === 0)) P.poleLamp(G, M, -0.11);
      const q = this.poleSpec(k + 1);
      if (q) {
        const qy = q.z === 'city' ? road(q.s) + 0.15 : H(q.s, q.u);
        const QM = matAt(q.s, q.u, qy);
        const B = P.utilityPole({ color: new GB(), atlas: new GB({ uv: true }) }, QM, rng(Math.floor(hash2(k + 1, 31) * 4294967295)), {});
        G.color.setM(new THREE.Matrix4());
        for (let i = 0; i < anchors.length; i++) {
          const a = anchors[i], b = B[i], sag = 0.35 + pr() * 0.4 + (i >= 7 ? 0.3 : 0);
          G.color.wire([a.x, a.y, a.z], [b.x, b.y, b.z], sag, i >= 7 ? 0.022 : 0.015, WIRE, 10);
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

  /** level crossing: gravel bed + sleepers (shader), rails, rubber crossing panels, catenary, alarm posts, signs */
  placeCrossing(G, ground, sx, matAt, road, rwAt, H, walkW, ox, oz) {
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
    // alarm posts (barrier arms + lamps are animated by the crossing rig)
    for (const p of xingPosts(this.path, sx)) {
      const m = new THREE.Matrix4().makeRotationY(p.yaw); m.setPosition(p.x - ox, p.y, p.z - oz);
      P.alarmPost(G, m);
    }
    // "railway crossing ahead" signs for both directions
    P.signPost(G, matAt(sx - 70, -(rwAt(sx - 70) + 0.6), road(sx - 70) + 0.15 * (sw > 0 ? 1 : 0)), 'sign_xing', 1, 2.2, 0.85);
    P.signPost(G, matAt(sx + 70, rwAt(sx + 70) + 0.6, road(sx + 70) + 0.15 * (sw > 0 ? 1 : 0)), 'sign_xing', -1, 2.2, 0.85);
  }

  guardrail(G, sa, sb, world, road, rwAt) {
    G.color.setM(new THREE.Matrix4());
    const n = Math.max(1, Math.round((sb - sa) / 2));
    for (let i = 0; i < n; i++) {
      const s = sa + ((sb - sa) * i) / n, t = sa + ((sb - sa) * (i + 1)) / n;
      const ua = -(rwAt(s) + 0.95), ub = -(rwAt(t) + 0.95), ya = road(s), yb = road(t);
      const p = (ss, u, y) => world(ss, u, y);
      const A0 = p(s, ua, ya + 0.52), A1 = p(t, ub, yb + 0.52), B0 = p(s, ua, ya + 0.84), B1 = p(t, ub, yb + 0.84);
      // road-facing beam (faces +R because it sits on the left)
      G.color.quad(A0, A1, B1, B0, P.PAL.rail);
      G.color.quad(A1, A0, B0, B1, [0.62, 0.64, 0.66]);
      const q = world(s, ua - 0.05, ya);
      G.color.box(q[0] - 0.05, ya, q[2] - 0.05, q[0] + 0.05, ya + 0.8, q[2] + 0.05, [0.7, 0.72, 0.75]);
    }
  }

  *placeCity(G, r, s0, s1, matAt, onGround, road, rwAt, walkW, H) {
    for (const side of [-1, 1]) {
      let s = s0 + r() * 2;
      while (s < s1 - 2) {
        if (zoneW(s).city < 0.62) { s += 4; continue; }
        { const cx = crossingNear(s + 6); if (cx && s < cx.s + 8.5 && s + 14 > cx.s - 8.5) { s = Math.max(s + 1, cx.s + 8.5); continue; } }
        const cs = mod(s, 150);
        if (cs > 143 || cs < 6) { s += 3; continue; }              // side street at each crosswalk
        const rw = rwAt(s), sw = walkW(s) || 3.0, front = rw + sw + 0.15;
        const t = r();
        const type = t < 0.42 ? 'shop' : t < 0.58 ? 'apt' : t < 0.68 ? 'office' : t < 0.82 ? 'house' : t < 0.88 ? 'konbini' : t < 0.94 ? 'parking' : 'gap';
        let w = type === 'shop' ? r.range(5, 9) : type === 'apt' ? r.range(10, 16) : type === 'office' ? r.range(10, 14) : type === 'house' ? r.range(7, 9.5)
          : type === 'konbini' ? r.range(12, 14) : type === 'parking' ? r.range(7, 11) : r.range(2, 3.5);
        if (s + w > s1) { if (s1 - s < 5 || type === 'konbini') break; w = s1 - s - 0.2; }
        const sm = s + w / 2, e = road(sm), tint = r.pick(P.TINTS), litP = 0.42;
        if (type === 'parking') {
          const M = matAt(sm, side * (front + 3), e + 0.15);
          if (r() < 0.8) P.parkedCar(G, P.sub(M, 0, 0, 0.5, (r() - 0.5) * 0.1), r);
          G.color.setM(M); G.color.box(-w / 2, 0, 5.5, w / 2, 1.6, 5.7, P.PAL.concrete);
        } else if (type !== 'gap') {
          const M = matAt(sm, side * front, e + 0.15);
          const spec = { type, w, d: type === 'apt' || type === 'office' ? r.range(10, 14) : r.range(8, 12),
            floors: type === 'shop' ? r.int(2, 4) : type === 'apt' ? r.int(4, 9) : type === 'office' ? r.int(4, 8) : 2, tint, litP, fence: type === 'house' && r() < 0.5 ? 1.2 : 0 };
          P.building(G, M, r, spec);
          if (type !== 'house' && r() < 0.28) P.vendingMachine(G, matAt(sm + (r() - 0.5) * (w - 1.2), side * (front - 0.42), e + 0.15), r);
          if ((type === 'shop' || type === 'konbini') && r() < 0.3) for (let b = 0; b < 1 + r() * 3; b++) P.bicycle(G, matAt(sm - w / 2 + 0.8 + b * 0.55, side * (front - 0.75), e + 0.15, Math.PI / 2 + 0.1), r);
          if (type === 'house' && r() < 0.6) for (let p = 0; p < 2 + r() * 3; p++) P.pottedPlant(G, matAt(sm + 1 + p * 0.5, side * (front - 0.3), e + 0.15), r);
          if (r() < 0.03) for (let k = 0; k < 3; k++) P.cone(G, matAt(sm + k * 0.9, side * (rw + 0.35), e));
        }
        s += w + r.range(0.05, 0.5);
        yield;
      }
      // second row: taller buildings peeking over the street
      for (let s2 = s0 + r() * 10; s2 < s1 - 8; s2 += r.range(14, 26)) {
        if (zoneW(s2).city < 0.7 || r() < 0.3 || nearX(s2, 18)) continue;
        const rw = rwAt(s2), M = matAt(s2, side * (rw + 3.2 + r.range(14, 20)), road(s2) + 0.1);
        P.building(G, M, r, { type: r() < 0.6 ? 'apt' : 'office', w: r.range(12, 18), d: 12, floors: r.int(6, 11), tint: r.pick(P.TINTS), litP: 0.4 });
      }
      // far towers for a skyline
      if (zoneW(s0 + 30).city > 0.7 && r() < 0.65) {
        const sm = s0 + r() * CH; if (nearX(sm, 24)) continue;
        const M = matAt(sm, side * r.range(55, 150), road(sm));
        P.building(G, M, r, { type: 'tower', w: r.range(16, 26), d: r.range(16, 22), floors: r.int(12, 26), tint: r.pick(P.TINTS), litP: 0.45 });
      }
    }
    // signs & mirrors at crossings
    const k0 = Math.ceil(s0 / 150), k1 = Math.floor((s1 - 0.01) / 150);
    for (let k = k0; k <= k1; k++) {
      const sc = k * 150; if (zoneAt(sc) !== 'city') continue;
      const rw = rwAt(sc);
      P.signPost(G, matAt(sc - 1, -(rw + 0.4), road(sc) + 0.15), 'sign_blue', 1);
      P.signPost(G, matAt(sc - 6, -(rw + 0.4), road(sc) + 0.15), 'sign_stop', 1, 2.1, 0.75);
      P.curveMirror(G, matAt(sc + 7, rw + 0.4, road(sc) + 0.15), -1);
      if (k % 3 === 0) P.signPost(G, matAt(sc + 20, -(rw + 0.4), road(sc) + 0.15), 'sign_speed', 1);
    }
  }

  *placeSakura(G, r, s0, s1, matAt, onGround, road, rwAt, H) {
    for (const side of [-1, 1]) {
      for (let s = s0 + r() * 4; s < s1; s += r.range(7.5, 10)) {
        if (zoneW(s).sakura < 0.45) continue;
        const rw = rwAt(s);
        P.tree(G, onGround(s, side * (rw + 3.7), 0, r() * 6), 'sakura', r, r.range(1.05, 1.3));
        if (r() < 0.45) P.tree(G, onGround(s + 3, side * (rw + r.range(9, 18)), 0, r() * 6), 'sakura', r, r.range(0.9, 1.25));
      }
      yield;
      for (let s = s0 + (side > 0 ? 0 : 12); s < s1; s += 24) {
        if (zoneAt(s) !== 'sakura') continue;
        const rw = rwAt(s);
        P.oldLamp(G, matAt(s, side * (rw + 2.25), road(s) + 0.15));
        if (mod(s, 48) < 24) P.stoneLantern(G, matAt(s + 6, side * (rw + 3.0), H(s + 6, side * (rw + 3.0))));
      }
      for (let s = s0 + r() * 15; s < s1; s += r.range(14, 24)) {
        if (zoneAt(s) !== 'sakura' || r() < 0.35) continue;
        const rw = rwAt(s);
        P.building(G, onGround(s, side * (rw + r.range(20, 30))), r, { type: 'house', w: r.range(8, 11), d: r.range(7, 9), floors: r() < 0.6 ? 2 : 1, tint: r.pick(P.TINTS), litP: 0.45, fence: r() < 0.6 ? 1.4 : 0 });
      }
    }
    const k = Math.floor((s0 + CH / 2) / 480);
    const st = k * 480 + 240;
    if (st >= s0 && st < s1 && zoneAt(st) === 'sakura') P.torii(G, matAt(st, 0, road(st), 0, false), rwAt(st) + 1.6, 6.4);
  }

  placeCoast(G, r, s0, s1, matAt, onGround, road, rwAt, H, foam, world) {
    // foam where the beach meets the sea
    for (let i = 0; i <= 20; i++) {
      const s = s0 + (i / 20) * CH, w = zoneW(s).coast;
      if (w < 0.85) { if (foam.length && foam[foam.length - 1] !== null) foam.push(null); continue; }
      const rw = rwAt(s), a0 = rw + 11.0, a1 = rw + 19;
      const A = world(s, -a0, SEA + 0.06), B = world(s, -a1, SEA + 0.06);
      foam.push([[A[0], A[1], A[2], mod(s, S_WRAP), 0], [B[0], B[1], B[2], mod(s, S_WRAP), 1]]);
    }
    // keep only the first contiguous run (rows are contiguous inside a coast chunk)
    const firstNull = foam.indexOf(null); if (firstNull >= 0) foam.length = firstNull;
    if (foam.length < 2) foam.length = 0;

    for (let s = s0 + r() * 6; s < s1; s += r.range(5, 9)) {
      if (zoneAt(s) !== 'coast') continue;
      const rw = rwAt(s);
      if (r() < 0.7) P.tree(G, onGround(s, rw + r.range(3.5, 26), 0, r() * 6, false), 'pine', r, r.range(0.9, 1.3));
      if (r() < 0.2) P.tree(G, onGround(s + 2, -(rw + r.range(3.5, 7)), 0, r() * 6, false), 'pine', r, r.range(0.8, 1.1));
    }
    for (let s = s0 + 4; s < s1; s += r.range(18, 30)) {
      if (zoneAt(s) !== 'coast' || r() < 0.4) continue;
      const rw = rwAt(s), n = 3 + Math.floor(r() * 5);
      for (let i = 0; i < n; i++) { const u = -(rw + r.range(12, 17)), ss = s + r.range(-3, 3); P.tetrapod(G, matAt(ss, u, Math.max(H(ss, u), SEA - 0.4) + r.range(-0.2, 0.4), r() * 6), r, r.range(0.9, 1.2)); }
    }
    for (let s = s0 + 12; s < s1; s += 48) {
      if (zoneAt(s) !== 'coast') continue;
      const rw = rwAt(s); P.streetLamp(G, onGround(s, rw + 1.0), r);
    }
    if (zoneAt(s0 + 30) === 'coast' && r() < 0.5) {
      const s = s0 + r() * CH, rw = rwAt(s);
      P.building(G, onGround(s, rw + r.range(9, 16)), r, { type: 'house', w: r.range(7, 10), d: 8, floors: r() < 0.5 ? 2 : 1, tint: r.pick(P.TINTS), litP: 0.5, fence: 0 });
    }
    if (zoneAt(s0 + 30) === 'coast' && r() < 0.55) {
      const s = s0 + r() * CH; P.boat(G, matAt(s, -(rwAt(s) + r.range(45, 220)), SEA - 0.25, r() * 6, false), r);
    }
    const lh = Math.floor((s0 + CH / 2) / 1500) * 1500 + 700;
    if (lh >= s0 && lh < s1 && zoneAt(lh) === 'coast') P.lighthouse(G, matAt(lh, -(rwAt(lh) + 75), SEA - 1, 0, false));
  }

  placeCountry(G, r, s0, s1, matAt, onGround, road, rwAt, H) {
    for (const side of [-1, 1]) {
      for (let s = s0 + r() * 20; s < s1; s += r.range(20, 40)) {
        if (zoneAt(s) !== 'country' || r() < 0.55 || nearX(s, 16)) continue;
        const u = side * r.range(16, 95), M = onGround(s, u);
        P.building(G, M, r, { type: 'house', w: r.range(9, 13), d: r.range(8, 10), floors: r() < 0.45 ? 2 : 1, tint: r.pick(P.TINTS), litP: 0.5, fence: 0 });
        for (let t = 0; t < 2 + r() * 3; t++) { const tu = u + side * r.range(6, 14), ts = s + r.range(-8, 8); P.tree(G, onGround(ts, tu, 0, r() * 6), 'broad', r, r.range(0.9, 1.3)); }
      }
      for (let s = s0 + r() * 8; s < s1; s += r.range(5, 9)) {
        if (zoneAt(s) !== 'country' || nearX(s, 7)) continue;
        const u = side * r.range(140, 210);
        P.tree(G, onGround(s, u, -0.3, r() * 6, false), 'cedar', r, r.range(0.9, 1.4));
        if (r() < 0.12 && !nearX(s + 2, 8)) P.tree(G, onGround(s + 2, side * r.range(10, 130), 0, r() * 6), 'broad', r, r.range(0.8, 1.2));
      }
    }
    const sb = Math.floor((s0 + CH / 2) / 600) * 600 + 300;
    if (sb >= s0 && sb < s1 && zoneAt(sb) === 'country') { const rw = rwAt(sb); P.busStop(G, matAt(sb, -(rw + 1.6), road(sb) - 0.08), r); }
    const sv = Math.floor((s0 + CH / 2) / 700) * 700 + 120;
    if (sv >= s0 && sv < s1 && zoneAt(sv) === 'country') { const rw = rwAt(sv); P.vendingMachine(G, matAt(sv, -(rw + 0.95), road(sv) - 0.08), r); P.streetLamp(G, matAt(sv + 2, -(rw + 0.8), road(sv) - 0.08), r); }
    const sh = Math.floor((s0 + CH / 2) / 900) * 900 + 450;
    if (sh >= s0 && sh < s1 && zoneAt(sh) === 'country') { const rw = rwAt(sh); P.smallShrine(G, onGround(sh, rw + 5), r); }
    for (let s = s0; s < s1; s += 30) {
      if (zoneAt(s) !== 'country') continue;
      const k = this.path.curv(s);
      if (Math.abs(k) > 1 / 450 && r() < 0.5) { const out = k > 0 ? -1 : 1, rw = rwAt(s); P.curveMirror(G, onGround(s, out * (rw + 0.75)), out > 0 ? -1 : 1); }
    }
  }
}
