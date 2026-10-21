// A small two-tone kei car (think Honda N-Box / Suzuki Hustler), toon-shaded. Faces +Z in its local frame.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { GRAD, withGloss } from './materials.js';

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
function glassTexture() {
  const c = document.createElement('canvas'); c.width = 64; c.height = 128;
  const g = c.getContext('2d'), gr = g.createLinearGradient(0, 0, 0, 128);
  gr.addColorStop(0, '#9fbfe6'); gr.addColorStop(0.45, '#4a6690'); gr.addColorStop(1, '#1d2638');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 128);
  g.fillStyle = 'rgba(255,255,255,0.35)'; g.beginPath(); g.moveTo(20, 0); g.lineTo(34, 0); g.lineTo(10, 128); g.lineTo(-4, 128); g.fill();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
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
  const LAMPS = { uniforms: { uCarLamp: { value: lamps }, uCarLampCol: { value: new THREE.Color(1.0, 0.8, 0.52) } }, pars: '\nuniform vec4 uCarLamp[2]; uniform vec3 uCarLampCol;', apply: /* glsl */`
  for (int i = 0; i < 2; i++) {
    vec3 L = uCarLamp[i].xyz + vViewPosition; float d2 = max(dot(L, L), 1e-4); L *= inversesqrt(d2);
    float att = uCarLamp[i].w / (1.0 + 0.045 * d2);
    outgoingLight += uCarLampCol * att * (diffuseColor.rgb * max(dot(nV, L), 0.0) + pow(max(dot(nV, normalize(L + vV)), 0.0), 60.0) * 1.5 * gm);
  }` };
  const mPaint = withGloss(new THREE.MeshToonMaterial({ color: '#ffffff', vertexColors: true, gradientMap: GRAD }), 0.85, 0.06, 'paint-l', LAMPS);
  const part = (hex, gloss) => Object.assign(new THREE.Color(hex), { gloss });
  const mBody = part('#9fd8c8', 1), mRoof = part('#e9e7e0', 0.55), mTrim = part('#2a2c33', 0.35), mTyre = part('#1b1c20', 0.04), mHub = part('#c8ccd2', 0.8);
  const paint = (g, c) => { const n = g.attributes.position.count, a = new Float32Array(n * 4); for (let i = 0; i < n; i++) a.set([c.r, c.g, c.b, c.gloss], i * 4); g.setAttribute('color', new THREE.Float32BufferAttribute(a, 4)); return g; };
  const mGlass = withGloss(new THREE.MeshToonMaterial({ color: '#ffffff', map: glassTexture(), gradientMap: GRAD }), 1.2, 0.08, 'glass-l', LAMPS);
  const mTail = new THREE.MeshToonMaterial({ color: '#c8303a', emissive: '#ff2a2a', emissiveIntensity: 0.4, gradientMap: GRAD });
  const mAmber = new THREE.MeshToonMaterial({ color: '#f0a040', emissive: '#ff9a30', emissiveIntensity: 0.2, gradientMap: GRAD });
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
  add(new RoundedBoxGeometry(1.48, 0.86, 3.38, 4, 0.15), mBody, 0, 0.77, 0);
  add(new RoundedBoxGeometry(1.42, 0.66, 2.6, 4, 0.17), mBody, 0, 1.5, -0.25);
  add(new RoundedBoxGeometry(1.38, 0.09, 2.5, 3, 0.04), mRoof, 0, 1.84, -0.25);
  add(new THREE.PlaneGeometry(1.16, 0.5), mGlass, 0, 1.53, -1.556, 0, Math.PI, 0);
  for (const s of [-1, 1]) {
    add(new THREE.PlaneGeometry(2.25, 0.46), mGlass, s * 0.712, 1.54, -0.2, 0, (s * Math.PI) / 2, 0);
    add(new RoundedBoxGeometry(0.1, 0.12, 0.2, 2, 0.04), mBody, s * 0.82, 1.2, 0.95);
    add(new RoundedBoxGeometry(0.14, 0.48, 0.08, 2, 0.035), mTail, s * 0.64, 1.0, -1.67);
    add(new RoundedBoxGeometry(0.12, 0.08, 0.06, 2, 0.02), mAmber, s * 0.64, 0.7, -1.67);
  }
  add(new THREE.PlaneGeometry(1.2, 0.52), mGlass, 0, 1.52, 1.056, -0.12, 0, 0);
  add(new RoundedBoxGeometry(1.52, 0.22, 0.22, 2, 0.07), mTrim, 0, 0.42, -1.62);
  add(new THREE.BoxGeometry(0.24, 0.04, 0.05), mTrim, 0, 0.84, -1.69);
  add(new THREE.PlaneGeometry(0.34, 0.17), mPlate, 0, 0.72, -1.7, 0, Math.PI, 0);
  unsprung = true;
  for (const [x, z] of [[-0.67, 1.12], [0.67, 1.12], [-0.67, -1.12], [0.67, -1.12]]) {
    add(new THREE.CylinderGeometry(0.29, 0.29, 0.2, 20), mTyre, x, 0.29, z, 0, 0, Math.PI / 2);
    add(new THREE.CylinderGeometry(0.16, 0.16, 0.205, 12), mHub, x, 0.29, z, 0, 0, Math.PI / 2);
  }
  unsprung = false;
  for (const [mat, list] of parts) {
    const mesh = new THREE.Mesh(mergeGeometries(list), mat);
    mesh.castShadow = mat !== mGlass && mat !== mPlate; mesh.receiveShadow = true;
    inner.add(mesh);
  }
  { const mesh = new THREE.Mesh(mergeGeometries(wheels), mPaint); mesh.castShadow = mesh.receiveShadow = true; car.add(mesh); }
  // contact shadow: sky light can't reach the road under a car, so it always sits on a soft dark patch — without it the
  // car floats in overcast, rain and at night, when there is no sun shadow (one small quad, part of the car)
  {
    const W = 48, H = 96, c = document.createElement('canvas'); c.width = W; c.height = H;
    const g = c.getContext('2d'), img = g.createImageData(W, H);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const qx = Math.max(0, Math.abs((x + 0.5) / W - 0.5) * 2.1 - 0.62), qy = Math.max(0, Math.abs((y + 0.5) / H - 0.5) * 2.05 - 0.78); // outside the footprint
      const d = Math.hypot(qx / 0.42, qy / 0.24), a = Math.max(0, 1 - d), i4 = (y * W + x) * 4;
      img.data[i4] = img.data[i4 + 1] = img.data[i4 + 2] = Math.round(255 * a * a * (3 - 2 * a)); img.data[i4 + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    const ao = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 4.1), new THREE.MeshBasicMaterial({ color: 0x000000, alphaMap: new THREE.CanvasTexture(c), transparent: true, opacity: 0.55, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 }));
    ao.rotation.x = -Math.PI / 2; ao.position.y = 0.03; ao.renderOrder = 3; car.add(ao);
  }
  // rear wiper (its own mesh so it can sweep when it rains)
  const wiperPivot = new THREE.Group(); wiperPivot.position.set(0.02, 1.3, -1.57); inner.add(wiperPivot);
  const wg = new THREE.BoxGeometry(0.52, 0.026, 0.02); wg.translate(0.27, 0, 0);
  const wiper = new THREE.Mesh(paint(wg, mTrim), mPaint); wiper.rotation.z = 0.18; wiperPivot.add(wiper);
  let wiperT = 0;
  // headlights at night
  const head = new THREE.SpotLight(0xfff0d0, 0, 70, 0.55, 0.65, 1.2);
  head.position.set(0, 0.8, 1.6); head.target.position.set(0, 0, 18); inner.add(head, head.target);
  const S = { roll: 0, rv: 0, pitch: 0, pv: 0, y: 0, yv: 0 }, soft = (x, cap) => cap * Math.tanh(x / cap); // body springs

  return {
    group: car, lamps,
    /** m (optional): lat = sideways acceleration (m/s², + = towards the right), lon = speeding up (+) / braking (−),
     *  road = the surface's height under the car (m), jolt = vertical kick this frame (m/s), kick = pitch kick (rad/s, + = nose down) */
    update(dt, speed, night, rain = 0, m = null) {
      if (m) { // springs at ~1.2–1.5 Hz, a little under-damped like a soft family car; roll ≈ 9°/g, pitch ≈ 4.5°/g, both easing off at the limits
        const rollT = soft(-m.lat * 0.016, 0.045), pitchT = soft(-m.lon * 0.008, 0.03);
        S.rv += ((rollT - S.roll) * 55 - S.rv * 8) * dt; S.roll += S.rv * dt;
        S.pv += ((pitchT - S.pitch) * 60 - S.pv * 9) * dt + m.kick; S.pitch += S.pv * dt;
        S.yv += ((m.road - S.y) * 85 - S.yv * 8) * dt + m.jolt; S.y += S.yv * dt;
        body.rotation.set(S.pitch, 0, S.roll); body.position.y = 0.35 + S.y;
      }
      mTail.emissiveIntensity = 0.35 + night * 3.2;
      if (rain > 0.15 || wiperT % 2.6 > 0.01) {
        wiperT += dt;
        const p = (wiperT % 2.6) / 2.6, sm = x => x * x * (3 - 2 * x);
        const a = p < 0.25 ? sm(p / 0.25) : p < 0.5 ? sm(1 - (p - 0.25) / 0.25) : 0;
        wiper.rotation.z = 0.18 + a * 2.5;
        if (rain <= 0.15 && p >= 0.5) wiperT = 0;
      }
      head.intensity = night * 60;
    },
  };
}
