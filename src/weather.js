// Weather: clear → cloudy → gentle rain, with slow transitions, plus GPU rain streaks around the camera.
import * as THREE from 'three';
import { clamp } from './util.js';

const KINDS = { clear: [0, 0], cloudy: [0.62, 0], rain: [1, 1] };

export function makeWeather(QS) {
  const forced = QS.get('weather');
  const W = { mode: KINDS[forced] ? forced : 'auto', kind: KINDS[forced] ? forced : 'clear', ov: 0, rain: 0, t: 0, next: 140 + Math.random() * 160 };
  if (KINDS[forced]) { W.ov = KINDS[forced][0]; W.rain = KINDS[forced][1]; }
  return {
    W,
    update(dt) {
      W.t += dt;
      if (W.mode === 'auto' && W.t > W.next) {
        W.t = 0; W.next = 150 + Math.random() * 260;
        const r = Math.random();
        W.kind = W.kind === 'clear' ? (r < 0.5 ? 'cloudy' : r < 0.72 ? 'rain' : 'clear')
          : W.kind === 'cloudy' ? (r < 0.5 ? 'clear' : r < 0.85 ? 'rain' : 'cloudy')
          : (r < 0.55 ? 'cloudy' : 'clear');
      }
      const [to, tr] = KINDS[W.kind];
      W.ov += clamp(to - W.ov, -dt / 28, dt / 28);
      const rt = W.ov > 0.75 ? tr : 0; // rain only once the sky has greyed over
      W.rain += clamp(rt - W.rain, -dt / 14, dt / 16);
    },
    /** button / R key: auto → clear → cloudy → rain → auto … */
    cycle() {
      const order = ['auto', 'clear', 'cloudy', 'rain'];
      W.mode = order[(order.indexOf(W.mode) + 1) % order.length];
      if (W.mode !== 'auto') W.kind = W.mode; else W.t = 0;
      return W.mode;
    },
  };
}

export function makeSnow() { // soft flakes drifting down around the camera
  const N = 2400, BOX = new THREE.Vector3(42, 22, 42);
  const base = new THREE.PlaneGeometry(1, 1);
  const geo = new THREE.InstancedBufferGeometry();
  geo.index = base.index; geo.setAttribute('position', base.attributes.position); geo.setAttribute('uv', base.attributes.uv);
  const off = new Float32Array(N * 4);
  for (let i = 0; i < N * 4; i++) off[i] = Math.random();
  geo.setAttribute('aOff', new THREE.InstancedBufferAttribute(off, 4));
  geo.instanceCount = N;
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, fog: false,
    uniforms: { uTime: { value: 0 }, uCam: { value: new THREE.Vector3() }, uAmt: { value: 0 }, uBox: { value: BOX }, uCol: { value: new THREE.Color(1, 1, 1) } },
    vertexShader: /* glsl */`
      attribute vec4 aOff; uniform float uTime, uAmt; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv;
      void main(){
        vUv = uv;
        if (aOff.w > uAmt) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); vA = 0.0; return; }
        float ph = aOff.w * 40.0;
        vec3 p = aOff.xyz * uBox + vec3(sin(uTime * 0.6 + ph) * 0.7 + uTime * 0.35, -uTime * (0.8 + aOff.w * 0.8), cos(uTime * 0.45 + ph * 1.3) * 0.6);
        vec3 w = uCam + mod(p - uCam, uBox) - uBox * 0.5;
        vec3 toCam = normalize(uCam - w), right = normalize(cross(vec3(0.0, 1.0, 0.0), toCam)), up = cross(toCam, right);
        float size = 0.045 + fract(ph) * 0.05;
        vec3 pos = w + (right * position.x + up * position.y) * size;
        float d = length(uCam - w);
        vA = (1.0 - smoothstep(9.0, 21.0, d)) * smoothstep(0.5, 1.6, d);
        gl_Position = projectionMatrix * viewMatrix * vec4(pos, 1.0);
      }`,
    fragmentShader: /* glsl */`
      uniform vec3 uCol; varying float vA; varying vec2 vUv;
      void main(){ float r = length(vUv - 0.5); gl_FragColor = vec4(uCol, vA * 0.85 * (1.0 - smoothstep(0.25, 0.5, r))); }`,
  });
  const mesh = new THREE.Mesh(geo, mat); mesh.frustumCulled = false; mesh.renderOrder = 5;
  return {
    mesh,
    update(cam, t, amt, light) {
      mesh.visible = amt > 0.01;
      mat.uniforms.uTime.value = t; mat.uniforms.uCam.value.copy(cam); mat.uniforms.uAmt.value = amt;
      mat.uniforms.uCol.value.setRGB(0.62 + 0.38 * light, 0.66 + 0.34 * light, 0.78 + 0.22 * light);
    },
  };
}

export function makeRain() {
  const N = 2600, BOX = new THREE.Vector3(46, 24, 46);
  const base = new THREE.PlaneGeometry(1, 1); base.translate(0, 0.5, 0);
  const geo = new THREE.InstancedBufferGeometry();
  geo.index = base.index; geo.setAttribute('position', base.attributes.position); geo.setAttribute('uv', base.attributes.uv);
  const off = new Float32Array(N * 4);
  for (let i = 0; i < N; i++) { off[i * 4] = Math.random(); off[i * 4 + 1] = Math.random(); off[i * 4 + 2] = Math.random(); off[i * 4 + 3] = Math.random(); }
  geo.setAttribute('aOff', new THREE.InstancedBufferAttribute(off, 4));
  geo.instanceCount = N;
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, fog: false,
    uniforms: { uTime: { value: 0 }, uCam: { value: new THREE.Vector3() }, uRain: { value: 0 }, uBox: { value: BOX }, uCol: { value: new THREE.Color(0.8, 0.85, 0.95) } },
    vertexShader: /* glsl */`
      attribute vec4 aOff; uniform float uTime, uRain; uniform vec3 uCam, uBox; varying float vA; varying vec2 vUv;
      void main(){
        vUv = uv;
        if (aOff.w > uRain) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); vA = 0.0; return; }
        float fall = 10.0 + aOff.w * 4.0;
        vec3 p = aOff.xyz * uBox + vec3(uTime * 1.6, -uTime * fall, uTime * 0.6);
        vec3 w = uCam + mod(p - uCam, uBox) - uBox * 0.5;
        vec3 toCam = normalize(uCam - w); vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), toCam));
        vec3 up = normalize(vec3(0.12, 1.0, 0.05));
        vec3 pos = w + right * (position.x * 0.018) + up * (position.y * 0.62);
        float d = length(uCam - w);
        vA = (1.0 - smoothstep(6.0, 23.0, d)) * smoothstep(0.6, 2.0, d);
        gl_Position = projectionMatrix * viewMatrix * vec4(pos, 1.0);
      }`,
    fragmentShader: /* glsl */`
      uniform vec3 uCol; varying float vA; varying vec2 vUv;
      void main(){ gl_FragColor = vec4(uCol, vA * 0.32 * smoothstep(0.0, 0.35, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y))); }`,
  });
  const mesh = new THREE.Mesh(geo, mat); mesh.frustumCulled = false; mesh.renderOrder = 5;
  return {
    mesh,
    update(cam, t, rain, light) {
      mesh.visible = rain > 0.01;
      mat.uniforms.uTime.value = t; mat.uniforms.uCam.value.copy(cam); mat.uniforms.uRain.value = rain;
      mat.uniforms.uCol.value.setRGB(0.55 + 0.35 * light, 0.6 + 0.35 * light, 0.7 + 0.3 * light);
    },
  };
}
