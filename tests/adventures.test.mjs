import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Box3, Vector3, Raycaster } from 'three';
import { game, controller } from './game-harness.mjs';
import { baseLayout, baseSite, baseSpawn, sceneSolids, movePlayer, freePoint, releasePlayer, COURSE, BOARD, LEON, NELA, PLAYER_RADIUS, gardenPosition } from '../island-play.mjs';
import { SCALE, buildBase, baseElevation, walkSurface } from '../island3d-src.mjs';
import { wildlifeNavigation, moveBoar } from '../wildlife.mjs';

const close = (a,b,message) => assert(Math.abs(a-b)<1e-6,message);
const plain = value => JSON.parse(JSON.stringify(value));

test('rendered walls and doorway agree with collision in all four house orientations', () => {
  for (const pos of [{x:1570,y:1160},{x:1690,y:1160},{x:1630,y:1100},{x:1630,y:1220}]) {
    const layout=baseLayout(pos,3),hut=buildBase(layout,baseElevation(layout));hut.updateMatrixWorld(true);
    const walls=hut.children.filter(o=>o.name==='wall');assert.equal(walls.length,5);
    for (const mesh of walls) {
      const box=new Box3().setFromObject(mesh),center=box.getCenter(new Vector3()),size=box.getSize(new Vector3());
      const physical=layout.walls.find(r=>Math.hypot(r.x-center.x*SCALE,r.y-center.z*SCALE)<1e-5);assert(physical,'Visible wall must have a collider');
      close(size.x*SCALE,physical.w);close(size.z*SCALE,physical.h);
      const horizontal=physical.w>physical.h,from={x:physical.x+(horizontal?0:-90),y:physical.y+(horizontal?-90:0)},to={x:physical.x+(horizontal?0:90),y:physical.y+(horizontal?90:0)};
      const stopped=movePlayer(from,to,{circles:[],rects:[physical]});assert(freePoint(stopped,{circles:[],rects:[physical]}));
      assert(Math.hypot(stopped.x-to.x,stopped.y-to.y)>90,'A large input step must not tunnel through the rendered wall');
    }
    const solids={circles:layout.posts,rects:[...layout.walls,...layout.beds]},outside=layout.point(0,layout.depth/2+80),inside=layout.point(0,layout.depth/2-80);
    const entered=movePlayer(outside,inside,solids);close(entered.x,inside.x);close(entered.y,inside.y);
    assert(layout.door>PLAYER_RADIUS*2+40,'Door must fit the full avatar');
    for(const child of hut.children){child.geometry?.dispose();child.material?.dispose();}
  }
});

test('the player fits below the real roof and lintel and walks onto a level floor', () => {
  const layout=baseLayout({x:1900,y:1250},3),elevation=baseElevation(layout),hut=buildBase(layout,elevation);hut.updateMatrixWorld(true);
  const roofs=hut.children.filter(o=>o.name==='roof'),lintel=hut.children.find(o=>o.name==='lintel'),lintelBottom=new Box3().setFromObject(lintel).min.y;
  // The current walking human (including hair and head bob) is under 2 units.
  const avatarHeight=2;
  assert(lintelBottom-(elevation+.16)>avatarHeight+.3,'Head needs clearance through the doorway');
  for(const u of [-1.8,0,1.8])for(const v of [-1.4,0,1.4]){
    const p=layout.point(u*SCALE,v*SCALE),surface=walkSurface(p.x/SCALE,p.y/SCALE,layout,elevation);
    close(surface,elevation+.16);
    const ray=new Raycaster(new Vector3(p.x/SCALE,surface+avatarHeight,p.y/SCALE),new Vector3(0,1,0));
    const hits=ray.intersectObjects(roofs);assert(hits.length>0,'Visible roof must cover the usable floor');assert(hits[0].distance>.3,'Head must remain under the roof');
  }
  const door=layout.point(0,layout.depth/2),ramp=layout.point(0,layout.depth/2+32);
  close(walkSurface(door.x/SCALE,door.y/SCALE,layout,elevation),elevation+.16);
  assert(walkSurface(ramp.x/SCALE,ramp.y/SCALE,layout,elevation)<elevation+.16);
  for(const child of hut.children){child.geometry?.dispose();child.material?.dispose();}
});

