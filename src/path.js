// The infinite road: a centre-line integrated from smooth curvature noise, plus the zone schedule.
import { clamp, lerp, smooth, sstep, noise1, fbm1 } from './util.js';

// ---- the world's route: regions of zones, ZONE_LEN each, driven in order and round again
// Japan's six zones (as they always were), then through the border tunnel into Turkey, then back through another border
// tunnel to Japan's first. Turkey so far: the Bosphorus shore road at Arnavutköy (W2). PLANNED lists the next regions'
// zones in their order (W3–W6: the Galata Bridge, a typical Turkish town, Cappadocia's Göreme → Uçhisar road and the
// Paşabağ fairy chimneys; then Tokyo, Osaka and a Japanese coastal city): each joins its region's list once it is built
// (its ZINFO entry, its look in chunks.js / materials.js / painted.js), and the route grows with it. A start in a planned
// zone (?env=galata …) begins at its region's first built zone.
export const JAPAN = ['city', 'sakura', 'coast', 'country', 'mountain', 'snow'];
export const TURKEY = ['bosphorus'];
export const ZONES = [...JAPAN, ...TURKEY];
export const PLANNED = { tr: ['galata', 'town', 'uchisar', 'pasabag'], jp2: ['tokyo', 'osaka', 'jpcoast'] };
/** each zone's region: its traffic side, its border crossings, its zone card's language */
export const REGION = {};
for (const z of JAPAN) REGION[z] = 'jp';
for (const z of [...TURKEY, ...PLANNED.tr]) REGION[z] = 'tr';
/** which side of the road the traffic keeps to: Japan keeps left, Turkey right */
export const SIDE = { jp: -1, tr: 1 };
// (loc: the zone card's first line, in the region's language; en: its second)
export const ZINFO = {
  city:    { loc: '街の灯',     en: 'City Streets',          curv: 1 / 1500, hill: 1.2, base: 4.0, rw: 3.1, speed: 10.5 },
  sakura:  { loc: '桜並木',     en: 'Cherry Blossom Avenue', curv: 1 / 520,  hill: 2.5, base: 4.5, rw: 3.3, speed: 11.5 },
  // (the coast road runs low along its sea wall, about a metre above the water, as in the reference art, where the
  // tetrapods at its foot stand higher than the guardrail: it was 4–7 m up, over a beach)
  coast:   { loc: '海沿いの道', en: 'Coastal Road',          curv: 1 / 300,  hill: 0.25, base: 1.05, rw: 3.4, speed: 13.5 },
  country: { loc: '田舎道',     en: 'Country Road',          curv: 1 / 260,  hill: 7.0, base: 6.0, rw: 3.1, speed: 12.5 },
  mountain: { loc: '紅葉の峠',   en: 'Autumn Mountain Pass',  curv: 1 / 150,  hill: 11,  base: 14,  rw: 3.0, speed: 10 },
  snow:     { loc: '雪国',       en: 'Snow Country',          curv: 1 / 380,  hill: 3.5, base: 9,   rw: 3.0, speed: 9.5 },
  // Istanbul: the Bosphorus shore road at Arnavutköy (Arnavutköy–Bebek Caddesi): two lanes along the European shore, the
  // strait on the left behind a stone sea wall and an iron railing, the Asian shore's hills across it, the wooden houses
  // up the slope on the right. It winds gently with the shore and runs ~1.4 m above the water
  bosphorus: { loc: 'Boğaziçi', en: 'Bosphorus · Arnavutköy', curv: 1 / 420, hill: 0.3, base: 1.4, rw: 3.3, speed: 11.5 },
  // (planned, not on the route yet: names only)
  galata:  { loc: 'Galata Köprüsü', en: 'Galata Bridge' }, town: { loc: 'Mahalle', en: 'A Turkish Town' },
  uchisar: { loc: 'Uçhisar Yolu', en: 'Göreme → Uçhisar' }, pasabag: { loc: 'Paşabağ', en: 'Fairy Chimneys' },
};
export const ZONE_LEN = 1500, TRANS = 260, SEA = 0;
/** the coast: the sea wall's face stands WALL_U past the road's edge; its foot is SEA_FOOT under the water */
export const WALL_U = 2.0, SEA_FOOT = -2.2;
/** where two regions meet the drive goes through the border tunnel (borderNear): the zones blend over B_TRANS metres
 *  (TRANS elsewhere), all inside its tube (T_HALF either side of its middle), so nothing is seen to change */
