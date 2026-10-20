// GB — a tiny geometry accumulator. Props write straight into one GB per material (with a current
// transform), so a whole chunk becomes a handful of draw calls without clone+merge overhead.
import * as THREE from 'three';

const _a = new THREE.Vector3(), _b = new THREE.Vector3();
const WHITE = [1, 1, 1];

export class GB {
  constructor({ uv = false, color = true } = {}) {
    this.hasUV = uv; this.hasColor = color;
    this.P = []; this.N = []; this.U = []; this.Cl = [];
    this.m = new THREE.Matrix4(); this.nm = new THREE.Matrix3();
    this.e = this.m.elements; this.ne = this.nm.elements;
  }
  get count() { return this.P.length / 3; }
  setM(m) { this.m.copy(m); this.nm.getNormalMatrix(m); return this; }
  vtx(x, y, z, nx, ny, nz, u, v, c) {
    const e = this.e, n = this.ne;
    this.P.push(e[0] * x + e[4] * y + e[8] * z + e[12], e[1] * x + e[5] * y + e[9] * z + e[13], e[2] * x + e[6] * y + e[10] * z + e[14]);
    const X = n[0] * nx + n[3] * ny + n[6] * nz, Y = n[1] * nx + n[4] * ny + n[7] * nz, Z = n[2] * nx + n[5] * ny + n[8] * nz;
    const l = 1 / (Math.sqrt(X * X + Y * Y + Z * Z) || 1);
    this.N.push(X * l, Y * l, Z * l);
    if (this.hasUV) this.U.push(u, v);
    if (this.hasColor) { const k = c || WHITE; this.Cl.push(k[0], k[1], k[2]); }
  }
  /** quad p0..p3 counter-clockwise seen from the front (p0 bottom-left, p1 bottom-right, p2 top-right, p3 top-left) */
  quad(p0, p1, p2, p3, c, uv) {
    _a.set(p1[0] - p0[0], p1[1] - p0[1], p1[2] - p0[2]);
    _b.set(p3[0] - p0[0], p3[1] - p0[1], p3[2] - p0[2]);
    if (_b.lengthSq() < 1e-12) _b.set(p2[0] - p0[0], p2[1] - p0[1], p2[2] - p0[2]);
    _a.cross(_b).normalize();
    const nx = _a.x, ny = _a.y, nz = _a.z;
    const u0 = uv ? uv.u0 : 0, u1 = uv ? uv.u1 : 1, v0 = uv ? uv.v0 : 0, v1 = uv ? uv.v1 : 1;
    this.vtx(p0[0], p0[1], p0[2], nx, ny, nz, u0, v0, c); this.vtx(p1[0], p1[1], p1[2], nx, ny, nz, u1, v0, c); this.vtx(p2[0], p2[1], p2[2], nx, ny, nz, u1, v1, c);
    this.vtx(p0[0], p0[1], p0[2], nx, ny, nz, u0, v0, c); this.vtx(p2[0], p2[1], p2[2], nx, ny, nz, u1, v1, c); this.vtx(p3[0], p3[1], p3[2], nx, ny, nz, u0, v1, c);
  }
  /** axis-aligned box from (x0,y0,z0) to (x1,y1,z1). faces: optional {px,nx,py,ny,pz,nz} → atlas uv; per-face colours via cf */
  box(x0, y0, z0, x1, y1, z1, c, faces = null, cf = null) {
    const F = faces || {}, k = cf || {};
    this.quad([x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], k.nz || c, F.nz);
    this.quad([x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], k.pz || c, F.pz);
    this.quad([x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0], k.nx || c, F.nx);
    this.quad([x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1], k.px || c, F.px);
    this.quad([x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [x0, y1, z0], k.py || c, F.py);
    if (!(cf && cf.noBottom)) this.quad([x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1], k.ny || c, F.ny);
  }
  /** vertical cylinder / cone with smooth normals */
  cyl(x, y, z, r0, r1, h, seg, c, caps = true) {
    const slope = (r0 - r1) / h;
    for (let i = 0; i < seg; i++) {
      const a0 = (i / seg) * Math.PI * 2, a1 = ((i + 1) / seg) * Math.PI * 2;
      const c0 = Math.cos(a0), s0 = Math.sin(a0), c1 = Math.cos(a1), s1 = Math.sin(a1);
      const A = [x + c0 * r0, y, z + s0 * r0], Bv = [x + c1 * r0, y, z + s1 * r0], Cv = [x + c1 * r1, y + h, z + s1 * r1], D = [x + c0 * r1, y + h, z + s0 * r1];
      this.vtx(A[0], A[1], A[2], c0, slope, s0, 0, 0, c); this.vtx(D[0], D[1], D[2], c0, slope, s0, 0, 0, c); this.vtx(Cv[0], Cv[1], Cv[2], c1, slope, s1, 0, 0, c);
      this.vtx(A[0], A[1], A[2], c0, slope, s0, 0, 0, c); this.vtx(Cv[0], Cv[1], Cv[2], c1, slope, s1, 0, 0, c); this.vtx(Bv[0], Bv[1], Bv[2], c1, slope, s1, 0, 0, c);
      if (caps && r1 > 0.001) { this.vtx(x, y + h, z, 0, 1, 0, 0, 0, c); this.vtx(Cv[0], Cv[1], Cv[2], 0, 1, 0, 0, 0, c); this.vtx(D[0], D[1], D[2], 0, 1, 0, 0, 0, c); }
    }
  }
  /** cylinder between two arbitrary points (pipes, branches, arms, wires) */
  rod(p, q, r0, r1, seg, c) {
    let dx = q[0] - p[0], dy = q[1] - p[1], dz = q[2] - p[2]; const len = Math.hypot(dx, dy, dz); dx /= len; dy /= len; dz /= len;
    // ax = dir × up, ay = ax × dir
    let ux = 0, uy = 1, uz = 0; if (Math.abs(dy) > 0.99) { ux = 1; uy = 0; }
    let ax = dy * uz - dz * uy, ay = dz * ux - dx * uz, az = dx * uy - dy * ux; const al = Math.hypot(ax, ay, az); ax /= al; ay /= al; az /= al;
    const bx = ay * dz - az * dy, by = az * dx - ax * dz, bz = ax * dy - ay * dx;
    for (let i = 0; i < seg; i++) {
      const a0 = (i / seg) * Math.PI * 2, a1 = ((i + 1) / seg) * Math.PI * 2;
      const c0 = Math.cos(a0), s0 = Math.sin(a0), c1 = Math.cos(a1), s1 = Math.sin(a1);
      const n0x = ax * c0 + bx * s0, n0y = ay * c0 + by * s0, n0z = az * c0 + bz * s0, n1x = ax * c1 + bx * s1, n1y = ay * c1 + by * s1, n1z = az * c1 + bz * s1;
      const A = [p[0] + n0x * r0, p[1] + n0y * r0, p[2] + n0z * r0], B = [p[0] + n1x * r0, p[1] + n1y * r0, p[2] + n1z * r0];
      const Cc = [q[0] + n1x * r1, q[1] + n1y * r1, q[2] + n1z * r1], D = [q[0] + n0x * r1, q[1] + n0y * r1, q[2] + n0z * r1];
      this.vtx(A[0], A[1], A[2], n0x, n0y, n0z, 0, 0, c); this.vtx(B[0], B[1], B[2], n1x, n1y, n1z, 0, 0, c); this.vtx(Cc[0], Cc[1], Cc[2], n1x, n1y, n1z, 0, 0, c);
      this.vtx(A[0], A[1], A[2], n0x, n0y, n0z, 0, 0, c); this.vtx(Cc[0], Cc[1], Cc[2], n1x, n1y, n1z, 0, 0, c); this.vtx(D[0], D[1], D[2], n0x, n0y, n0z, 0, 0, c);
    }
    return len;
  }
  /** lumpy sphere (foliage clumps); colour darkens toward the underside */
  blob(cx, cy, cz, r, c, cDark, seed = 0, sy = 1) {
    const g = BLOB[seed % BLOB.length], p = g.attributes.position.array, n = g.attributes.normal.array, d = g.userData.disp;
    for (let i = 0; i < p.length; i += 3) {
      const k = 1 + d[i / 3], t = Math.max(0, Math.min(1, n[i + 1] * 0.5 + 0.5));
      const col = [cDark[0] + (c[0] - cDark[0]) * t, cDark[1] + (c[1] - cDark[1]) * t, cDark[2] + (c[2] - cDark[2]) * t];
      this.vtx(cx + p[i] * r * k, cy + p[i + 1] * r * k * sy, cz + p[i + 2] * r * k, n[i], n[i + 1], n[i + 2], 0, 0, col);
    }
  }
  /** catenary-ish wire between two points as a thin 3-sided tube */
  wire(p, q, sag, r, c, seg = 10) {
    let prev = p;
    for (let i = 1; i <= seg; i++) {
      const t = i / seg, cur = [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t - sag * 4 * t * (1 - t), p[2] + (q[2] - p[2]) * t];
      this.rod(prev, cur, r, r, 3, c); prev = cur;
    }
  }
  /** a quad with explicit per-vertex normals and colours (foliage cards) */
  card(P, N, uv, Cc) {
    const T = [[0, uv.u0, uv.v0], [1, uv.u1, uv.v0], [2, uv.u1, uv.v1], [0, uv.u0, uv.v0], [2, uv.u1, uv.v1], [3, uv.u0, uv.v1]];
    for (const [k, u, v] of T) this.vtx(P[k][0], P[k][1], P[k][2], N[k][0], N[k][1], N[k][2], u, v, Cc[k]);
  }
  /** freeze into typed arrays (used for prop templates) */
  toArrays() { return { P: new Float32Array(this.P), N: new Float32Array(this.N), C: this.hasColor ? new Float32Array(this.Cl) : null, U: this.hasUV ? new Float32Array(this.U) : null }; }
  /** append a pre-built template under matrix m (fast path for trees etc.) */
  stamp(T, m) {
    if (!T || !T.P.length) return;
    this.setM(m);
    const e = this.e, n = this.ne, P = T.P, N = T.N, Cc = T.C, U = T.U;
    const out = this.P, on = this.N;
    for (let i = 0; i < P.length; i += 3) {
      const x = P[i], y = P[i + 1], z = P[i + 2];
      out.push(e[0] * x + e[4] * y + e[8] * z + e[12], e[1] * x + e[5] * y + e[9] * z + e[13], e[2] * x + e[6] * y + e[10] * z + e[14]);
      const nx = N[i], ny = N[i + 1], nz = N[i + 2];
      const X = n[0] * nx + n[3] * ny + n[6] * nz, Y = n[1] * nx + n[4] * ny + n[7] * nz, Z = n[2] * nx + n[5] * ny + n[8] * nz;
      const l = 1 / (Math.sqrt(X * X + Y * Y + Z * Z) || 1);
      on.push(X * l, Y * l, Z * l);
    }
    if (this.hasColor) { if (Cc) for (let i = 0; i < Cc.length; i++) this.Cl.push(Cc[i]); else for (let i = 0; i < P.length; i++) this.Cl.push(1); }
    if (this.hasUV) { if (U) for (let i = 0; i < U.length; i++) this.U.push(U[i]); else for (let i = 0; i < (P.length / 3) * 2; i++) this.U.push(0); }
  }
  build() {
    if (!this.P.length) return null;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.P, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.N, 3));
    if (this.hasUV) g.setAttribute('uv', new THREE.Float32BufferAttribute(this.U, 2));
    if (this.hasColor) g.setAttribute('color', new THREE.Float32BufferAttribute(this.Cl, 3));
    g.computeBoundingSphere();
    return g;
  }
}

// a few pre-displaced icospheres for foliage (normals stay the smooth sphere normals → soft two-tone clumps)
const BLOB = [0, 1, 2, 3].map(seed => {
  const g = new THREE.IcosahedronGeometry(1, 1);
  const p = g.attributes.position.array, disp = new Float32Array(p.length / 3);
  const f = (x, y, z) => Math.sin(x * 3.1 + seed) * Math.cos(y * 2.7 + seed * 2) * Math.sin(z * 3.3 + seed * 3);
  for (let i = 0; i < p.length; i += 3) disp[i / 3] = f(p[i], p[i + 1], p[i + 2]) * 0.14;
  g.userData.disp = disp;
  return g;
});
