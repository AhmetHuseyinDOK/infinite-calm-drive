// The sea: a big camera-following plane with an anime-style water shader, and the coast's surf: the water along the sea
// wall (shoreMaterial, a strip built with each chunk) where the reference art's rows of waves break white against the wall
// and round the tetrapods (whose splashes are surf.js). Rivers too.
//  - On a bright clear day the sea is painted in the reference art's own colours (their inverse grade, as the painted
//    clouds and horizon: painted.js) and its manner: a deep, saturated azure covered right out to the far shore in
//    wavelets (navy lenses, light cyan streaks, white glints), small and many far out, larger towards the wall, paling to
//    a light azure at the painted far shore instead of fogging to white; along the wall, rows of breaking waves.
//  - At golden hour, sunset and night (under a clear sky) it stays painted, in the tones of the coast painting repainted at
//    those hours (ref/tod/): violet water with rosy crests at sunset, deep navy at night; the low sun's (or the moon's) path
//    a column of glinting light under it. Under grey skies and in rain it keeps its old look: the sky mirrored by the Fresnel
//    law, in the fog (the waves along the wall keep their foam, lit as any white surface).
import * as THREE from 'three';
import { GLSL_NOISE, U as MU, S_WRAP } from './materials.js';
import { TOD } from './sky.js';
import { SEA, ZONE_LEN, TRANS, zoneWeight } from './path.js';
import { todTones, mixTones, paintSky } from './painted.js';

/** the waves along the coast's sea wall, shared by the water there (shoreMaterial) and the surf over the tetrapods
 *  (surf.js). As in the reference art they come in rows across the view, rolling back along the road towards us, slanting
 *  SW.TH (rad) in to the wall, so each one breaks along the wall as it runs in (towards us) and over a heap from its far
 *  end. SHORE_PHASE counts the big ones (the surf bursts with them): one every SW.T seconds, SW.N to the shaders' wrapped
 *  road distance (S_WRAP, so no seam where it wraps): 10.5 m apart along the road, 7.7 m square to their crests. The water
 *  draws OCT smaller waves to each (shoreMaterial). */
export const SW = { T: 6.5, N: 400, TH: 0.75 };
const KS = SW.N / S_WRAP, KD = KS * Math.tan(SW.TH), CT = Math.cos(SW.TH), ST = Math.sin(SW.TH), OCT = 4, g7 = v => v.toFixed(7);
/** GLSL: the big shore waves' phase at road distance s, d metres out from the wall: a crest wherever it is a whole number
 *  (it grows away from us and out from the wall: the waves come the other way) */
export const SHORE_PHASE = /* glsl */`
float shorePhase(float s, float d){ return uTime * ${g7(1 / SW.T)} + s * ${g7(KS)} + d * ${g7(KD)}; }`;
// noise frequencies in the waves' frame (cells per metre along their crests: snapA, or square to them: snapB), snapped so
// the noise repeats with S_WRAP along the road (its s-part a whole number of the noise texture's 256 cells per S_WRAP), as
// the strip's road distance does; snapF: per smallest wave (OCT × N of them per S_WRAP)
const P256 = 256 / S_WRAP, snapA = f => (Math.max(1, Math.round((f * ST) / P256)) * P256) / ST, snapB = f => (Math.max(1, Math.round((f * CT) / P256)) * P256) / CT;
const snapF = f => (Math.max(1, Math.round((f * SW.N * OCT) / 256)) * 256) / (SW.N * OCT);
/** the four channels of the noise texture at once (one read: four independent value noises at p) */
export const NOISE4 = /* glsl */`
vec4 vnoise4(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0); }`;
/** every uniform of the sea's water, shared by the open sea (makeSea), the water along the coast's sea wall
 *  (shoreMaterial) and the surf (surf.js); set every frame by makeSea's update: the time, the camera, the light, the
 *  fog, how much of the painted look (a bright day) and its tones, the light on white foam (lit and in its own shade),
 *  and how much sea there is (zones) */