export const B_TRANS = 150;
/** the zones whose shore is the sea's (the painted sea, the water along the wall, the sea wall: sea.js, chunks.js) */
export const SEA_ZONES = ['coast', 'bosphorus'];

let START = 0;
/** where the drive starts: a zone's key (an unknown key: Japan's first; a planned one: its region's first built zone) */
export function setStartZone(key) {
  let i = ZONES.indexOf(key);
  if (i < 0 && REGION[key]) i = ZONES.findIndex(z => REGION[z] === REGION[key]);
  START = Math.max(0, i);
}
export const startZone = () => ZONES[START];
const zkey = i => ZONES[(((i + START) % ZONES.length) + ZONES.length) % ZONES.length];
/** the blend's length from zone a into the next zone b */
const transOf = (a, b) => (REGION[a] !== REGION[b] ? B_TRANS : TRANS);

export function zoneMix(s) {
  const z = Math.floor(s / ZONE_LEN), l = s - z * ZONE_LEN, a = zkey(z), b = zkey(z + 1), tr = transOf(a, b);
  const t = smooth(clamp((l - (ZONE_LEN - tr)) / tr, 0, 1));
  return { a, b, t };
}
export function zoneW(s) {
  const m = zoneMix(s), w = { city: 0, sakura: 0, coast: 0, country: 0, mountain: 0, snow: 0, bosphorus: 0 };
  w[m.a] += 1 - m.t; w[m.b] += m.t;
  return w;
}
export const zoneAt = s => { const m = zoneMix(s); return m.t < 0.5 ? m.a : m.b; };
/** zoneW(s)[key] without the garbage (for every frame) */
export function zoneWeight(s, key) {
  const z = Math.floor(s / ZONE_LEN), l = s - z * ZONE_LEN, a = zkey(z), b = zkey(z + 1), tr = transOf(a, b);
  const t = smooth(clamp((l - (ZONE_LEN - tr)) / tr, 0, 1));
  return (a === key ? 1 - t : 0) + (b === key ? t : 0);
}
/** a region's weight at s (its zones' sum: 1 inside it, changing over a border's blend) */
export function regionWeight(s, reg) { const m = zoneMix(s); return (REGION[m.a] === reg ? 1 - m.t : 0) + (REGION[m.b] === reg ? m.t : 0); }
/** the sea's zones' weight at s (the coast's and the Bosphorus's: their water, wall and shore look) */
export const seaWeight = s => { const m = zoneMix(s); return (SEA_ZONES.includes(m.a) ? 1 - m.t : 0) + (SEA_ZONES.includes(m.b) ? m.t : 0); };
/** the traffic's side at s: −1 (keep left: Japan) … +1 (keep right: Turkey), changing over a border's blend (in its tube) */
export function trafficSide(s) {
  const m = zoneMix(s), a = SIDE[REGION[m.a]], b = SIDE[REGION[m.b]];
  return a === b ? a : lerp(a, b, m.t);
}
export function zparam(s, key) { const m = zoneMix(s); return lerp(ZINFO[m.a][key], ZINFO[m.b][key], m.t); }
/** the zones seen `ahead` metres on from s (the far horizon's: painted.js band), except round a border: there the camera's
 *  own, so the next region's horizon only takes over while the camera is inside the border tunnel */
export function viewMix(s, ahead) {
  const b = borderNear(s);
  return b && Math.abs(s - b.s) < B_TRANS / 2 + ahead ? zoneMix(s) : zoneMix(s + ahead);
}
/** the zone sets a chunk's ground can hold (materials.js groundMaterialFor; warmed up at load): each zone, each pair of
 *  neighbours on the route, and at a border both sides with 'border' (the tunnel's ridge over the tube: chunks.js) */
export function zoneSets() {
  const out = [], n = ZONES.length;
  for (let i = 0; i < n; i++) {
    const a = ZONES[i], b = ZONES[(i + 1) % n];
    out.push([a]);
    if (n > 1) out.push(REGION[a] !== REGION[b] ? [a, b, 'border'] : [a, b]);
  }
  return out;
}

