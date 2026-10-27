// Sky dome, GPU-painted anime cumulus billboards, distant mountain silhouettes and the time-of-day palette.
import * as THREE from 'three';
import { clamp, lerp, smooth, rng, fbm1 } from './util.js';
import { GLSL_NOISE, U as MU } from './materials.js';

// ---------------------------------------------------------------- palette
//  t, zenith, horizon, sun colour, sun I, hemi sky, hemi ground, hemi I, fog, cloud lit, cloud shade, cloud rim, night, warm
export const KEYS = [
  [0.00, '#070b26', '#1c2752', '#a8b6f0', 0.55, '#30427a', '#16141f', 1.0, '#19223f', '#3d4a78', '#1b2244', '#2a3050', 1.0, 0],
  [0.20, '#1c2560', '#56568a', '#b0bcf2', 0.45, '#46548a', '#262432', 1.0, '#41497a', '#6a6a9a', '#3a3a6a', '#7a6aa0', 0.85, 0],
  [0.245, '#3a56aa', '#f2aa8a', '#ffb48a', 1.7, '#8a92cc', '#6a5060', 1.25, '#dcaca2', '#ffd2b2', '#9a88b2', '#ffd8a8', 0.3, 0.9],
  // the clear day, matched to the reference paintings: a deep azure sky paling to near-white at the horizon, a warm
  // cream sun and a saturated blue skylight (so shadows are deep blue: it is all the light they get; together they light
  // a white wall white), white cumulus with light-blue shading
  [0.30, '#3270c2', '#e2effc', '#fff2d3', 3.15, '#93b3ec', '#b8a890', 1.35, '#d6e8f8', '#ffffff', '#acc4ea', '#fff4e0', 0.0, 0.2],
  [0.45, '#2f68bb', '#e0f0ff', '#fff5dd', 3.35, '#8fb1ec', '#c8b8a0', 1.35, '#d0e7fb', '#ffffff', '#a8c4ec', '#ffffff', 0.0, 0],
  [0.62, '#3068ba', '#e0efff', '#fff4db', 3.3, '#91b1e9', '#c8b49a', 1.35, '#d2e7fa', '#ffffff', '#aac4ea', '#fffaf0', 0.0, 0.1],
  [0.70, '#1d4492', '#ffd8a6', '#ffcf8a', 2.9, '#a8b4e0', '#c0a080', 1.4, '#eed0ae', '#fff2d8', '#a2a0c8', '#ffd890', 0.0, 0.6],
  [0.75, '#283c88', '#ff946c', '#ff8a52', 1.9, '#9a88c8', '#8a6070', 1.2, '#e0968a', '#ffb894', '#8a6aa0', '#ffcf8a', 0.15, 1.0],
  // (golden hour to dusk: the deep steel-blue zenith of the paintings repainted at those hours, ref/tod/, not lavender; and
  // at night a moonlight less saturated, their blue-grey night instead of an inky indigo)
  // end of civil twilight (sun ~6° down): no more sunlight on the ground — the light softens and cools into skylight
  // (faint shadows), while the sky towards the sunset and the high clouds keep the afterglow
  [0.765, '#232f78', '#c8788a', '#e8806e', 0.9, '#7076b8', '#5a4a5e', 1.15, '#a07890', '#ffa890', '#6a5a92', '#ffb48a', 0.4, 0.85],
  [0.80, '#1a2260', '#86709e', '#a08ac8', 0.35, '#4f5a98', '#2f3040', 1.0, '#4f5285', '#c08ab8', '#4a3a70', '#ff9a8a', 0.7, 0.5],
  [0.86, '#0a0f30', '#24305e', '#a8b6f0', 0.55, '#32447c', '#16141f', 1.0, '#1c2548', '#404c7c', '#1c2346', '#2a3050', 1.0, 0],
  [1.00, '#070b26', '#1c2752', '#a8b6f0', 0.55, '#30427a', '#16141f', 1.0, '#19223f', '#3d4a78', '#1b2244', '#2a3050', 1.0, 0],
].map(k => k.map(v => (typeof v === 'string' ? new THREE.Color(v) : v)));

export const TOD = {
  zenith: new THREE.Color(), horizon: new THREE.Color(), sunCol: new THREE.Color(), sunI: 1, hemiSky: new THREE.Color(), hemiGround: new THREE.Color(), hemiI: 1,
  fog: new THREE.Color(), cLit: new THREE.Color(), cShade: new THREE.Color(), cRim: new THREE.Color(), night: 0, warm: 0, overcast: 0, rain: 0,
  bright: 1, // how much this is a bright clear day (not night, dawn/dusk or overcast): drives the day-only parts of the look
  sunDir: new THREE.Vector3(), moonDir: new THREE.Vector3(), lightDir: new THREE.Vector3(), sunEl: 0,
  // (step 30) the moon as it is drawn (the sky's disc and halo, its path on the sea, the clouds' moonlit rims): where the
  // night repaints have it, ~21° up and ahead (main.js moonSkyDir); the night's light keeps the old, higher moon (moonDir)
  moonSky: new THREE.Vector3(0, 1, 0), moonVis: 0, // (…and how much it shows: main.js, the sky's uMoon)
  t: 0.4, // the time of day (the painted palettes by time of day key on it: painted.js todTones)
  head: null, // the road's heading the sun and the moon stand by (null: fixed in the world, the old sky; see skyDirs)
};
/** each region's own palette by the time of day (path.js REGION): a key table laid out as KEYS, or null for Japan's. A
 *  region's is blended in by its weight at the camera (main.js: path.js regionWeight), so a new sky arrives inside a border
 *  tunnel. Turkey's Bosphorus keeps Japan's (its concept painting's sky is the coast painting's deep azure and white
 *  cumulus); Cappadocia's steppe will want its own dry, dusty one */
