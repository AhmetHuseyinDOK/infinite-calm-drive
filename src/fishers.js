// The Galata Bridge's fishermen as painted figures (step 35a: the user, "that fisherman was bad"; anime means high quality). Each
// fisherman is a painting: twelve men from Grok Imagine turnaround sheets (four holding the rod in both hands, four leaning their
// forearms on the railing, four on camping stools), each sheet five views round his back half (his left side, back three-quarter,
// back, the other three-quarter, his right side: the road side only ever sees a fisherman from his side round to his back), cut on
// their magenta and packed into the people atlas (painted.js loadFisherAtlas). They are drawn as one instanced card each, all of them
// in one draw (and one more for the soft contact shadows under them): the card turned to the camera round its upright axis and the
// view picked from where the camera stands round him, both in the vertex shader (materials.js makeFisherMaterials), the two nearest
// views cross-faded over as many degrees as the camera turns round him in a few frames, so a passing car sees no jump. Their rods,
// lines, buckets, bags and tackle boxes stay 3D (props.js paintedFisher, drawn with the chunk's props: the hold pose's rod leaves his
// painted hands where the five views agree they are). The instances come from the bridge's chunks (chunks.js: each chunk's fishers,
// chunk-local), gathered here only when a chunk comes or goes (World.fishVer): per frame the meshes only follow the world's origin
// and the camera's place a frame ago is handed to the shader
import * as THREE from 'three';
import { makeFisherMaterials } from './materials.js';

const CAP = 224; // (a Galata pass has ~100 fishermen in 1.4 km; the chunks kept round the car hold ~60)

/** the views' table: per sheet and view (five each: phi 90, 135, 180, −135, −90) two texels: the feet's place in the atlas (px of this
 *  tier), its px a metre signed by the mirror, its px a metre; the card's reach round the feet (m: left, right, below, above). A float
 *  DataTexture read with texelFetch in the vertex shader */
