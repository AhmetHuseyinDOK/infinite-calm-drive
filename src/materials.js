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
// rotated by per-pixel noise — cheaper, and stable: the rotated noise made shadow edges shimmer as we moved.
// The paintings' shadows have clean, soft edges; one tap showed the map's texels as stair-steps wherever a texel spans
// pixels (the world map's 6 cm texels near the camera: the avenue's crown shadows on the road, the guardrail's at golden
// hour; the car's own map's 1 cm ones as a jagged pixel edge). On the ground (materials defining SH_SOFT) the shadow is
// filtered there by a tent over 3 × 3 texels from four taps (Castaño's optimised PCF, as in The Witness and MJP's shadows
// sample: each tap's weight and sub-texel offset follow the point's place in its texel, so the edge is a smooth ramp ~2
// texels wide, not a staircase); further away, where a texel is under ~a pixel, one tap, the tent's taps drawn in towards
// the point so the two meet without a seam. How far is the light's: its shadow.radius is 1 / the view depth (m) to which
// the tent is whole, one tap from twice that (0: everywhere, the car's own map; main.js sets the sun's by the map's texels
// on screen). Everything else keeps one tap (each tap counts on the crowns, many alpha-tested layers deep).
// (The moving car has its own fine map, below.) Call before the first compile.
const SHADOW_SRC = THREE.ShaderChunk.shadowmap_pars_fragment;
export function setShadowTaps() {
  const body = /* glsl */`#ifdef SH_SOFT
float k = clamp( 2.0 - shDepth * shadowRadius, 0.0, 1.0 );
#else
float k = 0.0;
#endif
if ( k > 0.0 ) { // (s: the point's place in its texel, from the nearest texel corner; the taps' offsets in texels, × k)
	vec2 s = fract( shadowCoord.xy * shadowMapSize + 0.5 ), w0 = 3.0 - 2.0 * s, w1 = 4.0 - w0, kt = k * texelSize;
	vec2 p0 = shadowCoord.xy + ( ( 2.0 - s ) / w0 - s - 1.0 ) * kt, p1 = shadowCoord.xy + ( s / w1 + 1.0 - s ) * kt;
	shadow = ( w0.x * w0.y * texture( shadowMap, vec3( p0, shadowCoord.z ) ) + w1.x * w0.y * texture( shadowMap, vec3( p1.x, p0.y, shadowCoord.z ) )
		+ w0.x * w1.y * texture( shadowMap, vec3( p0.x, p1.y, shadowCoord.z ) ) + w1.x * w1.y * texture( shadowMap, vec3( p1, shadowCoord.z ) ) ) * 0.0625;
} else shadow = texture( shadowMap, vec3( shadowCoord.xy, shadowCoord.z ) );`;
  THREE.ShaderChunk.shadowmap_pars_fragment = SHADOW_SRC.replace(
    /float phi = interleavedGradientNoise\( gl_FragCoord\.xy \) \* PI2;\s*shadow = \([\s\S]*?\) \* 0\.2;/, body)
    .replace('float getShadow( sampler2DShadow', 'float shDepth = 0.0; // (the view depth, set by the lights chunk: how far the tent reaches)\nfloat getShadow( sampler2DShadow');
}
setShadowTaps();
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
	#ifdef CAR_KEY
	// the car is lit by the painter's sun (car.js, main.js): the sun swung round to ahead of the car, so its back is in the
	// shade as in every painting; the shadows it casts and receives stay the real sun's
	vec3 sunV = directLight.direction; directLight.direction = uCarKey;
	#endif
	#ifdef VOL_KEY
	// the scenery's painted volumes (the broadleaf crowns, the tetrapods) are lit from the paintings' side (VOL_KEY names the
	// material's key: main.js uLeafKey / uVolKey, the sun swung round towards the camera), their shadows the real sun's where
	// it reaches them
	vec3 sunV = directLight.direction; directLight.direction = VOL_KEY;
	#endif
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	if ( directLight.visible && receiveShadow ) {
		#ifdef SHADOWMAP_TYPE_PCF
		shDepth = - geometryPosition.z; // (the soft tent's reach: see getShadow)
		#endif
		#ifdef GRAZE_FADE
		// walls the sun only grazes keep the toon ramp: there the map can't resolve their own depth (acne stripes that crawl as the sun moves)
		#ifdef VOL_KEY
		float gz = smoothstep( GRAZE_LO, GRAZE_HI, dot( geometryNormal, sunV ) ); // (and faces turned from the real sun: the key's ramp alone)
		#else
		float gz = smoothstep( GRAZE_LO, GRAZE_HI, dot( geometryNormal, directLight.direction ) );
		#endif
		#else
		float gz = 1.0;
		#endif
		// (faces turned from the sun, which the fade gives the ramp alone, skip the lookup: its result was thrown away)
		float sh = 1.0;
		if ( gz > 0.0 ) { directionalLightShadow = directionalLightShadows[ 0 ];
			sh = mix( 1.0, getShadow( directionalShadowMap[ 0 ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ 0 ] ), gz ); }
		#if NUM_DIR_LIGHT_SHADOWS > 1
		// surfaces turning away from the sun keep just the toon ramp: the sharp map would cut their wrapped light
		// into jagged bands (the car shadowing its own back)
		#if defined( CAR_KEY ) || defined( VOL_KEY )
		float nl = smoothstep( 0.0, 0.2, dot( geometryNormal, sunV ) ); // (the car's own shadows: where the real sun reaches)
		#else
		float nl = smoothstep( 0.0, 0.2, dot( geometryNormal, directLight.direction ) );
		#endif
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
  // (step 30) the night as painted: how bright, once the lights are on, the shops' interiors, the neon, the home windows and the white
  // shop boards glow (× the old; main.js: 1 by day, at golden hour and at sunset): the repaints' street is calm, its neon the brightest
  uLitN: { value: new THREE.Vector4(1, 1, 1, 1) }, uBoardD: { value: 1 }, // (…and those boards' paint: 1 by day)
  // …and the painted houses' walls (their rows of the painted atlas: v under uHouseV), moonlit grey round their warm windows as the
  // repaints have them, where ours stood black: a fill light on them (linear irradiance / π, added as light; 0 by day, at golden hour
  // and at sunset: materials.js windowLights)
  uHouseV: { value: -1 }, uHouseFill: { value: new THREE.Vector3() },
  uRmOn: { value: 1 },                         // (step 31) the rooms behind the shop windows (makeAtlasRooms; test switch st.rooms)
  uBacklit: { value: 0 },                      // how strongly a low sun shines through leaves and grass (0 … 1.6)
  uCloudSh: { value: 0 },                      // strength of drifting cloud shadows
  uOrigin: { value: new THREE.Vector2() },     // world-origin offset, so world-space patterns survive rebasing
  uSunDir: { value: new THREE.Vector3(0, 1, 0) },
  uSunCol: { value: new THREE.Color(1, 1, 1) },
  uTuftV: { value: new THREE.Vector4(0.167, 0.333, 0.164, 0.165) }, // foliage atlas v: the tuft row's bottom and top, the verge banks' top, a split between them
  uBankT: { value: new THREE.Vector3(1, 1, 1) }, // the country's verge banks' grass by the time of day (M.bank; 1 on a bright day: main.js, step 28)
  uGhShade: { value: new THREE.Vector3(0.3, 0.85, 1.7) }, // the painted crowns' shade tint (makeGhibliLeaf): teal on a bright day, else neutral (main.js)
  uGhTint: { value: new THREE.Vector3(1, 1, 1) },          // …and their leaves' tint by the time of day (1 by day; main.js)
  // the tetrapods' painted tones (tetraMaterial; main.js, ungraded each frame): how much of them (a bright day), and the
  // painting's deep blue, blue-grey shade, neutral middle and warm light grey, and its foam lit and in shade
  uTpK: { value: 0 }, uTpD: { value: new THREE.Color() }, uTpS: { value: new THREE.Color() }, uTpM: { value: new THREE.Color() }, uTpL: { value: new THREE.Color() },
  uTpFL: { value: new THREE.Color() }, uTpFS: { value: new THREE.Color() },
  // the bark's painted tones (barkMaterial; main.js, ungraded each frame): how much of them (a bright day), and the cherries'
  // shade, body and lit edge, then the broadleaf trees'
  uBkK: { value: 0 }, uBkS: { value: new THREE.Color() }, uBkM: { value: new THREE.Color() }, uBkL: { value: new THREE.Color() },
  uBkS2: { value: new THREE.Color() }, uBkM2: { value: new THREE.Color() }, uBkL2: { value: new THREE.Color() },
  uBlShade: { value: new THREE.Vector3(7.5, 3, 2.3) },    // …and the cherry blossom's: a bright rose-magenta on a bright day
  // …and its flowers' rose (uBlMid.rgb, linear; BLOSSOM_RAMP, main.js by the time of day), from it to their pale petal tips
  // (uBlTip.rgb) and where on the atlas's key the tips begin (w: 1 / (1 − edge) and −edge / (1 − edge); the edge 0.3 is
  // the old ramp, higher keeps more of each flower in the rose): the painting's on a bright day. (The CPU does the sums a
  // constant ramp left to the compiler: the crowns are many layers deep, and three more operations a pixel cost ~3%)
  uBlMid: { value: new THREE.Vector4(0.6105, 0.1413, 0.3050, 1 / 0.7) }, uBlTip: { value: new THREE.Vector4(1 - 0.6105, 0.8070 - 0.1413, 0.8879 - 0.3050, -0.3 / 0.7) },
  // the coast's and the country's asphalt as painted (roadCol; main.js, by the time of day under a clear sky, 1 under grey
  // skies): its tint near the eye and from ~22 m on
  uRoadN: { value: new THREE.Vector3(1, 1, 1) }, uRoadF: { value: new THREE.Vector3(1, 1, 1) },
  uSakRT: { value: 1 }, // the cherry avenue's share of that tint (step 26; main.js st.road: 0 skips its work in the avenue's variants)
  // (step 30) the night as painted: the asphalt's and the pavements' (and kerbs') albedo by night under a clear sky (main.js; 1 by day,
  // at golden hour and at sunset): the repaints' blue-grey asphalt and grey-blue paving under the moon, where ours went indigo-black
  uNtRoad: { value: new THREE.Vector3(1, 1, 1) }, uNtWalk: { value: new THREE.Vector3(1, 1, 1) },
  uCoFill: { value: new THREE.Vector3() }, // the coast's slope: how much more light its shade takes (the painter's fill; main.js, step 27)
  uCoVerge: { value: new THREE.Vector3(1, 1, 1) }, // …and its long grass by the road: how much deeper a green (main.js, step 27)
  // Cappadocia's ground (W5, the ground shader's uchGround; main.js, by the time of day): the albedo of its sandy shoulder and plain,
  // of its dry grass, and of its pale tuff (linear)
  uUchS: { value: new THREE.Vector3(0.52, 0.43, 0.38) }, uUchG: { value: new THREE.Vector3(0.16, 0.115, 0.075) }, uUchT: { value: new THREE.Vector3(0.95, 0.84, 0.74) },
  // …and its fairy chimneys' painted tones (tuffMaterial; main.js, ungraded each frame): how much of them (a clear sky), the
  // ochre tuff's shade, middle and light, the pale tuff of their feet in the light, and the basalt cap's share of them
  uTfK: { value: 0 }, uTfS: { value: new THREE.Color() }, uTfM: { value: new THREE.Color() }, uTfL: { value: new THREE.Color() }, uTfP: { value: new THREE.Color() },
  uTfC: { value: new THREE.Vector3(0.42, 0.4, 0.42) },
  // …and Paşabağ's (W6, by vertex: its lathes' angle runs from 32π, props.js PAS_UV): its cream tuff's blue-grey shade, middle and
  // light, its pale foot, and its dark basalt caps' share of them
  uTfS2: { value: new THREE.Color() }, uTfM2: { value: new THREE.Color() }, uTfL2: { value: new THREE.Color() }, uTfP2: { value: new THREE.Color() },
  uTfC2: { value: new THREE.Vector3(0.42, 0.37, 0.37) },
  // Paşabağ's ground (W6, uchGround by its share, vZS): its gravel shoulder's, its dry grass's and its pale tuff's albedo (linear)
  uPasS: { value: new THREE.Vector3(0.3, 0.27, 0.24) }, uPasG: { value: new THREE.Vector3(0.24, 0.16, 0.07) }, uPasT: { value: new THREE.Vector3(0.9, 0.82, 0.7) },
  // …and its tall grass's row in its own texture (textures.js buildPasAtlas: v0, v1), swayed from the root by the breeze (makePasGrass)
  uPasSway: { value: new THREE.Vector2(0, 1) }, uPasGT: { value: new THREE.Vector3(1, 1, 1) }, // (…and their tint by the time of day: main.js)
  uTunA: { value: new THREE.Vector3(0, -1e4, 0) },  // the current tunnel's axis (portal to portal, at road level)
  uTunB: { value: new THREE.Vector3(0, -1e4, 0) },
  uTunR: { value: 4.6 },
  uCarPos: { value: new THREE.Vector3() }, uCarFwd: { value: new THREE.Vector3(0, 0, 1) }, uHead: { value: 0 },
  uCarKey: { value: new THREE.Vector3(0, 1, 0) }, // the car's painter's sun, in view space (main.js; CAR_KEY above)
  uVolKey: { value: new THREE.Vector3(0, 1, 0) }, // the painted volumes' key (the tetrapods), in view space (main.js; VOL_KEY above)
  uLeafKey: { value: new THREE.Vector3(0, 1, 0) }, // …and the broadleaf crowns' (further round towards the camera)
  uBlKey: { value: new THREE.Vector3(0, 1, 0) }, // …and the cherry canopy's (step 26: seen from below, it is lit as painted, not a dark ceiling)
  uCarFill: { value: new THREE.Vector3() },       // …and the painter's fill in its shade (car.js CAR_FILL; main.js, by the time of day)
  uCarDT: { value: new THREE.Vector3(1, 1, 1) },  // (step 30) …and its sunlit (moonlit) paint × this: the night repaints' pale moonlit roof (1 by day)
  uWind: { value: 1 },
  uFishT: { value: new THREE.Vector3(1, 1, 1) }, // (step 35a) the painted fishermen's colours × this, by the hour (fishers.js, main.js; 1 by day)
  uFishRim: { value: new THREE.Vector4(0, 0, 0, 0) }, // (step 35a) …and the rim of light on their edges towards a low sun beyond them: its colour (linear light), on (a)
  uTourT: { value: new THREE.Vector3(1, 1, 1) }, // (step 35f) Paşabağ's painted tourists' colours × this, by the hour (as uFishT: Cappadocia's light)
  uTourRim: { value: new THREE.Vector4(0, 0, 0, 0) }, // (step 35f) …and their rim of light
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
// the car's ramp: the paintings' terminator — no sun on a face turned from it, a narrow soft edge, flat light beyond (linear
// filtering over 64 texels: a rounded body shades without bands). GRAD_SOFT gave a face turned a quarter away half the sun
export const GRAD_CAR = (() => {
  const N = 64, v = new Uint8Array(N);
  for (let i = 0; i < N; i++) { const nl = ((i + 0.5) / N) * 2 - 1, t = Math.min(1, Math.max(0, (nl + 0.03) / 0.25)); v[i] = Math.round(255 * t * t * (3 - 2 * t)); }
  const t = new THREE.DataTexture(v, N, 1, THREE.RedFormat);
  t.minFilter = t.magFilter = THREE.LinearFilter; t.generateMipmaps = false; t.needsUpdate = true;
  return t;
})();
// (step 35c) the crossing train's ramp: as soft as the car's (linear over 64 texels: its rounded roof and nose shade without bands), but the
// sun wraps further round, as the props' ramp lets it (GRAD keeps a quarter of the sun on a face turned ~0.2 from it): the track crosses the
// road, so the side the waiting car sees is always turned a little from the sun (it stands beside the road), and under the car's ramp that
// whole side was one dark slab. Made when the train's material is (a texture's id draws random numbers: made with the module, it moved every
// seeded capture's falling petals)
let gradTrain = null;
export function trainRamp() {
  if (gradTrain) return gradTrain;
  const N = 64, v = new Uint8Array(N);
  for (let i = 0; i < N; i++) { const nl = ((i + 0.5) / N) * 2 - 1, t = Math.min(1, Math.max(0, (nl + 0.42) / 0.62)); v[i] = Math.round(255 * t * t * (3 - 2 * t)); }
  const t = new THREE.DataTexture(v, N, 1, THREE.RedFormat);
  t.minFilter = t.magFilter = THREE.LinearFilter; t.generateMipmaps = false; t.needsUpdate = true;
  return (gradTrain = t);
}

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
  // the aggregate: a fine mottled grain with pale chips and dark pits, a little longer along the road (it was square
  // 4.5 cm cells of hashed noise, a blocky mosaic up close); mip-filtered, so it fades to its mean with distance
  float ag = vnoise(p * vec2(26.0, 44.0) + 3.1);
  c *= 0.90 + 0.14*fbm2(p*0.45) + 0.12*(ag - 0.5) + 0.16*smoothstep(0.66, 0.9, ag) - 0.08*smoothstep(0.32, 0.1, ag);
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
#if defined(Z_COAST) || defined(Z_COUNTRY) || defined(Z_GAL) || defined(Z_TOWN) || defined(Z_UCH) || defined(Z_SAKURA)
  // the coast's and the country's asphalt as painted: in the sun a cool blue-grey, darkest near the eye and paler and
  // bluer with distance (uRoadN → uRoadF over 3–22 m; by the time of day under a clear sky, 1 under grey skies). It tints
  // the sunlight on it only (gRoadT, after the lights): its shade keeps the painted navy it had. (The Galata Bridge's too:
  // the concept's road is the same blue-grey; and the Turkish town's, W4, in the country's channel; and Cappadocia's, W5, in
  // the avenue's, as the bridge's; and the cherry avenue's own, step 26, under its wet sheen)
  float wR = vZW.z + vZW.w;
#if defined(Z_GAL) || defined(Z_UCH)
  wR += vZW.y;
#elif defined(Z_SAKURA)
  wR += vZW.y * uSakRT;
#endif
  if (wR > 0.004) gRoadT = mix(vec3(1.0), mix(uRoadN, uRoadF, smoothstep(3.0, 22.0, distance(vWP, cameraPosition))), wR);
#endif
  paint += step(abs(a - (rw - 0.28)), 0.07);
#ifdef Z_GAL
  // (the real Galata zone's lanes, step 35R: the lane lines between as many 3.4 m lanes as its width holds, two along Kemeraltı Caddesi,
  // three over the bridge and through Eminönü; the northbound carriageway's about its own middle: chunks.js. Every other zone's
  // programs keep their line as it was, below)
  float ca = a;
  if (vZW.y > 0.5) { float nl = max(2.0, floor(rw / 1.7 + 0.5)), lw = 2.0 * rw / nl; ca = a > rw - 0.6 ? 9.0 : abs(fract((u + rw) / lw + 0.5) - 0.5) * lw; }
  paint += (1.0 - step(0.5, mtn)) * step(ca, 0.07) * step(fract(s/10.0), 0.55);
#else
  paint += (1.0 - step(0.5, mtn)) * step(a, 0.07) * step(fract(s/10.0), 0.55); // (the dashed centre line: in the city too, as in its painting)
#endif
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
#ifdef Z_GAL
// the Galata Bridge's walkway (W3): pale grey concrete slabs, 1.2 × 0.6 m, each its own grey, a course of kerb stones along
// the road (the concept's walkway; the city's tactile strip and beige slabs are Japan's)
vec3 galWalk(float s, float u, float rw){
  float d = abs(u) - rw;
  vec2 t = vec2(s / 1.2 + 0.5 * floor(d / 0.6), d / 0.6), f = fract(t), id = floor(t);
  vec3 c = mix(L(vec3(0.71, 0.70, 0.73)), L(vec3(0.63, 0.62, 0.66)), hash12(id + 5.0));
  c *= 1.0 - 0.16 * clamp(step(f.x, 0.025) + step(f.y, 0.04), 0.0, 1.0);
  if (d < 0.24) c = L(vec3(0.8, 0.79, 0.78)) * (1.0 - 0.15 * step(fract(s / 0.9), 0.03));
  return c * (0.92 + 0.12 * fbm2(vec2(s, u) * 0.8));
}
#endif
#ifdef Z_TOWN
// the Turkish town's pavements (W4), as its concept paints them: pale grey square slabs, 40 cm, each its own grey, a course of
// kerb stones along the road and a yellow tactile strip half a metre in from it
vec3 townWalk(float s, float u, float rw){
  float d = abs(u) - rw;
  vec2 t = vec2(s, d) / 0.4, f = fract(t), id = floor(t);
  vec3 c = mix(L(vec3(0.80, 0.78, 0.75)), L(vec3(0.72, 0.70, 0.68)), hash12(id + 3.0));
  c *= 1.0 - 0.14 * clamp(step(f.x, 0.04) + step(f.y, 0.04), 0.0, 1.0);
  if (d < 0.22) c = L(vec3(0.75, 0.74, 0.72)) * (1.0 - 0.15 * step(fract(s / 0.8), 0.04));
  else if (d > 0.5 && d < 0.8) { c = L(vec3(0.93, 0.76, 0.18)); vec2 q = fract(vec2(s, d) / 0.075) - 0.5; c *= 1.0 - 0.18 * (1.0 - smoothstep(0.18, 0.24, length(q))); }
  return c * (0.93 + 0.1 * fbm2(vec2(s, u) * 0.7));
}
// …and its ground beyond them (the blocks' plots, the quay's square at the bridge's end: paving), and the quay walls' faces where
// the Galata Bridge lands (path.js townLanding): dressed stone in courses, dark and wet down by the water
vec3 townGround(float s, float u, float rw){
  vec2 p = vec2(s, u);
  if (vWN.y < 0.6) return L(vec3(0.66, 0.63, 0.58)) * (0.62 + 0.38 * smoothstep(0.0, 2.0, vWY)) * (0.88 + 0.12 * vnoise(p * vec2(0.6, 2.5))) * (1.0 - 0.12 * step(fract(vWY / 0.6), 0.06));
  return mix(L(vec3(0.70, 0.69, 0.66)), L(vec3(0.62, 0.61, 0.58)), fbm2(p * 0.3)) * (0.9 + 0.12 * vnoise(p * 4.0));
}
#endif
vec3 sidewalkCol(float s, float u, float rw){
#ifdef Z_GAL
  if (vZW.y > 0.5) return galWalk(s, u, rw);
#endif
#ifdef Z_TOWN
  if (vZW.w > 0.5) return townWalk(s, u, rw);
#endif
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
#ifdef F_PAINT
// 草原: the painted meadow (painted.js loadFieldTexture), the country painting's grass seen from above, read once per
// pixel. It runs along the road (s) and across it (u), its strokes 1.75× longer along the road (from the chase camera
// they stand up more, like the painting's blades). Its coordinates and their screen footprint are taken at the top of
// groundAlbedo, in uniform control flow, so the mip and anisotropic filtering stay right inside the branches. The coast's
// green slope and the cherry avenue's lawns take the same painting in their own paintings' colours
uniform sampler2D uFieldTex; uniform vec2 uFieldK; uniform vec3 uFieldC, uFieldCo, uFieldSa, uFieldM; // 1 / the tile (m) across, along; tints: the country's, the coast's, the avenue's; its average colour
vec2 fUV, fDX, fDY; float fPU;
// the painting at k× its size (k: a tile's length along the road, 21 m / k, must divide S_WRAP)
vec3 fieldTex(float k){ return textureGrad(uFieldTex, fUV * k, fDX * k, fDY * k).rgb; }
#endif
#ifdef Z_SAKURA
// (only in the variants with the avenue: it needs petalsAt, and nothing else calls it)
vec3 sakuraGround(float s, float u, float rw){
  vec2 p = vec2(s, u);
#ifdef F_PAINT
  // the lawns: the painted meadow's strokes at 1.75× and at 60% of their contrast (a mown lawn's finer, even grass) in
  // the sakura painting's light, warm green, a little lighter and yellower here and there (one broad noise read)
  vec3 g = mix(uFieldM, fieldTex(1.75), 0.6) * uFieldSa * (1.0 + 0.3 * (vnoise(p * 0.04 + 2.3) - 0.5) * vec3(1.4, 1.0, 0.3));
#else
  // (the painting's lawns are a light, warm green in the sun: (167, 193, 70) against our (117, 172, 47))
  vec3 g = grassCol(p, L(vec3(0.44, 0.64, 0.27)), L(vec3(0.74, 0.84, 0.38)));
#endif
  // a few petals on the lawn, most under the avenue's trees (the painting's lawns are a clean green: they used to be
  // splashed with pink blotches)
  return mix(g, PETAL, petalsAt(p, 0.12 * (1.0 - 0.8 * smoothstep(rw + 5.0, rw + 12.0, abs(u)))));
}
#endif
vec3 coastGround(float s, float u, float rw){
  vec2 p = vec2(s, u); float a = abs(u);
#ifdef F_PAINT
  if (u > 0.0) {
    // the green slope above the road: the painted meadow in the coast painting's colours, broad patches lighter and
    // yellower or a deeper green (one noise read; the folds' shade comes from the light), and along the road's edge a
    // strip of bare soil, then the verge's long grass in its own shade (its clump cards stand on it: chunks.js)
    float tone = 0.55 * (vnoise(p * 0.035 + 9.1) - 0.5);
    vec3 g = fieldTex(1.25) * uFieldCo * (1.0 + tone * vec3(1.8, 1.0, 0.2));
    g *= mix(0.5, 1.0, smoothstep(rw + 0.35, rw + 2.6, a));
#if defined(Z_COAST) && !defined(Z_BOS)
    // (step 27: the long grass by the road a deeper green than the lime slope above it, as painted, out to ~7 m from the road, by the
    // hour under a clear sky (uCoVerge: 1 under grey skies); the slope's shade takes the painter's fill: below, after the lights)
    g *= mix(uCoVerge, vec3(1.0), clamp((a - rw - 2.0) * 0.154, 0.0, 1.0));
    gSlope = clamp((a - rw - 0.3) * 0.435, 0.0, 1.0);
#endif
    return mix(L(vec3(0.42, 0.34, 0.24)) * (0.85 + 0.3 * vnoise(p * vec2(1.5, 9.0))), g, smoothstep(rw + 0.12, rw + 0.32, a));
  }
#else
  if (u > 0.0) return grassCol(p, L(vec3(0.31, 0.60, 0.25)), L(vec3(0.52, 0.79, 0.32)));
#endif
  if (a < rw + 1.45) return L(vec3(0.73, 0.72, 0.69)) * (0.9 + 0.1*fbm2(p)) * uNtWalk; // (step 30: its shoulder and the wall's top take the pavements' night tint)
  // the sea wall: its top a warm sand-coloured concrete, as in the reference art; its face grey, dark and wet low down
  if (a < rw + 1.97) return L(vec3(0.86, 0.76, 0.6)) * (0.86 + 0.14*vnoise(p*vec2(0.4, 5.0))) * uNtWalk;
  if (a < rw + 2.08) return L(vec3(0.70, 0.70, 0.68)) * (0.82 + 0.12*vnoise(p*vec2(0.4, 5.0))) * (0.45 + 0.55 * smoothstep(0.2, 1.4, vWY));
#if !defined(Z_BOS)
  // (land on the sea side, out of the water: the bay's end's headland, step 27 (path.js), and the coast's tunnel spurs: the slope's
  // grass, a bluer green the further off it is, as the painting's green headland across the water, its haze bluer than the fog's)
  if (vWY > 1.2) {
#ifdef F_PAINT
    vec3 g = fieldTex(1.25) * uFieldCo;
#else
    vec3 g = grassCol(p, L(vec3(0.31, 0.60, 0.25)), L(vec3(0.52, 0.79, 0.32)));
#endif
    return mix(g, L(vec3(0.6, 0.84, 0.82)), 0.85 * smoothstep(120.0, 420.0, distance(vWP, cameraPosition)));
  }
#endif
  vec3 sand = mix(L(vec3(0.94, 0.87, 0.71)), L(vec3(0.85, 0.77, 0.62)), fbm2(p*0.2));
  return mix(sand, L(vec3(0.6, 0.55, 0.46)), 0.6*(1.0 - smoothstep(0.0, 0.9, vWY)));
}
#ifdef Z_BOS
#ifdef F_PAINT
uniform vec3 uFieldBo; // (the Bosphorus's grass tint: its gardens and hill, by the time of day: main.js)
#endif
// the Bosphorus shore road at Arnavutköy, as its concept painting has it (drawn in the coast's channel: the two never meet).
// The strait's side: the asphalt's shoulder, then the sea wall of pale dressed stone, its top a course of long blocks and
// its face (the steep ground between the wall's top and the water) blocks in courses, darker and wet low down. The land
// side: long grass on the verge right up to the asphalt, a pavement of grey stone slabs a kerb higher, and beyond the
// gardens' railings the gardens' grass (the painted meadow in the coast's colours)
vec3 bosGround(float s, float u, float rw){
  vec2 p = vec2(s, u); float a = abs(u);
  if (u > 0.0) {
#ifdef F_PAINT
    vec3 g = fieldTex(1.25) * uFieldBo;
#else
    vec3 g = grassCol(p, L(vec3(0.31, 0.60, 0.25)), L(vec3(0.52, 0.79, 0.32)));
#endif
    if (a < rw + 1.6) return g * vec3(1.05, 0.86, 0.82) * mix(0.55, 0.92, smoothstep(rw + 0.1, rw + 1.3, a)); // (the verge: a paler, yellower green, as the concept's)
    if (a < rw + 4.6) {
      // slabs ~0.9 × 0.6 m in courses along the road, each its own grey, the joints dark; a dressed kerb along the verge
      float row = floor((a - rw - 1.6) / 0.6), q = s / 0.9 + 0.5 * mod(row, 2.0), fx = fract(q), fy = fract((a - rw - 1.6) / 0.6);
      vec3 c = mix(L(vec3(0.67, 0.65, 0.61)), L(vec3(0.58, 0.57, 0.54)), hash12(vec2(floor(q), row)));
      c *= 1.0 - 0.28 * max(step(fx, 0.035), step(fy, 0.05));
      if (a < rw + 1.85) c = L(vec3(0.82, 0.80, 0.76)) * (0.9 + 0.1 * vnoise(p * vec2(0.5, 4.0)));
      return c * (0.92 + 0.12 * fbm2(p * 0.7));
    }
    return g * (1.0 + 0.55 * (vnoise(p * 0.035 + 9.1) - 0.5) * vec3(1.8, 1.0, 0.2));
  }
  if (a < rw + 1.45) return L(vec3(0.58, 0.58, 0.6)) * (0.9 + 0.1 * fbm2(p));
  if (vWN.y > 0.6) { // the wall's top: long blocks, their joints across it
    if (a < rw + 2.08) return L(vec3(0.82, 0.79, 0.72)) * (0.88 + 0.12 * vnoise(p * vec2(0.6, 6.0))) * (1.0 - 0.3 * step(fract(s / 1.6), 0.025));
    return mix(L(vec3(0.6, 0.55, 0.46)), L(vec3(0.85, 0.77, 0.62)), smoothstep(0.0, 0.9, vWY)); // (under the water)
  }
  // the face: courses 0.45 m high, the blocks 1.1 m long, each course's joints half a block on
  float cr = floor(vWY / 0.45), q = s / 1.1 + 0.5 * cr, fy = fract(vWY / 0.45);
  vec3 c = mix(L(vec3(0.78, 0.75, 0.68)), L(vec3(0.66, 0.64, 0.60)), hash12(vec2(floor(q), cr)));
  c *= 1.0 - 0.3 * max(step(fract(q), 0.03), step(fy, 0.07));
  return c * (0.45 + 0.55 * smoothstep(0.1, 1.0, vWY));
}
#endif
#ifdef Z_GAL
// the real Galata zone (step 35R; drawn in the cherry avenue's weight channel: the two never meet). Its ground: on the bridge the
// deck's plain concrete (under its walkways' and its tram line's slabs: chunks.js), off it Karaköy's and Eminönü's grey granite
// paving at the road's level; the faces: the deck's (the edge girder's grey-blue band, under it the lower deck's arcade of piers and
// dark openings) where the deck ends (its walkways' outer edges), elsewhere the quays' dressed stone in courses, dark and wet down by
// the water; under the water, nothing to see (the sea draws over it). In the hand-over from the Bosphorus its meadow
float galRail(float d, float fw){ return crackLine(d, 0.036, fw); }
vec3 galGround(float s, float u, float rw){
  vec2 p = vec2(s, u); float a = abs(u);
  if (vWY < 0.0) return L(vec3(0.35, 0.36, 0.33));
  if (vWN.y < 0.6) {
    if (abs(u - rw - 6.0) < 0.6 || abs(u + 29.5) < 0.6) { // (the deck's)
      if (vWY > 5.05) return L(vec3(0.5, 0.55, 0.6)) * (0.88 + 0.12 * vnoise(p * vec2(0.5, 4.0))) * (1.0 - 0.25 * step(fract(s / 2.6), 0.04));
      if (vWY > 0.35) { float q = fract(s / 5.2), pier = step(q, 0.2) + step(4.6, vWY); return mix(L(vec3(0.15, 0.16, 0.19)), L(vec3(0.66, 0.64, 0.6)) * (0.85 + 0.15 * vnoise(p * 1.3)), clamp(pier, 0.0, 1.0)); }
      return L(vec3(0.28, 0.3, 0.29));
    }
    float cr = floor(vWY / 0.6), q = s / 1.3 + 0.5 * cr;
    vec3 c = mix(L(vec3(0.70, 0.67, 0.61)), L(vec3(0.60, 0.58, 0.54)), hash12(vec2(floor(q), cr))) * (1.0 - 0.25 * max(step(fract(q), 0.03), step(fract(vWY / 0.6), 0.07)));
    return c * (0.55 + 0.45 * smoothstep(0.1, 1.4, vWY));
  }
#if defined(Z_BOS) && defined(F_PAINT)
  if (vZW.z > 0.02) return fieldTex(1.25) * uFieldBo; // (the hand-over's: the Bosphorus's meadow)
#endif
  vec2 t = p / 1.1, f = fract(t);
  vec3 c = mix(L(vec3(0.71, 0.69, 0.65)), L(vec3(0.62, 0.61, 0.58)), 0.6 * hash12(floor(t) + 7.0) + 0.4 * fbm2(p * 0.3));
  return c * (1.0 - 0.13 * max(step(f.x, 0.035), step(f.y, 0.035))) * (0.92 + 0.1 * vnoise(p * 3.0));
}
// the T1's reserve (step 35R, chunks.js kind 11): u from the reserve's middle, |rw| the half spacing of its two tracks (rw < 0 off
// the bridge): on the bridge grey concrete slabs, along Kemeraltı Caddesi and through Eminönü red-brown setts, as the real ones; the
// rails' heads let in, worn bright along their tops, a groove beside each
vec3 galTramBed(float s, float u, float rw){
  float h = abs(rw); vec3 c;
  if (rw > 0.0) { vec2 t = vec2(s / 1.5, u / 1.7), f = fract(t); c = mix(L(vec3(0.58, 0.57, 0.55)), L(vec3(0.5, 0.5, 0.49)), hash12(floor(t) + 9.0)) * (1.0 - 0.14 * max(step(f.x, 0.02), step(f.y, 0.03))); }
  else { vec2 t = vec2(s / 0.24 + 0.5 * floor(u / 0.15), u / 0.15), f = fract(t); c = mix(L(vec3(0.56, 0.37, 0.31)), L(vec3(0.46, 0.31, 0.27)), hash12(floor(t) + 3.0)) * (1.0 - 0.2 * max(step(f.x, 0.07), step(f.y, 0.09))); }
  float fw = fwidth(u) + 0.3 * fwidth(s), rails = 0.0, run = 0.0;
  for (int k = 0; k < 2; k++) {
    float dc = abs(u - (k == 0 ? h : -h));
    rails += galRail(dc - 0.7175, fw); run += crackLine(dc - 0.7175 + 0.012, 0.014, fw); rails += 0.6 * crackLine(dc - 0.66, 0.02, fw);
  }
  c = mix(c, L(vec3(0.27, 0.26, 0.26)), clamp(rails, 0.0, 1.0));
  return mix(c, L(vec3(0.75, 0.73, 0.71)), clamp(run, 0.0, 1.0) * 0.8) * (0.93 + 0.1 * fbm2(vec2(s, u) * 0.8));
}
#endif
#ifdef Z_UCH
// Cappadocia (W5): the Göreme → Uçhisar road's land, as its concept painting has it (drawn in the cherry avenue's weight channel:
// the two never meet). Beside the asphalt a strip of pale pinkish sand (its shoulder), then the plain of sand under patches of dry
// golden grass, thicker away from the road (the painted meadow's strokes in straw: their lightness kept, their green gone), and
// the soft pale tuff rising out of it in rounded ridges, a peach-cream streaked a little down its slopes (vRV: path.js TUFF, its
// share of the height). The tints by the time of day (uUchS, uUchG, uUchT: main.js)
// (W6: and Paşabağ's, by its share in the snow's slot, vZS: the two never meet. Its gravel shoulder greyer than Uçhisar's sand, its
// verge thick with tall dry grass right from the gravel's edge (the clumps: chunks.js placePasabag), its tuff a paler cream: uPas…)
uniform vec3 uUchS, uUchG, uUchT, uPasS, uPasG, uPasT;
vec3 uchTuffCol(vec2 p){
  float n = vnoise(p * vec2(0.07, 0.05) + 4.1);
  // runnels down the slopes: a stretched noise along the fall line, weighted in where it is steep enough to have one (read
  // unconditionally: the noise takes screen derivatives)
  vec2 fl = vWN.xz; float st = length(fl);
  float run = vnoise(vec2(dot(vWP.xz, vec2(-fl.y, fl.x)) / max(st, 0.05) * 0.9, vWY * 0.25));
  return mix(uUchT, uPasT, vZS) * (0.92 + 0.14 * n) * (1.0 - 0.22 * smoothstep(0.15, 0.55, st) * smoothstep(0.45, 0.8, run));
}
vec3 uchGround(float s, float u, float rw){
  vec2 p = vec2(s, u); float a = abs(u), pk = vZS;
  vec3 sand = mix(uUchS, uPasS, pk) * (0.9 + 0.2 * vnoise(p * vec2(0.08, 0.12) + 3.3)) * (0.95 + 0.08 * vnoise(p * vec2(1.3, 2.1)));
  if (a < rw + 0.32) return sand * mix(0.62, 1.0, smoothstep(rw + 0.02, rw + 0.3, a)); // (the asphalt's crumbling edge)
#ifdef F_PAINT
  vec3 f = fieldTex(2.5); float fl = dot(f, vec3(0.3, 0.59, 0.11)) * 4.2;
  vec3 grass = mix(uUchG, uPasG, pk) * (0.4 + 0.75 * clamp(fl, 0.0, 1.3));
#else
  float fl = 0.75 + 0.5 * vnoise(p * vec2(2.2, 6.5) + 5.9);
  vec3 grass = mix(uUchG, uPasG, pk) * fl;
#endif
  // (the shoulder bare; the grass in patches from a metre past it, all but covering the plain further out; Paşabağ's from the gravel's
  // edge on)
  float gm = smoothstep(0.25, 0.5, vnoise(p * 0.11 + 9.1) * 0.7 + fl * 0.22 + 0.15 * smoothstep(rw + 6.0, rw + 25.0, a)) * smoothstep(rw + 1.4, rw + 2.4, a);
  gm = mix(gm, smoothstep(rw + 1.2, rw + 1.65, a), pk);
  grass *= mix(1.0, 0.55 + 0.45 * smoothstep(rw + 2.5, rw + 10.0, a), pk); // (Paşabağ's verge: the deep grass's shade between its clumps)
  vec3 c = mix(sand, grass, gm);
  return mix(c, uchTuffCol(p), smoothstep(0.05, 0.55, vRV)); // (the tuff's share of the height: vRV, path.js TUFF)
}
#endif
vec3 countryGround(float s, float u, float rw){
  vec2 p = vec2(s, u); float a = abs(u);
  // the verge under its bank of tall grass (the clump cards, chunks.js placeBanks): dense grass in its own shade right
  // up to the asphalt, lighter towards the field (it used to be a gravel shoulder and a ditch)
  // (step 28: its own shade a mid green streaked with blades, darker only in a narrow strip at the asphalt's edge, as painted:
  // between the clumps' low road ends it used to show as a near-black band)
  if (a < rw + 2.3) return mix(L(vec3(0.1, 0.25, 0.08)), L(vec3(0.27, 0.5, 0.17)), smoothstep(rw + 0.04, rw + 0.6, a) * (0.45 + 0.55 * vnoise(vec2(s * 2.2, u * 14.0) + 3.1)));
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
    return fieldTex(1.0) * uFieldC * (1.0 + tone * vec3(1.8, 1.0, 0.2));
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
  if (kind > 0.5 && kind < 1.5) return roadCol(s, u, rw) * uNtRoad;
  if (kind > 1.5 && kind < 2.5) return sidewalkCol(s, u, rw) * uNtWalk;
  if (kind > 2.5 && kind < 3.5) return L(vec3(0.80, 0.80, 0.78)) * (0.9 + 0.12*fbm2(vec2(s, u)*2.0)) * uNtWalk;
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
#ifdef Z_GAL
  if (kind > 10.5 && kind < 11.5) return galTramBed(s, u, rw) * uNtRoad; // (the real Galata zone's T1 reserve, step 35R)
#endif
  if (kind > 6.5) return L(vec3(0.95, 0.95, 0.92)) * (0.82 + 0.18 * vnoise(vec2(s, u) * 6.0));
  vec3 c = vec3(0.0);
#ifdef Z_CITY
  if (vZW.x > 0.004) c += vZW.x * cityGround(s, u, rw);
#endif
#ifdef Z_SAKURA
  if (vZW.y > 0.004) c += vZW.y * sakuraGround(s, u, rw);
#endif
#ifdef Z_GAL
  if (vZW.y > 0.004) c += vZW.y * galGround(s, u, rw);
#endif
#ifdef Z_UCH
  if (vZW.y > 0.004) c += vZW.y * uchGround(s, u, rw); // (Cappadocia, W5, in the avenue's channel: they never meet)
#endif
#ifdef Z_COAST
#ifdef Z_BOS
  if (vZW.z > 0.004) c += vZW.z * bosGround(s, u, rw);
#else
  if (vZW.z > 0.004) c += vZW.z * coastGround(s, u, rw);
#endif
#endif
#ifdef Z_COUNTRY
  if (vZW.w > 0.004) c += vZW.w * countryGround(s, u, rw);
#endif
#ifdef Z_TOWN
  if (vZW.w > 0.004) c += vZW.w * townGround(s, u, rw); // (the Turkish town, W4, in the country's channel: they never meet)
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
#if defined(K_BORDER) && defined(Z_SNOW)
  if (vZS > 0.004 && rdg > 0.0) c = mix(c, snowGround(s, u, rw), vZS * rdg); // (a border tunnel's ridge in the snow country: under snow)
#endif
#if defined(K_BORDER) && defined(Z_UCH)
  if (vZW.y > 0.004 && rdg > 0.0) c = mix(c, uchTuffCol(vec2(s, u)), vZW.y * rdg); // (…and in Cappadocia, W5: a ridge of its tuff)
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
const ZDEF = { city: 'Z_CITY', sakura: 'Z_SAKURA', coast: 'Z_COAST', country: 'Z_COUNTRY', mountain: 'Z_MTN', snow: 'Z_SNOW', bosphorus: 'Z_BOS', galata: 'Z_GAL', town: 'Z_TOWN', uchisar: 'Z_UCH' };
/** The painted meadow's texture (painted.js loadFieldTexture), once it has loaded: set it before the world is built, and
 *  the ground variants with the country, the coast or the cherry avenue take it (F_PAINT); without it the country keeps
 *  its procedural paddies, and the coast's slope and the avenue's lawns their procedural grass. */
export const FIELD = {
  tex: null,
  uFieldK: { value: new THREE.Vector2(1 / 12, 1 / 21) },   // 1 / the painted tile's size (m) across and along the road
  uFieldC: { value: new THREE.Vector3(1, 1, 1) },          // its tint (main.js: lime on a bright day, deeper otherwise)
  uFieldCo: { value: new THREE.Vector3(1, 1, 1) },         // …on the coast's green slope (main.js)
  uFieldBo: { value: new THREE.Vector3(1, 1, 1) },         // …on the Bosphorus's gardens and hill (main.js)
  uFieldSa: { value: new THREE.Vector3(1, 1, 1) },         // …on the cherry avenue's lawns (main.js)
  uFieldM: { value: new THREE.Vector3(0.16, 0.32, 0.05) }, // its average linear colour (the 3D blades take it)
};
export function groundDefines(zones) {
  const d = {};
  for (const z of zones) if (ZDEF[z]) d[ZDEF[z]] = '';
  // (the Bosphorus is drawn in the coast's weight channel, in its own look (Z_BOS): the two zones never meet; the Galata Bridge
  // in the cherry avenue's (Z_GAL: they never meet either). 'border': the chunks round a border tunnel (path.js borderNear),
  // its ridge over the tube (K_RIDGE), under snow on the snow's side)
  if (zones.includes('bosphorus')) d.Z_COAST = '';
  if (zones.includes('border')) d.K_BORDER = '';
  if (zones.includes('city') || zones.includes('country')) d.K_XING = '';
  if (zones.includes('country') || zones.includes('sakura')) d.K_RIVER = '';
  if (zones.includes('mountain') || zones.includes('coast') || zones.includes('border')) d.K_RIDGE = '';
  if (FIELD.tex && (zones.includes('country') || zones.includes('coast') || zones.includes('sakura') || zones.includes('bosphorus') || zones.includes('uchisar'))) d.F_PAINT = ''; // (Cappadocia's dry grass: its strokes in straw)
  return d;
}
const GROUND_VARIANTS = new Map();
/** zones drawn by another's variant: Paşabağ by Uçhisar's (W6: Cappadocia's one ground, its own share in the snow's slot) */
const ZALIAS = { pasabag: 'uchisar' };
export function groundMaterialFor(zones) {
  const key = [...new Set(zones.map(z => ZALIAS[z] || z))].sort().join('+');
  let m = GROUND_VARIANTS.get(key);
  if (!m) { m = groundMaterial(groundDefines(key.split('+')), key); GROUND_VARIANTS.set(key, m); }
  return m;
}
export const groundVariants = () => [...GROUND_VARIANTS.values()];
export function groundMaterial(defines = groundDefines(Object.keys(ZDEF)), key = 'all') {
  const m = new THREE.MeshToonMaterial({ color: 0xffffff, gradientMap: GRAD });
  m.defines = { ...defines, SH_SOFT: '' }; // (soft shadow edges near the camera: getShadow)
  const paint = defines.F_PAINT !== undefined;
  m.onBeforeCompile = sh => {
    sh.uniforms.uSkyHor = U.uSkyHor; sh.uniforms.uSkyZen = U.uSkyZen; sh.uniforms.uWet = U.uWet; sh.uniforms.uSakWet = U.uSakWet; sh.uniforms.uNight = U.uNight; sh.uniforms.uSunDir = U.uSunDir; sh.uniforms.uSunCol = U.uSunCol;
    for (const k of ['uReflTex', 'uReflOn', 'uReflRes', 'uHorizon', 'uReflK', 'uRoadN', 'uRoadF', 'uNtRoad', 'uNtWalk']) sh.uniforms[k] = U[k];
    if (defines.Z_UCH !== undefined) for (const k of ['uUchS', 'uUchG', 'uUchT', 'uPasS', 'uPasG', 'uPasT']) sh.uniforms[k] = U[k];
    if (defines.Z_SAKURA !== undefined) sh.uniforms.uSakRT = U.uSakRT;
    if (defines.Z_COAST !== undefined && defines.Z_BOS === undefined) { sh.uniforms.uCoFill = U.uCoFill; sh.uniforms.uCoVerge = U.uCoVerge; }
    if (paint) { sh.uniforms.uFieldTex = { value: FIELD.tex }; for (const k of ['uFieldK', 'uFieldC', 'uFieldCo', 'uFieldSa', 'uFieldM', 'uFieldBo']) sh.uniforms[k] = FIELD[k]; }
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
attribute vec2 su; attribute vec4 zw; attribute vec2 rk; attribute float rv; attribute float zs;
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
vSU = su; vZW = zw; vRK = rk; vRV = rv; vZS = zs; vWY = (modelMatrix * vec4(position, 1.0)).y; vWN = normalize(mat3(modelMatrix) * objectNormal);`);
    worldShade(sh, `
uniform vec3 uSkyHor, uSkyZen, uSunDir, uSunCol, uRoadN, uRoadF, uNtRoad, uNtWalk; uniform float uWet, uSakWet, uNight;
uniform sampler2D uReflTex; uniform vec2 uReflRes; uniform float uReflOn, uHorizon, uReflK;
#ifdef Z_SAKURA
uniform float uSakRT;
#endif
varying vec2 vSU; varying vec4 vZW; varying vec2 vRK; varying float vWY; varying float vRV; varying vec3 vWN; varying float vZS;
float gWater = 0.0; vec3 gRoadT = vec3(1.0);
#if defined(Z_COAST) && !defined(Z_BOS)
uniform vec3 uCoFill, uCoVerge; float gSlope = 0.0;
#endif
${GROUND}`, WET + MIRROR, false);
    sh.fragmentShader = sh.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>
diffuseColor.rgb *= groundAlbedo();`).replace('#include <lights_fragment_end>', `#include <lights_fragment_end>
#if defined(Z_COAST) || defined(Z_COUNTRY) || defined(Z_GAL) || defined(Z_TOWN) || defined(Z_UCH) || defined(Z_SAKURA)
reflectedLight.directDiffuse *= gRoadT;
#endif
#if defined(Z_COAST) && !defined(Z_BOS)
// (the coast's green slope, step 27: the painter's fill in its shade, a mid green under the trees as painted, not near-black)
reflectedLight.indirectDiffuse *= 1.0 + gSlope * vZW.z * uCoFill;
#endif`);
  };
  m.customProgramCacheKey = () => 'ground-v22-' + key + (paint ? '-fp' : '');
  return m;
}

/** vertex-coloured toon material with a little painterly world-space noise */
/** light a material's volumes by a painter's key (VOL_KEY in the lights chunk): the uniform `name` (U, view space, set in
 *  main.js) in place of the sun's direction; call in onBeforeCompile (the material's defines carry VOL_KEY: name) */
function volKey(sh, name) {
  sh.uniforms[name] = U[name];
  sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>\nuniform vec3 ${name};`);
}
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
  sh.uniforms.uLightsOn = U.uLightsOn; sh.uniforms.uLitN = U.uLitN; sh.uniforms.uBoardD = U.uBoardD; sh.uniforms.uHouseV = U.uHouseV; sh.uniforms.uHouseFill = U.uHouseFill;
  sh.vertexShader = sh.vertexShader
    .replace('#include <common>', '#include <common>\nattribute float aLit; uniform float uLightsOn, uHouseV; uniform vec4 uLitN; varying float vOn; flat varying vec2 vNt;')
    // aLit: 0 always on; 6/255 a shop's interior, warm by day too; 12/255 a neon sign, bright by day too (the shopping
    // street glows in daylight, as in the reference art); 24…255 a home window switching on at its own moment at dusk
    // (step 30: 3/255 a white or cream shop board, always on; uLitN, each kind's strength at night as painted)
    .replace('#include <begin_vertex>', '#include <begin_vertex>\nvOn = aLit < 0.002 ? 1.0 : aLit < 0.016 ? mix(1.0, uLitN.w, uLightsOn) : aLit < 0.035 ? mix(3.0, uLitN.x, uLightsOn) : aLit < 0.08 ? mix(16.0, 1.25 * uLitN.y, uLightsOn) : clamp((uLightsOn - aLit) * 12.0, 0.0, 1.0) * uLitN.z;\nvNt = vec2(aLit > 0.002 && aLit < 0.016 ? 1.0 : 0.0, uv.x > 1.5 && uv.x < 3.5 && uv.y < uHouseV ? 1.0 : 0.0);');
  // (step 30) at night as painted: a white shop board's paint dimmer (uBoardD), a painted house's walls in a moonlit fill (uHouseFill: linear
  // irradiance / π, as an emissive; 0 by day). Their flags come per vertex (vNt): read from the uv in the fragment shader, after the light,
  // it moved far pixels of the shopping street and the Turkish town at noon (the atlas's coordinates read at another precision)
  sh.fragmentShader = sh.fragmentShader
    .replace('#include <common>', '#include <common>\nvarying float vOn; flat varying vec2 vNt; uniform float uBoardD; uniform vec3 uHouseFill;')
    .replace('#include <color_fragment>', '#include <color_fragment>\ndiffuseColor.rgb *= mix(1.0, uBoardD, vNt.x);')
    .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance *= vOn;')
    .replace('#include <opaque_fragment>', 'outgoingLight += (vNt.y * uHouseFill) * diffuseColor.rgb;\n#include <opaque_fragment>');
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

/** 消波ブロック: the tetrapods' own concrete (chunks.js G.tetra, props.js tetrapod), softly shaded as the reference art
 *  paints them instead of in the props' hard toon steps:
 *  - a soft ramp over N·L: the sun wraps round each round leg, a wide soft terminator;
 *  - on a bright day the painting's own tones (U.uTpK …, ungraded each frame in main.js, as the painted sea's), from its
 *    blue-grey shade through a neutral middle to its warm light grey by how much sun reaches a point (the ramp and the
 *    shadows): lit by the real sun, in the painting's colours (the sky's blue and the sun's warmth mixed into a lavender);
 *  - the creases where the legs meet in soft shade (uv.x: how far out along its leg; they meet ~0.27 out), a little darker
 *    towards the water;
 *  - a dark wet band where the surf washes them, and white foam clinging to their feet that surges up as each big wave
 *    hits (SHORE_PHASE at the block's road distance, uv.y: in time with the surf.js spray);
 *  - a little painted mottling. Dusk, night and rain: the same shapes under the scene's light.
 *  phase: sea.js SHORE_PHASE (GLSL; materials.js can't import sea.js) */
export function tetraMaterial(phase, lite = false) {
  const m = new THREE.MeshToonMaterial({ vertexColors: true, gradientMap: gradGhibli(-0.15, 0.3, 0.0) });
  m.defines = { VOL_KEY: 'uVolKey' }; if (lite) m.defines.TP_LITE = ''; // (lit by the painted volumes' key; phones: one noise read for the mottling)
  m.onBeforeCompile = sh => {
    for (const k of ['uTpK', 'uTpD', 'uTpS', 'uTpM', 'uTpL', 'uTpFL', 'uTpFS']) sh.uniforms[k] = U[k];
    volKey(sh, 'uVolKey');
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float aoD; varying float vAoD; varying vec2 vTp;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvAoD = aoD; vTp = uv;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
uniform float uTpK; uniform vec3 uTpD, uTpS, uTpM, uTpL, uTpFL, uTpFS; varying float vAoD; varying vec2 vTp;
${phase}`)
      .replace('#include <color_fragment>', /* glsl */`#include <color_fragment>
// painted mottling: broad soft patches and finer strokes
#ifdef TP_LITE
float tpN = vnoise(vWP.xz * 1.7 + vWP.y * 1.2), tpMot = 0.93 + 0.14 * tpN;
#else
float tpN = vnoise(vWP.xz * 1.3 + vWP.y * 0.9) * 0.55 + vnoise(vec2(vWP.x - vWP.z, vWP.y) * 4.1) * 0.45, tpMot = 0.92 + 0.16 * tpN;
#endif
// how high the water reaches up the block: a low swell, surging up as each wave hits it (as the spray bursts), its edge
// ragged; below it white foam (lace: thinning upwards), above it the wet band it leaves (darker and bluer, drying upwards)
float tpP2 = (shorePhase(vTp.y, 4.0) - 0.04) * 2.0, tpPh = fract(tpP2), tpHit = smoothstep(0.0, 0.08, tpPh) * (1.0 - smoothstep(0.12, 0.6, tpPh)) * (1.0 - 0.45 * mod(floor(tpP2), 2.0));
float tpLc = vnoise(vec2(vWP.x + vWP.z, vWP.y * 0.6) * 6.0 + vec2(0.0, uTime * 0.5));
float tpW = 0.08 + 0.06 * sin(uTime * 1.3 + vWP.x * 0.7 + vWP.z * 0.5) + 0.45 * tpHit;
float tpWet = 1.0 - smoothstep(0.35, 0.95, vWP.y - 0.3 * tpN);
float tpFoam = smoothstep(-0.06, 0.06, tpW - vWP.y + 0.35 * (tpLc - 0.5) - 0.25 * max(vWP.y - 0.05, 0.0));
diffuseColor.rgb *= tpMot * mix(vec3(1.0), vec3(0.6, 0.66, 0.76), tpWet);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.93), tpFoam);`)
      .replace('#include <aomap_fragment>', /* glsl */`#include <aomap_fragment>
{ // the creases where the legs meet in soft shade, a little darker towards the water (vAoD: 255 at 0.7 m under it … 0 from
  // 1.85 m over it); not the foam
  float tpAO = mix(0.55, 1.0, smoothstep(0.24, 0.6, vTp.x)) * mix(0.8, 1.0, smoothstep(0.0, 1.0, (1.0 - vAoD) * 2.55));
  tpAO = mix(tpAO, 1.0, tpFoam * 0.7);
  vec3 tpDD = reflectedLight.directDiffuse * mix(1.0, tpAO, 0.5), tpID = reflectedLight.indirectDiffuse * tpAO;
  #if NUM_DIR_LIGHTS > 0
  if (uTpK > 0.001) {
    vec3 tpW3 = vec3(0.2126, 0.7152, 0.0722);
    float lf = clamp(dot(reflectedLight.directDiffuse, tpW3) / max(dot(directionalLights[0].color * BRDF_Lambert(diffuseColor.rgb), tpW3), 1e-6), 0.0, 1.0);
    vec3 pc = (lf < 0.5 ? mix(uTpS, uTpM, lf * 2.0) : mix(uTpM, uTpL, lf * 2.0 - 1.0)) * tpMot;
    pc = mix(uTpD, pc, tpAO * (1.0 - 0.55 * tpWet));
    pc = mix(pc, mix(uTpFS, uTpFL, lf), tpFoam);
    tpDD = mix(tpDD, pc, uTpK); tpID *= 1.0 - uTpK;
  }
  #endif
  reflectedLight.directDiffuse = tpDD; reflectedLight.indirectDiffuse = tpID; }`);
    worldShade(sh); // (last: its declarations go first, ahead of shorePhase's use of uTime)
  };
  m.customProgramCacheKey = () => (lite ? 'tetra-v2-lite' : 'tetra-v2');
  return m;
}

