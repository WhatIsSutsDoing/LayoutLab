import { useDesign } from '../store/designStore.js';
import { itemById } from '../data/catalog.js';
import { FLOORS, PAINTS, FABRICS } from '../data/materials.js';
import { dimsOf } from '../kernel/collision.js';
import { fmtFt, fmtMoney, wallLen } from '../kernel/geometry.js';

const HINTS = {
  select: 'Tap anything to edit it. Drag furniture to move it around — it turns green when it fits. Drag empty space to pan the plan.',
  wall: 'Click and drag to draw a wall. Walls join up automatically — click the little circle to finish.',
  door: 'Tap any wall to add a door, then drag it along the wall to position it.',
  window: 'Tap any wall to add a window, then drag it where you like.',
  floor: 'Choose a floor below, then tap a room to apply it.',
  wallpaint: 'Pick a color below, then tap a wall to paint it.',
  erase: 'Tap anything to remove it. Changed your mind? Just hit undo!',
  place: 'Tap your room to drop it in. Press R to turn it. Green means it fits!',
};

export default function Inspector() {
  const s = useDesign();
  const sel = s.selected;
  const f = sel?.kind === 'furniture' ? s.furniture.find(x => x.id === sel.id) : null;
  const wall = sel?.kind === 'wall' ? s.walls.find(x => x.id === sel.id) : null;
  const room = sel?.kind === 'room' ? s.rooms.find(x => x.id === sel.id) : null;
  const item = f ? itemById(f.itemId) : null;
  const dd = f ? dimsOf(f) : null;

  return (
    <div className="inspector">
      <button className="card-close" onClick={() => s.hideTips()} title="Hide this box (H)" aria-label="Hide this box">✕</button>

      {item && (
        <>
          <div className="panel-title">{item.name}</div>
          <div className="dims">
            <div>Width<b>{fmtFt(dd.w)}</b></div>
            <div>Depth<b>{fmtFt(dd.d)}</b></div>
            <div>Height<b>{fmtFt(item.h * (f.sw ?? 1))}</b></div>
          </div>
          <div className="price">Estimated price<b>{fmtMoney(item.price)}</b></div>

          <div className="swatch-label">Size</div>
          <div className="sizectl">
            <label>
              <span>W</span>
              <input type="range" min="0.5" max="2" step="0.05" value={f.sw ?? 1}
                onPointerDown={() => s.commit()}
                onChange={e => s.resizeFurniture(f.id, +e.target.value, f.sd ?? 1)} />
              <b>{fmtFt(item.w * (f.sw ?? 1))}</b>
            </label>
            <label>
              <span>D</span>
              <input type="range" min="0.5" max="2" step="0.05" value={f.sd ?? 1}
                onPointerDown={() => s.commit()}
                onChange={e => s.resizeFurniture(f.id, f.sw ?? 1, +e.target.value)} />
              <b>{fmtFt(item.d * (f.sd ?? 1))}</b>
            </label>
          </div>
          {((f.sw ?? 1) !== 1 || (f.sd ?? 1) !== 1) && (
            <button className="btn tiny" onClick={() => { s.commit(); s.resizeFurniture(f.id, 1, 1); }}>Reset size</button>
          )}

          <div className="swatch-label">Colour</div>
          <div className="swatches">
            {FABRICS.map(c => (
              <button key={c.hex} className={`swatch ${(f.tint || item.color) === c.hex ? 'on' : ''}`}
                style={{ background: c.hex }} title={c.name}
                onClick={() => { s.commit(); s.tintFurniture(f.id, c.hex); }} />
            ))}
            <label className="colorwell" title="Custom colour">
              <input type="color" value={f.tint || item.color}
                onFocus={() => s.commit()}
                onChange={e => s.tintFurniture(f.id, e.target.value)}
                aria-label="Custom colour" />
            </label>
            {f.tint && (
              <button className="btn tiny" onClick={() => { s.commit(); s.tintFurniture(f.id, null); }}>Reset</button>
            )}
          </div>

          <div className="row">
            <button className="btn" onClick={() => { s.commit(); s.updateFurniture(f.id, { rotDeg: (f.rotDeg + 45) % 360 }); }}>↻ Rotate</button>
            <button className="btn danger" onClick={() => { s.commit(); s.deleteFurniture(f.id); s.select(null); }}>Remove</button>
          </div>
        </>
      )}

      {wall && (
        <>
          <div className="panel-title">Wall · {fmtFt(wallLen(wall))} long</div>
          <div className="swatch-label">Wall color</div>
          <div className="swatches">
            {PAINTS.map(p => (
              <button key={p.id} className={`swatch ${s.wallMaterials[wall.id] === p.id ? 'on' : ''}`}
                style={{ background: p.color }} title={`${p.name} · ${fmtMoney(p.pricePerSqFt)}/sq ft`}
                onClick={() => { s.commit(); s.paintWall(wall.id, p.id); s.setWallMat(p.id); }} />
            ))}
          </div>
          <div className="row">
            <button className="btn danger" onClick={() => { s.commit(); s.deleteWall(wall.id); s.select(null); }}>Remove wall</button>
          </div>
        </>
      )}

      {room && (
        <>
          <div className="panel-title">Room · {Math.round(room.area)} sq ft</div>
          <div className="swatch-label">Floor finish</div>
          <div className="swatches">
            {FLOORS.map(m => (
              <button key={m.id} className={`swatch ${s.roomMaterials[room.id] === m.id ? 'on' : ''}`}
                style={{ background: m.base }} title={`${m.name} · ${fmtMoney(m.pricePerSqFt)}/sq ft`}
                onClick={() => { s.commit(); s.paintRoom(room.id, m.id); s.setFloorMat(m.id); }} />
            ))}
          </div>
        </>
      )}

      {!sel && (
        <>
          {(s.tool === 'floor' || s.tool === 'wallpaint') && (
            <>
              <div className="swatch-label">{s.tool === 'floor' ? 'Floor finish' : 'Wall color'}</div>
              <div className="swatches">
                {(s.tool === 'floor' ? FLOORS : PAINTS).map(m => (
                  <button key={m.id} className="swatch" style={{ background: m.base ?? m.color }} title={m.name}
                    onClick={() => (s.tool === 'floor' ? s.setFloorMat(m.id) : s.setWallMat(m.id))} />
                ))}
              </div>
            </>
          )}
          <p className="hint">{HINTS[s.tool]}</p>
          <div className="stats mono">
            {s.rooms.length} rooms · {s.walls.length} walls · {s.furniture.length} items
          </div>
        </>
      )}
    </div>
  );
}