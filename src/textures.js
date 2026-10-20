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
  constructor() {
    this.cA = canvas(SW, SH); this.cE = canvas(SW / 2, SH / 2);
    this.a = this.cA.getContext('2d'); this.e = this.cE.getContext('2d');
    this.e.fillStyle = '#000'; this.e.fillRect(0, 0, SW / 2, SH / 2);
    this.a.fillStyle = '#8a8a8a'; this.a.fillRect(0, 0, SW, SH); // opaque padding so alpha-test only cuts the railing cell
    this.x = 0; this.y = 0; this.rowH = 0; this.cells = {};
    this.grain = this.a.createPattern(grainC, 'repeat');
  }
  /** allocate a w×h cell and paint it; draw(a, e, w, h) is called with both contexts translated to the cell */
  add(name, w, h, draw) {
    const P = 4;
    if (this.x + w + P > SW) { this.x = 0; this.y += this.rowH + P; this.rowH = 0; }
    if (this.y + h > SH) throw new Error('atlas full at ' + name);
    const r = { x: this.x, y: this.y, w, h };
    this.x += w + P; this.rowH = Math.max(this.rowH, h);
    for (const c of [this.a, this.e]) { c.save(); if (c === this.e) c.scale(0.5, 0.5); c.translate(r.x, r.y); c.beginPath(); c.rect(0, 0, w, h); c.clip(); }
    draw(this.a, this.e, w, h);
    this.a.restore(); this.e.restore();
    const hp = 0.5;
    this.cells[name] = { u0: (r.x + hp) / SW, u1: (r.x + w - hp) / SW, v0: 1 - (r.y + h - hp) / SH, v1: 1 - (r.y + hp) / SH, w, h };
    return this.cells[name];
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
  const resWindow = (a, e, w, h, lit, kind) => {
    wall(a, A, w, h, '#ece8e0', 0);
    const r = rng(kind * 31 + (lit ? 7 : 0) + 5);
    if (kind === 0) { // sliding window with curtains
      const x = w * 0.14, y = h * 0.22, ww = w * 0.72, wh = h * 0.5;
      frame(a, x, y, ww, wh, 5);
      glass(a, x, y, ww / 2, wh, r); glass(a, x + ww / 2, y, ww / 2, wh, r);
      if (r() < 0.8) curtain(a, x + 2, y + 2, ww * (0.18 + r() * 0.25), wh - 4, r() < 0.5 ? '#efe6d2' : '#d9e4ea');
      rect(a, x + ww / 2 - 2, y, 4, wh, '#cfd4da');
      rect(a, x - 8, y + wh + 5, ww + 16, 6, '#d8d8d4'); streak(a, x - 4, y + wh + 11, 8, 60); streak(a, x + ww - 4, y + wh + 11, 8, 60);
      if (lit) { glowRect(e, x, y, ww, wh, '#ffcf8f', 0); e.fillStyle = 'rgba(255,240,210,0.85)'; e.fillRect(x + 2, y + 2, ww * 0.3, wh - 4); }
    } else if (kind === 1) { // two small windows + vent cap
      for (const fx of [0.12, 0.56]) {
        const x = w * fx, y = h * 0.28, ww = w * 0.3, wh = h * 0.36;
        frame(a, x, y, ww, wh, 4); glass(a, x, y, ww, wh, r, 1);
        a.fillStyle = 'rgba(255,255,255,0.35)'; a.fillRect(x, y, ww, wh * 0.45);
        streak(a, x, y + wh + 6, ww, 40, 0.1);
        if (lit && r() < 0.8) glowRect(e, x, y, ww, wh, r() < 0.5 ? '#ffd9a0' : '#e8f0ff', 0);
      }
      a.fillStyle = '#c9c9c4'; a.beginPath(); a.arc(w * 0.88, h * 0.2, 9, 0, 7); a.fill();
    } else if (kind === 2) { // apartment: tall sliding door (sits behind a balcony)
      const x = w * 0.1, y = h * 0.12, ww = w * 0.8, wh = h * 0.84;
      frame(a, x, y, ww, wh, 4);
      glass(a, x, y, ww / 2, wh, r); glass(a, x + ww / 2, y, ww / 2, wh, r);
      curtain(a, x + 2, y + 2, ww * (0.2 + r() * 0.3), wh - 4, R.pick(['#efe6d2', '#f2dede', '#dde8ef', '#e9efdc']));
      rect(a, x + ww / 2 - 2, y, 4, wh, '#cfd4da');
      if (lit) { glowRect(e, x, y, ww, wh, '#ffcb85', 0); e.fillStyle = 'rgba(255,236,200,0.9)'; e.fillRect(x + 2, y + 2, ww * 0.35, wh - 4); }
    } else if (kind === 3) { // office ribbon glazing
      wall(a, A, w, h, '#dfe3e6', 0);
      const y = h * 0.25, wh = h * 0.55;
      glass(a, 0, y, w, wh, r, 1);
      for (let x = 0; x <= w; x += w / 4) rect(a, x - 2, y, 4, wh, '#8d98a6');
      rect(a, 0, y - 4, w, 4, '#8d98a6'); rect(a, 0, y + wh, w, 5, '#7d8796');
      if (lit) for (let i = 0; i < 4; i++) if (r() < 0.7) { e.fillStyle = r() < 0.6 ? '#f2f6ff' : '#ffe2b0'; e.fillRect(i * w / 4 + 2, y, w / 4 - 4, wh); }
    } else if (kind === 4) { // old wooden house window with lattice
      a.fillStyle = '#6b4a35'; a.fillRect(0, 0, w, h);
      for (let y = 0; y < h; y += 12) { rect(a, 0, y, w, 2, 'rgba(30,18,10,0.35)'); rect(a, 0, y + 2, w, 1, 'rgba(255,220,180,0.06)'); }
      grain(a, A, w, h, 0.15);
      const x = w * 0.18, y = h * 0.25, ww = w * 0.64, wh = h * 0.45;
      rect(a, x - 6, y - 6, ww + 12, wh + 12, '#4a3020');
      rect(a, x, y, ww, wh, '#efe4c8');
      a.fillStyle = '#5a3a26'; for (let i = 1; i < 6; i++) a.fillRect(x + i * ww / 6 - 1.5, y, 3, wh); for (let j = 1; j < 3; j++) a.fillRect(x, y + j * wh / 3 - 1.5, ww, 3);
      if (lit) { e.fillStyle = '#ffc070'; e.fillRect(x, y, ww, wh); e.fillStyle = '#000'; for (let i = 1; i < 6; i++) e.fillRect(x + i * ww / 6 - 1.5, y, 3, wh); }
    } else if (kind === 5) { // plain wall: drain pipe, meter, small frosted window
      rect(a, w * 0.08, 0, 7, h, '#bdbdb6'); rect(a, w * 0.08 + 5, 0, 2, h, 'rgba(0,0,0,0.2)');
      const x = w * 0.55, y = h * 0.3, ww = w * 0.22, wh = h * 0.24;
      frame(a, x, y, ww, wh, 3); rect(a, x, y, ww, wh, '#d6dfe4');
      a.fillStyle = 'rgba(255,255,255,0.4)'; a.fillRect(x, y, ww, wh / 2);
      streak(a, x, y + wh + 4, ww, 50, 0.12);
      rect(a, w * 0.22, h * 0.55, 26, 34, '#cfcfca'); rect(a, w * 0.22 + 4, h * 0.55 + 6, 18, 12, '#9aa2a8');
      if (lit) glowRect(e, x, y, ww, wh, '#fff0d8', 0);
    } else if (kind === 6) { // side wall, one small window
      const x = w * 0.4, y = h * 0.35, ww = w * 0.2, wh = h * 0.28;
      frame(a, x, y, ww, wh, 3); glass(a, x, y, ww, wh, r, 1); streak(a, x, y + wh + 4, ww, 70, 0.14);
      if (lit) glowRect(e, x, y, ww, wh, '#ffd9a0', 0);
    }
  };
  for (let k = 0; k < 7; k++) { A.add('win' + k, B, B, (a, e, w, h) => resWindow(a, e, w, h, false, k)); A.add('win' + k + 'L', B, B, (a, e, w, h) => resWindow(a, e, w, h, true, k)); }
  A.add('plain', B, B, (a, e, w, h) => { wall(a, A, w, h, '#ece8e0'); streak(a, w * 0.3, 0, 12, h * 0.6, 0.06); });
  A.add('concrete', B, B, (a, e, w, h) => { wall(a, A, w, h, '#d9d7d0', 60); for (let i = 0; i < 6; i++) streak(a, (i * 41) % w, 0, 10, h * 0.5, 0.07); });

  // ---------------- ground-floor bays (3 m × 3.6 m → 240×288) ----------------
  const SH = 288;
  const shopBay = (a, e, w, h, kind, seed) => {
    const r = rng(seed);
    wall(a, A, w, h, '#e6e2da');
    if (kind === 'glass' || kind === 'door' || kind === 'konbini' || kind === 'cafe') {
      const x = 6, y = h * 0.22, ww = w - 12, wh = h * 0.78 - 4;
      const inner = kind === 'konbini' ? '#f6f4ea' : kind === 'cafe' ? '#7a5a40' : '#8a7a68';
      rect(a, x, y, ww, wh, inner);
      // shelves and goods
      for (let sy = y + wh * 0.25; sy < y + wh; sy += wh * 0.22) {
        rect(a, x, sy, ww, 3, 'rgba(60,50,40,0.5)');
        for (let gx = x + 3; gx < x + ww - 6; gx += 6 + r() * 8) { a.fillStyle = R.pick(['#e44', '#4a8', '#fc4', '#48c', '#f8a', '#fff', '#a6d', '#f93']); a.fillRect(gx, sy - 6 - r() * 10, 4 + r() * 5, 6 + r() * 10); }
      }
      if (kind === 'konbini') rect(a, x, y + 4, ww, 5, '#ffffff');
      // glass reflection over the interior
      a.save(); a.globalAlpha = 0.35; glass(a, x, y, ww, wh, r); a.restore();
      rect(a, x, y, ww, 4, '#4a4e57');
      if (kind === 'door') { rect(a, w / 2 - 2, y, 4, wh, '#4a4e57'); rect(a, w / 2 - 14, y + wh * 0.45, 3, 40, '#c0c4c8'); rect(a, w / 2 + 11, y + wh * 0.45, 3, 40, '#c0c4c8');
        rect(a, w / 2 - 30, y + 18, 60, 24, '#fff'); textFit(a, '営業中', w / 2, y + 30, 54, 18, '#c82828'); }
      if (kind === 'glass' && r() < 0.7) { rect(a, x + 10, y + 14, 44, 60, R.pick(['#f6d34a', '#fff', '#ff8aa0'])); textFit(a, R.pick(['特売', '新商品', 'SALE', '本日']), x + 32, y + 44, 40, 16, '#c02020'); }
      if (kind === 'cafe') { rect(a, w * 0.62, h - 70, 46, 62, '#2c3a30'); textFit(a, 'ランチ', w * 0.62 + 23, h - 50, 40, 13, '#fff', 700); }
      // emissive interior
      const ec = kind === 'konbini' ? '#c9d6e2' : kind === 'cafe' ? '#e8a060' : '#e6c296';
      e.fillStyle = ec; e.fillRect(x, y, ww, wh); e.fillStyle = 'rgba(0,0,0,0.35)'; for (let sy = y + wh * 0.25; sy < y + wh; sy += wh * 0.22) e.fillRect(x, sy, ww, 3);
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
  // ---------------- vertical protruding signs (0.6 m × 2.4 m) ----------------
  for (let i = 0; i < 10; i++) A.add('vs' + i, 72, 288, (a, e, w, h) => {
    const [bg, fg] = SIGN_COLS[(i * 3 + 1) % SIGN_COLS.length], name = VSIGNS[i % VSIGNS.length];
    rect(a, 0, 0, w, h, bg); a.strokeStyle = 'rgba(0,0,0,0.3)'; a.lineWidth = 4; a.strokeRect(2, 2, w - 4, h - 4);
    vText(a, name, w / 2, 12, h - 12, 56, fg, 900);
    grain(a, A, w, h, 0.08);
    rect(e, 0, 0, w, h, bg === '#fff' ? '#e8e8e8' : bg); vText(e, name, w / 2, 12, h - 12, 56, fg === '#fff' ? '#fff' : fg, 900);
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
  A.add('kawara', 256, 256, (a, e, w, h) => {
    rect(a, 0, 0, w, h, '#58617a');
    for (let y = 0; y < h; y += 16) { vgrad(a, 0, y, w, 16, [[0, 'rgba(255,255,255,0.12)'], [0.7, 'rgba(0,0,0,0)'], [1, 'rgba(0,0,0,0.35)']]); }
    for (let x = 0; x < w; x += 20) rect(a, x, 0, 2, h, 'rgba(0,0,0,0.18)');
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
  A.add('xing_plate', 128, 48, (a, e, w, h) => { rect(a, 0, 0, w, h, '#f6f6f2'); a.strokeStyle = '#d8231c'; a.lineWidth = 4; a.strokeRect(3, 3, w - 6, h - 6); textFit(a, '踏切注意', w / 2, h / 2, w * 0.8, 26, '#d8231c', 900); });
  A.add('rail', 240, 80, (a, e, w, h) => { // see-through balcony railing (alpha-tested)
    a.clearRect(0, 0, w, h);
    rect(a, 0, 0, w, 7, '#e9ebee'); rect(a, 0, 6, w, 2, 'rgba(60,70,80,0.5)'); rect(a, 0, h - 6, w, 6, '#d5d8dc');
    for (let x = 3; x < w; x += 9) { rect(a, x, 7, 3, h - 13, '#e2e5e9'); rect(a, x + 2, 7, 1, h - 13, 'rgba(70,80,90,0.45)'); }
  });
  return A;
}

// ---------------- foliage clump textures (leaves, sakura blossom, pine needles) ----------------
export function buildFoliage(renderer) {
  const S = 1024, SH = 1536, cv = canvas(S, SH), g = cv.getContext('2d'), r = rng(321), cells = {};
  const PALS = {
    leafA: ['#2f6634', '#4a8a3e', '#6aa64a', '#94c460', '#c4e08a'],
    leafB: ['#476e2e', '#6a9238', '#8db44a', '#b4d066', '#e0ec9a'],
    sakura: ['#c97f9e', '#e8a3bf', '#f6c3d5', '#ffdce8', '#fff6fa'],
    pine: ['#24503a', '#33684a', '#468052', '#5f9a5e', '#8cbc78'],
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
  paint('leafA', 0, 0); paint('leafB', 512, 0); paint('sakura', 0, 512); paint('pine', 512, 512);
  tuft('grass', 0, 1024, false); tuft('flowers', 512, 1024, true);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
  return { tex, cells, tuftV: [0, 1 - 1024 / SH] };
}
