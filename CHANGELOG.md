# Changelog — Infinite Calm Drive

Live: https://calm-drive.ustalabs.com · the original 2D version lives at `/classic.html`.

## 2026-10-21 · 10:xx — No more striped, crawling shadows on building walls (reported from a phone)
- **Shadow acne on facades fixed.** Walls the midday sun hits at a grazing angle were shading themselves in stripes and
  saw-teeth — the shadow map can't resolve a surface's own depth at that angle, and the offset meant to prevent it
  (0.05 m) was smaller than one shadow texel (8 cm at phone quality). Since the sun now moves every frame, the stripes
  also crawled constantly. Now the offset is 1.5 texels (9 cm on desktop, 12 cm on phones, 18 cm at low quality), and
  surfaces the sun only grazes (N·L < 0.12) keep their toon shading instead of an unresolvable shadow. Big shadows across
  the street and long dusk shadows are untouched.
- Measured on the reported view (phone portrait, city at 12:38, car parked, clock running), frame-to-frame change on the
  facades: median **0.566 → 0.020** (28× calmer), 95th percentile 1.00 → 0.06. GPU time unchanged (city 20.3 → 20.3 ms,
  cherry blossom 26.8 → 26.9). Tree canopies also lose their noisy self-shadow speckles.

## 2026-10-21 · 10:xx — Contact shading: things sit on the ground
- **Realism: soft contact shading where things meet the ground.** Building walls, shop fronts, poles, tree trunks,
  benches, the bus shelter, the crossing posts and the tunnel walls now darken softly over their bottom metre, the way
  ambient light really falls off where a wall meets the ground (and the way anime backgrounds paint it). Ambient light
  fades to 42 % at the ground and direct sun to 71 %, only on surfaces facing sideways, so steps and plinths don't
  turn into dark slabs. The geometry builder stores one byte per vertex — its height above the ground under the prop
  (from the placement matrix) — and the shader does the rest. GPU time unchanged within noise (interleaved A/B, 1280×720):
  city 21.4 → 21.7 ms, mountains 30.3 → 30.3, cherry blossom 27.1 → 26.9, countryside 22.4 → 22.9.
- Measured at phone speed (main thread slowed 4×): world-building slices are fine — taking the faster of two builds of
  every chunk in a zone cycle, only 19 of 3,837 slices exceed one frame (16 ms) and 3 exceed two, worst 53 ms (a city
  intersection block); the 120–170 ms spikes seen in single runs were garbage collection and machine load. GC: 1.6 MB/s
  allocated, minor collections only (6 in 25 s). Fixed one source: last pass's far-detail culling walked the chunk map
  with an iterator every frame (1.5 MB of garbage per 25 s at phone speed) — now none.

## 2026-10-21 · 09:xx — Phone pass: a quarter fewer draw calls
Measured on a phone-like setup (iPhone-sized viewport, main thread slowed 4×): the biggest main-thread cost is three.js's
own render call — **~58 % of all main-thread time**, almost all of it per-draw overhead (shader/uniform setup, buffer
binding) — not world building (p95 8 ms) or garbage collection (0.2 %). So this pass cuts draw calls:
- **Night light pools were drawn all day at zero opacity** (~11 draw calls a frame, plus their blending): now hidden
  while invisible.
- **Small details far ahead are skipped**: signal lamps, road paint and (by day) lamp heads more than 380 m ahead, and
  tree leaf cards beyond 540 m (inside the horizon fade), where they'd be a pixel or less and mostly fogged anyway.
  At night lamp heads and light pools stay, so rows of street lights still run into the distance.
- **The car's five flat-coloured parts are one vertex-coloured mesh** (one draw instead of five, in the scene and in its
  shadow map), and identical cloud-shadowed materials now share one shader program (52 → **47** programs).
