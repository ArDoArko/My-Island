import { ISLANDS,ISLAND_BY_ID,getIslandAt,SCALE,WORLD_VERSION,docks,points,GUARDS,VILLAGE,bounds,
  estateCenter,fortressApproach,ground,terrainHeight,pierAtInto,migratePosition,migrateGuard } from './campaign-world.mjs';
import { sceneryBlocked } from './campaign-scenery.mjs';
import { islandElevation } from './archipelago-terrain.mjs';
export { text } from './campaign-text.mjs';
export { ISLANDS,SCALE,docks,points,GUARDS,bounds,estateCenter,fortressApproach,ground };

// The campaign has its own world and save. Legacy accounts and co-op are untouched.
export const VERSION = 1;
export const SAVE_KEY = 'myIslandCampaignV1';
export const dist = (a,b) => Math.hypot(a.x-b.x,a.z-b.z);
const clamp = (v,a,b) => Math.max(a,Math.min(b,v));
const dockList=Object.values(docks);
export const PEOPLE = Array.from({length:5},(_,id)=>({id,x:(id-2)*38,z:-80,child:id>2}));
const cellIds=PEOPLE.map(p=>'cell-'+p.id),dockIds=Object.fromEntries(dockList.map(d=>[d.id,'dock-'+d.id]));
export function fresh() {
  return {version:VERSION,worldVersion:WORLD_VERSION,p:{x:docks.home.x+180,z:docks.home.z+70},heading:Math.PI,
    boat:true,boatAt:'home',interior:null,island:'home',fuel:12,hp:100,ammo:0,
    docked:false,tanked:false,paper:false,gun:false,key:false,escaped:false,complete:false,
    released:[],boarded:false,supplyUsed:false,guards:GUARDS.map(g=>({...g,cooldown:2})),elapsed:0,
    lastShot:-10,shot:null,notice:'intro'};
}
export function restore(input) {
  const s=fresh();if(!input||input.version!==VERSION)return s;
  for(const k of ['docked','tanked','paper','gun','key','escaped','complete','boarded','supplyUsed'])
    s[k]=input[k]===true;
  s.gun=s.gun&&s.paper;s.key=s.key&&s.gun;s.complete=s.complete&&s.key;
  s.released=s.key&&Array.isArray(input.released)?PEOPLE.filter(p=>input.released.includes(p.id)).map(p=>p.id):[];
  s.boarded=s.boarded&&s.released.length===5;s.complete=s.complete&&s.boarded;
  s.interior=['cave','estate','cellar'].includes(input.interior)?input.interior:null;
  if(s.interior==='cellar'&&!s.key)s.interior='estate';
  s.boat=!s.interior&&input.boat===true;
  s.boatAt=ISLAND_BY_ID[input.boatAt]?input.boatAt:'home';
  s.island=ISLAND_BY_ID[input.island]?input.island:'home';
  for(const [k,a,b] of [['fuel',0,100],['hp',1,100],['ammo',0,48],['heading',-100,100],['elapsed',0,1e8]])
    if(Number.isFinite(input[k]))s[k]=clamp(input[k],a,b);
  s.ammo=s.gun?Math.floor(s.ammo):0;
  const safePosition=()=>s.interior?{x:0,z:120}:s.boat?{x:docks[s.boatAt].x,z:docks[s.boatAt].z}:{...docks[s.island].shore};
  if(Number.isFinite(input.p?.x)&&Number.isFinite(input.p?.z)){
    const raw={x:input.p.x,z:input.p.z},p=input.worldVersion===WORLD_VERSION?raw:migratePosition(raw,s);
    if(allowed(s,p))s.p=p;
    else s.p=safePosition();
  } else s.p=safePosition();
  s.guards=GUARDS.map(g=>{
    let old=Array.isArray(input.guards)?input.guards.find(v=>v?.id===g.id):null;
    if(old&&input.worldVersion!==WORLD_VERSION)old=migrateGuard(old);
    const hp=Number.isFinite(old?.hp)?clamp(Math.floor(old.hp),0,g.hp):g.hp;
    const valid=old&&Number.isFinite(old.x)&&Number.isFinite(old.z)&&dist(old,g)<170;
    return {...g,...(valid?{x:old.x,z:old.z}:{}),hp,cooldown:2};
  });
  s.notice=null;return s;
}
export function snapshot(s) {
  const {shot,notice,lastShot,paused,walking,...saved}=s;
  return JSON.parse(JSON.stringify(saved));
}
function blocked(s,p) {
  if(!s.interior&&sceneryBlocked(p,s.island,VILLAGE))return true;
  if(!s.interior&&Math.abs(p.x-estateCenter.x)<90&&Math.abs(p.z-estateCenter.z)<85)return true;
  if(s.interior==='cellar'&&p.z<-30){
    const cell=PEOPLE.find(v=>Math.abs(v.x-p.x)<22);
    if(cell&&!s.released.includes(cell.id))return true;
  }
  return false;
}
const allowedPier={};
export function allowed(s,p) {
  if(!Number.isFinite(p.x)||!Number.isFinite(p.z))return false;
  if(s.interior)return p.x>=-110&&p.x<=110&&p.z>=-115&&p.z<=170&&!blocked(s,p);
  if(p.x<bounds.minX||p.x>bounds.maxX||p.z<bounds.minZ||p.z>bounds.maxZ)return false;
  if(s.boat){
    for(const i of ISLANDS){const dx=p.x-i.x,dz=p.z-i.z;if(dx*dx+dz*dz<i.radius*i.radius&&islandElevation(i,p.x,p.z)>-.025)return false;}
    return true;
  }
  const i=ISLAND_BY_ID[s.island];
  const pier=pierAtInto(allowedPier,p.x,p.z,s.island);if(pier)return !blocked(s,p);
  const dx=p.x-i.x,dz=p.z-i.z,radius=i.radius*.99;
  return dx*dx+dz*dz<radius*radius&&terrainHeight(p.x,p.z,i)>.005&&!blocked(s,p);
}
const linePoint={x:0,z:0};
function lineClear(s,a,b) {
  const dx=b.x-a.x,dz=b.z-a.z,n=Math.ceil(Math.hypot(dx,dz)/12);
  for(let j=1;j<n;j++){
    linePoint.x=a.x+dx*j/n;linePoint.z=a.z+dz*j/n;
    if(blocked(s,linePoint))return false;
  }
  return true;
}
const movementPier={};
export function move(s,dx,dz,dt,options) {
  if(![dx,dz,dt].every(Number.isFinite))return 0;
  const sprint=!!options?.sprint;
  dt=clamp(dt,0,.1);const length=Math.hypot(dx,dz);
  if(length>1){dx/=length;dz/=length;}
  if(!dx&&!dz)return 0;
  if(!s.boat&&!s.interior){
    const pier=pierAtInto(movementPier,s.p.x,s.p.z,s.island);
    if(pier){
      const d=pier.dock,along=dx*d.ux+dz*d.uz,across=dx*d.uz-dz*d.ux;
      // Cardinal keys follow angled planks; sideways movement remains free.
      if(Math.abs(along)>Math.abs(across)){
        const strength=Math.hypot(dx,dz)*Math.sign(along);dx=d.ux*strength;dz=d.uz*strength;
      }
    }
  }
  s.heading=Math.atan2(dx,dz);
  const speed=s.boat?(s.fuel>0?260:40):sprint?115:78;
  const travel=Math.hypot(dx,dz)*speed*dt,n=Math.max(1,Math.ceil(travel/6));
  const beforeX=s.p.x,beforeZ=s.p.z,candidate={x:beforeX,z:beforeZ};
  for(let j=0;j<n;j++){
    candidate.x=s.p.x+dx*speed*dt/n;candidate.z=s.p.z;
    if(allowed(s,candidate))s.p.x=candidate.x;
    candidate.x=s.p.x;candidate.z=s.p.z+dz*speed*dt/n;
    if(allowed(s,candidate))s.p.z=candidate.z;
  }
  const moved=Math.hypot(s.p.x-beforeX,s.p.z-beforeZ);
  if(s.boat)s.fuel=Math.max(0,s.fuel-moved*.0008);
  return moved;
}
const guardStep={x:0,z:0};
export function tick(s,dt,{paused=false}={}) {
  if(paused)return;dt=clamp(dt,0,.1);s.elapsed+=dt;
  if(s.shot&&s.elapsed-s.shot.at>.15)s.shot=null;
  if(!s.gun||s.boat||s.interior==='cave'||s.interior==='cellar')return;
  for(const g of s.guards){
    if(g.area!==s.interior||g.hp<=0)continue;
    const distance=dist(g,s.p);g.cooldown=Math.max(0,g.cooldown-dt);
    if(distance>210||!lineClear(s,g,s.p))continue;
    if(distance>65){
      guardStep.x=g.x+(s.p.x-g.x)/distance*34*dt;guardStep.z=g.z+(s.p.z-g.z)/distance*34*dt;
      if(!blocked(s,guardStep)&&(!s.interior?getIslandAt(guardStep.x,guardStep.z)?.id==='fortress':Math.abs(guardStep.x)<100&&guardStep.z<145)){
        g.x=guardStep.x;g.z=guardStep.z;
      }
    }
    if(distance<145&&g.cooldown<=0){
      s.hp=Math.max(0,s.hp-(g.id==='boss'?12:7));g.cooldown=2.8;s.notice='under-fire';
    }
  }
  if(s.hp<=0){
    s.hp=100;s.interior=null;s.boat=false;s.island=s.boatAt;
    s.p={...docks[s.boatAt].shore};s.ammo=s.gun?Math.max(s.ammo,12):0;s.notice='checkpoint';
    // Return surviving guards to their patrol positions instead of trapping a respawn.
    for(const g of s.guards){const start=GUARDS.find(v=>v.id===g.id);g.x=start.x;g.z=start.z;g.cooldown=3;}
  }
}
export function shoot(s,yaw=s.heading) {
  if(s.boat||!s.gun){s.notice='need-gun';return false;}
  if(s.elapsed-s.lastShot<.32)return false;
  s.lastShot=s.elapsed;
  if(s.ammo<=0){s.notice='empty';return false;}
  s.ammo--;const dx=Math.sin(yaw),dz=Math.cos(yaw);
  let g=null,bestDistanceSquared=220*220;
  if(s.interior!=='cave'&&s.interior!=='cellar'){
    for(const candidate of s.guards){
      if(candidate.area!==s.interior||candidate.hp<=0)continue;
      const gx=candidate.x-s.p.x,gz=candidate.z-s.p.z,distanceSquared=gx*gx+gz*gz;
      if(distanceSquared>=bestDistanceSquared)continue;
      const distance=Math.sqrt(distanceSquared),dot=(gx*dx+gz*dz)/Math.max(1,distance);
      if(dot>.86&&lineClear(s,s.p,candidate)){g=candidate;bestDistanceSquared=distanceSquared;}
    }
  }
  if(g){g.hp--;s.notice=g.hp<=0?'guard-down':'hit';}
  s.shot={at:s.elapsed,from:{...s.p},to:g?{x:g.x,z:g.z}:{x:s.p.x+dx*200,z:s.p.z+dz*200}};
  return true;
}
function closestDock(s) {
  let best=null,bestDistance=125*125;
  for(const dock of dockList){const dx=dock.x-s.p.x,dz=dock.z-s.p.z,distance=dx*dx+dz*dz;if(distance<bestDistance){best=dock;bestDistance=distance;}}
  return best;
}
function candidateInto(out,index,id,point,label){
  const candidate=out[index]||(out[index]={});Object.assign(candidate,point);candidate.id=id;candidate.label=label;return index+1;
}
export function candidatesInto(out,s) {
  let count=0;
  if(s.interior==='cave'){
    count=candidateInto(out,count,'paper',points.paper,s.paper?(s.gun?'supplies':'take-gun'):'move-paper');
    count=candidateInto(out,count,'cave-exit',points.caveExit,'leave-cave');out.length=count;return out;
  }
  if(s.interior==='estate'){
    count=candidateInto(out,count,'key',points.key,'take-key');count=candidateInto(out,count,'stairs',points.stairs,'cellar');
    count=candidateInto(out,count,'estate-exit',points.estateExit,'leave-estate');out.length=count;return out;
  }
  if(s.interior==='cellar'){
    for(const p of PEOPLE)if(!s.released.includes(p.id))count=candidateInto(out,count,cellIds[p.id],p,'free-person');
    count=candidateInto(out,count,'cellar-exit',points.cellarExit,'upstairs');out.length=count;return out;
  }
  if(s.boat){const d=closestDock(s);if(d)count=candidateInto(out,count,dockIds[d.id],d,'dock');out.length=count;return out;}
  const d=docks[s.island];count=candidateInto(out,count,'boat',d.shore,s.released.length===5&&!s.boarded?'board-group':'boat');
  if(s.island==='home')count=candidateInto(out,count,'pump',points.pump,'refuel');
  if(s.island==='jungle'){count=candidateInto(out,count,'cave',points.cave,'enter-cave');count=candidateInto(out,count,'supply',points.supply,'supplies');}
  if(s.island==='fortress')count=candidateInto(out,count,'estate',points.estate,'enter-estate');
  if(['highlands','smugglers','paradise'].includes(s.island)){
    const i=ISLAND_BY_ID[s.island];count=candidateInto(out,count,'supplies',i,'supplies');
  }
  out.length=count;return out;
}
export function candidates(s) {return candidatesInto([],s);}
export function selectNearby(list,position) {
  let best=null,bestDistance=Infinity;
  for(const point of list){
    const limit=point.id.startsWith('cell-')?85:point.id.startsWith('dock-')?125:65,
      dx=point.x-position.x,dz=point.z-position.z,distance=dx*dx+dz*dz;
    if(distance<limit*limit&&distance<bestDistance){best=point;bestDistance=distance;}
  }
  return best;
}
export function updateCampaignFrameState(cache,paused,invalidated=false) {
  if(invalidated)cache.rendered=false;
  if(!paused){cache.rendered=false;return true;}
  if(cache.rendered)return false;
  cache.rendered=true;return true;
}
export function nearby(s) {return selectNearby(candidates(s),s.p);}
export function interact(s) {
  const target=nearby(s);if(!target){s.notice='closer';return false;}
  const id=target.id;
  if(id.startsWith('dock-')){
    const island=id.slice(5);s.boat=false;s.boatAt=s.island=island;s.p={...docks[island].shore};
    s.docked=true;
    if(island==='home'&&s.boarded){s.complete=true;s.notice='victory';}
    else s.notice='docked';
  }else if(id==='boat'){
    s.boat=true;s.p={x:docks[s.island].x,z:docks[s.island].z};s.boatAt=s.island;
    if(s.released.length===5&&s.island==='fortress'){s.boarded=true;s.notice='group-aboard';}
    else s.notice=s.fuel>0?'aboard':'paddle';
  }else if(id==='pump'){
    s.fuel=100;s.hp=100;s.tanked=true;s.notice='tanked';
  }else if(id==='cave'){
    s.interior='cave';s.p={x:0,z:115};s.notice='cave';
  }else if(id==='paper'){
    if(!s.paper){s.paper=true;s.notice='paper';}
    else if(!s.gun){s.gun=true;s.ammo=24;s.notice='gun';}
    else {s.ammo=48;s.hp=100;s.notice='supplied';}
  }else if(id==='cave-exit'){
    s.interior=null;s.island='jungle';s.p={x:points.cave.x,z:points.cave.z+25};s.notice='estate-hint';
  }else if(id==='estate'){
    if(!s.gun){s.notice='need-gun';return false;}
    s.interior='estate';s.p={x:0,z:115};s.notice='estate';
  }else if(id==='estate-exit'){
    s.interior=null;s.island='fortress';s.p={x:points.estate.x,z:points.estate.z+25};
    s.escaped=s.released.length===5;s.notice=s.escaped?'escort':'left-estate';
  }else if(id==='key'){
    if(s.guards.find(g=>g.id==='boss').hp>0){s.notice='boss-first';return false;}
    if(!s.key){s.key=true;s.notice='key';}else s.notice='cellar-hint';
  }else if(id==='stairs'){
    if(!s.key){s.notice='locked';return false;}
    s.interior='cellar';s.p={x:0,z:120};s.notice='cellar';
  }else if(id==='cellar-exit'){
    s.interior='estate';s.p={x:points.stairs.x,z:points.stairs.z+20};s.notice=s.released.length===5?'escort':'more-people';
  }else if(id.startsWith('cell-')){
    if(!s.key){s.notice='locked';return false;}
    const n=Number(id.slice(5));if(!s.released.includes(n))s.released.push(n);
    s.notice=s.released.length===5?'all-free':'freed';
  }else if(id==='supply'||id==='supplies'){
    s.hp=100;s.fuel=100;if(s.gun)s.ammo=48;s.supplyUsed=true;s.notice='supplied';
  }
  return true;
}
function objectiveInto(out,s) {
  if(s.complete){out.key='complete';out.target=null;return out;}
  if(!s.docked){out.key='dock-goal';out.target=docks.home;return out;}
  if(!s.tanked){out.key='fuel-goal';out.target=s.boat?docks.home:points.pump;return out;}
  if(!s.gun){
    if(s.interior==='cave'){out.key=s.paper?'gun-goal':'paper-goal';out.target=points.paper;return out;}
    out.key='cave-goal';out.target=s.boat?docks.jungle:s.island==='jungle'?points.cave:docks[s.island].shore;return out;
  }
  if(s.interior==='cave'){out.key='exit-cave-goal';out.target=points.caveExit;return out;}
  if(!s.key){
    if(s.interior==='estate'){
      const boss=s.guards.find(g=>g.id==='boss');
      out.key=boss.hp>0?'boss-goal':'key-goal';out.target=boss.hp>0?boss:points.key;return out;
    }
    out.key='estate-goal';out.target=s.boat?docks.fortress:s.island==='fortress'?points.estate:docks[s.island].shore;return out;
  }
  if(s.released.length<5){
    out.key=s.interior==='cellar'?'people-goal':'cellar-goal';out.target=s.interior==='cellar'?PEOPLE.find(p=>!s.released.includes(p.id)):
      s.interior==='estate'?points.stairs:s.boat?docks.fortress:points.estate;return out;
  }
  if(s.interior){out.key='escort-goal';out.target=s.interior==='cellar'?points.cellarExit:points.estateExit;return out;}
  if(!s.boarded){out.key='boat-goal';out.target=docks.fortress.shore;return out;}
  out.key='home-goal';out.target=s.boat?docks.home:s.island==='home'?docks.home.shore:docks[s.island].shore;return out;
}
const goalPier={};
export function goalInto(out,s) {
  objectiveInto(out,s);
  if(s.boat||s.interior||!out.target)return out;
  const dock=docks[s.island],onPier=!!pierAtInto(goalPier,s.p.x,s.p.z,s.island);
  if(out.target===dock.shore){if(!onPier&&dist(s.p,dock.land)>65)out.target=dock.land;}
  else if(onPier&&dist(s.p,dock.land)>45)out.target=dock.land;
  return out;
}
export function goal(s) {return goalInto({},s);}
