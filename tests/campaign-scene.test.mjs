import test from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import * as T from 'three';
import { buildHuman } from '../island3d-src.mjs';
import { attachSceneChild, campaignShadowInterval, campaignShadowsAnimated, createCampaignView, sampleCampaignGround, updateCampaignAreaPresentation, updateCampaignAreaView, updateCampaignExterior, updateCampaignGoal, updateCampaignGuardHeading, updateCampaignMovement, updateCampaignNearby, updateCampaignPoseState, updateCampaignRenderScale, updateCampaignShadowState, updateCampaignTerrainShadows, updateCampaignWalkCycle, updateEscortPoints, updateLineSegment, updateReleasedPresentation, usesMobileCampaignProfile } from '../campaign-view.mjs';
import { createOcean } from '../tropical-scene.mjs';
import * as C from '../campaign.mjs';
import { VILLAGE } from '../campaign-world.mjs';

test('campaign player reparents only when changing between boat and land',()=>{
  const scene=new T.Group(),boat=new T.Group(),player=new T.Group(),sentinel=new T.Group();
  scene.add(player);scene.add(sentinel);
  assert.equal(attachSceneChild(scene,player),false,'an on-foot frame must not churn the scene hierarchy');
  assert.deepEqual(scene.children,[player,sentinel]);
  boat.add(player);
  assert.equal(attachSceneChild(scene,player),true,'disembarking must restore the player to the scene');
  assert.equal(player.parent,scene);assert.deepEqual(scene.children,[sentinel,player]);
  assert.equal(attachSceneChild(scene,player),false,'subsequent on-foot frames must reuse the parent');
});

test('static campaign presentation changes only with the room or rescued people',()=>{
  const areaCache={},world={},rooms={},roomEntries=[['cave',{}],['estate',{}],['cellar',{}]],scene={background:new T.Color(),fog:{color:new T.Color()}},hemi={},sun={};
  assert.equal(updateCampaignAreaPresentation(areaCache,null,world,rooms,roomEntries,scene,hemi,sun),true);
  assert.equal(world.visible,true);assert.equal(rooms.visible,false);assert.equal(hemi.intensity,2);assert.equal(sun.intensity,2.8);
  assert.equal(updateCampaignAreaPresentation(areaCache,null,world,rooms,roomEntries,scene,hemi,sun),false);
  assert.equal(updateCampaignAreaPresentation(areaCache,'cellar',world,rooms,roomEntries,scene,hemi,sun),true);
  assert.equal(world.visible,false);assert.equal(rooms.visible,true);assert.equal(roomEntries[2][1].visible,true);
  assert.equal(hemi.intensity,.65);assert.equal(sun.intensity,.15);assert(scene.background.equals(scene.fog.color));
  const releaseCache={},mask=new Uint8Array(5),bars=Array.from({length:5},()=>({visible:true}));
  assert.equal(updateReleasedPresentation(releaseCache,[1,3],mask,bars),true);
  assert.deepEqual(Array.from(mask),[0,1,0,1,0]);assert.deepEqual(bars.map(bar=>bar.visible),[true,false,true,false,true]);
  assert.equal(updateReleasedPresentation(releaseCache,[1,3],mask,bars),false);
  assert.equal(updateReleasedPresentation(releaseCache,[1,3,4],mask,bars),true);assert.equal(bars[4].visible,false);
});

test('area transitions orient the camera before their first rendered frame',()=>{
  const cache={},out={},player={x:100,z:200},target={x:40,z:80};
  assert.equal(updateCampaignAreaView(cache,null,player,target,1.7,-.8,.05,out),true);
  assert.deepEqual(out,{yaw:Math.atan2(60,120),pitch:.05});
  assert.equal(updateCampaignAreaView(cache,null,player,{x:999,z:999},.75,-.6,.05,out),false);
  assert.deepEqual(out,{yaw:.75,pitch:-.6},'an unchanged area must preserve manual camera orbit and tilt');
  assert.equal(updateCampaignAreaView(cache,'cave',player,target,1.2,.7,.05,out),true);
  assert.deepEqual(out,{yaw:0,pitch:.05},'an interior must face its authored entrance at eye level on the first frame');
  updateCampaignAreaView(cache,'cellar',player,target,.9,-.5,.22,out);
  assert.deepEqual(out,{yaw:0,pitch:.22},'third-person room transitions must restore their authored camera elevation');
  updateCampaignAreaView(cache,null,player,target,.9,.6,.05,out);
  assert.deepEqual(out,{yaw:Math.atan2(60,120),pitch:.05},'leaving a room must face the current objective at eye level immediately');
  updateCampaignAreaView({},null,player,null,.4,-.3,.05,out);
  assert.deepEqual(out,{yaw:.4,pitch:.05},'a completed campaign without a target must keep its heading and level its view');
});

test('interiors stop hidden ocean, sky and palm LOD animation',()=>{
  const camera={position:new T.Vector3(2,3,4)},sky={material:{uniforms:{uTime:{value:0}}},position:new T.Vector3()};
  let oceanUpdates=0,lodUpdates=0;
  const ocean={update(seconds,position){oceanUpdates++;assert.equal(seconds,2);assert.equal(position,camera.position);}};
  const vegetation={update(position,threshold){lodUpdates++;assert.equal(position,camera.position);assert.equal(threshold,.5);}};
  assert.equal(updateCampaignExterior('cave',1,camera,sky,ocean,vegetation),false);
  assert.equal(updateCampaignExterior('estate',1.5,camera,sky,ocean,vegetation),false);
  assert.equal(oceanUpdates,0);assert.equal(lodUpdates,0);assert.equal(sky.material.uniforms.uTime.value,0);
  assert.equal(updateCampaignExterior(null,2,camera,sky,ocean,vegetation),true);
  assert.equal(oceanUpdates,1);assert.equal(lodUpdates,1);assert.equal(sky.material.uniforms.uTime.value,2);assert(sky.position.equals(camera.position));
});

