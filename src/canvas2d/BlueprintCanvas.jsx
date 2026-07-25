import { useEffect, useRef } from 'react';
import { useDesign, viewerApi } from '../store/designStore.js';
import { snapGrid, wallFlushSnap } from '../kernel/snap.js';
import { placementValid, obbCorners, dimsOf } from '../kernel/collision.js';
import { wallBoxes } from '../kernel/walls.js';
import {
  dist, r8, clamp, pointInPoly, distPointSeg, alongWall, openingCenter,
  wallLen, fmtFt, TAU,
} from '../kernel/geometry.js';
import { itemById } from '../data/catalog.js';
import { floorById, paintById } from '../data/materials.js';

// Rugs are floor coverings, not furniture, so they should always sit visually
// underneath everything else regardless of the order they were placed in.
const drawOrder = furniture => [...furniture].sort((a, b) => {
  const ra = itemById(a.itemId)?.rug ? 0 : 1;
  const rb = itemById(b.itemId)?.rug ? 0 : 1;
  return ra - rb;
});

// Rugs slide under furniture (and each other) — walls still block them.
// Everything else simply ignores rugs when checking for overlaps.
const placeOk = (isRug, w, d, pos, rotDeg, walls, furniture, ignoreId) =>
  placementValid(w, d, pos, rotDeg, walls,
    isRug ? [] : furniture.filter(f => !itemById(f.itemId)?.rug),
    ignoreId);

// Nudge a hex tone lighter/darker by a catalog part's shade offset.
const shade = (hex, sh = 0) => {
  if (!sh) return hex;
  const n = parseInt(String(hex).trim().slice(1), 16);
  if (Number.isNaN(n)) return hex;
  const adj = v => Math.max(0, Math.min(255, Math.round(v + 255 * sh)));
  return `rgb(${adj(n >> 16)},${adj((n >> 8) & 255)},${adj(n & 255)})`;
};

const GRID = 60;
const view = { scale: 0, tx: 0, ty: 0 };              // module singleton: survives view toggles

// ---- warm paper theme ----
const PAPER = '#FBF9F5';
const GRID_MINOR = 'rgba(166,150,128,.13)';
const GRID_MAJOR = 'rgba(150,132,108,.26)';
const SITE = 'rgba(201,123,90,.5)';
const INK = '#3A3F3C';                       // walls
const WALL_SHADOW = 'rgba(64,56,46,.15)';    // soft underlay so light paints stay readable
const DIM = '#8B877C';                       // labels & rulers
const LABEL = '#6B6F68';
const ACCENT = '#C97B5A';                    // terracotta: doors, drafts, selection
const ACCENT_DEEP = '#B4643F';
const WINDOW = '#7FA6BC';                    // dusty glass blue
const OK = '#7FA876', OK_DEEP = '#5F8A56';
const BAD = '#D98276', BAD_DEEP = '#C05F4E';