// ---- the border tunnels: where the route passes from one region to the next, centred on the zones' blend (B_TRANS long,
// at the end of the outgoing zone): from the outside each mouth shows its own region only. Never at the start of the drive
/** the border tunnel nearest to s, if there is one there ({ k, s, border: true, a, b }: a the outgoing zone, b the incoming) */
export function borderNear(s) {
  const k = Math.round((s + B_TRANS / 2) / ZONE_LEN);
  if (k < 1) return null;
  const a = zkey(k - 1), b = zkey(k);
  if (REGION[a] === REGION[b]) return null;
  return memo(MEMO.b, k, () => ({ k: 10000 + k, s: k * ZONE_LEN - B_TRANS / 2, border: true, a, b }));
}

/** the middle of the first border tunnel whose tube ends at or after s (Infinity if the route has none) */
export function nextBorderS(s) {
  for (let k = Math.max(1, Math.ceil((s - T_HALF + B_TRANS / 2) / ZONE_LEN)), n = 0; n <= ZONES.length + 1; k++, n++) {
    const b = borderNear(k * ZONE_LEN - B_TRANS / 2); if (b && b.s + T_HALF >= s) return b.s;
  }
  return Infinity;
}

// ---- railway level crossings (踏切): every XING metres, where the road runs through city or countryside
export const XING = 650, XOFF = 375;
export const crossingS = k => k * XING + XOFF;
export function crossingValid(sx) {
  if (sx < 300) return false;
  for (const d of [-70, 0, 70]) { const w = zoneW(sx + d); if (Math.max(w.city, w.country) < 0.9) return false; }
  const b = borderNear(sx); // (not at a border tunnel's mouth)
  return !(b && Math.abs(sx - b.s) < 2 * T_RIDGE + 80);
}
/** the crossing nearest to s, if that one exists */
// the *Near() lookups run for every ground vertex — memoise them per candidate index (each validity test samples zones)
const MEMO = { x: new Map(), r: new Map(), t: new Map(), b: new Map() };
function memo(m, k, fn) { let v = m.get(k); if (v === undefined) { v = fn(); m.set(k, v); if (m.size > 2000) m.clear(); } return v; }
export function crossingNear(s) { const k = Math.round((s - XOFF) / XING); return memo(MEMO.x, k, () => { const sx = crossingS(k); return crossingValid(sx) ? { k, s: sx } : null; }); }
/** 1 within ±8 m of a crossing, easing to 0 by ±45 m — the road is levelled and straightened there */
export function crossingW(s) { const c = crossingNear(s); return c ? 1 - sstep(8, 45, Math.abs(s - c.s)) : 0; }

// ---- rivers crossed on a bridge (橋): countryside and the sakura avenue, never next to a level crossing
export const RIV = 1150, ROFF = 820, RIVER_DROP = 4.6; // water surface sits RIVER_DROP below the road
export const riverS = k => k * RIV + ROFF;
export function riverValid(sr) {
  if (sr < 400) return false;
  for (const d of [-90, 0, 90]) { const w = zoneW(sr + d); if (w.country + w.sakura < 0.9) return false; }
  const c = crossingNear(sr), b = borderNear(sr);
  return !(c && Math.abs(c.s - sr) < 170) && !(b && Math.abs(sr - b.s) < 2 * T_RIDGE + 100);
}
export function riverNear(s) { const k = Math.round((s - ROFF) / RIV); return memo(MEMO.r, k, () => { const sr = riverS(k); return riverValid(sr) ? { k, s: sr } : null; }); }
/** 1 on the bridge, easing to 0 by ±70 m — the road is level and straight across a river */
export function riverW(s) { const r = riverNear(s); return r ? 1 - sstep(30, 70, Math.abs(s - r.s)) : 0; }
/** height (relative to the level road) of the river channel at distance d from the river's centre line */
export function riverProfile(d) {
  const wy = -RIVER_DROP;
  if (d < 11) return wy - 1.3;                                 // riverbed
  if (d < 16) return lerp(wy - 1.3, wy + 0.7, (d - 11) / 5);   // inner bank
  if (d < 20) return wy + 0.7;                                 // riverside flats (河川敷)
  if (d < 25.5) return lerp(wy + 0.7, 0.35, (d - 20) / 5.5);   // grassy levee slope (土手)
  return 0.35;                                                 // levee-top path
}

