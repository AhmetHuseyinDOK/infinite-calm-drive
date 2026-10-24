import * as THREE from 'three';

// Fog override: with a plain THREE.Fog, fogNear carries an exp² density and fogFar is the streaming draw
// distance — everything is fully fogged by then, so newly built scenery never pops in at the horizon.
THREE.ShaderChunk.fog_fragment = /* glsl */`
#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = 1.0 - exp( - fogNear * fogNear * vFogDepth * vFogDepth );
    fogFactor = max( fogFactor, smoothstep( fogFar * 0.8, fogFar, vFogDepth ) );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`;

// Shadows: hardware-filtered taps (bilinear depth compare) at fixed offsets instead of three.js's 5 Vogel-disk taps
// rotated by per-pixel noise — much cheaper, and stable: the rotated noise made shadow edges shimmer as we moved.
// One tap by default; 4 taps at ±½ texel (?pcf=4) soften the static stair-steps into a ~3-texel edge for ~1 ms more.
// (The moving car has its own fine map, below.) Call before the first compile.
const SHADOW_SRC = THREE.ShaderChunk.shadowmap_pars_fragment;
export function setShadowTaps(n) {
  const tap = o => `texture( shadowMap, vec3( shadowCoord.xy${o}, shadowCoord.z ) )`;
  const four = `0.25 * ( ${tap(' - so')} + ${tap(' + so')} + ${tap(' + vec2( so.x, -so.y )')} + ${tap(' + vec2( -so.x, so.y )')} )`;
  const body = n >= 4 ? `vec2 so = texelSize * 0.5;\nshadow = ${four};`
    // adaptive: one tap, and only where it lands on an edge texel (a fractional result) widen to the 4-tap tent — the
    // stair-steps of shadow edges on walls smooth out, while fully lit / shadowed pixels (most of them) pay one tap
    : n === 2 ? `shadow = ${tap('')};\nif ( shadow > 0.001 && shadow < 0.999 ) { vec2 so = texelSize * 0.5; shadow = ${four}; }`
    : `shadow = ${tap('')};`;
  THREE.ShaderChunk.shadowmap_pars_fragment = SHADOW_SRC.replace(
    /float phi = interleavedGradientNoise\( gl_FragCoord\.xy \) \* PI2;\s*shadow = \([\s\S]*?\) \* 0\.2;/, body);
}
setShadowTaps(1);
/** Fade the sun's shadow on surfaces it only grazes (N·L from lo to hi): there the map can't resolve the surface's own
 *  depth, which showed as stripes and saw-teeth on walls that crawled as the sun moved. Call before the first compile. */
export function setGrazeFade(lo, hi) {
  const head = lo < hi ? `#define GRAZE_FADE\n#define GRAZE_LO ${lo.toFixed(3)}\n#define GRAZE_HI ${hi.toFixed(3)}\n` : '';
  THREE.ShaderChunk.shadowmap_pars_fragment = head + THREE.ShaderChunk.shadowmap_pars_fragment.replace(/^(#define GRAZE_[^\n]*\n)*/, '');
}
// Directional lights: light 0 is the sun. Light 1, when present, adds no light: it only carries the car's own small,
// sharp shadow map (main.js routes the car into that map and out of the sun's), so the car's shadow has crisp edges
// instead of stair-steps crawling over the big map's 6 cm texels as it drives. The two shadows combine with min().
THREE.ShaderChunk.lights_fragment_begin = THREE.ShaderChunk.lights_fragment_begin.replace(
  /#pragma unroll_loop_start\s*for \( int i = 0; i < NUM_DIR_LIGHTS; i \+\+ \) \{[\s\S]*?#pragma unroll_loop_end/, /* glsl */`
	directionalLight = directionalLights[ 0 ];
	getDirectionalLightInfo( directionalLight, directLight );
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	if ( directLight.visible && receiveShadow ) {
		directionalLightShadow = directionalLightShadows[ 0 ];
		float sh = getShadow( directionalShadowMap[ 0 ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ 0 ] );
		#ifdef GRAZE_FADE
		// walls the sun only grazes keep the toon ramp: there the map can't resolve their own depth (acne stripes that crawl as the sun moves)
		sh = mix( 1.0, sh, smoothstep( GRAZE_LO, GRAZE_HI, dot( geometryNormal, directLight.direction ) ) );
		#endif
		#if NUM_DIR_LIGHT_SHADOWS > 1
		// surfaces turning away from the sun keep just the toon ramp: the sharp map would cut their wrapped light
		// into jagged bands (the car shadowing its own back)
		float nl = smoothstep( 0.0, 0.2, dot( geometryNormal, directLight.direction ) );
		if ( nl > 0.0 ) { directionalLightShadow = directionalLightShadows[ 1 ];
			sh = min( sh, mix( 1.0, getShadow( directionalShadowMap[ 1 ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ 1 ] ), nl ) ); }
		#endif
		directLight.color *= sh;
	}
	#endif
	RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );`);

export const S_WRAP = 4200; // s is wrapped for shaders; divisible by every pattern period used below

// shared uniforms (one object each, referenced by every material that needs it)
export const U = {
  uSkyHor: { value: new THREE.Color(0.7, 0.8, 0.9) },
  uSkyZen: { value: new THREE.Color(0.2, 0.4, 0.9) },
  uTime: { value: 0 },
  uNight: { value: 0 },
  uWet: { value: 0 },                          // 0 dry … 1 soaked (rain)
  uSakWet: { value: 0 },                       // the cherry avenue's wet road (its zone weight scales it per vertex)
  uLightsOn: { value: 1 },                     // how far into the evening the town's home lights have come on (0 … 1)
  uBacklit: { value: 0 },                      // how strongly a low sun shines through leaves and grass (0 … 1.6)
  uCloudSh: { value: 0 },                      // strength of drifting cloud shadows
  uOrigin: { value: new THREE.Vector2() },     // world-origin offset, so world-space patterns survive rebasing
  uSunDir: { value: new THREE.Vector3(0, 1, 0) },
  uSunCol: { value: new THREE.Color(1, 1, 1) },
  uTuftV: { value: new THREE.Vector4(0.167, 0.333, 0.164, 0.165) }, // foliage atlas v: the tuft row's bottom and top, the verge banks' top, a split between them
  uGhShade: { value: new THREE.Vector3(0.3, 0.85, 1.7) }, // the painted crowns' shade tint (makeGhibliLeaf): teal on a bright day, else neutral (main.js)
  uBlShade: { value: new THREE.Vector3(7.5, 3, 2.3) },    // …and the cherry blossom's: a bright rose-magenta on a bright day
  uTunA: { value: new THREE.Vector3(0, -1e4, 0) },  // the current tunnel's axis (portal to portal, at road level)
  uTunB: { value: new THREE.Vector3(0, -1e4, 0) },
  uTunR: { value: 4.6 },
  uCarPos: { value: new THREE.Vector3() }, uCarFwd: { value: new THREE.Vector3(0, 0, 1) }, uHead: { value: 0 },
  uWind: { value: 1 },
  uNoiseTex: { value: makeNoiseTex() },
  uCloudTex: { value: null },                  // the drifting cloud shadows, painted each frame (makeCloudMap)
  uCloudOrg: { value: new THREE.Vector2() },   // world xz at the centre of that map (rebased coordinates)
  // wet-road reflections (post.js ReflCopyPass → the WET chunk): the frame's light at ⅛ size, on while the road is wet
  uReflTex: { value: null }, uReflOn: { value: 0 }, uReflRes: { value: new THREE.Vector2(1280, 720) }, uHorizon: { value: 0.6 }, uReflK: { value: 0.3 },
};

function gradTex(vals) {
  const t = new THREE.DataTexture(new Uint8Array(vals), vals.length, 1, THREE.RedFormat);
  t.minFilter = t.magFilter = THREE.NearestFilter; t.generateMipmaps = false; t.needsUpdate = true;
  return t;
}
// toon ramp: away from the sun → only sky light (blue shadows); grazing → mid; facing → full sun
export const GRAD = gradTex([16, 16, 16, 70, 200, 255, 255, 255]);
export const GRAD_SOFT = gradTex([28, 40, 70, 130, 200, 240, 255, 255]);

// value noise from a 256² random texture: one (mip-mapped, so distant patterns don't sparkle) texture read instead of
// four procedural hashes — the per-pixel noise was the single biggest GPU cost on the ground and the foliage
function makeNoiseTex() {
  const N = 256, d = new Uint8Array(N * N * 4);
  let a = 0x9e3779b9;
  const rnd = () => { a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  for (let i = 0; i < d.length; i++) d[i] = Math.floor(rnd() * 256);
  const t = new THREE.DataTexture(d, N, N, THREE.RGBAFormat);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.magFilter = THREE.LinearFilter; t.minFilter = THREE.LinearMipmapLinearFilter;
  t.generateMipmaps = true; t.colorSpace = THREE.NoColorSpace; t.needsUpdate = true;
  return t;
}
export const GLSL_NOISE = /* glsl */`
uniform sampler2D uNoiseTex;
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f);
  return textureGrad(uNoiseTex, (i + w + 0.5) / 256.0, dFdx(p) / 256.0, dFdy(p) / 256.0).r; }
