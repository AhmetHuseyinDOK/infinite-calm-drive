// Procedurally painted texture atlas: facades, shopfronts, Japanese signage, props.
// Two canvases share one layout: albedo (what it looks like by day) and emissive (what glows at night).
import * as THREE from 'three';
import { rng } from './util.js';

const JP = '"Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans CJK JP","Noto Sans JP","Yu Gothic","Meiryo",sans-serif';
const SW = 2048, SH = 4096; // albedo atlas; the emissive atlas is drawn at half resolution

function canvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }

// --- painterly grain shared by everything ---------------------------------------------------
const grainC = canvas(256, 256);
{
  const g = grainC.getContext('2d'), d = g.createImageData(256, 256), r = rng(7);
  for (let i = 0; i < d.data.length; i += 4) { const v = 128 + (r() - 0.5) * 120 + (r() < 0.02 ? -60 : 0); d.data[i] = d.data[i + 1] = d.data[i + 2] = v; d.data[i + 3] = 255; }
  g.putImageData(d, 0, 0);
}

export class Atlas {
  /** h: its rows (the procedural atlas: 4096). uOff: added to its cells' u (the painted atlas: 2, so the atlas material
   *  can tell its cells from the procedural ones by their uv alone, materials.js); cells: the map its cells are listed in
   *  (the painted atlas lists its cells in the procedural atlas's: one namespace, one uv() for both) */
  constructor(h = SH, uOff = 0, cells = {}) {
    const H = (this.H = h);
    this.cA = canvas(SW, H); this.cE = canvas(SW / 2, H / 2);
    this.a = this.cA.getContext('2d'); this.e = this.cE.getContext('2d');
    this.e.fillStyle = '#000'; this.e.fillRect(0, 0, SW / 2, H / 2);
    this.a.fillStyle = '#8a8a8a'; this.a.fillRect(0, 0, SW, H); // opaque padding so alpha-test only cuts the railing cell
    this.x = 0; this.y = 0; this.rowH = 0; this.cells = cells; this.uOff = uOff;
    this.grain = this.a.createPattern(grainC, 'repeat');
  }
  /** allocate a w×h cell and paint it; draw(a, e, w, h) is called with both contexts translated to the cell */
  add(name, w, h, draw) {
    const P = 4;
    if (this.x + w + P > SW) { this.x = 0; this.y += this.rowH + P; this.rowH = 0; }
    if (this.y + h > this.H) throw new Error('atlas full at ' + name);
    const r = { x: this.x, y: this.y, w, h };
    this.x += w + P; this.rowH = Math.max(this.rowH, h);
    for (const c of [this.a, this.e]) { c.save(); if (c === this.e) c.scale(0.5, 0.5); c.translate(r.x, r.y); c.beginPath(); c.rect(0, 0, w, h); c.clip(); }
    draw(this.a, this.e, w, h);
    this.a.restore(); this.e.restore();
    const hp = 0.5, H = this.H, o = this.uOff;
    this.cells[name] = { u0: o + (r.x + hp) / SW, u1: o + (r.x + w - hp) / SW, v0: 1 - (r.y + h - hp) / H, v1: 1 - (r.y + hp) / H, w, h, px: r.x, py: r.y };
    return this.cells[name];
  }
  /** repaint a cell from an image: the albedo from (sx, sy, sw, sh), the emissive from (sx, ey, sw, sh) of the same
   *  image (the painted fronts; ey < 0: nothing glows). Before textures() is called: the canvases go to the GPU once. */
  paintCell(name, img, sx, sy, sw, sh, ey) {
    const c = this.cells[name]; if (!c || c.u0 > 1.5 !== this.uOff > 1.5) return; // (one of this atlas's cells)
    this.a.drawImage(img, sx, sy, sw, sh, c.px, c.py, c.w, c.h);
    if (ey >= 0) this.e.drawImage(img, sx, ey, sw, sh, c.px / 2, c.py / 2, c.w / 2, c.h / 2);
    else { this.e.fillStyle = '#000'; this.e.fillRect(c.px / 2, c.py / 2, c.w / 2, c.h / 2); }
  }
  uv(name) { const c = this.cells[name]; if (!c) throw new Error('no atlas cell ' + name); return c; }
  has(name) { return !!this.cells[name]; }
  textures(renderer) {
    const mk = c => {
      const t = new THREE.CanvasTexture(c);
      t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
      t.minFilter = THREE.LinearMipmapLinearFilter; t.generateMipmaps = true;
      return t;
    };
    return { map: mk(this.cA), emissive: mk(this.cE) };
  }
}

// --- small painting helpers -------------------------------------------------------------------
function grain(ctx, atlas, w, h, a = 0.1) {
  ctx.save(); ctx.globalAlpha = a; ctx.globalCompositeOperation = 'overlay'; ctx.fillStyle = atlas.grain; ctx.fillRect(0, 0, w, h); ctx.restore();
}
function vgrad(ctx, x, y, w, h, stops) {
  const g = ctx.createLinearGradient(0, y, 0, y + h);
  stops.forEach(([o, c]) => g.addColorStop(o, c)); ctx.fillStyle = g; ctx.fillRect(x, y, w, h);
}
function wall(ctx, atlas, w, h, col = '#ebe7df', seams = 0) {
  ctx.fillStyle = col; ctx.fillRect(0, 0, w, h);
  vgrad(ctx, 0, 0, w, h, [[0, 'rgba(255,255,255,0.10)'], [1, 'rgba(0,0,0,0.10)']]);
  if (seams) { ctx.fillStyle = 'rgba(60,60,70,0.10)'; for (let y = seams; y < h; y += seams) ctx.fillRect(0, y, w, 1.5); }
  grain(ctx, atlas, w, h, 0.13);
}
function streak(ctx, x, y, w, len, a = 0.13) {
  const g = ctx.createLinearGradient(0, y, 0, y + len); g.addColorStop(0, `rgba(55,55,70,${a})`); g.addColorStop(1, 'rgba(55,55,70,0)');
  ctx.fillStyle = g; ctx.fillRect(x, y, w, len);
}
function rect(ctx, x, y, w, h, c) { ctx.fillStyle = c; ctx.fillRect(x, y, w, h); }
function frame(ctx, x, y, w, h, t, col = '#d9dde2', dark = 'rgba(40,45,60,0.55)') {
  rect(ctx, x - t, y - t, w + 2 * t, h + 2 * t, col);
  rect(ctx, x - t, y + h, w + 2 * t, t * 0.6, 'rgba(0,0,0,0.12)');
  ctx.strokeStyle = dark; ctx.lineWidth = 1; ctx.strokeRect(x - t + 0.5, y - t + 0.5, w + 2 * t - 1, h + 2 * t - 1);
}
function glass(ctx, x, y, w, h, r, tone = 0) {
  const g = ctx.createLinearGradient(x, y, x + w * 0.35, y + h);
  const top = tone ? '#4f78b8' : '#5f93d6', mid = tone ? '#86a9d4' : '#a6c8ec';
  g.addColorStop(0, top); g.addColorStop(0.55, mid); g.addColorStop(1, '#dbe9f6');
  ctx.fillStyle = g; ctx.fillRect(x, y, w, h);
  ctx.save(); ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip();
  // reflected cloud + diagonal sheen
  ctx.fillStyle = 'rgba(255,255,255,0.32)';
  ctx.beginPath(); ctx.ellipse(x + w * (0.2 + r() * 0.6), y + h * 0.75, w * 0.35, h * 0.16, 0, 0, 7); ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,0.22)';
  const sx = x + w * r();
  ctx.beginPath(); ctx.moveTo(sx, y); ctx.lineTo(sx + w * 0.18, y); ctx.lineTo(sx - w * 0.25, y + h); ctx.lineTo(sx - w * 0.43, y + h); ctx.fill();
  ctx.restore();
}
function curtain(ctx, x, y, w, h, col = '#efe6d2') {
  rect(ctx, x, y, w, h, col);
  ctx.fillStyle = 'rgba(120,100,80,0.18)';
  for (let i = 0; i < w; i += Math.max(3, w / 7)) ctx.fillRect(x + i, y, 1.5, h);
  vgrad(ctx, x, y, w, h, [[0, 'rgba(0,0,0,0.05)'], [1, 'rgba(0,0,0,0.18)']]);
}
function font(ctx, size, weight = 800) { ctx.font = `${weight} ${size}px ${JP}`; }
function textFit(ctx, str, cx, cy, maxW, size, col, weight = 800, stroke = null) {
  font(ctx, size, weight);
  let s = size; while (ctx.measureText(str).width > maxW && s > 6) { s -= 1; font(ctx, s, weight); }
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  if (stroke) { ctx.lineWidth = Math.max(2, s * 0.12); ctx.strokeStyle = stroke; ctx.lineJoin = 'round'; ctx.strokeText(str, cx, cy); }
  ctx.fillStyle = col; ctx.fillText(str, cx, cy);
}
function vText(ctx, str, cx, y0, y1, size, col, weight = 800, stroke = null) {
  const chars = [...str], n = chars.length, step = Math.min(size * 1.05, (y1 - y0) / n), s = Math.min(size, step * 0.95);
  font(ctx, s, weight); ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  chars.forEach((ch, i) => {
    const y = y0 + (y1 - y0 - step * n) / 2 + step * (i + 0.5);
    if (stroke) { ctx.lineWidth = Math.max(2, s * 0.12); ctx.strokeStyle = stroke; ctx.strokeText(ch, cx, y); }
    ctx.fillStyle = col; ctx.fillText(ch, cx, y);
  });
}
function glowRect(ctx, x, y, w, h, col, blur) { ctx.save(); ctx.shadowColor = col; ctx.shadowBlur = blur; rect(ctx, x, y, w, h, col); ctx.restore(); }
// night glow, painted into the emissive atlas. A lit room seen from the street: the ceiling light's glow fading down the
// walls, and low down the dark shapes of furniture against it (it used to be a flat glowing rectangle)
function litRoom(e, x, y, w, h, col, r, furn = true) {
  rect(e, x, y, w, h, col);
  e.save(); e.globalCompositeOperation = 'multiply';
  vgrad(e, x, y, w, h, [[0, '#ffffff'], [0.4, '#e8e8e8'], [1, '#9a9a9a']]);
  if (furn) {
    e.fillStyle = '#6a6a6a';
    for (let fx = x + w * 0.2 * r(); fx < x + w - 4; fx += w * (0.18 + r() * 0.3)) { const fw = Math.min(w * (0.1 + r() * 0.2), x + w - fx), fh = h * (0.12 + r() * 0.25); e.fillRect(fx, y + h - fh, fw, fh); }
  }
  e.restore();
}
// a shop lit from inside: the interior's own colours — goods, shelves, posters — in the shop's light (plus the light
// bouncing around), brightest under the ceiling lights (it used to be one flat glowing panel with the goods lost)
function litInterior(a, e, x, y, w, h, col) {
  const T = a.getTransform(); // the albedo context is translated to this atlas cell
  e.save();
  e.drawImage(a.canvas, T.e + x, T.f + y, w, h, x, y, w, h);
  e.globalCompositeOperation = 'multiply'; rect(e, x, y, w, h, col);
  e.globalCompositeOperation = 'lighter'; e.globalAlpha = 0.22; rect(e, x, y, w, h, col);
  e.globalCompositeOperation = 'multiply'; e.globalAlpha = 1; vgrad(e, x, y, w, h, [[0, '#ebebeb'], [0.5, '#d1d1d1'], [1, '#949494']]); // (white goods stay under the bloom)
  e.restore();
}

// --- data ---------------------------------------------------------------------------------------
const SHOPS = ['ラーメン', '喫茶', '薬局', '書店', '花屋', 'パン', 'クリーニング', '不動産', '歯科', '理容', '酒店', 'うどん', '寿司', 'カフェ',
  '八百屋', '精肉店', '文具', '時計店', '電器', '珈琲', '食堂', '居酒屋', '美容室', '写真館', '和菓子', '洋菓子', '古本', 'おもちゃ', '金物店', '豆腐店'];
const SIGN_COLS = [['#d8352a', '#fff'], ['#fff', '#c8241c'], ['#1f4e9c', '#fff'], ['#f3c43a', '#2b2b2b'], ['#2f7d4a', '#fff'], ['#fff', '#1f3f8c'],
  ['#e8743b', '#fff'], ['#2b2b33', '#f5d36b'], ['#7a2f86', '#fff'], ['#f5efe0', '#3a2a1c']];
const VSIGNS = ['居酒屋', 'カラオケ', '整骨院', '歯科医院', '学習塾', 'スナック', '焼き鳥', '中華料理', 'そろばん', '貸事務所', '理髪', 'ギャラリー'];
const NOREN = ['うどん', 'そば', '寿司', 'らーめん', '天ぷら', 'おでん', 'とんかつ', '甘味'];

