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
    assert(scene.getObjectByName('grove-trunks').isInstancedMesh);assert(scene.getObjectByName('grove-fronds').isInstancedMesh);
    assert(scene.getObjectByName('tropical-ocean').material.uniforms.uCoasts.value.length===9);
    for(const mode of ['third','first']){
      view.setCamera(mode);
      for(const area of [null,'cave','estate','cellar']){
        state.interior=area;state.boat=!area;state.p=area?{x:0,z:115}:{...C.docks.home};view.frame(1000);view.frame(1017);
        assert(camera.isPerspectiveCamera);assert(camera.position.toArray().every(Number.isFinite));
        const rooms=scene.getObjectByName('cellar').parent;
        for(const room of rooms.children)assert.equal(room.visible,room.name===area);
        if(mode==='first')assert(Math.abs(camera.position.y-(area?1.64:2.39))<.001);
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
    assert.equal(scene.getObjectByName('cellar').children.filter(g=>g.isGroup&&g.children.length===7&&g.position.z===-1.5).every(g=>!g.visible),true);
    assert(Number.isFinite(view.aim()));assert(view.vector(0,-1).x!==undefined);
    const before=camera.position.clone();view.setEnabled(false);state.p.x=80;view.frame(2100);assert(camera.position.equals(before));
  }finally{
    view?.dispose();assert(disposed);dom.window.close();
    for(const [key,value] of Object.entries(previous)){if(value===undefined)delete globalThis[key];else globalThis[key]=value;}
    T.Cache.clear();
  }
});
