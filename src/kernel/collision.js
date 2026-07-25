import { wallBoxes } from './walls.js';

/** Effective footprint of a placed item (base size × resize factors). */
export const dimsOf = f => ({ w: f.w * (f.sw ?? 1), d: f.d * (f.sd ?? 1) });

/** Corners of an oriented rect in the x/z plane. Matches three.js rotation.y = rot. */
export function obbCorners(cx, cz, w, d, rot) {
  const c = Math.cos(rot), s = Math.sin(rot), hw = w / 2, hd = d / 2;
  return [[-hw, -hd], [hw, -hd], [hw, hd], [-hw, hd]]
    .map(([x, z]) => [cx + x * c + z * s, cz - x * s + z * c]);
}

const axes = cn => [0, 1].map(i => {
  const a = cn[i], b = cn[i + 1];
  const ex = b[0] - a[0], ez = b[1] - a[1], l = Math.hypot(ex, ez) || 1;
  return [-ez / l, ex / l];
});

/** Separating Axis Theorem for two oriented rects. */
export function obbOverlap(A, B) {
  for (const [ax, az] of [...axes(A), ...axes(B)]) {
    let minA = Infinity, maxA = -Infinity, minB = Infinity, maxB = -Infinity;
    for (const [x, z] of A) { const p = x * ax + z * az; if (p < minA) minA = p; if (p > maxA) maxA = p; }
    for (const [x, z] of B) { const p = x * ax + z * az; if (p < minB) minB = p; if (p > maxB) maxB = p; }
    if (maxA < minB || maxB < minA) return false;
  }
  return true;
}

/** Placement validation: a w×d footprint vs walls (gap-aware) and vs other furniture. */
export function placementValid(w, d, pos, rotDeg, walls, furniture, ignoreId) {
  const corners = obbCorners(pos[0], pos[1], w, d, rotDeg * Math.PI / 180);
  for (const wall of walls)
    for (const b of wallBoxes(wall, { forCollision: true }))
      if (obbOverlap(corners, obbCorners(b.cx, b.cz, b.sx, b.sz, b.rotY))) return false;
  for (const f of furniture) {
    if (f.id === ignoreId) continue;
    const fd = dimsOf(f);
    if (obbOverlap(corners, obbCorners(f.pos[0], f.pos[1], fd.w, fd.d, f.rotDeg * Math.PI / 180))) return false;
  }
  return true;
}

/** Circle vs wall OBBs — first-person walking collision. */
export function circleHitsWalls(x, z, r, walls) {
  for (const w of walls)
    for (const b of wallBoxes(w, { forCollision: true })) {
      const c = Math.cos(b.rotY), s = Math.sin(b.rotY);
      const lx = (x - b.cx) * c - (z - b.cz) * s;
      const lz = (x - b.cx) * s + (z - b.cz) * c;
      const qx = Math.max(-b.sx / 2, Math.min(b.sx / 2, lx));
      const qz = Math.max(-b.sz / 2, Math.min(b.sz / 2, lz));
      if (Math.hypot(lx - qx, lz - qz) < r) return true;
    }
  return false;
}