import * as T from 'three';
import { BOARD, baseLayout } from './island-play.mjs';
import { colors, motionPose, MOTIONS } from './character.mjs';
import { createMaterials, cameraPose, addGroundCover, detailBase, terrainMask } from './island-environment.mjs';
import { createArchipelagoGroup } from './archipelago-terrain.mjs';

// Rendering only. Authoritative inventory, save ownership and room state stay in index.html.
export const SCALE = 80;
const coasts = [[1750,1300,1540,970],[3380,500,520,310],[4100,2400,390,290]];
const clamp = (v,a,b) => Math.max(a,Math.min(b,v));
const smooth = v => { v=clamp(v,0,1);return v*v*(3-2*v); };
const angleDelta = (a,b) => Math.atan2(Math.sin(b-a),Math.cos(b-a));
export function terrainHeight(x,z) {
  const px=x*SCALE,pz=z*SCALE;
  let edge=-1;
  for(const [cx,cz,rx,rz] of coasts)edge=Math.max(edge,1-Math.hypot((px-cx)/rx,(pz-cz)/rz));
  if(edge<=0)return -.32;
  const inland=smooth(edge/.17);
  return .015+inland*(.25+.28*(1+Math.sin(x*.23+1.3)*Math.cos(z*.27))+.12*Math.sin(x*.7)*Math.sin(z*.6));
}
export function cameraVector(x,y,yaw) {
  return {x:x*Math.cos(yaw)+y*Math.sin(yaw),y:-x*Math.sin(yaw)+y*Math.cos(yaw)};
}
export function legPose(y,z) {
  const upper=.43,lower=.43,d=clamp(Math.hypot(y,z),.08,upper+lower-.005);
  return {hip:-Math.atan2(z,-y)-Math.acos(clamp((upper*upper+d*d-lower*lower)/(2*upper*d),-1,1)),knee:Math.PI-Math.acos(clamp((upper*upper+lower*lower-d*d)/(2*upper*lower),-1,1))};
}
export function baseElevation(layout){
  if(!layout)return 0;
  return Math.max(...[-1,0,1].flatMap(x=>[-1,0,1].map(y=>{const p=layout.point(x*layout.width/2,y*layout.depth/2);return terrainHeight(p.x/SCALE,p.y/SCALE)})));
}
export function walkSurface(x,z,layout,elevation=baseElevation(layout)){
  const y=terrainHeight(x,z);if(!layout)return y;
  const f=layout.floor;if(Math.abs(x*SCALE-f.x)<=f.w/2&&Math.abs(z*SCALE-f.y)<=f.h/2)return Math.max(y,elevation+.16);
  // A short ramp connects the saved doorway to the higher level floor.
  const dx=x*SCALE-layout.center.x,dy=z*SCALE-layout.center.y,u=dx*layout.fy-dy*layout.fx,v=dx*layout.fx+dy*layout.fy;
  if(Math.abs(u)<layout.door/2&&v>layout.depth/2&&v<layout.depth/2+64)return y+(Math.max(y,elevation+.16)-y)*(1-(v-layout.depth/2)/64);
  return y;
}
// The renderer and geometry tests use these exact meshes, without a GPU mock.
export function buildBase(layout,elevation,helpers={}){
  const make=(parent,color,p,s,g)=>{const o=new T.Mesh(g,new T.MeshStandardMaterial({color}));o.position.set(...p);o.scale.set(...s);parent.add(o);return o};
  const cube=helpers.cube||((parent,color,p,s)=>make(parent,color,p,s,new T.BoxGeometry(1,1,1)));
  const tube=helpers.tube||((parent,color,p,s)=>make(parent,color,p,s,new T.CylinderGeometry(1,1,1,10)));
  const hut=new T.Group(),w=layout.width/SCALE,d=layout.depth/SCALE,h=layout.wallHeight/SCALE,ridge=layout.roofRidge/SCALE,door=layout.door/SCALE;
  hut.name='base';hut.position.set(layout.center.x/SCALE,elevation,layout.center.y/SCALE);hut.rotation.y=layout.yaw;
  cube(hut,'#a68854',[0,.08,0],[w,.16,d]).name='floor';
  for(const px of [-w/2+.1,w/2-.1])for(const pz of [-d/2+.1,d/2-.1])tube(hut,'#876742',[px,h/2,pz],[.075,h,.075]).name='post';
  for(const side of [-1,1]){const roof=cube(hut,'#ba7655',[side*w/4,(h+ridge)/2,0],[Math.hypot(w/2+.2,ridge-h),.1,d+.36]);roof.rotation.z=-side*Math.atan2(ridge-h,w/2+.2);roof.name='roof';}
  for(const wall of layout.walls){
    const dx=wall.x-layout.center.x,dy=wall.y-layout.center.y,x=(dx*layout.fy-dy*layout.fx)/SCALE,z=(dx*layout.fx+dy*layout.fy)/SCALE;
    cube(hut,'#e2dbc7',[x,h/2,z],[layout.fy?wall.w/SCALE:wall.h/SCALE,h,layout.fy?wall.h/SCALE:wall.w/SCALE]).name='wall';
  }
  if(layout.walls.length>=5){const dh=layout.doorHeight/SCALE;cube(hut,'#845f3f',[0,(h+dh)/2,d/2],[door,h-dh,.125]).name='lintel';}
  for(const bed of layout.beds){const dx=bed.x-layout.center.x,dy=bed.y-layout.center.y,x=(dx*layout.fy-dy*layout.fx)/SCALE,z=(dx*layout.fx+dy*layout.fy)/SCALE;
    cube(hut,'#7d654b',[x,.17,z],[.65,.34,1.125]).name='bed';cube(hut,'#cec6a0',[x,.38,z],[.65,.14,1.125]);cube(hut,'#ede3bd',[x,.49,z-.35],[.5,.09,.26]);}
  return hut;
}

