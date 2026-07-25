import * as THREE from 'three';

const cache = new Map();

export function floorTexture(mat) {
  if (cache.has(mat.id)) return cache.get(mat.id);
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = mat.base; g.fillRect(0, 0, 256, 256);

  if (mat.pattern === 'plank') {
    g.strokeStyle = mat.line; g.lineWidth = 3;
    for (let y = 0; y <= 256; y += 64) { g.beginPath(); g.moveTo(0, y); g.lineTo(256, y); g.stroke(); }
    g.lineWidth = 2;
    for (let row = 0; row < 4; row++) {
      const x = row % 2 ? 64 : 192;
      g.beginPath(); g.moveTo(x, row * 64); g.lineTo(x, row * 64 + 64); g.stroke();
    }
    g.globalAlpha = 0.08;
    for (let i = 0; i < 60; i++) {
      g.strokeStyle = i % 2 ? '#000' : '#fff';
      const y = Math.random() * 256;
      g.beginPath(); g.moveTo(0, y); g.lineTo(256, y + (Math.random() - .5) * 8); g.stroke();
    }
    g.globalAlpha = 1;
  } else if (mat.pattern === 'tile') {
    g.strokeStyle = mat.line; g.lineWidth = 5;
    for (let i = 0; i <= 256; i += 128) {
      g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 256); g.stroke();
      g.beginPath(); g.moveTo(0, i); g.lineTo(256, i); g.stroke();
    }
  } else {
    for (let i = 0; i < 500; i++) {
      g.fillStyle = `rgba(${i % 2 ? '255,255,255' : '0,0,0'},.05)`;
      g.fillRect(Math.random() * 256, Math.random() * 256, 2, 2);
    }
  }

  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(1 / (mat.tileFt ?? 2), 1 / (mat.tileFt ?? 2)); // ShapeGeometry UVs are in feet
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  cache.set(mat.id, tex);
  return tex;
}