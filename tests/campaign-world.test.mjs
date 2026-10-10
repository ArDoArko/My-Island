import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import * as C from '../campaign.mjs';
import { ISLANDS as original } from '../archipelago-layout.mjs';
import { VILLAGE,pierAt,villageAnchor } from '../campaign-world.mjs';
import { createIslandTerrain } from '../archipelago-terrain.mjs';
import { buildMotorboat,seatDriver } from '../campaign-boat.mjs';
import { buildHuman } from '../island3d-src.mjs';

test('campaign terrain is hundreds of metres across with unscaled houses and a separate legacy world',()=>{
  assert.equal(original[0].radius,480);
  for(const i of C.ISLANDS){
    const land=createIslandTerrain(i,{segments:96});land.geometry.computeBoundingBox();
    const size=land.geometry.boundingBox.getSize(new T.Vector3()).divideScalar(C.SCALE);
    assert(size.x>250&&size.z>250,'island stayed a miniature: '+i.id);
    if(i.id==='home')assert(size.x>650&&size.z>650);
    land.geometry.dispose();land.material.dispose();
    for(const other of C.ISLANDS)if(other!==i)assert(C.dist(i,other)>i.radius+other.radius);
  }
  assert(VILLAGE.every(b=>b.w/C.SCALE<=5.5&&b.h<=5.8));
});

test('all six piers can be walked from the dry beach to the boat without stepping into water',()=>{
  const s=C.fresh();s.boat=false;
  for(const d of Object.values(C.docks)){
    s.island=d.id;
    for(let j=0;j<=100;j++){
      const p={x:d.land.x+(d.end.x-d.land.x)*j/100,z:d.land.z+(d.end.z-d.land.z)*j/100};
      assert(C.allowed(s,p),'missing walkable pier on '+d.id);
      assert(pierAt(p.x,p.z,d.id));assert(C.ground(p.x,p.z)>.3);
    }
    assert(C.allowed({...s,boat:true},d),'boat mooring ended on dry land');
    s.p={...d.shore};assert(C.interact(s));assert(s.boat);
    assert(C.interact(s));assert(!s.boat);s.boat=false;
  }
});

test('0.19/0.20 campaign saves migrate once and preserve every mission stage and resource',()=>{
  const cases=[
    {boat:true,island:'home',boatAt:'home',p:{x:673,z:196}},
    {boat:false,island:'home',boatAt:'home',p:{x:330,z:65},docked:true,tanked:true},
    {boat:false,island:'jungle',boatAt:'jungle',p:{x:1080,z:-390},docked:true,tanked:true,paper:true,gun:true},
    {boat:false,island:'fortress',boatAt:'fortress',p:{x:1785,z:695},paper:true,gun:true,key:true,released:[0,2]},
    {boat:false,island:'fortress',boatAt:'fortress',interior:'cellar',p:{x:0,z:120},paper:true,gun:true,key:true,released:[0,1,2,3,4]},
    {boat:true,island:'home',boatAt:'home',p:{x:493,z:126},paper:true,gun:true,key:true,boarded:true,complete:true,released:[0,1,2,3,4]}
  ];
  for(const input of cases){
    const old={version:1,fuel:73,hp:87,ammo:31,elapsed:812,guards:[{id:'boss',area:'estate',x:0,z:-60,hp:0}],...input};
    const s=C.restore(old);assert(C.allowed(s,s.p));assert.equal(s.fuel,73);assert.equal(s.hp,87);assert.equal(s.elapsed,812);
    assert.equal(s.ammo,input.gun?31:0);assert.equal(s.guards.find(g=>g.id==='boss').hp,0);
    for(const k of ['docked','tanked','paper','gun','key','boarded','complete'])assert.equal(s[k],!!old[k]);
    assert.deepEqual(s.released,old.released||[]);assert.equal(s.worldVersion,2);
    assert.deepEqual(C.snapshot(C.restore(C.snapshot(s))),C.snapshot(s),'position migrated twice');
    if(input.island==='home'&&!input.boat)assert(C.dist(s.p,{x:villageAnchor.x+330,z:villageAnchor.z+65})<.001);
  }
});

test('the actual human pelvis rests on the seat and both boots rest on the deck under yaw and roll',()=>{
  const root=new T.Group(),materials=new Map(),geometries=new Map();
  const mat=c=>{if(!materials.has(c))materials.set(c,new T.MeshStandardMaterial({color:c}));return materials.get(c);};
  const mesh=(parent,g,c,p,s)=>{const o=new T.Mesh(g,mat(c));o.position.set(...p);o.scale.set(...s);parent.add(o);return o;};
  const cube=(parent,c,p,s)=>mesh(parent,new T.BoxGeometry(),c,p,s);
  const ell=(parent,c,p,s)=>mesh(parent,new T.SphereGeometry(1,16,12),c,p,s);
  const {boat}=buildMotorboat(root,{cube,ell,mat}),person=buildHuman();
  const localBounds=o=>{
    const matrix=new T.Matrix4().copy(boat.matrixWorld).invert().multiply(o.matrixWorld);
    const p=o.geometry.attributes.position,box=new T.Box3(),point=new T.Vector3();
    for(let j=0;j<p.count;j++)box.expandByPoint(point.fromBufferAttribute(p,j).applyMatrix4(matrix));
    return box;
  };
  try{
    for(const yaw of [0,Math.PI/2,Math.PI])for(const roll of [-.015,0,.015]){
      boat.position.set(19,.02,-11);boat.rotation.set(0,yaw,roll);seatDriver(person,boat);root.updateMatrixWorld(true);
      assert.equal(person.root.parent,boat);
      const pelvis=localBounds(person.hips.children[0]),seat=localBounds(boat.getObjectByName('boat-seat'));
      assert(Math.abs(pelvis.min.y-seat.max.y)<.005,'driver is suspended above the seat');
      assert(Math.abs(pelvis.getCenter(new T.Vector3()).z-seat.getCenter(new T.Vector3()).z)<.005);
      const deck=localBounds(boat.getObjectByName('boat-deck'));
      for(const leg of person.legs){
        const boot=localBounds(leg.shoe);assert(Math.abs(boot.min.y-deck.max.y)<.025,'feet lost contact with the deck');
        assert(boot.min.z>=deck.min.z&&boot.max.z<=deck.max.z);
      }
      const wheel=boat.getObjectByName('boat-wheel');
      for(const arm of person.arms){
        const hand=arm.forearm.children.at(-1),point=wheel.worldToLocal(hand.getWorldPosition(new T.Vector3()));
        assert(Math.abs(Math.hypot(point.x,point.y)-.20)<.065&&Math.abs(point.z)<.08,'hands miss the helm');
      }
    }
  }finally{
    root.traverse(o=>{if(o.geometry)geometries.set(o.geometry,true);if(o.material)materials.set(o.material,true);});
    for(const g of geometries.keys())g.dispose();for(const m of materials.keys())if(typeof m!=='string')m.dispose();
  }
});
