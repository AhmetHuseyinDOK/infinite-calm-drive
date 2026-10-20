# Changelog — Infinite Calm Drive

Live: https://calm-drive.ustalabs.com · the original 2D version lives at `/classic.html`.

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
