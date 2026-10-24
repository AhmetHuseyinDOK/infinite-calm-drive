// 波しぶき: the surf breaking over the tetrapod heaps at the foot of the coast's sea wall, as in the reference art. Each
// heap throws up spray when a wave reaches it: the same waves that break white along the wall (sea.js SHORE_PHASE: a
// burst with each big wave and a smaller one halfway to the next), each hitting a little harder or softer. All of it on the
// GPU: every card faces the camera and its flight is worked out in the vertex shader from the time and the wave's phase,
// so nothing is updated on the CPU and no buffer changes. A chunk's spray is one mesh, built with the chunk (chunks.js
// placeCoast) and hidden with its other small details far ahead.
// As the painting draws it (and as anime background painters do: a burst like a manga needle-burst, its strokes thinning
// and rounding off at the tips, white with light-blue shading): each burst point throws up
//  - a sheet of white lace from the water at the heap's face, a fan of streaks with ragged tips, rising fast and then
//    eroding into holes and drops as it falls apart (stepped alpha erosion, crisp edges), lit white on top, light blue below;
//  - a few droplets, little round drops flung up and out that fall back into the sea.
// Lit as the shore's foam (sea.js SEA_U): the painting's white on a bright day, at night only the moon's light (never glows).
import * as THREE from 'three';
import { GLSL_NOISE } from './materials.js';
import { SEA_U, SHORE_PHASE, SW } from './sea.js';

/** burst points per 7 m of heap, and droplets per burst (main.js: fewer on phones) */
export const SURF = { n: 8, drops: 4 };

