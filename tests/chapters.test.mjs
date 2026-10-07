import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {Box3} from 'three';
import {game,controller} from './game-harness.mjs';
import {freshAdventures,adventureAction,markers,FRAGMENTS,RUNES,SIGNALS,CHAPTERS,objective,COMPASS_CHEST} from '../expeditions.mjs';
import {colors,appearance,STYLES,MOTIONS} from '../character.mjs';
import {buildHuman,actionPose,fishPose,SCALE} from '../island3d-src.mjs';
import {sceneSolids,freePoint,baseLayout} from '../island-play.mjs';

const plain=x=>JSON.parse(JSON.stringify(x));

test('both solo chapters require travel, a correct puzzle, deliveries and exactly one reward across reloads',()=>{
  let g=game();g.run('startGame();O.splice(0,O.length);E.splice(0,E.length);wood=20;stone=10;coins=100;xpv=300;startChapter("beacons")');
  assert.equal(g.run('chapterState.active'),null);assert.equal(g.element('beaconsStart').disabled,true);
  g.run('toggle("adventurePanel",1);startChapter("compass")');assert.equal(g.run('activePanel'),null);
  g.run('chapterInteract("west")');assert.equal(g.run('chapterState.compass.found.length'),0,'Cannot collect from another side of the island');
  g.run('P={...chapterMarkers().find(p=>p.id==="west")};interact();save()');
  let storage=g.stored();g.close();g=game({storage});g.run('startGame();O.splice(0,O.length);E.splice(0,E.length)');
  assert.deepEqual(plain(g.run('chapterState.compass.found')),['west']);assert.equal(g.run('chapterState.active'),'compass');
  for(const id of ['south','north'])g.run(`P={...chapterMarkers().find(p=>p.id==='${id}')};interact()`);
  assert.equal(g.run('chapterState.compass.stage'),2);
  g.run('P={...chapterMarkers().find(p=>p.id==="wave")};interact();P={...chapterMarkers().find(p=>p.id==="sun")};interact()');
  assert.equal(g.run('chapterState.compass.runes'),0,'A wrong rune restarts the puzzle without deleting the map');
  for(const id of ['wave','palm','sun'])g.run(`P={...chapterMarkers().find(p=>p.id==='${id}')};interact()`);
  g.run('P={...chapterMarkers()[0]};interact()');assert.equal(g.run('coins'),100,'Chest must be delivered before payment');
  g.run('P={...nela};interact();chapterInteract("return");startChapter("compass")');
  assert.equal(g.run('coins'),260);assert.equal(g.run('xpv'),520);assert.equal(g.run('chapterState.compass.stage'),5);assert.equal(g.element('beaconsStart').disabled,false);
  g.run('startChapter("beacons");wood=3;P={...chapterMarkers().find(p=>p.id==="west")};interact()');
  assert.equal(g.run('chapterState.beacons.lit.length'),0);assert.equal(g.run('wood'),3,'Insufficient materials must not be spent');
  g.run('wood=20');for(const id of ['west','south','north'])g.run(`P={...chapterMarkers().find(p=>p.id==='${id}')};chapterInteract('${id}');chapterInteract('${id}')`);
  assert.equal(g.run('wood'),8);assert.equal(g.run('stone'),4);assert.equal(g.run('coins'),260);
  g.run('P={...leon};interact();chapterInteract("return");save()');assert.equal(g.run('coins'),460);assert.equal(g.run('xpv'),780);assert.equal(g.run('chapterState.beacons.stage'),3);
  storage=g.stored();g.close();g=game({storage});g.run('startGame();P={...leon};startChapter("beacons");chapterInteract("return")');
  assert.equal(g.run('coins'),460);assert.equal(g.run('chapterState.active'),null);assert(g.element('adventureFinish').textContent.includes('Obie wyprawy'));g.close();
});