/** 樹皮: the painted trees' bark (props.js trunkTube / GB.tube: smooth tapered tubes), as the reference art paints it
 *  instead of in the props' hard toon steps:
 *  - a soft ramp over N·L (the sun wraps round a trunk, a soft terminator: a painter's lit edge, halftone, core shadow);
 *  - on a bright day the painting's own tones (U.uBk…, ungraded each frame in main.js, as the tetrapods'), by how much sun
 *    reaches a point (the ramp and the shadows): the cherries' dark brown-black body with its warm lit edge and deep
 *    shade, the broadleaf trees' lighter warm brown (vColor.r: which bark; vColor.g: darker deep in a crown);
 *  - painted strokes, periodic round each tube (uv.x: the angle, so its seam never shows; uv.y: metres along it):
 *    furrows wandering up the trunk, a soft mottling and (desktops) a few horizontal lenticels, fading out with distance.
 *  Dusk, night and rain: the same shapes in the old bark colours under the scene's light. */
const BK_A0 = '#7a6556', BK_A1 = '#6a5444'; // (the old bark and trunk colours: PAL.bark, PAL.trunk)
const glslC = h => { const c = new THREE.Color(h); return `vec3(${c.r.toFixed(4)}, ${c.g.toFixed(4)}, ${c.b.toFixed(4)})`; };
export function barkMaterial(lite = false) {
  const m = new THREE.MeshToonMaterial({ vertexColors: true, gradientMap: gradGhibli(-0.35, 0.42, 0.0) });
  if (lite) m.defines = { BK_LITE: '' }; // (phones: no lenticels)
  m.onBeforeCompile = sh => {
    for (const k of ['uBkK', 'uBkS', 'uBkM', 'uBkL', 'uBkS2', 'uBkM2', 'uBkL2']) sh.uniforms[k] = U[k];
    contactAO(sh);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vBk;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvBk = uv;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
uniform float uBkK; uniform vec3 uBkS, uBkM, uBkL, uBkS2, uBkM2, uBkL2; varying vec2 vBk;`)
      .replace('#include <color_fragment>', /* glsl */`
// the bark: furrows wandering up it (9 round any tube), a soft mottling, fading to their average once under a pixel or two
float bkW = vnoise(vec2(vBk.y * 0.9, 7.0 + 5.0 * vColor.r)), bkPh = vBk.x * 9.0 + bkW * 5.0 + sin(vBk.x * 2.0) * 1.5;
float bkFw = fwidth(bkPh), bkFur = (0.5 + 0.5 * sin(bkPh)) * (1.0 - smoothstep(0.6, 1.6, bkFw));
float bkMot = vnoise(vec2(cos(vBk.x), sin(vBk.x)) * 2.2 + vec2(vBk.y * 1.6, -vBk.y * 0.9));
float bk = 0.88 + 0.24 * bkMot - 0.3 * smoothstep(0.55, 0.95, bkFur);
#ifndef BK_LITE
{ // lenticels (皮目): a few short horizontal marks, lighter (7 cells round, 11 cm apart up the trunk)
  vec2 lq = vec2(vBk.x * 1.1141, vBk.y * 9.0), li = floor(lq), lf = fract(lq) - 0.5;
  float on = step(0.66, hash12(li + 17.0 * vColor.r)) * (1.0 - smoothstep(0.05, 0.11, abs(lf.y))) * (1.0 - smoothstep(0.22, 0.4, abs(lf.x)));
  bk = mix(bk, 1.3, on * 0.55 * (1.0 - smoothstep(0.2, 0.5, fwidth(lq.y)))); }
#endif
diffuseColor.rgb = mix(${glslC(BK_A0)}, ${glslC(BK_A1)}, vColor.r) * vColor.g * bk;`)
      .replace('#include <aomap_fragment>', /* glsl */`#include <aomap_fragment>
#if NUM_DIR_LIGHTS > 0
if (uBkK > 0.001) { // a bright day: the painting's tones by how much sun reaches here (the soft ramp and the shadows)
  vec3 bkW3 = vec3(0.2126, 0.7152, 0.0722);
  float lf = clamp(dot(reflectedLight.directDiffuse, bkW3) / max(dot(directionalLights[0].color * BRDF_Lambert(diffuseColor.rgb), bkW3), 1e-6), 0.0, 1.0);
  // in a crown's shadow a painter still paints the trunk's body and a softer lit edge: the shadow takes at most 28% of the
  // light the ramp gives (the ramp without the shadow: the gradient map read again)
  lf = max(lf, 0.72 * texture2D(gradientMap, vec2(dot(normal, directionalLights[0].direction) * 0.5 + 0.5, 0.0)).r);
  vec3 pc = mix(mix(uBkS, uBkS2, vColor.r), mix(uBkM, uBkM2, vColor.r), smoothstep(0.0, 0.35, lf));
  pc = mix(pc, mix(uBkL, uBkL2, vColor.r), smoothstep(0.55, 0.92, lf)) * bk * vColor.g;
  reflectedLight.directDiffuse = mix(reflectedLight.directDiffuse, pc, uBkK); reflectedLight.indirectDiffuse *= 1.0 - uBkK;
}
#endif`);
    worldShade(sh); // (last: its declarations, vnoise and hash12 among them, go first)
  };
  m.customProgramCacheKey = () => (lite ? 'bark-v1-lite' : 'bark-v1');
  return m;
}

