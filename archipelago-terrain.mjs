import * as THREE from 'three';
import { ISLANDS } from './archipelago-layout.mjs';

// Separate, deterministic geometry. No save data, quest state or RNG is touched.
// Coordinates in the layout are world-space planning coordinates.
export function islandElevation(island, x, z) {
  const dx=(x-island.x)/island.radius, dz=(z-island.z)/island.radius;
  const r=Math.hypot(dx,dz);
  if(r>=1) return -0.32;
  const coast=Math.max(0,Math.min(1,(1-r)*8));
  const hills=(Math.sin(x*.018+island.radius)*Math.cos(z*.021)+1)*.5;
  return -.03+coast*(.45+ hills*(island.biome==='highlands'?2.8:.7));
}
export function createIslandTerrain(island, {segments=48}={}) {
  if(!Number.isInteger(segments)||segments<8||segments>256) throw new RangeError('segments must be 8..256');
  const geometry=new THREE.PlaneGeometry(island.radius*2,island.radius*2,segments,segments);
  geometry.rotateX(-Math.PI/2);
  const pos=geometry.attributes.position;
  for(let i=0;i<pos.count;i++) {
    const x=island.x+pos.getX(i), z=island.z+pos.getZ(i);
    pos.setY(i,islandElevation(island,x,z));
  }
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