export function buildAtlas() {
  const A = new Atlas(), R = rng(2024);

  // ---------------- upper-floor bays (3 m × 3 m → 240 px) ----------------
  const B = 240;
  const resWindow = (a, e, w, h, lit, kind, cool = false) => { // cool: a cool-white ceiling light instead of a warm one
    wall(a, A, w, h, '#ece8e0', 0);
    const r = rng(kind * 31 + (lit ? 7 : 0) + 5);
    if (kind === 0) { // sliding window with curtains
      const x = w * 0.14, y = h * 0.22, ww = w * 0.72, wh = h * 0.5;
      frame(a, x, y, ww, wh, 5);
      glass(a, x, y, ww / 2, wh, r); glass(a, x + ww / 2, y, ww / 2, wh, r);
      const cw = r() < 0.8 ? ww * (0.18 + r() * 0.25) : 0;
      if (cw) curtain(a, x + 2, y + 2, cw, wh - 4, r() < 0.5 ? '#efe6d2' : '#d9e4ea');
      rect(a, x + ww / 2 - 2, y, 4, wh, '#cfd4da');
      rect(a, x - 8, y + wh + 5, ww + 16, 6, '#d8d8d4'); streak(a, x - 4, y + wh + 11, 8, 60); streak(a, x + ww - 4, y + wh + 11, 8, 60);
      if (lit) { // the drawn curtain glows brightest (backlit fabric); the window's middle frame stays dark
        litRoom(e, x, y, ww, wh, cool ? '#e6eeff' : '#ffcf8f', r);
        if (cw) rect(e, x + 2, y + 2, cw, wh - 4, cool ? 'rgba(242,246,255,0.88)' : 'rgba(255,240,210,0.85)');
        rect(e, x + ww / 2 - 2, y, 4, wh, '#000');
      }
    } else if (kind === 1) { // two small windows + vent cap
      for (const fx of [0.12, 0.56]) {
        const x = w * fx, y = h * 0.28, ww = w * 0.3, wh = h * 0.36;
        frame(a, x, y, ww, wh, 4); glass(a, x, y, ww, wh, r, 1);
        a.fillStyle = 'rgba(255,255,255,0.35)'; a.fillRect(x, y, ww, wh * 0.45);
        streak(a, x, y + wh + 6, ww, 40, 0.1);
        if (lit && r() < 0.8) litRoom(e, x, y, ww, wh, r() < 0.5 ? '#ffd9a0' : '#e8f0ff', r);
      }
      a.fillStyle = '#c9c9c4'; a.beginPath(); a.arc(w * 0.88, h * 0.2, 9, 0, 7); a.fill();
    } else if (kind === 2) { // apartment: tall sliding door (sits behind a balcony)
      const x = w * 0.1, y = h * 0.12, ww = w * 0.8, wh = h * 0.84;
      frame(a, x, y, ww, wh, 4);
      glass(a, x, y, ww / 2, wh, r); glass(a, x + ww / 2, y, ww / 2, wh, r);
      const cw = ww * (0.2 + r() * 0.3);
      curtain(a, x + 2, y + 2, cw, wh - 4, R.pick(['#efe6d2', '#f2dede', '#dde8ef', '#e9efdc']));
      rect(a, x + ww / 2 - 2, y, 4, wh, '#cfd4da');
      if (lit) { litRoom(e, x, y, ww, wh, cool ? '#e6eeff' : '#ffcb85', r); rect(e, x + 2, y + 2, cw, wh - 4, cool ? 'rgba(242,246,255,0.9)' : 'rgba(255,236,200,0.9)'); rect(e, x + ww / 2 - 2, y, 4, wh, '#000'); }
    } else if (kind === 3) { // office ribbon glazing
      wall(a, A, w, h, '#dfe3e6', 0);
      const y = h * 0.25, wh = h * 0.55;
      glass(a, 0, y, w, wh, r, 1);
      for (let x = 0; x <= w; x += w / 4) rect(a, x - 2, y, 4, wh, '#8d98a6');
      rect(a, 0, y - 4, w, 4, '#8d98a6'); rect(a, 0, y + wh, w, 5, '#7d8796');
      if (lit) for (let i = 0; i < 4; i++) if (r() < 0.7) litRoom(e, i * w / 4 + 2, y, w / 4 - 4, wh, r() < 0.6 ? '#f2f6ff' : '#ffe2b0', r); // desks and partitions low down
    } else if (kind === 4) { // old wooden house window with lattice
      a.fillStyle = '#6b4a35'; a.fillRect(0, 0, w, h);
      for (let y = 0; y < h; y += 12) { rect(a, 0, y, w, 2, 'rgba(30,18,10,0.35)'); rect(a, 0, y + 2, w, 1, 'rgba(255,220,180,0.06)'); }
      grain(a, A, w, h, 0.15);
      const x = w * 0.18, y = h * 0.25, ww = w * 0.64, wh = h * 0.45;
      rect(a, x - 6, y - 6, ww + 12, wh + 12, '#4a3020');
      rect(a, x, y, ww, wh, '#efe4c8');
      a.fillStyle = '#5a3a26'; for (let i = 1; i < 6; i++) a.fillRect(x + i * ww / 6 - 1.5, y, 3, wh); for (let j = 1; j < 3; j++) a.fillRect(x, y + j * wh / 3 - 1.5, ww, 3);
      if (lit) { litRoom(e, x, y, ww, wh, '#ffc070', r, false); e.fillStyle = '#000'; for (let i = 1; i < 6; i++) e.fillRect(x + i * ww / 6 - 1.5, y, 3, wh); for (let j = 1; j < 3; j++) e.fillRect(x, y + j * wh / 3 - 1.5, ww, 3); }
    } else if (kind === 5) { // plain wall: drain pipe, meter, small frosted window
      rect(a, w * 0.08, 0, 7, h, '#bdbdb6'); rect(a, w * 0.08 + 5, 0, 2, h, 'rgba(0,0,0,0.2)');
      const x = w * 0.55, y = h * 0.3, ww = w * 0.22, wh = h * 0.24;
      frame(a, x, y, ww, wh, 3); rect(a, x, y, ww, wh, '#d6dfe4');
      a.fillStyle = 'rgba(255,255,255,0.4)'; a.fillRect(x, y, ww, wh / 2);
      streak(a, x, y + wh + 4, ww, 50, 0.12);
      rect(a, w * 0.22, h * 0.55, 26, 34, '#cfcfca'); rect(a, w * 0.22 + 4, h * 0.55 + 6, 18, 12, '#9aa2a8');
      if (lit) litRoom(e, x, y, ww, wh, cool ? '#eef2ff' : '#fff0d8', r, false); // frosted: no room to see
    } else if (kind === 6) { // side wall, one small window
      const x = w * 0.4, y = h * 0.35, ww = w * 0.2, wh = h * 0.28;
      frame(a, x, y, ww, wh, 3); glass(a, x, y, ww, wh, r, 1); streak(a, x, y + wh + 4, ww, 70, 0.14);
      if (lit) litRoom(e, x, y, ww, wh, cool ? '#e8efff' : '#ffd9a0', r);
    }
  };
  for (let k = 0; k < 7; k++) { A.add('win' + k, B, B, (a, e, w, h) => resWindow(a, e, w, h, false, k)); A.add('win' + k + 'L', B, B, (a, e, w, h) => resWindow(a, e, w, h, true, k)); }
  // about a third of homes light their rooms with cool-white ceiling lights (props.js picks these for some lit windows)
  for (const k of [0, 2, 5, 6]) A.add('win' + k + 'C', B, B, (a, e, w, h) => resWindow(a, e, w, h, true, k, true));
  A.add('plain', B, B, (a, e, w, h) => { wall(a, A, w, h, '#ece8e0'); streak(a, w * 0.3, 0, 12, h * 0.6, 0.06); });
  A.add('concrete', B, B, (a, e, w, h) => { wall(a, A, w, h, '#d9d7d0', 60); for (let i = 0; i < 6; i++) streak(a, (i * 41) % w, 0, 10, h * 0.5, 0.07); });

  // ---------------- ground-floor bays (3 m × 3.6 m → 240×288) ----------------
  const SH = 288;
  // what a shop window shows: a general store's shelves of goods, or (theme) a bakery, a bookshop, a florist, a clothes shop
  const shopInterior = (a, x, y, ww, wh, r, theme) => {
    const ell = (cx, cy, rx, ry, col, rot = 0) => { a.fillStyle = col; a.beginPath(); a.ellipse(cx, cy, rx, ry, rot, 0, 7); a.fill(); };
    const pk = arr => arr[Math.floor(r() * arr.length)]; // (the cell's own rng: the shared one would change every later cell)
    if (theme === 'bakery') { // パン屋: warm wooden shelves of loaves and rolls, a glass counter of pastries in front
      rect(a, x, y, ww, wh, '#d9b98a'); vgrad(a, x, y, ww, wh, [[0, 'rgba(255,240,210,0.35)'], [1, 'rgba(90,60,30,0.25)']]);
      for (let sy = y + wh * 0.28; sy < y + wh * 0.72; sy += wh * 0.2) {
        rect(a, x, sy, ww, 5, '#8a5a32');
        for (let bx = x + 8; bx < x + ww - 8; bx += 15 + r() * 10) { const lw = 7 + r() * 6, lh = 4 + r() * 3; ell(bx, sy - lh, lw, lh, pk(['#c98a3e', '#b4732e', '#d9a256', '#a4632a'])); ell(bx - lw * 0.2, sy - lh * 1.4, lw * 0.5, lh * 0.35, 'rgba(255,230,180,0.5)'); }
      }
      rect(a, x + 4, y + wh * 0.8, ww - 8, wh * 0.2, '#efe7d8'); rect(a, x + 4, y + wh * 0.8, ww - 8, 3, '#9a9a96');
      for (let bx = x + 14; bx < x + ww - 10; bx += 18) ell(bx, y + wh * 0.9, 6, 4, pk(['#e8b35a', '#c06a3a', '#f2d29a']));
      rect(a, x + ww - 64, y + 10, 52, 22, '#7a3e1e'); textFit(a, '焼きたて', x + ww - 38, y + 21, 46, 14, '#fff3dc', 800);
    } else if (theme === 'books') { // 書店: tall shelves of book spines, a rack of magazines at the front
      rect(a, x, y, ww, wh, '#6f5a46');
      for (let sy = y + 6; sy < y + wh * 0.72; sy += wh * 0.17) {
        rect(a, x, sy + wh * 0.15, ww, 4, '#4a3828');
        for (let bx = x + 3; bx < x + ww - 4; ) { const bw = 3 + r() * 4, bh = wh * (0.1 + r() * 0.045); rect(a, bx, sy + wh * 0.15 - bh, bw, bh, pk(['#a8322e', '#2f5a8a', '#d8c9a4', '#3e6e4a', '#e0d8c8', '#8a6a3a', '#5a3e6e', '#c7a03a'])); bx += bw + (r() < 0.1 ? 4 : 0.6); }
      }
      rect(a, x + 4, y + wh * 0.76, ww - 8, wh * 0.24, '#8a7560');
      for (let bx = x + 8; bx < x + ww - 22; bx += 24) { rect(a, bx, y + wh * 0.79, 20, 28, pk(['#e85a7a', '#5ab4e8', '#f2d24a', '#f6f6f2', '#7ac46a'])); rect(a, bx + 3, y + wh * 0.79 + 4, 14, 3, 'rgba(0,0,0,0.4)'); }
    } else if (theme === 'florist') { // 花屋: buckets of cut flowers on tiered stands, potted plants, greenery on the walls
      rect(a, x, y, ww, wh, '#e8e2d2'); vgrad(a, x, y, ww, wh, [[0, 'rgba(255,250,235,0.3)'], [1, 'rgba(60,50,30,0.15)']]);
      for (let k = 0; k < 7; k++) { // trailing plants hanging from the top: strands of small leaves
        const px = x + 8 + r() * (ww - 16), len = wh * (0.15 + r() * 0.25);
        for (let t = 0; t < len; t += 3.5) ell(px + Math.sin(t * 0.25 + k) * 4 + (r() - 0.5) * 6, y + 4 + t, 3.4, 1.8, pk(['#4f7f3c', '#6a9a48', '#3e6a32', '#82b05a']), r() * 3);
      }
      for (let row = 0; row < 3; row++) {
        const by = y + wh * (0.5 + row * 0.17);
        rect(a, x, by + 14, ww, 4, '#9a8a76');
        for (let bx = x + 10 + row * 6; bx < x + ww - 8; bx += 19) {
          const fc = pk(['#e8344a', '#f6d23a', '#f6f2f4', '#f28ab0', '#a46ad8', '#f08a3a']);
          for (let k = 0; k < 6; k++) { a.strokeStyle = '#4a7a3a'; a.lineWidth = 1.2; a.beginPath(); const fx = bx + (r() - 0.5) * 14; a.moveTo(bx, by + 10); a.lineTo(fx, by - 6 - r() * 8); a.stroke(); ell(fx, by - 8 - r() * 8, 3.2, 3, fc); }
          rect(a, bx - 6, by + 4, 12, 11, pk(['#5a7a9a', '#d8d4cc', '#3a4a5a']));
        }
      }
    } else if (theme === 'clothes') { // 洋品店: garments on a rail, folded shirts on a table, a mannequin
      rect(a, x, y, ww, wh, '#efece6'); vgrad(a, x, y, ww, wh, [[0, 'rgba(255,255,255,0.3)'], [1, 'rgba(0,0,0,0.12)']]);
      rect(a, x + 6, y + wh * 0.18, ww - 60, 3, '#7a7a7a');
      for (let bx = x + 12; bx < x + ww - 66; bx += 13 + r() * 5) {
        a.fillStyle = pk(['#3a4a6a', '#c8b89a', '#a8343a', '#e8e2d4', '#5a7a5a', '#d88a5a', '#2a2a2e']);
        const top = y + wh * 0.18 + 3, len = wh * (0.3 + r() * 0.2); a.beginPath(); a.moveTo(bx - 5, top); a.lineTo(bx + 5, top); a.lineTo(bx + 8, top + len); a.lineTo(bx - 8, top + len); a.closePath(); a.fill();
      }
      const mx = x + ww - 32; ell(mx, y + wh * 0.16, 7, 8, '#d8cfc4'); a.fillStyle = pk(['#c84a5a', '#4a6a9a', '#e8d8b8']); a.beginPath(); a.moveTo(mx - 14, y + wh * 0.24); a.lineTo(mx + 14, y + wh * 0.24); a.lineTo(mx + 18, y + wh * 0.66); a.lineTo(mx - 18, y + wh * 0.66); a.closePath(); a.fill(); rect(a, mx - 2, y + wh * 0.66, 4, wh * 0.24, '#8a8a8a');
      rect(a, x + 8, y + wh * 0.74, ww * 0.55, 6, '#8a6a4a'); for (let bx = x + 12; bx < x + ww * 0.55; bx += 14) rect(a, bx, y + wh * 0.74 - 8, 11, 8, pk(['#e8e2d4', '#3a4a6a', '#a8b8c8', '#d8b8a8']));
    } else { // a general store, a konbini, a cafe. The old layout's draws are replayed first, unchanged: the shared R feeds
      // every later atlas cell, so taking more or fewer numbers from it would repaint half the town
      let seed = 7;
      for (let sy = y + wh * 0.25; sy < y + wh; sy += wh * 0.22) for (let gx = x + 3; gx < x + ww - 6; gx += 6 + r() * 8) { R(); seed = (Math.imul(seed, 31) + Math.floor(r() * 997 + r() * 61 + r() * 7)) | 0; }
      if (theme === 'cafe') cafeInterior(a, x, y, ww, wh, rng(seed >>> 0)); else storeInterior(a, x, y, ww, wh, rng(seed >>> 0), theme === 'konbini');
    }
  };
  // goods on a shelf, the way a real one is stocked: runs of the same product side by side (2–6 facings), each a box, a
  // bottle, a can, a cup or a bag with its label, lit from above (a lighter top and left edge, a darker right edge)
  const GOODS = ['#d8423a', '#e8a23a', '#f2d24a', '#3a7ac8', '#2f9a5a', '#f4f1ea', '#c83a6a', '#6a4ab0', '#2a2a30', '#e86a2a', '#8ac83a', '#4ab8d8', '#a8642a', '#f6f6f2'];
  const shelfGoods = (a, x0, x1, base, hmax, q, kinds = 'bbccutp') => {
    let gx = x0 + 1 + q() * 3;
    while (gx < x1 - 4) {
      const kind = kinds[Math.floor(q() * kinds.length)], col = GOODS[Math.floor(q() * GOODS.length)], band = q() < 0.5 ? '#f8f6f0' : GOODS[Math.floor(q() * GOODS.length)];
      const iw = { b: 8 + q() * 6, c: 6 + q() * 2, u: 9 + q() * 2, t: 5 + q() * 2, p: 12 + q() * 5 }[kind], ih = Math.min(hmax, { b: 14 + q() * 12, c: 11 + q() * 3, u: 10 + q() * 3, t: 18 + q() * 9, p: 14 + q() * 8 }[kind]);
      const n = 2 + Math.floor(q() * 5);
      for (let k = 0; k < n && gx + iw < x1 - 1; k++, gx += iw + 0.6) {
        const top = base - ih;
        if (kind === 't') { // a bottle: shoulders, a neck and a cap
          rect(a, gx, top + ih * 0.3, iw, ih * 0.7, col); rect(a, gx + iw * 0.3, top + ih * 0.1, iw * 0.4, ih * 0.22, col);
          rect(a, gx + iw * 0.28, top, iw * 0.44, ih * 0.11, band === '#f8f6f0' ? '#e8e8e4' : '#d83a2a'); rect(a, gx, top + ih * 0.5, iw, ih * 0.22, band);
        } else if (kind === 'c') { // a can: a silver rim on top
          rect(a, gx, top, iw, ih, col); rect(a, gx, top, iw, 1.5, '#d8dce0'); rect(a, gx, top + ih * 0.35, iw, ih * 0.3, band);
        } else if (kind === 'u') { // a cup of noodles: tapering, a paper lid
          a.fillStyle = col; a.beginPath(); a.moveTo(gx, top + 2); a.lineTo(gx + iw, top + 2); a.lineTo(gx + iw - 1.2, base); a.lineTo(gx + 1.2, base); a.fill();
          rect(a, gx - 0.4, top, iw + 0.8, 2.2, '#f2efe6'); rect(a, gx + 1, top + ih * 0.45, iw - 2, ih * 0.25, band);
        } else if (kind === 'p') { // a bag of snacks: a rounded, crimped top
          a.fillStyle = col; a.beginPath(); a.moveTo(gx, base); a.lineTo(gx, top + 3); a.quadraticCurveTo(gx + iw / 2, top - 1.5, gx + iw, top + 3); a.lineTo(gx + iw, base); a.fill();
          rect(a, gx + 1.5, top + ih * 0.35, iw - 3, ih * 0.35, band); rect(a, gx, top + 2, iw, 1, 'rgba(0,0,0,0.18)');
        } else { // a box with a printed panel
          rect(a, gx, top, iw, ih, col); rect(a, gx + 1.5, top + ih * 0.3, iw - 3, ih * 0.4, band);
        }
        rect(a, gx, top + 1, 1, ih - 1, 'rgba(255,255,255,0.28)'); rect(a, gx + iw - 1.3, top + 1, 1.3, ih - 1, 'rgba(0,0,0,0.22)');
      }
      gx += 1.5 + q() * 3;
    }
  };
  // a shelf rail: the price strip, the price tags, and the shadow it throws on the goods below
  const shelfRail = (a, x, w, sy, q) => {
    vgrad(a, x, sy + 4, w, 9, [[0, 'rgba(0,0,0,0.3)'], [1, 'rgba(0,0,0,0)']]);
    rect(a, x, sy, w, 4, '#d3d6da'); rect(a, x, sy + 3.2, w, 0.8, 'rgba(40,40,50,0.45)');
    for (let tx = x + 4 + q() * 10; tx < x + w - 6; tx += 14 + q() * 16) rect(a, tx, sy + 0.6, 5, 2.6, q() < 0.25 ? '#f2d23a' : q() < 0.2 ? '#e84a3a' : '#ffffff');
  };
  const storeInterior = (a, x, y, ww, wh, q, konbini) => {
    const wallC = konbini ? '#f3f1ea' : '#ece5d8';
    rect(a, x, y, ww, wh, wallC);
    // the ceiling and its fluorescent tubes
    rect(a, x, y, ww, wh * 0.13, konbini ? '#f6f6f2' : '#efebe2');
    for (const fy of [0.035, 0.085]) { rect(a, x, y + wh * fy, ww, 2.4, '#ffffff'); vgrad(a, x, y + wh * fy + 2.4, ww, 6, [[0, 'rgba(255,255,250,0.5)'], [1, 'rgba(255,255,250,0)']]); }
    vgrad(a, x, y + wh * 0.13, ww, wh * 0.87, [[0, 'rgba(255,255,255,0.12)'], [1, 'rgba(70,60,50,0.18)']]);
    // hanging aisle signs
    for (let k = 0, sx = x + 18 + q() * 30; k < 2 && sx < x + ww - 40; k++, sx += 90 + q() * 40) { rect(a, sx + 13, y + wh * 0.13, 1, 6, '#888'); rect(a, sx, y + wh * 0.13 + 6, 28, 9, GOODS[Math.floor(q() * 9)]); rect(a, sx + 4, y + wh * 0.13 + 9.5, 20, 2, 'rgba(255,255,255,0.8)'); }
    // gondola shelving: four shelves of goods between grey uprights, a dark kick plate at the floor
    const top = y + wh * 0.25, lv = wh * 0.165;
    rect(a, x, top - 4, ww, 4, '#c9ccd0');
    for (let i = 0; i < 4; i++) {
      const sy = top + lv * (i + 1);
      vgrad(a, x, sy - lv, ww, lv, [[0, 'rgba(40,36,34,0.32)'], [1, 'rgba(40,36,34,0.12)']]); // the shelf's back, darker under the shelf above
      shelfGoods(a, x, x + ww, sy, lv - 6, q);
      shelfRail(a, x, ww, sy, q);
    }
    rect(a, x, top + lv * 4 + 4, ww, y + wh - top - lv * 4 - 4, '#5c6068'); rect(a, x, top + lv * 4 + 4, ww, 1.5, '#8a8e96');
    for (let ux = x + 2 + q() * 20; ux < x + ww; ux += 70 + q() * 12) { rect(a, ux, top - 4, 3, lv * 4 + 8, '#b4b8be'); rect(a, ux + 2.2, top - 4, 0.8, lv * 4 + 8, 'rgba(0,0,0,0.3)'); }
    if (konbini) { // the magazine rack along the window, covers facing out
      const my = y + wh * 0.7;
      rect(a, x, my + 26, ww, y + wh - my - 26, '#7a7e86'); rect(a, x, my + 26, ww, 2, '#a8acb2');
      for (let mx = x + 2; mx < x + ww - 14; mx += 15.5) {
        const c = GOODS[Math.floor(q() * GOODS.length)], tilt = q() * 2;
        rect(a, mx, my + tilt, 14, 26 - tilt, c); rect(a, mx, my + tilt, 14, 5, q() < 0.6 ? '#ffffff' : '#e8343a');
        rect(a, mx + 2, my + tilt + 8, 10, 10, q() < 0.5 ? '#f2c8a8' : GOODS[Math.floor(q() * GOODS.length)]); rect(a, mx + 13, my + tilt, 1, 26 - tilt, 'rgba(0,0,0,0.25)');
      }
    }
  };
  const cafeInterior = (a, x, y, ww, wh, q) => {
    rect(a, x, y, ww, wh, '#b88a5e'); vgrad(a, x, y, ww, wh, [[0, 'rgba(255,230,190,0.25)'], [1, 'rgba(60,35,20,0.35)']]);
    for (let bx = x; bx < x + ww; bx += 9) rect(a, bx, y + wh * 0.55, 1, wh * 0.45, 'rgba(60,35,20,0.25)'); // wainscot boards
    // a back counter: shelves of cups and jars, a coffee machine, a chalkboard menu
    const sy0 = y + wh * 0.3;
    for (let i = 0; i < 2; i++) { const sy = sy0 + i * 22; rect(a, x + 8, sy, ww * 0.55, 3, '#6a4428'); shelfGoods(a, x + 10, x + ww * 0.55 + 6, sy, 14, q, 'ctu'); }
    rect(a, x + ww * 0.64, y + wh * 0.22, ww * 0.28, wh * 0.26, '#2e3a32'); rect(a, x + ww * 0.64, y + wh * 0.22, ww * 0.28, 2, '#6a4428');
    for (let l = 0; l < 5; l++) rect(a, x + ww * 0.67, y + wh * (0.27 + l * 0.04), ww * (0.12 + q() * 0.1), 1.6, 'rgba(240,240,230,0.75)');
    rect(a, x + 4, y + wh * 0.56, ww - 8, 6, '#5a3820'); rect(a, x + 4, y + wh * 0.56 + 6, ww - 8, wh * 0.08, '#7a5232');
    rect(a, x + ww * 0.3, y + wh * 0.47, 18, wh * 0.09, '#c8ccd0'); rect(a, x + ww * 0.3 + 3, y + wh * 0.47 + 3, 12, 5, '#3a3a40');
    // pendant lamps and, in front, little round tables and chairs
    for (let lx = x + 30 + q() * 20; lx < x + ww - 20; lx += 70 + q() * 20) {
      rect(a, lx, y, 1, wh * 0.14, '#3a2a1e');
      a.fillStyle = '#2f3a36'; a.beginPath(); a.moveTo(lx - 9, y + wh * 0.2); a.quadraticCurveTo(lx + 0.5, y + wh * 0.12, lx + 10, y + wh * 0.2); a.fill();
      a.fillStyle = 'rgba(255,214,150,0.9)'; a.beginPath(); a.ellipse(lx + 0.5, y + wh * 0.2, 7, 2, 0, 0, 7); a.fill();
    }
    for (let tx = x + 26 + q() * 16; tx < x + ww - 26; tx += 78 + q() * 20) {
      rect(a, tx - 16, y + wh * 0.74, 32, 4, '#4a2e1c'); rect(a, tx - 1.5, y + wh * 0.74 + 4, 3, wh * 0.2, '#2e2420'); rect(a, tx - 8, y + wh * 0.94, 16, 2, '#2e2420');
      for (const cx of [-24, 24]) { rect(a, tx + cx - 6, y + wh * 0.8, 12, 3, '#3a2618'); rect(a, tx + cx + (cx < 0 ? -6 : 4), y + wh * 0.66, 2, wh * 0.17, '#3a2618'); rect(a, tx + cx - 5, y + wh * 0.83, 1.6, wh * 0.13, '#3a2618'); rect(a, tx + cx + 3.4, y + wh * 0.83, 1.6, wh * 0.13, '#3a2618'); }
      a.fillStyle = '#f4f0e8'; a.beginPath(); a.ellipse(tx - 6, y + wh * 0.74 - 1.5, 3, 1.5, 0, 0, 7); a.fill();
    }
  };
  const shopBay = (a, e, w, h, kind, seed, theme = '') => {
    const r = rng(seed);
    wall(a, A, w, h, '#e6e2da');
    if (kind === 'glass' || kind === 'door' || kind === 'konbini' || kind === 'cafe') {
      const x = 6, y = h * 0.22, ww = w - 12, wh = h * 0.78 - 4;
      const inner = kind === 'konbini' ? '#f6f4ea' : kind === 'cafe' ? '#7a5a40' : '#8a7a68';
      rect(a, x, y, ww, wh, inner);
      shopInterior(a, x, y, ww, wh, r, theme || kind);
      if (kind === 'konbini') rect(a, x, y + 4, ww, 5, '#ffffff');
      // posters and the open sign hang inside the glass
      if (kind === 'door') { rect(a, w / 2 - 30, y + 18, 60, 24, '#fff'); textFit(a, '営業中', w / 2, y + 30, 54, 18, '#c82828'); }
      if (kind === 'glass' && !theme && r() < 0.7) { rect(a, x + 10, y + 14, 44, 60, R.pick(['#f6d34a', '#fff', '#ff8aa0'])); textFit(a, R.pick(['特売', '新商品', 'SALE', '本日']), x + 32, y + 44, 40, 16, '#c02020'); }
      // at night: the shop seen lit from inside (cool white in a konbini, amber in a cafe, warm white elsewhere)
      litInterior(a, e, x, y, ww, wh, kind === 'konbini' ? '#e4eef8' : kind === 'cafe' ? '#f0a868' : '#f2d2a6');
      // the glass's reflection over it all, then the frames and the cafe's board out front, dark at night
      a.save(); a.globalAlpha = 0.35; glass(a, x, y, ww, wh, r); a.restore();
      rect(a, x, y, ww, 4, '#4a4e57'); rect(e, x, y, ww, 4, '#000');
      if (kind === 'door') { rect(a, w / 2 - 2, y, 4, wh, '#4a4e57'); rect(e, w / 2 - 2, y, 4, wh, '#000'); rect(a, w / 2 - 14, y + wh * 0.45, 3, 40, '#c0c4c8'); rect(a, w / 2 + 11, y + wh * 0.45, 3, 40, '#c0c4c8'); }
      if (kind === 'cafe') { rect(a, w * 0.62, h - 70, 46, 62, '#2c3a30'); rect(e, w * 0.62, h - 70, 46, 62, '#000'); textFit(a, 'ランチ', w * 0.62 + 23, h - 50, 40, 13, '#fff', 700); }
    } else if (kind === 'shutter') {
      const x = 6, y = h * 0.2, ww = w - 12, wh = h * 0.8;
      rect(a, x, y, ww, wh, '#b8bcc0');
      for (let yy = y; yy < y + wh; yy += 7) { rect(a, x, yy, ww, 2, 'rgba(60,64,72,0.35)'); rect(a, x, yy + 2, ww, 1, 'rgba(255,255,255,0.35)'); }
      rect(a, x, y, ww, 10, '#8f949a'); grain(a, A, w, h, 0.12);
      if (r() < 0.5) { rect(a, w / 2 - 40, y + wh * 0.35, 80, 26, '#fff'); textFit(a, R.pick(['定休日', '本日休業', '貸店舗']), w / 2, y + wh * 0.35 + 13, 74, 16, '#333', 700); }
    } else if (kind === 'noren') {
      rect(a, 0, 0, w, h, '#5b3c28');
      for (let x = 0; x < w; x += 10) rect(a, x, h * 0.2, 3, h * 0.8, 'rgba(25,15,8,0.6)');
      grain(a, A, w, h, 0.15);
      const nx = w * 0.12, ny = h * 0.24, nw = w * 0.76, nh = h * 0.34, ncol = R.pick(['#1f3570', '#7a1f24', '#2a2a2a', '#365e3a']);
      rect(a, nx, ny, nw, nh, ncol);
      for (let i = 1; i < 3; i++) rect(a, nx + nw * i / 3 - 1, ny + nh * 0.25, 2, nh * 0.75, 'rgba(255,255,255,0.25)');
      textFit(a, R.pick(NOREN), w / 2, ny + nh * 0.55, nw * 0.9, 46, '#f5f0e6', 800);
      rect(a, nx, ny, nw, 6, '#3a2a1c');
      e.fillStyle = '#ffae5c'; e.fillRect(nx, ny + nh, nw, h - ny - nh); e.fillStyle = 'rgba(255,170,90,0.6)'; e.fillRect(nx, ny, nw, nh);
      // red lantern
      a.fillStyle = '#d8352a'; a.beginPath(); a.ellipse(w * 0.9, h * 0.36, 13, 19, 0, 0, 7); a.fill(); textFit(a, '酒', w * 0.9, h * 0.36, 16, 14, '#fff');
      e.fillStyle = '#ff6a3a'; e.beginPath(); e.ellipse(w * 0.9, h * 0.36, 13, 19, 0, 0, 7); e.fill();
    } else if (kind === 'house') {
      const dx = w * 0.18, dy = h * 0.3, dw = w * 0.34, dh = h * 0.7;
      rect(a, dx - 6, dy - 6, dw + 12, dh + 6, '#9a9a96');
      rect(a, dx, dy, dw, dh, R.pick(['#8a5a3c', '#5c4636', '#c9c4bc', '#3f5466']));
      rect(a, dx + dw - 14, dy + dh * 0.5, 4, 22, '#d8d0c0');
      rect(a, dx + 6, dy + 10, dw - 12, dh * 0.25, 'rgba(255,255,255,0.18)');
      rect(a, w * 0.62, h * 0.48, 30, 22, '#cfcfca'); rect(a, w * 0.62 + 6, h * 0.48 + 5, 18, 4, '#555');
      const x = w * 0.6, y = h * 0.22, ww = w * 0.3, wh = h * 0.2;
      frame(a, x, y, ww, wh, 3); glass(a, x, y, ww, wh, r, 1);
      for (let i = 0; i < 3; i++) { a.fillStyle = '#7b5a43'; a.fillRect(w * 0.6 + i * 22, h - 26, 16, 18); a.fillStyle = R.pick(['#3f8a3e', '#5aa04a', '#2f6e3a']); a.beginPath(); a.arc(w * 0.6 + i * 22 + 8, h - 32, 11, 0, 7); a.fill(); }
      e.fillStyle = '#ffd08a'; e.beginPath(); e.arc(dx + dw + 14, dy + 8, 6, 0, 7); e.fill();
      if (r() < 0.6) { e.fillStyle = '#ffcf8f'; e.fillRect(x, y, ww, wh); }
    } else if (kind === 'garage') {
      const x = 8, y = h * 0.25, ww = w - 16, wh = h * 0.75;
      rect(a, x, y, ww, wh, '#efefec');
      for (let yy = y; yy < y + wh; yy += 9) rect(a, x, yy, ww, 1.5, 'rgba(80,80,90,0.25)');
      grain(a, A, w, h, 0.1);
    }
  };
  ['glass', 'door', 'shutter', 'noren', 'konbini', 'house', 'garage', 'cafe'].forEach((k, i) => {
    A.add('shop_' + k, B, SH, (a, e, w, h) => shopBay(a, e, w, h, k, 100 + i));
    if (k === 'glass' || k === 'noren' || k === 'house') A.add('shop_' + k + '2', B, SH, (a, e, w, h) => shopBay(a, e, w, h, k, 200 + i));
    // glass shopfronts you can tell apart: a bakery, a bookshop, a florist, a clothes shop (props.js pickV picks among them)
    if (k === 'glass') ['bakery', 'books', 'florist', 'clothes'].forEach((th, j) => A.add('shop_glass' + (j + 3), B, SH, (a, e, w, h) => shopBay(a, e, w, h, 'glass', 300 + j, th)));
  });

  // ---------------- horizontal shop signs (6 m × 0.9 m) ----------------
  for (let i = 0; i < 14; i++) A.add('hs' + i, 512, 76, (a, e, w, h) => {
    const [bg, fg] = SIGN_COLS[i % SIGN_COLS.length], name = SHOPS[(i * 7) % SHOPS.length];
    rect(a, 0, 0, w, h, bg); rect(a, 0, 0, w, 5, 'rgba(255,255,255,0.35)'); rect(a, 0, h - 6, w, 6, 'rgba(0,0,0,0.18)');
    if (i % 3 === 0) { rect(a, 12, 12, h - 24, h - 24, fg); textFit(a, name[0], 12 + (h - 24) / 2, h / 2, h - 30, 34, bg); }
    textFit(a, name, w / 2 + (i % 3 === 0 ? 24 : 0), h / 2 + 2, w * 0.7, 50, fg, 900);
    grain(a, A, w, h, 0.08);
    e.fillStyle = bg === '#fff' || bg === '#f5efe0' ? '#d9d6cc' : bg; e.fillRect(0, 0, w, h);
    e.globalAlpha = 0.9; textFit(e, name, w / 2 + (i % 3 === 0 ? 24 : 0), h / 2 + 2, w * 0.7, 50, fg === '#fff' ? '#ffffff' : fg, 900); e.globalAlpha = 1;
  });
  // signs for the shops whose window shows flowers or clothes (props.js puts the matching sign over a themed window)
  for (const [nm, bg, fg] of [['花屋', '#2f7d4a', '#fff'], ['洋品店', '#2b2b33', '#f5d36b']]) A.add('hs_' + nm, 512, 76, (a, e, w, h) => {
    rect(a, 0, 0, w, h, bg); rect(a, 0, 0, w, 5, 'rgba(255,255,255,0.35)'); rect(a, 0, h - 6, w, 6, 'rgba(0,0,0,0.18)');
    textFit(a, nm, w / 2, h / 2 + 2, w * 0.7, 50, fg, 900); grain(a, A, w, h, 0.08);
    e.fillStyle = bg; e.fillRect(0, 0, w, h); e.globalAlpha = 0.9; textFit(e, nm, w / 2, h / 2 + 2, w * 0.7, 50, fg, 900); e.globalAlpha = 1;
  });
  // ---------------- vertical protruding signs (0.6 m × 2.4 m) ----------------
  // neon light boxes, as on the reference art's shopping street: a milky panel lit from inside, a neon tube bent round its
  // edge (pink, violet, cyan, red, green, amber) and the name in strong ink; three in ten are coloured panels with white
  // lettering. They glow by day too (props.js gives them their own light code)
  const NEON = ['#ff4fd8', '#b45cff', '#3fd8ff', '#ff4a5a', '#4dff9a', '#ffc94a'];
  const rr = (g, x, y, w, h, r) => { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); };
  for (let i = 0; i < 10; i++) A.add('vs' + i, 72, 288, (a, e, w, h) => {
    const name = VSIGNS[i % VSIGNS.length], neon = NEON[(i * 5 + 2) % NEON.length], col = i % 10 === 3 || i % 10 === 6 || i % 10 === 8;
    const [cbg, cfg] = SIGN_COLS[(i * 3 + 1) % SIGN_COLS.length], bg = col ? (cbg === '#fff' || cbg === '#f5efe0' ? '#2b2b33' : cbg) : '#fbf7ef';
    const fg = col ? '#ffffff' : ['#c41e2a', '#1f2a6e', '#222226', '#b8186a'][i % 4];
    rect(a, 0, 0, w, h, '#2a2b30'); rr(a, 3, 3, w - 6, h - 6, 8); a.fillStyle = bg; a.fill();
    vgrad(a, 3, 3, w - 6, h - 6, [[0, 'rgba(255,255,255,0.12)'], [1, 'rgba(0,0,0,0.08)']]);
    a.save(); rr(a, 8, 8, w - 16, h - 16, 6); a.strokeStyle = neon; a.globalAlpha = 0.55; a.lineWidth = 7; a.stroke(); a.globalAlpha = 1; a.strokeStyle = '#fff6fb'; a.lineWidth = 2.2; a.stroke(); a.restore();
    vText(a, name, w / 2, 18, h - 18, 50, fg, 900);
    grain(a, A, w, h, 0.06);
    // the glow: the panel lit from behind (dimmer), the tube bright, white lettering glowing on a coloured panel
    rect(e, 0, 0, w, h, '#000'); rr(e, 3, 3, w - 6, h - 6, 8); e.fillStyle = col ? '#3a3a3e' : '#4a4844'; e.fill();
    e.save(); rr(e, 8, 8, w - 16, h - 16, 6); e.strokeStyle = neon; e.lineWidth = 7; e.stroke(); e.strokeStyle = '#ffffff'; e.lineWidth = 2.5; e.stroke(); e.restore();
    vText(e, name, w / 2, 18, h - 18, 50, col ? '#ffffff' : '#000000', 900);
  });
  // ---------------- rooftop billboards ----------------
  const BB = [['夏祭り', '8月10日', '#2f6fd8'], ['ひまわり不動産', '駅徒歩3分', '#f0a020'], ['おいしい牛乳', '毎朝とどけます', '#3aa860'], ['花火大会', '河川敷にて', '#203070']];
  BB.forEach(([t1, t2, c], i) => A.add('bb' + i, 512, 240, (a, e, w, h) => {
    rect(a, 0, 0, w, h, '#fbfaf5'); rect(a, 0, 0, w, h * 0.62, c);
    textFit(a, t1, w / 2, h * 0.32, w * 0.9, 96, '#fff', 900, 'rgba(0,0,0,0.25)'); textFit(a, t2, w / 2, h * 0.8, w * 0.85, 52, '#333', 800);
    grain(a, A, w, h, 0.08);
    rect(e, 0, 0, w, h, '#555'); e.globalAlpha = 0.85; rect(e, 0, 0, w, h * 0.62, c); textFit(e, t1, w / 2, h * 0.32, w * 0.9, 96, '#fff', 900); e.globalAlpha = 1;
  }));
  // ---------------- konbini signage band ----------------
  A.add('konbini_band', 480, 72, (a, e, w, h) => {
    rect(a, 0, 0, w, h, '#fbfbf7'); rect(a, 0, h * 0.62, w, h * 0.14, '#2a9a4a'); rect(a, 0, h * 0.76, w, h * 0.12, '#f08a24'); rect(a, 0, h * 0.88, w, h * 0.12, '#2f6fd8');
    textFit(a, 'コンビニ 24時間', w / 2, h * 0.32, w * 0.8, 40, '#1d3d8a', 900);
    e.fillStyle = '#f3f6f0'; e.fillRect(0, 0, w, h); textFit(e, 'コンビニ 24時間', w / 2, h * 0.32, w * 0.8, 40, '#1d3d8a', 900);
  });

  // ---------------- props ----------------
  for (let v = 0; v < 3; v++) A.add('vend' + v, 128, 234, (a, e, w, h) => {
    const body = ['#d8352a', '#2f6fd8', '#f4f4f0'][v];
    rect(a, 0, 0, w, h, body);
    rect(a, 8, 10, w - 16, h * 0.55, '#eef4f8');
    const cols = ['#e33', '#3a7', '#fc3', '#36c', '#f7a', '#fff', '#a5d', '#f83', '#6cf', '#8b4'];
    for (let r0 = 0; r0 < 4; r0++) for (let c = 0; c < 6; c++) {
      const x = 14 + c * 17, y = 18 + r0 * 30;
      a.fillStyle = cols[(r0 * 6 + c + v) % cols.length]; a.fillRect(x, y, 11, 20); a.fillStyle = 'rgba(255,255,255,0.5)'; a.fillRect(x + 2, y + 2, 3, 14);
      a.fillStyle = '#2a2a2a'; a.fillRect(x, y + 23, 11, 3);
    }
    rect(a, 10, h * 0.62, w - 20, 22, '#222'); rect(a, w - 34, h * 0.66, 14, 22, '#bbb'); rect(a, 14, h * 0.82, w - 28, 22, '#1b1b1b');
    textFit(a, ['つめた〜い', 'あったか〜い', 'のみもの'][v], w / 2, h * 0.62 + 11, w - 28, 14, '#fff', 700);
    grain(a, A, w, h, 0.08);
    e.fillStyle = '#f2f8ff'; e.fillRect(8, 10, w - 16, h * 0.55);
    for (let r0 = 0; r0 < 4; r0++) for (let c = 0; c < 6; c++) { e.fillStyle = cols[(r0 * 6 + c + v) % cols.length]; e.fillRect(14 + c * 17, 18 + r0 * 30, 11, 20); }
    e.fillStyle = '#9fd0ff'; e.fillRect(10, h * 0.62, w - 20, 22);
  });
  A.add('ac', 128, 88, (a, e, w, h) => {
    rect(a, 0, 0, w, h, '#e9e9e4'); vgrad(a, 0, 0, w, h, [[0, 'rgba(255,255,255,0.2)'], [1, 'rgba(0,0,0,0.12)']]);
    a.fillStyle = '#9a9c9e'; a.beginPath(); a.arc(w * 0.4, h * 0.5, h * 0.36, 0, 7); a.fill();
    a.strokeStyle = '#d6d6d2'; a.lineWidth = 2; for (let rr = 6; rr < h * 0.36; rr += 6) { a.beginPath(); a.arc(w * 0.4, h * 0.5, rr, 0, 7); a.stroke(); }
    for (let y = 12; y < h - 10; y += 6) rect(a, w * 0.78, y, w * 0.16, 2, '#b8b8b2');
  });
  A.add('plate', 128, 64, (a, e, w, h) => {
    rect(a, 0, 0, w, h, '#f2cf3a'); a.strokeStyle = '#2f5a2f'; a.lineWidth = 3; a.strokeRect(3, 3, w - 6, h - 6);
    textFit(a, '品川 580', w / 2, 16, w * 0.6, 14, '#2f5a2f', 700); textFit(a, 'あ 12-34', w / 2, 42, w * 0.85, 28, '#2f5a2f', 800);
  });
  A.add('sign_stop', 128, 112, (a, e, w, h) => {
    a.fillStyle = '#fff'; a.beginPath(); a.moveTo(2, 2); a.lineTo(w - 2, 2); a.lineTo(w / 2, h - 2); a.fill();
    a.fillStyle = '#d8231c'; a.beginPath(); a.moveTo(10, 7); a.lineTo(w - 10, 7); a.lineTo(w / 2, h - 12); a.fill();
    textFit(a, '止まれ', w / 2, 34, w * 0.62, 30, '#fff', 900);
  });
  A.add('sign_blue', 112, 112, (a, e, w, h) => {
    a.fillStyle = '#fff'; a.beginPath(); a.arc(w / 2, h / 2, w / 2 - 1, 0, 7); a.fill();
    a.fillStyle = '#1e5bb8'; a.beginPath(); a.arc(w / 2, h / 2, w / 2 - 6, 0, 7); a.fill();
    a.fillStyle = '#fff'; a.beginPath(); a.moveTo(w / 2, 22); a.lineTo(w / 2 + 22, 50); a.lineTo(w / 2 + 8, 50); a.lineTo(w / 2 + 8, 88); a.lineTo(w / 2 - 8, 88); a.lineTo(w / 2 - 8, 50); a.lineTo(w / 2 - 22, 50); a.fill();
  });
  A.add('sign_speed', 112, 112, (a, e, w, h) => {
    a.fillStyle = '#fff'; a.beginPath(); a.arc(w / 2, h / 2, w / 2 - 1, 0, 7); a.fill();
    a.strokeStyle = '#d8231c'; a.lineWidth = 12; a.beginPath(); a.arc(w / 2, h / 2, w / 2 - 9, 0, 7); a.stroke();
    textFit(a, '30', w / 2, h / 2 + 2, w * 0.6, 50, '#1e4ea8', 900);
  });
  A.add('pole_plate', 48, 144, (a, e, w, h) => {
    rect(a, 0, 0, w, h, '#1d4f9a'); a.strokeStyle = '#fff'; a.lineWidth = 2; a.strokeRect(3, 3, w - 6, h - 6);
    vText(a, '本町二丁目', w / 2, 10, h - 10, 24, '#fff', 700);
  });
  for (let i = 0; i < 4; i++) A.add('poster' + i, 64, 90, (a, e, w, h) => {
    const c = ['#fdf3c7', '#d8ecff', '#ffe0e6', '#e3f6dc'][i];
    rect(a, 0, 0, w, h, c); rect(a, 4, 4, w - 8, h * 0.45, ['#f08a24', '#2f6fd8', '#e0457b', '#3aa860'][i]);
    textFit(a, ['夏祭り', '防犯', '募集', '花火'][i], w / 2, h * 0.25, w - 12, 18, '#fff', 900);
    for (let l = 0; l < 4; l++) rect(a, 8, h * 0.58 + l * 8, w - 16 - (l % 2) * 14, 3, 'rgba(60,60,60,0.5)');
  });
  for (let v = 0; v < 3; v++) A.add('bal' + v, B, 88, (a, e, w, h) => {
    const c = ['#e9e3d6', '#dfe6ea', '#efe2dc'][v];
    wall(a, A, w, h, c);
    if (v === 1) { for (let x = 10; x < w - 6; x += w / 6) { rect(a, x, 10, w / 6 - 8, h - 20, 'rgba(220,235,245,0.9)'); a.fillStyle = 'rgba(255,255,255,0.45)'; a.fillRect(x, 10, w / 6 - 8, (h - 20) * 0.4); } }
    else { rect(a, 0, 0, w, 7, 'rgba(255,255,255,0.4)'); for (let x = w / 3; x < w; x += w / 3) rect(a, x - 1, 0, 2, h, 'rgba(0,0,0,0.08)'); }
    rect(a, 0, h - 6, w, 6, 'rgba(0,0,0,0.12)'); streak(a, w * 0.3, h - 6, 10, 10, 0.2);
  });
  A.add('kawara', 272, 256, (a, e, w, h) => { // (16 px of tiles either side of the 240 px that is used: props.js KAWARA)
    rect(a, 0, 0, w, h, '#58617a');
    for (let y = 0; y < h; y += 16) { vgrad(a, 0, y, w, 16, [[0, 'rgba(255,255,255,0.12)'], [0.7, 'rgba(0,0,0,0)'], [1, 'rgba(0,0,0,0.35)']]); }
    for (let x = 16 - 20; x < w; x += 20) rect(a, x, 0, 2, h, 'rgba(0,0,0,0.18)');
    grain(a, A, w, h, 0.12);
  });
  A.add('wood', 256, 256, (a, e, w, h) => {
    rect(a, 0, 0, w, h, '#6d4c37');
    for (let y = 0; y < h; y += 14) { rect(a, 0, y, w, 2, 'rgba(25,15,8,0.4)'); rect(a, 0, y + 2, w, 1, 'rgba(255,220,180,0.07)'); }
    grain(a, A, w, h, 0.16);
  });
  A.add('block', 256, 128, (a, e, w, h) => { // concrete block wall (ブロック塀)
    rect(a, 0, 0, w, h, '#c9c7bf');
    for (let y = 0; y < h; y += 32) for (let x = (y / 32) % 2 ? -32 : 0; x < w; x += 64) { a.strokeStyle = 'rgba(80,80,80,0.35)'; a.lineWidth = 2; a.strokeRect(x + 1, y + 1, 62, 30); }
    for (let x = 0; x < w; x += 64) { a.fillStyle = 'rgba(70,70,70,0.25)'; a.fillRect(x + 20, 40, 24, 16); }
    grain(a, A, w, h, 0.15); streak(a, 0, 0, w, 40, 0.1);
  });
  A.add('lantern', 64, 96, (a, e, w, h) => {
    a.fillStyle = '#d8352a'; a.beginPath(); a.ellipse(w / 2, h / 2, w / 2 - 2, h / 2 - 8, 0, 0, 7); a.fill();
    for (let y = 16; y < h - 12; y += 7) rect(a, 4, y, w - 8, 1.5, 'rgba(0,0,0,0.2)');
    rect(a, w / 2 - 14, 2, 28, 8, '#222'); rect(a, w / 2 - 14, h - 10, 28, 8, '#222');
    textFit(a, '祭', w / 2, h / 2, w * 0.6, 28, '#fff', 900);
    e.fillStyle = '#ff6a35'; e.beginPath(); e.ellipse(w / 2, h / 2, w / 2 - 2, h / 2 - 8, 0, 0, 7); e.fill();
  });
  A.add('busstop', 96, 96, (a, e, w, h) => {
    a.fillStyle = '#fff'; a.beginPath(); a.arc(w / 2, h / 2, w / 2 - 1, 0, 7); a.fill();
    a.strokeStyle = '#d8231c'; a.lineWidth = 8; a.beginPath(); a.arc(w / 2, h / 2, w / 2 - 6, 0, 7); a.stroke();
    textFit(a, 'バス停', w / 2, h / 2, w * 0.66, 20, '#1d3d8a', 900);
  });
  A.add('white', 16, 16, (a) => rect(a, 0, 0, 16, 16, '#ffffff'));
  A.add('sign_xing', 120, 120, (a, e, w, h) => { // yellow diamond "railway crossing ahead"
    a.save(); a.translate(w / 2, h / 2); a.rotate(Math.PI / 4);
    a.fillStyle = '#1b1b1b'; a.fillRect(-41, -41, 82, 82); a.fillStyle = '#f2c230'; a.fillRect(-37, -37, 74, 74); a.restore();
    a.fillStyle = '#1b1b1b'; a.fillRect(w / 2 - 22, h / 2 - 6, 44, 18); a.fillRect(w / 2 - 16, h / 2 - 16, 18, 12); a.fillRect(w / 2 + 8, h / 2 - 13, 5, 7);
    a.beginPath(); a.arc(w / 2 - 12, h / 2 + 15, 5, 0, 7); a.arc(w / 2 + 12, h / 2 + 15, 5, 0, 7); a.fill();
    textFit(a, '踏切', w / 2, h / 2 + 34, 40, 13, '#1b1b1b', 900);
  });
  ['桜橋', '川原橋', '緑橋', '月見橋'].forEach((name, i) => A.add('bridge' + i, 64, 176, (a, e, w, h) => { // carved stone name plates on the bridge posts
    rect(a, 0, 0, w, h, '#b9b5ab'); grain(a, A, w, h, 0.2);
    rect(a, 6, 6, w - 12, h - 12, '#a7a398'); vText(a, name, w / 2, 14, h - 14, 34, '#3f3c37', 800);
  }));
  A.add('signal', 240, 84, (a, e, w, h) => { // horizontal Japanese traffic signal: 青 · 黄 · 赤
    rect(a, 0, 0, w, h, '#4a4d52'); rect(a, 0, 0, w, 5, '#5c6066'); grain(a, A, w, h, 0.12);
    [['#0d4f44', 40], ['#5c4a12', 120], ['#5a1814', 200]].forEach(([c, x]) => { a.fillStyle = '#26282c'; a.beginPath(); a.arc(x, h / 2, 33, 0, 7); a.fill(); a.fillStyle = c; a.beginPath(); a.arc(x, h / 2, 27, 0, 7); a.fill(); });
  });
  A.add('ped_sig', 64, 128, (a, e, w, h) => {
    rect(a, 0, 0, w, h, '#3d4045');
    a.fillStyle = '#5a1814'; a.fillRect(8, 8, w - 16, h / 2 - 12); a.fillStyle = '#0d4f44'; a.fillRect(8, h / 2 + 4, w - 16, h / 2 - 12);
    a.fillStyle = 'rgba(255,255,255,0.18)'; a.beginPath(); a.arc(w / 2, h * 0.18, 6, 0, 7); a.fill(); a.fillRect(w / 2 - 5, h * 0.24, 10, 18);
  });
  A.add('tomare', 256, 96, (a, e, w, h) => { // painted 止まれ: white on transparent (alpha-tested)
    a.clearRect(0, 0, w, h); a.fillStyle = 'rgba(244,244,238,0.012)'; a.fillRect(0, 0, w, h); // near-transparent white: no dark fringes when blended
    textFit(a, '止まれ', w / 2, h / 2 + 4, w * 0.92, 84, '#f4f4ee', 900);
  });
  ['本町歩道橋', '桜町歩道橋', '駅前歩道橋'].forEach((t, i) => A.add('hodokyo' + i, 256, 44, (a, e, w, h) => {
    rect(a, 0, 0, w, h, '#1f4f96'); a.strokeStyle = '#fff'; a.lineWidth = 3; a.strokeRect(4, 4, w - 8, h - 8); textFit(a, t, w / 2, h / 2 + 1, w * 0.85, 28, '#fff', 800);
  }));
  const ST = [['稲穂', 'いなほ', 'Inaho'], ['夕凪', 'ゆうなぎ', 'Yūnagi'], ['水鏡', 'みずかがみ', 'Mizukagami'], ['蛍野', 'ほたるの', 'Hotaruno']];
  ST.forEach(([kan, hira, rom], i) => {
    const prev = ST[(i + 3) % 4][0], next = ST[(i + 1) % 4][0];
    A.add('ekimei' + i, 320, 124, (a, e, w, h) => { // the station-name board (駅名標)
      rect(a, 0, 0, w, h, '#3a3d42'); rect(a, 4, 4, w - 8, h - 8, '#f8f8f3');
      textFit(a, hira, w / 2, 20, w * 0.5, 15, '#2b2b2b', 700);
      textFit(a, kan, w / 2, 52, w * 0.6, 40, '#151515', 900);
      textFit(a, rom, w / 2, 80, w * 0.5, 12, '#555', 600);
      rect(a, 4, h - 30, w - 8, 26, '#1f9a50');
      a.fillStyle = '#fff'; font(a, 12, 700); a.textBaseline = 'middle';
      a.textAlign = 'left'; a.fillText('← ' + prev, 12, h - 17); a.textAlign = 'right'; a.fillText(next + ' →', w - 12, h - 17);
      grain(a, A, w, h, 0.06);
      rect(e, 4, 4, w - 8, h - 8, '#8a8a84'); // gently lit at night
    });
    A.add('ekiplate' + i, 220, 48, (a, e, w, h) => {
      rect(a, 0, 0, w, h, '#4b3326'); grain(a, A, w, h, 0.2); textFit(a, kan + '駅', w / 2, h / 2 + 1, w * 0.8, 30, '#f3ead8', 800);
    });
  });
  for (const dirName of ['l', 'r']) A.add('chev_' + dirName, 96, 120, (a, e, w, h) => { // 線形誘導標: white chevrons on blue
    rect(a, 0, 0, w, h, '#f4f4ef'); rect(a, 4, 4, w - 8, h - 8, '#1e5bb8');
    a.fillStyle = '#f8f8f4'; a.beginPath();
    const s = dirName === 'r' ? 1 : -1, cx = w / 2, cy = h / 2;
    a.moveTo(cx - s * 26, cy - 40); a.lineTo(cx + s * 22, cy); a.lineTo(cx - s * 26, cy + 40); a.lineTo(cx - s * 8, cy + 40); a.lineTo(cx + s * 40, cy); a.lineTo(cx - s * 8, cy - 40); a.closePath(); a.fill();
  });
  ['紅葉トンネル', '岬トンネル', '星見トンネル'].forEach((name, i) => A.add('tunnel' + i, 360, 80, (a, e, w, h) => { // portal name plates
    rect(a, 0, 0, w, h, '#e9e7e0'); rect(a, 4, 4, w - 8, h - 8, '#24403b'); grain(a, A, w, h, 0.08);
    textFit(a, name, w / 2, h * 0.42, w * 0.8, 38, '#f4f2ea', 800); textFit(a, 'L = 170 m', w / 2, h * 0.8, w * 0.4, 13, '#c9d6cf', 600);
  }));
  A.add('yabane', 64, 112, (a, e, w, h) => { // 矢羽根: a red and white arrow pointing down at the road edge
    rect(a, 0, 0, w, h, '#f6f6f2');
    a.fillStyle = '#d42a22';
    for (let y = -20; y < h; y += 26) { a.beginPath(); a.moveTo(4, y); a.lineTo(w / 2, y + 20); a.lineTo(w - 4, y); a.lineTo(w - 4, y + 11); a.lineTo(w / 2, y + 31); a.lineTo(4, y + 11); a.closePath(); a.fill(); }
    a.strokeStyle = '#222'; a.lineWidth = 3; a.strokeRect(1.5, 1.5, w - 3, h - 3);
  });
  A.add('xing_plate', 128, 48, (a, e, w, h) => { rect(a, 0, 0, w, h, '#f6f6f2'); a.strokeStyle = '#d8231c'; a.lineWidth = 4; a.strokeRect(3, 3, w - 6, h - 6); textFit(a, '踏切注意', w / 2, h / 2, w * 0.8, 26, '#d8231c', 900); });
  A.add('rail', 240, 80, (a, e, w, h) => { // see-through balcony railing (alpha-tested)
    a.clearRect(0, 0, w, h);
    rect(a, 0, 0, w, 7, '#e9ebee'); rect(a, 0, 6, w, 2, 'rgba(60,70,80,0.5)'); rect(a, 0, h - 6, w, 6, '#d5d8dc');
    for (let x = 3; x < w; x += 9) { rect(a, x, 7, 3, h - 13, '#e2e5e9'); rect(a, x + 2, 7, 1, h - 13, 'rgba(70,80,90,0.45)'); }
  });
  // 護岸: a river's low-water revetment of concrete blocks laid diagonally (間知ブロック) — mortar joints, each block its own
  // grey, wet and darker along the bottom (the waterline), a little moss there, a cast coping along the top. Own rng
  A.add('gogan', 256, 224, (a, e, w, h) => {
    const gr = rng(4242);
    rect(a, 0, 0, w, h, '#3d3f3c');
    const B = 38, sq = B / Math.SQRT2;
    a.save(); a.beginPath(); a.rect(0, 22, w, h - 22); a.clip();
    for (let j = -2; j * sq < h + B; j++) for (let i = -2; i * B < w + B; i++) { // diamonds on a 45° lattice
      const cx = i * B + (j % 2 ? B / 2 : 0), cy = 22 + j * sq, g = 0.52 + gr() * 0.17, wet = Math.min(1, Math.max(0, (cy - h * 0.55) / (h * 0.4)));
      const v = Math.round(255 * g * (1 - 0.38 * wet)), col = `rgb(${v - 4},${v - 2},${v - 9})`;
      a.fillStyle = col; a.beginPath(); a.moveTo(cx, cy - sq + 3.5); a.lineTo(cx + sq - 3.5, cy); a.lineTo(cx, cy + sq - 3.5); a.lineTo(cx - sq + 3.5, cy); a.closePath(); a.fill();
      a.fillStyle = 'rgba(255,255,255,0.12)'; a.beginPath(); a.moveTo(cx, cy - sq + 3.5); a.lineTo(cx + sq - 3.5, cy); a.lineTo(cx, cy); a.closePath(); a.fill(); // lit upper faces
      if (wet > 0.3 && gr() < 0.5) { a.fillStyle = `rgba(70,96,52,${0.25 + 0.3 * gr()})`; a.beginPath(); a.arc(cx + (gr() - 0.5) * 10, cy + 6, 4 + gr() * 6, 0, 7); a.fill(); } // moss
    }
    a.restore();
    vgrad(a, 0, h * 0.55, w, h * 0.45, [[0, 'rgba(26,32,28,0)'], [1, 'rgba(26,32,28,0.55)']]); // the waterline: wet, darker
    rect(a, 0, 0, w, 22, '#8c8d87'); rect(a, 0, 18, w, 4, 'rgba(0,0,0,0.3)'); rect(a, 0, 0, w, 3, 'rgba(255,255,255,0.2)'); // the coping
    grain(a, A, w, h, 0.12);
  });
  // a 町家 balcony's wooden rail (alpha-tested): a top rail and a foot board, square balusters between, dark weathered wood
  A.add('wrail', 240, 80, (a, e, w, h) => {
    a.clearRect(0, 0, w, h);
    rect(a, 0, 0, w, 9, '#6a4a34'); rect(a, 0, 0, w, 2, 'rgba(255,225,190,0.25)'); rect(a, 0, 8, w, 2, 'rgba(20,10,5,0.45)');
    rect(a, 0, h - 10, w, 10, '#5e412e'); rect(a, 0, h - 10, w, 2, 'rgba(255,225,190,0.18)');
    for (let x = 4; x < w; x += 12) { rect(a, x, 9, 5, h - 19, '#634632'); rect(a, x, 9, 1.2, h - 19, 'rgba(255,225,190,0.18)'); rect(a, x + 4, 9, 1, h - 19, 'rgba(20,10,5,0.4)'); }
    grain(a, A, w, h, 0.15);
  });
  // a 町家's side wall: weathered horizontal boards (dark, oiled), the odd board lighter or patched (it tiles every 3 m,
  // so nothing in it may stand out). Its own rng (the shared one would repaint every later cell)
  A.add('woodwall', B, B, (a, e, w, h) => {
    const q = rng(5151);
    rect(a, 0, 0, w, h, '#5e4130');
    for (let y = 0; y < h; y += 16) {
      const k = q();
      rect(a, 0, y, w, 16, k < 0.15 ? '#6b4b37' : k < 0.3 ? '#553a2b' : '#5e4130');
      rect(a, 0, y, w, 2, 'rgba(255,220,180,0.12)'); rect(a, 0, y + 14, w, 2, 'rgba(15,8,4,0.45)');
      for (let x = q() * 80; x < w; x += 60 + q() * 90) rect(a, x, y + 2, 1.5, 12, 'rgba(15,8,4,0.35)'); // board ends
    }
    vgrad(a, 0, 0, w, h, [[0, 'rgba(255,240,220,0.06)'], [1, 'rgba(0,0,0,0.16)']]);
    grain(a, A, w, h, 0.2);
  });
  return A;
}
// ================================================================================ the painted atlas
// A second texture pair (albedo + half-size emissive) for the painted cells: the shopping street's painted fronts, its big
// lit signs and the painted houses. The atlas material reads it for every cell whose u is 2 or more (materials.js
// paintedAtlas), so it costs no new material, program or draw. Its cells are listed with the procedural ones (one
// namespace: props.js finds both with uv()). Sized per tier to what it holds: on desktops the fronts at 120 px/m and the
// houses at 48 px/m; on phones and in the X card half that and 32 px/m.
const FRONT_SHOPS = 11, FRONT_UPPERS = [7, 8, 9, 10, 11]; // shop_p0…p10; win7…win11 and their lit 'L' twins
/** The big vertical signs (袖看板) standing off the shophouses at the first floor, after the city painting's: light boxes
 *  (a white panel lit from inside, a neon tube bent round its edge, the name in strong ink) and coloured panels with white
 *  lettering. They glow by day too (their names start 'vs': props.js gives them the neon light code).
 *  [text, panel, ink, neon tube (or null), panel lit from inside]  */
