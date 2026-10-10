import { ISLANDS as OLD_ISLANDS } from './archipelago-layout.mjs';
import { islandCoastline, islandElevation } from './archipelago-terrain.mjs';
import { VILLAGE as OLD_VILLAGE } from './campaign-scenery.mjs';

// Twenty planning units are one metre. Buildings, people and movement retain
// that scale; only the campaign's geography grows. The original game keeps its
// own layout and save coordinates.
export const SCALE = 20;
export const WORLD_VERSION = 2;
export const ISLANDS = OLD_ISLANDS.map((i,j)=>({...i,x:i.x*16,z:i.z*16,dock:{x:i.dock.x*16,z:i.dock.z*16},
  radius:i.id==='home'?9000:i.radius*16,coastSeed:1.3+j*1.7,
  relief:i.id==='home'?24:i.biome==='highlands'?85:i.biome==='rainforest'?42:i.biome==='rocky'?28:12}));
export const ISLAND_BY_ID = Object.fromEntries(ISLANDS.map(i=>[i.id,i]));
export const bounds = {minX:Math.min(...ISLANDS.map(i=>i.x-i.radius))-1600,
  maxX:Math.max(...ISLANDS.map(i=>i.x+i.radius))+1600,
  minZ:Math.min(...ISLANDS.map(i=>i.z-i.radius))-1600,
  maxZ:Math.max(...ISLANDS.map(i=>i.z+i.radius))+1600};
export const getIslandAt = (x,z)=>ISLANDS.find(i=>Math.hypot(x-i.x,z-i.z)<i.radius)||null;
export const docks = Object.fromEntries(ISLANDS.map((i,j)=>{
  const old=OLD_ISLANDS[j],distance=Math.hypot(old.dock.x-old.x,old.dock.z-old.z);
  const ux=(old.dock.x-old.x)/distance,uz=(old.dock.z-old.z)/distance;
  const coast=i.radius*islandCoastline(i,Math.atan2(uz,ux));
  const at=r=>({x:i.x+ux*r,z:i.z+uz*r});
  return [i.id,{id:i.id,...at(coast+320),ux,uz,land:at(coast-320),
    end:at(coast+240),shore:at(coast+200),width:38,deck:.72}];
}));
export const villageAnchor = {x:docks.home.land.x-385,z:docks.home.land.z-40};
export const VILLAGE = OLD_VILLAGE.map(b=>({...b,x:b.x+villageAnchor.x,z:b.z+villageAnchor.z,
  facing:b.z>60?Math.PI:0}));
