const TIPS = [
  { dot: '#C97B5A', title: 'Moving around the plan',
    body: 'Scroll to zoom. Drag any empty space to pan (or hold Space and drag). On touch: pinch to zoom, two fingers to pan.' },
  { dot: '#C97B5A', title: 'Walls',
    body: 'Click and drag to draw. Walls chain together and snap to corners — click the starting circle (or press Esc) to stop. Close a loop and the floor appears by itself.' },
  { dot: '#7FA6BC', title: 'Doors & windows',
    body: 'Tap a wall to add one, then drag it along the wall to slide it. Sunlight in 3D shines straight through them.' },
  { dot: '#9CAF97', title: 'Furniture',
    body: 'Open the catalog, pick a piece, then tap your room. Green means it fits, red means blocked. Press R to turn it 45°, drag to rearrange.' },
  { dot: '#D9A441', title: 'Floors & paint',
    body: 'Pick a swatch, then tap a room (floor) or a wall (paint). Every finish is priced per square foot and added to your budget.' },
  { dot: '#D98276', title: 'Oops — undo',
    body: 'Ctrl+Z undoes almost anything; Ctrl+Shift+Z redoes it. The Erase tool removes whatever you tap.' },
  { dot: '#5E7259', title: '3D view & walk-through',
    body: 'In 3D: drag to orbit, scroll to zoom. In Walk: drag to look around, use WASD (or the ▲▼ buttons) to stroll through — you can’t walk through walls, but doors are open.' },
  { dot: '#B4643F', title: 'Budget & saving',
    body: 'The ticker up top updates live as you design — click the number next to “cap” to set your limit. Save keeps the plan on this device; Export downloads a file; Photo saves a picture.' },
];

const KEYS = ['V select', 'W walls', 'D door', 'N window', 'F floor', 'P paint', 'E erase', '1·2·3 views', 'R rotate', 'Esc cancel', 'Ctrl+Z undo'];

export default function HelpCard({ onClose }) {
  return (
    <div className="helpcard" role="dialog" aria-label="Tips and shortcuts">
      <button className="card-close" onClick={onClose} aria-label="Close tips">✕</button>
      <div className="help-title">How it works</div>
      {TIPS.map(t => (
        <div className="help-row" key={t.title}>
          <h4><span className="dot" style={{ background: t.dot }} />{t.title}</h4>
          <p>{t.body}</p>
        </div>
      ))}
      <div className="help-keys">
        {KEYS.map(k => {
          const [key, ...rest] = k.split(' ');
          return <kbd key={k} title={rest.join(' ')}>{key}</kbd>;
        })}
      </div>
    </div>
  );
}