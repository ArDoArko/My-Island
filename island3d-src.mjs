import * as T from 'three';

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

export function create({canvas,terrain,getState,onLost}) {
  const renderer=new T.WebGLRenderer({canvas,antialias:true,powerPreference:'high-performance'});
  const small=innerWidth<=700;
  renderer.setPixelRatio(Math.min(devicePixelRatio||1,small?1.25:1.6));
  renderer.setSize(innerWidth,innerHeight,false);
  renderer.outputColorSpace=T.SRGBColorSpace;
  renderer.toneMapping=T.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.12;
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;
  const scene=new T.Scene();scene.background=new T.Color('#c5e9e5');scene.fog=new T.Fog('#c5e9e5',24,92);
  const camera=new T.PerspectiveCamera(56,innerWidth/innerHeight,.08,350);
  const hemi=new T.HemisphereLight('#d7f3ff','#625343',2.1);scene.add(hemi);
  const sun=new T.DirectionalLight('#ffe6b5',2.5);sun.castShadow=true;
  sun.shadow.mapSize.set(small?512:1024,small?512:1024);sun.shadow.camera.left=-13;sun.shadow.camera.right=13;
  sun.shadow.camera.top=13;sun.shadow.camera.bottom=-13;sun.shadow.camera.near=.5;sun.shadow.camera.far=65;
  sun.shadow.bias=-.0003;sun.shadow.normalBias=.025;scene.add(sun,sun.target);
  const mats=new Map(),geos=new Map();
  function mat(color,extra={}) {const key=color+JSON.stringify(extra);if(!mats.has(key))mats.set(key,new T.MeshStandardMaterial({color,roughness:.82,...extra}));return mats.get(key);}
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
  const map=new T.CanvasTexture(terrain);map.colorSpace=T.SRGBColorSpace;map.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());
  const land=mat('#fff3dd',{map});
  land.onBeforeCompile=shader=>{
    shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>','#include <map_fragment>\nfloat grit=fract(sin(dot(vMapUv*1800.0,vec2(12.9898,78.233)))*43758.5453);diffuseColor.rgb*=0.96+grit*0.08;');
  };
  const ground=new T.Mesh(groundGeo,land);ground.receiveShadow=true;scene.add(ground);
  const waterGeo=new T.PlaneGeometry(700,700,100,100);waterGeo.rotateX(-Math.PI/2);
  const waterMat=new T.ShaderMaterial({uniforms:{uTime:{value:0},uEye:{value:new T.Vector3()}},vertexShader:`
    uniform float uTime;varying vec3 vWorld;
    void main(){vec3 p=position;p.y+=sin(p.x*.55+uTime*.8)*.018+sin(p.z*.7-uTime*.6)*.016;vWorld=(modelMatrix*vec4(p,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(vWorld,1.);}`,
    fragmentShader:`uniform float uTime;uniform vec3 uEye;varying vec3 vWorld;
    float edge(vec2 p,vec2 c,vec2 r){return abs(length((p-c)/r)-1.);}
    void main(){vec2 p=vWorld.xz;float wave=sin(p.x*5.+p.y*4.-uTime*1.5)+sin(p.y*7.-p.x*3.+uTime);
    vec3 n=normalize(vec3(cos(p.x*5.+p.y*4.-uTime*1.5)*.11,1.,sin(p.y*7.-p.x*3.+uTime)*.1));
    vec3 view=normalize(uEye-vWorld);float fresnel=pow(1.-max(dot(n,view),0.),3.);
    vec3 color=mix(vec3(.025,.47,.53),vec3(.50,.75,.77),fresnel);
    float shore=min(edge(p,vec2(21.875,16.25),vec2(19.25,12.125)),min(edge(p,vec2(42.25,6.25),vec2(6.5,3.875)),edge(p,vec2(51.25,30.),vec2(4.875,3.625))));
    float foam=(1.-smoothstep(.006,.028,shore))*(.5+.5*sin(uTime*1.5+wave));
    float shine=pow(max(dot(reflect(normalize(vec3(-.45,-1.,-.2)),n),view),0.),75.);
    color+=wave*.008+shine*.65;gl_FragColor=vec4(mix(color,vec3(.8,.93,.85),foam*.7),1.);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    }`});
  const ocean=new T.Mesh(waterGeo,waterMat);ocean.position.set(28,0,18);scene.add(ocean);

  const skyGeo=new T.SphereGeometry(180,24,12);
  const sky=new T.Mesh(skyGeo,new T.ShaderMaterial({side:T.BackSide,depthWrite:false,uniforms:{},vertexShader:`varying vec3 vSky;void main(){vSky=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
  fragmentShader:`varying vec3 vSky;void main(){float h=normalize(vSky).y;vec3 color=mix(vec3(.78,.90,.85),vec3(.13,.50,.67),smoothstep(0.,.9,h));float clouds=smoothstep(.66,.9,sin(vSky.x*.07+sin(vSky.z*.08))*sin(vSky.z*.03+1.));color=mix(color,vec3(.98,.96,.87),clouds*smoothstep(.1,.45,h)*.45);gl_FragColor=vec4(color,1.);#include <colorspace_fragment>}`.replace(';#include',';\n#include')}));
  sky.renderOrder=-10;sky.frustumCulled=false;scene.add(sky);

  // All palms share three instanced draws. No external model or texture requests.
  function frondGeometry(){
    const vertices=[],indices=[],uv=[];
    for(let leaf=0;leaf<9;leaf++){
      const a=leaf*Math.PI*2/9,offset=vertices.length/3;
      for(let j=0;j<=10;j++){
        const t=j/10,r=t*(leaf%3===0?2:1.65),y=Math.sin(t*Math.PI)*.46-t*t*.65;
        const width=Math.sin(t*Math.PI)*.31*(1+.08*Math.sin(j*3));
        for(const side of [-1,1]){vertices.push(Math.sin(a)*r+Math.cos(a)*width*side,y,Math.cos(a)*r-Math.sin(a)*width*side);uv.push(t,(side+1)/2);}
        if(j<10){const n=offset+j*2;indices.push(n,n+2,n+1,n+1,n+2,n+3);}
      }
    }
    const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(vertices,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(indices);g.computeVertexNormals();return g;
  }
  const trunkGeo=new T.CylinderGeometry(.085,.16,4.35,9,8);trunkGeo.translate(0,2.175,0);
  const trunkMat=mat('#9d7750');
  trunkMat.onBeforeCompile=shader=>{shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying float vTrunkY;').replace('#include <begin_vertex>','#include <begin_vertex>\nvTrunkY=position.y;');shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nvarying float vTrunkY;').replace('#include <color_fragment>','#include <color_fragment>\ndiffuseColor.rgb*=.80+.20*smoothstep(.1,.25,fract(vTrunkY*7.));');};
  const leafGeo=frondGeometry(),leafMat=mat('#387543',{side:T.DoubleSide});
  const batches={
    tree:new T.InstancedMesh(trunkGeo,trunkMat,400),
    leaves:new T.InstancedMesh(leafGeo,leafMat,400),
    rock:new T.InstancedMesh(new T.IcosahedronGeometry(1,1),mat('#92968b'),400),
    food:new T.InstancedMesh(ball(),mat('#7a5638'),400),
    shell:new T.InstancedMesh(new T.SphereGeometry(1,12,6,0,Math.PI),mat('#f1d0b7'),400)
  };
  for(const b of Object.values(batches)){b.count=0;b.castShadow=true;b.receiveShadow=true;b.frustumCulled=false;scene.add(b);}
  function resources(objects,seconds){
    const counts={tree:0,leaves:0,rock:0,food:0,shell:0};
    for(const o of objects){
      const x=o.x/SCALE,z=o.y/SCALE,y=terrainHeight(x,z),p=o.phase||0;
      if(o.t==='tree'){
        const size=.84+.17*Math.sin(o.x*.033+o.y*.027);
        dummy.position.set(x,y,z);dummy.rotation.set(.03*Math.sin(p),p,.04*Math.cos(p));dummy.scale.set(size,size,size);dummy.updateMatrix();batches.tree.setMatrixAt(counts.tree++,dummy.matrix);
        dummy.position.set(x+.13*Math.sin(p),y+4.3*size,z+.13*Math.cos(p));dummy.rotation.set(Math.sin(seconds*.7+p)*.025,p,Math.cos(seconds*.6+p)*.025);
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
  function human(look={},kind='player',name='') {
    const root=new T.Group(),rig=new T.Group();root.add(rig);scene.add(root);
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
    if(kind==='nela')ell(head,'#8d4931',[0,-.045,-.145],[.125,.21,.07]);
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
    const raft=new T.Group();root.add(raft);for(let i=0;i<5;i++){const log=tube(raft,'#a17d48',[(i-2)*.25,.08,0],[.115,1.7,.115]);log.rotation.x=Math.PI/2;}for(const z of [-.5,.5])cube(raft,'#6e5937',[0,.19,z],[1.24,.05,.1]);raft.visible=false;
    let tag=null;if(name){tag=textSprite(name,shirt);root.add(tag);}
    const shirtParts=[],skinParts=[],hairParts=[];
    rig.traverse(o=>{if(o.isMesh){if(o.material===mat(shirt))shirtParts.push(o);if(o.material===mat(skin))skinParts.push(o);if(o.material===mat(hair))hairParts.push(o);}});
    return {root,rig,hips,head,arms,legs,spear,raft,tag,name,shirtParts,skinParts,hairParts,yaw:0,lastX:null,lastZ:null,phase:0};
  }
  const self=human();const people=new Map();
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
  function animatePerson(person,point,lookYaw,isMoving,seconds,step,speed,state) {
    const x=point.x/SCALE,z=point.y/SCALE,wet=state.sea(point.x,point.y);
    const surface=wet?0:terrainHeight(x,z);
    person.root.position.set(x,surface+(wet?(state.raft?.18:-.95):0),z);
    person.yaw+=angleDelta(person.yaw,lookYaw)*Math.min(1,step*12);person.rig.rotation.y=person.yaw;
    const active=isMoving&&speed>.05;person.phase+=active?step*(speed>4?10:7):0;
    const amount=active?(speed>4?.31:.22):0,phase=person.phase;
    person.hips.position.y=(active?.90:.92)+(active?Math.cos(phase*2)*.012:Math.sin(seconds*1.7)*.004);
    for(const leg of person.legs){
      const p=phase+(leg.side<0?Math.PI:0),stride=Math.sin(p)*amount,lift=active?Math.max(0,Math.cos(p))*.105:0;
      const sx=x+Math.cos(person.yaw)*leg.side*.115+Math.sin(person.yaw)*stride;
      const sz=z-Math.sin(person.yaw)*leg.side*.115+Math.cos(person.yaw)*stride;
      const slope=wet?0:terrainHeight(sx,sz)-surface;
      const pose=legPose(-person.hips.position.y+.07+slope+lift,stride);
      leg.thigh.rotation.x=pose.hip;leg.calf.rotation.x=pose.knee;leg.shoe.rotation.x=-pose.hip-pose.knee;
    }
    for(const arm of person.arms){
      arm.arm.rotation.x=active?Math.sin(phase+(arm.side<0?0:Math.PI))*.45:Math.sin(seconds*1.3+arm.side)*.025;
      arm.arm.rotation.z=-arm.side*.07;arm.forearm.rotation.x=active?-.22:-.08;
      if(wet&&!state.raft){arm.arm.rotation.x=-Math.PI/2+Math.sin(phase+arm.side)*.35;arm.forearm.rotation.x=-.28;}
    }
    person.raft.visible=!!(wet&&state.raft);person.raft.rotation.y=person.yaw;person.spear.visible=!!state.spear&&!wet;
    if(state.blocked){person.arms[0].arm.rotation.x=-1;person.arms[0].forearm.rotation.x=-1;}
    if(person.tag)person.tag.visible=Math.hypot(x-self.root.position.x,z-self.root.position.z)<13;
    person.lastX=x;person.lastZ=z;
  }

  const stall=new T.Group();scene.add(stall);
  for(const x of [-.55,.55])for(const z of [-.27,.27])tube(stall,'#866642',[x,.72,z],[.028,1.44,.028]);
  cube(stall,'#a98961',[0,.69,0],[1.24,.09,.67]);
  const canopy=cube(stall,'#dfcca0',[0,1.46,0],[1.55,.06,1.02]);canopy.rotation.x=-.1;
  for(let i=0;i<5;i++)cube(stall,i%2?'#63928c':'#dfcca0',[(i-2)*.3,1.465,.08],[.25,.06,.95]);
  for(let i=0;i<4;i++)ell(stall,'#b1b967',[(i-1.5)*.19,.78,0],[.09,.08,.08]);

  const chestRoot=new T.Group();scene.add(chestRoot);
  cube(chestRoot,'#765734',[0,.18,0],[.56,.36,.4]);cube(chestRoot,'#9a743e',[0,.39,0],[.6,.1,.42]);
  for(const x of [-.19,.19])cube(chestRoot,'#d5b15a',[x,.2,.215],[.045,.35,.026]);cube(chestRoot,'#ecd178',[0,.32,.22],[.08,.09,.03]);
  const marker=new T.Mesh(new T.RingGeometry(.24,.29,32),new T.MeshBasicMaterial({color:'#ffe087',transparent:true,opacity:.8,side:T.DoubleSide,depthWrite:false}));marker.rotation.x=-Math.PI/2;scene.add(marker);
  let buildingsKey='',buildings=new T.Group(),fireLight=null,flame=null;scene.add(buildings);
  function updateBuildings(s){
    const key=JSON.stringify([s.baseLevel,s.basePos,s.campfire,s.fire]);if(key===buildingsKey)return;buildingsKey=key;
    if(flame){flame.geometry.dispose();flame.material.dispose();}scene.remove(buildings);buildings=new T.Group();scene.add(buildings);flame=null;fireLight=null;
    if(s.basePos&&s.baseLevel){
      const hut=new T.Group(),x=s.basePos.x/SCALE,z=s.basePos.y/SCALE;hut.position.set(x,terrainHeight(x,z),z);buildings.add(hut);
      cube(hut,'#a68854',[0,.08,0],[2,.16,1.5]);
      for(const px of [-.85,.85])for(const pz of [-.62,.62])tube(hut,'#876742',[px,.82,pz],[.055,1.64,.055]);
      for(const side of [-1,1]){const roof=cube(hut,'#c5b478',[side*.49,1.64,0],[1.26,.10,1.86]);roof.rotation.z=-side*.36;}
      if(s.baseLevel>=2){cube(hut,'#b09260',[0,.76,-.67],[1.86,1.25,.10]);for(const side of [-1,1])cube(hut,'#ba9b64',[side*.9,.7,0],[.09,1.1,1.35]);}
      if(s.baseLevel>=3){for(const x of [-.61,.61])cube(hut,'#b99760',[x,.82,.64],[.51,1.32,.08]);cube(hut,'#845f3f',[0,1.5,.63],[.72,.12,.1]);}
      cube(hut,'#cec6a0',[-.4,.21,-.27],[.57,.11,.94]);
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

  const birds=[];for(let i=0;i<4;i++){
    const g=new T.BufferGeometry().setFromPoints([new T.Vector3(-.3,0,0),new T.Vector3(0,-.08,0),new T.Vector3(.3,0,0)]);
    const b=new T.Line(g,new T.LineBasicMaterial({color:'#fff7de'}));scene.add(b);birds.push(b);
  }
  let yaw=Math.PI,pitch=.23,zoom=5.7,enabled=true,first=true,last=0,drag=null,lost=false,slow=0;
  const target=new T.Vector3(),desired=new T.Vector3(),lastPoint=new T.Vector3();
  function orbit(dx,dy=0){if(!enabled||getState().paused)return;yaw+=dx;pitch=clamp(pitch+dy,-.05,.75);}
  canvas.addEventListener('pointerdown',e=>{const s=getState();if(!enabled||!s.play||s.paused||e.button>0||drag)return;drag={id:e.pointerId,x:e.clientX,y:e.clientY};canvas.setPointerCapture(e.pointerId);});
  canvas.addEventListener('pointermove',e=>{if(!drag||drag.id!==e.pointerId)return;orbit(-(e.clientX-drag.x)*.006,(e.clientY-drag.y)*.005);drag.x=e.clientX;drag.y=e.clientY;});
  const end=e=>{if(drag?.id===e.pointerId)drag=null;};for(const event of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(event,end);
  canvas.addEventListener('wheel',e=>{if(!enabled||getState().paused)return;e.preventDefault();zoom=clamp(zoom+e.deltaY*.004,3.5,9);},{passive:false});
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();lost=true;enabled=false;drag=null;onLost();});
  canvas.addEventListener('webglcontextrestored',()=>{lost=false;first=true;});
  function resize(){renderer.setSize(innerWidth,innerHeight,false);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();}
  function frame(now){
    if(!enabled||lost)return;
    const s=getState(),seconds=now/1000,step=last?clamp((now-last)/1000,0,.06):1/60;last=now;
    updateName(merchant,s.labels?.leon,'#b49966');
    updateName(guide,s.labels?.nela,'#609991');
    const x=s.P.x/SCALE,z=s.P.y/SCALE;
    resources(s.objects,seconds);
    const facing={down:0,up:Math.PI,left:-Math.PI/2,right:Math.PI/2};
    animatePerson(self,s.P,Number.isFinite(s.heading)?s.heading:facing[s.face]||0,s.moving,seconds,step,s.fast?5.25:3,s);
    merchant.root.visible=guide.root.visible=true;
    for(const [p,point] of [[merchant,s.leon],[guide,s.nela]])animatePerson(p,point,Math.atan2(x-point.x/SCALE,z-point.y/SCALE),false,seconds,step,0,{...s,raft:false,spear:false,blocked:false});
    const present=new Set();
    for(const p of s.players){
      if(p.id===s.you)continue;present.add(p.id);let person=people.get(p.id);
      if(!person||person.name!==p.name){if(person)removePerson(person);person=human(s.looks[p.slot]||{},'player',p.name);people.set(p.id,person);}
      const dx=person.lastX===null?0:p.point.x/SCALE-person.lastX,dz=person.lastZ===null?0:p.point.y/SCALE-person.lastZ;
      const heading=p.moving&&Math.hypot(dx,dz)>.002?Math.atan2(dx,dz):facing[p.face]||0;
      animatePerson(person,p.point,heading,p.moving,seconds,step,3,{...s,spear:s.spearOwned&&!p.spearStowed,blocked:p.blocked});
    }
    for(const [id,p] of people)if(!present.has(id)){removePerson(p);people.delete(id);}
    const me=s.players.find(p=>p.id===s.you),look=me?s.looks[me.slot]||{}:{};
    for(const p of self.shirtParts)p.material=mat(look.shirt||'#4c9cba');for(const p of self.skinParts)p.material=mat(look.skin||'#dda879');for(const p of self.hairParts)p.material=mat(look.hair||'#43332b');
    stall.position.set(s.leon.x/SCALE+.9,terrainHeight(s.leon.x/SCALE+.9,s.leon.y/SCALE+.15),s.leon.y/SCALE+.15);
    chestRoot.position.set(s.chest.x/SCALE,terrainHeight(s.chest.x/SCALE,s.chest.y/SCALE),s.chest.y/SCALE);chestRoot.visible=!s.treasure;
    updateBuildings(s);updateBoars(s.enemies,seconds);
    if(flame){flame.scale.y=1+Math.sin(seconds*13)*.18;fireLight.intensity=2.5+Math.sin(seconds*17)*.4;}
    const nearest=s.objects.filter(o=>Math.hypot(o.x-s.P.x,o.y-s.P.y)<75).sort((a,b)=>Math.hypot(a.x-s.P.x,a.y-s.P.y)-Math.hypot(b.x-s.P.x,b.y-s.P.y))[0];
    marker.visible=!!(s.play&&!s.paused&&nearest);if(nearest)marker.position.set(nearest.x/SCALE,terrainHeight(nearest.x/SCALE,nearest.y/SCALE)+.03,nearest.y/SCALE);
    for(let i=0;i<birds.length;i++){const b=birds[i];b.position.set(19+Math.sin(seconds*.08+i*1.7)*8,7+Math.sin(seconds*.2+i)*.5,12+Math.cos(seconds*.1+i*1.3)*5);b.rotation.y=seconds*.1+i;b.scale.y=1+Math.sin(seconds*7+i)*.5;}
    target.set(x,self.root.position.y+1.24,z);
    const distance=zoom*(camera.aspect<.85?1.22:1),height=1.45+Math.sin(pitch)*distance;
    desired.set(x+Math.sin(yaw)*Math.cos(pitch)*distance,target.y+height,z+Math.cos(yaw)*Math.cos(pitch)*distance);
    desired.y=Math.max(desired.y,terrainHeight(desired.x,desired.z)+.55);
    if(first||lastPoint.distanceTo(self.root.position)>5){camera.position.copy(desired);first=false;}else camera.position.lerp(desired,1-Math.exp(-step*8));
    camera.lookAt(target);lastPoint.copy(self.root.position);
    sun.position.set(x-12,18,z-8);sun.target.position.set(x,0,z);
    sky.position.copy(camera.position);waterMat.uniforms.uTime.value=seconds;waterMat.uniforms.uEye.value.copy(camera.position);
    renderer.render(scene,camera);
    if(s.play&&step>.038)slow+=step;else slow=Math.max(0,slow-step);
    if(slow>3&&renderer.getPixelRatio()>.85){renderer.setPixelRatio(Math.max(.85,renderer.getPixelRatio()-.15));resize();slow=0;}
  }
  function removePerson(person){scene.remove(person.root);if(person.tag){person.tag.material.map.dispose();person.tag.material.dispose();}}
  function setEnabled(value){enabled=!!value&&!lost;drag=null;first=true;last=0;return enabled;}
  function dispose(){enabled=false;renderer.dispose();groundGeo.dispose();waterGeo.dispose();waterMat.dispose();skyGeo.dispose();sky.material.dispose();map.dispose();for(const b of Object.values(batches)){b.geometry.dispose();b.dispose();}for(const g of geos.values())g.dispose();for(const m of mats.values())m.dispose();}
  return {frame,resize,orbit,setEnabled,dispose,vector:(x,y)=>cameraVector(x,y,yaw),get enabled(){return enabled;},get yaw(){return yaw;},stats:()=>({calls:renderer.info.render.calls,triangles:renderer.info.render.triangles,pixelRatio:renderer.getPixelRatio(),people:people.size+3})};
}
