import { create } from 'zustand';
import { detectRooms, wallLen } from '../kernel/geometry.js';
import { itemById } from '../data/catalog.js';
import { floorById, paintById } from '../data/materials.js';

let _u = 0;
export const uid = p => `${p}${(++_u).toString(36)}${Date.now().toString(36).slice(-4)}`;
export const viewerApi = { snapshot: null };   // set by the active renderer for PNG export

const serialize = s => JSON.stringify({
  walls: s.walls, furniture: s.furniture,
  roomMaterials: s.roomMaterials, wallMaterials: s.wallMaterials, wallHeight: s.wallHeight,
});

export const useDesign = create((set, get) => ({
  walls: [], furniture: [], rooms: [],
  roomMaterials: {}, wallMaterials: {}, wallHeight: 8,
  tool: 'select', placingId: null, placingRot: 0, selected: null,
  floorMat: 'oak', wallMat: 'swiss',
  viewMode: '2d', timeOfDay: 14, budgetCap: 8000,
  tipsHidden: false,
  past: [], future: [],

  commit() {
    set(s => ({ past: [...s.past.slice(-79), serialize(s)], future: [] }));
  },
  undo() {
    const { past } = get();
    if (!past.length) return;
    set(s => ({ past: s.past.slice(0, -1), future: [...s.future, serialize(s)] }));
    get().hydrate(JSON.parse(past[past.length - 1]));
  },
  redo() {
    const { future } = get();
    if (!future.length) return;
    set(s => ({ past: [...s.past, serialize(s)], future: s.future.slice(0, -1) }));
    get().hydrate(JSON.parse(future[future.length - 1]));
  },
  hydrate(data) {
    const walls = data.walls || [];
    set({
      walls,
      furniture: data.furniture || [],
      roomMaterials: data.roomMaterials || {},
      wallMaterials: data.wallMaterials || {},
      wallHeight: data.wallHeight || 8,
      selected: null,
      rooms: detectRooms(walls),
    });
  },
  recomputeRooms() { set(s => ({ rooms: detectRooms(s.walls) })); },

  addWall(a, b) {
    const w = { id: uid('w'), a, b, height: get().wallHeight, thickness: 0.5, openings: [] };
    set(s => ({ walls: [...s.walls, w] }));
    get().recomputeRooms();
    return w;
  },
  deleteWall(id) {
    set(s => ({ walls: s.walls.filter(w => w.id !== id) }));
    get().recomputeRooms();
  },
  addOpening(wallId, op) {
    const id = uid('op');
    set(s => ({ walls: s.walls.map(w => w.id === wallId ? { ...w, openings: [...(w.openings || []), { ...op, id }] } : w) }));
    return id;
  },
  moveOpening(wallId, opId, offset) {
    set(s => ({ walls: s.walls.map(w => w.id === wallId ? { ...w, openings: w.openings.map(o => o.id === opId ? { ...o, offset } : o) } : w) }));
  },
  deleteOpening(wallId, opId) {
    set(s => ({ walls: s.walls.map(w => w.id === wallId ? { ...w, openings: w.openings.filter(o => o.id !== opId) } : w) }));
  },

  addFurniture(item, pos, rotDeg) {
    const f = { id: uid('f'), itemId: item.id, pos, rotDeg, w: item.w, d: item.d };
    set(s => ({ furniture: [...s.furniture, f] }));
    return f;
  },
  updateFurniture(id, patch) { set(s => ({ furniture: s.furniture.map(f => f.id === id ? { ...f, ...patch } : f) })); },
  tintFurniture(id, tint) { set(s => ({ furniture: s.furniture.map(f => f.id === id ? { ...f, tint } : f) })); },
  resizeFurniture(id, sw, sd) { set(s => ({ furniture: s.furniture.map(f => f.id === id ? { ...f, sw, sd } : f) })); },
  deleteFurniture(id) { set(s => ({ furniture: s.furniture.filter(f => f.id !== id) })); },

  paintRoom(roomId, matId) { set(s => ({ roomMaterials: { ...s.roomMaterials, [roomId]: matId } })); },
  paintWall(wallId, matId) { set(s => ({ wallMaterials: { ...s.wallMaterials, [wallId]: matId } })); },

  setTool(tool) { set(s => ({ tool, placingId: null, placingRot: 0, selected: tool === 'select' ? s.selected : null })); },
  setPlacing(itemId) { set({ placingId: itemId, placingRot: 0, tool: 'place', selected: null }); },
  rotatePlacing() { set(s => ({ placingRot: (s.placingRot + 45) % 360 })); },
  select(sel) { set({ selected: sel }); },
  hideTips() { set({ tipsHidden: true }); },
  showTips() { set({ tipsHidden: false }); },
  setFloorMat(id) { set({ floorMat: id }); },
  setWallMat(id) { set({ wallMat: id }); },
  setView(m) { set({ viewMode: m }); },
  setTime(t) { set({ timeOfDay: t }); },
  setCap(c) { set({ budgetCap: c }); },
  clearAll() {
    get().commit();
    set({ walls: [], furniture: [], rooms: [], roomMaterials: {}, wallMaterials: {}, selected: null, placingId: null, tool: 'select' });
  },
}));