test('rocks, palm trunks and the trade stall block movement while walls allow sliding', () => {
  for(const obstacle of [{t:'rock',x:1000,y:1000,phase:2},{t:'tree',x:1000,y:1000}]){
    const solids=sceneSolids([obstacle],null,0),p=movePlayer({x:850,y:1000},{x:1150,y:1000},solids);assert(p.x<1000);assert(freePoint(p,solids));
    const released=releasePlayer({x:1000,y:1000},solids);assert(freePoint(released,solids));
  }
  const stall=sceneSolids([],null,0),p=movePlayer({x:LEON.x+72,y:LEON.y-100},{x:LEON.x+72,y:LEON.y+120},stall);assert(p.y<LEON.y);
  const wall={circles:[],rects:[{x:1000,y:1000,w:10,h:500}]},slide=movePlayer({x:940,y:900},{x:1080,y:1060},wall);assert(slide.x<1000);assert(slide.y>1050);
});

test('new bases reserve land and NPC access and all four respawns remain outside solid walls', () => {
  const land=(x,y)=>((x-1750)/1540)**2+((y-1300)/970)**2<1;
  const pos=baseSite({x:1500,y:1100},land);assert(pos);
  const layout=baseLayout(pos,3),solids=sceneSolids([],pos,3);
  assert(layout.width>=350&&layout.depth>=290);
  for(const npc of [LEON,NELA,BOARD])assert(freePoint({x:npc.x,y:npc.y+60},solids),'Building must leave an interaction position near characters and the board');
  const spawns=Array.from({length:4},(_,slot)=>baseSpawn(pos,3,slot));assert.equal(new Set(spawns.map(p=>p.x+','+p.y)).size,4);
  for(const p of spawns){assert(freePoint(p,solids));assert(land(p.x,p.y));}
  assert.equal(baseSite({x:100,y:100},()=>false),null,'No materials should be spent when no building site is available');
});

test('boars released from old walls cannot walk or attack straight through the base', () => {
  const pos={x:1950,y:1200},b=baseLayout(pos,3),nav=wildlifeNavigation([],()=>true,sceneSolids([],pos,3));
  const wall=b.point(-b.width/2,0),enemy={...wall,sx:wall.x,sy:wall.y,hp:3,phase:0},target=b.point(0,0);
  moveBoar(enemy,target,8,nav,10000);assert(nav.walkable(enemy));assert.equal(enemy.hp,3);assert.equal(enemy.sx,wall.x);
  assert.equal(nav.clear(b.point(-b.width/2-70,0),b.point(-b.width/2+70,0),0),false);
  for(let i=0;i<80;i++){const before={...enemy};moveBoar(enemy,target,4,nav,10000+i*16);assert(nav.walkable(enemy));assert(nav.clear(before,enemy));assert(Math.hypot(enemy.x-before.x,enemy.y-before.y)<=4.000001);}
});

test('carpenter work requires new gathering, delivery at Leon and pays exactly once', () => {
  const g=game();g.run('startGame();wood=20;stone=20;coins=0;xpv=0;workAction("accept","carpenter")');
  g.run('P={...leon};workAction("deliver")');assert.equal(g.run('coins'),0,'Existing inventory alone is not job progress');
  // Place local resources within normal interaction reach, outside their collision footprint.
  for(const [type,count] of [['tree',4],['rock',4]])for(let i=0;i<count;i++){
    g.run(`P={x:2100,y:1450};O.splice(0,O.length,{t:'${type}',x:2164,y:1450,hp:2,phase:0});interact();interact()`);
  }
  assert.equal(g.run('campActivities.progress.wood'),8);assert.equal(g.run('campActivities.progress.stone'),4);
  g.run('workAction("deliver")');assert.equal(g.run('coins'),16,'Payment is unavailable away from the recipient');
  g.run('P={...leon};workAction("deliver");workAction("deliver")');
  assert.equal(g.run('coins'),71);assert.equal(g.run('xpv'),160);assert.equal(g.run('wood'),20);assert.equal(g.run('stone'),20);assert.equal(g.run('campActivities.completed'),1);
  const reload=game({storage:g.stored()});reload.run('startGame()');assert.equal(reload.run('campActivities.completed'),1);assert.equal(reload.run('coins'),71);
  g.close();reload.close();
});

