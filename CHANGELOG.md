# Changelog — Infinite Calm Drive

Live: https://calm-drive.ustalabs.com · the original 2D version lives at `/classic.html`.

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
