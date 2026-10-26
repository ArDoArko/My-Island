import * as T from 'three';

// The driver is a child of the hull: seat, body and feet share yaw and rocking.
// Measurements are in metres, in the same coordinate system as buildHuman.
export const HELM = {seatZ:-.28,seatTop:.72,hips:.84,eye:1.65};
export function freezeMotorboatParts(boat){
  let count=0;
  boat.traverse(part=>{if(part===boat)return;part.updateMatrix();part.matrixAutoUpdate=false;count++;});
  boat.userData.staticPartCount=count;return count;
}
export function buildMotorboat(root,{cube,ell,mat}) {
  const boat=new T.Group();boat.name='campaign-boat';root.add(boat);
  ell(boat,'#233f52',[0,.05,0],[.85,.36,1.9]);
  ell(boat,'#dedbd0',[0,.22,0],[.8,.23,1.85]);
  const deck=cube(boat,'#6e5942',[0,.4,-.15],[1.3,.08,2.7]);deck.name='boat-deck';
  const seat=cube(boat,'#3b5355',[0,.57,HELM.seatZ],[.92,.30,.48]);seat.name='boat-seat';
  cube(boat,'#e7e0d0',[0,.73,.5],[1,.65,.36]);
  const glass=new T.Mesh(new T.BoxGeometry(1.2,.48,.025),new T.MeshPhysicalMaterial({color:'#b9e4eb',transparent:true,opacity:.4,roughness:.1}));
  glass.position.set(0,1.15,.68);boat.add(glass);
  const wheel=new T.Mesh(new T.TorusGeometry(.20,.026,8,20),mat('#2e3538'));
  wheel.name='boat-wheel';wheel.position.set(0,1.05,.28);boat.add(wheel);
  const railGeometry=new T.CylinderGeometry(1,1,1,8),rails=new T.InstancedMesh(railGeometry,mat('#d6dedc'),10),dummy=new T.Object3D();
  rails.name='boat-rails';let railIndex=0;
  for(const x of [-.68,.68]){
    for(const z of [.15,.85,1.55]){
      dummy.position.set(x,.75,z);dummy.rotation.set(0,0,0);dummy.scale.set(.025,.50,.025);dummy.updateMatrix();rails.setMatrixAt(railIndex++,dummy.matrix);
    }
    for(const y of [.86,1.01]){
      dummy.position.set(x,y,.85);dummy.rotation.set(Math.PI/2,0,0);dummy.scale.set(.025,1.40,.025);dummy.updateMatrix();rails.setMatrixAt(railIndex++,dummy.matrix);
    }
  }
  rails.castShadow=true;rails.instanceMatrix.needsUpdate=true;rails.computeBoundingSphere();boat.add(rails);
  const gaugeMaterial=new T.MeshStandardMaterial({color:'#b7d6d8',emissive:'#31545a',emissiveIntensity:.38,roughness:.28});
  const gauges=new T.InstancedMesh(new T.CylinderGeometry(.10,.10,.03,16),gaugeMaterial,3);gauges.name='boat-gauges';
  for(let j=0;j<3;j++){
    dummy.position.set((j-1)*.28,.91,.30);dummy.rotation.set(Math.PI/2,0,0);dummy.scale.set(j===1?1:.82,j===1?1:.82,1);dummy.updateMatrix();gauges.setMatrixAt(j,dummy.matrix);
  }
  gauges.instanceMatrix.needsUpdate=true;gauges.computeBoundingSphere();boat.add(gauges);
  const portLight=ell(boat,'#d84e46',[-.65,.79,.94],[.075,.075,.075]),starboardLight=ell(boat,'#52b878',[.65,.79,.94],[.075,.075,.075]);
  portLight.name='boat-port-light';starboardLight.name='boat-starboard-light';
  portLight.material=new T.MeshStandardMaterial({color:'#d84e46',emissive:'#b32b25',emissiveIntensity:.9});
  starboardLight.material=new T.MeshStandardMaterial({color:'#52b878',emissive:'#238547',emissiveIntensity:.9});
  cube(boat,'#303b40',[0,.35,-1.75],[.42,.6,.38]);cube(boat,'#303b40',[0,-.12,-1.85],[.22,.65,.25]);
  const wake=new T.Mesh(new T.PlaneGeometry(1.5,5),new T.MeshBasicMaterial({color:'#d0ebe6',transparent:true,opacity:.25,depthWrite:false}));
  wake.rotation.x=-Math.PI/2;wake.position.set(0,.03,-3.3);boat.add(wake);
  boat.userData.boatDetails={rails:10,gauges:3,navigationLights:2};
  freezeMotorboatParts(boat);
  return {boat,wake};
}
export function seatDriver(person,boat) {
  if(person.root.parent===boat)return false;
  boat.add(person.root);person.root.position.set(0,0,HELM.seatZ);person.root.rotation.set(0,0,0);
  person.rig.rotation.set(0,0,0);person.hips.position.y=HELM.hips;
  for(const arm of person.arms){arm.arm.rotation.x=-.85;arm.arm.rotation.z=-arm.side*.18;arm.forearm.rotation.x=-.72;}
  for(const leg of person.legs){leg.thigh.rotation.x=-1.68;leg.calf.rotation.x=1.68;leg.shoe.rotation.x=0;}
  return true;
}
