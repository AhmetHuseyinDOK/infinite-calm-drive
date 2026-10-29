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

// ---- Galata's own fronts (step 35R-galata-2: assets/real/galata/galfronts1.*, painted.js loadGalFronts): each block's front by its type,
// as the real street's (~/cdtest/g36: galfronts1_map.json, its OSM way's building matched to GR.blk on its l and id): the landmarks on
// their own buildings (P Karaköy Palas, N Nordstern Han, T the Karaköy PTT, S Surp Pırgiç, K Surp Krikor Lusavoriç, B Saint-Benoît,
// L Liman Han, I the İTO, F Eminönü's ferry terminals), the rest by the street's kinds of building (s Karaköy's grey stone hans, m its
// mid-century rose-stone offices, p its narrow pastel apartments round the square, f the fish market's restaurants, o Reşadiye's
// off-white offices, h Eminönü's late-Ottoman hans; '-' keeps its look: the mosques, the bazaar, the tomb, the building sites)
const GAL_TT = new Map('-382.440.s,-186.682.s,-173.34.s,-154.363.s,-140.487.s,-104.332.-,-79.17.s,-17.154.s,-6.246.s,11.556.s,56.402.s,218.561.s,232.143.K,234.415.s,359.335.s,415.589.s,507.906.s,631.41.s,649.326.s,719.217.m,735.104.m,783.588.s,930.546.-,983.966.m,1022.275.m,1081.648.m,1100.914.m,1187.89.m,1211.545.m,1232.500.m,1348.534.s,1388.348.m,1409.877.m,1480.76.s,1484.477.m,1558.147.m,1613.229.s,1698.157.-,1741.96.s,1769.143.-,1781.955.s,1868.730.s,2026.678.B,2029.739.s,2079.297.s,2279.512.s,2329.694.s,2339.626.s,2529.548.s,2598.198.S,2631.121.s,2707.268.s,2757.21.s,2794.230.s,2823.162.s,2927.295.s,3004.764.s,3021.751.s,3111.750.s,3230.222.s,3334.218.s,3383.387.s,3426.835.s,3626.736.s,3633.356.s,3649.112.s,3792.600.s,3823.806.p,3913.476.p,3947.180.s,4027.202.p,4039.647.s,4086.993.p,4109.914.p,4153.113.p,4167.740.P,4269.712.s,4275.987.p,4278.222.p,4393.601.p,4464.700.p,4560.818.p,4635.170.p,4820.352.p,4867.955.p,5016.841.p,5149.332.N,5352.79.-,5354.450.s,5428.357.T,5476.693.T,5479.275.p,5507.850.-,5540.15.f,5546.853.f,5615.885.f,5621.485.f,5631.42.f,5729.292.f,5780.40.f,5878.859.f,5907.155.f,6068.877.f,10419.509.-,11228.108.-,11944.205.h,12005.217.h,12531.496.h,12645.477.h,12800.643.h,12850.853.F,13054.94.-,13390.192.I,13675.10.F,14207.672.h,14315.855.L,14405.686.h,14616.124.o,14631.613.h,14764.955.F,14809.230.h,14907.373.h,14932.330.h,15088.229.F,15103.182.h,15136.863.o,15192.538.h'.split(',').map(e => { const [l, id, t] = e.split('.'); return [+l * 1000 + +id, t]; }));
/** a block's front type (GR.blk entry b): its own as matched, else by the rule the map's generic types follow (the fish market's
 *  one- and two-storey sheds and stalls; in Karaköy the 8-storey and taller offices and Kemeraltı's left side at 60–160 m mid-century
 *  rose stone, the small blocks round the square pastel, the rest grey stone; in Eminönü the tall ones offices, the rest hans); null:
 *  as it was (a church, a mosque, the bazaar, the tomb, a site, a shed off the fish market) */
export function galType(b) {
  const t = GAL_TT.get(Math.round(b.l * 10) * 1000 + b.id);
  // (GALATA-3, D5: Kemeraltı's left side to Karaköy's square is its white office blocks and their glass, not the rose stone: Reşadiye's
  // off-white offices' painting there)
  if (t === 'm' && b.l < 175) return 'o';
  if (t !== undefined) return t === '-' ? null : t;
  if (b.k !== 'block' && !(b.k === 'shed' && b.l > 535 && b.l < 615)) return null;
  if (b.l > 535 && b.l < 615 && (b.lv <= 2 || b.k === 'shed')) return 'f';
  if (b.l < 1040) {
    if (b.lv >= 8) return b.l < 175 ? 'o' : 'm';
    let a = 0; const p = b.p, n = p.length; for (let i = 0; i < n; i++) { const q = p[i], r = p[(i + 1) % n]; a += q[0] * r[1] - r[0] * q[1]; }
    if (b.l > 380 && b.l < 580 && Math.abs(a) / 2 < 250) return 'p';
    return 's';
  }
  return b.lv >= 8 ? 'o' : 'h';
}