const atVillage=(x,z)=>({x:x+villageAnchor.x,z:z+villageAnchor.z});
export const PATHS = [
  {width:55,points:Array.from({length:31},(_,j)=>j===0?{...docks.home.land}:atVillage(385-j*21,36+Math.sin(j*.19)*9))},
  {width:40,points:Array.from({length:15},(_,j)=>atVillage(23,-280+j*39))},
  {width:36,points:[atVillage(-245,40),atVillage(-600,30),{x:ISLAND_BY_ID.home.radius*.35,z:400},{x:800,z:-700},{x:-1800,z:-2400}]}
];
export const market = atVillage(290,-30);
export const estateCenter = {x:docks.fortress.land.x-docks.fortress.ux*800,z:docks.fortress.land.z-docks.fortress.uz*800};
export const fortressApproach = {x:estateCenter.x-115,z:estateCenter.z+145};
export const points = {
  pump:atVillage(330,65),cave:{x:docks.jungle.land.x-docks.jungle.ux*700,z:docks.jungle.land.z-docks.jungle.uz*700},
  estate:{x:estateCenter.x,z:estateCenter.z+102},
  paper:{x:0,z:-40},caveExit:{x:0,z:150},estateExit:{x:0,z:130},
  stairs:{x:70,z:-95},cellarExit:{x:0,z:150},key:{x:0,z:-60}
};
points.supply={x:points.cave.x+150,z:points.cave.z-105};
export const GUARDS = [
  {id:'gate',area:null,...fortressApproach,hp:2},
  {id:'patrol',area:null,x:estateCenter.x+110,z:estateCenter.z+85,hp:2},
  {id:'hall',area:'estate',x:-65,z:15,hp:2},
  {id:'boss',area:'estate',x:0,z:-60,hp:3}
];
function blend(a,b,t){t=Math.max(0,Math.min(1,t));t=t*t*(3-2*t);return a+(b-a)*t;}
export function terrainHeight(x,z,island=getIslandAt(x,z)) {
  if(!island)return -.32;
  let y=islandElevation(island,x,z);
  if(y<=.01)return y;
  // Flat foundations and streets have their own height, rather than houses
  // inheriting a steep hill or a player standing above a level floor.
  if(island.id==='home'){
    const distance=Math.hypot(x-villageAnchor.x+80,z-villageAnchor.z);
    if(distance<820)y=blend(.68,y,(distance-470)/350);
  }
  if(island.id==='fortress'){
    const distance=Math.max(Math.abs(x-estateCenter.x),Math.abs(z-estateCenter.z));
    if(distance<400)y=blend(.85,y,(distance-180)/220);
  }
  if(island.id==='jungle'){
    const distance=Math.hypot(x-points.cave.x,z-points.cave.z);
    if(distance<230)y=blend(1.2,y,(distance-100)/130);
  }
  return y;
}
export function pierAt(x,z,islandId) {
  for(const d of islandId?[docks[islandId]]:Object.values(docks)){
    if(!d)continue;
    const dx=x-d.land.x,dz=z-d.land.z,along=dx*d.ux+dz*d.uz,across=dx*d.uz-dz*d.ux;
    const length=Math.hypot(d.end.x-d.land.x,d.end.z-d.land.z);
    if(along>=-.5&&along<=length+.5&&Math.abs(across)<=d.width/2){
      const start=terrainHeight(d.land.x,d.land.z);
      return {dock:d,height:start+(d.deck-start)*Math.max(0,Math.min(1,along/length))};
    }
  }
  return null;
}
export function ground(x,z){return pierAt(x,z)?.height??terrainHeight(x,z);}
export function pathClear(x,z) {
  return PATHS.some(path=>path.points.some((b,j)=>{
    if(!j)return false;const a=path.points[j-1],dx=b.x-a.x,dz=b.z-a.z;
    const t=Math.max(0,Math.min(1,((x-a.x)*dx+(z-a.z)*dz)/(dx*dx+dz*dz)));
    return Math.hypot(x-a.x-dx*t,z-a.z-dz*t)<path.width/2+35;
  }));
}

const oldDocks=Object.fromEntries(OLD_ISLANDS.map(i=>{
  const n=Math.hypot(i.dock.x-i.x,i.dock.z-i.z),ux=(i.dock.x-i.x)/n,uz=(i.dock.z-i.z)/n;
  return [i.id,{x:i.x+ux*i.radius*1.06,z:i.z+uz*i.radius*1.06,
    shore:{x:i.x+ux*i.radius*.84,z:i.z+uz*i.radius*.84}}];
}));
export function migratePosition(p,s) {
  if(s.interior)return {...p};
  if(s.boat){
    const [id,near]=Object.entries(oldDocks).sort((a,b)=>Math.hypot(p.x-a[1].x,p.z-a[1].z)-Math.hypot(p.x-b[1].x,p.z-b[1].z))[0];
    if(Math.hypot(p.x-near.x,p.z-near.z)<360)return {x:docks[id].x+p.x-near.x,z:docks[id].z+p.z-near.z};
    return {x:p.x*16,z:p.z*16};
  }
  const old=OLD_ISLANDS.find(i=>i.id===s.island),dock=oldDocks[s.island];
  if(Math.hypot(p.x-dock.shore.x,p.z-dock.shore.z)<70)
    return {x:docks[s.island].shore.x+p.x-dock.shore.x,z:docks[s.island].shore.z+p.z-dock.shore.z};
  if(s.island==='home')return {x:p.x+villageAnchor.x,z:p.z+villageAnchor.z};
  if(s.island==='jungle')return {x:p.x-1080+points.cave.x,z:p.z+415+points.cave.z};
  if(s.island==='fortress')return {x:p.x-1900+estateCenter.x,z:p.z-550+estateCenter.z};
  return {x:ISLAND_BY_ID[s.island].x+(p.x-old.x)*16,z:ISLAND_BY_ID[s.island].z+(p.z-old.z)*16};
}
export function migrateGuard(g) {
  if(g.area)return {...g};
  const old=g.id==='gate'?{x:1785,z:695}:{x:2010,z:635},next=GUARDS.find(v=>v.id===g.id);
  return {...g,x:g.x-old.x+next.x,z:g.z-old.z+next.z};
}
