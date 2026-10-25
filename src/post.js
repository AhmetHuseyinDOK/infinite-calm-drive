// Post: bloom + a final anime grade (saturation, cool shadows / warm highlights, sun streaks, lens ghosts, vignette).
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';

/** Copies the frame's light (HDR, right after the scene is drawn) into a ⅛-size map for the wet-road reflections in the
 *  ground shader, which read it the next frame. Enabled only while the road is wet. */
class ReflCopyPass extends Pass {
  constructor() {
    super(); this.needsSwap = false; this.enabled = false;
    this.rt = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, depthBuffer: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, generateMipmaps: false });
    this.mat = new THREE.ShaderMaterial({
      uniforms: { tDiffuse: { value: null }, uTexel: { value: new THREE.Vector2(1, 1) } },
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
      fragmentShader: `uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
        void main(){ vec2 o = uTexel; gl_FragColor = 0.25 * (texture2D(tDiffuse, vUv - o) + texture2D(tDiffuse, vUv + o) + texture2D(tDiffuse, vUv + vec2(o.x, -o.y)) + texture2D(tDiffuse, vUv + vec2(-o.x, o.y))); }`,
      depthTest: false, depthWrite: false,
    });
    this.quad = new FullScreenQuad(this.mat);
  }
  setSize(w, h) { this.rt.setSize(Math.max(1, Math.floor(w / 8)), Math.max(1, Math.floor(h / 8))); this.mat.uniforms.uTexel.value.set(2 / w, 2 / h); } // ⅛ size: the streaks are soft anyway
  render(renderer, writeBuffer, readBuffer) { // every other frame: soft wet reflections don't need 60 updates a second
    if ((this.frame = (this.frame | 0) + 1) % 2 === 0) return; // (the first call renders: the load-time warm-up compiles it)
    this.mat.uniforms.tDiffuse.value = readBuffer.texture; renderer.setRenderTarget(this.rt); this.quad.render(renderer);
  }
}

/** Phones' bloom: UnrealBloomPass's glow (the light over its threshold, spread over five widths from ~4 to ~250 pixels
 *  and summed) for a fraction of its cost. All of it at a quarter of the frame's size or less: the high pass takes four
 *  taps on exactly the texels of the desktop's half-size high pass (each the average of 2×2 pixels, thresholded), so
 *  the same strokes of a neon sign glow as there; each mip's Gaussian has the same width in screen pixels with half the
 *  taps; and the sum is added in the grade pass, not blended into the frame by a full-size pass of its own. */