float fbm2(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
// the same noise from the top mip only: needs no screen-space derivatives (safe inside branches; for slow wobbles)
float vnoiseL(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
vec3 L(vec3 c){ return pow(c, vec3(2.2)); }
`;

// drifting cloud shadows (big soft patches sliding over the land on sunny days): one read of a small map painted each
// frame (makeCloudMap) — four noise octaves in every ground pixel used to cost ~1.9 ms a frame
export const CLOUD_SPAN = 1600, CLOUD_N = 256; // metres covered around the camera; map resolution (6.25 m texels)
const SHADE_PARS = /* glsl */`
uniform vec2 uOrigin; uniform float uCloudSh; uniform sampler2D uCloudTex; uniform vec2 uCloudOrg;
float cloudShadow(vec2 xz){ return texture(uCloudTex, (xz - uCloudOrg) * ${(1 / CLOUD_SPAN).toFixed(8)} + 0.5).r * uCloudSh; }`;
const SHADE_APPLY = /* glsl */`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), cloudShadow(vWP.xz));`;
// the same cloud shadows evaluated per vertex (props, foliage, buildings, the car: dense meshes, 300 m-scale patterns)
const CLOUD_V = /* glsl */`
uniform sampler2D uNoiseTex, uCloudTex; uniform vec2 uOrigin, uCloudOrg; uniform float uCloudSh, uTime;
varying float vCloud;
float vnoiseV(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
float cloudShadowV(vec2 xz){ return textureLod(uCloudTex, (xz - uCloudOrg) * ${(1 / CLOUD_SPAN).toFixed(8)} + 0.5, 0.0).r * uCloudSh; }`;
const SHADE_APPLY_V = /* glsl */`
outgoingLight *= mix(vec3(1.0), vec3(0.66, 0.71, 0.84), vCloud);`;
// inside a tunnel: no sun or sky, just sodium lamps every 6 m (and the car's own headlights)
const TUNNEL_PARS = /* glsl */`
uniform vec3 uTunA, uTunB, uCarPos, uCarFwd; uniform float uTunR, uHead;
float tunnelMask(vec3 wp, out float along){
  vec3 ab = uTunB - uTunA; float L2 = dot(ab, ab); along = 0.0;
  if (L2 < 1.0) return 0.0;
  float t = dot(wp - uTunA, ab) / L2, L = sqrt(L2); along = t * L;
  vec3 c = uTunA + ab * clamp(t, 0.0, 1.0);
  float r = length(wp.xz - c.xz);
  float inside = (1.0 - smoothstep(uTunR - 0.5, uTunR + 0.3, r)) * step(c.y - 1.5, wp.y) * step(wp.y, c.y + 7.2);
  return inside * smoothstep(0.0, 3.5 / L, t) * smoothstep(0.0, 3.5 / L, 1.0 - t);
}`;
const TUNNEL_APPLY = /* glsl */`
{ float tAlong; float tm = tunnelMask(vWP, tAlong);
  if (tm > 0.001) {
    float band = 0.55 + 0.45 * cos(6.2832 * (tAlong - 3.0) / 6.0);
    vec3 hv = vWP - uCarPos; float hd = length(hv);
    float head = uHead * smoothstep(0.88, 0.97, dot(hv / max(hd, 0.001), uCarFwd)) / (1.0 + hd * hd * 0.014) * step(2.6, hd);
    vec3 lit = diffuseColor.rgb * (vec3(1.0, 0.54, 0.18) * (0.15 + 0.3 * band) + vec3(1.0, 0.95, 0.86) * head * 0.45) + reflectedLight.indirectDiffuse * 0.06 + totalEmissiveRadiance;
    outgoingLight = mix(outgoingLight, lit, tm);
  } }`;
/** Shadow casting for the props: overhead wires (flagged aoD = 1/255 by GB.wire) are left out. Real thin wires barely
 *  cast a visible shadow a few metres away (the sun's disc blurs it out), while a 6–8 cm shadow texel turned theirs into
 *  dotted lines across walls and the road. */
export const PROP_DEPTH = new THREE.MeshDepthMaterial();
PROP_DEPTH.onBeforeCompile = sh => {
  sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nattribute float aoD;')
    .replace('#include <project_vertex>', '#include <project_vertex>\nif (abs(aoD * 255.0 - 1.0) < 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);');
};
PROP_DEPTH.customProgramCacheKey = () => 'propdepth';

/** The cloud-shadow map: CLOUD_SPAN metres around the camera at CLOUD_N², repainted each frame (the clouds drift) with
 *  the four-octave pattern every shader used to evaluate itself. Centred on whole texels in absolute coordinates, so it
 *  doesn't swim as the camera moves or when the world re-centres. */
export function makeCloudMap() {
  const rt = new THREE.WebGLRenderTarget(CLOUD_N, CLOUD_N, { format: THREE.RedFormat, type: THREE.UnsignedByteType, depthBuffer: false,
    minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, generateMipmaps: false });
  const mat = new THREE.ShaderMaterial({
    uniforms: { uCenter: { value: new THREE.Vector2() }, uOrigin: U.uOrigin, uTime: U.uTime, uNoiseTex: U.uNoiseTex },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
    fragmentShader: /* glsl */`
      uniform vec2 uCenter, uOrigin; uniform float uTime; uniform sampler2D uNoiseTex; varying vec2 vUv;
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 w = f*f*(3.0-2.0*f); return textureLod(uNoiseTex, (i + w + 0.5) / 256.0, 0.0).r; }
      void main(){
        vec2 p = (uCenter + (vUv - 0.5) * ${CLOUD_SPAN.toFixed(1)} + uOrigin) * 0.0028 + vec2(uTime * 0.011, uTime * 0.0045);
        float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a * vn(p); p = p * 2.03 + 17.1; a *= 0.5; }
        gl_FragColor = vec4(smoothstep(0.47, 0.58, s));
      }`,
    depthTest: false, depthWrite: false,
  });
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat), cam = new THREE.Camera(); quad.frustumCulled = false;
  U.uCloudTex.value = rt.texture; U.uCloudTex.rt = rt; // (rt kept for debugging)
  const tex = CLOUD_SPAN / CLOUD_N;
  return {
    update(renderer, x, z, ox, oz) {
      const cx = Math.round((x + ox) / tex) * tex - ox, cz = Math.round((z + oz) / tex) * tex - oz;
      mat.uniforms.uCenter.value.set(cx, cz); U.uCloudOrg.value.set(cx, cz);
      const prev = renderer.getRenderTarget(); renderer.setRenderTarget(rt); renderer.render(quad, cam); renderer.setRenderTarget(prev);
    },
  };
}

/** adds vWP (world position), shared uniforms and the cloud-shadow term to a built-in material */
function worldShade(sh, extraPars = '', extraApply = '', vertexCloud = true) {
  sh.uniforms.uOrigin = U.uOrigin; sh.uniforms.uCloudSh = U.uCloudSh; sh.uniforms.uTime = U.uTime; sh.uniforms.uNoiseTex = U.uNoiseTex;
  sh.uniforms.uCloudTex = U.uCloudTex; sh.uniforms.uCloudOrg = U.uCloudOrg;
  for (const k of ['uTunA', 'uTunB', 'uTunR', 'uCarPos', 'uCarFwd', 'uHead']) sh.uniforms[k] = U[k];
  sh.vertexShader = sh.vertexShader
    .replace('#include <common>', '#include <common>\nvarying vec3 vWP;' + (vertexCloud ? CLOUD_V : ''))
    .replace('#include <begin_vertex>', '#include <begin_vertex>\nvWP = (modelMatrix * vec4(position, 1.0)).xyz;' + (vertexCloud ? '\nvCloud = cloudShadowV(vWP.xz);' : ''));
  sh.fragmentShader = sh.fragmentShader
    .replace('#include <common>', `#include <common>\nuniform float uTime;\nvarying vec3 vWP;${vertexCloud ? '\nvarying float vCloud;' : ''}\n${GLSL_NOISE}${SHADE_PARS}${TUNNEL_PARS}${extraPars}`)
    .replace('#include <opaque_fragment>', `${vertexCloud ? SHADE_APPLY_V : SHADE_APPLY}${extraApply}${TUNNEL_APPLY}\n#include <opaque_fragment>`);
}

