import { useState } from 'react';
import { useDesign } from '../store/designStore.js';
import { CATALOG, CATEGORIES } from '../data/catalog.js';
import { fmtFt, fmtMoney } from '../kernel/geometry.js';

export default function CatalogPanel({ open, onClose }) {
  const [cat, setCat] = useState('All');
  const placingId = useDesign(s => s.placingId);
  const setPlacing = useDesign(s => s.setPlacing);
  const setView = useDesign(s => s.setView);
  const viewMode = useDesign(s => s.viewMode);

  const items = cat === 'All' ? CATALOG : CATALOG.filter(i => i.cat === cat);
  const pick = id => {
    if (viewMode !== '2d') setView('2d');
    setPlacing(id);
    onClose();
  };

  return (
    <aside className={`catalog ${open ? 'open' : ''}`} aria-label="Furniture catalog">
      <div className="cat-head">
        <div>
          <div className="panel-title">Furniture</div>
          <div className="panel-sub">Pick a piece, then tap your room to place it.</div>
        </div>
        <button className="closebtn" onClick={onClose} aria-label="Close catalog">✕</button>
      </div>
      <div className="cat-tabs">
        {['All', ...CATEGORIES].map(c => (
          <button key={c} className={cat === c ? 'on' : ''} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <div className="cat-grid">
        {items.map(item => (
          <button key={item.id} className={`cat-card ${placingId === item.id ? 'active' : ''}`} onClick={() => pick(item.id)}>
            <svg className="mini" viewBox={`${-item.w / 2 - 0.5} ${-item.d / 2 - 0.5} ${item.w + 1} ${item.d + 1}`}>
              {item.parts.map((p, i) => (
                <rect key={i} x={p.dx - p.w / 2} y={p.dz - p.d / 2} width={p.w} height={p.d}
                  fill={item.color} stroke="rgba(60,50,40,.35)" strokeWidth="0.12" />
              ))}
            </svg>
            <span className="cat-name">{item.name}</span>
            <span className="cat-meta mono">{fmtFt(item.w)} × {fmtFt(item.d)} · {fmtMoney(item.price)}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}