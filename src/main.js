import * as THREE from 'three';
import { Path, zoneW, zoneWeight, zoneAt, zparam, ZINFO, setStartZone, startZone, zoneSets, trafficSide, seaWeight, regionWeight, viewMix, bandMix, bayQ, borderNear, nextBorderS, REGION, crossingS, crossingValid, XING, XOFF, riverNear, RIV, ROFF, groundOffsetMix, tunnelNear, T_HALF, T_RIDGE, ZONE_LEN, GAL_BR } from './path.js';
import { makeCrossingRig, makeTrain, xingPosts } from './crossing.js';
import { buildAtlas, buildFoliage, buildPaintedAtlas, buildWorldAtlas, buildCapAtlas, buildPasAtlas, buildChainAtlas, albedoTexture, SHOP_GLASS, stickerHolesJ } from './textures.js';
import { GRAD_CAR, trainRamp, makeMaterials, makeAtlasW, makeAtlasRooms, makeAtlasWRooms, makeChainRooms, roomSet, makeAtlasChain, makeCapAtlas, makePasGrass, setWorldTex, U, groundMaterialFor, setGrazeFade, makeCloudMap, makeGhibliLeaf, FIELD, tetraMaterial, barkMaterial, tuffMaterial, PROP_DEPTH } from './materials.js';
import { setAtlas, setFoliage, warmTrees, warmBare, warmTetrapods, setLeafDensity, GHIBLI, setHouses, setTrHouses, setChains, PROC_ROOMS, setFishers, setDolmus } from './props.js';
import { loadTreeAtlas } from './ghibli.js';
import { World, CH } from './chunks.js';
import { loadRealSky, makeRealSky } from './realsky.js';
import { makeSky, paintClouds, makeClouds, makeMountains, updateTOD, applyWeather, TOD, lightDirAt, KEYS, REGION_KEYS, sunBearing, moonSkyDir } from './sky.js';
import { makeWeather, makeRain, makeSnow, PLIGHT } from './weather.js';
import { makeSpray } from './spray.js';
import { makeMirage } from './mirage.js';
import { makeGrass } from './grass.js';
import { makeBirds } from './birds.js';
import { makeSea, shoreMaterial, riverMaterial, SHORE_PHASE } from './sea.js';
import { makeFerry } from './ferry.js';
import { makeTram } from './tram.js';
import { makeFishers } from './fishers.js';
import { loadBalloonAtlas, makeBalloons } from './balloons.js';
import { surfMaterial, SURF } from './surf.js';
import { makeCar } from './car.js';
import { makePost } from './post.js';
import { makeAudio } from './audio.js';
import { makeParticles } from './particles.js';
import { clamp, lerp, sstep, setSeed, hash2 } from './util.js';
import { loadCloudAtlas, makePaintedClouds, loadBandAtlas, makePaintedBand, updatePainted, loadFieldTexture, loadFrontAtlas, loadRoomAtlas, roomTexture, roomGlass, loadHouseAtlas, loadHousePatch, loadTrHouseAtlas, loadTownAtlas, loadChainAtlas, loadFisherAtlas, loadDolmus, loadTrain, todTones, mixTones, paintSky, PAINT_TOD, BAND_R } from './painted.js';

const QS = new URLSearchParams(location.search);
// inside an X player card (or any iframe): lighter quality, compact UI, tap-only start
const EMBED = QS.has('embed') || (() => { try { return window.self !== window.top; } catch (e) { return true; } })();
if (EMBED) document.body.classList.add('embed');
if (QS.has('shot')) document.body.classList.add('shot');
setSeed(QS.has('seed') ? parseInt(QS.get('seed')) : (Math.random() * 1e9) | 0);
setStartZone(QS.get('env') || 'city');
const $ = id => document.getElementById(id);
const status = t => { const el = $('loading'); if (el) el.textContent = t; };