export const BIG_SIGNS = [
  ['焼き鳥', '#fbf6f2', '#c8102e', '#ff4fd8', 1],
  ['居酒屋', '#fdf8ee', '#c41e2a', null, 1],
  ['そば', '#fbf7ef', '#1f2a6e', '#3fd8ff', 1],
  ['洋品店', '#2a8a5a', '#ffffff', null, 0],
  ['スナック', '#2a1f4a', '#ff8ae8', '#b45cff', 0],
  ['カラオケ', '#c8287a', '#ffffff', '#ffd0f0', 0],
  ['中華料理', '#1f4fa8', '#ffffff', null, 0],
  ['ラーメン', '#c8241c', '#fff6d8', '#ffc94a', 0],
  ['喫茶', '#fdf4e4', '#6a3a1e', '#ffb84a', 1],
  ['焼肉', '#fbf6f2', '#b8186a', '#b45cff', 1],
  ['焼き鳥', '#fbf4fb', '#a0128a', '#b45cff', 1], // (the painting's other 焼き鳥, violet: only in the opening view, props.js)
];
const rrect = (g, x, y, w, h, r) => { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); };
function bigSign(A, a, e, w, h, [text, panel, ink, neon, box]) {
  const k = w / 160, m = 6 * k, r = 12 * k; // (sized for 160 × 384 px; phones paint it at half that)
  // the albedo: a dark metal rim, the panel (a little lighter in the middle, as a lit box is), the tube and its halo
  rect(a, 0, 0, w, h, '#2a2b30'); rrect(a, m * 0.5, m * 0.5, w - m, h - m, r); a.fillStyle = panel; a.fill();
  a.save(); rrect(a, m * 0.5, m * 0.5, w - m, h - m, r); a.clip();
  const g = a.createRadialGradient(w / 2, h / 2, w * 0.1, w / 2, h / 2, h * 0.62);
  g.addColorStop(0, box ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.12)'); g.addColorStop(1, 'rgba(0,0,0,0.14)');
  a.fillStyle = g; a.fillRect(0, 0, w, h); a.restore();
  const tube = (c, col, glow, core) => {
    c.save(); rrect(c, m + 5 * k, m + 5 * k, w - 2 * m - 10 * k, h - 2 * m - 10 * k, r * 0.8);
    c.shadowColor = col; c.shadowBlur = glow * k; c.strokeStyle = col; c.lineWidth = 6 * k; c.stroke();
    c.shadowBlur = 0; c.strokeStyle = core; c.lineWidth = 2.2 * k; c.stroke(); c.restore();
  };
  if (neon) tube(a, neon, 10, '#fff4fb');
  else { a.save(); rrect(a, m + 5 * k, m + 5 * k, w - 2 * m - 10 * k, h - 2 * m - 10 * k, r * 0.8); a.strokeStyle = ink; a.globalAlpha = 0.7; a.lineWidth = 3 * k; a.stroke(); a.restore(); }
  const y0 = m + 20 * k, y1 = h - m - 20 * k, size = Math.min(w * 0.62, (y1 - y0) / [...text].length);
  vText(a, text, w / 2, y0, y1, size, ink, 900, box ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.25)');
  grain(a, A, w, h, 0.05);
  // the glow: a lit box's whole panel, softer than its tube; a coloured panel in its own colour, its letters bright
  rect(e, 0, 0, w, h, '#000'); rrect(e, m * 0.5, m * 0.5, w - m, h - m, r);
  e.fillStyle = box ? '#b4aea4' : neon && panel === '#2a1f4a' ? '#100c1c' : panel; e.globalAlpha = box ? 1 : 0.55; e.fill(); e.globalAlpha = 1;
  if (neon) tube(e, neon, 12, '#ffffff');
  vText(e, text, w / 2, y0, y1, size, box ? ink : panel === '#2a1f4a' ? ink : '#ffffff', 900);
  if (box) { e.save(); e.globalCompositeOperation = 'multiply'; vText(e, text, w / 2, y0, y1, size, '#8a8a8a', 900); e.restore(); } // (ink on a lit box: glowing, but darker than the panel)
}
/** The shophouses' canopy tiles (庇) as in the city painting: a lighter blue slate than the roofs, every row of round
 *  tiles (丸瓦) a rounded ridge catching the light, and along the eave (the cell's bottom edge) their round ends (軒丸瓦),
 *  scalloped (the gaps between them transparent: the atlas alpha-tests). The cell spans ~3 m of eave and the 1.26 m slope,
 *  so it is painted in a frame squeezed to those proportions (a tile end comes out round on the canopy) */
