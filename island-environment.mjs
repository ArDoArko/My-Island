import * as T from 'three';

// Presentation assets only: no random calls from the saved world generator.
const ROOT = 'assets/materials-v018/';
const names = ['paving','sand','grass','plaster','teal','roof','wood','rock','leaf'];
const wood = new Set(['#a68854','#876742','#845f3f','#7d654b','#866642','#a98961','#765734','#9a743e','#786040','#8a6d49','#927652','#6e5942']);
export function terrainMask(terrain) {
  const c=document.createElement('canvas');c.width=terrain.width;c.height=terrain.height;
  const ctx=c.getContext('2d');ctx.scale(c.width/4600,c.height/2900);
  ctx.fillStyle='#0000ff';ctx.fillRect(0,0,4600,2900);
  ctx.fillStyle='#00ff00';
  for(const [x,y,rx,ry] of [[1750,1300,1420,840],[3380,500,450,240],[4100,2400,325,225]]){ctx.beginPath();ctx.ellipse(x,y,rx,ry,0,0,Math.PI*2);ctx.fill();}
  ctx.strokeStyle='#ff0000';ctx.lineWidth=100;ctx.lineCap='round';
  ctx.beginPath();ctx.moveTo(1440,1190);ctx.bezierCurveTo(1520,1080,1750,1190,1980,1280);ctx.bezierCurveTo(2420,1510,2790,1440,3200,1320);ctx.stroke();
  ctx.lineWidth=80;ctx.beginPath();ctx.moveTo(1800,1180);ctx.bezierCurveTo(2100,930,2820,920,3220,730);ctx.lineTo(3370,480);ctx.stroke();
  ctx.fillStyle='#ff0000';ctx.beginPath();ctx.ellipse(1570,1160,290,200,0,0,Math.PI*2);ctx.fill();
  return c;
}
export function createMaterials(renderer) {
  const textures = new Map(), materials = new Map();
  let loaded = 0, failed = 0;
  const loader = new T.TextureLoader();
  for (const name of names) {
    const texture = loader.load(ROOT + name + '.webp', () => loaded++, undefined, () => failed++);
    texture.colorSpace = T.SRGBColorSpace;
    texture.wrapS = texture.wrapT = T.RepeatWrapping;
    texture.anisotropy = Math.min(8,renderer.capabilities.getMaxAnisotropy());
    textures.set(name,texture);
  }
  function surface(name,color='#ffffff',repeat=1,bump=.035) {
    const key = name + color + repeat + bump;
    if (!materials.has(key)) {
      const map=textures.get(name).clone();map.repeat.set(repeat,repeat);
      const m=new T.MeshStandardMaterial({color,map,bumpMap:map,bumpScale:bump,roughness:name==='leaf'?.78:.93});
      // Clones made before decoding share the Source and need the upload flag.
      textures.get(name).addEventListener('dispose',()=>map.dispose());
      const image=textures.get(name);
      m.userData.textureSource=image;
      materials.set(key,m);
    }
    return materials.get(key);
  }
  function forColor(color) {
    if(wood.has(color))return surface('wood','#ded4c4',1,.045);
    if(color==='#e2dbc7')return surface('plaster','#f8f4e7',1,.027);
    if(color==='#ba7655')return surface('roof','#e4d6c7',2,.055);
    if(color==='#a7c4b7')return surface('teal','#e7ede3',1,.035);
    if(color==='#92968b'||color==='#777a6b')return surface('rock','#ddd9cf',1,.065);
    return null;
  }
  function update() {
    for(const m of materials.values())if(m.userData.textureSource.image&&m.map.image!==m.userData.textureSource.image){m.map.source=m.userData.textureSource.source;m.map.needsUpdate=true;}
    // Shared Sources decode asynchronously. Mark each clone once after decode.
    for(const m of materials.values())if(m.map.image&&!m.userData.uploaded){m.map.needsUpdate=true;m.userData.uploaded=true;}
  }
  function ground(mask) {
    mask.colorSpace=T.NoColorSpace;
    const m=new T.MeshStandardMaterial({color:'#ffffff',map:mask,roughness:1});
    m.onBeforeCompile=shader=>{
      shader.uniforms.uSand={value:textures.get('sand')};
      shader.uniforms.uGrass={value:textures.get('grass')};
      shader.uniforms.uPaving={value:textures.get('paving')};
      shader.fragmentShader=shader.fragmentShader.replace('#include <common>',`#include <common>
        uniform sampler2D uSand; uniform sampler2D uGrass; uniform sampler2D uPaving;`);
      shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`
        vec3 maskColor=texture2D(map,vMapUv).rgb;
        vec2 detailUV=vMapUv*vec2(57.5,36.25);
        float green=maskColor.g;
        float trail=maskColor.r;
        vec3 sand=texture2D(uSand,detailUV*1.4).rgb;
        vec3 grass=texture2D(uGrass,detailUV*1.15).rgb;
        vec3 paving=texture2D(uPaving,detailUV*.72).rgb;
        diffuseColor.rgb=sand*maskColor.b+paving*trail+grass*green;
        diffuseColor.rgb*=.94+.06*sin(vMapUv.x*170.0)*sin(vMapUv.y*155.0);`);
      // Fine surface relief, without adding a heavyweight postprocessing pass.
      shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>
        float relief=dot(texture2D(uSand,vMapUv*vec2(90.,57.)).rgb,vec3(.333));
        normal=normalize(normal+vec3(dFdx(relief)*.14,dFdy(relief)*.14,0.));`);
    };
    return m;
  }
  return {textures,surface,forColor,ground,update,stats:()=>({loaded,failed,total:names.length}),dispose(){for(const m of materials.values()){m.map.dispose();m.dispose();}for(const t of textures.values())t.dispose();}};
}

// The view direction matches WASD, the D-pad and cameraVector in both modes.
export function cameraPose({x,z,surface,yaw,pitch,mode='first',distance=4.8,bob=0}) {
  const eye=surface+1.64+bob;
  if(mode==='first')return {position:new T.Vector3(x,eye,z),target:new T.Vector3(x-Math.sin(yaw)*Math.cos(pitch),eye-Math.sin(pitch),z-Math.cos(yaw)*Math.cos(pitch))};
  const target=new T.Vector3(x,surface+1.3,z);
  return {position:new T.Vector3(x+Math.sin(yaw)*Math.cos(pitch)*distance,target.y+.65+Math.sin(pitch)*distance,z+Math.cos(yaw)*Math.cos(pitch)*distance),target};
}

export function addGroundCover(scene,terrainHeight,scale,mask,small) {
  const random=(()=>{let seed=90210;return ()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/4294967296);})();
  const g=new T.BufferGeometry();
  g.setAttribute('position',new T.Float32BufferAttribute([-.035,0,0,.035,0,0,-.028,.14,.02,.028,.14,.02,0,.28,.075],3));
  g.setAttribute('uv',new T.Float32BufferAttribute([0,0,1,0,0,.5,1,.5,.5,1],2));g.setIndex([0,1,2,1,3,2,2,3,4]);g.computeVertexNormals();
  const m=new T.MeshStandardMaterial({color:'#ffffff',side:T.DoubleSide,roughness:1});
  m.defines={USE_UV:''};
  const wind={value:0},base={value:new T.Vector4(0,0,0,0)};
  m.onBeforeCompile=shader=>{
    shader.uniforms.uWind=wind;shader.uniforms.uBase=base;
    shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nuniform float uWind; uniform vec4 uBase;');
    shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
      vec3 grassWorld=(instanceMatrix*vec4(position,1.)).xyz;
      transformed.x+=sin(uWind+grassWorld.x*.8+grassWorld.z)*position.y*.13;
      if(abs(grassWorld.x-uBase.x)<uBase.z&&abs(grassWorld.z-uBase.y)<uBase.w)transformed.y-=100.;`);
    shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>','#include <color_fragment>\ndiffuseColor.rgb*=.7+.35*vUv.y;');
  };
  const count=small?2800:5500,batch=new T.InstancedMesh(g,m,count);batch.receiveShadow=true;batch.frustumCulled=false;
  const data=mask.getContext('2d').getImageData(0,0,mask.width,mask.height).data;
  const dummy=new T.Object3D();let placed=0;
  for(let attempt=0;attempt<count*8&&placed<count;attempt++){
    const px=random()*4600,pz=random()*2900;
    const i=(Math.min(mask.height-1,Math.floor(pz/2900*mask.height))*mask.width+Math.min(mask.width-1,Math.floor(px/4600*mask.width)))*4;
    if(data[i+1]<data[i]+12||data[i+1]<85)continue;
    const x=px/scale,z=pz/scale,y=terrainHeight(x,z);if(y<.1)continue;
    dummy.position.set(x,y-.015,z);dummy.rotation.set(0,random()*Math.PI*2,0);dummy.scale.setScalar(.7+random()*.8);dummy.updateMatrix();batch.setMatrixAt(placed,dummy.matrix);
    batch.setColorAt(placed,new T.Color().setHSL(.20+random()*.055,.25+random()*.15,.3+random()*.12));placed++;
  }
  batch.count=placed;scene.add(batch);
  return {update(seconds,layout){wind.value=seconds;if(layout)base.value.set(layout.floor.x/scale,layout.floor.y/scale,layout.floor.w/(scale*2)+.1,layout.floor.h/(scale*2)+.1);else base.value.set(0,0,0,0);},dispose(){scene.remove(batch);g.dispose();m.dispose();batch.dispose();}};
}

