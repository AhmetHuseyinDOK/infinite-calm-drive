// The world is built in 60 m chunks along the infinite road; each chunk merges its contents into a handful of meshes.
import * as THREE from 'three';
import { zoneMix, zoneW, zoneAt, zparam, groundOffsetMix, regionWeight, SEA, WALL_U, crossingS, crossingValid, crossingNear, XING, XOFF, riverS, riverValid, riverNear, riverBank, RIV, ROFF, RIVER_DROP, tunnelNear, borderNear, REGION, T_HALF, T_RIDGE, RAISE, TUFF, ridgeHr, tubeHalf, GAL_WALK, GAL_L, GAL_BR, galL, galBridge, ZONE_LEN, TOWN_SW, townLanding, bayQ, HL } from './path.js';
import { galSect, GAL_STOPS, galType } from './galata.js';
import { galWorld, galFrame, galWater } from './path.js';
import { GR } from './real_galata.js';
import { placeEminonu, eminSkip, eminFree } from './eminonu.js'; // (step 35R-galata-2c: Eminönü's square)
import { TOWN_SHOPS } from './textures.js';
import { xingPosts } from './crossing.js';
import { GB } from './geom.js';
import { PLATES, PX_LAYER } from './plates.js'; // (step 35P: Galata's painted plates: its proxy split from the built look)
import * as P from './props.js';
const P_ = P; // (the props, where a builder's locals use P)
import { rng, hash2, clamp, sstep } from './util.js';
import { S_WRAP, groundMaterialFor, PROP_DEPTH } from './materials.js';
import { SURF, surfGeometry } from './surf.js';

export const CH = 60;
const WBEAM = [[0.5, 0.055], [0.6, 0.075], [0.67, 0.025], [0.74, 0.075], [0.84, 0.055]]; // guardrail profile (m up, m out)
const NEAR = [0.7, 0.9, 1.45, 1.5, 1.9, 2.0, 2.1, 2.65, 3.05, 3.4]; // 1.45: just outside a tunnel tube's wall
const FAR = [7, 9, 11.5, 14.5, 18, 23, 29, 36, 45, 56, 70, 86, 104, 124, 140, 160, 185, 215];
/** Cappadocia's (W5): the same and as many again between them (FAR's are all among them), for its rounded tuff ridges' outlines.
 *  Only in chunks clear of a border tunnel's ridge: where a chunk with these meets one with FAR's, the ground there is flat */
const UCH_FAR = [7, 8, 9, 10.2, 11.5, 13, 14.5, 16.2, 18, 20.5, 23, 26, 29, 32.5, 36, 40.5, 45, 50.5, 56, 63, 70, 78, 86, 95, 104, 114, 124, 140, 160, 185, 215];
const POLE_SP = 32;
/** the coast painting's house: m into the coast zone (the audit view looks at it from 1100 m: ref/GAPS.md) */
const COAST_HOUSE = 1136;
const HEADW = [0, 0, 1, 0, 0]; // (the bay's end's headland: all coast, chunks' ground)
/** …and its two boats: [bearing from the audit camera (°, − left), distance (m), scale] */
const BOATS = [[-24.6, 118, 0.85], [-21.4, 205, 0.8]];
/** …and its big round tree on the slope right of the house: [bearing (°), distance (m), scale] */
const TREE_R = [37, 56, 1.6];
// the coast's water along its sea wall (placeCoast): how far out from the wall each column of the strip lies (m)
const SHORE_D = [-0.2, 2.2, 5.5, 10, 17, 27, 38];
const WIRE = [0.025, 0.026, 0.032], BIRD = [0.05, 0.05, 0.065];
// (step 35R: the Galata Bridge's kerb walls' concrete, lit and shaded faces and their tops; Kemeraltı's iron)
const C_KERB = [0.62, 0.62, 0.6], C_KERB2 = [0.55, 0.55, 0.54], C_KERBT = [0.7, 0.7, 0.68], C_IRON = [0.022, 0.024, 0.027], C_ROOF = [0.42, 0.4, 0.38], C_STONE = [0.6, 0.57, 0.5], C_PIER = [0.86, 0.87, 0.86];
// (a point (E, N) in an outline, or within m of its walls; an outline's middle)
const nearPoly = (E, N, P, m) => { let inn = false, d2 = Infinity; for (let i = 0, j = P.length - 1; i < P.length; j = i++) { const [x1, y1] = P[j], [x2, y2] = P[i];
  if ((y1 > N) !== (y2 > N) && E < x1 + ((N - y1) * (x2 - x1)) / (y2 - y1)) inn = !inn;
  const ex = x2 - x1, ey = y2 - y1, t = Math.max(0, Math.min(1, ((E - x1) * ex + (N - y1) * ey) / (ex * ex + ey * ey || 1))), qx = x1 + ex * t - E, qy = y1 + ey * t - N; d2 = Math.min(d2, qx * qx + qy * qy); }
  return inn || d2 < m * m; };
const mid = P => { let x = 0, y = 0; for (const p of P) { x += p[0] / P.length; y += p[1] / P.length; } return [x, y]; };
/** (step 35P, after GALATA-3's D3) whether a near block's wall i can be seen: anywhere along it (five points, 1.2 m out) in no other near block's
 *  outline, or over a neighbour lower by a storey or more. Party walls hidden by their neighbours take no painted storeys in the plates' layout.
 *  Once per block, in the zone's frame */
const GAL_EXP = new Map();
function galExposed(b, i) {
  let x = GAL_EXP.get(b);
  if (!x) {
    const P = b.p, n = P.length; x = new Uint8Array(n);
    for (let k = 0; k < n; k++) {
      const a = P[k], e = P[(k + 1) % n], dE = e[0] - a[0], dN = e[1] - a[1], L = Math.hypot(dE, dN) || 1;
      let open = 0;
      for (let t = 0.1; t < 1 && !open; t += 0.2) {
        const E = a[0] + dE * t + (dN / L) * 1.2, N = a[1] + dN * t - (dE / L) * 1.2; let hit = null;
        for (const q of GR.blk) if (q !== b && Math.abs(q.l - b.l) < 120 && nearPoly(E, N, q.p, 0)) { hit = q; break; }
        if (!hit || hit.h < b.h - 3) open = 1;
      }
      x[k] = open;
    }
    GAL_EXP.set(b, x);
  }
  return x[i] === 1;
}
const GAL_DOL = [[588, 15, 0], [598.5, 20.4, 1], [570, 36.9, 0]]; // (Karaköy's car park: where its dolmuşes stand, l, u, livery)
/** (step 35h) the boats moored at Karaköy's fish-market quay, along the real shore (the zone's water raster: each one's footprint seated in the
 *  water 0.3 m clear of the quay, ~/cdtest/s35h/tools/moor.mjs): six along the fish market's waterfront, two at the car park's quay. [l, u, its
 *  heading in the road's frame (degrees: 0 along the road, 90 to its right), the model, its livery] */
const GAL_MOOR = [[613.24, 48.65, 43.7, 'kayik', 0], [617.86, 55.97, 223.7, 'kayik', 1], [623.66, 62.07, 43.7, 'motor', 0], [630.21, 67.37, 223.7, 'kayik', 2],
  [638.01, 71.36, 43.7, 'kayik', 0], [645.54, 75.65, 223.7, 'kayik', 1], [607.4, 28.5, 90, 'kayik', 2], [608.5, 37.5, 270, 'kayik', 0]];
const P_GALW = P.GAL_WALLS, C_ASPH = [0.2, 0.2, 0.21], C_BAY = [0.78, 0.78, 0.76]; // (Karaköy's car park: its asphalt and its bays' lines)
/** a light at a chunk-local point (props.js lampAt's list: lights that can light the car) */
const lampAtW = (G, p) => { if (G.lamps) G.lamps.push(p[0], p[1], p[2], 0.7); };
const IDENT = new THREE.Matrix4(), _sc = new THREE.Matrix4(), W1G = [1, 1, 1];
const mod = (a, n) => ((a % n) + n) % n;
// (step 35g) meshes the old furniture never made (the painted furniture's own mesh; the bus stop's lamp and its pool where nothing else in
// the chunk had one) take three's ids from a generator of their own: their ids would draw from Math.random, and every seeded capture's
// birds, petals and fireflies built after them would move (as main.js quietIds)
let quietSeed = 0x35a7e11d;
const quietly = f => { const R0 = Math.random; Math.random = () => { quietSeed = (Math.imul(quietSeed, 1664525) + 1013904223) >>> 0; return quietSeed / 4294967296; }; try { return f(); } finally { Math.random = R0; } };
/** true within m metres of a level crossing (keeps the track corridor clear) */
const nearX = (s, m) => { const c = crossingNear(s); return !!c && Math.abs(s - c.s) < m; };
/** the city's openings, on a 150 m grid (k · 150): a signalised crossing with side streets at every 4th (s = 600, 1200 …,
 *  never in the first view of the drive), a narrow alley (路地) halfway between (300, 900 …), and nothing at the odd
 *  ones, so the shopping street runs on as two unbroken rows of shopfronts, as in the reference art. (They used to be
 *  crossings with signals every 150 m, one 10 m ahead of the start. materials.js paints the crossings' road markings on
 *  the same rule.) */
const bigX = k => mod(k, 4) === 0, openX = k => mod(k, 2) === 0;
const ALLEY = 1.4; // an alley's half-width (a side street's is 3.0)
/** the stretch of frontage kept clear of buildings at opening k: s from k·150 − mouthA(k) to k·150 + mouthB(k) */
const mouthA = k => (bigX(k) ? 4.4 : ALLEY + 0.9), mouthB = k => (bigX(k) ? 3.4 : ALLEY - 0.1);
/** true within m metres of a city side street or alley (every 300 m) */
const nearSide = (s, m) => Math.abs(s - Math.round(s / 300) * 300) < m;
/** true within m metres of a tunnel's centre (keeps roadside things out of the ridge and the tube) */
const nearT = (s, m) => { const t = tunnelNear(s); return !!t && Math.abs(s - t.s) < m; };
/** true within m metres of a border tunnel's middle (path.js borderNear: where the route passes from one region to the next) */
const nearB = (s, m) => { const b = borderNear(s); return !!b && Math.abs(s - b.s) < m; };
/** a zone weight's sum for the ground's coast channel: the coast's or the Bosphorus's (they never meet; materials.js Z_BOS) */
const wSea = w => w.coast + w.bosphorus;
/** the Bosphorus's verge: its long grass a paler, yellower green than the coast's, as the concept's (it was CIELAB ΔE 16
 *  from it): the clumps' vertex colours (props.js bank) */
const BOS_VERGE = [1.0, 0.8, 0.86];
/** the Bosphorus's painted house types by a random number: o1, o2, o5 (brown, grey and honey boards) twice as often as o3,
 *  o4, o6 (cream boards, cream plaster, ochre plaster), as the concept's (props.js TR_HOUSES: in packtr.py's order) */
const TR_W = [2, 2, 1, 1, 2, 1], TR_WS = TR_W.reduce((a, b) => a + b, 0);
const trPick = x => { let k = x * TR_WS; for (let i = 0; i < TR_W.length; i++) { k -= TR_W[i]; if (k < 0) return i; } return TR_W.length - 1; };
/** the Turkish town's shops by a random number (W4: textures.js TOWN_SHOPS' kinds: a bakery, a grocer, a market, a tea house, a
 *  barber, a pharmacy, a greengrocer), and the awning each kind mostly has (its other: textures.js TOWN_AWNINGS, −1 none), as
 *  the concept's: the bakery's red and white stripes, the market's blue and white, the tea house's red, the grocer's and the
 *  barber's blue */
const TW_KIND = [0.15, 0.18, 0.14, 0.15, 0.12, 0.08, 0.12], TW_KS = TW_KIND.reduce((a, b) => a + b, 0);
const twKind = x => { let k = x * TW_KS; for (let i = 0; i < TW_KIND.length; i++) { k -= TW_KIND[i]; if (k < 0) return i; } return TW_KIND.length - 1; };
const TW_AWN = [[0, 2], [3, 4], [1, 2], [2, 0], [3, -1], [-1, 5], [4, 6]];
/** the town's lay-bys (a dolmuş stop, its pavement stepping back): every TW_BAY m along the right-hand pavement, TW_BAY_L long
 *  and TW_BAY_D deep with 3 m tapers */
const TW_BAY = 420, TW_BAY0 = 150, TW_BAY_L = 18, TW_BAY_D = 2.4;
/** (step 35b) how near the camera a dolmuş shows its near mesh (m): beyond it the far one (~1.5k triangles, a few dozen pixels tall) */
const DOL_NEAR = 60;
/** the town's opening view (W4): 125–190 m into the town zone (where ?env=town starts: s = 140, the camera 133 m in), its
 *  concept painting's composition: on the left a peach block over a bakery (its red and white awning) and a pharmacy, tea
 *  tables, a simit cart and a cat on the pavement; on the right a pale block over a market (blue and white) and a tea house
 *  (red), a big plane tree by the kerb, a dolmuş at its stop ahead. (At every pass through the town: its layout there) */
const TW_HERO = [125, 190], TW_HERO_B = { '-1': 143.5, '1': 138 }; // (where its two blocks start, by side: in the chase view's edges)
const zoneL = s => s - Math.floor(s / ZONE_LEN) * ZONE_LEN;
/** Cappadocia's fairy chimneys (W5), in bands along each side: [anchors every … m, their jitter, nearest u, how far further out,
 *  heights (m), the most in a group, the share of anchors left empty, the chance of cave openings] */
const UCH_BANDS = [[46, 18, 17, 22, 5.5, 9.5, 3, 0.3, 0.6], [30, 12, 42, 60, 7, 13, 4, 0.25, 0.3], [22, 10, 105, 95, 8, 16, 3, 0.3, 0.1]];
/** its opening view (W5: 125–300 m into the zone, where ?env=uchisar starts), as the concept: [m into the zone, u, kind, …]: the
 *  big chimney with its caves ahead-left and its smaller neighbours, more along the left ridge and on the right, the flag at the
 *  left verge, a bare tree before the left ridge and a big one on the right, dry shrubs at the verges */
const UCH_HERO = [125, 300];
// (a chimney: its height, its profile, how many cave openings; a tree or a shrub: its turn and its scale; the flag: its height.
// Placed where the chase camera sees them where the concept paints them: its own camera stands higher, so they stand nearer)
const UCH_HERO_P = [[157.5, -13.8, 'chim', 5.4, 0, 4], [166, -9.8, 'chim', 4.2, 1, 1], [169, -15.5, 'chim', 3.8, 2, 0], [188, -12.5, 'chim', 4.6, 1, 0], [214, -17, 'chim', 5.6, 0, 0],
  [256, -14.6, 'chim', 7.9, 0, 0], [258, -8.6, 'chim', 6.2, 2, 1], [165.5, 16.4, 'chim', 4.4, 0, 2], [200, 16.5, 'chim', 5.2, 2, 1], [209, 27.9, 'chim', 7.8, 1, 0], [232, 21, 'chim', 6.4, 0, 0],
  [150, -6.4, 'tree', 0.6, 0.92], [146.5, 9.4, 'tree', 1.2, 1.15], [196, -7.5, 'tree', 2.0, 0.8], [214, 8.6, 'tree', 4.1, 0.85], [240, 7.8, 'tree', 3.3, 0.8],
  [143, -5.6, 'bush', 0.3, 1.25], [147, -9.4, 'bush', 1.7, 1.1], [152, 6.2, 'bush', 0.9, 1.0], [158, 12.5, 'bush', 2.2, 1.3], [171, 7.4, 'bush', 2.8, 0.9],
  [158.5, -5.3, 'flag', 7.2, 0]];
/** Paşabağ's fairy chimneys (W6), in bands along each side: [anchors every … m, their jitter, nearest u, how far further out, heights
 *  (m), the most in a group, the share of anchors left empty, the chance of cave openings, of two or three heads on one mound] */
const PAS_BANDS = [[52, 18, 13, 14, 12, 19, 2, 0.3, 0.7, 0.35], [48, 18, 32, 34, 11, 17, 2, 0.45, 0.4, 0.35], [44, 16, 75, 100, 9, 15, 3, 0.55, 0.1, 0.3]];
/** its opening view (W6: 125–330 m into the zone, where ?env=pasabag starts: the car at 140), as the concept: [m into the zone, u,
 *  kind, …]: a chimney: its height, its kind ('two': a mound with two heads), how many cave openings; a tree, a shrub: its turn and
 *  scale; a boulder: its scale; the tourists: how many. Placed where the chase camera sees them where the concept paints them */
const PAS_HERO = [125, 330];
// (a chimney's last field: the seed of its random numbers, picked for the shape the concept paints)
const PAS_HERO_P = [[172, 24.0, 'chim', 19.5, 'mush', 6, 9171], [178, -21, 'chim', 19.5, 'two', 3, 9231], [216, 28, 'chim', 15, 'hat', 3, 9611], [223, 37.5, 'chim', 19, 'hat', 2, 9681],
  [262, -30, 'chim', 16, 'hat', 0, 10071], [290, 34, 'chim', 17, 'mush', 2, 10351], [305, -24, 'chim', 18, 'two', 1, 10501],
  [147.2, -8.2, 'tree', 0.8, 0.9], [142.5, 7.9, 'tree', 3.6, 0.8], [154, 6.8, 'tree', 2.2, 0.75], [188, -11.6, 'tree', 1.4, 1.15], [196, 9.5, 'tree', 5.1, 0.8],
  [214, 10.5, 'tree', 0.3, 0.75], [232, -10, 'tree', 2.8, 0.85], [246, 8.6, 'tree', 4.4, 0.7],
  [170, -8.4, 'rock', 0.8], [183, -10.5, 'rock', 0.6], [190, -8.9, 'rock', 1.0], [176, -13.2, 'rock', 1.3],
  [150, -6.4, 'bush', 1.2, 0.9], [165, 7.5, 'bush', 0.4, 0.8],
  [199, 4.0, 'people', 9]];
/** (step 35f) Paşabağ's tourists' cast: its sheets (assets/people/people1t.json: t1 … t8), and the step between a group's members round them
 *  (coprime with it: neighbours never share a sheet) */
const TOUR_N = 8, TOUR_STEP = 3;
/** (step 35f) Istanbul's people in the real Galata zone, where people are along the route (OpenStreetMap's places; Street View, Commons):
 *  [l (m into the zone), where across, offset (m), facing (degrees from the road's ahead, + to the right), the Istanbul cast's sheet (0 … 11:
 *  i1 a simit seller, his tray on his head; i2 a commuter on her phone; i3 a commuter, his backpack on; i4 an old man, his prayer beads behind
 *  his back; i5 a mother with her shopping; i6 her little girl; i7 a father; i8, i9 students; i10 a visitor taking a photo; i11 her friend,
 *  his coffee in his hands; i12 a tea seller with his tray)]. Where across: 'L' in a T1 stop's shelter (from our left kerb, out across its
 *  platform), 'W' on the bridge's west walkway (from our right kerb; its railing at 5.85), 'E' on the east walkway (from the deck's left
 *  edge), 'A' u itself (Karaköy's and Eminönü's squares, the İETT shelters, the kiosk). Facings so the camera mostly meets their painted
 *  views. Few, calm (at most ~40 in the chunks round the car), none on the road */
const GAL_PEOPLE = [
  // Karaköy's T1 stop (its shelter 523–545 m: under its roof, waiting, looking up the line for the tram or at the track)
  [519, 'L', 2.4, 165, 6], [527.5, 'L', 1.15, 180, 2], [530.4, 'L', 0.95, -125, 1], [535.6, 'L', 1.2, 20, 7], [536.7, 'L', 1.1, 200, 8], [541.8, 'L', 1.25, 175, 3],
  // Karaköy's square (beyond our pavement: the quay's paving)
  [462, 'A', 12.5, -80, 0], [488.2, 'A', 13.6, -115, 4], [488.9, 'A', 14.4, -105, 5], [517, 'A', 12.8, -60, 11], [541, 'A', 15.5, -95, 3], [556, 'A', 11.6, -130, 6],
  // the bridge's west walkway: strolling, and stopping at the railing among the fishermen (not by the lifting span's towers)
  [610, 'W', 2.9, 180, 0], [655, 'W', 5.1, 90, 9], [655.8, 'W', 5.05, 70, 10], [712, 'W', 3.6, 15, 3], [812, 'W', 5.1, 100, 1], [895, 'W', 3.3, 5, 4], [895.8, 'W', 2.8, 10, 5],
  [935, 'W', 4.6, 120, 11], [980, 'W', 2.6, 185, 8], [1010, 'W', 5.1, 85, 7],
  // the east walkway across the deck
  [700, 'E', 1.0, -90, 2], [880, 'E', 1.1, -95, 6],
  // Eminönü's T1 stop (its shelter 1200–1272 m)
  [1205.5, 'L', 1.0, 180, 8], [1214, 'L', 1.2, -140, 2], [1222.5, 'L', 0.9, 170, 4], [1236, 'L', 1.1, 190, 6], [1251, 'L', 1.0, -120, 3],
  // Eminönü's square, and two at the Nimet Abla kiosk's counter (its front towards the road, 61.5 m off it)
  [1128, 'A', 14, -95, 1], [1140, 'A', 16, -100, 3], [1152, 'A', 24, 200, 11], [1166, 'A', 17.5, -70, 0], [1190, 'A', 21, 160, 10], [1190.7, 'A', 21.6, 170, 9],
  [1197, 'A', 13.5, 195, 2], [1214, 'A', 18, -110, 8], [1226, 'A', 15, -80, 6], [1226.7, 'A', 15.6, -90, 5], [1221.0, 'A', 59.6, 90, 4], [1222.6, 'A', 59.4, 85, 2],
  // the İETT shelters of the Eminönü İskele stops on Reşadiye Caddesi: ours (its bench 6.8–7.2 m), the far one's
  [1420.6, 'A', 6.35, 185, 2], [1422.6, 'A', 6.3, -90, 8], [1426.4, 'A', 6.2, 180, 6], [1410.6, 'A', -32.9, 95, 7], [1413.2, 'A', -32.7, 80, 1],
];
const GAL_PEOPLE_L = [Math.min(...GAL_PEOPLE.map(e => e[0])) - 1, Math.max(...GAL_PEOPLE.map(e => e[0])) + 8], _gp = {}, _gp2 = {};
/** true within m metres of a river (keeps houses, poles and trees out of the channel) */
const nearR = (s, m) => { const r = riverNear(s); return !!r && Math.abs(s - r.s) < m; };

class GroundB {
  constructor() { this.P = []; this.N = []; this.SU = []; this.ZW = []; this.RK = []; this.RV = []; this.ZS = []; this.I = []; }
  grid(nr, nc, fn) {
    const base = this.P.length / 3;
    for (let i = 0; i < nr; i++) for (let j = 0; j < nc; j++) {
      const v = fn(i, j);
      this.P.push(v[0], v[1], v[2]); this.N.push(v[3], v[4], v[5]); this.SU.push(v[6], v[7]);
      this.ZW.push(v[8], v[9], v[10], v[11]); this.RK.push(v[12], v[13]); this.RV.push(v[14] || 0); this.ZS.push(v[15] || 0);
    }
    for (let i = 0; i < nr - 1; i++) for (let j = 0; j < nc - 1; j++) {
      const a = base + i * nc + j, b = a + 1, c = a + nc, d = c + 1;
      this.I.push(a, b, c, b, d, c);
    }
  }
  /** like grid(), but normals come from the grid's own neighbours (one height sample per vertex instead of five).
   *  gl / gr extra "ghost" columns on either side are evaluated only for the normals, so pieces join without creases. */
  gridN(nr, nc, fn, gl = 0, gr = 0) {
    const NC = nc + gl + gr, V = new Array(nr * NC);
    for (let i = 0; i < nr; i++) for (let j = 0; j < NC; j++) V[i * NC + j] = fn(i, j - gl);
    const at = (i, j) => V[Math.min(nr - 1, Math.max(0, i)) * NC + Math.min(NC - 1, Math.max(0, j))];
    for (let i = 0; i < nr; i++) for (let j = gl; j < gl + nc; j++) {
      const a = at(i, j - 1), b = at(i, j + 1), c = at(i - 1, j), d = at(i + 1, j), v = V[i * NC + j];
      const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = d[0] - c[0], vy = d[1] - c[1], vz = d[2] - c[2];
      let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
      if (ny < 0) { nx = -nx; ny = -ny; nz = -nz; }
      const l = Math.hypot(nx, ny, nz) || 1; v[3] = nx / l; v[4] = ny / l; v[5] = nz / l;
    }
    this.grid(nr, nc, (i, j) => V[i * NC + j + gl]);
  }
  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.P, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.N, 3));
    g.setAttribute('su', new THREE.Float32BufferAttribute(this.SU, 2));
    g.setAttribute('zw', new THREE.Float32BufferAttribute(this.ZW, 4));
    g.setAttribute('rk', new THREE.Float32BufferAttribute(this.RK, 2));
    g.setAttribute('rv', new THREE.Float32BufferAttribute(this.RV, 1));
    g.setAttribute('zs', new THREE.Float32BufferAttribute(this.ZS, 1)); // snow-country weight (the 6th zone)
    g.setIndex(this.I); g.computeBoundingSphere();
    return g;
  }
}

export class World {
  constructor(scene, path, M, riverMat) {
    this.path = path; this.M = M; this.riverMat = riverMat; this.heapCache = new Map(); // (M.shore, M.surf: the coast's water along its wall, and its surf)
    this.group = new THREE.Group(); scene.add(this.group);
    this.chunks = new Map(); this.origin = { x: 0, z: 0 }; this.reveal = [];
    this.ahead = 760; this.behind = 40; this.trReady = true; this.eminWait = false; // (eminWait: step 35R-galata-2, main.js galLazy)
    this.pxHook = null; this.plateVer = 0; this.pxRing = new Float64Array(32); // (step 35P: the plates' hook for a chunk's proxy meshes as it is built (plates.js), a count of the chunks with them revealed, and the last 16 of them: [version, s0])
    this.fishVer = 0; // (step 35a: counts the chunks with painted fishermen (step 35f: or people) coming and going: fishers.js gathers them anew)
    this._dolC = null; this._dolF = ch => { // (step 35b: a chunk's dolmuş, its near mesh within DOL_NEAR of the camera, else its far one)
      const m = ch.dol; if (!m) return;
      const L = m.userData.lod, dx = ch.group.position.x + L.x - this._dolC.x, dz = ch.group.position.z + L.z - this._dolC.z;
      if (dx * dx + dz * dz < DOL_NEAR * DOL_NEAR) m.geometry.setDrawRange(L.i0, L.n0); else m.geometry.setDrawRange(L.i0 + L.n0, L.n1);
    };
  }
  /** (step 35b) each frame: the dolmuş's mesh by the camera's distance (cam: its position in the scene) */
  dolLod(cam) { this._dolC = cam; this.chunks.forEach(this._dolF); }
  setOrigin(x, z) {
    this.origin.x = x; this.origin.z = z;
    for (const ch of this.chunks.values()) ch.group.position.set(ch.ox - x, 0, ch.oz - z);
  }
  /** keep chunks around s; builds nearest-first, spread over frames within the time budget. Returns 1 while busy. */
  update(s, budgetMs) {
    const c0 = Math.floor((s - this.behind) / CH), c1 = Math.floor((s + this.ahead) / CH);
    for (const [k, ch] of this.chunks) if (k < c0 - 1 || k > c1 + 1) { this.dispose(ch); this.chunks.delete(k); }
    if (this.job && (this.job.c < c0 - 1 || this.job.c > c1 + 1)) this.job = null;
    { const ch = this.reveal[0]; if (ch) { const m = ch.pending.shift(); if (m) ch.group.add(m); if (!ch.pending.length) { this.reveal.shift(); if (ch.px) this.pxIn(ch); } } }
    const t0 = performance.now();
    for (;;) {
      if (!this.job) {
        let next = -1;
        for (let c = Math.max(0, c0); c <= c1; c++) if (!this.chunks.has(c)) { next = c; break; }
        if (next < 0) return 0;
        if (!this.trReady && this.needsTR(next)) return 1; // (Turkey's assets and programs aren't in yet: main.js trLazy)
        if (this.eminWait && this.needsEmin(next)) return 1; // (step 35R-galata-2: Eminönü's square's paintings aren't in yet: main.js galLazy)
        if (next * CH - s < 320) budgetMs = Math.max(budgetMs, 12); // falling behind: catch up
        this.job = { c: next, it: this.gen(next) };
      }
      const res = this.job.it.next();
      if (res.done) { // stage the meshes: they are revealed one per frame so their GPU uploads don't all land at once
        const ch = res.value; ch.pending = ch.group.children.slice(); ch.group.clear();
        if (ch.px && this.pxHook) this.pxHook(ch); // (step 35P: its proxy as the plates have it now)
        this.chunks.set(this.job.c, ch); this.group.add(ch.group); this.reveal.push(ch); this.job = null; if (ch.fishers || ch.people) this.fishVer++;
      }
      if (performance.now() - t0 > budgetMs) return 1;
    }
  }
  /** (step 35R-galata-2) whether chunk c holds Eminönü's square (the real Galata zone's l 1090 … 1470: its pavilion, kiosk, wall, shelters) */
  needsEmin(c) { for (let s = c * CH; s <= c * CH + CH; s += CH) { const l = galL(s); if (l >= 1090 && l <= 1470) return true; } return false; }
  /** whether chunk c holds any of Turkey (or of a border tunnel's surroundings: their ground variants are Turkey's programs) */
  needsTR(c) {
    for (const s of [c * CH, c * CH + CH]) { if (regionWeight(s, 'tr') > 0) return true; const b = borderNear(s); if (b && Math.abs(s - b.s) < 2 * T_RIDGE + 2 * CH) return true; }
    return false;
  }
  dispose(ch) {
    this.group.remove(ch.group); ch.group.traverse(o => { if (o.geometry) o.geometry.dispose(); });
    if (ch.pending) { for (const m of ch.pending) m.geometry && m.geometry.dispose(); ch.pending.length = 0; }
    const i = this.reveal.indexOf(ch); if (i >= 0) this.reveal.splice(i, 1);
    if (ch.fishers || ch.people) this.fishVer++;
  }
  /** Small details — signal lamps, road paint, lamp heads, light pools — are hidden in chunks more than `far` metres
   *  ahead (tree leaf cards beyond `farLeaf`), where they'd be a pixel or less and mostly fogged anyway. Each is a draw
   *  call, and draw calls are most of the main thread's work on phones. Lamp heads and light pools stay at night. */
  lod(s, far, night, farLeaf = Infinity) {
    this.chunks.forEach((ch, c) => { // (forEach + index loop: no per-frame garbage)
      const d = c * CH - s, kids = ch.group.children;
      for (let i = 0; i < kids.length; i++) {
        const m = kids[i], k = m.userData.detail;
        if (k) m.visible = k === 'leaf' ? d < farLeaf : d < far || (night && k === 'light');
      }
    });
  }
  /** reveal everything staged right away (used while the title screen is up) */
  flush() { for (const ch of this.reveal) { for (const m of ch.pending) ch.group.add(m); ch.pending.length = 0; if (ch.px) this.pxIn(ch); } this.reveal.length = 0; }
  /** (step 35P) a chunk with Galata's proxy revealed: its version and its place, for the plates' depth maps (plates.js) */
  pxIn(ch) { this.plateVer++; const k = (this.plateVer % 16) * 2; this.pxRing[k] = this.plateVer; this.pxRing[k + 1] = ch.s0; }
  /** whether a chunk with proxy revealed after version v lies within [s0, s1] (the last 16 such chunks; older: assumed so) */
  pxSince(v, s0, s1) { if (this.plateVer - v > 15) return true; for (let k = 0; k < 32; k += 2) if (this.pxRing[k] > v && this.pxRing[k + 1] >= s0 - CH && this.pxRing[k + 1] <= s1) return true; return false; }

