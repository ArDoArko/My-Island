import test from 'node:test';
import assert from 'node:assert/strict';
import * as C from '../campaign.mjs';
import { rows } from '../campaign-text.mjs';
import { game, controller } from './game-harness.mjs';
import { VILLAGE,ISLANDS,villageAnchor } from '../campaign-world.mjs';

function travel(s,target,{fight=false}={}){
  for(let n=0;n<10000&&C.dist(s.p,target)>3;n++){
    if(fight){
      const enemy=s.guards.filter(g=>g.hp>0&&g.area===s.interior&&C.dist(g,s.p)<190)
        .find(g=>Array.from({length:15},(_,i)=>({x:s.p.x+(g.x-s.p.x)*i/14,z:s.p.z+(g.z-s.p.z)*i/14})).every(p=>C.allowed(s,p)));
      if(enemy)C.shoot(s,Math.atan2(enemy.x-s.p.x,enemy.z-s.p.z));
    }
    const d=C.dist(s.p,target),dx=(target.x-s.p.x)/d,dz=(target.z-s.p.z)/d;
    C.move(s,dx,dz,Math.min(.05,d/(s.boat?(s.fuel>0?260:40):78)));
    C.tick(s,.05);
  }
  assert(C.dist(s.p,target)<4,'route blocked at '+JSON.stringify(s.p)+' toward '+JSON.stringify(target));
}
function actAt(s,p){travel(s,p);assert(C.interact(s));}
function reload(s){return C.restore(C.snapshot(s));}

test('entire physical rescue route, combat, five cells and boat evacuation survive reloads',()=>{
  let s=C.fresh();assert.equal(C.goal(s).key,'dock-goal');
  actAt(s,C.docks.home);assert(!s.boat);travel(s,C.docks.home.land);actAt(s,C.points.pump);
  assert.equal(s.fuel,100);assert(s.tanked);s=reload(s);
  travel(s,C.docks.home.land);actAt(s,C.docks.home.shore);actAt(s,C.docks.jungle);
  travel(s,C.docks.jungle.land);actAt(s,C.points.cave);assert.equal(s.interior,'cave');
  actAt(s,C.points.paper);assert(s.paper&&!s.gun);s=reload(s);
  assert(C.interact(s));assert(s.gun&&s.ammo===24);
  assert(C.interact(s));assert.equal(s.ammo,48);
  actAt(s,C.points.caveExit);travel(s,C.docks.jungle.land);actAt(s,C.docks.jungle.shore);
  actAt(s,C.docks.fortress);assert(!s.boat);
  travel(s,C.docks.fortress.land);travel(s,C.fortressApproach,{fight:true});travel(s,C.points.estate,{fight:true});assert(C.interact(s));
  assert.equal(s.interior,'estate');
  travel(s,{x:0,z:20},{fight:true});
  for(let n=0;n<80&&s.guards.find(g=>g.id==='boss').hp>0;n++){
    const boss=s.guards.find(g=>g.id==='boss');C.shoot(s,Math.atan2(boss.x-s.p.x,boss.z-s.p.z));C.tick(s,.1);
  }
  assert.equal(s.guards.find(g=>g.id==='boss').hp,0);s=reload(s);
  actAt(s,C.points.key);assert(s.key);
  actAt(s,C.points.stairs);assert.equal(s.interior,'cellar');
  for(const p of C.PEOPLE){travel(s,{x:p.x,z:-10});assert(C.interact(s));}
  assert.equal(s.released.length,5);s=reload(s);
  actAt(s,C.points.cellarExit);actAt(s,C.points.estateExit);
  travel(s,C.fortressApproach,{fight:true});travel(s,C.docks.fortress.land);actAt(s,C.docks.fortress.shore);
  assert(s.boarded&&s.boat);s=reload(s);
  actAt(s,C.docks.home);assert(s.complete);assert.equal(C.goal(s).key,'complete');assert(s.fuel>30,'expanded voyages exhausted the fuel reserve');
  assert.equal(reload(s).released.length,5);
});

test('locked stages, range, collision, ammunition and empty fuel do not trap progress',()=>{
  const s=C.fresh();assert.equal(C.interact(s),false);assert.equal(s.docked,false);
  s.fuel=0;const p={...s.p};C.move(s,1,0,.1);assert(C.dist(p,s.p)>0);assert.equal(s.fuel,0);
  s.boat=false;s.island='fortress';s.p={...C.points.estate};assert.equal(C.interact(s),false);
  s.gun=true;s.paper=true;s.ammo=0;s.interior='estate';s.p={...C.points.stairs};
  assert.equal(C.interact(s),false);assert.equal(s.interior,'estate');assert.equal(s.key,false);
  assert.equal(C.shoot(s,0),false);assert.equal(s.ammo,0);
  s.interior=null;s.p={x:C.estateCenter.x-100,z:C.estateCenter.z};C.move(s,1,0,.1);assert(s.p.x<=C.estateCenter.x-90);
  s.hp=0;C.tick(s,.1);assert.equal(s.hp,100);assert.equal(s.ammo,12);
  assert.equal(C.restore({version:1,released:{},guards:{},gun:true,key:true,p:{x:NaN,z:Infinity}}).released.length,0);
  for(const input of [
    {version:1,boat:true,p:{x:NaN,z:Infinity}},
    {version:1,interior:'cave',p:{x:999,z:999}},
    {version:1,boat:false,island:'jungle',p:C.docks.home.shore}
  ]){const restored=C.restore(input);assert(C.allowed(restored,restored.p));}
});