export default function BlueprintCanvas() {
  const cvRef = useRef(null);
  const R = useRef({
    pointers: new Map(), pinch: null, pan: null,
    draft: null, chainStart: null, chainEnd: null, chained: false,
    drag: null, slide: null, ghost: [30, 30],
    maybePan: false, downPt: null, space: false,
  }).current;

  // hold Space to pan from any tool
  useEffect(() => {
    const dn = e => { if (e.code === 'Space' && !/input|textarea/i.test(e.target.tagName)) { e.preventDefault(); R.space = true; } };
    const up = e => { if (e.code === 'Space') R.space = false; };
    window.addEventListener('keydown', dn); window.addEventListener('keyup', up);
    return () => { window.removeEventListener('keydown', dn); window.removeEventListener('keyup', up); };
  }, [R]);

  // ---- wheel zoom (non-passive) -------------------------------------------
  useEffect(() => {
    const cv = cvRef.current;
    const onWheel = e => {
      e.preventDefault();
      const r = cv.getBoundingClientRect();
      const mx = e.clientX - r.left, my = e.clientY - r.top;
      const s2 = clamp(view.scale * Math.exp(-e.deltaY * 0.0012), 4, 90);
      view.tx = mx - (mx - view.tx) * (s2 / view.scale);
      view.ty = my - (my - view.ty) * (s2 / view.scale);
      view.scale = s2;
    };
    cv.addEventListener('wheel', onWheel, { passive: false });
    viewerApi.snapshot = () => cv.toDataURL('image/png');
    return () => { cv.removeEventListener('wheel', onWheel); viewerApi.snapshot = null; };
  }, []);

  // ---- render loop + resize ------------------------------------------------
  useEffect(() => {
    const cv = cvRef.current, ctx = cv.getContext('2d');
    const ro = new ResizeObserver(() => {
      const dpr = Math.min(devicePixelRatio, 2);
      cv.width = cv.clientWidth * dpr; cv.height = cv.clientHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!view.scale) {
        view.scale = Math.min(cv.clientWidth, cv.clientHeight) / (GRID + 8);
        view.tx = (cv.clientWidth - GRID * view.scale) / 2;
        view.ty = (cv.clientHeight - GRID * view.scale) / 2;
      }
    });
    ro.observe(cv);
    let raf;
    const loop = () => { raf = requestAnimationFrame(loop); draw(ctx, cv, R); };
    loop();
    return () => { ro.disconnect(); cancelAnimationFrame(raf); };
  }, [R]);

  // ---- pointer helpers -----------------------------------------------------
  const toWorld = e => {
    const r = cvRef.current.getBoundingClientRect();
    return [(e.clientX - r.left - view.tx) / view.scale, (e.clientY - r.top - view.ty) / view.scale];
  };
  const snapPt = p => [snapGrid(p[0]), snapGrid(p[1])];
  const hitFurniture = (pt, s) => {
    const order = drawOrder(s.furniture);           // same stacking as the render loop
    for (let i = order.length - 1; i >= 0; i--) {
      const f = order[i];
      const dd = dimsOf(f);
      const cn = obbCorners(f.pos[0], f.pos[1], dd.w, dd.d, f.rotDeg * Math.PI / 180);
      if (pointInPoly(pt, cn)) return f;
    }
    return null;
  };
  const hitWall = (pt, s, tol = 0.6) => {
    let best = null;
    for (const w of s.walls) {
      const d = distPointSeg(pt, w.a, w.b);
      if (d < tol && (!best || d < best.d)) best = { w, d };
    }
    return best?.w ?? null;
  };
  const hitOpening = (pt, s) => {
    for (const w of s.walls) for (const op of w.openings || [])
      if (dist(pt, openingCenter(w, op)) < 1) return { w, op };
    return null;
  };
  /** Angle-locked drag aim: 45° detents within ~7°, free angle otherwise. */
  const aimDrag = (a, pt) => {
    let ang = Math.atan2(pt[1] - a[1], pt[0] - a[0]);
    const det = Math.round(ang / (Math.PI / 4)) * (Math.PI / 4);
    let dd = Math.abs(ang - det); dd = Math.min(dd, TAU - dd);
    if (dd < 0.12) ang = det;
    const len = Math.max(0.5, snapGrid(Math.hypot(pt[0] - a[0], pt[1] - a[1]), 0.5));
    return [r8(a[0] + Math.cos(ang) * len), r8(a[1] + Math.sin(ang) * len)];
  };

  // ---- pointer events ------------------------------------------------------
  const onDown = e => {
    const cv = cvRef.current;
    cv.setPointerCapture(e.pointerId);
    R.pointers.set(e.pointerId, [e.clientX, e.clientY]);
    if (R.pointers.size === 2) {
      const [p1, p2] = [...R.pointers.values()];
      R.pinch = { d: Math.hypot(p1[0] - p2[0], p1[1] - p2[1]), mid: [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2], scale: view.scale, tx: view.tx, ty: view.ty };
      R.draft = R.drag = R.slide = null;
      return;
    }
    if (e.button === 1) { R.pan = { x: e.clientX, y: e.clientY, tx: view.tx, ty: view.ty }; return; }
    if (R.space) { R.pan = { x: e.clientX, y: e.clientY, tx: view.tx, ty: view.ty }; return; }

    const s = useDesign.getState();
    const pt = toWorld(e);

    if (s.tool === 'select') {
      const f = hitFurniture(pt, s);
      if (f) {
        s.select({ kind: 'furniture', id: f.id });
        s.commit();
        R.drag = { id: f.id, off: [pt[0] - f.pos[0], pt[1] - f.pos[1]], start: f.pos, valid: true };
        return;
      }
      const w = hitWall(pt, s);
      if (w) return s.select({ kind: 'wall', id: w.id });
      const room = s.rooms.find(r => pointInPoly(pt, r.poly));
      if (room) return s.select({ kind: 'room', id: room.id });
      // empty space: dragging pans the plan, a plain click deselects
      R.maybePan = true;
      R.downPt = [e.clientX, e.clientY];
      return;
    }

    if (s.tool === 'wall') {
      const sp = snapPt(pt);
      if (R.chainEnd && dist(sp, R.chainStart) < 1) {
        R.chainEnd = R.chainStart = null; R.chained = false; R.draft = null;
        return;
      }
      const start = R.chainEnd && dist(pt, R.chainEnd) < 2.5 ? R.chainEnd : sp;
      if (!R.chained) { s.commit(); R.chained = true; R.chainStart = start; }
      R.chainEnd = null;
      R.draft = { a: start, b: start };
      return;
    }

    if (s.tool === 'door' || s.tool === 'window') {
      const existing = hitOpening(pt, s);
      if (existing) { s.commit(); R.slide = { wallId: existing.w.id, opId: existing.op.id, width: existing.op.width }; return; }
      const w = hitWall(pt, s, 1);
      if (!w) return;
      const spec = s.tool === 'door'
        ? { type: 'door', width: 3, height: 6.7 }
        : { type: 'window', width: 3.5, sill: 3, height: 3.5 };
      const len = wallLen(w);
      if (len < spec.width + 1) return;
      const offset = clamp(alongWall(pt, w) - spec.width / 2, 0.4, len - spec.width - 0.4);
      const overlaps = (w.openings || []).some(o => offset < o.offset + o.width + 0.2 && offset + spec.width + 0.2 > o.offset);
      if (overlaps) return;
      s.commit();
      const id = s.addOpening(w.id, { ...spec, offset });
      R.slide = { wallId: w.id, opId: id, width: spec.width };
      return;
    }

    if (s.tool === 'floor') {
      const room = s.rooms.find(r => pointInPoly(pt, r.poly));
      if (room) { s.commit(); s.paintRoom(room.id, s.floorMat); s.select({ kind: 'room', id: room.id }); }
      return;
    }

    if (s.tool === 'wallpaint') {
      const w = hitWall(pt, s, 1);
      if (w) { s.commit(); s.paintWall(w.id, s.wallMat); s.select({ kind: 'wall', id: w.id }); }
      return;
    }

    if (s.tool === 'erase') {
      const f = hitFurniture(pt, s);
      if (f) { s.commit(); s.deleteFurniture(f.id); s.select(null); return; }
      const op = hitOpening(pt, s);
      if (op) { s.commit(); s.deleteOpening(op.w.id, op.op.id); return; }
      const w = hitWall(pt, s);
      if (w) { s.commit(); s.deleteWall(w.id); s.select(null); }
      return;
    }

    if (s.tool === 'place') {
      const item = itemById(s.placingId);
      if (!item) return;
      const pos = snapPt(pt);
      if (placeOk(!!item.rug, item.w, item.d, pos, s.placingRot, s.walls, s.furniture, null)) {
        s.commit();
        s.addFurniture(item, pos, s.placingRot);
      }
    }
  };

  const onMove = e => {
    if (R.pointers.has(e.pointerId)) R.pointers.set(e.pointerId, [e.clientX, e.clientY]);
    if (R.pinch && R.pointers.size >= 2) {
      const [p1, p2] = [...R.pointers.values()];
      const r = cvRef.current.getBoundingClientRect();
      const d = Math.hypot(p1[0] - p2[0], p1[1] - p2[1]);
      const mid = [(p1[0] + p2[0]) / 2 - r.left, (p1[1] + p2[1]) / 2 - r.top];
      const scale = clamp(R.pinch.scale * d / R.pinch.d, 4, 90);
      const wx = (R.pinch.mid[0] - r.left - R.pinch.tx) / R.pinch.scale;
      const wy = (R.pinch.mid[1] - r.top - R.pinch.ty) / R.pinch.scale;
      view.scale = scale; view.tx = mid[0] - wx * scale; view.ty = mid[1] - wy * scale;
      return;
    }
    if (R.maybePan) {
      if (Math.hypot(e.clientX - R.downPt[0], e.clientY - R.downPt[1]) > 4) {
        R.maybePan = false;
        R.pan = { x: R.downPt[0], y: R.downPt[1], tx: view.tx, ty: view.ty };
        cvRef.current.style.cursor = 'grabbing';
      } else return;
    }
    if (R.pan) {
      view.tx = R.pan.tx + e.clientX - R.pan.x;
      view.ty = R.pan.ty + e.clientY - R.pan.y;
      return;
    }

    const s = useDesign.getState();
    const pt = toWorld(e);

    if (R.drag) {
      const f = s.furniture.find(x => x.id === R.drag.id);
      if (!f) { R.drag = null; return; }
      let p = [snapGrid(pt[0] - R.drag.off[0]), snapGrid(pt[1] - R.drag.off[1])];
      const dd = dimsOf(f);
      p = wallFlushSnap(p, f.rotDeg, dd.w, dd.d, s.walls);
      const it = itemById(f.itemId);
      R.drag.valid = placeOk(!!it?.rug, dd.w, dd.d, p, f.rotDeg, s.walls, s.furniture, f.id);
      s.updateFurniture(f.id, { pos: p });
      return;
    }

    if (R.slide) {
      const w = s.walls.find(x => x.id === R.slide.wallId);
      if (!w) { R.slide = null; return; }
      const len = wallLen(w);
      const offset = clamp(alongWall(pt, w) - R.slide.width / 2, 0.4, len - R.slide.width - 0.4);
      s.moveOpening(w.id, R.slide.opId, offset);
      return;
    }

    if (R.draft) { R.draft.b = aimDrag(R.draft.a, pt); return; }
    if (s.tool === 'place') R.ghost = snapPt(pt);
  };

  const onUp = e => {
    R.pointers.delete(e.pointerId);
    if (R.pinch && R.pointers.size < 2) R.pinch = null;
    if (R.pan) { R.pan = null; cvRef.current.style.cursor = ''; return; }
    const s = useDesign.getState();
    if (R.draft && s.tool === 'wall') {
      const { a, b } = R.draft;
      if (dist(a, b) >= 1) { s.addWall(a, b); R.chainEnd = b; }
      R.draft = null;
      return;
    }
    if (R.drag) {
      if (!R.drag.valid) s.updateFurniture(R.drag.id, { pos: R.drag.start });
      R.drag = null;
      return;
    }
    R.slide = null;
    if (R.maybePan) { R.maybePan = false; s.select(null); }
  };

  return (
    <canvas
      ref={cvRef}
      className="plan"
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      onContextMenu={e => { e.preventDefault(); R.draft = null; R.chainEnd = null; R.chained = false; }}
    />
  );
}