test('old islands gain optional chapters without changing bank, old quests, work or controller preferences',()=>{
  const old=game();old.run('startGame();wood=77;stone=31;fish=5;coins=937;xpv=1250;baseLevel=0;questsDone={fish:true,supplies:true};campActivities.completed=6;save()');
  const save=plain(old.run('soloSnapshot()'));delete save.adventures;delete save.appearance;old.close();
  const g=game({storage:{myIsland09:JSON.stringify(save),myIslandAppearanceV1:JSON.stringify({shirt:4,skin:2,hair:3,style:1}),myIslandPadV1:'{}'}});g.run('startGame()');
  for(const key of ['wood','stone','fish','coins','xpv','activities','questsDone','world'])assert.deepEqual(plain(g.run('soloSnapshot().'+key)),save[key],key);
  assert.deepEqual(plain(g.run('chapterState')),freshAdventures());assert.equal(g.run('myAppearance.shirt'),4);assert.equal(g.run('gameState().version'),10);
  const before=g.run('JSON.stringify([wood,stone,food,shells,fish,cookedFish,xpv,coins,questsDone,campActivities])');
  g.run('toggle("characterPanel",1);cycleLook("shirt");cycleLook("style");emote("wave")');
  assert.equal(g.run('JSON.stringify([wood,stone,food,shells,fish,cookedFish,xpv,coins,questsDone,campActivities])'),before);
  assert.equal(g.run('currentMotion().kind'),'wave');assert.equal(g.run('activePanel'),null);
  const reloaded=game({storage:g.stored()});reloaded.run('startGame()');assert.deepEqual(plain(reloaded.run('myAppearance')),plain(g.run('myAppearance')));
  g.close();reloaded.close();
});

test('markers remain reachable when a migrated base occupies a chapter point',()=>{
  for(const point of [...FRAGMENTS,...RUNES,...SIGNALS,COMPASS_CHEST]){
    const bank={basePos:{x:point.x,y:point.y},baseLevel:3},s=freshAdventures();s.active=point.id==='compass-chest'?'compass':RUNES.includes(point)||FRAGMENTS.includes(point)?'compass':'beacons';
    if(s.active==='compass')s.compass.stage=RUNES.includes(point)?2:point.id==='compass-chest'?3:1;else {s.compass.stage=5;s.beacons.stage=1;}
    const marker=markers(s,bank,()=>true).find(p=>p.id===point.id);assert(marker);assert(freePoint(marker,sceneSolids([],bank.basePos,3)),'Mission markers must not be sealed into an old wall');
    const result=adventureAction(s,{...bank,wood:50,stone:50,coins:0,xpv:0},marker,{mode:'interact',target:marker.id},()=>true);assert(result.ok,'The relocated marker is the authoritative target');
  }
});

test('new menus remain operable by a pad and all six languages while view changes keep expedition progress',()=>{
  const g=game(),pad=controller();g.run('startGame();startChapter("compass");toggle("characterPanel",1)');g.setPads([pad]);g.frame();g.frame();
  g.element('characterPanel').querySelector('button[onclick="cycleLook(\'shirt\')"]').focus();pad.buttons[0]={pressed:true,value:1};g.frame();assert.equal(g.run('myAppearance.shirt'),1,'Pad action changes the focused appearance control');
  pad.buttons[0]={pressed:false,value:0};g.run('toggle("adventurePanel",1)');g.frame();g.frame();const at=g.run('JSON.stringify(P)');pad.axes[0]=1;g.frame();assert.equal(g.run('JSON.stringify(P)'),at);pad.axes[0]=0;
  const before=g.run('JSON.stringify(soloSnapshot())');
  g.window.MyIsland3D={create:()=>({enabled:false,setEnabled(v){this.enabled=v},frame(){},resize(){},orbit(){},vector(x,y){return{x,y}}})};g.run('boot3D();switchView();switchView()');assert.equal(g.run('JSON.stringify(soloSnapshot())'),before);
  const rows=new Map(['messages','server-messages'].flatMap(f=>JSON.parse(readFileSync(new URL('../i18n/'+f+'.json',import.meta.url),'utf8'))).map(r=>[r[0],r]));
  const dynamic=[...Object.values(CHAPTERS).map(p=>p.title),...FRAGMENTS.map(p=>p.label),...RUNES.map(p=>p.label),...SIGNALS.map(p=>p.label),COMPASS_CHEST.label,...STYLES];
  for(const key of dynamic)assert(rows.has(key),key);
  for(const [i,code] of ['pl','en','nl','de','fr','es'].entries()){
    g.run(`setLanguage('${code}')`);assert.equal(g.element('adventureTitle').textContent,rows.get(CHAPTERS.compass.title)[i]);assert.equal(g.element('adventureObjective').textContent,rows.get(objective({active:'compass',compass:{stage:1}}))[i]);
    for(const panel of ['adventurePanel','characterPanel'])for(const el of g.element(panel).querySelectorAll('[data-i18n]'))assert.equal(el.textContent,rows.get(el.dataset.i18n)[i]);
  }
  g.close();
});

