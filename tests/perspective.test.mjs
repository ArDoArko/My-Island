import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import { cameraPose, createMaterials, dampCameraVector, intersectRaycastInto, stabilizeSunShadow } from '../island-environment.mjs';
import { cameraVector, fishPose, legPose, walkSurface, baseElevation, nearestWithin, scaleWorldLabels, updateAppearanceKey, updateAvatarFrameCycle, updateAvatarPoseCycle, updateBaseFrame, updateBoarGait, updateBuildingState, updateChapterState, updateLeafWindCycle, updateTerrainAnchor, terrainHeight } from '../island3d-src.mjs';
import { baseLayout } from '../island-play.mjs';
import { updateSceneryLod } from '../tropical-scene.mjs';
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

test('nearest interaction preserves the strict radius and stable distance tie',()=>{
  const first={id:'first',x:3,y:4},tie={id:'tie',x:-3,y:-4},edge={id:'edge',x:75,y:0};
  const objects=[edge,first,tie],snapshot=[...objects],inside={id:'inside',x:74.999,y:0};
  assert.equal(nearestWithin(objects,{x:0,y:0}),first,'an equal-distance tie must keep the first object');
  assert.deepEqual(objects,snapshot,'finding an interaction must not reorder the world objects');
  assert.equal(nearestWithin([edge],{x:0,y:0}),undefined,'the exact radius boundary stays excluded');
  assert.equal(nearestWithin([inside],{x:0,y:0}),inside,'an object just inside the radius stays included');
});

test('world labels keep their pixel cap without traversing unrelated scene objects',()=>{
  const scene=new T.Scene(),camera=new T.PerspectiveCamera(72,1,.1,200),label=new T.Sprite();
  label.scale.set(10,2,1);label.position.z=-.2;scene.add(label);
  for(let i=0;i<100;i++)scene.add(new T.Object3D());
  const labels=new Set([label]),scratch=new T.Vector3();
  assert.equal(scaleWorldLabels(labels,camera,1000,scratch),1);
  const pixels=label.scale.x*camera.projectionMatrix.elements[0]*1000/(2*.2);
  assert(pixels<=240+1e-9,'a close label must stay within the original 240 pixel cap');
  label.position.z=-100;
  scaleWorldLabels(labels,camera,1000,scratch);
  assert.equal(label.scale.x,10,'a distant label must restore its authored scale');
  assert.equal(label.userData.signScale.x,10,'the reusable base scale must not be overwritten by capping');
});

test('scenery LOD updates existing trunk and crown batches without joining them',()=>{
  const high={id:'high'},low={id:'low'},center=new T.Vector3(),camera=new T.Vector3(3,0,0);
  const trunk={geometry:high,receiveShadow:true,userData:{lod:{high,low,center,distance:1,radius:1,level:'high',shadowReceiverLod:true}}};
  const crown={geometry:high,receiveShadow:false,userData:{lod:{high,low,center,distance:1,radius:1,level:'high'}}};
  const trunks=[trunk],crowns=[crown];
  assert.equal(updateSceneryLod(trunks,camera),undefined);updateSceneryLod(crowns,camera);
  assert.equal(trunk.geometry,low);assert.equal(crown.geometry,low);assert.equal(trunk.receiveShadow,false);assert.equal(crown.receiveShadow,false);
  camera.set(0,0,0);updateSceneryLod(trunks,camera);updateSceneryLod(crowns,camera);
  assert.equal(trunk.geometry,high);assert.equal(crown.geometry,high);assert.equal(trunk.receiveShadow,true);
  assert.equal(trunks[0],trunk);assert.equal(crowns[0],crown,'LOD updates must preserve the authored batch arrays');
});

test('unchanged avatar appearance skips per-frame serialization and material work',()=>{
  const person={};
  assert.equal(updateAppearanceKey(person,{shirt:'#123456',skin:'#abcdef',hair:'#333333',style:2}),true);
  assert.equal(updateAppearanceKey(person,{shirt:'#123456',skin:'#abcdef',hair:'#333333',style:2}),false,'an equivalent fresh snapshot must not trigger an update');
  assert.equal(updateAppearanceKey(person,{shirt:'#123456',skin:'#abcdef',hair:'#333333',style:1}),true,'a real hairstyle change must still update the mesh');
});