const GROUND = /* glsl */`
// an anti-aliased line of half-width hw (world units) at d = 0, given d's screen-space footprint fw; fades out once it is
// thinner than a pixel
float crackLine(float d, float hw, float fw){ fw = max(fw, 1e-4); return clamp((hw - abs(d)) / fw + 0.5, 0.0, 1.0) * min(1.0, 2.0 * hw / fw); }
#ifdef Z_SAKURA
// fallen cherry petals (花びら): a scatter of little pink ovals, one chance in each 15 cm cell (dens: that chance), each
// turned its own way. Anti-aliased: once a cell is under ~3 pixels they fade to their average, a faint pink
const vec3 PETAL = vec3(0.96, 0.66, 0.76);
float petalsAt(vec2 p, float dens){
  vec2 q = p * 6.5, id = floor(q), f = fract(q) - 0.5;
  float h = hash12(id), fw = fwidth(q.x) + fwidth(q.y);
  vec2 d = f - (vec2(fract(h * 37.1), fract(h * 91.7)) - 0.5) * 0.5;
  d.x += d.y * (fract(h * 13.3) - 0.5) * 2.4;                       // (a shear turns each petal its own way)
  float pet = (1.0 - smoothstep(0.17 - fw * 0.5, 0.17 + fw * 0.5, length(d * vec2(1.0, 1.7)))) * step(h, dens);
  return mix(pet, dens * 0.05, clamp(fw * 1.5 - 0.5, 0.0, 1.0));
}
#endif
vec3 roadCol(float s, float u, float rw){
  float a = abs(u); vec2 p = vec2(s, u);
  vec3 c = L(vec3(0.58, 0.57, 0.57));
  c *= 0.90 + 0.14*fbm2(p*0.45) + 0.10*(hash12(floor(p*22.0)) - 0.5);
  float d1 = (abs(u + 1.6) - 0.75) / 0.22, d2 = (abs(u - 1.6) - 0.75) / 0.22; // (pow() of a negative base is NaN on many mobile GPUs)
  float tr = exp(-d1 * d1) + exp(-d2 * d2);
  c *= 1.0 - 0.08*tr;
  vec2 pc = vec2(s/9.0, (u + rw)/2.3); vec2 pf = fract(pc);
  if (hash12(floor(pc) + 3.7) > 0.88 && pf.x > 0.12 && pf.x < 0.82 && pf.y > 0.1 && pf.y < 0.9) c *= 0.85;
  // sealed cracks (クラックシール): thin tar lines — short ones across a lane every few metres, the odd long one along a
  // wheel track — ~3.6 cm wide in world space and anti-aliased, so they thin out with distance (they used to be the 0.5
  // contour of a noise field: round loops, thickest right in front of the camera). Only in some stretches of road; the
  // rest skips the maths (derivatives are taken first, outside the branch).
  float crk = 0.0, fS = fwidth(s), fU = fwidth(u);
  if (vnoise(p * 0.05 + 4.0) > 0.4) {
    float ci = floor(s / 6.0), s0 = (ci + 0.15 + 0.7 * hash12(vec2(ci, 3.1))) * 6.0;
    float uc = (hash12(vec2(ci, 5.3)) * 2.0 - 1.0) * rw * 0.6, hw = rw * (0.25 + 0.55 * hash12(vec2(ci, 7.9)));
    float dT = s - s0 - 0.35 * (vnoiseL(vec2(u * 0.9, ci * 1.3)) - 0.5) - 0.03 * sin(u * 11.0 + ci * 1.7);
    crk += step(0.5, hash12(vec2(ci, 1.7))) * step(abs(u - uc), hw) * crackLine(dT, 0.018, fS + 0.35 * fU);
    float cj = floor(s / 27.0), u0 = (hash12(vec2(cj, 13.1)) * 2.0 - 1.0) * rw * 0.75;
    float sa = (cj + 0.1 + 0.4 * hash12(vec2(cj, 17.7))) * 27.0, sb = sa + 6.0 + 14.0 * hash12(vec2(cj, 19.3));
    float dL = u - u0 - 0.25 * (vnoiseL(vec2(s * 0.15, cj * 1.7)) - 0.5) - 0.025 * sin(s * 1.9 + cj * 2.3);
    crk += step(0.65, hash12(vec2(cj, 11.3))) * step(sa, s) * step(s, sb) * crackLine(dL, 0.018, fU + 0.1 * fS);
  }
  c *= 1.0 - 0.32 * clamp(crk, 0.0, 1.0);
  float city = vZW.x, paint = 0.0, mtn = clamp(1.0 - dot(vZW, vec4(1.0)) - vZS, 0.0, 1.0);
#ifdef Z_CITY
  c *= mix(vec3(1.0), vec3(0.70, 0.68, 0.80), city); // the shopping street's asphalt: darker, a violet grey, as in the city painting
#endif
  paint += step(abs(a - (rw - 0.28)), 0.07);
  paint += (1.0 - step(0.5, mtn)) * step(a, 0.07) * step(fract(s/10.0), 0.55); // (the dashed centre line: in the city too, as in its painting)
  float cs = mod(s, 150.0);
#ifdef Z_CITY
  // (only at the signalised crossings, every 4th opening: chunks.js bigX. The alleys between have no markings)
  if (city > 0.5 && mod(floor((s + 36.0) / 150.0), 4.0) < 0.5) {
    if (cs < 4.0 && a < rw - 0.45) paint += step(0.5, fract(u/0.9 + 0.25));
    if (cs > 147.2 && cs < 147.65 && u < -0.1 && u > -rw + 0.4) paint += 1.0;
    vec2 dm = vec2((cs - 118.0)/3.2, (u + 1.55)/0.62); float dd = abs(dm.x) + abs(dm.y);
    if (dd < 1.0 && dd > 0.82) paint += 1.0;
  }
#endif
  paint = clamp(paint, 0.0, 1.0) * (0.8 + 0.2*vnoise(p*6.0));
  c = mix(c, L(vec3(0.96, 0.96, 0.93)), paint);
#ifdef Z_SAKURA
  c = mix(c, PETAL, petalsAt(p, mix(0.02, 0.3, smoothstep(rw - 0.7, rw - 0.1, a))) * vZW.y); // (gathered along the kerb)
#endif
#ifdef Z_SNOW
  if (vZS > 0.01) {
    vec3 packed = L(vec3(0.84, 0.86, 0.91)) * (0.92 + 0.1 * fbm2(p * 0.6));
    float trk = clamp(exp(-d1 * d1 * 1.4) + exp(-d2 * d2 * 1.4), 0.0, 1.0) * (0.75 + 0.25 * vnoise(p * vec2(0.3, 4.0)));
    c = mix(c, mix(packed, L(vec3(0.42, 0.43, 0.47)) * (0.9 + 0.15 * vnoise(p * 3.0)), trk * 0.85), vZS);
  }
#endif
#ifdef Z_MTN
  if (mtn > 0.01) {
    float yl = step(0.5, mtn) * step(a, 0.075) * (0.85 + 0.15*vnoise(p*6.0));           // はみ出し禁止: solid yellow centre line
    c = mix(c, L(vec3(0.95, 0.68, 0.12)), yl);
    // fallen leaves: little scattered leaf shapes, thickest along the edges
    vec2 q = p * 4.5, id = floor(q), fq = fract(q) - 0.5; float hh = hash12(id + 17.0);
    float ang = hh * 6.2832; fq = mat2(cos(ang), -sin(ang), sin(ang), cos(ang)) * (fq + (vec2(hash12(id + 3.0), hash12(id + 9.0)) - 0.5) * 0.4);
    float dens = mix(0.08, 0.6, smoothstep(rw - 2.2, rw - 0.3, a)) * mtn;
    float lf = step(1.0 - dens, hash12(id + 41.0)) * (1.0 - smoothstep(0.16, 0.2, length(fq * vec2(1.0, 1.8))));
    vec3 leaf = mix(L(vec3(0.78, 0.2, 0.1)), L(vec3(0.95, 0.62, 0.15)), hh);
    c = mix(c, leaf, lf * 0.92);
  }
#endif
  return c;
}
// seen from a distance a forest is a mass of individual crowns (a Worley pattern: each crown a soft dome, darker in
// the gaps) whose colours cluster into regions — autumn: cedar, still-green, orange, red, gold; otherwise greens
vec3 forestCanopy(vec2 p, float autumn){
  vec2 q = p / 3.2, iq = floor(q), fq = fract(q);
  float best = 9.0; vec2 bid = vec2(0.0);
  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    vec2 o = vec2(float(x), float(y)), id = iq + o;
    vec2 pt = o + vec2(hash12(id), hash12(id + 7.7)) * 0.8 + 0.1 - fq;
    float d = dot(pt, pt);
    if (d < best) { best = d; bid = id; }
  }
  float region = fbm2(p * 0.025 + 13.0);
  float pick = clamp(region * 1.25 - 0.12 + (hash12(bid + 3.1) - 0.5) * 0.55, 0.0, 0.999);
  vec3 c = autumn > 0.5
    ? (pick < 0.22 ? L(vec3(0.17, 0.28, 0.19)) : pick < 0.36 ? L(vec3(0.3, 0.42, 0.22)) : pick < 0.58 ? L(vec3(0.82, 0.44, 0.16)) : pick < 0.8 ? L(vec3(0.72, 0.22, 0.12)) : L(vec3(0.84, 0.64, 0.22)))
    : (pick < 0.3 ? L(vec3(0.14, 0.27, 0.17)) : pick < 0.55 ? L(vec3(0.24, 0.4, 0.2)) : pick < 0.8 ? L(vec3(0.36, 0.5, 0.24)) : L(vec3(0.44, 0.52, 0.26)));
  float dome = 1.0 - smoothstep(0.0, 0.62, best);
  vec2 cpt = bid + vec2(hash12(bid), hash12(bid + 7.7)) * 0.8 + 0.1 - q;                 // a soft lit side on every crown
  float lit = 1.0 - smoothstep(0.0, 0.32, dot(cpt - vec2(0.16, 0.18), cpt - vec2(0.16, 0.18)));
  return c * (0.55 + 0.5 * dome + 0.22 * lit) * (0.9 + 0.15 * vnoise(p * 1.7));
}
vec3 mountainGround(float s, float u, float rw){
  vec2 p = vec2(s, u); float a = abs(u);
  vec3 floorC = mix(L(vec3(0.44, 0.34, 0.2)), L(vec3(0.66, 0.4, 0.18)), fbm2(p * 0.07)) * (0.85 + 0.2 * vnoise(p * 1.8));
  floorC = mix(floorC, L(vec3(0.34, 0.42, 0.22)), 0.38 * smoothstep(0.4, 0.7, fbm2(p * 0.03 + 3.0)));
  if (u > 0.0) {
    if (a < rw + 0.5) return L(vec3(0.55, 0.53, 0.5)) * (0.9 + 0.1 * vnoise(p * 3.0));
    if (a < rw + 1.05) return L(vec3(0.66, 0.65, 0.62)) * (0.72 + 0.16 * vnoise(p * 2.0));   // concrete gutter
    // 法面: a concrete lattice on the steep cut, blending into the wooded slope above it (smoothly, by steepness)
    vec2 g = fract(vec2(s / 2.6, (a - rw - 1.0) * 1.414 / 2.6));
    float beam = max(step(g.x, 0.11), step(g.y, 0.11));
    vec3 cell = mix(L(vec3(0.56, 0.58, 0.3)), L(vec3(0.74, 0.6, 0.3)), vnoise(p * 0.8)) * (0.84 + 0.22 * vnoise(p * 4.0));
    vec3 face = mix(cell, L(vec3(0.76, 0.75, 0.71)) * (0.88 + 0.12 * vnoise(p * 2.0)), beam);
    return mix(face, forestCanopy(p, 1.0), smoothstep(0.76, 0.88, vWN.y));
  }
  if (a < rw + 1.2) return L(vec3(0.5, 0.48, 0.42)) * (0.85 + 0.2 * vnoise(p * 2.0));       // shoulder
  float dw = abs(a - (rw + 75.0 + 14.0 * sin(s / 90.0)));                                    // a stream on the valley floor
  if (dw < 4.0) return mix(L(vec3(0.12, 0.36, 0.4)), uSkyHor, 0.35) * (0.85 + 0.2 * vnoise(vec2(s * 0.3 - uTime, u)));
  if (dw < 9.0) return L(vec3(0.62, 0.6, 0.56)) * (0.78 + 0.26 * hash12(floor(p * 3.0)));   // pale river stones
  if (a < rw + 3.7) return floorC;                                                           // brush right below the rail
  float meadow = smoothstep(rw + 31.0, rw + 36.0, a) * (1.0 - smoothstep(100.0, 112.0, a));  // the valley floor
  return mix(forestCanopy(p, 1.0), mix(floorC, L(vec3(0.42, 0.52, 0.25)) * (0.85 + 0.2 * vnoise(p * 0.9)), 0.55), meadow);
}
// a tunnel's ridge: concrete lattice where it was cut steeply, forest crowns elsewhere
vec3 ridgeCol(float s, float u, float autumn){
  vec2 p = vec2(s, u), g = fract(vec2(s / 2.6, abs(u) * 1.414 / 2.6));
  float beam = max(step(g.x, 0.11), step(g.y, 0.11));
  vec3 cell = mix(L(vec3(0.5, 0.56, 0.3)), L(vec3(0.66, 0.6, 0.32)), vnoise(p * 0.8)) * (0.84 + 0.22 * vnoise(p * 4.0));
  vec3 face = mix(cell, L(vec3(0.76, 0.75, 0.71)) * (0.88 + 0.12 * vnoise(p * 2.0)), beam);
  return mix(face, forestCanopy(p, autumn), smoothstep(0.76, 0.88, vWN.y));
}
// 雪国: soft, slightly blue snow; plowed banks greyer near the road; faint sparkle; fence posts and field edges peeking out
vec3 snowGround(float s, float u, float rw){
  vec2 p = vec2(s, u); float a = abs(u);
  vec3 c = mix(L(vec3(0.88, 0.91, 0.97)), L(vec3(0.97, 0.98, 1.0)), fbm2(p * 0.08)) * (0.96 + 0.06 * vnoise(p * 1.7));
  c = mix(c, L(vec3(0.74, 0.76, 0.8)), 0.4 * (1.0 - smoothstep(rw + 0.2, rw + 1.8, a)));
  c += step(0.986, hash12(floor(p * 9.0))) * 0.22;
  vec2 q = vec2(s / 30.0, (a - rw - 2.6) / 17.0); vec2 fq = fract(q);
  if (a > rw + 2.7 && a < 125.0) c *= 1.0 - 0.06 * max(step(fq.x, 0.02), step(fq.y, 0.03));   // buried paddy ridges
  return c;
}
vec3 sidewalkCol(float s, float u, float rw){
  float d = abs(u) - rw;
  vec2 t = vec2(s, d) / 0.3, f = fract(t), id = floor(t);
  vec3 base = mix(L(vec3(0.90, 0.85, 0.81)), L(vec3(0.82, 0.77, 0.73)), hash12(id));
  vec3 c = base * (1.0 - 0.2*clamp(step(f.x, 0.05) + step(f.y, 0.05), 0.0, 1.0));
  if (d > 0.45 && d < 0.75) { c = L(vec3(0.93, 0.78, 0.2)); vec2 q = fract(vec2(s, d)/0.075) - 0.5; c *= 1.0 - 0.18*(1.0 - smoothstep(0.18, 0.24, length(q))); }
#ifdef Z_SAKURA
  c = mix(c, PETAL, petalsAt(vec2(s, u), 0.09) * vZW.y);
#endif
  return c * (0.92 + 0.12*fbm2(vec2(s, u)*0.8));
}
vec3 cityGround(float s, float u, float rw){
  vec2 p = vec2(s, u);
  return mix(L(vec3(0.64, 0.63, 0.60)), L(vec3(0.55, 0.53, 0.49)), fbm2(p*0.3)) * (0.9 + 0.12*vnoise(p*4.0));
}
// grass that reads as a living field instead of a flat lawn: broad patches from lush to light green, the odd sun-dried
// patch, darker clumps a metre or two across, and blade texture up close (mip-filtered away in the distance) — five
// noise reads, as many as the old two-tone mix
vec3 grassCol(vec2 p, vec3 lush, vec3 light){
  float broad = 0.6 * vnoise(p * 0.045) + 0.4 * vnoise(p * 0.11 + 3.1);
  vec3 g = mix(lush, light, smoothstep(0.3, 0.75, broad));
  g = mix(g, L(vec3(0.68, 0.66, 0.40)), 0.25 * smoothstep(0.6, 0.85, vnoise(p * 0.02 + 7.3)));
  g *= 0.8 + 0.28 * vnoise(p * vec2(0.5, 0.7) + 1.7);
  return g * (0.9 + 0.18 * vnoise(p * vec2(2.4, 9.0) + 5.9));
}
#ifdef Z_SAKURA
// (only in the variants with the avenue: it needs petalsAt, and nothing else calls it)
vec3 sakuraGround(float s, float u, float rw){
  vec2 p = vec2(s, u);
  // (the painting's lawns are a light, warm green in the sun: (167, 193, 70) against our (117, 172, 47))
  vec3 g = grassCol(p, L(vec3(0.44, 0.64, 0.27)), L(vec3(0.74, 0.84, 0.38)));
  // a few petals on the lawn, most under the avenue's trees (the painting's lawns are a clean green: they used to be
  // splashed with pink blotches)
  return mix(g, PETAL, petalsAt(p, 0.12 * (1.0 - 0.8 * smoothstep(rw + 5.0, rw + 12.0, abs(u)))));
}
#endif
vec3 coastGround(float s, float u, float rw){
  vec2 p = vec2(s, u); float a = abs(u);
  if (u > 0.0) return grassCol(p, L(vec3(0.31, 0.60, 0.25)), L(vec3(0.52, 0.79, 0.32)));
  if (a < rw + 1.45) return L(vec3(0.73, 0.72, 0.69)) * (0.9 + 0.1*fbm2(p));
  // the sea wall: its top a warm sand-coloured concrete, as in the reference art; its face grey, dark and wet low down
  if (a < rw + 1.97) return L(vec3(0.86, 0.76, 0.6)) * (0.86 + 0.14*vnoise(p*vec2(0.4, 5.0)));
  if (a < rw + 2.08) return L(vec3(0.70, 0.70, 0.68)) * (0.82 + 0.12*vnoise(p*vec2(0.4, 5.0))) * (0.45 + 0.55 * smoothstep(0.2, 1.4, vWY));
  vec3 sand = mix(L(vec3(0.94, 0.87, 0.71)), L(vec3(0.85, 0.77, 0.62)), fbm2(p*0.2));
  return mix(sand, L(vec3(0.6, 0.55, 0.46)), 0.6*(1.0 - smoothstep(0.0, 0.9, vWY)));
}
#ifdef F_PAINT
// 草原: the painted meadow (painted.js loadFieldTexture), the country painting's grass seen from above, read once per
// pixel. It runs along the road (s) and across it (u), its strokes 1.75× longer along the road (from the chase camera
// they stand up more, like the painting's blades). Its coordinates and their screen footprint are taken at the top of
// groundAlbedo, in uniform control flow, so the mip and anisotropic filtering stay right inside the branches
uniform sampler2D uFieldTex; uniform vec2 uFieldK; uniform vec3 uFieldC; // 1 / the tile (m) across, along; tint
vec2 fUV, fDX, fDY; float fPU;
#endif
vec3 countryGround(float s, float u, float rw){
  vec2 p = vec2(s, u); float a = abs(u);
  // the verge under its bank of tall grass (the clump cards, chunks.js placeBanks): dense grass in its own shade right
  // up to the asphalt, lighter towards the field (it used to be a gravel shoulder and a ditch)
  if (a < rw + 2.3) return mix(L(vec3(0.1, 0.25, 0.08)), L(vec3(0.3, 0.54, 0.18)), smoothstep(rw + 0.9, rw + 2.3, a) * (0.55 + 0.45 * vnoise(vec2(s * 1.4, u * 12.0) + 3.1)));
#ifdef F_PAINT
  if (a < 135.0) {
    // plots 30 × 34 m in their own tones, the lighter ones yellower (the painting's far fields are bands of lime and of
    // deeper green), evened out beside the road (one even meadow there, as in the painting), and broad sunlit patches
    // over it all: a hash and one noise read (the painted meadow itself is evenly lit)
    float pu = a - (rw + 2.1), sd = u > 0.0 ? 31.0 : 0.0;
    vec2 q = vec2(s / 30.0, pu / 34.0), id = floor(q);
    float du = (q.y - id.y - 0.5) * 34.0;
    // (a plot's long sides run along the road and slant on screen: there it blends into the next plot's tone over ~1.5
    // pixels; a hard step stair-stepped)
    float hp = mix(hash12(id + sd), hash12(id + vec2(0.0, sign(du)) + sd), 0.5 - 0.5 * smoothstep(0.0, fPU, 17.0 - abs(du)));
    float tone = 0.55 * (hp - 0.5) * smoothstep(9.0, 30.0, pu) + 0.4 * (vnoise(p * 0.018 + 5.3) - 0.5);
    return textureGrad(uFieldTex, fUV, fDX, fDY).rgb * uFieldC * (1.0 + tone * vec3(1.8, 1.0, 0.2));
  }
#else
  if (a < 135.0) {
    float pu = a - (rw + 2.1);
    vec2 q = vec2(s/30.0, pu/17.0), id = floor(q), f = fract(q);
    float h = hash12(id + (u > 0.0 ? 31.0 : 0.0)), hm = id.y > 1.5 ? h : 0.3 + 0.4 * h; // (the plots beside the road: one even meadow)
    // rows of rice 33 cm apart, hills 16 cm apart along them. Anti-aliased: once a row is narrower than ~2 pixels it
    // fades to its average (the bare smoothstep used to crawl in moiré bands across the far fields as we drove)
    vec2 cg = vec2(pu / 0.33, s / 0.16), cf = fract(cg) - 0.5;
    float aa = clamp(max(fwidth(cg.x), fwidth(cg.y)) * 1.6 - 0.3, 0.0, 1.0);
    float rows = mix(smoothstep(0.30, 0.48, abs(cf.x)), 0.4, aa);
    // painted blade strokes up close (mip-filtered away in the distance), as in the reference art's meadow
    vec3 field = mix(L(vec3(0.44, 0.66, 0.29)), L(vec3(0.58, 0.77, 0.36)), hm) * (0.88 + 0.14*rows) * (0.8 + 0.42 * vnoise(vec2(s * 2.6, pu * 9.0) + 7.7));
    if (h < 0.28 && id.y > 1.5) { // (none in the first two plots beside the road: the reference art has green fields there)
      // a flooded paddy after planting (田植え後): seedlings standing in muddy water. This is the light coming up through
      // the water; MIRROR adds the sky's reflection by the Fresnel law — only ~20% looking down beside the road, a mirror
      // towards the horizon. (The water used to be painted sky-blue *and* reflect at least 40%: pale ice sheets up close)
      // each seedling hill is a small tuft a few cm across, a little off the grid and now and then missing; along the
      // row they merge into lines at a slant, the way planted rows run off towards the horizon
      vec3 vw = normalize(cameraPosition - vWP); float gz = 1.0 - vw.y; gz *= gz;
      float hc = hash12(floor(cg) + 7.7), tx = abs(cf.x + (hc - 0.5) * 0.12), ty = abs(cf.y + (fract(hc * 31.0) - 0.5) * 0.25);
      float tuft = (1.0 - smoothstep(0.05, 0.11, tx)) * (1.0 - smoothstep(0.18, 0.38, ty)) * step(0.08, fract(hc * 57.0));
      float plant = clamp(mix(tuft, 0.1, aa) * (1.0 + 3.0 * gz), 0.0, 1.0); // at a slant the seedlings hide more water
      vec3 mud = mix(L(vec3(0.47, 0.43, 0.31)), L(vec3(0.55, 0.49, 0.35)), fract(h * 7.3)); // shallow water over the mud
      field = mix(mud, L(vec3(0.50, 0.68, 0.24)) * (0.9 + 0.2 * fract(h * 13.7)), plant);
      gWater = 1.0 - plant;
    }
    else if (h > 0.86 && id.y > 1.5) field = L(vec3(0.36, 0.54, 0.25)) * (0.88 + 0.16*rows);
    float ridge = max(max(step(f.x, 0.025), step(0.975, f.x)), max(step(f.y, 0.04), step(0.96, f.y)));
    gWater *= 1.0 - ridge;
    return mix(field, L(vec3(0.48, 0.64, 0.32)), ridge) * (0.94 + 0.1*fbm2(p*0.03));
  }
#endif
  return mix(L(vec3(0.18, 0.34, 0.19)), L(vec3(0.30, 0.46, 0.24)), fbm2(p*0.04));
}
vec3 trackBed(float ds, float u){
  vec2 p = vec2(ds, u);
  vec3 g = mix(L(vec3(0.50, 0.48, 0.45)), L(vec3(0.68, 0.65, 0.60)), hash12(floor(p * 14.0))) * (0.85 + 0.2 * vnoise(p * 2.0));
  float ad = abs(ds), t = abs(ad - 2.0);
  if (t < 1.25) g = mix(g, L(vec3(0.72, 0.71, 0.68)) * (0.9 + 0.1 * vnoise(p * 8.0)), step(fract(u / 0.62), 0.3));
  if (abs(t - 0.53) < 0.14) g *= 0.8;
  return mix(g, L(vec3(0.42, 0.54, 0.28)) * (0.9 + 0.15 * vnoise(p * 1.3)), 0.75 * smoothstep(4.3, 5.6, ad));
}
vec3 crossingPanel(float ds, float u){
  vec2 p = vec2(ds, u);
  vec3 c = L(vec3(0.34, 0.34, 0.36)) * (0.9 + 0.12 * vnoise(p * 3.0));
  c *= 1.0 - 0.3 * step(fract(u), 0.025);
  float t = abs(abs(ds) - 2.0);
  if ((t > 0.9 && t < 1.25) || abs(ds) > 3.05) c = mix(c, L(vec3(0.6, 0.59, 0.57)), 0.7);
  return c;
}
vec3 sideStreet(float ds, float u){
  vec2 p = vec2(ds, u);
  vec3 c = L(vec3(0.6, 0.59, 0.58)) * (0.9 + 0.14 * fbm2(p * 0.45) + 0.1 * (hash12(floor(p * 22.0)) - 0.5));
  float paint = step(abs(abs(ds) - 2.62), 0.06) * (0.8 + 0.2 * vnoise(p * 6.0));
  return mix(c, L(vec3(0.95, 0.95, 0.92)), paint);
}
vec3 riverBankCol(float s, float u){
  vec2 p = vec2(s, u);
  vec3 g = mix(L(vec3(0.33, 0.58, 0.26)), L(vec3(0.51, 0.73, 0.32)), fbm2(p * 0.12)) * (0.88 + 0.16 * vnoise(p * 2.1));
  float fl = smoothstep(0.78, 0.84, vnoise(p * 4.3));            // little yellow and white wildflowers
  return mix(g, mix(L(vec3(0.98, 0.86, 0.3)), L(vec3(0.97, 0.97, 0.92)), step(0.5, vnoise(p * 1.7))), fl * 0.8);
}
vec3 groundAlbedo(){
  float s = vSU.x, u = vSU.y, rw = vRK.x, kind = vRK.y;
#ifdef F_PAINT
  fUV = vec2(u, s) * uFieldK; fDX = dFdx(fUV); fDY = dFdy(fUV); fPU = max(1.5 * (abs(fDX.x) + abs(fDY.x)) / uFieldK.x, 0.05); // (fPU: ~1.5 pixels across, in m)
#endif
  if (kind > 0.5 && kind < 1.5) return roadCol(s, u, rw);
  if (kind > 1.5 && kind < 2.5) return sidewalkCol(s, u, rw);
  if (kind > 2.5 && kind < 3.5) return L(vec3(0.80, 0.80, 0.78)) * (0.9 + 0.12*fbm2(vec2(s, u)*2.0));
#ifdef K_XING
  if (kind > 4.5 && kind < 5.5) return trackBed(s, u);
  if (kind > 5.5 && kind < 6.5) return crossingPanel(s, u);
#endif
#ifdef Z_CITY
  if (kind > 9.5) return sideStreet(s, u);
#endif
#ifdef K_RIVER
  if (kind > 8.5) return L(vec3(0.78, 0.72, 0.6)) * (0.86 + 0.18 * vnoise(vec2(s, u) * 3.0));   // levee-top path
#endif
  if (kind > 6.5) return L(vec3(0.95, 0.95, 0.92)) * (0.82 + 0.18 * vnoise(vec2(s, u) * 6.0));
  vec3 c = vec3(0.0);
#ifdef Z_CITY
  if (vZW.x > 0.004) c += vZW.x * cityGround(s, u, rw);
#endif
#ifdef Z_SAKURA
  if (vZW.y > 0.004) c += vZW.y * sakuraGround(s, u, rw);
#endif
#ifdef Z_COAST
  if (vZW.z > 0.004) c += vZW.z * coastGround(s, u, rw);
#endif
#ifdef Z_COUNTRY
  if (vZW.w > 0.004) c += vZW.w * countryGround(s, u, rw);
#endif
  float wMtn = clamp(1.0 - dot(vZW, vec4(1.0)) - vZS, 0.0, 1.0);
#ifdef Z_MTN
  if (wMtn > 0.004) c += wMtn * mountainGround(s, u, rw);
#endif
#ifdef Z_SNOW
  if (vZS > 0.004) { // snow arrives in patches (a linear blend would turn red leaves pink)
    float n = fbm2(vec2(s, u) * 0.09 + 31.0), cover = smoothstep(n - 0.07, n + 0.07, vZS * 1.25 - 0.12);
    c = mix(c / max(1.0 - vZS, 0.001), snowGround(s, u, rw), vZS > 0.996 ? 1.0 : cover);
  }
#endif
  float rbw = max(vRV, 0.0), rdg = max(-vRV, 0.0);               // + river bank, − a tunnel's ridge
  gWater *= vZW.w * (1.0 - rbw) * (1.0 - rdg);
#ifdef K_RIVER
  c = mix(c, riverBankCol(s, u), rbw);
#endif
#ifdef K_RIDGE
  c = mix(c, ridgeCol(s, u, wMtn), rdg);
#endif
  return c * (0.92 + 0.16*fbm2(vec2(s, u)*0.015));
}
`;

