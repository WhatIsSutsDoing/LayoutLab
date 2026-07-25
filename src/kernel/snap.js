import { clamp } from './geometry.js';

export const snapGrid = (v, step = 0.5) => Math.round(v / step) * step;
export const snapAngle = (deg, step = 45) => ((Math.round(deg / step) * step) % 360 + 360) % 360;

/** Pull an item's back edge flush against the nearest wall face within 0.6 ft. */
export function wallFlushSnap(pos, rotDeg, w, d, walls) {
  let best = null;
  for (const wall of walls) {
    const [ax, az] = wall.a, [bx, bz] = wall.b;
    const len = Math.hypot(bx - ax, bz - az);
    if (len < 0.5) continue;
    const dx = (bx - ax) / len, dz = (bz - az) / len;
    const t = clamp((pos[0] - ax) * dx + (pos[1] - az) * dz, 0.25, len - 0.25);
    const px = ax + dx * t, pz = az + dz * t;
    const distC = Math.hypot(pos[0] - px, pos[1] - pz);
    const target = d / 2 + (wall.thickness ?? 0.5) / 2 + 0.02;
    const diff = Math.abs(distC - target);
    if (diff < 0.6 && (!best || diff < best.diff)) {
      let nx = pos[0] - px, nz = pos[1] - pz;
      const nl = Math.hypot(nx, nz);
      if (nl < 1e-4) { nx = -dz; nz = dx; } else { nx /= nl; nz /= nl; }
      best = { diff, x: px + nx * target, z: pz + nz * target };
    }
  }
  return best ? [best.x, best.z] : pos;
}