test('avatar animation shares exact phase and heading samples across each body',()=>{
  const frame={},cycle={};
  for(const seconds of [0,.37,2.1])for(const active of [false,true])for(const swimming of [false,true]){
    updateAvatarFrameCycle(frame,seconds);const phase=seconds*7+.23,yaw=seconds*.4-.7;
    assert.equal(updateAvatarPoseCycle(cycle,phase,yaw,active,swimming,frame),cycle);
    assert(Math.abs(cycle.hips-((active?.90:.92)+(active?Math.cos(phase*2)*.012:Math.sin(seconds*1.7)*.004)))<1e-12);
    assert.equal(cycle.yawSin,Math.sin(yaw));assert.equal(cycle.yawCos,Math.cos(yaw));
    for(const side of [-1,1]){
      const expectedSin=(active||swimming)?Math.sin(phase+(side<0?Math.PI:0)):0;
      const expectedCos=(active||swimming)?Math.cos(phase+(side<0?Math.PI:0)):0;
      assert(Math.abs((side<0?-cycle.phaseSin:cycle.phaseSin)-expectedSin)<1e-12);
      assert(Math.abs((side<0?-cycle.phaseCos:cycle.phaseCos)-expectedCos)<1e-12);
      const idle=Math.sin(seconds*1.3+side),shared=frame.idleArmSin*Math.cos(1)+frame.idleArmCos*side*Math.sin(1);
      assert(Math.abs(idle-shared)<1e-12);
      const swim=Math.sin(phase+side),sharedSwim=cycle.phaseSin*Math.cos(1)+cycle.phaseCos*side*Math.sin(1);
      if(active||swimming)assert(Math.abs(swim-sharedSwim)<1e-12);
    }
  }
});

test('resource palms share exact wind samples across every phase',()=>{
  const cycle={};
  for(const seconds of [0,.37,4.9]){
    assert.equal(updateLeafWindCycle(cycle,seconds),cycle);
    for(const phase of [0,.31,2.8,6.1]){
      const phaseSin=Math.sin(phase),phaseCos=Math.cos(phase);
      const x=cycle.xSin*phaseCos+cycle.xCos*phaseSin;
      const z=cycle.zCos*phaseCos-cycle.zSin*phaseSin;
      assert(Math.abs(x-Math.sin(seconds*.7+phase))<1e-12);
      assert(Math.abs(z-Math.cos(seconds*.6+phase))<1e-12);
    }
  }
});

test('boars share one gait sample across all four alternating legs',()=>{
  const gait=[0,0,0,0];
  for(const seconds of [0,.37,2.1]){
    assert.equal(updateBoarGait(gait,seconds),gait);
    for(let leg=0;leg<4;leg++)assert(Math.abs(gait[leg]-Math.sin(seconds*6+leg*Math.PI)*.15)<1e-12);
  }
});

test('leg and fish animation update reusable pose buffers',()=>{
  const leg={hip:0,knee:0};assert.equal(legPose(-.78,.22,leg),leg);
  const expectedLeg=legPose(-.78,.22);assert.deepEqual(leg,expectedLeg);
  const fish={x:0,z:0,y:0,yaw:0},point={x:1750,y:2270,phase:.7},sea=()=>true;
  assert.equal(fishPose(point,2.3,sea,fish),fish);assert.deepEqual(fish,fishPose(point,2.3,sea));
  assert.equal(fishPose(point,2.3,()=>false,fish),null,'a fish outside water must remain hidden without replacing its buffer');
});

test('base terrain layout and elevation stay cached until the saved base changes',()=>{
  const cache={},pos={x:1900,y:1250};
  assert.equal(updateBaseFrame(cache,pos,3),true);
  const layout=cache.layout,elevation=cache.elevation;
  assert.equal(updateBaseFrame(cache,{x:1900,y:1250},3),false,'an equivalent fresh save snapshot must reuse the base frame');
  assert.equal(cache.layout,layout);assert.equal(cache.elevation,elevation);
  assert.equal(updateBaseFrame(cache,{x:1901,y:1250},3),true,'moving the base must invalidate the cached terrain frame');
  assert.notEqual(cache.layout,layout);
  assert.equal(updateBaseFrame(cache,{x:1901,y:1250},4),true,'upgrading the base must invalidate its layout');
});

test('unchanged building snapshots skip per-frame JSON allocation and rebuilds',()=>{
  const cache={},snapshot={baseLevel:2,basePos:{x:1900,y:1250},campfire:1,fire:{x:1750,y:1400},activities:{completed:3,gardenClaimed:2,raceWon:0}};
  assert.equal(updateBuildingState(cache,snapshot),true);
  assert.equal(updateBuildingState(cache,{...snapshot,basePos:{x:1900,y:1250},fire:{x:1750,y:1400},activities:{...snapshot.activities}}),false,'equivalent fresh scene snapshots must not rebuild static meshes');
  assert.equal(updateBuildingState(cache,{...snapshot,fire:{x:1751,y:1400}}),true,'moving the fire must rebuild its mesh');
  assert.equal(updateBuildingState(cache,{...snapshot,activities:{completed:6,gardenClaimed:2,raceWon:0}}),true,'crossing a visible work threshold must rebuild the base');
  assert.equal(updateBuildingState(cache,{...snapshot,activities:{completed:3,gardenClaimed:3,raceWon:0}}),true,'claiming the garden must remove its harvest mesh');
});

test('expedition markers compare visible fields without per-frame serialization',()=>{
  const cache={},markers=[{id:'wave',type:'rune',x:2250,y:1280,done:false,symbol:'≈',label:'Fala'}];
  assert.equal(updateChapterState(cache,markers),true);
  assert.equal(updateChapterState(cache,markers.map(point=>({...point}))),false,'equivalent fresh marker objects must reuse their meshes');
  assert.equal(updateChapterState(cache,[{...markers[0],done:true}]),true,'mission progress must refresh its marker');
  assert.equal(updateChapterState(cache,[{...markers[0],label:'Wave'}]),true,'a language change must refresh the label');
  assert.equal(updateChapterState(cache,[]),true,'finishing the mission must remove its markers');
});