export function detailBase(hut,layout,{cube,tube},materials) {
  const w=layout.width/80,d=layout.depth/80,h=layout.wallHeight/80,ridge=layout.roofRidge/80;
  for(const o of hut.children){
    if(o.name==='floor')o.material=materials.surface('paving','#e5ded0',2,.045);
    if(o.name==='wall')o.material=materials.surface('plaster','#f8f4e7',1,.025);
    if(o.name==='roof')o.material=materials.surface('roof','#efe2d5',2,.045);
  }
  // Cornices and shutters sit on already-solid walls. The door stays clear.
  for(const side of [-1,1]){
    const beam=cube(hut,'#876742',[side*w/2,h-.09,0],[.13,.16,d+.18]);beam.name='trim';
    if(layout.walls.length){
      const window=cube(hut,'#a7c4b7',[side*(w/2+.064),1.55,-d*.16],[.02,.9,.7]);window.name='shutter';
      for(let i=0;i<8;i++)cube(hut,'#876742',[side*(w/2+.08),1.17+i*.11,-d*.16],[.025,.035,.69]);
      for(const z of [-d*.16-.39,-d*.16+.39])cube(hut,'#e2dbc7',[side*(w/2+.078),1.56,z],[.045,1.02,.065]);
    }
  }
  const cap=tube(hut,'#ba7655',[0,ridge+.02,0],[.09,d+.42,.09]);cap.rotation.x=Math.PI/2;cap.name='ridge';
  const back=cube(hut,'#e2dbc7',[0,h-.05,-d/2-.066],[w+.08,.16,.06]);back.name='trim';
  return hut;
}
