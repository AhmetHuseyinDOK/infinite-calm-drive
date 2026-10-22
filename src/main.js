import * as THREE from 'three';
import { Path, ZONES, zoneW, zoneAt, zparam, ZINFO, setStartZone, crossingS, crossingValid, XING, XOFF, riverNear, RIV, ROFF, groundOffsetMix, tunnelNear, T_HALF, T_RIDGE } from './path.js';
import { makeCrossingRig, makeTrain, xingPosts } from './crossing.js';
import { buildAtlas, buildFoliage } from './textures.js';
import { makeMaterials, U, groundMaterialFor, setShadowTaps, setGrazeFade, makeCloudMap } from './materials.js';
import { setAtlas, setFoliage, warmTrees, setLeafDensity } from './props.js';
import { World, CH } from './chunks.js';
import { makeSky, paintClouds, makeClouds, makeMountains, updateTOD, applyWeather, TOD, lightDirAt } from './sky.js';
import { makeWeather, makeRain, makeSnow, PLIGHT } from './weather.js';
import { makeSpray } from './spray.js';
import { makeMirage } from './mirage.js';
import { makeBirds } from './birds.js';
import { makeSea, foamMaterial, riverMaterial } from './sea.js';
import { makeCar } from './car.js';
import { makePost } from './post.js';
import { makeAudio } from './audio.js';
import { makeParticles } from './particles.js';
import { clamp, lerp, sstep, setSeed, hash2 } from './util.js';