  *gen(c) {
    const path = this.path, s0 = c * CH, s1 = s0 + CH;
    const O = path.at(s0), ox = O.x, oz = O.z;
    const r = rng(Math.floor(hash2(c, 777) * 4294967295));
    const G = { atlas: new GB({ uv: true, ao: true, lit: true }), color: new GB({ ao: true }), foliage: new GB(), leaf: new GB({ uv: true }), lamp: new GB({ color: false }), sig: new GB({ color: false }), sodium: new GB({ color: false }), decal: new GB({ uv: true }), pool: new GB({ uv: true, color: false }),
      gleaf: new GB({ uv: true, off: true }), gblossom: new GB({ uv: true, off: true }), // (the broadleaf and cherry crowns' painted clusters, camera-facing)
      bank: new GB({ uv: true }), // (the country's verge banks, in their own tint by the hour: M.bank, step 28)
      tetra: new GB({ uv: true, ao: true, idx: true }), // (the coast's tetrapods, in their own soft concrete; indexed)
      bark: new GB({ uv: true, ao: true, idx: true }), // (the painted trees' trunks and limbs: smooth tubes in their own soft bark)
      tuff: new GB({ uv: true, idx: true }), // (Cappadocia's fairy chimneys, W5: smooth lathes in their own soft tuff)
      cap: new GB({ uv: true, ao: true, lit: true }), // (…and its own atlas's cells: the caves, the dry grass, the bare crowns, its sign)
      pgrass: new GB({ uv: true, ao: true }), // (Paşabağ's tall grass, W6, in a texture and a material of its own)
      chain: new GB({ uv: true, ao: true, lit: true }), // (the chain stores' bays and signs, step 32: their own atlas, the atlas's program)
      galf: new GB({ uv: true, ao: true, lit: true }), // (step 35R-galata-2: Galata's own painted fronts, their own texture pair, the atlas's program)
      emin: new GB({ uv: true, ao: true, lit: true }), // (step 35R-galata-2c: Eminönü's square's paintings, their own sheet: eminonu.js)
      fish: new GB({ ao: true, idx: true }), // (the Galata Bridge's fishermen, step 33: smooth figures, indexed, in the props' colour material)
      furn: new GB({ uv: true, ao: true, lit: true, idx: true }), // (step 35g: the street furniture's painted models, indexed, their own atlas, the atlas's program)
      boat: new GB({ uv: true, ao: true, lit: true, idx: true }) }; // (step 35h: the boats' painted models, indexed, their region's sheet, the atlas's program)
    G.chainList = []; // (…and where they stand: { s, side, c, n }, for the tools: __dbg.world's chunks' .chains)
    G.furnLamp = G.furnPool = 0; // (step 35g: the vertices the painted bus stop added to the chunk's lamps and pools)
    G.furnList = []; // (step 35g: the painted furniture, 4 numbers each: its kind (0 a vending machine, 1 a bicycle, 2 a simit cart, 3 a tea table, 4 a bus stop), where (chunk-local x, y, z), for the tools)
    G.fishers = []; // (step 35a: the painted fishermen, 8 numbers each: his feet (chunk-local), his facing (x, z), his scale, the sheet, the pose: fishers.js)
    G.people = []; // (step 35f: painted people, 8 numbers each: feet (chunk-local), facing (x, z), scale, sheet, cast (0 Paşabağ's tourists, 1 Istanbul's): fishers.js)
    G.spots = []; // (step 35f: …and what they keep clear of: the squares' trees, [s, u, r] each)
    // (step 35P) Galata's buildings under the painted plates: with the plates' index in, a Galata chunk builds its buildings into GBs of their
    // own (the same look and materials as before: the plates' fallback and their painter's layout), each its own mesh the plates paint or hide
    // (plates.js MODE_PX): w the walls, roofs and cornices, wi the domes and Yeni Cami's smooth parts, a the windows' atlas cells, g the fronts'
    // storeys, gs their shops (the rooms behind the glass stay), e Eminönü's pavilion; and the layout's extras, shown only under the plates: x
    // the shops' awnings, plants and signs, xg the storeys on the side and back walls
    G.prx = null; G.galfS = null;
    if (PLATES.on && (zoneW(s0).galata >= 0.25 || zoneW(s1).galata >= 0.25)) G.prx = { w: new GB({ ao: true }), wi: new GB({ ao: true, idx: true }), a: new GB({ uv: true, ao: true, lit: true }),
      g: new GB({ uv: true, ao: true, lit: true }), gs: new GB({ uv: true, ao: true, lit: true }), e: new GB({ uv: true, ao: true, lit: true }), x: new GB({ ao: true }), xg: new GB({ uv: true, ao: true, lit: true }), sg: new GB({ ao: true }) };
    const ground = new GroundB(), shore = { rows: [], puffs: [] }, river = [];
    G.lamps = []; // lights that can light the car: chunk-local x, y, z, power … (props.js lampAt)
    const f = {}, f2 = {};

    // ---------- helpers ----------
    const H = (s, u) => { path.at(s, f2); const rw = zparam(s, 'rw'); return f2.y + groundOffsetMix(s, u, f2.y, rw); };
    // (the Galata Bridge in the avenue's channel: materials.js Z_GAL; the Turkish town in the country's, W4: Z_TOWN. Over the
    // bridge's hand-over to the town the ground changes over at the landing itself, not over the blend: path.js townLanding)
    // (and Cappadocia, W5, in the avenue's: they never meet either; Paşabağ, W6, there too, its own share in the snow's slot as well:
    // the ground shader's Z_UCH tells its land from Uçhisar's by it)
    const zw4 = s => { const w = zoneW(s), tl = w.town > 0 && w.galata > 0 ? townLanding(s) : null; if (tl) { const g = s < tl.s ? 1 : 0; w.galata = g; w.town = 1 - g; }
      return [w.city, w.sakura + w.galata + w.uchisar + w.pasabag, wSea(w), w.country + w.town, w.snow + w.pasabag]; };
    const world = (s, u, y) => { path.at(s, f); return [f.x + f.rx * u - ox, y, f.z + f.rz * u - oz]; };
    const matAt = (s, u, y, extraYaw = 0, faceRoad = true) => {
      path.at(s, f);
      const yaw = f.h - Math.PI / 2 + (faceRoad && u < 0 ? Math.PI : 0) + extraYaw;
      const m = new THREE.Matrix4().makeRotationY(yaw); m.setPosition(f.x + f.rx * u - ox, y, f.z + f.rz * u - oz);
      m.groundY = y; return m; // a prop's base is on the ground (contact AO in geom.js); onGround / snow poles say otherwise
    };
    const onGround = (s, u, dy = 0, extraYaw = 0, faceRoad = true) => { const h = H(s, u), m = matAt(s, u, h + dy, extraYaw, faceRoad); m.groundY = h; return m; };
    const road = s => path.at(s, f2).y;
    const rwAt = s => zparam(s, 'rw');
    const walkW = s => { const w = zoneW(s); return w.town >= 0.5 && !nearB(s, T_HALF + 2) ? TOWN_SW : w.city + w.sakura > 0.5 && !nearB(s, T_HALF + 2) ? (w.city >= w.sakura ? 3.0 : 2.6) : 0; };

    // ---------- terrain ----------
    {
      const rr = riverNear(s0 + CH / 2), fine = !!rr && rr.s > s0 - 40 && rr.s < s1 + 40;
      const rows = fine ? 61 : 21, rwMid = rwAt(s0 + CH / 2);
      // (the real Galata zone, step 35R: on its bridge a column at each edge of the deck (the west walkway's on the right, the east
      // one's on the left) and its face 0.4 m out; a chunk all on the bridge has only its deck and its faces down to the water (the open
      // sea draws the rest); its land (Karaköy, Eminönü) the denser columns of Cappadocia's for its quays' faces)
      const gal = Math.max(zoneW(s0).galata, zoneW(s1).galata) > 0, deck = gal && galBridge(galL(s0)) && galBridge(galL(s1));
      const uch = Math.max(zoneW(s0).uchisar + zoneW(s0).pasabag, zoneW(s1).uchisar + zoneW(s1).pasabag) > 0 && !nearB(s0 + CH / 2, 2 * T_RIDGE + CH); // (Cappadocia's, W5, W6)
      const far = uch ? UCH_FAR : FAR;
      const cols = (() => { const right = [0, ...NEAR]; const out = right.map(n => n); far.forEach(v => out.push(v - rwMid)); return out; })();
      // columns: −far … −rw | rw … far, expressed as offsets from the road edge (on the Galata Bridge: its own, either side)
      let offs, half;
      if (gal) {
        const uq = a => [...new Set(a.map(v => Math.round(v * 100) / 100))].filter(v => v >= 0).sort((p, q) => p - q), rest = UCH_FAR.map(v => v - rwMid), eL = GAL_L - rwMid;
        const R = uq([0, ...NEAR, GAL_WALK, GAL_WALK + 0.4, ...(deck ? [] : rest.filter(v => v > GAL_WALK + 0.9))]);
        const L = uq([0, ...NEAR, 6, 9, 12, 15, 18, eL, eL + 0.4, ...(deck ? [] : rest.filter(v => v > eL + 0.9))]);
        offs = [...L.slice().reverse().map(v => -v), ...R]; half = L.length;
      } else { offs = [...cols.slice().reverse().map(v => -v), ...cols]; half = offs.length / 2; }
      const nc = offs.length;
      // two halves (left / right of the road) so neither build step is long; normals from grid neighbours
      // rows: uniform, plus a pair right at each tunnel portal so the ground steps up exactly behind the portal face
      const sl = Array.from({ length: rows }, (_, i) => s0 + (i / (rows - 1)) * CH);
      { const tq = tunnelNear(s0 + CH / 2); if (tq) for (const sp of [tq.s - T_HALF, tq.s + T_HALF]) if (sp > s0 + 0.1 && sp < s1 - 0.1) sl.push(sp - 0.03, sp + 0.03); }
      // (and either side of the Galata Bridge's ends, step 35R: its deck's faces stand there)
      if (gal) { const zs = s0 - galL(s0); for (const b of GAL_BR) { const sb = zs + b; if (sb > s0 + 0.1 && sb < s1 - 0.1) sl.push(sb - 0.03, sb + 0.03); } }
      sl.sort((p, q) => p - q);
      // (the bay's end, step 27: its headland's land in the coast's own ground, its land on the sea side (materials.js coastGround),
      // not the blend's sand under the water and the next zone's fields: wn, HEADW)
      const rowS = sl.map(s => { path.at(s, f); return { s, f: { ...f }, rw: rwAt(s), w: zw4(s), rb: fine ? riverBank(s) : 0, wn: bayQ(s) < 0 ? zw4(Math.floor(s / ZONE_LEN) * ZONE_LEN + ZONE_LEN + 1) : null }; });
      const qtr = Math.round(half / 2), qtrR = Math.round((nc - half) / 2); // (half: the left side's columns)
      // quarters, so no single build step is long; they share a column and use ghost columns for seamless normals
      for (const [j0, j1, gl, gr] of [[0, qtr, 0, 1], [qtr - 1, half, 1, 0], [half, half + qtrR + 1, 0, 1], [half + qtrR, nc, 1, 0]]) {
        ground.gridN(rowS.length, j1 - j0, (i, jj) => {
          // (on the coast the ground's edge tucks 15 cm under the road's: the low road leaves the bright sea plane just
          // below the 6 cm step between them, and from the side it showed through that slit as a blue line)
          const R = rowS[i], F = R.f, j = j0 + jj, o = offs[j], tk = o === 0 && R.w[2] > 0 ? 0.15 : 0;
          const u = o < 0 || (o === 0 && j < half) ? o - R.rw + tk : o + R.rw - tk;
          // the ridge look (slope-protection grid) belongs on the cutting face only — it starts 1 m beyond the road edge — at full
          // weight once the face stands 0.5 m proud of the natural ground. (It used to be RAISE / 1.5 everywhere: the bottom ~2 m
          // of every face blended into the beach sand / verge — a white fog smear on the coast's sea side — and the flat verge
          // took a third of the grid colour)
          // (rv: the river bank's weight, or the ridge's as a negative; else Cappadocia's tuff, W5: path.js TUFF, 0 everywhere else)
          const y = F.y + groundOffsetMix(R.s, u, F.y, R.rw), rg = Math.abs(u) > R.rw + 0.98 ? Math.min(1, RAISE / 0.5) : 0;
          const w = R.wn && u < -(R.rw + 2.0) && y > 0.35 ? HEADW : R.w;
          return [F.x + F.rx * u - ox, y, F.z + F.rz * u - oz, 0, 1, 0, mod(R.s, S_WRAP), u, w[0], w[1], w[2], w[3], R.rw, 0, R.rb > 0 ? R.rb : rg > 0 ? -rg : TUFF, w[4]];
        }, gl, gr);
        yield;
      }
    }
    yield;
    // ---------- road ----------
    {
      const rows = 31;
      ground.grid(rows, 2, (i, j) => {
        const s = s0 + (i / (rows - 1)) * CH, rw = rwAt(s), u = j ? rw : -rw;
        path.at(s, f); const e = f.y, de = (road(s + 1) - road(s - 1)) / 2;
        let nx = -de * f.fx, ny = 1, nz = -de * f.fz; const nl = Math.hypot(nx, ny, nz);
        const w = zw4(s);
        return [f.x + f.rx * u - ox, e, f.z + f.rz * u - oz, nx / nl, ny / nl, nz / nl, mod(s, S_WRAP), u, w[0], w[1], w[2], w[3], rw, 1, 0, w[4]];
      });
    }
    // ---------- sidewalks + curbs (only where the zone has them) ----------
    // (rows every 2 m; and at the Galata Bridge's landing, where the town's pavements begin, W4, and at the corners of the town's
    // lay-bys, where the right-hand pavement steps back: its kerb at rw + bay(s), the asphalt carried on out to it)
    {
      const rows = [], ss = [];
      for (let i = 0; i <= 30; i++) ss.push(s0 + (i / 30) * CH);
      { const tl = townLanding(s0 + CH / 2); if (tl && tl.s > s0 + 0.05 && tl.s < s1 - 0.05) ss.push(tl.s); }
      for (const q of this.townBayAt(s0, s1)) for (const sq of [q - 3, q, q + TW_BAY_L, q + TW_BAY_L + 3]) if (sq > s0 + 0.05 && sq < s1 - 0.05) ss.push(sq);
      ss.sort((p, q) => p - q);
      for (const s of ss) rows.push({ s, sw: walkW(s), bay: this.townBay(s) });
      const runs = []; let cur = null;
      for (const rw of rows) { if (rw.sw > 0) { if (!cur) { cur = []; runs.push(cur); } cur.push(rw); } else cur = null; }
      for (const run of runs) {
        if (run.length < 2) continue;
        for (const side of [-1, 1]) {
          const ib = i => (side > 0 ? run[i].bay : 0);
          ground.grid(run.length, 2, (i, j) => {
            const { s, sw } = run[i], rw = rwAt(s), u = side * (j === (side > 0 ? 0 : 1) ? rw + ib(i) : rw + sw);
            path.at(s, f); const w = zw4(s);
            return [f.x + f.rx * u - ox, f.y + 0.15, f.z + f.rz * u - oz, 0, 1, 0, mod(s, S_WRAP), u, w[0], w[1], w[2], w[3], rw, 2, 0, w[4]];
          });
          ground.grid(run.length, 2, (i, j) => {
            const { s } = run[i], rw = rwAt(s), u = side * (rw + ib(i)), top = side > 0 ? j : 1 - j;
            path.at(s, f); const w = zw4(s);
            return [f.x + f.rx * u - ox, f.y + (top ? 0.15 : 0), f.z + f.rz * u - oz, -side * f.rx, 0, -side * f.rz, mod(s, S_WRAP), u, w[0], w[1], w[2], w[3], rw, 3, 0, w[4]];
          });
          if (side > 0 && run.some(q => q.bay > 0)) ground.grid(run.length, 2, (i, j) => { // (the lay-by's asphalt, out to its kerb)
            const { s } = run[i], rw = rwAt(s), u = j ? rw + ib(i) : rw - 0.02;
            path.at(s, f); const w = zw4(s);
            return [f.x + f.rx * u - ox, f.y + 0.002, f.z + f.rz * u - oz, 0, 1, 0, mod(s, S_WRAP), u, w[0], w[1], w[2], w[3], rw, 1, 0, w[4]];
          });
        }
      }
    }

    // ---------- the real Galata zone's surfaces beside the road (step 35R) ----------
    // keeping right, as the real ones are (galata.js galSect, by where on the road): our right-hand pavement (on the bridge its west
    // walkway out to the deck's edge, the fishermen along its railing); on our left the median under Kemeraltı's iron fence (the
    // bridge's strip of slabs by the tram line's fence; Karaköy's square and its tram stop's island where the tracks swing out),
    // the T1's reserve (its rails let into its slabs: materials.js kind 11), a kerb, the northbound carriageway (its own lanes: the
    // road's paint about its own middle) and the far pavement (the bridge's east walkway). Tops, kerbs and outer faces, each facing
    // out of its slabs. Where the zone is (galOn)
    {
      const runs = []; let cur = null; const ss = [];
      for (let i = 0; i <= 30; i++) ss.push(s0 + (i / 30) * CH);
      { const zs = s0 - galL(s0); for (const b of GAL_BR) { const sb = zs + b; if (sb > s0 + 0.05 && sb < s1 - 0.05) ss.push(sb - 0.02, sb + 0.02); } ss.sort((p, q) => p - q); } // (rows either side of the bridge's ends)
      for (const s of ss) { if (this.galOn(s)) { if (!cur) { cur = []; runs.push(cur); } cur.push(s); } else cur = null; }
      const v = (s, u, y, nx, nz, kind, uS, rwS) => { path.at(s, f); const w = zw4(s); return [f.x + f.rx * u - ox, f.y + y, f.z + f.rz * u - oz, nx, nx === 0 && nz === 0 ? 1 : 0, nz, mod(s, S_WRAP), uS, w[0], w[1], w[2], w[3], rwS, kind, 0, w[4]]; };
      for (const run of runs) {
        if (run.length < 2) continue;
        const n = run.length, X = run.map(s => { const rw = rwAt(s); return { s, rw, g: galSect(galL(s), rw, {}) }; });
        // a top from u = a(row) to b(row) (a < b: facing up) at height y(row); its paint's own u and rw about cU(row), rS(row)
        const top = (a, b, y, kind, cU, rS) => ground.grid(n, 2, (i, j) => { const R = X[i], u = j ? b(R) : a(R); return v(R.s, u, y(R), 0, 0, kind, u - cU(R), rS(R)); });
        // a face at u(row) facing out (+1: towards +u) from y0(row) up to y1(row) (kind 3: the kerbs' stone)
        const face = (uf, out, y0, y1) => ground.grid(n, 2, (i, j) => { const R = X[i], u = uf(R), up = out > 0 ? 1 - j : j; path.at(R.s, f); return v(R.s, u, up ? y1(R) : y0(R), out * f.rx, out * f.rz, 3, u, R.rw); });
        const kh = R => R.g.kh, z0 = () => 0, gnd = () => -0.06, zero = () => 0, rwO = R => R.rw, Y = () => 0.005;
        // our right-hand pavement (the west walkway)
        top(R => R.rw, R => R.rw + R.g.pr, kh, 2, zero, rwO); face(R => R.rw, -1, z0, kh); face(R => R.rw + R.g.pr, 1, gnd, kh);
        // the median (the bridge's strip of slabs; Karaköy's island)
        top(R => R.g.med, R => -R.rw, kh, 2, zero, rwO); face(R => -R.rw, 1, z0, kh); face(R => R.g.med, -1, z0, kh);
        // the T1's reserve, the kerb under the second fence, the northbound carriageway, the far pavement (the east walkway)
        top(R => R.g.t1, R => R.g.t0, Y, 11, R => (R.g.tn + R.g.tf) / 2, R => ((R.g.tn - R.g.tf) / 2) * (R.g.bridge ? 1 : -1)); // (its paint's rw < 0 off the bridge: its setts)
        top(R => R.g.n0, R => R.g.t1, kh, 3, zero, rwO); face(R => R.g.t1, 1, z0, kh); face(R => R.g.n0, -1, z0, kh);
        top(R => R.g.n1, R => R.g.n0, Y, 1, R => (R.g.n0 + R.g.n1) / 2, R => (R.g.n0 - R.g.n1) / 2);
        top(R => R.g.p1, R => R.g.n1, kh, 2, zero, R => -R.g.n1); face(R => R.g.n1, 1, z0, kh); face(R => R.g.p1, -1, gnd, kh);
      }
    }
    yield;
    // ---------- scenery ----------
    yield* this.placePoles(c, s0, s1, r, G, matAt, H, world, road, rwAt);
    {
      const kx = Math.ceil((s0 - XOFF) / XING), sx = crossingS(kx);
      if (sx < s1 && crossingValid(sx)) yield* this.placeCrossing(G, ground, sx, matAt, road, rwAt, H, walkW, ox, oz);
      const kr = Math.ceil((s0 - ROFF) / RIV), sr = riverS(kr);
      if (sr < s1 && riverValid(sr)) yield* this.placeRiver(G, ground, sr, matAt, road, rwAt, H, walkW, ox, oz, r, river);
      const tt = tunnelNear(s0 + CH / 2);
      if (tt && tt.s + T_RIDGE > s0 && tt.s - T_RIDGE < s1) yield* this.placeTunnel(G, ground, tt, s0, s1, matAt, onGround, H, rwAt, ox, oz, r);
    }
    yield;
    for (let s = s0; s < s1; s += 4) {
      const z = zoneAt(s);
      // (and at the bay's end until its headland stands by the road, step 27: the sea runs on beside the road there)
      const bq = bayQ(s + 2);
      if (((z === 'coast' && zoneW(s).coast > 0.45) || bq < HL.q0 + 22 || (z === 'mountain' && zoneW(s).mountain > 0.45)) && !nearT(s + 2, T_RIDGE + 4)) this.guardrail(G, s, Math.min(s + 4, s1), world, road, rwAt);
    }
    yield* this.placeCity(G, r, s0, s1, matAt, onGround, road, rwAt, walkW, H, ground, ox, oz);
    yield* this.placeSakura(G, r, s0, s1, matAt, onGround, road, rwAt, H);
    yield* this.placeCoast(G, r, c, s0, s1, matAt, onGround, rwAt, shore, world);
    yield* this.placeBosphorus(G, c, s0, s1, matAt, onGround, road, rwAt, world, ox, oz);
    yield* this.placeGalata(G, c, s0, s1, matAt, road, rwAt, world);
    yield* this.placeGalBlocks(G, s0, s1, road, ox, oz);
    yield* this.placeGalSquares(G, c, s0, s1, matAt, road, rwAt);
    yield* this.placeGalQuay(G, s0, s1, matAt, road, ox, oz);
    yield* placeEminonu(this, G, s0, s1, road, rwAt, ox, oz, this.path); // (step 35R-galata-2c)
    this.placeGalPeople(G, s0, s1, road, rwAt, H, ox, oz); // (step 35f: Istanbul's people)
    yield;
    yield* this.placeTown(G, c, s0, s1, matAt, road, rwAt);
    yield* this.placeUchisar(G, c, s0, s1, matAt, onGround, road, rwAt, H, ox, oz);
    yield* this.placePasabag(G, c, s0, s1, matAt, onGround, road, rwAt, H, ox, oz);
    yield* this.placeCountry(G, r, s0, s1, matAt, onGround, road, rwAt, H);
    yield* this.placeMountain(G, r, s0, s1, matAt, onGround, road, rwAt, H);
    yield* this.placeSnow(G, r, s0, s1, matAt, onGround, road, rwAt, H);
    yield* this.placeVerge(G, r, s0, s1, matAt, H, rwAt, c, ox, oz);
    yield;

    // ---------- assemble ----------
    const grp = new THREE.Group();
    const add = (geo, mat, cast, recv, order = 0, detail) => { if (!geo) return null; const m = new THREE.Mesh(geo, mat); m.castShadow = cast; m.receiveShadow = recv; m.renderOrder = order; if (detail) m.userData.detail = detail; grp.add(m); return m; };
    const zset = new Set();
    for (const sq of [s0, s0 + 20, s0 + 40, s1]) { const m = zoneMix(sq); zset.add(m.a); if (m.t > 0) zset.add(m.b); }
    { const b = borderNear(s0 + CH / 2); if (b && b.s + 2 * T_RIDGE + CH > s0 && b.s - 2 * T_RIDGE - CH < s1) { zset.clear(); zset.add(b.a); zset.add(b.b); zset.add('border'); } }
    { const gm = add(ground.build(), groundMaterialFor([...zset]), false, true); if (gm) gm.userData.ground = true; } yield; // (step 35P: the ground, for the plates' layout)
    // (step 35P) Galata's proxy (G.prx: placeGalBlocks, placeEminonu): each GB its mesh in its built look (that look is the plates' fallback and
    // their painter's layout; plates.js swaps their materials), the extras hidden until the plates paint; the painted kinds on the plates' layer
    let pxList = null;
    if (G.prx) {
      const X = G.prx, M = this.M; pxList = [];
      const mk = (gb, lm, k, cast, order, dm) => { const m = lm && add(gb.build(), lm, cast, true, order); if (!m) return; m.userData.px = k; m.userData.lm = lm; m.userData.dm = dm || null; if (dm) m.customDepthMaterial = dm;
        if (k === 'w' || k === 'wi' || k === 'e' || k === 'x' || k === 'sg') m.layers.enable(PX_LAYER); if (k === 'x' || k === 'xg') m.visible = false; pxList.push(m); };
      mk(X.w, M.color, 'w', true, 0, PROP_DEPTH); mk(X.wi, M.color, 'wi', true, 0, PROP_DEPTH);
      // (each in the material the chunk's merged mesh would have had: the atlas's variant by all its cells' flags, the fronts' by all their bays')
      { const W = G.atlas.world, R = G.atlas.rooms && (W ? M.atlasWI : M.atlasI); mk(X.a, R || (W ? M.atlasW : M.atlas), 'a', true, 0, W ? M.atlasWDepth : M.atlasDepth); }
      { const gm = ((X.g.rooms || X.gs.rooms) && M.atlasGI) || M.atlasG; mk(X.g, gm, 'g', false, -1); mk(X.gs, gm, 'gs', false, -1); } mk(X.xg, M.atlasG, 'xg', false, -1);
      mk(X.e, M.atlasEm, 'e', true, 0, M.atlasEmDepth); mk(X.x, M.color, 'x', true, 0, PROP_DEPTH); mk(X.sg, M.color, 'sg', true, 0, PROP_DEPTH); // (the shelters' glass: as built, in the plates' depth)
      if (!pxList.length) pxList = null;
      yield;
    }
    { const W = G.atlas.world, R = G.atlas.rooms && (W ? this.M.atlasWI : this.M.atlasI), m = add(G.atlas.build(), R || (W ? this.M.atlasW : this.M.atlas), true, true); if (m) m.customDepthMaterial = W ? this.M.atlasWDepth : this.M.atlasDepth; } yield; // (the painted cells' outlines in the shadow pass too; the world atlas's cells in its variant; painted shop bays in the rooms' variant, step 31; the Turkish town's shop bays in the world variant's, step 34)
    if (G.fishers.length) G.color.expandFrom(G.fish); // (step 35a: the painted fishermen's rods, lines and buckets drawn with the props, a draw less a chunk)
    { const m = add(G.color.build(), this.M.color, true, true); if (m) m.customDepthMaterial = PROP_DEPTH; } yield; // (wires cast no shadow)
    if (!G.fishers.length) { const m = add(G.fish.build(), this.M.color, true, true); if (m) m.customDepthMaterial = PROP_DEPTH; } // (the fishermen, step 33: only on the Galata Bridge; their rods and lines cast no shadow)
    let dol = null; // (step 35b: the dolmuş's painted model, its own texture pair; its draw range set each frame by World.dolLod)
    if (G.dolList && this.M.atlasDol) { const g = P.dolmusGB(G); dol = g && add(g.build(), this.M.atlasDol, true, true); if (dol) { dol.customDepthMaterial = this.M.atlasDolDepth; dol.userData.lod = g.lod; dol.geometry.setDrawRange(0, g.lod.n0); } }
    // (step 35R-galata-2: Galata's painted fronts, flush on their walls: the walls cast the shadows; their shops' rooms behind the glass. Drawn
    // before the rest (three sorts opaque draws by their material before their depth, and the walls' came first: each front's pixels were
    // shaded twice, the wall's and then the painting's, +1.0 ms on a phone along Kemeraltı); now the walls behind them fail the depth test)
    if (G.galf.count && this.M.atlasG) add(G.galf.build(), (G.galf.rooms && this.M.atlasGI) || this.M.atlasG, false, true, -1);
    if (G.emin.count && this.M.atlasEm) { const m = add(G.emin.build(), this.M.atlasEm, true, true); if (m) m.customDepthMaterial = this.M.atlasEmDepth; } // (step 35R-galata-2c)
    if (G.galf.count || G.emin.count) yield; // (step 35R-galata-2: Galata's chunks build two meshes more: a step of their own, on a slow phone)
    if (G.chain.count) { const T = G.chain.tr, m = add(G.chain.build(), T ? this.M.atlasCTI || this.M.atlasCT : this.M.atlasCI || this.M.atlasC, true, true); if (m) m.customDepthMaterial = T ? this.M.atlasCTDepth : this.M.atlasCDepth; } // (the chain stores, step 32: Japan's or Turkey's chain atlas; most chunks have none, and no mesh. Step 34: with the rooms behind their glass)
    if (G.furn.count && this.M.atlasF) quietly(() => { const m = add(G.furn.build(), this.M.atlasF, true, true, 0, 'small'); if (m) m.customDepthMaterial = this.M.atlasFDepth; }); // (step 35g: the street furniture: its own atlas, the atlas's program; most chunks have none, and no mesh. Shown as far as the small things, World.lod: past ~380 m a machine is ~4 px)
    if (G.boat.count) { const T = G.boat.tr, mat = T ? this.M.atlasBT : this.M.atlasBJ; // (step 35h: the boats: their region's sheet, the atlas's program; ids from the private generator. Not 'small': the bay's boats stand 45–220 m off and must not pop in)
      if (mat) quietly(() => { const m = add(G.boat.build(), mat, true, true); if (m) m.customDepthMaterial = T ? this.M.atlasBTDepth : this.M.atlasBJDepth; }); }
    add(G.tetra.build(), this.M.tetra, true, true); // (the tetrapods: their shadows from the plain depth material)
    add(G.bark.build(), this.M.bark, true, true, 0, 'leaf'); yield; // (the trees' bark: shown as far as their crowns; plain depth material too)
    if (this.M.tuff) add(G.tuff.build(), this.M.tuff, true, true); // (Cappadocia's fairy chimneys, W5: plain depth material)
    if (this.M.capAtlas) add(G.cap.build(), this.M.capAtlas, false, true); // (…and its atlas's cards: casting no shadow)
    if (this.M.pasGrass) add(G.pgrass.build(), this.M.pasGrass, false, true); // (…and Paşabağ's tall grass, W6: casting no shadow)
    add(G.foliage.build(), this.M.foliage, true, true);
    add(G.leaf.build(), this.M.leaf, true, true, 0, 'leaf');
    add(G.bank.build(), this.M.bank || this.M.leaf, true, true, 0, 'leaf');
    if (this.M.gleaf) { const m = add(G.gleaf.build(), this.M.gleaf, true, true, 0, 'leaf'); if (m) m.customDepthMaterial = this.M.gleafDepth; } // (clusters face the sun in the shadow pass)
    // (blossom casts shadows but doesn't receive them: its shaded undersides already face away from the sun, and the
    // received shadows changed its colours by under 1% for ~0.4 ms on desktop)
    if (this.M.gblossom) { const m = add(G.gblossom.build(), this.M.gblossom, true, false, 0, 'leaf'); if (m) m.customDepthMaterial = this.M.gblossomDepth; } // (its own shadow twin: a sparser dapple)
    yield;
    { const f = () => add(G.lamp.build(), this.M.lamp, false, false, 0, 'light'); if (G.lamp.count && G.lamp.count === G.furnLamp) quietly(f); else f(); } // (step 35g: a lamp only the bus stop's: quietly)
    add(G.sig.build(), this.M.sig, false, false, 0, 'small');
    add(G.sodium.build(), this.M.sodium, false, false);
    add(G.decal.build(), this.M.decal, false, true, 1, 'small');
    { const f = () => add(G.pool.build(), this.M.pool, false, false, 2, 'light'); if (G.pool.count && G.pool.count === G.furnPool) quietly(f); else f(); }
    if (shore.rows.length > 1) { // the water along the sea wall: a strip of rows across it (SHORE_D), drawn just before the sea
      const R = shore.rows, nc = SHORE_D.length, n = R.length * nc, pos = new Float32Array(n * 3), su = new Float32Array(n * 2), hf = new Float32Array(n * 2), idx = [];
      R.forEach((row, i) => {
        for (let j = 0; j < nc; j++) { const v = i * nc + j, o = j * 7; pos.set(row.subarray(o, o + 3), v * 3); su[v * 2] = row[o + 3]; su[v * 2 + 1] = row[o + 4]; hf[v * 2] = row[o + 5]; hf[v * 2 + 1] = row[o + 6]; }
        if (i > 0) for (let j = 0; j < nc - 1; j++) { const a = (i - 1) * nc + j, b = a + nc; idx.push(a, b, a + 1, a + 1, b, b + 1); } // (facing up)
      });
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('su', new THREE.BufferAttribute(su, 2)); g.setAttribute('hf', new THREE.BufferAttribute(hf, 2));
      g.setIndex(idx); g.computeBoundingSphere();
      add(g, this.M.shore, false, false, 997); // (opaque, before the sea plane (998): the plane is skipped under it)
    }
    if (shore.puffs.length) add(surfGeometry(shore.puffs), this.M.surf, false, false, 2, 'small'); // (the surf over the tetrapods)
    for (const g of river) add(g, this.riverMat, false, true);
    grp.position.set(ox - this.origin.x, 0, oz - this.origin.z);
    return { group: grp, ox, oz, s0, lamps: new Float32Array(G.lamps), chains: G.chainList.length ? G.chainList : null, fishers: G.fishers.length ? new Float32Array(G.fishers) : null, people: G.people.length ? new Float32Array(G.people) : null, dol, furn: G.furnList.length ? G.furnList : null, px: pxList };
  }

