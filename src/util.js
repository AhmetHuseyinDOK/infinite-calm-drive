import * as THREE from 'three';

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smooth = t => t * t * (3 - 2 * t);
export const sstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };

let SEED = 1337;
export function setSeed(s) { SEED = s | 0; }
export function hash(n) {
  n = (n ^ SEED) | 0;
  n = Math.imul(n ^ (n >>> 15), 0x2c1b3c6d);
  n = Math.imul(n ^ (n >>> 12), 0x297a2d39);
  n ^= n >>> 15;
  return (n >>> 0) / 4294967296;
}
export const hash2 = (a, b) => hash(Math.imul(a | 0, 73856093) ^ Math.imul(b | 0, 19349663));
export function noise1(x, k = 0) { const i = Math.floor(x), f = x - i, u = f * f * (3 - 2 * f); return lerp(hash2(i, k), hash2(i + 1, k), u); }
export const fbm1 = (x, k = 0) => noise1(x, k) * 0.55 + noise1(x * 2.03, k + 7) * 0.3 + noise1(x * 4.1, k + 13) * 0.15;

/** mulberry32 — small seeded PRNG */
export function rng(seed) {
  let a = seed >>> 0;
  const r = () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  r.range = (a, b) => a + (b - a) * r();
  r.int = (a, b) => Math.floor(a + (b - a + 1) * r());
  r.pick = arr => arr[Math.floor(r() * arr.length)];
  r.chance = p => r() < p;
  return r;
}

/** sRGB hex → linear [r,g,b] (what vertex colours and shaders want) */
const _c = new THREE.Color();
export const C = hex => { _c.set(hex); return [_c.r, _c.g, _c.b]; };
export const mixC = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
export const mulC = (a, k) => [a[0] * k, a[1] * k, a[2] * k];
export const vec3 = a => new THREE.Vector3(a[0], a[1], a[2]);