test('cook and beach jobs use their real actions, can repeat and cancellation keeps inventory', () => {
  const g=game();g.run('startGame();P={x:2000,y:1350};wood=100;stone=100;coins=1000;upgradeBase(1);buildFire();fish=3;workAction("accept","cook");P={...firePosition()};cookFish();cookFish()');
  assert.equal(g.run('campActivities.progress.cookedFish'),2);assert.equal(g.run('fish'),1);const before=g.run('coins');
  g.run('P={...nela};workAction("deliver")');assert.equal(g.run('coins'),before+60);assert.equal(g.run('cookedFish'),0);
  g.run('workAction("accept","beach")');
  for(const [type,count] of [['shell',4],['food',2]])for(let i=0;i<count;i++)g.run(`P={x:2100,y:1450};O.splice(0,O.length,{t:'${type}',x:2150,y:1450,hp:1,phase:0});interact()`);
  g.run('P={...leon};workAction("deliver");workAction("accept","beach")');assert.equal(g.run('campActivities.completed'),2);
  const inventory=g.run('JSON.stringify([wood,stone,food,shells,fish,cookedFish,coins,xpv])');g.run('workAction("cancel")');assert.equal(g.run('campActivities.active'),null);assert.equal(g.run('JSON.stringify([wood,stone,food,shells,fish,cookedFish,coins,xpv])'),inventory);
  g.close();
});

test('a race needs ordered checkpoints, pauses in menus and focus loss, and pays only the first finish', () => {
  const g=game();g.run('startGame();P={...activityRules.BOARD};O.splice(0,O.length);E.splice(0,E.length);coins=0;xpv=0;startRace()');
  g.frame();g.run('P={...activityRules.BOARD}');g.frame();assert.equal(g.run('raceRun.next'),0,'Standing at the finish does not skip the course');
  g.run('P={...activityRules.COURSE[0]}');g.frame();assert.equal(g.run('raceRun.next'),1);
  const time=g.run('raceRun.elapsed');g.run('toggle("workPanel",1)');for(let i=0;i<10;i++)g.frame();assert.equal(g.run('raceRun.elapsed'),time);
  g.run('toggle("workPanel",0);inputFocused=false');g.frame();assert.equal(g.run('raceRun.elapsed'),time);g.run('inputFocused=true');
  for(let i=1;i<4;i++){g.run(`P={...activityRules.COURSE[${i}]}`);g.frame();}
  assert.equal(g.run('raceRun'),null);assert.equal(g.run('coins'),90);assert.equal(g.run('xpv'),120);assert(g.run('campActivities.bestMs')>0);
  g.run('startRace()');for(let i=0;i<4;i++){g.run(`P={...activityRules.COURSE[${i}]}`);g.frame();}
  assert.equal(g.run('coins'),90);assert.equal(g.run('xpv'),120);
  g.run('startRace();cancelRace()');assert.equal(g.run('raceRun'),null);assert.equal(g.run('coins'),90);
  const reload=game({storage:g.stored()});reload.run('startGame()');assert.equal(reload.run('raceRun'),null);assert.equal(reload.run('campActivities.raceWon'),1);assert.equal(reload.run('campActivities.bestMs'),g.run('campActivities.bestMs'));
  g.close();reload.close();
});