function canopyTiles(A, a, e, w, h) {
  const q = rng(7331), sy = (h / 1.26) / (w / 3); // (v px per u px for round shapes)
  a.clearRect(0, 0, w, h);
  const n = 11, tw = w / n, endH = 0.15 * (h / 1.26); // rolls across the 3 m; the round ends' height in px
  rect(a, 0, 0, w, h - endH * 0.5, '#4d5f92');
  for (let i = 0; i < n; i++) { // the round tiles: a ridge lit along its top, dark gutters between
    const x = i * tw;
    const g = a.createLinearGradient(x, 0, x + tw, 0);
    g.addColorStop(0, '#2c3760'); g.addColorStop(0.18, '#5a70a8'); g.addColorStop(0.45, '#9fb4e0'); g.addColorStop(0.7, '#6a80b8'); g.addColorStop(1, '#33416e');
    a.fillStyle = g; a.fillRect(x, 0, tw, h - endH * 0.5);
  }
  for (let y = h - endH * 0.5 - 52; y > 0; y -= 52) { // the courses: each row of tiles overlapping the next, a shadow under its lip
    vgrad(a, 0, y, w, 10, [[0, 'rgba(20,26,50,0.45)'], [1, 'rgba(20,26,50,0)']]); rect(a, 0, y - 2, w, 2, 'rgba(200,215,240,0.35)');
  }
  for (let i = 0; i < n; i++) { // the round ends along the eave
    const cx = (i + 0.5) * tw, cy = h - endH * 0.5, r = tw * 0.47;
    a.save(); a.translate(cx, cy); a.scale(1, sy);
    a.fillStyle = '#26305a'; a.beginPath(); a.arc(0, 0, r, 0, 7); a.fill();
    a.fillStyle = '#5c72aa'; a.beginPath(); a.arc(0, 0, r * 0.8, 0, 7); a.fill();
    a.fillStyle = 'rgba(190,206,240,0.8)'; a.beginPath(); a.arc(-r * 0.2, -r * 0.25, r * 0.38, 0, 7); a.fill();
    a.fillStyle = '#3a4878'; a.beginPath(); a.arc(0, 0, r * 0.22, 0, 7); a.fill(); // (the boss in the middle)
    a.restore();
  }
  a.save(); a.globalCompositeOperation = 'source-atop'; a.globalAlpha = 0.12; a.fillStyle = A.grain; a.fillRect(0, 0, w, h); a.restore();
  for (let i = 0; i < 40; i++) { a.fillStyle = q() < 0.5 ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,20,0.1)'; a.fillRect(q() * w, q() * (h - endH), tw * (0.5 + q()), 3 + q() * 6); } // (weathering)
}
/** the city painting's navy board with gold letters (洋品店) for the painted clothes shop */
function navyBoard(A, a, e, w, h, text) {
  rect(a, 0, 0, w, h, '#1c2b5e'); rect(a, 0, 0, w, 4, 'rgba(255,255,255,0.3)'); rect(a, 0, h - 5, w, 5, 'rgba(0,0,0,0.25)');
  a.strokeStyle = '#d9b44a'; a.lineWidth = 2; a.strokeRect(7, 7, w - 14, h - 14);
  textFit(a, text, w / 2, h / 2 + 2, w * 0.66, 52, '#f6d35a', 900, 'rgba(60,40,0,0.5)'); grain(a, A, w, h, 0.06);
  rect(e, 0, 0, w, h, '#0a1024'); textFit(e, text, w / 2, h / 2 + 2, w * 0.66, 52, '#f0c850', 900);
}
// the fronts' procedural paint, in case the paintings don't load: plain warm timber shopfronts (each from its own rng)
function warmBay(A, a, e, w, h, seed, door) {
  const q = rng(seed), k = w / 360;
  rect(a, 0, 0, w, h, '#4b3426'); vgrad(a, 0, 0, w, h, [[0, 'rgba(255,230,200,0.08)'], [1, 'rgba(0,0,0,0.2)']]);
  const gx = w * 0.12, gy = h * (door ? 0.3 : 0.17), gw = w * 0.76, gh = h * (door ? 0.62 : 0.56);
  for (const c of [a, e]) { rect(c, gx, gy, gw, gh, '#e9b56c'); vgrad(c, gx, gy, gw, gh, [[0, 'rgba(255,240,200,0.55)'], [1, 'rgba(110,60,25,0.4)']]); }
  if (!door) for (let sy = gy + gh * 0.32; sy < gy + gh - 6 * k; sy += gh * 0.22) {
    for (let x = gx + 4 * k; x < gx + gw - 10 * k; x += (9 + q() * 12) * k) { const hh = (10 + q() * 12) * k; rect(a, x, sy - hh, 7 * k, hh, ['#c0503a', '#3a6ab0', '#e8c050', '#5a9a50', '#d07a9a'][Math.floor(q() * 5)]); }
    rect(a, gx, sy, gw, 5 * k, '#6e4a30');
  }
  if (door) { rect(a, gx, gy - h * 0.12, gw, h * 0.16, '#28356a'); rect(e, gx, gy - h * 0.12, gw, h * 0.16, '#000'); }
  rect(a, gx + gw / 2 - 4 * k, gy, 8 * k, gh, '#4b3426'); rect(e, gx + gw / 2 - 4 * k, gy, 8 * k, gh, '#000'); // the mullion
  rect(a, 0, gy + gh, w, 6 * k, '#3a281d');
  grain(a, A, w, h, 0.15);
}
// …and plain upper floors: cream plaster or dark boards, a timber-framed window (lit: warm lamplight behind it)
function plainUpper(A, a, e, w, h, wood, lit) {
  const k = w / 360;
  rect(a, 0, 0, w, h, wood ? '#5e4130' : '#ece2cc');
  if (wood) for (let y = 0; y < h; y += 16 * k) rect(a, 0, y, w, 2 * k, 'rgba(15,8,4,0.4)');
  for (const x of [0, w - 14 * k]) rect(a, x, 0, 14 * k, h, '#4b3426');
  rect(a, 0, h - 12 * k, w, 12 * k, '#3a281d');
  const x = w * 0.2, y = h * 0.22, ww = w * 0.6, wh = h * 0.46;
  rect(a, x - 8 * k, y - 8 * k, ww + 16 * k, wh + 16 * k, '#4a3020');
  vgrad(a, x, y, ww, wh, [[0, '#4f78b8'], [1, '#a6c8ec']]); rect(a, x + ww / 2 - 3 * k, y, 6 * k, wh, '#4a3020');
  if (lit) { rect(e, x, y, ww, wh, '#ffcf8f'); rect(e, x + ww / 2 - 3 * k, y, 6 * k, wh, '#000'); }
  grain(a, A, w, h, 0.12);
}
/** The city painting's tall pale blocks behind the shophouses (props.js block): two floors of one 3.4 m bay (40 px/m),
 *  pale concrete drawn soft (each block's vertex tint gives it its own cream, white or grey). kind A: a ribbon of blue
 *  glass across the bay on each floor (offices); B: two punched windows a floor; C: flats' balconies (a white parapet, the
 *  sliding window in the shade behind it); D: an end wall, plain but for a small window. lit: the windows' lamplight
 *  (the names end in L: a home's window, switching on at its own moment at dusk) */
