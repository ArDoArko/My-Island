// Planning coordinates are shared by the renderer and swept collision checks.
// Keep the harbor-to-pump route and every existing mission entrance clear.
export const VILLAGE = Object.freeze([
  {x:95,z:-95,w:105,d:80,h:4.4,color:'#d8b8a3',shutter:'#557f7b'},
  {x:-55,z:-115,w:110,d:85,h:5.8,color:'#d5dfd4',shutter:'#73868b'},
  {x:-210,z:-95,w:100,d:90,h:4.5,color:'#e6cf97',shutter:'#426d73'},
  {x:100,z:110,w:100,d:90,h:5.6,color:'#9fbdac',shutter:'#705b48'},
  {x:-70,z:130,w:110,d:85,h:4.4,color:'#dfc6b5',shutter:'#587e7c'},
  {x:-225,z:110,w:90,d:75,h:4.5,color:'#c5d1d0',shutter:'#7a6a58'}
]);
export function sceneryBlocked(p, island) {
  return island==='home'&&VILLAGE.some(b=>Math.abs(p.x-b.x)<b.w/2+7&&Math.abs(p.z-b.z)<b.d/2+7);
}