export const SEA_U = {
  uNoiseTex: MU.uNoiseTex, uOrigin: MU.uOrigin, uTime: { value: 0 }, uCam: { value: new THREE.Vector3() }, uSunDir: { value: TOD.lightDir }, uSunCol: { value: TOD.sunCol },
  uHorizon: { value: TOD.horizon }, uZenith: { value: TOD.zenith }, uFog: { value: TOD.fog }, uNight: { value: 0 }, uFogD: { value: 0.0016 }, uVis: { value: 1 },
  uSpecK: { value: 1 }, uBright: { value: 0 }, uPaint: { value: 0 },
  uPTrough: { value: new THREE.Color() }, uPMid: { value: new THREE.Color() }, uPFace: { value: new THREE.Color() }, uPLite: { value: new THREE.Color() },
  uPMidD: { value: new THREE.Color() }, uPMidM: { value: new THREE.Color() }, uPMidF: { value: new THREE.Color() }, uPMidL: { value: new THREE.Color() },
  uPFarD: { value: new THREE.Color() }, uPFar: { value: new THREE.Color() }, uPFarF: { value: new THREE.Color() }, uPFarL: { value: new THREE.Color() }, uPHz: { value: new THREE.Color() },
  uFoamLit: { value: new THREE.Color(1, 1, 1) }, uFoamShade: { value: new THREE.Color(0.5, 0.6, 0.8) },
  // the painted waves: the way they roll in (x, z: see coastDir), and (a test switch) whether they are drawn
  uSeaDir: { value: new THREE.Vector2(1, 0) }, uWaves: { value: 1 },
  // the waves along the wall (shoreMaterial), painted on a bright day: their tones as offsets from the open sea's (the navy
  // of their troughs, the clear cyan beyond each line of foam and its lightest at the foam, the turquoise churn along the
  // wall); and (a test switch) whether the strip draws them and their foam
  uPWBack: { value: new THREE.Color() }, uPWFace: { value: new THREE.Color() }, uPWLite: { value: new THREE.Color() }, uPWTurq: { value: new THREE.Color() },
  uShoreW: { value: 1 },
  // the low sun's (or the moon's) path on the painted water: its tones, where the light is, and how strong (0: none)
  uPPath: { value: new THREE.Color() }, uPGlint: { value: new THREE.Color() }, uPathDir: { value: new THREE.Vector3(0, 1, 0) }, uPathK: { value: 0 },
  uPSpark: { value: new THREE.Color(1, 1, 1) }, // (the open sea's glints: by day the foam's white)
};
// the painted sea's tones, measured in coast.png (sRGB), each by lightness (the darkest tenth, the middle, the lightest
// fifth, the lightest few per cent): the water along the sea wall (~35 m out: trough, mid, face, lite), out at ~60–90 m
// (mid*) and ~250 m out (far*); the light azure at the far shore, and the foam
const PAINT = {
  trough: [0, 98, 182], mid: [10, 132, 218], face: [49, 163, 242], lite: [140, 210, 250],
  midD: [4, 124, 212], midM: [27, 148, 232], midF: [49, 163, 242], midL: [140, 205, 248],
  farD: [36, 139, 221], far: [69, 169, 243], farF: [114, 191, 246], farL: [190, 228, 251],
  hz: [111, 196, 250], foam: [246, 251, 254], foamShade: [160, 205, 240],
  // the waves along the wall (the water left of the near tetrapods, by hue): the navy of their troughs, the clear cyan
  // beyond each line of foam and its lightest at the foam, and the turquoise of the churned water by the wall
  wBack: [1, 109, 193], wFace: [68, 163, 212], wLite: [113, 188, 241], wTurq: [46, 154, 201],
  // the low sun's (or the moon's) path on the water: its lit wavelets and its glints, and how strong it is (none by day:
  // the noon sun is high, and the day look is the reference's)
  path: [140, 210, 250], glint: [246, 251, 254], pk: [0, 0, 0],
  // the open sea's glints on the wavelets' crests (by day the foam's white)
  spark: [246, 251, 254],
};
// …and the same tones at golden hour, at sunset and at night, read from the coast painting repainted at those hours
// (ref/tod/coast_*.png; ~/cdtest/tod/tools/seatones.py, seatod.py): each tone by the same role as its day tone (a band of
// distance from the wall and a lightness percentile, left of the tetrapods and away from the sun's path), moved from the day
// tone by the difference the target shows (CIELAB); the path's tones are its lightest in the targets
const PAINT_GOLD = {
  trough: [62, 71, 85], mid: [100, 105, 118], face: [157, 129, 131], lite: [193, 169, 149], midD: [82, 97, 123], midM: [146, 129, 126], midF: [212, 165, 128], midL: [242, 200, 139],
  farD: [137, 119, 127], far: [228, 186, 134], farF: [246, 222, 154], farL: [243, 227, 168], hz: [238, 201, 149], foam: [250, 223, 177], foamShade: [182, 164, 157],
  wBack: [63, 79, 98], wFace: [148, 128, 110], wLite: [181, 149, 139], wTurq: [94, 114, 112], path: [238, 197, 147], glint: [253, 232, 165], pk: [0.8, 0.8, 0.8], spark: [244, 214, 172],
};
const PAINT_SUNSET = {
  trough: [63, 47, 73], mid: [91, 73, 99], face: [129, 80, 110], lite: [202, 125, 125], midD: [74, 63, 95], midM: [94, 76, 105], midF: [101, 74, 105], midL: [122, 86, 102],
  farD: [84, 58, 86], far: [104, 70, 98], farF: [124, 78, 100], farL: [146, 84, 98], hz: [126, 76, 100], foam: [247, 180, 162], foamShade: [177, 122, 140],
  wBack: [67, 56, 82], wFace: [125, 86, 95], wLite: [157, 106, 126], wTurq: [94, 84, 91], path: [244, 171, 118], glint: [255, 228, 149], pk: [1, 1, 1], spark: [196, 128, 128],
};
const PAINT_NIGHT = {
  trough: [8, 33, 62], mid: [17, 57, 92], face: [28, 64, 106], lite: [50, 88, 126], midD: [9, 42, 76], midM: [17, 53, 90], midF: [18, 55, 95], midL: [32, 62, 96],
  farD: [14, 41, 72], far: [29, 63, 96], farF: [20, 66, 111], farL: [40, 78, 120], hz: [13, 76, 131], foam: [133, 172, 202], foamShade: [70, 105, 140],
  wBack: [12, 43, 73], wFace: [50, 77, 103], wLite: [63, 96, 136], wTurq: [32, 71, 90], path: [185, 221, 236], glint: [230, 250, 254], pk: [0.75, 0.75, 0.75], spark: [58, 96, 134],
};
// keyed as sky.js KEYS: the night until dawn; sunrise as a sunset turning golden; the day; golden hour, sunset, the end of
// twilight (the sun's path gone) and dusk on the way to the night. The path follows the sun until it has set, then the moon
const SEA_TONES = todTones([
  [0.0, PAINT_NIGHT], [0.2, { ...mixTones(PAINT_NIGHT, PAINT_SUNSET, 0.25), pk: [0, 0, 0] }], [0.245, mixTones(PAINT_SUNSET, PAINT_GOLD, 0.35)],
  [0.3, PAINT], [0.62, PAINT], [0.7, PAINT_GOLD], [0.75, PAINT_SUNSET], [0.765, { ...mixTones(PAINT_SUNSET, PAINT_NIGHT, 0.25), pk: [0, 0, 0] }],
  [0.8, { ...mixTones(PAINT_SUNSET, PAINT_NIGHT, 0.55), pk: [0, 0, 0] }], [0.86, PAINT_NIGHT], [1.0, PAINT_NIGHT],
]);
/** GLSL: the open sea's colour at a world position (before the zones' fade-in) */
const SEA_PARS = /* glsl */`
uniform float uTime, uNight, uFogD, uVis, uSpecK, uBright, uPaint, uWaves, uPathK; uniform vec3 uCam, uSunDir, uSunCol, uHorizon, uZenith, uFog;
uniform vec3 uPTrough, uPMid, uPFace, uPLite, uPMidD, uPMidM, uPMidF, uPMidL, uPFarD, uPFar, uPFarF, uPFarL, uPHz, uFoamLit, uFoamShade, uPPath, uPGlint, uPathDir, uPSpark;
uniform vec2 uOrigin, uSeaDir;
${GLSL_NOISE}${NOISE4}
vec4 vnoise4g(vec2 p, vec2 gx, vec2 gy){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, gx / 256.0, gy / 256.0); }
float wh(vec2 p){ return vnoise(p * 0.18 + vec2(uTime * 0.05, uTime * 0.03)) * 0.6 + vnoise(p * 0.55 - vec2(uTime * 0.09, -uTime * 0.04)) * 0.4; }
// ---- the painted waves (a bright day), in the reference art's manner: a field of wavelets drawn as horizontal lenses of
// deep blue (their faces turned towards us, which mirror the deep sky overhead), light streaks along their backs (which
// mirror the pale sky low down), the lightest and white glints on the highest. The wavelets are value noise stretched
// along the crests and rolling in. They grow with distance just enough that the far ones shrink on screen as in the
// painting without ever going under a pixel or two: each time the distance doubles, 2^1.75 times longer across the
// crests and 2^0.75 times along them (two neighbouring sizes blended, keeping their contrast), so the far sea keeps a
// fine texture right out to the far shore and never shimmers.
// the wavelets' height and their slope up away from us (per cell), broad ones with a finer chop over them (phones: the
// broad ones only); z: a sparkle field, for the glints. (gx, gy: q's footprint on screen, worked out from the smooth
// world position: q itself jumps where one size of wavelet hands over to the next, and the noise's own derivatives
// would blur a line of pixels there)
vec3 ripple(vec2 q, vec2 gx, vec2 gy){
  vec4 n0 = vnoise4g(q, gx, gy); float h1 = vnoise4g(q + vec2(0.0, 0.2), gx, gy).x;
#ifdef SEA_LITE
  return vec3(n0.x, (h1 - n0.x) * 5.0, n0.y);
#else
  vec2 k = vec2(2.3, 2.7), q2 = q * k + vec2(13.7, 7.1), g2x = gx * k, g2y = gy * k;
  float d0 = vnoise4g(q2, g2x, g2y).x, d1 = vnoise4g(q2 + vec2(0.0, 0.54), g2x, g2y).x;
  return vec3(n0.x * 0.65 + d0 * 0.35, ((h1 - n0.x) * 0.65 + (d1 - d0) * 0.35) * 5.0, n0.y);
#endif
}
/** p: the world position (absolute), d: from the camera, dist: its length; pw: how much of the low sun's (or the moon's)
 *  path on the water is here (0 … 1) */
vec3 paintedSea(vec2 p, vec2 d, float dist, float pw){
  vec2 V = d / max(dist, 1e-3), e = vec2(-uSeaDir.y, uSeaDir.x);
  float c = dot(uSeaDir, V);
  float al = dot(p, e), ac = dot(p, uSeaDir);   // (along the crests, and the way they roll)
  vec2 dx = dFdx(d), dy = dFdy(d), gx = vec2(dot(dx, e), dot(dx, uSeaDir)), gy = vec2(dot(dy, e), dot(dy, uSeaDir));
  float lod = max(log2(dist / 40.0), 0.0), k0 = floor(lod), fr = lod - k0;
  float lam = 3.0 * exp2(1.75 * k0), mu = 1.1 * exp2(0.75 * k0), lb = lam * 3.3635857, mb = mu * 1.6817928;
  vec2 sa = vec2(1.0 / mu, 1.0 / lam), sb = vec2(1.0 / mb, 1.0 / lb);
  vec3 ra = ripple(vec2(al / mu, (ac - 1.25 * sqrt(lam) * uTime) / lam) + k0 * vec2(37.0, 53.0), gx * sa, gy * sa);
  vec3 rb = ripple(vec2(al / mb, (ac - 1.25 * sqrt(lb) * uTime) / lb) + (k0 + 1.0) * vec2(37.0, 53.0), gx * sb, gy * sb);
  float sn = inversesqrt((1.0 - fr) * (1.0 - fr) + fr * fr);              // (a blend that keeps the contrast)
  float h = 0.5 + (mix(ra.x, rb.x, fr) - 0.5) * sn, sl = mix(ra.y, rb.y, fr) * sn * (c < 0.0 ? -1.0 : 1.0); // (slope: up away from us)
  float con = smoothstep(0.05, 0.3, abs(c));                               // (no faces seen looking along the crests)
  // the tones by distance, measured in the painting row by row: its water pales steadily from the wall out to ~250 m,
  // then (all its tones together, keeping their contrast) on towards the light azure of the far shore
  float f1 = clamp(log2(dist / 33.0) * 1.16, 0.0, 1.0), ff = clamp(log2(dist / 60.0) * 0.485, 0.0, 1.0);
  vec3 hz = (uPHz - uPFar) * smoothstep(0.0, 1.0, log2(dist / 230.0) * 0.5);
  vec3 T = mix(mix(uPTrough, uPMidD, f1), uPFarD, ff) + hz, M = mix(mix(uPMid, uPMidM, f1), uPFar, ff) + hz;
  vec3 F = mix(mix(uPFace, uPMidF, f1), uPFarF, ff) + hz, Li = mix(mix(uPLite, uPMidL, f1), uPFarL, ff);
  float aw = fwidth(sl) * 0.6 + 0.02, hw = fwidth(h) * 0.6 + 0.01;
  float dark = smoothstep(0.22 - aw, 0.22 + aw, sl) * con, lite = smoothstep(0.22 - aw, 0.22 + aw, -sl) * con;
  vec3 col = mix(M, T, dark * (0.7 + 0.3 * smoothstep(0.22, 0.72, sl)));
  col = mix(col, F, lite);
  col = mix(col, Li, lite * smoothstep(0.59 - hw, 0.59 + hw, h));
  float gl = mix(ra.z, rb.z, fr), gw = fwidth(gl) * 0.6 + 0.01, gt = 0.67 - 0.14 * ff;   // (more glints far out)
  float white = lite * max(smoothstep(0.77 - hw, 0.77 + hw, h), smoothstep(gt - gw, gt + gw, gl) * smoothstep(0.45, 0.6, h));
  col = mix(col, mix(uPSpark, uPFarL, ff * 0.5), white);
  if (pw > 0.003) {
    // the low sun's (or the moon's) path, as the paintings draw it: a column of light on the water under it, its wavelets'
    // lit backs taking its colour and most of them glinting, the water between lighter too
    col = mix(col, mix(col, uPPath, 0.5), pw * (1.0 - lite) * 0.75);
    col = mix(col, uPPath, min(lite * 1.5, 1.0) * pw);
    float pg = lite * max(smoothstep(0.6 - 0.25 * pw - hw, 0.6 - 0.25 * pw + hw, h), smoothstep(gt - 0.2 * pw - gw, gt - 0.2 * pw + gw, gl));
    col = mix(col, uPGlint, pg * pw);
  }
  return col;
}
vec3 seaColour(vec3 w){
  vec3 V = normalize(uCam - w); float dist = length(uCam.xz - w.xz);
  vec2 p = w.xz + uOrigin;   // (world-anchored: the patterns stay put when the world's origin moves)
  vec3 col = vec3(0.0);
  if (uPaint < 0.999) {
    float e = 0.6, h0 = wh(p);
    vec3 N = normalize(vec3((h0 - wh(p + vec2(e, 0.0))) * 1.4, 1.0, (h0 - wh(p + vec2(0.0, e))) * 1.4));
    N = normalize(mix(N, vec3(0.0, 1.0, 0.0), smoothstep(80.0, 900.0, dist) * 0.8));
    vec3 R = reflect(-V, N);
    float al = max(dot(R, uSunDir), 0.0);
    float spec = pow(al, 300.0) * 5.0;
    float broad = pow(al, 18.0);
    float spark = step(0.86, vnoise(p * 2.2 + vec2(uTime * 0.7, -uTime * 0.5))) * step(0.5, vnoise(p * 0.7 - uTime * 0.3));
    vec3 glint = uSunCol * (spec + spark * broad * 3.0 + broad * 0.15) * (1.0 - uNight * 0.6) * uSpecK;
    float fres = pow(1.0 - max(dot(V, N), 0.0), 3.0);
    // dawn, dusk, night and grey skies: the water mirrors the sky (more of the blue overhead the brighter the day), with
    // the sun's glints, in the fog
    vec3 deep = mix(mix(vec3(0.010, 0.10, 0.26), vec3(0.004, 0.11, 0.40), uBright), mix(vec3(0.03, 0.22, 0.40), vec3(0.02, 0.25, 0.62), uBright), 0.5 + 0.5 * vnoise(p * 0.02));
    vec3 sky = mix(uHorizon, uZenith, 0.25 + 0.45 * uBright);
    col = mix(deep, sky, clamp(fres * (1.15 - 0.3 * uBright) + 0.08 - 0.03 * uBright, 0.0, 1.0));
    // painted wave crests: thin light streaks
    float crest = smoothstep(0.78, 0.86, vnoise(vec2(p.x * 0.08, p.y * 0.5) + uTime * 0.04)) * (1.0 - smoothstep(60.0, 400.0, dist));
    col = mix(col, sky * 1.15, crest * 0.35);
    col += glint;
    float fd = dist * uFogD;
    col = mix(col, uFog, 1.0 - exp(-fd * fd));
  }
  if (uPaint > 0.001) {
    // the painted sea (under a clear sky): the painting's wavelets, paling into the light azure at the far shore by day
    // (uWaves off, a test switch: its flat tones). The low sun's (or the moon's) path: where the water would mirror it into
    // the eye with a wave tilted no more than the painted waves are (the half-vector's tilt from the vertical)
    float pw = 0.0;
    if (uPathK > 0.001) { vec3 H = normalize(uPathDir + V); pw = uPathK * exp(-(1.0 - H.y) * 16.0); }
    vec3 pc = uWaves > 0.5 ? paintedSea(p, w.xz - uCam.xz, dist, pw) : mix(uPMid, uPFar, smoothstep(15.0, 260.0, dist));
    pc = mix(pc, uPHz, smoothstep(1500.0, 4000.0, dist) * 0.7);
    col = mix(col, pc, uPaint);
  }
  return col;
}`;