const BLOCK_KINDS = ['A', 'B', 'C', 'D'];
function blockFace(A, a, e, w, h, kind, lit, seed) {
  const q = rng(seed), fh = h / 2, k = w / 136;
  const pane = (x, y, ww, hh, tone) => { // blue glass with the sky in it: darker at the top, a pale sheen across
    vgrad(a, x, y, ww, hh, tone ? [[0, '#5d80b8'], [1, '#9ab8de']] : [[0, '#6f95c9'], [0.6, '#a8c3e6'], [1, '#c9dbf0']]);
    a.save(); a.beginPath(); a.rect(x, y, ww, hh); a.clip(); a.fillStyle = 'rgba(255,255,255,0.22)';
    const sx = x + ww * q(); a.beginPath(); a.moveTo(sx, y); a.lineTo(sx + ww * 0.22, y); a.lineTo(sx - ww * 0.18, y + hh); a.lineTo(sx - ww * 0.4, y + hh); a.fill(); a.restore();
    if (lit) { const warm = q() < 0.75; rect(e, x, y, ww, hh, warm ? '#ffc98a' : '#dfe6f4'); vgrad(e, x, y + hh * 0.55, ww, hh * 0.45, [[0, 'rgba(0,0,0,0)'], [1, 'rgba(0,0,0,0.35)']]); }
  };
  rect(a, 0, 0, w, h, '#efeae1');
  for (let f = 0; f < 2; f++) {
    const y = f * fh;
    vgrad(a, 0, y, w, fh, [[0, 'rgba(255,255,255,0.08)'], [1, 'rgba(70,60,50,0.07)']]);
    if (kind === 'A') { // the ribbon: glass across the whole bay, slim mullions, a pale spandrel under it
      const y0 = y + fh * 0.2, gh = fh * 0.5; pane(0, y0, w, gh, 0);
      for (const x of [0, w / 3, (2 * w) / 3]) rect(a, x, y0, 3 * k, gh, '#d6d2ca');
      rect(a, 0, y0 + gh, w, 3 * k, '#f7f4ee'); rect(a, 0, y0 - 2 * k, w, 2 * k, 'rgba(60,55,50,0.25)');
    } else if (kind === 'B') { // two punched windows in light frames, now and then a curtain drawn
      for (const x0 of [0.13, 0.55]) {
        const x = w * x0, ww = w * 0.32, y0 = y + fh * 0.22, gh = fh * 0.48;
        rect(a, x - 3 * k, y0 - 3 * k, ww + 6 * k, gh + 6 * k, '#d9d5cd'); pane(x, y0, ww, gh, 1);
        if (q() < 0.35) { rect(a, x, y0, ww * 0.45, gh, '#efe7d6'); if (lit) rect(e, x, y0, ww * 0.45, gh, '#ffdcae'); }
        rect(a, x - 3 * k, y0 + gh + 3 * k, ww + 6 * k, 3 * k, 'rgba(60,55,50,0.18)');
      }
    } else if (kind === 'C') { // a balcony: the recess in shade, its sliding window, the white parapet in front
      rect(a, 0, y, w, fh * 0.66, '#c4bdb2'); vgrad(a, 0, y, w, fh * 0.2, [[0, 'rgba(60,55,60,0.35)'], [1, 'rgba(60,55,60,0)']]);
      pane(w * 0.1, y + fh * 0.12, w * 0.8, fh * 0.52, 1); rect(a, w * 0.5 - 2 * k, y + fh * 0.12, 4 * k, fh * 0.52, '#cfcac2');
      if (q() < 0.4) { rect(a, w * 0.12, y + fh * 0.36, w * (0.3 + q() * 0.4), 3 * k, '#9a948c'); for (let x = w * 0.16; x < w * 0.7; x += w * 0.14) rect(a, x, y + fh * 0.37, w * 0.09, fh * 0.15, q() < 0.5 ? '#f4f1ea' : '#a9c4dc'); } // (washing)
      rect(a, 0, y + fh * 0.62, w, fh * 0.38, '#f5f2ec'); rect(a, 0, y + fh * 0.62, w, 3 * k, '#ffffff');
      vgrad(a, 0, y + fh * 0.62, w, fh * 0.38, [[0, 'rgba(255,255,255,0.0)'], [1, 'rgba(60,55,50,0.1)']]);
      rect(a, 0, y + fh - 3 * k, w, 3 * k, 'rgba(60,55,50,0.22)');
    } else { // an end wall: panel joints, one small window a floor, a downpipe
      rect(a, 0, y + fh - 2 * k, w, 2 * k, 'rgba(70,65,60,0.14)'); rect(a, w * 0.5, y, 1.5 * k, fh, 'rgba(70,65,60,0.08)');
      const x = w * 0.6, ww = w * 0.22, y0 = y + fh * 0.3, gh = fh * 0.3; rect(a, x - 2 * k, y0 - 2 * k, ww + 4 * k, gh + 4 * k, '#d9d5cd'); pane(x, y0, ww, gh, 1);
      rect(a, w * 0.08, y, 4 * k, fh, '#d2cec6');
    }
  }
  grain(a, A, w, h, 0.1);
}
/** neon tubes along the shophouses' eaves and canopies, as in the city painting (pink, violet, mint green): a strip of
 *  glowing glass, its core near white; across the cell its section (the quads stretch it along the eave). Named 'vs…': the
 *  neon light code, bright by day too (props.js litOf), so the bloom gives each its soft halo */