const BLOOM_F = [1.0, 0.8, 0.6, 0.4, 0.2]; // (UnrealBloomPass's mip weights, mirrored by `radius`)
const VS_QUAD = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }';
function bloomBlur(k) { // UnrealBloomPass's separable Gaussian (σ = k/3 texels; taps paired into bilinear fetches), its weights as constants
  const c = [], sg = k / 3, f = x => x.toFixed(6); for (let i = 0; i < k; i++) c.push(0.39894 * Math.exp(-0.5 * i * i / (sg * sg)) / sg);
  let taps = '';
  for (let i = 1; i < k; i += 2) { const a = c[i], b = i + 1 < k ? c[i + 1] : 0, o = (i * a + (i + 1) * b) / (a + b); taps += ` s += (texture2D(tSrc, vUv + uStep * ${f(o)}).rgb + texture2D(tSrc, vUv - uStep * ${f(o)}).rgb) * ${f(a + b)};`; }
  return new THREE.ShaderMaterial({ uniforms: { tSrc: { value: null }, uStep: { value: new THREE.Vector2() } }, vertexShader: VS_QUAD, depthTest: false, depthWrite: false,
    fragmentShader: `uniform sampler2D tSrc; uniform vec2 uStep; varying vec2 vUv; void main(){ vec3 s = texture2D(tSrc, vUv).rgb * ${f(c[0])};${taps} gl_FragColor = vec4(s, 1.0); }` });
}
class LiteBloomPass extends Pass {
  constructor() {
    super(); this.needsSwap = false; this.strength = 1; this.radius = 0; this.threshold = 1;
    const rt = () => new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, depthBuffer: false, generateMipmaps: false });
    this.bright = rt(); this.rtH = []; this.rtV = []; this.blur = [];
    for (let i = 0; i < 5; i++) { this.rtH.push(rt()); this.rtV.push(rt()); this.blur.push(bloomBlur(3 + 2 * i)); } // (σ 1 … 3.7 texels at ¼ … 1/64 size: the desktop's 2 … 7.3 at ½ … 1/32)
    // (uHalf: the desktop's half-size grid; this pass's texel j covers its texels 2j and 2j + 1 in each direction)
    this.high = new THREE.ShaderMaterial({ uniforms: { tDiffuse: { value: null }, uHalf: { value: new THREE.Vector2(1, 1) }, uThreshold: { value: 1 } }, vertexShader: VS_QUAD, depthTest: false, depthWrite: false,
      fragmentShader: `uniform sampler2D tDiffuse; uniform vec2 uHalf; uniform float uThreshold;
        vec3 hp(vec2 p){ vec3 c = texture2D(tDiffuse, p / uHalf).rgb; return c * smoothstep(uThreshold, uThreshold + 0.01, luminance(c)); }
        void main(){ vec2 p = floor(gl_FragCoord.xy) * 2.0 + 0.5; gl_FragColor = vec4(0.25 * (hp(p) + hp(p + vec2(1.0, 0.0)) + hp(p + vec2(0.0, 1.0)) + hp(p + 1.0)), 1.0); }` });
    this.comp = new THREE.ShaderMaterial({ uniforms: { t0: { value: this.rtV[0].texture }, t1: { value: this.rtV[1].texture }, t2: { value: this.rtV[2].texture }, t3: { value: this.rtV[3].texture }, t4: { value: this.rtV[4].texture }, uW: { value: [0, 0, 0, 0, 0] } },
      vertexShader: VS_QUAD, depthTest: false, depthWrite: false,
      fragmentShader: `uniform sampler2D t0, t1, t2, t3, t4; uniform float uW[5]; varying vec2 vUv;
        void main(){ gl_FragColor = vec4(uW[0] * texture2D(t0, vUv).rgb + uW[1] * texture2D(t1, vUv).rgb + uW[2] * texture2D(t2, vUv).rgb + uW[3] * texture2D(t3, vUv).rgb + uW[4] * texture2D(t4, vUv).rgb, 1.0); }` });
    this.texture = this.rtH[0].texture; this.uvScale = new THREE.Vector2(1, 1); // (the composite, and the scale from the frame's uv to its: the grade pass adds it)
    this.quad = new FullScreenQuad(null); this.clearColor = new THREE.Color(0, 0, 0); this.oldClear = new THREE.Color();
  }
  setSize(w, h) {
    const hx = Math.max(1, Math.round(w / 2)), hy = Math.max(1, Math.round(h / 2)); // (the desktop's half-size grid, as UnrealBloomPass)
    let x = Math.ceil(hx / 2), y = Math.ceil(hy / 2);
    this.high.uniforms.uHalf.value.set(hx, hy); this.uvScale.set(hx / (2 * x), hy / (2 * y)); this.bright.setSize(x, y);
    for (let i = 0; i < 5; i++) { this.rtH[i].setSize(x, y); this.rtV[i].setSize(x, y); x = Math.max(1, Math.round(x / 2)); y = Math.max(1, Math.round(y / 2)); }
  }
  draw(renderer, m, target) { this.quad.material = m; renderer.setRenderTarget(target); renderer.clear(); this.quad.render(renderer); }
  render(renderer, writeBuffer, readBuffer) {
    const ac = renderer.autoClear, ca = renderer.getClearAlpha(); renderer.getClearColor(this.oldClear);
    renderer.autoClear = false; renderer.setClearColor(this.clearColor, 0);
    this.high.uniforms.tDiffuse.value = readBuffer.texture; this.high.uniforms.uThreshold.value = this.threshold;
    this.draw(renderer, this.high, this.bright);
    let src = this.bright;
    for (let i = 0; i < 5; i++) {
      const m = this.blur[i], u = m.uniforms, H = this.rtH[i], V = this.rtV[i];
      u.tSrc.value = src.texture; u.uStep.value.set(1 / H.width, 0); this.draw(renderer, m, H);
      u.tSrc.value = H.texture; u.uStep.value.set(0, 1 / V.height); this.draw(renderer, m, V);
      src = V;
    }
    const w = this.comp.uniforms.uW.value, k = 3 * this.strength; // (3: as UnrealBloomPass's composite)
    for (let i = 0; i < 5; i++) w[i] = k * (BLOOM_F[i] + (1.2 - 2 * BLOOM_F[i]) * this.radius);
    this.draw(renderer, this.comp, this.rtH[0]);
    renderer.setClearColor(this.oldClear, ca); renderer.autoClear = ac;
  }
}

