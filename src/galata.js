// The real Galata zone (step 35R): Karaköy's Kemeraltı Caddesi, the Galata Bridge's southbound carriageway, Eminönü and Reşadiye
// Caddesi towards Sirkeci, as they are (the approved route and OpenStreetMap: real_galata.js, © OpenStreetMap contributors). Its road
// is path.js's (the real bends, galRW's widths); this is what stands beside it: the cross-section by where on the road (galSect),
// the T1's tracks (galTrack), the real buildings near the road (GR blocks, chunks.js) and the landmarks' places (realsky.js).
import { GR } from './real_galata.js';
import { galBridge, GAL_WALK, GAL_KERB, GAL_L } from './path.js';
import { clamp, smooth } from './util.js';

/** the T1's two tracks at l (OpenStreetMap's, every 10 m: GR.tram), as lerped: out.n (the near one), out.f (the far one), both on
 *  our left (u < 0) */
function osmTram(l, out) {
  const T = GR.tram, f = clamp(l / 10, 0, T.length - 1.001), i = Math.floor(f), t = f - i, a = T[i], b = T[i + 1];
  out.n = a[1] + (b[1] - a[1]) * t; out.f = a[2] + (b[2] - a[2]) * t; return out;
}
const _t = {};
/** the left side's surfaces at l (m into the zone) for our half-width rw, keeping right (all u < 0 but pr: m from our middle):
 *  - med: the far edge of the strip or island between our left kerb (−rw) and the tram's reserve (Kemeraltı's median under its
 *    iron fence, widening to Karaköy's square and its tram stop's island; the bridge's strip of slabs by the tram line's fence);
 *  - tn, tf: the near and far tracks' middles (the real ones, but kept clear of our road: the tram passes 0.9 m from the fence);
 *  - t0, t1: the reserve's edges (t0 = med); n0, n1: the northbound carriageway's (its near kerb, its far one: two lanes along
 *    Kemeraltı and Reşadiye, three on the bridge); p1: the far pavement's (or the bridge's east walkway's) outer edge;
 *  - pr: our right-hand pavement's width (the bridge's west walkway's: GAL_WALK); kh: the pavements' kerb height;
 *  - bridge: on the bridge's deck. */
export function galSect(l, rw, out) {
  if (galBridge(l)) {
    out.bridge = true; out.kh = 0.18; out.pr = GAL_WALK;
    out.med = out.t0 = -(rw + GAL_KERB); out.t1 = -13.3; const c = (out.t0 + out.t1) / 2; out.tn = c + 2.25; out.tf = c - 2.25;
    out.n0 = -13.6; out.n1 = -23.3; out.p1 = -GAL_L; return out;
  }
  out.bridge = false; out.kh = 0.15; out.pr = 4.0;
  osmTram(l, _t);
  const sp = clamp(_t.n - _t.f, 3.4, 4.6), tn = Math.min(_t.n, -(rw + 2.15));
  out.tn = tn; out.tf = tn - sp; out.t0 = out.med = tn + 1.6; out.t1 = out.tf - 1.6;
  // (the northbound carriageway: two lanes beyond the reserve, widening to the bridge's three over Karaköy's square; at Eminönü past
  // the tram stop's far platform)
  const stop = l > 1190 && l < 1282 ? 3.6 : 0.3, nbw = l < 578 ? 6.6 + 3.1 * smooth(clamp((l - 470) / 108, 0, 1)) : 9.7 - 2.7 * smooth(clamp((l - 1038) / 82, 0, 1));
  out.n0 = out.t1 - (l > 1038 ? stop : 0.3); out.n1 = out.n0 - nbw; out.p1 = out.n1 - 3.5;
  return out;
}
/** the T1's track `k` (0: the near one, ours: towards Eminönü; 1: the far one, towards Karaköy) l m into the zone, at our half-width
 *  rw: its u (tram.js) */
const _s = {};
export function galTrack(l, rw, k) { galSect(l, rw, _s); return k ? _s.tf : _s.tn; }
/** the T1's stops (m into the zone): Karaköy's, by the bridge's end, and Eminönü's, along Reşadiye Caddesi (OSM's platforms) */
export const GAL_STOPS = [[520, 581], [1197, 1275]];
