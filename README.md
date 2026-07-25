# LayoutLab v1
Draw rooms → drop furniture → walk the plan. Sims-style planner, zero backend, zero assets.

## Run
    npm install
    npm run dev          # http://localhost:5173

## Deploy
    npm run build        # → dist/ (relative paths, works on any static host)
- Netlify / Vercel: drop `dist/` or connect the repo (build: `npm run build`, out: `dist`)
- GitHub Pages: push `dist/` to a `gh-pages` branch — `base: './'` already handles subpaths

## Controls
| Action | Desktop | Mobile |
|---|---|---|
| Draw walls | W, click+drag (chains; click start square to stop) | same |
| Door / window | D / N, tap wall, drag to slide | same |
| Place furniture | catalog → tap plan · R rotates · Esc stops | CATALOG ▤ button |
| Move / rotate | drag · R | drag · inspector ↻ |
| Views | 1 / 2 / 3 keys | top toggle |
| Walk | drag look · WASD | drag look · ▲▼ pads |
| Camera | wheel zoom · middle-drag pan | pinch · two-finger pan |
| Undo/redo | Ctrl+Z / Ctrl+Shift+Z | toolbar ↶ ↷ |

## v1 scope → roadmap
In: wall chains + planar-graph room detection, opening splitting (real light through windows),
SAT collision with red/green ghosts, wall-flush + 45° snapping, procedural furniture & textures,
time-of-day sun, budget tracker, undo/redo, autosave, JSON/PNG export, touch + PWA-ready shell.
Next: GLB models behind the same `parts` spec, react-three-fiber migration, ceilings/roofs,
3D drag-placement, PDF layout sheet (jsPDF), wall endpoint editing.