/** 凝灰岩: Cappadocia's soft tuff (W5: its fairy chimneys, props.js fairyChimney / G.tuff: smooth lathes), as its concept painting
 *  paints them, in the bark's way (barkMaterial):
 *  - a soft ramp over N·L (the sun wraps round each cone: a broad lit flank, a soft terminator, a warm shade);
 *  - under a clear sky the painting's own tones (U.uTf…, ungraded each frame in main.js, by the time of day), by how much sun
 *    reaches a point (the ramp and the shadows): a mauve-brown shade, an ochre middle, a warm sandy light; towards the foot the
 *    pale cream tuff of the ridges they rise from (vColor.b: how far up), the basalt cap dark (vColor.r);
 *  - painted strokes, periodic round each lathe (uv.x: the angle, so its seam never shows; uv.y: metres up): soft runnels
 *    wandering down it, a few strata across it, a soft mottling, fading out with distance; its lobes' hollows a little darker
 *    (vColor.g).
 *  Grey skies and rain: the same shapes in their own colours under the scene's light. */
export function tuffMaterial(lite = false) {
  const m = new THREE.MeshToonMaterial({ vertexColors: true, gradientMap: gradGhibli(-0.3, 0.45, 0.0) });
  if (lite) m.defines = { TF_LITE: '' }; // (phones: no strata)
  m.onBeforeCompile = sh => {
    for (const k of ['uTfK', 'uTfS', 'uTfM', 'uTfL', 'uTfP', 'uTfC', 'uTfS2', 'uTfM2', 'uTfL2', 'uTfP2', 'uTfC2']) sh.uniforms[k] = U[k];
    // (Paşabağ's broken faces, W6: their shadow lookups three times as far out along the normal: its blocks' faces turn every way, and
    // with the usual offset the ones the sun grazes shaded themselves in a dotted grid)
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vTf;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvTf = uv;')
      .replace('#include <shadowmap_vertex>', THREE.ShaderChunk.shadowmap_vertex.replace('vec4 shadowWorldPosition;', 'vec4 shadowWorldPosition; shadowWorldNormal *= 1.0 + 2.0 * step(64.0, uv.x);'));
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
uniform float uTfK; uniform vec3 uTfS, uTfM, uTfL, uTfP, uTfC, uTfS2, uTfM2, uTfL2, uTfP2, uTfC2; varying vec2 vTf;`)
      .replace('#include <color_fragment>', /* glsl */`
// (Paşabağ's chimneys, W6: their angle round them runs from 32π (props.js PAS_UV), so every pattern below, periodic in 2π, is
// the same; they take their own tones)
float tfP = step(64.0, vTf.x);
// runnels wandering down it (11 round any chimney), fading to their average once under a pixel or two; a soft mottling
float tfW = vnoise(vec2(vTf.y * 0.22, 3.0 + 7.0 * vColor.r)), tfPh = vTf.x * 11.0 + tfW * 4.0;
float tfRun = (0.5 + 0.5 * sin(tfPh)) * (1.0 - smoothstep(0.7, 1.8, fwidth(tfPh)));
float tfMot = vnoise(vec2(cos(vTf.x), sin(vTf.x)) * 1.8 + vec2(vTf.y * 0.35, -vTf.y * 0.2));
float tf = (0.9 + 0.2 * tfMot) * (1.0 - 0.15 * smoothstep(0.55, 0.95, tfRun));
#ifndef TF_LITE
{ float sy = vTf.y * 1.9 + tfW * 3.0; tf *= 1.0 - 0.08 * smoothstep(0.82, 0.97, sin(sy)) * (1.0 - smoothstep(0.4, 1.2, fwidth(sy))); } // (strata)
#endif
// (Paşabağ's, W6: its soft tuff cracked and weathered as its concept paints it: crevices wandering down its faces (the iso-line of a
// value noise stretched up the lathe, round it seamlessly; faded to their average once under a pixel or two), paler and darker
// patches; its basalt caps pitted. Weighed in by tfP: Uçhisar's chimneys keep exactly their tones)
{ vec2 tc = vec2(cos(vTf.x), sin(vTf.x));
  float cn = vnoise(tc * 3.2 + vec2(vTf.y * 0.11, vTf.y * 0.07) + 11.0), cf = fwidth(cn);
  float crk = (1.0 - smoothstep(0.02, 0.045 + cf * 0.8, abs(cn - 0.5))) * (1.0 - smoothstep(0.06, 0.16, cf));
  float pm = vnoise(tc * 1.4 + vec2(vTf.y * 0.09, -vTf.y * 0.05) + 23.0);
  tf *= mix(1.0, (1.0 - mix(0.42, 0.25, vColor.r) * crk) * (0.86 + 0.26 * pm), tfP); }
float tfFoot = 1.0 - smoothstep(0.03, 0.28, vColor.b);
diffuseColor.rgb = mix(mix(mix(${glslC('#c99b6e')}, ${glslC('#e9d6bd')}, tfFoot), ${glslC('#5e4c43')}, vColor.r), mix(mix(${glslC('#d9c3a4')}, ${glslC('#e8dbc6')}, tfFoot), ${glslC('#5f544c')}, vColor.r), tfP) * vColor.g * tf;`)
      .replace('#include <aomap_fragment>', /* glsl */`#include <aomap_fragment>
#if NUM_DIR_LIGHTS > 0
if (uTfK > 0.001) { // a clear sky: the painting's tones by how much sun reaches here (the soft ramp and the shadows)
  vec3 tfW3 = vec3(0.2126, 0.7152, 0.0722);
  float lf = clamp(dot(reflectedLight.directDiffuse, tfW3) / max(dot(directionalLights[0].color * BRDF_Lambert(diffuseColor.rgb), tfW3), 1e-6), 0.0, 1.0);
  lf = mix(lf, smoothstep(0.2, 0.75, lf), tfP); // (Paşabağ's: its planes' light and shade sharply apart at the terminator, as painted)
  vec3 tS = mix(uTfS, uTfS2, tfP), tM = mix(uTfM, uTfM2, tfP), tL = mix(uTfL, uTfL2, tfP);
  vec3 pc = mix(mix(tS, tM, smoothstep(0.0, 0.4, lf)), tL, smoothstep(0.5, 0.92, lf));
  pc = mix(pc, mix(uTfP, uTfP2, tfP) * mix(0.6, 1.0, smoothstep(0.0, 0.85, lf)), tfFoot) * mix(vec3(1.0), mix(uTfC, uTfC2, tfP), vColor.r);
  reflectedLight.directDiffuse = mix(reflectedLight.directDiffuse, pc * tf * vColor.g, uTfK); reflectedLight.indirectDiffuse *= 1.0 - uTfK;
}
#endif`);
    worldShade(sh); // (last: its declarations, vnoise among them, go first)
  };
  m.customProgramCacheKey = () => (lite ? 'tuff-v1-lite' : 'tuff-v1');
  return m;
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
  #ifdef CAR_KEY
  vec3 H = normalize(uCarKey + vV); // (the car's glint: from the painter's sun that lights it)
  #else
  vec3 H = normalize(normalize((viewMatrix * vec4(uSunDir, 0.0)).xyz) + vV);
  #endif
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

/** The painted atlas (textures.js buildPaintedAtlas) in the atlas material: a cell whose u is 2 or more is one of its cells,
 *  so the albedo and the glow are read from its textures instead: one read each, in a branch that every pixel of a
 *  triangle takes the same way (a cell lies in one atlas or the other), so the reads keep their mip level and anisotropy
 *  (explicit gradients would cost more on phones). `alpha`: the shadow pass, albedo only. */
// The world atlas (textures.js buildWorldAtlas: the regions after Japan, Turkey's cells) the same way, in the atlas material's
// world variant (M.atlasW: the chunks that hold any of its cells): a cell whose u is 4 or more is one of its cells (uWMap,
// uWEm). (Japan's chunks keep the plain variant: with the third read in it, sub-pixel cells at the far end of the shopping
// street read other mips)
// (the world atlas's textures in uniform objects of their own, shared by the world variant and its shadow twin: a Japanese
// start makes both with a stand-in and swaps Turkey's in when it loads, near the border: setWorldTex, no new program)
const UW = { uWMap: { value: null }, uWEm: { value: null } };
/** the world atlas's textures ({ map, emissive }: textures.js Atlas.textures) for the atlas material's world variant */
export function setWorldTex(t) { UW.uWMap.value = t.map; UW.uWEm.value = t.emissive; }
function paintedAtlas(sh, P, alpha = false, Wt = null) {
  const W = !!Wt;
  sh.uniforms.uPMap = { value: P.map }; if (W) sh.uniforms.uWMap = UW.uWMap;
  if (!alpha) { sh.uniforms.uPEm = { value: P.emissive }; if (W) sh.uniforms.uWEm = UW.uWEm; }
  sh.fragmentShader = sh.fragmentShader
    .replace('#include <common>', `#include <common>\nuniform sampler2D uPMap;${alpha ? '' : ' uniform sampler2D uPEm;'}${W ? `\nuniform sampler2D uWMap;${alpha ? '' : ' uniform sampler2D uWEm;'}` : ''}`)
    .replace('#include <map_fragment>', /* glsl */`
bool pgP = vMapUv.x > 1.5;
vec4 sampledDiffuseColor;
if (pgP) sampledDiffuseColor = texture2D(uPMap, vMapUv - vec2(2.0, 0.0));
else sampledDiffuseColor = texture2D(map, vMapUv);${W ? `
bool pgW = vMapUv.x > 3.5;
if (pgW) sampledDiffuseColor = texture2D(uWMap, vMapUv - vec2(4.0, 0.0));` : ''}
diffuseColor *= sampledDiffuseColor;`);
  if (!alpha) sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>', /* glsl */`
vec4 emissiveColor;
if (pgP) emissiveColor = texture2D(uPEm, vEmissiveMapUv - vec2(2.0, 0.0));
else emissiveColor = texture2D(emissiveMap, vEmissiveMapUv);${W ? `
if (pgW) emissiveColor = texture2D(uWEm, vEmissiveMapUv - vec2(4.0, 0.0));` : ''}
totalEmissiveRadiance *= emissiveColor.rgb;`);
}
/** the atlas material's world variant (M.atlasW) and its shadow-pass twin: for the chunks holding any of the world atlas's
 *  cells (Turkey's). Made once the rest of the scene is (their ids draw random numbers: made earlier they moved every
 *  falling petal of a seeded capture) */
export function makeAtlasW(M, worldTex) {
  const P = M.ptex; setWorldTex(worldTex);
  M.atlasW = M.atlas.clone();
  M.atlasW.onBeforeCompile = sh => { contactAO(sh); windowLights(sh); worldShade(sh); paintedAtlas(sh, P, false, worldTex); };
  M.atlasW.customProgramCacheKey = () => 'atlasw-v1';
  M.atlasWDepth = new THREE.MeshDepthMaterial();
  // (and, as the props' (PROP_DEPTH), it leaves out what is flagged to cast no shadow (aoD 1/255: GB.noShadow): the Turkish town's
  // awnings, W4. Nothing else in the world atlas is flagged so)
  M.atlasWDepth.onBeforeCompile = sh => {
    paintedAtlas(sh, P, true, worldTex);
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nattribute float aoD;')
      .replace('#include <project_vertex>', '#include <project_vertex>\nif (abs(aoD * 255.0 - 1.0) < 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);');
  };
  M.atlasWDepth.customProgramCacheKey = () => 'atlaswdepth-v2';
}
/** Rooms behind the shopping street's painted shop windows (step 31): interior mapping (van Dongen 2008) with one painted image per
 *  room (the SimCity 5 / Ben Golus variant: the room seen from in front of its window in one-point perspective, its back wall the
 *  middle f × f of the image, its floor, ceiling and side walls round it; assets/rooms/, painted by Grok Imagine on a drawn
 *  room and the bay's own goods). Each painted shop bay (props.js litOf: the light codes 5…8, one shop code to windowLights) is the
 *  front of a box (3 × 3.6 m, its depth deep) behind it; per vertex where it is in the bay and the view ray in the box's units (straight
 *  lines: interpolated exactly), per pixel the ray's exit from the box and where it is in the painted view: two reads (the glass, the
 *  room), the room only inside the bay's glass box. Where the bay's glass is (a mask of the painted bays' panes, a texture of its own:
 *  uGlass) the room stands for the painted glass in both the albedo and the glow,
 *  so the windows keep their light by day, at dusk and at night (windowLights' shop rule: uLitN). The room per bay: its painting's own (a
 *  bakery's window, a bakery), mirrored by the code's low bit, the second room of its kind (if any) by the high one. A program of
 *  its own (M.atlasI), taken by the chunks that hold painted shop bays (chunks.js), so every other chunk keeps the atlas's. Made
 *  once the rest of the scene is (as makeAtlasW: its ids draw random numbers). (Step 34: every shop window that was still a painting
 *  takes a room the same way: the shopping street's procedural ones (their glass laid into its mask at load, their rooms borrowed from
 *  its painted bays'), the chain stores' (makeChainRooms: the same program, their own room set) and the Turkish town's (makeAtlasWRooms:
 *  the world variant's room program), each region's rooms in a sheet of its own) */
export const RM_N = 24; // (the shop cells one room set can tell: the shopping street's painted bays shop_p0…p9 and its procedural shop windows,
// step 34; the Turkish town's bays; a region's chain bays)
/** (step 34) One room set's uniforms (a material's own: its rooms' sheet, its glass, its table of shop cells and their rooms; the
 *  shopping street's, the Turkish town's, each region's chain stores'). tex: the rooms' sheet; glass: the one-channel glass mask; table:
 *  [{ cell: the shop cell's uv rect, a: its room's corner in the sheet, b: its second room's (or null), mask: [u, v, du, dv] its glass in
 *  the mask, box: [x0, y0, x1, y1] its panes' bounds in the bay (0..1 from its bottom-left) }]; geo: { half (the room box's half size,
 *  m: half the bay across and up, half its depth), size (a room in the sheet), f (its back wall's share), e (the glow's gain, rgb),
 *  warp }; lo: the lowest light code a room is cast for (4.5: the shop codes 5…8, whose low bit mirrors the room and high bit picks its
 *  kind's second; −0.5: any code, the chain stores' bays, which are lit always (code 0) and take the first room, unmirrored) */
export function roomSet(tex, glass, table, geo, lo = 4.5) {
  const cells = [], ofs = [], masks = [], boxes = [];
  for (let i = 0; i < RM_N; i++) {
    const t = table[i], a = t && t.a, b = t && (t.b || t.a);
    cells.push(t ? new THREE.Vector4(t.cell.u0, t.cell.v0, t.cell.u1, t.cell.v1) : new THREE.Vector4(-9, -9, -9, -9));
    ofs.push(new THREE.Vector4(a ? a[0] : -1, a ? a[1] : -1, b ? b[0] : -1, b ? b[1] : -1));
    masks.push(t ? new THREE.Vector4(...t.mask) : new THREE.Vector4());
    boxes.push(t ? new THREE.Vector4(t.box[0], t.box[1], 1 / (t.box[2] - t.box[0]), 1 / (t.box[3] - t.box[1])) : new THREE.Vector4(0, 0, 1, 1));
  }
  const e = Array.isArray(geo.e) ? geo.e : [geo.e, geo.e, geo.e];
  return { uRoom: { value: tex }, uGlass: { value: glass }, uRmCell: { value: cells }, uRmOf: { value: ofs }, uRmMask: { value: masks }, uRmBox: { value: boxes }, uRmHalf: { value: new THREE.Vector3(...geo.half) }, uRmS: { value: new THREE.Vector2(...geo.size) }, uRmQ: { value: (1 / geo.f - 1) / 2 }, uRmE: { value: new THREE.Vector3(...e) }, uRmW: { value: geo.warp }, uRmLo: { value: lo }, uRmOn: U.uRmOn };
}
/** the shopping street's rooms (step 31): the atlas material's room variant (M.atlasI), its room set R (roomSet) */
export function makeAtlasRooms(M, R) {
  M.atlasI = M.atlas.clone();
  M.atlasI.onBeforeCompile = sh => { contactAO(sh); windowLights(sh); worldShade(sh); paintedAtlas(sh, M.ptex); roomsAtlas(sh, R); };
  M.atlasI.customProgramCacheKey = () => 'atlasi-v1'; M.atlasI.userData.rooms = R; // (its room set: __dbg)
  return M.atlasI;
}
/** (step 34) the Turkish town's rooms: the atlas material's world variant with the rooms (M.atlasWI, a program of its own, one of Turkey's:
 *  made with its assets, at a Turkish start or in its lazy load), taken by the chunks holding the town's shop bays (chunks.js), so every
 *  other chunk of Turkey's keeps the world variant and its pixels. Its shadow twin is the world variant's (M.atlasWDepth). R: roomSet */
export function makeAtlasWRooms(M, R) {
  const P = M.ptex;
  M.atlasWI = M.atlasW.clone();
  M.atlasWI.onBeforeCompile = sh => { contactAO(sh); windowLights(sh); worldShade(sh); paintedAtlas(sh, P, false, true); roomsAtlas(sh, R); };
  M.atlasWI.customProgramCacheKey = () => 'atlaswi-v1'; M.atlasWI.userData.rooms = R;
  return M.atlasWI;
}
/** (step 34) a chain store material's room variant: the chain material (makeAtlasChain: its own texture pair) under the shopping street's
 *  room program (the same shader under the same key as M.atlasI: nothing new is compiled) with its own room set R (roomSet, lo −0.5: its
 *  bays are lit always). Its shadow twin stays the chain material's */
export function makeChainRooms(M, base, R) {
  const m = base.clone(); m.map = base.map; m.emissiveMap = base.emissiveMap; m.emissiveIntensity = base.emissiveIntensity;
  m.onBeforeCompile = sh => { contactAO(sh); windowLights(sh); worldShade(sh); paintedAtlas(sh, M.ptex); roomsAtlas(sh, R); };
  m.customProgramCacheKey = () => 'atlasi-v1'; m.userData.rooms = R;
  return m;
}
/** (step 35P) Galata's fronts under the painted plates (their meshes' material in mode 1: plates.js): their built look (base: M.atlasGI, its
 *  shops' rooms, or M.atlasG) drawn over the painted walls where the plates saw them too thinly for the view (hook: plates.js pxFrontsHook,
 *  its weight their alpha: the facade beside the car on a narrow street), and the shops' rooms behind their glass always (the user's rule).
 *  Transparent (blended over the plates); a program of its own, made with the plates' index (main.js) */
export function makePlateFronts(M, base, rooms, hook) {
  // (cloned without its userData: three's Material.copy copies userData through JSON, which would encode the rooms' textures' bitmaps (a slow
  // frame, and a throw once they are uploaded and closed, as in Turkey's lazy load); the clone shares them)
  const ud = base.userData; let m; base.userData = {}; try { m = base.clone(); } finally { base.userData = ud; }
  m.userData = { ...ud }; m.map = base.map; m.emissiveMap = base.emissiveMap; m.emissiveIntensity = base.emissiveIntensity; m.transparent = true;
  const bk = base.customProgramCacheKey(), on = base.onBeforeCompile;
  m.onBeforeCompile = (sh, r) => { on(sh, r); hook(sh); };
  m.customProgramCacheKey = () => bk + (rooms ? '-pxfronts-v1' : '-pxfronts0-v1');
  return m;
}
function roomsAtlas(sh, R) {
  Object.assign(sh.uniforms, R);
  sh.vertexShader = sh.vertexShader
    .replace('#include <common>', `#include <common>\nuniform vec4 uRmCell[${RM_N}]; uniform vec3 uRmHalf; uniform float uRmOn, uRmLo; varying vec4 vRmA; varying float vRmZ; flat varying float vRmI;`)
    // a shop bay's vertex (a light code over uRmLo, up to the shop codes' 8, its uv in a cell of the table): where it is in the bay (0…1
    // from its bottom-left), the ray from the camera through it in its box's units (across: the bay's u, its viewer's right, mirrored with
    // the room; up: the world's; in: into the wall), and which bay and room (1 + cell + 32 · code; 0: none). Six numbers a vertex, for
    // every vertex of the chunk's atlas mesh: the rest is read per pixel
    .replace('#include <project_vertex>', /* glsl */`#include <project_vertex>
vRmA = vec4(0.0); vRmZ = 1.0; vRmI = 0.0;
{ float rc = aLit * 255.0;
  if (uRmOn > 0.5 && rc < 8.5 && rc > uRmLo) {
    for (int i = 0; i < ${RM_N}; i++) {
      vec4 c = uRmCell[i];
      if (uv.x > c.x - 1e-4 && uv.x < c.z + 1e-4 && uv.y > c.y - 1e-4 && uv.y < c.w + 1e-4) {
        float k = max(floor(rc - 4.5), 0.0), fl = mod(k, 2.0) > 0.5 ? -1.0 : 1.0;
        vec3 rN = normalize(transformedNormal), rB = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz), rT = normalize(cross(rB, rN));
        vRmA = vec4((uv - c.xy) / (c.zw - c.xy), fl * dot(mvPosition.xyz, rT) / uRmHalf.x, dot(mvPosition.xyz, rB) / uRmHalf.y);
        vRmZ = -dot(mvPosition.xyz, rN) / uRmHalf.z; vRmI = 1.0 + float(i) + 32.0 * k;
        break;
      }
    }
  }
}`);
  sh.fragmentShader = sh.fragmentShader
    .replace('#include <common>', `#include <common>\nuniform sampler2D uRoom, uGlass; uniform vec4 uRmOf[${RM_N}], uRmMask[${RM_N}], uRmBox[${RM_N}]; uniform vec2 uRmS; uniform vec3 uRmE; uniform float uRmQ, uRmW; varying vec4 vRmA; varying float vRmZ; flat varying float vRmI;`)
    // the bay's glass (its mask, read in step with the triangle's other pixels), and only inside its glass box (half its pixels: the frame,
    // the boards and the beams round it pay nothing), whose edge lies on the frame where the glass is 0 (the room's read across it, with
    // its neighbours outside, is never seen): the ray's exit from the box (the nearest of the three far planes), then its place in the
    // painted view: the room's front at the image's edges, its back wall at f of them (one-point perspective: 1 / (1 + q · depth));
    // across, as the sheet stores it (x (w + (1 − w) x²): the side walls' near strips, all a view down the street sees, at up to 3 − 2w
    // times the texels)
    .replace('diffuseColor *= sampledDiffuseColor;', /* glsl */`vec3 rmC = vec3(0.0); float rmK = 0.0;
if (vRmI > 0.5) {
  int rmX = int(vRmI + 0.5) - 1, rmI = rmX - (rmX / 32) * 32, rmJ = rmX / 32;
  vec4 rmB = uRmBox[rmI], rmM = uRmMask[rmI]; vec2 rmb = (vRmA.xy - rmB.xy) * rmB.zw;
  float rmG = texture2D(uGlass, rmM.xy + vRmA.xy * rmM.zw).r; // (read where every pixel of the bay's triangle reads it: its mip holds)
  if (rmb.x >= 0.0 && rmb.y >= 0.0 && rmb.x <= 1.0 && rmb.y <= 1.0) {
    vec4 rmO = uRmOf[rmI]; rmK = rmG;
    vec3 rp = vec3(vRmA.xy * 2.0 - 1.0, -1.0), rd = vec3(vRmA.zw, vRmZ) + 1e-6;
    if (rmJ == 1 || rmJ == 3) rp.x = -rp.x;
    vec3 ri = 1.0 / rd, rk = abs(ri) - rp * ri, rh = rp + min(min(rk.x, rk.y), rk.z) * rd;
    vec2 rv = rh.xy / (1.0 + uRmQ * (rh.z + 1.0)); rv.x *= uRmW + (1.0 - uRmW) * rv.x * rv.x;
    rmC = texture2D(uRoom, (rmJ >= 2 ? rmO.zw : rmO.xy) + clamp(0.5 + 0.5 * rv, 0.0, 1.0) * uRmS).rgb;
    sampledDiffuseColor.rgb = mix(sampledDiffuseColor.rgb, rmC, rmK);
  }
}
diffuseColor *= sampledDiffuseColor;`)
    .replace('totalEmissiveRadiance *= emissiveColor.rgb;', 'if (rmK > 0.0) emissiveColor.rgb = mix(emissiveColor.rgb, rmC * uRmE, rmK);\ntotalEmissiveRadiance *= emissiveColor.rgb;');
}
/** (step 32) The chain stores' fronts (textures.js buildChainAtlas: their painted bays, signs and stickers, in a texture pair of their
 *  own): the atlas material with that pair as its map and its glow, sharing the atlas's program (the same shader under the same key:
 *  nothing new is compiled, and every other chunk keeps its material and its pixels), with its own shadow twin (the atlas's, cloned:
 *  three hands a shadow material its mesh's map at each draw but refreshes its uniforms only when the material changes, so the
 *  atlas's own twin, drawn just before, would keep the atlas's map). Made once the rest of the scene is (as makeAtlasW: its ids draw
 *  random numbers) */
export function makeAtlasChain(M, tex) {
  const m = M.atlas.clone(); m.map = tex.map; m.emissiveMap = tex.emissive;
  m.onBeforeCompile = M.atlas.onBeforeCompile; m.customProgramCacheKey = M.atlas.customProgramCacheKey;
  const d = M.atlasDepth.clone(); d.onBeforeCompile = M.atlasDepth.onBeforeCompile; d.customProgramCacheKey = M.atlasDepth.customProgramCacheKey;
  return { mat: m, depth: d };
}
/** Cappadocia's atlas material (W5): its own cells (textures.js buildCapAtlas: the caves' doors and windows, the dry grass, the bare
 *  crowns' twigs, its road sign) drawn as the atlas material draws its cells (cut out at alpha 0.5, contact shading, the cave
 *  windows lit one by one at dusk, the cloud shadows), from a texture pair of their own; both faces of its cards (their normals
 *  kept on the back: they shade as the ground or the crown they stand for), casting no shadow. One of Turkey's programs: made with
 *  them (main.js). (A fourth read in the world variant's own program moved a few far pixels of the Turkish town's street) */
export function makeCapAtlas(M, tex) {
  const m = new THREE.MeshToonMaterial({ vertexColors: true, gradientMap: GRAD, map: tex.map, emissiveMap: tex.emissive, emissive: 0xffffff, emissiveIntensity: 0.1, alphaTest: 0.5, side: THREE.DoubleSide });
  m.onBeforeCompile = sh => {
    sh.fragmentShader = sh.fragmentShader.replace('#include <normal_fragment_begin>', THREE.ShaderChunk.normal_fragment_begin.replace('gl_FrontFacing ? 1.0 : - 1.0', '1.0'));
    contactAO(sh); windowLights(sh); worldShade(sh);
  };
  m.customProgramCacheKey = () => 'capatlas-v1';
  M.capAtlas = m;
}
/** Paşabağ's tall dry grass (W6: textures.js buildPasAtlas, props.js pasGrass, G.pgrass): its clumps' cards drawn as Cappadocia's
 *  atlas draws its cells (cut out at alpha 0.5, both faces shaded as the ground, contact shading, the cloud shadows), casting no
 *  shadow, and bent from the root by the breeze as the foliage's tufts (U.uPasSway: its row's v0, v1). A program of its own, one of
 *  Turkey's: any change to Cappadocia's atlas program (even a branch after its cut-out) moved a few of Uçhisar's far twigs' pixels */
export function makePasGrass(M, tex) {
  const m = new THREE.MeshToonMaterial({ vertexColors: true, gradientMap: GRAD, map: tex.map, alphaTest: 0.5, side: THREE.DoubleSide });
  m.onBeforeCompile = sh => {
    sh.fragmentShader = sh.fragmentShader.replace('#include <normal_fragment_begin>', THREE.ShaderChunk.normal_fragment_begin.replace('gl_FrontFacing ? 1.0 : - 1.0', '1.0'));
    sh.uniforms.uPasGT = U.uPasGT;
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform vec3 uPasGT;').replace('#include <color_fragment>', '#include <color_fragment>\ndiffuseColor.rgb *= uPasGT;');
    contactAO(sh); worldShade(sh);
    sh.uniforms.uPasSway = U.uPasSway; sh.uniforms.uWind = U.uWind;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nuniform vec2 uPasSway; uniform float uWind;') // (uTime comes with the vertex cloud shadows)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
{ vec4 wq = modelMatrix * vec4(transformed, 1.0); float k = clamp((uv.y - uPasSway.x) / (uPasSway.y - uPasSway.x), 0.0, 1.0);
  float sw = sin(uTime * 1.3 + wq.x * 0.29 + wq.z * 0.21) * 0.65 + sin(uTime * 2.5 + wq.x * 0.77 - wq.z * 0.45) * 0.35;
  k *= k * 0.16 * uWind; transformed.x += sw * k; transformed.z += sw * k * 0.7; }`);
  };
  m.customProgramCacheKey = () => 'pasgrass-v1';
  M.pasGrass = m;
}
export function makeMaterials(atlasTex, folTex, paintTex) {
  const M = {};
  M.ground = groundMaterial();
  M.color = painterly(new THREE.MeshToonMaterial({ vertexColors: true, gradientMap: GRAD }), 1.6, 0.1, 'color-v3', contactAO);
  M.atlas = new THREE.MeshToonMaterial({ vertexColors: true, gradientMap: GRAD, map: atlasTex.map, emissiveMap: atlasTex.emissive, emissive: 0xffffff, emissiveIntensity: 0.1, alphaTest: 0.5 });
  M.atlas.onBeforeCompile = sh => { contactAO(sh); windowLights(sh); worldShade(sh); paintedAtlas(sh, paintTex); };
  M.atlas.customProgramCacheKey = () => 'atlas-v7';
  // its shadow-pass twin (the atlas's meshes take it as their customDepthMaterial; three gives it the atlas's map and
  // alpha test): the painted cells cut their outlines (the houses' gables and roofs) out of the painted atlas's alpha
  M.atlasDepth = new THREE.MeshDepthMaterial();
  M.atlasDepth.onBeforeCompile = sh => paintedAtlas(sh, paintTex, true);
  M.atlasDepth.customProgramCacheKey = () => 'atlasdepth-v2';
  M.ptex = paintTex;
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
    const leafCompile = M.leaf.onBeforeCompile = sh => { // keep the spherical canopy normals on back faces too
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
    // (step 28) the country's verge banks (props.js bank: bankA / bankB) in a program of their own: the leaves' with their grass
    // (the green texels; not the flowers) tinted by the time of day (U.uBankT), as the evening repaints of the painting have the
    // verge: a dark olive in the low sun's shade, mauve at sunset, a deep teal under the moon
    M.bank = new THREE.MeshToonMaterial({ map: folTex, vertexColors: true, gradientMap: GRAD_SOFT, alphaTest: 0.42, side: THREE.DoubleSide });
    M.bank.onBeforeCompile = sh => {
      leafCompile(sh);
      sh.uniforms.uBankT = U.uBankT;
      sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform vec3 uBankT;').replace('#include <color_fragment>', `#include <color_fragment>
{ float gr = clamp((diffuseColor.g - max(diffuseColor.r, diffuseColor.b)) * 10.0, 0.0, 1.0); diffuseColor.rgb *= mix(vec3(1.0), uBankT, gr); }`);
    };
    M.bank.customProgramCacheKey = () => 'leaf-v5-bank';
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
function billboard(sh, depth, shrink = 0, pull = 0) { // (shrink: the cherry blossom's shadow pass, its cards that much smaller; pull: its depth, below)
  sh.uniforms.uTime = U.uTime; sh.uniforms.uWind = U.uWind;
  sh.vertexShader = sh.vertexShader
    .replace('#include <common>', '#include <common>\nattribute vec2 aOff; uniform float uWind;' + (depth ? ' uniform float uTime;' : ''))
    .replace('#include <begin_vertex>', `#include <begin_vertex>
{ vec3 bbR = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]), bbU = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vec4 wq = modelMatrix * vec4(transformed, 1.0);
  float sw = (sin(uTime * 1.1 + wq.x * 0.31 + wq.z * 0.23) * 0.65 + sin(uTime * 2.1 + wq.x * 0.83 - wq.z * 0.47) * 0.35) * 0.04 * uWind;
  transformed += ${shrink ? '(bbR * (aOff.x + sw) + bbU * aOff.y) * ' + shrink.toFixed(3) : 'bbR * (aOff.x + sw) + bbU * aOff.y'}; }`);
  // the crown's core (marked by a straight-down normal) casts no shadow: its sun-facing twin would cut it in two
  if (depth) sh.vertexShader = sh.vertexShader.replace('#include <project_vertex>', '#include <project_vertex>\nif (normal.y < -0.97) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);');
  // (pull: the card's depth as if it stood that much nearer the eye, where a cluster's dome of flowers faces it, while it keeps
  // its place and size on screen; the crown's core keeps its own; never nearer than 0.6 of its own depth, clear of the near plane)
  else if (pull) sh.vertexShader = sh.vertexShader.replace('#include <project_vertex>', `#include <project_vertex>
{ vec4 bp = projectionMatrix * vec4(mvPosition.xy, min(mvPosition.z + ${pull.toFixed(3)} * length(aOff) * step(-0.97, normal.y), mvPosition.z * 0.6), 1.0); gl_Position.z = bp.z / bp.w * gl_Position.w; }`);
}
// Cherry blossom (its own atlas, step 26: ghibli.js, blossom3): B is a key into the sakura painting's colours, not a brightness. Under ~0.1 a
// dark bark brown, the deeper flowers and the petals' outlines (~0.3–0.5) a deep rose, and the petals run from a rose pink
// (~0.6, the painting's commonest) to the pale, nearly white pink of the petals in full sun (1). Shade and light then come
// from each flower's own normal and the crown's
const bl = (r, g, b) => { const c = new THREE.Color().setRGB(r / 255, g / 255, b / 255, THREE.SRGBColorSpace); return `vec3(${c.r.toFixed(4)}, ${c.g.toFixed(4)}, ${c.b.toFixed(4)})`; };
// The cherry canopy (step 26) is lit as one surface: its cells' own normals are nearly flat, and the crown's (per cluster)
// weighs more than on the leaves (the cluster's own takes 0.45 of the normal, the leaves' 0.72), so a crown's light and
// shade belong to the crown, not a lit cap on every cluster (the old cotton balls)
const BL_TEXN = 0.45;
// …and its shadow: each cluster casts a shadow card this much smaller round its middle, so the crowns' shadows on the road
// and the pavements are a sparse dapple, as painted (the painting's road is mostly in the sun), not one blotch: the left
// pavement's dapple ΔE 16 at 0.6, 21 at 0.5, 25 at 0.42 (the painting's dapple there is denser than the road's)
const BL_SHADOW = 0.6;
// …and its depth: each card stands for a dome of flowers whose front is nearer the eye than its middle by about its
// half-width, so the cards are depth-tested as if that much nearer (BL_PULL × the card's corner radius; their place and size
// on screen unchanged). A limb that ends inside a cluster then passes behind its flowers' painted outline from any side; a
// flat card through the cluster's middle let the limb's tip show over the flowers in front of it, and a shallower pull cut
// limbs heading away from the eye with a straight edge in the middle of the pink, as a sawn-off stump
const BL_PULL = 0.75;
const BLOSSOM_RAMP = `float blT = clamp(gTx.b * uBlMid.w + uBlTip.w, 0.0, 1.0); // (smoothstep(edge, 1, b): the edge's maths done on the CPU)
diffuseColor.rgb *= mix(${bl(62, 38, 34)}, uBlMid.rgb + uBlTip.rgb * (blT * blT * (3.0 - 2.0 * blT)), smoothstep(0.1, 0.26, gTx.b));`;
/** The crowns' material (`tex`: the cluster atlas, ghibli.js). Every cluster lights its own painted leaves: its normal is
 *  the crown's (from the crown's centre, per vertex) mixed with the cluster's own from the atlas, so each lobe of the
 *  crown gets its lit cap and its shade under the real sun. Returns { mat, depth } (depth: the shadow pass's twin). */
export function makeGhibliLeaf(tex, { blossom = false } = {}) {
  // base leaf green (sRGB), a little yellower than the sunlit grass, as in the paintings; the atlas's albedo (~0.8 on
  // average, darker in the crevices) and the per-cluster vertex colour (crown occlusion, per-tree tint) multiply it.
  // Blossom: the atlas's B is a key into the sakura painting's own colours (BLOSSOM_RAMP), so the material is white
  const m = new THREE.MeshToonMaterial({ map: tex, vertexColors: true, color: blossom ? 0xffffff : new THREE.Color().setRGB(0.68, 0.85, 0.46, THREE.SRGBColorSpace), gradientMap: blossom ? GRAD_BLOSSOM : GRAD_GHIBLI, alphaTest: 0.5, side: THREE.FrontSide });
  m.shadowSide = THREE.DoubleSide; // (three flips FrontSide to BackSide for shadows; the depth twins face the sun)
  m.defines = { VOL_KEY: blossom ? 'uBlKey' : 'uLeafKey' }; // (lit by the crowns' painter's key, as the paintings light them)
  m.onBeforeCompile = sh => {
    worldShade(sh); backlit(sh);
    billboard(sh, false, 0, blossom ? BL_PULL : 0); // (uTime comes with the vertex cloud shadows)
    sh.uniforms.uGhShade = blossom ? U.uBlShade : U.uGhShade; // (blossom: its own shade, a bright rose-magenta)
    if (!blossom) { sh.uniforms.uGhTint = U.uGhTint; volKey(sh, 'uLeafKey'); } else { sh.uniforms.uBlMid = U.uBlMid; sh.uniforms.uBlTip = U.uBlTip; volKey(sh, 'uBlKey'); }
    // the sun's shadow is looked up from the cluster's sunward surface (~1.1 × its half-width out), so a cluster never
    // shadows itself (its sun-facing depth twin cuts through its middle) while the lobes above and toward the sun still
    // shade the ones below. The crown's core (marked by a straight-down normal) looks it up 2.5 m deeper into the crown:
    // it is in shade wherever any of the crown's clusters stands between it and the sun
    sh.vertexShader = sh.vertexShader.replace('#include <shadowmap_vertex>', `#if defined( USE_SHADOWMAP )
worldPosition.xyz += uSunDir * mix(-2.5, length(aOff) * 1.11, step(-0.97, objectNormal.y));
#endif
#include <shadowmap_vertex>`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform vec3 uGhShade;' + (blossom ? ' uniform vec4 uBlMid, uBlTip;' : ' uniform vec3 uGhTint;'))
      .replace('#include <map_fragment>', `
vec4 gTx = texture2D(map, vMapUv);
vec2 gN2 = gTx.rg * 2.0 - 1.0;
vec3 gTexN = vec3(gN2, sqrt(max(0.0, 1.0 - dot(gN2, gN2))));
${blossom ? BLOSSOM_RAMP : 'diffuseColor.rgb *= gTx.b * uGhTint;'}
diffuseColor.a *= gTx.a;`)
      // the cluster's own normal (in card = view space) mixed with the crown's
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
normal = normalize(mix(normal, gTexN, ${blossom ? BL_TEXN.toFixed(3) : '0.72'}));`)
      // the crown's shade is lit by the sky alone, through a shade tint (a deep teal on a clear day), not by the warm ground
      // bounce the open surfaces get from the hemisphere light: it turned shaded leaves olive
      .replace('#include <aomap_fragment>', `#if NUM_HEMI_LIGHTS > 0
reflectedLight.indirectDiffuse = hemisphereLights[0].skyColor * BRDF_Lambert(diffuseColor.rgb * uGhShade) * mix(0.7, 1.0, dot(normal, hemisphereLights[0].direction) * 0.5 + 0.5);
#endif
#include <aomap_fragment>`);
  };
  m.customProgramCacheKey = () => (blossom ? 'gblossom-v3' : 'gleaf-v2');
  const d = new THREE.MeshDepthMaterial();
  d.onBeforeCompile = sh => billboard(sh, true, blossom ? BL_SHADOW : 0);
  d.customProgramCacheKey = () => (blossom ? 'gblossom-depth-v1' : 'gleaf-depth-v1');
  return { mat: m, depth: d };
}