// The same avatar meshes and action poses are exercised by geometry tests.
function personTool(kind,root,{cube,tube,ell}){
  if(kind==='gather'){tube(root,'#8c6944',[0,-.12,.15],[.025,.48,.025]);cube(root,'#8e9891',[0,.1,.15],[.27,.1,.075]);}
  if(kind==='fish'){const rod=tube(root,'#b2915b',[0,.22,.25],[.014,1.25,.014]);rod.rotation.x=-.6;const line=tube(root,'#d0e6df',[0,.37,.75],[.003,.62,.003]);line.rotation.x=.6;}
  if(kind==='cook'){const stick=tube(root,'#80613d',[0,-.12,.18],[.016,.5,.016]);stick.rotation.x=-.6;ell(root,'#bb9457',[0,-.26,.3],[.07,.04,.14]);}
}
export function buildHuman(look={},kind='player',helpers={}){
  const materials=new Map(),geometries=new Map();
  const mat=helpers.mat||(color=>{if(!materials.has(color))materials.set(color,new T.MeshStandardMaterial({color}));return materials.get(color)});
  const geo=helpers.geo||((key,create)=>{if(!geometries.has(key))geometries.set(key,create());return geometries.get(key)});
  const mesh=helpers.mesh||((parent,g,m,p=[0,0,0],s=[1,1,1])=>{const o=new T.Mesh(g,m);o.position.set(...p);o.scale.set(...s);parent.add(o);return o});
  const ell=helpers.ell||((parent,color,p,s)=>mesh(parent,geo('ball',()=>new T.SphereGeometry(1,14,10)),mat(color),p,s));
  const cube=helpers.cube||((parent,color,p,s)=>mesh(parent,geo('box',()=>new T.BoxGeometry(1,1,1)),mat(color),p,s));
  const tube=helpers.tube||((parent,color,p,s)=>mesh(parent,geo('cyl',()=>new T.CylinderGeometry(1,1,1,10)),mat(color),p,s));
    const root=new T.Group(),rig=new T.Group();root.add(rig);
    const skin=look.skin||'#dda879',hair=look.hair||'#43332b',shirt=look.shirt||'#4c9cba';
    const hips=new T.Group();hips.position.y=.87;rig.add(hips);
    ell(hips,'#3f4d4f',[0,.05,0],[.22,.17,.13]);
    ell(hips,shirt,[0,.36,0],[.255,.31,.15]);
    cube(hips,'#3b4c48',[0,.135,-.01],[.4,.045,.255]);
    tube(hips,skin,[0,.64,0],[.064,.13,.064]);
    const head=new T.Group();head.position.y=.79;hips.add(head);
    ell(head,skin,[0,0,0],[.135,.175,.133]);
    ell(head,skin,[-.137,-.005,0],[.025,.048,.025]);ell(head,skin,[.137,-.005,0],[.025,.048,.025]);
    ell(head,skin,[0,-.015,.136],[.026,.033,.036]);
    for(const side of [-1,1]){
      ell(head,'#f6f3df',[side*.052,.02,.115],[.030,.017,.014]);
      ell(head,'#31433e',[side*.053,.02,.128],[.012,.013,.007]);
      cube(head,hair,[side*.052,.061,.11],[.062,.01,.014]);
    }
    cube(head,'#af735b',[0,-.071,.117],[.051,.009,.012]);
    const hairG=geo('hair',()=>new T.SphereGeometry(1,16,10,0,Math.PI*2,0,Math.PI*.56));
    mesh(head,hairG,mat(kind==='nela'?'#8d4931':hair),[0,.015,-.015],[.145,.18,.143]);
    const hairStyles=[new T.Group(),new T.Group(),new T.Group()];hairStyles.forEach(g=>head.add(g));
    const cap=head.children.find(o=>o.isMesh&&o.geometry===hairG);head.remove(cap);hairStyles[0].add(cap);
    mesh(hairStyles[1],hairG,mat(hair),[0,.015,-.015],[.145,.18,.143]);
    ell(hairStyles[1],hair,[0,-.04,-.17],[.072,.14,.08]);
    for(let i=0;i<12;i++){const a=i*Math.PI*2/12;ell(hairStyles[2],hair,[Math.sin(a)*.1,.10+(i%2)*.018,Math.cos(a)*.1-.015],[.066,.067,.066]);}
    ell(hairStyles[2],hair,[0,.15,-.015],[.09,.054,.09]);
    if(kind==='nela')ell(head,'#8d4931',[0,-.045,-.145],[.125,.21,.07]);
    hairStyles.forEach((g,i)=>g.visible=i===(look.style||0));
    if(kind==='leon'){
      tube(head,'#c5a775',[0,.15,0],[.16,.12,.16]);tube(head,'#c5a775',[0,.095,0],[.22,.028,.22]);
      cube(hips,'#e4cda1',[0,.23,.145],[.33,.42,.025]);
    }else if(kind==='player'){
      ell(hips,'#5d735b',[0,.36,-.17],[.18,.22,.09]);
      for(const side of [-1,1])cube(hips,'#b6caa4',[side*.17,.38,-.04],[.034,.35,.029]);
    }
    const arms=[],legs=[];
    for(const side of [-1,1]){
      const arm=new T.Group();arm.position.set(side*.27,.54,0);hips.add(arm);
      tube(arm,shirt,[0,-.095,0],[.087,.19,.087]);tube(arm,skin,[0,-.24,0],[.061,.15,.061]);
      const forearm=new T.Group();forearm.position.y=-.31;arm.add(forearm);tube(forearm,skin,[0,-.13,0],[.053,.26,.053]);ell(forearm,skin,[0,-.28,0],[.06,.082,.046]);
      arms.push({arm,forearm,side});
      const thigh=new T.Group();thigh.position.set(side*.115,0,0);hips.add(thigh);
      tube(thigh,'#52625f',[0,-.21,0],[.093,.42,.093]);
      const calf=new T.Group();calf.position.y=-.43;thigh.add(calf);tube(calf,'#52625f',[0,-.18,0],[.069,.36,.069]);
      const shoe=ell(calf,'#4b3b2e',[0,-.395,.055],[.075,.052,.14]);legs.push({thigh,calf,shoe,side});
    }
    const spear=new T.Group();tube(spear,'#8c6944',[0,.56,0],[.018,1.75,.018]);ell(spear,'#dad9c5',[0,1.45,0],[.045,.15,.03]);spear.position.set(.35,.2,.08);rig.add(spear);spear.visible=false;
    const props={};
    for(const key of ['gather','fish','cook']){const prop=new T.Group();personTool(key,prop,{cube,tube,ell});prop.position.set(0,-.28,0);arms[1].forearm.add(prop);prop.visible=false;props[key]=prop;}
    const raft=new T.Group();root.add(raft);for(let i=0;i<5;i++){const log=tube(raft,'#a17d48',[(i-2)*.25,.08,0],[.115,1.7,.115]);log.rotation.x=Math.PI/2;}for(const z of [-.5,.5])cube(raft,'#6e5937',[0,.19,z],[1.24,.05,.1]);raft.visible=false;
    const shirtParts=[],skinParts=[],hairParts=[];
    rig.traverse(o=>{if(o.isMesh){if(o.material===mat(shirt))shirtParts.push(o);if(o.material===mat(skin))skinParts.push(o);if(o.material===mat(hair))hairParts.push(o);}});
    return {root,rig,hips,head,arms,legs,spear,raft,shirtParts,skinParts,hairParts,hairStyles,props,yaw:0,lastX:null,lastZ:null,phase:0};
}

export function actionPose(person,motion){
  const pose=motion&&motionPose(motion.kind,motion.phase);person.rig.rotation.x=pose?.bend||0;
  for(const [kind,prop] of Object.entries(person.props))prop.visible=!!pose&&motion.kind===kind;
  if(!pose)return;
  for(const arm of person.arms){arm.arm.rotation.x=arm.side<0?pose.left:pose.right;arm.forearm.rotation.x=-.25;arm.arm.rotation.z=-arm.side*.08+(arm.side>0||motion.kind==='cheer'?pose.wave||0:0);}
}
export function fishPose(point,seconds,sea){
  const phase=point.phase||0,x=point.x+Math.sin(seconds*.65+phase)*14,y=point.y+Math.cos(seconds*.65+phase)*14;
  if(!sea(x,y))return null;
  return {x:x/SCALE,z:y/SCALE,y:.055+Math.sin(seconds*3+phase)*.008,yaw:Math.atan2(Math.cos(seconds*.65+phase),-Math.sin(seconds*.65+phase))};
}