test('garden yields once after completed jobs, requires proximity and survives reload', () => {
  const g=game();g.run('startGame();basePos={x:2000,y:1200};baseLevel=3;prepareBasePlot();campActivities.completed=3;food=0;P={...leon};collectGarden()');assert.equal(g.run('food'),0);
  const garden=g.run('activityRules.gardenPosition(basePos,baseLevel,(x,y)=>!sea(x,y))');assert(garden);
  g.run('P={...activityRules.gardenPosition(basePos,baseLevel,(x,y)=>!sea(x,y))};collectGarden();collectGarden()');assert.equal(g.run('food'),2);
  const reload=game({storage:g.stored()});reload.run('startGame();collectGarden()');assert.equal(reload.run('food'),2);
  reload.run('campActivities.completed++;collectGarden()');assert.equal(reload.run('food'),4);
  assert.equal(gardenPosition({x:10,y:10},3,()=>false),null,'A saved coastal house can have no valid garden');
  g.close();reload.close();
});

test('a full old island conserves bank, quest state and resource value through expansion and repeated reloads', () => {
  const g=game();g.run('startGame();wood=80;stone=60;coins=700;food=9;shells=11;fish=4;cookedFish=2;totalCaught=17;xpv=1500;spear=rod=raft=treasure=secondFound=returned=campfire=1;questsDone={fish:1,supplies:1};basePos={x:2000,y:1200};baseLevel=3;campActivities.completed=6;campActivities.active="carpenter";campActivities.progress={wood:4,stone:2};campActivities.bestMs=45000;campActivities.raceWon=1;campActivities.gardenClaimed=5');
  const old=plain(g.run('soloSnapshot()'));delete old.activities;
  const aggregate=save=>{const totals={wood:save.wood,stone:save.stone,food:save.food,shells:save.shells};for(const o of save.world.resources)totals[o.t==='tree'?'wood':o.t==='rock'?'stone':o.t==='shell'?'shells':'food']+=o.t==='tree'?2:1;return totals};
  const expected=aggregate(old);let storage={myIsland09:JSON.stringify(old)};
  for(let i=0;i<3;i++){
    const reload=game({storage});reload.run('startGame();save()');const save=plain(reload.run('soloSnapshot()'));
    assert.deepEqual(aggregate(save),expected);
    for(const key of ['coins','xpv','shells','fish','cookedFish','totalCaught','basePos'])assert.deepEqual(save[key],old[key],key);
    for(const key of ['spear','rod','raft','treasure','secondFound','returned','campfire'])assert.equal(!!save[key],!!old[key],key);
    for(const key of ['fish','supplies'])assert.equal(!!save.questsDone[key],!!old.questsDone[key],key);
    assert.equal(save.activities.completed,0,'Older saves acquire empty optional activity state');assert(freePoint(save.P,sceneSolids(save.world.resources,save.basePos,save.baseLevel)));
    storage=reload.stored();reload.close();
  }
  g.close();
});

test('work menus support the pad and keyboard and view changes preserve active work and resources', () => {
  const g=game();g.run('startGame();workAction("accept","beach");toggle("workPanel",1)');const device=controller();g.setPads([device]);g.frame();
  assert.equal(g.run('activePanel'),'workPanel');const before=g.run('JSON.stringify(soloSnapshot())');const p=g.run('JSON.stringify(P)');
  device.axes[0]=1;for(let i=0;i<5;i++)g.frame();assert.equal(g.run('JSON.stringify(P)'),p);
  g.window.MyIsland3D={create:()=>({enabled:false,setEnabled(v){this.enabled=v},frame(){},resize(){},orbit(){},vector(x,y){return{x,y}}})};g.run('boot3D();switchView();switchView()');assert.equal(g.run('JSON.stringify(soloSnapshot())'),before);
  g.window.dispatchEvent(new g.window.KeyboardEvent('keydown',{key:'Escape'}));assert.equal(g.run('activePanel'),null);
  g.close();
});
