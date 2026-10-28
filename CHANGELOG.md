# Changelog — Infinite Calm Drive

Live: https://calm-drive.ustalabs.com · the original 2D version lives at `/classic.html`.

## 2026-10-28 · 19:20 — The player's car as the paintings' car
- **The car is the paintings' rounded mint crossover now, not the boxy kei van** (the user: "i want high quality but with anime
  style"; the design the user chose: the paintings' car). It is a Suzuki-Hustler-like kei car as `ref/city.png` draws it:
  - from behind: a curved hatch under a raked rear window with the seats behind it, big round ring tail lamps, a chrome emblem, the
    yellow 12-34 plate, a stop lamp, amber indicators and reflectors, a body-coloured bumper over a navy valance and a chrome tailpipe;
  - from ahead: round chrome-ringed headlamps, a chrome-framed grille, round fog lamps, and the driver and a passenger behind the glass;
  - from the side: the white roof, black arch mouldings, the silver door garnish and alloy wheels.
- **Its paint as each painting has it:** the city's mint, the cherry avenue's light blue, the coast's lighter mint and the country's
  white hatch panel. The start zone picks one, and only that painting is fetched.
- **Real 3D where it moves:** the wheels spin, and the front pair steers through lane changes and bends. Past ~25 km/h their faces are
  the painted wheel spun, so the spokes don't strobe. The mirrors, wipers, lamp lenses and tailpipe are modelled, and the rear wiper
  sweeps in the rain.
- **From the chase camera, closer to the paintings.** ΔE of the car's box against each painting at noon: city 12.3 → 3.3, avenue
  23.0 → 2.5, coast 7.8 → 2.9, country 17.7 → 4.4. It is better at golden hour, sunset and night too, except the city at night
  (4.3 → 5.4) and the avenue at golden hour (5.0 → 6.8).
- **By the hour:** the ring lamps glow cream by day and as a warm orange ring at night, and turn red when braking. The headlamps light
  at night, the street lamps sweep over the paint, and each livery has its own fill in the shade.
- Seeded captures of every start are identical to live outside the car and its shadow. At night the car's lamps reach the bloom and
  its headlamps the road ahead, so the frame moves by 1–2 levels. Without the new files the old car drives, identical to live.
- How:
  - `painted.js`: `loadCar` (a compact geometry binary, one livery's WebP and a lamp-mask sheet, each checked by bytes; null on any
    failure leaves the procedural car).
  - `car.js`: `paint()` (the paint's program with the painting as its map, the lamps lit from the mask sheet, the wheels' spin and
    steer, the plate, wiper, halos and streaks refitted).
  - `main.js`: loaded at every start and swapped in before the warm-up; the livery's fill by the hour; the crossing's axles; a
    `?livery=` test hook.
  - `spray.js`: the tyre spray and exhaust come from the new wheels and tailpipe.
  - The pipeline is in `~/cdtest/s35e` (`clean.py`, `carhull.py`, `pack.py`); the lossless masters are kept.
  - +8.0 KB of code (+3.1 KB gzipped).
- Assets (`assets/models/car/`):
  - `car1.bin` (81 KB: 12-bit positions and uv as delta varints, octahedral normals);
  - `car1.json`;
  - four liveries' `car1_*_hi.webp` (77–84 KB) and `car1_*_lo.webp` (29–31 KB);
  - `car1e_hi/lo.webp` (5 / 2 KB);
  - `CREDITS.md`.
- Programs: two fewer at every start (63 / 62 / 62 on a Japanese start, 83 at a Galata one): the painted car's one program replaces the
  old car's three. Nothing compiles mid-drive.