test('mobile ocean keeps coastal presentation with three noise layers',()=>{
  const coasts=[[0,0,10,10]],desktop=createOcean(coasts),mobile=createOcean(coasts,{segments:48,mobile:true});
  assert.equal(desktop.mesh.material.userData.fragmentNoiseLayers,7);
  assert.equal(mobile.mesh.material.userData.fragmentNoiseLayers,3);
  assert.equal(mobile.mesh.material.userData.mobileQuality,true);
  assert.equal(mobile.mesh.geometry.parameters.widthSegments,48);
  for(const token of ['uCoasts','shallow','fresnel','foam'])assert(mobile.mesh.material.fragmentShader.includes(token),`mobile water must retain ${token}`);
  assert(!mobile.mesh.material.fragmentShader.includes('noise21(p*1.6'),'mobile wave normals must not pay for three extra noise samples per pixel');
  desktop.dispose();mobile.dispose();
});

test('phones and compact touch tablets keep the mobile campaign rendering profile',()=>{
  assert.equal(usesMobileCampaignProfile(390,844,5),true,'a portrait phone must use the mobile profile');
  assert.equal(usesMobileCampaignProfile(844,390,5),true,'the same phone must stay mobile after landscape rotation');
  assert.equal(usesMobileCampaignProfile(1024,768,5),true,'a compact landscape tablet must not receive desktop rendering costs');
  assert.equal(usesMobileCampaignProfile(820,1180,5),true,'a compact portrait tablet must keep the mobile profile');
  assert.equal(usesMobileCampaignProfile(1024,768,0),false,'an equally sized non-touch desktop window can retain desktop presentation');
  assert.equal(usesMobileCampaignProfile(900,600,0),false,'a short desktop window must not be mistaken for a phone');
  assert.equal(usesMobileCampaignProfile(1280,800,5),false,'a large touch display can retain desktop presentation');
});

test('only terrain inside the local sun projection samples the shadow map',()=>{
  const islands=[{x:0,z:0,radius:9000},{x:30000,z:0,radius:5000}],terrains=[{receiveShadow:true},{receiveShadow:true}],cache={};
  assert.equal(updateCampaignTerrainShadows(cache,null,{x:0,z:0},islands,terrains),true);
  assert.deepEqual(terrains.map(o=>o.receiveShadow),[true,false]);assert.equal(cache.active,1);
  assert.equal(updateCampaignTerrainShadows(cache,null,{x:50,z:0},islands,terrains),false,'sub-ten-metre travel must reuse the receiver selection');
  assert.equal(updateCampaignTerrainShadows(cache,null,{x:24250,z:0},islands,terrains),true);
  assert.deepEqual(terrains.map(o=>o.receiveShadow),[false,true],'an approaching boat must enable the destination before reaching its nominal coast');
  assert.equal(updateCampaignTerrainShadows(cache,'cave',{x:0,z:0},islands,terrains),true);
  assert.deepEqual(terrains.map(o=>o.receiveShadow),[false,false]);assert.equal(cache.active,0);
});

test('unchanged campaign shadows reuse primitive state without frame strings',()=>{
  const cache={},state={interior:null,island:'home',boat:false,p:{x:120,z:-80},heading:.3,boarded:false,
    guards:[{id:'gate',hp:100},{id:'boss',hp:0}],released:[0,2]};
  assert.equal(updateCampaignShadowState(cache,state,false),true);
  assert.equal(updateCampaignShadowState(cache,state,false),false,'an unchanged fresh frame must reuse the shadow state');
  state.guards[0].hp=0;assert.equal(updateCampaignShadowState(cache,state,false),true,'a guard pose change must refresh shadows');
  assert.equal(updateCampaignShadowState(cache,state,false),false);
  state.released=[0,3];assert.equal(updateCampaignShadowState(cache,state,false),true,'a released resident change must refresh shadows');
  assert.equal(updateCampaignShadowState(cache,state,true),true,'starting animation must refresh shadows immediately');
});

test('stationary boats reuse their shadow map until real movement resumes',()=>{
  const state={paused:false,boat:true,walking:false};
  assert.equal(campaignShadowsAnimated(state,false),false,'being seated in an idle boat must not redraw the shadow map every frame');
  state.walking=true;
  assert.equal(campaignShadowsAnimated(state,false),true,'a moving boat must keep animated shadows responsive');
  state.walking=false;
  assert.equal(campaignShadowsAnimated(state,true),true,'moving guards must still animate shadows while the boat is idle');
  state.paused=true;
  assert.equal(campaignShadowsAnimated(state,true),false,'pause must freeze every animated shadow source');
});

test('hidden first-person walking does not animate an invisible player shadow',()=>{
  const state={paused:false,boat:false,walking:true};
  assert.equal(campaignShadowsAnimated(state,false,false),false,'a hidden first-person rig must not refresh shadows at 30 Hz');
  assert.equal(campaignShadowsAnimated(state,false,true),true,'third-person walking must keep the visible player shadow animated');
  state.boat=true;
  assert.equal(campaignShadowsAnimated(state,false,false),true,'a moving boat remains a visible animated shadow source');
  state.boat=false;
  assert.equal(campaignShadowsAnimated(state,true,false),true,'moving guards must animate shadows independently of camera mode');
});

test('mobile campaign caps animated shadow maps at 20 Hz',()=>{
  assert.equal(campaignShadowInterval(false),1000/30,'desktop keeps responsive 30 Hz moving shadows');
  assert.equal(campaignShadowInterval(true),50,'the mobile profile renders at most twenty moving shadow maps per second');
});

test('nearby campaign interaction selection updates only when its inputs change',()=>{
  const cache={},candidates=[],state=C.fresh();
  assert.equal(updateCampaignNearby(cache,state,candidates),true);
  assert.equal(updateCampaignNearby(cache,state,candidates),false,'an unchanged player and mission state must reuse the nearby target');
  state.p={...C.docks.home};assert.equal(updateCampaignNearby(cache,state,candidates),true,'player movement must refresh proximity immediately');
  assert.equal(cache.nearby?.id,'dock-home');
  state.boat=false;state.p={...C.docks.home.shore};state.island='home';
  assert.equal(updateCampaignNearby(cache,state,candidates),true,'disembarking must replace boat interactions with land interactions');
  assert.equal(cache.nearby?.id,'boat');
  state.interior='cellar';state.p={...C.PEOPLE[0]};state.released=[];
  assert.equal(updateCampaignNearby(cache,state,candidates),true);assert.equal(cache.nearby?.id,'cell-0');
  state.released.push(0);assert.equal(updateCampaignNearby(cache,state,candidates),true,'freeing a person must refresh cellar interactions');
  assert.notEqual(cache.nearby?.id,'cell-0');
});

