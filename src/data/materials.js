export const FLOORS = [
  { id: 'oak',      name: 'Oak Planks',        pricePerSqFt: 6.50, base: '#b08a5e', line: '#8a6a45', pattern: 'plank', tileFt: 2 },
  { id: 'walnut',   name: 'Walnut Planks',     pricePerSqFt: 8.75, base: '#6b4a33', line: '#4e3524', pattern: 'plank', tileFt: 2 },
  { id: 'tile',     name: 'Ceramic Tile',      pricePerSqFt: 4.25, base: '#cfd6d3', line: '#aeb8b4', pattern: 'tile',  tileFt: 2 },
  { id: 'marble',   name: 'Marble Tile',       pricePerSqFt: 11.0, base: '#e8e6e1', line: '#c9c5bd', pattern: 'tile',  tileFt: 2 },
  { id: 'concrete', name: 'Polished Concrete', pricePerSqFt: 3.50, base: '#a9aca9', line: '#979a97', pattern: 'none',  tileFt: 6 },
  { id: 'carpet',   name: 'Berber Carpet',     pricePerSqFt: 2.75, base: '#b7ab98', line: '#a89c88', pattern: 'none',  tileFt: 6 },
];

export const PAINTS = [
  { id: 'swiss', name: 'Swiss Coffee', pricePerSqFt: 0.45, color: '#efe9dc' },
  { id: 'white', name: 'Gallery White',pricePerSqFt: 0.40, color: '#f4f4f0' },
  { id: 'sage',  name: 'Sage',         pricePerSqFt: 0.45, color: '#a9b49e' },
  { id: 'slate', name: 'Slate Blue',   pricePerSqFt: 0.45, color: '#7d8fa3' },
  { id: 'clay',  name: 'Warm Clay',    pricePerSqFt: 0.45, color: '#c08265' },
  { id: 'char',  name: 'Charcoal',     pricePerSqFt: 0.50, color: '#4a4d50' },
];

export const floorById = id => FLOORS.find(m => m.id === id);
export const paintById = id => PAINTS.find(m => m.id === id);
export const FABRICS = [
  { hex: '#77896b', name: 'Sage' },
  { hex: '#c97b5a', name: 'Terracotta' },
  { hex: '#d9a441', name: 'Honey' },
  { hex: '#8a6f5c', name: 'Walnut' },
  { hex: '#7d8fa3', name: 'Dusty Blue' },
  { hex: '#c2a3a0', name: 'Blush Clay' },
  { hex: '#4a4d50', name: 'Charcoal' },
  { hex: '#e6ddcb', name: 'Oat Cream' },
];