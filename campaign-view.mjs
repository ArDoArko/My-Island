import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { ISLANDS,VILLAGE,PATHS,market,estateCenter,pathClear,terrainHeight,bounds } from './campaign-world.mjs';
import { buildMotorboat,seatDriver,HELM } from './campaign-boat.mjs';
import { createIslandTerrain } from './archipelago-terrain.mjs';
import { createMaterials, cameraPose, intersectRaycastInto, stabilizeSunShadow } from './island-environment.mjs';
import { createOcean, createTropicalSky, islandMaterial, decorateIslands, addVillage } from './tropical-scene.mjs';
import { sceneryBlocked } from './campaign-scenery.mjs';
import { SCALE, docks, points, PEOPLE, ground, goal, goalInto, candidatesInto, selectNearby } from './campaign.mjs';

export function attachSceneChild(parent,child){
  if(child.parent===parent)return false;
  parent.add(child);return true;
}

export function updateCampaignAreaPresentation(cache,area,world,rooms,roomEntries,scene,hemi,sun){
  if(cache.ready&&cache.area===area)return false;
  cache.ready=true;cache.area=area;world.visible=!area;rooms.visible=!!area;
  for(const [id,root] of roomEntries)root.visible=id===area;
  scene.background.set(area?'#202c29':'#b9dbe5');scene.fog.color.copy(scene.background);
  hemi.intensity=area?.65:2.0;sun.intensity=area?.15:2.8;return true;
}

export function updateCampaignExterior(area,seconds,camera,sky,ocean,vegetation){
  if(area)return false;
  sky.material.uniforms.uTime.value=seconds;
  vegetation.update(camera.position,.5);
  ocean.update(seconds,camera.position);sky.position.copy(camera.position);return true;
}

export function updateCampaignTerrainShadows(cache,area,point,islands,terrains,margin=800,minMovement=200){
  if(cache.ready&&cache.area===area){
    const dx=cache.x-point.x,dz=cache.z-point.z;
    if(dx*dx+dz*dz<minMovement*minMovement)return false;
  }
  cache.ready=true;cache.area=area;cache.x=point.x;cache.z=point.z;let changed=false,active=0;
  for(let i=0;i<terrains.length;i++){
    const island=islands[i],dx=point.x-island.x,dz=point.z-island.z,
      receive=!area&&dx*dx+dz*dz<=(island.radius+margin)**2;
    if(terrains[i].receiveShadow!==receive){terrains[i].receiveShadow=receive;changed=true;}
    if(receive)active++;
  }
  cache.active=active;return changed;
}

export function updateReleasedPresentation(cache,released,releasedMask,cellBars){
  const values=cache.values||(cache.values=[]);let changed=!cache.ready||values.length!==released.length;
  for(let i=0;i<released.length;i++)if(values[i]!==released[i])changed=true;
  if(!changed)return false;
  cache.ready=true;values.length=released.length;releasedMask.fill(0);
  for(let i=0;i<released.length;i++){const id=released[i];values[i]=id;releasedMask[id]=1;}
  for(let i=0;i<cellBars.length;i++)cellBars[i].visible=!releasedMask[i];
  return true;
}

export function updateCampaignNearby(cache,state,candidates){
  const released=state.released||[],values=cache.released||(cache.released=[]);
  let changed=!cache.ready||cache.x!==state.p.x||cache.z!==state.p.z||cache.area!==(state.interior||'')||
    cache.island!==state.island||cache.boat!==!!state.boat||cache.paper!==!!state.paper||cache.gun!==!!state.gun||
    cache.boarded!==!!state.boarded||values.length!==released.length;
  for(let i=0;i<released.length;i++)if(values[i]!==released[i])changed=true;
  if(!changed)return false;
  cache.ready=true;cache.x=state.p.x;cache.z=state.p.z;cache.area=state.interior||'';cache.island=state.island;
  cache.boat=!!state.boat;cache.paper=!!state.paper;cache.gun=!!state.gun;cache.boarded=!!state.boarded;
  values.length=released.length;for(let i=0;i<released.length;i++)values[i]=released[i];
  cache.nearby=selectNearby(candidatesInto(candidates,state),state.p);return true;
}

export function updateCampaignGoal(cache,state,out,bossAlive=!!state.guards?.find(guard=>guard.id==='boss'&&guard.hp>0)){
  const released=state.released||[],values=cache.released||(cache.released=[]);
  let changed=!cache.ready||cache.x!==state.p.x||cache.z!==state.p.z||cache.area!==(state.interior||'')||cache.island!==state.island||
    cache.boat!==!!state.boat||cache.complete!==!!state.complete||cache.docked!==!!state.docked||cache.tanked!==!!state.tanked||
    cache.paper!==!!state.paper||cache.gun!==!!state.gun||cache.key!==!!state.key||cache.boarded!==!!state.boarded||
    cache.bossAlive!==bossAlive||values.length!==released.length;
  for(let i=0;i<released.length;i++)if(values[i]!==released[i])changed=true;
  if(!changed)return false;
  cache.ready=true;cache.x=state.p.x;cache.z=state.p.z;cache.area=state.interior||'';cache.island=state.island;cache.boat=!!state.boat;
  cache.complete=!!state.complete;cache.docked=!!state.docked;cache.tanked=!!state.tanked;cache.paper=!!state.paper;cache.gun=!!state.gun;
  cache.key=!!state.key;cache.boarded=!!state.boarded;cache.bossAlive=bossAlive;
  values.length=released.length;for(let i=0;i<released.length;i++)values[i]=released[i];
  goalInto(out,state);return true;
}

export function updateCampaignAreaView(cache,area,player,target,yaw,pitch,defaultPitch,out){
  if(cache.ready&&cache.area===area){out.yaw=yaw;out.pitch=pitch;return false;}
  cache.ready=true;cache.area=area;
  out.yaw=area?0:target?Math.atan2(player.x-target.x,player.z-target.z):yaw;
  out.pitch=defaultPitch;return true;
}

export function updateCampaignShadowState(cache,state,animated=false){
  const area=state.interior||'',boat=!!state.boat,x=Math.round(state.p.x/20),z=Math.round(state.p.z/20),
    heading=Math.round(state.heading*12),boarded=!!state.boarded,guards=state.guards||[],released=state.released||[];
  let changed=!cache.ready||cache.area!==area||cache.island!==state.island||cache.boat!==boat||cache.x!==x||cache.z!==z||
    cache.heading!==heading||cache.boarded!==boarded||cache.animated!==animated||cache.guardCount!==guards.length||cache.releasedCount!==released.length;
  const guardState=cache.guards||(cache.guards=[]),releasedState=cache.released||(cache.released=[]);
  for(let i=0;i<guards.length;i++){const alive=guards[i].hp>0;if(guardState[i]!==alive)changed=true;guardState[i]=alive;}
  for(let i=0;i<released.length;i++){if(releasedState[i]!==released[i])changed=true;releasedState[i]=released[i];}
  guardState.length=guards.length;releasedState.length=released.length;
  cache.ready=true;cache.area=area;cache.island=state.island;cache.boat=boat;cache.x=x;cache.z=z;cache.heading=heading;
  cache.boarded=boarded;cache.animated=animated;cache.guardCount=guards.length;cache.releasedCount=released.length;
  return changed;
}

export function campaignShadowsAnimated(state,guardWalking=false,playerVisible=true){
  return !state.paused&&!!(guardWalking||(state.walking&&(state.boat||playerVisible)));
}

export function campaignShadowInterval(mobile=false){
  return 1000/(mobile?20:30);
}