/** lite: phones' painted waves (no finer chop over the broad wavelets) */
export function makeSea(lite = false) {
  const mat = new THREE.ShaderMaterial({
    fog: false, defines: lite ? { SEA_LITE: '' } : {}, uniforms: SEA_U,
    vertexShader: 'varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
    fragmentShader: /* glsl */`
      ${SEA_PARS}
      varying vec3 vW;
      void main(){ gl_FragColor = vec4(mix(uFog, seaColour(vW), uVis), 1.0); }`,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(14000, 14000), mat);
  mesh.rotation.x = -Math.PI / 2; mesh.position.y = SEA; mesh.renderOrder = 998; mesh.frustumCulled = false;
  const u = SEA_U;
  return {
    mesh, u,
    /** grade: the grade pass's uniforms (the painted colours are its inverse); path, s: the road and where we are on it
     *  (the painted waves come in square to the coast in view) */
    update(cam, time, fogD, vis = 1, grade = null, path = null, s = 0) {
      mesh.position.x = cam.x; mesh.position.z = cam.z;
      if (path && vis > 0) coastDir(path, s, u.uSeaDir.value);
      u.uTime.value = time; u.uCam.value.copy(cam); u.uNight.value = TOD.night; u.uBright.value = TOD.bright; u.uFogD.value = fogD; u.uVis.value = vis; u.uSpecK.value = 1 - TOD.overcast * 0.85;
      // the painted look under a clear sky, at any hour (its tones by the time of day); grey skies and rain keep the old look
      const paint = grade ? paintSky() : 0;
      u.uPaint.value = paint;
      // the foam: white lit by the sun and the sky as any white surface is (at night only by the moon: it doesn't glow),
      // or, under a clear sky, the painting's own white with its light-blue shade (rosy at sunset, moonlit at night)
      const dayExp = 1 + 0.25 * TOD.bright, kl = 1 / (Math.PI * dayExp), sc = TOD.sunCol, hs = TOD.hemiSky, si = TOD.sunI * 0.8, hi = TOD.hemiI;
      u.uFoamLit.value.setRGB((sc.r * si + hs.r * hi) * kl, (sc.g * si + hs.g * hi) * kl, (sc.b * si + hs.b * hi) * kl);
      u.uFoamShade.value.setRGB(hs.r * hi * 0.9 * kl, hs.g * hi * 0.9 * kl, hs.b * hi * 0.9 * kl);
      u.uPathK.value = 0;
      if (paint > 0) {
        const P = SEA_TONES.at(TOD.t), g = grade;
        P.ug(g, 'trough', u.uPTrough.value); P.ug(g, 'mid', u.uPMid.value); P.ug(g, 'face', u.uPFace.value); P.ug(g, 'lite', u.uPLite.value);
        P.ug(g, 'midD', u.uPMidD.value); P.ug(g, 'midM', u.uPMidM.value); P.ug(g, 'midF', u.uPMidF.value); P.ug(g, 'midL', u.uPMidL.value);
        P.ug(g, 'farD', u.uPFarD.value); P.ug(g, 'far', u.uPFar.value); P.ug(g, 'farF', u.uPFarF.value); P.ug(g, 'farL', u.uPFarL.value); P.ug(g, 'hz', u.uPHz.value);
        u.uFoamLit.value.lerp(P.ug(g, 'foam', _c), paint); u.uFoamShade.value.lerp(P.ug(g, 'foamShade', _c), paint); P.ug(g, 'spark', u.uPSpark.value);
        // (the waves' tones along the wall as offsets from the open sea's middle tone there: they ride on its wavelets)
        ugD2(P, g, 'wBack', u.uPWBack.value, u.uPMid.value); ugD2(P, g, 'wFace', u.uPWFace.value, u.uPMid.value);
        ugD2(P, g, 'wLite', u.uPWLite.value, u.uPMid.value); ugD2(P, g, 'wTurq', u.uPWTurq.value, u.uPMid.value);
        // the low sun's path on the water while it is up (sets), then the moon's while it is low (as the paintings draw it:
        // a column from the horizon; a high moon's would wash the near water pale)
        const L = TOD.sunEl > -0.04 ? TOD.sunDir : TOD.moonDir, hi = Math.min(Math.max((L.y - 0.3) / 0.3, 0), 1);
        u.uPathK.value = P.rgb('pk')[0] * paint * u.uWaves.value * (1 - hi * hi * (3 - 2 * hi));
        if (u.uPathK.value > 0) { u.uPathDir.value.copy(L); P.ug(g, 'path', u.uPPath.value); P.ug(g, 'glint', u.uPGlint.value); }
      }
    },
  };
}
const _c = new THREE.Color();
/** a painted tone's offset from another (ungraded) colour: out = ungrade(tone n of palette P) − m (three's Color.sub would
 *  clamp it at 0) */
const ugD2 = (P, grade, n, out, m) => { P.ug(grade, n, out); out.r -= m.r; out.g -= m.g; out.b -= m.b; };
/** the way the open sea's waves roll: as in the painting, in rows across the view, i.e. back along the coast's mean line
 *  (the road's mean heading over the whole coast zone in view), slanting WAVE_SLANT in towards the shore. Set once per
 *  zone, so the waves stay put in the world and never swing round with the road's bends; where a bend looks along them,
 *  their faces fade out (paintedSea) */
const CD = { zone: -1, x: 1, z: 0 }, _f = {}, WAVE_SLANT = 0.35;
function coastDir(path, s, out) {
  // (the sea shows from 150 m before a coast zone's transition to 800 m past it: only one coast zone is ever that close)
  const z0 = Math.floor((s - 150) / ZONE_LEN), z1 = Math.floor((s + 800) / ZONE_LEN) + 1;
  for (let zi = z0; zi <= z1; zi++) {
    if (zoneWeight(zi * ZONE_LEN + ZONE_LEN / 2, 'coast') < 0.99) continue;
    if (zi !== CD.zone) {
      let h = 0, n = 0;
      for (let q = zi * ZONE_LEN - TRANS; q <= (zi + 1) * ZONE_LEN; q += 25) { path.at(Math.max(q, 0), _f); h += _f.h; n++; }
      h /= n; CD.zone = zi;
      // (the road runs along (sin h, cos h) with the sea on its left (its right: (-cos h, sin h)). As in the painting, the
      // waves come in rows across the view: they roll back along the road towards us, slanting in to the shore)
      const cs = Math.cos(WAVE_SLANT), sn = Math.sin(WAVE_SLANT);
      CD.x = -Math.sin(h) * cs - Math.cos(h) * sn; CD.z = -Math.cos(h) * cs + Math.sin(h) * sn;
    }
    out.set(CD.x, CD.z); return;
  }
}

/** 波打ち際: the water along the coast's sea wall: a strip built with each chunk (su = (s, d): d metres out from the wall;
 *  hf: how close a tetrapod heap is, and how far the strip is from a break in it), drawn opaque just over the sea plane
 *  and before it, so the depth test skips the plane under it instead of shading it twice and blending. It is the open
 *  sea's own colour (seaColour, its wavelets) with the reference art's rows of breaking waves over it, rolling in at a
 *  slant (SHORE_PHASE):
 *  - as the painting draws them, smaller near us and bigger further off (a row about every 0.27 × the distance: they keep
 *    about the same size on screen), short-crested, bowed, each its own size along it;
 *  - on a bright day, the water just beyond each one's line of foam a bright clear cyan, lightest at the foam, and the
 *    troughs between them a deep navy, the open sea's wavelets showing through calmed;
 *  - each one's line of foam: beads and dashes of white, where it breaks a white crest with a torn top and streaks of foam
 *    falling from it, lit on top and in its own light-blue shade below;
 *  - lace (thresholded noise, the toon-water recipe, drawn out along the crests) running back from a breaking crest,
 *    churned along the wall as each big wave hits it and boiling round the tetrapod heaps: solid with a few holes where
 *    there is a lot, a web of thin lines where there is less (only near: further off it would shimmer).
 *  All of it fades out towards the strip's ends and its outer edge, where it meets the open sea seamlessly; the painted
 *  tones are a bright day's, the foam is there at any hour, lit as any white surface. uShoreW (a test switch): 0 = the open
 *  sea's colour only. */
export function shoreMaterial(lite = false) {
  // (EA: the crests' pattern along them, per smallest wave: 1.4 m cells, doubling with the waves' size; 8 × 256 cells per
  // S_WRAP along the road, so it repeats with S_WRAP at every size)
  const CA = snapA(5.5), LA = snapA(0.45), EA = (8 * P256) / ST, LB = snapB(2.6), CB = snapF(0.8), W1 = snapF(17.3), W2 = snapF(3.7);
  return new THREE.ShaderMaterial({
    fog: false, defines: lite ? { SHORE_LITE: '', SEA_LITE: '' } : {}, uniforms: SEA_U,
    vertexShader: 'attribute vec2 su; attribute vec2 hf; varying vec2 vSU; varying vec2 vHF; varying vec3 vW; void main(){ vSU = su; vHF = hf; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
    fragmentShader: /* glsl */`
      ${SEA_PARS}${SHORE_PHASE}
      uniform vec3 uPWBack, uPWFace, uPWLite, uPWTurq; uniform float uShoreW;
      varying vec2 vSU; varying vec2 vHF; varying vec3 vW;
      vec4 vnoise4L(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0); }
      // a wave's profile as the painting draws it, by e (from its line of foam, in waves; > 0 beyond it): the water just
      // beyond the foam a bright clear cyan, lightest at the foam, fading into the blue; the trough between two waves navy
      float faceW(float e, float aa){ return (1.0 - smoothstep(0.05, 0.38, e)) * smoothstep(0.0, aa, e); }
      float troughW(float e){ return smoothstep(0.2, 0.4, abs(e)); }
      void main(){
        vec3 sea = seaColour(vW), col = sea;
        float s = vSU.x, d = max(vSU.y, 0.0), dist = length(uCam - vW);
        if (uShoreW > 0.5) {
          // the waves' frame (m): a along their crests (out from the wall), b square to them (away from us, out to sea)
          float a = d * ${g7(CT)} - s * ${g7(ST)}, b = s * ${g7(CT)} + d * ${g7(ST)};
          vec4 nA = vnoise4(vec2(s * 0.0609524, d * 0.12 + uTime * 0.01));
          float wob = (nA.x - 0.5) * 0.9;   // (the rows wander)
          // the waves drawn here: the smallest (OCT to each big one) out to 8 m from us, then doubling at each doubling of
          // the distance, every other crest fading out in between, so the sizes hand over without a seam. q: the phase in
          // this size's waves; e: from the nearest crest of this size, e1: of the next size up (in their own waves); f:
          // since the last big wave passed
          float ph1 = (shorePhase(s, d) + wob) * ${OCT.toFixed(1)}, f = fract(ph1 * ${(1 / OCT).toFixed(3)}), fw1 = fwidth(ph1) + 1e-4;
          float L = clamp(log2(dist * 0.125), 0.0, 3.0), k0 = floor(L), fr = L - k0, P = exp2(k0);
          float q = ph1 / P, n0 = floor(q + 0.5), n1 = floor(0.5 * q + 0.5), ev = 1.0 - mod(n0, 2.0), aa = fw1 / P * 1.2;
          // the details' coordinates and their footprints on screen first (they are read only near the crests and where
          // there is foam): the crest's torn edge and its beads ride with the crest; the lace stays in the water as the
          // waves pass through it, drifting in slowly. Along the road they repeat with S_WRAP
          vec2 pC = vec2(a * ${g7(CA)}, ph1 * ${g7(CB)}), cx = dFdx(pC), cy = dFdy(pC);
          vec2 pL = vec2(a * ${g7(LA)}, (b + uTime * 0.3) * ${g7(LB)}), lx = dFdx(pL), ly = dFdy(pL);
          // the waves in full out to ~14 m from the wall, easing into the open sea's own wavelets by the strip's edge; their
          // crests fade as they shrink to a few pixels far ahead
          float near = 1.0 - smoothstep(14.0, 36.0, d), vis = 1.0 - smoothstep(0.07, 0.18, aa * 0.8333), nw = 1.0 - smoothstep(3.0, 20.0, d);
          // a short-crested sea, as the painting's: each crest a few of its wavelengths long, bowed, bigger and smaller
          // along it, breaking where it is biggest (more of it near the wall), each its own: one pattern per crest, riding
          // with it, at its size (E0 for the crests of this size, E1 for the next size's)
          vec4 E0 = vnoise4L(vec2(a * ${g7(EA)} / P + n0 * P * ${g7(W1)}, n0 * P * ${g7(W2)})), E1 = vec4(0.5);
          // (the next size's only between two sizes: inside 8 m and beyond 64 m every use of it is weighted by fr = 0)
          if (fr > 0.0) E1 = vnoise4L(vec2(a * ${g7(EA)} * 0.5 / P + n1 * 2.0 * P * ${g7(W1)}, n1 * 2.0 * P * ${g7(W2)}));
          float e = q - n0 + (E0.y - 0.5) * 0.45, e1 = 0.5 * q - n1 + (E1.y - 0.5) * 0.45, bz = 0.12 + 0.1 * nw;
          float A0 = smoothstep(0.26, 0.5, E0.x + bz), A1 = smoothstep(0.26, 0.5, E1.x + bz);
          float B0 = smoothstep(0.46, 0.66, E0.x + bz + 0.08 * nw), B1 = smoothstep(0.46, 0.66, E1.x + bz + 0.08 * nw);
          // the crest drawn: this size's (the ones the next size up doesn't have fading out, the others growing into it)
          float Ac = mix(A0, A1 * ev, fr), brk = mix(B0, B1 * ev, fr), ec = mix(e, 2.0 * e1, fr * ev), gw = 1.0 + fr * ev;
          // the painted tones (a bright day): the open sea's own (Ms, at this distance) with the waves' cyan and navy, its
          // wavelets riding on them calmed
          float f1 = clamp(log2(dist / 33.0) * 1.16, 0.0, 1.0), ff = clamp(log2(dist / 60.0) * 0.485, 0.0, 1.0);
          vec3 Ms = mix(mix(uPMid, uPMidM, f1), uPFar, ff);
          float face = mix(faceW(e, aa) * (0.55 + 0.45 * A0), faceW(e1, aa * 0.5) * (0.55 + 0.45 * A1), fr);
          float back = mix(troughW(e) * (0.6 + 0.4 * A0), troughW(e1) * (0.6 + 0.4 * A1), fr);
          vec3 tone = Ms + uPWBack * (back * 1.35) + mix(uPWFace, uPWLite, smoothstep(0.55, 1.0, face)) * (face * 1.4) + uPWTurq * (0.6 - 0.6 * smoothstep(1.0, 7.0, d));
          col = mix(sea, max(tone + (sea - Ms) * (0.35 - 0.15 * face), vec3(0.0)), uPaint * near);
          // the line of foam: beads and dashes of white along it (nearly unbroken where it breaks); where it breaks a white
          // crest with a torn top and streaks of foam falling from it. Lit on top, in its own light-blue shade below
          float crest = 0.0, cl = 1.0;
          // (its torn top and the streaks are spray and foam standing up off the water, seen from the side: looking down
          // on it from high up they shrink to the crest. Its reach (rc): the noise is read only within it)
          float lw = (0.027 + 0.021 * E0.w) * gw, cw = 0.16 * brk * (0.6 + 0.8 * E0.z) * gw;
          float sv = 1.0 - 0.75 * smoothstep(0.25, 0.7, (uCam.y - vW.y) / max(dist, 1.0)), fl = 0.4 * brk * sv;
          float rc = max(lw + 0.01, ec > 0.0 ? cw * (0.15 + 5.12 * sv) : cw * 1.2 + fl) + aa;
          if (abs(ec) < min(rc, 0.45) && vis * near * Ac > 0.01) {
            vec4 nC = vnoise4g(pC, cx, cy);
            float line = (1.0 - smoothstep(lw - aa, lw + aa, abs(ec + 0.008))) * smoothstep(-0.05, 0.05, nC.x - mix(0.62, 0.3, brk));
            float up = cw * (0.15 + 3.2 * nC.y * nC.y * nC.y * (0.4 + 1.2 * E0.w) * sv), dn = cw * (0.3 + 0.9 * nC.w);
            float out1 = ec > 0.0 ? ec - up : -ec - dn;                     // (outside the crest, in waves)
            float tuft = (1.0 - smoothstep(-aa, aa, out1)) * step(0.01, cw);
            float t = clamp(out1 / max(fl, 1e-3), 0.0, 1.0);
            float fing = ec < 0.0 ? smoothstep(0.0, 0.05, nC.z - 0.5 - 0.42 * t) * (1.0 - t) * step(0.0, out1) * brk : 0.0;
            crest = max(max(line, tuft), fing) * Ac * vis * near;
            cl = clamp(0.6 + (ec + dn * 0.5) / max(cw + lw, 1e-3) * 0.5 + 0.35 * (nC.w - 0.5), 0.0, 1.0);
          }
          // the lace: running back from a breaking crest and streaked beyond it, churned along the wall as each big wave
          // hits it (and on through the water near it), and round the heaps
          float trail = brk * near * smoothstep(0.0, aa, ec) * (1.0 - smoothstep(0.02, 0.25, ec)) * 0.55;
          float hit = 1.0 - smoothstep(0.0, 0.35, fract(shorePhase(s, 0.0) + wob));
          float amt = max(trail, max(faceW(ec, aa) * brk * near * 0.3, (1.0 - smoothstep(0.3, 0.9 + 2.2 * hit, d)) * (0.55 + 0.45 * hit)));
          amt = max(amt, (1.0 - smoothstep(1.0, 8.0, d)) * (0.36 + 0.5 * hit));
          amt = max(amt, vHF.x * (0.6 + 0.4 * (1.0 - smoothstep(0.0, 0.4, f))));
          float la = 0.0; vec3 foam = uFoamLit;
          if (amt > 0.08) {
            vec4 nB = vnoise4g(pL, lx, ly);
            float lf = length(lx) + length(ly), lw = 0.01 + 0.3 * lf, th = mix(1.25, 0.5, amt), ww = 0.045 * amt;
            la = max(smoothstep(th - lw, th + lw, nB.x), (1.0 - smoothstep(ww - lw, ww + lw, abs(nB.x - 0.5))) * (1.0 - smoothstep(0.08, 0.22, lf))) * smoothstep(0.08, 0.2, amt);
            foam = mix(uFoamShade, uFoamLit, clamp(0.45 + 0.8 * (nB.y - 0.35), 0.0, 1.0));
          }
          foam = mix(foam, mix(uFoamShade, uFoamLit, cl), crest);
          // it all fades out with the sea's fog, towards the end of the built world and towards the strip's ends
          float fd = dist * uFogD, k = exp(-fd * fd) * (1.0 - smoothstep(420.0, 700.0, dist)) * vHF.y;
          col = mix(mix(sea, col, k), foam, max(la, crest) * k);
        }
        gl_FragColor = vec4(mix(uFog, col, uVis), 1.0);
      }`,
  });
}

/** a river: blue-green water flowing along the channel (su = (Δs, u)), mirroring the sky, with glints */
export function riverMaterial() {
  return new THREE.ShaderMaterial({
    fog: false,
    uniforms: {
      uNoiseTex: MU.uNoiseTex,
      uTime: { value: 0 }, uSunDir: { value: TOD.lightDir }, uSunCol: { value: TOD.sunCol }, uHorizon: { value: TOD.horizon }, uZenith: { value: TOD.zenith },
      uFog: { value: TOD.fog }, uFogD: { value: 0.002 }, uNight: { value: 0 }, uSpecK: { value: 1 },
    },
    vertexShader: 'attribute vec2 su; varying vec2 vSU; varying vec3 vW; void main(){ vSU = su; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
    fragmentShader: /* glsl */`
      uniform float uTime, uFogD, uNight, uSpecK; uniform vec3 uSunDir, uSunCol, uHorizon, uZenith, uFog; varying vec2 vSU; varying vec3 vW;
      ${GLSL_NOISE}
      void main(){
        vec3 V = normalize(vW - cameraPosition); float dist = length(cameraPosition - vW);
        vec2 p = vec2(vSU.y * 0.22 - uTime * 0.55, vSU.x * 0.6);   // flows along the channel
        float n1 = vnoise(p), n2 = vnoise(p * 2.7 + 5.0);
        vec3 N = normalize(vec3((n1 - 0.5) * 0.25, 1.0, (n2 - 0.5) * 0.25));
        vec3 R = reflect(V, N);
        float hgt = clamp(R.y, 0.0, 1.0);
        vec3 sky = mix(uHorizon, uZenith, pow(hgt, 0.55));
        vec3 deep = mix(vec3(0.02, 0.12, 0.13), vec3(0.05, 0.2, 0.22), n1);
        float fr = 0.3 + 0.7 * pow(1.0 - clamp(-V.y, 0.0, 1.0), 3.0);
        vec3 col = mix(deep * (1.0 - 0.6 * uNight), sky, fr * 0.85);
        float streak = smoothstep(0.72, 0.8, vnoise(vec2(vSU.y * 0.08 - uTime * 0.3, vSU.x * 1.4)));
        col += streak * 0.06 * (1.0 - uNight);
        col += uSunCol * pow(max(dot(R, uSunDir), 0.0), 180.0) * 4.0 * uSpecK * (1.0 - uNight * 0.7);
        float edge = smoothstep(12.2, 14.2, abs(vSU.x));              // a little foam where it meets the banks
        col = mix(col, vec3(0.85, 0.9, 0.92) * (1.0 - 0.7 * uNight), edge * 0.35 * vnoise(vec2(vSU.y * 0.5 - uTime, vSU.x)));
        float fd = dist * uFogD;
        gl_FragColor = vec4(mix(col, uFog, 1.0 - exp(-fd * fd)), 1.0);
      }`,
  });
}
