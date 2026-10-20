// The infinite road: a centre-line integrated from smooth curvature noise, plus the zone schedule.
import { clamp, lerp, smooth, sstep, noise1, fbm1 } from './util.js';

export const ZONES = ['city', 'sakura', 'coast', 'country'];
export const ZINFO = {
  city:    { jp: '街の灯',     en: 'City Streets',          curv: 1 / 1500, hill: 1.2, base: 4.0, rw: 3.1, speed: 10.5 },
  sakura:  { jp: '桜並木',     en: 'Cherry Blossom Avenue', curv: 1 / 520,  hill: 2.5, base: 4.5, rw: 3.3, speed: 11.5 },
  coast:   { jp: '海沿いの道', en: 'Coastal Road',          curv: 1 / 300,  hill: 1.6, base: 5.2, rw: 3.4, speed: 13.5 },
  country: { jp: '田舎道',     en: 'Country Road',          curv: 1 / 260,  hill: 7.0, base: 6.0, rw: 3.1, speed: 12.5 },
};
export const ZONE_LEN = 1500, TRANS = 260, SEA = 0;

let START = 0;
export function setStartZone(key) { START = Math.max(0, ZONES.indexOf(key)); }

export function zoneMix(s) {
  const z = Math.floor(s / ZONE_LEN), l = s - z * ZONE_LEN;
  const t = smooth(clamp((l - (ZONE_LEN - TRANS)) / TRANS, 0, 1));
  return { a: ZONES[(((z + START) % 4) + 4) % 4], b: ZONES[(((z + START + 1) % 4) + 4) % 4], t };
}
export function zoneW(s) {
  const m = zoneMix(s), w = { city: 0, sakura: 0, coast: 0, country: 0 };
  w[m.a] += 1 - m.t; w[m.b] += m.t;
  return w;
}
export const zoneAt = s => { const m = zoneMix(s); return m.t < 0.5 ? m.a : m.b; };
export function zparam(s, key) { const m = zoneMix(s); return lerp(ZINFO[m.a][key], ZINFO[m.b][key], m.t); }

// ---- railway level crossings (踏切): every XING metres, where the road runs through city or countryside
export const XING = 650, XOFF = 375;
export const crossingS = k => k * XING + XOFF;
export function crossingValid(sx) {
  if (sx < 300) return false;
  for (const d of [-70, 0, 70]) { const w = zoneW(sx + d); if (Math.max(w.city, w.country) < 0.9) return false; }
  return true;
}
/** the crossing nearest to s, if that one exists */
export function crossingNear(s) { const k = Math.round((s - XOFF) / XING), sx = crossingS(k); return crossingValid(sx) ? { k, s: sx } : null; }
/** 1 within ±8 m of a crossing, easing to 0 by ±45 m — the road is levelled and straightened there */
export function crossingW(s) { const c = crossingNear(s); return c ? 1 - sstep(8, 45, Math.abs(s - c.s)) : 0; }

// ---- rivers crossed on a bridge (橋): countryside and the sakura avenue, never next to a level crossing
export const RIV = 1150, ROFF = 820, RIVER_DROP = 4.6; // water surface sits RIVER_DROP below the road
export const riverS = k => k * RIV + ROFF;
export function riverValid(sr) {
  if (sr < 400) return false;
  for (const d of [-90, 0, 90]) { const w = zoneW(sr + d); if (w.country + w.sakura < 0.9) return false; }
  const c = crossingNear(sr);
  return !(c && Math.abs(c.s - sr) < 170);
}
export function riverNear(s) { const k = Math.round((s - ROFF) / RIV), sr = riverS(k); return riverValid(sr) ? { k, s: sr } : null; }
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

const STEP = 2;
export class Path {
  constructor() { this.X = [0]; this.Z = [0]; this.H = [0.3]; this.Y = [this.elev(0)]; }
  curv(s) {
    const v = (noise1(s / 300, 11) - 0.5) * 2 + (noise1(s / 95, 17) - 0.5) * 0.35;
    const a = Math.abs(v), c = a < 0.22 ? 0 : Math.sign(v) * (a - 0.22) / 0.78;
    return c * zparam(s, 'curv') * (1 - Math.max(crossingW(s), riverW(s)));
  }
  elevRaw(s) { return zparam(s, 'base') + zparam(s, 'hill') * (fbm1(s / 380, 29) - 0.5) * 2; }
  elev(s) {
    let y = this.elevRaw(s);
    const c = crossingNear(s);
    if (c) { const w = 1 - sstep(8, 45, Math.abs(s - c.s)); if (w > 0) y = lerp(y, this.elevRaw(c.s), w); }
    const r = riverNear(s);
    if (r) { const w = 1 - sstep(30, 70, Math.abs(s - r.s)); if (w > 0) y = lerp(y, this.elevRaw(r.s), w); }
    return y;
  }
  ensure(s) {
    while ((this.X.length - 1) * STEP < s + STEP) {
      const i = this.X.length - 1, si = i * STEP, k = this.curv(si + STEP / 2) * STEP, h = this.H[i];
      this.X.push(this.X[i] + Math.sin(h + k / 2) * STEP);
      this.Z.push(this.Z[i] + Math.cos(h + k / 2) * STEP);
      this.H.push(h + k);
      this.Y.push(this.elev(si + STEP));
    }
  }
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
      if (a < rw + 1.9) return -0.04;                       // top of the sea wall
      // beach in absolute heights (sea level = 0)
      const b = a - (rw + 2.0);
      const abs = b < 26 ? lerp(1.25, -1.6, b / 26) : lerp(-1.6, -7, clamp((b - 26) / 20, 0, 1));
      return abs - e;
    }
    case 'country':
    default:
      if (a < rw + 0.7) return -0.08;
      if (a < rw + 2.1) return -0.95;                       // irrigation ditch
      if (a < 135) return -0.55;                            // paddies
      return -0.55 + sstep(135, 215, a) * 36 * (0.4 + 0.6 * noise1(s / 210 + (u > 0 ? 9 : 0), 7));
  }
}
export function groundOffsetMix(s, u, e, rw) {
  const m = zoneMix(s);
  const a = groundOffset(m.a, s, u, e, rw);
  const base = m.t > 0 ? lerp(a, groundOffset(m.b, s, u, e, rw), m.t) : a;
  const r = riverNear(s);
  if (!r) return base;
  const d = Math.abs(s - r.s);
  if (d >= 36) return base;
  let p = d < 29 ? riverProfile(d) : lerp(0.35, base, sstep(29, 36, d));
  if (Math.abs(u) < rw + 3.2) p = Math.min(p, -0.08); // never poke up through the road or its sidewalks
  return p;
}
/** 0…1 weight of the riverbank look at s (used by the ground shader) */
export function riverBank(s) { const r = riverNear(s); return r ? 1 - sstep(27, 34, Math.abs(s - r.s)) : 0; }