export const REGION_KEYS = { tr: null };
const _RT = { zenith: new THREE.Color(), horizon: new THREE.Color(), sunCol: new THREE.Color(), sunI: 1, hemiSky: new THREE.Color(), hemiGround: new THREE.Color(), hemiI: 1,
  fog: new THREE.Color(), cLit: new THREE.Color(), cShade: new THREE.Color(), cRim: new THREE.Color(), night: 0, warm: 0 };
const RK_C = ['zenith', 'horizon', 'sunCol', 'hemiSky', 'hemiGround', 'fog', 'cLit', 'cShade', 'cRim'], RK_V = ['sunI', 'hemiI', 'night', 'warm'];
/** a palette's colours and levels at time of day t into o (TOD, or the region's scratch) */
function keysAt(K, t, o) {
  let k = 0; while (k < K.length - 2 && K[k + 1][0] <= t) k++;
  const a = K[k], b = K[k + 1], f = smooth(clamp((t - a[0]) / (b[0] - a[0]), 0, 1));
  const lc = (i, out) => out.copy(a[i]).lerp(b[i], f);
  lc(1, o.zenith); lc(2, o.horizon); lc(3, o.sunCol); o.sunI = lerp(a[4], b[4], f);
  lc(5, o.hemiSky); lc(6, o.hemiGround); o.hemiI = lerp(a[7], b[7], f); lc(8, o.fog);
  lc(9, o.cLit); lc(10, o.cShade); lc(11, o.cRim); o.night = lerp(a[12], b[12], f); o.warm = lerp(a[13], b[13], f);
}
/** t: the time of day; head: the road's smoothed heading (main.js; the sun's and the moon's bearings follow it), or null
 *  for a sky fixed in the world; rk / rw: a region's palette (REGION_KEYS) and its weight here */
export function updateTOD(t, head = null, rk = null, rw = 0) {
  TOD.t = t; TOD.head = head;
  keysAt(KEYS, t, TOD);
  if (rk && rw > 0) {
    keysAt(rk, t, _RT);
    for (let i = 0; i < RK_C.length; i++) TOD[RK_C[i]].lerp(_RT[RK_C[i]], rw);
    for (let i = 0; i < RK_V.length; i++) TOD[RK_V[i]] = lerp(TOD[RK_V[i]], _RT[RK_V[i]], rw);
  }
  TOD.sunEl = skyDirs(t, TOD.sunDir, TOD.moonDir, TOD.lightDir, head);
}
// The sun rises at 06:00 (t 0.25), climbs to ~62° at noon and sets at 18:00 (t 0.75). The light used for shading is the
// sun while it's up and the moon otherwise (with a soft hand-over). Returns the sun's elevation.
// Its bearing: all four paintings light the road from ahead and to its left. At noon the sun stands 60–80° left of ahead
// (the car's shadow falls to its right and back towards us; the trees' and the poles' too), and in the paintings repainted
// at golden hour and sunset it is straight ahead, a little left (the glow at the vanishing point). So, given the road's
// heading `head` (its mean over a few hundred metres: main.js), the sun stands sunBearing(t) to the left of it: 70° from
// 09:36 to noon, then swinging round to 8° by sunset (14° at golden hour, t 0.7; at most 0.78°/s, the old sky's pace),
// and from 8° at sunrise (at most 1.3°/s; the dawn glows ahead too); the moon 20° to the left all night. Their heights
// keep the hour's. (Without a heading, the old sky fixed in the world: the sun sweeping east → west, the moon opposite it.)
const D2R = Math.PI / 180, AZ_NOON = 70 * D2R, AZ_LOW = 8 * D2R, MOON_AZ = 20 * D2R;
/** the sun's bearing to the left of the road's heading at time of day t (radians) */
export const sunBearing = t => AZ_LOW + (AZ_NOON - AZ_LOW) * smooth(clamp(t < 0.5 ? (t - 0.25) / 0.15 : (0.75 - t) / 0.25, 0, 1));
function skyDirs(t, sun, moon, light, head = null) {
  const el = Math.sin((t - 0.25) * Math.PI * 2) * 1.08, ce = Math.cos(el), my = Math.abs(Math.sin(el)) * 0.8 + 0.25;
  if (head === null) {
    const az = (t - 0.25) * Math.PI + 0.9;
    sun.set(ce * Math.sin(az), Math.sin(el), ce * Math.cos(az)).normalize();
    moon.set(-sun.x, my, -sun.z).normalize();
  } else {
    const az = head + sunBearing(t), mz = head + MOON_AZ;
    sun.set(ce * Math.sin(az), Math.sin(el), ce * Math.cos(az)).normalize();
    moon.set(ce * Math.sin(mz), my, ce * Math.cos(mz)).normalize();
  }
  light.copy(sun);
  if (el < 0.08) light.lerpVectors(moon, sun, clamp((el + 0.12) / 0.2, 0, 1)).normalize();
  if (light.y < 0.12) { light.y = 0.12; light.normalize(); }
  return el;
}
const _sd = new THREE.Vector3(), _md = new THREE.Vector3();
/** the shading light direction at time of day t for the road's heading `head` (null: the old fixed sky); no side effects */
export function lightDirAt(t, out, head = null) { skyDirs(((t % 1) + 1) % 1, _sd, _md, out, head); return out; }
// (step 30) the moon as the night repaints draw it (ref/tod/*_night.png, all seven): a full moon ~21° up (20–23° over the
// frame's middle, the chase camera looking ~1° down), its disc ~3.8° across (3.2–4.4°), straight ahead over the road inland,
// over the sea on the left by the coast and the strait, to the right of Uçhisar's road (main.js MOON_B: its bearing from the
// road's mean heading by zone). Only drawn there: the light at night keeps the old moon (moonDir, ~53° up, 20° left), so the
// shadows, and the light at sunset (part moon), are as before
export const MOON_EL = 21 * D2R, MOON_R = 1.8 * D2R;
/** the drawn moon's direction for a bearing `az` (radians, + = left, as the sun's) */
export function moonSkyDir(az, out) { const c = Math.cos(MOON_EL); return out.set(c * Math.sin(az), Math.sin(MOON_EL), c * Math.cos(az)); }