const GradeShader = {
  uniforms: {
    tDiffuse: { value: null }, toneMappingExposure: { value: 1 }, uSun: { value: new THREE.Vector2(0.5, 0.8) }, uSunVis: { value: 0 }, uDay: { value: 1 }, uWarm: { value: 0 },
    uTime: { value: 0 }, uAspect: { value: 1 }, uVig: { value: 0.55 }, uSat: { value: 1.1 }, uTexel: { value: new THREE.Vector2(1 / 1280, 1 / 720) },
    uLo: { value: new THREE.Vector3(-0.014, 0.0, 0.03) }, tBloom: { value: null }, uBloomK: { value: 0 }, uBloomUv: { value: new THREE.Vector2(1, 1) },
  },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: /* glsl */`
    // tone mapping + sRGB output and the anime grade in ONE full-screen pass (was OutputPass + a separate grade pass)
    #include <tonemapping_pars_fragment>
    uniform sampler2D tDiffuse; uniform vec2 uSun; uniform float uSunVis, uDay, uWarm, uTime, uAspect, uVig, uSat; uniform vec3 uLo; varying vec2 vUv;
    #ifdef LITE_BLOOM
    uniform sampler2D tBloom; uniform float uBloomK; uniform vec2 uBloomUv; // (phones: the bloom, added here)
    #endif
    float h11(float p){ p = fract(p * .1031); p *= p + 33.33; p *= p + p; return fract(p); }
    float n1(float x){ float i = floor(x), f = fract(x); return mix(h11(i), h11(i + 1.0), f * f * (3.0 - 2.0 * f)); }
    #ifdef USE_FXAA
    // FXAA (the classic 5 + 4 tap version) on the HDR input, with a tone-mapped luma: smooths edges in this same pass, so
    // phones can drop MSAA (its 2× buffer and resolve were up to a third of the frame on a mobile-class GPU)
    uniform vec2 uTexel;
    float fxLuma(vec3 c){ float l = dot(c, vec3(0.299, 0.587, 0.114)); return sqrt(l / (1.0 + l)); }
    vec3 fxaa(vec2 uv){
      vec3 nw = texture2D(tDiffuse, uv + vec2(-1.0, -1.0) * uTexel).rgb, ne = texture2D(tDiffuse, uv + vec2(1.0, -1.0) * uTexel).rgb;
      vec3 sw = texture2D(tDiffuse, uv + vec2(-1.0, 1.0) * uTexel).rgb, se = texture2D(tDiffuse, uv + vec2(1.0, 1.0) * uTexel).rgb;
      vec3 m = texture2D(tDiffuse, uv).rgb;
      float lnw = fxLuma(nw), lne = fxLuma(ne), lsw = fxLuma(sw), lse = fxLuma(se), lm = fxLuma(m);
      float lmin = min(lm, min(min(lnw, lne), min(lsw, lse))), lmax = max(lm, max(max(lnw, lne), max(lsw, lse)));
      if (lmax - lmin < max(0.03, lmax * 0.1)) return m;
      vec2 dir = vec2(-((lnw + lne) - (lsw + lse)), (lnw + lsw) - (lne + lse));
      float red = max((lnw + lne + lsw + lse) * 0.03125, 0.0078125);
      dir = clamp(dir / (min(abs(dir.x), abs(dir.y)) + red), vec2(-8.0), vec2(8.0)) * uTexel;
      vec3 a = 0.5 * (texture2D(tDiffuse, uv - dir / 6.0).rgb + texture2D(tDiffuse, uv + dir / 6.0).rgb);
      vec3 b = 0.5 * a + 0.25 * (texture2D(tDiffuse, uv - dir * 0.5).rgb + texture2D(tDiffuse, uv + dir * 0.5).rgb);
      float lb = fxLuma(b);
      return (lb < lmin || lb > lmax) ? a : b;
    }
    #endif
    void main(){
      #ifdef USE_FXAA
      vec4 src = vec4(fxaa(vUv), 1.0);
      #else
      vec4 src = texture2D(tDiffuse, vUv);
      #endif
      #ifdef LITE_BLOOM
      if (uBloomK > 0.0) src.rgb += texture2D(tBloom, vUv * uBloomUv).rgb;
      #endif
      src.rgb = NeutralToneMapping(src.rgb);
      vec3 c = sRGBTransferOETF(src).rgb;
      float l = dot(c, vec3(0.299, 0.587, 0.114));
      c = mix(vec3(l), c, uSat);
      c += uLo * (1.0 - l) + vec3(0.03, 0.014, -0.018) * l * uDay; // cool shadows (indigo on a bright day), warm highlights
      if (uSunVis > 0.001) { // sun streaks and lens ghosts only while the sun is on screen
        vec2 d = vUv - uSun; d.x *= uAspect; float dist = length(d), ang = atan(d.y, d.x);
        vec3 rc = mix(vec3(1.0, 0.97, 0.88), vec3(1.0, 0.78, 0.52), uWarm);
        float rays = pow(n1(ang * 7.0 + 3.0) * 0.55 + n1(ang * 19.0 - uTime * 0.03) * 0.45, 2.6);
        c += rc * rays * exp(-dist * 1.5) * 0.2 * uSunVis;
        c += rc * exp(-dist * 4.5) * 0.12 * uSunVis;
        vec2 axis = vec2(0.5) - uSun;
        for (int i = 1; i <= 3; i++) {
          vec2 gp = uSun + axis * (0.55 + float(i) * 0.42), gd = vUv - gp; gd.x *= uAspect;
          float g = 1.0 - smoothstep(0.0, 0.05 + float(i) * 0.025, length(gd));
          c += rc * g * 0.045 * uSunVis;
        }
      }
      vec2 v = vUv - 0.5; c *= 1.0 - dot(v, v) * uVig;
      gl_FragColor = vec4(c, 1.0);
    }`,
};

