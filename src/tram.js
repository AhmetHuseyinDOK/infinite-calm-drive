// The T1 tram over the Galata Bridge (step 33): Istanbul's Bombardier Flexity Swift A32 in its livery (a white body, a blue roof, a
// charcoal band of tinted windows, a red stripe low along its sides, blue plug doors, a pale grey skirt), two cars coupled as they
// run on the T1, each of three sections (a cab at either end, a short middle section under the pantograph). A smooth low-poly body
// (its cross-section lofted along each section, its noses rounded in plan and raked back up the windscreen) with painted sides,
// faces and roof: a small texture pair of its own (drawn here on a canvas at load: no download), drawn by a clone of the atlas
// material (the same program: nothing new compiles), its windows lit at dusk, its headlights, tail lamps and destination display
// always on. The two tracks of the bridge's tram reserve (chunks.js placeGalata's TZ) carry it both ways, now and then: on the
// near one, our way, a tram comes up from behind the car and passes it, then pulls in at the bridge's far end (the Eminönü stop)
// until the car has gone by; on the far one a tram comes towards us from the far end and meets the car. Positioned from the frame
// time (deterministic in seeded captures), with random numbers of its own; only on the bridge's straight
import * as THREE from 'three';
import { GB } from './geom.js';
import { Atlas } from './textures.js';
import { rng, sstep, C } from './util.js';
import { ZONE_LEN, zoneAt, galL, zparam } from './path.js';
import { galTrack } from './galata.js';

// ---- its shape (the real ones are 2.65 m wide: 2.5 here, so it clears the portals' posts, rw + 1.55 and 11.2 m out)
// the cross-section's right half from its skirt's foot up to the roof's crown ([y over the rail, z out from the track's middle])
const PR = [[0.24, 1.16], [0.31, 1.25], [0.62, 1.25], [1.0, 1.25], [2.5, 1.22], [2.98, 1.15], [3.18, 1.02], [3.31, 0.72], [3.37, 0.36], [3.39, 0.0]];
const ARC = [0]; for (let k = 1; k < PR.length; k++) ARC.push(ARC[k - 1] + Math.hypot(PR[k][0] - PR[k - 1][0], PR[k][1] - PR[k - 1][1]));
const S_TOT = ARC[ARC.length - 1]; // (its length: the side cells' height)
/** the full cross-section, round from the right side's foot over the roof to the left side's foot (the loft's columns), with each
 *  point's arc length from its own side's foot (both sides take the same painting) */
const PF = [...PR.map(([y, z], k) => [y, z, ARC[k]]), ...PR.slice(0, -1).reverse().map(([y, z], k) => [y, -z, ARC[PR.length - 2 - k]])];
const SEC = [10.75, 7.6, 10.75], JNT = 0.3, NOSE = 1.05; // a car's sections (the cab sections with their noses), the joints, a nose's reach
const CAR = SEC[0] + JNT + SEC[1] + JNT + SEC[2], GAPC = 1.0; // (29.7 m: the A32's length); between the coupled cars' noses
export const TRAM_LEN = 2 * CAR + GAPC, HALF = TRAM_LEN / 2;
const PANTO = 5.905; // the pantograph's head over the rail: just under the contact wire (5.9 m over the road, the rails 6 cm under it)
const FACE_H0 = 0.24, FACE_H1 = 3.39; // the faces' painting from the skirt's foot to the roof

// ---- its painting (in metres; px a metre: 100 on desktops, 50 on phones)
const BODY = '#edf0f2', ROOF = '#2f7fcf', ROOF_HI = '#62a6e8', BAND = '#2a3037', SKIRT = '#b4b9bf', RED = '#c8262e', DOOR = '#2f6fbe';
/** the painted texture pair: the sides of a cab section and of the middle one (their roofs too), four faces (a head face with each
 *  terminus on its display, a tail face, a dark one for the coupled cars' inner cabs), a plain white texel */