export function surfMaterial() {
  return new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, fog: false,
    uniforms: SEA_U,
    // position: where the burst leaves the water (at the heap's face to the sea); aB: the way out to sea (x, z), how far out the
    // heap's face is from the wall (d: its wave's phase), the burst's seed; aC: the card's corner, and its road distance s
    // (the wave reaches the heap's bursts one after another as it runs along the wall); aK: 0 the lace sheet, 1… a droplet
    vertexShader: /* glsl */`
      uniform float uTime, uVis; attribute vec4 aB; attribute vec3 aC; attribute float aK;
      varying vec2 vUv; varying vec4 vK;
      ${SHORE_PHASE}
      float h11(float p){ p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
      void main(){
        float seed = aB.w, s = aC.z;
        // two bursts to each big wave: its own, and a smaller one halfway to the next (the waves between, as the shore's)
        float ph = (shorePhase(s, aB.z) - 0.02 - 0.08 * fract(seed * 7.13)) * 2.0; // (each a moment after the wave arrives)
        float wave = floor(ph), str = h11(wave * 7.37 + floor(s / 12.0) * 1.13) * (1.0 - 0.4 * mod(wave, 2.0)); // how hard it hits here
        float age = fract(ph) * ${(SW.T / 2).toFixed(3)};
        float h1 = fract(seed * 13.7), h2 = fract(seed * 71.3), h3 = fract(seed * 3.31), h4 = fract(seed * 27.9);
        vec3 base = position - vec3(0.0, 0.3, 0.0);                                 // (the water's surface)
        float H = (0.8 + 1.2 * h1) * (0.6 + 0.6 * str), k, a;
        vec2 half2;
        vec3 p;
        if (aK < 0.5) {
          // the lace sheet: up fast (most of its height in a fifth of a second), then eroding as it falls back
          float dur = 1.0 + 0.6 * str; k = age / dur;
          float g = 1.0 - (1.0 - min(age / 0.28, 1.0)) * (1.0 - min(age / 0.28, 1.0));
          float hh = H * g * (1.0 - 0.25 * smoothstep(0.5, 1.0, k));
          half2 = vec2(H * (0.5 + 0.3 * h4), 0.5 * hh);
          p = base - vec3(0.0, 0.35 * H * smoothstep(0.55, 1.0, k), 0.0);
          a = smoothstep(0.0, 0.05, k) * (1.0 - smoothstep(0.88, 1.0, k));
        } else {
          // a droplet: flung up and out from the sheet's upper half, falling back into the sea
          float j = aK * 1.618, d1 = fract(seed * 91.7 + j * 0.37), d2 = fract(seed * 37.1 + j * 0.71), d3 = fract(seed * 17.9 + j * 0.13), d4 = fract(seed * 53.3 + j * 0.53);
          float t = age - 0.08 - 0.12 * d1; k = t / 1.3;
          float up = (2.2 + 2.6 * d2) * (0.6 + 0.5 * str), out1 = (0.6 + 1.6 * d3);
          vec2 o = aB.xy, sd = vec2(-o.y, o.x) * (d4 - 0.5) * 2.6;
          vec2 hv = o * out1 * (d1 - 0.35) + sd;
          p = base + vec3((d4 - 0.5) * H * 0.6, H * (0.25 + 0.35 * d2), 0.0) + vec3(hv.x * t, up * t - 4.9 * t * t, hv.y * t);
          float r = (0.035 + 0.05 * d3) * (0.7 + 0.5 * str);
          half2 = vec2(r);
          a = step(0.0, t) * step(-0.15, p.y - base.y) * (1.0 - smoothstep(0.85, 1.0, k));
        }
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float near = smoothstep(2.5, 7.0, -mv.z);   // (right by the camera it thins out and shrinks: big cards cost fill)
        // (droplets fade out before they shrink under a pixel or two far off)
        float far = aK < 0.5 ? 1.0 : 1.0 - smoothstep(45.0, 90.0, -mv.z);
        vec2 off = aC.xy * half2 * (0.4 + 0.6 * near);
        if (aK < 0.5) off.y += half2.y * (0.4 + 0.6 * near);   // (the sheet stands on its foot)
        mv.xy += off;
        vUv = aC.xy; vK = vec4(k, uVis * near * far * a, seed, aK);
        gl_Position = k < 1.0 && str > 0.25 && vK.y > 0.01 ? projectionMatrix * mv : vec4(2.0, 2.0, 2.0, 1.0);
      }`,
    fragmentShader: /* glsl */`
      uniform vec3 uFoamLit, uFoamShade; varying vec2 vUv; varying vec4 vK;
      ${GLSL_NOISE}
      vec4 vnoise4g(vec2 p, vec2 gx, vec2 gy){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, gx / 256.0, gy / 256.0); }
      void main(){
        if (vK.w > 0.5) {
          // a droplet: a crisp round drop, white on top, light blue below
          float r = length(vUv), fw = fwidth(r) * 1.2;
          float a = (1.0 - smoothstep(1.0 - fw, 1.0, r)) * vK.y;
          if (a < 0.01) discard;
          gl_FragColor = vec4(mix(uFoamShade, uFoamLit, 0.55 + 0.45 * vUv.y), a);
          return;
        }
        // the lace sheet: a fan of streaks from its foot (the card's bottom middle), each its own length, ragged and spiky at
        // the tips; lace holes open and the tips break into drops as it erodes (k: its age, 0…1)
        vec2 q = vec2(vUv.x, (vUv.y + 1.0) * 0.5);       // (x −1…1 across, y 0…1 up from the foot)
        float th = atan(q.x, q.y * 1.15 + 0.05), r = length(vec2(q.x * 0.85, q.y));
        float sd = vK.z * 97.0;
        // (the noise's footprint first: taken before any branch or discard)
        vec2 pa = vec2(th * 3.2 + sd, sd * 0.37), pb = vUv * vec2(3.4, 4.6) + sd, pc = vUv * vec2(7.5, 9.0) + sd * 1.7;
        vec2 ax = dFdx(pa), ay = dFdy(pa), bx = dFdx(pb), by = dFdy(pb), cx = dFdx(pc), cy = dFdy(pc);
        float fr = fwidth(r) + 1e-4;
        if (abs(th) > 1.35 || vK.y < 0.01) discard;
        vec4 nA = vnoise4g(pa, ax, ay), nB = vnoise4g(pb, bx, by), nC = vnoise4g(pc, cx, cy);
        // each streak's reach (a ridged noise along the fan: spikes), shorter towards the fan's sides
        float rid = 1.0 - abs(2.0 * nA.x - 1.0);
        float reach = (0.5 + 0.5 * rid * rid + 0.12 * (nA.y - 0.5)) * (1.0 - 0.42 * th * th);
        float k = vK.x, ero = smoothstep(0.15, 1.0, k);
        // lace: holes that open as it erodes, most where it is thin (up towards the tips)
        float lace = nB.x * 0.6 + nC.x * 0.4;
        float m = (reach - r) * 3.0 + (lace - 0.5) * (0.9 + 1.4 * ero) - ero * (1.6 + 1.2 * r);
        float a = smoothstep(-fr * 3.0, fr * 3.0, m) * vK.y;
        if (a < 0.01) discard;
        // white on top and at the streaks' tips, its foot and its thick middle in a light blue shade
        float lit = clamp(0.2 + 1.2 * r - 0.35 * smoothstep(0.0, 0.6, m) + 0.3 * (nC.y - 0.5), 0.0, 1.0);
        gl_FragColor = vec4(mix(uFoamShade, uFoamLit, lit), a);
      }`,
  });
}

