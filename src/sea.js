// The sea: a big camera-following plane with an anime-style water shader, and the coast's surf: the water along the sea
// wall (shoreMaterial, a strip built with each chunk) where the waves break white against the wall and round the
// tetrapods (whose splashes are surf.js). Rivers too.
//  - On a bright clear day the sea is painted in the reference art's own colours (their inverse grade, as the painted
//    clouds and horizon: painted.js) and its manner: a deep, saturated azure covered right out to the far shore in
//    wavelets (navy lenses, light cyan streaks, white glints), small and many far out, larger towards the wall, paling to
//    a light azure at the painted far shore instead of fogging to white.
//  - At dawn, dusk, night and under grey skies it keeps its old look: the sky mirrored by the Fresnel law, in the fog.
import * as THREE from 'three';
import { GLSL_NOISE, U as MU } from './materials.js';
import { TOD } from './sky.js';
import { SEA, ZONE_LEN, TRANS, zoneWeight } from './path.js';
import { ungradeRGB } from './painted.js';

/** the waves running in to the coast's sea wall, shared by the shore's foam and the surf over the tetrapods (surf.js): one
 *  every SW.T seconds, their crests SW.LAM m apart, coming in at a slant so each one breaks along the wall (SW.LZ m of
 *  wall per wave, travelling forward along the road; it divides the shaders' wrapped road distance, S_WRAP). */