Per frame (1280×720, deterministic counts): WebGL calls city **870 → 668 (−23 %)**, cherry blossom **782 → 595 (−24 %)**,
city at night **999 → 870 (−13 %)**; draw calls city 131 → 98, cherry blossom 118 → 86, city at night 148 → 130.
GPU time unchanged or slightly lower (interleaved A/B: city 21.1 → 21.2 ms, cherry blossom 26.8 → 26.2, coast 24.9 → 24.2,
city at night 30.4 → 29.3). Screenshots of all six zones by day and two at night match the previous build.

## 2026-10-21 · 08:xx — Stutter pass 4: shadows move smoothly with the sun
- **Shadows no longer jump.** To keep shadow edges from shimmering, the sun's direction was held and stepped every
  0.23°, so every shadow in view jumped **2.5–3.7 times a second**: the tip of a 15 m building's shadow by 7–21 cm
  during the day and by **0.8–2.6 m** near sunset (an 8 m pole's by 4–11 cm / 1.4 m). Now the light follows the sun
  every frame, and the shadow camera is only re-aimed after the sun has moved ~6° (every 7–30 s), with a skew that
  slides each point along the true light direction onto the plane under the car. So shadows glide continuously, and
  the texel grid on the ground stays put between re-aims, so edges don't shimmer.
  Measured with the car parked and the clock running (frame-to-frame change on a shadowed city street):
  15:30 — **2.7 jumps/s → 0**, largest change between two frames 0.73 → 0.29; 09:30 — 1.8/s → 0.1/s (one re-aim in 11 s).
  Toon shading follows the true sun too (it stepped with the shadows before).
- Correctness check: with the shadow camera 4.3° off the light (the most skew it ever gets), shadows land where a fresh
  render puts them (mean pixel difference 0.8/255). GPU cost unchanged within noise (interleaved A/B, 1280×720):
  city 21.0 → 20.5 ms, cherry blossom 27.2 → 26.3, mountains at 16:00 37.7 → 37.4, city at 17:00 27.2 → 28.4.
- Tried first and rejected: a horizontal, world-aligned shadow grid (no re-aims at all) — near sunset it stretches every
  wall and roof in the shadow pass by 1/sin(sun elevation): **45 ms vs 28 ms** a frame in the city at 17:00.

## 2026-10-21 · 07:xx — Stutter pass 3: no freeze at the first sunset, a crisp car shadow, no phantom rain at start
- **The first sunset, night or tunnel no longer freezes the drive.** Bloom is switched off by day, so its 8 shader programs
  used to compile all at once the first time it turned on — a **163 ms** main-thread freeze on the test PC (several
  times longer on a phone), a couple of minutes into every drive. They are now compiled behind the title screen with
  everything else: **0** programs compile mid-drive (checked at sunset, night and rain); time to "tap to begin" unchanged.
- **The car's shadow is crisp and no longer crawls.** The car now has its own small shadow map (a 4.8 m square that moves
  with it: ~0.9 cm texels on desktop, ~1.25 cm on phones, vs 6 cm in the big map) and stays out of the sun's map. The
  stair-stepped edges that shimmered along its shadow as it drove are gone; the tyres and rounded body now read in the
  shadow. Surfaces turning away from the sun keep the toon ramp, so the car doesn't shade its own back in jagged bands.
  Cost: ~0.3 ms for the extra pass; frame GPU time (interleaved A/B against the previous build, 1280×720) cherry blossom
  26.4 → 26.5 ms, city 20.5 → 20.8, countryside 22.0 → 22.9.
- **Bug fix — phantom rain at start-up.** When loading kept the main thread busy, the first frame's time step came out
  negative (down to −2.4 s here), which ran the weather backwards: rain intensity jumped to 0.17 and the sky greyed for the
  first seconds even in clear weather (most likely on slow phones, where start-up is long). The step is now clamped at zero.
- Measured and left alone: draw calls 100–150 per frame; the sun's shadow pass 0.1–4 ms; the world builder's steps
  average 15 ms per 60 m chunk spread over ~26 slices; JS allocation ~3.3 MB/s with only minor GCs (no major GC during a
  25 s drive), so garbage collection isn't the stutter source.