// ------------------------------------------------------------------ the Galata Bridge's painted fishermen (step 35a: fishers.js)
// Each fisherman is one instance of a card: a painted figure from the people atlas (painted.js loadFisherAtlas: Grok turnaround
// sheets, one man in one pose each, five views round his back half: his left side, back three-quarter, back, the others), turned to
// the camera round its upright axis in the vertex shader. Which view it shows comes from where the camera stands round him (phi:
// 0 his front, + his left), the nearest of the five, the two nearest cross-faded round the half-way angle between them so a passing
// car sees no jump. The instance (aA: his feet, the sheet; aB: his facing, his scale, the pose) and the table of views (uFTab: per
// sheet and view two texels: the feet's place in the atlas (px) and its px a metre, signed where it is mirrored; the card's reach
// round the feet (m)) are all it needs: no work on the CPU per frame. Its normal points up, leaning FISH_N towards the eye; its
// colours are the painting's (premultiplied in the atlas, filtered in sRGB, decoded here), × U.uFishT, its tint by the hour, and a
// rim of light (U.uFishRim) on his edges towards a low sun beyond him (main.js). Its shadow twin turns the same card to the light
// and shows the view from the light's side (when the sun stands in front of him, the view from behind, mirrored: a silhouette is the
// same from either side), so each figure casts his own shape; the card's shadow lookup stands a little towards the sun, so a figure
// isn't shaded by his own shadow card
// (the views' blend: as wide as FISH_BLEND frames' turn of the camera round him (uFishPrev: its place a frame ago), at most FISH_BLEND_MAX
// degrees each side of the half-way angle: a parked camera never sees two views at once, a passing one sees them cross-fade)
export const FISH_BLEND = 5, FISH_BLEND_MAX = 9;
const FISH_N = 0.45; // (how far his card's normal leans from up towards the eye)
const FISH_PARS_V = /* glsl */`
attribute vec4 aA, aB;
uniform highp sampler2D uFTab;
uniform vec2 uFSize, uFRing;
uniform vec3 uFishPrev;
varying vec2 vUvB; flat varying vec4 vBoxA, vBoxB; flat varying float vMix;
flat varying vec3 vRim;
`;
const FISH_PARS_F = /* glsl */`
uniform vec2 uFSize;
varying vec2 vUvB; flat varying vec4 vBoxA, vBoxB; flat varying float vMix;
flat varying vec3 vRim;
float fBox(vec2 u, vec4 b) { return step(b.x, u.x) * step(u.x, b.z) * step(b.y, u.y) * step(u.y, b.w); }
// the figure's texel (premultiplied: its colour un-premultiplied, still sRGB); between two views their premultiplied blend by vMix (the
// paint cross-fades, the outline changes where the blended alpha crosses the cut); its alpha raised as the mips thin it (a far figure
// keeps its legs and arms)
vec4 fishTexel(sampler2D t) {
  vec2 dx = dFdx(vMapUv), dy = dFdy(vMapUv), dxb = dFdx(vUvB), dyb = dFdy(vUvB);
  vec2 dp = max(abs(dx), abs(dy)) * uFSize; float lod = log2(max(max(dp.x, dp.y), 1e-4));
  vec4 a = textureGrad(t, vMapUv, dx, dy) * fBox(vMapUv, vBoxA);
  if (vMix > 0.0) a = mix(a, textureGrad(t, vUvB, dxb, dyb) * fBox(vUvB, vBoxB), vMix);
  a.rgb /= max(a.a, 0.004);
  a.a *= 1.0 + max(lod, 0.0) * 0.35;
  return a;
}
`;
/** the card's vertex work (the main pass: before its normal, which leans towards the eye; the shadow twin: begin_vertex): its corner
 *  (position.xy, 0 … 1) placed round the feet, turned to the eye (the light's side in the shadow pass: depth), the two views' texture
 *  coordinates, their blend, the rim's offset */
