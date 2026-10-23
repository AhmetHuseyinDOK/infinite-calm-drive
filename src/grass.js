// 草原 — the meadow beside the country road, as in the reference art: blades of grass standing in the fields right up to
// the verge banks. The blades are made entirely in the vertex shader (materials.js grassMaterial); the CPU only refreshes
// GRASS_N road samples (position, heading, and on which sides there is meadow) and sizes a few instanced draws each frame.
// The draws are sub-rings at increasing distance: every blade of a fine grid out to L1, then every other blade (wider) out
// to L2, each sized to what the view can see of the field on either side — the field starts closer on the side of the
// lane we drive in, and the view widens with distance — so hardly an instance is spent on a blade nobody can see.
import * as THREE from 'three';
import { grassMaterial, GRASS_N } from './materials.js';
import { zoneW, crossingNear, riverNear } from './path.js';

const GDS = 1.6; // road sample spacing (m): GRASS_N of them cover ~75 m from just behind the camera

/** quality 'high': a blade every 15 cm out to 18 m, every other one on to 38 m; otherwise (phones, the X embed) one every
 *  18 cm out to 15 m, and on to 34 m */
export function makeGrass(quality, test = null) {
  const hi = quality === 'high';
  const [cell, L1, L2] = test || (hi ? [0.15, 18, 38] : [0.18, 15, 34]), WN = hi ? 12 : 10, WF = hi ? 16 : 14; // (test: ?grass=cell,L1,L2)
  const FINE = [4, Math.round(L1 * 0.4), Math.round(L1 * 0.65), L1].filter((v, i, a) => !i || v > a[i - 1]), COARSE = [L1, Math.round((L1 + L2) / 2), L2];
  // a blade: two segments tapering to a tip (x: side −1…1, y: 0 at the root … 1 at the tip); far away, one triangle
  const blade = (pos, idx) => { const g = new THREE.InstancedBufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); return g; };
  const B5 = [[-1, 0, 0, 1, 0, 0, -1, 0.5, 0, 1, 0.5, 0, 0, 1, 0], [0, 1, 2, 1, 3, 2, 2, 3, 4]], B3 = [[-1, 0, 0, 1, 0, 0, 0, 1, 0], [0, 1, 2]];
  const samples = new Float32Array(GRASS_N * 4), masks = new Float32Array(GRASS_N);
  const shared = {
    uG: { value: samples }, uGM: { value: masks },
    uGP: { value: new THREE.Vector4(0, 1 / GDS, 3.1, 0) },   // s of sample 0, 1 / spacing, road half-width, the camera's s
    uGQ: { value: new THREE.Vector4(0, 1.05, 3, 0) },        // the camera's u, view half-width per metre ahead, margin
    uRingD: { value: new THREE.Vector4(L1, L2, 0, 0) },
  };
  const rings = [];
  const ring = (dA, dB, coarse) => {
    const u = { uRing: { value: new THREE.Vector4(0, 0, coarse ? 2 * cell : cell, coarse) }, uRingC: { value: new THREE.Vector4(0, 0, 0, 0) } };
    const geo = coarse ? blade(...B3) : blade(...B5); geo.instanceCount = 0;
    const mesh = new THREE.Mesh(geo, grassMaterial(u, shared));
    mesh.frustumCulled = false; mesh.castShadow = false; mesh.receiveShadow = false; mesh.visible = false;
    rings.push({ mesh, u, dA, dB, size: coarse ? 2 * cell : cell, W: coarse ? WF : WN, last: dB === L1 || dB === L2 });
  };
  for (let i = 0; i < FINE.length - 1; i++) ring(FINE[i], FINE[i + 1], 0);
  for (let i = 0; i < COARSE.length - 1; i++) ring(COARSE[i], COARSE[i + 1], 1);
  // the meadow at road sample k (k · GDS m), cached by sample so zoneW() runs once per new sample (no garbage each frame):
  // its sides (1 left, 2 right, 3 both) + 4 × its density (0…15). It thins out where the countryside ends (only once
  // the other zone's ground has all but gone: the blades stand at the country's paddy level), towards a level crossing
  // and towards a river's levees, instead of stopping at a line across the field
  const kc = new Int32Array(64).fill(-2147483648), mc = new Float32Array(64), cc = new Uint8Array(64);
  const cache = k => {
    const j = k & 63;
    if (kc[j] !== k) {
      kc[j] = k; const s = k * GDS, c = crossingNear(s), r = riverNear(s), w = zoneW(s).country;
      const d = Math.min(1, Math.max(0, (w - 0.97) / 0.025)) * (c ? Math.min(1, Math.max(0, (Math.abs(s - c.s) - 13) / 7)) : 1)
        * (r ? Math.min(1, Math.max(0, (Math.abs(s - r.s) - 38) / 10)) : 1);
      mc[j] = d > 0 ? 3 + 4 * Math.round(d * 15) : 0; cc[j] = w > 0 ? 1 : 0;
    }
    return j;
  };
  const maskAt = k => mc[cache(k)], countryAt = k => cc[cache(k)];
  const f = {};
  let lastK = NaN, lastOx = NaN, lastOz = NaN, any = 0;
  return {
    meshes: rings.map(r => r.mesh),
    /** hide every blade this frame (test switch st.grass) */
    hide() { for (let i = 0; i < rings.length; i++) rings[i].mesh.visible = false; },
    /** show the meshes (for the shader warm-up behind the title screen) */
    warm(on) { for (const r of rings) { r.mesh.visible = on; if (on) { r.u.uRing.value.y = 1; r.u.uRingC.value.set(1, 1, r.W, 0); r.mesh.geometry.instanceCount = 2; } } },
    /** camS / camU: where the camera is along and across the road; ox / oz: the world origin; latK: the view's half-width
     *  per metre ahead (wider on landscape screens) */
    update(path, camS, camU, ox, oz, rw, latK) {
      const k0 = Math.floor((camS - 3) / GDS);
      if (!countryAt(k0) && !countryAt(k0 + GRASS_N - 1)) any = 0; // (no countryside in sight)
      else {
        if (k0 !== lastK || ox !== lastOx || oz !== lastOz) { // (the samples only move every GDS m, or when the world re-centres)
          lastK = k0; lastOx = ox; lastOz = oz; any = 0;
          for (let i = 0; i < GRASS_N; i++) {
            path.at((k0 + i) * GDS, f);
            samples[i * 4] = f.x - ox; samples[i * 4 + 1] = f.y; samples[i * 4 + 2] = f.z - oz; samples[i * 4 + 3] = f.h;
            any |= masks[i] = maskAt(k0 + i);
          }
        }
        shared.uGP.value.set(k0 * GDS, 1 / GDS, rw, camS); shared.uGQ.value.set(camU, latK, 3, 0);
      }
      for (let i = 0; i < rings.length; i++) {
        const r = rings[i];
        if (!any) { r.mesh.visible = false; continue; }
        // its rows (a ring's last one overlaps the next ring by a row: the shader's distance test picks one), and the
        // columns the view can see of the field on each side by the ring's far edge
        const a = Math.floor((camS + r.dA) / r.size), b = Math.floor((camS + r.dB) / r.size) + (r.last ? 1 : 0);
        const lat = latK * r.dB + 3, field = rw + 2.6;
        const cl = Math.min(r.W, Math.max(0, lat - (field + camU))), cr = Math.min(r.W, Math.max(0, lat - (field - camU)));
        const colsL = cl > 0 ? Math.ceil(cl / r.size) + 1 : 0, colsR = cr > 0 ? Math.ceil(cr / r.size) + 1 : 0;
        r.u.uRing.value.x = a; r.u.uRing.value.y = b - a; r.u.uRingC.value.set(colsL, colsR, r.W, 0);
        r.mesh.geometry.instanceCount = (b - a) * (colsL + colsR);
        r.mesh.visible = r.mesh.geometry.instanceCount > 0;
      }
    },
  };
}