// flooded paddies mirror the sky: gradient + soft cloud patches + sun glint, rippled by the wind
const MIRROR = /* glsl */`
#if defined(Z_COUNTRY) && !defined(F_PAINT)
if (gWater > 0.01) {
  vec3 V = normalize(vWP - cameraPosition);
  vec3 R = reflect(V, vec3(0.0, 1.0, 0.0));
  vec2 rip = vec2(vnoise(vWP.xz * 0.9 + uTime * 0.7), vnoise(vWP.zx * 0.9 - uTime * 0.6)) - 0.5;
  R = normalize(R + vec3(rip.x, 0.0, rip.y) * 0.05);
  float hgt = clamp(R.y, 0.0, 1.0);
  vec3 sky = mix(uSkyHor, uSkyZen, pow(hgt, 0.55));
  float cl = smoothstep(0.5, 0.78, fbm2(R.xz / (R.y + 0.12) * 1.1 + 7.0));
  sky = mix(sky, mix(uSkyHor, vec3(1.0), 0.55) * (1.0 - 0.6 * uNight), cl * 0.55);
  sky += uSunCol * pow(max(dot(R, uSunDir), 0.0), 260.0) * 3.0 * (1.0 - uNight);
  float fi = 1.0 - clamp(-V.y, 0.0, 1.0), fi2 = fi * fi, fr = 0.02 + 0.98 * fi2 * fi2 * fi; // Fresnel (Schlick, water)
  outgoingLight = mix(outgoingLight, sky, clamp(gWater * fr, 0.0, 0.95));
}
#endif`;