const NEON_TUBES = [['vsNp', '#ff4fc8'], ['vsNv', '#a95cff'], ['vsNg', '#38f0b8']];
function neonTube(A, a, e, w, h, col) {
  for (const c of [a, e]) {
    rect(c, 0, 0, w, h, col);
    vgrad(c, 0, 0, w, h, [[0, 'rgba(255,255,255,0)'], [0.35, 'rgba(255,240,252,0.75)'], [0.55, 'rgba(255,250,255,0.9)'], [0.8, 'rgba(255,255,255,0.1)'], [1, 'rgba(0,0,0,0.15)']]);
  }
}
/** the canopies' eave (props.js machiya): its round tile ends (軒丸瓦) face on, a bold scalloped edge along the street as the
 *  city painting draws them: 15 ends of 20 cm across ~3 m, each a dark rim, a slate face lit from above and a boss (the gaps
 *  transparent: the atlas alpha-tests) */
function eaveEnds(A, a, e, w, h) {
  a.clearRect(0, 0, w, h);
  const n = 15, tw = w / n, r = Math.min(tw, h) * 0.47;
  for (let i = 0; i < n; i++) {
    const cx = (i + 0.5) * tw, cy = h * 0.5;
    a.fillStyle = '#1c2340'; a.beginPath(); a.arc(cx, cy, r, 0, 7); a.fill();
    const g = a.createLinearGradient(0, cy - r, 0, cy + r); g.addColorStop(0, '#8593b8'); g.addColorStop(0.45, '#4d5a86'); g.addColorStop(1, '#283154');
    a.fillStyle = g; a.beginPath(); a.arc(cx, cy, r * 0.78, 0, 7); a.fill();
    a.fillStyle = '#262f52'; a.beginPath(); a.arc(cx, cy, r * 0.26, 0, 7); a.fill();
  }
}
/** the cells' sizes in rows of 2048 px, as Atlas.add lays them out: the y under the last one */
function flowEnd(sizes) {
  let x = 0, y = 0, rowH = 0;
  for (const [w, h] of sizes) { if (x + w + 4 > SW) { x = 0; y += rowH + 4; rowH = 0; } x += w + 4; rowH = Math.max(rowH, h); }
  return y + rowH;
}
/** Builds the painted atlas for a tier ('hi' or 'lo'): the fronts' cells (their procedural paint, then the paintings
 *  over it when `fa` loaded: painted.js loadFrontAtlas), the big signs, and the painted houses' rows when `ha` loaded
 *  (loadHouseAtlas; .houses says whether they fit). `main`: the procedural atlas, whose cell list it shares. */
export function buildPaintedAtlas(main, tier, fa, ha) {
  const k = tier === 'hi' ? 1 : 0.5, SB = [360 * k, 432 * k], UB = [360 * k, 348 * k], VS = [160 * k, 384 * k], NB = [512, 76];
  const shops = [], uppers = [], signs = [];
  for (let i = 0; i < FRONT_SHOPS; i++) shops.push(['shop_p' + i, SB, (A, a, e, w, h) => warmBay(A, a, e, w, h, 6100 + i, i === 2 || i === 7 || i === 10)]);
  for (const n of FRONT_UPPERS) for (const lit of [false, true]) uppers.push(['win' + n + (lit ? 'L' : ''), UB, (A, a, e, w, h) => plainUpper(A, a, e, w, h, n === 8 || n === 11, lit)]);
  BIG_SIGNS.forEach((spec, i) => signs.push(['vsB' + i, VS, (A, a, e, w, h) => bigSign(A, a, e, w, h, spec)]));
  // (in this order the narrow signs fill the rows' ends: 2340 rows on desktops instead of 2432)
  const list = [...shops.slice(0, 5), signs[0], ...shops.slice(5, 10), signs[1], shops[10], ...uppers.slice(0, 4), signs[2], ...uppers.slice(4, 9), signs[3], uppers[9], ...signs.slice(4),
    ['hsN_洋品店', NB, (A, a, e, w, h) => navyBoard(A, a, e, w, h, '洋品店')], ['kawaraC', [240, 256], canopyTiles],
    // (the tall blocks' faces and the neon tubes: in the canopy tiles' row, which had room for them: the atlas keeps its size)
    ...BLOCK_KINDS.flatMap((kd, i) => [false, true].map(lit => ['wb' + kd + (lit ? 'L' : ''), [136, 248], (A, a, e, w, h) => blockFace(A, a, e, w, h, kd, lit, 7700 + i)])),
    ...NEON_TUBES.map(([n, col]) => [n, [96, 24], (A, a, e, w, h) => neonTube(A, a, e, w, h, col)]), ['kawaraE', [300, 24], eaveEnds]];
  const end = flowEnd(list.map(c => c[1])), H = Math.ceil((end + (ha ? 16 + ha.rows : 4)) / 4) * 4;
  const P = new Atlas(H, 2, main.cells);
  for (const [n, [w, h], f] of list) P.add(n, w, h, (a, e, cw, ch) => f(P, a, e, cw, ch));
  if (fa) { const W = fa.img.width, Hh = fa.img.height; for (const t of fa.tiles) P.paintCell(t.name, fa.img, t.x * W, t.y * Hh, t.w * W, t.h * Hh, t.ey < 0 ? -1 : t.ey * Hh); }
  P.houses = !!ha && paintHouses(P, ha);
  return P;
}
// ------------------------------------------------------------------ the world atlas (the regions after Japan)
// The regions' own cells (path.js REGION; Turkey's so far: its flag, its road signs, the Bosphorus's wooden houses' bays and
// their roof tiles), in a texture pair of their own: its cells' u is offset by 4 (materials.js worldAtlas reads uWMap for
// them), so Japan's two atlases keep every texel where it was. Painted here, on the painted atlas's tiers.
const TR_FONT = '"Helvetica Neue","Arial","DejaVu Sans","Liberation Sans",sans-serif';
// the Bosphorus's wooden houses (Arnavutköy, as the concept painting has them): their upper floors in boards stained
// walnut, honey, a weathered grey and painted cream; their ground floors plastered cream, ochre or a stone grey
const TR_WOOD = ['#8c6a51', '#a28366', '#8f867c', '#e8dcc5']; // (warm brown, light brown, grey-brown, painted cream: the concept's, lit)
const TR_PLASTER = ['#efe4c8', '#dfc89c', '#d6cfbf'];
// …and the pastel plastered houses' upper floors (no footing): cream, pale yellow, pale rose, a pale blue-grey
const TR_PASTEL = ['#f1e7cf', '#ecd9a4', '#ecd2c6', '#d3dadb'];
/** one upper floor's bay of a wooden house (2.6 m wide, 3 m tall) or a plastered ground floor's: the boards (or the plaster
 *  and its stone footing), a tall white sash window of six panes with its cornice and sill (on wood, a pair of shutters
 *  folded back now and then); lit: its room glowing at night */
function trBay(A, a, e, w, h, col, lit, seed, wood, footing = true, frameCol = '#f4f1ea') {
  const r = rng(seed), m = w / 2.6;
  rect(a, 0, 0, w, h, col);
  if (wood) { // boards ~14 cm, each its own shade, a dark shadow line under each
    const bh = m * 0.14;
    for (let y = 0; y < h; y += bh) { a.fillStyle = `rgba(${r() < 0.5 ? '255,240,220' : '40,25,15'},${0.03 + r() * 0.06})`; a.fillRect(0, y, w, bh); rect(a, 0, y + bh - 1.5, w, 1.5, 'rgba(35,22,12,0.32)'); }
    rect(a, 0, 0, m * 0.12, h, 'rgba(40,25,15,0.18)'); rect(a, w - m * 0.12, 0, m * 0.12, h, 'rgba(40,25,15,0.18)'); // corner boards
    rect(a, 0, h - m * 0.16, w, m * 0.16, 'rgba(40,25,15,0.22)'); // the floor's band
  } else {
    vgrad(a, 0, 0, w, h, [[0, 'rgba(255,255,255,0.08)'], [1, 'rgba(0,0,0,0.08)']]);
    if (footing) { // a stone footing
      rect(a, 0, h - m * 0.42, w, m * 0.42, '#b9b0a0');
      for (let x = 0; x < w; x += m * 0.6) rect(a, x, h - m * 0.42, 1.5, m * 0.42, 'rgba(0,0,0,0.18)');
      rect(a, 0, h - m * 0.42, w, 1.5, 'rgba(0,0,0,0.2)');
    } else { rect(a, 0, h - m * 0.12, w, m * 0.12, 'rgba(255,255,255,0.35)'); rect(a, 0, h - m * 0.02, w, m * 0.02, 'rgba(0,0,0,0.25)'); } // (a moulding at the floor)
  }
  const ww = m * 0.92, wh = m * (wood ? 1.6 : 1.45), wx = (w - ww) / 2, wy = h - m * (wood ? 0.85 : 1.05) - wh;
  if (wood && r() < 0.45) for (const sx of [wx - ww * 0.52, wx + ww + ww * 0.04]) { // shutters folded back
    rect(a, sx, wy, ww * 0.48, wh, '#5e3f2a'); for (let y = wy + 3; y < wy + wh; y += m * 0.07) rect(a, sx + 2, y, ww * 0.48 - 4, 1.2, 'rgba(255,235,210,0.18)');
  }
  rect(a, wx - m * 0.12, wy - m * 0.24, ww + m * 0.24, m * 0.12, frameCol); rect(a, wx - m * 0.12, wy - m * 0.13, ww + m * 0.24, m * 0.03, 'rgba(0,0,0,0.25)'); // cornice
  frame(a, wx, wy, ww, wh, m * 0.07, frameCol);
  const pw = ww / 2, ph = wh / 3;
  for (let i = 0; i < 2; i++) for (let j = 0; j < 3; j++) glass(a, wx + i * pw + 2, wy + j * ph + 2, pw - 4, ph - 4, r, 1);
  rect(a, wx - m * 0.1, wy + wh + m * 0.04, ww + m * 0.2, m * 0.08, frameCol); // sill
  if (r() < 0.35) { curtain(a, wx + 2, wy + 2, ww * 0.3, wh - 4, r() < 0.5 ? '#efe6d2' : '#f2dcd2'); }
  if (lit) { litRoom(e, wx, wy, ww, wh, r() < 0.3 ? '#ffe7c0' : '#ffc77e', r); for (let i = 1; i < 2; i++) rect(e, wx + i * pw - 2, wy, 4, wh, '#000'); for (let j = 1; j < 3; j++) rect(e, wx, wy + j * ph - 2, ww, 4, '#000'); }
  grain(a, A, w, h, 0.12);
}
/** a ground floor of grey stone blocks (the hillside houses' footings), a window behind an iron grille; lit: its room */
function trStone(A, a, e, w, h, lit, seed) {
  const r = rng(seed), m = w / 2.6, bh = m * 0.42;
  rect(a, 0, 0, w, h, '#a49c8f');
  for (let y = 0, row = 0; y < h; y += bh, row++) for (let x = (row % 2) * -m * 0.45; x < w; x += m * 0.9) {
    const k = 0.86 + r() * 0.22; a.fillStyle = `rgb(${Math.round(170 * k)},${Math.round(162 * k)},${Math.round(150 * k)})`; a.fillRect(x + 1.5, y + 1.5, m * 0.9 - 3, bh - 3);
  }
  const ww = m * 0.85, wh = m * 1.2, wx = (w - ww) / 2, wy = h - m * 1.05 - wh;
  rect(a, wx - m * 0.08, wy - m * 0.08, ww + m * 0.16, wh + m * 0.16, '#d9d2c4');
  glass(a, wx, wy, ww, wh, r, 1);
  if (lit) litRoom(e, wx, wy, ww, wh, '#ffc77e', r);
  a.fillStyle = '#2a2a2e'; for (let x = wx + ww / 6; x < wx + ww; x += ww / 6) a.fillRect(x - 1, wy, 2.5, wh); a.fillRect(wx, wy + wh * 0.5, ww, 2.5); // the grille
  if (lit) { e.fillStyle = '#000'; for (let x = wx + ww / 6; x < wx + ww; x += ww / 6) e.fillRect(x - 1, wy, 2.5, wh); }
  grain(a, A, w, h, 0.16);
}
/** a plastered ground floor's door bay: a panelled double door of dark wood under a fanlight, two steps */
function trDoor(A, a, e, w, h) {
  const m = w / 2.6, col = TR_PLASTER[0];
  rect(a, 0, 0, w, h, col); vgrad(a, 0, 0, w, h, [[0, 'rgba(255,255,255,0.08)'], [1, 'rgba(0,0,0,0.08)']]);
  rect(a, 0, h - m * 0.42, w, m * 0.42, '#b9b0a0');
  const dw = m * 1.2, dh = m * 2.15, dx = (w - dw) / 2, dy = h - m * 0.3 - dh;
  rect(a, dx - m * 0.1, dy - m * 0.1, dw + m * 0.2, dh + m * 0.1, '#ece6da');
  a.fillStyle = '#6f4a30'; a.fillRect(dx, dy, dw, dh);
  for (const [x0, x1] of [[dx + 3, dx + dw / 2 - 2], [dx + dw / 2 + 2, dx + dw - 3]]) for (let j = 0; j < 3; j++) { rect(a, x0 + 3, dy + 6 + j * (dh / 3), x1 - x0 - 6, dh / 3 - 12, 'rgba(0,0,0,0.18)'); rect(a, x0 + 3, dy + 6 + j * (dh / 3), x1 - x0 - 6, 2, 'rgba(255,230,200,0.15)'); }
  a.fillStyle = '#f2eee6'; a.beginPath(); a.arc(w / 2, dy - m * 0.05, dw / 2 + m * 0.08, Math.PI, 0); a.fill();
  const g = a.createLinearGradient(0, dy - dw / 2, 0, dy); g.addColorStop(0, '#5f86c0'); g.addColorStop(1, '#bcd2ea');
  a.fillStyle = g; a.beginPath(); a.arc(w / 2, dy - m * 0.05, dw / 2 - m * 0.02, Math.PI, 0); a.fill();
  rect(a, dx - m * 0.2, h - m * 0.3, dw + m * 0.4, m * 0.15, '#cfc8ba'); rect(a, dx - m * 0.3, h - m * 0.15, dw + m * 0.6, m * 0.15, '#c2baa9');
  grain(a, A, w, h, 0.1);
}
/** the roof's tiles (alaturka kiremit): courses of terracotta barrel tiles, each rounded (lit on one side), its lower lip
 *  shading the course below, now and then an older, darker or paler one; 8 tiles across, 6 courses */
function kiremit(A, a, e, w, h) {
  const r = rng(971), cw = w / 8, rh = h / 6;
  rect(a, 0, 0, w, h, '#8e3b28');
  for (let j = 0; j < 6; j++) for (let i = 0; i < 8; i++) {
    const x = i * cw, y = j * rh, t = r(), k = 0.86 + 0.22 * t;
    const sh = (c, f) => `rgb(${Math.round(c[0] * f)},${Math.round(c[1] * f)},${Math.round(c[2] * f)})`;
    const base = r() < 0.12 ? [146, 96, 78] : [182, 104, 76]; // (a muted terracotta, as painted; now and then an older tile)
    const g = a.createLinearGradient(x, 0, x + cw, 0);
    g.addColorStop(0, sh(base, 0.8 * k)); g.addColorStop(0.32, sh(base, 1.12 * k)); g.addColorStop(0.7, sh(base, 0.86 * k)); g.addColorStop(1, sh(base, 0.58 * k));
    a.fillStyle = g; a.fillRect(x + 1, y, cw - 2, rh);
    rect(a, x + 1, y + rh * 0.84, cw - 2, rh * 0.16, 'rgba(60,18,8,0.4)');
    rect(a, x + 1, y, cw - 2, rh * 0.06, 'rgba(255,220,190,0.18)');
  }
  grain(a, A, w, h, 0.14);
}
/** the Turkish flag (Türk Bayrağı Kanunu's proportions: G its height; the crescent's circles at 0.5 G and 0.5625 G from the
 *  hoist, 0.25 G and 0.2 G across; the star's circle 0.125 G, its middle at 0.729 G, a point towards the hoist) */
