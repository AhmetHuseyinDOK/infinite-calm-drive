// Cappadocia's hot-air balloons (W5): the classic sight over its valleys at sunrise. Painted sprites (assets/balloons/, Grok
// Imagine on a crop of the concept's sky, ~/cdtest/w5/scripts/balloons.py), drawn as one instanced mesh of camera-facing cards,
// anchored in the world over the zone (each its own place along the road, how far out to either side and how high, drifting slowly
// on the morning breeze), so they come nearer as the road runs under them. Many at sunrise, fewer through the morning, a few by day,
// none from late afternoon to dawn: each takes its turn by a number of its own (rank), fading in and out (landed, or gone over the
// ridges). Colour: on a bright day the painting itself (the inverse grade, as the painted clouds'), else the painting in the hour's
// light (warm and darker at dawn and in the evening, dimmer under grey skies), hazed with distance into the horizon's colour; each
// sprite (painted lit from the right) mirrored to face the sun, while it is out of view. Null if the sheet fails: no balloons.
import * as THREE from 'three';
import { rng } from './util.js';
import { TOD } from './sky.js';
import { UNGRADE, gradeUniforms, ASSETS, orNull } from './painted.js';

/** the sheet: 'hi' (224 px a balloon) or 'lo' (112); null (never rejects) when missing, broken, truncated or too slow */
export async function loadBalloonAtlas(tier, timeoutMs = 15000) {
  const base = ASSETS + 'balloons/';
  return orNull((async () => {
    const r = await fetch(base + 'balloons1.json');
    if (!r.ok) throw new Error('balloons1.json ' + r.status);
    const J = await r.json(), file = J.files && J.files[tier] ? tier : 'hi', list = ((J.balloons && J.balloons[file]) || []).filter(b => b.u1 > b.u0 && b.aspect > 0);
    if (!list.length) throw new Error('no balloons listed');
    const ri = await fetch(base + J.files[file]);
    if (!ri.ok) throw new Error(J.files[file] + ' ' + ri.status);
    const blob = await ri.blob(); // (checked whole: a truncated image decodes without complaint)
    if (J.bytes && J.bytes[file] && blob.size !== J.bytes[file]) throw new Error(J.files[file] + ' is ' + blob.size + ' bytes, not ' + J.bytes[file]);
    const url = URL.createObjectURL(blob);
    let tex; try { tex = await new THREE.TextureLoader().loadAsync(url); } finally { URL.revokeObjectURL(url); }
    tex.colorSpace = THREE.NoColorSpace; tex.generateMipmaps = true; tex.minFilter = THREE.LinearMipmapLinearFilter; tex.magFilter = THREE.LinearFilter;
    return { tex, list };
  })(), timeoutMs, "Cappadocia's balloons unavailable:");
}

const D2R = Math.PI / 180, wrapA = a => Math.atan2(Math.sin(a), Math.cos(a));
/** how many of them are up at time of day t (0 … 1 of them): rising at sunrise (06:00–06:40), all of them up to ~08:00, fewer
 *  through the morning, a few by day, none from ~17:00 */
export function balloonsUp(t) {
  const k = (a, b, x) => { const v = Math.min(1, Math.max(0, (x - a) / (b - a))); return v * v * (3 - 2 * v); };
  return k(0.245, 0.275, t) * (1 - 0.82 * k(0.33, 0.45, t)) * (1 - k(0.62, 0.7, t));
}