## 2026-10-21 · 06:xx — Performance pass 2: draw order, one less full-screen pass, lighter foliage
GPU time per frame (1280×720, integrated Radeon Vega, `?prof`), before → after this pass:
city day 26.6 → **21.5 ms**, cherry blossom 34.8 → **27.6**, countryside 30.4 → **22.6**, autumn mountains 36.4 → **29.3**,
snow 25.8 → **19.7**, coast 29.0 → **23.4**, city at night 39.7 → **28.4**. (At the start of this work, cherry blossom was 73.7 ms.)
- **Sky, distant mountains and the sea are drawn after the scene** instead of first, so the depth test skips every pixel hidden behind buildings and hills (the night sky alone cost 7 ms in the city).
- **Tone mapping, sRGB output and the anime colour grade are one full-screen pass** (was two); the sun-streak / lens-ghost maths is skipped entirely while the sun is off screen. Output is pixel-identical (mean difference < 1/255).
- **Lighter foliage**: tree canopies use ~28 % fewer (slightly larger) cards on desktop and ~38 % fewer on phones and in the X embed — the overdraw of alpha-tested cards was the largest single GPU cost (10.9 → 6.7 ms in the cherry-blossom zone); canopies still read as full, a little lacier.

## 2026-10-21 · 05:xx — Performance & stutter pass (focus requested: performance, stutters, realism)
Measured with GPU timer queries (`?prof`) on an integrated Radeon Vega (≈ a mid-range phone GPU), 1280×720:
**GPU time per frame 73.7 ms → 34.8 ms in the cherry-blossom zone**; now 26–36 ms across all zones by day, ~40 ms at night.
- **Noise from a texture**: every shader's value noise now reads one mip-mapped 256² random texture instead of four procedural hashes (−12.6 ms). Distant procedural patterns also stop sparkling.
- **Per-zone ground shaders**: the ground was one uber-shader with every zone's code (18 ms); each chunk now uses a variant compiled with only the zones/features it contains (→ 8.8 ms).
- **Shadows: single hardware-filtered tap** instead of three.js's 5 noise-rotated taps (cheaper on every lit pixel, and the rotating noise made edges shimmer), **texel-snapped shadow camera** and a quantised light direction so shadow edges no longer crawl while driving, tighter frustum (±62 m, ~6 cm texels), 1536² on phones.
- **Cloud shadows per vertex** for props, foliage, buildings and the car (still per pixel on the ground).
- **Bloom only when it shows** (night, sunsets, tunnels) — by day it cost ~7 ms for almost nothing.
- **No more mid-drive shader compiles**: every material, all 12 ground variants and the shadow-pass versions are compiled behind the title screen (into the post-processing target, so they're the exact variants used); synchronous shader-error checks are off unless `?debug`.
- **Smaller chunk-building hitches**: tree templates pre-built at start; zone/river/tunnel/crossing lookups memoised; terrain built in quarters (ghost columns keep normals seamless); poles/crossings/side-street houses yield between parts; pole wire anchors computed without building throwaway poles; geometry written straight into typed arrays with 1-byte normals/colours (half the memory and upload); meshes of a new chunk are revealed one per frame so their GPU uploads spread out; build budget 3.5 ms/frame unless the road ahead runs short. City p99 build time per frame 33 → 19 ms on the (heavily loaded) test box.
- Profiling hooks: `?prof` (per-frame CPU/GPU timings, long-frame log with new programs/geometries in `window.__prof`).

## 2026-10-21 · 05:xx — Snow country (雪国): the drive becomes four seasons
- **A sixth place, 雪国 — Snow Country**, between the autumn mountain pass and the city, so the loop now runs city → spring sakura → summer coast and rice fields → autumn mountains → winter snow → city.
- **The look**: soft blue-shadowed snowfields over buried paddies (their ridges faintly showing), plowed snow banks along the road, packed snow on the road with darker wheel tracks (the paint disappears under it), white hills, and snowcaps on the distant mountain ranges.
- **Snow country things**: the red-and-white 矢羽根 poles with down-pointing arrows marking the road edge for the ploughs; farmhouses with steep snow-laden roofs, thick snow slabs on the eaves, icicles and warm windows; white birch groves (白樺); cedars weighed down with snow.
- **Falling snow**: gentle flakes drift down (heavier when the sky is grey; snow replaces rain here), and the roads stay white rather than wet.
- **Sound**: hushed — wind, crows, and a distant temple bell; no cicadas, frogs or crickets in the cold.
- Snow arrives in patches as you come down from the autumn pass, rather than as a uniform fade.
- Test hook: `?env=snow`.

## 2026-10-21 · 04:xx — Tunnels (トンネル)
- **Tunnels** on the mountain pass and the coastal road: the road straightens and levels, runs into a cutting between concrete-lattice faces, and enters a concrete portal with a darker ring and a name plate (紅葉トンネル, 岬トンネル, 星見トンネル). Above it a ridge (on the coast, a pine-covered headland running down to the sea) carries the forest over the road.
- **Inside**: no sun or sky — warm sodium lamps on both arch shoulders every 6 m sweep over the car as you pass, cream tiled walls and walkways, green evacuation lights, jet fans under the crown; the headlights come on and the taillights glow. Your eyes adapt: the exposure rises inside, so the exit glows bright and the world blooms open again as you leave.
- **Sound**: the road roars louder with a reverberant echo and the low hum of the fans; rain and drifting leaves stop at the portal.
- The cinematic camera sticks to chase / eye-level shots around tunnels.

## 2026-10-21 · 03:xx — A fifth place: the autumn mountain pass (紅葉の峠)
- **紅葉の峠 — Autumn Mountain Pass**, after the countryside and before the city: a winding road with real climbs and bends. On the uphill side a concrete gutter and a cut slope faced with the classic concrete lattice (法面), crowned by forest; on the other side a guardrail with white reflector posts (視線誘導標), utility poles, and a steep drop into a valley with a stream and pale river stones, rising again to the far mountainside.
- **Autumn colours**: new red/orange momiji and golden ginkgo trees (their leaf clumps painted as tiny maple stars and ginkgo fans) mixed with dark cedars; distant slopes are painted as a mass of individual crowns whose colours cluster into red, orange, gold and green patches.
- **On the road**: a solid yellow no-overtaking centre line (はみ出し禁止), fallen leaves scattered thickest along the edges, blue chevron signs (線形誘導標) on the outside of sharp bends, and autumn leaves drifting through the air.
- **Sound**: gusty wind in the trees and the stream far below; more crows and crickets, fewer town sounds.
- **お地蔵さん**: little stone Jizo statues with red bibs and caps sit in roadside shelters along the country road.
- Fixed: the "crossing ahead" sign meant for oncoming traffic faced the wrong way.
- Test hook: `?env=mountain`.

## 2026-10-21 · 02:xx — Cinematic camera, the Milky Way and shooting stars
- **🎬 Cinematic camera** (a fourth stop on the camera button): calm film-like shots that cut every ~15–20 s — the chase view, a tracking shot from the sidewalk or verge, a fixed roadside camera the car drives past, a high crane shot that slowly rises over the landscape, and eye level. It is the default inside the X post, so the card plays like a little film.
- **The Milky Way** arches across clear nights: a faint, grainy band with darker dust lanes and a few more stars along it (hidden under overcast skies; the cirrus thins out at night so it shows).
- **Shooting stars** streak across clear night skies every so often.
- Test hook: `&meteors` (frequent shooting stars), `&cam=film`.

## 2026-10-21 · 01:xx — Little rural stations, laundry on the balconies
- **無人駅 — small unstaffed stations** beside most countryside level crossings: a platform along the near track with white coping and a yellow tactile strip, a ramp with handrails down to the road, a low fence, old lamps, a blue bench, a wooden shelter (待合所) with a bench inside and the station's name over it (稲穂駅, 夕凪駅, 水鏡駅, 蛍野駅), and the classic two-post station-name board (駅名標) with its neighbours ← → on a green band. Waiting for the train at golden hour now has its proper anime scene.
- **Lived-in apartments**: shirts and towels hang from laundry poles on many balconies, and futons air over the parapets; small shop-house balconies get washing too.
- Test hook: `&pitch=<deg>` (look up / down).

## 2026-10-21 · 00:xx — Vegetation pass: softer canopies, a breeze, roadside weeds
- **Tree canopies repainted**: each leaf/blossom clump is now a lumpy, cauliflower-like cluster with stray blossoms at its edge (instead of a near-filled disc), with an even speckle so neighbouring cards blend where they cross; the canopy's light and shade come from its smooth normals. Cards that turn edge-on to the camera fade out instead of smearing into streaks. Sakura now read as soft blossom clouds; no more flat diamond shapes.
- **A gentle breeze**: crowns drift a few centimetres and grass tufts bend from the root (a little more in the rain).
- **雑草 — roadside weeds and wildflowers**: tufts of grass with white daisies, dandelions and small purple flowers along country shoulders and paddy edges, sakura verges and the grassy slopes of the coast, plus the odd weed at the foot of city walls.
- Fireflies stay hidden when it rains.

## 2026-10-20 · 23:xx — City intersections: side streets, signals, 歩道橋
- **Side streets** open at every crosswalk in the city: real asphalt lanes with edge lines running off between the blocks, lined with houses and little shops facing the street, utility poles and their own sagging wires — the gaps between buildings now have depth, like the alleys in anime backgrounds.
- **止まれ** painted in the lane of each side street (blended road-paint decals, so the strokes survive at grazing angles instead of being alpha-tested away).
- **Japanese traffic signals** (horizontal 青・黄・赤 on an arm over the lane, with visors) for both directions — a calm green wave; they glow at night.
- **Pedestrian overpasses (歩道橋)** over some intersections: blue steel deck with white panels, a name plate (本町歩道橋 …) and stairs down to both sidewalks.
- Smoother streaming: terrain normals come from the grid itself (one height sample per vertex instead of five), and terrain, intersections, rivers and countryside now build in smaller steps so a single frame never does a whole block of work.
- Test hooks: `&park` (hold the car still), `&cam=top` (top-down layout view), `&yaw=<deg>` (look sideways).

## 2026-10-20 · 22:xx — Rivers, bridges and mirror-like rice paddies
- **Rivers** now cross the road every ~1.2 km in the countryside and on the cherry-blossom avenue: a carved channel with grassy levees (土手), riverside flats sprinkled with wildflowers, gravel paths along the levee tops, and blue-green water flowing past with sky reflections, sun glints and foam at the banks. You can hear it as you approach.
- **Bridges** carry the road across: concrete deck and piers, vermilion railings on the sakura avenue and pale green ones in the countryside, stone end posts (親柱) with carved names (桜橋, 川原橋, 緑橋, 月見橋) and old lamps. On the avenue the riverbanks are lined with sakura.
- **Flooded rice paddies mirror the sky**: the sky gradient, soft cloud patches and the sun's glint, rippled by the breeze.

## 2026-10-20 · 21:xx — Birds and a living soundscape
- **Birds**: little flocks of V-winged birds cross the sky by day, crows head home against the dusk sky, gulls circle over the beach on the coast, and birds perch in small rows on the power lines in town and countryside.
- **Soundscape** (all synthesized, shaped by zone, time and rain): sparrow chirps, the bush warbler's ホーホケキョ on the cherry-blossom avenue, crows cawing at dusk, gull cries by the sea, a frog chorus over the rice fields at night, crickets after dark, and the occasional bicycle bell in the city. Birds go quiet in the rain; the frogs get louder.

## 2026-10-20 · 19:xx — On GitHub, playable inside an X post
- Published at https://github.com/AhmetHuseyinDOK/infinite-calm-drive with GitHub Pages hosting: https://ahmethuseyindok.github.io/infinite-calm-drive/
- **X player card**: posting the Pages link shows the game playable inline in the post. `?embed=1` (or any iframe) uses lighter quality, a compact start screen for tiny frames, and hides the HUD until you tap; taps are accepted from touch, pointer, mouse or click events (some in-app webviews send only one kind), touch steering works without pointer events, and iOS audio unlocks on the first touchend.
- Open Graph tags + a 2×2 preview card (`card.png`) so links unfurl nicely in other apps too.

## 2026-10-20 · 18:xx — Weather & drifting cloud shadows
- **Weather**: days now drift between clear, cloudy and gentle rain (slow ~30 s transitions; the ⛅ button or `R` cycles auto → ☀ → ☁ → ☂).
  - Overcast: a soft grey stratus deck rolls over the sky, the cumulus turn grey, sunlight and shadows soften, the sun streaks fade, the sea loses its glitter.
  - Rain: thin streaks falling around the camera, wet darkened asphalt with a sky-coloured sheen and puddles with rain rings, wetter-looking lamp pools at night; the car's rear wiper sweeps; soft rain hiss plus drops pattering on the roof (chase cameras).
  - Overcast nights are deep blue rather than black, and the brightest shop interiors no longer bloom into glare.
- **Drifting cloud shadows** on sunny days: big soft patches slide across fields, hills, streets, the car and passing trains.
- Test hooks: `?weather=clear|cloudy|rain`.

## 2026-10-20 · evening — Flash fixes
- **Fixed flashing on phones**: the road's tyre-track shading raised a negative number to a power, which is NaN on many mobile GPUs (Apple, Mali, Adreno); the glow pass then smeared those NaN pixels into flashing black/white patches. Also replaced every "reversed" smoothstep (undefined behaviour in GLSL) with safe forms.
- **Clouds no longer flip**: each cloud used to mirror its painted texture the moment the sun passed behind it (a pop somewhere in the sky every ~20 s). Clouds are now painted lit from both sides and blend smoothly as the sun moves.
- **No blank frames on resize**: resizing (phone toolbar, rotation, auto quality) now happens right before drawing, never between frames.
- **No pop-in at the horizon**: fog now fully covers the far edge where new scenery streams in (draw distance raised to 760 m); the sea fades in as the coast approaches instead of appearing at once; near clip plane nudged out for steadier depth.

## 2026-10-20 · 16:xx — Level crossings & a smoother start
- **踏切 level crossings** in the city and the countryside: gravel track bed with concrete sleepers, rails, rubber crossing panels, overhead catenary, striped alarm posts with crossbucks, "踏切注意" plates, yellow "crossing ahead" signs and stop lines. The road levels out and straightens around each one.
- **A passing train**: most crossings ring their bells (カンカンカン), the barrier arms come down, the red lamps alternate, and the car brakes gently to a stop at the line while a three-car green-and-orange commuter train rolls through (pantograph, lit windows at night, LED destination sign). Then the arms lift and the drive continues. Wheel "ta-tan" thumps and a low rumble as it passes.
- **Faster start**: only the first 260 m are built before the title screen; the rest streams in while you read it (≈11 s → ≈5 s on the test box).
- **Adaptive quality ladder**: if frames stay slow it steps down resolution → bloom → shadow detail → view distance, and remembers the level for your next visit. `?q=low|mid|high` pins a level.

## 2026-10-20 · 00:xx — Anime 3D rebuild
- Rewrote the game in three.js: cel-shaded buildings, blue-tinted shadows, GPU-painted cumulus, bloom + sun streaks, card-based foliage, four zones (city, sakura avenue, coast, countryside), day/night cycle, three cameras.
