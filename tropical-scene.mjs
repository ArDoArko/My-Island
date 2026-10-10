import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { VILLAGE } from './campaign-scenery.mjs';

const noiseGLSL=`
float hash21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise21(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hash21(i),hash21(i+vec2(1.,0.)),f.x),mix(hash21(i+vec2(0.,1.)),hash21(i+vec2(1.)),f.x),f.y);}
float fbm21(vec2 p){float f=0.,a=.5;for(int i=0;i<4;i++){f+=a*noise21(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`;

// One ocean in both modes. Unequal wave directions and noise break up the old
// high-frequency stripes; the coast uniforms give each shore its own shallows.
export function createOcean(coasts,{size=900,segments=72}={}) {
  const shore=Array.from({length:9},(_,j)=>new T.Vector4(...(coasts[j]||[10000,10000,1,1])));
  const material=new T.ShaderMaterial({fog:true,uniforms:{...T.UniformsUtils.clone(T.UniformsLib.fog),
    uTime:{value:0},uEye:{value:new T.Vector3()},uCoasts:{value:shore}},
  vertexShader:`uniform float uTime;varying vec3 vWater;
    #include <fog_pars_vertex>
    void main(){vec3 p=position;
    p.y+=sin(dot(p.xz,vec2(.41,.19))+uTime*.75)*.024+sin(dot(p.xz,vec2(-.17,.36))-uTime*.58)*.019;
    vWater=(modelMatrix*vec4(p,1.)).xyz;vec4 mvPosition=viewMatrix*vec4(vWater,1.);gl_Position=projectionMatrix*mvPosition;
    #include <fog_vertex>
    }`,
  fragmentShader:`uniform float uTime;uniform vec3 uEye;uniform vec4 uCoasts[9];varying vec3 vWater;
    #include <fog_pars_fragment>
    ${noiseGLSL}
    float wave(vec2 p){return sin(dot(p,vec2(.7,.3))+uTime*.8)*.046+
      sin(dot(p,vec2(-.43,.81))-uTime*.62)*.038+sin(dot(p,vec2(1.36,.67))+uTime*1.12)*.016+
      (fbm21(p*1.6+vec2(uTime*.09,-uTime*.07))-.5)*.10;}
    void main(){vec2 p=vWater.xz;float eps=.055,h=wave(p);
      vec3 n=normalize(vec3((h-wave(p+vec2(eps,0.)))/eps,1.,(h-wave(p+vec2(0.,eps)))/eps));
      vec3 view=normalize(uEye-vWater);float fresnel=.025+.975*pow(1.-max(dot(n,view),0.),5.);
      float coast=1000.;for(int i=0;i<9;i++){vec4 c=uCoasts[i];coast=min(coast,(length((p-c.xy)/c.zw)-1.)*min(c.z,c.w));}
      float shallow=1.-smoothstep(.0,3.4,coast);vec3 depth=mix(vec3(.008,.15,.21),vec3(.045,.47,.43),shallow);
      float ripple=fbm21(p*.52+vec2(uTime*.04,0.));depth*=.94+ripple*.12;
      vec3 reflection=mix(vec3(.58,.76,.82),vec3(.19,.46,.63),smoothstep(0.,.8,n.y-view.y));
      vec3 col=mix(depth,reflection,fresnel);
      float spark=pow(max(dot(reflect(-normalize(vec3(-.55,.82,-.36)),n),view),0.),170.);
      col+=vec3(1.,.86,.65)*spark*.58;
      float foam=(1.-smoothstep(.04,.42,abs(coast+.12+sin(uTime*.8+ripple*5.)*.15)))*smoothstep(.32,.64,ripple);
      col=mix(col,vec3(.72,.86,.78),foam*.6);gl_FragColor=vec4(col,1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      #include <fog_fragment>
    }`});
  const geometry=new T.PlaneGeometry(size,size,segments,segments);geometry.rotateX(-Math.PI/2);
  const mesh=new T.Mesh(geometry,material);mesh.name='tropical-ocean';mesh.position.y=-.045;
  return {mesh,update(seconds,eye){material.uniforms.uTime.value=seconds;material.uniforms.uEye.value.copy(eye)},
    dispose(){geometry.dispose();material.dispose()}};
}

