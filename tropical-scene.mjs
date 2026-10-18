import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { VILLAGE } from './campaign-scenery.mjs';

const noiseGLSL=`
float hash21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise21(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hash21(i),hash21(i+vec2(1.,0.)),f.x),mix(hash21(i+vec2(0.,1.)),hash21(i+vec2(1.)),f.x),f.y);}
float fbm21(vec2 p){float f=0.,a=.5;for(int i=0;i<4;i++){f+=a*noise21(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`;

const fastNoiseGLSL=`
float hashFast(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noiseFast(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hashFast(i),hashFast(i+vec2(1.,0.)),f.x),mix(hashFast(i+vec2(0.,1.)),hashFast(i+vec2(1.)),f.x),f.y);}
float fbmFast(vec2 p){float f=0.,a=.535714;for(int i=0;i<3;i++){f+=a*noiseFast(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`;

// One ocean in both modes. Unequal wave directions and noise break up the old
// high-frequency stripes; the coast uniforms give each shore its own shallows.
export function createOcean(coasts,{size=900,segments=72,coastSeeds=[]}={}) {
  const shore=Array.from({length:9},(_,j)=>new T.Vector4(...(coasts[j]||[10000,10000,1,1])));
  const material=new T.ShaderMaterial({fog:true,uniforms:{...T.UniformsUtils.clone(T.UniformsLib.fog),
    uTime:{value:0},uEye:{value:new T.Vector3()},uCoasts:{value:shore},uCoastSeeds:{value:Array.from({length:9},(_,j)=>coastSeeds[j]??-100)}},
  vertexShader:`uniform float uTime;varying vec3 vWater;
    #include <fog_pars_vertex>
    void main(){vec3 p=position;
    p.y+=sin(dot(p.xz,vec2(.41,.19))+uTime*.75)*.024+sin(dot(p.xz,vec2(-.17,.36))-uTime*.58)*.019;
    vWater=(modelMatrix*vec4(p,1.)).xyz;vec4 mvPosition=viewMatrix*vec4(vWater,1.);gl_Position=projectionMatrix*mvPosition;
    #include <fog_vertex>
    }`,
  fragmentShader:`uniform float uTime;uniform vec3 uEye;uniform vec4 uCoasts[9];uniform float uCoastSeeds[9];varying vec3 vWater;
    #include <fog_pars_fragment>
    ${noiseGLSL}
    float wave(vec2 p){return sin(dot(p,vec2(.7,.3))+uTime*.8)*.046+
      sin(dot(p,vec2(-.43,.81))-uTime*.62)*.038+sin(dot(p,vec2(1.36,.67))+uTime*1.12)*.016+
      (noise21(p*1.6+vec2(uTime*.09,-uTime*.07))-.5)*.10;}
    void main(){vec2 p=vWater.xz;float eps=.055,h=wave(p);
      vec3 n=normalize(vec3((h-wave(p+vec2(eps,0.)))/eps,1.,(h-wave(p+vec2(0.,eps)))/eps));
      vec3 view=normalize(uEye-vWater);float fresnel=.025+.975*pow(1.-max(dot(n,view),0.),5.);
      float coast=1000.;for(int i=0;i<9;i++){
        vec4 c=uCoasts[i];vec2 delta=(p-c.xy)/c.zw;float boundary=1.,seed=uCoastSeeds[i];
        if(seed>-99.){float a=atan(delta.y,delta.x);boundary=.855+.07*sin(a*2.+seed)+.045*cos(a*3.-seed)+.025*sin(a*7.+seed);}
        coast=min(coast,(length(delta)-boundary)*min(c.z,c.w));}
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
  material.userData.fragmentNoiseLayers=7;
  const mesh=new T.Mesh(geometry,material);mesh.name='tropical-ocean';mesh.position.y=-.045;
  return {mesh,update(seconds,eye){material.uniforms.uTime.value=seconds;material.uniforms.uEye.value.copy(eye)},
    dispose(){geometry.dispose();material.dispose()}};
}

export function createTropicalSky(radius=420) {
  const material=new T.ShaderMaterial({side:T.BackSide,depthWrite:false,uniforms:{uTime:{value:0}},
  vertexShader:'varying vec3 vSky;void main(){vSky=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader:`uniform float uTime;varying vec3 vSky;${fastNoiseGLSL}
  void main(){vec3 dir=normalize(vSky);float h=dir.y;
    vec3 col=mix(vec3(.65,.79,.84),vec3(.095,.34,.59),smoothstep(-.02,.8,h));
    vec2 p=dir.xz/max(.1,h)*2.3+vec2(uTime*.006,uTime*.0025);float n=fbmFast(p);
    float cloud=smoothstep(.52,.70,n)*smoothstep(.025,.20,h);
    col=mix(col,mix(vec3(.62,.69,.71),vec3(.98,.96,.89),smoothstep(.50,.70,n)),cloud);
    float sun=pow(max(dot(dir,normalize(vec3(-.55,.82,-.36))),0.),70.);col+=vec3(.35,.24,.12)*sun;
    gl_FragColor=vec4(col,1.);
    #include <colorspace_fragment>
  }`});
  material.userData.fragmentNoiseLayers=3;
  const mesh=new T.Mesh(new T.SphereGeometry(radius,32,20),material);
  mesh.name='tropical-sky';mesh.renderOrder=-10;mesh.frustumCulled=false;
  return mesh;
}

// A separate sand/grass/rock splat is used by the archipelago. Beach vertices
// sample sand rather than tinting a grass photograph yellow.
export function islandMaterial(surfaces,scale) {
  const m=new T.MeshStandardMaterial({roughness:1,color:'#ffffff',vertexColors:true});
  m.userData.fragmentNoiseLayers=3;
  m.onBeforeCompile=shader=>{
    Object.assign(shader.uniforms,{uGrass:{value:surfaces.textures.get('grass')},uSand:{value:surfaces.textures.get('sand')},uRock:{value:surfaces.textures.get('rock')}});
    shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 vIslandPosition;varying vec3 vIslandNormal;')
      .replace('#include <begin_vertex>',`#include <begin_vertex>\nvIslandPosition=position;vIslandNormal=normalize(normal*vec3(${scale.toFixed(1)},1.,${scale.toFixed(1)}));`);
    shader.fragmentShader=shader.fragmentShader.replace('#include <common>',`#include <common>
      varying vec3 vIslandPosition;varying vec3 vIslandNormal;uniform sampler2D uGrass;uniform sampler2D uSand;uniform sampler2D uRock;${fastNoiseGLSL}`)
      .replace('#include <map_fragment>',`
        vec2 uv=vIslandPosition.xz/${scale.toFixed(1)}*.34;
        float n=fbmFast(uv*.46);vec2 offset=vec2(17.3,8.1);
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

// Stable scenery variation: identical on every load, but without the visible
// rings and handful of repeating silhouettes produced by modulo-only sizing.
const sceneryVariation=(seed,salt=0)=>{
  const value=Math.sin((seed+1)*12.9898+(salt+1)*78.233)*43758.5453;
  return value-Math.floor(value);
};

export function updateSceneryLod(batches,cameraPosition){
  for(const batch of batches){
    const lod=batch.userData.lod,highDistance=lod.distance+lod.radius;
    // Squared distance preserves the exact sphere-to-camera threshold without
    // taking one square root per scenery batch in every rendered frame.
    const level=cameraPosition.distanceToSquared(lod.center)<=highDistance*highDistance?'high':'low';
    if(level!==lod.level){
      batch.geometry=lod[level];lod.level=level;
      if(lod.shadowReceiverLod)batch.receiveShadow=level==='high';
    }
  }
}

export function decorateIslands(root,islands,{scale,height,surfaces,small=false,clear=()=>false,dense=false,lod=false}={}) {
  const palmTrunk=(radialSegments,heightSegments)=>{
    const geometry=new T.CylinderGeometry(.085,.16,1,radialSegments,heightSegments);geometry.translate(0,.5,0);
    const p=geometry.attributes.position;for(let j=0;j<p.count;j++)p.setX(j,p.getX(j)+p.getY(j)**2*.20);
    geometry.computeVertexNormals();return geometry;
  };
  const trunk=palmTrunk(8,6),distantTrunk=lod?palmTrunk(6,3):trunk;
  const trunkMaterial=surfaces.surface('wood','#bc9c71',2,.03);
  const leaves=surfaces.surface('leaf','#9cb384',1,.01).clone();leaves.side=T.DoubleSide;
  const fronds=palmFronds(small?9:12),distantFronds=lod?palmFronds(small?6:7):fronds,treeBatches=[],foliageBatches=[],dummy=new T.Object3D();
  const foliageLodDistance=650/scale;
  let globalIndex=0;
  for(const i of islands){
    const positions=[];
    for(let j=0;j<(dense?(i.id==='home'?(small?700:1500):(small?280:650)):(small?22:42));j++){
      const seed=j+i.x*.013+i.z*.017;
      const a=j*2.39996+i.x*.001+(sceneryVariation(seed,0)-.5)*.72;
      const radial=dense?Math.min(.93,Math.max(.12,Math.sqrt((j*.6180339)%1)*.91+(sceneryVariation(seed,1)-.5)*.09)):
        Math.min(.91,.34+(j%7)*.075+(sceneryVariation(seed,1)-.5)*.08);
      const r=i.radius*radial,x=i.x+Math.sin(a)*r,z=i.z+Math.cos(a)*r;
      if(clear(i,x,z)||height(x,z)<.32)continue;
      positions.push({x:x/scale,z:z/scale,y:height(x,z),a,
        h:3.45+sceneryVariation(seed,2)*2.15,size:.70+sceneryVariation(seed,3)*.43,
        leanX:(sceneryVariation(seed,4)-.5)*.12,leanZ:(sceneryVariation(seed,5)-.5)*.14,index:globalIndex++});
    }
    if(!positions.length)continue;
    const sectors=Array.from({length:4},()=>[]);
    positions.forEach(q=>sectors[(q.x>=i.x/scale?1:0)+(q.z>=i.z/scale?2:0)].push(q));
    sectors.forEach((sector,sectorIndex)=>{
      if(!sector.length)return;
      const trees=new T.InstancedMesh(trunk,trunkMaterial,sector.length);
      const foliage=new T.InstancedMesh(fronds,leaves,sector.length);
      trees.name=treeBatches.length?`grove-trunks-${i.id}-${sectorIndex+1}`:'grove-trunks';
      foliage.name=foliageBatches.length?`grove-fronds-${i.id}-${sectorIndex+1}`:'grove-fronds';
      for(let j=0;j<sector.length;j++){
        const q=sector[j];dummy.position.set(q.x,q.y,q.z);dummy.rotation.set(q.leanX,q.a,q.leanZ);dummy.scale.set(q.size,q.h,q.size);dummy.updateMatrix();trees.setMatrixAt(j,dummy.matrix);
        dummy.position.set(q.x+.20*q.size*Math.cos(q.a),q.y+q.h,q.z-.20*q.size*Math.sin(q.a));dummy.rotation.set(q.leanX*.35,q.a+sceneryVariation(q.index,6)*Math.PI*.35,q.leanZ*.35);dummy.scale.setScalar(q.size);dummy.updateMatrix();foliage.setMatrixAt(j,dummy.matrix);
        foliage.setColorAt(j,new T.Color().setHSL(.245+sceneryVariation(q.index,7)*.065,.22+sceneryVariation(q.index,8)*.13,.59+sceneryVariation(q.index,9)*.12));
      }
      for(const b of [trees,foliage]){b.userData.cullingRegion={island:i.id,sector:sectorIndex+1};b.castShadow=true;b.instanceMatrix.needsUpdate=true;b.computeBoundingSphere();root.add(b);}
      trees.userData.lod={high:trunk,low:distantTrunk,distance:foliageLodDistance,level:'high',shadowReceiverLod:lod,
        center:trees.boundingSphere.center.clone(),radius:trees.boundingSphere.radius};
      foliage.userData.lod={high:fronds,low:distantFronds,distance:foliageLodDistance,level:'high',
        center:foliage.boundingSphere.center.clone(),radius:foliage.boundingSphere.radius};
      trees.receiveShadow=true;
      // The double-sided crowns still cast their full silhouettes on the land,
      // but do not sample the shadow map across millions of leaf triangles.
      foliage.receiveShadow=false;
      treeBatches.push(trees);foliageBatches.push(foliage);
    });
  }
  const rockGeometry=new T.IcosahedronGeometry(1,1),rockMaterial=surfaces.surface('rock','#a9aaa0',2,.08),rockBatches=[];
  for(const i of islands){
    const transforms=[];
    for(let j=0;j<(small?14:24);j++){
      const seed=j+i.x*.019+i.z*.023;
      const a=j*2.399+.6+(sceneryVariation(seed,10)-.5)*.62;
      const r=i.radius*(.84+sceneryVariation(seed,11)*.10),x=i.x+Math.sin(a)*r,z=i.z+Math.cos(a)*r;
      if(clear(i,x,z))continue;
      transforms.push({x:x/scale,y:height(x,z)-.10,z:z/scale,a,j,seed});
    }
    if(!transforms.length)continue;
    const rocks=new T.InstancedMesh(rockGeometry,rockMaterial,transforms.length);
    rocks.name=rockBatches.length?'shore-rocks-'+i.id:'shore-rocks';
    for(let j=0;j<transforms.length;j++){
      const q=transforms[j];dummy.position.set(q.x,q.y,q.z);dummy.rotation.set(sceneryVariation(q.seed,12)*1.2,q.a,sceneryVariation(q.seed,13)*1.1);
      dummy.scale.set(.27+sceneryVariation(q.seed,14)*.50,.20+sceneryVariation(q.seed,15)*.43,.31+sceneryVariation(q.seed,16)*.53);dummy.updateMatrix();rocks.setMatrixAt(j,dummy.matrix);
    }
    rocks.castShadow=rocks.receiveShadow=true;rocks.instanceMatrix.needsUpdate=true;rocks.computeBoundingSphere();root.add(rocks);rockBatches.push(rocks);
  }
  return {trees:treeBatches[0],foliage:foliageBatches[0],treeBatches,foliageBatches,rocks:rockBatches[0],rockBatches,
    lodGeometries:[trunk,distantTrunk,fronds,distantFronds],update(cameraPosition){
      updateSceneryLod(treeBatches,cameraPosition);
      updateSceneryLod(foliageBatches,cameraPosition);
    }};
}

// Colonial facades with shutters, balconies, fabric awnings and planted windows.
// All solid building footprints come from VILLAGE, also read by gameplay.
export function addVillage(root,{scale,height,surfaces,helpers,village=VILLAGE,paths,marketPoint={x:290,z:-30}}) {
  const {cube,tube,ell}=helpers,houses=[];
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
  function batchGroups(groups,target){
    const byMaterial=new Map();let sourceBatches=0;root.updateMatrixWorld(true);target.updateMatrixWorld(true);
    const toTarget=new T.Matrix4().copy(target.matrixWorld).invert(),transform=new T.Matrix4();
    for(const group of groups)for(const o of [...group.children])if(o.isMesh){
      o.updateMatrixWorld(true);transform.multiplyMatrices(toTarget,o.matrixWorld);
      const geometry=o.geometry.clone().applyMatrix4(transform);
      if(!byMaterial.has(o.material))byMaterial.set(o.material,[]);byMaterial.get(o.material).push(geometry);
      sourceBatches++;group.remove(o);o.geometry.dispose();
    }
    for(const [material,geometries] of byMaterial){
      const merged=mergeGeometries(geometries,false);geometries.forEach(g=>g.dispose());merged.computeBoundingSphere();
      const mesh=new T.Mesh(merged,material);mesh.castShadow=mesh.receiveShadow=true;target.add(mesh);
    }
    return {sourceBatches,materialBatches:target.children.length};
  }
  function building(b,parent=root,coordinates=true,shopIndex=0){
    const g=new T.Group();g.name='village-house';parent.add(g);
    g.position.set(coordinates?b.x/scale:b.x,coordinates?height(b.x,b.z):0,coordinates?b.z/scale:b.z);
    g.rotation.y=b.facing??(b.z>60?Math.PI:0);
    const w=b.w/scale,d=b.d/scale,h=b.h;
    const wall=cube(g,b.color,[0,h/2,0],[w,h,d]);wall.material=surfaces.surface('plaster',b.color,2,.035);
    const roofMaterial=surfaces.surface('roof','#d5bbab',2,.065);
    for(const side of [-1,1]){
      const roof=cube(g,'#ba7655',[side*w/4,h+.43,0],[Math.hypot(w/2+.25,.85),.13,d+.5]);roof.rotation.z=-side*Math.atan2(.85,w/2+.25);roof.material=roofMaterial;
      cube(g,'#a75f45',[side*(w/2+.13),h+.01,0],[.14,.22,d+.58]);
    }
    const ridge=tube(g,'#a75f45',[0,h+.86,0],[.12,d+.62,.12]);ridge.rotation.x=Math.PI/2;
    for(const y of [.17,h*.52,h-.16])cube(g,'#e2dbc7',[0,y,d/2+.035],[w+.16,.14,.10]);
    const floors=h>5?2:1;
    for(let floor=0;floor<floors;floor++)for(const x of [-w*.31,w*.31]){
      const y=1.5+floor*2.35,z=d/2+.08;
      const glass=cube(g,'#415d63',[x,y,z],[.75,1.2,.05]);glass.material.roughness=.24;glass.material.metalness=.10;
      cube(g,'#e2dbc7',[x,y,z+.045],[.065,1.15,.075]);
      cube(g,'#e2dbc7',[x,y,z+.046],[.70,.065,.076]);
      for(const side of [-1,1]){
        const shutter=cube(g,b.shutter,[x+side*.56,y,z+.03],[.34,1.3,.07]);shutter.rotation.y=side*.24;
        for(let j=0;j<9;j++)cube(g,'#876742',[x+side*.56,y-.52+j*.13,z+.085],[.33,.024,.04]);
      }
      cube(g,'#e2dbc7',[x,y-.68,z],[1.7,.10,.16]);cube(g,'#e2dbc7',[x,y+.68,z],[1.7,.13,.15]);
      if(floor===0){
        const planter=cube(g,'#876742',[x,.79,d/2+.25],[1.28,.20,.30]);planter.rotation.x=-.04;
        if(ell)for(let j=-2;j<=2;j++){
          const leaf=ell(g,j%2?'#6f8f58':'#88a866',[x+j*.22,.99+Math.abs(j)*.025,d/2+.27],[.17,.31,.15]);
          leaf.rotation.z=j*.14;
        }
        if(floors===1){
          const awning=cube(g,b.shutter,[x,2.32,d/2+.46],[1.55,.08,.82]);awning.rotation.x=-.15;
          cube(g,b.shutter,[x,2.20,d/2+.83],[1.55,.17,.07]);
        }
      }
    }
    cube(g,'#5a4b3d',[0,1.05,d/2+.06],[.78,2.1,.10]);
    for(const y of [.55,1.42])for(const x of [-.19,.19])cube(g,'#745f4c',[x,y,d/2+.125],[.29,.60,.045]);
    for(const x of [-.48,.48])cube(g,'#e2dbc7',[x,1.08,d/2+.11],[.16,2.22,.18]);
    cube(g,'#e2dbc7',[0,2.18,d/2+.11],[1.1,.16,.18]);
    cube(g,'#c9baa1',[0,.07,d/2+.34],[1.16,.14,.58]);
    if(ell)ell(g,'#caa457',[.27,1.04,d/2+.19],[.055,.055,.035]);
    // A projecting sign is readable while walking along the street. It stays
    // above head height and reuses facade materials, so batching adds no new
    // material pass to the house.
    const signX=(shopIndex%2?-1:1)*w*.42,signZ=d/2+.55;
    const bracket=tube(g,'#e2dbc7',[signX,2.91,d/2+.34],[.035,.70,.035]);bracket.rotation.x=Math.PI/2;
    cube(g,b.shutter,[signX,2.62,signZ],[.09,.56,.64]);
    for(const side of [-1,1]){
      const mark=cube(g,'#e2dbc7',[signX+side*.052,2.62,signZ],[.018,.22,.24]);mark.rotation.x=(shopIndex%3-1)*.22;
    }
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
    g.userData.facadeDetails={planters:2,awnings:floors===1?2:0,balcony:floors===2,windowPanes:floors*8,doorPanels:4,doorway:true,ridgeCaps:1,eaveFascias:2,hangingSigns:1,signMarks:2,signClearance:true};
    batch(g);houses.push(g);
    return g;
  }
  village.forEach((b,index)=>building(b,root,true,index));
  const buildings=new T.Group();buildings.name='village-buildings';root.add(buildings);
  buildings.userData.batchDetails={sourceHouses:houses.length,...batchGroups(houses,buildings)};
  buildings.userData.cameraBlocker=true;
  const laundry=new T.Group();laundry.name='village-overhead-laundry';root.add(laundry);
  const laundryColours=['#bd6f53','#e8d99e','#587e7c','#73868b'];
  const byStreetSide=[...village].sort((a,b)=>a.z-b.z),rowSize=Math.ceil(byStreetSide.length/2);
  let laundryLines=0,laundryGarments=0;
  for(const row of [byStreetSide.slice(0,rowSize),byStreetSide.slice(rowSize)]){
    const ordered=[...row].sort((a,b)=>a.x-b.x);
    for(let j=1;j<ordered.length;j++){
      const left=ordered[j-1],right=ordered[j],from=left.x+left.w/2,to=right.x-right.w/2;
      if(to<=from)continue;
      const x=(from+to)/2,z=(left.z+right.z)/2,y=Math.max(height(x,z)+3.35,3.55),length=(to-from)/scale;
      const cord=tube(laundry,'#5a4b3d',[x/scale,y,z/scale],[.012,length,.012]);cord.rotation.z=Math.PI/2;laundryLines++;
      for(let k=0;k<3;k++){
        const px=(from+(to-from)*(k+1)/4)/scale,color=laundryColours[(laundryLines+k)%laundryColours.length];
        const cloth=cube(laundry,color,[px,y-.24-(k%2)*.05,z/scale],[.46,.48+(k%2)*.10,.025]);
        cloth.rotation.z=(k-1)*.06;laundryGarments++;
      }
    }
  }
  laundry.userData.laundryDetails={lines:laundryLines,garments:laundryGarments,clearance:true};batch(laundry);
  // Paths follow the same height function as feet, including uneven ground.
  function path(points,width,curb=false){
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
    if(curb){
      const curbWidth=Math.max(4,width*.08),box=new T.BoxGeometry(1,1,1);
      const stones=new T.InstancedMesh(box,surfaces.surface('rock','#dad4c6',1.2,.025),(points.length-1)*2),dummy=new T.Object3D();
      stones.name='village-curb';let instance=0;
      for(let j=1;j<points.length;j++){
        const a=points[j-1],b=points[j],dx=b.x-a.x,dz=b.z-a.z,length=Math.hypot(dx,dz),nx=-dz/length,nz=dx/length;
        for(const side of [-1,1]){
          const x=(a.x+b.x)/2+nx*(width/2+curbWidth/2)*side,z=(a.z+b.z)/2+nz*(width/2+curbWidth/2)*side;
          dummy.position.set(x/scale,height(x,z)+.065,z/scale);dummy.rotation.set(0,Math.atan2(dx,dz),0);
          dummy.scale.set(curbWidth/scale,.10,length/scale+.025);dummy.updateMatrix();stones.setMatrixAt(instance++,dummy.matrix);
        }
      }
      stones.castShadow=stones.receiveShadow=true;stones.instanceMatrix.needsUpdate=true;stones.computeBoundingSphere();root.add(stones);
    }
  }
  const streetLampSites=[];
  for(const p of paths||[
    {points:Array.from({length:31},(_,j)=>({x:385-j*21,z:36+Math.sin(j*.19)*9})),width:55,curb:true},
    {points:Array.from({length:15},(_,j)=>({x:23,z:-280+j*39})),width:40,curb:true}
  ]){
    const samples=[p.points[0]];
    for(let j=1;j<p.points.length;j++){
      const a=p.points[j-1],b=p.points[j],n=Math.ceil(Math.hypot(b.x-a.x,b.z-a.z)/30);
      for(let k=1;k<=n;k++)samples.push({x:a.x+(b.x-a.x)*k/n,z:a.z+(b.z-a.z)*k/n});
    }
    path(samples,p.width,p.curb);
    if(p.curb)for(let j=3;j<p.points.length-3;j+=6){
      const a=p.points[j-1],b=p.points[j+1],q=p.points[j],dx=b.x-a.x,dz=b.z-a.z,n=Math.hypot(dx,dz)||1;
      const side=Math.floor(j/6)%2?1:-1,offset=p.width/2+9;
      const x=q.x-dz/n*offset*side,z=q.z+dx/n*offset*side;
      streetLampSites.push({x:x/scale,y:height(x,z),z:z/scale});
    }
  }
  if(streetLampSites.length){
    const postGeometry=new T.CylinderGeometry(1,1,1,10),globeGeometry=new T.SphereGeometry(1,12,8),dummy=new T.Object3D();
    const posts=new T.InstancedMesh(postGeometry,new T.MeshStandardMaterial({color:'#394447',roughness:.62,metalness:.38}),streetLampSites.length);
    const globes=new T.InstancedMesh(globeGeometry,new T.MeshStandardMaterial({color:'#ffe4a8',emissive:'#ffb85c',emissiveIntensity:.72,roughness:.34}),streetLampSites.length);
    posts.name='village-lamp-posts';globes.name='village-lamp-globes';
    for(let j=0;j<streetLampSites.length;j++){
      const q=streetLampSites[j];dummy.position.set(q.x,q.y+1.35,q.z);dummy.scale.set(.065,2.7,.065);dummy.updateMatrix();posts.setMatrixAt(j,dummy.matrix);
      dummy.position.set(q.x,q.y+2.76,q.z);dummy.scale.set(.18,.22,.18);dummy.updateMatrix();globes.setMatrixAt(j,dummy.matrix);
    }
    posts.castShadow=posts.receiveShadow=true;globes.castShadow=false;globes.receiveShadow=true;
    for(const mesh of [posts,globes]){mesh.instanceMatrix.needsUpdate=true;mesh.computeBoundingSphere();root.add(mesh);}
  }
  // Harbor canopy beside the fuel pump. It leaves the interactive pump clear.
  const market=new T.Group();market.name='harbor-market';market.position.set(marketPoint.x/scale,height(marketPoint.x,marketPoint.z),marketPoint.z/scale);root.add(market);
  for(const x of [-1.4,1.4])for(const z of [-.6,.6])tube(market,'#876742',[x,1.2,z],[.045,2.4,.045]);
  const canopy=cube(market,'#cc8660',[0,2.35,0],[3.2,.07,1.8]);canopy.rotation.x=.07;
  for(let j=0;j<6;j++){
    const color=j%2?'#f3dfbe':'#bd6f53',x=(j-2.5)*.53;
    const stripe=cube(market,color,[x,2.395,0],[.53,.035,1.76]);stripe.rotation.x=.07;
    cube(market,color,[x,2.27,.92],[.49,.18,.055]);
  }
  cube(market,'#a98961',[0,.7,0],[2.8,.15,.9]);
  const fruitColors=['#ce5949','#e6b64d','#709a55'];
  for(let j=0;j<5;j++){
    const x=(j-2)*.5;cube(market,'#a68854',[x,.88,0],[.43,.20,.68]);
    if(ell)for(let k=0;k<3;k++)ell(market,fruitColors[(j+k)%fruitColors.length],[x+(k-1)*.11,1.05,(k%2?-.11:.11)],[.075,.085,.075]);
  }
  market.userData.marketDetails={canopyStripes:6,valances:6,produce:15};
  batch(market);
  return {building,houses,buildings};
}
