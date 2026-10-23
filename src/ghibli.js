// Ghibli-style tree crowns from painted leaf clusters: the cluster atlas.
// A crown is a few dozen camera-facing billboards ("clusters", props.js treeGhibli), each a painted leafy dome. Every
// texel of the atlas packs the cluster's own surface normal (R, G), a painted albedo (B: leaf-to-leaf variation, darker
// gaps, a darker lower rim) and coverage (A), so one texture read lets every cluster catch the real sun: a lit cap, a mid
// band and a shaded underside, as in the paintings, instead of the flat speckle of an unlit card (materials.js
// makeGhibliLeaf lights them).
// The clusters are painted offline (~/cdtest/gt/bake: R1's painter, a z-buffered pile of egg-shaped leaves at 2×
// supersampling; painting them at load took 3–9 s) and shipped as a PNG in assets/trees/, read here as raw bytes: it is
// packed data, not colour, and a browser's image decoder may premultiply its alpha, which zeroes the normals of every
// transparent texel and brings back dark fringes in the mips. If the atlas can't be loaded the trees keep their old crowns.
import * as THREE from 'three';
import { ASSETS, orNull } from './painted.js';

/** An 8-bit RGBA, non-interlaced PNG (what the bake writes) as raw bytes, bottom row first (v up, as a DataTexture
 *  wants). Inflated with the browser's DecompressionStream; throws on anything else. */
export async function decodePNG(buf) {
  const b = new Uint8Array(buf), dv = new DataView(buf);
  const SIG = [137, 80, 78, 71, 13, 10, 26, 10];
  if (b.length < 33 || SIG.some((v, i) => b[i] !== v)) throw new Error('not a PNG');
  let p = 8, w = 0, h = 0; const idat = [];
  while (p + 12 <= b.length) {
    const len = dv.getUint32(p), type = String.fromCharCode(b[p + 4], b[p + 5], b[p + 6], b[p + 7]);
    if (p + 12 + len > b.length) throw new Error('PNG truncated');
    if (type === 'IHDR') {
      w = dv.getUint32(p + 8); h = dv.getUint32(p + 12);
      if (b[p + 16] !== 8 || b[p + 17] !== 6 || b[p + 20] !== 0) throw new Error('PNG is not 8-bit RGBA');
    } else if (type === 'IDAT') idat.push(b.subarray(p + 8, p + 8 + len));
    else if (type === 'IEND') break;
    p += 12 + len;
  }
  if (!w || !h || !idat.length) throw new Error('PNG has no image');
  const z = new Uint8Array(await new Response(new Blob(idat).stream().pipeThrough(new DecompressionStream('deflate'))).arrayBuffer());
  const S = w * 4, out = new Uint8Array(S * h), zero = new Uint8Array(S);
  if (z.length < (S + 1) * h) throw new Error('PNG data short');
  for (let y = 0; y < h; y++) { // undo each row's filter (4 bytes per pixel); the image's top row goes last
    const f = z[y * (S + 1)], s = y * (S + 1) + 1, o = (h - 1 - y) * S;
    const U = y ? out.subarray(o + S, o + 2 * S) : zero, R = out.subarray(o, o + S), X = z.subarray(s, s + S); // (U: the row above it in the image)
    if (f === 0) R.set(X);
    else if (f === 1) { for (let i = 0; i < 4; i++) R[i] = X[i]; for (let i = 4; i < S; i++) R[i] = X[i] + R[i - 4]; }
    else if (f === 2) for (let i = 0; i < S; i++) R[i] = X[i] + U[i];
    else if (f === 3) { for (let i = 0; i < 4; i++) R[i] = X[i] + (U[i] >> 1); for (let i = 4; i < S; i++) R[i] = X[i] + ((R[i - 4] + U[i]) >> 1); }
    else if (f === 4) {
      for (let i = 0; i < 4; i++) R[i] = X[i] + U[i];
      for (let i = 4; i < S; i++) {
        const a = R[i - 4], b = U[i], c = U[i - 4], pa = Math.abs(b - c), pb = Math.abs(a - c), pc = Math.abs(a + b - c - c);
        R[i] = X[i] + (pa <= pb && pa <= pc ? a : pb <= pc ? b : c);
      }
    } else throw new Error('PNG filter ' + f);
  }
  return { w, h, data: out };
}

/** The mip chain of a cluster atlas of cols × rows cells: box-filtered, with each level's alpha scaled per cell so that
 *  the share of its texels passing the alpha test (T) stays that of the top level. Plain box mips thin a cut-out crown
 *  into lace in the distance. Returns [{ data, width, height }] from the given level down to one row or column. */