  // poles + overhead wires (country / coast / city share the rule so wires connect across zones)
  poleSpec(k) {
    const s = k * POLE_SP + 6, z = zoneAt(s);
    if (z === 'sakura' || z === 'galata' || z === 'town' || z === 'uchisar' || z === 'pasabag' || nearX(s, 6) || nearR(s, 34) || nearT(s, T_RIDGE + 12)) return null; // (the Galata Bridge: the tram line's portals carry its lamps; the Turkish town's wires are underground, as the concept's; Cappadocia's road has none, as its concept)
    const rw = zparam(s, 'rw');
    const u = z === 'city' ? rw + 0.45 : z === 'coast' ? rw + 1.35 : z === 'bosphorus' ? rw + 1.3 : z === 'mountain' ? -(rw + 1.45) : z === 'snow' ? rw + 2.9 : rw + 2.35;
    return { s, u, z };
  }
  *placePoles(c, s0, s1, r, G, matAt, H, world, road, rwAt) {
    const k0 = Math.ceil((s0 - 6) / POLE_SP), k1 = Math.floor((s1 - 6 - 0.001) / POLE_SP);
    for (let k = k0; k <= k1; k++) {
      const p = this.poleSpec(k); if (!p) continue;
      const y = p.z === 'city' ? road(p.s) + 0.15 : H(p.s, p.u);
      const M = matAt(p.s, p.u, y);
      const pr = rng(Math.floor(hash2(k, 31) * 4294967295));
      const anchors = P.utilityPole(G, M, pr, { trans: pr() < 0.45, tr: REGION[p.z] === 'tr' });
      if (p.z === 'city' && (k % 2 === 0)) P.poleLamp(G, M, -0.11);
      if (k % 2) yield;
      const q = this.poleSpec(k + 1);
      if (q) {
        const qy = q.z === 'city' ? road(q.s) + 0.15 : H(q.s, q.u);
        const B = P.poleAnchors(matAt(q.s, q.u, qy));
        G.color.setM(new THREE.Matrix4());
        const sags = [];
        for (let i = 0; i < anchors.length; i++) {
          const a = anchors[i], b = B[i], sag = 0.35 + pr() * 0.4 + (i >= 7 ? 0.3 : 0);
          sags.push(sag);
          G.color.wire([a.x, a.y, a.z], [b.x, b.y, b.z], sag, i >= 7 ? 0.022 : 0.015, WIRE, 10);
        }
        if (p.z !== 'coast' && pr() < 0.38) { // a few birds resting on a top wire
          const i = Math.floor(pr() * 4), a = anchors[i], b = B[i], n = 1 + Math.floor(pr() * 4), t0 = 0.18 + pr() * 0.5;
          for (let j = 0; j < n; j++) {
            const tt = Math.min(0.92, t0 + j * (0.018 + pr() * 0.025));
            const x = a.x + (b.x - a.x) * tt, z = a.z + (b.z - a.z) * tt, y = a.y + (b.y - a.y) * tt - sags[i] * 4 * tt * (1 - tt);
            G.color.box(x - 0.07, y + 0.015, z - 0.07, x + 0.07, y + 0.19, z + 0.07, BIRD);
            G.color.box(x - 0.045, y + 0.19, z - 0.045, x + 0.045, y + 0.27, z + 0.045, BIRD);
          }
        }
      }
      if (p.z === 'city') {
        // service drops: across the street and to the near side
        G.color.setM(new THREE.Matrix4());
        const n = 1 + Math.floor(pr() * 3);
        for (let i = 0; i < n; i++) {
          const a = anchors[7 + (i % 2)], ds = (pr() - 0.5) * 14, rw = rwAt(p.s + ds);
          const far = pr() < 0.55, u = far ? -(rw + 3.15) : rw + 3.15;
          const b = world(p.s + ds, u, road(p.s + ds) + 5.2 + pr() * 2.5);
          G.color.wire([a.x, a.y, a.z], b, 0.25 + pr() * 0.4, 0.012, WIRE, 8);
        }
      }
    }
  }

  /** a city intersection (bigX): side streets lined with houses and wires, traffic signals, 止まれ markings, now and
   *  then a 歩道橋. Elsewhere a narrow alley (路地) between the shopfronts, with houses and a pole or two down it. */
  *intersection(G, r, sc, k, matAt, road, rwAt, walkW, ground, ox, oz) {
    const f0 = this.path.at(sc, {}), e = road(sc), rw = rwAt(sc), sw = walkW(sc) || 3.0, cs = sc - 0.5, w = zoneW(sc), w4 = [w.city, w.sakura, wSea(w), w.country];
    const xw = (ds, u, y) => [f0.x + f0.fx * (ds - 0.5) + f0.rx * u - ox, y, f0.z + f0.fz * (ds - 0.5) + f0.rz * u - oz];
    const front = rw + sw + 0.15, big = bigX(k), hw = big ? 3.0 : ALLEY;
    for (const side of [-1, 1]) {
      // the side street itself (kind 10: its own asphalt + white edge lines at ±2.62 m, which an alley is too narrow
      // to have), just above the lots (which sit at +0.14)
      const ua = side * (rw + sw), ub = side * 80;
      ground.grid(21, 2, (i, j) => { const u = ua + ((ub - ua) * i) / 20, ds = (j ? -hw : hw) * side, p = xw(ds, u, e + 0.165); return [p[0], p[1], p[2], 0, 1, 0, ds * side, u, w4[0], w4[1], w4[2], w4[3], rw, 10]; });
      // 止まれ painted in the lane that approaches the main road
      if (big) {
        const cu = side * (rw + sw + 3.2), cds = -side * 1.35, hw = 1.15, hh = 0.42;
        const P0 = (rx, uy) => xw(cds + side * rx, cu - side * uy, e + 0.18);
        G.decal.setM(new THREE.Matrix4());
        G.decal.quad(P0(-hw, -hh), P0(hw, -hh), P0(hw, hh), P0(-hw, hh), [1, 1, 1], P.uvOf('tomare'));
      }
      // houses and little shops facing the side street, behind the main-street row
      for (const bank of [-1, 1]) {
        let u = front + 15 + r() * 3;
        while (u < 52) {
          const wd = r.range(5.5, 8.5), uc = side * (u + wd / 2), t = r();
          const M = matAt(cs + bank * (hw + 0.3), uc, e + 0.14, bank > 0 ? Math.PI / 2 : -Math.PI / 2, false);
          P.building(G, M, r, { type: t < 0.5 ? 'house' : 'shop', w: wd, d: r.range(7, 10), floors: t < 0.5 ? 2 : r.int(2, 3), tint: r.pick(P.TINTS), litP: 0.45, fence: 0 });
          u += wd + r.range(0.2, 1.2);
          yield;
        }
        yield;
      }
      // a couple of utility poles with wires running down the side street
      const poles = [30, 54].map(uu => matAt(cs + hw - 0.2, side * uu, e + 0.15, -Math.PI / 2, false));
      const pr = rng(Math.floor(hash2(k, side > 0 ? 71 : 73) * 4294967295));
      const an = poles.map(Mp => P.utilityPole(G, Mp, pr, { trans: pr() < 0.4 }));
      G.color.setM(new THREE.Matrix4());
      for (let i = 0; i < 7; i++) { const a = an[0][i], b = an[1][i]; G.color.wire([a.x, a.y, a.z], [b.x, b.y, b.z], 0.3 + pr() * 0.4, 0.014, WIRE, 10); }
    }
    if (!big) return;
    // traffic signals for both directions (青 lit — it's always a calm green wave)
    P.trafficSignal(G, matAt(sc - 9, -(rw + 0.55), e + 0.15, 0, true), 1, rw + 0.55 - 1.6);
    P.trafficSignal(G, matAt(sc + 8, rw + 0.55, e + 0.15, 0, true), 1, rw + 0.55 - 1.6);
    if (k % 8 === 0) P.pedestrianBridge(G, matAt(sc + 15, 0, e, 0, false), rw + sw + 0.1, 'hodokyo' + (Math.abs(k / 8) % 3));
  }

  /** level crossing: gravel bed + sleepers (shader), rails, rubber crossing panels, catenary, alarm posts, signs */
  *placeCrossing(G, ground, sx, matAt, road, rwAt, H, walkW, ox, oz) {
    const f0 = this.path.at(sx, {}), e = f0.y, rw = rwAt(sx), sw = walkW(sx), edge = rw + sw + 0.2, L = 150, bedY = e + 0.18;
    const w = zoneW(sx), w4 = [w.city, w.sakura, wSea(w), w.country];
    const xw = (ds, u, y) => [f0.x + f0.fx * ds + f0.rx * u - ox, y, f0.z + f0.fz * ds + f0.rz * u - oz];
    const DS = [7.6, 4.7, -4.7, -7.6];
    for (const [ua, ub] of [[-L, -edge], [edge, L]]) {
      const nu = 24;
      ground.grid(nu + 1, DS.length, (i, j) => {
        const u = ua + ((ub - ua) * i) / nu, ds = DS[j], top = Math.abs(ds) < 5;
        const y = top ? bedY : Math.min(bedY - 0.05, H(sx + ds, u) - 0.03);
        const p = xw(ds, u, y);
        return [p[0], p[1], p[2], 0, 1, 0, ds, u, w4[0], w4[1], w4[2], w4[3], rw, 5];
      });
    }
    const panel = (ua, ub, y) => ground.grid(2, 2, (i, j) => { const u = i ? ub : ua, ds = j ? -3.3 : 3.3, p = xw(ds, u, y); return [p[0], p[1], p[2], 0, 1, 0, ds, u, w4[0], w4[1], w4[2], w4[3], rw, 6]; });
    panel(-rw, rw, e + 0.03);
    if (sw > 0) { panel(-edge, -rw, e + 0.165); panel(rw, edge, e + 0.165); }
    const stop = (dsa, dsb, ua, ub) => ground.grid(2, 2, (i, j) => { const u = i ? ub : ua, ds = j ? dsb : dsa, p = xw(ds, u, e + 0.025); return [p[0], p[1], p[2], 0, 1, 0, ds, u, w4[0], w4[1], w4[2], w4[3], rw, 7]; });
    stop(-7.15, -7.6, -rw + 0.3, -0.12); stop(7.6, 7.15, 0.12, rw - 0.3);
    yield;
    // rails + catenary in a frame whose local x runs along the track (u) and local z = −(s − sx)
    const M = matAt(sx, 0, e, -Math.PI / 2, false), c = G.color;
    c.setM(M);
    const STEEL = [0.42, 0.40, 0.38], STEEL2 = [0.3, 0.29, 0.28], POLE = [0.55, 0.57, 0.6];
    for (const td of [-2, 2]) for (const gg of [-0.5335, 0.5335]) {
      const z = -(td + gg);
      for (const [ua, ub] of [[-L, -edge], [edge, L]]) c.box(ua, 0.26, z - 0.035, ub, 0.34, z + 0.035, STEEL);
      c.box(-edge, 0.0, z - 0.035, edge, 0.04, z + 0.035, STEEL2);
    }
    const PU = [-146, -104, -64, -26, 26, 64, 104, 146];
    for (const u of PU) {
      for (const z of [-4.95, 4.95]) c.box(u - 0.12, 0.18, z - 0.12, u + 0.12, 7.4, z + 0.12, POLE);
      c.box(u - 0.1, 6.95, -5.15, u + 0.1, 7.2, 5.15, POLE);
      for (const td of [-2, 2]) c.box(u - 0.04, 6.3, -td - 0.04, u + 0.04, 6.95, -td + 0.04, POLE);
    }
    for (const td of [-2, 2]) for (let i = 0; i < PU.length - 1; i++) {
      c.wire([PU[i], 5.35, -td], [PU[i + 1], 5.35, -td], 0.05, 0.011, WIRE, 6);
      c.wire([PU[i], 6.4, -td], [PU[i + 1], 6.4, -td], 0.45, 0.011, WIRE, 8);
    }
    yield;
    // a little unstaffed station beside the near track at most countryside crossings
    const kx = Math.round((sx - XOFF) / XING);
    if (w.country > 0.9 && hash2(kx, 17) < 0.7) {
      const sd = hash2(kx, 19) < 0.5 ? -1 : 1, xa = sd > 0 ? rw + 9 : -(rw + 9 + 46), xb = sd > 0 ? rw + 9 + 46 : -(rw + 9);
      P.station(G, M, xa, xb, sd * (rw + 9), Math.abs(kx) % 4, rng(Math.floor(hash2(kx, 23) * 4294967295)));
      c.setM(M);
    }
    yield;
    // alarm posts (barrier arms + lamps are animated by the crossing rig)
    for (const p of xingPosts(this.path, sx)) {
      const m = new THREE.Matrix4().makeRotationY(p.yaw); m.setPosition(p.x - ox, p.y, p.z - oz);
      P.alarmPost(G, m);
    }
    // "railway crossing ahead" signs for both directions
    P.signPost(G, matAt(sx - 70, -(rwAt(sx - 70) + 0.6), road(sx - 70) + 0.15 * (sw > 0 ? 1 : 0)), 'sign_xing', 1, 2.2, 0.85);
    P.signPost(G, matAt(sx + 70, rwAt(sx + 70) + 0.6, road(sx + 70) + 0.15 * (sw > 0 ? 1 : 0)), 'sign_xing', 1, 2.2, 0.85); // for oncoming traffic
  }