test('campaign objective selection reuses an unchanged story state',()=>{
  const cache={},goal={},state=C.fresh();
  assert.equal(updateCampaignGoal(cache,state,goal),true);assert.equal(goal.key,'dock-goal');
  assert.equal(updateCampaignGoal(cache,state,goal),false,'an unchanged player and story state must reuse the objective');
  state.docked=true;assert.equal(updateCampaignGoal(cache,state,goal),true);assert.equal(goal.key,'fuel-goal');
  state.tanked=state.paper=state.gun=true;state.boat=false;state.island='fortress';state.interior='estate';
  state.p={x:0,z:100};assert.equal(updateCampaignGoal(cache,state,goal,true),true);assert.equal(goal.key,'boss-goal');
  state.guards.find(guard=>guard.id==='boss').hp=0;
  assert.equal(updateCampaignGoal(cache,state,goal,false),true,'defeating the boss must expose the key immediately');assert.equal(goal.key,'key-goal');
  state.key=true;state.interior='cellar';state.released=[0,1];
  assert.equal(updateCampaignGoal(cache,state,goal,false),true);assert.equal(goal.target.id,2);
  state.released=[0,2];assert.equal(updateCampaignGoal(cache,state,goal,false),true,'the rescued identities must invalidate the next-person marker');assert.equal(goal.target.id,1);
});

test('escort formation updates reusable points around the player',()=>{
  const points=C.PEOPLE.map(()=>({x:0,z:0})),identities=[...points],player={x:100,z:200};
  assert.equal(updateEscortPoints(points,C.PEOPLE,player,0),points);
  assert.deepEqual(points.map(p=>[p.x,p.z]),C.PEOPLE.map(p=>[100+(p.id%2?16:-16),200-(35+p.id*15)]));
  updateEscortPoints(points,C.PEOPLE,player,Math.PI/2);
  assert(points.every((point,id)=>point===identities[id]),'formation updates must not allocate replacement points');
  assert(points.every(point=>Number.isFinite(point.x)&&Number.isFinite(point.z)));
  assert(Math.abs(points[0].x-65)<1e-9&&Math.abs(points[0].z-216)<1e-9);
});

test('shot tracer updates one reusable GPU position buffer',()=>{
  const position=new T.Float32BufferAttribute(new Float32Array(6),3),version=position.version;
  assert.equal(updateLineSegment(position,{x:40,z:-20},{x:-60,z:80},1.35,20),position);
  assert.equal(position.version,version+1);assert.deepEqual(Array.from(position.array),[2,1.350000023841858,-1,-3,1.350000023841858,4]);
});

test('campaign walk cycle shares exact trigonometric samples across each body',()=>{
  const cycle={};
  for(const walking of [false,true])for(const seconds of [0,.13,1.2]){
    assert.equal(updateCampaignWalkCycle(cycle,seconds,walking),cycle);
    const phase=seconds*7,step=walking?.24:0;
    assert.equal(cycle.swing,Math.sin(phase));assert.equal(cycle.step,step);assert.equal(cycle.bounce,walking?Math.cos(phase*2):0);
    for(const side of [-1,1]){
      const oldLeg=Math.sin(phase+(side<0?Math.PI:0))*step,newLeg=(side<0?-cycle.swing:cycle.swing)*step;
      const oldArm=walking?Math.sin(phase+(side<0?0:Math.PI))*.25:0,newArm=walking?(side<0?cycle.swing:-cycle.swing)*.25:0;
      assert(Math.abs(oldLeg-newLeg)<1e-12);assert(Math.abs(oldArm-newArm)<1e-12);
      assert(Math.abs(Math.max(0,-oldLeg)-Math.max(0,-newLeg))<1e-12);
    }
  }
});

test('stationary campaign poses update only when their authored transform changes',()=>{
  const cache={},point={x:20,z:-40};
  assert.equal(updateCampaignPoseState(cache,point,.5,.25,false),true);
  assert.equal(updateCampaignPoseState(cache,point,.5,.25,false),false,'an unchanged idle person must reuse its body pose');
  point.x=21;assert.equal(updateCampaignPoseState(cache,point,.5,.25,false),true,'movement must invalidate the pose');
  assert.equal(updateCampaignPoseState(cache,point,.5,.25,true),true,'walking animation must update every frame');
  assert.equal(updateCampaignPoseState(cache,point,.5,.25,false,true),true,'a forced contact pose must bypass the cache');
  assert.equal(updateCampaignPoseState(cache,point,.5,.25,false,false,'fallen'),true,'changing to a fallen pose must invalidate the cache once');
  assert.equal(updateCampaignPoseState(cache,point,.5,.25,false,false,'fallen'),false,'an unchanged fallen person must reuse its body pose');
});

test('campaign guards walk only after their position really changes',()=>{
  const cache={},guard={x:12,z:8};
  assert.equal(updateCampaignMovement(cache,guard,true),false,'a newly observed stationary guard must start in an idle pose');
  assert.equal(updateCampaignMovement(cache,guard,true),false,'proximity alone must not make a guard march in place');
  guard.x+=.5;assert.equal(updateCampaignMovement(cache,guard,true),true,'real pursuit movement must animate the guard');
  guard.x+=.5;assert.equal(updateCampaignMovement(cache,guard,false),false,'a defeated guard must never keep walking');
});

test('defeated campaign guards keep their final facing direction',()=>{
  const cache={};
  assert.equal(updateCampaignGuardHeading(cache,.25,true),.25);
  assert.equal(updateCampaignGuardHeading(cache,1.1,false),.25,'a corpse must not rotate to track the moving player');
  assert.equal(updateCampaignGuardHeading(cache,-.4,false),.25);
  assert.equal(updateCampaignGuardHeading(cache,-.4,true),-.4,'a living guard must resume tracking immediately');
  const loaded={};
  assert.equal(updateCampaignGuardHeading(loaded,.8,false),.8,'an already defeated guard needs one stable initial heading');
  assert.equal(updateCampaignGuardHeading(loaded,-.8,false),.8);
});

