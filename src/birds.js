// Birds: little flocks crossing the sky by day, crows heading home at dusk, gulls circling over the beach.
// One instanced mesh; wings flap in the vertex shader.
import * as THREE from 'three';
import { TOD } from './sky.js';

const MAX = 72;

function birdGeometry() {
  // a flat bird seen from below/side: body diamond + two wings; aWing = how much a vertex flaps (0 body … 1 tip)
  const P = [], Wg = [];
  const tri = (a, b, c, wa, wb, wc) => { P.push(...a, ...b, ...c); Wg.push(wa, wb, wc); };
  // body (forward = +Z)
  tri([0, 0, 0.45], [0.07, 0, 0], [0, 0.03, -0.35], 0, 0, 0); tri([0, 0, 0.45], [0, 0.03, -0.35], [-0.07, 0, 0], 0, 0, 0);
  tri([0, -0.07, 0.4], [0, 0.07, 0.3], [0, 0.02, -0.4], 0, 0, 0); // keel: a vertical sliver so the body has a side profile
  tri([0, 0.03, -0.35], [0.12, 0, -0.55], [-0.12, 0, -0.55], 0, 0, 0); // tail
  for (const s of [1, -1]) { // wings: inner + outer panel, swept back a little
    tri([0.05 * s, 0, 0.18], [0.5 * s, 0, 0.05], [0.05 * s, 0, -0.12], 0, 0.55, 0);
    tri([0.5 * s, 0, 0.05], [0.95 * s, 0, -0.12], [0.45 * s, 0, -0.1], 0.55, 1, 0.5);
    tri([0.05 * s, 0, -0.12], [0.5 * s, 0, 0.05], [0.45 * s, 0, -0.1], 0, 0.55, 0.5);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
  g.setAttribute('aWing', new THREE.Float32BufferAttribute(Wg, 1));
  return g;
}

export function makeBirds() {
  const geo = birdGeometry();
  const aCol = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 3), 3), aFlap = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 2), 2);
  geo.setAttribute('aCol', aCol); geo.setAttribute('aFlap', aFlap);
  const mat = new THREE.ShaderMaterial({
    side: THREE.DoubleSide, fog: false,
    uniforms: { uTime: { value: 0 }, uFog: { value: TOD.fog }, uFogD: { value: 0.002 }, uCam: { value: new THREE.Vector3() } },
    vertexShader: /* glsl */`
      attribute float aWing; attribute vec3 aCol; attribute vec2 aFlap; uniform float uTime; varying vec3 vCol; varying float vD; uniform vec3 uCam;
      void main(){
        vec3 p = position;
        float f = sin(uTime * aFlap.x + aFlap.y);
        float glide = step(0.5, fract(aFlap.y * 0.37 + uTime * 0.05)) * step(aFlap.x, 6.0); // big birds glide now and then
        f = mix(f, 0.15, glide);
        p.y += aWing * (0.32 + f * 0.42);           // a V-shaped dihedral reads from below and from the side
        p.x *= 1.0 - aWing * abs(f) * 0.12;
        vec4 w = modelMatrix * instanceMatrix * vec4(p, 1.0);
        vCol = aCol; vD = length(w.xyz - uCam);
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,
    fragmentShader: /* glsl */`
      uniform vec3 uFog; uniform float uFogD; varying vec3 vCol; varying float vD;
      void main(){ float fd = vD * uFogD; gl_FragColor = vec4(mix(vCol, uFog, 1.0 - exp(-fd * fd)), 1.0); }`,
  });
  const mesh = new THREE.InstancedMesh(geo, mat, MAX);
  mesh.frustumCulled = false; mesh.count = 0;

  const flocks = [];
  const timers = { small: 6, crow: 4 };
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(0, 0, 0, 'YXZ'), v = new THREE.Vector3(), sc = new THREE.Vector3();
  const used = () => flocks.reduce((n, f) => n + f.birds.length, 0);

  function spawn(kind, cam, fwd, right) {
    const n = kind === 'small' ? 6 + Math.floor(Math.random() * 7) : kind === 'crow' ? 3 + Math.floor(Math.random() * 5) : 4;
    if (used() + n > MAX) return;
    const ahead = 45 + Math.random() * 85, side = (Math.random() - 0.5) * 120, dir = Math.random() < 0.5 ? 1 : -1;
    const c = new THREE.Vector3().copy(cam).addScaledVector(fwd, ahead).addScaledVector(right, side - dir * 75);
    c.y = cam.y + (kind === 'crow' ? 18 + Math.random() * 24 : 10 + Math.random() * 18);
    const speed = kind === 'small' ? 11 + Math.random() * 4 : 8 + Math.random() * 3;
    const vel = new THREE.Vector3().copy(right).multiplyScalar(dir * speed).addScaledVector(fwd, (Math.random() - 0.3) * speed * 0.6);
    const size = kind === 'small' ? 0.8 : 1.45;
    const birds = Array.from({ length: n }, (_, i) => ({ off: new THREE.Vector3((Math.random() - 0.5) * 11, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 11), ph: Math.random() * 6.28, fq: kind === 'small' ? 15 + Math.random() * 5 : 6 + Math.random() * 1.5, w: Math.random() * 6.28 }));
    flocks.push({ kind, c, vel, birds, size, life: 60 });
  }
  function gulls(cam, fwd, right, seaSide) {
    if (flocks.some(f => f.kind === 'gull')) return;
    if (used() + 4 > MAX) return;
    const c = new THREE.Vector3().copy(cam).addScaledVector(fwd, 70).addScaledVector(right, -seaSide * 45); c.y = cam.y + 18;
    const birds = Array.from({ length: 4 }, (_, i) => ({ off: new THREE.Vector3(), ph: Math.random() * 6.28, fq: 5.5, w: (i / 4) * 6.28, r: 18 + Math.random() * 22, h: Math.random() * 10 }));
    flocks.push({ kind: 'gull', c, vel: new THREE.Vector3(), birds, size: 1.25, life: 1e9 });
  }

  return {
    mesh,
    update(dt, t, cam, fwd, right, w, light, rain, carPos) {
      mat.uniforms.uTime.value = t; mat.uniforms.uCam.value.copy(cam);
      const calm = light > 0.35 && rain < 0.3, dusk = TOD.warm > 0.25 && TOD.sunEl < 0.6 && light > 0.2;
      if (calm && (timers.small -= dt) < 0) { timers.small = 22 + Math.random() * 35; if (w.coast + w.bosphorus + w.galata < 0.6) spawn('small', cam, fwd, right); }
      if ((dusk || (calm && w.city + w.country > 0.6 && Math.random() < 0.0004)) && (timers.crow -= dt) < 0) { timers.crow = dusk ? 14 + Math.random() * 18 : 60; spawn('crow', cam, fwd, right); }
      if (w.coast + w.bosphorus + w.galata > 0.6 && calm) gulls(cam, fwd, right, 1); // (the coast's, the Bosphorus's and the Golden Horn's gulls)
      const silhouette = [0.1 + 0.08 * light, 0.11 + 0.09 * light, 0.15 + 0.1 * light];
      let k = 0;
      for (let i = flocks.length - 1; i >= 0; i--) {
        const f = flocks[i];
        if (f.kind === 'gull') {
          // circle over the beach, drifting along with the car; leave when the coast ends
          f.c.lerp(v.copy(carPos).addScaledVector(fwd, 60).addScaledVector(right, -42).setY(carPos.y + 16), Math.min(1, dt * 0.25));
          if (w.coast + w.bosphorus + w.galata < 0.4 || !calm) { f.life = Math.min(f.life, 8); f.c.y += dt * 6; }
        } else f.c.addScaledVector(f.vel, dt);
        f.life -= dt;
        if (f.life < 0 || (f.kind !== 'gull' && f.c.distanceTo(cam) > 300)) { flocks.splice(i, 1); continue; }
        for (const b of f.birds) {
          if (k >= MAX) break;
          let px, py, pz, yaw;
          if (f.kind === 'gull') {
            b.w += dt * (14 / b.r);
            px = f.c.x + Math.cos(b.w) * b.r; pz = f.c.z + Math.sin(b.w) * b.r; py = f.c.y + b.h + Math.sin(t * 0.4 + b.ph) * 2;
            yaw = Math.atan2(-Math.sin(b.w), Math.cos(b.w));
          } else {
            px = f.c.x + b.off.x + Math.sin(t * 0.7 + b.ph) * 1.2; py = f.c.y + b.off.y + Math.sin(t * 1.1 + b.ph) * 0.6; pz = f.c.z + b.off.z;
            yaw = Math.atan2(f.vel.x, f.vel.z);
          }
          e.set(0, yaw, Math.sin(t + b.ph) * 0.15); q.setFromEuler(e); sc.setScalar(f.size);
          m4.compose(v.set(px, py, pz), q, sc); mesh.setMatrixAt(k, m4);
          const col = f.kind === 'gull' ? [0.92 * (0.5 + 0.5 * light), 0.93 * (0.5 + 0.5 * light), 0.95 * (0.5 + 0.5 * light)] : f.kind === 'crow' ? [0.05, 0.05, 0.07] : silhouette;
          aCol.setXYZ(k, col[0], col[1], col[2]); aFlap.setXY(k, b.fq, b.ph);
          k++;
        }
      }
      mesh.count = k;
      mesh.instanceMatrix.needsUpdate = true; aCol.needsUpdate = true; aFlap.needsUpdate = true;
    },
    setFog(d) { mat.uniforms.uFogD.value = d; },
    shift(dx, dz) { for (const f of flocks) { f.c.x -= dx; f.c.z -= dz; } },
  };
}