const QS = new URLSearchParams(location.search);
// inside an X player card (or any iframe): lighter quality, compact UI, tap-only start
const EMBED = QS.has('embed') || (() => { try { return window.self !== window.top; } catch (e) { return true; } })();
if (EMBED) document.body.classList.add('embed');
if (QS.has('shot')) document.body.classList.add('shot');
setSeed(QS.has('seed') ? parseInt(QS.get('seed')) : (Math.random() * 1e9) | 0);
setStartZone(QS.get('env') || 'city');
const $ = id => document.getElementById(id);
const status = t => { const el = $('loading'); if (el) el.textContent = t; };

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

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xc6ddf2, 0.0019, 700); // near = exp² density, far = draw distance (see materials.js)
  const camera = new THREE.PerspectiveCamera(52, innerWidth / innerHeight, 0.5, 7000);

  const sun = new THREE.DirectionalLight(0xffffff, 3);
  sun.castShadow = true;
  const SM = quality === 'low' ? 1024 : quality === 'mid' ? 1536 : 2048; sun.shadow.mapSize.set(SM, SM);
  setShadowTaps(QS.has('pcf') ? parseInt(QS.get('pcf')) : 1); // ?pcf=2: adaptive (4 taps on edge texels; +0.5–0.9 ms), 4: always 4
  // Shadows follow the sun continuously. The shadow camera is aimed along `shadowDir`, re-aimed only when the sun has
  // moved ~6° (its texel grid stays fixed in the world between re-aims, snapped to whole texels as the car drives),
  // and a skew slides every point along the TRUE light direction onto the pivot plane under the car before the
  // camera sees it. The direction used to be held and stepped every 0.23°, which made all shadows jump ~3× a second
  // (6–21 cm by day, metres near sunset). Ground at the pivot height keeps its texels while the sun moves.
  const SH_HALF = 62; // shadow frustum half-size (m): ~6 cm texels at 2048²
  const shCam = sun.shadow.camera, shSkew = new THREE.Matrix4(), shTmp = new THREE.Matrix4();
  Object.assign(shCam, { left: -SH_HALF, right: SH_HALF, top: SH_HALF, bottom: -SH_HALF, near: 1, far: 420 });
  const shadowDir = new THREE.Vector3(0, 1, 0), shX = new THREE.Vector3(), shY = new THREE.Vector3(), shT = new THREE.Vector3(), UPV = new THREE.Vector3(0, 1, 0);
  const shC = new THREE.Vector3(0, 150, 60), shLook = new THREE.Vector3(), shAim = new THREE.Vector3(); // (start: the warm-up meshes at the origin are in view)
  let shY0 = null, shPhX = 0, shPhY = 0, shTex = 0; // pivot plane height (follows the road in 3 m steps); texel-grid phase
  sun.shadow.updateMatrices = function () { // three's version aims the camera at the light itself
    shCam.position.copy(shC); shCam.lookAt(shLook); shCam.updateMatrixWorld();
    shCam.updateProjectionMatrix(); // projection · (view · skew · view⁻¹), so three's projection · view applies the skew first
    shTmp.multiplyMatrices(shCam.matrixWorldInverse, shSkew).multiply(shCam.matrixWorld);
    shCam.projectionMatrix.multiply(shTmp); shCam.projectionMatrixInverse.copy(shCam.projectionMatrix).invert();
    this._updateMatrix(shCam, this.matrix, this._frustum);
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
  const fol = buildFoliage(renderer); setFoliage(fol.cells); U.uTuftV.value.set(fol.tuftV[0], fol.tuftV[1]);
  const M = makeMaterials(atlas.textures(renderer), fol.tex);
  const cloudMap = makeCloudMap(); cloudMap.update(renderer, 0, 0, 0, 0);
  status('painting the clouds…');
  await new Promise(r => setTimeout(r, 10));
  setLeafDensity(QS.has('leafd') ? parseFloat(QS.get('leafd')) : quality === 'high' ? 0.72 : 0.62); // fewer, larger foliage cards
  warmTrees();
  const path = new Path();
  const foamMat = foamMaterial();
  const riverMat = riverMaterial();
  const world = new World(scene, path, M, foamMat, riverMat);
  const sky = makeSky(); scene.add(sky);
  const clouds = makeClouds(paintClouds(renderer)); scene.add(clouds.group);
  const mountains = makeMountains(); scene.add(mountains.group);
  const sea = makeSea(); scene.add(sea.mesh);
  const car = makeCar(); car.group.rotation.order = 'YXZ'; scene.add(car.group);
  car.group.traverse(o => { o.userData.car = true; }); // casts into its own shadow map only
  const parts = makeParticles(M.glowTex); parts.group.forEach(o => scene.add(o));
  // anti-aliasing: MSAA on desktop; FXAA in the grade pass on phones and in the X embed (MSAA's 2× buffer and resolve cost
  // 2–5 ms a frame at phone resolution on a mobile-class GPU — most in foliage); none at low quality. ?aa=msaa|fxaa|none
  const AA = QS.get('aa') || (quality === 'high' ? 'msaa' : quality === 'mid' ? 'fxaa' : 'none');
  const post = makePost(renderer, scene, camera, { msaa: AA === 'msaa' ? (quality === 'high' ? 4 : 2) : 0, fxaa: AA === 'fxaa' });
  U.uReflTex.value = post.refl.rt.texture;
  const hz = new THREE.Vector3(), camFlat = new THREE.Vector3(), REFL = QS.get('refl') || 'auto';
  const LIGHTS_ON = QS.has('lightson') ? parseFloat(QS.get('lightson')) : -1; // (test hook)
  const glowV = new THREE.Vector3(), HAZE_GLOW = QS.has('haze') ? parseFloat(QS.get('haze')) : 1; // (test hook: ?haze=0 off)
  const rig = makeCrossingRig(); scene.add(rig.group);
  const train = makeTrain(); scene.add(train.group);
  const weather = makeWeather(QS), rain = makeRain(), snowfall = makeSnow(); scene.add(rain.mesh, snowfall.mesh);
  const spray = makeSpray(); scene.add(spray.mesh); const mirage = makeMirage(); scene.add(mirage.mesh); const sprayAmb = new THREE.Color(), spraySun = new THREE.Color(), sprayTail = new THREE.Vector4();
  const birds = makeBirds(); scene.add(birds.mesh);
  let wet = weather.W.rain;

  // ------------------------------------------------------------ state
  // speed: the zone's cruising speed × mult (0.4 … 5.5, so up to ~190–265 km/h); uHome: the lane the car settles back
  // into when nobody steers — wherever the player last steered it (it used to always drift back to the left lane)
  const MULT_MIN = 0.4, MULT_MAX = 5.5;
  const st = { s: Math.max(100, parseFloat(QS.get('s')) || 140), u: -1.65, uHome: -1.65, speed: 0, mult: 1, steer: 0, lastInput: -1e9, tod: clamp(parseFloat(QS.get('t')) || 0.4, 0, 0.999), todPaused: QS.has('freeze'), dist: 0, spray: QS.has('nospray') ? 0 : 1 /* test switch */, cam: { low: 1, eye: 2, top: 3, film: 4 }[QS.get('cam')] ?? (EMBED ? 4 : 0) };
  let started = false;
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
    const mats = [M.color, M.atlas, M.foliage, M.leaf, M.lamp, M.sig, M.sodium, M.decal, M.pool, foamMat, riverMat];
    for (let i = 0; i < ZONES.length; i++) { mats.push(groundMaterialFor([ZONES[i]])); mats.push(groundMaterialFor([ZONES[i], ZONES[(i + 1) % ZONES.length]])); }
    for (const m of mats) { const o = new THREE.Mesh(tri, m); o.castShadow = o.receiveShadow = true; o.frustumCulled = false; warm.add(o); }
    warm.position.set(0, 0, 0); scene.add(warm);
    sun.target.position.set(0, 0, 0); sun.position.set(0, 150, 60); // so the warm-up meshes sit inside the shadow camera
    const hidden = [rain.mesh, snowfall.mesh, spray.mesh, mirage.mesh, train.group, rig.group, sea.mesh].filter(o => !o.visible);
    for (const o of hidden) o.visible = true;
    renderer.setRenderTarget(post.composer.readBuffer); // the game draws into the post-processing buffer (linear output)
    renderer.compile(scene, camera);
    renderer.render(scene, camera);              // also compiles the shadow-pass (depth) programs
    renderer.setRenderTarget(null);
    for (const o of hidden) o.visible = false;
    scene.remove(warm); tri.dispose();
    // and the post passes: bloom is off by day, so its 8 programs used to compile all at once at the first sunset,
    // night or tunnel — a 160 ms freeze here, far longer on a phone
    post.bloom.enabled = post.refl.enabled = true; post.composer.render(0); post.bloom.enabled = post.refl.enabled = false; // (+ the wet-road copy pass)
  }
  // level crossing state
  const X = { k: Math.ceil((st.s - XOFF) / XING), phase: 'idle', raise: 1, decided: false, t2: 0 };

  const f = {}, fc = {}, fl = {};
  const camPos = new THREE.Vector3(), look = new THREE.Vector3(), tmp = new THREE.Vector3();
  let camInit = false;
  const fwd = new THREE.Vector3(), right = new THREE.Vector3();

  // ------------------------------------------------------------ UI
  const $spd = $('spd'), $dist = $('dist'), $clock = $('clock'), $zone = $('zone'), $start = $('start'), $hint = $('hint');
  let audio = null, curZone = null, zoneTimer = 0, hudT = 0;
  function zoneCard(z) {
    if (!started || z === curZone) return;
    curZone = z;
    $zone.querySelector('.jp').textContent = ZINFO[z].jp; $zone.querySelector('.en').textContent = ZINFO[z].en;
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
  let ftAvg = 0, tunS = 0;
  const PROF = QS.has('prof') ? (window.__prof = { spikes: [], frames: 0, sum: 0, max: 0, progs: 0, geos: 0, tex: 0, last: null, gpu: 0, gpuN: 0, gpuSum: 0, gpuMax: 0, pend: [] }) : null;
  if (PROF) { PROF.gl = renderer.getContext(); PROF.tq = PROF.gl.getExtension('EXT_disjoint_timer_query_webgl2'); }
  const meteor = { p: -1, a: new THREE.Vector3(), b: new THREE.Vector3(), next: 5 };
  // the car's motion as its suspension feels it (see car.update): sideways / fore-aft acceleration, the road surface, rail jolts
  const CM = { lat: 0, lon: 0, road: 0, jolt: 0, kick: 0, u: st.u, vu: 0, v: 0, s: st.s, yaw: 0, brake: 0, rk: NaN, rb: null };
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
    if (st.steer) { st.lastInput = now; st.uHome = st.u; }

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
    else if (now - st.lastInput > 3000) st.u += (clamp(st.uHome, -rw + 0.85, rw - 0.85) + Math.sin(t / 11) * 0.1 - st.u) * Math.min(1, dt * 0.9);

    // time of day (nights pass a little quicker)
    if (!st.todPaused && started) st.tod = (st.tod + (dt / 480) * (TOD.night > 0.5 ? 1.7 : 1)) % 1;
    updateTOD(st.tod);
    weather.update(dt);
    const ov = weather.W.ov, rn = weather.W.rain;
    applyWeather(ov, rn);
    wet = clamp(wet + (rn > 0.25 ? dt / 18 : -dt / 120), 0, 1);

    // stream the world
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
    car.update(dt, st.speed, Math.max(TOD.night, tunS), rn, CM);
    rig.update(xValid && xDist > -24 && xDist < 700 ? xingPosts(path, sx) : null, world.origin, X.raise, bell, t);
    train.update(dt, path, world.origin, sstep(0.15, 0.8, TOD.night), zparam(sx, 'rw') + 3.2);

    // camera
    // camera rigs: 0 chase, 1 low "anime layout" angle, 2 eye level with no car (pure background art)
    const RIGS = [{ back: 8.2, up: 3.1, ahead: 22, lookY: 1.45, cu: 0.85, lu: 0.5 }, { back: 7.0, up: 1.3, ahead: 26, lookY: 2.9, cu: 0.85, lu: 0.5, side: 1.15 }, { back: -0.6, up: 1.55, ahead: 30, lookY: 2.3, cu: 1, lu: 0.6 },
      { back: 0.01, up: parseFloat(QS.get('top')) || 45, ahead: 0, lookY: 0, cu: 0, lu: 0 }]; // [3] = test-only top-down view
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
        const wz = zoneW(st.s), walk = wz.city + wz.sakura > 0.5; // track from the sidewalk where there is one (never through the sakura trunks)
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

    // lighting & atmosphere
    const w = zoneW(st.s);
    sun.color.copy(TOD.sunCol); sun.intensity = TOD.sunI;
    // Shadows (see the notes where the sun is created): the light itself follows the sun every frame; the shadow
    // camera is re-aimed only every ~6°, centred 26 m ahead of the car and snapped to whole texels; the skew
    // P' = P + (P.y − y0)·(D/D.y − L/L.y) slides each point along the true light L onto the camera's direction D.
    { const L = TOD.lightDir; // L.y ≥ 0.12 (sky.js)
      if (shadowDir.angleTo(L) > 0.1) { // re-aim (re-rasterises every shadow): at where the sun will be once it has moved
        let k = 0; // ~0.09 rad, so the skew swings −0.1 … +0.1 rad and re-aims come half as often (every ~20 s by day)
        if (started && !st.todPaused) for (let j = 1; j <= 60; j++) { if (lightDirAt(st.tod + j * 0.001, shAim).angleTo(L) > 0.09) break; k = j; }
        lightDirAt(st.tod + k * 0.001, shadowDir); shPhX = shPhY = 0;
      }
      shX.crossVectors(UPV, shadowDir).normalize(); shY.crossVectors(shadowDir, shX);
      shT.set(car.group.position.x + f.fx * 26, car.group.position.y, car.group.position.z + f.fz * 26);
      sun.target.position.copy(shT); sun.position.copy(shT).addScaledVector(L, 200);
      const tex = (2 * SH_HALF) / sun.shadow.mapSize.x, vx = shadowDir.x / shadowDir.y - L.x / L.y, vz = shadowDir.z / shadowDir.y - L.z / L.y;
      if (tex !== shTex) { shTex = tex; shPhX = shPhY = 0; }
      { const y0 = Math.round(car.group.position.y); // the pivot follows the road in 3 m steps; moving it slides the whole
        if (shY0 === null) shY0 = y0;              // map by d·v, so the texel grid's phase moves with it: no re-rasterising
        else if (Math.abs(car.group.position.y - shY0) > 3) { const d = y0 - shY0; shPhX -= d * (vx * shX.x + vz * shX.z); shPhY -= d * (vx * shY.x + vz * shY.z); shY0 = y0; } }
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
    hemi.color.copy(TOD.hemiSky); hemi.groundColor.copy(TOD.hemiGround); hemi.intensity = TOD.hemiI;
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
    const fogD = (w.city * 0.0022 + w.sakura * 0.0019 + w.coast * 0.0011 + w.country * 0.0014 + w.mountain * 0.0017 + w.snow * 0.0021) * (1 + TOD.night * 0.25);
    scene.fog.near = fogD * (1 + 0.55 * ov + 0.45 * rn); scene.fog.far = world.ahead * 0.92;
    U.uSkyHor.value.copy(TOD.horizon); U.uSkyZen.value.copy(TOD.zenith); U.uTime.value = t;
    U.uWet.value = wet * (1 - w.snow);
    { // wet roads mirror the lights (WET chunk in materials.js): the copy pass only runs while the road is wet
      const on = U.uWet.value > 0.04 && quality !== 'low' && tunS < 0.5 && REFL !== '0';
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
    su.uNight.value = TOD.night; su.uWarm.value = TOD.warm; su.uTime.value = t; su.uCirrusCol.value.copy(TOD.cLit).lerp(TOD.horizon, 0.25);
    su.uCirrus.value = 0.6 * (1 - ov) * (1 - 0.65 * sstep(0.4, 0.9, TOD.night)); su.uOvercast.value = ov;
    su.uMilky.value = sstep(0.55, 0.95, TOD.night) * (1 - ov);
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
    clouds.update(camera.position, dt);
    mountains.update(camera.position, Math.max(w.snow, zoneW(st.s + 600).snow * 0.7));
    let seaW = 0; for (const d of [-150, 0, 250, 500, 800]) seaW = Math.max(seaW, zoneW(st.s + d).coast);
    sea.mesh.visible = seaW > 0.001;
    sea.update(camera.position, t, fogD * 0.8, sstep(0.0, 0.35, seaW));
    riverMat.uniforms.uTime.value = t; riverMat.uniforms.uFogD.value = scene.fog.near; riverMat.uniforms.uNight.value = TOD.night; riverMat.uniforms.uSpecK.value = 1 - TOD.overcast * 0.85;
    U.uSunDir.value.copy(TOD.lightDir); U.uSunCol.value.copy(TOD.sunCol);
    foamMat.uniforms.uTime.value = t; foamMat.uniforms.uLight.value.setRGB(1, 1, 1).multiplyScalar(0.35 + 0.65 * day());
    const nightK = sstep(0.15, 0.8, TOD.night);
    M.atlas.emissiveIntensity = 0.1 + nightK * 1.05;
    // home lights come on one by one over the two hours after sunset (18:00 → ~20:00 on the clock, ~40 s of driving) and
    // go off one by one at dawn; on a dark rainy day some are on in the daytime too
    U.uLightsOn.value = LIGHTS_ON >= 0 ? LIGHTS_ON : Math.max(sstep(0.02, 0.75, TOD.night), 0.3 * ov);
    M.lamp.color.setRGB(0.85, 0.85, 0.8).lerp(new THREE.Color(3.6, 2.8, 1.8), nightK);
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
    world.lod(st.s, DETAIL_FAR, nightK > 0.15, FAR_LEAF);
    U.uNight.value = nightK;
    post.bloom.strength = lerp(0.32, 0.55, nightK); post.bloom.threshold = lerp(1.35, 0.95, nightK); post.bloom.radius = lerp(0.55, 0.35, nightK);
    // bloom only where it shows (night lamps, sunsets, tunnels): by day at threshold 1.35 it cost ~7 ms for almost nothing
    { const need = Math.max(nightK, tunS, sstep(0.25, 0.6, TOD.warm) * (1 - ov)); post.bloom.enabled = bloomAllowed && need > 0.02; post.bloom.strength *= Math.min(1, need * 4); }
    renderer.toneMappingExposure = lerp(1.0, 1.15, nightK) * (1 + 0.35 * tunS);

    // sun streaks in the grade pass
    tmp.copy(camera.position).addScaledVector(TOD.sunDir, 1000).project(camera);
    const g = post.grade.uniforms;
    const inFront = tmp.z < 1 ? 1 : 0, edge = Math.max(Math.abs(tmp.x), Math.abs(tmp.y));
    g.uSun.value.set(tmp.x * 0.5 + 0.5, tmp.y * 0.5 + 0.5);
    g.uSunVis.value = inFront * (1 - sstep(1.0, 1.9, edge)) * sstep(-0.02, 0.15, TOD.sunEl) * (1 - TOD.night) * (1 - ov) * (1 - tunS);
    g.uSat.value = 1.1 - 0.12 * ov;
    g.uDay.value = day(); g.uWarm.value = TOD.warm; g.uTime.value = t;

    rain.update(camera.position, t, rn * (1 - tunS) * (1 - w.snow), day());
    { // 逃げ水: the road mirage of a hot clear summer day, around midday (mirage.js); not near a tunnel
      const tq = tunnelNear(st.s + 190), hot = (w.city + w.country + w.coast) * (1 - ov) * (1 - wet) * sstep(0.6, 0.9, TOD.sunEl) * (st.mirage ?? 1) * (tq && Math.abs(st.s + 190 - tq.s) < 330 ? 0 : 1);
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
  window.__dbg = { renderer, st, scene, camera, world, TOD, X, train, weather, U, birds, cine, post, car, sun, M, clouds, sky, mountains, shadowDir, CM, spray, get audio() { return audio; } };
  status('');
  $start.classList.add('ready');
  if (QS.has('auto')) begin();
  requestAnimationFrame(frame);
}

main().catch(e => { console.error(e); status('Something went wrong: ' + e.message); });
