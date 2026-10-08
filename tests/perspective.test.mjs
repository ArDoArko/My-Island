import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cameraPose } from '../island-environment.mjs';
import { cameraVector, walkSurface, baseElevation } from '../island3d-src.mjs';
import { baseLayout } from '../island-play.mjs';
import { game } from './game-harness.mjs';

test('eye-level camera follows real ground, ramp, floor and swimming height',()=>{
  const layout=baseLayout({x:1900,y:1250},3),elevation=baseElevation(layout);
  const ramp=layout.point(0,layout.depth/2+32);
  for(const [x,z,surface] of [[18,14,walkSurface(18,14,null)],[ramp.x/80,ramp.y/80,walkSurface(ramp.x/80,ramp.y/80,layout,elevation)],[layout.center.x/80,layout.center.y/80,elevation+.16],[0,0,-.95]]){
    const pose=cameraPose({x,z,surface,yaw:0,pitch:0});
    assert.equal(pose.position.x,x);assert.equal(pose.position.z,z);
    assert(Math.abs(pose.position.y-surface-1.64)<1e-12);
    assert(Math.abs(pose.target.y-pose.position.y)<1e-12);
  }
});

test('forward movement points where first-person camera looks at every heading',()=>{
  for(const yaw of [0,Math.PI/2,Math.PI,5.1]){
    const pose=cameraPose({x:0,z:0,surface:0,yaw,pitch:0});
    const direction=pose.target.clone().sub(pose.position),movement=cameraVector(0,-1,yaw);
    assert(Math.abs(direction.x-movement.x)<1e-12);assert(Math.abs(direction.z-movement.y)<1e-12);
    const down=cameraPose({x:0,z:0,surface:0,yaw,pitch:1});assert(down.target.y<down.position.y);
    const up=cameraPose({x:0,z:0,surface:0,yaw,pitch:-1});assert(up.target.y>up.position.y);
  }
});

function boot(g){const graphics={enabled:true,setEnabled(v){this.enabled=v},setCamera(v){this.cameraMode=v},frame(){},resize(){},orbit(){},vector(x,y){return{x,y}}};g.window.MyIsland3D={create:()=>graphics};g.run('boot3D();startGame()');return graphics;}

test('camera preference survives reload without changing the island, account or multiplayer keys',()=>{
  const g=game();boot(g);g.run('wood=77;stone=31;coins=400;startChapter("compass");save()');
  const state=g.run('JSON.stringify(soloSnapshot())'),storage=g.stored();
  g.run('switchCamera()');assert.equal(g.element('cameraModeButton').textContent,'Zza postaci');
  assert.equal(g.run('JSON.stringify(soloSnapshot())'),state);
  assert.deepEqual(g.stored(),{...storage,myIslandCameraV1:'third'});
  const h=game({storage:g.stored()});const view=boot(h);assert.equal(view.cameraMode,'third');assert.equal(h.run('wood'),77);assert.equal(h.run('chapterState.active'),'compass');
  for(const [code,label] of [['nl','Derde persoon'],['en','Third person'],['fr','Troisième personne']]){h.run(`setLanguage('${code}')`);assert.equal(h.element('cameraModeButton').textContent,label);}
  h.run('switchView()');assert(h.element('cameraModeButton').disabled);h.run('switchCamera()');assert.equal(view.cameraMode,'third');
  g.close();h.close();
});

test('first and third person stay usable when a device blocks local storage',()=>{
  const g=game({storageBlocked:true});const view=boot(g);assert.equal(view.cameraMode,'first');
  g.run('switchCamera()');assert.equal(view.cameraMode,'third');g.run('switchCamera()');assert.equal(view.cameraMode,'first');g.close();
});
