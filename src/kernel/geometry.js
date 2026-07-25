export const EPS = 1e-6;
export const TAU = Math.PI * 2;
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const r8 = v => Math.round(v * 8) / 8;                    // round to 1/8 ft
export const dist = (a, b) => Math.hypot(b[0] - a[0], b[1] - a[1]);
export const lerp = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
export const wallLen = w => dist(w.a, w.b);

export const fmtFt = v => {
  let ft = Math.floor(v + 1e-9), inch = Math.round((v - ft) * 12);
  if (inch === 12) { ft++; inch = 0; }
  return `${ft}′${inch}″`;
};
export const fmtMoney = n => '$' + Math.round(n).toLocaleString('en-US');

/** Intersection params (t,u) of segments p1→p2 and p3→p4, or null if parallel. */
function segT(p1, p2, p3, p4) {
  const rx = p2[0] - p1[0], ry = p2[1] - p1[1], sx = p4[0] - p3[0], sy = p4[1] - p3[1];
  const den = rx * sy - ry * sx;
  if (Math.abs(den) < EPS) return null;
  const qx = p3[0] - p1[0], qy = p3[1] - p1[1];
  return { t: (qx * sy - qy * sx) / den, u: (qx * ry - qy * rx) / den };
}

/** Split walls at every crossing so the graph stays planar. T-junctions weld, no split. */
export function splitWalls(walls) {
  const segs = walls.map(w => ({ wallId: w.id, a: [...w.a], b: [...w.b] }));
  const cuts = segs.map(() => []);
  for (let i = 0; i < segs.length; i++) for (let j = i + 1; j < segs.length; j++) {
    const h = segT(segs[i].a, segs[i].b, segs[j].a, segs[j].b);
    if (!h) continue;
    if (h.t > 0.02 && h.t < 0.98) cuts[i].push(h.t);
    if (h.u > 0.02 && h.u < 0.98) cuts[j].push(h.u);
  }
  const out = [];
  segs.forEach((s, i) => {
    const ts = [...new Set(cuts[i].map(t => Math.round(t * 512) / 512))].sort((a, b) => a - b);
    let prev = s.a;
    for (const t of [...ts, 1]) {
      const p = t >= 1 ? s.b : lerp(s.a, s.b, t).map(r8);
      if (dist(prev, p) > 0.05) out.push({ wallId: s.wallId, a: prev, b: p });
      prev = p;
    }
  });
  return out;
}

function shoelace(p) {
  let s = 0;
  for (let i = 0; i < p.length; i++) {
    const [x1, z1] = p[i], [x2, z2] = p[(i + 1) % p.length];
    s += x1 * z2 - x2 * z1;
  }
  return s / 2;
}

/**
 * Room detection = face extraction on the planar wall graph.
 * At each node the walk takes the first edge strictly clockwise of the
 * reverse edge (the twin itself only at dead ends), which traces every
 * minimal loop exactly once.
 */
export function detectRooms(walls) {
  const segs = splitWalls(walls);
  if (segs.length < 3) return [];
  const K = (x, z) => `${Math.round(x * 8)}|${Math.round(z * 8)}`;
  const hes = [];
  for (const s of segs) {
    hes.push({ fx: s.a[0], fz: s.a[1], tx: s.b[0], tz: s.b[1], used: false });
    hes.push({ fx: s.b[0], fz: s.b[1], tx: s.a[0], tz: s.a[1], used: false });
  }
  const ang = i => Math.atan2(hes[i].tz - hes[i].fz, hes[i].tx - hes[i].fx);
  const outs = new Map();
  hes.forEach((he, i) => {
    const k = K(he.fx, he.fz);
    if (!outs.has(k)) outs.set(k, []);
    outs.get(k).push(i);
  });

  const faces = [];
  for (let i = 0; i < hes.length; i++) {
    if (hes[i].used) continue;
    const pts = [];
    let cur = i, guard = 0;
    while (guard++ <= hes.length && !hes[cur].used) {
      hes[cur].used = true;
      const he = hes[cur];
      pts.push([he.fx, he.fz]);
      const rev = Math.atan2(he.fz - he.tz, he.fx - he.tx);
      const cand = outs.get(K(he.tx, he.tz)) || [];
      if (!cand.length) break;
      let best = -1, bestD = Infinity;
      for (const oi of cand) {
        let d = (rev - ang(oi)) % TAU; if (d < 0) d += TAU;
        if (d < 1e-6) d = TAU;                    // the twin counts as a full turn — taken only at dead ends
        if (d < bestD - 1e-9) { bestD = d; best = oi; }
      }
      if (best === -1) break;
      cur = best;
    }
    if (pts.length >= 3) faces.push(pts);
  }

  // Mirror walks of the same loop share a vertex set — keep one
  const seen = new Set();
  const uniq = [];
  for (const p of faces) {
    const key = p.map(q => `${Math.round(q[0] * 8)},${Math.round(q[1] * 8)}`).sort().join(';');
    if (seen.has(key)) continue;
    seen.add(key);
    uniq.push(p);
  }

  const valid = uniq.map(p => ({ poly: p, area: shoelace(p) })).filter(f => Math.abs(f.area) > 4);
  if (!valid.length) return [];
  valid.sort((a, b) => Math.abs(b.area) - Math.abs(a.area));
  // The unbounded exterior is strictly the largest face (when more than one remains)
  const rooms = valid.length > 1 && Math.abs(valid[0].area) > Math.abs(valid[1].area) + 0.5
    ? valid.slice(1)
    : valid;
  return rooms.map(f => ({
    id: f.poly.map(p => `${Math.round(p[0] * 8)},${Math.round(p[1] * 8)}`).sort().join(';'),
    poly: f.poly,
    area: Math.abs(f.area),
  }));
}

export function pointInPoly([x, z], poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, zi] = poly[i], [xj, zj] = poly[j];
    if (((zi > z) !== (zj > z)) && (x < (xj - xi) * (z - zi) / (zj - zi) + xi)) inside = !inside;
  }
  return inside;
}

export function distPointSeg(p, a, b) {
  const abx = b[0] - a[0], abz = b[1] - a[1];
  const len2 = abx * abx + abz * abz || EPS;
  const t = clamp(((p[0] - a[0]) * abx + (p[1] - a[1]) * abz) / len2, 0, 1);
  return Math.hypot(p[0] - (a[0] + abx * t), p[1] - (a[1] + abz * t));
}

/** Distance along wall (feet from w.a) of the projection of p onto the wall line. */
export const alongWall = (p, w) => {
  const dx = w.b[0] - w.a[0], dz = w.b[1] - w.a[1];
  const l = Math.hypot(dx, dz) || 1;
  return ((p[0] - w.a[0]) * dx + (p[1] - w.a[1]) * dz) / l;
};

export const openingCenter = (w, op) => {
  const l = wallLen(w), dx = (w.b[0] - w.a[0]) / l, dz = (w.b[1] - w.a[1]) / l;
  const t = op.offset + op.width / 2;
  return [w.a[0] + dx * t, w.a[1] + dz * t];
};