test('stationary campaign objects reuse procedural terrain samples',()=>{
  const cache=new Map(),guard={},marker={};let calls=0;
  const sample=(x,z)=>{calls++;return x*.01-z*.02;};
  assert.equal(sampleCampaignGround(cache,guard,120,-80,sample),2.8);
  assert.equal(sampleCampaignGround(cache,guard,120,-80,sample),2.8);
  assert.equal(sampleCampaignGround(cache,marker,120,-80,sample),2.8,'different scene objects keep independent entries');
  assert.equal(calls,2,'unchanged positions must not resample the procedural terrain');
  assert.equal(sampleCampaignGround(cache,guard,121,-80,sample),2.81);
  assert.equal(calls,3,'moving an object must invalidate only its cached sample');
  assert.equal(cache.misses,3);
});

test('campaign render scale adapts only after sustained frame pressure and recovers gradually',()=>{
  const scale={};let ratio=1.5,now=0;
  ratio=updateCampaignRenderScale(scale,now,ratio,1.5);
  for(let i=0;i<62;i++)ratio=updateCampaignRenderScale(scale,now+=40,ratio,1.5);
  assert.equal(ratio,1.5,'brief frame pressure must not change resolution');
  ratio=updateCampaignRenderScale(scale,now+=40,ratio,1.5);
  assert.equal(ratio,1.35,'sustained slow frames should reduce GPU fill rate one step');
  ratio=updateCampaignRenderScale(scale,now+=1000,ratio,1.5);
  assert.equal(ratio,1.35,'a background-tab pause must not count as a slow frame');
  for(let i=0;i<400;i++)ratio=updateCampaignRenderScale(scale,now+=16,ratio,1.5,false);
  assert.equal(ratio,1.35,'a paused game must not recover quality using its lighter workload');
  ratio=updateCampaignRenderScale(scale,now+=16,ratio,1.5,true);
  assert.equal(ratio,1.35,'resuming must start a fresh performance window');
  for(let i=0;i<313;i++)ratio=updateCampaignRenderScale(scale,now+=16,ratio,1.5);
  assert.equal(ratio,1.45,'stable fast frames should recover quality gradually');
  for(let round=0;round<8;round++)for(let i=0;i<63;i++)ratio=updateCampaignRenderScale(scale,now+=40,ratio,1.5);
  assert.equal(ratio,.8,'adaptive resolution must retain a readable lower bound');
});