function trFlag(a, e, w, h) {
  const G = h, RED = '#e30a17';
  rect(a, 0, 0, w, h, RED);
  a.fillStyle = '#fff'; a.beginPath(); a.arc(0.5 * G, 0.5 * G, 0.25 * G, 0, 7); a.fill();
  a.fillStyle = RED; a.beginPath(); a.arc(0.5625 * G, 0.5 * G, 0.2 * G, 0, 7); a.fill();
  const cx = 0.7292 * G, cy = 0.5 * G, R = 0.125 * G, ri = R * 0.382;
  a.fillStyle = '#fff'; a.beginPath();
  for (let i = 0; i < 10; i++) { const t = Math.PI + (i * Math.PI) / 5, q = i % 2 ? ri : R; a.lineTo(cx + Math.cos(t) * q, cy + Math.sin(t) * q); }
  a.closePath(); a.fill();
  // (a cloth's soft folds)
  const g = a.createLinearGradient(0, 0, w, 0); for (let i = 0; i <= 6; i++) g.addColorStop(i / 6, i % 2 ? 'rgba(0,0,0,0.10)' : 'rgba(255,255,255,0.06)');
  a.fillStyle = g; a.fillRect(0, 0, w, h);
}
/** Turkish road signs: a speed limit (a white disc, a red ring, black figures; its corners cut out of the alpha) */
function trSpeed(A, a, e, w, h, v) {
  a.clearRect(0, 0, w, h);
  const c = w / 2, R = w * 0.48;
  a.fillStyle = '#d42a20'; a.beginPath(); a.arc(c, c, R, 0, 7); a.fill();
  a.fillStyle = '#fbfbf8'; a.beginPath(); a.arc(c, c, R * 0.74, 0, 7); a.fill();
  a.fillStyle = '#1b1b1d'; a.font = `700 ${Math.round(w * 0.42)}px ${TR_FONT}`; a.textAlign = 'center'; a.textBaseline = 'middle'; a.fillText(String(v), c, c + w * 0.02);
}
/** …and a blue direction sign (white border and lettering, an arrow ahead): the shore road's next places */
function trDirSign(A, a, e, w, h, lines) {
  const m = h / 8;
  rect(a, 0, 0, w, h, '#f2f2ee'); rect(a, m * 0.4, m * 0.4, w - m * 0.8, h - m * 0.8, '#1d4f9a');
  a.fillStyle = '#fff'; a.textAlign = 'left'; a.textBaseline = 'middle';
  lines.forEach((t, i) => { a.font = `700 ${Math.round(m * 2.1)}px ${TR_FONT}`; a.fillText(t, w * 0.27, h * (0.32 + 0.38 * i)); });
  a.fillStyle = '#fff'; a.beginPath(); // the arrow, straight on
  const ax = w * 0.13; a.moveTo(ax, m * 1.3); a.lineTo(ax + m * 1.4, m * 3.1); a.lineTo(ax + m * 0.5, m * 3.1); a.lineTo(ax + m * 0.5, h - m * 1.3); a.lineTo(ax - m * 0.5, h - m * 1.3); a.lineTo(ax - m * 0.5, m * 3.1); a.lineTo(ax - m * 1.4, m * 3.1); a.closePath(); a.fill();
}
/** a Turkish tunnel's name plate: white lettering on the blue of Turkey's road signs, a white border, its length */
function trTunnelPlate(A, a, w, h, name) {
  const m = h / 80;
  rect(a, 0, 0, w, h, '#eef0ee'); rect(a, 4 * m, 4 * m, w - 8 * m, h - 8 * m, '#1d4f9a'); grain(a, A, w, h, 0.06);
  a.fillStyle = '#fff'; a.textAlign = 'center'; a.textBaseline = 'middle';
  let fs = Math.round(34 * m); a.font = `700 ${fs}px ${TR_FONT}`; while (a.measureText(name).width > w * 0.86 && fs > 8) { fs--; a.font = `700 ${fs}px ${TR_FONT}`; }
  a.fillText(name, w / 2, h * 0.42);
  a.font = `600 ${Math.round(13 * m)}px ${TR_FONT}`; a.fillStyle = '#d8e2f0'; a.fillText('L = 170 m', w / 2, h * 0.8);
}
/** the Galata Bridge's cast-iron railing panels (W3; alpha-tested, see-through): a panel between two posts, 2.6 m long and its
 *  infill ~1 m tall, a flat bar along its top and its foot. The walkway's (blue-grey, as the concept paints it): diagonal bars
 *  crossing at 45° with a ring round every crossing; the tram line's (brown, its own pattern in the concept and the real
 *  bridge): a lattice of octagons with small squares between them, each outlined as a bar. Lit from above (a light upper
 *  edge on every bar). Each its own rng-free geometry, so the panels tile seamlessly along the bridge */
function galRail(A, a, w, h, kind) {
  a.clearRect(0, 0, w, h);
  const k = h / 100, lw = 3.4 * k, col = kind ? '#36261d' : '#4a6588', hi = kind ? 'rgba(210,170,140,0.32)' : 'rgba(200,220,242,0.5)';
  a.lineCap = 'round'; a.lineJoin = 'round';
  const stroke = path => { a.strokeStyle = col; a.lineWidth = lw; path(); a.stroke(); a.save(); a.translate(0, -lw * 0.3); a.strokeStyle = hi; a.lineWidth = lw * 0.35; path(); a.stroke(); a.restore(); };
  const y0 = 6 * k, y1 = h - 7 * k;
  a.save(); a.beginPath(); a.rect(0, y0, w, y1 - y0); a.clip();
  if (!kind) {
    const P = w / 8; // (eight diamonds a panel: the bars 45° apart, a ring at each crossing)
    stroke(() => { a.beginPath(); for (let x = -h; x < w + h; x += P) { a.moveTo(x, y0); a.lineTo(x + (y1 - y0), y1); a.moveTo(x, y1); a.lineTo(x + (y1 - y0), y0); } });
    stroke(() => { a.beginPath(); const cy = (y0 + y1) / 2; for (let x = -P; x < w + P; x += P) for (const yy of [cy - P / 2, cy + P / 2, cy - (3 * P) / 2, cy + (3 * P) / 2]) { const xx = x + (Math.abs(yy - cy) % P > 1 ? P / 2 : 0); a.moveTo(xx + 0.32 * P, yy); a.arc(xx, yy, 0.32 * P, 0, 6.2832); } });
  } else {
    const P = w / 7, r = P / 2, c = r * Math.tan(Math.PI / 8); // (octagons P across, small squares between their corners)
    stroke(() => { a.beginPath(); const cy = (y0 + y1) / 2;
      for (let x = P / 2; x < w + P; x += P) for (const yy of [cy - P, cy, cy + P]) for (let i = 0; i <= 8; i++) { const t = (i + 0.5) * (Math.PI / 4), px = x + Math.cos(t) * r / Math.cos(Math.PI / 8), py = yy + Math.sin(t) * r / Math.cos(Math.PI / 8); if (i) a.lineTo(px, py); else a.moveTo(px, py); } });
    stroke(() => { a.beginPath(); const cy = (y0 + y1) / 2;
      for (let x = 0; x < w + P; x += P) for (const yy of [cy - P / 2, cy + P / 2, cy - (3 * P) / 2, cy + (3 * P) / 2]) { a.moveTo(x - c, yy); a.lineTo(x, yy - c); a.lineTo(x + c, yy); a.lineTo(x, yy + c); a.closePath(); } });
  }
  a.restore();
  for (const [y, t] of [[0, 6 * k], [h - 7 * k, 7 * k]]) { rect(a, 0, y, w, t, col); rect(a, 0, y, w, t * 0.3, hi); }
}
/** Builds the world atlas for a tier ('hi' or 'lo': half the px). `main`: the procedural atlas, whose cell list it shares;
 *  `th`: the Bosphorus's painted houses (painted.js loadTrHouseAtlas), in rows of their own (.trHouses: whether they are in);
 *  with them the procedural houses' bays and tiles aren't painted (only their fallback, props.js ottomanHouse, uses them) */
export function buildWorldAtlas(main, tier, th = null) {
  const k = tier === 'hi' ? 1 : 0.5, B = [Math.round(208 * k), Math.round(240 * k)], list = [];
  if (!th) TR_WOOD.forEach((col, i) => { for (const lit of [false, true]) list.push(['trW' + i + (lit ? 'L' : ''), B, (A, a, e, w, h) => trBay(A, a, e, w, h, col, lit, 900 + i, true, true, i === 3 ? '#f4f1ea' : '#5a3f2c')]); }); // (stained wood: dark frames)
  if (!th) {
    TR_PLASTER.forEach((col, i) => { for (const lit of [false, true]) list.push(['trS' + i + (lit ? 'L' : ''), B, (A, a, e, w, h) => trBay(A, a, e, w, h, col, lit, 950 + i, false)]); });
    TR_PASTEL.forEach((col, i) => { for (const lit of [false, true]) list.push(['trP' + i + (lit ? 'L' : ''), B, (A, a, e, w, h) => trBay(A, a, e, w, h, col, lit, 970 + i, false, false)]); });
    for (const lit of [false, true]) list.push(['trSt' + (lit ? 'L' : ''), B, (A, a, e, w, h) => trStone(A, a, e, w, h, lit, 990)]);
    list.push(['trDoor', B, trDoor], ['trTile', [Math.round(256 * k), Math.round(256 * k)], kiremit]);
  }
  list.push(['trFlag', [Math.round(192 * k), Math.round(128 * k)], (A, a, e, w, h) => trFlag(a, e, w, h)],
    ['trSign50', [Math.round(128 * k), Math.round(128 * k)], (A, a, e, w, h) => trSpeed(A, a, e, w, h, 50)],
    ['trSignDir', [Math.round(256 * k), Math.round(128 * k)], (A, a, e, w, h) => trDirSign(A, a, e, w, h, ['Bebek', 'Sarıyer'])],
    // the border tunnels' Turkish mouths: their name plates (a Turkish highway's blue, white lettering), through the cape at
    // Arnavutköy (Akıntıburnu) and (since W3: it was the headland towards Kuruçeşme) the headland at Eminönü at the Galata
    // Bridge's end
    ...['AKINTIBURNU TÜNELİ', 'EMİNÖNÜ TÜNELİ'].map((name, i) => ['trTunnel' + i, [Math.round(360 * k), Math.round(80 * k)], (A, a, e, w, h) => trTunnelPlate(A, a, w, h, name)]),
    // the Galata Bridge (W3): its railings' panels, and the blue sign for the old city's places ahead. (In the first row's free
    // width, no taller than its cells: the painted houses' rows below keep their places)
    ['galRailL', [Math.round(224 * k), Math.round(100 * k)], (A, a, e, w, h) => galRail(A, a, w, h, 0)],
    ['galRailR', [Math.round(224 * k), Math.round(100 * k)], (A, a, e, w, h) => galRail(A, a, w, h, 1)],
    ['trSignGal', [Math.round(200 * k), Math.round(100 * k)], (A, a, e, w, h) => trDirSign(A, a, e, w, h, ['Eminönü', 'Sirkeci'])]);
  const H = Math.ceil((flowEnd(list.map(c => c[1])) + (th ? 16 + th.rows : 0) + 8) / 4) * 4, W = new Atlas(H, 4, main.cells);
  for (const [n, [w, h], f] of list) W.add(n, w, h, (a, e, cw, ch) => f(W, a, e, cw, ch));
  W.trHouses = !!th && paintHouses(W, th);
  return th && !W.trHouses ? buildWorldAtlas(main, tier, null) : W; // (if they didn't fit: the procedural houses' cells)
}
/** the atlas rows the painted houses take (assets/houses/houses2.json lists its own: pack.py), per tier: a cell's px are its
 *  tile's (48 px/m on desktops, 32 on phones and in the X card) */
export const HOUSE_ROWS = { hi: 1152, lo: 512 };
/** The painted houses (painted.js loadHouseAtlas): each tile of the sheet becomes a cell of its own, in rows of their own
 *  under the painted atlas's other cells. Their outline is the painting's alpha (the atlas alpha-tests at 0.5), so the rows
 *  are cleared to transparent first: no grey padding can bleed into a roof's edge at a distance. Returns false (the houses
 *  then keep their procedural look) if they don't fit. */
export function paintHouses(A, ha) {
  const P = 4, y0 = A.y + A.rowH + P + 12; // (a fresh row; 8 more rows of grey under the last cells for their mips)
  if (y0 + ha.rows > A.H) return false;
  A.x = 0; A.y = y0; A.rowH = 0;
  A.a.clearRect(0, y0 - 8, SW, A.H - y0 + 8);
  try {
    for (const t of ha.tiles) A.add(t.name, t.w, t.h, (a, e, w, h) => {
      a.clearRect(0, 0, w, h); a.drawImage(ha.img, t.x, t.y, t.w, t.h, 0, 0, w, h);
      e.drawImage(ha.img, t.x, t.ey, t.w, t.h, 0, 0, w, h); // (the emissive canvas is half size: its context is scaled)
    });
  } catch (err) { console.warn('painted houses:', err.message); return false; }
  return true;
}