test('real avatar meshes support all hairstyles, action poses and personal colours without changing contact or inventory',()=>{
  const first=buildHuman(colors({shirt:4,skin:3,hair:3,style:1})),second=buildHuman(colors({shirt:2,skin:1,hair:0,style:2}));
  assert.notEqual(first.shirtParts[0].material.color.getHexString(),second.shirtParts[0].material.color.getHexString());
  assert.deepEqual(first.hairStyles.map(p=>p.visible),[false,true,false]);assert.deepEqual(second.hairStyles.map(p=>p.visible),[false,false,true]);
  const geometryBounds=person=>{person.root.updateMatrixWorld(true);const box=new Box3();person.root.traverse(o=>{if(!o.isMesh)return;let parent=o;while(parent){if(!parent.visible)return;parent=parent.parent;}box.expandByObject(o);});return box};
  for(const style of [0,1,2]){const p=buildHuman(colors({style})),box=geometryBounds(p);assert(box.max.y<2.1,'Every hairstyle fits the current roof clearance');assert(box.min.y>=-.04,'Feet remain at ground level');}
  for(const kind of Object.keys(MOTIONS))for(const phase of [0,.25,.5,.75,1]){actionPose(first,{kind,phase});assert(Number.isFinite(first.arms[1].arm.rotation.x));const box=geometryBounds(first);assert(box.max.y<baseLayout({x:1800,y:1300},3).doorHeight/SCALE,'Gestures also fit below the doorway');}
  actionPose(first,null);assert(Object.values(first.props).every(p=>!p.visible));assert.equal(first.rig.rotation.x,0);
  assert.deepEqual(appearance({shirt:999,skin:-1,hair:2.4,style:'script'}),{shirt:0,skin:0,hair:0,style:0});
});

test('coastal schools render above opaque water and fishing remains possible regardless of decorative fish',()=>{
  const g=game();g.run('startGame();O.splice(0,O.length);E.splice(0,E.length)');const scene=g.run('sceneState()');assert(scene.fishes.length>50);
  let nearShore=0;for(const f of scene.fishes){for(const seconds of [0,2,7]){const p=fishPose(f,seconds,scene.sea);if(p){assert(p.y>.03);assert(scene.sea(p.x*SCALE,p.z*SCALE));}}
    if(!scene.sea(f.x+80,f.y)||!scene.sea(f.x-80,f.y)||!scene.sea(f.x,f.y+80)||!scene.sea(f.x,f.y-80))nearShore++;
  }assert(nearShore>20,'Fish must be visible from fishing range, not only in the distant ocean');
  g.run('rod=1;P={x:1750,y:2270};F.splice(0,F.length);goFish()');assert.equal(g.run('currentMotion().kind'),'fish','Visual schools do not gate fishing');g.close();
});
