import { ISLANDS, ISLAND_BY_ID, getIslandAt } from './archipelago-layout.mjs';
import { islandElevation } from './archipelago-terrain.mjs';
export { text } from './campaign-text.mjs';
export { ISLANDS };

// The campaign has its own world and save. Legacy accounts and co-op are untouched.
export const VERSION = 1;
export const SAVE_KEY = 'myIslandCampaignV1';
export const SCALE = 20;
export const dist = (a,b) => Math.hypot(a.x-b.x,a.z-b.z);
const clamp = (v,a,b) => Math.max(a,Math.min(b,v));
export const docks = Object.fromEntries(ISLANDS.map(i=>{
  const d=Math.hypot(i.dock.x-i.x,i.dock.z-i.z),ux=(i.dock.x-i.x)/d,uz=(i.dock.z-i.z)/d;
  return [i.id,{id:i.id,x:i.x+ux*i.radius*1.06,z:i.z+uz*i.radius*1.06,
    shore:{x:i.x+ux*i.radius*.84,z:i.z+uz*i.radius*.84},ux,uz}];
}));
export const points = {
  pump:{x:330,z:65}, cave:{x:1080,z:-415}, estate:{x:1900,z:652},
  paper:{x:0,z:-40}, caveExit:{x:0,z:150}, estateExit:{x:0,z:130},
  stairs:{x:70,z:-95}, cellarExit:{x:0,z:150}, key:{x:0,z:-60},
  supply:{x:1230,z:-520}
};
export const PEOPLE = Array.from({length:5},(_,id)=>({id,x:(id-2)*38,z:-80,child:id>2}));
export const GUARDS = [
  {id:'gate',area:null,x:1785,z:695,hp:2},
  {id:'patrol',area:null,x:2010,z:635,hp:2},
  {id:'hall',area:'estate',x:-65,z:15,hp:2},
  {id:'boss',area:'estate',x:0,z:-60,hp:3}
];
export function fresh() {
  return {version:VERSION,p:{x:docks.home.x+180,z:docks.home.z+70},heading:Math.PI,
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
    const p={x:input.p.x,z:input.p.z};
    if(s.interior&&Math.abs(p.x)<=140&&p.z>=-125&&p.z<=175)s.p=p;
    else if(!s.interior&&Math.abs(p.x)<2500&&p.z>-1700&&p.z<1900&&
      (s.boat?allowed(s,p):getIslandAt(p.x,p.z)?.id===s.island))s.p=p;
    else s.p=safePosition();
  } else s.p=safePosition();
  s.guards=GUARDS.map(g=>{
    const old=Array.isArray(input.guards)?input.guards.find(v=>v?.id===g.id):null,hp=Number.isFinite(old?.hp)?clamp(Math.floor(old.hp),0,g.hp):g.hp;
    const valid=old&&Number.isFinite(old.x)&&Number.isFinite(old.z)&&dist(old,g)<170;
    return {...g,...(valid?{x:old.x,z:old.z}:{}),hp,cooldown:2};
  });
  s.notice=null;return s;
}
export function snapshot(s) {
  const {shot,notice,lastShot,paused,walking,...saved}=s;
  return JSON.parse(JSON.stringify(saved));
}
export function ground(x,z) {
  const i=getIslandAt(x,z);if(!i)return -.32;
  if(i.id==='fortress'&&Math.abs(x-i.x)<110&&Math.abs(z-i.z)<110)return .85;
  return islandElevation(i,x,z);
}
function blocked(s,p) {
  if(!s.interior&&Math.abs(p.x-1900)<90&&p.z>465&&p.z<635)return true;
  if(s.interior==='cellar'&&p.z<-30){
    const cell=PEOPLE.find(v=>Math.abs(v.x-p.x)<22);
    if(cell&&!s.released.includes(cell.id))return true;
  }
  return false;
}
export function allowed(s,p) {
  if(!Number.isFinite(p.x)||!Number.isFinite(p.z))return false;
  if(s.interior)return p.x>=-110&&p.x<=110&&p.z>=-115&&p.z<=170&&!blocked(s,p);
  if(Math.abs(p.x)>2450||p.z<-1600||p.z>1850)return false;
  if(s.boat)return !ISLANDS.some(i=>dist(p,i)<i.radius*.94);
  const i=ISLAND_BY_ID[s.island];
  return dist(p,i)<i.radius*.99&&!blocked(s,p);
}
function lineClear(s,a,b) {
  const n=Math.ceil(dist(a,b)/12);
  for(let j=1;j<n;j++)if(blocked(s,{x:a.x+(b.x-a.x)*j/n,z:a.z+(b.z-a.z)*j/n}))return false;
  return true;
}
export function move(s,dx,dz,dt,{sprint=false}={}) {
  if(![dx,dz,dt].every(Number.isFinite))return;
  dt=clamp(dt,0,.1);const length=Math.hypot(dx,dz);
  if(length>1){dx/=length;dz/=length;}
  if(!dx&&!dz)return;
  s.heading=Math.atan2(dx,dz);
  const speed=s.boat?(s.fuel>0?260:40):sprint?115:78;
  const travel=Math.hypot(dx,dz)*speed*dt,n=Math.max(1,Math.ceil(travel/6));
  const before={...s.p};
  for(let j=0;j<n;j++){
    const x={x:s.p.x+dx*speed*dt/n,z:s.p.z};
    if(allowed(s,x))s.p.x=x.x;
    const z={x:s.p.x,z:s.p.z+dz*speed*dt/n};
    if(allowed(s,z))s.p.z=z.z;
  }
  if(s.boat)s.fuel=Math.max(0,s.fuel-dist(before,s.p)*.004);
}
function guardsIn(s) {
  if(s.boat||s.interior==='cave'||s.interior==='cellar')return [];
  return s.guards.filter(g=>g.area===s.interior&&g.hp>0);
}
export function tick(s,dt,{paused=false}={}) {
  if(paused)return;dt=clamp(dt,0,.1);s.elapsed+=dt;
  if(s.shot&&s.elapsed-s.shot.at>.15)s.shot=null;
  if(!s.gun)return;
  for(const g of guardsIn(s)){
    const distance=dist(g,s.p);g.cooldown=Math.max(0,g.cooldown-dt);
    if(distance>210||!lineClear(s,g,s.p))continue;
    if(distance>65){
      const next={x:g.x+(s.p.x-g.x)/distance*34*dt,z:g.z+(s.p.z-g.z)/distance*34*dt};
      if(!blocked(s,next)&&(!s.interior?getIslandAt(next.x,next.z)?.id==='fortress':Math.abs(next.x)<100&&next.z<145)){
        g.x=next.x;g.z=next.z;
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
  const targets=guardsIn(s).filter(g=>{
    const d=dist(g,s.p),dot=((g.x-s.p.x)*dx+(g.z-s.p.z)*dz)/Math.max(1,d);
    return d<220&&dot>.86&&lineClear(s,s.p,g);
  }).sort((a,b)=>dist(a,s.p)-dist(b,s.p));
  const g=targets[0];if(g){g.hp--;s.notice=g.hp<=0?'guard-down':'hit';}
  s.shot={at:s.elapsed,from:{...s.p},to:g?{x:g.x,z:g.z}:{x:s.p.x+dx*200,z:s.p.z+dz*200}};
  return true;
}
function closestDock(s) {return Object.values(docks).filter(d=>dist(d,s.p)<125).sort((a,b)=>dist(a,s.p)-dist(b,s.p))[0];}
export function candidates(s) {
  if(s.interior==='cave')return [
    {id:'paper',...points.paper,label:s.paper?(s.gun?'supplies':'take-gun'):'move-paper'},
    {id:'cave-exit',...points.caveExit,label:'leave-cave'}
  ];
  if(s.interior==='estate')return [
    {id:'key',...points.key,label:'take-key'},
    {id:'stairs',...points.stairs,label:'cellar'},
    {id:'estate-exit',...points.estateExit,label:'leave-estate'}
  ];
  if(s.interior==='cellar')return [
    ...PEOPLE.filter(p=>!s.released.includes(p.id)).map(p=>({...p,id:'cell-'+p.id,label:'free-person'})),
    {id:'cellar-exit',...points.cellarExit,label:'upstairs'}
  ];
  if(s.boat){const d=closestDock(s);return d?[{...d,id:'dock-'+d.id,label:'dock'}]:[];}
  const d=docks[s.island],out=[{...d.shore,id:'boat',label:s.released.length===5&&!s.boarded?'board-group':'boat'}];
  if(s.island==='home')out.push({id:'pump',...points.pump,label:'refuel'});
  if(s.island==='jungle')out.push({id:'cave',...points.cave,label:'enter-cave'},{id:'supply',...points.supply,label:'supplies'});
  if(s.island==='fortress')out.push({id:'estate',...points.estate,label:'enter-estate'});
  if(['highlands','smugglers','paradise'].includes(s.island)){
    const i=ISLAND_BY_ID[s.island];out.push({id:'supplies',x:i.x,z:i.z,label:'supplies'});
  }
  return out;
}
export function nearby(s) {
  return candidates(s).filter(p=>dist(p,s.p)<(p.id.startsWith('cell-')?85:p.id.startsWith('dock-')?125:65))
    .sort((a,b)=>dist(a,s.p)-dist(b,s.p))[0]||null;
}
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
export function goal(s) {
  if(s.complete)return {key:'complete',target:null};
  if(!s.docked)return {key:'dock-goal',target:docks.home};
  if(!s.tanked)return {key:'fuel-goal',target:s.boat?docks.home:points.pump};
  if(!s.gun){
    if(s.interior==='cave')return {key:s.paper?'gun-goal':'paper-goal',target:points.paper};
    return {key:'cave-goal',target:s.boat?docks.jungle:s.island==='jungle'?points.cave:docks[s.island].shore};
  }
  if(s.interior==='cave')return {key:'exit-cave-goal',target:points.caveExit};
  if(!s.key){
    if(s.interior==='estate'){
      const boss=s.guards.find(g=>g.id==='boss');
      return {key:boss.hp>0?'boss-goal':'key-goal',target:boss.hp>0?boss:points.key};
    }
    return {key:'estate-goal',target:s.boat?docks.fortress:s.island==='fortress'?points.estate:docks[s.island].shore};
  }
  if(s.released.length<5){
    return s.interior==='cellar'?{key:'people-goal',target:PEOPLE.find(p=>!s.released.includes(p.id))}:
      {key:'cellar-goal',target:s.interior==='estate'?points.stairs:s.boat?docks.fortress:points.estate};
  }
  if(s.interior)return {key:'escort-goal',target:s.interior==='cellar'?points.cellarExit:points.estateExit};
  if(!s.boarded)return {key:'boat-goal',target:docks.fortress.shore};
  return {key:'home-goal',target:s.boat?docks.home:s.island==='home'?docks.home.shore:docks[s.island].shore};
}