// wet ground: darker asphalt, a sky-coloured sheen (stronger at grazing angles), puddles with rain rings. Rain wets every
// hard surface (uWet); the cherry avenue's road is wet in any weather (uSakWet, by the zone's weight), as in the sakura
// painting: a dark mirror of the pink crowns and the sky, without the puddles and rings of rain
const WET = /* glsl */`
float isRoad = step(0.5, vRK.y) * step(vRK.y, 1.5);
#ifdef Z_SAKURA
float wetS = uSakWet * vZW.y * isRoad; // (only the road: the rest of the avenue skips all this when it isn't raining)
#else
const float wetS = 0.0;
#endif
if (uWet > 0.01 || wetS > 0.01) {
  float kind = vRK.y;
  float hard = ((kind > 0.5 && kind < 7.5) || kind > 9.5) ? 1.0 : 0.0;
  float fr = pow(1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0), 4.0);
  float puddle = 0.0, ring = 0.0;
  if (uWet > 0.01) {
    puddle = smoothstep(0.6, 0.72, fbm2(vSU * vec2(0.22, 0.35) + 3.7)) * isRoad;
    vec2 rc = vSU * 1.6, fp = fract(rc) - 0.5; float ph = fract(uTime * 0.85 + hash12(floor(rc)));
    ring = (1.0 - smoothstep(0.0, 0.045, abs(length(fp) - ph * 0.48))) * (1.0 - ph) * puddle;
  }
  vec3 refl = mix(uSkyHor, uSkyZen, 0.35) * (0.75 - 0.4 * uNight);
  // (the avenue: a darker asphalt and a stronger mirror than rain gives, even looking down at the road near the car)
  float k = max(uWet * hard * clamp(0.05 + fr * 0.55 + puddle * 0.6, 0.0, 0.9), wetS * clamp(0.04 + fr * 0.75, 0.0, 0.9));
  if (uReflOn > 0.5 && k > 0.08) { // the lights and the street mirror in the wet road (skipped where it reflects little):
    vec2 suv = gl_FragCoord.xy / uReflRes;   // sample last frame's light above the horizon, where the reflected ray's scenery
    float my = uHorizon + (uHorizon - suv.y) * uReflK, st = mix(0.03, 0.012, puddle); // sits (uReflK corrects for the camera
    vec3 r = textureLod(uReflTex, vec2(suv.x, my), 0.0).rgb * 0.45 + textureLod(uReflTex, vec2(suv.x, my + st), 0.0).rgb * 0.33 // height), stretched
      + textureLod(uReflTex, vec2(suv.x, my + 2.2 * st), 0.0).rgb * 0.22;                       // into vertical streaks like rough wet asphalt
    // (the avenue's mirror keeps a third of the sky's colour in it: the painting's wet road is a blue-grey with pink in it,
    // not a mirror of the crowns)
    float skyMix = wetS > uWet * hard ? 0.33 : 0.0;
    refl = mix(refl, mix(r, refl, skyMix), smoothstep(1.0, 0.9, my) * smoothstep(0.08, 0.14, k)); // (off the top of the screen: the sky colour as before)
  }
  outgoingLight = mix(outgoingLight * (1.0 - max(0.38 * uWet * hard, 0.3 * wetS)), refl, k) + ring * 0.1 * uWet * (refl + 0.05);
  outgoingLight *= 1.0 - 0.12 * uWet * (1.0 - hard);
}`;

// zones → shader defines. Each chunk's ground uses a variant compiled with only the zones (and features) it contains:
// one uber-shader with every zone's code ran ~4× slower even when the branches were skipped.
const ZDEF = { city: 'Z_CITY', sakura: 'Z_SAKURA', coast: 'Z_COAST', country: 'Z_COUNTRY', mountain: 'Z_MTN', snow: 'Z_SNOW' };
/** The painted meadow's texture (painted.js loadFieldTexture), once it has loaded: set it before the world is built, and
 *  the country's ground variants take it (F_PAINT); without it they keep the procedural paddies. */
