// What the car throws into the air: spray off the tyres on a wet road, fine powder on a snowy one, and the exhaust's
// breath in the cold. A small pool of soft billboards in world space, simulated on the CPU with no allocations and drawn
// in one transparent draw call, only while something is in the air. At night they're lit by the tail and brake lights
// (red) and the lamps near the car (weather.js PLIGHT). The live particles go to the GPU as uniform arrays indexed by
// gl_InstanceID: updating instanced vertex buffers every frame cost ~0.5 ms of GPU time (and the odd multi-ms stall).
import * as THREE from 'three';
import { U as MU } from './materials.js';
import { PLIGHT, PLIGHT_V } from './weather.js';

const N = 64;
// per kind: 0 water spray, 1 exhaust vapour, 2 snow powder
const DRAG = [2.2, 1.3, 2.6], GRAV = [-2.4, 0.35, -1.6];

export function makeSpray() {
  const P = new Float32Array(N * 3), V = new Float32Array(N * 3), L = new Float32Array(N * 4); // pos, vel, (age, life, size0, size1)
  const AL = new Float32Array(N), K = new Uint8Array(N), SD = new Float32Array(N);
  for (let i = 0; i < N; i++) L[i * 4] = L[i * 4 + 1] = 1; // all dead
  const base = new THREE.PlaneGeometry(1, 1), geo = new THREE.InstancedBufferGeometry();
  geo.index = base.index; geo.setAttribute('position', base.attributes.position); geo.setAttribute('uv', base.attributes.uv); geo.instanceCount = 0;
  const pa = new Float32Array(N * 4), ca = new Float32Array(N * 4); // per live particle: xyz + size; alpha, kind, seed
  const U = { uP: { value: pa }, uC: { value: ca }, uNoiseTex: MU.uNoiseTex, uAmb: { value: new THREE.Color() }, uSun: { value: new THREE.Color() }, uTail: { value: new THREE.Vector4() }, uCam: { value: new THREE.Vector3() }, ...PLIGHT };
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, fog: false, uniforms: U,
    vertexShader: /* glsl */`
      uniform vec4 uP[${N}], uC[${N}], uTail; uniform vec3 uCam; varying vec2 vUv; varying vec4 vC; varying vec3 vLit;
      ${PLIGHT_V}
      void main(){
        vec4 aP = uP[gl_InstanceID]; vUv = uv; vC = uC[gl_InstanceID];
        float near = smoothstep(4.5, 6.5, length(aP.xyz - uCam)); // it thins (and shrinks: cheap) before it reaches the camera
        vec4 mv = viewMatrix * vec4(aP.xyz, 1.0); mv.xy += position.xy * aP.w * (0.35 + 0.65 * near);
        vec3 tv = aP.xyz - uTail.xyz;
        vLit = particleLight(aP.xyz) * 0.35 + vec3(1.0, 0.12, 0.07) * uTail.w * 0.6 / (1.0 + dot(tv, tv) * 0.5); // lamps; red from the tail lights
        vC.x *= near;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */`
      uniform sampler2D uNoiseTex; uniform vec3 uAmb, uSun; varying vec2 vUv; varying vec4 vC; varying vec3 vLit;
      void main(){
        float r = length(vUv - 0.5), n = texture(uNoiseTex, vUv * 0.02 + vC.z).r; // wispy, not a disc
        float a = vC.x * (1.0 - smoothstep(0.0, 0.5, r)) * (0.3 + 1.4 * n); // (soft edges, uneven: mist, not discs)
        vec3 col = uAmb * (vC.y > 1.5 ? 1.35 : vC.y > 0.5 ? 1.1 : 1.3) + uSun * (vC.y > 0.5 ? 0.45 : 0.25) + vLit; // mist is brighter than the wet road
        gl_FragColor = vec4(col, clamp(a, 0.0, 1.0));
      }`,
  });
  const mesh = new THREE.Mesh(geo, mat); mesh.frustumCulled = false; mesh.renderOrder = 4; mesh.visible = false;
  let next = 0, accS = 0, accV = 0, wheel = 0, alive = false;
  function emit(kind, x, y, z, vx, vy, vz, life, s0, s1, a0) {
    const i = next; next = (next + 1) % N;
    P[i * 3] = x; P[i * 3 + 1] = y; P[i * 3 + 2] = z; V[i * 3] = vx; V[i * 3 + 1] = vy; V[i * 3 + 2] = vz;
    L[i * 4] = 0; L[i * 4 + 1] = life; L[i * 4 + 2] = s0; L[i * 4 + 3] = s1; AL[i] = a0; K[i] = kind; SD[i] = Math.random();
  }
  return {
    mesh,
    /** car: its group (position + yaw); spd: m/s; wet / snow: how wet / snowy the road is (0…1); cold: exhaust vapour (0…1);
     *  amb: the air's colour; sun: sunlight on it; tail: tail-light world position + strength; on: test switch */
    update(dt, car, spd, wet, snow, cold, amb, sun, tail, cam, on) {
      if (!on) { if (alive) { for (let i = 0; i < N; i++) L[i * 4] = L[i * 4 + 1]; alive = false; } mesh.visible = false; return; }
      const g = car.position, yaw = car.rotation.y, cy = Math.cos(yaw), sy = Math.sin(yaw), fx = sy * spd, fz = cy * spd;
      // (local x left, z forward → world: x·(cy, −sy) + z·(sy, cy); the car's pitch is tiny and ignored)
      const sf = Math.min(1, Math.max(0, (spd - 2) / 14)), kind = snow > 0.3 ? 2 : 0, road = kind ? snow : wet;
      accS += 24 * road * sf * dt;
      while (accS >= 1) { // off a rear tyre: back, up and out, dragged along by the car's wake at first
        accS -= 1; const side = (wheel ^= 1) ? 1 : -1, x = side * 0.67, z = -1.28 - Math.random() * 0.2, r1 = Math.random(), r2 = Math.random();
        const back = 1.6 + 1.6 * r1, up = kind ? 0.5 + 0.7 * r2 : 0.9 + 1.0 * r2, out = side * (0.3 + 0.6 * Math.random());
        emit(kind, g.x + x * cy + z * sy, g.y + 0.12, g.z - x * sy + z * cy, fx * 0.55 - sy * back + out * cy, up, fz * 0.55 - cy * back - out * sy,
          kind ? 0.45 + 0.3 * r1 : 0.55 + 0.35 * r1, 0.2 + 0.1 * r2, kind ? 0.7 + 0.35 * r2 : 0.8 + 0.4 * r2, (kind ? 0.5 : 0.5) * (0.5 + 0.5 * sf) * Math.min(1, road * 1.5));
      }
      accV += (5 + 4 * sf) * cold * dt;
      while (accV >= 1) { // a puff from the exhaust (rear right)
        accV -= 1; const r1 = Math.random();
        emit(1, g.x - 0.42 * cy - 1.78 * sy, g.y + 0.26, g.z + 0.42 * sy - 1.78 * cy, fx * 0.5 - sy * 0.8, 0.25 + 0.2 * r1, fz * 0.5 - cy * 0.8, 1.3 + 0.6 * r1, 0.14, 0.8 + 0.4 * Math.random(), 0.32 * Math.min(1, cold * 1.5));
      }
      // move them, fade them, and pack the live ones for the GPU
      let n = 0;
      const d0 = Math.exp(-DRAG[0] * dt), d1 = Math.exp(-DRAG[1] * dt), d2 = Math.exp(-DRAG[2] * dt);
      for (let i = 0; i < N; i++) {
        const i4 = i * 4; if (L[i4] >= L[i4 + 1]) continue;
        const age = (L[i4] += dt), life = L[i4 + 1]; if (age >= life) continue;
        const k = K[i], dec = k === 0 ? d0 : k === 1 ? d1 : d2, i3 = i * 3;
        const ex = P[i3] - cam.x, ey = P[i3 + 1] - cam.y, ez = P[i3 + 2] - cam.z;
        if (ex * ex + ey * ey + ez * ez < 20.25) { L[i4] = life; continue; } // within 4.5 m of the camera: gone (no big quads)
        V[i3] *= dec; V[i3 + 1] = V[i3 + 1] * dec + GRAV[k] * dt; V[i3 + 2] *= dec;
        P[i3] += V[i3] * dt; P[i3 + 1] = Math.max(g.y + 0.05, P[i3 + 1] + V[i3 + 1] * dt); P[i3 + 2] += V[i3 + 2] * dt;
        const x = age / life, o = n * 4;
        pa[o] = P[i3]; pa[o + 1] = P[i3 + 1]; pa[o + 2] = P[i3 + 2]; pa[o + 3] = L[i4 + 2] + (L[i4 + 3] - L[i4 + 2]) * Math.sqrt(x);
        ca[o] = AL[i] * Math.min(1, x * 6) * (1 - x) * (1 - x); ca[o + 1] = k; ca[o + 2] = SD[i]; n++;
      }
      alive = n > 0; mesh.visible = alive; geo.instanceCount = n;
      if (alive) {
        U.uAmb.value.copy(amb); U.uSun.value.copy(sun); U.uTail.value.copy(tail); U.uCam.value.copy(cam);
      }
    },
    shift(dx, dz) { for (let i = 0; i < N; i++) { P[i * 3] -= dx; P[i * 3 + 2] -= dz; } },
  };
}
