// Level crossings (踏切): the static alarm posts live in the chunks; this module owns the moving parts —
// the barrier arms, the flashing lamps and the little three-car commuter train that rolls through.
import * as THREE from 'three';
import { zparam, zoneW } from './path.js';
import { GB } from './geom.js';
import { GRAD, withCloudShadow } from './materials.js';
import { C } from './util.js';

const YEL = C('#f2c230'), BLK = C('#26272c');

/** the two alarm posts of the crossing at sx: our side (before the tracks, left) and the oncoming side */
export function xingPosts(path, sx) {
  const out = [];
  for (const side of [-1, 1]) {
    const s = sx + side * 4.9, f = path.at(s, {}), rw = zparam(s, 'rw'), u = side * (rw + 0.8);
    const w = zoneW(s), walk = w.city + w.sakura > 0.5;
    out.push({ x: f.x + f.rx * u, z: f.z + f.rz * u, y: f.y + (walk ? 0.15 : 0), yaw: f.h + (side < 0 ? 0 : Math.PI), side, rw });
  }
  return out;
}

// ------------------------------------------------------------------ barrier arms + lamps
export function makeCrossingRig() {
  const group = new THREE.Group();
  const armMat = withCloudShadow(new THREE.MeshToonMaterial({ vertexColors: true, gradientMap: GRAD }));
  const lampOn = new THREE.MeshBasicMaterial({ color: new THREE.Color(6, 0.45, 0.3) });
  const lampOff = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.22, 0.03, 0.03) });
  const posts = [0, 1].map(() => {
    const root = new THREE.Group(), pivot = new THREE.Group();
    root.add(pivot); pivot.position.set(-0.42, 1.02, -0.02);
    const g = new GB(); const L = 3.6;
    for (let i = 0, x = 0; x < L; i++, x += 0.45) g.box(-Math.min(x + 0.45, L), -0.065, -0.065, -x, 0.065, 0.065, i % 2 ? BLK : YEL);
    g.box(0, -0.09, -0.07, 0.38, 0.09, 0.07, BLK);
    const arm = new THREE.Mesh(g.build(), armMat); arm.castShadow = true; pivot.add(arm);
    const lamps = [-0.28, 0.28].map(x => { const m = new THREE.Mesh(new THREE.CircleGeometry(0.13, 18), lampOff); m.position.set(x, 2.75, -0.1); m.rotation.y = Math.PI; root.add(m); return m; });
    group.add(root);
    return { root, pivot, arm, lamps, L };
  });
  group.visible = false;
  return {
    group,
    /** place on the crossing (posts in absolute coords) and animate: raise 0 = down … 1 = up */
    update(P, origin, raise, flashing, t) {
      group.visible = !!P;
      if (!P) return;
      P.forEach((p, i) => {
        const o = posts[i];
        o.root.position.set(p.x - origin.x, p.y, p.z - origin.z); o.root.rotation.y = p.yaw;
        o.arm.scale.x = (p.rw + 0.25) / o.L;
        o.pivot.rotation.z = -raise * (Math.PI / 2 - 0.06);
        const ph = Math.floor(t * 2.5) % 2;
        o.lamps[0].material = flashing && ph === 0 ? lampOn : lampOff;
        o.lamps[1].material = flashing && ph === 1 ? lampOn : lampOff;
      });
    },
  };
}