// overcast palette (day / night), blended over the clear-sky palette by the weather
const OV = {
  zenith: [new THREE.Color('#7b8594'), new THREE.Color('#141a28')], horizon: [new THREE.Color('#b5bcc6'), new THREE.Color('#283042')],
  fog: [new THREE.Color('#a8b0ba'), new THREE.Color('#232b3c')], hemiSky: [new THREE.Color('#aab3bf'), new THREE.Color('#3c4866')],
  hemiGround: [new THREE.Color('#8b8983'), new THREE.Color('#1e2030')], cLit: [new THREE.Color('#d0d5dc'), new THREE.Color('#2c3240')],
  cShade: [new THREE.Color('#7c8593'), new THREE.Color('#151922')],
};
const _oc = new THREE.Color();
export function applyWeather(ov, rain) {
  TOD.overcast = ov; TOD.rain = rain; TOD.bright = (1 - TOD.night) * (1 - TOD.warm) * (1 - ov);
  if (ov <= 0.001) return;
  const n = TOD.night;
  for (const k of ['zenith', 'horizon', 'fog', 'hemiSky', 'hemiGround', 'cLit', 'cShade']) {
    _oc.copy(OV[k][0]).lerp(OV[k][1], n);
    TOD[k].lerp(_oc, ov * (k === 'cLit' || k === 'cShade' ? 0.75 : 0.85));
  }
  TOD.sunI *= 1 - 0.82 * ov; TOD.warm *= 1 - ov; TOD.cRim.multiplyScalar(1 - ov);
  TOD.sunCol.lerp(_oc.setRGB(0.85, 0.87, 0.9), ov * 0.6);
}