export function clusterMips(w, h, data, cols, rows, T = 0.5) {
  const levels = [{ data, width: w, height: h }], A = Math.floor(T * 255) + 1; // (the smallest alpha byte that passes)
  const hist = new Uint32Array(256), base = [];
  const histOf = (L, LW, cx, cy, cw, ch) => { hist.fill(0); for (let y = 0; y < ch; y++) { const o = ((cy + y) * LW + cx) * 4 + 3; for (let x = 0; x < cw; x++) hist[L[o + x * 4]]++; } };
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    const cw = w / cols, ch = h / rows; histOf(data, w, c * cw, r * ch, cw, ch);
    let n = 0; for (let a = A; a < 256; a++) n += hist[a]; base.push(n / (cw * ch));
  }
  let W = w, H = h, cur = data;
  while (W > 1 && H > 1) {
    const w2 = W >> 1, h2 = H >> 1, nx = new Uint8Array(w2 * h2 * 4), S = W * 4;
    for (let y = 0; y < h2; y++) {
      let i = y * 2 * S, o = y * w2 * 4;
      for (let x = 0; x < w2; x++, i += 8) for (let k = 0; k < 4; k++, o++) nx[o] = (cur[i + k] + cur[i + k + 4] + cur[i + k + S] + cur[i + k + S + 4] + 2) >> 2;
    }
    const cw = w2 / cols, ch = h2 / rows;
    if (cw >= 2 && ch >= 2 && cw === Math.floor(cw) && ch === Math.floor(ch)) {
      for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) { // the scale that brings this cell's coverage back
        histOf(nx, w2, c * cw, r * ch, cw, ch);
        const keep = Math.round(base[r * cols + c] * cw * ch); // texels that must pass: the `keep` largest alphas
        let a = 255, n = hist[255]; while (a > 1 && n < keep) n += hist[--a];
        const s = keep > 0 ? Math.min(6, Math.max(0.5, A / a)) : 1;
        if (s === 1) continue;
        for (let y = 0; y < ch; y++) { const o = ((r * ch + y) * w2 + c * cw) * 4 + 3; for (let x = 0; x < cw; x++) nx[o + x * 4] = Math.min(255, Math.round(nx[o + x * 4] * s)); } // (byte a → exactly A)
      }
    }
    levels.push({ data: nx, width: w2, height: h2 });
    cur = nx; W = w2; H = h2;
  }
  return levels;
}

/** Loads the cluster atlas: 'hi' (256² cells) or 'lo' (128² cells: phones, the embed). Resolves to null (never rejects)
 *  when the index or the image is missing, broken, truncated or too slow, or the browser has no DecompressionStream:
 *  the trees then keep their card crowns. */
export async function loadTreeAtlas(tier, timeoutMs = 15000) {
  const base = ASSETS + 'trees/';
  return orNull((async () => {
    if (typeof DecompressionStream === 'undefined') throw new Error('no DecompressionStream');
    const r = await fetch(base + 'crowns.json'); // (leaf clusters in its first row, cherry blossom in its second)
    if (!r.ok) throw new Error('crowns.json ' + r.status);
    const J = await r.json(), file = J.files[tier] ? tier : 'hi';
    const ri = await fetch(base + J.files[file]);
    if (!ri.ok) throw new Error(J.files[file] + ' ' + ri.status);
    const buf = await ri.arrayBuffer();
    if (J.bytes && J.bytes[file] && buf.byteLength !== J.bytes[file]) throw new Error(J.files[file] + ' is ' + buf.byteLength + ' bytes, not ' + J.bytes[file]);
    const img = await decodePNG(buf), cols = J.cols, rows = J.rows;
    if (!(cols > 0 && rows > 0) || img.w % cols || img.h % rows) throw new Error('bad atlas layout');
    const cells = (J.cells || []).filter(c => c.col < cols && c.row < rows).map(c => {
      const e = 0.5 / img.w, f = 0.5 / img.h; // (half a texel in: neighbours never bleed in at the top level)
      return { kind: c.kind, u0: c.col / cols + e, u1: (c.col + 1) / cols - e, v0: 1 - (c.row + 1) / rows + f, v1: 1 - c.row / rows - f };
    });
    if (!cells.some(c => c.kind === 'leaf')) throw new Error('no leaf clusters listed');
    const mips = clusterMips(img.w, img.h, img.data, cols, rows, 0.5);
    const tex = new THREE.DataTexture(img.data, img.w, img.h, THREE.RGBAFormat);
    tex.mipmaps = mips; tex.generateMipmaps = false;
    tex.minFilter = THREE.LinearMipmapLinearFilter; tex.magFilter = THREE.LinearFilter;
    tex.colorSpace = THREE.NoColorSpace; tex.needsUpdate = true;
    return { tex, cells, tier: file };
  })(), timeoutMs, 'painted tree crowns unavailable, keeping the card crowns:');
}