// =============================================================================
// Drawing
// =============================================================================
function draw(ctx, cv, R) {
  const s = useDesign.getState();
  const w = cv.clientWidth, h = cv.clientHeight;
  if (!w || !h) return;
  const S = view.scale;
  const X = wx => wx * S + view.tx, Y = wz => wz * S + view.ty;

  ctx.fillStyle = PAPER;
  ctx.fillRect(0, 0, w, h);

  // grid + rulers
  ctx.lineWidth = 1;
  for (let i = 0; i <= GRID; i++) {
    ctx.strokeStyle = i % 5 === 0 ? GRID_MAJOR : GRID_MINOR;
    ctx.beginPath(); ctx.moveTo(X(i), Y(0)); ctx.lineTo(X(i), Y(GRID)); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(X(0), Y(i)); ctx.lineTo(X(GRID), Y(i)); ctx.stroke();
  }
  ctx.strokeStyle = SITE;
  ctx.strokeRect(X(0), Y(0), GRID * S, GRID * S);
  ctx.fillStyle = DIM; ctx.font = '9px "DM Mono", monospace'; ctx.textAlign = 'center';
  for (let i = 0; i <= GRID; i += 5) {
    ctx.fillText(i, X(i), Y(0) - 6);
    ctx.textAlign = 'right'; ctx.fillText(i, X(0) - 6, Y(i) + 3); ctx.textAlign = 'center';
  }

  // north arrow
  ctx.save(); ctx.translate(w - 28, 34);
  ctx.strokeStyle = DIM; ctx.beginPath(); ctx.arc(0, 0, 11, 0, TAU); ctx.stroke();
  ctx.fillStyle = ACCENT; ctx.beginPath(); ctx.moveTo(0, -8); ctx.lineTo(4, 4); ctx.lineTo(-4, 4); ctx.closePath(); ctx.fill();
  ctx.fillStyle = DIM; ctx.fillText('N', 0, 22); ctx.restore();

  // rooms
  for (const r of s.rooms) {
    const mat = floorById(s.roomMaterials[r.id]);
    ctx.beginPath();
    r.poly.forEach(([px, pz], i) => i ? ctx.lineTo(X(px), Y(pz)) : ctx.moveTo(X(px), Y(pz)));
    ctx.closePath();
    ctx.fillStyle = mat ? mat.base + '4D' : 'rgba(156,175,151,.12)';
    ctx.fill();
    const cx = r.poly.reduce((a, p) => a + p[0], 0) / r.poly.length;
    const cz = r.poly.reduce((a, p) => a + p[1], 0) / r.poly.length;
    ctx.fillStyle = LABEL;
    ctx.font = '500 11px "DM Mono", monospace';
    ctx.fillText(`${Math.round(r.area)} sq ft`, X(cx), Y(cz));
    if (s.selected?.kind === 'room' && s.selected.id === r.id) {
      ctx.strokeStyle = ACCENT; ctx.lineWidth = 2; ctx.setLineDash([6, 4]); ctx.stroke(); ctx.setLineDash([]);
    }
  }

  // walls (soft underlay keeps light paints readable on cream paper)
  for (const wall of s.walls) {
    const paint = paintById(s.wallMaterials[wall.id]);
    const sel = s.selected?.kind === 'wall' && s.selected.id === wall.id;
    ctx.lineCap = 'round';
    if (sel) { ctx.shadowColor = ACCENT; ctx.shadowBlur = 8; }
    for (const b of wallBoxes(wall, { forCollision: true })) {
      const dx = Math.cos(b.rotY), dz = -Math.sin(b.rotY);
      const hx = dx * b.sx / 2, hz = dz * b.sx / 2;
      ctx.strokeStyle = WALL_SHADOW;
      ctx.lineWidth = (wall.thickness ?? 0.5) * S + 3;
      ctx.beginPath(); ctx.moveTo(X(b.cx - hx), Y(b.cz - hz)); ctx.lineTo(X(b.cx + hx), Y(b.cz + hz)); ctx.stroke();
      ctx.strokeStyle = paint ? paint.color : INK;
      ctx.lineWidth = (wall.thickness ?? 0.5) * S;
      ctx.beginPath(); ctx.moveTo(X(b.cx - hx), Y(b.cz - hz)); ctx.lineTo(X(b.cx + hx), Y(b.cz + hz)); ctx.stroke();
    }
    ctx.shadowBlur = 0;

    // opening glyphs
    for (const op of wall.openings || []) {
      const len = wallLen(wall);
      const dx = (wall.b[0] - wall.a[0]) / len, dz = (wall.b[1] - wall.a[1]) / len;
      const px = -dz, pz = dx;
      const hx = wall.a[0] + dx * op.offset, hz = wall.a[1] + dz * op.offset;
      if (op.type === 'door') {
        const ex = hx + px * op.width, ez = hz + pz * op.width;
        ctx.strokeStyle = ACCENT; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(X(hx), Y(hz)); ctx.lineTo(X(ex), Y(ez)); ctx.stroke();
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.arc(X(hx), Y(hz), op.width * S, Math.atan2(pz, px), Math.atan2(dz, dx));
        ctx.stroke(); ctx.setLineDash([]);
      } else {
        ctx.strokeStyle = WINDOW; ctx.lineWidth = 1.5;
        for (const o of [-0.16, 0, 0.16]) {
          ctx.beginPath();
          ctx.moveTo(X(hx + px * o), Y(hz + pz * o));
          ctx.lineTo(X(hx + dx * op.width + px * o), Y(hz + dz * op.width + pz * o));
          ctx.stroke();
        }
      }
    }
  }

  // furniture — rugs drawn first so they sit one layer behind everything else
  for (const f of drawOrder(s.furniture)) {
    const item = itemById(f.itemId);
    if (!item) continue;
    const sel = s.selected?.kind === 'furniture' && s.selected.id === f.id;
    const dragging = R.drag?.id === f.id;
    ctx.save();
    ctx.translate(X(f.pos[0]), Y(f.pos[1]));
    ctx.rotate(-f.rotDeg * Math.PI / 180);
    ctx.scale(f.sw ?? 1, f.sd ?? 1);
    if (dragging && !R.drag.valid) ctx.globalAlpha = 0.55;
    for (const p of item.parts) {
      ctx.fillStyle = shade(f.tint || item.color, f.tint ? 0 : p.sh);   // user tint overrides part shading
      ctx.fillRect((p.dx - p.w / 2) * S, (p.dz - p.d / 2) * S, p.w * S, p.d * S);
      ctx.strokeStyle = 'rgba(62,55,45,.5)'; ctx.lineWidth = 1;
      ctx.strokeRect((p.dx - p.w / 2) * S, (p.dz - p.d / 2) * S, p.w * S, p.d * S);
    }
    ctx.globalAlpha = 1;
    if (sel) {
      ctx.strokeStyle = ACCENT; ctx.lineWidth = 1.5; ctx.setLineDash([5, 4]);
      ctx.strokeRect(-f.w / 2 * S - 4, -f.d / 2 * S - 4, f.w * S + 8, f.d * S + 8);
      ctx.setLineDash([]);
    }
    ctx.restore();
    if (sel) {
      const dd = dimsOf(f);
      ctx.fillStyle = ACCENT_DEEP; ctx.font = '700 10px "Karla", sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(item.name.toUpperCase(), X(f.pos[0]), Y(f.pos[1]) - dd.d / 2 * S - 12);
      ctx.fillStyle = DIM; ctx.font = '500 10px "DM Mono", monospace';
      ctx.fillText(fmtFt(dd.w), X(f.pos[0]), Y(f.pos[1]) + dd.d / 2 * S + 14);
      ctx.save(); ctx.translate(X(f.pos[0]) + dd.w / 2 * S + 16, Y(f.pos[1])); ctx.rotate(Math.PI / 2);
      ctx.fillText(fmtFt(dd.d), 0, 0); ctx.restore();
    }
  }

  // wall-draft ghost
  if (R.draft && s.tool === 'wall') {
    const { a, b } = R.draft;
    ctx.strokeStyle = ACCENT; ctx.lineWidth = 2; ctx.setLineDash([8, 5]);
    ctx.beginPath(); ctx.moveTo(X(a[0]), Y(a[1])); ctx.lineTo(X(b[0]), Y(b[1])); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = ACCENT;
    ctx.fillRect(X(a[0]) - 3, Y(a[1]) - 3, 6, 6);
    const len = dist(a, b);
    if (len >= 1) {
      ctx.fillStyle = ACCENT_DEEP; ctx.font = '500 11px "DM Mono", monospace';
      ctx.fillText(fmtFt(len), (X(a[0]) + X(b[0])) / 2, (Y(a[1]) + Y(b[1])) / 2 - 10);
    }
    if (R.chainStart) {
      ctx.strokeStyle = ACCENT;
      ctx.beginPath(); ctx.arc(X(R.chainStart[0]), Y(R.chainStart[1]), 7, 0, TAU); ctx.stroke();
    }
  }

  // placement ghost
  if (s.tool === 'place' && s.placingId) {
    const item = itemById(s.placingId);
    if (item) {
      const valid = placeOk(!!item.rug, item.w, item.d, R.ghost, s.placingRot, s.walls, s.furniture, null);
      const cn = obbCorners(R.ghost[0], R.ghost[1], item.w, item.d, s.placingRot * Math.PI / 180);
      ctx.beginPath();
      cn.forEach(([px, pz], i) => i ? ctx.lineTo(X(px), Y(pz)) : ctx.moveTo(X(px), Y(pz)));
      ctx.closePath();
      ctx.fillStyle = valid ? OK + '33' : BAD + '33';
      ctx.strokeStyle = valid ? OK : BAD;
      ctx.lineWidth = 2; ctx.fill(); ctx.stroke();
      ctx.fillStyle = valid ? OK_DEEP : BAD_DEEP; ctx.font = '500 10px "DM Mono", monospace';
      ctx.fillText(`${fmtFt(item.w)} × ${fmtFt(item.d)}`, X(R.ghost[0]), Y(R.ghost[1]) + 4);
    }
  }
}