// ---------------------------------------------------------------- sky dome
export function makeSky() {
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: {
      uZenith: { value: TOD.zenith }, uHorizon: { value: TOD.horizon }, uSunDir: { value: TOD.sunDir }, uMoonDir: { value: TOD.moonSky },
      // (step 30) the drawn moon's disc and its halo's tones (linear: main.js, the night repaints' ungraded), and the night's extra
      // stars (the repaints' sky is thick with them: ~20 to a 100 px square at 1296 × 800, ours had 3–8) and their brightness range
      uMoonCol: { value: new THREE.Color(1, 1, 1) }, uMoonHalo: { value: new THREE.Color(0.2, 0.3, 0.5) }, uStarN: { value: 0 },
      uNoiseTex: MU.uNoiseTex, uSunCol: { value: TOD.sunCol }, uNight: { value: 0 }, uWarm: { value: 0 }, uTime: { value: 0 }, uCirrus: { value: 0.6 }, uCirrusCol: { value: new THREE.Color() }, uOvercast: { value: 0 }, uDeckLit: { value: new THREE.Color() }, uDeckDark: { value: new THREE.Color() },
      uMilky: { value: 0 }, uMetA: { value: new THREE.Vector3(0, 1, 0) }, uMetB: { value: new THREE.Vector3(0, 1, 0) }, uMetP: { value: -1 },
      uBright: { value: 0 }, uMoon: { value: 0 },
      // (Audit 2) the painted evening sky (main.js sets them by the hour): its weight, its three tones (linear: from ~21° up, ~7° up,
      // the horizon), the sun the sky's glow and disc are drawn round (the real sun lowered towards the horizon) and the glow's strength
      uEve: { value: 0 }, uEveZ: { value: new THREE.Color() }, uEveM: { value: new THREE.Color() }, uEveH: { value: new THREE.Color() }, uSkySun: { value: new THREE.Vector3(0, 1, 0) }, uEveG: { value: 1 },
      uEveT: { value: new THREE.Color() }, uEveTk: { value: 0 }, // (step 30: the night's top tone, from ~21° to ~30° up, and its weight: 0 in the evening)
    },
    vertexShader: /* glsl */`varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; }`,
    fragmentShader: /* glsl */`
      uniform vec3 uZenith, uHorizon, uSunDir, uMoonDir, uSunCol, uCirrusCol, uDeckLit, uDeckDark, uMetA, uMetB, uEveZ, uEveM, uEveH, uSkySun, uMoonCol, uMoonHalo, uEveT; uniform float uNight, uWarm, uTime, uCirrus, uOvercast, uMilky, uMetP, uBright, uMoon, uEve, uEveG, uStarN, uEveTk;
      varying vec3 vDir;
      ${GLSL_NOISE}
      float hash13(vec3 p){ p = fract(p * .1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
      void main(){
        vec3 d = normalize(vDir); float e = d.y;
        float h = pow(clamp(1.0 - max(e, 0.0), 0.0, 1.0), 4.0);
        // on a clear day the painted gradient of the reference art: deep azure from ~20° up, through a bright saturated
        // sky blue (red comes in last) to near-white at the horizon; dawn, dusk, night and grey skies keep the old curve
        float hb = clamp(1.0 - max(e, 0.0) * 2.8, 0.0, 1.0);
        vec3 col = mix(uZenith, uHorizon, mix(vec3(h), vec3(hb * hb, hb, hb), uBright));
        // (Audit 2) at golden hour and sunset under a clear sky, the paintings' repaints' sky (ref/tod/): a deep steel blue down to
        // ~21° (blue-violet at sunset), a pale band ~7° up, the warm colour only along the horizon; the glow round a sun drawn low
        if (uEve > 0.0) {
          vec3 ev = mix(uEveM, uEveZ, smoothstep(0.12, 0.36, e));
          ev = mix(ev, uEveT, smoothstep(0.36, 0.5, e) * uEveTk); // (step 30: the night's, a deeper navy again higher up)
          col = mix(col, mix(uEveH, ev, smoothstep(0.0, 0.12, e)), uEve);
        }
        if (e < 0.0) col = uHorizon * (1.0 - clamp(-e * 2.0, 0.0, 0.25));
        float sd = max(dot(d, uSkySun), 0.0);
        float day = (1.0 - uNight) * (1.0 - uOvercast);
        col += uSunCol * (pow(sd, 6.0) * (0.10 + 0.35 * uWarm) * mix(0.4 + h, h * h * uEveG, uEve) + pow(sd, 48.0) * 0.45) * day; // (the evening's glow hugs the horizon)
        // high wispy cirrus, brushed along one direction
        if (e > 0.015) {
          vec2 p = d.xz / (e + 0.12);
          p = mat2(0.8, -0.6, 0.6, 0.8) * p;
          float c = fbm2(p * vec2(1.4, 5.0) + vec2(uTime * 0.004, 0.0)) * 0.75 + fbm2(p * 6.0) * 0.25;
          c = smoothstep(0.52, 0.86, c) * smoothstep(0.015, 0.22, e) * (1.0 - smoothstep(0.55, 0.95, e));
          col = mix(col, uCirrusCol, c * uCirrus);
        }
        float disc = smoothstep(0.99935, 0.99965, sd);
        col = mix(col, uSunCol * 4.0 + 1.5, disc * day);
        // a soft grey stratus deck when the weather turns
        if (uOvercast > 0.01 && e > -0.02) {
          vec2 q = d.xz / (e + 0.22) * 0.75 + vec2(uTime * 0.012, uTime * 0.004);
          float n = fbm2(q) * 0.7 + fbm2(q * 2.6 + 5.0) * 0.3;
          float cov = smoothstep(0.2, 0.62, n + uOvercast * 0.5 - 0.2);
          vec3 deck = mix(uDeckDark, uDeckLit, smoothstep(0.35, 0.85, n));
          col = mix(col, deck, cov * uOvercast * smoothstep(-0.02, 0.1, e));
        }
        vec3 bn = normalize(vec3(0.62, 0.3, 0.72)); float v = dot(d, bn), band = 0.0;
        if (uMilky > 0.01 && e > -0.05) band = exp(-(v * v) / 0.045);
        if (band > 0.001) { // the Milky Way: a soft, clumpy band with dark dust lanes (farther from it, its light is under a level)
          vec3 t1 = normalize(cross(bn, vec3(0.0, 1.0, 0.0))), t2 = cross(bn, t1);
          float ang = atan(dot(d, t2), dot(d, t1));
          float clump = fbm2(vec2(ang * 3.2, v * 9.0)) * 0.7 + fbm2(vec2(ang * 9.0 + 4.0, v * 26.0)) * 0.3;
          float dust = smoothstep(0.52, 0.68, fbm2(vec2(ang * 6.0 + 11.0, v * 30.0 + 2.0))) * exp(-(v * v) / 0.006);
          float speck = 0.55 + 0.45 * vnoise(vec2(ang * 60.0, v * 160.0));   // grainy, made of faint stars
          float glow = band * smoothstep(0.36, 0.8, clump) * (1.0 - 0.8 * dust) * speck;
          vec3 mw = mix(vec3(0.36, 0.44, 0.85), vec3(0.8, 0.76, 0.78), smoothstep(0.6, 0.88, clump) * exp(-(v * v) / 0.008));
          col += mw * glow * 0.36 * uMilky * smoothstep(-0.05, 0.3, e);
        }
        if (uNight * (1.0 - uOvercast) > 0.01 && e > 0.0) {
          vec3 sp = d * 380.0; vec3 cell = floor(sp); float hs = hash13(cell);
          // (step 30: at night under a clear sky, uStarN more of them, the new ones fainter, as the repaints' dense field of
          // small stars; 0 until the evening's sky has gone, so dusk keeps its own)
          if (hs > 0.9965 - 0.004 * band * uMilky - uStarN) { float st = (1.0 - smoothstep(0.0, 0.42, length(fract(sp) - 0.5))) * (0.55 + 0.45 * sin(uTime * 1.7 + hs * 400.0));
            float sv = smoothstep(0.0, 0.25, e); sv += min(uStarN * 90.0, 1.0) * (1.0 - sv) * smoothstep(0.0, 0.06, e); // (at night as painted, down to the horizon)
            col += vec3(0.85, 0.9, 1.0) * st * uNight * sv * 1.3 * mix(1.0, 0.5 + smoothstep(0.9965 - uStarN, 0.999, hs), step(0.0001, uStarN)); }
          if (uMetP >= 0.0 && uMetP < 1.3) { // a shooting star: a bright head with a fading tail
            float p = min(uMetP, 1.0);
            vec3 head = normalize(mix(uMetA, uMetB, p)), tail = normalize(mix(uMetA, uMetB, max(0.0, p - 0.32)));
            vec3 ab = head - tail; float tt = clamp(dot(d - tail, ab) / max(dot(ab, ab), 1e-6), 0.0, 1.0);
            float dist = length(d - (tail + ab * tt));
            float fade = smoothstep(0.0, 0.06, uMetP) * (1.0 - smoothstep(1.0, 1.3, uMetP));
            col += vec3(0.9, 0.95, 1.0) * (1.0 - smoothstep(0.0, 0.0024, dist)) * tt * tt * fade * 2.2 * uNight;
          }
          if (uMoon > 0.0) { // (the moon: uMoon, out of the twilight's sky: main.js)
            // (step 30) as the night repaints draw it: ~3.8° across, pale, its seas a faint blue-grey, the navy sky round it
            // lighter out to ~4 of its radii (paler near it, bluer further out: two falloffs, each channel its own share)
            float md = dot(d, uMoonDir), th = sqrt(max(2.0 - 2.0 * md, 0.0)); // (th: the angle from its middle, rad)
            if (th < 0.4) {
              // (fitted to the repaints' rings round their moons, ~/cdtest/s30/tools: a pale glow close in, a bluer one out to
              // ~3°, a faint one over ~20°)
              float dr = max(th - ${MOON_R.toFixed(5)}, 0.0), tl = max(1.0 - dr * 2.86, 0.0);
              vec3 hw = vec3(0.472, 0.352, 0.23) * exp(-dr * 68.8) + vec3(0.014, 0.195, 0.306) * exp(-dr * 34.4) + vec3(0.128, 0.137, 0.185) * (tl * tl);
              col = mix(col, uMoonHalo, min(hw, vec3(1.0)) * uMoon);
              if (th < ${(MOON_R + 0.003).toFixed(5)}) {
                vec3 mu = normalize(cross(uMoonDir, vec3(0.0, 1.0, 0.0))), mv = cross(mu, uMoonDir);
                vec2 q = vec2(dot(d, mu), dot(d, mv)) * ${(1 / MOON_R).toFixed(3)};
                float sea = (1.0 - smoothstep(0.16, 0.4, length(q - vec2(-0.3, 0.38)))) + (1.0 - smoothstep(0.14, 0.44, length((q - vec2(-0.58, -0.02)) * vec2(1.0, 0.7))))
                  + (1.0 - smoothstep(0.08, 0.24, length(q - vec2(0.12, 0.4)))) + (1.0 - smoothstep(0.1, 0.27, length(q - vec2(0.3, 0.1))))
                  + (1.0 - smoothstep(0.05, 0.15, length(q - vec2(0.64, 0.3)))) + (1.0 - smoothstep(0.06, 0.2, length(q - vec2(0.5, -0.17))))
                  + (1.0 - smoothstep(0.08, 0.24, length(q - vec2(-0.2, -0.34)))) + (1.0 - smoothstep(0.03, 0.12, length(q - vec2(-0.48, -0.42))));
                sea = min(sea, 1.0) * (0.55 + 0.45 * vnoise(q * 6.0 + 3.0)) + 0.12 * (vnoise(q * 17.0) - 0.5);
                col = mix(col, uMoonCol * (1.0 - sea * vec3(0.34, 0.28, 0.24)), (1.0 - smoothstep(${(MOON_R - 0.0014).toFixed(5)}, ${(MOON_R + 0.0014).toFixed(5)}, th)) * uMoon);
              }
            }
          }
        }
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(5000, 48, 24), mat);
  mesh.renderOrder = 1000; mesh.frustumCulled = false; // drawn last among opaques: the depth test skips every hidden sky pixel
  return mesh;
}

// ---------------------------------------------------------------- clouds
function cumulusPuffs(r, tall) {
  const P = [], base = 0.1, width = tall ? 0.6 : 0.88, lean = (r() - 0.5) * 0.04;
  const nb = tall ? 6 : 9;
  for (let i = 0; i < nb; i++) { const rad = 0.06 + r() * 0.05; P.push([((i / (nb - 1)) - 0.5) * width + (r() - 0.5) * 0.03, base + rad * 0.5, (r() - 0.5) * 0.2, rad]); }
  const tiers = tall ? 6 : 2;
  let w = width * 0.82, y = base + 0.09;
  for (let t = 0; t < tiers; t++) {
    const n = Math.max(1, Math.round(w / 0.11));
    for (let i = 0; i < n; i++) {
      const x = (n === 1 ? 0 : (i / (n - 1) - 0.5)) * w + (r() - 0.5) * 0.05 + lean * t;
      P.push([x, y + r() * 0.05, (r() - 0.5) * 0.25 + 0.05, (0.075 + r() * 0.05) * (tall ? 1.25 : 1)]);
    }
    y += tall ? 0.115 : 0.075; w *= tall ? 0.8 : 0.66;
  }
  // cauliflower bumps on the upper rims, and smaller bumps on those (sunlit cumulus is lumpy at every scale)
  const big = P.slice();
  for (const p of big) {
    if (P.length > 84) break;
    const k = 1 + Math.floor(r() * 2);
    for (let j = 0; j < k; j++) {
      const a = 0.35 + r() * 2.4, rr = p[3] * (0.35 + r() * 0.2);
      P.push([p[0] + Math.cos(a) * p[3] * 0.82, p[1] + Math.sin(a) * p[3] * 0.82, p[2] + 0.04, rr]);
    }
  }
  const mid = P.slice(big.length);
  // bumps on the faces of the big lobes too, not only along the outline: they catch the light as small bright domes
  for (const p of big) {
    if (p[1] < base + 0.12 || P.length > 104) continue;
    const k = 1 + Math.floor(r() * 2);
    for (let j = 0; j < k; j++) {
      const a = 0.3 + r() * 2.5, rho = p[3] * (0.3 + r() * 0.4), rr = p[3] * (0.28 + r() * 0.16);
      P.push([p[0] + Math.cos(a) * rho, p[1] + Math.sin(a) * rho, p[2] + Math.sqrt(p[3] * p[3] - rho * rho) - rr * 0.6, rr]);
    }
  }
  for (const p of mid) {
    if (P.length > 124) break;
    const k = 1 + Math.floor(r() * 2);
    for (let j = 0; j < k; j++) {
      const a = 0.2 + r() * 2.7, rr = p[3] * (0.38 + r() * 0.2);
      P.push([p[0] + Math.cos(a) * p[3] * 0.85, p[1] + Math.sin(a) * p[3] * 0.85, p[2] + 0.02, rr]);
    }
  }
  const out = P.slice(0, 128);
  // fit the whole cloud inside the texture (no flat clipped tops/sides)
  let minX = 1e9, maxX = -1e9, maxY = -1e9;
  for (const p of out) { minX = Math.min(minX, p[0] - p[3] * 1.12); maxX = Math.max(maxX, p[0] + p[3] * 1.12); maxY = Math.max(maxY, p[1] + p[3] * 1.12); }
  const k = Math.min(1, 0.92 / (maxX - minX), (0.95 - base) / (maxY - base)), cx = (minX + maxX) / 2;
  for (const p of out) { p[0] = (p[0] - cx) * k; p[1] = base + (p[1] - base) * k; p[3] *= k; }
  return out;
}

export function paintClouds(renderer) {
  const SZ = 1024, puffU = { value: Array.from({ length: 128 }, () => new THREE.Vector4()) };
  const VS = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }';
  // pass 1 — the cloud as a height field: the front surface of the puffs, smoothly unioned (a soft max, so lobes melt
  // into each other instead of meeting in hard ball seams), with its normal and coverage
  const hMat = new THREE.ShaderMaterial({
    uniforms: { uP: puffU, uN: { value: 0 }, uSeed: { value: 0 }, uBase: { value: 0.1 }, uNoiseTex: MU.uNoiseTex },
    vertexShader: VS,
    fragmentShader: /* glsl */`
      uniform vec4 uP[128]; uniform int uN; uniform float uSeed, uBase; varying vec2 vUv;
      ${GLSL_NOISE}
      void main(){
        vec2 p = vec2(vUv.x - 0.5, vUv.y);
        float m = -1.0, s = 0.0, cov = 0.0; vec3 ns = vec3(0.0);
        for (int i = 0; i < 128; i++) {
          if (i >= uN) break;
          vec4 q = uP[i]; vec2 d = p - q.xy; float dd = dot(d, d), rm = q.w * 1.1;
          if (dd > rm * rm) continue;
          // the rim wobbles (noise read along the direction, so there is no seam at ±180°); the core stays round
          float fi = float(i), dist = sqrt(dd); vec2 u = d / max(dist, 1e-5);
          float wob = 0.08 * (vnoiseL(u * 2.2 + vec2(fi * 7.1, uSeed)) - 0.5) + 0.035 * (vnoiseL(u * 7.0 + vec2(fi * 3.3, uSeed + 5.0)) - 0.5);
          float r = q.w * (1.0 + wob * smoothstep(0.4, 0.9, dist / q.w));
          cov = max(cov, 1.0 - smoothstep(r - 0.004, r, dist));
          if (dist < r) {
            float hz = sqrt(r * r - dd), h = q.z + hz;
            if (h > m) { float sc = exp((m - h) * 220.0); s *= sc; ns *= sc; m = h; }
            float w = exp((h - m) * 220.0); s += w; ns += w * vec3(d, hz) / r;
          }
        }
        float jag = (vnoiseL(vec2(p.x * 40.0, uSeed)) - 0.5) * 0.012;
        cov *= smoothstep(uBase - 0.014, uBase + 0.022, p.y + jag);
        if (s <= 0.0) { gl_FragColor = vec4(0.0, 0.5, 0.5, 0.0); return; }
        float H = m + log(s) / 220.0; vec3 n = normalize(ns);
        gl_FragColor = vec4(clamp((H + 0.12) / 0.5, 0.0, 1.0), n.xy * 0.5 + 0.5, cov);
      }`,
    depthTest: false, depthWrite: false, blending: THREE.NoBlending,
  });
  // pass 2 — light it like a volume: a broad normal from the blurred height field (the cloud's big masses) over the lobes'
  // own, lobes shadowing the ones below them, light dimming as it crosses the cloud, darker creases and a darker base.
  // Lit from the upper left (R) and the upper right (B): the billboard blends between them, so a cloud never "flips"
  // when the sun passes behind it
  const hRT = new THREE.WebGLRenderTarget(SZ, SZ, { generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter, magFilter: THREE.LinearFilter, depthBuffer: false });
  const sMat = new THREE.ShaderMaterial({
    uniforms: { uH: { value: hRT.texture }, uBase: { value: 0.1 }, uSeed: { value: 0 }, uNoiseTex: MU.uNoiseTex },
    vertexShader: VS,
    fragmentShader: /* glsl */`
      uniform sampler2D uH; uniform float uBase, uSeed; varying vec2 vUv;
      ${GLSL_NOISE}
      float hAt(vec2 uv, float l){ return textureLod(uH, uv, l).r * 0.5 - 0.12; }
      float light(vec2 uv, vec3 L, vec3 nM, vec3 nm){
        float lam = dot(normalize(mix(nM, nm, 0.72)), L);
        // lobes in front shadow the ones behind and below them (a soft march over the height field)
        float sh = 1.0, t = 0.012, hb = hAt(uv, 2.0);
        for (int i = 0; i < 11; i++) {
          float h = hAt(uv + L.xy * t, 2.0);
          sh = min(sh, clamp(3.0 * (hb + L.z * t - h) / max(t, 0.04) + 0.6, 0.0, 1.0));
          t *= 1.33;
        }
        // light dims as it crosses the cloud: optical depth along the light, from the blurred coverage
        float tau = 0.0; t = 0.02;
        for (int i = 0; i < 8; i++) { tau += textureLod(uH, uv + L.xy * t, 3.0).a * t * 0.3; t *= 1.38; }
        float tr = exp(-tau * 5.0);
        return smoothstep(0.06, 0.3, lam) * mix(0.28, 1.0, sh) * mix(0.55, 1.0, smoothstep(0.2, 0.9, tr));
      }
      void main(){
        vec4 A = textureLod(uH, vUv, 0.0);
        float a = A.a;
        if (a < 0.002) { gl_FragColor = vec4(0.0); return; }
        float h0 = A.r * 0.5 - 0.12;
        vec3 nm = vec3(A.gb * 2.0 - 1.0, 0.0); nm.z = sqrt(max(1.0 - dot(nm.xy, nm.xy), 0.0));
        nm = normalize(vec3(nm.xy * 0.8, nm.z));
        float e = 1.0 / 64.0, l = 4.5;
        vec2 g = vec2(hAt(vUv + vec2(e, 0.0), l) - hAt(vUv - vec2(e, 0.0), l), hAt(vUv + vec2(0.0, e), l) - hAt(vUv - vec2(0.0, e), l)) / (2.0 * e);
        vec3 nM = normalize(vec3(-g * 1.4, 1.0));
        float crease = clamp(1.0 + (h0 - hAt(vUv, 2.5)) * 9.0, 0.0, 1.0);
        vec2 p = vec2(vUv.x - 0.5, vUv.y);
        float base = smoothstep(uBase, uBase + 0.26, p.y), grain = (fbm2(p * 18.0 + uSeed) - 0.5) * 0.08;
        float k = mix(0.3, 1.0, base) * mix(0.62, 1.0, crease), amb = 0.1 * base;
        float litL = clamp(amb + (1.0 - amb) * light(vUv, normalize(vec3(-0.55, 0.62, 0.55)), nM, nm) * k + grain, 0.0, 1.0);
        float litR = clamp(amb + (1.0 - amb) * light(vUv, normalize(vec3(0.55, 0.62, 0.55)), nM, nm) * k + grain, 0.0, 1.0);
        // the silver lining is the thin outer edge only (not every lobe's outline)
        float rim = 1.0 - smoothstep(0.35, 0.95, textureLod(uH, vUv, 3.5).a);
        gl_FragColor = vec4(vec3(litL, rim, litR) * a, a);
      }`,
    depthTest: false, depthWrite: false, blending: THREE.NoBlending,
  });
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), hMat), scene = new THREE.Scene(), cam = new THREE.Camera();
  scene.add(quad);
  // one 2048² atlas with four 1024² clouds (two towering, two wide)
  const rt = new THREE.WebGLRenderTarget(SZ * 2, SZ * 2, { generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter, magFilter: THREE.LinearFilter });
  const prevRT = renderer.getRenderTarget(), prevAuto = renderer.autoClear, r = rng(99);
  renderer.setRenderTarget(rt); renderer.setClearColor(0x000000, 0); renderer.clear(); renderer.autoClear = false;
  const kinds = [];
  for (let i = 0; i < 4; i++) {
    const tall = i % 2 === 0, P = cumulusPuffs(r, tall);
    P.forEach((p, j) => puffU.value[j].set(p[0], p[1], p[2], p[3]));
    hMat.uniforms.uN.value = P.length; hMat.uniforms.uSeed.value = sMat.uniforms.uSeed.value = i * 13.7;
    quad.material = hMat; renderer.setRenderTarget(hRT); renderer.render(scene, cam);
    quad.material = sMat; rt.viewport.set((i % 2) * SZ, Math.floor(i / 2) * SZ, SZ, SZ);
    renderer.setRenderTarget(rt); renderer.render(scene, cam);
    kinds.push({ cell: [i % 2, Math.floor(i / 2)], tall });
  }
  rt.viewport.set(0, 0, SZ * 2, SZ * 2);
  renderer.autoClear = prevAuto; renderer.setRenderTarget(prevRT);
  hMat.dispose(); sMat.dispose(); hRT.dispose(); quad.geometry.dispose();
  return { tex: rt.texture, kinds, rt };
}

export function makeClouds(atlas) {
  const r = rng(5), N = 22, list = [];
  const geo = new THREE.PlaneGeometry(1, 1); geo.translate(0, 0.5, 0);
  const aD = new THREE.InstancedBufferAttribute(new Float32Array(N * 4), 4), aR = new THREE.InstancedBufferAttribute(new Float32Array(N), 1);
  geo.setAttribute('aD', aD); geo.setAttribute('aR', aR);
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, fog: false, premultipliedAlpha: true,
    uniforms: { map: { value: atlas.tex }, uLit: { value: new THREE.Color() }, uShade: { value: TOD.cShade }, uRim: { value: TOD.cRim }, uHaze: { value: TOD.horizon }, uOpacity: { value: 1 } },
    vertexShader: /* glsl */`
      attribute vec4 aD; attribute float aR; varying vec2 vUv; varying vec4 vD; varying float vR;
      void main(){ vUv = uv; vD = aD; vR = aR; gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */`
      uniform sampler2D map; uniform vec3 uLit, uShade, uRim, uHaze; uniform float uOpacity; varying vec2 vUv; varying vec4 vD; varying float vR;
      void main(){
        vec4 t = texture2D(map, (vD.xy + vUv) * 0.5);
        if (t.a < 0.003) discard;
        vec3 v = t.rgb / t.a;
        float lit = mix(v.r, v.b, vD.z);
        vec3 c = mix(uShade, uLit, lit) + uRim * v.g * smoothstep(0.35, 0.8, lit) * vR;
        c = mix(c, uHaze, clamp(vD.w * (1.0 - smoothstep(0.0, 0.75, vUv.y)), 0.0, 1.0));
        gl_FragColor = vec4(c, 1.0) * t.a * uOpacity;
      }`,
  });
  const mesh = new THREE.InstancedMesh(geo, mat, N);
  mesh.frustumCulled = false; mesh.renderOrder = -5;
  for (let i = 0; i < N; i++) {
    const far = i < 12, k = atlas.kinds[(i * 3 + (far ? 0 : 1)) % atlas.kinds.length];
    const size = far ? (k.tall ? r.range(900, 1500) : r.range(1100, 1700)) : r.range(380, 700);
    list.push({ phi: (i / N) * Math.PI * 2 + r.range(-0.15, 0.15), d: far ? r.range(2600, 3400) : r.range(1300, 2200), base: far ? r.range(-60, 60) : r.range(260, 700), size, cell: k.cell, haze: far ? 0.45 : 0.18 });
  }
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), sc = new THREE.Vector3(), Y = new THREE.Vector3(0, 1, 0);
  return {
    group: mesh,
    update(cam, dt) {
      const sunAz = Math.atan2(TOD.lightDir.x, TOD.lightDir.z);
      for (const c of list) c.phi += (dt * 1.2) / c.d;
      const order = list.slice().sort((a, b) => b.d - a.d); // far → near for correct blending
      order.forEach((c, i) => {
        p.set(cam.x + Math.sin(c.phi) * c.d, cam.y + c.base, cam.z + Math.cos(c.phi) * c.d);
        q.setFromAxisAngle(Y, c.phi + Math.PI); sc.set(c.size, c.size, 1);
        m.compose(p, q, sc); mesh.setMatrixAt(i, m);
        let dAz = sunAz - c.phi; dAz = Math.atan2(Math.sin(dAz), Math.cos(dAz));
        const k = Math.max(0, Math.min(1, (dAz + 0.35) / 0.7)), rightLit = 1 - k * k * (3 - 2 * k);
        aD.setXYZW(i, c.cell[0], c.cell[1], rightLit, c.haze);
        aR.setX(i, 0.35 + 0.9 * Math.pow(Math.max(Math.cos(dAz), 0), 3) * (0.4 + TOD.warm));
      });
      mesh.instanceMatrix.needsUpdate = true; aD.needsUpdate = true; aR.needsUpdate = true;
      // in rain the towering fair-weather cumulus melt into the low grey deck: under rain clouds you see one even grey
      // ceiling, not crisp white towers (they used to stay out, half-transparent, all through the rain)
      mat.uniforms.uOpacity.value = (1 - TOD.night * 0.35) * (1 - TOD.overcast * 0.55) * (1 - 0.85 * TOD.rain);
      mat.uniforms.uLit.value.copy(TOD.cLit).multiplyScalar(1 + 0.35 * TOD.bright); // sunlit cumulus brighter than white
    },
  };
}