export const SW = { T: 6.5, LAM: 11.0, LZ: 42.0 };
/** GLSL: the shore waves' phase at road distance s, d metres out from the wall: a crest wherever it is a whole number */
export const SHORE_PHASE = /* glsl */`
float shorePhase(float s, float d){ return uTime * ${(1 / SW.T).toFixed(7)} + d * ${(1 / SW.LAM).toFixed(7)} - s * ${(1 / SW.LZ).toFixed(7)}; }`;
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
};
// the painted sea's tones, measured in coast.png (sRGB), each by lightness (the darkest tenth, the middle, the lightest
// fifth, the lightest few per cent): the water along the sea wall (~35 m out: trough, mid, face, lite), out at ~60–90 m
// (mid*) and ~250 m out (far*); the light azure at the far shore, and the foam
const PAINT = {
  trough: [0, 98, 182], mid: [10, 132, 218], face: [49, 163, 242], lite: [140, 210, 250],
  midD: [4, 124, 212], midM: [27, 148, 232], midF: [49, 163, 242], midL: [140, 205, 248],
  farD: [36, 139, 221], far: [69, 169, 243], farF: [114, 191, 246], farL: [190, 228, 251],
  hz: [111, 196, 250], foam: [246, 251, 254], foamShade: [160, 205, 240],
};
/** GLSL: the open sea's colour at a world position (before the zones' fade-in) */
const SEA_PARS = /* glsl */`
uniform float uTime, uNight, uFogD, uVis, uSpecK, uBright, uPaint, uWaves; uniform vec3 uCam, uSunDir, uSunCol, uHorizon, uZenith, uFog;
uniform vec3 uPTrough, uPMid, uPFace, uPLite, uPMidD, uPMidM, uPMidF, uPMidL, uPFarD, uPFar, uPFarF, uPFarL, uPHz, uFoamLit, uFoamShade;
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
/** p: the world position (absolute), d: from the camera, dist: its length */
vec3 paintedSea(vec2 p, vec2 d, float dist){
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
  return mix(col, mix(uFoamLit, uPFarL, ff * 0.5), white);
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
    // the painted sea (a bright clear day): the painting's wavelets, paling into the light azure at the far shore (uWaves
    // off, a test switch: its flat tones)
    vec3 pc = uWaves > 0.5 ? paintedSea(p, w.xz - uCam.xz, dist) : mix(uPMid, uPFar, smoothstep(15.0, 260.0, dist));
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
      // the painted look on a bright day only (as the horizon band's: none at golden hour, sunset, night or under cloud)
      const k = Math.min(Math.max((TOD.bright - 0.55) / 0.4, 0), 1), paint = grade ? k * k * (3 - 2 * k) : 0;
      u.uPaint.value = paint;
      // the foam: white lit by the sun and the sky as any white surface is (at night only by the moon: it doesn't glow),
      // or, on a bright day, the painting's own white with its light-blue shade
      const dayExp = 1 + 0.25 * TOD.bright, kl = 1 / (Math.PI * dayExp), sc = TOD.sunCol, hs = TOD.hemiSky, si = TOD.sunI * 0.8, hi = TOD.hemiI;
      u.uFoamLit.value.setRGB((sc.r * si + hs.r * hi) * kl, (sc.g * si + hs.g * hi) * kl, (sc.b * si + hs.b * hi) * kl);
      u.uFoamShade.value.setRGB(hs.r * hi * 0.9 * kl, hs.g * hi * 0.9 * kl, hs.b * hi * 0.9 * kl);
      if (paint > 0) {
        const P = PAINT;
        ug(grade, P.trough, u.uPTrough.value); ug(grade, P.mid, u.uPMid.value); ug(grade, P.face, u.uPFace.value); ug(grade, P.lite, u.uPLite.value);
        ug(grade, P.midD, u.uPMidD.value); ug(grade, P.midM, u.uPMidM.value); ug(grade, P.midF, u.uPMidF.value); ug(grade, P.midL, u.uPMidL.value);
        ug(grade, P.farD, u.uPFarD.value); ug(grade, P.far, u.uPFar.value); ug(grade, P.farF, u.uPFarF.value); ug(grade, P.farL, u.uPFarL.value); ug(grade, P.hz, u.uPHz.value);
        u.uFoamLit.value.lerp(ug(grade, P.foam, _c), paint); u.uFoamShade.value.lerp(ug(grade, P.foamShade, _c), paint);
      }
    },
  };
}
const _c = new THREE.Color();
const ug = (grade, c, out) => ungradeRGB(grade, c[0], c[1], c[2], out);
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
 *  sea's own colour (seaColour) with the coast's waves on it: long crests coming in
 *  (SHORE_PHASE), their faces lighter and their troughs darker (the painted look, by day), breaking white over the last
 *  ~30 m: foam trailing behind each breaking crest, a band of foam along the wall that swells as each wave hits it,
 *  and foam boiling round the tetrapod heaps. The foam is thresholded noise (lace) that thins out as it fades: the
 *  toon-water recipe, with the distance to the shore known from the geometry instead of read from a depth buffer. All
 *  of it fades out towards the strip's ends and its outer edge, where it meets the open sea seamlessly. */
export function shoreMaterial(lite = false) {
  return new THREE.ShaderMaterial({
    fog: false, defines: lite ? { SHORE_LITE: '', SEA_LITE: '' } : {}, uniforms: SEA_U,
    vertexShader: 'attribute vec2 su; attribute vec2 hf; varying vec2 vSU; varying vec2 vHF; varying vec3 vW; void main(){ vSU = su; vHF = hf; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
    fragmentShader: /* glsl */`
      ${SEA_PARS}${SHORE_PHASE}
      varying vec2 vSU; varying vec2 vHF; varying vec3 vW;
      void main(){
        vec3 sea = seaColour(vW);
        float s = vSU.x, d = max(vSU.y, 0.0), dist = length(uCam - vW);
        // the lace's coordinates and their footprint on screen first, in uniform control flow (the lace is only read
        // where there is foam). Along the road the noise repeats every 4200 m, as s does (256 cells): no seam where s wraps
        vec2 pB = vec2(s * 0.26, d * 0.85 - uTime * 0.11), bx = dFdx(pB), by = dFdy(pB);
        vec2 pC = vec2(s * 0.85, d * 2.6) + vec2(uTime * 0.06, -uTime * 0.23), cx = dFdx(pC), cy = dFdy(pC);
        vec4 nA = vnoise4(vec2(s * 0.0609524, d * 0.08 + uTime * 0.01));
        float ph = shorePhase(s, d) + (nA.x - 0.5) * 0.6;     // the crests wander a little
        float f = fract(ph), wave = floor(ph), fw = fwidth(ph);
        // each wave breaks along stretches of the wall of its own (and more of it the nearer it comes)
        float brk = smoothstep(0.25, 0.55, vnoiseL(vec2(s * 0.0609524 + wave * 17.31, wave * 3.7)));
        float zone = 1.0 - smoothstep(7.0, 31.0, d), in0 = smoothstep(0.0, fw * 1.5 + 1e-4, f);
        // the breaking crest: a bright line along its front, lace trailing out to sea behind it
        float lw = 0.03 + 0.035 * nA.y;
        float line = (1.0 - smoothstep(lw, lw + fw * 1.5, f)) * in0;
        float trail = (1.0 - smoothstep(0.03, 0.27, f)) * in0;
        float crest = max(line, trail * 0.62) * brk * zone;
        // the wall: a band of foam that swells as each wave hits it (the backwash), and foam boiling round the tetrapods
        float hit = 1.0 - smoothstep(0.0, 0.3, fract(shorePhase(s, 0.0) + (nA.x - 0.5) * 0.6));
        float amt = max(crest, (1.0 - smoothstep(0.3, 1.2 + 2.8 * hit, d)) * (0.6 + 0.4 * hit));
        amt = max(amt, vHF.x * (0.6 + 0.4 * (1.0 - smoothstep(0.0, 0.4, f))));
        // the painted look (a bright day): each wave's face lighter as it rears up towards its crest, its back and the
        // trough behind it a deep navy; the bigger the wave (where it breaks), the more so
        float face = smoothstep(0.55, 0.96, f) * (1.0 - smoothstep(1.0 - fw * 1.5 - 1e-4, 1.0, f));
        float trough = smoothstep(0.1, 0.28, f) * (1.0 - smoothstep(0.48, 0.66, f));
        float wa = max(face * 0.72, trough * 0.62) * (0.55 + 0.45 * brk) * (1.0 - smoothstep(24.0, 38.0, d)) * uPaint;
        // the lace: two scales of noise (one on phones), drawn out along the crests. Where there is a lot of foam it is
        // solid with a few holes; where there is less, a web of thin lines (the noise's middle contours) thinning out
        float a = 0.0; vec3 foam = uFoamLit;
        if (amt > 0.08) {
          vec4 nB = vnoise4g(pB, bx, by);
          #ifdef SHORE_LITE
          float lace = nB.x, la = 0.012 + 0.3 * (length(bx) + length(by)), lt = nB.y;
          #else
          vec4 nC = vnoise4g(pC, cx, cy);
          float lace = nB.x * 0.6 + nC.x * 0.4, la = 0.012 + 0.18 * (length(bx) + length(by)) + 0.12 * (length(cx) + length(cy)), lt = nC.y;
          #endif
          float th = mix(0.86, 0.3, amt), web = abs(lace - 0.5), ww = 0.075 * amt;
          a = max(smoothstep(th - la, th + la, lace), 1.0 - smoothstep(ww - la, ww + la, web)) * smoothstep(0.08, 0.2, amt);
          foam = mix(uFoamShade, uFoamLit, clamp(0.45 + 0.8 * (lt - 0.35) + 0.4 * crest, 0.0, 1.0));
        }
        // it all fades out with the sea's fog, towards the end of the built world and towards the strip's ends
        float fd = dist * uFogD, k = exp(-fd * fd) * (1.0 - smoothstep(420.0, 700.0, dist)) * vHF.y;
        vec3 col = mix(sea, mix(uPTrough, uPFace, face), wa * k);
        col = mix(col, foam, a * k);
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
