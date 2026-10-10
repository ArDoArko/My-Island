import * as THREE from 'three';
import { ISLANDS } from './archipelago-layout.mjs';

// Separate, deterministic geometry. No save data, quest state or RNG is touched.
// Coordinates in the layout are world-space planning coordinates.
export function islandCoastline(island,angle) {
  const phase=island.x*.002+island.z*.001;
  return .955+.023*Math.sin(angle*3+phase)+.012*Math.cos(angle*5-phase);
}
export function islandElevation(island, x, z) {
  const dx=(x-island.x)/island.radius, dz=(z-island.z)/island.radius;
  const r=Math.hypot(dx,dz);
  if(r>=1) return -0.32;
  const a=Math.atan2(dz,dx),coastline=islandCoastline(island,a);
  const beach=Math.max(0,Math.min(1,(coastline-r)/.12));
  if(r>coastline)return -.32*Math.min(1,(r-coastline)/.04);
  const inland=Math.max(0,Math.min(1,(.79-r)/.22));
  const smooth=inland*inland*(3-2*inland);
  const hill=Math.exp(-((dx+.18)**2*4+(dz-.16)**2*5))*.7+
    Math.exp(-((dx-.36)**2*11+(dz+.25)**2*8))*.42;
  const amplitude=island.biome==='highlands'?8.5:island.biome==='rainforest'?2.2:island.biome==='rocky'?1.6:.55;
  return .005+beach*.35+smooth*hill*amplitude;
}
export function createIslandTerrain(island, {segments=48}={}) {
  if(!Number.isInteger(segments)||segments<8||segments>256) throw new RangeError('segments must be 8..256');
  const vertices=[0,islandElevation(island,island.x,island.z),0],uv=[.5,.5],indices=[];
  const rings=Math.ceil(segments/2);
  for(let ring=1;ring<=rings;ring++)for(let j=0;j<=segments;j++){
    const a=j/segments*Math.PI*2,r=island.radius*1.02*ring/rings,x=Math.cos(a)*r,z=Math.sin(a)*r;
    vertices.push(x,islandElevation(island,island.x+x,island.z+z),z);uv.push(.5+x/(island.radius*2.04),.5+z/(island.radius*2.04));
    const k=1+(ring-1)*(segments+1)+j;
    if(j===segments)continue;
    if(ring===1)indices.push(0,k+1,k);
    else {const previous=k-(segments+1);indices.push(previous,k+1,k,previous,previous+1,k+1);}
  }
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));
  geometry.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geometry.setIndex(indices);
  geometry.computeVertexNormals();
  const material=new THREE.MeshStandardMaterial({color:island.biome==='beach'?0xb3bf84:0x54835a,roughness:1,side:THREE.DoubleSide});
  const mesh=new THREE.Mesh(geometry,material);
  mesh.name='archipelago-'+island.id;
  mesh.position.set(island.x,0,island.z);
  mesh.receiveShadow=true;
  return mesh;
}
export function createArchipelagoGroup(options={}) {
  const group=new THREE.Group();
  group.name='archipelago-terrain';
  for(const island of ISLANDS) group.add(createIslandTerrain(island,options));
  return group;
}
export function disposeArchipelago(group) {
  group.traverse(o=>{if(o.isMesh){o.geometry.dispose();o.material.dispose();}});
}