// ---------------------------------------------------------------- mountains
export function makeMountains() {
  const group = new THREE.Group();
  const layers = [
    { R: 4300, h: 820, k: 5, col: '#8ea6d8', haze: 0.62 },
    { R: 3200, h: 520, k: 8, col: '#6f90b8', haze: 0.45 },
    { R: 2300, h: 300, k: 13, col: '#5f8a76', haze: 0.32 },
  ];
  layers.forEach((L, li) => {
    const N = 360, pos = [], hf = [], idx = [];
    for (let i = 0; i <= N; i++) {
      const th = (i / N) * Math.PI * 2, x = Math.sin(th) * L.R, z = Math.cos(th) * L.R;
      const n = fbm1((i / N) * L.k * 4, 40 + li * 9);
      const ridge = Math.pow(Math.max(0, n - 0.18) / 0.82, 1.6);
      const H = L.h * (0.12 + ridge);
      pos.push(x, -60, z, x, -60 + H, z); hf.push(0, i / N, 1, i / N);
      if (i < N) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('hf', new THREE.Float32BufferAttribute(hf, 2));
    g.setIndex(idx);
    const mat = new THREE.ShaderMaterial({
      side: THREE.DoubleSide, fog: false,
      uniforms: { uCol: { value: new THREE.Color(L.col) }, uHaze: { value: TOD.fog }, uHazeK: { value: L.haze }, uLight: { value: 1 }, uSeed: { value: li * 17.0 }, uSnow: { value: 0 }, uNoiseTex: MU.uNoiseTex },
      vertexShader: 'attribute vec2 hf; varying vec2 vH; varying float vY; void main(){ vH = hf; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: /* glsl */`
        uniform vec3 uCol, uHaze; uniform float uHazeK, uLight, uSeed, uSnow; varying vec2 vH; varying float vY;
        ${GLSL_NOISE}
        void main(){
          float ridge = vnoise(vec2(vH.y * 900.0 + uSeed, vY * 0.012)) * 0.6 + vnoise(vec2(vH.y * 2600.0, vY * 0.03)) * 0.4;
          vec3 c = uCol * uLight * (0.8 + 0.35 * smoothstep(0.35, 0.75, ridge));
          float cap = uSnow * smoothstep(0.55, 0.75, vH.x + (ridge - 0.5) * 0.25);           // snowcaps in snow country
          c = mix(c, vec3(0.93, 0.95, 1.0) * uLight * (0.85 + 0.2 * ridge), cap);
          float haze = clamp(uHazeK + (1.0 - uHazeK) * (1.0 - smoothstep(-60.0, 260.0, vY)) * 0.75, 0.0, 1.0);
          gl_FragColor = vec4(mix(c, uHaze, haze), 1.0);
        }`,
    });
    const m = new THREE.Mesh(g, mat); m.frustumCulled = false; m.renderOrder = 999;
    group.add(m);
  });
  return {
    group,
    /** k: how much of them stands (1: all; they sink into the horizon where the painted band takes over) */
    update(cam, snow = 0, k = 1) {
      group.visible = k > 0.002; if (!group.visible) return;
      group.position.set(cam.x, 0, cam.z); group.scale.y = Math.min(1, k);
      for (const m of group.children) m.material.uniforms.uSnow.value = snow;
      const light = (0.35 + 0.65 * (1 - TOD.night)) * (1 - 0.35 * TOD.overcast);
      for (const m of group.children) m.material.uniforms.uLight.value = light;
    },
  };
}