export const FIELD = {
  tex: null,
  uFieldK: { value: new THREE.Vector2(1 / 12, 1 / 21) },   // 1 / the painted tile's size (m) across and along the road
  uFieldC: { value: new THREE.Vector3(1, 1, 1) },          // its tint (main.js: lime on a bright day, deeper otherwise)
  uFieldM: { value: new THREE.Vector3(0.16, 0.32, 0.05) }, // its average linear colour (the 3D blades take it)
};
export function groundDefines(zones) {
  const d = {};
  for (const z of zones) d[ZDEF[z]] = '';
  if (zones.includes('city') || zones.includes('country')) d.K_XING = '';
  if (zones.includes('country') || zones.includes('sakura')) d.K_RIVER = '';
  if (zones.includes('mountain') || zones.includes('coast')) d.K_RIDGE = '';
  if (FIELD.tex && zones.includes('country')) d.F_PAINT = '';
  return d;
}
const GROUND_VARIANTS = new Map();
export function groundMaterialFor(zones) {
  const key = [...new Set(zones)].sort().join('+');
  let m = GROUND_VARIANTS.get(key);
  if (!m) { m = groundMaterial(groundDefines(key.split('+')), key); GROUND_VARIANTS.set(key, m); }
  return m;
}
export const groundVariants = () => [...GROUND_VARIANTS.values()];
export function groundMaterial(defines = groundDefines(Object.keys(ZDEF)), key = 'all') {
  const m = new THREE.MeshToonMaterial({ color: 0xffffff, gradientMap: GRAD });
  m.defines = defines;
  const paint = defines.F_PAINT !== undefined;
  m.onBeforeCompile = sh => {
    sh.uniforms.uSkyHor = U.uSkyHor; sh.uniforms.uSkyZen = U.uSkyZen; sh.uniforms.uWet = U.uWet; sh.uniforms.uSakWet = U.uSakWet; sh.uniforms.uNight = U.uNight; sh.uniforms.uSunDir = U.uSunDir; sh.uniforms.uSunCol = U.uSunCol;
    for (const k of ['uReflTex', 'uReflOn', 'uReflRes', 'uHorizon', 'uReflK']) sh.uniforms[k] = U[k];
    if (paint) { sh.uniforms.uFieldTex = { value: FIELD.tex }; sh.uniforms.uFieldK = FIELD.uFieldK; sh.uniforms.uFieldC = FIELD.uFieldC; }
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk; attribute float rv; attribute float zs;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vRV = rv; vZS = zs; vWY = (modelMatrix * vec4(position, 1.0)).y; vWN = normalize(mat3(modelMatrix) * objectNormal);`);
    worldShade(sh, `
uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uWet, uSakWet, uNight;
uniform sampler2D uReflTex; uniform vec2 uReflRes; uniform float uReflOn, uHorizon, uReflK;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;
float gWater = 0.0;
${GROUND}`, WET + MIRROR, false);
    sh.fragmentShader = sh.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`);
  };
  m.customProgramCacheKey = () => 'ground-v19-' + key + (paint ? '-fp' : '');
  return m;
}