/** a chunk's spray as one mesh: P is a flat list of x, y, z (chunk frame), out-to-sea x, z, d, seed, s for each burst point;
 *  each throws up a lace sheet and SURF.drops droplets (cards, all of them flown by the vertex shader) */
export function surfGeometry(P) {
  const n = P.length / 8; if (!n) return null;
  const per = 1 + SURF.drops, nc = n * per;
  const pos = new Float32Array(nc * 12), b = new Float32Array(nc * 16), cc = new Float32Array(nc * 12), kk = new Float32Array(nc * 4), idx = new Uint16Array(nc * 6);
  const CX = [-1, 1, 1, -1], CY = [-1, -1, 1, 1];
  let x0 = Infinity, y0 = Infinity, z0 = Infinity, x1 = -Infinity, y1 = -Infinity, z1 = -Infinity;
  for (let i = 0; i < n; i++) {
    const o = i * 8;
    for (let c = 0; c < per; c++) {
      const q = i * per + c;
      for (let k = 0; k < 4; k++) {
        const v = q * 4 + k;
        pos[v * 3] = P[o]; pos[v * 3 + 1] = P[o + 1]; pos[v * 3 + 2] = P[o + 2];
        b[v * 4] = P[o + 3]; b[v * 4 + 1] = P[o + 4]; b[v * 4 + 2] = P[o + 5]; b[v * 4 + 3] = P[o + 6];
        cc[v * 3] = CX[k]; cc[v * 3 + 1] = CY[k]; cc[v * 3 + 2] = P[o + 7]; kk[v] = c;
      }
      idx.set([q * 4, q * 4 + 1, q * 4 + 2, q * 4, q * 4 + 2, q * 4 + 3], q * 6);
    }
    x0 = Math.min(x0, P[o]); y0 = Math.min(y0, P[o + 1]); z0 = Math.min(z0, P[o + 2]); x1 = Math.max(x1, P[o]); y1 = Math.max(y1, P[o + 1]); z1 = Math.max(z1, P[o + 2]);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('aB', new THREE.BufferAttribute(b, 4)); g.setAttribute('aC', new THREE.BufferAttribute(cc, 3));
  g.setAttribute('aK', new THREE.BufferAttribute(kk, 1));
  g.setIndex(new THREE.BufferAttribute(idx, 1));
  // (the sheets stand up to ~2.1 m tall and ~1.4 m wide; the drops fly up to ~3 m and ~3 m out)
  g.boundingBox = new THREE.Box3(new THREE.Vector3(x0 - 4, y0 - 1, z0 - 4), new THREE.Vector3(x1 + 4, y1 + 4, z1 + 4));
  g.boundingSphere = g.boundingBox.getBoundingSphere(new THREE.Sphere());
  return g;
}
