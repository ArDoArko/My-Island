import test from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import * as T from 'three';
import { buildHuman } from '../island3d-src.mjs';
import { createCampaignView } from '../campaign-view.mjs';
import * as C from '../campaign.mjs';

test('real Three.js campaign geometry and both cameras run through every mission area without GPU rendering',()=>{
  const dom=new JSDOM('<canvas></canvas>');
  const previous=Object.fromEntries(['document','innerWidth','innerHeight','devicePixelRatio'].map(k=>[k,globalThis[k]]));
  globalThis.document=dom.window.document;globalThis.innerWidth=900;globalThis.innerHeight=600;globalThis.devicePixelRatio=1;
  dom.window.HTMLCanvasElement.prototype.getContext=()=>new Proxy({}, {get:()=>()=>{}});
  let scene,camera,disposed=false;
  const renderer={capabilities:{getMaxAnisotropy:()=>1},shadowMap:{},info:{render:{calls:0,triangles:0}},
    setPixelRatio(){},setSize(){},render(s,c){scene=s;camera=c;s.updateMatrixWorld(true);c.updateMatrixWorld(true)},dispose(){disposed=true}};
  const state=C.fresh();let view;
  try{
    view=createCampaignView({canvas:document.querySelector('canvas'),getState:()=>state,makeHuman:buildHuman,rendererFactory:()=>renderer});
    assert.equal(view.cameraMode,'first');view.frame(0);
    const houses=[];scene.traverse(o=>{if(o.name==='village-house')houses.push(o);});assert.equal(houses.length,6);
    assert(houses.reduce((n,o)=>n+o.children.length,0)<100,'facade details were not batched for mobile');
    assert.equal(houses.reduce((n,o)=>n+o.userData.facadeDetails.planters,0),12);
    assert.equal(houses.reduce((n,o)=>n+o.userData.facadeDetails.awnings,0),8);
    assert.equal(houses.filter(o=>o.userData.facadeDetails.balcony).length,2);
    assert.equal(houses.reduce((n,o)=>n+o.userData.facadeDetails.windowPanes,0),64);
    assert.equal(houses.reduce((n,o)=>n+o.userData.facadeDetails.doorPanels,0),24);
    assert(houses.every(o=>o.userData.facadeDetails.doorway),'every house needs a framed entrance and threshold');
    assert.equal(houses.reduce((n,o)=>n+o.userData.facadeDetails.ridgeCaps,0),6);
    assert.equal(houses.reduce((n,o)=>n+o.userData.facadeDetails.eaveFascias,0),12);
    const curbs=[];scene.traverse(o=>{if(o.name==='village-curb')curbs.push(o);});
    assert.equal(curbs.length,2,'curbs belong on the two village streets, not the jungle trail');
    assert(curbs.every(o=>o.isInstancedMesh&&o.count>20&&o.boundingSphere),'curb stones must stay batched and cullable');
    const lampPosts=scene.getObjectByName('village-lamp-posts'),lampGlobes=scene.getObjectByName('village-lamp-globes');
    assert(lampPosts.isInstancedMesh&&lampGlobes.isInstancedMesh&&lampPosts.count===7&&lampGlobes.count===7);
    assert(lampPosts.boundingSphere&&lampGlobes.boundingSphere&&lampPosts.frustumCulled&&lampGlobes.frustumCulled);
    assert(lampGlobes.material.emissiveIntensity>0&&!scene.children.some(o=>o.isPointLight),'street lamps must not add seven shadowed lights');
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
    assert.deepEqual(estateInterior.userData.interiorDetails,{portraits:3,sconces:2,documents:3,deskLamp:true});
    assert(estateDetails.children.length<10,'boss office wall and desk details must remain merged by material');
    const cellar=scene.getObjectByName('cellar'),cellarStatic=scene.getObjectByName('cellar-static');
    assert.deepEqual(cellar.userData.cellarDetails,{cells:5,hinges:10,padlocks:5,lamps:3,bedding:5});
    assert(cellarStatic.children.length<10,'cell bedding and wall lamps must remain merged by material');
    assert(Array.from({length:5},(_,id)=>scene.getObjectByName('cell-door-'+id)).every(o=>o?.children.length===11),'each prisoner needs a hinged, locked cell door');
    assert(scene.getObjectByName('grove-trunks').isInstancedMesh);assert(scene.getObjectByName('grove-fronds').isInstancedMesh);
    const treeBatches=[],frondBatches=[],rockBatches=[];scene.traverse(o=>{if(o.name.startsWith('grove-trunks'))treeBatches.push(o);if(o.name.startsWith('grove-fronds'))frondBatches.push(o);if(o.name.startsWith('shore-rocks'))rockBatches.push(o);});
    assert.equal(treeBatches.length,C.ISLANDS.length);assert.equal(frondBatches.length,C.ISLANDS.length);assert.equal(rockBatches.length,C.ISLANDS.length);
    assert([...treeBatches,...rockBatches].every(o=>o.frustumCulled&&o.boundingSphere),'separate island scenery must remain eligible for camera and shadow culling');
    const scales=(batch,limit=20)=>{const matrix=new T.Matrix4(),scale=new T.Vector3(),position=new T.Vector3(),rotation=new T.Quaternion(),values=[];
      for(let j=0;j<Math.min(batch.count,limit);j++){batch.getMatrixAt(j,matrix);matrix.decompose(position,rotation,scale);values.push(scale.toArray().map(v=>v.toFixed(3)).join(','));}return new Set(values).size;};
    assert(scales(treeBatches[0])>12,'palms need varied silhouettes rather than repeating modulo sizes');
    assert(scales(rockBatches[0])>12,'shore rocks need varied proportions rather than repeating modulo sizes');
    assert(scene.getObjectByName('tropical-ocean').material.uniforms.uCoasts.value.length===9);
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
    state.interior='cellar';state.boat=false;state.key=state.paper=state.gun=true;
    state.released=C.PEOPLE.map(p=>p.id);state.walking=true;
    state.guards.forEach(g=>g.hp=0);view.frame(2000);
    assert.equal(Array.from({length:5},(_,id)=>scene.getObjectByName('cell-door-'+id)).every(g=>!g.visible),true);
    assert(Number.isFinite(view.aim()));assert(view.vector(0,-1).x!==undefined);
    const before=camera.position.clone();view.setEnabled(false);state.p.x=80;view.frame(2100);assert(camera.position.equals(before));
  }finally{
    view?.dispose();assert(disposed);dom.window.close();
    for(const [key,value] of Object.entries(previous)){if(value===undefined)delete globalThis[key];else globalThis[key]=value;}
    T.Cache.clear();
  }
});