/** a zone set (path.js zoneSets) holding any of Turkey's zones: its ground variant is one of Turkey's programs */
const trSet = zs => zs.some(z => REGION[z] === 'tr');
/** a Galata start (step 35R): m into the zone, ~35 m before the real bridge's Karaköy end (path.js GAL_BR) */
const GAL_S0 = GAL_BR[0] - 35;
async function main() {
  await new Promise(r => setTimeout(r, 30));
  // ------------------------------------------------------------ renderer & scene
  const canvas = $('c');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', stencil: false });
  const mobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 1 && Math.min(innerWidth, innerHeight) < 900);
  const quality = QS.get('q') || (EMBED || mobile ? 'mid' : 'high');
  let DPR = Math.min(devicePixelRatio || 1, quality === 'high' ? 1.75 : quality === 'mid' ? (EMBED ? 1.25 : 1.4) : 1);
  renderer.setPixelRatio(DPR); renderer.setSize(innerWidth, innerHeight, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping; renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.debug.checkShaderErrors = QS.has('debug'); // checking forces each shader compile to finish synchronously
  // the painted assets download while the town is painted, the ones needed first first (each loader resolves to null if
  // its asset fails: the procedural look then stays). The full-size tiers of the clouds, the band and the meadow only
  // where the frame is tall enough to show them; phones, the embed and smaller windows take the half-size ones (they
  // decode and upload 4× faster, and the clouds' towers are still ~1:1 at 720 px)
  // (test hook ?clouds=old: the procedural clouds only; ?clouds=both: both are built and st.pclouds flips between them)
  const CLOUDS = QS.get('clouds') || 'painted', TIER = quality === 'high' && innerHeight * DPR >= 900 ? 'hi' : 'lo';
  // the painted crowns' clusters (ghibli.js): 256² clusters on desktops (a near crown fills a third of the frame, and its
  // flowers are a few texels wide), else 128² (phones, the embed)
  // (the leaves' atlas, crowns3, and the cherry canopy's own, blossom3: step 26. crowns3 is crowns' leaf row alone, byte for byte)
  const treeTier = quality === 'high' && innerHeight * DPR >= 560 ? 'hi' : 'lo', treeLoad = loadTreeAtlas(treeTier, 15000, 'crowns3');
  const blossomLoad = loadTreeAtlas(treeTier, 15000, 'blossom3', 'blossom');
  // the painted meadow of the countryside's fields (painted.js), on the clouds' tiers
  const fieldLoad = loadFieldTexture(TIER);
  // the shopping street's painted shopfronts and upper floors (painted.js), on the crowns' tiers (a near shopfront fills
  // a third of the frame): 360×432 px a bay on desktops, half that on phones and in the X card
  const frontLoad = loadFrontAtlas(quality === 'high' && innerHeight * DPR >= 560 ? 'hi' : 'lo');
  // (step 31) …and the rooms behind their windows, with the windows' glass, on the same tiers (painted.js loadRoomAtlas)
  const RTIER = quality === 'high' && innerHeight * DPR >= 560 ? 'hi' : 'lo', roomLoad = loadRoomAtlas(RTIER);
  // (step 34) …and the rooms behind every other shop window still painted, a region's in a sheet of its own (painted.js loadRoomAtlas):
  // Japan's konbini with the start's assets, the Turkish town's and its chain markets' with Turkey's (a Turkish start's, else trLazy's)
  const roomJpLoad = loadRoomAtlas(RTIER, 15000, 'rooms1jp');
  // the painted houses of the country, the coast and the cherry avenue (painted.js), on the same tiers: 48 px/m on desktops,
  // 32 on phones and in the X card. Their cells take rows of their own in the painted atlas (textures.js paintHouses)
  const HTIER = quality === 'high' && innerHeight * DPR >= 560 ? 'hi' : 'lo', houseLoad = loadHouseAtlas(HTIER), housePatchLoad = loadHousePatch(HTIER);
  // Turkey (W2): its painted horizon, its houses (the world atlas: painted.js loadTrHouseAtlas, on the same tiers as Japan's
  // houses, 32 px/m on desktops, 24 on phones and in the X card) and its programs only for a start in Turkey or within TR_NEAR
  // of a border tunnel; otherwise they load and compile in the background as the drive comes that close (trLazy, below: the
  // border is then ~4–5 minutes away at a cruising speed, ~1 at full speed)
  // (a Galata start, step 35R: at Karaköy's end of the real bridge, its old city ahead, as the zone's concept had it; elsewhere 140 m in)
  const TR_NEAR = 3200, S0 = Math.max(100, parseFloat(QS.get('s')) || (startZone() === 'galata' ? GAL_S0 : 140)), TR_START = REGION[startZone()] === 'tr' || nextBorderS(S0) - S0 < TR_NEAR;
  const trHouseLoad = TR_START ? loadTrHouseAtlas(HTIER) : null;
  // (…and the Turkish town's painted shops, windows and cat, W4: painted.js loadTownAtlas, on the same tiers, 100 px/m on desktops)
  const townLoad = TR_START ? loadTownAtlas(HTIER) : null;
  // (step 32) the chain stores' painted bays (painted.js loadChainAtlas), on the same tiers: Japan's konbini with the start zone's assets at
  // every start (no chunk is built before they are in or have failed: seeded captures stay deterministic), the Turkish town's markets
  // with Turkey's (a Turkish start's, else trLazy's)
  const chainLoad = loadChainAtlas(HTIER, 'jp'), chainTrLoad = TR_START ? loadChainAtlas(HTIER, 'tr') : null, roomTrLoad = TR_START ? loadRoomAtlas(RTIER, 15000, 'rooms1tr') : null;
  // (step 35a) the Galata Bridge's fishermen as painted figures (painted.js loadFisherAtlas), on the same tiers: with Turkey's assets
  const fisherLoad = TR_START ? loadFisherAtlas(HTIER) : null;
  // (step 35b) the Turkish town's dolmuş as a painted 3D model (painted.js loadDolmus: its geometry and its texture pair), on the same tiers
  const dolLoad = TR_START ? loadDolmus(HTIER) : null;
  // (step 35c) Japan's crossing train as painted 3D cars (painted.js loadTrain: its parts and its texture pair), on the same tiers: with the
  // start's assets at a Japanese start (a train can cross soon after a city or country start); at a Turkish one in the background once the
  // drive comes within TR_NEAR of Japan (trainLazy, below)
  const JP_START = REGION[startZone()] === 'jp' || nextBorderS(S0) - S0 < TR_NEAR, trainLoad = JP_START ? loadTrain(HTIER) : null;
  // the painted cumulus and the horizon band (painted.js; 32 px/° where the frame is tall enough, else 16 px/°): the
  // largest downloads, and needed last (they are awaited once the road is built and the light prepared, below), so they
  // start once the four above are in (or after 4 s, so a stalled one never holds them up for its whole 15 s timeout): on
  // a slow line those then have all of it, instead of a share. On a fast line this costs nothing (all six are in long
  // before the band and the clouds are awaited)
  const firstLoads = Promise.race([Promise.all([treeLoad, blossomLoad, fieldLoad, frontLoad, roomLoad, roomJpLoad, houseLoad, chainLoad]), new Promise(r => setTimeout(r, 4000))]);
  const pcLoad = CLOUDS === 'old' ? Promise.resolve(null) : firstLoads.then(() => loadCloudAtlas(TIER));
  const bandLoad = firstLoads.then(() => loadBandAtlas(TIER));
  // (the coast's far shore as its painting has it, step 27: a row of its own in bandco1, over band3's; without it, band3's)
  const bandCoLoad = firstLoads.then(() => loadBandAtlas(TIER, 15000, 'bandco1'));
  // …and Turkey's (the Bosphorus's far shore; the Galata Bridge's old city, W3; the Turkish town's mosque at the end of its street
  // and the distant town round it, W4; Cappadocia's castle rock of Uçhisar at the end of its road among the fairy chimneys' valleys,
  // W5: a row each, in files of their own), with Japan's when it is needed at the start
  // (…and Paşabağ's rounded tuff hill at the end of its road among the valley's chimneys, W6)
  // (step 35R: the real Galata zone's skyline, its landmarks' cards (realsky.js), with Turkey's assets; the concept's old city, bandtr2,
  // stays loaded: the bridge keeps it if they fail (and leaving it out moved a few of the town's pixels in seeded captures))
  const loadRealSky1 = () => loadRealSky(HTIER), loadTrBands = () => Promise.all([loadBandAtlas(TIER, 15000, 'bandtr1'), loadBandAtlas(TIER, 15000, 'bandtr2'), loadBandAtlas(TIER, 15000, 'bandtr3'), loadBandAtlas(TIER, 15000, 'bandtr4'), loadBandAtlas(TIER, 15000, 'bandtr5')]);
  const realSkyLoad = TR_START ? firstLoads.then(loadRealSky1) : null, bandTrLoad = TR_START ? firstLoads.then(loadTrBands) : null;
  // (and Cappadocia's hot-air balloons, W5: on the clouds' tiers)
  const balloonLoad = TR_START ? firstLoads.then(() => loadBalloonAtlas(TIER)) : null, BALLOONS_N = quality === 'high' ? 36 : 22;

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xc6ddf2, 0.0019, 700); // near = exp² density, far = draw distance (see materials.js)
  const camera = new THREE.PerspectiveCamera(52, innerWidth / innerHeight, 0.5, 7000);

  const sun = new THREE.DirectionalLight(0xffffff, 3);
  sun.castShadow = true;
  const SM = quality === 'low' ? 1024 : quality === 'mid' ? 1536 : 2048; sun.shadow.mapSize.set(SM, SM);
  // Shadows follow the sun continuously. The shadow camera is aimed along `shadowDir`, re-aimed only when the sun has
  // moved ~6° (its texel grid stays fixed in the world between re-aims, snapped to whole texels as the car drives),
  // and a skew slides every point along the TRUE light direction onto the pivot plane under the car before the
  // camera sees it. The direction used to be held and stepped every 0.23°, which made all shadows jump ~3× a second
  // (6–21 cm by day, metres near sunset). Ground at the pivot height keeps its texels while the sun moves.
  const SH_HALF = 62; // shadow frustum half-size (m): ~6 cm texels at 2048²
  const BAND_NEAR = 620; // (step 28: the painted horizon's ring radius in the countryside, m: just inside the world's far fade)
  const shCam = sun.shadow.camera, shSkew = new THREE.Matrix4(), shTmp = new THREE.Matrix4();
  Object.assign(shCam, { left: -SH_HALF, right: SH_HALF, top: SH_HALF, bottom: -SH_HALF, near: 1, far: 420 });
  // The box fitted to what can be seen and what can shadow it (step 24). A low sun along the road stretches the square box
  // over ~400 m of it (the map's rows run along the light, each row sin(elevation) as tall on the ground), so at golden hour
  // the shadow pass drew the scenery 220 m ahead, mostly for shadows nobody sees. The box keeps its width (its columns) and
  // its texel grid, but takes only the rows that hold the shadow receivers within SH_FIT.R of its centre (up to HH above it
  // and HL below), drawn into that many rows of the map (a viewport: the same texels, less to fill); and its near plane
  // reaches out towards the sun only as far as a caster HC tall standing beyond those receivers (the city's tall blocks, 12
  // storeys and a stair house: HC 43 m; it was 80 for the far towers they replaced).
  // At noon it is the old box. Both are refitted every frame without moving a texel (the rows are whole texels from the
  // box's snapped centre, the near plane only clips), so the stair-steps' layout is the old box's wherever both reach
  const SH_FIT = { R: SH_HALF, HH: 25, HL: 10, HC: 15 }, SH_BIAS_M = 0.0004 * 419; // (the depth bias in metres: −0.0004 of the old 419 m range)
  const shVP = new THREE.Vector4(0, 0, 1, 1); sun.shadow.getViewport = () => shVP; // (the rows the box is drawn into)
  const shadowDir = new THREE.Vector3(0, 1, 0), shX = new THREE.Vector3(), shY = new THREE.Vector3(), shT = new THREE.Vector3(), UPV = new THREE.Vector3(0, 1, 0);
  const shC = new THREE.Vector3(0, 150, 60), shLook = new THREE.Vector3(), shAim = new THREE.Vector3(); // (start: the warm-up meshes at the origin are in view)
  let shY0 = null, shPhX = 0, shPhY = 0, shTex = 0; // pivot plane height (follows the road in 3 m steps); texel-grid phase
  sun.shadow.updateMatrices = function () { // three's version aims the camera at the light itself
    shCam.position.copy(shC); shCam.lookAt(shLook); shCam.updateMatrixWorld();
    shCam.updateProjectionMatrix(); // projection · (view · skew · view⁻¹), so three's projection · view applies the skew first
    shTmp.multiplyMatrices(shCam.matrixWorldInverse, shSkew).multiply(shCam.matrixWorld);
    shCam.projectionMatrix.multiply(shTmp); shCam.projectionMatrixInverse.copy(shCam.projectionMatrix).invert();
    this._updateMatrix(shCam, this.matrix, this._frustum, shVP); // (the lookups read the box's rows of the map)
  };
  let bloomAllowed = true;
  // Anti-acne: the normal offset is 1.5 shadow texels (it was 0.05 m — under a texel at phone quality, so walls lit at a
  // grazing angle shaded themselves in stripes that crawled as the sun moved), and walls the sun only grazes keep their
  // toon ramp instead of an unresolvable shadow (materials.js).
  sun.shadow.bias = -0.0004;
  const fitShadowBias = () => { sun.shadow.normalBias = QS.has('nb') ? parseFloat(QS.get('nb')) : (1.5 * 2 * SH_HALF) / sun.shadow.mapSize.x; };
  fitShadowBias();
  { const [lo, hi] = (QS.get('graze') || '0,0.12').split(',').map(Number); setGrazeFade(lo, hi); }
  scene.add(sun, sun.target);
  // The car's own shadow map: a 4.8 m square around the car (~1 cm texels), so its shadow has crisp, stable edges
  // instead of stair-steps crawling over the big map's 6 cm texels as it drives. Only the car is drawn into it, and
  // the car stays out of the sun's map (frustum routing below). The light itself adds nothing (materials.js).
  const carSun = new THREE.DirectionalLight(0xffffff, 0);
  carSun.castShadow = quality !== 'low' && !QS.has('nocarsh');
  { const n = QS.has('carsm') ? parseInt(QS.get('carsm')) : quality === 'high' ? 512 : 384; carSun.shadow.mapSize.set(n, n); }
  Object.assign(carSun.shadow.camera, { left: -2.4, right: 2.4, top: 2.4, bottom: -2.4, near: 1, far: 30 });
  carSun.shadow.bias = -0.0002; carSun.shadow.normalBias = 0.025;
  scene.add(carSun, carSun.target); // after the sun: the shaders take directional light 0 as the sun
  if (carSun.castShadow) {
    const sunFr = sun.shadow.getFrustum(), carFr = carSun.shadow.getFrustum();
    for (const C of [THREE.Mesh, THREE.Line]) {
      const base = C.prototype.intersectsFrustum;
      C.prototype.intersectsFrustum = function (fr) {
        if (fr === carFr) return this.userData.car === true;
        return (fr !== sunFr || this.userData.car !== true) && base.call(this, fr);
      };
    }
  }
  const hemi = new THREE.HemisphereLight(0xa4c8ff, 0xc8b8a0, 1.6); scene.add(hemi);

  status('painting the town…');
  await new Promise(r => setTimeout(r, 10));
  const atlas = buildAtlas(); setAtlas(atlas);
  // the painted atlas (textures.js buildPaintedAtlas): the painted fronts, the big lit signs and the painted houses, in a
  // texture of their own (the procedural atlas had no room left), on the fronts' and houses' tiers
  const fa = await frontLoad, ha = await houseLoad, hp = await housePatchLoad, ra = await roomLoad;
  if (ha && hp) ha.patch = hp; // (the coast painting's house as painted, over houses2's: step 27)
  const patlas = buildPaintedAtlas(atlas, HTIER, fa, ha); // (the cells keep their procedural paint where a painting failed)
  if (patlas.houses) setHouses(ha.types); // (else: the procedural houses)
  if (patlas.houses) U.uHouseV.value = Math.max(...ha.tiles.map(t => atlas.uv(t.name).v1)) + 1e-4; // (step 30: the houses' rows, for their night fill)
  if (fa) fa.img.close(); if (ha) ha.img.close(); if (hp) hp.img.close();
  // (step 32) the chains' atlases: Japan's konbini's, and at a Turkish start the town's markets' (textures.js buildChainAtlas; null when
  // their bays failed: the old konbini and markets)
  const chainAtlas = async (load, region) => { const ca = await load; if (!ca) return null; try { return buildChainAtlas(atlas, HTIER, ca, region); } catch (err) { console.warn('the chain fronts:', err.message); return null; } finally { ca.img.close(); } };
  const cjAtlas = await chainAtlas(chainLoad, 'jp'), ctAtlas = TR_START ? await chainAtlas(chainTrLoad, 'tr') : null;
  // the world atlas: the regions after Japan (Turkey's flag, signs and wooden houses), on the painted atlas's tiers. (Its
  // textures and the atlas material's world variant are made once the rest of the scene is (makeAtlasW, below): made
  // earlier, their ids drew random numbers ahead of the particles', which moved every falling petal of a seeded capture)
  // (and Cappadocia's cells, W5, in an atlas of their own: textures.js buildCapAtlas)
  let watlas = null, catlas = null, patlasP = null; // (…and Paşabağ's, W6: textures.js buildPasAtlas)
  if (TR_START) {
    const th = await trHouseLoad, ta = await townLoad; watlas = buildWorldAtlas(atlas, HTIER, th, ta); catlas = buildCapAtlas(atlas, HTIER); patlasP = buildPasAtlas(atlas, HTIER); U.uPasSway.value.set(...patlasP.sway); // (Paşabağ's grass, W6)
    if (watlas.trHouses) setTrHouses(th.types, th.extras); // (else: the procedural houses)
    if (th) th.img.close(); if (ta) ta.img.close();
  }
  const fol = buildFoliage(renderer); setFoliage(fol.cells); U.uTuftV.value.set(...fol.tuftV);
  const M = makeMaterials(atlas.textures(renderer), fol.tex, patlas.textures(renderer));
  const cloudMap = makeCloudMap(); cloudMap.update(renderer, 0, 0, 0, 0);
  status('painting the clouds…');
  await new Promise(r => setTimeout(r, 10));
  setLeafDensity(QS.has('leafd') ? parseFloat(QS.get('leafd')) : quality === 'high' ? 0.72 : 0.62); // fewer, larger foliage cards
  { // the broadleaf trees' crowns: painted leaf clusters once their atlas is in, else (if it failed) the old card crowns
    const ta = await treeLoad, ba = await blossomLoad, an = Math.min(4, renderer.capabilities.getMaxAnisotropy());
    if (ta) {
      GHIBLI.cells = ta.cells.filter(c => c.kind === 'leaf'); ta.tex.anisotropy = an;
      const g = makeGhibliLeaf(ta.tex); M.gleaf = g.mat; M.gleafDepth = g.depth;
    }
    // …and the cherry trees' canopy clusters (their own atlas, step 26; without it the card crowns), lit by the same code with
    // the painting's pinks; their shadow-pass twin casts each cluster's shadow smaller (a sparser dapple: materials.js BL_SHADOW)
    if (ba) { ba.tex.anisotropy = an; GHIBLI.bcells = ba.cells; const b = makeGhibliLeaf(ba.tex, { blossom: true }); M.gblossom = b.mat; M.gblossomDepth = b.depth; }
  }
  warmTrees(); warmTetrapods();
  // the painted meadow's tint (materials.js FIELD), from its painted colours to the albedo that shows as the reference
  // art's fields at noon: a light lime (measured over the far fields: CIELAB ΔE 2.7 from the painting, 10.2 for the
  // paddies). At dusk, at night and under grey skies it fades to the paddies' old, deeper green (by TOD.bright)
  const FIELD_DAY = [2.1, 1.75, 3.2], FIELD_DIM = [1.42, 1.47, 1.74];
  // the same painting on the coast's green slope and the cherry avenue's lawns, in their paintings' colours on a bright day
  // (CIELAB ΔE of the median grass at noon: the coast's slope 2.7–9.5, was 8.6–15.7; the avenue's lawns in the sun
  // 1.5–5.1, were 9.6–18.4); otherwise about the old procedural grass's colours
  const COAST_DAY = [0.95, 1.05, 1.8], COAST_DIM = [0.91, 1.34, 1.2], SAK_DAY = [1.88, 1.28, 2.0], SAK_DIM = [1.97, 1.54, 1.62];
  // (step 27: the coast's slope in the sun the painting's bright yellow-lime, (151, 194, 52) in the audit's box, where it was a
  // deeper green; its shade a mid green under the trees as painted (U.uCoFill: more of the sky's light in it), where it was
  // near-black. The Bosphorus's gardens keep the coast's old day tint: BOS_DAY)
  const COAST_DAY2 = [1.58, 1.16, 1.75], BOS_DAY = COAST_DAY, CO_FILL = [1.3, 1.1, 0.7];
  // …and under a clear sky at golden hour, sunset and night, nearer the paintings repainted at those hours (ref/tod/: a
  // warm gold-green at golden hour, a darker green going mauve at sunset, a moonlit blue-green at night, where the old deeper
  // green turned a saturated grass-green under the moon); grey skies keep the old tints. (c: the country's, co: the coast's,
  // sa: the avenue's)
  // (bo: the Bosphorus's gardens and hill: the coast's by day; in the evening and at night darker and less blue than the coast's
  // slope, as the concept repainted at those hours (ref/tod/bosphorus_*.png) has its hillside: its steep banks face the road)
  const FT = (c, co, sa, bo) => ({ c, co, sa, bo });
  const F_DAY = FT([...FIELD_DAY], [...COAST_DAY], [...SAK_DAY], [...COAST_DAY]), F_GOLD = FT([2.2, 1.02, 3.6], [2.51, 1.25, 3.05], [3.4, 1.62, 3.61], [1.45, 1.0, 1.9]); // (Audit 2: was [3.8, 1.6, 3.2], [3.4, 2.0, 3.0], [7.0, 4.6, 2.6])
  const F_SUNSET = FT([2.3, 1.4, 5.6], [0.62, 0.85, 4.0], [2.6, 2.3, 10.0], [0.65, 0.5, 1.15]), F_NIGHT = FT([3.7, 2.4, 9.7], [2.8, 2.0, 7.2], [6.0, 3.25, 6.7], [0.55, 0.55, 1.1]); // (step 30: refitted on the night repaints, ~/cdtest/s30/tools/fit.py, with its moon's softer shadows: was [2.6, 1.8, 6.0], [5.5, 3.0, 8.0], [4.0, 2.6, 6.0])
  const FIELD_T = todTones([[0, F_NIGHT], [0.2, mixTones(F_NIGHT, F_SUNSET, 0.3)], [0.245, mixTones(F_SUNSET, F_GOLD, 0.4)], [0.3, F_DAY], [0.62, F_DAY], [0.7, F_GOLD], [0.75, F_SUNSET], [0.765, mixTones(F_SUNSET, F_NIGHT, 0.25)], [0.8, mixTones(F_SUNSET, F_NIGHT, 0.55)], [0.86, F_NIGHT], [1, F_NIGHT]]);
  { // the fields: the painted meadow once its texture is in (the country's ground variants then read it), else the paddies
    const fa = await fieldLoad;
    if (fa) {
      // (the fields are seen almost edge-on: 16× anisotropic filtering on desktops; on phones 4× looked the same)
      fa.tex.anisotropy = Math.min(quality === 'high' ? 16 : 4, renderer.capabilities.getMaxAnisotropy()); FIELD.tex = fa.tex;
      FIELD.uFieldK.value.set(1 / fa.tile[0], 1 / fa.tile[1]); FIELD.uFieldM.value.set(...fa.mean);
    }
  }
  const path = new Path();
  // the coast's water along its sea wall (its waves and foam) and the surf over the tetrapods: a lighter lace, and fewer
  // spray bursts and droplets, on phones
  M.shore = shoreMaterial(quality !== 'high'); M.surf = surfMaterial(); SURF.n = quality === 'high' ? 8 : 4; SURF.drops = quality === 'high' ? 4 : 2;
  M.tetra = tetraMaterial(SHORE_PHASE, quality !== 'high'); // (the tetrapods' soft concrete, its foam in time with the waves; lighter on phones)
  M.bark = barkMaterial(quality !== 'high'); // (the painted trees' smooth bark; no lenticels on phones)
  const riverMat = riverMaterial();
  // the country meadow's blades (before the world: its materials then sort ahead of the ground's, which they hide)
  const grass = makeGrass(quality, QS.has('grass') ? QS.get('grass').split(',').map(Number) : null); for (const m of grass.meshes) scene.add(m);
  const world = new World(scene, path, M, riverMat);
  const sky = makeSky(); scene.add(sky);
  const mountains = makeMountains(); scene.add(mountains.group);
  const sea = makeSea(quality !== 'high'); scene.add(sea.mesh); // (phones: lighter painted waves, as the shore's lace)
  const car = makeCar(); car.group.rotation.order = 'YXZ'; scene.add(car.group);
  car.group.traverse(o => { o.userData.car = true; }); // casts into its own shadow map only
  const parts = makeParticles(M.glowTex); parts.group.forEach(o => scene.add(o));
  car.initGlow(); // (step 30: the tail lamps' glow on the road at night; made after the particles, whose seeded starts it would move)
  // anti-aliasing: MSAA on desktop; FXAA in the grade pass on phones and in the X embed (MSAA's 2× buffer and resolve cost
  // 2–5 ms a frame at phone resolution on a mobile-class GPU — most in foliage); none at low quality. ?aa=msaa|fxaa|none
  const AA = QS.get('aa') || (quality === 'high' ? 'msaa' : quality === 'mid' ? 'fxaa' : 'none');
  // bloom: the desktop's UnrealBloomPass; on phones and in the X embed a lighter one with the same glow (post.js LiteBloomPass)
  const post = makePost(renderer, scene, camera, { msaa: AA === 'msaa' ? (quality === 'high' ? 4 : 2) : 0, fxaa: AA === 'fxaa', lite: quality !== 'high' });
  U.uReflTex.value = post.refl.rt.texture;
  // the cumulus (painted or procedural) and the painted horizon: made once the road is built and the light prepared
  // (below), so their downloads overlap that work
  let pclouds = null, clouds = null, band = null, bandTr = null, balloons = null, bandNear = -1, realSky = null; // (bandNear: step 28, below; realSky: step 35R)
  const hz = new THREE.Vector3(), camFlat = new THREE.Vector3(), REFL = QS.get('refl') || 'auto';
  const BACKLIT_K = QS.has('backlit') ? parseFloat(QS.get('backlit')) : 1; // (test hook)
  // the cherry blossom's shade tint (materials.js makeGhibliLeaf): a bright rose-magenta on a bright day (the shaded
  // undersides of the crowns stay a glowing pink, as in the painting), and a little pink otherwise; the avenue's wet road
  const BL_SHADE_DAY = [7.25, 3.3, 2.45], /* (step 26: a little less red for the new canopy, was 7.5, 3, 2.3) */ BL_SHADE_DIM = [1.7, 1.15, 1.0], SAK_WET = 0.7;
  // …and under a clear sky at golden hour, sunset and night, as the avenue painted at those hours (ref/tod/sakura_*.png):
  // the shaded blossom a warm pink at golden hour, a rosy mauve at sunset, and at night pale lavender in the moonlight (it
  // went a near-black purple)
  const BL_DAY = { b: [...BL_SHADE_DAY] }; // (its daytime key: kept as the old tint, deeper by TOD.warm, each frame)
  // the broadleaf crowns' leaves by the time of day (materials.js uGhTint; read against the coast painting repainted at those
  // hours: darker at golden hour and sunset, a little bluer at night)
  const GH_D = { c: [1, 1, 1] }, GH_G = { c: [0.9, 0.69, 1.11] } /* (Audit 2: was [0.78, 0.82, 1.15]) */, GH_S = { c: [0.52, 0.56, 1.3] }, GH_N = { c: [1.64, 1.56, 2.95] }; // (step 30: was [1.25, 1.9, 2.2])
  const GH_T = todTones([[0, GH_N], [0.2, mixTones(GH_N, GH_S, 0.3)], [0.245, mixTones(GH_S, GH_G, 0.4)], [0.3, GH_D], [0.62, GH_D], [0.7, GH_G], [0.75, GH_S], [0.765, mixTones(GH_S, GH_N, 0.25)], [0.8, mixTones(GH_S, GH_N, 0.55)], [0.86, GH_N], [1, GH_N]]);
  // …and the Bosphorus's (W2), as its concept repainted at those hours (ref/tod/bosphorus_*.png) has its gardens' trees: a deep
  // olive at golden hour, nearly black-green against the sunset, a dark moonlit blue-green at night (the coast's moonlit teal
  // read far too light on its hillside, which faces the road)
  const GH_TR = todTones([[0, { c: [0.5, 0.72, 1.0] }], [0.2, { c: [0.5, 0.62, 0.95] }], [0.245, { c: [0.6, 0.6, 0.9] }], [0.3, GH_D], [0.62, GH_D], [0.7, { c: [0.66, 0.68, 0.85] }], [0.75, { c: [0.42, 0.42, 0.72] }], [0.765, { c: [0.44, 0.48, 0.8] }], [0.8, { c: [0.46, 0.56, 0.88] }], [0.86, { c: [0.5, 0.72, 1.0] }], [1, { c: [0.5, 0.72, 1.0] }]]);
  const BL_T = todTones([[0, { b: [21, 17.6, 5.5] }], [0.2, { b: [16, 12, 5.5] }], [0.245, { b: [7, 4.6, 3] }], [0.3, BL_DAY], [0.62, BL_DAY], [0.7, { b: [5.63, 2.68, 1.09] }] /* (Audit 2: was [7.5, 5, 2.3]) */, [0.75, { b: [4.2, 3.0, 2.6] }], [0.765, { b: [8, 6.5, 3.8] }], [0.8, { b: [14, 11, 5] }], [0.86, { b: [21, 17.6, 5.5] }], [1, { b: [21, 17.6, 5.5] }]]); // (step 30: the night's was [22, 16, 6])
  // the tetrapods' tones in coast.png (sRGB, by lightness): its deep blue (creases, the wet band), blue-grey shade, neutral
  // middle and warm light grey, and the white of its foam lit and in its light-blue shade
  // …and at golden hour, sunset and night from the coast painting repainted at those hours (ref/tod/; the same pixels'
  // lightness percentiles, ~/cdtest/tod/tools/props.py): golden-lit concrete, dark mauve heaps with a rosy rim at sunset,
  // moonlit blue-grey at night; the foam as the painted sea's
  const TP_DAY = { d: [57, 76, 94], s: [82, 96, 114], m: [156, 151, 148], l: [207, 197, 189], fl: [246, 251, 254], fs: [160, 205, 240] };
  const TP_GOLD = { d: [77, 65, 62], s: [93, 73, 69], m: [160, 111, 81], l: [209, 153, 107], fl: [250, 223, 177], fs: [182, 164, 157] };
  const TP_SUNSET = { d: [42, 33, 47], s: [56, 41, 56], m: [74, 52, 68], l: [124, 80, 90], fl: [247, 180, 162], fs: [177, 122, 140] };
  const TP_NIGHT = { d: [22, 30, 38], s: [30, 40, 48], m: [36, 48, 58], l: [52, 64, 76], fl: [133, 172, 202], fs: [70, 105, 140] }; // (step 30: darker, as the night's softer moon shadows put more of them in the lit tones: was d [30, 38, 48], s [42, 52, 64], m [56, 68, 82], l [84, 98, 116])
  const TP_N = ['d', 's', 'm', 'l', 'fl', 'fs'], TP_U = [U.uTpD.value, U.uTpS.value, U.uTpM.value, U.uTpL.value, U.uTpFL.value, U.uTpFS.value];
  // the bark's tones (sRGB), measured in the paintings: the cherries' shade, dark body and warm lit edge (sakura.png), and
  // the broadleaf trees' (coast.png); and at golden hour, sunset and night (ref/tod/, as the tetrapods')
  const BK_DAY = { s: [38, 23, 16], m: [54, 34, 25], l: [104, 70, 48], s2: [60, 50, 37], m2: [112, 90, 65], l2: [164, 126, 86] };
  const BK_GOLD = { s: [41, 24, 18], m: [51, 29, 20], l: [100, 58, 34], s2: [81, 43, 24], m2: [106, 61, 36], l2: [150, 95, 50] };
  const BK_SUNSET = { s: [26, 18, 22], m: [34, 22, 26], l: [72, 42, 42], s2: [55, 32, 35], m2: [80, 45, 45], l2: [132, 70, 50] };
  const BK_NIGHT = { s: [14, 15, 22], m: [20, 22, 30], l: [40, 48, 66], s2: [30, 32, 38], m2: [42, 44, 52], l2: [70, 78, 95] };
  const BK_N = ['s', 'm', 'l', 's2', 'm2', 'l2'], BK_U = [U.uBkS.value, U.uBkM.value, U.uBkL.value, U.uBkS2.value, U.uBkM2.value, U.uBkL2.value];
  const todKeys = (N, S, D, G) => todTones([[0, N], [0.2, mixTones(N, S, 0.3)], [0.245, mixTones(S, G, 0.4)], [0.3, D], [0.62, D], [0.7, G], [0.75, S], [0.765, mixTones(S, N, 0.25)], [0.8, mixTones(S, N, 0.55)], [0.86, N], [1, N]]);
  // the coast's long grass by the road (step 27): a deeper green than the slope above it, as painted, by the hour (a factor on its albedo,
  // materials.js uCoVerge): by day and at night as the painting and its night repaint have it, darker and less yellow at golden hour, as it
  // was at sunset (ref/tod/coast_*.png); grey skies keep the old verge
  const CV_T = todKeys({ v: [0.44, 0.52, 0.73] } /* (step 30: was [0.3, 0.5, 0.65]) */, { v: [1, 1, 1] }, { v: [0.4, 0.62, 0.95] }, { v: [0.125, 0.143, 0.873] }); // (Audit 2: golden was [0.3, 0.35, 0.6])
  // (step 28) the country's verge banks' grass by the hour (materials.js M.bank, U.uBankT: a factor on its green texels' albedo; 1 on a
  // bright day), read against the painting's evening repaints (ref/tod/country_*.png: the verge a dark olive in the low sun's shade at
  // golden hour, a dusky mauve at sunset, a deep teal under the moon); grey skies keep 1
  const BKV_T = todKeys({ v: [0.8, 0.92, 2.07] } /* (step 30: was [0.62, 0.8, 1.9]) */, { v: [0.52, 0.6, 1.6] }, { v: [1, 1, 1] }, { v: [0.33, 0.26, 1.09] }); // (Audit 2: golden was [0.34, 0.3, 1.0])
  const TP_T = todKeys(TP_NIGHT, TP_SUNSET, TP_DAY, TP_GOLD), BK_T = todKeys(BK_NIGHT, BK_SUNSET, BK_DAY, BK_GOLD);
  // (step 35a) the Galata Bridge's painted fishermen by the hour under a clear sky (materials.js U.uFishT, a factor on the painting's colours):
  // by day as painted; a little warmer at golden hour, darker and mauve against the sunset, at night dark blue figures against the lit city
  // (their side towards us in shade whenever we look into a low sun or moon: their normal leans towards the eye); grey skies keep 1
  const FISH_T = todKeys({ v: [0.5, 0.55, 0.72] }, { v: [0.78, 0.66, 0.78] }, { v: [1, 1, 1] }, { v: [1.0, 0.93, 0.86] });
  // …and the rim of light along their edges towards a low sun beyond them (linear light, materials.js U.uFishRim): none by day, a warm gold at
  // golden hour, a rose-orange at sunset, as anime backlights figures against an evening sky; none at night (under the moon it read as a white
  // sticker's outline: the night's figures are dark against the lit city)
  const FISH_RIM = todKeys({ v: [0, 0, 0] }, { v: [1.05, 0.5, 0.36] }, { v: [0, 0, 0] }, { v: [1.2, 0.8, 0.43] });
  // Cappadocia's fairy chimneys (W5: materials.js tuffMaterial) under a clear sky: their tones (sRGB) in its concept painting
  // (ref/world/cappadocia_uchisar.png: the cones' mauve-brown shade, ochre middle and warm sandy light, the pale cream tuff at their
  // feet in the light) and in its repaints at golden hour, sunset and night (ref/tod/uchisar_*.png)
  const TF_DAY = { s: [70, 57, 54], m: [144, 106, 82], l: [226, 172, 126], p: [238, 211, 181] };
  const TF_GOLD = { s: [60, 39, 34], m: [140, 84, 52], l: [200, 120, 70], p: [233, 167, 116] };
  const TF_SUNSET = { s: [42, 29, 37], m: [80, 48, 52], l: [116, 66, 66], p: [130, 84, 96] };
  const TF_NIGHT = { s: [17, 23, 34], m: [38, 48, 66], l: [58, 75, 98], p: [88, 114, 146] };
  const TF_N = ['s', 'm', 'l', 'p'], TF_U = [U.uTfS.value, U.uTfM.value, U.uTfL.value, U.uTfP.value], TF_T = todKeys(TF_NIGHT, TF_SUNSET, TF_DAY, TF_GOLD);
  // …and Paşabağ's (W6), as its concept paints them (ref/world/cappadocia_pasabag.png: the cream tuff's blue-grey shade, its warm
  // middle and peach-cream light, its pale foot; their dark basalt caps' share of those: c, linear) and its repaints (ref/tod/pasabag_*)
  const TFP_DAY = { s: [76, 78, 90], m: [186, 158, 124], l: [244, 220, 182], p: [240, 222, 190], c: [0.31, 0.31, 0.38] };
  const TFP_GOLD = { s: [84, 66, 62], m: [172, 124, 82], l: [245, 196, 126], p: [240, 192, 132], c: [0.42, 0.36, 0.33] };
  const TFP_SUNSET = { s: [96, 58, 70], m: [130, 78, 88], l: [188, 116, 122], p: [176, 108, 116], c: [0.45, 0.4, 0.45] };
  const TFP_NIGHT = { s: [18, 28, 42], m: [34, 45, 63], l: [64, 78, 99], p: [72, 88, 110], c: [0.38, 0.42, 0.5] };
  const TFP_U = [U.uTfS2.value, U.uTfM2.value, U.uTfL2.value, U.uTfP2.value], TFP_T = todKeys(TFP_NIGHT, TFP_SUNSET, TFP_DAY, TFP_GOLD);
  // …and its ground's albedo (materials.js uchGround, linear: the sandy shoulder and plain, the dry grass, the pale tuff), lit by
  // the scene, by the time of day under a clear sky (grey skies: the day's)
  const UG_DAY = { s: [0.52, 0.43, 0.38], g: [0.16, 0.115, 0.075], t: [0.95, 0.84, 0.74] };
  const UG_T = todKeys(UG_DAY, UG_DAY, UG_DAY, UG_DAY);
  // …and Paşabağ's (W6: its grey gravel shoulder, its golden dry grass, its pale tuff; c: its tall grass cards' tint, materials.js
  // makePasGrass), at golden hour, sunset and night as its concept repainted then has them (ref/tod/pasabag_*.png: the grass deep gold,
  // then a dusky mauve-gold, then a moonlit blue-grey): over 1 where the scene's light at that hour is too dim or too red for it
  const PG_DAY = { s: [0.4, 0.36, 0.33], g: [0.4, 0.3, 0.17], t: [0.92, 0.84, 0.72], c: [1, 1, 1] };
  const PG_GOLD = { s: [0.42, 0.36, 0.32], g: [0.46, 0.34, 0.22], t: [0.92, 0.82, 0.7], c: [1, 1, 1.25] };
  const PG_SUNSET = { s: [0.5, 0.45, 0.42], g: [0.42, 0.32, 0.26], t: [0.9, 0.8, 0.76], c: [0.9, 1.0, 1.25] };
  const PG_NIGHT = { s: [0.4, 0.38, 0.33], g: [0.5, 0.46, 0.36], t: [0.6, 0.56, 0.52], c: [1.2, 1.3, 1.35] };
  const PG_T = todKeys(PG_NIGHT, PG_SUNSET, PG_DAY, PG_GOLD);
  // (…and its zenith under a clear sky, display sRGB: the concept's deep ultramarine by day, the repaints' at golden hour, sunset, night)
  const PAS_Z = todKeys({ z: [44, 70, 96] }, { z: [48, 90, 140] }, { z: [51, 73, 122] }, { z: [32, 58, 116] }), pasZen = new THREE.Color();
  // (…and its asphalt's tint near and far on top of the painted road's, by the hour: the concept's mid grey, the repaints' muted mauve
  // grey at sunset and blue-grey at night)
  const PAS_R = todKeys({ n: [1.6, 1.5, 1.05], f: [1.2, 1.4, 1.3] }, { n: [2.4, 2.4, 1.0], f: [1.0, 1.2, 1.1] }, { n: [0.96, 0.9, 0.74], f: [0.78, 0.72, 0.68] }, { n: [0.96, 0.9, 0.8], f: [0.85, 0.8, 0.75] });
  // the coast's and the country's asphalt (materials.js roadCol): its tint near the eye (n) and from ~22 m on (f), read
  // against coast.png and country.png (a cool blue-grey, darker than the old warm grey near the car: CIELAB L* 43–51 there,
  // paler and bluer with distance: 56–60 at 15–25 m, 64 beyond) and the paintings repainted at golden hour and sunset;
  // the night keeps the old asphalt (the headlights' and lamps' pools light it)
  const R_DAY = { n: [0.46, 0.53, 0.68], f: [0.95, 1.05, 1.3] }, R_GOLD = { n: [0.55, 0.55, 0.7], f: [0.85, 0.62, 0.75] };
  const R_SUNSET = { n: [0.4, 0.8, 1.2], f: [1.1, 1.5, 1.4] }, R_NIGHT = { n: [1, 1, 1], f: [1, 1, 1] };
  const ROAD_T = todKeys(R_NIGHT, R_SUNSET, R_DAY, R_GOLD), GAL_RF = [1.4, 1.35, 1.25], galRF = new THREE.Vector3(); // (the Galata Bridge's far road: below)
  // (…and the cherry avenue's, step 26, on top of those, read against sakura.png and its repaints: by day its wet road's
  // violet-grey near the car (the sunlit road ΔE ~3 there, was 19–23 under the paler canopy's sparser shadow), deeper and
  // bluer ahead; at golden hour and sunset a little warmer and greener than the coast's (most of the near road lies in long
  // shadows then, and the far road is the wet mirror's: the tint, on the sunlight only, can do little there); the night as
  // the coast's, the old road)
  const SR_DAY = { n: [1, 0.75, 0.92], f: [0.4, 0.53, 0.88] }, SR_GOLD = { n: [0.88, 1, 1.05], f: [0.88, 1, 1.05] };
  const SR_SUNSET = { n: [0.85, 1.4, 1.25], f: [1, 1, 1] }, SR_NIGHT = { n: [1, 1, 1], f: [1, 1, 1] }, SAK_R = todKeys(SR_NIGHT, SR_SUNSET, SR_DAY, SR_GOLD);
  const GAL_ZEN = new THREE.Color('#385a92'); // (the Galata Bridge's zenith on a bright day: below)
  // (Cappadocia's, W5: its concept's deep, slightly greyed azure over the steppe, and its asphalt's tint on top of the painted
  // road's, near and far: below)
  const UCH = { zen: new THREE.Color('#2f4f86'), rn: [0.85, 0.74, 0.66], rf: [0.85, 0.74, 0.68] }, uchRT = new THREE.Vector3();
  // the painter's fill in the car's shade (car.js; linear light): the mean of the paintings' cars (city, coast, country; the
  // avenue's is another paint) at noon and repainted at golden hour, sunset and night (ref/tod/), their hatch under the
  // window and beside the plate, on our paint and the game's grade at each hour (~/cdtest/car22/tools/fitfill.py)
  const CF_N = { f: [0.28, 0.48, 0.69] } /* (step 30: was [0.2, 0.32, 0.55]) */, CF_T = todKeys(CF_N, { f: [0.84, 0.40, 0.59] }, { f: [1.04, 1.28, 1.59] }, { f: [0.65, 0.34, 0.54] });
  // the cherry blossom's rose (m, sRGB; materials.js uBlMid) and where its pale petal tips begin on the atlas's key (w;
  // higher, more of each flower keeps the rose): on a bright day the painting's (its crowns' pink pixels: CIELAB L*
  // median 57, three quarters under 69; with the old ramp ours were 64–68 and 77–78), the old ramp at golden hour,
  // sunset and night (their tones were read against ref/tod/ with it)
  // (Audit 2: at golden hour the canopy as its repaint has it, mostly a deep salmon-rose against the low sun with peach-lit edges, ref/tod/
  // sakura_golden.png (it was a pale peach: median ΔE 31); its petal tips (t) by the hour too, so the lit edges darken with the rest)
  const BLM_GOLD = { m: [121, 65, 119], w: [0.3, 0, 0], t: [155, 163, 196] };
  const BLM_OLD = { m: [205, 105, 150], w: [0.3, 0, 0], t: [255, 232, 242] }, BLM_DAY = { m: [186, 91, 135], w: [0.47, 0, 0], t: [255, 232, 242] }, /* (step 26: a little less saturated for the new canopy, was 188, 88, 132) */ BLM_NIGHT = { m: [164, 89, 117], w: [0.3, 0, 0], t: [235, 211, 222] } /* (step 30: the repaint's dusky moonlit pink) */, BLM_T = todKeys(BLM_NIGHT, BLM_OLD, BLM_DAY, BLM_GOLD), blMid = new THREE.Color(), blTip = new THREE.Color();
  // (Audit 2) the evening sky under a clear sky (sky.js uEve), as all seven paintings repainted at golden hour and sunset have it
  // (ref/tod/: their upper sky's rows, ~/cdtest/gap2): a deep steel blue from ~21° up to the top of the frame (z), a pale blue-grey band
  // ~7° up (m), the warm colour only along the horizon (h); blue-violet over a mauve band at sunset (display sRGB). g: the sun's glow
  // round it (a factor), drawn round the sun lowered to EVE_EL (the paintings' evening sun sits on the horizon; ours stands 19° up at
  // golden hour, its glow washing the frame's upper sky lilac). The day before 0.62 and the night from 0.8 keep their old sky
  const EVE_G = { z: [30, 70, 124], m: [100, 112, 136], h: [235, 190, 150], g: [2.2, 1, 1] }, EVE_S = { z: [60, 70, 122], m: [125, 98, 130], h: [235, 130, 95], g: [2.6, 1, 1] };
  const EVE_T = todTones([[0, EVE_G], [0.7, EVE_G], [0.75, EVE_S], [1, EVE_S]]), EVE_EL = 0.06;
  // (step 30) the night as painted (ref/tod/*_night.png): every night look below is weighted by nightPaint(): the painted look by
  // the weather (paintSky) times the night's own share of the hour, exactly 0 from dawn's end (0.245) to dusk's middle (0.8), so
  // the day, golden hour and sunset keep their pixels. Its sky (sky.js uEve's branch, its tones the night's, display sRGB): the
  // open-sky repaints' navy, (4, 20, 46) from ~29° up, (6, 32, 68) at ~21°, lighter and bluer down to (16, 56, 102) ~7° up (the darkest
  // sixth of each row, away from the moon and the clouds: ~/cdtest/s30/tools/skyrows.py); the moon's disc and halo (c, hl: their
  // radial profile round it, moonprof.py)
  const _moonOld = new THREE.Color();
  const nightOf = t => (t >= 0.5 ? sstep(0.8, 0.86, t) : 1 - sstep(0.2, 0.245, t)), nightPaint = () => paintSky() * nightOf(TOD.t) * st.nightpaint;
  const NSKY_N = { t: [4, 20, 46], z: [6, 32, 68], m: [16, 56, 102], h: [22, 54, 90], c: [222, 238, 246], hl: [150, 182, 205] }, NSKY = todTones([[0, NSKY_N], [1, NSKY_N]]);
  // the night's look by surface (each × the old, by nightPaint()): the asphalt and the pavements' albedo (materials.js uNtRoad, uNtWalk;
  // the night's direct light on the coast's, the country's and the avenue's asphalt as before through ROAD_T and SAK_R), how much of
  // the moon's shadow stays (the repaints show the car's and little else), the lights once they are on (materials.js uLitN: the shops'
  // interiors, the neon, the home windows, the white shop boards: the city's fronts glared, its repaint's street is calm and its neon
  // the brightest thing in it), the headlights (car.js head: their cone's angle, softness, strength × the old, reach and fall-off: the
  // repaints' warm pool round the car's nose); NTZ: a zone's own, blended in by its weight. Fitted on the repaints (~/cdtest/s30/tools)
  // (bloom: its strength × the old: the shops' and the tail lamps' glow spread over their fronts and the rear window)
  const NT = { road: [2.4, 2.5, 1.6], walk: [1.5, 1.6, 1.15], shadow: [0.5], lit: [0.4, 1.0, 0.8, 0.3], head: [0.95, 1.0, 2.2, 28, 2.0], headC: new THREE.Color(1.0, 0.8, 0.52), bloom: [0.5],
    house: [0.45, 0.42, 0.4], // (the painted houses' walls: a fill light at night, linear irradiance: materials.js uHouseFill)
    carD: [5, 5.5, 4.5] }; // (the car's moonlit paint × this: car.js uCarDT, the repaints' pale roof)
  const NTZ = { city: { lit: [0.15, 1.0, 0.3, 0.15], road: [3.5, 3.6, 2.1], shadow: [0.7], bloom: [0.45] }, sakura: { walk: [1.08, 1.18, 0.86], road: [2.6, 3.0, 2.1], house: [0.25, 0.36, 0.33] }, coast: { road: [2.2, 1.9, 1.1], walk: [1.8, 2.0, 1.6] }, snow: { road: [1.25, 1.25, 1.1] } }; // (the snow country's road is packed snow: barely)
  const HEAD_C0 = new THREE.Color(0xfff0d0);
  /** a night tunable's i-th value here (the zones' own blended in by their weights) */
  const ntAt = (wz, key, i) => { let v = NT[key][i]; for (const z in NTZ) { const o = NTZ[z][key]; if (o && wz[z] > 0) v += wz[z] * (o[i] - NT[key][i]); } return v; };
  // the drawn moon's bearing from the road's mean heading (degrees, + left), by zone, as the night repaints frame it: straight
  // ahead over the road in the city, the avenue and the country (and where there is no repaint), over the sea 14–16° left by the
  // coast and the strait, 16° right of Uçhisar's road, 5° left of Paşabağ's; blended by the zones' weights and turned at most
  // MOON_RATE a second (a zone's hand-over turns it slowly)
  const MOON_B = { city: 0, sakura: 0, coast: 14, country: 0, mountain: 0, snow: 0, bosphorus: 16, galata: 16, town: 0, uchisar: -16, pasabag: 5 }, MOON_RATE = 1 * Math.PI / 180;
  const LIGHTS_ON = QS.has('lightson') ? parseFloat(QS.get('lightson')) : -1; // (test hook)
  // the car's painter's sun (CAR_KEY): the real sun pulled round to within KEY_A of the car's heading (see the frame loop)
  const KEY_A = 1.4, carKey = new THREE.Vector3();
  // the sun stands by the road's mean heading over ±SUN_W metres (see the frame loop)
  const SUN_W = 200;
  // (in the Turkish town, W4, its concept painting's sun stands high and ahead to the RIGHT of its street: the left-hand blocks'
  // fronts, their shops and their pavement in the sun, the right-hand ones and their pavement in the right-hand row's shadow,
  // where the paintings' 70° left at noon put the left-hand row's shadow over the left pavement and half the road. Through the
  // middle of the day (the evening keeps the paintings' sun ahead, a little left), by the town's weight, turned at most TOWN_AZR
  // a second, so the shadows never sweep: sunAdj, the turn now)
  // (and in Cappadocia, W5, whose concept paints its sun high and ahead-right too, the glare in the frame's top-right corner, the
  // shadows falling back to the left: uchAz, by its weight, on from the town's without a turn between them)
  const TOWN_AZ = (-35 * Math.PI) / 180, TOWN_AZR = (1.5 * Math.PI) / 180, AZ14 = (14 * Math.PI) / 180, AZ70 = (70 * Math.PI) / 180;
  // (in Cappadocia all day long, as its concept repainted at golden hour, sunset and night keeps it (and the moon) on the right: 40°
  // right through the day, swinging out to 55° at golden hour (lighting the chimneys' sides towards us, as the repaint) and back to
  // 25° as it sets; ~30° right in the morning, over the balloons)
  const uchAz = t => (t < 0.62 ? (t < 0.3 ? lerp(-30, -40, sstep(0.25, 0.3, t)) : -40) : t < 0.7 ? lerp(-40, -55, sstep(0.62, 0.7, t)) : lerp(-55, -25, sstep(0.7, 0.76, t))) * D2R_, D2R_ = Math.PI / 180;
  // (and in Paşabağ, W6, whose concept paints its sun high on the LEFT and a little behind: the van's shadow falling to its right and a
  // little forward, the chimneys' faces towards us lit, their right-hand sides in a blue-grey shade. 110° left of the road through the
  // day; it turns there from Uçhisar's over the PAS_LEAD metres before the hand-over and on through it, at most PAS_AZR a second (150°:
  // ~50 s), so the light is the concept's from the valley's first chimneys)
  // (by the hour as its concept repainted then has it (ref/tod/pasabag_*.png): still on the left at golden hour, low ahead at the road's
  // end at sunset; at night the moon ahead-right (MOON_AZ, 20° left of the sun's line: −32° puts it 20° right))
  const pasAz = t => (t < 0.2 ? -32 : t < 0.27 ? lerp(-32, 100, sstep(0.2, 0.27, t)) : t < 0.62 ? lerp(100, 110, sstep(0.27, 0.33, t)) : t < 0.7 ? lerp(110, 100, sstep(0.62, 0.7, t))
    : t < 0.76 ? lerp(100, 15, sstep(0.7, 0.76, t)) : lerp(15, -32, sstep(0.76, 0.8, t))) * D2R_, PAS_LEAD = 300, PAS_AZR = (3 * Math.PI) / 180;
  const pasW = s => { const w0 = zoneWeight(s, 'pasabag'), wu = zoneWeight(s, 'uchisar'); return wu > 0 ? Math.max(w0, zoneWeight(s + PAS_LEAD, 'pasabag')) : w0; };
  const townTurn = s => { const sb = sunBearing(st.tod), wp = pasW(s); return clamp((sb - AZ14) / (AZ70 - AZ14), 0, 1) * (TOWN_AZ - sb) * zoneWeight(s, 'town') + (uchAz(st.tod) - sb) * Math.min(zoneWeight(s, 'uchisar'), 1 - wp) + (pasAz(st.tod) - sb) * wp; };
  // the painted volumes' keys (materials.js VOL_KEY; see the frame loop): the tetrapods' 110° round from the view's direction,
  // the broadleaf crowns' 150° (against coast.png's crowns, ΔE 17.0 at 110°, 11.1 at 130°, 8.1 at 150°; its tetrapods 6.0
  // at 110°, 10.5 at 130°). (Tried on the props, the guardrail's material: the city's right-hand shops and the avenue's lawn
  // got worse). The cherry canopy's (step 26) 110°: its umbrella crowns are always seen from below, and without a key their
  // undersides were a dark magenta where the painting's are lit pink (the canopy's median ΔE 5.4 → 4.4 against sakura.png;
  // at 150° a hot pink, 13.8; the key failed on the old round crowns)
  const volF = new THREE.Vector3(), VOL_B = (110 * Math.PI) / 180, LEAF_B = (150 * Math.PI) / 180, BL_B = (110 * Math.PI) / 180;
  /** a painter's key: the light L's height, on its side of the view (horizontal forward f), b round from the view's direction */
  const keyAt = (L, f, b, out) => { const hm = Math.hypot(L.x, L.z), sd = L.x * f.z - L.z * f.x < 0 ? -1 : 1, cb = Math.cos(b) * hm, sb = Math.sin(b) * hm * sd;
    return out.set(f.x * cb + f.z * sb, L.y, f.z * cb - f.x * sb).transformDirection(camera.matrixWorldInverse); };
  const glowV = new THREE.Vector3(), HAZE_GLOW = QS.has('haze') ? parseFloat(QS.get('haze')) : 1; // (test hook: ?haze=0 off)
  const CITY_HAZE = 0.0009; // the city's haze thinned on a bright day (exp² density; 0.0022 at dusk, at night and under grey skies)
  const rig = makeCrossingRig(); scene.add(rig.group);
  const train = makeTrain(); scene.add(train.group);
  const weather = makeWeather(QS), rain = makeRain(), snowfall = makeSnow(); scene.add(rain.mesh, snowfall.mesh);
  const spray = makeSpray(); scene.add(spray.mesh); const mirage = makeMirage(); scene.add(mirage.mesh); const sprayAmb = new THREE.Color(), spraySun = new THREE.Color(), sprayTail = new THREE.Vector4();
  const birds = makeBirds(); scene.add(birds.mesh);
  let wet = weather.W.rain;

  // ------------------------------------------------------------ state
  // speed: the zone's cruising speed × mult (0.4 … 5.5, so up to ~190–265 km/h); uHome: the lane the car settles back
  // into when nobody steers — wherever the player last steered it (it used to always drift back to the left lane), measured
  // towards the kerb of the side the traffic keeps to (path.js trafficSide: left in Japan, right in Turkey), so through a
  // border tunnel the car moves over to the other side of the road with the traffic
  const MULT_MIN = 0.4, MULT_MAX = 5.5, SIDE0 = trafficSide(S0) < 0 ? -1 : 1;
  const st = { s: S0, u: 1.65 * SIDE0 * (1 - zoneWeight(S0, 'galata') * clamp((zparam(S0, 'rw') - 3.4) / 1.85, 0, 1)), uHome: 1.65, speed: 0, mult: 1, steer: 0, lastInput: -1e9, tod: clamp(parseFloat(QS.get('t')) || 0.4, 0, 0.999), todPaused: QS.has('freeze'), dist: 0, spray: QS.has('nospray') ? 0 : 1 /* test switch */, grass: 1 /* test switch: the meadow's blades */, pclouds: 1 /* test switch: painted clouds (0: the procedural ones, with ?clouds=both) */, band: 1 /* test switch: the painted horizon (0: the mountain rings) */, waves: 1 /* test switch: the painted sea's waves (0: its flat tones) */, shore: 1 /* test switch: the waves and foam along the sea wall (0: the open sea's colour there) */, surf: 1 /* test switch: the spray over the tetrapods */, tetra: 1 /* test switch: the tetrapods */, bark: 1 /* test switch: the bark's painted tones (0: the old colours, lit) */, trunks: 1 /* test switch: the painted trees' bark (0: hidden) */, todpaint: 1 /* test switch: the painted look at golden hour, sunset and night (0: only on a bright day, as before) */, road: 1 /* test switch: the coast's, the country's and the cherry avenue's painted asphalt (0: the old road; in the avenue's ground it also skips the tint's work) */, carkey: 1 /* test switch: the car lit by the painter's sun (0: by the real sun) */, sunroad: 1 /* test switch: the sun and the moon stand by the road's heading, as in the paintings (0: fixed in the world, as before) */, volkey: 1 /* test switch: the crowns and the tetrapods lit by the painted volumes' key (0: by the real sun) */, shsoft: 1 /* test switch: soft shadow edges near the camera (0: one tap everywhere, as before) */, shfit: 1 /* test switch: the sun's shadow box fitted to what can be seen at a low sun (0: the old square box) */, tuff: 1 /* test switch: Cappadocia's fairy chimneys in their painted tones (0: their own colours, lit) */, slope: 1 /* test switch: the coast's slope in the painting's lime with its painter's fill in the shade (0: as before, step 27) */, bandnear: 1 /* test switch: the country's painted horizon drawn just inside the world's far fade, over the next zone's far slopes (0: as before, step 28) */, banktod: 1 /* test switch: the country's verge banks' grass by the hour (0: lit only), step 28 */, evesky: 1 /* test switch: the painted evening sky (0: the old sky at golden hour and sunset), Audit 2 */, nightpaint: 1 /* test switch: the night as painted (0: as before), step 30 */, rooms: 1 /* test switch: the rooms behind the shop windows (0: their painted glass), step 31 */, tram: 1 /* test switch: the Galata Bridge's tram (0: hidden), step 33 */, fish: 1 /* test switch: the Galata Bridge's painted fishermen (0: hidden; their 3D rods and buckets stay), step 35a */, cam: { low: 1, eye: 2, top: 3, film: 4 }[QS.get('cam')] ?? (EMBED ? 4 : 0) };
  let started = false;
  // (the atlas's world variant and its shadow twin are made, and their programs compiled, at every start: without Turkey's
  // atlas yet, on a stand-in, its textures swapped in when they load (materials.js setWorldTex))
  const STAND_IN = () => { const t = new THREE.DataTexture(new Uint8Array([128, 128, 128, 255]), 1, 1); t.needsUpdate = true; return t; };
  makeAtlasW(M, watlas ? watlas.textures(renderer) : { map: STAND_IN(), emissive: STAND_IN() });
  // (step 31) the rooms behind the painted shop windows: the atlas material's room variant, for the chunks holding painted shop bays,
  // once the rooms are in and the bays wear their paintings (else the windows keep their painted glass). Each bay is the front of a
  // box 3 × 3.6 m across and its depth deep (materials.js makeAtlasRooms); the room sheet uploaded as it is (flipped as it was decoded);
  // the bays' glass a one-channel texture of its own, rows from the bottom (v up)
  // (step 34: and behind the street's procedural shop windows (props.js PROC_ROOMS: a painted bay's rooms each), their glass as the atlas
  // painted it (textures.js SHOP_GLASS: the panes, less what hangs in front of them) laid into the mask's free slots)
  const ANISO = quality === 'high' ? Math.min(4, renderer.capabilities.getMaxAnisotropy()) : 1;
  if (ra && fa) {
    const t = roomTexture(ra.img, ANISO);
    const proc = Object.keys(PROC_ROOMS).filter(n => SHOP_GLASS[n] && ra.cells[PROC_ROOMS[n]] && atlas.has(n)).map(n => { const q = SHOP_GLASS[n], F = p => [p[0] / q.w, p[1] / q.h, p[2] / q.w, p[3] / q.h]; return { name: n, panes: q.panes.map(F), holes: q.holes.map(F) }; });
    const gl = roomGlass(ra.mask, proc), table = [], row = (n, rs) => { const mt = gl.tiles[n]; if (rs && mt && atlas.has(n)) table.push({ cell: atlas.uv(n), a: ra.rooms[rs[0]], b: rs[1] ? ra.rooms[rs[1]] : null, mask: mt.mask, box: mt.box }); };
    for (let i = 0; i < 11; i++) row('shop_p' + i, ra.cells['shop_p' + i]);
    for (const q of proc) row(q.name, ra.cells[PROC_ROOMS[q.name]]);
    makeAtlasRooms(M, roomSet(t, gl.tex, table, { half: [1.5, 1.8, ra.depth / 2], size: ra.size, f: ra.f, e: ra.e, warp: ra.warp }));
  } else if (ra) { ra.img.close(); if (ra.mask) ra.mask.img.close(); }
  // the Bosphorus's city ferry (ferry.js: its painted side is a world atlas cell); where the concept has it at a Turkish start
  let ferry = null;
  if (TR_START) { ferry = makeFerry(M, sea); scene.add(ferry.group, ferry.group2); const z0 = zoneAt(st.s); if (z0 === 'bosphorus' || z0 === 'galata') ferry.opening(path, st.s, z0); }
  // (Cappadocia's fairy chimneys' soft tuff, W5: one of Turkey's programs, made and compiled with them: here at a Turkish start, before
  // the road is built, else in Turkey's lazy load, trLazy. Made after the particles and the ferry: its ids draw random numbers, which
  // made earlier would move every falling leaf of a seeded capture)
  if (TR_START) M.tuff = tuffMaterial(quality !== 'high');
  if (catlas) makeCapAtlas(M, catlas.textures(renderer)); // (…and its atlas's material: textures.js buildCapAtlas)
  if (patlasP) makePasGrass(M, { map: albedoTexture(patlasP, renderer) }); // (…and Paşabağ's tall grass, W6: textures.js buildPasAtlas)
  // (step 32) the chain stores' material (materials.js makeAtlasChain: the atlas's program, their own texture pair), its textures uploaded
  // now; then the konbini and the markets are built as one of the chains (props.js setChains). Made after everything else made at load
  // (their ids draw random numbers: made before the ferry, they moved a Turkish start's seeded capture)
  const chainMat = (A, key) => { const t = A.textures(renderer); renderer.initTexture(t.map); renderer.initTexture(t.emissive); const ch = makeAtlasChain(M, t); M[key] = ch.mat; M[key + 'Depth'] = ch.depth; };
  if (cjAtlas) { chainMat(cjAtlas, 'atlasC'); setChains('jp', true); }
  if (ctAtlas) { chainMat(ctAtlas, 'atlasCT'); setChains('tr', true); }
  // (step 33) the T1 tram over the Galata Bridge (tram.js: its painted texture pair drawn here, the atlas's program): at a Turkish start,
  // made last of all (its ids draw random numbers); a Galata start finds one coming towards us on the far track
  let tram = null;
  if (TR_START) try { tram = await makeTram(M, renderer, HTIER); scene.add(tram.group); if (zoneAt(st.s) === 'galata') tram.opening(path, st.s); } catch (e) { console.warn('tram:', e); tram = null; } // (should it fail: no tram)
  // (step 34) the rooms behind every other shop window that was still a painting, each region's from its own sheet (painted.js
  // loadRoomAtlas: null when it failed, and those windows keep their painted glass): Japan's konbini's (makeChainRooms: the street's room
  // program on the chain material, its stickers kept in front of the room), at a Turkish start the town's (makeAtlasWRooms: the world
  // variant's room program, one of Turkey's) and its chain markets'. Made last (their ids draw random numbers) and warmed up below
  const roomMat = (rt, tx, sn, cells, lo, mk) => { // (a set's material: cells [[atlas cell, the sheet's cell it takes the panes and rooms of, more holes]])
    const S = rt.sets[sn]; if (!S) return null;
    const ok = cells.filter(([c, q]) => atlas.has(c) && S.cells[q] && rt.panes[q]); if (!ok.length) return null;
    const c0 = atlas.uv(ok[0][0]), gl = roomGlass(null, ok.map(([c, q, h]) => ({ name: c, panes: rt.panes[q].panes, holes: [...rt.panes[q].holes, ...(h || [])] })), c0.w, c0.h);
    const table = ok.map(([c, q]) => { const rs = S.cells[q], mt = gl.tiles[c]; return { cell: atlas.uv(c), a: rt.rooms[rs[0]], b: rs[1] ? rt.rooms[rs[1]] : null, mask: mt.mask, box: mt.box }; });
    const m = mk(roomSet(tx(), gl.tex, table, { half: [S.bay[0] / 2, S.bay[1] / 2, rt.depth / 2], size: rt.size, f: rt.f, e: S.e, warp: rt.warp }, lo));
    m.userData.roomTex = [tx(), gl.tex]; return m; // (its textures: uploaded a frame each in Turkey's lazy load)
  };
  const sheetTex = rt => { let t = null; return () => t || (t = roomTexture(rt.img, ANISO)); }; // (uploaded once, shared by the sheet's sets)
  const jpRooms = rt => { // (each chain's konbini bays: the painted bay's panes, less that chain's stickers: textures.js stickerHolesJ)
    const tx = sheetTex(rt), cells = [];
    for (let c = 0; atlas.has('cj' + c + 'W1'); c++) for (const b of ['W1', 'W2', 'D']) { const n = 'cj' + c + b; if (!atlas.has(n)) continue; const cl = atlas.uv(n); cells.push([n, 'pj' + b, stickerHolesJ(cl.w, cl.h, c, b === 'D').map(r => [r[0] / cl.w, r[1] / cl.h, r[2] / cl.w, r[3] / cl.h])]); }
    if (M.atlasC) M.atlasCI = roomMat(rt, tx, 'chains', cells, -0.5, R => makeChainRooms(M, M.atlasC, R));
    if (!M.atlasCI) rt.img.close();
  };
  const trRooms = (rt, wa) => {
    const tx = sheetTex(rt);
    if (wa && wa.town) M.atlasWI = roomMat(rt, tx, 'town', [0, 1, 2, 3, 4, 5, 6].map(i => ['twBay' + i, 'twBay' + i]), 4.5, R => makeAtlasWRooms(M, R));
    if (M.atlasCT) M.atlasCTI = roomMat(rt, tx, 'chains', [['ct0W', 'ptW0'], ['ct0D', 'ptD0'], ['ct1W', 'ptW1'], ['ct1D', 'ptD1']], -0.5, R => makeChainRooms(M, M.atlasCT, R));
    if (!M.atlasWI && !M.atlasCTI) rt.img.close();
  };
  { const rj = await roomJpLoad; if (rj) jpRooms(rj); }
  if (TR_START) { const rt = await roomTrLoad; if (rt) trRooms(rt, watlas); }
  // (step 35a) the Galata Bridge's fishermen as painted figures (fishers.js: one instanced card each, its view picked on the GPU, and the
  // soft contact shadows under them): at a Turkish start made last of all (their ids draw random numbers), before the road is built (its
  // chunks then take the painted figures, else the smooth ones: props.js setFishers); in Turkey's lazy load otherwise
  let fishers = null;
  if (TR_START) { const fa = await fisherLoad; if (fa) try { fishers = makeFishers(fa); scene.add(fishers.mesh, fishers.decal); renderer.initTexture(fishers.tex); } catch (e) { console.warn('fishers:', e); fishers = null; fa.img.close(); } setFishers(fishers ? fa.J : null); }
  // (step 35b) the town's dolmuş as a painted 3D model: its texture pair uploaded and its material made (the atlas's program on its own
  // texture pair: makeAtlasChain, with the car's soft ramp, GRAD_CAR, so its rounded body shades without bands), then the chunks stamp its
  // templates (props.js setDolmus); should it fail, the old one. At a Turkish start made last of all (its ids draw random numbers), before
  // the road is built; in Turkey's lazy load otherwise
  const dolTex = img => { const t = new THREE.Texture(img); t.colorSpace = THREE.SRGBColorSpace; t.flipY = false; t.anisotropy = ANISO; t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter; t.magFilter = THREE.LinearFilter; t.needsUpdate = true; return t; };
  const dolMat = (map, em, d) => { const ch = makeAtlasChain(M, { map, emissive: em }); ch.mat.gradientMap = GRAD_CAR; ch.mat.emissiveIntensity = M.atlas.emissiveIntensity; M.atlasDol = ch.mat; M.atlasDolDepth = ch.depth; setDolmus(d.T); };
  if (TR_START) { const d = await dolLoad; if (d) try { const map = dolTex(d.map), em = dolTex(d.em); renderer.initTexture(map); renderer.initTexture(em); dolMat(map, em, d); } catch (e) { console.warn('dolmus:', e); M.atlasDol = null; setDolmus(null); } }
  // (step 35c) the crossing's train as painted cars: its texture pair uploaded, its material made (the atlas's program on its own texture
  // pair, with a soft ramp of its own, materials.js trainRamp), its cars stamped into one mesh in place of the old boxes (crossing.js paint); should
  // anything fail, the old train. At a Japanese start made last of all (its ids draw random numbers), before the road is built
  const paintTrain = (d, map, em) => { const ch = makeAtlasChain(M, { map, emissive: em }); ch.mat.gradientMap = trainRamp(); ch.mat.emissiveIntensity = M.atlas.emissiveIntensity; train.paint(d, ch.mat, ch.depth); M.train = ch.mat; };
  if (trainLoad) { const d = await trainLoad; if (d) try { const map = dolTex(d.map), em = dolTex(d.em); renderer.initTexture(map); renderer.initTexture(em); paintTrain(d, map, em); } catch (e) { console.warn('train:', e); M.train = null; } }
  // (a Turkish start's: loaded as the drive comes within TR_NEAR of Japan; its textures uploaded a frame apart, then swapped in while no
  // train runs)
  const trainLazy = { started: !!trainLoad, async run(d) {
    const map = dolTex(d.map), em = dolTex(d.em); renderer.initTexture(map); await nextFrame(); renderer.initTexture(em); await nextFrame();
    while (train.st.active) await nextFrame();
    paintTrain(d, map, em);
  } };
  world.trReady = TR_START; // (no chunk of Turkey's, or of a border's, is built before its assets are in: chunks.js)
  status('building the road…');
  await new Promise(r => setTimeout(r, 10));
  // build only the first stretch up-front; the rest streams in while the title screen is up
  const AHEAD = EMBED ? 620 : world.ahead; world.ahead = 260;
  const DETAIL_FAR = QS.has('detail') ? parseFloat(QS.get('detail')) : 380, FAR_LEAF = QS.has('farleaf') ? parseFloat(QS.get('farleaf')) : 540; // see World.lod
  while (world.update(st.s, 1e9)) {}
  world.flush();
  world.ahead = AHEAD;
  // ---- warm up every shader now (behind the title screen) instead of compiling mid-drive: all ground variants
  //      (each zone and each adjacent pair), every material, the hidden effects, and the shadow-pass versions
  {
    status('preparing the light…');
    await new Promise(r => setTimeout(r, 10));
    const warm = new THREE.Group(), tri = new THREE.BufferGeometry();
    tri.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0.01, 0, 0, 0, 0.01, 0], 3));
    tri.setAttribute('normal', new THREE.Float32BufferAttribute([0, 1, 0, 0, 1, 0, 0, 1, 0], 3));
    tri.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 1, 0, 0, 1], 2));
    tri.setAttribute('color', new THREE.Float32BufferAttribute([1, 1, 1, 1, 1, 1, 1, 1, 1], 3));
    // (the water's meshes have no normals, and three compiles a different program without them: they are warmed up on a
    // triangle without normals too, or the coast's water and surf and the rivers compiled when they first came into view)
    const tri0 = new THREE.BufferGeometry(); tri0.setAttribute('position', tri.attributes.position);
    const bare = new Set([M.shore, M.surf, riverMat, ...(fishers ? [fishers.decalMat] : [])]);
    const mats = [M.color, M.atlas, M.atlasW, ...(M.atlasI ? [M.atlasI] : []), ...(M.atlasC ? [M.atlasC] : []), ...(M.atlasCT ? [M.atlasCT] : []), ...[M.atlasCI, M.atlasCTI, M.atlasWI].filter(m => m), M.foliage, M.leaf, ...(M.bank ? [M.bank] : []), M.lamp, M.sig, M.sodium, M.decal, M.pool, M.shore, M.surf, riverMat, M.tetra, M.bark, ...(M.gleaf ? [M.gleaf] : []), ...(M.gblossom ? [M.gblossom] : []), ...(M.tuff ? [M.tuff, M.capAtlas] : []), ...(M.pasGrass ? [M.pasGrass] : []), ...(fishers ? [fishers.mat, fishers.decalMat] : []), ...(M.atlasDol ? [M.atlasDol] : [])];
    for (const zs of zoneSets()) if (TR_START || !trSet(zs)) mats.push(groundMaterialFor(zs)); // (each zone, each pair of neighbours, each border's: Turkey's later if not needed now)
    for (const m of mats) { const o = new THREE.Mesh(bare.has(m) ? tri0 : tri, m); o.castShadow = o.receiveShadow = !bare.has(m); o.frustumCulled = false; if (m === M.gleaf) o.customDepthMaterial = M.gleafDepth; if (m === M.gblossom) o.customDepthMaterial = M.gblossomDepth; if (m === M.atlas || m === M.atlasI) o.customDepthMaterial = M.atlasDepth; if (m === M.atlasW || m === M.atlasWI) o.customDepthMaterial = M.atlasWDepth; if (m === M.atlasC || m === M.atlasCI) o.customDepthMaterial = M.atlasCDepth; if (m === M.atlasCT || m === M.atlasCTI) o.customDepthMaterial = M.atlasCTDepth; if (m === M.color) o.customDepthMaterial = PROP_DEPTH; if (fishers && m === fishers.mat) o.customDepthMaterial = fishers.depth; if (m === M.atlasDol) o.customDepthMaterial = M.atlasDolDepth; warm.add(o); }
    // (the props' shadow-pass twin too, W6: it used to compile only when a real props' mesh stood in the shadow box during the load, and a
    // start in Paşabağ's valley (no poles) met its first props in the city, 20 ms into the drive)
    warm.position.set(0, 0, 0); scene.add(warm);
    sun.target.position.set(0, 0, 0); sun.position.set(0, 150, 60); // so the warm-up meshes sit inside the shadow camera
    const hidden = [rain.mesh, snowfall.mesh, spray.mesh, mirage.mesh, train.group, rig.group, sea.mesh].filter(o => !o.visible);
    for (const o of hidden) o.visible = true;
    grass.warm(true);
    renderer.setRenderTarget(post.composer.readBuffer); // the game draws into the post-processing buffer (linear output)
    renderer.compile(scene, camera);
    renderer.render(scene, camera);              // also compiles the shadow-pass (depth) programs
    renderer.setRenderTarget(null);
    for (const o of hidden) o.visible = false;
    grass.warm(false);
    scene.remove(warm); tri.dispose(); tri0.dispose();
    // and the post passes: bloom is off by day, so its 8 programs used to compile all at once at the first sunset,
    // night or tunnel — a 160 ms freeze here, far longer on a phone
    post.bloom.enabled = post.refl.enabled = true; post.composer.render(0); post.bloom.enabled = post.refl.enabled = false; // (+ the wet-road copy pass)
  }
  { // the cumulus: painted ones when their atlas has loaded, else (or with ?clouds=both, also) the procedural ones; and the
    // painted horizon: far ranges, hills and headlands per zone, in front of the cumulus feet (where it shows, the
    // procedural mountain rings give way: they stay as the fallback, and in any zone without a band). Awaited only now,
    // so their downloads (the largest) overlap the road's build and the warm-up; their programs are compiled and their
    // textures uploaded here, still behind the title screen
    status('painting the sky…');
    const pcAtlas = await pcLoad;
    pclouds = pcAtlas ? makePaintedClouds(pcAtlas, post) : null; if (pclouds) scene.add(pclouds.mesh);
    clouds = !pclouds || CLOUDS === 'both' ? makeClouds(paintClouds(renderer)) : null; if (clouds) scene.add(clouds.group);
    // (the avenue's narrow sky over the road: one tower over it; the city's, a V between its tall blocks: the cumulus either
    // side of it, the blue between, as in the city painting)
    if (pclouds) pclouds.opening = zoneAt(st.s) === 'sakura' ? 'center' : 'flank';
    const bandAtlas = await bandLoad, bandCo = await bandCoLoad, trAtlases = TR_START ? await bandTrLoad : null;
    // (Turkey's band: the same program as Japan's. Without its rows (or until they load) Turkey borrows the coast's far shore)
    band = bandAtlas ? makePaintedBand(bandCo ? [bandAtlas, bandCo] : bandAtlas, post, scene.fog.color, trAlias(trAtlases)) : null; if (band) scene.add(band.mesh);
    // (the coast's far shore by the hour as its repaints have it, step 27 (ref/tod/coast_*.png): olive-gold sunlit ranges at golden
    // hour, dark mauve silhouettes against the sunset, deep navy ones at night; the general band tones had them a cool blue-grey)
    if (band && bandCo) band.tones.coast = todKeys({ shade: [24, 50, 80], mid: [30, 60, 92], lit: [40, 72, 108], ch: [0.12, 0.12, 0.12] }, { shade: [86, 50, 72], mid: [100, 52, 72], lit: [130, 58, 66], ch: [0.15, 0.15, 0.15] },
      { shade: [84, 112, 132], mid: [142, 170, 190], lit: [200, 220, 234], ch: [0.6, 0.6, 0.6] }, { shade: [155, 106, 90], mid: [180, 122, 92], lit: [196, 132, 96], ch: [0.3, 0.3, 0.3] });
    bandTr = makeTrBand(trAtlases);
    if (band && zoneAt(st.s) === 'city') band.hero = 0.5; // (the street's far end: the far city's pale towers in haze, its second painting, not the first's green hill)
    { const ba = TR_START ? await balloonLoad : null; if (ba) { balloons = makeBalloons(ba, post, BALLOONS_N); scene.add(balloons.mesh); balloons.mesh.visible = true; } } // (seen to be compiled)
    renderer.setRenderTarget(post.composer.readBuffer); renderer.compile(scene, camera); renderer.setRenderTarget(null);
    if (balloons) { renderer.initTexture(balloons.mesh.material.uniforms.map.value); balloons.mesh.visible = false; }
    if (pcAtlas) renderer.initTexture(pcAtlas.tex); if (bandAtlas) renderer.initTexture(bandAtlas.tex); if (bandAtlas && bandCo) renderer.initTexture(bandCo.tex); if (trAtlases) for (const a of trAtlases) if (a) renderer.initTexture(a.tex);
    // (step 35R) the real Galata zone's skyline: made last of all (its ids draw random numbers), its programs compiled and its sheet
    // uploaded here; the painted band's Galata row (the concept's old city) gives way to it
    if (TR_START) { const sk = await realSkyLoad; if (sk) try { realSky = makeRealSky(sk, post, scene.fog.color, ANISO); useRealSky(); scene.add(realSky.group); realSky.group.visible = true;
      renderer.setRenderTarget(post.composer.readBuffer); renderer.compile(scene, camera); renderer.setRenderTarget(null); renderer.initTexture(realSky.tex); realSky.group.visible = false; } catch (e) { console.warn('real skyline:', e); realSky = null; } }
  }
  /** (step 35R) the real skyline in: the painted band's Galata row (the concept's old city) gives way to it */
  function useRealSky() { if (bandTr) bandTr.hide.galata = true; if (band) band.hide.galata = true; }
  /** Turkey's zones without a row of their own (their file failed, or isn't in yet) borrow the coast's from Japan's band */
  // (the Turkish town's, W4, borrows Japan's far city in haze)
  // (…and Cappadocia's, W5, the country's far hills)
  function trAlias(tra) { const has = z => !!tra && tra.some(a => a && a.zones[z]), al = {}; for (const z of ['bosphorus', 'galata']) if (!has(z)) al[z] = 'coast'; if (!has('town')) al.town = 'city'; if (!has('uchisar')) al.uchisar = 'country'; if (!has('pasabag')) al.pasabag = 'country'; return Object.keys(al).length ? al : null; }
  /** Turkey's band: the Bosphorus's Asian shore in a light haze, as painted (its houses' windows lit at night), the Galata
   *  Bridge's old city, crisper (its windows too), its row turned down the bridge (galTurn), and the Turkish town's mosque at
   *  the end of its street with the distant town round it (W4), turned down the street the same way; null if no row loaded */
  function makeTrBand(tra) {
    if (!tra || !tra.some(Boolean)) return null;
    // (the town's row takes no lit windows at night: they spangled its mosque's pale stone)
    const b = makePaintedBand(tra, post, scene.fog.color, null, { bosphorus: 0.12, galata: 0.05, town: 0.06, uchisar: 0.03, pasabag: 0.04 }, ['bosphorus', 'galata']); scene.add(b.mesh);
    b.hero = 0.208; // (the Bosphorus Bridge's middle 15° left of ahead, as in the concept painting, when its band first shows)
    b.noSkirt.galata = true; // (the old city's quays crisp at the water's edge, the Golden Horn up to them, as painted)
    // (Paşabağ's tuff hill, W6, the same way: honey-gold at golden hour, rose-gold at sunset, moonlit blue at night: ref/tod/pasabag_*.png)
    b.tones.pasabag = todKeys({ shade: [30, 42, 62], mid: [52, 68, 92], lit: [78, 98, 122], ch: [0.12, 0.12, 0.12] }, { shade: [120, 72, 72], mid: [190, 112, 100], lit: [240, 160, 110], ch: [0.25, 0.25, 0.25] },
      { shade: [84, 112, 132], mid: [142, 170, 190], lit: [200, 220, 234], ch: [0.6, 0.6, 0.6] }, { shade: [150, 110, 80], mid: [214, 167, 111], lit: [236, 190, 134], ch: [0.3, 0.3, 0.3] });
    // (Cappadocia's castle rock and ridges at golden hour, sunset and night as its concept repainted then: ref/tod/uchisar_*.png)
    b.tones.uchisar = todKeys({ shade: [30, 42, 62], mid: [56, 74, 98], lit: [92, 112, 140], ch: [0.12, 0.12, 0.12] }, { shade: [64, 42, 52], mid: [106, 65, 70], lit: [168, 96, 98], ch: [0.25, 0.25, 0.25] },
      { shade: [84, 112, 132], mid: [142, 170, 190], lit: [200, 220, 234], ch: [0.6, 0.6, 0.6] }, { shade: [110, 66, 50], mid: [192, 115, 70], lit: [226, 154, 100], ch: [0.3, 0.3, 0.3] });
    return b;
  }
  // the Galata Bridge's skyline (W3) faces down the bridge, as the concept has it (the great mosque ahead-left, the Galata Tower
  // ahead-right): Turkey's band turns its row to the heading of the bridge in view (straight from its first metre: path.js), once
  // per bridge; and the Turkish town's (W4) down its straight street, the mosque at its end
  const galK = { galata: NaN, town: NaN }, galF = {};
  // (Cappadocia's, W5: its castle rock at the end of its road, whose long bends turn it slowly: its row turned to where the road
  // heads over the next ~800 m, at most UCH_TR a second, so the rock stays at the road's end without ever being seen to slide)
  // (and Paşabağ's, W6: its rounded tuff hill at the end of its road, the same way)
  const UCH_TR = (0.6 * Math.PI) / 180, capHead = { uchisar: NaN, pasabag: NaN };
  function uchTurn(s, dt) {
    for (const zn in capHead) {
      if (!bandTr || bandTr.ahead[zn] === undefined || Math.max(zoneWeight(s, zn), zoneWeight(s + 900, zn)) <= 0) { capHead[zn] = NaN; continue; }
      const tgt = path.meanHeading(s + 450, 400), h = capHead[zn];
      capHead[zn] = h !== h || !started ? tgt : h + clamp(tgt - h, -UCH_TR * dt, UCH_TR * dt);
      bandTr.turnTo(zn, capHead[zn]);
    }
  }
  // the coast's far shore (step 27): its row turned once per coast pass, as the Galata Bridge's (galTurn), so the painting's view
  // across the bay lies where the coast painting has it from the audit place (the chase camera 1100 m into the zone: ref/GAPS.md)
  let coastK = NaN; const coC = {}, coL = {};
  function coastTurn(s) {
    if (!band || band.ahead.coast === undefined) return;
    for (let z = Math.max(0, Math.floor((s - 200) / ZONE_LEN)); z <= Math.floor((s + 700) / ZONE_LEN); z++) {
      if (z === coastK || zoneAt(z * ZONE_LEN + 10) !== 'coast') continue;
      // (the chase camera's own line there: from 6.8 m back, 1.4 m left of the middle, to 22 m ahead, 0.83 m left: RIGS[0] in the left lane)
      path.at(z * ZONE_LEN + 1100 - 6.8, coC); path.at(z * ZONE_LEN + 1100 + 22, coL);
      const dx = coL.x - coL.rx * 0.83 - (coC.x - coC.rx * 1.4), dz = coL.z - coL.rz * 0.83 - (coC.z - coC.rz * 1.4);
      coastK = z; band.turnTo('coast', Math.atan2(dx, dz)); break;
    }
  }
  function galTurn(s) {
    if (!bandTr) return;
    for (const zn of ['galata', 'town']) {
      if (bandTr.ahead[zn] === undefined) continue;
      for (let z = Math.max(0, Math.floor((s - 200) / ZONE_LEN)); z <= Math.floor((s + 700) / ZONE_LEN); z++) {
        if (z === galK[zn] || zoneAt(z * ZONE_LEN + 10) !== zn) continue;
        galK[zn] = z; bandTr.turnTo(zn, path.at(z * ZONE_LEN + 10, galF).h); break;
      }
    }
  }
  // ---- Turkey, loaded in the background (a Japanese start, once the drive comes within TR_NEAR of the border): the downloads,
  // then one piece of main-thread work a frame (the world atlas painted, its two textures and the band's uploaded, the ferry
  // made), then its ground variants compiled off the main thread (KHR_parallel_shader_compile); only then are the chunks
  // round the border built (world.trReady)
  const TRL = { started: TR_START, done: TR_START, t0: 0, steps: [] };
  const nextFrame = () => new Promise(r => requestAnimationFrame(() => r()));
  async function trLazy() {
    TRL.started = true; TRL.t0 = performance.now();
    const step = n => TRL.steps.push([n, Math.round(performance.now() - TRL.t0)]);
    const skl = loadRealSky1(), [trAtlases, th, ta, ba, cta, rtr, fla, dla, sk] = await Promise.all([loadTrBands(), loadTrHouseAtlas(HTIER), loadTownAtlas(HTIER), loadBalloonAtlas(TIER), loadChainAtlas(HTIER, 'tr'), loadRoomAtlas(RTIER, 15000, 'rooms1tr'), loadFisherAtlas(HTIER), loadDolmus(HTIER), skl]); step('loaded');
    await nextFrame();
    const wa = buildWorldAtlas(atlas, HTIER, th, ta); if (wa.trHouses) setTrHouses(th.types, th.extras); if (th) th.img.close(); if (ta) ta.img.close(); step('atlas');
    await nextFrame();
    const ct = buildCapAtlas(atlas, HTIER).textures(renderer); renderer.initTexture(ct.map); renderer.initTexture(ct.emissive); step('cappadocia'); // (Cappadocia's cells, W5)
    await nextFrame();
    const pa = buildPasAtlas(atlas, HTIER), pt = { map: albedoTexture(pa, renderer) }; U.uPasSway.value.set(...pa.sway); renderer.initTexture(pt.map); step('pasabag'); // (…and Paşabağ's, W6)
    await nextFrame();
    warmBare(); step('bare'); // (Cappadocia's bare trees, W5: their crowns are the world atlas's cells)
    await nextFrame();
    const wt = wa.textures(renderer); renderer.initTexture(wt.map); step('map');
    await nextFrame();
    renderer.initTexture(wt.emissive); setWorldTex(wt); step('emissive');
    if (cta) { // (step 32: the town's chain markets: their atlas painted, then its two textures, a frame each)
      await nextFrame(); const A = await chainAtlas(Promise.resolve(cta), 'tr'); step('chains');
      if (A) { await nextFrame(); const t = A.textures(renderer); renderer.initTexture(t.map); await nextFrame(); renderer.initTexture(t.emissive); const ch = makeAtlasChain(M, t); M.atlasCT = ch.mat; M.atlasCTDepth = ch.depth; M.atlasCT.emissiveIntensity = M.atlas.emissiveIntensity; setChains('tr', true); step('chainmaps'); }
    }
    if (rtr) { // (step 34: the town's and its markets' rooms: their sheet uploaded, then each set's glass, a frame each; the town's program below)
      await nextFrame(); trRooms(rtr, wa); const up = new Set();
      for (const m of [M.atlasWI, M.atlasCTI]) if (m) { m.emissiveIntensity = M.atlas.emissiveIntensity; for (const t of m.userData.roomTex) up.add(t); }
      for (const t of up) { await nextFrame(); renderer.initTexture(t); }
      step('rooms');
    }
    await nextFrame();
    for (const a of trAtlases) if (a) { renderer.initTexture(a.tex); await nextFrame(); } // (a texture a frame: each a few tens of ms on a phone)
    bandTr = makeTrBand(trAtlases); if (band) band.alias = trAlias(trAtlases);
    step('band');
    await nextFrame();
    ferry = makeFerry(M, sea); scene.add(ferry.group, ferry.group2); step('ferry');
    await nextFrame(); try { const tr = await makeTram(M, renderer, HTIER, nextFrame); scene.add(tr.group); tram = tr; } catch (e) { console.warn('tram:', e); } step('tram'); // (step 33: the Galata Bridge's tram, its work a frame at a time; should it fail, Turkey loads on without it)
    if (fla) { // (step 35a: the painted fishermen: their texture a frame, their three programs compiled off the main thread, their shadow twin's
      // with the state three gives it in the shadow pass (the card's map, alpha test and both faces, and no fog: the shadow pass draws it in an
      // empty scene, and the scene's fog is part of a program's key): the same program; should it fail, the smooth figures)
      try {
        await nextFrame(); const f = makeFishers(fla); renderer.initTexture(f.tex);
        const fw = new THREE.BufferGeometry(); fw.setAttribute('position', new THREE.Float32BufferAttribute([0, -50, 0, 0.01, -50, 0, 0, -49.99, 0], 3));
        const fw0 = fw.clone(); fw.setAttribute('normal', new THREE.Float32BufferAttribute([0, 1, 0, 0, 1, 0, 0, 1, 0], 3)); fw.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 1, 0, 0, 1], 2));
        Object.assign(f.depth, { map: f.mat.map, alphaTest: f.mat.alphaTest, side: f.mat.shadowSide }); // (as three sets it for the shadow pass)
        for (const [g, m] of [[fw, f.mat], [fw, f.depth], [fw0, f.decalMat]]) {
          await nextFrame(); const o = new THREE.Mesh(g, m); o.receiveShadow = m === f.mat;
          const fog = scene.fog; if (m === f.depth) scene.fog = null; // (its program made now, synchronously: the fog back before anything draws)
          renderer.setRenderTarget(post.composer.readBuffer); const ready = renderer.compileAsync(o, camera, scene); renderer.setRenderTarget(null); scene.fog = fog; await ready;
        }
        fw.dispose(); fw0.dispose(); scene.add(f.mesh, f.decal); fishers = f; setFishers(fla.J);
      } catch (e) { console.warn('fishers:', e); setFishers(null); }
      step('fishers');
    }
    if (dla) { // (step 35b: the town's dolmuş: its two textures a frame each, then its material (the atlas's program: nothing compiles))
      try { await nextFrame(); const map = dolTex(dla.map); renderer.initTexture(map); await nextFrame(); const em = dolTex(dla.em); renderer.initTexture(em); dolMat(map, em, dla); }
      catch (e) { console.warn('dolmus:', e); M.atlasDol = null; setDolmus(null); }
      step('dolmus');
    }
    if (sk) { // (step 35R: the real Galata zone's skyline: its sheet a frame, its two programs compiled off the main thread)
      try {
        await nextFrame(); const rs = makeRealSky(sk, post, scene.fog.color, ANISO); renderer.initTexture(rs.tex); rs.group.visible = true;
        renderer.setRenderTarget(post.composer.readBuffer); const ready = renderer.compileAsync(rs.group, camera, scene); renderer.setRenderTarget(null);
        await ready; rs.group.visible = false; scene.add(rs.group); realSky = rs; useRealSky();
      } catch (e) { console.warn('real skyline:', e); }
      step('realsky');
    }
    if (ba) { // (Cappadocia's balloons, W5: their texture a frame, their program compiled off the main thread)
      await nextFrame(); renderer.initTexture(ba.tex);
      const bl = makeBalloons(ba, post, BALLOONS_N); bl.mesh.visible = true;
      renderer.setRenderTarget(post.composer.readBuffer); const ready = renderer.compileAsync(bl.mesh, camera, scene); renderer.setRenderTarget(null);
      await ready; bl.mesh.visible = false; scene.add(bl.mesh); balloons = bl; step('balloons');
    }
    const warm = new THREE.Group(), tri = new THREE.BufferGeometry();
    tri.setAttribute('position', new THREE.Float32BufferAttribute([0, -50, 0, 0.01, -50, 0, 0, -49.99, 0], 3)); tri.setAttribute('normal', new THREE.Float32BufferAttribute([0, 1, 0, 0, 1, 0, 0, 1, 0], 3));
    // (one ground variant a frame: Turkey's seven since W4, all set up in one frame, made a slow frame on a throttled phone)
    const seen = new Set(); // (Paşabağ's zone sets are drawn by Uçhisar's variants, W6: each compiled once)
    for (const zs of zoneSets()) if (trSet(zs)) {
      const gm = groundMaterialFor(zs); if (seen.has(gm)) continue; seen.add(gm);
      const o = new THREE.Mesh(tri, gm); o.receiveShadow = true; warm.clear(); warm.add(o);
      renderer.setRenderTarget(post.composer.readBuffer); const ready = renderer.compileAsync(warm, camera, scene); renderer.setRenderTarget(null);
      await ready; await nextFrame();
    }
    // (Cappadocia's fairy chimneys' tuff and its atlas's material, W5: on a triangle with the attributes their meshes have, as drawn)
    M.tuff = tuffMaterial(quality !== 'high'); makeCapAtlas(M, ct); makePasGrass(M, pt);
    tri.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 1, 0, 0, 1], 2)); tri.setAttribute('color', new THREE.Float32BufferAttribute([1, 1, 1, 1, 1, 1, 1, 1, 1], 3));
    for (const m of [M.tuff, M.capAtlas, M.pasGrass, ...[M.atlasWI, M.atlasCTI].filter(q => q)]) { // (step 34: and the town's rooms' program)
      const o = new THREE.Mesh(tri, m); o.castShadow = m === M.tuff; o.receiveShadow = true; warm.clear(); warm.add(o);
      renderer.setRenderTarget(post.composer.readBuffer); const ready = renderer.compileAsync(warm, camera, scene); renderer.setRenderTarget(null);
      await ready; await nextFrame();
    }
    tri.dispose(); step('programs');
    world.trReady = true; TRL.done = true;
  }
  // level crossing state
  const X = { k: Math.ceil((st.s - XOFF) / XING), phase: 'idle', raise: 1, decided: false, t2: 0 };

  const f = {}, fc = {}, fl = {}, YAWQ = QS.has('yaw') || QS.get('cam') === 'top'; // (test views looking sideways or down: the meadow isn't culled by width)
  const camPos = new THREE.Vector3(), look = new THREE.Vector3(), tmp = new THREE.Vector3();
  let camInit = false;
  const fwd = new THREE.Vector3(), right = new THREE.Vector3();

  // ------------------------------------------------------------ UI
  const $spd = $('spd'), $dist = $('dist'), $clock = $('clock'), $zone = $('zone'), $start = $('start'), $hint = $('hint');
  let audio = null, curZone = null, zoneTimer = 0, hudT = 0;
  function zoneCard(z) {
    if (!started || z === curZone) return;
    curZone = z;
    $zone.querySelector('.jp').textContent = ZINFO[z].loc; $zone.querySelector('.en').textContent = ZINFO[z].en;
    // (a real place's card credits its map data, step 35R: OpenStreetMap's licence asks for it where its data is shown)
    let src = $zone.querySelector('.src');
    if (!src) { src = document.createElement('div'); src.className = 'src'; src.style.cssText = 'font-size:11px;letter-spacing:.12em;opacity:.8;margin-top:10px'; $zone.appendChild(src); }
    src.textContent = ZINFO[z].real ? 'map data © OpenStreetMap contributors' : '';
    $zone.classList.add('on'); clearTimeout(zoneTimer); zoneTimer = setTimeout(() => $zone.classList.remove('on'), 5200);
  }
  function begin() {
    if (started) return; started = true;
    document.body.classList.remove('pre');
    if (!QS.has('auto')) try { audio = makeAudio(); audio && audio.ac.resume(); } catch (e) { audio = null; }
    $start.style.opacity = 0; setTimeout(() => $start.remove(), 1500);
    if (!EMBED) { $hint.style.opacity = 0.75; setTimeout(() => ($hint.style.opacity = 0), 9000); }
  }
  const keys = {};
  addEventListener('keydown', e => {
    keys[e.key] = true;
    if (e.key === 'm' || e.key === 'M') toggleSound();
    if (e.key === 't' || e.key === 'T') toggleTime();
    if (e.key === 'c' || e.key === 'C') toggleCam();
    if (e.key === 'r' || e.key === 'R') cycleWeather();
    if (!started && (e.key === ' ' || e.key === 'Enter')) begin();
  });
  addEventListener('keyup', e => { keys[e.key] = false; });
  let ptr = null;
  canvas.addEventListener('pointerdown', e => { ptr = { id: e.pointerId, x: e.clientX, y: e.clientY, sy: e.clientY, sc: st.mult }; });
  const dragMult = p => clamp(p.sc * Math.exp(-((p.y - p.sy) / innerHeight) * 3.4), MULT_MIN, MULT_MAX); // half a screen up ≈ ×5.5
  addEventListener('pointermove', e => { if (ptr && e.pointerId === ptr.id) { ptr.x = e.clientX; ptr.y = e.clientY; st.mult = dragMult(ptr); } });
  addEventListener('pointerup', () => { ptr = null; });
  addEventListener('pointercancel', () => { ptr = null; });
  // some in-app webviews (X, Instagram…) never send pointer events — mirror the same steering on touch
  canvas.addEventListener('touchstart', e => { const t = e.changedTouches[0]; ptr = { id: 'touch', x: t.clientX, y: t.clientY, sy: t.clientY, sc: st.mult }; e.preventDefault(); }, { passive: false });
  canvas.addEventListener('touchmove', e => { if (!ptr) return; const t = e.changedTouches[0]; ptr.x = t.clientX; ptr.y = t.clientY; st.mult = dragMult(ptr); e.preventDefault(); }, { passive: false });
  canvas.addEventListener('touchend', () => { ptr = null; });
  canvas.addEventListener('touchcancel', () => { ptr = null; });
  function toggleSound() { if (audio) { audio.toggle(); $('snd').style.opacity = audio.muted ? 0.4 : 1; } }
  function toggleTime() { st.todPaused = !st.todPaused; $('tim').style.opacity = st.todPaused ? 0.4 : 1; }
  const CAM_ORDER = [0, 1, 2, 4], CAM_ICON = { 0: '◐', 1: '◒', 2: '◉', 4: '🎬' };
  function toggleCam() { st.cam = CAM_ORDER[(CAM_ORDER.indexOf(st.cam) + 1) % CAM_ORDER.length]; $('cam').textContent = CAM_ICON[st.cam] || '◐'; if (st.cam === 4) nextShot(); }
  // ---- cinematic camera (mode 4): calm film-like shots with cuts — chase, side tracking, a fixed roadside shot
  //      the car drives past, a high crane shot and eye level
  const CINE = ['chase', 'side', 'road', 'crane', 'eye', 'side', 'road'];
  const cine = { type: 'chase', t: 0, dur: 16, last: '', anchor: null, sideSign: 1 };
  function nextShot() {
    let type; do { type = CINE[Math.floor(Math.random() * CINE.length)]; } while (type === cine.last);
    { const tn = tunnelNear(st.s + 60); if (tn && Math.abs(st.s + 60 - tn.s) < T_RIDGE + 120) type = Math.random() < 0.6 ? 'chase' : 'eye'; }
    Object.assign(cine, { type, last: type, t: 0, dur: 13 + Math.random() * 8, sideSign: Math.random() < 0.5 ? 1 : -1 });
    if (type === 'road') {
      const sA = st.s + 40 + Math.random() * 18, rwA = zparam(sA, 'rw'), sd = Math.random() < 0.6 ? -1 : 1, uA = sd * (rwA + (sd < 0 ? 0.9 : 1.3));
      const fa = path.at(sA, {}), gy = fa.y + groundOffsetMix(sA, uA, fa.y, rwA);
      cine.anchor = { x: fa.x + fa.rx * uA, y: Math.max(gy, fa.y) + 1.05, z: fa.z + fa.rz * uA, s: sA };
    }
    camInit = false;
  }
  const WX_ICON = { auto: '⛅', clear: '☀', cloudy: '☁', rain: '☂' };
  function cycleWeather() { $('wx').textContent = WX_ICON[weather.cycle()]; }
  $('wx').textContent = WX_ICON[weather.W.mode];
  $('cam').textContent = CAM_ICON[st.cam] || '◐'; if (st.cam === 4) nextShot();
  $('wx').onclick = e => { e.stopPropagation(); cycleWeather(); };
  $('snd').onclick = e => { e.stopPropagation(); toggleSound(); };
  $('tim').onclick = e => { e.stopPropagation(); toggleTime(); };
  $('cam').onclick = e => { e.stopPropagation(); toggleCam(); };
  if (!EMBED) { // where to start: the route's regions (path.js) as links on the title card, as ?env=<zone> does
    const pick = document.createElement('div'), cur = REGION[startZone()];
    pick.style.cssText = 'margin-top:18px;display:flex;gap:12px;justify-content:center;font-size:13px;letter-spacing:.12em';
    for (const [reg, label, zone] of [['jp', '日本 · Japan', 'city'], ['tr', 'Türkiye', 'bosphorus']]) {
      const a = document.createElement('a'), q = new URLSearchParams(location.search); q.set('env', zone);
      a.textContent = label; a.href = '?' + q.toString();
      a.style.cssText = `color:#fff;text-decoration:none;padding:5px 14px;border-radius:999px;border:1px solid rgba(255,255,255,${reg === cur ? 0.85 : 0.3});opacity:${reg === cur ? 1 : 0.8}`;
      for (const ev of ['touchstart', 'pointerdown', 'mousedown', 'click']) a.addEventListener(ev, e => e.stopPropagation()); // (not a tap to begin)
      pick.appendChild(a);
    }
    $start.insertBefore(pick, $start.querySelector('.go'));
  }
  // start on whichever of touch / pointer / mouse / click arrives first (deduped)
  let lastTap = 0;
  const tapStart = e => { const n = performance.now(); if (n - lastTap < 120) return; lastTap = n; if (e.cancelable && e.type !== 'click') e.preventDefault(); begin(); };
  for (const ev of ['touchstart', 'pointerdown', 'mousedown', 'click']) $start.addEventListener(ev, tapStart, { passive: false });
  // iOS only unlocks audio on touchend/click — keep nudging the context until it runs
  const unlock = () => { if (audio && audio.ac.state !== 'running') audio.ac.resume(); };
  for (const ev of ['touchend', 'click', 'keydown']) addEventListener(ev, unlock, { passive: true });
  document.addEventListener('visibilitychange', () => { if (!audio) return; document.hidden ? audio.ac.suspend() : audio.ac.resume(); });

  // Resizing clears the canvas, so it only ever happens at the start of a frame, right before we draw —
  // never between frames (that showed a blank flash on phones when the toolbar or orientation changed).
  let needResize = false, lastSize = '', baseFov = 52, fovKick = 0;
  function resize() {
    const w = innerWidth, h = innerHeight, asp = w / h, key = w + 'x' + h + '@' + DPR;
    if (key === lastSize) return;
    lastSize = key;
    renderer.setPixelRatio(DPR); renderer.setSize(w, h, false);
    post.composer.setPixelRatio(DPR); post.composer.setSize(w, h);
    camera.aspect = asp;
    baseFov = asp >= 1 ? 52 : clamp((2 * Math.atan(Math.tan((34 * Math.PI) / 180) / asp) * 180) / Math.PI, 52, 80);
    camera.fov = baseFov + fovKick;
    camera.updateProjectionMatrix();
    post.grade.uniforms.uAspect.value = asp;
    post.grade.uniforms.uTexel.value.set(1 / post.composer.readBuffer.width, 1 / post.composer.readBuffer.height);
    U.uReflRes.value.set(post.composer.readBuffer.width, post.composer.readBuffer.height);
    updatePainted(renderer);
  }
  addEventListener('resize', () => { needResize = true; });
  if (window.visualViewport) visualViewport.addEventListener('resize', () => { needResize = true; });
  resize();

  // ------------------------------------------------------------ quality ladder (remembered between visits)
  let qLevel = 0;
  function stepDown(persist = true) {
    if (DPR > 1.05) { DPR = Math.max(1, DPR - 0.25); needResize = true; }
    else if (bloomAllowed) { bloomAllowed = false; post.bloom.enabled = false; }
    else if (sun.shadow.mapSize.x > 1024) { sun.shadow.mapSize.set(1024, 1024); fitShadowBias(); if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; } }
    else if (world.ahead > 430) world.ahead = 430;
    else return;
    qLevel++;
    if (persist) try { localStorage.setItem('icd-q', String(qLevel)); } catch (e) {}
  }
  try { const saved = parseInt(localStorage.getItem('icd-q') || '0'); if (!QS.has('q')) for (let i = 0; i < Math.min(saved, 6); i++) stepDown(false); qLevel = Math.max(qLevel, saved || 0); } catch (e) {}

  // ------------------------------------------------------------ loop
  let last = performance.now(), t = 0, frames = 0, slowT = 0;
  const day = () => 1 - TOD.night;
  let ftAvg = 0, tunS = 0, carWet = 0;
  const PROF = QS.has('prof') ? (window.__prof = { spikes: [], frames: 0, sum: 0, max: 0, progs: 0, geos: 0, tex: 0, last: null, gpu: 0, gpuN: 0, gpuSum: 0, gpuMax: 0, pend: [] }) : null;
  if (PROF) { PROF.gl = renderer.getContext(); PROF.tq = PROF.gl.getExtension('EXT_disjoint_timer_query_webgl2'); }
  const meteor = { p: -1, a: new THREE.Vector3(), b: new THREE.Vector3(), next: 5 };
  // the car's motion as its suspension feels it (see car.update): sideways / fore-aft acceleration, the road surface, rail jolts
  const CM = { lat: 0, lon: 0, road: 0, jolt: 0, kick: 0, u: st.u, vu: 0, v: 0, s: st.s, yaw: 0, brake: 0, rk: NaN, rb: null };
  const LAMP_NIGHT = new THREE.Color(3.6, 2.8, 1.8); // (the street lamps' night colour: one object, not one per frame)
  /** the light j steps of 0.001 of the day ahead (the hour moving on if `run`, the car `ds` metres further on per step) */
  const lightAhead = (j, run, ds, out) => lightDirAt(st.tod + (run ? j * 0.001 : 0), out, TOD.head === null ? null : path.meanHeading(st.s + j * ds, SUN_W) + st.sunAdj);
  const RAILS = [-2.5335, -1.4665, 1.4665, 2.5335], AXLES = [1.12, -1.12]; // rails of a crossing's two tracks (from sx); axles (from the car's centre)
  const JOINTS = [-24.5, 24.5]; // a river bridge's expansion joints (from its centre, chunks.js placeRiver)
  function frame(now) {
    requestAnimationFrame(frame);
    const ft0 = performance.now();
    if (needResize) { needResize = false; resize(); }
    // never negative: the first frame's timestamp can predate `last` when start-up kept the main thread busy, and a
    // negative step ran the weather backwards (a phantom rain shower and grey sky for the first seconds on slow phones)
    const dt = Math.min(0.05, Math.max(0, (now - last) / 1000)); last = now; t += dt;

    // input
    st.steer = 0;
    if (keys.ArrowLeft || keys.a || keys.A) st.steer = -1;
    if (keys.ArrowRight || keys.d || keys.D) st.steer = 1;
    if (keys.ArrowUp || keys.w || keys.W) st.mult = clamp(st.mult * Math.exp(dt * 0.9), MULT_MIN, MULT_MAX); // ~2 s from cruise to flat out
    if (keys.ArrowDown || keys.s || keys.S) st.mult = clamp(st.mult * Math.exp(-dt * 0.9), MULT_MIN, MULT_MAX);
    if (ptr && Math.abs(ptr.y - ptr.sy) < 30) st.steer = ptr.x < innerWidth / 2 ? -1 : 1;
    const tside = trafficSide(st.s); // (−1 keep left … +1 keep right)
    if (st.steer) { st.lastInput = now; st.uHome = st.u * (tside < 0 ? -1 : 1); }

    // drive (left-hand traffic: we keep to the left lane)
    // ---- level crossing: bells, barriers, a passing train — and we wait patiently at the stop line
    let sx = crossingS(X.k);
    if (st.s - sx > 24) { X.k++; sx = crossingS(X.k); Object.assign(X, { phase: 'idle', raise: 1, decided: false }); }
    const xValid = crossingValid(sx), xDist = sx - st.s;
    if (xValid && !X.decided && xDist < 150) {
      X.decided = true;
      // (a train only when the car can brake gently to the line from its current speed — flat out, the barriers stay up)
      if (xDist > 75 && started && st.speed * st.speed / 2.5 < xDist - 14 && (QS.has('xing') || hash2(X.k, 99) < 0.8)) { X.phase = 'warn'; train.start(sx, hash2(X.k, 7) < 0.5 ? 1 : -1, 16); }
    }
    if (X.phase === 'warn') { X.raise = Math.max(0, X.raise - dt / 6); if (train.st.cleared) { X.phase = 'clear'; X.t2 = 0; } }
    else if (X.phase === 'clear') { X.raise = Math.max(0, X.raise - dt / 6); if ((X.t2 += dt) > 2.2) X.phase = 'raise'; }
    else if (X.phase === 'raise') { X.raise = Math.min(1, X.raise + dt / 5); if (X.raise >= 1) X.phase = 'idle'; }
    const bell = X.phase === 'warn' || X.phase === 'clear' || (X.phase === 'raise' && X.raise < 0.25);
    let target = zparam(st.s, 'speed') * st.mult * (started ? 1 : 0.55);
    if (X.phase !== 'idle' && X.raise < 0.8 && xDist > 0) {
      const d = xDist - 11.2, cap = d > 0 ? Math.sqrt(2 * 1.25 * d) : 0;
      target = Math.min(target, cap); st.speed = Math.min(st.speed, cap);
    }
    if (QS.has('park')) { target = 0; st.speed = 0; } // test hook: hold the car still
    st.speed += (target - st.speed) * Math.min(1, dt * 0.5);
    st.s += st.speed * dt; st.dist += st.speed * dt;
    const rw = zparam(st.s, 'rw');
    if (st.steer) st.u = clamp(st.u + st.steer * dt * 2.4, -rw + 0.85, rw - 0.85);
    // (on the real Galata zone's three lanes, step 35R, the car settles in the middle one, as a calm drive over the bridge takes it)
    else if (now - st.lastInput > 3000) { const g3 = zoneWeight(st.s, 'galata') * clamp((rw - 3.4) / 1.85, 0, 1); st.u += (clamp(st.uHome * tside - 1.65 * tside * g3, -rw + 0.85, rw - 0.85) + Math.sin(t / 11) * 0.1 - st.u) * Math.min(1, dt * 0.9); }

    // time of day (nights pass a little quicker)
    if (!st.todPaused && started) st.tod = (st.tod + (dt / 480) * (TOD.night > 0.5 ? 1.7 : 1)) % 1;
    // the sun and the moon stand by the road (sky.js skyDirs: the sun ahead-left at noon, ahead at sunset, as in the
    // paintings), by its mean heading over ±SUN_W: on top of the hour's, the road's long bends turn the shadows at under
    // 0.3–1.8°/s at cruising speed (95% of the time; 2.3 on the mountain pass; the old sky swept 0.75°/s all day), and the
    // light keeps within 2–7° of its place against the car (95% of the time; 11° on the mountain pass)
    { const tgt = townTurn(st.s), ar = pasW(st.s) > 0 ? PAS_AZR : TOWN_AZR; st.sunAdj = st.sunAdj === undefined || !started ? tgt : st.sunAdj + clamp(tgt - st.sunAdj, -ar * dt, ar * dt); } // (the town's sun, W4; Paşabağ's, W6)
    updateTOD(st.tod, st.sunroad ? path.meanHeading(st.s, SUN_W) + st.sunAdj : null, REGION_KEYS.tr, REGION_KEYS.tr ? regionWeight(st.s, 'tr') : 0); // (a region's own palette: sky.js REGION_KEYS)
    // (over the Golden Horn on a bright day the zenith a deeper, greyer blue, as the Galata Bridge's concept paints its sky (its
    // other concepts' and Japan's paintings' are a brighter azure); by the bridge's weight 150 m on, so it turns as we drive on)
    { const gz = zoneWeight(st.s + 150, 'galata') * TOD.bright; if (gz > 0) TOD.zenith.lerp(GAL_ZEN, gz); }
    // (…and over the Turkish town's street, W4, the concept's brighter azure: a little greener)
    { const tz = zoneWeight(st.s + 150, 'town') * TOD.bright; if (tz > 0) { TOD.zenith.g *= 1 + 0.16 * tz; TOD.zenith.b *= 1 - 0.03 * tz; } }
    { const uz = zoneWeight(st.s + 150, 'uchisar') * TOD.bright; if (uz > 0) TOD.zenith.lerp(UCH.zen, uz); } // (Cappadocia's, W5)
    { const pz = zoneWeight(st.s + 150, 'pasabag') * paintSky(); if (pz > 0) { const z = PAS_Z.at(TOD.t).rgb('z'); TOD.zenith.lerp(pasZen.setRGB(z[0] / 255, z[1] / 255, z[2] / 255, THREE.SRGBColorSpace), pz); } } // (Paşabağ's, W6)
    weather.update(dt);
    const ov = weather.W.ov, rn = weather.W.rain;
    applyWeather(ov, rn);
    wet = clamp(wet + (rn > 0.25 ? dt / 18 : -dt / 120), 0, 1);

    // stream the world
    if (!TRL.started && nextBorderS(st.s) - st.s < TR_NEAR) trLazy().catch(e => { // (should anything fail: its procedural look)
      console.warn('Turkey:', e); try { setWorldTex(buildWorldAtlas(atlas, HTIER, null).textures(renderer)); if (!M.capAtlas) makeCapAtlas(M, buildCapAtlas(atlas, HTIER).textures(renderer)); } catch (e2) {} try { if (!M.pasGrass) { const pa = buildPasAtlas(atlas, HTIER); U.uPasSway.value.set(...pa.sway); makePasGrass(M, { map: albedoTexture(pa, renderer) }); } } catch (e2) {} world.trReady = true; TRL.done = true; });
    // (step 35c) at a Turkish start, Japan's crossing train: loaded once the drive comes within TR_NEAR of the border into Japan, swapped in
    // while none runs (the border's lookup is memoised: nothing allocated a frame)
    if (!trainLazy.started) { const nb = nextBorderS(st.s), bd = nb - st.s < TR_NEAR ? borderNear(nb) : null;
      if (bd && REGION[bd.b] === 'jp') { trainLazy.started = true; loadTrain(HTIER).then(d => d && trainLazy.run(d)).catch(e => { console.warn('train:', e); M.train = null; }); }
    }
    const tw0 = performance.now(); world.update(st.s, started ? 3.5 : 14); const tw1 = performance.now();
    path.at(st.s, f);
    if (Math.abs(f.x - world.origin.x) > 900 || Math.abs(f.z - world.origin.z) > 900) {
      const dx = Math.round(f.x) - world.origin.x, dz = Math.round(f.z) - world.origin.z;
      world.setOrigin(Math.round(f.x), Math.round(f.z));
      camPos.x -= dx; camPos.z -= dz; look.x -= dx; look.z -= dz; parts.shift && parts.shift(dx, dz); birds.shift(dx, dz); spray.shift(dx, dz);
    }
    const ox = world.origin.x, oz = world.origin.z;

    // car
    const slope = (path.at(st.s + 1.5, fl).y - path.at(st.s - 1.5, fc).y) / 3, kap = (fl.h - fc.h) / 3; // kap: curvature, + = bending left
    car.group.position.set(f.x + f.rx * st.u - ox, f.y + 0.01, f.z + f.rz * st.u - oz);
    if (dt > 0) {
      // lane changes ease in and out, the nose pointing where the car is going (it used to snap 3° while a key was held);
      // the body feels the sideways acceleration of curves (v²·κ) and of lane changes, and the fore-aft one of speed changes
      const vu = CM.vu + ((st.u - CM.u) / dt - CM.vu) * Math.min(1, dt * 6), au = (vu - CM.vu) / dt; CM.u = st.u; CM.vu = vu;
      CM.lat = au - st.speed * st.speed * kap;
      CM.lon += ((st.speed - CM.v) / dt - CM.lon) * Math.min(1, dt * 8); CM.v = st.speed;
      // brakes (lights in car.js): on while really slowing down — not just easing off — and while waiting at a crossing
      const waiting = X.phase !== 'idle' && xDist > 0 && xDist < 20 && st.speed < 0.5;
      CM.brake = CM.lon < -0.6 || waiting ? 1 : CM.lon > -0.3 ? 0 : CM.brake;
      CM.yaw = -clamp(Math.atan(vu / Math.max(st.speed, 6)) * 0.8, -0.1, 0.1);
      // the asphalt's gentle undulation (at speed the springs smooth it out), and a jolt per axle per rail at a crossing
      CM.road = 0.004 * Math.sin(st.s * 0.48) + 0.003 * Math.sin(st.s * 0.86 + 1.3); CM.jolt = CM.kick = 0;
      if (xValid) for (let i = 0; i < 4; i++) for (let j = 0; j < 2; j++) {
        const p = sx + RAILS[i] - AXLES[j];
        if (CM.s < p && st.s >= p) { const v = 0.05 + Math.min(st.speed, 25) * 0.004; CM.jolt += v; CM.kick += j ? v * 0.9 : -v * 0.9; if (audio) audio.bump(0.25 + Math.min(st.speed, 25) / 50); }
      }
      { // …and a softer ka-tan over the expansion joints at each end of a river bridge
        const rk = Math.round((st.s - ROFF) / RIV); if (rk !== CM.rk) { CM.rk = rk; CM.rb = riverNear(st.s); } // (looked up once per river)
        const rb = CM.rb;
        if (rb) for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) {
          const p = rb.s + JOINTS[i] - AXLES[j];
          if (CM.s < p && st.s >= p) { const v = 0.035 + Math.min(st.speed, 25) * 0.003; CM.jolt += v; CM.kick += j ? v * 0.9 : -v * 0.9; if (audio) audio.bump(0.2 + Math.min(st.speed, 25) / 60); }
        }
      }
      CM.s = st.s;
    }
    car.group.rotation.set(-Math.atan(slope), f.h + CM.yaw, 0);
    // tunnels: hand the nearest one to the shaders; eyes adapt (exposure) and the headlights come on inside
    const tn = tunnelNear(st.s);
    if (tn && Math.abs(st.s - tn.s) < 700) {
      path.at(tn.s - T_HALF, fl); U.uTunA.value.set(fl.x - ox, fl.y, fl.z - oz);
      path.at(tn.s + T_HALF, fl); U.uTunB.value.set(fl.x - ox, fl.y, fl.z - oz);
      U.uTunR.value = zparam(tn.s, 'rw') + 1.7;
    } else { U.uTunA.value.set(0, -1e4, 0); U.uTunB.value.set(0, -1e4, 0); }
    const inTun = tn && Math.abs(st.s + 1 - tn.s) < T_HALF - 1.5 ? 1 : 0;
    tunS += (inTun - tunS) * Math.min(1, dt * (inTun ? 1.6 : 0.7));
    U.uCarPos.value.set(car.group.position.x + f.fx * 1.7, car.group.position.y + 0.8, car.group.position.z + f.fz * 1.7);
    U.uCarFwd.value.set(f.fx, -0.05, f.fz).normalize(); U.uHead.value = inTun;
    car.update(dt, st.speed, Math.max(TOD.night, tunS), rn, CM, carWet);
    { // (step 30) the headlights' pool as the night repaints paint it: warm, wide and soft round the car's nose (by day, at golden hour,
      // at sunset and in tunnels as before)
      const k = nightPaint(), h = car.head, H = NT.head; h.color.copy(HEAD_C0).lerp(NT.headC, k); h.angle = lerp(0.55, H[0], k); h.penumbra = lerp(0.65, H[1], k); h.intensity *= lerp(1, H[2], k);
      h.distance = lerp(70, H[3], k); h.decay = lerp(1.2, H[4], k); car.roadGlow(k * (1 - tunS) * (1 - carWet)); } // (on a wet road the lamps' reflections take its place)
    rig.update(xValid && xDist > -24 && xDist < 700 ? xingPosts(path, sx) : null, world.origin, X.raise, bell, t);
    train.update(dt, path, world.origin, sstep(0.15, 0.8, TOD.night), zparam(sx, 'rw') + 3.2);

    // camera
    // camera rigs: 0 chase, 1 low "anime layout" angle, 2 eye level with no car (pure background art)
    // (the chase framing of the reference art: close behind the car, a little above its roof, looking level — the horizon
    // near the middle of the frame, half the picture sky; it was 8.2 m back and 3.1 m up, looking down on the car)
    const RIGS = [{ back: 6.8, up: 2.4, ahead: 22, lookY: 2.0, cu: 0.85, lu: 0.5 }, { back: 7.0, up: 1.3, ahead: 26, lookY: 2.9, cu: 0.85, lu: 0.5, side: 1.15 }, { back: -0.6, up: 1.55, ahead: 30, lookY: 2.3, cu: 1, lu: 0.6 },
      { back: 0.01, up: parseFloat(QS.get('top')) || 45, ahead: 0, lookY: 0, cu: 0, lu: 0 }]; // [3] = test-only top-down view
    if (QS.has('rig')) { const [b, u, a, l] = QS.get('rig').split(',').map(Number); Object.assign(RIGS[0], { back: b, up: u, ahead: a, lookY: l }); } // test hook: chase framing
    const lt = new THREE.Vector3();
    let follow = 6, hideCar = st.cam === 2;
    if (st.cam === 4) {
      cine.t += dt;
      { const tn = tunnelNear(st.s + 30); if (tn && Math.abs(st.s + 30 - tn.s) < T_RIDGE + 70 && cine.type !== 'chase' && cine.type !== 'eye') { cine.type = 'chase'; cine.t = 0; cine.dur = 20; camInit = false; } }
      if (cine.t > cine.dur + (cine.type === 'road' ? 8 : 0) || (cine.type === 'road' && cine.anchor && st.s > cine.anchor.s + 24)) nextShot();
      const cp = car.group.position, ty = cine.type;
      if (ty === 'chase' || ty === 'eye') {
        const R = RIGS[ty === 'eye' ? 2 : 0]; hideCar = ty === 'eye';
        path.at(st.s - R.back, fc); path.at(st.s + R.ahead, fl);
        tmp.set(fc.x + fc.rx * st.u * R.cu - ox, fc.y + R.up, fc.z + fc.rz * st.u * R.cu - oz);
        lt.set(fl.x + fl.rx * st.u * R.lu - ox, fl.y + R.lookY, fl.z + fl.rz * st.u * R.lu - oz);
      } else if (ty === 'side') { // tracking alongside, from a sidewalk / the verge
        path.at(st.s + 1.5, fc);
        const wz = zoneW(st.s), walk = wz.city + wz.sakura + wz.town > 0.5; // track from the sidewalk where there is one (never through the sakura trunks)
        const rwC = zparam(st.s, 'rw'), uC = cine.sideSign > 0 ? rwC + (walk ? 1.45 : 3.4) : -(rwC + 1.5);
        const gy = fc.y + groundOffsetMix(st.s + 1.5, uC, fc.y, rwC);
        tmp.set(fc.x + fc.rx * uC - ox, Math.max(gy + 1.55, fc.y + 1.25), fc.z + fc.rz * uC - oz);
        lt.set(cp.x + f.fx * 2.5, cp.y + 0.9, cp.z + f.fz * 2.5); follow = 4;
      } else if (ty === 'road' && cine.anchor) { // a fixed camera on the verge; the car drives past
        tmp.set(cine.anchor.x - ox, cine.anchor.y, cine.anchor.z - oz);
        lt.set(cp.x, cp.y + 0.85, cp.z); follow = 30;
      } else { // crane: high and wide, rising slowly
        path.at(st.s - 20, fc); path.at(st.s + 34, fl);
        const hgt = 14 + Math.min(cine.t, 20) * 0.35;
        tmp.set(fc.x + fc.rx * st.u * 0.4 - ox, fc.y + hgt, fc.z + fc.rz * st.u * 0.4 - oz);
        lt.set(fl.x - ox, fl.y + 1.0, fl.z - oz); follow = 3;
      }
    } else {
      const R = RIGS[st.cam];
      path.at(st.s - R.back, fc); path.at(st.s + R.ahead, fl);
      const cu = st.u * R.cu, cside = cu + (R.side || 0);
      tmp.set(fc.x + fc.rx * cside - ox, fc.y + R.up, fc.z + fc.rz * cside - oz);
      lt.set(fl.x + fl.rx * st.u * R.lu - ox, fl.y + R.lookY, fl.z + fl.rz * st.u * R.lu - oz);
    }
    car.group.visible = !hideCar;
    if (st.cam === 3) camera.up.set(f.fx, 0, f.fz); else camera.up.set(0, 1, 0);
    if (!camInit) { camPos.copy(tmp); look.copy(lt); camInit = true; }
    // at speed the camera keeps up (it used to trail ~v/6 m further back) and the view widens a little
    const fast = 1 + Math.max(0, st.speed - 12) / 12;
    camPos.lerp(tmp, 1 - Math.exp(-dt * follow * fast)); look.lerp(lt, 1 - Math.exp(-dt * Math.min(follow, 8) * fast));
    { const k = st.cam === 3 ? 0 : Math.min(clamp((st.speed - 16) * 0.22, 0, 11), Math.max(0, 84 - baseFov)); fovKick += (k - fovKick) * Math.min(1, dt * 1.5); // (portrait views are wide already: at most 84°)
      if (Math.abs(camera.fov - (baseFov + fovKick)) > 0.02) { camera.fov = baseFov + fovKick; camera.updateProjectionMatrix(); } }
    camera.position.copy(camPos); camera.lookAt(look);
    if (QS.has('yaw')) camera.rotateY((parseFloat(QS.get('yaw')) * Math.PI) / 180); // test hook: look sideways
    if (QS.has('pitch')) camera.rotateX((parseFloat(QS.get('pitch')) * Math.PI) / 180); // test hook: look up / down
    fwd.set(f.fx, 0, f.fz); right.set(f.rx, 0, f.rz);
    { // the meadow follows the camera: where it is along and across the road, and how wide it sees (shots from the verge
      // look sideways: no culling by width, and the blades start a little behind them)
      const cp = car.group.position, dx = camera.position.x - cp.x, dz = camera.position.z - cp.z, side = st.cam === 4 && cine.type !== 'chase' && cine.type !== 'eye';
      const camS = st.s + dx * f.fx + dz * f.fz - (side ? 10 : 0), latK = side || YAWQ ? 40 : Math.tan((camera.fov * Math.PI) / 360) * camera.aspect * 1.08;
      grass.update(path, camS, st.u + dx * f.rx + dz * f.rz, world.origin.x, world.origin.z, zparam(st.s, 'rw'), latK);
      if (!st.grass) grass.hide();
    }

    // lighting & atmosphere
    const w = zoneW(st.s);
    const NP = nightPaint(); // (step 30: the night's painted look, by the weather and the hour)
    // On a bright day the whole frame is exposed 25% higher and the sun and sky lights are turned down by the same
    // factor: lit surfaces keep their level while everything that glows or is painted (the sky, the clouds, the haze, the
    // sea) reaches the bright, nearly white tones of the reference art, which the tone curve otherwise caps at ~240
    const dayExp = 1 + 0.25 * TOD.bright * (1 - tunS);
    sun.color.copy(TOD.sunCol); sun.intensity = TOD.sunI / dayExp;
    // Shadows (see the notes where the sun is created): the light itself follows the sun every frame; the shadow
    // camera is re-aimed only every ~6°, centred 26 m ahead of the car and snapped to whole texels; the skew
    // P' = P + (P.y − y0)·(D/D.y − L/L.y) slides each point along the true light L onto the camera's direction D.
    { const L = TOD.lightDir; // L.y ≥ 0.12 (sky.js)
      if (shadowDir.angleTo(L) > 0.1) { // re-aim (re-rasterises every shadow): at where the sun will be once it has moved
        // ~0.09 rad, so the skew swings −0.1 … +0.1 rad and re-aims come half as often (about every 30 s at noon, 10 s at
        // golden hour): looking ahead in steps of 0.001 of the day (0.48 s; 0.28 at night), the hour moving on and the car
        // driving on round the road's bends at its speed (the sun stands by the road)
        const run = started && !st.todPaused, ds = TOD.head === null ? 0 : st.speed * (TOD.night > 0.5 ? 0.28 : 0.48);
        let k = 0;
        if (run || ds > 0.01) for (let j = 1; j <= 60; j++) { if (lightAhead(j, run, ds, shAim).angleTo(L) > 0.09) break; k = j; }
        lightAhead(k, run, ds, shadowDir); shPhX = shPhY = 0;
      }
      shX.crossVectors(UPV, shadowDir).normalize(); shY.crossVectors(shadowDir, shX);
      shT.set(car.group.position.x + f.fx * 26, car.group.position.y, car.group.position.z + f.fz * 26);
      sun.target.position.copy(shT); sun.position.copy(shT).addScaledVector(L, 200);
      const tex = (2 * SH_HALF) / sun.shadow.mapSize.x, vx = shadowDir.x / shadowDir.y - L.x / L.y, vz = shadowDir.z / shadowDir.y - L.z / L.y;
      if (tex !== shTex) { shTex = tex; shPhX = shPhY = 0; }
      { const y0 = Math.round(car.group.position.y); // the pivot follows the road in 3 m steps; moving it slides the whole
        if (shY0 === null) shY0 = y0;              // map by d·v, so the texel grid's phase moves with it: no re-rasterising
        else if (Math.abs(car.group.position.y - shY0) > 3) { const d = y0 - shY0; shPhX -= d * (vx * shX.x + vz * shX.z); shPhY -= d * (vx * shY.x + vz * shY.z); shY0 = y0; } }
      // the box's rows and its near plane (SH_FIT, at the top), every frame: neither moves a texel (the rows keep the grid,
      // whole texels from its snapped centre). The receivers within R of the centre along the sun's bearing, from HL below the
      // car to HH above it (more on the mountains' slopes), as the skew lifts them (a metre of height moves sy along the rows,
      // sz along the light); the casters HC taller than them (the city's towers 80 m, the mountains' slopes 40 m)
      { const se = shadowDir.y, ce = Math.hypot(shadowDir.x, shadowDir.z), half = sun.shadow.mapSize.y / 2;
        const zm = Math.max(zoneWeight(st.s + 26, 'mountain') + zoneWeight(st.s + 26, 'snow'), zoneWeight(st.s + 110, 'mountain') + zoneWeight(st.s + 110, 'snow'));
        const zc = Math.max(zoneWeight(st.s + 26, 'city'), zoneWeight(st.s + 110, 'city'), 0.45 * Math.max(zoneWeight(st.s + 26, 'town'), zoneWeight(st.s + 110, 'town'))); // (the Turkish town's blocks, W4: ~23 m)
        const hh = SH_FIT.HH + 15 * zm + 3, hl = SH_FIT.HL + 20 * zm + 3, hc = SH_FIT.HC + 28 * zc + 25 * zm; // (+3: the pivot's 3 m steps)
        const sy = vx * shY.x + vz * shY.z, sz = vx * shadowDir.x + vz * shadowDir.z, ky = Math.max(0.05, ce + sy);
        let kHi = half, kLo = half, near = 1;
        if (st.shfit) {
          kHi = Math.min(half, Math.ceil((SH_FIT.R * se + hh * ky) / tex) + 1); kLo = Math.min(half, Math.ceil((SH_FIT.R * se + hl * ky) / tex) + 1);
          near = Math.max(1, 200 - (SH_FIT.R * ce + hh * se + hc / se + Math.max(0, (hh + hc) * sz)));
        }
        shCam.top = kHi * tex; shCam.bottom = -kLo * tex; shCam.near = near; shVP.set(0, 0, 1, (kHi + kLo) / (2 * half));
        sun.shadow.bias = -SH_BIAS_M / (shCam.far - near); }
      // the soft shadow edges' reach (materials.js getShadow; its radius is 1 / that view depth): a tent wherever the sun's
      // texels span two pixels or more on screen (~22 m at 720 px, 34 m at 1080, ~37 m on a phone), one tap from twice as
      // far (a texel under a pixel); the car's own map everywhere
      sun.shadow.radius = st.shsoft ? (4 * Math.tan((camera.fov * Math.PI) / 360)) / (tex * innerHeight * DPR) : 1e6;
      // (step 30) the night as painted: the moon's shadows soft-spoken (the repaints show the car's and little else: the city's
      // pavements and the avenue's road lit under the buildings and the crowns); 1, the old shadow, by day, golden hour and sunset
      sun.shadow.intensity = 1 - ntAt(w, 'shadow', 0) * NP;
      carSun.shadow.radius = st.shsoft ? 0 : 1e6;
      // snap to whole texels (plus that phase) in absolute world coordinates, so the world re-centring (every 900 m)
      // doesn't re-rasterise either
      const ox0 = world.origin.x, oz0 = world.origin.z;
      const a = shT.dot(shX) + ox0 * shX.x + oz0 * shX.z - shPhX, b = shT.dot(shY) + ox0 * shY.x + oz0 * shY.z - shPhY;
      shT.addScaledVector(shX, Math.round(a / tex) * tex - a).addScaledVector(shY, Math.round(b / tex) * tex - b);
      shLook.copy(shT); shC.copy(shT).addScaledVector(shadowDir, 200);
      shSkew.set(1, vx, 0, -shY0 * vx, 0, 1, 0, 0, 0, vz, 1, -shY0 * vz, 0, 0, 0, 1); }
    // the car's shadow map moves with the car (its texels are far below a pixel) and follows the sun continuously
    carSun.target.position.set(car.group.position.x, car.group.position.y + 0.9, car.group.position.z);
    carSun.position.copy(carSun.target.position).addScaledVector(TOD.lightDir, 12);
    hemi.color.copy(TOD.hemiSky); hemi.groundColor.copy(TOD.hemiGround); hemi.intensity = TOD.hemiI / dayExp;
    // (the Turkish town's shade on a bright day, W4: its concept paints the right-hand pavement and fronts in a near-neutral grey
    // shade, lighter than the paintings' blue one: its sky light warmer and stronger there, by the town's weight)
    { const k = w.town * TOD.bright; if (k > 0) { hemi.color.r *= 1 + 0.32 * k; hemi.color.g *= 1 + 0.16 * k; hemi.color.b *= 1 - 0.1 * k; } }
    { // the painter's sun for the car (materials.js CAR_KEY): in all four paintings, and in their repaints at golden hour,
      // sunset and night, the light comes from ahead of the car (at noon 60–80° to its left, by its shadow), so its back is
      // in the shade, its lamps glowing out of it. The car takes the real sun's light and height, swung round towards its
      // heading: as it is while within KEY_A (80°) of ahead; beyond that pulled forward on its own side, the further behind
      // the more (straight behind: straight ahead), so it never jumps. The shadows it casts and receives stay the real sun's.
      // (Now the sun stands by the road (sky.js), 70° left of its mean heading at noon, this is the real sun but on the
      // mountain pass's sharper left-hand bends (~5% of a noon drive there) and with the old sky (test switch st.sunroad 0))
      const h = car.group.rotation.y, fx = Math.sin(h), fz = Math.cos(h), L = TOD.lightDir;
      const a = L.x * fx + L.z * fz, b = L.x * fz - L.z * fx, hm = Math.hypot(a, b); // ahead, and to the car's left (+X)
      let ph = Math.atan2(b, a); const x = Math.abs(ph);
      if (x > KEY_A && st.carkey) ph = Math.sign(ph) * KEY_A * (Math.PI - x) / (Math.PI - KEY_A);
      const ca = Math.cos(ph) * hm, cb = Math.sin(ph) * hm;
      carKey.set(fx * ca + fz * cb, L.y, fz * ca - fx * cb);
      camera.updateMatrixWorld(); U.uCarKey.value.copy(carKey).transformDirection(camera.matrixWorldInverse);
      // …and the painted volumes' keys (materials.js VOL_KEY: the broadleaf crowns, the tetrapods): the paintings
      // light them from the upper left of the frame, the camera's side, while their shadows fall towards us. The real light's
      // height, on its side of the view, VOL_B / LEAF_B round from the view's direction (their shadows stay the real sun's)
      camera.getWorldDirection(volF); volF.y = 0; volF.normalize();
      if (st.volkey) { keyAt(L, volF, VOL_B, U.uVolKey.value); keyAt(L, volF, LEAF_B, U.uLeafKey.value); keyAt(L, volF, BL_B, U.uBlKey.value); }
      else { U.uVolKey.value.copy(L).transformDirection(camera.matrixWorldInverse); U.uLeafKey.value.copy(U.uVolKey.value); U.uBlKey.value.copy(U.uVolKey.value); }
    }
    { // …and the painter's fill in the car's shade (car.js CAR_FILL), by the time of day under a clear sky (grey skies: none)
      const c = CF_T.at(TOD.t).rgb('f'), k = paintSky() * st.carkey; U.uCarFill.value.set(c[0] * k, c[1] * k, c[2] * k);
      U.uCarDT.value.set(lerp(1, NT.carD[0], NP), lerp(1, NT.carD[1], NP), lerp(1, NT.carD[2], NP)); // (step 30)
    }
    { // aerial perspective has a direction: looking towards a low sun the haze glows with it (the sky dome's broad sun glow
      // at the horizon, averaged across the view), looking away it stays cool. Worked out once per frame on the CPU and
      // folded into the shared fog colour — shading it per vertex or per pixel measured +0.3–1.7 ms, this costs nothing
      const day = (1 - TOD.night) * (1 - ov);
      if (day > 0.001) {
        camera.getWorldDirection(glowV); const fx = glowV.x, fz = glowV.z, fl = Math.hypot(fx, fz) || 1, sd = TOD.sunDir;
        let g = 0;
        for (let i = -2; i <= 2; i++) { // five directions across the view (±~35°)
          const a = i * 0.3, c = Math.cos(a), sn = Math.sin(a), dx = (fx * c - fz * sn) / fl, dz = (fx * sn + fz * c) / fl;
          const v = Math.max(0, dx * sd.x + dz * sd.z), v2 = v * v; g += v2 * v2 * v2;
        }
        const k = (g / 5) * (0.10 + 0.35 * TOD.warm) * 1.4 * day * HAZE_GLOW;
        TOD.fog.r += TOD.sunCol.r * k; TOD.fog.g += TOD.sunCol.g * k; TOD.fog.b += TOD.sunCol.b * k;
      }
    }
    scene.fog.color.copy(TOD.fog);
    // (the city on a bright day: a thinner haze, so its canyon of tall blocks reads to the street's far end, as painted)
    // (the Turkish town, W4: a light haze down its street on a bright day, as its concept has it, the mosque clear at its end)
    // (Cappadocia, W5: the steppe's clear dry air, its far chimneys and the castle rock crisp on a bright day, as painted)
    const fogD = (w.city * (0.0022 - CITY_HAZE * TOD.bright) + w.sakura * 0.0019 + w.coast * 0.0011 + w.bosphorus * 0.0011 + w.galata * 0.0009 + w.town * (0.0018 - 0.0008 * TOD.bright) + (w.uchisar + w.pasabag) * (0.0013 - 0.0006 * TOD.bright) + w.country * 0.0014 + w.mountain * 0.0017 + w.snow * 0.0021) * (1 + TOD.night * 0.25);
    scene.fog.near = fogD * (1 + 0.55 * ov + 0.45 * rn); scene.fog.far = world.ahead * 0.92;
    U.uSkyHor.value.copy(TOD.horizon); U.uSkyZen.value.copy(TOD.zenith); U.uTime.value = t;
    U.uWet.value = wet * (1 - w.snow);
    U.uSakWet.value = SAK_WET; // (the cherry avenue's road: wet in any weather, as in the painting; by its zone weight in the shader)
    carWet = Math.max(U.uWet.value, U.uSakWet.value * w.sakura) * (1 - tunS); // (the tail lamps' reflections, next frame)
    { // wet roads mirror the lights (WET chunk in materials.js): the copy pass only runs while the road is wet (or the
      // cherry avenue's road is in view: from 120 m before it)
      const on = (U.uWet.value > 0.04 || U.uSakWet.value * Math.max(w.sakura, zoneWeight(st.s + 120, 'sakura')) > 0.04) && quality !== 'low' && tunS < 0.5 && REFL !== '0';
      post.refl.enabled = on && REFL !== 'taps'; U.uReflOn.value = on && REFL !== 'copy' ? 1 : 0; // (?refl=0|copy|taps: test hooks)
      if (on) { // the road plane's vanishing line on screen, and the mirror scale for the camera's height above the road
        camera.getWorldDirection(camFlat); camFlat.y = 0; camFlat.normalize();
        hz.copy(camera.position).addScaledVector(camFlat, 1e4).project(camera); U.uHorizon.value = hz.y * 0.5 + 0.5;
        const hc = Math.max(0.5, camera.position.y - car.group.position.y); U.uReflK.value = clamp(1 - (2 * hc) / (5 + hc), 0.05, 1);
      }
    }
    U.uOrigin.value.set(world.origin.x, world.origin.z); U.uWind.value = 1 + 0.8 * rn;
    U.uCloudSh.value = (1 - ov) * sstep(0.04, 0.3, TOD.sunEl) * (1 - TOD.night);
    if (U.uCloudSh.value > 0.001) cloudMap.update(renderer, camera.position.x, camera.position.z, world.origin.x, world.origin.z);
    const su = sky.material.uniforms;
    su.uBright.value = TOD.bright;
    su.uNight.value = TOD.night; su.uWarm.value = TOD.warm; su.uTime.value = t; su.uCirrusCol.value.copy(TOD.cLit).lerp(TOD.horizon, 0.25);
    su.uCirrus.value = 0.6 * (1 - ov) * (1 - 0.65 * sstep(0.4, 0.9, TOD.night)); su.uOvercast.value = ov;
    su.uMilky.value = sstep(0.55, 0.95, TOD.night) * (1 - ov);
    // the moon (the night's light: ahead and to the left, sky.js) shows once the twilight has gone, not beside the sunset
    // glow ahead (a full moon there read wrong); and fades out before dawn
    // (step 30: under a clear sky the drawn moon, ~21° up ahead, shows only once the night's painted sky has come, from 0.81, and goes
    // before dawn's glow, by 0.225: in the dusk's and the dawn's sky over the sun's glow it read wrong)
    // (and not over a grey sky's deck: drawn ahead now, it showed through it)
    TOD.moonVis = sstep(0.4, 0.8, TOD.night) * lerp(1, TOD.t >= 0.5 ? sstep(0.81, 0.86, TOD.t) : 1 - sstep(0.19, 0.225, TOD.t), paintSky() * st.nightpaint) * (1 - sstep(0.15, 0.55, ov)); su.uMoon.value = TOD.moonVis;
    { // (Audit 2) the painted evening sky: its weight and tones by the hour, the sun its glow is drawn round lowered to the horizon
      // (step 30: and the night's, in the same branch: the evening's has gone by 0.8, where the night's begins)
      const ev = paintSky() * sstep(0.62, 0.7, TOD.t) * (1 - sstep(0.765, 0.8, TOD.t)) * st.evesky; su.uEve.value = ev + NP; su.uEveTk.value = ev > 0 ? 0 : 1;
      if (ev > 0) {
        const P = EVE_T.at(TOD.t), g = post.grade.uniforms, sd = TOD.sunDir; P.ug(g, 'z', su.uEveZ.value); P.ug(g, 'm', su.uEveM.value); P.ug(g, 'h', su.uEveH.value);
        su.uEveG.value = P.rgb('g')[0];
        const el = Math.asin(clamp(sd.y, -1, 1)), el2 = lerp(el, Math.min(el, EVE_EL), ev), k = Math.cos(el2) / Math.max(Math.hypot(sd.x, sd.z), 1e-6);
        su.uSkySun.value.set(sd.x * k, Math.sin(el2), sd.z * k);
      } else {
        su.uSkySun.value.copy(TOD.sunDir);
        if (NP > 0) { const P = NSKY.at(TOD.t), g = post.grade.uniforms; P.ug(g, 'z', su.uEveZ.value); P.ug(g, 'm', su.uEveM.value); P.ug(g, 'h', su.uEveH.value); P.ug(g, 't', su.uEveT.value);
          U.uSkyHor.value.lerp(su.uEveM.value, NP); U.uSkyZen.value.lerp(su.uEveZ.value, NP); } // (…and what the wet road and the car's paint mirror: the painted night sky)
      }
      // (step 30) the moon's disc and halo in the repaints' tones (as painted under a clear sky; the old pale disc otherwise), the
      // night's extra stars
      su.uStarN.value = 0.014 * NP;
      if (su.uMoon.value > 0) { const P = NSKY.at(TOD.t), g = post.grade.uniforms, k = paintSky();
        P.ug(g, 'c', su.uMoonCol.value).lerp(_moonOld.setRGB(1.6, 1.6, 1.5), 1 - k); P.ug(g, 'hl', su.uMoonHalo.value).lerp(_moonOld.setRGB(0.12, 0.16, 0.32), 1 - k); }
    }
    // shooting stars on clear nights, somewhere ahead of us
    if (TOD.night > 0.65 && ov < 0.3) {
      if (meteor.p < 0 && (meteor.next -= dt) < 0) {
        const az = Math.atan2(f.fx, f.fz) + (Math.random() - 0.5) * 1.5, el = 0.45 + Math.random() * 0.6, d2 = 0.22 + Math.random() * 0.2, daz = (Math.random() - 0.5) * 0.6;
        const dir = (e, a) => new THREE.Vector3(Math.cos(e) * Math.sin(a), Math.sin(e), Math.cos(e) * Math.cos(a));
        meteor.a.copy(dir(el, az)); meteor.b.copy(dir(el - d2, az + daz)); meteor.p = 0; meteor.next = QS.has('meteors') ? 1 : 6 + Math.random() * 20;
      }
    }
    if (meteor.p >= 0) { meteor.p += dt / 0.85; if (meteor.p > 1.3) meteor.p = -1; }
    su.uMetP.value = meteor.p; su.uMetA.value.copy(meteor.a); su.uMetB.value.copy(meteor.b);
    su.uDeckLit.value.copy(TOD.horizon).lerp(TOD.cLit, 0.35); su.uDeckDark.value.copy(TOD.zenith).lerp(TOD.horizon, 0.25).multiplyScalar(0.82);
    sky.position.copy(camera.position);
    { // (step 30) the drawn moon: MOON_B by the zones here, from the road's own mean heading (not the town's or Cappadocia's turned
      // sun), turned at most MOON_RATE a second; the painted cumulus keep it clear and light their edges by it (painted.js)
      if (TOD.head === null || !st.nightpaint) TOD.moonSky.copy(TOD.moonDir); // (the old sky, or the test switch off: the old moon's place)
      else {
        let b = 0; for (const z in MOON_B) b += (w[z] || 0) * MOON_B[z]; b *= Math.PI / 180;
        st.moonB = st.moonB === undefined ? b : st.moonB + clamp(b - st.moonB, -MOON_RATE * dt, MOON_RATE * dt);
        moonSkyDir(TOD.head - st.sunAdj + st.moonB, TOD.moonSky);
      }
      if (pclouds) { pclouds.moon = su.uMoon.value > 0 && NP > 0 ? Math.atan2(TOD.moonSky.x, TOD.moonSky.z) : NaN; pclouds.night = NP; } }
    { const painted = !!pclouds && (st.pclouds !== 0 || !clouds);
      if (pclouds) { pclouds.mesh.visible = painted; if (painted) pclouds.update(camera, dt); }
      if (clouds) { clouds.group.visible = !painted; if (!painted) clouds.update(camera.position, dt); } }
    // the painted horizon of the zone ahead (it changes while the next zone's scenery comes into view), and the mountain
    // rings wherever it doesn't cover the far horizon
    const vm = bandMix(st.s, 200), camH = Math.max(1, camera.position.y - f.y + 0.45); galTurn(st.s); uchTurn(st.s, dt); coastTurn(st.s);
    const bandW = Math.max(band && st.band !== 0 ? band.update(camera, vm, camH, scene.fog.near, scene.fog.far) : 0, bandTr && st.band !== 0 ? bandTr.update(camera, vm, camH, scene.fog.near, scene.fog.far) : 0);
    if (band && st.band === 0) band.mesh.visible = false; if (bandTr && st.band === 0) bandTr.mesh.visible = false;
    const realW = realSky ? realSky.update(camera, st.s, world.origin) : 0; // (step 35R: the real Galata zone's skyline)
    mountains.update(camera.position, Math.max(w.snow, zoneW(st.s + 600).snow * 0.7), 1 - Math.max(bandW, realW));
    if (balloons) { // (over Cappadocia's zone, while it is here or ahead: W5; over Paşabağ's once the drive is in it, W6: they come down one
      // by one through the hand-over from Uçhisar and go up over Paşabağ's valley as it ends)
      const zi = Math.floor(st.s / ZONE_LEN), pz = w.pasabag > w.uchisar ? 'pasabag' : 'uchisar'; let bz = NaN;
      for (let k = zi; k <= zi + 1; k++) if (zoneAt(k * ZONE_LEN + 10) === pz) { bz = k * ZONE_LEN; break; }
      balloons.update(camera, path, bz, ZONE_LEN, pz === 'pasabag' ? (w.pasabag - w.uchisar) * (1 - sstep(0.31, 0.38, TOD.t)) : w.pasabag > 0 ? w.uchisar - w.pasabag : Math.max(w.uchisar, zoneWeight(st.s + 600, 'uchisar') * (borderNear(st.s + 600) ? 0 : 1)), world.origin, dt);
    }
    // (not across a border the camera hasn't entered yet: from the snow country's side the strait beyond the tunnel showed
    // at the far horizon; inside the tube its exit shows it)
    let seaW = 0; { const bn = borderNear(st.s), tube = bn && Math.abs(st.s - bn.s) < T_HALF;
      for (const d of [-150, 0, 250, 500, 800]) if (!bn || tube || (st.s + d - bn.s) * (st.s - bn.s) > 0) seaW = Math.max(seaW, seaWeight(st.s + d));
      if (bayQ(st.s) === bayQ(st.s) || bayQ(st.s - 120) === bayQ(st.s - 120)) seaW = 1; } // (and the bay's end's water while the camera is by it, on into the next zone's first 400 m: path.js, step 27)
    sea.mesh.visible = seaW > 0.001;
    // (step 28) in the countryside the painted horizon's ring is drawn just inside the world's far fade (BAND_NEAR m, was BAND_R), so
    // what stands further than that below the painting's ridges is the painting: the next zone's slopes rising 640–760 m ahead used to
    // stand in front of its mountains as pale fogged "ghost hills". Not while the sea is in view (it runs out to the horizon under
    // the coast's row: the bay's end), eased in and out over a few seconds
    if (band) { const kc = sea.mesh.visible || st.bandnear === 0 ? 0 : w.country; bandNear = bandNear < 0 ? kc : bandNear + (kc - bandNear) * Math.min(1, dt * 0.7);
      band.mesh.scale.setScalar(1 - (1 - BAND_NEAR / BAND_R) * bandNear); }
    PAINT_TOD.on = st.todpaint; sea.u.uWaves.value = st.waves; sea.u.uShoreW.value = st.shore; M.surf.visible = st.surf > 0; M.tetra.visible = st.tetra > 0; M.bark.visible = st.trunks > 0; sea.update(camera.position, t, fogD * 0.8, sstep(0.0, 0.35, seaW), post.grade.uniforms, path, st.s, regionWeight(st.s, 'tr'), Math.max(w.galata, zoneWeight(st.s + 150, 'galata'))); // (and the shore's foam and surf; the strait's tones in Turkey, the Golden Horn's by the Galata Bridge)
    if (ferry) { const sv = sea.mesh.visible ? 1 : 0; ferry.update(dt, path, st.s, world.origin, (w.bosphorus + w.galata) * sv, w.galata * sv); }
    riverMat.uniforms.uTime.value = t; riverMat.uniforms.uFogD.value = scene.fog.near; riverMat.uniforms.uNight.value = TOD.night; riverMat.uniforms.uSpecK.value = 1 - TOD.overcast * 0.85;
    U.uSunDir.value.copy(TOD.lightDir); U.uSunCol.value.copy(TOD.sunCol);
    const nightK = sstep(0.15, 0.8, TOD.night);
    M.atlas.emissiveIntensity = M.atlasW.emissiveIntensity = 0.1 + nightK * 1.05; // (and the world variant's: Turkey's lit windows)
    if (M.capAtlas) M.capAtlas.emissiveIntensity = M.atlas.emissiveIntensity; // (and Cappadocia's: its cave windows, W5)
    if (M.atlasI) M.atlasI.emissiveIntensity = M.atlas.emissiveIntensity; U.uRmOn.value = st.rooms; // (and the shop rooms' variant's, step 31)
    if (M.atlasC) M.atlasC.emissiveIntensity = M.atlas.emissiveIntensity; if (M.atlasCT) M.atlasCT.emissiveIntensity = M.atlas.emissiveIntensity; // (and the chain stores', step 32)
    if (M.atlasCI) M.atlasCI.emissiveIntensity = M.atlas.emissiveIntensity; if (M.atlasCTI) M.atlasCTI.emissiveIntensity = M.atlas.emissiveIntensity; if (M.atlasWI) M.atlasWI.emissiveIntensity = M.atlas.emissiveIntensity; // (and the rooms' of the chains and the town, step 34)
    if (M.atlasDol) M.atlasDol.emissiveIntensity = M.atlas.emissiveIntensity; // (and the town's dolmuş's lamps and saloon, step 35b)
    if (M.train) M.train.emissiveIntensity = M.atlas.emissiveIntensity; // (and the crossing train's saloon, display and lamps, step 35c)
    if (tram) { tram.mat.emissiveIntensity = M.atlas.emissiveIntensity; tram.update(dt, path, st.s, camera.position, world.origin, st.speed, st.tram); } // (the Galata Bridge's tram, step 33)
    if (fishers) { fishers.update(world, camera, st.fish, (0.16 + 0.22 * TOD.bright) * (1 - tunS)); // (the Galata Bridge's painted fishermen and their contact shadows, step 35a)
      if (fishers.mesh.visible) { const c = FISH_T.at(TOD.t).rgb('v'), k = paintSky(); U.uFishT.value.set(lerp(1, c[0], k), lerp(1, c[1], k), lerp(1, c[2], k));
        const r = FISH_RIM.at(TOD.t).rgb('v'); U.uFishRim.value.set(r[0] * k, r[1] * k, r[2] * k, k * (r[0] + r[1] + r[2]) > 0.01 ? 1 : 0); } } // (…their tint and rim by the hour)
    // leaves and grass glow when a low sun shines through them (materials.js backlit()): only while it's low and out
    U.uBacklit.value = BACKLIT_K * 1.6 * (1 - ov) * (1 - TOD.night) * sstep(0.0, 0.08, TOD.sunEl) * (1 - sstep(0.25, 0.55, TOD.sunEl)) * (1 - tunS);
    // the painted crowns' shade: the reference art's deep teal on a bright day, neutral at dusk, at night and under grey
    // skies (there it turned the shaded side of a crown cyan against a warm or grey scene)
    U.uGhShade.value.set(lerp(0.8, 0.3, TOD.bright), lerp(0.8, 0.85, TOD.bright), lerp(0.8, 1.7, TOD.bright));
    // …and their leaves, under a clear sky, as the paintings repainted at golden hour, sunset and night show them (GH_T: an
    // olive green at golden hour, a dark green going mauve against the sunset, a moonlit teal at night, where the sun had
    // turned them yellow and orange); by day and under grey skies the leaves' own colour
    { const c = GH_T.at(TOD.t).rgb('c'), k = 1 - ov, rt = regionWeight(st.s, 'tr'); // (Istanbul's: GH_TR, by Turkey's weight)
      let c0 = c[0], c1 = c[1], c2 = c[2];
      if (rt > 0) { const d = GH_TR.at(TOD.t).rgb('c'); c0 = lerp(c0, d[0], rt); c1 = lerp(c1, d[1], rt); c2 = lerp(c2, d[2], rt); }
      U.uGhTint.value.set(lerp(1, c0, k), lerp(1, c1, k), lerp(1, c2, k)); }
    { // the tetrapods' painted tones under a clear sky, by the time of day (as the painted sea's), ungraded: they show as the
      // painting's colours (grey skies and rain keep the old look: lit by the scene)
      const g = post.grade.uniforms; U.uTpK.value = paintSky();
      if (U.uTpK.value > 0) { const P = TP_T.at(TOD.t); for (let i = 0; i < 6; i++) P.ug(g, TP_N[i], TP_U[i]); }
      // …and the bark's, under the same skies
      U.uBkK.value = U.uTpK.value * st.bark;
      if (U.uBkK.value > 0) { const P = BK_T.at(TOD.t); for (let i = 0; i < 6; i++) P.ug(g, BK_N[i], BK_U[i]); }
      // …and Cappadocia's fairy chimneys' (W5), once its scenery is anywhere near
      U.uTfK.value = M.tuff ? U.uTpK.value * st.tuff : 0;
      if (U.uTfK.value > 0 && Math.max(w.uchisar, zoneWeight(st.s + 760, 'uchisar')) > 0) { const P = TF_T.at(TOD.t); for (let i = 0; i < 4; i++) P.ug(g, TF_N[i], TF_U[i]); }
      if (U.uTfK.value > 0 && Math.max(w.pasabag, zoneWeight(st.s + 760, 'pasabag')) > 0) { const P = TFP_T.at(TOD.t); for (let i = 0; i < 4; i++) P.ug(g, TF_N[i], TFP_U[i]); U.uTfC2.value.fromArray(P.rgb('c')); } // (Paşabağ's, W6)
    }
    if (M.tuff) { // (its ground's albedo by the time of day under a clear sky; grey skies: the day's)
      const P = UG_T.at(TOD.t), k = paintSky(), a = P.rgb('s'), b = P.rgb('g'), c = P.rgb('t'), d0 = UG_DAY.s, d1 = UG_DAY.g, d2 = UG_DAY.t;
      U.uUchS.value.set(lerp(d0[0], a[0], k), lerp(d0[1], a[1], k), lerp(d0[2], a[2], k)); U.uUchG.value.set(lerp(d1[0], b[0], k), lerp(d1[1], b[1], k), lerp(d1[2], b[2], k));
      U.uUchT.value.set(lerp(d2[0], c[0], k), lerp(d2[1], c[1], k), lerp(d2[2], c[2], k));
      const Q = PG_T.at(TOD.t), qa = Q.rgb('s'), qb = Q.rgb('g'), qc = Q.rgb('t'), qd = Q.rgb('c'), e0 = PG_DAY.s, e1 = PG_DAY.g, e2 = PG_DAY.t; // (Paşabağ's, W6)
      U.uPasS.value.set(lerp(e0[0], qa[0], k), lerp(e0[1], qa[1], k), lerp(e0[2], qa[2], k)); U.uPasG.value.set(lerp(e1[0], qb[0], k), lerp(e1[1], qb[1], k), lerp(e1[2], qb[2], k));
      U.uPasT.value.set(lerp(e2[0], qc[0], k), lerp(e2[1], qc[1], k), lerp(e2[2], qc[2], k)); U.uPasGT.value.set(lerp(1, qd[0], k), lerp(1, qd[1], k), lerp(1, qd[2], k));
    }
    { // the coast's and the country's painted asphalt, under a clear sky (grey skies and rain keep the old one); on the Galata
      // Bridge on a bright day its far stretch paler, as its concept has it (the low sun ahead's sheen on it: GAL_RF)
      const P = ROAD_T.at(TOD.t), n = P.rgb('n'), f = P.rgb('f'), k = paintSky() * st.road, gk = w.galata * TOD.bright * st.road;
      U.uRoadN.value.set(lerp(1, n[0], k), lerp(1, n[1], k), lerp(1, n[2], k)); U.uRoadF.value.set(lerp(1, f[0], k), lerp(1, f[1], k), lerp(1, f[2], k));
      if (gk > 0) U.uRoadF.value.multiply(galRF.set(lerp(1, GAL_RF[0], gk), lerp(1, GAL_RF[1], gk), lerp(1, GAL_RF[2], gk)));
      const uk = w.uchisar * paintSky() * st.road; // (Cappadocia's asphalt, W5: its concept's darker grey, a little warmer far off)
      if (uk > 0) { U.uRoadN.value.multiply(uchRT.set(lerp(1, UCH.rn[0], uk), lerp(1, UCH.rn[1], uk), lerp(1, UCH.rn[2], uk))); U.uRoadF.value.multiply(uchRT.set(lerp(1, UCH.rf[0], uk), lerp(1, UCH.rf[1], uk), lerp(1, UCH.rf[2], uk))); }
      const pk = w.pasabag * paintSky() * st.road; // (Paşabağ's, W6, by the hour)
      if (pk > 0) { const Q = PAS_R.at(TOD.t), rn = Q.rgb('n'), rf = Q.rgb('f'); U.uRoadN.value.multiply(uchRT.set(lerp(1, rn[0], pk), lerp(1, rn[1], pk), lerp(1, rn[2], pk))); U.uRoadF.value.multiply(uchRT.set(lerp(1, rf[0], pk), lerp(1, rf[1], pk), lerp(1, rf[2], pk))); }
      U.uNtRoad.value.set(lerp(1, ntAt(w, 'road', 0), NP), lerp(1, ntAt(w, 'road', 1), NP), lerp(1, ntAt(w, 'road', 2), NP)); U.uNtWalk.value.set(lerp(1, ntAt(w, 'walk', 0), NP), lerp(1, ntAt(w, 'walk', 1), NP), lerp(1, ntAt(w, 'walk', 2), NP)); // (step 30)
      const sk = w.sakura * paintSky() * st.road; U.uSakRT.value = st.road; // (the cherry avenue's, step 26, by the hour; st.road 0 skips the work in its ground)
      if (sk > 0) { const Q = SAK_R.at(TOD.t), rn = Q.rgb('n'), rf = Q.rgb('f'); U.uRoadN.value.multiply(uchRT.set(lerp(1, rn[0], sk), lerp(1, rn[1], sk), lerp(1, rn[2], sk))); U.uRoadF.value.multiply(uchRT.set(lerp(1, rf[0], sk), lerp(1, rf[1], sk), lerp(1, rf[2], sk))); }
    }
    // the painted meadow's tint: the reference art's light lime on a bright day, the repainted hours' tints at golden hour,
    // sunset and night (FIELD_T); the paddies' old, deeper green under grey skies (the day's lime turned the fields ochre at
    // sunset)
    if (FIELD.tex) { // (by the time of day under a clear sky; towards the old deeper tints as the sky greys over. The day's
      // key keeps the old daytime tints exactly: deeper by TOD.warm towards the morning and the evening)
      const wd = 1 - TOD.warm;
      for (let i = 0; i < 3; i++) { F_DAY.c[i] = lerp(FIELD_DIM[i], FIELD_DAY[i], wd); F_DAY.co[i] = lerp(COAST_DIM[i], st.slope ? COAST_DAY2[i] : COAST_DAY[i], wd); F_DAY.sa[i] = lerp(SAK_DIM[i], SAK_DAY[i], wd); F_DAY.bo[i] = lerp(COAST_DIM[i], BOS_DAY[i], wd); }
      const b = 1 - ov, P = FIELD_T.at(TOD.t), c = P.rgb('c'), co = P.rgb('co'), sa = P.rgb('sa'), bo = P.rgb('bo');
      FIELD.uFieldBo.value.set(lerp(COAST_DIM[0], bo[0], b), lerp(COAST_DIM[1], bo[1], b), lerp(COAST_DIM[2], bo[2], b));
      FIELD.uFieldC.value.set(lerp(FIELD_DIM[0], c[0], b), lerp(FIELD_DIM[1], c[1], b), lerp(FIELD_DIM[2], c[2], b));
      FIELD.uFieldCo.value.set(lerp(COAST_DIM[0], co[0], b), lerp(COAST_DIM[1], co[1], b), lerp(COAST_DIM[2], co[2], b));
      FIELD.uFieldSa.value.set(lerp(SAK_DIM[0], sa[0], b), lerp(SAK_DIM[1], sa[1], b), lerp(SAK_DIM[2], sa[2], b));
    }
    { // (the coast slope's shade on a bright day only (golden hour, sunset and night keep their own), its verge's deeper green by the hour
      // under a clear sky: step 27)
      const b = Math.min(Math.max((TOD.bright - 0.6) / 0.4, 0), 1), k = b * b * (3 - 2 * b) * paintSky() * st.slope;
      U.uCoFill.value.set(CO_FILL[0] * k, CO_FILL[1] * k, CO_FILL[2] * k);
      const v = CV_T.at(TOD.t).rgb('v'), kv = paintSky() * st.slope; U.uCoVerge.value.set(lerp(1, v[0], kv), lerp(1, v[1], kv), lerp(1, v[2], kv));
      const bv = BKV_T.at(TOD.t).rgb('v'), kb = paintSky() * st.banktod; U.uBankT.value.set(lerp(1, bv[0], kb), lerp(1, bv[1], kb), lerp(1, bv[2], kb)); } // (the country's verge banks: step 28)
    // the cherry blossom's: a bright rose-magenta on a bright day (thin petals glow in the shade), the repainted hours' at
    // golden hour, sunset and night (BL_T); under grey skies only enough pink to keep the bluish skylight from turning the
    // crowns' shade purple
    { for (let i = 0; i < 3; i++) BL_DAY.b[i] = lerp(BL_SHADE_DIM[i], BL_SHADE_DAY[i], 1 - TOD.warm);
      const b = BL_T.at(TOD.t).rgb('b'), k = 1 - ov; U.uBlShade.value.set(lerp(BL_SHADE_DIM[0], b[0], k), lerp(BL_SHADE_DIM[1], b[1], k), lerp(BL_SHADE_DIM[2], b[2], k)); }
    { // …and its flowers' rose under a clear sky (grey skies keep the old one)
      const P = BLM_T.at(TOD.t), m = P.rgb('m'), o = BLM_OLD.m, k = paintSky();
      blMid.setRGB(lerp(o[0], m[0], k) / 255, lerp(o[1], m[1], k) / 255, lerp(o[2], m[2], k) / 255, THREE.SRGBColorSpace);
      const e = lerp(BLM_OLD.w[0], P.rgb('w')[0], k); // (the tips' edge: as scale and offset, and the step to them, for the shader)
      const tp = P.rgb('t'); blTip.setRGB(lerp(255, tp[0], k) / 255, lerp(232, tp[1], k) / 255, lerp(242, tp[2], k) / 255, THREE.SRGBColorSpace); // (the tips by the hour: Audit 2)
      U.uBlMid.value.set(blMid.r, blMid.g, blMid.b, 1 / (1 - e)); U.uBlTip.value.set(blTip.r - blMid.r, blTip.g - blMid.g, blTip.b - blMid.b, -e / (1 - e)); }
    // home lights come on one by one over the two hours after sunset (18:00 → ~20:00 on the clock, ~40 s of driving) and
    // go off one by one at dawn; on a dark rainy day some are on in the daytime too
    U.uLightsOn.value = LIGHTS_ON >= 0 ? LIGHTS_ON : Math.max(sstep(0.02, 0.75, TOD.night), 0.3 * ov);
    U.uLitN.value.set(lerp(1, ntAt(w, 'lit', 0), NP), lerp(1, ntAt(w, 'lit', 1), NP), lerp(1, ntAt(w, 'lit', 2), NP), lerp(1, ntAt(w, 'lit', 3), NP)); U.uBoardD.value = lerp(1, ntAt(w, 'lit', 3), NP); // (step 30)
    U.uHouseFill.value.set(ntAt(w, 'house', 0) * NP / Math.PI, ntAt(w, 'house', 1) * NP / Math.PI, ntAt(w, 'house', 2) * NP / Math.PI); // (as an emissive: irradiance / π)
    M.lamp.color.setRGB(0.9, 0.86, 0.74).lerp(LAMP_NIGHT, nightK); // (by day a milky, warm cream glass, as the avenue's lanterns in the painting)
    M.pool.opacity = nightK * 0.42 * (1 + 0.8 * wet);
    { // the two lights that light the car most (street lamps, lit shop windows, tunnel lamps) light its paint and glass
      // (car.js); lights sit in their chunk's frame. Sodium orange inside tunnels, which are lit by day too
      const cp = car.group.position, L = car.lamps, K = Math.max(nightK, tunS);
      let a0 = 0, a1 = 0, x0 = 0, y0 = -1e3, z0 = 0, x1 = 0, y1 = -1e3, z1 = 0, d0 = 900, d1 = 900; // (none: far below)
      if (K > 0.01) {
        const cc = Math.floor(st.s / CH);
        for (let c = cc - 1; c <= cc + 1; c++) {
          const ch = world.chunks.get(c); if (!ch || !ch.lamps) continue;
          const P = ch.lamps, gp = ch.group.position;
          for (let i = 0; i < P.length; i += 4) {
            const x = P[i] + gp.x, y = P[i + 1], z = P[i + 2] + gp.z, d = (x - cp.x) ** 2 + (y - cp.y) ** 2 + (z - cp.z) ** 2;
            const a = P[i + 3] / (1 + 0.045 * d); // how much it lights the car (the shader's falloff)
            if (a > a0) { a1 = a0; d1 = d0; x1 = x0; y1 = y0; z1 = z0; a0 = a; d0 = d; x0 = x; y0 = y; z0 = z; } else if (a > a1) { a1 = a; d1 = d; x1 = x; y1 = y; z1 = z; }
          }
        }
        camera.updateMatrixWorld();
      }
      // power back from the score; fade out before 30 m, so swapping which lights are picked never pops
      const w0 = K * a0 * (1 + 0.045 * d0) * (1 - sstep(18, 30, Math.sqrt(d0))), w1 = K * a1 * (1 + 0.045 * d1) * (1 - sstep(18, 30, Math.sqrt(d1)));
      L[0].set(x0, y0, z0, 1).applyMatrix4(camera.matrixWorldInverse).w = w0;
      L[1].set(x1, y1, z1, 1).applyMatrix4(camera.matrixWorldInverse).w = w1;
      car.lampCol.setRGB(1.0, 0.8 - 0.32 * tunS, 0.52 - 0.38 * tunS); // warm white → sodium orange in tunnels
      // the same two lights, and the headlight beam, light the rain and snow around the car (weather.js PLIGHT)
      PLIGHT.uLampW.value[0].set(x0, y0, z0, w0); PLIGHT.uLampW.value[1].set(x1, y1, z1, w1); PLIGHT.uLampCol.value.copy(car.lampCol);
      car.head.getWorldPosition(PLIGHT.uHeadPos.value); car.head.target.getWorldPosition(glowV);
      PLIGHT.uHeadDir.value.copy(glowV).sub(PLIGHT.uHeadPos.value).normalize(); PLIGHT.uHeadI.value = car.head.intensity / 60;
    }
    M.pool.visible = M.pool.opacity > 0.003; // the night light pools were drawn all day at zero opacity (~11 draw calls)
    world.lod(st.s, DETAIL_FAR, nightK > 0.15, FAR_LEAF); world.dolLod(camera.position); // (and the town's dolmuş's near or far mesh, step 35b)
    U.uNight.value = nightK;
    post.bloom.strength = lerp(0.32, 0.55, nightK); post.bloom.threshold = lerp(1.35, 0.95, nightK); post.bloom.radius = lerp(0.55, 0.35, nightK);
    // bloom only where it shows (night lamps, sunsets, tunnels): by day at threshold 1.35 it cost ~7 ms for almost nothing
    { const need = Math.max(nightK, tunS, sstep(0.25, 0.6, TOD.warm) * (1 - ov)); post.bloom.enabled = bloomAllowed && need > 0.02; post.bloom.strength *= Math.min(1, need * 4) * lerp(1, ntAt(w, 'bloom', 0), NP); }
    renderer.toneMappingExposure = lerp(1.0, 1.15, nightK) * (1 + 0.35 * tunS) * dayExp;

    // sun streaks in the grade pass
    tmp.copy(camera.position).addScaledVector(TOD.sunDir, 1000).project(camera);
    const g = post.grade.uniforms;
    const inFront = tmp.z < 1 ? 1 : 0, edge = Math.max(Math.abs(tmp.x), Math.abs(tmp.y));
    g.uSun.value.set(tmp.x * 0.5 + 0.5, tmp.y * 0.5 + 0.5);
    // (only for a high sun: low ahead, at golden hour and sunset, the paintings repainted then show no starburst, just the
    // soft glow round it, the sky's halo and the bloom on its disc; the streaks' pass cost 0.9 ms there on the Vega)
    g.uSunVis.value = inFront * (1 - sstep(1.0, 1.9, edge)) * sstep(0.45, 0.65, TOD.sunEl) * (1 - TOD.night) * (1 - ov) * (1 - tunS);
    // the grade of the reference art: punchy colour (muted again under grey skies), and on a bright day an indigo lift in
    // the shadows and only a light vignette (the paintings have none); sunsets and nights keep their old grade
    g.uSat.value = 1.22 - 0.24 * ov; g.uVig.value = 0.55 - 0.43 * TOD.bright; g.uLo.value.set(-0.014 + 0.026 * TOD.bright, 0, 0.03);
    g.uDay.value = day(); g.uWarm.value = TOD.warm; g.uTime.value = t;

    rain.update(camera.position, t, rn * (1 - tunS) * (1 - w.snow), day());
    { // 逃げ水: the road mirage of a hot clear summer day, around midday (mirage.js); not near a tunnel
      const tq = tunnelNear(st.s + 190), hot = (w.city + w.country + w.coast + w.bosphorus + w.galata + w.town + w.uchisar + w.pasabag) * (1 - ov) * (1 - wet) * sstep(0.6, 0.9, TOD.sunEl) * (st.mirage ?? 1) * (tq && Math.abs(st.s + 190 - tq.s) < 330 ? 0 : 1);
      mirage.update(path, st.s, world.origin.x, world.origin.z, zparam(st.s + 150, 'rw'), hot, t, TOD.horizon);
    }
    { // spray off the tyres on a wet road, powder on a snowy one, exhaust vapour in the cold (spray.js)
      const cold = clamp(w.snow + w.mountain * 0.6 * Math.max(TOD.night, 1 - sstep(0.27, 0.36, st.tod)), 0, 1) * (1 - tunS);
      sprayAmb.copy(TOD.fog).multiplyScalar(0.92); spraySun.copy(TOD.sunCol).multiplyScalar(Math.min(1, TOD.sunI / 3) * (1 - ov) * 0.6);
      const cy = Math.cos(car.group.rotation.y), sy = Math.sin(car.group.rotation.y), cp = car.group.position;
      sprayTail.set(cp.x - 1.75 * sy, cp.y + 0.95, cp.z - 1.75 * cy, Math.max(TOD.night, tunS) * (0.5 + 1.2 * CM.brake));
      spray.update(dt, car.group, st.speed, U.uWet.value * (1 - tunS), w.snow * (1 - tunS), cold, sprayAmb, spraySun, sprayTail, camera.position, st.spray);
    }
    snowfall.update(camera.position, t, w.snow * (0.3 + 0.7 * ov) * (1 - tunS), day());
    birds.setFog(scene.fog.near); birds.update(dt, t, camera.position, fwd, right, w, day(), rn, car.group.position);
    const tp0 = performance.now(); parts.update(dt, t, camera.position, fwd, right, w.sakura * (1 - tunS), f.y, nightK, (w.country + w.sakura * 0.4) * (1 - rn) * (1 - tunS), w.mountain * (1 - tunS)); const tp1 = performance.now();
    if (audio) {
      path.at(sx, fl); const dxc = Math.hypot(fl.x - world.origin.x - camera.position.x, fl.z - world.origin.z - camera.position.z);
      const trainD = train.st.active ? train.group.position.distanceTo(camera.position) : 1e9;
      const spA = st.speed / 15; // road roar: louder with speed, but compressed above cruising (and a rush of wind instead)
      audio.update(spA < 1.5 ? spA : 1.5 + (spA - 1.5) * 0.4, w, day(), { rush: clamp((st.speed - 25) / 40, 0, 1), bell: bell ? Math.pow(clamp(1 - dxc / 260, 0, 1), 1.5) : 0, train: Math.pow(clamp(1 - trainD / 230, 0, 1), 2), rain: rn * (1 - tunS) * (1 - w.snow), wetRoad: U.uWet.value * (1 - tunS), speed: st.speed, load: clamp(CM.lon / 3, 0, 1), roof: st.cam !== 2, tunnel: tunS, water: (() => { const rv = riverNear(st.s); return Math.max(rv ? 1 - sstep(12, 150, Math.abs(st.s - rv.s)) : 0, w.mountain * 0.45); })(), dusk: TOD.warm * (st.tod > 0.5 ? 1 : 0.3) });
    }
    zoneCard(zoneAt(st.s + 40));

    if (PROF) { renderer.info.autoReset = false; renderer.info.reset(); }
    let gq = null;
    if (PROF && PROF.tq) { gq = PROF.gl.createQuery(); PROF.gl.beginQuery(PROF.tq.TIME_ELAPSED_EXT, gq); }
    const tr0 = performance.now(); post.composer.render(dt); const tr1 = performance.now();
    if (gq) {
      const gl = PROF.gl; gl.endQuery(PROF.tq.TIME_ELAPSED_EXT); PROF.pend.push(gq);
      while (PROF.pend.length && gl.getQueryParameter(PROF.pend[0], gl.QUERY_RESULT_AVAILABLE)) {
        const q0 = PROF.pend.shift(), ns = gl.getQueryParameter(q0, gl.QUERY_RESULT); gl.deleteQuery(q0);
        if (!gl.getParameter(PROF.tq.GPU_DISJOINT_EXT)) { PROF.gpu = ns / 1e6; PROF.gpuN++; PROF.gpuSum += PROF.gpu; if (PROF.gpu > PROF.gpuMax) PROF.gpuMax = PROF.gpu; }
      }
    }
    const PB = window.__pb || (window.__pb = { world: 0, parts: 0, render: 0 }); PB.world = PB.world * 0.95 + (tw1 - tw0) * 0.05; PB.parts = PB.parts * 0.95 + (tp1 - tp0) * 0.05; PB.render = PB.render * 0.95 + (tr1 - tr0) * 0.05;

    ftAvg = ftAvg * 0.95 + (performance.now() - ft0) * 0.05; window.__ft = ftAvg;
    if (PROF) { // ?prof: record every frame whose main-thread work exceeds 12 ms, with what happened in it
      const ri = renderer.info, total = performance.now() - ft0;
      const rec = { t: +t.toFixed(2), s: Math.round(st.s), total: +total.toFixed(1), world: +(tw1 - tw0).toFixed(1), render: +(tr1 - tr0).toFixed(1), gpu: +(PROF.gpu || 0).toFixed(1),
        progs: ri.programs.length - PROF.progs, geos: ri.memory.geometries - PROF.geos, tex: ri.memory.textures - PROF.tex, calls: ri.render.calls, tris: ri.render.triangles };
      if (rec.progs > 0 && started) rec.newProgs = ri.programs.slice(-rec.progs).map(pr => (pr.name || '') + ':' + String(pr.cacheKey).slice(0, 60));
      PROF.progs = ri.programs.length; PROF.geos = ri.memory.geometries; PROF.tex = ri.memory.textures;
      PROF.frames++; PROF.sum += total; if (total > PROF.max) PROF.max = total;
      if (total > 12 && started) PROF.spikes.push(rec);
      PROF.last = rec;
    }
    // HUD + adaptive quality
    if ((hudT += dt) > 0.25) {
      hudT = 0;
      $spd.textContent = Math.round(st.speed * 3.6);
      $dist.textContent = (st.dist / 1000).toFixed(1);
      const mins = Math.floor(st.tod * 1440);
      $clock.textContent = `${String(Math.floor(mins / 60)).padStart(2, '0')}:${String(mins % 60).padStart(2, '0')}`;
    }
    frames++;
    // adaptive quality: if frames stay slow, step down (resolution → bloom → shadow detail → view distance)
    if (started && frames > 150 && dt > 0.03) slowT += dt; else slowT = Math.max(0, slowT - dt * 0.5);
    if (slowT > 3 && !QS.has('q')) { slowT = 0; stepDown(); }
  }
  window.__dbg = { renderer, st, scene, camera, world, TOD, KEYS, X, train, weather, U, birds, cine, post, car, sun, M, cells: atlas.cells, clouds, pclouds, band, get bandTr() { return bandTr; }, sky, mountains, shadowDir, CM, spray, grass, sea, get ferry() { return ferry; }, get tram() { return tram; }, get fishers() { return fishers; }, get dolmus() { return M.atlasDol || null; }, get trainPaint() { return M.train || null; }, get balloons() { return balloons; }, get realSky() { return realSky; }, TRL, get audio() { return audio; }, uch: { TF_DAY, TF_GOLD, TF_SUNSET, TF_NIGHT, UG_DAY, UCH }, pas: { TFP_DAY, TFP_GOLD, TFP_SUNSET, TFP_NIGHT, PG_DAY, PG_GOLD, PG_SUNSET, PG_NIGHT, PAS_Z, PAS_R, pasAz }, night: { NT, NTZ, NSKY_N, MOON_B, CF_N } };
  status('');
  $start.classList.add('ready');
  if (QS.has('auto')) begin();
  requestAnimationFrame(frame);
}

main().catch(e => { console.error(e); status('Something went wrong: ' + e.message); });