// ------------------------------------------------------------------ the train
function trainTextures() {
  const W = 1024, H = 512;
  const mk = () => { const c = document.createElement('canvas'); c.width = W; c.height = H; return c; };
  const cA = mk(), cE = mk(), a = cA.getContext('2d'), e = cE.getContext('2d');
  const F = '"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';
  e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
  // ---- side panel 1024×160 (19.5 m × 3.05 m)
  const sh = 160;
  a.fillStyle = '#d3d7dc'; a.fillRect(0, 0, W, sh);
  for (let x = 0; x < W; x += 14) { a.fillStyle = 'rgba(80,90,100,0.07)'; a.fillRect(x, 0, 2, sh); }
  a.fillStyle = '#9aa1a9'; a.fillRect(0, 0, W, 8); a.fillStyle = '#5c636b'; a.fillRect(0, sh - 14, W, 14);
  const doors = [0.1, 0.36, 0.62, 0.88].map(f => f * W);
  const glass = (x, y, w, h) => {
    const g = a.createLinearGradient(x, y, x + w * 0.3, y + h); g.addColorStop(0, '#5d7fae'); g.addColorStop(0.6, '#9db7d6'); g.addColorStop(1, '#2f3f55');
    a.fillStyle = g; a.fillRect(x, y, w, h); a.fillStyle = 'rgba(255,255,255,0.25)'; a.beginPath(); a.moveTo(x + w * 0.2, y); a.lineTo(x + w * 0.38, y); a.lineTo(x + w * 0.1, y + h); a.lineTo(x - w * 0.08, y + h); a.fill();
    e.fillStyle = '#ffeccc'; e.fillRect(x, y, w, h);
  };
  // windows between doors
  for (let i = 0; i < doors.length - 1; i++) {
    const x0 = doors[i] + 40, x1 = doors[i + 1] - 40, n = 3, ww = (x1 - x0) / n;
    for (let k = 0; k < n; k++) { a.fillStyle = '#6b737c'; a.fillRect(x0 + k * ww + 2, 34, ww - 4, 58); glass(x0 + k * ww + 6, 38, ww - 12, 50); }
  }
  for (const x of [doors[0] - 70, doors[3] + 40]) { a.fillStyle = '#6b737c'; a.fillRect(x + 2, 34, 28, 58); glass(x + 5, 38, 22, 50); }
  // doors with their windows
  for (const d of doors) {
    a.fillStyle = '#c3c8ce'; a.fillRect(d - 30, 22, 60, sh - 36);
    a.fillStyle = '#7b828a'; a.fillRect(d - 1, 22, 2, sh - 36); a.strokeStyle = '#7b828a'; a.lineWidth = 2; a.strokeRect(d - 30, 22, 60, sh - 36);
    glass(d - 24, 34, 20, 46); glass(d + 4, 34, 20, 46);
  }
  // line colour stripes (a cheerful green, like a JR local)
  a.fillStyle = '#1f9a50'; a.fillRect(0, 98, W, 10); a.fillStyle = '#e8892b'; a.fillRect(0, 110, W, 5);
  for (const d of doors) { a.fillStyle = '#c3c8ce'; a.fillRect(d - 30, 98, 60, 17); }
  a.fillStyle = '#3a3f46'; a.font = `700 11px ${F}`; a.fillText('クハ 205-17', doors[1] + 40, 136);
  // ---- cab front 256×256 at (0,176)
  const fx = 0, fy = 176, fw = 256, fh = 256;
  a.fillStyle = '#d3d7dc'; a.fillRect(fx, fy, fw, fh);
  a.fillStyle = '#20262e'; a.fillRect(fx + 14, fy + 44, fw - 28, 96);
  a.fillStyle = 'rgba(160,190,225,0.35)'; a.beginPath(); a.moveTo(fx + 40, fy + 44); a.lineTo(fx + 80, fy + 44); a.lineTo(fx + 40, fy + 140); a.lineTo(fx + 14, fy + 140); a.fill();
  a.fillStyle = '#9aa1a9'; a.fillRect(fx + fw / 2 - 4, fy + 44, 8, 96);
  a.fillStyle = '#111'; a.fillRect(fx + 50, fy + 12, fw - 100, 26);
  a.fillStyle = '#ff9a2a'; a.font = `800 18px ${F}`; a.textAlign = 'center'; a.textBaseline = 'middle'; a.fillText('普通  海辺', fx + fw / 2, fy + 26);
  a.fillStyle = '#1f9a50'; a.fillRect(fx, fy + 150, fw, 18); a.fillStyle = '#e8892b'; a.fillRect(fx, fy + 170, fw, 7);
  for (const hx of [fx + 40, fx + fw - 40]) { a.fillStyle = '#f4f4ee'; a.beginPath(); a.arc(hx, fy + 200, 13, 0, 7); a.fill(); a.fillStyle = '#b02020'; a.beginPath(); a.arc(hx + (hx < fx + fw / 2 ? 28 : -28), fy + 200, 8, 0, 7); a.fill(); }
  a.fillStyle = '#5c636b'; a.fillRect(fx, fy + fh - 30, fw, 30);
  a.fillStyle = '#3a3f46'; a.font = `800 16px ${F}`; a.fillText('17', fx + fw / 2, fy + 220);
  e.fillStyle = '#111'; e.fillRect(fx, fy, fw, fh);
  e.fillStyle = '#ff9a2a'; e.font = `800 18px ${F}`; e.textAlign = 'center'; e.textBaseline = 'middle'; e.fillText('普通  海辺', fx + fw / 2, fy + 26);
  for (const hx of [fx + 40, fx + fw - 40]) { e.fillStyle = '#fffbe8'; e.beginPath(); e.arc(hx, fy + 200, 13, 0, 7); e.fill(); }
  // ---- plain grey patches for untextured parts
  a.fillStyle = '#d3d7dc'; a.fillRect(300, 200, 32, 32); a.fillStyle = '#ffffff'; a.fillRect(340, 200, 32, 32);
  const tex = c => { const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t; };
  const uv = (x, y, w, h) => ({ u0: x / W, u1: (x + w) / W, v0: 1 - (y + h) / H, v1: 1 - y / H });
  return { map: tex(cA), em: tex(cE), side: uv(0, 0, W, sh), sideR: { ...uv(0, 0, W, sh), flip: true }, front: uv(fx, fy, fw, fh), plain: uv(342, 202, 28, 28) };
}

