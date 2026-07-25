import { useEffect, useState } from 'react';
import { useDesign, seedDemo } from './store/designStore.js';
import BlueprintCanvas from './canvas2d/BlueprintCanvas.jsx';
import ThreeViewer from './three/ThreeViewer.jsx';
import TopBar from './ui/TopBar.jsx';
import Toolbar from './ui/Toolbar.jsx';
import CatalogPanel from './ui/CatalogPanel.jsx';
import Inspector from './ui/Inspector.jsx';
import HelpCard from './ui/HelpCard.jsx';

const TOOL_KEYS = { v: 'select', w: 'wall', d: 'door', n: 'window', f: 'floor', p: 'wallpaint', e: 'erase' };

export default function App() {
  const viewMode = useDesign(s => s.viewMode);
  const selected = useDesign(s => s.selected);
  const tipsHidden = useDesign(s => s.tipsHidden);
  const [sheet, setSheet] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  useEffect(() => {
    const onKey = e => {
      if (/input|textarea|select/i.test(e.target.tagName)) return;
      const s = useDesign.getState();
      const k = e.key.toLowerCase();
      if ((e.ctrlKey || e.metaKey) && k === 'z') { e.preventDefault(); return e.shiftKey ? s.redo() : s.undo(); }
      if ((e.ctrlKey || e.metaKey) && k === 'y') { e.preventDefault(); return s.redo(); }
      if (k === 'escape') { s.setTool('select'); s.select(null); setHelpOpen(false); return; }
      if (k === 'h') return s.hideTips();
      if (k === 'r') {
        if (s.tool === 'place') return s.rotatePlacing();
        if (s.selected?.kind === 'furniture') {
          const f = s.furniture.find(x => x.id === s.selected.id);
          if (f) { s.commit(); s.updateFurniture(f.id, { rotDeg: (f.rotDeg + 45) % 360 }); }
        }
        return;
      }
      if (k === 'delete' || k === 'backspace') {
        if (s.selected?.kind === 'furniture') { s.commit(); s.deleteFurniture(s.selected.id); s.select(null); }
        else if (s.selected?.kind === 'wall') { s.commit(); s.deleteWall(s.selected.id); s.select(null); }
        return;
      }
      if (k === '1') return s.setView('2d');
      if (k === '2') return s.setView('3d');
      if (k === '3') return s.setView('walk');
      if (s.viewMode === 'walk') return;
      if (TOOL_KEYS[k]) { s.setTool(TOOL_KEYS[k]); s.showTips(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const raw = localStorage.getItem('LayoutLab:save');
    if (raw) { try { useDesign.getState().hydrate(JSON.parse(raw)); } catch { seedDemo(); } }
    else seedDemo();
    let t;
    const unsub = useDesign.subscribe(s => {
      clearTimeout(t);
      t = setTimeout(() => localStorage.setItem('LayoutLab:save', JSON.stringify({
        walls: s.walls, furniture: s.furniture, roomMaterials: s.roomMaterials,
        wallMaterials: s.wallMaterials, wallHeight: s.wallHeight,
      })), 1200);
    });
    return () => { unsub(); clearTimeout(t); };
  }, []);

  // Box shows when: something is selected (its editor), or tips aren't hidden.
  // The ? help card takes the slot when open.
  const showInspector = !helpOpen && (!!selected || !tipsHidden);

  return (
    <div className="app">
      <TopBar onToggleSheet={() => setSheet(v => !v)} />
      <div className="stage">
        <Toolbar />
        <main className="viewport">
          {viewMode === '2d' ? <BlueprintCanvas /> : <ThreeViewer />}
        </main>
        <CatalogPanel open={sheet} onClose={() => setSheet(false)} />

        {showInspector && <Inspector />}
        {helpOpen && <HelpCard onClose={() => setHelpOpen(false)} />}
        <button
          className={`helpbtn ${helpOpen ? 'on' : ''}`}
          onClick={() => setHelpOpen(v => !v)}
          title="Tips & shortcuts"
          aria-label="Tips and shortcuts"
        >?</button>
      </div>
    </div>
  );
}