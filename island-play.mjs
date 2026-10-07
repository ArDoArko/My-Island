// Shared geometry and activities: solo, cloud saves and authoritative rooms.
import { obstacleRadius } from './wildlife.mjs';
export const PLAYER_RADIUS = 29;
export const LEON = {x:1630,y:1160}, NELA = {x:3370,y:430};
export const BOARD = {x:1450,y:1320};
export const COURSE = [{x:950,y:1500},{x:2100,y:1720},{x:2780,y:1250},BOARD];
export const JOBS = {
  carpenter:{title:'Stolarz obozowy',description:'Zbierz 8 drewna i 4 kamienie. Dostarcz je Leonowi.',needs:{wood:8,stone:4},npc:LEON,coins:55,xp:80},
  cook:{title:'Kucharz wyspy',description:'Upiecz 2 ryby przy ognisku. Dostarcz je Neli.',needs:{cookedFish:2},npc:NELA,coins:60,xp:90},
  beach:{title:'Opiekun plaży',description:'Zbierz 4 muszelki i 2 kokosy. Dostarcz je Leonowi.',needs:{shells:4,food:2},npc:LEON,coins:35,xp:55}
};
export function freshActivities(){return {active:null,progress:{},completed:0,bestMs:0,raceWon:0,gardenClaimed:0}}
export function activities(value){
  const state=freshActivities();if(!value||typeof value!=='object')return state;
  if(Object.hasOwn(JOBS,value.active))state.active=value.active;
  for(const [key,target] of Object.entries(JOBS[state.active]?.needs||{}))state.progress[key]=Math.max(0,Math.min(target,Math.floor(Number(value.progress?.[key])||0)));
  state.completed=Math.max(0,Math.min(1000000,Math.floor(Number(value.completed)||0)));
  state.bestMs=Math.max(0,Math.min(86400000,Math.floor(Number(value.bestMs)||0)));
  state.raceWon=Number(!!value.raceWon);state.gardenClaimed=Math.max(0,Math.min(state.completed,Math.floor(Number(value.gardenClaimed)||0)));return state;
}
export function recordWork(state,item,count){
  const target=JOBS[state.active]?.needs[item];if(!target)return false;
  const before=state.progress[item]||0;state.progress[item]=Math.min(target,before+count);return before!==state.progress[item];
}
export function workReady(state,bank){return !!JOBS[state.active]&&Object.entries(JOBS[state.active].needs).every(([key,qty])=>(state.progress[key]||0)>=qty&&bank[key]>=qty)}
export function acceptWork(state,key){if(state.active||!Object.hasOwn(JOBS,key))return false;state.active=key;state.progress={};return true}
export function deliverWork(state,bank,person){
  const job=JOBS[state.active];if(!job||Math.hypot(person.x-job.npc.x,person.y-job.npc.y)>=110||!workReady(state,bank))return false;
  for(const [key,qty] of Object.entries(job.needs))bank[key]-=qty;
  bank.coins+=job.coins;bank.xpv+=job.xp;state.completed++;state.active=null;state.progress={};return true;
}
export function advanceCourse(run,point,elapsed){
  if(!run)return false;run.elapsed=Math.min(86400000,run.elapsed+Math.max(0,elapsed));
  if(Math.hypot(point.x-COURSE[run.next].x,point.y-COURSE[run.next].y)>=85)return false;
  run.next++;return run.next===COURSE.length;
}
export function finishCourse(state,bank,elapsed){
  const ms=Math.max(1,Math.round(elapsed));if(!state.bestMs||ms<state.bestMs)state.bestMs=ms;
  if(state.raceWon)return false;state.raceWon=1;bank.coins+=90;bank.xpv+=120;return true;
}

