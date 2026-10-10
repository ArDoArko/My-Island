import * as T from 'three';
import { ISLANDS } from './archipelago-layout.mjs';
import { createIslandTerrain } from './archipelago-terrain.mjs';
import { createMaterials, cameraPose } from './island-environment.mjs';
import { SCALE, docks, points, PEOPLE, ground, goal, nearby } from './campaign.mjs';

export function createCampaignView({canvas,getState,makeHuman,onLost,rendererFactory=options=>new T.WebGLRenderer(options)}) {
  const renderer=rendererFactory({canvas,antialias:true,powerPreference:'high-performance'});
  const mobile=innerWidth<=700;
  renderer.setPixelRatio(Math.min(devicePixelRatio||1,mobile?1.1:1.5));
  renderer.setSize(innerWidth,innerHeight,false);
  renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;
  const scene=new T.Scene(),camera=new T.PerspectiveCamera(68,innerWidth/innerHeight,.04,500);
  scene.add(camera);scene.background=new T.Color('#b9dbe5');scene.fog=new T.Fog('#b9dbe5',95,280);
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
  scene.add(world,rooms);
  for(const i of ISLANDS){
    const land=createIslandTerrain(i,{segments:mobile?32:64});
    land.scale.set(1/SCALE,1,1/SCALE);land.position.set(i.x/SCALE,0,i.z/SCALE);
    const p=land.geometry.attributes.position;
    for(let j=0;j<p.count;j++)p.setY(j,ground(i.x+p.getX(j),i.z+p.getZ(j)));
    const colours=new Float32Array(p.count*3),c=new T.Color();
    for(let j=0;j<p.count;j++){
      const r=Math.hypot(p.getX(j),p.getZ(j))/i.radius;
      c.set(r>.85?'#decc9f':i.biome==='rocky'?'#8e9979':'#779967');
      c.toArray(colours,j*3);
    }
    land.geometry.setAttribute('color',new T.BufferAttribute(colours,3));land.geometry.computeVertexNormals();
    land.material.dispose();land.material=surfaces.surface('grass','#eee7d1',5,.05).clone();
    land.material.vertexColors=true;world.add(land);
    const beach=new T.Mesh(new T.RingGeometry(i.radius*.86/SCALE,i.radius*1.02/SCALE,72),surfaces.surface('sand','#e6dfc7',3,.04));
    beach.rotation.x=-Math.PI/2;beach.position.set(i.x/SCALE,.015,i.z/SCALE);beach.receiveShadow=true;world.add(beach);
    const dock=docks[i.id],bridge=new T.Group();bridge.position.set(dock.shore.x/SCALE,.18,dock.shore.z/SCALE);
    bridge.rotation.y=Math.atan2(dock.ux,dock.uz);world.add(bridge);
    const length=dist2(dock,dock.shore)/SCALE;
    cube(bridge,'#a98961',[0,.02,length/2],[1.5,.16,length+.6]);
    for(let j=0;j<=Math.ceil(length*3);j++)cube(bridge,'#876742',[0,.12,j/3],[1.47,.025,.06]);
    for(const x of [-.65,.65])for(const z of [0,length])tube(bridge,'#876742',[x,-.38,z],[.075,1.3,.075]);
    // Deterministic palms stay clear of the harbor and campaign interaction points.
    for(let j=0;j<(mobile?10:18);j++){
      const a=j*2.399+i.x*.001,r=i.radius*(.38+(j%5)*.075),x=i.x+Math.sin(a)*r,z=i.z+Math.cos(a)*r;
      if((i.id==='home'&&x>220)||(i.id==='jungle'&&dist2({x,z},points.cave)<100)||
        (i.id==='fortress'&&Math.abs(x-i.x)<125&&Math.abs(z-i.z)<145))continue;
      const palm=new T.Group();palm.position.set(x/SCALE,ground(x,z),z/SCALE);world.add(palm);
      const trunk=tube(palm,'#876742',[0,1.9,0],[.11,3.8,.11]);trunk.rotation.z=.1*Math.sin(j);
      for(let k=0;k<8;k++){
        const leaf=ell(palm,'#456d42',[Math.sin(k*Math.PI/4)*.9,3.65,Math.cos(k*Math.PI/4)*.9],[.28,.09,1.45]);
        leaf.rotation.y=k*Math.PI/4;leaf.rotation.x=.18;
      }
      for(let k=0;k<3;k++)ell(palm,'#8c6944',[(k-1)*.13,3.55,0],[.13,.17,.13]);
    }
    if(['paradise','smugglers','highlands'].includes(i.id)){
      const cache=new T.Group();cache.position.set(i.x/SCALE,ground(i.x,i.z),i.z/SCALE);world.add(cache);
      cube(cache,'#a98961',[0,.35,0],[1.3,.7,.8]);cube(cache,'#debb63',[0,.73,0],[1.4,.08,.85]);
    }
  }
  const seaMaterial=new T.ShaderMaterial({uniforms:{clock:{value:0}},vertexShader:
    'varying vec3 place; uniform float clock; void main(){vec3 p=position;p.y+=sin(p.x*.21+clock)*.035+cos(p.z*.31+clock*.8)*.025;place=p;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}',
    fragmentShader:'varying vec3 place; uniform float clock; void main(){float w=sin(place.x*1.4+place.z*1.8+clock*1.3);vec3 col=mix(vec3(.045,.29,.38),vec3(.10,.48,.52),.5+.5*w);float glint=pow(max(0.,sin(place.x*2.+place.z*.8+clock)),25.);gl_FragColor=vec4(col+glint*.11,1.);}'});
  const sea=new T.Mesh(new T.PlaneGeometry(650,650,72,72),seaMaterial);sea.geometry.rotateX(-Math.PI/2);sea.position.y=-.06;world.add(sea);
  const boat=new T.Group();world.add(boat);
  ell(boat,'#233f52',[0,.05,0],[.85,.36,1.9]);
  ell(boat,'#dedbd0',[0,.22,0],[.8,.23,1.85]);
  cube(boat,'#6e5942',[0,.4,-.15],[1.3,.08,2.7]);
  cube(boat,'#3b5355',[0,.57,-.6],[1.15,.30,.48]);
  cube(boat,'#e7e0d0',[0,.73,.5],[1,.65,.36]);
  const glass=new T.Mesh(new T.BoxGeometry(1.2,.48,.025),new T.MeshPhysicalMaterial({color:'#b9e4eb',transparent:true,opacity:.4,roughness:.1}));
  glass.position.set(0,1.15,.68);boat.add(glass);
  const wheel=new T.Mesh(new T.TorusGeometry(.20,.026,8,20),mat('#2e3538'));wheel.position.set(0,1.02,.28);boat.add(wheel);
  cube(boat,'#303b40',[0,.35,-1.75],[.42,.6,.38]);cube(boat,'#303b40',[0,-.12,-1.85],[.22,.65,.25]);
  const wake=new T.Mesh(new T.PlaneGeometry(1.5,5),new T.MeshBasicMaterial({color:'#d0ebe6',transparent:true,opacity:.25,depthWrite:false}));
  wake.rotation.x=-Math.PI/2;wake.position.set(0,.03,-3.3);boat.add(wake);
  const pump=new T.Group();pump.position.set(points.pump.x/SCALE,ground(points.pump.x,points.pump.z),points.pump.z/SCALE);world.add(pump);
  cube(pump,'#e6d6b8',[0,.6,0],[.75,1.2,.65]);cube(pump,'#bd6e4e',[0,1.30,0],[.78,.3,.68]);
  cube(pump,'#263f41',[0,.94,.34],[.42,.2,.04]);tube(pump,'#2d3435',[.53,.7,0],[.035,1.1,.035]);
  const caveEntrance=new T.Group();caveEntrance.position.set(points.cave.x/SCALE,ground(points.cave.x,points.cave.z),points.cave.z/SCALE);world.add(caveEntrance);
  for(const x of [-1.6,1.6])ell(caveEntrance,'#92968b',[x,1.5,0],[.7,1.7,1.3]);
  ell(caveEntrance,'#777a6b',[0,2.9,0],[2.1,.8,1.3]);
  cube(caveEntrance,'#171e19',[0,1.25,-.85],[2.8,2.5,.15]);
  const mansion=new T.Group();mansion.position.set(95,.85,27.5);world.add(mansion);
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
  for(let j=0;j<9;j++)ell(cave,'#777a6b',[-4.8+((j*3)%10),2.9,-5+j],[.25,.8,.25]);
  const table=cube(cave,'#a98961',[0,.75,-2],[2,.12,1.2]);
  for(const x of [-.75,.75])tube(cave,'#876742',[x,.35,-2],[.065,.7,.065]);
  const paperCanvas=document.createElement('canvas');paperCanvas.width=256;paperCanvas.height=320;
  const pc=paperCanvas.getContext('2d');pc.fillStyle='#ddd5bd';pc.fillRect(0,0,256,320);pc.fillStyle='#3a3b32';pc.font='bold 26px serif';pc.fillText('ISLAND DAILY',18,38);
  pc.fillRect(18,51,220,3);for(let j=0;j<20;j++){pc.fillRect(18,72+j*10,94-(j%4)*6,2);pc.fillRect(128,72+j*10,104-(j%3)*8,2);}
  const paperMap=new T.CanvasTexture(paperCanvas);paperMap.colorSpace=T.SRGBColorSpace;
  const paperMesh=new T.Mesh(new T.PlaneGeometry(.9,1.05),new T.MeshStandardMaterial({map:paperMap,side:T.DoubleSide}));
  paperMesh.rotation.x=-Math.PI/2;paperMesh.position.set(0,.83,-2);cave.add(paperMesh);
  function pistol(parent){
    const root=new T.Group();parent.add(root);
    cube(root,'#333a3d',[0,0,.06],[.12,.12,.34]);
    const grip=cube(root,'#695646',[0,-.11,-.03],[.10,.23,.13]);grip.rotation.x=-.22;
    cube(root,'#8b9294',[0,.08,.03],[.11,.035,.30]);return root;
  }
  const hiddenGun=pistol(cave);hiddenGun.position.set(0,.87,-2);hiddenGun.rotation.y=Math.PI/2;
  const estate=room('estate',11,15);
  cube(estate,'#816947',[0,.42,-4.6],[2.6,.85,.9]);cube(estate,'#decc9f',[0,.05,1],[3,.025,10]);
  for(let j=0;j<6;j++)cube(estate,'#777a6b',[3.5,.06*j,-4.75+j*.28],[1.7,.12,.65]);
  const keyMesh=new T.Mesh(new T.TorusGeometry(.13,.036,8,16),new T.MeshStandardMaterial({color:'#f8ce60',emissive:'#8c6322',emissiveIntensity:.5}));
  keyMesh.position.set(0,.88,-3);estate.add(keyMesh);cube(keyMesh,'#debb63',[0,-.20,0],[.065,.32,.065]);
  const cellar=room('cellar',11,15),cellBars=[];
  for(const p of PEOPLE){
    const bars=new T.Group();bars.position.set(p.x/SCALE,0,-1.5);cellar.add(bars);cellBars[p.id]=bars;
    for(let j=-2;j<=2;j++)tube(bars,'#475759',[j*.32,1.3,0],[.025,2.6,.025]);
    for(const y of [.1,2.5])cube(bars,'#475759',[0,y,0],[1.65,.055,.055]);
    cube(cellar,'#a68854',[p.x/SCALE,.18,-4.8],[1.55,.36,.8]);cube(cellar,'#e2dbc7',[p.x/SCALE,.4,-4.8],[1.5,.1,.8]);
  }
  const self=makeHuman({shirt:'#577c87',skin:'#ddb08c',hair:'#40362f'},'player',helpers);
  scene.add(self.root);const guardModels=new Map(),prisoners=new Map();
  for(const g of getState().guards){
    const person=makeHuman({shirt:g.id==='boss'?'#43433e':'#526252',skin:'#c29574',hair:'#302e28'},'guard',helpers);
    scene.add(person.root);pistol(person.arms[1].forearm).position.set(0,-.24,.14);guardModels.set(g.id,person);
  }
  for(const p of PEOPLE){
    const person=makeHuman({shirt:['#8da4b1','#b78876','#9caa8c','#c3b487','#92b2b6'][p.id],skin:'#dbb18d',hair:'#544432'},'resident',helpers);
    if(p.child)person.root.scale.setScalar(.72);scene.add(person.root);prisoners.set(p.id,person);
  }
  const handheld=new T.Group();camera.add(handheld);
  pistol(handheld).position.set(.26,-.23,-.48);const hand=ell(handheld,'#ddb08c',[.24,-.32,-.40],[.065,.085,.08]);
  const sleeve=tube(handheld,'#577c87',[.22,-.40,-.30],[.085,.24,.085]);sleeve.rotation.x=-.5;
  const halo=new T.Mesh(new T.TorusGeometry(.42,.035,8,32),new T.MeshBasicMaterial({color:'#f3d48a'}));
  halo.rotation.x=-Math.PI/2;scene.add(halo);
  const tracer=new T.Line(new T.BufferGeometry().setFromPoints([new T.Vector3(),new T.Vector3()]),new T.LineBasicMaterial({color:'#ffe8ad'}));scene.add(tracer);
  let yaw=0,pitch=.12,mode='third',last=0,enabled=true,lost=false,drag=null,oldArea;
  const initial=getState(),initialGoal=goal(initial).target;
  if(initialGoal)yaw=Math.atan2(initial.p.x-initialGoal.x,initial.p.z-initialGoal.z);
  function placeHuman(person,p,height,heading,walking,seconds){
    person.root.position.set(p.x/SCALE,height,p.z/SCALE);person.rig.rotation.y=heading;
    const phase=seconds*7,step=walking?.24:0;
    for(const leg of person.legs){leg.thigh.rotation.x=Math.sin(phase+(leg.side<0?Math.PI:0))*step;leg.calf.rotation.x=Math.max(0,-Math.sin(phase+(leg.side<0?Math.PI:0)))*step;leg.shoe.rotation.x=-leg.calf.rotation.x*.6;}
    for(const a of person.arms){a.arm.rotation.x=walking?Math.sin(phase+(a.side<0?0:Math.PI))*.25:0;a.forearm.rotation.x=-.18;}
    person.hips.position.y=.87+(walking?Math.cos(phase*2)*.009:0);
  }
  function frame(now) {
    if(!enabled||lost)return;
    const s=getState(),seconds=now/1000;last=now;surfaces.update();
    const area=s.interior;
    world.visible=!area;rooms.visible=!!area;
    for(const [id,root] of Object.entries(roomGroups))root.visible=id===area;
    scene.background.set(area?'#202c29':'#b9dbe5');scene.fog.color.copy(scene.background);
    hemi.intensity=area?.65:2.0;sun.intensity=area?.15:2.8;
    const surface=area?0:s.boat?.28:ground(s.p.x,s.p.z);
    self.root.visible=!s.boat||mode==='third';
    placeHuman(self,s.p,surface+(s.boat?.35:0),s.heading,s.walking&&!s.boat,seconds);
    self.rig.visible=mode==='third';
    boat.position.set((s.boat?s.p.x:docks[s.boatAt].x)/SCALE,.02,(s.boat?s.p.z:docks[s.boatAt].z)/SCALE);
    boat.rotation.y=s.boat?s.heading:Math.atan2(docks[s.boatAt].ux,docks[s.boatAt].uz);
    boat.rotation.z=s.boat?Math.sin(seconds*2)*.015:0;wake.visible=s.boat&&s.walking;
    if(s.boat){for(const a of self.arms){a.arm.rotation.x=-.8;a.forearm.rotation.x=-.4;}for(const l of self.legs){l.thigh.rotation.x=-1.1;l.calf.rotation.x=1.2;}}
    paperMesh.visible=!s.paper;hiddenGun.visible=s.paper&&!s.gun;keyMesh.visible=!s.key&&s.guards.find(g=>g.id==='boss').hp===0;
    keyMesh.rotation.y=seconds;cellBars.forEach((b,i)=>b.visible=!s.released.includes(i));
    for(const g of s.guards){
      const p=guardModels.get(g.id);p.root.visible=g.area===area&&!s.boat&&(!g.area||s.island==='fortress');
      placeHuman(p,g,g.area?0:ground(g.x,g.z),Math.atan2(s.p.x-g.x,s.p.z-g.z),g.hp>0&&dist2(g,s.p)<210,seconds);
      if(g.hp<=0){p.rig.rotation.x=-Math.PI/2;p.root.position.y+=(g.area?0:.15);p.root.scale.setScalar(.8);}
      else {p.rig.rotation.x=0;p.arms[1].arm.rotation.x=-1.05;p.arms[1].forearm.rotation.x=-.35;}
    }
    for(const p of PEOPLE){
      const model=prisoners.get(p.id),freed=s.released.includes(p.id);
      model.root.visible=s.boarded?false:freed?(!s.boat&&(area==='estate'||area==='cellar'||s.island==='fortress')):area==='cellar';
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
    const cameraSurface=s.boat?.75:surface;
    const pose=cameraPose({x:s.p.x/SCALE,z:s.p.z/SCALE,surface:cameraSurface,yaw,pitch,mode,distance:s.boat?7.5:4.6});
    if(area&&mode==='third'){
      pose.position.x=T.MathUtils.clamp(pose.position.x,-5.1,5.1);
      pose.position.z=T.MathUtils.clamp(pose.position.z,-5.0,8.1);
    }
    camera.position.copy(pose.position);camera.lookAt(pose.target);
    sun.position.set(s.p.x/SCALE-12,25,s.p.z/SCALE-8);sun.target.position.set(s.p.x/SCALE,0,s.p.z/SCALE);
    seaMaterial.uniforms.clock.value=seconds;
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
    stats:()=>({calls:renderer.info.render.calls,triangles:renderer.info.render.triangles,eye:camera.position.toArray(),camera:mode}),
    dispose(){renderer.dispose();surfaces.dispose();const gs=new Set(),ms=new Set();scene.traverse(o=>{if(o.geometry)gs.add(o.geometry);if(o.material)for(const m of Array.isArray(o.material)?o.material:[o.material])ms.add(m);});gs.forEach(g=>g.dispose());ms.forEach(m=>m.dispose());paperMap.dispose();}
  };
}
function dist2(a,b){return Math.hypot(a.x-b.x,a.z-b.z);}

export { drawCampaign2D } from './campaign-2d.mjs';