export function budgetOf(s) {
  let items = 0, finishes = 0;
  for (const f of s.furniture) items += itemById(f.itemId)?.price ?? 0;
  for (const r of s.rooms) {
    const m = floorById(s.roomMaterials[r.id]);
    if (m) finishes += r.area * m.pricePerSqFt;
  }
  for (const w of s.walls) {
    const p = paintById(s.wallMaterials[w.id]);
    if (p) finishes += wallLen(w) * w.height * 2 * p.pricePerSqFt;
  }
  return { items, finishes, total: items + finishes };
}

/** First-run demo: two rooms, furnished, finishes applied. */
export function seedDemo() {
  const demo = {
    wallHeight: 8,
    walls: [
      { id: 'dw1', a: [8, 8],   b: [36, 8],  height: 8, thickness: .5, openings: [{ id: 'do1', type: 'door',   offset: 3,  width: 3, height: 6.7 }] },
      { id: 'dw2', a: [36, 8],  b: [36, 28], height: 8, thickness: .5, openings: [{ id: 'do2', type: 'window', offset: 8,  width: 4, sill: 3, height: 3.5 }] },
      { id: 'dw3', a: [36, 28], b: [8, 28],  height: 8, thickness: .5, openings: [{ id: 'do3', type: 'window', offset: 12, width: 5, sill: 3, height: 3.5 }] },
      { id: 'dw4', a: [8, 28],  b: [8, 8],   height: 8, thickness: .5, openings: [] },
      { id: 'dw5', a: [24, 8],  b: [24, 28], height: 8, thickness: .5, openings: [{ id: 'do4', type: 'door',   offset: 9,  width: 3, height: 6.7 }] },
    ],
    furniture: [
      { id: 'df1', itemId: 'sofa3',   pos: [15, 26],    rotDeg: 0,   w: 7,    d: 3.2 },
      { id: 'df2', itemId: 'coffee',  pos: [15, 20.5],  rotDeg: 0,   w: 4,    d: 2.2 },
      { id: 'df3', itemId: 'tvstand', pos: [17, 9.3],   rotDeg: 180, w: 5.5,  d: 1.5 },
      { id: 'df4', itemId: 'lamp',    pos: [10.2, 26],  rotDeg: 0,   w: 1.5,  d: 1.5 },
      { id: 'df5', itemId: 'bed_q',   pos: [31.8, 18],  rotDeg: 270, w: 5.25, d: 7 },
      { id: 'df6', itemId: 'night',   pos: [33.6, 13.2],rotDeg: 270, w: 1.6,  d: 1.6 },
      { id: 'df7', itemId: 'dresser', pos: [25.4, 24],  rotDeg: 90,  w: 5,    d: 1.8 },
    ],
    wallMaterials: { dw5: 'sage' },
    roomMaterials: {},
  };
  useDesign.getState().hydrate(demo);
  const rooms = useDesign.getState().rooms;           // rooms[0] = largest (living), rooms[1] = bedroom
  if (rooms.length >= 2)
    useDesign.setState({ roomMaterials: { [rooms[0].id]: 'oak', [rooms[1].id]: 'carpet' } });
}