/**
 * Decompose a wall into boxes. forCollision=true skips headers/sills,
 * leaving door & window gaps passable for placement checks.
 */
export function wallBoxes(wall, { forCollision = false } = {}) {
  const [ax, az] = wall.a, [bx, bz] = wall.b;
  const len = Math.hypot(bx - ax, bz - az);
  if (len < 0.01) return [];
  const dx = (bx - ax) / len, dz = (bz - az) / len;
  const h = wall.height ?? 8, t = wall.thickness ?? 0.5;
  const rotY = Math.atan2(-dz, dx);
  const boxes = [];
  const add = (s0, s1, y0, y1) => {
    if (s1 - s0 < 0.02 || y1 - y0 < 0.02) return;
    const m = (s0 + s1) / 2;
    boxes.push({ cx: ax + dx * m, cy: (y0 + y1) / 2, cz: az + dz * m, sx: s1 - s0, sy: y1 - y0, sz: t, rotY });
  };
  const ops = [...(wall.openings || [])].sort((a, b) => a.offset - b.offset);
  let cursor = 0;
  for (const op of ops) {
    const o0 = Math.max(cursor, op.offset), o1 = Math.min(len, op.offset + op.width);
    if (o1 <= o0) continue;
    add(cursor, o0, 0, h);                                   // stub before opening
    if (!forCollision) {
      const topOf = op.type === 'window' ? (op.sill ?? 3) + (op.height ?? 3.5) : (op.height ?? 6.7);
      add(o0, o1, topOf, h);                                 // header
      if (op.type === 'window') add(o0, o1, 0, op.sill ?? 3); // sill
    }
    cursor = o1;
  }
  add(cursor, len, 0, h);                                    // stub after
  return boxes;
}