const FISH_CARD = (depth) => /* glsl */`
vec3 fCard; vec2 fTo;
{
  vec3 fP = aA.xyz;
  ${depth ? `fTo = vec2(viewMatrix[0][2], viewMatrix[2][2]); // (the light's side: the shadow camera's back, level)`
    : 'fTo = cameraPosition.xz - (modelMatrix * vec4(fP, 1.0)).xz;'}
  fTo /= max(length(fTo), 1e-5);
  vec2 fF = aB.xy;
  float fPhi = degrees(atan(dot(fTo, vec2(fF.y, -fF.x)), dot(fTo, fF))); // (0 his front, + his left, ±180 his back)
  float fMir = 0.0, fN = uFRing.y; // (the views: fN of them 45° apart from uFRing.x: the fishermen's five round their back half, clamped;
  // a cast of people's eight all round them (step 35f), wrapping)
  ${depth ? 'if (fN < 7.5 && abs(fPhi) < 90.0) { fPhi -= sign(fPhi) * 180.0; fMir = 1.0; } // (the sun in front of him: his outline from behind, mirrored)' : ''}
  fPhi += fPhi < 0.0 ? 360.0 : 0.0;
  float fT = (fPhi - uFRing.x) / 45.0, fI;
  if (fN > 7.5) { fT = mod(fT, 8.0); fI = floor(fT); } else { fT = clamp(fT, 0.0, fN - 1.0); fI = min(floor(fT), fN - 2.0); }
  ${depth ? 'float fB = 0.0; // (the light turns slowly: no blend)' : `vec2 fTo0 = uFishPrev.xz - (modelMatrix * vec4(fP, 1.0)).xz; fTo0 /= max(length(fTo0), 1e-5);
  float fB = min(abs(degrees(atan(fTo0.x * fTo.y - fTo0.y * fTo.x, dot(fTo0, fTo)))) * ${FISH_BLEND.toFixed(1)}, ${FISH_BLEND_MAX.toFixed(1)}) / 45.0;`}
  float fW = fB > 0.002 ? smoothstep(0.5 - fB, 0.5 + fB, fT - fI) : step(0.5, fT - fI);
  int fn = int(fN + 0.5), fs = int(aA.w + 0.5) * fn, ia = fs + int(fI), ib = fs + (int(fI) + 1) % fn;
  if (fW >= 1.0) { ia = ib; fW = 0.0; }
  vec4 tA = texelFetch(uFTab, ivec2(2 * ia, 0), 0), eA = texelFetch(uFTab, ivec2(2 * ia + 1, 0), 0);
  vec4 tB = texelFetch(uFTab, ivec2(2 * ib, 0), 0), eB = texelFetch(uFTab, ivec2(2 * ib + 1, 0), 0);
  if (fMir > 0.5) { tA.z = -tA.z; tB.z = -tB.z; eA.xy = -eA.yx; eB.xy = -eB.yx; }
  vec4 fE = fW > 0.0 ? vec4(min(eA.x, eB.x), max(eA.y, eB.y), min(eA.z, eB.z), max(eA.w, eB.w)) : eA;
  float fx = mix(fE.x, fE.y, position.x), fy = mix(fE.z, fE.w, position.y), fs2 = aB.z;
  vec2 fR = vec2(fTo.y, -fTo.x); // (the card's right, level)
  fCard = fP + vec3(fR.x * fx * fs2, fy * fs2, fR.y * fx * fs2);
  vMapUv = (tA.xy + vec2(tA.z * fx, -tA.w * fy)) / uFSize;
  vUvB = (tB.xy + vec2(tB.z * fx, -tB.w * fy)) / uFSize;
  vBoxA = (vec4(tA.x + min(tA.z * eA.x, tA.z * eA.y), tA.y - tA.w * eA.w, tA.x + max(tA.z * eA.x, tA.z * eA.y), tA.y - tA.w * eA.z)) / uFSize.xyxy;
  vBoxB = (vec4(tB.x + min(tB.z * eB.x, tB.z * eB.y), tB.y - tB.w * eB.w, tB.x + max(tB.z * eB.x, tB.z * eB.y), tB.y - tB.w * eB.z)) / uFSize.xyxy;
  vMix = fW;
  ${depth ? '' : `// (the rim: the edges of him towards the sun (along the card, and a little from above), when it stands beyond him from the eye)
  { vec2 sh = uSunDir.xz; float shl = length(sh); vec2 shn = sh / max(shl, 1e-4);
    vec2 ro = normalize(vec2(dot(fR, shn) * shl, max(uSunDir.y, 0.0) + 0.2));
    vRim = vec3(vec2(tA.z * ro.x, -tA.w * ro.y) * 0.015 / uFSize, shl > 1e-3 ? smoothstep(-0.2, 0.7, -dot(fTo, shn)) : 0.0); }`}
}`;
/** The fishermen's materials: { mat, depth, decal } (fishers.js). tex: the atlas (premultiplied, sRGB values, no decode: filtered as
 *  stored); tab: the views' table (a float DataTexture); size: the atlas's px. One program each, compiled at load (a Turkish start)
 *  or in Turkey's lazy load (main.js). (Step 35f: a cast of painted people is the same three programs on its own atlas: o.ring, its
 *  views' first azimuth and count (the fishermen's [90, 5], people's [0, 8]); o.T, o.rim: its tint and rim uniforms by the hour) */
export function makeFisherMaterials(tex, tab, size, o = {}) {
  const ring = o.ring || [90, 5], T = o.T || U.uFishT, RIM = o.rim || U.uFishRim;
  const FU = { uFTab: { value: tab }, uFSize: { value: new THREE.Vector2(size[0], size[1]) }, uFRing: { value: new THREE.Vector2(ring[0], ring[1]) }, uFishPrev: { value: new THREE.Vector3(0, -1e4, 0) } };
  // (cut out at alpha 0.5: alpha to coverage would cross-fade the outlines too, but some drivers dither it over the pixels (this box's
  // AMD: a screen door on the legs mid-change), so the outlines change at the blend's middle while the paint cross-fades)
  const m = new THREE.MeshToonMaterial({ map: tex, gradientMap: GRAD_CAR, alphaTest: 0.5 });
  m.shadowSide = THREE.DoubleSide; // (the shadow card faces the light: three would otherwise draw its back faces only)
  m.onBeforeCompile = sh => {
    Object.assign(sh.uniforms, FU); sh.uniforms.uFishT = T; sh.uniforms.uFishRim = RIM; sh.uniforms.uSunDir = U.uSunDir;
    worldShade(sh);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nuniform vec3 uSunDir;' + FISH_PARS_V)
      // (its normal up, leaning FISH_N towards the eye: the side of him we see is in the shade when we look into a low sun, lit when it
      // stands behind us; at noon the sky above lights him)
      .replace('#include <beginnormal_vertex>', FISH_CARD(false) + `\nvec3 objectNormal = normalize(vec3(fTo.x * ${FISH_N.toFixed(2)}, 1.0, fTo.y * ${FISH_N.toFixed(2)}));`)
      .replace('#include <begin_vertex>\nvWP = (modelMatrix * vec4(position, 1.0)).xyz;', 'vec3 transformed = fCard;\nvWP = (modelMatrix * vec4(transformed, 1.0)).xyz;')
      // (the shadow is looked up 0.45 m towards the sun: a figure's own shadow card, through his axis, never shades him)
      .replace('#include <shadowmap_vertex>', `#if defined( USE_SHADOWMAP )
{ vec2 sd = uSunDir.xz; float sl = length(sd); if (sl > 1e-3) worldPosition.xz += sd / sl * 0.45 * aB.z; }
#endif
#include <shadowmap_vertex>`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform vec3 uFishT; uniform vec4 uFishRim;').replace('#include <uv_pars_fragment>', '#include <uv_pars_fragment>' + FISH_PARS_F)
      .replace('#include <map_fragment>', `float fRim = 0.0;
{ vec4 fTx = fishTexel(map); diffuseColor.rgb *= sRGBTransferEOTF(vec4(fTx.rgb, 1.0)).rgb * uFishT; diffuseColor.a *= fTx.a;
  if (uFishRim.a > 0.0 && vRim.z > 0.01) { vec2 dx = dFdx(vMapUv), dy = dFdy(vMapUv); // (the figure's edge towards the sun: the alpha there falls off)
    fRim = clamp((textureGrad(map, vMapUv, dx, dy).a - textureGrad(map, vMapUv + vRim.xy, dx, dy).a) * 1.5, 0.0, 1.0) * vRim.z * uFishRim.a; } }`)
      .replace('#include <opaque_fragment>', 'outgoingLight += uFishRim.rgb * fRim;\n#include <opaque_fragment>');
  };
  m.customProgramCacheKey = () => 'fishers-v2';
  const d = new THREE.MeshDepthMaterial();
  d.onBeforeCompile = sh => {
    Object.assign(sh.uniforms, FU);
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>' + FISH_PARS_V).replace('#include <begin_vertex>', FISH_CARD(true) + '\nvec3 transformed = fCard;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <uv_pars_fragment>', '#include <uv_pars_fragment>' + FISH_PARS_F).replace('#include <map_fragment>', 'diffuseColor.a *= fishTexel(map).a;');
  };
  d.customProgramCacheKey = () => 'fishers-depth-v2';
  // the contact shadow under each: a soft ellipse on the walkway (blue-grey, as the paintings' shade), faded by the fog
  const decal = new THREE.ShaderMaterial({
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, { uK: { value: 0.4 } }]),
    vertexShader: /* glsl */`
attribute vec4 aA, aB;
varying vec2 vC; varying float vFd;
void main() {
  vec2 c = position.xy * 2.0 - 1.0; vC = c;
  vec2 f = aB.xy, l = vec2(f.y, -f.x); float s = aB.z, r = aB.w > 1.5 ? 0.5 : 0.38; // (aB.w: the pose, 2 seated: the stool and his feet)
  vec3 p = aA.xyz + vec3(l.x * c.x * r * s + f.x * (c.y * 0.42 + 0.08) * s, 0.02, l.y * c.x * r * s + f.y * (c.y * 0.42 + 0.08) * s);
  vec4 mv = modelViewMatrix * vec4(p, 1.0); vFd = -mv.z; gl_Position = projectionMatrix * mv;
}`,
    fragmentShader: /* glsl */`
uniform float uK, fogNear;
varying vec2 vC; varying float vFd;
void main() {
  float r2 = dot(vC, vC); if (r2 >= 1.0) discard;
  float a = uK * (1.0 - r2) * (1.0 - r2) * exp(-fogNear * fogNear * vFd * vFd);
  gl_FragColor = vec4(0.05, 0.07, 0.14, a);
}`,
    transparent: true, depthWrite: false, fog: true, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2,
  });
  return { mat: m, depth: d, decal, FU };
}
