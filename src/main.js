import * as THREE from 'three';
import { Path, zoneW, zoneAt, zparam, ZINFO, setStartZone, crossingS, crossingValid, XING, XOFF } from './path.js';
import { makeCrossingRig, makeTrain, xingPosts } from './crossing.js';
import { buildAtlas, buildFoliage } from './textures.js';
import { makeMaterials, U } from './materials.js';
import { setAtlas, setFoliage } from './props.js';
import { World } from './chunks.js';
import { makeSky, paintClouds, makeClouds, makeMountains, updateTOD, applyWeather, TOD } from './sky.js';
import { makeWeather, makeRain } from './weather.js';
import { makeSea, foamMaterial } from './sea.js';
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

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xc6ddf2, 0.0019, 700); // near = exp² density, far = draw distance (see materials.js)
  const camera = new THREE.PerspectiveCamera(52, innerWidth / innerHeight, 0.5, 7000);

  const sun = new THREE.DirectionalLight(0xffffff, 3);
  sun.castShadow = true;
  const SM = quality === 'low' ? 1024 : 2048; sun.shadow.mapSize.set(SM, SM);
  Object.assign(sun.shadow.camera, { left: -75, right: 75, top: 75, bottom: -75, near: 1, far: 420 });
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.05;
  scene.add(sun, sun.target);
  const hemi = new THREE.HemisphereLight(0xa4c8ff, 0xc8b8a0, 1.6); scene.add(hemi);

  status('painting the town…');
  await new Promise(r => setTimeout(r, 10));
  const atlas = buildAtlas(); setAtlas(atlas);
  const fol = buildFoliage(renderer); setFoliage(fol.cells);
  const M = makeMaterials(atlas.textures(renderer), fol.tex);
  status('painting the clouds…');
  await new Promise(r => setTimeout(r, 10));
  const path = new Path();
  const foamMat = foamMaterial();
  const world = new World(scene, path, M, foamMat);
  const sky = makeSky(); scene.add(sky);
  const clouds = makeClouds(paintClouds(renderer)); scene.add(clouds.group);
  const mountains = makeMountains(); scene.add(mountains.group);
  const sea = makeSea(); scene.add(sea.mesh);
  const car = makeCar(); car.group.rotation.order = 'YXZ'; scene.add(car.group);
  const parts = makeParticles(M.glowTex); parts.group.forEach(o => scene.add(o));
  const post = makePost(renderer, scene, camera, { msaa: quality === 'high' ? 4 : quality === 'mid' ? 2 : 0 });
  const rig = makeCrossingRig(); scene.add(rig.group);
  const train = makeTrain(); scene.add(train.group);
  const weather = makeWeather(QS), rain = makeRain(); scene.add(rain.mesh);
  let wet = weather.W.rain;

  // ------------------------------------------------------------ state
  const st = { s: Math.max(100, parseFloat(QS.get('s')) || 140), u: -1.65, speed: 0, mult: 1, steer: 0, lastInput: -1e9, tod: clamp(parseFloat(QS.get('t')) || 0.4, 0, 0.999), todPaused: QS.has('freeze'), dist: 0, cam: { low: 1, eye: 2 }[QS.get('cam')] || 0 };
  let started = false;
  status('building the road…');
  await new Promise(r => setTimeout(r, 10));
  // build only the first stretch up-front; the rest streams in while the title screen is up
  const AHEAD = EMBED ? 620 : world.ahead; world.ahead = 260;
  while (world.update(st.s, 1e9)) {}
  world.ahead = AHEAD;
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
  addEventListener('pointermove', e => { if (ptr && e.pointerId === ptr.id) { ptr.x = e.clientX; ptr.y = e.clientY; st.mult = clamp(ptr.sc - ((ptr.y - ptr.sy) / innerHeight) * 1.6, 0.4, 1.8); } });
  addEventListener('pointerup', () => { ptr = null; });
  addEventListener('pointercancel', () => { ptr = null; });
  // some in-app webviews (X, Instagram…) never send pointer events — mirror the same steering on touch
  canvas.addEventListener('touchstart', e => { const t = e.changedTouches[0]; ptr = { id: 'touch', x: t.clientX, y: t.clientY, sy: t.clientY, sc: st.mult }; e.preventDefault(); }, { passive: false });
  canvas.addEventListener('touchmove', e => { if (!ptr) return; const t = e.changedTouches[0]; ptr.x = t.clientX; ptr.y = t.clientY; st.mult = clamp(ptr.sc - ((ptr.y - ptr.sy) / innerHeight) * 1.6, 0.4, 1.8); e.preventDefault(); }, { passive: false });
  canvas.addEventListener('touchend', () => { ptr = null; });
  canvas.addEventListener('touchcancel', () => { ptr = null; });
  function toggleSound() { if (audio) { audio.toggle(); $('snd').style.opacity = audio.muted ? 0.4 : 1; } }
  function toggleTime() { st.todPaused = !st.todPaused; $('tim').style.opacity = st.todPaused ? 0.4 : 1; }
  function toggleCam() { st.cam = (st.cam + 1) % 3; }
  const WX_ICON = { auto: '⛅', clear: '☀', cloudy: '☁', rain: '☂' };
  function cycleWeather() { $('wx').textContent = WX_ICON[weather.cycle()]; }
  $('wx').textContent = WX_ICON[weather.W.mode];
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
  let needResize = false, lastSize = '';
  function resize() {
    const w = innerWidth, h = innerHeight, asp = w / h, key = w + 'x' + h + '@' + DPR;
    if (key === lastSize) return;
    lastSize = key;
    renderer.setPixelRatio(DPR); renderer.setSize(w, h, false);
    post.composer.setPixelRatio(DPR); post.composer.setSize(w, h);
    camera.aspect = asp;
    camera.fov = asp >= 1 ? 52 : clamp((2 * Math.atan(Math.tan((34 * Math.PI) / 180) / asp) * 180) / Math.PI, 52, 80);
    camera.updateProjectionMatrix();
    post.grade.uniforms.uAspect.value = asp;
  }
  addEventListener('resize', () => { needResize = true; });
  if (window.visualViewport) visualViewport.addEventListener('resize', () => { needResize = true; });
  resize();

  // ------------------------------------------------------------ quality ladder (remembered between visits)
  let qLevel = 0;
  function stepDown(persist = true) {
    if (DPR > 1.05) { DPR = Math.max(1, DPR - 0.25); needResize = true; }
    else if (post.bloom.enabled) post.bloom.enabled = false;
    else if (sun.shadow.mapSize.x > 1024) { sun.shadow.mapSize.set(1024, 1024); if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; } }
    else if (world.ahead > 430) world.ahead = 430;
    else return;
    qLevel++;
    if (persist) try { localStorage.setItem('icd-q', String(qLevel)); } catch (e) {}
  }
  try { const saved = parseInt(localStorage.getItem('icd-q') || '0'); if (!QS.has('q')) for (let i = 0; i < Math.min(saved, 6); i++) stepDown(false); qLevel = Math.max(qLevel, saved || 0); } catch (e) {}

  // ------------------------------------------------------------ loop
  let last = performance.now(), t = 0, frames = 0, slowT = 0;
  const day = () => 1 - TOD.night;
  let ftAvg = 0;
  function frame(now) {
    requestAnimationFrame(frame);
    const ft0 = performance.now();
    if (needResize) { needResize = false; resize(); }
    const dt = Math.min(0.05, (now - last) / 1000); last = now; t += dt;

    // input
    st.steer = 0;
    if (keys.ArrowLeft || keys.a || keys.A) st.steer = -1;
    if (keys.ArrowRight || keys.d || keys.D) st.steer = 1;
    if (keys.ArrowUp || keys.w || keys.W) st.mult = clamp(st.mult + dt * 0.4, 0.4, 1.8);
    if (keys.ArrowDown || keys.s || keys.S) st.mult = clamp(st.mult - dt * 0.4, 0.4, 1.8);
    if (ptr && Math.abs(ptr.y - ptr.sy) < 30) st.steer = ptr.x < innerWidth / 2 ? -1 : 1;
    if (st.steer) st.lastInput = now;

    // drive (left-hand traffic: we keep to the left lane)
    // ---- level crossing: bells, barriers, a passing train — and we wait patiently at the stop line
    let sx = crossingS(X.k);
    if (st.s - sx > 24) { X.k++; sx = crossingS(X.k); Object.assign(X, { phase: 'idle', raise: 1, decided: false }); }
    const xValid = crossingValid(sx), xDist = sx - st.s;
    if (xValid && !X.decided && xDist < 150) {
      X.decided = true;
      if (xDist > 75 && started && (QS.has('xing') || hash2(X.k, 99) < 0.8)) { X.phase = 'warn'; train.start(sx, hash2(X.k, 7) < 0.5 ? 1 : -1, 16); }
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
    st.speed += (target - st.speed) * Math.min(1, dt * 0.5);
    st.s += st.speed * dt; st.dist += st.speed * dt;
    const rw = zparam(st.s, 'rw');
    if (st.steer) st.u = clamp(st.u + st.steer * dt * 2.4, -rw + 0.85, rw - 0.85);
    else if (now - st.lastInput > 3000) st.u += (-1.65 + Math.sin(t / 11) * 0.1 - st.u) * Math.min(1, dt * 0.9);

    // time of day (nights pass a little quicker)
    if (!st.todPaused && started) st.tod = (st.tod + (dt / 480) * (TOD.night > 0.5 ? 1.7 : 1)) % 1;
    updateTOD(st.tod);
    weather.update(dt);
    const ov = weather.W.ov, rn = weather.W.rain;
    applyWeather(ov, rn);
    wet = clamp(wet + (rn > 0.25 ? dt / 18 : -dt / 120), 0, 1);

    // stream the world
    const tw0 = performance.now(); world.update(st.s, started ? 6 : 14); const tw1 = performance.now();
    path.at(st.s, f);
    if (Math.abs(f.x - world.origin.x) > 900 || Math.abs(f.z - world.origin.z) > 900) {
      const dx = Math.round(f.x) - world.origin.x, dz = Math.round(f.z) - world.origin.z;
      world.setOrigin(Math.round(f.x), Math.round(f.z));
      camPos.x -= dx; camPos.z -= dz; look.x -= dx; look.z -= dz; parts.shift && parts.shift(dx, dz);
    }
    const ox = world.origin.x, oz = world.origin.z;

    // car
    const slope = (path.at(st.s + 1.5, fl).y - path.at(st.s - 1.5, fc).y) / 3;
    car.group.position.set(f.x + f.rx * st.u - ox, f.y + 0.01, f.z + f.rz * st.u - oz);
    const steerYaw = (st.steer ? -st.steer * 0.05 : 0);
    car.group.rotation.set(-Math.atan(slope), f.h + steerYaw, 0);
    car.update(dt, st.speed, TOD.night, rn);
    rig.update(xValid && xDist > -24 && xDist < 700 ? xingPosts(path, sx) : null, world.origin, X.raise, bell, t);
    train.update(dt, path, world.origin, sstep(0.15, 0.8, TOD.night), zparam(sx, 'rw') + 3.2);

    // camera
    // camera rigs: 0 chase, 1 low "anime layout" angle, 2 eye level with no car (pure background art)
    const R = [{ back: 8.2, up: 3.1, ahead: 22, lookY: 1.45, cu: 0.85, lu: 0.5 }, { back: 7.0, up: 1.3, ahead: 26, lookY: 2.9, cu: 0.85, lu: 0.5, side: 1.15 }, { back: -0.6, up: 1.55, ahead: 30, lookY: 2.3, cu: 1, lu: 0.6 }][st.cam];
    car.group.visible = st.cam !== 2;
    path.at(st.s - R.back, fc); path.at(st.s + R.ahead, fl);
    const cu = st.u * R.cu;
    const cside = cu + (R.side || 0);
    tmp.set(fc.x + fc.rx * cside - ox, fc.y + R.up, fc.z + fc.rz * cside - oz);
    const lt = new THREE.Vector3(fl.x + fl.rx * st.u * R.lu - ox, fl.y + R.lookY, fl.z + fl.rz * st.u * R.lu - oz);
    if (!camInit) { camPos.copy(tmp); look.copy(lt); camInit = true; }
    camPos.lerp(tmp, 1 - Math.exp(-dt * 6)); look.lerp(lt, 1 - Math.exp(-dt * 5));
    camera.position.copy(camPos); camera.lookAt(look);
    fwd.set(f.fx, 0, f.fz); right.set(f.rx, 0, f.rz);

    // lighting & atmosphere
    const w = zoneW(st.s);
    sun.color.copy(TOD.sunCol); sun.intensity = TOD.sunI;
    sun.target.position.set(car.group.position.x + f.fx * 30, car.group.position.y, car.group.position.z + f.fz * 30);
    sun.position.copy(sun.target.position).addScaledVector(TOD.lightDir, 200);
    hemi.color.copy(TOD.hemiSky); hemi.groundColor.copy(TOD.hemiGround); hemi.intensity = TOD.hemiI;
    scene.fog.color.copy(TOD.fog);
    const fogD = (w.city * 0.0022 + w.sakura * 0.0019 + w.coast * 0.0011 + w.country * 0.0014) * (1 + TOD.night * 0.25);
    scene.fog.near = fogD * (1 + 0.55 * ov + 0.45 * rn); scene.fog.far = world.ahead * 0.92;
    U.uSkyHor.value.copy(TOD.horizon); U.uSkyZen.value.copy(TOD.zenith); U.uTime.value = t;
    U.uWet.value = wet; U.uOrigin.value.set(world.origin.x, world.origin.z);
    U.uCloudSh.value = (1 - ov) * sstep(0.04, 0.3, TOD.sunEl) * (1 - TOD.night);
    const su = sky.material.uniforms;
    su.uNight.value = TOD.night; su.uWarm.value = TOD.warm; su.uTime.value = t; su.uCirrusCol.value.copy(TOD.cLit).lerp(TOD.horizon, 0.25);
    su.uCirrus.value = 0.6 * (1 - ov); su.uOvercast.value = ov;
    su.uDeckLit.value.copy(TOD.horizon).lerp(TOD.cLit, 0.35); su.uDeckDark.value.copy(TOD.zenith).lerp(TOD.horizon, 0.25).multiplyScalar(0.82);
    sky.position.copy(camera.position);
    clouds.update(camera.position, dt);
    mountains.update(camera.position);
    let seaW = 0; for (const d of [-150, 0, 250, 500, 800]) seaW = Math.max(seaW, zoneW(st.s + d).coast);
    sea.mesh.visible = seaW > 0.001;
    sea.update(camera.position, t, fogD * 0.8, sstep(0.0, 0.35, seaW));
    foamMat.uniforms.uTime.value = t; foamMat.uniforms.uLight.value.setRGB(1, 1, 1).multiplyScalar(0.35 + 0.65 * day());
    const nightK = sstep(0.15, 0.8, TOD.night);
    M.atlas.emissiveIntensity = 0.1 + nightK * 1.05;
    M.lamp.color.setRGB(0.85, 0.85, 0.8).lerp(new THREE.Color(3.6, 2.8, 1.8), nightK);
    M.pool.opacity = nightK * 0.42 * (1 + 0.8 * wet);
    U.uNight.value = nightK;
    post.bloom.strength = lerp(0.32, 0.55, nightK); post.bloom.threshold = lerp(1.35, 0.95, nightK); post.bloom.radius = lerp(0.55, 0.35, nightK);
    renderer.toneMappingExposure = lerp(1.0, 1.15, nightK);

    // sun streaks in the grade pass
    tmp.copy(camera.position).addScaledVector(TOD.sunDir, 1000).project(camera);
    const g = post.grade.uniforms;
    const inFront = tmp.z < 1 ? 1 : 0, edge = Math.max(Math.abs(tmp.x), Math.abs(tmp.y));
    g.uSun.value.set(tmp.x * 0.5 + 0.5, tmp.y * 0.5 + 0.5);
    g.uSunVis.value = inFront * (1 - sstep(1.0, 1.9, edge)) * sstep(-0.02, 0.15, TOD.sunEl) * (1 - TOD.night) * (1 - ov);
    g.uSat.value = 1.1 - 0.12 * ov;
    g.uDay.value = day(); g.uWarm.value = TOD.warm; g.uTime.value = t;

    rain.update(camera.position, t, rn, day());
    const tp0 = performance.now(); parts.update(dt, t, camera.position, fwd, right, w.sakura, f.y, nightK, w.country + w.sakura * 0.4); const tp1 = performance.now();
    if (audio) {
      path.at(sx, fl); const dxc = Math.hypot(fl.x - world.origin.x - camera.position.x, fl.z - world.origin.z - camera.position.z);
      const trainD = train.st.active ? train.group.position.distanceTo(camera.position) : 1e9;
      audio.update(st.speed / 15, w, day(), { bell: bell ? Math.pow(clamp(1 - dxc / 260, 0, 1), 1.5) : 0, train: Math.pow(clamp(1 - trainD / 230, 0, 1), 2), rain: rn, roof: st.cam !== 2 });
    }
    zoneCard(zoneAt(st.s + 40));

    const tr0 = performance.now(); post.composer.render(dt); const tr1 = performance.now();
    const PB = window.__pb || (window.__pb = { world: 0, parts: 0, render: 0 }); PB.world = PB.world * 0.95 + (tw1 - tw0) * 0.05; PB.parts = PB.parts * 0.95 + (tp1 - tp0) * 0.05; PB.render = PB.render * 0.95 + (tr1 - tr0) * 0.05;

    ftAvg = ftAvg * 0.95 + (performance.now() - ft0) * 0.05; window.__ft = ftAvg;
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
  window.__dbg = { renderer, st, scene, camera, world, TOD, X, train, weather, U };
  status('');
  $start.classList.add('ready');
  if (QS.has('auto')) begin();
  requestAnimationFrame(frame);
}

main().catch(e => { console.error(e); status('Something went wrong: ' + e.message); });