// ---------------- foliage clump textures (leaves, sakura blossom, pine needles) ----------------
export function buildFoliage(renderer) {
  // rows: bare twigs and the flowering bush; leaves (Y0); blossom and pine; autumn leaves; flower beds (YB, 256 px tall);
  // grass tufts (YT); the verge banks (YK, the last row). The tufts and banks stay in the two bottom rows (the breeze)
  const Y0 = 512, YB = Y0 + 1536, YT = YB + 256, YK = YT + 512;
  const S = 1024, SH = YK + 512, cv = canvas(S, SH), g = cv.getContext('2d'), r = rng(321), cells = {};
  const PALS = {
    leafA: ['#2f6634', '#4a8a3e', '#6aa64a', '#94c460', '#c4e08a'],
    leafB: ['#476e2e', '#6a9238', '#8db44a', '#b4d066', '#e0ec9a'],
    sakura: ['#c97f9e', '#e8a3bf', '#f6c3d5', '#ffdce8', '#fff6fa'],
    pine: ['#24503a', '#33684a', '#468052', '#5f9a5e', '#8cbc78'],
    momiji: ['#8f1d18', '#bf321d', '#de5426', '#ef8a34', '#f7c062'],
    ginkgo: ['#a87a1a', '#d3a11e', '#e9c232', '#f5da56', '#fff0a0'],
  };
  const paint = (name, ox, oy) => {
    const pal = PALS[name], C0 = 256, pine = name === 'pine', sak = name === 'sakura';
    g.save(); g.translate(ox, oy); g.beginPath(); g.rect(0, 0, 512, 512); g.clip();
    // a lumpy, cauliflower-like clump: a core plus many smaller rim lobes, so the outline is bumpy rather than a
    // filled disc (a filled disc reads as a flat polygon once the card is tilted)
    const lobes = [[C0, C0, pine ? 80 : 92]];
    for (let i = 0; i < (pine ? 10 : 14); i++) { const a = r() * 6.28, d = 45 + r() * 120; lobes.push([C0 + Math.cos(a) * d, C0 + Math.sin(a) * d * (pine ? 0.42 : 0.9), Math.min(34 + r() * 52, 232 - d)]); }
    const N = sak ? 2300 : pine ? 2600 : 2300;
    for (let i = 0; i < N; i++) {
      const L = lobes[Math.floor(r() * lobes.length)], a = r() * 6.28, d = Math.sqrt(r()) * L[2];
      const x = L[0] + Math.cos(a) * d, y = L[1] + Math.sin(a) * d * (pine ? 0.45 : 1);
      const rim = d / L[2];
      // even speckle (no light direction baked in): neighbouring cards then match where they cut through each other,
      // and the canopy's light and shade come from the smooth canopy normals instead
      let k = Math.min(4, Math.max(0, Math.floor(0.55 + r() * 2.7 + (rim > 0.82 ? 0.5 : 0))));
      g.fillStyle = pal[k];
      if (sak) {
        const sz = 7 + r() * 8; g.beginPath(); g.arc(x, y, sz, 0, 7); g.fill();
        if (r() < 0.25) { g.fillStyle = pal[4]; g.beginPath(); g.arc(x - sz * 0.3, y - sz * 0.3, sz * 0.4, 0, 7); g.fill(); }
      } else if (pine) {
        g.save(); g.translate(x, y); g.rotate((r() - 0.5) * 1.2); g.fillRect(-11, -1.6, 22, 3.2); g.restore();
      } else if (name === 'momiji') { // little five-pointed maple leaves
        const sz = 8 + r() * 7; g.save(); g.translate(x, y); g.rotate(r() * 6.28); g.beginPath();
        for (let q = 0; q < 10; q++) { const rr = q % 2 ? sz * 0.42 : sz, aa = (q / 10) * 6.2832; g.lineTo(Math.cos(aa) * rr, Math.sin(aa) * rr); }
        g.closePath(); g.fill(); g.restore();
      } else if (name === 'ginkgo') { // golden fans
        const sz = 9 + r() * 7; g.save(); g.translate(x, y); g.rotate(r() * 6.28); g.beginPath(); g.moveTo(0, 0); g.arc(0, 0, sz, -0.95, 0.95); g.closePath(); g.fill(); g.restore();
      } else {
        const sz = 9 + r() * 10; g.beginPath(); g.ellipse(x, y, sz, sz * 0.55, r() * 6.28, 0, 7); g.fill();
      }
    }
    // stray blossoms / leaves just outside the clump: a lacy edge instead of a hard one
    for (let i = 0; i < 90; i++) {
      const a = r() * 6.28, d = 150 + r() * 85, x = C0 + Math.cos(a) * d, y = C0 + Math.sin(a) * d * (pine ? 0.45 : 0.92);
      g.fillStyle = pal[1 + Math.floor(r() * 4)];
      if (pine) { g.save(); g.translate(x, y); g.rotate((r() - 0.5) * 1.2); g.fillRect(-9, -1.6, 18, 3.2); g.restore(); }
      else { g.beginPath(); g.arc(x, y, sak ? 6 + r() * 6 : 7 + r() * 6, 0, 7); g.fill(); }
    }
    if (sak) for (let i = 0; i < 14; i++) { g.strokeStyle = 'rgba(150,90,100,0.35)'; g.lineWidth = 1.5; const x = C0 + (r() - 0.5) * 300, y = C0 + 60 + r() * 120; g.beginPath(); g.moveTo(x, y); g.lineTo(x + (r() - 0.5) * 40, y - 20 - r() * 30); g.stroke(); }
    g.restore();
    cells[name] = { u0: ox / S, u1: (ox + 512) / S, v0: 1 - (oy + 512) / SH, v1: 1 - oy / SH };
  };
  // roadside tufts (雑草): a dense mass of pointed blades, dark at the root, sunlit at the tips; optional wildflowers
  const tuft = (name, ox, oy, flowers) => {
    g.save(); g.translate(ox, oy); g.beginPath(); g.rect(0, 0, 512, 512); g.clip();
    const pal = ['#2c5a2a', '#3e7334', '#56903f', '#79ad4f', '#a8cc6c'], n = flowers ? 120 : 170;
    for (let i = 0; i < n; i++) {
      const bx = 256 + (r() - 0.5) * (flowers ? 330 : 380) * Math.sqrt(r()), h = 150 + r() * (flowers ? 230 : 300) * (1 - Math.abs(bx - 256) / 300);
      const lean = (bx - 256) * 0.35 + (r() - 0.5) * 90, wB = 9 + r() * 9, tx = bx + lean, ty = 512 - h;
      const k = Math.min(4, Math.floor(r() * 2.2 + (h / 380) * 2.6));
      const gr = g.createLinearGradient(0, 512, 0, ty); gr.addColorStop(0, pal[0]); gr.addColorStop(0.6, pal[Math.max(1, k - 1)]); gr.addColorStop(1, pal[k]);
      g.fillStyle = gr; g.beginPath(); g.moveTo(bx - wB / 2, 512);
      g.quadraticCurveTo(bx - wB / 2 + lean * 0.3, 512 - h * 0.55, tx, ty);
      g.quadraticCurveTo(bx + wB / 2 + lean * 0.3, 512 - h * 0.5, bx + wB / 2, 512); g.fill();
    }
    if (flowers) for (let i = 0; i < 16; i++) {
      const fx = 110 + r() * 290, fy = 150 + r() * 200, kind = r();
      g.strokeStyle = '#3e7334'; g.lineWidth = 5; g.beginPath(); g.moveTo(fx + (r() - 0.5) * 20, 512); g.quadraticCurveTo(fx + (r() - 0.5) * 30, (fy + 512) / 2, fx, fy); g.stroke();
      if (kind < 0.55) { // 姫女苑-like white daisies
        g.fillStyle = '#fbfaf2'; for (let p = 0; p < 12; p++) { const a = (p / 12) * 6.283; g.beginPath(); g.ellipse(fx + Math.cos(a) * 11, fy + Math.sin(a) * 11, 9, 4.5, a, 0, 7); g.fill(); }
        g.fillStyle = '#f2c230'; g.beginPath(); g.arc(fx, fy, 8, 0, 7); g.fill();
      } else if (kind < 0.85) { // dandelions
        g.fillStyle = '#f6c62e'; g.beginPath(); g.arc(fx, fy, 15, 0, 7); g.fill(); g.fillStyle = '#ffe27a'; g.beginPath(); g.arc(fx - 3, fy - 3, 8, 0, 7); g.fill();
      } else { // a little purple cluster
        g.fillStyle = '#9b7fd6'; for (let p = 0; p < 6; p++) { g.beginPath(); g.arc(fx + (r() - 0.5) * 16, fy + (r() - 0.5) * 16, 6, 0, 7); g.fill(); }
      }
    }
    g.restore();
    cells[name] = { u0: ox / S, u1: (ox + 512) / S, v0: 1 - (oy + 512) / SH, v1: 1 - oy / SH };
  };
  // a bare winter crown (a birch's): twigs branching and branching again into a fine haze, darker purple-brown at the
  // tips, filling a narrow upright oval. Its own rng, so the other cells paint exactly as before
  const twigs = (name, ox, oy) => {
    const tr = rng(97);
    g.save(); g.translate(ox, oy); g.beginPath(); g.rect(0, 0, 512, 512); g.clip(); g.lineCap = 'round';
    const br = (x, y, a, len, w, depth) => {
      const x2 = x + Math.cos(a) * len, y2 = y + Math.sin(a) * len;
      g.strokeStyle = depth > 3 ? '#76605f' : depth > 1 ? '#6c5458' : '#62494f'; g.lineWidth = w; // (purple-brown: a haze, not a blob)
      g.beginPath(); g.moveTo(x, y); g.lineTo(x2, y2); g.stroke();
      if (depth <= 0 || w < 0.7) return;
      const n = 2 + (tr() < 0.4 ? 1 : 0);
      for (let i = 0; i < n; i++) {
        let na = a + (tr() - 0.5) * 1.1 + (i - (n - 1) / 2) * 0.42; na = na * 0.8 + (-Math.PI / 2) * 0.2; // (they turn upwards)
        br(x2, y2, na, len * (0.62 + tr() * 0.2), w * 0.68, depth - 1);
      }
    };
    for (let k = 0; k < 6; k++) br(256 + (tr() - 0.5) * 40, 500, -Math.PI / 2 + (tr() - 0.5) * 0.9, 110 + tr() * 50, 5.6, 6);
    g.restore();
    cells[name] = { u0: ox / S, u1: (ox + 512) / S, v0: 1 - (oy + 512) / SH, v1: 1 - oy / SH };
  };
  // 土手の草むら: the country verge's bank of tall grass, a whole clump on one card (as in the reference art). Low and
  // sparse at its road end (x = 0), rising to full height towards the field: tufts of long blades fanning out of narrow
  // roots, in their own shade low down, arching out with sunlit yellow-green tips, lighter towards the field; white
  // daisies (姫女苑) and yellow flowers on stems among them. The cards are about twice as wide as tall, so it is painted
  // in a 1024 × 504 frame squeezed into the 512² cell. The cell's top 8 px stay empty: the breeze tells the bank's tips
  // from the root of the tuft row above by that gap. Its own random numbers, so every other cell paints as before.
  // (nf: how many flowers; half: painted at a little under half height into a 512 × 256 cell, its bottom 6 px left empty
  // so the tuft row's tips under it pick up nothing from its roots in the mipmaps)
  const bank = (name, ox, oy, seed, daisy, nf = 4, half = false) => {
    const br = rng(seed), W = 1024, H = 504, k = half ? 246 / 504 : 1;
    g.save(); g.translate(ox, oy + 8 * k); g.beginPath(); g.rect(0, 0, 512, H * k); g.clip(); g.scale(0.5, k);
    const pal = ['#09240f', '#113417', '#1b481f', '#29602c', '#3c7a3a', '#579442', '#7cb04c', '#a3cb5e', '#c8e27e'];
    // height envelope: low at the road end, full from the middle on, tapering off at the field end
    const env = x => { const t = x / W; return (0.5 + 0.5 * Math.min(1, t / 0.45) ** 0.8) * (1 - 0.4 * Math.max(0, (t - 0.9) / 0.1)); };
    // a blade: a pointed, curving leaf from its root to its tip, added to the current path (the blades of one colour are
    // filled together: one fill per colour and layer instead of one per blade keeps the painting quick, ~10 ms)
    const blade = (bx, h, lean, wB) => {
      h = Math.min(h, H * 0.985);
      const tx = bx + lean, ty = H - h, mx = bx + lean * 0.25, my = H - h * 0.62 - Math.abs(lean) * 0.35;
      g.moveTo(bx - wB / 2, H);
      g.quadraticCurveTo(mx - wB * 0.42, my, tx, ty);
      g.quadraticCurveTo(mx + wB * 0.42, my + wB * 0.5, bx + wB / 2, H); g.closePath();
    };
    // tufts along the card, fewer at the road end; each fans its blades out of a narrow root
    const tufts = [];
    for (let x = 24 + br() * 24; x < W - 20; x += (x < W * 0.25 ? 56 : 44) + br() * 26) tufts.push(x);
    const tuftOf = () => tufts[Math.floor(br() * tufts.length)];
    // a layer of blades: darker at the root (k0) than at the tip (a gradient up the layer's height, one per colour)
    const grow = (n, hLo, hHi, spread, wLo, wHi, k0, kLo, kHi) => {
      const byCol = pal.map(() => []);
      for (let i = 0; i < n; i++) {
        const tx = tuftOf(), bx = tx + (br() - 0.5) * 34, e = env(bx), lift = bx / W; // (lighter tips towards the field)
        const h = H * (hLo + br() * (hHi - hLo)) * e * 1.12;
        const lean = (br() - 0.5) * spread + (bx - W * 0.45) * 0.12;
        byCol[Math.min(8, kLo + Math.floor(br() * (kHi - kLo + 1) + lift * 1.2))].push([bx, h, lean, wLo + br() * (wHi - wLo)]);
      }
      byCol.forEach((bl, k) => { // (darker first: the sunlit ones on top)
        if (!bl.length) return;
        const gr = g.createLinearGradient(0, H, 0, H * (1 - hHi * 0.8));
        gr.addColorStop(0, pal[k0]); gr.addColorStop(0.55, pal[Math.round((k0 + k) / 2)]); gr.addColorStop(1, pal[k]);
        g.fillStyle = gr; g.beginPath(); for (const b of bl) blade(b[0], b[1], b[2], b[3]); g.fill();
      });
    };
    grow(360, 0.25, 0.55, 150, 12, 22, 0, 2, 3);   // the body: shorter blades, deep in the clump's own shade
    grow(240, 0.4, 0.78, 260, 10, 17, 1, 4, 6);    // the middle: longer blades, lighter towards their tips
    const flowers = [];
    for (let i = 0; i < nf; i++) {
      const fx = W * (0.14 + br() * 0.74), e = env(fx);
      flowers.push({ fx, fy: Math.max(56, H - H * (0.56 + br() * 0.38) * e * 1.05), // (the head stays inside the cell)
        kind: br() < daisy ? 0 : 1, sz: 0.85 + br() * 0.4, tilt: 0.72 + br() * 0.28, rot: br() * 6.28, sx: fx + (br() - 0.5) * 60 });
    }
    // their stems first, behind the sunlit blades
    g.lineCap = 'round';
    for (const f of flowers) { g.strokeStyle = '#2c6623'; g.lineWidth = 6; g.beginPath(); g.moveTo(f.sx, H); g.quadraticCurveTo((f.sx + f.fx) / 2 + (br() - 0.5) * 40, (H + f.fy) / 2, f.fx, f.fy + 8); g.stroke(); }
    grow(150, 0.5, 0.92, 330, 9, 16, 2, 6, 7);     // the sunlit top: long blades arching out, bright at the tips
    // the flowers: 姫女苑-like daisies (white rays round a yellow disc, seen a little from the side) and yellow
    // five-petalled flowers (like 金鶏菊 / buttercups)
    for (const f of flowers) {
      g.save(); g.translate(f.fx, f.fy); g.scale(1, f.tilt);
      if (f.kind === 0) {
        const R = 38 * f.sz;
        for (let p = 0; p < 16; p++) { const a = f.rot + (p / 16) * 6.283; g.fillStyle = Math.sin(a) > 0.4 ? '#e2e3ea' : '#fdfdf6'; g.beginPath(); g.ellipse(Math.cos(a) * R * 0.56, Math.sin(a) * R * 0.56, R * 0.48, R * 0.14, a, 0, 7); g.fill(); }
        g.fillStyle = '#f2b51a'; g.beginPath(); g.arc(0, 0, R * 0.28, 0, 7); g.fill();
        g.fillStyle = '#fbe060'; g.beginPath(); g.arc(-R * 0.07, -R * 0.07, R * 0.14, 0, 7); g.fill();
      } else {
        const R = 40 * f.sz;
        for (let p = 0; p < 5; p++) { const a = f.rot + (p / 5) * 6.283; g.fillStyle = '#fccc1e'; g.beginPath(); g.ellipse(Math.cos(a) * R * 0.52, Math.sin(a) * R * 0.52, R * 0.52, R * 0.38, a, 0, 7); g.fill(); }
        for (let p = 0; p < 5; p++) { const a = f.rot + (p / 5) * 6.283; g.fillStyle = '#ffe873'; g.beginPath(); g.ellipse(Math.cos(a) * R * 0.62, Math.sin(a) * R * 0.62 - 3, R * 0.26, R * 0.15, a, 0, 7); g.fill(); }
        g.fillStyle = '#e39b14'; g.beginPath(); g.arc(0, 0, R * 0.2, 0, 7); g.fill();
      }
      g.restore();
    }
    grow(40, 0.42, 0.85, 280, 8, 14, 3, 6, 7);     // a few blades in front of the flowers, so they sit in the grass
    g.restore();
    cells[name] = { u0: ox / S, u1: (ox + 512) / S, v0: 1 - (oy + 512 * k) / SH, v1: 1 - (oy + 8 * k) / SH };
  };
  // 白い花の茂み: a low round bush in white flower, as along the reference art's coast road: a mound of small leaves in
  // its own shade low down and lit yellow-green on top, dotted with five-petalled white flowers (a few blush pink) where
  // the light falls. Its own random numbers, in the cell beside the twigs (free until now), so every other cell paints
  // exactly as before
  const flowerBush = (name, ox, oy, seed) => {
    const br = rng(seed), pal = ['#173d1d', '#21512a', '#2f6a33', '#46853c', '#64a048', '#8dbd58', '#b6d872'];
    g.save(); g.translate(ox, oy); g.beginPath(); g.rect(0, 0, 512, 512); g.clip();
    // the mound: lobes along a low dome, wider than tall, sitting on the cell's bottom edge
    const lobes = [];
    for (let i = 0; i < 15; i++) {
      const t = (i + br() * 0.6) / 15, x = 40 + t * 432, top = 500 - 300 * Math.sqrt(Math.max(0, 1 - ((x - 256) / 232) ** 2));
      lobes.push([x, top + 60 + br() * 50, 54 + br() * 46]);
    }
    for (let i = 0; i < 2600; i++) {
      const L = lobes[Math.floor(br() * lobes.length)], a = br() * 6.283, d = Math.sqrt(br()) * L[2];
      const x = L[0] + Math.cos(a) * d, y = Math.min(505, L[1] + Math.sin(a) * d * 0.85), up = Math.sin(a) < -0.2 ? 1 : 0;
      // (darker low down and inside, lighter on the lobes' upper rims)
      const k = Math.max(0, Math.min(6, Math.floor(br() * 2.4 + (1 - y / 512) * 3.2 + up * 1.3 + (d / L[2]) * 0.8)));
      g.fillStyle = pal[k]; g.beginPath(); g.ellipse(x, y, 7 + br() * 7, 4 + br() * 4, br() * 6.28, 0, 7); g.fill();
    }
    // the flowers, on the mound's upper half, more of them towards its top
    for (let i = 0; i < 130; i++) {
      const L = lobes[Math.floor(br() * lobes.length)], a = -Math.PI * (0.1 + br() * 0.8), d = (0.35 + br() * 0.6) * L[2];
      const x = L[0] + Math.cos(a) * d, y = L[1] + Math.sin(a) * d * 0.85; if (y > 470) continue;
      const R = 6 + br() * 5, rot = br() * 6.28, pink = br() < 0.12;
      g.fillStyle = pink ? '#f3d2dc' : '#fbfbf6';
      for (let p = 0; p < 5; p++) { const pa = rot + (p / 5) * 6.283; g.beginPath(); g.ellipse(x + Math.cos(pa) * R * 0.55, y + Math.sin(pa) * R * 0.5, R * 0.5, R * 0.36, pa, 0, 7); g.fill(); }
      g.fillStyle = '#d9b628'; g.beginPath(); g.arc(x, y, R * 0.22, 0, 7); g.fill();
    }
    g.restore();
    cells[name] = { u0: ox / S, u1: (ox + 512) / S, v0: 1 - (oy + 512) / SH, v1: 1 - oy / SH };
  };
  // 花壇: a clump of a flower bed, as round the sakura painting's trees and along its pavements: a low mound of broad
  // leaves arching out of the ground, in their own shade low down and lit on top, with five-petalled flowers over it,
  // pink and violet (petunias, azaleas) among white ones. Painted in a 1024 × 512 frame into the top 250 px of a 512 × 256
  // cell (the cards are twice as wide as tall; the bottom 6 px stay empty, as under bankC). Its own random numbers, so
  // every other cell paints as before
  const bed = (name, ox, oy, seed) => {
    const br = rng(seed), W = 1024, H = 512;
    g.save(); g.translate(ox, oy); g.beginPath(); g.rect(0, 0, 512, 250); g.clip(); g.scale(0.5, 250 / 512);
    const pal = ['#0c2a12', '#143a19', '#1f4f23', '#2e682f', '#46843a', '#66a047', '#8ebd58', '#b6d874'];
    const env = x => Math.max(0, 1 - ((x - W / 2) / (W * 0.47)) ** 2) ** 0.6; // (a low dome)
    const leaf = (bx, h, lean, wB) => {
      const tx = bx + lean, ty = H - h, mx = bx + lean * 0.3, my = H - h * 0.6;
      g.moveTo(bx - wB / 2, H); g.quadraticCurveTo(mx - wB * 0.5, my, tx, ty); g.quadraticCurveTo(mx + wB * 0.5, my + wB * 0.4, bx + wB / 2, H); g.closePath();
    };
    const grow = (n, hLo, hHi, wLo, wHi, kLo, kHi) => { // (one fill per colour: the darker ones first)
      const byCol = pal.map(() => []);
      for (let i = 0; i < n; i++) {
        const bx = W / 2 + (br() - 0.5) * W * 0.8 * Math.sqrt(br()), e = env(bx), h = H * 0.9 * e * (hLo + br() * (hHi - hLo));
        const lean = (bx - W / 2) * 0.22 + (br() - 0.5) * 120, k = Math.min(7, kLo + Math.floor(br() * (kHi - kLo + 1)));
        if (e > 0.03) byCol[k].push([bx, h, lean, wLo + br() * (wHi - wLo)]);
      }
      byCol.forEach((bl, k) => {
        if (!bl.length) return;
        const gr = g.createLinearGradient(0, H, 0, H * 0.1); gr.addColorStop(0, pal[Math.max(0, k - 3)]); gr.addColorStop(1, pal[k]);
        g.fillStyle = gr; g.beginPath(); for (const b of bl) leaf(b[0], b[1], b[2], b[3]); g.fill();
      });
    };
    grow(150, 0.35, 0.7, 26, 46, 1, 3); grow(110, 0.5, 0.92, 22, 38, 3, 5);
    const FL = [['#d27ac4', '#f4bce6'], ['#9f74da', '#d2b6f4'], ['#fbfbf6', '#ffffff'], ['#ea88b2', '#fcc8de']];
    for (let i = 0; i < 48; i++) {
      const fx = W / 2 + (br() - 0.5) * W * 0.84, e = env(fx);
      const fy = H - H * 0.9 * e * (0.55 + br() * 0.42), [c0, c1] = FL[Math.floor(br() * FL.length)], R = 22 + br() * 12, rot = br() * 6.28;
      if (e < 0.15) continue;
      g.fillStyle = c0; for (let p = 0; p < 5; p++) { const a = rot + p * 1.2566; g.beginPath(); g.ellipse(fx + Math.cos(a) * R * 0.55, fy + Math.sin(a) * R * 0.45, R * 0.52, R * 0.36, a, 0, 7); g.fill(); }
      g.fillStyle = c1; for (let p = 0; p < 5; p++) { const a = rot + p * 1.2566; g.beginPath(); g.ellipse(fx + Math.cos(a) * R * 0.45, fy + Math.sin(a) * R * 0.35 - 3, R * 0.25, R * 0.16, a, 0, 7); g.fill(); }
      g.fillStyle = c0 === '#fbfbf6' ? '#f2b51a' : '#6e2f62'; g.beginPath(); g.arc(fx, fy, R * 0.18, 0, 7); g.fill();
    }
    grow(34, 0.4, 0.75, 20, 34, 4, 6); // (a few leaves in front of the flowers, so they sit in the clump)
    g.restore();
    cells[name] = { u0: ox / S, u1: (ox + 512) / S, v0: 1 - (oy + 250) / SH, v1: 1 - oy / SH };
  };
  twigs('twigs', 0, 0);
  flowerBush('flowerbush', 512, 0, 6151);
  paint('leafA', 0, Y0); paint('leafB', 512, Y0); paint('sakura', 0, Y0 + 512); paint('pine', 512, Y0 + 512);
  paint('momiji', 0, Y0 + 1024); paint('ginkgo', 512, Y0 + 1024);
  tuft('grass', 0, YT, false); tuft('flowers', 512, YT, true); // tufts and banks stay in the two bottom rows (the breeze keys on them)
  bank('bankA', 0, YK, 4111, 0.7); bank('bankB', 512, YK, 4127, 0.35);
  // (painted last, with their own random numbers): the flower bed, and beside it the coast verge's bank of long grass,
  // without the country's flowers (the coast painting's verge is plain grass; its flowers are on the bushes)
  bed('bedA', 0, YB, 7741); bank('bankC', 512, YB, 4133, 0, 0, true);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
  // the breeze: v of the tuft row's bottom and top, the banks' top, and a split between the two rows
  const tB = 1 - YK / SH, bT = 1 - (YK + 8) / SH;
  return { tex, cells, tuftV: [tB, 1 - YT / SH, bT, (tB + bT) / 2] };
}