export function updateEscortPoints(points,people,player,heading){
  const sin=Math.sin(heading),cos=Math.cos(heading);
  for(let i=0;i<people.length;i++){
    const person=people[i],point=points[i],back=35+person.id*15,side=person.id%2?16:-16;
    point.x=player.x-sin*back+cos*side;
    point.z=player.z-cos*back-sin*side;
  }
  return points;
}

export function updateLineSegment(position,a,b,y,scale=SCALE){
  position.setXYZ(0,a.x/scale,y,a.z/scale);position.setXYZ(1,b.x/scale,y,b.z/scale);position.needsUpdate=true;
  return position;
}

export function updateCampaignWalkCycle(out,seconds,walking){
  const phase=seconds*7;
  out.swing=Math.sin(phase);out.step=walking?.24:0;out.bounce=walking?Math.cos(phase*2):0;
  return out;
}

export function updateCampaignPoseState(cache,point,height,heading,walking,force=false,pose='standing'){
  const changed=force||walking||!cache.ready||cache.x!==point.x||cache.z!==point.z||cache.height!==height||cache.heading!==heading||cache.walking!==walking||cache.pose!==pose;
  cache.ready=true;cache.x=point.x;cache.z=point.z;cache.height=height;cache.heading=heading;cache.walking=walking;cache.pose=pose;
  return changed;
}

export function updateCampaignMovement(cache,point,active=true){
  const moving=!!(active&&cache.ready&&(cache.x!==point.x||cache.z!==point.z));
  cache.ready=true;cache.x=point.x;cache.z=point.z;return moving;
}

export function updateCampaignGuardHeading(cache,heading,active=true){
  if(active||!cache.headingReady){cache.headingReady=true;cache.heading=heading;}
  return cache.heading;
}

export function sampleCampaignGround(cache,key,x,z,sample){
  let entry=cache.get(key);
  if(entry&&entry.x===x&&entry.z===z)return entry.height;
  if(!entry){entry={x:0,z:0,height:0};cache.set(key,entry);}
  entry.x=x;entry.z=z;entry.height=sample(x,z);cache.misses=(cache.misses||0)+1;
  return entry.height;
}

export function updateCampaignRenderScale(state,now,pixelRatio,maxPixelRatio,active=true){
  if(!active){state.ready=true;state.last=now;state.slow=0;state.fast=0;return pixelRatio;}
  if(!state.ready){state.ready=true;state.last=now;state.slow=0;state.fast=0;return pixelRatio;}
  const elapsed=now-state.last;state.last=now;
  // A background tab or debugger pause is not evidence that the GPU is slow.
  if(elapsed<=0||elapsed>250)return pixelRatio;
  if(elapsed>34){state.slow+=elapsed;state.fast=0;}
  else if(elapsed<20){state.fast+=elapsed;state.slow=Math.max(0,state.slow-elapsed);}
  else {state.slow=Math.max(0,state.slow-elapsed*.5);state.fast=Math.max(0,state.fast-elapsed);}
  if(state.slow>=2500&&pixelRatio>.8){state.slow=0;state.fast=0;return Math.max(.8,Math.round((pixelRatio-.15)*100)/100);}
  if(state.fast>=5000&&pixelRatio<maxPixelRatio){state.slow=0;state.fast=0;return Math.min(maxPixelRatio,Math.round((pixelRatio+.1)*100)/100);}
  return pixelRatio;
}

export function usesMobileCampaignProfile(width,height,maxTouchPoints=0){
  const shortEdge=Math.min(width,height),longEdge=Math.max(width,height);
  return width<=700||maxTouchPoints>0&&(shortEdge<=700||longEdge<=1200);
}