// ---- tunnels (トンネル) through a ridge on the mountain pass and through headlands on the coast
export const TUN = 1050, TOFF = 525, T_HALF = 85, T_RIDGE = 125, T_CREST = 24;
export const tunnelS = k => k * TUN + TOFF;
export function tunnelValid(st) {
  if (st < 300) return false;
  for (const d of [-170, 0, 170]) { const w = zoneW(st + d); if (Math.max(w.mountain, w.coast) < 0.95) return false; }
  const b = borderNear(st); // (never into a border tunnel's ridge: no region's route has the mountain or the coast at a border yet)
  return !(b && Math.abs(b.s - st) < 2 * T_RIDGE + 60);
}
/** the tunnel nearest to s, if that one exists: through the mountain pass's ridges and the coast's headlands (every TUN
 *  metres where those zones run long enough), or a border tunnel (borderNear) */
export function tunnelNear(s) {
  const k = Math.round((s - TOFF) / TUN), g = memo(MEMO.t, k, () => { const st = tunnelS(k); return tunnelValid(st) ? { k, s: st } : null; });
  const b = borderNear(s);
  return !b ? g : !g || Math.abs(s - b.s) < Math.abs(s - g.s) ? b : g;
}
/** 1 through the tunnel and its approaches — the road runs straight and level there */
export function tunnelW(s) { const t = tunnelNear(s); return t ? 1 - sstep(T_HALF + 20, T_RIDGE + 25, Math.abs(s - t.s)) : 0; }
/** how much the tunnel's ridge raised the ground at the last groundOffsetMix() call (for the ground shader) */
export let RAISE = 0;
/** the tunnel ridge's height above the road at (ds, u) — also the height of the cap over the tube */
export const ridgeHr = (ds, u) => { const q = ds / T_RIDGE; return T_CREST * (1 - q * q) - Math.abs(u) * (u > 0 ? 0.12 : 0.32); };
/** half-width of the tunnel tube (to its walls), from the road's half-width */
export const tubeHalf = rw => rw + 1.4;

const STEP = 2;
export class Path {
  // (I: the heading's running integral, ∫₀ˢ H, for meanHeading)
  constructor() { this.X = [0]; this.Z = [0]; this.H = [0.3]; this.I = [0]; this.Y = [this.elev(0)]; }
  curv(s) {
    const v = (noise1(s / 300, 11) - 0.5) * 2 + (noise1(s / 95, 17) - 0.5) * 0.35;
    const a = Math.abs(v), c = a < 0.22 ? 0 : Math.sign(v) * (a - 0.22) / 0.78;
    return c * zparam(s, 'curv') * (1 - Math.max(crossingW(s), riverW(s), tunnelW(s)));
  }
  elevRaw(s) { return zparam(s, 'base') + zparam(s, 'hill') * (fbm1(s / 380, 29) - 0.5) * 2; }
  elev(s) {
    let y = this.elevRaw(s);
    const c = crossingNear(s);
    if (c) { const w = 1 - sstep(8, 45, Math.abs(s - c.s)); if (w > 0) y = lerp(y, this.elevRaw(c.s), w); }
    const r = riverNear(s);
    if (r) { const w = 1 - sstep(30, 70, Math.abs(s - r.s)); if (w > 0) y = lerp(y, this.elevRaw(r.s), w); }
    const tn = tunnelNear(s);
    if (tn) { const w = 1 - sstep(T_HALF + 10, T_RIDGE + 45, Math.abs(s - tn.s)); if (w > 0) y = lerp(y, this.elevRaw(tn.s), w); }
    return y;
  }
  ensure(s) {
    while ((this.X.length - 1) * STEP < s + STEP) {
      const i = this.X.length - 1, si = i * STEP, k = this.curv(si + STEP / 2) * STEP, h = this.H[i];
      this.X.push(this.X[i] + Math.sin(h + k / 2) * STEP);
      this.Z.push(this.Z[i] + Math.cos(h + k / 2) * STEP);
      this.H.push(h + k);
      this.I.push(this.I[i] + (h + k / 2) * STEP);
      this.Y.push(this.elev(si + STEP));
    }
  }
  /** ∫₀ˢ H ds (the heading is linear between its samples) */
  headInt(s) {
    s = Math.max(0, s);
    this.ensure(s + STEP);
    const f = s / STEP, i = Math.floor(f), t = f - i, h = this.H[i];
    return this.I[i] + STEP * t * (h + (this.H[i + 1] - h) * t / 2);
  }
  /** the road's mean heading over [s − w, s + w] (radians, unwrapped like the headings: no jump at ±π) */
  meanHeading(s, w) { const a = Math.max(0, s - w), b = s + w; return (this.headInt(b) - this.headInt(a)) / (b - a); }
  /** centre-line frame at distance s: position, heading, forward (fx,fz) and right (rx,rz) */
  at(s, o = {}) {
    s = Math.max(0, s);
    this.ensure(s + STEP);
    const f = s / STEP, i = Math.floor(f), t = f - i;
    o.x = lerp(this.X[i], this.X[i + 1], t); o.z = lerp(this.Z[i], this.Z[i + 1], t);
    o.y = lerp(this.Y[i], this.Y[i + 1], t); o.h = lerp(this.H[i], this.H[i + 1], t);
    const sh = Math.sin(o.h), ch = Math.cos(o.h);
    o.fx = sh; o.fz = ch; o.rx = -ch; o.rz = sh;
    return o;
  }
}