- The car: 14 → 11 meshes, 14,476 → 10,064 triangles.
- Cost: the desktop machine was down, so these are this shared box's Vega, at load 9–20:
  - the car's draws (L S S L): desktop 1.31 / 1.27 → 1.02 / 1.21 ms, phone tier 1.15 / 0.97 → 0.72 / 0.83;
  - its shadow is unchanged (0.42 / 0.40 → 0.39 / 0.52);
  - city drives (L S S L L S): desktop 21.62 / 21.97 / 21.29 → 20.76 / 22.03 / 22.10 ms, phone 13.64 / 12.81 / 14.08 → 13.35 / 12.96 /
    13.76 (alike);
  - start-up: +171 KB on a desktop and +120 KB on a phone (~+0.3 s at 3 Mbps in the step agent's clean pairs). The time to the start
    button was lost in the box's load (live 4.4–15.4 s, staging 4.9–9.3 s).
  - 0 shader errors in all eleven zones and at night on every tier; no console errors at q=low, mid and high; the embed starts on tap.
- Left over:
  - the kerb side is the road side's painting mirrored (the fuel lid shows on both sides);
  - the coast at night (ΔE ~17);
  - the country's two-tone shows only from behind;
  - the front wipers don't sweep;
  - re-time on the desktop when it is back.

## 2026-10-28 · 15:20 — The Galata Bridge as it really is: Karaköy → the bridge → Eminönü → Sirkeci
- **The zone is the approved real route now, not the concept's 1.5 km of bridge** (the user: "the galata köprüsü … should be
  realistically accurate"; "we should actually have their exact coordinates"): `galata`, 1500 m southbound, keeping right. Kemeraltı
  Caddesi through Karaköy with its two gentle bends (0–580 m), the bridge's real 460 m straight at 209° (580–1040 m), then Eminönü's
  sharp left turn round Yeni Cami onto Reşadiye Caddesi towards Sirkeci (1040–1500 m; the last 260 m hand over to the town). The
  road's bends are the real road's, within ~2 m of the real line. At every checkpoint the Süleymaniye, Yeni Cami, the Galata Tower
  and Topkapı stand within 5° of their real bearings (20° inside Eminönü's turn, where the eye camera aims round the bend), at their
  real distances.
- **The bridge the right way round**, as OpenStreetMap and the photos have it: our three lanes; on our right the west walkway behind
  its kerb wall, its pale teal lattice railing, the fishermen and the tall swan-necked lamps; on our left the tram line's fences, the
  T1's tracks with its dark green masts between them, the northbound carriageway and the east walkway. The lifting span's four
  control towers stand at the deck's outer edges (pale grey-teal panels, an arch, the control room's windows, a curved hood), with
  red-and-white barriers before them. Under the walkways, the lower deck's restaurant row: terrace roofs, awnings, sign boards and the
  promenade's pale blue railing.
- **Karaköy and Eminönü on their real outlines**:
  - ~500 OpenStreetMap buildings, each on its own footprint, 4–7 storeys, their fronts to the road with shops (rooms behind the
    glass: the user's rule), tall windows and cornices; the fish market's restaurants and stalls one or two storeys;
  - Kemeraltı's median under its black iron fence, the T1 in red setts, plane trees and bollards; the T1's stops at Karaköy and
    Eminönü with their shelters;
  - **Yeni Cami** in 3D where it stands, close on the right after the turn: pale grey stone under lead-grey domes, its arcade,
    courtyard, cascade of domes and two minarets; Turhan Hatice Sultan's tomb behind it;
  - Karaköy's car park beside the bridge with three of the town's painted dolmuşes in its bays. There are no box cars, boats or
    people: the squares' people will come painted, with the walkers.
- **The skyline at its true bearings, painted, by the hour**: five landmark cards (the Süleymaniye on its hill, the Galata Tower over
  Karaköy behind us, Sarayburnu and Topkapı, Yeni Cami until its 3D model is in view, the old city's hill behind Eminönü) stand where
  the real ones stand. Each is painted with Grok Imagine from a Commons photo and turned to the camera. All round them, the far
  shores' skyline at its real height from open elevation is painted as a far city in haze, with windows lit at night. The concept's
  painted old city gives way to them, and comes back if they fail to load.
- **The T1 and the ferries follow the real place**: each tram car rides the real tracks on its bogies; the ferries sail only on the
  real Golden Horn.
- The zone card credits the map ("map data © OpenStreetMap contributors"); `assets/real/galata/CREDITS.md` lists every source and
  licence.
- Seeded captures on the desktop: every other start and Audit 2's places at golden hour, sunset and night are identical to live.
  - The exceptions are known noise. The mountain start's faint pixels differ between live's own loads too.
  - The Bosphorus start was 484 px off in one staging load and 0 px in the next. The town at sunset differed by 168 px, as much as
    live against live.
- Without the new cards the bridge keeps the concept's painted old city (83 programs, no errors); without the dolmuş model the bays
  stay empty.
- How:
  - `real_galata.js` (new, generated by `~/cdtest/g35/scripts/gen_galata.py` from the approved route and OSM) holds:
    - the road's curvature per 2 m step;
    - the bridge's and towers' places;
    - the T1's tracks;
    - a 2 m water raster;
    - the buildings;
    - Yeni Cami's outline;
    - the landmarks;
    - the far skyline's angles;
    - the car park.
  - `path.js`:
    - `galL`, `galBridge`, `galRW` (the widths);
    - the real bends, added by the zone's weight from its start, so the Bosphorus's sea keeps its roll;
    - `galFrame` / `galWorld` / `galWater(XZ)`, which put real places into the world;
    - the zone's ground;
    - `townLanding` retired.
  - `galata.js` (new): `galSect` (the cross-section by where on the road), `galTrack`, `GAL_STOPS`.
  - `chunks.js`:
    - the terrain's columns and the surfaces beside the road;
    - `placeGalata` (rewritten), `placeGalBlocks`, `placeGalSquares`, `placeGalQuay`, `galIronFence`;
    - a lighter tier on phones.
  - `props.js`: `galLamp`, `galMast`, `galTower`, `galBarrier`, `galShelter`, `bollard`, `galFacade`, `yeniCami`, `galDome`,
    `galMinaret`.
  - `materials.js` (`Z_GAL` only; every other zone's source is as it was): `galGround`, `galTramBed` (kind 11), the lane lines.
  - `realsky.js` (new): `loadRealSky`, `makeRealSky` (the cards in one draw, the ring in another; nothing allocated per frame).
  - Elsewhere:
    - `painted.js`: a band's hidden rows; `BAND_TONES` exported;
    - `tram.js`: car by car on the real tracks;
    - `ferry.js`: the water test;
    - `main.js`: the Galata start (35 m before the bridge), the middle lane on three lanes, the loads and the credit line.
  - +85 KB of code (+38 KB gzipped), most of it the zone's data.
- Assets: `assets/real/galata/`:
  - `cards1.json`;
  - `cards1_hi.webp` (250 KB) and `cards1_lo.webp` (123 KB): five cards from Commons photos, CC BY 3.0 and CC BY-SA 3.0 / 4.0;
  - `CREDITS.md`.
- Programs: 85 / 84 at a Turkish start (+2: the cards and the ring) and 65 / 64 at a Japanese one (unchanged). Turkey's lazy load goes
  65 → 84 / 64 → 83 (live 82 / 81) with no frame over 12 ms. Nothing compiles over the zone in rain or at night.
- Cost (the desktop machine, GTX 1660):
  - **Whole frame over Galata drives (L S S L L S):**
    - desktop: 3.05 / 3.07 / 3.03 → 3.01 / 3.07 / 3.02 ms (alike);
    - phone tier: 3.19 / 3.68 / 3.21 → 3.48 / 3.47 / 3.47 (+0.27 ms on live's steady runs). That is still within the old Turkish
      zones on the same tier: the Bosphorus is 3.60 / 3.62 (live) and 3.68 / 3.65 (staging), the town 3.95–4.02.
  - **World build over the zone's chunks:**
    - desktop: 50.4 / 50.4 → 125.8 / 124.0 ms per 20 chunks, like the Bosphorus and the town;
    - phone tier: 49.1 / 48.3 → 104.3 / 102.5;
    - flat out at 4× throttle: world spikes 1 / 0 (live 0 / 1), worst frame 18.7 / 9.6 ms (live 14 / 19.5).
  - **Start-up:**
    - desktop Galata start: 2305 / 2308 / 2300 → 2333 / 2319 / 2787 ms;
    - desktop city start: unchanged, 1762 / 1745 → 1762 / 1680;
    - a 3 Mbps phone at a Galata start: 9102 / 9146 → 9858 / 9888 ms (+0.75 s for +206 KB).
  - 0 shader errors in all eleven zones, in Galata by the hour on every tier and over both hand-overs; no console errors at q=low,
    mid and high; the embed starts on tap.
- Left over:
  - Karaköy's and Eminönü's fronts are the town's painted bays and windows, not the streets' own 19th-century fronts;
  - Rüstem Paşa, the Beyazıt Tower, Hagia Sophia, the Blue Mosque, the Haliç bridges and Üsküdar are only the far ring;
  - no people on the squares yet (step 35f's painted walkers), no boats at the fish market's quay, no taxis or buses;
  - the tram's cars are rigid round Eminönü's tight bend.

## 2026-10-28 · 10:18 — Japan's crossing train as a painted 3D JR commuter train
- **The crossing's train is a JR East E231 now, not three grey boxes** (the user: "the train is bad"; "i want high quality but with anime
  style"): a three-car suburban train in the Shōnan colours as an anime film paints one: stainless sides with fine ribbing, the
  orange-over-green stripe, four door pairs a car with the commuters' silhouettes behind the bluish glass, the cab's black-masked
  windscreen, its destination display (各駅停車 東京), round headlamps over the tail-lamp clusters, a dark skirt and coupler.
- **Built car by car, with depth:**
  - each car type (the cab car, the middle car) has its own painting, so doors and windows repeat as on a real train;
  - the body is the paintings' own cross-section (the wide body's tumblehome, the eaves' rounded corners, a low roof dome), with a
    rounded nose;
  - the bogies' side frames are the painted bogie in front of 3D wheels that read the same at any speed;
  - the underframe's boxes and the air conditioners are painted from the elevations;
  - a single-arm pantograph rises to the crossing's contact wire; bellows and couplers join the cars.
- **By the hour:** the leading cab's headlamps, the trailing cab's tail lamps and the display are lit day and night; from dusk the
  saloon glows warm round the commuters. The train has a soft lighting ramp of its own, so the side the waiting car sees (always a
  little turned from the sun) isn't one dark slab.
- Seeded captures on the desktop: every start and Audit 2's places are identical to live (the mountain start's faint pixels differ
  between live's own loads too); the crossing with its train differs only at the train. Without the new files the old train runs,
  identical to live.
- How:
  - painted.js: loadTrain (a geometry binary of shared parts, a JSON index with byte sizes, WebP hi/lo; null on any failure: the old
    train).
  - crossing.js: makeTrain's paint() stamps the three cars from the parts (the trailing cab turned round) into one indexed mesh in place
    of the boxes; same interface, pitch and timing.
  - materials.js: trainRamp (made with the train's material: a texture's id draws random numbers).
  - main.js: loaded with the start's assets at a Japanese start (or a Turkish one within TR_NEAR of Japan) and made last; at other
    Turkish starts loaded as the drive nears Japan and swapped in while no train runs; the atlas's program (makeAtlasChain) on its own
    texture pair.
  - Pipeline (~/cdtest/s35c): paint.py, train.py, pack.py; lossless masters kept.
  - +3.8 KB of code, +1.1 KB gzipped.
- Assets: assets/models/train/: train1.bin (91 KB, 32 KB gzipped; 4,244 triangles a cab car, 4,838 the middle car), train1_hi.webp
  (103 KB), train1_lo.webp (38 KB), train1e_hi/lo.webp (9 / 4 KB).
- Programs: one fewer at a Japanese start (65 / 64: the old train's own program isn't compiled any more). None compiled mid-drive with
  a train passing, or in Turkey's lazy load (no frame over 12 ms).
- Cost (the desktop machine, GTX 1660):
  - Its draw while it passes: 0.034 / 0.036 → 0.055 / 0.057 ms on desktops, 0.033 / 0.034 → 0.055 / 0.054 on the phone tier.
  - Whole frame over country drives (eight interleaved runs): desktop 3.13 / 3.01 / 3.14 / 3.00 → 3.00 / 3.16 / 3.21 / 3.12 ms, phone
    tier 4.01 / 4.03 / 4.07 → 4.02 / 4.05 / 4.04. City drives desktop 3.28 / 3.35 / 3.33 → 3.38 / 3.25 / 3.27.
  - Start-up the same on desktops (city 1676 / 1707 / 1750 → 1661 / 1677 / 1769 ms). +0.4 s at a city start on a 3 Mbps phone as
    served locally (6845 / 6861 → 7289 / 7293 ms); less on Pages, which gzips the .bin to 32 KB.
  - 0 shader errors in all eleven zones and at the crossings by the hour and tier. No console errors at q=low, mid and high; the
    embed starts on tap.
- Left over:
  - the sides are the paintings' own ~77 px/m (a little soft from 2–4 m);
  - one painted bogie for all six, flat-toned wheel faces;
  - one livery.

## 2026-10-28 · 07:08 — The Turkish town's dolmuş as a painted 3D minibus
- **The dolmuş is a Ford Transit now, not a yellow box** (the user: "the bus in turkey is bad"; "i want high quality but with anime
  style"): a high-roof Transit minibus as an anime film paints one. Its body is shaped from Grok's side, front and rear paintings and
  painted by them: tinted windows with passengers' silhouettes, door seams and handles, wrap-round headlamps, tail-lamp clusters, grey
  bumpers, a route card behind the windscreen and Turkish plates. Its wheels, door mirrors and wipers are 3D, the mirrors painted from
  the paintings' own mirrors.
- **Clean from every side, up close:** the seams between the paintings run as smooth lines round the corners, the wheels sit in
  closed wells, the rounded body shades softly (the car's soft terminator), and the windscreen carries a sky reflection.
- **Two liveries:** yellow (as in the town's concept painting) at each pass's first and third stops, and a white city minibus with a
  blue band at the second. Which one is picked by the stop, so the town's layout is unchanged.
- **By the hour:** at dusk its headlamps and tail lamps come on and its saloon glows warm round the passengers. Beyond 60 m it switches
  to a 1.5k-triangle version (the switch doesn't show).
- Seeded captures on the desktop: the ten other starts and Audit 2's places are identical to live (the mountain start's 1.5k faint
  px differ between live's own loads too). The town start differs only at the dolmuş. Without the new files the town start is
  identical to live.
- How:
  - painted.js: loadDolmus (geometry binary, JSON index with byte sizes, WebP hi/lo; null on any failure: the old dolmuş).
  - props.js: setDolmus, dolmus (the old builder stays as the fallback), dolmusGB (every near mesh, then every far one, in one GB).
  - chunks.js: the dolmuş's own mesh per chunk (M.atlasDol and its shadow twin), World.dolLod (its draw range by the camera's
    distance, DOL_NEAR 60 m); placeTown passes the stop's index.
  - main.js: loaded with Turkey's assets; made last at a Turkish start and after the fishermen in Turkey's lazy load; the atlas's
    program (makeAtlasChain) on its own texture pair with GRAD_CAR; __dbg.dolmus.
  - Pipeline (~/cdtest/s35b): clean.py (mirrors, wipers and the side's headlamp inpainted out; the windscreen's reflection),
    dolhull.py (the q1 visual hull with closed wheel wells and seams cut along smooth lines; wheels, mirrors, wipers; the far version,
    the white livery, the night map, the binary), pack.py; lossless masters kept.
  - +3.9 KB of code, +1.3 KB gzipped.
- Assets: assets/models/dolmus/: dolmus1.bin (138 KB: 7,648 + 1,460 triangles), dolmus1_hi.webp (123 KB, both liveries),
  dolmus1_lo.webp (47 KB), dolmus1e_hi/lo.webp (10 / 5 KB). First visit at a town start +270 KB desktop / +190 KB phone; a Japanese
  start fetches them in Turkey's lazy load.
- Programs: unchanged (83 / 82 at a Turkish start, 66 / 65 at a Japanese one). None compiled mid-drive or in the lazy load (no frame
  over 12 ms).
- Cost (the desktop machine, GTX 1660):
  - Its draw: 0.05 ms a frame on desktops and 0.065 on the phone tier.
  - Whole frame over town drives: desktop 3.31 / 3.27 / 3.25 → 3.24 / 3.28 / 3.22 ms, phone tier 4.26 / 4.20 / 4.27 → 3.96 / 4.12 /
    3.98; at night 4.18 / 4.24 → 4.12 / 4.21.
  - World build within 2% (desktop 118.8 / 117.1 → 122.5 / 119.0 ms per 20 town chunks); no world spikes on a phone at ×4.
  - Start-up the same on desktops (town 2348 / 2360 / 2337 → 2363 / 2371 / 2344 ms). +0.7 s at a town start on a 3 Mbps phone
    (8530 / 8520 → 9206 / 9219 ms: the 190 KB).
  - 0 shader errors in all eleven zones and in the town by the hour and tier. No console errors at q=low, mid and high; the embed
    starts on tap.
- Left over:
  - the kerb side shows the road side's painting mirrored;
  - the roof is one flat colour, and the bumper top steps ~5 cm at the front corners;
  - the geometry could be encoded smaller for slow phones;
  - no IETT bus yet.

## 2026-10-28 · 04:46 — The Galata Bridge's fishermen as painted anime people
- **The fishermen are paintings now, not mannequins** (the user: "that fisherman was bad"; "i want high quality but with anime
  style"): twelve men painted as anime characters, with faces, hands, caps and the folds of their clothes. Four hold their rods in
  both hands, four lean their forearms on the railing, four sit on camping stools (one with a tulip glass of tea, one with prayer
  beads).
- **They turn as you pass:** each shows the painted view nearest to where the camera stands round him (his side, his back
  three-quarter, his back), cross-fading as the car goes by; a parked camera sees one clean view. The rod holders' views are all
  painted, so a rod hand is never mirrored.
- **Their things stay 3D:** rods rising from the painted hands along the painted rod, lines to the water, propped rods with cork grips
  and reels, buckets with bails, knotted bags and tackle boxes. Each casts his own figure's shadow and has a soft contact shadow.
- **By the hour:** as painted by day; a thin gold or rose rim on the edges facing a low sun at golden hour and sunset; dark figures
  against the lit city at night.
- They stand where they stood: the old builder's random numbers are drawn in order, so the boats keep their places. Seeded captures on
  the desktop: every other zone's start and Audit 2's places are identical to live (the Bosphorus start in two of three staging
  loads, the third showing the foliage atlas's known load noise). The Galata start differs only in the fishermen. Without the people
  files the Galata start is identical to live.
- How:
  - fishers.js (new): one instanced card per fisherman (one draw) and one for the contact shadows; the views table as a float texture.
  - materials.js: makeFisherMaterials (the view picked, blended and turned in the vertex shader; a shadow twin turned to the light;
    the rim); U.uFishT, U.uFishRim.
  - props.js: paintedFisher, setFishers (step 33's smooth figures stay as the fallback).
  - chunks.js: chunk.fishers, World.fishVer; the fishermen's 3D things are drawn with the chunk's props (geom.js GB.expandFrom).
  - painted.js: loadFisherAtlas.
  - main.js: made last at a Turkish start, and in Turkey's lazy load after the tram; FISH_T, FISH_RIM; test switch st.fish.
  - +15.5 KB of code, +5.4 KB gzipped.
- Assets: assets/people/fishers1.json, fishers1_hi.webp (351 KB), fishers1_lo.webp (148 KB): Grok Imagine turnarounds anchored on the
  Galata concept, cut by ~/cdtest/s35/scripts/cut.py, packed premultiplied at q50 from lossless masters (~/cdtest/s35/masters).
  First visit at a Galata start +367 KB desktop / +169 KB phone; a Japanese start loads them only in Turkey's lazy load.
- Programs: 83 / 82 at a Turkish start (+3, compiled at load and in the lazy load); 66 / 65 at a Japanese one. None compiled
  mid-drive or after Turkey's lazy load (no frame over 12 ms).
- Cost (the desktop machine, GTX 1660):
  - The fishermen's draws with their props: desktop 0.79 / 0.75 → 0.67 / 0.68 ms, phone tier 0.99 / 1.00 → 0.93 / 0.92 (13 draws a
    frame → 2).
  - Whole frame over Galata drives: desktop 3.47 / 3.07 / 3.13 → 3.06 / 3.04 / 3.07 ms; phone tier 3.17 / 3.16 / 3.15 → 3.68 /
    3.19 / 3.15 (one outlier); golden hour 3.00 / 3.27 → 2.94 / 2.91, night 3.52 / 3.72 → 3.53 / 3.60.
  - World build over the bridge's chunks −10–12% (desktop 56.2 / 55.1 → 47.4 / 50.6 ms per 20 chunks); no world spikes on a phone
    at ×4 (live had one).
  - Start-up the same on desktops (Galata 2272 / 2290 / 2335 → 2237 / 2295 / 2261 ms); +0.3 s on a 3 Mbps phone at a Galata start
    (8376 / 8033 → 8461 / 8465 ms).
  - 0 shader errors in all eleven zones, and at Galata at golden hour, sunset and night on the phone tier and at q=low. No console
    errors at q=low, mid and high; the embed starts on tap.
- Left over: the outline changes at the middle of a view change; the seated and leaning men's far side is their painted side
  mirrored; they don't move.

## 2026-10-28 · 01:18 — Rooms behind every shop window: the Turkish town, the chain stores and the shopping street's other shops
- **The Turkish town's shops have rooms behind their glass** (the user's rule: "the shops on turkey as well they should have interior
  3d this is a general rule"):
  - a bakery's racks of simit, round loaves and pide over a glass counter of pastries;
  - a bakkal's packed shelves, drinks fridge and old till, and a mini market's aisles;
  - a tea house's samovar and double teapots behind the counter, and small tables with tulip glasses and stools along dark panelling
    under old photographs;
  - a barber's chairs before their mirrors and a red bench on a chequered floor;
  - a pharmacy's white shelves and counter, and a greengrocer's tiers of crates.
  In about half of them the baker, the grocer, the çaycı, the barber or the pharmacist stands at the back.
- **The chain stores too:** the konbini look into a bright white store, with shelves of onigiri, snacks and cup noodles and drinks
  fridges along the back. Through their doors you see the counter with its till, coffee machine and hot-snack case, and a clerk. Their
  stripes, badges and magazine rack stay on the glass. BİN, ŞAK and A·110 look into a discount market's aisles, with pallets under
  red-and-white price boards and the till; their offer posters stay on the glass.
- **And the shopping street's last flat windows:** the plain shopfronts' windows and glass doors (a general store, a bakery, a
  bookshop, a florist, a clothes shop, a café) and the doorways under a noren look into the painted bays' rooms of their kind. Their
  posters, door bars, handles and boards stay in front.
- They are painted as a polished anime film's backgrounds (the user's quality rule), checked at eye level, 1:1 at 1080p. As the car
  passes, the walls shift behind the glass; the rooms are lit as the windows were, by day, at dusk and at night.
- Seeded captures on the desktop: every other zone and Audit 2's places are identical to live (the cherry avenue and the mountain
  starts in five live and five staging loads each). The town's start differs only inside its shop windows (44k px), the city's start in
  842 px down the street. Without the new room files the town and the konbini are identical to live.
- How:
  - materials.js: roomSet (one room set's uniforms per material); makeAtlasWRooms (the town's room program, M.atlasWI); makeChainRooms
    (the chains on the street's room program); RM_N 24; uRmLo.
  - props.js: PROC_ROOMS; the town's bays take the shop codes 5–8.
  - textures.js: SHOP_GLASS, stickerHolesJ.
  - painted.js: loadRoomAtlas for region sheets, roomTexture, roomGlass.
  - chunks.js, and main.js: rooms1jp at every start, rooms1tr with Turkey's assets and in its lazy load.
  - +5.8 KB of code, +2.3 KB gzipped.
- Research: interior mapping in its one-image form, as step 31, and Turkish shop interiors. Grok Imagine image_edit on drawn one-point
  rooms carrying each bay's goods, repainted crisp; the shopkeepers from a second edit.
- Assets: assets/rooms/rooms1tr.json, rooms1tr_hi.webp (269 KB), rooms1tr_lo.webp (87 KB); rooms1jp.json, rooms1jp_hi.webp (48 KB),
  rooms1jp_lo.webp (15 KB). WebP q50 from lossless masters (~/cdtest/s34). First visit +55 KB desktop / +23 KB phone at a Japanese
  start, +324 / +114 KB at a Turkish one.
- Programs: 66 / 65 at a Japanese start (unchanged); 80 / 79 at a Turkish start (+1, compiled at load and in the lazy load). None
  compiled through sunset, night or rain, on drives past the town's shops and the konbini, or in Turkey's lazy load (no frame over
  12 ms).
- Cost (the desktop machine, GTX 1660):
  - The shop draws over drives: town +0.04–0.06 ms desktop and +0.06 phone tier, the chains +0.06; city shops +0.06 / +0.08.
  - Whole frame over drives: town desktop 3.19 / 3.20 / 3.20 → 3.26 / 3.28 / 3.62 ms (one outlier); phone 4.35 / 4.20 / 4.34
    → 4.08 / 4.08 / 4.09. City desktop 3.28 / 3.21 / 3.20 → 3.22 / 3.28 / 3.28.
  - World build over the town's chunks the same (desktop 119.3 / 120.8 → 117.6 / 119.4 ms per 20 chunks).
  - Start-up the same on desktops (city 1751 / 1727 / 1675 → 1759 / 1767 / 1649 ms; town 2283 / 2241 → 2284 / 2203). On a 3 Mbps
    phone +0.3 s at a town start (7845 / 7751 → 8151 / 8031 ms: the 114 KB) and +0.1 s at a city start.
  - The town's room sheet takes ~23 MB of GPU memory on desktops at a Turkish start.
  - 0 shader errors in all eleven zones, and in the city and the town at night on the phone tier and at q=low. No console errors at
    q=low, mid and high; the embed starts on tap.
- Left over: per-chain clerks' uniforms; the general store's room shared by three window kinds; the upper floors' lit home windows.

## 2026-10-28 · 00:22 — Fix: the Galata tram was invisible in some Chromes
- **The tram shows in every Chrome now.** Its painted texture was drawn on a GPU-backed canvas, which Chrome 148 handed back empty,
  so the whole tram was cut away there (Chrome 156 drew it). It is drawn on a CPU-backed canvas now (tram.js paintTram), as the
  world and foliage atlases are. Found by the research pass for the people and vehicles.
- Checked on both Chromes: on 148 the tram overtakes and meets the car again by day and night; on 156 it looks the same as before
  (a few pixels of canvas rasterisation). Every other zone identical. Turkey's lazy load: no frame over 12 ms on desktop or phone.
  Start-up at a Galata start +~100 ms on desktops (2251 / 2150 / 2116 → 2341 / 2223 / 2284 ms: the canvas painted on the CPU).

## 2026-10-27 · 21:45 — The Galata Bridge's tram and fishermen: the T1 runs over the bridge, the fishermen as people
- **The T1 tram over the Galata Bridge** (the user: "in the galata you can actually add a tram there as well"): Istanbul's Bombardier
  Flexity Swift A32 in its livery, two cars coupled as the T1 runs them (60 m). It has a white body, a blue roof, a charcoal band of
  tinted windows with passengers behind them, a red stripe low along its sides, blue plug doors and a pale grey skirt. Its rounded
  noses rake back up the windscreen, with the terminus on an orange display over it (KABATAŞ towards Karaköy, BAĞCILAR towards
  Eminönü), its fleet number and round headlamps and tail lamps. On each car's middle section the pantograph reaches up to the contact
  wire, and there are bellows between the sections.
- **Now and then, both ways:** on the far track a tram comes towards us from the bridge's far end and meets the car (~32 km/h). On the
  near track one comes up from behind and passes the car (~47 km/h against its 40), then pulls in at the Eminönü end and waits there
  until we have gone by. That's one or two each way per crossing, and a Galata start finds one coming towards us beside the control
  tower. At dusk and night its windows light up warm round their passengers' silhouettes, and its headlamps and display glow.
- **The fishermen as people, not boxes** (the user: "the firsherman looks like they are from minecraft"): smooth figures (a rounded
  jacket over the hips, tapered legs and arms, round heads with hair, peaked or knitted caps, shoes) in four poses along the walkway's
  railing: the rod in both hands, in one hand, leaning their forearms on the rail with the rod propped beside them, or now and then on
  a camping stool. Their rods are longer and steeper (43–69° up, as the bridge's are held) and bend a little at the tip, with lines
  down to the water and buckets, white bags or tackle boxes at their feet. They stand where they stood: the builder draws the old one's
  random numbers in its order, so the boats after them keep their places.
- Seeded captures on the desktop: the ten other zones' starts and Audit 2's four places at golden hour, sunset and night are identical
  to live (0 px), the Bosphorus start and the town at night too. The Galata start differs: the fishermen, and the tram coming beside
  the tower.
- How:
  - tram.js (new): its painted texture pair, drawn at load on a canvas (no download); its body, the cross-section lofted along each
    section with superellipse noses; makeTram, a clone of the atlas material (the same program) with its own shadow twin; its comings
    and goings, from the frame time on random numbers of its own.
  - props.js: fisherman (indexed templates per pose and head, stamped and recoloured per figure), gridI, ellI, tubeI, latheI, boxI.
  - chunks.js: G.fish, the fishermen's own indexed mesh in the props' colour material.
  - main.js: the tram is made last of all at a Turkish start, and in Turkey's lazy load after the ferry (a frame at a time); test
    switch st.tram, __dbg.tram.
  - +18.9 KB of code, +8.0 KB gzipped. No assets.
- Research: the T1's rolling stock (Bombardier Flexity Swift A32, 29.7 m, and Alstom Citadis X04, both run in coupled pairs);
  photographs of both and of the bridge's fishermen (their poses, steep rods, buckets, bags and caps).
- Programs: unchanged (79 desktop / 78 phone at a Turkish start, 66 / 65 at a Japanese one). None compiled through sunset, night or
  rain, over the bridge on either tier, or in Turkey's lazy load (66 → 79 / 65 → 78, no frame over 12 ms).
- Cost (the desktop machine, GTX 1660):
  - Whole frame over Galata drives: desktop 3.07 / 3.05 / 3.04 → 3.04 / 3.05 / 3.06 ms; phone tier 3.15 / 3.15 / 3.08 →
    3.18 / 3.17 / 3.18; at night desktop 3.46 / 3.52 → 3.70 / 3.58.
  - Per draw: the fishermen's 13 draws a frame 0.37–0.40 ms (the old ones were in the props' mesh, whose draws fell 0.06–0.17 ms),
    their shadows 0.05–0.08; the tram 0.005 ms a frame on that drive (it was out of view most of the time).
  - The fishermen: 82.7k triangles over a Galata start's 15 chunks (the old ones 22.4k) in one more draw per bridge chunk;
    each tram 6.0k vertices.
  - World build over the bridge's chunks (median ms per 20) desktop 53.5 / 52.4 → 55.0 / 54.8, phone tier 52.9 / 53.0 → 56.4 / 56.5;
    the country's the same (67.1 / 67.8 → 66.4 / 66.6); no world spikes on a phone at ×4.
  - Start-up: at a Galata start +70 ms on desktops (2138 / 2126 / 2074 → 2219 / 2197 / 2187 ms: the tram painted and built); at a
    city start and on a 3 Mbps phone the same (7665 / 7595 → 7650 / 7716 ms). The tram's textures take ~10 MB of GPU memory on
    desktops (2.5 on phones).
  - 0 shader errors in all eleven zones, and on the bridge at golden hour and night, on the phone tier and at q=low. No console errors
    at q=low, mid and high; the embed starts on tap.
- Left over:
  - The tram's sides are drawn on a canvas (crisp but plain), not Grok-painted; no Citadis X04 (the T1's other, red-faced tram) yet.
  - It is 2.5 m wide (the real ones 2.65) to clear the portals' posts.
  - The oncoming trams come into view ~480 m ahead or wait at the far end; there is no platform at the Eminönü stop.
  - The fishermen don't move, and their faces are plain.

## 2026-10-27 · 18:57 — The chain stores: Japan's konbini and the Turkish town's markets, as anime backgrounds paint them
- **Konbini you know at a glance, under names of our own** (the user: "even though we don't say the exact name"): every konbini on
  the shopping street is one of three lookalikes, with the brand's colours, stripes, sign shape and layout but never a real name or
  logo. Most often a 7-Eleven-like "7 TWELVE" (a white fascia with orange, green and red stripes and a "7" badge); now and then a
  FamilyMart-like "FamilyMate" (green over white over blue, blue lettering) or a Lawson-like "RAWSON" (a blue band, white lettering,
  a milk bottle). The first pass of the city has all three: a 7 TWELVE at 668 m, then a FamilyMate and a RAWSON facing each other at
  770 m.
- **Their fronts as painted:** windows with the magazine rack behind the glass (or the coffee machine, the bento and the coolers),
  sliding doors, each chain's stripe band and badge stickers on the glass, a lit sign on a post over the roof's near corner, and the
  bins by the doors. **At night** they are the street's brightest fronts, cool white inside and along the fascia, but no longer a white
  blob: the old band bloomed into 13,724 near-white pixels at eye level, now 254.
- **The Turkish town's discount markets:** about one market in five is a BİM-like "BİN" (a red box logo on a white board over a blue
  stripe, blue frames, white offer posters), a ŞOK-like "ŞAK" (red over yellow, blue lettering on a red starburst, red frames, yellow
  posters) or an A101-like "A·110" (turquoise, white lettering). There are 11 in a pass, the first two at the far end of the opening
  view. Their boards span the fascia, there is no awning, and they are lit a cool white at night. The opening view's market is as it
  was.
- Which chain a store is comes from a hash of where it stands (no random numbers drawn, so the layout is as before). Seeded captures
  on the desktop: every other zone's start and Audit 2's four spots at golden hour, sunset and night are identical to live. The
  city's start differs in 2 px (the 7 TWELVE 528 m away) and the town's in 5 (its far chain markets). Without the chain files the old
  konbini and markets come back, identical to live (0 px in the city and the town).
- How:
  - textures.js: buildChainAtlas, which draws the signs, badges, stickers and bins round the painted bays (CHAINS_J, CHAINS_T);
  - painted.js: loadChainAtlas;
  - materials.js: makeAtlasChain, the atlas's program on the chains' own texture pair with its own shadow twin;
  - props.js: chainKonbini, chainMarket, setChains;
  - chunks.js: G.chain, a mesh in the chunks that hold a chain store (chunk.chains);
  - main.js: Japan's sheet loads with the start's assets, Turkey's in its lazy load.
  - +11.9 KB of code, +4.1 KB gzipped.
- Research: Street View of a 7-Eleven, a FamilyMart and a Lawson in Kōenji, and a ŞOK and an A101 in Eskişehir, found through
  OpenStreetMap; a BİM from Wikimedia Commons. Bays: Grok Imagine image_edit on the game's own painted bays. The lettering is drawn,
  not Grok's.
- Assets: assets/chains/chains1jp.json, chains1jp_hi.webp (48 KB), chains1jp_lo.webp (16 KB); chains1tr.json, chains1tr_hi.webp
  (64 KB), chains1tr_lo.webp (24 KB). WebP q50 from lossless masters (~/cdtest/s32). First visit +59 KB desktop / +29 KB phone, and
  +123 KB at a Turkish start.
- Programs: 66 desktop / 65 phone, and 79 / 78 at a Turkish start, unchanged. None compiled through sunset, night or rain, a drive
  past every chain store, or Turkey's lazy load (66 → 79 as live, no frame over 12 ms).
- Cost (the desktop machine, GTX 1660):
  - The chain draws: 0.06 ms in the city (desktop and phone tier) and 0.09–0.10 ms in the town; every other draw group the same.
  - Whole frame over drives, live → staging:
    - city desktop 3.25 / 3.26 / 3.30 → 3.30 / 3.38 / 3.28 ms; phone 4.63 / 4.48 / 4.64 → 4.50 / 4.49 / 4.49;
    - town desktop 3.17 / 3.13 / 3.24 → 3.19 / 3.24 / 3.25; phone 4.35 / 4.50 / 4.33 → 4.22 / 4.22 / 4.32.
  - World build the same: city 120.5 / 118.6 → 121.8 / 120.1 ms per 20 chunks, town 116.9 / 116.8 → 116.3 / 119.8; no world spikes
    on a phone at ×4.
  - Start-up the same: desktop ready 1699 / 1665 / 1680 → 1701 / 1694 / 1678 ms; phone at 3 Mbps 6628 / 6627 → 6686 / 6694 ms (the
    29 KB).
  - 0 shader errors in all eleven zones, and in the city and the town on the phone tier and at q=low. No console errors at q=low, mid
    and high; the embed starts on tap.
- Left over:
  - From the chase camera on a phone in portrait they show down the street but hide behind their neighbours as the car nears.
  - The konbini is still the old single-storey box, and each region's chains share their painted bays.
  - Japan's chain atlas takes ~11 MB of GPU memory on desktops; a tighter layout would halve it.
  - No rooms behind their glass yet, and Indonesia's chains are still to come.

## 2026-10-27 · 15:06 — Shop windows with depth: rooms behind the shopping street's glass
- **Rooms behind the glass:** every painted shop window and glass door on the shopping street now looks into a room: a bakery's
  shelves of bread running back to its counter, a bookshop's walls of manga, a florist's tiers of buckets, a clothes shop's rails and
  mannequin, a tea shop's caddies, a sweets shop's jars, a café's cake counter, a ramen counter with its stools, a general store's
  packed shelves, a delicatessen behind its noren. As the car passes, the side walls, floor and ceiling shift behind the window frames
  (the window was its painting, flat on the glass). From the chase camera you see mostly the shelves along the far side wall; beside
  the car, the back wall too.
- **The windows' bars and light as before:** mullions, transoms, frames and noren stay painted in front of the room. Each room is as
  bright as its window's painting was: warm by day, lit at dusk, calm at night as step 30 left it, the neon still the brightest thing.
  A window's room is mirrored or not by where it stands; in about half the bakeries, cafés, tea shops, general stores and ramen shops
  a shopkeeper stands at the back.
- Against the painting (Audit 2's boxes): the frame about the same (noon 10.48 → 10.44, golden hour 13.66 → 13.26, sunset 19.29 →
  19.26, night 10.34 → 10.40); right shops 26.7 → 23.8 at noon, left shops 10.3 → 12.8 (darker). The rooms are painted a little
  softer than the flat goods were (detail: left 2.19 → 1.93, right 3.92 → 3.75; the painting 3.74 / 4.02).
- Every other zone identical to live in seeded captures at noon, golden hour, sunset and night (the Turkish town within its own
  noise). The city differs only inside its windows (at noon 69k px of the frame). With the test switch off, or without the room
  files, identical to live.
- How: materials.js (makeAtlasRooms: the shop-front shader's room variant, M.atlasI; uRmOn), props.js (painted shop windows take
  light codes 5–8: roomCode), chunks.js, painted.js (loadRoomAtlas, which checks each file and falls back to the painted glass),
  main.js (the glass mask as a one-channel texture, warm-up, test switch st.rooms). +6.6 KB of code, +2.4 KB gzipped.
- Research: interior mapping (van Dongen 2008) in its one-image form (SimCity 5's, as Ben Golus rebuilt it). Rooms painted by Grok
  Imagine image_edit on a drawn box room carrying each window's own goods; all kept the drawn layout first time, the shopkeepers came
  from a second edit.
- Assets: assets/rooms/rooms1.json, rooms1_hi.webp (290 KB, 15 rooms at 448 × 538), rooms1_lo.webp (96 KB), glass1_hi.png (7 KB),
  glass1_lo.png (2 KB). First visit +302 KB desktop / +108 KB phone (measured); start-up the same (desktop ready 3685 / 3515 →
  3484 / 3803 / 4082 ms, box noise).
- Programs: 66 desktop / 65 phone (+1, compiled at load); none compiled through sunset, night, rain or a drive.
- Cost (the shared box's Vega; the desktop machine down): the city's shop-front draws +0.05–0.7 ms (desktop 3.89 / 4.17 → 4.57 /
  4.22 ms, phone 1.86 / 1.76 → 2.18 / 2.22; A/A ±0.2). The room is cast only inside each window's glass area, and phones use plain
  trilinear filtering. Whole frame over city drives: desktop 21.13 / 21.00 / 19.93 → 20.08 / 21.48 / 21.04 ms, phone 11.38 / 12.33 /
  13.25 → 12.31 / 13.26 / 13.44 ms (within the box's noise). World build the same. 0 shader errors in all eleven zones, on the phone
  tier and at q=low; no console errors at q=low, mid and high; embed starts on tap.
- Left over: the Turkish town's and the Bosphorus's windows, the homes' lit windows upstairs, the izakaya's lattice front, glass
  reflections; the rooms softer than the painted goods were.

## 2026-10-27 · 10:34 — Gap audit 2: the night as painted
- **A full moon in the sky, as painted:** at night under a clear sky the moon stands ~21° up in the frame, straight ahead over the
  road in the city, the avenue and the country, over the sea on the left by the coast and the strait, to the right of Uçhisar's road,
  as all seven night repaints have it: a pale disc with its seas in a faint blue-grey, the navy sky lighter round it. It was ~53° up
  and out of view. Its light, and so every shadow, is the old moon's.
- **The cumulus leave it a clear sky and catch its light:** the clouds drift slowly round the sky (at most 0.4°/s) so the moon stands
  in a clear patch; their tops and the edges next to the moon silver over a deep blue-grey body (they were a flat, washed-out blue).
- **The night sky as painted:** a deep navy at the top of the frame, bluer towards the horizon, thick with small stars down to it (it
  was a saturated royal indigo with a few). The sea's moon path runs under the moon.
- **The road and the pavements a moonlit blue-grey,** the moon's shadows soft (the road and the pavements were an indigo near-black);
  the headlights throw a warm pool round the car's nose and the tail lamps leave a faint red tinge on the road just behind them, as in
  the repaints.
- **The shopping street calm, its neon the brightest thing in it:** its shops' interiors, upper windows and white boards dimmer at
  night, the glow round the lights tighter. **Houses moonlit:** the painted houses' walls a moonlit grey round their warm windows (they
  stood black); the car's roof pale in the moonlight, its rear window dark (it glowed red). The grass, the round crowns, the cherry
  canopy, the fields, the verges and the tetrapods take the repaints' night tones.
- Against the night repaints (share-weighted ΔE of region medians, Audit 2's boxes): city 25.9 → 10.3, avenue 13.7 → 5.4, coast
  15.5 → 5.7, country 12.3 → 3.3 (all regions × shares: 6639 → 2445). Turkey's nights: the moon where their repaints have it, the top
  of the frame's sky 15–19 → 1.7–6.3.
- Noon, golden hour and sunset unchanged: all eleven zones' starts at noon and the four audit places at golden hour and sunset
  identical to live in seeded captures (the Turkish town: a pixel, within its own noise). The night look comes in from 0.8 (the moon
  from 0.81) and is gone by 0.245 at dawn (the moon by 0.225); not under grey skies.
- How: sky.js (moonSkyDir, MOON_EL / MOON_R; the moon's disc, seas and halo; uStarN; uEveT), main.js (nightPaint; NSKY_N, MOON_B, NT
  and NTZ: the road, the pavements, the shadows' strength, the lights, the bloom, the headlights, the houses' fill, the car's moonlit
  paint; refitted F_NIGHT, GH_N, BL_T, BLM_NIGHT, TP_NIGHT, CV_T, BKV_T, CF_N; test switch st.nightpaint), materials.js (uNtRoad,
  uNtWalk; windowLights: uLitN, uBoardD, uHouseFill, per-vertex vNt), painted.js (the moon's clear patch, CL_NIGHT, the k³ contrast,
  moonlit rims), car.js (uCarDT, the faint red tinge on the road), sea.js (the moon's path), props.js (a light code for white shop
  boards). No assets (+8.8 KB of code, +2.9 KB gzipped).
- Programs: 65 desktop / 64 phone, as before; none compiled through sunset, dusk, night, dawn, rain or Turkey's lazy load.
- Cost: the same. Per draw over the city's night drives on the shared box's Vega: all draws 24.2 / 33.6 → 23.3 / 33.7 ms (two box
  loads; the sky, the clouds and the atlas the same within ±0.1). Over night drives: desktop coast 31.09 / 31.22 / 30.34 → 31.38 /
  31.64 / 28.15 ms, phone country 12.48 / 13.57 / 13.68 → 13.93 / 13.15 / 12.94. One more draw at night (the red tinge). 0 shader
  errors in all eleven zones and on the phone tier at night and at dawn; no console errors at q=low, mid and high; embed starts on tap.
- Left over: the shopping street's big lit panes; the headlight pool on the car's left; one van for every zone; the Bosphorus's houses'
  walls at night; the avenue's far wet road; the light still the old moon's (shadows fall back-right while the moon stands ahead).

## 2026-10-27 · 06:27 — Gap audit 2: golden hour as painted
- **A second gap audit** (ref/GAPS.md, Audit 2): the four audit frames re-shot at noon and, for the first time, at golden hour,
  sunset and night against the paintings' repaints. At noon they are now 4.9–10.7 from the paintings; the evening and the night
  were 12–26 from theirs. Ranked: golden hour, the night, sunset, the city's shopfronts, the car. Golden hour is fixed here.
- **The evening sky as painted:** at golden hour and sunset under a clear sky the sky keeps the repaints' deep steel blue from ~20°
  up (blue-violet at sunset) over a pale band, the warm colour only along the horizon, the sun's glow hugging it round a sun drawn
  low ahead (its light and shadows unchanged). It was a pale lilac haze to the top of the frame. In Turkey too.
- **Golden hour's grass, cherry canopy and clouds as painted:** lawns, slopes and verges a warm olive-gold in the low sun (were a
  garish chartreuse and yellow), the round crowns olive, the cherry canopy a deep salmon-rose (was a pale peach), the clouds' shade
  a cool blue-grey under mauve (was a muddy taupe).
- Against the repaints (share-weighted ΔE): golden hour city 15.8 → 13.9, avenue 23.6 → 11.2, coast 17.4 → 9.5, country 16.6 →
  9.1; sunset 18.0 → 18.0, 18.3 → 17.0, 14.3 → 11.4, 18.1 → 14.5. The sky at the top of the frame 20–44 → 3.7–8.7; the avenue's
  lawn 44.4 → 6.3, the coast's slope 21.1 → 0.4, the canopy 31.1 → 9.2; the Bosphorus's evening sky golden 13.7 → 1.8, sunset
  29.5 → 6.3. Worse: the city's far street at sunset 1.9 → 11.2, the avenue's near road at golden hour 13.1 → 17.4 (its wet mirror
  shows the darker sky). Dawn, a sunset turning golden, takes some of the new golden tones.
- Noon and night unchanged: every zone's start identical to live in seeded captures but for the noise of two loads of one build.
- How: sky.js (uEve, uEveZ/M/H, uSkySun, uEveG), main.js (EVE_T, EVE_EL; F_GOLD, CV_T, BKV_T, GH_G, BL_T, BLM_GOLD with the petal
  tips by the hour; test switch st.evesky), painted.js (CL_GOLD). Assets: none (+1.5 KB of code).
- Programs: 65 desktop / 64 phone, as before; none compiled through sunset, night, rain or drives at golden hour and sunset.
- Cost: the sky's draw a little heavier in the evening only (per draw on the shared box's Vega at golden hour 1.48 / 1.37 → 1.48 /
  1.63 ms, ~+0.1), nothing at noon. The M1's whole frame over golden-hour avenue drives: desktop 9.26 / 12.04 → 11.36 / 9.40 ms
  (the same), phone 6.75 / 4.96 / 4.77 → 6.43 / 5.90 / 6.63 (bimodal; over twelve runs each, medians 4.71 → 5.22, ~+0.24 within
  the fast cluster). 0 shader errors in all eleven zones and on the phone tier at dawn, golden hour, sunset and night; no console
  errors at q=low, mid and high; embed starts on tap.
- Left over: the country's fields lit on one side only in the repaint, the coast's open sea at golden hour, Paşabağ's lighter sunset
  sky, the city's far street at sunset; sunset's ground and the whole night (next).

## 2026-10-27 · 04:51 — Gap 8 and the hills: the country's verges, its cedars and its far view as painted
- **The verges as painted: a deep bank of long arching grass with big flowers in clumps.** Along both edges of the country road
  a bank of tall, broad, sword-shaped blades about 3.4 m deep (was 1.8 m), arching out of dark roots, each blade lit on one side
  of its midrib and in shade on the other, in the painting's deep greens with yellow-green lights; over it every couple of metres
  a clump of big golden-yellow flowers with a white one or two, and sprays of small white flowers between. It was a single row of
  lighter, yellower clumps with small flowers dotted evenly along it. By the asphalt the clumps are low and lean out over its
  edge; the ground between them is a mid green, where it showed as a near-black band. (Phones and the lighter tiers keep one row.)
- **The verge by the hour:** a dark olive in the low sun's shade at golden hour, a dusky mauve at sunset, a deep teal under the
  moon, its flowers still catching the light, as the painting's repaints have it (it stayed a lit, glowing green).
- **No more ghost hills:** in the countryside the painted horizon's ring is drawn just inside the world's far fade (620 m, was
  2500), so the next zone's slopes 640–760 m ahead no longer stand in front of its mountains as pale fogged wedges. Not while the
  sea is in view (the bay's end keeps its open water to the horizon); eased in and out over a few seconds.
- **Cedars, as painted:** groups of three to six tall dark cedars behind about two houses in five, as behind the painting's
  left-hand house; stands of five to nine out in the fields; and the low rise closing the fields wooded with tiered Japanese
  cedars (杉) in the painting's dark blue-green, where they were plain cones. The mountain's cedars are unchanged.
- Against the painting (region medians, CIELAB ΔE, 1808 × 1104, s = 600): verge 16.1 → 5.5 (detail 4.88 → 4.29, painting 4.06);
  the frame (share-weighted) 6.6 → 4.9; the fields, mountains, sky, road and car unchanged. Against the repaints: verge golden
  53.2 → 9.4, sunset 31.4 → 5.8, night 24.1 → 4.1.
- Every other zone's start identical to live in seeded captures but for the cherry avenue's falling petals and the mountain's
  falling leaves (one more material at load shifts the particles' random start), and a few dozen pixels elsewhere (the foliage
  atlas's anti-aliasing: two loads of one build differ as much). The coast's bay's end keeps its sea.
- How: textures.js (bank2), props.js (bank's BANK_HULL2 into G.bank; treeSugi), chunks.js (placeBanks: a second row, not on the
  lighter tiers; placeCountry: cedars behind houses, stands, sugi on the rise), materials.js (M.bank with U.uBankT; countryGround's
  verge), main.js (BAND_NEAR, BKV_T; test switches st.bandnear, st.banktod), painted.js (BAND_R exported). No new assets (+7 KB
  of code).
- Programs: 65 desktop / 64 phone (+1: the banks' own, compiled at load); none compiled through sunset, night, rain or a drive.
- Cost: on the M1 none measurable — whole frame over country drives (L S S L L S S L) desktop 6.27 → 6.22 ms, phone 3.59 → 3.89
  (bimodal on both sides); the mountain 8.04 → 7.42. On the shared box's Vega, per draw over drives, the verge and the cedars
  cost more: desktop all draws 19.5 → 21.3 ms (banks and cedars +1.3, the ground the same), phone 13.6 → 15.2 (banks and
  cedars +1.0, the ground +0.4). World build ~5% longer (M1 genbench 33.7 / 31.9 → 34.2 / 35.3 ms); no spikes flat out on a
  4×-throttled phone; start-up the same (M1: desktop 0.91 s, a 3 Mbps phone 6.06 → 6.08 s). 0 shader errors in all eleven zones,
  on the phone tier at dawn, noon, sunset and night, and at q=low; no console errors at q=low, mid and high; embed starts on tap;
  without Japan's band, no errors.
- Left over: the clumps still read as a stepped row on the right-hand verge; two painted clumps repeat; the far mountains are
  still the Grok panoramas, and the painting's green hill with cedars on the right isn't there; the cedars are flat-shaded; at
  golden hour and sunset the flowers keep their day colours; the verge's cost on the Vega.

## 2026-10-27 · 02:54 — Gaps 9, 10 and 7: the coast's far shore, its house and its slope as painted
- **Across the bay, the painting's own far shore.** The coast's horizon is the coast painting's far shore itself — its two big
  blue-green mountains rising straight from the sea, paler blue ranges behind, green peaks towards the road's end, layered and
  hazy — where the painting has them from the chase camera; round the loop Grok panoramas of the same shore. It was a flat strip
  of fields under small pale hills. Golden hour, sunset and night take its repaints' tones (olive-gold, mauve, navy).
- **The open sea up to them.** At the coast's end the bay no longer fills with the countryside's fields: its shore curves away
  from the road ~130 m before the zone's end, out to the world's edge 400 m into the countryside, and a low green headland rises
  out of the water by the road, hazed blue-green with distance (a drive's first zone keeps its own opening view).
- **Small fishing boats on the bay** (salmon-red or white hulls, white wheelhouses, a bow wave): two where the painting has them,
  now and then one further along.
- **The painting's house close above the road:** the two-storey house under its blue tiled roof, its plaster the painting's
  grey-beige (was cream), its timber darker, its windows warm-lit, 10 m above the road's edge with its gable end to the drive,
  trees behind it and a big round tree up the slope. It was a small white bungalow further up.
- **The slope's bright lime:** the painting's yellow-lime in the sun, a mid green in the shade (was near-black), the long grass
  along the road a deeper green; golden hour, sunset and night keep their tones.
- Against the painting (CIELAB ΔE of region medians, 1808 × 1088, s = 1100; the far shore's and the house's boxes moved onto
  where they now stand): far mountains 20.5 → 0.9, house 18.5 → 11.3, slope 18.5 → 4.6, verge 5.9 → 2.7, tree crowns 8.1 → 9.5;
  the sea, tetrapods, wall, road and sky unchanged; the frame (share-weighted) 7.3 → 4.7 (5.4 by the audit's own boxes, which
  the moved house and mountains have left). The far shore against its repaints: golden 15.6 → 3.6, sunset 6.7 → 4.4, night 4.0
  → 2.9.
- Every other zone's start identical to live in seeded captures but for the cherry avenue's falling petals and a few far pixels
  (two more objects at load shift the particles' random start); the Bosphorus (sharing the sea, the strip and the wall)
  identical at its start and along the strait.
- How: path.js (bayQ, bayShore, bayHill, HL in groundOffsetMix; bandMix; no crossings or rivers there), chunks.js (the
  headland's ground, the guardrail, the countryside kept off the water; COAST_HOUSE, BOATS, TREE_R), props.js (fishingBoat,
  paintingHouse), materials.js (coastGround: uCoVerge, uCoFill, land on the sea side in hazed grass), painted.js
  (loadHousePatch), textures.js (paintHouses: a patch's tiles), main.js (bandco1 with its own tones and coastTurn; the sea
  through the bay's end; COAST_DAY2, CO_FILL, CV_T; test switch st.slope).
- Assets: assets/band/bandco1.json, bandco1_hi.webp (39 KB), bandco1_lo.webp (14 KB), WebP q50 from lossless masters
  (~/cdtest/s27/band, bandco1.py); assets/houses/coasthouse1.json, coasthouse1_hi.webp (37 KB), coasthouse1_lo.webp (21 KB)
  (houses2's coast house recoloured from its lossless master, drawn over its tiles; ~/cdtest/s27/house). First visit +83 KB
  desktop / +44 KB phone. Without them: band3's coast row, the cream house; no errors.
- Programs: 64 desktop / 63 phone, as before; none compiled through sunset, night, rain or the bay's end.
- Cost: about the same. The M1's whole frame over coast drives (L S S L L S S L): desktop 5.95 / 6.63 / 6.54 / 6.57 → 7.47 /
  6.50 / 6.38 / 6.56 ms (one outlier), phone 4.52 / 3.30 / 3.20 / 3.54 → 3.39 / 4.94 / 3.06 / 4.94 (both bimodal); the
  Bosphorus 6.13 / 5.45 → 5.12 / 4.95. Per draw on the shared box's Vega over drives through the bay's end: all draws desktop
  19.6 → 20.4 ms, phone 13.2 → 13.5 (the ground +0.65 / +0.3: the bay's end shows land where it showed sea). World build the
  same (M1 genbench 30.7 / 30.4 → 31.8 / 31.5 ms; no spikes flat out on a throttled phone); start-up the same (M1: desktop 0.91 s,
  a 3 Mbps phone 6.05 → 6.08 s). 0 shader errors in all eleven zones, on the phone tier at dawn, noon, sunset and night, and at
  q=low; no console errors at q=low, mid and high; embed starts on tap.
- Left over: the house's walls at sunset and night (magenta, near-black; the repaints' are moonlit grey); its side-on view
  without porch or dormer; the slope bare round it; the headland a bare smooth grass hill to drive past where the painting's is
  a wooded cape; soft haze at the band's joins; the bay's end, house and boats repeat every coast pass; the wall's rail.

## 2026-10-26 · 23:53 — Gaps 3 and 6: the cherry canopy and the avenue's road as painted
- **The avenue's cherry trees are the painting's broad umbrellas of blossom.** Each crown is wider than tall, a domed top over a
  rim hanging down round it; along the row they meet in one canopy and from both sides they close in over the road, leaving the
  painting's V of sky over its middle. They were round "cotton-ball" billows with sky between them. Pink fills 78% of the crown
  areas (painting 76%, was 60%); sky inside the canopy 8% (10%, was 15%).
- **Distinct small five-petal flowers, lit as one surface:** a new painted canopy of notched flowers at about the painting's
  scale, each petal its own pink, deeper flowers between them, now and then a petal in full sun, single flowers at its ragged
  edge; a lit upper tier over a deeper lower one. Seen from the road it is lit by a painter's key, so its undersides are pink,
  not a dark magenta ceiling; the day's rose a little less saturated.
- **Trunks and limbs as painted, no sticks over the pink:** a slimmer trunk forking into four or five limbs that fan out in a wide
  V and curve up into the canopy, where they disappear into the flowers. The old twig stubs (twigs painted into the old clusters,
  thin branches and open limb ends crossing the crowns) are gone: each limb ends inside a cluster, whose card is depth-tested as
  the front of its dome of flowers.
- **The avenue's road as painted:** in the sun its wet road is the painting's violet-grey near the car, deeper and bluer ahead,
  under its wet sheen and reflections; each cluster casts a smaller shadow, so the road is mostly in the sun with a sparse
  dapple, as painted, not under big blotches.
- Against the painting (region medians, CIELAB ΔE, at its 1792 × 1104, s = 300): the whole frame (share-weighted) 11.3 → 6.4;
  canopy 5.6 → 3.9 (lit quarter 5.0 → 6.8, shade 12.8 → 12.5; detail 4.15 → 4.41, painting 4.83); road near the car 16.4 →
  2.4, ahead 8.3 → 7.7; left pavement 41.6 → 11.1; lawn in the sun 6.0 → 3.0; near trunks 3.1 → 2.5. Worse: the houses' box
  18.6 → 26.0 (the canopy's lower rim now hangs in front of them).
- Golden hour, sunset, night, grey skies and rain keep their tones. Every other zone's start is identical to live in seeded
  captures but for a few far crowns' pixels at the vanishing point (the city 26 px, the country 56: the leaves' atlas now without
  the old blossom row, its mips a little different) and the mountain's falling leaves (two more objects at load).
- How: props.js (treeGhibliSakura), materials.js (the canopy's key uBlKey, BL_TEXN, its own shadow twin BL_SHADOW, its cards'
  depth BL_PULL; the ground's road tint now also in the avenue's variants, uSakRT), main.js (SAK_R by the hour, the day's rose
  and shade tint), ghibli.js (loadTreeAtlas by name), chunks.js. Assets: assets/trees/blossom3.json, blossom3_hi.png (259 KB),
  blossom3_lo.png (78 KB); assets/trees/crowns3.* (263 / 79 KB: crowns.*'s leaf row byte for byte, without its unused blossom
  row); crowns.* retired. A first visit the same size (desktop +11 KB, phone −2 KB). Programs 64 desktop / 63 phone (+1, the
  canopy's own shadow twin, compiled at load). Without blossom3 the cherries take the card crowns; without both atlases every
  tree does; no errors.
- Cost: no measurable change, the cherries' own draws lighter. Per draw on the shared box's Vega over avenue drives (L S S L L
  S): desktop all draws 20.8 / 22.0 / 20.6 → 20.0 / 19.2 / 19.6 ms (the bark −0.4, the blossom's shadow −0.5, the ground the
  same), phone 14.9 / 14.6 / 14.1 → 14.3 / 13.2 / 14.0 (the cherries −1.0, the avenue's ground +0.3 for its road tint). The M1's
  whole frame over drives desktop 5.31 → 5.58 ms mean over seven interleaved drives each (medians 5.07 → 5.63, each set spread
  over ±1 ms), phone 3.52 → 3.74 over three (11 runs each earlier: 5.04 → 4.96 and 3.25 → 3.11). World build the same (M1: genbench 32.5 / 30.8 → 30.0 / 30.5 ms per 20 chunks; no spikes
  flat out on a 4×-throttled phone). Start-up the same (M1: desktop medians 0.91 → 0.91 s, a 3 Mbps phone 6.21 → 6.06 s).
  0 shader errors in all eleven zones, on the phone tier at dawn, noon, sunset and night, and at q=low; no console errors at
  q=low, mid and high; nothing compiled through sunset, night, rain or a drive; embed starts on tap.
- Left over: limb ends cut by the cards' hard edge where they enter the canopy (most visible at golden hour); the canopy's lit
  tones (lit quarter ΔE 6.8, chroma 46 against 40); the far road is mostly the wet mirror; the evening and night road barely
  improved (the near road lies in long shadows; the night road too dark); the houses' box behind the lower rim.

## 2026-10-26 · 18:05 — World 6: Cappadocia's Paşabağ fairy chimneys, as its concept painting has it
- **On from Uçhisar into the valley of the fairy chimneys.** Turkey's leg now runs Bosphorus → Galata → town → Uçhisar →
  Paşabağ → border → Japan: over the Uçhisar road's last 260 m its sand, cones and castle give way to Paşabağ's golden grass,
  hillside and capped chimneys, and the castle rock on the horizon to a rounded tuff hill at the road's end. `?env=pasabag`
  starts there; its zone card reads Paşabağ / Cappadocia · Monks' Valley.
- **The chimneys as painted** (ref/world/cappadocia_pasabag.png): tall cream tuff pillars, 9–20 m, close along both sides of
  the road, each under a dark basalt cap — a mushroom's jagged slab over a smooth neck, a witch's hat, now and then none — and
  every so often two or three heads on one mound, as in the Monks' Valley. Their soft rock is broken into blocks, rounded
  swellings between deep creases, painted crevices running down them, big arched cave doors and windows towards the road that
  light up one by one at dusk; the concept's tones by day, its repaints' honey, rose-mauve and moonlit tones at golden hour,
  sunset and night (ref/tod/pasabag_*.png).
- **The valley:** grey gravel shoulders; tall dry golden grass along both verges, swaying in the breeze and darkest at the
  gravel's edge; golden fields dotted with dark shrubs; a grassy hillside rising on the left; pale tuff boulders; near-black
  gnarled bare trees; a small group of tourists at the roadside now and then.
- **A rounded tuff hill at the road's end:** a new painted horizon (Grok on the concept's far view, between four panoramas of
  the valley), turned slowly with the road; honey at golden hour, rose at sunset, moonlit at night.
- **The concept's light:** the sun high on the left and a little behind, so the van's shadow falls to its right and the
  chimneys' faces towards us are lit; still on the left at golden hour, low ahead at sunset, the moon ahead-right at night. It
  turns from Uçhisar's over the 300 m before the hand-over and through it, at most 3°/s. Paşabağ has its own zenith, asphalt
  and ground tones by the hour; balloons over it in the morning only.
- Against the concept (region medians, CIELAB ΔE, at its 1296 × 800; before = live's ?env=pasabag, its Bosphorus start): mean
  33.3 → 10.4; far hill 1.2, left chimney's shade 1.3, hillside 4.3, sky 5.3. Against its repaints: golden hour 14.4, sunset
  21.2, night 12.6.
- Japan, the Bosphorus, Galata, the town and Uçhisar unchanged: all ten starts identical to live in seeded captures (to the few
  pixels their own loads differ by; Uçhisar's dawn balloons over its far end float a little differently, as the road there runs
  on into Paşabağ now). Uçhisar's ground and chimney programs take Paşabağ's look by vertex, exactly nothing for Uçhisar's;
  Cappadocia's atlas program is untouched (any change to it moved a few of Uçhisar's far twigs' pixels on this GPU), so
  Paşabağ's grass has a texture and a material of its own. The props' shadow program is now compiled at load (a start with no
  poles near the car compiled it at the first props, mid-drive).
- How: path.js (TURKEY, CAPPA, ZINFO.pasabag, pasLand), chunks.js (placePasabag, pasChim, tourists, PAS_BANDS, PAS_HERO_P),
  props.js (pasChimney, pasLathe, PAS_UV, pasBoulder, pasGrass, tourist, barePas), textures.js (pasGrass, buildPasAtlas,
  albedoTexture), materials.js (uchGround's and tuffMaterial's Paşabağ share, makePasGrass, ZALIAS), main.js, audio.js.
- Assets: assets/band/bandtr5.json, bandtr5_hi.webp (76 KB), bandtr5_lo.webp (28 KB): WebP q50 from lossless masters
  (~/cdtest/w6/band, bandtr5.py), loaded with Turkey's other bands. Without them: the country's far hills.
- Programs: a Turkish start 76 desktop / 75 phone (75 / 74); a Japanese start 63 / 62, then 76 / 75 once Turkey is in.
- Cost (the shared box's Vega; the desktop machine down): Paşabağ cheaper than the country on desktops and the same on phones —
  over drives on staging, interleaved, 18.70 / 19.32 / 18.92 ms against the country's 21.41 / 20.92 / 21.48 (desktop), 9.78 /
  9.16 / 9.82 against 9.87 / 9.69 / 10.42 (phone); its tall grass is its dearest draw (~5 ms desktop). Uçhisar's chimneys
  +0.3 ms on desktops (per draw 1.53 / 1.57 → 1.92 / 1.82 ms: Paşabağ's crevices are worked out for every chimney and weighed
  out for Uçhisar's), its draws all told the same (17.2 / 17.6 → 17.2 / 16.3 ms), its phone drives the same (9.20 / 9.51 / 9.11
  → 9.08 / 9.47 / 9.25); Japan's city unchanged (per draw 20.2 / 19.9 → 18.9 / 20.4 ms desktop, 13.2 / 14.6 → 14.9 / 13.9
  phone). World build: Japan's the same (the country's chunks, profiled, 1280 / 1264 / 1338 → 1274 / 1176 / 1148 ms);
  Paşabağ's chunks in its range (on a 4×-throttled phone, the worst generator step 24.7 / 45.4 ms over two runs against the
  country's 32.2 / 50.7 and Uçhisar's 17.6 / 117.8 on this busy box; the median chunk's worst 6.0 / 12.6 against 6.4 / 8.8). Start-up: a Japanese start the same (desktop medians 3.31 → 3.40 s over four loads each, a 3 Mbps phone 7.27 →
  7.29 s over nine; +22 KB of code, 7.7 KB gzipped); a Turkish start's first visit +97 KB desktop / +50 KB phone. Turkey's lazy
  load from a Japanese start: 63 → 76 / 62 → 75 ~1.3 km in, no program in a slow frame on either. 0 shader errors in all eleven
  zones on desktops, on the phone tier at dawn, noon, sunset and night, and at q=low; no console errors at q=low, mid and high;
  nothing compiled through sunset, night, rain, dawn, the hand-over or either border (the car keeps right, then left again in
  Japan); embed starts on tap; with the band missing, no errors.
- Left over: procedural crevices rather than painted rock; thinner verges than painted (the grass's cost); the right near
  chimney's shade off-frame; the stretch 330–900 m into the zone kept open (the opening view's valley ahead), so it has few
  chimneys near the road; sunset's shaded chimney faces painted rose; the sun's ~50 s turn into the valley; chimneys at the
  edges in phone portrait; flat out on a throttled phone the world build spikes more than elsewhere.

## 2026-10-26 · 13:xx — World 5: Cappadocia's Göreme → Uçhisar road, as its concept painting has it
- **Out of the town onto the open Anatolian road.** Turkey's leg now runs Bosphorus → Galata → town → Uçhisar → border →
  Japan: the town's blocks end half-way through a 260 m hand-over and the dry tuff land begins. `?env=uchisar` starts
  there; its zone card reads Uçhisar Yolu / Cappadocia · Göreme → Uçhisar.
- **The land as painted** (ref/world/cappadocia_uchisar.png): a sandy shoulder, the plain thick with dry golden grass (the
  painted meadow's strokes in straw, dense crossed clumps along the verges), pale cream tuff rising in rounded hummocks near
  the road and long wavy ridges further out, dry grey-mauve shrubs, bare trees (smooth dark trunks, a light haze of twigs),
  a Turkish flag flying broadside at the verge, a road sign for Uçhisar.
- **Fairy chimneys in 3D**: smooth tuff lathes, each with its own lobes and lean, ochre with a pale foot, a few capped
  pillars, their cave doors and windows towards the road (lit one by one at dusk); in groups near the road, on the ridges
  and far off. Painted tones by the hour from the concept and its repaints (ref/tod/uchisar_*.png).
- **The castle rock of Uçhisar at the end of the road**: a new painted horizon (Grok on the concept's far view, the castle
  half as large again, between four panoramas of the valley), turned slowly with the road so the rock stays at its end;
  honey at golden hour, rose at sunset, moonlit at night.
- **Hot-air balloons**: many over the valleys at sunrise, fewer through the morning, a few by day, none in the evening.
- **The concept's light**: the sun on the right all day (further right at golden hour, the moon on the right at night), a
  deeper zenith, a thinner haze, a darker warmer road; steppe wind, crows, cicadas, crickets.
- Against the concept (region medians, CIELAB ΔE; before = live's ?env=uchisar, its Bosphorus start): mean 31.7 → 8.7; sky
  3.8, castle 2.9, chimneys 4.4 (lit) / 6.1 (shade), tuff 4.3, dry grass 2.3, trunk 5.1.
- Japan, the Bosphorus, the bridge and the town unchanged: all nine starts identical to live in seeded captures. (Cappadocia's
  cells have their own small atlas and material, so Turkey's world atlas, its mips and the town's pixels stay as they were;
  it is drawn on a CPU-backed canvas: in this Chrome a 2D canvas filled opaque and then given round-capped strokes loses all
  its content.)
- How: path.js (TURKEY, ZINFO.uchisar, uchTuff / TUFF, the hand-over), materials.js (Z_UCH in the avenue's channel,
  tuffMaterial, makeCapAtlas), chunks.js (placeUchisar, uchChimney, UCH_FAR, the border's tuff ridge), props.js (fairyChimney,
  treeBare, dryBush, dryGrass, capSign), textures.js (buildCapAtlas), painted.js (a row's own tones by the hour), balloons.js
  (new), main.js, audio.js.
- Assets: assets/band/bandtr4.json, bandtr4_hi.webp (116 KB), bandtr4_lo.webp (42 KB): WebP q50 from lossless masters
  (~/cdtest/w5/band, bandtr4.py); assets/balloons/balloons1.json, balloons1_hi.webp (56 KB), balloons1_lo.webp (23 KB)
  (~/cdtest/w5/scripts/balloons.py), loaded with Turkey's. Without them: the country's far hills, no balloons.
- Programs: a Turkish start 75 desktop / 74 phone (70 / 69); a Japanese start 63 / 62, 75 / 74 once Turkey is in.
- Cost (the shared box's Vega; the desktop machine down): cheaper than the country on desktops, about the same on phones.
  Over drives on staging, interleaved: Uçhisar 20.24 / 17.39 / 17.90 ms against the country's 22.28 / 22.00 / 21.22
  (desktop), 10.03 / 11.08 / 11.25 against 10.23 / 12.45 / 11.78 (phone); Japan's city the same (desktop 21.03 / 20.89 →
  20.35 / 21.19). World build in the country's range (worst step 14.3 ms on a 4×-throttled phone). Start-up: a Japanese start
  the same (desktop medians 3.43 vs 3.43 s over four loads each, a 3 Mbps phone 7.56 → 7.12 s; +27 KB of code); a Turkish
  start's first visit +199 KB desktop / +94 KB phone, a 3 Mbps phone ~0.2–0.7 s slower. Turkey's lazy load from a Japanese
  start: 63 → 75 / 62 → 74 ~3.1 km before the border; on desktops two programs joined frames slow from world building
  (13.8 ms; 28.8 ms with 23.4 ms of world build), none on phones. 0 shader errors in all ten zones on the desktop and phone
  tiers, at dawn and q=low; no console errors at q=low, mid and high; nothing compiled through dawn, sunset, night, rain,
  the hand-over or either border (the car keeps right, left again in Japan); embed starts on tap; with the band and the
  balloons missing, no errors.
- Left over: the castle unlit at night and never nearer (a band, repeating behind); smooth chimneys; the tuff's folds;
  static grass; dark chimney sides at golden hour.

## 2026-10-26 · 10:xx — World 4: a Turkish town's high street, as its concept painting has it
- **Off the Galata Bridge into a Turkish town.** The bridge now lands on a stone quay at Eminönü's end (a square with two
  flags, round trees along the waterfront) and the drive runs on down a typical Turkish town's high street, 1.3 km of it,
  before the border tunnel back to Japan (… Bosphorus → Galata → town → border → city). `?env=town` starts there; its zone
  card reads Mahalle Çarşısı / A Turkish Town · Its High Street; the tunnel's Turkish plate now reads KARAKAYA TÜNELİ.
- **The street as painted** (ref/world/turkish_town.png, after Eskişehir's İnönü Caddesi): five- to seven-storey blocks in
  peach, cream, pale yellow, white and dusty pink, deep balconies on thick slabs with iron or white railings, bright washing,
  pots of plants, satellite dishes, air conditioners and Turkish flags hung over them; a row of shops under every block —
  Grok-painted bakeries, grocers, markets, tea houses, barbers, pharmacies and greengrocers under real Turkish signboards
  (Fırın, Eczane, Bakkal, Market, Çay Ocağı, Kuaför, Manav, Kıraathane…) and striped awnings, a pharmacy's green cross; pale
  slab pavements with their yellow tactile strip, plane trees in planters, street lamps, tea tables with tulip glasses, a
  simit cart, a cat; a yellow dolmuş waiting at its stop in a lay-by. A second row of blocks stands behind. The opening view
  of `?env=town` is laid out as the concept is.
- **A mosque closes the street**: a new painted horizon (the concept's far end repainted without the street, its mosque
  magnified half as large again) turned down the street, so its dome and minaret stand at the street's end.
- **The concept's light**: in the town the sun stands high, ahead and to the right (the left-hand blocks, shops and pavement
  in the sun, the right-hand ones in shade), turning there at 1.5°/s; a warmer, lighter shade, a brighter zenith, a light
  haze.
- Against the concept (region medians, CIELAB ΔE; before = live's ?env=town, its Bosphorus start): mean 38.3 → 14.1; sky
  2.6, pavement in the sun 5.4, awning 7.6, mosque dome 10.1. Worst: the dolmuş 34 (in the sun where the concept's is in
  shade), the left upper floors 25, the crowns 22.
- Japan, the Bosphorus and the bridge are unchanged: the eight other starts identical to live in seeded captures (the
  Bosphorus's and the bridge's within 1–2 levels: Turkey's texture grew taller).
- How: path.js (TURKEY, ZINFO.town, TOWN_SW, townLanding, the town's ground, the landing's quay), chunks.js (placeTown, the
  lay-bys, the pavements to the landing, the opening view), props.js (townApt, townBack, treeGhibliPlane, teaTable,
  simitCart, dolmus, townCat, durakSign), textures.js (the town's signboards, awnings, railings, flag, cross, simit, stop
  plate and its painted rows in the world atlas), materials.js (Z_TOWN in the country's channel; the world atlas's shadow
  twin skips flagged quads), painted.js (loadTownAtlas), main.js (the town's assets and band, the sun, shade, zenith and
  haze; Turkey's ground programs compiled one a frame), audio.js.
- Assets: assets/town/town1.json, town1_hi.webp (120 KB), town1_lo.webp (43 KB); assets/band/bandtr3.json, bandtr3_hi.webp
  (141 KB), bandtr3_lo.webp (49 KB): WebP q50 from lossless masters (~/cdtest/w4/masters, ~/cdtest/w4/band/masters;
  pack4.py, bandtown.py), loaded with Turkey's other assets. Without them: procedural shopfronts and windows, Japan's far
  city.
- Programs: a Turkish start 70 desktop / 69 phone (68 / 67); a Japanese start 63 / 62, 70 / 69 once Turkey is in.
- Cost (the shared box's Vega; the desktop machine down): in the city's range. Over drives on staging, interleaved, the
  town 19.59 / 20.32 / 19.92 ms against the city's 19.75 / 20.00 / 18.88 on desktops and 11.20 / 10.82 / 10.70 against
  12.19 / 12.13 / 11.99 on phones; timed per draw cheaper than the city (the subagent: 19.4 vs 21.3 desktop, 14.0 vs 14.7
  phone): the town's walls are plain plaster in the colour material and its windows, signs and railings cast no shadow (its
  first build's shadow pass cost 9.2 ms); phones get two in five fewer street trees. World build as the city's (a
  4×-throttled phone flat out: two of five runs had one 49–56 ms step against the city's worst 28–31). Turkey's lazy load
  from a Japanese start, alone on the box: 63 → 70 (62 → 69) ~3.1 km before the border, no program joining a frame over
  12 ms on desktops, one in a 12.9 ms frame on phones. Start-up: a Japanese start about the same (+28 KB of code; desktop
  medians 3.35 / 3.55 s over three and four loads, a 3 Mbps phone 6.92 → 7.05 s); a Turkish start's first visit +287 KB
  desktop / +122 KB phone, ~0.3 s on a 3 Mbps phone. 0 shader errors in all nine zones on the desktop and phone tiers and
  q=low; no console errors at q=low, mid and high; none compiled through sunset, night, rain, either border, or the
  hand-over (the car keeps right in the town, left again in Japan); embed starts on tap; with the town's sheet and band
  missing, procedural shopfronts and no errors.
- Left over: the mosque never comes nearer (a painted band), the balconies cast no shadows, no side streets, the far blocks
  plain boxes, the sun's turn into the town (~70 s), the mosque unlit at night.

## 2026-10-26 · 05:xx — World 3: Istanbul's Galata Bridge as its concept painting has it
- **The shore road runs on onto the Galata Bridge.** After the Bosphorus the drive goes on through Karaköy and out over the
  Golden Horn on the Galata Bridge towards Eminönü, a zone of its own before the border tunnel back into Japan's shopping street
  (… snow → border → Bosphorus → Galata → border → city). The bridge is straight and level, its deck ~6 m over the water, with
  water on both sides: our two lanes between a walkway on the left and the T1 tram line's reserve on the right, the far
  carriageway beyond it. `?env=galata` starts on the bridge; its zone card reads Galata Köprüsü / Galata Bridge · Karaköy →
  Eminönü.
- **The hand-over:** over the Bosphorus's last 260 m its houses and trees end, the road rises onto the bridge (1.4 → 6.2 m over
  the water), the sea wall's railing gives way to the bridge's, the hill on the right turns away over the water (its foot a quay
  running off at ~50°, gone past the ground's edge by the bridge's first metre), and the old city's skyline takes over the
  horizon ahead.
- **The bridge as painted** (ref/world/istanbul_galata.png): the walkway's patterned cast-iron railing (blue-grey, diagonal bars
  with a ring at every crossing) along the deck's edge, casting its lattice's shadow on the walkway; right by our lane the tram
  line's dark-brown railing (octagons and squares), and beyond it its rust-brown track bed with its rails and a second railing;
  green-grey tram portals every 30 m with the contact wires and catenary over both tracks, their road-side posts carrying the
  lamps over our lane; tall lamp posts along the walkway; near the Karaköy end the lifting span's control tower (pale concrete
  panels, a great arched opening, a hood curving over its roof, a Turkish flag) with its orange-and-white barrier, as the
  concept has it; flags at the bridge's start, a blue sign for Eminönü and Sirkeci, the 50 limit. **Fishermen** stand all along
  the walkway's railing in ones, twos and threes, their long rods out over the water, buckets by their feet, now and then on a
  stool.
- **The Golden Horn on both sides**: its own painted water, a clearer, deeper azure than the strait's, saturated right up to the
  old city's quays, few white glints (open water ΔE 5.2 from the concept); **two city ferries** at once (the second one's wake
  painted into the water too), on either side of the bridge, and small boats. A Galata start finds two heading out on the left,
  as the concept has them.
- **The old city ahead**, a new painted horizon: Grok Imagine on the concept's own frame with its foreground painted out,
  reprojected from the concept's perspective onto the band's cylinder, so the skyline spans the chase view's 78° without a join:
  the great mosque on the waterfront ahead-left (its dome, semi-domes and four minarets), the old city's waterfront, the Galata
  hill with its houses and the Galata Tower ahead-right; further round, Sarayburnu with Hagia Sophia among cypresses and the
  Asian shore on the left, the Süleymaniye on its hill on the right; the loop goes twice round, so the Galata Tower stands behind
  on the left too. The row turns with the bridge's heading, so the mosque always stands where the concept has it; its quays meet
  the water crisp (no haze skirt, no foot haze: the Golden Horn runs up to them); its windows light up at night. Over the bridge
  on a bright day the zenith is the concept's deeper, greyer blue and the far road paler, as painted.
- At its far end the bridge runs into the headland at Eminönü and the border tunnel back to Japan, its Turkish plate EMİNÖNÜ
  TÜNELİ (the Kuruçeşme tunnel's, which went with the Bosphorus's old end).
- Against the concept (region medians, CIELAB ΔE; before = live's ?env=galata, its Bosphorus start): mosque 41.5 → 7.7, the old
  city's shore 10.0 → 1.8, the right skyline 23.3 → 4.2, open water 8.2 → 5.2, the walkway's railing 10.2 → 8.6, road far
  12.3 → 4.9, the tram line's railing 37.3 → 14.0 and bed 42.3 → 15.2, the tower 28.7 → 7.9, sky 25.2 → 13.3; mean 21.8 → 10.2.
  Worse than it could be: the walkway 28.6 (the concept's lies in its railing's shadow under a lower sun). The concept's eye
  level sits ~2.5° lower in its frame than the game's chase camera: its skyline ~35 px lower at 784.
- Japan is unchanged: all six seeded starts pixel-identical to live up to load-to-load noise (1–5 one-level pixels, which two
  loads of live show too). The Bosphorus's start differs only in its open sea's wavelets: their roll is the zone's mean heading,
  which takes in its last 260 m, now the hand-over (0.001° from before; 1–5 levels over ~4% of the frame, glints flickering
  differently).
- How: path.js (TURKEY = ['bosphorus', 'galata'], ZINFO.galata, SEA_ZONES, GAL_R / GAL_WALK / GAL_KERB, the bridge's ground, the
  hand-over's quay), materials.js (Z_GAL: the bridge drawn in the cherry avenue's weight channel, as they never meet: its deck,
  tram bed, faces, walkway; the painted asphalt's tint), chunks.js (the walkway and kerb strip, the deck-only terrain, placeGalata,
  galRailing), props.js (galPortal, galLamp, fisherman, galTower, galBarrier), textures.js (the railings' panels and the sign in
  the world atlas's first row: nothing else moves; the tunnel plate), painted.js (a band's rows from several files, a row turned
  to a road's heading, rows without a skirt over water), sea.js (PAINT_GAL / GAL_TONES, a second ferry's wake), ferry.js (a
  second ferry on the Golden Horn), main.js (Turkey's two band files, the row's turn, the zenith and the far road, the ferries;
  the lazy load uploads the two band textures a frame apart), audio.js and birds.js (the Golden Horn's water and gulls).
- Assets: assets/band/bandtr2.json, bandtr2_hi.webp (176 KB), bandtr2_lo.webp (70 KB): WebP q50 from lossless masters
  (~/cdtest/w3/band/masters, bandgal.py), loaded with Turkey's other assets (at a Turkish start, else lazily near the border).
  If they fail the bridge borrows the coast's far shore. The Bosphorus keeps bandtr1.* untouched.
- Programs: a Turkish start 68 desktop / 67 phone (66 / 65: the bridge's own ground and its hand-over's); a Japanese start 63 /
  62 as before, 68 / 67 once Turkey is in.
- Cost (the shared box's Vega: the desktop machine was down throughout): the bridge is cheaper to draw than the Bosphorus on
  desktops and about the same on phones. Over drives, interleaved: desktop Bosphorus 15.50 / 18.24 / 17.62 / 16.61 / 16.92 ms
  against the bridge's 14.41 / 14.87 / 14.48 / 13.10 / 14.10; phone 9.54 / 9.05 / 9.13 / 9.07 / 8.90 against 9.57 / 9.56 / 9.25
  / 9.51 / 9.26 (+0.2–0.4). Japan's draws unchanged: on the coast at noon the sea's and the shore's draws (their shader gained
  the second wake's branch) against the untouched sky's, live 0.146 / 0.145 / 0.146 and 0.885 / 0.880 / 0.887, staging 0.144
  / 0.147 / 0.147 and 0.893 / 0.882 / 0.888. World build: the bridge's chunks 108 / 119 / 113 ms per 20 against the Bosphorus's
  139 / 166 / 187 / 142; Japan's (the country) the same (live 171 / 150, staging 162 / 165). Start-up (first visits): a
  Japanese start +17 KB (the code), desktop medians 3.79 → 3.56 s, a 3 Mbps phone 6.80 → 6.92 s; a Turkish start (live's
  ?env=galata is its Bosphorus start) +193 KB desktop / +88 KB phone (the band), desktop 4.56 → 3.98 s, a 3 Mbps phone 7.48 →
  7.63 s. 0 shader errors in all eight zones (desktop), on the phone tier at noon and night (the bridge, the Bosphorus, the
  snow), q=low, and on the bridge at dusk and night; no console errors at q=low, mid and high; none compiled through sunset,
  night or rain (the bridge at high and mid, the city), rain drives on the bridge and the Bosphorus, either border (desktop and
  phone), the hand-over, or the lazy load (a country start driven at 5× through the border onto the bridge: 63 → 68, 62 → 67;
  no program joined in a slow frame); embed starts on tap.
- Left over: the bridge fills its whole 1.5 km zone (the real one is 490 m; no Karaköy or Eminönü waterfront; its far end is the
  border tunnel's green headland); the skyline's joins at ±39°, the chase view's edges on a 16:9 screen, show a hazy patch on the
  left; the far railings' lattice thins out beyond ~40 m (alpha-tested) and shimmers a little at mid-distance; no tram runs;
  the fishermen are simple low-poly figures; the tower is plain paint without lit windows, and the concept's only (the real
  bridge has four); the phone tier ~0.3 ms over the Bosphorus.
- Verified by the main agent on the shared box (the desktop machine down): Japan's six seeded starts pixel-identical, the
  Bosphorus's start differing only on the strait (7,264 of 7,265 moved pixels); 0 shader errors in all eight zones on the
  desktop and phone tiers and q=low; nothing compiled through either border, the hand-over (the car keeps right) or the lazy
  load (63 → 68 / 62 → 67, 3 km before the border); with the skyline missing the bridge borrows the coast's far shore, no
  errors. Over drives on staging the bridge 12.65 / 13.27 ms against the Bosphorus's 18.19 / 17.78 (desktop) and 8.99 / 9.23
  against 9.97 / 9.55 (phone); Japan's city the same (desktop 20.54 / 19.93 → 20.48 / 20.56; on phones, every draw group
  timed over drives 14.06 → 13.43 ms, the frame-level readings the iGPU's clock steps); start-up of a Japanese start the
  same (desktop medians 3.47 vs 3.47 s, a 3 Mbps phone 6.94 vs 6.89), a Galata start's 3 Mbps phone first visit 7.35 →
  7.71 s (the skyline's +88 KB).

## 2026-10-26 · 02:xx — World 2: Istanbul's Bosphorus as its concept painting has it
- **A village of wooden houses climbing the hill**, as in the concept (ref/world/istanbul_bosphorus.png): Ottoman houses with
  their gable ends to the lane, the upper floor jutting out on brackets over a stone or plastered ground floor, weathered
  brown and grey boards, cream and ochre plaster, terracotta roofs. Six types, each painted with Grok Imagine as two flat
  elevations (its gable end, its long side) anchored on the concept's own houses, each turned back towards the drive so its
  gable end shows nearly face on, as painted. They stand on terraces up the hill behind gardens in flower: the front row
  behind the railings, a steep green bank, the second row 10 m higher. Higher up the village goes on as the concept paints
  it, rows of small houses stacked among cypresses and round trees (Grok repaints of its own hillside, as big flat painted
  cards). They were big procedural boxes lined up along the pavement. Against the concept: the houses' upper floors
  ΔE 14.7 → 8.8, roofs 19.4 → 7.2, the hillside village 2.7.
- **The strait is calm along the wall**, its painted wavelets and glints right up to the stones (the coast's rows of
  breaking waves read wrong there): water by the wall ΔE 2.4 → 0.7.
- **A city ferry crosses the strait**: a Şehir Hatları ferry, its side painted after the concept's, crossing or plying the
  Bosphorus at 6 m/s, with white water at its bow and along its hull and the two arms of its wake painted into the sea. A
  Turkish start finds it where the concept has it; then one at a time comes into view ahead. Its windows light up at dusk.
- **A paler verge**: its long grass a yellower green, bushes in white flower all along it (ΔE 16.2 → 11.0).
- **Istanbul's own evening and night**: the concept repainted at golden hour, sunset and night (Grok, ref/tod/bosphorus_*.png)
  and the strait's tones read from them (a mauve-grey strait under a golden path, violet water under the orange one, navy
  with the moon's silver path); its hill's grass and trees darker in the evening light; the Asian shore's houses, the
  higher village's windows and the ferry lit at night.
- **The Turkish tunnel mouths have their name plates**: Akıntıburnu Tüneli, Kuruçeşme Tüneli, white on Turkey's road-sign
  blue.
- **Japan no longer loads Turkey**: a start in Japan more than 3.2 km from the border downloads, paints and compiles none of
  Turkey's horizon, houses, ferry or ground programs; they load in the background once the drive comes within 3.2 km of the
  border (the downloads, one step of main-thread work a frame, the ground variants compiled off the main thread with
  `compileAsync`). A Japanese start's first visit is 146 KB lighter on desktops (48 KB on phones) and quicker (desktop
  medians 3.67 → 3.40 s over four interleaved loads each). Driving from the country through the border at 5× speed, the
  three programs join ~3 km before the border and none compiles there; fewer frames over 20 ms than live (165 vs 189).
- Japan is unchanged: on the desktop GTX, five of Japan's six seeded starts pixel-identical; the avenue's differs in
  1,496 scattered pixels (its falling petals: seeded at load, before the first frame, and Turkey's band no longer loads
  there); city drives' GPU the same.
- How: props.js (trHouse, trVillage, TR_HOUSES; no Japanese plates on Turkey's poles; the bank's tint), chunks.js (the
  terraced village, the strips, the verge; needsTR), path.js (HILL, nextBorderS), textures.js (the houses' rows in the world
  atlas, trTunnelPlate), painted.js (loadTrHouseAtlas, a band's alias and lit zone), sea.js (uCalm, ferryWake, BOS_GOLD /
  SUNSET / NIGHT), ferry.js (new), materials.js (setWorldTex, uFieldBo), main.js (Turkey's lazy load, the ferry, the
  Bosphorus's evening tints).
- Assets: assets/trhouses/trhouses1.json, trhouses1_hi.webp (209 KB), trhouses1_lo.webp (132 KB): WebP q50 from lossless
  masters (~/cdtest/w2/masters; packtr.py). If they fail the Bosphorus keeps its procedural houses and box ferry.
- Programs: a Turkish start 66 desktop / 65 phone (as before); a Japanese start 63 / 62, then 66 / 65 once Turkey is in.
- Cost: the Bosphorus is cheaper to draw (fewer 3D houses and their shadows): over drives on the desktop GTX desktop
  3.23 / 3.17 → 3.05 / 3.00 ms, phone 4.19 / 4.31 → 3.78 / 3.87; on the shared box's Vega desktop 21.52 / 21.32 / 21.55 →
  18.10 / 18.31 / 17.57, phone 11.41 / 11.04 / 11.42 → 9.68 / 9.33 / 9.37. Japan's city the same (GTX 3.42 / 3.48 →
  3.43 / 3.39; Vega within its noise). World build −22% (phone −27%). A Turkish start's first visit +231 KB desktop /
  +156 KB phone: desktop ~0.1 s, a 3 Mbps phone ~0.5 s slower (7.20 / 7.03 → 7.52 / 7.65 s). 0 shader errors in all seven
  zones on every tier; no console errors at q=low, mid and high; none compiled through sunset, night, rain, either border,
  or a border reached after the lazy load; embed starts on tap. (The desktop machine crashed partway through the main
  agent's checks; they were finished on this box.)
- Left over: the higher village is painted cards (three, repeating every ~170 m); the first bank is plain grass; the verge
  ΔE 11; a Turkish start's slow-phone first visit; the bridge's lights at night; the ferry's wake subtle far off; six house
  types only.

## 2026-10-25 · 23:xx — World 1: beyond Japan, through the border tunnel to the Bosphorus
- **The drive leaves Japan.** After the snow country the road runs into a long tunnel at the border (国境の長いトンネル,
  the other way round) and comes out on the Bosphorus at Arnavutköy, Istanbul: the first of the world's regions after
  Japan. Inside the tunnel the scenery changes over (the two zones blend over 150 m, all inside the 170 m tube), the far
  horizon and the sea's colours with it, and the car moves across to the right-hand lane: Turkey keeps right (the car's
  home lane is kept towards the kerb of the side the traffic keeps to). From outside each mouth shows its own country only:
  a snowy cutting with snow-laden cedars on the ridge on the Japanese side, a wooded headland running into the strait on
  the Turkish side, the Bosphorus Bridge framed in the exit. After 1.5 km of the Bosphorus a second border tunnel, through
  a headland, brings the drive back into Japan's shopping street (the street runs right up to its portal), and round again.
- **The Bosphorus shore road, as its concept painting has it** (ref/world/istanbul_bosphorus.png): the strait on the left
  behind a sea wall of pale dressed stone with an iron railing along its top, its water the concept's deep teal-navy (open
  water ΔE 18.5 → 0.4, by the wall 22.8 → 2.7) with rows of white crests along the wall; across it the Asian shore, a new
  painted horizon (the Bosphorus Bridge, a mosque with its minarets and the waterfront yalıs, the old fortress, a lighthouse
  village: four Grok paintings anchored on the concept and the real photo, in a light haze as painted); a city ferry and
  small boats out on the water. On the right a verge of long grass with bushes in white flower, a pavement of grey stone
  slabs, the gardens' railings between stone posts, and Ottoman wooden houses climbing the steep hill in rows: stone or
  plastered ground floors, jutting upper floors of stained boards or pastel plaster, bay windows (cumba), tall sash
  windows lit one by one at dusk, gables to the street or hipped roofs of terracotta tiles; cypresses and round trees
  between them, plain utility poles and their wires, lamps, the Turkish flag on a tall pole now and then and out of some
  windows, Turkish road signs on the right (a 50 limit, a blue sign for Bebek and Sarıyer). Against the concept (region
  medians, CIELAB ΔE): 17.1 → 8.2 over the build.
- **Start anywhere:** ?env=bosphorus starts on the Bosphorus (a planned zone's key starts at its region's first built
  zone); the title card has two links, 日本 · Japan and Türkiye. The zone card speaks the region's language (Boğaziçi /
  Bosphorus · Arnavutköy).
- **Japan is unchanged:** all six starts pixel-identical to live at noon and golden hour (seeded captures re-seeded at the
  first frame; the few 1-level pixels left differ between two loads of live too); the first 9 km from a city start keep
  their layout chunk for chunk up to s = 8700, where live's blend into the shopping street began and the border tunnel's
  approach now stands.
- **The structure for the next regions:** path.js's route is a list of regions' zones (JAPAN, TURKEY; PLANNED: the Galata
  Bridge, a Turkish town, Cappadocia's Uçhisar road and Paşabağ, then Tokyo, Osaka, a Japanese coastal city, named in
  ZINFO): a zone joins the route once it is built, a border tunnel stands wherever two regions meet, and each region has its
  traffic side, its zone-card language, its horizon atlas (a band per atlas), its sea palette and its sky palette
  (sky.js REGION_KEYS, blended by the region's weight; Turkey keeps Japan's for now, as the concept's sky is the coast
  painting's).
- How: path.js (the route, REGION, SIDE, PLANNED, B_TRANS; borderNear and tunnelNear; trafficSide, regionWeight,
  seaWeight, viewMix, zoneSets; the Bosphorus's ground profile; a border tunnel's cutting standing back behind a street),
  materials.js (Z_BOS: the Bosphorus drawn in the coast's weight channel, as they never meet; K_BORDER: a border ridge
  under snow on the snow country's side; the atlas material's world variant M.atlasW, for chunks with world-atlas cells,
  so Japan's atlas program is untouched), textures.js (buildWorldAtlas: a third texture pair for the regions' own cells —
  the flag, signs, the houses' bays, stone, doors and kiremit tiles), props.js (ottomanHouse, flagPole/flagCloth, ferry,
  trSign, treeCypress, a plain pole for Turkey), chunks.js (placeBosphorus, ironRailing, gardenFence; chunks round a
  border on their own ground variant; border portals and ridge trees by side; the city and snow builders kept out of a
  border tunnel), painted.js (loadBandAtlas(name), a band's alias and bright-day haze), sea.js (the strait's palette),
  sky.js (REGION_KEYS), main.js (the lane by the traffic's side; the band, the sea and the palettes across a border; the
  title card's links), audio.js and birds.js (the Bosphorus's gulls and water).
- Assets: assets/band/bandtr1.json, bandtr1_hi.webp (160 KB), bandtr1_lo.webp (59 KB): WebP q50 from lossless masters
  (~/cdtest/w1/band/masters, bandtr.py). If they fail the Bosphorus borrows the coast's far shore.
- Programs: 66 desktop / 65 phone tiers (were 62 / 61): the Bosphorus's ground variant and the two border variants (the
  snow-and-city pair is gone), the atlas's world variant and its shadow twin.
- Cost (the shared box's Vega; the desktop machine down): Japan's draws are unchanged (the city on phones, every draw
  group timed over drives: 14.03 → 13.90 ms; frame-level city drives read desktop 20.71 / 20.56 → 19.85 / 20.16 ms and
  phone 12.03 / 11.83 → 12.79 / 12.68, then 12.58 / 12.34 → 11.59 / 11.10: the iGPU's clock steps). The Bosphorus costs
  about what the coast does over drives (desktop 20.58 / 20.67 ms against the coast's 22.37 / 23.37, phone 10.44 / 11.44
  against 10.79 / 10.65; timed per draw +1.3–1.5 ms: the houses, their shadows, more crowns; phones get sparser upper rows
  and fewer trees). Start-up a little longer, as Turkey's band and world atlas load and four more programs compile at
  every start: warm desktop loads median 3.41 → 3.68 s, a 3 Mbps phone's first visit 6.72 → 6.94 s, the first visit
  +181 KB on desktops and +83 KB on phones. 0 shader errors in all seven zones on the desktop, phone and low tiers; no
  console errors at q=low, mid and high; none compiled through sunset, night, rain, drives, or either border on either
  tier; embed starts on tap; with Turkey's band missing the Bosphorus borrows the coast's far shore, no errors.
- Left over: the Galata Bridge, the Turkish town and Cappadocia (W3–W6; the Turkish leg is one 1.5 km zone for now); the
  houses are procedural paint (Grok-painted Ottoman façades next) and stand close to the road where the concept's climb
  the hill; the near water keeps the coast's rows of surf (the concept's is calm); the ferry doesn't move; the verge is
  greener than painted; Istanbul's evening and night borrow the coast's palettes; the Turkish tunnel mouth has no name
  plate, and one border tunnel's wall shows a darker patch; Turkey's band, atlas and programs load at every start (load
  them only near the border or for a Turkish start). The title card's blurb and the page's description now mention the
  Bosphorus.

## 2026-10-25 · 20:xx — Gap 5: the shopping street's canyon, its canopies and neon, as painted
- **The street runs into a canyon of tall pale blocks, as in the city painting.** An almost unbroken row of 6- to
  12-storey pale concrete blocks stands right behind the shophouses on both sides (ribbon and punched windows, flats'
  balconies, plain end walls), so from the middle distance on the street is closed and the sky is a narrow V down to its
  far end; it was a block of flats every 14–26 m and far towers, the sky open wide over an even row. At dusk the blocks'
  windows light one by one. The canyon holds along the drive (judged at s = 140 and 900).
- **The opening view's far end and sky are the painting's:** the street ends in the far city's pale towers in haze (it
  was a green hill); the cumulus stand either side of the V with the blue between; on a bright day the city's haze is
  thinner. Sky 10.4% → 7.2% of the frame (painting 7.4%); far street ΔE 17.8 → 11.1; the painting's top-centre sky box
  77.4 → 4.2; cloud shade 26.1 → 14.5; right upper floors 9.5 → 6.0.
- **Shophouses of varied heights** (55% three storeys, were 30%: the roofs step along the street), **canopies as
  painted** (steeper, 44°, a deep band of blue-grey tiles with round tile ends along the eave) and **neon tubes** in pink,
  violet and mint along the eaves and canopies, bright by day and glowing at night.
- Worse at the painting's frame: the left upper floors 11.3 → 20.3 (the near canopy now fills that box), the shops
  6.7 → 10.3 and 17.2 → 26.7 (a lit bakery window at the right edge; the interiors are still too orange).
- How: `props.js` (`block`, `neonTube`, the canopy and its eave ends; the unused `office` / `tower` builders removed),
  `textures.js` (`blockFace` cells `wbA…wbD` and lit twins, `vsNp/vsNv/vsNg`, `kawaraE`, all in the canopy tiles' row: the
  desktop atlas keeps its size, the phone's grows 1216 → 1468 rows), `chunks.js` (the block row with its own random
  numbers; outside the city the old draws are kept, so the other five zones' starts are pixel-identical to live),
  `main.js` (`CITY_HAZE`, the clouds' 'flank' opening and `band.hero` for a city start, the shadow fit's city casters
  43 m). Assets: none. Programs: 62 / 61. Triangles at the start −22% (426k → 331k desktop).
- Cost (the shared box's Vega; the desktop machine down): less over drives. City drives desktop 21.16 / 20.68 →
  20.84 / 19.72 ms, phone 13.10 / 12.84 → 11.58 / 10.85; per-draw timers at golden hour +0.4–0.6 ms on desktops (the
  blocks' long shadows). Phone-profile flat-out world-build spikes 20 / 24 (worst 40 ms) → 8 / 7 (29 ms). 0 shader errors
  in all six zones (desktop; the phone tier at noon and night; q=low); no console errors at q=low, mid and high; none
  compiled through sunset, night, rain or drives; embed starts on tap; start-up about the same (medians 2.89 vs 3.15 s
  over seven interleaved loads each on a box at load 7–9, one ~5.3 s load in each build).
- Left over: painted block façades (they are procedural paint), the shops' orange interiors, the blocks' alpha-tested
  shadow pass, the canyon's far end once driving (the band is fixed in the world).

## 2026-10-25 · 18:xx — Gap 4: soft painted shadow edges, and a lighter golden hour
- **The car's shadow and the cherry avenue's crown shadows have clean, soft edges, as painted** (they showed the shadow
  map's texels as stair-steps; the car's own shadow edge was a jagged pixel line). On the ground near the camera each
  shadow lookup is a tent over 3×3 texels from four filtered taps (Castaño's optimised PCF, as in The Witness); further
  out, where a texel spans under two pixels, it eases into one tap without a seam. The guardrail's long staircase shadow
  at golden hour is a soft band. A forced re-aim of the shadow camera on the coast at golden hour now jumps half as many
  pixels (0.66% → 0.30%).
- **Golden hour's shadow pass costs less again.** With the low sun along the road (step 23) the square shadow box drew
  the scenery 220 m ahead; now it keeps its texel grid but takes only the rows and depth that hold what can be seen
  within 62 m of its centre and what can shadow that (the city's tall buildings: 80 m). No far shadow in view goes
  missing (golden hour in the city, the avenue, the coast, the mountain and the snow, against live).
- How: `materials.js` (the tent in `getShadow` for the ground's materials, `SH_SOFT`, its reach from `shadow.radius`;
  faces turned from the sun skip the lookup), `main.js` (`SH_FIT`: the box's rows as a viewport of the map, its near plane
  and its bias each frame; the sun's radius from its texels on screen; the car's own map soft everywhere). Test switches
  `st.shsoft`, `st.shfit`; the `?pcf` hook is gone. Assets: none. World: the same layout. Programs: 62 / 61.
- Cost (the shared box's Vega; the desktop machine was down), per-draw timers over coast drives: golden hour, the shadow
  pass desktop 4.20 → 3.50 ms (pairs −0.75 / −0.65) and phone 3.30 → 2.68 (−0.46 / −0.77), the ground's tent +0.68 desktop
  (+0.54 / +0.82) and +0.29 phone: golden hour net about even on desktops and −0.3 ms on phones; noon, the ground +0.22
  desktop (+1.02 / −0.59; the subagent's in-page toggle +0.30 desktop, +0.27 ± 0.07 phone), the shadow pass the same.
  0 shader errors in all six zones on the desktop and phone tiers and at q=low; no console errors at q=low, mid and
  high; none compiled through sunset, night, rain or drives; embed starts on tap; start-up the same (medians 3.23 vs
  3.15 s over three interleaved loads each).
- Left over: walls, props and crowns keep one tap (the tent there cost ~0.5 ms more on desktops): the shopfronts' canopy
  shadows still show steps; golden-hour shadows end ~125 m ahead; the avenue's shadows are darker and denser than
  painted.

## 2026-10-25 · 16:xx — Gap 3: the sun where the paintings have it
- **The sun stands by the road, ahead and to its left, as in all four paintings.** At noon it is 70° left of ahead, so
  the car's, the trees' and the poles' shadows fall to the right and back towards us, as painted (they fell ahead and to
  the right: the sun stood 84–127° round from the car at the four paintings' places, and anywhere over a drive). Through
  the afternoon it swings round to 14° left at golden hour and 8° at sunset, so the evening glow and the long shadows run
  down the road from its end, as in the repaints (the glow was behind the camera: 120–172° round). The moon stands 20° to
  the left all night. The heights by the hour are as before.
- **It turns only with the road's long bends** (its mean heading over ±200 m). Over drives at cruising speed a 10 m
  pole's shadow tip moves at noon at 0.11–0.16 m/s (the old sky 0.10), from the afternoon to sunset at 5.4 m/s (the old
  sky 6.7; at most 9.4 against 18.9: at dusk the old light swung from the sun to the moon opposite it at 60°/s, now
  2.3°/s). Recorded drives round the mountain pass's and the coast's bends show no sliding shadows (the car's shadow, now
  falling back-right, sits steady by it).
- **The paintings' light on the scenery's volumes:** the broadleaf crowns and the tetrapods are lit from the upper left
  of the frame, as painted (a painter's key, as the car's: the real light's height, on its side, swung round towards the
  camera, 150° from the view for the crowns and 110° for the tetrapods), while their shadows stay the sun's and fall
  towards us. coast.png's crowns ΔE 11.1 → 8.1, tetrapods 8.7 → 6.0.
- **No starburst at golden hour and sunset:** with the sun now low ahead every evening, the grade's streaks show only for
  a high sun; the soft glow (the sky's halo, the bloom on the disc, the haze) carries it, as in the repaints. The streaks'
  ray noise comes from a table (within a level of the old streaks; 1.80 → 0.94 ms where they still show).
- **The moon shows once the twilight has gone** (ahead now, a full moon beside the sunset glow read wrong).
- Against the paintings at noon (share-weighted region ΔE): the city 8.87 → 8.77, the avenue 14.45 → 11.20 (blossom
  10.7 → 5.6, lawn in the sun 26.5 → 5.2; its left pavement 26.9 → 41.8, now under the trees' shadows), the coast 6.57 →
  7.20 (crowns and tetrapods closer, its house 36.3 → 18.7; worse: the slope's box 13.4 → 18.0 with a tree's shadow now
  falling into it, as painted, and the rail's box 13.9 → 25.7, its median flipping between the yellow wall-top and the
  grey rail), the country 6.48 → 6.46.
- The car's painter's sun (Gap 2) is now the real sun but on the mountain pass's sharper left-hand bends (~5% of a noon
  drive there): it stays as a guard.
- How: `path.js` (`Path.I`, the heading's running integral; `meanHeading(s, w)`), `sky.js` (`skyDirs(t, …, head)`: the sun
  at `head + sunBearing(t)`, the moon at `head + 20°`; `updateTOD(t, head)`, `lightDirAt(t, out, head)`; null: the old
  sky; the moon by `uMoon`), `main.js` (`SUN_W` 200; the shadow re-aim looks ahead along the road at the car's speed;
  `keyAt()`, `VOL_B` 110°, `LEAF_B` 150°; the streaks by the sun's height), `materials.js` (`VOL_KEY` in the lights chunk,
  `volKey()`, `U.uVolKey`, `U.uLeafKey`; faces the real sun misses take the key's ramp alone), `post.js` (`raysTable()`,
  the ghosts only near their line). Test switches `st.sunroad`, `st.volkey`. Assets: none. World: the same layout.
  Programs: 62 on desktops, 61 on phones.
- Cost (the shared box's Vega; the desktop machine dropped ~5 min into this step's GTX runs and stayed down): at noon
  nothing measurable (in-page toggle of `st.sunroad`: desktop −0.49 ms, phone +0.05, the control −0.36 / −0.11; city
  drives desktop 20.26 / 20.03 → 21.19 / 20.56 ms, phone 12.35 / 12.41 → 12.22 / 12.80). At golden hour and sunset the
  low sun now shines along the road, so the shadow pass covers ~380 m of it (~124 m when it shone from the side): per-draw
  timers over coast drives at golden hour, the shadow pass +1.3 ms at desktop quality (the main pass the same) and
  +0.3 ms on phones; drives desktop 25.99 / 25.80 → 28.08 / 26.90 ms, phone 11.81 / 11.02 / 11.45 → 11.55 / 11.63 /
  10.80 (the iGPU's clock steps). The streaks' cost where they still show: 1.80 → 0.94 ms. CPU: two lookups a frame;
  shadow re-aims 2 a minute at noon (was 1), 5–7 at golden hour (was 4). 0 shader errors in all six zones on the desktop
  and phone tiers at noon, golden hour, sunset and night (26 sweeps); no console errors at q=low, mid and high; none
  compiled through sunset, night, rain or drives; embed starts on tap; start-up the same within the box's noise (medians
  3.04 vs 3.31 s over seven interleaved loads each; both builds had one 5 s load).
- Left over: the golden hour's longer shadow pass (fit the shadow box to the view at a low sun: step 24); the noon sun
  higher than painted (62° against ~45–55°); the sunset sun under the band's ridges; the night's moon above the frame;
  the coast's slope and rail boxes (a guardrail key of its own would cost a program).

## 2026-10-25 · 10:xx — Gap 2: the car as painted
- **The car's back is in the shade, as in every painting:** a deeper teal (CIELAB L* 69–84 → 66–67; the paintings
  55–68) with a navy lower bumper and glowing lamps. The car's body against the paintings, ΔE: the city 24.8 → 12.3, the
  avenue 42.4 → 23.0 (a light-blue car there), the coast 23.3 → 7.8, the country 19.3 → 17.7 (a two-tone van there).
- **Why it read lit:** the noon sun stood 84–124° round from the car's heading at the four paintings' places (to its
  left, level with it or behind), and 84–170° over whole drives, so the hatch faced it; the car's soft ramp also gave a
  face turned a quarter away from the sun half its light. The paintings' sun is 60–80° ahead-left at noon (by the car's
  shadow) and straight ahead in their evening repaints. (So the world's sun is a gap of its own: the next step.)
- **The painter's sun:** the car alone is lit by the sun swung round to ahead of it (as it is within 80° of ahead;
  beyond, pulled forward on its own side, smoothly), on a ramp of its own (no light on a face turned from the sun, a
  narrow soft edge). The shadows it casts and receives stay the real sun's. On the mountain's curves the hatch's colour
  now moves at most 12 levels from one frame to the next (it jumped up to 58 as the back swung in and out of the sun).
  **The painter's fill:** its shade takes a bright sky-blue light, darker towards the sills, read per hour from the
  paintings and their repaints.
- **Tail lamps as painted:** a cream light guide looping round inside a red lens with a dark red rim (was a pale bar in
  chrome), a soft red halo on the paint round them by day too, the high-mount stop lamp a dim red (it still lights up
  when braking); at night the lens keeps its red (it washed out to a pinkish white). Lamps ΔE at noon 12.6–37.0 →
  5.5–27.4, at night 42.5–46.9 → 22.8–25.4.
- **A navy lower bumper** (the reflectors on it), **a chrome emblem** on the hatch, and **the white roof's line runs
  straight** (it was a row of white teeth along the shoulders: the hairy band under the roof cap from behind, the
  saw-teeth over the side windows).
- **The evening:** the hatch against the repaints, ΔE golden hour 38.5 → 11.0, sunset 35.7 → 9.2, night 31.1 → 16.3 (it
  was a sunlit olive at golden hour and a khaki at sunset). Rain and grey skies keep the old light (no fill), so the back
  is a darker teal there.
- Worse: the bumper in the avenue and the country (their painted bumpers are body-coloured: 36.7 → 73.5, 8.7 → 75.1),
  the roof's back edge at noon (13.8–17.4 → 19.6–21.3).
- How: `materials.js` (`CAR_KEY` in the lights chunk: the car's direct light and glint from `U.uCarKey`, its own
  shadows where the real sun reaches; `GRAD_CAR`), `car.js` (the fill after `lights_fragment_end`, `U.uCarFill`; the
  lamps' program; capsule light guides; glow cards; the split bumper; the emblem; the two-tone by quads), `main.js`
  (`KEY_A`, the key per frame in view space; `CF_T` per-hour fill × `paintSky()`). Test switch `st.carkey`. Assets: none.
  World: the same layout. Programs: 62 on desktops, 61 on phones. The car: 12 → 13 meshes, 14,778 → 14,474 triangles.
- Cost (the shared box's Vega; the desktop machine is off limits), per-draw GPU timers, the car's draws against the
  sky's in the same runs: the subagent's calm runs desktop +6.3% (+8.4 / +5.2 / +6.2 / +5.2; ~0.08 ms; live against
  itself +0.5%), phone +4.7% (~0.04 ms); the main agent's, on a busy box, desktop −0.6% (−8.6 / +6.4 / −7.7 / +7.3; live
  against itself +0.7 / −5.8), phone +7.0% (−4.5 / +20.9 / +0.9 / +10.7; 0.99 → 1.07 ms), the coast at night +6.6%; the
  car's shadow draws the same. Over city drives: desktop 19.98 / 19.74 → 18.16 / 18.10 ms, phone 12.18 / 12.22 → 11.41
  / 12.49 (the iGPU's clock steps). 0 shader errors in all six zones on the desktop and phone tiers at noon, sunset and
  night (and the low tier at night); no console errors at q=low, mid and high; none compiled through sunset, night, rain
  or drives in rain and snow; embed starts on tap; start-up the same (medians 3.02 vs 2.94 s over three interleaved
  loads each).
- Left over: the world's sun (the car's and the trees' shadows still fall ahead-right; the paintings' fall back-right),
  the roof's lit lip, the night car's moonlit roof, the city's round lamps and the country's two-tone (one car for all).

## 2026-10-25 · 08:xx — Gap audit 1: the coast's and the country's road, and the cherry blossom, as painted
- **A gap audit** (`ref/GAPS.md`): the game's closest frame to each painting at noon (the city at s = 140, the avenue
  300, the coast 1100, the country 600, at each painting's own size), compared region by region (CIELAB ΔE of the
  medians, share of the frame, fine detail) and ranked. First the coast's and the country's asphalt, then the car, the
  cherry crowns, the city's canyon and shopfronts, the avenue's shadows, the coast's slope, the country's verges, the far
  shore and the coast's house. The two that a material can fix are fixed here; the rest is the plan for the next steps.
- **The coast's and the country's road is the paintings' cool blue-grey** in the sun, darkest by the car and paler and
  bluer with distance (it was a warm light grey everywhere). The road in the sun against the painting, ΔE: the coast
  23.2 → 5.2, the country 19.5 → 3.0. Golden hour and sunset have their own tones, read against `ref/tod/` (spots on the
  road: the coast 10.4 → 9.8 and 18.7 → 9.8, the country 22.0 → 12.3 and 22.7 → 11.3). The night, grey skies and rain
  keep the old road. The shade on it (the car's shadow, already matched) keeps its navy.
- **Every road's grain is a painted aggregate**, a mottled grain with pale chips and dark pits that fades to its mean
  with distance, where it was a blocky mosaic of 4.5 cm squares. The road's fine detail (painting): the coast
  0.45 → 0.82 (1.25), the country 0.60 → 0.89 (0.90), the city 0.83 → 1.13 (1.95). A recorded drive shows no crawl: the
  frame-to-frame change on the road ahead is the same or lower (the coast 0.64 → 0.52 at 10–20 m, 0.97 → 0.85 beyond).
- **The cherry blossom keeps more of a deeper rose** before its pale petal tips on a bright day. The pink pixels'
  lightness (10th / 25th / 50th / 75th / 90th percentile, CIELAB L*): 46 / 55 / 68 / 78 / 82 → 37 / 46 / 59 / 73 / 79
  (the painting 43 / 50 / 57 / 69 / 83), chroma 36 → 42 (40). Crowns' ΔE: median 21.0 → 10.7, lit 7.2 → 5.5, shade
  12.8 → 11.6 (now a little deeper and redder than the painting's). Golden hour, sunset, night and grey skies keep the
  old ramp.
- How: `materials.js roadCol` (the grain from the mip-filtered `vnoise`; on the coast and in the country the road's
  direct light is tinted by `gRoadT`, `U.uRoadN` → `U.uRoadF` over 3–22 m from the camera, after `lights_fragment_end`),
  set per frame in `main.js` from `ROAD_T` (per-hour keys × `paintSky()`); the blossom ramp's rose and tips (`U.uBlMid` /
  `uBlTip`, worked out on the CPU from `BLM_T`, so the crowns' many alpha-tested layers pay no extra operations). Test
  switch `st.road`. Assets: none. World: the same layout. Programs: 62 on desktops, 61 on phones.
- Cost (the shared box's Vega; the desktop machine is off limits), per-draw GPU timers against the sky's draw in the
  same runs: the coast's ground +1.9% on desktops (+0.1 / +3.5 / +3.0 / +1.2% over four pairs; ~0.17 ms) and +5.0% on
  phones (+2.7 / +5.8 / +5.2 / +6.3%; ~0.17 ms); the country's ground at golden hour +1.5% on desktops, at noon on
  phones +4.4% (+5.0 / +3.9 / +3.9 / +4.7%; ~0.14 ms); the city's ground (the grain only) +1.1%; the blossom −0.2%
  desktop, +0.1% phone; the avenue's ground −0.6% / +0.4%. Over drives: the coast desktop 22.16 / 22.67 → 20.82 / 21.22
  ms (the iGPU's clock steps), phone 9.71 / 9.94 → 9.45 / 10.30; the country phone 9.52 → 10.17 ms (means of 13 and 9
  interleaved runs; live alone, as an A/A, spans 9.13–9.86, and every draw of such a drive timed one by one sums to the
  same, 13.78 vs 13.82 ms: most of it is the iGPU's clock steps, the work is the ground's ~0.14 ms). 0 shader errors in
  all six zones on both tiers (noon and sunset on phones); no console errors at q=low, mid and high; none compiled
  through sunset, night, rain or a drive on either tier; embed starts on tap; start-up the same within the box's noise
  (medians 3.09 vs 3.20 s over seven interleaved loads each; live 2.93–4.57, staging 3.04–3.42). With the painted meadow
  missing the procedural ground draws with the new road, 0 shader errors.
- Left over: the night road is the old one (its targets want a darker blue-grey; the headlights' pool lights it); the
  mountain and snow roads keep the old warm grey (the coast's tint fades across the zone blend); the avenue's road is
  unchanged (its gap is the shadows, gap 6); the blossom's shade a little deep; the road tint's distance could be worked
  out per vertex to save the coast's ~0.17 ms. Next: the car (gap 2).

## 2026-10-25 · 05:xx — Finish 3: phones' evening glow at under a third of the cost
- **Nothing visible changes.** On phones and in the X card the glow at sunset and night (the city's neon and lit
  shopfronts, lamps, lanterns, tail lamps) comes from a lighter bloom that spreads the same light over the same widths.
  Side by side with live, in 2× crops of the brightest glows (the 中華料理 and 焼き鳥 neon, the tail lamps, the avenue's
  lamps), the frames can't be told apart: region medians move by a CIELAB ΔE of at most 2.4 (the city at night, where
  the test harness's seeded fireflies also land elsewhere; the subagent's aligned build read ≤ 1.15), the coast at
  sunset is pixel-identical. Desktops keep three's UnrealBloomPass: their frames are pixel-identical to live.
- **Phones' bloom costs under a third of what it did:** the pass in the city at night 4.0–4.3 → 0.9–1.3 ms; over phone
  drives the city at night 17.25 → 13.08 ms a frame (pairs −4.85 / −4.50 / −4.11 / −3.19) and the coast at sunset
  12.09 → 10.77 (pairs −1.08 / −1.07 / −1.90 / −1.20).
- **The night sky works out the Milky Way only near it** (farther, its light is under a level): the sky's draw in the
  city at night 2.25 → 1.11 ms on phones, 1.29 → 0.68 on desktops.
- **Research:** the phone frame from noon to evening: the extra cost was almost all the bloom (four passes at half size or
  more and a full-size blend), plus the night sky and the night's lamp heads and light pools. Dual-filter (Kawase) and
  Call of Duty's 13-tap chains were weighed: at a quarter size their taps cost what the Gaussians do and their glow has
  another shape; the saving is in where the work runs. A numpy model of both chains showed a first try's quarter grid
  thresholding other pixels than the desktop's (a neon sign's halo off by ΔE 13.8): the high pass now samples the
  desktop's half-size grid exactly. Built by a subagent; verified independently by the main agent, both on the shared
  box (the desktop machine is off limits).
- How: `post.js LiteBloomPass` (a high pass of four thresholded taps to a quarter size; five mips at ¼ … 1/64, each
  UnrealBloomPass's Gaussian with the same width in screen pixels and half the taps; the composite at a quarter size,
  added in the grade pass: `LITE_BLOOM`); `makePost({ lite })` where the quality isn't high (`main.js`); `sky.js` (the
  Milky Way's noise only where its band weighs over 0.001). Assets: none. World: the same layout. Programs: 62 on
  desktops, 61 on phones.
- Cost: less. 0 shader errors in all six zones on both tiers; no console errors at any quality; none compiled through
  sunset, night, rain or a drive on either tier; embed starts on tap; start-up the same (medians 3.07 vs 3.08 s over
  ten interleaved loads).

## 2026-10-25 · 03:xx — Finish 2: a first visit a third lighter, the start button sooner on a slow line
- **Nothing visible changes.** The painted horizon, the shopfronts, the houses and the meadow are re-encoded from their
  lossless masters at WebP quality 50 (they were 84–90); the clouds keep their colour at q88 (their near-white
  brushwork changed shape at every step below it) with an exact, lossless alpha plane, which is also smaller. In 2×
  crops of the game's frames (the shopfronts' magazine windows, the houses, the ranges and forests of the horizon, the
  cumulus) the new files can't be told from the old; frame-wide the colour moves by a mean CIELAB ΔE of 0.13–0.72.
- **A first visit fetches about a third less:** the painted assets 3.0 → 1.9 MB on a 1080p desktop and 1.1 → 0.8 MB on
  a phone (the whole visit 4.0 → 2.9 MB and 2.1 → 1.8 MB).
- **The start button comes up sooner on a slow line:** the crowns, meadow, fronts and houses download first, and the
  horizon band and the clouds (the largest) after them, awaited only once the road is built and the light prepared, so
  they download during that work. On a 3 Mbps phone line 8.1 → 6.8 s, on a 10 Mbps desktop line 6.4 → 5.7 s (the
  subagent's medians: 6.4 → 4.9 s); unthrottled the same (~3.0 s on this box).
- **Research:** every painted WebP's lossless master was found or rebuilt (each re-encodes byte-for-byte to the file it
  replaces), then candidates from q90 down to q50 were judged in 2× crops at noon, sunset and night against a lossless
  render; deferring assets past the start button was left out (a late house sheet would re-upload the whole painted
  atlas mid-drive; houses change world generation; fields switch ground shader variants). Built by a subagent; verified
  independently by the main agent, both on the shared box (the desktop machine is off limits).
- How: `painted.js` (the loaders read `band3`, `clouds2`, `fronts3`, `houses2`, `fields2`), `main.js` (the fetch and
  await order; a "painting the sky…" step compiles the band's and clouds' programs and uploads their textures before the
  start button). Assets: five new sets from `~/cdtest/dl/scripts/pack14b.py`; the old ones (`band2.*`, `clouds.*`,
  `fronts2.*`, `houses.*`, `fields.*`) are removed. World: the same layout. Programs: 62.
- Cost: none on the GPU (the same texture sizes and formats, programs and draws). 0 shader errors in all six zones; no
  console errors at any quality; none compiled through sunset, night, rain or a drive; embed starts on tap; with the
  band's or the clouds' files missing the procedural look takes over, with no errors and nothing compiled mid-drive.

## 2026-10-25 · 02:xx — Finish 1: the coast's tetrapods at a quarter less GPU time, the night city checked
- **Nothing changes on screen.** A new deterministic capture (a fixed virtual clock and seeded randomness: two loads of
  one build give the same pixels) shows the frames identical to live: the subagent's 18 pairs (noon, sunset and night in
  every zone, desktop and phone) and the main agent's 8 (the coast at noon, sunset and night, the avenue, the country at
  sunset, a phone portrait) with 0 pixels different, apart from 19 of 921,600 pixels by one level in the city at night
  (rounding in the band's new branch).
- **The tetrapods' legs share their rings' vertices** (indexed: the same triangles in the same order, 148 vertices a
  block on desktops instead of 720, 76 instead of 360 on phones). Their draws over a coast drive (GPU timers around each
  draw, three interleaved pairs on the shared box's Vega iGPU): main pass 1.96 → 1.44 ms, shadow pass 0.48 → 0.29 ms
  (the untouched sky's draw read 1.49 vs 1.50 as the control). Coast chunks build ~15–20% faster.
- **The water along the sea wall reads its next wave size only between 8 and 64 m** (elsewhere every use of it is
  weighted by zero), and **the far city's night windows** are worked out only on the towers' light pixels.
- **The city at night costs what it did before Restyle 20:** its +1.18 ms was the integrated GPU's clock state, not the
  painted night (Restyle 20's band work measures 0.05–0.15 ms; its draws, triangles and programs are unchanged; the
  subagent read +0.27 ms against Restyle 19, the main agent +0.16 against live, both within noise).
- **Research:** per-draw GPU timing mapped the coast's frame (shore 1.5 ms, crowns 1.6 + 0.45 shadow, sky 1.3, clouds
  0.8, bark 0.65 + 0.2). On phones the bloom pass is 3.6–4.4 ms of every sunset and night: the next trim. A far-bark tier
  (0.12 ms) was left out because it changes far pixels. Built by a subagent; verified independently by the main agent,
  both on the shared box (the desktop machine is off limits).
- How: `props.js tetraTemplate` (indexed), `chunks.js` (`G.tetra` indexed), `sea.js shoreMaterial`, `painted.js` (the
  band's windows). Assets: none. World: the same layout. Programs: 62.
- Cost: less. On the Vega iGPU, coast drives interleaved with live (four pairs each): phone profile 10.92 vs 10.11 ms
  (−0.81; every pair lower); desktop profile 20.94 vs 21.70 (+0.76; every pair higher: this iGPU steps its clock down for
  a lighter frame, the subagent's set read −3.22). Start-up the same (medians 3.32 vs 3.18 s). 0 shader errors in all six
  zones; no console errors at any quality; none compiled through sunset, night, rain or a drive; embed starts on tap.

## 2026-10-24 · 23:xx — Restyle 20: golden hour, sunset and night, as painted
- **The painted world stays painted when the sun goes down.** The four reference paintings are bright days, and every
  painted piece (the sea, the clouds, the far horizon, the tetrapods, the bark, the lawns) fell back to the old
  procedural colours from golden hour on. Now each has its golden-hour, sunset and night tones, read from the same four
  paintings repainted at those hours (12 Grok Imagine edits that keep each painting's composition, `ref/tod/`), blended
  through the day as the sky's palette is. Grey skies and rain keep their own look; noon is unchanged.
- **The coast's sea at sunset is violet water with rose crests and pink-white foam** (it was a flat pale pink); at
  night a deep navy with moonlit crests. Where a low sun or a low moon stands over the water, a column of glinting light
  runs to it.
- **The cumulus:** honey and peach at golden hour, salmon over mauve at sunset, a lilac afterglow at dusk, and at night
  moonlit blue-grey with silver edges (they were a barely visible navy).
- **The horizon:** honey-brown ranges at golden hour, mauve ones at sunset, deep blue ones at night; **the far city
  lights up at night**, its towers dark blue with scattered lit windows coming on with the town's.
- **The tetrapods, the bark, the lawns and fields, the cherry blossom and the round trees' leaves** take the repainted
  hours' colours: golden concrete, then dark mauve heaps, then moonlit blue-grey; gold-green fields, then a moonlit
  blue-green (the old deeper green turned a saturated grass green under the moon); pale lavender blossom at night (it
  went a near-black purple).
- **The evening sky is the paintings' steel blue overhead** (it was lavender), and **moonlight is less saturated**:
  blue-grey nights instead of inky indigo.
- **Measured against the repainted targets** (CIELAB ΔE of region medians, 23 regions in four zones): golden hour
  25.9 → 19.5, sunset 35.6 → 21.3, night 28.9 → 14.9. The coast's sea at sunset 37–54 → 5–7, at night 18–26 → 4–11;
  the clouds at night 27–37 → 5–12; the country's fields 29–34 → 2–6; the blossom at night 41 → 13. Worse: the
  avenue's lawn at night (15 → 27: moon shadows under the trees), the city's far end at golden hour (41 → 49: the target
  sets the sun at the street's end), the country's hills at sunset (14 → 20). Roads are not painted per hour (23–36).
- **Research:** the targets first (no evening or night reference existed): all twelve repaints kept their painting's
  composition at the first try. Built by a subagent; verified independently by the main agent, both on the shared box
  (the desktop machine is off limits while its crashes are investigated).
- How:
  - **`painted.js todTones` / `mixTones`:** palettes keyed by the time of day (as sky.js KEYS, on the new `TOD.t`),
    ungraded each frame; `paintSky()`: the painted look by the weather alone.
  - **`sea.js`:** golden, sunset and night tones per role; the open sea's glints have their own tone (`uPSpark`); the
    light's path where a wave no steeper than the painted ones would mirror it into the eye (`uPathK`, `uPathDir`,
    `uPPath`, `uPGlint`), faded out for a high moon.
  - **Clouds:** a shade, middle, lit and rim palette. **Band:** a tone ramp by the painting's lightness, keeping some
    of its own colour; the far city's windows (`uWin`).
  - **`main.js`:** keyed tones for the tetrapods, bark, lawns (the day key reproduces the old daytime tints exactly),
    blossom shade and leaves (`materials.js uGhTint`). **`sky.js`:** the evening zenith and the night lights.
  - **Test switch:** `st.todpaint` (0: the painted look on bright days only, as before). **Assets:** none. **World:**
    unchanged.
- Cost: none on phones; the city at night costs desktops about a millisecond on an integrated GPU. On the shared box's
  Vega iGPU, interleaved with live (four pairs each):
  - **The city at night:** desktop profile 27.12 vs 28.30 ms (+1.18; pairs +2.17 / +0.83 / +0.48 / +1.24; the
    subagent's in-page toggle +1.7 ± 0.5), phone profile 16.65 vs 16.72 (+0.08). Likely the horizon band's per-pixel
    tone ramp and window grid over its whole strip; to trim in the finishing step.
  - **The coast at sunset:** desktop profile +1.92 ms (pairs −0.90 / +2.08 / +6.29 / +0.21: the box's load rose
    mid-set), phone −0.22. The subagent's coast drives: at night −0.44 / +0.25, at sunset +0.01 / −0.05.
  - **Noon:** unchanged (all 42 painted uniforms identical to live at t = 0.5; noon frames match in all six zones).
  - **Start-up:** about the same (medians 3.15 vs 2.98 s on a busy box).
  - **Programs:** 62, none compiled through sunset, night, rain or a drive. 0 shader errors in all six zones; no
    console errors at any quality; embed starts on tap.

## 2026-10-24 · 21:xx — Restyle 19: smooth painted trunks and branches
- **The cherry trees' trunks and limbs are smooth and round, as in the reference art.** They were faceted boxes (5–7
  flat sides, straight pieces kinked at each bend) in the props' hard toon steps: a light tan with bright and dark
  facets. Now each trunk rises from a flared root with a slight bow into a rounded fork; three or four limbs curve out
  of it in a wide V, thinning as they go; branches bow up into the crown, with a thin twig off each into its underside.
- **Painted bark.** On a bright day the painting's own colours: a dark brown-black body, a warm brown lit edge on the
  sun's side behind a soft terminator, a deep brown shade; faint furrows up the trunk, a soft mottling and a few short
  horizontal lenticels, fading with distance. In a crown's shadow a trunk keeps its body colour and a softer lit edge,
  as painted.
- **The round broadleaf trees too** (the coast's slope, the country, gardens, the mountain's): a smooth flared bole
  forking into four limbs that curve up to the crown's lobes, a branch or two off each, in the coast painting's warm
  brown.
- **Dusk, night and rain keep their look:** the old bark colours under the scene's light, on the new shapes.
- **Measured against the reference** (CIELAB ΔE of the trunks' lit / median / shade colours, noon): the avenue at
  s = 120 12.5 / 12.0 / 7.2 → 3.6 / 2.7 / 1.8, at s = 500 13.1 / 11.3 / 6.8 → 2.9 / 2.2 / 1.2; the coast's slope trees
  (s = 1100) 38.8 / 37.8 / 20.6 → 9.1 / 1.4 / 19.5; the country's (s = 150, against the coast painting's tree) 21.0 /
  23.1 / 18.5 → 4.2 / 5.9 / 1.5. Still off: the coast trees' shade (the sun is behind the camera there).
- **Research:** three.js r186's TreeGenerator (parallel-transport sweeps, a taper that keeps the bole full, a flared
  root); painting tutorials' cylinder light (lit edge, halftone, core shadow, softly blended; bark as a few marks); wrap
  (half-Lambert) ramps. Built by a subagent; verified independently by the main agent, both on the shared box (the
  desktop machine is off limits while its crashes are investigated).
- How:
  - **`geom.js GB.tube()`:** a tapered tube along points, rings swept with a parallel-transport frame, smooth normals
    leaning with the taper, wound outward (`GB.rod` unchanged); uv the angle round it and metres along it. **Indexed
    GBs** (`idx`): a ring's vertices are shared.
  - **`props.js`:** `trunkTube`, `curve`, `taper`, `barkSides` (desktops 12 / 9 / 6 / 4 sides, 5 steps a limb; phones
    8 / 6 / 4 / 3, 4). The trees keep every random number they drew (layouts and crowns unchanged); the new detail draws
    its own. Templates carry a `bark` part, stamped into the chunk's `G.bark`.
  - **`materials.js barkMaterial`:** a soft wrap ramp; on a bright day six painted tones (`U.uBk…`, cherry and
    broadleaf, ungraded each frame as the tetrapods') picked by sun × shadow, the shadow taking at most 28%; strokes
    periodic round each tube (no seam); contact AO at the foot; phones skip the lenticels. Test switches `st.bark`,
    `st.trunks`.
  - **World:** one more draw per chunk with trees, hidden with the crowns beyond 540 m. **Assets:** none.
- Cost: small, within this box's noise. On the shared box's Vega iGPU, interleaved with live (L S S L …):
  - **Main agent's, GPU over ~1 km drives:** avenue desktop profile 20.92 vs 21.10 ms (+0.17; pairs +1.12 / −1.15 /
    +0.30 / +0.42), phone 10.59 vs 11.18 (+0.60; pairs −0.64 / −0.03 / +1.33 / +1.73); coast desktop 22.19 vs 21.72
    (−0.47), phone over six pairs 10.27 vs 10.48 (+0.21; pairs −0.86 / −0.26 / −0.09 / +0.65 / +1.06 / +0.79).
  - **The subagent's:** avenue desktop +0.33, phone −0.21; coast desktop +0.67, phone +0.91 (pairs +1.67 / +0.48 /
    +0.61 / +0.87). In-page, all the bark on vs hidden (an upper bound): avenue desktop +1.78 ms, phone +0.73; coast
    desktop +0.52, phone +0.25.
  - **Geometry:** the avenue's trunks 148k vertices / 49k triangles → 177k / 246k (desktops), 119k / 152k (phones).
  - **World building:** no slower (a CPU profile of 60 avenue chunks 559 vs 568 ms; genbench within its noise). Flat
    out on the phone profile (×4 CPU): world-build spikes avenue 2 and 2 (worst 31 / 23 ms) against live's 3 and 0
    (53 / 16), coast 4 and 3 (18 / 18) against 3 and 6 (20 / 51).
  - **Start-up:** the same (median 2.88 vs 2.89 s).
  - **Programs:** 62 (one more, warmed at load), none compiled through sunset, night, rain or a drive. 0 shader errors
    in all six zones; no console errors at any quality; embed starts on tap; the other zones' starts match live.

## 2026-10-24 · 19:xx — Restyle 18: the tetrapods and the spray, as painted
- **The tetrapods are smooth, rounded concrete, softly shaded, as in the reference art.** They were blocky legs with
  flat ends in the props' hard toon steps and read as angular grey crates. Now: round legs with a rounded rim at every
  end; on a bright day the painting's own colours (a warm light grey where the sun reaches, a cool blue-grey in shade
  with a soft edge between, deep blue in the creases where the legs meet); a dark wet band where the surf washes them,
  and white foam at their feet that surges up as each wave hits.
- **The spray is the painting's white lace and droplets.** The big soft puffs (up to ~6 m across, flying ~4 m up) gave
  way to bursts at each heap's face to the sea: a fan of white lace with spiky tips, light blue at its foot, 0.5–2.4 m
  tall, breaking into holes and drops as it falls back, with round droplets flung up and out. In time with the waves:
  a burst with each big wave and a smaller one halfway to the next, running along each heap.
- **Dusk, night and rain keep their look:** the painted tones are a bright day's; the spray and foam are lit as any
  white surface.
- **Measured against the reference** (CIELAB ΔE of the blocks' colours, noon, s = 140 / 250 / 900 / 1100): lit
  11.1 / 11.2 / 9.0 / 10.0 → 2.3 / 2.3 / 1.6 / 1.4; shade 12.1 / 11.5 / 12.7 / 12.9 → 3.3 / 2.1 / 4.9 / 5.5;
  lightness spread 29–40 → 39–41 (painting 45). Worse: the median at s = 140 and 900 (2.8 / 4.0 → 6.2 / 5.4): those
  blocks are darker overall than the painting's.
- **Research:** how anime background painters paint splashes (a needle-burst whose strokes thin and round off at the
  tips, white with light-blue shading, droplets as dots); stylised alpha erosion; splash sheets plus droplet particles;
  soft ramp (half-Lambert / wrap) lighting. Built by a subagent; verified independently by the main agent (on the
  shared box: the desktop machine is off limits while its crashes are investigated).
- How:
  - **`props.js tetraTemplate`:** truncated-cone legs with a bevelled rim (12 sides on desktops, 6 on phones); uv
    carries the position along the leg (creases) and the road distance (foam timing). Their own per-chunk mesh
    `G.tetra` (one more draw per coast chunk).
  - **`materials.js tetraMaterial`:** a soft ramp; on a bright day the painting's tones ungraded each frame (`U.uTpK …`,
    as the painted sea's), chosen by sun × shadow; phones one noise read (`TP_LITE`). Warmed up at load (61 programs,
    one more). Test switch `st.tetra`.
  - **`surf.js`:** a lace sheet plus droplets (4 on desktops, 2 on phones) per burst point, all on the GPU; burst points
    at the heap's face (the same random numbers). Test switch `st.surf`.
  - **World:** the layout is unchanged; coast chunks place their blocks a heap at a time. **Assets:** none.
- Cost: on the shared box's Vega iGPU (the desktop machine was offline), interleaved with live:
  - **Main agent's check, GPU over 1.13 km coast drives (four pairs):** desktop profile 20.67 vs 21.48 ms (+0.81;
    pairs +0.71 / +0.83 / +0.87 / +0.82), phone profile 10.51 vs 10.77 ms (+0.26).
  - **The subagent's:** desktop +0.32 / −0.42 ms (two sets), phone +0.31 (pairs −0.06 / −0.05 / +1.08 / +0.27); the
    in-page toggles within their noise.
  - **World building:** coast chunks take ~20–26% more CPU on desktops (medians 163.6 / 161.4 vs 135.9 ms per 20); the
    blocks are ~100k vertices at s = 1100 on desktops (was ~30k). Flat out on the phone profile (×4 CPU), world-build
    spikes 6 and 3 (worst 27 / 21 ms) against live's 3 and 4 (47 / 20 ms).
  - **Start-up:** the same (2.94 vs 2.99 s).
  - **Programs:** 61 (one more, warmed at load), none compiled through sunset, night, rain or a drive. 0 shader errors
    in all six zones; no console errors at any quality; embed starts on tap; the other zones' starts match live.

## 2026-10-24 · 16:xx — Restyle 17: the water along the sea wall, as painted
- **Rows of breaking waves along the sea wall, as in the reference art.** Within ~35 m of the wall the water was the
  open sea's blue with big flat white foam swirls running along the wall and a slanted crest line every 6.5 s. Now it
  is the painting's choppy sea:
  - short, bowed waves in rows across the view, rolling in at a slant;
  - each with its line of white foam: beads and dashes, and where it breaks a white crest with a torn top and streaks
    of foam falling from it;
  - the water just beyond the foam a bright clear cyan, the troughs between the rows a deep navy;
  - as in the painting, the rows keep about the same size on screen: small beside the car, bigger further off.
- **Lace** runs back from the breaking crests, churns along the wall as each big wave hits it and boils round the
  tetrapod heaps.
- **The spray keeps time with the new waves:** the big ones (one every 6.5 s) run in across the view, so a heap's
  spray now runs along it from its far end.
- **Dusk, night and rain keep their look:** the cyan and navy are a bright day's tones; the crests' foam stays at any
  hour, lit as any white surface.
- **Measured against the reference** (near strip, noon, CIELAB ΔE of the median water): s = 900 7.2 → 4.6, s = 1100
  5.6 → 3.0, s = 250 6.0 → 1.3, start 6.2 → 2.0. The strip beyond it (30–100 m) is a little worse: 2.3–2.9 → 3.9–4.3.
  Cyan water (by hue) 8% → 15–17% (painting 20%); foam share 7–30% → 10–19% (painting 9%).
- **Research:** stylised shoreline and crest foam (toon-water foam thresholds, Voronoi and noise lace, painted distance
  fields thresholded over time, crest foam as a band at the top of a wave), and the painting pixel by pixel: a
  short-crested chop whose rows keep their size on screen. Long straight crests read as stripes and solid white bands
  as road markings; both were dropped. Built by a subagent; verified independently by the main agent (screenshots,
  checks and a recorded drive on the shared box, the desktop machine having dropped offline mid-run).
- How:
  - **`SHORE_PHASE`:** the waves come back along the road, slanting 43° in to the wall (they were nearly parallel to
    it); one big one every 6.5 s, 400 to the shaders' wrapped road distance, so `surf.js` follows unchanged.
  - **`shoreMaterial`:** four smaller waves to each big one, doubling in size with each doubling of distance from 8 m,
    every other crest fading out in between. One pattern per crest (two reads from the top mip). The crest's noise is
    read only within its reach, the lace only where there is foam. Every pattern repeats with the wrapped road
    distance (no seam), and the strip reaches the open sea's colour by 36 m (its 38 m edge stays seamless).
  - **Tones:** four painted tones, ungraded on the CPU each frame as offsets from the open sea's (`ugD`: three's
    `Color.sub` clamps at zero, which wiped the navy).
  - **Test switch:** `st.shore`. **Assets:** none. **World:** unchanged.
- Cost: small on desktops, none on phones.
  - **The subagent's, desktop machine's GTX 1660 Super, 1.15 km coast drives interleaved with live:** desktop profile
    3.31 vs 3.35 ms (+0.04; pairs +0.16 / −0.08 / −0.09 / +0.17; final build +0.16 over two pairs); phone profile 3.99
    vs 4.08 ms (+0.09). In-page toggle: phone within ±0.07 ms; desktop within that GPU's ±0.4 ms noise.
  - **Main agent's, shared box's Vega iGPU (the desktop machine went offline mid-run), four pairs:** desktop profile
    20.33 vs 20.99 ms (+0.66; pairs +1.03 / +0.82 / +1.04 / −0.24); phone profile 10.54 vs 10.12 ms (−0.42).
  - **A recorded drive:** the rows move with the water from frame to frame, with no crawling or flicker.
  - **Start-up:** the same (medians 3.06 vs 2.99 s on a busy box).
  - **Programs:** 60, as live; none compiled through sunset, night, rain or a coast drive. 0 shader errors in all six
    zones; no console errors at any quality; embed starts on tap.

## 2026-10-24 · 14:xx — Restyle 16: the open sea, as painted
- **The open sea is covered in painted wavelets, as in the reference art.** Beyond the surf it was a smooth, flat blue
  with a few long white streaks. Now, right out to the far shore, it is the painting's ripple: horizontal lenses of
  deep navy (little waves' faces turned towards us), light cyan streaks along their backs and white glints on the
  highest, small and many far out, larger towards the sea wall, rolling slowly in.
- **Its colours by distance are the painting's,** measured row by row: deep by the wall, paling out to ~250 m, then on
  to the far shore's light azure with all its tones together, so the far sea keeps its texture instead of fading flat.
- **Measured against the reference** (CIELAB ΔE of the median water by distance, left third, noon, s = 900 / 1100):
  400–1200 m 10.2 → 3.0; 45–80 m 5.1 → 2.6; 160–400 m 1.5 / 1.9 → 2.8 / 2.1; 80–160 m 3.2 / 3.4 → 5.1 / 4.9 (worse:
  a little too light and warm). Lightness spread at 160–400 m (L* p10–p90) 60–79 (painting 62–82; was 63–66); fine
  detail in the far strip 7.3–7.8 (painting 7.1; was 2.1–4.9); white glints 3% (painting 2.3%; was 0–0.5%).
- **Dusk, night and rain keep their look;** the water along the wall, its foam, the surf and the spray are unchanged.
- **Also:** the sea's patterns no longer jump when the world's origin moves (every ~900 m).
- **Research:** stylised oceans (Sea of Thieves' SIGGRAPH 2018 talk, toon-water crest thresholds, Quilez on texture
  repetition) and the painting at the pixel level: its far sea is a mosaic of small horizontal wavelets, not rows of
  crests. A first try drawing crests as walls the eye sees over gave contour-map bands and was dropped; a painted
  tiling texture laid flat would shrink under a pixel within ~100 m. Built by a subagent; verified independently by
  the main agent on the desktop machine.
- How:
  - **`sea.js paintedSea`:** value noise stretched along the crests (two layers; one on phones, `SEA_LITE`); its height
    and its slope up away from the eye pick the tone. The wavelets grow with distance just enough that far ones shrink
    on screen as in the painting without going under a pixel or two (per doubling of distance: 2^1.75 across the
    crests, 2^0.75 along), two neighbouring sizes blended keeping their contrast; the noise's footprint from the smooth
    world position.
  - **The way they roll:** one direction per coast zone, fixed in the world: back along its mean road heading, slanting
    in to the shore (`coastDir`, once per zone). Where a bend looks along them their faces fade out.
  - **Tones:** 12 painted tones (by the wall, ~60–90 m, ~250 m; dark, middle, face, lightest), ungraded on the CPU as
    before. The old painted tones' noise (9 reads a pixel) is gone; the dusk/night look runs only when it shows. Test
    switch `st.waves`.
  - **Assets:** none.
- Cost: none measurable.
  - **GPU over 1.15 km coast drives, desktop machine's GTX 1660 Super, interleaved with live (L S S L L S S L):**
    desktop profile 3.32 vs 3.43 ms (+0.12; pairs +0.05 / +0.47 / +0.05 / −0.10), phone profile 4.06 vs 4.04 (−0.01).
    The subagent's: GTX desktop +0.14, phone −0.12; the shared box's Vega iGPU desktop −0.24, phone −0.12.
  - **Start-up:** the same (1.28 vs 1.30 s). Flat out on the phone profile (×4 CPU): no world-build spikes.
  - **Programs:** 60, as live; none compiled through sunset, night, rain or a coast drive. 0 shader errors in all six
    zones; no console errors at any quality; embed starts on tap.
  - **World:** unchanged; the waves' direction costs ~1.6 ms once per coast zone.

## 2026-10-24 · 13:xx — Restyle 15: the shopping street's big lit signs, eleven painted shopfronts, a far city in haze
- **Big lit signs, as in the reference art.** The shophouses' signs standing off the first floor are light boxes up to
  1.15 m wide and 2.7 m tall (were 0.76 × 2.1 m): a white panel lit from inside with a neon tube round its edge and the
  name in strong ink (焼き鳥, 居酒屋, そば, 喫茶, 焼肉), or a coloured panel with white or neon letters (洋品店, 中華料理,
  ラーメン, カラオケ, スナック). They glow by day and light up at dusk and night.
- **The opening view is the painting's.** Beside the car on the left: a bookshop with its magazine racks out on the
  pavement under a red awning and a violet 焼き鳥 sign; on the right: a clothes shop under the painting's navy 洋品店
  board with gold letters, a red awning and a pink 焼き鳥 sign. (Whatever the seed; only that first stretch's layout
  changes.)
- **Eleven painted shopfronts and five painted upper floors** (were four and two): a bakery, a florist, a clothes shop,
  a ramen shop, a tea shop, a sweets shop and an izakaya with red lanterns join the general store, the bookshop, the
  noren'd entrance and the café; upstairs, flower boxes, a hanging basket, timber boards with curtains. The board over
  a shop mostly says what it sells. The street's layout is unchanged.
- **Canopies of lighter blue slate,** rows of round tiles catching the light, their round ends along the eave (were
  dark navy).
- **The street ends in a far city of pale high-rise flats in haze,** as in the painting (was a grey mountain).
- **Measured against the reference** (CIELAB ΔE of region medians, start frame, noon): right fronts 19.5 → 14.6, right
  upper floors 25.7 → 21.5, left upper floors 23.3 → 18.4, far street 14.6 → 13.6, left fronts 12.7 → 12.3; the whole
  frame (16 × 9 grid) 28.1 → 27.5.
- **If the paintings can't be loaded** (missing or truncated; the main agent tested the fronts, the band and the houses
  on the desktop machine's staging copy), the fronts keep a procedural timber look, the far end the mountain rings and
  the houses their procedural look.
- **Research:** Grok Imagine `image_edit` anchored on crops of city.png: all ten new bays came out flat and head-on at
  the first try; the far city from three Grok panoramas through the band pipeline. Built by a subagent; verified
  independently by the main agent, on the desktop machine's GTX 1660 again.
- How:
  - **A second texture, the painted atlas** (`textures.js buildPaintedAtlas`): the painted fronts, the signs, the canopy
    tiles and the painted houses, 2048 × 3512 on desktops and ~1224 rows on phones; the procedural atlas is back to
    2048 × 4096 (was 5248 / 4608), its 118 cells pixel-identical, so a device limited to 4096-pixel textures no longer
    gets it scaled down. The atlas material reads the painted atlas for every cell whose u is 2 or more (one read, in a
    branch every pixel of a triangle takes the same way); a shadow-pass twin (`M.atlasDepth`) cuts the houses' outlines
    from it. No new material program or draw call.
  - **Assets:** `assets/fronts/fronts2.*` (16 painted bays and their glow: 539 KB desktops, 157 KB phones) and
    `assets/band/band2.*` (the five bands plus the city's: 943 / 308 KB); they replace `fronts.*` and `band.*`.
  - **World:** each shophouse picks its paintings with its own random numbers; only the opening chunk is reshuffled.
- Cost: small. On the desktop machine's GTX 1660 Super, interleaved with live, four pairs each:
  - **GPU over 0.78 km city drives:** desktop profile 3.40 vs 3.55 ms (+0.15; pairs +0.02 / +0.03 / +0.42 / +0.11),
    phone profile 4.34 vs 4.15 (−0.19). Country (the painted houses' new texture): 1.49 vs 1.59 and 0.95 vs 1.10, each
    from one slow run (medians the same).
  - **The subagent's, on the shared box's Vega iGPU:** desktop +0.28 ms, phone −0.91 (an earlier build +0.44 / +0.65);
    the band in the city +0.18 / +0.16 (same-page toggle).
  - **World building:** city chunks +5–10% CPU (medians 164.8 / 172.2 vs 156.8 / 157.4 ms per 20); flat out on the
    phone profile (×4 CPU), world-build spikes 0 and 1 against 0 and 0 (worst 16 ms).
  - **Memory:** about +32 MB of GPU memory on desktops, +10 MB on phones; download +0.4–0.5 MB desktops, +0.15 MB phones.
  - **Start-up:** the same (2.10 vs 2.12 s).
  - **Programs:** 60, none compiled through sunset, night, rain or a drive.
  - **Checks:** 0 shader errors in all six zones; the other zones' starts and the painted houses match live; no console
    errors at any quality; embed starts on tap.

## 2026-10-24 · 10:xx — Restyle 14: painted grass on the coast's slope and the cherry avenue's lawns, long grass by the sea, flower beds under the cherries
- **The coast's green slope and the cherry avenue's lawns are painted grass, as in the reference art.** They were a
  flat lime with a scatter of tufts. Now they carry the country's painted meadow in each painting's own colours:
  - the coast: a warm yellow-lime in the sun, a deeper green in the shade, broad lighter and darker patches, and a thin
    strip of bare soil along the road's edge;
  - the avenue: a lighter, warmer green with finer, softer strokes, like a mown lawn, and fallen petals as before.
- **A verge of long grass by the sea.** A continuous band of knee-high grass runs along the road's land side, without
  the country's flowers: the coast painting's flowers are on its bushes. The round bushes in white flower stand out of
  it, bigger and closer together, with a clump of pink and violet flowers here and there.
- **Flower beds under the cherries.** Clumps of pink, violet and white flowers round most of the avenue's tree feet and
  along the lawns by the pavement, among small white-flowering bushes. They were a few clumps of yellow-and-white
  verge grass.
- **Measured against the reference** (CIELAB ΔE of the median grass, noon): the coast's slope 8.6 → 2.7 and
  15.7 → 9.5; its verge 19.2 → 3.6 and 27.8 → 4.3; the avenue's lawns in the sun 18.4 → 2.1, 9.6 → 1.5, 15.5 → 3.4
  and 15.7 → 5.1. Worse: one lawn's overall median, which is mostly tree shadow (8.4 → 18.8): the painting's shadow on
  the grass is a lighter green than ours.
- **Dusk, night and rain keep their look:** the painted colours are a bright-day look. **If the meadow's texture
  can't be loaded** (the main agent tested it), the coast and the avenue keep their procedural grass. The other zones
  are unchanged.
- **Research:** Quilez's and Mikkelsen's anti-tiling were looked at and kept in reserve (no repeat shows from the chase
  or crane cameras). Built by a subagent; verified independently by the main agent.
- How:
  - **Ground:** the coast's and the avenue's ground variants read the painted meadow too: one texture read and one
    noise read in place of the procedural grass's five noise reads. The coast takes it at 1.25× its size, the avenue at
    1.75× and 60% of its contrast, with tints fitted to the paintings (`FIELD.uFieldCo`, `uFieldSa`).
  - **Foliage atlas:** a new 256 px row (1024 × 3072 → 3328, +1.4 MB of GPU memory) with a painted flower bed and the
    coast's plain bank, painted at load with their own random numbers, above the tufts so the breeze still bends
    those. The moved cells are byte-identical.
  - **World:** the coast's bank, beds and bushes and the avenue's beds draw their own random numbers, so the rest of
    the layout is unchanged. On phones the coast's bank clumps stand a third further apart.
  - No new download, material, program or draw call.
- Cost: none clearly measurable. Everything ran on the shared box's Vega iGPU (the desktop machine was offline),
  interleaved with live, four pairs each:
  - **Main agent's check, GPU over drives:** desktop coast 19.91 vs 20.77 ms (pairs −1.13 / +0.63 / +2.16 / +1.79),
    avenue 19.92 vs 19.39; phone profile coast 9.90 vs 10.16, avenue 10.40 vs 11.13 (one 12.1 ms load).
  - **The subagent's:** desktop coast 19.69 vs 19.82, avenue 19.21 vs 19.41; phone avenue 10.97 vs 10.53, coast +0.45
    in one set and −0.44 in another. The same frame with the painted grass on and off: within the A/A control.
  - **World building:** about the same; flat out on the phone profile (×4 CPU), world-build spikes no worse (coast 2 and
    1 against live's 7 and 5; avenue 1 and 0 against 1 and 2).
  - **Start-up:** about the same (3.00 vs 2.85 s on a busy box).
  - **Programs:** 60, none compiled through night, rain or a drive.
  - **Checks:** 0 shader errors in all six zones; no console errors at any quality; embed starts on tap.

## 2026-10-24 · 08:xx — Restyle 13: the reference art's houses in the country, on the coast and along the cherry avenue
- **The houses are painted, as in the reference art.** The brown timber boxes and beige boxes with flat navy roofs gave
  way to:
  - the countryside: white bungalows under cobalt glazed tiles (one with a brick chimney), a plank barn, a cream
    two-storey farmhouse and a white cottage with a porch, among round trees, with low hedges;
  - the coast: the painting's half-timbered two-storey house up the green slope, its windows warm-lit by day, round
    trees and flowering bushes round it;
  - the cherry avenue: two-storey houses of plaster and dark timber under dark kawara roofs on both storeys, behind the
    trees, with a block wall or a hedge in front.
- **Roofs read as glazed tiles** from the road: each roof carries its painting's tiles, eaves and ridge. The pent roofs
  between the floors stand out from the wall.
- **Measured against the reference** (CIELAB ΔE of patch medians): country roof 39.0 → 17.3, country gable wall
  22.3 → 14.3, coast roof 27.8 → 15.2; the coast wall did not improve (35.8 → 36.8: the painting's wall is in shade,
  ours is sunlit cream).
- **Dusk, night and rain keep their look:** country and avenue windows light one by one at dusk.
- **If the paintings can't be loaded** (missing or truncated; the main agent tested both), the houses keep their
  procedural look.
- **Research:** asset batch 1's elevations (Grok Imagine, anchored on the references); three new gable ends generated
  with Grok, as batch 1's didn't match their fronts; one widened in the pipeline so both floors line up. Built by a
  subagent; verified independently by the main agent.
- How:
  - **Assets:** `assets/houses/` (new): one sheet of 12 cut-out elevations with their lit windows below and an index of
    each house's pieces. 308 KB on desktops (48 px/m), 167 KB on phones and in the X card (32 px/m).
  - **No new texture, material, program or draw:** the tiles become 12 atlas cells added last (`painted.js
    loadHouseAtlas`, `textures.js paintHouses`). The atlas grows from 4096 to 5248 rows on desktops and 4608 on phones
    (+16 MB / +7 MB of GPU memory); a device whose texture limit is 4096 gets the whole atlas scaled down (a little
    blurrier). The other 126 cells are pixel-identical.
  - **Geometry:** `props.js paintedHouse` lays each painting on a box with a gable roof (walls, gables, both slopes, pent
    roof, chimney, soffits); outlines come from the paintings' alpha.
  - **World:** `chunks.js houseGarden` puts trees and bushes round each house; the coast house has its own random
    numbers and the slope's trees keep clear of it. The country's and the coast's layouts are reshuffled.
- Cost: none measurable. Everything ran on the shared box's Vega iGPU (the desktop machine was offline), interleaved
  with live:
  - **Main agent's check, GPU over drives:** desktop country 19.30 vs 19.30 ms, coast 20.16 vs 20.63 (+0.46 over seven
    pairs: one set read +2.03, a re-run −0.71), avenue 20.08 vs 19.99; phone profile country +0.19, coast +0.47,
    avenue −0.63.
  - **The subagent's:** desktop country +1.21 (+0.09 in an earlier set), coast −0.44, avenue −0.10; phone −0.33 /
    +0.22 / +0.35.
  - **World building:** unchanged (country, desktop medians 160.9 / 126.7 vs 127.8 / 175.7 ms per 20 chunks); flat out
    on the phone profile (×4 CPU), no world-build spikes.
  - **Start-up:** about the same (median 2.9 vs 2.7 s on a busy box, one 4.3 s outlier).
  - **Programs:** 60, none compiled through sunset, night, rain or a drive.
  - **Checks:** 0 shader errors in all six zones; the city, mountain and snow starts match live; no console errors at
    any quality; embed starts on tap.

## 2026-10-24 · 06:xx — Restyle 12: the reference art's shopping street, painted shopfronts in unbroken rows
- **The drive starts in the reference art's 商店街.** From the first frame both sides are unbroken rows of two- and
  three-storey shophouses running to the vanishing point. The opening view used to have a signalised crossing 10 m
  ahead of the car (signal arm, 止まれ, sign posts, a curve mirror, a 歩道橋 down the road), an empty lot with a parked
  car, a konbini's glass box and big blank side walls.
  - **Side streets:** a signalised crossing every 600 m, and a narrow alley (路地, 2.8 m, no signals or markings)
    halfway between. They were full crossings every 150 m. The 歩道橋 stands at every other crossing (every 1.2 km),
    and the zebra crossings, stop lines and ◇ marks are painted only at the crossings.
  - **The rows:** 84% shophouses (was 70%), only shophouses for the first 420 m; now and then a modern shop, a block of
    flats, a konbini or a house. No car parks, gaps or offices.
- **Painted shopfronts:** a general store's window of goods, a bookshop's of magazines, a café's of cakes, an entrance
  under an indigo noren with a paper lantern. All timber-framed and warm-lit by day, glowing at night, painted from the
  city painting. They replace cream walls with windows of konbini shelves.
- **Painted upper floors:** cream plaster between timber posts with a timber-framed window of blue sky and white
  curtains, or dark boards with a shoji lattice. Windows still light up one by one at dusk, and plastered side walls
  take the same bays.
- **Tiled canopies (庇) you can see:** the canopy is steeper (33°, was 22°), so its blue-grey tiles show above the board
  from the street. Boards are at most 4.4 m long (they were stretched up to 8.5 m).
- **More of the painting:**
  - awnings in its red, royal blue, purple, magenta and navy;
  - 6 in 10 shophouses plastered (was 4 in 10);
  - a magazine rack in front of each bookshop;
  - darker violet-grey asphalt and a dashed white centre line.
- **Measured against the reference** (CIELAB ΔE of region medians, start frame, noon):
  - sunlit asphalt 11.3 → 1.9;
  - shopfronts left 30.8 → 12.7, right 37.4 → 18.7;
  - the whole frame (16 × 9 grid) 29.6 → 28.2;
  - worse: the far end 4.3 → 14.2 (the painting closes it with pale towers) and the right upper floors 11.7 → 26.0 (a
    big lit sign in the painting).
- **Dusk, night and rain keep their look,** and the street glows at night. **If the paintings can't be loaded**
  (missing or truncated; the main agent tested both), the bays fall back to a procedural warm timber shopfront.
- **Research:** Grok Imagine `image_edit` anchored on crops of city.png, asked for flat head-on elevations of one bay;
  all six came out straight-on at the first try. A denser row of flats behind the shophouses closed the far end but cost
  1.9 ms a frame on desktop, so it was dropped. Built by a subagent; verified independently by the main agent.
- How:
  - **Assets:** `assets/fronts/` (new) is one sheet of 8 tiles plus their emissive row: 225 KB WebP on desktops from
    560 px tall, 68 KB on phones and in the X card.
  - **No new texture, material, program or draw:** the tiles are drawn into 8 new atlas cells, added last, before
    upload (`painted.js loadFrontAtlas`, `textures.js paintFronts` / `Atlas.paintCell`). The other 118 cells are
    pixel-identical (per-cell diff).
  - **World** (`chunks.js` `bigX` / `openX`, `props.js machiya`, `magazineRack`): the street's random layout is
    reshuffled.
  - **Ground shader:** a few operations in the city variants only.
- Cost: the same on desktops; phones pay about a millisecond in the city. Everything ran on the shared box's Vega iGPU
  (the desktop machine was offline), interleaved with live (L S S L L S):
  - **Main agent's check, GPU over 0.78 km city drives:** desktop 18.22 vs 19.06 ms (pairs +1.39 / +1.94 / −0.81);
    phone profile 10.49 vs 11.77 ms (+1.28; every pair higher).
  - **The subagent's, over 0.89 km:** desktop 18.28 vs 17.81 ms (−0.47); phone profile +1.07 ms in one set, +0.10 in
    another.
  - **Draws / triangles at the start:** desktop 116 / 405k against 124 / 460k; phone 116 / 432k against 122 / 390k.
  - **World building:** unchanged (desktop medians 342.5 / 279.5 vs 288.5 / 313.5 ms per 20 city chunks). Flat out on
    the phone profile (×4 CPU), world-build spikes 7 and 5 (worst 22 / 23 ms) against live's 8 and 12 (43 / 33 ms).
  - **Start-up:** +0.1–0.2 s (2.85 vs 2.62 s on a busy box; the subagent: 2.38 vs 2.25 s).
  - **Programs:** 60, none compiled through sunset, night, rain or a drive.
  - **Checks:** 0 shader errors in all six zones; the other zones' starts match live; no console errors at any quality;
    embed starts on tap.

## 2026-10-24 · 04:xx — Restyle 11: the coast road along its sea wall, tetrapods in the surf
- **The sea comes right up to the sea wall, as in the reference art.** The 26 m sand beach between the guardrail and the
  water is gone: the road runs low along a sea wall, about a metre above the water (it was 4–7 m up), and the wall drops
  straight into the sea. Its top is the painting's warm sand-coloured concrete.
- **Tetrapods (消波ブロック) are heaped at the wall's foot all along the coast:** a heap every 12–26 m, 4.5–11 m long, two
  or three rows deep; the first row stands half out of the water, taller than the guardrail, with a few more wedged on
  top. Grey concrete legs with flat ends, darker where the water wets them.
- **The surf breaks against the wall and over the tetrapods.** The waves come in as long crests, one every 6.5 s, at a
  slant, so each one breaks along the wall:
  - over the last ~30 m they break white: a bright line along the crest with lace trailing out to sea behind it, along
    stretches of the wall that change from wave to wave;
  - foam boils round the tetrapod heaps and surges along the wall as each wave hits it;
  - spray bursts up over the heaps as the wave reaches them, harder for some waves than others, and falls back.
- **The sea is the reference art's deep, saturated blue,** painted in flat tones: navy troughs and lighter faces on the
  waves along the shore, white caps further out, paling to a light azure at the painted far shore (the white haze strip
  under the far shore is gone).
- **The land side:** big round broadleaf trees on the green slope (it was mostly pines), and low round bushes in white
  flower along the verge.
- **Measured against the reference** (CIELAB ΔE of the median water colour in strips below the horizon, left third of
  the frame, s = 900 and 1100): far sea 23.4 → 2.1–2.4, mid 16.8–17.6 → 3.0–3.3, near the wall 13.0–14.2 → 7.3–7.7.
  Foam covers 10–20% of the near strip through a wave cycle (the painting: 9%).
- **Dusk, night and rain keep their look.** The painted sea is a bright-day look, as the painted horizon's; at golden
  hour, sunset, night and under grey skies the sea mirrors the sky as before. The foam and spray are lit like any white
  surface: pink-orange at sunset, dim blue by moonlight (they don't glow), grey in rain.
- **Zone ends:** the neighbouring zone's land holds on through the first half of a transition instead of sinking into
  the sea, so the cherry avenue's trees and the country's houses don't stand in the water.
- **Also:** the water's materials (the coast's strip and spray, the rivers) are warmed up at load on a mesh without
  normals, as they are drawn: three compiles a different program for a mesh without normals, and on live the coast
  start compiled one program more than the city start (the old foam strip's).
- **Research:** shoreline foam as in toon-water shaders (Roystan's: noise thresholded by how much foam there is, the
  depth difference replaced by the distance from the wall, which the geometry knows) and shore waves as a phase on that
  distance; the spray as stylised-VFX lace with stepped alpha erosion. Built by a subagent; verified independently by
  the main agent.
- How:
  - **Terrain** (`path.js`): the coast's road base 5.2 → 1.05 m, hills 1.6 → 0.25; on the sea side the shoulder and the
    wall's top, then its foot 2.2 m under the water and the sea floor shelving to −7.4 m. In a transition the sea side's
    blend is eased. On the coast the ground's edge tucks 15 cm under the road's: the low road left a slit at the 6 cm
    step, through which the bright sea showed as a blue line in side shots.
  - **Tetrapods** (`props.js`): one template per shade and tier (8 sides a leg on desktops, 6 on phones), stamped, with
    flat end faces (they have their own legs: GB.rod's sides face inwards). Heaps, tetrapods, spray and bushes each draw
    their own random numbers, and the chunk's shared ones are drawn as before, so every other zone's layout is
    unchanged.
  - **The water along the wall** (`sea.js shoreMaterial`): a strip out to 38 m, built with each chunk, that knows its
    distance from the wall and from the heaps (rows every 6 m and where a heap's foam starts and ends: big triangles,
    as small ones shade their edges twice). It is drawn opaque just before the sea plane, which the depth test then
    skips under it: it paints the open sea's own colour (`seaColour`, shared with the plane) with the waves and foam on
    it, so it meets the open sea seamlessly. The foam's lace is read only where there is foam; phones read one lace
    noise instead of two.
  - **The spray** (`surf.js`, new): camera-facing cards whose flight is worked out in the vertex shader from the time and
    the waves' phase: no CPU work and no buffer updates. One mesh per chunk, hidden with the other small details beyond
    380 m; 8 puffs per 7 m of heap on desktops, 4 on phones; they shrink and thin out right by the camera.
  - **The painted sea:** the painting's water tones, ungraded on the CPU each frame (`painted.js ungradeRGB`, the exact
    inverse of the grade, as the painted clouds run on the GPU), written straight into the uniforms (no allocation). It
    is a uniform branch: on a bright day the old model's noise is skipped.
  - **The bushes:** a new cell in the foliage atlas's free slot (beside the twigs), painted at load with its own random
    numbers; the other cells are unchanged.
  - **Assets:** none added or changed.
- Cost: none measurable on the GPU; coast chunks take more CPU to build, without worse spikes. The desktop machine was
  offline, so everything ran on the shared box's Vega iGPU, always interleaved with live (L S S L L S):
  - **Main agent's check, GPU over 1 km coast drives:** desktop 21.17 vs 19.67 ms (−1.5); phone profile 10.04 vs 9.88
    ms (−0.15; every pair equal or lower).
  - **The subagent's check, over 1.15 km:** desktop 20.34 vs 20.07 ms (−0.27); phone profile 9.92 vs 10.41 ms (+0.50).
    The two runs disagree on phones; to re-measure on the desktop GPU when it is back.
  - **The same frame with and without the water strip and the spray** (parked at s = 1100, subagent): desktop +1.0 ms
    (an A/A control reads ±0.5 on this GPU); phone profile +0.02 (A/A ±0.14). The painted sea against the old one:
    −0.35 ± 0.5 (no cost).
  - **World building:** coast chunks take ~30% more CPU (desktop medians 118.6 / 138.0 vs 105.4 / 84.6 ms per 20
    chunks): tetrapods, the strip's rows, broadleaf trees and bushes. Flat out on the phone profile (×4 CPU, 2 km), the
    world-build spikes are no worse: 4 and 1 (worst 18 / 22 ms) against live's 1 and 4 (17 / 31 ms).
  - **Draw calls / triangles at s = 1100:** 133 / 183k against 120 / 161k (desktop); 133 / 176k against 120 / 161k
    (phone).
  - **Start-up:** the same (2.54 vs 2.51 s on a busy box).
  - **Programs:** 60 everywhere (live: 59 at the city start, 60 on the coast), none compiled through sunset, night, rain
    or a drive into the coast or across a river.
  - **Checks:** 0 shader errors in all six zones; the other zones' starts match live; no console errors at q = low /
    medium / high / ultra; embed mode starts on tap. The foliage atlas: only the new cell differs beyond the painter's
    own run-to-run noise.

## 2026-10-24 · 02:xx — Restyle 10: a painted meadow over the country fields
- **The fields are a painted meadow, as in the reference art.** The rice paddies beyond the verge (rows of seedlings,
  flooded plots mirroring a grey sky, ridges between plots) gave way to one painted meadow out to the far hills:
  - painted grass tufts and strokes up close, and fine painted streaks in the distance;
  - a light lime in the sun, with lighter, yellower fields and deeper green ones in bands towards the horizon, and broad
    sunlit patches; beside the road one even meadow, as in the painting;
  - no water anywhere (the painting has none).
- **The blades of grass beside the road take the meadow's colours,** a little warmer and darker, so the near field melts
  into the painted one.
- **Measured against the reference** (CIELAB ΔE of the median grass colour over a whole strip of the frame, at s = 300,
  600 and 900): far fields 10.2 → 2.7 (phone 10.5 → 3.8); near field 4.5 → 3.7.
- **Dusk, night and rain keep their look.** The lime is a bright-day look; at sunset, at night and under grey skies the
  meadow takes the paddies' old, deeper green.
- **If the texture can't be loaded** (missing, broken or truncated, or its index missing), the countryside keeps its
  paddies. The main agent tested this with the files removed.
- **Research:** a rectified patch of the painting (a radial blur, too little clean field), new Grok meadows (they came
  out in perspective) and a different offset in each plot (seams from above) were tried and dropped. Quilez's
  anti-tiling is the next step if the repeat ever shows from the crane camera. Built by a subagent; verified
  independently by the main agent.
- How:
  - **The texture:** asset batch 1's meadow (Grok Imagine, anchored on country.png).
    - Sizes: 1024² WebP (195 KB) where the frame is at least 900 px tall; 512² (71 KB) on phones, in the X card and in
      smaller windows.
    - Each tile covers 12 m across the road and 21 m along it.
    - It downloads with the other painted assets. Mipmaps; 16× anisotropic filtering on desktops, 4× on phones.
  - **The ground:** one texture read in the country's ground variants only (a new define, set once the texture is in),
    in place of the paddies' five noise reads and the water's reflection. Plot tones (a hash) and sunlit patches (one
    noise read) sit on top, and the plots' long edges are smoothed.
  - **Programs:** none added (59), and none compiled through sunset, night, rain or a drive.
- Cost: none measurable. Main agent's check on the desktop machine (GTX 1660 Super), interleaved with live:
  - **GPU over 0.93 km country drives:** desktop 3.08 vs 3.10 ms, phone profile 4.15 vs 4.17 ms.
  - **The subagent's same-frame flip:** −0.06 / −0.10 ms at 1080p (an A/A control reads ±0.04); phone profile +0.14 /
    −0.04 ms.
  - **Start-up:** the same (~1.08 vs ~1.07 s).
  - **Memory:** +5.6 MB of GPU memory on desktops, +1.4 MB on phones.
  - **Checks:** 0 shader errors in all six zones; every zone other than the country is unchanged; no console errors;
    embed mode starts on tap.

## 2026-10-24 · 01:xx — Restyle 9: a tunnel of painted cherry blossom over a wet road
- **The cherry trees have the sakura painting's crowns.** The speckled pink cards at random angles, purple in the
  shade, gave way to big old cherry trees:
  - a thick dark trunk forking low into three or four limbs that rise in a wide V, with branches into the crown;
  - a broad crown of painted blossom clusters: bunches of five-petal flowers, each a flat painted shape in its own pink
    with a deeper eye, dark twigs where the bunches part, and single flowers at the crown's edge;
  - lit by the game's sun: nearly white pink where the flowers face the light, a glowing rose in the shade (thin
    petals let the light through).
- **The avenue is a tunnel of blossom.** Its trees face the road and lean a little away from it. Their crowns close
  into a pink tunnel down the road, with a slot of sky and cumulus over the middle near the car.
- **The road under the trees is wet**, in any weather, as in the painting: a dark blue-grey that mirrors the pink
  crowns and the sky (more toward the distance), with the car's tail lamps glowing red on it. It comes and goes with
  the avenue. In rain the rain's own wet look takes over, and the two don't add up.
- **Black lantern lamps and stone lanterns.** Slim black posts carry a square black lantern of four warm cream panes
  under a pyramid roof, lit at night (also at river bridges and station platforms). The stone lanterns (石灯籠) are
  square, with a pyramid roof and a knob on top.
- **Petals and flowers.** Fallen petals lie on the road (gathered at the kerb), on the pavements and under the trees.
  The pink blotches on the lawns are gone, and the lawns are the painting's lighter, warmer green. Low flower beds
  stand between the trees. The falling petals no longer glow at night.
- **Measured against the reference** (ΔE at s=600):
  - blossom shade / mid / lit: 19.2 / 17.7 / 8.5 → 6.9 / 11.3 / 6.0;
  - the lawn in the sun: 14.2 → 8.2;
  - wet asphalt in the sun: 22.7 → 13.1;
  - mean of 7 patches: 14.4 → 9.0.
- **Dusk, night and rain keep their look.** The rose shade is a bright-day look. At golden hour and sunset the crowns
  are a warm pink-magenta, at night a dark violet with the lamps lit and mirrored in the road, and in rain a soft mauve.
- **If the atlas can't be loaded** (missing, broken or truncated), the trees keep their card crowns. Tested with each.
- Research: R1's blossom prototype, ported onto the broadleaf crowns, with a new flower painter (R1's clusters read as
  cotton balls). Built by a subagent; verified independently by the main agent.
- **Caught in verification:** the first version left the new petal code out of every ground shader variant except the
  sakura one, so the ground failed to compile, and vanished, in all the other zones. This build doesn't render shader
  errors without `?debug`, so the usual checks passed. Caught by the cross-zone screenshots and fixed before shipping.
  Every zone is now checked for shader errors (`sherr.mjs`) and screenshotted.
- How:
  - **The atlas** gains a row of 4 blossom clusters (`~/cdtest/gt/bake`, `paintBlossom`); the leaf cells are
    byte-identical.
    - Sizes: 1024×512 (514 KB) on desktops, from 560 px tall (was 900); 512×256 (162 KB) on phones and in the X card.
    - Files: `assets/trees/crowns.*` replace `assets/trees/trees.*`.
  - **One material** with the leaves' code: the albedo byte is a key into the painting's pinks, with a softer wrapped
    light ramp and its own shade tint. One more program (59 at the city and sakura starts), compiled at load; the
    shadow pass shares the leaves'. The blossom casts shadows but doesn't receive them (under 1% of colour, for
    ~0.4 ms).
  - **Trees:** 23–26 hexagonal clusters a tree (2 core clusters drawn first), instead of ~46 square cards.
  - **The wet road** reuses the rain's wet-road code and ⅛-size reflection copy, on the road only, weighted by the
    zone. The rest of the avenue skips it when it isn't raining.
  - **Petals:** a hashed scatter in the sakura ground shader (sakura variants only).
  - **Tail-lamp reflections:** two additive quads behind the car, using the light pools' program.
- Cost: measured by the main agent on the desktop machine (GTX 1660 Super, quiet), interleaved with live:
  - **GPU averaged over 0.9 km drives:**

    | | Live | Staging | Difference |
    |---|---|---|---|
    | Sakura, desktop | 3.19 ms | 2.97 ms | −7% |
    | Sakura, phone profile | 4.09 ms | 4.25 ms | +0.16 ms |
    | Country, desktop | 3.17 ms | 3.17 ms | 0 |
    | Country, phone profile | 4.03 ms | 4.13 ms | within noise |

  - **On the shared box's Vega iGPU** (the subagent's runs): avenue drives −3.8 ms desktop and −1.5 ms phone; the old
    card crowns cost ~6.9 ms there.
  - **World building:** chunk generation is unchanged (50–53 ms per 20 chunks for both). Flat out on the phone profile
    (×4), there were no spikes on either build.
  - **Start-up:** 1.12 vs 1.02 s (the larger atlas is decoded in JS).
  - **Checks:**
    - 0 shader errors in all six zones;
    - 59 programs at every quality level, none compiled through sunset, night, rain or a drive;
    - no console errors, and embed mode starts on tap.

## 2026-10-23 · 20:xx — Restyle 8: round Ghibli trees of painted leaf clumps
- **The broadleaf trees have the reference art's round, clumpy crowns.** The old crowns were flat speckled cards at
  random angles, olive and lacy. Each crown is now a round mass of small leaf clumps, as the coast and country paintings
  draw them:
  - sunlit yellow-green tops on every clump and a deep teal shade under and between them, lit by the game's own sun, so
    light and shade turn with the hour and the road;
  - a few big lobes with deep shade, never sky, showing through the gaps;
  - a stout trunk forking into limbs that reach up into the crown;
  - the crowns still sway in the breeze and glow at the rim when a low sun is behind them.
- **Measured against the reference tree** (coast.png): the crowns' shade, middle and sunlit tones are now ΔE 10.8 from
  the painting on average (lit tops 5.9), against 19.4 for the old crowns.
- **Dusk, night and rain keep their look.** The teal shade is a bright-day look: at sunset a crown's shaded side is a
  dark olive in the warm light, at night a dark blue-green mass, in rain a deep green.
- These are the trees round the country houses, along the rivers and on the far fields. Sakura (the next step), pines,
  maples, ginkgo and cedars are unchanged. Few broadleaf trees stand right by the road yet; placing them as the
  references do is a later step.
- **If the tree atlas can't be loaded** (missing, broken or truncated), the trees keep their old crowns. The main agent
  tested this with the files removed.
- Research: R1's painted-cluster prototype, ported onto current main. Each cluster is now a rosette of 11 small clumps
  instead of one dome, for the paintings' clump scale. Built by a subagent; verified independently by the main agent.
- How:
  - **Clusters:** camera-facing cards whose painted texels pack the leaves' normal, albedo and coverage, so one texture
    read lights every clump with the real sun. Shade comes from the sky alone through a teal tint. A sun-facing twin in
    the shadow pass casts the crown's lobed shadow.
  - **Lighter for phones and everyone:** octagonal cards fitted round the paint (36% less area than squares), and one
    big core cluster drawn first in each tree, which hides the clusters behind it.
  - **The atlas:** baked offline (painting it at load took 3–9 s) into a PNG of 4 clusters: 1024×256 (263 KB) where
    the frame is at least 900 px tall, 512×128 (78 KB) on phones, in the X card and in smaller windows. It is decoded
    to raw bytes in JS (it is packed data, not colour), and its mips keep each cluster's coverage.
  - **Programs:** two more (58; 59 on the coast), compiled at load.
- Cost: small. Main agent's independent check, interleaved with live (L S S L L S) on a box loaded by other sessions
  (load 9–29):
  - **GPU averaged over 0.9 km country drives:** desktop 22.09 vs 21.87 ms (+0.22); phone 10.77 vs 10.67 (+0.10, within
    noise). The subagent's same-page flip while driving: desktop −0.28 ms, phone −0.19 / −0.53.
  - **World building:** about +10–17% CPU on the phone profile (×4 throttle 671–817 vs 621–648 ms/km; desktop the same
    as live). Worst steps and spikes are unchanged: flat out on the phone profile, 0 and 3 world-build spikes against
    live's 7 and 0, worst 13–27 ms against 13–33. The next trim, if needed, is indexed octagons (8 vertices a card
    instead of 18).
  - **Start-up:** the same as live (2.6–3.8 s vs 2.8–3.0 s).
  - **Checks:** 58 programs at every quality level (56 on live), none compiled through sunset, night, rain or a drive.
    No console errors. Embed mode starts on tap.

## 2026-10-23 · 17:xx — Restyle 7: a painted horizon in every zone
- **The far horizon is painted, like the reference art's.** The three procedural mountain rings (flat, pale silhouettes
  2.3–4.3 km out) gave way to a painted 360° horizon in each zone:
  - **the countryside:** layered hazy blue ranges, green hills and dark conifer forest at their feet, a few tiny
    farmhouses and round trees on the far fields;
  - **the coast:** blue-green mountains and capes across the bay, wooded islands and rocky islets off the far shore;
  - **the cherry-blossom avenue:** low rounded green hills with pink blossom at their foot and tiny navy-roofed villages
    (it shows between the trees);
  - **the mountain pass:** ridge after ridge of autumn forest fading to blue, seen down the valley;
  - **snow country:** white peaks over snow-dusted cedar forest.
  The shopping street keeps its rings: the reference shows no hills at the end of the street.
- **Its colours are the reference art's.** Measured just above the horizon against the reference images (CIELAB ΔE of
  the median colour):
  - countryside: the far ranges 14.2 → 4.7 (now (135,189,231) against the reference's (134,197,234); live was a grey
    (158,191,205)), the forested hills 10.3 → 9.1, the green hills 28.6 → 14.7;
  - coast: the mountains across the bay 13.8 → 3.4, their wooded slopes 26.5 → 11.6.
- **The cumulus rise from behind the mountains**, as in the references: the band stands 2.5 km out, in front of the
  towers' feet (4.3–5 km).
- **The countryside's far hills are low now.** The 14–36 m hills 135–215 m from the road stood in front of the far
  ranges wherever the road ran straight, a green wall on both sides. They are a low wooded rise (3–7 m) with the same
  cedars, so the painted mountains read across the whole horizon, as in the reference. Where the road climbs into the
  mountain pass, its real 3D slopes still rise ahead.
- **Every time of day and weather.** On a bright day the band is the painting itself (the inverse grade, as for the
  clouds). Otherwise it is relit with the light of the hour against the light at noon: warm at golden hour, violet at
  sunset, a dark navy silhouette at night, grey and hazy under cloud, almost gone in rain. Below the horizon it takes
  the same haze the 3D world's fog puts on the ground there, so its foot melts into the world's far edge, and from the
  high crane shot the gap beyond the world's edge reads as far fields.
- **Zones cross-fade** as the next zone comes into view (200 m ahead of the car). With MSAA (desktop) the two skylines
  blend smoothly; on phones the switch passes in a light haze.
- **The band never repeats in one view:** each zone's loop is four (or three) paintings joined end to end, 120° long.
  It is fixed in the world, so it stays put while the road turns.
- **If the band can't be loaded** (missing, broken or truncated, or its index missing), the game keeps the mountain
  rings. Tested with each.
- **Assets and research:**
  - 16 new panoramas generated with Grok Imagine, anchored on crops of the reference art (country.png and coast.png),
    and 4 from asset batch 1. They were keyed, ordered and mirrored so neighbouring edges match, and joined with LaMa
    over every seam (including the wrap).
  - Their colours were matched to the references: the paintings' far ranges were a greyer, darker blue (value 0.71
    against 0.93) and their hills a duller green (saturation 0.31 against 0.58).
  - Pipeline: `~/cdtest/hb/scripts/band.py` (`strip`, `pack`).
  - Built by a subagent; verified independently by the main agent.
- How:
  - **Drawing:** new `makePaintedBand` in `painted.js`: one ring of 192 segments around the camera, one draw call,
    trimmed every frame to the rows that can show. It is drawn opaque after the 3D world and the sea and before the sky,
    so the sky dome and the cumulus skip every pixel it covers. Its ridges take their coverage from the painting's
    alpha with MSAA (alpha-to-coverage) and are alpha-tested without it.
  - **The atlas:** one WebP with a row per zone: 3840×1512 (766 KB, 32 px/°) where the frame is at least 900 px tall,
    1920×780 (251 KB, 16 px/°) on phones, in the X card and in smaller windows. It downloads alongside the clouds.
  - **Programs:** one more (56; 57 on the coast), compiled at load. None compiled through sunset, night, rain or snow.
  - **Memory:** +31 MB of GPU memory on desktop, +8 MB on phones (with mipmaps).
  - **Terrain:** one constant in `path.js` (the countryside's far hills). No random numbers changed, so the world's
    layout is the same.
- Cost: none measurable. Main agent's independent check, interleaved with live (L S S L L S), with corrupt timer
  samples dropped. The box was still heavily loaded by other sessions (load 23–33).
  - **GPU averaged over 0.9 km drives:**
    - desktop country 22.19 vs 22.43 ms (−0.24: the band hides sky the dome no longer shades);
    - desktop coast 24.38 vs 24.29;
    - phone country 11.10 vs 11.82.
  - **The subagent's same-page flips, band against rings:** desktop +0.08 / +0.57 ms (country) and +0.51 (coast);
    phone +0.14 / +0.16 and +0.30.
  - **World building:** direct chunk generation is unchanged (medians ~400 ms per 20 chunks on both, spread by load).
    The flat-out buildtime runs read +16%, but tracked the load (their frame counts were lower).
  - **Start-up:** the same as live (8.1–8.9 s vs 8.3–9.0 s, all inflated by the load).
  - **Checks:**
    - 56 programs at every quality level (55 on live), 57 on the coast (56);
    - none compiled through sunset, night, rain or driving;
    - no console errors, and embed mode starts on tap;
    - with the band's files removed, the game falls back to the mountain rings (55 programs, no errors).

## 2026-10-23 · 14:xx — Restyle 6: painted clouds from the reference art
- **The cumulus are painted, like the reference art's.** The procedural towers (smooth, shaded blobs) gave way to
  painted cumulus with the paintings' cauliflower lobes and brushwork: white in the sun, with light, saturated blue
  shade.
  - **22 different clouds:** 7 are cut from the references themselves (two country towers, two coast towers, a far
    coast cloud, the sakura tower and a city cloud); 15 are generated in their style with Grok Imagine (11 from asset
    batch 1 and 4 made for this step).
  - **On a clear day they show the paintings' own colours.** Their shader runs the exact inverse of the frame's grade.
- **The sky is composed like the references'.**
  - Giant towers rise from the horizon past the top of the frame, two or three in any view.
  - Cumulus sit between and in front of their feet, a low bank runs along the horizon, and smaller cumulus float
    higher up, filling the taller sky of a portrait phone.
  - The drive opens with two tall towers flanking the road (country, coast, mountains, snow), or one standing over the
    road where the sky is a narrow slot (the sakura avenue, the shopping street).
- **The clouds stay put while the road turns,** and the same cloud never appears twice within 145°, so you never see
  it twice or next to its own mirror image.
- **Each cloud is lit from the sun's side.** It is mirrored to face the sun, but only while it is out of view, so
  nothing flips in front of you.
- **Dawn, golden hour, sunset, night and grey skies keep their colours.**
  - The clouds take the time-of-day palette as before: peach and violet at sunset, navy at night, grey under cloud.
  - They keep the painted brushwork, with a silver lining facing a low sun.
  - In rain they still melt into the grey deck.
- **If the cloud atlas can't be loaded** (missing, broken or truncated), the game keeps its procedural clouds. The main
  agent tested this with the files removed.
- **Research and assets:**
  - R2's painted-sprite prototype and its inverse grade were ported.
  - The reference clouds were re-cut with SAM mattes. Its interior is opaque, which fixes the blue-shaded undersides
    the colour key lost. LaMa removed the poles and wires in front of them and completed tops cut off by the frame.
  - The generated clouds were remapped to the references' cloud palette, keeping their brushwork.
  - Built by a subagent; verified independently by the main agent.
- How:
  - **Drawing:** new `painted.js`. One instanced draw of 33 camera-facing billboards in one blended pass.
  - **The atlas:** WebP, 4096×2048 (576 KB) where the frame is at least 900 px tall; 2048×1024 (279 KB) on phones, in
    the X card and in smaller windows. It downloads while the town is painted.
  - **Shading:** on a bright day the shader runs the inverse grade. Elsewhere it maps the painted luminance between the
    time-of-day shade and lit colours, and takes a rim from a coarse mip of the alpha.
  - **Programs:** one shader program replaces the procedural cloud program (55, as on live), compiled at load. The
    procedural cloud painter no longer runs at load.
  - **Memory:** +21 MB of GPU memory on desktop, −11 MB on phones.
- Cost: moderate, and it follows the pixel count. The painted clouds cover about twice as much sky as the old ones,
  all alpha-blended. Main agent's independent check, interleaved with live:
  - **GPU averaged over 0.9 km country drives:**
    - desktop 21.5 vs 20.7 ms (+0.8);
    - phone 10.1 vs 9.85 ms (+0.25).
    One run on each side returned a corrupt timer reading and was dropped.
  - **The subagent's figures:** 1920×1080 desktop 38.6 vs 37.3 ms (+1.3). In-page toggle in the cloudiest view:
    desktop +0.75/+0.90 ms and phone +0.25/+0.30.
  - **Start-up:** median 2.45 vs 2.31 s.
  - **Checks:** 55 programs at every quality level, none compiled through sunset, night, rain or snow. No console
    errors. Embed mode starts on tap.
  - **A cheaper path if needed later:** draw the clouds into a single-sample layer, or tighten the sprite outlines
    (~24% fewer cloud pixels).

## 2026-10-23 · 10:xx — Restyle 5: the country road between banks of wildflowers, through a meadow of real grass
- **Banks of tall grass and wildflowers line the country road (土手の草むら), as in the reference art.** The verges were a
  strip of grey gravel and a ditch with a scatter of small tufts. Now a continuous, knee-high bank of long grass runs
  along both edges from the white line outwards:
  - each clump is hundreds of curved blades, deep in their own shade at the root and arching out with sunlit
    yellow-green tips;
  - white daisies (姫女苑) and yellow flowers stand on stems among them;
  - the ground beneath is dark grass right up to the asphalt, and the verge slopes gently down to the fields (the gravel
    and the ditch are gone).
- **The fields beside the road are a meadow of real blades of grass (草原).**
  - A blade stands every 15 cm out to 18 m ahead (18 cm and 15 m on phones), and every other one on to 38 m, dotted with
    white clover and yellow buttercups.
  - The blades lean, sway in the breeze and take the colour of the plot they stand in, dark at the root and lit at the
    tip, so they melt into the painted field beyond.
  - The two plots beside the road are one even, vivid green with no flooded paddies, as in the reference. The fields
    beyond keep their paddies, now with painted blade strokes.
- Golden hour, sunset, night and rain keep their look. The banks and the meadow grow only in the countryside, and thin
  out towards level crossings, rivers and the next zone instead of stopping at a line.
- **Research** (the user widened this step to new rendering techniques): Ghost of Tsushima's GDC talk on procedural
  grass, SimonDev's three.js grass, the hexaquo grass series, and BotW-style grass in three.js.
  - The meadow is real geometry. It is opaque, so it has none of the alpha-test overdraw that made the reeds costly.
  - The banks are painted clump cards: one card carries a whole painted clump and its flowers, which blades could only
    match with many times the vertices.
  - This step was built by a subagent and verified independently by the main agent.
- How:
  - **The meadow** (new `grass.js`, `grassMaterial`): each blade is built in the vertex shader from its instance number.
    Its cell on a grid fixed to the road gives it a hashed place, height, lean and colour, and 48 road samples put it in
    the world. Five instanced draws, each sized every frame to what the camera sees. One more shader program (compiled
    at load), no shadow-map code, 0.03 ms of CPU a frame, no per-frame garbage.
  - **The banks:** two new foliage-atlas cells in a new last row (1024×2560 → 1024×3072, +2.7 MB GPU memory), painted
    at load with their own random numbers. One five-sided card per clump, every 0.9 m (1.25 m on phones), placed with
    their own random numbers so the rest of the world's layout is unchanged.
  - **The ground:** a dark grass verge instead of gravel and a ditch, and the near plots evened out and dry. One more
    noise read for the field's strokes.
  - **Colour:** over 15 verge and field patches, the colour difference from the reference (ΔE) fell from 16.2 to 11.3
    at one spot and from 43.5 to 12.7 at another. The sunlit-grass patch went from 17.2 to 5.6.
- Cost: none measurable. Main agent's independent check, interleaved with live:
  - **GPU averaged over 0.9 km country drives:**
    - desktop 20.2 vs 20.45 ms (one staging run's timer query came back corrupt and was dropped);
    - phone 10.04 vs 9.99 ms.
  - **Parked A/B at s=900:** −0.08 ms (A/A +0.51).
  - **Same frame drawn with and without** (the subagent's figures): meadow +0.13–0.41 ms desktop and +0.15–0.30 phone;
    banks +0.23/+0.30 and +0.14/+0.21; the dry near plots save 0.08–0.19.
  - **World building:**
    - desktop 589 vs 580 ms/km;
    - phone ×4 swung with the machine's load (load average 8–12), with worst steps of 14–38 ms vs 13–32 on live;
    - timed directly, chunk generation was unchanged (107–128 vs 104–122 ms per 20 chunks).
  - **Programs:** 55 at every quality level (54 on live; the extra one is the meadow's, compiled at load). None
    compiled through sunset, night, rain or a drive. No console errors. Embed mode starts on tap.
  - **The foliage atlas:** the existing cells are unchanged apart from sub-pixel anti-aliasing noise (619 of 2.6 M
    pixels). The painter isn't bit-identical even between two runs of the same code.

## 2026-10-23 · 03:xx — Restyle 4: the colours of the reference art
- **Daytime frames now have the reference paintings' palette.** A sampler measures the same patches in the four
  reference images and in our frames at noon:
  - the sky overhead and at the horizon;
  - cloud light and shade;
  - grass;
  - sunlit asphalt and the car's shadow;
  - the car.
  The levers were tuned until the two matched. Over 28 patches the average colour difference from the references
  (CIELAB ΔE) fell from 10.3 to 5.3. Live was pale, grey and washed out next to them. Now:
  - **the sky is a deep azure overhead and pales to near-white at the horizon.** The sky overhead measures
    (13,108,222) against the references' (0–2, 92–114, 206–233); live was a dull (30–47, 88–94, 198). It is a
    painted gradient that turns deep from ~20° up, with red coming in last, so the band above the horizon is a clean
    light blue instead of grey;
  - **the cumulus are white in the sun** (238–242, against 239–249; live 202–220), with light-blue shading;
  - **shadows are a deep, saturated blue**, as in every reference. The asphalt in the car's shadow measures (12,39,85)
    / (6,33,79) / (16,41,83) against (10,47,88) / (7,43,89) / (24,45,86); live was a grey-blue (30,57,94) / (17,46,85)
    / (34,59,91). The shaded pavement in the city measures (59,79,120) against (61,74,118). The skylight is a
    saturated blue, and it is all the light a shadow gets;
  - **the sun is a warm cream**, and with the blue skylight it lights a white wall white; the snow is a clean white;
  - **greens are vivid**: fields, lawns and verges are greener and less yellow-grey, and sun-dried patches are rarer.
    Sunlit grass in the country measures (118,181,47) against (122,182,45);
  - **the asphalt is the references' warm mid-grey** (130,125,130 against 137,130,131; live was a cooler, lighter
    138–149), and **pavements are pale beige stone**;
  - **the sea is a deeper blue by day**: it mirrors more of the blue sky overhead and less of the now pale horizon;
  - **the grade is punchier**: saturation 1.22 (was 1.1), an indigo lift in the shadows, and only a light vignette by
    day (0.12, was 0.55; the paintings have none).
- **Sunset, night, cloudy and rain keep their look; sunrise and golden hour take a little of the new one.** Every
  change to the look is weighted by a new `TOD.bright`: 1 on a clear day, 0 at sunset, at night and under grey skies
  (0.4 at golden hour). It drives the sky gradient, the exposure, the clouds' brightness, the sea, the shadow lift and
  the vignette. The palette changed only in the three clear-day keys (t = 0.30, 0.45, 0.62). The extra saturation
  is taken back under grey skies, so in rain the grade is exactly the old one.
- How:
  - **Exposure.** On a bright day the frame is exposed 25% higher, and the sun and sky lights are turned down by the
    same factor. Lit surfaces keep their level, while the sky, the clouds, the haze and the sea (painted, not lit)
    reach the near-white tones the tone curve used to cap at ~240.
  - **Constants and uniforms only:** the clear-day keys of the time-of-day palette (sky.js), the ground's albedo
    constants (materials.js) and the grade (post.js; the shadow tint became a uniform). The sky shader's gradient
    gained a few instructions and the sea shader a few mixes. There are no new programs, textures or draws, and
    nothing in the world's layout changed.
- Cost: none measurable. The main agent re-measured independently on a quieter machine:
  - **GPU averaged over drives** (interleaved runs):
    - desktop country: 20.16 vs live 20.42 ms (−0.26);
    - desktop city: 20.40 vs 20.03 (+0.37);
    - phone country: 9.75 vs 9.77 (−0.02);
    - phone city: 12.38 vs 12.55 (−0.17).
  - **Interleaved A/B in the city:** desktop +0.17 ms (A/A −0.39). Phone per-load rounds swing both ways (±3.3 ms,
    the profile's usual bimodal loads), and the drive average above settles it.
  - The work was done by a subagent; its own measurements, taken on a busier machine, follow.
  - **GPU, phone:**
    - over a 1.2 km country drive: 10.03 ms against live's 9.83 / 10.23;
    - in-page, flipping the new look on and off every 3 s (same programs): −0.23 / +0.23 ms, while a do-nothing
      switch read −0.24;
    - interleaved A/B against live: country +0.34 (8 rounds) and +1.54 (6 rounds), city +0.04, while live against
      itself read −0.21 / +1.60.
  - **GPU, desktop:**
    - over a 1.2 km country drive (interleaved ABBA): 21.82 against 21.27 ms (+0.55);
    - interleaved A/B: country −1.50 / city +0.20 / coast −1.11 (A/A −0.50 / −0.23 / −0.77), and in a second run on
      the final build country +0.88 / city +0.28;
    - in-page look flip: country +0.83 / +0.70 over 150 s and −1.75 / +1.61 over 60 s, while the do-nothing switch
      read −0.27 / −1.33 / +0.79; city +0.01.
    The code adds ~6 instructions per sky pixel and a few per sea pixel; nothing else changed but uniform values, so
    no mechanism for a real cost was found.
  - 54 programs at every quality level (55 on the coast, as on live), none compiled through sunset, night and rain.
    No console errors. Embed mode starts on tap. World building is unchanged (no layout or random-number changes),
    and so is the texture atlas.

## 2026-10-23 · 01:xx — Restyle 3: a street of shophouses, timber and plaster
- **The shopping street is shophouses on both sides**, as in the reference art. The grey modern blocks along the
  frontage (pastel-concrete shops, flats, offices) gave way to 町家 shophouses, now 70% of the frontage (was 50%).
  Pastel-concrete shops are down to 5% (from 20%), flats to 6%, offices to 2%. The taller modern blocks still stand in
  the row behind, as in the reference.
- **A second kind of shophouse: cream plaster (漆喰).** About 4 in 10 shophouses are plastered:
  - upper floors of sliding windows with curtains, or pairs of small windows, in warm cream, sand or pale-ochre
    plaster;
  - dark timber corner posts, and a timber beam between the upper floors;
  - plaster side walls with small windows down the side streets, and plaster gables under the same tiled roof;
  - the same tiled canopy, sign board, warm bulbs, lanterns, vertical neon signs and pots as the timber kind, and a
    balcony on half of them.
  The street now alternates dark timber and cream plaster under tiled canopies and roofs, like the reference.
- Small props high up (the bulbs' flexes, lantern caps, balcony flower boxes) no longer cast shadows (no visible
  shadow; it saves shadow-pass work).
- Cost, against live (Restyle 2):
  - **GPU averaged over a 0.9 km city drive** (new measurement, `gpudrive.mjs`: a single spot mostly measures how the
    street's random layout fell there):
    - desktop +0.9 ms (20.2 vs 19.3 ms, three interleaved runs; +1.0 ms in a repeat);
    - phone +0.2 ms (12.4 vs 12.2 ms, within noise).
    The extra layers of canopy, sign board and balcony in front of the facades are the cost; pots and leaf cards are
    not (in-page leaf toggle: 0.22 ms desktop).
  - **GPU at single spots, desktop** (A/A +0.05): +0.11 ms at 500 m, +0.34 ms at 1150 m, +2.2 ms at the start, where
    the reshuffled street puts different buildings in view.
  - **World building** flat out: desktop 468–500 ms/km vs 781–814 for live in the same session; phone ×4 1506–1635 vs
    1382–1687.
  - 54 programs at every quality level, none compiled mid-drive. No console errors. Embed mode starts on tap.

## 2026-10-23 · 01:xx — Restyle 2: the shopping street glows (neon, lanterns, lit shops, timber walls)
- Toward the reference's shopping street, where signs and shops glow even in daylight:
  - **Vertical signs are neon light boxes.** A milky panel lit from inside carries a neon tube bent round its edge
    (pink, violet, cyan, red, green or amber) and the name in strong ink; three in ten are coloured panels with glowing
    white lettering. They glow by day and blaze at night. 9 in 10 shophouses carry one, wider ones sometimes a second,
    and 85% of shop buildings.
  - **Shop interiors are warm by day too.** By day they give off a third of their evening light, so the shopfronts
    glow as in the reference instead of looking switched off.
  - **Paper lanterns (提灯)** glow at the canopy edge: a pair by a noren or café door, now and then one elsewhere, and
    none where an awning hangs.
  - **Shophouse side walls are timber.** Down every side street they were flat brown slabs; now they are weathered
    oiled boards (a new texture cell) with lattice windows on the floors above.
- How: the atlas shader's per-vertex light switch (`aLit`) already had 0 = always on and 24–255 = a home window
  switching on at dusk. Two unused codes now mean "shop, warm by day" (×3 by day) and "neon, bright by day" (×16 by
  day, enough to cross the bloom threshold). It is a vertex-shader branch in the same program, so the program count is
  still 54.
- Also fixed: a per-frame `new THREE.Color` (the street lamps' night colour) is now one constant.
- Atlas check: a per-cell diff against HEAD shows only the 10 sign cells changed; `woodwall` is new. A first try named
  it `wood`, which silently replaced an existing cell — caught by the diff. The vending machines' glow layer differs
  only by sub-pixel anti-aliasing.
- Cost, against live (Restyle 1):
  - **GPU, desktop** (interleaved A/B; A/A control +0.90): city start −1.19 ms, dusk −2.07 ms, at 600 m +1.03 ms (mixed
    signs), at 950 m −0.53 ms. No measurable change; the random layout of the street shifted a little.
  - **GPU, phone** (loads compared sorted pairwise): city start −2.3 ms (378k vs 432k triangles in view: a different
    layout), at 950 m within ±0.8 ms (310k vs 288k triangles: more signs and lanterns).
  - **World building** flat out through the city: 428–449 ms/km vs 459–615; worst step 11–15 ms vs 15–20.
  - 54 programs at every quality level, none compiled mid-drive. No console errors. Embed mode starts on tap.

## 2026-10-23 · 00:xx — Restyle 1: the car, the camera and a shopping street (toward the reference art)
- **New direction (set by the user):** match four painted anime reference images (a shopping street, a sakura avenue,
  a coast road with tetrapods, a countryside road), not "more real low poly". The images are kept locally, out of git.
  This first step does the car (in every frame) and the city (where the drive starts).
- **The car is one smooth body, the reference's kei wagon.** It was two stacked rounded boxes: a step at the waist, box
  edges, a full-width dark glass band at the back and flat red bars for lamps. Now:
  - **one lofted shell.** Every cross-section is a rounded rectangle. The roof drops over a raked windscreen to a short
    bonnet, the cabin leans in above the waist, and both ends round off like a soap bar. It is shaded with the soft
    ramp, so it reads in gradients, not bands;
  - **two-tone:** the white roof and shoulders are painted into the shell, under a thick white roof cap with a small
    overhang;
  - **the back:** a tall rear window framed by body-coloured pillars right up under the roof, with the seats behind it
    and the stop lamp above it. Capsule tail lamps sit in chrome bezels with a brighter LED bar, amber indicators
    below. The plate sits in a recess under a chrome handle, with a body-coloured bumper, a dark lower lip, red
    reflectors and a chrome tailpipe;
  - **glass on the skin:** side windows that follow the leaning flanks, and a windscreen that bends with the roof.
  - Cost: 14.8k triangles (was 9.6k) and 11 draws (was 10). The LED bars cast no shadow and share the lamps' shader.
- **The chase camera frames the car like the reference art:** 6.8 m back and 2.4 m up, looking level, so the horizon
  sits near the middle and half the picture is sky. It was 8.2 m back and 3.1 m up, looking down on the car. A
  `?rig=back,up,ahead,lookY` test hook was added for framing.
- **The city is a shopping street (商店街).** Half the street frontage is now 町家 shophouses:
  - a shop on the ground floor under a deep tiled canopy (庇), with the shop's sign on the canopy's front board;
  - warm bulbs hanging under the canopy, lit by day as on a real shopping street;
  - a fabric awning on half of them;
  - a timber upper floor of lattice windows behind a wooden balcony rail (a new alpha-tested texture cell), with
    flower boxes of pink and wild flowers;
  - a tiled gable roof (the house roof, now a shared helper);
  - vertical signs, and pots of plants along the shopfront.
  - Fewer flats and offices line the street (the taller blocks still stand behind).
- **Shop windows are stocked** (from the last polish pass, shipped with this step):
  - general stores, konbini and cafés showed rows of random coloured rectangles. Now they have gondola shelves under
    fluorescent tubes, with runs of the same product (boxes, bottles, cans, cup noodles, snack bags), price rails and
    shadows. Konbini have a magazine rack along the window, and cafés have pendant lamps, a chalkboard menu and little
    tables;
  - a themed shop (a florist, a bakery…) now shows its theme in every glass bay;
  - the old draws from the shared random stream are replayed first. Checked by a per-cell atlas diff: only the 5
    intended cells changed, and the other 111 are pixel-identical.
- **Cumulus clouds** (also from the last pass): the cloud painter builds a smooth height field of the puffs, then
  lights it like a volume: big masses from the blurred field, lobes shadowing the ones below, light dimming through
  the cloud, darker creases and a darker base. They were piles of separately shaded balls. It paints at load in
  ~200 ms (was ~600 ms); the per-frame shader is unchanged.
- Cost, measured against live:
  - **GPU, desktop** (interleaved A/B, 6 rounds): city +0.94 ms (A/A control +0.35), country −0.58 ms.
  - **GPU, camera alone** (in-page, flipping the framing on the same page): the new framing is *cheaper*, by 1.6 ms on
    the phone and 0.65 ms on desktop, because more of the picture is sky.
  - **GPU, phone city** (6 loads each, sorted pairwise): about +0.9 ms (live 9.1–13.6 ms, new 10.5–14.2 ms); the
    loads swing up and down as before. Triangles in view 345k → 432k, draws 107 → 122. The shophouse canopies and
    signs add pixels in front of the facades.
  - **World building** while driving flat out through the city: cheaper on desktop (440–500 ms/km vs 620–705, worst
    step 18–20 ms vs 42–47), because the shophouses are lighter than the flats they replace. Phone ×4 CPU is within
    noise of live (1566–1743 vs 1241–2072 ms/km).
  - 54 programs at every quality level, none compiled mid-drive. No console errors. Embed mode starts on tap.

## 2026-10-22 · 22:xx — Graphics pass 10: rivers with revetments and reeds
- **The river crossings look like Japanese rivers.** The countryside and cherry-blossom rivers were a straight blue
  channel cut into a flat lawn: grass right down to the water. A strip of bare bank showed just above the waterline
  where the water surface stopped short. Now:
  - the **low-water banks are faced with concrete blocks** (間知ブロック, the diamond-laid blocks of Japanese river
    revetments), grey and mortar-jointed, wet and darker at the waterline with a little moss, under a cast coping;
  - **the water reaches the banks**: the surface now runs out to the waterline, with its foam line moved to match;
  - **reed stands (ヨシ)** grow in clumps along the top of the revetments, swaying in the breeze like the other
    grasses, starting 14 m from the road so they never crowd the chase camera.
- How: one new texture-atlas cell, painted at load with its own random numbers (added last, so no other cell moves),
  laid on 2.4 m strips along both banks for 150 m each side of the road. The reeds use the existing grass tufts. No
  shader or draw-call change; +2% triangles at a river.
- Cost: none measurable once trimmed.
  - The first version had reeds right up to the road and measured ~0.9 ms more than a build without reeds, so they were
    halved and moved out.
  - Per page load at the bridge (8 loads each, chase camera): 21.66 ms new vs 21.76 without reeds vs 22.42 live.
    Bridge eye view: 14.71 vs 14.59.
  - Phone: the fast loads match (8.65–8.79 vs 8.74–8.82 ms); both builds swing between ~8.8 and ~11.5 load to load.
  - Flat out past the rivers on the phone profile with ×4 CPU: world-build spikes 0 / 1 (worst 12–17 ms) against live's
    1 / 0 (15–16 ms).
  - 55 programs at a river, as on live; none compiled mid-drive; every quality level compiles. The bridge joints still
    jolt. Startup 2.5 s; embed mode still starts on tap.

## 2026-10-22 · 21:xx — Graphics pass 9: tunnel portals like the real ones
- **Tunnel portals look like Japanese mountain tunnels.** The mouth of each tunnel (mountain pass and coast) sat in a huge
  flat cream wall reaching all the way up to the top of the ridge, like a paper cut-out. Now the portal is built the way
  real ones are:
  - a **concrete headwall** round the opening, cast in panels, with a coping along its top, rain streaks running down
    from it and grime and moss at its foot;
  - a **projecting arch ring** with a visible thickness (soffit and rim), whose legs run down to the walkways;
  - the tunnel's name plate on the headwall, as before;
  - above and beside the headwall, the steep **hill face held by a concrete lattice frame** (法枠), the same as the
    cutting slopes either side, so the cutting, the portal and the ridge read as one engineered hillside.
- How: geometry with vertex colours, built once with the chunk (per-corner colours give the streak and grime gradients).
  No shader or draw-call change; +1.8% triangles in a tunnel view (114k → 116k).
- Cost: none measurable.
  - Per page load at the portals (5–6 loads each, sequential): coast 21.98 ms median vs live 21.88, mountains 26.55 vs
    26.45.
  - The alternating cross-build A/B was bimodal (±4 ms per round) at these spots, while live against itself read
    −0.22 ± 0.8. Phone +0.10.
  - Flat out through the tunnels on the phone profile with ×4 CPU throttling: world-build spikes 0 / 0 / 2 (worst step
    13–20 ms) against live's 3 / 1 / 8 (22–35 ms).
  - 54 programs, none compiled mid-drive; every quality level compiles. Startup 2.4 s; embed mode still starts on tap.

## 2026-10-22 · 20:xx — Graphics pass 8: winter birches with crowns
- **The snow country's white birches (白樺) have their winter crowns.** They used to be bare white poles with a few
  stick branches, more like telegraph poles than trees. Now each has a crown of fine bare twigs, branching and
  branching again, in the purple-brown of birch twigs in winter. Against the snow and the sky the groves read as trees,
  with the soft haze of a real leafless birch wood. Their white bark with its dark marks is unchanged.
- How: one new cell in the foliage texture (a twig crown painted at load with its own random numbers, so every other
  tree paints exactly as before), drawn on 2–3 alpha-tested cards per birch through the existing leaf material. No
  shader change. The foliage texture grew from 1024×2048 to 1024×2560 (+2.5 MB of GPU memory). Snow chunks now draw a
  leaf mesh, which adds ~1 draw call each.
- Tried and dropped, before this: lighter, thinner twigs (they vanished at a distance under the cut-out alpha) and
  heavier dark ones (they read as brown blobs).
- Cost: none measurable.
  - The twig crowns flipped visible / hidden every 3 s in the same page (all 10 in view, with their shadows): GPU
    desktop +0.07 / +0.02 / −0.23 ms, phone −0.01 / −0.01 / +0.09.
  - GPU against the live build: snow desktop 20.15 → 20.13 ms (A/A −0.11). The phone cross-build read was noise
    (+1.23 over 4 rounds; the in-page phone toggle is the clean number).
  - CPU per frame on the phone profile at ×4 throttling: 67.1 ms live vs 59.7 new (noise at load 22). Draw calls 89 → 98.
  - Flat out through the snow: world-build spikes median 8 against live's 12, nothing missing.
  - 54 programs, none compiled mid-drive; every quality level compiles. Embed mode still starts on tap.

## 2026-10-22 · 19:xx — Graphics pass 7: real guardrails along the coast and the mountain pass
- **ガードレール that look like the real thing.** The guardrails on the coast road and the mountain pass, right beside the
  car in most of those frames, were a single flat white plank on square sticks. Now they're the corrugated steel W-beam
  you see on every Japanese road:
  - two rounded bulges with a valley between them, so the rail catches the light in long bright and dark bands that
    follow the road's curves;
  - round steel posts set behind the beam;
  - a small orange reflector in the valley at every other post.
  The beam still throws its shadow line onto the road.
- How: geometry only, built with the chunks (a four-facet profile, capless six-sided posts). The posts and reflectors
  stay out of the shadow passes, so the rail now costs those passes less than the old one did. +2–2.5% triangles in
  coast and mountain views; no shader or draw-call change.
- Cost: none measurable.
  - GPU against the live build (alternating order, 8 rounds): coast 23.01 → 22.99 ms (+0.24 median, while the live build
    against itself read +0.34), mountains 28.76 → 28.88 (+0.17), phone coast −0.37.
  - 54/55 programs as before, none compiled mid-drive; every quality level compiles. Flat out along the coast and the
    pass, nothing missing. Startup 2.9 s; embed mode still starts on tap.

## 2026-10-22 · 18:xx — Graphics pass 6: the car gets a face
- **The car's front looks like a car.** Head-on, the car was a blank mint-green box with a windscreen: no lights, no
  grille, no bumper. That is exactly what the X player card's film camera shows when the car comes down the road
  toward a roadside camera. Now it has:
  - round headlamps in dark surrounds at the bonnet's corners;
  - a slim black grille between them and amber indicators below;
  - a black front bumper with an air intake and a yellow kei number plate;
  - wipers parked at the foot of the windscreen.
  At night the headlamps glow with the headlights on, so the car coming toward you reads as a car at night, not a dark
  box behind a light beam.
- Tried and dropped: woods on the coast's hillsides. The cheap version read as a dark band of shadowed grass, and the
  mountain pass's crown pattern looked like flat green paving up close. The grassy coastal hills stay as they were.
- How: geometry on the car's existing materials, plus one small emissive headlamp material that reuses the tail lamps'
  shader program. The car is 7,436 → 9,556 triangles and 9 → 10 meshes; the lamps cast no shadow.
- Cost: none measurable.
  - GPU against the live build (alternating order): country noon +0.21 ms, country night −0.03; the live build against
    itself read −0.23 ± 0.8.
  - Phone +0.41 (8 rounds, −1.6 to +1.9), but the phone profile compared with itself read +1.47 right now, so phone
    cross-build numbers were noise this hour.
  - 54 programs, none compiled mid-drive; every quality level compiles. Flat out: 0 world-build spikes against 1 on
    live. Startup 2.7 s; embed mode still starts on tap.

## 2026-10-22 · 17:xx — Graphics pass 5: shops you can tell apart, and proper tiled roofs
- **Shop windows show what each shop sells.** Every glass shopfront used to show the same shelves of coloured dots, so
  the whole street looked like one store repeated. Now some of them are:
  - a **bakery** (パン): wooden shelves of loaves and rolls, a counter of pastries, a 焼きたて sign;
  - a **bookshop** (書店): tall shelves of book spines and a rack of magazines out front;
  - a **florist** (花屋): buckets of cut flowers on tiered stands under trailing plants;
  - a **clothes shop** (洋品店): garments on a rail, folded shirts and a mannequin.
  The signboard above each of them now names what's in the window (a bakery's sign says パン). They light up from inside
  at night like the other shops.
- **House roofs look like tiled roofs.** The village houses' kawara tiles were stretched about three times too wide, and
  the roof was a paper-thin sheet. Now:
  - the tiles are at their real size (~30 cm);
  - the roof has a fascia board along the eaves and dark barge boards up the gables, so its edges have thickness;
  - the overhang has an underside;
  - the two-storey houses' lower eave matches.
- How: painting at load (four new shop cells and two signs in the texture atlas, which still had room: 3,152 of
  4,096 rows used) and a little more geometry per house (+1–2% triangles in view). The new cells use their own random
  numbers, so every other shop, house and sign looks exactly as before. No shader or draw-call change.
- Cost: at most ~0.1 ms.
  - GPU against the live build (alternating order, 8 rounds): sakura +0.11 ms median, city +0.33 on one run. Split
    apart, the shops alone measured +0.04 and the roofs on top of them +0.11; the live build against itself read
    −0.26 ± 0.6. Phone sakura +0.19, inside the noise.
  - Flat out through the city: world-build spikes 0 / 2 / 1 / 6 / 9 against live's 4 / 0 / 2 / 5 / 0, nothing missing.
  - 54 programs, none compiled mid-drive; every quality level compiles. Startup 2.7 s; embed mode still starts on tap.

## 2026-10-22 · 16:xx — Graphics pass 4: a train with wheels
- **The train at the level crossings looks like a real commuter train**, not three floating boxes:
  - **Bogies:** each car rides on two bogies with side frames, axle boxes and two wheelsets each, so you can see wheels
    rolling on the rails as it passes. Before, there were dark blocks under the cars and no wheels at all.
  - **Underfloor equipment:** separate boxes between the bogies, as under real trains, instead of one long block.
  - **Joined cars:** the cars are joined by dark gangway bellows. Before, there was a gap of sky between them.
  - **Roof:** rounded, with a rain gutter along each side. The air-conditioners and the pantograph sit on top.
    Before, it was a flat slab.
- How: geometry only, built once at load, using the train's existing texture and material. Still one mesh and one
  draw call; 258 → 2,868 triangles.
- Cost: none measurable.
  - GPU while the train passes in front of the stopped car: live 18.81 / 19.11 ms, new 19.04 / 18.92 / 19.08; phone
    within noise.
  - No hitch when the train first appears: the first 40 frames match the live build.
  - 54 programs, none compiled when the train appears; every quality level compiles. Startup 3.7 s; embed mode still
    starts on tap.

## 2026-10-22 · 15:xx — Graphics pass 3: the car looks like a real kei car
- *(The passes now cover the car, the train and the buildings too, not only the landscape.)*
- **The car, in close-up, looks like a real tall kei car** (think Honda N-BOX) instead of a toy:
  - **Windows:** the side glass is split into a front-door window, a sliding-door window and a rear quarter window. A
    black B pillar and a body-coloured C pillar divide them, over a black rubber seal at the waistline. It used to be
    one long strip of glass.
  - **The cabin shows through the glass:** the rear seat's backrest and headrests through the rear window (in view
    behind the car all the time), and a headrest in each side window.
  - **Doors:** panel seams for the front door and the sliding door, door handles, and the sliding door's rail.
  - **Wheels:** silver five-spoke alloys with a dark dish and a centre cap on slimmer tyres, set in dark wheel wells
    under black arch mouldings. They used to be black cylinders with flat white caps stuck on the side.
  - **Rear:** the tailgate's outline, red reflectors at the bumper's corners, the exhaust pipe, and a black stalk under
    each mirror.
- How: all of it is geometry and the glass texture inside the car's existing materials. Still 9 meshes (no extra draw
  calls) and no shader changes. 5,480 → 7,436 triangles.
- Cost: none measurable.
  - GPU against the live build (alternating order, quiet machine): country noon 20.93 → 21.03 ms (+0.09 median; the
    live build compared with itself read +0.10), city +0.26 (one 0.81 ms outlier round), phone +0.18 with a −2.0 to
    +0.8 spread.
  - 54 programs, none compiled mid-drive; every quality level compiles. Flat out: 0 world-build spikes against 1 on
    live. Startup 2.9 s; embed mode still starts on tap.

## 2026-10-22 · 14:xx — Graphics pass 2: leaves glow when the sun is low behind them
- **Backlit foliage at golden hour.** Driving into a low sun at sunrise or sunset, leaves and grass now glow where the sun
  shines through them, tinted by their own colour. It's strongest at the edge of each canopy, where the light passes
  through the fewest leaves:
  - the cherry blossoms of the avenue turn warm pink-orange against the evening sky;
  - autumn maples on the mountain pass glow orange and gold;
  - a lone country tree at sunrise lights up yellow-green.
  Before, trees seen against the sun were flatly lit or dark, like cut-outs. Trees with the sun behind the camera, and
  all trees at midday, look exactly as before.
- How: worked out once per leaf-card corner (per vertex) and carried to the pixels in the existing cloud-shadow varying,
  so each leaf pixel only adds one multiply. The strength is zero unless the sun is low and out.
- Cost: small but measurable on desktop, nothing on the phone.
  - The leaf shader with vs without the glow, flipped in one page:
    - desktop, looking into the sun: +0.10 / +0.48 ms;
    - desktop at noon: +0.35 / +0.30 / +0.06 (control +0.23 / −0.18);
    - phone: +0.09 to +0.23.
  - GPU against the live build (alternating order): desktop sakura noon +0.45 ms median and golden hour +0.47 (frames
    of 26–33 ms); phone 0.00.
  - The cherry-blossom canopies are many cut-out layers deep, and that shader reacts to any change at all.
  - Per pixel (the first version) it cost ~1.5 ms looking into the sun, so it went per vertex.
  - 54 programs, none compiled mid-drive; every quality level compiles. Flat out through the avenue at golden hour:
    4 and 7 world-build hitches against 15 and 15 on live (load noise), nothing missing. Embed mode still starts on tap.
- Tried and dropped: windows that reflect the sky by the Fresnel law (panes along a street turning bright, a sunlit
  pane catching the sun). It was subtle in stills and still cost +0.2–0.3 ms on desktop after moving it per vertex
  (+0.5 ms per pixel).

## 2026-10-22 · 12:xx — Graphics pass 1: rice paddies that look like water
- *(From now on the passes focus on the graphics: more real, keeping the anime style.)*
- **Flooded rice paddies look like real water.** They used to be painted in the sky's colour and then reflect at least 40%
  of the sky at every angle, so even right beside the road they looked like pale ice or plastic sheets. Now they follow
  the real behaviour of shallow water:
  - Looking down beside the road you see through it: warm grey-brown water over the mud, with rows of young rice
    seedlings (田植え後). They are small tufts a little off the grid, now and then missing, and at a slant they merge
    into rows that run off towards the horizon.
  - The sky's reflection follows the Fresnel law for water: about 2% straight down, ~20% beside the road, rising to a
    mirror of the sky and clouds in the distance.
  - At sunset the near paddies stay dark and the pink sky shows only farther out, which gives the fields depth instead
    of one flat pink sheet.
- **No more moiré on the rice fields.** The planting rows on every field now fade to their average once they're thinner
  than ~2 pixels. Before, they crawled in moiré bands across the far fields while driving.
- Cost: at most ~0.15 ms on desktop in paddy-heavy views, nothing measurable on the phone.
  - The new paddy code against the old in the same page (both programs compiled, flipped every 3 s), alongside a
    control that flips two identical programs:
    - Desktop: +0.04 / +0.25 / +0.20 ms at a paddy-heavy spot (control −0.31 to +0.28), and −0.03 / +0.11 / +0.08
      at another.
    - Phone profile: +0.16 / +0.01 / −0.03 (control −0.50 to +1.07) and +0.08 / +0.09 / +0.03.
  - GPU against the live build (alternating order): country noon 21.66 → 21.47 ms, country sunset 29.39 → 29.18. The
    phone reading (+1.26 ms) was not borne out by the in-page measurement at the same spot.
  - 54 programs, none compiled mid-drive; every quality level compiles. Flat out: 3 world-build spikes vs 2 on live,
    nothing missing. Startup 3.1 s; embed mode still starts on tap.
- Tried and dropped this hour:
  - finer asphalt grain with resurfaced patches and lane oil streaks: barely visible, +0.2 ms in the city;
  - a sheen on dry asphalt towards a low sun: +0.05 ms always and +0.26 ms around sunrise and sunset, for a subtle
    effect.

## 2026-10-22 · 11:xx — Realism pass 15: the town lights up one window at a time
- **Home lights come on one by one at dusk.** Every lit window in town used to fade in at the same instant and the same
  rate, as if one switch ran the whole town. Now each home window has its own moment:
  - From sunset the windows light up one at a time over the next two hours on the clock (about 40 s of driving), until
    the night town is fully lit.
  - At dawn they go out one by one in reverse.
  - Shops, signs, vending machines and the konbini stay lit as before.
  - On a dark rainy or overcast day about a third of the homes have their lights on in the daytime.
  - On a clear day home windows are now plain glass (they used to carry a faint glow even at noon).
- How: lit home windows get a "switch-on" byte (hashed from where each window is) written into the buildings' geometry,
  one extra byte per facade vertex. The building shader compares it with how far the evening has come, per vertex, so
  each pixel pays a single multiply. The test hook `?lightson=0…1` forces the level.
- Cost: none measurable.
  - The building shader with vs without the window switch, flipped every 3 s in one page at dusk in the city: desktop
    −0.02 / +0.05 ms.
  - Phone profile: median +0.3 ms against +0.1 ms for a control flipping two identical programs. Both show 1.5–3 ms
    spikes at this machine load (25–30), so phone in-page readings are noise-bound.
  - GPU against the live build (alternating order): dusk city 29.40 → 28.92 ms, night city 29.08 → 29.31. Live against
    itself: +0.11.
  - 54 programs with none compiled mid-drive; every quality level compiles. Flat out at dusk: world-build spikes 41 vs
    45 on live, nothing missing. Embed mode still starts on tap.

## 2026-10-22 · 10:xx — Realism pass 14: 逃げ水 on hot summer roads, and an engine you can hear
- **The road mirage (逃げ水, "escaping water").** On a clear summer day around midday (city, countryside and coast, with
  the sun more than ~35° up), the asphalt far down the road, past ~80 m, now seems to hold patches of water mirroring the
  pale sky. Hot air just above the road bends the low sky into view. The patches shimmer and drift, and they recede as
  you drive towards them, the classic summer-road look of Japanese anime.
  - Not in the evening, under cloud, on wet roads or near tunnels.
  - How: a thin strip along the road ahead, its shape taken from 24 road samples passed as a uniform array (no buffer
    uploads). It is drawn only while it's hot and only shades far road pixels, which the view angle and distance limit
    to a sliver near the vanishing point.
- **An engine you can hear.** The kei car's small three-cylinder now has a quiet, low hum on a CVT-like rev curve.
  - It idles softly while you wait at a crossing.
  - It rises and fills out as the car pulls away or you speed up.
  - At a steady cruise it sits under the road noise, and at very high speed the wind covers it. It's a little louder in
    tunnels.
  - Measured: gain 0.019 at 43 km/h cruise, 0.040 pulling away hard, 0.017 easing back.
- Cost: none measurable.
  - Mirage switched on/off every 3 s in one page at noon: city 0.00 / −0.09 ms, country −0.32 / −0.03, phone −1.07 / −0.11.
  - GPU against the live build (alternating order): city 19.15 → 19.40 ms, country 20.70 → 20.79, phone 13.13 → 13.14.
    The live build compared with itself read −0.20.
  - The engine is audio only. The mirage shader is compiled at load (54 programs; none compiled mid-drive), and every
    quality level compiles.
  - Flat out, nothing missing; startup 3.2 s; embed mode still starts on tap.

## 2026-10-22 · 08:xx — Realism pass 13: tyre spray, snow powder and exhaust breath; no more fog on the cuttings
- **The car throws spray.** Driving on a wet road, a fine mist of water now trails off the rear tyres: thicker the faster
  you go, and for as long as the road stays wet after the rain. At night it glows red from the tail lights (more when
  braking) and picks up the street lamps, the classic look of a car driving through rain after dark.
  - On the snowy roads of 雪国 the tyres kick up fine snow powder instead.
  - In the cold (snow country, and the mountain pass at night and early morning) the exhaust breathes small white
    clouds.
  - How: a small pool of soft billboards simulated on the CPU without allocations, drawn in one transparent call only
    while something is in the air. The particle state goes to the GPU as uniform arrays indexed by `gl_InstanceID`.
  - A first version updated instanced vertex buffers every frame. That cost about 0.5 ms of GPU time plus the odd
    multi-millisecond stall (pinned down with a diagnostic build: uploads with no drawing +0.47 ms; drawing with no
    uploads +0.15 ms).
  - Particles shrink and fade before they reach the camera and vanish within 4.5 m of it, so no huge quads. The spray
    covers ~6% of the screen while driving in rain.
- **No more white fog on the tunnel cuttings.** The cutting faces at tunnel approaches had a white, foggy smear across
  their lower part on the coast's sea side (grey/red streaks in the mountains). The slope's colour was blended with the
  beach sand and verge below it over the bottom ~2 m of every face, and the flat verge took a third of the grid colour.
  The slope-protection grid now starts cleanly at the foot of the face. This was a vertex-attribute change only.
- Cost: none measurable.
  - Spray switched on/off every 3 s while driving in rain, in one page: desktop −0.17 / +0.23 / −0.34 ms; phone profile
    +0.28 / +0.28 / −0.13.
  - GPU against the live build (alternating order): coast −0.06 ms, rainy country −0.14, phone coast −0.62.
  - Allocation while driving in rain (phone, ×4 CPU): 2.1–2.5 MB/s against 2.6–2.7 live, with the same top sites.
  - The spray shader is compiled at load (53 programs; none compiled when the rain starts or in snow); every quality
    level compiles.
  - Flat out in rain: 7 world-build spikes, the same as live, with nothing missing; embed mode still starts on tap.

## 2026-10-22 · 06:xx — Realism pass 12: brake lights, and bridges you can feel
- **Brake lights.** The car's tail lamps now brighten when it brakes. A small high-mount stop lamp
  (ハイマウントストップランプ) along the top of the rear window lights up with them.
  - They come on when the car really slows down: braking for a level crossing, or slowing down with ↓. Easing off
    gently, for example between zones, doesn't trigger them.
  - They stay on while the car waits at a crossing for the train, and go off as it pulls away.
  - At night the brake glow blooms and, in the rain, reflects in the wet road.
  - Logged at a crossing stop: brake on at 45 km/h as braking starts, held through the wait, off as the car pulls away
    (no flicker).
- **River bridges you can feel.** Each river bridge now has steel expansion joints across the road where the deck
  meets the abutments. Driving over them gives a soft "ka-tan" (one jolt per axle per joint, four per bridge) with a
  muffled thump in the audio, like the rail crossings but gentler.
- Tried and dropped, before these: view-dependent glitter on sunlit snow. Three versions were measured inside one page
  against the old snow shader, and each cost +0.25 to +0.45 ms on desktop, so it didn't ship.
- Cost: none measurable.
  - The stop lamp is one tiny extra mesh with no shadow and the tail lamps' own program (52/53 programs as before;
    none compiled mid-drive). The joints are four boxes per bridge. The bridge lookup runs once per river, with no
    per-frame allocation.
  - GPU against the live build (alternating order, machine load ~25–35), country noon: per-build medians 21.36 → 21.40
    and 21.27 → 21.31 ms. Night city 28.95 → 29.16; phone country −0.06. The live build compared with itself read +0.11
    ± 0.9.
  - Flat out with no missing chunks; embed mode still starts on tap.

## 2026-10-22 · 04:xx — Realism pass 11: night rain and snow only show where light catches them
- **Rain at night.** Every raindrop used to be drawn as an equally bright white streak, even against a black sky, so a
  night shower looked like daytime rain painted on darkness. Real rain at night is nearly invisible except where light
  hits it. Now:
  - drops are dark in the dark;
  - they light up in the headlight beam ahead of the car and around the street lamps, shop windows and tunnel lamps
    near it, where they glint brighter and stay visible further out;
  - by day nothing changes.
- **Snow at night** works the same way: dim flakes in the dark, bright ones in the beam and under the lamps.
- How: the particles use the same two lights the car picked (pass 9/10) plus the headlight cone. That's worked out per
  particle corner in the vertex shader (~10k vertices); main.js updates them once per frame in world space.
- Cost: none measurable.
  - GPU, alternating-order rounds against the live build (machine load ~20): rainy country night +0.74 ms on the first
    run and −0.03 on the re-run (8 rounds), rainy city night +0.14, phone rainy country night +0.02. The live build
    compared with itself read +0.14 ± 0.5.
  - 52 programs, none compiled when the rain starts; every quality level compiles; embed mode still starts on tap.

## 2026-10-22 · 03:xx — Realism pass 10: tunnel lights sweep over the car, shop windows light it in town
- **Tunnels.** The sodium lamps every 6 m along the tunnel shoulders now light the car too, by day as well. Driving
  through, the roof and body brighten and dim rhythmically as each lamp passes overhead: the familiar pulse of orange
  light on a car in a tunnel. Before, the car was just evenly tinted khaki inside.
- **Shopping streets at night.** Lit shop windows (glass fronts, cafés, noren restaurants, konbini) now count as lights,
  so the side of the car facing the shops picks up their warm light as it drives past. Shutters, garages and houses
  stay dark.
- How: every light now has a power when its chunk registers it:
  - street lamps 1.1, park lanterns 0.9, tunnel lamps 1.0, shop windows 0.7, konbini 0.8.
  - The car takes the two lights that light it most (power over the shader's distance falloff) instead of simply the
    nearest two. The light colour turns from warm white to sodium orange inside tunnels.
  - Still no allocation per frame: it scans the car's chunk and its two neighbours.
- Cost: none measurable. The shaders are the same as last pass; only the lights picked and their colour changed.
  - 52 programs, none compiled mid-drive; every quality level compiles.
  - GPU, alternating-order rounds against the live build at an extreme machine load of 70–80: night city +0.15 ms,
    mountains −0.22, phone night city +0.10. The live build compared with itself read 0.00 ± 0.5.
  - Flat out through tunnels: 6 world-build spikes against 10 on live; night city: 1 against 9.
  - Startup 4.0 s; embed mode still starts on tap.

## 2026-10-22 · 02:xx — Realism pass 9: street lamps light the car at night
- **The car catches the lamps it drives under.** At night the car was a flat dark-navy silhouette, even when it passed
  right under a street lamp. Now the lamps light it:
  - a warm wash on the roof and bonnet as you drive under each one, fading as it falls behind;
  - a highlight that slides along the paint and the glass;
  - its mint paint is visible again on the cherry-blossom avenue and the coast road at night.
  - In the city it shows as you pass a lamp (they're spaced 60 m apart there).
- How: each street lamp, pole lamp and park lantern records where its light comes from as its chunk is built. Each
  night frame the two lamps nearest the car are found (it checks only the car's chunk and its two neighbours, without
  allocating) and passed to the car's own paint and glass shaders. They fade out before 30 m, so the nearest-lamp swap
  never pops. Nothing else in the scene changed.
- Cost: none measurable. Only the car's few pixels run the extra lighting.
  - 52 programs, none compiled mid-drive; every quality level compiles.
  - GPU, alternating-order rounds against the live build at machine load ~30: night cherry-blossom avenue +0.03 ms,
    night city +0.39, phone night avenue +0.23. The live build compared with itself read +0.31 (the noise floor).
  - Flat out at night streamed with no missing chunks; embed mode still starts on tap.

## 2026-10-22 · 01:xx — Realism pass 8: rain skies, and wet tyres you can hear
- **Rain clouds look like rain clouds.** When it rained, the big crisp fair-weather cumulus towers stayed in the sky
  (half-transparent, still white-edged) above the grey storm deck, so rainy scenes had a summer sky painted on top. Now
  they melt into the low grey ceiling as the rain sets in, which is what you see under real rain clouds: one even grey
  sky. Cloudy weather without rain keeps its cumulus. One factor on the clouds' opacity.
- **Wet roads hiss under the tyres.** On a wet road there is now the swish of water under the tyres, through the rain
  and for as long as the road stays wet after it. It gets louder and higher-pitched the faster you go (≈0.023 at
  cruise, ≈2.1 kHz; ≈0.037 flat out, ≈3.9 kHz), with a slow wobble as the water film thickens and thins. It's silent on
  a dry road and in tunnels. Audio only: one more filtered noise loop.
- Cost: none.
  - No shader or draw-call change; 52 programs and none compiled mid-drive; every quality level compiles in the rain.
  - GPU, alternating-order rounds against the live build at machine load ~22–28: rainy city −0.26 ms, clear country
    +0.45, phone rainy city +0.07. The live build compared with itself read +0.44 (the noise floor).
  - Startup ready 3.0 / 5.3 s against 4.0 / 6.2 s live; flat out to 267 km/h with streaming keeping up; embed mode
    still starts on tap.

## 2026-10-22 · 00:xx — Realism pass 7: twilight cools, and the haze glows towards a low sun
- **The haze glows towards a low sun.** Real air scatters sunlight forwards. Looking into a low sun, the distant haze is
  bright and warm and far hills melt into it; looking away it stays cool. The haze used to be one flat colour in every
  direction, so at sunrise and sunset far hills stood out as flat grey-violet cut-outs against a glowing sky.
  - Now the haze picks up the sky dome's own sun glow (its broad lobe at the horizon, averaged across the view).
  - Drive towards the sunset and the far landscape, the mountains and the sea fade into warm light. Drive away and
    nothing changes. The glow follows the road as it bends.
  - It is worked out once per frame on the CPU and folded into the fog colour that the scenery, mountains, sea, river
    and birds already share. No shader changed.
- **Twilight cools after sunset.** After sunset the scene used to stay lit by a strong pink "sun" that cast hard shadows
  well into dusk, so the road, fields and paddies all turned the same pink.
  - A new end-of-civil-twilight key (sun ~6° down) hands the ground over to skylight: soft blue-violet light and faint
    shadows.
  - The sky towards the sunset and the high clouds keep their warm afterglow.
  - The dusk and pre-dawn haze and ambient light are bluer, and mornings are a little paler and hazier than noon.
- Cost: none. No shader or draw-call change; 52 programs and none compiled mid-drive.
  - GPU, alternating-order rounds against the live build at machine load ~20: country sunset −0.15 ms, night city
    −0.49, phone country sunset −0.15. The live build compared with itself read +0.31, so all of it is noise.
  - Flat out at 247 km/h with no new world-build spikes; embed mode still starts on tap.
- Tried first, not shipped: the glow worked out in the shaders, so it could peak under the sun and fade sideways. It was
  measured inside one page against the plain fog shader, with both programs compiled and flipped every 3 s:
  - per pixel: +1.7 ms at a country sunset;
  - per vertex: +0.25 ms on desktop and +0.55 ms on the phone profile, even at night.
  The per-frame version gives most of the look for nothing. That same-page flip also explains last pass's "+0.3–0.55 ms
  mystery": comparing two separate builds on a loaded machine is too noisy to trust.

## 2026-10-21 · 21:xx — Realism pass 6: lit shops and rooms at night
- **Shops lit from inside.** At night every lit shopfront used to be one flat glowing peach panel; the goods, shelves and
  posters you see by day vanished into it. Now the night glow is the shop's interior itself: the goods on the shelves,
  the 特売 posters, the 営業中 sign. It is lit in the shop's own light (cool white in a konbini, amber in a café, warm
  white elsewhere), brightest under the ceiling lights and dimmer towards the floor. The window frames and the café's
  board out front stay dark. White goods are kept below the bloom threshold, so they don't sparkle like fairy lights.
- **Lit rooms look like rooms.** Lit windows upstairs used to be flat glowing rectangles. Their middle frame glowed too,
  and the glowing "curtain" strip didn't match the painted curtain. Now:
  - the ceiling light's glow fades down the wall, with furniture silhouettes low against it;
  - the curtain that is actually drawn glows (backlit fabric);
  - the window's middle frame stays dark;
  - office floors get the same treatment, with desks and partitions.
- **Not every home is warm.** About a third of lit homes now have cool-white ceiling lights, as many Japanese homes do.
  The night city gets the real mix of warm and cool windows instead of uniform amber.
- Cost: none. It all lives in the night-glow texture painted at load: same texture size, same shaders, same draw calls
  (52 programs, none compiled mid-drive).
  - Startup (ready) 2.6 s before and after.
  - A flat-out night drive through the city streamed with no new world-build spikes.
  - GPU, alternating-order rounds with the machine at load 9–20: night city +0.15 ms median, against +0.13 for the live
    build compared with itself (the noise floor); noon city +0.08; phone, night city −0.09.
- **The live site now survives reboots.** This hour the machine rebooted and took the game's web server with it, and
  calm-drive.ustalabs.com returned 502 for about 20 minutes. It now runs as a systemd user service (`calm-drive.service`)
  that comes back on its own.
- Tried and held back: haze that glows towards the sun, so distant hills and the sea fade into the warm glow under a low
  sun, matching the sky dome. It looks right, but its fog-shader change measured +0.3–0.55 ms in every run, even with
  the glow skipped at night. It stays out until that cost is understood.

## 2026-10-21 · 19:xx — Realism pass 5: the car rides on springs
- **The car body moves like a real car's.** It used to be a rigid block that followed the road's slope and turned with it.
  Now the body hangs on springs over the wheels (~1.2–1.5 Hz, a little under-damped, like a soft family car):
  - it **leans out of bends** (≈9°/g, easing off at about 2.5°), so at speed on the mountain pass it visibly rolls ~1.5°;
  - it **dives when braking** for a crossing and **squats when pulling away** (≈4.5°/g, up to ~1.7°);
  - it **rocks on lane changes**: it leans out, then back as the car settles into the new lane;
  - it **rides the asphalt's gentle undulation** by a few millimetres at town speeds, which the springs smooth out at speed;
  - it **jolts over the rails at level crossings**: one small kick per axle per rail (8 for the two tracks), each with a soft
    thump in the audio.
  The wheels are now a separate unsprung part, so they stay planted on the road while the body moves above them.
- **Lane changes ease in and out.** The car used to snap 3° sideways the instant a key was held. Now its nose points where
  it is actually going, from its sideways speed versus forward speed: up to ~6° at town speed, less the faster you go.
- Measured (1280×720 headless GPU): mountain at 130 km/h, roll 1.5° in both directions, always outward. Crossing stop:
  0.6° dive while braking, a 1.6° squat when pulling away after the train, 8 rail jolts lifting the body ≤1.8 cm.
  Flat out to 267 km/h, streaming kept up, no frame spikes, lane memory intact.
- Cost: none. CPU only (a few multiply-adds per frame, no allocations); the wheel split adds one draw call.
  - GPU medians over 5 interleaved rounds vs the live build, desktop: mountain 28.6 → 28.4 ms, country 20.6 → 20.7,
    city 20.0 → 19.8.
  - Phone profile: mountain 15.2 → 15.2 ms, country 11.3 → 11.4.
  - No new shader programs (52, all compiled at load).
  - The frame loop's allocation sites are unchanged under ×4 CPU throttling.

## 2026-10-21 · 18:xx — Realism pass 4: wet roads mirror the lights
- **Wet streets reflect.** In the rain the road and pavements used to get only a flat sky-coloured sheen; now they mirror
  the scene — at night the shop fronts, signs, street lamps and the cherry-blossom lanterns stretch into long glowing
  streaks across the asphalt (the classic rainy-night look), and by day the wet street mirrors the grey sky and the
  buildings. How it works: while the road is wet, the frame's light is copied into a ⅛-size map (every other frame), and
  wet ground samples it mirrored about the horizon (corrected for the camera's height above the road), stretched into
  vertical streaks the way rough wet asphalt smears reflections; puddles reflect sharper. Off the top of the screen it
  falls back to the old sky colour. Nothing runs while the road is dry.
- Cost: none in dry weather (city 19.7 → 19.6 ms, cherry blossom 25.1 → 25.2). In rain, measured with the effect off /
  copy only / lookups only / both in one build (medians of 5): city at night 31.3 / 31.1 / 30.6 / 31.5 ms, cherry blossom
  at night 37.3 / 37.9 / 37.3 / 37.9 — about +0.2–0.6 ms while it rains, almost all of it the copy pass (now done every
  other frame); phone quality, rainy city night +0.3 ms. The copy shader is compiled at load (a first version missed
  that and compiled it when the rain started — caught by the compile check, fixed).

## 2026-10-21 · 17:xx — Realism pass 3: no more dotted wire shadows on walls and roads
- **Overhead wires no longer cast shadows.** Wires are 2–4 cm thick, thinner than a shadow texel (6–8 cm), so their
  shadows came out as dotted, dashed lines running across building fronts, shop shutters and the road — one of the most
  artificial-looking details in the city. Real thin wires barely cast a visible shadow a few metres away (the sun's disc
  blurs it out), so leaving them out is both cleaner and more realistic. Wire vertices carry a flag in the contact-shading
  byte the geometry builder already writes; the props' shadow-pass material skips them — no extra draw calls.
- Cost: none. Median GPU time over five interleaved rounds (quiet machine, 1280×720): city 19.8 → 19.8 ms, cherry
  blossom 25.1 → 25.2. One more shader program (the props' shadow pass, 51), compiled at load.
- Tried and left off by default: an edge-adaptive shadow filter (4 taps only on shadow-edge texels) that smooths the
  stair-steps of shadow edges on walls — it looked good but cost +0.5–0.9 ms (cherry-blossom dappled shade is almost all
  edges); available as `?pcf=2`.

## 2026-10-21 · 16:xx — Realism pass 2: the car sits on the road and its paint reflects the sky
- **Contact shadow under the car.** Sky light can't reach the road beneath a car, so a real one always sits on a soft
  dark patch. Ours had none, so under overcast, in rain and at night — when there is no sun shadow — it looked like it
  was floating. Now a soft patch (one small quad that moves with the car) grounds it in every weather and light; in sun
  it deepens the area around the tyres. Most visible on the white snow road, in rain and in tunnels.
- **Glossy paint and glass.** The car's paint, hubs and windows now reflect the sky (and, below the reflected horizon,
  the darker ground) with a Fresnel falloff — strongest at grazing angles, so the roof picks up the blue-white of the sky
  and the rear window more of it — plus a sun glint where it's lit. Gloss per part via the vertex colour's alpha: paint 1,
  hubs 0.8, roof 0.55, trim 0.35, tyres ~0.
- Cost: none measurable. Median GPU time over five interleaved rounds (1280×720): countryside 20.6 → 20.4 ms, city 19.4 →
  19.7; phone portrait at phone quality: city 12.9 → 12.9. One more draw call and +4 % WebGL calls (681 → 709 a frame);
  2 more shader programs (50), all compiled at load — none mid-drive at sunset, night or rain.

## 2026-10-21 · 15:xx — Realism pass 1: grass that looks like a field, not a lawn (new focus: realism, no slowdowns)
- **Grass** on the cherry-blossom avenue and the coast hillsides was a blend of two very similar, very saturated greens
  — with the colour grade's extra saturation it read as a plastic lawn over a large share of the screen. Now it has
  broad patches from lush to lighter green, the odd sun-dried yellow-green patch, darker clumps a metre or two across,
  and painterly blade strokes up close that fade out with distance; base greens slightly less saturated.
- Cost: none — five noise reads, the same as the old mix. Median GPU time over five interleaved rounds (1280×720, the
  machine heavily loaded): cherry blossom 25.9 → 25.8 ms, coast 23.7 → 24.0, countryside 21.0 → 21.2 — within noise.
  (The countryside verge strip keeps its simple colour: giving it the new grass made the whole countryside ground shader
  measurably heavier for a 1.4 m strip.) Other zones render identically; no new shader compiles.

## 2026-10-21 · 15:xx — Go really fast, and the car stays in the lane you pick (player feedback)
- **Much higher top speed**: the speed control now goes up to 5.5× each zone's cruising speed (was 1.8×) — about
  **190–265 km/h** flat out (was 60–90). Swiping up half the screen (or ~2 s on ↑) takes you there: the swipe and the keys
  are now proportional, so the whole range is one gesture. Measured flat out: 267 km/h on the coast, 227 in the city,
  the world streams in fast enough (no missing road ahead over 2.6 km), the camera keeps up (9–10 m behind the car
  instead of trailing further and further back) and the view widens a little with speed (up to +11°, at most 84° on
  portrait phones). The road roar grows more gently above cruising speed and a rush of wind comes in instead. Level
  crossings only bring a train down when the car can brake gently to the line — flat out, the barriers stay up.
- **Steering is no longer undone**: after 3 s without input the car used to glide back to the left lane — players felt
  it "pushing back". It now settles where you last steered it (still a gentle weave, still kept inside the road).
  Phone test, touch the right side: lane 0.65 → 0.71 six seconds later (was pulled back to −1.40).

## 2026-10-21 · 14:xx — Phones: FXAA instead of MSAA, 8–20 % faster frames
- **Measured first** (phone portrait at phone quality, GPU time by part): 2× MSAA was the largest single cost after the
  scene itself — **2.1–4.9 ms a frame** (up to 30 % in the cherry-blossom zone, where overlapping leaf cards make the
  multisample buffer and its resolve expensive).
- **Phones and the X embed now smooth edges with FXAA**, folded into the existing final colour-grade pass (5 reads on
  most pixels, 9 on edges; no extra pass, no multisample buffer). Desktop keeps 4× MSAA; low quality stays without AA.
  `?aa=msaa|fxaa|none` overrides. Close-ups: building diagonals, wires and the car's outline look like they did with
  MSAA (and far better than without AA); full scenes (cherry blossom, coast) match.
- GPU time per frame at phone quality, interleaved A/B: city **13.9 → 12.8 ms**, cherry blossom **16.5 → 15.3**,
  countryside 13.5 → 10.3 (noisier). Desktop unchanged.

## 2026-10-21 · 13:xx — Cloud shadows from a small map: ~6 % faster frames
- **Measured first**: the drifting cloud shadows cost **1.9 ms a frame** on the ground alone (A/B against a build without
  them, 1280×720) — every ground pixel evaluated four octaves of noise (with screen-space derivatives) for a pattern whose
  finest detail is ~45 m across, and every vertex of every prop, tree and building did the same four lookups.
- **Now the pattern is painted once per frame into a 256² map** covering 1.6 km around the camera (6.25 m texels, snapped
  to whole texels in world space so it doesn't swim), and everything reads it with one texture lookup. Skipped entirely at
  night, under overcast and at low sun, when the cloud shadows are off anyway. Same pattern, same drift (screenshots match;
  a cloud-shadow band on the autumn hillside lands in the same place).
- GPU time per frame, interleaved A/B: desktop 1280×720 — countryside **22.5 → 21.0 ms**, city **21.2 → 19.8**, coast
  **24.8 → 23.3**, cherry blossom 27.1 → 26.4; phone portrait at phone quality — city **15.5 → 14.5 ms**, countryside
  15.3 → 14.5.

## 2026-10-21 · 12:xx — Realistic sealed road cracks (no more doodle loops)
- **The dark lines on the asphalt are now real-looking sealed cracks.** They used to be the 0.5 contour of a smooth noise
  field: big round loops ~3–5 m across, drawn with a width in noise units, so they were thickest right in front of the
  camera — on a phone in portrait the road fills the bottom half of the screen and they read as scribbles. Now they are
  thin tar lines (~3.6 cm wide in world space) where real roads have them: short cracks across part of a lane every few
  metres and the odd long one along a wheel track, slightly jagged, only on some stretches of road. Anti-aliased by their
  screen-space width, so they thin out and fade with distance instead of shimmering.
- Cost: none — stretches without cracks skip the maths (screen-space derivatives are taken outside the branch, and the
  wobble uses the noise texture's top mip, which needs none). Interleaved A/B (1280×720): city 20.5 → 20.7 ms,
  countryside 22.1 → 21.7, coast 24.4 → 24.8 — within noise. (A first version without the early-out cost ~1 ms.)
- Measured first (phone portrait, mid quality, GPU ms by part in the city): ground 4.2, props 4.3, the off-screen
  render + colour grade 4.0, MSAA 3.9, buildings 2.3 — the post chain and MSAA behave very differently on phone GPUs
  (tile-based) than on this desktop, so they're left for when there's on-device data.

## 2026-10-21 · 11:xx — Calmer shadows: fewer re-rasterisations
Every time the sun's shadow map is re-laid-out, every shadow edge in view changes its stair-step pattern at once (a
"pop"). Three things did that; all three are now rarer or gone:
- **Re-aims every ~20 s instead of ~10 s by day.** The shadow camera used to be re-aimed at the sun whenever the sun had
  drifted 0.1 rad from it; now it's aimed at where the sun *will be* once it has moved ~0.09 rad, so the drift swings
  −0.1 … +0.1 rad between re-aims. Replaying a game day: daytime re-aims **22 → 11** (every 10.3 s → 20.2 s on average);
  in-game at 15:00, every ~7 s → every 13–14 s. Measured with the car parked at 09:30 (frame-to-frame change on a shadowed
  street): the one shadow pop in 11 s is gone (largest change between two frames 0.53 → 0.16).
- **No pop when the world re-centres** (every 900 m). The shadow grid is now snapped in absolute world coordinates;
  driving 1 km with the sun frozen: **1 → 0** re-rasterisations.
- **No pop when the shadow pivot follows the road uphill** (3 m steps): moving the pivot slides the whole map, so the
  grid's phase now moves with it. Mountain road with the shadow camera 4° off the sun: **1 → 0** per 575 m.
Renders are otherwise identical (mean pixel difference ≤ 1.3/255 against the previous build); no extra cost.

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
