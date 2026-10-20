// Drifting sakura petals and night fireflies around the camera.
import * as THREE from 'three';

export function makeParticles(glowTex) {
  const N = 420;
  const petalGeo = new THREE.PlaneGeometry(0.075, 0.05);
  const petalMat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#ffd0de'), side: THREE.DoubleSide });
  const petals = new THREE.InstancedMesh(petalGeo, petalMat, N);
  petals.frustumCulled = false; petals.count = 0;
  const P = Array.from({ length: N }, () => ({ p: new THREE.Vector3(1e9, 0, 0), v: 0.5 + Math.random() * 0.7, ph: Math.random() * 6.28, sp: 0.6 + Math.random() * 1.6 }));
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), sc = new THREE.Vector3(1, 1, 1), rel = new THREE.Vector3();

  const FN = 90, fpos = new Float32Array(FN * 3), F = Array.from({ length: FN }, () => ({ p: new THREE.Vector3(1e9, 0, 0), ph: Math.random() * 6.28 }));
  const fg = new THREE.BufferGeometry(); fg.setAttribute('position', new THREE.BufferAttribute(fpos, 3));
  const fmat = new THREE.PointsMaterial({ color: 0xd8ff8a, size: 0.35, map: glowTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 });
  const flies = new THREE.Points(fg, fmat); flies.frustumCulled = false;

  const respawn = (o, cam, fwd, right, ahead) => {
    const a = ahead ? 8 + Math.random() * 42 : -4 + Math.random() * 50, l = (Math.random() - 0.5) * 40;
    o.p.set(cam.x + fwd.x * a + right.x * l, cam.y - 1 + Math.random() * 9, cam.z + fwd.z * a + right.z * l);
  };
  return {
    group: [petals, flies],
    shift(dx, dz) { for (const o of P) { o.p.x -= dx; o.p.z -= dz; } for (const o of F) { o.p.x -= dx; o.p.z -= dz; } },
    update(dt, t, cam, fwd, right, wSakura, groundY, night, wFly) {
      const n = Math.floor(N * Math.min(1, wSakura * 1.1));
      petals.count = n;
      for (let i = 0; i < n; i++) {
        const o = P[i];
        rel.subVectors(o.p, cam);
        const along = rel.x * fwd.x + rel.z * fwd.z, side = rel.x * right.x + rel.z * right.z;
        if (o.p.x > 1e8 || along < -6 || along > 55 || Math.abs(side) > 24 || o.p.y < groundY - 0.5) respawn(o, cam, fwd, right, o.p.x < 1e8);
        o.p.y -= o.v * dt;
        o.p.x += Math.sin(t * 0.7 + o.ph) * 0.4 * dt + 0.25 * dt; o.p.z += Math.cos(t * 0.5 + o.ph) * 0.3 * dt;
        e.set(t * o.sp + o.ph, t * o.sp * 0.7, o.ph); q.setFromEuler(e);
        m.compose(o.p, q, sc); petals.setMatrixAt(i, m);
      }
      petals.instanceMatrix.needsUpdate = true;
      const fa = night * wFly;
      fmat.opacity = fa;
      flies.visible = fa > 0.01;
      if (flies.visible) {
        for (let i = 0; i < FN; i++) {
          const o = F[i]; rel.subVectors(o.p, cam);
          const along = rel.x * fwd.x + rel.z * fwd.z, side = rel.x * right.x + rel.z * right.z;
          if (o.p.x > 1e8 || along < -4 || along > 60 || Math.abs(side) > 30) { const a = 2 + Math.random() * 55, l = (Math.random() - 0.5) * 55; o.p.set(cam.x + fwd.x * a + right.x * l, groundY + 0.3 + Math.random() * 2.2, cam.z + fwd.z * a + right.z * l); }
          o.p.x += Math.sin(t * 0.6 + o.ph * 3) * 0.3 * dt; o.p.y += Math.sin(t * 0.9 + o.ph) * 0.2 * dt; o.p.z += Math.cos(t * 0.5 + o.ph * 2) * 0.3 * dt;
          fpos[i * 3] = o.p.x; fpos[i * 3 + 1] = o.p.y; fpos[i * 3 + 2] = o.p.z;
        }
        fg.attributes.position.needsUpdate = true;
      }
    },
  };
}