export function createTropicalSky(radius=420) {
  const material=new T.ShaderMaterial({side:T.BackSide,depthWrite:false,
  vertexShader:'varying vec3 vSky;void main(){vSky=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader:`varying vec3 vSky;${noiseGLSL}
  void main(){vec3 dir=normalize(vSky);float h=dir.y;
    vec3 col=mix(vec3(.65,.79,.84),vec3(.095,.34,.59),smoothstep(-.02,.8,h));
    vec2 p=dir.xz/max(.1,h)*2.3;float n=fbm21(p);
    float cloud=smoothstep(.52,.70,n)*smoothstep(.025,.20,h);
    col=mix(col,mix(vec3(.62,.69,.71),vec3(.98,.96,.89),smoothstep(.50,.70,n)),cloud);
    float sun=pow(max(dot(dir,normalize(vec3(-.55,.82,-.36))),0.),70.);col+=vec3(.35,.24,.12)*sun;
    gl_FragColor=vec4(col,1.);
    #include <colorspace_fragment>
  }`});
  const mesh=new T.Mesh(new T.SphereGeometry(radius,32,20),material);
  mesh.name='tropical-sky';mesh.renderOrder=-10;mesh.frustumCulled=false;
  return mesh;
}

// A separate sand/grass/rock splat is used by the archipelago. Beach vertices
// sample sand rather than tinting a grass photograph yellow.
export function islandMaterial(surfaces,scale) {
  const m=new T.MeshStandardMaterial({roughness:1,color:'#ffffff',vertexColors:true});
  m.onBeforeCompile=shader=>{
    Object.assign(shader.uniforms,{uGrass:{value:surfaces.textures.get('grass')},uSand:{value:surfaces.textures.get('sand')},uRock:{value:surfaces.textures.get('rock')}});
    shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 vIslandPosition;varying vec3 vIslandNormal;')
      .replace('#include <begin_vertex>',`#include <begin_vertex>\nvIslandPosition=position;vIslandNormal=normalize(normal*vec3(${scale.toFixed(1)},1.,${scale.toFixed(1)}));`);
    shader.fragmentShader=shader.fragmentShader.replace('#include <common>',`#include <common>
      varying vec3 vIslandPosition;varying vec3 vIslandNormal;uniform sampler2D uGrass;uniform sampler2D uSand;uniform sampler2D uRock;${noiseGLSL}`)
      .replace('#include <map_fragment>',`
        vec2 uv=vIslandPosition.xz/${scale.toFixed(1)}*.34;
        float n=fbm21(uv*.46);vec2 offset=vec2(17.3,8.1);
        vec3 grass=mix(texture2D(uGrass,uv).rgb,texture2D(uGrass,uv*1.37+offset).rgb,.38);
        vec3 sand=texture2D(uSand,uv*.8).rgb,rock=texture2D(uRock,uv*.62).rgb;
        float beach=1.-smoothstep(.025,.34,vIslandPosition.y);
        float slope=1.-abs(normalize(vIslandNormal).y);float cliff=smoothstep(.44,.76,slope)*(1.-beach);
        diffuseColor.rgb*=mix(mix(grass,sand,beach),rock,cliff)*(.82+n*.28);`);
  };
  m.customProgramCacheKey=()=>`tropical-island-${scale}`;return m;
}

export function palmFronds(detail=14) {
  const vertices=[],uv=[],indices=[];
  const point=(a,t,side,width)=>{const r=t*2.2,y=Math.sin(t*Math.PI)*.55-t*t*.95;
    return [Math.sin(a)*r+Math.cos(a)*width*side,y-width*.17,Math.cos(a)*r-Math.sin(a)*width*side]};
  for(let leaf=0;leaf<9;leaf++){
    const a=leaf*Math.PI*2/9;
    for(let j=1;j<detail;j++)for(const side of [-1,1]){
      const t=j/detail,w=Math.sin(t*Math.PI)*.44,k=vertices.length/3;
      vertices.push(...point(a,t-.03,side,.012),...point(a,t-.09,side,w),...point(a,t+.025,side,w*.87),...point(a,t+.03,side,.012));
      uv.push(t,0,t,.9,t+.03,1,t+.03,0);indices.push(k,k+1,k+2,k,k+2,k+3);
    }
  }
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(vertices,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(indices);g.computeVertexNormals();return g;
}

export function decorateIslands(root,islands,{scale,height,surfaces,small=false,clear=()=>false}={}) {
  const positions=[];
  for(const i of islands)for(let j=0;j<(small?22:42);j++){
    const a=j*2.39996+i.x*.001,r=i.radius*(.36+(j%7)*.075),x=i.x+Math.sin(a)*r,z=i.z+Math.cos(a)*r;
    if(clear(i,x,z))continue;
    positions.push({x:x/scale,z:z/scale,y:height(x,z),a,h:3.8+(j%5)*.42,size:.76+(j%4)*.11});
  }
  const trunk=new T.CylinderGeometry(.085,.16,1,10,8);trunk.translate(0,.5,0);
  const p=trunk.attributes.position;for(let j=0;j<p.count;j++)p.setX(j,p.getX(j)+p.getY(j)**2*.20);trunk.computeVertexNormals();
  const trunkMaterial=surfaces.surface('wood','#bc9c71',2,.03);
  const leaves=surfaces.surface('leaf','#9cb384',1,.01).clone();leaves.side=T.DoubleSide;
  const foliage=new T.InstancedMesh(palmFronds(small?9:14),leaves,positions.length);
  const trees=new T.InstancedMesh(trunk,trunkMaterial,positions.length),dummy=new T.Object3D();
  trees.name='grove-trunks';foliage.name='grove-fronds';
  for(let j=0;j<positions.length;j++){
    const q=positions[j];dummy.position.set(q.x,q.y,q.z);dummy.rotation.set(0,q.a,.035*Math.sin(q.a));dummy.scale.set(q.size,q.h,q.size);dummy.updateMatrix();trees.setMatrixAt(j,dummy.matrix);
    dummy.position.set(q.x+.20*q.size*Math.cos(q.a),q.y+q.h,q.z-.20*q.size*Math.sin(q.a));dummy.rotation.set(0,q.a,0);dummy.scale.setScalar(q.size);dummy.updateMatrix();foliage.setMatrixAt(j,dummy.matrix);
    foliage.setColorAt(j,new T.Color().setHSL(.26+(j%5)*.01,.26,.63+(j%3)*.045));
  }
  for(const b of [trees,foliage]){b.castShadow=b.receiveShadow=true;root.add(b);}
  const rocks=new T.InstancedMesh(new T.IcosahedronGeometry(1,1),surfaces.surface('rock','#a9aaa0',2,.08),islands.length*(small?14:24));rocks.name='shore-rocks';
  let count=0;for(const i of islands)for(let j=0;j<(small?14:24);j++){
    const a=j*2.399+.6,r=i.radius*(.87+(j%4)*.024),x=i.x+Math.sin(a)*r,z=i.z+Math.cos(a)*r;
    if(clear(i,x,z))continue;
    dummy.position.set(x/scale,height(x,z)-.10,z/scale);dummy.rotation.set(.2*j,a,.17*j);
    dummy.scale.set(.30+(j%4)*.14,.22+(j%3)*.18,.4+(j%3)*.15);dummy.updateMatrix();rocks.setMatrixAt(count++,dummy.matrix);
  }
  rocks.count=count;rocks.castShadow=rocks.receiveShadow=true;root.add(rocks);
  return {trees,foliage,rocks};
}

// Colonial facades with shutters, balconies and arcaded ground-floor porches.
// All solid building footprints come from VILLAGE, also read by gameplay.
export function addVillage(root,{scale,height,surfaces,helpers}) {
  const {cube,tube}=helpers,houses=[];
  function batch(group){
    const byMaterial=new Map();group.updateMatrix();
    for(const o of [...group.children])if(o.isMesh){
      o.updateMatrix();const g=o.geometry.clone().applyMatrix4(o.matrix);
      if(!byMaterial.has(o.material))byMaterial.set(o.material,[]);byMaterial.get(o.material).push(g);group.remove(o);
    }
    for(const [material,geometries] of byMaterial){
      const merged=mergeGeometries(geometries,false);geometries.forEach(g=>g.dispose());
      const mesh=new T.Mesh(merged,material);mesh.castShadow=mesh.receiveShadow=true;group.add(mesh);
    }
  }
  function building(b,parent=root,coordinates=true){
    const g=new T.Group();g.name='village-house';parent.add(g);
    g.position.set(coordinates?b.x/scale:b.x,coordinates?height(b.x,b.z):0,coordinates?b.z/scale:b.z);
    if(b.z>60)g.rotation.y=Math.PI;
    const w=b.w/scale,d=b.d/scale,h=b.h;
    const wall=cube(g,b.color,[0,h/2,0],[w,h,d]);wall.material=surfaces.surface('plaster',b.color,2,.035);
    const roofMaterial=surfaces.surface('roof','#d5bbab',2,.065);
    for(const side of [-1,1]){
      const roof=cube(g,'#ba7655',[side*w/4,h+.43,0],[Math.hypot(w/2+.25,.85),.13,d+.5]);roof.rotation.z=-side*Math.atan2(.85,w/2+.25);roof.material=roofMaterial;
    }
    for(const y of [.17,h*.52,h-.16])cube(g,'#e2dbc7',[0,y,d/2+.035],[w+.16,.14,.10]);
    const floors=h>5?2:1;
    for(let floor=0;floor<floors;floor++)for(const x of [-w*.31,w*.31]){
      const y=1.5+floor*2.35,z=d/2+.08;
      cube(g,'#415d63',[x,y,z],[.75,1.2,.05]);
      for(const side of [-1,1]){
        const shutter=cube(g,b.shutter,[x+side*.56,y,z+.03],[.34,1.3,.07]);shutter.rotation.y=side*.24;
        for(let j=0;j<9;j++)cube(g,'#876742',[x+side*.56,y-.52+j*.13,z+.085],[.33,.024,.04]);
      }
      cube(g,'#e2dbc7',[x,y-.68,z],[1.7,.10,.16]);cube(g,'#e2dbc7',[x,y+.68,z],[1.7,.13,.15]);
    }
    cube(g,'#5a4b3d',[0,1.05,d/2+.06],[.78,2.1,.10]);
    cube(g,'#e2dbc7',[0,2.18,d/2+.11],[1.1,.16,.18]);
    if(floors===2){
      cube(g,'#e2dbc7',[0,2.75,d/2+.48],[w+.15,.18,.9]);
      for(let j=0;j<=10;j++)tube(g,'#e2dbc7',[-w/2+j*w/10,3.18,d/2+.84],[.034,.76,.034]);
      cube(g,'#e2dbc7',[0,3.58,d/2+.84],[w+.17,.08,.10]);
    }
    for(const side of [-1,1])for(let floor=0;floor<floors;floor++)for(const z of [-d*.26,d*.26]){
      cube(g,b.shutter,[side*(w/2+.03),1.5+floor*2.35,z],[.06,1.22,.8]);
      cube(g,'#e2dbc7',[side*(w/2+.07),.82+floor*2.35,z],[.16,.10,1.05]);
      cube(g,'#e2dbc7',[side*(w/2+.07),2.18+floor*2.35,z],[.16,.12,1.05]);
    }
    batch(g);houses.push(g);
    return g;
  }
  for(const b of VILLAGE)building(b);
  // Paths follow the same height function as feet, including uneven ground.
  function path(points,width){
    const verts=[],uv=[],indices=[];let distance=0;
    for(let j=0;j<points.length;j++){
      const a=points[Math.max(0,j-1)],b=points[Math.min(points.length-1,j+1)],q=points[j];
      const dx=b.x-a.x,dz=b.z-a.z,n=Math.hypot(dx,dz)||1;
      if(j)distance+=Math.hypot(q.x-points[j-1].x,q.z-points[j-1].z)/scale;
      for(const side of [-1,1]){const x=q.x-dz/n*width/2*side,z=q.z+dx/n*width/2*side;verts.push(x/scale,height(x,z)+.018,z/scale);uv.push((side+1)/2*width/scale,distance);}
      if(j){const k=j*2;indices.push(k-2,k-1,k,k-1,k+1,k);}
    }
    const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(verts,3));geo.setAttribute('uv',new T.Float32BufferAttribute(uv,2));geo.setIndex(indices);geo.computeVertexNormals();
    const mesh=new T.Mesh(geo,surfaces.surface('paving','#ded9c9',.75,.045));mesh.name='village-path';mesh.receiveShadow=true;root.add(mesh);
  }
  path(Array.from({length:31},(_,j)=>({x:385-j*21,z:36+Math.sin(j*.19)*9})),55);
  path(Array.from({length:15},(_,j)=>({x:23,z:-280+j*39})),40);
  // Harbor canopy beside the fuel pump. It leaves the interactive pump clear.
  const market=new T.Group();market.name='harbor-market';market.position.set(290/scale,height(290,-30),-30/scale);root.add(market);
  for(const x of [-1.4,1.4])for(const z of [-.6,.6])tube(market,'#876742',[x,1.2,z],[.045,2.4,.045]);
  const canopy=cube(market,'#cc8660',[0,2.35,0],[3.2,.07,1.8]);canopy.rotation.x=.07;
  cube(market,'#a98961',[0,.7,0],[2.8,.15,.9]);
  for(let j=0;j<5;j++)cube(market,'#a68854',[(j-2)*.5,.88,0],[.43,.20,.68]);
  batch(market);
  return {building,houses};
}