/** the balloons: `atlas` from loadBalloonAtlas, `post` for the grade's uniforms, N of them (fewer on phones). update(...) each frame */
export function makeBalloons(atlas, post, N = 36) {
  const L = atlas.list, r = rng(4243), B = [];
  // each balloon: where along the zone (0…1), which side and how far out (m), how high over the road (m), its sprite, size (m), its
  // turn (rank: up while balloonsUp(t) > rank), its drift's phase
  for (let i = 0; i < N; i++) {
    const near = r() < 0.3;
    B.push({ f: (i + r()) / N, u: (r() < 0.5 ? -1 : 1) * (near ? r.range(40, 220) : r.range(220, 1300)), y: near ? r.range(70, 260) : r.range(120, 650),
      k: Math.floor(r() * L.length), h: r.range(20, 26), rank: Math.pow(r(), 0.8), ph: r() * 6.28, bob: r.range(0.04, 0.09), flip: false, x: 0, yy: 0, z: 0, a: 0, d: 0 });
  }
  const geo = new THREE.PlaneGeometry(1, 1); geo.translate(0, 0.5, 0);
  const aRect = new THREE.InstancedBufferAttribute(new Float32Array(N * 2), 2), aInfo = new THREE.InstancedBufferAttribute(new Float32Array(N * 4), 4);
  geo.setAttribute('aRect', aRect); geo.setAttribute('aInfo', aInfo);
  B.forEach((b, i) => aRect.setXY(i, L[b.k].u0, L[b.k].u1));
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, fog: false, premultipliedAlpha: true,
    uniforms: { map: { value: atlas.tex }, uTint: { value: new THREE.Color(1, 1, 1) }, uHaze: { value: TOD.horizon }, uPaint: { value: 1 }, ...gradeUniforms(post) },
    vertexShader: /* glsl */`
      attribute vec2 aRect; attribute vec4 aInfo; varying vec2 vUv; varying vec2 vInfo;
      void main(){
        vUv = vec2(mix(aRect.x, aRect.y, aInfo.x > 0.5 ? 1.0 - uv.x : uv.x), uv.y); vInfo = aInfo.yz;
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: UNGRADE + /* glsl */`
      uniform sampler2D map; uniform vec3 uTint, uHaze; uniform float uPaint; varying vec2 vUv; varying vec2 vInfo;
      void main(){
        vec4 t = texture2D(map, vUv);
        if (t.a < 0.01) discard;
        vec3 c = pgSrgbToLin(t.rgb) * uTint;                      // (the hour's light on the painting)
        if (uPaint > 0.001) c = mix(c, ungrade(t.rgb), uPaint);    // a bright day: the painting itself
        c = mix(c, uHaze, vInfo.y);                                // the far ones in the horizon's haze
        gl_FragColor = vec4(c, 1.0) * (t.a * vInfo.x);
      }`,
  });
  const mesh = new THREE.InstancedMesh(geo, mat, N);
  mesh.frustumCulled = false; mesh.renderOrder = -4; mesh.visible = false; // (after the painted clouds: in front of them)
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), sc = new THREE.Vector3(), Y = new THREE.Vector3(0, 1, 0), fw = new THREE.Vector3(), f = {};
  let t = 0, first = true;
  return {
    mesh, count: N, list: B,
    /** camera; path; z0: the start (road distance) of the zone they float over (NaN: none near), zl its length; w: how much of them
     *  (the zone's weight in view); origin: the world's; dt */
    update(camera, path, z0, zl, w, origin, dt) {
      t += dt;
      const up = balloonsUp(TOD.t) * w * (1 - 0.85 * TOD.rain) * (1 - 0.6 * TOD.overcast);
      mesh.visible = up > 0.002 && z0 === z0;
      if (!mesh.visible) { first = true; return; }
      const cam = camera.position, sunAz = Math.atan2(TOD.sunDir.x, TOD.sunDir.z);
      camera.getWorldDirection(fw);
      const camAz = Math.atan2(fw.x, fw.z), halfH = Math.atan(Math.tan((camera.fov * D2R) / 2) * camera.aspect) + 0.15;
      // the breeze: ~1.6 m/s, the same for all (they drift together, as on a still morning)
      const dx = t * 1.1, dz = t * 1.2;
      for (let i = 0; i < N; i++) {
        const b = B[i];
        path.at(z0 + b.f * zl, f);
        const x = f.x + f.rx * b.u + dx - origin.x, z = f.z + f.rz * b.u + dz - origin.z, y = f.y + b.y + Math.sin(t * b.bob + b.ph) * 6;
        const ex = x - cam.x, ez = z - cam.z, d = Math.hypot(ex, ez), az = Math.atan2(ex, ez);
        const a = Math.min(1, Math.max(0, (up - b.rank) * 8)) * (1 - Math.min(1, Math.max(0, (d - 2600) / 600)));
        p.set(x, y, z); q.setFromAxisAngle(Y, az + Math.PI); sc.set(a > 0.001 ? b.h * L[b.k].aspect : 0, a > 0.001 ? b.h : 0, 1);
        m.compose(p, q, sc); mesh.setMatrixAt(i, m);
        // lit side towards the sun: mirrored when the sun is on its other side, only while it is out of view
        const flip = wrapA(sunAz - az) > 0;
        if (flip !== b.flip && (first || Math.abs(wrapA(az - camAz)) > halfH)) b.flip = flip;
        aInfo.setXYZ(i, b.flip ? 1 : 0, a, Math.min(0.75, Math.max(0, (d - 300) / 3200)) * (0.55 + 0.45 * (1 - TOD.bright)));
      }
      first = false;
      mesh.instanceMatrix.needsUpdate = true; aInfo.needsUpdate = true;
      // a bright day: the painting itself; dawn, dusk and grey skies: the painting in the hour's light (TOD.sunCol and the sky's
      // light, as the band's relight), a little darker
      const u = mat.uniforms, b2 = Math.min(Math.max((TOD.bright - 0.55) / 0.4, 0), 1);
      u.uPaint.value = b2 * b2 * (3 - 2 * b2);
      u.uTint.value.copy(TOD.sunCol).multiplyScalar(0.38 * TOD.sunI / 3.35).add(_h.copy(TOD.hemiSky).multiplyScalar(0.3 * TOD.hemiI / 1.35));
    },
  };
}
const _h = new THREE.Color();