/** vertex-coloured toon material with a little painterly world-space noise */
function painterly(m, scale, amt, key, pre = null) {
  m.onBeforeCompile = sh => {
    if (pre) pre(sh);
    worldShade(sh);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <color_fragment>', `#include <color_fragment>
diffuseColor.rgb *= ${(1 - amt / 2).toFixed(3)} + ${amt.toFixed(3)} * vnoise(vWP.xz * ${scale.toFixed(2)} + vWP.y * ${(scale * 0.7).toFixed(2)});`);
  };
  m.customProgramCacheKey = () => key;
  return m;
}

// leaves and grass glow when a low sun shines through them towards us — tinted by their own colour, strongest at a
// canopy's rim, where the light passes through the fewest leaves. Worked out per vertex (a leaf card's corners): canopies
// are many alpha-tested layers deep, and per pixel it cost ~1.5 ms looking into the sun. Per vertex, measured in-page:
// ~0.1–0.5 ms while the sun is low ahead, ~0.2 ms otherwise (this shader is sensitive to any change)
function backlit(sh) { // (after worldShade: it rides in the cloud-shadow varying, vCloud → vCloudB.x, vBack → .y)
  for (const k of ['uSunDir', 'uSunCol', 'uBacklit']) sh.uniforms[k] = U[k];
  sh.vertexShader = sh.vertexShader
    .replace('varying float vCloud;', 'varying vec2 vCloudB;\n#define vCloud vCloudB.x\n#define vBack vCloudB.y')
    .replace('#include <common>', '#include <common>\nuniform vec3 uSunDir; uniform float uBacklit;')
    .replace('#include <fog_vertex>', `#include <fog_vertex>
{ vec3 bV = normalize(-mvPosition.xyz), bS = normalize((viewMatrix * vec4(uSunDir, 0.0)).xyz);
  float bl = max(-dot(bV, bS), 0.0); bl *= bl; bl *= bl;
  vBack = bl * (0.35 + 0.65 * (1.0 - abs(dot(normalize(transformedNormal), bV)))) * uBacklit; }`);
  sh.fragmentShader = sh.fragmentShader
    .replace('varying float vCloud;', 'varying vec2 vCloudB;\n#define vCloud vCloudB.x\n#define vBack vCloudB.y')
    .replace('#include <common>', '#include <common>\nuniform vec3 uSunCol;')
    .replace('#include <opaque_fragment>', 'outgoingLight += diffuseColor.rgb * uSunCol * vBack;\n#include <opaque_fragment>');
}
// home windows switch on one by one at dusk (off again at dawn): worked out per vertex, so a pixel pays one multiply
function windowLights(sh) {
  sh.uniforms.uLightsOn = U.uLightsOn;
  sh.vertexShader = sh.vertexShader
    .replace('#include <common>', '#include <common>\nattribute float aLit; uniform float uLightsOn; varying float vOn;')
    // aLit: 0 always on; 6/255 a shop's interior, warm by day too; 12/255 a neon sign, bright by day too (the shopping
    // street glows in daylight, as in the reference art); 24…255 a home window switching on at its own moment at dusk
    .replace('#include <begin_vertex>', '#include <begin_vertex>\nvOn = aLit < 0.002 ? 1.0 : aLit < 0.035 ? mix(3.0, 1.0, uLightsOn) : aLit < 0.08 ? mix(16.0, 1.25, uLightsOn) : clamp((uLightsOn - aLit) * 12.0, 0.0, 1.0);');
  sh.fragmentShader = sh.fragmentShader
    .replace('#include <common>', '#include <common>\nvarying float vOn;')
    .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance *= vOn;');
}
/** Contact shading: toward the ground, at the base of walls, poles, trunks and fences, ambient light fades (and a little of
 *  the sun) — from the per-vertex `aoD` byte the geometry builder writes (255 at the ground … 0 from 2.55 m up; absent →
 *  0 → none). Only on surfaces that face sideways, so plinths and steps don't turn into dark slabs. */
function contactAO(sh) {
  sh.vertexShader = sh.vertexShader
    .replace('#include <common>', '#include <common>\nattribute float aoD; varying float vAoD;')
    .replace('#include <begin_vertex>', '#include <begin_vertex>\nvAoD = aoD;');
  sh.fragmentShader = sh.fragmentShader
    .replace('#include <common>', '#include <common>\nvarying float vAoD;')
    .replace('#include <aomap_fragment>', `#include <aomap_fragment>
{ float aoH = (1.0 - vAoD) * 2.55, ao = mix(0.42, 1.0, smoothstep(0.0, 1.0, aoH));
  float up = dot(normal, normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz));
  ao = mix(1.0, ao, 1.0 - smoothstep(0.5, 0.85, abs(up)));
  reflectedLight.indirectDiffuse *= ao; reflectedLight.directDiffuse *= mix(1.0, ao, 0.5); }`);
}

/** give any built-in material the drifting cloud shadows (car, train …) so everything darkens together */
// (one cache key for all of them: the patch is identical, so materials with the same settings share a program)
export function withCloudShadow(m) { m.onBeforeCompile = sh => worldShade(sh); m.customProgramCacheKey = () => 'cs'; return m; }

/** A glossy clear-coat for the car: the sky reflects in the roof and upper panels, the darker ground below the reflected
 *  horizon in the lower ones — that sharp line is what makes paint read as paint — plus a sun glint where it's lit.
 *  Per-vertex gloss in the colour's alpha when the mesh has one (paint 1, hubs .8, trim .35, tyres ~0). */
const GLOSS_PARS = /* glsl */`uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol; uniform float uNight;`;
const glossApply = (amt, f0, more = '') => /* glsl */`
{ float gm = ${amt.toFixed(3)};
  #ifdef USE_COLOR_ALPHA
  gm *= vColor.a;
  #endif
  vec3 nV = normalize(normal), vV = normalize(vViewPosition);
  vec3 Rw = reflect(-vV, nV) * mat3(viewMatrix); // the reflected ray in world space
  vec3 env = mix(uSkyHor * vec3(0.30, 0.32, 0.30), mix(uSkyHor, uSkyZen, smoothstep(0.0, 0.7, Rw.y)), smoothstep(-0.03, 0.03, Rw.y)) * (1.0 - 0.75 * uNight);
  float fr = ${f0.toFixed(3)} + ${(1 - f0).toFixed(3)} * pow(1.0 - clamp(dot(nV, vV), 0.0, 1.0), 5.0);
  outgoingLight = mix(outgoingLight, env, clamp(fr * gm, 0.0, 1.0));
  float lit = clamp(dot(reflectedLight.directDiffuse, vec3(0.3, 0.59, 0.11)) * 3.0, 0.0, 1.0);
  vec3 H = normalize(normalize((viewMatrix * vec4(uSunDir, 0.0)).xyz) + vV);
  outgoingLight += uSunCol * pow(max(dot(nV, H), 0.0), 90.0) * 1.6 * gm * lit;
  ${more}
}`;
/** extra (optional): { pars, apply, uniforms } — more lighting inside the gloss block (it can use nV, vV, gm) */
export function withGloss(m, amt, f0 = 0.06, key = 'gloss', extra = null) {
  m.onBeforeCompile = sh => {
    for (const k of ['uSkyHor', 'uSkyZen', 'uSunDir', 'uSunCol', 'uNight']) sh.uniforms[k] = U[k];
    if (extra) Object.assign(sh.uniforms, extra.uniforms);
    worldShade(sh, GLOSS_PARS + (extra ? extra.pars : ''), glossApply(amt, f0, extra ? extra.apply : ''));
  };
  m.customProgramCacheKey = () => key + amt;
  return m;
}

/** 草原: the meadow beside the country road (grass.js) — blades of grass made entirely in the vertex shader, one
 *  instance each, with no buffers but a 5- or 3-vertex blade: each instance hashes its cell on a grid fixed to the road
 *  (s, u), so blades stay put as the camera moves, and is placed with the road samples `uG` (x, y, z, heading every
 *  GDS m from uGP.x). Blades turn their face to the camera, lean, sway in the breeze and are shaded like the ground under
 *  them (rounded normals pointing up), dark at the root and sunlit at the tip, in the colour of the field plot they stand
 *  in (countryGround). `ring` holds a sub-ring's uniforms (grass.js): its rows and its columns on each side. */
export const GRASS_N = 48;
export function grassMaterial(ring, shared) {
  const m = new THREE.MeshToonMaterial({ color: 0xffffff, gradientMap: GRAD_SOFT });
  const paint = !!FIELD.tex; // (the painted meadow: blades in its colours)
  m.onBeforeCompile = sh => {
    Object.assign(sh.uniforms, shared, ring);
    for (const k of ['uOrigin', 'uCloudSh', 'uTime', 'uNoiseTex', 'uCloudTex', 'uCloudOrg', 'uWind']) sh.uniforms[k] = U[k];
    if (paint) { sh.uniforms.uFieldC = FIELD.uFieldC; sh.uniforms.uFieldM = FIELD.uFieldM; }
    // (no shadow-map code at all: the meadow beyond the banks is hardly ever in a shadow, and three.js would still work
    // out two shadow-map coordinates for every vertex of every blade)
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#undef USE_SHADOWMAP
#include <common>
${CLOUD_V}
uniform vec4 uG[${GRASS_N}], uGM[${GRASS_N / 4}], uGP, uGQ, uRing, uRingC, uRingD; uniform float uWind;${paint ? '\nuniform vec3 uFieldC, uFieldM;' : ''}
varying vec3 vBladeCol;
float gHash(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec3 gL(vec3 c){ return pow(c, vec3(2.2)); }`)
      .replace('#include <beginnormal_vertex>', /* glsl */`
// which blade: rows × left columns, then rows × right columns of the sub-ring's grid (uRing: first row, rows, cell (m),
// coarse; uRingC: columns left, right, the band's width in m). The coarse rings' blades are the even cells of the fine
// grid, so blades keep their place as they pass from one ring to the next
int gid = gl_InstanceID, nL = int(uRing.y) * int(uRingC.x);
float side = gid < nL ? -1.0 : 1.0; int cols = gid < nL ? int(uRingC.x) : int(uRingC.y); gid = gid < nL ? gid : gid - nL;
int row = gid / cols;
float coarse = uRing.w, cf = uRing.z / (1.0 + coarse);
vec2 cell = vec2(uRing.x + float(row), float(gid - row * cols)) * (1.0 + coarse);
vec2 hc = cell + vec2(0.0, side > 0.0 ? 7919.0 : 0.0);
float h1 = gHash(hc), h2 = gHash(hc + 17.31), h5 = gHash(hc + 63.7);
float gs = (cell.x + h1) * cf, pu = (cell.y + h2) * cf, gd = gs - uGP.w;     // along the road; out from the field's edge
// LOD: the fine rings keep every blade up to L1 (uRingD.x), all but the even cells fading out over the last 6 m; the
// coarse rings carry the even ones from L1 and thin them out gradually by L2. Only where the road samples say there is
// meadow, as densely as they say
bool even = mod(cell.x, 2.0) < 0.5 && mod(cell.y, 2.0) < 0.5;
float keep = coarse > 0.5 ? step(uRingD.x, gd) * (1.0 - smoothstep(uRingD.x + 2.0, uRingD.y, gd))
                          : step(gd, uRingD.x) * (even ? 1.0 : 1.0 - smoothstep(uRingD.x - 6.0, uRingD.x, gd));
float fi = (gs - uGP.x) * uGP.y; int i0 = clamp(int(floor(fi)), 0, ${GRASS_N - 2}); float ft = clamp(fi - float(i0), 0.0, 1.0);
float gm = uGM[i0 >> 2][i0 & 3], gsd = mod(gm, 4.0);                         // its sides, and its density (gm / 4: 0…15)
float gu = side * (uGP.z + 2.6 + pu);
keep *= (side > 0.0 ? step(1.5, gsd) : mod(gsd, 2.0)) * floor(gm * 0.25) * (1.0 / 15.0)
      * step(0.0, gd) * step(abs(gu - uGQ.x), uGQ.y * gd + uGQ.z) // (and within the view)
      * (1.0 - smoothstep(0.55 * uRingC.z, uRingC.z, pu)); // (thinning out towards the band's outer edge: no line where it ends)
bool gCull = h5 >= keep;
vec3 gPos = vec3(0.0); vec3 objectNormal = vec3(0.0, 1.0, 0.0); vBladeCol = vec3(0.0); vCloud = 0.0;
if (!gCull) {
  float h3 = gHash(hc + 41.17), h4 = gHash(hc + 7.93), h6 = gHash(hc + 23.9);
  vec4 A = uG[i0], B = uG[i0 + 1];
  vec3 P = mix(A.xyz, B.xyz, ft); float hd = mix(A.w, B.w, ft);
  vec3 base = vec3(P.x - cos(hd) * gu, P.y - 0.45, P.z + sin(hd) * gu);
  // patches of taller and shorter grass (and the field's broad light and dark), from one noise read; the coarse rings'
  // blades are wider, so the fewer blades still read
  float nz = vnoiseV(vec2(gs, gu) * 0.35 + 3.0);
  float H = (0.24 + 0.28 * h3) * (0.7 + 0.6 * nz) * smoothstep(0.0, 0.15, keep - h5);    // (blades grow in at a ring's edge)
  float W = (0.03 + 0.02 * h4) * (1.0 + 0.7 * coarse) * (1.0 + gd * 0.012);
  vec3 toC = cameraPosition - base; vec3 wdir = normalize(vec3(toC.z, 0.0, -toC.x)); // the blade's face to the camera (front-facing: wound anticlockwise as seen)
  float a = h6 * 6.2832; vec2 lean = vec2(cos(a), sin(a)) * (0.15 + 0.3 * h1) * H;
  float sw = sin(uTime * 1.7 + base.x * 0.23 + base.z * 0.19) * 0.6 + sin(uTime * 2.9 + base.x * 0.61 - base.z * 0.37) * 0.4;
  lean += vec2(0.7, 0.5) * sw * 0.21 * uWind * H;
  float t = position.y, sd = position.x;
  gPos = base + vec3(lean.x * t * t, H * t * (1.0 - 0.12 * t * t), lean.y * t * t) + wdir * (W * (1.0 - t) * sd * 0.5);
  objectNormal = normalize(vec3(wdir.x * sd * 0.35, 1.0, wdir.z * sd * 0.35)); // shaded like the ground, a little rounded
  // one blade in ~70 of the fine rings is a wildflower instead (白詰草 white clover, 金鳳花 yellow buttercups): its five
  // vertices laid out as a small round head facing the camera, held just above the grass
  bool flower = coarse < 0.5 && h4 < 0.015;
  if (flower) {
    float r = 0.035 + 0.015 * h3, fx = sd * (t > 0.75 ? 0.0 : t > 0.25 ? 1.0 : 0.55), fy = t > 0.75 ? 1.0 : t > 0.25 ? 0.15 : -0.85;
    gPos = base + vec3(lean.x, H * 0.95, lean.y) + wdir * (fx * r) + vec3(0.0, fy * r, 0.0);
    objectNormal = vec3(0.0, 1.0, 0.0);
  }
  // the colour of the field plot it stands in (countryGround: the same hash of the same plot), dark at the root, sunlit
  // at the tip${paint ? `. The painted meadow: its painting's average colour in the plot's tone and the broad sunlit
  // patches, a little warmer and darker than the ground (the painting's blades are a deeper, yellower green than its fields)
  float gsw = mod(gs, ${S_WRAP.toFixed(1)}), gpu = abs(gu) - uGP.z - 2.1;
  float tone = 0.55 * (gHash(floor(vec2(gsw / 30.0, gpu / 34.0)) + (side > 0.0 ? 31.0 : 0.0)) - 0.5) * smoothstep(9.0, 30.0, gpu)
             + 0.4 * (vnoiseV(vec2(gsw, gu) * 0.018 + 5.3) - 0.5);
  vec3 plot = uFieldM * uFieldC * vec3(0.86, 0.87, 0.48) * (1.0 + tone * vec3(1.8, 1.0, 0.2)) * (0.9 + 0.2 * nz);` : `
  vec2 pid = floor(vec2(mod(gs, ${S_WRAP.toFixed(1)}) / 30.0, (abs(gu) - uGP.z - 2.1) / 17.0));
  vec3 plot = mix(gL(vec3(0.44, 0.66, 0.29)), gL(vec3(0.58, 0.77, 0.36)), 0.3 + 0.4 * gHash(pid + (side > 0.0 ? 31.0 : 0.0))) * (0.9 + 0.2 * nz);`}
  vBladeCol = flower ? (h6 < 0.75 ? vec3(0.92, 0.92, 0.86) : vec3(1.0, 0.68, 0.05)) : mix(plot * 0.5, plot * vec3(1.18, 1.16, 0.98), t) * (0.86 + 0.28 * h4);
  vCloud = cloudShadowV(base.xz);
}`)
      .replace('#include <begin_vertex>', 'vec3 transformed = gPos;')
      .replace('#include <project_vertex>', '#include <project_vertex>\nif (gCull) gl_Position = vec4(2.0, 2.0, 2.0, 1.0); // (culled: outside the clip volume)');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#undef USE_SHADOWMAP\n#include <common>\nvarying vec3 vBladeCol; varying float vCloud;')
      .replace('#include <color_fragment>', '#include <color_fragment>\ndiffuseColor.rgb *= vBladeCol;')
      .replace('#include <opaque_fragment>', `${SHADE_APPLY_V}\n#include <opaque_fragment>`);
  };
  m.customProgramCacheKey = () => (paint ? 'grass-v5-fp' : 'grass-v5');
  return m;
}