function paintTram(tier) {
  const PX = tier === 'hi' ? 100 : 50, cells = {};
  // (a CPU-backed canvas: on a GPU-backed one Chrome 148 handed back an empty texture, and the tram was cut away to nothing)
  const A = new Atlas(Math.ceil(7.4 * PX), 0, cells, true, Math.round(20.48 * PX));
  const r = rng(733);
  /** a side cell's row for height y on the body's side (by the cross-section's arc length: the shoulder and the roof above it) */
  const yArc = y => { for (let k = 0; k < PR.length - 1; k++) if (y <= PR[k + 1][0]) return ARC[k] + ((y - PR[k][0]) / (PR[k + 1][0] - PR[k][0])) * (ARC[k + 1] - ARC[k]); return S_TOT; };
  const Ys = y => (S_TOT - yArc(y)) * PX, X = x => x * PX;
  const vg = (g, x0, y0, x1, y1, stops) => { const gr = g.createLinearGradient(0, y0, 0, y1); for (const [o, c] of stops) gr.addColorStop(o, c); g.fillStyle = gr; g.fillRect(x0, y0, x1 - x0, y1 - y0); };
  /** a pane of tinted glass, the sky's reflection in it (light at its top, deepening down), a glint or two across it; and its light
   *  at night (e: warm white, the passengers' silhouettes dark against it) */
  const glass = (a, e, x0, y0, x1, y1, lit = true, sky = 0.75, people = true) => {
    vg(a, x0, y0, x1, y1, [[0, `rgba(${Math.round(120 * sky + 40)},${Math.round(150 * sky + 40)},${Math.round(175 * sky + 40)},1)`], [0.38, '#3f5a70'], [1, '#1f2c38']]);
    a.save(); a.beginPath(); a.rect(x0, y0, x1 - x0, y1 - y0); a.clip();
    const w = x1 - x0, h = y1 - y0;
    a.fillStyle = 'rgba(255,255,255,0.12)'; a.beginPath(); a.moveTo(x0 + w * 0.15, y1); a.lineTo(x0 + w * 0.42, y1); a.lineTo(x0 + w * 0.75, y0); a.lineTo(x0 + w * 0.48, y0); a.fill();
    a.fillStyle = 'rgba(255,255,255,0.07)'; a.beginPath(); a.moveTo(x0 + w * 0.55, y1); a.lineTo(x0 + w * 0.62, y1); a.lineTo(x0 + w * 0.95, y0); a.lineTo(x0 + w * 0.88, y0); a.fill();
    a.restore();
    a.fillStyle = 'rgba(255,255,255,0.25)'; a.fillRect(x0, y0, w, Math.max(1, 0.012 * PX));
    if (lit) vg(e, x0, y0, x1, y1, [[0, '#fff4dc'], [1, '#e9d3a6']]);
    if (people) { // (a few seated passengers' heads and shoulders behind the glass)
      const n = r() < 0.55 ? 1 + (r() < 0.4 ? 1 : 0) : 0;
      for (let k = 0; k < n; k++) {
        const cx = x0 + w * (0.2 + 0.6 * r()), cy = y0 + h * (0.45 + 0.12 * r()), hr = 0.085 * PX;
        for (const g of [a, e]) { // (soft: the glass's tint and the room's light round them; at night their light dimmed, not put out)
          g.fillStyle = g === a ? 'rgba(28,36,48,0.42)' : 'rgba(40,24,8,0.5)';
          g.beginPath(); g.ellipse(cx, cy, hr * 0.85, hr, 0, 0, Math.PI * 2); g.fill();
          g.beginPath(); g.ellipse(cx, cy + hr * 2.6, hr * 2.5, hr * 1.5, 0, Math.PI, Math.PI * 2); g.fill();
          g.fillRect(cx - hr * 2.5, cy + hr * 2.6, hr * 5, y1 - cy - hr * 2.6);
        }
      }
    }
  };
  const band = (a, x0, x1, y0, y1) => { a.fillStyle = BAND; a.fillRect(X(x0), Ys(y1), X(x1 - x0), Ys(y0) - Ys(y1)); a.fillStyle = 'rgba(255,255,255,0.18)'; a.fillRect(X(x0), Ys(y1), X(x1 - x0), Math.max(1, 0.015 * PX)); };
  const pane = (a, e, x0, x1, y0, y1, lit = true) => glass(a, e, X(x0), Ys(y1), X(x1), Ys(y0), lit);
  /** a pair of blue plug doors (x0 … x1): their leaves' glass, the seam between them, their frames */
  const door = (a, e, x0, x1) => {
    a.fillStyle = DOOR; a.fillRect(X(x0), Ys(2.47), X(x1 - x0), Ys(0.33) - Ys(2.47));
    const xm = (x0 + x1) / 2;
    for (const [p, q] of [[x0 + 0.09, xm - 0.05], [xm + 0.05, x1 - 0.09]]) { pane(a, e, p, q, 0.98, 2.36); a.fillStyle = 'rgba(0,0,0,0.25)'; a.fillRect(X(p), Ys(0.9), X(q - p), Math.max(1, 0.02 * PX)); }
    a.fillStyle = '#1b2026'; a.fillRect(X(xm) - Math.max(1, 0.012 * PX), Ys(2.47), Math.max(2, 0.024 * PX), Ys(0.33) - Ys(2.47));
    a.strokeStyle = 'rgba(15,20,26,0.8)'; a.lineWidth = Math.max(1, 0.015 * PX); a.strokeRect(X(x0), Ys(2.47), X(x1 - x0), Ys(0.33) - Ys(2.47));
    a.fillStyle = 'rgba(255,255,255,0.3)'; a.fillRect(X(x0), Ys(2.47), X(x1 - x0), Math.max(1, 0.012 * PX));
  };
  /** a section's side: the white body, the blue roof above its shoulder, the pale grey skirt, the red stripe, the band of windows
   *  with its doors; L its length; cab: the cab at its right-hand end (the last NOSE metres: the nose's side, the windscreen's wrap) */
  const side = (L, cab) => (a, e) => {
    vg(a, 0, 0, X(L), Ys(0.24), [[0, '#ffffff'], [1, BODY]]);
    vg(a, 0, 0, X(L), Ys(3.07), [[0, '#2a74c0'], [0.55, ROOF], [0.85, ROOF_HI], [1, ROOF]]); // (the roof down to its shoulder)
    a.fillStyle = 'rgba(255,255,255,0.35)'; a.fillRect(0, Ys(3.07), X(L), Math.max(1, 0.012 * PX));
    vg(a, 0, Ys(0.62), X(L), Ys(0.24), [[0, '#c4c9ce'], [0.7, SKIRT], [1, '#8e949a']]); a.fillStyle = '#8c9299'; a.fillRect(0, Ys(0.62), X(L), Math.max(1, 0.015 * PX));
    const bandEnd = cab ? L - NOSE - 1.25 : L - 0.1;
    a.fillStyle = RED; a.fillRect(X(0.12), Ys(0.88), X(bandEnd - 0.12), Ys(0.8) - Ys(0.88)); a.fillStyle = 'rgba(255,255,255,0.3)'; a.fillRect(X(0.12), Ys(0.88), X(bandEnd - 0.12), Math.max(1, 0.01 * PX));
    band(a, 0.1, bandEnd, 1.02, 2.48);
    // the windows (the doors' places cut through the band) and the doors
    const layout = cab ? [['w', 0.3, 1.85], ['w', 2.0, 3.5], ['d', 3.75, 5.1], ['w', 5.35, 6.85], ['w', 7.0, bandEnd - 0.15]] : [['w', 0.25, 1.55], ['w', 1.7, 3.0], ['d', 3.12, 4.48], ['w', 4.6, 5.9], ['w', 6.05, 7.35]];
    for (const [k, x0, x1] of layout) if (k === 'w') pane(a, e, x0, x1, 1.1, 2.4); else door(a, e, x0, x1);
    if (cab) { // the cab: its side window (as tall as the windscreen) and the windscreen's wrap round the nose, dark: nobody lit in there
      const c0 = bandEnd + 0.05;
      a.fillStyle = BAND; a.fillRect(X(c0), Ys(2.92), X(L - c0), Ys(1.26) - Ys(2.92));
      glass(a, e, X(c0 + 0.12), Ys(2.84), X(L - NOSE + 0.05), Ys(1.34), false, 0.9, false);
      glass(a, e, X(L - NOSE + 0.14), Ys(2.84), X(L), Ys(1.34), false, 1.0, false);
      a.fillStyle = '#4d6070'; a.fillRect(X(c0 + 0.12), Ys(1.62), X(L - NOSE - 0.07 - c0), Math.max(1, 0.02 * PX)); // (its sill rail)
    }
    a.fillStyle = 'rgba(40,46,54,0.35)'; for (const x of [0.02, L - 0.03]) a.fillRect(X(x), 0, Math.max(1, 0.012 * PX), Ys(0.24)); // (its seams)
  };
  A.add('side_cab', Math.round(SEC[0] * PX), Math.round(S_TOT * PX), side(SEC[0], true));
  A.add('side_mid', Math.round(SEC[1] * PX), Math.round(S_TOT * PX), side(SEC[1], false));
  /** a face (2.5 m across, the viewer's left at x 0; from the skirt's foot to the roof): the bumper, the white front with its two
   *  headlamps and tail lamps, the windscreen, the blue cap with the destination display; kind: 'K' / 'B' a head face showing the
   *  T1's terminus (Kabataş, Bağcılar), 'T' a tail face, 'D' a dark inner face */
  const Yf = y => (FACE_H1 - y) * PX;
  const face = kind => (a, e, w) => {
    a.fillStyle = BODY; a.fillRect(0, 0, w, Yf(FACE_H0));
    vg(a, 0, Yf(0.6), w, Yf(0.24), [[0, '#c4c9ce'], [0.7, SKIRT], [1, '#8e949a']]); a.fillStyle = '#8c9299'; a.fillRect(0, Yf(0.6), w, Math.max(1, 0.015 * PX));
    a.fillStyle = '#3a3e44'; a.fillRect(X(1.02), Yf(0.52), X(0.46), Yf(0.32) - Yf(0.52)); // (the coupler's cover)
    // the windscreen: a black frame round its glass, the sky in it, two wipers parked along its foot
    a.fillStyle = '#1b2026'; a.beginPath(); a.roundRect(X(0.06), Yf(2.95), X(2.38), Yf(1.27) - Yf(2.95), 0.14 * PX); a.fill();
    glass(a, e, X(0.13), Yf(2.88), X(2.37), Yf(1.33), false, 1.0, false);
    a.strokeStyle = '#15191e'; a.lineWidth = Math.max(1, 0.022 * PX); a.beginPath(); a.moveTo(X(0.45), Yf(1.38)); a.lineTo(X(1.15), Yf(1.5)); a.moveTo(X(1.35), Yf(1.38)); a.lineTo(X(2.05), Yf(1.5)); a.stroke();
    vg(a, 0, 0, w, Yf(2.95), [[0, '#2a74c0'], [0.6, ROOF], [1, '#3b8ad6']]); // (the blue cap over it)
    a.fillStyle = '#111417'; a.fillRect(X(0.45), Yf(3.21), X(1.6), Yf(2.99) - Yf(3.21)); // (the destination display)
    if (kind === 'K' || kind === 'B') {
      const t = kind === 'K' ? 'KABATAŞ' : 'BAĞCILAR';
      for (const g of [a, e]) { g.fillStyle = '#ff9a26'; g.font = `bold ${Math.round(0.15 * PX)}px Arial, Helvetica, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(t, X(1.25), Yf(3.1), X(1.5)); }
    }
    // the headlamps and the tail lamps (lit by the head face's and the tail face's glow), the fleet number
    for (const zc of [0.42, 2.08]) {
      a.fillStyle = '#3a3f46'; a.beginPath(); a.arc(X(zc), Yf(0.95), 0.095 * PX, 0, Math.PI * 2); a.fill();
      a.fillStyle = '#e9edf0'; a.beginPath(); a.arc(X(zc), Yf(0.95), 0.07 * PX, 0, Math.PI * 2); a.fill();
      a.fillStyle = '#ffffff'; a.beginPath(); a.arc(X(zc - 0.02), Yf(0.97), 0.03 * PX, 0, Math.PI * 2); a.fill();
      if (kind === 'K' || kind === 'B') { e.fillStyle = '#fffaf0'; e.beginPath(); e.arc(X(zc), Yf(0.95), 0.075 * PX, 0, Math.PI * 2); e.fill(); }
    }
    for (const zc of [0.19, 2.31]) {
      a.fillStyle = '#7a1c1c'; a.beginPath(); a.arc(X(zc), Yf(0.84), 0.05 * PX, 0, Math.PI * 2); a.fill();
      if (kind === 'T') { e.fillStyle = '#a3140e'; e.beginPath(); e.arc(X(zc), Yf(0.84), 0.05 * PX, 0, Math.PI * 2); e.fill(); }
    }
    a.fillStyle = '#2b2f35'; a.font = `bold ${Math.round(0.11 * PX)}px Arial, Helvetica, sans-serif`; a.textAlign = 'left'; a.textBaseline = 'middle';
    a.fillText(kind === 'K' ? '742' : kind === 'B' ? '713' : kind === 'T' ? '728' : '751', X(0.6), Yf(1.14));
  };
  for (const k of ['K', 'B', 'T', 'D']) A.add('face_' + k, Math.round(2.5 * PX), Math.round((FACE_H1 - FACE_H0) * PX), face(k));
  A.add('plain', 8, 8, a => { a.fillStyle = '#ffffff'; a.fillRect(0, 0, 8, 8); });
  return { A, cells };
}

// ---- its body
const W1 = [1, 1, 1], BELLOWS = C('#3b3f45'), UNDER = C('#1e2024'), PANT = C('#5a5f66'), ROOFBOX = C('#2a6fb8'), INSUL = C('#8a4a2c');
/** the train's geometry: two cars nose to nose (its own frame: x along it, its head at +x; y over the rails; z across, +z its right),
 *  dest: the head face's ('K' / 'B') */
function buildTram(cells, dest, which = 1) {
  const g = new GB({ uv: true, ao: true, lit: true }), I4 = new THREE.Matrix4(); g.setM(I4);
  const plain = cells.plain, pu = (plain.u0 + plain.u1) / 2, pv = (plain.v0 + plain.v1) / 2, PU = { u0: pu, u1: pu, v0: pv, v1: pv };
  const P6 = { nz: PU, pz: PU, nx: PU, px: PU, py: PU, ny: PU };
  /** the cross-section's normals at its points (smooth, the loft's: x × the section's own slope) */
  const PN = PF.map((p, j) => {
    let ny = 0, nz = 0;
    for (const k of [j - 1, j]) if (k >= 0 && k < PF.length - 1) { const dy = PF[k + 1][0] - PF[k][0], dz = PF[k + 1][1] - PF[k][1], l = Math.hypot(dy, dz); ny += -dz / l; nz += dy / l; }
    const l = Math.hypot(ny, nz) || 1; return [0, ny / l, nz / l];
  });
  const quad = (p, n, uv, col) => { // p, n, uv: 4 corners each, in the loft's order (P00, P10, P11, P01)
    for (const k of [0, 1, 2, 0, 2, 3]) g.vtx(p[k][0], p[k][1], p[k][2], n[k][0], n[k][1], n[k][2], uv[k][0], uv[k][1], col);
  };
  const cellUV = (c, fu, fv) => [c.u0 + (c.u1 - c.u0) * fu, c.v0 + (c.v1 - c.v0) * fv];
  /** a straight run of the body from x0 to x1, painted with side cell c from fu0 to fu1 of its width */
  const body = (x0, x1, c, fu0, fu1) => {
    g.litV = 30;
    for (let j = 0; j < PF.length - 1; j++) {
      const a = PF[j], b = PF[j + 1], va = a[2] / S_TOT, vb = b[2] / S_TOT;
      quad([[x0, a[0], a[1]], [x1, a[0], a[1]], [x1, b[0], b[1]], [x0, b[0], b[1]]], [PN[j], PN[j], PN[j + 1], PN[j + 1]],
        [cellUV(c, fu0, va), cellUV(c, fu1, va), cellUV(c, fu1, vb), cellUV(c, fu0, vb)], W1);
    }
    g.litV = 0;
  };
  /** a section's end, closed (facing sd: ±1 along x), round the bellows */
  const endCap = (x, sd) => {
    const c = [x, 1.8, 0], n = [sd, 0, 0];
    for (let j = 0; j < PF.length - 1; j++) { const a = [x, PF[j][0], PF[j][1]], b = [x, PF[j + 1][0], PF[j + 1][1]];
      const t = sd > 0 ? [c, b, a] : [c, a, b]; for (const p of t) g.vtx(p[0], p[1], p[2], n[0], n[1], n[2], pu, pv, [0.86, 0.87, 0.88]); }
  };
  /** the joint's bellows between two sections (a dark rubber ring a little inside the body's outline) */
  const bellows = (x0, x1) => {
    for (let j = 0; j < PF.length - 1; j++) {
      const a = PF[j], b = PF[j + 1], s = 0.94, ya = 0.3 + (a[0] - 0.24) * 0.95, yb = 0.3 + (b[0] - 0.24) * 0.95;
      quad([[x0, ya, a[1] * s], [x1, ya, a[1] * s], [x1, yb, b[1] * s], [x0, yb, b[1] * s]], [PN[j], PN[j], PN[j + 1], PN[j + 1]], [[pu, pv], [pu, pv], [pu, pv], [pu, pv]], BELLOWS);
    }
  };
  /** a cab's nose from xe (the body's end) out to sd (±1): each point of the cross-section runs forward on a rounded plan (a
   *  superellipse) to the middle of the front, the higher ones less far (the windscreen raked back); its faces facing sideways take
   *  the side cell (c, from fu0 at xe over the nose's NOSE metres to fu1), the rest the face cell f (seen from in front: its left
   *  on the train's right-hand side when it faces +x), lit by code lit */
  const nose = (xe, sd, c, fu0, fu1, f, lit) => {
    const T = [0, 0.3, 0.55, 0.74, 0.87, 0.94, 0.98, 1], K = T.length, nj = PF.length, Pp = 3.0;
    const rho = y => NOSE * (y < 0.6 ? 0.965 : 1) * (1 - 0.42 * sstep(1.25, 3.2, y));
    const G = T.map(t => PF.map(([y, z]) => { const rr = rho(y); return [xe + sd * t * rr, y, z * Math.pow(Math.max(0, 1 - Math.pow(t, Pp)), 1 / Pp)]; }));
    // its normals: the face normals round each point, area-weighted (the rows in order along +x: flipped for a nose facing −x)
    const N = G.map(row => row.map(() => [0, 0, 0]));
    for (let i = 0; i < K - 1; i++) for (let j = 0; j < nj - 1; j++) {
      const p00 = G[i][j], p10 = G[i + 1][j], p11 = G[i + 1][j + 1], p01 = G[i][j + 1];
      const ux = p11[0] - p00[0], uy = p11[1] - p00[1], uz = p11[2] - p00[2], vx = p01[0] - p10[0], vy = p01[1] - p10[1], vz = p01[2] - p10[2];
      let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx; // (diagonals: P00→P11 × P10→P01 = 2 × the quad's area normal, ∂i × ∂j)
      if (sd < 0) { nx = -nx; ny = -ny; nz = -nz; }
      for (const [a, b] of [[i, j], [i + 1, j], [i + 1, j + 1], [i, j + 1]]) { N[a][b][0] += nx; N[a][b][1] += ny; N[a][b][2] += nz; }
    }
    for (let j = 0; j < nj; j++) N[0][j] = PN[j].slice(); // (tangent to the body where it begins)
    for (let j = 0; j < nj; j++) { const m = N[K - 1][j], o = N[K - 1][nj - 1 - j]; m[0] = (m[0] + o[0]) / 2; m[1] = (m[1] + o[1]) / 2; m[2] = 0; } // (the front's middle line: one normal)
    for (const row of N) for (const n of row) { const l = Math.hypot(n[0], n[1], n[2]); if (l < 1e-9) { n[0] = sd; n[1] = 0; n[2] = 0; } else { n[0] /= l; n[1] /= l; n[2] /= l; } } // (never a zero normal: NaN in the shader)
    const fuOf = x => fu0 + ((fu1 - fu0) * Math.abs(x - xe)) / NOSE, faceU = z => 0.5 - (sd * z) / 2.5, faceV = y => (y - FACE_H0) / (FACE_H1 - FACE_H0);
    for (let i = 0; i < K - 1; i++) for (let j = 0; j < nj - 1; j++) {
      const ids = [[i, j], [i + 1, j], [i + 1, j + 1], [i, j + 1]], p = ids.map(([a, b]) => G[a][b]), n = ids.map(([a, b]) => N[a][b]);
      const mz = Math.abs(n[0][2] + n[1][2] + n[2][2] + n[3][2]), mx = Math.abs(n[0][0] + n[1][0] + n[2][0] + n[3][0]), my = n[0][1] + n[1][1] + n[2][1] + n[3][1];
      const sideways = mz > 1.1 * mx && mz > 0.5 * my;
      const uv = sideways ? ids.map(([a, b]) => cellUV(c, fuOf(G[a][b][0]), PF[b][2] / S_TOT)) : p.map(q => cellUV(f, faceU(q[2]), faceV(q[1])));
      g.litV = sideways ? 30 : lit;
      if (sd > 0) quad(p, n, uv, W1); else quad([p[1], p[0], p[3], p[2]], [n[1], n[0], n[3], n[2]], [uv[1], uv[0], uv[3], uv[2]], W1);
    }
    g.litV = 0;
  };
  /** a box (in the plain white texel, coloured) */
  const box = (x0, y0, z0, x1, y1, z1, col) => g.box(x0, y0, z0, x1, y1, z1, col, P6);
  /** a rod (its uv set to the plain texel) */
  const rod = (p, q, r0, r1, col) => { const o = g.n; g.rod(p, q, r0, r1, 4, col); for (let i = o; i < g.n; i++) { g.U[i * 2] = pu; g.U[i * 2 + 1] = pv; } };
  /** one car centred at cx; its faces: rear (at −x) and front (at +x) */
  const car = (cx, rear, front) => {
    const xa = cx - CAR / 2, x1 = xa + SEC[0], x2 = x1 + JNT, x3 = x2 + SEC[1], x4 = x3 + JNT, xb = x4 + SEC[2];
    const cab = cells.side_cab, mid = cells.side_mid, fk = NOSE / SEC[0];
    body(xa + NOSE, x1, cab, 1 - fk, 0); nose(xa + NOSE, -1, cab, 1 - fk, 1, cells['face_' + rear], rear === 'D' ? 0 : 12);
    body(x2, x3, mid, 0, 1);
    body(x4, xb - NOSE, cab, 0, 1 - fk); nose(xb - NOSE, 1, cab, 1 - fk, 1, cells['face_' + front], front === 'D' ? 0 : 12);
    endCap(x1, 1); endCap(x2, -1); endCap(x3, 1); endCap(x4, -1);
    bellows(x1, x2); bellows(x3, x4);
    // under it: the bogies' dark shadow behind the skirts; on its roof: the equipment under its blue fairings
    for (const [p, q] of [[xa + 1.6, x1 - 0.3], [x2 + 0.3, x3 - 0.3], [x4 + 0.3, xb - 1.6]]) box(p, 0.04, -1.08, q, 0.27, 1.08, UNDER);
    for (const [p, q] of [[xa + 3.2, x1 - 2.0], [x4 + 2.0, xb - 3.2]]) { box(p, 3.33, -0.62, q, 3.62, 0.62, ROOFBOX); box(p + 0.1, 3.62, -0.5, q - 0.1, 3.66, 0.5, ROOFBOX); }
    // the pantograph over the middle section: its frame on insulators, the lower arm, the knee, the upper arm, the head pressed up
    // against the contact wire (its two collector strips, their horns)
    const xp = (x2 + x3) / 2;
    box(xp - 0.75, 3.39, -0.5, xp + 0.75, 3.47, 0.5, PANT);
    for (const sx of [-0.6, 0.6]) for (const sz of [-0.4, 0.4]) box(xp + sx - 0.05, 3.36, sz - 0.05, xp + sx + 0.05, 3.42, sz + 0.05, INSUL);
    const knee = [xp + 0.62, 4.62, 0], head = [xp - 0.12, PANTO - 0.1, 0];
    rod([xp - 0.7, 3.5, -0.18], knee, 0.035, 0.03, PANT); rod([xp - 0.7, 3.5, 0.18], knee, 0.035, 0.03, PANT);
    rod(knee, head, 0.028, 0.022, PANT); rod([xp - 0.2, 3.5, 0], [xp + 0.3, 3.75, 0], 0.03, 0.03, PANT); // (its spring)
    for (const dx of [-0.13, 0.13]) {
      box(head[0] + dx - 0.03, PANTO - 0.04, -0.62, head[0] + dx + 0.03, PANTO, 0.62, PANT);
      for (const sz of [-1, 1]) rod([head[0] + dx, PANTO - 0.02, sz * 0.62], [head[0] + dx, PANTO - 0.14, sz * 0.8], 0.018, 0.015, PANT);
    }
    box(head[0] - 0.16, PANTO - 0.12, -0.08, head[0] + 0.16, PANTO - 0.04, 0.08, PANT);
  };
  // (step 35R: each car its own body, centred, so each follows the real tracks' bends by its own bogies; the coupler's half on each)
  if (which === 0) { car(0, 'T', 'D'); box(CAR / 2 - 0.1, 0.42, -0.14, (CAR + GAPC) / 2, 0.6, 0.14, UNDER); }
  else { car(0, 'D', dest); box(-(CAR + GAPC) / 2, 0.42, -0.14, -CAR / 2 + 0.1, 0.6, 0.14, UNDER); }
  return g.build();
}

// ---- its comings and goings
// (the tracks: the real ones (galata.js galTrack), the near one (0) ours, towards Eminönü, the far one (1) towards Karaköy)
const V_OUR = 13.0, V_TOW = 9.0, ACC = 0.9, DEC = 1.1; // its speeds (m/s: ~47 km/h passing the car's 40, ~32 meeting it); starting, braking
// its run through the zone (m into it): along Kemeraltı Caddesi, over the bridge, round Eminönü's bend to the T1's Eminönü stop on
// Reşadiye Caddesi (galata.js GAL_STOPS: its front at the platform's end), where ours waits until we have gone by
const RUN_A = 200, RUN_B = 1272, BOG = CAR / 2 - 3.2; // (BOG: the bogies' distance from a car's middle)
const _f = {};
/** the start of the Galata zone the drive is in or about to enter (NaN: none near) */
function galZone(s) {
  const z = Math.floor(s / ZONE_LEN);
  for (let k = z; k <= z + 1; k++) if (zoneAt(k * ZONE_LEN + 10) === 'galata') return k * ZONE_LEN;
  return NaN;
}
/** M: the materials (M.atlas: its program and its shadow twin's); tier: 'hi' / 'lo' (its painting's resolution); next: in Turkey's
 *  lazy load, a frame's wait between its pieces of work (its painting, its body, its textures: on a 4×-throttled phone 8, 16 and
 *  2 ms) */
export async function makeTram(M, renderer, tier, next = null) {
  const wait = () => (next ? next() : null);
  const { A, cells } = paintTram(tier); await wait();
  // (one body a car: the far track's tram heads for Kabataş; the near track's is its copy, its head face's display reading Bağcılar)
  const geoK = buildTram(cells, 'K'), geoK0 = buildTram(cells, 'K', 0), geoB = geoK.clone(), uv = geoB.attributes.uv.array, fK = cells.face_K, fB = cells.face_B; await wait();
  for (let i = 0; i < uv.length; i += 2) if (uv[i] > fK.u0 - 1e-5 && uv[i] < fK.u1 + 1e-5 && uv[i + 1] > fK.v0 - 1e-5 && uv[i + 1] < fK.v1 + 1e-5) { uv[i] += fB.u0 - fK.u0; uv[i + 1] += fB.v0 - fK.v0; }
  const tex = A.textures(renderer); renderer.initTexture(tex.map); await wait(); renderer.initTexture(tex.emissive);
  // (the atlas's material on the tram's own texture pair, and its own shadow twin: step 32's makeAtlasChain)
  const mat = M.atlas.clone(); mat.map = tex.map; mat.emissiveMap = tex.emissive; mat.onBeforeCompile = M.atlas.onBeforeCompile; mat.customProgramCacheKey = M.atlas.customProgramCacheKey;
  const depth = M.atlasDepth.clone(); depth.onBeforeCompile = M.atlasDepth.onBeforeCompile; depth.customProgramCacheKey = M.atlasDepth.customProgramCacheKey;
  const group = new THREE.Group();
  const mk = (geo, geo0, track, dir, seed, wait) => {
    const car = g => { const m = new THREE.Mesh(g, mat); m.castShadow = m.receiveShadow = true; m.customDepthMaterial = depth; m.visible = false; group.add(m); return m; };
    return { mesh: car(geo), mesh0: car(geo0), k: track, dir, on: false, s: 0, v: 0, zs: 0, wait, r: rng(seed) };
  };
  // the near track's (our way, to the T1's Bağcılar end: it passes us) and the far one's (towards Karaköy and Kabataş: it meets us)
  const T = [mk(geoB, geoK0, 0, 1, 743, 25), mk(geoK, geoK0, 1, -1, 751, 8)];
  /** a point of track k at road position s (out: [x, z, y]: the world's, less the origin) */
  const _p = [0, 0, 0], _q = [0, 0, 0];
  function trackAt(path, s, k, origin, out) { path.at(s, _f); const u = galTrack(galL(s), zparam(s, 'rw'), k); out[0] = _f.x + _f.rx * u - origin.x; out[1] = _f.z + _f.rz * u - origin.z; out[2] = _f.y; return out; }
  /** each car on the track by its two bogies (its middle between them, turned along the line through them) */
  function placeCar(m, path, sc, k, dir, origin, show) {
    trackAt(path, sc - BOG, k, origin, _p); trackAt(path, sc + BOG, k, origin, _q);
    m.position.set((_p[0] + _q[0]) / 2, (_p[2] + _q[2]) / 2 - 0.06, (_p[1] + _q[1]) / 2);
    m.rotation.set(0, Math.atan2(_q[0] - _p[0], _q[1] - _p[1]) - (dir * Math.PI) / 2, 0); m.visible = show;
  }
  function place(t, path, origin, show) {
    const d = (CAR + GAPC) / 2; // (the head car, carrying the display, leads)
    placeCar(t.mesh, path, t.s + t.dir * d, t.k, t.dir, origin, show); placeCar(t.mesh0, path, t.s - t.dir * d, t.k, t.dir, origin, show);
  }
  function step(t, dt, camS, zs, speed) {
    if (!t.on) {
      if (zs !== zs || (t.wait -= dt) > 0) return false;
      if (t.dir > 0) { // (from behind the car, its head 14 m behind the camera, if it will come past: room to pass before the stop)
        const s = camS - 14 - HALF;
        if (s - HALF < zs + RUN_A || camS > zs + RUN_B - 380 || speed > V_OUR - 0.8) { t.wait = 2; return false; }
        t.s = s; t.v = V_OUR;
      } else { // (from the far end, or far enough ahead to come into view unseen: ~6 px tall)
        const front = Math.min(zs + RUN_B - TRAM_LEN, camS + 700);
        if (camS < zs + 60 || front < camS + 480) { t.wait = 3; return false; }
        t.s = front + HALF; t.v = front >= zs + RUN_B - TRAM_LEN - 1 ? 0 : V_TOW;
      }
      t.on = true; t.zs = zs;
    }
    if (t.dir > 0) { // (cruising, then braking to its stop at the far end)
      const stop = t.zs + RUN_B - HALF;
      t.v = Math.min(t.v + ACC * dt, V_OUR, Math.sqrt(Math.max(0, 2 * DEC * (stop - t.s)))); t.s = Math.min(stop, t.s + t.v * dt);
    } else { t.v = Math.min(V_TOW, t.v + ACC * dt); t.s -= t.v * dt; }
    // gone: fallen 60 m behind the camera (or, meeting us, at the bridge's near end)
    if (t.s + HALF < camS - 60 || (t.dir < 0 && t.s - HALF < t.zs + 5)) { t.on = false; t.wait = t.dir > 0 ? t.r.range(30, 80) : t.r.range(20, 60); return false; }
    return true;
  }
  return {
    group, mat, T, LEN: TRAM_LEN,
    /** a Galata start's opening view: a tram coming towards us on the far track, its head ~62 m ahead of the camera */
    opening(path, s) { const zs = galZone(s), t = T[1]; if (zs !== zs) return; t.on = true; t.zs = zs; t.s = s - 6.8 + 62 + HALF; t.v = V_TOW; },
    /** dt; path, s: the road and the car on it; cam: the camera's position (world, less the origin); speed: the car's; show: the test
     *  switch (st.tram) */
    update(dt, path, s, cam, origin, speed, show = 1) {
      path.at(s, _f);
      const camS = s + (cam.x + origin.x - _f.x) * _f.fx + (cam.z + origin.z - _f.z) * _f.fz, zs = galZone(camS);
      for (const t of T) { if (step(t, dt, camS, zs, speed)) place(t, path, origin, show > 0); else t.mesh.visible = t.mesh0.visible = false; }
    },
  };
}
