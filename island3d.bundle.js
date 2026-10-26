var MyIsland3D=(()=>{var Nl=Object.defineProperty;var sf=Object.getOwnPropertyDescriptor;var af=Object.getOwnPropertyNames;var of=Object.prototype.hasOwnProperty;var lf=(n,e)=>{for(var t in e)Nl(n,t,{get:e[t],enumerable:!0})},cf=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of af(e))!of.call(n,r)&&r!==t&&Nl(n,r,{get:()=>e[r],enumerable:!(i=sf(e,r))||i.enumerable});return n};var hf=n=>cf(Nl({},"__esModule",{value:!0}),n);var A_={};lf(A_,{SCALE:()=>Te,actionPose:()=>$d,avatarRigNeedsPose:()=>Ld,baseElevation:()=>hh,buildBase:()=>Zd,buildHuman:()=>uh,cameraVector:()=>Id,create:()=>E_,createCampaign:()=>b_,drawCampaign2D:()=>lh,fishPose:()=>Kd,fishWithinRenderRange:()=>jd,heldRigNeedsPose:()=>Ud,islandShadowInterval:()=>Qd,legPose:()=>Hd,nearestWithin:()=>Pd,replaceCameraObstacle:()=>Nd,resourceMatricesNeedUpdate:()=>Od,scaleWorldLabels:()=>Gd,terrainHeight:()=>Dn,updateAppearanceKey:()=>Wd,updateAvatarFrameCycle:()=>zd,updateAvatarPoseCycle:()=>Vd,updateBaseFrame:()=>Xd,updateBoarFrameState:()=>kd,updateBoarGait:()=>Bd,updateBuildingState:()=>qd,updateCameraCollisionState:()=>Fd,updateChapterState:()=>Yd,updateFishPart:()=>Pl,updateIslandFrameState:()=>Ms,updateRemoteMotion:()=>Dd,updateTerrainAnchor:()=>ma,walkSurface:()=>ch});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Vh=0,mc=1,Gh=2;var gc=1,is=2,oi=3,yi=0,un=1,Wt=2,wi=0,Qi=1,xc=2,_c=3,yc=4,Hh=5,Fi=100,Wh=101,Xh=102,qh=103,Yh=104,Zh=200,Jh=201,$h=202,Kh=203,Xa=204,qa=205,jh=206,Qh=207,eu=208,tu=209,nu=210,iu=211,ru=212,su=213,au=214,yo=0,vo=1,Mo=2,er=3,bo=4,So=5,wo=6,To=7,vc=0,ou=1,lu=2,Ti=0,cu=1,hu=2,uu=3,rs=4,du=5,fu=6,pu=7;var Mc=300,dr=301,fr=302,Eo=303,Ao=304,ia=306,Gr=1e3,Ni=1001,Ya=1002,bn=1003,mu=1004;var ra=1005;var Yn=1006,Co=1007;var Vi=1008;var $n=1009,bc=1010,Sc=1011,ss=1012,Ro=1013,Gi=1014,Kn=1015,as=1016,Io=1017,Po=1018,os=1020,wc=35902,Tc=35899,Ec=1021,Ac=1022,Bn=1023,Hr=1026,ls=1027,Do=1028,Lo=1029,Cc=1030,Uo=1031;var No=1033,sa=33776,aa=33777,oa=33778,la=33779,Fo=35840,zo=35841,Oo=35842,Bo=35843,ko=36196,Vo=37492,Go=37496,Ho=37808,Wo=37809,Xo=37810,qo=37811,Yo=37812,Zo=37813,Jo=37814,$o=37815,Ko=37816,jo=37817,Qo=37818,el=37819,tl=37820,nl=37821,il=36492,rl=36494,sl=36495,al=36283,ol=36284,ll=36285,cl=36286;var ks=2300,Za=2301,Ha=2302,oc=2400,lc=2401,cc=2402;var gu=3200,xu=3201;var Rc=0,_u=1,jn="",Yt="srgb",tr="srgb-linear",Vs="linear",Ot="srgb";var ji=7680;var hc=519,yu=512,vu=513,Mu=514,Ic=515,bu=516,Su=517,wu=518,Tu=519,Ja=35044;var Pc="300 es",qn=2e3,Gs=2001;var vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dh=1234567,Os=Math.PI/180,Wr=180/Math.PI;function xi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function xt(n,e,t){return Math.max(e,Math.min(t,n))}function Dc(n,e){return(n%e+e)%e}function uf(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function df(n,e,t){return n!==e?(t-n)/(e-n):0}function Bs(n,e,t){return(1-t)*n+t*e}function ff(n,e,t,i){return Bs(n,e,1-Math.exp(-t*i))}function pf(n,e=1){return e-Math.abs(Dc(n,e*2)-e)}function mf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function gf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function xf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function _f(n,e){return n+Math.random()*(e-n)}function yf(n){return n*(.5-Math.random())}function vf(n){n!==void 0&&(dh=n);let e=dh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Mf(n){return n*Os}function bf(n){return n*Wr}function Sf(n){return(n&n-1)===0&&n!==0}function wf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Tf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ef(n,e,t,i,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),f=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*h,c*u,c*d,o*l);break;case"YZY":n.set(c*d,o*h,c*u,o*l);break;case"ZXZ":n.set(c*u,c*d,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*f,o*l);break;case"YXY":n.set(c*f,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ca={DEG2RAD:Os,RAD2DEG:Wr,generateUUID:xi,clamp:xt,euclideanModulo:Dc,mapLinear:uf,inverseLerp:df,lerp:Bs,damp:ff,pingpong:pf,smoothstep:mf,smootherstep:gf,randInt:xf,randFloat:_f,randFloatSpread:yf,seededRandom:vf,degToRad:Mf,radToDeg:bf,isPowerOfTwo:Sf,ceilPowerOfTwo:wf,floorPowerOfTwo:Tf,setQuaternionFromProperEuler:Ef,normalize:zt,denormalize:Xn},He=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Mi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],d=s[a+0],f=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==d||l!==f||h!==g){let m=1-o,p=c*d+l*f+h*g+u*x,b=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let A=Math.sqrt(y),C=Math.atan2(A,p*b);m=Math.sin(m*C)/A,o=Math.sin(o*C)/A}let v=o*b;if(c=c*m+d*v,l=l*m+f*v,h=h*m+g*v,u=u*m+x*v,m===1-o){let A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),u=o(s/2),d=c(i/2),f=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),h=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-s*u,this.z=r+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fl.copy(this).projectOnVector(e),this.sub(Fl)}reflect(e){return this.sub(Fl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fl=new k,fh=new Mi,ot=class n{constructor(e,t,i,r,s,a,o,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=r[0],m=r[3],p=r[6],b=r[1],y=r[4],v=r[7],A=r[2],C=r[5],L=r[8];return s[0]=a*x+o*b+c*A,s[3]=a*m+o*y+c*C,s[6]=a*p+o*v+c*L,s[1]=l*x+h*b+u*A,s[4]=l*m+h*y+u*C,s[7]=l*p+h*v+u*L,s[2]=d*x+f*b+g*A,s[5]=d*m+f*y+g*C,s[8]=d*p+f*v+g*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,f=l*s-a*c,g=t*u+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(r*l-h*i)*x,e[2]=(o*i-r*a)*x,e[3]=d*x,e[4]=(h*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=f*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(zl.makeScale(e,t)),this}rotate(e){return this.premultiply(zl.makeRotation(-e)),this}translate(e,t){return this.premultiply(zl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},zl=new ot;function Lc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Xr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Eu(){let n=Xr("canvas");return n.style.display="block",n}var ph={};function qr(n){n in ph||(ph[n]=!0,console.warn(n))}function Au(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var mh=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gh=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Af(){let n={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ot&&(r.r=_i(r.r),r.g=_i(r.g),r.b=_i(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ot&&(r.r=Vr(r.r),r.g=Vr(r.g),r.b=Vr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===jn?Vs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return qr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return qr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[tr]:{primaries:e,whitePoint:i,transfer:Vs,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:i,transfer:Ot,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),n}var Tt=Af();function _i(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Sr,$a=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Sr===void 0&&(Sr=Xr("canvas")),Sr.width=e.width,Sr.height=e.height;let r=Sr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Sr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=_i(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_i(t[i]/255)*255):t[i]=_i(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Cf=0,Yr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ol(r[a].image)):s.push(Ol(r[a]))}else s=Ol(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Ol(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$a.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Rf=0,Bl=new k,gn=class n extends vi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ni,r=Ni,s=Yn,a=Vi,o=Bn,c=$n,l=n.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=xi(),this.name="",this.source=new Yr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bl).x}get height(){return this.source.getSize(Bl).y}get depth(){return this.source.getSize(Bl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gr:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case Ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gr:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case Ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Mc;gn.DEFAULT_ANISOTROPY=1;var Et=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,v=(f+1)/2,A=(p+1)/2,C=(h+d)/4,L=(u+x)/4,O=(g+m)/4;return y>v&&y>A?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=C/i,s=L/i):v>A?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=C/r,s=O/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=L/s,r=O/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ka=class extends vi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new gn(r);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Yr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ri=class extends Ka{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Hs=class extends gn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ja=class extends gn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var si=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gn):Gn.fromBufferAttribute(s,a),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ya.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ya.copy(i.boundingBox)),ya.applyMatrix4(e.matrixWorld),this.union(ya)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),va.subVectors(this.max,As),wr.subVectors(e.a,As),Tr.subVectors(e.b,As),Er.subVectors(e.c,As),Ri.subVectors(Tr,wr),Ii.subVectors(Er,Tr),Zi.subVectors(wr,Er);let t=[0,-Ri.z,Ri.y,0,-Ii.z,Ii.y,0,-Zi.z,Zi.y,Ri.z,0,-Ri.x,Ii.z,0,-Ii.x,Zi.z,0,-Zi.x,-Ri.y,Ri.x,0,-Ii.y,Ii.x,0,-Zi.y,Zi.x,0];return!kl(t,wr,Tr,Er,va)||(t=[1,0,0,0,1,0,0,0,1],!kl(t,wr,Tr,Er,va))?!1:(Ma.crossVectors(Ri,Ii),t=[Ma.x,Ma.y,Ma.z],kl(t,wr,Tr,Er,va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ui=[new k,new k,new k,new k,new k,new k,new k,new k],Gn=new k,ya=new si,wr=new k,Tr=new k,Er=new k,Ri=new k,Ii=new k,Zi=new k,As=new k,va=new k,Ma=new k,Ji=new k;function kl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ji.fromArray(n,s);let o=r.x*Math.abs(Ji.x)+r.y*Math.abs(Ji.y)+r.z*Math.abs(Ji.z),c=e.dot(Ji),l=t.dot(Ji),h=i.dot(Ji);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var If=new si,Cs=new k,Vl=new k,bi=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):If.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cs.subVectors(e,this.center);let t=Cs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Cs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cs.copy(e.center).add(Vl)),this.expandByPoint(Cs.copy(e.center).sub(Vl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},di=new k,Gl=new k,ba=new k,Pi=new k,Hl=new k,Sa=new k,Wl=new k,Zr=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Gl.copy(e).add(t).multiplyScalar(.5),ba.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(Gl);let s=e.distanceTo(t)*.5,a=-this.direction.dot(ba),o=Pi.dot(this.direction),c=-Pi.dot(ba),l=Pi.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=s*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Gl).addScaledVector(ba,d),f}intersectSphere(e,t){di.subVectors(e.center,this.origin);let i=di.dot(this.direction),r=di.dot(di)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,i,r,s){Hl.subVectors(t,e),Sa.subVectors(i,e),Wl.crossVectors(Hl,Sa);let a=this.direction.dot(Wl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pi.subVectors(this.origin,e);let c=o*this.direction.dot(Sa.crossVectors(Pi,Sa));if(c<0)return null;let l=o*this.direction.dot(Hl.cross(Pi));if(l<0||c+l>a)return null;let h=-o*Pi.dot(Wl);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Lt=class n{constructor(e,t,i,r,s,a,o,c,l,h,u,d,f,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,h,u,d,f,g,x,m)}set(e,t,i,r,s,a,o,c,l,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Ar.setFromMatrixColumn(e,0).length(),s=1/Ar.setFromMatrixColumn(e,1).length(),a=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d-x*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pf,e,Df)}lookAt(e,t,i){let r=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),Di.crossVectors(i,An),Di.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Di.crossVectors(i,An)),Di.normalize(),wa.crossVectors(An,Di),r[0]=Di.x,r[4]=wa.x,r[8]=An.x,r[1]=Di.y,r[5]=wa.y,r[9]=An.y,r[2]=Di.z,r[6]=wa.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],b=i[3],y=i[7],v=i[11],A=i[15],C=r[0],L=r[4],O=r[8],T=r[12],S=r[1],E=r[5],z=r[9],N=r[13],I=r[2],U=r[6],G=r[10],q=r[14],B=r[3],te=r[7],ie=r[11],we=r[15];return s[0]=a*C+o*S+c*I+l*B,s[4]=a*L+o*E+c*U+l*te,s[8]=a*O+o*z+c*G+l*ie,s[12]=a*T+o*N+c*q+l*we,s[1]=h*C+u*S+d*I+f*B,s[5]=h*L+u*E+d*U+f*te,s[9]=h*O+u*z+d*G+f*ie,s[13]=h*T+u*N+d*q+f*we,s[2]=g*C+x*S+m*I+p*B,s[6]=g*L+x*E+m*U+p*te,s[10]=g*O+x*z+m*G+p*ie,s[14]=g*T+x*N+m*q+p*we,s[3]=b*C+y*S+v*I+A*B,s[7]=b*L+y*E+v*U+A*te,s[11]=b*O+y*z+v*G+A*ie,s[15]=b*T+y*N+v*q+A*we,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+s*c*u-r*l*u-s*o*d+i*l*d+r*o*f-i*c*f)+x*(+t*c*f-t*l*d+s*a*d-r*a*f+r*l*h-s*c*h)+m*(+t*l*u-t*o*f-s*a*u+i*a*f+s*o*h-i*l*h)+p*(-r*o*h-t*c*u+t*o*d+r*a*u-i*a*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],b=u*m*l-x*d*l+x*c*f-o*m*f-u*c*p+o*d*p,y=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,v=h*x*l-g*u*l+g*o*f-a*x*f-h*o*p+a*u*p,A=g*u*c-h*x*c-g*o*d+a*x*d+h*o*m-a*u*m,C=t*b+i*y+r*v+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/C;return e[0]=b*L,e[1]=(x*d*s-u*m*s-x*r*f+i*m*f+u*r*p-i*d*p)*L,e[2]=(o*m*s-x*c*s+x*r*l-i*m*l-o*r*p+i*c*p)*L,e[3]=(u*c*s-o*d*s-u*r*l+i*d*l+o*r*f-i*c*f)*L,e[4]=y*L,e[5]=(h*m*s-g*d*s+g*r*f-t*m*f-h*r*p+t*d*p)*L,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*p-t*c*p)*L,e[7]=(a*d*s-h*c*s+h*r*l-t*d*l-a*r*f+t*c*f)*L,e[8]=v*L,e[9]=(g*u*s-h*x*s-g*i*f+t*x*f+h*i*p-t*u*p)*L,e[10]=(a*x*s-g*o*s+g*i*l-t*x*l-a*i*p+t*o*p)*L,e[11]=(h*o*s-a*u*s-h*i*l+t*u*l+a*i*f-t*o*f)*L,e[12]=A*L,e[13]=(h*x*r-g*u*r+g*i*d-t*x*d-h*i*m+t*u*m)*L,e[14]=(g*o*r-a*x*r-g*i*c+t*x*c+a*i*m-t*o*m)*L,e[15]=(a*u*r-h*o*r+h*i*c-t*u*c-a*i*d+t*o*d)*L,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,f=s*h,g=s*u,x=a*h,m=a*u,p=o*u,b=c*l,y=c*h,v=c*u,A=i.x,C=i.y,L=i.z;return r[0]=(1-(x+p))*A,r[1]=(f+v)*A,r[2]=(g-y)*A,r[3]=0,r[4]=(f-v)*C,r[5]=(1-(d+p))*C,r[6]=(m+b)*C,r[7]=0,r[8]=(g+y)*L,r[9]=(m-b)*L,r[10]=(1-(d+x))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Ar.set(r[0],r[1],r[2]).length(),a=Ar.set(r[4],r[5],r[6]).length(),o=Ar.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Hn.copy(this);let l=1/s,h=1/a,u=1/o;return Hn.elements[0]*=l,Hn.elements[1]*=l,Hn.elements[2]*=l,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=u,Hn.elements[9]*=u,Hn.elements[10]*=u,t.setFromRotationMatrix(Hn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=qn,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),g,x;if(c)g=s/(a-s),x=a*s/(a-s);else if(o===qn)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Gs)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=qn,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-r),d=-(t+e)/(t-e),f=-(i+r)/(i-r),g,x;if(c)g=1/(a-s),x=a/(a-s);else if(o===qn)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===Gs)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ar=new k,Hn=new Lt,Pf=new k(0,0,0),Df=new k(1,1,1),Di=new k,wa=new k,An=new k,xh=new Lt,_h=new Mi,Zn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _h.setFromEuler(this),this.setFromQuaternion(_h,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var Jr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Lf=0,yh=new k,Cr=new Mi,fi=new Lt,Ta=new k,Rs=new k,Uf=new k,Nf=new Mi,vh=new k(1,0,0),Mh=new k(0,1,0),bh=new k(0,0,1),Sh={type:"added"},Ff={type:"removed"},Rr={type:"childadded",child:null},Xl={type:"childremoved",child:null},Pt=class n extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new k,t=new Zn,i=new Mi,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new ot}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(vh,e)}rotateY(e){return this.rotateOnAxis(Mh,e)}rotateZ(e){return this.rotateOnAxis(bh,e)}translateOnAxis(e,t){return yh.copy(e).applyQuaternion(this.quaternion),this.position.add(yh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vh,e)}translateY(e){return this.translateOnAxis(Mh,e)}translateZ(e){return this.translateOnAxis(bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ta.copy(e):Ta.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(Rs,Ta,this.up):fi.lookAt(Ta,Rs,this.up),this.quaternion.setFromRotationMatrix(fi),r&&(fi.extractRotation(r.matrixWorld),Cr.setFromRotationMatrix(fi),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sh),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ff),Xl.child=e,this.dispatchEvent(Xl),Xl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sh),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,e,Uf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,Nf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Pt.DEFAULT_UP=new k(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=new k,pi=new k,ql=new k,mi=new k,Ir=new k,Pr=new k,wh=new k,Yl=new k,Zl=new k,Jl=new k,$l=new Et,Kl=new Et,jl=new Et,gi=class n{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Wn.subVectors(e,t),r.cross(Wn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Wn.subVectors(r,t),pi.subVectors(i,t),ql.subVectors(e,t);let a=Wn.dot(Wn),o=Wn.dot(pi),c=Wn.dot(ql),l=pi.dot(pi),h=pi.dot(ql),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,mi.x),c.addScaledVector(a,mi.y),c.addScaledVector(o,mi.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return $l.setScalar(0),Kl.setScalar(0),jl.setScalar(0),$l.fromBufferAttribute(e,t),Kl.fromBufferAttribute(e,i),jl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector($l,s.x),a.addScaledVector(Kl,s.y),a.addScaledVector(jl,s.z),a}static isFrontFacing(e,t,i,r){return Wn.subVectors(i,t),pi.subVectors(e,t),Wn.cross(pi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Wn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;Ir.subVectors(r,i),Pr.subVectors(s,i),Yl.subVectors(e,i);let c=Ir.dot(Yl),l=Pr.dot(Yl);if(c<=0&&l<=0)return t.copy(i);Zl.subVectors(e,r);let h=Ir.dot(Zl),u=Pr.dot(Zl);if(h>=0&&u<=h)return t.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Ir,a);Jl.subVectors(e,s);let f=Ir.dot(Jl),g=Pr.dot(Jl);if(g>=0&&f<=g)return t.copy(s);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Pr,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return wh.subVectors(s,r),o=(u-h)/(u-h+(f-g)),t.copy(r).addScaledVector(wh,o);let p=1/(m+x+d);return a=x*p,o=d*p,t.copy(i).addScaledVector(Ir,a).addScaledVector(Pr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function Ql(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Tt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Tt.workingColorSpace){if(e=Dc(e,1),t=xt(t,0,1),i=xt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ql(a,s,e+1/3),this.g=Ql(a,s,e),this.b=Ql(a,s,e-1/3)}return Tt.colorSpaceToWorking(this,r),this}setStyle(e,t=Yt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){let i=Cu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Tt.workingToColorSpace(mn.copy(this),e),Math.round(xt(mn.r*255,0,255))*65536+Math.round(xt(mn.g*255,0,255))*256+Math.round(xt(mn.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(mn.copy(this),t);let i=mn.r,r=mn.g,s=mn.b,a=Math.max(i,r,s),o=Math.min(i,r,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Yt){Tt.workingToColorSpace(mn.copy(this),e);let t=mn.r,i=mn.g,r=mn.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(Ea);let i=Bs(Li.h,Ea.h,t),r=Bs(Li.s,Ea.s,t),s=Bs(Li.l,Ea.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new je;je.NAMES=Cu;var zf=0,ai=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=Qi,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xa,this.blendDst=qa,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(i.blending=this.blending),this.side!==yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xa&&(i.blendSrc=this.blendSrc),this.blendDst!==qa&&(i.blendDst=this.blendDst),this.blendEquation!==Fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Sn=class extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Jt=new k,Aa=new He,Of=0,nn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Of++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ja,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Aa.fromBufferAttribute(this,t),Aa.applyMatrix3(e),this.setXY(t,Aa.x,Aa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ja&&(e.usage=this.usage),e}};var Ws=class extends nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Xs=class extends nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var tt=class extends nn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Bf=0,On=new Lt,ec=new Pt,Dr=new k,Cn=new si,Is=new si,on=new k,Ft=class n extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lc(e)?Xs:Ws)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ot().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,i){return On.makeTranslation(e,t,i),this.applyMatrix4(On),this}scale(e,t,i){return On.makeScale(e,t,i),this.applyMatrix4(On),this}lookAt(e){return ec.lookAt(e),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tt(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Is.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(Cn.min,Is.min),Cn.expandByPoint(on),on.addVectors(Cn.max,Is.max),Cn.expandByPoint(on)):(Cn.expandByPoint(Is.min),Cn.expandByPoint(Is.max))}Cn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)on.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(on));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)on.fromBufferAttribute(o,l),c&&(Dr.fromBufferAttribute(e,l),on.add(Dr)),r=Math.max(r,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let O=0;O<i.count;O++)o[O]=new k,c[O]=new k;let l=new k,h=new k,u=new k,d=new He,f=new He,g=new He,x=new k,m=new k;function p(O,T,S){l.fromBufferAttribute(i,O),h.fromBufferAttribute(i,T),u.fromBufferAttribute(i,S),d.fromBufferAttribute(s,O),f.fromBufferAttribute(s,T),g.fromBufferAttribute(s,S),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let E=1/(f.x*g.y-g.x*f.y);isFinite(E)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(E),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(E),o[O].add(x),o[T].add(x),o[S].add(x),c[O].add(m),c[T].add(m),c[S].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let O=0,T=b.length;O<T;++O){let S=b[O],E=S.start,z=S.count;for(let N=E,I=E+z;N<I;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let y=new k,v=new k,A=new k,C=new k;function L(O){A.fromBufferAttribute(r,O),C.copy(A);let T=o[O];y.copy(T),y.sub(A.multiplyScalar(A.dot(T))).normalize(),v.crossVectors(C,T);let E=v.dot(c[O])<0?-1:1;a.setXYZW(O,y.x,y.y,y.z,E)}for(let O=0,T=b.length;O<T;++O){let S=b[O],E=S.start,z=S.count;for(let N=E,I=E+z;N<I;N+=3)L(e.getX(N+0)),L(e.getX(N+1)),L(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let r=new k,s=new k,a=new k,o=new k,c=new k,l=new k,h=new k,u=new k;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new nn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=e(c,i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Th=new Lt,$i=new Zr,Ca=new bi,Eh=new k,Ra=new k,Ia=new k,Pa=new k,tc=new k,Da=new k,Ah=new k,La=new k,ct=class extends Pt{constructor(e=new Ft,t=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Da.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(tc.fromBufferAttribute(u,e),a?Da.addScaledVector(tc,h):Da.addScaledVector(tc.sub(t),h))}t.add(Da)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(s),$i.copy(e.ray).recast(e.near),!(Ca.containsPoint($i.origin)===!1&&($i.intersectSphere(Ca,Eh)===null||$i.origin.distanceToSquared(Eh)>(e.far-e.near)**2))&&(Th.copy(s).invert(),$i.copy(e.ray).applyMatrix4(Th),!(i.boundingBox!==null&&$i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,A=y;v<A;v+=3){let C=o.getX(v),L=o.getX(v+1),O=o.getX(v+2);r=Ua(this,p,e,i,l,h,u,C,L,O),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let b=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);r=Ua(this,a,e,i,l,h,u,b,y,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,A=y;v<A;v+=3){let C=v,L=v+1,O=v+2;r=Ua(this,p,e,i,l,h,u,C,L,O),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let b=m,y=m+1,v=m+2;r=Ua(this,a,e,i,l,h,u,b,y,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function kf(n,e,t,i,r,s,a,o){let c;if(e.side===un?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===yi,o),c===null)return null;La.copy(o),La.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(La);return l<t.near||l>t.far?null:{distance:l,point:La.clone(),object:n}}function Ua(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Ra),n.getVertexPosition(c,Ia),n.getVertexPosition(l,Pa);let h=kf(n,e,t,i,Ra,Ia,Pa,Ah);if(h){let u=new k;gi.getBarycoord(Ah,Ra,Ia,Pa,u),r&&(h.uv=gi.getInterpolatedAttribute(r,o,c,l,u,new He)),s&&(h.uv1=gi.getInterpolatedAttribute(s,o,c,l,u,new He)),a&&(h.normal=gi.getInterpolatedAttribute(a,o,c,l,u,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new k,materialIndex:0};gi.getNormal(Ra,Ia,Pa,d.normal),h.face=d,h.barycoord=u}return h}var hn=class n extends Ft{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(u,2));function g(x,m,p,b,y,v,A,C,L,O,T){let S=v/L,E=A/O,z=v/2,N=A/2,I=C/2,U=L+1,G=O+1,q=0,B=0,te=new k;for(let ie=0;ie<G;ie++){let we=ie*E-N;for(let pe=0;pe<U;pe++){let Ve=pe*S-z;te[x]=Ve*b,te[m]=we*y,te[p]=I,l.push(te.x,te.y,te.z),te[x]=0,te[m]=0,te[p]=C>0?1:-1,h.push(te.x,te.y,te.z),u.push(pe/L),u.push(1-ie/O),q+=1}}for(let ie=0;ie<O;ie++)for(let we=0;we<L;we++){let pe=d+we+U*ie,Ve=d+we+U*(ie+1),mt=d+(we+1)+U*(ie+1),Qe=d+(we+1)+U*ie;c.push(pe,Ve,Qe),c.push(Ve,mt,Qe),B+=6}o.addGroup(f,B,T),f+=B,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function pr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function xn(n){let e={};for(let t=0;t<n.length;t++){let i=pr(n[t]);for(let r in i)e[r]=i[r]}return e}function Vf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Uc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}var hl={clone:pr,merge:xn},Gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gf,this.fragmentShader=Hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=Vf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},qs=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ui=new k,Ch=new He,Rh=new He,tn=class extends qs{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wr*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,Ch,Rh),t.subVectors(Rh,Ch)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Os*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Lr=-90,Ur=1,Qa=class extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new tn(Lr,Ur,e,t);r.layers=this.layers,this.add(r);let s=new tn(Lr,Ur,e,t);s.layers=this.layers,this.add(s);let a=new tn(Lr,Ur,e,t);a.layers=this.layers,this.add(a);let o=new tn(Lr,Ur,e,t);o.layers=this.layers,this.add(o);let c=new tn(Lr,Ur,e,t);c.layers=this.layers,this.add(c);let l=new tn(Lr,Ur,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Gs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ys=class extends gn{constructor(e=[],t=dr,i,r,s,a,o,c,l,h){super(e,t,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},eo=class extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ys(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new hn(5,5,5),s=new wn({name:"CubemapFromEquirect",uniforms:pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:wi});s.uniforms.tEquirect.value=t;let a=new ct(r,s),o=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Yn),new Qa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}},Ue=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wf={type:"move"},$r=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wf)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ue;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var nr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new je(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ir=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Zs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ja,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yn=new k,Kr=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array),s=zt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},jr=class extends ai{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Nr,Ps=new k,Fr=new k,zr=new k,Or=new He,Ds=new He,Ru=new Lt,Na=new k,Ls=new k,Fa=new k,Ih=new He,nc=new He,Ph=new He,Js=class extends Pt{constructor(e=new jr){if(super(),this.isSprite=!0,this.type="Sprite",Nr===void 0){Nr=new Ft;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Zs(t,5);Nr.setIndex([0,1,2,0,2,3]),Nr.setAttribute("position",new Kr(i,3,0,!1)),Nr.setAttribute("uv",new Kr(i,2,3,!1))}this.geometry=Nr,this.material=e,this.center=new He(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fr.setFromMatrixScale(this.matrixWorld),Ru.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fr.multiplyScalar(-zr.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let a=this.center;za(Na.set(-.5,-.5,0),zr,a,Fr,r,s),za(Ls.set(.5,-.5,0),zr,a,Fr,r,s),za(Fa.set(.5,.5,0),zr,a,Fr,r,s),Ih.set(0,0),nc.set(1,0),Ph.set(1,1);let o=e.ray.intersectTriangle(Na,Ls,Fa,!1,Ps);if(o===null&&(za(Ls.set(-.5,.5,0),zr,a,Fr,r,s),nc.set(0,1),o=e.ray.intersectTriangle(Na,Fa,Ls,!1,Ps),o===null))return;let c=e.ray.origin.distanceTo(Ps);c<e.near||c>e.far||t.push({distance:c,point:Ps.clone(),uv:gi.getInterpolation(Ps,Na,Ls,Fa,Ih,nc,Ph,new He),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function za(n,e,t,i,r,s){Or.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Ds.x=s*Or.x-r*Or.y,Ds.y=r*Or.x+s*Or.y):Ds.copy(Or),n.copy(e),n.x+=Ds.x,n.y+=Ds.y,n.applyMatrix4(Ru)}var to=class extends gn{constructor(e=null,t=1,i=1,r,s,a,o,c,l=bn,h=bn,u,d){super(null,a,o,c,l,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qr=class extends nn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Br=new Lt,Dh=new Lt,Oa=[],Lh=new si,Xf=new Lt,Us=new ct,Ns=new bi,Dt=class extends ct{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Xf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Br),Lh.copy(e.boundingBox).applyMatrix4(Br),this.boundingBox.union(Lh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Br),Ns.copy(e.boundingSphere).applyMatrix4(Br),this.boundingSphere.union(Ns)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Us.geometry=this.geometry,Us.material=this.material,Us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ns.copy(this.boundingSphere),Ns.applyMatrix4(i),e.ray.intersectsSphere(Ns)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Br),Dh.multiplyMatrices(i,Br),Us.matrixWorld=Dh,Us.raycast(e,Oa);for(let a=0,o=Oa.length;a<o;a++){let c=Oa[a];c.instanceId=s,c.object=this,t.push(c)}Oa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Qr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new to(new Float32Array(r*this.count),r,this.count,Do,Kn));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ic=new k,qf=new k,Yf=new ot,ii=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=ic.subVectors(i,t).cross(qf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ic),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Yf.getNormalMatrix(e),r=this.coplanarPoint(ic).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ki=new bi,Zf=new He(.5,.5),Ba=new k,es=class{constructor(e=new ii,t=new ii,i=new ii,r=new ii,s=new ii,a=new ii){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qn,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],f=s[7],g=s[8],x=s[9],m=s[10],p=s[11],b=s[12],y=s[13],v=s[14],A=s[15];if(r[0].setComponents(l-a,f-h,p-g,A-b).normalize(),r[1].setComponents(l+a,f+h,p+g,A+b).normalize(),r[2].setComponents(l+o,f+u,p+x,A+y).normalize(),r[3].setComponents(l-o,f-u,p-x,A-y).normalize(),i)r[4].setComponents(c,d,m,v).normalize(),r[5].setComponents(l-c,f-d,p-m,A-v).normalize();else if(r[4].setComponents(l-c,f-d,p-m,A-v).normalize(),t===qn)r[5].setComponents(l+c,f+d,p+m,A+v).normalize();else if(t===Gs)r[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){Ki.center.set(0,0,0);let t=Zf.distanceTo(e.center);return Ki.radius=.7071067811865476+t,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Ba.x=r.normal.x>0?e.max.x:e.min.x,Ba.y=r.normal.y>0?e.max.y:e.min.y,Ba.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ba)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var zi=class extends ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},no=new k,io=new k,Uh=new Lt,Fs=new Zr,ka=new bi,rc=new k,Nh=new k,rr=class extends Pt{constructor(e=new Ft,t=new zi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)no.fromBufferAttribute(t,r-1),io.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=no.distanceTo(io);e.setAttribute("lineDistance",new tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(r),ka.radius+=s,e.ray.intersectsSphere(ka)===!1)return;Uh.copy(r).invert(),Fs.copy(e.ray).applyMatrix4(Uh);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=h.getX(x),b=h.getX(x+1),y=Va(this,e,Fs,c,p,b,x);y&&t.push(y)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=Va(this,e,Fs,c,x,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=Va(this,e,Fs,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Va(this,e,Fs,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Va(n,e,t,i,r,s,a){let o=n.geometry.attributes.position;if(no.fromBufferAttribute(o,r),io.fromBufferAttribute(o,s),t.distanceSqToSegment(no,io,rc,Nh)>i)return;rc.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(rc);if(!(l<e.near||l>e.far))return{distance:l,point:Nh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Oi=class extends gn{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},$s=class extends gn{constructor(e,t,i=Gi,r,s,a,o=bn,c=bn,l,h=Hr,u=1){if(h!==Hr&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ks=class extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Gt=class n extends Ft{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],f=[],g=0,x=[],m=i/2,p=0;b(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(f,2));function b(){let v=new k,A=new k,C=0,L=(t-e)/i;for(let O=0;O<=s;O++){let T=[],S=O/s,E=S*(t-e)+e;for(let z=0;z<=r;z++){let N=z/r,I=N*c+o,U=Math.sin(I),G=Math.cos(I);A.x=E*U,A.y=-S*i+m,A.z=E*G,u.push(A.x,A.y,A.z),v.set(U,L,G).normalize(),d.push(v.x,v.y,v.z),f.push(N,1-S),T.push(g++)}x.push(T)}for(let O=0;O<r;O++)for(let T=0;T<s;T++){let S=x[T][O],E=x[T+1][O],z=x[T+1][O+1],N=x[T][O+1];(e>0||T!==0)&&(h.push(S,E,N),C+=3),(t>0||T!==s-1)&&(h.push(E,z,N),C+=3)}l.addGroup(p,C,0),p+=C}function y(v){let A=g,C=new He,L=new k,O=0,T=v===!0?e:t,S=v===!0?1:-1;for(let z=1;z<=r;z++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let E=g;for(let z=0;z<=r;z++){let I=z/r*c+o,U=Math.cos(I),G=Math.sin(I);L.x=T*G,L.y=m*S,L.z=T*U,u.push(L.x,L.y,L.z),d.push(0,S,0),C.x=U*.5+.5,C.y=G*.5*S+.5,f.push(C.x,C.y),g++}for(let z=0;z<r;z++){let N=A+z,I=E+z;v===!0?h.push(I,I+1,N):h.push(I+1,I,N),O+=3}l.addGroup(p,O,v===!0?1:2),p+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Jn=class n extends Gt{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ro=class n extends Ft{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];o(r),l(i),h(),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(s.slice(),3)),this.setAttribute("uv",new tt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let y=new k,v=new k,A=new k;for(let C=0;C<t.length;C+=3)f(t[C+0],y),f(t[C+1],v),f(t[C+2],A),c(y,v,A,b)}function c(b,y,v,A){let C=A+1,L=[];for(let O=0;O<=C;O++){L[O]=[];let T=b.clone().lerp(v,O/C),S=y.clone().lerp(v,O/C),E=C-O;for(let z=0;z<=E;z++)z===0&&O===C?L[O][z]=T:L[O][z]=T.clone().lerp(S,z/E)}for(let O=0;O<C;O++)for(let T=0;T<2*(C-O)-1;T++){let S=Math.floor(T/2);T%2===0?(d(L[O][S+1]),d(L[O+1][S]),d(L[O][S])):(d(L[O][S+1]),d(L[O+1][S+1]),d(L[O+1][S]))}}function l(b){let y=new k;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(b),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function h(){let b=new k;for(let y=0;y<s.length;y+=3){b.x=s[y+0],b.y=s[y+1],b.z=s[y+2];let v=m(b)/2/Math.PI+.5,A=p(b)/Math.PI+.5;a.push(v,1-A)}g(),u()}function u(){for(let b=0;b<a.length;b+=6){let y=a[b+0],v=a[b+2],A=a[b+4],C=Math.max(y,v,A),L=Math.min(y,v,A);C>.9&&L<.1&&(y<.2&&(a[b+0]+=1),v<.2&&(a[b+2]+=1),A<.2&&(a[b+4]+=1))}}function d(b){s.push(b.x,b.y,b.z)}function f(b,y){let v=b*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){let b=new k,y=new k,v=new k,A=new k,C=new He,L=new He,O=new He;for(let T=0,S=0;T<s.length;T+=9,S+=6){b.set(s[T+0],s[T+1],s[T+2]),y.set(s[T+3],s[T+4],s[T+5]),v.set(s[T+6],s[T+7],s[T+8]),C.set(a[S+0],a[S+1]),L.set(a[S+2],a[S+3]),O.set(a[S+4],a[S+5]),A.copy(b).add(y).add(v).divideScalar(3);let E=m(A);x(C,S+0,b,E),x(L,S+2,y,E),x(O,S+4,v,E)}}function x(b,y,v,A){A<0&&b.x===1&&(a[y]=b.x-1),v.x===0&&v.z===0&&(a[y]=A/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var sr=class n extends ro{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},js=class n extends Ft{constructor(e=[new He(0,-.5),new He(.5,0),new He(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=xt(r,0,Math.PI*2);let s=[],a=[],o=[],c=[],l=[],h=1/t,u=new k,d=new He,f=new k,g=new k,x=new k,m=0,p=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let b=0;b<=t;b++){let y=i+b*h*r,v=Math.sin(y),A=Math.cos(y);for(let C=0;C<=e.length-1;C++){u.x=e[C].x*v,u.y=e[C].y,u.z=e[C].x*A,a.push(u.x,u.y,u.z),d.x=b/t,d.y=C/(e.length-1),o.push(d.x,d.y);let L=c[3*C+0]*v,O=c[3*C+1],T=c[3*C+0]*A;l.push(L,O,T)}}for(let b=0;b<t;b++)for(let y=0;y<e.length-1;y++){let v=y+b*e.length,A=v,C=v+e.length,L=v+e.length+1,O=v+1;s.push(A,C,O),s.push(L,O,C)}this.setIndex(s),this.setAttribute("position",new tt(a,3)),this.setAttribute("uv",new tt(o,2)),this.setAttribute("normal",new tt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var Rn=class n extends Ft{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let b=p*d-a;for(let y=0;y<l;y++){let v=y*u-s;g.push(v,-b,0),x.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){let y=b+l*p,v=b+l*(p+1),A=b+1+l*(p+1),C=b+1+l*p;f.push(y,v,C),f.push(v,A,C)}this.setIndex(f),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ar=class n extends Ft{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/r,f=new k,g=new He;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){let p=s+m/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<r;x++){let m=x*(i+1);for(let p=0;p<i;p++){let b=p+m,y=b,v=b+i+1,A=b+i+2,C=b+1;o.push(y,v,C),o.push(v,A,C)}}this.setIndex(o),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Tn=class n extends Ft{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new k,d=new k,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let b=[],y=p/i,v=0;p===0&&a===0?v=.5/t:p===i&&c===Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){let C=A/t;u.x=-e*Math.cos(r+C*s)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(r+C*s)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(C+v,1-y),b.push(l++)}h.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){let y=h[p][b+1],v=h[p][b],A=h[p+1][b],C=h[p+1][b+1];(p!==0||a>0)&&f.push(y,v,C),(p!==i-1||c<Math.PI)&&f.push(v,A,C)}this.setIndex(f),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Si=class n extends Ft{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let a=[],o=[],c=[],l=[],h=new k,u=new k,d=new k;for(let f=0;f<=i;f++)for(let g=0;g<=r;g++){let x=g/r*s,m=f/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=r;g++){let x=(r+1)*f+g-1,m=(r+1)*(f-1)+g-1,p=(r+1)*(f-1)+g,b=(r+1)*f+g;a.push(x,m,b),a.push(m,p,b)}this.setIndex(a),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Bt=class extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rc,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Qs=class extends Bt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var so=class extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ao=class extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ga(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Jf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var or=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},oo=class extends or{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oc,endingEnd:oc}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case lc:s=e,o=2*t-i;break;case cc:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case lc:a=e,c=2*i-t;break;case cc:a=1,c=i+r[1]-r[0];break;default:a=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(r-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,b=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*x+.5*g,v=f*m-f*x;for(let A=0;A!==o;++A)s[A]=p*a[h+A]+b*a[l+A]+y*a[c+A]+v*a[u+A];return s}},lo=class extends or{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}},co=class extends or{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},In=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ga(t,this.TimeBufferType),this.values=Ga(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ga(e.times,Array),values:Ga(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new oo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ks:t=this.InterpolantFactoryMethodDiscrete;break;case Za:t=this.InterpolantFactoryMethodLinear;break;case Ha:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ks;case this.InterpolantFactoryMethodLinear:return Za;case this.InterpolantFactoryMethodSmooth:return Ha}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&Jf(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ha,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(r)c=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};In.prototype.ValueTypeName="";In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=Za;var Bi=class extends In{constructor(e,t,i){super(e,t,i)}};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=ks;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var ho=class extends In{constructor(e,t,i,r){super(e,t,i,r)}};ho.prototype.ValueTypeName="color";var uo=class extends In{constructor(e,t,i,r){super(e,t,i,r)}};uo.prototype.ValueTypeName="number";var fo=class extends or{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(r-t),l=e*o;for(let h=l+o;l!==h;l+=4)Mi.slerpFlat(s,0,a,l-o,a,l,c);return s}},ea=class extends In{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new fo(this.times,this.values,this.getValueSize(),e)}};ea.prototype.ValueTypeName="quaternion";ea.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends In{constructor(e,t,i){super(e,t,i)}};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=ks;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var po=class extends In{constructor(e,t,i,r){super(e,t,i,r)}};po.prototype.ValueTypeName="vector";var Wa={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},mo=class{constructor(e,t,i){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Iu=new mo,ts=class{constructor(e){this.manager=e!==void 0?e:Iu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ts.DEFAULT_MATERIAL_NAME="__DEFAULT";var kr=new WeakMap,go=class extends ts{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Wa.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=kr.get(a);u===void 0&&(u=[],kr.set(a,u)),u.push({onLoad:t,onError:r})}return a}let o=Xr("img");function c(){h(),t&&t(this);let u=kr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}kr.delete(this),s.manager.itemEnd(e)}function l(u){h(),r&&r(u),Wa.remove(`image:${e}`);let d=kr.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}kr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Wa.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var ta=class extends ts{constructor(e){super(e)}load(e,t,i,r){let s=new gn,a=new go(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},ns=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},lr=class extends ns{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},sc=new Lt,Fh=new k,zh=new k,xo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new es,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Fh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fh),zh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zh),t.updateMatrixWorld(),sc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Oh=new Lt,zs=new k,ac=new k,uc=class extends xo{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new Et(2,1,1,1),new Et(0,1,1,1),new Et(3,1,1,1),new Et(1,1,1,1),new Et(3,0,1,1),new Et(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),zs.setFromMatrixPosition(e.matrixWorld),i.position.copy(zs),ac.copy(i.position),ac.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ac),i.updateMatrixWorld(),r.makeTranslation(-zs.x,-zs.y,-zs.z),Oh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oh,i.coordinateSystem,i.reversedDepth)}},cr=class extends ns{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new uc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},na=class extends qs{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},dc=class extends xo{constructor(){super(new na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hr=class extends ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new dc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var _o=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Nc="\\[\\]\\.:\\/",$f=new RegExp("["+Nc+"]","g"),Fc="[^"+Nc+"]",Kf="[^"+Nc.replace("\\.","")+"]",jf=/((?:WC+[\/:])*)/.source.replace("WC",Fc),Qf=/(WCOD+)?/.source.replace("WCOD",Kf),ep=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fc),tp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fc),np=new RegExp("^"+jf+Qf+ep+tp+"$"),ip=["material","materials","bones","map"],fc=class{constructor(e,t,i){let r=i||Vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Vt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($f,"")}static parseTrackName(e){let t=np.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);ip.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[r];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Vt.Composite=fc;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var R_=new Float32Array(1);var Bh=new Lt,ur=class{constructor(e,t,i=0,r=1/0){this.ray=new Zr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bh),this}intersectObject(e,t=!0,i=[]){return pc(e,this,i,t),i.sort(kh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)pc(e[r],this,i,t);return i.sort(kh),i}};function kh(n,e){return n.distance-e.distance}function pc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let a=0,o=s.length;a<o;a++)pc(s[a],e,t,!0)}}function zc(n,e,t,i){let r=rp(i);switch(t){case Ec:return n*e;case Do:return n*e/r.components*r.byteLength;case Lo:return n*e/r.components*r.byteLength;case Cc:return n*e*2/r.components*r.byteLength;case Uo:return n*e*2/r.components*r.byteLength;case Ac:return n*e*3/r.components*r.byteLength;case Bn:return n*e*4/r.components*r.byteLength;case No:return n*e*4/r.components*r.byteLength;case sa:case aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oa:case la:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zo:case Bo:return Math.max(n,16)*Math.max(e,8)/4;case Fo:case Oo:return Math.max(n,8)*Math.max(e,8)/2;case ko:case Vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case qo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Zo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case $o:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ko:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case jo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case el:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case tl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case nl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case il:case rl:case sl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case al:case ol:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ll:case cl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rp(n){switch(n){case $n:case bc:return{byteLength:1,components:1};case ss:case Sc:case as:return{byteLength:2,components:1};case Io:case Po:return{byteLength:2,components:4};case Gi:case Ro:case Kn:return{byteLength:4,components:1};case wc:case Tc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ed(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function cp(n){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var hp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,up=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_p=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Lp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Up=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Np=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,am=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,om=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,um=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ym=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Om=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ym=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$m=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ng=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ig=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_g=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ig=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ug=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:hp,alphahash_pars_fragment:up,alphamap_fragment:dp,alphamap_pars_fragment:fp,alphatest_fragment:pp,alphatest_pars_fragment:mp,aomap_fragment:gp,aomap_pars_fragment:xp,batching_pars_vertex:_p,batching_vertex:yp,begin_vertex:vp,beginnormal_vertex:Mp,bsdfs:bp,iridescence_fragment:Sp,bumpmap_pars_fragment:wp,clipping_planes_fragment:Tp,clipping_planes_pars_fragment:Ep,clipping_planes_pars_vertex:Ap,clipping_planes_vertex:Cp,color_fragment:Rp,color_pars_fragment:Ip,color_pars_vertex:Pp,color_vertex:Dp,common:Lp,cube_uv_reflection_fragment:Up,defaultnormal_vertex:Np,displacementmap_pars_vertex:Fp,displacementmap_vertex:zp,emissivemap_fragment:Op,emissivemap_pars_fragment:Bp,colorspace_fragment:kp,colorspace_pars_fragment:Vp,envmap_fragment:Gp,envmap_common_pars_fragment:Hp,envmap_pars_fragment:Wp,envmap_pars_vertex:Xp,envmap_physical_pars_fragment:nm,envmap_vertex:qp,fog_vertex:Yp,fog_pars_vertex:Zp,fog_fragment:Jp,fog_pars_fragment:$p,gradientmap_pars_fragment:Kp,lightmap_pars_fragment:jp,lights_lambert_fragment:Qp,lights_lambert_pars_fragment:em,lights_pars_begin:tm,lights_toon_fragment:im,lights_toon_pars_fragment:rm,lights_phong_fragment:sm,lights_phong_pars_fragment:am,lights_physical_fragment:om,lights_physical_pars_fragment:lm,lights_fragment_begin:cm,lights_fragment_maps:hm,lights_fragment_end:um,logdepthbuf_fragment:dm,logdepthbuf_pars_fragment:fm,logdepthbuf_pars_vertex:pm,logdepthbuf_vertex:mm,map_fragment:gm,map_pars_fragment:xm,map_particle_fragment:_m,map_particle_pars_fragment:ym,metalnessmap_fragment:vm,metalnessmap_pars_fragment:Mm,morphinstance_vertex:bm,morphcolor_vertex:Sm,morphnormal_vertex:wm,morphtarget_pars_vertex:Tm,morphtarget_vertex:Em,normal_fragment_begin:Am,normal_fragment_maps:Cm,normal_pars_fragment:Rm,normal_pars_vertex:Im,normal_vertex:Pm,normalmap_pars_fragment:Dm,clearcoat_normal_fragment_begin:Lm,clearcoat_normal_fragment_maps:Um,clearcoat_pars_fragment:Nm,iridescence_pars_fragment:Fm,opaque_fragment:zm,packing:Om,premultiplied_alpha_fragment:Bm,project_vertex:km,dithering_fragment:Vm,dithering_pars_fragment:Gm,roughnessmap_fragment:Hm,roughnessmap_pars_fragment:Wm,shadowmap_pars_fragment:Xm,shadowmap_pars_vertex:qm,shadowmap_vertex:Ym,shadowmask_pars_fragment:Zm,skinbase_vertex:Jm,skinning_pars_vertex:$m,skinning_vertex:Km,skinnormal_vertex:jm,specularmap_fragment:Qm,specularmap_pars_fragment:eg,tonemapping_fragment:tg,tonemapping_pars_fragment:ng,transmission_fragment:ig,transmission_pars_fragment:rg,uv_pars_fragment:sg,uv_pars_vertex:ag,uv_vertex:og,worldpos_vertex:lg,background_vert:cg,background_frag:hg,backgroundCube_vert:ug,backgroundCube_frag:dg,cube_vert:fg,cube_frag:pg,depth_vert:mg,depth_frag:gg,distanceRGBA_vert:xg,distanceRGBA_frag:_g,equirect_vert:yg,equirect_frag:vg,linedashed_vert:Mg,linedashed_frag:bg,meshbasic_vert:Sg,meshbasic_frag:wg,meshlambert_vert:Tg,meshlambert_frag:Eg,meshmatcap_vert:Ag,meshmatcap_frag:Cg,meshnormal_vert:Rg,meshnormal_frag:Ig,meshphong_vert:Pg,meshphong_frag:Dg,meshphysical_vert:Lg,meshphysical_frag:Ug,meshtoon_vert:Ng,meshtoon_frag:Fg,points_vert:zg,points_frag:Og,shadow_vert:Bg,shadow_frag:kg,sprite_vert:Vg,sprite_frag:Gg},be={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},li={basic:{uniforms:xn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:xn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new je(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:xn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:xn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:xn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new je(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:xn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:xn([be.points,be.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:xn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:xn([be.common,be.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:xn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:xn([be.sprite,be.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:xn([be.common,be.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:xn([be.lights,be.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};li.physical={uniforms:xn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var ul={r:0,b:0,g:0},mr=new Zn,Hg=new Lt;function Wg(n,e,t,i,r,s,a){let o=new je(0),c=s===!0?0:1,l,h,u=null,d=0,f=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function x(y){let v=!1,A=g(y);A===null?p(o,c):A&&A.isColor&&(p(A,1),v=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,v){let A=g(v);A&&(A.isCubeTexture||A.mapping===ia)?(h===void 0&&(h=new ct(new hn(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:pr(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,L,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),mr.copy(v.backgroundRotation),mr.x*=-1,mr.y*=-1,mr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Hg.makeRotationFromEuler(mr)),h.material.toneMapped=Tt.getTransfer(A.colorSpace)!==Ot,(u!==A||d!==A.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new ct(new Rn(2,2),new wn({name:"BackgroundMaterial",uniforms:pr(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Tt.getTransfer(A.colorSpace)!==Ot,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=A,d=A.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,v){y.getRGB(ul,Uc(n)),i.buffers.color.setClear(ul.r,ul.g,ul.b,v,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(o,c)},render:x,addToRenderList:m,dispose:b}}function Xg(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,a=!1;function o(S,E,z,N,I){let U=!1,G=u(N,z,E);s!==G&&(s=G,l(s.object)),U=f(S,N,z,I),U&&g(S,N,z,I),I!==null&&e.update(I,n.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,v(S,E,z,N),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function u(S,E,z){let N=z.wireframe===!0,I=i[S.id];I===void 0&&(I={},i[S.id]=I);let U=I[E.id];U===void 0&&(U={},I[E.id]=U);let G=U[N];return G===void 0&&(G=d(c()),U[N]=G),G}function d(S){let E=[],z=[],N=[];for(let I=0;I<t;I++)E[I]=0,z[I]=0,N[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:z,attributeDivisors:N,object:S,attributes:{},index:null}}function f(S,E,z,N){let I=s.attributes,U=E.attributes,G=0,q=z.getAttributes();for(let B in q)if(q[B].location>=0){let ie=I[B],we=U[B];if(we===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(we=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(we=S.instanceColor)),ie===void 0||ie.attribute!==we||we&&ie.data!==we.data)return!0;G++}return s.attributesNum!==G||s.index!==N}function g(S,E,z,N){let I={},U=E.attributes,G=0,q=z.getAttributes();for(let B in q)if(q[B].location>=0){let ie=U[B];ie===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor));let we={};we.attribute=ie,ie&&ie.data&&(we.data=ie.data),I[B]=we,G++}s.attributes=I,s.attributesNum=G,s.index=N}function x(){let S=s.newAttributes;for(let E=0,z=S.length;E<z;E++)S[E]=0}function m(S){p(S,0)}function p(S,E){let z=s.newAttributes,N=s.enabledAttributes,I=s.attributeDivisors;z[S]=1,N[S]===0&&(n.enableVertexAttribArray(S),N[S]=1),I[S]!==E&&(n.vertexAttribDivisor(S,E),I[S]=E)}function b(){let S=s.newAttributes,E=s.enabledAttributes;for(let z=0,N=E.length;z<N;z++)E[z]!==S[z]&&(n.disableVertexAttribArray(z),E[z]=0)}function y(S,E,z,N,I,U,G){G===!0?n.vertexAttribIPointer(S,E,z,I,U):n.vertexAttribPointer(S,E,z,N,I,U)}function v(S,E,z,N){x();let I=N.attributes,U=z.getAttributes(),G=E.defaultAttributeValues;for(let q in U){let B=U[q];if(B.location>=0){let te=I[q];if(te===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(te=S.instanceColor)),te!==void 0){let ie=te.normalized,we=te.itemSize,pe=e.get(te);if(pe===void 0)continue;let Ve=pe.buffer,mt=pe.type,Qe=pe.bytesPerElement,J=mt===n.INT||mt===n.UNSIGNED_INT||te.gpuType===Ro;if(te.isInterleavedBufferAttribute){let $=te.data,oe=$.stride,Ae=te.offset;if($.isInstancedInterleavedBuffer){for(let Ce=0;Ce<B.locationSize;Ce++)p(B.location+Ce,$.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Ce=0;Ce<B.locationSize;Ce++)m(B.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let Ce=0;Ce<B.locationSize;Ce++)y(B.location+Ce,we/B.locationSize,mt,ie,oe*Qe,(Ae+we/B.locationSize*Ce)*Qe,J)}else{if(te.isInstancedBufferAttribute){for(let $=0;$<B.locationSize;$++)p(B.location+$,te.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let $=0;$<B.locationSize;$++)m(B.location+$);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let $=0;$<B.locationSize;$++)y(B.location+$,we/B.locationSize,mt,ie,we*Qe,we/B.locationSize*$*Qe,J)}}else if(G!==void 0){let ie=G[q];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(B.location,ie);break;case 3:n.vertexAttrib3fv(B.location,ie);break;case 4:n.vertexAttrib4fv(B.location,ie);break;default:n.vertexAttrib1fv(B.location,ie)}}}}b()}function A(){O();for(let S in i){let E=i[S];for(let z in E){let N=E[z];for(let I in N)h(N[I].object),delete N[I];delete E[z]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;let E=i[S.id];for(let z in E){let N=E[z];for(let I in N)h(N[I].object),delete N[I];delete E[z]}delete i[S.id]}function L(S){for(let E in i){let z=i[E];if(z[S.id]===void 0)continue;let N=z[S.id];for(let I in N)h(N[I].object),delete N[I];delete z[S.id]}}function O(){T(),a=!0,s!==r&&(s=r,l(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:O,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function qg(n,e,t){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function a(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,i,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Yg(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(L){return!(L!==Bn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let O=L===as&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==$n&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Kn&&!O)}function c(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:A,maxSamples:C}}function Zg(n){let e=this,t=null,i=0,r=!1,s=!1,a=new ii,o=new ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||r;return r=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{let b=s?0:i,y=b*4,v=p.clippingState||null;c.value=v,v=h(g,d,y,f);for(let A=0;A!==y;++A)v[A]=t[A];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=f;y!==x;++y,v+=4)a.copy(u[y]).applyMatrix4(b,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Jg(n){let e=new WeakMap;function t(a,o){return o===Eo?a.mapping=dr:o===Ao&&(a.mapping=fr),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Eo||o===Ao)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new eo(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var hs=4,Pu=[.125,.215,.35,.446,.526,.582],_r=20,Oc=new na,Du=new je,Bc=null,kc=0,Vc=0,Gc=!1,xr=(1+Math.sqrt(5))/2,cs=1/xr,Lu=[new k(-xr,cs,0),new k(xr,cs,0),new k(-cs,0,xr),new k(cs,0,xr),new k(0,xr,-cs),new k(0,xr,cs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],$g=new k,pl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:o=$g}=s;Bc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bc,kc,Vc),this._renderer.xr.enabled=Gc,e.scissorTest=!1,dl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:as,format:Bn,colorSpace:tr,depthBuffer:!1},r=Uu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uu(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kg(s)),this._blurMaterial=jg(s,e,t)}return r}_compileMaterial(e){let t=new ct(this._lodPlanes[0],e);this._renderer.compile(t,Oc)}_sceneToCubeUV(e,t,i,r,s){let c=new tn(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Du),u.toneMapping=Ti,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));let x=new Sn({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),m=new ct(new hn,x),p=!1,b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,p=!0):(x.color.copy(Du),p=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[y],s.y,s.z)):v===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[y]));let A=this._cubeSize;dl(r,v*A,y>2?A:0,A,A),u.setRenderTarget(r),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=b}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===dr||e.mapping===fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nu());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new ct(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;dl(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Oc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Lu[(r-s-1)%Lu.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ct(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*_r-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):_r;m>_r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_r}`);let p=[],b=0;for(let L=0;L<_r;++L){let O=L/x,T=Math.exp(-O*O/2);p.push(T),L===0?b+=T:L<m&&(b+=2*T)}for(let L=0;L<p.length;L++)p[L]=p[L]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;let v=this._sizeLods[r],A=3*v*(r>y-hs?r-y+hs:0),C=4*(this._cubeSize-v);dl(t,A,C,3*v,2*v),c.setRenderTarget(t),c.render(u,Oc)}};function Kg(n){let e=[],t=[],i=[],r=n,s=n-hs+1+Pu.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);t.push(o);let c=1/o;a>n-hs?c=Pu[a-n+hs-1]:a===0&&(c=0),i.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,b=new Float32Array(x*g*f),y=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let C=0;C<f;C++){let L=C%3*2/3-1,O=C>2?0:-1,T=[L,O,0,L+2/3,O,0,L+2/3,O+1,0,L,O,0,L+2/3,O+1,0,L,O+1,0];b.set(T,x*g*C),y.set(d,m*g*C);let S=[C,C,C,C,C,C];v.set(S,p*g*C)}let A=new Ft;A.setAttribute("position",new nn(b,x)),A.setAttribute("uv",new nn(y,m)),A.setAttribute("faceIndex",new nn(v,p)),e.push(A),r>hs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Uu(n,e,t){let i=new ri(n,e,t);return i.texture.mapping=ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function dl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function jg(n,e,t){let i=new Float32Array(_r),r=new k(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Nu(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Fu(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function jc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===Eo||c===Ao,h=c===dr||c===fr;if(l||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new pl(n)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&r(f)?(t===null&&(t=new pl(n)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function e0(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&qr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function t0(n,e,t,i){let r={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let b=f.array;x=f.version;for(let y=0,v=b.length;y<v;y+=3){let A=b[y+0],C=b[y+1],L=b[y+2];d.push(A,C,C,L,L,A)}}else if(g!==void 0){let b=g.array;x=g.version;for(let y=0,v=b.length/3-1;y<v;y+=3){let A=y+0,C=y+1,L=y+2;d.push(A,C,C,L,L,A)}}else return;let m=new(Lc(d)?Xs:Ws)(d,1);m.version=x;let p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function n0(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){n.drawElements(i,f,s,d*a),t.update(f,i,1)}function l(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,d*a,g),t.update(f,i,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function u(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,x,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*x[b];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function i0(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function r0(n,e,t){let i=new WeakMap,r=new Et;function s(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let T=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let v=o.attributes.position.count*y,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let C=new Float32Array(v*A*4*u),L=new Hs(C,v,A,u);L.type=Kn,L.needsUpdate=!0;let O=y*4;for(let S=0;S<u;S++){let E=m[S],z=p[S],N=b[S],I=v*A*4*S;for(let U=0;U<E.count;U++){let G=U*O;f===!0&&(r.fromBufferAttribute(E,U),C[I+G+0]=r.x,C[I+G+1]=r.y,C[I+G+2]=r.z,C[I+G+3]=0),g===!0&&(r.fromBufferAttribute(z,U),C[I+G+4]=r.x,C[I+G+5]=r.y,C[I+G+6]=r.z,C[I+G+7]=0),x===!0&&(r.fromBufferAttribute(N,U),C[I+G+8]=r.x,C[I+G+9]=r.y,C[I+G+10]=r.z,C[I+G+11]=N.itemSize===4?r.w:1)}}d={count:u,texture:L,size:new He(v,A)},i.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function s0(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function a(){r=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}var td=new gn,zu=new $s(1,1),nd=new Hs,id=new ja,rd=new Ys,Ou=[],Bu=[],ku=new Float32Array(16),Vu=new Float32Array(9),Gu=new Float32Array(4);function fs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Ou[r];if(s===void 0&&(s=new Float32Array(r),Ou[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function rn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function sn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ml(n,e){let t=Bu[e];t===void 0&&(t=new Int32Array(e),Bu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function a0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function o0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2fv(this.addr,e),sn(t,e)}}function l0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;n.uniform3fv(this.addr,e),sn(t,e)}}function c0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4fv(this.addr,e),sn(t,e)}}function h0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;Gu.set(i),n.uniformMatrix2fv(this.addr,!1,Gu),sn(t,i)}}function u0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;Vu.set(i),n.uniformMatrix3fv(this.addr,!1,Vu),sn(t,i)}}function d0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;ku.set(i),n.uniformMatrix4fv(this.addr,!1,ku),sn(t,i)}}function f0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function p0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2iv(this.addr,e),sn(t,e)}}function m0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3iv(this.addr,e),sn(t,e)}}function g0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4iv(this.addr,e),sn(t,e)}}function x0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2uiv(this.addr,e),sn(t,e)}}function y0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3uiv(this.addr,e),sn(t,e)}}function v0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4uiv(this.addr,e),sn(t,e)}}function M0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(zu.compareFunction=Ic,s=zu):s=td,t.setTexture2D(e||s,r)}function b0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||id,r)}function S0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||rd,r)}function w0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||nd,r)}function T0(n){switch(n){case 5126:return a0;case 35664:return o0;case 35665:return l0;case 35666:return c0;case 35674:return h0;case 35675:return u0;case 35676:return d0;case 5124:case 35670:return f0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return x0;case 36294:return _0;case 36295:return y0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return b0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return w0}}function E0(n,e){n.uniform1fv(this.addr,e)}function A0(n,e){let t=fs(e,this.size,2);n.uniform2fv(this.addr,t)}function C0(n,e){let t=fs(e,this.size,3);n.uniform3fv(this.addr,t)}function R0(n,e){let t=fs(e,this.size,4);n.uniform4fv(this.addr,t)}function I0(n,e){let t=fs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function P0(n,e){let t=fs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function D0(n,e){let t=fs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function L0(n,e){n.uniform1iv(this.addr,e)}function U0(n,e){n.uniform2iv(this.addr,e)}function N0(n,e){n.uniform3iv(this.addr,e)}function F0(n,e){n.uniform4iv(this.addr,e)}function z0(n,e){n.uniform1uiv(this.addr,e)}function O0(n,e){n.uniform2uiv(this.addr,e)}function B0(n,e){n.uniform3uiv(this.addr,e)}function k0(n,e){n.uniform4uiv(this.addr,e)}function V0(n,e,t){let i=this.cache,r=e.length,s=ml(t,r);rn(i,s)||(n.uniform1iv(this.addr,s),sn(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||td,s[a])}function G0(n,e,t){let i=this.cache,r=e.length,s=ml(t,r);rn(i,s)||(n.uniform1iv(this.addr,s),sn(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||id,s[a])}function H0(n,e,t){let i=this.cache,r=e.length,s=ml(t,r);rn(i,s)||(n.uniform1iv(this.addr,s),sn(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||rd,s[a])}function W0(n,e,t){let i=this.cache,r=e.length,s=ml(t,r);rn(i,s)||(n.uniform1iv(this.addr,s),sn(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||nd,s[a])}function X0(n){switch(n){case 5126:return E0;case 35664:return A0;case 35665:return C0;case 35666:return R0;case 35674:return I0;case 35675:return P0;case 35676:return D0;case 5124:case 35670:return L0;case 35667:case 35671:return U0;case 35668:case 35672:return N0;case 35669:case 35673:return F0;case 5125:return z0;case 36294:return O0;case 36295:return B0;case 36296:return k0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return H0;case 36289:case 36303:case 36311:case 36292:return W0}}var Wc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=T0(t.type)}},Xc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=X0(t.type)}},qc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},Hc=/(\w+)(\])?(\[|\.)?/g;function Hu(n,e){n.seq.push(e),n.map[e.id]=e}function q0(n,e,t){let i=n.name,r=i.length;for(Hc.lastIndex=0;;){let s=Hc.exec(i),a=Hc.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Hu(t,l===void 0?new Wc(o,n,e):new Xc(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new qc(o),Hu(t,u)),t=u}}}var us=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);q0(s,a,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function Wu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Y0=37297,Z0=0;function J0(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Xu=new ot;function $0(n){Tt._getMatrix(Xu,Tt.workingColorSpace,n);let e=`mat3( ${Xu.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(n)){case Vs:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function qu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+J0(n.getShaderSource(e),o)}else return s}function K0(n,e){let t=$0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function j0(n,e){let t;switch(e){case cu:t="Linear";break;case hu:t="Reinhard";break;case uu:t="Cineon";break;case rs:t="ACESFilmic";break;case fu:t="AgX";break;case pu:t="Neutral";break;case du:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var fl=new k;function Q0(){Tt.getLuminanceCoefficients(fl);let n=fl.x.toFixed(4),e=fl.y.toFixed(4),t=fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ex(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function tx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function nx(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),a=s.name,o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ha(n){return n!==""}function Yu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ix=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yc(n){return n.replace(ix,sx)}var rx=new Map;function sx(n,e){let t=ft[e];if(t===void 0){let i=rx.get(e);if(i!==void 0)t=ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yc(t)}var ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ju(n){return n.replace(ax,ox)}function ox(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $u(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===gc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===is?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function cx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case dr:case fr:e="ENVMAP_TYPE_CUBE";break;case ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case fr:e="ENVMAP_MODE_REFRACTION";break}return e}function ux(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vc:e="ENVMAP_BLENDING_MULTIPLY";break;case ou:e="ENVMAP_BLENDING_MIX";break;case lu:e="ENVMAP_BLENDING_ADD";break}return e}function dx(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function fx(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=lx(t),l=cx(t),h=hx(t),u=ux(t),d=dx(t),f=ex(t),g=tx(s),x=r.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ha).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ha).join(`
`),p.length>0&&(p+=`
`)):(m=[$u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),p=[$u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?ft.tonemapping_pars_fragment:"",t.toneMapping!==Ti?j0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,K0("linearToOutputTexel",t.outputColorSpace),Q0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ha).join(`
`)),a=Yc(a),a=Yu(a,t),a=Zu(a,t),o=Yc(o),o=Yu(o,t),o=Zu(o,t),a=Ju(a),o=Ju(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=b+m+a,v=b+p+o,A=Wu(r,r.VERTEX_SHADER,y),C=Wu(r,r.FRAGMENT_SHADER,v);r.attachShader(x,A),r.attachShader(x,C),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function L(E){if(n.debug.checkShaderErrors){let z=r.getProgramInfoLog(x)||"",N=r.getShaderInfoLog(A)||"",I=r.getShaderInfoLog(C)||"",U=z.trim(),G=N.trim(),q=I.trim(),B=!0,te=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,A,C);else{let ie=qu(r,A,"vertex"),we=qu(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+U+`
`+ie+`
`+we)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(G===""||q==="")&&(te=!1);te&&(E.diagnostics={runnable:B,programLog:U,vertexShader:{log:G,prefix:m},fragmentShader:{log:q,prefix:p}})}r.deleteShader(A),r.deleteShader(C),O=new us(r,x),T=nx(r,x)}let O;this.getUniforms=function(){return O===void 0&&L(this),O};let T;this.getAttributes=function(){return T===void 0&&L(this),T};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,Y0)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Z0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=C,this}var px=0,Zc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Jc(e),t.set(e,i)),i}},Jc=class{constructor(e){this.id=px++,this.code=e,this.usedTimes=0}};function mx(n,e,t,i,r,s,a){let o=new Jr,c=new Zc,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures,f=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,S,E,z,N){let I=z.fog,U=N.geometry,G=T.isMeshStandardMaterial?z.environment:null,q=(T.isMeshStandardMaterial?t:e).get(T.envMap||G),B=q&&q.mapping===ia?q.image.height:null,te=g[T.type];T.precision!==null&&(f=r.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));let ie=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,we=ie!==void 0?ie.length:0,pe=0;U.morphAttributes.position!==void 0&&(pe=1),U.morphAttributes.normal!==void 0&&(pe=2),U.morphAttributes.color!==void 0&&(pe=3);let Ve,mt,Qe,J;if(te){let gt=li[te];Ve=gt.vertexShader,mt=gt.fragmentShader}else Ve=T.vertexShader,mt=T.fragmentShader,c.update(T),Qe=c.getVertexShaderID(T),J=c.getFragmentShaderID(T);let $=n.getRenderTarget(),oe=n.state.buffers.depth.getReversed(),Ae=N.isInstancedMesh===!0,Ce=N.isBatchedMesh===!0,$e=!!T.map,_t=!!T.matcap,D=!!q,wt=!!T.aoMap,qe=!!T.lightMap,ke=!!T.bumpMap,De=!!T.normalMap,At=!!T.displacementMap,Ie=!!T.emissiveMap,nt=!!T.metalnessMap,Ut=!!T.roughnessMap,at=T.anisotropy>0,P=T.clearcoat>0,M=T.dispersion>0,Y=T.iridescence>0,ee=T.sheen>0,re=T.transmission>0,Q=at&&!!T.anisotropyMap,Re=P&&!!T.clearcoatMap,le=P&&!!T.clearcoatNormalMap,Le=P&&!!T.clearcoatRoughnessMap,Pe=Y&&!!T.iridescenceMap,he=Y&&!!T.iridescenceThicknessMap,xe=ee&&!!T.sheenColorMap,Oe=ee&&!!T.sheenRoughnessMap,Se=!!T.specularMap,_e=!!T.specularColorMap,Ye=!!T.specularIntensityMap,V=re&&!!T.transmissionMap,ue=re&&!!T.thicknessMap,ge=!!T.gradientMap,me=!!T.alphaMap,se=T.alphaTest>0,ne=!!T.alphaHash,ye=!!T.extensions,Ze=Ti;T.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ze=n.toneMapping);let yt={shaderID:te,shaderType:T.type,shaderName:T.name,vertexShader:Ve,fragmentShader:mt,defines:T.defines,customVertexShaderID:Qe,customFragmentShaderID:J,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Ce,batchingColor:Ce&&N._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&N.instanceColor!==null,instancingMorph:Ae&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?n.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:tr,alphaToCoverage:!!T.alphaToCoverage,map:$e,matcap:_t,envMap:D,envMapMode:D&&q.mapping,envMapCubeUVHeight:B,aoMap:wt,lightMap:qe,bumpMap:ke,normalMap:De,displacementMap:d&&At,emissiveMap:Ie,normalMapObjectSpace:De&&T.normalMapType===_u,normalMapTangentSpace:De&&T.normalMapType===Rc,metalnessMap:nt,roughnessMap:Ut,anisotropy:at,anisotropyMap:Q,clearcoat:P,clearcoatMap:Re,clearcoatNormalMap:le,clearcoatRoughnessMap:Le,dispersion:M,iridescence:Y,iridescenceMap:Pe,iridescenceThicknessMap:he,sheen:ee,sheenColorMap:xe,sheenRoughnessMap:Oe,specularMap:Se,specularColorMap:_e,specularIntensityMap:Ye,transmission:re,transmissionMap:V,thicknessMap:ue,gradientMap:ge,opaque:T.transparent===!1&&T.blending===Qi&&T.alphaToCoverage===!1,alphaMap:me,alphaTest:se,alphaHash:ne,combine:T.combine,mapUv:$e&&x(T.map.channel),aoMapUv:wt&&x(T.aoMap.channel),lightMapUv:qe&&x(T.lightMap.channel),bumpMapUv:ke&&x(T.bumpMap.channel),normalMapUv:De&&x(T.normalMap.channel),displacementMapUv:At&&x(T.displacementMap.channel),emissiveMapUv:Ie&&x(T.emissiveMap.channel),metalnessMapUv:nt&&x(T.metalnessMap.channel),roughnessMapUv:Ut&&x(T.roughnessMap.channel),anisotropyMapUv:Q&&x(T.anisotropyMap.channel),clearcoatMapUv:Re&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:le&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:he&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&x(T.sheenRoughnessMap.channel),specularMapUv:Se&&x(T.specularMap.channel),specularColorMapUv:_e&&x(T.specularColorMap.channel),specularIntensityMapUv:Ye&&x(T.specularIntensityMap.channel),transmissionMapUv:V&&x(T.transmissionMap.channel),thicknessMapUv:ue&&x(T.thicknessMap.channel),alphaMapUv:me&&x(T.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(De||at),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&($e||me),fog:!!I,useFog:T.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:oe,skinning:N.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:pe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&E.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,decodeVideoTexture:$e&&T.map.isVideoTexture===!0&&Tt.getTransfer(T.map.colorSpace)===Ot,decodeVideoTextureEmissive:Ie&&T.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(T.emissiveMap.colorSpace)===Ot,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Wt,flipSided:T.side===un,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ye&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&T.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return yt.vertexUv1s=l.has(1),yt.vertexUv2s=l.has(2),yt.vertexUv3s=l.has(3),l.clear(),yt}function p(T){let S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(let E in T.defines)S.push(E),S.push(T.defines[E]);return T.isRawShaderMaterial===!1&&(b(S,T),y(S,T),S.push(n.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function b(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function y(T,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),T.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),T.push(o.mask)}function v(T){let S=g[T.type],E;if(S){let z=li[S];E=hl.clone(z.uniforms)}else E=T.uniforms;return E}function A(T,S){let E;for(let z=0,N=h.length;z<N;z++){let I=h[z];if(I.cacheKey===S){E=I,++E.usedTimes;break}}return E===void 0&&(E=new fx(n,S,T,s),h.push(E)),E}function C(T){if(--T.usedTimes===0){let S=h.indexOf(T);h[S]=h[h.length-1],h.pop(),T.destroy()}}function L(T){c.remove(T)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:C,releaseShaderCache:L,programs:h,dispose:O}}function gx(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function xx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ku(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ju(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u,d,f,g,x,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function o(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||xx),i.length>1&&i.sort(d||Ku),r.length>1&&r.sort(d||Ku)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function _x(){let n=new WeakMap;function e(i,r){let s=n.get(i),a;return s===void 0?(a=new ju,n.set(i,[a])):r>=s.length?(a=new ju,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function yx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new je};break;case"SpotLight":t={position:new k,direction:new k,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function vx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Mx=0;function bx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Sx(n){let e=new yx,t=vx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new k);let r=new k,s=new Lt,a=new Lt;function o(l){let h=0,u=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,b=0,y=0,v=0,A=0,C=0,L=0;l.sort(bx);for(let T=0,S=l.length;T<S;T++){let E=l[T],z=E.color,N=E.intensity,I=E.distance,U=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=z.r*N,u+=z.g*N,d+=z.b*N;else if(E.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(E.sh.coefficients[G],N);L++}else if(E.isDirectionalLight){let G=e.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let q=E.shadow,B=t.get(E);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,i.directionalShadow[f]=B,i.directionalShadowMap[f]=U,i.directionalShadowMatrix[f]=E.shadow.matrix,b++}i.directional[f]=G,f++}else if(E.isSpotLight){let G=e.get(E);G.position.setFromMatrixPosition(E.matrixWorld),G.color.copy(z).multiplyScalar(N),G.distance=I,G.coneCos=Math.cos(E.angle),G.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),G.decay=E.decay,i.spot[x]=G;let q=E.shadow;if(E.map&&(i.spotLightMap[A]=E.map,A++,q.updateMatrices(E),E.castShadow&&C++),i.spotLightMatrix[x]=q.matrix,E.castShadow){let B=t.get(E);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,i.spotShadow[x]=B,i.spotShadowMap[x]=U,v++}x++}else if(E.isRectAreaLight){let G=e.get(E);G.color.copy(z).multiplyScalar(N),G.halfWidth.set(E.width*.5,0,0),G.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=G,m++}else if(E.isPointLight){let G=e.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),G.distance=E.distance,G.decay=E.decay,E.castShadow){let q=E.shadow,B=t.get(E);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,B.shadowCameraNear=q.camera.near,B.shadowCameraFar=q.camera.far,i.pointShadow[g]=B,i.pointShadowMap[g]=U,i.pointShadowMatrix[g]=E.shadow.matrix,y++}i.point[g]=G,g++}else if(E.isHemisphereLight){let G=e.get(E);G.skyColor.copy(E.color).multiplyScalar(N),G.groundColor.copy(E.groundColor).multiplyScalar(N),i.hemi[p]=G,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let O=i.hash;(O.directionalLength!==f||O.pointLength!==g||O.spotLength!==x||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==b||O.numPointShadows!==y||O.numSpotShadows!==v||O.numSpotMaps!==A||O.numLightProbes!==L)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=L,O.directionalLength=f,O.pointLength=g,O.spotLength=x,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=b,O.numPointShadows=y,O.numSpotShadows=v,O.numSpotMaps=A,O.numLightProbes=L,i.version=Mx++)}function c(l,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){let y=l[p];if(y.isDirectionalLight){let v=i.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),u++}else if(y.isSpotLight){let v=i.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let v=i.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){let v=i.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:i}}function Qu(n){let e=new Sx(n),t=[],i=[];function r(h){l.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function wx(n){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new Qu(n),e.set(r,[o])):s>=a.length?(o=new Qu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Tx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ex=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ax(n,e,t){let i=new es,r=new He,s=new He,a=new Et,o=new so({depthPacking:xu}),c=new ao,l={},h=t.maxTextureSize,u={[yi]:un,[un]:yi,[Wt]:Wt},d=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Tx,fragmentShader:Ex}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ft;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ct(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gc;let p=this.type;this.render=function(C,L,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let T=n.getRenderTarget(),S=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),z=n.state;z.setBlending(wi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let N=p!==oi&&this.type===oi,I=p===oi&&this.type!==oi;for(let U=0,G=C.length;U<G;U++){let q=C[U],B=q.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);let te=B.getFrameExtents();if(r.multiply(te),s.copy(B.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/te.x),r.x=s.x*te.x,B.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/te.y),r.y=s.y*te.y,B.mapSize.y=s.y)),B.map===null||N===!0||I===!0){let we=this.type!==oi?{minFilter:bn,magFilter:bn}:{};B.map!==null&&B.map.dispose(),B.map=new ri(r.x,r.y,we),B.map.texture.name=q.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();let ie=B.getViewportCount();for(let we=0;we<ie;we++){let pe=B.getViewport(we);a.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),z.viewport(a),B.updateMatrices(q,we),i=B.getFrustum(),v(L,O,B.camera,q,this.type)}B.isPointLightShadow!==!0&&this.type===oi&&b(B,O),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,S,E)};function b(C,L){let O=e.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ri(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(L,null,O,d,x,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(L,null,O,f,x,null)}function y(C,L,O,T){let S=null,E=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)S=E;else if(S=O.isPointLight===!0?c:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let z=S.uuid,N=L.uuid,I=l[z];I===void 0&&(I={},l[z]=I);let U=I[N];U===void 0&&(U=S.clone(),I[N]=U,L.addEventListener("dispose",A)),S=U}if(S.visible=L.visible,S.wireframe=L.wireframe,T===oi?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:u[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,O.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let z=n.properties.get(S);z.light=O}return S}function v(C,L,O,T,S){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===oi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);let N=e.update(C),I=C.material;if(Array.isArray(I)){let U=N.groups;for(let G=0,q=U.length;G<q;G++){let B=U[G],te=I[B.materialIndex];if(te&&te.visible){let ie=y(C,te,T,S);C.onBeforeShadow(n,C,L,O,N,ie,B),n.renderBufferDirect(O,null,N,ie,C,B),C.onAfterShadow(n,C,L,O,N,ie,B)}}}else if(I.visible){let U=y(C,I,T,S);C.onBeforeShadow(n,C,L,O,N,U,null),n.renderBufferDirect(O,null,N,U,C,null),C.onAfterShadow(n,C,L,O,N,U,null)}}let z=C.children;for(let N=0,I=z.length;N<I;N++)v(z[N],L,O,T,S)}function A(C){C.target.removeEventListener("dispose",A);for(let O in l){let T=l[O],S=C.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}var Cx={[yo]:vo,[Mo]:wo,[bo]:To,[er]:So,[vo]:yo,[wo]:Mo,[To]:bo,[So]:er};function Rx(n,e){function t(){let V=!1,ue=new Et,ge=null,me=new Et(0,0,0,0);return{setMask:function(se){ge!==se&&!V&&(n.colorMask(se,se,se,se),ge=se)},setLocked:function(se){V=se},setClear:function(se,ne,ye,Ze,yt){yt===!0&&(se*=Ze,ne*=Ze,ye*=Ze),ue.set(se,ne,ye,Ze),me.equals(ue)===!1&&(n.clearColor(se,ne,ye,Ze),me.copy(ue))},reset:function(){V=!1,ge=null,me.set(-1,0,0,0)}}}function i(){let V=!1,ue=!1,ge=null,me=null,se=null;return{setReversed:function(ne){if(ue!==ne){let ye=e.get("EXT_clip_control");ne?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),ue=ne;let Ze=se;se=null,this.setClear(Ze)}},getReversed:function(){return ue},setTest:function(ne){ne?$(n.DEPTH_TEST):oe(n.DEPTH_TEST)},setMask:function(ne){ge!==ne&&!V&&(n.depthMask(ne),ge=ne)},setFunc:function(ne){if(ue&&(ne=Cx[ne]),me!==ne){switch(ne){case yo:n.depthFunc(n.NEVER);break;case vo:n.depthFunc(n.ALWAYS);break;case Mo:n.depthFunc(n.LESS);break;case er:n.depthFunc(n.LEQUAL);break;case bo:n.depthFunc(n.EQUAL);break;case So:n.depthFunc(n.GEQUAL);break;case wo:n.depthFunc(n.GREATER);break;case To:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=ne}},setLocked:function(ne){V=ne},setClear:function(ne){se!==ne&&(ue&&(ne=1-ne),n.clearDepth(ne),se=ne)},reset:function(){V=!1,ge=null,me=null,se=null,ue=!1}}}function r(){let V=!1,ue=null,ge=null,me=null,se=null,ne=null,ye=null,Ze=null,yt=null;return{setTest:function(gt){V||(gt?$(n.STENCIL_TEST):oe(n.STENCIL_TEST))},setMask:function(gt){ue!==gt&&!V&&(n.stencilMask(gt),ue=gt)},setFunc:function(gt,fn,vn){(ge!==gt||me!==fn||se!==vn)&&(n.stencilFunc(gt,fn,vn),ge=gt,me=fn,se=vn)},setOp:function(gt,fn,vn){(ne!==gt||ye!==fn||Ze!==vn)&&(n.stencilOp(gt,fn,vn),ne=gt,ye=fn,Ze=vn)},setLocked:function(gt){V=gt},setClear:function(gt){yt!==gt&&(n.clearStencil(gt),yt=gt)},reset:function(){V=!1,ue=null,ge=null,me=null,se=null,ne=null,ye=null,Ze=null,yt=null}}}let s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,b=null,y=null,v=null,A=null,C=null,L=new je(0,0,0),O=0,T=!1,S=null,E=null,z=null,N=null,I=null,U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,q=0,B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(B)[1]),G=q>=1):B.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),G=q>=2);let te=null,ie={},we=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),Ve=new Et().fromArray(we),mt=new Et().fromArray(pe);function Qe(V,ue,ge,me){let se=new Uint8Array(4),ne=n.createTexture();n.bindTexture(V,ne),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ye=0;ye<ge;ye++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(ue+ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return ne}let J={};J[n.TEXTURE_2D]=Qe(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=Qe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=Qe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=Qe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(n.DEPTH_TEST),a.setFunc(er),ke(!1),De(mc),$(n.CULL_FACE),wt(wi);function $(V){h[V]!==!0&&(n.enable(V),h[V]=!0)}function oe(V){h[V]!==!1&&(n.disable(V),h[V]=!1)}function Ae(V,ue){return u[V]!==ue?(n.bindFramebuffer(V,ue),u[V]=ue,V===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ue),V===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ce(V,ue){let ge=f,me=!1;if(V){ge=d.get(ue),ge===void 0&&(ge=[],d.set(ue,ge));let se=V.textures;if(ge.length!==se.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let ne=0,ye=se.length;ne<ye;ne++)ge[ne]=n.COLOR_ATTACHMENT0+ne;ge.length=se.length,me=!0}}else ge[0]!==n.BACK&&(ge[0]=n.BACK,me=!0);me&&n.drawBuffers(ge)}function $e(V){return g!==V?(n.useProgram(V),g=V,!0):!1}let _t={[Fi]:n.FUNC_ADD,[Wh]:n.FUNC_SUBTRACT,[Xh]:n.FUNC_REVERSE_SUBTRACT};_t[qh]=n.MIN,_t[Yh]=n.MAX;let D={[Zh]:n.ZERO,[Jh]:n.ONE,[$h]:n.SRC_COLOR,[Xa]:n.SRC_ALPHA,[nu]:n.SRC_ALPHA_SATURATE,[eu]:n.DST_COLOR,[jh]:n.DST_ALPHA,[Kh]:n.ONE_MINUS_SRC_COLOR,[qa]:n.ONE_MINUS_SRC_ALPHA,[tu]:n.ONE_MINUS_DST_COLOR,[Qh]:n.ONE_MINUS_DST_ALPHA,[iu]:n.CONSTANT_COLOR,[ru]:n.ONE_MINUS_CONSTANT_COLOR,[su]:n.CONSTANT_ALPHA,[au]:n.ONE_MINUS_CONSTANT_ALPHA};function wt(V,ue,ge,me,se,ne,ye,Ze,yt,gt){if(V===wi){x===!0&&(oe(n.BLEND),x=!1);return}if(x===!1&&($(n.BLEND),x=!0),V!==Hh){if(V!==m||gt!==T){if((p!==Fi||v!==Fi)&&(n.blendEquation(n.FUNC_ADD),p=Fi,v=Fi),gt)switch(V){case Qi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xc:n.blendFunc(n.ONE,n.ONE);break;case _c:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Qi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case _c:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}b=null,y=null,A=null,C=null,L.set(0,0,0),O=0,m=V,T=gt}return}se=se||ue,ne=ne||ge,ye=ye||me,(ue!==p||se!==v)&&(n.blendEquationSeparate(_t[ue],_t[se]),p=ue,v=se),(ge!==b||me!==y||ne!==A||ye!==C)&&(n.blendFuncSeparate(D[ge],D[me],D[ne],D[ye]),b=ge,y=me,A=ne,C=ye),(Ze.equals(L)===!1||yt!==O)&&(n.blendColor(Ze.r,Ze.g,Ze.b,yt),L.copy(Ze),O=yt),m=V,T=!1}function qe(V,ue){V.side===Wt?oe(n.CULL_FACE):$(n.CULL_FACE);let ge=V.side===un;ue&&(ge=!ge),ke(ge),V.blending===Qi&&V.transparent===!1?wt(wi):wt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),s.setMask(V.colorWrite);let me=V.stencilWrite;o.setTest(me),me&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ie(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?$(n.SAMPLE_ALPHA_TO_COVERAGE):oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(V){S!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),S=V)}function De(V){V!==Vh?($(n.CULL_FACE),V!==E&&(V===mc?n.cullFace(n.BACK):V===Gh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):oe(n.CULL_FACE),E=V}function At(V){V!==z&&(G&&n.lineWidth(V),z=V)}function Ie(V,ue,ge){V?($(n.POLYGON_OFFSET_FILL),(N!==ue||I!==ge)&&(n.polygonOffset(ue,ge),N=ue,I=ge)):oe(n.POLYGON_OFFSET_FILL)}function nt(V){V?$(n.SCISSOR_TEST):oe(n.SCISSOR_TEST)}function Ut(V){V===void 0&&(V=n.TEXTURE0+U-1),te!==V&&(n.activeTexture(V),te=V)}function at(V,ue,ge){ge===void 0&&(te===null?ge=n.TEXTURE0+U-1:ge=te);let me=ie[ge];me===void 0&&(me={type:void 0,texture:void 0},ie[ge]=me),(me.type!==V||me.texture!==ue)&&(te!==ge&&(n.activeTexture(ge),te=ge),n.bindTexture(V,ue||J[V]),me.type=V,me.texture=ue)}function P(){let V=ie[te];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Y(){try{n.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ee(){try{n.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function re(){try{n.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Q(){try{n.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Re(){try{n.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function le(){try{n.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Le(){try{n.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(){try{n.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{n.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xe(V){Ve.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),Ve.copy(V))}function Oe(V){mt.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),mt.copy(V))}function Se(V,ue){let ge=l.get(ue);ge===void 0&&(ge=new WeakMap,l.set(ue,ge));let me=ge.get(V);me===void 0&&(me=n.getUniformBlockIndex(ue,V.name),ge.set(V,me))}function _e(V,ue){let me=l.get(ue).get(V);c.get(ue)!==me&&(n.uniformBlockBinding(ue,me,V.__bindingPointIndex),c.set(ue,me))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},te=null,ie={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,b=null,y=null,v=null,A=null,C=null,L=new je(0,0,0),O=0,T=!1,S=null,E=null,z=null,N=null,I=null,Ve.set(0,0,n.canvas.width,n.canvas.height),mt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:$,disable:oe,bindFramebuffer:Ae,drawBuffers:Ce,useProgram:$e,setBlending:wt,setMaterial:qe,setFlipSided:ke,setCullFace:De,setLineWidth:At,setPolygonOffset:Ie,setScissorTest:nt,activeTexture:Ut,bindTexture:at,unbindTexture:P,compressedTexImage2D:M,compressedTexImage3D:Y,texImage2D:Pe,texImage3D:he,updateUBOMapping:Se,uniformBlockBinding:_e,texStorage2D:le,texStorage3D:Le,texSubImage2D:ee,texSubImage3D:re,compressedTexSubImage2D:Q,compressedTexSubImage3D:Re,scissor:xe,viewport:Oe,reset:Ye}}function Ix(n,e,t,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,M){return f?new OffscreenCanvas(P,M):Xr("canvas")}function x(P,M,Y){let ee=1,re=at(P);if((re.width>Y||re.height>Y)&&(ee=Y/Math.max(re.width,re.height)),ee<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Q=Math.floor(ee*re.width),Re=Math.floor(ee*re.height);u===void 0&&(u=g(Q,Re));let le=M?g(Q,Re):u;return le.width=Q,le.height=Re,le.getContext("2d").drawImage(P,0,0,Q,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Q+"x"+Re+")."),le}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){n.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(P,M,Y,ee,re=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=M;if(M===n.RED&&(Y===n.FLOAT&&(Q=n.R32F),Y===n.HALF_FLOAT&&(Q=n.R16F),Y===n.UNSIGNED_BYTE&&(Q=n.R8)),M===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(Q=n.R8UI),Y===n.UNSIGNED_SHORT&&(Q=n.R16UI),Y===n.UNSIGNED_INT&&(Q=n.R32UI),Y===n.BYTE&&(Q=n.R8I),Y===n.SHORT&&(Q=n.R16I),Y===n.INT&&(Q=n.R32I)),M===n.RG&&(Y===n.FLOAT&&(Q=n.RG32F),Y===n.HALF_FLOAT&&(Q=n.RG16F),Y===n.UNSIGNED_BYTE&&(Q=n.RG8)),M===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(Q=n.RG8UI),Y===n.UNSIGNED_SHORT&&(Q=n.RG16UI),Y===n.UNSIGNED_INT&&(Q=n.RG32UI),Y===n.BYTE&&(Q=n.RG8I),Y===n.SHORT&&(Q=n.RG16I),Y===n.INT&&(Q=n.RG32I)),M===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),Y===n.UNSIGNED_INT&&(Q=n.RGB32UI),Y===n.BYTE&&(Q=n.RGB8I),Y===n.SHORT&&(Q=n.RGB16I),Y===n.INT&&(Q=n.RGB32I)),M===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),Y===n.UNSIGNED_INT&&(Q=n.RGBA32UI),Y===n.BYTE&&(Q=n.RGBA8I),Y===n.SHORT&&(Q=n.RGBA16I),Y===n.INT&&(Q=n.RGBA32I)),M===n.RGB&&(Y===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),M===n.RGBA){let Re=re?Vs:Tt.getTransfer(ee);Y===n.FLOAT&&(Q=n.RGBA32F),Y===n.HALF_FLOAT&&(Q=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(Q=Re===Ot?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(P,M){let Y;return P?M===null||M===Gi||M===os?Y=n.DEPTH24_STENCIL8:M===Kn?Y=n.DEPTH32F_STENCIL8:M===ss&&(Y=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Gi||M===os?Y=n.DEPTH_COMPONENT24:M===Kn?Y=n.DEPTH_COMPONENT32F:M===ss&&(Y=n.DEPTH_COMPONENT16),Y}function A(P,M){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==bn&&P.minFilter!==Yn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function C(P){let M=P.target;M.removeEventListener("dispose",C),O(M),M.isVideoTexture&&h.delete(M)}function L(P){let M=P.target;M.removeEventListener("dispose",L),S(M)}function O(P){let M=i.get(P);if(M.__webglInit===void 0)return;let Y=P.source,ee=d.get(Y);if(ee){let re=ee[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&T(P),Object.keys(ee).length===0&&d.delete(Y)}i.remove(P)}function T(P){let M=i.get(P);n.deleteTexture(M.__webglTexture);let Y=P.source,ee=d.get(Y);delete ee[M.__cacheKey],a.memory.textures--}function S(P){let M=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let re=0;re<M.__webglFramebuffer[ee].length;re++)n.deleteFramebuffer(M.__webglFramebuffer[ee][re]);else n.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)n.deleteFramebuffer(M.__webglFramebuffer[ee]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let Y=P.textures;for(let ee=0,re=Y.length;ee<re;ee++){let Q=i.get(Y[ee]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(Y[ee])}i.remove(P)}let E=0;function z(){E=0}function N(){let P=E;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),E+=1,P}function I(P){let M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function U(P,M){let Y=i.get(P);if(P.isVideoTexture&&nt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Y.__version!==P.version){let ee=P.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(Y,P,M);return}}else P.isExternalTexture&&(Y.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+M)}function G(P,M){let Y=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){J(Y,P,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+M)}function q(P,M){let Y=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){J(Y,P,M);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+M)}function B(P,M){let Y=i.get(P);if(P.version>0&&Y.__version!==P.version){$(Y,P,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+M)}let te={[Gr]:n.REPEAT,[Ni]:n.CLAMP_TO_EDGE,[Ya]:n.MIRRORED_REPEAT},ie={[bn]:n.NEAREST,[mu]:n.NEAREST_MIPMAP_NEAREST,[ra]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[Co]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},we={[yu]:n.NEVER,[Tu]:n.ALWAYS,[vu]:n.LESS,[Ic]:n.LEQUAL,[Mu]:n.EQUAL,[wu]:n.GEQUAL,[bu]:n.GREATER,[Su]:n.NOTEQUAL};function pe(P,M){if(M.type===Kn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Yn||M.magFilter===Co||M.magFilter===ra||M.magFilter===Vi||M.minFilter===Yn||M.minFilter===Co||M.minFilter===ra||M.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,te[M.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,te[M.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,te[M.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,ie[M.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,ie[M.minFilter]),M.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,we[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===bn||M.minFilter!==ra&&M.minFilter!==Vi||M.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ve(P,M){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",C));let ee=M.source,re=d.get(ee);re===void 0&&(re={},d.set(ee,re));let Q=I(M);if(Q!==P.__cacheKey){re[Q]===void 0&&(re[Q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),re[Q].usedTimes++;let Re=re[P.__cacheKey];Re!==void 0&&(re[P.__cacheKey].usedTimes--,Re.usedTimes===0&&T(M)),P.__cacheKey=Q,P.__webglTexture=re[Q].texture}return Y}function mt(P,M,Y){return Math.floor(Math.floor(P/Y)/M)}function Qe(P,M,Y,ee){let Q=P.updateRanges;if(Q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,Y,ee,M.data);else{Q.sort((he,xe)=>he.start-xe.start);let Re=0;for(let he=1;he<Q.length;he++){let xe=Q[Re],Oe=Q[he],Se=xe.start+xe.count,_e=mt(Oe.start,M.width,4),Ye=mt(xe.start,M.width,4);Oe.start<=Se+1&&_e===Ye&&mt(Oe.start+Oe.count-1,M.width,4)===_e?xe.count=Math.max(xe.count,Oe.start+Oe.count-xe.start):(++Re,Q[Re]=Oe)}Q.length=Re+1;let le=n.getParameter(n.UNPACK_ROW_LENGTH),Le=n.getParameter(n.UNPACK_SKIP_PIXELS),Pe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let he=0,xe=Q.length;he<xe;he++){let Oe=Q[he],Se=Math.floor(Oe.start/4),_e=Math.ceil(Oe.count/4),Ye=Se%M.width,V=Math.floor(Se/M.width),ue=_e,ge=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ye),n.pixelStorei(n.UNPACK_SKIP_ROWS,V),t.texSubImage2D(n.TEXTURE_2D,0,Ye,V,ue,ge,Y,ee,M.data)}P.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,le),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Le),n.pixelStorei(n.UNPACK_SKIP_ROWS,Pe)}}function J(P,M,Y){let ee=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=n.TEXTURE_3D);let re=Ve(P,M),Q=M.source;t.bindTexture(ee,P.__webglTexture,n.TEXTURE0+Y);let Re=i.get(Q);if(Q.version!==Re.__version||re===!0){t.activeTexture(n.TEXTURE0+Y);let le=Tt.getPrimaries(Tt.workingColorSpace),Le=M.colorSpace===jn?null:Tt.getPrimaries(M.colorSpace),Pe=M.colorSpace===jn||le===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let he=x(M.image,!1,r.maxTextureSize);he=Ut(M,he);let xe=s.convert(M.format,M.colorSpace),Oe=s.convert(M.type),Se=y(M.internalFormat,xe,Oe,M.colorSpace,M.isVideoTexture);pe(ee,M);let _e,Ye=M.mipmaps,V=M.isVideoTexture!==!0,ue=Re.__version===void 0||re===!0,ge=Q.dataReady,me=A(M,he);if(M.isDepthTexture)Se=v(M.format===ls,M.type),ue&&(V?t.texStorage2D(n.TEXTURE_2D,1,Se,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,Se,he.width,he.height,0,xe,Oe,null));else if(M.isDataTexture)if(Ye.length>0){V&&ue&&t.texStorage2D(n.TEXTURE_2D,me,Se,Ye[0].width,Ye[0].height);for(let se=0,ne=Ye.length;se<ne;se++)_e=Ye[se],V?ge&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,_e.width,_e.height,xe,Oe,_e.data):t.texImage2D(n.TEXTURE_2D,se,Se,_e.width,_e.height,0,xe,Oe,_e.data);M.generateMipmaps=!1}else V?(ue&&t.texStorage2D(n.TEXTURE_2D,me,Se,he.width,he.height),ge&&Qe(M,he,xe,Oe)):t.texImage2D(n.TEXTURE_2D,0,Se,he.width,he.height,0,xe,Oe,he.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){V&&ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Se,Ye[0].width,Ye[0].height,he.depth);for(let se=0,ne=Ye.length;se<ne;se++)if(_e=Ye[se],M.format!==Bn)if(xe!==null)if(V){if(ge)if(M.layerUpdates.size>0){let ye=zc(_e.width,_e.height,M.format,M.type);for(let Ze of M.layerUpdates){let yt=_e.data.subarray(Ze*ye/_e.data.BYTES_PER_ELEMENT,(Ze+1)*ye/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,Ze,_e.width,_e.height,1,xe,yt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,_e.width,_e.height,he.depth,xe,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Se,_e.width,_e.height,he.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?ge&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,_e.width,_e.height,he.depth,xe,Oe,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Se,_e.width,_e.height,he.depth,0,xe,Oe,_e.data)}else{V&&ue&&t.texStorage2D(n.TEXTURE_2D,me,Se,Ye[0].width,Ye[0].height);for(let se=0,ne=Ye.length;se<ne;se++)_e=Ye[se],M.format!==Bn?xe!==null?V?ge&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,_e.width,_e.height,xe,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Se,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?ge&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,_e.width,_e.height,xe,Oe,_e.data):t.texImage2D(n.TEXTURE_2D,se,Se,_e.width,_e.height,0,xe,Oe,_e.data)}else if(M.isDataArrayTexture)if(V){if(ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Se,he.width,he.height,he.depth),ge)if(M.layerUpdates.size>0){let se=zc(he.width,he.height,M.format,M.type);for(let ne of M.layerUpdates){let ye=he.data.subarray(ne*se/he.data.BYTES_PER_ELEMENT,(ne+1)*se/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,he.width,he.height,1,xe,Oe,ye)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,xe,Oe,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,he.width,he.height,he.depth,0,xe,Oe,he.data);else if(M.isData3DTexture)V?(ue&&t.texStorage3D(n.TEXTURE_3D,me,Se,he.width,he.height,he.depth),ge&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,xe,Oe,he.data)):t.texImage3D(n.TEXTURE_3D,0,Se,he.width,he.height,he.depth,0,xe,Oe,he.data);else if(M.isFramebufferTexture){if(ue)if(V)t.texStorage2D(n.TEXTURE_2D,me,Se,he.width,he.height);else{let se=he.width,ne=he.height;for(let ye=0;ye<me;ye++)t.texImage2D(n.TEXTURE_2D,ye,Se,se,ne,0,xe,Oe,null),se>>=1,ne>>=1}}else if(Ye.length>0){if(V&&ue){let se=at(Ye[0]);t.texStorage2D(n.TEXTURE_2D,me,Se,se.width,se.height)}for(let se=0,ne=Ye.length;se<ne;se++)_e=Ye[se],V?ge&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,xe,Oe,_e):t.texImage2D(n.TEXTURE_2D,se,Se,xe,Oe,_e);M.generateMipmaps=!1}else if(V){if(ue){let se=at(he);t.texStorage2D(n.TEXTURE_2D,me,Se,se.width,se.height)}ge&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Oe,he)}else t.texImage2D(n.TEXTURE_2D,0,Se,xe,Oe,he);m(M)&&p(ee),Re.__version=Q.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function $(P,M,Y){if(M.image.length!==6)return;let ee=Ve(P,M),re=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+Y);let Q=i.get(re);if(re.version!==Q.__version||ee===!0){t.activeTexture(n.TEXTURE0+Y);let Re=Tt.getPrimaries(Tt.workingColorSpace),le=M.colorSpace===jn?null:Tt.getPrimaries(M.colorSpace),Le=M.colorSpace===jn||Re===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let Pe=M.isCompressedTexture||M.image[0].isCompressedTexture,he=M.image[0]&&M.image[0].isDataTexture,xe=[];for(let ne=0;ne<6;ne++)!Pe&&!he?xe[ne]=x(M.image[ne],!0,r.maxCubemapSize):xe[ne]=he?M.image[ne].image:M.image[ne],xe[ne]=Ut(M,xe[ne]);let Oe=xe[0],Se=s.convert(M.format,M.colorSpace),_e=s.convert(M.type),Ye=y(M.internalFormat,Se,_e,M.colorSpace),V=M.isVideoTexture!==!0,ue=Q.__version===void 0||ee===!0,ge=re.dataReady,me=A(M,Oe);pe(n.TEXTURE_CUBE_MAP,M);let se;if(Pe){V&&ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ye,Oe.width,Oe.height);for(let ne=0;ne<6;ne++){se=xe[ne].mipmaps;for(let ye=0;ye<se.length;ye++){let Ze=se[ye];M.format!==Bn?Se!==null?V?ge&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,0,0,Ze.width,Ze.height,Se,Ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,Ye,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,0,0,Ze.width,Ze.height,Se,_e,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,Ye,Ze.width,Ze.height,0,Se,_e,Ze.data)}}}else{if(se=M.mipmaps,V&&ue){se.length>0&&me++;let ne=at(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ye,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(he){V?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,xe[ne].width,xe[ne].height,Se,_e,xe[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ye,xe[ne].width,xe[ne].height,0,Se,_e,xe[ne].data);for(let ye=0;ye<se.length;ye++){let yt=se[ye].image[ne].image;V?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,0,0,yt.width,yt.height,Se,_e,yt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,Ye,yt.width,yt.height,0,Se,_e,yt.data)}}else{V?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Se,_e,xe[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ye,Se,_e,xe[ne]);for(let ye=0;ye<se.length;ye++){let Ze=se[ye];V?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,0,0,Se,_e,Ze.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,Ye,Se,_e,Ze.image[ne])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),Q.__version=re.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function oe(P,M,Y,ee,re,Q){let Re=s.convert(Y.format,Y.colorSpace),le=s.convert(Y.type),Le=y(Y.internalFormat,Re,le,Y.colorSpace),Pe=i.get(M),he=i.get(Y);if(he.__renderTarget=M,!Pe.__hasExternalTextures){let xe=Math.max(1,M.width>>Q),Oe=Math.max(1,M.height>>Q);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,Q,Le,xe,Oe,M.depth,0,Re,le,null):t.texImage2D(re,Q,Le,xe,Oe,0,Re,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Ie(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,re,he.__webglTexture,0,At(M)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,re,he.__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(P,M,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,P),M.depthBuffer){let ee=M.depthTexture,re=ee&&ee.isDepthTexture?ee.type:null,Q=v(M.stencilBuffer,re),Re=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=At(M);Ie(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,Q,M.width,M.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,Q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Q,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,P)}else{let ee=M.textures;for(let re=0;re<ee.length;re++){let Q=ee[re],Re=s.convert(Q.format,Q.colorSpace),le=s.convert(Q.type),Le=y(Q.internalFormat,Re,le,Q.colorSpace),Pe=At(M);Y&&Ie(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Le,M.width,M.height):Ie(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,Le,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Le,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=i.get(M.depthTexture);ee.__renderTarget=M,(!ee.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),U(M.depthTexture,0);let re=ee.__webglTexture,Q=At(M);if(M.depthTexture.format===Hr)Ie(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(M.depthTexture.format===ls)Ie(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function $e(P){let M=i.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){let ee=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ee){let re=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ee.removeEventListener("dispose",re)};ee.addEventListener("dispose",re),M.__depthDisposeCallback=re}M.__boundDepthTexture=ee}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");let ee=P.texture.mipmaps;ee&&ee.length>0?Ce(M.__webglFramebuffer[0],P):Ce(M.__webglFramebuffer,P)}else if(Y){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]===void 0)M.__webglDepthbuffer[ee]=n.createRenderbuffer(),Ae(M.__webglDepthbuffer[ee],P,!1);else{let re=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,Q)}}else{let ee=P.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Ae(M.__webglDepthbuffer,P,!1);else{let re=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,Q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(P,M,Y){let ee=i.get(P);M!==void 0&&oe(ee.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&$e(P)}function D(P){let M=P.texture,Y=i.get(P),ee=i.get(M);P.addEventListener("dispose",L);let re=P.textures,Q=P.isWebGLCubeRenderTarget===!0,Re=re.length>1;if(Re||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=M.version,a.memory.textures++),Q){Y.__webglFramebuffer=[];for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[le]=[];for(let Le=0;Le<M.mipmaps.length;Le++)Y.__webglFramebuffer[le][Le]=n.createFramebuffer()}else Y.__webglFramebuffer[le]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)Y.__webglFramebuffer[le]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Re)for(let le=0,Le=re.length;le<Le;le++){let Pe=i.get(re[le]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&Ie(P)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let le=0;le<re.length;le++){let Le=re[le];Y.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[le]);let Pe=s.convert(Le.format,Le.colorSpace),he=s.convert(Le.type),xe=y(Le.internalFormat,Pe,he,Le.colorSpace,P.isXRRenderTarget===!0),Oe=At(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,xe,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,Y.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),Ae(Y.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),pe(n.TEXTURE_CUBE_MAP,M);for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0)for(let Le=0;Le<M.mipmaps.length;Le++)oe(Y.__webglFramebuffer[le][Le],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le);else oe(Y.__webglFramebuffer[le],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let le=0,Le=re.length;le<Le;le++){let Pe=re[le],he=i.get(Pe),xe=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xe=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,he.__webglTexture),pe(xe,Pe),oe(Y.__webglFramebuffer,P,Pe,n.COLOR_ATTACHMENT0+le,xe,0),m(Pe)&&p(xe)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(le=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,ee.__webglTexture),pe(le,M),M.mipmaps&&M.mipmaps.length>0)for(let Le=0;Le<M.mipmaps.length;Le++)oe(Y.__webglFramebuffer[Le],P,M,n.COLOR_ATTACHMENT0,le,Le);else oe(Y.__webglFramebuffer,P,M,n.COLOR_ATTACHMENT0,le,0);m(M)&&p(le),t.unbindTexture()}P.depthBuffer&&$e(P)}function wt(P){let M=P.textures;for(let Y=0,ee=M.length;Y<ee;Y++){let re=M[Y];if(m(re)){let Q=b(P),Re=i.get(re).__webglTexture;t.bindTexture(Q,Re),p(Q),t.unbindTexture()}}}let qe=[],ke=[];function De(P){if(P.samples>0){if(Ie(P)===!1){let M=P.textures,Y=P.width,ee=P.height,re=n.COLOR_BUFFER_BIT,Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(P),le=M.length>1;if(le)for(let Pe=0;Pe<M.length;Pe++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);let Le=P.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Pe=0;Pe<M.length;Pe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Pe]);let he=i.get(M[Pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,he,0)}n.blitFramebuffer(0,0,Y,ee,0,0,Y,ee,re,n.NEAREST),c===!0&&(qe.length=0,ke.length=0,qe.push(n.COLOR_ATTACHMENT0+Pe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(qe.push(Q),ke.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ke)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,qe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let Pe=0;Pe<M.length;Pe++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Pe]);let he=i.get(M[Pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,he,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let M=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function At(P){return Math.min(r.maxSamples,P.samples)}function Ie(P){let M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function nt(P){let M=a.render.frame;h.get(P)!==M&&(h.set(P,M),P.update())}function Ut(P,M){let Y=P.colorSpace,ee=P.format,re=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==tr&&Y!==jn&&(Tt.getTransfer(Y)===Ot?(ee!==Bn||re!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),M}function at(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=z,this.setTexture2D=U,this.setTexture2DArray=G,this.setTexture3D=q,this.setTextureCube=B,this.rebindTextures=_t,this.setupRenderTarget=D,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Ie}function Px(n,e){function t(i,r=jn){let s,a=Tt.getTransfer(r);if(i===$n)return n.UNSIGNED_BYTE;if(i===Io)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Po)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Tc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===bc)return n.BYTE;if(i===Sc)return n.SHORT;if(i===ss)return n.UNSIGNED_SHORT;if(i===Ro)return n.INT;if(i===Gi)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===as)return n.HALF_FLOAT;if(i===Ec)return n.ALPHA;if(i===Ac)return n.RGB;if(i===Bn)return n.RGBA;if(i===Hr)return n.DEPTH_COMPONENT;if(i===ls)return n.DEPTH_STENCIL;if(i===Do)return n.RED;if(i===Lo)return n.RED_INTEGER;if(i===Cc)return n.RG;if(i===Uo)return n.RG_INTEGER;if(i===No)return n.RGBA_INTEGER;if(i===sa||i===aa||i===oa||i===la)if(a===Ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===sa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===sa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===aa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===la)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fo||i===zo||i===Oo||i===Bo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Fo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Oo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ko||i===Vo||i===Go)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ko||i===Vo)return a===Ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Go)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ho||i===Wo||i===Xo||i===qo||i===Yo||i===Zo||i===Jo||i===$o||i===Ko||i===jo||i===Qo||i===el||i===tl||i===nl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ho)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wo)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xo)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qo)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yo)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zo)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jo)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$o)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ko)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jo)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qo)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===el)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tl)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nl)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===il||i===rl||i===sl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===il)return a===Ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===al||i===ol||i===ll||i===cl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===al)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ol)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ll)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===os?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,$c=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ks(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new wn({vertexShader:Dx,fragmentShader:Lx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new Rn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kc=class extends vi{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new $c,p={},b=t.getContextAttributes(),y=null,v=null,A=[],C=[],L=new He,O=null,T=new tn;T.viewport=new Et;let S=new tn;S.viewport=new Et;let E=[T,S],z=new _o,N=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let $=A[J];return $===void 0&&($=new $r,A[J]=$),$.getTargetRaySpace()},this.getControllerGrip=function(J){let $=A[J];return $===void 0&&($=new $r,A[J]=$),$.getGripSpace()},this.getHand=function(J){let $=A[J];return $===void 0&&($=new $r,A[J]=$),$.getHandSpace()};function U(J){let $=C.indexOf(J.inputSource);if($===-1)return;let oe=A[$];oe!==void 0&&(oe.update(J.inputSource,J.frame,l||a),oe.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",q);for(let J=0;J<A.length;J++){let $=C[J];$!==null&&(C[J]=null,A[J].disconnect($))}N=null,I=null,m.reset();for(let J in p)delete p[J];e.setRenderTarget(y),f=null,d=null,u=null,r=null,v=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",G),r.addEventListener("inputsourceschange",q),b.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Ae=null,Ce=null;b.depth&&(Ce=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=b.stencil?ls:Hr,Ae=b.stencil?os:Gi);let $e={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer($e),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new ri(d.textureWidth,d.textureHeight,{format:Bn,type:$n,depthTexture:new $s(d.textureWidth,d.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let oe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ri(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Qe.setContext(r),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(J){for(let $=0;$<J.removed.length;$++){let oe=J.removed[$],Ae=C.indexOf(oe);Ae>=0&&(C[Ae]=null,A[Ae].disconnect(oe))}for(let $=0;$<J.added.length;$++){let oe=J.added[$],Ae=C.indexOf(oe);if(Ae===-1){for(let $e=0;$e<A.length;$e++)if($e>=C.length){C.push(oe),Ae=$e;break}else if(C[$e]===null){C[$e]=oe,Ae=$e;break}if(Ae===-1)break}let Ce=A[Ae];Ce&&Ce.connect(oe)}}let B=new k,te=new k;function ie(J,$,oe){B.setFromMatrixPosition($.matrixWorld),te.setFromMatrixPosition(oe.matrixWorld);let Ae=B.distanceTo(te),Ce=$.projectionMatrix.elements,$e=oe.projectionMatrix.elements,_t=Ce[14]/(Ce[10]-1),D=Ce[14]/(Ce[10]+1),wt=(Ce[9]+1)/Ce[5],qe=(Ce[9]-1)/Ce[5],ke=(Ce[8]-1)/Ce[0],De=($e[8]+1)/$e[0],At=_t*ke,Ie=_t*De,nt=Ae/(-ke+De),Ut=nt*-ke;if($.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ut),J.translateZ(nt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ce[10]===-1)J.projectionMatrix.copy($.projectionMatrix),J.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let at=_t+nt,P=D+nt,M=At-Ut,Y=Ie+(Ae-Ut),ee=wt*D/P*at,re=qe*D/P*at;J.projectionMatrix.makePerspective(M,Y,ee,re,at,P),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function we(J,$){$===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices($.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let $=J.near,oe=J.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),z.near=S.near=T.near=$,z.far=S.far=T.far=oe,(N!==z.near||I!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),N=z.near,I=z.far),z.layers.mask=J.layers.mask|6,T.layers.mask=z.layers.mask&3,S.layers.mask=z.layers.mask&5;let Ae=J.parent,Ce=z.cameras;we(z,Ae);for(let $e=0;$e<Ce.length;$e++)we(Ce[$e],Ae);Ce.length===2?ie(z,T,S):z.projectionMatrix.copy(T.projectionMatrix),pe(J,z,Ae)};function pe(J,$,oe){oe===null?J.matrix.copy($.matrixWorld):(J.matrix.copy(oe.matrixWorld),J.matrix.invert(),J.matrix.multiply($.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy($.projectionMatrix),J.projectionMatrixInverse.copy($.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Wr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(J){return p[J]};let Ve=null;function mt(J,$){if(h=$.getViewerPose(l||a),g=$,h!==null){let oe=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ae=!1;oe.length!==z.cameras.length&&(z.cameras.length=0,Ae=!0);for(let D=0;D<oe.length;D++){let wt=oe[D],qe=null;if(f!==null)qe=f.getViewport(wt);else{let De=u.getViewSubImage(d,wt);qe=De.viewport,D===0&&(e.setRenderTargetTextures(v,De.colorTexture,De.depthStencilTexture),e.setRenderTarget(v))}let ke=E[D];ke===void 0&&(ke=new tn,ke.layers.enable(D),ke.viewport=new Et,E[D]=ke),ke.matrix.fromArray(wt.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(wt.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(qe.x,qe.y,qe.width,qe.height),D===0&&(z.matrix.copy(ke.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ae===!0&&z.cameras.push(ke)}let Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let D=u.getDepthInformation(oe[0]);D&&D.isValid&&D.texture&&m.init(D,r.renderState)}if(Ce&&Ce.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let D=0;D<oe.length;D++){let wt=oe[D].camera;if(wt){let qe=p[wt];qe||(qe=new Ks,p[wt]=qe);let ke=u.getCameraImage(wt);qe.sourceTexture=ke}}}}for(let oe=0;oe<A.length;oe++){let Ae=C[oe],Ce=A[oe];Ae!==null&&Ce!==void 0&&Ce.update(Ae,$,l||a)}Ve&&Ve(J,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}let Qe=new ed;Qe.setAnimationLoop(mt),this.setAnimationLoop=function(J){Ve=J},this.dispose=function(){}}},gr=new Zn,Ux=new Lt;function Nx(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Uc(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,b,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),y=b.envMap,v=b.envMapRotation;y&&(m.envMap.value=y,gr.copy(v),gr.x*=-1,gr.y*=-1,gr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),m.envMapRotation.value.setFromMatrix4(Ux.makeRotationFromEuler(gr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Fx(n,e,t,i){let r={},s={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,y){let v=y.program;i.uniformBlockBinding(b,v)}function l(b,y){let v=r[b.id];v===void 0&&(g(b),v=h(b),r[b.id]=v,b.addEventListener("dispose",m));let A=y.program;i.updateUBOMapping(b,A);let C=e.render.frame;s[b.id]!==C&&(d(b),s[b.id]=C)}function h(b){let y=u();b.__bindingPointIndex=y;let v=n.createBuffer(),A=b.__size,C=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,A,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let y=r[b.id],v=b.uniforms,A=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let C=0,L=v.length;C<L;C++){let O=Array.isArray(v[C])?v[C]:[v[C]];for(let T=0,S=O.length;T<S;T++){let E=O[T];if(f(E,C,T,A)===!0){let z=E.__offset,N=Array.isArray(E.value)?E.value:[E.value],I=0;for(let U=0;U<N.length;U++){let G=N[U],q=x(G);typeof G=="number"||typeof G=="boolean"?(E.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,z+I,E.__data)):G.isMatrix3?(E.__data[0]=G.elements[0],E.__data[1]=G.elements[1],E.__data[2]=G.elements[2],E.__data[3]=0,E.__data[4]=G.elements[3],E.__data[5]=G.elements[4],E.__data[6]=G.elements[5],E.__data[7]=0,E.__data[8]=G.elements[6],E.__data[9]=G.elements[7],E.__data[10]=G.elements[8],E.__data[11]=0):(G.toArray(E.__data,I),I+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,y,v,A){let C=b.value,L=y+"_"+v;if(A[L]===void 0)return typeof C=="number"||typeof C=="boolean"?A[L]=C:A[L]=C.clone(),!0;{let O=A[L];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return A[L]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function g(b){let y=b.uniforms,v=0,A=16;for(let L=0,O=y.length;L<O;L++){let T=Array.isArray(y[L])?y[L]:[y[L]];for(let S=0,E=T.length;S<E;S++){let z=T[S],N=Array.isArray(z.value)?z.value:[z.value];for(let I=0,U=N.length;I<U;I++){let G=N[I],q=x(G),B=v%A,te=B%q.boundary,ie=B+te;v+=te,ie!==0&&A-ie<q.storage&&(v+=A-ie),z.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=q.storage}}}let C=v%A;return C>0&&(v+=A-C),b.__size=v,b.__cache={},this}function x(b){let y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function m(b){let y=b.target;y.removeEventListener("dispose",m);let v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(let b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}var ds=class{constructor(e={}){let{canvas:t=Eu(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,b=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,A=!1;this._outputColorSpace=Yt;let C=0,L=0,O=null,T=-1,S=null,E=new Et,z=new Et,N=null,I=new je(0),U=0,G=t.width,q=t.height,B=1,te=null,ie=null,we=new Et(0,0,G,q),pe=new Et(0,0,G,q),Ve=!1,mt=new es,Qe=!1,J=!1,$=new Lt,oe=new k,Ae=new Et,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$e=!1;function _t(){return O===null?B:1}let D=i;function wt(w,W){return t.getContext(w,W)}try{let w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",se,!1),D===null){let W="webgl2";if(D=wt(W,w),D===null)throw wt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let qe,ke,De,At,Ie,nt,Ut,at,P,M,Y,ee,re,Q,Re,le,Le,Pe,he,xe,Oe,Se,_e,Ye;function V(){qe=new e0(D),qe.init(),Se=new Px(D,qe),ke=new Yg(D,qe,e,Se),De=new Rx(D,qe),ke.reversedDepthBuffer&&d&&De.buffers.depth.setReversed(!0),At=new i0(D),Ie=new gx,nt=new Ix(D,qe,De,Ie,ke,Se,At),Ut=new Jg(v),at=new Qg(v),P=new cp(D),_e=new Xg(D,P),M=new t0(D,P,At,_e),Y=new s0(D,M,P,At),he=new r0(D,ke,nt),le=new Zg(Ie),ee=new mx(v,Ut,at,qe,ke,_e,le),re=new Nx(v,Ie),Q=new _x,Re=new wx(qe),Pe=new Wg(v,Ut,at,De,Y,f,c),Le=new Ax(v,Y,ke),Ye=new Fx(D,At,ke,De),xe=new qg(D,qe,At),Oe=new n0(D,qe,At),At.programs=ee.programs,v.capabilities=ke,v.extensions=qe,v.properties=Ie,v.renderLists=Q,v.shadowMap=Le,v.state=De,v.info=At}V();let ue=new Kc(v,D);this.xr=ue,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=qe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=qe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(w){w!==void 0&&(B=w,this.setSize(G,q,!1))},this.getSize=function(w){return w.set(G,q)},this.setSize=function(w,W,K=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,q=W,t.width=Math.floor(w*B),t.height=Math.floor(W*B),K===!0&&(t.style.width=w+"px",t.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(G*B,q*B).floor()},this.setDrawingBufferSize=function(w,W,K){G=w,q=W,B=K,t.width=Math.floor(w*K),t.height=Math.floor(W*K),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(E)},this.getViewport=function(w){return w.copy(we)},this.setViewport=function(w,W,K,j){w.isVector4?we.set(w.x,w.y,w.z,w.w):we.set(w,W,K,j),De.viewport(E.copy(we).multiplyScalar(B).round())},this.getScissor=function(w){return w.copy(pe)},this.setScissor=function(w,W,K,j){w.isVector4?pe.set(w.x,w.y,w.z,w.w):pe.set(w,W,K,j),De.scissor(z.copy(pe).multiplyScalar(B).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(w){De.setScissorTest(Ve=w)},this.setOpaqueSort=function(w){te=w},this.setTransparentSort=function(w){ie=w},this.getClearColor=function(w){return w.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,K=!0){let j=0;if(w){let X=!1;if(O!==null){let ce=O.texture.format;X=ce===No||ce===Uo||ce===Lo}if(X){let ce=O.texture.type,ve=ce===$n||ce===Gi||ce===ss||ce===os||ce===Io||ce===Po,Ee=Pe.getClearColor(),Me=Pe.getClearAlpha(),Xe=Ee.r,Je=Ee.g,Fe=Ee.b;ve?(g[0]=Xe,g[1]=Je,g[2]=Fe,g[3]=Me,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Xe,x[1]=Je,x[2]=Fe,x[3]=Me,D.clearBufferiv(D.COLOR,0,x))}else j|=D.COLOR_BUFFER_BIT}W&&(j|=D.DEPTH_BUFFER_BIT),K&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",se,!1),Pe.dispose(),Q.dispose(),Re.dispose(),Ie.dispose(),Ut.dispose(),at.dispose(),Y.dispose(),_e.dispose(),Ye.dispose(),ee.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",vn),ue.removeEventListener("sessionend",hi),Ln.stop()};function ge(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let w=At.autoReset,W=Le.enabled,K=Le.autoUpdate,j=Le.needsUpdate,X=Le.type;V(),At.autoReset=w,Le.enabled=W,Le.autoUpdate=K,Le.needsUpdate=j,Le.type=X}function se(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ne(w){let W=w.target;W.removeEventListener("dispose",ne),ye(W)}function ye(w){Ze(w),Ie.remove(w)}function Ze(w){let W=Ie.get(w).programs;W!==void 0&&(W.forEach(function(K){ee.releaseProgram(K)}),w.isShaderMaterial&&ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,K,j,X,ce){W===null&&(W=Ce);let ve=X.isMesh&&X.matrixWorld.determinant()<0,Ee=qi(w,W,K,j,X);De.setMaterial(j,ve);let Me=K.index,Xe=1;if(j.wireframe===!0){if(Me=M.getWireframeAttribute(K),Me===void 0)return;Xe=2}let Je=K.drawRange,Fe=K.attributes.position,lt=Je.start*Xe,ht=(Je.start+Je.count)*Xe;ce!==null&&(lt=Math.max(lt,ce.start*Xe),ht=Math.min(ht,(ce.start+ce.count)*Xe)),Me!==null?(lt=Math.max(lt,0),ht=Math.min(ht,Me.count)):Fe!=null&&(lt=Math.max(lt,0),ht=Math.min(ht,Fe.count));let Ct=ht-lt;if(Ct<0||Ct===1/0)return;_e.setup(X,j,Ee,K,Me);let ut,Rt=xe;if(Me!==null&&(ut=P.get(Me),Rt=Oe,Rt.setIndex(ut)),X.isMesh)j.wireframe===!0?(De.setLineWidth(j.wireframeLinewidth*_t()),Rt.setMode(D.LINES)):Rt.setMode(D.TRIANGLES);else if(X.isLine){let Be=j.linewidth;Be===void 0&&(Be=1),De.setLineWidth(Be*_t()),X.isLineSegments?Rt.setMode(D.LINES):X.isLineLoop?Rt.setMode(D.LINE_LOOP):Rt.setMode(D.LINE_STRIP)}else X.isPoints?Rt.setMode(D.POINTS):X.isSprite&&Rt.setMode(D.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)qr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Rt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))Rt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Be=X._multiDrawStarts,vt=X._multiDrawCounts,it=X._multiDrawCount,Nt=Me?P.get(Me).bytesPerElement:1,Fn=Ie.get(j).currentProgram.getUniforms();for(let Xt=0;Xt<it;Xt++)Fn.setValue(D,"_gl_DrawID",Xt),Rt.render(Be[Xt]/Nt,vt[Xt])}else if(X.isInstancedMesh)Rt.renderInstances(lt,Ct,X.count);else if(K.isInstancedBufferGeometry){let Be=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,vt=Math.min(K.instanceCount,Be);Rt.renderInstances(lt,Ct,vt)}else Rt.render(lt,Ct)};function yt(w,W,K){w.transparent===!0&&w.side===Wt&&w.forceSinglePass===!1?(w.side=un,w.needsUpdate=!0,ei(w,W,K),w.side=yi,w.needsUpdate=!0,ei(w,W,K),w.side=Wt):ei(w,W,K)}this.compile=function(w,W,K=null){K===null&&(K=w),p=Re.get(K),p.init(W),y.push(p),K.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),w!==K&&w.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();let j=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let ce=X.material;if(ce)if(Array.isArray(ce))for(let ve=0;ve<ce.length;ve++){let Ee=ce[ve];yt(Ee,K,X),j.add(Ee)}else yt(ce,K,X),j.add(ce)}),p=y.pop(),j},this.compileAsync=function(w,W,K=null){let j=this.compile(w,W,K);return new Promise(X=>{function ce(){if(j.forEach(function(ve){Ie.get(ve).currentProgram.isReady()&&j.delete(ve)}),j.size===0){X(w);return}setTimeout(ce,10)}qe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let gt=null;function fn(w){gt&&gt(w)}function vn(){Ln.stop()}function hi(){Ln.start()}let Ln=new ed;Ln.setAnimationLoop(fn),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(w){gt=w,ue.setAnimationLoop(w),w===null?Ln.stop():Ln.start()},ue.addEventListener("sessionstart",vn),ue.addEventListener("sessionend",hi),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(W),W=ue.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,W,O),p=Re.get(w,y.length),p.init(W),y.push(p),$.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),mt.setFromProjectionMatrix($,qn,W.reversedDepth),J=this.localClippingEnabled,Qe=le.init(this.clippingPlanes,J),m=Q.get(w,b.length),m.init(),b.push(m),ue.enabled===!0&&ue.isPresenting===!0){let ce=v.xr.getDepthSensingMesh();ce!==null&&Un(ce,W,-1/0,v.sortObjects)}Un(w,W,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(te,ie),$e=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,$e&&Pe.addToRenderList(m,w),this.info.render.frame++,Qe===!0&&le.beginShadows();let K=p.state.shadowsArray;Le.render(K,w,W),Qe===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=m.opaque,X=m.transmissive;if(p.setupLights(),W.isArrayCamera){let ce=W.cameras;if(X.length>0)for(let ve=0,Ee=ce.length;ve<Ee;ve++){let Me=ce[ve];Nn(j,X,w,Me)}$e&&Pe.render(w);for(let ve=0,Ee=ce.length;ve<Ee;ve++){let Me=ce[ve];bs(m,w,Me,Me.viewport)}}else X.length>0&&Nn(j,X,w,W),$e&&Pe.render(w),bs(m,w,W);O!==null&&L===0&&(nt.updateMultisampleRenderTarget(O),nt.updateRenderTargetMipmap(O)),w.isScene===!0&&w.onAfterRender(v,w,W),_e.resetDefaultState(),T=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],Qe===!0&&le.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Un(w,W,K,j){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||mt.intersectsSprite(w)){j&&Ae.setFromMatrixPosition(w.matrixWorld).applyMatrix4($);let ve=Y.update(w),Ee=w.material;Ee.visible&&m.push(w,ve,Ee,K,Ae.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||mt.intersectsObject(w))){let ve=Y.update(w),Ee=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ae.copy(w.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ae.copy(ve.boundingSphere.center)),Ae.applyMatrix4(w.matrixWorld).applyMatrix4($)),Array.isArray(Ee)){let Me=ve.groups;for(let Xe=0,Je=Me.length;Xe<Je;Xe++){let Fe=Me[Xe],lt=Ee[Fe.materialIndex];lt&&lt.visible&&m.push(w,ve,lt,K,Ae.z,Fe)}}else Ee.visible&&m.push(w,ve,Ee,K,Ae.z,null)}}let ce=w.children;for(let ve=0,Ee=ce.length;ve<Ee;ve++)Un(ce[ve],W,K,j)}function bs(w,W,K,j){let X=w.opaque,ce=w.transmissive,ve=w.transparent;p.setupLightsView(K),Qe===!0&&le.setGlobalState(v.clippingPlanes,K),j&&De.viewport(E.copy(j)),X.length>0&&Mn(X,W,K),ce.length>0&&Mn(ce,W,K),ve.length>0&&Mn(ve,W,K),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Nn(w,W,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new ri(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?as:$n,minFilter:Vi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));let ce=p.state.transmissionRenderTarget[j.id],ve=j.viewport||E;ce.setSize(ve.z*v.transmissionResolutionScale,ve.w*v.transmissionResolutionScale);let Ee=v.getRenderTarget(),Me=v.getActiveCubeFace(),Xe=v.getActiveMipmapLevel();v.setRenderTarget(ce),v.getClearColor(I),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear(),$e&&Pe.render(K);let Je=v.toneMapping;v.toneMapping=Ti;let Fe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),Qe===!0&&le.setGlobalState(v.clippingPlanes,j),Mn(w,K,j),nt.updateMultisampleRenderTarget(ce),nt.updateRenderTargetMipmap(ce),qe.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let ht=0,Ct=W.length;ht<Ct;ht++){let ut=W[ht],Rt=ut.object,Be=ut.geometry,vt=ut.material,it=ut.group;if(vt.side===Wt&&Rt.layers.test(j.layers)){let Nt=vt.side;vt.side=un,vt.needsUpdate=!0,Xi(Rt,K,j,Be,vt,it),vt.side=Nt,vt.needsUpdate=!0,lt=!0}}lt===!0&&(nt.updateMultisampleRenderTarget(ce),nt.updateRenderTargetMipmap(ce))}v.setRenderTarget(Ee,Me,Xe),v.setClearColor(I,U),Fe!==void 0&&(j.viewport=Fe),v.toneMapping=Je}function Mn(w,W,K){let j=W.isScene===!0?W.overrideMaterial:null;for(let X=0,ce=w.length;X<ce;X++){let ve=w[X],Ee=ve.object,Me=ve.geometry,Xe=ve.group,Je=ve.material;Je.allowOverride===!0&&j!==null&&(Je=j),Ee.layers.test(K.layers)&&Xi(Ee,W,K,Me,Je,Xe)}}function Xi(w,W,K,j,X,ce){w.onBeforeRender(v,W,K,j,X,ce),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(v,W,K,j,w,ce),X.transparent===!0&&X.side===Wt&&X.forceSinglePass===!1?(X.side=un,X.needsUpdate=!0,v.renderBufferDirect(K,W,j,X,w,ce),X.side=yi,X.needsUpdate=!0,v.renderBufferDirect(K,W,j,X,w,ce),X.side=Wt):v.renderBufferDirect(K,W,j,X,w,ce),w.onAfterRender(v,W,K,j,X,ce)}function ei(w,W,K){W.isScene!==!0&&(W=Ce);let j=Ie.get(w),X=p.state.lights,ce=p.state.shadowsArray,ve=X.state.version,Ee=ee.getParameters(w,X.state,ce,W,K),Me=ee.getProgramCacheKey(Ee),Xe=j.programs;j.environment=w.isMeshStandardMaterial?W.environment:null,j.fog=W.fog,j.envMap=(w.isMeshStandardMaterial?at:Ut).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,Xe===void 0&&(w.addEventListener("dispose",ne),Xe=new Map,j.programs=Xe);let Je=Xe.get(Me);if(Je!==void 0){if(j.currentProgram===Je&&j.lightsStateVersion===ve)return ti(w,Ee),Je}else Ee.uniforms=ee.getUniforms(w),w.onBeforeCompile(Ee,v),Je=ee.acquireProgram(Ee,Me),Xe.set(Me,Je),j.uniforms=Ee.uniforms;let Fe=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Fe.clippingPlanes=le.uniform),ti(w,Ee),j.needsLights=Ai(w),j.lightsStateVersion=ve,j.needsLights&&(Fe.ambientLightColor.value=X.state.ambient,Fe.lightProbe.value=X.state.probe,Fe.directionalLights.value=X.state.directional,Fe.directionalLightShadows.value=X.state.directionalShadow,Fe.spotLights.value=X.state.spot,Fe.spotLightShadows.value=X.state.spotShadow,Fe.rectAreaLights.value=X.state.rectArea,Fe.ltc_1.value=X.state.rectAreaLTC1,Fe.ltc_2.value=X.state.rectAreaLTC2,Fe.pointLights.value=X.state.point,Fe.pointLightShadows.value=X.state.pointShadow,Fe.hemisphereLights.value=X.state.hemi,Fe.directionalShadowMap.value=X.state.directionalShadowMap,Fe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Fe.spotShadowMap.value=X.state.spotShadowMap,Fe.spotLightMatrix.value=X.state.spotLightMatrix,Fe.spotLightMap.value=X.state.spotLightMap,Fe.pointShadowMap.value=X.state.pointShadowMap,Fe.pointShadowMatrix.value=X.state.pointShadowMatrix),j.currentProgram=Je,j.uniformsList=null,Je}function kn(w){if(w.uniformsList===null){let W=w.currentProgram.getUniforms();w.uniformsList=us.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function ti(w,W){let K=Ie.get(w);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.batchingColor=W.batchingColor,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.instancingMorph=W.instancingMorph,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function qi(w,W,K,j,X){W.isScene!==!0&&(W=Ce),nt.resetTextureUnits();let ce=W.fog,ve=j.isMeshStandardMaterial?W.environment:null,Ee=O===null?v.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:tr,Me=(j.isMeshStandardMaterial?at:Ut).get(j.envMap||ve),Xe=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Je=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Fe=!!K.morphAttributes.position,lt=!!K.morphAttributes.normal,ht=!!K.morphAttributes.color,Ct=Ti;j.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ct=v.toneMapping);let ut=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Rt=ut!==void 0?ut.length:0,Be=Ie.get(j),vt=p.state.lights;if(Qe===!0&&(J===!0||w!==S)){let jt=w===S&&j.id===T;le.setState(j,w,jt)}let it=!1;j.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==vt.state.version||Be.outputColorSpace!==Ee||X.isBatchedMesh&&Be.batching===!1||!X.isBatchedMesh&&Be.batching===!0||X.isBatchedMesh&&Be.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Be.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Be.instancing===!1||!X.isInstancedMesh&&Be.instancing===!0||X.isSkinnedMesh&&Be.skinning===!1||!X.isSkinnedMesh&&Be.skinning===!0||X.isInstancedMesh&&Be.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Be.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Be.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Be.instancingMorph===!1&&X.morphTexture!==null||Be.envMap!==Me||j.fog===!0&&Be.fog!==ce||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==le.numPlanes||Be.numIntersection!==le.numIntersection)||Be.vertexAlphas!==Xe||Be.vertexTangents!==Je||Be.morphTargets!==Fe||Be.morphNormals!==lt||Be.morphColors!==ht||Be.toneMapping!==Ct||Be.morphTargetsCount!==Rt)&&(it=!0):(it=!0,Be.__version=j.version);let Nt=Be.currentProgram;it===!0&&(Nt=ei(j,W,X));let Fn=!1,Xt=!1,cn=!1,It=Nt.getUniforms(),$t=Be.uniforms;if(De.useProgram(Nt.program)&&(Fn=!0,Xt=!0,cn=!0),j.id!==T&&(T=j.id,Xt=!0),Fn||S!==w){De.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),It.setValue(D,"projectionMatrix",w.projectionMatrix),It.setValue(D,"viewMatrix",w.matrixWorldInverse);let an=It.map.cameraPosition;an!==void 0&&an.setValue(D,oe.setFromMatrixPosition(w.matrixWorld)),ke.logarithmicDepthBuffer&&It.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&It.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,Xt=!0,cn=!0)}if(X.isSkinnedMesh){It.setOptional(D,X,"bindMatrix"),It.setOptional(D,X,"bindMatrixInverse");let jt=X.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),It.setValue(D,"boneTexture",jt.boneTexture,nt))}X.isBatchedMesh&&(It.setOptional(D,X,"batchingTexture"),It.setValue(D,"batchingTexture",X._matricesTexture,nt),It.setOptional(D,X,"batchingIdTexture"),It.setValue(D,"batchingIdTexture",X._indirectTexture,nt),It.setOptional(D,X,"batchingColorTexture"),X._colorsTexture!==null&&It.setValue(D,"batchingColorTexture",X._colorsTexture,nt));let Kt=K.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&he.update(X,K,Nt),(Xt||Be.receiveShadow!==X.receiveShadow)&&(Be.receiveShadow=X.receiveShadow,It.setValue(D,"receiveShadow",X.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&($t.envMap.value=Me,$t.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&W.environment!==null&&($t.envMapIntensity.value=W.environmentIntensity),Xt&&(It.setValue(D,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&Ei($t,cn),ce&&j.fog===!0&&re.refreshFogUniforms($t,ce),re.refreshMaterialUniforms($t,j,B,q,p.state.transmissionRenderTarget[w.id]),us.upload(D,kn(Be),$t,nt)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(us.upload(D,kn(Be),$t,nt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&It.setValue(D,"center",X.center),It.setValue(D,"modelViewMatrix",X.modelViewMatrix),It.setValue(D,"normalMatrix",X.normalMatrix),It.setValue(D,"modelMatrix",X.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let jt=j.uniformsGroups;for(let an=0,Ci=jt.length;an<Ci;an++){let zn=jt[an];Ye.update(zn,Nt),Ye.bind(zn,Nt)}}return Nt}function Ei(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function Ai(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(w,W,K){let j=Ie.get(w);j.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Ie.get(w.texture).__webglTexture=W,Ie.get(w.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:K,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){let K=Ie.get(w);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0};let Yi=D.createFramebuffer();this.setRenderTarget=function(w,W=0,K=0){O=w,C=W,L=K;let j=!0,X=null,ce=!1,ve=!1;if(w){let Me=Ie.get(w);if(Me.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(D.FRAMEBUFFER,null),j=!1;else if(Me.__webglFramebuffer===void 0)nt.setupRenderTarget(w);else if(Me.__hasExternalTextures)nt.rebindTextures(w,Ie.get(w.texture).__webglTexture,Ie.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Fe=w.depthTexture;if(Me.__boundDepthTexture!==Fe){if(Fe!==null&&Ie.has(Fe)&&(w.width!==Fe.image.width||w.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(w)}}let Xe=w.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(ve=!0);let Je=Ie.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Je[W])?X=Je[W][K]:X=Je[W],ce=!0):w.samples>0&&nt.useMultisampledRTT(w)===!1?X=Ie.get(w).__webglMultisampledFramebuffer:Array.isArray(Je)?X=Je[K]:X=Je,E.copy(w.viewport),z.copy(w.scissor),N=w.scissorTest}else E.copy(we).multiplyScalar(B).floor(),z.copy(pe).multiplyScalar(B).floor(),N=Ve;if(K!==0&&(X=Yi),De.bindFramebuffer(D.FRAMEBUFFER,X)&&j&&De.drawBuffers(w,X),De.viewport(E),De.scissor(z),De.setScissorTest(N),ce){let Me=Ie.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+W,Me.__webglTexture,K)}else if(ve){let Me=W;for(let Xe=0;Xe<w.textures.length;Xe++){let Je=Ie.get(w.textures[Xe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Xe,Je.__webglTexture,K,Me)}}else if(w!==null&&K!==0){let Me=Ie.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Me.__webglTexture,K)}T=-1},this.readRenderTargetPixels=function(w,W,K,j,X,ce,ve,Ee=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){De.bindFramebuffer(D.FRAMEBUFFER,Me);try{let Xe=w.textures[Ee],Je=Xe.format,Fe=Xe.type;if(!ke.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-j&&K>=0&&K<=w.height-X&&(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ee),D.readPixels(W,K,j,X,Se.convert(Je),Se.convert(Fe),ce))}finally{let Xe=O!==null?Ie.get(O).__webglFramebuffer:null;De.bindFramebuffer(D.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(w,W,K,j,X,ce,ve,Ee=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me)if(W>=0&&W<=w.width-j&&K>=0&&K<=w.height-X){De.bindFramebuffer(D.FRAMEBUFFER,Me);let Xe=w.textures[Ee],Je=Xe.format,Fe=Xe.type;if(!ke.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let lt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,lt),D.bufferData(D.PIXEL_PACK_BUFFER,ce.byteLength,D.STREAM_READ),w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ee),D.readPixels(W,K,j,X,Se.convert(Je),Se.convert(Fe),0);let ht=O!==null?Ie.get(O).__webglFramebuffer:null;De.bindFramebuffer(D.FRAMEBUFFER,ht);let Ct=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Au(D,Ct,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,lt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ce),D.deleteBuffer(lt),D.deleteSync(Ct),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,K=0){let j=Math.pow(2,-K),X=Math.floor(w.image.width*j),ce=Math.floor(w.image.height*j),ve=W!==null?W.x:0,Ee=W!==null?W.y:0;nt.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,K,0,0,ve,Ee,X,ce),De.unbindTexture()};let _n=D.createFramebuffer(),ni=D.createFramebuffer();this.copyTextureToTexture=function(w,W,K=null,j=null,X=0,ce=null){ce===null&&(X!==0?(qr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=X,X=0):ce=0);let ve,Ee,Me,Xe,Je,Fe,lt,ht,Ct,ut=w.isCompressedTexture?w.mipmaps[ce]:w.image;if(K!==null)ve=K.max.x-K.min.x,Ee=K.max.y-K.min.y,Me=K.isBox3?K.max.z-K.min.z:1,Xe=K.min.x,Je=K.min.y,Fe=K.isBox3?K.min.z:0;else{let Kt=Math.pow(2,-X);ve=Math.floor(ut.width*Kt),Ee=Math.floor(ut.height*Kt),w.isDataArrayTexture?Me=ut.depth:w.isData3DTexture?Me=Math.floor(ut.depth*Kt):Me=1,Xe=0,Je=0,Fe=0}j!==null?(lt=j.x,ht=j.y,Ct=j.z):(lt=0,ht=0,Ct=0);let Rt=Se.convert(W.format),Be=Se.convert(W.type),vt;W.isData3DTexture?(nt.setTexture3D(W,0),vt=D.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(nt.setTexture2DArray(W,0),vt=D.TEXTURE_2D_ARRAY):(nt.setTexture2D(W,0),vt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,W.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,W.unpackAlignment);let it=D.getParameter(D.UNPACK_ROW_LENGTH),Nt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Fn=D.getParameter(D.UNPACK_SKIP_PIXELS),Xt=D.getParameter(D.UNPACK_SKIP_ROWS),cn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ut.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Xe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Je),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Fe);let It=w.isDataArrayTexture||w.isData3DTexture,$t=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){let Kt=Ie.get(w),jt=Ie.get(W),an=Ie.get(Kt.__renderTarget),Ci=Ie.get(jt.__renderTarget);De.bindFramebuffer(D.READ_FRAMEBUFFER,an.__webglFramebuffer),De.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let zn=0;zn<Me;zn++)It&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ie.get(w).__webglTexture,X,Fe+zn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ie.get(W).__webglTexture,ce,Ct+zn)),D.blitFramebuffer(Xe,Je,ve,Ee,lt,ht,ve,Ee,D.DEPTH_BUFFER_BIT,D.NEAREST);De.bindFramebuffer(D.READ_FRAMEBUFFER,null),De.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||Ie.has(w)){let Kt=Ie.get(w),jt=Ie.get(W);De.bindFramebuffer(D.READ_FRAMEBUFFER,_n),De.bindFramebuffer(D.DRAW_FRAMEBUFFER,ni);for(let an=0;an<Me;an++)It?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Kt.__webglTexture,X,Fe+an):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Kt.__webglTexture,X),$t?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,jt.__webglTexture,ce,Ct+an):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,jt.__webglTexture,ce),X!==0?D.blitFramebuffer(Xe,Je,ve,Ee,lt,ht,ve,Ee,D.COLOR_BUFFER_BIT,D.NEAREST):$t?D.copyTexSubImage3D(vt,ce,lt,ht,Ct+an,Xe,Je,ve,Ee):D.copyTexSubImage2D(vt,ce,lt,ht,Xe,Je,ve,Ee);De.bindFramebuffer(D.READ_FRAMEBUFFER,null),De.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else $t?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(vt,ce,lt,ht,Ct,ve,Ee,Me,Rt,Be,ut.data):W.isCompressedArrayTexture?D.compressedTexSubImage3D(vt,ce,lt,ht,Ct,ve,Ee,Me,Rt,ut.data):D.texSubImage3D(vt,ce,lt,ht,Ct,ve,Ee,Me,Rt,Be,ut):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ce,lt,ht,ve,Ee,Rt,Be,ut.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ce,lt,ht,ut.width,ut.height,Rt,ut.data):D.texSubImage2D(D.TEXTURE_2D,ce,lt,ht,ve,Ee,Rt,Be,ut);D.pixelStorei(D.UNPACK_ROW_LENGTH,it),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Nt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Fn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,cn),ce===0&&W.generateMipmaps&&D.generateMipmap(vt),De.unbindTexture()},this.initRenderTarget=function(w){Ie.get(w).__webglFramebuffer===void 0&&nt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?nt.setTextureCube(w,0):w.isData3DTexture?nt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?nt.setTexture2DArray(w,0):nt.setTexture2D(w,0),De.unbindTexture()},this.resetState=function(){C=0,L=0,O=null,De.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}};var zx={x:1630,y:1160},Ox={x:3370,y:430},ua={x:1450,y:1320};function sd(n,e){if(!n||!e)return null;let t=[zx,Ox].filter(g=>Math.hypot(g.x-n.x,g.y-n.y)<400).sort((g,x)=>Math.hypot(g.x-n.x,g.y-n.y)-Math.hypot(x.x-n.x,x.y-n.y))[0],i=0,r=1;if(t){let g=t.x-n.x,x=t.y-n.y;Math.abs(g)>Math.abs(x)?(i=Math.sign(g)||1,r=0):r=Math.sign(x)||1}let s=[0,280,320,360][e],a=[0,220,260,300][e],o=112,c={x:n.x-i*a/2,y:n.y-r*a/2},l=(g,x)=>({x:c.x+r*g+i*x,y:c.y-i*g+r*x}),h=(g,x,m,p)=>{let b=l(g,x);return{x:b.x,y:b.y,w:r?m:p,h:r?p:m}},u=[];if(e>=2){u.push(h(0,-a/2,s,10));for(let g of[-s/2,s/2])u.push(h(g,0,10,a))}if(e>=3){let g=(s-o)/2;for(let x of[-1,1])u.push(h(x*(o/2+g/2),a/2,g,10))}let d=e===1?[-1,1].flatMap(g=>[-1,1].map(x=>({...l(g*(s/2-8),x*(a/2-8)),radius:6}))):[],f=[h(-s/2+53,-a/2+64,52,90)];return e>=3&&f.push(h(s/2-53,-a/2+64,52,90)),{center:c,width:s,depth:a,door:o,fx:i,fy:r,yaw:Math.atan2(i,r),floor:h(0,0,s,a),walls:u,posts:d,beds:f,point:l,wallHeight:224,doorHeight:204,roofRidge:284}}var Bx=["#4c9cba","#df8168","#9974c7","#76b677","#e3b04c","#df71a7"],kx=["#e3b185","#be895f","#efc69d","#a67152"],Vx=["#463b32","#24282b","#99673b","#c9a465"];var gl=(n,e,t)=>Number.isInteger(n?.[e])&&n[e]>=0&&n[e]<t?n[e]:0;function Qc(n,e){return n.shirt=Bx[gl(e,"shirt",6)],n.skin=kx[gl(e,"skin",4)],n.hair=Vx[gl(e,"hair",4)],n.style=gl(e,"style",3),n}function xl(n){return Qc({},n)}var ad={gather:1e3,fish:1500,cook:1200,wave:2e3,cheer:2e3};function od(n,e){let t=Math.sin(e*Math.PI*4);return n==="gather"?{left:-.35,right:-1.1+t*.6,bend:.12}:n==="fish"?{left:-.8,right:-1.3+Math.sin(e*Math.PI)*.3,bend:0}:n==="cook"?{left:-.8,right:-.9+t*.25,bend:.06}:n==="wave"?{left:0,right:-2.4,bend:0,wave:t*.25}:n==="cheer"?{left:-2.4,right:-2.4,bend:0,wave:t*.12}:null}var Gx="assets/materials-v018/",eh=["paving","sand","grass","plaster","teal","roof","wood","rock","leaf"],Hx=new Set(["#a68854","#876742","#845f3f","#7d654b","#866642","#a98961","#765734","#9a743e","#786040","#8a6d49","#927652","#6e5942"]);function _l(n){return{canvas:n,antialias:!0,stencil:!1,powerPreference:"high-performance"}}function ld(n){let e=document.createElement("canvas");e.width=n.width,e.height=n.height;let t=e.getContext("2d");t.scale(e.width/4600,e.height/2900),t.fillStyle="#0000ff",t.fillRect(0,0,4600,2900),t.fillStyle="#00ff00";for(let[i,r,s,a]of[[1750,1300,1420,840],[3380,500,450,240],[4100,2400,325,225]])t.beginPath(),t.ellipse(i,r,s,a,0,0,Math.PI*2),t.fill();return t.strokeStyle="#ff0000",t.lineWidth=100,t.lineCap="round",t.beginPath(),t.moveTo(1440,1190),t.bezierCurveTo(1520,1080,1750,1190,1980,1280),t.bezierCurveTo(2420,1510,2790,1440,3200,1320),t.stroke(),t.lineWidth=80,t.beginPath(),t.moveTo(1800,1180),t.bezierCurveTo(2100,930,2820,920,3220,730),t.lineTo(3370,480),t.stroke(),t.fillStyle="#ff0000",t.beginPath(),t.ellipse(1570,1160,290,200,0,0,Math.PI*2),t.fill(),e}function yl(n,e=8){let t=new Map,i=new Map,r=new Set,s=0,a=0,o=!0,c=0,l=new ta;for(let g of eh){let x=l.load(Gx+g+".webp",()=>{s++,o=!0},void 0,()=>{a++,r.add(g),o=!0});x.userData.materialAssetName=g,x.colorSpace=Yt,x.wrapS=x.wrapT=Gr,x.anisotropy=Math.min(e,n.capabilities.getMaxAnisotropy()),t.set(g,x)}function h(g,x="#ffffff",m=1,p=.035){let b=g+x+m+p;if(!i.has(b)){let y=t.get(g).clone();y.repeat.set(m,m);let v=new Bt({color:x,map:y,bumpMap:y,bumpScale:p,roughness:g==="leaf"?.78:.93});t.get(g).addEventListener("dispose",()=>y.dispose());let A=t.get(g);v.userData.textureSource=A,i.set(b,v),o=!0}return i.get(b)}function u(g){return Hx.has(g)?h("wood","#ded4c4",1,.045):g==="#e2dbc7"?h("plaster","#f8f4e7",1,.027):g==="#ba7655"?h("roof","#e4d6c7",2,.055):g==="#a7c4b7"?h("teal","#e7ede3",1,.035):g==="#92968b"||g==="#777a6b"?h("rock","#ddd9cf",1,.065):null}function d(){if(!o)return;c++;let g=s+a<eh.length;for(let x of i.values()){let m=x.userData.textureSource;m.image&&x.map.image!==m.image&&(x.map.source=m.source,x.map.needsUpdate=!0),x.map.image&&!x.userData.uploaded&&(x.map.needsUpdate=!0,x.userData.uploaded=!0),!x.userData.uploaded&&!r.has(m.userData.materialAssetName)&&(g=!0)}o=g}function f(g){g.colorSpace=jn;let x=new Bt({color:"#ffffff",map:g,roughness:1});return x.onBeforeCompile=m=>{m.uniforms.uSand={value:t.get("sand")},m.uniforms.uGrass={value:t.get("grass")},m.uniforms.uPaving={value:t.get("paving")},m.fragmentShader=m.fragmentShader.replace("#include <common>",`#include <common>
        uniform sampler2D uSand; uniform sampler2D uGrass; uniform sampler2D uPaving;`),m.fragmentShader=m.fragmentShader.replace("#include <map_fragment>",`
        vec3 maskColor=texture2D(map,vMapUv).rgb;
        vec2 detailUV=vMapUv*vec2(57.5,36.25);
        float green=maskColor.g;
        float trail=maskColor.r;
        vec3 sand=texture2D(uSand,detailUV*1.4).rgb;
        vec3 grass=texture2D(uGrass,detailUV*1.15).rgb;
        vec3 paving=texture2D(uPaving,detailUV*.72).rgb;
        diffuseColor.rgb=sand*maskColor.b+paving*trail+grass*green;
        diffuseColor.rgb*=.94+.06*sin(vMapUv.x*170.0)*sin(vMapUv.y*155.0);`),m.fragmentShader=m.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        float relief=dot(texture2D(uSand,vMapUv*vec2(90.,57.)).rgb,vec3(.333));
        normal=normalize(normal+vec3(dFdx(relief)*.14,dFdy(relief)*.14,0.));`)},x}return{textures:t,surface:h,forColor:u,ground:f,update:d,stats:()=>({loaded:s,failed:a,total:eh.length,materials:i.size,syncPending:o,syncPasses:c}),dispose(){for(let g of i.values())g.map.dispose(),g.dispose();for(let g of t.values())g.dispose()}}}function vl({x:n,z:e,surface:t,yaw:i,pitch:r,mode:s="first",distance:a=4.8,bob:o=0},c={position:new k,target:new k}){let l=t+1.64+o;return s==="first"?(c.position.set(n,l,e),c.target.set(n-Math.sin(i)*Math.cos(r),l-Math.sin(r),e-Math.cos(i)*Math.cos(r)),c):(c.target.set(n,t+1.3,e),c.position.set(n+Math.sin(i)*Math.cos(r)*a,c.target.y+.65+Math.sin(r)*a,e+Math.cos(i)*Math.cos(r)*a),c)}function th(n,e,t,i){return!(t>0)||!(i>0)?n:n.lerp(e,1-Math.exp(-t*i))}function Ml(n,e,t,i){return i.length=0,n.intersectObjects(e,t,i),i}var Wx={};function bl(n,e,t,{height:i=18,offsetX:r=-12,offsetZ:s=-8}=Wx){let a=Math.abs(n.shadow.camera.right-n.shadow.camera.left),o=n.shadow.mapSize.width,c=a>0&&o>0?a/o:0,l=c?Math.round(e/c)*c:e,h=c?Math.round(t/c)*c:t;return n.position.set(l+r,i,h+s),n.target.position.set(l,0,h),c}function cd(n,e,t,i,r){let s=(()=>{let x=90210;return()=>(x=Math.imul(x,1664525)+1013904223>>>0)/4294967296})(),a=new Ft;a.setAttribute("position",new tt([-.015,0,0,.015,0,0,-.012,.08,.01,.012,.08,.01,0,.16,.035],3)),a.setAttribute("uv",new tt([0,0,1,0,0,.5,1,.5,.5,1],2)),a.setIndex([0,1,2,1,3,2,2,3,4]),a.computeVertexNormals();let o=new Bt({color:"#ffffff",side:Wt,roughness:1});o.defines={USE_UV:""};let c={value:0},l={value:new Et(0,0,0,0)};o.onBeforeCompile=x=>{x.uniforms.uWind=c,x.uniforms.uBase=l,x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec4 uBase;`),x.vertexShader=x.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec3 grassWorld=(instanceMatrix*vec4(position,1.)).xyz;
      transformed.x+=sin(uWind+grassWorld.x*.8+grassWorld.z)*position.y*.13;
      if(abs(grassWorld.x-uBase.x)<uBase.z&&abs(grassWorld.z-uBase.y)<uBase.w)transformed.y-=100.;`),x.fragmentShader=x.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=.7+.35*vUv.y;`)};let h=r?2800:5500,u=new Dt(a,o,h);u.receiveShadow=!0,u.frustumCulled=!1;let d=i.getContext("2d").getImageData(0,0,i.width,i.height).data,f=new Pt,g=0;for(let x=0;x<h*8&&g<h;x++){let m=s()*4600,p=s()*2900,b=(Math.min(i.height-1,Math.floor(p/2900*i.height))*i.width+Math.min(i.width-1,Math.floor(m/4600*i.width)))*4;if(d[b+1]<d[b]+12||d[b+1]<85)continue;let y=m/t,v=p/t,A=e(y,v);A<.1||(f.position.set(y,A-.015,v),f.rotation.set(0,s()*Math.PI*2,0),f.scale.setScalar(.7+s()*.8),f.updateMatrix(),u.setMatrixAt(g,f.matrix),u.setColorAt(g,new je().setHSL(.2+s()*.055,.3+s()*.15,.22+s()*.08)),g++)}return u.count=g,n.add(u),{update(x,m){c.value=x,m?l.value.set(m.floor.x/t,m.floor.y/t,m.floor.w/(t*2)+.1,m.floor.h/(t*2)+.1):l.value.set(0,0,0,0)},dispose(){n.remove(u),a.dispose(),o.dispose(),u.dispose()}}}function hd(n,e,{cube:t,tube:i},r){let s=e.width/80,a=e.depth/80,o=e.wallHeight/80,c=e.roofRidge/80;for(let u of n.children)u.name==="floor"&&(u.material=r.surface("paving","#e5ded0",2,.045)),u.name==="wall"&&(u.material=r.surface("plaster","#f8f4e7",1,.025)),u.name==="roof"&&(u.material=r.surface("roof","#efe2d5",2,.045));for(let u of[-1,1]){let d=t(n,"#876742",[u*s/2,o-.09,0],[.13,.16,a+.18]);if(d.name="trim",e.walls.length){let f=t(n,"#a7c4b7",[u*(s/2+.064),1.55,-a*.16],[.02,.9,.7]);f.name="shutter";for(let g=0;g<8;g++)t(n,"#876742",[u*(s/2+.08),1.17+g*.11,-a*.16],[.025,.035,.69]);for(let g of[-a*.16-.39,-a*.16+.39])t(n,"#e2dbc7",[u*(s/2+.078),1.56,g],[.045,1.02,.065])}}let l=i(n,"#ba7655",[0,c+.02,0],[.09,a+.42,.09]);l.rotation.x=Math.PI/2,l.name="ridge";let h=t(n,"#e2dbc7",[0,o-.05,-a/2-.066],[s+.08,.16,.06]);return h.name="trim",n}var Qn=Object.freeze([{id:"home",name:"Main Island",x:0,z:0,radius:480,biome:"mixed",dock:{x:390,z:100},landmarks:["village","player-base","market","harbour"]},{id:"jungle",name:"Jungle Island",x:1150,z:-450,radius:270,biome:"rainforest",dock:{x:930,z:-380},landmarks:["cave","waterfall","hidden-cache"]},{id:"fortress",name:"Fortress Island",x:1900,z:550,radius:240,biome:"rocky",dock:{x:1690,z:490},landmarks:["guarded-estate","rescue-mission"]},{id:"highlands",name:"Highlands Island",x:-1050,z:-850,radius:290,biome:"highlands",dock:{x:-840,z:-710},landmarks:["mine","mountain-trail"]},{id:"smugglers",name:"Smugglers Island",x:-1550,z:250,radius:230,biome:"mangrove",dock:{x:-1340,z:220},landmarks:["warehouse","secret-passage"]},{id:"paradise",name:"Paradise Island",x:700,z:1350,radius:250,biome:"beach",dock:{x:600,z:1120},landmarks:["cabins","reef"]}]),kM=Object.freeze(Object.fromEntries(Qn.map(n=>[n.id,n])));function ud(n,e){return!Number.isFinite(n)||!Number.isFinite(e)?null:Qn.find(t=>Math.hypot(n-t.x,e-t.z)<=t.radius)??null}function ms(n,e){if(Number.isFinite(n.coastSeed)){let i=n.coastSeed;return .855+.07*Math.sin(e*2+i)+.045*Math.cos(e*3-i)+.025*Math.sin(e*7+i)}let t=n.x*.002+n.z*.001;return .955+.023*Math.sin(e*3+t)+.012*Math.cos(e*5-t)}function yr(n,e,t){let i=(e-n.x)/n.radius,r=(t-n.z)/n.radius,s=Math.hypot(i,r);if(s>=1)return-.32;let a=Math.atan2(r,i),o=ms(n,a),c=Math.max(0,Math.min(1,(o-s)/.12));if(s>o)return-.32*Math.min(1,(s-o)/.04);if(Number.isFinite(n.relief)){let f=(o-s)*n.radius/20,g=Math.min(1,f/18),x=Math.max(0,Math.min(1,(f-18)/85)),m=Math.exp(-((i+.18)**2*4+(r-.16)**2*5))*.7+Math.exp(-((i-.36)**2*11+(r+.25)**2*8))*.42;return .005+g*.65+x*x*(3-2*x)*m*n.relief}let l=Math.max(0,Math.min(1,(.79-s)/.22)),h=l*l*(3-2*l),u=Math.exp(-((i+.18)**2*4+(r-.16)**2*5))*.7+Math.exp(-((i-.36)**2*11+(r+.25)**2*8))*.42,d=n.biome==="highlands"?8.5:n.biome==="rainforest"?2.2:n.biome==="rocky"?1.6:.55;return .005+c*.35+h*u*d}function nh(n,{segments:e=48}={}){if(!Number.isInteger(e)||e<8||e>256)throw new RangeError("segments must be 8..256");let t=[0,yr(n,n.x,n.z),0],i=[.5,.5],r=[],s=Math.ceil(e/2);for(let l=1;l<=s;l++)for(let h=0;h<=e;h++){let u=h/e*Math.PI*2,d=Number.isFinite(n.relief)?ms(n,u)+.03:1.02,f=n.radius*d*l/s,g=Math.cos(u)*f,x=Math.sin(u)*f;t.push(g,yr(n,n.x+g,n.z+x),x),i.push(.5+g/(n.radius*2.04),.5+x/(n.radius*2.04));let m=1+(l-1)*(e+1)+h;if(h!==e)if(l===1)r.push(0,m+1,m);else{let p=m-(e+1);r.push(p,m+1,m,p,p+1,m+1)}}let a=new Ft;a.setAttribute("position",new tt(t,3)),a.setAttribute("uv",new tt(i,2)),a.setIndex(r),a.computeVertexNormals();let o=new Bt({color:n.biome==="beach"?11779972:5538650,roughness:1,side:Wt}),c=new ct(a,o);return c.name="archipelago-"+n.id,c.position.set(n.x,0,n.z),c.receiveShadow=!0,c}function dd(n={}){let e=new Ue;e.name="archipelago-terrain";for(let t of Qn)e.add(nh(t,n));return e}function gs(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,c=new Ft,l=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=n[d].attributes.position.count}c.setIndex(u)}for(let h in s){let u=fd(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let g=fd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function fd(n){let e,t,i,r=-1,s=0;for(let l=0;l<n.length;++l){let h=n[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let a=new e(s),o=new nn(a,t,i),c=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let x=h.getComponent(d,g);o.setComponent(d+u,g,x)}}else a.set(h.array,c);c+=h.count*t}return r!==void 0&&(o.gpuType=r),o}var da=Object.freeze([{x:95,z:-95,w:105,d:80,h:4.4,color:"#d8b8a3",shutter:"#557f7b"},{x:-55,z:-115,w:110,d:85,h:5.8,color:"#d5dfd4",shutter:"#73868b"},{x:-210,z:-95,w:100,d:90,h:4.5,color:"#e6cf97",shutter:"#426d73"},{x:100,z:110,w:100,d:90,h:5.6,color:"#9fbdac",shutter:"#705b48"},{x:-70,z:130,w:110,d:85,h:4.4,color:"#dfc6b5",shutter:"#587e7c"},{x:-225,z:110,w:90,d:75,h:4.5,color:"#c5d1d0",shutter:"#7a6a58"}]);function vr(n,e,t=da){if(e!=="home")return!1;for(let i of t)if(Math.abs(n.x-i.x)<i.w/2+7&&Math.abs(n.z-i.z)<i.d/2+7)return!0;return!1}var Xx=`
float hash21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise21(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hash21(i),hash21(i+vec2(1.,0.)),f.x),mix(hash21(i+vec2(0.,1.)),hash21(i+vec2(1.)),f.x),f.y);}
float fbm21(vec2 p){float f=0.,a=.5;for(int i=0;i<4;i++){f+=a*noise21(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`,ih=`
float hashFast(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noiseFast(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hashFast(i),hashFast(i+vec2(1.,0.)),f.x),mix(hashFast(i+vec2(0.,1.)),hashFast(i+vec2(1.)),f.x),f.y);}
float fbmFast(vec2 p){float f=0.,a=.535714;for(int i=0;i<3;i++){f+=a*noiseFast(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`,md=`
float hashLite(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noiseLite(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hashLite(i),hashLite(i+vec2(1.,0.)),f.x),mix(hashLite(i+vec2(0.,1.)),hashLite(i+vec2(1.)),f.x),f.y);}
float fbmLite(vec2 p){float f=0.,a=.666667;for(int i=0;i<2;i++){f+=a*noiseLite(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`;function Sl(n,{size:e=900,segments:t=72,coastSeeds:i=[],mobile:r=!1}={}){let s=Array.from({length:9},(d,f)=>new Et(...n[f]||[1e4,1e4,1,1])),a=r?ih:Xx,o=r?"fbmFast(p*.52+vec2(uTime*.04,0.))":"fbm21(p*.52+vec2(uTime*.04,0.))",c=r?"0.":"(noise21(p*1.6+vec2(uTime*.09,-uTime*.07))-.5)*.10",l=new wn({fog:!0,uniforms:{...hl.clone(be.fog),uTime:{value:0},uEye:{value:new k},uCoasts:{value:s},uCoastSeeds:{value:Array.from({length:9},(d,f)=>i[f]??-100)}},vertexShader:`uniform float uTime;varying vec3 vWater;
    #include <fog_pars_vertex>
    void main(){vec3 p=position;
    p.y+=sin(dot(p.xz,vec2(.41,.19))+uTime*.75)*.024+sin(dot(p.xz,vec2(-.17,.36))-uTime*.58)*.019;
    vWater=(modelMatrix*vec4(p,1.)).xyz;vec4 mvPosition=viewMatrix*vec4(vWater,1.);gl_Position=projectionMatrix*mvPosition;
    #include <fog_vertex>
    }`,fragmentShader:`uniform float uTime;uniform vec3 uEye;uniform vec4 uCoasts[9];uniform float uCoastSeeds[9];varying vec3 vWater;
    #include <fog_pars_fragment>
    ${a}
    float wave(vec2 p){return sin(dot(p,vec2(.7,.3))+uTime*.8)*.046+
      sin(dot(p,vec2(-.43,.81))-uTime*.62)*.038+sin(dot(p,vec2(1.36,.67))+uTime*1.12)*.016+
      ${c};}
    void main(){vec2 p=vWater.xz;float eps=.055,h=wave(p);
      vec3 n=normalize(vec3((h-wave(p+vec2(eps,0.)))/eps,1.,(h-wave(p+vec2(0.,eps)))/eps));
      vec3 view=normalize(uEye-vWater);float fresnel=.025+.975*pow(1.-max(dot(n,view),0.),5.);
      float coast=1000.;for(int i=0;i<9;i++){
        vec4 c=uCoasts[i];vec2 delta=(p-c.xy)/c.zw;float boundary=1.,seed=uCoastSeeds[i];
        if(seed>-99.){float a=atan(delta.y,delta.x);boundary=.855+.07*sin(a*2.+seed)+.045*cos(a*3.-seed)+.025*sin(a*7.+seed);}
        coast=min(coast,(length(delta)-boundary)*min(c.z,c.w));}
      float shallow=1.-smoothstep(.0,3.4,coast);vec3 depth=mix(vec3(.008,.15,.21),vec3(.045,.47,.43),shallow);
      float ripple=${o};depth*=.94+ripple*.12;
      vec3 reflection=mix(vec3(.58,.76,.82),vec3(.19,.46,.63),smoothstep(0.,.8,n.y-view.y));
      vec3 col=mix(depth,reflection,fresnel);
      float spark=pow(max(dot(reflect(-normalize(vec3(-.55,.82,-.36)),n),view),0.),170.);
      col+=vec3(1.,.86,.65)*spark*.58;
      float foam=(1.-smoothstep(.04,.42,abs(coast+.12+sin(uTime*.8+ripple*5.)*.15)))*smoothstep(.32,.64,ripple);
      col=mix(col,vec3(.72,.86,.78),foam*.6);gl_FragColor=vec4(col,1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      #include <fog_fragment>
    }`}),h=new Rn(e,e,t,t);h.rotateX(-Math.PI/2),l.userData.fragmentNoiseLayers=r?3:7,l.userData.mobileQuality=r;let u=new ct(h,l);return u.name="tropical-ocean",u.position.y=-.045,{mesh:u,update(d,f){l.uniforms.uTime.value=d,l.uniforms.uEye.value.copy(f)},dispose(){h.dispose(),l.dispose()}}}function wl(n=420,{mobile:e=!1}={}){let t=e?md:ih,i=e?"fbmLite":"fbmFast",r=new wn({side:un,depthWrite:!1,uniforms:{uTime:{value:0}},vertexShader:"varying vec3 vSky;void main(){vSky=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float uTime;varying vec3 vSky;${t}
  void main(){vec3 dir=normalize(vSky);float h=dir.y;
    vec3 col=mix(vec3(.65,.79,.84),vec3(.095,.34,.59),smoothstep(-.02,.8,h));
    vec2 p=dir.xz/max(.1,h)*2.3+vec2(uTime*.006,uTime*.0025);float n=${i}(p);
    float cloud=smoothstep(.52,.70,n)*smoothstep(.025,.20,h);
    col=mix(col,mix(vec3(.62,.69,.71),vec3(.98,.96,.89),smoothstep(.50,.70,n)),cloud);
    float sun=pow(max(dot(dir,normalize(vec3(-.55,.82,-.36))),0.),70.);col+=vec3(.35,.24,.12)*sun;
    gl_FragColor=vec4(col,1.);
    #include <colorspace_fragment>
  }`});r.userData.fragmentNoiseLayers=e?2:3,r.userData.mobileQuality=e;let s=new ct(new Tn(n,32,20),r);return s.name="tropical-sky",s.renderOrder=-10,s.frustumCulled=!1,s}function Tl(n,e,{mobile:t=!1}={}){let i=new Bt({roughness:1,color:"#ffffff",vertexColors:!0});i.userData.fragmentNoiseLayers=t?2:3,i.userData.fragmentTextureSamples=t?3:4,i.userData.mobileQuality=t;let r=t?md:ih,s=t?"fbmLite":"fbmFast",a=t?"texture2D(uGrass,uv).rgb":"mix(texture2D(uGrass,uv).rgb,texture2D(uGrass,uv*1.37+offset).rgb,.38)";return i.onBeforeCompile=o=>{Object.assign(o.uniforms,{uGrass:{value:n.textures.get("grass")},uSand:{value:n.textures.get("sand")},uRock:{value:n.textures.get("rock")}}),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vIslandPosition;varying vec3 vIslandNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vIslandPosition=position;vIslandNormal=normalize(normal*vec3(${e.toFixed(1)},1.,${e.toFixed(1)}));`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vIslandPosition;varying vec3 vIslandNormal;uniform sampler2D uGrass;uniform sampler2D uSand;uniform sampler2D uRock;${r}`).replace("#include <map_fragment>",`
        vec2 uv=vIslandPosition.xz/${e.toFixed(1)}*.34;
        float n=${s}(uv*.46);vec2 offset=vec2(17.3,8.1);
        vec3 grass=${a};
        vec3 sand=texture2D(uSand,uv*.8).rgb,rock=texture2D(uRock,uv*.62).rgb;
        float beach=1.-smoothstep(.025,.34,vIslandPosition.y);
        float slope=1.-abs(normalize(vIslandNormal).y);float cliff=smoothstep(.44,.76,slope)*(1.-beach);
        diffuseColor.rgb*=mix(mix(grass,sand,beach),rock,cliff)*(.82+n*.28);`)},i.customProgramCacheKey=()=>`tropical-island-${e}-${t?"mobile":"full"}`,i}function pd(n=14){let e=[],t=[],i=[],r=(a,o,c,l)=>{let h=o*2.2,u=Math.sin(o*Math.PI)*.55-o*o*.95;return[Math.sin(a)*h+Math.cos(a)*l*c,u-l*.17,Math.cos(a)*h-Math.sin(a)*l*c]};for(let a=0;a<9;a++){let o=a*Math.PI*2/9;for(let c=1;c<n;c++)for(let l of[-1,1]){let h=c/n,u=Math.sin(h*Math.PI)*.44,d=e.length/3;e.push(...r(o,h-.03,l,.012),...r(o,h-.09,l,u),...r(o,h+.025,l,u*.87),...r(o,h+.03,l,.012)),t.push(h,0,h,.9,h+.03,1,h+.03,0),i.push(d,d+1,d+2,d,d+2,d+3)}}let s=new Ft;return s.setAttribute("position",new tt(e,3)),s.setAttribute("uv",new tt(t,2)),s.setIndex(i),s.computeVertexNormals(),s}var ln=(n,e=0)=>{let t=Math.sin((n+1)*12.9898+(e+1)*78.233)*43758.5453;return t-Math.floor(t)};function qx(n,e){for(let t of n){let i=t.userData.lod,r=i.distance+i.radius,s=e.distanceToSquared(i.center)<=r*r?"high":"low";s!==i.level&&(t.geometry=i[s],i.level=s,i.shadowReceiverLod&&(t.receiveShadow=s==="high"))}}function Yx(n,e,t,i=0){if(n.ready){let r=n.x-t.x,s=n.y-t.y,a=n.z-t.z;if(i>0?r*r+s*s+a*a<i*i:r===0&&s===0&&a===0)return!1}return n.ready=!0,n.x=t.x,n.y=t.y,n.z=t.z,qx(e,t),!0}function El(n,e,{scale:t,height:i,surfaces:r,small:s=!1,clear:a=()=>!1,dense:o=!1,lod:c=!1}={}){let l=(S,E)=>{let z=new Gt(.085,.16,1,S,E);z.translate(0,.5,0);let N=z.attributes.position;for(let I=0;I<N.count;I++)N.setX(I,N.getX(I)+N.getY(I)**2*.2);return z.computeVertexNormals(),z},h=l(8,6),u=c?l(6,3):h,d=r.surface("wood","#bc9c71",2,.03),f=r.surface("leaf","#9cb384",1,.01).clone();f.side=Wt;let g=pd(s?9:12),x=c?pd(s?6:7):g,m=[],p=[],b=new Pt,y=650/t,v=0;for(let S of e){let E=[];for(let N=0;N<(o?S.id==="home"?s?700:1500:s?280:650:s?22:42);N++){let I=N+S.x*.013+S.z*.017,U=N*2.39996+S.x*.001+(ln(I,0)-.5)*.72,G=o?Math.min(.93,Math.max(.12,Math.sqrt(N*.6180339%1)*.91+(ln(I,1)-.5)*.09)):Math.min(.91,.34+N%7*.075+(ln(I,1)-.5)*.08),q=S.radius*G,B=S.x+Math.sin(U)*q,te=S.z+Math.cos(U)*q;a(S,B,te)||i(B,te)<.32||E.push({x:B/t,z:te/t,y:i(B,te),a:U,h:3.45+ln(I,2)*2.15,size:.7+ln(I,3)*.43,leanX:(ln(I,4)-.5)*.12,leanZ:(ln(I,5)-.5)*.14,index:v++})}if(!E.length)continue;let z=Array.from({length:4},()=>[]);E.forEach(N=>z[(N.x>=S.x/t?1:0)+(N.z>=S.z/t?2:0)].push(N)),z.forEach((N,I)=>{if(!N.length)return;let U=new Dt(h,d,N.length),G=new Dt(g,f,N.length);U.name=m.length?`grove-trunks-${S.id}-${I+1}`:"grove-trunks",G.name=p.length?`grove-fronds-${S.id}-${I+1}`:"grove-fronds";for(let q=0;q<N.length;q++){let B=N[q];b.position.set(B.x,B.y,B.z),b.rotation.set(B.leanX,B.a,B.leanZ),b.scale.set(B.size,B.h,B.size),b.updateMatrix(),U.setMatrixAt(q,b.matrix),b.position.set(B.x+.2*B.size*Math.cos(B.a),B.y+B.h,B.z-.2*B.size*Math.sin(B.a)),b.rotation.set(B.leanX*.35,B.a+ln(B.index,6)*Math.PI*.35,B.leanZ*.35),b.scale.setScalar(B.size),b.updateMatrix(),G.setMatrixAt(q,b.matrix),G.setColorAt(q,new je().setHSL(.245+ln(B.index,7)*.065,.22+ln(B.index,8)*.13,.59+ln(B.index,9)*.12))}for(let q of[U,G])q.userData.cullingRegion={island:S.id,sector:I+1},q.castShadow=!0,q.instanceMatrix.needsUpdate=!0,q.computeBoundingSphere(),n.add(q);U.userData.lod={high:h,low:u,distance:y,level:"high",shadowReceiverLod:c,center:U.boundingSphere.center.clone(),radius:U.boundingSphere.radius},G.userData.lod={high:g,low:x,distance:y,level:"high",center:G.boundingSphere.center.clone(),radius:G.boundingSphere.radius},U.receiveShadow=!0,G.receiveShadow=!1,m.push(U),p.push(G)})}let A=new sr(1,1),C=r.surface("rock","#a9aaa0",2,.08),L=[];for(let S of e){let E=[];for(let N=0;N<(s?14:24);N++){let I=N+S.x*.019+S.z*.023,U=N*2.399+.6+(ln(I,10)-.5)*.62,G=S.radius*(.84+ln(I,11)*.1),q=S.x+Math.sin(U)*G,B=S.z+Math.cos(U)*G;a(S,q,B)||E.push({x:q/t,y:i(q,B)-.1,z:B/t,a:U,j:N,seed:I})}if(!E.length)continue;let z=new Dt(A,C,E.length);z.name=L.length?"shore-rocks-"+S.id:"shore-rocks";for(let N=0;N<E.length;N++){let I=E[N];b.position.set(I.x,I.y,I.z),b.rotation.set(ln(I.seed,12)*1.2,I.a,ln(I.seed,13)*1.1),b.scale.set(.27+ln(I.seed,14)*.5,.2+ln(I.seed,15)*.43,.31+ln(I.seed,16)*.53),b.updateMatrix(),z.setMatrixAt(N,b.matrix)}z.castShadow=z.receiveShadow=!0,z.instanceMatrix.needsUpdate=!0,z.computeBoundingSphere(),n.add(z),L.push(z)}let O=[...m,...p],T={};return{trees:m[0],foliage:p[0],treeBatches:m,foliageBatches:p,rocks:L[0],rockBatches:L,lodGeometries:[h,u,g,x],update(S,E=0){return Yx(T,O,S,E)}}}function Al(n,{scale:e,height:t,surfaces:i,helpers:r,village:s=da,paths:a,marketPoint:o={x:290,z:-30}}){let{cube:c,tube:l,ell:h}=r,u=[];function d(E){let z=new Map;E.updateMatrix();for(let N of[...E.children])if(N.isMesh){N.updateMatrix();let I=N.geometry.clone().applyMatrix4(N.matrix);z.has(N.material)||z.set(N.material,[]),z.get(N.material).push(I),E.remove(N)}for(let[N,I]of z){let U=gs(I,!1);I.forEach(q=>q.dispose());let G=new ct(U,N);G.castShadow=G.receiveShadow=!0,E.add(G)}}function f(E,z){let N=new Map,I=0;n.updateMatrixWorld(!0),z.updateMatrixWorld(!0);let U=new Lt().copy(z.matrixWorld).invert(),G=new Lt;for(let q of E)for(let B of[...q.children])if(B.isMesh){B.updateMatrixWorld(!0),G.multiplyMatrices(U,B.matrixWorld);let te=B.geometry.clone().applyMatrix4(G);N.has(B.material)||N.set(B.material,[]),N.get(B.material).push(te),I++,q.remove(B),B.geometry.dispose()}for(let[q,B]of N){let te=gs(B,!1);B.forEach(we=>we.dispose()),te.computeBoundingSphere();let ie=new ct(te,q);ie.castShadow=ie.receiveShadow=!0,z.add(ie)}return{sourceBatches:I,materialBatches:z.children.length}}function g(E,z=n,N=!0,I=0){let U=new Ue;U.name="village-house",z.add(U),U.position.set(N?E.x/e:E.x,N?t(E.x,E.z):0,N?E.z/e:E.z),U.rotation.y=E.facing??(E.z>60?Math.PI:0);let G=E.w/e,q=E.d/e,B=E.h,te=c(U,E.color,[0,B/2,0],[G,B,q]);te.material=i.surface("plaster",E.color,2,.035);let ie=i.surface("roof","#d5bbab",2,.065);for(let J of[-1,1]){let $=c(U,"#ba7655",[J*G/4,B+.43,0],[Math.hypot(G/2+.25,.85),.13,q+.5]);$.rotation.z=-J*Math.atan2(.85,G/2+.25),$.material=ie,c(U,"#a75f45",[J*(G/2+.13),B+.01,0],[.14,.22,q+.58])}let we=l(U,"#a75f45",[0,B+.86,0],[.12,q+.62,.12]);we.rotation.x=Math.PI/2;for(let J of[.17,B*.52,B-.16])c(U,"#e2dbc7",[0,J,q/2+.035],[G+.16,.14,.1]);let pe=B>5?2:1;for(let J=0;J<pe;J++)for(let $ of[-G*.31,G*.31]){let oe=1.5+J*2.35,Ae=q/2+.08,Ce=c(U,"#415d63",[$,oe,Ae],[.75,1.2,.05]);Ce.material.roughness=.24,Ce.material.metalness=.1,c(U,"#e2dbc7",[$,oe,Ae+.045],[.065,1.15,.075]),c(U,"#e2dbc7",[$,oe,Ae+.046],[.7,.065,.076]);for(let $e of[-1,1]){let _t=c(U,E.shutter,[$+$e*.56,oe,Ae+.03],[.34,1.3,.07]);_t.rotation.y=$e*.24;for(let D=0;D<9;D++)c(U,"#876742",[$+$e*.56,oe-.52+D*.13,Ae+.085],[.33,.024,.04])}if(c(U,"#e2dbc7",[$,oe-.68,Ae],[1.7,.1,.16]),c(U,"#e2dbc7",[$,oe+.68,Ae],[1.7,.13,.15]),J===0){let $e=c(U,"#876742",[$,.79,q/2+.25],[1.28,.2,.3]);if($e.rotation.x=-.04,h)for(let _t=-2;_t<=2;_t++){let D=h(U,_t%2?"#6f8f58":"#88a866",[$+_t*.22,.99+Math.abs(_t)*.025,q/2+.27],[.17,.31,.15]);D.rotation.z=_t*.14}if(pe===1){let _t=c(U,E.shutter,[$,2.32,q/2+.46],[1.55,.08,.82]);_t.rotation.x=-.15,c(U,E.shutter,[$,2.2,q/2+.83],[1.55,.17,.07])}}}c(U,"#5a4b3d",[0,1.05,q/2+.06],[.78,2.1,.1]);for(let J of[.55,1.42])for(let $ of[-.19,.19])c(U,"#745f4c",[$,J,q/2+.125],[.29,.6,.045]);for(let J of[-.48,.48])c(U,"#e2dbc7",[J,1.08,q/2+.11],[.16,2.22,.18]);c(U,"#e2dbc7",[0,2.18,q/2+.11],[1.1,.16,.18]),c(U,"#c9baa1",[0,.07,q/2+.34],[1.16,.14,.58]),h&&h(U,"#caa457",[.27,1.04,q/2+.19],[.055,.055,.035]);let Ve=(I%2?-1:1)*G*.42,mt=q/2+.55,Qe=l(U,"#e2dbc7",[Ve,2.91,q/2+.34],[.035,.7,.035]);Qe.rotation.x=Math.PI/2,c(U,E.shutter,[Ve,2.62,mt],[.09,.56,.64]);for(let J of[-1,1]){let $=c(U,"#e2dbc7",[Ve+J*.052,2.62,mt],[.018,.22,.24]);$.rotation.x=(I%3-1)*.22}if(pe===2){c(U,"#e2dbc7",[0,2.75,q/2+.48],[G+.15,.18,.9]);for(let J=0;J<=10;J++)l(U,"#e2dbc7",[-G/2+J*G/10,3.18,q/2+.84],[.034,.76,.034]);c(U,"#e2dbc7",[0,3.58,q/2+.84],[G+.17,.08,.1])}for(let J of[-1,1])for(let $=0;$<pe;$++)for(let oe of[-q*.26,q*.26])c(U,E.shutter,[J*(G/2+.03),1.5+$*2.35,oe],[.06,1.22,.8]),c(U,"#e2dbc7",[J*(G/2+.07),.82+$*2.35,oe],[.16,.1,1.05]),c(U,"#e2dbc7",[J*(G/2+.07),2.18+$*2.35,oe],[.16,.12,1.05]);return U.userData.facadeDetails={planters:2,awnings:pe===1?2:0,balcony:pe===2,windowPanes:pe*8,doorPanels:4,doorway:!0,ridgeCaps:1,eaveFascias:2,hangingSigns:1,signMarks:2,signClearance:!0},d(U),u.push(U),U}s.forEach((E,z)=>g(E,n,!0,z));let x=new Ue;x.name="village-buildings",n.add(x),x.userData.batchDetails={sourceHouses:u.length,...f(u,x)},x.userData.cameraBlocker=!0;let m=new Ue;m.name="village-overhead-laundry",n.add(m);let p=["#bd6f53","#e8d99e","#587e7c","#73868b"],b=[...s].sort((E,z)=>E.z-z.z),y=Math.ceil(b.length/2),v=0,A=0;for(let E of[b.slice(0,y),b.slice(y)]){let z=[...E].sort((N,I)=>N.x-I.x);for(let N=1;N<z.length;N++){let I=z[N-1],U=z[N],G=I.x+I.w/2,q=U.x-U.w/2;if(q<=G)continue;let B=(G+q)/2,te=(I.z+U.z)/2,ie=Math.max(t(B,te)+3.35,3.55),we=(q-G)/e,pe=l(m,"#5a4b3d",[B/e,ie,te/e],[.012,we,.012]);pe.rotation.z=Math.PI/2,v++;for(let Ve=0;Ve<3;Ve++){let mt=(G+(q-G)*(Ve+1)/4)/e,Qe=p[(v+Ve)%p.length],J=c(m,Qe,[mt,ie-.24-Ve%2*.05,te/e],[.46,.48+Ve%2*.1,.025]);J.rotation.z=(Ve-1)*.06,A++}}}m.userData.laundryDetails={lines:v,garments:A,clearance:!0},d(m);function C(E,z,N=!1){let I=[],U=[],G=[],q=0;for(let ie=0;ie<E.length;ie++){let we=E[Math.max(0,ie-1)],pe=E[Math.min(E.length-1,ie+1)],Ve=E[ie],mt=pe.x-we.x,Qe=pe.z-we.z,J=Math.hypot(mt,Qe)||1;ie&&(q+=Math.hypot(Ve.x-E[ie-1].x,Ve.z-E[ie-1].z)/e);for(let $ of[-1,1]){let oe=Ve.x-Qe/J*z/2*$,Ae=Ve.z+mt/J*z/2*$;I.push(oe/e,t(oe,Ae)+.018,Ae/e),U.push(($+1)/2*z/e,q)}if(ie){let $=ie*2;G.push($-2,$-1,$,$-1,$+1,$)}}let B=new Ft;B.setAttribute("position",new tt(I,3)),B.setAttribute("uv",new tt(U,2)),B.setIndex(G),B.computeVertexNormals();let te=new ct(B,i.surface("paving","#ded9c9",.75,.045));if(te.name="village-path",te.receiveShadow=!0,n.add(te),N){let ie=Math.max(4,z*.08),we=new hn(1,1,1),pe=new Dt(we,i.surface("rock","#dad4c6",1.2,.025),(E.length-1)*2),Ve=new Pt;pe.name="village-curb";let mt=0;for(let Qe=1;Qe<E.length;Qe++){let J=E[Qe-1],$=E[Qe],oe=$.x-J.x,Ae=$.z-J.z,Ce=Math.hypot(oe,Ae),$e=-Ae/Ce,_t=oe/Ce;for(let D of[-1,1]){let wt=(J.x+$.x)/2+$e*(z/2+ie/2)*D,qe=(J.z+$.z)/2+_t*(z/2+ie/2)*D;Ve.position.set(wt/e,t(wt,qe)+.065,qe/e),Ve.rotation.set(0,Math.atan2(oe,Ae),0),Ve.scale.set(ie/e,.1,Ce/e+.025),Ve.updateMatrix(),pe.setMatrixAt(mt++,Ve.matrix)}}pe.castShadow=pe.receiveShadow=!0,pe.instanceMatrix.needsUpdate=!0,pe.computeBoundingSphere(),n.add(pe)}}let L=[];for(let E of a||[{points:Array.from({length:31},(z,N)=>({x:385-N*21,z:36+Math.sin(N*.19)*9})),width:55,curb:!0},{points:Array.from({length:15},(z,N)=>({x:23,z:-280+N*39})),width:40,curb:!0}]){let z=[E.points[0]];for(let N=1;N<E.points.length;N++){let I=E.points[N-1],U=E.points[N],G=Math.ceil(Math.hypot(U.x-I.x,U.z-I.z)/30);for(let q=1;q<=G;q++)z.push({x:I.x+(U.x-I.x)*q/G,z:I.z+(U.z-I.z)*q/G})}if(C(z,E.width,E.curb),E.curb)for(let N=3;N<E.points.length-3;N+=6){let I=E.points[N-1],U=E.points[N+1],G=E.points[N],q=U.x-I.x,B=U.z-I.z,te=Math.hypot(q,B)||1,ie=Math.floor(N/6)%2?1:-1,we=E.width/2+9,pe=G.x-B/te*we*ie,Ve=G.z+q/te*we*ie;L.push({x:pe/e,y:t(pe,Ve),z:Ve/e})}}if(L.length){let E=new Gt(1,1,1,10),z=new Tn(1,12,8),N=new Pt,I=new Dt(E,new Bt({color:"#394447",roughness:.62,metalness:.38}),L.length),U=new Dt(z,new Bt({color:"#ffe4a8",emissive:"#ffb85c",emissiveIntensity:.72,roughness:.34}),L.length);I.name="village-lamp-posts",U.name="village-lamp-globes";for(let G=0;G<L.length;G++){let q=L[G];N.position.set(q.x,q.y+1.35,q.z),N.scale.set(.065,2.7,.065),N.updateMatrix(),I.setMatrixAt(G,N.matrix),N.position.set(q.x,q.y+2.76,q.z),N.scale.set(.18,.22,.18),N.updateMatrix(),U.setMatrixAt(G,N.matrix)}I.castShadow=I.receiveShadow=!0,U.castShadow=!1,U.receiveShadow=!0;for(let G of[I,U])G.instanceMatrix.needsUpdate=!0,G.computeBoundingSphere(),n.add(G)}let O=new Ue;O.name="harbor-market",O.position.set(o.x/e,t(o.x,o.z),o.z/e),n.add(O);for(let E of[-1.4,1.4])for(let z of[-.6,.6])l(O,"#876742",[E,1.2,z],[.045,2.4,.045]);let T=c(O,"#cc8660",[0,2.35,0],[3.2,.07,1.8]);T.rotation.x=.07;for(let E=0;E<6;E++){let z=E%2?"#f3dfbe":"#bd6f53",N=(E-2.5)*.53,I=c(O,z,[N,2.395,0],[.53,.035,1.76]);I.rotation.x=.07,c(O,z,[N,2.27,.92],[.49,.18,.055])}c(O,"#a98961",[0,.7,0],[2.8,.15,.9]);let S=["#ce5949","#e6b64d","#709a55"];for(let E=0;E<5;E++){let z=(E-2)*.5;if(c(O,"#a68854",[z,.88,0],[.43,.2,.68]),h)for(let N=0;N<3;N++)h(O,S[(E+N)%S.length],[z+(N-1)*.11,1.05,N%2?-.11:.11],[.075,.085,.075])}return O.userData.marketDetails={canopyStripes:6,valances:6,produce:15},d(O),{building:g,houses:u,buildings:x}}var st=20;var dn=Qn.map((n,e)=>({...n,x:n.x*16,z:n.z*16,dock:{x:n.dock.x*16,z:n.dock.z*16},radius:n.id==="home"?9e3:n.radius*16,coastSeed:1.3+e*1.7,relief:n.id==="home"?24:n.biome==="highlands"?85:n.biome==="rainforest"?42:n.biome==="rocky"?28:12})),sh=Object.fromEntries(dn.map(n=>[n.id,n])),ys={minX:Math.min(...dn.map(n=>n.x-n.radius))-1600,maxX:Math.max(...dn.map(n=>n.x+n.radius))+1600,minZ:Math.min(...dn.map(n=>n.z-n.radius))-1600,maxZ:Math.max(...dn.map(n=>n.z+n.radius))+1600},gd=(n,e)=>dn.find(t=>Math.hypot(n-t.x,e-t.z)<t.radius)||null,Mt=Object.fromEntries(dn.map((n,e)=>{let t=Qn[e],i=Math.hypot(t.dock.x-t.x,t.dock.z-t.z),r=(t.dock.x-t.x)/i,s=(t.dock.z-t.z)/i,a=n.radius*ms(n,Math.atan2(s,r)),o=h=>({x:n.x+r*h,z:n.z+s*h}),c=o(a-320),l=o(a+240);return[n.id,{id:n.id,...o(a+320),ux:r,uz:s,land:c,end:l,shore:o(a+200),length:Math.hypot(l.x-c.x,l.z-c.z),width:38,deck:.72}]})),_s={x:Mt.home.land.x-385,z:Mt.home.land.z-40},Mr=da.map(n=>({...n,x:n.x+_s.x,z:n.z+_s.z,facing:n.z>60?Math.PI:0})),xs=(n,e)=>({x:n+_s.x,z:e+_s.z}),fa=[{width:55,curb:!0,points:Array.from({length:31},(n,e)=>e===0?{...Mt.home.land}:xs(385-e*21,36+Math.sin(e*.19)*9))},{width:40,curb:!0,points:Array.from({length:15},(n,e)=>xs(23,-280+e*39))},{width:36,points:[xs(-245,40),xs(-600,30),{x:sh.home.radius*.35,z:400},{x:800,z:-700},{x:-1800,z:-2400}]}],xd=xs(290,-30),Zt={x:Mt.fortress.land.x-Mt.fortress.ux*800,z:Mt.fortress.land.z-Mt.fortress.uz*800},_d={x:Zt.x-115,z:Zt.z+145},rt={pump:xs(330,65),cave:{x:Mt.jungle.land.x-Mt.jungle.ux*700,z:Mt.jungle.land.z-Mt.jungle.uz*700},estate:{x:Zt.x,z:Zt.z+102},paper:{x:0,z:-40},caveExit:{x:0,z:150},estateExit:{x:0,z:130},stairs:{x:70,z:-95},cellarExit:{x:0,z:150},key:{x:0,z:-60}};rt.supply={x:rt.cave.x+150,z:rt.cave.z-105};var Zx=[{id:"gate",area:null,..._d,hp:2},{id:"patrol",area:null,x:Zt.x+110,z:Zt.z+85,hp:2},{id:"hall",area:"estate",x:-65,z:15,hp:2},{id:"boss",area:"estate",x:0,z:-60,hp:3}];function rh(n,e,t){return t=Math.max(0,Math.min(1,t)),t=t*t*(3-2*t),n+(e-n)*t}function Hi(n,e,t=gd(n,e)){if(!t)return-.32;let i=yr(t,n,e);if(i<=.01)return i;if(t.id==="home"){let r=Math.hypot(n-_s.x+80,e-_s.z);r<820&&(i=rh(.68,i,(r-470)/350))}if(t.id==="fortress"){let r=Math.max(Math.abs(n-Zt.x),Math.abs(e-Zt.z));r<400&&(i=rh(.85,i,(r-180)/220))}if(t.id==="jungle"){let r=Math.hypot(n-rt.cave.x,e-rt.cave.z);r<230&&(i=rh(1.2,i,(r-100)/130))}return i}function ah(n,e,t,i){for(let r of i?[Mt[i]]:Object.values(Mt)){if(!r)continue;let s=e-r.land.x,a=t-r.land.z,o=s*r.ux+a*r.uz,c=s*r.uz-a*r.ux;if(o>=-.5&&o<=r.length+.5&&Math.abs(c)<=r.width/2){let l=Hi(r.land.x,r.land.z);return n.dock=r,n.height=l+(r.deck-l)*Math.max(0,Math.min(1,o/r.length)),n}}return null}var Jx={};function ci(n,e){return ah(Jx,n,e)?.height??Hi(n,e)}function Cl(n,e){return fa.some(t=>t.points.some((i,r)=>{if(!r)return!1;let s=t.points[r-1],a=i.x-s.x,o=i.z-s.z,c=Math.max(0,Math.min(1,((n-s.x)*a+(e-s.z)*o)/(a*a+o*o)));return Math.hypot(n-s.x-a*c,e-s.z-o*c)<t.width/2+35}))}var QM=Object.fromEntries(Qn.map(n=>{let e=Math.hypot(n.dock.x-n.x,n.dock.z-n.z),t=(n.dock.x-n.x)/e,i=(n.dock.z-n.z)/e;return[n.id,{x:n.x+t*n.radius*1.06,z:n.z+i*n.radius*1.06,shore:{x:n.x+t*n.radius*.84,z:n.z+i*n.radius*.84}}]}));var vs={seatZ:-.28,seatTop:.72,hips:.84,eye:1.65};function $x(n){let e=0;return n.traverse(t=>{t!==n&&(t.updateMatrix(),t.matrixAutoUpdate=!1,e++)}),n.userData.staticPartCount=e,e}function yd(n,e,t,i,r,s,a=0,o=!1){let c=n.userData.motorboatFrameState||(n.userData.motorboatFrameState={}),l=s?Math.sin(a*2)*.015:0,h=!c.ready||c.x!==t||c.z!==i||c.heading!==r||c.roll!==l||c.moving!==s;return n.matrixAutoUpdate=!!s,h&&(n.position.set(t,.02,i),n.rotation.set(0,r,l),s||n.updateMatrix(),c.ready=!0,c.x=t,c.z=i,c.heading=r,c.roll=l,c.moving=!!s),e.visible=!!s&&!!o,h}function vd(n,{cube:e,ell:t,mat:i}){let r=new Ue;r.name="campaign-boat",n.add(r),t(r,"#233f52",[0,.05,0],[.85,.36,1.9]),t(r,"#dedbd0",[0,.22,0],[.8,.23,1.85]);let s=e(r,"#6e5942",[0,.4,-.15],[1.3,.08,2.7]);s.name="boat-deck";let a=e(r,"#3b5355",[0,.57,vs.seatZ],[.92,.3,.48]);a.name="boat-seat",e(r,"#e7e0d0",[0,.73,.5],[1,.65,.36]);let o=new ct(new hn(1.2,.48,.025),new Qs({color:"#b9e4eb",transparent:!0,opacity:.4,roughness:.1}));o.position.set(0,1.15,.68),r.add(o);let c=new ct(new Si(.2,.026,8,20),i("#2e3538"));c.name="boat-wheel",c.position.set(0,1.05,.28),r.add(c);let l=new Gt(1,1,1,8),h=new Dt(l,i("#d6dedc"),10),u=new Pt;h.name="boat-rails";let d=0;for(let b of[-.68,.68]){for(let y of[.15,.85,1.55])u.position.set(b,.75,y),u.rotation.set(0,0,0),u.scale.set(.025,.5,.025),u.updateMatrix(),h.setMatrixAt(d++,u.matrix);for(let y of[.86,1.01])u.position.set(b,y,.85),u.rotation.set(Math.PI/2,0,0),u.scale.set(.025,1.4,.025),u.updateMatrix(),h.setMatrixAt(d++,u.matrix)}h.castShadow=!0,h.instanceMatrix.needsUpdate=!0,h.computeBoundingSphere(),r.add(h);let f=new Bt({color:"#b7d6d8",emissive:"#31545a",emissiveIntensity:.38,roughness:.28}),g=new Dt(new Gt(.1,.1,.03,16),f,3);g.name="boat-gauges";for(let b=0;b<3;b++)u.position.set((b-1)*.28,.91,.3),u.rotation.set(Math.PI/2,0,0),u.scale.set(b===1?1:.82,b===1?1:.82,1),u.updateMatrix(),g.setMatrixAt(b,u.matrix);g.instanceMatrix.needsUpdate=!0,g.computeBoundingSphere(),r.add(g);let x=t(r,"#d84e46",[-.65,.79,.94],[.075,.075,.075]),m=t(r,"#52b878",[.65,.79,.94],[.075,.075,.075]);x.name="boat-port-light",m.name="boat-starboard-light",x.material=new Bt({color:"#d84e46",emissive:"#b32b25",emissiveIntensity:.9}),m.material=new Bt({color:"#52b878",emissive:"#238547",emissiveIntensity:.9}),e(r,"#303b40",[0,.35,-1.75],[.42,.6,.38]),e(r,"#303b40",[0,-.12,-1.85],[.22,.65,.25]);let p=new ct(new Rn(1.5,5),new Sn({color:"#d0ebe6",transparent:!0,opacity:.25,depthWrite:!1}));return p.rotation.x=-Math.PI/2,p.position.set(0,.03,-3.3),r.add(p),r.userData.boatDetails={rails:10,gauges:3,navigationLights:2},$x(r),{boat:r,wake:p}}function Md(n,e){if(n.root.parent===e)return!1;e.add(n.root),n.root.position.set(0,0,vs.seatZ),n.root.rotation.set(0,0,0),n.rig.rotation.set(0,0,0),n.hips.position.y=vs.hips;for(let t of n.arms)t.arm.rotation.x=-.85,t.arm.rotation.z=-t.side*.18,t.forearm.rotation.x=-.72;for(let t of n.legs)t.thigh.rotation.x=-1.68,t.calf.rotation.x=1.68,t.shoe.rotation.x=0;return!0}var bd=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z);var Sd=Object.values(Mt),Pn=Array.from({length:5},(n,e)=>({id:e,x:(e-2)*38,z:-80,child:e>2})),Kx=Pn.map(n=>"cell-"+n.id),jx=Object.fromEntries(Sd.map(n=>[n.id,"dock-"+n.id]));function Qx(n){let e=null,t=15625;for(let i of Sd){let r=i.x-n.p.x,s=i.z-n.p.z,a=r*r+s*s;a<t&&(e=i,t=a)}return e}function En(n,e,t,i,r){let s=n[e]||(n[e]={});return Object.assign(s,i),s.id=t,s.label=r,e+1}function wd(n,e){let t=0;if(e.interior==="cave")return t=En(n,t,"paper",rt.paper,e.paper?e.gun?"supplies":"take-gun":"move-paper"),t=En(n,t,"cave-exit",rt.caveExit,"leave-cave"),n.length=t,n;if(e.interior==="estate")return t=En(n,t,"key",rt.key,"take-key"),t=En(n,t,"stairs",rt.stairs,"cellar"),t=En(n,t,"estate-exit",rt.estateExit,"leave-estate"),n.length=t,n;if(e.interior==="cellar"){for(let r of Pn)e.released.includes(r.id)||(t=En(n,t,Kx[r.id],r,"free-person"));return t=En(n,t,"cellar-exit",rt.cellarExit,"upstairs"),n.length=t,n}if(e.boat){let r=Qx(e);return r&&(t=En(n,t,jx[r.id],r,"dock")),n.length=t,n}let i=Mt[e.island];if(t=En(n,t,"boat",i.shore,e.released.length===5&&!e.boarded?"board-group":"boat"),e.island==="home"&&(t=En(n,t,"pump",rt.pump,"refuel")),e.island==="jungle"&&(t=En(n,t,"cave",rt.cave,"enter-cave"),t=En(n,t,"supply",rt.supply,"supplies")),e.island==="fortress"&&(t=En(n,t,"estate",rt.estate,"enter-estate")),["highlands","smugglers","paradise"].includes(e.island)){let r=sh[e.island];t=En(n,t,"supplies",r,"supplies")}return n.length=t,n}function Td(n,e){let t=null,i=1/0;for(let r of n){let s=r.id.startsWith("cell-")?85:r.id.startsWith("dock-")?125:65,a=r.x-e.x,o=r.z-e.z,c=a*a+o*o;c<s*s&&c<i&&(t=r,i=c)}return t}function e_(n,e){if(e.complete)return n.key="complete",n.target=null,n;if(!e.docked)return n.key="dock-goal",n.target=Mt.home,n;if(!e.tanked)return n.key="fuel-goal",n.target=e.boat?Mt.home:rt.pump,n;if(!e.gun)return e.interior==="cave"?(n.key=e.paper?"gun-goal":"paper-goal",n.target=rt.paper,n):(n.key="cave-goal",n.target=e.boat?Mt.jungle:e.island==="jungle"?rt.cave:Mt[e.island].shore,n);if(e.interior==="cave")return n.key="exit-cave-goal",n.target=rt.caveExit,n;if(!e.key){if(e.interior==="estate"){let t=e.guards.find(i=>i.id==="boss");return n.key=t.hp>0?"boss-goal":"key-goal",n.target=t.hp>0?t:rt.key,n}return n.key="estate-goal",n.target=e.boat?Mt.fortress:e.island==="fortress"?rt.estate:Mt[e.island].shore,n}return e.released.length<5?(n.key=e.interior==="cellar"?"people-goal":"cellar-goal",n.target=e.interior==="cellar"?Pn.find(t=>!e.released.includes(t.id)):e.interior==="estate"?rt.stairs:e.boat?Mt.fortress:rt.estate,n):e.interior?(n.key="escort-goal",n.target=e.interior==="cellar"?rt.cellarExit:rt.estateExit,n):e.boarded?(n.key="home-goal",n.target=e.boat?Mt.home:e.island==="home"?Mt.home.shore:Mt[e.island].shore,n):(n.key="boat-goal",n.target=Mt.fortress.shore,n)}var t_={};function oh(n,e){if(e_(n,e),e.boat||e.interior||!n.target)return n;let t=Mt[e.island],i=!!ah(t_,e.p.x,e.p.z,e.island);return n.target===t.shore?!i&&bd(e.p,t.land)>65&&(n.target=t.land):i&&bd(e.p,t.land)>45&&(n.target=t.land),n}function Rl(n){return oh({},n)}function lh(n,e,t,i,r){let s=e.interior?1.8:e.boat?.65:1.3;if(n.fillStyle=e.interior?"#25312d":"#176475",n.fillRect(0,0,t,i),n.save(),n.translate(t/2-e.p.x*s,i/2-e.p.z*s),n.scale(s,s),e.interior){if(n.fillStyle="#6f7568",n.fillRect(-115,-125,230,310),n.strokeStyle="#beb99e",n.lineWidth=8,n.strokeRect(-115,-125,230,310),e.interior==="cave"&&(n.fillStyle="#967756",n.fillRect(-25,-60,50,35),n.fillStyle=e.paper?"#30383a":"#e4d6b8",e.gun||n.fillRect(-17,-55,34,22)),e.interior==="estate"&&(n.fillStyle="#9b7751",n.fillRect(-45,-105,90,25),n.fillStyle="#f0c561",!e.key&&e.guards.find(l=>l.id==="boss").hp===0&&n.fillRect(-5,-65,10,12)),e.interior==="cellar")for(let l of Pn)n.strokeStyle="#bac6bf",e.released.includes(l.id)||n.strokeRect(l.x-18,-112,36,80)}else{for(let l of dn){o(l,1,"#398b8b",-4*st),o(l,1,"#d9cba2"),o(l,1,l.biome==="highlands"?"#8f9882":"#759575",18*st);for(let u=0;u<26;u++){let d=u*2.39996+l.x*.001,f=l.radius*(.36+u%7*.075),g=l.x+Math.sin(d)*f,x=l.z+Math.cos(d)*f;if(!(l.id==="home"&&(vr({x:g,z:x},l.id,Mr)||Cl(g,x)))&&!(l.id==="fortress"&&Math.abs(g-Zt.x)<125&&Math.abs(x-Zt.z)<155)){n.strokeStyle="#365e49",n.lineWidth=5;for(let m=0;m<7;m++){let p=m*Math.PI*2/7;n.beginPath(),n.moveTo(g,x),n.quadraticCurveTo(g+Math.sin(p+.25)*13,x+Math.cos(p+.25)*13,g+Math.sin(p)*25,x+Math.cos(p)*25),n.stroke()}}}n.fillStyle="#fff4cc",n.font="18px system-ui",n.textAlign="center",n.fillText(r(l.id),l.x,l.z-l.radius*.58);let h=Mt[l.id];n.strokeStyle="#a2865b",n.lineWidth=h.width,n.beginPath(),n.moveTo(h.land.x,h.land.z),n.lineTo(h.end.x,h.end.z),n.stroke()}for(let l of fa)n.strokeStyle="#b7baa5",n.lineWidth=l.width,n.beginPath(),l.points.forEach((h,u)=>u?n.lineTo(h.x,h.z):n.moveTo(h.x,h.z)),n.stroke();for(let l of Mr)n.fillStyle="#304f43",n.fillRect(l.x-l.w/2+7,l.z-l.d/2+9,l.w,l.d),n.fillStyle=l.color,n.fillRect(l.x-l.w/2,l.z-l.d/2,l.w,l.d),n.fillStyle="#ab7861",n.fillRect(l.x-l.w/2-3,l.z-l.d/2+4,l.w+6,l.d-8),n.strokeStyle="#d4aa83",n.lineWidth=4,n.beginPath(),n.moveTo(l.x-l.w/2,l.z),n.lineTo(l.x+l.w/2,l.z),n.stroke();n.fillStyle="#e0d5b9",n.fillRect(Zt.x-80,Zt.z-80,160,160),n.fillStyle="#352e25",n.fillRect(Zt.x-20,Zt.z+76,40,12),n.fillStyle="#404b40",n.fillRect(rt.cave.x-36,rt.cave.z-30,72,36),n.fillStyle="#d28757",n.fillRect(rt.pump.x-15,rt.pump.z-16,30,32)}for(let l of e.guards)l.area===e.interior&&l.hp>0&&!e.boat&&(l.area||e.island==="fortress")&&c(l,"#d28b76",12);if(e.interior==="cellar")for(let l of Pn)e.released.includes(l.id)||c(l,"#d3dcbe",10);let a=Rl(e).target;a&&(n.strokeStyle="#f5d281",n.lineWidth=3,n.beginPath(),n.arc(a.x,a.z,20+Math.sin(e.elapsed*3)*3,0,Math.PI*2),n.stroke()),n.save(),n.translate(e.p.x,e.p.z),n.rotate(-e.heading),e.boat?(n.fillStyle="#efe4c9",n.beginPath(),n.moveTo(-18,-32),n.lineTo(18,-32),n.lineTo(22,28),n.lineTo(0,50),n.lineTo(-22,28),n.closePath(),n.fill()):(n.fillStyle="#b6ddd3",n.beginPath(),n.arc(0,0,9,0,Math.PI*2),n.fill()),n.strokeStyle="#fff6c7",n.lineWidth=3,n.beginPath(),n.moveTo(0,6),n.lineTo(0,28),n.stroke(),n.restore(),e.shot&&(n.strokeStyle="#ffeac5",n.lineWidth=2,n.beginPath(),n.moveTo(e.shot.from.x,e.shot.from.z),n.lineTo(e.shot.to.x,e.shot.to.z),n.stroke()),n.restore();function o(l,h,u,d=0){n.fillStyle=u,n.beginPath();for(let f=0;f<=96;f++){let g=f/96*Math.PI*2,x=l.radius*ms(l,g)*h-d,m=l.x+Math.cos(g)*x,p=l.z+Math.sin(g)*x;f?n.lineTo(m,p):n.moveTo(m,p)}n.closePath(),n.fill()}function c(l,h,u){n.fillStyle=h,n.beginPath(),n.arc(l.x,l.z,u,0,Math.PI*2),n.fill()}}function n_(n,e){return e.parent===n?!1:(n.add(e),!0)}function i_(n,e,t,i,r,s,a,o){if(n.ready&&n.area===e)return!1;n.ready=!0,n.area=e,t.visible=!e,i.visible=!!e;for(let[c,l]of r)l.visible=c===e;return s.background.set(e?"#202c29":"#b9dbe5"),s.fog.color.copy(s.background),a.intensity=e?.65:2,o.intensity=e?.15:2.8,!0}function r_(n,e,t,i,r,s){return n?!1:(i.material.uniforms.uTime.value=e,s.update(t.position,.5),r.update(e,t.position),i.position.copy(t.position),!0)}function s_(n,e,t,i,r,s=800,a=200){if(n.ready&&n.area===e){let l=n.x-t.x,h=n.z-t.z;if(l*l+h*h<a*a)return!1}n.ready=!0,n.area=e,n.x=t.x,n.z=t.z;let o=!1,c=0;for(let l=0;l<r.length;l++){let h=i[l],u=t.x-h.x,d=t.z-h.z,f=!e&&u*u+d*d<=(h.radius+s)**2;r[l].receiveShadow!==f&&(r[l].receiveShadow=f,o=!0),f&&c++}return n.active=c,o}function a_(n,e,t,i){let r=n.values||(n.values=[]),s=!n.ready||r.length!==e.length;for(let a=0;a<e.length;a++)r[a]!==e[a]&&(s=!0);if(!s)return!1;n.ready=!0,r.length=e.length,t.fill(0);for(let a=0;a<e.length;a++){let o=e[a];r[a]=o,t[o]=1}for(let a=0;a<i.length;a++)i[a].visible=!t[a];return!0}function o_(n,e,t){let i=e.released||[],r=n.released||(n.released=[]),s=!n.ready||n.x!==e.p.x||n.z!==e.p.z||n.area!==(e.interior||"")||n.island!==e.island||n.boat!==!!e.boat||n.paper!==!!e.paper||n.gun!==!!e.gun||n.boarded!==!!e.boarded||r.length!==i.length;for(let a=0;a<i.length;a++)r[a]!==i[a]&&(s=!0);if(!s)return!1;n.ready=!0,n.x=e.p.x,n.z=e.p.z,n.area=e.interior||"",n.island=e.island,n.boat=!!e.boat,n.paper=!!e.paper,n.gun=!!e.gun,n.boarded=!!e.boarded,r.length=i.length;for(let a=0;a<i.length;a++)r[a]=i[a];return n.nearby=Td(wd(t,e),e.p),!0}function l_(n,e,t,i=!!e.guards?.find(r=>r.id==="boss"&&r.hp>0)){let r=e.released||[],s=n.released||(n.released=[]),a=!n.ready||n.x!==e.p.x||n.z!==e.p.z||n.area!==(e.interior||"")||n.island!==e.island||n.boat!==!!e.boat||n.complete!==!!e.complete||n.docked!==!!e.docked||n.tanked!==!!e.tanked||n.paper!==!!e.paper||n.gun!==!!e.gun||n.key!==!!e.key||n.boarded!==!!e.boarded||n.bossAlive!==i||s.length!==r.length;for(let o=0;o<r.length;o++)s[o]!==r[o]&&(a=!0);if(!a)return!1;n.ready=!0,n.x=e.p.x,n.z=e.p.z,n.area=e.interior||"",n.island=e.island,n.boat=!!e.boat,n.complete=!!e.complete,n.docked=!!e.docked,n.tanked=!!e.tanked,n.paper=!!e.paper,n.gun=!!e.gun,n.key=!!e.key,n.boarded=!!e.boarded,n.bossAlive=i,s.length=r.length;for(let o=0;o<r.length;o++)s[o]=r[o];return oh(t,e),!0}function c_(n,e,t,i,r,s,a,o){return n.ready&&n.area===e?(o.yaw=r,o.pitch=s,!1):(n.ready=!0,n.area=e,o.yaw=e?0:i?Math.atan2(t.x-i.x,t.z-i.z):r,o.pitch=a,!0)}function h_(n,e,t,i){return n.ready&&n.x===t.x&&n.y===t.y&&n.z===t.z&&n.tx===i.x&&n.ty===i.y&&n.tz===i.z?!1:(n.ready=!0,n.x=t.x,n.y=t.y,n.z=t.z,n.tx=i.x,n.ty=i.y,n.tz=i.z,e.position.copy(t),e.lookAt(i),!0)}function u_(n,e,t=!1){let i=e.interior||"",r=!!e.boat,s=Math.round(e.p.x/20),a=Math.round(e.p.z/20),o=Math.round(e.heading*12),c=!!e.boarded,l=e.guards||[],h=e.released||[],u=!n.ready||n.area!==i||n.island!==e.island||n.boat!==r||n.x!==s||n.z!==a||n.heading!==o||n.boarded!==c||n.animated!==t||n.guardCount!==l.length||n.releasedCount!==h.length,d=n.guards||(n.guards=[]),f=n.released||(n.released=[]);for(let g=0;g<l.length;g++){let x=l[g].hp>0;d[g]!==x&&(u=!0),d[g]=x}for(let g=0;g<h.length;g++)f[g]!==h[g]&&(u=!0),f[g]=h[g];return d.length=l.length,f.length=h.length,n.ready=!0,n.area=i,n.island=e.island,n.boat=r,n.x=s,n.z=a,n.heading=o,n.boarded=c,n.animated=t,n.guardCount=l.length,n.releasedCount=h.length,u}function d_(n,e=!1,t=!0){return!n.paused&&!!(e||n.walking&&(n.boat||t))}function f_(n=!1){return 1e3/(n?20:30)}function p_(n,e,t,i){let r=Math.sin(i),s=Math.cos(i);for(let a=0;a<e.length;a++){let o=e[a],c=n[a],l=35+o.id*15,h=o.id%2?16:-16;c.x=t.x-r*l+s*h,c.z=t.z-s*l-r*h}return n}function m_(n,e,t,i,r=st){return n.setXYZ(0,e.x/r,i,e.z/r),n.setXYZ(1,t.x/r,i,t.z/r),n.needsUpdate=!0,n}function g_(n,e,t){let i=e*7;return n.swing=Math.sin(i),n.step=t?.24:0,n.bounce=t?Math.cos(i*2):0,n}function x_(n,e,t,i,r,s=!1,a="standing"){let o=s||r||!n.ready||n.x!==e.x||n.z!==e.z||n.height!==t||n.heading!==i||n.walking!==r||n.pose!==a;return n.ready=!0,n.x=e.x,n.z=e.z,n.height=t,n.heading=i,n.walking=r,n.pose=a,o}function __(n,e,t=!0){let i=!!(t&&n.ready&&(n.x!==e.x||n.z!==e.z));return n.ready=!0,n.x=e.x,n.z=e.z,i}function y_(n,e,t=!0){return(t||!n.headingReady)&&(n.headingReady=!0,n.heading=e),n.heading}function pa(n,e,t,i,r){let s=n.get(e);return s&&s.x===t&&s.z===i||(s||(s={x:0,z:0,height:0},n.set(e,s)),s.x=t,s.z=i,s.height=r(t,i),n.misses=(n.misses||0)+1),s.height}function v_(n,e,t,i,r=!0){if(!r||!n.ready)return n.ready=!0,n.last=e,n.slow=0,n.fast=0,t;let s=e-n.last;return n.last=e,s<=0||s>250?t:(s>34?(n.slow+=s,n.fast=0):s<20?(n.fast+=s,n.slow=Math.max(0,n.slow-s)):(n.slow=Math.max(0,n.slow-s*.5),n.fast=Math.max(0,n.fast-s)),n.slow>=2500&&t>.8?(n.slow=0,n.fast=0,Math.max(.8,Math.round((t-.15)*100)/100)):n.fast>=5e3&&t<i?(n.slow=0,n.fast=0,Math.min(i,Math.round((t+.1)*100)/100)):t)}function M_(n,e,t=0){let i=Math.min(n,e),r=Math.max(n,e);return n<=700||t>0&&(i<=700||r<=1200)}function Ed({canvas:n,getState:e,makeHuman:t,onLost:i,rendererFactory:r=s=>new ds(s)}){let s=r(_l(n)),a=M_(innerWidth,innerHeight,globalThis.navigator?.maxTouchPoints||0),o=Math.min(devicePixelRatio||1,a?1.1:1.5),c=f_(a);s.setPixelRatio(o),s.setSize(innerWidth,innerHeight,!1),s.outputColorSpace=Yt,s.toneMapping=rs,s.shadowMap.enabled=!0,s.shadowMap.type=is,s.shadowMap.autoUpdate=!1;let l=new ir,h=new tn(68,innerWidth/innerHeight,.04,6e3);l.add(h),l.background=new je("#b9dbe5"),l.fog=new nr("#b9dbe5",650,2400);let u=new lr("#d5ecfa","#566143",2),d=new hr("#fff2d6",2.8);d.castShadow=!0,d.shadow.mapSize.set(a?1024:2048,a?1024:2048),Object.assign(d.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:.1,far:100}),d.shadow.normalBias=.025,l.add(u,d,d.target);let f=yl(s,a?4:8),g=new Map,x=new Map,m=F=>(g.has(F)||g.set(F,f.forColor(F)||new Bt({color:F,roughness:.85})),g.get(F)),p=(F,_)=>(x.has(F)||x.set(F,_()),x.get(F)),b=(F,_,R,H=[0,0,0],Z=[1,1,1])=>{let ae=new ct(_,R);return ae.position.set(...H),ae.scale.set(...Z),ae.castShadow=ae.receiveShadow=!0,F.add(ae),ae},y=(F,_,R,H)=>b(F,p("box",()=>new hn),m(_),R,H),v=(F,_,R,H)=>b(F,p("cylinder",()=>new Gt(1,1,1,12)),m(_),R,H),A=(F,_,R,H)=>b(F,p("sphere",()=>new Tn(1,16,12)),m(_),R,H),C={mat:m,geo:p,mesh:b,cube:y,tube:v,ell:A},L=new Ue,O=new Ue,T=F=>{let _=new Map;F.updateMatrix();for(let R of[...F.children])if(R.isMesh){R.updateMatrix();let H=R.geometry.clone().applyMatrix4(R.matrix);_.has(R.material)||_.set(R.material,[]),_.get(R.material).push(H),F.remove(R)}for(let[R,H]of _){let Z=gs(H,!1);H.forEach(fe=>fe.dispose());let ae=new ct(Z,R);ae.castShadow=ae.receiveShadow=!0,F.add(ae)}},S=(F,_)=>{let R=new Set(F.legs.map(de=>de.shoe)),H=0,Z=0,ae=0;F.root.traverse(de=>{de.isMesh&&H++});let fe=de=>{for(let Ne of[...de.children])Ne.isMesh||fe(Ne);let Ke=new Map;for(let Ne of[...de.children])Ne.isMesh&&!R.has(Ne)&&!Ne.isInstancedMesh&&(Ke.has(Ne.material)||Ke.set(Ne.material,[]),Ke.get(Ne.material).push(Ne));for(let[Ne,et]of Ke)if(et.length>1){let pt=et.map(ze=>(ze.updateMatrix(),ze.geometry.clone().applyMatrix4(ze.matrix))),dt=gs(pt,!1);pt.forEach(ze=>ze.dispose());let We=new ct(dt,Ne);We.name=`${_}-rigid-batch-${ae++}`,We.castShadow=et.some(ze=>ze.castShadow),We.receiveShadow=et.some(ze=>ze.receiveShadow),et.forEach(ze=>de.remove(ze)),de.add(We)}};fe(F.root),F.root.traverse(de=>{de.isMesh&&Z++}),F.root.userData.rigidBatchProfile={sourceMeshes:H,renderMeshes:Z,batches:ae,animatedShoes:R.size}},E=(F,_,R)=>{let H=new Ue;H.name="campaign-supply-cache-"+F,H.position.set(_/st,ci(_,R),R/st),L.add(H),y(H,"#a98961",[0,.34,0],[1.45,.68,.88]),y(H,"#debb63",[0,.72,0],[1.52,.09,.94]);for(let Z of[-.54,.54])y(H,"#debb63",[Z,.35,.46],[.1,.62,.06]);y(H,"#bd6e4e",[-1.02,.42,.04],[.42,.84,.55]),y(H,"#394447",[-1.02,.87,.04],[.2,.08,.22]);for(let Z of[-1.15,-.89])y(H,"#394447",[Z,.75,.04],[.05,.24,.05]);return y(H,"#394447",[-1.02,.84,.04],[.26,.05,.05]),y(H,"#596b4e",[.93,.23,.04],[.72,.46,.58]),y(H,"#394447",[.93,.48,.04],[.48,.05,.26]),y(H,"#e2dbc7",[.82,.86,-.03],[.7,.34,.5]),y(H,"#bd6e4e",[.82,.87,.235],[.34,.08,.025]),y(H,"#bd6e4e",[.82,.87,.235],[.08,.25,.025]),H.userData.supplyDetails={crate:!0,fuelCan:!0,medkit:!0,ammoBox:!0},T(H),H};l.add(L,O);let z=a?96:192,N=Math.max(...dn.map(F=>F.radius)),I=[];for(let F of dn){let _=Math.max(a?48:72,Math.round(z*F.radius/N/8)*8),R=nh(F,{segments:_});R.userData.terrainSegments=_,I.push(R),R.scale.set(1/st,1,1/st),R.position.set(F.x/st,0,F.z/st);let H=R.geometry.attributes.position;for(let St=0;St<H.count;St++)H.setY(St,Hi(F.x+H.getX(St),F.z+H.getZ(St),F));let Z=new Float32Array(H.count*3),ae=new je;for(let St=0;St<H.count;St++){let Ge=Math.hypot(H.getX(St),H.getZ(St))/F.radius;ae.set(Ge>.8?"#fff7e4":F.biome==="rocky"?"#d1d4c5":"#dce2c8"),ae.toArray(Z,St*3)}R.geometry.setAttribute("color",new nn(Z,3)),R.geometry.computeVertexNormals(),R.material.dispose(),R.material=Tl(f,st,{mobile:a}),R.material.vertexColors=!0,L.add(R);let fe=Mt[F.id],de=new Ue,Ke=Hi(fe.land.x,fe.land.z);de.name="pier-"+F.id,de.position.set(fe.land.x/st,Ke,fe.land.z/st),de.rotation.y=Math.atan2(fe.ux,fe.uz),L.add(de);let Ne=Il(fe.end,fe.land)/st,et=Math.ceil(Ne/.26),pt=new Dt(p("box",()=>new hn),m("#a98961"),et+1),dt=new Pt;pt.name="pier-deck-"+F.id;for(let St=0;St<=et;St++){let Ge=Ne*St/et;dt.position.set(0,(fe.deck-Ke)*St/et-.075,Ge),dt.scale.set(fe.width/st,.15,Ne/et+.006),dt.updateMatrix(),pt.setMatrixAt(St,dt.matrix)}pt.castShadow=pt.receiveShadow=!0,de.add(pt);let We=p("pier-piling",()=>new Gt(1,1,1,12)),ze=new Dt(We,m("#876742"),8);ze.name="pier-pilings-"+F.id;let Qt=0;for(let St of[-.8,.8])for(let Ge of[0,Ne*.33,Ne*.66,Ne]){let bt=(fe.deck-Ke)*Ge/Ne;dt.position.set(St,bt-.65,Ge),dt.scale.set(.075,1.6,.075),dt.updateMatrix(),ze.setMatrixAt(Qt++,dt.matrix)}ze.castShadow=ze.receiveShadow=!0,ze.instanceMatrix.needsUpdate=!0,ze.computeBoundingSphere(),de.add(ze);let qt=new Dt(We,m("#394447"),8);qt.name="pier-bollards-"+F.id;let Vn=0;for(let St of[-.72,.72])for(let Ge of[Ne*.78,Ne*.98]){let bt=(fe.deck-Ke)*Ge/Ne;dt.position.set(St,bt+.25,Ge),dt.scale.set(.075,.5,.075),dt.updateMatrix(),qt.setMatrixAt(Vn++,dt.matrix),dt.position.set(St,bt+.51,Ge),dt.scale.set(.13,.08,.13),dt.updateMatrix(),qt.setMatrixAt(Vn++,dt.matrix)}qt.castShadow=qt.receiveShadow=!0,qt.instanceMatrix.needsUpdate=!0,qt.computeBoundingSphere(),de.add(qt),["paradise","smugglers","highlands"].includes(F.id)&&E(F.id,F.x,F.z)}E("jungle",rt.supply.x,rt.supply.z);let U=Math.max(ys.maxX-ys.minX,ys.maxZ-ys.minZ)/st+12e3,G=Sl(dn.map(F=>[F.x/st,F.z/st,F.radius/st,F.radius/st]),{size:U,segments:a?48:72,coastSeeds:dn.map(F=>F.coastSeed),mobile:a});L.add(G.mesh);let q=wl(5e3,{mobile:a});L.add(q);let B=El(L,dn,{scale:st,height:Hi,surfaces:f,small:a,dense:!0,lod:!0,clear:(F,_,R)=>vr({x:_,z:R},F.id,Mr)||F.id==="home"&&Cl(_,R)||F.id==="jungle"&&(Il({x:_,z:R},rt.cave)<100||Il({x:_,z:R},rt.supply)<58)||F.id==="fortress"&&Math.abs(_-Zt.x)<125&&Math.abs(R-Zt.z)<155||Il({x:_,z:R},Mt[F.id].land)<90}),te=Al(L,{scale:st,height:Hi,surfaces:f,helpers:C,village:Mr,paths:fa,marketPoint:xd}),{boat:ie,wake:we}=vd(L,C),pe=new Ue;pe.name="harbor-fuel-pump",pe.position.set(rt.pump.x/st,ci(rt.pump.x,rt.pump.z),rt.pump.z/st),L.add(pe),y(pe,"#a98961",[0,.06,0],[1.05,.12,.92]),y(pe,"#e6d6b8",[0,.68,0],[.75,1.24,.65]),y(pe,"#bd6e4e",[0,1.34,0],[.82,.28,.72]),y(pe,"#263f41",[0,.99,.34],[.48,.25,.045]),y(pe,"#e8d99e",[0,.99,.37],[.31,.1,.018]),v(pe,"#2d3435",[.53,.72,0],[.035,1.18,.035]);let Ve=y(pe,"#394447",[.53,.39,.29],[.1,.24,.08]);Ve.rotation.z=-.22,y(pe,"#bd6e4e",[0,.39,.35],[.3,.1,.055]),v(pe,"#e6d6b8",[0,2.18,-.06],[.055,1.42,.055]);let mt=v(pe,"#bd6e4e",[0,2.9,-.06],[.42,.1,.42]);mt.rotation.x=Math.PI/2;let Qe=v(pe,"#f3dfbe",[0,2.9,.005],[.31,.115,.31]);Qe.rotation.x=Math.PI/2,pe.userData.fuelDetails={display:!0,hose:!0,nozzle:!0,marker:!0},T(pe);let J=new Ue;J.name="campaign-cave-entrance",J.position.set(rt.cave.x/st,ci(rt.cave.x,rt.cave.z),rt.cave.z/st),L.add(J);let $=[[-2,.45,.02,.55,.55,.85,-.12],[-2,1.15,-.02,.58,.7,.95,.08],[-1.9,1.9,.04,.62,.72,.9,-.09],[-1.55,2.55,-.03,.72,.6,.9,.14],[2,.45,-.02,.55,.55,.85,.12],[2,1.15,.03,.58,.7,.95,-.08],[1.9,1.9,-.04,.62,.72,.9,.09],[1.55,2.55,.02,.72,.6,.9,-.14],[-1,2.9,.03,.72,.48,.9,-.1],[-.35,3.05,-.03,.68,.45,.92,.06],[.35,3.05,.02,.68,.45,.92,-.06],[1,2.9,-.02,.72,.48,.9,.1]],oe=new Pt,Ae=new Dt(p("cave-mouth-rock",()=>new Tn(1,12,8)),m("#92968b"),$.length);Ae.name="cave-entrance-rocks",Ae.castShadow=!0,Ae.receiveShadow=!0,$.forEach(([F,_,R,H,Z,ae,fe],de)=>{oe.position.set(F,_,R),oe.scale.set(H,Z,ae),oe.rotation.set(0,0,fe),oe.updateMatrix(),Ae.setMatrixAt(de,oe.matrix)}),Ae.instanceMatrix.needsUpdate=!0,Ae.computeBoundingSphere(),J.add(Ae),y(J,"#171e19",[0,1.25,-.85],[2.8,2.5,.15]);let Ce=new Dt(p("cave-torch-handle",()=>new Gt(1,1,1,7)),m("#4c3525"),2);Ce.name="cave-entrance-torches",Ce.castShadow=!0;let $e=new Bt({color:"#ffcf75",emissive:"#ff7f32",emissiveIntensity:1.15,roughness:.55}),_t=new Dt(p("cave-torch-flame",()=>new Jn(1,1,7)),$e,2);_t.name="cave-entrance-flames",[-1,1].forEach((F,_)=>{oe.position.set(F*1.18,1.15,.18),oe.scale.set(.035,.85,.035),oe.rotation.set(0,0,-F*.15),oe.updateMatrix(),Ce.setMatrixAt(_,oe.matrix),oe.position.set(F*1.18,1.65,.18),oe.scale.set(.12,.22,.12),oe.rotation.set(0,0,F*.08),oe.updateMatrix(),_t.setMatrixAt(_,oe.matrix)}),Ce.instanceMatrix.needsUpdate=!0,_t.instanceMatrix.needsUpdate=!0,Ce.computeBoundingSphere(),_t.computeBoundingSphere(),J.add(Ce,_t),J.userData.entranceDetails={archStones:12,torches:2,clearOpening:!0};let D=new Ue;D.name="guarded-estate",D.position.set(Zt.x/st,.85,Zt.z/st),L.add(D),y(D,"#e2dbc7",[0,1.55,0],[8,3.1,8]),y(D,"#a68854",[0,3.2,0],[8.6,.25,8.6]),y(D,"#e2dbc7",[0,4.35,-.4],[6.5,2.3,6.5]);for(let F of[-1,1]){let _=y(D,"#ba7655",[F*1.7,5.9,-.4],[3.7,.15,7.4]);_.rotation.z=-F*.3}y(D,"#313f38",[0,1.2,4.03],[1.65,2.4,.08]);for(let F of[-2.7,2.7])for(let _ of[1.7,4.3])y(D,"#425761",[F,_,4.04],[1.15,1.3,.06]),y(D,"#e2dbc7",[F,_,4.11],[.08,1.38,.08]),y(D,"#e2dbc7",[F,_,4.11],[1.2,.08,.08]);for(let F of[-1.4,1.4])v(D,"#e2dbc7",[F,1.3,4.65],[.16,2.6,.16]);y(D,"#a68854",[0,2.67,4.65],[3.3,.2,1.4]);for(let F=0;F<3;F++)y(D,"#92968b",[0,-.03+F*.06,4.4+F*.4],[2.6,.15,1.25-F*.25]);for(let F of[-3.4,3.4])for(let _ of[1.7,4.3]){y(D,"#587e7c",[F,_,4.07],[.32,1.35,.1]);for(let R=0;R<8;R++)y(D,"#876742",[F,_-.5+R*.14,4.14],[.3,.025,.045])}y(D,"#e2dbc7",[0,3.1,4.55],[8.5,.16,1.25]);for(let F=-10;F<=10;F++)v(D,"#e2dbc7",[F*.39,3.57,5.05],[.033,.83,.033]);y(D,"#e2dbc7",[0,4,5.05],[8.5,.08,.08]);for(let F of[-2.45,2.45]){y(D,"#a98961",[F,.3,4.62],[1.25,.42,.55]);for(let _=-2;_<=2;_++){let R=A(D,_%2?"#6f8f58":"#88a866",[F+_*.2,.67+Math.abs(_)*.025,4.62],[.18,.38,.18]);R.rotation.z=_*.12}}let wt=new Bt({color:"#ffe4a8",emissive:"#ffb85c",emissiveIntensity:.72,roughness:.34});for(let F of[-1.03,1.03]){y(D,"#394447",[F,2.05,4.14],[.08,.1,.24]);let _=A(D,"#ffe4a8",[F,1.88,4.27],[.13,.19,.13]);_.material=wt}let qe=v(D,"#d4a957",[0,3.02,4.11],[.38,.1,.38]);qe.rotation.x=Math.PI/2,D.userData.estateDetails={planters:2,lanterns:2,crest:!0},T(D),D.userData.cameraBlocker=!0;let ke=[te.buildings,D];ke.forEach(F=>F.updateWorldMatrix(!0,!0));let De={};function At(F,_=11,R=15){let H=new Ue;H.name=F,O.add(H),De[F]=H,y(H,F==="cave"?"#777a6b":"#a68854",[0,-.1,1],[_,.2,R]);let Z=new Ue;Z.name=F+"-walls",H.add(Z);for(let fe of[-_/2,_/2])y(Z,F==="cave"?"#92968b":"#e2dbc7",[fe,1.65,1],[.3,3.3,R]);y(Z,F==="cave"?"#92968b":"#e2dbc7",[0,1.65,1-R/2],[_,3.3,.3]),T(Z),y(H,"#313f38",[0,1.1,R/2-.2],[1.7,2.2,.15]);let ae=new cr(F==="cave"?"#ffd9a0":"#ffeccf",22,18,1.6);return ae.position.set(0,2.7,1),H.add(ae),H.userData.shellDetails={sourceMeshes:5,renderMeshes:3},H}let Ie=At("cave",12,17),nt=p("cave-formation",()=>new Jn(1,1,9)),Ut=new Dt(nt,m("#777a6b"),16),at=new Pt;Ut.name="cave-formations";let P=[[-5.2,-5.4,.34,.92],[-5.2,-1.7,.27,.68],[-5.2,2.1,.38,1.06],[-5.2,5.1,.25,.78],[5.2,-4.1,.31,.84],[5.2,-.3,.39,1.12],[5.2,3.4,.28,.72],[3.6,-6.7,.42,1.18]],M=0;for(let[F,_,R,H]of P)at.position.set(F,H/2,_),at.rotation.set(0,M*.71%Math.PI,0),at.scale.set(R,H,R),at.updateMatrix(),Ut.setMatrixAt(M++,at.matrix),at.position.set(-F,3.3-H*.48,_+.55),at.rotation.set(0,M*.53%Math.PI,Math.PI),at.scale.set(R*.82,H*.92,R*.82),at.updateMatrix(),Ut.setMatrixAt(M++,at.matrix);Ut.castShadow=Ut.receiveShadow=!0,Ut.instanceMatrix.needsUpdate=!0,Ut.computeBoundingSphere(),Ie.add(Ut),Ie.userData.caveDetails={stalactites:8,stalagmites:8,clearCenter:!0};let Y=new Ue;Y.name="cave-evidence-table",Ie.add(Y),y(Y,"#a98961",[0,.75,-2],[2,.12,1.2]);for(let F of[-.75,.75])for(let _ of[-2.45,-1.55])v(Y,"#876742",[F,.35,_],[.065,.7,.065]);for(let F of[-2.47,-1.53])y(Y,"#876742",[0,.57,F],[1.72,.2,.07]);y(Y,"#876742",[0,.56,-1.38],[.72,.27,.08]),A(Y,"#394447",[0,.56,-1.32],[.045,.045,.04]),v(Y,"#394447",[.72,.86,-2.18],[.17,.1,.17]);let ee=new Bt({color:"#ffe4a8",emissive:"#ff9f45",emissiveIntensity:1.05,roughness:.28,transparent:!0,opacity:.88}),re=A(Y,"#ffe4a8",[.72,1.08,-2.18],[.14,.22,.14]);re.material=ee,v(Y,"#394447",[.72,1.31,-2.18],[.12,.07,.12]),Y.userData.evidenceDetails={legs:4,drawer:!0,lantern:!0,newspaper:!0,hiddenGun:!0},T(Y);let Q=document.createElement("canvas");Q.width=256,Q.height=320;let Re=Q.getContext("2d");Re.fillStyle="#ddd5bd",Re.fillRect(0,0,256,320),Re.fillStyle="#3a3b32",Re.font="bold 26px serif",Re.fillText("ISLAND DAILY",18,38),Re.fillRect(18,51,220,3);for(let F=0;F<20;F++)Re.fillRect(18,72+F*10,94-F%4*6,2),Re.fillRect(128,72+F*10,104-F%3*8,2);let le=new Oi(Q);le.colorSpace=Yt;let Le=new ct(new Rn(.9,1.05),new Bt({map:le,side:Wt}));Le.name="cave-newspaper",Le.rotation.x=-Math.PI/2,Le.position.set(0,.83,-2),Ie.add(Le);function Pe(F){let _=new Ue;F.add(_),y(_,"#333a3d",[0,0,.06],[.12,.12,.34]);let R=y(_,"#695646",[0,-.11,-.03],[.1,.23,.13]);return R.rotation.x=-.22,y(_,"#8b9294",[0,.08,.03],[.11,.035,.3]),_}let he=Pe(Ie);he.name="cave-hidden-gun",he.position.set(0,.87,-2),he.rotation.y=Math.PI/2;let xe=At("estate",11,15),Oe=new Ue;Oe.name="estate-fixtures",xe.add(Oe),y(Oe,"#816947",[0,.42,-4.6],[2.6,.85,.9]),y(Oe,"#decc9f",[0,.05,1],[3,.025,10]);for(let F=0;F<6;F++)y(Oe,"#777a6b",[3.5,.06*F,-4.75+F*.28],[1.7,.12,.65]);Oe.userData.batchDetails={sourceMeshes:8,renderMeshes:3},T(Oe);let Se=new Ue;Se.name="estate-interior-details",xe.add(Se);let _e=["#6f443d","#40626a","#718052"];for(let[F,_]of[-2.7,0,2.7].entries())y(Se,"#a68854",[_,1.9,-6.31],[1.42,1.22,.08]),y(Se,_e[F],[_,1.9,-6.25],[1.12,.92,.045]);y(Se,"#a68854",[0,.93,-6.29],[8.7,.08,.08]);for(let F of[-4.35,4.35]){y(Se,"#394447",[F,2.02,-6.24],[.1,.32,.1]);let _=A(Se,"#ffe4a8",[F,1.79,-6.15],[.14,.19,.11]);_.material=wt}y(Se,"#394447",[0,.86,-4.58],[1.12,.025,.52]);for(let F of[-.52,0,.52])y(Se,"#d8d2c3",[F,.88,-4.57],[.4,.012,.3]);v(Se,"#394447",[.93,1.08,-4.58],[.035,.42,.035]);let Ye=A(Se,"#ffe4a8",[.93,1.34,-4.58],[.18,.16,.18]);Ye.material=wt,xe.userData.interiorDetails={portraits:3,sconces:2,documents:3,deskLamp:!0},T(Se);let V=new ct(new Si(.13,.036,8,16),new Bt({color:"#f8ce60",emissive:"#8c6322",emissiveIntensity:.5}));V.position.set(0,.88,-3),xe.add(V),y(V,"#debb63",[0,-.2,0],[.065,.32,.065]);let ue=At("cellar",11,15),ge=[],me=new Ue;me.name="cellar-static",ue.add(me);let se=Object.entries(De);for(let F of Pn){let _=new Ue;_.name="cell-door-"+F.id,_.position.set(F.x/st,0,-1.5),ue.add(_),ge[F.id]=_;for(let Z=-2;Z<=2;Z++)v(_,"#475759",[Z*.32,1.3,0],[.025,2.6,.025]);for(let Z of[.1,2.5])y(_,"#475759",[0,Z,0],[1.65,.055,.055]);for(let Z of[.45,2.15])v(_,"#394447",[-.78,Z,.07],[.045,.12,.045]);b(_,p("cell-padlock",()=>new Si(.09,.022,6,12)),m("#a68854"),[.61,1.42,.07]),y(_,"#a68854",[.61,1.27,.07],[.18,.2,.08]),T(_);let R=F.x/st,H=["#738b90","#9b796d"][F.id%2];y(me,"#a98961",[R,.18,-4.8],[1.55,.36,.8]),y(me,"#e2dbc7",[R,.4,-4.8],[1.5,.1,.8]),y(me,H,[R,.47,-4.65],[1.42,.045,.48]),y(me,"#d8d2c3",[R,.5,-5.08],[.64,.1,.24])}for(let F of[-3.8,0,3.8]){y(me,"#394447",[F,2.54,-6.28],[.36,.15,.1]);let _=A(me,"#ffe4a8",[F,2.34,-6.2],[.15,.2,.11]);_.material=wt}ue.userData.cellarDetails={cells:5,hinges:10,padlocks:5,lamps:3,bedding:5},T(me);function ne(F,_,R){let H=F.hairStyles[_],Z=new Set;return H.name=`${R}-hair-${_}`,H.visible=!0,H.traverse(ae=>{ae.isMesh&&Z.add(ae)}),F.hairStyles.forEach((ae,fe)=>{fe!==_&&ae.removeFromParent()}),F.hairStyles=[H],F.hairParts=F.hairParts.filter(ae=>Z.has(ae)),F.spear.removeFromParent(),F.raft.removeFromParent(),Object.values(F.props).forEach(ae=>ae.removeFromParent()),F.spear=F.raft=null,F.props={},F.root.userData.renderProfile={hairVariants:1,unusedToolMeshes:0},S(F,R),F}let ye=ne(t({shirt:"#577c87",skin:"#ddb08c",hair:"#40362f"},"player",C),0,"campaign-player");ye.root.name="campaign-player",l.add(ye.root);let Ze=new Map,yt=new Map,gt=new Uint8Array(Pn.length),fn=Pn.map(()=>({x:0,z:0})),vn={swing:0,step:0,bounce:0},hi={gate:{shirt:"#526252",skin:"#c29574",hair:"#302e28",style:0},patrol:{shirt:"#59665a",skin:"#a96f55",hair:"#211f1e",style:1},hall:{shirt:"#4b5958",skin:"#d1a17d",hair:"#5b4032",style:2},boss:{shirt:"#34383a",skin:"#b67d60",hair:"#251f1c",style:1}};for(let F of e().guards){let _=hi[F.id],R=ne(t(_,"guard",C),_.style,"campaign-guard-"+F.id);if(R.root.name="campaign-guard-"+F.id,R.root.userData.guardProfile={boss:F.id==="boss",style:_.style},F.id==="boss"){let H=new Ue;H.name="campaign-boss-insignia",R.hips.add(H);for(let ae of[-1,1])y(H,"#d2aa58",[ae*.2,.56,.02],[.12,.035,.18]);let Z=y(H,"#8f2f2d",[0,.34,.15],[.055,.52,.025]);Z.rotation.z=-.48,R.root.userData.guardProfile.insignia=!0}l.add(R.root),Pe(R.arms[1].forearm).position.set(0,-.24,.14),Ze.set(F.id,R)}let Ln=[{shirt:"#8da4b1",skin:"#c99370",hair:"#302d2a",style:0,scale:1.02},{shirt:"#b78876",skin:"#e1b894",hair:"#6a4938",style:1,scale:.96},{shirt:"#9caa8c",skin:"#b98264",hair:"#2f2927",style:2,scale:1},{shirt:"#c3b487",skin:"#dca984",hair:"#704936",style:1,scale:.72},{shirt:"#92b2b6",skin:"#e4bb96",hair:"#3f302b",style:2,scale:.76}];for(let F of Pn){let _=Ln[F.id],R=ne(t(_,"resident",C),_.style,"campaign-prisoner-"+F.id);R.root.name="campaign-prisoner-"+F.id,R.root.scale.setScalar(_.scale),R.root.userData.residentProfile={child:F.child,style:_.style,scale:_.scale},l.add(R.root),yt.set(F.id,R)}let Un=new Ue;h.add(Un),Pe(Un).position.set(.26,-.23,-.48);let bs=A(Un,"#ddb08c",[.24,-.32,-.4],[.065,.085,.08]),Nn=v(Un,"#577c87",[.22,-.4,-.3],[.085,.24,.085]);Nn.rotation.x=-.5;let Mn=new ct(new Si(.42,.035,8,32),new Sn({color:"#f3d48a"}));Mn.rotation.x=-Math.PI/2,l.add(Mn);let Xi=new tt(new Float32Array(6),3),ei=new rr(new Ft().setAttribute("position",Xi),new zi({color:"#ffe8ad"}));ei.frustumCulled=!1,l.add(ei);let kn=new ur,ti=new k,qi={position:new k,target:new k},Ei=[],Ai={position:new k},Yi={},_n=0,ni=0,w={x:0,z:0,surface:0,yaw:0,pitch:0,mode:"first",distance:4.6},W=F=>F.distance>.2,K={height:25},j={},X={},ce={},ve=[],Ee=new Map,Me=new Map;Ee.misses=0;let Xe=0,Je=0,Fe=0,lt=0,ht=0,Ct=.05,ut="first",Rt=0,Be=!0,vt=!1,it=null,Nt=0,Fn=0,Xt=!1,cn={},It={},$t={},Kt={},jt={},an={},Ci={},zn=-1/0,Ss=0,ws=e(),Ts=Rl(ws).target;Ts&&(ht=Math.atan2(ws.p.x-Ts.x,ws.p.z-Ts.z));function br(F,_,R,H,Z,ae,fe=!1,de="standing"){Nt++;let Ke=F.root.userData.campaignPoseState||(F.root.userData.campaignPoseState={});if(!x_(Ke,_,R,H,Z,fe,de))return;Fn++,F.root.position.set(_.x/st,R,_.z/st),F.root.rotation.set(0,0,0),F.rig.rotation.y=H;let Ne=g_(vn,ae,Z);for(let et of F.legs){let pt=(et.side<0?-Ne.swing:Ne.swing)*Ne.step;et.thigh.rotation.x=pt,et.calf.rotation.x=Math.max(0,-pt),et.shoe.rotation.x=-et.calf.rotation.x*.6}for(let et of F.arms)et.arm.rotation.x=Z?(et.side<0?Ne.swing:-Ne.swing)*.25:0,et.arm.rotation.z=0,et.forearm.rotation.x=-.18;F.hips.position.y=.87+Ne.bounce*.009}function Dl(F){if(!Be||vt)return;let _=e();if(_.paused&&Xt)return;Xt=!!_.paused;let R=F/1e3;Rt=F,Nt=0,f.update();let H=_.interior;i_(jt,H,L,O,se,l,u,d),s_(It,H,_.p,dn,I);let Z=H?0:pa(Ee,ye.root,_.p.x,_.p.z,ci),ae=ut==="third";if(ye.root.visible=ae,!_.boat){let Ge=n_(l,ye.root);ae&&br(ye,_.p,Z,_.heading,_.walking,R,Ge)}ye.rig.visible=ae,yd(ie,we,(_.boat?_.p.x:Mt[_.boatAt].x)/st,(_.boat?_.p.z:Mt[_.boatAt].z)/st,_.boat?_.heading:Math.atan2(Mt[_.boatAt].ux,Mt[_.boatAt].uz),_.boat,R,_.walking),_.boat&&ae&&Md(ye,ie),Le.visible=!_.paper,he.visible=_.paper&&!_.gun,a_(an,_.released,gt,ge);let fe=!1,de=!1;Fe=0;for(let Ge of _.guards){Ge.id==="boss"&&(de=Ge.hp<=0);let bt=Ze.get(Ge.id),en=Ge.area===H&&!_.boat&&(!Ge.area||_.island==="fortress");if(bt.root.visible=en,!en)continue;let Ht=Me.get(Ge.id);Ht||(Ht={},Me.set(Ge.id,Ht));let kt=__(Ht,Ge,Ge.hp>0),Ll=y_(Ht,Math.atan2(_.p.x-Ge.x,_.p.z-Ge.z),Ge.hp>0);kt&&Fe++,fe||(fe=kt);let xa=Ge.area?0:pa(Ee,bt,Ge.x,Ge.z,ci);br(bt,Ge,xa,Ll,kt,R,!1,Ge.hp<=0?"fallen":"armed"),Ge.hp<=0?(bt.rig.rotation.x=-Math.PI/2,bt.root.position.y=xa+(Ge.area?0:.15),bt.root.scale.setScalar(.8)):(bt.rig.rotation.x=0,bt.arms[1].arm.rotation.x=-1.05,bt.arms[1].forearm.rotation.x=-.35)}V.visible=!_.key&&de,V.visible&&(V.rotation.y=R),_.released.length&&!_.boarded&&!_.boat&&(H==="estate"||H==="cellar"||_.island==="fortress")&&p_(fn,Pn,_.p,_.heading);for(let Ge of Pn){let bt=yt.get(Ge.id),en=!!gt[Ge.id],Ht=_.boarded?!1:en?!_.boat&&(H==="estate"||H==="cellar"||_.island==="fortress"):H==="cellar";if(bt.root.visible=Ht,!Ht)continue;let kt=en?fn[Ge.id]:Ge;br(bt,kt,H?0:pa(Ee,bt,kt.x,kt.z,ci),_.heading,en&&_.walking,R+Ge.id*.18)}l_(X,_,j,!de)&&Xe++;let Ne=j.target;c_($t,H,_.p,Ne,ht,Ct,ut==="first"?.05:.22,Kt)&&(ht=Kt.yaw,Ct=Kt.pitch),o_(ce,_,ve)&&Je++;let et=ce.nearby,pt=et||Ne;Mn.visible=!!pt,pt&&Mn.position.set(pt.x/st,(H?0:pa(Ee,Mn,pt.x,pt.z,ci))+.08,pt.z/st),pt&&Mn.scale.setScalar(1+Math.sin(R*3)*.1),Un.visible=_.gun&&!_.boat&&ut==="first",Un.position.z=_.shot?.025:0;let dt=_.boat?.02+vs.eye-1.64:Z,We=_.boat?vs.seatZ:0;w.x=_.p.x/st+Math.sin(_.heading)*We,w.z=_.p.z/st+Math.cos(_.heading)*We,w.surface=dt,w.yaw=ht,w.pitch=Ct,w.mode=ut,w.distance=_.boat?7.5:4.6;let ze=vl(w,qi);if(H&&ut==="third"&&(ze.position.x=ca.clamp(ze.position.x,-5.1,5.1),ze.position.z=ca.clamp(ze.position.z,-5,8.1)),!H&&ut==="third"){let Ge=Ai,bt=ze.position,en=ze.target;if(Ge.ready&&Ge.x===bt.x&&Ge.y===bt.y&&Ge.z===bt.z&&Ge.tx===en.x&&Ge.ty===en.y&&Ge.tz===en.z)ze.position.copy(Ge.position);else{Ge.ready=!0,Ge.x=bt.x,Ge.y=bt.y,Ge.z=bt.z,Ge.tx=en.x,Ge.ty=en.y,Ge.tz=en.z,ti.subVectors(bt,en);let Ht=ti.length();ti.normalize(),kn.set(en,ti),kn.far=Ht,_n++;let kt=Ml(kn,ke,!0,Ei).find(W);kt&&bt.copy(en).addScaledVector(ti,Math.max(.35,kt.distance-.22)),bt.y=Math.max(bt.y,pa(Ee,h,bt.x*st,bt.z*st,ci)+.24),Ge.position.copy(bt)}}h_(Yi,h,ze.position,ze.target)&&ni++,r_(H,R,h,q,G,B)&&lt++;let Qt=d_(_,fe,ut==="third"),qt=u_(cn,_,Qt)||Qt&&F-zn>=c;s.shadowMap.needsUpdate=qt,qt&&(bl(d,_.p.x/st,_.p.z/st,K),zn=F,Ss++),ei.visible=!!_.shot,_.shot&&m_(Xi,_.shot.from,_.shot.to,Z+1.35),s.render(l,h);let Vn=s.getPixelRatio(),St=v_(Ci,F,Vn,o,!_.paused);St!==Vn&&(s.setPixelRatio(St),Es())}function Es(){Xt=!1,h.aspect=innerWidth/innerHeight,h.updateProjectionMatrix(),s.setSize(innerWidth,innerHeight,!1)}function ga(F,_=0){e().paused||(ht+=F,Ct=ca.clamp(Ct+_,ut==="first"?-.95:-.05,.75))}n.addEventListener("pointerdown",F=>{e().paused||F.button!==0||(it={id:F.pointerId,x:F.clientX,y:F.clientY},n.setPointerCapture(F.pointerId))}),n.addEventListener("pointermove",F=>{it?.id===F.pointerId&&(ga(-(F.clientX-it.x)*.006,(F.clientY-it.y)*.005),it.x=F.clientX,it.y=F.clientY)});for(let F of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(F,()=>it=null);return n.addEventListener("webglcontextlost",F=>{F.preventDefault(),vt=!0,Be=!1,i?.()}),{frame:Dl,resize:Es,orbit:ga,setCamera(F){ut=F==="first"?"first":"third",Ct=ut==="first"?.05:.22,Xt=!1},get cameraMode(){return ut},get enabled(){return Be&&!vt},vector:(F,_)=>({x:F*Math.cos(ht)+_*Math.sin(ht),z:-F*Math.sin(ht)+_*Math.cos(ht)}),aim:()=>ht+Math.PI,setEnabled(F){Be=!!F&&!vt,Be&&(Xt=!1)},stats:()=>({calls:s.info.render.calls,triangles:s.info.render.triangles,pixelRatio:s.getPixelRatio(),eye:h.position.toArray(),camera:ut,cameraBlockers:ke.length,cameraRaycasts:_n,cameraUpdates:ni,goalSelections:Xe,nearbySelections:Je,movingGuards:Fe,palmBatches:B.treeBatches.length,largestPalmBatch:Math.max(...B.treeBatches.map(F=>F.count)),posedCharacters:Nt,poseUpdates:Fn,exteriorUpdates:lt,palmLodDistanceChecks:B.treeBatches.length+B.foliageBatches.length,palmTrunkTriangles:B.treeBatches.reduce((F,_)=>F+_.count*_.geometry.index.count/3,0),unshadowedPalmTrunkTriangles:B.treeBatches.filter(F=>!F.receiveShadow).reduce((F,_)=>F+_.count*_.geometry.index.count/3,0),palmCrownTriangles:B.foliageBatches.reduce((F,_)=>F+_.count*_.geometry.index.count/3,0),lowDetailPalmBatches:B.treeBatches.filter(F=>F.userData.lod.level==="low").length,terrainTriangles:I.reduce((F,_)=>F+_.geometry.index.count/3,0),shadowReceivingTerrains:It.active,shadowUpdates:Ss,terrainHeightSamples:Ee.misses}),dispose(){s.dispose(),f.dispose();let F=new Set([...x.values(),...B.lodGeometries]),_=new Set(g.values());l.traverse(R=>{if(R.geometry&&F.add(R.geometry),R.material)for(let H of Array.isArray(R.material)?R.material:[R.material])_.add(H)}),F.forEach(R=>R.dispose()),_.forEach(R=>R.dispose()),le.dispose()}}}function Il(n,e){return Math.hypot(n.x-e.x,n.z-e.z)}function b_(n){return Ed({...n,makeHuman:uh})}var Te=80,Rd=[[1750,1300,1540,970],[3380,500,520,310],[4100,2400,390,290]],Wi=(n,e,t)=>Math.max(e,Math.min(t,n)),S_=n=>(n=Wi(n,0,1),n*n*(3-2*n)),w_=(n,e)=>Math.atan2(Math.sin(e-n),Math.cos(e-n)),T_=Object.freeze({}),Ad=Math.cos(1),Cd=Math.sin(1);function Dn(n,e){let t=n*Te,i=e*Te,r=-1;for(let[a,o,c,l]of Rd)r=Math.max(r,1-Math.hypot((t-a)/c,(i-o)/l));return r<=0?-.32:.015+S_(r/.17)*(.25+.28*(1+Math.sin(n*.23+1.3)*Math.cos(e*.27))+.12*Math.sin(n*.7)*Math.sin(e*.6))}function Id(n,e,t){return{x:n*Math.cos(t)+e*Math.sin(t),y:-n*Math.sin(t)+e*Math.cos(t)}}function Pd(n,e,t=75){let i,r=t*t;for(let s of n||[]){let a=s.x-e.x,o=s.y-e.y,c=a*a+o*o;c<r&&(i=s,r=c)}return i}function Dd(n,e,t,i){let r=e&&e.remaining-(i-t);return r>0?(n.kind=e.kind,n.phase=1-r/(ad[e.kind]||1e3),n):null}function Ms(n,e,t=!1){return t&&(n.rendered=!1),e?n.rendered?!1:(n.rendered=!0,!0):(n.rendered=!1,!0)}function Ld(n="first"){return n!=="first"}function Ud(n="first",e=!1,t=!1,i=!1){return n==="first"&&e&&t&&!i}function Nd(n,e,t){return n[e]===t?!1:(n[e]=t,t.updateWorldMatrix(!0,!0),!0)}function Fd(n,e,t,i=0){return n.ready&&n.revision===i&&n.x===e.x&&n.y===e.y&&n.z===e.z&&n.tx===t.x&&n.ty===t.y&&n.tz===t.z?!1:(n.ready=!0,n.revision=i,n.x=e.x,n.y=e.y,n.z=e.z,n.tx=t.x,n.ty=t.y,n.tz=t.z,!0)}function zd(n,e){let t=e*1.3;return n.idleHip=Math.sin(e*1.7),n.idleArmSin=Math.sin(t),n.idleArmCos=Math.cos(t),n}function Od(n,e){return n!==e}function Bd(n,e){let t=Math.sin(e*6)*.15;return n[0]=t,n[1]=-t,n[2]=t,n[3]=-t,n}function kd(n,e,t,i,r,s=!1){return n.moved=e===null||t===null||Math.hypot(i-e,r-t)>1e-4,n.walking=e!==null&&t!==null&&n.moved,n.pose=n.moved||n.walking!==s,n}function Vd(n,e,t,i,r,s){return n.yawSin=Math.sin(t),n.yawCos=Math.cos(t),i||r?(n.phaseSin=Math.sin(e),n.phaseCos=Math.cos(e)):n.phaseSin=n.phaseCos=0,n.hips=(i?.9:.92)+(i?Math.cos(e*2)*.012:s.idleHip*.004),n}function Gd(n,e,t,i=new k){let r=Math.min(240,t*.52),s=e.projectionMatrix.elements[0]*t/2,a=0;for(let o of n){o.userData.signScale||(o.userData.signScale=o.scale.clone()),o.scale.copy(o.userData.signScale),o.getWorldPosition(i);let c=Math.max(.1,i.distanceTo(e.position)),l=o.scale.x*s/c;l>r&&o.scale.multiplyScalar(r/l),a++}return a}function Hd(n,e,t={}){let s=Wi(Math.hypot(n,e),.08,.855);return t.hip=-Math.atan2(e,-n)-Math.acos(Wi((.43*.43+s*s-.43*.43)/(2*.43*s),-1,1)),t.knee=Math.PI-Math.acos(Wi((.43*.43+.43*.43-s*s)/(2*.43*.43),-1,1)),t}function Wd(n,e={}){let t=e.shirt||"#4c9cba",i=e.skin||"#dda879",r=e.hair||"#43332b",s=e.style||0;return n.lookShirt===t&&n.lookSkin===i&&n.lookHair===r&&n.lookStyle===s?!1:(n.lookShirt=t,n.lookSkin=i,n.lookHair=r,n.lookStyle=s,!0)}function hh(n){return n?Math.max(...[-1,0,1].flatMap(e=>[-1,0,1].map(t=>{let i=n.point(e*n.width/2,t*n.depth/2);return Dn(i.x/Te,i.y/Te)}))):0}function Xd(n,e,t){let i=e?.x??null,r=e?.y??null,s=t||0;return n.ready&&n.x===i&&n.y===r&&n.level===s?!1:(n.ready=!0,n.x=i,n.y=r,n.level=s,n.layout=sd(e,t),n.elevation=hh(n.layout),!0)}function qd(n,e={}){let t=e.activities||{},i=t.completed||0,r=e.basePos?.x??null,s=e.basePos?.y??null,a=e.baseLevel??null,o=e.campfire??null,c=e.fire?.x??null,l=e.fire?.y??null,h=i>=1,u=i>=3,d=i>=6,f=u&&t.gardenClaimed<i,g=t.raceWon??null;return n.ready&&n.level===a&&n.baseX===r&&n.baseY===s&&n.campfire===o&&n.fireX===c&&n.fireY===l&&n.first===h&&n.garden===u&&n.flag===d&&n.harvest===f&&n.raceWon===g?!1:(n.ready=!0,n.level=a,n.baseX=r,n.baseY=s,n.campfire=o,n.fireX=c,n.fireY=l,n.first=h,n.garden=u,n.flag=d,n.harvest=f,n.raceWon=g,!0)}function Yd(n,e=[]){let t=n.values||(n.values=[]),i=!n.ready||n.count!==e.length,r=0;for(let s of e){let a=s.type??null,o=s.x??null,c=s.y??null,l=!!s.done,h=s.symbol??null,u=s.label??null;t[r]!==a&&(i=!0),t[r++]=a,t[r]!==o&&(i=!0),t[r++]=o,t[r]!==c&&(i=!0),t[r++]=c,t[r]!==l&&(i=!0),t[r++]=l,t[r]!==h&&(i=!0),t[r++]=h,t[r]!==u&&(i=!0),t[r++]=u}return t.length=r,n.ready=!0,n.count=e.length,i}function ma(n,e,t=0,i=0){let r=e?.x??null,s=e?.y??null;return n.ready&&n.pointX===r&&n.pointY===s&&n.offsetX===t&&n.offsetZ===i?!1:(n.ready=!0,n.pointX=r,n.pointY=s,n.offsetX=t,n.offsetZ=i,n.valid=r!==null&&s!==null,n.valid&&(n.x=r/Te+t,n.z=s/Te+i,n.y=Dn(n.x,n.z)),!0)}function ch(n,e,t,i=hh(t)){let r=Dn(n,e);if(!t)return r;let s=t.floor;if(Math.abs(n*Te-s.x)<=s.w/2&&Math.abs(e*Te-s.y)<=s.h/2)return Math.max(r,i+.16);let a=n*Te-t.center.x,o=e*Te-t.center.y,c=a*t.fy-o*t.fx,l=a*t.fx+o*t.fy;return Math.abs(c)<t.door/2&&l>t.depth/2&&l<t.depth/2+64?r+(Math.max(r,i+.16)-r)*(1-(l-t.depth/2)/64):r}function Zd(n,e,t={}){let i=(d,f,g,x,m)=>{let p=new ct(m,new Bt({color:f}));return p.position.set(...g),p.scale.set(...x),d.add(p),p},r=t.cube||((d,f,g,x)=>i(d,f,g,x,new hn(1,1,1))),s=t.tube||((d,f,g,x)=>i(d,f,g,x,new Gt(1,1,1,10))),a=new Ue,o=n.width/Te,c=n.depth/Te,l=n.wallHeight/Te,h=n.roofRidge/Te,u=n.door/Te;a.name="base",a.position.set(n.center.x/Te,e,n.center.y/Te),a.rotation.y=n.yaw,r(a,"#a68854",[0,.08,0],[o,.16,c]).name="floor";for(let d of[-o/2+.1,o/2-.1])for(let f of[-c/2+.1,c/2-.1])s(a,"#876742",[d,l/2,f],[.075,l,.075]).name="post";for(let d of[-1,1]){let f=r(a,"#ba7655",[d*o/4,(l+h)/2,0],[Math.hypot(o/2+.2,h-l),.1,c+.36]);f.rotation.z=-d*Math.atan2(h-l,o/2+.2),f.name="roof"}for(let d of n.walls){let f=d.x-n.center.x,g=d.y-n.center.y,x=(f*n.fy-g*n.fx)/Te,m=(f*n.fx+g*n.fy)/Te;r(a,"#e2dbc7",[x,l/2,m],[n.fy?d.w/Te:d.h/Te,l,n.fy?d.h/Te:d.w/Te]).name="wall"}if(n.walls.length>=5){let d=n.doorHeight/Te;r(a,"#845f3f",[0,(l+d)/2,c/2],[u,l-d,.125]).name="lintel"}for(let d of n.beds){let f=d.x-n.center.x,g=d.y-n.center.y,x=(f*n.fy-g*n.fx)/Te,m=(f*n.fx+g*n.fy)/Te;r(a,"#7d654b",[x,.17,m],[.65,.34,1.125]).name="bed",r(a,"#cec6a0",[x,.38,m],[.65,.14,1.125]),r(a,"#ede3bd",[x,.49,m-.35],[.5,.09,.26])}return a}function Jd(n,e,{cube:t,tube:i,ell:r}){if(n==="gather"&&(i(e,"#8c6944",[0,-.12,.15],[.025,.48,.025]),t(e,"#8e9891",[0,.1,.15],[.27,.1,.075])),n==="fish"){let s=i(e,"#b2915b",[0,.22,.25],[.014,1.25,.014]);s.rotation.x=-.6;let a=i(e,"#d0e6df",[0,.37,.75],[.003,.62,.003]);a.rotation.x=.6}if(n==="cook"){let s=i(e,"#80613d",[0,-.12,.18],[.016,.5,.016]);s.rotation.x=-.6,r(e,"#bb9457",[0,-.26,.3],[.07,.04,.14])}}function uh(n={},e="player",t={}){let i=new Map,r=new Map,s=t.mat||(I=>(i.has(I)||i.set(I,new Bt({color:I})),i.get(I))),a=t.geo||((I,U)=>(r.has(I)||r.set(I,U()),r.get(I))),o=t.mesh||((I,U,G,q=[0,0,0],B=[1,1,1])=>{let te=new ct(U,G);return te.position.set(...q),te.scale.set(...B),I.add(te),te}),c=t.ell||((I,U,G,q)=>o(I,a("ball",()=>new Tn(1,14,10)),s(U),G,q)),l=t.cube||((I,U,G,q)=>o(I,a("box",()=>new hn(1,1,1)),s(U),G,q)),h=t.tube||((I,U,G,q)=>o(I,a("cyl",()=>new Gt(1,1,1,10)),s(U),G,q)),u=new Ue,d=new Ue;u.add(d);let f=n.skin||"#dda879",g=n.hair||"#43332b",x=n.shirt||"#4c9cba",m=new Ue;m.position.y=.87,d.add(m),c(m,"#3f4d4f",[0,.05,0],[.22,.17,.13]);let p=a("human-torso",()=>new js([new He(.16,.13),new He(.205,.2),new He(.215,.38),new He(.25,.49),new He(.26,.52),new He(.19,.57),new He(.09,.64)],18));o(m,p,s(x),[0,0,0],[1,1,.66]);for(let I of[-1,1]){let U=l(m,x,[I*.065,.6,.071],[.085,.075,.024]);U.rotation.z=-I*.3,l(m,x,[I*.11,.37,.142],[.105,.09,.022])}for(let I=0;I<4;I++)c(m,"#d7d5c2",[0,.24+I*.075,.15],[.009,.01,.005]);e==="guard"&&l(m,"#39483f",[0,.35,.11],[.34,.36,.09]),l(m,"#3b4c48",[0,.135,-.01],[.4,.045,.255]),h(m,f,[0,.64,0],[.064,.13,.064]);let b=new Ue;b.position.y=.79,m.add(b),c(b,f,[0,0,0],[.135,.175,.133]),c(b,f,[-.137,-.005,0],[.025,.048,.025]),c(b,f,[.137,-.005,0],[.025,.048,.025]),c(b,f,[0,-.015,.136],[.026,.033,.036]);for(let I of[-1,1])c(b,"#f6f3df",[I*.052,.02,.115],[.03,.017,.014]),c(b,"#31433e",[I*.053,.02,.128],[.012,.013,.007]),l(b,g,[I*.052,.061,.11],[.062,.01,.014]);l(b,"#af735b",[0,-.071,.117],[.051,.009,.012]);let y=a("hair",()=>new Tn(1,16,10,0,Math.PI*2,0,Math.PI*.56));o(b,y,s(e==="nela"?"#8d4931":g),[0,.015,-.015],[.145,.18,.143]);let v=[new Ue,new Ue,new Ue];v.forEach(I=>b.add(I));let A=b.children.find(I=>I.isMesh&&I.geometry===y);b.remove(A),v[0].add(A),o(v[1],y,s(g),[0,.015,-.015],[.145,.18,.143]),c(v[1],g,[0,-.04,-.17],[.072,.14,.08]);for(let I=0;I<12;I++){let U=I*Math.PI*2/12;c(v[2],g,[Math.sin(U)*.1,.1+I%2*.018,Math.cos(U)*.1-.015],[.066,.067,.066])}if(c(v[2],g,[0,.15,-.015],[.09,.054,.09]),e==="nela"&&c(b,"#8d4931",[0,-.045,-.145],[.125,.21,.07]),v.forEach((I,U)=>I.visible=U===(n.style||0)),e==="leon")h(b,"#c5a775",[0,.15,0],[.16,.12,.16]),h(b,"#c5a775",[0,.095,0],[.22,.028,.22]),l(m,"#e4cda1",[0,.23,.145],[.33,.42,.025]);else if(e==="player"){c(m,"#5d735b",[0,.36,-.17],[.18,.22,.09]);for(let I of[-1,1])l(m,"#b6caa4",[I*.17,.38,-.04],[.034,.35,.029])}let C=[],L=[];for(let I of[-1,1]){let U=new Ue;U.position.set(I*.27,.54,0),m.add(U);let G=c(U,x,[-I*.018,-.025,0],[.105,.13,.11]);G.name="human-shoulder",o(U,a("human-upper-arm",()=>new Gt(.068,.086,.19,12)),s(x),[0,-.105,0]),o(U,a("human-lower-upper-arm",()=>new Gt(.055,.064,.15,12)),s(f),[0,-.24,0]);let q=new Ue;q.position.y=-.31,U.add(q);let B=c(q,f,[0,0,0],[.061,.063,.061]);B.name="human-elbow",o(q,a("human-forearm",()=>new Gt(.057,.04,.26,12)),s(f),[0,-.13,0]),c(q,f,[0,-.28,0],[.06,.082,.046]),C.push({arm:U,forearm:q,side:I});let te=new Ue;te.position.set(I*.115,0,0),m.add(te),o(te,a("human-thigh",()=>new Gt(.092,.108,.42,12)),s("#52625f"),[0,-.21,0]);let ie=new Ue;ie.position.y=-.43,te.add(ie);let we=c(ie,"#52625f",[0,0,.014],[.079,.074,.075]);we.name="human-knee",o(ie,a("human-calf",()=>new Gt(.069,.046,.36,12)),s("#52625f"),[0,-.18,0]);let pe=c(ie,"#52625f",[0,-.36,0],[.052,.06,.052]);pe.name="human-ankle";let Ve=c(ie,"#4b3b2e",[0,-.395,.055],[.075,.052,.14]);L.push({thigh:te,calf:ie,shoe:Ve,side:I})}let O=new Ue;h(O,"#8c6944",[0,.56,0],[.018,1.75,.018]),c(O,"#dad9c5",[0,1.45,0],[.045,.15,.03]),O.position.set(.35,.2,.08),d.add(O),O.visible=!1;let T={};for(let I of["gather","fish","cook"]){let U=new Ue;Jd(I,U,{cube:l,tube:h,ell:c}),U.position.set(0,-.28,0),C[1].forearm.add(U),U.visible=!1,T[I]=U}let S=new Ue;u.add(S);for(let I=0;I<5;I++){let U=h(S,"#a17d48",[(I-2)*.25,.08,0],[.115,1.7,.115]);U.rotation.x=Math.PI/2}for(let I of[-.5,.5])l(S,"#6e5937",[0,.19,I],[1.24,.05,.1]);S.visible=!1;let E=[],z=[],N=[];return d.traverse(I=>{I.isMesh&&(I.material===s(x)&&E.push(I),I.material===s(f)&&z.push(I),I.material===s(g)&&N.push(I))}),{root:u,rig:d,hips:m,head:b,arms:C,legs:L,spear:O,raft:S,shirtParts:E,skinParts:z,hairParts:N,hairStyles:v,props:T,yaw:0,lastX:null,lastZ:null,phase:0}}function $d(n,e){let t=e&&od(e.kind,e.phase);n.rig.rotation.x=t?.bend||0;for(let[i,r]of Object.entries(n.props))r.visible=!!t&&e.kind===i;if(t)for(let i of n.arms)i.arm.rotation.x=i.side<0?t.left:t.right,i.forearm.rotation.x=-.25,i.arm.rotation.z=-i.side*.08+((i.side>0||e.kind==="cheer")&&t.wave||0)}function Kd(n,e,t,i={}){let r=n.phase||0,s=e*.65+r,a=Math.sin(s),o=Math.cos(s),c=n.x+a*14,l=n.y+o*14;return t(c,l)?(i.x=c/Te,i.z=l/Te,i.y=.055+Math.sin(e*3+r)*.008,i.yaw=Math.atan2(o,-a),i.yawSin=o,i.yawCos=-a,i):null}function jd(n,e,t=20*Te){let i=n.x-e.x,r=n.y-e.y;return i*i+r*r<=t*t}function Pl(n,e,t,i,r,s,a,o,c=0){return n.position.set(e.x+e.yawSin*r+e.yawCos*t,e.y+i,e.z+e.yawCos*r-e.yawSin*t),n.rotation.set(c,e.yaw,0),n.scale.set(s,a,o),n.updateMatrix(),n}function Qd(n=!1){return 1e3/(n?20:30)}function E_({canvas:n,terrain:e,getState:t,onLost:i}){let r=new ds(_l(n)),s=innerWidth<=700,a=Qd(s);r.setPixelRatio(Math.min(devicePixelRatio||1,s?1.25:1.6)),r.setSize(innerWidth,innerHeight,!1),r.outputColorSpace=Yt,r.toneMapping=rs,r.toneMappingExposure=.94,r.shadowMap.enabled=!0,r.shadowMap.type=is,r.shadowMap.autoUpdate=!1;let o=new ir;o.background=new je("#c5dbe5"),o.fog=new nr("#c5dbe5",70,240);let c=new tn(72,innerWidth/innerHeight,.04,350);o.add(c);let l=new lr("#c9e3ff","#71694d",1.85);o.add(l);let h=new hr("#fff0d2",3.1);h.castShadow=!0,h.shadow.mapSize.set(s?1024:2048,s?1024:2048),h.shadow.camera.left=-16,h.shadow.camera.right=16,h.shadow.camera.top=16,h.shadow.camera.bottom=-16,h.shadow.camera.near=.5,h.shadow.camera.far=65,h.shadow.bias=-12e-5,h.shadow.normalBias=.012,o.add(h,h.target);let u=yl(r),d=new Map,f=new Map;function g(_,R={}){if(!Object.keys(R).length){let Z=u.forColor(_);if(Z)return Z}let H=_+JSON.stringify(R);return d.has(H)||d.set(H,new Bt({color:_,roughness:.86,...R})),d.get(H)}function x(_,R){return f.has(_)||f.set(_,R()),f.get(_)}function m(){return x("ball",()=>new Tn(1,14,10))}function p(){return x("box",()=>new hn(1,1,1))}function b(){return x("cyl",()=>new Gt(1,1,1,10))}function y(_,R,H,Z=[0,0,0],ae=[1,1,1],fe=!0){let de=new ct(R,H);return de.position.set(...Z),de.scale.set(...ae),de.castShadow=fe,de.receiveShadow=!0,_.add(de),de}function v(_,R,H,Z){return y(_,m(),g(R),H,Z)}function A(_,R,H,Z){return y(_,p(),g(R),H,Z)}function C(_,R,H,Z){return y(_,b(),g(R),H,Z)}let L=new Pt,O=new Rn(4600/Te,2900/Te,230,145);O.rotateX(-Math.PI/2),O.translate(2300/Te,0,1450/Te);let T=O.attributes.position;for(let _=0;_<T.count;_++)T.setY(_,Dn(T.getX(_),T.getZ(_)));O.computeVertexNormals();let S=ld(e),E=new Oi(S);E.anisotropy=Math.min(4,r.capabilities.getMaxAnisotropy());let z=u.ground(E),N=new ct(O,z);N.receiveShadow=!0,o.add(N);let I=dd({segments:s?24:48}),U=40;I.scale.set(1/U,1,1/U),I.position.x=6500/Te;for(let _ of I.children)_.material.dispose(),_.material=Tl(u,U),_.geometry.setAttribute("color",new tt(new Float32Array(_.geometry.attributes.position.count*3).fill(1),3));let G=new Ue;G.scale.set(U,1,U),I.add(G);let q=(_,R)=>{let H=ud(_,R);return H?yr(H,_,R):-.32};El(G,Qn,{scale:U,height:q,surfaces:u,small:s,clear:(_,R,H)=>vr({x:R,z:H},_.id)||_.id==="home"&&(Math.abs(H-40)<55||Math.abs(R-23)<45)}),Al(G,{scale:U,height:q,surfaces:u,helpers:{cube:A,tube:C,ell:v}}),o.add(I);let B=cd(o,Dn,Te,S,s),te=Sl([...Rd.map(([_,R,H,Z])=>[_/Te,R/Te,H/Te,Z/Te]),...Qn.map(_=>[I.position.x+_.x/U,_.z/U,_.radius*.955/U,_.radius*.955/U])]);o.add(te.mesh);let ie=wl(320);o.add(ie);function we(){let _=[],R=[],H=[],Z=(fe,de,Ke,Ne)=>{let et=de*2.05,pt=Math.sin(de*Math.PI)*.46-de*de*.8;return[Math.sin(fe)*et+Math.cos(fe)*Ne*Ke,pt-Ne*.22,Math.cos(fe)*et-Math.sin(fe)*Ne*Ke]};for(let fe=0;fe<11;fe++){let de=fe*Math.PI*2/11;for(let Ke=1;Ke<17;Ke++)for(let Ne of[-1,1]){let et=Ke/18,pt=Math.sin(et*Math.PI)*.42,dt=_.length/3;_.push(...Z(de,et-.023,Ne,.015),...Z(de,et-.085,Ne,pt),...Z(de,et+.038,Ne,pt*.88),...Z(de,et+.025,Ne,.015)),H.push(et,0,et,.9,et+.03,1,et+.03,0),R.push(dt,dt+1,dt+2,dt,dt+2,dt+3)}}let ae=new Ft;return ae.setAttribute("position",new tt(_,3)),ae.setAttribute("uv",new tt(H,2)),ae.setIndex(R),ae.computeVertexNormals(),ae}let pe=new Gt(.085,.16,4.35,14,12);pe.translate(0,2.175,0);for(let _=0;_<pe.attributes.position.count;_++){let R=pe.attributes.position;R.setX(_,R.getX(_)+.16*(R.getY(_)/4.35)**2)}pe.computeVertexNormals();let Ve=g("#9d7750",{bumpMap:u.textures.get("rock"),bumpScale:.025});Ve.onBeforeCompile=_=>{_.vertexShader=_.vertexShader.replace("#include <common>",`#include <common>
varying float vTrunkY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vTrunkY=position.y;`),_.fragmentShader=_.fragmentShader.replace("#include <common>",`#include <common>
varying float vTrunkY;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=.80+.20*smoothstep(.1,.25,fract(vTrunkY*7.));`)};let mt=we(),Qe=u.surface("leaf","#ffffff",1,.018).clone();Qe.side=Wt;let J={value:0};Qe.onBeforeCompile=_=>{_.uniforms.uWind=J,_.vertexShader=_.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.y+=sin(uWind+position.x*2.0+position.z)*length(position.xz)*.018;`)};let $={tree:new Dt(pe,Ve,400),leaves:new Dt(mt,Qe,400),rock:new Dt(new sr(1,2),g("#92968b"),400),food:new Dt(m(),g("#7a5638"),400),shell:new Dt(new Tn(1,12,6,0,Math.PI),g("#f1d0b7"),400)};for(let _ of Object.values($))_.count=0,_.castShadow=!0,_.receiveShadow=!0,_.frustumCulled=!1,o.add(_);let oe=-1,Ae=0;function Ce(_,R){if(Od(oe,R)){let H={tree:0,leaves:0,rock:0,food:0,shell:0};for(let Z of _){let ae=Z.x/Te,fe=Z.y/Te,de=Dn(ae,fe),Ke=Z.phase||0;if(Z.t==="tree"){let Ne=Math.sin(Ke),et=Math.cos(Ke),pt=.84+.17*Math.sin(Z.x*.033+Z.y*.027),dt=1.35+.28*et;L.position.set(ae,de,fe),L.rotation.set(.03*Ne,Ke,.04*et),L.scale.set(pt,dt,pt),L.updateMatrix(),$.tree.setMatrixAt(H.tree++,L.matrix),L.position.set(ae+.16*pt*et,de+4.3*dt,fe-.16*pt*Ne),L.rotation.set(0,Ke,0),L.scale.set(pt,pt,pt),L.updateMatrix(),$.leaves.setMatrixAt(H.leaves++,L.matrix)}else $[Z.t]&&(L.position.set(ae,de+(Z.t==="rock"?.23:Z.t==="food"?.13:.025),fe),L.rotation.set(0,Ke,0),L.scale.set(...Z.t==="rock"?[.34+.18*Math.abs(Math.sin(Ke)),.3,.4]:Z.t==="food"?[.15,.13,.15]:[.12,.04,.14]),L.updateMatrix(),$[Z.t].setMatrixAt(H[Z.t]++,L.matrix))}for(let Z of["tree","leaves","rock","food","shell"])$[Z].count=H[Z],$[Z].instanceMatrix.needsUpdate=!0;oe=R,Ae++}}let $e=new Set,_t=new k;function D(_,R="#ffe9b5"){let H=document.createElement("canvas");H.width=512,H.height=96;let Z=H.getContext("2d");Z.fillStyle="#123e43",Z.beginPath(),Z.roundRect(6,10,500,76,25),Z.fill(),Z.fillStyle=R,Z.font="700 29px system-ui",Z.textAlign="center",Z.textBaseline="middle",Z.fillText(String(_).slice(0,45),256,48,480);let ae=new Oi(H);ae.colorSpace=Yt;let fe=new Js(new jr({map:ae,depthTest:!0,transparent:!0}));return fe.scale.set(2.45,.46,1),fe.position.y=2.32,$e.add(fe),fe}let wt=["#4c9cba","#df8168","#9974c7","#76b677"];function qe(_={},R="player",H=""){let Z=uh(_,R,{ell:v,cube:A,tube:C,mesh:y,mat:g,geo:x});return o.add(Z.root),Z.name=H,Z.tag=null,H&&(Z.tag=D(H,_.shirt),Z.root.add(Z.tag)),Z}let ke=qe(xl()),De=new Map,At=qe({skin:"#d1a074",shirt:"#b49966"},"leon","LEON \xB7 HANDEL"),Ie=qe({skin:"#edc39a",shirt:"#609991"},"nela","NELA \xB7 ZADANIA");function nt(_,R,H){!R||R===_.name||(_.tag&&($e.delete(_.tag),_.root.remove(_.tag),_.tag.material.map.dispose(),_.tag.material.dispose()),_.name=R,_.tag=D(R,H),_.root.add(_.tag))}function Ut(_,R){if(Wd(_,R)){for(let H of _.shirtParts)H.material=g(_.lookShirt);for(let H of _.skinParts)H.material=g(_.lookSkin);for(let H of _.hairParts)H.material=g(_.lookHair);_.hairStyles.forEach((H,Z)=>H.visible=Z===_.lookStyle)}}let at=null,P=0,M={},Y={idleHip:0,idleArmSin:0,idleArmCos:0},ee={yawSin:0,yawCos:1,phaseSin:0,phaseCos:1},re={hip:0,knee:0},Q={x:0,z:0,y:0,yaw:0,yawSin:0,yawCos:1};function Re(_,R,H,Z,ae,fe,de,Ke,Ne=!1,et=null,pt=!1,dt=!1,We=!0){let ze=R.x/Te,Qt=R.y/Te,qt=Ke(R.x,R.y),Vn=qt?0:ch(ze,Qt,at,P);_.root.position.set(ze,Vn+(qt?Ne?.18:-.95:0),Qt),_.yaw+=w_(_.yaw,H)*Math.min(1,fe*12),_.rig.rotation.y=_.yaw;let St=Z&&de>.05;if(_.phase+=St?fe*(de>4?10:7):0,We){let Ge=St?de>4?.31:.22:0,bt=_.phase,en=qt&&!Ne,Ht=Vd(ee,bt,_.yaw,St,en,Y);_.hips.position.y=Ht.hips;for(let kt of _.legs){let Ll=kt.side<0?-Ht.phaseSin:Ht.phaseSin,xa=kt.side<0?-Ht.phaseCos:Ht.phaseCos,Ul=Ll*Ge,ef=St?Math.max(0,xa)*.105:0,tf=ze+Ht.yawCos*kt.side*.115+Ht.yawSin*Ul,nf=Qt-Ht.yawSin*kt.side*.115+Ht.yawCos*Ul,rf=qt?0:ch(tf,nf,at,P)-Vn,_a=Hd(-_.hips.position.y+.07+rf+ef,Ul,re);kt.thigh.rotation.x=_a.hip,kt.calf.rotation.x=_a.knee,kt.shoe.rotation.x=-_a.hip-_a.knee}for(let kt of _.arms)kt.arm.rotation.x=St?(kt.side<0?Ht.phaseSin:-Ht.phaseSin)*.45:(Y.idleArmSin*Ad+Y.idleArmCos*kt.side*Cd)*.025,kt.arm.rotation.z=-kt.side*.07,kt.forearm.rotation.x=St?-.22:-.08,en&&(kt.arm.rotation.x=-Math.PI/2+(Ht.phaseSin*Ad+Ht.phaseCos*kt.side*Cd)*.35,kt.forearm.rotation.x=-.28);$d(_,et),_.spear.visible=!!pt&&!qt&&!et,dt&&(_.arms[0].arm.rotation.x=-1,_.arms[0].forearm.rotation.x=-1)}_.rig.visible=We,_.raft.visible=!!(qt&&Ne),_.raft.rotation.y=_.yaw,_.tag&&(_.tag.visible=Math.hypot(ze-ke.root.position.x,Qt-ke.root.position.z)<13),_.lastX=ze,_.lastZ=Qt}let le=new Ue;o.add(le);for(let _ of[-.55,.55])for(let R of[-.27,.27])C(le,"#866642",[_,1.24,R],[.038,2.48,.038]);A(le,"#a7c4b7",[0,.34,0],[1.24,.68,.67]),A(le,"#a98961",[0,.69,0],[1.24,.09,.67]);for(let _ of[-1,1]){let R=A(le,"#ba7655",[_*.39,2.63,0],[.9,.07,1.14]);R.rotation.z=-_*.34}let Le=C(le,"#ba7655",[0,2.79,0],[.055,1.18,.055]);Le.rotation.x=Math.PI/2;for(let _ of[-.5,.5])A(le,"#e2dbc7",[0,2.4,_],[1.7,.1,.07]);for(let _=0;_<5;_++)A(le,"#a98961",[(_-2)*.24,.32,.344],[.21,.53,.025]);for(let _=0;_<4;_++)v(le,"#b1b967",[(_-1.5)*.19,.78,0],[.09,.08,.08]);let Pe=new Ue;o.add(Pe),A(Pe,"#765734",[0,.18,0],[.56,.36,.4]),A(Pe,"#9a743e",[0,.39,0],[.6,.1,.42]);for(let _ of[-.19,.19])A(Pe,"#d5b15a",[_,.2,.215],[.045,.35,.026]);A(Pe,"#ecd178",[0,.32,.22],[.08,.09,.03]);let he=new ct(new ar(.24,.29,32),new Sn({color:"#ffe087",transparent:!0,opacity:.8,side:Wt,depthWrite:!1}));he.rotation.x=-Math.PI/2,o.add(he);let xe={},Oe={},Se={},_e={},Ye={root:new Ue,tag:null,name:null};o.add(Ye.root),Ye.root.position.set(ua.x/Te,Dn(ua.x/Te,ua.y/Te),ua.y/Te),C(Ye.root,"#786040",[0,.95,0],[.12,1.9,.12]),A(Ye.root,"#234f58",[0,1.65,0],[1.55,.55,.1]);let V=new Ue;o.add(V);let ue=new ct(new ar(.93,1.06,40),new Sn({color:"#54e4ef",transparent:!0,opacity:.85,side:Wt,depthWrite:!1}));ue.rotation.x=-Math.PI/2,ue.position.y=.04,V.add(ue);let ge=y(V,new Gt(.035,.035,1,8),new Sn({color:"#76eff7",transparent:!0,opacity:.5}),[0,1.25,0],[1,2.5,1],!1),me=null,se=0,ne={},ye=new Ue,Ze=null,yt=null,gt=[],fn=0;o.add(ye);function vn(_){let R=_.activities?.completed||0,H=R>=3&&_.activities.gardenClaimed<R;if(qd(ne,_)){yt&&(yt.geometry.dispose(),yt.material.dispose());for(let Z of gt)Z.dispose();if(gt=[],o.remove(ye),ye=new Ue,o.add(ye),yt=null,Ze=null,_.basePos&&_.baseLevel){let Z=at,ae=hd(Zd(Z,P,{cube:A,tube:C}),Z,{cube:A,tube:C},u);if(ye.add(ae),ae.traverse(fe=>{["roof","wall","lintel"].includes(fe.name)&&(fe.material=fe.material.clone(),fe.material.transparent=!0,gt.push(fe.material))}),R>=1)for(let fe of[-1,1]){let de=v(ae,"#ffdc80",[fe*(Z.width/Te/2-.15),2.35,Z.depth/Te/2],[.09,.14,.09]);de.material=g("#ffdc80",{emissive:"#dca739",emissiveIntensity:.7})}if(R>=6&&(C(ae,"#6e5942",[Z.width/Te/2+.2,1.75,-Z.depth/Te/2],[.03,3.5,.03]),A(ae,"#5bbca9",[Z.width/Te/2+.55,3.1,-Z.depth/Te/2],[.7,.42,.03])),R>=3&&_.garden){let fe=_.garden,de=new Ue;de.position.set(fe.x/Te,Dn(fe.x/Te,fe.y/Te),fe.y/Te),ye.add(de),A(de,"#785d40",[0,.07,0],[1.35,.14,1]);for(let Ke of[-.4,0,.4])for(let Ne of[-.25,.25])C(de,"#587b37",[Ke,.21,Ne],[.025,.3,.025]),v(de,"#6caa49",[Ke,.35,Ne],[.16,.12,.12]),H&&v(de,"#cfa565",[Ke+.055,.27,Ne],[.07,.065,.07])}}if(_.campfire&&_.fire){let Z=new Ue,ae=_.fire.x/Te,fe=_.fire.y/Te;Z.position.set(ae,Dn(ae,fe),fe),ye.add(Z);for(let de=0;de<8;de++){let Ke=de*Math.PI/4;v(Z,"#777a6b",[Math.sin(Ke)*.3,.07,Math.cos(Ke)*.3],[.095,.07,.105])}for(let de of[.5,-.5]){let Ke=C(Z,"#614b35",[0,.09,0],[.06,.5,.06]);Ke.rotation.z=Math.PI/2,Ke.rotation.y=de}yt=y(Z,new Jn(.17,.46,8),new Sn({color:"#ffb647",transparent:!0,opacity:.88}),[0,.28,0]),Ze=new cr("#ffa145",2.5,4),Ze.position.y=.5,Z.add(Ze)}Nd(Kt,0,ye)&&fn++}}let hi=[],Ln=[0,0,0,0];function Un(){let _=new Ue;o.add(_),v(_,"#765745",[0,.29,0],[.24,.25,.43]),v(_,"#765745",[0,.3,.4],[.19,.18,.2]),v(_,"#ae8b68",[0,.26,.58],[.11,.065,.065]);for(let H of[-1,1]){let Z=y(_,new Jn(.08,.17,3),g("#644937"),[H*.13,.47,.43]);Z.rotation.z=H*.45}let R=[];for(let H of[-.17,.17])for(let Z of[-.27,.24])R.push(C(_,"#5e493b",[H,.105,Z],[.037,.2,.037]));return{root:_,legs:R,lastX:null,lastZ:null,walking:!1,frameState:{moved:!0,walking:!1,pose:!0}}}function bs(_,R){for(;hi.length<_.length;)hi.push(Un());let H=!1;for(let Z=0;Z<hi.length;Z++){let ae=hi[Z],fe=_[Z];if(ae.root.visible=!!fe,!fe){ae.lastX=ae.lastZ=null,ae.walking=!1;continue}let de=fe.x/Te,Ke=fe.y/Te,Ne=kd(ae.frameState,ae.lastX,ae.lastZ,de,Ke,ae.walking),et=ae.lastX===null?0:de-ae.lastX,pt=ae.lastZ===null?0:Ke-ae.lastZ;if(Ne.moved&&(ae.root.position.set(de,Dn(de,Ke),Ke),Ne.walking&&(ae.root.rotation.y=Math.atan2(et,pt))),Ne.walking&&!H&&(Bd(Ln,R),H=!0),Ne.pose)for(let dt=0;dt<4;dt++)ae.legs[dt].rotation.x=Ne.walking?Ln[dt]:0;ae.lastX=de,ae.lastZ=Ke,ae.walking=Ne.walking}}let Nn=[new Dt(m(),g("#adddd0",{roughness:.4}),96),new Dt(new Jn(1,1,3),g("#668e93"),96),new Dt(new Jn(1,1,3),g("#779da0"),96)];for(let _ of Nn)_.count=0,_.frustumCulled=!1,o.add(_);let Mn=0;function Xi(_,R,H,Z){let ae=0;for(let fe of _||[]){if(!jd(fe,Z))continue;let de=Kd(fe,R,H,Q);!de||ae>=96||(Pl(L,de,0,0,0,.09,.045,.22),Nn[0].setMatrixAt(ae,L.matrix),Pl(L,de,0,0,-.25,.095,.12,.025,Math.PI/2),Nn[1].setMatrixAt(ae,L.matrix),Pl(L,de,0,.045,-.02,.04,.1,.11),Nn[2].setMatrixAt(ae,L.matrix),ae++)}for(let fe of Nn)fe.count=ae,fe.instanceMatrix.needsUpdate=!0}let ei={},kn=[];function ti(_,R){if(Yd(ei,_)){for(let H of kn)o.remove(H),H.traverse(Z=>{Z.isSprite&&($e.delete(Z),Z.material.map.dispose(),Z.material.dispose()),Z.userData.privateGeometry&&Z.geometry.dispose()});kn=[];for(let H of _||[]){if(H.type==="return")continue;let Z=new Ue;Z.position.set(H.x/Te,Dn(H.x/Te,H.y/Te),H.y/Te),o.add(Z),kn.push(Z);let ae=new ct(new ar(.4,.46,28),g(H.done?"#6d9c89":"#8cebd5",{side:Wt}));if(ae.rotation.x=-Math.PI/2,ae.position.y=.03,ae.userData.privateGeometry=!0,Z.add(ae),H.type==="fragment"&&(A(Z,"#e1c587",[0,.38,0],[.37,.45,.06]),A(Z,"#a68752",[0,.18,-.035],[.035,.42,.035]),A(Z,"#826b4d",[0,.4,.035],[.19,.022,.02])),H.type==="rune"){v(Z,"#87998a",[0,.26,0],[.27,.3,.21]);let de=D(H.symbol,"#ffe29b");de.position.y=.8,de.scale.set(.65,.32,1),Z.add(de)}if(H.type==="chest"){A(Z,"#795a39",[0,.2,0],[.65,.4,.44]),A(Z,"#bb9251",[0,.42,0],[.69,.06,.46]);for(let de of[-.21,.21])A(Z,"#f1d584",[de,.23,.235],[.05,.36,.025])}if(H.type==="signal"){for(let de of[-1,1]){let Ke=C(Z,"#8a6d49",[de*.22,.55,0],[.04,1.1,.04]);Ke.rotation.z=de*.22}if(A(Z,"#927652",[0,1.1,0],[.7,.16,.45]),H.done){let de=v(Z,"#ffe28d",[0,1.34,0],[.16,.21,.16]);de.material=g("#ffe28d",{emissive:"#ffa842",emissiveIntensity:1})}else A(Z,"#344f57",[0,1.3,0],[.3,.18,.24])}let fe=D(H.label,H.done?"#b5d1c5":"#ffe9b5");fe.position.y=H.type==="signal"?1.95:1.35,Z.add(fe),Z.userData.done=H.done}}for(let H of kn)H.children[0].scale.setScalar(H.userData.done?1:1+Math.sin(R*2.8)*.05)}let qi=[];for(let _=0;_<4;_++){let R=new Ft().setFromPoints([new k(-.3,0,0),new k(0,-.08,0),new k(.3,0,0)]),H=new rr(R,new zi({color:"#fff7de"}));o.add(H),qi.push(H)}let Ei=Math.atan2(-130,-60),Ai=0,Yi=4.8,_n=!0,ni=!0,w=0,W=null,K=!1,j=0,X="first",ce={},ve=-1/0,Ee=0,Me=new Ue;c.add(Me);let Xe=C(Me,"#52625f",[.28,-.36,-.42],[.1,.34,.1]);Xe.rotation.x=-.65;let Je=v(Me,"#dda879",[.29,-.27,-.58],[.055,.08,.055]),Fe=new Ue;Me.add(Fe);let lt=C(Fe,"#876742",[.32,-.17,-.75],[.014,1.55,.014]);lt.rotation.x=-.22;let ht=v(Fe,"#b3b6ac",[.32,.61,-.91],[.039,.12,.025]),Ct={};for(let _ of["gather","fish","cook"]){let R=new Ue;R.position.set(.29,-.26,-.61),Me.add(R),Jd(_,R,{cube:A,tube:C,ell:v}),Ct[_]=R}let ut=Object.entries(Ct),Rt={down:0,up:Math.PI,left:-Math.PI/2,right:Math.PI/2},Be=new Set;Me.traverse(_=>{_.isMesh&&(_.castShadow=!1,_.receiveShadow=!1,_.frustumCulled=!1)});let vt=new k,it=new k,Nt=new k,Fn=new k,Xt={position:Nt,target:vt},cn={x:0,z:0,surface:0,yaw:0,pitch:0,mode:"first",distance:4.8,bob:0},It=new k,$t=new ur,Kt=[ye,le],jt=[],an={position:new k},Ci=0,zn=_=>_.object.isMesh&&_.distance>.1;function Ss(_,R=0){!_n||t().paused||(Ei+=_,Ai=Wi(Ai+R,X==="first"?-1.12:-.05,X==="first"?1.12:.75))}function ws(_){X=_==="third"?"third":"first",Ai=_==="third"?.22:0,c.fov=_==="third"?58:72,c.updateProjectionMatrix(),W=null,ni=!0,Ms(ce,!0,!0)}n.addEventListener("pointerdown",_=>{let R=t();!_n||!R.play||R.paused||_.button>0||W||(W={id:_.pointerId,x:_.clientX,y:_.clientY},n.setPointerCapture(_.pointerId))}),n.addEventListener("pointermove",_=>{!W||W.id!==_.pointerId||(Ss(-(_.clientX-W.x)*.006,(_.clientY-W.y)*.005),W.x=_.clientX,W.y=_.clientY)});let Ts=_=>{W?.id===_.pointerId&&(W=null)};for(let _ of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(_,Ts);n.addEventListener("wheel",_=>{!_n||t().paused||(_.preventDefault(),X==="first"?(c.fov=Wi(c.fov+_.deltaY*.025,58,85),c.updateProjectionMatrix()):Yi=Wi(Yi+_.deltaY*.004,2.5,8))},{passive:!1}),n.addEventListener("webglcontextlost",_=>{_.preventDefault(),K=!0,_n=!1,W=null,i()}),n.addEventListener("webglcontextrestored",()=>{K=!1,ni=!0,ve=-1/0,Ms(ce,!0,!0)});function br(){Ms(ce,!0,!0),r.setSize(innerWidth,innerHeight,!1),c.aspect=innerWidth/innerHeight,c.updateProjectionMatrix()}function Dl(_){if(!_n||K)return;let R=t();if(!Ms(ce,R.paused))return;let H=_/1e3,Z=w?Wi((_-w)/1e3,0,.06):1/60;w=_,zd(Y,H),Xd(M,R.basePos,R.baseLevel),at=M.layout,P=M.elevation,nt(Ye,R.labels?.board,"#ffe087"),Ye.tag&&(Ye.tag.position.y=1.65,Ye.tag.scale.set(1.4,.36,1)),V.visible=!!R.trail,R.trail&&(ma(Se,R.trail)&&V.position.set(Se.x,Se.y,Se.z),ge.material.opacity=.35+.13*Math.sin(H*3),(se!==R.trailNumber||me?.userData.text!==(R.trailNumber===4?R.labels?.finish||"4":R.trailNumber?String(R.trailNumber):R.trail.label))&&(me&&($e.delete(me),V.remove(me),me.material.map.dispose(),me.material.dispose()),se=R.trailNumber,me=D(se===4?R.labels?.finish||"4":se?String(se):R.trail.label,"#54e4ef"),me.userData.text=se===4?R.labels?.finish||"4":se?String(se):R.trail.label,me.position.y=1.5,me.scale.set(R.trailNumber?1:2.45,.4,1),V.add(me))),nt(At,R.labels?.leon,"#b49966"),nt(Ie,R.labels?.nela,"#609991");let ae=R.P.x/Te,fe=R.P.y/Te;u.update(),B.update(H,at),J.value=H,ie.material.uniforms.uTime.value=H,Ce(R.objects,R.resourceRevision),Xi(R.fishes,H,R.sea,R.P),Mn=Nn[0].count,ti(R.chapterMarkers,H),Re(ke,R.P,Number.isFinite(R.heading)?R.heading:Rt[R.face]||0,R.moving,H,Z,R.fast?5.25:3,R.sea,R.raft,R.motion,R.spear,R.blocked,Ld(X)),At.root.visible=Ie.root.visible=!0,Re(At,R.leon,Math.atan2(ae-R.leon.x/Te,fe-R.leon.y/Te),!1,H,Z,0,R.sea),Re(Ie,R.nela,Math.atan2(ae-R.nela.x/Te,fe-R.nela.y/Te),!1,H,Z,0,R.sea),Be.clear();for(let We of R.players){if(We.id===R.you)continue;Be.add(We.id);let ze=De.get(We.id),Qt,qt=R.looks[We.slot]||T_;!ze||ze.name!==We.name?(Qt=We.appearance?xl(We.appearance):qt,ze&&Es(ze),ze=qe(Qt,"player",We.name),ze.remoteLook={...Qt},ze.remoteMotion={kind:null,phase:0},De.set(We.id,ze)):Qt=We.appearance?Qc(ze.remoteLook,We.appearance):qt,Ut(ze,Qt);let Vn=ze.lastX===null?0:We.point.x/Te-ze.lastX,St=ze.lastZ===null?0:We.point.y/Te-ze.lastZ,Ge=We.moving&&Math.hypot(Vn,St)>.002?Math.atan2(Vn,St):Rt[We.face]||0,bt=Dd(ze.remoteMotion,We.motion,We.received,_);Re(ze,We.point,Ge,We.moving,H,Z,3,R.sea,!1,bt,R.spearOwned&&!We.spearStowed,We.blocked)}for(let[We,ze]of De)Be.has(We)||(Es(ze),De.delete(We));Ut(ke,R.appearance||xl()),ma(xe,R.leon,.9,.15)&&(le.position.set(xe.x,xe.y,xe.z),le.updateWorldMatrix(!0,!0),fn++),ma(Oe,R.chest)&&Pe.position.set(Oe.x,Oe.y,Oe.z),Pe.visible=!R.treasure,vn(R),bs(R.enemies,H);let de=at&&Math.abs(R.P.x-at.floor.x)<at.floor.w/2&&Math.abs(R.P.y-at.floor.y)<at.floor.h/2;for(let We of gt)We.opacity=de&&X==="third"?.23:1,We.depthWrite=!(de&&X==="third");yt&&(yt.scale.y=1+Math.sin(H*13)*.18,Ze.intensity=2.5+Math.sin(H*17)*.4);let Ke=Pd(R.objects,R.P);he.visible=!!(R.play&&!R.paused&&Ke),Ke&&ma(_e,Ke)&&he.position.set(_e.x,_e.y+.03,_e.z);for(let We=0;We<qi.length;We++){let ze=qi[We];ze.position.set(19+Math.sin(H*.08+We*1.7)*8,7+Math.sin(H*.2+We)*.5,12+Math.cos(H*.1+We*1.3)*5),ze.rotation.y=H*.1+We,ze.scale.y=1+Math.sin(H*7+We)*.5}let Ne=R.moving&&!R.paused?Math.sin(ke.phase*2)*.012:0;if(cn.x=ae,cn.z=fe,cn.surface=ke.root.position.y,cn.yaw=Ei,cn.pitch=Ai,cn.mode=X,cn.distance=Yi*(c.aspect<.85?1.12:1),cn.bob=Ne,vl(cn,Xt),X==="third"){Nt.y=Math.max(Nt.y,Dn(Nt.x,Nt.z)+.55);let We=an;if(Fd(We,Nt,vt,fn)){It.subVectors(Nt,vt);let ze=It.length();It.normalize(),$t.set(vt,It),$t.near=.08,$t.far=ze,Ci++;let Qt=Ml($t,Kt,!0,jt).find(zn);Qt&&Nt.copy(vt).addScaledVector(It,Math.max(.35,Qt.distance-.15)),We.position.copy(Nt)}else Nt.copy(We.position)}X==="first"||ni||Fn.distanceTo(ke.root.position)>5?(c.position.copy(Nt),it.copy(vt),ni=!1):(th(c.position,Nt,Z,8),th(it,vt,Z,12)),c.lookAt(X==="first"?vt:it),Fn.copy(ke.root.position),Gd($e,c,innerWidth,_t);let et=!!R.spear||!!R.motion&&(R.motion.kind==="gather"||R.motion.kind==="fish"||R.motion.kind==="cook"),pt=X==="first"&&R.play&&et&&Ud(X,R.play,et,R.sea(R.P.x,R.P.y));if(Me.visible=pt,pt){Fe.visible=!!R.spear&&!R.motion;for(let[We,ze]of ut)ze.visible=R.motion?.kind===We;Me.position.y=Ne*.4,Me.rotation.x=R.motion?Math.sin(R.motion.phase*Math.PI*2)*.07:0,Je.material=g(R.appearance?.skin||"#dda879"),Xe.material=g(R.appearance?.shirt||"#4c9cba")}let dt=_-ve>=a;r.shadowMap.needsUpdate=dt,dt&&(bl(h,ae,fe),ve=_,Ee++),ie.position.copy(c.position),te.update(H,c.position),r.render(o,c),R.play&&Z>.038?j+=Z:j=Math.max(0,j-Z),j>3&&r.getPixelRatio()>.85&&(r.setPixelRatio(Math.max(.85,r.getPixelRatio()-.15)),br(),j=0)}function Es(_){o.remove(_.root),_.tag&&($e.delete(_.tag),_.tag.material.map.dispose(),_.tag.material.dispose())}function ga(_){return _n=!!_&&!K,W=null,ni=!0,w=0,ve=-1/0,_n&&Ms(ce,!0,!0),_n}function F(){_n=!1,r.dispose(),O.dispose(),z.dispose(),te.dispose(),ie.geometry.dispose(),ie.material.dispose(),I.traverse(_=>{_.geometry&&_.geometry.dispose(),_.material&&_.material.dispose()}),E.dispose(),B.dispose(),u.dispose(),Qe.dispose();for(let _ of[...Object.values($),...Nn])_.geometry.dispose(),_.dispose();for(let _ of f.values())_.dispose();for(let _ of d.values())_.dispose()}return{frame:Dl,resize:br,orbit:Ss,setEnabled:ga,setCamera:ws,dispose:F,vector:(_,R)=>Id(_,R,Ei),get enabled(){return _n},get yaw(){return Ei},get cameraMode(){return X},stats:()=>({calls:r.info.render.calls,triangles:r.info.render.triangles,pixelRatio:r.getPixelRatio(),people:De.size+3,visibleFish:Mn,camera:X,eye:c.position.toArray(),cameraRaycasts:Ci,resourceStaticUpdates:Ae,shadowUpdates:Ee,materials:u.stats()})}}return hf(A_);})();