/** `lite`: phones' bloom (LiteBloomPass), else three's UnrealBloomPass at half size */
export function makePost(renderer, scene, camera, { msaa = 4, fxaa = false, scale = 1, lite = false } = {}) {
  const size = renderer.getSize(new THREE.Vector2());
  const rt = new THREE.WebGLRenderTarget(size.x * renderer.getPixelRatio(), size.y * renderer.getPixelRatio(), { type: THREE.HalfFloatType, samples: msaa });
  const composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));
  const refl = new ReflCopyPass(); composer.addPass(refl);
  const bloom = lite ? new LiteBloomPass() : new UnrealBloomPass(new THREE.Vector2(size.x * scale * 0.5, size.y * scale * 0.5), 0.42, 0.55, 0.86);
  composer.addPass(bloom);
  const grade = new ShaderPass(GradeShader);
  grade.material.defines = { NEUTRAL_TONE_MAPPING: '' };
  if (fxaa) grade.material.defines.USE_FXAA = '';
  if (lite) { grade.material.defines.LITE_BLOOM = ''; grade.uniforms.tBloom.value = bloom.texture; grade.uniforms.uBloomUv.value = bloom.uvScale; }
  grade.material.toneMapped = false;
  composer.addPass(grade);
  const render = composer.render.bind(composer);
  composer.render = dt => { grade.uniforms.toneMappingExposure.value = renderer.toneMappingExposure; grade.uniforms.uBloomK.value = bloom.enabled ? 1 : 0; render(dt); };
  return { composer, bloom, grade, refl };
}