export function createCampaignView({canvas,getState,makeHuman,onLost,rendererFactory=options=>new T.WebGLRenderer(options)}) {
  const renderer=rendererFactory({canvas,antialias:true,powerPreference:'high-performance'});
  const mobile=usesMobileCampaignProfile(innerWidth,innerHeight,globalThis.navigator?.maxTouchPoints||0);
  const maxPixelRatio=Math.min(devicePixelRatio||1,mobile?1.1:1.5);
  const shadowInterval=campaignShadowInterval(mobile);
  renderer.setPixelRatio(maxPixelRatio);
  renderer.setSize(innerWidth,innerHeight,false);
  renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;renderer.shadowMap.autoUpdate=false;
  const scene=new T.Scene(),camera=new T.PerspectiveCamera(68,innerWidth/innerHeight,.04,6000);
  scene.add(camera);scene.background=new T.Color('#b9dbe5');scene.fog=new T.Fog('#b9dbe5',650,2400);
  const hemi=new T.HemisphereLight('#d5ecfa','#566143',2.0),sun=new T.DirectionalLight('#fff2d6',2.8);
  sun.castShadow=true;sun.shadow.mapSize.set(mobile?1024:2048,mobile?1024:2048);
  Object.assign(sun.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:.1,far:100});
  sun.shadow.normalBias=.025;scene.add(hemi,sun,sun.target);
  const surfaces=createMaterials(renderer,mobile?4:8),mats=new Map(),geos=new Map();
  const mat=c=>{if(!mats.has(c))mats.set(c,surfaces.forColor(c)||new T.MeshStandardMaterial({color:c,roughness:.85}));return mats.get(c)};
  const geo=(key,fn)=>{if(!geos.has(key))geos.set(key,fn());return geos.get(key)};
  const mesh=(parent,g,m,p=[0,0,0],scale=[1,1,1])=>{
    const o=new T.Mesh(g,m);o.position.set(...p);o.scale.set(...scale);o.castShadow=o.receiveShadow=true;parent.add(o);return o;
  };
  const cube=(p,c,pos,s)=>mesh(p,geo('box',()=>new T.BoxGeometry()),mat(c),pos,s);
  const tube=(p,c,pos,s)=>mesh(p,geo('cylinder',()=>new T.CylinderGeometry(1,1,1,12)),mat(c),pos,s);
  const ell=(p,c,pos,s)=>mesh(p,geo('sphere',()=>new T.SphereGeometry(1,16,12)),mat(c),pos,s);
  const helpers={mat,geo,mesh,cube,tube,ell},world=new T.Group(),rooms=new T.Group();
  const batchGroup=group=>{
    const byMaterial=new Map();group.updateMatrix();
    for(const o of [...group.children])if(o.isMesh){
      o.updateMatrix();const geometry=o.geometry.clone().applyMatrix4(o.matrix);
      if(!byMaterial.has(o.material))byMaterial.set(o.material,[]);byMaterial.get(o.material).push(geometry);group.remove(o);
    }
    for(const [material,geometries] of byMaterial){
      const geometry=mergeGeometries(geometries,false);geometries.forEach(g=>g.dispose());
      const o=new T.Mesh(geometry,material);o.castShadow=o.receiveShadow=true;group.add(o);
    }
  };
  const batchRigidCharacter=(person,prefix)=>{
    const protectedMeshes=new Set(person.legs.map(leg=>leg.shoe));
    let sourceMeshes=0,renderMeshes=0,batches=0;
    person.root.traverse(o=>{if(o.isMesh)sourceMeshes++});
    const visit=parent=>{
      for(const child of [...parent.children])if(!child.isMesh)visit(child);
      const byMaterial=new Map();
      for(const child of [...parent.children])if(child.isMesh&&!protectedMeshes.has(child)&&!child.isInstancedMesh){
        if(!byMaterial.has(child.material))byMaterial.set(child.material,[]);byMaterial.get(child.material).push(child);
      }
      for(const [material,meshes] of byMaterial)if(meshes.length>1){
        const geometries=meshes.map(o=>{o.updateMatrix();return o.geometry.clone().applyMatrix4(o.matrix)});
        const geometry=mergeGeometries(geometries,false);geometries.forEach(g=>g.dispose());
        const merged=new T.Mesh(geometry,material);merged.name=`${prefix}-rigid-batch-${batches++}`;
        merged.castShadow=meshes.some(o=>o.castShadow);merged.receiveShadow=meshes.some(o=>o.receiveShadow);
        meshes.forEach(o=>parent.remove(o));parent.add(merged);
      }
    };
    visit(person.root);person.root.traverse(o=>{if(o.isMesh)renderMeshes++});
    person.root.userData.rigidBatchProfile={sourceMeshes,renderMeshes,batches,animatedShoes:protectedMeshes.size};
  };
  const addSupplyCache=(id,x,z)=>{
    const cache=new T.Group();cache.name='campaign-supply-cache-'+id;cache.position.set(x/SCALE,ground(x,z),z/SCALE);world.add(cache);
    cube(cache,'#a98961',[0,.34,0],[1.45,.68,.88]);
    cube(cache,'#debb63',[0,.72,0],[1.52,.09,.94]);
    for(const sx of [-.54,.54])cube(cache,'#debb63',[sx,.35,.46],[.10,.62,.06]);
    cube(cache,'#bd6e4e',[-1.02,.42,.04],[.42,.84,.55]);
    cube(cache,'#394447',[-1.02,.87,.04],[.20,.08,.22]);
    for(const sx of [-1.15,-.89])cube(cache,'#394447',[sx,.75,.04],[.05,.24,.05]);
    cube(cache,'#394447',[-1.02,.84,.04],[.26,.05,.05]);
    cube(cache,'#596b4e',[.93,.23,.04],[.72,.46,.58]);
    cube(cache,'#394447',[.93,.48,.04],[.48,.05,.26]);
    cube(cache,'#e2dbc7',[.82,.86,-.03],[.70,.34,.50]);
    cube(cache,'#bd6e4e',[.82,.87,.235],[.34,.08,.025]);cube(cache,'#bd6e4e',[.82,.87,.235],[.08,.25,.025]);
    cache.userData.supplyDetails={crate:true,fuelCan:true,medkit:true,ammoBox:true};batchGroup(cache);return cache;
  };
  scene.add(world,rooms);
  const terrainBaseSegments=mobile?96:192,terrainReferenceRadius=Math.max(...ISLANDS.map(i=>i.radius)),terrainMeshes=[];
  for(const i of ISLANDS){
    const segments=Math.max(mobile?48:72,Math.round(terrainBaseSegments*i.radius/terrainReferenceRadius/8)*8);
    const land=createIslandTerrain(i,{segments});land.userData.terrainSegments=segments;terrainMeshes.push(land);
    land.scale.set(1/SCALE,1,1/SCALE);land.position.set(i.x/SCALE,0,i.z/SCALE);
    const p=land.geometry.attributes.position;
    for(let j=0;j<p.count;j++)p.setY(j,terrainHeight(i.x+p.getX(j),i.z+p.getZ(j),i));
    const colours=new Float32Array(p.count*3),c=new T.Color();
    for(let j=0;j<p.count;j++){
      const r=Math.hypot(p.getX(j),p.getZ(j))/i.radius;
      c.set(r>.80?'#fff7e4':i.biome==='rocky'?'#d1d4c5':'#dce2c8');
      c.toArray(colours,j*3);
    }
    land.geometry.setAttribute('color',new T.BufferAttribute(colours,3));land.geometry.computeVertexNormals();
    land.material.dispose();land.material=islandMaterial(surfaces,SCALE,{mobile});
    land.material.vertexColors=true;world.add(land);
    const dock=docks[i.id],bridge=new T.Group(),start=terrainHeight(dock.land.x,dock.land.z);
    bridge.name='pier-'+i.id;bridge.position.set(dock.land.x/SCALE,start,dock.land.z/SCALE);
    bridge.rotation.y=Math.atan2(dock.ux,dock.uz);world.add(bridge);
    const length=dist2(dock.end,dock.land)/SCALE,count=Math.ceil(length/.26);
    const planks=new T.InstancedMesh(geo('box',()=>new T.BoxGeometry()),mat('#a98961'),count+1),dummy=new T.Object3D();
    planks.name='pier-deck-'+i.id;
    for(let j=0;j<=count;j++){
      const z=length*j/count;dummy.position.set(0,(dock.deck-start)*j/count-.075,z);
      dummy.scale.set(dock.width/SCALE,.15,length/count+.006);dummy.updateMatrix();planks.setMatrixAt(j,dummy.matrix);
    }
    planks.castShadow=planks.receiveShadow=true;bridge.add(planks);
    const pilingGeometry=geo('pier-piling',()=>new T.CylinderGeometry(1,1,1,12));
    const pilings=new T.InstancedMesh(pilingGeometry,mat('#876742'),8);pilings.name='pier-pilings-'+i.id;
    let pilingIndex=0;
    for(const x of [-.80,.80])for(const z of [0,length*.33,length*.66,length]){
      const y=(dock.deck-start)*z/length;dummy.position.set(x,y-.65,z);dummy.scale.set(.075,1.6,.075);dummy.updateMatrix();pilings.setMatrixAt(pilingIndex++,dummy.matrix);
    }
    pilings.castShadow=pilings.receiveShadow=true;pilings.instanceMatrix.needsUpdate=true;pilings.computeBoundingSphere();bridge.add(pilings);
    const bollards=new T.InstancedMesh(pilingGeometry,mat('#394447'),8);bollards.name='pier-bollards-'+i.id;
    let bollardIndex=0;
    for(const x of [-.72,.72])for(const z of [length*.78,length*.98]){
      const y=(dock.deck-start)*z/length;
      dummy.position.set(x,y+.25,z);dummy.scale.set(.075,.5,.075);dummy.updateMatrix();bollards.setMatrixAt(bollardIndex++,dummy.matrix);
      dummy.position.set(x,y+.51,z);dummy.scale.set(.13,.08,.13);dummy.updateMatrix();bollards.setMatrixAt(bollardIndex++,dummy.matrix);
    }
    bollards.castShadow=bollards.receiveShadow=true;bollards.instanceMatrix.needsUpdate=true;bollards.computeBoundingSphere();bridge.add(bollards);
    if(['paradise','smugglers','highlands'].includes(i.id))addSupplyCache(i.id,i.x,i.z);
  }
  addSupplyCache('jungle',points.supply.x,points.supply.z);
  const waterSize=Math.max(bounds.maxX-bounds.minX,bounds.maxZ-bounds.minZ)/SCALE+12000;
  const ocean=createOcean(ISLANDS.map(i=>[i.x/SCALE,i.z/SCALE,i.radius/SCALE,i.radius/SCALE]),{
    size:waterSize,segments:mobile?48:72,coastSeeds:ISLANDS.map(i=>i.coastSeed),mobile
  });world.add(ocean.mesh);
  const sky=createTropicalSky(5000);world.add(sky);
  const vegetation=decorateIslands(world,ISLANDS,{scale:SCALE,height:terrainHeight,surfaces,small:mobile,dense:true,lod:true,
    clear:(i,x,z)=>sceneryBlocked({x,z},i.id,VILLAGE)||(i.id==='home'&&pathClear(x,z))||
      (i.id==='jungle'&&(dist2({x,z},points.cave)<100||dist2({x,z},points.supply)<58))||(i.id==='fortress'&&Math.abs(x-estateCenter.x)<125&&Math.abs(z-estateCenter.z)<155)||
      dist2({x,z},docks[i.id].land)<90});
  const village=addVillage(world,{scale:SCALE,height:terrainHeight,surfaces,helpers,village:VILLAGE,paths:PATHS,marketPoint:market});
  const {boat,wake}=buildMotorboat(world,helpers);
  const pump=new T.Group();pump.name='harbor-fuel-pump';pump.position.set(points.pump.x/SCALE,ground(points.pump.x,points.pump.z),points.pump.z/SCALE);world.add(pump);
  cube(pump,'#a98961',[0,.06,0],[1.05,.12,.92]);
  cube(pump,'#e6d6b8',[0,.68,0],[.75,1.24,.65]);cube(pump,'#bd6e4e',[0,1.34,0],[.82,.28,.72]);
  cube(pump,'#263f41',[0,.99,.34],[.48,.25,.045]);
  cube(pump,'#e8d99e',[0,.99,.37],[.31,.10,.018]);
  tube(pump,'#2d3435',[.53,.72,0],[.035,1.18,.035]);
  const nozzle=cube(pump,'#394447',[.53,.39,.29],[.10,.24,.08]);nozzle.rotation.z=-.22;
  cube(pump,'#bd6e4e',[0,.39,.35],[.30,.10,.055]);
  tube(pump,'#e6d6b8',[0,2.18,-.06],[.055,1.42,.055]);
  const sign=tube(pump,'#bd6e4e',[0,2.90,-.06],[.42,.10,.42]);sign.rotation.x=Math.PI/2;
  const signFace=tube(pump,'#f3dfbe',[0,2.90,.005],[.31,.115,.31]);signFace.rotation.x=Math.PI/2;
  pump.userData.fuelDetails={display:true,hose:true,nozzle:true,marker:true};
  batchGroup(pump);
  const caveEntrance=new T.Group();caveEntrance.name='campaign-cave-entrance';caveEntrance.position.set(points.cave.x/SCALE,ground(points.cave.x,points.cave.z),points.cave.z/SCALE);world.add(caveEntrance);
  const archStones=[
    [-2,.45,.02,.55,.55,.85,-.12],[-2,1.15,-.02,.58,.7,.95,.08],[-1.9,1.9,.04,.62,.72,.9,-.09],[-1.55,2.55,-.03,.72,.6,.9,.14],
    [2,.45,-.02,.55,.55,.85,.12],[2,1.15,.03,.58,.7,.95,-.08],[1.9,1.9,-.04,.62,.72,.9,.09],[1.55,2.55,.02,.72,.6,.9,-.14],
    [-1,2.9,.03,.72,.48,.9,-.1],[-.35,3.05,-.03,.68,.45,.92,.06],[.35,3.05,.02,.68,.45,.92,-.06],[1,2.9,-.02,.72,.48,.9,.1]
  ];
  const entranceDummy=new T.Object3D(),rockBatch=new T.InstancedMesh(geo('cave-mouth-rock',()=>new T.SphereGeometry(1,12,8)),mat('#92968b'),archStones.length);
  rockBatch.name='cave-entrance-rocks';rockBatch.castShadow=true;rockBatch.receiveShadow=true;
  archStones.forEach(([x,y,z,sx,sy,sz,rz],i)=>{entranceDummy.position.set(x,y,z);entranceDummy.scale.set(sx,sy,sz);entranceDummy.rotation.set(0,0,rz);entranceDummy.updateMatrix();rockBatch.setMatrixAt(i,entranceDummy.matrix);});
  rockBatch.instanceMatrix.needsUpdate=true;rockBatch.computeBoundingSphere();caveEntrance.add(rockBatch);
  cube(caveEntrance,'#171e19',[0,1.25,-.85],[2.8,2.5,.15]);
  const torchBatch=new T.InstancedMesh(geo('cave-torch-handle',()=>new T.CylinderGeometry(1,1,1,7)),mat('#4c3525'),2);torchBatch.name='cave-entrance-torches';torchBatch.castShadow=true;
  const flameMaterial=new T.MeshStandardMaterial({color:'#ffcf75',emissive:'#ff7f32',emissiveIntensity:1.15,roughness:.55});
  const flameBatch=new T.InstancedMesh(geo('cave-torch-flame',()=>new T.ConeGeometry(1,1,7)),flameMaterial,2);flameBatch.name='cave-entrance-flames';
  [-1,1].forEach((side,i)=>{entranceDummy.position.set(side*1.18,1.15,.18);entranceDummy.scale.set(.035,.85,.035);entranceDummy.rotation.set(0,0,-side*.15);entranceDummy.updateMatrix();torchBatch.setMatrixAt(i,entranceDummy.matrix);entranceDummy.position.set(side*1.18,1.65,.18);entranceDummy.scale.set(.12,.22,.12);entranceDummy.rotation.set(0,0,side*.08);entranceDummy.updateMatrix();flameBatch.setMatrixAt(i,entranceDummy.matrix);});
  torchBatch.instanceMatrix.needsUpdate=true;flameBatch.instanceMatrix.needsUpdate=true;torchBatch.computeBoundingSphere();flameBatch.computeBoundingSphere();caveEntrance.add(torchBatch,flameBatch);
  caveEntrance.userData.entranceDetails={archStones:12,torches:2,clearOpening:true};
  const mansion=new T.Group();mansion.name='guarded-estate';mansion.position.set(estateCenter.x/SCALE,.85,estateCenter.z/SCALE);world.add(mansion);
  cube(mansion,'#e2dbc7',[0,1.55,0],[8,3.1,8]);
  cube(mansion,'#a68854',[0,3.2,0],[8.6,.25,8.6]);
  cube(mansion,'#e2dbc7',[0,4.35,-.4],[6.5,2.3,6.5]);
  for(const side of [-1,1]){
    const roof=cube(mansion,'#ba7655',[side*1.7,5.9,-.4],[3.7,.15,7.4]);roof.rotation.z=-side*.3;
  }
  cube(mansion,'#313f38',[0,1.2,4.03],[1.65,2.4,.08]);
  for(const x of [-2.7,2.7])for(const y of [1.7,4.3]){
    cube(mansion,'#425761',[x,y,4.04],[1.15,1.3,.06]);
    cube(mansion,'#e2dbc7',[x,y,4.11],[.08,1.38,.08]);
    cube(mansion,'#e2dbc7',[x,y,4.11],[1.2,.08,.08]);
  }
  for(const x of [-1.4,1.4])tube(mansion,'#e2dbc7',[x,1.3,4.65],[.16,2.6,.16]);
  cube(mansion,'#a68854',[0,2.67,4.65],[3.3,.20,1.4]);
  for(let j=0;j<3;j++)cube(mansion,'#92968b',[0,-.03+j*.06,4.4+j*.4],[2.6,.15,1.25-j*.25]);
  for(const x of [-3.4,3.4])for(const y of [1.7,4.3]){
    cube(mansion,'#587e7c',[x,y,4.07],[.32,1.35,.10]);
    for(let j=0;j<8;j++)cube(mansion,'#876742',[x,y-.50+j*.14,4.14],[.30,.025,.045]);
  }
  cube(mansion,'#e2dbc7',[0,3.10,4.55],[8.5,.16,1.25]);
  for(let j=-10;j<=10;j++)tube(mansion,'#e2dbc7',[j*.39,3.57,5.05],[.033,.83,.033]);
  cube(mansion,'#e2dbc7',[0,4.0,5.05],[8.5,.08,.08]);
  for(const x of [-2.45,2.45]){
    cube(mansion,'#a98961',[x,.30,4.62],[1.25,.42,.55]);
    for(let j=-2;j<=2;j++){
      const leaf=ell(mansion,j%2?'#6f8f58':'#88a866',[x+j*.20,.67+Math.abs(j)*.025,4.62],[.18,.38,.18]);leaf.rotation.z=j*.12;
    }
  }
  const lanternMaterial=new T.MeshStandardMaterial({color:'#ffe4a8',emissive:'#ffb85c',emissiveIntensity:.72,roughness:.34});
  for(const x of [-1.03,1.03]){
    cube(mansion,'#394447',[x,2.05,4.14],[.08,.10,.24]);
    const lantern=ell(mansion,'#ffe4a8',[x,1.88,4.27],[.13,.19,.13]);lantern.material=lanternMaterial;
  }
  const crest=tube(mansion,'#d4a957',[0,3.02,4.11],[.38,.10,.38]);crest.rotation.x=Math.PI/2;
  mansion.userData.estateDetails={planters:2,lanterns:2,crest:true};
  batchGroup(mansion);
  mansion.userData.cameraBlocker=true;
  const cameraBlockers=[village.buildings,mansion];
  cameraBlockers.forEach(o=>o.updateWorldMatrix(true,true));
  const roomGroups={};
  function room(name,w=11,d=15){
    const root=new T.Group();root.name=name;rooms.add(root);roomGroups[name]=root;
    cube(root,name==='cave'?'#777a6b':'#a68854',[0,-.10,1],[w,.2,d]);
    const walls=new T.Group();walls.name=name+'-walls';root.add(walls);
    for(const x of [-w/2,w/2])cube(walls,name==='cave'?'#92968b':'#e2dbc7',[x,1.65,1],[.3,3.3,d]);
    cube(walls,name==='cave'?'#92968b':'#e2dbc7',[0,1.65,1-d/2],[w,3.3,.3]);
    batchGroup(walls);
    cube(root,'#313f38',[0,1.1,d/2-.2],[1.7,2.2,.15]);
    const light=new T.PointLight(name==='cave'?'#ffd9a0':'#ffeccf',22,18,1.6);light.position.set(0,2.7,1);root.add(light);
    root.userData.shellDetails={sourceMeshes:5,renderMeshes:3};
    return root;
  }
  const cave=room('cave',12,17);
  const caveFormationGeometry=geo('cave-formation',()=>new T.ConeGeometry(1,1,9));
  const caveFormations=new T.InstancedMesh(caveFormationGeometry,mat('#777a6b'),16),formationDummy=new T.Object3D();
  caveFormations.name='cave-formations';
  const caveEdges=[[-5.2,-5.4,.34,.92],[-5.2,-1.7,.27,.68],[-5.2,2.1,.38,1.06],[-5.2,5.1,.25,.78],
    [5.2,-4.1,.31,.84],[5.2,-.3,.39,1.12],[5.2,3.4,.28,.72],[3.6,-6.7,.42,1.18]];
  let caveFormationIndex=0;
  for(const [x,z,radius,height] of caveEdges){
    formationDummy.position.set(x,height/2,z);formationDummy.rotation.set(0,(caveFormationIndex*.71)%Math.PI,0);
    formationDummy.scale.set(radius,height,radius);formationDummy.updateMatrix();caveFormations.setMatrixAt(caveFormationIndex++,formationDummy.matrix);
    formationDummy.position.set(-x,3.3-height*.48,z+.55);formationDummy.rotation.set(0,(caveFormationIndex*.53)%Math.PI,Math.PI);
    formationDummy.scale.set(radius*.82,height*.92,radius*.82);formationDummy.updateMatrix();caveFormations.setMatrixAt(caveFormationIndex++,formationDummy.matrix);
  }
  caveFormations.castShadow=caveFormations.receiveShadow=true;caveFormations.instanceMatrix.needsUpdate=true;caveFormations.computeBoundingSphere();cave.add(caveFormations);
  cave.userData.caveDetails={stalactites:8,stalagmites:8,clearCenter:true};
  const evidenceTable=new T.Group();evidenceTable.name='cave-evidence-table';cave.add(evidenceTable);
  cube(evidenceTable,'#a98961',[0,.75,-2],[2,.12,1.2]);
  for(const x of [-.75,.75])for(const z of [-2.45,-1.55])tube(evidenceTable,'#876742',[x,.35,z],[.065,.7,.065]);
  for(const z of [-2.47,-1.53])cube(evidenceTable,'#876742',[0,.57,z],[1.72,.20,.07]);
  cube(evidenceTable,'#876742',[0,.56,-1.38],[.72,.27,.08]);ell(evidenceTable,'#394447',[0,.56,-1.32],[.045,.045,.04]);
  tube(evidenceTable,'#394447',[.72,.86,-2.18],[.17,.10,.17]);
  const caveLanternMaterial=new T.MeshStandardMaterial({color:'#ffe4a8',emissive:'#ff9f45',emissiveIntensity:1.05,roughness:.28,transparent:true,opacity:.88});
  const caveLantern=ell(evidenceTable,'#ffe4a8',[.72,1.08,-2.18],[.14,.22,.14]);caveLantern.material=caveLanternMaterial;
  tube(evidenceTable,'#394447',[.72,1.31,-2.18],[.12,.07,.12]);
  evidenceTable.userData.evidenceDetails={legs:4,drawer:true,lantern:true,newspaper:true,hiddenGun:true};batchGroup(evidenceTable);
  const paperCanvas=document.createElement('canvas');paperCanvas.width=256;paperCanvas.height=320;
  const pc=paperCanvas.getContext('2d');pc.fillStyle='#ddd5bd';pc.fillRect(0,0,256,320);pc.fillStyle='#3a3b32';pc.font='bold 26px serif';pc.fillText('ISLAND DAILY',18,38);
  pc.fillRect(18,51,220,3);for(let j=0;j<20;j++){pc.fillRect(18,72+j*10,94-(j%4)*6,2);pc.fillRect(128,72+j*10,104-(j%3)*8,2);}
  const paperMap=new T.CanvasTexture(paperCanvas);paperMap.colorSpace=T.SRGBColorSpace;
  const paperMesh=new T.Mesh(new T.PlaneGeometry(.9,1.05),new T.MeshStandardMaterial({map:paperMap,side:T.DoubleSide}));
  paperMesh.name='cave-newspaper';paperMesh.rotation.x=-Math.PI/2;paperMesh.position.set(0,.83,-2);cave.add(paperMesh);
  function pistol(parent){
    const root=new T.Group();parent.add(root);
    cube(root,'#333a3d',[0,0,.06],[.12,.12,.34]);
    const grip=cube(root,'#695646',[0,-.11,-.03],[.10,.23,.13]);grip.rotation.x=-.22;
    cube(root,'#8b9294',[0,.08,.03],[.11,.035,.30]);return root;
  }
  const hiddenGun=pistol(cave);hiddenGun.name='cave-hidden-gun';hiddenGun.position.set(0,.87,-2);hiddenGun.rotation.y=Math.PI/2;
  const estate=room('estate',11,15);
  const estateFixtures=new T.Group();estateFixtures.name='estate-fixtures';estate.add(estateFixtures);
  cube(estateFixtures,'#816947',[0,.42,-4.6],[2.6,.85,.9]);cube(estateFixtures,'#decc9f',[0,.05,1],[3,.025,10]);
  for(let j=0;j<6;j++)cube(estateFixtures,'#777a6b',[3.5,.06*j,-4.75+j*.28],[1.7,.12,.65]);
  estateFixtures.userData.batchDetails={sourceMeshes:8,renderMeshes:3};batchGroup(estateFixtures);
  const estateStatic=new T.Group();estateStatic.name='estate-interior-details';estate.add(estateStatic);
  const portraitColours=['#6f443d','#40626a','#718052'];
  for(const [j,x] of [-2.7,0,2.7].entries()){
    cube(estateStatic,'#a68854',[x,1.90,-6.31],[1.42,1.22,.08]);
    cube(estateStatic,portraitColours[j],[x,1.90,-6.25],[1.12,.92,.045]);
  }
  cube(estateStatic,'#a68854',[0,.93,-6.29],[8.7,.08,.08]);
  for(const x of [-4.35,4.35]){
    cube(estateStatic,'#394447',[x,2.02,-6.24],[.10,.32,.10]);
    const lamp=ell(estateStatic,'#ffe4a8',[x,1.79,-6.15],[.14,.19,.11]);lamp.material=lanternMaterial;
  }
  cube(estateStatic,'#394447',[0,.86,-4.58],[1.12,.025,.52]);
  for(const x of [-.52,0,.52])cube(estateStatic,'#d8d2c3',[x,.88,-4.57],[.40,.012,.30]);
  tube(estateStatic,'#394447',[.93,1.08,-4.58],[.035,.42,.035]);
  const deskLamp=ell(estateStatic,'#ffe4a8',[.93,1.34,-4.58],[.18,.16,.18]);deskLamp.material=lanternMaterial;
  estate.userData.interiorDetails={portraits:3,sconces:2,documents:3,deskLamp:true};batchGroup(estateStatic);
  const keyMesh=new T.Mesh(new T.TorusGeometry(.13,.036,8,16),new T.MeshStandardMaterial({color:'#f8ce60',emissive:'#8c6322',emissiveIntensity:.5}));
  keyMesh.position.set(0,.88,-3);estate.add(keyMesh);cube(keyMesh,'#debb63',[0,-.20,0],[.065,.32,.065]);
  const cellar=room('cellar',11,15),cellBars=[],cellarStatic=new T.Group();cellarStatic.name='cellar-static';cellar.add(cellarStatic);
  const roomEntries=Object.entries(roomGroups);
  for(const p of PEOPLE){
    const bars=new T.Group();bars.name='cell-door-'+p.id;bars.position.set(p.x/SCALE,0,-1.5);cellar.add(bars);cellBars[p.id]=bars;
    for(let j=-2;j<=2;j++)tube(bars,'#475759',[j*.32,1.3,0],[.025,2.6,.025]);
    for(const y of [.1,2.5])cube(bars,'#475759',[0,y,0],[1.65,.055,.055]);
    for(const y of [.45,2.15])tube(bars,'#394447',[-.78,y,.07],[.045,.12,.045]);
    mesh(bars,geo('cell-padlock',()=>new T.TorusGeometry(.09,.022,6,12)),mat('#a68854'),[.61,1.42,.07]);
    cube(bars,'#a68854',[.61,1.27,.07],[.18,.20,.08]);
    batchGroup(bars);
    const x=p.x/SCALE,blanket=['#738b90','#9b796d'][p.id%2];
    cube(cellarStatic,'#a98961',[x,.18,-4.8],[1.55,.36,.8]);cube(cellarStatic,'#e2dbc7',[x,.4,-4.8],[1.5,.1,.8]);
    cube(cellarStatic,blanket,[x,.47,-4.65],[1.42,.045,.48]);
    cube(cellarStatic,'#d8d2c3',[x,.50,-5.08],[.64,.10,.24]);
  }
  for(const x of [-3.8,0,3.8]){
    cube(cellarStatic,'#394447',[x,2.54,-6.28],[.36,.15,.10]);
    const lamp=ell(cellarStatic,'#ffe4a8',[x,2.34,-6.20],[.15,.20,.11]);lamp.material=lanternMaterial;
  }
  cellar.userData.cellarDetails={cells:5,hinges:10,padlocks:5,lamps:3,bedding:5};batchGroup(cellarStatic);
  function prepareCampaignPerson(person,style,prefix){
    const selected=person.hairStyles[style],selectedHair=new Set();selected.name=`${prefix}-hair-${style}`;selected.visible=true;
    selected.traverse(o=>{if(o.isMesh)selectedHair.add(o)});
    person.hairStyles.forEach((hair,index)=>{if(index!==style)hair.removeFromParent()});
    person.hairStyles=[selected];person.hairParts=person.hairParts.filter(o=>selectedHair.has(o));
    person.spear.removeFromParent();person.raft.removeFromParent();Object.values(person.props).forEach(prop=>prop.removeFromParent());
    person.spear=person.raft=null;person.props={};
    person.root.userData.renderProfile={hairVariants:1,unusedToolMeshes:0};batchRigidCharacter(person,prefix);return person;
  }
  const self=prepareCampaignPerson(makeHuman({shirt:'#577c87',skin:'#ddb08c',hair:'#40362f'},'player',helpers),0,'campaign-player');
  self.root.name='campaign-player';scene.add(self.root);const guardModels=new Map(),prisoners=new Map();
  const releasedMask=new Uint8Array(PEOPLE.length),escortPoints=PEOPLE.map(()=>({x:0,z:0})),walkCycle={swing:0,step:0,bounce:0};
  const guardLooks={
    gate:{shirt:'#526252',skin:'#c29574',hair:'#302e28',style:0},
    patrol:{shirt:'#59665a',skin:'#a96f55',hair:'#211f1e',style:1},
    hall:{shirt:'#4b5958',skin:'#d1a17d',hair:'#5b4032',style:2},
    boss:{shirt:'#34383a',skin:'#b67d60',hair:'#251f1c',style:1}
  };
  for(const g of getState().guards){
    const look=guardLooks[g.id],person=prepareCampaignPerson(makeHuman(look,'guard',helpers),look.style,'campaign-guard-'+g.id);
    person.root.name='campaign-guard-'+g.id;
    person.root.userData.guardProfile={boss:g.id==='boss',style:look.style};
    if(g.id==='boss'){
      const insignia=new T.Group();insignia.name='campaign-boss-insignia';person.hips.add(insignia);
      for(const side of [-1,1])cube(insignia,'#d2aa58',[side*.20,.56,.02],[.12,.035,.18]);
      const sash=cube(insignia,'#8f2f2d',[0,.34,.15],[.055,.52,.025]);sash.rotation.z=-.48;
      person.root.userData.guardProfile.insignia=true;
    }
    scene.add(person.root);pistol(person.arms[1].forearm).position.set(0,-.24,.14);guardModels.set(g.id,person);
  }
  const residentLooks=[
    {shirt:'#8da4b1',skin:'#c99370',hair:'#302d2a',style:0,scale:1.02},
    {shirt:'#b78876',skin:'#e1b894',hair:'#6a4938',style:1,scale:.96},
    {shirt:'#9caa8c',skin:'#b98264',hair:'#2f2927',style:2,scale:1},
    {shirt:'#c3b487',skin:'#dca984',hair:'#704936',style:1,scale:.72},
    {shirt:'#92b2b6',skin:'#e4bb96',hair:'#3f302b',style:2,scale:.76}
  ];
  for(const p of PEOPLE){
    const look=residentLooks[p.id],person=prepareCampaignPerson(makeHuman(look,'resident',helpers),look.style,'campaign-prisoner-'+p.id);
    person.root.name='campaign-prisoner-'+p.id;person.root.scale.setScalar(look.scale);
    person.root.userData.residentProfile={child:p.child,style:look.style,scale:look.scale};scene.add(person.root);prisoners.set(p.id,person);
  }
  const handheld=new T.Group();camera.add(handheld);
  pistol(handheld).position.set(.26,-.23,-.48);const hand=ell(handheld,'#ddb08c',[.24,-.32,-.40],[.065,.085,.08]);
  const sleeve=tube(handheld,'#577c87',[.22,-.40,-.30],[.085,.24,.085]);sleeve.rotation.x=-.5;
  const halo=new T.Mesh(new T.TorusGeometry(.42,.035,8,32),new T.MeshBasicMaterial({color:'#f3d48a'}));
  halo.rotation.x=-Math.PI/2;scene.add(halo);
  const tracerPosition=new T.Float32BufferAttribute(new Float32Array(6),3);
  const tracer=new T.Line(new T.BufferGeometry().setAttribute('position',tracerPosition),new T.LineBasicMaterial({color:'#ffe8ad'}));tracer.frustumCulled=false;scene.add(tracer);
  const cameraRay=new T.Raycaster(),cameraDirection=new T.Vector3(),cameraPoseBuffer={position:new T.Vector3(),target:new T.Vector3()},cameraHits=[];
  const cameraCollisionState={position:new T.Vector3()};let cameraRaycasts=0;
  const cameraPoseState={x:0,z:0,surface:0,yaw:0,pitch:0,mode:'first',distance:4.6},cameraHit=hit=>hit.distance>.2,shadowOptions={height:25};
  const goalState={},goalSelectionState={},nearbyState={},nearbyCandidates=[],campaignGroundCache=new Map(),guardMotionStates=new Map();campaignGroundCache.misses=0;
  let goalSelections=0,nearbySelections=0,movingGuards=0,exteriorUpdates=0;
  let yaw=0,pitch=.05,mode='first',last=0,enabled=true,lost=false,drag=null,posedCharacters=0,poseUpdates=0,pausedFrameRendered=false;
  const shadowState={},terrainShadowState={},areaViewState={},areaView={},areaPresentationState={},releasedPresentationState={},renderScaleState={};let lastShadowUpdate=-Infinity,shadowUpdates=0;
  const initial=getState(),initialGoal=goal(initial).target;
  if(initialGoal)yaw=Math.atan2(initial.p.x-initialGoal.x,initial.p.z-initialGoal.z);
  function placeHuman(person,p,height,heading,walking,seconds,force=false,pose='standing'){
    posedCharacters++;
    const poseState=person.root.userData.campaignPoseState||(person.root.userData.campaignPoseState={});
    if(!updateCampaignPoseState(poseState,p,height,heading,walking,force,pose))return;
    poseUpdates++;
    person.root.position.set(p.x/SCALE,height,p.z/SCALE);person.root.rotation.set(0,0,0);person.rig.rotation.y=heading;
    const cycle=updateCampaignWalkCycle(walkCycle,seconds,walking);
    for(const leg of person.legs){const swing=(leg.side<0?-cycle.swing:cycle.swing)*cycle.step;leg.thigh.rotation.x=swing;leg.calf.rotation.x=Math.max(0,-swing);leg.shoe.rotation.x=-leg.calf.rotation.x*.6;}
    for(const a of person.arms){a.arm.rotation.x=walking?(a.side<0?cycle.swing:-cycle.swing)*.25:0;a.arm.rotation.z=0;a.forearm.rotation.x=-.18;}
    person.hips.position.y=.87+cycle.bounce*.009;
  }
  function frame(now) {
    if(!enabled||lost)return;
    const s=getState();
    // A paused campaign is visually static. Draw its background once, then leave
    // the GPU idle until play resumes or a camera/viewport change invalidates it.
    if(s.paused&&pausedFrameRendered)return;
    pausedFrameRendered=!!s.paused;
    const seconds=now/1000;last=now;posedCharacters=0;surfaces.update();
    const area=s.interior;
    updateCampaignAreaPresentation(areaPresentationState,area,world,rooms,roomEntries,scene,hemi,sun);
    updateCampaignTerrainShadows(terrainShadowState,area,s.p,ISLANDS,terrainMeshes);
    const surface=area?0:sampleCampaignGround(campaignGroundCache,self.root,s.p.x,s.p.z,ground);
    const playerVisible=mode==='third';
    self.root.visible=playerVisible;
    if(!s.boat){
      const reattached=attachSceneChild(scene,self.root);
      // First-person hands have their own camera model. Do not animate the
      // hidden full body until the player switches back to third person.
      if(playerVisible)placeHuman(self,s.p,surface,s.heading,s.walking,seconds,reattached);
    }
    self.rig.visible=playerVisible;
    boat.position.set((s.boat?s.p.x:docks[s.boatAt].x)/SCALE,.02,(s.boat?s.p.z:docks[s.boatAt].z)/SCALE);
    boat.rotation.y=s.boat?s.heading:Math.atan2(docks[s.boatAt].ux,docks[s.boatAt].uz);
    boat.rotation.z=s.boat?Math.sin(seconds*2)*.015:0;wake.visible=s.boat&&s.walking;
    if(s.boat&&playerVisible)seatDriver(self,boat);
    paperMesh.visible=!s.paper;hiddenGun.visible=s.paper&&!s.gun;
    updateReleasedPresentation(releasedPresentationState,s.released,releasedMask,cellBars);
    let guardWalking=false,bossDefeated=false;movingGuards=0;
    for(const g of s.guards){
      if(g.id==='boss')bossDefeated=g.hp<=0;
      const p=guardModels.get(g.id),visible=g.area===area&&!s.boat&&(!g.area||s.island==='fortress');p.root.visible=visible;
      if(!visible)continue;
      let motion=guardMotionStates.get(g.id);if(!motion){motion={};guardMotionStates.set(g.id,motion);}
      const walking=updateCampaignMovement(motion,g,g.hp>0);
      const heading=updateCampaignGuardHeading(motion,Math.atan2(s.p.x-g.x,s.p.z-g.z),g.hp>0);
      if(walking)movingGuards++;
      guardWalking ||= walking;
      const guardSurface=g.area?0:sampleCampaignGround(campaignGroundCache,p,g.x,g.z,ground);
      placeHuman(p,g,guardSurface,heading,walking,seconds,false,g.hp<=0?'fallen':'armed');
      if(g.hp<=0){p.rig.rotation.x=-Math.PI/2;p.root.position.y=guardSurface+(g.area?0:.15);p.root.scale.setScalar(.8);}
      else {p.rig.rotation.x=0;p.arms[1].arm.rotation.x=-1.05;p.arms[1].forearm.rotation.x=-.35;}
    }
    keyMesh.visible=!s.key&&bossDefeated;
    if(keyMesh.visible)keyMesh.rotation.y=seconds;
    const escortVisible=s.released.length&&!s.boarded&&!s.boat&&(area==='estate'||area==='cellar'||s.island==='fortress');
    if(escortVisible)updateEscortPoints(escortPoints,PEOPLE,s.p,s.heading);
    for(const p of PEOPLE){
      const model=prisoners.get(p.id),freed=!!releasedMask[p.id];
      const visible=s.boarded?false:freed?(!s.boat&&(area==='estate'||area==='cellar'||s.island==='fortress')):area==='cellar';
      model.root.visible=visible;
      if(!visible)continue;
      const point=freed?escortPoints[p.id]:p;
      placeHuman(model,point,area?0:sampleCampaignGround(campaignGroundCache,model,point.x,point.z,ground),s.heading,freed&&s.walking,seconds+p.id*.18);
    }
    if(updateCampaignGoal(goalSelectionState,s,goalState,!bossDefeated))goalSelections++;
    const g=goalState.target;
    if(updateCampaignAreaView(areaViewState,area,s.p,g,yaw,pitch,mode==='first'?.05:.22,areaView)){
      yaw=areaView.yaw;pitch=areaView.pitch;
    }
    if(updateCampaignNearby(nearbyState,s,nearbyCandidates))nearbySelections++;
    const n=nearbyState.nearby,mark=n||g;
    halo.visible=!!mark;
    if(mark)halo.position.set(mark.x/SCALE,(area?0:sampleCampaignGround(campaignGroundCache,halo,mark.x,mark.z,ground))+.08,mark.z/SCALE);
    if(mark)halo.scale.setScalar(1+Math.sin(seconds*3)*.10);
    handheld.visible=s.gun&&!s.boat&&mode==='first';
    handheld.position.z=s.shot?.025:0;
    const cameraSurface=s.boat?.02+HELM.eye-1.64:surface;
    const driverOffset=s.boat?HELM.seatZ:0;
    cameraPoseState.x=s.p.x/SCALE+Math.sin(s.heading)*driverOffset;cameraPoseState.z=s.p.z/SCALE+Math.cos(s.heading)*driverOffset;
    cameraPoseState.surface=cameraSurface;cameraPoseState.yaw=yaw;cameraPoseState.pitch=pitch;cameraPoseState.mode=mode;cameraPoseState.distance=s.boat?7.5:4.6;
    const pose=cameraPose(cameraPoseState,cameraPoseBuffer);
    if(area&&mode==='third'){
      pose.position.x=T.MathUtils.clamp(pose.position.x,-5.1,5.1);
      pose.position.z=T.MathUtils.clamp(pose.position.z,-5.0,8.1);
    }
    if(!area&&mode==='third'){
      const c=cameraCollisionState,p=pose.position,t=pose.target;
      if(c.ready&&c.x===p.x&&c.y===p.y&&c.z===p.z&&c.tx===t.x&&c.ty===t.y&&c.tz===t.z)pose.position.copy(c.position);
      else {
        c.ready=true;c.x=p.x;c.y=p.y;c.z=p.z;c.tx=t.x;c.ty=t.y;c.tz=t.z;
        cameraDirection.subVectors(p,t);const length=cameraDirection.length();cameraDirection.normalize();
        cameraRay.set(t,cameraDirection);cameraRay.far=length;cameraRaycasts++;
        const hit=intersectRaycastInto(cameraRay,cameraBlockers,true,cameraHits).find(cameraHit);
        if(hit)p.copy(t).addScaledVector(cameraDirection,Math.max(.35,hit.distance-.22));
        p.y=Math.max(p.y,sampleCampaignGround(campaignGroundCache,camera,p.x*SCALE,p.z*SCALE,ground)+.24);
        c.position.copy(p);
      }
    }
    camera.position.copy(pose.position);camera.lookAt(pose.target);
    // The hidden archipelago must not scan 48 palm LOD batches or animate its
    // ocean and sky while an interior room is the only visible environment.
    if(updateCampaignExterior(area,seconds,camera,sky,ocean,vegetation))exteriorUpdates++;
    // First-person walking hides the player rig, so only the coarser position
    // invalidation is needed; no visible body animation can change the map.
    const shadowAnimated=campaignShadowsAnimated(s,guardWalking,mode==='third');
    const updateShadow=updateCampaignShadowState(shadowState,s,shadowAnimated)||(shadowAnimated&&now-lastShadowUpdate>=shadowInterval);
    renderer.shadowMap.needsUpdate=updateShadow;
    if(updateShadow){stabilizeSunShadow(sun,s.p.x/SCALE,s.p.z/SCALE,shadowOptions);lastShadowUpdate=now;shadowUpdates++;}
    tracer.visible=!!s.shot;
    if(s.shot){
      updateLineSegment(tracerPosition,s.shot.from,s.shot.to,surface+1.35);
    }
    renderer.render(scene,camera);
    const pixelRatio=renderer.getPixelRatio(),nextPixelRatio=updateCampaignRenderScale(renderScaleState,now,pixelRatio,maxPixelRatio,!s.paused);
    if(nextPixelRatio!==pixelRatio){renderer.setPixelRatio(nextPixelRatio);resize();}
  }
  function resize(){pausedFrameRendered=false;camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight,false);}
  function orbit(dx,dy=0){if(getState().paused)return;yaw+=dx;pitch=T.MathUtils.clamp(pitch+dy,mode==='first'?-.95:-.05,.75);}
  canvas.addEventListener('pointerdown',e=>{if(getState().paused||e.button!==0)return;drag={id:e.pointerId,x:e.clientX,y:e.clientY};canvas.setPointerCapture(e.pointerId);});
  canvas.addEventListener('pointermove',e=>{if(drag?.id!==e.pointerId)return;orbit(-(e.clientX-drag.x)*.006,(e.clientY-drag.y)*.005);drag.x=e.clientX;drag.y=e.clientY;});
  for(const event of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(event,()=>drag=null);
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();lost=true;enabled=false;onLost?.();});
  return {frame,resize,orbit,setCamera(value){mode=value==='first'?'first':'third';pitch=mode==='first'?.05:.22;pausedFrameRendered=false;},
    get cameraMode(){return mode},get enabled(){return enabled&&!lost},
    vector:(x,z)=>({x:x*Math.cos(yaw)+z*Math.sin(yaw),z:-x*Math.sin(yaw)+z*Math.cos(yaw)}),
    aim:()=>yaw+Math.PI,setEnabled(v){enabled=!!v&&!lost;if(enabled)pausedFrameRendered=false;},
    stats:()=>({calls:renderer.info.render.calls,triangles:renderer.info.render.triangles,pixelRatio:renderer.getPixelRatio(),eye:camera.position.toArray(),camera:mode,cameraBlockers:cameraBlockers.length,cameraRaycasts,goalSelections,nearbySelections,movingGuards,
      palmBatches:vegetation.treeBatches.length,largestPalmBatch:Math.max(...vegetation.treeBatches.map(o=>o.count)),posedCharacters,poseUpdates,exteriorUpdates,
      palmLodDistanceChecks:vegetation.treeBatches.length+vegetation.foliageBatches.length,
      palmTrunkTriangles:vegetation.treeBatches.reduce((n,o)=>n+o.count*o.geometry.index.count/3,0),
      unshadowedPalmTrunkTriangles:vegetation.treeBatches.filter(o=>!o.receiveShadow).reduce((n,o)=>n+o.count*o.geometry.index.count/3,0),
      palmCrownTriangles:vegetation.foliageBatches.reduce((n,o)=>n+o.count*o.geometry.index.count/3,0),
      lowDetailPalmBatches:vegetation.treeBatches.filter(o=>o.userData.lod.level==='low').length,
      terrainTriangles:terrainMeshes.reduce((n,o)=>n+o.geometry.index.count/3,0),shadowReceivingTerrains:terrainShadowState.active,
      shadowUpdates,terrainHeightSamples:campaignGroundCache.misses}),
    dispose(){renderer.dispose();surfaces.dispose();const gs=new Set([...geos.values(),...vegetation.lodGeometries]),ms=new Set(mats.values());scene.traverse(o=>{if(o.geometry)gs.add(o.geometry);if(o.material)for(const m of Array.isArray(o.material)?o.material:[o.material])ms.add(m);});gs.forEach(g=>g.dispose());ms.forEach(m=>m.dispose());paperMap.dispose();}
  };
}
function dist2(a,b){return Math.hypot(a.x-b.x,a.z-b.z);}

export { drawCampaign2D } from './campaign-2d.mjs';