export function makeMaterials(atlasTex, folTex) {
  const M = {};
  M.ground = groundMaterial();
  M.color = painterly(new THREE.MeshToonMaterial({ vertexColors: true, gradientMap: GRAD }), 1.6, 0.1, 'color-v3', contactAO);
  M.atlas = new THREE.MeshToonMaterial({ vertexColors: true, gradientMap: GRAD, map: atlasTex.map, emissiveMap: atlasTex.emissive, emissive: 0xffffff, emissiveIntensity: 0.1, alphaTest: 0.5 });
  M.atlas.onBeforeCompile = sh => { contactAO(sh); windowLights(sh); worldShade(sh); };
  M.atlas.customProgramCacheKey = () => 'atlas-v5';
  M.foliage = painterly(new THREE.MeshToonMaterial({ vertexColors: true, gradientMap: GRAD_SOFT }), 2.6, 0.24, 'foliage-v2');
  M.lamp = new THREE.MeshBasicMaterial({ color: 0xf0eee6 });
  M.sig = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.15, 1.7, 1.1) }); // a lit 青 signal lamp
  M.sodium = new THREE.MeshBasicMaterial({ color: new THREE.Color(5.0, 2.3, 0.65) }); // tunnel lamps
  // painted road markings: alpha-BLENDED (alpha-test would erase thin strokes once the texture is minified at grazing angles)
  M.decal = new THREE.MeshToonMaterial({ vertexColors: true, gradientMap: GRAD, map: atlasTex.map, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 });
  M.decal.onBeforeCompile = sh => worldShade(sh);
  M.decal.customProgramCacheKey = () => 'decal-v1';
  if (folTex) {
    M.leaf = new THREE.MeshToonMaterial({ map: folTex, vertexColors: true, gradientMap: GRAD_SOFT, alphaTest: 0.42, side: THREE.DoubleSide });
    M.leaf.onBeforeCompile = sh => { // keep the spherical canopy normals on back faces too
      sh.fragmentShader = sh.fragmentShader.replace('#include <normal_fragment_begin>', THREE.ShaderChunk.normal_fragment_begin.replace('gl_FrontFacing ? 1.0 : - 1.0', '1.0'));
      worldShade(sh); backlit(sh);
      sh.uniforms.uTuftV = U.uTuftV; sh.uniforms.uWind = U.uWind;
      // a gentle breeze: whole crowns drift a few centimetres, grass tufts bend from the root
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nuniform float uWind; uniform vec4 uTuftV;') // (uTime comes with the vertex cloud shadows)
        .replace('#include <begin_vertex>', `#include <begin_vertex>
{ vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = sin(uTime * 1.2 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.3 + wq.x * 0.83 - wq.z * 0.47) * 0.35;
  float tuft = step(uv.y, uTuftV.y); // (the two bottom rows: grass tufts, and the country's verge banks below them)
  float bend = uv.y > uTuftV.w ? (uv.y - uTuftV.x) / (uTuftV.y - uTuftV.x) : uv.y / uTuftV.z;
  float wgt = mix(0.03, 0.09 * clamp(bend, 0.0, 1.0), tuft) * uWind;
  transformed.x += sw * wgt; transformed.z += sw * wgt * 0.7; }`);
      // cards seen edge-on smear into streaks: fade them out (raises the alpha-test threshold as they turn away)
      sh.fragmentShader = sh.fragmentShader.replace('#include <alphatest_fragment>', `
{ vec3 gN = normalize(cross(dFdx(vViewPosition), dFdy(vViewPosition)));
  diffuseColor.a *= smoothstep(0.07, 0.3, abs(dot(gN, normalize(vViewPosition)))); }
#include <alphatest_fragment>`);
    };
    M.leaf.customProgramCacheKey = () => 'leaf-v5';
  }
  M.wire = new THREE.MeshBasicMaterial({ color: 0x23242c });
  // soft light pools under street lamps at night (additive)
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d'), gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.4, 'rgba(255,255,255,0.45)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c);
  M.pool = new THREE.MeshBasicMaterial({ map: t, color: 0xffc77a, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  M.glowTex = t;
  return M;
}

// ------------------------------------------------------------------ painted-cluster crowns (ghibli.js, props.js treeGhibli)
// A painterly ramp over N·L: a deep shade, a quick soft terminator, then a broad sunlit cap (the paintings' crowns read as
// lit caps over dark undersides). Linear filtering keeps the terminator soft at a distance.
function gradGhibli(lo, hi, floor) { // (N·L where the shade ends / the lit cap begins; the shade's share of the sun)
  const n = 64, v = new Uint8Array(n);
  for (let i = 0; i < n; i++) { const x = ((i + 0.5) / n) * 2 - 1, t = Math.min(1, Math.max(0, (x - lo) / (hi - lo))), s = t * t * (3 - 2 * t); v[i] = Math.round(255 * (floor + (1 - floor) * s)); }
  const t = new THREE.DataTexture(v, n, 1, THREE.RedFormat); t.minFilter = t.magFilter = THREE.LinearFilter; t.generateMipmaps = false; t.needsUpdate = true;
  return t;
}
export const GRAD_GHIBLI = gradGhibli(-0.05, 0.5, 0.05);
// cherry blossom: thin petals let the light through, so the sun reaches well round into a crown's shade (a wrapped,
// softer terminator, and a little sun even in the deepest shade): the crowns glow pink from below, as in the painting
const GRAD_BLOSSOM = gradGhibli(-0.5, 0.45, 0.12);
// The clusters face the camera: each corner is spread along the view's right / up vectors (chunk meshes only translate, so
// object space is world space up to an offset), with a slow sideways sway of the whole cluster. The shadow pass runs the
// same code with the sun's view, so the clusters face the sun and the crown casts a lobed shadow.
function billboard(sh, depth) {
  sh.uniforms.uTime = U.uTime; sh.uniforms.uWind = U.uWind;
  sh.vertexShader = sh.vertexShader
    .replace('#include <common>', '#include <common>\nattribute vec2 aOff; uniform float uWind;' + (depth ? ' uniform float uTime;' : ''))
    .replace('#include <begin_vertex>', `#include <begin_vertex>
{ vec3 bbR = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]), bbU = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = (sin(uTime * 1.1 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.1 + wq.x * 0.83 - wq.z * 0.47) * 0.35) * 0.04 * uWind;
  transformed += bbR * (aOff.x + sw) + bbU * aOff.y; }`);
  // the crown's core (marked by a straight-down normal) casts no shadow: its sun-facing twin would cut it in two
  if (depth) sh.vertexShader = sh.vertexShader.replace('#include <project_vertex>', '#include <project_vertex>\nif (normal.y < -0.97) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);');
}
// Cherry blossom (the atlas's second row): B is a key into the sakura painting's colours, not a brightness. Twigs (~0.06)
// are a dark bark brown, the gaps between flowers (~0.3) a deep rose, and the flowers run from a rose pink to the pale,
// nearly white pink of the petals in full sun (1). Shade and light then come from each flower's own normal
const bl = (r, g, b) => { const c = new THREE.Color().setRGB(r / 255, g / 255, b / 255, THREE.SRGBColorSpace); return `vec3(${c.r.toFixed(4)}, ${c.g.toFixed(4)}, ${c.b.toFixed(4)})`; };
const BLOSSOM_RAMP = `diffuseColor.rgb *= mix(${bl(62, 38, 34)}, mix(${bl(205, 105, 150)}, ${bl(255, 232, 242)}, smoothstep(0.3, 1.0, gTx.b)), smoothstep(0.1, 0.26, gTx.b));`;
/** The crowns' material (`tex`: the cluster atlas, ghibli.js). Every cluster lights its own painted leaves: its normal is
 *  the crown's (from the crown's centre, per vertex) mixed with the cluster's own from the atlas, so each lobe of the
 *  crown gets its lit cap and its shade under the real sun. Returns { mat, depth } (depth: the shadow pass's twin). */
export function makeGhibliLeaf(tex, { blossom = false } = {}) {
  // base leaf green (sRGB), a little yellower than the sunlit grass, as in the paintings; the atlas's albedo (~0.8 on
  // average, darker in the crevices) and the per-cluster vertex colour (crown occlusion, per-tree tint) multiply it.
  // Blossom: the atlas's B is a key into the sakura painting's own colours (BLOSSOM_RAMP), so the material is white
  const m = new THREE.MeshToonMaterial({ map: tex, vertexColors: true, color: blossom ? 0xffffff : new THREE.Color().setRGB(0.68, 0.85, 0.46, THREE.SRGBColorSpace), gradientMap: blossom ? GRAD_BLOSSOM : GRAD_GHIBLI, alphaTest: 0.5, side: THREE.FrontSide });
  m.shadowSide = THREE.DoubleSide; // (three flips FrontSide to BackSide for shadows; the depth twins face the sun)
  m.onBeforeCompile = sh => {
    worldShade(sh); backlit(sh);
    billboard(sh, false); // (uTime comes with the vertex cloud shadows)
    sh.uniforms.uGhShade = blossom ? U.uBlShade : U.uGhShade; // (blossom: its own shade, a bright rose-magenta)
    // the sun's shadow is looked up from the cluster's sunward surface (~1.1 × its half-width out), so a cluster never
    // shadows itself (its sun-facing depth twin cuts through its middle) while the lobes above and toward the sun still
    // shade the ones below. The crown's core (marked by a straight-down normal) looks it up 2.5 m deeper into the crown:
    // it is in shade wherever any of the crown's clusters stands between it and the sun
    sh.vertexShader = sh.vertexShader.replace('#include <shadowmap_vertex>', `#if defined( USE_SHADOWMAP )
worldPosition.xyz += uSunDir * mix(-2.5, length(aOff) * 1.11, step(-0.97, objectNormal.y));
#endif
#include <shadowmap_vertex>`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform vec3 uGhShade;')
      .replace('#include <map_fragment>', `
vec4 gTx = texture2D(map, vMapUv);
vec2 gN2 = gTx.rg * 2.0 - 1.0;
vec3 gTexN = vec3(gN2, sqrt(max(0.0, 1.0 - dot(gN2, gN2))));
${blossom ? BLOSSOM_RAMP : 'diffuseColor.rgb *= gTx.b;'}
diffuseColor.a *= gTx.a;`)
      // the cluster's own normal (in card = view space) mixed with the crown's
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
normal = normalize(mix(normal, gTexN, 0.72));`)
      // the crown's shade is lit by the sky alone, through a shade tint (a deep teal on a clear day), not by the warm ground
      // bounce the open surfaces get from the hemisphere light: it turned shaded leaves olive
      .replace('#include <aomap_fragment>', `#if NUM_HEMI_LIGHTS > 0
reflectedLight.indirectDiffuse = hemisphereLights[0].skyColor * BRDF_Lambert(diffuseColor.rgb * uGhShade) * mix(0.7, 1.0, dot(normal, hemisphereLights[0].direction) * 0.5 + 0.5);
#endif
#include <aomap_fragment>`);
  };
  m.customProgramCacheKey = () => (blossom ? 'gblossom-v1' : 'gleaf-v1');
  const d = new THREE.MeshDepthMaterial();
  d.onBeforeCompile = sh => billboard(sh, true);
  d.customProgramCacheKey = () => 'gleaf-depth-v1';
  return { mat: m, depth: d };
}