test('static scene anchors sample terrain only after their coordinates change',()=>{
  const cache={};
  assert.equal(updateTerrainAnchor(cache,{x:1630,y:1160},.9,.15),true);
  assert.equal(cache.x,1630/80+.9);assert.equal(cache.z,1160/80+.15);assert.equal(cache.y,terrainHeight(cache.x,cache.z));
  assert.equal(updateTerrainAnchor(cache,{x:1630,y:1160},.9,.15),false,'an equivalent fresh snapshot must reuse the terrain sample');
  assert.equal(updateTerrainAnchor(cache,{x:1640,y:1160},.9,.15),true,'moving an anchor must resample terrain');
  assert.equal(updateTerrainAnchor(cache,null),true);assert.equal(cache.valid,false);
  assert.equal(updateTerrainAnchor(cache,null),false,'an absent anchor must also remain cached');
});

test('camera pose can reuse its vectors without changing first- or third-person geometry',()=>{
  const out={position:new T.Vector3(),target:new T.Vector3()};
  for(const mode of ['first','third']){
    const expected=cameraPose({x:3,z:-4,surface:.7,yaw:1.2,pitch:.18,mode,distance:5.4,bob:.02});
    const actual=cameraPose({x:3,z:-4,surface:.7,yaw:1.2,pitch:.18,mode,distance:5.4,bob:.02},out);
    assert.equal(actual,out);assert.equal(actual.position,out.position);assert.equal(actual.target,out.target);
    assert(actual.position.equals(expected.position));assert(actual.target.equals(expected.target));
  }
});

test('decoded material clones stop scanning after their one required upload pass',()=>{
  const original=T.TextureLoader.prototype.load;
  T.TextureLoader.prototype.load=function(url,onLoad){const texture=new T.Texture({width:4,height:4});onLoad?.(texture);return texture;};
  let materials;
  try{
    materials=createMaterials({capabilities:{getMaxAnisotropy:()=>1}});
    materials.surface('wood','#ffffff',1,.03);materials.surface('grass','#ffffff',1,.03);
    materials.update();const settled=materials.stats();
    assert.equal(settled.syncPending,false);assert.equal(settled.syncPasses,1);
    for(let frame=0;frame<120;frame++)materials.update();
    assert.equal(materials.stats().syncPasses,1,'settled textures must not scan the material map every frame');
    materials.surface('sand','#ffffff',1,.03);materials.update();
    assert.equal(materials.stats().syncPasses,2,'a material created later must still receive its upload pass');
  }finally{materials?.dispose();T.TextureLoader.prototype.load=original;}
});

test('third-person damping is frame-rate independent and never overshoots a shoreline height change',()=>{
  const desired=new T.Vector3(4,3.2,-2),at30=new T.Vector3(0,-.4,0),at60=at30.clone();
  for(let i=0;i<30;i++)dampCameraVector(at30,desired,1/30,8);
  let previous=at60.y;
  for(let i=0;i<60;i++){
    dampCameraVector(at60,desired,1/60,8);
    assert(at60.y>=previous&&at60.y<=desired.y,'shoreline smoothing must stay between the old and new heights');
    previous=at60.y;
  }
  assert(at30.distanceTo(at60)<1e-10,'camera response must not depend on refresh rate');
  assert(at60.distanceTo(desired)<.002,'camera must settle quickly instead of floating behind the player');
});

test('camera raycasts reuse and clear their result array',()=>{
  const raycaster=new T.Raycaster(new T.Vector3(0,0,3),new T.Vector3(0,0,-1)),mesh=new T.Mesh(new T.BoxGeometry(),new T.MeshBasicMaterial());
  mesh.updateMatrixWorld(true);const hits=[{stale:true}],identity=hits;
  assert.equal(intersectRaycastInto(raycaster,[mesh],false,hits),identity);assert(hits.length>0);assert(hits.every(hit=>!hit.stale));
  assert.equal(intersectRaycastInto(raycaster,[],false,hits),identity);assert.equal(hits.length,0);
  mesh.geometry.dispose();mesh.material.dispose();
});

test('sun focus stays aligned with shadow texels while following the player',()=>{
  const sun=new T.DirectionalLight();
  sun.shadow.camera.left=-16;sun.shadow.camera.right=16;sun.shadow.mapSize.set(2048,2048);
  const texel=stabilizeSunShadow(sun,12.0001,7.0001);
  const focus=sun.target.position.clone();stabilizeSunShadow(sun,12.004,7.004);
  assert.equal(texel,32/2048);
  assert.equal(sun.target.position.x,focus.x);assert.equal(sun.target.position.z,focus.z);
  assert.equal(sun.position.x,focus.x-12);assert.equal(sun.position.z,focus.z-8);
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