// the Bosphorus's hill above its pavement (m from the road's middle, height over the pavement): the front row's terrace (its
// gardens and houses, 8–23 m), a steep bank, the second row's (29–45), a long bank, the third terrace (70–104: the village
// higher up, chunks.js placeBosphorus), the wooded top. (Each row ~10 m over the one in front: its upper floors and roofs show
// over that one's roofs from the road, the village stepping up the hill as the concept's)
const HILL = [[8.3, 0], [11.5, 0.2], [14.5, 0.4], [18, 0.65], [23, 1.0], [29, 11.5], [36, 12.0], [45, 13.0], [56, 23.0], [70, 33.0], [86, 34.0], [104, 35.0], [124, 50], [140, 56], [160, 61], [185, 66], [215, 71]];
/** the Bosphorus's hill: its height over the pavement at a (m from the road's middle) */
export function hillH(a) {
  if (a <= HILL[0][0]) return 0;
  for (let i = 1; i < HILL.length; i++) if (a < HILL[i][0]) { const [a0, h0] = HILL[i - 1], [a1, h1] = HILL[i]; return h0 + ((h1 - h0) * (a - a0)) / (a1 - a0); }
  return HILL[HILL.length - 1][1];
}
/** Height of the ground relative to the road surface at (s,u), per zone. u > 0 is the right-hand side. */
export function groundOffset(zone, s, u, e, rw) {
  const a = Math.abs(u);
  switch (zone) {
    case 'city':
      return a < rw + 3.05 ? -0.06 : 0.14;
    case 'sakura':
      if (a < rw + 2.65) return -0.06;
      return 0.12 + sstep(45, 190, a) * 16 * (0.45 + 0.55 * noise1(s / 160 + (u > 0 ? 50 : 0), 3));
    case 'coast': {
      if (u > 0) {
        if (a < rw + 0.9) return -0.06;
        return -0.15 + sstep(rw + 1.5, 80, a) * 24 * (0.5 + 0.5 * noise1(s / 170, 5)) + sstep(80, 200, a) * 30;
      }
      if (a < rw + 1.5) return -0.06;                       // shoulder + guardrail
      if (a < rw + 1.95) return -0.04;                      // top of the sea wall
      // the wall drops straight into the sea, as in the reference art (there used to be a 26 m beach): its foot is under
      // the water among the tetrapods (SEA_FOOT), and the sea floor shelves off from there (absolute heights: sea level 0)
      return SEA_FOOT - Math.min(a - (rw + 2.0), 40) * 0.13 - e;
    }
    case 'bosphorus': {
      // the strait's side is the coast's (its shoulder, the sea wall's top, the wall dropping into the water); on the land
      // side, as in the concept painting: a grass verge at the road's level, a stone pavement a kerb higher, the gardens'
      // railings, then the houses' plots climbing the steep slope (~45 m up at 75 m from the road, the wooded ridge beyond)
      if (u < 0) return groundOffset('coast', s, u, e, rw);
      if (a < rw + 1.6) return -0.06;
      if (a < rw + 5) return 0.12;
      // (the village climbs the hill on terraces, as the concept's houses do: each row of houses on a gentle terrace, a steep
      // green bank up to the next row 8–11 m higher, its upper floors and roofs over the front row's; the wooded top beyond.
      // The knots stand on the ground's far columns (chunks.js FAR), so its coarse grid follows them)
      return 0.12 + hillH(a) * (0.9 + 0.1 * noise1(s / 150, 83));
    }
    case 'mountain': {
      if (u > 0) { // uphill: gutter, then a concrete-framed slope face (法面), then the forest slope
        if (a < rw + 0.5) return -0.06;
        if (a < rw + 1.0) return -0.32;                     // U-shaped concrete gutter (側溝)
        const hf = 8 + 6 * noise1(s / 140, 61), d = a - (rw + 1.0);
        if (d < hf) return d;                               // 45° face
        return Math.min(hf + (d - hf) * 0.55, 70);
      }
      if (a < rw + 1.2) return -0.06;                       // shoulder (guardrail at rw + 0.95)
      const d = a - (rw + 1.2);
      if (d < 32) return -d * 1.1;                          // steep wooded drop into the valley
      return -35.2 + sstep(105, 230, a) * 95 * (0.6 + 0.4 * noise1(s / 220, 67)); // valley floor, then the far mountainside
    }
    case 'snow': { // plowed banks along the road, deep snow over the fields, white hills beyond
      if (a < rw + 0.15) return -0.06;
      if (a < rw + 0.7) return -0.06 + ((a - rw - 0.15) / 0.55) * 1.36;  // the plowed snow wall rises
      if (a < rw + 1.5) return 1.3;
      if (a < rw + 2.65) return lerp(1.3, 0.55, (a - rw - 1.5) / 1.15);
      if (a < 125) return 0.55 + 0.25 * (noise1(s / 40 + (u > 0 ? 3 : 0), 71) - 0.5);
      return 0.55 + sstep(125, 210, a) * 40 * (0.45 + 0.55 * noise1(s / 230 + (u > 0 ? 11 : 0), 73));
    }
    case 'country':
    default:
      if (a < rw + 2.0) return -0.08;                       // the verge: a bank of tall grass and wildflowers
      if (a < rw + 2.6) return -0.08 - (a - rw - 2.0) * 0.62; // its slope down to the fields (there used to be a ditch)
      if (a < 135) return -0.45;                            // paddies
      // then a low wooded rise closing the fields (it was 14–36 m of hills: seen far ahead they stood in front of the
      // painted mountains of the horizon band, painted.js)
      return -0.45 + sstep(140, 215, a) * 7 * (0.4 + 0.6 * noise1(s / 210 + (u > 0 ? 9 : 0), 7));
  }
}
export function groundOffsetMix(s, u, e, rw) {
  const m = zoneMix(s);
  const a = groundOffset(m.a, s, u, e, rw);
  // (the coast's sea side lies deep under the water right from its wall: blended in linearly it drowned the neighbouring
  // zone's land half-way through the transition, its trees and houses standing in the sea. There the land holds on, and
  // gives way to the sea over the coast's half of the blend)
  let tm = m.t;
  if (u < 0 && tm > 0) { if (SEA_ZONES.includes(m.b)) tm = sstep(0.25, 0.9, tm); else if (SEA_ZONES.includes(m.a)) tm = sstep(0.1, 0.75, tm); }
  const base = m.t > 0 ? lerp(a, groundOffset(m.b, s, u, e, rw), tm) : a;
  RAISE = 0;
  const r = riverNear(s);
  if (r) {
    const d = Math.abs(s - r.s);
    if (d >= 36) return base;
    let p = d < 29 ? riverProfile(d) : lerp(0.35, base, sstep(29, 36, d));
    if (Math.abs(u) < rw + 3.2) p = Math.min(p, -0.08); // never poke up through the road or its sidewalks
    return p;
  }
  const t = tunnelNear(s);
  if (!t) return base;
  const ds = s - t.s, ad = Math.abs(ds);
  if (ad >= 2 * T_RIDGE) return base;
  // a ridge across the road: highest over the middle of the tunnel, a spur falling away to the valley / the sea
  const au = Math.abs(u), hr = ridgeHr(ds, u);
  // (a border tunnel's mouth into the shopping street: its cutting stands back behind the sidewalk and the shopfronts, so
  // the street runs up to the portal)
  const cut = t.border && ad >= T_HALF && zoneAt(s) === 'city' ? rw + 3.05 : rw + 1.0;
  let y;
  if (ad < T_HALF) y = au <= rw + 1.46 ? -0.25 : Math.max(base, hr);  // over the tube (the strip under the walkways stays low; a cap covers it)
  else y = Math.max(base, Math.min(hr, au < cut ? -0.06 : au - cut)); // the approach cutting, 45° faces
  RAISE = Math.max(0, y - base);
  return y;
}
/** 0…1 weight of the riverbank look at s (used by the ground shader) */
export function riverBank(s) { const r = riverNear(s); return r ? 1 - sstep(27, 34, Math.abs(s - r.s)) : 0; }