  /** river crossing: flowing water, levee-top paths, a bridge with railings and named stone posts, trees on the banks */
  *placeRiver(G, ground, sr, matAt, road, rwAt, H, walkW, ox, oz, r, river) {
    const f0 = this.path.at(sr, {}), e = f0.y, rw = rwAt(sr), sw = walkW(sr), w = zoneW(sr), w4 = [w.city, w.sakura, wSea(w), w.country];
    const sak = w.sakura > 0.5, L = 222, edge = rw + sw + 0.5, wy = e - RIVER_DROP;
    const xw = (ds, u, y) => [f0.x + f0.fx * ds + f0.rx * u - ox, y, f0.z + f0.fz * ds + f0.rz * u - oz];
    // water surface (su = (Δs, u) so the shader can flow it along the channel)
    {
      const pos = [], su = [], idx = [], n = 74;
      for (let i = 0; i <= n; i++) {
        const u = -L + (2 * L * i) / n;
        for (const ds of [14.3, -14.3]) { const p = xw(ds, u, wy); pos.push(p[0], p[1], p[2]); su.push(ds, u); } // (to the waterline on the banks)
        if (i > 0) { const a = (i - 1) * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('su', new THREE.Float32BufferAttribute(su, 2));
      g.setIndex(idx); g.computeBoundingSphere(); river.push(g);
    }
    // gravel paths along the top of both levees
    for (const [dsA, dsB] of [[28.9, 25.7], [-25.7, -28.9]]) for (const [ua, ub] of [[-L, -(rw + 3.4)], [rw + 3.4, L]]) {
      ground.grid(41, 2, (i, j) => { const u = ua + ((ub - ua) * i) / 40, ds = j ? dsB : dsA, p = xw(ds, u, e + 0.38); return [p[0], p[1], p[2], 0, 1, 0, ds, u, w4[0], w4[1], w4[2], w4[3], rw, 9, 1]; });
    }
    yield;
    // the bridge, in a frame where x runs along the road and z across it
    const M = matAt(sr, 0, e, 0, false), c = G.color, CONC = [0.74, 0.73, 0.7], RAIL = sak ? [0.78, 0.2, 0.15] : [0.55, 0.72, 0.64];
    c.setM(M);
    c.box(-24.5, -1.0, -edge, 24.5, -0.03, edge, CONC, null, { noBottom: false });
    for (const zz of [-1, 1]) c.box(-24.5, -1.3, zz > 0 ? edge - 0.35 : -edge, 24.5, -0.95, zz > 0 ? edge : -edge + 0.35, [0.62, 0.61, 0.58]);
    for (const x of [-8, 8]) c.box(x - 0.7, -RIVER_DROP - 1.4, -edge + 0.6, x + 0.7, -1.0, edge - 0.6, CONC);
    for (const x of [-25.7, 25.7]) c.box(x - 1.2, -RIVER_DROP + 0.4, -edge - 0.4, x + 1.2, -0.05, edge + 0.4, CONC);
    // steel expansion joints across the road where the deck meets each abutment (the car goes ka-tan over them, main.js)
    for (const x of [-24.5, 24.5]) { c.box(x - 0.16, 0.004, -rw, x + 0.16, 0.016, rw, [0.33, 0.32, 0.31]); c.box(x - 0.02, 0.016, -rw, x + 0.02, 0.02, rw, [0.2, 0.19, 0.19]); }
    const yb = sw > 0 ? 0.15 : 0.0;
    for (const zz of [-1, 1]) {
      const z = zz * (edge - 0.14);
      for (let x = -24; x <= 24.01; x += 2) c.box(x - 0.06, yb, z - 0.06, x + 0.06, yb + 1.0, z + 0.06, RAIL);
      c.box(-24, yb + 0.95, z - 0.08, 24, yb + 1.08, z + 0.08, RAIL);
      c.box(-24, yb + 0.48, z - 0.03, 24, yb + 0.54, z + 0.03, RAIL);
      c.box(-24, yb + 0.06, z - 0.03, 24, yb + 0.12, z + 0.03, RAIL);
    }
    // stone end posts (親柱) carrying the bridge's name
    const name = 'bridge' + (Math.abs(Math.round(sr / RIV)) % 4);
    for (const x of [-25, 25]) for (const zz of [-1, 1]) {
      const z = zz * (edge - 0.1), stone = [0.7, 0.69, 0.65];
      c.box(x - 0.32, yb, z - 0.32, x + 0.32, yb + 1.45, z + 0.32, stone);
      c.box(x - 0.38, yb + 1.45, z - 0.38, x + 0.38, yb + 1.58, z + 0.38, [0.62, 0.61, 0.57]);
      G.atlas.setM(M);
      const pl = (x < 0 ? -1 : 1) * 0.325, cell = name;
      if (x < 0) G.atlas.quad([x - 0.325, yb + 0.3, z - 0.22], [x - 0.325, yb + 0.3, z + 0.22], [x - 0.325, yb + 1.3, z + 0.22], [x - 0.325, yb + 1.3, z - 0.22], [1, 1, 1], P.uvOf(cell));
      else G.atlas.quad([x + 0.325, yb + 0.3, z + 0.22], [x + 0.325, yb + 0.3, z - 0.22], [x + 0.325, yb + 1.3, z - 0.22], [x + 0.325, yb + 1.3, z + 0.22], [1, 1, 1], P.uvOf(cell));
      c.setM(M);
    }
    P.oldLamp(G, matAt(sr - 14, -(edge - 0.45), e + yb, 0, true)); P.oldLamp(G, matAt(sr + 14, edge - 0.45, e + yb, 0, true));
    yield;
    // the low-water banks are faced with concrete blocks (護岸) from just under the water up to the riverside flats, and
    // reeds (ヨシ) stand in clumps along the top of them — the banks used to be lawn right down to the water
    {
      G.atlas.setM(new THREE.Matrix4());
      const cell = P.uvOf('gogan'), SEG = 2.4, UMAX = 150;
      for (const sg of [-1, 1]) for (let ua = -UMAX; ua < UMAX - 0.01; ua += SEG) {
        const ub = ua + SEG, A = xw(sg * 13.9, ua, wy - 0.12), B = xw(sg * 13.9, ub, wy - 0.12), Cq = xw(sg * 16.05, ub, wy + 0.72), D = xw(sg * 16.05, ua, wy + 0.72);
        // face the river (and the sky): the quad's normal is (B − A) × (D − A)
        const nx = (B[1] - A[1]) * (D[2] - A[2]) - (B[2] - A[2]) * (D[1] - A[1]), nz = (B[0] - A[0]) * (D[1] - A[1]) - (B[1] - A[1]) * (D[0] - A[0]);
        const toC = xw(0, (ua + ub) / 2, wy); const ok = nx * (toC[0] - A[0]) + nz * (toC[2] - A[2]) > 0;
        const uv = { u0: cell.u0, u1: cell.u1, v0: cell.v0, v1: cell.v1 };
        if (ok) G.atlas.quad(A, B, Cq, D, [1, 1, 1], uv); else G.atlas.quad(B, A, D, Cq, [1, 1, 1], { u0: cell.u1, u1: cell.u0, v0: cell.v0, v1: cell.v1 });
      }
      // (not right beside the road, where they'd fill the chase camera's view with cut-out cards: from 14 m out)
      for (const sg of [-1, 1]) for (const side of [-1, 1]) for (let u = 14 + r() * 3; u < 125; u += r.range(2.4, 5)) {
        if (r() < 0.35) continue; // gaps between the stands
        const ds = sg * (16.2 + r() * 1.1), uu = side * u, n = 1 + (r() < 0.4 ? 1 : 0);
        for (let k = 0; k < n; k++) { const p = xw(ds + sg * r() * 0.6, uu + (r() - 0.5) * 0.9, wy + 0.7); const m = new THREE.Matrix4().makeRotationY(r() * 6.28); m.setPosition(p[0], p[1], p[2]); P.tuft(G, m, r, 'grass', r.range(1.9, 2.8)); }
      }
    }
    yield;
    // trees along both banks: a sakura tunnel on the avenue, a few broad trees in the countryside
    for (const ds of [-18, 18]) for (const side of [-1, 1]) {
      yield;
      for (let u = 11 + r() * 4; u < (sak ? 125 : 170); u += sak ? r.range(8.5, 11) : r.range(18, 34)) {
        const s = sr + ds + (r() - 0.5) * 1.5, uu = side * u;
        P.tree(G, matAt(s, uu, H(s, uu), r() * 6, false), sak ? 'sakura' : 'broad', r, sak ? r.range(1.0, 1.25) : r.range(0.9, 1.25));
      }
    }
  }

  /** トンネル: the cap of the ridge over the road, the tube (walls, walkways, arch), sodium lamps, evacuation lights,
   *  jet fans, the two portal faces with their name plates, and trees on the ridge */
  *placeTunnel(G, ground, t, s0, s1, matAt, onGround, H, rwAt, ox, oz, r) {
    const f0 = this.path.at(t.s, {}), e = f0.y, rw = rwAt(t.s), WT = rw + 1.4, w = zoneW(t.s), w4 = [w.city, w.sakura, wSea(w), w.country];
    const M = matAt(t.s, 0, e, 0, false), c = G.color;              // local X = along the road (ds), local Z = across (u)
    const xa = Math.max(s0, t.s - T_HALF) - t.s, xb = Math.min(s1, t.s + T_HALF) - t.s;
    if (xb > xa + 0.01) {
      const rows = Math.max(2, Math.ceil((xb - xa) / 3) + 1), cols = [-(rw + 1.5), -rw, -rw * 0.5, 0, rw * 0.5, rw, rw + 1.5];
      ground.gridN(rows, cols.length, (i, j) => {
        const ds = xa + ((xb - xa) * i) / (rows - 1), s = t.s + ds, u = cols[j], y = e + ridgeHr(ds, u);
        if (t.border) { const wr = zoneW(s); return [f0.x + f0.fx * ds + f0.rx * u - ox, y, f0.z + f0.fz * ds + f0.rz * u - oz, 0, 1, 0, mod(s, S_WRAP), u, wr.city, wr.sakura + wr.galata + wr.uchisar + wr.pasabag, wSea(wr), wr.country + wr.town, rw, 0, -1, wr.snow + wr.pasabag]; }
        return [f0.x + f0.fx * ds + f0.rx * u - ox, y, f0.z + f0.fz * ds + f0.rz * u - oz, 0, 1, 0, mod(s, S_WRAP), u, w4[0], w4[1], w4[2], w4[3], rw, 0, -1];
      });
      // the tube, seen from inside (faces point inwards)
      const prof = [[-rw, 0], [-rw, 0.2], [-WT, 0.2], [-WT, 3.2]];
      for (let k = 1; k < 12; k++) { const th = Math.PI * (1 - k / 12); prof.push([WT * Math.cos(th), 3.2 + 3.0 * Math.sin(th)]); }
      prof.push([WT, 3.2], [WT, 0.2], [rw, 0.2], [rw, 0]);
      const TILE = [0.86, 0.82, 0.72], ARCH = [0.44, 0.45, 0.47], WALK = [0.62, 0.61, 0.58];
      const xs = []; for (let x = xa; x < xb - 0.01; x += 6) xs.push(x); xs.push(xb);
      c.setM(M);
      for (let i = 0; i < xs.length - 1; i++) for (let j = 0; j < prof.length - 1; j++) {
        const [za, ya] = prof[j], [zb, yb] = prof[j + 1];
        const col = Math.max(ya, yb) <= 0.21 ? WALK : Math.abs(za) > WT - 0.01 && Math.abs(zb) > WT - 0.01 ? TILE : ARCH;
        c.quad([xs[i], ya, za], [xs[i + 1], ya, za], [xs[i + 1], yb, zb], [xs[i], yb, zb], col);
      }
      // sodium lamps on both arch shoulders every 6 m, green evacuation lights every 24 m, jet fans every 60 m
      G.sodium.setM(M); G.sig.setM(M);
      const zl = WT * Math.cos(Math.PI / 6) - 0.12, yl = 3.2 + 3.0 * Math.sin(Math.PI / 6) - 0.08;
      for (let x = Math.ceil((xa + T_HALF - 3) / 6) * 6 + 3 - T_HALF; x < xb; x += 6) for (const sd of [-1, 1]) {
        G.sodium.box(x - 0.45, yl - 0.07, sd * zl - 0.13, x + 0.45, yl + 0.07, sd * zl + 0.13, null);
        P.lampAt(G, M, x, yl - 0.1, sd * zl, 1.0); // (they sweep bands of orange light over the car as it drives through)
      }
      for (let x = Math.ceil((xa + T_HALF) / 24) * 24 - T_HALF; x < xb; x += 24) G.sig.box(x - 0.3, 0.95, -WT + 0.01, x + 0.3, 1.2, -WT + 0.06, null);
      for (let x = Math.ceil((xa + T_HALF - 30) / 60) * 60 + 30 - T_HALF; x < xb; x += 60) for (const z of [-1.15, 1.15]) {
        c.box(x - 1.1, 5.2, z - 0.36, x + 1.1, 5.78, z + 0.36, [0.56, 0.57, 0.6], null, { nx: [0.22, 0.22, 0.24], px: [0.22, 0.22, 0.24] });
        c.box(x - 0.08, 5.78, z - 0.05, x + 0.08, 6.15, z + 0.05, [0.4, 0.4, 0.42]);
      }
      yield;
    }
    // the portal faces: from the arch (or the cutting) up to the ridge, wide enough to hide the step in the terrain.
    // A weathered concrete headwall round the opening — a projecting arch ring, a coping along its top, rain streaks
    // running down from it, dirt at its foot — and above and beside it the steep hill face held by a concrete lattice
    // frame (法枠), like the cutting slopes either side. (It used to be one huge flat cream wall up to the ridge)
    const hk = (a, b) => { const h = Math.sin(a * 12.9898 + b * 78.233 + t.k * 37.719) * 43758.5453; return h - Math.floor(h); };
    const mix3 = (p, q, k) => [p[0] + (q[0] - p[0]) * k, p[1] + (q[1] - p[1]) * k, p[2] + (q[2] - p[2]) * k];
    const CB = [0.5, 0.5, 0.47], BEAM = [0.55, 0.53, 0.47], CAP = [0.6, 0.6, 0.57], RING = [0.58, 0.58, 0.55], mulRing = [0.42, 0.42, 0.4];
    let snowP = false, uchP = false; // (a border tunnel's mouth in the snow country; in Cappadocia's tuff, W5)
    const cellCol = (zi, yi) => { const h = hk(zi, yi); return snowP ? mix3([0.86, 0.88, 0.93], [0.74, 0.77, 0.83], h) : uchP ? mix3([0.8, 0.68, 0.55], [0.7, 0.58, 0.46], h) : autumnT ? mix3([0.26, 0.29, 0.08], [0.42, 0.3, 0.09], h) : mix3([0.22, 0.29, 0.08], [0.36, 0.36, 0.12], h); };
    const autumnT = w.mountain > 0.5, HW = WT + 2.6, LAT = 2.6;
    for (const sd of [-1, 1]) {
      const sp = t.s + sd * T_HALF, xp = sd * (T_HALF + 0.08);
      if (sp < s0 || sp >= s1) continue;
      snowP = !!t.border && zoneW(sp).snow > 0.5; uchP = !!t.border && zoneW(sp).uchisar + zoneW(sp).pasabag > 0.5;
      const zs = [];
      for (const o of NEAR) if (o >= 1.44) zs.push(rw + o, -(rw + o));
      for (const a of FAR) if (a > rw + 3.5 && a < rw + 21) zs.push(a, -a);
      for (let k = 0; k <= 24; k++) zs.push(-WT + (2 * WT * k) / 24);
      zs.push(-WT - 0.01, WT + 0.01, -HW, HW); zs.sort((p, q) => p - q);
      const arch = z => 3.2 + 3.0 * Math.sqrt(Math.max(0, 1 - (z / WT) ** 2));
      const top = z => Math.max(H(sp - sd * 0.03, z) - e, ridgeHr(sd * (T_HALF - 0.03), z));
      const bot = z => (Math.abs(z) <= WT + 1e-6 ? arch(z) : H(sp + sd * 0.03, z) - e);
      // the headwall's height: ~2.2 m over the crown of the arch, lower where the ridge is low
      let HY = 8.4; for (const z of zs) if (Math.abs(z) <= HW) HY = Math.min(HY, top(z) - 0.4);
      const wall = HY > 6.6;
      c.setM(M);
      const nx = sd; // the face looks out along the road
      const quad4 = (z0, z1, y00, y01, y10, y11, c0, c1) => { // a face strip from (z0: y00→y10) to (z1: y01→y11), colour c0 below → c1 above
        const P0 = [xp, y00, z0], P1 = [xp, y01, z1], P2 = [xp, y11, z1], P3 = [xp, y10, z0];
        const A = sd < 0 ? [P0, P1, P2, P3] : [P1, P0, P3, P2], Cc = sd < 0 ? [c0, c0, c1, c1] : [c0, c0, c1, c1];
        for (const k of [0, 1, 2, 0, 2, 3]) c.vtx(A[k][0], A[k][1], A[k][2], nx, 0, 0, 0, 0, Cc[k]);
      };
      const lerp = (p, q, k) => p + (q - p) * k;
      for (let i = 0; i < zs.length - 1; i++) {
        const za = zs[i], zb = zs[i + 1]; if (zb - za < 1e-4) continue;
        const ta = top(za), tb = top(zb), ba = bot(za), bb = bot(zb);
        if (ta - ba < 0.01 && tb - bb < 0.01) continue;
        const zm = (za + zb) / 2, inWall = wall && Math.abs(zm) < HW;
        let y0a = ba, y0b = bb;
        if (inWall) { // concrete from the bottom up to the coping: cast in ~2.4 m panels, streaked below the top, dirty at the foot
          const pc = mix3(CB, [0.46, 0.46, 0.44], hk(Math.floor(zm / 2.4), 3.1)), streak = 0.8 + 2.6 * hk(Math.floor(zm / 0.8), 7.7), dark = mix3(pc, [0.27, 0.27, 0.26], 0.35 + 0.3 * hk(Math.floor(zm / 0.8), 9.9));
          const ha = Math.min(HY, ta), hb = Math.min(HY, tb), sa = Math.max(ba, ha - streak), sb = Math.max(bb, hb - streak);
          if (Math.abs(zm) > WT) { // the foot meets the ground: a band of grime and moss
            const fa = Math.min(sa, ba + 0.9), fb = Math.min(sb, bb + 0.9);
            quad4(za, zb, ba, bb, fa, fb, mix3(pc, [0.25, 0.29, 0.18], 0.45), pc); quad4(za, zb, fa, fb, sa, sb, pc, pc);
          } else quad4(za, zb, ba, bb, sa, sb, pc, pc);
          quad4(za, zb, sa, sb, ha, hb, pc, dark);
          y0a = ha; y0b = hb;
          if (ta - ha < 0.01 && tb - hb < 0.01) continue;
        }
        // the lattice frame's cells, a row at a time (the beams go over the joins)
        const zi = Math.floor(zm / LAT);
        let ya = y0a, yb = y0b;
        for (let row = Math.floor(Math.min(ya, yb) / LAT) + 1; ya < ta - 0.01 || yb < tb - 0.01; row++) {
          const yc = row * LAT, na = Math.min(ta, Math.max(ya, yc)), nb = Math.min(tb, Math.max(yb, yc));
          const cc = cellCol(zi, row);
          quad4(za, zb, ya, yb, na, nb, mix3(cc, [0.2, 0.22, 0.1], 0.25), cc);
          ya = na; yb = nb; if (row > 60) break;
        }
      }
      // the lattice beams (they stand 12 cm proud of the face)
      const x0 = Math.min(xp, xp + sd * 0.12), x1 = Math.max(xp, xp + sd * 0.12);
      const colAt = z => { for (let i = 0; i < zs.length - 1; i++) if (z >= zs[i] && z <= zs[i + 1] && zs[i + 1] > zs[i]) { const k = (z - zs[i]) / (zs[i + 1] - zs[i]); return [lerp(bot(zs[i]), bot(zs[i + 1]), k), lerp(top(zs[i]), top(zs[i + 1]), k)]; } return null; };
      const zMin = zs[0], zMax = zs[zs.length - 1];
      for (let zj = Math.ceil(zMin / LAT) * LAT; zj < zMax; zj += LAT) { // uprights
        const bt = colAt(zj); if (!bt) continue;
        const lo = (wall && Math.abs(zj) < HW ? Math.max(HY + 0.3, bt[0]) : bt[0]) + 0.05, hi = bt[1] - 0.05;
        if (hi - lo > 0.4 && !(Math.abs(zj) <= WT + 0.3 && !wall)) c.box(x0, lo, zj - 0.14, x1, hi, zj + 0.14, BEAM);
      }
      for (let row = 1; row < 60; row++) { // crossbars, in runs between the face's edges
        const y = row * LAT; let run = null;
        const flush = () => { if (run && run[1] - run[0] > 0.3) c.box(x0, y - 0.14, run[0], x1, y + 0.14, run[1], BEAM); run = null; };
        let any = false;
        for (let i = 0; i < zs.length - 1; i++) {
          const za = zs[i], zb = zs[i + 1]; if (zb - za < 1e-4) continue;
          const zm = (za + zb) / 2, lo = Math.max(bot(za), bot(zb), wall && Math.abs(zm) < HW ? HY + 0.3 : -1e9), hi = Math.min(top(za), top(zb));
          if (y > lo + 0.2 && y < hi - 0.2) { any = true; if (run) run[1] = zb; else run = [za, zb]; } else flush();
        }
        flush(); if (!any && y > 30) break;
      }
      if (wall) { // the coping along the headwall's top, and the ring round the opening standing proud of it
        c.box(Math.min(xp, xp + sd * 0.32), HY - 0.05, -HW, Math.max(xp, xp + sd * 0.32), HY + 0.3, HW, CAP);
      }
      const xo = xp + sd * 0.32, rz = k => -WT + (2 * WT * k) / 24, inner = k => [rz(k), arch(rz(k))], outer = k => [rz(k) * 1.12, arch(rz(k)) + 0.6];
      for (let k = 0; k < 24; k++) {
        const [z0, y0] = inner(k), [z1, y1] = inner(k + 1), [oz0, oy0] = outer(k), [oz1, oy1] = outer(k + 1);
        if (sd < 0) c.quad([xo, y0, z0], [xo, y1, z1], [xo, oy1, oz1], [xo, oy0, oz0], RING); else c.quad([xo, y1, z1], [xo, y0, z0], [xo, oy0, oz0], [xo, oy1, oz1], RING);
        if (sd < 0) c.quad([xp, y0, z0], [xp, y1, z1], [xo, y1, z1], [xo, y0, z0], mulRing); else c.quad([xp, y1, z1], [xp, y0, z0], [xo, y0, z0], [xo, y1, z1], mulRing);
        if (sd < 0) c.quad([xp, oy1, oz1], [xp, oy0, oz0], [xo, oy0, oz0], [xo, oy1, oz1], RING); else c.quad([xp, oy0, oz0], [xp, oy1, oz1], [xo, oy1, oz1], [xo, oy0, oz0], RING);
      }
      for (const zz of [-1, 1]) c.box(Math.min(xp, xo), 0.2, zz > 0 ? WT : -WT * 1.12, Math.max(xp, xo), 3.2, zz > 0 ? WT * 1.12 : -WT, RING); // its legs down to the walkway
      G.atlas.setM(M);
      // (on a border tunnel's Turkish mouth, Turkey's plate: the world atlas's cell, by which border it is)
      const trM = t.border && REGION[zoneAt(sp)] !== 'jp'; if (trM) G.atlas.world = true;
      const pw = 1.9, py0 = 7.05, py1 = 7.85, xq = xp + sd * 0.03, cell = P.uvOf(trM ? 'trTunnel' + (REGION[t.b] === 'tr' ? 0 : 1) : 'tunnel' + (w.coast > 0.5 ? 1 : Math.abs(t.k) % 2 ? 2 : 0));
      if (sd < 0) G.atlas.quad([xq, py0, -pw], [xq, py0, pw], [xq, py1, pw], [xq, py1, -pw], [1, 1, 1], cell);
      else G.atlas.quad([xq, py0, pw], [xq, py0, -pw], [xq, py1, -pw], [xq, py1, pw], [1, 1, 1], cell);
    }
    yield;
    // trees on the ridge
    const autumn = w.mountain > 0.5;
    for (let s = Math.max(s0, t.s - T_RIDGE * 0.95) + r() * 3; s < Math.min(s1, t.s + T_RIDGE * 0.95); s += r.range(4, 8)) {
      const minU = Math.abs(s - t.s) > T_HALF - 4 ? 17 : 4;   // not on the faces of the approach cutting
      for (const side of [-1, 1]) {
        const u = side * (rw + r.range(minU, 50)), q = r();
        const kind = autumn ? (q < 0.5 ? 'maple' : q < 0.8 ? 'cedar' : 'ginkgo') : t.border && zoneW(s).snow > 0.5 ? (q < 0.65 ? 'snowcedar' : 'birch') : (q < 0.65 ? 'pine' : 'broad');
        // (on Cappadocia's side of its border, W5: its bare trees, sparse, over a ridge of its tuff (the ground shader); their own
        // random numbers, so every other ridge's trees stay as they were)
        if (t.border && zoneW(s).uchisar + zoneW(s).pasabag > 0.5) { const ur = rng(Math.floor(hash2(Math.round(s * 10), side > 0 ? 7301 : 7303) * 4294967295)); if (ur() < 0.3) P.tree(G, onGround(s, u, -0.3, ur() * 6, false), 'bare', ur, ur.range(0.85, 1.2)); continue; }
        P.tree(G, onGround(s, u, -0.3, r() * 6, false), kind, r, r.range(0.9, 1.3));
      }
    }
  }

  /** 雪国: farmhouses under deep snow, white birch groves, snow-laden cedars, and the red-white arrow poles (矢羽根) */
  *placeSnow(G, r, s0, s1, matAt, onGround, road, rwAt, H) {
    const sw = s => zoneW(s).snow;
    if (sw(s0) < 0.3 && sw(s1) < 0.3) return;
    for (const side of [-1, 1]) {
      for (let s = s0 + r() * 20; s < s1; s += r.range(22, 40)) { // farmhouses with steep, snow-laden roofs
        if (sw(s) < 0.6 || nearB(s, T_RIDGE + 30) || r() < 0.5) continue;
        const u = side * r.range(18, 90);
        P.building(G, onGround(s, u, -0.3), r, { type: 'house', w: r.range(9, 12.5), d: r.range(8, 10), floors: r() < 0.5 ? 2 : 1, tint: r.pick(P.TINTS), litP: 0.62, fence: 0, snow: true });
        for (let k = 0; k < 2 + r() * 3; k++) P.tree(G, onGround(s + r.range(-9, 9), u + side * r.range(7, 15), -0.3, r() * 6, false), r() < 0.6 ? 'snowcedar' : 'birch', r, r.range(0.9, 1.25));
      }
      yield;
      for (let s = s0 + r() * 5; s < s1; s += r.range(3, 7)) { // birch groves near the road, cedars on the far hills
        if (sw(s) < 0.5) continue;
        if (r() < 0.32) P.tree(G, onGround(s, side * r.range(9, 40), -0.25, r() * 6, false), 'birch', r, r.range(0.85, 1.25));
        if (r() < 0.55) P.tree(G, onGround(s, side * r.range(120, 205), -0.4, r() * 6, false), 'snowcedar', r, r.range(1.1, 1.6));
      }
      yield;
    }
    // 矢羽根: striped poles with a downward arrow over the road edge, so the plough knows where the road is
    for (let s = Math.ceil(s0 / 36) * 36; s < s1; s += 36) {
      if (sw(s) < 0.55 || nearB(s, T_RIDGE + 10)) continue;
      const rw = rwAt(s);
      { const a = matAt(s, -(rw + 0.95), road(s) + 1.3), b = matAt(s + 18, rw + 0.95, road(s + 18) + 1.3); a.groundY = road(s); b.groundY = road(s + 18);
        P.snowPole(G, a, 1); P.snowPole(G, b, -1); }
    }
  }

  /** 紅葉の峠: maples, ginkgo and cedars on the slopes, chevrons on the bends, reflector posts along the guardrail */
  *placeMountain(G, r, s0, s1, matAt, onGround, road, rwAt, H) {
    const mw = s => zoneW(s).mountain;
    if (mw(s0) < 0.3 && mw(s1) < 0.3) return;
    for (const side of [-1, 1]) {
      for (let s = s0 + r() * 4; s < s1; s += r.range(4.5, 8.5)) {
        if (mw(s) < 0.45 || nearT(s, T_RIDGE + 6)) continue;
        const rw = rwAt(s), q = r();
        if (side > 0) { // uphill: above the cut face, up the forest slope
          const kind = q < 0.5 ? 'maple' : q < 0.72 ? 'ginkgo' : 'cedar';
          P.tree(G, onGround(s, rw + r.range(17, 70), -0.25, r() * 6, false), kind, r, r.range(0.9, 1.3));
        } else { // valley side: down the steep drop
          const kind = q < 0.55 ? 'maple' : q < 0.8 ? 'cedar' : 'ginkgo';
          P.tree(G, onGround(s, -(rw + r.range(3.5, 34)), -0.25, r() * 6, false), kind, r, r.range(0.95, 1.35));
        }
      }
      yield;
    }
    for (let s = s0 + r() * 4; s < s1; s += r.range(3, 6)) { // the far mountainside across the valley, and the valley floor
      if (mw(s) < 0.5) continue;
      const far = r() < 0.7, u = -(rwAt(s) + (far ? r.range(108, 205) : r.range(36, 100)));
      P.tree(G, onGround(s, u, -0.3, r() * 6, false), r() < 0.5 ? 'cedar' : r() < 0.75 ? 'maple' : 'ginkgo', r, r.range(1.1, 1.6));
    }
    yield;
    // white reflector posts on the guardrail (視線誘導標)
    G.color.setM(new THREE.Matrix4());
    for (let s = Math.ceil(s0 / 10) * 10; s < s1; s += 10) {
      if (mw(s) < 0.5 || nearT(s, T_RIDGE + 4)) continue;
      const rw = rwAt(s), M = matAt(s, -(rw + 0.95), road(s));
      P.reflectorPost(G, M);
    }
    // chevrons on the outside of the sharper bends (線形誘導標)
    for (let s = Math.ceil(s0 / 14) * 14; s < s1; s += 14) {
      if (mw(s) < 0.6) continue;
      const k = this.path.curv(s);
      if (Math.abs(k) < 1 / 230) continue;
      const rw = rwAt(s);
      if (k > 0) P.signPost(G, matAt(s, rw + 0.42, road(s)), 'chev_l', -1, 1.25, 0.58); // bending left → signs on the right
      else P.signPost(G, matAt(s, -(rw + 1.15), road(s)), 'chev_r', 1, 1.35, 0.58);       // bending right → behind the left guardrail
    }
  }

  /** 土手の草むら: the countryside's verges are banks of tall grass and wildflowers along both edges of the road, as in
   *  the reference art — one clump card a metre or so apart (fewer on phones), with their own random numbers. Not in
   *  front of the bus stop, the vending machine or a お地蔵さん. Written straight into chunk space (no matrix per clump) */
  *placeBanks(G, c, s0, s1, ox, oz, rwAt) {
    const path = this.path, f = {}, br = rng(Math.floor(hash2(c, 1789) * 4294967295)), step = P.bankStep();
    const sb = Math.floor((s0 + CH / 2) / 600) * 600 + 300, sv = Math.floor((s0 + CH / 2) / 700) * 700 + 120;
    const sj = Math.floor((s0 + CH / 2) / 380) * 380 + 190, jside = hash2(Math.round(sj), 5) < 0.5 ? -1 : 1;
    for (const side of [-1, 1]) {
      G.leaf.setM(IDENT);
      for (let s = s0 + br() * step; s < s1; s += step * br.range(0.75, 1.25)) {
        if (zoneAt(s) !== 'country' || nearX(s, 10) || nearR(s, 31)) continue;
        if (side < 0 && (Math.abs(s - sb) < 2.9 || (s > sv - 1.3 && s < sv + 2.7))) continue;
        if (side === jside && Math.abs(s - sj) < 1.6) continue;
        path.at(s, f);
        const rw = rwAt(s), u = side * (rw + 0.9 + (br() - 0.5) * 0.36), y = f.y + groundOffsetMix(s, u, f.y, rw); // (step 28: its low end's blades lean out over the asphalt's edge, as painted; was rw + 0.95)
        // across the verge, away from the road (the clump's low end at the road), turned by up to ±23°
        const a = (br() - 0.5) * 0.8, ca = Math.cos(a) * side, sa = Math.sin(a) * side;
        P.bank(G, f.x + f.rx * u - ox, y, f.z + f.rz * u - oz, f.rx * ca + f.fx * sa, f.rz * ca + f.fz * sa, br, br.range(0.85, 1.15));
      }
      // (step 28) …and a second, taller row behind it, over the verge's slope down to the fields, so the bank of long grass is
      // ~3.4 m deep as painted (it was 1.8 m, with the meadow's short blades right behind it). Standing at the fields' level,
      // its road end hidden in the first row. Its own random numbers: the rest of the layout is unchanged. (Not on phones, where
      // the foliage is thinner: right in front of the camera these alpha-tested cards are many layers deep)
      const bo = rng(Math.floor(hash2(c, side > 0 ? 2801 : 2803) * 4294967295)), ostep = step * 1.3;
      if (step <= 1) for (let s = s0 + bo() * ostep; s < s1; s += ostep * bo.range(0.75, 1.25)) {
        if (zoneAt(s) !== 'country' || nearX(s, 11) || nearR(s, 32)) continue;
        if (side < 0 && (Math.abs(s - sb) < 3.6 || (s > sv - 1.8 && s < sv + 3.2))) continue;
        if (side === jside && Math.abs(s - sj) < 2.2) continue;
        path.at(s, f);
        const rw = rwAt(s), u = side * (rw + 2.5 + (bo() - 0.5) * 0.3), uo = u + side * 0.95;
        const y = f.y + Math.min(groundOffsetMix(s, u, f.y, rw), groundOffsetMix(s, uo, f.y, rw)) - 0.02;
        const a = (bo() - 0.5) * 0.7, ca = Math.cos(a) * side, sa = Math.sin(a) * side;
        P.bank(G, f.x + f.rx * u - ox, y, f.z + f.rz * u - oz, f.rx * ca + f.fx * sa, f.rz * ca + f.fz * sa, bo, bo.range(1.05, 1.3));
      }
      yield;
    }
    // 海沿いの草むら: the coast's verge on the land side is a bank of long grass along the road's edge, as in the coast
    // painting: the country's clump cards, clear of the poles and the lamp, with a clump of a flower bed in pink and
    // violet now and then among the white-flowering bushes (their own random numbers: the rest of the layout is unchanged)
    // (on phones, where the foliage is thinner, the clumps stand a third further apart again: from the chase camera they
    // still overlap into one band, and the band cost ~0.4 ms a frame on the phone profile)
    const cb = rng(Math.floor(hash2(c, 1811) * 4294967295)), cstep = step > 1 ? step * 1.35 : step;
    G.leaf.setM(IDENT);
    for (let s = s0 + cb() * cstep; s < s1; s += cstep * cb.range(0.75, 1.25)) {
      if (zoneW(s).coast < 0.6 || nearT(s, T_RIDGE + 6)) continue;
      const dp = s - 6 - Math.round((s - 6) / POLE_SP) * POLE_SP; // (the poles stand at rw + 1.35, the lamp at rw + 1.0)
      if (Math.abs(dp) < 0.9 || Math.abs(s - (s0 + 12)) < 0.8) continue;
      path.at(s, f);
      const rw = rwAt(s), u = rw + 0.95 + (cb() - 0.5) * 0.3, y = f.y + groundOffsetMix(s, u, f.y, rw);
      const a = (cb() - 0.5) * 0.8, ca = Math.cos(a), sa = Math.sin(a);
      P.bank(G, f.x + f.rx * u - ox, y, f.z + f.rz * u - oz, f.rx * ca + f.fx * sa, f.rz * ca + f.fz * sa, cb, cb.range(0.62, 0.85), 'bankC'); // (lower than the country's: the bushes stand out of it)
    }
    for (let s = s0 + cb() * 14; s < s1; s += cb.range(14, 30)) {
      if (zoneW(s).coast < 0.6 || nearT(s, T_RIDGE + 6)) continue;
      const dp = s - 6 - Math.round((s - 6) / POLE_SP) * POLE_SP;
      if (Math.abs(dp) < 1.4 || Math.abs(s - (s0 + 12)) < 1.2) continue;
      path.at(s, f);
      const rw = rwAt(s), u = rw + cb.range(1.3, 2.3), y = f.y + groundOffsetMix(s, u, f.y, rw);
      const m = new THREE.Matrix4().makeRotationY(cb() * 6.28); m.setPosition(f.x + f.rx * u - ox, y, f.z + f.rz * u - oz);
      P.flowerBed(G, m, cb, cb.range(1.1, 1.4));
    }
    // 花壇: low flower beds along the cherry avenue's lawns between the trees, clumps of white, pink and violet flowers,
    // as in the painting (their own random numbers: the rest of the layout is unchanged)
    const fb = rng(Math.floor(hash2(c, 2417) * 4294967295));
    for (const side of [-1, 1]) {
      for (let s = s0 + fb() * 8; s < s1; s += fb.range(8, 14)) {
        if (zoneW(s).sakura < 0.6 || nearR(s, 31)) continue;
        const n = 1 + Math.floor(fb() * 3), u0 = side * (rwAt(s) + 2.95 + fb() * 0.4);
        path.at(s, f); const y = f.y + groundOffsetMix(s, u0, f.y, rwAt(s)); // (one ground height for the bed: it is 1–2.5 m long)
        for (let k = 0; k < n; k++) {
          const d = k * 0.75 + fb() * 0.25, u = u0 + side * (fb() - 0.5) * 0.3;
          const m = new THREE.Matrix4().makeRotationY(fb() * 6.28); m.setPosition(f.x + f.fx * d + f.rx * u - ox, y, f.z + f.fz * d + f.rz * u - oz);
          if (fb() < 0.5) P.flowerBed(G, m, fb, fb.range(1.05, 1.35)); else P.flowerBush(G, m, fb, fb.range(0.45, 0.6));
        }
      }
    }
  }

  /** 雑草: tufts of grass and wildflowers along shoulders, field edges and verges (sparse weeds at the foot of city walls) */
  *placeVerge(G, r, s0, s1, matAt, H, rwAt, c, ox, oz) {
    yield* this.placeBanks(G, c, s0, s1, ox, oz, rwAt);
    for (const side of [-1, 1]) {
      for (let s = s0 + r() * 1.2; s < s1; s += r.range(0.55, 1.5)) {
        if (nearX(s, 10) || nearR(s, 31) || nearT(s, T_RIDGE + 4)) continue;
        const z = zoneAt(s), rw = rwAt(s);
        let u, dens, fl = 0.22, sc = 1;
        if (z === 'country') { u = rw + r.range(2.05, 2.8); dens = 0.25; fl = 0.35; } // (behind the bank, at the field's edge)
        else if (z === 'sakura') { u = rw + 2.68 + r() * 1.3; dens = 0.55; fl = 0.3; }
        else if (z === 'coast') { if (side < 0) continue; u = rw + 0.95 + r() * 1.7; dens = 0.75; fl = 0.18; }
        else if (z === 'bosphorus') { if (side < 0) continue; u = rw + 4.25 + r() * 0.3; dens = 0.35; fl = 0.25; } // (at the foot of the gardens' railings)
        else if (z === 'snow' || z === 'galata' || z === 'town' || z === 'uchisar' || z === 'pasabag') continue; // (Cappadocia's: placeUchisar, placePasabag)
        else if (z === 'mountain') { u = side < 0 ? rw + 1.0 + r() * 0.35 : rw + 0.25 + r() * 0.2; dens = side < 0 ? 0.55 : 0.18; fl = 0.12; sc = 0.85; }
        else { if (nearSide(s, 5)) continue; u = rw + 3.02 + r() * 0.1; dens = 0.1; fl = 0.08; sc = 0.65; }
        if (r() > dens) continue;
        const uu = side * u;
        if (side < 0 && bayQ(s) === bayQ(s) && H(s, uu) < 0.6) continue; // (the bay's end: its water, step 27)
        P.tuft(G, matAt(s, uu, H(s, uu), r() * 6.28, false), r, r() < fl ? 'flowers' : 'grass', sc * r.range(0.8, 1.2));
      }
      yield;
    }
  }

  // ガードレール: a corrugated W-beam (two bulges and a valley, folded edges) on round posts behind it, with an orange
  // reflector in the valley at every other post. The facets catch the light in bands, as a real one does (it used to be
  // one flat strip on square sticks)
  guardrail(G, sa, sb, world, road, rwAt) {
    G.color.setM(new THREE.Matrix4());
    const n = Math.max(1, Math.round((sb - sa) / 2)), RAIL = P.PAL.rail, BACK = [0.62, 0.64, 0.66], POST = [0.74, 0.76, 0.79], REFL = [0.95, 0.55, 0.16];
    for (let i = 0; i < n; i++) {
      const s = sa + ((sb - sa) * i) / n, t = sa + ((sb - sa) * (i + 1)) / n;
      const ua = -(rwAt(s) + 0.95), ub = -(rwAt(t) + 0.95), ya = road(s), yb = road(t);
      for (let k = 0; k < WBEAM.length - 1; k++) { // the profile: (height, how far it stands out towards the road)
        const [h0, d0] = WBEAM[k], [h1, d1] = WBEAM[k + 1];
        G.color.quad(world(s, ua + d0, ya + h0), world(t, ub + d0, yb + h0), world(t, ub + d1, yb + h1), world(s, ua + d1, ya + h1), RAIL);
      }
      G.color.quad(world(t, ub + 0.05, yb + 0.5), world(s, ua + 0.05, ya + 0.5), world(s, ua + 0.05, ya + 0.84), world(t, ub + 0.05, yb + 0.84), BACK);
      // posts and reflectors cast no shadow (the beam's shadow line on the road is the one you see): with them out of the
      // shadow passes the rail costs those passes less than the old flat one did
      G.color.noShadow = true;
      const q = world(s, ua - 0.04, ya);
      G.color.cyl(q[0], ya, q[2], 0.055, 0.055, 0.8, 6, POST, false); // (no caps: never seen)
      if (Math.round(s / 2) % 2 === 0) { const c0 = world(s, ua + 0.035, ya + 0.64), c1 = world(s + 0.09, ua + 0.035, ya + 0.64); G.color.quad(c1, c0, [c0[0], c0[1] + 0.07, c0[2]], [c1[0], c1[1] + 0.07, c1[2]], REFL); }
      G.color.noShadow = false;
    }
  }

  *placeCity(G, r, s0, s1, matAt, onGround, road, rwAt, walkW, H, ground, ox, oz) {
    for (const side of [-1, 1]) {
      let s = s0 + r() * 2;
      while (s < s1 - 2) {
        { const wz = zoneW(s); if (wz.city < 0.62 || wz.mountain > 0.1 || nearB(s, T_HALF + 6)) { s += 4; continue; } } // not into the mountain's rising slope, nor a border tunnel's mouth
        { const cx = crossingNear(s + 6); if (cx && s < cx.s + 8.5 && s + 14 > cx.s - 8.5) { s = Math.max(s + 1, cx.s + 8.5); continue; } }
        const k0 = 2 * Math.round(s / 300), c0 = k0 * 150; // (the nearest opening)
        if (s > c0 - mouthA(k0) && s < c0 + mouthB(k0)) { s = c0 + mouthB(k0) + 0.05; continue; } // a side street or an alley opens here
        const rw = rwAt(s), sw = walkW(s) || 3.0, front = rw + sw + 0.15;
        const t = r();
        // a shopping street (商店街): an unbroken row of 町家 shophouses, timber or plastered, as in the reference art, with
        // now and then a modern shop, a block of flats, a konbini or a house between them (no empty lots or gaps: the
        // offices and the taller flats stand in the row behind). The first stretch of the drive is shophouses only.
        const type = s < 420 || t < 0.84 ? 'machiya' : t < 0.89 ? 'shop' : t < 0.93 ? 'apt' : t < 0.96 ? 'konbini' : 'house';
        let w = type === 'shop' ? r.range(5, 9) : type === 'machiya' ? r.range(6, 9.5) : type === 'apt' ? r.range(10, 16) : type === 'house' ? r.range(7, 9.5) : r.range(12, 14);
        if (s + w > s1) { if (s1 - s < 5 || type === 'konbini') break; w = s1 - s - 0.2; }
        { const k1 = s < c0 ? k0 : k0 + 2, gap = k1 * 150 - mouthA(k1); // never build into the next opening
          if (s + w > gap - 0.1) { if (gap - 0.1 - s < 4) { s = k1 * 150 + mouthB(k1) + 0.05; continue; } w = gap - 0.1 - s; } }
        // (the opening view's near-right shophouse is plastered, as the painting's beside the car: one random number, as before)
        const sm = s + w / 2, e = road(sm), tint = r.pick(P.TINTS), litP = 0.42, plaster = type === 'machiya' && (r() < 0.6 || (side > 0 && s < 150 && s + w > 132));
        {
          const M = matAt(sm, side * front, e + 0.15);
          const spec = { type, w, at: sm, side, d: type === 'apt' ? r.range(10, 14) : r.range(8, 12), // (at, side: where it stands, for the opening view)
            floors: type === 'shop' ? r.int(2, 4) : type === 'machiya' ? (r() < 0.45 ? 2 : 3) : type === 'apt' ? r.int(4, 9) : 2, tint: plaster ? P.PLASTER[Math.floor(r() * P.PLASTER.length)] : tint, litP, plaster, fence: type === 'house' && r() < 0.5 ? 1.2 : 0 };
          P.building(G, M, r, spec);
          if (type !== 'house' && r() < 0.28) P.vendingMachine(G, matAt(sm + (r() - 0.5) * (w - 1.2), side * (front - 0.42), e + 0.15), r);
          if ((type === 'shop' || type === 'konbini' || type === 'machiya') && r() < 0.3) for (let b = 0; b < 1 + r() * 3; b++) P.bicycle(G, matAt(sm - w / 2 + 0.8 + b * 0.55, side * (front - 0.75), e + 0.15, Math.PI / 2 + 0.1), r);
          if (type === 'house' && r() < 0.6) for (let p = 0; p < 2 + r() * 3; p++) P.pottedPlant(G, matAt(sm + 1 + p * 0.5, side * (front - 0.3), e + 0.15), r);
          if (r() < 0.03 && (sm < 120 || sm > 170)) for (let k = 0; k < 3; k++) P.cone(G, matAt(sm + k * 0.9, side * (rw + 0.35), e)); // (none in the opening view: the painting's kerb is clear)
        }
        s += w + r.range(0.05, 0.5);
        yield;
      }
      // second row: the city painting's tall pale blocks (6–12 storeys) right behind the shophouses, almost unbroken, so the
      // street runs into a canyon of them from the middle distance on and the sky is a narrow V between them (it was a block
      // of flats every 14–26 m, a third of them left out, and far towers 55–150 m out: the sky opened wide over an even
      // two-storey row and the street's far end was a low haze). Plain painted boxes (props.js block), ~50 quads each (a
      // denser row of the old flats, ~400 quads each with their balconies, cost 1.9 ms a frame). Each stays inside its chunk
      // (the chunk's last one reaches its end), so neighbouring chunks never overlap; none in a side street's mouth, where
      // its own houses stand. The blocks draw their own random numbers; outside the city the old row's are drawn as before,
      // so every other zone's layout stays as it was
      if (Math.max(zoneW(s0).city, zoneW(s1).city) < 0.7) { for (let s2 = s0 + r() * 10; s2 < s1 - 8; s2 += r.range(14, 26)); continue; }
      const br = rng(Math.floor(hash2(Math.round(s0 / CH), side > 0 ? 2741 : 2749) * 4294967295));
      for (let s2 = s0 + 0.3; s2 < s1 - 6;) {
        let w = br.range(10, 18); if (s1 - 0.3 - (s2 + w) < 9) w = s1 - 0.3 - s2;
        const sm = s2 + w / 2, c0 = 300 * Math.round(sm / 300), wz = zoneW(sm);
        if (Math.min(zoneW(s2).city, zoneW(s2 + w).city) < 0.7 || wz.mountain > 0.1 || nearX(sm, 14 + w / 2) || (s2 < c0 + 14 && s2 + w > c0 - 14) || nearB(s2, T_RIDGE + 15)) { s2 += 6; continue; }
        const rw = rwAt(sm), u = rw + 3.15 + 12.6 + br() * 2.5, t = br(), fl = t < 0.2 ? 6 : t < 0.5 ? 8 : t < 0.8 ? 10 : 12, kd = br();
        P.building(G, matAt(sm, side * u, road(sm) + 0.1), br, { type: 'block', w, d: br.range(10, 16), floors: fl, tint: br.pick(P.BLOCK_TINTS), litP: 0.4, near: -side,
          kind: kd < 0.35 ? 'A' : kd < 0.65 ? 'B' : 'C', endKind: br() < 0.7 ? 'D' : kd < 0.35 ? 'A' : 'B' });
        s2 += w + br.range(0.3, 2.5);
      }
      yield;
    }
    // side streets and alleys; signs and mirrors at the crossings
    const k0 = Math.ceil(s0 / 150), k1 = Math.floor((s1 - 0.01) / 150);
    for (let k = k0; k <= k1; k++) {
      const sc = k * 150; if (!openX(k) || zoneAt(sc) !== 'city' || zoneW(sc).mountain > 0.1 || nearB(sc, T_RIDGE + 40)) continue;
      const rw = rwAt(sc);
      yield* this.intersection(G, r, sc, k, matAt, road, rwAt, walkW, ground, ox, oz);
      if (!bigX(k)) continue; // (an alley has no signs)
      P.signPost(G, matAt(sc - 1, -(rw + 0.4), road(sc) + 0.15), 'sign_blue', 1);
      P.signPost(G, matAt(sc - 6, -(rw + 0.4), road(sc) + 0.15), 'sign_stop', 1, 2.1, 0.75);
      P.curveMirror(G, matAt(sc + 7, rw + 0.4, road(sc) + 0.15), -1);
      if (k % 8 === 4) P.signPost(G, matAt(sc + 20, -(rw + 0.4), road(sc) + 0.15), 'sign_speed', 1);
    }
  }

  /** round trees and bushes round a painted house at (s, u) (its front wall there, facing the road; `side` the road's
   *  side): a hedge of leafy bushes along its front (hedge: 1) or flowering ones (2), `beside` trees off its ends and
   *  `behind` trees beyond its back, as the reference paintings set them. (Its ends are along the road: s ± ww/2.) */
  houseGarden(G, r, s, u, side, T, onGround, hedge, beside, behind) {
    const hw = T.ww / 2;
    if (hedge) for (let x = -hw - 0.6; x < hw + 0.6; x += r.range(1.2, 1.9)) {
      if (Math.abs(x) < 0.9 && hedge === 1 && r() < 0.7) continue; // (a gap by the door, mostly)
      const m = onGround(s + x, u - side * r.range(1.1, 1.7), 0, r() * 6, false);
      if (hedge === 2 && r() < 0.6) P.flowerBush(G, m, r, r.range(0.75, 1.0)); else P.bush(G, m, r, r.range(0.5, 0.75));
    }
    for (let k = 0; k < beside; k++) { // off one end or the other, a little back from the front
      const e = (k % 2 ? -1 : 1) * (r() < 0.5 ? 1 : -1);
      P.tree(G, onGround(s + e * (hw + r.range(3.2, 5.5)), u + side * r.range(1, T.wd), 0, r() * 6), 'broad', r, r.range(0.9, 1.25));
    }
    for (let k = 0; k < behind; k++) P.tree(G, onGround(s + r.range(-hw - 2, hw + 2), u + side * (T.wd + r.range(3.5, 7)), 0, r() * 6), 'broad', r, r.range(0.95, 1.3));
  }
  *placeSakura(G, r, s0, s1, matAt, onGround, road, rwAt, H) {
    // (the flower beds round the trees' feet draw their own random numbers: the rest of the layout is unchanged)
    const tb = rng(Math.floor(hash2(Math.round(s0 / CH), 2423) * 4294967295));
    for (const side of [-1, 1]) {
      for (let s = s0 + r() * 4; s < s1; s += r.range(7.5, 10)) {
        if (zoneW(s).sakura < 0.45 || nearR(s, 30)) continue;
        const rw = rwAt(s);
        // the avenue's trees face the road (a little turned, at random), so their crowns arch out over it
        P.tree(G, onGround(s, side * (rw + 3.7), 0, P.GHIBLI.bcells ? (r() - 0.5) * 0.6 : r() * 6), 'sakuraAve', r, r.range(1.05, 1.3));
        // 花壇 round most of their feet, as in the painting: two or three clumps of flowers on the lawn about the trunk
        if (zoneW(s).sakura > 0.6 && tb() < 0.65) {
          for (let k = 0, n = 2 + (tb() < 0.4 ? 1 : 0), a0 = tb() * 6.28; k < n; k++) {
            const a = a0 + (k / n) * 6.28 + (tb() - 0.5) * 1.2, d = tb.range(0.75, 1.15), uu = Math.max(rw + 2.9, rw + 3.7 + Math.sin(a) * d * 0.8);
            const m = onGround(s + Math.cos(a) * d, side * uu, 0, tb() * 6.28, false);
            if (tb() < 0.6) P.flowerBed(G, m, tb, tb.range(1.2, 1.55)); else P.flowerBush(G, m, tb, tb.range(0.5, 0.65));
          }
        }
        if (r() < 0.45) P.tree(G, onGround(s + 3, side * (rw + r.range(9, 18)), 0, r() * 6), 'sakura', r, r.range(0.9, 1.25));
      }
      yield;
      for (let s = s0 + (side > 0 ? 0 : 12); s < s1; s += 24) {
        if (zoneAt(s) !== 'sakura' || nearR(s, 30)) continue;
        const rw = rwAt(s);
        P.oldLamp(G, matAt(s, side * (rw + 2.25), road(s) + 0.15));
        if (mod(s, 48) < 24) P.stoneLantern(G, matAt(s + 6, side * (rw + 3.0), H(s + 6, side * (rw + 3.0))));
      }
      for (let s = s0 + r() * 15; s < s1; s += r.range(14, 24)) {
        if (zoneAt(s) !== 'sakura' || r() < 0.35 || nearR(s, 45)) continue;
        const rw = rwAt(s), T = P.houseType('sakura', r);
        if (!T) { P.building(G, onGround(s, side * (rw + r.range(20, 30))), r, { type: 'house', w: r.range(8, 11), d: r.range(7, 9), floors: r() < 0.6 ? 2 : 1, tint: r.pick(P.TINTS), litP: 0.45, fence: r() < 0.6 ? 1.4 : 0 }); continue; }
        // the painted two-storey houses behind the trees, as in the sakura painting: a block wall in front, or a hedge
        const u = side * (rw + r.range(19, 26)), fence = r() < 0.45 ? 1.4 : 0;
        P.building(G, onGround(s, u), r, { type: 'house', w: T.ww, d: T.wd, ptype: T, fence });
        this.houseGarden(G, r, s, u, side, T, onGround, fence ? 0 : 1, 0, 0); // (no trees: the avenue's are enough, and cost)
      }
    }
    const k = Math.floor((s0 + CH / 2) / 480);
    const st = k * 480 + 240;
    if (st >= s0 && st < s1 && zoneAt(st) === 'sakura' && !nearR(st, 60)) P.torii(G, matAt(st, 0, road(st), 0, false), rwAt(st) + 1.6, 6.4);
  }

  /** where the coast's sea wall stands in the sea with its surf: from 70% of the way into the coast in its transitions,
   *  and not where a tunnel's headland runs out into the sea (its spur stands above the water to ~T_RIDGE + 7 m from the
   *  tunnel's middle) */
  coastWall(s) { return zoneW(s).coast >= 0.7 && !nearT(s, T_RIDGE + 14); }
  /** …and where the water along a sea wall runs: the coast's, or the Bosphorus's (it has no tetrapods) */
  seaWall(s) { const w = zoneW(s); return w.coast + w.bosphorus >= 0.7 && !nearT(s, T_RIDGE + 14); }
  /** 消波ブロック: chunk c's heaps of tetrapods at the foot of the sea wall (their own random numbers, so the rest of the
   *  layout is unchanged): every 12–26 m, 4.5–11 m long, two or three rows deep. Cached: the water strip's foam gathers
   *  round the heaps of the chunks either side as well */
  coastHeaps(c) {
    let hs = this.heapCache.get(c); if (hs) return hs;
    hs = [];
    const hr = rng(Math.floor(hash2(c, 5501) * 4294967295)), s0 = c * CH, s1 = s0 + CH;
    for (let s = s0 + 1 + hr() * 12; s < s1 - 3; s += hr.range(12, 26)) {
      const L = hr.range(1.25, 1.5), len = hr.range(4.5, 11), rows = hr() < 0.4 ? 3 : 2, sb = Math.min(s + len, s1 - 0.5);
      if (!this.coastWall(s) || !this.coastWall(sb)) continue;
      hs.push({ sa: s, sb, L, rows, dOut: (0.8 + (rows - 1) * 1.45 + 0.95) * L }); // (dOut: its face to the sea, from the wall)
    }
    if (this.heapCache.size > 48) this.heapCache.clear();
    this.heapCache.set(c, hs);
    return hs;
  }
  /** 海沿いの道 (the reference art's coast road): the sea right against the sea wall (path.js), tetrapods heaped at its
   *  foot with the surf breaking over them, and the water along the wall with its foam; on the land side big round
   *  broadleaf trees on the green slope (a few pines), houses and lamps; boats and a lighthouse out at sea */
  *placeCoast(G, r, c, s0, s1, matAt, onGround, rwAt, shore, world) {
    const path = this.path, f = {};
    // the tetrapods: piled two or three deep against the wall, the first row standing half out of the water (their legs
    // in the surf), the rows further out lower, a few more wedged on top; contact shading darkens them at the water line
    const heaps = this.coastHeaps(c), tr = rng(Math.floor(hash2(c, 5507) * 4294967295)), sw = mod(s0, S_WRAP) - s0;
    for (const h of heaps) {
      const L = h.L;
      for (let k = 0; k < h.rows; k++) {
        const dm = 0.8 * L + k * 1.45 * L, y0 = (k === 0 ? 0.28 : k === 1 ? 0.0 : -0.3) * L;
        for (let ss = h.sa + tr() * 0.7 * L; ss < h.sb; ss += 1.5 * L * tr.range(0.88, 1.12)) {
          const rw = rwAt(ss), p = world(ss, -(rw + WALL_U + dm + (tr() - 0.5) * 0.45 * L), 0);
          P.tetrapod(G, p[0], SEA + y0 + (tr() - 0.5) * 0.3 * L, p[2], tr, L * tr.range(0.92, 1.08), SEA - 0.7, k === 0 ? 0.8 : 0.45, ss + sw);
          if (k === 0 && h.rows > 1 && tr() < 0.4) {
            const q = world(ss + 0.7 * L, -(rw + WALL_U + dm + 0.72 * L), 0);
            P.tetrapod(G, q[0], SEA + 1.05 * L, q[2], tr, L * tr.range(0.9, 1.0), SEA - 0.7, 0.6, ss + sw);
          }
        }
      }
      // the surf: burst points along the heap's face to the sea, where the waves hit it (surf.js throws up the spray)
      const n = Math.max(3, Math.round((SURF.n * (h.sb - h.sa + 2)) / 7));
      for (let i = 0; i < n; i++) {
        const ss = h.sa + ((h.sb - h.sa) * (i + 0.5)) / n + (tr() - 0.5) * 1.4, rw = rwAt(ss);
        path.at(ss, f);
        const p = world(ss, -(rw + WALL_U + h.dOut * (0.8 + 0.3 * tr()) - 0.2), SEA + 0.35); // (at its face to the sea, a little either side)
        shore.puffs.push(p[0], p[1], p[2], -f.rx, -f.rz, h.dOut, tr(), ss + sw);
      }
      yield; // (a heap at a time: a chunk's blocks all at once made a long world-build step on phones)
    }
    // the water along the wall, out to 38 m (SHORE_D), with how close a tetrapod heap is (its foam) and how far the
    // nearest break in the strip is (its waves fade out over 6 m there). s runs on from the chunk's start without wrapping,
    // so nothing jumps inside a chunk (the shader's patterns repeat with S_WRAP: the next chunk's start matches)
    const near = [...this.coastHeaps(c - 1), ...heaps, ...this.coastHeaps(c + 1)], sw0 = mod(s0, S_WRAP);
    // rows every 6 m (big triangles: small ones cost the GPU every pixel quad along their edges again, and this shader is
    // the sea's plus its waves), and rows where a heap's foam starts and ends, so it keeps its shape
    const rs = []; for (let i = 0; i <= 10; i++) rs.push(s0 + i * 6);
    for (const h of near) for (const q of [h.sa - 3.2, h.sa - 0.4, h.sb + 0.4, h.sb + 3.2]) if (q > s0 + 0.5 && q < s1 - 0.5) rs.push(q);
    rs.sort((p, q) => p - q);
    for (let i = 0; i < rs.length; i++) {
      const s = rs[i]; if (i > 0 && s - rs[i - 1] < 0.6) continue;
      if (!this.seaWall(s)) { if (shore.rows.length) break; continue; } // (one run: a gap only comes with a tunnel or a zone's end)
      let ef = 1; for (let k = 1; k <= 3; k++) if (!this.seaWall(s - 2 * k) || !this.seaWall(s + 2 * k)) { ef = (k - 1) / 3; break; }
      const rw = rwAt(s), row = new Float32Array(SHORE_D.length * 7);
      SHORE_D.forEach((d, j) => {
        const p = world(s, -(rw + WALL_U + d), SEA + 0.03);
        let hf = 0;
        for (const h of near) hf = Math.max(hf, (1 - sstep(0.4, 3.2, Math.max(h.sa - s, s - h.sb, 0))) * (1 - sstep(0.2, 3.4, d - h.dOut)));
        row.set([p[0], p[1], p[2], sw0 + (s - s0), d, hf, ef], j * 7);
      });
      shore.rows.push(row);
    }
    if (shore.rows.length) yield;
    // the land side: big round broadleaf trees on the green slope, as in the reference art (it was mostly pines), and a
    // few pines; nothing on the sea side any more (it is water). (The chunk's shared random numbers are drawn as before
    // outside the coast, walks and all, so every other zone's layout is unchanged; the coast's new things have their own)
    // the painting's house up the slope (its own random numbers): decided first, so the slope's trees stand clear of it
    const hq = rng(Math.floor(hash2(c, 5531) * 4294967295));
    let house = null;
    if (zoneAt(s0 + 30) === 'coast' && hq() < 0.5) {
      const s = s0 + hq() * CH, rw = rwAt(s);
      if (!nearT(s, T_RIDGE + 25)) house = { s, rw, T: P.houseType('coast', hq), u: rw + hq.range(11, 17) };
      if (house && Math.abs(zoneL(s) - COAST_HOUSE) < 34) house = null; // (the painting's house is there: below)
    }
    // (the coast painting's view, step 27: its two-storey house close above the road, ~45 m ahead of the audit place, its gable end
    // to the camera, its door and porch to the road, the slope's trees round it; in every coast pass)
    { const hs = Math.floor(s0 / ZONE_LEN) * ZONE_LEN + COAST_HOUSE;
      if (hs >= s0 && hs < s1 && zoneAt(hs) === 'coast' && !nearT(hs, T_RIDGE + 25)) { const rw = rwAt(hs); house = { s: hs, rw, T: P.paintingHouse(), u: rw + 10, paint: true }; } }
    for (let s = s0 + r() * 6; s < s1; s += r.range(5, 9)) {
      if (zoneAt(s) !== 'coast' || nearT(s, T_RIDGE + 6)) continue;
      const rw = rwAt(s), k = r();
      if (k >= 0.58) continue;
      const u = rw + r.range(4.5, 30);
      if (house && house.T && Math.abs(s - house.s) < house.T.ww / 2 + 2.5 && u > house.u - 3.5 && u < house.u + house.T.wd + 2.5) continue;
      // (the painting's house, step 27, wherever its chunk: its gable end clear against the slope, as painted: no slope tree in front of
      // it, off its side or just behind it; its own stand round it)
      { const dh = zoneL(s) - COAST_HOUSE; if (dh > -48 && dh < 30 && u < rw + 46) continue; }
      P.tree(G, onGround(s, u, 0, r() * 6, false), k < 0.48 ? 'broad' : 'pine', r, r.range(1.0, 1.4));
    }
    for (let s = s0 + 4; s < s1; ) s += r.range(18, 30); // (the old beach tetrapods' walk: its draws, as above)
    for (let s = s0 + 12; s < s1; s += 48) {
      if (zoneAt(s) !== 'coast' || nearT(s, T_RIDGE + 4)) continue;
      const rw = rwAt(s); P.streetLamp(G, onGround(s, rw + 1.0), r);
    }
    // 白い花の茂み: low round bushes in white flower along the verge, in ones, twos and threes, as in the reference art
    // (their own random numbers; clear of the poles and lamps)
    const fb = rng(Math.floor(hash2(c, 5519) * 4294967295));
    for (let s = s0 + fb() * 5; s < s1; s += fb.range(5, 11)) {
      if (zoneW(s).coast < 0.6 || nearT(s, T_RIDGE + 6)) continue;
      const n = 1 + Math.floor(fb() * 2.4);
      for (let k = 0; k < n; k++) { // (standing out of the verge's long grass, as in the painting)
        const ss = s + k * fb.range(1.1, 1.8), u = rwAt(ss) + fb.range(1.4, 2.5), a = fb() * 6.28, sc = fb.range(1.05, 1.45);
        const dp = ss - 6 - Math.round((ss - 6) / POLE_SP) * POLE_SP, dl = ss - 12 - Math.round((ss - 12) / 48) * 48;
        if (Math.abs(dp) < 1.4 || Math.abs(dl) < 1.2) continue;
        P.flowerBush(G, onGround(ss, u, 0, a, false), fb, sc);
      }
    }
    if (house) { // the coast painting's house up the green slope, among round trees, with flowering bushes in front
      const { s, rw, T, u } = house;
      // (the painting's: no tree off its near end, in front of its gable as seen from the road; its trees behind it and off its far end)
      if (T && house.paint) { // (its trees well behind it, so the gable end stands clear against them, as painted)
        P.building(G, onGround(s, u), hq, { type: 'house', w: T.ww, d: T.wd, ptype: T }); this.houseGarden(G, hq, s, u, 1, T, onGround, 2, 0, 0);
        for (const [ds, du, k] of [[T.ww / 2 + 4, -T.wd - 1, 1.3], [T.ww / 2 + 16, 2, 1.3], [-8, 30, 1.35]]) P.tree(G, onGround(s + ds + hq.range(-1, 1), u + T.wd + du + hq.range(-1, 1), 0, hq() * 6), 'broad', hq, k * hq.range(0.95, 1.08));
      } else if (T) { P.building(G, onGround(s, u), hq, { type: 'house', w: T.ww, d: T.wd, ptype: T }); this.houseGarden(G, hq, s, u, 1, T, onGround, 2, 1, 1); }
      else P.building(G, onGround(s, rw + hq.range(9, 16)), hq, { type: 'house', w: hq.range(7, 10), d: 8, floors: hq() < 0.5 ? 2 : 1, tint: hq.pick(P.TINTS), litP: 0.5, fence: 0 });
    }
    if (zoneAt(s0 + 30) === 'coast' && r() < 0.55) {
      const s = s0 + r() * CH; P.fishingBoat(G, matAt(s, -(rwAt(s) + r.range(45, 220)), SEA - 0.25, r() * 6, false), r); // (the painting's: step 27)
    }
    // (the coast painting's view, step 27: two small fishing boats out on the bay where it has them, seen from the audit place: at
    // their bearings and distances from its chase camera, whatever the road's bends)
    if (zoneL(s0) <= 1100 && zoneL(s0) + CH > 1100 && zoneAt(s0 + 30) === 'coast') {
      const zs = Math.floor(s0 / ZONE_LEN) * ZONE_LEN, a = world(zs + 1100 - 6.8, -1.4, 0), b = world(zs + 1100 + 22, -0.85, 0); // (chunk space)
      const fx = b[0] - a[0], fz = b[2] - a[2], fl = Math.hypot(fx, fz), Fx = fx / fl, Fz = fz / fl, Rx = -Fz, Rz = Fx;
      { const t = (TREE_R[0] * Math.PI) / 180, d = TREE_R[1], px = a[0] + d * (Math.cos(t) * Fx + Math.sin(t) * Rx), pz = a[2] + d * (Math.cos(t) * Fz + Math.sin(t) * Rz);
        // (the painting's big round tree on the slope right of its house; on the ground there: its s and u from the chunk's frame)
        const sl = zs + 1100 - 6.8 + d * Math.cos(t), ul = -1.4 + d * Math.sin(t), m = onGround(sl, ul, 0, 2.1, false);
        P.tree(G, m, 'broad', rng(4711), TREE_R[2]); }
      for (const [az, d, k] of BOATS) {
        const t = (az * Math.PI) / 180, px = a[0] + d * (Math.cos(t) * Fx + Math.sin(t) * Rx), pz = a[2] + d * (Math.cos(t) * Fz + Math.sin(t) * Rz);
        const m = new THREE.Matrix4().makeRotationY(Math.atan2(-Rz, Rx) + (az < -23 ? 0.15 : -0.2)); m.setPosition(px, SEA - 0.25, pz); m.groundY = SEA - 0.25;
        P.fishingBoat(G, m, rng(Math.floor(az * 100)), k, (k * 5.0) / 7.6); // (step 35h: the painted model at the painted size)
      }
    }
    const lh = Math.floor((s0 + CH / 2) / 1500) * 1500 + 700;
    if (lh >= s0 && lh < s1 && zoneAt(lh) === 'coast' && !nearT(lh, T_RIDGE * 1.6)) P.lighthouse(G, matAt(lh, -(rwAt(lh) + 75), SEA - 1, 0, false));
  }

  /** 海峡 / Boğaz (W2): the Bosphorus shore road at Arnavutköy, as its concept painting has it. The strait's side: the sea
   *  wall (path.js; its stone in materials.js Z_BOS) with an iron railing along its top, the water along it (placeCoast's
   *  strip: no tetrapods here), a city ferry out on the strait now and then. The land side: the verge's long grass with bushes
   *  in white flower, the stone pavement, the gardens' railings between stone posts, and the wooden houses climbing the
   *  slope in rows among round trees and cypresses; utility poles with their wires (placePoles), lamps, a flag on a tall pole
   *  now and then, Turkish road signs. On random numbers of its own (Japan's chunks never draw them) */
  *placeBosphorus(G, c, s0, s1, matAt, onGround, road, rwAt, world, ox, oz) {
    const bw = s => zoneW(s).bosphorus;
    if (bw(s0) < 0.25 && bw(s1) < 0.25) return;
    const path = this.path, f = {}, br = rng(Math.floor(hash2(c, 6101) * 4294967295));
    const ok = (s, m = 6) => bw(s) > 0.6 && !nearT(s, T_RIDGE + m);
    const offPole = (s, m) => Math.abs(s - 6 - Math.round((s - 6) / POLE_SP) * POLE_SP) >= m; // (the poles stand at s = 6 + 32k)
    // (the sea wall's railing on to where the Galata Bridge's begins, W3: the middle of the hand-over)
    const okR = s => ok(s, 4) || (zoneW(s).galata > 0 && bw(s) > 0.5);
    for (let s = s0; s < s1; s += 4) { if (okR(s + 2)) this.ironRailing(G, s, Math.min(s + 4, s1), world, road, rwAt); if (s - s0 === 28) yield; }
    yield;
    { const sm = Math.round((s0 + CH / 2) / 2.6) * 2.6; this.gardenFence(G, s0, sm, world, road, rwAt, s => ok(s, 4)); yield; this.gardenFence(G, sm, s1, world, road, rwAt, s => ok(s, 4)); }
    yield;
    // the verge: clumps of long grass along the asphalt, bushes in white flower (and a few plain ones) standing out of it
    G.leaf.setM(IDENT);
    const step = P.bankStep() * 1.3;
    for (let s = s0 + br() * step; s < s1; s += step * br.range(0.75, 1.25)) {
      if (!ok(s) || !offPole(s, 0.9)) continue;
      path.at(s, f); const rw = rwAt(s), u = rw + 0.75 + (br() - 0.5) * 0.3, y = f.y + groundOffsetMix(s, u, f.y, rw);
      const a = (br() - 0.5) * 0.8, ca = Math.cos(a), sa = Math.sin(a);
      P.bank(G, f.x + f.rx * u - ox, y, f.z + f.rz * u - oz, f.rx * ca + f.fx * sa, f.rz * ca + f.fz * sa, br, br.range(0.6, 0.8), 'bankC', BOS_VERGE);
    }
    for (let s = s0 + br() * 4; s < s1; s += br.range(2.6, 6)) { // (as the concept's: bushes in white flower all along it)
      if (!ok(s) || !offPole(s, 1.4)) continue;
      const m = onGround(s, rwAt(s) + br.range(0.75, 1.25), 0, br() * 6.28, false);
      if (br() < 0.8) P.flowerBush(G, m, br, br.range(0.95, 1.35)); else P.bush(G, m, br, br.range(0.45, 0.6));
    }
    yield;
    // the village climbing the hill on its terraces (path.js HILL), a row of houses on each, as the concept's: the painted
    // Ottoman houses (props.js trHouse) with their gable ends to the lane, each turned 34–57° back towards the drive so its
    // gable end shows nearly face on and its long side beside it, as painted; or, if their paintings failed, the
    // procedural ones (ottomanHouse) in the same places. Round trees and cypresses in the gardens between them, on the green
    // banks between the terraces and over the hill's top. Each house stays inside its chunk (no overlaps)
    // (the front of the row's houses: its nearest u, how far it wanders back, the share of gardens; on phones,
    // P.bankStep() > 1: the upper rows more gardens and fewer trees)
    const TRH = P.TR_HOUSES.types, lite = P.bankStep() > 1, VX = P.TR_HOUSES.extras, VC = ['trV1', 'trV2', 'trV3'].filter(n => VX[n]);
    // (the third terrace's houses only without the painted village strips: they stand there instead, below)
    const ROWS = VC.length ? [[11, 2, 0.12], [29.5, 2, 0.15]] : [[11, 2, 0.12], [29.5, 2, 0.15], [71, 2, 0.2], [88, 2.5, 0.3]];
    let nh = 0;
    for (const [u0, du, gap] of ROWS) {
      let sFree = s0 + 0.3 + br() * 2; // (the row is taken up to here)
      for (;;) {
        // (the weathered brown and grey boards twice as often as the cream and ochre paint and plaster, as the concept's)
        const T = TRH ? TRH[Math.min(trPick(br()), TRH.length - 1)] : null, a = br.range(0.6, 1.0), sc = br.range(0.94, 1.06);
        const w = (T ? T.ww : br.range(6, 7.5)) * sc, d = (T ? T.wd : br.range(7.5, 9)) * sc, j = (T ? T.j : 1.2) * sc, ca = Math.cos(a), sa = Math.sin(a);
        // its footprint along the road (the house turned by a: local x runs along the road turned towards it, z up the hill
        // turned forward) and across it, from its front's middle
        const sMin = -(w / 2 + 0.4) * ca - j * sa, sMax = (w / 2 + 0.4) * ca + d * sa, uMin = -(w / 2 + 0.4) * sa - j * ca;
        const s = sFree + br.range(0.3, 2.2) - sMin;
        if (s + sMax > s1 - 0.3) break;
        sFree = s + sMax;
        const rw = rwAt(s), u = u0 - uMin + br() * du; // (its nearest corner at u0 … u0 + du from the road's middle)
        if (!ok(s + sMin, 12) || !ok(s + sMax, 12)) continue;
        if (br() < gap + (lite && u0 > 25 ? 0.3 : 0)) { // a garden: a round tree, or a cypress
          P.tree(G, onGround(s, u + br.range(1, 5), 0, br() * 6), br() < 0.5 ? 'broad' : 'cypress', br, br.range(0.85, 1.2));
          continue;
        }
        const M = onGround(s, u, -0.1, a);
        if (T) { if (sc !== 1) M.multiply(_sc.makeScale(sc, sc, sc)); P.trHouse(G, M, br, T); }
        else P.ottomanHouse(G, M, br, { w, d, floors: br() < 0.3 ? 3 : 2, wood: Math.floor(br() * 4), plaster: Math.floor(br() * 3), stone: br() < 0.5, pastel: br() < 0.2 ? Math.floor(br() * 4) : -1, cumba: br() < 0.6, gable: true, litP: 0.5, flag: u0 < 20 && br() < 0.1 });
        // the front garden (the first row's): bushes, in flower or plain, between the railings and the house
        if (u0 < 20) for (let k = br() < 0.5 ? 1 : 2; k > 0; k--) { const m = onGround(s + br.range(-3, 3), br.range(9.2, u + uMin - 0.8), 0, br() * 6.28, false); if (br() < 0.55) P.flowerBush(G, m, br, br.range(0.8, 1.2)); else P.bush(G, m, br, br.range(0.5, 0.8)); }
        // a round tree or a cypress beside it, as the concept's between the houses
        if (br() < (lite ? 0.3 : 0.5)) P.tree(G, onGround(s + sMax + 0.6, u + br.range(2, 8), 0, br() * 6), br() < 0.45 ? 'cypress' : 'broad', br, br.range(0.8, 1.15));
        if (++nh % 2 === 0) yield; // (two houses a step: a row at once made long world-build steps on phones)
      }
      yield;
    }
    // the village higher up the hill, as the concept paints it (the painted strips: props.js trVillage), on the third terrace:
    // big cards, each turned 24–33° from along the road towards the drive (its left end, as seen from the road, ahead and
    // lower down, its right end behind and up the hill, as the paintings rise), overlapping, one every ~58 m
    if (VC.length) {
      const SP = 58;
      for (let k = Math.ceil((s0 - 10 - 7) / SP); k * SP + 10 - 7 < s1; k++) {
        const sc = k * SP + 10 + (hash2(k, 6151) - 0.5) * 14; if (sc < s0 || sc >= s1 || !ok(sc, 45)) continue;
        const cell = VC[Math.floor(hash2(k, 6153) * VC.length)], info = VX[cell], W = info.w * (0.92 + 0.16 * hash2(k, 6157)), Hh = (info.h * W) / info.w;
        const a = 0.42 + 0.16 * hash2(k, 6159), uc = 81 + (hash2(k, 6163) - 0.5) * 6, ca = Math.cos(a), sa = Math.sin(a);
        const sL = sc + (W / 2) * ca, uL = uc - (W / 2) * sa, sR = sc - (W / 2) * ca, uR = uc + (W / 2) * sa;
        const y = onGround(sL, uL).groundY - 2.5; // (its foot a little into the terrace)
        P.trVillage(G, world(sL, uL, y), world(sR, uR, y), Hh, cell);
      }
    }
    // the green banks between the terraces: round trees and cypresses (and over the hill's top, without the village strips).
    // On the first bank, under the second row, few and small: tall crowns there hid the row above and the strips; on the
    // second, below the strips, fewer and smaller, mostly round
    for (const [ua, ub, step, pb, sc0, sc1] of [[23.5, 28.5, 26, 0.5, 0.7, 0.95], VC.length ? [45.5, 58, 24, 0.8, 0.75, 1.0] : [45.5, 68, 11, 0.5, 1.0, 1.35], ...(VC.length ? [] : [[105, 160, 9, 0.5, 1.0, 1.35]])]) {
      for (let s = s0 + br() * step; s < s1; s += br.range(0.7, 1.3) * step) {
        if (!ok(s, 12) || (lite && br() < 0.4)) continue;
        P.tree(G, onGround(s, br.range(ua, ub), -0.3, br() * 6, false), br() < pb ? 'broad' : 'cypress', br, br.range(sc0, sc1));
      }
    }
    for (let s = s0 + br() * 3; s < s1; s += br.range(2, 4.5)) { // (bushes on the steep bank under the second row, as the concept's green between its rows)
      if (!ok(s, 12) || (lite && br() < 0.4)) continue;
      const m = onGround(s, br.range(23.2, 28.8), -0.15, br() * 6.28, false); if (br() < 0.3) P.flowerBush(G, m, br, br.range(0.9, 1.3)); else P.bush(G, m, br, br.range(0.7, 1.1));
    }
    yield;
    // lamps along the pavement; the flag on its pole; the speed limit and the next places' sign (traffic keeps right: on the right)
    for (let s = Math.ceil((s0 - 18) / 40) * 40 + 18; s < s1; s += 40) if (ok(s, 4) && offPole(s, 2)) P.streetLamp(G, onGround(s, rwAt(s) + 1.75), br);
    { const sf = Math.floor((s0 + CH / 2) / 360) * 360 + 140; if (sf >= s0 && sf < s1 && ok(sf, 10) && offPole(sf, 3)) P.flagPole(G, onGround(sf, rwAt(sf) + 3.4), 9.5); }
    { const sl = Math.floor((s0 + CH / 2) / 420) * 420 + 60; if (sl >= s0 && sl < s1 && ok(sl, 10) && offPole(sl, 2)) P.trSign(G, matAt(sl, rwAt(sl) + 1.9, road(sl) + 0.12), 'trSign50', 2.2, 0.62, 0.62); }
    { const sd = Math.floor((s0 + CH / 2) / 1500) * 1500 + 330; if (sd >= s0 && sd < s1 && ok(sd, 10) && offPole(sd, 3)) P.trSign(G, matAt(sd, rwAt(sd) + 2.2, road(sd) + 0.12), 'trSignDir', 2.9, 2.2, 1.1); }
    // out on the strait: small fishing boats (the city ferries move: ferry.js)
    if (br() < 0.3 && ok(s0 + 20, 20)) { const s = s0 + br() * CH; P.boat(G, matAt(s, -(rwAt(s) + br.range(40, 160)), SEA - 0.25, br() * 6, false), br); }
  }
  /** the Bosphorus's iron railing along the sea wall's top: square posts every 2 m, a top rail and a middle rail (thin boxes
   *  following the road), dark iron */
  ironRailing(G, sa, sb, world, road, rwAt) {
    const c = G.color; c.setM(IDENT);
    const n = Math.max(1, Math.round((sb - sa) / 2)), IRON = [0.16, 0.17, 0.19], UW = 1.78;
    for (let i = 0; i < n; i++) {
      const s = sa + ((sb - sa) * i) / n, t = sa + ((sb - sa) * (i + 1)) / n;
      const ua = -(rwAt(s) + UW), ub = -(rwAt(t) + UW), ya = road(s) - 0.04, yb = road(t) - 0.04;
      for (const [h, th, tw] of [[1.04, 0.05, 0.028], [0.56, 0.035, 0.018]]) {
        const P0 = (sv, u, y) => world(sv, u, y);
        c.quad(P0(s, ua + tw, ya + h - th), P0(t, ub + tw, yb + h - th), P0(t, ub + tw, yb + h), P0(s, ua + tw, ya + h), IRON); // (the road's side)
        c.quad(P0(t, ub - tw, yb + h - th), P0(s, ua - tw, ya + h - th), P0(s, ua - tw, ya + h), P0(t, ub - tw, yb + h), IRON); // (the strait's)
        c.quad(P0(s, ua + tw, ya + h), P0(t, ub + tw, yb + h), P0(t, ub - tw, yb + h), P0(s, ua - tw, ya + h), IRON); // (its top)
      }
      const q = world(s, ua, ya); c.box(q[0] - 0.028, ya, q[2] - 0.028, q[0] + 0.028, ya + 1.06, q[2] + 0.028, IRON);
    }
  }
  /** the gardens' railings along the pavement's back edge (u = rw + 4.6–4.9): a low dressed-stone kerb, stone posts with caps
   *  every 2.6 m, iron bars between them (faces to the road only, casting no shadow: they are finer than its texels) */
  gardenFence(G, s0, s1, world, road, rwAt, ok) {
    const c = G.color; c.setM(IDENT);
    const STONE = [0.8, 0.76, 0.68], CAP = [0.86, 0.83, 0.76], IRON = [0.17, 0.18, 0.2], U0 = 4.62, U1 = 4.92, Y0 = 0.12;
    // (panels on a 2.6 m grid of posts, clipped to [s0, s1): the pieces either side of a chunk's edge meet there)
    for (let p = Math.floor(s0 / 2.6) * 2.6; p < s1; p += 2.6) {
      const s = Math.max(p, s0), t = Math.min(p + 2.6, s1); if (t - s < 0.05 || !ok(s) || !ok(t)) continue;
      const ra = rwAt(s), rb = rwAt(t), ya = road(s) + Y0, yb = road(t) + Y0, kh = 0.28;
      c.quad(world(t, rb + U0, yb), world(s, ra + U0, ya), world(s, ra + U0, ya + kh), world(t, rb + U0, yb + kh), STONE); // (the kerb's face to the road)
      c.quad(world(s, ra + U1, ya + kh), world(t, rb + U1, yb + kh), world(t, rb + U0, yb + kh), world(s, ra + U0, ya + kh), CAP); // (its top)
      if (p >= s0) { const q = world(p, ra + (U0 + U1) / 2, ya); // (a post on the grid)
        c.box(q[0] - 0.17, ya, q[2] - 0.17, q[0] + 0.17, ya + 1.25, q[2] + 0.17, STONE); c.box(q[0] - 0.21, ya + 1.25, q[2] - 0.21, q[0] + 0.21, ya + 1.33, q[2] + 0.21, CAP); }
      c.noShadow = true;
      const um = (U0 + U1) / 2;
      for (let x = p + 0.3; x < p + 2.4; x += 0.17) { if (x < s || x >= t) continue; // the bars (on the posts' grid)
        const ru = rwAt(x), y = road(x) + Y0 + kh;
        c.quad(world(x + 0.012, ru + um, y), world(x - 0.012, ru + um, y), world(x - 0.012, ru + um, y + 0.85), world(x + 0.012, ru + um, y + 0.85), IRON);
      }
      c.quad(world(t, rb + um - 0.02, yb + kh + 0.8), world(s, ra + um - 0.02, ya + kh + 0.8), world(s, ra + um - 0.02, ya + kh + 0.88), world(t, rb + um - 0.02, yb + kh + 0.88), IRON); // (the top rail)
      c.noShadow = false;
    }
  }
  /** the real Galata zone where it is (step 35R): its weight half or more, clear of a border tunnel's mouth */
  galOn(s) { return zoneW(s).galata >= 0.5 && !nearB(s, T_RIDGE + 8); }
  /** …and its bridge's deck (its real 460 m) */
  galDeck(s) { return this.galOn(s) && galBridge(galL(s)); }
  /** Galata Köprüsü as it really is (step 35R: the approved route; OpenStreetMap, Commons photos, Street View as the reference), keeping
   *  right. On the bridge: the west walkway on our right behind its concrete kerb wall, its pale teal lattice railing along the deck's
   *  edge with the fishermen at it and the tall swan-necked lamps; on our left the strip of slabs and the tram line's lattice fence, the
   *  T1's masts between its tracks with their wires, the second fence, the northbound carriageway and the east walkway with its own
   *  railing and lamps; the lifting span's four control towers at the deck's outer edges beyond the walkways, and the red barriers
   *  across the walkways and the tram line there; small boats on the Golden Horn. Off it (Karaköy, Eminönü): the median's iron fence,
   *  the T1's masts and wires along the street. (Its buildings: placeGalBlocks.) On random numbers of its own (no other zone's chunks
   *  draw them) */
  *placeGalata(G, c, s0, s1, matAt, road, rwAt, world) {
    if (zoneW(s0).galata < 0.25 && zoneW(s1).galata < 0.25) return;
    const gr = rng(Math.floor(hash2(c, 6301) * 4294967295)), on = s => this.galOn(s), dk = s => this.galDeck(s), land = s => on(s) && !dk(s);
    const zs = s0 - galL(s0), Gs = {}, sect = s => galSect(galL(s), rwAt(s), Gs), TW = GR.towers;
    const nearTower = (s, m = 3) => { const l = s - zs; return TW.some(t => l > t[0] - m && l < t[1] + m); };
    // the railings on the bridge: [u at s, the cell, its tint, its foot over the road, its height]: the west walkway's along the deck's
    // edge (pale teal), the tram line's fence on the strip by our road and the second one beyond the tracks (grey-teal, lower), the
    // east walkway's (pale teal)
    const TEAL = [0.62, 0.86, 0.86], FENCE = [0.62, 0.72, 0.74];
    for (const [ua, cell, tint, y0, ht, cut] of [[s => rwAt(s) + GAL_WALK - 0.15, 'galRailL', TEAL, 0.18, 1.18, true], [s => sect(s).med - 0.1, 'galRailL', FENCE, 0.18, 1.0, false],
      [s => sect(s).t1 - 0.15, 'galRailL', FENCE, 0.18, 1.0, false], [s => -(GAL_L - 0.15), 'galRailL', TEAL, 0.18, 1.18, true]]) {
      this.galRailing(G, s0, s1, world, road, ua, y0, cell, s => dk(s) && !(cut && nearTower(s, 0.5)), tint, ht);
      yield;
    }
    // the walkways' concrete kerb walls along the road (as the real ones: ~45 cm, rounded): ours, and the east walkway's
    for (let p = Math.floor(s0 / 2.6) * 2.6; p < s1; p += 2.6) {
      const a = Math.max(p, s0), b = Math.min(p + 2.6, s1); if (b - a < 0.05 || !dk(a) || !dk(b)) continue;
      for (const [ua, sd] of [[s => rwAt(s) + 0.16, 1], [s => sect(s).n1 - 0.16, -1]]) {
        const y = road(a) + 0.18, y2 = road(b) + 0.18, u0 = ua(a), u1 = ua(b), w = 0.14, h = 0.42, K = C_KERB;
        G.color.setM(IDENT);
        // (its face to the carriageway (at u − sd·w, facing −sd·R) and its face to the walkway (at u + sd·w, facing +sd·R))
        const fa = (uu0, uu1, out, col) => (out > 0 ? G.color.quad(world(a, uu0, y), world(b, uu1, y2), world(b, uu1, y2 + h), world(a, uu0, y + h), col) : G.color.quad(world(b, uu1, y2), world(a, uu0, y), world(a, uu0, y + h), world(b, uu1, y2 + h), col));
        fa(u0 - sd * w, u1 - sd * w, -sd, K); fa(u0 + sd * w, u1 + sd * w, sd, C_KERB2);
        G.color.quad(world(a, u0 - w, y + h), world(a, u0 + w, y + h), world(b, u1 + w, y2 + h), world(b, u1 - w, y2 + h), C_KERBT); // (its top, facing up)
      }
    }
    yield;
    // Kemeraltı Caddesi's median: its black iron fence (its posts every 2.6 m, finials, bars), off the bridge
    this.galIronFence(G, s0, s1, world, road, s => -rwAt(s) - 0.3, 0.15, s => land(s) && sect(s).med > -rwAt(s) - 1.5);
    yield;
    // Kemeraltı Caddesi's plane trees along our pavement, in its stretches of them (as the real ones), its black bollards along the
    // kerb; the T1's stops' shelters on their platforms (Karaköy's by the bridge, Eminönü's on Reşadiye Caddesi: galata.js GAL_STOPS)
    const lite = P.bankStep() > 1; // (phones and the embed: fewer trees, fewer far windows)
    for (let s = s0 + gr() * 14; s < s1; s += gr.range(13, 19) * (lite ? 1.6 : 1)) {
      const l = s - zs, k = gr(), sc = gr.range(1.0, 1.25);
      if (!land(s) || l < 30 || l > 430 || hash2(Math.floor(l / 70), 6311) < 0.3 || nearTower(s)) continue;
      P.tree(G, matAt(s, rwAt(s) + 2.9, road(s) + 0.15, k * 6, false), 'broad', gr, sc);
    }
    for (let p = Math.ceil(s0 / 2.6) * 2.6; p < s1; p += 2.6) { const l = p - zs; if (land(p) && l > 0 && l < 440 && Math.round(p / 2.6) % 6) P.bollard(G, matAt(p, rwAt(p) + 0.35, road(p) + 0.15)); }
    for (const [a, b] of GAL_STOPS) {
      // (its shelter along the stretch of the platform wide enough for it: Karaköy's narrows to nothing by the bridge's end)
      const sm0 = zs + (a + b) / 2; if (sm0 < s0 || sm0 >= s1 || !land(sm0)) continue;
      let r0 = NaN, r1 = NaN, wm = Infinity;
      for (let l = a + 3; l <= b - 3; l += 2) { const w = -(galSect(l, rwAt(zs + l), Gs).med + rwAt(zs + l)); if (w >= 3.4) { if (r0 !== r0) r0 = l; r1 = l; wm = Math.min(wm, w); } }
      if (!(r1 - r0 > 12)) continue;
      const sm = zs + (r0 + r1) / 2;
      { const X = G.prx, c0 = G.color; if (X) { G.color = X.w; G.shGlass = X.sg; } P.galShelter(G, matAt(sm, -rwAt(sm) - 0.4, road(sm) + 0.15), r1 - r0, Math.min(2.6, wm - 1.2)); G.color = c0; G.shGlass = null; } // (step 35P: painted by the plates, its glass as built)
    }
    yield;
    // the T1's masts every 30 m: on the bridge between its tracks, their lamps over both carriageways; along the street on the
    // median's side of the tracks (Kemeraltı's, their lamps over our road and the tracks); the contact wires between them
    const TZ = [0, 0], tz = s => { sect(s); TZ[0] = Gs.tn; TZ[1] = Gs.tf; return TZ; };
    for (let k = Math.ceil((s0 - 15) / 30); k * 30 + 15 < s1; k++) {
      const sk = k * 30 + 15; if (!on(sk) || (dk(sk) && nearTower(sk, 4))) continue;
      const g = sect(sk), onB = dk(sk), mz = onB ? (g.tn + g.tf) / 2 : g.med - 0.35;
      P.galMast(G, matAt(sk, 0, road(sk) + (onB ? 0.005 : 0.15), 0, false), mz, [g.tn, g.tf], onB ? 2 : 1);
      if (!on(sk + 30)) continue;
      G.color.setM(IDENT);
      const ta = [g.tn, g.tf], tb = tz(sk + 30).slice();
      for (let q = 0; q < 2; q++) {
        const zz = (k % 2 ? 0.18 : -0.18), y = road(sk), y2 = road(sk + 30);
        G.color.wire(world(sk, ta[q] + zz, y + 5.9), world(sk + 30, tb[q] - zz, y2 + 5.9), 0.03, 0.012, WIRE, 4);
        G.color.wire(world(sk, ta[q], y + 6.85), world(sk + 30, tb[q], y2 + 6.85), 0.42, 0.012, WIRE, 8);
      }
    }
    yield;
    // the walkways' lamp posts every 30 m, between the masts (at their outer railings, their necks out over the walkways)
    for (let sl = Math.ceil(s0 / 30) * 30; sl < s1; sl += 30) if (dk(sl) && !nearTower(sl, 2)) {
      P.galLamp(G, matAt(sl, rwAt(sl) + GAL_WALK - 0.32, road(sl) + 0.18));
      P.galLamp(G, matAt(sl, -(GAL_L - 0.32), road(sl) + 0.18));
    }
    // the four control towers by the lifting span, beyond the walkways' railings (GR.towers: [l0, l1, u0, u1] from OpenStreetMap's
    // outline of the span, its lower deck too: the towers out to the outline's outer edge), and the red barriers before them
    for (const t of TW) {
      const sm = zs + (t[0] + t[1]) / 2; if (sm < s0 || sm >= s1 || !dk(sm)) continue;
      const e = road(sm), sd = t[2] > 0 ? 1 : -1, uIn = sd > 0 ? rwAt(sm) + GAL_WALK : GAL_L, len = t[1] - t[0], dep = Math.min(14, Math.abs(t[3]) - uIn);
      // (step 35P: under the plates the towers are part of their proxy, with their front details in the layout's extras)
      { const X = G.prx, c0 = G.color, tm = matAt(sm, sd * uIn, e); if (X) G.color = X.w; P.galTower(G, tm, len, Math.max(8, dep), 11.5);
        if (X) { G.color = X.x; P.galTowerX(G, tm, len, Math.max(8, dep), 11.5); G.color = c0; } }
      // (a barrier across the walkway at the span's near end, and one across the tram's reserve)
      const sb = zs + t[0] - 3.5, g = sect(sb);
      if (sb >= s0 && sb < s1) P.galBarrier(G, matAt(sb, sd > 0 ? rwAt(sb) + GAL_WALK / 2 + 0.6 : -(GAL_L - 3.1), road(sb) + 0.18, Math.PI / 2), sd > 0 ? 4.6 : 5.2);
      if (sd < 0 && sb >= s0 && sb < s1) P.galBarrier(G, matAt(sb + 1.5, (g.t0 + g.t1) / 2, road(sb) + 0.005, Math.PI / 2, false), 6.6);
    }
    yield;
    // the lower deck's restaurant row under the walkways, as the real one (Commons photos 09, 10, 22–24, 42): its terraces' roofs just
    // under the walkways' railings, sloping out over the water, their fronts on the lower promenade (a bay every 5.2 m: its window band,
    // its awning in its restaurant's colours, its sign board), the promenade's pale blue railing along the water; not at the towers
    {
      const c = G.color, AWN = [[0.78, 0.16, 0.14], [0.16, 0.32, 0.62], [0.2, 0.46, 0.3], [0.86, 0.84, 0.8], [0.7, 0.42, 0.12]], ROOF = [0.55, 0.6, 0.64], FRONT = [0.82, 0.8, 0.74], GLASS = [0.18, 0.2, 0.24], RAIL = [0.55, 0.72, 0.8];
      c.setM(IDENT);
      for (let p = Math.floor(s0 / 5.2) * 5.2; p < s1; p += 5.2) {
        const a = Math.max(p, s0), b = Math.min(p + 5.2, s1); if (b - a < 0.05 || !dk(a) || !dk(b) || nearTower(a, 1) || nearTower(b, 1)) continue;
        const k = Math.floor(hash2(Math.round(p / 5.2), 6337) * AWN.length), aw = AWN[k], ya = road(a), yb = road(b);
        for (const sd of [1, -1]) {
          const e0 = sd > 0 ? rwAt(a) + GAL_WALK : -GAL_L, e1 = sd > 0 ? rwAt(b) + GAL_WALK : -GAL_L, o = 4.4, W = (s, u, y) => world(s, u, y);
          const q = (p0, p1, p2, p3, col) => (sd > 0 ? c.quad(p1, p0, p3, p2, col) : c.quad(p0, p1, p2, p3, col)); // (each facing up or out, over the water)
          // (its roof, sloping out; its front's sign band, awning, window band and its foot; the promenade's railing)
          q(W(a, e0, ya - 0.9), W(b, e1, yb - 0.9), W(b, e1 + sd * o, yb - 1.5), W(a, e0 + sd * o, ya - 1.5), ROOF);
          const fu0 = e0 + sd * o, fu1 = e1 + sd * o;
          q(W(b, fu1, yb - 2.3), W(a, fu0, ya - 2.3), W(a, fu0, ya - 1.5), W(b, fu1, yb - 1.5), [0.16, 0.2, 0.32]);
          q(W(b, fu1 + sd * 0.9, yb - 3.0), W(a, fu0 + sd * 0.9, ya - 3.0), W(a, fu0, ya - 2.35), W(b, fu1, yb - 2.35), aw);
          q(W(b, fu1, yb - 5.0), W(a, fu0, ya - 5.0), W(a, fu0, ya - 2.35), W(b, fu1, yb - 2.35), FRONT);
          q(W(b, fu1 + sd * 0.02, yb - 4.6), W(a, fu0 + sd * 0.02, ya - 4.6), W(a, fu0 + sd * 0.02, ya - 3.1), W(b, fu1 + sd * 0.02, yb - 3.1), GLASS);
          q(W(b, fu1 + sd * 3.0, yb - 4.1), W(a, fu0 + sd * 3.0, ya - 4.1), W(a, fu0 + sd * 3.0, ya - 4.02), W(b, fu1 + sd * 3.0, yb - 4.02), RAIL);
          q(W(b, fu1 + sd * 3.0, yb - 5.0), W(a, fu0 + sd * 3.0, ya - 5.0), W(a, fu0 + sd * 3.0, ya - 4.95), W(b, fu1 + sd * 3.0, yb - 4.95), RAIL);
          c.quad(W(a, fu0, ya - 5.0), W(b, fu1, yb - 5.0), W(b, fu1 + sd * 3.1, yb - 5.0), W(a, fu0 + sd * 3.1, ya - 5.0), [0.6, 0.6, 0.6]);
          c.quad(W(b, fu1, yb - 5.0), W(a, fu0, ya - 5.0), W(a, fu0 + sd * 3.1, ya - 5.0), W(b, fu1 + sd * 3.1, yb - 5.0), [0.6, 0.6, 0.6]);
        }
        lampAtW(G, world((a + b) / 2, rwAt(a) + GAL_WALK + 4.4, ya - 2.6));
      }
    }
    yield;
    // the fishermen at the west walkway's railing (on our right), in ones, twos and threes, facing the water; not before the towers
    for (let s = s0 + gr() * 6; s < s1; s += gr.range(4.5, 15)) {
      const n = 1 + (gr() < 0.45 ? 1 : 0) + (gr() < 0.15 ? 1 : 0);
      for (let k = 0; k < n; k++) {
        const ss = s + k * gr.range(0.9, 1.7), dl = ss - Math.round(ss / 30) * 30;
        if (!dk(ss) || Math.abs(dl) < 1.2 || ss >= s1 || nearTower(ss, 4)) continue;
        const rw = rwAt(ss), y = road(ss) + 0.18, yaw = (gr() - 0.5) * 0.5; // (his turn: drawn first, as it always was)
        P.fisherman(G, matAt(ss, rw + GAL_WALK - 0.62, y), gr, y, yaw, hash2(Math.floor(ss * 16), 6317));
      }
    }
    yield;
    // small boats out on the Golden Horn either side of the bridge
    if (gr() < 0.4 && dk(s0 + 30)) { const s = s0 + gr() * CH, sd = gr() < 0.5 ? -1 : 1; P.boat(G, matAt(s, sd < 0 ? -(GAL_L + gr.range(35, 170)) : rwAt(s) + GAL_WALK + gr.range(30, 170), SEA - 0.25, gr() * 6, false), gr); }
  }
  /** the real Galata zone's buildings near the road (step 35R): Karaköy's and Eminönü's blocks on their OpenStreetMap outlines
   *  (real_galata.js blk, sorted by where along the road; moved back to the pavements' edges where OSM had them nearer), each built
   *  whole by the chunk its middle falls in: its walls and flat roof in the colour material, a cornice; its faces towards the road
   *  with their shops and windows (props.js galFacade) */
  *placeGalBlocks(G, s0, s1, road, ox, oz) {
    if (zoneW(s0).galata < 0.25 && zoneW(s1).galata < 0.25) return;
    // (step 35P: under the plates, into the proxy's own GBs: the same buildings, their own meshes)
    const X = G.prx, c0 = G.color, f0 = G.fish, a0 = G.atlas, g0 = G.galf;
    if (X) { G.color = X.w; G.fish = X.wi; G.atlas = X.a; G.galf = X.g; G.galfS = X.gs; }
    try { yield* this.placeGalBlocks0(G, s0, s1, road, ox, oz, X); }
    finally { if (X) { G.color = c0; G.fish = f0; G.atlas = a0; G.galf = g0; G.galfS = null; if (X.a.world) a0.world = true; if (X.a.rooms) a0.rooms = true; } } // (the chunk's atlas mesh in its variant as before)
  }
  *placeGalBlocks0(G, s0, s1, road, ox, oz, X) {
    const zs = s0 - galL(s0), l0 = s0 - zs, l1 = s1 - zs, B = GR.blk, q = [0, 0], c = G.color, farWin = P_.bankStep() > 1 ? 40 : 70; // (the far walls' windows: phones nearer)
    // Yeni Cami (its outline's middle and the axis from its courtyard to its prayer hall: real_galata.js yeni)
    { const Y = GR.yeni, mid = Y && Y.l; if (Y && mid >= l0 && mid < l1 && this.galOn(zs + mid)) {
      const ctr = (pts) => { let x = 0, z = 0; for (const [E, N] of pts) { galWorld(zs, E, N, q); x += q[0]; z += q[1]; } return [x / pts.length - ox, z / pts.length - oz]; };
      const o = ctr(Y.outer), k = ctr(Y.court), dx = o[0] - k[0], dz = o[1] - k[1], d = Math.hypot(dx, dz) || 1, D = new THREE.Vector3(dx / d, 0, dz / d), X = new THREE.Vector3(D.z, 0, -D.x);
      const M = new THREE.Matrix4().makeBasis(X, new THREE.Vector3(0, 1, 0), D); M.setPosition(o[0] + (dx / d) * 1.0, road(zs + mid) - 0.4, o[1] + (dz / d) * 1.0); M.groundY = road(zs + mid) - 0.4;
      P_.yeniCami(G, M); yield;
    } }
    let n = 0;
    for (const b of B) {
      if (b.l < l0 || b.l >= l1 || !this.galOn(zs + b.l)) continue;
      if (eminSkip(b)) continue; // (step 35R-galata-2c: the Hünkâr Kasrı and its ramp: eminonu.js)
      // (step 35R-galata-2: its own painted front by its type (galata.js galType), its height the front's storeys; without the paintings as
      // it was)
      const ft = P_.GAL_F.on && this.M.atlasG ? galType(b) : null;
      const P = b.p.map(([E, N]) => { galWorld(zs, E, N, q); return [q[0] - ox, q[1] - oz]; }), m = P.length, y0 = road(zs + b.l) - 0.3, y1 = y0 + 0.3 + 0.15 + (ft ? P_.galFrontH(ft, b.lv) : b.h);
      // (its plaster, or a church's and a mosque's stone, a ferry terminal's white; with its painted front, the painting's wall)
      const vt = ft ? P_.galTint(ft, hash2(b.id, 6343)) : null; // (its own tint over its type's painting: the street's kinds of building)
      const tint = ft ? [P_.GAL_FT[ft].tint[0] * vt[0], P_.GAL_FT[ft].tint[1] * vt[1], P_.GAL_FT[ft].tint[2] * vt[2]] : b.k === 'church' || b.k === 'mosque' || b.k === 'tomb' ? C_STONE : b.k === 'pier' ? C_PIER : P_GALW[b.id % P_GALW.length], dark = [tint[0] * 0.8, tint[1] * 0.8, tint[2] * 0.82];
      // (the outline's winding, as seen from above in the world: the frame's x is the compass's mirror)
      let ar = 0, cx = 0, cz = 0; for (let i = 0; i < m; i++) { const [x0, z0] = P[i], [x1, z1] = P[(i + 1) % m]; ar += x0 * z1 - x1 * z0; cx += x0 / m; cz += z0 / m; }
      const out = ar > 0 ? 1 : -1; // (the walls' quads face out with the order kept, else reversed)
      c.setM(IDENT);
      // (step 35P: the built look's walls face in (their fronts cover the near ones, and through them the far walls' insides look like walls); the
      // plates' proxy needs them facing out, the faces its plates saw: under the plates they are wound the other way)
      const wo = X ? -out : out;
      for (let i = 0; i < m; i++) {
        const a = P[i], e = P[(i + 1) % m];
        if (wo > 0) c.quad([a[0], y0, a[1]], [e[0], y0, e[1]], [e[0], y1, e[1]], [a[0], y1, a[1]], i % 2 ? tint : dark);
        else c.quad([e[0], y0, e[1]], [a[0], y0, a[1]], [a[0], y1, a[1]], [e[0], y1, e[1]], i % 2 ? tint : dark);
      }
      // the roof: its outline triangulated (a parapet's band round it)
      const tri = THREE.ShapeUtils.triangulateShape(P.map(([x, z]) => new THREE.Vector2(x, z)), []);
      for (const [i, j, k] of tri) {
        const A_ = [P[i][0], y1, P[i][1]], B_ = [P[j][0], y1, P[j][1]], C_ = [P[k][0], y1, P[k][1]];
        const up = (B_[2] - A_[2]) * (C_[0] - A_[0]) - (B_[0] - A_[0]) * (C_[2] - A_[2]) > 0; // ((B−A)×(C−A)).y > 0
        if (up) c.quad(A_, B_, C_, C_, C_ROOF); else c.quad(A_, C_, B_, B_, C_ROOF);
      }
      // its fronts towards the road: each edge's own frame (x along it, −z out)
      // (and the other long walls their windows: the corners and the backs over the lower ones seen from the road)
      // (a church's, a mosque's, a ferry terminal's and the bazaar's walls their windows, no shops; the shops' fronts the blocks' only)
      if (ft || (b.k !== 'shed' && b.k !== 'site' && b.k !== 'tomb')) for (let i = 0; i < m; i++) {
        const fr = (ft || b.k === 'block') && b.f && b.f.includes(i) && (farWin > 40 || b.d < 40), a = P[i], e = P[(i + 1) % m], dx = e[0] - a[0], dz = e[1] - a[1], w = Math.hypot(dx, dz);
        // (step 35P: the plates' extras: a drive's (the shops' clutter, the cornice of a seen wall the built look leaves plain), or the
        // painter's layout's (PLATES.layout: every seen wall's storeys too))
        const built = !(w < (fr ? 2.5 : 4.5) || (!fr && b.d > farWin)), xtra = !!X && !!ft && w >= 2.0 && (fr || ((PLATES.layout || !built) && galExposed(b, i)));
        if (!built && !xtra) continue;
        const nx = (out > 0 ? dz : -dz) / w, nz = (out > 0 ? -dx : dx) / w; // (its outward normal)
        const M = new THREE.Matrix4().makeRotationY(Math.atan2(-nx, -nz)); M.setPosition((a[0] + e[0]) / 2, y0 + 0.3 + 0.15, (a[1] + e[1]) / 2);
        // (its x along the edge: the frame's x is (cos, −sin) of the turn; a front painted left to right, either way)
        if (built) {
          if (ft) P_.galFront(G, M, w, ft, b.lv, fr, vt);
          else P_.galFacade(G, M, rng(b.id * 131 + i), w, b.k === 'block' ? Math.max(2, b.lv) : Math.max(2, Math.round((b.h - 1) / 3.6)), tint, fr);
        }
        // (step 35P) the plates' layout: the painter keeps what it is given and invents nothing, so every wall the road sees wears its
        // building's storeys down to the ground (xg: a front's or a side's band under its storeys, or the whole of a wall the built look
        // leaves plain) and the shops their awnings, plants and signs (x). xg is the layout's alone (never drawn in a drive): a drive builds
        // of it only what stands out of the wall, the cornice (x)
        if (xtra) {
          const cg = G.color, gg = G.galf; G.color = X.x; G.galf = X.xg;
          if (fr) { if (built) P_.galShopProps(G, M, w, ft, b.lv, rng(b.id * 977 + i)); }
          else if (PLATES.layout) { if (!built) P_.galFront(G, M, w, ft, b.lv, false, vt); P_.galLow(G, M, w, ft, vt); }
          else P_.galFrontCornice(G, M, w, ft, b.lv, vt);
          G.color = cg; G.galf = gg;
        }
      }
      // (Surp Krikor Lusavoriç's drum and conical dome over its roof)
      if (ft === 'K') { const f = G.fish; f.setM(IDENT); P_.galKrikorDome(f, cx, y1, cz); }
      // (the Spice Bazaar's and a mosque's lead domes over their roofs: the bazaar's in a row along its long halls, a mosque's one great
      // dome and its minaret)
      if (b.k === 'tomb') { const f = G.fish; f.setM(IDENT); P_.galDome(f, cx, y1, cz, Math.min(5.5, Math.sqrt(Math.abs(ar) / 2) * 0.42)); }
      if (b.k === 'bazaar' || b.k === 'mosque') {
        const f = G.fish; f.setM(IDENT);
        if (b.k === 'mosque') { const r = Math.min(7, Math.sqrt(Math.abs(ar) / 2) * 0.32); P_.galDome(f, cx, y1, cz, r); P_.galMinaret(G, P[0][0] + (cx - P[0][0]) * 0.15, y0, P[0][1] + (cz - P[0][1]) * 0.15, y1 + 14); }
        else for (let i = 0; i < m; i++) { const a = P[i], e = P[(i + 1) % m], L = Math.hypot(e[0] - a[0], e[1] - a[1]); for (let t = 4; t < L - 3; t += 7) { const k = t / L, x = a[0] + (e[0] - a[0]) * k, z = a[1] + (e[1] - a[1]) * k, ix = x + (cx - x) * (5 / Math.max(5, Math.hypot(cx - x, cz - z))), iz = z + (cz - z) * (5 / Math.max(5, Math.hypot(cx - x, cz - z))); P_.galDome(f, ix, y1, iz, 2.4); } }
      }
      if (++n % 4 === 0) yield;
    }
  }
  /** the real Galata zone's open squares (step 35R): Karaköy's by the bridge's end and its fish market's quay beside it, Eminönü's round
   *  Yeni Cami and the tomb's garden east of it, as the real ones: their round trees in the open paving (not on the water, nor in a
   *  building: real_galata.js blk, their outlines), half as many on phones. (Their people: painted walkers to come, step 35f) */
  *placeGalSquares(G, c, s0, s1, matAt, road, rwAt) {
    if (zoneW(s0).galata < 0.25 && zoneW(s1).galata < 0.25) return;
    const zs = s0 - galL(s0), tr = rng(Math.floor(hash2(c, 6331) * 4294967295)), Gs = {};
    const inSq = (l, sd) => (l > 440 && l < 575) || (sd > 0 && l >= 575 && l < 700) || (l > 1045 && l < 1235);
    if (!inSq(s0 - zs, 1) && !inSq(s1 - zs, 1)) return;
    const l0 = s0 - zs, l1 = s1 - zs, B = GR.blk.filter(b => b.l > l0 - 100 && b.l < l1 + 100), lite = P.bankStep() > 1, bays = GR.park || []; // (the buildings near this chunk)
    // (a place in the open: on the square's land, not on the car park's bays (placeGalQuay), not in a building nor within 3 m
    // of its walls, nor on Yeni Cami's terrace (the model's own footprint: placeGalBlocks))
    const free = (sj, u, lj, sd) => {
      if (!inSq(lj, sd) || galWater(sj, u, lj)) return false;
      if (sd > 0 && lj > 545 && lj < 612 && bays.some(([bl, bu]) => Math.abs(bl - lj) < 2.8 && Math.abs(bu - u) < 4.2)) return false;
      this.path.at(sj, Gs); const F = galFrame(zs), x = Gs.x + Gs.rx * u - F.x, z = Gs.z + Gs.rz * u - F.z, N = F.s * x + F.c * z, E = -F.c * x + F.s * z; // (the point in the zone's frame: the inverse of galWorld)
      for (const b of B) if (Math.abs(b.l - lj) < 90 && nearPoly(E, N, b.p, 3)) return false;
      if (!eminFree(E, N)) return false; // (step 35R-galata-2c: clear of the kiosk)
      const Y = GR.yeni; if (Y && Math.abs(Y.l - lj) < 90) { const o = mid(Y.outer), k = mid(Y.court); let dx = o[0] - k[0], dy = o[1] - k[1]; const d = Math.hypot(dx, dy) || 1; dx /= d; dy /= d;
        const pz = (E - o[0] - dx) * dx + (N - o[1] - dy) * dy, px = (E - o[0] - dx) * -dy + (N - o[1] - dy) * dx; if (Math.abs(px) < 24.5 && pz > -43 && pz < 45) return false; }
      return true;
    };
    for (let s = Math.ceil(s0 / 13) * 13; s < s1; s += 13) {
      const l = s - zs; if (!inSq(l, 1) || !this.galOn(s)) continue;
      const rw = rwAt(s), g = galSect(l, rw, Gs);
      for (const sd of [-1, 1]) for (let k = 0; k < 6; k++) {
        const a = sd > 0 ? rw + g.pr + 4 + k * 12 + tr() * 6 : -g.p1 + 4 + k * 12 + tr() * 6, u = sd * a, sj = s + (tr() - 0.5) * 8, lj = sj - zs;
        // (Eminönü's right, round the tomb's garden: its plane trees thicker)
        const tp = (sd > 0 && lj > 1150 && lj < 1235 ? 0.42 : 0.26) * (lite ? 0.5 : 1), isT = tr() <= tp;
        if (isT && free(sj, u, lj, sd)) { P.tree(G, matAt(sj, u, road(sj) - 0.06, tr() * 6, false), 'broad', tr, tr.range(1.0, 1.35)); G.spots.push(sj, u, 1.6); } // (step 35f: nobody stands in it)
      }
    }
    yield;
  }
  /** Karaköy's fish market quay at the bridge's end, right (review 35R, OpenStreetMap): the İSPARK car park (Balıkçılar Önü), its asphalt
   *  and its bays' lines (rows back to back), three of the town's painted dolmuşes parked in it */
  *placeGalQuay(G, s0, s1, matAt, road, ox, oz) {
    if (zoneW(s0).galata < 0.25 && zoneW(s1).galata < 0.25) return;
    const zs = s0 - galL(s0), l0 = s0 - zs, l1 = s1 - zs; if (l1 < 540 || l0 > 720) return;
    // (its asphalt over the quay's paving, by the chunk its bays' middle falls in, and each bay's white lines)
    const PK = GR.parkP || [], bays = GR.park || [], lm = bays.length ? (bays[0][0] + bays[bays.length - 1][0]) / 2 : -1;
    if (PK.length > 2 && lm >= l0 && lm < l1 && this.galOn(zs + lm)) {
      const c = G.color, q = [0, 0], y = road(zs + lm) - 0.035, PP = PK.map(([E, N]) => { galWorld(zs, E, N, q); return [q[0] - ox, q[1] - oz]; });
      c.setM(IDENT); c.noShadow = true;
      for (const [i, j, k] of THREE.ShapeUtils.triangulateShape(PP.map(([x, z]) => new THREE.Vector2(x, z)), [])) {
        const A_ = [PP[i][0], y, PP[i][1]], B_ = [PP[j][0], y, PP[j][1]], C_ = [PP[k][0], y, PP[k][1]];
        if ((B_[2] - A_[2]) * (C_[0] - A_[0]) - (B_[0] - A_[0]) * (C_[2] - A_[2]) > 0) c.quad(A_, B_, C_, C_, C_ASPH); else c.quad(A_, C_, B_, B_, C_ASPH);
      }
      for (const [l, u] of bays) { c.setM(matAt(zs + l, u, y, 0, false)); c.box(-1.36, 0, -2.3, -1.24, 0.02, 2.3, C_BAY); }
      c.setM(IDENT); c.noShadow = false;
    }
    // (in three of its bays, nose to the road, the town's painted dolmuşes (step 35b: their model and atlas, M.atlasDol), the yellow and
    // the white; only the painted model: before it has loaded, or should it fail, the bays stay empty (review 35R: no box cars))
    if (P.DOLMUS.T) for (const [tl, tu, k] of GAL_DOL) {
      let bi = -1, bd = 1e9; bays.forEach(([l, u], i) => { const d = Math.hypot(l - tl, u - tu); if (d < bd) { bd = d; bi = i; } });
      if (bi < 0 || bd > 4) continue; const [l, u] = bays[bi]; if (l < l0 || l >= l1 || !this.galOn(zs + l)) continue;
      P.dolmus(G, matAt(zs + l, u, road(zs + lm) - 0.035, Math.PI / 2, false), k);
    }
    // (step 35h: on the water by the quay, the fish market's boats moored: kayıks and a motor boat; only the painted models: before they have
    // loaded, or should they fail, the quay stays empty (no box boats). No random numbers drawn)
    if (P.BOATS.tr) for (const [l, u, a, ty, lv] of GAL_MOOR) {
      if (l < l0 || l >= l1 || !this.galOn(zs + l)) continue;
      this.path.at(zs + l, _gp); const t = (a * Math.PI) / 180, dl = Math.cos(t), du = Math.sin(t), dx = _gp.fx * dl + _gp.rx * du, dz = _gp.fz * dl + _gp.rz * du;
      const m = new THREE.Matrix4().makeRotationY(Math.atan2(-dz, dx)); m.setPosition(_gp.x + _gp.rx * u - ox, SEA, _gp.z + _gp.rz * u - oz); m.groundY = SEA;
      P.mooredBoat(G, m, ty, lv);
    }
    yield;
  }
  /** Istanbul's people in the real Galata zone (step 35f): painted figures of the Istanbul cast (fishers.js, main.js: drawn once its sheet is
   *  in; without it nobody stands there), each in the chunk its place falls in, from a fixed list (GAL_PEOPLE: no random numbers drawn, so
   *  nothing else moves): not on the water, nor in a building or a tree, nor on a fisherman; their feet on the ground (the bridge's walkways
   *  0.18 m over the road) */
  placeGalPeople(G, s0, s1, road, rwAt, H, ox, oz) {
    if (zoneW(s0).galata < 0.25 && zoneW(s1).galata < 0.25) return;
    const zs = s0 - galL(s0), l0 = s0 - zs, l1 = s1 - zs; if (l1 < GAL_PEOPLE_L[0] || l0 > GAL_PEOPLE_L[1]) return;
    const F = G.fishers, T = G.spots, D2R = Math.PI / 180;
    for (const [l, ref, du, a, k] of GAL_PEOPLE) {
      let s = zs + l; if (l < l0 || l >= l1 || !this.galOn(s)) continue;
      const rw = rwAt(s), dk = this.galDeck(s), u = ref === 'L' ? -rw - 0.4 - du : ref === 'W' ? rw + du : ref === 'E' ? -(GAL_L - du) : du;
      if (dk ? ref !== 'W' && ref !== 'E' && ref !== 'L' : galWater(s, u, l)) continue; // (on the bridge only its walkways and the tram's strip; off it not on the water)
      // (at the walkway's railing: clear of its lamps (every 30 m) and of the fishermen here, stepping along it if one stands there)
      if (ref === 'W' && du > 4.5) {
        for (let t = 0; t < 4; t++) {
          this.path.at(s, _gp); const x = _gp.x + _gp.rx * u - ox, z = _gp.z + _gp.rz * u - oz; let hit = Math.abs(s - Math.round(s / 30) * 30) < 1.3;
          for (let i = 0; i + 7 < F.length && !hit; i += 8) hit = Math.hypot(F[i] - x, F[i + 2] - z) < 1.1;
          if (!hit) break; s += 1.4;
        }
        if (s >= s1) continue;
      }
      // (on the squares: not in a building (OpenStreetMap's outlines, a metre clear), nor on Yeni Cami's terrace, nor in a tree)
      if (ref === 'A') {
        this.path.at(s, _gp2); const Fr = galFrame(zs), x = _gp2.x + _gp2.rx * u - Fr.x, z = _gp2.z + _gp2.rz * u - Fr.z, N = Fr.s * x + Fr.c * z, E = -Fr.c * x + Fr.s * z;
        let bad = false;
        for (const b of GR.blk) if (Math.abs(b.l - l) < 90 && nearPoly(E, N, b.p, 1.0)) { bad = true; break; }
        const Y = GR.yeni; if (!bad && Y && Math.abs(Y.l - l) < 90) { const o = mid(Y.outer), kq = mid(Y.court); let dx = o[0] - kq[0], dy = o[1] - kq[1]; const d = Math.hypot(dx, dy) || 1; dx /= d; dy /= d;
          const pz = (E - o[0] - dx) * dx + (N - o[1] - dy) * dy, px = (E - o[0] - dx) * -dy + (N - o[1] - dy) * dx; if (Math.abs(px) < 24.5 && pz > -43 && pz < 45) bad = true; }
        for (let i = 0; i + 2 < T.length && !bad; i += 3) bad = Math.hypot(T[i] - s, T[i + 1] - u) < T[i + 2];
        if (bad) continue;
      }
      this.path.at(s, _gp);
      const y = dk ? road(s) + 0.18 : H(s, u), ca = Math.cos(a * D2R), sa = Math.sin(a * D2R);
      G.people.push(_gp.x + _gp.rx * u - ox, y, _gp.z + _gp.rz * u - oz, _gp.fx * ca + _gp.rx * sa, _gp.fz * ca + _gp.rz * sa, 0.97 + 0.06 * hash2(Math.round(l * 10), 7477), k, 1);
    }
  }
  /** Kemeraltı Caddesi's median fence (step 35R, as the real one: Street View): black iron, posts every 2.6 m with ball finials, a top
   *  rail and a foot rail, bars between them (both faces), from s0 to s1 at u(s), its foot y0 over the road; where ok */
  galIronFence(G, s0, s1, world, road, uAt, y0, ok) {
    const c = G.color, K = C_IRON, HT = 1.05; c.setM(IDENT);
    for (let p = Math.floor(s0 / 2.6) * 2.6; p < s1; p += 2.6) {
      const a = Math.max(p, s0), b = Math.min(p + 2.6, s1); if (b - a < 0.05 || !ok(a) || !ok(b)) continue;
      const ua = uAt(a), ub = uAt(b), ya = road(a) + y0, yb = road(b) + y0;
      if (p >= s0) { const q = world(p, uAt(p), ya); c.box(q[0] - 0.045, ya, q[2] - 0.045, q[0] + 0.045, ya + HT + 0.12, q[2] + 0.045, K); c.box(q[0] - 0.06, ya + HT + 0.12, q[2] - 0.06, q[0] + 0.06, ya + HT + 0.22, q[2] + 0.06, K); }
      for (const [h0, h1] of [[HT - 0.04, HT], [0.1, 0.14], [0.78, 0.81]]) {
        c.quad(world(a, ua + 0.012, ya + h0), world(b, ub + 0.012, yb + h0), world(b, ub + 0.012, yb + h1), world(a, ua + 0.012, ya + h1), K);
        c.quad(world(b, ub - 0.012, yb + h0), world(a, ua - 0.012, ya + h0), world(a, ua - 0.012, ya + h1), world(b, ub - 0.012, yb + h1), K);
      }
      for (let q = a + 0.13; q < b - 0.06; q += 0.13) { // (the bars: a flat both ways, a little bent at their middle as the tulips' stems)
        const u = uAt(q) + (Math.round(q / 0.13) % 2 ? 0.02 : -0.02), y = road(q) + y0;
        c.quad(world(q - 0.012, u, y + 0.12), world(q + 0.012, u, y + 0.12), world(q + 0.012, u, y + HT), world(q - 0.012, u, y + HT), K);
        c.quad(world(q + 0.012, u, y + 0.12), world(q - 0.012, u, y + 0.12), world(q - 0.012, u, y + HT), world(q + 0.012, u, y + HT), K);
      }
    }
  }
  /** a run of the Galata Bridge's railing (W3) from s0 to s1 at u(s), its foot y0 over the road: square posts with caps every
   *  2.6 m (on a grid along the road: the pieces either side of a chunk's edge meet), a flat handrail on top, a foot rail, and
   *  between them the patterned cast-iron panel (the world atlas's cell, cut out by its alpha; both faces, so it casts its
   *  lattice's shadow whichever side the sun is on) */
  galRailing(G, s0, s1, world, road, uAt, y0, cell, ok, tint = W1G, HT = 1.18) {
    // (step 35R: tinted as the real ones: the walkways' pale teal, the tram line's fences a greyer teal, lower)
    const c = G.color, a = G.atlas, cl = P.atlasCell(cell), col = [0.27 * tint[0] * 1.6, 0.36 * tint[1] * 1.6, 0.48 * tint[2] * 1.4], cap = [0.36 * tint[0] * 1.6, 0.45 * tint[1] * 1.6, 0.57 * tint[2] * 1.4];
    c.setM(IDENT); a.setM(IDENT); a.world = true;
    const uv = { u0: 0, u1: 0, v0: cl.v0, v1: cl.v1 };
    for (let p = Math.floor(s0 / 2.6) * 2.6; p < s1; p += 2.6) {
      const s = Math.max(p, s0), t = Math.min(p + 2.6, s1); if (t - s < 0.05 || !ok(s) || !ok(t)) continue;
      const ua = uAt(s), ub = uAt(t), ya = road(s) + y0, yb = road(t) + y0;
      if (p >= s0) { const q = world(p, uAt(p), ya); c.box(q[0] - 0.06, ya, q[2] - 0.06, q[0] + 0.06, ya + HT + 0.04, q[2] + 0.06, col); c.box(q[0] - 0.085, ya + HT + 0.04, q[2] - 0.085, q[0] + 0.085, ya + HT + 0.1, q[2] + 0.085, cap); }
      // the handrail (a flat bar on edge, its top lit) and the foot rail
      for (const [h0, h1, w] of [[HT - 0.06, HT, 0.035], [0.02, 0.09, 0.025]]) {
        c.quad(world(s, ua + w, ya + h0), world(t, ub + w, yb + h0), world(t, ub + w, yb + h1), world(s, ua + w, ya + h1), col);
        c.quad(world(t, ub - w, yb + h0), world(s, ua - w, ya + h0), world(s, ua - w, ya + h1), world(t, ub - w, yb + h1), col);
        c.quad(world(s, ua + w, ya + h1), world(t, ub + w, yb + h1), world(t, ub - w, yb + h1), world(s, ua - w, ya + h1), cap);
      }
      uv.u0 = cl.u0 + (cl.u1 - cl.u0) * ((s - p) / 2.6); uv.u1 = cl.u0 + (cl.u1 - cl.u0) * ((t - p) / 2.6);
      a.quad(world(s, ua, ya + 0.06), world(t, ub, yb + 0.06), world(t, ub, yb + HT - 0.03), world(s, ua, ya + HT - 0.03), tint, uv);
      const u0 = uv.u0; uv.u0 = uv.u1; uv.u1 = u0;
      a.quad(world(t, ub, yb + 0.06), world(s, ua, ya + 0.06), world(s, ua, ya + HT - 0.03), world(t, ub, yb + HT - 0.03), tint, uv);
    }
  }
  /** the Turkish town where it is (W4): its weight a half or more (from the Galata Bridge's landing on), clear of the border
   *  tunnel's mouth at its far end */
  townOn(s) { return zoneW(s).town >= 0.5 && !nearB(s, T_HALF + 6); }
  /** …and where its blocks stand: from 24 m past the landing (the quay's square at the bridge's end) */
  townBlocks(s) { if (!this.townOn(s)) return false; const tl = townLanding(s); return !tl || s > tl.s + 24; }
  /** the starts of the town's lay-bys (W4: a dolmuş stop) whose bays reach into [s0, s1): every TW_BAY m on the right-hand
   *  pavement where the town runs the whole length of it */
  townBayAt(s0, s1) {
    const out = [];
    for (let z = Math.floor((s0 - TW_BAY_L - 3) / ZONE_LEN); z * ZONE_LEN < s1; z++) // (counted from each zone's start)
      for (let q = z * ZONE_LEN + TW_BAY0; q - 3 < s1 && q < (z + 1) * ZONE_LEN; q += TW_BAY)
        if (q + TW_BAY_L + 3 > s0 && this.townBlocks(q - 6) && this.townBlocks(q + TW_BAY_L + 6)) out.push(q);
    return out;
  }
  /** the depth of the town's lay-by at s (0 outside one; 3 m tapers at its ends) */
  townBay(s) {
    const z0 = Math.floor((s + 3) / ZONE_LEN) * ZONE_LEN, q = z0 + Math.floor((s - z0 - TW_BAY0 + 3) / TW_BAY) * TW_BAY + TW_BAY0, d = s - q;
    if (d < -3 || d > TW_BAY_L + 3 || !this.townBlocks(q - 6) || !this.townBlocks(q + TW_BAY_L + 6)) return 0;
    return TW_BAY_D * Math.min(1, (d + 3) / 3, (TW_BAY_L + 3 - d) / 3);
  }
  /** Mahalle çarşısı (W4): a Turkish town's high street, as its concept painting has it (ref/world/turkish_town.png): an almost
   *  unbroken row of five- to seven-storey blocks of flats on either side behind wide pavements, a shop or two in each one's
   *  ground floor under its signboard and awning (props.js townApt); plane trees in their planters along the kerbs, street
   *  lamps, tea tables out in front of the tea houses and now and then a bakery, a simit cart, a cat; a dolmuş waiting at its
   *  stop in a lay-by; at the bridge's end the quay's square with its two flags. On random numbers of its own (Japan's chunks
   *  never draw them) */
  *placeTown(G, c, s0, s1, matAt, road, rwAt) {
    if (zoneW(s0).town < 0.25 && zoneW(s1).town < 0.25) return;
    const tr = rng(Math.floor(hash2(c, 6501) * 4294967295)), front = s => rwAt(s) + TOWN_SW + 0.15, ok = s => this.townBlocks(s);
    const items = []; // (what stands on the pavements: [s, u (signed), radius], so nothing stands in anything else)
    const free = (s, u, rad) => items.every(([s2, u2, r2]) => Math.hypot(s - s2, u - u2) > rad + r2);
    // the lay-bys' dolmuş and their stop signs
    for (const q of this.townBayAt(s0, s1)) {
      const sm = q + TW_BAY_L / 2; if (sm < s0 || sm >= s1) continue;
      const rw = rwAt(sm); P.dolmus(G, matAt(sm + 1, rw + 1.25, road(sm), 0, false), Math.round((zoneL(q) - TW_BAY0) / TW_BAY)); // (which of its zone's stops: its livery, step 35b)
      P.durakSign(G, matAt(q + 2, rw + TW_BAY_D + 0.35, road(q + 2) + 0.15)); items.push([q + 2, rwAt(q + 2) + TW_BAY_D + 0.35, 0.4]);
    }
    // (the opening view's blocks start TW_HERO_B into the zone: the town's, if that is in this chunk)
    const z0 = s0 - zoneL(s0), hbOf = side => z0 + TW_HERO_B[side], heroOf = side => { const hb = hbOf(side); return zoneAt(hb + 5) === 'town' && hb >= s0 && hb < s1 - 14 && ok(hb) && ok(hb + 14); };
    const heroIn = heroOf(-1) && heroOf(1);
    const hl = s => { const l = zoneL(s); return l >= TW_HERO[0] && l < TW_HERO[1] && zoneAt(s) === 'town'; };
    for (const side of [-1, 1]) {
      const hb = hbOf(side);
      // the blocks: one after another along the pavement, each inside its chunk (the chunk's last one reaches its end)
      for (let s = s0 + 0.12; s < s1 - 3;) {
        if (!ok(s)) { s += 1; continue; }
        let w = tr.range(9, 15), next = NaN, hero = false; if (s1 - 0.12 - (s + w) < 6) w = s1 - 0.12 - s;
        if (heroIn) { if (Math.abs(s - hb) < 0.01) { hero = true; w = 14; } else if (s < hb && s + w > hb - 4.5) { w = hb - 0.15 - s; next = hb; if (w < 4.5) { s = hb; continue; } } }
        let e1 = s + w; while (e1 > s + 4 && !ok(e1)) e1 -= 1; // (not into the border's mouth)
        if (e1 - s < 4.5) { s = e1 + 1; continue; } w = e1 - s;
        const sm = s + w / 2, nb = Math.max(2, Math.round(w / 3.3));
        let door = tr() < 0.18 ? -1 : Math.floor(tr() * nb), shops = [];
        for (let n = nb - (door >= 0 ? 1 : 0); n > 0;) { const k = twKind(tr()), m = Math.min(n, tr() < 0.4 ? 2 : 1), aw = TW_AWN[k][tr() < 0.75 ? 0 : 1]; shops.push({ k, j: Math.floor(tr() * TOWN_SHOPS[k].length), aw, n: m }); n -= m; }
        const t = tr(), spec = { type: 'townApt', w, d: tr.range(11, 15), floors: 5 + Math.floor(tr() * 3), tint: tr.pick(P.TOWN_TINTS), shops, door, bal: t < 0.4 ? 'full' : t < 0.65 ? 'alt' : t < 0.85 ? 'mid' : 'none', rail: tr() < 0.6 ? 0 : 1, flag: tr() < 0.75, near: -side, at: sm, hero };
        // (the opening view's: on the left, from ahead (its −x end), the entrance, a pharmacy and a bakery under its red and white
        // awning; on the right, from behind, a market under its blue and white one and a tea house under a red one, the entrance)
        if (hero) Object.assign(spec, side < 0 ? { tint: P.TOWN_TINTS[0], floors: 6, bal: 'full', rail: 1, flag: true, door: 0, shops: [{ k: 5, j: 0, aw: -1, n: 1 }, { k: 0, j: 0, aw: 0, n: 2 }] }
          : { tint: P.TOWN_TINTS[5], floors: 6, bal: 'mid', rail: 1, flag: true, door: 3, shops: [{ k: 2, j: 0, aw: 1, n: 2 }, { k: 3, j: 0, aw: 2, n: 1 }] });
        P.building(G, matAt(sm, side * front(sm), road(sm) + 0.15), tr, spec);
        door = spec.door; shops = spec.shops;
        // tea tables out on the pavement in front of a tea house (and now and then a bakery's)
        const bwid = w / nb, dIdx = door;
        for (let i = 0, bi = 0; i < shops.length; i++) {
          if (bi === dIdx) bi++;
          const sh = shops[i], sa = s + bi * bwid, sb = sa + sh.n * bwid; bi += sh.n;
          if (sh.k === 3 || (sh.k === 0 && (tr() < 0.35 || hero))) for (let q = sa + 0.9; q < sb - 0.6; q += tr.range(1.6, 2.4)) {
            const u = side * (front(q) - tr.range(1.3, 2.1)); if (!free(q, u, 0.9)) continue;
            P.teaTable(G, matAt(q, u, road(q) + 0.15, tr() * 6.28, false), tr); items.push([q, u, 0.9]);
          }
        }
        s = next === next ? next : s + w + tr.range(0.05, 0.3);
        yield;
      }
      // the second row: plain blocks of flats behind the street's (6–8 storeys, a little taller), close behind them, almost unbroken,
      // so the town reads as a town over the street's lower blocks, down its gaps and from the bridge's landing (own random numbers)
      { const bk = rng(Math.floor(hash2(Math.round(s0 / CH), side > 0 ? 6511 : 6513) * 4294967295));
        for (let s2 = s0 + 0.2; s2 < s1 - 5;) {
          let w2 = bk.range(12, 20); if (s1 - 0.2 - (s2 + w2) < 7) w2 = s1 - 0.2 - s2;
          const sm2 = s2 + w2 / 2; if (!ok(s2 - 4) || !ok(s2 + w2)) { s2 += 3; continue; }
          const u2 = front(sm2) + 16.5 + bk() * 2;
          P.building(G, matAt(sm2, side * u2, road(sm2) + 0.14), bk, { type: 'townBack', w: w2, d: bk.range(10, 14), floors: 6 + Math.floor(bk() * 3), tint: bk.pick(P.TOWN_TINTS), near: -side });
          s2 += w2 + bk.range(0.3, 3);
        }
        yield; }
      // plane trees in their planters along the kerb (not in a lay-by), street lamps between them; in the opening view the
      // concept's (a big one by the kerb on the right beside the car, one further on on the left)
      if (heroIn) { const sh = z0 + (side > 0 ? 137.5 : 168), u = side * (rwAt(sh) + 1.05); P.townTree(G, matAt(sh, u, road(sh) + 0.15), tr, side > 0 ? 1.12 : 1.0); items.push([sh, u, 1.6]); }
      // (as the concept's: one every ~25 m a side; on phones, P.bankStep() > 1, two in five of them left out: their painted crowns and
      // bark were most of the town's cost over the shopping street's there)
      const lite = P.bankStep() > 1;
      for (let s = s0 + tr() * 10; s < s1; s += tr.range(21, 30)) {
        const u = side * (rwAt(s) + 1.05); if (!this.townOn(s) || hl(s) || (side > 0 && this.townBay(s) > 0) || !free(s, u, 1.6) || (tr() < 0.4 && lite)) continue;
        P.townTree(G, matAt(s, u, road(s) + 0.15), tr, tr.range(0.92, 1.08)); items.push([s, u, 1.6]);
      }
      yield;
      for (let s = Math.ceil((s0 - (side > 0 ? 0 : 18)) / 36) * 36 + (side > 0 ? 0 : 18); s < s1; s += 36) {
        const u = side * (rwAt(s) + 0.45); if (s < s0 || !this.townOn(s) || (side > 0 && this.townBay(s) > 0) || !free(s, u, 0.6)) continue;
        P.streetLamp(G, matAt(s, u, road(s) + 0.15), tr); items.push([s, u, 0.4]);
      }
    }
    // a simit cart by the kerb now and then, a cat on the pavement (in the opening view the concept's, on the left)
    if (heroIn) { const sc = z0 + 154, sk = z0 + 146.5; P.simitCart(G, matAt(sc, -(rwAt(sc) + 1.3), road(sc) + 0.15, 0, false), tr); items.push([sc, -(rwAt(sc) + 1.3), 1.1]); P.townCat(G, matAt(sk, -(rwAt(sk) + 0.95), road(sk) + 0.15, 0, false), false); }
    else if (tr() < 0.35) { const s = s0 + tr() * CH, side = tr() < 0.6 ? -1 : 1, u = side * (rwAt(s) + 1.3); if (this.townBlocks(s) && !(side > 0 && this.townBay(s) > 0) && free(s, u, 1.1)) { P.simitCart(G, matAt(s, u, road(s) + 0.15, 0, false), tr); items.push([s, u, 1.1]); } }
    if (!heroIn && tr() < 0.3) { const s = s0 + tr() * CH, side = tr() < 0.6 ? -1 : 1, u = side * (rwAt(s) + tr.range(0.7, 3.4)); if (this.townBlocks(s) && !(side > 0 && this.townBay(s) > 0) && free(s, u, 0.4)) P.townCat(G, matAt(s, u, road(s) + 0.15, 0, false), side > 0); }
    // the quay's square at the bridge's end: a flag on a tall pole either side of the street, round trees along the waterfront
    { const tl = townLanding(s0 + CH / 2), sf = tl ? tl.s + 12 : NaN;
      if (sf >= s0 && sf < s1) for (const side of [-1, 1]) {
        P.flagPole(G, matAt(sf, side * (rwAt(sf) + 3.2), road(sf) + 0.15), 10);
        for (let u = rwAt(sf) + TOWN_SW + 4 + tr() * 3; u < 75; u += tr.range(7, 11)) P.tree(G, matAt(tl.s + 5 + tr() * 3, side * u, road(sf) + 0.14, tr() * 6, false), 'broad', tr, tr.range(0.95, 1.2));
      } }
  }
  /** Kapadokya (W5): the Göreme → Uçhisar road, as its concept painting has it (ref/world/cappadocia_uchisar.png, after the real
   *  road's Street View): along the verges clumps of dry golden grass and grey-mauve dry shrubs on the sandy plain, bare trees
   *  near the road and further out, the soft tuff rising in rounded ridges (the ground: path.js uchTuff), and the fairy chimneys
   *  in groups, near the road (some with their cave doors and windows towards it), further out on the ridges and far off; a
   *  Turkish flag on its pole by the road now and then, a road sign for Uçhisar. Its opening view (UCH_HERO, where ?env=uchisar
   *  starts) laid out as the concept: the big chimney with its caves ahead-left, the flag at the left verge, a bare tree before
   *  the left ridge and a bigger one on the right. On random numbers of its own (Japan's chunks never draw them); the chimneys'
   *  groups on fixed anchors along the road, each built whole by the chunk its anchor falls in */
  *placeUchisar(G, c, s0, s1, matAt, onGround, road, rwAt, H, ox, oz) {
    const uw = s => zoneW(s).uchisar;
    if (uw(s0) < 0.25 && uw(s1) < 0.25) return;
    const ur = rng(Math.floor(hash2(c, 7001) * 4294967295)), path = this.path, f = {};
    // (where it is: out of the town from its weight's half (the town's blocks end there), growing in to its full scenery by 0.9;
    // clear of the border tunnel's ridge at its far end)
    const ok = (s, m = 6) => uw(s) > 0.5 && !nearB(s, T_RIDGE + m), dens = s => sstep(0.5, 0.9, uw(s));
    const z0 = s0 - zoneL(s0), hero = s => { const l = zoneL(s); return l > UCH_HERO[0] && l < UCH_HERO[1] && zoneAt(s) === 'uchisar' && zoneAt(z0 + 10) === 'uchisar'; };
    // (the chimneys first: their footprints, [s, u, radius], keep the trees, the shrubs and the grass out of them)
    const foot = [], clear = (s, u, m) => foot.every(([s2, u2, r2]) => Math.hypot(s - s2, u - u2) > r2 + m);
    // the fairy chimneys, in groups on fixed anchors along the road (each its own random numbers): near the road (some with their
    // caves), further out on the ridges, and far off
    G.tuff.setM(IDENT);
    for (const side of [-1, 1]) {
      for (const [sp, j, u0, du, hLo, hHi, nMax, skip, caveP] of UCH_BANDS) {
        for (let k = Math.ceil((s0 - sp) / sp); k * sp - sp < s1; k++) {
          const q = rng(Math.floor(hash2(k * 4 + (side > 0 ? 1 : 0), 7011 + Math.round(u0)) * 4294967295));
          const sa = k * sp + (q() - 0.5) * j; if (sa < s0 || sa >= s1) continue;
          if (q() < skip || !ok(sa, 25) || hero(sa) || q() > dens(sa)) continue;
          const n = 1 + Math.floor(q() * nMax), ua = u0 + q() * du;
          for (let i = 0; i < n; i++) {
            const s = sa + (i ? q.range(-1, 1) * (5 + 2 * i) : 0), u = side * (ua + (i ? q.range(-0.6, 1) * (4 + 2 * i) : 0));
            if (!ok(s, 25)) continue;
            const h = q.range(hLo, hHi) * (i ? q.range(0.6, 0.95) : 1);
            this.uchChimney(G, s, u, h, q, side, caveP, matAt, H, -1, 0, u0 < 40 ? 0 : u0 < 100 ? 1 : 2, foot);
          }
        }
        yield;
      }
    }
    // the opening view, as the concept has it (at every pass: its layout there)
    if (zoneAt(z0 + 10) === 'uchisar') for (const [l, u, kind, a, b, nc] of UCH_HERO_P) {
      const s = z0 + l; if (s < s0 || s >= s1) continue;
      const hq = rng(7051 + Math.round(l * 10));
      if (kind === 'chim') this.uchChimney(G, s, u, a, hq, Math.sign(u), 0, matAt, H, b, nc, 0, foot);
      else if (kind === 'tree') P.tree(G, onGround(s, u, -0.15, a, false), 'bare', hq, b);
      else if (kind === 'bush') P.dryBush(G, onGround(s, u, 0, a, false), hq, b);
      else if (kind === 'flag') P.flagPole(G, onGround(s, u, 0, -Math.PI / 2), a); // (flying away from the road: seen broadside, as painted)
    }
    // the verges: dry grass in clumps on the plain (thickest a metre or three past the sandy shoulder), dry shrubs among them
    for (const side of [-1, 1]) {
      G.cap.setM(IDENT);
      // (as the concept's: the verge thick with them a metre or so past the sandy shoulder, thinning out over the next few metres;
      // fewer on phones)
      const gs = P.bankStep() > 1 ? 1.5 : 1;
      for (let s = s0 + ur() * 0.3; s < s1; s += ur.range(0.16, 0.38) * gs) {
        if (!ok(s) || ur() > 0.35 + 0.65 * dens(s)) continue;
        path.at(s, f); const rw = rwAt(s), u = side * (rw + 1.7 + Math.pow(ur(), 1.6) * 10), y = f.y + groundOffsetMix(s, u, f.y, rw);
        if (!clear(s, u, 0.4)) continue;
        P.dryGrass(G, f.x + f.rx * u - ox, y, f.z + f.rz * u - oz, ur() * 3.14, ur, ur.range(1.0, 1.6));
      }
      for (let s = s0 + ur() * 2; s < s1; s += ur.range(1.2, 2.6) * gs) { // (further out, fewer, as far as the near ridges)
        if (!ok(s) || ur() > dens(s)) continue;
        path.at(s, f); const rw = rwAt(s), u = side * (rw + 9 + ur() * 18), y = f.y + groundOffsetMix(s, u, f.y, rw);
        if (!clear(s, u, 0.4)) continue;
        P.dryGrass(G, f.x + f.rx * u - ox, y, f.z + f.rz * u - oz, ur() * 3.14, ur, ur.range(1.1, 1.7));
      }
      yield;
      for (let s = s0 + ur() * 6; s < s1; s += ur.range(5, 13)) {
        if (!ok(s) || hero(s) || ur() > dens(s)) continue;
        const u = side * (rwAt(s) + 2.2 + Math.pow(ur(), 1.3) * 18); if (!clear(s, u, 1)) continue;
        P.dryBush(G, onGround(s, u, 0, ur() * 6.28, false), ur, ur.range(0.8, 1.35));
      }
      // bare trees: near the road (one every ~20–45 m a side), and a few further out
      for (let s = s0 + ur() * 20; s < s1; s += ur.range(20, 45)) {
        if (!ok(s, 10) || hero(s) || ur() > dens(s)) continue;
        const u = side * (rwAt(s) + ur.range(3.5, 16)); if (!clear(s, u, 2.5)) continue;
        P.tree(G, onGround(s, u, -0.15, ur() * 6.28, false), 'bare', ur, ur.range(0.85, 1.2));
      }
      for (let s = s0 + ur() * 25; s < s1; s += ur.range(25, 55)) {
        if (!ok(s, 10) || ur() > dens(s)) continue;
        const u = side * ur.range(24, 110); if (!clear(s, u, 2.5)) continue;
        P.tree(G, onGround(s, u, -0.2, ur() * 6.28, false), 'bare', ur, ur.range(0.9, 1.3));
      }
      yield;
    }
    // a flag on its pole at the left verge now and then; the road sign for Uçhisar on the right
    { const sf = Math.floor((s0 + CH / 2) / 700) * 700 + 470; if (sf >= s0 && sf < s1 && ok(sf, 20) && !hero(sf)) P.flagPole(G, onGround(sf, -(rwAt(sf) + 2.4), 0, -Math.PI / 2), 9.5); }
    { const sd = Math.floor((s0 + CH / 2) / 1500) * 1500 + 620; if (sd >= s0 && sd < s1 && ok(sd, 20)) P.capSign(G, matAt(sd, rwAt(sd) + 2.2, road(sd) - 0.06), 'trSignUch', 2.9, 2.2, 1.1); }
  }
  /** a fairy chimney (props.js fairyChimney) standing on the ground at (s, u): its foot at the lowest of the ground round it (its
   *  skirt sunk into the rest), facing the road; h its height, caveP the chance of cave openings in it (0: none), v its profile
   *  (−1: any; a few of those are capped pillars), nc that many openings instead, lod 0 near … 2 far (fewer sides round it) */
  uchChimney(G, s, u, h, q, side, caveP, matAt, H, v = -1, nc = 0, lod = 0, foot = null) {
    const R = h * q.range(0.27, 0.36), y = Math.min(H(s, u), H(s - R, u), H(s + R, u), H(s, u - R), H(s, u + R)) - 0.15;
    if (foot) foot.push([s, u, R * 1.25]);
    const cap = v < 0 && q() < 0.08, caves = nc || (q() < caveP ? 1 + Math.floor(q() * (h > 8 ? 4 : 3)) : 0);
    P.fairyChimney(G, matAt(s, u, y, q.range(-0.4, 0.4), true), q, { h, r: R, v: v < 0 ? Math.floor(q() * 3) : v, cap, side, caves, lod });
  }
  /** Paşabağ (W6): the road past its fairy chimneys, as its concept painting has it (ref/world/cappadocia_pasabag.png, after the real
   *  road's Street View): tall dry golden grass thick on both verges past the gravel shoulders, bare trees near the road and further
   *  out, pale tuff boulders, and the chimneys close along both sides, tall cream tuff under dark basalt caps, singly, in twos and
   *  threes, now and then two or three heads on one mound (the Monks' Valley's), some with their cave doors and windows towards the
   *  road; further out more of them, and far off; a little group of tourists at the roadside now and then. Its opening view (PAS_HERO,
   *  where ?env=pasabag starts) laid out as the concept. On random numbers of its own (no other zone's chunks draw them); the chimneys'
   *  groups on fixed anchors along the road, each built whole by the chunk its anchor falls in */
  *placePasabag(G, c, s0, s1, matAt, onGround, road, rwAt, H, ox, oz) {
    const pw = s => zoneW(s).pasabag;
    if (pw(s0) < 0.25 && pw(s1) < 0.25) return;
    const pr = rng(Math.floor(hash2(c, 7401) * 4294967295)), path = this.path, f = {};
    // (where it is: from its weight's half in the hand-over from Uçhisar, growing in to its full scenery by 0.9; clear of the border
    // tunnel's ridge at its far end)
    const ok = (s, m = 6) => pw(s) > 0.5 && !nearB(s, T_RIDGE + m), dens = s => sstep(0.5, 0.9, pw(s));
    const z0 = s0 - zoneL(s0), heroZ = zoneAt(z0 + 10) === 'pasabag', hero = s => { const l = zoneL(s); return heroZ && l > PAS_HERO[0] && l < PAS_HERO[1] && zoneAt(s) === 'pasabag'; };
    const foot = [], clear = (s, u, m) => foot.every(([s2, u2, r2]) => Math.hypot(s - s2, u - u2) > r2 + m);
    // (beyond the opening view, as far as it sees, the valley open but for its own chimneys, as the concept has it: no others in a
    // wedge round the road ahead)
    const view = (s, u0) => { const l = zoneL(s); return heroZ && zoneAt(s) === 'pasabag' && l >= PAS_HERO[1] && l < 900 && u0 < 0.16 * (l - 120); };
    // the chimneys, in groups on fixed anchors along each side (each its own random numbers)
    G.tuff.setM(IDENT);
    for (const side of [-1, 1]) {
      for (const [sp, j, u0, du, hLo, hHi, nMax, skip, caveP, multiP] of PAS_BANDS) {
        for (let k = Math.ceil((s0 - sp) / sp); k * sp - sp < s1; k++) {
          const q = rng(Math.floor(hash2(k * 4 + (side > 0 ? 1 : 0), 7411 + Math.round(u0)) * 4294967295));
          const sa = k * sp + (q() - 0.5) * j; if (sa < s0 || sa >= s1) continue;
          if (q() < skip || !ok(sa, 30) || hero(sa) || q() > dens(sa) || view(sa, u0)) continue;
          const n = 1 + Math.floor(q() * nMax), ua = u0 + q() * du;
          for (let i = 0; i < n; i++) {
            const s = sa + (i ? q.range(-1, 1) * (8 + 3 * i) : 0), u = side * (ua + (i ? q.range(-0.5, 1) * (6 + 3 * i) : 0));
            if (!ok(s, 30) || hero(s) || !clear(s, u, 2)) continue;
            const h = q.range(hLo, hHi) * (i ? q.range(0.7, 0.95) : 1), x = q();
            this.pasChim(G, s, u, h, q, side, q() < caveP ? 1 + Math.floor(q() * (h > 14 ? 5 : 3)) : 0, x < multiP ? 'multi' : x < multiP + 0.38 ? 'mush' : x < multiP + 0.58 ? 'hat' : x < 0.93 ? 'mush' : 'cone', matAt, H, u0 < 25 ? 0 : u0 < 60 ? 1 : 2, foot);
          }
        }
        yield;
      }
    }
    // the opening view, as the concept has it (at every pass: its layout there)
    if (heroZ) for (const [l, u, kind, a, b, nc, sd] of PAS_HERO_P) {
      const s = z0 + l; if (s < s0 || s >= s1) continue;
      const hq = rng(sd || 7451 + Math.round(l * 10));
      if (kind === 'chim') this.pasChim(G, s, u, a, hq, Math.sign(u), nc, b === 'two' ? 'two' : b, matAt, H, 0, foot);
      else if (kind === 'tree') P.tree(G, onGround(s, u, -0.15, a, false), 'barePas', hq, b);
      else if (kind === 'bush') P.dryBush(G, onGround(s, u, 0, a, false), hq, b, 0.55);
      else if (kind === 'rock') { P.pasBoulder(G, onGround(s, u, 0, hq() * 6.28, false), hq, a); foot.push([s, u, 1.3 * a]); }
      else if (kind === 'people') this.tourists(G, s, u, a, hq, matAt, H);
    }
    yield;
    // the verges: tall dry grass thick from the gravel's edge, thinning out over the next few metres; a little further out more clumps,
    // fewer (fewer on phones)
    const gs = P.bankStep() > 1 ? 1.5 : 1;
    for (const side of [-1, 1]) {
      G.pgrass.setM(IDENT);
      // (the verge's deep grass: thickest and darkest at the gravel's edge, as the concept's, lighter as it thins out)
      for (let s = s0 + pr() * 0.2; s < s1; s += pr.range(0.16, 0.36) * gs) {
        if (!ok(s) || pr() > 0.3 + 0.7 * dens(s)) continue;
        path.at(s, f); const rw = rwAt(s), d = Math.pow(pr(), 1.9) * 8, u = side * (rw + 1.3 + d), y = f.y + groundOffsetMix(s, u, f.y, rw);
        if (!clear(s, u, 0.3)) continue;
        P.pasGrass(G, f.x + f.rx * u - ox, y, f.z + f.rz * u - oz, pr() * 3.14, pr, pr.range(1.0, 1.6), 0.72 + 0.28 * Math.min(1, d / 6));
      }
      for (let s = s0 + pr() * 1.2; s < s1; s += pr.range(1.0, 2.2) * gs) {
        if (!ok(s) || pr() > dens(s)) continue;
        path.at(s, f); const rw = rwAt(s), u = side * (rw + 8 + pr() * 24), y = f.y + groundOffsetMix(s, u, f.y, rw);
        if (!clear(s, u, 0.4)) continue;
        P.pasGrass(G, f.x + f.rx * u - ox, y, f.z + f.rz * u - oz, pr() * 3.14, pr, pr.range(1.0, 1.5));
      }
      yield;
      // small dark dry shrubs dotted over the fields, as painted
      G.cap.setM(IDENT);
      for (let s = s0 + pr() * 6; s < s1; s += pr.range(5, 12)) {
        if (!ok(s) || hero(s) || pr() > dens(s)) continue;
        const u = side * (rwAt(s) + 4 + Math.pow(pr(), 1.2) * 36); if (!clear(s, u, 1)) continue;
        P.dryBush(G, onGround(s, u, 0, pr() * 6.28, false), pr, pr.range(0.6, 1.1), 0.55);
      }
      // pale tuff boulders scattered over the valley floor (more on the left, at the hillside's foot)
      for (let s = s0 + pr() * 10; s < s1; s += pr.range(8, 22) * (side < 0 ? 1 : 1.8)) {
        if (!ok(s) || hero(s) || pr() > dens(s)) continue;
        const u = side * (rwAt(s) + pr.range(4, 16)); if (!clear(s, u, 1.5)) continue;
        const sc = pr.range(0.5, 1.4); P.pasBoulder(G, onGround(s, u, 0, pr() * 6.28, false), pr, sc); foot.push([s, u, 1.3 * sc]);
      }
      // bare trees: near the road (one every ~25–55 m a side), and a few further out
      for (let s = s0 + pr() * 25; s < s1; s += pr.range(25, 55)) {
        if (!ok(s, 10) || hero(s) || pr() > dens(s)) continue;
        const u = side * (rwAt(s) + pr.range(3.5, 14)); if (!clear(s, u, 2.5)) continue;
        P.tree(G, onGround(s, u, -0.15, pr() * 6.28, false), 'barePas', pr, pr.range(0.8, 1.2));
      }
      for (let s = s0 + pr() * 30; s < s1; s += pr.range(30, 70)) {
        if (!ok(s, 10) || pr() > dens(s)) continue;
        const u = side * pr.range(24, 100); if (!clear(s, u, 3)) continue;
        P.tree(G, onGround(s, u, -0.2, pr() * 6.28, false), 'barePas', pr, pr.range(0.85, 1.25));
      }
      yield;
    }
    // a little group of tourists at the roadside now and then (beside the opening view's), on the right
    { const sd = Math.floor((s0 + CH / 2) / 750) * 750 + 560; if (sd >= s0 && sd < s1 && ok(sd, 20) && !hero(sd)) this.tourists(G, sd, rwAt(sd) + 1.6, 4 + Math.floor(pr() * 5), pr, matAt, H); }
  }
  /** one of Paşabağ's fairy chimneys (props.js pasChimney) standing on the ground at (s, u): its foot at the lowest of the ground round
   *  it (its skirt sunk into the rest), facing the road; h its height, caves that many openings, kind 'mush' | 'hat' | 'cone', or
   *  'multi' (two or three heads of either cap on one mound) / 'two' (the opening view's: a tall mushroom and a smaller one beyond
   *  it), lod 0 near … 2 far. Its footprint into `foot` */
  pasChim(G, s, u, h, q, side, caves, kind, matAt, H, lod = 0, foot = null) {
    const R = h * 0.3, y = Math.min(H(s, u), H(s - R, u), H(s + R, u), H(s, u - R), H(s, u + R)) - 0.15;
    if (foot) foot.push([s, u, R * 1.15]);
    let heads = null;
    if (kind === 'two') heads = [{ x: 0.3, z: 0.2, h, kind: 'mush', k: 0.95 }, { x: -0.25 * h, z: 0.04 * h, h: h * 0.74, kind: 'mush', k: 0.8 }];
    else if (kind === 'multi') {
      const nh = q() < 0.6 ? 2 : 3, a0 = q() * 6.28; heads = [];
      for (let i = 0; i < nh; i++) { const a = a0 + (i / nh) * 6.28 + q.range(-0.4, 0.4), d = h * q.range(0.11, 0.17); heads.push({ x: Math.sin(a) * d, z: Math.cos(a) * d, h: h * (i ? q.range(0.7, 0.92) : 1), kind: q() < 0.55 ? 'mush' : 'hat' }); }
    }
    P.pasChimney(G, matAt(s, u, y, q.range(-0.4, 0.4), true), q, { h, kind, heads, side, caves, lod });
  }
  /** a little group of n tourists at the roadside, standing about at (s, u) in a loose row out across the shoulder and the verge,
   *  most of them turned back down the road (towards the car), as the concept's group (props.js tourist: step 35f, painted figures of the
   *  tourists' cast, each on a sheet of its own: TOUR_N sheets, the group's members TOUR_STEP apart round them, so no two side by side
   *  share one; the first by a hash of where the group stands) */
  tourists(G, s, u, n, q, matAt, H) {
    const sd = Math.sign(u) || 1, k0 = Math.floor(hash2(Math.round(s * 4), 7463) * TOUR_N) % TOUR_N;
    for (let i = 0; i < n; i++) {
      const si = s + q.range(-0.6, 0.6) + (i % 2) * 0.5, ui = u + sd * (i * q.range(0.5, 0.65) + q.range(-0.1, 0.1));
      P.tourist(G, matAt(si, ui, H(si, ui), (sd > 0 ? 1 : -1) * Math.PI / 2 + q.range(-0.6, 0.6), true), q, (k0 + i * TOUR_STEP) % TOUR_N);
    }
  }
  *placeCountry(G, r, s0, s1, matAt, onGround, road, rwAt, H) {
    const wet = (s, u) => u < 0 && bayQ(s) === bayQ(s) && (H(s, u) < 0.8 || H(s, u - 12) < 0.8); // (the bay's end: its water, or its shore within a house's depth, step 27)
    for (const side of [-1, 1]) {
      yield;
      for (let s = s0 + r() * 20; s < s1; s += r.range(20, 40)) {
        if (zoneAt(s) !== 'country' || r() < 0.55 || nearX(s, 16) || nearR(s, 48)) continue;
        const u = side * r.range(16, 95), M = onGround(s, u), T = P.houseType('country', r);
        if (side < 0 && (bayQ(s) < HL.b1 || wet(s, u))) continue; // (the bay's end: its water and its headland, step 27)
        { // (step 28) 杉: now and then a group of tall cedars behind a house, as behind the painting's left-hand one. Its own random
          // numbers (by the house's place): the rest of the layout is unchanged
          const hr = rng(Math.floor(hash2(Math.round(s * 8), side > 0 ? 2821 : 2823) * 4294967295));
          if (hr() < 0.42) for (let k = 3 + Math.floor(hr() * 4), sg = s + hr.range(-8, 8), ug = u + side * hr.range(15, 24); k > 0; k--) {
            const ss = sg + hr.range(-7, 7), uu = ug + side * hr.range(-3, 6);
            if (!wet(ss, uu) && !nearX(ss, 12) && !nearR(ss, 40)) P.tree(G, onGround(ss, uu, -0.3, hr() * 6, false), 'sugi', hr, hr.range(0.85, 1.25));
          }
        }
        if (T) { // the country painting's houses: white plaster and cobalt tiles, round trees beside and behind, low hedges
          P.building(G, M, r, { type: 'house', w: T.ww, d: T.wd, ptype: T });
          this.houseGarden(G, r, s, u, side, T, onGround, 1, 2, 2);
          continue;
        }
        P.building(G, M, r, { type: 'house', w: r.range(9, 13), d: r.range(8, 10), floors: r() < 0.45 ? 2 : 1, tint: r.pick(P.TINTS), litP: 0.5, fence: 0 });
        for (let t = 0; t < 2 + r() * 3; t++) { const tu = u + side * r.range(6, 14), ts = s + r.range(-8, 8); P.tree(G, onGround(ts, tu, 0, r() * 6), 'broad', r, r.range(0.9, 1.3)); }
      }
      for (let s = s0 + r() * 8; s < s1; s += r.range(5, 9)) {
        if (zoneAt(s) !== 'country' || nearX(s, 7) || nearR(s, 36)) continue;
        const u = side * r.range(140, 210);
        // (the bay's end: none in its water, step 27)
        if (!wet(s, u)) P.tree(G, onGround(s, u, -0.3, r() * 6, false), 'sugi', r, r.range(0.9, 1.4)); // (step 28: the painting's tiered cedars; were plain cones)
        if (r() < 0.12 && !nearX(s + 2, 8) && !nearR(s + 2, 34)) { const ub = side * r.range(10, 130); if (!wet(s + 2, ub)) P.tree(G, onGround(s + 2, ub, 0, r() * 6), 'broad', r, r.range(0.8, 1.2)); }
      }
    }
    // (step 28) 杉林: stands of five to nine tall cedars out in the fields, beyond the houses (100–135 m from the road), as the painting
    // has them behind its houses: one every ~250 m on either side. Their own random numbers: the rest of the layout is unchanged
    for (const side of [-1, 1]) {
      const sr = rng(Math.floor(hash2(Math.round(s0 / CH), side > 0 ? 2811 : 2813) * 4294967295));
      if (sr() > CH / 250) continue;
      const sc = s0 + sr() * CH, uc = side * sr.range(100, 132), n = 5 + Math.floor(sr() * 5);
      if (zoneAt(sc) !== 'country' || nearX(sc, 30) || nearR(sc, 50) || wet(sc, uc) || wet(sc, uc - 12)) continue;
      for (let k = 0; k < n; k++) {
        const a = sr() * 6.28, d = Math.sqrt(sr()) * 11, ss = sc + Math.cos(a) * d, uu = uc + Math.sin(a) * d * 0.8;
        P.tree(G, onGround(ss, uu, -0.3, sr() * 6, false), 'sugi', sr, sr.range(0.85, 1.3) * (1.15 - 0.35 * d / 11));
      }
    }
    const sb = Math.floor((s0 + CH / 2) / 600) * 600 + 300;
    if (sb >= s0 && sb < s1 && zoneAt(sb) === 'country' && !nearR(sb, 40)) { const rw = rwAt(sb); P.busStop(G, matAt(sb, -(rw + 1.6), road(sb) - 0.08), r); }
    const sv = Math.floor((s0 + CH / 2) / 700) * 700 + 120;
    if (sv >= s0 && sv < s1 && zoneAt(sv) === 'country' && !nearR(sv, 40)) { const rw = rwAt(sv); P.vendingMachine(G, matAt(sv, -(rw + 0.95), road(sv) - 0.08), r); P.streetLamp(G, matAt(sv + 2, -(rw + 0.8), road(sv) - 0.08), r); }
    const sh = Math.floor((s0 + CH / 2) / 900) * 900 + 450;
    if (sh >= s0 && sh < s1 && zoneAt(sh) === 'country' && !nearR(sh, 40)) { const rw = rwAt(sh); P.smallShrine(G, onGround(sh, rw + 5), r); }
    const sj = Math.floor((s0 + CH / 2) / 380) * 380 + 190;
    if (sj >= s0 && sj < s1 && zoneAt(sj) === 'country' && !nearR(sj, 40) && !nearX(sj, 30)) { const rw = rwAt(sj), u = (hash2(Math.round(sj), 5) < 0.5 ? -1 : 1) * (rw + 2.75); P.jizo(G, onGround(sj, u, 0.0)); }
    for (let s = s0; s < s1; s += 30) {
      if (zoneAt(s) !== 'country') continue;
      const k = this.path.curv(s);
      if (Math.abs(k) > 1 / 450 && r() < 0.5) { const out = k > 0 ? -1 : 1, rw = rwAt(s); P.curveMirror(G, onGround(s, out * (rw + 0.75)), out > 0 ? -1 : 1); }
    }
  }
}