export function makeTrain() {
  const T = trainTextures();
  const mat = withCloudShadow(new THREE.MeshToonMaterial({ map: T.map, emissiveMap: T.em, emissive: 0xffffff, emissiveIntensity: 0.3, vertexColors: true, gradientMap: GRAD }));
  const g = new GB({ uv: true });
  const W1 = [1, 1, 1], ROOF = C('#9aa1a9'), DARK = C('#3b4047'), UNDER = C('#2a2d33');
  const CAR = 19.5, GAP = 0.6, N = 3, hw = 1.45, y0 = 0.95, y1 = 4.0, RS = 4, RH = 0.3, WHEEL = C('#33363b');
  // untextured parts sample the texture's plain white patch, so their vertex colour shows true (and they don't glow at night)
  const P6 = { nz: T.plain, pz: T.plain, nx: T.plain, px: T.plain, py: T.plain, ny: T.plain };
  const pbox = (x0, y0, z0, x1, y1, z1, c, noBottom = false) => g.box(x0, y0, z0, x1, y1, z1, c, P6, noBottom ? { noBottom: true } : null);
  const wheel = (x, y, z, r, w, c) => { // a wheel facing ±z: a 12-sided disc
    const n = 12, z0 = z - w / 2, z1 = z + w / 2;
    for (let i = 0; i < n; i++) {
      const a0 = (i / n) * Math.PI * 2, a1 = ((i + 1) / n) * Math.PI * 2, x0 = x + Math.cos(a0) * r, y0 = y + Math.sin(a0) * r, x1 = x + Math.cos(a1) * r, y1 = y + Math.sin(a1) * r;
      g.quad([x0, y0, z0], [x1, y1, z0], [x1, y1, z1], [x0, y0, z1], c, T.plain);
      g.quad([x, y, z1], [x0, y0, z1], [x1, y1, z1], [x1, y1, z1], c, T.plain); g.quad([x, y, z0], [x1, y1, z0], [x0, y0, z0], [x0, y0, z0], c, T.plain);
    }
  };
  const total = N * CAR + (N - 1) * GAP;
  for (let i = 0; i < N; i++) {
    const cx = -total / 2 + CAR / 2 + i * (CAR + GAP), xa = cx - CAR / 2, xb = cx + CAR / 2;
    // sides (+Z, −Z) with the painted panel; ends with the cab face or plain stainless
    g.quad([xa, y0, hw], [xb, y0, hw], [xb, y1, hw], [xa, y1, hw], W1, T.side);
    g.quad([xb, y0, -hw], [xa, y0, -hw], [xa, y1, -hw], [xb, y1, -hw], W1, T.side);
    const front = i === N - 1, back = i === 0;
    g.quad([xb, y0, hw], [xb, y0, -hw], [xb, y1, -hw], [xb, y1, hw], front ? W1 : C('#c9ced4'), front ? T.front : T.plain);
    g.quad([xa, y0, -hw], [xa, y0, hw], [xa, y1, hw], [xa, y1, -hw], back ? W1 : C('#c9ced4'), back ? T.front : T.plain);
    // a rounded roof (it was a flat slab) with a rain gutter along each side, closed at both ends
    for (let k = 0; k < RS; k++) for (const sd of [1, -1]) {
      const t0 = (k / RS) * Math.PI / 2, t1 = ((k + 1) / RS) * Math.PI / 2;
      const zA = sd * hw * Math.cos(t0), yA = y1 + RH * Math.sin(t0), zB = sd * hw * Math.cos(t1), yB = y1 + RH * Math.sin(t1);
      g.quad([xa, yA, zA], [xb, yA, zA], [xb, yB, zB], [xa, yB, zB], ROOF, T.plain);
      for (const xe of [xa, xb]) { const fan = [[xe, y1, 0], [xe, yA, zA], [xe, yB, zB]]; g.quad(fan[0], fan[1], fan[2], fan[2], ROOF, T.plain); g.quad(fan[0], fan[2], fan[1], fan[1], ROOF, T.plain); }
    }
    for (const sd of [1, -1]) pbox(xa, y1 - 0.02, sd * hw - 0.04, xb, y1 + 0.05, sd * hw + 0.04, DARK);
    for (const ax of [cx - 5.5, cx + 5.5]) pbox(ax - 1.3, y1 + 0.2, -0.8, ax + 1.3, y1 + 0.62, 0.8, C('#c4c9cf'), true); // air-conditioners
    // the underframe: a side sill, then equipment boxes between the bogies (it was one long block)
    pbox(xa + 0.3, 0.82, -hw + 0.1, xb - 0.3, y0, hw - 0.1, UNDER);
    for (const [ex, el, eh, ez] of [[-3.6, 2.2, 0.42, 0.35], [-0.9, 1.6, 0.5, -0.2], [1.3, 2.4, 0.38, 0.4], [3.9, 1.4, 0.46, -0.3]]) pbox(cx + ex - el / 2, 0.82 - eh, -1.15 + ez * 0.2, cx + ex + el / 2, 0.82, 1.15 + ez * 0.2, ez > 0 ? UNDER : DARK);
    // bogies: side frames, axle boxes and two wheelsets on the rails (they were dark boxes)
    for (const bx of [cx - 7, cx + 7]) {
      for (const sd of [1, -1]) { pbox(bx - 1.35, 0.32, sd * 0.86, bx + 1.35, 0.56, sd * 1.02, DARK); for (const wx of [-1.05, 1.05]) pbox(bx + wx - 0.17, 0.3, sd * 0.84, bx + wx + 0.17, 0.58, sd * 1.06, UNDER); }
      pbox(bx - 0.35, 0.5, -1.0, bx + 0.35, 0.8, 1.0, DARK);
      for (const wx of [-1.05, 1.05]) for (const sd of [1, -1]) wheel(bx + wx, 0.43, sd * 0.6, 0.43, 0.13, WHEEL);
    }
    if (i < N - 1) pbox(xb, y0 + 0.15, -0.95, xb + GAP, y1 - 0.1, 0.95, C('#3a3e44')); // the gangway bellows to the next car
    if (i === 0) { // pantograph
      const px = cx - 3, top = y1 + 0.7;
      g.box(px - 0.6, y1 + 0.26, -0.6, px + 0.6, y1 + 0.42, 0.6, DARK);
      g.rod([px - 0.5, y1 + 0.42, 0], [px, top + 0.9, 0], 0.03, 0.03, 4, DARK); g.rod([px + 0.5, y1 + 0.42, 0], [px, top + 0.9, 0], 0.03, 0.03, 4, DARK);
      g.rod([px, top + 0.9, -0.85], [px, top + 0.9, 0.85], 0.03, 0.03, 4, DARK);
    }
  }
  const mesh = new THREE.Mesh(g.build(), mat); mesh.castShadow = true; mesh.receiveShadow = true; mesh.frustumCulled = false;
  const group = new THREE.Group(); group.add(mesh); group.visible = false;
  const st = { active: false, u: 0, dir: 1, speed: 16, sx: 0, ds: 2, cleared: false, length: total };
  const f = {};
  return {
    group, st,
    start(sx, dir, speed = 16) { Object.assign(st, { active: true, sx, dir, speed, u: -dir * 290, ds: dir > 0 ? -2 : 2, cleared: false }); group.visible = true; },
    update(dt, path, origin, night, roadHalf) {
      if (!st.active) return;
      st.u += st.dir * st.speed * dt;
      const tail = st.u - st.dir * st.length / 2;
      if (!st.cleared && (st.dir > 0 ? tail > roadHalf + 1 : tail < -roadHalf - 1)) st.cleared = true;
      if (Math.abs(st.u) > 330) { st.active = false; group.visible = false; return; }
      path.at(st.sx, f);
      group.position.set(f.x + f.fx * st.ds + f.rx * st.u - origin.x, f.y + 0.34, f.z + f.fz * st.ds + f.rz * st.u - origin.z);
      group.rotation.y = f.h + (st.dir > 0 ? Math.PI : 0);
      mat.emissiveIntensity = 0.3 + night * 1.1;
    },
  };
}