test('paused combat and cooldown stop while menus or a background tab are open',()=>{
  const s=C.fresh();s.boat=false;s.interior='estate';s.gun=true;s.p={x:0,z:-40};
  const before=C.snapshot(s);for(let i=0;i<100;i++)C.tick(s,.1,{paused:true});
  assert.deepEqual(C.snapshot(s),before);
  for(let i=0;i<30;i++)C.tick(s,.1);assert(s.hp<100);
});

test('village walls stop swept movement, streets and all docks stay reachable, and old campaign progress survives relocation',()=>{
  const s=C.fresh();s.boat=false;s.island='home';s.p={...C.docks.home.shore};
  const street=(x,z)=>({x:x+villageAnchor.x,z:z+villageAnchor.z});
  travel(s,C.docks.home.land);travel(s,C.points.pump);travel(s,street(23,40));travel(s,street(-250,40));travel(s,street(23,40));
  travel(s,street(23,-255));travel(s,street(23,40));travel(s,C.docks.home.land);travel(s,C.docks.home.shore);
  for(const b of VILLAGE){
    s.p={x:b.x+b.w/2+10,z:b.z};for(let j=0;j<20;j++)C.move(s,-1,0,.1);
    assert(s.p.x>=b.x+b.w/2+7,'walked through a house wall');
    const old={...C.snapshot(s),p:{x:b.x,z:b.z},gun:true,paper:true,key:true,tanked:true,fuel:73,ammo:31,released:[0,2]};
    const restored=C.restore(old);assert(C.allowed(restored,restored.p));
    assert.equal(restored.fuel,73);assert.equal(restored.ammo,31);assert.deepEqual(restored.released,[0,2]);assert(restored.gun&&restored.paper&&restored.tanked);
  }
  for(const i of ISLANDS){
    s.island=i.id;s.p={...C.docks[i.id].shore};assert(C.allowed(s,s.p));
    s.boat=true;assert(C.allowed(s,C.docks[i.id]));assert(!C.allowed(s,{x:i.x,z:i.z}));s.boat=false;
  }
});

test('real campaign controls preserve legacy saves, account and room data on start, reload and exit',()=>{
  const g=game();g.run('startGame();wood=93;coins=501;save()');
  const legacy=g.run('JSON.stringify(soloSnapshot())'),storage=g.stored();
  g.element('campaignStart').click();assert.equal(g.run('campaignMode'),true);
  const before=g.run('JSON.stringify(campaign.p)');g.run('K.w=1');g.frame(100);g.run('K.w=0');
  assert.notEqual(g.run('JSON.stringify(campaign.p)'),before);
  g.run('save()');assert.equal(g.stored().myIsland09,storage.myIsland09);
  g.window.dispatchEvent(new g.window.KeyboardEvent('keydown',{key:'h'}));
  g.run('leaveCampaign()');assert.equal(g.run('JSON.stringify(soloSnapshot())'),legacy);
  assert.equal(g.stored().myIsland09,storage.myIsland09);
  const h=game({storage:g.stored()});h.element('campaignStart').click();
  assert.equal(h.run('JSON.stringify(campaign.p)'),g.run('JSON.stringify(campaign.p)'));
  for(const [language,word] of [['nl','Vaar'],['en','Reach'],['de','Fahre'],['fr','Rejoignez'],['es','Llega']]){
    h.run('setLanguage('+JSON.stringify(language)+')');assert(h.element('campaignObjective').textContent.startsWith(word));
  }
  assert.equal(h.requests.length,0);g.close();h.close();
});

test('campaign supports a remapped pad, pausing and blocked storage',()=>{
  const g=game({storageBlocked:true}),pad=controller();g.setPads([pad]);g.run('startCampaign()');g.frame();g.frame();
  assert.equal(g.run('campaignUse3D'),false);
  assert(g.element('campaignViewButton').disabled&&g.element('campaignCameraButton').disabled);
  g.run('padProfile.x=2;padProfile.y=3');pad.axes[3]=-1;
  const before=g.run('JSON.stringify(campaign.p)');g.frame(100);
  assert.notEqual(g.run('JSON.stringify(campaign.p)'),before);pad.axes[3]=0;
  g.run('toggle("controllerPanel",1)');g.frame();g.frame();g.run('bindPad("interact")');
  pad.buttons[10]={pressed:true,value:1};g.frame();assert.equal(g.run('padProfile.buttons.interact'),10);
  pad.buttons[10]={pressed:false,value:0};g.frame();g.run('toggle("controllerPanel",0)');g.frame();g.frame();
  g.run('campaign.p={x:campaignRules.docks.home.x,z:campaignRules.docks.home.z}');
  pad.buttons[10]={pressed:true,value:1};g.frame();assert.equal(g.run('campaign.boat'),false);
  pad.buttons[10]={pressed:false,value:0};g.frame();
  g.run('toggle("campaignHelp",1)');const state=g.run('JSON.stringify(campaignRules.snapshot(campaign))');
  for(let i=0;i<5;i++)g.frame(100);assert.equal(g.run('JSON.stringify(campaignRules.snapshot(campaign))'),state);
  assert(g.element('campaignSave').textContent.includes('niedostępny'));
  g.close();
});

test('every campaign objective and interaction has complete translations in six languages',()=>{
  for(const row of Object.values(rows)){assert.equal(row.length,6);assert(row.every(x=>typeof x==='string'&&x.length));}
  for(const phase of ['dock-goal','fuel-goal','cave-goal','paper-goal','gun-goal','estate-goal','boss-goal','cellar-goal','people-goal','escort-goal','boat-goal','home-goal','complete'])
    assert.notEqual(C.text(phase,'nl'),phase);
});