// basePos remains the saved entrance anchor. The house grows behind it, leaving
// the merchant, fire and doorway reachable even on an existing small-base save.
export function baseLayout(pos,level){
  if(!pos||!level)return null;
  const nearby=[LEON,NELA].filter(p=>Math.hypot(p.x-pos.x,p.y-pos.y)<400).sort((a,b)=>Math.hypot(a.x-pos.x,a.y-pos.y)-Math.hypot(b.x-pos.x,b.y-pos.y))[0];
  let fx=0,fy=1;if(nearby){const dx=nearby.x-pos.x,dy=nearby.y-pos.y;if(Math.abs(dx)>Math.abs(dy)){fx=Math.sign(dx)||1;fy=0}else fy=Math.sign(dy)||1}
  const width=[0,280,320,360][level],depth=[0,220,260,300][level],door=112;
  const center={x:pos.x-fx*depth/2,y:pos.y-fy*depth/2};
  const point=(x,y)=>({x:center.x+fy*x+fx*y,y:center.y-fx*x+fy*y});
  const rect=(x,y,w,d)=>{const p=point(x,y);return {x:p.x,y:p.y,w:fy?w:d,h:fy?d:w}};
  const walls=[];
  if(level>=2){walls.push(rect(0,-depth/2,width,10));for(const x of [-width/2,width/2])walls.push(rect(x,0,10,depth))}
  if(level>=3){const w=(width-door)/2;for(const side of [-1,1])walls.push(rect(side*(door/2+w/2),depth/2,w,10))}
  const posts=level===1?[-1,1].flatMap(x=>[-1,1].map(y=>({...point(x*(width/2-8),y*(depth/2-8)),radius:6}))):[];
  const beds=[rect(-width/2+53,-depth/2+64,52,90)];if(level>=3)beds.push(rect(width/2-53,-depth/2+64,52,90));
  return {center,width,depth,door,fx,fy,yaw:Math.atan2(fx,fy),floor:rect(0,0,width,depth),walls,posts,beds,point,wallHeight:224,doorHeight:204,roofRidge:284};
}
export function firePosition(pos,level,isLand){
  const b=baseLayout(pos,level);if(!b)return null;
  for(const [x,y] of [[-b.width/2-70,b.depth/2+55],[b.width/2+70,b.depth/2+55],[0,b.depth/2+150]]){const p=b.point(x,y);if(!isLand||isLand(p.x,p.y))return p}
  return b.point(0,b.depth/2+70);
}
export function inBase(point,pos,level,margin=0){const b=baseLayout(pos,level);if(!b)return false;return Math.abs(point.x-b.center.x)<=b.floor.w/2+margin&&Math.abs(point.y-b.center.y)<=b.floor.h/2+margin}
export function gardenPosition(pos,level,isLand=()=>true){
  const b=baseLayout(pos,level);if(!b)return null;
  const candidates=[[-b.width/2-80,b.depth/2+170],[b.width/2+80,b.depth/2+170],[-b.width/2-100,0],[b.width/2+100,0],[0,b.depth/2+220]];
  for(const [x,y] of candidates){const p=b.point(x,y);if([-52,0,52].every(dx=>[-38,0,38].every(dy=>isLand(p.x+dx,p.y+dy)))&&[LEON,NELA,BOARD].every(q=>Math.hypot(p.x-q.x,p.y-q.y)>130))return p}
  return null;
}
export function baseSite(person,isLand){
  const origin={x:person.x+70,y:person.y+20};
  for(let radius=0;radius<=320;radius+=40)for(let i=0;i<(radius?32:1);i++){
    const a=i*Math.PI/16,pos={x:origin.x+Math.cos(a)*radius,y:origin.y+Math.sin(a)*radius},b=baseLayout(pos,3);
    if([-1,0,1].every(x=>[-1,0,1].every(y=>{const p=b.point(x*b.width/2,y*b.depth/2);return isLand(p.x,p.y)}))&&[LEON,NELA,BOARD,{x:LEON.x+72,y:LEON.y+12}].every(p=>!overlapsRect(p,b.floor,60)))return pos;
  }
  return null;
}
export function clearBasePlot(bank,objects){
  const b=baseLayout(bank.basePos,bank.baseLevel);if(!b)return [];
  const removed=objects.filter(o=>overlapsRect(o,b.floor,obstacleRadius(o)+8));
  // Clear construction ground once. Every removed resource becomes inventory;
  // no saved resource, currency or quest reward is discarded during expansion.
  for(const o of removed){const key=o.t==='tree'?'wood':o.t==='rock'?'stone':o.t==='shell'?'shells':'food';bank[key]+=o.t==='tree'?2:1}
  return removed;
}
export function harvestGarden(state,bank,point,isLand){const g=gardenPosition(bank.basePos,bank.baseLevel,isLand);if(state.completed<3||state.gardenClaimed>=state.completed||!g||Math.hypot(point.x-g.x,point.y-g.y)>=100)return false;bank.food+=2;state.gardenClaimed=state.completed;recordWork(state,'food',2);return true}
export function sceneSolids(objects,pos,level){
  const b=baseLayout(pos,level),circles=objects.filter(o=>obstacleRadius(o)).map(o=>({x:o.x,y:o.y,radius:obstacleRadius(o)}));
  if(b)circles.push(...b.posts);
  circles.push({...BOARD,radius:10});
  // Leon stands in front of the counter; its dimensions match the 3D model.
  return {circles,rects:[{x:LEON.x+72,y:LEON.y+12,w:100,h:54},...(b?[...b.walls,...b.beds]:[])]};
}
export function overlapsRect(p,r,radius){return Math.hypot(Math.max(0,Math.abs(p.x-r.x)-r.w/2),Math.max(0,Math.abs(p.y-r.y)-r.h/2))<radius}
export function freePoint(p,solids,radius=PLAYER_RADIUS){return solids.circles.every(o=>Math.hypot(p.x-o.x,p.y-o.y)>=radius+o.radius)&&solids.rects.every(r=>!overlapsRect(p,r,radius))}
export function releasePlayer(point,solids,allowed=()=>true){
  if(freePoint(point,solids)&&allowed(point))return {...point};
  // Used only for legacy positions or a newly upgraded wall, not each move.
  for(let radius=4;radius<=440;radius+=4)for(let i=0;i<64;i++){const a=i*Math.PI/32,p={x:point.x+Math.cos(a)*radius,y:point.y+Math.sin(a)*radius};if(freePoint(p,solids)&&allowed(p))return p}
  return {...point};
}
export function movePlayer(from,to,solids,allowed=()=>true){
  let p=releasePlayer(from,solids,allowed);const dx=to.x-from.x,dy=to.y-from.y,steps=Math.max(1,Math.ceil(Math.hypot(dx,dy)/6));
  for(let i=0;i<steps;i++){
    const next={x:p.x+dx/steps,y:p.y+dy/steps};if(freePoint(next,solids)&&allowed(next)){p=next;continue}
    const x={x:p.x+dx/steps,y:p.y},y={x:p.x,y:p.y+dy/steps};
    if(freePoint(x,solids)&&allowed(x))p=x;
    const slide={x:p.x,y:y.y};if(freePoint(slide,solids)&&allowed(slide))p=slide;
  }
  return p;
}
export function baseSpawn(pos,level,slot=0){const b=baseLayout(pos,level);return b?b.point((slot%2?1:-1)*36,b.depth/2+70+Math.floor(slot/2)*70):{x:1500+(slot%2)*96,y:1100+Math.floor(slot/2)*90}}