function fishTable(J, k) {
  const S = J.sheets, n = S.length * 5, d = new Float32Array(n * 2 * 4);
  S.forEach((sh, si) => sh.views.forEach(([ci, mir], j) => {
    const c = J.cells[ci], ppm = J.ppm, o = (si * 5 + j) * 8;
    const xl = -c.ax / ppm, xr = (c.w - c.ax) / ppm, yb = -(c.h - c.fy) / ppm, yt = c.fy / ppm;
    d[o] = (c.x + c.ax) * k; d[o + 1] = (c.y + c.fy) * k; d[o + 2] = (mir ? -ppm : ppm) * k; d[o + 3] = ppm * k;
    d[o + 4] = mir ? -xr : xl; d[o + 5] = mir ? -xl : xr; d[o + 6] = yb; d[o + 7] = yt;
  }));
  const t = new THREE.DataTexture(d, n * 2, 1, THREE.RGBAFormat, THREE.FloatType);
  t.minFilter = t.magFilter = THREE.NearestFilter; t.generateMipmaps = false; t.needsUpdate = true;
  return t;
}
/** a unit quad's corners (0 … 1) as the cards and the decals take them */
function quad(normals) {
  const g = new THREE.InstancedBufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0], 3));
  if (normals) { g.setAttribute('normal', new THREE.Float32BufferAttribute([0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 1, 0, 1, 1, 0, 1], 2)); }
  g.setIndex([0, 1, 2, 0, 2, 3]);
  return g;
}
/** fa: the atlas (painted.js loadFisherAtlas). Returns { mesh, decal, mat, depth, decalMat, update(world, show, k) } */
export function makeFishers(fa) {
  // (the atlas as stored: premultiplied sRGB, rows from the top as the index counts them, filtered as it is; made here, with the rest)
  const tex = new THREE.Texture(fa.img);
  tex.colorSpace = THREE.NoColorSpace; tex.flipY = false; tex.premultiplyAlpha = false;
  tex.generateMipmaps = true; tex.minFilter = THREE.LinearMipmapLinearFilter; tex.magFilter = THREE.LinearFilter; tex.needsUpdate = true;
  const tab = fishTable(fa.J, fa.scale), M = makeFisherMaterials(tex, tab, fa.size);
  const A = new THREE.InstancedBufferAttribute(new Float32Array(CAP * 4), 4), B = new THREE.InstancedBufferAttribute(new Float32Array(CAP * 4), 4);
  A.setUsage(THREE.DynamicDrawUsage); B.setUsage(THREE.DynamicDrawUsage);
  const g = quad(true), g2 = quad(false), sph = new THREE.Sphere(new THREE.Vector3(), 1);
  for (const q of [g, g2]) { q.setAttribute('aA', A); q.setAttribute('aB', B); q.instanceCount = 0; q.boundingSphere = sph; }
  // (drawn first of the opaque meshes: their material is made last, so they would be drawn after the walkway, the railing and the far ground
  // they stand in front of, all shaded and then covered; drawn first, the depth test skips what they cover, as it did behind the old figures)
  const mesh = new THREE.Mesh(g, M.mat); mesh.customDepthMaterial = M.depth; mesh.castShadow = mesh.receiveShadow = true; mesh.renderOrder = -1;
  const decal = new THREE.Mesh(g2, M.decal); decal.renderOrder = 1; // (after the walkway's markings)
  mesh.visible = decal.visible = false;
  let ver = -1; const anchor = { x: 0, z: 0 }, prev = { x: 0, y: -1e4, z: 0 }; // (the camera a frame ago, absolute: the views' blend)
  /** gathers the chunks' fishermen (positions from the anchor: the world's origin now) */
  function sync(world) {
    ver = world.fishVer; anchor.x = world.origin.x; anchor.z = world.origin.z;
    const a = A.array, b = B.array; let n = 0, cx = 0, cy = 0, cz = 0;
    for (const ch of world.chunks.values()) {
      const F = ch.fishers; if (!F) continue;
      const dx = ch.ox - anchor.x, dz = ch.oz - anchor.z;
      for (let i = 0; i + 7 < F.length && n < CAP; i += 8, n++) {
        const o = n * 4;
        a[o] = F[i] + dx; a[o + 1] = F[i + 1]; a[o + 2] = F[i + 2] + dz; a[o + 3] = F[i + 6];
        b[o] = F[i + 3]; b[o + 1] = F[i + 4]; b[o + 2] = F[i + 5]; b[o + 3] = F[i + 7];
        cx += a[o]; cy += a[o + 1]; cz += a[o + 2];
      }
    }
    g.instanceCount = g2.instanceCount = n;
    if (n) {
      sph.center.set(cx / n, cy / n, cz / n); let r = 0;
      for (let i = 0; i < n; i++) r = Math.max(r, Math.hypot(a[i * 4] - sph.center.x, a[i * 4 + 1] - sph.center.y, a[i * 4 + 2] - sph.center.z));
      sph.radius = r + 4;
      A.clearUpdateRanges(); B.clearUpdateRanges(); A.addUpdateRange(0, n * 4); B.addUpdateRange(0, n * 4); A.needsUpdate = B.needsUpdate = true;
    }
  }
  return {
    mesh, decal, tex, mat: M.mat, depth: M.depth, decalMat: M.decal,
    get count() { return g.instanceCount; },
    /** per frame: re-gathered only when a chunk came or went; the meshes follow the world's origin; the camera's place a frame ago
     *  (its turn round each figure sets how wide the views' blend is). show: the test switch (st.fish); k: the contact shadows' strength */
    update(world, cam, show, k) {
      if (world.fishVer !== ver) sync(world);
      const o = world.origin, cp = cam.position; M.FU.uFishPrev.value.set(prev.x - o.x, prev.y, prev.z - o.z); prev.x = cp.x + o.x; prev.y = cp.y; prev.z = cp.z + o.z;
      mesh.position.set(anchor.x - world.origin.x, 0, anchor.z - world.origin.z); decal.position.copy(mesh.position);
      mesh.visible = show > 0 && g.instanceCount > 0; decal.visible = mesh.visible && k > 0.005;
      M.decal.uniforms.uK.value = k;
    },
  };
}
