import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { useDesign, viewerApi } from '../store/designStore.js';
import { wallBoxes } from '../kernel/walls.js';
import { circleHitsWalls } from '../kernel/collision.js';
import { clamp } from '../kernel/geometry.js';
import { itemById } from '../data/catalog.js';
import { floorById, paintById } from '../data/materials.js';
import { floorTexture } from './textures.js';

// Rugs are floor coverings, not furniture, so they should always sit visually
// underneath everything else regardless of the order they were placed in.
const drawOrder = furniture => [...furniture].sort((a, b) => {
  const ra = itemById(a.itemId)?.rug ? 0 : 1;
  const rb = itemById(b.itemId)?.rug ? 0 : 1;
  return ra - rb;
});

export default function ThreeViewer() {
  const mountRef = useRef(null);
  const viewMode = useDesign(s => s.viewMode);
  const walkRef = useRef({ x: 30, z: 34, yaw: Math.PI, pitch: 0, keys: {}, fwd: 0 });

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();

    // ---- warm daylight atmosphere ----
    const SKY = '#F4EFE6';
    scene.background = new THREE.Color(SKY);
    scene.fog = new THREE.Fog(SKY, 140, 340);

    const camera = new THREE.PerspectiveCamera(55, mount.clientWidth / mount.clientHeight, 0.1, 600);
    camera.position.set(52, 40, 52);
    camera.rotation.order = 'YXZ';

    const coarse = matchMedia('(pointer: coarse)').matches;
    const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(devicePixelRatio, coarse ? 1.5 : 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    renderer.domElement.style.touchAction = 'none';
    mount.appendChild(renderer.domElement);

    // warm sky bounce + gentle cool fill so shadow sides never go muddy
    scene.add(new THREE.HemisphereLight('#FFF4E2', '#8C8577', 0.75));
    const fill = new THREE.DirectionalLight('#DCE6EE', 0.45);
    fill.position.set(-45, 35, -35);
    scene.add(fill);

    const sun = new THREE.DirectionalLight('#fff3e0', 2.2);
    sun.castShadow = true;
    sun.shadow.mapSize.set(coarse ? 1024 : 2048, coarse ? 1024 : 2048);
    Object.assign(sun.shadow.camera, { left: -45, right: 45, top: 45, bottom: -45, far: 250 });
    sun.shadow.bias = -0.0004;
    sun.target.position.set(30, 0, 30);
    scene.add(sun, sun.target);

    // sage lawn + pale foundation slab under the 60 ft site
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(500, 500),
      new THREE.MeshStandardMaterial({ color: '#A8B79A', roughness: 1 })
    );
    ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true;
    scene.add(ground);

    const slab = new THREE.Mesh(
      new THREE.PlaneGeometry(60.8, 60.8),
      new THREE.MeshStandardMaterial({ color: '#DED5C4', roughness: 0.95 })
    );
    slab.rotation.x = -Math.PI / 2; slab.position.set(30, 0.005, 30); slab.receiveShadow = true;
    scene.add(slab);

    const grid = new THREE.GridHelper(60, 60, 0xCBC2B2, 0xE4DCCE);
    grid.position.set(30, 0.015, 30);
    scene.add(grid);

    const house = new THREE.Group();
    scene.add(house);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(22, 3, 18);
    controls.maxPolarAngle = Math.PI / 2 - 0.04;
    controls.enableDamping = true;

    // drag-to-look in walk mode
    let look = null;
    const el = renderer.domElement;
    const pd = e => { if (useDesign.getState().viewMode === 'walk') { look = [e.clientX, e.clientY]; el.setPointerCapture(e.pointerId); } };
    const pm = e => {
      if (!look) return;
      const wk = walkRef.current;
      wk.yaw -= (e.clientX - look[0]) * 0.005;
      wk.pitch = clamp(wk.pitch - (e.clientY - look[1]) * 0.004, -1.2, 1.2);
      look = [e.clientX, e.clientY];
    };
    const pu = () => { look = null; };
    el.addEventListener('pointerdown', pd); el.addEventListener('pointermove', pm); el.addEventListener('pointerup', pu);

    const kd = e => { walkRef.current.keys[e.key.toLowerCase()] = true; };
    const ku = e => { walkRef.current.keys[e.key.toLowerCase()] = false; };
    window.addEventListener('keydown', kd); window.addEventListener('keyup', ku);

    // ---- shared per-part materials (base tone + catalog shade offset) -----
    const matCache = new Map();
    const matFor = (hex, sh = 0) => {
      const key = `${String(hex).trim()}|${sh || 0}`;
      let m = matCache.get(key);
      if (!m) {
        const c = new THREE.Color(String(hex).trim());
        if (sh) {
          const hsl = {}; c.getHSL(hsl);
          c.setHSL(hsl.h, hsl.s, Math.min(0.95, Math.max(0.05, hsl.l + sh)));
        }
        m = new THREE.MeshStandardMaterial({ color: c, roughness: 0.85 });
        m.userData.shared = true;                  // cached across rebuilds — never dispose
        matCache.set(key, m);
      }
      return m;
    };

    // ---- rebuild house from store ------------------------------------------
    let queued = true;
    const rebuild = () => {
      house.traverse(o => {
        if (o.isMesh) {
          o.geometry.dispose();
          if (!o.material.userData?.shared) o.material.dispose?.();
        }
      });
      house.clear();
      const s = useDesign.getState();

      for (const r of s.rooms) {
        const mat = floorById(s.roomMaterials[r.id]);
        const shape = new THREE.Shape(r.poly.map(([x, z]) => new THREE.Vector2(x, -z)));
        const m = mat
          ? new THREE.MeshStandardMaterial({ map: floorTexture(mat), roughness: 0.9 })
          : new THREE.MeshStandardMaterial({ color: '#CFC8BA', roughness: 0.95 });   // warm bare concrete
        const mesh = new THREE.Mesh(new THREE.ShapeGeometry(shape), m);
        mesh.rotation.x = -Math.PI / 2; mesh.position.y = 0.03; mesh.receiveShadow = true;
        house.add(mesh);
      }

      for (const w of s.walls) {
        const paint = paintById(s.wallMaterials[w.id]);
        const mat = new THREE.MeshStandardMaterial({ color: paint ? paint.color : '#F5F0E6', roughness: 0.92 }); // warm plaster white
        for (const b of wallBoxes(w)) {
          const mesh = new THREE.Mesh(new THREE.BoxGeometry(b.sx, b.sy, b.sz), mat);
          mesh.position.set(b.cx, b.cy, b.cz); mesh.rotation.y = b.rotY;
          mesh.castShadow = mesh.receiveShadow = true;
          house.add(mesh);
        }
      }

      for (const f of drawOrder(s.furniture)) {
        const item = itemById(f.itemId);
        if (!item) continue;
        const g = new THREE.Group();
        for (const p of item.parts) {
          const mesh = new THREE.Mesh(
            new THREE.BoxGeometry(p.w, p.y1 - p.y0, p.d),
            matFor(f.tint || item.color, f.tint ? 0 : p.sh)   // user tint overrides part shading
          );
          mesh.position.set(p.dx, (p.y0 + p.y1) / 2, p.dz);
          mesh.castShadow = true;
          mesh.receiveShadow = !!item.rug;              // rugs pick up shadows from what's on them
          mesh.renderOrder = item.rug ? 0 : 1;           // rugs draw first, one layer behind other furniture
          g.add(mesh);
        }
        g.position.set(f.pos[0], 0, f.pos[1]);
        g.rotation.y = f.rotDeg * Math.PI / 180;
        g.scale.set(f.sw ?? 1, f.sw ?? 1, f.sd ?? 1);   // height follows width
        house.add(g);
      }
    };
    const unsub = useDesign.subscribe(() => { queued = true; });

    // ---- loop ---------------------------------------------------------------
    let prevMode = null;
    const clock = new THREE.Clock();
    let raf;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const dt = Math.min(clock.getDelta(), 0.05);
      const s = useDesign.getState();
      if (queued) { queued = false; rebuild(); }

      // sun from time of day — golden at the edges, warm white at noon
      const f = (s.timeOfDay - 5) / 16;
      const az = Math.PI * (0.2 + 1.6 * f);
      const elev = Math.max(0.06, Math.sin(f * Math.PI)) * 1.05;
      sun.position.set(30 + Math.cos(elev) * Math.cos(az) * 90, Math.sin(elev) * 90, 30 + Math.cos(elev) * Math.sin(az) * 90);
      sun.intensity = 0.5 + 2.1 * Math.sin(elev);
      sun.color.set(elev > 0.5 ? '#FFF3E0' : '#FFC98F');

      if (s.viewMode !== prevMode) {
        prevMode = s.viewMode;
        controls.enabled = s.viewMode !== 'walk';
        if (s.viewMode === 'walk') {
          const r0 = s.rooms[0];
          const c = r0 ? [r0.poly.reduce((a, p) => a + p[0], 0) / r0.poly.length, r0.poly.reduce((a, p) => a + p[1], 0) / r0.poly.length] : [30, 30];
          Object.assign(walkRef.current, { x: c[0], z: c[1], yaw: Math.PI * 0.25, pitch: 0 });
        }
      }

      if (s.viewMode === 'walk') {
        const wk = walkRef.current;
        const sp = 7 * dt;
        const fx = -Math.sin(wk.yaw), fz = -Math.cos(wk.yaw);
        const rx = Math.cos(wk.yaw), rz = -Math.sin(wk.yaw);
        const mz = (wk.keys['w'] || wk.keys['arrowup'] ? 1 : 0) - (wk.keys['s'] || wk.keys['arrowdown'] ? 1 : 0) + wk.fwd;
        const mx = (wk.keys['d'] || wk.keys['arrowright'] ? 1 : 0) - (wk.keys['a'] || wk.keys['arrowleft'] ? 1 : 0);
        let nx = clamp(wk.x + (fx * mz + rx * mx) * sp, 1, 59);
        let nz = clamp(wk.z + (fz * mz + rz * mx) * sp, 1, 59);
        if (!circleHitsWalls(nx, wk.z, 1, s.walls)) wk.x = nx;
        if (!circleHitsWalls(wk.x, nz, 1, s.walls)) wk.z = nz;
        camera.rotation.y = wk.yaw; camera.rotation.x = wk.pitch;
        camera.position.set(wk.x, 5.5, wk.z);
      } else {
        controls.update();
      }
      renderer.render(scene, camera);
    };
    tick();

    const ro = new ResizeObserver(() => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    });
    ro.observe(mount);

    viewerApi.snapshot = () => renderer.domElement.toDataURL('image/png');

    return () => {
      cancelAnimationFrame(raf); ro.disconnect(); unsub();
      window.removeEventListener('keydown', kd); window.removeEventListener('keyup', ku);
      el.removeEventListener('pointerdown', pd); el.removeEventListener('pointermove', pm); el.removeEventListener('pointerup', pu);
      controls.dispose();
      house.traverse(o => {
        if (o.isMesh) {
          o.geometry.dispose();
          if (!o.material.userData?.shared) o.material.dispose?.();
        }
      });
      renderer.dispose();
      mount.removeChild(renderer.domElement);
      viewerApi.snapshot = null;
    };
  }, []);

  const wk = walkRef.current;
  return (
    <div className="three-wrap">
      <div ref={mountRef} className="three-mount" />
      {viewMode === 'walk' && (
        <div className="walkpad">
          <button
            onPointerDown={() => (wk.fwd = 1)} onPointerUp={() => (wk.fwd = 0)} onPointerLeave={() => (wk.fwd = 0)}
          >▲ Walk</button>
          <button
            onPointerDown={() => (wk.fwd = -1)} onPointerUp={() => (wk.fwd = 0)} onPointerLeave={() => (wk.fwd = 0)}
          >▼ Back</button>
          <span className="walkhint">drag to look around · WASD moves</span>
        </div>
      )}
    </div>
  );
}