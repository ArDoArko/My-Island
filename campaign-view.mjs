import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { ISLANDS,VILLAGE,PATHS,market,estateCenter,pathClear,terrainHeight,bounds } from './campaign-world.mjs';
import { buildMotorboat,seatDriver,HELM } from './campaign-boat.mjs';
import { createIslandTerrain } from './archipelago-terrain.mjs';
import { createMaterials, cameraPose, stabilizeSunShadow } from './island-environment.mjs';
import { createOcean, createTropicalSky, islandMaterial, decorateIslands, addVillage } from './tropical-scene.mjs';
import { sceneryBlocked } from './campaign-scenery.mjs';
import { SCALE, docks, points, PEOPLE, ground, goal, nearby } from './campaign.mjs';

export function createCampaignView({canvas,getState,makeHuman,onLost,rendererFactory=options=>new T.WebGLRenderer(options)}) {
  const renderer=rendererFactory({canvas,antialias:true,powerPreference:'high-performance'});
  const mobile=innerWidth<=700;
  renderer.setPixelRatio(Math.min(devicePixelRatio||1,mobile?1.1:1.5));
  renderer.setSize(innerWidth,innerHeight,false);
  renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;renderer.shadowMap.autoUpdate=false;
  const scene=new T.Scene(),camera=new T.PerspectiveCamera(68,innerWidth/innerHeight,.04,6000);
  scene.add(camera);scene.background=new T.Color('#b9dbe5');scene.fog=new T.Fog('#b9dbe5',650,2400);
  const hemi=new T.HemisphereLight('#d5ecfa','#566143',2.0),sun=new T.DirectionalLight('#fff2d6',2.8);
  sun.castShadow=true;sun.shadow.mapSize.set(mobile?1024:2048,mobile?1024:2048);
  Object.assign(sun.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:.1,far:100});
  sun.shadow.normalBias=.025;scene.add(hemi,sun,sun.target);
  const surfaces=createMaterials(renderer),mats=new Map(),geos=new Map();
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
    land.material.dispose();land.material=islandMaterial(surfaces,SCALE);
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
  const ocean=createOcean(ISLANDS.map(i=>[i.x/SCALE,i.z/SCALE,i.radius/SCALE,i.radius/SCALE]),{size:waterSize,coastSeeds:ISLANDS.map(i=>i.coastSeed)});world.add(ocean.mesh);
  const sky=createTropicalSky(5000);world.add(sky);
  const vegetation=decorateIslands(world,ISLANDS,{scale:SCALE,height:terrainHeight,surfaces,small:mobile,dense:true,
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
    for(const x of [-w/2,w/2])cube(root,name==='cave'?'#92968b':'#e2dbc7',[x,1.65,1],[.3,3.3,d]);
    cube(root,name==='cave'?'#92968b':'#e2dbc7',[0,1.65,1-d/2],[w,3.3,.3]);
    cube(root,'#313f38',[0,1.1,d/2-.2],[1.7,2.2,.15]);
    const light=new T.PointLight(name==='cave'?'#ffd9a0':'#ffeccf',22,18,1.6);light.position.set(0,2.7,1);root.add(light);
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
  cube(estate,'#816947',[0,.42,-4.6],[2.6,.85,.9]);cube(estate,'#decc9f',[0,.05,1],[3,.025,10]);
  for(let j=0;j<6;j++)cube(estate,'#777a6b',[3.5,.06*j,-4.75+j*.28],[1.7,.12,.65]);
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
  for(const p of PEOPLE){
    const bars=new T.Group();bars.name='cell-door-'+p.id;bars.position.set(p.x/SCALE,0,-1.5);cellar.add(bars);cellBars[p.id]=bars;
    for(let j=-2;j<=2;j++)tube(bars,'#475759',[j*.32,1.3,0],[.025,2.6,.025]);
    for(const y of [.1,2.5])cube(bars,'#475759',[0,y,0],[1.65,.055,.055]);
    for(const y of [.45,2.15])tube(bars,'#394447',[-.78,y,.07],[.045,.12,.045]);
    mesh(bars,geo('cell-padlock',()=>new T.TorusGeometry(.09,.022,6,12)),mat('#a68854'),[.61,1.42,.07]);
    cube(bars,'#a68854',[.61,1.27,.07],[.18,.20,.08]);
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
  const tracer=new T.Line(new T.BufferGeometry().setFromPoints([new T.Vector3(),new T.Vector3()]),new T.LineBasicMaterial({color:'#ffe8ad'}));scene.add(tracer);
  const cameraRay=new T.Raycaster(),cameraDirection=new T.Vector3();
  let yaw=0,pitch=.05,mode='first',last=0,enabled=true,lost=false,drag=null,oldArea,posedCharacters=0;
  let shadowSignature='',lastShadowUpdate=-Infinity,shadowUpdates=0;
  const initial=getState(),initialGoal=goal(initial).target;
  if(initialGoal)yaw=Math.atan2(initial.p.x-initialGoal.x,initial.p.z-initialGoal.z);
  function placeHuman(person,p,height,heading,walking,seconds){
    posedCharacters++;
    person.root.position.set(p.x/SCALE,height,p.z/SCALE);person.root.rotation.set(0,0,0);person.rig.rotation.y=heading;
    const phase=seconds*7,step=walking?.24:0;
    for(const leg of person.legs){leg.thigh.rotation.x=Math.sin(phase+(leg.side<0?Math.PI:0))*step;leg.calf.rotation.x=Math.max(0,-Math.sin(phase+(leg.side<0?Math.PI:0)))*step;leg.shoe.rotation.x=-leg.calf.rotation.x*.6;}
    for(const a of person.arms){a.arm.rotation.x=walking?Math.sin(phase+(a.side<0?0:Math.PI))*.25:0;a.arm.rotation.z=0;a.forearm.rotation.x=-.18;}
    person.hips.position.y=.87+(walking?Math.cos(phase*2)*.009:0);
  }
  function frame(now) {
    if(!enabled||lost)return;
    const s=getState(),seconds=now/1000;last=now;posedCharacters=0;surfaces.update();sky.material.uniforms.uTime.value=seconds;
    const area=s.interior;
    world.visible=!area;rooms.visible=!!area;
    for(const [id,root] of Object.entries(roomGroups))root.visible=id===area;
    scene.background.set(area?'#202c29':'#b9dbe5');scene.fog.color.copy(scene.background);
    hemi.intensity=area?.65:2.0;sun.intensity=area?.15:2.8;
    const surface=area?0:ground(s.p.x,s.p.z);
    self.root.visible=!s.boat||mode==='third';
    if(!s.boat){scene.add(self.root);placeHuman(self,s.p,surface,s.heading,s.walking,seconds);}
    self.rig.visible=mode==='third';
    boat.position.set((s.boat?s.p.x:docks[s.boatAt].x)/SCALE,.02,(s.boat?s.p.z:docks[s.boatAt].z)/SCALE);
    boat.rotation.y=s.boat?s.heading:Math.atan2(docks[s.boatAt].ux,docks[s.boatAt].uz);
    boat.rotation.z=s.boat?Math.sin(seconds*2)*.015:0;wake.visible=s.boat&&s.walking;
    if(s.boat)seatDriver(self,boat);
    paperMesh.visible=!s.paper;hiddenGun.visible=s.paper&&!s.gun;keyMesh.visible=!s.key&&s.guards.find(g=>g.id==='boss').hp===0;
    keyMesh.rotation.y=seconds;cellBars.forEach((b,i)=>b.visible=!s.released.includes(i));
    for(const g of s.guards){
      const p=guardModels.get(g.id),visible=g.area===area&&!s.boat&&(!g.area||s.island==='fortress');p.root.visible=visible;
      if(!visible)continue;
      placeHuman(p,g,g.area?0:ground(g.x,g.z),Math.atan2(s.p.x-g.x,s.p.z-g.z),g.hp>0&&dist2(g,s.p)<210,seconds);
      if(g.hp<=0){p.rig.rotation.x=-Math.PI/2;p.root.position.y+=(g.area?0:.15);p.root.scale.setScalar(.8);}
      else {p.rig.rotation.x=0;p.arms[1].arm.rotation.x=-1.05;p.arms[1].forearm.rotation.x=-.35;}
    }
    for(const p of PEOPLE){
      const model=prisoners.get(p.id),freed=s.released.includes(p.id);
      const visible=s.boarded?false:freed?(!s.boat&&(area==='estate'||area==='cellar'||s.island==='fortress')):area==='cellar';
      model.root.visible=visible;
      if(!visible)continue;
      const point=freed?{x:s.p.x-Math.sin(s.heading)*(35+p.id*15)+Math.cos(s.heading)*(p.id%2?16:-16),
        z:s.p.z-Math.cos(s.heading)*(35+p.id*15)-Math.sin(s.heading)*(p.id%2?16:-16)}:p;
      placeHuman(model,point,area?0:ground(point.x,point.z),s.heading,freed&&s.walking,seconds+p.id*.18);
    }
    const g=goal(s).target,n=nearby(s),mark=n||g;
    halo.visible=!!mark;
    if(mark)halo.position.set(mark.x/SCALE,(area?0:ground(mark.x,mark.z))+.08,mark.z/SCALE);
    halo.scale.setScalar(1+Math.sin(seconds*3)*.10);
    handheld.visible=s.gun&&!s.boat&&mode==='first';
    handheld.position.z=s.shot?.025:0;
    const cameraSurface=s.boat?.02+HELM.eye-1.64:surface;
    const driverOffset=s.boat?HELM.seatZ:0;
    const pose=cameraPose({x:s.p.x/SCALE+Math.sin(s.heading)*driverOffset,z:s.p.z/SCALE+Math.cos(s.heading)*driverOffset,
      surface:cameraSurface,yaw,pitch,mode,distance:s.boat?7.5:4.6});
    if(area&&mode==='third'){
      pose.position.x=T.MathUtils.clamp(pose.position.x,-5.1,5.1);
      pose.position.z=T.MathUtils.clamp(pose.position.z,-5.0,8.1);
    }
    if(!area&&mode==='third'){
      cameraDirection.subVectors(pose.position,pose.target);const length=cameraDirection.length();cameraDirection.normalize();
      cameraRay.set(pose.target,cameraDirection);cameraRay.far=length;
      const hit=cameraRay.intersectObjects(cameraBlockers,true).find(h=>h.distance>.2);
      if(hit)pose.position.copy(pose.target).addScaledVector(cameraDirection,Math.max(.35,hit.distance-.22));
      pose.position.y=Math.max(pose.position.y,ground(pose.position.x*SCALE,pose.position.z*SCALE)+.24);
    }
    camera.position.copy(pose.position);camera.lookAt(pose.target);
    stabilizeSunShadow(sun,s.p.x/SCALE,s.p.z/SCALE,{height:25});
    const guardWalking=s.guards.some(g=>g.area===area&&!s.boat&&(!g.area||s.island==='fortress')&&g.hp>0&&dist2(g,s.p)<210);
    const shadowAnimated=!s.paused&&(s.walking||s.boat||guardWalking);
    const nextShadowSignature=[area||'',s.island,s.boat?1:0,Math.round(s.p.x/20),Math.round(s.p.z/20),Math.round(s.heading*12),
      s.guards.map(g=>g.hp>0?1:0).join(''),s.released.join(','),s.boarded?1:0,shadowAnimated?1:0].join('|');
    const updateShadow=nextShadowSignature!==shadowSignature||(shadowAnimated&&now-lastShadowUpdate>=1000/30);
    renderer.shadowMap.needsUpdate=updateShadow;
    if(updateShadow){shadowSignature=nextShadowSignature;lastShadowUpdate=now;shadowUpdates++;}
    ocean.update(seconds,camera.position);sky.position.copy(camera.position);
    tracer.visible=!!s.shot;
    if(s.shot){
      const y=surface+1.35,a=s.shot.from,b=s.shot.to;
      tracer.geometry.setFromPoints([new T.Vector3(a.x/SCALE,y,a.z/SCALE),new T.Vector3(b.x/SCALE,y,b.z/SCALE)]);
    }
    if(oldArea!==area){oldArea=area;if(area)yaw=0;else if(g)yaw=Math.atan2(s.p.x-g.x,s.p.z-g.z);}
    renderer.render(scene,camera);
  }
  function resize(){camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight,false);}
  function orbit(dx,dy=0){if(getState().paused)return;yaw+=dx;pitch=T.MathUtils.clamp(pitch+dy,mode==='first'?-.95:-.05,.75);}
  canvas.addEventListener('pointerdown',e=>{if(getState().paused||e.button!==0)return;drag={id:e.pointerId,x:e.clientX,y:e.clientY};canvas.setPointerCapture(e.pointerId);});
  canvas.addEventListener('pointermove',e=>{if(drag?.id!==e.pointerId)return;orbit(-(e.clientX-drag.x)*.006,(e.clientY-drag.y)*.005);drag.x=e.clientX;drag.y=e.clientY;});
  for(const event of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(event,()=>drag=null);
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();lost=true;enabled=false;onLost?.();});
  return {frame,resize,orbit,setCamera(value){mode=value==='first'?'first':'third';pitch=mode==='first'?.05:.22;},
    get cameraMode(){return mode},get enabled(){return enabled&&!lost},
    vector:(x,z)=>({x:x*Math.cos(yaw)+z*Math.sin(yaw),z:-x*Math.sin(yaw)+z*Math.cos(yaw)}),
    aim:()=>yaw+Math.PI,setEnabled(v){enabled=!!v&&!lost},
    stats:()=>({calls:renderer.info.render.calls,triangles:renderer.info.render.triangles,eye:camera.position.toArray(),camera:mode,cameraBlockers:cameraBlockers.length,
      palmBatches:vegetation.treeBatches.length,largestPalmBatch:Math.max(...vegetation.treeBatches.map(o=>o.count)),posedCharacters,
      terrainTriangles:terrainMeshes.reduce((n,o)=>n+o.geometry.index.count/3,0),shadowUpdates}),
    dispose(){renderer.dispose();surfaces.dispose();const gs=new Set(geos.values()),ms=new Set(mats.values());scene.traverse(o=>{if(o.geometry)gs.add(o.geometry);if(o.material)for(const m of Array.isArray(o.material)?o.material:[o.material])ms.add(m);});gs.forEach(g=>g.dispose());ms.forEach(m=>m.dispose());paperMap.dispose();}
  };
}
function dist2(a,b){return Math.hypot(a.x-b.x,a.z-b.z);}

export { drawCampaign2D } from './campaign-2d.mjs';
