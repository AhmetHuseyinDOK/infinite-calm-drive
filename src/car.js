// A small two-tone kei car (think Honda N-Box / Suzuki Hustler), toon-shaded. Faces +Z in its local frame. (Step 35e: at load the
// paintings' own car, a painted 3D body (paint(), painted.js loadCar), takes its place; this procedural one stays the fallback.)
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { GRAD_CAR, U, withGloss } from './materials.js';

function plateTexture() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#f2cf3a'; g.fillRect(0, 0, 256, 128);
  g.strokeStyle = '#2f5a2f'; g.lineWidth = 6; g.strokeRect(5, 5, 246, 118);
  const f = '"Hiragino Sans","Noto Sans CJK JP","Noto Sans JP",sans-serif';
  g.fillStyle = '#2f5a2f'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.font = `700 30px ${f}`; g.fillText('品川 580', 128, 34);
  g.font = `800 58px ${f}`; g.fillText('あ 12-34', 128, 86);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
// the glass: four cells side by side — 0 plain (windscreen, rear quarter windows), 1 the rear window, 2 a front side
// window, 3 a sliding-door window — each tinted, with the cabin showing through as dark shapes: the rear seat's backrest
// and headrests through the rear window (always in view behind the car), a headrest in each side window
const GLASS_CELLS = 4;
const HALO_W = 0.37, HALO_H = 0.61; // the tail lamps' glow cards (m)
const GLOW_K = 0.03, GLOW_B = 0.02; // (step 30: the red tinge on the road behind the car at night: its peak strength, and braking's extra)
const WIPER_REST = 0.07; // (the painted car's rear wiper at rest: nearly level along the foot of the glass, as the city painting has it)
const PL = { r: 1, g: 1.15, s: 1.6, h: 1, a: 0.85, rn: 0.45, gn: 0.6 }; // (step 35e) the painted lamps' glow against the procedural lamps' (their lens, light guide, stop, amber and head lamps; less at night)
function glassTexture() {
  const W = 128, H = 128, c = document.createElement('canvas'); c.width = W * GLASS_CELLS; c.height = H;
  const g = c.getContext('2d');
  const rr = (x, y, w, h, r) => { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); g.fill(); };
  for (let i = 0; i < GLASS_CELLS; i++) {
    const x0 = i * W, gr = g.createLinearGradient(0, 0, 0, H);
    gr.addColorStop(0, '#9fbfe6'); gr.addColorStop(0.45, '#4a6690'); gr.addColorStop(1, '#1d2638');
    g.fillStyle = gr; g.fillRect(x0, 0, W, H);
    g.fillStyle = 'rgba(12,14,22,0.55)';
    if (i === 1) { rr(x0 + 14, 84, 30, 50, 9); rr(x0 + 84, 84, 30, 50, 9); g.fillRect(x0 + 6, 112, W - 12, 16); rr(x0 + 52, 92, 24, 40, 7); } // rear seat: headrests, backrest; a front headrest beyond
    if (i === 2) { rr(x0 + 62, 66, 44, 70, 12); g.fillRect(x0 + 50, 118, 70, 10); } // the driver's headrest and seat top
    if (i === 3) { rr(x0 + 70, 78, 40, 60, 11); g.fillRect(x0 + 56, 120, 64, 8); }  // the rear seat's headrest
    g.save(); g.beginPath(); g.rect(x0, 0, W, H); g.clip();
    g.fillStyle = 'rgba(255,255,255,0.30)'; g.beginPath(); g.moveTo(x0 + 40, 0); g.lineTo(x0 + 68, 0); g.lineTo(x0 + 20, H); g.lineTo(x0 - 8, H); g.fill();
    g.restore();
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
/** a glass plane's UVs onto one cell of the glass texture (flip: mirror it, for the other side of the car) */
function glassCell(geo, cell, flip = false) {
  const uv = geo.attributes.uv; for (let i = 0; i < uv.count; i++) { const u = uv.getX(i); uv.setX(i, (cell + (flip ? 1 - u : u)) / GLASS_CELLS); }
  return geo;
}

export function makeCar() {
  const car = new THREE.Group();
  // the body hangs on springs over the wheels: it leans out of curves and lane changes, dives when braking, squats when
  // pulling away, rides the road's gentle undulation and jolts over rails. `body` pivots near the roll centre (0.35 m);
  // the wheels and the contact shadow stay on the road with `car`
  const body = new THREE.Group(), inner = new THREE.Group(); body.position.y = 0.35; inner.position.y = -0.35; body.add(inner); car.add(body);
  // the flat-coloured parts share one vertex-coloured material: one draw call (and one shadow draw) instead of five
  // glossy paint (withGloss): each part's gloss rides in its vertex colour's alpha
  // street lamps overhead light the car as it passes under them: a warm wash on the roof and bonnet, a highlight sliding
  // along the paint and the glass (the two nearest lamps, set each frame in view space; w = strength, 0 = none)
  const lamps = [new THREE.Vector4(), new THREE.Vector4()];
  const lampCol = new THREE.Color(1.0, 0.8, 0.52);
  const LAMPS = { uniforms: { uCarLamp: { value: lamps }, uCarLampCol: { value: lampCol }, uCarKey: U.uCarKey }, pars: '\nuniform vec4 uCarLamp[2]; uniform vec3 uCarLampCol, uCarKey;', apply: /* glsl */`
  for (int i = 0; i < 2; i++) {
    vec3 L = uCarLamp[i].xyz + vViewPosition; float d2 = max(dot(L, L), 1e-4); L *= inversesqrt(d2);
    float att = uCarLamp[i].w / (1.0 + 0.045 * d2);
    outgoingLight += uCarLampCol * att * (diffuseColor.rgb * max(dot(nV, L), 0.0) + pow(max(dot(nV, normalize(L + vV)), 0.0), 60.0) * 1.5 * gm);
  }` };
  // every lit part of the car is lit by the painter's sun (CAR_KEY, materials.js), on the car's own ramp (GRAD_CAR)
  const carLit = m => { m.defines = { CAR_KEY: '' }; return m; };
  // the painter's fill: in every painting the car's shade is lit by a bright light (sky blue by day; ref/tod/: grey-violet
  // at golden hour and sunset, moonlit blue-grey at night): uCarFill, added where the sun doesn't reach (lf: the share of
  // the sun's light a pixel gets); and its whole shade, sky and fill, fades from the waist (1.2 m) to 0.6× by the sills
  // (0.35 m): the road and the car's own shadow below, where the paintings' hatch darkens towards the bumper
  const FILL = /* glsl */`
#include <lights_fragment_end>
{ vec3 bd = BRDF_Lambert(diffuseColor.rgb); // (the toon's direct light is ramp × shadow × sun × paint in each channel)
  float lf = clamp(reflectedLight.directDiffuse.g / max(directionalLights[0].color.g * bd.g, 1e-7), 0.0, 1.0);
  reflectedLight.indirectDiffuse = (reflectedLight.indirectDiffuse + bd * uCarFill * (1.0 - lf)) * (0.6 + 0.4 * clamp((vWP.y - uCarPos.y + 0.45) / 0.85, 0.0, 1.0));
  reflectedLight.directDiffuse *= uCarDT; }`; // (step 30: the night repaints' moonlit roof: main.js, 1 by day)
  const PAINT = { uniforms: { ...LAMPS.uniforms, uCarFill: U.uCarFill, uCarDT: U.uCarDT }, pars: LAMPS.pars + '\nuniform vec3 uCarFill, uCarDT;', apply: LAMPS.apply };
  const mPaint = carLit(withGloss(new THREE.MeshToonMaterial({ color: '#ffffff', vertexColors: true, gradientMap: GRAD_CAR }), 0.85, 0.06, 'paint-l', PAINT));
  { const ob = mPaint.onBeforeCompile; mPaint.onBeforeCompile = sh => { ob(sh); sh.fragmentShader = sh.fragmentShader.replace('#include <lights_fragment_end>', FILL); }; }
  const part = (hex, gloss) => Object.assign(new THREE.Color(hex), { gloss });
  const mBody = part('#9fd8c8', 1), mRoof = part('#eeece4', 0.6), mTrim = part('#2a2c33', 0.35), mTyre = part('#1b1c20', 0.04), mHub = part('#c8ccd2', 0.8), mChrome = part('#d4d8de', 1.3);
  const paint = (g, c) => { const n = g.attributes.position.count, a = new Float32Array(n * 4); for (let i = 0; i < n; i++) a.set([c.r, c.g, c.b, c.gloss], i * 4); g.setAttribute('color', new THREE.Float32BufferAttribute(a, 4)); return g; };
  const mGlass = carLit(withGloss(new THREE.MeshToonMaterial({ color: '#ffffff', map: glassTexture(), gradientMap: GRAD_CAR }), 1.2, 0.08, 'glass-l', LAMPS));
  // the lamps (one program): lit by the painter's sun too
  const lampKey = sh => { sh.uniforms.uCarKey = U.uCarKey; sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform vec3 uCarKey;'); };
  const lamp = o => { const m = carLit(new THREE.MeshToonMaterial({ ...o, gradientMap: GRAD_CAR })); m.onBeforeCompile = lampKey; m.customProgramCacheKey = () => 'car-lamp'; return m; };
  const mTail = lamp({ color: '#c8303a', emissive: '#ff2a2a', emissiveIntensity: 0.4 });
  const mTailBar = lamp({ color: '#ffb8a0', emissive: '#ffd3a6', emissiveIntensity: 1 }); // the light guide in each lamp (mTail's program)
  const mStop = lamp({ color: '#b02030', emissive: '#ff2a2a', emissiveIntensity: 0.55 }); // high-mount stop lamp (same program as mTail)
  const mAmber = lamp({ color: '#f0a040', emissive: '#ff9a30', emissiveIntensity: 0.35 });
  const mLamp = lamp({ color: '#dfe4ea', emissive: '#fff4dc', emissiveIntensity: 0.15 }); // headlamps (mTail's program)
  const mPlate = new THREE.MeshBasicMaterial({ map: plateTexture() });
  // collect parts per material, then merge → ~9 draw calls for the whole car
  const parts = new Map(), wheels = []; let unsprung = false;
  const m4 = new THREE.Matrix4(), e = new THREE.Euler(), q = new THREE.Quaternion(), one = new THREE.Vector3(1, 1, 1);
  const add = (geo, mat, x, y, z, rx = 0, ry = 0, rz = 0) => {
    const g = geo.index ? geo.toNonIndexed() : geo;
    if (mat.isColor) { paint(g, mat); mat = mPaint; }
    e.set(rx, ry, rz); q.setFromEuler(e); m4.compose(new THREE.Vector3(x, y, z), q, one); g.applyMatrix4(m4);
    if (unsprung) { wheels.push(g); return; }
    if (!parts.has(mat)) parts.set(mat, []);
    parts.get(mat).push(g);
  };
  const mDark = part('#16171b', 0), mSeam = part('#2b3134', 0.15), mRim = part('#b9bfc6', 0.9), mDish = part('#4d5258', 0.4), mRefl = part('#9a1c22', 0.6);
  const mNavy = part('#3a4462', 0.5), mLampRim = part('#6a1820', 0.9); // the lower bumper's navy plastic (city.png and coast.png; the valance in the other two)
  /** a flat capsule-shaped loop (w × h outside, wi × hi inside), facing +Z */
  const capsule = (w, h, wi, hi) => {
    const cap = (p, w, h) => { const r = w / 2, y = h / 2 - r; p.moveTo(r, -y); p.lineTo(r, y); p.absarc(0, y, r, 0, Math.PI, false); p.lineTo(-r, -y); p.absarc(0, -y, r, Math.PI, Math.PI * 2, false); return p; };
    const sh = cap(new THREE.Shape(), w, h); sh.holes.push(cap(new THREE.Path(), wi, hi));
    return new THREE.ShapeGeometry(sh, 6);
  };
  /** a part in two colours, split across by height (per triangle, so the line is crisp): lo below ySplit, hi above */
  const split = (geo, lo, hi, ySplit, x, y, z) => {
    const g = (geo.index ? geo.toNonIndexed() : geo).translate(x, y, z), P = g.attributes.position, col = new Float32Array(P.count * 4);
    for (let t = 0; t < P.count; t += 3) { const c = (P.getY(t) + P.getY(t + 1) + P.getY(t + 2)) / 3 < ySplit ? lo : hi; for (let k = 0; k < 3; k++) col.set([c.r, c.g, c.b, c.gloss], (t + k) * 4); }
    g.setAttribute('color', new THREE.Float32BufferAttribute(col, 4)); add(g, mPaint, 0, 0, 0);
  };
  // ---- the body: one smooth shell lofted along the car (it was two stacked rounded boxes, a step at the waist and box
  // edges all round). Every cross-section is a rounded rectangle from the sills to the roof; the roof drops over a raked
  // windscreen to a short bonnet, the cabin leans in above the waist, and both ends round off like a soap bar (over each
  // end's last ~0.2 m the section shrinks on a quarter circle, then a flat cap closes it: the hatch, the nose)
  const L = 1.7, HW = 0.745, YB = 0.3;
  const sst = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const roofY = z => (z < 0.8 ? 1.8 : z < 1.22 ? 1.8 - 0.6 * sst(0.8, 1.22, z) : 1.2 - 0.1 * ((z - 1.22) / (L - 1.22)) ** 2);
  const tumble = y => 1 - 0.085 * sst(1.15, 1.8, y);
  const section = (z, d) => { // the right half, bottom centre → top centre, shrunk by d at the ends (less at the top edge
    // and the sills than at the corners: the hatch's glass reaches up close under the roof, as on the real car)
    const xm = HW - d, yb = YB + d * 0.6, yt = roofY(z) - d * (z < 0 ? 0.4 : 1), rb = Math.max(0.05, 0.1 - d * 0.5), rt = Math.max(0.06, (z < 0.8 ? 0.17 : 0.13) - d * 0.5);
    const P = [[0, yb], [(xm - rb) * 0.5, yb], [xm - rb, yb]];
    for (let k = 1; k < 4; k++) { const a = -Math.PI / 2 + (k / 8) * Math.PI; P.push([xm - rb + rb * Math.cos(a), yb + rb + rb * Math.sin(a)]); }
    for (let j = 0; j <= 8; j++) P.push([xm, yb + rb + (j / 8) * (yt - rt - yb - rb)]);
    for (let k = 1; k < 5; k++) { const a = (k / 10) * Math.PI; P.push([xm - rt + rt * Math.cos(a), yt - rt + rt * Math.sin(a)]); }
    P.push([xm - rt, yt], [(xm - rt) * 0.5, yt], [0, yt]);
    const ring = P.map(([x, y]) => [x * tumble(y), y]);
    for (let j = P.length - 2; j > 0; j--) ring.push([-ring[j][0], ring[j][1]]);
    return ring;
  };
  {
    const st = []; // [z, shrink]
    const RE = 0.2, FE = 0.22;
    for (let k = 0; k <= 6; k++) { const th = (k / 6) * Math.PI / 2; st.push([-L + RE * (1 - Math.cos(th)), RE * (1 - Math.sin(th))]); }
    for (let z = -L + RE + 0.12; z < 0.78; z += 0.13) st.push([z, 0]);
    for (let z = 0.8; z < 1.225; z += 0.06) st.push([z, 0]);
    for (const z of [1.3, 1.39]) st.push([z, 0]);
    for (let k = 6; k >= 0; k--) { const th = (k / 6) * Math.PI / 2; st.push([L - FE * (1 - Math.cos(th)), FE * (1 - Math.sin(th))]); }
    const pos = [], idx = [];
    const rings = st.map(([z, d]) => section(z, d)), n = rings[0].length;
    rings.forEach((ring, i) => ring.forEach(([x, y]) => pos.push(x, y, st[i][0])));
    for (let i = 0; i < rings.length - 1; i++) for (let j = 0; j < n; j++) {
      const a = i * n + j, b = i * n + ((j + 1) % n), c = a + n, e = b + n;
      idx.push(a, b, c, b, e, c);
    }
    for (const [i, sg] of [[0, -1], [rings.length - 1, 1]]) { // the end caps (a fan from the middle)
      const ctr = pos.length / 3, ring = rings[i];
      pos.push(0, (ring[0][1] + ring[(n / 2) | 0][1]) / 2, st[i][0]);
      for (let j = 0; j < n; j++) { const a = i * n + j, b = i * n + ((j + 1) % n); if (sg < 0) idx.push(ctr, b, a); else idx.push(ctr, a, b); }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx);
    g.computeVertexNormals();
    // (the loft's winding: if a flank's normal points inwards, turn every triangle round)
    { const nr = g.attributes.normal, q = n * 10 + 12; if (nr.getX(q) < 0) { for (let k = 0; k < idx.length; k += 3) { const t = idx[k + 1]; idx[k + 1] = idx[k + 2]; idx[k + 2] = t; } g.setIndex(idx); g.computeVertexNormals(); } }
    g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array((pos.length / 3) * 2), 2));
    // two-tone: the roof and its rounded shoulders white, the rest the body colour, crisp: by the loft's quads (both of a
    // quad's triangles alike), so the line runs straight along a section line. (Per triangle it was a zigzag: a row of white
    // teeth along the shoulders, the hairy band under the roof cap seen from behind and the saw-teeth over the side windows)
    const ng = g.toNonIndexed(), P = ng.attributes.position, col = new Float32Array(P.count * 4), nq = (rings.length - 1) * n * 6;
    for (let t = 0; t < P.count; t += 3) {
      const t0 = t < nq ? t - (t % 6) : t, m = t < nq ? 6 : 3; // (a quad's six corners, or an end cap's triangle)
      let cy = 0, cz = 0; for (let k = 0; k < m; k++) { cy += P.getY(t0 + k); cz += P.getZ(t0 + k); }
      cy /= m; cz /= m; const c = cy > 1.665 && cz < 0.84 && cz > -1.52 ? mRoof : mBody; // (not round the hatch's top edge: the roof cap covers it)
      for (let k = 0; k < 3; k++) col.set([c.r, c.g, c.b, c.gloss], (t + k) * 4);
    }
    ng.setAttribute('color', new THREE.Float32BufferAttribute(col, 4));
    add(ng, mPaint, 0, 0, 0);
  }
  // the white roof: a thick cap over the cabin that overhangs it a little all round (the kei wagon's two-tone)
  add(new RoundedBoxGeometry(1.42, 0.08, 2.62, 3, 0.038), mRoof, 0, 1.815, -0.44);
  // glass laid on the skin (4 mm proud of it), following its curves: the rear window on the flat hatch, three side windows
  // on the leaning flanks, the windscreen along the roof's curve down to the bonnet
  const glassPatch = (pts, nu, nv, cell, flip) => { // pts(u, v) → [x, y, z, nx, ny, nz]
    const g = new THREE.BufferGeometry(), P = [], N = [], T = [], I = [];
    for (let j = 0; j <= nv; j++) for (let i = 0; i <= nu; i++) { const u = i / nu, v = j / nv, q = pts(u, v); P.push(q[0] + q[3] * 0.004, q[1] + q[4] * 0.004, q[2] + q[5] * 0.004); N.push(q[3], q[4], q[5]); T.push(u, v); }
    for (let j = 0; j < nv; j++) for (let i = 0; i < nu; i++) { const a = j * (nu + 1) + i, b = a + 1, c = a + nu + 1, d = c + 1; I.push(a, b, d, a, d, c); }
    g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(N, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(T, 2)); g.setIndex(I);
    { const p0 = new THREE.Vector3().fromArray(P, 0), p1 = new THREE.Vector3().fromArray(P, 3), p2 = new THREE.Vector3().fromArray(P, (nu + 1) * 3), nn = new THREE.Vector3().fromArray(N, 0);
      if (p1.sub(p0).cross(p2.sub(p0)).dot(nn) < 0) { for (let k = 0; k < I.length; k += 3) { const t = I[k + 1]; I[k + 1] = I[k + 2]; I[k + 2] = t; } g.setIndex(I); } }
    return glassCell(g, cell, flip);
  };
  const sideN = y => { const e = 0.01, dx = HW * (tumble(y + e) - tumble(y - e)) / (2 * e); const l = Math.hypot(1, dx); return [1 / l, -dx / l]; };
  const zA = y => { let lo = 0.8, hi = 1.22; for (let k = 0; k < 24; k++) { const m = (lo + hi) / 2; if (roofY(m) > y) lo = m; else hi = m; } return lo; }; // the A pillar's line
  for (const s of [-1, 1]) {
    const flip = s < 0;
    const win = (z0f, z1f, cell) => add(glassPatch((u, v) => { const y = 1.21 + v * 0.39, z = s > 0 ? z1f(y) + (z0f(y) - z1f(y)) * u : z0f(y) + (z1f(y) - z0f(y)) * u, [nx, ny] = sideN(y); return [s * HW * tumble(y), y, z, s * nx, ny, 0]; }, 1, 6, cell, false), mGlass, 0, 0, 0);
    win(() => 0.06, y => zA(y) - 0.07, 2); win(() => -0.72, () => -0.08, 3); win(() => -1.42, () => -0.84, 0);
    add(new THREE.BoxGeometry(0.012, 0.41, 0.07), mTrim, s * 0.731, 1.405, -0.01, 0, 0, -s * 0.07); // the B pillar
    add(new THREE.BoxGeometry(0.014, 0.022, 2.42), mDark, s * 0.748, 1.2, -0.26);                    // the waist seal
    // door seams (front door, sliding door), handles, the sliding door's rail
    for (const [z, y0] of [[0.8, 0.64], [-0.06, 0.42], [-0.76, 0.64]]) add(new THREE.BoxGeometry(0.008, 1.17 - y0, 0.012), mSeam, s * 0.749, (y0 + 1.17) / 2, z);
    add(new THREE.BoxGeometry(0.02, 0.028, 0.13), mSeam, s * 0.752, 1.06, 0.06);
    add(new THREE.BoxGeometry(0.02, 0.028, 0.13), mSeam, s * 0.752, 1.06, -0.2);
    add(new THREE.BoxGeometry(0.01, 0.022, 0.62), mSeam, s * 0.749, 1.155, -1.08);
    // wheel wells: the dark opening above each wheel, edged by a black arch moulding
    for (const z of [1.12, -1.12]) {
      add(new THREE.CircleGeometry(0.345, 18, 0, Math.PI), mDark, s * 0.749, 0.29, z, 0, (s * Math.PI) / 2, 0);
      add(new THREE.TorusGeometry(0.35, 0.024, 5, 18, Math.PI), mTrim, s * 0.752, 0.29, z, 0, (s * Math.PI) / 2, 0);
    }
    add(new RoundedBoxGeometry(0.1, 0.12, 0.2, 2, 0.04), mBody, s * 0.83, 1.24, 1.02);
    add(new THREE.BoxGeometry(0.07, 0.035, 0.05), mTrim, s * 0.775, 1.2, 1.03); // (the mirror's stalk)
    // combination lamps: tall capsules in a dark red rim, a pale light guide looping round inside each red lens (as the
    // paintings' lamps: a red rim, a cream ring, a red core), the amber indicator below
    add(new RoundedBoxGeometry(0.16, 0.4, 0.05, 3, 0.075), mLampRim, s * 0.56, 0.95, -1.703);
    add(new RoundedBoxGeometry(0.13, 0.37, 0.05, 3, 0.062), mTail, s * 0.56, 0.95, -1.716);
    add(capsule(0.11, 0.346, 0.08, 0.316), mTailBar, s * 0.56, 0.95, -1.7425, 0, Math.PI, 0);
    add(new RoundedBoxGeometry(0.11, 0.06, 0.04, 2, 0.02), mAmber, s * 0.56, 0.69, -1.707);
  }
  // the rear window on the hatch: a rounded trapezoid (the cabin leans in), the rear seats behind it
  {
    const sh = new THREE.Shape(), w = 0.52, y0 = 1.15, y1 = 1.66, r = 0.07;
    sh.moveTo(-w + r, y0); sh.lineTo(w - r, y0); sh.absarc(w - r, y0 + r, r, -Math.PI / 2, 0); sh.lineTo(w, y1 - r); sh.absarc(w - r, y1 - r, r, 0, Math.PI / 2);
    sh.lineTo(-w + r, y1); sh.absarc(-w + r, y1 - r, r, Math.PI / 2, Math.PI); sh.lineTo(-w, y0 + r); sh.absarc(-w + r, y0 + r, r, Math.PI, Math.PI * 1.5);
    const g = new THREE.ShapeGeometry(sh, 6), P = g.attributes.position, T = g.attributes.uv;
    for (let i = 0; i < P.count; i++) { const x = P.getX(i), y = P.getY(i), v = (y - y0) / (y1 - y0); T.setXY(i, (x + w) / (2 * w), v); P.setX(i, x * (1 - 0.08 * v)); }
    add(glassCell(g, 1), mGlass, 0, 0, -L - 0.004, 0, Math.PI, 0);
  }
  add(new RoundedBoxGeometry(0.36, 0.04, 0.03, 2, 0.014), mStop, 0, 1.69, -1.712); // ハイマウントストップランプ above the rear glass
  // the windscreen, bending with the roof down to the bonnet
  add(glassPatch((u, v) => { const z = 1.19 - v * 0.36, y = roofY(z), hw = 0.56 - 0.07 * v, dz = 0.005, sl = (roofY(z + dz) - roofY(z - dz)) / (2 * dz), l = Math.hypot(1, sl);
    return [(u * 2 - 1) * hw, y, z, 0, 1 / l, -sl / l]; }, 2, 7, 0, false), mGlass, 0, 0, 0);
  // the hatch: a recessed panel for the plate under a chrome handle, the hatch's outline, the bumper with its dark lower
  // lip, red reflectors and a chrome tailpipe
  add(new RoundedBoxGeometry(0.46, 0.25, 0.012, 2, 0.05), part('#86bdb0', 0.6), 0, 0.73, -1.701);
  add(new THREE.PlaneGeometry(0.34, 0.17), mPlate, 0, 0.72, -1.709, 0, Math.PI, 0);
  add(new RoundedBoxGeometry(0.25, 0.034, 0.03, 2, 0.013), mChrome, 0, 0.9, -1.708);
  for (const s of [-1, 1]) add(new THREE.BoxGeometry(0.01, 0.56, 0.006), mSeam, s * 0.47, 0.85, -1.703);
  add(new THREE.BoxGeometry(0.95, 0.01, 0.006), mSeam, 0, 0.565, -1.703);
  // the bumper: the body colour over its top, navy below (the paintings' dark lower bumper and valance), the reflectors on
  // the navy; a dark lip under it
  split(new RoundedBoxGeometry(1.5, 0.2, 0.26, 3, 0.08), mNavy, mBody, 0.455, 0, 0.44, -1.6);
  add(new RoundedBoxGeometry(1.38, 0.08, 0.22, 2, 0.03), mTrim, 0, 0.33, -1.61);
  for (const s of [-1, 1]) add(new THREE.BoxGeometry(0.13, 0.032, 0.01), mRefl, s * 0.56, 0.425, -1.731);
  // a chrome emblem on the hatch, under the rear window (city.png)
  add(new THREE.TorusGeometry(0.034, 0.0065, 4, 20), mChrome, 0, 1.035, -1.704, 0, Math.PI, 0);
  for (const s of [-1, 1]) add(new THREE.BoxGeometry(0.009, 0.042, 0.006), mChrome, s * 0.011, 1.035, -1.706, 0, 0, s * 0.42);
  add(new THREE.CylinderGeometry(0.036, 0.036, 0.12, 12), mChrome, 0.46, 0.29, -1.68, Math.PI / 2, 0, 0);
  add(new THREE.CylinderGeometry(0.024, 0.024, 0.124, 10), mDark, 0.46, 0.29, -1.68, Math.PI / 2, 0, 0);
  // the front (it is what the X card's film camera shows coming down the road): round headlamps in dark surrounds at the
  // nose's corners, a slim grille between them, amber indicators, a black bumper with an air intake and the number
  // plate, and wipers parked at the foot of the windscreen
  for (const s of [-1, 1]) {
    add(new RoundedBoxGeometry(0.4, 0.26, 0.04, 2, 0.06), mTrim, s * 0.42, 0.85, 1.702);
    add(new THREE.CylinderGeometry(0.105, 0.105, 0.03, 16), mLamp, s * 0.46, 0.85, 1.72, Math.PI / 2, 0, 0);
    add(new THREE.CylinderGeometry(0.055, 0.055, 0.03, 12), mLamp, s * 0.3, 0.85, 1.718, Math.PI / 2, 0, 0);
    add(new RoundedBoxGeometry(0.1, 0.06, 0.04, 2, 0.015), mAmber, s * 0.52, 0.66, 1.705);
    add(new THREE.BoxGeometry(0.46, 0.014, 0.014), mDark, s * 0.25, 1.215, 1.2, -0.3, s * 0.12, 0);
  }
  add(new RoundedBoxGeometry(0.36, 0.12, 0.03, 2, 0.03), mDark, 0, 0.84, 1.704);
  for (let k = 0; k < 3; k++) add(new THREE.BoxGeometry(0.32, 0.012, 0.012), mSeam, 0, 0.805 + k * 0.035, 1.722);
  add(new RoundedBoxGeometry(1.52, 0.24, 0.22, 2, 0.07), mTrim, 0, 0.44, 1.62);
  add(new THREE.BoxGeometry(0.7, 0.07, 0.02), mDark, 0, 0.4, 1.732);
  // (the front plate is painted, not the unlit plate texture: nothing lights a front plate at night)
  add(new THREE.BoxGeometry(0.34, 0.17, 0.01), part('#f0cc38', 0.3), 0, 0.62, 1.733);
  add(new THREE.BoxGeometry(0.3, 0.05, 0.004), part('#2f5a2f', 0.1), 0, 0.6, 1.739);
  unsprung = true;
  for (const [x, z] of [[-0.67, 1.12], [0.67, 1.12], [-0.67, -1.12], [0.67, -1.12]]) {
    add(new THREE.CylinderGeometry(0.29, 0.29, 0.19, 24), mTyre, x, 0.29, z, 0, 0, Math.PI / 2);
    add(new THREE.CylinderGeometry(0.195, 0.195, 0.194, 20), mRim, x, 0.29, z, 0, 0, Math.PI / 2);
    add(new THREE.CylinderGeometry(0.155, 0.155, 0.198, 16), mDish, x, 0.29, z, 0, 0, Math.PI / 2);
    for (let k = 0; k < 5; k++) { const a = (k / 5) * Math.PI * 2 + 0.3; add(new THREE.BoxGeometry(0.202, 0.03, 0.15), mRim, x, 0.29 - 0.085 * Math.sin(a), z + 0.085 * Math.cos(a), a, 0, 0); }
    add(new THREE.CylinderGeometry(0.045, 0.045, 0.206, 10), mHub, x, 0.29, z, 0, 0, Math.PI / 2);
  }
  unsprung = false;
  const procedural = []; // (the procedural car's meshes: taken out when the painted car comes in, step 35e)
  for (const [mat, list] of parts) {
    const mesh = new THREE.Mesh(mergeGeometries(list), mat);
    mesh.castShadow = mat !== mGlass && mat !== mPlate && mat !== mStop && mat !== mLamp && mat !== mTailBar; mesh.receiveShadow = true;
    inner.add(mesh); procedural.push(mesh);
  }
  { const mesh = new THREE.Mesh(mergeGeometries(wheels), mPaint); mesh.castShadow = mesh.receiveShadow = true; car.add(mesh); procedural.push(mesh); }
  // contact shadow: sky light can't reach the road under a car, so it always sits on a soft dark patch — without it the
  // car floats in overcast, rain and at night, when there is no sun shadow (one small quad, part of the car)
  let ao = null;
  {
    const W = 48, H = 96, c = document.createElement('canvas'); c.width = W; c.height = H;
    const g = c.getContext('2d'), img = g.createImageData(W, H);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const qx = Math.max(0, Math.abs((x + 0.5) / W - 0.5) * 2.1 - 0.62), qy = Math.max(0, Math.abs((y + 0.5) / H - 0.5) * 2.05 - 0.78); // outside the footprint
      const d = Math.hypot(qx / 0.42, qy / 0.24), a = Math.max(0, 1 - d), i4 = (y * W + x) * 4;
      img.data[i4] = img.data[i4 + 1] = img.data[i4 + 2] = Math.round(255 * a * a * (3 - 2 * a)); img.data[i4 + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    ao = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 4.1), new THREE.MeshBasicMaterial({ color: 0x000000, alphaMap: new THREE.CanvasTexture(c), transparent: true, opacity: 0.55, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 }));
    ao.rotation.x = -Math.PI / 2; ao.position.y = 0.03; ao.renderOrder = 3; car.add(ao);
  }
  // on a wet road the tail lamps mirror in it: two soft red streaks on the asphalt behind the car, where the chase camera
  // sees their reflections (one small additive quad pair, part of the car; the light pools' program)
  const streakMat = (() => {
    const W = 16, H = 64, c = document.createElement('canvas'); c.width = W; c.height = H;
    const g = c.getContext('2d'), img = g.createImageData(W, H);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      // (v = 0 at the bumper: brightest just behind the car, where the chase camera sees the road, fading away from it)
      const v = 1 - (y + 0.5) / H, u = ((x + 0.5) / W - 0.5) * 2, a = Math.exp(-u * u * 5) * Math.min(1, v / 0.06) * Math.pow(1 - v, 1.6) * (0.78 + 0.22 * Math.sin(v * 31 + u * 2));
      const i4 = (y * W + x) * 4; img.data[i4] = img.data[i4 + 1] = img.data[i4 + 2] = Math.round(255 * Math.max(0, a)); img.data[i4 + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    return new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), color: 0xff3a30, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 });
  })();
  { const q = [];
    for (const x of [-0.56, 0.56]) { const g = new THREE.PlaneGeometry(0.22, 1.5); g.rotateX(-Math.PI / 2); g.translate(x, 0.035, -1.72 - 0.75); q.push(g); }
    const st = new THREE.Mesh(mergeGeometries(q), streakMat); st.renderOrder = 3; st.visible = false; car.add(st); streakMat.mesh = st; }
  // (step 30) at night as painted, a faint red tinge on the road just behind the tail lamps (the repaints' road reads a dark red-mauve
  // there): one soft ellipse ~0.6 m behind the bumper, 2.3 m across, fading to exactly nothing 1.0 m nearer (under the car, out of
  // sight) and 1.6 m further, well inside its card, so no edge ever shows; a tinge (main.js sets its strength by the night's painted
  // look, so dusk and sunset keep their road, and fades it on a wet road, where the lamps' reflections are). Additive, in the streaks'
  // program. Made by main.js once the particles are (initGlow): made here, its ids drew random numbers ahead of theirs, which moved
  // every falling petal and leaf of a seeded capture
  let glowMat = null;
  const GW = 3.0, GL = 3.8, GN = 0.8; // (its card: width, length and how far it reaches under the car, m)
  const initGlow = () => {
    const W = 64, H = 64, c = document.createElement('canvas'); c.width = W; c.height = H;
    const g = c.getContext('2d'), img = g.createImageData(W, H);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      // (the canvas's first row is the card's far end: textures are flipped) xm across, dm behind the bumper (m)
      const xm = ((x + 0.5) / W - 0.5) * GW, dm = (1 - (y + 0.5) / H) * GL - GN, e = dm - 0.6;
      const r2 = (xm / 1.15) ** 2 + (e / (e < 0 ? 1.0 : 1.6)) ** 2, a = r2 < 1 ? (1 - r2) * (1 - r2) : 0;
      const i4 = (y * W + x) * 4; img.data[i4] = img.data[i4 + 1] = img.data[i4 + 2] = Math.round(255 * a); img.data[i4 + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    glowMat = new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), color: 0xff3a30, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 });
    const q = new THREE.PlaneGeometry(GW, GL); q.rotateX(-Math.PI / 2); q.translate(0, 0.033, -1.72 + GN - GL / 2);
    const m = new THREE.Mesh(q, glowMat); m.renderOrder = 3; m.visible = false; m.userData.car = true; car.add(m); glowMat.mesh = m;
  };
  // the tail lamps' glow: in every painting, by day too, a soft red halo spills from each lamp over the paint around it. A
  // painted glow card per lamp, added to the frame (the bloom runs only at dusk and at night, and the card stays far under
  // its threshold); its strength is set each frame (update): softer at night, where the bloom draws the glow; up when braking
  const haloMat = (() => {
    const W = 40, H = 64, c = document.createElement('canvas'); c.width = W; c.height = H;
    const g = c.getContext('2d'), img = g.createImageData(W, H);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const px = Math.abs(((x + 0.5) / W - 0.5) * HALO_W), py = Math.abs(((y + 0.5) / H - 0.5) * HALO_H);
      const d = Math.hypot(px, Math.max(0, py - 0.12)) - 0.065; // (from the lamp's capsule, 0.13 × 0.37 m: < 0 inside)
      const a = d < 0 ? 0.2 + 0.8 * sst(-0.03, -0.002, d) : Math.exp(-((d / 0.06) ** 2)); // (light inside: the lens keeps its red)
      const i4 = (y * W + x) * 4; img.data[i4] = img.data[i4 + 1] = img.data[i4 + 2] = Math.round(255 * a); img.data[i4 + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    return new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), color: new THREE.Color(1, 0.2, 0.16), transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
  })();
  { const q = [];
    for (const x of [-0.56, 0.56]) { const g = new THREE.PlaneGeometry(HALO_W, HALO_H); g.rotateY(Math.PI); g.translate(x, 0.95, -1.765); q.push(g); }
    haloMat.mesh = new THREE.Mesh(mergeGeometries(q), haloMat); haloMat.mesh.renderOrder = 3; inner.add(haloMat.mesh); }
  // rear wiper (its own mesh so it can sweep when it rains)
  const wiperPivot = new THREE.Group(); wiperPivot.position.set(0.02, 1.19, -1.716); inner.add(wiperPivot);
  const wg = new THREE.BoxGeometry(0.52, 0.026, 0.02); wg.translate(0.27, 0, 0);
  let wiper = new THREE.Mesh(paint(wg, mTrim), mPaint); wiper.rotation.z = 0.18; wiperPivot.add(wiper);
  let wiperT = 0;
  // headlights at night
  const head = new THREE.SpotLight(0xfff0d0, 0, 70, 0.55, 0.65, 1.2);
  head.position.set(0, 0.8, 1.6); head.target.position.set(0, 0, 18); inner.add(head, head.target);
  const S = { roll: 0, rv: 0, pitch: 0, pv: 0, y: 0, yv: 0, br: 0 }, soft = (x, cap) => cap * Math.tanh(x / cap); // body springs

  // ---- (step 35e) the painted car: the city painting's mint kei crossover as a painted 3D body (painted.js loadCar), in place of the
  // procedural one above (which stays the fallback). One material for the body, its wheels and its rear wiper: the paint's program (the
  // painter's sun, the street lamps, the fill in the shade, the clear coat's sky) with the painting as its map, and its lamps lit from a
  // mask sheet (emissiveMap: R the tail lamps' red lenses and the reflectors, G their light guides, B on the rear's part of the sheet the
  // stop lamp and the amber indicators, elsewhere the head and fog lamps): their colours set each frame by the procedural lamps' strengths.
  // Its wheels spin with the speed and the front ones steer with the car's sideways pull (in a lane change, round a bend); past ~25 km/h
  // their faces are the painting's wheel spun (no strobing spokes)
  const LAMP_U = { uLampR: { value: new THREE.Color() }, uLampG: { value: new THREE.Color() }, uLampS: { value: new THREE.Color() }, uLampA: { value: new THREE.Color() }, uLampH: { value: new THREE.Color() }, uLampU: { value: 0.65 }, uLampV: { value: 0.3 } };
  // (its fill in the shade its own: the procedural car's (U.uCarFill) × the livery's own by the hour, main.js, as each painting's repaints
  // have the painted car's shade at golden hour, sunset and night)
  const fillP = { value: new THREE.Vector3() };
  const PAINTED = { uniforms: { ...PAINT.uniforms, ...LAMP_U, uCarFill: fillP }, pars: PAINT.pars + '\nuniform vec3 uLampR, uLampG, uLampS, uLampA, uLampH; uniform float uLampU, uLampV;', apply: LAMPS.apply };
  // (B: on the rear's part of the sheet (u past uLampU) the stop lamp above uLampV (v runs down) and the amber indicators below it; elsewhere
  // the head and fog lamps)
  const LAMP_EM = /* glsl */`
#ifdef USE_EMISSIVEMAP
{ vec3 ek = texture2D(emissiveMap, vEmissiveMapUv).rgb;
  totalEmissiveRadiance = ek.r * uLampR + ek.g * uLampG + ek.b * (vEmissiveMapUv.x > uLampU ? (vEmissiveMapUv.y > uLampV ? uLampA : uLampS) : uLampH); }
#endif`;
  const RED = new THREE.Color(1, 0.0232, 0.0232), HEADC = new THREE.Color('#fff4dc'), TAIL_BR = new THREE.Color(1, 0.1, 0.07), AMBER = new THREE.Color(1, 0.5, 0.1); // (linear)
  const P = { on: false, mat: null, wheels: [], piv: [], geo: null, geoBlur: null, blur: false, spin: 0, steer: 0, RT: 0.29, WB: 2.24, dims: null };
  const paintCar = (d, map, em) => {
    const J = d.J, M = d.M;
    const mat = carLit(withGloss(new THREE.MeshToonMaterial({ color: '#ffffff', map, emissiveMap: em, emissive: '#ffffff', gradientMap: GRAD_CAR }), 0.85, 0.06, 'paintmap-l', PAINTED));
    // (the clear coat by the painting's own tone: paint, glass, chrome and rims glossy; black plastic, the tyres and the wheel wells, which
    // reflected the sky at a grazing angle (their insides read a pale grey), hardly at all)
    { const ob = mat.onBeforeCompile; mat.onBeforeCompile = sh => { ob(sh); sh.fragmentShader = sh.fragmentShader.replace('#include <lights_fragment_end>', FILL).replace('#include <emissivemap_fragment>', LAMP_EM)
      .replace('{ float gm = 0.850;', '{ float gm = 0.850 * smoothstep(0.012, 0.05, dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11)));'); }; }
    const geo = (m, uvFrom = null) => { // (a mesh's arrays as a geometry)
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(m.P, 3)); g.setAttribute('normal', new THREE.BufferAttribute(m.N, 3));
      g.setAttribute('uv', new THREE.BufferAttribute((uvFrom || m).U, 2)); g.setIndex(new THREE.BufferAttribute(m.I, 1)); g.computeBoundingSphere(); return g;
    };
    // everything built first (should anything throw, the procedural car stays whole), then swapped in
    const bodyMesh = new THREE.Mesh(geo(M.body), mat); bodyMesh.castShadow = bodyMesh.receiveShadow = true;
    const wgeo = geo(M.wheel), wgBlur = geo(M.wheel, M.wheelblur), piv = [], wheelsP = [];
    for (let i = 0; i < 4; i++) { // (front left, front right, rear left, rear right; the template's painted face is on the car's right, −x: mirrored for the left)
      const sd = i % 2 ? -1 : 1, p = new THREE.Group(), w = new THREE.Mesh(wgeo, mat);
      p.position.set(sd * J.track, J.RT, J.axles[i < 2 ? 0 : 1]); if (sd > 0) w.scale.x = -1;
      w.castShadow = w.receiveShadow = true; p.add(w); piv.push(p); wheelsP.push(w);
    }
    // the rear plate (the procedural plate's texture, over the painting's plain yellow one), the rear wiper, the ring lamps' glow cards and
    // their streaks on a wet road, the contact shadow fitted to the new footprint
    const pl = new THREE.Mesh(new THREE.PlaneGeometry(J.plate[3] * 0.98, J.plate[4] * 0.98), mPlate); pl.position.set(J.plate[0], J.plate[1], J.plate[2] - 0.003); pl.rotation.y = Math.PI;
    const wp = new THREE.Mesh(geo(M.rwiper), mat); wp.rotation.z = WIPER_REST; wp.castShadow = true;
    let haloTex, haloGeo;
    { const W = 48, c = document.createElement('canvas'); c.width = c.height = W;
      const g = c.getContext('2d'), img = g.createImageData(W, W), HW = 0.52, R0 = J.ring[0][3];
      for (let y = 0; y < W; y++) for (let x = 0; x < W; x++) {
        const dd = Math.hypot(((x + 0.5) / W - 0.5) * HW, ((y + 0.5) / W - 0.5) * HW) - R0;
        const a = dd < 0 ? sst(-0.012, 0, dd) : Math.exp(-((dd / 0.06) ** 2)); // (none over the painted lamp: its cream ring shows)
        const i4 = (y * W + x) * 4; img.data[i4] = img.data[i4 + 1] = img.data[i4 + 2] = Math.round(255 * a); img.data[i4 + 3] = 255;
      }
      g.putImageData(img, 0, 0); haloTex = new THREE.CanvasTexture(c);
      const q = []; for (const r of J.ring) { const pg = new THREE.PlaneGeometry(HW, HW); pg.rotateY(Math.PI); pg.translate(r[0], r[1], r[2] - 0.03); q.push(pg); }
      haloGeo = mergeGeometries(q); }
    const sq = []; for (const r of J.ring) { const g = new THREE.PlaneGeometry(0.22, 1.5); g.rotateX(-Math.PI / 2); g.translate(r[0], 0.035, J.rearZ - 0.02 - 0.75); sq.push(g); }
    const streakGeo = mergeGeometries(sq);
    // the swap (the procedural meshes let go: never drawn, their geometry never uploaded)
    for (const o of procedural) { o.parent.remove(o); o.geometry.dispose(); } procedural.length = 0;
    inner.add(bodyMesh, pl); for (const p of piv) car.add(p);
    wiperPivot.remove(wiper); wiper.geometry.dispose(); wiperPivot.position.set(J.rwiper[0], J.rwiper[1], J.rwiper[2]); wiperPivot.rotation.x = J.rwiper[3] || 0; wiper = wp; wiperPivot.add(wiper); // (tilted with the raked glass)
    haloMat.map = haloTex; haloMat.mesh.geometry = haloGeo; streakMat.mesh.geometry = streakGeo;
    ao.scale.set(J.W / 1.49, J.L / 3.4, 1); ao.position.z = J.rearZ + J.L / 2;
    car.traverse(o => { o.userData.car = true; }); // (the car's own shadow map: main.js)
    LAMP_U.uLampU.value = J.splitU; LAMP_U.uLampV.value = J.splitV;
    Object.assign(P, { geo: wgeo, geoBlur: wgBlur, RT: J.RT, WB: J.axles[0] - J.axles[1], piv, wheels: wheelsP, mat, on: true, dims: { axles: J.axles, track: J.track, RT: J.RT, rearZ: J.rearZ } });
  };

  return {
    group: car, lamps, lampCol, head,
    /** (step 30) the tail lamps' glow on the road at night as painted: k, its weight (main.js: the night's painted look), brighter braking */
    /** (step 30) the faint red tinge on the road behind the car at night: k, its weight (main.js: the night's painted look, less on a
     *  wet road); a little more braking */
    initGlow, roadGlow(k) { if (!glowMat) return; glowMat.opacity = k * (GLOW_K + GLOW_B * S.br); glowMat.mesh.visible = glowMat.opacity > 0.002; },
    /** m (optional): lat = sideways acceleration (m/s², + = towards the right), lon = speeding up (+) / braking (−),
     *  road = the surface's height under the car (m), jolt = vertical kick this frame (m/s), kick = pitch kick (rad/s, + = nose down),
     *  brake = 1 while the brakes are on */
    update(dt, speed, night, rain = 0, m = null, wet = 0) { // (wet: how wet the road is under the car)
      if (m) { // springs at ~1.2–1.5 Hz, a little under-damped like a soft family car; roll ≈ 9°/g, pitch ≈ 4.5°/g, both easing off at the limits
        const rollT = soft(-m.lat * 0.016, 0.045), pitchT = soft(-m.lon * 0.008, 0.03);
        S.rv += ((rollT - S.roll) * 55 - S.rv * 8) * dt; S.roll += S.rv * dt;
        S.pv += ((pitchT - S.pitch) * 60 - S.pv * 9) * dt + m.kick; S.pitch += S.pv * dt;
        S.yv += ((m.road - S.y) * 85 - S.yv * 8) * dt + m.jolt; S.y += S.yv * dt;
        body.rotation.set(S.pitch, 0, S.roll); body.position.y = 0.35 + S.y;
      }
      // brake lights: the combination lamps brighten and the high-mount stop lamp comes on (they switch in ~0.1 s)
      S.br += ((m ? m.brake : 0) - S.br) * Math.min(1, dt * 14);
      // (by day the lamps glow as the paintings': a bright red lens round a cream light guide, the high-mount lamp a dim red;
      // at night the light guide burns red and the bloom draws their glow, as before, round a lens that stays red: at its old
      // 3.5× the tone curve washed it out to a pinkish white, where the paintings' lamps keep their red)
      mTail.emissiveIntensity = 0.85 + night * 0.35 + S.br * (1.7 + night * 2.0); mStop.emissiveIntensity = 0.55 + S.br * (2.4 + night * 1.6);
      { const r = Math.min(1, night + S.br * 0.7); mTailBar.emissive.setRGB(1, 0.69 + (0.1 - 0.69) * r, 0.39 + (0.07 - 0.39) * r); }
      mTailBar.emissiveIntensity = 0.95 + night * 3.05 + S.br * (2 + night * 2);
      haloMat.opacity = (0.36 + 0.3 * S.br) * (1 - 0.2 * night);
      streakMat.opacity = wet * Math.min(1, 0.22 + (0.35 + night * 3.2 + S.br * (1.7 + night * 2.0)) * 0.22); streakMat.mesh.visible = streakMat.opacity > 0.01; // (as before: by the lamps' old strength)
      if (rain > 0.15 || wiperT % 2.6 > 0.01) {
        wiperT += dt;
        const p = (wiperT % 2.6) / 2.6, sm = x => x * x * (3 - 2 * x);
        const a = p < 0.25 ? sm(p / 0.25) : p < 0.5 ? sm(1 - (p - 0.25) / 0.25) : 0;
        wiper.rotation.z = (P.on ? WIPER_REST : 0.18) + a * (P.on ? 2.6 : 2.5);
        if (rain <= 0.15 && p >= 0.5) wiperT = 0;
      }
      head.intensity = night * 60; mLamp.emissiveIntensity = 0.15 + night * 2.6; // (the lamps glow when the headlights are on)
      if (P.on) { // (step 35e) the painted car's lamps, by the procedural ones' strengths above; its wheels
        // (the ring lamps as the paintings have them: by day a bright yellow-cream light guide round a red lens; at night the guide a warm
        // orange ring round a darker lens (ref/tod: the repaints' lamps; the old 3-4x made a red blob in the bloom); braking: red, brighter)
        const r = Math.min(1, S.br * 0.8), gn = 1 - PL.gn * night;
        LAMP_U.uLampR.value.copy(RED).multiplyScalar(mTail.emissiveIntensity * PL.r * (1 - PL.rn * night));
        LAMP_U.uLampG.value.setRGB(1, 0.72 + (0.5 - 0.72) * night, 0.22 + (0.2 - 0.22) * night).lerp(TAIL_BR, r).multiplyScalar(mTailBar.emissiveIntensity * PL.g * gn);
        LAMP_U.uLampS.value.copy(RED).multiplyScalar(mStop.emissiveIntensity * PL.s);
        LAMP_U.uLampA.value.copy(AMBER).multiplyScalar(PL.a * (1 + 1.2 * night));
        LAMP_U.uLampH.value.copy(HEADC).multiplyScalar(mLamp.emissiveIntensity * PL.h);
        P.spin = (P.spin + (speed / P.RT) * dt) % (Math.PI * 2);
        const v = Math.max(speed, 0), tgt = m && v > 0.5 ? Math.max(-0.5, Math.min(0.5, Math.atan((P.WB * -m.lat) / Math.max(v * v, 4)))) : 0;
        P.steer += (tgt - P.steer) * Math.min(1, dt * 5);
        const blur = P.blur ? v > 6 : v > 7; // (with a little hysteresis)
        for (let i = 0; i < 4; i++) { const w = P.wheels[i]; w.rotation.x = P.spin; if (blur !== P.blur) w.geometry = blur ? P.geoBlur : P.geo; if (i < 2) P.piv[i].rotation.y = P.steer; }
        P.blur = blur;
      }
    },
    /** (step 35e) the painted car in place of the procedural one (painted.js loadCar: d; its two textures, uploaded): once, at load */
    paint: paintCar,
    get painted() { return P.on; },
    /** (step 35e) the painted car's fill in its shade (main.js sets it each frame) */
    fillP: fillP.value,
    /** (step 35e) the painted car's wheels and tail (axles: front, rear z; m), or null */
    get dims() { return P.dims || null; },
    get paintMat() { return P.mat; }, get wheelMeshes() { return P.wheels; }, // (step 35e: __dbg, the harness)
  };
}