export function create({canvas,terrain,getState,onLost}) {
  const renderer=new T.WebGLRenderer({canvas,antialias:true,powerPreference:'high-performance'});
  const small=innerWidth<=700;
  renderer.setPixelRatio(Math.min(devicePixelRatio||1,small?1.25:1.6));
  renderer.setSize(innerWidth,innerHeight,false);
  renderer.outputColorSpace=T.SRGBColorSpace;
  renderer.toneMapping=T.ACESFilmicToneMapping;
  renderer.toneMappingExposure=.94;
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;
  const scene=new T.Scene();scene.background=new T.Color('#c5dbe5');scene.fog=new T.Fog('#c5dbe5',42,115);
  const camera=new T.PerspectiveCamera(72,innerWidth/innerHeight,.04,350);scene.add(camera);
  const hemi=new T.HemisphereLight('#c9e3ff','#71694d',1.85);scene.add(hemi);
  const sun=new T.DirectionalLight('#fff0d2',3.1);sun.castShadow=true;
  sun.shadow.mapSize.set(small?1024:2048,small?1024:2048);sun.shadow.camera.left=-16;sun.shadow.camera.right=16;
  sun.shadow.camera.top=16;sun.shadow.camera.bottom=-16;sun.shadow.camera.near=.5;sun.shadow.camera.far=65;
  sun.shadow.bias=-.00012;sun.shadow.normalBias=.012;scene.add(sun,sun.target);
  const materials=createMaterials(renderer);
  const mats=new Map(),geos=new Map();
  function mat(color,extra={}) {if(!Object.keys(extra).length){const textured=materials.forColor(color);if(textured)return textured;}const key=color+JSON.stringify(extra);if(!mats.has(key))mats.set(key,new T.MeshStandardMaterial({color,roughness:.86,...extra}));return mats.get(key);}
  function geo(key,fn){if(!geos.has(key))geos.set(key,fn());return geos.get(key);}
  function ball(){return geo('ball',()=>new T.SphereGeometry(1,14,10));}
  function box(){return geo('box',()=>new T.BoxGeometry(1,1,1));}
  function cyl(){return geo('cyl',()=>new T.CylinderGeometry(1,1,1,10));}
  function mesh(parent,g,m,p=[0,0,0],s=[1,1,1],shadow=true) {
    const object=new T.Mesh(g,m);object.position.set(...p);object.scale.set(...s);
    object.castShadow=shadow;object.receiveShadow=true;parent.add(object);return object;
  }
  function ell(parent,color,p,s){return mesh(parent,ball(),mat(color),p,s);}
  function cube(parent,color,p,s){return mesh(parent,box(),mat(color),p,s);}
  function tube(parent,color,p,s){return mesh(parent,cyl(),mat(color),p,s);}
  const dummy=new T.Object3D();

  // A shared terrain surface follows the original coastline and trails exactly.
  const groundGeo=new T.PlaneGeometry(4600/SCALE,2900/SCALE,230,145);groundGeo.rotateX(-Math.PI/2);
  groundGeo.translate(2300/SCALE,0,1450/SCALE);
  const position=groundGeo.attributes.position;
  for(let i=0;i<position.count;i++)position.setY(i,terrainHeight(position.getX(i),position.getZ(i)));
  groundGeo.computeVertexNormals();
  const splat=terrainMask(terrain),map=new T.CanvasTexture(splat);map.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());
  const land=materials.ground(map);
  const ground=new T.Mesh(groundGeo,land);ground.receiveShadow=true;scene.add(ground);
  // Phase 1: draw the new islands beyond the eastern edge of the legacy map.
  // Keep the original coastline and save-coordinate system completely intact.
  const archipelago=createArchipelagoGroup({segments:small?24:48});
  archipelago.scale.set(1/SCALE,1,1/SCALE);
  archipelago.position.x=6500/SCALE;
  scene.add(archipelago);
  const meadow=addGroundCover(scene,terrainHeight,SCALE,splat,small);
  const waterGeo=new T.PlaneGeometry(700,700,100,100);waterGeo.rotateX(-Math.PI/2);
  const waterMat=new T.ShaderMaterial({uniforms:{uTime:{value:0},uEye:{value:new T.Vector3()}},vertexShader:`
    uniform float uTime;varying vec3 vWorld;
    void main(){vec3 p=position;p.y+=sin(p.x*.55+uTime*.8)*.018+sin(p.z*.7-uTime*.6)*.016;vWorld=(modelMatrix*vec4(p,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(vWorld,1.);}`,
    fragmentShader:`uniform float uTime;uniform vec3 uEye;varying vec3 vWorld;
    float edge(vec2 p,vec2 c,vec2 r){return abs(length((p-c)/r)-1.);}
    void main(){vec2 p=vWorld.xz;float wave=sin(p.x*5.+p.y*4.-uTime*1.5)+sin(p.y*7.-p.x*3.+uTime);
    vec3 n=normalize(vec3(cos(p.x*5.+p.y*4.-uTime*1.5)*.11,1.,sin(p.y*7.-p.x*3.+uTime)*.1));
    vec3 view=normalize(uEye-vWorld);float fresnel=pow(1.-max(dot(n,view),0.),3.);
    vec3 color=mix(vec3(.012,.24,.32),vec3(.52,.72,.80),fresnel);
    float shore=min(edge(p,vec2(21.875,16.25),vec2(19.25,12.125)),min(edge(p,vec2(42.25,6.25),vec2(6.5,3.875)),edge(p,vec2(51.25,30.),vec2(4.875,3.625))));
    float shallow=1.-smoothstep(.01,.16,shore);color=mix(color,vec3(.07,.62,.59),shallow*(1.-fresnel)*.8);
    float foam=(1.-smoothstep(.006,.025,shore))*(.5+.5*sin(uTime*1.5+wave));
    float shine=pow(max(dot(reflect(normalize(vec3(-.45,-1.,-.2)),n),view),0.),75.);
    color+=wave*.006+shine*.9;gl_FragColor=vec4(mix(color,vec3(.90,.95,.88),foam*.75),1.);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    }`});
  const ocean=new T.Mesh(waterGeo,waterMat);ocean.position.set(28,0,18);scene.add(ocean);

  const skyGeo=new T.SphereGeometry(180,24,12);
  const sky=new T.Mesh(skyGeo,new T.ShaderMaterial({side:T.BackSide,depthWrite:false,uniforms:{},vertexShader:`varying vec3 vSky;void main(){vSky=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
  fragmentShader:`varying vec3 vSky;
  float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
  float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.)),f.x),f.y);}
  float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*noise(p);p=p*2.03+vec2(7.,3.);a*=.5;}return v;}
  void main(){vec3 dir=normalize(vSky);float h=dir.y;vec3 color=mix(vec3(.68,.79,.85),vec3(.08,.31,.55),smoothstep(0.,.85,h));
  vec2 p=dir.xz/max(.12,h)*2.8;float n=fbm(p);float clouds=smoothstep(.54,.72,n)*smoothstep(.02,.20,h);
  color=mix(color,mix(vec3(.64,.70,.74),vec3(.98,.96,.91),smoothstep(.5,.72,n)),clouds);
  float halo=pow(max(dot(dir,normalize(vec3(-.55,.82,-.36))),0.),35.);color+=vec3(.22,.16,.07)*halo;
  gl_FragColor=vec4(color,1.);#include <colorspace_fragment>}`.replace(';#include',';\n#include')}));
  sky.renderOrder=-10;sky.frustumCulled=false;scene.add(sky);

  // Real leaf silhouettes, still batched for phones.
  function frondGeometry(){
    const vertices=[],indices=[],uv=[];
    const point=(a,t,side,width)=>{const r=t*2.05,y=Math.sin(t*Math.PI)*.46-t*t*.8;return [Math.sin(a)*r+Math.cos(a)*width*side,y-width*.22,Math.cos(a)*r-Math.sin(a)*width*side];};
    for(let leaf=0;leaf<11;leaf++){
      const a=leaf*Math.PI*2/11;
      for(let j=1;j<17;j++)for(const side of [-1,1]){
        const t=j/18,width=Math.sin(t*Math.PI)*.42,offset=vertices.length/3;
        vertices.push(...point(a,t-.023,side,.015),...point(a,t-.085,side,width),...point(a,t+.038,side,width*.88),...point(a,t+.025,side,.015));
        uv.push(t,0,t,.9,t+.03,1,t+.03,0);indices.push(offset,offset+1,offset+2,offset,offset+2,offset+3);
      }
    }
    const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(vertices,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(indices);g.computeVertexNormals();return g;
  }
  const trunkGeo=new T.CylinderGeometry(.085,.16,4.35,14,12);trunkGeo.translate(0,2.175,0);
  for(let i=0;i<trunkGeo.attributes.position.count;i++){const p=trunkGeo.attributes.position;p.setX(i,p.getX(i)+.16*(p.getY(i)/4.35)**2);}trunkGeo.computeVertexNormals();
  const trunkMat=mat('#9d7750',{bumpMap:materials.textures.get('rock'),bumpScale:.025});
  trunkMat.onBeforeCompile=shader=>{shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying float vTrunkY;').replace('#include <begin_vertex>','#include <begin_vertex>\nvTrunkY=position.y;');shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nvarying float vTrunkY;').replace('#include <color_fragment>','#include <color_fragment>\ndiffuseColor.rgb*=.80+.20*smoothstep(.1,.25,fract(vTrunkY*7.));');};
  const leafGeo=frondGeometry(),leafMat=materials.surface('leaf','#ffffff',1,.018).clone();leafMat.side=T.DoubleSide;
  const leafWind={value:0};leafMat.onBeforeCompile=shader=>{shader.uniforms.uWind=leafWind;shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nuniform float uWind;').replace('#include <begin_vertex>','#include <begin_vertex>\ntransformed.y+=sin(uWind+position.x*2.0+position.z)*length(position.xz)*.018;');};
  const batches={
    tree:new T.InstancedMesh(trunkGeo,trunkMat,400),
    leaves:new T.InstancedMesh(leafGeo,leafMat,400),
    rock:new T.InstancedMesh(new T.IcosahedronGeometry(1,2),mat('#92968b'),400),
    food:new T.InstancedMesh(ball(),mat('#7a5638'),400),
    shell:new T.InstancedMesh(new T.SphereGeometry(1,12,6,0,Math.PI),mat('#f1d0b7'),400)
  };
  for(const b of Object.values(batches)){b.count=0;b.castShadow=true;b.receiveShadow=true;b.frustumCulled=false;scene.add(b);}
  function resources(objects,seconds){
    const counts={tree:0,leaves:0,rock:0,food:0,shell:0};
    for(const o of objects){
      const x=o.x/SCALE,z=o.y/SCALE,y=terrainHeight(x,z),p=o.phase||0;
      if(o.t==='tree'){
        const size=.84+.17*Math.sin(o.x*.033+o.y*.027),height=1.35+.28*Math.cos(p);
        dummy.position.set(x,y,z);dummy.rotation.set(.03*Math.sin(p),p,.04*Math.cos(p));dummy.scale.set(size,height,size);dummy.updateMatrix();batches.tree.setMatrixAt(counts.tree++,dummy.matrix);
        dummy.position.set(x+.16*size*Math.cos(p),y+4.3*height,z-.16*size*Math.sin(p));dummy.rotation.set(Math.sin(seconds*.7+p)*.025,p,Math.cos(seconds*.6+p)*.025);
        dummy.scale.set(size,size,size);dummy.updateMatrix();batches.leaves.setMatrixAt(counts.leaves++,dummy.matrix);
      }else if(batches[o.t]){
        dummy.position.set(x,y+(o.t==='rock'?.23:o.t==='food'?.13:.025),z);dummy.rotation.set(0,p,0);
        dummy.scale.set(...(o.t==='rock'?[.34+.18*Math.abs(Math.sin(p)),.3,.4]:o.t==='food'?[.15,.13,.15]:[.12,.04,.14]));dummy.updateMatrix();batches[o.t].setMatrixAt(counts[o.t]++,dummy.matrix);
      }
    }
    for(const [key,b] of Object.entries(batches)){b.count=counts[key];b.instanceMatrix.needsUpdate=true;}
  }

  function textSprite(text,color='#ffe9b5') {
    const c=document.createElement('canvas');c.width=512;c.height=96;const ctx=c.getContext('2d');
    ctx.fillStyle='#123e43';ctx.beginPath();ctx.roundRect(6,10,500,76,25);ctx.fill();ctx.fillStyle=color;
    ctx.font='700 29px system-ui';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(String(text).slice(0,45),256,48,480);
    const texture=new T.CanvasTexture(c);texture.colorSpace=T.SRGBColorSpace;
    const sprite=new T.Sprite(new T.SpriteMaterial({map:texture,depthTest:true,transparent:true}));sprite.scale.set(2.45,.46,1);sprite.position.y=2.32;return sprite;
  }
  const shirtColors=['#4c9cba','#df8168','#9974c7','#76b677'];
  function human(look={},kind='player',name=''){const person=buildHuman(look,kind,{ell,cube,tube,mesh,mat,geo});scene.add(person.root);person.name=name;person.tag=null;if(name){person.tag=textSprite(name,look.shirt);person.root.add(person.tag);}return person;}
  const self=human(colors());const people=new Map();
  const merchant=human({skin:'#d1a074',shirt:'#b49966'},'leon','LEON · HANDEL');
  const guide=human({skin:'#edc39a',shirt:'#609991'},'nela','NELA · ZADANIA');
  function updateName(person,name,color) {
    if (!name || name === person.name) return;
    if (person.tag) {
      person.root.remove(person.tag);
      person.tag.material.map.dispose();
      person.tag.material.dispose();
    }
    person.name=name;person.tag=textSprite(name,color);person.root.add(person.tag);
  }
  function updateLook(person,look){
    if(person.lookKey===JSON.stringify(look))return;person.lookKey=JSON.stringify(look);
    for(const p of person.shirtParts)p.material=mat(look.shirt||'#4c9cba');for(const p of person.skinParts)p.material=mat(look.skin||'#dda879');for(const p of person.hairParts)p.material=mat(look.hair||'#43332b');
    person.hairStyles.forEach((g,i)=>g.visible=i===(look.style||0));
  }
  let frameBase=null,frameElevation=0;
  function animatePerson(person,point,lookYaw,isMoving,seconds,step,speed,state) {
    const x=point.x/SCALE,z=point.y/SCALE,wet=state.sea(point.x,point.y);
    const surface=wet?0:walkSurface(x,z,frameBase,frameElevation);
    person.root.position.set(x,surface+(wet?(state.raft?.18:-.95):0),z);
    person.yaw+=angleDelta(person.yaw,lookYaw)*Math.min(1,step*12);person.rig.rotation.y=person.yaw;
    const active=isMoving&&speed>.05;person.phase+=active?step*(speed>4?10:7):0;
    const amount=active?(speed>4?.31:.22):0,phase=person.phase;
    person.hips.position.y=(active?.90:.92)+(active?Math.cos(phase*2)*.012:Math.sin(seconds*1.7)*.004);
    for(const leg of person.legs){
      const p=phase+(leg.side<0?Math.PI:0),stride=Math.sin(p)*amount,lift=active?Math.max(0,Math.cos(p))*.105:0;
      const sx=x+Math.cos(person.yaw)*leg.side*.115+Math.sin(person.yaw)*stride;
      const sz=z-Math.sin(person.yaw)*leg.side*.115+Math.cos(person.yaw)*stride;
      const slope=wet?0:walkSurface(sx,sz,frameBase,frameElevation)-surface;
      const pose=legPose(-person.hips.position.y+.07+slope+lift,stride);
      leg.thigh.rotation.x=pose.hip;leg.calf.rotation.x=pose.knee;leg.shoe.rotation.x=-pose.hip-pose.knee;
    }
    for(const arm of person.arms){
      arm.arm.rotation.x=active?Math.sin(phase+(arm.side<0?0:Math.PI))*.45:Math.sin(seconds*1.3+arm.side)*.025;
      arm.arm.rotation.z=-arm.side*.07;arm.forearm.rotation.x=active?-.22:-.08;
      if(wet&&!state.raft){arm.arm.rotation.x=-Math.PI/2+Math.sin(phase+arm.side)*.35;arm.forearm.rotation.x=-.28;}
    }
    actionPose(person,state.motion);
    person.raft.visible=!!(wet&&state.raft);person.raft.rotation.y=person.yaw;person.spear.visible=!!state.spear&&!wet&&!state.motion;
    if(state.blocked){person.arms[0].arm.rotation.x=-1;person.arms[0].forearm.rotation.x=-1;}
    if(person.tag)person.tag.visible=Math.hypot(x-self.root.position.x,z-self.root.position.z)<13;
    person.lastX=x;person.lastZ=z;
  }

  const stall=new T.Group();scene.add(stall);
  for(const x of [-.55,.55])for(const z of [-.27,.27])tube(stall,'#866642',[x,1.24,z],[.038,2.48,.038]);
  cube(stall,'#a7c4b7',[0,.34,0],[1.24,.68,.67]);
  cube(stall,'#a98961',[0,.69,0],[1.24,.09,.67]);
  for(const side of [-1,1]){const roof=cube(stall,'#ba7655',[side*.39,2.63,0],[.9,.07,1.14]);roof.rotation.z=-side*.34;}
  const ridge=tube(stall,'#ba7655',[0,2.79,0],[.055,1.18,.055]);ridge.rotation.x=Math.PI/2;
  for(const z of [-.50,.50])cube(stall,'#e2dbc7',[0,2.4,z],[1.7,.1,.07]);
  for(let i=0;i<5;i++)cube(stall,'#a98961',[(i-2)*.24,.32,.344],[.21,.53,.025]);
  for(let i=0;i<4;i++)ell(stall,'#b1b967',[(i-1.5)*.19,.78,0],[.09,.08,.08]);

  const chestRoot=new T.Group();scene.add(chestRoot);
  cube(chestRoot,'#765734',[0,.18,0],[.56,.36,.4]);cube(chestRoot,'#9a743e',[0,.39,0],[.6,.1,.42]);
  for(const x of [-.19,.19])cube(chestRoot,'#d5b15a',[x,.2,.215],[.045,.35,.026]);cube(chestRoot,'#ecd178',[0,.32,.22],[.08,.09,.03]);
  const marker=new T.Mesh(new T.RingGeometry(.24,.29,32),new T.MeshBasicMaterial({color:'#ffe087',transparent:true,opacity:.8,side:T.DoubleSide,depthWrite:false}));marker.rotation.x=-Math.PI/2;scene.add(marker);
  const boardPerson={root:new T.Group(),tag:null,name:null};scene.add(boardPerson.root);boardPerson.root.position.set(BOARD.x/SCALE,terrainHeight(BOARD.x/SCALE,BOARD.y/SCALE),BOARD.y/SCALE);
  tube(boardPerson.root,'#786040',[0,.95,0],[.12,1.9,.12]);cube(boardPerson.root,'#234f58',[0,1.65,0],[1.55,.55,.1]);
  const trailRoot=new T.Group();scene.add(trailRoot);
  const trailRing=new T.Mesh(new T.RingGeometry(.93,1.06,40),new T.MeshBasicMaterial({color:'#54e4ef',transparent:true,opacity:.85,side:T.DoubleSide,depthWrite:false}));trailRing.rotation.x=-Math.PI/2;trailRing.position.y=.04;trailRoot.add(trailRing);
  const trailBeam=mesh(trailRoot,new T.CylinderGeometry(.035,.035,1,8),new T.MeshBasicMaterial({color:'#76eff7',transparent:true,opacity:.5}),[0,1.25,0],[1,2.5,1],false);
  let trailTag=null,trailNumber=0;
  let buildingsKey='',buildings=new T.Group(),fireLight=null,flame=null,cutaway=[];scene.add(buildings);
  function updateBuildings(s){
    const n=s.activities?.completed||0,ready=n>=3&&s.activities.gardenClaimed<n;
    const key=JSON.stringify([s.baseLevel,s.basePos,s.campfire,s.fire,n>=1,n>=3,n>=6,ready,s.activities?.raceWon]);if(key===buildingsKey)return;buildingsKey=key;
    if(flame){flame.geometry.dispose();flame.material.dispose();}for(const m of cutaway)m.dispose();cutaway=[];scene.remove(buildings);buildings=new T.Group();scene.add(buildings);flame=null;fireLight=null;
    if(s.basePos&&s.baseLevel){
      const b=frameBase,hut=detailBase(buildBase(b,frameElevation,{cube,tube}),b,{cube,tube},materials);buildings.add(hut);
      hut.traverse(o=>{if(['roof','wall','lintel'].includes(o.name)){o.material=o.material.clone();o.material.transparent=true;cutaway.push(o.material)}});
      if(n>=1)for(const side of [-1,1]){const lamp=ell(hut,'#ffdc80',[side*(b.width/SCALE/2-.15),2.35,b.depth/SCALE/2],[.09,.14,.09]);lamp.material=mat('#ffdc80',{emissive:'#dca739',emissiveIntensity:.7});}
      if(n>=6){tube(hut,'#6e5942',[b.width/SCALE/2+.2,1.75,-b.depth/SCALE/2],[.03,3.5,.03]);cube(hut,'#5bbca9',[b.width/SCALE/2+.55,3.1,-b.depth/SCALE/2],[.7,.42,.03]);}
      if(n>=3&&s.garden){const p=s.garden,g=new T.Group();g.position.set(p.x/SCALE,terrainHeight(p.x/SCALE,p.y/SCALE),p.y/SCALE);buildings.add(g);cube(g,'#785d40',[0,.07,0],[1.35,.14,1]);
        for(const x of [-.4,0,.4])for(const z of [-.25,.25]){tube(g,'#587b37',[x,.21,z],[.025,.3,.025]);ell(g,'#6caa49',[x,.35,z],[.16,.12,.12]);if(ready)ell(g,'#cfa565',[x+.055,.27,z],[.07,.065,.07]);}}
    }
    if(s.campfire&&s.fire){
      const f=new T.Group(),x=s.fire.x/SCALE,z=s.fire.y/SCALE;f.position.set(x,terrainHeight(x,z),z);buildings.add(f);
      for(let i=0;i<8;i++){const a=i*Math.PI/4;ell(f,'#777a6b',[Math.sin(a)*.3,.07,Math.cos(a)*.3],[.095,.07,.105]);}
      for(const a of [.5,-.5]){const log=tube(f,'#614b35',[0,.09,0],[.06,.5,.06]);log.rotation.z=Math.PI/2;log.rotation.y=a;}
      flame=mesh(f,new T.ConeGeometry(.17,.46,8),new T.MeshBasicMaterial({color:'#ffb647',transparent:true,opacity:.88}),[0,.28,0]);
      fireLight=new T.PointLight('#ffa145',2.5,4);fireLight.position.y=.5;f.add(fireLight);
    }
  }
  const boars=[];
  function newBoar(){const root=new T.Group();scene.add(root);ell(root,'#765745',[0,.29,0],[.24,.25,.43]);ell(root,'#765745',[0,.3,.4],[.19,.18,.2]);ell(root,'#ae8b68',[0,.26,.58],[.11,.065,.065]);for(const side of [-1,1]){const ear=mesh(root,new T.ConeGeometry(.08,.17,3),mat('#644937'),[side*.13,.47,.43]);ear.rotation.z=side*.45;}const legs=[];for(const x of [-.17,.17])for(const z of [-.27,.24])legs.push(tube(root,'#5e493b',[x,.105,z],[.037,.2,.037]));return {root,legs,lastX:null,lastZ:null};}
  function updateBoars(list,seconds){while(boars.length<list.length)boars.push(newBoar());for(let i=0;i<boars.length;i++){const b=boars[i],e=list[i];b.root.visible=!!e;if(!e){b.lastX=b.lastZ=null;continue}const x=e.x/SCALE,z=e.y/SCALE,dx=b.lastX===null?0:x-b.lastX,dz=b.lastZ===null?0:z-b.lastZ,walking=Math.hypot(dx,dz)>.0001;b.root.position.set(x,terrainHeight(x,z),z);if(walking)b.root.rotation.y=Math.atan2(dx,dz);for(let j=0;j<4;j++)b.legs[j].rotation.x=walking?Math.sin(seconds*6+j*Math.PI)*.15:0;b.lastX=x;b.lastZ=z;}}

  const fishBatches=[new T.InstancedMesh(ball(),mat('#adddd0',{roughness:.4}),96),new T.InstancedMesh(new T.ConeGeometry(1,1,3),mat('#668e93'),96),new T.InstancedMesh(new T.ConeGeometry(1,1,3),mat('#779da0'),96)];
  for(const b of fishBatches){b.count=0;b.frustumCulled=false;scene.add(b);}
  function updateFish(list,seconds,sea){let count=0;for(const f of list||[]){const p=fishPose(f,seconds,sea);if(!p||count>=96)continue;
    const local=(x,y,z,s,rx=0)=>{dummy.position.set(p.x+Math.sin(p.yaw)*z+Math.cos(p.yaw)*x,p.y+y,p.z+Math.cos(p.yaw)*z-Math.sin(p.yaw)*x);dummy.rotation.set(rx,p.yaw,0);dummy.scale.set(...s);dummy.updateMatrix();};
    local(0,0,0,[.09,.045,.22]);fishBatches[0].setMatrixAt(count,dummy.matrix);local(0,0,-.25,[.095,.12,.025],Math.PI/2);fishBatches[1].setMatrixAt(count,dummy.matrix);local(0,.045,-.02,[.04,.10,.11]);fishBatches[2].setMatrixAt(count,dummy.matrix);count++;
  }for(const b of fishBatches){b.count=count;b.instanceMatrix.needsUpdate=true;}}
  let chapterKey='',chapterRoots=[];
  function updateChapters(list,seconds){
    const key=JSON.stringify(list);if(key!==chapterKey){chapterKey=key;for(const root of chapterRoots){scene.remove(root);root.traverse(o=>{if(o.isSprite){o.material.map.dispose();o.material.dispose();}if(o.userData.privateGeometry)o.geometry.dispose();});}chapterRoots=[];
      for(const point of list||[]){if(point.type==='return')continue;const root=new T.Group();root.position.set(point.x/SCALE,terrainHeight(point.x/SCALE,point.y/SCALE),point.y/SCALE);scene.add(root);chapterRoots.push(root);
        const ring=new T.Mesh(new T.RingGeometry(.4,.46,28),mat(point.done?'#6d9c89':'#8cebd5',{side:T.DoubleSide}));ring.rotation.x=-Math.PI/2;ring.position.y=.03;ring.userData.privateGeometry=true;root.add(ring);
        if(point.type==='fragment'){cube(root,'#e1c587',[0,.38,0],[.37,.45,.06]);cube(root,'#a68752',[0,.18,-.035],[.035,.42,.035]);cube(root,'#826b4d',[0,.4,.035],[.19,.022,.02]);}
        if(point.type==='rune'){ell(root,'#87998a',[0,.26,0],[.27,.3,.21]);const sign=textSprite(point.symbol,'#ffe29b');sign.position.y=.8;sign.scale.set(.65,.32,1);root.add(sign);}
        if(point.type==='chest'){cube(root,'#795a39',[0,.2,0],[.65,.4,.44]);cube(root,'#bb9251',[0,.42,0],[.69,.06,.46]);for(const x of [-.21,.21])cube(root,'#f1d584',[x,.23,.235],[.05,.36,.025]);}
        if(point.type==='signal'){for(const side of [-1,1]){const pole=tube(root,'#8a6d49',[side*.22,.55,0],[.04,1.1,.04]);pole.rotation.z=side*.22;}cube(root,'#927652',[0,1.1,0],[.7,.16,.45]);if(point.done){const light=ell(root,'#ffe28d',[0,1.34,0],[.16,.21,.16]);light.material=mat('#ffe28d',{emissive:'#ffa842',emissiveIntensity:1});}else cube(root,'#344f57',[0,1.3,0],[.3,.18,.24]);}
        const tag=textSprite(point.label,point.done?'#b5d1c5':'#ffe9b5');tag.position.y=point.type==='signal'?1.95:1.35;root.add(tag);root.userData.done=point.done;
      }
    }
    for(const root of chapterRoots)root.children[0].scale.setScalar(root.userData.done?1:1+Math.sin(seconds*2.8)*.05);
  }
  const birds=[];for(let i=0;i<4;i++){
    const g=new T.BufferGeometry().setFromPoints([new T.Vector3(-.3,0,0),new T.Vector3(0,-.08,0),new T.Vector3(.3,0,0)]);
    const b=new T.Line(g,new T.LineBasicMaterial({color:'#fff7de'}));scene.add(b);birds.push(b);
  }
  let yaw=Math.atan2(-130,-60),pitch=0,zoom=4.8,enabled=true,first=true,last=0,drag=null,lost=false,slow=0,cameraMode='first';
  const held=new T.Group();camera.add(held);
  const sleeve=tube(held,'#52625f',[.28,-.36,-.42],[.10,.34,.10]);sleeve.rotation.x=-.65;
  const hand=ell(held,'#dda879',[.29,-.27,-.58],[.055,.08,.055]);
  const heldSpear=new T.Group();held.add(heldSpear);const shaft=tube(heldSpear,'#876742',[.32,-.17,-.75],[.014,1.55,.014]);shaft.rotation.x=-.22;
  const tip=ell(heldSpear,'#b3b6ac',[.32,.61,-.91],[.039,.12,.025]);
  const heldTools={};for(const key of ['gather','fish','cook']){const tool=new T.Group();tool.position.set(.29,-.26,-.61);held.add(tool);personTool(key,tool,{cube,tube,ell});heldTools[key]=tool;}
  held.traverse(o=>{if(o.isMesh){o.castShadow=false;o.receiveShadow=false;o.frustumCulled=false;}});
  const target=new T.Vector3(),desired=new T.Vector3(),lastPoint=new T.Vector3();
  function orbit(dx,dy=0){if(!enabled||getState().paused)return;yaw+=dx;pitch=clamp(pitch+dy,cameraMode==='first'?-1.12:-.05,cameraMode==='first'?1.12:.75);}
  function setCamera(mode){cameraMode=mode==='third'?'third':'first';pitch=mode==='third'?.22:0;camera.fov=mode==='third'?58:72;camera.updateProjectionMatrix();drag=null;first=true;}
  canvas.addEventListener('pointerdown',e=>{const s=getState();if(!enabled||!s.play||s.paused||e.button>0||drag)return;drag={id:e.pointerId,x:e.clientX,y:e.clientY};canvas.setPointerCapture(e.pointerId);});
  canvas.addEventListener('pointermove',e=>{if(!drag||drag.id!==e.pointerId)return;orbit(-(e.clientX-drag.x)*.006,(e.clientY-drag.y)*.005);drag.x=e.clientX;drag.y=e.clientY;});
  const end=e=>{if(drag?.id===e.pointerId)drag=null;};for(const event of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(event,end);
  canvas.addEventListener('wheel',e=>{if(!enabled||getState().paused)return;e.preventDefault();if(cameraMode==='first'){camera.fov=clamp(camera.fov+e.deltaY*.025,58,85);camera.updateProjectionMatrix();}else zoom=clamp(zoom+e.deltaY*.004,2.5,8);},{passive:false});
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();lost=true;enabled=false;drag=null;onLost();});
  canvas.addEventListener('webglcontextrestored',()=>{lost=false;first=true;});
  function resize(){renderer.setSize(innerWidth,innerHeight,false);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();}
  function frame(now){
    if(!enabled||lost)return;
    const s=getState(),seconds=now/1000,step=last?clamp((now-last)/1000,0,.06):1/60;last=now;
    frameBase=baseLayout(s.basePos,s.baseLevel);frameElevation=baseElevation(frameBase);
    updateName(boardPerson,s.labels?.board,'#ffe087');if(boardPerson.tag){boardPerson.tag.position.y=1.65;boardPerson.tag.scale.set(1.4,.36,1)}
    trailRoot.visible=!!s.trail;if(s.trail){trailRoot.position.set(s.trail.x/SCALE,terrainHeight(s.trail.x/SCALE,s.trail.y/SCALE),s.trail.y/SCALE);trailBeam.material.opacity=.35+.13*Math.sin(seconds*3);if(trailNumber!==s.trailNumber||trailTag?.userData.text!==(s.trailNumber===4?s.labels?.finish||'4':s.trailNumber?String(s.trailNumber):s.trail.label)){if(trailTag){trailRoot.remove(trailTag);trailTag.material.map.dispose();trailTag.material.dispose()}trailNumber=s.trailNumber;trailTag=textSprite(trailNumber===4?s.labels?.finish||'4':trailNumber?String(trailNumber):s.trail.label,'#54e4ef');trailTag.userData.text=trailNumber===4?s.labels?.finish||'4':trailNumber?String(trailNumber):s.trail.label;trailTag.position.y=1.5;trailTag.scale.set(s.trailNumber?1:2.45,.4,1);trailRoot.add(trailTag)}}
    updateName(merchant,s.labels?.leon,'#b49966');
    updateName(guide,s.labels?.nela,'#609991');
    const x=s.P.x/SCALE,z=s.P.y/SCALE;
    materials.update();meadow.update(seconds,frameBase);leafWind.value=seconds;
    resources(s.objects,seconds);updateFish(s.fishes,seconds,s.sea);updateChapters(s.chapterMarkers,seconds);
    const facing={down:0,up:Math.PI,left:-Math.PI/2,right:Math.PI/2};
    animatePerson(self,s.P,Number.isFinite(s.heading)?s.heading:facing[s.face]||0,s.moving,seconds,step,s.fast?5.25:3,s);
    merchant.root.visible=guide.root.visible=true;
    for(const [p,point] of [[merchant,s.leon],[guide,s.nela]])animatePerson(p,point,Math.atan2(x-point.x/SCALE,z-point.y/SCALE),false,seconds,step,0,{...s,raft:false,spear:false,blocked:false,motion:null});
    const present=new Set();
    for(const p of s.players){
      if(p.id===s.you)continue;present.add(p.id);let person=people.get(p.id);
      const look=p.appearance?colors(p.appearance):s.looks[p.slot]||{};
      if(!person||person.name!==p.name){if(person)removePerson(person);person=human(look,'player',p.name);people.set(p.id,person);}
      updateLook(person,look);
      const dx=person.lastX===null?0:p.point.x/SCALE-person.lastX,dz=person.lastZ===null?0:p.point.y/SCALE-person.lastZ;
      const heading=p.moving&&Math.hypot(dx,dz)>.002?Math.atan2(dx,dz):facing[p.face]||0;
      animatePerson(person,p.point,heading,p.moving,seconds,step,3,{...s,spear:s.spearOwned&&!p.spearStowed,blocked:p.blocked,motion:p.motion&&p.motion.remaining-(now-p.received)>0?{kind:p.motion.kind,phase:1-(p.motion.remaining-(now-p.received))/(MOTIONS[p.motion.kind]||1000)}:null});
    }
    for(const [id,p] of people)if(!present.has(id)){removePerson(p);people.delete(id);}
    updateLook(self,s.appearance||colors());
    stall.position.set(s.leon.x/SCALE+.9,terrainHeight(s.leon.x/SCALE+.9,s.leon.y/SCALE+.15),s.leon.y/SCALE+.15);
    chestRoot.position.set(s.chest.x/SCALE,terrainHeight(s.chest.x/SCALE,s.chest.y/SCALE),s.chest.y/SCALE);chestRoot.visible=!s.treasure;
    updateBuildings(s);updateBoars(s.enemies,seconds);
    const indoors=frameBase&&Math.abs(s.P.x-frameBase.floor.x)<frameBase.floor.w/2&&Math.abs(s.P.y-frameBase.floor.y)<frameBase.floor.h/2;
    for(const material of cutaway){material.opacity=indoors&&cameraMode==='third'?.23:1;material.depthWrite=!(indoors&&cameraMode==='third');}
    if(flame){flame.scale.y=1+Math.sin(seconds*13)*.18;fireLight.intensity=2.5+Math.sin(seconds*17)*.4;}
    const nearest=s.objects.filter(o=>Math.hypot(o.x-s.P.x,o.y-s.P.y)<75).sort((a,b)=>Math.hypot(a.x-s.P.x,a.y-s.P.y)-Math.hypot(b.x-s.P.x,b.y-s.P.y))[0];
    marker.visible=!!(s.play&&!s.paused&&nearest);if(nearest)marker.position.set(nearest.x/SCALE,terrainHeight(nearest.x/SCALE,nearest.y/SCALE)+.03,nearest.y/SCALE);
    for(let i=0;i<birds.length;i++){const b=birds[i];b.position.set(19+Math.sin(seconds*.08+i*1.7)*8,7+Math.sin(seconds*.2+i)*.5,12+Math.cos(seconds*.1+i*1.3)*5);b.rotation.y=seconds*.1+i;b.scale.y=1+Math.sin(seconds*7+i)*.5;}
    self.rig.visible=cameraMode!=='first';
    const bob=s.moving&&!s.paused?Math.sin(self.phase*2)*.012:0;
    const pose=cameraPose({x,z,surface:self.root.position.y,yaw,pitch,mode:cameraMode,distance:zoom*(camera.aspect<.85?1.12:1),bob});target.copy(pose.target);desired.copy(pose.position);
    if(cameraMode==='third'){
      desired.y=Math.max(desired.y,terrainHeight(desired.x,desired.z)+.55);
      // Pull in the camera rather than viewing the character through a wall.
      const direction=desired.clone().sub(target),distance=direction.length();direction.normalize();
      const ray=new T.Raycaster(target,direction,.08,distance);
      const hit=ray.intersectObjects([buildings,stall],true).find(h=>h.object.isMesh&&h.distance>.1);
      if(hit)desired.copy(target).addScaledVector(direction,Math.max(.35,hit.distance-.15));
    }
    // A first-person camera follows position exactly so rapid turns never lag.
    if(cameraMode==='first'||first||lastPoint.distanceTo(self.root.position)>5){camera.position.copy(desired);first=false;}else camera.position.lerp(desired,1-Math.exp(-step*8));
    camera.lookAt(target);lastPoint.copy(self.root.position);
    // Bound on-screen labels in pixels, including at very close talking range.
    const signPosition=new T.Vector3();scene.updateMatrixWorld(true);
    scene.traverse(o=>{if(!o.isSprite)return;if(!o.userData.signScale)o.userData.signScale=o.scale.clone();o.scale.copy(o.userData.signScale);o.getWorldPosition(signPosition);const distance=Math.max(.1,signPosition.distanceTo(camera.position)),pixels=o.scale.x*camera.projectionMatrix.elements[0]*innerWidth/(2*distance),cap=Math.min(240,innerWidth*.52);if(pixels>cap)o.scale.multiplyScalar(cap/pixels);});
    const holding=!!s.spear||!!s.motion&&['gather','fish','cook'].includes(s.motion.kind);
    held.visible=cameraMode==='first'&&s.play&&holding&&!s.sea(s.P.x,s.P.y);
    heldSpear.visible=!!s.spear&&!s.motion;for(const [key,o] of Object.entries(heldTools))o.visible=s.motion?.kind===key;
    held.position.y=bob*.4;held.rotation.x=s.motion?Math.sin(s.motion.phase*Math.PI*2)*.07:0;
    hand.material=mat(s.appearance?.skin||'#dda879');sleeve.material=mat(s.appearance?.shirt||'#4c9cba');
    sun.position.set(x-12,18,z-8);sun.target.position.set(x,0,z);
    sky.position.copy(camera.position);waterMat.uniforms.uTime.value=seconds;waterMat.uniforms.uEye.value.copy(camera.position);
    renderer.render(scene,camera);
    if(s.play&&step>.038)slow+=step;else slow=Math.max(0,slow-step);
    if(slow>3&&renderer.getPixelRatio()>.85){renderer.setPixelRatio(Math.max(.85,renderer.getPixelRatio()-.15));resize();slow=0;}
  }
  function removePerson(person){scene.remove(person.root);if(person.tag){person.tag.material.map.dispose();person.tag.material.dispose();}}
  function setEnabled(value){enabled=!!value&&!lost;drag=null;first=true;last=0;return enabled;}
  function dispose(){enabled=false;renderer.dispose();groundGeo.dispose();land.dispose();waterGeo.dispose();waterMat.dispose();skyGeo.dispose();sky.material.dispose();map.dispose();meadow.dispose();materials.dispose();leafMat.dispose();for(const b of [...Object.values(batches),...fishBatches]){b.geometry.dispose();b.dispose();}for(const g of geos.values())g.dispose();for(const m of mats.values())m.dispose();}
  return {frame,resize,orbit,setEnabled,setCamera,dispose,vector:(x,y)=>cameraVector(x,y,yaw),get enabled(){return enabled;},get yaw(){return yaw;},get cameraMode(){return cameraMode;},stats:()=>({calls:renderer.info.render.calls,triangles:renderer.info.render.triangles,pixelRatio:renderer.getPixelRatio(),people:people.size+3,camera:cameraMode,eye:camera.position.toArray(),materials:materials.stats()})};
}

