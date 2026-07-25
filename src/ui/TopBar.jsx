import { useRef, useState } from 'react';
import { useDesign, budgetOf, viewerApi } from '../store/designStore.js';
import { itemById } from '../data/catalog.js';
import { fmtMoney } from '../kernel/geometry.js';

const download = (href, name) => {
  const a = document.createElement('a');
  a.href = href; a.download = name; a.click();
};

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 11.5 12 4.5l8 7" /><path d="M6.5 10v9.5h11V10" /><path d="M10.5 19.5v-5h3v5" />
  </svg>
);
const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="12" cy="12" r="3.6" /><path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2M6 6l1.4 1.4M16.6 16.6 18 18M18 6l-1.4 1.4M7.4 16.6 6 18" />
  </svg>
);

export default function TopBar({ onToggleSheet }) {
  const viewMode = useDesign(s => s.viewMode);
  const setView = useDesign(s => s.setView);
  const canUndo = useDesign(s => s.past.length > 0);
  const canRedo = useDesign(s => s.future.length > 0);
  const { undo, redo } = useDesign.getState();
  const time = useDesign(s => s.timeOfDay);
  const setTime = useDesign(s => s.setTime);
  const cap = useDesign(s => s.budgetCap);
  const setCap = useDesign(s => s.setCap);
  const budget = useDesign(budgetOf);
  const fileRef = useRef(null);
  const [toast, setToast] = useState(null);
  const ping = msg => { setToast(msg); setTimeout(() => setToast(null), 1800); };

  const pct = Math.min(100, (budget.total / cap) * 100);
  const tone = pct > 100 ? 'over' : pct > 85 ? 'warn' : 'ok';

  const saveLocal = () => {
    const s = useDesign.getState();
    localStorage.setItem('LayoutLab:save', JSON.stringify({
      walls: s.walls, furniture: s.furniture, roomMaterials: s.roomMaterials,
      wallMaterials: s.wallMaterials, wallHeight: s.wallHeight,
    }));
    ping('Saved to this device');
  };

  const exportJSON = () => {
    const s = useDesign.getState();
    const proj = {
      schemaVersion: '1.0.0', name: 'LayoutLab Plan', units: 'ft',
      grid: { cellSizeFt: 1, cols: 60, rows: 60 },
      budget: { currency: 'USD', capUsd: s.budgetCap },
      levels: [{
        id: 'lvl_ground', wallHeightFt: s.wallHeight,
        walls: s.walls,
        furniture: s.furniture.map(f => ({ id: f.id, catalogId: f.itemId, pos: f.pos, rotDeg: f.rotDeg, tint: f.tint ?? null, sw: f.sw ?? 1, sd: f.sd ?? 1 })),
        roomMaterials: s.roomMaterials, wallMaterials: s.wallMaterials,
      }],
      meta: { updatedAt: new Date().toISOString() },
    };
    const url = URL.createObjectURL(new Blob([JSON.stringify(proj, null, 2)], { type: 'application/json' }));
    download(url, 'LayoutLab-plan.json');
    URL.revokeObjectURL(url);
    ping('Plan exported');
  };

  const importJSON = file => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        if (data.levels?.[0]) {
          const lvl = data.levels[0];
          useDesign.getState().hydrate({
            walls: lvl.walls || [],
            furniture: (lvl.furniture || []).map(f => {
              const it = itemById(f.catalogId);
              return { id: f.id, itemId: f.catalogId, pos: f.pos, rotDeg: f.rotDeg ?? 0, tint: f.tint ?? null, sw: f.sw ?? 1, sd: f.sd ?? 1, w: it?.w ?? 1, d: it?.d ?? 1 };
            }),
            roomMaterials: lvl.roomMaterials || {}, wallMaterials: lvl.wallMaterials || {},
            wallHeight: lvl.wallHeightFt || 8,
          });
        } else if (data.walls) useDesign.getState().hydrate(data);
        if (data.budget?.capUsd) setCap(data.budget.capUsd);
        ping('Plan loaded');
      } catch { ping('Could not read that file'); }
    };
    reader.readAsText(file);
  };

  const exportPNG = () => {
    const url = viewerApi.snapshot?.();
    if (url) { download(url, `LayoutLab-${viewMode}.png`); ping('Photo saved'); }
  };

  return (
    <header className="topbar">
      <div className="brand">
        <span className="brand-mark"><HomeIcon /></span>
        <div>
          <div className="brand-name">LayoutLab</div>
          <div className="brand-tag">plan it before you buy it</div>
        </div>
      </div>

      <div className="viewtoggle" role="tablist" aria-label="View mode">
        {[['2d', '2D Plan'], ['3d', '3D View'], ['walk', 'Walk through']].map(([m, label]) => (
          <button key={m} className={viewMode === m ? 'on' : ''} onClick={() => setView(m)} role="tab" aria-selected={viewMode === m}>{label}</button>
        ))}
      </div>

      <div className="topbtns">
        <button className="btn icon" disabled={!canUndo} onClick={undo} title="Undo (Ctrl+Z)">↶</button>
        <button className="btn icon" disabled={!canRedo} onClick={redo} title="Redo (Ctrl+Y)">↷</button>
        <span className="vr" />
        <button className="btn primary" onClick={saveLocal} title="Save your plan on this device">Save</button>
        <button className="btn opt" onClick={() => fileRef.current?.click()} title="Open a saved plan file">Open</button>
        <button className="btn opt" onClick={exportJSON} title="Download your plan as a file">Export</button>
        <button className="btn opt" onClick={exportPNG} title="Download a picture of this view">Photo</button>
        <button className="btn danger" onClick={() => { if (confirm('Start a fresh, empty plan?')) useDesign.getState().clearAll(); }} title="Clear everything and start over">New</button>
        <input ref={fileRef} type="file" accept=".json" hidden onChange={e => e.target.files[0] && importJSON(e.target.files[0])} />
      </div>

      {viewMode !== '2d' && (
        <label className="sunctl" title="Time of day — watch the light move">
          <SunIcon />
          <input type="range" min="5" max="21" step="0.25" value={time} onChange={e => setTime(+e.target.value)} />
          <span className="mono">{Math.floor(time)}:{String(Math.round((time % 1) * 60)).padStart(2, '0')}</span>
        </label>
      )}

      <div className={`budget ${tone}`} title={`Furniture ${fmtMoney(budget.items)} · Finishes ${fmtMoney(budget.finishes)}`}>
        <span className="budget-label">Budget</span>
        <span className="budget-total">{fmtMoney(budget.total)}</span>
        <div className="budget-track"><div className="budget-fill" style={{ width: `${pct}%` }} /></div>
        <span className="budget-cap mono">
          $<input type="number" value={cap} min={100} step={100} onChange={e => setCap(+e.target.value || 100)} aria-label="Budget cap" />
        </span>
      </div>

      <button className="btn sheetbtn" onClick={onToggleSheet}>Furniture ▤</button>
      {toast && <div className="toast" role="status">{toast}</div>}
    </header>
  );
}