test('real Three.js campaign geometry and both cameras run through every mission area without GPU rendering',()=>{
  const dom=new JSDOM('<canvas></canvas>');
  const previous=Object.fromEntries(['document','innerWidth','innerHeight','devicePixelRatio'].map(k=>[k,globalThis[k]]));
  globalThis.document=dom.window.document;globalThis.innerWidth=900;globalThis.innerHeight=600;globalThis.devicePixelRatio=1;
  dom.window.HTMLCanvasElement.prototype.getContext=()=>new Proxy({}, {get:()=>()=>{}});
  let scene,camera,disposed=false;
  let pixelRatio=1,renderCalls=0;
  const renderer={capabilities:{getMaxAnisotropy:()=>1},shadowMap:{},info:{render:{calls:0,triangles:0}},
    setPixelRatio(value){pixelRatio=value},getPixelRatio(){return pixelRatio},setSize(){},render(s,c){renderCalls++;scene=s;camera=c;s.updateMatrixWorld(true);c.updateMatrixWorld(true)},dispose(){disposed=true}};
  const state=C.fresh();let view;
  try{
    view=createCampaignView({canvas:document.querySelector('canvas'),getState:()=>state,makeHuman:buildHuman,rendererFactory:()=>renderer});
    assert.equal(view.cameraMode,'first');view.frame(0);
    const houses=[];scene.traverse(o=>{if(o.name==='village-house')houses.push(o);});assert.equal(houses.length,6);
    assert.equal(houses.reduce((n,o)=>n+o.children.length,0),0,'house meshes must move into the street-wide batch');
    assert.equal(houses.reduce((n,o)=>n+o.userData.facadeDetails.planters,0),12);
    assert.equal(houses.reduce((n,o)=>n+o.userData.facadeDetails.awnings,0),8);
    assert.equal(houses.filter(o=>o.userData.facadeDetails.balcony).length,2);
    assert.equal(houses.reduce((n,o)=>n+o.userData.facadeDetails.windowPanes,0),64);
    assert.equal(houses.reduce((n,o)=>n+o.userData.facadeDetails.doorPanels,0),24);
    assert(houses.every(o=>o.userData.facadeDetails.doorway),'every house needs a framed entrance and threshold');
    assert.equal(houses.reduce((n,o)=>n+o.userData.facadeDetails.ridgeCaps,0),6);
    assert.equal(houses.reduce((n,o)=>n+o.userData.facadeDetails.eaveFascias,0),12);
    assert.equal(houses.reduce((n,o)=>n+o.userData.facadeDetails.hangingSigns,0),6);
    assert.equal(houses.reduce((n,o)=>n+o.userData.facadeDetails.signMarks,0),12);
    assert(houses.every(o=>o.userData.facadeDetails.signClearance),'street signs must stay above walking height');
    const villageBuildings=scene.getObjectByName('village-buildings');
    assert.deepEqual(villageBuildings.userData.batchDetails,{sourceHouses:6,sourceBatches:78,materialBatches:23});
    assert.equal(villageBuildings.userData.cameraBlocker,true,'the merged facades, not the emptied source houses, must block the third-person camera');
    assert.equal(villageBuildings.children.length,villageBuildings.userData.batchDetails.materialBatches);
    assert(villageBuildings.children.every(o=>o.geometry.boundingSphere&&o.frustumCulled),'street-wide facade batches must remain cullable');
    assert.equal(villageBuildings.children.reduce((n,o)=>n+o.geometry.index.count/3,0),32640,'facade batching must preserve every triangle');
    const frontHouse=VILLAGE[0],facadeRay=new T.Raycaster(
      new T.Vector3(frontHouse.x/C.SCALE,C.ground(frontHouse.x,frontHouse.z)+1.5,(frontHouse.z+frontHouse.d)/C.SCALE),
      new T.Vector3(0,0,-1),0,frontHouse.d/C.SCALE*1.5);
    assert(facadeRay.intersectObject(villageBuildings,true).length,'the camera ray must hit the merged street geometry');
    const curbs=[];scene.traverse(o=>{if(o.name==='village-curb')curbs.push(o);});
    assert.equal(curbs.length,2,'curbs belong on the two village streets, not the jungle trail');
    assert(curbs.every(o=>o.isInstancedMesh&&o.count>20&&o.boundingSphere),'curb stones must stay batched and cullable');
    const lampPosts=scene.getObjectByName('village-lamp-posts'),lampGlobes=scene.getObjectByName('village-lamp-globes');
    assert(lampPosts.isInstancedMesh&&lampGlobes.isInstancedMesh&&lampPosts.count===7&&lampGlobes.count===7);
    assert(lampPosts.boundingSphere&&lampGlobes.boundingSphere&&lampPosts.frustumCulled&&lampGlobes.frustumCulled);
    assert(lampGlobes.material.emissiveIntensity>0&&!scene.children.some(o=>o.isPointLight),'street lamps must not add seven shadowed lights');
    const laundry=scene.getObjectByName('village-overhead-laundry');
    assert.deepEqual(laundry.userData.laundryDetails,{lines:4,garments:12,clearance:true});
    assert(laundry.children.length<=5,'street laundry must remain merged by material');
    assert(laundry.children.every(o=>{o.geometry.computeBoundingBox();return o.geometry.boundingBox.min.y>3;}),'street laundry must stay above walking height');
    const market=scene.getObjectByName('harbor-market');
    assert.deepEqual(market.userData.marketDetails,{canopyStripes:6,valances:6,produce:15});
    assert(market.children.length<10,'market fabric and produce must remain merged by material');
    const pump=scene.getObjectByName('harbor-fuel-pump');
    assert.deepEqual(pump.userData.fuelDetails,{display:true,hose:true,nozzle:true,marker:true});
    assert(pump.children.length<10,'fuel-pump details must remain merged by material');
    const caveEntrance=scene.getObjectByName('campaign-cave-entrance');
    assert.deepEqual(caveEntrance.userData.entranceDetails,{archStones:12,torches:2,clearOpening:true});
    for(const [name,count] of [['cave-entrance-rocks',12],['cave-entrance-torches',2],['cave-entrance-flames',2]]){
      const batch=scene.getObjectByName(name);assert(batch.isInstancedMesh,`${name} must be instanced`);assert.equal(batch.count,count);assert(batch.boundingSphere,`${name} must have a culling sphere`);
    }
    assert(scene.getObjectByName('cave-entrance-flames').material.emissiveIntensity>1,'cave flames must remain visibly emissive without extra lights');
    const supplyPoints={jungle:C.points.supply,...Object.fromEntries(C.ISLANDS.filter(i=>['paradise','smugglers','highlands'].includes(i.id)).map(i=>[i.id,i]))};
    for(const id of ['jungle','paradise','smugglers','highlands']){
      const cache=scene.getObjectByName('campaign-supply-cache-'+id);
      assert.deepEqual(cache.userData.supplyDetails,{crate:true,fuelCan:true,medkit:true,ammoBox:true});
      assert(cache.children.length<=6,'supply cache materials must remain merged: '+id);
      assert(Math.abs(cache.position.x-supplyPoints[id].x/C.SCALE)<1e-6&&Math.abs(cache.position.z-supplyPoints[id].z/C.SCALE)<1e-6,'supply cache must remain on its interaction marker: '+id);
    }
    const estate=scene.getObjectByName('guarded-estate');
    assert.deepEqual(estate.userData.estateDetails,{planters:2,lanterns:2,crest:true});
    assert(estate.children.length<16,'estate facade and garden details must remain merged by material');
    const cave=scene.getObjectByName('cave'),caveFormations=scene.getObjectByName('cave-formations');
    assert.deepEqual(cave.userData.caveDetails,{stalactites:8,stalagmites:8,clearCenter:true});
    assert(caveFormations.isInstancedMesh&&caveFormations.count===16&&caveFormations.boundingSphere,'cave formations must stay in one cullable batch');
    const evidenceTable=scene.getObjectByName('cave-evidence-table');
    assert.deepEqual(evidenceTable.userData.evidenceDetails,{legs:4,drawer:true,lantern:true,newspaper:true,hiddenGun:true});
    assert(evidenceTable.children.length<=4,'cave table and lantern must remain merged by material');
    assert(evidenceTable.children.some(o=>o.material.emissiveIntensity>1),'cave evidence needs an emissive lantern without another point light');
    assert.deepEqual(scene.getObjectByName('cave-newspaper').position.toArray(),[0,.83,-2]);
    assert.deepEqual(scene.getObjectByName('cave-hidden-gun').position.toArray(),[0,.87,-2]);
    const estateInterior=scene.getObjectByName('estate'),estateDetails=scene.getObjectByName('estate-interior-details');
    for(const name of ['cave','estate','cellar']){
      const interior=scene.getObjectByName(name),walls=scene.getObjectByName(name+'-walls');
      assert.deepEqual(interior.userData.shellDetails,{sourceMeshes:5,renderMeshes:3});
      assert.equal(walls.children.length,1,`${name} walls must use one material batch instead of three meshes`);
    }
    const estateFixtures=scene.getObjectByName('estate-fixtures');
    assert.deepEqual(estateFixtures.userData.batchDetails,{sourceMeshes:8,renderMeshes:3});
    assert.equal(estateFixtures.children.length,3,'estate desk, carpet and six steps must use three material batches instead of eight meshes');
    assert.deepEqual(estateInterior.userData.interiorDetails,{portraits:3,sconces:2,documents:3,deskLamp:true});
    assert(estateDetails.children.length<10,'boss office wall and desk details must remain merged by material');
    const cellar=scene.getObjectByName('cellar'),cellarStatic=scene.getObjectByName('cellar-static');
    assert.deepEqual(cellar.userData.cellarDetails,{cells:5,hinges:10,padlocks:5,lamps:3,bedding:5});
    assert(cellarStatic.children.length<10,'cell bedding and wall lamps must remain merged by material');
    const cellDoors=Array.from({length:5},(_,id)=>scene.getObjectByName('cell-door-'+id));
    assert(cellDoors.every(o=>o?.children.length===3),'each independently opening cell door must merge its bars, hinges and padlock by material');
    assert.equal(cellDoors.reduce((sum,o)=>sum+o.children.length,0),15,'five cell doors must use 15 meshes instead of 55');
    const residentProfiles=[{child:false,style:0,scale:1.02},{child:false,style:1,scale:.96},{child:false,style:2,scale:1},{child:true,style:1,scale:.72},{child:true,style:2,scale:.76}];
    for(const [id,profile] of residentProfiles.entries()){
      const resident=scene.getObjectByName('campaign-prisoner-'+id);assert.deepEqual(resident.userData.residentProfile,profile);
      assert.deepEqual(resident.userData.renderProfile,{hairVariants:1,unusedToolMeshes:0});
      assert.equal(resident.scale.x,profile.scale);assert.equal(resident.scale.y,profile.scale);assert.equal(resident.scale.z,profile.scale);
      assert.equal([0,1,2].filter(style=>scene.getObjectByName(`campaign-prisoner-${id}-hair-${style}`)).join(','),String(profile.style));
    }
    const guardProfiles={gate:{boss:false,style:0},patrol:{boss:false,style:1},hall:{boss:false,style:2},boss:{boss:true,style:1,insignia:true}};
    for(const [id,profile] of Object.entries(guardProfiles)){
      const guard=scene.getObjectByName('campaign-guard-'+id);assert.deepEqual(guard.userData.guardProfile,profile);
      assert.deepEqual(guard.userData.renderProfile,{hairVariants:1,unusedToolMeshes:0});
      assert.equal([0,1,2].filter(style=>scene.getObjectByName(`campaign-guard-${id}-hair-${style}`)).join(','),String(profile.style));
    }
    const campaignPeople=['campaign-player',...Object.keys(guardProfiles).map(id=>'campaign-guard-'+id),...residentProfiles.map((_,id)=>'campaign-prisoner-'+id)].map(name=>scene.getObjectByName(name));
    assert.deepEqual(campaignPeople[0].userData.renderProfile,{hairVariants:1,unusedToolMeshes:0});
    let campaignPersonMeshes=0,sourcePersonMeshes=0,rigidBatches=0;
    campaignPeople.forEach(root=>{root.traverse(o=>{if(o.isMesh)campaignPersonMeshes++});sourcePersonMeshes+=root.userData.rigidBatchProfile.sourceMeshes;rigidBatches+=root.userData.rigidBatchProfile.batches});
    assert.equal(sourcePersonMeshes,507,'campaign-only people must not rebuild 260 unused hair and tool meshes');
    assert.equal(campaignPersonMeshes,251,'rigid character parts must stay batched inside their animated body groups');
    assert.equal(rigidBatches,128,'campaign character batching must preserve each articulated body group');
    assert(campaignPeople.every(root=>root.userData.rigidBatchProfile.animatedShoes===2),'walking shoes must remain independently animated');
    const bossInsignia=scene.getObjectByName('campaign-boss-insignia');
    assert(bossInsignia&&bossInsignia.children.length===3,'boss needs two gold shoulder tabs and a red sash');
    assert(scene.getObjectByName('grove-trunks').isInstancedMesh);assert(scene.getObjectByName('grove-fronds').isInstancedMesh);
    const treeBatches=[],frondBatches=[],rockBatches=[];scene.traverse(o=>{if(o.name.startsWith('grove-trunks'))treeBatches.push(o);if(o.name.startsWith('grove-fronds'))frondBatches.push(o);if(o.name.startsWith('shore-rocks'))rockBatches.push(o);});
    assert.equal(treeBatches.length,C.ISLANDS.length*4);assert.equal(frondBatches.length,C.ISLANDS.length*4);assert.equal(rockBatches.length,C.ISLANDS.length);
    assert([...treeBatches,...frondBatches].every(o=>o.userData.cullingRegion?.sector>=1&&o.userData.cullingRegion.sector<=4),'palm batches need spatial culling regions');
    assert.equal(treeBatches[0].userData.lod.high.index.count/3,112,'near curved palm trunks must retain the six-ring topology');
    assert.equal(treeBatches[0].userData.lod.low.index.count/3,48,'fogged palm trunks must use the three-ring topology');
    assert.equal(frondBatches[0].userData.lod.high.index.count/3,396,'near palm crowns must retain the twelve-step topology');
    assert.equal(frondBatches[0].userData.lod.low.index.count/3,216,'fogged palm crowns must use the seven-step topology');
    const palmCount=treeBatches.reduce((n,o)=>n+o.count,0),palmTriangles=palmCount*(112+396),previousPalmTriangles=palmCount*(180+468);
    assert.equal(palmCount,3974,'spatial culling must preserve every palm');
    assert(treeBatches.every(o=>o.castShadow),'every palm trunk must still cast its silhouette');
    assert(frondBatches.every(o=>o.castShadow&&!o.receiveShadow),'palm crowns must cast silhouettes without sampling the shadow map');
    assert.equal(frondBatches.reduce((n,o)=>n+o.count*o.userData.lod.high.index.count/3,0),1573704,'near palm topology must preserve every crown');
    assert(view.stats().lowDetailPalmBatches>0&&view.stats().lowDetailPalmBatches<frondBatches.length,
      'fogged palm sectors must use distant topology while the player vicinity stays detailed');
    assert.equal(view.stats().palmLodDistanceChecks,48,'LOD must cover every trunk and crown batch without changing spatial coverage');
    assert(view.stats().palmCrownTriangles<1573704,'distant palm LOD must reduce the currently submitted crown triangles');
    assert(view.stats().palmTrunkTriangles<palmCount*112,'distant palm LOD must reduce the currently submitted trunk triangles');
    assert(treeBatches.some(o=>o.userData.lod.level==='high'&&o.receiveShadow),'near palm trunks must still receive local shadows');
    assert(treeBatches.filter(o=>o.userData.lod.level==='low').every(o=>!o.receiveShadow),'fogged palm trunks must skip shadow-map sampling');
    assert(view.stats().unshadowedPalmTrunkTriangles>0,'campaign stats must expose the trunk triangles that skip shadow-map sampling');
    assert(Math.max(...treeBatches.map(o=>o.count))<500,'no palm culling region may still span an entire island population');
    assert(palmTriangles/previousPalmTriangles<.79,'palm topology must retain at least a 21% triangle reduction');
    assert([...treeBatches,...rockBatches].every(o=>o.frustumCulled&&o.boundingSphere),'separate island scenery must remain eligible for camera and shadow culling');
    const scales=(batch,limit=20)=>{const matrix=new T.Matrix4(),scale=new T.Vector3(),position=new T.Vector3(),rotation=new T.Quaternion(),values=[];
      for(let j=0;j<Math.min(batch.count,limit);j++){batch.getMatrixAt(j,matrix);matrix.decompose(position,rotation,scale);values.push(scale.toArray().map(v=>v.toFixed(3)).join(','));}return new Set(values).size;};
    assert(scales(treeBatches[0])>12,'palms need varied silhouettes rather than repeating modulo sizes');
    assert(scales(rockBatches[0])>12,'shore rocks need varied proportions rather than repeating modulo sizes');
    const oceanMaterial=scene.getObjectByName('tropical-ocean').material;
    assert(oceanMaterial.uniforms.uCoasts.value.length===9);
    assert.equal(oceanMaterial.userData.fragmentNoiseLayers,7,'water normals and colour should use seven noise layers rather than sixteen');
    assert.equal((oceanMaterial.fragmentShader.match(/fbm21\(/g)||[]).length,2,'ocean shader must keep one runtime FBM call plus its definition');
    const terrainMeshes=C.ISLANDS.map(i=>scene.getObjectByName('archipelago-'+i.id));
    assert.deepEqual(terrainMeshes.map(o=>o.userData.terrainSegments),[192,96,80,96,80,88],'terrain density must follow physical island size');
    assert.equal(terrainMeshes.reduce((n,o)=>n+o.geometry.index.count/3,0),75208,'adaptive island meshes must remove oversampling');
    assert(terrainMeshes.every(o=>o.material.userData.fragmentNoiseLayers===3),'every island surface must use the three-layer terrain shader');
    assert.equal(view.stats().terrainTriangles,75208);
    assert.equal(view.stats().shadowReceivingTerrains,1,'only the terrain beside the starting boat should sample the local shadow map');
    state.interior='cave';state.boat=false;state.p={x:0,z:115};state.walking=false;view.frame(500);
    assert.equal(view.stats().shadowReceivingTerrains,0,'hidden exterior terrain must not keep a shadow-receiving shader inside rooms');
    const stationaryPoseUpdates=view.stats().poseUpdates;view.frame(517);
    assert.equal(view.stats().poseUpdates,stationaryPoseUpdates,'an unchanged idle campaign character must not rewrite its body pose');
    const sky=scene.getObjectByName('tropical-sky');view.frame(4321);
    assert.equal(sky.material.uniforms.uTime.value,0,'hidden exterior shaders must stay idle inside the cave');
    state.interior=null;state.boat=true;state.p={...C.docks.home};view.frame(4338);
    assert.equal(sky.material.uniforms.uTime.value,4.338,'procedural clouds must resume at current campaign time outdoors');
    assert.equal(sky.material.userData.fragmentNoiseLayers,3,'sky clouds must use three noise layers rather than four');
    assert.match(sky.material.fragmentShader,/for\(int i=0;i<3;i\+\+\)/,'sky FBM must compile exactly three octaves');
    for(const d of Object.values(C.docks)){
      const deck=scene.getObjectByName('pier-deck-'+d.id),land=scene.getObjectByName('archipelago-'+d.id);
      const pilings=scene.getObjectByName('pier-pilings-'+d.id),bollards=scene.getObjectByName('pier-bollards-'+d.id);
      assert(pilings.isInstancedMesh&&pilings.count===8&&pilings.boundingSphere,'pier supports must stay in one cullable batch: '+d.id);
      assert(bollards.isInstancedMesh&&bollards.count===8&&bollards.boundingSphere,'four two-piece mooring bollards must stay batched: '+d.id);
      for(let j=0;j<=20;j++){
        const x=(d.land.x+(d.end.x-d.land.x)*j/20)/C.SCALE,z=(d.land.z+(d.end.z-d.land.z)*j/20)/C.SCALE;
        const ray=new T.Raycaster(new T.Vector3(x,30,z),new T.Vector3(0,-1,0));
        const hit=ray.intersectObject(deck)[0];
        assert(hit&&Math.abs(hit.point.y-C.ground(x*C.SCALE,z*C.SCALE))<.015,'rendered pier disagrees with foot height: '+d.id);
        if(j===0){const beach=ray.intersectObject(land)[0];assert(beach&&Math.abs(beach.point.y-hit.point.y)<.18,'pier does not connect to beach: '+d.id);}
      }
    }
    for(const mode of ['third','first']){
      view.setCamera(mode);
      for(const area of [null,'cave','estate','cellar']){
        state.interior=area;state.boat=!area;state.p=area?{x:0,z:115}:{...C.docks.home};view.frame(1000);view.frame(1017);
        const expectedPoses=mode==='first'?{null:0,cave:0,estate:0,cellar:5}:{null:0,cave:1,estate:1,cellar:6};
        assert.equal(view.stats().posedCharacters,expectedPoses[area],`hidden character poses still run in ${mode}/${area||'boat'} mode`);
        assert(camera.isPerspectiveCamera);assert(camera.position.toArray().every(Number.isFinite));
        const rooms=scene.getObjectByName('cellar').parent;
        for(const room of rooms.children)assert.equal(room.visible,room.name===area);
        if(mode==='first')assert(Math.abs(camera.position.y-(area?1.64:1.67))<.001);
        let visibleMeshes=0;scene.traverseVisible(o=>{if(!o.isMesh)return;visibleMeshes++;assert(o.position.toArray().every(Number.isFinite));const p=o.geometry.attributes.position;assert(p&&p.count>0);});
        assert(visibleMeshes>0,'empty scene in '+mode+'/'+area);
        if(area){
          const floor=scene.getObjectByName(area).children[0];
          const ray=new T.Raycaster(new T.Vector3(state.p.x/C.SCALE,5,state.p.z/C.SCALE),new T.Vector3(0,-1,0));
          const hit=ray.intersectObject(floor)[0];assert(hit&&Math.abs(hit.point.y)<.001,'missing floor below the player');
        }
      }
    }
    state.interior=null;state.boat=false;state.island='fortress';state.p={...C.docks.fortress};view.frame(1500);
    assert.equal(view.stats().posedCharacters,2,'first person should pose only the two visible outdoor guards');
    assert.equal(view.stats().movingGuards,0,'nearby stationary guards must not march in place');
    state.guards.find(g=>!g.area).x+=1;view.frame(1508);
    assert.equal(view.stats().movingGuards,1,'a guard that actually advances must animate its walk');
    view.frame(1510);assert.equal(view.stats().movingGuards,0,'the walk must stop as soon as the guard position stops changing');
    const exteriorGuards=state.guards.filter(g=>!g.area),exteriorHp=exteriorGuards.map(g=>g.hp);
    exteriorGuards.forEach(g=>g.hp=0);view.frame(1511);
    const fallenHeights=exteriorGuards.map(g=>scene.getObjectByName('campaign-guard-'+g.id).position.y);
    const fallenPoseUpdates=view.stats().poseUpdates;view.frame(1512);
    assert.equal(view.stats().poseUpdates,fallenPoseUpdates,'unchanged defeated guards must reuse their fallen body poses');
    assert.deepEqual(exteriorGuards.map(g=>scene.getObjectByName('campaign-guard-'+g.id).position.y),fallenHeights,'cached fallen guards must not rise above the terrain every frame');
    exteriorGuards.forEach((g,index)=>g.hp=exteriorHp[index]);view.frame(1513);
    const stationaryTerrainSamples=view.stats().terrainHeightSamples;view.frame(1517);
    assert.equal(view.stats().terrainHeightSamples,stationaryTerrainSamples,'stationary exterior guards and objective must reuse terrain samples');
    const stationaryGoalSelections=view.stats().goalSelections;view.frame(1521);
    assert.equal(view.stats().goalSelections,stationaryGoalSelections,'an unchanged campaign frame must reuse its objective selection');
    const stationaryNearbySelections=view.stats().nearbySelections;view.frame(1525);
    assert.equal(view.stats().nearbySelections,stationaryNearbySelections,'an unchanged campaign frame must reuse its nearby interaction selection');
    state.p.x+=1;view.frame(1526);
    assert.equal(view.stats().goalSelections,stationaryGoalSelections+1,'player movement must refresh pier-aware objective selection immediately');
    assert.equal(view.stats().nearbySelections,stationaryNearbySelections+1,'player movement must refresh nearby interaction selection immediately');
    state.released=C.PEOPLE.map(p=>p.id);state.walking=false;view.frame(1534);
    assert.equal(view.stats().posedCharacters,7,'first-person fortress escort should add five people without posing the hidden player');
    const stationaryEscortSamples=view.stats().terrainHeightSamples;view.frame(1551);
    assert.equal(view.stats().terrainHeightSamples,stationaryEscortSamples,'a stationary five-person escort must reuse terrain samples');
    state.released=[];view.setCamera('third');view.frame(1568);
    const stationaryPlayerCameraSamples=view.stats().terrainHeightSamples,stationaryCameraRaycasts=view.stats().cameraRaycasts;view.frame(1585);
    assert.equal(view.stats().terrainHeightSamples,stationaryPlayerCameraSamples,'a stationary player and chase camera must reuse terrain samples');
    assert.equal(view.stats().cameraRaycasts,stationaryCameraRaycasts,'an unchanged chase camera must reuse its static-scenery collision result');
    state.p.x+=1;view.frame(1602);
    assert.equal(view.stats().terrainHeightSamples,stationaryPlayerCameraSamples+2,'player movement must refresh player and chase-camera ground contact');
    assert.equal(view.stats().cameraRaycasts,stationaryCameraRaycasts+1,'player movement must refresh chase-camera collision immediately');
    state.released=C.PEOPLE.map(p=>p.id);
    state.interior='cellar';state.boat=false;state.key=state.paper=state.gun=true;
    state.walking=true;
    state.guards.forEach(g=>g.hp=0);view.frame(2000);
    assert.equal(Array.from({length:5},(_,id)=>scene.getObjectByName('cell-door-'+id)).every(g=>!g.visible),true);
    assert(Number.isFinite(view.aim()));assert(view.vector(0,-1).x!==undefined);
    assert.equal(view.stats().cameraBlockers,2,'camera collision must use only the static village and estate blockers');
    assert.deepEqual({palmBatches:view.stats().palmBatches,largestPalmBatch:view.stats().largestPalmBatch},{palmBatches:24,largestPalmBatch:373});
    assert.equal(renderer.shadowMap.autoUpdate,false,'the 2048px campaign shadow map must not render unconditionally');
    state.walking=false;const stationaryShadow=view.stats().shadowUpdates;view.frame(3000);
    assert.equal(view.stats().shadowUpdates,stationaryShadow+1,'stopping animation must refresh shadows once');
    view.frame(3010);assert.equal(view.stats().shadowUpdates,stationaryShadow+1,'an unchanged frame must reuse its shadow map');
    state.walking=true;view.frame(3020);assert.equal(view.stats().shadowUpdates,stationaryShadow+2,'starting movement must refresh shadows immediately');
    view.frame(3030);assert.equal(view.stats().shadowUpdates,stationaryShadow+2,'moving shadows must be capped below 30 Hz');
    view.frame(3055);assert.equal(view.stats().shadowUpdates,stationaryShadow+3,'moving shadows must refresh after the 30 Hz interval');
    state.walking=false;state.paused=true;const beforePauseRenders=renderCalls;view.frame(3100);view.frame(3117);
    assert.equal(renderCalls,beforePauseRenders+1,'a static pause screen must render once instead of consuming GPU every frame');
    view.resize();view.frame(3134);assert.equal(renderCalls,beforePauseRenders+2,'resizing must redraw a paused campaign once');
    view.setCamera('first');view.frame(3151);assert.equal(renderCalls,beforePauseRenders+3,'changing camera must redraw a paused campaign once');
    state.paused=false;view.frame(3168);assert.equal(renderCalls,beforePauseRenders+4,'resuming must render immediately');
    const before=camera.position.clone();view.setEnabled(false);state.p.x=80;view.frame(2100);assert(camera.position.equals(before));
  }finally{
    view?.dispose();assert(disposed);dom.window.close();
    for(const [key,value] of Object.entries(previous)){if(value===undefined)delete globalThis[key];else globalThis[key]=value;}
    T.Cache.clear();
  }
});
