var MyIsland3D=(()=>{var Vl=Object.defineProperty;var Sf=Object.getOwnPropertyDescriptor;var wf=Object.getOwnPropertyNames;var Tf=Object.prototype.hasOwnProperty;var Af=(n,e)=>{for(var t in e)Vl(n,t,{get:e[t],enumerable:!0})},Ef=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of wf(e))!Tf.call(n,r)&&r!==t&&Vl(n,r,{get:()=>e[r],enumerable:!(i=Sf(e,r))||i.enumerable});return n};var Cf=n=>Ef(Vl({},"__esModule",{value:!0}),n);var q_={};Af(q_,{SCALE:()=>Te,actionPose:()=>df,avatarRigNeedsPose:()=>Gd,baseElevation:()=>gu,buildBase:()=>uf,buildHuman:()=>_u,cameraVector:()=>Od,commitFishBatches:()=>mf,create:()=>X_,createCampaign:()=>V_,drawCampaign2D:()=>pu,fishPose:()=>ff,fishWithinRenderRange:()=>pf,freezeLegacyStaticTransforms:()=>mu,heldRigNeedsPose:()=>qd,islandShadowInterval:()=>gf,legPose:()=>nf,legacyPersonNeedsPose:()=>Nl,nearestWithin:()=>Bd,replaceCameraObstacle:()=>Yd,resourceMatricesNeedUpdate:()=>$d,scaleWorldLabels:()=>ef,terrainHeight:()=>Nn,updateAppearanceKey:()=>rf,updateAvatarFrameCycle:()=>Jd,updateAvatarPoseCycle:()=>Qd,updateBaseFrame:()=>sf,updateBoarFrameState:()=>jd,updateBoarGait:()=>Kd,updateBuildingState:()=>lf,updateCameraCollisionState:()=>Zd,updateChapterState:()=>cf,updateFishPart:()=>Fl,updateIslandFrameState:()=>Ss,updateLegacyPersonRoot:()=>of,updateLegacyPersonSurface:()=>af,updateLegacyRigHeading:()=>Wd,updateLegacyRigPoseLod:()=>Hd,updateLegacyYaw:()=>Xd,updateNearestWithin:()=>kd,updateRemoteMotion:()=>Vd,updateTerrainAnchor:()=>_a,updateWorldLabelScales:()=>tf,walkSurface:()=>xu});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Zu=0,Mc=1,Ju=2;var bc=1,ss=2,ai=3,_i=0,mn=1,qt=2,Si=0,er=1,Sc=2,wc=3,Tc=4,$u=5,Fi=100,Ku=101,ju=102,Qu=103,eh=104,th=200,nh=201,ih=202,rh=203,Za=204,Ja=205,sh=206,ah=207,oh=208,lh=209,ch=210,uh=211,hh=212,dh=213,fh=214,bo=0,So=1,wo=2,tr=3,To=4,Ao=5,Eo=6,Co=7,Ac=0,ph=1,mh=2,wi=0,gh=1,xh=2,_h=3,as=4,yh=5,vh=6,Mh=7;var Ec=300,fr=301,pr=302,Ro=303,Io=304,aa=306,Wr=1e3,Ni=1001,$a=1002,wn=1003,bh=1004;var oa=1005;var Yn=1006,Po=1007;var Vi=1008;var $n=1009,Cc=1010,Rc=1011,os=1012,Do=1013,Gi=1014,Kn=1015,ls=1016,Lo=1017,Uo=1018,cs=1020,Ic=35902,Pc=35899,Dc=1021,Lc=1022,Vn=1023,Xr=1026,us=1027,No=1028,Fo=1029,Uc=1030,zo=1031;var Oo=1033,la=33776,ca=33777,ua=33778,ha=33779,Bo=35840,ko=35841,Vo=35842,Go=35843,Ho=36196,Wo=37492,Xo=37496,qo=37808,Yo=37809,Zo=37810,Jo=37811,$o=37812,Ko=37813,jo=37814,Qo=37815,el=37816,tl=37817,nl=37818,il=37819,rl=37820,sl=37821,al=36492,ol=36494,ll=36495,cl=36283,ul=36284,hl=36285,dl=36286;var Hs=2300,Ka=2301,qa=2302,fc=2400,pc=2401,mc=2402;var Sh=3200,wh=3201;var Nc=0,Th=1,jn="",Qt="srgb",nr="srgb-linear",Ws="linear",Ot="srgb";var Qi=7680;var gc=519,Ah=512,Eh=513,Ch=514,Fc=515,Rh=516,Ih=517,Ph=518,Dh=519,ja=35044;var zc="300 es",qn=2e3,Xs=2001;var yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yu=1234567,Vs=Math.PI/180,qr=180/Math.PI;function gi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function xt(n,e,t){return Math.max(e,Math.min(t,n))}function Oc(n,e){return(n%e+e)%e}function Rf(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function If(n,e,t){return n!==e?(t-n)/(e-n):0}function Gs(n,e,t){return(1-t)*n+t*e}function Pf(n,e,t,i){return Gs(n,e,1-Math.exp(-t*i))}function Df(n,e=1){return e-Math.abs(Oc(n,e*2)-e)}function Lf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Uf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Nf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Ff(n,e){return n+Math.random()*(e-n)}function zf(n){return n*(.5-Math.random())}function Of(n){n!==void 0&&(yu=n);let e=yu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bf(n){return n*Vs}function kf(n){return n*qr}function Vf(n){return(n&n-1)===0&&n!==0}function Gf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Hf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Wf(n,e,t,i,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),d=a((e-i)/2),f=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,c*h,c*d,o*l);break;case"YZY":n.set(c*d,o*u,c*h,o*l);break;case"ZXZ":n.set(c*h,c*d,o*u,o*l);break;case"XZX":n.set(o*u,c*g,c*f,o*l);break;case"YXY":n.set(c*f,o*u,c*g,o*l);break;case"ZYZ":n.set(c*g,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var da={DEG2RAD:Vs,RAD2DEG:qr,generateUUID:gi,clamp:xt,euclideanModulo:Oc,mapLinear:Rf,inverseLerp:If,lerp:Gs,damp:Pf,pingpong:Df,smoothstep:Lf,smootherstep:Uf,randInt:Nf,randFloat:Ff,randFloatSpread:zf,seededRandom:Of,degToRad:Bf,radToDeg:kf,isPowerOfTwo:Vf,ceilPowerOfTwo:Gf,floorPowerOfTwo:Hf,setQuaternionFromProperEuler:Wf,normalize:zt,denormalize:Xn},We=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},vi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3],d=s[a+0],f=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(h!==x||c!==d||l!==f||u!==g){let m=1-o,p=c*d+l*f+u*g+h*x,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let E=Math.sqrt(_),C=Math.atan2(E,p*M);m=Math.sin(m*C)/E,o=Math.sin(o*C)/E}let y=o*M;if(c=c*m+d*y,l=l*m+f*y,u=u*m+g*y,h=h*m+x*y,m===1-o){let E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-o*f,e[t+2]=l*g+u*f+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),h=o(s/2),d=c(i/2),f=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(i>o&&i>h){let f=2*Math.sqrt(1+i-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>h){let f=2*Math.sqrt(1+o-i-h);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-i-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+c*l+a*h-o*u,this.y=i+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gl.copy(this).projectOnVector(e),this.sub(Gl)}reflect(e){return this.sub(Gl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gl=new O,vu=new vi,ut=class n{constructor(e,t,i,r,s,a,o,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],x=r[0],m=r[3],p=r[6],M=r[1],_=r[4],y=r[7],E=r[2],C=r[5],D=r[8];return s[0]=a*x+o*M+c*E,s[3]=a*m+o*_+c*C,s[6]=a*p+o*y+c*D,s[1]=l*x+u*M+h*E,s[4]=l*m+u*_+h*C,s[7]=l*p+u*y+h*D,s[2]=d*x+f*M+g*E,s[5]=d*m+f*_+g*C,s[8]=d*p+f*y+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,f=l*s-a*c,g=t*h+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(r*l-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=d*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=f*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Hl.makeScale(e,t)),this}rotate(e){return this.premultiply(Hl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Hl=new ut;function Bc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Yr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Lh(){let n=Yr("canvas");return n.style.display="block",n}var Mu={};function Zr(n){n in Mu||(Mu[n]=!0,console.warn(n))}function Uh(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var bu=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Su=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xf(){let n={enabled:!0,workingColorSpace:nr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ot&&(r.r=xi(r.r),r.g=xi(r.g),r.b=xi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ot&&(r.r=Hr(r.r),r.g=Hr(r.g),r.b=Hr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===jn?Ws:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Zr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Zr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[nr]:{primaries:e,whitePoint:i,transfer:Ws,toXYZ:bu,fromXYZ:Su,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:i,transfer:Ot,toXYZ:bu,fromXYZ:Su,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),n}var Et=Xf();function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Tr,Qa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Tr===void 0&&(Tr=Yr("canvas")),Tr.width=e.width,Tr.height=e.height;let r=Tr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Tr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Yr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=xi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xi(t[i]/255)*255):t[i]=xi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},qf=0,Jr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Wl(r[a].image)):s.push(Wl(r[a]))}else s=Wl(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Wl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yf=0,Xl=new O,vn=class n extends yi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ni,r=Ni,s=Yn,a=Vi,o=Vn,c=$n,l=n.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=gi(),this.name="",this.source=new Jr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xl).x}get height(){return this.source.getSize(Xl).y}get depth(){return this.source.getSize(Xl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ec)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wr:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case $a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wr:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case $a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Ec;vn.DEFAULT_ANISOTROPY=1;var Ct=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,y=(f+1)/2,E=(p+1)/2,C=(u+d)/4,D=(h+x)/4,F=(g+m)/4;return _>y&&_>E?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=C/i,s=D/i):y>E?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=F/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=D/s,r=F/s),this.set(i,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-x)/M,this.z=(d-u)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},eo=class extends yi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new vn(r);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Jr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends eo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},qs=class extends vn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var to=class extends vn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ri=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gn):Gn.fromBufferAttribute(s,a),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ba.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ba.copy(i.boundingBox)),ba.applyMatrix4(e.matrixWorld),this.union(ba)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),Sa.subVectors(this.max,Is),Ar.subVectors(e.a,Is),Er.subVectors(e.b,Is),Cr.subVectors(e.c,Is),Ri.subVectors(Er,Ar),Ii.subVectors(Cr,Er),Ji.subVectors(Ar,Cr);let t=[0,-Ri.z,Ri.y,0,-Ii.z,Ii.y,0,-Ji.z,Ji.y,Ri.z,0,-Ri.x,Ii.z,0,-Ii.x,Ji.z,0,-Ji.x,-Ri.y,Ri.x,0,-Ii.y,Ii.x,0,-Ji.y,Ji.x,0];return!ql(t,Ar,Er,Cr,Sa)||(t=[1,0,0,0,1,0,0,0,1],!ql(t,Ar,Er,Cr,Sa))?!1:(wa.crossVectors(Ri,Ii),t=[wa.x,wa.y,wa.z],ql(t,Ar,Er,Cr,Sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ui=[new O,new O,new O,new O,new O,new O,new O,new O],Gn=new O,ba=new ri,Ar=new O,Er=new O,Cr=new O,Ri=new O,Ii=new O,Ji=new O,Is=new O,Sa=new O,wa=new O,$i=new O;function ql(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){$i.fromArray(n,s);let o=r.x*Math.abs($i.x)+r.y*Math.abs($i.y)+r.z*Math.abs($i.z),c=e.dot($i),l=t.dot($i),u=i.dot($i);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Zf=new ri,Ps=new O,Yl=new O,Mi=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Zf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ps.subVectors(e,this.center);let t=Ps.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ps,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ps.copy(e.center).add(Yl)),this.expandByPoint(Ps.copy(e.center).sub(Yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},hi=new O,Zl=new O,Ta=new O,Pi=new O,Jl=new O,Aa=new O,$l=new O,$r=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Zl.copy(e).add(t).multiplyScalar(.5),Ta.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(Zl);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Ta),o=Pi.dot(this.direction),c=-Pi.dot(Ta),l=Pi.lengthSq(),u=Math.abs(1-a*a),h,d,f,g;if(u>0)if(h=a*c-o,d=a*o-c,g=s*u,h>=0)if(d>=-g)if(d<=g){let x=1/u;h*=x,d*=x,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Zl).addScaledVector(Ta,d),f}intersectSphere(e,t){hi.subVectors(e.center,this.origin);let i=hi.dot(this.direction),r=hi.dot(hi)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,i,r,s){Jl.subVectors(t,e),Aa.subVectors(i,e),$l.crossVectors(Jl,Aa);let a=this.direction.dot($l),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pi.subVectors(this.origin,e);let c=o*this.direction.dot(Aa.crossVectors(Pi,Aa));if(c<0)return null;let l=o*this.direction.dot(Jl.cross(Pi));if(l<0||c+l>a)return null;let u=-o*Pi.dot($l);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Lt=class n{constructor(e,t,i,r,s,a,o,c,l,u,h,d,f,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,h,d,f,g,x,m)}set(e,t,i,r,s,a,o,c,l,u,h,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Rr.setFromMatrixColumn(e,0).length(),s=1/Rr.setFromMatrixColumn(e,1).length(),a=1/Rr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=a*u,f=a*h,g=o*u,x=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d-x*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*u,f=a*h,g=o*u,x=o*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jf,e,$f)}lookAt(e,t,i){let r=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),Di.crossVectors(i,In),Di.lengthSq()===0&&(Math.abs(i.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Di.crossVectors(i,In)),Di.normalize(),Ea.crossVectors(In,Di),r[0]=Di.x,r[4]=Ea.x,r[8]=In.x,r[1]=Di.y,r[5]=Ea.y,r[9]=In.y,r[2]=Di.z,r[6]=Ea.z,r[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],M=i[3],_=i[7],y=i[11],E=i[15],C=r[0],D=r[4],F=r[8],T=r[12],b=r[1],A=r[5],z=r[9],U=r[13],R=r[2],L=r[6],G=r[10],q=r[14],B=r[3],ne=r[7],re=r[11],Me=r[15];return s[0]=a*C+o*b+c*R+l*B,s[4]=a*D+o*A+c*L+l*ne,s[8]=a*F+o*z+c*G+l*re,s[12]=a*T+o*U+c*q+l*Me,s[1]=u*C+h*b+d*R+f*B,s[5]=u*D+h*A+d*L+f*ne,s[9]=u*F+h*z+d*G+f*re,s[13]=u*T+h*U+d*q+f*Me,s[2]=g*C+x*b+m*R+p*B,s[6]=g*D+x*A+m*L+p*ne,s[10]=g*F+x*z+m*G+p*re,s[14]=g*T+x*U+m*q+p*Me,s[3]=M*C+_*b+y*R+E*B,s[7]=M*D+_*A+y*L+E*ne,s[11]=M*F+_*z+y*G+E*re,s[15]=M*T+_*U+y*q+E*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+s*c*h-r*l*h-s*o*d+i*l*d+r*o*f-i*c*f)+x*(+t*c*f-t*l*d+s*a*d-r*a*f+r*l*u-s*c*u)+m*(+t*l*h-t*o*f-s*a*h+i*a*f+s*o*u-i*l*u)+p*(-r*o*u-t*c*h+t*o*d+r*a*h-i*a*d+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],M=h*m*l-x*d*l+x*c*f-o*m*f-h*c*p+o*d*p,_=g*d*l-u*m*l-g*c*f+a*m*f+u*c*p-a*d*p,y=u*x*l-g*h*l+g*o*f-a*x*f-u*o*p+a*h*p,E=g*h*c-u*x*c-g*o*d+a*x*d+u*o*m-a*h*m,C=t*M+i*_+r*y+s*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/C;return e[0]=M*D,e[1]=(x*d*s-h*m*s-x*r*f+i*m*f+h*r*p-i*d*p)*D,e[2]=(o*m*s-x*c*s+x*r*l-i*m*l-o*r*p+i*c*p)*D,e[3]=(h*c*s-o*d*s-h*r*l+i*d*l+o*r*f-i*c*f)*D,e[4]=_*D,e[5]=(u*m*s-g*d*s+g*r*f-t*m*f-u*r*p+t*d*p)*D,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*p-t*c*p)*D,e[7]=(a*d*s-u*c*s+u*r*l-t*d*l-a*r*f+t*c*f)*D,e[8]=y*D,e[9]=(g*h*s-u*x*s-g*i*f+t*x*f+u*i*p-t*h*p)*D,e[10]=(a*x*s-g*o*s+g*i*l-t*x*l-a*i*p+t*o*p)*D,e[11]=(u*o*s-a*h*s-u*i*l+t*h*l+a*i*f-t*o*f)*D,e[12]=E*D,e[13]=(u*x*r-g*h*r+g*i*d-t*x*d-u*i*m+t*h*m)*D,e[14]=(g*o*r-a*x*r-g*i*c+t*x*c+a*i*m-t*o*m)*D,e[15]=(a*h*r-u*o*r+u*i*c-t*h*c-a*i*d+t*o*d)*D,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,d=s*l,f=s*u,g=s*h,x=a*u,m=a*h,p=o*h,M=c*l,_=c*u,y=c*h,E=i.x,C=i.y,D=i.z;return r[0]=(1-(x+p))*E,r[1]=(f+y)*E,r[2]=(g-_)*E,r[3]=0,r[4]=(f-y)*C,r[5]=(1-(d+p))*C,r[6]=(m+M)*C,r[7]=0,r[8]=(g+_)*D,r[9]=(m-M)*D,r[10]=(1-(d+x))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Rr.set(r[0],r[1],r[2]).length(),a=Rr.set(r[4],r[5],r[6]).length(),o=Rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Hn.copy(this);let l=1/s,u=1/a,h=1/o;return Hn.elements[0]*=l,Hn.elements[1]*=l,Hn.elements[2]*=l,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=h,Hn.elements[9]*=h,Hn.elements[10]*=h,t.setFromRotationMatrix(Hn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=qn,c=!1){let l=this.elements,u=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),g,x;if(c)g=s/(a-s),x=a*s/(a-s);else if(o===qn)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Xs)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=qn,c=!1){let l=this.elements,u=2/(t-e),h=2/(i-r),d=-(t+e)/(t-e),f=-(i+r)/(i-r),g,x;if(c)g=1/(a-s),x=a/(a-s);else if(o===qn)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===Xs)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Rr=new O,Hn=new Lt,Jf=new O(0,0,0),$f=new O(1,1,1),Di=new O,Ea=new O,In=new O,wu=new Lt,Tu=new vi,Zn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tu.setFromEuler(this),this.setFromQuaternion(Tu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var Kr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Kf=0,Au=new O,Ir=new vi,di=new Lt,Ca=new O,Ds=new O,jf=new O,Qf=new vi,Eu=new O(1,0,0),Cu=new O(0,1,0),Ru=new O(0,0,1),Iu={type:"added"},ep={type:"removed"},Pr={type:"childadded",child:null},Kl={type:"childremoved",child:null},It=class n extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new O,t=new Zn,i=new vi,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new ut}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(Eu,e)}rotateY(e){return this.rotateOnAxis(Cu,e)}rotateZ(e){return this.rotateOnAxis(Ru,e)}translateOnAxis(e,t){return Au.copy(e).applyQuaternion(this.quaternion),this.position.add(Au.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eu,e)}translateY(e){return this.translateOnAxis(Cu,e)}translateZ(e){return this.translateOnAxis(Ru,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ca.copy(e):Ca.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Ds,Ca,this.up):di.lookAt(Ca,Ds,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),Ir.setFromRotationMatrix(di),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Iu),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ep),Kl.child=e,this.dispatchEvent(Kl),Kl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Iu),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,e,jf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,Qf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};It.DEFAULT_UP=new O(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=new O,fi=new O,jl=new O,pi=new O,Dr=new O,Lr=new O,Pu=new O,Ql=new O,ec=new O,tc=new O,nc=new Ct,ic=new Ct,rc=new Ct,mi=class n{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Wn.subVectors(e,t),r.cross(Wn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Wn.subVectors(r,t),fi.subVectors(i,t),jl.subVectors(e,t);let a=Wn.dot(Wn),o=Wn.dot(fi),c=Wn.dot(jl),l=fi.dot(fi),u=fi.dot(jl),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;let d=1/h,f=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,pi.x),c.addScaledVector(a,pi.y),c.addScaledVector(o,pi.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return nc.setScalar(0),ic.setScalar(0),rc.setScalar(0),nc.fromBufferAttribute(e,t),ic.fromBufferAttribute(e,i),rc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(nc,s.x),a.addScaledVector(ic,s.y),a.addScaledVector(rc,s.z),a}static isFrontFacing(e,t,i,r){return Wn.subVectors(i,t),fi.subVectors(e,t),Wn.cross(fi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Wn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;Dr.subVectors(r,i),Lr.subVectors(s,i),Ql.subVectors(e,i);let c=Dr.dot(Ql),l=Lr.dot(Ql);if(c<=0&&l<=0)return t.copy(i);ec.subVectors(e,r);let u=Dr.dot(ec),h=Lr.dot(ec);if(u>=0&&h<=u)return t.copy(r);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(Dr,a);tc.subVectors(e,s);let f=Dr.dot(tc),g=Lr.dot(tc);if(g>=0&&f<=g)return t.copy(s);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Lr,o);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Pu.subVectors(s,r),o=(h-u)/(h-u+(f-g)),t.copy(r).addScaledVector(Pu,o);let p=1/(m+x+d);return a=x*p,o=d*p,t.copy(i).addScaledVector(Dr,a).addScaledVector(Lr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function sc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var $e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Et.workingColorSpace){return this.r=e,this.g=t,this.b=i,Et.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Et.workingColorSpace){if(e=Oc(e,1),t=xt(t,0,1),i=xt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=sc(a,s,e+1/3),this.g=sc(a,s,e),this.b=sc(a,s,e-1/3)}return Et.colorSpaceToWorking(this,r),this}setStyle(e,t=Qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){let i=Nh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Et.workingToColorSpace(yn.copy(this),e),Math.round(xt(yn.r*255,0,255))*65536+Math.round(xt(yn.g*255,0,255))*256+Math.round(xt(yn.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.workingToColorSpace(yn.copy(this),t);let i=yn.r,r=yn.g,s=yn.b,a=Math.max(i,r,s),o=Math.min(i,r,s),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Et.workingColorSpace){return Et.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Qt){Et.workingToColorSpace(yn.copy(this),e);let t=yn.r,i=yn.g,r=yn.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(Ra);let i=Gs(Li.h,Ra.h,t),r=Gs(Li.s,Ra.s,t),s=Gs(Li.l,Ra.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new $e;$e.NAMES=Nh;var tp=0,si=class extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=er,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Za,this.blendDst=Ja,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Za&&(i.blendSrc=this.blendSrc),this.blendDst!==Ja&&(i.blendDst=this.blendDst),this.blendEquation!==Fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==tr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Tn=class extends si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var tn=new O,Ia=new We,np=0,an=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:np++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ja,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ia.fromBufferAttribute(this,t),Ia.applyMatrix3(e),this.setXY(t,Ia.x,Ia.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ja&&(e.usage=this.usage),e}};var Ys=class extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Zs=class extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var tt=class extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}},ip=0,kn=new Lt,ac=new It,Ur=new O,Pn=new ri,Ls=new ri,un=new O,Ft=class n extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bc(e)?Zs:Ys)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ut().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,i){return kn.makeTranslation(e,t,i),this.applyMatrix4(kn),this}scale(e,t,i){return kn.makeScale(e,t,i),this.applyMatrix4(kn),this}lookAt(e){return ac.lookAt(e),ac.updateMatrix(),this.applyMatrix4(ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tt(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ls.setFromBufferAttribute(o),this.morphTargetsRelative?(un.addVectors(Pn.min,Ls.min),Pn.expandByPoint(un),un.addVectors(Pn.max,Ls.max),Pn.expandByPoint(un)):(Pn.expandByPoint(Ls.min),Pn.expandByPoint(Ls.max))}Pn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)un.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(un));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)un.fromBufferAttribute(o,l),c&&(Ur.fromBufferAttribute(e,l),un.add(Ur)),r=Math.max(r,i.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<i.count;F++)o[F]=new O,c[F]=new O;let l=new O,u=new O,h=new O,d=new We,f=new We,g=new We,x=new O,m=new O;function p(F,T,b){l.fromBufferAttribute(i,F),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,b),d.fromBufferAttribute(s,F),f.fromBufferAttribute(s,T),g.fromBufferAttribute(s,b),u.sub(l),h.sub(l),f.sub(d),g.sub(d);let A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(A),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(A),o[F].add(x),o[T].add(x),o[b].add(x),c[F].add(m),c[T].add(m),c[b].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let F=0,T=M.length;F<T;++F){let b=M[F],A=b.start,z=b.count;for(let U=A,R=A+z;U<R;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let _=new O,y=new O,E=new O,C=new O;function D(F){E.fromBufferAttribute(r,F),C.copy(E);let T=o[F];_.copy(T),_.sub(E.multiplyScalar(E.dot(T))).normalize(),y.crossVectors(C,T);let A=y.dot(c[F])<0?-1:1;a.setXYZW(F,_.x,_.y,_.z,A)}for(let F=0,T=M.length;F<T;++F){let b=M[F],A=b.start,z=b.count;for(let U=A,R=A+z;U<R;U+=3)D(e.getX(U+0)),D(e.getX(U+1)),D(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let r=new O,s=new O,a=new O,o=new O,c=new O,l=new O,u=new O,h=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u),f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new an(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=e(c,i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Du=new Lt,Ki=new $r,Pa=new Mi,Lu=new O,Da=new O,La=new O,Ua=new O,oc=new O,Na=new O,Uu=new O,Fa=new O,dt=class extends It{constructor(e=new Ft,t=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Na.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=o[c],h=s[c];u!==0&&(oc.fromBufferAttribute(h,e),a?Na.addScaledVector(oc,u):Na.addScaledVector(oc.sub(t),u))}t.add(Na)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(s),Ki.copy(e.ray).recast(e.near),!(Pa.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(Pa,Lu)===null||Ki.origin.distanceToSquared(Lu)>(e.far-e.near)**2))&&(Du.copy(s).invert(),Ki.copy(e.ray).applyMatrix4(Du),!(i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ki)))}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,E=_;y<E;y+=3){let C=o.getX(y),D=o.getX(y+1),F=o.getX(y+2);r=za(this,p,e,i,l,u,h,C,D,F),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let M=o.getX(m),_=o.getX(m+1),y=o.getX(m+2);r=za(this,a,e,i,l,u,h,M,_,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,E=_;y<E;y+=3){let C=y,D=y+1,F=y+2;r=za(this,p,e,i,l,u,h,C,D,F),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let M=m,_=m+1,y=m+2;r=za(this,a,e,i,l,u,h,M,_,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function rp(n,e,t,i,r,s,a,o){let c;if(e.side===mn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===_i,o),c===null)return null;Fa.copy(o),Fa.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Fa);return l<t.near||l>t.far?null:{distance:l,point:Fa.clone(),object:n}}function za(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Da),n.getVertexPosition(c,La),n.getVertexPosition(l,Ua);let u=rp(n,e,t,i,Da,La,Ua,Uu);if(u){let h=new O;mi.getBarycoord(Uu,Da,La,Ua,h),r&&(u.uv=mi.getInterpolatedAttribute(r,o,c,l,h,new We)),s&&(u.uv1=mi.getInterpolatedAttribute(s,o,c,l,h,new We)),a&&(u.normal=mi.getInterpolatedAttribute(a,o,c,l,h,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new O,materialIndex:0};mi.getNormal(Da,La,Ua,d.normal),u.face=d,u.barycoord=h}return u}var pn=class n extends Ft{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(h,2));function g(x,m,p,M,_,y,E,C,D,F,T){let b=y/D,A=E/F,z=y/2,U=E/2,R=C/2,L=D+1,G=F+1,q=0,B=0,ne=new O;for(let re=0;re<G;re++){let Me=re*A-U;for(let ge=0;ge<L;ge++){let Ve=ge*b-z;ne[x]=Ve*M,ne[m]=Me*_,ne[p]=R,l.push(ne.x,ne.y,ne.z),ne[x]=0,ne[m]=0,ne[p]=C>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(ge/D),h.push(1-re/F),q+=1}}for(let re=0;re<F;re++)for(let Me=0;Me<D;Me++){let ge=d+Me+L*re,Ve=d+Me+L*(re+1),mt=d+(Me+1)+L*(re+1),nt=d+(Me+1)+L*re;c.push(ge,Ve,nt),c.push(Ve,mt,nt),B+=6}o.addGroup(f,B,T),f+=B,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function mr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Mn(n){let e={};for(let t=0;t<n.length;t++){let i=mr(n[t]);for(let r in i)e[r]=i[r]}return e}function sp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function kc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}var fl={clone:mr,merge:Mn},ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ap,this.fragmentShader=op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mr(e.uniforms),this.uniformsGroups=sp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Js=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ui=new O,Nu=new We,Fu=new We,sn=class extends Js{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,Nu,Fu),t.subVectors(Fu,Nu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Vs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Nr=-90,Fr=1,no=class extends It{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new sn(Nr,Fr,e,t);r.layers=this.layers,this.add(r);let s=new sn(Nr,Fr,e,t);s.layers=this.layers,this.add(s);let a=new sn(Nr,Fr,e,t);a.layers=this.layers,this.add(a);let o=new sn(Nr,Fr,e,t);o.layers=this.layers,this.add(o);let c=new sn(Nr,Fr,e,t);c.layers=this.layers,this.add(c);let l=new sn(Nr,Fr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Xs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},$s=class extends vn{constructor(e=[],t=fr,i,r,s,a,o,c,l,u){super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},io=class extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new $s(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new pn(5,5,5),s=new An({name:"CubemapFromEquirect",uniforms:mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:Si});s.uniforms.tEquirect.value=t;let a=new dt(r,s),o=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Yn),new no(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}},Oe=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},lp={type:"move"},jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lp)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Oe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var ir=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new $e(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},rr=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ks=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ja,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Sn=new O,Qr=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array),s=zt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new an(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},es=class extends si{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zr,Us=new O,Or=new O,Br=new O,kr=new We,Ns=new We,Fh=new Lt,Oa=new O,Fs=new O,Ba=new O,zu=new We,lc=new We,Ou=new We,js=class extends It{constructor(e=new es){if(super(),this.isSprite=!0,this.type="Sprite",zr===void 0){zr=new Ft;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ks(t,5);zr.setIndex([0,1,2,0,2,3]),zr.setAttribute("position",new Qr(i,3,0,!1)),zr.setAttribute("uv",new Qr(i,2,3,!1))}this.geometry=zr,this.material=e,this.center=new We(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Or.setFromMatrixScale(this.matrixWorld),Fh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Br.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Or.multiplyScalar(-Br.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let a=this.center;ka(Oa.set(-.5,-.5,0),Br,a,Or,r,s),ka(Fs.set(.5,-.5,0),Br,a,Or,r,s),ka(Ba.set(.5,.5,0),Br,a,Or,r,s),zu.set(0,0),lc.set(1,0),Ou.set(1,1);let o=e.ray.intersectTriangle(Oa,Fs,Ba,!1,Us);if(o===null&&(ka(Fs.set(-.5,.5,0),Br,a,Or,r,s),lc.set(0,1),o=e.ray.intersectTriangle(Oa,Ba,Fs,!1,Us),o===null))return;let c=e.ray.origin.distanceTo(Us);c<e.near||c>e.far||t.push({distance:c,point:Us.clone(),uv:mi.getInterpolation(Us,Oa,Fs,Ba,zu,lc,Ou,new We),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ka(n,e,t,i,r,s){kr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Ns.x=s*kr.x-r*kr.y,Ns.y=r*kr.x+s*kr.y):Ns.copy(kr),n.copy(e),n.x+=Ns.x,n.y+=Ns.y,n.applyMatrix4(Fh)}var ro=class extends vn{constructor(e=null,t=1,i=1,r,s,a,o,c,l=wn,u=wn,h,d){super(null,a,o,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ts=class extends an{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Vr=new Lt,Bu=new Lt,Va=[],ku=new ri,cp=new Lt,zs=new dt,Os=new Mi,Pt=class extends dt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ts(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,cp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vr),ku.copy(e.boundingBox).applyMatrix4(Vr),this.boundingBox.union(ku)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vr),Os.copy(e.boundingSphere).applyMatrix4(Vr),this.boundingSphere.union(Os)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Os.copy(this.boundingSphere),Os.applyMatrix4(i),e.ray.intersectsSphere(Os)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Vr),Bu.multiplyMatrices(i,Vr),zs.matrixWorld=Bu,zs.raycast(e,Va);for(let a=0,o=Va.length;a<o;a++){let c=Va[a];c.instanceId=s,c.object=this,t.push(c)}Va.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ts(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new ro(new Float32Array(r*this.count),r,this.count,No,Kn));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},cc=new O,up=new O,hp=new ut,ni=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=cc.subVectors(i,t).cross(up.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(cc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||hp.getNormalMatrix(e),r=this.coplanarPoint(cc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ji=new Mi,dp=new We(.5,.5),Ga=new O,ns=class{constructor(e=new ni,t=new ni,i=new ni,r=new ni,s=new ni,a=new ni){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qn,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],d=s[6],f=s[7],g=s[8],x=s[9],m=s[10],p=s[11],M=s[12],_=s[13],y=s[14],E=s[15];if(r[0].setComponents(l-a,f-u,p-g,E-M).normalize(),r[1].setComponents(l+a,f+u,p+g,E+M).normalize(),r[2].setComponents(l+o,f+h,p+x,E+_).normalize(),r[3].setComponents(l-o,f-h,p-x,E-_).normalize(),i)r[4].setComponents(c,d,m,y).normalize(),r[5].setComponents(l-c,f-d,p-m,E-y).normalize();else if(r[4].setComponents(l-c,f-d,p-m,E-y).normalize(),t===qn)r[5].setComponents(l+c,f+d,p+m,E+y).normalize();else if(t===Xs)r[5].setComponents(c,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){ji.center.set(0,0,0);let t=dp.distanceTo(e.center);return ji.radius=.7071067811865476+t,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Ga.x=r.normal.x>0?e.max.x:e.min.x,Ga.y=r.normal.y>0?e.max.y:e.min.y,Ga.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var zi=class extends si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},so=new O,ao=new O,Vu=new Lt,Bs=new $r,Ha=new Mi,uc=new O,Gu=new O,sr=class extends It{constructor(e=new Ft,t=new zi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)so.fromBufferAttribute(t,r-1),ao.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=so.distanceTo(ao);e.setAttribute("lineDistance",new tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(r),Ha.radius+=s,e.ray.intersectsSphere(Ha)===!1)return;Vu.copy(r).invert(),Bs.copy(e.ray).applyMatrix4(Vu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=u.getX(x),M=u.getX(x+1),_=Wa(this,e,Bs,c,p,M,x);_&&t.push(_)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(f),p=Wa(this,e,Bs,c,x,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=Wa(this,e,Bs,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Wa(this,e,Bs,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Wa(n,e,t,i,r,s,a){let o=n.geometry.attributes.position;if(so.fromBufferAttribute(o,r),ao.fromBufferAttribute(o,s),t.distanceSqToSegment(so,ao,uc,Gu)>i)return;uc.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(uc);if(!(l<e.near||l>e.far))return{distance:l,point:Gu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Oi=class extends vn{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Qs=class extends vn{constructor(e,t,i=Gi,r,s,a,o=wn,c=wn,l,u=Xr,h=1){if(u!==Xr&&u!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ea=class extends vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Ht=class n extends Ft{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let u=[],h=[],d=[],f=[],g=0,x=[],m=i/2,p=0;M(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(f,2));function M(){let y=new O,E=new O,C=0,D=(t-e)/i;for(let F=0;F<=s;F++){let T=[],b=F/s,A=b*(t-e)+e;for(let z=0;z<=r;z++){let U=z/r,R=U*c+o,L=Math.sin(R),G=Math.cos(R);E.x=A*L,E.y=-b*i+m,E.z=A*G,h.push(E.x,E.y,E.z),y.set(L,D,G).normalize(),d.push(y.x,y.y,y.z),f.push(U,1-b),T.push(g++)}x.push(T)}for(let F=0;F<r;F++)for(let T=0;T<s;T++){let b=x[T][F],A=x[T+1][F],z=x[T+1][F+1],U=x[T][F+1];(e>0||T!==0)&&(u.push(b,A,U),C+=3),(t>0||T!==s-1)&&(u.push(A,z,U),C+=3)}l.addGroup(p,C,0),p+=C}function _(y){let E=g,C=new We,D=new O,F=0,T=y===!0?e:t,b=y===!0?1:-1;for(let z=1;z<=r;z++)h.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;let A=g;for(let z=0;z<=r;z++){let R=z/r*c+o,L=Math.cos(R),G=Math.sin(R);D.x=T*G,D.y=m*b,D.z=T*L,h.push(D.x,D.y,D.z),d.push(0,b,0),C.x=L*.5+.5,C.y=G*.5*b+.5,f.push(C.x,C.y),g++}for(let z=0;z<r;z++){let U=E+z,R=A+z;y===!0?u.push(R,R+1,U):u.push(R+1,R,U),F+=3}l.addGroup(p,F,y===!0?1:2),p+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Jn=class n extends Ht{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},oo=class n extends Ft{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];o(r),l(i),u(),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(s.slice(),3)),this.setAttribute("uv",new tt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let _=new O,y=new O,E=new O;for(let C=0;C<t.length;C+=3)f(t[C+0],_),f(t[C+1],y),f(t[C+2],E),c(_,y,E,M)}function c(M,_,y,E){let C=E+1,D=[];for(let F=0;F<=C;F++){D[F]=[];let T=M.clone().lerp(y,F/C),b=_.clone().lerp(y,F/C),A=C-F;for(let z=0;z<=A;z++)z===0&&F===C?D[F][z]=T:D[F][z]=T.clone().lerp(b,z/A)}for(let F=0;F<C;F++)for(let T=0;T<2*(C-F)-1;T++){let b=Math.floor(T/2);T%2===0?(d(D[F][b+1]),d(D[F+1][b]),d(D[F][b])):(d(D[F][b+1]),d(D[F+1][b+1]),d(D[F+1][b]))}}function l(M){let _=new O;for(let y=0;y<s.length;y+=3)_.x=s[y+0],_.y=s[y+1],_.z=s[y+2],_.normalize().multiplyScalar(M),s[y+0]=_.x,s[y+1]=_.y,s[y+2]=_.z}function u(){let M=new O;for(let _=0;_<s.length;_+=3){M.x=s[_+0],M.y=s[_+1],M.z=s[_+2];let y=m(M)/2/Math.PI+.5,E=p(M)/Math.PI+.5;a.push(y,1-E)}g(),h()}function h(){for(let M=0;M<a.length;M+=6){let _=a[M+0],y=a[M+2],E=a[M+4],C=Math.max(_,y,E),D=Math.min(_,y,E);C>.9&&D<.1&&(_<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),E<.2&&(a[M+4]+=1))}}function d(M){s.push(M.x,M.y,M.z)}function f(M,_){let y=M*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function g(){let M=new O,_=new O,y=new O,E=new O,C=new We,D=new We,F=new We;for(let T=0,b=0;T<s.length;T+=9,b+=6){M.set(s[T+0],s[T+1],s[T+2]),_.set(s[T+3],s[T+4],s[T+5]),y.set(s[T+6],s[T+7],s[T+8]),C.set(a[b+0],a[b+1]),D.set(a[b+2],a[b+3]),F.set(a[b+4],a[b+5]),E.copy(M).add(_).add(y).divideScalar(3);let A=m(E);x(C,b+0,M,A),x(D,b+2,_,A),x(F,b+4,y,A)}}function x(M,_,y,E){E<0&&M.x===1&&(a[_]=M.x-1),y.x===0&&y.z===0&&(a[_]=E/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var ar=class n extends oo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ta=class n extends Ft{constructor(e=[new We(0,-.5),new We(.5,0),new We(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=xt(r,0,Math.PI*2);let s=[],a=[],o=[],c=[],l=[],u=1/t,h=new O,d=new We,f=new O,g=new O,x=new O,m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let M=0;M<=t;M++){let _=i+M*u*r,y=Math.sin(_),E=Math.cos(_);for(let C=0;C<=e.length-1;C++){h.x=e[C].x*y,h.y=e[C].y,h.z=e[C].x*E,a.push(h.x,h.y,h.z),d.x=M/t,d.y=C/(e.length-1),o.push(d.x,d.y);let D=c[3*C+0]*y,F=c[3*C+1],T=c[3*C+0]*E;l.push(D,F,T)}}for(let M=0;M<t;M++)for(let _=0;_<e.length-1;_++){let y=_+M*e.length,E=y,C=y+e.length,D=y+e.length+1,F=y+1;s.push(E,C,F),s.push(D,F,C)}this.setIndex(s),this.setAttribute("position",new tt(a,3)),this.setAttribute("uv",new tt(o,2)),this.setAttribute("normal",new tt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var Dn=class n extends Ft{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,h=e/o,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let M=p*d-a;for(let _=0;_<l;_++){let y=_*h-s;g.push(y,-M,0),x.push(0,0,1),m.push(_/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){let _=M+l*p,y=M+l*(p+1),E=M+1+l*(p+1),C=M+1+l*p;f.push(_,y,C),f.push(y,E,C)}this.setIndex(f),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},or=class n extends Ft{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);let o=[],c=[],l=[],u=[],h=e,d=(t-e)/r,f=new O,g=new We;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){let p=s+m/i*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<r;x++){let m=x*(i+1);for(let p=0;p<i;p++){let M=p+m,_=M,y=M+i+1,E=M+i+2,C=M+1;o.push(_,y,C),o.push(y,E,C)}}this.setIndex(o),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var En=class n extends Ft{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,u=[],h=new O,d=new O,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let M=[],_=p/i,y=0;p===0&&a===0?y=.5/t:p===i&&c===Math.PI&&(y=-.5/t);for(let E=0;E<=t;E++){let C=E/t;h.x=-e*Math.cos(r+C*s)*Math.sin(a+_*o),h.y=e*Math.cos(a+_*o),h.z=e*Math.sin(r+C*s)*Math.sin(a+_*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(C+y,1-_),M.push(l++)}u.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){let _=u[p][M+1],y=u[p][M],E=u[p+1][M],C=u[p+1][M+1];(p!==0||a>0)&&f.push(_,y,C),(p!==i-1||c<Math.PI)&&f.push(y,E,C)}this.setIndex(f),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var bi=class n extends Ft{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let a=[],o=[],c=[],l=[],u=new O,h=new O,d=new O;for(let f=0;f<=i;f++)for(let g=0;g<=r;g++){let x=g/r*s,m=f/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=r;g++){let x=(r+1)*f+g-1,m=(r+1)*(f-1)+g-1,p=(r+1)*(f-1)+g,M=(r+1)*f+g;a.push(x,m,M),a.push(m,p,M)}this.setIndex(a),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Bt=class extends si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nc,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},na=class extends Bt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var lo=class extends si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},co=class extends si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Xa(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function fp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var lr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},uo=class extends lr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fc,endingEnd:fc}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case pc:s=e,o=2*t-i;break;case mc:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case pc:a=e,c=2*i-t;break;case mc:a=1,c=i+r[1]-r[0];break;default:a=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(r-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,M=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let E=0;E!==o;++E)s[E]=p*a[u+E]+M*a[l+E]+_*a[c+E]+y*a[h+E];return s}},ho=class extends lr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(i-t)/(r-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[l+d]*h+a[c+d]*u;return s}},fo=class extends lr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ln=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xa(t,this.TimeBufferType),this.values=Xa(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Xa(e.times,Array),values:Xa(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Hs:t=this.InterpolantFactoryMethodDiscrete;break;case Ka:t=this.InterpolantFactoryMethodLinear;break;case qa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hs;case this.InterpolantFactoryMethodLinear:return Ka;case this.InterpolantFactoryMethodSmooth:return qa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&fp(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===qa,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(r)c=!0;else{let h=o*i,d=h-i,f=h+i;for(let g=0;g!==i;++g){let x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=Ka;var Bi=class extends Ln{constructor(e,t,i){super(e,t,i)}};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Hs;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var po=class extends Ln{constructor(e,t,i,r){super(e,t,i,r)}};po.prototype.ValueTypeName="color";var mo=class extends Ln{constructor(e,t,i,r){super(e,t,i,r)}};mo.prototype.ValueTypeName="number";var go=class extends lr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(r-t),l=e*o;for(let u=l+o;l!==u;l+=4)vi.slerpFlat(s,0,a,l-o,a,l,c);return s}},ia=class extends Ln{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new go(this.times,this.values,this.getValueSize(),e)}};ia.prototype.ValueTypeName="quaternion";ia.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends Ln{constructor(e,t,i){super(e,t,i)}};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Hs;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var xo=class extends Ln{constructor(e,t,i,r){super(e,t,i,r)}};xo.prototype.ValueTypeName="vector";var Ya={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},_o=class{constructor(e,t,i){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},zh=new _o,is=class{constructor(e){this.manager=e!==void 0?e:zh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};is.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gr=new WeakMap,yo=class extends is{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ya.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=Gr.get(a);h===void 0&&(h=[],Gr.set(a,h)),h.push({onLoad:t,onError:r})}return a}let o=Yr("img");function c(){u(),t&&t(this);let h=Gr.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Gr.delete(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),Ya.remove(`image:${e}`);let d=Gr.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(h)}Gr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ya.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var ra=class extends is{constructor(e){super(e)}load(e,t,i,r){let s=new vn,a=new yo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},rs=class extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},cr=class extends rs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},hc=new Lt,Hu=new O,Wu=new O,vo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ns,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Hu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hu),Wu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wu),t.updateMatrixWorld(),hc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Xu=new Lt,ks=new O,dc=new O,xc=class extends vo{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ks.setFromMatrixPosition(e.matrixWorld),i.position.copy(ks),dc.copy(i.position),dc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(dc),i.updateMatrixWorld(),r.makeTranslation(-ks.x,-ks.y,-ks.z),Xu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xu,i.coordinateSystem,i.reversedDepth)}},ur=class extends rs{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new xc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},sa=class extends Js{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},_c=class extends vo{constructor(){super(new sa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hr=class extends rs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new _c}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Mo=class extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Vc="\\[\\]\\.:\\/",pp=new RegExp("["+Vc+"]","g"),Gc="[^"+Vc+"]",mp="[^"+Vc.replace("\\.","")+"]",gp=/((?:WC+[\/:])*)/.source.replace("WC",Gc),xp=/(WCOD+)?/.source.replace("WCOD",mp),_p=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gc),yp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gc),vp=new RegExp("^"+gp+xp+_p+yp+"$"),Mp=["material","materials","bones","map"],yc=class{constructor(e,t,i){let r=i||Gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Gt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pp,"")}static parseTrackName(e){let t=vp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Mp.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[r];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Gt.Composite=yc;Gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Gt.prototype.GetterByBindingType=[Gt.prototype._getValue_direct,Gt.prototype._getValue_array,Gt.prototype._getValue_arrayElement,Gt.prototype._getValue_toArray];Gt.prototype.SetterByBindingTypeAndVersioning=[[Gt.prototype._setValue_direct,Gt.prototype._setValue_direct_setNeedsUpdate,Gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_array,Gt.prototype._setValue_array_setNeedsUpdate,Gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_arrayElement,Gt.prototype._setValue_arrayElement_setNeedsUpdate,Gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_fromArray,Gt.prototype._setValue_fromArray_setNeedsUpdate,Gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Z_=new Float32Array(1);var qu=new Lt,dr=class{constructor(e,t,i=0,r=1/0){this.ray=new $r(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return qu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qu),this}intersectObject(e,t=!0,i=[]){return vc(e,this,i,t),i.sort(Yu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)vc(e[r],this,i,t);return i.sort(Yu),i}};function Yu(n,e){return n.distance-e.distance}function vc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let a=0,o=s.length;a<o;a++)vc(s[a],e,t,!0)}}function Hc(n,e,t,i){let r=bp(i);switch(t){case Dc:return n*e;case No:return n*e/r.components*r.byteLength;case Fo:return n*e/r.components*r.byteLength;case Uc:return n*e*2/r.components*r.byteLength;case zo:return n*e*2/r.components*r.byteLength;case Lc:return n*e*3/r.components*r.byteLength;case Vn:return n*e*4/r.components*r.byteLength;case Oo:return n*e*4/r.components*r.byteLength;case la:case ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ua:case ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ko:case Go:return Math.max(n,16)*Math.max(e,8)/4;case Bo:case Vo:return Math.max(n,8)*Math.max(e,8)/2;case Ho:case Wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case $o:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case jo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case el:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case tl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case nl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case il:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case rl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case sl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case al:case ol:case ll:return Math.ceil(n/4)*Math.ceil(e/4)*16;case cl:case ul:return Math.ceil(n/4)*Math.ceil(e/4)*8;case hl:case dl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bp(n){switch(n){case $n:case Cc:return{byteLength:1,components:1};case os:case Rc:case ls:return{byteLength:2,components:1};case Lo:case Uo:return{byteLength:2,components:4};case Gi:case Do:case Kn:return{byteLength:4,components:1};case Ic:case Pc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function od(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ep(n){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){let u=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let x=h[f];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rp=`#ifdef USE_ALPHAHASH
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
#endif`,Ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Up=`#ifdef USE_AOMAP
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
#endif`,Np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fp=`#ifdef USE_BATCHING
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
#endif`,zp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vp=`#ifdef USE_IRIDESCENCE
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
#endif`,Gp=`#ifdef USE_BUMPMAP
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Kp=`#define PI 3.141592653589793
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
} // validated`,jp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qp=`vec3 transformedNormal = objectNormal;
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
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rm="gl_FragColor = linearToOutputTexel( gl_FragColor );",sm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,am=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mm=`#ifdef USE_GRADIENTMAP
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
}`,gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ym=`uniform bool receiveShadow;
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
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tm=`PhysicalMaterial material;
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
#endif`,Am=`struct PhysicalMaterial {
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
}`,Em=`
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
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zm=`#if defined( USE_POINTS_UV )
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
#endif`,Om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,km=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`#ifdef USE_MORPHTARGETS
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
#endif`,Wm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$m=`#ifdef USE_NORMALMAP
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
#endif`,Km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ng=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ig=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ug=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dg=`float getShadowMask() {
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
}`,fg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pg=`#ifdef USE_SKINNING
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
#endif`,mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gg=`#ifdef USE_SKINNING
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
#endif`,xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mg=`#ifdef USE_TRANSMISSION
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
#endif`,bg=`#ifdef USE_TRANSMISSION
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Eg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cg=`uniform sampler2D t2D;
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`#include <common>
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
}`,Ug=`#if DEPTH_PACKING == 3200
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
}`,Ng=`#define DISTANCE
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
}`,Fg=`#define DISTANCE
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
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`uniform float scale;
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
}`,kg=`uniform vec3 diffuse;
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
}`,Vg=`#include <common>
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Hg=`#define LAMBERT
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
}`,Wg=`#define LAMBERT
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
}`,Xg=`#define MATCAP
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
}`,qg=`#define MATCAP
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
}`,Yg=`#define NORMAL
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
}`,Zg=`#define NORMAL
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
}`,Jg=`#define PHONG
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
}`,$g=`#define PHONG
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
}`,Kg=`#define STANDARD
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
}`,jg=`#define STANDARD
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
}`,Qg=`#define TOON
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
}`,e0=`#define TOON
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
}`,t0=`uniform float size;
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
}`,n0=`uniform vec3 diffuse;
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
}`,i0=`#include <common>
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
}`,r0=`uniform vec3 color;
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
}`,s0=`uniform float rotation;
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
}`,a0=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:Cp,alphahash_pars_fragment:Rp,alphamap_fragment:Ip,alphamap_pars_fragment:Pp,alphatest_fragment:Dp,alphatest_pars_fragment:Lp,aomap_fragment:Up,aomap_pars_fragment:Np,batching_pars_vertex:Fp,batching_vertex:zp,begin_vertex:Op,beginnormal_vertex:Bp,bsdfs:kp,iridescence_fragment:Vp,bumpmap_pars_fragment:Gp,clipping_planes_fragment:Hp,clipping_planes_pars_fragment:Wp,clipping_planes_pars_vertex:Xp,clipping_planes_vertex:qp,color_fragment:Yp,color_pars_fragment:Zp,color_pars_vertex:Jp,color_vertex:$p,common:Kp,cube_uv_reflection_fragment:jp,defaultnormal_vertex:Qp,displacementmap_pars_vertex:em,displacementmap_vertex:tm,emissivemap_fragment:nm,emissivemap_pars_fragment:im,colorspace_fragment:rm,colorspace_pars_fragment:sm,envmap_fragment:am,envmap_common_pars_fragment:om,envmap_pars_fragment:lm,envmap_pars_vertex:cm,envmap_physical_pars_fragment:vm,envmap_vertex:um,fog_vertex:hm,fog_pars_vertex:dm,fog_fragment:fm,fog_pars_fragment:pm,gradientmap_pars_fragment:mm,lightmap_pars_fragment:gm,lights_lambert_fragment:xm,lights_lambert_pars_fragment:_m,lights_pars_begin:ym,lights_toon_fragment:Mm,lights_toon_pars_fragment:bm,lights_phong_fragment:Sm,lights_phong_pars_fragment:wm,lights_physical_fragment:Tm,lights_physical_pars_fragment:Am,lights_fragment_begin:Em,lights_fragment_maps:Cm,lights_fragment_end:Rm,logdepthbuf_fragment:Im,logdepthbuf_pars_fragment:Pm,logdepthbuf_pars_vertex:Dm,logdepthbuf_vertex:Lm,map_fragment:Um,map_pars_fragment:Nm,map_particle_fragment:Fm,map_particle_pars_fragment:zm,metalnessmap_fragment:Om,metalnessmap_pars_fragment:Bm,morphinstance_vertex:km,morphcolor_vertex:Vm,morphnormal_vertex:Gm,morphtarget_pars_vertex:Hm,morphtarget_vertex:Wm,normal_fragment_begin:Xm,normal_fragment_maps:qm,normal_pars_fragment:Ym,normal_pars_vertex:Zm,normal_vertex:Jm,normalmap_pars_fragment:$m,clearcoat_normal_fragment_begin:Km,clearcoat_normal_fragment_maps:jm,clearcoat_pars_fragment:Qm,iridescence_pars_fragment:eg,opaque_fragment:tg,packing:ng,premultiplied_alpha_fragment:ig,project_vertex:rg,dithering_fragment:sg,dithering_pars_fragment:ag,roughnessmap_fragment:og,roughnessmap_pars_fragment:lg,shadowmap_pars_fragment:cg,shadowmap_pars_vertex:ug,shadowmap_vertex:hg,shadowmask_pars_fragment:dg,skinbase_vertex:fg,skinning_pars_vertex:pg,skinning_vertex:mg,skinnormal_vertex:gg,specularmap_fragment:xg,specularmap_pars_fragment:_g,tonemapping_fragment:yg,tonemapping_pars_fragment:vg,transmission_fragment:Mg,transmission_pars_fragment:bg,uv_pars_fragment:Sg,uv_pars_vertex:wg,uv_vertex:Tg,worldpos_vertex:Ag,background_vert:Eg,background_frag:Cg,backgroundCube_vert:Rg,backgroundCube_frag:Ig,cube_vert:Pg,cube_frag:Dg,depth_vert:Lg,depth_frag:Ug,distanceRGBA_vert:Ng,distanceRGBA_frag:Fg,equirect_vert:zg,equirect_frag:Og,linedashed_vert:Bg,linedashed_frag:kg,meshbasic_vert:Vg,meshbasic_frag:Gg,meshlambert_vert:Hg,meshlambert_frag:Wg,meshmatcap_vert:Xg,meshmatcap_frag:qg,meshnormal_vert:Yg,meshnormal_frag:Zg,meshphong_vert:Jg,meshphong_frag:$g,meshphysical_vert:Kg,meshphysical_frag:jg,meshtoon_vert:Qg,meshtoon_frag:e0,points_vert:t0,points_frag:n0,shadow_vert:i0,shadow_frag:r0,sprite_vert:s0,sprite_frag:a0},Se={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},oi={basic:{uniforms:Mn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Mn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new $e(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Mn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Mn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Mn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new $e(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Mn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Mn([Se.points,Se.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Mn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Mn([Se.common,Se.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Mn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Mn([Se.sprite,Se.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Mn([Se.common,Se.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Mn([Se.lights,Se.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};oi.physical={uniforms:Mn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var pl={r:0,b:0,g:0},gr=new Zn,o0=new Lt;function l0(n,e,t,i,r,s,a){let o=new $e(0),c=s===!0?0:1,l,u,h=null,d=0,f=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y)),y}function x(_){let y=!1,E=g(_);E===null?p(o,c):E&&E.isColor&&(p(E,1),y=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(_,y){let E=g(y);E&&(E.isCubeTexture||E.mapping===aa)?(u===void 0&&(u=new dt(new pn(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:mr(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,D,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),gr.copy(y.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(o0.makeRotationFromEuler(gr)),u.material.toneMapped=Et.getTransfer(E.colorSpace)!==Ot,(h!==E||d!==E.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,f=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new dt(new Dn(2,2),new An({name:"BackgroundMaterial",uniforms:mr(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Et.getTransfer(E.colorSpace)!==Ot,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=E,d=E.version,f=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,y){_.getRGB(pl,kc(n)),i.buffers.color.setClear(pl.r,pl.g,pl.b,y,a)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(o,c)},render:x,addToRenderList:m,dispose:M}}function c0(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,a=!1;function o(b,A,z,U,R){let L=!1,G=h(U,z,A);s!==G&&(s=G,l(s.object)),L=f(b,U,z,R),L&&g(b,U,z,R),R!==null&&e.update(R,n.ELEMENT_ARRAY_BUFFER),(L||a)&&(a=!1,y(b,A,z,U),R!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))}function c(){return n.createVertexArray()}function l(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function h(b,A,z){let U=z.wireframe===!0,R=i[b.id];R===void 0&&(R={},i[b.id]=R);let L=R[A.id];L===void 0&&(L={},R[A.id]=L);let G=L[U];return G===void 0&&(G=d(c()),L[U]=G),G}function d(b){let A=[],z=[],U=[];for(let R=0;R<t;R++)A[R]=0,z[R]=0,U[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:z,attributeDivisors:U,object:b,attributes:{},index:null}}function f(b,A,z,U){let R=s.attributes,L=A.attributes,G=0,q=z.getAttributes();for(let B in q)if(q[B].location>=0){let re=R[B],Me=L[B];if(Me===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(Me=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(Me=b.instanceColor)),re===void 0||re.attribute!==Me||Me&&re.data!==Me.data)return!0;G++}return s.attributesNum!==G||s.index!==U}function g(b,A,z,U){let R={},L=A.attributes,G=0,q=z.getAttributes();for(let B in q)if(q[B].location>=0){let re=L[B];re===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(re=b.instanceColor));let Me={};Me.attribute=re,re&&re.data&&(Me.data=re.data),R[B]=Me,G++}s.attributes=R,s.attributesNum=G,s.index=U}function x(){let b=s.newAttributes;for(let A=0,z=b.length;A<z;A++)b[A]=0}function m(b){p(b,0)}function p(b,A){let z=s.newAttributes,U=s.enabledAttributes,R=s.attributeDivisors;z[b]=1,U[b]===0&&(n.enableVertexAttribArray(b),U[b]=1),R[b]!==A&&(n.vertexAttribDivisor(b,A),R[b]=A)}function M(){let b=s.newAttributes,A=s.enabledAttributes;for(let z=0,U=A.length;z<U;z++)A[z]!==b[z]&&(n.disableVertexAttribArray(z),A[z]=0)}function _(b,A,z,U,R,L,G){G===!0?n.vertexAttribIPointer(b,A,z,R,L):n.vertexAttribPointer(b,A,z,U,R,L)}function y(b,A,z,U){x();let R=U.attributes,L=z.getAttributes(),G=A.defaultAttributeValues;for(let q in L){let B=L[q];if(B.location>=0){let ne=R[q];if(ne===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor)),ne!==void 0){let re=ne.normalized,Me=ne.itemSize,ge=e.get(ne);if(ge===void 0)continue;let Ve=ge.buffer,mt=ge.type,nt=ge.bytesPerElement,Z=mt===n.INT||mt===n.UNSIGNED_INT||ne.gpuType===Do;if(ne.isInterleavedBufferAttribute){let Q=ne.data,oe=Q.stride,Ie=ne.offset;if(Q.isInstancedInterleavedBuffer){for(let Re=0;Re<B.locationSize;Re++)p(B.location+Re,Q.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Re=0;Re<B.locationSize;Re++)m(B.location+Re);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let Re=0;Re<B.locationSize;Re++)_(B.location+Re,Me/B.locationSize,mt,re,oe*nt,(Ie+Me/B.locationSize*Re)*nt,Z)}else{if(ne.isInstancedBufferAttribute){for(let Q=0;Q<B.locationSize;Q++)p(B.location+Q,ne.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Q=0;Q<B.locationSize;Q++)m(B.location+Q);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let Q=0;Q<B.locationSize;Q++)_(B.location+Q,Me/B.locationSize,mt,re,Me*nt,Me/B.locationSize*Q*nt,Z)}}else if(G!==void 0){let re=G[q];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(B.location,re);break;case 3:n.vertexAttrib3fv(B.location,re);break;case 4:n.vertexAttrib4fv(B.location,re);break;default:n.vertexAttrib1fv(B.location,re)}}}}M()}function E(){F();for(let b in i){let A=i[b];for(let z in A){let U=A[z];for(let R in U)u(U[R].object),delete U[R];delete A[z]}delete i[b]}}function C(b){if(i[b.id]===void 0)return;let A=i[b.id];for(let z in A){let U=A[z];for(let R in U)u(U[R].object),delete U[R];delete A[z]}delete i[b.id]}function D(b){for(let A in i){let z=i[A];if(z[b.id]===void 0)continue;let U=z[b.id];for(let R in U)u(U[R].object),delete U[R];delete z[b.id]}}function F(){T(),a=!0,s!==r&&(s=r,l(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:F,resetDefaultState:T,dispose:E,releaseStatesOfGeometry:C,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function u0(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,i,1)}function c(l,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function h0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(D){return!(D!==Vn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){let F=D===ls&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==$n&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Kn&&!F)}function c(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:E,maxSamples:C}}function d0(n){let e=this,t=null,i=0,r=!1,s=!1,a=new ni,o=new ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let M=s?0:i,_=M*4,y=p.clippingState||null;c.value=y,y=u(g,d,_,f);for(let E=0;E!==_;++E)y[E]=t[E];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=f;_!==x;++_,y+=4)a.copy(h[_]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function f0(n){let e=new WeakMap;function t(a,o){return o===Ro?a.mapping=fr:o===Io&&(a.mapping=pr),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ro||o===Io)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new io(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var ds=4,Oh=[.125,.215,.35,.446,.526,.582],yr=20,Wc=new sa,Bh=new $e,Xc=null,qc=0,Yc=0,Zc=!1,_r=(1+Math.sqrt(5))/2,hs=1/_r,kh=[new O(-_r,hs,0),new O(_r,hs,0),new O(-hs,0,_r),new O(hs,0,_r),new O(0,_r,-hs),new O(0,_r,hs),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],p0=new O,xl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:o=p0}=s;Xc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xc,qc,Yc),this._renderer.xr.enabled=Zc,e.scissorTest=!1,ml(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:ls,format:Vn,colorSpace:nr,depthBuffer:!1},r=Vh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vh(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m0(s)),this._blurMaterial=g0(s,e,t)}return r}_compileMaterial(e){let t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,Wc)}_sceneToCubeUV(e,t,i,r,s){let c=new sn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Bh),h.toneMapping=wi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));let x=new Tn({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),m=new dt(new pn,x),p=!1,M=e.background;M?M.isColor&&(x.color.copy(M),e.background=null,p=!0):(x.color.copy(Bh),p=!0);for(let _=0;_<6;_++){let y=_%3;y===0?(c.up.set(0,l[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[_],s.y,s.z)):y===1?(c.up.set(0,0,l[_]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[_],s.z)):(c.up.set(0,l[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[_]));let E=this._cubeSize;ml(r,y*E,_>2?E:0,E,E),h.setRenderTarget(r),p&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=M}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===fr||e.mapping===pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gh());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new dt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;ml(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Wc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=kh[(r-s-1)%kh.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new dt(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*yr-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):yr;m>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yr}`);let p=[],M=0;for(let D=0;D<yr;++D){let F=D/x,T=Math.exp(-F*F/2);p.push(T),D===0?M+=T:D<m&&(M+=2*T)}for(let D=0;D<p.length;D++)p[D]=p[D]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;let y=this._sizeLods[r],E=3*y*(r>_-ds?r-_+ds:0),C=4*(this._cubeSize-y);ml(t,E,C,3*y,2*y),c.setRenderTarget(t),c.render(h,Wc)}};function m0(n){let e=[],t=[],i=[],r=n,s=n-ds+1+Oh.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);t.push(o);let c=1/o;a>n-ds?c=Oh[a-n+ds-1]:a===0&&(c=0),i.push(c);let l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,M=new Float32Array(x*g*f),_=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let C=0;C<f;C++){let D=C%3*2/3-1,F=C>2?0:-1,T=[D,F,0,D+2/3,F,0,D+2/3,F+1,0,D,F,0,D+2/3,F+1,0,D,F+1,0];M.set(T,x*g*C),_.set(d,m*g*C);let b=[C,C,C,C,C,C];y.set(b,p*g*C)}let E=new Ft;E.setAttribute("position",new an(M,x)),E.setAttribute("uv",new an(_,m)),E.setAttribute("faceIndex",new an(y,p)),e.push(E),r>ds&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Vh(n,e,t){let i=new ii(n,e,t);return i.texture.mapping=aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ml(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function g0(n,e,t){let i=new Float32Array(yr),r=new O(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ru(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Gh(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ru(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Hh(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function ru(){return`

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
	`}function x0(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===Ro||c===Io,u=c===fr||c===pr;if(l||u){let h=e.get(o),d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new xl(n)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let f=o.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new xl(n)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function _0(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Zr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function y0(n,e,t,i){let r={},s=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function l(h){let d=[],f=h.index,g=h.attributes.position,x=0;if(f!==null){let M=f.array;x=f.version;for(let _=0,y=M.length;_<y;_+=3){let E=M[_+0],C=M[_+1],D=M[_+2];d.push(E,C,C,D,D,E)}}else if(g!==void 0){let M=g.array;x=g.version;for(let _=0,y=M.length/3-1;_<y;_+=3){let E=_+0,C=_+1,D=_+2;d.push(E,C,C,D,D,E)}}else return;let m=new(Bc(d)?Zs:Ys)(d,1);m.version=x;let p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){let d=s.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function v0(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){n.drawElements(i,f,s,d*a),t.update(f,i,1)}function l(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,d*a,g),t.update(f,i,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function h(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,x,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*x[M];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function M0(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function b0(n,e,t){let i=new WeakMap,r=new Ct;function s(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(o);if(d===void 0||d.count!==h){let T=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let y=o.attributes.position.count*_,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let C=new Float32Array(y*E*4*h),D=new qs(C,y,E,h);D.type=Kn,D.needsUpdate=!0;let F=_*4;for(let b=0;b<h;b++){let A=m[b],z=p[b],U=M[b],R=y*E*4*b;for(let L=0;L<A.count;L++){let G=L*F;f===!0&&(r.fromBufferAttribute(A,L),C[R+G+0]=r.x,C[R+G+1]=r.y,C[R+G+2]=r.z,C[R+G+3]=0),g===!0&&(r.fromBufferAttribute(z,L),C[R+G+4]=r.x,C[R+G+5]=r.y,C[R+G+6]=r.z,C[R+G+7]=0),x===!0&&(r.fromBufferAttribute(U,L),C[R+G+8]=r.x,C[R+G+9]=r.y,C[R+G+10]=r.z,C[R+G+11]=U.itemSize===4?r.w:1)}}d={count:h,texture:D,size:new We(y,E)},i.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function S0(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function a(){r=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}var ld=new vn,Wh=new Qs(1,1),cd=new qs,ud=new to,hd=new $s,Xh=[],qh=[],Yh=new Float32Array(16),Zh=new Float32Array(9),Jh=new Float32Array(4);function ms(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Xh[r];if(s===void 0&&(s=new Float32Array(r),Xh[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function on(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ln(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _l(n,e){let t=qh[e];t===void 0&&(t=new Int32Array(e),qh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function w0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function T0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2fv(this.addr,e),ln(t,e)}}function A0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;n.uniform3fv(this.addr,e),ln(t,e)}}function E0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4fv(this.addr,e),ln(t,e)}}function C0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(on(t,i))return;Jh.set(i),n.uniformMatrix2fv(this.addr,!1,Jh),ln(t,i)}}function R0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(on(t,i))return;Zh.set(i),n.uniformMatrix3fv(this.addr,!1,Zh),ln(t,i)}}function I0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(on(t,i))return;Yh.set(i),n.uniformMatrix4fv(this.addr,!1,Yh),ln(t,i)}}function P0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function D0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2iv(this.addr,e),ln(t,e)}}function L0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3iv(this.addr,e),ln(t,e)}}function U0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4iv(this.addr,e),ln(t,e)}}function N0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function F0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2uiv(this.addr,e),ln(t,e)}}function z0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3uiv(this.addr,e),ln(t,e)}}function O0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4uiv(this.addr,e),ln(t,e)}}function B0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Wh.compareFunction=Fc,s=Wh):s=ld,t.setTexture2D(e||s,r)}function k0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ud,r)}function V0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||hd,r)}function G0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||cd,r)}function H0(n){switch(n){case 5126:return w0;case 35664:return T0;case 35665:return A0;case 35666:return E0;case 35674:return C0;case 35675:return R0;case 35676:return I0;case 5124:case 35670:return P0;case 35667:case 35671:return D0;case 35668:case 35672:return L0;case 35669:case 35673:return U0;case 5125:return N0;case 36294:return F0;case 36295:return z0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return B0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return G0}}function W0(n,e){n.uniform1fv(this.addr,e)}function X0(n,e){let t=ms(e,this.size,2);n.uniform2fv(this.addr,t)}function q0(n,e){let t=ms(e,this.size,3);n.uniform3fv(this.addr,t)}function Y0(n,e){let t=ms(e,this.size,4);n.uniform4fv(this.addr,t)}function Z0(n,e){let t=ms(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function J0(n,e){let t=ms(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $0(n,e){let t=ms(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function K0(n,e){n.uniform1iv(this.addr,e)}function j0(n,e){n.uniform2iv(this.addr,e)}function Q0(n,e){n.uniform3iv(this.addr,e)}function ex(n,e){n.uniform4iv(this.addr,e)}function tx(n,e){n.uniform1uiv(this.addr,e)}function nx(n,e){n.uniform2uiv(this.addr,e)}function ix(n,e){n.uniform3uiv(this.addr,e)}function rx(n,e){n.uniform4uiv(this.addr,e)}function sx(n,e,t){let i=this.cache,r=e.length,s=_l(t,r);on(i,s)||(n.uniform1iv(this.addr,s),ln(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ld,s[a])}function ax(n,e,t){let i=this.cache,r=e.length,s=_l(t,r);on(i,s)||(n.uniform1iv(this.addr,s),ln(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ud,s[a])}function ox(n,e,t){let i=this.cache,r=e.length,s=_l(t,r);on(i,s)||(n.uniform1iv(this.addr,s),ln(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||hd,s[a])}function lx(n,e,t){let i=this.cache,r=e.length,s=_l(t,r);on(i,s)||(n.uniform1iv(this.addr,s),ln(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||cd,s[a])}function cx(n){switch(n){case 5126:return W0;case 35664:return X0;case 35665:return q0;case 35666:return Y0;case 35674:return Z0;case 35675:return J0;case 35676:return $0;case 5124:case 35670:return K0;case 35667:case 35671:return j0;case 35668:case 35672:return Q0;case 35669:case 35673:return ex;case 5125:return tx;case 36294:return nx;case 36295:return ix;case 36296:return rx;case 35678:case 36198:case 36298:case 36306:case 35682:return sx;case 35679:case 36299:case 36307:return ax;case 35680:case 36300:case 36308:case 36293:return ox;case 36289:case 36303:case 36311:case 36292:return lx}}var $c=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=H0(t.type)}},Kc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cx(t.type)}},jc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},Jc=/(\w+)(\])?(\[|\.)?/g;function $h(n,e){n.seq.push(e),n.map[e.id]=e}function ux(n,e,t){let i=n.name,r=i.length;for(Jc.lastIndex=0;;){let s=Jc.exec(i),a=Jc.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){$h(t,l===void 0?new $c(o,n,e):new Kc(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new jc(o),$h(t,h)),t=h}}}var fs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);ux(s,a,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function Kh(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var hx=37297,dx=0;function fx(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var jh=new ut;function px(n){Et._getMatrix(jh,Et.workingColorSpace,n);let e=`mat3( ${jh.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(n)){case Ws:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Qh(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+fx(n.getShaderSource(e),o)}else return s}function mx(n,e){let t=px(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function gx(n,e){let t;switch(e){case gh:t="Linear";break;case xh:t="Reinhard";break;case _h:t="Cineon";break;case as:t="ACESFilmic";break;case vh:t="AgX";break;case Mh:t="Neutral";break;case yh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var gl=new O;function xx(){Et.getLuminanceCoefficients(gl);let n=gl.x.toFixed(4),e=gl.y.toFixed(4),t=gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _x(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function yx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vx(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),a=s.name,o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function fa(n){return n!==""}function ed(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function td(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Mx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(n){return n.replace(Mx,Sx)}var bx=new Map;function Sx(n,e){let t=pt[e];if(t===void 0){let i=bx.get(e);if(i!==void 0)t=pt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qc(t)}var wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nd(n){return n.replace(wx,Tx)}function Tx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function id(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Ax(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===bc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ss?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function Ex(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fr:case pr:e="ENVMAP_TYPE_CUBE";break;case aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function Rx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ac:e="ENVMAP_BLENDING_MULTIPLY";break;case ph:e="ENVMAP_BLENDING_MIX";break;case mh:e="ENVMAP_BLENDING_ADD";break}return e}function Ix(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Px(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Ax(t),l=Ex(t),u=Cx(t),h=Rx(t),d=Ix(t),f=_x(t),g=yx(s),x=r.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fa).join(`
`),p.length>0&&(p+=`
`)):(m=[id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),p=[id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?pt.tonemapping_pars_fragment:"",t.toneMapping!==wi?gx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,mx("linearToOutputTexel",t.outputColorSpace),xx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fa).join(`
`)),a=Qc(a),a=ed(a,t),a=td(a,t),o=Qc(o),o=ed(o,t),o=td(o,t),a=nd(a),o=nd(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=M+m+a,y=M+p+o,E=Kh(r,r.VERTEX_SHADER,_),C=Kh(r,r.FRAGMENT_SHADER,y);r.attachShader(x,E),r.attachShader(x,C),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function D(A){if(n.debug.checkShaderErrors){let z=r.getProgramInfoLog(x)||"",U=r.getShaderInfoLog(E)||"",R=r.getShaderInfoLog(C)||"",L=z.trim(),G=U.trim(),q=R.trim(),B=!0,ne=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,E,C);else{let re=Qh(r,E,"vertex"),Me=Qh(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+re+`
`+Me)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(G===""||q==="")&&(ne=!1);ne&&(A.diagnostics={runnable:B,programLog:L,vertexShader:{log:G,prefix:m},fragmentShader:{log:q,prefix:p}})}r.deleteShader(E),r.deleteShader(C),F=new fs(r,x),T=vx(r,x)}let F;this.getUniforms=function(){return F===void 0&&D(this),F};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(x,hx)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=C,this}var Dx=0,eu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new tu(e),t.set(e,i)),i}},tu=class{constructor(e){this.id=Dx++,this.code=e,this.usedTimes=0}};function Lx(n,e,t,i,r,s,a){let o=new Kr,c=new eu,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures,f=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,b,A,z,U){let R=z.fog,L=U.geometry,G=T.isMeshStandardMaterial?z.environment:null,q=(T.isMeshStandardMaterial?t:e).get(T.envMap||G),B=q&&q.mapping===aa?q.image.height:null,ne=g[T.type];T.precision!==null&&(f=r.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));let re=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Me=re!==void 0?re.length:0,ge=0;L.morphAttributes.position!==void 0&&(ge=1),L.morphAttributes.normal!==void 0&&(ge=2),L.morphAttributes.color!==void 0&&(ge=3);let Ve,mt,nt,Z;if(ne){let ot=oi[ne];Ve=ot.vertexShader,mt=ot.fragmentShader}else Ve=T.vertexShader,mt=T.fragmentShader,c.update(T),nt=c.getVertexShaderID(T),Z=c.getFragmentShaderID(T);let Q=n.getRenderTarget(),oe=n.state.buffers.depth.getReversed(),Ie=U.isInstancedMesh===!0,Re=U.isBatchedMesh===!0,it=!!T.map,lt=!!T.matcap,P=!!q,St=!!T.aoMap,Ye=!!T.lightMap,Xe=!!T.bumpMap,Be=!!T.normalMap,Tt=!!T.displacementMap,Ae=!!T.emissiveMap,Qe=!!T.metalnessMap,Dt=!!T.roughnessMap,vt=T.anisotropy>0,I=T.clearcoat>0,v=T.dispersion>0,Y=T.iridescence>0,te=T.sheen>0,le=T.transmission>0,ee=vt&&!!T.anisotropyMap,De=I&&!!T.clearcoatMap,pe=I&&!!T.clearcoatNormalMap,Ue=I&&!!T.clearcoatRoughnessMap,Ne=Y&&!!T.iridescenceMap,ae=Y&&!!T.iridescenceThicknessMap,be=te&&!!T.sheenColorMap,ze=te&&!!T.sheenRoughnessMap,we=!!T.specularMap,_e=!!T.specularColorMap,et=!!T.specularIntensityMap,V=le&&!!T.transmissionMap,he=le&&!!T.thicknessMap,fe=!!T.gradientMap,xe=!!T.alphaMap,de=T.alphaTest>0,ie=!!T.alphaHash,Ee=!!T.extensions,qe=wi;T.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(qe=n.toneMapping);let _t={shaderID:ne,shaderType:T.type,shaderName:T.name,vertexShader:Ve,fragmentShader:mt,defines:T.defines,customVertexShaderID:nt,customFragmentShaderID:Z,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Re,batchingColor:Re&&U._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&U.instanceColor!==null,instancingMorph:Ie&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:nr,alphaToCoverage:!!T.alphaToCoverage,map:it,matcap:lt,envMap:P,envMapMode:P&&q.mapping,envMapCubeUVHeight:B,aoMap:St,lightMap:Ye,bumpMap:Xe,normalMap:Be,displacementMap:d&&Tt,emissiveMap:Ae,normalMapObjectSpace:Be&&T.normalMapType===Th,normalMapTangentSpace:Be&&T.normalMapType===Nc,metalnessMap:Qe,roughnessMap:Dt,anisotropy:vt,anisotropyMap:ee,clearcoat:I,clearcoatMap:De,clearcoatNormalMap:pe,clearcoatRoughnessMap:Ue,dispersion:v,iridescence:Y,iridescenceMap:Ne,iridescenceThicknessMap:ae,sheen:te,sheenColorMap:be,sheenRoughnessMap:ze,specularMap:we,specularColorMap:_e,specularIntensityMap:et,transmission:le,transmissionMap:V,thicknessMap:he,gradientMap:fe,opaque:T.transparent===!1&&T.blending===er&&T.alphaToCoverage===!1,alphaMap:xe,alphaTest:de,alphaHash:ie,combine:T.combine,mapUv:it&&x(T.map.channel),aoMapUv:St&&x(T.aoMap.channel),lightMapUv:Ye&&x(T.lightMap.channel),bumpMapUv:Xe&&x(T.bumpMap.channel),normalMapUv:Be&&x(T.normalMap.channel),displacementMapUv:Tt&&x(T.displacementMap.channel),emissiveMapUv:Ae&&x(T.emissiveMap.channel),metalnessMapUv:Qe&&x(T.metalnessMap.channel),roughnessMapUv:Dt&&x(T.roughnessMap.channel),anisotropyMapUv:ee&&x(T.anisotropyMap.channel),clearcoatMapUv:De&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:be&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:ze&&x(T.sheenRoughnessMap.channel),specularMapUv:we&&x(T.specularMap.channel),specularColorMapUv:_e&&x(T.specularColorMap.channel),specularIntensityMapUv:et&&x(T.specularIntensityMap.channel),transmissionMapUv:V&&x(T.transmissionMap.channel),thicknessMapUv:he&&x(T.thicknessMap.channel),alphaMapUv:xe&&x(T.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Be||vt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!L.attributes.uv&&(it||xe),fog:!!R,useFog:T.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:oe,skinning:U.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:ge,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:qe,decodeVideoTexture:it&&T.map.isVideoTexture===!0&&Et.getTransfer(T.map.colorSpace)===Ot,decodeVideoTextureEmissive:Ae&&T.emissiveMap.isVideoTexture===!0&&Et.getTransfer(T.emissiveMap.colorSpace)===Ot,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===qt,flipSided:T.side===mn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ee&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&T.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return _t.vertexUv1s=l.has(1),_t.vertexUv2s=l.has(2),_t.vertexUv3s=l.has(3),l.clear(),_t}function p(T){let b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(let A in T.defines)b.push(A),b.push(T.defines[A]);return T.isRawShaderMaterial===!1&&(M(b,T),_(b,T),b.push(n.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function M(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function _(T,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),T.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),T.push(o.mask)}function y(T){let b=g[T.type],A;if(b){let z=oi[b];A=fl.clone(z.uniforms)}else A=T.uniforms;return A}function E(T,b){let A;for(let z=0,U=u.length;z<U;z++){let R=u[z];if(R.cacheKey===b){A=R,++A.usedTimes;break}}return A===void 0&&(A=new Px(n,b,T,s),u.push(A)),A}function C(T){if(--T.usedTimes===0){let b=u.indexOf(T);u[b]=u[u.length-1],u.pop(),T.destroy()}}function D(T){c.remove(T)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:E,releaseProgram:C,releaseShaderCache:D,programs:u,dispose:F}}function Ux(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Nx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function rd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function sd(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,d,f,g,x,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function o(h,d,f,g,x,m){let p=a(h,d,f,g,x,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(h,d,f,g,x,m){let p=a(h,d,f,g,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||Nx),i.length>1&&i.sort(d||rd),r.length>1&&r.sort(d||rd)}function u(){for(let h=e,d=n.length;h<d;h++){let f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function Fx(){let n=new WeakMap;function e(i,r){let s=n.get(i),a;return s===void 0?(a=new sd,n.set(i,[a])):r>=s.length?(a=new sd,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function zx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new $e};break;case"SpotLight":t={position:new O,direction:new O,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function Ox(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Bx=0;function kx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Vx(n){let e=new zx,t=Ox(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);let r=new O,s=new Lt,a=new Lt;function o(l){let u=0,h=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,M=0,_=0,y=0,E=0,C=0,D=0;l.sort(kx);for(let T=0,b=l.length;T<b;T++){let A=l[T],z=A.color,U=A.intensity,R=A.distance,L=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=z.r*U,h+=z.g*U,d+=z.b*U;else if(A.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(A.sh.coefficients[G],U);D++}else if(A.isDirectionalLight){let G=e.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let q=A.shadow,B=t.get(A);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,i.directionalShadow[f]=B,i.directionalShadowMap[f]=L,i.directionalShadowMatrix[f]=A.shadow.matrix,M++}i.directional[f]=G,f++}else if(A.isSpotLight){let G=e.get(A);G.position.setFromMatrixPosition(A.matrixWorld),G.color.copy(z).multiplyScalar(U),G.distance=R,G.coneCos=Math.cos(A.angle),G.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),G.decay=A.decay,i.spot[x]=G;let q=A.shadow;if(A.map&&(i.spotLightMap[E]=A.map,E++,q.updateMatrices(A),A.castShadow&&C++),i.spotLightMatrix[x]=q.matrix,A.castShadow){let B=t.get(A);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,i.spotShadow[x]=B,i.spotShadowMap[x]=L,y++}x++}else if(A.isRectAreaLight){let G=e.get(A);G.color.copy(z).multiplyScalar(U),G.halfWidth.set(A.width*.5,0,0),G.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=G,m++}else if(A.isPointLight){let G=e.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),G.distance=A.distance,G.decay=A.decay,A.castShadow){let q=A.shadow,B=t.get(A);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,B.shadowCameraNear=q.camera.near,B.shadowCameraFar=q.camera.far,i.pointShadow[g]=B,i.pointShadowMap[g]=L,i.pointShadowMatrix[g]=A.shadow.matrix,_++}i.point[g]=G,g++}else if(A.isHemisphereLight){let G=e.get(A);G.skyColor.copy(A.color).multiplyScalar(U),G.groundColor.copy(A.groundColor).multiplyScalar(U),i.hemi[p]=G,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let F=i.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==x||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==M||F.numPointShadows!==_||F.numSpotShadows!==y||F.numSpotMaps!==E||F.numLightProbes!==D)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+E-C,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=D,F.directionalLength=f,F.pointLength=g,F.spotLength=x,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=M,F.numPointShadows=_,F.numSpotShadows=y,F.numSpotMaps=E,F.numLightProbes=D,i.version=Bx++)}function c(l,u){let h=0,d=0,f=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){let _=l[p];if(_.isDirectionalLight){let y=i.directional[h];y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(_.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(_.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let y=i.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:i}}function ad(n){let e=new Vx(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Gx(n){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new ad(n),e.set(r,[o])):s>=a.length?(o=new ad(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wx=`uniform sampler2D shadow_pass;
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
}`;function Xx(n,e,t){let i=new ns,r=new We,s=new We,a=new Ct,o=new lo({depthPacking:wh}),c=new co,l={},u=t.maxTextureSize,h={[_i]:mn,[mn]:_i,[qt]:qt},d=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Hx,fragmentShader:Wx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ft;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new dt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bc;let p=this.type;this.render=function(C,D,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let T=n.getRenderTarget(),b=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Si),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let U=p!==ai&&this.type===ai,R=p===ai&&this.type!==ai;for(let L=0,G=C.length;L<G;L++){let q=C[L],B=q.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);let ne=B.getFrameExtents();if(r.multiply(ne),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ne.x),r.x=s.x*ne.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ne.y),r.y=s.y*ne.y,B.mapSize.y=s.y)),B.map===null||U===!0||R===!0){let Me=this.type!==ai?{minFilter:wn,magFilter:wn}:{};B.map!==null&&B.map.dispose(),B.map=new ii(r.x,r.y,Me),B.map.texture.name=q.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();let re=B.getViewportCount();for(let Me=0;Me<re;Me++){let ge=B.getViewport(Me);a.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),z.viewport(a),B.updateMatrices(q,Me),i=B.getFrustum(),y(D,F,B.camera,q,this.type)}B.isPointLightShadow!==!0&&this.type===ai&&M(B,F),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,b,A)};function M(C,D){let F=e.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ii(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(D,null,F,d,x,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(D,null,F,f,x,null)}function _(C,D,F,T){let b=null,A=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(A!==void 0)b=A;else if(b=F.isPointLight===!0?c:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let z=b.uuid,U=D.uuid,R=l[z];R===void 0&&(R={},l[z]=R);let L=R[U];L===void 0&&(L=b.clone(),R[U]=L,D.addEventListener("dispose",E)),b=L}if(b.visible=D.visible,b.wireframe=D.wireframe,T===ai?b.side=D.shadowSide!==null?D.shadowSide:D.side:b.side=D.shadowSide!==null?D.shadowSide:h[D.side],b.alphaMap=D.alphaMap,b.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,b.map=D.map,b.clipShadows=D.clipShadows,b.clippingPlanes=D.clippingPlanes,b.clipIntersection=D.clipIntersection,b.displacementMap=D.displacementMap,b.displacementScale=D.displacementScale,b.displacementBias=D.displacementBias,b.wireframeLinewidth=D.wireframeLinewidth,b.linewidth=D.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let z=n.properties.get(b);z.light=F}return b}function y(C,D,F,T,b){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===ai)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);let U=e.update(C),R=C.material;if(Array.isArray(R)){let L=U.groups;for(let G=0,q=L.length;G<q;G++){let B=L[G],ne=R[B.materialIndex];if(ne&&ne.visible){let re=_(C,ne,T,b);C.onBeforeShadow(n,C,D,F,U,re,B),n.renderBufferDirect(F,null,U,re,C,B),C.onAfterShadow(n,C,D,F,U,re,B)}}}else if(R.visible){let L=_(C,R,T,b);C.onBeforeShadow(n,C,D,F,U,L,null),n.renderBufferDirect(F,null,U,L,C,null),C.onAfterShadow(n,C,D,F,U,L,null)}}let z=C.children;for(let U=0,R=z.length;U<R;U++)y(z[U],D,F,T,b)}function E(C){C.target.removeEventListener("dispose",E);for(let F in l){let T=l[F],b=C.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}var qx={[bo]:So,[wo]:Eo,[To]:Co,[tr]:Ao,[So]:bo,[Eo]:wo,[Co]:To,[Ao]:tr};function Yx(n,e){function t(){let V=!1,he=new Ct,fe=null,xe=new Ct(0,0,0,0);return{setMask:function(de){fe!==de&&!V&&(n.colorMask(de,de,de,de),fe=de)},setLocked:function(de){V=de},setClear:function(de,ie,Ee,qe,_t){_t===!0&&(de*=qe,ie*=qe,Ee*=qe),he.set(de,ie,Ee,qe),xe.equals(he)===!1&&(n.clearColor(de,ie,Ee,qe),xe.copy(he))},reset:function(){V=!1,fe=null,xe.set(-1,0,0,0)}}}function i(){let V=!1,he=!1,fe=null,xe=null,de=null;return{setReversed:function(ie){if(he!==ie){let Ee=e.get("EXT_clip_control");ie?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),he=ie;let qe=de;de=null,this.setClear(qe)}},getReversed:function(){return he},setTest:function(ie){ie?Q(n.DEPTH_TEST):oe(n.DEPTH_TEST)},setMask:function(ie){fe!==ie&&!V&&(n.depthMask(ie),fe=ie)},setFunc:function(ie){if(he&&(ie=qx[ie]),xe!==ie){switch(ie){case bo:n.depthFunc(n.NEVER);break;case So:n.depthFunc(n.ALWAYS);break;case wo:n.depthFunc(n.LESS);break;case tr:n.depthFunc(n.LEQUAL);break;case To:n.depthFunc(n.EQUAL);break;case Ao:n.depthFunc(n.GEQUAL);break;case Eo:n.depthFunc(n.GREATER);break;case Co:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=ie}},setLocked:function(ie){V=ie},setClear:function(ie){de!==ie&&(he&&(ie=1-ie),n.clearDepth(ie),de=ie)},reset:function(){V=!1,fe=null,xe=null,de=null,he=!1}}}function r(){let V=!1,he=null,fe=null,xe=null,de=null,ie=null,Ee=null,qe=null,_t=null;return{setTest:function(ot){V||(ot?Q(n.STENCIL_TEST):oe(n.STENCIL_TEST))},setMask:function(ot){he!==ot&&!V&&(n.stencilMask(ot),he=ot)},setFunc:function(ot,cn,Zt){(fe!==ot||xe!==cn||de!==Zt)&&(n.stencilFunc(ot,cn,Zt),fe=ot,xe=cn,de=Zt)},setOp:function(ot,cn,Zt){(ie!==ot||Ee!==cn||qe!==Zt)&&(n.stencilOp(ot,cn,Zt),ie=ot,Ee=cn,qe=Zt)},setLocked:function(ot){V=ot},setClear:function(ot){_t!==ot&&(n.clearStencil(ot),_t=ot)},reset:function(){V=!1,he=null,fe=null,xe=null,de=null,ie=null,Ee=null,qe=null,_t=null}}}let s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,M=null,_=null,y=null,E=null,C=null,D=new $e(0,0,0),F=0,T=!1,b=null,A=null,z=null,U=null,R=null,L=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,q=0,B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(B)[1]),G=q>=1):B.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),G=q>=2);let ne=null,re={},Me=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),Ve=new Ct().fromArray(Me),mt=new Ct().fromArray(ge);function nt(V,he,fe,xe){let de=new Uint8Array(4),ie=n.createTexture();n.bindTexture(V,ie),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ee=0;Ee<fe;Ee++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(he+Ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return ie}let Z={};Z[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(n.DEPTH_TEST),a.setFunc(tr),Xe(!1),Be(Mc),Q(n.CULL_FACE),St(Si);function Q(V){u[V]!==!0&&(n.enable(V),u[V]=!0)}function oe(V){u[V]!==!1&&(n.disable(V),u[V]=!1)}function Ie(V,he){return h[V]!==he?(n.bindFramebuffer(V,he),h[V]=he,V===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=he),V===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=he),!0):!1}function Re(V,he){let fe=f,xe=!1;if(V){fe=d.get(he),fe===void 0&&(fe=[],d.set(he,fe));let de=V.textures;if(fe.length!==de.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,Ee=de.length;ie<Ee;ie++)fe[ie]=n.COLOR_ATTACHMENT0+ie;fe.length=de.length,xe=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,xe=!0);xe&&n.drawBuffers(fe)}function it(V){return g!==V?(n.useProgram(V),g=V,!0):!1}let lt={[Fi]:n.FUNC_ADD,[Ku]:n.FUNC_SUBTRACT,[ju]:n.FUNC_REVERSE_SUBTRACT};lt[Qu]=n.MIN,lt[eh]=n.MAX;let P={[th]:n.ZERO,[nh]:n.ONE,[ih]:n.SRC_COLOR,[Za]:n.SRC_ALPHA,[ch]:n.SRC_ALPHA_SATURATE,[oh]:n.DST_COLOR,[sh]:n.DST_ALPHA,[rh]:n.ONE_MINUS_SRC_COLOR,[Ja]:n.ONE_MINUS_SRC_ALPHA,[lh]:n.ONE_MINUS_DST_COLOR,[ah]:n.ONE_MINUS_DST_ALPHA,[uh]:n.CONSTANT_COLOR,[hh]:n.ONE_MINUS_CONSTANT_COLOR,[dh]:n.CONSTANT_ALPHA,[fh]:n.ONE_MINUS_CONSTANT_ALPHA};function St(V,he,fe,xe,de,ie,Ee,qe,_t,ot){if(V===Si){x===!0&&(oe(n.BLEND),x=!1);return}if(x===!1&&(Q(n.BLEND),x=!0),V!==$u){if(V!==m||ot!==T){if((p!==Fi||y!==Fi)&&(n.blendEquation(n.FUNC_ADD),p=Fi,y=Fi),ot)switch(V){case er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sc:n.blendFunc(n.ONE,n.ONE);break;case wc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Tc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case wc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}M=null,_=null,E=null,C=null,D.set(0,0,0),F=0,m=V,T=ot}return}de=de||he,ie=ie||fe,Ee=Ee||xe,(he!==p||de!==y)&&(n.blendEquationSeparate(lt[he],lt[de]),p=he,y=de),(fe!==M||xe!==_||ie!==E||Ee!==C)&&(n.blendFuncSeparate(P[fe],P[xe],P[ie],P[Ee]),M=fe,_=xe,E=ie,C=Ee),(qe.equals(D)===!1||_t!==F)&&(n.blendColor(qe.r,qe.g,qe.b,_t),D.copy(qe),F=_t),m=V,T=!1}function Ye(V,he){V.side===qt?oe(n.CULL_FACE):Q(n.CULL_FACE);let fe=V.side===mn;he&&(fe=!fe),Xe(fe),V.blending===er&&V.transparent===!1?St(Si):St(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),s.setMask(V.colorWrite);let xe=V.stencilWrite;o.setTest(xe),xe&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ae(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(V){b!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),b=V)}function Be(V){V!==Zu?(Q(n.CULL_FACE),V!==A&&(V===Mc?n.cullFace(n.BACK):V===Ju?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):oe(n.CULL_FACE),A=V}function Tt(V){V!==z&&(G&&n.lineWidth(V),z=V)}function Ae(V,he,fe){V?(Q(n.POLYGON_OFFSET_FILL),(U!==he||R!==fe)&&(n.polygonOffset(he,fe),U=he,R=fe)):oe(n.POLYGON_OFFSET_FILL)}function Qe(V){V?Q(n.SCISSOR_TEST):oe(n.SCISSOR_TEST)}function Dt(V){V===void 0&&(V=n.TEXTURE0+L-1),ne!==V&&(n.activeTexture(V),ne=V)}function vt(V,he,fe){fe===void 0&&(ne===null?fe=n.TEXTURE0+L-1:fe=ne);let xe=re[fe];xe===void 0&&(xe={type:void 0,texture:void 0},re[fe]=xe),(xe.type!==V||xe.texture!==he)&&(ne!==fe&&(n.activeTexture(fe),ne=fe),n.bindTexture(V,he||Z[V]),xe.type=V,xe.texture=he)}function I(){let V=re[ne];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Y(){try{n.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function te(){try{n.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function le(){try{n.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ee(){try{n.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{n.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pe(){try{n.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ue(){try{n.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(){try{n.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ae(){try{n.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(V){Ve.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),Ve.copy(V))}function ze(V){mt.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),mt.copy(V))}function we(V,he){let fe=l.get(he);fe===void 0&&(fe=new WeakMap,l.set(he,fe));let xe=fe.get(V);xe===void 0&&(xe=n.getUniformBlockIndex(he,V.name),fe.set(V,xe))}function _e(V,he){let xe=l.get(he).get(V);c.get(he)!==xe&&(n.uniformBlockBinding(he,xe,V.__bindingPointIndex),c.set(he,xe))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ne=null,re={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,M=null,_=null,y=null,E=null,C=null,D=new $e(0,0,0),F=0,T=!1,b=null,A=null,z=null,U=null,R=null,Ve.set(0,0,n.canvas.width,n.canvas.height),mt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Q,disable:oe,bindFramebuffer:Ie,drawBuffers:Re,useProgram:it,setBlending:St,setMaterial:Ye,setFlipSided:Xe,setCullFace:Be,setLineWidth:Tt,setPolygonOffset:Ae,setScissorTest:Qe,activeTexture:Dt,bindTexture:vt,unbindTexture:I,compressedTexImage2D:v,compressedTexImage3D:Y,texImage2D:Ne,texImage3D:ae,updateUBOMapping:we,uniformBlockBinding:_e,texStorage2D:pe,texStorage3D:Ue,texSubImage2D:te,texSubImage3D:le,compressedTexSubImage2D:ee,compressedTexSubImage3D:De,scissor:be,viewport:ze,reset:et}}function Zx(n,e,t,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new We,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,v){return f?new OffscreenCanvas(I,v):Yr("canvas")}function x(I,v,Y){let te=1,le=vt(I);if((le.width>Y||le.height>Y)&&(te=Y/Math.max(le.width,le.height)),te<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ee=Math.floor(te*le.width),De=Math.floor(te*le.height);h===void 0&&(h=g(ee,De));let pe=v?g(ee,De):h;return pe.width=ee,pe.height=De,pe.getContext("2d").drawImage(I,0,0,ee,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ee+"x"+De+")."),pe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){n.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(I,v,Y,te,le=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ee=v;if(v===n.RED&&(Y===n.FLOAT&&(ee=n.R32F),Y===n.HALF_FLOAT&&(ee=n.R16F),Y===n.UNSIGNED_BYTE&&(ee=n.R8)),v===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ee=n.R8UI),Y===n.UNSIGNED_SHORT&&(ee=n.R16UI),Y===n.UNSIGNED_INT&&(ee=n.R32UI),Y===n.BYTE&&(ee=n.R8I),Y===n.SHORT&&(ee=n.R16I),Y===n.INT&&(ee=n.R32I)),v===n.RG&&(Y===n.FLOAT&&(ee=n.RG32F),Y===n.HALF_FLOAT&&(ee=n.RG16F),Y===n.UNSIGNED_BYTE&&(ee=n.RG8)),v===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ee=n.RG8UI),Y===n.UNSIGNED_SHORT&&(ee=n.RG16UI),Y===n.UNSIGNED_INT&&(ee=n.RG32UI),Y===n.BYTE&&(ee=n.RG8I),Y===n.SHORT&&(ee=n.RG16I),Y===n.INT&&(ee=n.RG32I)),v===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),Y===n.UNSIGNED_INT&&(ee=n.RGB32UI),Y===n.BYTE&&(ee=n.RGB8I),Y===n.SHORT&&(ee=n.RGB16I),Y===n.INT&&(ee=n.RGB32I)),v===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),Y===n.UNSIGNED_INT&&(ee=n.RGBA32UI),Y===n.BYTE&&(ee=n.RGBA8I),Y===n.SHORT&&(ee=n.RGBA16I),Y===n.INT&&(ee=n.RGBA32I)),v===n.RGB&&(Y===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(ee=n.R11F_G11F_B10F)),v===n.RGBA){let De=le?Ws:Et.getTransfer(te);Y===n.FLOAT&&(ee=n.RGBA32F),Y===n.HALF_FLOAT&&(ee=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(ee=De===Ot?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function y(I,v){let Y;return I?v===null||v===Gi||v===cs?Y=n.DEPTH24_STENCIL8:v===Kn?Y=n.DEPTH32F_STENCIL8:v===os&&(Y=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Gi||v===cs?Y=n.DEPTH_COMPONENT24:v===Kn?Y=n.DEPTH_COMPONENT32F:v===os&&(Y=n.DEPTH_COMPONENT16),Y}function E(I,v){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==wn&&I.minFilter!==Yn?Math.log2(Math.max(v.width,v.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?v.mipmaps.length:1}function C(I){let v=I.target;v.removeEventListener("dispose",C),F(v),v.isVideoTexture&&u.delete(v)}function D(I){let v=I.target;v.removeEventListener("dispose",D),b(v)}function F(I){let v=i.get(I);if(v.__webglInit===void 0)return;let Y=I.source,te=d.get(Y);if(te){let le=te[v.__cacheKey];le.usedTimes--,le.usedTimes===0&&T(I),Object.keys(te).length===0&&d.delete(Y)}i.remove(I)}function T(I){let v=i.get(I);n.deleteTexture(v.__webglTexture);let Y=I.source,te=d.get(Y);delete te[v.__cacheKey],a.memory.textures--}function b(I){let v=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(v.__webglFramebuffer[te]))for(let le=0;le<v.__webglFramebuffer[te].length;le++)n.deleteFramebuffer(v.__webglFramebuffer[te][le]);else n.deleteFramebuffer(v.__webglFramebuffer[te]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[te])}else{if(Array.isArray(v.__webglFramebuffer))for(let te=0;te<v.__webglFramebuffer.length;te++)n.deleteFramebuffer(v.__webglFramebuffer[te]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let te=0;te<v.__webglColorRenderbuffer.length;te++)v.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[te]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let Y=I.textures;for(let te=0,le=Y.length;te<le;te++){let ee=i.get(Y[te]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),a.memory.textures--),i.remove(Y[te])}i.remove(I)}let A=0;function z(){A=0}function U(){let I=A;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),A+=1,I}function R(I){let v=[];return v.push(I.wrapS),v.push(I.wrapT),v.push(I.wrapR||0),v.push(I.magFilter),v.push(I.minFilter),v.push(I.anisotropy),v.push(I.internalFormat),v.push(I.format),v.push(I.type),v.push(I.generateMipmaps),v.push(I.premultiplyAlpha),v.push(I.flipY),v.push(I.unpackAlignment),v.push(I.colorSpace),v.join()}function L(I,v){let Y=i.get(I);if(I.isVideoTexture&&Qe(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Y.__version!==I.version){let te=I.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(Y,I,v);return}}else I.isExternalTexture&&(Y.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+v)}function G(I,v){let Y=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){Z(Y,I,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+v)}function q(I,v){let Y=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){Z(Y,I,v);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+v)}function B(I,v){let Y=i.get(I);if(I.version>0&&Y.__version!==I.version){Q(Y,I,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+v)}let ne={[Wr]:n.REPEAT,[Ni]:n.CLAMP_TO_EDGE,[$a]:n.MIRRORED_REPEAT},re={[wn]:n.NEAREST,[bh]:n.NEAREST_MIPMAP_NEAREST,[oa]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[Po]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},Me={[Ah]:n.NEVER,[Dh]:n.ALWAYS,[Eh]:n.LESS,[Fc]:n.LEQUAL,[Ch]:n.EQUAL,[Ph]:n.GEQUAL,[Rh]:n.GREATER,[Ih]:n.NOTEQUAL};function ge(I,v){if(v.type===Kn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Yn||v.magFilter===Po||v.magFilter===oa||v.magFilter===Vi||v.minFilter===Yn||v.minFilter===Po||v.minFilter===oa||v.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,ne[v.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,ne[v.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,ne[v.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,re[v.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,re[v.minFilter]),v.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,Me[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===wn||v.minFilter!==oa&&v.minFilter!==Vi||v.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ve(I,v){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,v.addEventListener("dispose",C));let te=v.source,le=d.get(te);le===void 0&&(le={},d.set(te,le));let ee=R(v);if(ee!==I.__cacheKey){le[ee]===void 0&&(le[ee]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),le[ee].usedTimes++;let De=le[I.__cacheKey];De!==void 0&&(le[I.__cacheKey].usedTimes--,De.usedTimes===0&&T(v)),I.__cacheKey=ee,I.__webglTexture=le[ee].texture}return Y}function mt(I,v,Y){return Math.floor(Math.floor(I/Y)/v)}function nt(I,v,Y,te){let ee=I.updateRanges;if(ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,Y,te,v.data);else{ee.sort((ae,be)=>ae.start-be.start);let De=0;for(let ae=1;ae<ee.length;ae++){let be=ee[De],ze=ee[ae],we=be.start+be.count,_e=mt(ze.start,v.width,4),et=mt(be.start,v.width,4);ze.start<=we+1&&_e===et&&mt(ze.start+ze.count-1,v.width,4)===_e?be.count=Math.max(be.count,ze.start+ze.count-be.start):(++De,ee[De]=ze)}ee.length=De+1;let pe=n.getParameter(n.UNPACK_ROW_LENGTH),Ue=n.getParameter(n.UNPACK_SKIP_PIXELS),Ne=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let ae=0,be=ee.length;ae<be;ae++){let ze=ee[ae],we=Math.floor(ze.start/4),_e=Math.ceil(ze.count/4),et=we%v.width,V=Math.floor(we/v.width),he=_e,fe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,et),n.pixelStorei(n.UNPACK_SKIP_ROWS,V),t.texSubImage2D(n.TEXTURE_2D,0,et,V,he,fe,Y,te,v.data)}I.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ue),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ne)}}function Z(I,v,Y){let te=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(te=n.TEXTURE_3D);let le=Ve(I,v),ee=v.source;t.bindTexture(te,I.__webglTexture,n.TEXTURE0+Y);let De=i.get(ee);if(ee.version!==De.__version||le===!0){t.activeTexture(n.TEXTURE0+Y);let pe=Et.getPrimaries(Et.workingColorSpace),Ue=v.colorSpace===jn?null:Et.getPrimaries(v.colorSpace),Ne=v.colorSpace===jn||pe===Ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ae=x(v.image,!1,r.maxTextureSize);ae=Dt(v,ae);let be=s.convert(v.format,v.colorSpace),ze=s.convert(v.type),we=_(v.internalFormat,be,ze,v.colorSpace,v.isVideoTexture);ge(te,v);let _e,et=v.mipmaps,V=v.isVideoTexture!==!0,he=De.__version===void 0||le===!0,fe=ee.dataReady,xe=E(v,ae);if(v.isDepthTexture)we=y(v.format===us,v.type),he&&(V?t.texStorage2D(n.TEXTURE_2D,1,we,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,we,ae.width,ae.height,0,be,ze,null));else if(v.isDataTexture)if(et.length>0){V&&he&&t.texStorage2D(n.TEXTURE_2D,xe,we,et[0].width,et[0].height);for(let de=0,ie=et.length;de<ie;de++)_e=et[de],V?fe&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,_e.width,_e.height,be,ze,_e.data):t.texImage2D(n.TEXTURE_2D,de,we,_e.width,_e.height,0,be,ze,_e.data);v.generateMipmaps=!1}else V?(he&&t.texStorage2D(n.TEXTURE_2D,xe,we,ae.width,ae.height),fe&&nt(v,ae,be,ze)):t.texImage2D(n.TEXTURE_2D,0,we,ae.width,ae.height,0,be,ze,ae.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){V&&he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,we,et[0].width,et[0].height,ae.depth);for(let de=0,ie=et.length;de<ie;de++)if(_e=et[de],v.format!==Vn)if(be!==null)if(V){if(fe)if(v.layerUpdates.size>0){let Ee=Hc(_e.width,_e.height,v.format,v.type);for(let qe of v.layerUpdates){let _t=_e.data.subarray(qe*Ee/_e.data.BYTES_PER_ELEMENT,(qe+1)*Ee/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,qe,_e.width,_e.height,1,be,_t)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,_e.width,_e.height,ae.depth,be,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,de,we,_e.width,_e.height,ae.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,_e.width,_e.height,ae.depth,be,ze,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,de,we,_e.width,_e.height,ae.depth,0,be,ze,_e.data)}else{V&&he&&t.texStorage2D(n.TEXTURE_2D,xe,we,et[0].width,et[0].height);for(let de=0,ie=et.length;de<ie;de++)_e=et[de],v.format!==Vn?be!==null?V?fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,de,0,0,_e.width,_e.height,be,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,de,we,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?fe&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,_e.width,_e.height,be,ze,_e.data):t.texImage2D(n.TEXTURE_2D,de,we,_e.width,_e.height,0,be,ze,_e.data)}else if(v.isDataArrayTexture)if(V){if(he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,we,ae.width,ae.height,ae.depth),fe)if(v.layerUpdates.size>0){let de=Hc(ae.width,ae.height,v.format,v.type);for(let ie of v.layerUpdates){let Ee=ae.data.subarray(ie*de/ae.data.BYTES_PER_ELEMENT,(ie+1)*de/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,ae.width,ae.height,1,be,ze,Ee)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,be,ze,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,ae.width,ae.height,ae.depth,0,be,ze,ae.data);else if(v.isData3DTexture)V?(he&&t.texStorage3D(n.TEXTURE_3D,xe,we,ae.width,ae.height,ae.depth),fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,be,ze,ae.data)):t.texImage3D(n.TEXTURE_3D,0,we,ae.width,ae.height,ae.depth,0,be,ze,ae.data);else if(v.isFramebufferTexture){if(he)if(V)t.texStorage2D(n.TEXTURE_2D,xe,we,ae.width,ae.height);else{let de=ae.width,ie=ae.height;for(let Ee=0;Ee<xe;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,we,de,ie,0,be,ze,null),de>>=1,ie>>=1}}else if(et.length>0){if(V&&he){let de=vt(et[0]);t.texStorage2D(n.TEXTURE_2D,xe,we,de.width,de.height)}for(let de=0,ie=et.length;de<ie;de++)_e=et[de],V?fe&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,be,ze,_e):t.texImage2D(n.TEXTURE_2D,de,we,be,ze,_e);v.generateMipmaps=!1}else if(V){if(he){let de=vt(ae);t.texStorage2D(n.TEXTURE_2D,xe,we,de.width,de.height)}fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,ze,ae)}else t.texImage2D(n.TEXTURE_2D,0,we,be,ze,ae);m(v)&&p(te),De.__version=ee.version,v.onUpdate&&v.onUpdate(v)}I.__version=v.version}function Q(I,v,Y){if(v.image.length!==6)return;let te=Ve(I,v),le=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+Y);let ee=i.get(le);if(le.version!==ee.__version||te===!0){t.activeTexture(n.TEXTURE0+Y);let De=Et.getPrimaries(Et.workingColorSpace),pe=v.colorSpace===jn?null:Et.getPrimaries(v.colorSpace),Ue=v.colorSpace===jn||De===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let Ne=v.isCompressedTexture||v.image[0].isCompressedTexture,ae=v.image[0]&&v.image[0].isDataTexture,be=[];for(let ie=0;ie<6;ie++)!Ne&&!ae?be[ie]=x(v.image[ie],!0,r.maxCubemapSize):be[ie]=ae?v.image[ie].image:v.image[ie],be[ie]=Dt(v,be[ie]);let ze=be[0],we=s.convert(v.format,v.colorSpace),_e=s.convert(v.type),et=_(v.internalFormat,we,_e,v.colorSpace),V=v.isVideoTexture!==!0,he=ee.__version===void 0||te===!0,fe=le.dataReady,xe=E(v,ze);ge(n.TEXTURE_CUBE_MAP,v);let de;if(Ne){V&&he&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,et,ze.width,ze.height);for(let ie=0;ie<6;ie++){de=be[ie].mipmaps;for(let Ee=0;Ee<de.length;Ee++){let qe=de[Ee];v.format!==Vn?we!==null?V?fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,0,0,qe.width,qe.height,we,qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,et,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,0,0,qe.width,qe.height,we,_e,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,et,qe.width,qe.height,0,we,_e,qe.data)}}}else{if(de=v.mipmaps,V&&he){de.length>0&&xe++;let ie=vt(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,et,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ae){V?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,be[ie].width,be[ie].height,we,_e,be[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,et,be[ie].width,be[ie].height,0,we,_e,be[ie].data);for(let Ee=0;Ee<de.length;Ee++){let _t=de[Ee].image[ie].image;V?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,0,0,_t.width,_t.height,we,_e,_t.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,et,_t.width,_t.height,0,we,_e,_t.data)}}else{V?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,we,_e,be[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,et,we,_e,be[ie]);for(let Ee=0;Ee<de.length;Ee++){let qe=de[Ee];V?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,0,0,we,_e,qe.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,et,we,_e,qe.image[ie])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),ee.__version=le.version,v.onUpdate&&v.onUpdate(v)}I.__version=v.version}function oe(I,v,Y,te,le,ee){let De=s.convert(Y.format,Y.colorSpace),pe=s.convert(Y.type),Ue=_(Y.internalFormat,De,pe,Y.colorSpace),Ne=i.get(v),ae=i.get(Y);if(ae.__renderTarget=v,!Ne.__hasExternalTextures){let be=Math.max(1,v.width>>ee),ze=Math.max(1,v.height>>ee);le===n.TEXTURE_3D||le===n.TEXTURE_2D_ARRAY?t.texImage3D(le,ee,Ue,be,ze,v.depth,0,De,pe,null):t.texImage2D(le,ee,Ue,be,ze,0,De,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Ae(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,le,ae.__webglTexture,0,Tt(v)):(le===n.TEXTURE_2D||le>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,le,ae.__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(I,v,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,I),v.depthBuffer){let te=v.depthTexture,le=te&&te.isDepthTexture?te.type:null,ee=y(v.stencilBuffer,le),De=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=Tt(v);Ae(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,ee,v.width,v.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,ee,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ee,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,I)}else{let te=v.textures;for(let le=0;le<te.length;le++){let ee=te[le],De=s.convert(ee.format,ee.colorSpace),pe=s.convert(ee.type),Ue=_(ee.internalFormat,De,pe,ee.colorSpace),Ne=Tt(v);Y&&Ae(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Ue,v.width,v.height):Ae(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,Ue,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Ue,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(I,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let te=i.get(v.depthTexture);te.__renderTarget=v,(!te.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),L(v.depthTexture,0);let le=te.__webglTexture,ee=Tt(v);if(v.depthTexture.format===Xr)Ae(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0);else if(v.depthTexture.format===us)Ae(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function it(I){let v=i.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==I.depthTexture){let te=I.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),te){let le=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,te.removeEventListener("dispose",le)};te.addEventListener("dispose",le),v.__depthDisposeCallback=le}v.__boundDepthTexture=te}if(I.depthTexture&&!v.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");let te=I.texture.mipmaps;te&&te.length>0?Re(v.__webglFramebuffer[0],I):Re(v.__webglFramebuffer,I)}else if(Y){v.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[te]),v.__webglDepthbuffer[te]===void 0)v.__webglDepthbuffer[te]=n.createRenderbuffer(),Ie(v.__webglDepthbuffer[te],I,!1);else{let le=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=v.__webglDepthbuffer[te];n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,ee)}}else{let te=I.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Ie(v.__webglDepthbuffer,I,!1);else{let le=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(I,v,Y){let te=i.get(I);v!==void 0&&oe(te.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&it(I)}function P(I){let v=I.texture,Y=i.get(I),te=i.get(v);I.addEventListener("dispose",D);let le=I.textures,ee=I.isWebGLCubeRenderTarget===!0,De=le.length>1;if(De||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=v.version,a.memory.textures++),ee){Y.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(v.mipmaps&&v.mipmaps.length>0){Y.__webglFramebuffer[pe]=[];for(let Ue=0;Ue<v.mipmaps.length;Ue++)Y.__webglFramebuffer[pe][Ue]=n.createFramebuffer()}else Y.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){Y.__webglFramebuffer=[];for(let pe=0;pe<v.mipmaps.length;pe++)Y.__webglFramebuffer[pe]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(De)for(let pe=0,Ue=le.length;pe<Ue;pe++){let Ne=i.get(le[pe]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),a.memory.textures++)}if(I.samples>0&&Ae(I)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let pe=0;pe<le.length;pe++){let Ue=le[pe];Y.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[pe]);let Ne=s.convert(Ue.format,Ue.colorSpace),ae=s.convert(Ue.type),be=_(Ue.internalFormat,Ne,ae,Ue.colorSpace,I.isXRRenderTarget===!0),ze=Tt(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,be,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,Y.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(Y.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),ge(n.TEXTURE_CUBE_MAP,v);for(let pe=0;pe<6;pe++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ue=0;Ue<v.mipmaps.length;Ue++)oe(Y.__webglFramebuffer[pe][Ue],I,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue);else oe(Y.__webglFramebuffer[pe],I,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let pe=0,Ue=le.length;pe<Ue;pe++){let Ne=le[pe],ae=i.get(Ne),be=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(be=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,ae.__webglTexture),ge(be,Ne),oe(Y.__webglFramebuffer,I,Ne,n.COLOR_ATTACHMENT0+pe,be,0),m(Ne)&&p(be)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pe=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,te.__webglTexture),ge(pe,v),v.mipmaps&&v.mipmaps.length>0)for(let Ue=0;Ue<v.mipmaps.length;Ue++)oe(Y.__webglFramebuffer[Ue],I,v,n.COLOR_ATTACHMENT0,pe,Ue);else oe(Y.__webglFramebuffer,I,v,n.COLOR_ATTACHMENT0,pe,0);m(v)&&p(pe),t.unbindTexture()}I.depthBuffer&&it(I)}function St(I){let v=I.textures;for(let Y=0,te=v.length;Y<te;Y++){let le=v[Y];if(m(le)){let ee=M(I),De=i.get(le).__webglTexture;t.bindTexture(ee,De),p(ee),t.unbindTexture()}}}let Ye=[],Xe=[];function Be(I){if(I.samples>0){if(Ae(I)===!1){let v=I.textures,Y=I.width,te=I.height,le=n.COLOR_BUFFER_BIT,ee=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(I),pe=v.length>1;if(pe)for(let Ne=0;Ne<v.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);let Ue=I.texture.mipmaps;Ue&&Ue.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ne=0;Ne<v.length;Ne++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(le|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(le|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[Ne]);let ae=i.get(v[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,Y,te,0,0,Y,te,le,n.NEAREST),c===!0&&(Ye.length=0,Xe.length=0,Ye.push(n.COLOR_ATTACHMENT0+Ne),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ye.push(ee),Xe.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Xe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ye))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Ne=0;Ne<v.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,De.__webglColorRenderbuffer[Ne]);let ae=i.get(v[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let v=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Tt(I){return Math.min(r.maxSamples,I.samples)}function Ae(I){let v=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Qe(I){let v=a.render.frame;u.get(I)!==v&&(u.set(I,v),I.update())}function Dt(I,v){let Y=I.colorSpace,te=I.format,le=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Y!==nr&&Y!==jn&&(Et.getTransfer(Y)===Ot?(te!==Vn||le!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),v}function vt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=z,this.setTexture2D=L,this.setTexture2DArray=G,this.setTexture3D=q,this.setTextureCube=B,this.rebindTextures=lt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Ae}function Jx(n,e){function t(i,r=jn){let s,a=Et.getTransfer(r);if(i===$n)return n.UNSIGNED_BYTE;if(i===Lo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Uo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ic)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Cc)return n.BYTE;if(i===Rc)return n.SHORT;if(i===os)return n.UNSIGNED_SHORT;if(i===Do)return n.INT;if(i===Gi)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===ls)return n.HALF_FLOAT;if(i===Dc)return n.ALPHA;if(i===Lc)return n.RGB;if(i===Vn)return n.RGBA;if(i===Xr)return n.DEPTH_COMPONENT;if(i===us)return n.DEPTH_STENCIL;if(i===No)return n.RED;if(i===Fo)return n.RED_INTEGER;if(i===Uc)return n.RG;if(i===zo)return n.RG_INTEGER;if(i===Oo)return n.RGBA_INTEGER;if(i===la||i===ca||i===ua||i===ha)if(a===Ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===la)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===la)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ca)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ua)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ha)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bo||i===ko||i===Vo||i===Go)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ko)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Go)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ho||i===Wo||i===Xo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ho||i===Wo)return a===Ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Xo)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qo||i===Yo||i===Zo||i===Jo||i===$o||i===Ko||i===jo||i===Qo||i===el||i===tl||i===nl||i===il||i===rl||i===sl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qo)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yo)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zo)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jo)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$o)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ko)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jo)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qo)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===el)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tl)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nl)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===il)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rl)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sl)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===al||i===ol||i===ll)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===al)return a===Ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ol)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ll)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cl||i===ul||i===hl||i===dl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===cl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ul)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var $x=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kx=`
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

}`,nu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ea(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new An({vertexShader:$x,fragmentShader:Kx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new Dn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},iu=class extends yi{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new nu,p={},M=t.getContextAttributes(),_=null,y=null,E=[],C=[],D=new We,F=null,T=new sn;T.viewport=new Ct;let b=new sn;b.viewport=new Ct;let A=[T,b],z=new Mo,U=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Q=E[Z];return Q===void 0&&(Q=new jr,E[Z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Z){let Q=E[Z];return Q===void 0&&(Q=new jr,E[Z]=Q),Q.getGripSpace()},this.getHand=function(Z){let Q=E[Z];return Q===void 0&&(Q=new jr,E[Z]=Q),Q.getHandSpace()};function L(Z){let Q=C.indexOf(Z.inputSource);if(Q===-1)return;let oe=E[Q];oe!==void 0&&(oe.update(Z.inputSource,Z.frame,l||a),oe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",q);for(let Z=0;Z<E.length;Z++){let Q=C[Z];Q!==null&&(C[Z]=null,E[Z].disconnect(Q))}U=null,R=null,m.reset();for(let Z in p)delete p[Z];e.setRenderTarget(_),f=null,d=null,h=null,r=null,y=null,nt.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",G),r.addEventListener("inputsourceschange",q),M.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(D),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Ie=null,Re=null;M.depth&&(Re=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=M.stencil?us:Xr,Ie=M.stencil?cs:Gi);let it={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(it),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new ii(d.textureWidth,d.textureHeight,{format:Vn,type:$n,depthTexture:new Qs(d.textureWidth,d.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let oe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ii(f.framebufferWidth,f.framebufferHeight,{format:Vn,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),nt.setContext(r),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(Z){for(let Q=0;Q<Z.removed.length;Q++){let oe=Z.removed[Q],Ie=C.indexOf(oe);Ie>=0&&(C[Ie]=null,E[Ie].disconnect(oe))}for(let Q=0;Q<Z.added.length;Q++){let oe=Z.added[Q],Ie=C.indexOf(oe);if(Ie===-1){for(let it=0;it<E.length;it++)if(it>=C.length){C.push(oe),Ie=it;break}else if(C[it]===null){C[it]=oe,Ie=it;break}if(Ie===-1)break}let Re=E[Ie];Re&&Re.connect(oe)}}let B=new O,ne=new O;function re(Z,Q,oe){B.setFromMatrixPosition(Q.matrixWorld),ne.setFromMatrixPosition(oe.matrixWorld);let Ie=B.distanceTo(ne),Re=Q.projectionMatrix.elements,it=oe.projectionMatrix.elements,lt=Re[14]/(Re[10]-1),P=Re[14]/(Re[10]+1),St=(Re[9]+1)/Re[5],Ye=(Re[9]-1)/Re[5],Xe=(Re[8]-1)/Re[0],Be=(it[8]+1)/it[0],Tt=lt*Xe,Ae=lt*Be,Qe=Ie/(-Xe+Be),Dt=Qe*-Xe;if(Q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Dt),Z.translateZ(Qe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Re[10]===-1)Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let vt=lt+Qe,I=P+Qe,v=Tt-Dt,Y=Ae+(Ie-Dt),te=St*P/I*vt,le=Ye*P/I*vt;Z.projectionMatrix.makePerspective(v,Y,te,le,vt,I),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Me(Z,Q){Q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let Q=Z.near,oe=Z.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),z.near=b.near=T.near=Q,z.far=b.far=T.far=oe,(U!==z.near||R!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),U=z.near,R=z.far),z.layers.mask=Z.layers.mask|6,T.layers.mask=z.layers.mask&3,b.layers.mask=z.layers.mask&5;let Ie=Z.parent,Re=z.cameras;Me(z,Ie);for(let it=0;it<Re.length;it++)Me(Re[it],Ie);Re.length===2?re(z,T,b):z.projectionMatrix.copy(T.projectionMatrix),ge(Z,z,Ie)};function ge(Z,Q,oe){oe===null?Z.matrix.copy(Q.matrixWorld):(Z.matrix.copy(oe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=qr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(Z){return p[Z]};let Ve=null;function mt(Z,Q){if(u=Q.getViewerPose(l||a),g=Q,u!==null){let oe=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ie=!1;oe.length!==z.cameras.length&&(z.cameras.length=0,Ie=!0);for(let P=0;P<oe.length;P++){let St=oe[P],Ye=null;if(f!==null)Ye=f.getViewport(St);else{let Be=h.getViewSubImage(d,St);Ye=Be.viewport,P===0&&(e.setRenderTargetTextures(y,Be.colorTexture,Be.depthStencilTexture),e.setRenderTarget(y))}let Xe=A[P];Xe===void 0&&(Xe=new sn,Xe.layers.enable(P),Xe.viewport=new Ct,A[P]=Xe),Xe.matrix.fromArray(St.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(St.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),P===0&&(z.matrix.copy(Xe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ie===!0&&z.cameras.push(Xe)}let Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let P=h.getDepthInformation(oe[0]);P&&P.isValid&&P.texture&&m.init(P,r.renderState)}if(Re&&Re.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let P=0;P<oe.length;P++){let St=oe[P].camera;if(St){let Ye=p[St];Ye||(Ye=new ea,p[St]=Ye);let Xe=h.getCameraImage(St);Ye.sourceTexture=Xe}}}}for(let oe=0;oe<E.length;oe++){let Ie=C[oe],Re=E[oe];Ie!==null&&Re!==void 0&&Re.update(Ie,Q,l||a)}Ve&&Ve(Z,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}let nt=new od;nt.setAnimationLoop(mt),this.setAnimationLoop=function(Z){Ve=Z},this.dispose=function(){}}},xr=new Zn,jx=new Lt;function Qx(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,kc(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),_=M.envMap,y=M.envMapRotation;_&&(m.envMap.value=_,xr.copy(y),xr.x*=-1,xr.y*=-1,xr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),m.envMapRotation.value.setFromMatrix4(jx.makeRotationFromEuler(xr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function e_(n,e,t,i){let r={},s={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,_){let y=_.program;i.uniformBlockBinding(M,y)}function l(M,_){let y=r[M.id];y===void 0&&(g(M),y=u(M),r[M.id]=y,M.addEventListener("dispose",m));let E=_.program;i.updateUBOMapping(M,E);let C=e.render.frame;s[M.id]!==C&&(d(M),s[M.id]=C)}function u(M){let _=h();M.__bindingPointIndex=_;let y=n.createBuffer(),E=M.__size,C=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,E,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let _=r[M.id],y=M.uniforms,E=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let C=0,D=y.length;C<D;C++){let F=Array.isArray(y[C])?y[C]:[y[C]];for(let T=0,b=F.length;T<b;T++){let A=F[T];if(f(A,C,T,E)===!0){let z=A.__offset,U=Array.isArray(A.value)?A.value:[A.value],R=0;for(let L=0;L<U.length;L++){let G=U[L],q=x(G);typeof G=="number"||typeof G=="boolean"?(A.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,z+R,A.__data)):G.isMatrix3?(A.__data[0]=G.elements[0],A.__data[1]=G.elements[1],A.__data[2]=G.elements[2],A.__data[3]=0,A.__data[4]=G.elements[3],A.__data[5]=G.elements[4],A.__data[6]=G.elements[5],A.__data[7]=0,A.__data[8]=G.elements[6],A.__data[9]=G.elements[7],A.__data[10]=G.elements[8],A.__data[11]=0):(G.toArray(A.__data,R),R+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,_,y,E){let C=M.value,D=_+"_"+y;if(E[D]===void 0)return typeof C=="number"||typeof C=="boolean"?E[D]=C:E[D]=C.clone(),!0;{let F=E[D];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return E[D]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(M){let _=M.uniforms,y=0,E=16;for(let D=0,F=_.length;D<F;D++){let T=Array.isArray(_[D])?_[D]:[_[D]];for(let b=0,A=T.length;b<A;b++){let z=T[b],U=Array.isArray(z.value)?z.value:[z.value];for(let R=0,L=U.length;R<L;R++){let G=U[R],q=x(G),B=y%E,ne=B%q.boundary,re=B+ne;y+=ne,re!==0&&E-re<q.storage&&(y+=E-re),z.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=q.storage}}}let C=y%E;return C>0&&(y+=E-C),M.__size=y,M.__cache={},this}function x(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){let _=M.target;_.removeEventListener("dispose",m);let y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(let M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}var ps=class{constructor(e={}){let{canvas:t=Lh(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,M=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,E=!1;this._outputColorSpace=Qt;let C=0,D=0,F=null,T=-1,b=null,A=new Ct,z=new Ct,U=null,R=new $e(0),L=0,G=t.width,q=t.height,B=1,ne=null,re=null,Me=new Ct(0,0,G,q),ge=new Ct(0,0,G,q),Ve=!1,mt=new ns,nt=!1,Z=!1,Q=new Lt,oe=new O,Ie=new Ct,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},it=!1;function lt(){return F===null?B:1}let P=i;function St(w,W){return t.getContext(w,W)}try{let w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",de,!1),P===null){let W="webgl2";if(P=St(W,w),P===null)throw St(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ye,Xe,Be,Tt,Ae,Qe,Dt,vt,I,v,Y,te,le,ee,De,pe,Ue,Ne,ae,be,ze,we,_e,et;function V(){Ye=new _0(P),Ye.init(),we=new Jx(P,Ye),Xe=new h0(P,Ye,e,we),Be=new Yx(P,Ye),Xe.reversedDepthBuffer&&d&&Be.buffers.depth.setReversed(!0),Tt=new M0(P),Ae=new Ux,Qe=new Zx(P,Ye,Be,Ae,Xe,we,Tt),Dt=new f0(y),vt=new x0(y),I=new Ep(P),_e=new c0(P,I),v=new y0(P,I,Tt,_e),Y=new S0(P,v,I,Tt),ae=new b0(P,Xe,Qe),pe=new d0(Ae),te=new Lx(y,Dt,vt,Ye,Xe,_e,pe),le=new Qx(y,Ae),ee=new Fx,De=new Gx(Ye),Ne=new l0(y,Dt,vt,Be,Y,f,c),Ue=new Xx(y,Y,Xe),et=new e_(P,Tt,Xe,Be),be=new u0(P,Ye,Tt),ze=new v0(P,Ye,Tt),Tt.programs=te.programs,y.capabilities=Xe,y.extensions=Ye,y.properties=Ae,y.renderLists=ee,y.shadowMap=Ue,y.state=Be,y.info=Tt}V();let he=new iu(y,P);this.xr=he,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let w=Ye.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ye.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(w){w!==void 0&&(B=w,this.setSize(G,q,!1))},this.getSize=function(w){return w.set(G,q)},this.setSize=function(w,W,J=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,q=W,t.width=Math.floor(w*B),t.height=Math.floor(W*B),J===!0&&(t.style.width=w+"px",t.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(G*B,q*B).floor()},this.setDrawingBufferSize=function(w,W,J){G=w,q=W,B=J,t.width=Math.floor(w*J),t.height=Math.floor(W*J),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(Me)},this.setViewport=function(w,W,J,j){w.isVector4?Me.set(w.x,w.y,w.z,w.w):Me.set(w,W,J,j),Be.viewport(A.copy(Me).multiplyScalar(B).round())},this.getScissor=function(w){return w.copy(ge)},this.setScissor=function(w,W,J,j){w.isVector4?ge.set(w.x,w.y,w.z,w.w):ge.set(w,W,J,j),Be.scissor(z.copy(ge).multiplyScalar(B).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(w){Be.setScissorTest(Ve=w)},this.setOpaqueSort=function(w){ne=w},this.setTransparentSort=function(w){re=w},this.getClearColor=function(w){return w.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,J=!0){let j=0;if(w){let X=!1;if(F!==null){let ce=F.texture.format;X=ce===Oo||ce===zo||ce===Fo}if(X){let ce=F.texture.type,ye=ce===$n||ce===Gi||ce===os||ce===cs||ce===Lo||ce===Uo,ve=Ne.getClearColor(),Ce=Ne.getClearAlpha(),Ge=ve.r,Ze=ve.g,Fe=ve.b;ye?(g[0]=Ge,g[1]=Ze,g[2]=Fe,g[3]=Ce,P.clearBufferuiv(P.COLOR,0,g)):(x[0]=Ge,x[1]=Ze,x[2]=Fe,x[3]=Ce,P.clearBufferiv(P.COLOR,0,x))}else j|=P.COLOR_BUFFER_BIT}W&&(j|=P.DEPTH_BUFFER_BIT),J&&(j|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Ne.dispose(),ee.dispose(),De.dispose(),Ae.dispose(),Dt.dispose(),vt.dispose(),Y.dispose(),_e.dispose(),et.dispose(),te.dispose(),he.dispose(),he.removeEventListener("sessionstart",Zt),he.removeEventListener("sessionend",ei),Rn.stop()};function fe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let w=Tt.autoReset,W=Ue.enabled,J=Ue.autoUpdate,j=Ue.needsUpdate,X=Ue.type;V(),Tt.autoReset=w,Ue.enabled=W,Ue.autoUpdate=J,Ue.needsUpdate=j,Ue.type=X}function de(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ie(w){let W=w.target;W.removeEventListener("dispose",ie),Ee(W)}function Ee(w){qe(w),Ae.remove(w)}function qe(w){let W=Ae.get(w).programs;W!==void 0&&(W.forEach(function(J){te.releaseProgram(J)}),w.isShaderMaterial&&te.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,J,j,X,ce){W===null&&(W=Re);let ye=X.isMesh&&X.matrixWorld.determinant()<0,ve=Yi(w,W,J,j,X);Be.setMaterial(j,ye);let Ce=J.index,Ge=1;if(j.wireframe===!0){if(Ce=v.getWireframeAttribute(J),Ce===void 0)return;Ge=2}let Ze=J.drawRange,Fe=J.attributes.position,ct=Ze.start*Ge,wt=(Ze.start+Ze.count)*Ge;ce!==null&&(ct=Math.max(ct,ce.start*Ge),wt=Math.min(wt,(ce.start+ce.count)*Ge)),Ce!==null?(ct=Math.max(ct,0),wt=Math.min(wt,Ce.count)):Fe!=null&&(ct=Math.max(ct,0),wt=Math.min(wt,Fe.count));let Ut=wt-ct;if(Ut<0||Ut===1/0)return;_e.setup(X,j,ve,J,Ce);let gt,bt=be;if(Ce!==null&&(gt=I.get(Ce),bt=ze,bt.setIndex(gt)),X.isMesh)j.wireframe===!0?(Be.setLineWidth(j.wireframeLinewidth*lt()),bt.setMode(P.LINES)):bt.setMode(P.TRIANGLES);else if(X.isLine){let Le=j.linewidth;Le===void 0&&(Le=1),Be.setLineWidth(Le*lt()),X.isLineSegments?bt.setMode(P.LINES):X.isLineLoop?bt.setMode(P.LINE_LOOP):bt.setMode(P.LINE_STRIP)}else X.isPoints?bt.setMode(P.POINTS):X.isSprite&&bt.setMode(P.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Zr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))bt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Le=X._multiDrawStarts,kt=X._multiDrawCounts,ht=X._multiDrawCount,Yt=Ce?I.get(Ce).bytesPerElement:1,Xt=Ae.get(j).currentProgram.getUniforms();for(let Jt=0;Jt<ht;Jt++)Xt.setValue(P,"_gl_DrawID",Jt),bt.render(Le[Jt]/Yt,kt[Jt])}else if(X.isInstancedMesh)bt.renderInstances(ct,Ut,X.count);else if(J.isInstancedBufferGeometry){let Le=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,kt=Math.min(J.instanceCount,Le);bt.renderInstances(ct,Ut,kt)}else bt.render(ct,Ut)};function _t(w,W,J){w.transparent===!0&&w.side===qt&&w.forceSinglePass===!1?(w.side=mn,w.needsUpdate=!0,nn(w,W,J),w.side=_i,w.needsUpdate=!0,nn(w,W,J),w.side=qt):nn(w,W,J)}this.compile=function(w,W,J=null){J===null&&(J=w),p=De.get(J),p.init(W),_.push(p),J.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),w!==J&&w.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();let j=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let ce=X.material;if(ce)if(Array.isArray(ce))for(let ye=0;ye<ce.length;ye++){let ve=ce[ye];_t(ve,J,X),j.add(ve)}else _t(ce,J,X),j.add(ce)}),p=_.pop(),j},this.compileAsync=function(w,W,J=null){let j=this.compile(w,W,J);return new Promise(X=>{function ce(){if(j.forEach(function(ye){Ae.get(ye).currentProgram.isReady()&&j.delete(ye)}),j.size===0){X(w);return}setTimeout(ce,10)}Ye.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let ot=null;function cn(w){ot&&ot(w)}function Zt(){Rn.stop()}function ei(){Rn.start()}let Rn=new od;Rn.setAnimationLoop(cn),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(w){ot=w,he.setAnimationLoop(w),w===null?Rn.stop():Rn.start()},he.addEventListener("sessionstart",Zt),he.addEventListener("sessionend",ei),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(W),W=he.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,W,F),p=De.get(w,_.length),p.init(W),_.push(p),Q.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),mt.setFromProjectionMatrix(Q,qn,W.reversedDepth),Z=this.localClippingEnabled,nt=pe.init(this.clippingPlanes,Z),m=ee.get(w,M.length),m.init(),M.push(m),he.enabled===!0&&he.isPresenting===!0){let ce=y.xr.getDepthSensingMesh();ce!==null&&Xi(ce,W,-1/0,y.sortObjects)}Xi(w,W,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ne,re),it=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,it&&Ne.addToRenderList(m,w),this.info.render.frame++,nt===!0&&pe.beginShadows();let J=p.state.shadowsArray;Ue.render(J,w,W),nt===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=m.opaque,X=m.transmissive;if(p.setupLights(),W.isArrayCamera){let ce=W.cameras;if(X.length>0)for(let ye=0,ve=ce.length;ye<ve;ye++){let Ce=ce[ye];Fn(j,X,w,Ce)}it&&Ne.render(w);for(let ye=0,ve=ce.length;ye<ve;ye++){let Ce=ce[ye];ci(m,w,Ce,Ce.viewport)}}else X.length>0&&Fn(j,X,w,W),it&&Ne.render(w),ci(m,w,W);F!==null&&D===0&&(Qe.updateMultisampleRenderTarget(F),Qe.updateRenderTargetMipmap(F)),w.isScene===!0&&w.onAfterRender(y,w,W),_e.resetDefaultState(),T=-1,b=null,_.pop(),_.length>0?(p=_[_.length-1],nt===!0&&pe.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Xi(w,W,J,j){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||mt.intersectsSprite(w)){j&&Ie.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Q);let ye=Y.update(w),ve=w.material;ve.visible&&m.push(w,ye,ve,J,Ie.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||mt.intersectsObject(w))){let ye=Y.update(w),ve=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ie.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ie.copy(ye.boundingSphere.center)),Ie.applyMatrix4(w.matrixWorld).applyMatrix4(Q)),Array.isArray(ve)){let Ce=ye.groups;for(let Ge=0,Ze=Ce.length;Ge<Ze;Ge++){let Fe=Ce[Ge],ct=ve[Fe.materialIndex];ct&&ct.visible&&m.push(w,ye,ct,J,Ie.z,Fe)}}else ve.visible&&m.push(w,ye,ve,J,Ie.z,null)}}let ce=w.children;for(let ye=0,ve=ce.length;ye<ve;ye++)Xi(ce[ye],W,J,j)}function ci(w,W,J,j){let X=w.opaque,ce=w.transmissive,ye=w.transparent;p.setupLightsView(J),nt===!0&&pe.setGlobalState(y.clippingPlanes,J),j&&Be.viewport(A.copy(j)),X.length>0&&qi(X,W,J),ce.length>0&&qi(ce,W,J),ye.length>0&&qi(ye,W,J),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function Fn(w,W,J,j){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new ii(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?ls:$n,minFilter:Vi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));let ce=p.state.transmissionRenderTarget[j.id],ye=j.viewport||A;ce.setSize(ye.z*y.transmissionResolutionScale,ye.w*y.transmissionResolutionScale);let ve=y.getRenderTarget(),Ce=y.getActiveCubeFace(),Ge=y.getActiveMipmapLevel();y.setRenderTarget(ce),y.getClearColor(R),L=y.getClearAlpha(),L<1&&y.setClearColor(16777215,.5),y.clear(),it&&Ne.render(J);let Ze=y.toneMapping;y.toneMapping=wi;let Fe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),nt===!0&&pe.setGlobalState(y.clippingPlanes,j),qi(w,J,j),Qe.updateMultisampleRenderTarget(ce),Qe.updateRenderTargetMipmap(ce),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let wt=0,Ut=W.length;wt<Ut;wt++){let gt=W[wt],bt=gt.object,Le=gt.geometry,kt=gt.material,ht=gt.group;if(kt.side===qt&&bt.layers.test(j.layers)){let Yt=kt.side;kt.side=mn,kt.needsUpdate=!0,Sr(bt,J,j,Le,kt,ht),kt.side=Yt,kt.needsUpdate=!0,ct=!0}}ct===!0&&(Qe.updateMultisampleRenderTarget(ce),Qe.updateRenderTargetMipmap(ce))}y.setRenderTarget(ve,Ce,Ge),y.setClearColor(R,L),Fe!==void 0&&(j.viewport=Fe),y.toneMapping=Ze}function qi(w,W,J){let j=W.isScene===!0?W.overrideMaterial:null;for(let X=0,ce=w.length;X<ce;X++){let ye=w[X],ve=ye.object,Ce=ye.geometry,Ge=ye.group,Ze=ye.material;Ze.allowOverride===!0&&j!==null&&(Ze=j),ve.layers.test(J.layers)&&Sr(ve,W,J,Ce,Ze,Ge)}}function Sr(w,W,J,j,X,ce){w.onBeforeRender(y,W,J,j,X,ce),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(y,W,J,j,w,ce),X.transparent===!0&&X.side===qt&&X.forceSinglePass===!1?(X.side=mn,X.needsUpdate=!0,y.renderBufferDirect(J,W,j,X,w,ce),X.side=_i,X.needsUpdate=!0,y.renderBufferDirect(J,W,j,X,w,ce),X.side=qt):y.renderBufferDirect(J,W,j,X,w,ce),w.onAfterRender(y,W,J,j,X,ce)}function nn(w,W,J){W.isScene!==!0&&(W=Re);let j=Ae.get(w),X=p.state.lights,ce=p.state.shadowsArray,ye=X.state.version,ve=te.getParameters(w,X.state,ce,W,J),Ce=te.getProgramCacheKey(ve),Ge=j.programs;j.environment=w.isMeshStandardMaterial?W.environment:null,j.fog=W.fog,j.envMap=(w.isMeshStandardMaterial?vt:Dt).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,Ge===void 0&&(w.addEventListener("dispose",ie),Ge=new Map,j.programs=Ge);let Ze=Ge.get(Ce);if(Ze!==void 0){if(j.currentProgram===Ze&&j.lightsStateVersion===ye)return Ai(w,ve),Ze}else ve.uniforms=te.getUniforms(w),w.onBeforeCompile(ve,y),Ze=te.acquireProgram(ve,Ce),Ge.set(Ce,Ze),j.uniforms=ve.uniforms;let Fe=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Fe.clippingPlanes=pe.uniform),Ai(w,ve),j.needsLights=ws(w),j.lightsStateVersion=ye,j.needsLights&&(Fe.ambientLightColor.value=X.state.ambient,Fe.lightProbe.value=X.state.probe,Fe.directionalLights.value=X.state.directional,Fe.directionalLightShadows.value=X.state.directionalShadow,Fe.spotLights.value=X.state.spot,Fe.spotLightShadows.value=X.state.spotShadow,Fe.rectAreaLights.value=X.state.rectArea,Fe.ltc_1.value=X.state.rectAreaLTC1,Fe.ltc_2.value=X.state.rectAreaLTC2,Fe.pointLights.value=X.state.point,Fe.pointLightShadows.value=X.state.pointShadow,Fe.hemisphereLights.value=X.state.hemi,Fe.directionalShadowMap.value=X.state.directionalShadowMap,Fe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Fe.spotShadowMap.value=X.state.spotShadowMap,Fe.spotLightMatrix.value=X.state.spotLightMatrix,Fe.spotLightMap.value=X.state.spotLightMap,Fe.pointShadowMap.value=X.state.pointShadowMap,Fe.pointShadowMatrix.value=X.state.pointShadowMatrix),j.currentProgram=Ze,j.uniformsList=null,Ze}function Ti(w){if(w.uniformsList===null){let W=w.currentProgram.getUniforms();w.uniformsList=fs.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function Ai(w,W){let J=Ae.get(w);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.batchingColor=W.batchingColor,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.instancingMorph=W.instancingMorph,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function Yi(w,W,J,j,X){W.isScene!==!0&&(W=Re),Qe.resetTextureUnits();let ce=W.fog,ye=j.isMeshStandardMaterial?W.environment:null,ve=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:nr,Ce=(j.isMeshStandardMaterial?vt:Dt).get(j.envMap||ye),Ge=j.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ze=!!J.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Fe=!!J.morphAttributes.position,ct=!!J.morphAttributes.normal,wt=!!J.morphAttributes.color,Ut=wi;j.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ut=y.toneMapping);let gt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,bt=gt!==void 0?gt.length:0,Le=Ae.get(j),kt=p.state.lights;if(nt===!0&&(Z===!0||w!==b)){let Kt=w===b&&j.id===T;pe.setState(j,w,Kt)}let ht=!1;j.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==kt.state.version||Le.outputColorSpace!==ve||X.isBatchedMesh&&Le.batching===!1||!X.isBatchedMesh&&Le.batching===!0||X.isBatchedMesh&&Le.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Le.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Le.instancing===!1||!X.isInstancedMesh&&Le.instancing===!0||X.isSkinnedMesh&&Le.skinning===!1||!X.isSkinnedMesh&&Le.skinning===!0||X.isInstancedMesh&&Le.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Le.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Le.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Le.instancingMorph===!1&&X.morphTexture!==null||Le.envMap!==Ce||j.fog===!0&&Le.fog!==ce||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==pe.numPlanes||Le.numIntersection!==pe.numIntersection)||Le.vertexAlphas!==Ge||Le.vertexTangents!==Ze||Le.morphTargets!==Fe||Le.morphNormals!==ct||Le.morphColors!==wt||Le.toneMapping!==Ut||Le.morphTargetsCount!==bt)&&(ht=!0):(ht=!0,Le.__version=j.version);let Yt=Le.currentProgram;ht===!0&&(Yt=nn(j,W,X));let Xt=!1,Jt=!1,$t=!1,Rt=Yt.getUniforms(),xn=Le.uniforms;if(Be.useProgram(Yt.program)&&(Xt=!0,Jt=!0,$t=!0),j.id!==T&&(T=j.id,Jt=!0),Xt||b!==w){Be.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Rt.setValue(P,"projectionMatrix",w.projectionMatrix),Rt.setValue(P,"viewMatrix",w.matrixWorldInverse);let Wt=Rt.map.cameraPosition;Wt!==void 0&&Wt.setValue(P,oe.setFromMatrixPosition(w.matrixWorld)),Xe.logarithmicDepthBuffer&&Rt.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Rt.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,Jt=!0,$t=!0)}if(X.isSkinnedMesh){Rt.setOptional(P,X,"bindMatrix"),Rt.setOptional(P,X,"bindMatrixInverse");let Kt=X.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Rt.setValue(P,"boneTexture",Kt.boneTexture,Qe))}X.isBatchedMesh&&(Rt.setOptional(P,X,"batchingTexture"),Rt.setValue(P,"batchingTexture",X._matricesTexture,Qe),Rt.setOptional(P,X,"batchingIdTexture"),Rt.setValue(P,"batchingIdTexture",X._indirectTexture,Qe),Rt.setOptional(P,X,"batchingColorTexture"),X._colorsTexture!==null&&Rt.setValue(P,"batchingColorTexture",X._colorsTexture,Qe));let Vt=J.morphAttributes;if((Vt.position!==void 0||Vt.normal!==void 0||Vt.color!==void 0)&&ae.update(X,J,Yt),(Jt||Le.receiveShadow!==X.receiveShadow)&&(Le.receiveShadow=X.receiveShadow,Rt.setValue(P,"receiveShadow",X.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(xn.envMap.value=Ce,xn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&W.environment!==null&&(xn.envMapIntensity.value=W.environmentIntensity),Jt&&(Rt.setValue(P,"toneMappingExposure",y.toneMappingExposure),Le.needsLights&&zn(xn,$t),ce&&j.fog===!0&&le.refreshFogUniforms(xn,ce),le.refreshMaterialUniforms(xn,j,B,q,p.state.transmissionRenderTarget[w.id]),fs.upload(P,Ti(Le),xn,Qe)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(fs.upload(P,Ti(Le),xn,Qe),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Rt.setValue(P,"center",X.center),Rt.setValue(P,"modelViewMatrix",X.modelViewMatrix),Rt.setValue(P,"normalMatrix",X.normalMatrix),Rt.setValue(P,"modelMatrix",X.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let Kt=j.uniformsGroups;for(let Wt=0,ti=Kt.length;Wt<ti;Wt++){let On=Kt[Wt];et.update(On,Yt),et.bind(On,Yt)}}return Yt}function zn(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function ws(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,W,J){let j=Ae.get(w);j.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Ae.get(w.texture).__webglTexture=W,Ae.get(w.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:J,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){let J=Ae.get(w);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0};let Zi=P.createFramebuffer();this.setRenderTarget=function(w,W=0,J=0){F=w,C=W,D=J;let j=!0,X=null,ce=!1,ye=!1;if(w){let Ce=Ae.get(w);if(Ce.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(P.FRAMEBUFFER,null),j=!1;else if(Ce.__webglFramebuffer===void 0)Qe.setupRenderTarget(w);else if(Ce.__hasExternalTextures)Qe.rebindTextures(w,Ae.get(w.texture).__webglTexture,Ae.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Fe=w.depthTexture;if(Ce.__boundDepthTexture!==Fe){if(Fe!==null&&Ae.has(Fe)&&(w.width!==Fe.image.width||w.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Qe.setupDepthRenderbuffer(w)}}let Ge=w.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(ye=!0);let Ze=Ae.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ze[W])?X=Ze[W][J]:X=Ze[W],ce=!0):w.samples>0&&Qe.useMultisampledRTT(w)===!1?X=Ae.get(w).__webglMultisampledFramebuffer:Array.isArray(Ze)?X=Ze[J]:X=Ze,A.copy(w.viewport),z.copy(w.scissor),U=w.scissorTest}else A.copy(Me).multiplyScalar(B).floor(),z.copy(ge).multiplyScalar(B).floor(),U=Ve;if(J!==0&&(X=Zi),Be.bindFramebuffer(P.FRAMEBUFFER,X)&&j&&Be.drawBuffers(w,X),Be.viewport(A),Be.scissor(z),Be.setScissorTest(U),ce){let Ce=Ae.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ce.__webglTexture,J)}else if(ye){let Ce=W;for(let Ge=0;Ge<w.textures.length;Ge++){let Ze=Ae.get(w.textures[Ge]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ge,Ze.__webglTexture,J,Ce)}}else if(w!==null&&J!==0){let Ce=Ae.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ce.__webglTexture,J)}T=-1},this.readRenderTargetPixels=function(w,W,J,j,X,ce,ye,ve=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ae.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Ce=Ce[ye]),Ce){Be.bindFramebuffer(P.FRAMEBUFFER,Ce);try{let Ge=w.textures[ve],Ze=Ge.format,Fe=Ge.type;if(!Xe.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-j&&J>=0&&J<=w.height-X&&(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ve),P.readPixels(W,J,j,X,we.convert(Ze),we.convert(Fe),ce))}finally{let Ge=F!==null?Ae.get(F).__webglFramebuffer:null;Be.bindFramebuffer(P.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(w,W,J,j,X,ce,ye,ve=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Ae.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Ce=Ce[ye]),Ce)if(W>=0&&W<=w.width-j&&J>=0&&J<=w.height-X){Be.bindFramebuffer(P.FRAMEBUFFER,Ce);let Ge=w.textures[ve],Ze=Ge.format,Fe=Ge.type;if(!Xe.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ct),P.bufferData(P.PIXEL_PACK_BUFFER,ce.byteLength,P.STREAM_READ),w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ve),P.readPixels(W,J,j,X,we.convert(Ze),we.convert(Fe),0);let wt=F!==null?Ae.get(F).__webglFramebuffer:null;Be.bindFramebuffer(P.FRAMEBUFFER,wt);let Ut=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Uh(P,Ut,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ct),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ce),P.deleteBuffer(ct),P.deleteSync(Ut),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,J=0){let j=Math.pow(2,-J),X=Math.floor(w.image.width*j),ce=Math.floor(w.image.height*j),ye=W!==null?W.x:0,ve=W!==null?W.y:0;Qe.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,J,0,0,ye,ve,X,ce),Be.unbindTexture()};let Ei=P.createFramebuffer(),Ci=P.createFramebuffer();this.copyTextureToTexture=function(w,W,J=null,j=null,X=0,ce=null){ce===null&&(X!==0?(Zr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=X,X=0):ce=0);let ye,ve,Ce,Ge,Ze,Fe,ct,wt,Ut,gt=w.isCompressedTexture?w.mipmaps[ce]:w.image;if(J!==null)ye=J.max.x-J.min.x,ve=J.max.y-J.min.y,Ce=J.isBox3?J.max.z-J.min.z:1,Ge=J.min.x,Ze=J.min.y,Fe=J.isBox3?J.min.z:0;else{let Vt=Math.pow(2,-X);ye=Math.floor(gt.width*Vt),ve=Math.floor(gt.height*Vt),w.isDataArrayTexture?Ce=gt.depth:w.isData3DTexture?Ce=Math.floor(gt.depth*Vt):Ce=1,Ge=0,Ze=0,Fe=0}j!==null?(ct=j.x,wt=j.y,Ut=j.z):(ct=0,wt=0,Ut=0);let bt=we.convert(W.format),Le=we.convert(W.type),kt;W.isData3DTexture?(Qe.setTexture3D(W,0),kt=P.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Qe.setTexture2DArray(W,0),kt=P.TEXTURE_2D_ARRAY):(Qe.setTexture2D(W,0),kt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,W.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,W.unpackAlignment);let ht=P.getParameter(P.UNPACK_ROW_LENGTH),Yt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Xt=P.getParameter(P.UNPACK_SKIP_PIXELS),Jt=P.getParameter(P.UNPACK_SKIP_ROWS),$t=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,gt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,gt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ge),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ze),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Fe);let Rt=w.isDataArrayTexture||w.isData3DTexture,xn=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){let Vt=Ae.get(w),Kt=Ae.get(W),Wt=Ae.get(Vt.__renderTarget),ti=Ae.get(Kt.__renderTarget);Be.bindFramebuffer(P.READ_FRAMEBUFFER,Wt.__webglFramebuffer),Be.bindFramebuffer(P.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let On=0;On<Ce;On++)Rt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ae.get(w).__webglTexture,X,Fe+On),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ae.get(W).__webglTexture,ce,Ut+On)),P.blitFramebuffer(Ge,Ze,ye,ve,ct,wt,ye,ve,P.DEPTH_BUFFER_BIT,P.NEAREST);Be.bindFramebuffer(P.READ_FRAMEBUFFER,null),Be.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||Ae.has(w)){let Vt=Ae.get(w),Kt=Ae.get(W);Be.bindFramebuffer(P.READ_FRAMEBUFFER,Ei),Be.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ci);for(let Wt=0;Wt<Ce;Wt++)Rt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Vt.__webglTexture,X,Fe+Wt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Vt.__webglTexture,X),xn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Kt.__webglTexture,ce,Ut+Wt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Kt.__webglTexture,ce),X!==0?P.blitFramebuffer(Ge,Ze,ye,ve,ct,wt,ye,ve,P.COLOR_BUFFER_BIT,P.NEAREST):xn?P.copyTexSubImage3D(kt,ce,ct,wt,Ut+Wt,Ge,Ze,ye,ve):P.copyTexSubImage2D(kt,ce,ct,wt,Ge,Ze,ye,ve);Be.bindFramebuffer(P.READ_FRAMEBUFFER,null),Be.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else xn?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(kt,ce,ct,wt,Ut,ye,ve,Ce,bt,Le,gt.data):W.isCompressedArrayTexture?P.compressedTexSubImage3D(kt,ce,ct,wt,Ut,ye,ve,Ce,bt,gt.data):P.texSubImage3D(kt,ce,ct,wt,Ut,ye,ve,Ce,bt,Le,gt):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ce,ct,wt,ye,ve,bt,Le,gt.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ce,ct,wt,gt.width,gt.height,bt,gt.data):P.texSubImage2D(P.TEXTURE_2D,ce,ct,wt,ye,ve,bt,Le,gt);P.pixelStorei(P.UNPACK_ROW_LENGTH,ht),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Yt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Xt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Jt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,$t),ce===0&&W.generateMipmaps&&P.generateMipmap(kt),Be.unbindTexture()},this.initRenderTarget=function(w){Ae.get(w).__webglFramebuffer===void 0&&Qe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Qe.setTextureCube(w,0):w.isData3DTexture?Qe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Qe.setTexture2DArray(w,0):Qe.setTexture2D(w,0),Be.unbindTexture()},this.resetState=function(){C=0,D=0,F=null,Be.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}};var t_={x:1630,y:1160},n_={x:3370,y:430},pa={x:1450,y:1320};function dd(n,e){if(!n||!e)return null;let t=[t_,n_].filter(g=>Math.hypot(g.x-n.x,g.y-n.y)<400).sort((g,x)=>Math.hypot(g.x-n.x,g.y-n.y)-Math.hypot(x.x-n.x,x.y-n.y))[0],i=0,r=1;if(t){let g=t.x-n.x,x=t.y-n.y;Math.abs(g)>Math.abs(x)?(i=Math.sign(g)||1,r=0):r=Math.sign(x)||1}let s=[0,280,320,360][e],a=[0,220,260,300][e],o=112,c={x:n.x-i*a/2,y:n.y-r*a/2},l=(g,x)=>({x:c.x+r*g+i*x,y:c.y-i*g+r*x}),u=(g,x,m,p)=>{let M=l(g,x);return{x:M.x,y:M.y,w:r?m:p,h:r?p:m}},h=[];if(e>=2){h.push(u(0,-a/2,s,10));for(let g of[-s/2,s/2])h.push(u(g,0,10,a))}if(e>=3){let g=(s-o)/2;for(let x of[-1,1])h.push(u(x*(o/2+g/2),a/2,g,10))}let d=e===1?[-1,1].flatMap(g=>[-1,1].map(x=>({...l(g*(s/2-8),x*(a/2-8)),radius:6}))):[],f=[u(-s/2+53,-a/2+64,52,90)];return e>=3&&f.push(u(s/2-53,-a/2+64,52,90)),{center:c,width:s,depth:a,door:o,fx:i,fy:r,yaw:Math.atan2(i,r),floor:u(0,0,s,a),walls:h,posts:d,beds:f,point:l,wallHeight:224,doorHeight:204,roofRidge:284}}var i_=["#4c9cba","#df8168","#9974c7","#76b677","#e3b04c","#df71a7"],r_=["#e3b185","#be895f","#efc69d","#a67152"],s_=["#463b32","#24282b","#99673b","#c9a465"];var yl=(n,e,t)=>Number.isInteger(n?.[e])&&n[e]>=0&&n[e]<t?n[e]:0;function su(n,e){return n.shirt=i_[yl(e,"shirt",6)],n.skin=r_[yl(e,"skin",4)],n.hair=s_[yl(e,"hair",4)],n.style=yl(e,"style",3),n}function vl(n){return su({},n)}var fd={gather:1e3,fish:1500,cook:1200,wave:2e3,cheer:2e3};function pd(n,e){let t=Math.sin(e*Math.PI*4);return n==="gather"?{left:-.35,right:-1.1+t*.6,bend:.12}:n==="fish"?{left:-.8,right:-1.3+Math.sin(e*Math.PI)*.3,bend:0}:n==="cook"?{left:-.8,right:-.9+t*.25,bend:.06}:n==="wave"?{left:0,right:-2.4,bend:0,wave:t*.25}:n==="cheer"?{left:-2.4,right:-2.4,bend:0,wave:t*.12}:null}var a_="assets/materials-v018/",au=["paving","sand","grass","plaster","teal","roof","wood","rock","leaf"],o_=new Set(["#a68854","#876742","#845f3f","#7d654b","#866642","#a98961","#765734","#9a743e","#786040","#8a6d49","#927652","#6e5942"]);function Ml(n){return{canvas:n,antialias:!0,stencil:!1,powerPreference:"high-performance"}}function md(n){let e=document.createElement("canvas");e.width=n.width,e.height=n.height;let t=e.getContext("2d");t.scale(e.width/4600,e.height/2900),t.fillStyle="#0000ff",t.fillRect(0,0,4600,2900),t.fillStyle="#00ff00";for(let[i,r,s,a]of[[1750,1300,1420,840],[3380,500,450,240],[4100,2400,325,225]])t.beginPath(),t.ellipse(i,r,s,a,0,0,Math.PI*2),t.fill();return t.strokeStyle="#ff0000",t.lineWidth=100,t.lineCap="round",t.beginPath(),t.moveTo(1440,1190),t.bezierCurveTo(1520,1080,1750,1190,1980,1280),t.bezierCurveTo(2420,1510,2790,1440,3200,1320),t.stroke(),t.lineWidth=80,t.beginPath(),t.moveTo(1800,1180),t.bezierCurveTo(2100,930,2820,920,3220,730),t.lineTo(3370,480),t.stroke(),t.fillStyle="#ff0000",t.beginPath(),t.ellipse(1570,1160,290,200,0,0,Math.PI*2),t.fill(),e}function bl(n,e=8){let t=new Map,i=new Map,r=new Set,s=0,a=0,o=!0,c=0,l=new ra;for(let g of au){let x=l.load(a_+g+".webp",()=>{s++,o=!0},void 0,()=>{a++,r.add(g),o=!0});x.userData.materialAssetName=g,x.colorSpace=Qt,x.wrapS=x.wrapT=Wr,x.anisotropy=Math.min(e,n.capabilities.getMaxAnisotropy()),t.set(g,x)}function u(g,x="#ffffff",m=1,p=.035){let M=g+x+m+p;if(!i.has(M)){let _=t.get(g).clone();_.repeat.set(m,m);let y=new Bt({color:x,map:_,bumpMap:_,bumpScale:p,roughness:g==="leaf"?.78:.93});t.get(g).addEventListener("dispose",()=>_.dispose());let E=t.get(g);y.userData.textureSource=E,i.set(M,y),o=!0}return i.get(M)}function h(g){return o_.has(g)?u("wood","#ded4c4",1,.045):g==="#e2dbc7"?u("plaster","#f8f4e7",1,.027):g==="#ba7655"?u("roof","#e4d6c7",2,.055):g==="#a7c4b7"?u("teal","#e7ede3",1,.035):g==="#92968b"||g==="#777a6b"?u("rock","#ddd9cf",1,.065):null}function d(){if(!o)return;c++;let g=s+a<au.length;for(let x of i.values()){let m=x.userData.textureSource;m.image&&x.map.image!==m.image&&(x.map.source=m.source,x.map.needsUpdate=!0),x.map.image&&!x.userData.uploaded&&(x.map.needsUpdate=!0,x.userData.uploaded=!0),!x.userData.uploaded&&!r.has(m.userData.materialAssetName)&&(g=!0)}o=g}function f(g){g.colorSpace=jn;let x=new Bt({color:"#ffffff",map:g,roughness:1});return x.onBeforeCompile=m=>{m.uniforms.uSand={value:t.get("sand")},m.uniforms.uGrass={value:t.get("grass")},m.uniforms.uPaving={value:t.get("paving")},m.fragmentShader=m.fragmentShader.replace("#include <common>",`#include <common>
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
        normal=normalize(normal+vec3(dFdx(relief)*.14,dFdy(relief)*.14,0.));`)},x}return{textures:t,surface:u,forColor:h,ground:f,update:d,stats:()=>({loaded:s,failed:a,total:au.length,materials:i.size,syncPending:o,syncPasses:c}),dispose(){for(let g of i.values())g.map.dispose(),g.dispose();for(let g of t.values())g.dispose()}}}function Sl({x:n,z:e,surface:t,yaw:i,pitch:r,mode:s="first",distance:a=4.8,bob:o=0},c={position:new O,target:new O}){let l=t+1.64+o;return s==="first"?(c.position.set(n,l,e),c.target.set(n-Math.sin(i)*Math.cos(r),l-Math.sin(r),e-Math.cos(i)*Math.cos(r)),c):(c.target.set(n,t+1.3,e),c.position.set(n+Math.sin(i)*Math.cos(r)*a,c.target.y+.65+Math.sin(r)*a,e+Math.cos(i)*Math.cos(r)*a),c)}function ou(n,e,t,i){return!(t>0)||!(i>0)?n:n.lerp(e,1-Math.exp(-t*i))}function wl(n,e,t,i){return i.length=0,n.intersectObjects(e,t,i),i}var l_={};function Tl(n,e,t,{height:i=18,offsetX:r=-12,offsetZ:s=-8}=l_){let a=Math.abs(n.shadow.camera.right-n.shadow.camera.left),o=n.shadow.mapSize.width,c=a>0&&o>0?a/o:0,l=c?Math.round(e/c)*c:e,u=c?Math.round(t/c)*c:t;return n.position.set(l+r,i,u+s),n.target.position.set(l,0,u),c}function gd(n,e,t,i,r){let s=(()=>{let x=90210;return()=>(x=Math.imul(x,1664525)+1013904223>>>0)/4294967296})(),a=new Ft;a.setAttribute("position",new tt([-.015,0,0,.015,0,0,-.012,.08,.01,.012,.08,.01,0,.16,.035],3)),a.setAttribute("uv",new tt([0,0,1,0,0,.5,1,.5,.5,1],2)),a.setIndex([0,1,2,1,3,2,2,3,4]),a.computeVertexNormals();let o=new Bt({color:"#ffffff",side:qt,roughness:1});o.defines={USE_UV:""};let c={value:0},l={value:new Ct(0,0,0,0)};o.onBeforeCompile=x=>{x.uniforms.uWind=c,x.uniforms.uBase=l,x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec4 uBase;`),x.vertexShader=x.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec3 grassWorld=(instanceMatrix*vec4(position,1.)).xyz;
      transformed.x+=sin(uWind+grassWorld.x*.8+grassWorld.z)*position.y*.13;
      if(abs(grassWorld.x-uBase.x)<uBase.z&&abs(grassWorld.z-uBase.y)<uBase.w)transformed.y-=100.;`),x.fragmentShader=x.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=.7+.35*vUv.y;`)};let u=r?2800:5500,h=new Pt(a,o,u);h.receiveShadow=!0,h.frustumCulled=!1;let d=i.getContext("2d").getImageData(0,0,i.width,i.height).data,f=new It,g=0;for(let x=0;x<u*8&&g<u;x++){let m=s()*4600,p=s()*2900,M=(Math.min(i.height-1,Math.floor(p/2900*i.height))*i.width+Math.min(i.width-1,Math.floor(m/4600*i.width)))*4;if(d[M+1]<d[M]+12||d[M+1]<85)continue;let _=m/t,y=p/t,E=e(_,y);E<.1||(f.position.set(_,E-.015,y),f.rotation.set(0,s()*Math.PI*2,0),f.scale.setScalar(.7+s()*.8),f.updateMatrix(),h.setMatrixAt(g,f.matrix),h.setColorAt(g,new $e().setHSL(.2+s()*.055,.3+s()*.15,.22+s()*.08)),g++)}return h.count=g,n.add(h),{update(x,m){c.value=x,m?l.value.set(m.floor.x/t,m.floor.y/t,m.floor.w/(t*2)+.1,m.floor.h/(t*2)+.1):l.value.set(0,0,0,0)},dispose(){n.remove(h),a.dispose(),o.dispose(),h.dispose()}}}function xd(n,e,{cube:t,tube:i},r){let s=e.width/80,a=e.depth/80,o=e.wallHeight/80,c=e.roofRidge/80;for(let h of n.children)h.name==="floor"&&(h.material=r.surface("paving","#e5ded0",2,.045)),h.name==="wall"&&(h.material=r.surface("plaster","#f8f4e7",1,.025)),h.name==="roof"&&(h.material=r.surface("roof","#efe2d5",2,.045));for(let h of[-1,1]){let d=t(n,"#876742",[h*s/2,o-.09,0],[.13,.16,a+.18]);if(d.name="trim",e.walls.length){let f=t(n,"#a7c4b7",[h*(s/2+.064),1.55,-a*.16],[.02,.9,.7]);f.name="shutter";for(let g=0;g<8;g++)t(n,"#876742",[h*(s/2+.08),1.17+g*.11,-a*.16],[.025,.035,.69]);for(let g of[-a*.16-.39,-a*.16+.39])t(n,"#e2dbc7",[h*(s/2+.078),1.56,g],[.045,1.02,.065])}}let l=i(n,"#ba7655",[0,c+.02,0],[.09,a+.42,.09]);l.rotation.x=Math.PI/2,l.name="ridge";let u=t(n,"#e2dbc7",[0,o-.05,-a/2-.066],[s+.08,.16,.06]);return u.name="trim",n}var Qn=Object.freeze([{id:"home",name:"Main Island",x:0,z:0,radius:480,biome:"mixed",dock:{x:390,z:100},landmarks:["village","player-base","market","harbour"]},{id:"jungle",name:"Jungle Island",x:1150,z:-450,radius:270,biome:"rainforest",dock:{x:930,z:-380},landmarks:["cave","waterfall","hidden-cache"]},{id:"fortress",name:"Fortress Island",x:1900,z:550,radius:240,biome:"rocky",dock:{x:1690,z:490},landmarks:["guarded-estate","rescue-mission"]},{id:"highlands",name:"Highlands Island",x:-1050,z:-850,radius:290,biome:"highlands",dock:{x:-840,z:-710},landmarks:["mine","mountain-trail"]},{id:"smugglers",name:"Smugglers Island",x:-1550,z:250,radius:230,biome:"mangrove",dock:{x:-1340,z:220},landmarks:["warehouse","secret-passage"]},{id:"paradise",name:"Paradise Island",x:700,z:1350,radius:250,biome:"beach",dock:{x:600,z:1120},landmarks:["cabins","reef"]}]),sb=Object.freeze(Object.fromEntries(Qn.map(n=>[n.id,n])));function _d(n,e){return!Number.isFinite(n)||!Number.isFinite(e)?null:Qn.find(t=>Math.hypot(n-t.x,e-t.z)<=t.radius)??null}function xs(n,e){if(Number.isFinite(n.coastSeed)){let i=n.coastSeed;return .855+.07*Math.sin(e*2+i)+.045*Math.cos(e*3-i)+.025*Math.sin(e*7+i)}let t=n.x*.002+n.z*.001;return .955+.023*Math.sin(e*3+t)+.012*Math.cos(e*5-t)}function vr(n,e,t){let i=(e-n.x)/n.radius,r=(t-n.z)/n.radius,s=Math.hypot(i,r);if(s>=1)return-.32;let a=Math.atan2(r,i),o=xs(n,a),c=Math.max(0,Math.min(1,(o-s)/.12));if(s>o)return-.32*Math.min(1,(s-o)/.04);if(Number.isFinite(n.relief)){let f=(o-s)*n.radius/20,g=Math.min(1,f/18),x=Math.max(0,Math.min(1,(f-18)/85)),m=Math.exp(-((i+.18)**2*4+(r-.16)**2*5))*.7+Math.exp(-((i-.36)**2*11+(r+.25)**2*8))*.42;return .005+g*.65+x*x*(3-2*x)*m*n.relief}let l=Math.max(0,Math.min(1,(.79-s)/.22)),u=l*l*(3-2*l),h=Math.exp(-((i+.18)**2*4+(r-.16)**2*5))*.7+Math.exp(-((i-.36)**2*11+(r+.25)**2*8))*.42,d=n.biome==="highlands"?8.5:n.biome==="rainforest"?2.2:n.biome==="rocky"?1.6:.55;return .005+c*.35+u*h*d}function lu(n,{segments:e=48}={}){if(!Number.isInteger(e)||e<8||e>256)throw new RangeError("segments must be 8..256");let t=[0,vr(n,n.x,n.z),0],i=[.5,.5],r=[],s=Math.ceil(e/2);for(let l=1;l<=s;l++)for(let u=0;u<=e;u++){let h=u/e*Math.PI*2,d=Number.isFinite(n.relief)?xs(n,h)+.03:1.02,f=n.radius*d*l/s,g=Math.cos(h)*f,x=Math.sin(h)*f;t.push(g,vr(n,n.x+g,n.z+x),x),i.push(.5+g/(n.radius*2.04),.5+x/(n.radius*2.04));let m=1+(l-1)*(e+1)+u;if(u!==e)if(l===1)r.push(0,m+1,m);else{let p=m-(e+1);r.push(p,m+1,m,p,p+1,m+1)}}let a=new Ft;a.setAttribute("position",new tt(t,3)),a.setAttribute("uv",new tt(i,2)),a.setIndex(r),a.computeVertexNormals();let o=new Bt({color:n.biome==="beach"?11779972:5538650,roughness:1,side:qt}),c=new dt(a,o);return c.name="archipelago-"+n.id,c.position.set(n.x,0,n.z),c.receiveShadow=!0,c}function yd(n={}){let e=new Oe;e.name="archipelago-terrain";for(let t of Qn)e.add(lu(t,n));return e}function _s(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,c=new Ft,l=0;for(let u=0;u<n.length;++u){let h=n[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(h.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0,h=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=n[d].attributes.position.count}c.setIndex(h)}for(let u in s){let h=vd(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in a){let h=a[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let x=0;x<a[u].length;++x)f.push(a[u][x][d]);let g=vd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function vd(n){let e,t,i,r=-1,s=0;for(let l=0;l<n.length;++l){let u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let a=new e(s),o=new an(a,t,i),c=0;for(let l=0;l<n.length;++l){let u=n[l];if(u.isInterleavedBufferAttribute){let h=c/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){let x=u.getComponent(d,g);o.setComponent(d+h,g,x)}}else a.set(u.array,c);c+=u.count*t}return r!==void 0&&(o.gpuType=r),o}var ma=Object.freeze([{x:95,z:-95,w:105,d:80,h:4.4,color:"#d8b8a3",shutter:"#557f7b"},{x:-55,z:-115,w:110,d:85,h:5.8,color:"#d5dfd4",shutter:"#73868b"},{x:-210,z:-95,w:100,d:90,h:4.5,color:"#e6cf97",shutter:"#426d73"},{x:100,z:110,w:100,d:90,h:5.6,color:"#9fbdac",shutter:"#705b48"},{x:-70,z:130,w:110,d:85,h:4.4,color:"#dfc6b5",shutter:"#587e7c"},{x:-225,z:110,w:90,d:75,h:4.5,color:"#c5d1d0",shutter:"#7a6a58"}]);function Mr(n,e,t=ma){if(e!=="home")return!1;for(let i of t)if(Math.abs(n.x-i.x)<i.w/2+7&&Math.abs(n.z-i.z)<i.d/2+7)return!0;return!1}var c_=`
float hash21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise21(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hash21(i),hash21(i+vec2(1.,0.)),f.x),mix(hash21(i+vec2(0.,1.)),hash21(i+vec2(1.)),f.x),f.y);}
float fbm21(vec2 p){float f=0.,a=.5;for(int i=0;i<4;i++){f+=a*noise21(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`,cu=`
float hashFast(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noiseFast(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hashFast(i),hashFast(i+vec2(1.,0.)),f.x),mix(hashFast(i+vec2(0.,1.)),hashFast(i+vec2(1.)),f.x),f.y);}
float fbmFast(vec2 p){float f=0.,a=.535714;for(int i=0;i<3;i++){f+=a*noiseFast(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`,bd=`
float hashLite(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noiseLite(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hashLite(i),hashLite(i+vec2(1.,0.)),f.x),mix(hashLite(i+vec2(0.,1.)),hashLite(i+vec2(1.)),f.x),f.y);}
float fbmLite(vec2 p){float f=0.,a=.666667;for(int i=0;i<2;i++){f+=a*noiseLite(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`;function Al(n,{size:e=900,segments:t=72,coastSeeds:i=[],mobile:r=!1}={}){let s=Array.from({length:9},(f,g)=>new Ct(...n[g]||[1e4,1e4,1,1])),a=r?cu:c_,o=r?"fbmFast(p*.52+vec2(uTime*.04,0.))":"fbm21(p*.52+vec2(uTime*.04,0.))",c=r?"0.":"(noise21(p*1.6+vec2(uTime*.09,-uTime*.07))-.5)*.10",l=new An({fog:!0,uniforms:{...fl.clone(Se.fog),uTime:{value:0},uEye:{value:new O},uCoasts:{value:s},uCoastSeeds:{value:Array.from({length:9},(f,g)=>i[g]??-100)}},vertexShader:`uniform float uTime;varying vec3 vWater;
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
    }`}),u=new Dn(e,e,t,t);u.rotateX(-Math.PI/2),l.userData.fragmentNoiseLayers=r?3:7,l.userData.mobileQuality=r;let h=new dt(u,l);h.name="tropical-ocean",h.position.y=-.045,h.matrixAutoUpdate=!1,h.updateMatrix();let d={ready:!1,x:0,y:0,z:0};return{mesh:h,update(f,g){return l.uniforms.uTime.value=f,d.ready&&d.x===g.x&&d.y===g.y&&d.z===g.z?!1:(d.ready=!0,d.x=g.x,d.y=g.y,d.z=g.z,l.uniforms.uEye.value.copy(g),!0)},dispose(){u.dispose(),l.dispose()}}}function El(n,e){let t=n.userData.cameraFollowState||(n.userData.cameraFollowState={});return t.ready&&t.x===e.x&&t.y===e.y&&t.z===e.z?!1:(t.ready=!0,t.x=e.x,t.y=e.y,t.z=e.z,n.position.copy(e),n.updateMatrix(),!0)}function Cl(n=420,{mobile:e=!1}={}){let t=e?bd:cu,i=e?"fbmLite":"fbmFast",r=new An({side:mn,depthWrite:!1,uniforms:{uTime:{value:0}},vertexShader:"varying vec3 vSky;void main(){vSky=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float uTime;varying vec3 vSky;${t}
  void main(){vec3 dir=normalize(vSky);float h=dir.y;
    vec3 col=mix(vec3(.65,.79,.84),vec3(.095,.34,.59),smoothstep(-.02,.8,h));
    vec2 p=dir.xz/max(.1,h)*2.3+vec2(uTime*.006,uTime*.0025);float n=${i}(p);
    float cloud=smoothstep(.52,.70,n)*smoothstep(.025,.20,h);
    col=mix(col,mix(vec3(.62,.69,.71),vec3(.98,.96,.89),smoothstep(.50,.70,n)),cloud);
    float sun=pow(max(dot(dir,normalize(vec3(-.55,.82,-.36))),0.),70.);col+=vec3(.35,.24,.12)*sun;
    gl_FragColor=vec4(col,1.);
    #include <colorspace_fragment>
  }`});r.userData.fragmentNoiseLayers=e?2:3,r.userData.mobileQuality=e;let s=new dt(new En(n,32,20),r);return s.name="tropical-sky",s.renderOrder=-10,s.frustumCulled=!1,s.matrixAutoUpdate=!1,s.updateMatrix(),s}function Rl(n,e,{mobile:t=!1}={}){let i=new Bt({roughness:1,color:"#ffffff",vertexColors:!0});i.userData.fragmentNoiseLayers=t?2:3,i.userData.fragmentTextureSamples=t?3:4,i.userData.mobileQuality=t;let r=t?bd:cu,s=t?"fbmLite":"fbmFast",a=t?"texture2D(uGrass,uv).rgb":"mix(texture2D(uGrass,uv).rgb,texture2D(uGrass,uv*1.37+offset).rgb,.38)";return i.onBeforeCompile=o=>{Object.assign(o.uniforms,{uGrass:{value:n.textures.get("grass")},uSand:{value:n.textures.get("sand")},uRock:{value:n.textures.get("rock")}}),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vIslandPosition;varying vec3 vIslandNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vIslandPosition=position;vIslandNormal=normalize(normal*vec3(${e.toFixed(1)},1.,${e.toFixed(1)}));`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vIslandPosition;varying vec3 vIslandNormal;uniform sampler2D uGrass;uniform sampler2D uSand;uniform sampler2D uRock;${r}`).replace("#include <map_fragment>",`
        vec2 uv=vIslandPosition.xz/${e.toFixed(1)}*.34;
        float n=${s}(uv*.46);vec2 offset=vec2(17.3,8.1);
        vec3 grass=${a};
        vec3 sand=texture2D(uSand,uv*.8).rgb,rock=texture2D(uRock,uv*.62).rgb;
        float beach=1.-smoothstep(.025,.34,vIslandPosition.y);
        float slope=1.-abs(normalize(vIslandNormal).y);float cliff=smoothstep(.44,.76,slope)*(1.-beach);
        diffuseColor.rgb*=mix(mix(grass,sand,beach),rock,cliff)*(.82+n*.28);`)},i.customProgramCacheKey=()=>`tropical-island-${e}-${t?"mobile":"full"}`,i}function Md(n=14){let e=[],t=[],i=[],r=(a,o,c,l)=>{let u=o*2.2,h=Math.sin(o*Math.PI)*.55-o*o*.95;return[Math.sin(a)*u+Math.cos(a)*l*c,h-l*.17,Math.cos(a)*u-Math.sin(a)*l*c]};for(let a=0;a<9;a++){let o=a*Math.PI*2/9;for(let c=1;c<n;c++)for(let l of[-1,1]){let u=c/n,h=Math.sin(u*Math.PI)*.44,d=e.length/3;e.push(...r(o,u-.03,l,.012),...r(o,u-.09,l,h),...r(o,u+.025,l,h*.87),...r(o,u+.03,l,.012)),t.push(u,0,u,.9,u+.03,1,u+.03,0),i.push(d,d+1,d+2,d,d+2,d+3)}}let s=new Ft;return s.setAttribute("position",new tt(e,3)),s.setAttribute("uv",new tt(t,2)),s.setIndex(i),s.computeVertexNormals(),s}var hn=(n,e=0)=>{let t=Math.sin((n+1)*12.9898+(e+1)*78.233)*43758.5453;return t-Math.floor(t)};function u_(n,e){for(let t of n){let i=t.userData.lod,r=i.distance+i.radius,s=e.distanceToSquared(i.center)<=r*r?"high":"low";s!==i.level&&(t.geometry=i[s],i.level=s,i.shadowReceiverLod&&(t.receiveShadow=s==="high"))}}function h_(n,e,t,i=0){if(n.ready){let r=n.x-t.x,s=n.y-t.y,a=n.z-t.z;if(i>0?r*r+s*s+a*a<i*i:r===0&&s===0&&a===0)return!1}return n.ready=!0,n.x=t.x,n.y=t.y,n.z=t.z,u_(e,t),!0}function Il(n,e,{scale:t,height:i,surfaces:r,small:s=!1,clear:a=()=>!1,dense:o=!1,lod:c=!1}={}){let l=(b,A)=>{let z=new Ht(.085,.16,1,b,A);z.translate(0,.5,0);let U=z.attributes.position;for(let R=0;R<U.count;R++)U.setX(R,U.getX(R)+U.getY(R)**2*.2);return z.computeVertexNormals(),z},u=l(8,6),h=c?l(6,3):u,d=r.surface("wood","#bc9c71",2,.03),f=r.surface("leaf","#9cb384",1,.01).clone();f.side=qt;let g=Md(s?9:12),x=c?Md(s?6:7):g,m=[],p=[],M=new It,_=650/t,y=0;for(let b of e){let A=[];for(let U=0;U<(o?b.id==="home"?s?700:1500:s?280:650:s?22:42);U++){let R=U+b.x*.013+b.z*.017,L=U*2.39996+b.x*.001+(hn(R,0)-.5)*.72,G=o?Math.min(.93,Math.max(.12,Math.sqrt(U*.6180339%1)*.91+(hn(R,1)-.5)*.09)):Math.min(.91,.34+U%7*.075+(hn(R,1)-.5)*.08),q=b.radius*G,B=b.x+Math.sin(L)*q,ne=b.z+Math.cos(L)*q;a(b,B,ne)||i(B,ne)<.32||A.push({x:B/t,z:ne/t,y:i(B,ne),a:L,h:3.45+hn(R,2)*2.15,size:.7+hn(R,3)*.43,leanX:(hn(R,4)-.5)*.12,leanZ:(hn(R,5)-.5)*.14,index:y++})}if(!A.length)continue;let z=Array.from({length:4},()=>[]);A.forEach(U=>z[(U.x>=b.x/t?1:0)+(U.z>=b.z/t?2:0)].push(U)),z.forEach((U,R)=>{if(!U.length)return;let L=new Pt(u,d,U.length),G=new Pt(g,f,U.length);L.name=m.length?`grove-trunks-${b.id}-${R+1}`:"grove-trunks",G.name=p.length?`grove-fronds-${b.id}-${R+1}`:"grove-fronds";for(let q=0;q<U.length;q++){let B=U[q];M.position.set(B.x,B.y,B.z),M.rotation.set(B.leanX,B.a,B.leanZ),M.scale.set(B.size,B.h,B.size),M.updateMatrix(),L.setMatrixAt(q,M.matrix),M.position.set(B.x+.2*B.size*Math.cos(B.a),B.y+B.h,B.z-.2*B.size*Math.sin(B.a)),M.rotation.set(B.leanX*.35,B.a+hn(B.index,6)*Math.PI*.35,B.leanZ*.35),M.scale.setScalar(B.size),M.updateMatrix(),G.setMatrixAt(q,M.matrix),G.setColorAt(q,new $e().setHSL(.245+hn(B.index,7)*.065,.22+hn(B.index,8)*.13,.59+hn(B.index,9)*.12))}for(let q of[L,G])q.userData.cullingRegion={island:b.id,sector:R+1},q.castShadow=!0,q.instanceMatrix.needsUpdate=!0,q.computeBoundingSphere(),n.add(q);L.userData.lod={high:u,low:h,distance:_,level:"high",shadowReceiverLod:c,center:L.boundingSphere.center.clone(),radius:L.boundingSphere.radius},G.userData.lod={high:g,low:x,distance:_,level:"high",center:G.boundingSphere.center.clone(),radius:G.boundingSphere.radius},L.receiveShadow=!0,G.receiveShadow=!1,m.push(L),p.push(G)})}let E=new ar(1,1),C=r.surface("rock","#a9aaa0",2,.08),D=[];for(let b of e){let A=[];for(let U=0;U<(s?14:24);U++){let R=U+b.x*.019+b.z*.023,L=U*2.399+.6+(hn(R,10)-.5)*.62,G=b.radius*(.84+hn(R,11)*.1),q=b.x+Math.sin(L)*G,B=b.z+Math.cos(L)*G;a(b,q,B)||A.push({x:q/t,y:i(q,B)-.1,z:B/t,a:L,j:U,seed:R})}if(!A.length)continue;let z=new Pt(E,C,A.length);z.name=D.length?"shore-rocks-"+b.id:"shore-rocks";for(let U=0;U<A.length;U++){let R=A[U];M.position.set(R.x,R.y,R.z),M.rotation.set(hn(R.seed,12)*1.2,R.a,hn(R.seed,13)*1.1),M.scale.set(.27+hn(R.seed,14)*.5,.2+hn(R.seed,15)*.43,.31+hn(R.seed,16)*.53),M.updateMatrix(),z.setMatrixAt(U,M.matrix)}z.castShadow=z.receiveShadow=!0,z.instanceMatrix.needsUpdate=!0,z.computeBoundingSphere(),n.add(z),D.push(z)}let F=[...m,...p],T={};return{trees:m[0],foliage:p[0],treeBatches:m,foliageBatches:p,rocks:D[0],rockBatches:D,lodGeometries:[u,h,g,x],update(b,A=0){return h_(T,F,b,A)}}}function Pl(n,{scale:e,height:t,surfaces:i,helpers:r,village:s=ma,paths:a,marketPoint:o={x:290,z:-30}}){let{cube:c,tube:l,ell:u}=r,h=[];function d(A){let z=new Map;A.updateMatrix();for(let U of[...A.children])if(U.isMesh){U.updateMatrix();let R=U.geometry.clone().applyMatrix4(U.matrix);z.has(U.material)||z.set(U.material,[]),z.get(U.material).push(R),A.remove(U)}for(let[U,R]of z){let L=_s(R,!1);R.forEach(q=>q.dispose());let G=new dt(L,U);G.castShadow=G.receiveShadow=!0,A.add(G)}}function f(A,z){let U=new Map,R=0;n.updateMatrixWorld(!0),z.updateMatrixWorld(!0);let L=new Lt().copy(z.matrixWorld).invert(),G=new Lt;for(let q of A)for(let B of[...q.children])if(B.isMesh){B.updateMatrixWorld(!0),G.multiplyMatrices(L,B.matrixWorld);let ne=B.geometry.clone().applyMatrix4(G);U.has(B.material)||U.set(B.material,[]),U.get(B.material).push(ne),R++,q.remove(B),B.geometry.dispose()}for(let[q,B]of U){let ne=_s(B,!1);B.forEach(Me=>Me.dispose()),ne.computeBoundingSphere();let re=new dt(ne,q);re.castShadow=re.receiveShadow=!0,z.add(re)}return{sourceBatches:R,materialBatches:z.children.length}}function g(A,z=n,U=!0,R=0){let L=new Oe;L.name="village-house",z.add(L),L.position.set(U?A.x/e:A.x,U?t(A.x,A.z):0,U?A.z/e:A.z),L.rotation.y=A.facing??(A.z>60?Math.PI:0);let G=A.w/e,q=A.d/e,B=A.h,ne=c(L,A.color,[0,B/2,0],[G,B,q]);ne.material=i.surface("plaster",A.color,2,.035);let re=i.surface("roof","#d5bbab",2,.065);for(let Z of[-1,1]){let Q=c(L,"#ba7655",[Z*G/4,B+.43,0],[Math.hypot(G/2+.25,.85),.13,q+.5]);Q.rotation.z=-Z*Math.atan2(.85,G/2+.25),Q.material=re,c(L,"#a75f45",[Z*(G/2+.13),B+.01,0],[.14,.22,q+.58])}let Me=l(L,"#a75f45",[0,B+.86,0],[.12,q+.62,.12]);Me.rotation.x=Math.PI/2;for(let Z of[.17,B*.52,B-.16])c(L,"#e2dbc7",[0,Z,q/2+.035],[G+.16,.14,.1]);let ge=B>5?2:1;for(let Z=0;Z<ge;Z++)for(let Q of[-G*.31,G*.31]){let oe=1.5+Z*2.35,Ie=q/2+.08,Re=c(L,"#415d63",[Q,oe,Ie],[.75,1.2,.05]);Re.material.roughness=.24,Re.material.metalness=.1,c(L,"#e2dbc7",[Q,oe,Ie+.045],[.065,1.15,.075]),c(L,"#e2dbc7",[Q,oe,Ie+.046],[.7,.065,.076]);for(let it of[-1,1]){let lt=c(L,A.shutter,[Q+it*.56,oe,Ie+.03],[.34,1.3,.07]);lt.rotation.y=it*.24;for(let P=0;P<9;P++)c(L,"#876742",[Q+it*.56,oe-.52+P*.13,Ie+.085],[.33,.024,.04])}if(c(L,"#e2dbc7",[Q,oe-.68,Ie],[1.7,.1,.16]),c(L,"#e2dbc7",[Q,oe+.68,Ie],[1.7,.13,.15]),Z===0){let it=c(L,"#876742",[Q,.79,q/2+.25],[1.28,.2,.3]);if(it.rotation.x=-.04,u)for(let lt=-2;lt<=2;lt++){let P=u(L,lt%2?"#6f8f58":"#88a866",[Q+lt*.22,.99+Math.abs(lt)*.025,q/2+.27],[.17,.31,.15]);P.rotation.z=lt*.14}if(ge===1){let lt=c(L,A.shutter,[Q,2.32,q/2+.46],[1.55,.08,.82]);lt.rotation.x=-.15,c(L,A.shutter,[Q,2.2,q/2+.83],[1.55,.17,.07])}}}c(L,"#5a4b3d",[0,1.05,q/2+.06],[.78,2.1,.1]);for(let Z of[.55,1.42])for(let Q of[-.19,.19])c(L,"#745f4c",[Q,Z,q/2+.125],[.29,.6,.045]);for(let Z of[-.48,.48])c(L,"#e2dbc7",[Z,1.08,q/2+.11],[.16,2.22,.18]);c(L,"#e2dbc7",[0,2.18,q/2+.11],[1.1,.16,.18]),c(L,"#c9baa1",[0,.07,q/2+.34],[1.16,.14,.58]),u&&u(L,"#caa457",[.27,1.04,q/2+.19],[.055,.055,.035]);let Ve=(R%2?-1:1)*G*.42,mt=q/2+.55,nt=l(L,"#e2dbc7",[Ve,2.91,q/2+.34],[.035,.7,.035]);nt.rotation.x=Math.PI/2,c(L,A.shutter,[Ve,2.62,mt],[.09,.56,.64]);for(let Z of[-1,1]){let Q=c(L,"#e2dbc7",[Ve+Z*.052,2.62,mt],[.018,.22,.24]);Q.rotation.x=(R%3-1)*.22}if(ge===2){c(L,"#e2dbc7",[0,2.75,q/2+.48],[G+.15,.18,.9]);for(let Z=0;Z<=10;Z++)l(L,"#e2dbc7",[-G/2+Z*G/10,3.18,q/2+.84],[.034,.76,.034]);c(L,"#e2dbc7",[0,3.58,q/2+.84],[G+.17,.08,.1])}for(let Z of[-1,1])for(let Q=0;Q<ge;Q++)for(let oe of[-q*.26,q*.26])c(L,A.shutter,[Z*(G/2+.03),1.5+Q*2.35,oe],[.06,1.22,.8]),c(L,"#e2dbc7",[Z*(G/2+.07),.82+Q*2.35,oe],[.16,.1,1.05]),c(L,"#e2dbc7",[Z*(G/2+.07),2.18+Q*2.35,oe],[.16,.12,1.05]);return L.userData.facadeDetails={planters:2,awnings:ge===1?2:0,balcony:ge===2,windowPanes:ge*8,doorPanels:4,doorway:!0,ridgeCaps:1,eaveFascias:2,hangingSigns:1,signMarks:2,signClearance:!0},d(L),h.push(L),L}s.forEach((A,z)=>g(A,n,!0,z));let x=new Oe;x.name="village-buildings",n.add(x),x.userData.batchDetails={sourceHouses:h.length,...f(h,x)},x.userData.cameraBlocker=!0;let m=new Oe;m.name="village-overhead-laundry",n.add(m);let p=["#bd6f53","#e8d99e","#587e7c","#73868b"],M=[...s].sort((A,z)=>A.z-z.z),_=Math.ceil(M.length/2),y=0,E=0;for(let A of[M.slice(0,_),M.slice(_)]){let z=[...A].sort((U,R)=>U.x-R.x);for(let U=1;U<z.length;U++){let R=z[U-1],L=z[U],G=R.x+R.w/2,q=L.x-L.w/2;if(q<=G)continue;let B=(G+q)/2,ne=(R.z+L.z)/2,re=Math.max(t(B,ne)+3.35,3.55),Me=(q-G)/e,ge=l(m,"#5a4b3d",[B/e,re,ne/e],[.012,Me,.012]);ge.rotation.z=Math.PI/2,y++;for(let Ve=0;Ve<3;Ve++){let mt=(G+(q-G)*(Ve+1)/4)/e,nt=p[(y+Ve)%p.length],Z=c(m,nt,[mt,re-.24-Ve%2*.05,ne/e],[.46,.48+Ve%2*.1,.025]);Z.rotation.z=(Ve-1)*.06,E++}}}m.userData.laundryDetails={lines:y,garments:E,clearance:!0},d(m);function C(A,z,U=!1){let R=[],L=[],G=[],q=0;for(let re=0;re<A.length;re++){let Me=A[Math.max(0,re-1)],ge=A[Math.min(A.length-1,re+1)],Ve=A[re],mt=ge.x-Me.x,nt=ge.z-Me.z,Z=Math.hypot(mt,nt)||1;re&&(q+=Math.hypot(Ve.x-A[re-1].x,Ve.z-A[re-1].z)/e);for(let Q of[-1,1]){let oe=Ve.x-nt/Z*z/2*Q,Ie=Ve.z+mt/Z*z/2*Q;R.push(oe/e,t(oe,Ie)+.018,Ie/e),L.push((Q+1)/2*z/e,q)}if(re){let Q=re*2;G.push(Q-2,Q-1,Q,Q-1,Q+1,Q)}}let B=new Ft;B.setAttribute("position",new tt(R,3)),B.setAttribute("uv",new tt(L,2)),B.setIndex(G),B.computeVertexNormals();let ne=new dt(B,i.surface("paving","#ded9c9",.75,.045));if(ne.name="village-path",ne.receiveShadow=!0,n.add(ne),U){let re=Math.max(4,z*.08),Me=new pn(1,1,1),ge=new Pt(Me,i.surface("rock","#dad4c6",1.2,.025),(A.length-1)*2),Ve=new It;ge.name="village-curb";let mt=0;for(let nt=1;nt<A.length;nt++){let Z=A[nt-1],Q=A[nt],oe=Q.x-Z.x,Ie=Q.z-Z.z,Re=Math.hypot(oe,Ie),it=-Ie/Re,lt=oe/Re;for(let P of[-1,1]){let St=(Z.x+Q.x)/2+it*(z/2+re/2)*P,Ye=(Z.z+Q.z)/2+lt*(z/2+re/2)*P;Ve.position.set(St/e,t(St,Ye)+.065,Ye/e),Ve.rotation.set(0,Math.atan2(oe,Ie),0),Ve.scale.set(re/e,.1,Re/e+.025),Ve.updateMatrix(),ge.setMatrixAt(mt++,Ve.matrix)}}ge.castShadow=ge.receiveShadow=!0,ge.instanceMatrix.needsUpdate=!0,ge.computeBoundingSphere(),n.add(ge)}}let D=[];for(let A of a||[{points:Array.from({length:31},(z,U)=>({x:385-U*21,z:36+Math.sin(U*.19)*9})),width:55,curb:!0},{points:Array.from({length:15},(z,U)=>({x:23,z:-280+U*39})),width:40,curb:!0}]){let z=[A.points[0]];for(let U=1;U<A.points.length;U++){let R=A.points[U-1],L=A.points[U],G=Math.ceil(Math.hypot(L.x-R.x,L.z-R.z)/30);for(let q=1;q<=G;q++)z.push({x:R.x+(L.x-R.x)*q/G,z:R.z+(L.z-R.z)*q/G})}if(C(z,A.width,A.curb),A.curb)for(let U=3;U<A.points.length-3;U+=6){let R=A.points[U-1],L=A.points[U+1],G=A.points[U],q=L.x-R.x,B=L.z-R.z,ne=Math.hypot(q,B)||1,re=Math.floor(U/6)%2?1:-1,Me=A.width/2+9,ge=G.x-B/ne*Me*re,Ve=G.z+q/ne*Me*re;D.push({x:ge/e,y:t(ge,Ve),z:Ve/e})}}if(D.length){let A=new Ht(1,1,1,10),z=new En(1,12,8),U=new It,R=new Pt(A,new Bt({color:"#394447",roughness:.62,metalness:.38}),D.length),L=new Pt(z,new Bt({color:"#ffe4a8",emissive:"#ffb85c",emissiveIntensity:.72,roughness:.34}),D.length);R.name="village-lamp-posts",L.name="village-lamp-globes";for(let G=0;G<D.length;G++){let q=D[G];U.position.set(q.x,q.y+1.35,q.z),U.scale.set(.065,2.7,.065),U.updateMatrix(),R.setMatrixAt(G,U.matrix),U.position.set(q.x,q.y+2.76,q.z),U.scale.set(.18,.22,.18),U.updateMatrix(),L.setMatrixAt(G,U.matrix)}R.castShadow=R.receiveShadow=!0,L.castShadow=!1,L.receiveShadow=!0;for(let G of[R,L])G.instanceMatrix.needsUpdate=!0,G.computeBoundingSphere(),n.add(G)}let F=new Oe;F.name="harbor-market",F.position.set(o.x/e,t(o.x,o.z),o.z/e),n.add(F);for(let A of[-1.4,1.4])for(let z of[-.6,.6])l(F,"#876742",[A,1.2,z],[.045,2.4,.045]);let T=c(F,"#cc8660",[0,2.35,0],[3.2,.07,1.8]);T.rotation.x=.07;for(let A=0;A<6;A++){let z=A%2?"#f3dfbe":"#bd6f53",U=(A-2.5)*.53,R=c(F,z,[U,2.395,0],[.53,.035,1.76]);R.rotation.x=.07,c(F,z,[U,2.27,.92],[.49,.18,.055])}c(F,"#a98961",[0,.7,0],[2.8,.15,.9]);let b=["#ce5949","#e6b64d","#709a55"];for(let A=0;A<5;A++){let z=(A-2)*.5;if(c(F,"#a68854",[z,.88,0],[.43,.2,.68]),u)for(let U=0;U<3;U++)u(F,b[(A+U)%b.length],[z+(U-1)*.11,1.05,U%2?-.11:.11],[.075,.085,.075])}return F.userData.marketDetails={canopyStripes:6,valances:6,produce:15},d(F),{building:g,houses:h,buildings:x}}var at=20;var gn=Qn.map((n,e)=>({...n,x:n.x*16,z:n.z*16,dock:{x:n.dock.x*16,z:n.dock.z*16},radius:n.id==="home"?9e3:n.radius*16,coastSeed:1.3+e*1.7,relief:n.id==="home"?24:n.biome==="highlands"?85:n.biome==="rainforest"?42:n.biome==="rocky"?28:12})),hu=Object.fromEntries(gn.map(n=>[n.id,n])),Ms={minX:Math.min(...gn.map(n=>n.x-n.radius))-1600,maxX:Math.max(...gn.map(n=>n.x+n.radius))+1600,minZ:Math.min(...gn.map(n=>n.z-n.radius))-1600,maxZ:Math.max(...gn.map(n=>n.z+n.radius))+1600},Sd=(n,e)=>gn.find(t=>Math.hypot(n-t.x,e-t.z)<t.radius)||null,yt=Object.fromEntries(gn.map((n,e)=>{let t=Qn[e],i=Math.hypot(t.dock.x-t.x,t.dock.z-t.z),r=(t.dock.x-t.x)/i,s=(t.dock.z-t.z)/i,a=n.radius*xs(n,Math.atan2(s,r)),o=u=>({x:n.x+r*u,z:n.z+s*u}),c=o(a-320),l=o(a+240);return[n.id,{id:n.id,...o(a+320),ux:r,uz:s,land:c,end:l,shore:o(a+200),length:Math.hypot(l.x-c.x,l.z-c.z),width:38,deck:.72}]})),vs={x:yt.home.land.x-385,z:yt.home.land.z-40},br=ma.map(n=>({...n,x:n.x+vs.x,z:n.z+vs.z,facing:n.z>60?Math.PI:0})),ys=(n,e)=>({x:n+vs.x,z:e+vs.z}),ga=[{width:55,curb:!0,points:Array.from({length:31},(n,e)=>e===0?{...yt.home.land}:ys(385-e*21,36+Math.sin(e*.19)*9))},{width:40,curb:!0,points:Array.from({length:15},(n,e)=>ys(23,-280+e*39))},{width:36,points:[ys(-245,40),ys(-600,30),{x:hu.home.radius*.35,z:400},{x:800,z:-700},{x:-1800,z:-2400}]}],wd=ys(290,-30),en={x:yt.fortress.land.x-yt.fortress.ux*800,z:yt.fortress.land.z-yt.fortress.uz*800},Td={x:en.x-115,z:en.z+145},st={pump:ys(330,65),cave:{x:yt.jungle.land.x-yt.jungle.ux*700,z:yt.jungle.land.z-yt.jungle.uz*700},estate:{x:en.x,z:en.z+102},paper:{x:0,z:-40},caveExit:{x:0,z:150},estateExit:{x:0,z:130},stairs:{x:70,z:-95},cellarExit:{x:0,z:150},key:{x:0,z:-60}};st.supply={x:st.cave.x+150,z:st.cave.z-105};var d_=[{id:"gate",area:null,...Td,hp:2},{id:"patrol",area:null,x:en.x+110,z:en.z+85,hp:2},{id:"hall",area:"estate",x:-65,z:15,hp:2},{id:"boss",area:"estate",x:0,z:-60,hp:3}];function uu(n,e,t){return t=Math.max(0,Math.min(1,t)),t=t*t*(3-2*t),n+(e-n)*t}function Hi(n,e,t=Sd(n,e)){if(!t)return-.32;let i=vr(t,n,e);if(i<=.01)return i;if(t.id==="home"){let r=Math.hypot(n-vs.x+80,e-vs.z);r<820&&(i=uu(.68,i,(r-470)/350))}if(t.id==="fortress"){let r=Math.max(Math.abs(n-en.x),Math.abs(e-en.z));r<400&&(i=uu(.85,i,(r-180)/220))}if(t.id==="jungle"){let r=Math.hypot(n-st.cave.x,e-st.cave.z);r<230&&(i=uu(1.2,i,(r-100)/130))}return i}function du(n,e,t,i){for(let r of i?[yt[i]]:Object.values(yt)){if(!r)continue;let s=e-r.land.x,a=t-r.land.z,o=s*r.ux+a*r.uz,c=s*r.uz-a*r.ux;if(o>=-.5&&o<=r.length+.5&&Math.abs(c)<=r.width/2){let l=Hi(r.land.x,r.land.z);return n.dock=r,n.height=l+(r.deck-l)*Math.max(0,Math.min(1,o/r.length)),n}}return null}var f_={};function li(n,e){return du(f_,n,e)?.height??Hi(n,e)}function Dl(n,e){return ga.some(t=>t.points.some((i,r)=>{if(!r)return!1;let s=t.points[r-1],a=i.x-s.x,o=i.z-s.z,c=Math.max(0,Math.min(1,((n-s.x)*a+(e-s.z)*o)/(a*a+o*o)));return Math.hypot(n-s.x-a*c,e-s.z-o*c)<t.width/2+35}))}var _b=Object.fromEntries(Qn.map(n=>{let e=Math.hypot(n.dock.x-n.x,n.dock.z-n.z),t=(n.dock.x-n.x)/e,i=(n.dock.z-n.z)/e;return[n.id,{x:n.x+t*n.radius*1.06,z:n.z+i*n.radius*1.06,shore:{x:n.x+t*n.radius*.84,z:n.z+i*n.radius*.84}}]}));var bs={seatZ:-.28,seatTop:.72,hips:.84,eye:1.65};function p_(n){let e=0;return n.traverse(t=>{t!==n&&(t.updateMatrix(),t.matrixAutoUpdate=!1,e++)}),n.userData.staticPartCount=e,e}function Ad(n,e,t,i,r,s,a=0,o=!1){let c=n.userData.motorboatFrameState||(n.userData.motorboatFrameState={}),l=s?Math.sin(a*2)*.015:0,u=!c.ready||c.x!==t||c.z!==i||c.heading!==r||c.roll!==l||c.moving!==s;return n.matrixAutoUpdate=!!s,u&&(n.position.set(t,.02,i),n.rotation.set(0,r,l),s||n.updateMatrix(),c.ready=!0,c.x=t,c.z=i,c.heading=r,c.roll=l,c.moving=!!s),e.visible=!!s&&!!o,u}function Ed(n,{cube:e,ell:t,mat:i}){let r=new Oe;r.name="campaign-boat",n.add(r),t(r,"#233f52",[0,.05,0],[.85,.36,1.9]),t(r,"#dedbd0",[0,.22,0],[.8,.23,1.85]);let s=e(r,"#6e5942",[0,.4,-.15],[1.3,.08,2.7]);s.name="boat-deck";let a=e(r,"#3b5355",[0,.57,bs.seatZ],[.92,.3,.48]);a.name="boat-seat",e(r,"#e7e0d0",[0,.73,.5],[1,.65,.36]);let o=new dt(new pn(1.2,.48,.025),new na({color:"#b9e4eb",transparent:!0,opacity:.4,roughness:.1}));o.position.set(0,1.15,.68),r.add(o);let c=new dt(new bi(.2,.026,8,20),i("#2e3538"));c.name="boat-wheel",c.position.set(0,1.05,.28),r.add(c);let l=new Ht(1,1,1,8),u=new Pt(l,i("#d6dedc"),10),h=new It;u.name="boat-rails";let d=0;for(let M of[-.68,.68]){for(let _ of[.15,.85,1.55])h.position.set(M,.75,_),h.rotation.set(0,0,0),h.scale.set(.025,.5,.025),h.updateMatrix(),u.setMatrixAt(d++,h.matrix);for(let _ of[.86,1.01])h.position.set(M,_,.85),h.rotation.set(Math.PI/2,0,0),h.scale.set(.025,1.4,.025),h.updateMatrix(),u.setMatrixAt(d++,h.matrix)}u.castShadow=!0,u.instanceMatrix.needsUpdate=!0,u.computeBoundingSphere(),r.add(u);let f=new Bt({color:"#b7d6d8",emissive:"#31545a",emissiveIntensity:.38,roughness:.28}),g=new Pt(new Ht(.1,.1,.03,16),f,3);g.name="boat-gauges";for(let M=0;M<3;M++)h.position.set((M-1)*.28,.91,.3),h.rotation.set(Math.PI/2,0,0),h.scale.set(M===1?1:.82,M===1?1:.82,1),h.updateMatrix(),g.setMatrixAt(M,h.matrix);g.instanceMatrix.needsUpdate=!0,g.computeBoundingSphere(),r.add(g);let x=t(r,"#d84e46",[-.65,.79,.94],[.075,.075,.075]),m=t(r,"#52b878",[.65,.79,.94],[.075,.075,.075]);x.name="boat-port-light",m.name="boat-starboard-light",x.material=new Bt({color:"#d84e46",emissive:"#b32b25",emissiveIntensity:.9}),m.material=new Bt({color:"#52b878",emissive:"#238547",emissiveIntensity:.9}),e(r,"#303b40",[0,.35,-1.75],[.42,.6,.38]),e(r,"#303b40",[0,-.12,-1.85],[.22,.65,.25]);let p=new dt(new Dn(1.5,5),new Tn({color:"#d0ebe6",transparent:!0,opacity:.25,depthWrite:!1}));return p.rotation.x=-Math.PI/2,p.position.set(0,.03,-3.3),r.add(p),r.userData.boatDetails={rails:10,gauges:3,navigationLights:2},p_(r),{boat:r,wake:p}}function Cd(n,e){if(n.root.parent===e)return!1;e.add(n.root),n.root.position.set(0,0,bs.seatZ),n.root.rotation.set(0,0,0),n.rig.rotation.set(0,0,0),n.hips.position.y=bs.hips;for(let t of n.arms)t.arm.rotation.x=-.85,t.arm.rotation.z=-t.side*.18,t.forearm.rotation.x=-.72;for(let t of n.legs)t.thigh.rotation.x=-1.68,t.calf.rotation.x=1.68,t.shoe.rotation.x=0;return!0}var Rd=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z);var Id=Object.values(yt),Un=Array.from({length:5},(n,e)=>({id:e,x:(e-2)*38,z:-80,child:e>2})),m_=Un.map(n=>"cell-"+n.id),g_=Object.fromEntries(Id.map(n=>[n.id,"dock-"+n.id]));function x_(n){let e=null,t=15625;for(let i of Id){let r=i.x-n.p.x,s=i.z-n.p.z,a=r*r+s*s;a<t&&(e=i,t=a)}return e}function Cn(n,e,t,i,r){let s=n[e]||(n[e]={});return Object.assign(s,i),s.id=t,s.label=r,e+1}function Pd(n,e){let t=0;if(e.interior==="cave")return t=Cn(n,t,"paper",st.paper,e.paper?e.gun?"supplies":"take-gun":"move-paper"),t=Cn(n,t,"cave-exit",st.caveExit,"leave-cave"),n.length=t,n;if(e.interior==="estate")return t=Cn(n,t,"key",st.key,"take-key"),t=Cn(n,t,"stairs",st.stairs,"cellar"),t=Cn(n,t,"estate-exit",st.estateExit,"leave-estate"),n.length=t,n;if(e.interior==="cellar"){for(let r of Un)e.released.includes(r.id)||(t=Cn(n,t,m_[r.id],r,"free-person"));return t=Cn(n,t,"cellar-exit",st.cellarExit,"upstairs"),n.length=t,n}if(e.boat){let r=x_(e);return r&&(t=Cn(n,t,g_[r.id],r,"dock")),n.length=t,n}let i=yt[e.island];if(t=Cn(n,t,"boat",i.shore,e.released.length===5&&!e.boarded?"board-group":"boat"),e.island==="home"&&(t=Cn(n,t,"pump",st.pump,"refuel")),e.island==="jungle"&&(t=Cn(n,t,"cave",st.cave,"enter-cave"),t=Cn(n,t,"supply",st.supply,"supplies")),e.island==="fortress"&&(t=Cn(n,t,"estate",st.estate,"enter-estate")),["highlands","smugglers","paradise"].includes(e.island)){let r=hu[e.island];t=Cn(n,t,"supplies",r,"supplies")}return n.length=t,n}function Dd(n,e){let t=null,i=1/0;for(let r of n){let s=r.id.startsWith("cell-")?85:r.id.startsWith("dock-")?125:65,a=r.x-e.x,o=r.z-e.z,c=a*a+o*o;c<s*s&&c<i&&(t=r,i=c)}return t}function __(n,e){if(e.complete)return n.key="complete",n.target=null,n;if(!e.docked)return n.key="dock-goal",n.target=yt.home,n;if(!e.tanked)return n.key="fuel-goal",n.target=e.boat?yt.home:st.pump,n;if(!e.gun)return e.interior==="cave"?(n.key=e.paper?"gun-goal":"paper-goal",n.target=st.paper,n):(n.key="cave-goal",n.target=e.boat?yt.jungle:e.island==="jungle"?st.cave:yt[e.island].shore,n);if(e.interior==="cave")return n.key="exit-cave-goal",n.target=st.caveExit,n;if(!e.key){if(e.interior==="estate"){let t=e.guards.find(i=>i.id==="boss");return n.key=t.hp>0?"boss-goal":"key-goal",n.target=t.hp>0?t:st.key,n}return n.key="estate-goal",n.target=e.boat?yt.fortress:e.island==="fortress"?st.estate:yt[e.island].shore,n}return e.released.length<5?(n.key=e.interior==="cellar"?"people-goal":"cellar-goal",n.target=e.interior==="cellar"?Un.find(t=>!e.released.includes(t.id)):e.interior==="estate"?st.stairs:e.boat?yt.fortress:st.estate,n):e.interior?(n.key="escort-goal",n.target=e.interior==="cellar"?st.cellarExit:st.estateExit,n):e.boarded?(n.key="home-goal",n.target=e.boat?yt.home:e.island==="home"?yt.home.shore:yt[e.island].shore,n):(n.key="boat-goal",n.target=yt.fortress.shore,n)}var y_={};function fu(n,e){if(__(n,e),e.boat||e.interior||!n.target)return n;let t=yt[e.island],i=!!du(y_,e.p.x,e.p.z,e.island);return n.target===t.shore?!i&&Rd(e.p,t.land)>65&&(n.target=t.land):i&&Rd(e.p,t.land)>45&&(n.target=t.land),n}function Ll(n){return fu({},n)}function pu(n,e,t,i,r){let s=e.interior?1.8:e.boat?.65:1.3;if(n.fillStyle=e.interior?"#25312d":"#176475",n.fillRect(0,0,t,i),n.save(),n.translate(t/2-e.p.x*s,i/2-e.p.z*s),n.scale(s,s),e.interior){if(n.fillStyle="#6f7568",n.fillRect(-115,-125,230,310),n.strokeStyle="#beb99e",n.lineWidth=8,n.strokeRect(-115,-125,230,310),e.interior==="cave"&&(n.fillStyle="#967756",n.fillRect(-25,-60,50,35),n.fillStyle=e.paper?"#30383a":"#e4d6b8",e.gun||n.fillRect(-17,-55,34,22)),e.interior==="estate"&&(n.fillStyle="#9b7751",n.fillRect(-45,-105,90,25),n.fillStyle="#f0c561",!e.key&&e.guards.find(l=>l.id==="boss").hp===0&&n.fillRect(-5,-65,10,12)),e.interior==="cellar")for(let l of Un)n.strokeStyle="#bac6bf",e.released.includes(l.id)||n.strokeRect(l.x-18,-112,36,80)}else{for(let l of gn){o(l,1,"#398b8b",-4*at),o(l,1,"#d9cba2"),o(l,1,l.biome==="highlands"?"#8f9882":"#759575",18*at);for(let h=0;h<26;h++){let d=h*2.39996+l.x*.001,f=l.radius*(.36+h%7*.075),g=l.x+Math.sin(d)*f,x=l.z+Math.cos(d)*f;if(!(l.id==="home"&&(Mr({x:g,z:x},l.id,br)||Dl(g,x)))&&!(l.id==="fortress"&&Math.abs(g-en.x)<125&&Math.abs(x-en.z)<155)){n.strokeStyle="#365e49",n.lineWidth=5;for(let m=0;m<7;m++){let p=m*Math.PI*2/7;n.beginPath(),n.moveTo(g,x),n.quadraticCurveTo(g+Math.sin(p+.25)*13,x+Math.cos(p+.25)*13,g+Math.sin(p)*25,x+Math.cos(p)*25),n.stroke()}}}n.fillStyle="#fff4cc",n.font="18px system-ui",n.textAlign="center",n.fillText(r(l.id),l.x,l.z-l.radius*.58);let u=yt[l.id];n.strokeStyle="#a2865b",n.lineWidth=u.width,n.beginPath(),n.moveTo(u.land.x,u.land.z),n.lineTo(u.end.x,u.end.z),n.stroke()}for(let l of ga)n.strokeStyle="#b7baa5",n.lineWidth=l.width,n.beginPath(),l.points.forEach((u,h)=>h?n.lineTo(u.x,u.z):n.moveTo(u.x,u.z)),n.stroke();for(let l of br)n.fillStyle="#304f43",n.fillRect(l.x-l.w/2+7,l.z-l.d/2+9,l.w,l.d),n.fillStyle=l.color,n.fillRect(l.x-l.w/2,l.z-l.d/2,l.w,l.d),n.fillStyle="#ab7861",n.fillRect(l.x-l.w/2-3,l.z-l.d/2+4,l.w+6,l.d-8),n.strokeStyle="#d4aa83",n.lineWidth=4,n.beginPath(),n.moveTo(l.x-l.w/2,l.z),n.lineTo(l.x+l.w/2,l.z),n.stroke();n.fillStyle="#e0d5b9",n.fillRect(en.x-80,en.z-80,160,160),n.fillStyle="#352e25",n.fillRect(en.x-20,en.z+76,40,12),n.fillStyle="#404b40",n.fillRect(st.cave.x-36,st.cave.z-30,72,36),n.fillStyle="#d28757",n.fillRect(st.pump.x-15,st.pump.z-16,30,32)}for(let l of e.guards)l.area===e.interior&&l.hp>0&&!e.boat&&(l.area||e.island==="fortress")&&c(l,"#d28b76",12);if(e.interior==="cellar")for(let l of Un)e.released.includes(l.id)||c(l,"#d3dcbe",10);let a=Ll(e).target;a&&(n.strokeStyle="#f5d281",n.lineWidth=3,n.beginPath(),n.arc(a.x,a.z,20+Math.sin(e.elapsed*3)*3,0,Math.PI*2),n.stroke()),n.save(),n.translate(e.p.x,e.p.z),n.rotate(-e.heading),e.boat?(n.fillStyle="#efe4c9",n.beginPath(),n.moveTo(-18,-32),n.lineTo(18,-32),n.lineTo(22,28),n.lineTo(0,50),n.lineTo(-22,28),n.closePath(),n.fill()):(n.fillStyle="#b6ddd3",n.beginPath(),n.arc(0,0,9,0,Math.PI*2),n.fill()),n.strokeStyle="#fff6c7",n.lineWidth=3,n.beginPath(),n.moveTo(0,6),n.lineTo(0,28),n.stroke(),n.restore(),e.shot&&(n.strokeStyle="#ffeac5",n.lineWidth=2,n.beginPath(),n.moveTo(e.shot.from.x,e.shot.from.z),n.lineTo(e.shot.to.x,e.shot.to.z),n.stroke()),n.restore();function o(l,u,h,d=0){n.fillStyle=h,n.beginPath();for(let f=0;f<=96;f++){let g=f/96*Math.PI*2,x=l.radius*xs(l,g)*u-d,m=l.x+Math.cos(g)*x,p=l.z+Math.sin(g)*x;f?n.lineTo(m,p):n.moveTo(m,p)}n.closePath(),n.fill()}function c(l,u,h){n.fillStyle=u,n.beginPath(),n.arc(l.x,l.z,h,0,Math.PI*2),n.fill()}}function v_(n,e){return e.parent===n?!1:(n.add(e),!0)}function Ld(n,e=[]){let t=new Set(e);n.updateWorldMatrix(!0,!0);let i=0,r=s=>{if(!t.has(s)){s.updateMatrix(),s.matrixAutoUpdate=!1,s.matrixWorldAutoUpdate=!1,i++;for(let a of s.children)r(a)}};return r(n),i}function M_(n,e,t,i,r,s,a,o){if(n.ready&&n.area===e)return!1;n.ready=!0,n.area=e,t.visible=!e,i.visible=!!e;for(let[c,l]of r)l.visible=c===e;return s.background.set(e?"#202c29":"#b9dbe5"),s.fog.color.copy(s.background),a.intensity=e?.65:2,o.intensity=e?.15:2.8,!0}function b_(n,e,t,i,r,s){return n?!1:(i.material.uniforms.uTime.value=e,s.update(t.position,.5),r.update(e,t.position),El(i,t.position),!0)}function S_(n,e,t,i,r,s=800,a=200){if(n.ready&&n.area===e){let l=n.x-t.x,u=n.z-t.z;if(l*l+u*u<a*a)return!1}n.ready=!0,n.area=e,n.x=t.x,n.z=t.z;let o=!1,c=0;for(let l=0;l<r.length;l++){let u=i[l],h=t.x-u.x,d=t.z-u.z,f=!e&&h*h+d*d<=(u.radius+s)**2;r[l].receiveShadow!==f&&(r[l].receiveShadow=f,o=!0),f&&c++}return n.active=c,o}function w_(n,e,t,i){let r=n.values||(n.values=[]),s=!n.ready||r.length!==e.length;for(let a=0;a<e.length;a++)r[a]!==e[a]&&(s=!0);if(!s)return!1;n.ready=!0,r.length=e.length,t.fill(0);for(let a=0;a<e.length;a++){let o=e[a];r[a]=o,t[o]=1}for(let a=0;a<i.length;a++)i[a].visible=!t[a];return!0}function T_(n,e,t){let i=e.released||[],r=n.released||(n.released=[]),s=!n.ready||n.x!==e.p.x||n.z!==e.p.z||n.area!==(e.interior||"")||n.island!==e.island||n.boat!==!!e.boat||n.paper!==!!e.paper||n.gun!==!!e.gun||n.boarded!==!!e.boarded||r.length!==i.length;for(let a=0;a<i.length;a++)r[a]!==i[a]&&(s=!0);if(!s)return!1;n.ready=!0,n.x=e.p.x,n.z=e.p.z,n.area=e.interior||"",n.island=e.island,n.boat=!!e.boat,n.paper=!!e.paper,n.gun=!!e.gun,n.boarded=!!e.boarded,r.length=i.length;for(let a=0;a<i.length;a++)r[a]=i[a];return n.nearby=Dd(Pd(t,e),e.p),!0}function A_(n,e,t,i=!!e.guards?.find(r=>r.id==="boss"&&r.hp>0)){let r=e.released||[],s=n.released||(n.released=[]),a=!n.ready||n.x!==e.p.x||n.z!==e.p.z||n.area!==(e.interior||"")||n.island!==e.island||n.boat!==!!e.boat||n.complete!==!!e.complete||n.docked!==!!e.docked||n.tanked!==!!e.tanked||n.paper!==!!e.paper||n.gun!==!!e.gun||n.key!==!!e.key||n.boarded!==!!e.boarded||n.bossAlive!==i||s.length!==r.length;for(let o=0;o<r.length;o++)s[o]!==r[o]&&(a=!0);if(!a)return!1;n.ready=!0,n.x=e.p.x,n.z=e.p.z,n.area=e.interior||"",n.island=e.island,n.boat=!!e.boat,n.complete=!!e.complete,n.docked=!!e.docked,n.tanked=!!e.tanked,n.paper=!!e.paper,n.gun=!!e.gun,n.key=!!e.key,n.boarded=!!e.boarded,n.bossAlive=i,s.length=r.length;for(let o=0;o<r.length;o++)s[o]=r[o];return fu(t,e),!0}function E_(n,e,t,i,r,s,a,o){return n.ready&&n.area===e?(o.yaw=r,o.pitch=s,!1):(n.ready=!0,n.area=e,o.yaw=e?0:i?Math.atan2(t.x-i.x,t.z-i.z):r,o.pitch=a,!0)}function C_(n,e,t,i){return n.ready&&n.x===t.x&&n.y===t.y&&n.z===t.z&&n.tx===i.x&&n.ty===i.y&&n.tz===i.z?!1:(n.ready=!0,n.x=t.x,n.y=t.y,n.z=t.z,n.tx=i.x,n.ty=i.y,n.tz=i.z,e.position.copy(t),e.lookAt(i),!0)}function R_(n,e,t=!1){let i=e.interior||"",r=!!e.boat,s=Math.round(e.p.x/20),a=Math.round(e.p.z/20),o=Math.round(e.heading*12),c=!!e.boarded,l=e.guards||[],u=e.released||[],h=!n.ready||n.area!==i||n.island!==e.island||n.boat!==r||n.x!==s||n.z!==a||n.heading!==o||n.boarded!==c||n.animated!==t||n.guardCount!==l.length||n.releasedCount!==u.length,d=n.guards||(n.guards=[]),f=n.released||(n.released=[]);for(let g=0;g<l.length;g++){let x=l[g].hp>0;d[g]!==x&&(h=!0),d[g]=x}for(let g=0;g<u.length;g++)f[g]!==u[g]&&(h=!0),f[g]=u[g];return d.length=l.length,f.length=u.length,n.ready=!0,n.area=i,n.island=e.island,n.boat=r,n.x=s,n.z=a,n.heading=o,n.boarded=c,n.animated=t,n.guardCount=l.length,n.releasedCount=u.length,h}function I_(n,e=!1,t=!0){return!n.paused&&!!(e||n.walking&&(n.boat||t))}function P_(n=!1){return 1e3/(n?20:30)}function D_(n,e,t,i){let r=Math.sin(i),s=Math.cos(i);for(let a=0;a<e.length;a++){let o=e[a],c=n[a],l=35+o.id*15,u=o.id%2?16:-16;c.x=t.x-r*l+s*u,c.z=t.z-s*l-r*u}return n}function L_(n,e,t,i,r=at){return n.setXYZ(0,e.x/r,i,e.z/r),n.setXYZ(1,t.x/r,i,t.z/r),n.needsUpdate=!0,n}function U_(n,e,t){let i=e*7;return n.swing=Math.sin(i),n.step=t?.24:0,n.bounce=t?Math.cos(i*2):0,n}function N_(n,e,t,i,r,s=!1,a="standing"){let o=s||r||!n.ready||n.x!==e.x||n.z!==e.z||n.height!==t||n.heading!==i||n.walking!==r||n.pose!==a;return n.ready=!0,n.x=e.x,n.z=e.z,n.height=t,n.heading=i,n.walking=r,n.pose=a,o}function F_(n,e,t,i,r){return r?(i?(n.rig.rotation.x=0,n.arms[1].arm.rotation.x=-1.05,n.arms[1].forearm.rotation.x=-.35):(n.rig.rotation.x=-Math.PI/2,n.root.position.y=e+(t?0:.15),n.root.scale.setScalar(.8)),!0):!1}function z_(n,e,t=!0){let i=!!(t&&n.ready&&(n.x!==e.x||n.z!==e.z));return n.ready=!0,n.x=e.x,n.z=e.z,i}function O_(n,e,t=!0){return(t||!n.headingReady)&&(n.headingReady=!0,n.heading=e),n.heading}function xa(n,e,t,i,r){let s=n.get(e);return s&&s.x===t&&s.z===i||(s||(s={x:0,z:0,height:0},n.set(e,s)),s.x=t,s.z=i,s.height=r(t,i),n.misses=(n.misses||0)+1),s.height}function B_(n,e,t,i,r=!0){if(!r||!n.ready)return n.ready=!0,n.last=e,n.slow=0,n.fast=0,t;let s=e-n.last;return n.last=e,s<=0||s>250?t:(s>34?(n.slow+=s,n.fast=0):s<20?(n.fast+=s,n.slow=Math.max(0,n.slow-s)):(n.slow=Math.max(0,n.slow-s*.5),n.fast=Math.max(0,n.fast-s)),n.slow>=2500&&t>.8?(n.slow=0,n.fast=0,Math.max(.8,Math.round((t-.15)*100)/100)):n.fast>=5e3&&t<i?(n.slow=0,n.fast=0,Math.min(i,Math.round((t+.1)*100)/100)):t)}function k_(n,e,t=0){let i=Math.min(n,e),r=Math.max(n,e);return n<=700||t>0&&(i<=700||r<=1200)}function Ud({canvas:n,getState:e,makeHuman:t,onLost:i,rendererFactory:r=s=>new ps(s)}){let s=r(Ml(n)),a=k_(innerWidth,innerHeight,globalThis.navigator?.maxTouchPoints||0),o=Math.min(devicePixelRatio||1,a?1.1:1.5),c=P_(a);s.setPixelRatio(o),s.setSize(innerWidth,innerHeight,!1),s.outputColorSpace=Qt,s.toneMapping=as,s.shadowMap.enabled=!0,s.shadowMap.type=ss,s.shadowMap.autoUpdate=!1;let l=new rr,u=new sn(68,innerWidth/innerHeight,.04,6e3);l.add(u),l.background=new $e("#b9dbe5"),l.fog=new ir("#b9dbe5",650,2400);let h=new cr("#d5ecfa","#566143",2),d=new hr("#fff2d6",2.8);d.castShadow=!0,d.shadow.mapSize.set(a?1024:2048,a?1024:2048),Object.assign(d.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:.1,far:100}),d.shadow.normalBias=.025,l.add(h,d,d.target);let f=bl(s,a?4:8),g=new Map,x=new Map,m=N=>(g.has(N)||g.set(N,f.forColor(N)||new Bt({color:N,roughness:.85})),g.get(N)),p=(N,H)=>(x.has(N)||x.set(N,H()),x.get(N)),M=(N,H,se,S=[0,0,0],k=[1,1,1])=>{let K=new dt(H,se);return K.position.set(...S),K.scale.set(...k),K.castShadow=K.receiveShadow=!0,N.add(K),K},_=(N,H,se,S)=>M(N,p("box",()=>new pn),m(H),se,S),y=(N,H,se,S)=>M(N,p("cylinder",()=>new Ht(1,1,1,12)),m(H),se,S),E=(N,H,se,S)=>M(N,p("sphere",()=>new En(1,16,12)),m(H),se,S),C={mat:m,geo:p,mesh:M,cube:_,tube:y,ell:E},D=new Oe,F=new Oe,T=N=>{let H=new Map;N.updateMatrix();for(let se of[...N.children])if(se.isMesh){se.updateMatrix();let S=se.geometry.clone().applyMatrix4(se.matrix);H.has(se.material)||H.set(se.material,[]),H.get(se.material).push(S),N.remove(se)}for(let[se,S]of H){let k=_s(S,!1);S.forEach($=>$.dispose());let K=new dt(k,se);K.castShadow=K.receiveShadow=!0,N.add(K)}},b=(N,H)=>{let se=new Set(N.legs.map(me=>me.shoe)),S=0,k=0,K=0;N.root.traverse(me=>{me.isMesh&&S++});let $=me=>{for(let ue of[...me.children])ue.isMesh||$(ue);let Pe=new Map;for(let ue of[...me.children])ue.isMesh&&!se.has(ue)&&!ue.isInstancedMesh&&(Pe.has(ue.material)||Pe.set(ue.material,[]),Pe.get(ue.material).push(ue));for(let[ue,He]of Pe)if(He.length>1){let Ke=He.map(je=>(je.updateMatrix(),je.geometry.clone().applyMatrix4(je.matrix))),rt=_s(Ke,!1);Ke.forEach(je=>je.dispose());let Nt=new dt(rt,ue);Nt.name=`${H}-rigid-batch-${K++}`,Nt.castShadow=He.some(je=>je.castShadow),Nt.receiveShadow=He.some(je=>je.receiveShadow),He.forEach(je=>me.remove(je)),me.add(Nt)}};$(N.root),N.root.traverse(me=>{me.isMesh&&k++}),N.root.userData.rigidBatchProfile={sourceMeshes:S,renderMeshes:k,batches:K,animatedShoes:se.size}},A=(N,H,se)=>{let S=new Oe;S.name="campaign-supply-cache-"+N,S.position.set(H/at,li(H,se),se/at),D.add(S),_(S,"#a98961",[0,.34,0],[1.45,.68,.88]),_(S,"#debb63",[0,.72,0],[1.52,.09,.94]);for(let k of[-.54,.54])_(S,"#debb63",[k,.35,.46],[.1,.62,.06]);_(S,"#bd6e4e",[-1.02,.42,.04],[.42,.84,.55]),_(S,"#394447",[-1.02,.87,.04],[.2,.08,.22]);for(let k of[-1.15,-.89])_(S,"#394447",[k,.75,.04],[.05,.24,.05]);return _(S,"#394447",[-1.02,.84,.04],[.26,.05,.05]),_(S,"#596b4e",[.93,.23,.04],[.72,.46,.58]),_(S,"#394447",[.93,.48,.04],[.48,.05,.26]),_(S,"#e2dbc7",[.82,.86,-.03],[.7,.34,.5]),_(S,"#bd6e4e",[.82,.87,.235],[.34,.08,.025]),_(S,"#bd6e4e",[.82,.87,.235],[.08,.25,.025]),S.userData.supplyDetails={crate:!0,fuelCan:!0,medkit:!0,ammoBox:!0},T(S),S};l.add(D,F);let z=a?96:192,U=Math.max(...gn.map(N=>N.radius)),R=[];for(let N of gn){let H=Math.max(a?48:72,Math.round(z*N.radius/U/8)*8),se=lu(N,{segments:H});se.userData.terrainSegments=H,R.push(se),se.scale.set(1/at,1,1/at),se.position.set(N.x/at,0,N.z/at);let S=se.geometry.attributes.position;for(let At=0;At<S.count;At++)S.setY(At,Hi(N.x+S.getX(At),N.z+S.getZ(At),N));let k=new Float32Array(S.count*3),K=new $e;for(let At=0;At<S.count;At++){let ke=Math.hypot(S.getX(At),S.getZ(At))/N.radius;K.set(ke>.8?"#fff7e4":N.biome==="rocky"?"#d1d4c5":"#dce2c8"),K.toArray(k,At*3)}se.geometry.setAttribute("color",new an(k,3)),se.geometry.computeVertexNormals(),se.material.dispose(),se.material=Rl(f,at,{mobile:a}),se.material.vertexColors=!0,D.add(se);let $=yt[N.id],me=new Oe,Pe=Hi($.land.x,$.land.z);me.name="pier-"+N.id,me.position.set($.land.x/at,Pe,$.land.z/at),me.rotation.y=Math.atan2($.ux,$.uz),D.add(me);let ue=Ul($.end,$.land)/at,He=Math.ceil(ue/.26),Ke=new Pt(p("box",()=>new pn),m("#a98961"),He+1),rt=new It;Ke.name="pier-deck-"+N.id;for(let At=0;At<=He;At++){let ke=ue*At/He;rt.position.set(0,($.deck-Pe)*At/He-.075,ke),rt.scale.set($.width/at,.15,ue/He+.006),rt.updateMatrix(),Ke.setMatrixAt(At,rt.matrix)}Ke.castShadow=Ke.receiveShadow=!0,me.add(Ke);let Nt=p("pier-piling",()=>new Ht(1,1,1,12)),je=new Pt(Nt,m("#876742"),8);je.name="pier-pilings-"+N.id;let Je=0;for(let At of[-.8,.8])for(let ke of[0,ue*.33,ue*.66,ue]){let Mt=($.deck-Pe)*ke/ue;rt.position.set(At,Mt-.65,ke),rt.scale.set(.075,1.6,.075),rt.updateMatrix(),je.setMatrixAt(Je++,rt.matrix)}je.castShadow=je.receiveShadow=!0,je.instanceMatrix.needsUpdate=!0,je.computeBoundingSphere(),me.add(je);let ft=new Pt(Nt,m("#394447"),8);ft.name="pier-bollards-"+N.id;let dn=0;for(let At of[-.72,.72])for(let ke of[ue*.78,ue*.98]){let Mt=($.deck-Pe)*ke/ue;rt.position.set(At,Mt+.25,ke),rt.scale.set(.075,.5,.075),rt.updateMatrix(),ft.setMatrixAt(dn++,rt.matrix),rt.position.set(At,Mt+.51,ke),rt.scale.set(.13,.08,.13),rt.updateMatrix(),ft.setMatrixAt(dn++,rt.matrix)}ft.castShadow=ft.receiveShadow=!0,ft.instanceMatrix.needsUpdate=!0,ft.computeBoundingSphere(),me.add(ft),["paradise","smugglers","highlands"].includes(N.id)&&A(N.id,N.x,N.z)}A("jungle",st.supply.x,st.supply.z);let L=Math.max(Ms.maxX-Ms.minX,Ms.maxZ-Ms.minZ)/at+12e3,G=Al(gn.map(N=>[N.x/at,N.z/at,N.radius/at,N.radius/at]),{size:L,segments:a?48:72,coastSeeds:gn.map(N=>N.coastSeed),mobile:a});D.add(G.mesh);let q=Cl(5e3,{mobile:a});D.add(q);let B=Il(D,gn,{scale:at,height:Hi,surfaces:f,small:a,dense:!0,lod:!0,clear:(N,H,se)=>Mr({x:H,z:se},N.id,br)||N.id==="home"&&Dl(H,se)||N.id==="jungle"&&(Ul({x:H,z:se},st.cave)<100||Ul({x:H,z:se},st.supply)<58)||N.id==="fortress"&&Math.abs(H-en.x)<125&&Math.abs(se-en.z)<155||Ul({x:H,z:se},yt[N.id].land)<90}),ne=Pl(D,{scale:at,height:Hi,surfaces:f,helpers:C,village:br,paths:ga,marketPoint:wd}),{boat:re,wake:Me}=Ed(D,C),ge=new Oe;ge.name="harbor-fuel-pump",ge.position.set(st.pump.x/at,li(st.pump.x,st.pump.z),st.pump.z/at),D.add(ge),_(ge,"#a98961",[0,.06,0],[1.05,.12,.92]),_(ge,"#e6d6b8",[0,.68,0],[.75,1.24,.65]),_(ge,"#bd6e4e",[0,1.34,0],[.82,.28,.72]),_(ge,"#263f41",[0,.99,.34],[.48,.25,.045]),_(ge,"#e8d99e",[0,.99,.37],[.31,.1,.018]),y(ge,"#2d3435",[.53,.72,0],[.035,1.18,.035]);let Ve=_(ge,"#394447",[.53,.39,.29],[.1,.24,.08]);Ve.rotation.z=-.22,_(ge,"#bd6e4e",[0,.39,.35],[.3,.1,.055]),y(ge,"#e6d6b8",[0,2.18,-.06],[.055,1.42,.055]);let mt=y(ge,"#bd6e4e",[0,2.9,-.06],[.42,.1,.42]);mt.rotation.x=Math.PI/2;let nt=y(ge,"#f3dfbe",[0,2.9,.005],[.31,.115,.31]);nt.rotation.x=Math.PI/2,ge.userData.fuelDetails={display:!0,hose:!0,nozzle:!0,marker:!0},T(ge);let Z=new Oe;Z.name="campaign-cave-entrance",Z.position.set(st.cave.x/at,li(st.cave.x,st.cave.z),st.cave.z/at),D.add(Z);let Q=[[-2,.45,.02,.55,.55,.85,-.12],[-2,1.15,-.02,.58,.7,.95,.08],[-1.9,1.9,.04,.62,.72,.9,-.09],[-1.55,2.55,-.03,.72,.6,.9,.14],[2,.45,-.02,.55,.55,.85,.12],[2,1.15,.03,.58,.7,.95,-.08],[1.9,1.9,-.04,.62,.72,.9,.09],[1.55,2.55,.02,.72,.6,.9,-.14],[-1,2.9,.03,.72,.48,.9,-.1],[-.35,3.05,-.03,.68,.45,.92,.06],[.35,3.05,.02,.68,.45,.92,-.06],[1,2.9,-.02,.72,.48,.9,.1]],oe=new It,Ie=new Pt(p("cave-mouth-rock",()=>new En(1,12,8)),m("#92968b"),Q.length);Ie.name="cave-entrance-rocks",Ie.castShadow=!0,Ie.receiveShadow=!0,Q.forEach(([N,H,se,S,k,K,$],me)=>{oe.position.set(N,H,se),oe.scale.set(S,k,K),oe.rotation.set(0,0,$),oe.updateMatrix(),Ie.setMatrixAt(me,oe.matrix)}),Ie.instanceMatrix.needsUpdate=!0,Ie.computeBoundingSphere(),Z.add(Ie),_(Z,"#171e19",[0,1.25,-.85],[2.8,2.5,.15]);let Re=new Pt(p("cave-torch-handle",()=>new Ht(1,1,1,7)),m("#4c3525"),2);Re.name="cave-entrance-torches",Re.castShadow=!0;let it=new Bt({color:"#ffcf75",emissive:"#ff7f32",emissiveIntensity:1.15,roughness:.55}),lt=new Pt(p("cave-torch-flame",()=>new Jn(1,1,7)),it,2);lt.name="cave-entrance-flames",[-1,1].forEach((N,H)=>{oe.position.set(N*1.18,1.15,.18),oe.scale.set(.035,.85,.035),oe.rotation.set(0,0,-N*.15),oe.updateMatrix(),Re.setMatrixAt(H,oe.matrix),oe.position.set(N*1.18,1.65,.18),oe.scale.set(.12,.22,.12),oe.rotation.set(0,0,N*.08),oe.updateMatrix(),lt.setMatrixAt(H,oe.matrix)}),Re.instanceMatrix.needsUpdate=!0,lt.instanceMatrix.needsUpdate=!0,Re.computeBoundingSphere(),lt.computeBoundingSphere(),Z.add(Re,lt),Z.userData.entranceDetails={archStones:12,torches:2,clearOpening:!0};let P=new Oe;P.name="guarded-estate",P.position.set(en.x/at,.85,en.z/at),D.add(P),_(P,"#e2dbc7",[0,1.55,0],[8,3.1,8]),_(P,"#a68854",[0,3.2,0],[8.6,.25,8.6]),_(P,"#e2dbc7",[0,4.35,-.4],[6.5,2.3,6.5]);for(let N of[-1,1]){let H=_(P,"#ba7655",[N*1.7,5.9,-.4],[3.7,.15,7.4]);H.rotation.z=-N*.3}_(P,"#313f38",[0,1.2,4.03],[1.65,2.4,.08]);for(let N of[-2.7,2.7])for(let H of[1.7,4.3])_(P,"#425761",[N,H,4.04],[1.15,1.3,.06]),_(P,"#e2dbc7",[N,H,4.11],[.08,1.38,.08]),_(P,"#e2dbc7",[N,H,4.11],[1.2,.08,.08]);for(let N of[-1.4,1.4])y(P,"#e2dbc7",[N,1.3,4.65],[.16,2.6,.16]);_(P,"#a68854",[0,2.67,4.65],[3.3,.2,1.4]);for(let N=0;N<3;N++)_(P,"#92968b",[0,-.03+N*.06,4.4+N*.4],[2.6,.15,1.25-N*.25]);for(let N of[-3.4,3.4])for(let H of[1.7,4.3]){_(P,"#587e7c",[N,H,4.07],[.32,1.35,.1]);for(let se=0;se<8;se++)_(P,"#876742",[N,H-.5+se*.14,4.14],[.3,.025,.045])}_(P,"#e2dbc7",[0,3.1,4.55],[8.5,.16,1.25]);for(let N=-10;N<=10;N++)y(P,"#e2dbc7",[N*.39,3.57,5.05],[.033,.83,.033]);_(P,"#e2dbc7",[0,4,5.05],[8.5,.08,.08]);for(let N of[-2.45,2.45]){_(P,"#a98961",[N,.3,4.62],[1.25,.42,.55]);for(let H=-2;H<=2;H++){let se=E(P,H%2?"#6f8f58":"#88a866",[N+H*.2,.67+Math.abs(H)*.025,4.62],[.18,.38,.18]);se.rotation.z=H*.12}}let St=new Bt({color:"#ffe4a8",emissive:"#ffb85c",emissiveIntensity:.72,roughness:.34});for(let N of[-1.03,1.03]){_(P,"#394447",[N,2.05,4.14],[.08,.1,.24]);let H=E(P,"#ffe4a8",[N,1.88,4.27],[.13,.19,.13]);H.material=St}let Ye=y(P,"#d4a957",[0,3.02,4.11],[.38,.1,.38]);Ye.rotation.x=Math.PI/2,P.userData.estateDetails={planters:2,lanterns:2,crest:!0},T(P),P.userData.cameraBlocker=!0;let Xe=[ne.buildings,P];Xe.forEach(N=>N.updateWorldMatrix(!0,!0));let Be={};function Tt(N,H=11,se=15){let S=new Oe;S.name=N,F.add(S),Be[N]=S,_(S,N==="cave"?"#777a6b":"#a68854",[0,-.1,1],[H,.2,se]);let k=new Oe;k.name=N+"-walls",S.add(k);for(let $ of[-H/2,H/2])_(k,N==="cave"?"#92968b":"#e2dbc7",[$,1.65,1],[.3,3.3,se]);_(k,N==="cave"?"#92968b":"#e2dbc7",[0,1.65,1-se/2],[H,3.3,.3]),T(k),_(S,"#313f38",[0,1.1,se/2-.2],[1.7,2.2,.15]);let K=new ur(N==="cave"?"#ffd9a0":"#ffeccf",22,18,1.6);return K.position.set(0,2.7,1),S.add(K),S.userData.shellDetails={sourceMeshes:5,renderMeshes:3},S}let Ae=Tt("cave",12,17),Qe=p("cave-formation",()=>new Jn(1,1,9)),Dt=new Pt(Qe,m("#777a6b"),16),vt=new It;Dt.name="cave-formations";let I=[[-5.2,-5.4,.34,.92],[-5.2,-1.7,.27,.68],[-5.2,2.1,.38,1.06],[-5.2,5.1,.25,.78],[5.2,-4.1,.31,.84],[5.2,-.3,.39,1.12],[5.2,3.4,.28,.72],[3.6,-6.7,.42,1.18]],v=0;for(let[N,H,se,S]of I)vt.position.set(N,S/2,H),vt.rotation.set(0,v*.71%Math.PI,0),vt.scale.set(se,S,se),vt.updateMatrix(),Dt.setMatrixAt(v++,vt.matrix),vt.position.set(-N,3.3-S*.48,H+.55),vt.rotation.set(0,v*.53%Math.PI,Math.PI),vt.scale.set(se*.82,S*.92,se*.82),vt.updateMatrix(),Dt.setMatrixAt(v++,vt.matrix);Dt.castShadow=Dt.receiveShadow=!0,Dt.instanceMatrix.needsUpdate=!0,Dt.computeBoundingSphere(),Ae.add(Dt),Ae.userData.caveDetails={stalactites:8,stalagmites:8,clearCenter:!0};let Y=new Oe;Y.name="cave-evidence-table",Ae.add(Y),_(Y,"#a98961",[0,.75,-2],[2,.12,1.2]);for(let N of[-.75,.75])for(let H of[-2.45,-1.55])y(Y,"#876742",[N,.35,H],[.065,.7,.065]);for(let N of[-2.47,-1.53])_(Y,"#876742",[0,.57,N],[1.72,.2,.07]);_(Y,"#876742",[0,.56,-1.38],[.72,.27,.08]),E(Y,"#394447",[0,.56,-1.32],[.045,.045,.04]),y(Y,"#394447",[.72,.86,-2.18],[.17,.1,.17]);let te=new Bt({color:"#ffe4a8",emissive:"#ff9f45",emissiveIntensity:1.05,roughness:.28,transparent:!0,opacity:.88}),le=E(Y,"#ffe4a8",[.72,1.08,-2.18],[.14,.22,.14]);le.material=te,y(Y,"#394447",[.72,1.31,-2.18],[.12,.07,.12]),Y.userData.evidenceDetails={legs:4,drawer:!0,lantern:!0,newspaper:!0,hiddenGun:!0},T(Y);let ee=document.createElement("canvas");ee.width=256,ee.height=320;let De=ee.getContext("2d");De.fillStyle="#ddd5bd",De.fillRect(0,0,256,320),De.fillStyle="#3a3b32",De.font="bold 26px serif",De.fillText("ISLAND DAILY",18,38),De.fillRect(18,51,220,3);for(let N=0;N<20;N++)De.fillRect(18,72+N*10,94-N%4*6,2),De.fillRect(128,72+N*10,104-N%3*8,2);let pe=new Oi(ee);pe.colorSpace=Qt;let Ue=new dt(new Dn(.9,1.05),new Bt({map:pe,side:qt}));Ue.name="cave-newspaper",Ue.rotation.x=-Math.PI/2,Ue.position.set(0,.83,-2),Ae.add(Ue);function Ne(N){let H=new Oe;N.add(H),_(H,"#333a3d",[0,0,.06],[.12,.12,.34]);let se=_(H,"#695646",[0,-.11,-.03],[.1,.23,.13]);return se.rotation.x=-.22,_(H,"#8b9294",[0,.08,.03],[.11,.035,.3]),H}let ae=Ne(Ae);ae.name="cave-hidden-gun",ae.position.set(0,.87,-2),ae.rotation.y=Math.PI/2;let be=Tt("estate",11,15),ze=new Oe;ze.name="estate-fixtures",be.add(ze),_(ze,"#816947",[0,.42,-4.6],[2.6,.85,.9]),_(ze,"#decc9f",[0,.05,1],[3,.025,10]);for(let N=0;N<6;N++)_(ze,"#777a6b",[3.5,.06*N,-4.75+N*.28],[1.7,.12,.65]);ze.userData.batchDetails={sourceMeshes:8,renderMeshes:3},T(ze);let we=new Oe;we.name="estate-interior-details",be.add(we);let _e=["#6f443d","#40626a","#718052"];for(let[N,H]of[-2.7,0,2.7].entries())_(we,"#a68854",[H,1.9,-6.31],[1.42,1.22,.08]),_(we,_e[N],[H,1.9,-6.25],[1.12,.92,.045]);_(we,"#a68854",[0,.93,-6.29],[8.7,.08,.08]);for(let N of[-4.35,4.35]){_(we,"#394447",[N,2.02,-6.24],[.1,.32,.1]);let H=E(we,"#ffe4a8",[N,1.79,-6.15],[.14,.19,.11]);H.material=St}_(we,"#394447",[0,.86,-4.58],[1.12,.025,.52]);for(let N of[-.52,0,.52])_(we,"#d8d2c3",[N,.88,-4.57],[.4,.012,.3]);y(we,"#394447",[.93,1.08,-4.58],[.035,.42,.035]);let et=E(we,"#ffe4a8",[.93,1.34,-4.58],[.18,.16,.18]);et.material=St,be.userData.interiorDetails={portraits:3,sconces:2,documents:3,deskLamp:!0},T(we);let V=new dt(new bi(.13,.036,8,16),new Bt({color:"#f8ce60",emissive:"#8c6322",emissiveIntensity:.5}));V.position.set(0,.88,-3),be.add(V),_(V,"#debb63",[0,-.2,0],[.065,.32,.065]);let he=Tt("cellar",11,15),fe=[],xe=new Oe;xe.name="cellar-static",he.add(xe);let de=Object.entries(Be);for(let N of Un){let H=new Oe;H.name="cell-door-"+N.id,H.position.set(N.x/at,0,-1.5),he.add(H),fe[N.id]=H;for(let k=-2;k<=2;k++)y(H,"#475759",[k*.32,1.3,0],[.025,2.6,.025]);for(let k of[.1,2.5])_(H,"#475759",[0,k,0],[1.65,.055,.055]);for(let k of[.45,2.15])y(H,"#394447",[-.78,k,.07],[.045,.12,.045]);M(H,p("cell-padlock",()=>new bi(.09,.022,6,12)),m("#a68854"),[.61,1.42,.07]),_(H,"#a68854",[.61,1.27,.07],[.18,.2,.08]),T(H);let se=N.x/at,S=["#738b90","#9b796d"][N.id%2];_(xe,"#a98961",[se,.18,-4.8],[1.55,.36,.8]),_(xe,"#e2dbc7",[se,.4,-4.8],[1.5,.1,.8]),_(xe,S,[se,.47,-4.65],[1.42,.045,.48]),_(xe,"#d8d2c3",[se,.5,-5.08],[.64,.1,.24])}for(let N of[-3.8,0,3.8]){_(xe,"#394447",[N,2.54,-6.28],[.36,.15,.1]);let H=E(xe,"#ffe4a8",[N,2.34,-6.2],[.15,.2,.11]);H.material=St}he.userData.cellarDetails={cells:5,hinges:10,padlocks:5,lamps:3,bedding:5},T(xe);let ie=Ld(D,[re,q]),Ee=Ld(F,[V]);function qe(N,H,se){let S=N.hairStyles[H],k=new Set;return S.name=`${se}-hair-${H}`,S.visible=!0,S.traverse(K=>{K.isMesh&&k.add(K)}),N.hairStyles.forEach((K,$)=>{$!==H&&K.removeFromParent()}),N.hairStyles=[S],N.hairParts=N.hairParts.filter(K=>k.has(K)),N.spear.removeFromParent(),N.raft.removeFromParent(),Object.values(N.props).forEach(K=>K.removeFromParent()),N.spear=N.raft=null,N.props={},N.root.userData.renderProfile={hairVariants:1,unusedToolMeshes:0},b(N,se),N}let _t=qe(t({shirt:"#577c87",skin:"#ddb08c",hair:"#40362f"},"player",C),0,"campaign-player");_t.root.name="campaign-player",l.add(_t.root);let ot=new Map,cn=new Map,Zt=new Uint8Array(Un.length),ei=Un.map(()=>({x:0,z:0})),Rn={swing:0,step:0,bounce:0},Xi={gate:{shirt:"#526252",skin:"#c29574",hair:"#302e28",style:0},patrol:{shirt:"#59665a",skin:"#a96f55",hair:"#211f1e",style:1},hall:{shirt:"#4b5958",skin:"#d1a17d",hair:"#5b4032",style:2},boss:{shirt:"#34383a",skin:"#b67d60",hair:"#251f1c",style:1}};for(let N of e().guards){let H=Xi[N.id],se=qe(t(H,"guard",C),H.style,"campaign-guard-"+N.id);if(se.root.name="campaign-guard-"+N.id,se.root.userData.guardProfile={boss:N.id==="boss",style:H.style},N.id==="boss"){let S=new Oe;S.name="campaign-boss-insignia",se.hips.add(S);for(let K of[-1,1])_(S,"#d2aa58",[K*.2,.56,.02],[.12,.035,.18]);let k=_(S,"#8f2f2d",[0,.34,.15],[.055,.52,.025]);k.rotation.z=-.48,se.root.userData.guardProfile.insignia=!0}l.add(se.root),Ne(se.arms[1].forearm).position.set(0,-.24,.14),ot.set(N.id,se)}let ci=[{shirt:"#8da4b1",skin:"#c99370",hair:"#302d2a",style:0,scale:1.02},{shirt:"#b78876",skin:"#e1b894",hair:"#6a4938",style:1,scale:.96},{shirt:"#9caa8c",skin:"#b98264",hair:"#2f2927",style:2,scale:1},{shirt:"#c3b487",skin:"#dca984",hair:"#704936",style:1,scale:.72},{shirt:"#92b2b6",skin:"#e4bb96",hair:"#3f302b",style:2,scale:.76}];for(let N of Un){let H=ci[N.id],se=qe(t(H,"resident",C),H.style,"campaign-prisoner-"+N.id);se.root.name="campaign-prisoner-"+N.id,se.root.scale.setScalar(H.scale),se.root.userData.residentProfile={child:N.child,style:H.style,scale:H.scale},l.add(se.root),cn.set(N.id,se)}let Fn=new Oe;u.add(Fn),Ne(Fn).position.set(.26,-.23,-.48);let qi=E(Fn,"#ddb08c",[.24,-.32,-.4],[.065,.085,.08]),Sr=y(Fn,"#577c87",[.22,-.4,-.3],[.085,.24,.085]);Sr.rotation.x=-.5;let nn=new dt(new bi(.42,.035,8,32),new Tn({color:"#f3d48a"}));nn.rotation.x=-Math.PI/2,l.add(nn);let Ti=new tt(new Float32Array(6),3),Ai=new sr(new Ft().setAttribute("position",Ti),new zi({color:"#ffe8ad"}));Ai.frustumCulled=!1,l.add(Ai);let Yi=new dr,zn=new O,ws={position:new O,target:new O},Zi=[],Ei={position:new O},Ci={},w=0,W=0,J={x:0,z:0,surface:0,yaw:0,pitch:0,mode:"first",distance:4.6},j=N=>N.distance>.2,X={height:25},ce={},ye={},ve={},Ce=[],Ge=new Map,Ze=new Map;Ge.misses=0;let Fe=0,ct=0,wt=0,Ut=0,gt=0,bt=.05,Le="first",kt=0,ht=!0,Yt=!1,Xt=null,Jt=0,$t=0,Rt=!1,xn={},Vt={},Kt={},Wt={},ti={},On={},zl={},ya=-1/0,Ts=0,As=e(),wr=Ll(As).target;wr&&(gt=Math.atan2(As.p.x-wr.x,As.p.z-wr.z));function Es(N,H,se,S,k,K,$=!1,me="standing"){Jt++;let Pe=N.root.userData.campaignPoseState||(N.root.userData.campaignPoseState={});if(!N_(Pe,H,se,S,k,$,me))return!1;$t++,N.root.position.set(H.x/at,se,H.z/at),N.root.rotation.set(0,0,0),N.rig.rotation.y=S;let ue=U_(Rn,K,k);for(let He of N.legs){let Ke=(He.side<0?-ue.swing:ue.swing)*ue.step;He.thigh.rotation.x=Ke,He.calf.rotation.x=Math.max(0,-Ke),He.shoe.rotation.x=-He.calf.rotation.x*.6}for(let He of N.arms)He.arm.rotation.x=k?(He.side<0?ue.swing:-ue.swing)*.25:0,He.arm.rotation.z=0,He.forearm.rotation.x=-.18;return N.hips.position.y=.87+ue.bounce*.009,!0}function Ol(N){if(!ht||Yt)return;let H=e();if(H.paused&&Rt)return;Rt=!!H.paused;let se=N/1e3;kt=N,Jt=0,f.update();let S=H.interior;M_(ti,S,D,F,de,l,h,d),S_(Vt,S,H.p,gn,R);let k=S?0:xa(Ge,_t.root,H.p.x,H.p.z,li),K=Le==="third";if(_t.root.visible=K,!H.boat){let ke=v_(l,_t.root);K&&Es(_t,H.p,k,H.heading,H.walking,se,ke)}_t.rig.visible=K,Ad(re,Me,(H.boat?H.p.x:yt[H.boatAt].x)/at,(H.boat?H.p.z:yt[H.boatAt].z)/at,H.boat?H.heading:Math.atan2(yt[H.boatAt].ux,yt[H.boatAt].uz),H.boat,se,H.walking),H.boat&&K&&Cd(_t,re),Ue.visible=!H.paper,ae.visible=H.paper&&!H.gun,w_(On,H.released,Zt,fe);let $=!1,me=!1;wt=0;for(let ke of H.guards){ke.id==="boss"&&(me=ke.hp<=0);let Mt=ot.get(ke.id),jt=ke.area===S&&!H.boat&&(!ke.area||H.island==="fortress");if(Mt.root.visible=jt,!jt)continue;let rn=Ze.get(ke.id);rn||(rn={},Ze.set(ke.id,rn));let Bn=z_(rn,ke,ke.hp>0),Bl=O_(rn,Math.atan2(H.p.x-ke.x,H.p.z-ke.z),ke.hp>0);Bn&&wt++,$||($=Bn);let Rs=ke.area?0:xa(Ge,Mt,ke.x,ke.z,li),bn=Es(Mt,ke,Rs,Bl,Bn,se,!1,ke.hp<=0?"fallen":"armed");F_(Mt,Rs,!!ke.area,ke.hp>0,bn)}V.visible=!H.key&&me,V.visible&&(V.rotation.y=se),H.released.length&&!H.boarded&&!H.boat&&(S==="estate"||S==="cellar"||H.island==="fortress")&&D_(ei,Un,H.p,H.heading);for(let ke of Un){let Mt=cn.get(ke.id),jt=!!Zt[ke.id],rn=H.boarded?!1:jt?!H.boat&&(S==="estate"||S==="cellar"||H.island==="fortress"):S==="cellar";if(Mt.root.visible=rn,!rn)continue;let Bn=jt?ei[ke.id]:ke;Es(Mt,Bn,S?0:xa(Ge,Mt,Bn.x,Bn.z,li),H.heading,jt&&H.walking,se+ke.id*.18)}A_(ye,H,ce,!me)&&Fe++;let ue=ce.target;E_(Kt,S,H.p,ue,gt,bt,Le==="first"?.05:.22,Wt)&&(gt=Wt.yaw,bt=Wt.pitch),T_(ve,H,Ce)&&ct++;let He=ve.nearby,Ke=He||ue;nn.visible=!!Ke,Ke&&nn.position.set(Ke.x/at,(S?0:xa(Ge,nn,Ke.x,Ke.z,li))+.08,Ke.z/at),Ke&&nn.scale.setScalar(1+Math.sin(se*3)*.1),Fn.visible=H.gun&&!H.boat&&Le==="first",Fn.position.z=H.shot?.025:0;let rt=H.boat?.02+bs.eye-1.64:k,Nt=H.boat?bs.seatZ:0;J.x=H.p.x/at+Math.sin(H.heading)*Nt,J.z=H.p.z/at+Math.cos(H.heading)*Nt,J.surface=rt,J.yaw=gt,J.pitch=bt,J.mode=Le,J.distance=H.boat?7.5:4.6;let je=Sl(J,ws);if(S&&Le==="third"&&(je.position.x=da.clamp(je.position.x,-5.1,5.1),je.position.z=da.clamp(je.position.z,-5,8.1)),!S&&Le==="third"){let ke=Ei,Mt=je.position,jt=je.target;if(ke.ready&&ke.x===Mt.x&&ke.y===Mt.y&&ke.z===Mt.z&&ke.tx===jt.x&&ke.ty===jt.y&&ke.tz===jt.z)je.position.copy(ke.position);else{ke.ready=!0,ke.x=Mt.x,ke.y=Mt.y,ke.z=Mt.z,ke.tx=jt.x,ke.ty=jt.y,ke.tz=jt.z,zn.subVectors(Mt,jt);let rn=zn.length();zn.normalize(),Yi.set(jt,zn),Yi.far=rn,w++;let Bn=wl(Yi,Xe,!0,Zi).find(j);Bn&&Mt.copy(jt).addScaledVector(zn,Math.max(.35,Bn.distance-.22)),Mt.y=Math.max(Mt.y,xa(Ge,u,Mt.x*at,Mt.z*at,li)+.24),ke.position.copy(Mt)}}C_(Ci,u,je.position,je.target)&&W++,b_(S,se,u,q,G,B)&&Ut++;let Je=I_(H,$,Le==="third"),ft=R_(xn,H,Je)||Je&&N-ya>=c;s.shadowMap.needsUpdate=ft,ft&&(Tl(d,H.p.x/at,H.p.z/at,X),ya=N,Ts++),Ai.visible=!!H.shot,H.shot&&L_(Ti,H.shot.from,H.shot.to,k+1.35),s.render(l,u);let dn=s.getPixelRatio(),At=B_(zl,N,dn,o,!H.paused);At!==dn&&(s.setPixelRatio(At),Cs())}function Cs(){Rt=!1,u.aspect=innerWidth/innerHeight,u.updateProjectionMatrix(),s.setSize(innerWidth,innerHeight,!1)}function va(N,H=0){e().paused||(gt+=N,bt=da.clamp(bt+H,Le==="first"?-.95:-.05,.75))}n.addEventListener("pointerdown",N=>{e().paused||N.button!==0||(Xt={id:N.pointerId,x:N.clientX,y:N.clientY},n.setPointerCapture(N.pointerId))}),n.addEventListener("pointermove",N=>{Xt?.id===N.pointerId&&(va(-(N.clientX-Xt.x)*.006,(N.clientY-Xt.y)*.005),Xt.x=N.clientX,Xt.y=N.clientY)});for(let N of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(N,()=>Xt=null);return n.addEventListener("webglcontextlost",N=>{N.preventDefault(),Yt=!0,ht=!1,i?.()}),{frame:Ol,resize:Cs,orbit:va,setCamera(N){Le=N==="first"?"first":"third",bt=Le==="first"?.05:.22,Rt=!1},get cameraMode(){return Le},get enabled(){return ht&&!Yt},vector:(N,H)=>({x:N*Math.cos(gt)+H*Math.sin(gt),z:-N*Math.sin(gt)+H*Math.cos(gt)}),aim:()=>gt+Math.PI,setEnabled(N){ht=!!N&&!Yt,ht&&(Rt=!1)},stats:()=>({calls:s.info.render.calls,triangles:s.info.render.triangles,pixelRatio:s.getPixelRatio(),eye:u.position.toArray(),camera:Le,cameraBlockers:Xe.length,cameraRaycasts:w,cameraUpdates:W,goalSelections:Fe,nearbySelections:ct,movingGuards:wt,palmBatches:B.treeBatches.length,largestPalmBatch:Math.max(...B.treeBatches.map(N=>N.count)),posedCharacters:Jt,poseUpdates:$t,exteriorUpdates:Ut,frozenStaticTransforms:ie+Ee,palmLodDistanceChecks:B.treeBatches.length+B.foliageBatches.length,palmTrunkTriangles:B.treeBatches.reduce((N,H)=>N+H.count*H.geometry.index.count/3,0),unshadowedPalmTrunkTriangles:B.treeBatches.filter(N=>!N.receiveShadow).reduce((N,H)=>N+H.count*H.geometry.index.count/3,0),palmCrownTriangles:B.foliageBatches.reduce((N,H)=>N+H.count*H.geometry.index.count/3,0),lowDetailPalmBatches:B.treeBatches.filter(N=>N.userData.lod.level==="low").length,terrainTriangles:R.reduce((N,H)=>N+H.geometry.index.count/3,0),shadowReceivingTerrains:Vt.active,shadowUpdates:Ts,terrainHeightSamples:Ge.misses}),dispose(){s.dispose(),f.dispose();let N=new Set([...x.values(),...B.lodGeometries]),H=new Set(g.values());l.traverse(se=>{if(se.geometry&&N.add(se.geometry),se.material)for(let S of Array.isArray(se.material)?se.material:[se.material])H.add(S)}),N.forEach(se=>se.dispose()),H.forEach(se=>se.dispose()),pe.dispose()}}}function Ul(n,e){return Math.hypot(n.x-e.x,n.z-e.z)}function V_(n){return Ud({...n,makeHuman:_u})}var Te=80,zd=[[1750,1300,1540,970],[3380,500,520,310],[4100,2400,390,290]],Wi=(n,e,t)=>Math.max(e,Math.min(t,n)),G_=n=>(n=Wi(n,0,1),n*n*(3-2*n)),H_=(n,e)=>Math.atan2(Math.sin(e-n),Math.cos(e-n)),W_=Object.freeze({}),Nd=Math.cos(1),Fd=Math.sin(1);function Nn(n,e){let t=n*Te,i=e*Te,r=-1;for(let[a,o,c,l]of zd)r=Math.max(r,1-Math.hypot((t-a)/c,(i-o)/l));return r<=0?-.32:.015+G_(r/.17)*(.25+.28*(1+Math.sin(n*.23+1.3)*Math.cos(e*.27))+.12*Math.sin(n*.7)*Math.sin(e*.6))}function Od(n,e,t){return{x:n*Math.cos(t)+e*Math.sin(t),y:-n*Math.sin(t)+e*Math.cos(t)}}function Bd(n,e,t=75){let i,r=t*t;for(let s of n||[]){let a=s.x-e.x,o=s.y-e.y,c=a*a+o*o;c<r&&(i=s,r=c)}return i}function kd(n,e,t,i=0,r=75){let s=t?.x??null,a=t?.y??null;return n.ready&&n.objects===e&&n.revision===i&&n.x===s&&n.y===a&&n.radius===r?!1:(n.ready=!0,n.objects=e,n.revision=i,n.x=s,n.y=a,n.radius=r,n.nearest=Bd(e,t,r),n.scans=(n.scans||0)+1,!0)}function Vd(n,e,t,i){let r=e&&e.remaining-(i-t);return r>0?(n.kind=e.kind,n.phase=1-r/(fd[e.kind]||1e3),n):null}function Ss(n,e,t=!1){return t&&(n.rendered=!1),e?n.rendered?!1:(n.rendered=!0,!0):(n.rendered=!1,!0)}function mu(n){n.updateWorldMatrix(!0,!0);let e=0;return n.traverse(t=>{t.updateMatrix(),t.matrixAutoUpdate=!1,t.matrixWorldAutoUpdate=!1,e++}),e}function Gd(n="first"){return n!=="first"}function Nl(n,e,t=24){let i=n.x-e.x,r=n.y-e.y,s=t*Te;return i*i+r*r<=s*s}function Hd(n,e=!0){if(n.userData.poseLodActive===e)return!1;n.userData.poseLodActive=e;let t=i=>{e||i.updateMatrix(),i.matrixAutoUpdate=e;for(let r of i.children)t(r)};return t(n),!0}function Wd(n,e,t=!0){return n.userData.poseHeading===e?!1:(n.userData.poseHeading=e,n.rotation.y=e,t||n.updateMatrix(),!0)}function Xd(n,e,t){let i=H_(n,e),r=Math.min(1,t*12);return Math.abs(i)*(1-r)<1e-4?e:n+i*r}function qd(n="first",e=!1,t=!1,i=!1){return n==="first"&&e&&t&&!i}function Yd(n,e,t){return n[e]===t?!1:(n[e]=t,t.updateWorldMatrix(!0,!0),!0)}function Zd(n,e,t,i=0){return n.ready&&n.revision===i&&n.x===e.x&&n.y===e.y&&n.z===e.z&&n.tx===t.x&&n.ty===t.y&&n.tz===t.z?!1:(n.ready=!0,n.revision=i,n.x=e.x,n.y=e.y,n.z=e.z,n.tx=t.x,n.ty=t.y,n.tz=t.z,!0)}function Jd(n,e){let t=e*1.3;return n.idleHip=Math.sin(e*1.7),n.idleArmSin=Math.sin(t),n.idleArmCos=Math.cos(t),n}function $d(n,e){return n!==e}function Kd(n,e){let t=Math.sin(e*6)*.15;return n[0]=t,n[1]=-t,n[2]=t,n[3]=-t,n}function jd(n,e,t,i,r,s=!1){return n.moved=e===null||t===null||Math.hypot(i-e,r-t)>1e-4,n.walking=e!==null&&t!==null&&n.moved,n.pose=n.moved||n.walking!==s,n}function Qd(n,e,t,i,r,s){return n.yawSin=Math.sin(t),n.yawCos=Math.cos(t),i||r?(n.phaseSin=Math.sin(e),n.phaseCos=Math.cos(e)):n.phaseSin=n.phaseCos=0,n.hips=(i?.9:.92)+(i?Math.cos(e*2)*.012:s.idleHip*.004),n}function ef(n,e,t,i=new O){let r=Math.min(240,t*.52),s=e.projectionMatrix.elements[0]*t/2,a=0;for(let o of n){o.userData.signScale||(o.userData.signScale=o.scale.clone()),o.scale.copy(o.userData.signScale),o.getWorldPosition(i);let c=Math.max(.1,i.distanceTo(e.position)),l=o.scale.x*s/c;l>r&&o.scale.multiplyScalar(r/l),a++}return a}function tf(n,e,t,i,r=0,s=new O){let a=t.projectionMatrix.elements[0],o=e.size;return n.ready&&n.x===t.position.x&&n.y===t.position.y&&n.z===t.position.z&&n.width===i&&n.projection===a&&n.revision===r&&n.count===o?!1:(n.ready=!0,n.x=t.position.x,n.y=t.position.y,n.z=t.position.z,n.width=i,n.projection=a,n.revision=r,n.count=o,ef(e,t,i,s),!0)}function nf(n,e,t={}){let s=Wi(Math.hypot(n,e),.08,.855);return t.hip=-Math.atan2(e,-n)-Math.acos(Wi((.43*.43+s*s-.43*.43)/(2*.43*s),-1,1)),t.knee=Math.PI-Math.acos(Wi((.43*.43+.43*.43-s*s)/(2*.43*.43),-1,1)),t}function rf(n,e={}){let t=e.shirt||"#4c9cba",i=e.skin||"#dda879",r=e.hair||"#43332b",s=e.style||0;return n.lookShirt===t&&n.lookSkin===i&&n.lookHair===r&&n.lookStyle===s?!1:(n.lookShirt=t,n.lookSkin=i,n.lookHair=r,n.lookStyle=s,!0)}function gu(n){return n?Math.max(...[-1,0,1].flatMap(e=>[-1,0,1].map(t=>{let i=n.point(e*n.width/2,t*n.depth/2);return Nn(i.x/Te,i.y/Te)}))):0}function sf(n,e,t){let i=e?.x??null,r=e?.y??null,s=t||0;return n.ready&&n.x===i&&n.y===r&&n.level===s?!1:(n.ready=!0,n.x=i,n.y=r,n.level=s,n.layout=dd(e,t),n.elevation=gu(n.layout),!0)}function af(n,e,t,i,r){let s=e?.x??null,a=e?.y??null;return n.ready&&n.pointX===s&&n.pointY===a&&n.sea===t&&n.layout===i&&n.elevation===r?!1:(n.ready=!0,n.pointX=s,n.pointY=a,n.sea=t,n.layout=i,n.elevation=r,n.x=s/Te,n.z=a/Te,n.wet=t(s,a),n.surface=n.wet?0:xu(n.x,n.z,i,r),!0)}function of(n,e,t,i,r){return e.ready&&e.x===t&&e.y===i&&e.z===r?!1:(e.ready=!0,e.x=t,e.y=i,e.z=r,n.position.set(t,i,r),n.updateMatrix(),n.matrixAutoUpdate=!1,!0)}function lf(n,e={}){let t=e.activities||{},i=t.completed||0,r=e.basePos?.x??null,s=e.basePos?.y??null,a=e.baseLevel??null,o=e.campfire??null,c=e.fire?.x??null,l=e.fire?.y??null,u=i>=1,h=i>=3,d=i>=6,f=h&&t.gardenClaimed<i,g=t.raceWon??null;return n.ready&&n.level===a&&n.baseX===r&&n.baseY===s&&n.campfire===o&&n.fireX===c&&n.fireY===l&&n.first===u&&n.garden===h&&n.flag===d&&n.harvest===f&&n.raceWon===g?!1:(n.ready=!0,n.level=a,n.baseX=r,n.baseY=s,n.campfire=o,n.fireX=c,n.fireY=l,n.first=u,n.garden=h,n.flag=d,n.harvest=f,n.raceWon=g,!0)}function cf(n,e=[]){let t=n.values||(n.values=[]),i=!n.ready||n.count!==e.length,r=0;for(let s of e){let a=s.type??null,o=s.x??null,c=s.y??null,l=!!s.done,u=s.symbol??null,h=s.label??null;t[r]!==a&&(i=!0),t[r++]=a,t[r]!==o&&(i=!0),t[r++]=o,t[r]!==c&&(i=!0),t[r++]=c,t[r]!==l&&(i=!0),t[r++]=l,t[r]!==u&&(i=!0),t[r++]=u,t[r]!==h&&(i=!0),t[r++]=h}return t.length=r,n.ready=!0,n.count=e.length,i}function _a(n,e,t=0,i=0){let r=e?.x??null,s=e?.y??null;return n.ready&&n.pointX===r&&n.pointY===s&&n.offsetX===t&&n.offsetZ===i?!1:(n.ready=!0,n.pointX=r,n.pointY=s,n.offsetX=t,n.offsetZ=i,n.valid=r!==null&&s!==null,n.valid&&(n.x=r/Te+t,n.z=s/Te+i,n.y=Nn(n.x,n.z)),!0)}function xu(n,e,t,i=gu(t)){let r=Nn(n,e);if(!t)return r;let s=t.floor;if(Math.abs(n*Te-s.x)<=s.w/2&&Math.abs(e*Te-s.y)<=s.h/2)return Math.max(r,i+.16);let a=n*Te-t.center.x,o=e*Te-t.center.y,c=a*t.fy-o*t.fx,l=a*t.fx+o*t.fy;return Math.abs(c)<t.door/2&&l>t.depth/2&&l<t.depth/2+64?r+(Math.max(r,i+.16)-r)*(1-(l-t.depth/2)/64):r}function uf(n,e,t={}){let i=(d,f,g,x,m)=>{let p=new dt(m,new Bt({color:f}));return p.position.set(...g),p.scale.set(...x),d.add(p),p},r=t.cube||((d,f,g,x)=>i(d,f,g,x,new pn(1,1,1))),s=t.tube||((d,f,g,x)=>i(d,f,g,x,new Ht(1,1,1,10))),a=new Oe,o=n.width/Te,c=n.depth/Te,l=n.wallHeight/Te,u=n.roofRidge/Te,h=n.door/Te;a.name="base",a.position.set(n.center.x/Te,e,n.center.y/Te),a.rotation.y=n.yaw,r(a,"#a68854",[0,.08,0],[o,.16,c]).name="floor";for(let d of[-o/2+.1,o/2-.1])for(let f of[-c/2+.1,c/2-.1])s(a,"#876742",[d,l/2,f],[.075,l,.075]).name="post";for(let d of[-1,1]){let f=r(a,"#ba7655",[d*o/4,(l+u)/2,0],[Math.hypot(o/2+.2,u-l),.1,c+.36]);f.rotation.z=-d*Math.atan2(u-l,o/2+.2),f.name="roof"}for(let d of n.walls){let f=d.x-n.center.x,g=d.y-n.center.y,x=(f*n.fy-g*n.fx)/Te,m=(f*n.fx+g*n.fy)/Te;r(a,"#e2dbc7",[x,l/2,m],[n.fy?d.w/Te:d.h/Te,l,n.fy?d.h/Te:d.w/Te]).name="wall"}if(n.walls.length>=5){let d=n.doorHeight/Te;r(a,"#845f3f",[0,(l+d)/2,c/2],[h,l-d,.125]).name="lintel"}for(let d of n.beds){let f=d.x-n.center.x,g=d.y-n.center.y,x=(f*n.fy-g*n.fx)/Te,m=(f*n.fx+g*n.fy)/Te;r(a,"#7d654b",[x,.17,m],[.65,.34,1.125]).name="bed",r(a,"#cec6a0",[x,.38,m],[.65,.14,1.125]),r(a,"#ede3bd",[x,.49,m-.35],[.5,.09,.26])}return a}function hf(n,e,{cube:t,tube:i,ell:r}){if(n==="gather"&&(i(e,"#8c6944",[0,-.12,.15],[.025,.48,.025]),t(e,"#8e9891",[0,.1,.15],[.27,.1,.075])),n==="fish"){let s=i(e,"#b2915b",[0,.22,.25],[.014,1.25,.014]);s.rotation.x=-.6;let a=i(e,"#d0e6df",[0,.37,.75],[.003,.62,.003]);a.rotation.x=.6}if(n==="cook"){let s=i(e,"#80613d",[0,-.12,.18],[.016,.5,.016]);s.rotation.x=-.6,r(e,"#bb9457",[0,-.26,.3],[.07,.04,.14])}}function _u(n={},e="player",t={}){let i=new Map,r=new Map,s=t.mat||(R=>(i.has(R)||i.set(R,new Bt({color:R})),i.get(R))),a=t.geo||((R,L)=>(r.has(R)||r.set(R,L()),r.get(R))),o=t.mesh||((R,L,G,q=[0,0,0],B=[1,1,1])=>{let ne=new dt(L,G);return ne.position.set(...q),ne.scale.set(...B),R.add(ne),ne}),c=t.ell||((R,L,G,q)=>o(R,a("ball",()=>new En(1,14,10)),s(L),G,q)),l=t.cube||((R,L,G,q)=>o(R,a("box",()=>new pn(1,1,1)),s(L),G,q)),u=t.tube||((R,L,G,q)=>o(R,a("cyl",()=>new Ht(1,1,1,10)),s(L),G,q)),h=new Oe,d=new Oe;h.add(d);let f=n.skin||"#dda879",g=n.hair||"#43332b",x=n.shirt||"#4c9cba",m=new Oe;m.position.y=.87,d.add(m),c(m,"#3f4d4f",[0,.05,0],[.22,.17,.13]);let p=a("human-torso",()=>new ta([new We(.16,.13),new We(.205,.2),new We(.215,.38),new We(.25,.49),new We(.26,.52),new We(.19,.57),new We(.09,.64)],18));o(m,p,s(x),[0,0,0],[1,1,.66]);for(let R of[-1,1]){let L=l(m,x,[R*.065,.6,.071],[.085,.075,.024]);L.rotation.z=-R*.3,l(m,x,[R*.11,.37,.142],[.105,.09,.022])}for(let R=0;R<4;R++)c(m,"#d7d5c2",[0,.24+R*.075,.15],[.009,.01,.005]);e==="guard"&&l(m,"#39483f",[0,.35,.11],[.34,.36,.09]),l(m,"#3b4c48",[0,.135,-.01],[.4,.045,.255]),u(m,f,[0,.64,0],[.064,.13,.064]);let M=new Oe;M.position.y=.79,m.add(M),c(M,f,[0,0,0],[.135,.175,.133]),c(M,f,[-.137,-.005,0],[.025,.048,.025]),c(M,f,[.137,-.005,0],[.025,.048,.025]),c(M,f,[0,-.015,.136],[.026,.033,.036]);for(let R of[-1,1])c(M,"#f6f3df",[R*.052,.02,.115],[.03,.017,.014]),c(M,"#31433e",[R*.053,.02,.128],[.012,.013,.007]),l(M,g,[R*.052,.061,.11],[.062,.01,.014]);l(M,"#af735b",[0,-.071,.117],[.051,.009,.012]);let _=a("hair",()=>new En(1,16,10,0,Math.PI*2,0,Math.PI*.56));o(M,_,s(e==="nela"?"#8d4931":g),[0,.015,-.015],[.145,.18,.143]);let y=[new Oe,new Oe,new Oe];y.forEach(R=>M.add(R));let E=M.children.find(R=>R.isMesh&&R.geometry===_);M.remove(E),y[0].add(E),o(y[1],_,s(g),[0,.015,-.015],[.145,.18,.143]),c(y[1],g,[0,-.04,-.17],[.072,.14,.08]);for(let R=0;R<12;R++){let L=R*Math.PI*2/12;c(y[2],g,[Math.sin(L)*.1,.1+R%2*.018,Math.cos(L)*.1-.015],[.066,.067,.066])}if(c(y[2],g,[0,.15,-.015],[.09,.054,.09]),e==="nela"&&c(M,"#8d4931",[0,-.045,-.145],[.125,.21,.07]),y.forEach((R,L)=>R.visible=L===(n.style||0)),e==="leon")u(M,"#c5a775",[0,.15,0],[.16,.12,.16]),u(M,"#c5a775",[0,.095,0],[.22,.028,.22]),l(m,"#e4cda1",[0,.23,.145],[.33,.42,.025]);else if(e==="player"){c(m,"#5d735b",[0,.36,-.17],[.18,.22,.09]);for(let R of[-1,1])l(m,"#b6caa4",[R*.17,.38,-.04],[.034,.35,.029])}let C=[],D=[];for(let R of[-1,1]){let L=new Oe;L.position.set(R*.27,.54,0),m.add(L);let G=c(L,x,[-R*.018,-.025,0],[.105,.13,.11]);G.name="human-shoulder",o(L,a("human-upper-arm",()=>new Ht(.068,.086,.19,12)),s(x),[0,-.105,0]),o(L,a("human-lower-upper-arm",()=>new Ht(.055,.064,.15,12)),s(f),[0,-.24,0]);let q=new Oe;q.position.y=-.31,L.add(q);let B=c(q,f,[0,0,0],[.061,.063,.061]);B.name="human-elbow",o(q,a("human-forearm",()=>new Ht(.057,.04,.26,12)),s(f),[0,-.13,0]),c(q,f,[0,-.28,0],[.06,.082,.046]),C.push({arm:L,forearm:q,side:R});let ne=new Oe;ne.position.set(R*.115,0,0),m.add(ne),o(ne,a("human-thigh",()=>new Ht(.092,.108,.42,12)),s("#52625f"),[0,-.21,0]);let re=new Oe;re.position.y=-.43,ne.add(re);let Me=c(re,"#52625f",[0,0,.014],[.079,.074,.075]);Me.name="human-knee",o(re,a("human-calf",()=>new Ht(.069,.046,.36,12)),s("#52625f"),[0,-.18,0]);let ge=c(re,"#52625f",[0,-.36,0],[.052,.06,.052]);ge.name="human-ankle";let Ve=c(re,"#4b3b2e",[0,-.395,.055],[.075,.052,.14]);D.push({thigh:ne,calf:re,shoe:Ve,side:R})}let F=new Oe;u(F,"#8c6944",[0,.56,0],[.018,1.75,.018]),c(F,"#dad9c5",[0,1.45,0],[.045,.15,.03]),F.position.set(.35,.2,.08),d.add(F),F.visible=!1;let T={};for(let R of["gather","fish","cook"]){let L=new Oe;hf(R,L,{cube:l,tube:u,ell:c}),L.position.set(0,-.28,0),C[1].forearm.add(L),L.visible=!1,T[R]=L}let b=new Oe;h.add(b);for(let R=0;R<5;R++){let L=u(b,"#a17d48",[(R-2)*.25,.08,0],[.115,1.7,.115]);L.rotation.x=Math.PI/2}for(let R of[-.5,.5])l(b,"#6e5937",[0,.19,R],[1.24,.05,.1]);b.visible=!1;let A=[],z=[],U=[];return d.traverse(R=>{R.isMesh&&(R.material===s(x)&&A.push(R),R.material===s(f)&&z.push(R),R.material===s(g)&&U.push(R))}),{root:h,rig:d,hips:m,head:M,arms:C,legs:D,spear:F,raft:b,shirtParts:A,skinParts:z,hairParts:U,hairStyles:y,props:T,yaw:0,lastX:null,lastZ:null,phase:0,surfaceCache:{},rootTransformCache:{}}}function df(n,e){let t=e&&pd(e.kind,e.phase);n.rig.rotation.x=t?.bend||0;for(let[i,r]of Object.entries(n.props))r.visible=!!t&&e.kind===i;if(t)for(let i of n.arms)i.arm.rotation.x=i.side<0?t.left:t.right,i.forearm.rotation.x=-.25,i.arm.rotation.z=-i.side*.08+((i.side>0||e.kind==="cheer")&&t.wave||0)}function ff(n,e,t,i={}){let r=n.phase||0,s=e*.65+r,a=Math.sin(s),o=Math.cos(s),c=n.x+a*14,l=n.y+o*14;return t(c,l)?(i.x=c/Te,i.z=l/Te,i.y=.055+Math.sin(e*3+r)*.008,i.yaw=Math.atan2(o,-a),i.yawSin=o,i.yawCos=-a,i):null}function pf(n,e,t=20*Te){let i=n.x-e.x,r=n.y-e.y;return i*i+r*r<=t*t}function Fl(n,e,t,i,r,s,a,o,c=0){return n.position.set(e.x+e.yawSin*r+e.yawCos*t,e.y+i,e.z+e.yawCos*r-e.yawSin*t),n.rotation.set(c,e.yaw,0),n.scale.set(s,a,o),n.updateMatrix(),n}function mf(n,e){for(let t of n)t.count=e,e>0&&(t.instanceMatrix.needsUpdate=!0);return e>0?n.length:0}function gf(n=!1){return 1e3/(n?20:30)}function X_({canvas:n,terrain:e,getState:t,onLost:i}){let r=new ps(Ml(n)),s=innerWidth<=700,a=gf(s);r.setPixelRatio(Math.min(devicePixelRatio||1,s?1.25:1.6)),r.setSize(innerWidth,innerHeight,!1),r.outputColorSpace=Qt,r.toneMapping=as,r.toneMappingExposure=.94,r.shadowMap.enabled=!0,r.shadowMap.type=ss,r.shadowMap.autoUpdate=!1;let o=new rr;o.background=new $e("#c5dbe5"),o.fog=new ir("#c5dbe5",70,240);let c=new sn(72,innerWidth/innerHeight,.04,350);o.add(c);let l=new cr("#c9e3ff","#71694d",1.85);o.add(l);let u=new hr("#fff0d2",3.1);u.castShadow=!0,u.shadow.mapSize.set(s?1024:2048,s?1024:2048),u.shadow.camera.left=-16,u.shadow.camera.right=16,u.shadow.camera.top=16,u.shadow.camera.bottom=-16,u.shadow.camera.near=.5,u.shadow.camera.far=65,u.shadow.bias=-12e-5,u.shadow.normalBias=.012,o.add(u,u.target);let h=bl(r),d=new Map,f=new Map;function g(S,k={}){if(!Object.keys(k).length){let $=h.forColor(S);if($)return $}let K=S+JSON.stringify(k);return d.has(K)||d.set(K,new Bt({color:S,roughness:.86,...k})),d.get(K)}function x(S,k){return f.has(S)||f.set(S,k()),f.get(S)}function m(){return x("ball",()=>new En(1,14,10))}function p(){return x("box",()=>new pn(1,1,1))}function M(){return x("cyl",()=>new Ht(1,1,1,10))}function _(S,k,K,$=[0,0,0],me=[1,1,1],Pe=!0){let ue=new dt(k,K);return ue.position.set(...$),ue.scale.set(...me),ue.castShadow=Pe,ue.receiveShadow=!0,S.add(ue),ue}function y(S,k,K,$){return _(S,m(),g(k),K,$)}function E(S,k,K,$){return _(S,p(),g(k),K,$)}function C(S,k,K,$){return _(S,M(),g(k),K,$)}let D=new It,F=new Dn(4600/Te,2900/Te,230,145);F.rotateX(-Math.PI/2),F.translate(2300/Te,0,1450/Te);let T=F.attributes.position;for(let S=0;S<T.count;S++)T.setY(S,Nn(T.getX(S),T.getZ(S)));F.computeVertexNormals();let b=md(e),A=new Oi(b);A.anisotropy=Math.min(4,r.capabilities.getMaxAnisotropy());let z=h.ground(A),U=new dt(F,z);U.receiveShadow=!0,o.add(U);let R=yd({segments:s?24:48}),L=40;R.scale.set(1/L,1,1/L),R.position.x=6500/Te;for(let S of R.children)S.material.dispose(),S.material=Rl(h,L),S.geometry.setAttribute("color",new tt(new Float32Array(S.geometry.attributes.position.count*3).fill(1),3));let G=new Oe;G.scale.set(L,1,L),R.add(G);let q=(S,k)=>{let K=_d(S,k);return K?vr(K,S,k):-.32};Il(G,Qn,{scale:L,height:q,surfaces:h,small:s,clear:(S,k,K)=>Mr({x:k,z:K},S.id)||S.id==="home"&&(Math.abs(K-40)<55||Math.abs(k-23)<45)}),Pl(G,{scale:L,height:q,surfaces:h,helpers:{cube:E,tube:C,ell:y}}),o.add(R);let B=mu(U)+mu(R),ne=gd(o,Nn,Te,b,s),re=Al([...zd.map(([S,k,K,$])=>[S/Te,k/Te,K/Te,$/Te]),...Qn.map(S=>[R.position.x+S.x/L,S.z/L,S.radius*.955/L,S.radius*.955/L])]);o.add(re.mesh);let Me=Cl(320);o.add(Me);function ge(){let S=[],k=[],K=[],$=(Pe,ue,He,Ke)=>{let rt=ue*2.05,Nt=Math.sin(ue*Math.PI)*.46-ue*ue*.8;return[Math.sin(Pe)*rt+Math.cos(Pe)*Ke*He,Nt-Ke*.22,Math.cos(Pe)*rt-Math.sin(Pe)*Ke*He]};for(let Pe=0;Pe<11;Pe++){let ue=Pe*Math.PI*2/11;for(let He=1;He<17;He++)for(let Ke of[-1,1]){let rt=He/18,Nt=Math.sin(rt*Math.PI)*.42,je=S.length/3;S.push(...$(ue,rt-.023,Ke,.015),...$(ue,rt-.085,Ke,Nt),...$(ue,rt+.038,Ke,Nt*.88),...$(ue,rt+.025,Ke,.015)),K.push(rt,0,rt,.9,rt+.03,1,rt+.03,0),k.push(je,je+1,je+2,je,je+2,je+3)}}let me=new Ft;return me.setAttribute("position",new tt(S,3)),me.setAttribute("uv",new tt(K,2)),me.setIndex(k),me.computeVertexNormals(),me}let Ve=new Ht(.085,.16,4.35,14,12);Ve.translate(0,2.175,0);for(let S=0;S<Ve.attributes.position.count;S++){let k=Ve.attributes.position;k.setX(S,k.getX(S)+.16*(k.getY(S)/4.35)**2)}Ve.computeVertexNormals();let mt=g("#9d7750",{bumpMap:h.textures.get("rock"),bumpScale:.025});mt.onBeforeCompile=S=>{S.vertexShader=S.vertexShader.replace("#include <common>",`#include <common>
varying float vTrunkY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vTrunkY=position.y;`),S.fragmentShader=S.fragmentShader.replace("#include <common>",`#include <common>
varying float vTrunkY;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=.80+.20*smoothstep(.1,.25,fract(vTrunkY*7.));`)};let nt=ge(),Z=h.surface("leaf","#ffffff",1,.018).clone();Z.side=qt;let Q={value:0};Z.onBeforeCompile=S=>{S.uniforms.uWind=Q,S.vertexShader=S.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.y+=sin(uWind+position.x*2.0+position.z)*length(position.xz)*.018;`)};let oe={tree:new Pt(Ve,mt,400),leaves:new Pt(nt,Z,400),rock:new Pt(new ar(1,2),g("#92968b"),400),food:new Pt(m(),g("#7a5638"),400),shell:new Pt(new En(1,12,6,0,Math.PI),g("#f1d0b7"),400)};for(let S of Object.values(oe))S.count=0,S.castShadow=!0,S.receiveShadow=!0,S.frustumCulled=!1,o.add(S);let Ie=-1,Re=0;function it(S,k){if($d(Ie,k)){let K={tree:0,leaves:0,rock:0,food:0,shell:0};for(let $ of S){let me=$.x/Te,Pe=$.y/Te,ue=Nn(me,Pe),He=$.phase||0;if($.t==="tree"){let Ke=Math.sin(He),rt=Math.cos(He),Nt=.84+.17*Math.sin($.x*.033+$.y*.027),je=1.35+.28*rt;D.position.set(me,ue,Pe),D.rotation.set(.03*Ke,He,.04*rt),D.scale.set(Nt,je,Nt),D.updateMatrix(),oe.tree.setMatrixAt(K.tree++,D.matrix),D.position.set(me+.16*Nt*rt,ue+4.3*je,Pe-.16*Nt*Ke),D.rotation.set(0,He,0),D.scale.set(Nt,Nt,Nt),D.updateMatrix(),oe.leaves.setMatrixAt(K.leaves++,D.matrix)}else oe[$.t]&&(D.position.set(me,ue+($.t==="rock"?.23:$.t==="food"?.13:.025),Pe),D.rotation.set(0,He,0),D.scale.set(...$.t==="rock"?[.34+.18*Math.abs(Math.sin(He)),.3,.4]:$.t==="food"?[.15,.13,.15]:[.12,.04,.14]),D.updateMatrix(),oe[$.t].setMatrixAt(K[$.t]++,D.matrix))}for(let $ of["tree","leaves","rock","food","shell"])oe[$].count=K[$],oe[$].instanceMatrix.needsUpdate=!0;Ie=k,Re++}}let lt=new Set,P=new O,St={},Ye=0;function Xe(S,k="#ffe9b5"){let K=document.createElement("canvas");K.width=512,K.height=96;let $=K.getContext("2d");$.fillStyle="#123e43",$.beginPath(),$.roundRect(6,10,500,76,25),$.fill(),$.fillStyle=k,$.font="700 29px system-ui",$.textAlign="center",$.textBaseline="middle",$.fillText(String(S).slice(0,45),256,48,480);let me=new Oi(K);me.colorSpace=Qt;let Pe=new js(new es({map:me,depthTest:!0,transparent:!0}));return Pe.scale.set(2.45,.46,1),Pe.position.y=2.32,lt.add(Pe),Ye++,Pe}let Be=["#4c9cba","#df8168","#9974c7","#76b677"];function Tt(S={},k="player",K=""){let $=_u(S,k,{ell:y,cube:E,tube:C,mesh:_,mat:g,geo:x});return o.add($.root),$.name=K,$.tag=null,K&&($.tag=Xe(K,S.shirt),$.root.add($.tag)),$}let Ae=Tt(vl()),Qe=new Map,Dt=Tt({skin:"#d1a074",shirt:"#b49966"},"leon","LEON \xB7 HANDEL"),vt=Tt({skin:"#edc39a",shirt:"#609991"},"nela","NELA \xB7 ZADANIA");function I(S,k,K){!k||k===S.name||(S.tag&&(lt.delete(S.tag),S.root.remove(S.tag),S.tag.material.map.dispose(),S.tag.material.dispose()),S.name=k,S.tag=Xe(k,K),S.root.add(S.tag))}function v(S,k){if(rf(S,k)){for(let K of S.shirtParts)K.material=g(S.lookShirt);for(let K of S.skinParts)K.material=g(S.lookSkin);for(let K of S.hairParts)K.material=g(S.lookHair);S.hairStyles.forEach((K,$)=>K.visible=$===S.lookStyle)}}let Y=null,te=0,le={},ee={idleHip:0,idleArmSin:0,idleArmCos:0},De={yawSin:0,yawCos:1,phaseSin:0,phaseCos:1},pe={hip:0,knee:0},Ue={x:0,z:0,y:0,yaw:0,yawSin:0,yawCos:1};function Ne(S,k,K,$,me,Pe,ue,He,Ke=!1,rt=null,Nt=!1,je=!1,Je=!0,ft=Je){let dn=S.surfaceCache||(S.surfaceCache={});af(dn,k,He,Y,te);let{x:At,z:ke,wet:Mt,surface:jt}=dn;of(S.root,S.rootTransformCache||(S.rootTransformCache={}),At,jt+(Mt?Ke?.18:-.95:0),ke)&&S.tag&&Ye++,S.yaw=Xd(S.yaw,K,Pe),Hd(S.rig,Je),Wd(S.rig,S.yaw,Je);let rn=$&&ue>.05;if(S.phase+=rn?Pe*(ue>4?10:7):0,Je){let Bn=rn?ue>4?.31:.22:0,Bl=S.phase,Rs=Mt&&!Ke,bn=Qd(De,Bl,S.yaw,rn,Rs,ee);S.hips.position.y=bn.hips;for(let fn of S.legs){let xf=fn.side<0?-bn.phaseSin:bn.phaseSin,_f=fn.side<0?-bn.phaseCos:bn.phaseCos,kl=xf*Bn,yf=rn?Math.max(0,_f)*.105:0,vf=At+bn.yawCos*fn.side*.115+bn.yawSin*kl,Mf=ke-bn.yawSin*fn.side*.115+bn.yawCos*kl,bf=Mt?0:xu(vf,Mf,Y,te)-jt,Ma=nf(-S.hips.position.y+.07+bf+yf,kl,pe);fn.thigh.rotation.x=Ma.hip,fn.calf.rotation.x=Ma.knee,fn.shoe.rotation.x=-Ma.hip-Ma.knee}for(let fn of S.arms)fn.arm.rotation.x=rn?(fn.side<0?bn.phaseSin:-bn.phaseSin)*.45:(ee.idleArmSin*Nd+ee.idleArmCos*fn.side*Fd)*.025,fn.arm.rotation.z=-fn.side*.07,fn.forearm.rotation.x=rn?-.22:-.08,Rs&&(fn.arm.rotation.x=-Math.PI/2+(bn.phaseSin*Nd+bn.phaseCos*fn.side*Fd)*.35,fn.forearm.rotation.x=-.28);df(S,rt),je&&(S.arms[0].arm.rotation.x=-1,S.arms[0].forearm.rotation.x=-1)}S.spear.visible=!!Nt&&!Mt&&!rt,S.rig.visible=ft,S.raft.visible=!!(Mt&&Ke),S.raft.rotation.y=S.yaw,S.tag&&(S.tag.visible=Math.hypot(At-Ae.root.position.x,ke-Ae.root.position.z)<13),S.lastX=At,S.lastZ=ke}let ae=new Oe;o.add(ae);for(let S of[-.55,.55])for(let k of[-.27,.27])C(ae,"#866642",[S,1.24,k],[.038,2.48,.038]);E(ae,"#a7c4b7",[0,.34,0],[1.24,.68,.67]),E(ae,"#a98961",[0,.69,0],[1.24,.09,.67]);for(let S of[-1,1]){let k=E(ae,"#ba7655",[S*.39,2.63,0],[.9,.07,1.14]);k.rotation.z=-S*.34}let be=C(ae,"#ba7655",[0,2.79,0],[.055,1.18,.055]);be.rotation.x=Math.PI/2;for(let S of[-.5,.5])E(ae,"#e2dbc7",[0,2.4,S],[1.7,.1,.07]);for(let S=0;S<5;S++)E(ae,"#a98961",[(S-2)*.24,.32,.344],[.21,.53,.025]);for(let S=0;S<4;S++)y(ae,"#b1b967",[(S-1.5)*.19,.78,0],[.09,.08,.08]);let ze=new Oe;o.add(ze),E(ze,"#765734",[0,.18,0],[.56,.36,.4]),E(ze,"#9a743e",[0,.39,0],[.6,.1,.42]);for(let S of[-.19,.19])E(ze,"#d5b15a",[S,.2,.215],[.045,.35,.026]);E(ze,"#ecd178",[0,.32,.22],[.08,.09,.03]);let we=new dt(new or(.24,.29,32),new Tn({color:"#ffe087",transparent:!0,opacity:.8,side:qt,depthWrite:!1}));we.rotation.x=-Math.PI/2,o.add(we);let _e={},et={},V={},he={},fe={root:new Oe,tag:null,name:null};o.add(fe.root),fe.root.position.set(pa.x/Te,Nn(pa.x/Te,pa.y/Te),pa.y/Te),C(fe.root,"#786040",[0,.95,0],[.12,1.9,.12]),E(fe.root,"#234f58",[0,1.65,0],[1.55,.55,.1]);let xe=new Oe;o.add(xe);let de=new dt(new or(.93,1.06,40),new Tn({color:"#54e4ef",transparent:!0,opacity:.85,side:qt,depthWrite:!1}));de.rotation.x=-Math.PI/2,de.position.y=.04,xe.add(de);let ie=_(xe,new Ht(.035,.035,1,8),new Tn({color:"#76eff7",transparent:!0,opacity:.5}),[0,1.25,0],[1,2.5,1],!1),Ee=null,qe=0,_t={},ot=new Oe,cn=null,Zt=null,ei=[],Rn=0;o.add(ot);function Xi(S){let k=S.activities?.completed||0,K=k>=3&&S.activities.gardenClaimed<k;if(lf(_t,S)){Zt&&(Zt.geometry.dispose(),Zt.material.dispose());for(let $ of ei)$.dispose();if(ei=[],o.remove(ot),ot=new Oe,o.add(ot),Zt=null,cn=null,S.basePos&&S.baseLevel){let $=Y,me=xd(uf($,te,{cube:E,tube:C}),$,{cube:E,tube:C},h);if(ot.add(me),me.traverse(Pe=>{["roof","wall","lintel"].includes(Pe.name)&&(Pe.material=Pe.material.clone(),Pe.material.transparent=!0,ei.push(Pe.material))}),k>=1)for(let Pe of[-1,1]){let ue=y(me,"#ffdc80",[Pe*($.width/Te/2-.15),2.35,$.depth/Te/2],[.09,.14,.09]);ue.material=g("#ffdc80",{emissive:"#dca739",emissiveIntensity:.7})}if(k>=6&&(C(me,"#6e5942",[$.width/Te/2+.2,1.75,-$.depth/Te/2],[.03,3.5,.03]),E(me,"#5bbca9",[$.width/Te/2+.55,3.1,-$.depth/Te/2],[.7,.42,.03])),k>=3&&S.garden){let Pe=S.garden,ue=new Oe;ue.position.set(Pe.x/Te,Nn(Pe.x/Te,Pe.y/Te),Pe.y/Te),ot.add(ue),E(ue,"#785d40",[0,.07,0],[1.35,.14,1]);for(let He of[-.4,0,.4])for(let Ke of[-.25,.25])C(ue,"#587b37",[He,.21,Ke],[.025,.3,.025]),y(ue,"#6caa49",[He,.35,Ke],[.16,.12,.12]),K&&y(ue,"#cfa565",[He+.055,.27,Ke],[.07,.065,.07])}}if(S.campfire&&S.fire){let $=new Oe,me=S.fire.x/Te,Pe=S.fire.y/Te;$.position.set(me,Nn(me,Pe),Pe),ot.add($);for(let ue=0;ue<8;ue++){let He=ue*Math.PI/4;y($,"#777a6b",[Math.sin(He)*.3,.07,Math.cos(He)*.3],[.095,.07,.105])}for(let ue of[.5,-.5]){let He=C($,"#614b35",[0,.09,0],[.06,.5,.06]);He.rotation.z=Math.PI/2,He.rotation.y=ue}Zt=_($,new Jn(.17,.46,8),new Tn({color:"#ffb647",transparent:!0,opacity:.88}),[0,.28,0]),cn=new ur("#ffa145",2.5,4),cn.position.y=.5,$.add(cn)}Yd(On,0,ot)&&Rn++}}let ci=[],Fn=[0,0,0,0];function qi(){let S=new Oe;o.add(S),y(S,"#765745",[0,.29,0],[.24,.25,.43]),y(S,"#765745",[0,.3,.4],[.19,.18,.2]),y(S,"#ae8b68",[0,.26,.58],[.11,.065,.065]);for(let K of[-1,1]){let $=_(S,new Jn(.08,.17,3),g("#644937"),[K*.13,.47,.43]);$.rotation.z=K*.45}let k=[];for(let K of[-.17,.17])for(let $ of[-.27,.24])k.push(C(S,"#5e493b",[K,.105,$],[.037,.2,.037]));return{root:S,legs:k,lastX:null,lastZ:null,walking:!1,frameState:{moved:!0,walking:!1,pose:!0}}}function Sr(S,k){for(;ci.length<S.length;)ci.push(qi());let K=!1;for(let $=0;$<ci.length;$++){let me=ci[$],Pe=S[$];if(me.root.visible=!!Pe,!Pe){me.lastX=me.lastZ=null,me.walking=!1;continue}let ue=Pe.x/Te,He=Pe.y/Te,Ke=jd(me.frameState,me.lastX,me.lastZ,ue,He,me.walking),rt=me.lastX===null?0:ue-me.lastX,Nt=me.lastZ===null?0:He-me.lastZ;if(Ke.moved&&(me.root.position.set(ue,Nn(ue,He),He),Ke.walking&&(me.root.rotation.y=Math.atan2(rt,Nt))),Ke.walking&&!K&&(Kd(Fn,k),K=!0),Ke.pose)for(let je=0;je<4;je++)me.legs[je].rotation.x=Ke.walking?Fn[je]:0;me.lastX=ue,me.lastZ=He,me.walking=Ke.walking}}let nn=[new Pt(m(),g("#adddd0",{roughness:.4}),96),new Pt(new Jn(1,1,3),g("#668e93"),96),new Pt(new Jn(1,1,3),g("#779da0"),96)];for(let S of nn)S.count=0,S.frustumCulled=!1,o.add(S);let Ti=0;function Ai(S,k,K,$){let me=0;for(let Pe of S||[]){if(!pf(Pe,$))continue;let ue=ff(Pe,k,K,Ue);!ue||me>=96||(Fl(D,ue,0,0,0,.09,.045,.22),nn[0].setMatrixAt(me,D.matrix),Fl(D,ue,0,0,-.25,.095,.12,.025,Math.PI/2),nn[1].setMatrixAt(me,D.matrix),Fl(D,ue,0,.045,-.02,.04,.1,.11),nn[2].setMatrixAt(me,D.matrix),me++)}mf(nn,me)}let Yi={},zn=[];function ws(S,k){if(cf(Yi,S)){Ye++;for(let K of zn)o.remove(K),K.traverse($=>{$.isSprite&&(lt.delete($),$.material.map.dispose(),$.material.dispose()),$.userData.privateGeometry&&$.geometry.dispose()});zn=[];for(let K of S||[]){if(K.type==="return")continue;let $=new Oe;$.position.set(K.x/Te,Nn(K.x/Te,K.y/Te),K.y/Te),o.add($),zn.push($);let me=new dt(new or(.4,.46,28),g(K.done?"#6d9c89":"#8cebd5",{side:qt}));if(me.rotation.x=-Math.PI/2,me.position.y=.03,me.userData.privateGeometry=!0,$.add(me),K.type==="fragment"&&(E($,"#e1c587",[0,.38,0],[.37,.45,.06]),E($,"#a68752",[0,.18,-.035],[.035,.42,.035]),E($,"#826b4d",[0,.4,.035],[.19,.022,.02])),K.type==="rune"){y($,"#87998a",[0,.26,0],[.27,.3,.21]);let ue=Xe(K.symbol,"#ffe29b");ue.position.y=.8,ue.scale.set(.65,.32,1),$.add(ue)}if(K.type==="chest"){E($,"#795a39",[0,.2,0],[.65,.4,.44]),E($,"#bb9251",[0,.42,0],[.69,.06,.46]);for(let ue of[-.21,.21])E($,"#f1d584",[ue,.23,.235],[.05,.36,.025])}if(K.type==="signal"){for(let ue of[-1,1]){let He=C($,"#8a6d49",[ue*.22,.55,0],[.04,1.1,.04]);He.rotation.z=ue*.22}if(E($,"#927652",[0,1.1,0],[.7,.16,.45]),K.done){let ue=y($,"#ffe28d",[0,1.34,0],[.16,.21,.16]);ue.material=g("#ffe28d",{emissive:"#ffa842",emissiveIntensity:1})}else E($,"#344f57",[0,1.3,0],[.3,.18,.24])}let Pe=Xe(K.label,K.done?"#b5d1c5":"#ffe9b5");Pe.position.y=K.type==="signal"?1.95:1.35,$.add(Pe),$.userData.done=K.done}}for(let K of zn)K.children[0].scale.setScalar(K.userData.done?1:1+Math.sin(k*2.8)*.05)}let Zi=[];for(let S=0;S<4;S++){let k=new Ft().setFromPoints([new O(-.3,0,0),new O(0,-.08,0),new O(.3,0,0)]),K=new sr(k,new zi({color:"#fff7de"}));o.add(K),Zi.push(K)}let Ei=Math.atan2(-130,-60),Ci=0,w=4.8,W=!0,J=!0,j=0,X=null,ce=!1,ye=0,ve="first",Ce={},Ge=-1/0,Ze=0,Fe=new Oe;c.add(Fe);let ct=C(Fe,"#52625f",[.28,-.36,-.42],[.1,.34,.1]);ct.rotation.x=-.65;let wt=y(Fe,"#dda879",[.29,-.27,-.58],[.055,.08,.055]),Ut=new Oe;Fe.add(Ut);let gt=C(Ut,"#876742",[.32,-.17,-.75],[.014,1.55,.014]);gt.rotation.x=-.22;let bt=y(Ut,"#b3b6ac",[.32,.61,-.91],[.039,.12,.025]),Le={};for(let S of["gather","fish","cook"]){let k=new Oe;k.position.set(.29,-.26,-.61),Fe.add(k),hf(S,k,{cube:E,tube:C,ell:y}),Le[S]=k}let kt=Object.entries(Le),ht={down:0,up:Math.PI,left:-Math.PI/2,right:Math.PI/2},Yt=new Set;Fe.traverse(S=>{S.isMesh&&(S.castShadow=!1,S.receiveShadow=!1,S.frustumCulled=!1)});let Xt=new O,Jt=new O,$t=new O,Rt=new O,xn={position:$t,target:Xt},Vt={x:0,z:0,surface:0,yaw:0,pitch:0,mode:"first",distance:4.8,bob:0},Kt={},Wt=new O,ti=new dr,On=[ot,ae],zl=[],ya={position:new O},Ts=0,As=S=>S.object.isMesh&&S.distance>.1;function wr(S,k=0){!W||t().paused||(Ei+=S,Ci=Wi(Ci+k,ve==="first"?-1.12:-.05,ve==="first"?1.12:.75))}function Es(S){ve=S==="third"?"third":"first",Ci=S==="third"?.22:0,c.fov=S==="third"?58:72,c.updateProjectionMatrix(),X=null,J=!0,Ss(Ce,!0,!0)}n.addEventListener("pointerdown",S=>{let k=t();!W||!k.play||k.paused||S.button>0||X||(X={id:S.pointerId,x:S.clientX,y:S.clientY},n.setPointerCapture(S.pointerId))}),n.addEventListener("pointermove",S=>{!X||X.id!==S.pointerId||(wr(-(S.clientX-X.x)*.006,(S.clientY-X.y)*.005),X.x=S.clientX,X.y=S.clientY)});let Ol=S=>{X?.id===S.pointerId&&(X=null)};for(let S of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(S,Ol);n.addEventListener("wheel",S=>{!W||t().paused||(S.preventDefault(),ve==="first"?(c.fov=Wi(c.fov+S.deltaY*.025,58,85),c.updateProjectionMatrix()):w=Wi(w+S.deltaY*.004,2.5,8))},{passive:!1}),n.addEventListener("webglcontextlost",S=>{S.preventDefault(),ce=!0,W=!1,X=null,i()}),n.addEventListener("webglcontextrestored",()=>{ce=!1,J=!0,Ge=-1/0,Ss(Ce,!0,!0)});function Cs(){Ss(Ce,!0,!0),r.setSize(innerWidth,innerHeight,!1),c.aspect=innerWidth/innerHeight,c.updateProjectionMatrix()}function va(S){if(!W||ce)return;let k=t();if(!Ss(Ce,k.paused))return;let K=S/1e3,$=j?Wi((S-j)/1e3,0,.06):1/60;j=S,Jd(ee,K),sf(le,k.basePos,k.baseLevel),Y=le.layout,te=le.elevation,I(fe,k.labels?.board,"#ffe087"),fe.tag&&!fe.tag.userData.boardScale&&(fe.tag.position.y=1.65,fe.tag.scale.set(1.4,.36,1),fe.tag.userData.boardScale=!0),xe.visible=!!k.trail,k.trail&&(_a(V,k.trail)&&(xe.position.set(V.x,V.y,V.z),Ye++),ie.material.opacity=.35+.13*Math.sin(K*3),(qe!==k.trailNumber||Ee?.userData.text!==(k.trailNumber===4?k.labels?.finish||"4":k.trailNumber?String(k.trailNumber):k.trail.label))&&(Ee&&(lt.delete(Ee),xe.remove(Ee),Ee.material.map.dispose(),Ee.material.dispose()),qe=k.trailNumber,Ee=Xe(qe===4?k.labels?.finish||"4":qe?String(qe):k.trail.label,"#54e4ef"),Ee.userData.text=qe===4?k.labels?.finish||"4":qe?String(qe):k.trail.label,Ee.position.y=1.5,Ee.scale.set(k.trailNumber?1:2.45,.4,1),xe.add(Ee))),I(Dt,k.labels?.leon,"#b49966"),I(vt,k.labels?.nela,"#609991");let me=k.P.x/Te,Pe=k.P.y/Te;h.update(),ne.update(K,Y),Q.value=K,Me.material.uniforms.uTime.value=K,it(k.objects,k.resourceRevision),Ai(k.fishes,K,k.sea,k.P),Ti=nn[0].count,ws(k.chapterMarkers,K),Ne(Ae,k.P,Number.isFinite(k.heading)?k.heading:ht[k.face]||0,k.moving,K,$,k.fast?5.25:3,k.sea,k.raft,k.motion,k.spear,k.blocked,Gd(ve)),Dt.root.visible=vt.root.visible=!0,Ne(Dt,k.leon,Math.atan2(me-k.leon.x/Te,Pe-k.leon.y/Te),!1,K,$,0,k.sea,!1,null,!1,!1,Nl(k.leon,k.P),!0),Ne(vt,k.nela,Math.atan2(me-k.nela.x/Te,Pe-k.nela.y/Te),!1,K,$,0,k.sea,!1,null,!1,!1,Nl(k.nela,k.P),!0),Yt.clear();for(let Je of k.players){if(Je.id===k.you)continue;Yt.add(Je.id);let ft=Qe.get(Je.id),dn,At=k.looks[Je.slot]||W_;!ft||ft.name!==Je.name?(dn=Je.appearance?vl(Je.appearance):At,ft&&N(ft),ft=Tt(dn,"player",Je.name),ft.remoteLook={...dn},ft.remoteMotion={kind:null,phase:0},Qe.set(Je.id,ft)):dn=Je.appearance?su(ft.remoteLook,Je.appearance):At,v(ft,dn);let ke=ft.lastX===null?0:Je.point.x/Te-ft.lastX,Mt=ft.lastZ===null?0:Je.point.y/Te-ft.lastZ,jt=Je.moving&&Math.hypot(ke,Mt)>.002?Math.atan2(ke,Mt):ht[Je.face]||0,rn=Vd(ft.remoteMotion,Je.motion,Je.received,S);Ne(ft,Je.point,jt,Je.moving,K,$,3,k.sea,!1,rn,k.spearOwned&&!Je.spearStowed,Je.blocked,Nl(Je.point,k.P),!0)}for(let[Je,ft]of Qe)Yt.has(Je)||(N(ft),Qe.delete(Je));v(Ae,k.appearance||vl()),_a(_e,k.leon,.9,.15)&&(ae.position.set(_e.x,_e.y,_e.z),ae.updateWorldMatrix(!0,!0),Rn++),_a(et,k.chest)&&ze.position.set(et.x,et.y,et.z),ze.visible=!k.treasure,Xi(k),Sr(k.enemies,K);let ue=Y&&Math.abs(k.P.x-Y.floor.x)<Y.floor.w/2&&Math.abs(k.P.y-Y.floor.y)<Y.floor.h/2;for(let Je of ei)Je.opacity=ue&&ve==="third"?.23:1,Je.depthWrite=!(ue&&ve==="third");Zt&&(Zt.scale.y=1+Math.sin(K*13)*.18,cn.intensity=2.5+Math.sin(K*17)*.4),kd(Kt,k.objects,k.P,k.resourceRevision);let He=Kt.nearest;we.visible=!!(k.play&&!k.paused&&He),He&&_a(he,He)&&we.position.set(he.x,he.y+.03,he.z);for(let Je=0;Je<Zi.length;Je++){let ft=Zi[Je];ft.position.set(19+Math.sin(K*.08+Je*1.7)*8,7+Math.sin(K*.2+Je)*.5,12+Math.cos(K*.1+Je*1.3)*5),ft.rotation.y=K*.1+Je,ft.scale.y=1+Math.sin(K*7+Je)*.5}let Ke=k.moving&&!k.paused?Math.sin(Ae.phase*2)*.012:0;if(Vt.x=me,Vt.z=Pe,Vt.surface=Ae.root.position.y,Vt.yaw=Ei,Vt.pitch=Ci,Vt.mode=ve,Vt.distance=w*(c.aspect<.85?1.12:1),Vt.bob=Ke,Sl(Vt,xn),ve==="third"){$t.y=Math.max($t.y,Nn($t.x,$t.z)+.55);let Je=ya;if(Zd(Je,$t,Xt,Rn)){Wt.subVectors($t,Xt);let ft=Wt.length();Wt.normalize(),ti.set(Xt,Wt),ti.near=.08,ti.far=ft,Ts++;let dn=wl(ti,On,!0,zl).find(As);dn&&$t.copy(Xt).addScaledVector(Wt,Math.max(.35,dn.distance-.15)),Je.position.copy($t)}else $t.copy(Je.position)}ve==="first"||J||Rt.distanceTo(Ae.root.position)>5?(c.position.copy($t),Jt.copy(Xt),J=!1):(ou(c.position,$t,$,8),ou(Jt,Xt,$,12)),c.lookAt(ve==="first"?Xt:Jt),Rt.copy(Ae.root.position),tf(St,lt,c,innerWidth,Ye,P);let rt=!!k.spear||!!k.motion&&(k.motion.kind==="gather"||k.motion.kind==="fish"||k.motion.kind==="cook"),Nt=ve==="first"&&k.play&&rt&&qd(ve,k.play,rt,k.sea(k.P.x,k.P.y));if(Fe.visible=Nt,Nt){Ut.visible=!!k.spear&&!k.motion;for(let[Je,ft]of kt)ft.visible=k.motion?.kind===Je;Fe.position.y=Ke*.4,Fe.rotation.x=k.motion?Math.sin(k.motion.phase*Math.PI*2)*.07:0,wt.material=g(k.appearance?.skin||"#dda879"),ct.material=g(k.appearance?.shirt||"#4c9cba")}let je=S-Ge>=a;r.shadowMap.needsUpdate=je,je&&(Tl(u,me,Pe),Ge=S,Ze++),El(Me,c.position),re.update(K,c.position),r.render(o,c),k.play&&$>.038?ye+=$:ye=Math.max(0,ye-$),ye>3&&r.getPixelRatio()>.85&&(r.setPixelRatio(Math.max(.85,r.getPixelRatio()-.15)),Cs(),ye=0)}function N(S){o.remove(S.root),S.tag&&(lt.delete(S.tag),Ye++,S.tag.material.map.dispose(),S.tag.material.dispose())}function H(S){return W=!!S&&!ce,X=null,J=!0,j=0,Ge=-1/0,W&&Ss(Ce,!0,!0),W}function se(){W=!1,r.dispose(),F.dispose(),z.dispose(),re.dispose(),Me.geometry.dispose(),Me.material.dispose(),R.traverse(S=>{S.geometry&&S.geometry.dispose(),S.material&&S.material.dispose()}),A.dispose(),ne.dispose(),h.dispose(),Z.dispose();for(let S of[...Object.values(oe),...nn])S.geometry.dispose(),S.dispose();for(let S of f.values())S.dispose();for(let S of d.values())S.dispose()}return{frame:va,resize:Cs,orbit:wr,setEnabled:H,setCamera:Es,dispose:se,vector:(S,k)=>Od(S,k,Ei),get enabled(){return W},get yaw(){return Ei},get cameraMode(){return ve},stats:()=>({calls:r.info.render.calls,triangles:r.info.render.triangles,pixelRatio:r.getPixelRatio(),people:Qe.size+3,visibleFish:Ti,camera:ve,eye:c.position.toArray(),cameraRaycasts:Ts,resourceStaticUpdates:Re,nearbyResourceScans:Kt.scans||0,shadowUpdates:Ze,frozenStaticTransforms:B,materials:h.stats()})}}return Cf(q_);})();
