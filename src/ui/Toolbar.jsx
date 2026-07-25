import { useDesign } from '../store/designStore.js';

const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' };

const ICONS = {
  select: <svg viewBox="0 0 24 24"><path d="M7 3.5v14.8l3.6-3.5 2.3 5.2 2.6-1.2-2.3-5.1 4.8-.4z" fill="currentColor" /></svg>,
  wall: <svg viewBox="0 0 24 24" {...stroke}><rect x="3.5" y="4.5" width="17" height="15" rx="1.5" /><path d="M3.5 9.5h17M3.5 14.5h17M9 4.5V9.5M15 9.5v5M9 14.5v5" /></svg>,
  door: <svg viewBox="0 0 24 24" {...stroke}><path d="M5 20h14" /><path d="M7 20V5.5A1.5 1.5 0 0 1 8.5 4h7A1.5 1.5 0 0 1 17 5.5V20" /><circle cx="14.3" cy="12.3" r="0.9" fill="currentColor" stroke="none" /></svg>,
  window: <svg viewBox="0 0 24 24" {...stroke}><rect x="4.5" y="4.5" width="15" height="15" rx="1.5" /><path d="M12 4.5v15M4.5 12h15" /></svg>,
  floor: <svg viewBox="0 0 24 24" {...stroke}><rect x="3.5" y="4" width="12" height="5" rx="2" /><path d="M15.5 6.5h4V12h-8v2.5" /><rect x="9.5" y="14.5" width="4" height="6" rx="1.2" /></svg>,
  wallpaint: <svg viewBox="0 0 24 24" {...stroke}><path d="M14 4l6 6-3.2 3.2-6-6z" /><path d="M10.8 7.2C8 8.5 6.5 10.5 6.5 12.8c0 1.3-.9 2.3-2.5 2.7 1 .9 3.2 1 4.8 0 2-1.3 2.6-4 2-8.3z" /></svg>,
  erase: <svg viewBox="0 0 24 24" {...stroke}><path d="M5 20h14" /><path d="M9 14.5 14.5 9a2 2 0 0 1 2.8 0l2.2 2.2a2 2 0 0 1 0 2.8L14 19.5H11l-2-2a2 2 0 0 1 0-3z" /><path d="m11.5 12 5 5" /></svg>,
  hide: <svg viewBox="0 0 24 24" {...stroke}><path d="M4.5 4.5l15 15" /><path d="M10.7 6.1c.4-.1.9-.1 1.3-.1 4.6 0 7.9 3.6 9 6a1 1 0 0 1 0 .8c-.7 1.6-2.4 3.7-4.9 5M6.9 7.6C4.6 9.1 3 11.1 2.2 12.6a1 1 0 0 0 0 .8C3.3 15.8 6.6 19.4 11.2 19.4c1.2 0 2.3-.2 3.3-.6" /></svg>,
};

const TOOLS = [
  { id: 'select',    label: 'Select',  tip: 'Select & move things (V)' },
  { id: 'wall',      label: 'Walls',   tip: 'Draw a wall (W)', primary: true },
  { id: 'door',      label: 'Door',    tip: 'Add a door (D)' },
  { id: 'window',    label: 'Window',  tip: 'Add a window (N)' },
  { id: 'floor',     label: 'Floor',   tip: 'Change flooring (F)' },
  { id: 'wallpaint', label: 'Paint',   tip: 'Paint walls (P)' },
  { id: 'erase',     label: 'Erase',   tip: 'Remove things (E)' },
];

export default function Toolbar() {
  const tool = useDesign(s => s.tool);
  const setTool = useDesign(s => s.setTool);
  const tipsHidden = useDesign(s => s.tipsHidden);
  const hideTips = useDesign(s => s.hideTips);
  const showTips = useDesign(s => s.showTips);

  return (
    <nav className="toolbar" aria-label="Tools">
      {TOOLS.map(t => (
        <button
          key={t.id}
          className={`tool ${tool === t.id ? 'on' : ''} ${t.primary ? 'primary' : ''}`}
          onClick={() => { setTool(t.id); showTips(); }}
          title={t.tip}
          aria-pressed={tool === t.id}
        >
          {ICONS[t.id]}
          <span className="tool-label">{t.label}</span>
        </button>
      ))}
      <span className="tool-sep" aria-hidden="true" />
      <button
        className={`tool ${tipsHidden ? 'on' : ''}`}
        onClick={hideTips}
        title="Hide the tips box — click any tool to bring it back (H)"
        aria-pressed={tipsHidden}
      >
        {ICONS.hide}
        <span className="tool-label">Hide box</span>
      </button>
    </nav>
  );
}