var MyIsland3D=(()=>{var kl=Object.defineProperty;var yf=Object.getOwnPropertyDescriptor;var vf=Object.getOwnPropertyNames;var Mf=Object.prototype.hasOwnProperty;var bf=(n,e)=>{for(var t in e)kl(n,t,{get:e[t],enumerable:!0})},Sf=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of vf(e))!Mf.call(n,r)&&r!==t&&kl(n,r,{get:()=>e[r],enumerable:!(i=yf(e,r))||i.enumerable});return n};var wf=n=>Sf(kl({},"__esModule",{value:!0}),n);var G_={};bf(G_,{SCALE:()=>we,actionPose:()=>uf,avatarRigNeedsPose:()=>Vd,baseElevation:()=>mu,buildBase:()=>lf,buildHuman:()=>xu,cameraVector:()=>zd,create:()=>V_,createCampaign:()=>z_,drawCampaign2D:()=>fu,fishPose:()=>hf,fishWithinRenderRange:()=>df,freezeLegacyStaticTransforms:()=>pu,heldRigNeedsPose:()=>Xd,islandShadowInterval:()=>ff,legPose:()=>ef,legacyPersonNeedsPose:()=>Nl,nearestWithin:()=>Od,replaceCameraObstacle:()=>qd,resourceMatricesNeedUpdate:()=>Jd,scaleWorldLabels:()=>Qd,terrainHeight:()=>Fn,updateAppearanceKey:()=>tf,updateAvatarFrameCycle:()=>Zd,updateAvatarPoseCycle:()=>jd,updateBaseFrame:()=>nf,updateBoarFrameState:()=>Kd,updateBoarGait:()=>$d,updateBuildingState:()=>af,updateCameraCollisionState:()=>Yd,updateChapterState:()=>of,updateFishPart:()=>Fl,updateIslandFrameState:()=>ws,updateLegacyPersonRoot:()=>sf,updateLegacyPersonSurface:()=>rf,updateLegacyRigHeading:()=>Hd,updateLegacyRigPoseLod:()=>Gd,updateLegacyYaw:()=>Wd,updateNearestWithin:()=>Bd,updateRemoteMotion:()=>kd,updateTerrainAnchor:()=>xa,walkSurface:()=>gu});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Yu=0,vc=1,Zu=2;var Mc=1,as=2,oi=3,_i=0,hn=1,Gt=2,Si=0,tr=1,bc=2,Sc=3,wc=4,Ju=5,Ni=100,$u=101,Ku=102,ju=103,Qu=104,eh=200,th=201,nh=202,ih=203,Za=204,Ja=205,rh=206,sh=207,ah=208,oh=209,lh=210,ch=211,uh=212,hh=213,dh=214,bo=0,So=1,wo=2,nr=3,To=4,Ao=5,Eo=6,Co=7,Tc=0,fh=1,ph=2,wi=0,mh=1,gh=2,xh=3,os=4,_h=5,yh=6,vh=7;var Ac=300,pr=301,mr=302,Ro=303,Io=304,sa=306,Xr=1e3,Ui=1001,$a=1002,bn=1003,Mh=1004;var aa=1005;var Jn=1006,Po=1007;var ki=1008;var jn=1009,Ec=1010,Cc=1011,ls=1012,Do=1013,Vi=1014,Qn=1015,cs=1016,Lo=1017,Uo=1018,us=1020,Rc=35902,Ic=35899,Pc=1021,Dc=1022,Bn=1023,qr=1026,hs=1027,No=1028,Fo=1029,Lc=1030,zo=1031;var Oo=1033,oa=33776,la=33777,ca=33778,ua=33779,Bo=35840,ko=35841,Vo=35842,Go=35843,Ho=36196,Wo=37492,Xo=37496,qo=37808,Yo=37809,Zo=37810,Jo=37811,$o=37812,Ko=37813,jo=37814,Qo=37815,el=37816,tl=37817,nl=37818,il=37819,rl=37820,sl=37821,al=36492,ol=36494,ll=36495,cl=36283,ul=36284,hl=36285,dl=36286;var Gs=2300,Ka=2301,qa=2302,dc=2400,fc=2401,pc=2402;var bh=3200,Sh=3201;var Uc=0,wh=1,ei="",Yt="srgb",ir="srgb-linear",Hs="linear",Ft="srgb";var er=7680;var mc=519,Th=512,Ah=513,Eh=514,Nc=515,Ch=516,Rh=517,Ih=518,Ph=519,ja=35044;var Fc="300 es",Zn=2e3,Ws=2001;var yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_u=1234567,ks=Math.PI/180,Yr=180/Math.PI;function gi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function yt(n,e,t){return Math.max(e,Math.min(t,n))}function zc(n,e){return(n%e+e)%e}function Tf(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Af(n,e,t){return n!==e?(t-n)/(e-n):0}function Vs(n,e,t){return(1-t)*n+t*e}function Ef(n,e,t,i){return Vs(n,e,1-Math.exp(-t*i))}function Cf(n,e=1){return e-Math.abs(zc(n,e*2)-e)}function Rf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function If(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Pf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Df(n,e){return n+Math.random()*(e-n)}function Lf(n){return n*(.5-Math.random())}function Uf(n){n!==void 0&&(_u=n);let e=_u+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nf(n){return n*ks}function Ff(n){return n*Yr}function zf(n){return(n&n-1)===0&&n!==0}function Of(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Bf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function kf(n,e,t,i,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),d=a((e-i)/2),f=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,c*h,c*d,o*l);break;case"YZY":n.set(c*d,o*u,c*h,o*l);break;case"ZXZ":n.set(c*h,c*d,o*u,o*l);break;case"XZX":n.set(o*u,c*g,c*f,o*l);break;case"YXY":n.set(c*f,o*u,c*g,o*l);break;case"ZYZ":n.set(c*g,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Yn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ha={DEG2RAD:ks,RAD2DEG:Yr,generateUUID:gi,clamp:yt,euclideanModulo:zc,mapLinear:Tf,inverseLerp:Af,lerp:Vs,damp:Ef,pingpong:Cf,smoothstep:Rf,smootherstep:If,randInt:Pf,randFloat:Df,randFloatSpread:Lf,seededRandom:Uf,degToRad:Nf,radToDeg:Ff,isPowerOfTwo:zf,ceilPowerOfTwo:Of,floorPowerOfTwo:Bf,setQuaternionFromProperEuler:kf,normalize:Nt,denormalize:Yn},We=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},vi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3],d=s[a+0],f=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(h!==x||c!==d||l!==f||u!==g){let m=1-o,p=c*d+l*f+u*g+h*x,b=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let C=Math.sqrt(y),R=Math.atan2(C,p*b);m=Math.sin(m*R)/C,o=Math.sin(o*R)/C}let v=o*b;if(c=c*m+d*v,l=l*m+f*v,u=u*m+g*v,h=h*m+x*v,m===1-o){let C=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=C,l*=C,u*=C,h*=C}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-o*f,e[t+2]=l*g+u*f+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),h=o(s/2),d=c(i/2),f=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(i>o&&i>h){let f=2*Math.sqrt(1+i-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>h){let f=2*Math.sqrt(1+o-i-h);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-i-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+c*l+a*h-o*u,this.y=i+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vl.copy(this).projectOnVector(e),this.sub(Vl)}reflect(e){return this.sub(Vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vl=new k,yu=new vi,lt=class n{constructor(e,t,i,r,s,a,o,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],x=r[0],m=r[3],p=r[6],b=r[1],y=r[4],v=r[7],C=r[2],R=r[5],L=r[8];return s[0]=a*x+o*b+c*C,s[3]=a*m+o*y+c*R,s[6]=a*p+o*v+c*L,s[1]=l*x+u*b+h*C,s[4]=l*m+u*y+h*R,s[7]=l*p+u*v+h*L,s[2]=d*x+f*b+g*C,s[5]=d*m+f*y+g*R,s[8]=d*p+f*v+g*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,f=l*s-a*c,g=t*h+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(r*l-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=d*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=f*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Gl.makeScale(e,t)),this}rotate(e){return this.premultiply(Gl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Gl=new lt;function Oc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Dh(){let n=Zr("canvas");return n.style.display="block",n}var vu={};function Jr(n){n in vu||(vu[n]=!0,console.warn(n))}function Lh(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var Mu=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bu=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vf(){let n={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ft&&(r.r=xi(r.r),r.g=xi(r.g),r.b=xi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ft&&(r.r=Wr(r.r),r.g=Wr(r.g),r.b=Wr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ei?Hs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Jr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Jr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ir]:{primaries:e,whitePoint:i,transfer:Hs,toXYZ:Mu,fromXYZ:bu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:i,transfer:Ft,toXYZ:Mu,fromXYZ:bu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),n}var Et=Vf();function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ar,Qa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ar===void 0&&(Ar=Zr("canvas")),Ar.width=e.width,Ar.height=e.height;let r=Ar.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ar}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=xi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xi(t[i]/255)*255):t[i]=xi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gf=0,$r=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Hl(r[a].image)):s.push(Hl(r[a]))}else s=Hl(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Hl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Hf=0,Wl=new k,gn=class n extends yi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ui,r=Ui,s=Jn,a=ki,o=Bn,c=jn,l=n.DEFAULT_ANISOTROPY,u=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=gi(),this.name="",this.source=new $r(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wl).x}get height(){return this.source.getSize(Wl).y}get depth(){return this.source.getSize(Wl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ac)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xr:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case $a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xr:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case $a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Ac;gn.DEFAULT_ANISOTROPY=1;var Ct=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,v=(f+1)/2,C=(p+1)/2,R=(u+d)/4,L=(h+x)/4,z=(g+m)/4;return y>v&&y>C?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=R/i,s=L/i):v>C?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=R/r,s=z/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=L/s,r=z/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-x)/b,this.z=(d-u)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},eo=class extends yi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new gn(r);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new $r(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ri=class extends eo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Xs=class extends gn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var to=class extends gn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var si=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wn):Wn.fromBufferAttribute(s,a),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ba.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ba.copy(i.boundingBox)),ba.applyMatrix4(e.matrixWorld),this.union(ba)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rs),Sa.subVectors(this.max,Rs),Er.subVectors(e.a,Rs),Cr.subVectors(e.b,Rs),Rr.subVectors(e.c,Rs),Ci.subVectors(Cr,Er),Ri.subVectors(Rr,Cr),$i.subVectors(Er,Rr);let t=[0,-Ci.z,Ci.y,0,-Ri.z,Ri.y,0,-$i.z,$i.y,Ci.z,0,-Ci.x,Ri.z,0,-Ri.x,$i.z,0,-$i.x,-Ci.y,Ci.x,0,-Ri.y,Ri.x,0,-$i.y,$i.x,0];return!Xl(t,Er,Cr,Rr,Sa)||(t=[1,0,0,0,1,0,0,0,1],!Xl(t,Er,Cr,Rr,Sa))?!1:(wa.crossVectors(Ci,Ri),t=[wa.x,wa.y,wa.z],Xl(t,Er,Cr,Rr,Sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ui=[new k,new k,new k,new k,new k,new k,new k,new k],Wn=new k,ba=new si,Er=new k,Cr=new k,Rr=new k,Ci=new k,Ri=new k,$i=new k,Rs=new k,Sa=new k,wa=new k,Ki=new k;function Xl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ki.fromArray(n,s);let o=r.x*Math.abs(Ki.x)+r.y*Math.abs(Ki.y)+r.z*Math.abs(Ki.z),c=e.dot(Ki),l=t.dot(Ki),u=i.dot(Ki);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Wf=new si,Is=new k,ql=new k,Mi=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Wf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);let t=Is.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Is,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add(ql)),this.expandByPoint(Is.copy(e.center).sub(ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},hi=new k,Yl=new k,Ta=new k,Ii=new k,Zl=new k,Aa=new k,Jl=new k,Kr=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Yl.copy(e).add(t).multiplyScalar(.5),Ta.copy(t).sub(e).normalize(),Ii.copy(this.origin).sub(Yl);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Ta),o=Ii.dot(this.direction),c=-Ii.dot(Ta),l=Ii.lengthSq(),u=Math.abs(1-a*a),h,d,f,g;if(u>0)if(h=a*c-o,d=a*o-c,g=s*u,h>=0)if(d>=-g)if(d<=g){let x=1/u;h*=x,d*=x,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Yl).addScaledVector(Ta,d),f}intersectSphere(e,t){hi.subVectors(e.center,this.origin);let i=hi.dot(this.direction),r=hi.dot(hi)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,i,r,s){Zl.subVectors(t,e),Aa.subVectors(i,e),Jl.crossVectors(Zl,Aa);let a=this.direction.dot(Jl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ii.subVectors(this.origin,e);let c=o*this.direction.dot(Aa.crossVectors(Ii,Aa));if(c<0)return null;let l=o*this.direction.dot(Zl.cross(Ii));if(l<0||c+l>a)return null;let u=-o*Ii.dot(Jl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Dt=class n{constructor(e,t,i,r,s,a,o,c,l,u,h,d,f,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,h,d,f,g,x,m)}set(e,t,i,r,s,a,o,c,l,u,h,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Ir.setFromMatrixColumn(e,0).length(),s=1/Ir.setFromMatrixColumn(e,1).length(),a=1/Ir.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=a*u,f=a*h,g=o*u,x=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d-x*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*u,f=a*h,g=o*u,x=o*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xf,e,qf)}lookAt(e,t,i){let r=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Pi.crossVectors(i,Pn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Pi.crossVectors(i,Pn)),Pi.normalize(),Ea.crossVectors(Pn,Pi),r[0]=Pi.x,r[4]=Ea.x,r[8]=Pn.x,r[1]=Pi.y,r[5]=Ea.y,r[9]=Pn.y,r[2]=Pi.z,r[6]=Ea.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],b=i[3],y=i[7],v=i[11],C=i[15],R=r[0],L=r[4],z=r[8],T=r[12],S=r[1],A=r[5],O=r[9],N=r[13],I=r[2],U=r[6],G=r[10],X=r[14],B=r[3],ne=r[7],ie=r[11],ye=r[15];return s[0]=a*R+o*S+c*I+l*B,s[4]=a*L+o*A+c*U+l*ne,s[8]=a*z+o*O+c*G+l*ie,s[12]=a*T+o*N+c*X+l*ye,s[1]=u*R+h*S+d*I+f*B,s[5]=u*L+h*A+d*U+f*ne,s[9]=u*z+h*O+d*G+f*ie,s[13]=u*T+h*N+d*X+f*ye,s[2]=g*R+x*S+m*I+p*B,s[6]=g*L+x*A+m*U+p*ne,s[10]=g*z+x*O+m*G+p*ie,s[14]=g*T+x*N+m*X+p*ye,s[3]=b*R+y*S+v*I+C*B,s[7]=b*L+y*A+v*U+C*ne,s[11]=b*z+y*O+v*G+C*ie,s[15]=b*T+y*N+v*X+C*ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+s*c*h-r*l*h-s*o*d+i*l*d+r*o*f-i*c*f)+x*(+t*c*f-t*l*d+s*a*d-r*a*f+r*l*u-s*c*u)+m*(+t*l*h-t*o*f-s*a*h+i*a*f+s*o*u-i*l*u)+p*(-r*o*u-t*c*h+t*o*d+r*a*h-i*a*d+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],b=h*m*l-x*d*l+x*c*f-o*m*f-h*c*p+o*d*p,y=g*d*l-u*m*l-g*c*f+a*m*f+u*c*p-a*d*p,v=u*x*l-g*h*l+g*o*f-a*x*f-u*o*p+a*h*p,C=g*h*c-u*x*c-g*o*d+a*x*d+u*o*m-a*h*m,R=t*b+i*y+r*v+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/R;return e[0]=b*L,e[1]=(x*d*s-h*m*s-x*r*f+i*m*f+h*r*p-i*d*p)*L,e[2]=(o*m*s-x*c*s+x*r*l-i*m*l-o*r*p+i*c*p)*L,e[3]=(h*c*s-o*d*s-h*r*l+i*d*l+o*r*f-i*c*f)*L,e[4]=y*L,e[5]=(u*m*s-g*d*s+g*r*f-t*m*f-u*r*p+t*d*p)*L,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*p-t*c*p)*L,e[7]=(a*d*s-u*c*s+u*r*l-t*d*l-a*r*f+t*c*f)*L,e[8]=v*L,e[9]=(g*h*s-u*x*s-g*i*f+t*x*f+u*i*p-t*h*p)*L,e[10]=(a*x*s-g*o*s+g*i*l-t*x*l-a*i*p+t*o*p)*L,e[11]=(u*o*s-a*h*s-u*i*l+t*h*l+a*i*f-t*o*f)*L,e[12]=C*L,e[13]=(u*x*r-g*h*r+g*i*d-t*x*d-u*i*m+t*h*m)*L,e[14]=(g*o*r-a*x*r-g*i*c+t*x*c+a*i*m-t*o*m)*L,e[15]=(a*h*r-u*o*r+u*i*c-t*h*c-a*i*d+t*o*d)*L,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,d=s*l,f=s*u,g=s*h,x=a*u,m=a*h,p=o*h,b=c*l,y=c*u,v=c*h,C=i.x,R=i.y,L=i.z;return r[0]=(1-(x+p))*C,r[1]=(f+v)*C,r[2]=(g-y)*C,r[3]=0,r[4]=(f-v)*R,r[5]=(1-(d+p))*R,r[6]=(m+b)*R,r[7]=0,r[8]=(g+y)*L,r[9]=(m-b)*L,r[10]=(1-(d+x))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Ir.set(r[0],r[1],r[2]).length(),a=Ir.set(r[4],r[5],r[6]).length(),o=Ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xn.copy(this);let l=1/s,u=1/a,h=1/o;return Xn.elements[0]*=l,Xn.elements[1]*=l,Xn.elements[2]*=l,Xn.elements[4]*=u,Xn.elements[5]*=u,Xn.elements[6]*=u,Xn.elements[8]*=h,Xn.elements[9]*=h,Xn.elements[10]*=h,t.setFromRotationMatrix(Xn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Zn,c=!1){let l=this.elements,u=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),g,x;if(c)g=s/(a-s),x=a*s/(a-s);else if(o===Zn)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Ws)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Zn,c=!1){let l=this.elements,u=2/(t-e),h=2/(i-r),d=-(t+e)/(t-e),f=-(i+r)/(i-r),g,x;if(c)g=1/(a-s),x=a/(a-s);else if(o===Zn)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===Ws)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ir=new k,Xn=new Dt,Xf=new k(0,0,0),qf=new k(1,1,1),Pi=new k,Ea=new k,Pn=new k,Su=new Dt,wu=new vi,$n=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Su,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wu.setFromEuler(this),this.setFromQuaternion(wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var jr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Yf=0,Tu=new k,Pr=new vi,di=new Dt,Ca=new k,Ps=new k,Zf=new k,Jf=new vi,Au=new k(1,0,0),Eu=new k(0,1,0),Cu=new k(0,0,1),Ru={type:"added"},$f={type:"removed"},Dr={type:"childadded",child:null},$l={type:"childremoved",child:null},Rt=class n extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new k,t=new $n,i=new vi,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new lt}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.premultiply(Pr),this}rotateX(e){return this.rotateOnAxis(Au,e)}rotateY(e){return this.rotateOnAxis(Eu,e)}rotateZ(e){return this.rotateOnAxis(Cu,e)}translateOnAxis(e,t){return Tu.copy(e).applyQuaternion(this.quaternion),this.position.add(Tu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Au,e)}translateY(e){return this.translateOnAxis(Eu,e)}translateZ(e){return this.translateOnAxis(Cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ca.copy(e):Ca.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Ps,Ca,this.up):di.lookAt(Ca,Ps,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),Pr.setFromRotationMatrix(di),this.quaternion.premultiply(Pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ru),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($f),$l.child=e,this.dispatchEvent($l),$l.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ru),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,Zf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Jf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Rt.DEFAULT_UP=new k(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qn=new k,fi=new k,Kl=new k,pi=new k,Lr=new k,Ur=new k,Iu=new k,jl=new k,Ql=new k,ec=new k,tc=new Ct,nc=new Ct,ic=new Ct,mi=class n{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qn.subVectors(e,t),r.cross(qn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){qn.subVectors(r,t),fi.subVectors(i,t),Kl.subVectors(e,t);let a=qn.dot(qn),o=qn.dot(fi),c=qn.dot(Kl),l=fi.dot(fi),u=fi.dot(Kl),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;let d=1/h,f=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,pi.x),c.addScaledVector(a,pi.y),c.addScaledVector(o,pi.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return tc.setScalar(0),nc.setScalar(0),ic.setScalar(0),tc.fromBufferAttribute(e,t),nc.fromBufferAttribute(e,i),ic.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(tc,s.x),a.addScaledVector(nc,s.y),a.addScaledVector(ic,s.z),a}static isFrontFacing(e,t,i,r){return qn.subVectors(i,t),fi.subVectors(e,t),qn.cross(fi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),qn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;Lr.subVectors(r,i),Ur.subVectors(s,i),jl.subVectors(e,i);let c=Lr.dot(jl),l=Ur.dot(jl);if(c<=0&&l<=0)return t.copy(i);Ql.subVectors(e,r);let u=Lr.dot(Ql),h=Ur.dot(Ql);if(u>=0&&h<=u)return t.copy(r);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(Lr,a);ec.subVectors(e,s);let f=Lr.dot(ec),g=Ur.dot(ec);if(g>=0&&f<=g)return t.copy(s);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Ur,o);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Iu.subVectors(s,r),o=(h-u)/(h-u+(f-g)),t.copy(r).addScaledVector(Iu,o);let p=1/(m+x+d);return a=x*p,o=d*p,t.copy(i).addScaledVector(Lr,a).addScaledVector(Ur,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function rc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Et.workingColorSpace){return this.r=e,this.g=t,this.b=i,Et.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Et.workingColorSpace){if(e=zc(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=rc(a,s,e+1/3),this.g=rc(a,s,e),this.b=rc(a,s,e-1/3)}return Et.colorSpaceToWorking(this,r),this}setStyle(e,t=Yt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){let i=Uh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Et.workingToColorSpace(mn.copy(this),e),Math.round(yt(mn.r*255,0,255))*65536+Math.round(yt(mn.g*255,0,255))*256+Math.round(yt(mn.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.workingToColorSpace(mn.copy(this),t);let i=mn.r,r=mn.g,s=mn.b,a=Math.max(i,r,s),o=Math.min(i,r,s),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Et.workingColorSpace){return Et.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Yt){Et.workingToColorSpace(mn.copy(this),e);let t=mn.r,i=mn.g,r=mn.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(Ra);let i=Vs(Di.h,Ra.h,t),r=Vs(Di.s,Ra.s,t),s=Vs(Di.l,Ra.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new Je;Je.NAMES=Uh;var Kf=0,ai=class extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=tr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Za,this.blendDst=Ja,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Za&&(i.blendSrc=this.blendSrc),this.blendDst!==Ja&&(i.blendDst=this.blendDst),this.blendEquation!==Ni&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==er&&(i.stencilFail=this.stencilFail),this.stencilZFail!==er&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==er&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Sn=class extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Kt=new k,Ia=new We,jf=0,en=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ja,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ia.fromBufferAttribute(this,t),Ia.applyMatrix3(e),this.setXY(t,Ia.x,Ia.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),r=Nt(r,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ja&&(e.usage=this.usage),e}};var qs=class extends en{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ys=class extends en{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var et=class extends en{constructor(e,t,i){super(new Float32Array(e),t,i)}},Qf=0,On=new Dt,sc=new Rt,Nr=new k,Dn=new si,Ds=new si,an=new k,Lt=class n extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Oc(e)?Ys:qs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new lt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,i){return On.makeTranslation(e,t,i),this.applyMatrix4(On),this}scale(e,t,i){return On.makeScale(e,t,i),this.applyMatrix4(On),this}lookAt(e){return sc.lookAt(e),sc.updateMatrix(),this.applyMatrix4(sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new et(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ds.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(Dn.min,Ds.min),Dn.expandByPoint(an),an.addVectors(Dn.max,Ds.max),Dn.expandByPoint(an)):(Dn.expandByPoint(Ds.min),Dn.expandByPoint(Ds.max))}Dn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)an.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(an));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)an.fromBufferAttribute(o,l),c&&(Nr.fromBufferAttribute(e,l),an.add(Nr)),r=Math.max(r,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let z=0;z<i.count;z++)o[z]=new k,c[z]=new k;let l=new k,u=new k,h=new k,d=new We,f=new We,g=new We,x=new k,m=new k;function p(z,T,S){l.fromBufferAttribute(i,z),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,S),d.fromBufferAttribute(s,z),f.fromBufferAttribute(s,T),g.fromBufferAttribute(s,S),u.sub(l),h.sub(l),f.sub(d),g.sub(d);let A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(A),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(A),o[z].add(x),o[T].add(x),o[S].add(x),c[z].add(m),c[T].add(m),c[S].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let z=0,T=b.length;z<T;++z){let S=b[z],A=S.start,O=S.count;for(let N=A,I=A+O;N<I;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let y=new k,v=new k,C=new k,R=new k;function L(z){C.fromBufferAttribute(r,z),R.copy(C);let T=o[z];y.copy(T),y.sub(C.multiplyScalar(C.dot(T))).normalize(),v.crossVectors(R,T);let A=v.dot(c[z])<0?-1:1;a.setXYZW(z,y.x,y.y,y.z,A)}for(let z=0,T=b.length;z<T;++z){let S=b[z],A=S.start,O=S.count;for(let N=A,I=A+O;N<I;N+=3)L(e.getX(N+0)),L(e.getX(N+1)),L(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let r=new k,s=new k,a=new k,o=new k,c=new k,l=new k,u=new k,h=new k;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u),f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new en(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=e(c,i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pu=new Dt,ji=new Kr,Pa=new Mi,Du=new k,Da=new k,La=new k,Ua=new k,ac=new k,Na=new k,Lu=new k,Fa=new k,ht=class extends Rt{constructor(e=new Lt,t=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Na.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=o[c],h=s[c];u!==0&&(ac.fromBufferAttribute(h,e),a?Na.addScaledVector(ac,u):Na.addScaledVector(ac.sub(t),u))}t.add(Na)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(s),ji.copy(e.ray).recast(e.near),!(Pa.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Pa,Du)===null||ji.origin.distanceToSquared(Du)>(e.far-e.near)**2))&&(Pu.copy(s).invert(),ji.copy(e.ray).applyMatrix4(Pu),!(i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,C=y;v<C;v+=3){let R=o.getX(v),L=o.getX(v+1),z=o.getX(v+2);r=za(this,p,e,i,l,u,h,R,L,z),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let b=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);r=za(this,a,e,i,l,u,h,b,y,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,C=y;v<C;v+=3){let R=v,L=v+1,z=v+2;r=za(this,p,e,i,l,u,h,R,L,z),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let b=m,y=m+1,v=m+2;r=za(this,a,e,i,l,u,h,b,y,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function ep(n,e,t,i,r,s,a,o){let c;if(e.side===hn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===_i,o),c===null)return null;Fa.copy(o),Fa.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Fa);return l<t.near||l>t.far?null:{distance:l,point:Fa.clone(),object:n}}function za(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Da),n.getVertexPosition(c,La),n.getVertexPosition(l,Ua);let u=ep(n,e,t,i,Da,La,Ua,Lu);if(u){let h=new k;mi.getBarycoord(Lu,Da,La,Ua,h),r&&(u.uv=mi.getInterpolatedAttribute(r,o,c,l,h,new We)),s&&(u.uv1=mi.getInterpolatedAttribute(s,o,c,l,h,new We)),a&&(u.normal=mi.getInterpolatedAttribute(a,o,c,l,h,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new k,materialIndex:0};mi.getNormal(Da,La,Ua,d.normal),u.face=d,u.barycoord=h}return u}var un=class n extends Lt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(h,2));function g(x,m,p,b,y,v,C,R,L,z,T){let S=v/L,A=C/z,O=v/2,N=C/2,I=R/2,U=L+1,G=z+1,X=0,B=0,ne=new k;for(let ie=0;ie<G;ie++){let ye=ie*A-N;for(let me=0;me<U;me++){let Oe=me*S-O;ne[x]=Oe*b,ne[m]=ye*y,ne[p]=I,l.push(ne.x,ne.y,ne.z),ne[x]=0,ne[m]=0,ne[p]=R>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(me/L),h.push(1-ie/z),X+=1}}for(let ie=0;ie<z;ie++)for(let ye=0;ye<L;ye++){let me=d+ye+U*ie,Oe=d+ye+U*(ie+1),pt=d+(ye+1)+U*(ie+1),tt=d+(ye+1)+U*ie;c.push(me,Oe,tt),c.push(Oe,pt,tt),B+=6}o.addGroup(f,B,T),f+=B,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function gr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function xn(n){let e={};for(let t=0;t<n.length;t++){let i=gr(n[t]);for(let r in i)e[r]=i[r]}return e}function tp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Bc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}var fl={clone:gr,merge:xn},np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=np,this.fragmentShader=ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=tp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Zs=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Li=new k,Uu=new We,Nu=new We,Qt=class extends Zs{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,Uu,Nu),t.subVectors(Nu,Uu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ks*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fr=-90,zr=1,no=class extends Rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Qt(Fr,zr,e,t);r.layers=this.layers,this.add(r);let s=new Qt(Fr,zr,e,t);s.layers=this.layers,this.add(s);let a=new Qt(Fr,zr,e,t);a.layers=this.layers,this.add(a);let o=new Qt(Fr,zr,e,t);o.layers=this.layers,this.add(o);let c=new Qt(Fr,zr,e,t);c.layers=this.layers,this.add(c);let l=new Qt(Fr,zr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Zn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ws)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Js=class extends gn{constructor(e=[],t=pr,i,r,s,a,o,c,l,u){super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},io=class extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Js(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new un(5,5,5),s=new wn({name:"CubemapFromEquirect",uniforms:gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Si});s.uniforms.tEquirect.value=t;let a=new ht(r,s),o=t.minFilter;return t.minFilter===ki&&(t.minFilter=Jn),new no(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}},Ne=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},rp={type:"move"},Qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rp)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ne;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var rr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Je(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},sr=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},$s=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ja,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yn=new k,es=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),r=Nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),r=Nt(r,this.array),s=Nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new en(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ts=class extends ai{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Or,Ls=new k,Br=new k,kr=new k,Vr=new We,Us=new We,Nh=new Dt,Oa=new k,Ns=new k,Ba=new k,Fu=new We,oc=new We,zu=new We,Ks=class extends Rt{constructor(e=new ts){if(super(),this.isSprite=!0,this.type="Sprite",Or===void 0){Or=new Lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new $s(t,5);Or.setIndex([0,1,2,0,2,3]),Or.setAttribute("position",new es(i,3,0,!1)),Or.setAttribute("uv",new es(i,2,3,!1))}this.geometry=Or,this.material=e,this.center=new We(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Br.setFromMatrixScale(this.matrixWorld),Nh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),kr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Br.multiplyScalar(-kr.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let a=this.center;ka(Oa.set(-.5,-.5,0),kr,a,Br,r,s),ka(Ns.set(.5,-.5,0),kr,a,Br,r,s),ka(Ba.set(.5,.5,0),kr,a,Br,r,s),Fu.set(0,0),oc.set(1,0),zu.set(1,1);let o=e.ray.intersectTriangle(Oa,Ns,Ba,!1,Ls);if(o===null&&(ka(Ns.set(-.5,.5,0),kr,a,Br,r,s),oc.set(0,1),o=e.ray.intersectTriangle(Oa,Ba,Ns,!1,Ls),o===null))return;let c=e.ray.origin.distanceTo(Ls);c<e.near||c>e.far||t.push({distance:c,point:Ls.clone(),uv:mi.getInterpolation(Ls,Oa,Ns,Ba,Fu,oc,zu,new We),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ka(n,e,t,i,r,s){Vr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Us.x=s*Vr.x-r*Vr.y,Us.y=r*Vr.x+s*Vr.y):Us.copy(Vr),n.copy(e),n.x+=Us.x,n.y+=Us.y,n.applyMatrix4(Nh)}var ro=class extends gn{constructor(e=null,t=1,i=1,r,s,a,o,c,l=bn,u=bn,h,d){super(null,a,o,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ns=class extends en{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Gr=new Dt,Ou=new Dt,Va=[],Bu=new si,sp=new Dt,Fs=new ht,zs=new Mi,It=class extends ht{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ns(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,sp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gr),Bu.copy(e.boundingBox).applyMatrix4(Gr),this.boundingBox.union(Bu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gr),zs.copy(e.boundingSphere).applyMatrix4(Gr),this.boundingSphere.union(zs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Fs.geometry=this.geometry,Fs.material=this.material,Fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(i),e.ray.intersectsSphere(zs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Gr),Ou.multiplyMatrices(i,Gr),Fs.matrixWorld=Ou,Fs.raycast(e,Va);for(let a=0,o=Va.length;a<o;a++){let c=Va[a];c.instanceId=s,c.object=this,t.push(c)}Va.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ns(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new ro(new Float32Array(r*this.count),r,this.count,No,Qn));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},lc=new k,ap=new k,op=new lt,ii=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=lc.subVectors(i,t).cross(ap.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(lc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||op.getNormalMatrix(e),r=this.coplanarPoint(lc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qi=new Mi,lp=new We(.5,.5),Ga=new k,is=class{constructor(e=new ii,t=new ii,i=new ii,r=new ii,s=new ii,a=new ii){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zn,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],d=s[6],f=s[7],g=s[8],x=s[9],m=s[10],p=s[11],b=s[12],y=s[13],v=s[14],C=s[15];if(r[0].setComponents(l-a,f-u,p-g,C-b).normalize(),r[1].setComponents(l+a,f+u,p+g,C+b).normalize(),r[2].setComponents(l+o,f+h,p+x,C+y).normalize(),r[3].setComponents(l-o,f-h,p-x,C-y).normalize(),i)r[4].setComponents(c,d,m,v).normalize(),r[5].setComponents(l-c,f-d,p-m,C-v).normalize();else if(r[4].setComponents(l-c,f-d,p-m,C-v).normalize(),t===Zn)r[5].setComponents(l+c,f+d,p+m,C+v).normalize();else if(t===Ws)r[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){Qi.center.set(0,0,0);let t=lp.distanceTo(e.center);return Qi.radius=.7071067811865476+t,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Ga.x=r.normal.x>0?e.max.x:e.min.x,Ga.y=r.normal.y>0?e.max.y:e.min.y,Ga.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Fi=class extends ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},so=new k,ao=new k,ku=new Dt,Os=new Kr,Ha=new Mi,cc=new k,Vu=new k,ar=class extends Rt{constructor(e=new Lt,t=new Fi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)so.fromBufferAttribute(t,r-1),ao.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=so.distanceTo(ao);e.setAttribute("lineDistance",new et(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(r),Ha.radius+=s,e.ray.intersectsSphere(Ha)===!1)return;ku.copy(r).invert(),Os.copy(e.ray).applyMatrix4(ku);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=u.getX(x),b=u.getX(x+1),y=Wa(this,e,Os,c,p,b,x);y&&t.push(y)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(f),p=Wa(this,e,Os,c,x,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=Wa(this,e,Os,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Wa(this,e,Os,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Wa(n,e,t,i,r,s,a){let o=n.geometry.attributes.position;if(so.fromBufferAttribute(o,r),ao.fromBufferAttribute(o,s),t.distanceSqToSegment(so,ao,cc,Vu)>i)return;cc.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(cc);if(!(l<e.near||l>e.far))return{distance:l,point:Vu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var zi=class extends gn{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},js=class extends gn{constructor(e,t,i=Vi,r,s,a,o=bn,c=bn,l,u=qr,h=1){if(u!==qr&&u!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $r(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Qs=class extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Vt=class n extends Lt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let u=[],h=[],d=[],f=[],g=0,x=[],m=i/2,p=0;b(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new et(h,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(f,2));function b(){let v=new k,C=new k,R=0,L=(t-e)/i;for(let z=0;z<=s;z++){let T=[],S=z/s,A=S*(t-e)+e;for(let O=0;O<=r;O++){let N=O/r,I=N*c+o,U=Math.sin(I),G=Math.cos(I);C.x=A*U,C.y=-S*i+m,C.z=A*G,h.push(C.x,C.y,C.z),v.set(U,L,G).normalize(),d.push(v.x,v.y,v.z),f.push(N,1-S),T.push(g++)}x.push(T)}for(let z=0;z<r;z++)for(let T=0;T<s;T++){let S=x[T][z],A=x[T+1][z],O=x[T+1][z+1],N=x[T][z+1];(e>0||T!==0)&&(u.push(S,A,N),R+=3),(t>0||T!==s-1)&&(u.push(A,O,N),R+=3)}l.addGroup(p,R,0),p+=R}function y(v){let C=g,R=new We,L=new k,z=0,T=v===!0?e:t,S=v===!0?1:-1;for(let O=1;O<=r;O++)h.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let A=g;for(let O=0;O<=r;O++){let I=O/r*c+o,U=Math.cos(I),G=Math.sin(I);L.x=T*G,L.y=m*S,L.z=T*U,h.push(L.x,L.y,L.z),d.push(0,S,0),R.x=U*.5+.5,R.y=G*.5*S+.5,f.push(R.x,R.y),g++}for(let O=0;O<r;O++){let N=C+O,I=A+O;v===!0?u.push(I,I+1,N):u.push(I+1,I,N),z+=3}l.addGroup(p,z,v===!0?1:2),p+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Kn=class n extends Vt{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},oo=class n extends Lt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];o(r),l(i),u(),this.setAttribute("position",new et(s,3)),this.setAttribute("normal",new et(s.slice(),3)),this.setAttribute("uv",new et(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let y=new k,v=new k,C=new k;for(let R=0;R<t.length;R+=3)f(t[R+0],y),f(t[R+1],v),f(t[R+2],C),c(y,v,C,b)}function c(b,y,v,C){let R=C+1,L=[];for(let z=0;z<=R;z++){L[z]=[];let T=b.clone().lerp(v,z/R),S=y.clone().lerp(v,z/R),A=R-z;for(let O=0;O<=A;O++)O===0&&z===R?L[z][O]=T:L[z][O]=T.clone().lerp(S,O/A)}for(let z=0;z<R;z++)for(let T=0;T<2*(R-z)-1;T++){let S=Math.floor(T/2);T%2===0?(d(L[z][S+1]),d(L[z+1][S]),d(L[z][S])):(d(L[z][S+1]),d(L[z+1][S+1]),d(L[z+1][S]))}}function l(b){let y=new k;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(b),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function u(){let b=new k;for(let y=0;y<s.length;y+=3){b.x=s[y+0],b.y=s[y+1],b.z=s[y+2];let v=m(b)/2/Math.PI+.5,C=p(b)/Math.PI+.5;a.push(v,1-C)}g(),h()}function h(){for(let b=0;b<a.length;b+=6){let y=a[b+0],v=a[b+2],C=a[b+4],R=Math.max(y,v,C),L=Math.min(y,v,C);R>.9&&L<.1&&(y<.2&&(a[b+0]+=1),v<.2&&(a[b+2]+=1),C<.2&&(a[b+4]+=1))}}function d(b){s.push(b.x,b.y,b.z)}function f(b,y){let v=b*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){let b=new k,y=new k,v=new k,C=new k,R=new We,L=new We,z=new We;for(let T=0,S=0;T<s.length;T+=9,S+=6){b.set(s[T+0],s[T+1],s[T+2]),y.set(s[T+3],s[T+4],s[T+5]),v.set(s[T+6],s[T+7],s[T+8]),R.set(a[S+0],a[S+1]),L.set(a[S+2],a[S+3]),z.set(a[S+4],a[S+5]),C.copy(b).add(y).add(v).divideScalar(3);let A=m(C);x(R,S+0,b,A),x(L,S+2,y,A),x(z,S+4,v,A)}}function x(b,y,v,C){C<0&&b.x===1&&(a[y]=b.x-1),v.x===0&&v.z===0&&(a[y]=C/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var or=class n extends oo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ea=class n extends Lt{constructor(e=[new We(0,-.5),new We(.5,0),new We(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=yt(r,0,Math.PI*2);let s=[],a=[],o=[],c=[],l=[],u=1/t,h=new k,d=new We,f=new k,g=new k,x=new k,m=0,p=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let b=0;b<=t;b++){let y=i+b*u*r,v=Math.sin(y),C=Math.cos(y);for(let R=0;R<=e.length-1;R++){h.x=e[R].x*v,h.y=e[R].y,h.z=e[R].x*C,a.push(h.x,h.y,h.z),d.x=b/t,d.y=R/(e.length-1),o.push(d.x,d.y);let L=c[3*R+0]*v,z=c[3*R+1],T=c[3*R+0]*C;l.push(L,z,T)}}for(let b=0;b<t;b++)for(let y=0;y<e.length-1;y++){let v=y+b*e.length,C=v,R=v+e.length,L=v+e.length+1,z=v+1;s.push(C,R,z),s.push(L,z,R)}this.setIndex(s),this.setAttribute("position",new et(a,3)),this.setAttribute("uv",new et(o,2)),this.setAttribute("normal",new et(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var Ln=class n extends Lt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,h=e/o,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let b=p*d-a;for(let y=0;y<l;y++){let v=y*h-s;g.push(v,-b,0),x.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){let y=b+l*p,v=b+l*(p+1),C=b+1+l*(p+1),R=b+1+l*p;f.push(y,v,R),f.push(v,C,R)}this.setIndex(f),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(x,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},lr=class n extends Lt{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);let o=[],c=[],l=[],u=[],h=e,d=(t-e)/r,f=new k,g=new We;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){let p=s+m/i*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<r;x++){let m=x*(i+1);for(let p=0;p<i;p++){let b=p+m,y=b,v=b+i+1,C=b+i+2,R=b+1;o.push(y,v,R),o.push(v,C,R)}}this.setIndex(o),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Tn=class n extends Lt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,u=[],h=new k,d=new k,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let b=[],y=p/i,v=0;p===0&&a===0?v=.5/t:p===i&&c===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){let R=C/t;h.x=-e*Math.cos(r+R*s)*Math.sin(a+y*o),h.y=e*Math.cos(a+y*o),h.z=e*Math.sin(r+R*s)*Math.sin(a+y*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(R+v,1-y),b.push(l++)}u.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){let y=u[p][b+1],v=u[p][b],C=u[p+1][b],R=u[p+1][b+1];(p!==0||a>0)&&f.push(y,v,R),(p!==i-1||c<Math.PI)&&f.push(v,C,R)}this.setIndex(f),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(x,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var bi=class n extends Lt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let a=[],o=[],c=[],l=[],u=new k,h=new k,d=new k;for(let f=0;f<=i;f++)for(let g=0;g<=r;g++){let x=g/r*s,m=f/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=r;g++){let x=(r+1)*f+g-1,m=(r+1)*(f-1)+g-1,p=(r+1)*(f-1)+g,b=(r+1)*f+g;a.push(x,m,b),a.push(m,p,b)}this.setIndex(a),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var zt=class extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uc,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ta=class extends zt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var lo=class extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},co=class extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Xa(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function cp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var cr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},uo=class extends cr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dc,endingEnd:dc}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case fc:s=e,o=2*t-i;break;case pc:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case fc:a=e,c=2*i-t;break;case pc:a=1,c=i+r[1]-r[0];break;default:a=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(r-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,b=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*x+.5*g,v=f*m-f*x;for(let C=0;C!==o;++C)s[C]=p*a[u+C]+b*a[l+C]+y*a[c+C]+v*a[h+C];return s}},ho=class extends cr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(i-t)/(r-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[l+d]*h+a[c+d]*u;return s}},fo=class extends cr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Un=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xa(t,this.TimeBufferType),this.values=Xa(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Xa(e.times,Array),values:Xa(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Gs:t=this.InterpolantFactoryMethodDiscrete;break;case Ka:t=this.InterpolantFactoryMethodLinear;break;case qa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gs;case this.InterpolantFactoryMethodLinear:return Ka;case this.InterpolantFactoryMethodSmooth:return qa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&cp(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===qa,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(r)c=!0;else{let h=o*i,d=h-i,f=h+i;for(let g=0;g!==i;++g){let x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=Ka;var Oi=class extends Un{constructor(e,t,i){super(e,t,i)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Gs;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var po=class extends Un{constructor(e,t,i,r){super(e,t,i,r)}};po.prototype.ValueTypeName="color";var mo=class extends Un{constructor(e,t,i,r){super(e,t,i,r)}};mo.prototype.ValueTypeName="number";var go=class extends cr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(r-t),l=e*o;for(let u=l+o;l!==u;l+=4)vi.slerpFlat(s,0,a,l-o,a,l,c);return s}},na=class extends Un{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new go(this.times,this.values,this.getValueSize(),e)}};na.prototype.ValueTypeName="quaternion";na.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends Un{constructor(e,t,i){super(e,t,i)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Gs;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var xo=class extends Un{constructor(e,t,i,r){super(e,t,i,r)}};xo.prototype.ValueTypeName="vector";var Ya={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},_o=class{constructor(e,t,i){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Fh=new _o,rs=class{constructor(e){this.manager=e!==void 0?e:Fh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};rs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hr=new WeakMap,yo=class extends rs{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ya.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=Hr.get(a);h===void 0&&(h=[],Hr.set(a,h)),h.push({onLoad:t,onError:r})}return a}let o=Zr("img");function c(){u(),t&&t(this);let h=Hr.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Hr.delete(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),Ya.remove(`image:${e}`);let d=Hr.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(h)}Hr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ya.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var ia=class extends rs{constructor(e){super(e)}load(e,t,i,r){let s=new gn,a=new yo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},ss=class extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ur=class extends ss{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},uc=new Dt,Gu=new k,Hu=new k,vo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new is,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Gu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gu),Hu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hu),t.updateMatrixWorld(),uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Wu=new Dt,Bs=new k,hc=new k,gc=class extends vo{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Bs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Bs),hc.copy(i.position),hc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(hc),i.updateMatrixWorld(),r.makeTranslation(-Bs.x,-Bs.y,-Bs.z),Wu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wu,i.coordinateSystem,i.reversedDepth)}},hr=class extends ss{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new gc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ra=class extends Zs{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xc=class extends vo{constructor(){super(new ra(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},dr=class extends ss{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new xc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Mo=class extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var kc="\\[\\]\\.:\\/",up=new RegExp("["+kc+"]","g"),Vc="[^"+kc+"]",hp="[^"+kc.replace("\\.","")+"]",dp=/((?:WC+[\/:])*)/.source.replace("WC",Vc),fp=/(WCOD+)?/.source.replace("WCOD",hp),pp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vc),mp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vc),gp=new RegExp("^"+dp+fp+pp+mp+"$"),xp=["material","materials","bones","map"],_c=class{constructor(e,t,i){let r=i||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},kt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(up,"")}static parseTrackName(e){let t=gp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);xp.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[r];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};kt.Composite=_c;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var W_=new Float32Array(1);var Xu=new Dt,fr=class{constructor(e,t,i=0,r=1/0){this.ray=new Kr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Xu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xu),this}intersectObject(e,t=!0,i=[]){return yc(e,this,i,t),i.sort(qu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)yc(e[r],this,i,t);return i.sort(qu),i}};function qu(n,e){return n.distance-e.distance}function yc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let a=0,o=s.length;a<o;a++)yc(s[a],e,t,!0)}}function Gc(n,e,t,i){let r=_p(i);switch(t){case Pc:return n*e;case No:return n*e/r.components*r.byteLength;case Fo:return n*e/r.components*r.byteLength;case Lc:return n*e*2/r.components*r.byteLength;case zo:return n*e*2/r.components*r.byteLength;case Dc:return n*e*3/r.components*r.byteLength;case Bn:return n*e*4/r.components*r.byteLength;case Oo:return n*e*4/r.components*r.byteLength;case oa:case la:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ca:case ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ko:case Go:return Math.max(n,16)*Math.max(e,8)/4;case Bo:case Vo:return Math.max(n,8)*Math.max(e,8)/2;case Ho:case Wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case $o:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case jo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case el:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case tl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case nl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case il:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case rl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case sl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case al:case ol:case ll:return Math.ceil(n/4)*Math.ceil(e/4)*16;case cl:case ul:return Math.ceil(n/4)*Math.ceil(e/4)*8;case hl:case dl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _p(n){switch(n){case jn:case Ec:return{byteLength:1,components:1};case ls:case Cc:case cs:return{byteLength:2,components:1};case Lo:case Uo:return{byteLength:2,components:4};case Vi:case Do:case Qn:return{byteLength:4,components:1};case Rc:case Ic:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ad(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Sp(n){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){let u=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let x=h[f];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tp=`#ifdef USE_ALPHAHASH
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
#endif`,Ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ip=`#ifdef USE_AOMAP
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
#endif`,Pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dp=`#ifdef USE_BATCHING
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
#endif`,Lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Np=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zp=`#ifdef USE_IRIDESCENCE
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
#endif`,Op=`#ifdef USE_BUMPMAP
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
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Yp=`#define PI 3.141592653589793
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
} // validated`,Zp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jp=`vec3 transformedNormal = objectNormal;
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
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,em="gl_FragColor = linearToOutputTexel( gl_FragColor );",tm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rm=`#ifdef USE_ENVMAP
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
#endif`,sm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hm=`#ifdef USE_GRADIENTMAP
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
}`,dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mm=`uniform bool receiveShadow;
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
#endif`,gm=`#ifdef USE_ENVMAP
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
#endif`,xm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mm=`PhysicalMaterial material;
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
#endif`,bm=`struct PhysicalMaterial {
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
}`,Sm=`
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
#endif`,wm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Am=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Em=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lm=`#if defined( USE_POINTS_UV )
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
#endif`,Um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`#ifdef USE_MORPHTARGETS
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
#endif`,km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qm=`#ifdef USE_NORMALMAP
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
#endif`,Ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Km=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ng=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ig=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,og=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lg=`float getShadowMask() {
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
}`,cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ug=`#ifdef USE_SKINNING
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
#endif`,hg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dg=`#ifdef USE_SKINNING
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
#endif`,fg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xg=`#ifdef USE_TRANSMISSION
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
#endif`,_g=`#ifdef USE_TRANSMISSION
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
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wg=`uniform sampler2D t2D;
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
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ag=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rg=`#include <common>
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
}`,Ig=`#if DEPTH_PACKING == 3200
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
}`,Pg=`#define DISTANCE
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
}`,Dg=`#define DISTANCE
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
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ng=`uniform float scale;
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
}`,Fg=`uniform vec3 diffuse;
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
}`,zg=`#include <common>
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
}`,Og=`uniform vec3 diffuse;
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
}`,Bg=`#define LAMBERT
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
}`,kg=`#define LAMBERT
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
}`,Vg=`#define MATCAP
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
}`,Gg=`#define MATCAP
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
}`,Hg=`#define NORMAL
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
}`,Wg=`#define NORMAL
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
}`,Xg=`#define PHONG
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
}`,qg=`#define PHONG
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
}`,Yg=`#define STANDARD
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
}`,Zg=`#define STANDARD
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
}`,Jg=`#define TOON
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
}`,$g=`#define TOON
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
}`,Kg=`uniform float size;
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
}`,jg=`uniform vec3 diffuse;
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
}`,Qg=`#include <common>
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
}`,e0=`uniform vec3 color;
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
}`,t0=`uniform float rotation;
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
}`,n0=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:wp,alphahash_pars_fragment:Tp,alphamap_fragment:Ap,alphamap_pars_fragment:Ep,alphatest_fragment:Cp,alphatest_pars_fragment:Rp,aomap_fragment:Ip,aomap_pars_fragment:Pp,batching_pars_vertex:Dp,batching_vertex:Lp,begin_vertex:Up,beginnormal_vertex:Np,bsdfs:Fp,iridescence_fragment:zp,bumpmap_pars_fragment:Op,clipping_planes_fragment:Bp,clipping_planes_pars_fragment:kp,clipping_planes_pars_vertex:Vp,clipping_planes_vertex:Gp,color_fragment:Hp,color_pars_fragment:Wp,color_pars_vertex:Xp,color_vertex:qp,common:Yp,cube_uv_reflection_fragment:Zp,defaultnormal_vertex:Jp,displacementmap_pars_vertex:$p,displacementmap_vertex:Kp,emissivemap_fragment:jp,emissivemap_pars_fragment:Qp,colorspace_fragment:em,colorspace_pars_fragment:tm,envmap_fragment:nm,envmap_common_pars_fragment:im,envmap_pars_fragment:rm,envmap_pars_vertex:sm,envmap_physical_pars_fragment:gm,envmap_vertex:am,fog_vertex:om,fog_pars_vertex:lm,fog_fragment:cm,fog_pars_fragment:um,gradientmap_pars_fragment:hm,lightmap_pars_fragment:dm,lights_lambert_fragment:fm,lights_lambert_pars_fragment:pm,lights_pars_begin:mm,lights_toon_fragment:xm,lights_toon_pars_fragment:_m,lights_phong_fragment:ym,lights_phong_pars_fragment:vm,lights_physical_fragment:Mm,lights_physical_pars_fragment:bm,lights_fragment_begin:Sm,lights_fragment_maps:wm,lights_fragment_end:Tm,logdepthbuf_fragment:Am,logdepthbuf_pars_fragment:Em,logdepthbuf_pars_vertex:Cm,logdepthbuf_vertex:Rm,map_fragment:Im,map_pars_fragment:Pm,map_particle_fragment:Dm,map_particle_pars_fragment:Lm,metalnessmap_fragment:Um,metalnessmap_pars_fragment:Nm,morphinstance_vertex:Fm,morphcolor_vertex:zm,morphnormal_vertex:Om,morphtarget_pars_vertex:Bm,morphtarget_vertex:km,normal_fragment_begin:Vm,normal_fragment_maps:Gm,normal_pars_fragment:Hm,normal_pars_vertex:Wm,normal_vertex:Xm,normalmap_pars_fragment:qm,clearcoat_normal_fragment_begin:Ym,clearcoat_normal_fragment_maps:Zm,clearcoat_pars_fragment:Jm,iridescence_pars_fragment:$m,opaque_fragment:Km,packing:jm,premultiplied_alpha_fragment:Qm,project_vertex:eg,dithering_fragment:tg,dithering_pars_fragment:ng,roughnessmap_fragment:ig,roughnessmap_pars_fragment:rg,shadowmap_pars_fragment:sg,shadowmap_pars_vertex:ag,shadowmap_vertex:og,shadowmask_pars_fragment:lg,skinbase_vertex:cg,skinning_pars_vertex:ug,skinning_vertex:hg,skinnormal_vertex:dg,specularmap_fragment:fg,specularmap_pars_fragment:pg,tonemapping_fragment:mg,tonemapping_pars_fragment:gg,transmission_fragment:xg,transmission_pars_fragment:_g,uv_pars_fragment:yg,uv_pars_vertex:vg,uv_vertex:Mg,worldpos_vertex:bg,background_vert:Sg,background_frag:wg,backgroundCube_vert:Tg,backgroundCube_frag:Ag,cube_vert:Eg,cube_frag:Cg,depth_vert:Rg,depth_frag:Ig,distanceRGBA_vert:Pg,distanceRGBA_frag:Dg,equirect_vert:Lg,equirect_frag:Ug,linedashed_vert:Ng,linedashed_frag:Fg,meshbasic_vert:zg,meshbasic_frag:Og,meshlambert_vert:Bg,meshlambert_frag:kg,meshmatcap_vert:Vg,meshmatcap_frag:Gg,meshnormal_vert:Hg,meshnormal_frag:Wg,meshphong_vert:Xg,meshphong_frag:qg,meshphysical_vert:Yg,meshphysical_frag:Zg,meshtoon_vert:Jg,meshtoon_frag:$g,points_vert:Kg,points_frag:jg,shadow_vert:Qg,shadow_frag:e0,sprite_vert:t0,sprite_frag:n0},Me={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},li={basic:{uniforms:xn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:xn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Je(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:xn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:xn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:xn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Je(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:xn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:xn([Me.points,Me.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:xn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:xn([Me.common,Me.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:xn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:xn([Me.sprite,Me.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:xn([Me.common,Me.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:xn([Me.lights,Me.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};li.physical={uniforms:xn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var pl={r:0,b:0,g:0},xr=new $n,i0=new Dt;function r0(n,e,t,i,r,s,a){let o=new Je(0),c=s===!0?0:1,l,u,h=null,d=0,f=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function x(y){let v=!1,C=g(y);C===null?p(o,c):C&&C.isColor&&(p(C,1),v=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,v){let C=g(v);C&&(C.isCubeTexture||C.mapping===sa)?(u===void 0&&(u=new ht(new un(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:gr(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,L,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),xr.copy(v.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(i0.makeRotationFromEuler(xr)),u.material.toneMapped=Et.getTransfer(C.colorSpace)!==Ft,(h!==C||d!==C.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=C,d=C.version,f=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new ht(new Ln(2,2),new wn({name:"BackgroundMaterial",uniforms:gr(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Et.getTransfer(C.colorSpace)!==Ft,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||d!==C.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=C,d=C.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,v){y.getRGB(pl,Bc(n)),i.buffers.color.setClear(pl.r,pl.g,pl.b,v,a)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(o,c)},render:x,addToRenderList:m,dispose:b}}function s0(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,a=!1;function o(S,A,O,N,I){let U=!1,G=h(N,O,A);s!==G&&(s=G,l(s.object)),U=f(S,N,O,I),U&&g(S,N,O,I),I!==null&&e.update(I,n.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,v(S,A,O,N),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,A,O){let N=O.wireframe===!0,I=i[S.id];I===void 0&&(I={},i[S.id]=I);let U=I[A.id];U===void 0&&(U={},I[A.id]=U);let G=U[N];return G===void 0&&(G=d(c()),U[N]=G),G}function d(S){let A=[],O=[],N=[];for(let I=0;I<t;I++)A[I]=0,O[I]=0,N[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:O,attributeDivisors:N,object:S,attributes:{},index:null}}function f(S,A,O,N){let I=s.attributes,U=A.attributes,G=0,X=O.getAttributes();for(let B in X)if(X[B].location>=0){let ie=I[B],ye=U[B];if(ye===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(ye=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(ye=S.instanceColor)),ie===void 0||ie.attribute!==ye||ye&&ie.data!==ye.data)return!0;G++}return s.attributesNum!==G||s.index!==N}function g(S,A,O,N){let I={},U=A.attributes,G=0,X=O.getAttributes();for(let B in X)if(X[B].location>=0){let ie=U[B];ie===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor));let ye={};ye.attribute=ie,ie&&ie.data&&(ye.data=ie.data),I[B]=ye,G++}s.attributes=I,s.attributesNum=G,s.index=N}function x(){let S=s.newAttributes;for(let A=0,O=S.length;A<O;A++)S[A]=0}function m(S){p(S,0)}function p(S,A){let O=s.newAttributes,N=s.enabledAttributes,I=s.attributeDivisors;O[S]=1,N[S]===0&&(n.enableVertexAttribArray(S),N[S]=1),I[S]!==A&&(n.vertexAttribDivisor(S,A),I[S]=A)}function b(){let S=s.newAttributes,A=s.enabledAttributes;for(let O=0,N=A.length;O<N;O++)A[O]!==S[O]&&(n.disableVertexAttribArray(O),A[O]=0)}function y(S,A,O,N,I,U,G){G===!0?n.vertexAttribIPointer(S,A,O,I,U):n.vertexAttribPointer(S,A,O,N,I,U)}function v(S,A,O,N){x();let I=N.attributes,U=O.getAttributes(),G=A.defaultAttributeValues;for(let X in U){let B=U[X];if(B.location>=0){let ne=I[X];if(ne===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),ne!==void 0){let ie=ne.normalized,ye=ne.itemSize,me=e.get(ne);if(me===void 0)continue;let Oe=me.buffer,pt=me.type,tt=me.bytesPerElement,$=pt===n.INT||pt===n.UNSIGNED_INT||ne.gpuType===Do;if(ne.isInterleavedBufferAttribute){let j=ne.data,se=j.stride,Ae=ne.offset;if(j.isInstancedInterleavedBuffer){for(let Te=0;Te<B.locationSize;Te++)p(B.location+Te,j.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Te=0;Te<B.locationSize;Te++)m(B.location+Te);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let Te=0;Te<B.locationSize;Te++)y(B.location+Te,ye/B.locationSize,pt,ie,se*tt,(Ae+ye/B.locationSize*Te)*tt,$)}else{if(ne.isInstancedBufferAttribute){for(let j=0;j<B.locationSize;j++)p(B.location+j,ne.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let j=0;j<B.locationSize;j++)m(B.location+j);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let j=0;j<B.locationSize;j++)y(B.location+j,ye/B.locationSize,pt,ie,ye*tt,ye/B.locationSize*j*tt,$)}}else if(G!==void 0){let ie=G[X];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(B.location,ie);break;case 3:n.vertexAttrib3fv(B.location,ie);break;case 4:n.vertexAttrib4fv(B.location,ie);break;default:n.vertexAttrib1fv(B.location,ie)}}}}b()}function C(){z();for(let S in i){let A=i[S];for(let O in A){let N=A[O];for(let I in N)u(N[I].object),delete N[I];delete A[O]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;let A=i[S.id];for(let O in A){let N=A[O];for(let I in N)u(N[I].object),delete N[I];delete A[O]}delete i[S.id]}function L(S){for(let A in i){let O=i[A];if(O[S.id]===void 0)continue;let N=O[S.id];for(let I in N)u(N[I].object),delete N[I];delete O[S.id]}}function z(){T(),a=!0,s!==r&&(s=r,l(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:z,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function a0(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,i,1)}function c(l,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function o0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(L){return!(L!==Bn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let z=L===cs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==jn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Qn&&!z)}function c(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:C,maxSamples:R}}function l0(n){let e=this,t=null,i=0,r=!1,s=!1,a=new ii,o=new lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let b=s?0:i,y=b*4,v=p.clippingState||null;c.value=v,v=u(g,d,y,f);for(let C=0;C!==y;++C)v[C]=t[C];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=f;y!==x;++y,v+=4)a.copy(h[y]).applyMatrix4(b,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function c0(n){let e=new WeakMap;function t(a,o){return o===Ro?a.mapping=pr:o===Io&&(a.mapping=mr),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ro||o===Io)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new io(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var fs=4,zh=[.125,.215,.35,.446,.526,.582],vr=20,Hc=new ra,Oh=new Je,Wc=null,Xc=0,qc=0,Yc=!1,yr=(1+Math.sqrt(5))/2,ds=1/yr,Bh=[new k(-yr,ds,0),new k(yr,ds,0),new k(-ds,0,yr),new k(ds,0,yr),new k(0,yr,-ds),new k(0,yr,ds),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],u0=new k,xl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:o=u0}=s;Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wc,Xc,qc),this._renderer.xr.enabled=Yc,e.scissorTest=!1,ml(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pr||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:cs,format:Bn,colorSpace:ir,depthBuffer:!1},r=kh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h0(s)),this._blurMaterial=d0(s,e,t)}return r}_compileMaterial(e){let t=new ht(this._lodPlanes[0],e);this._renderer.compile(t,Hc)}_sceneToCubeUV(e,t,i,r,s){let c=new Qt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Oh),h.toneMapping=wi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));let x=new Sn({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),m=new ht(new un,x),p=!1,b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,p=!0):(x.color.copy(Oh),p=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[y],s.y,s.z)):v===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[y]));let C=this._cubeSize;ml(r,v*C,y>2?C:0,C,C),h.setRenderTarget(r),p&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=b}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===pr||e.mapping===mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vh());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new ht(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;ml(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Hc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Bh[(r-s-1)%Bh.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ht(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*vr-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):vr;m>vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vr}`);let p=[],b=0;for(let L=0;L<vr;++L){let z=L/x,T=Math.exp(-z*z/2);p.push(T),L===0?b+=T:L<m&&(b+=2*T)}for(let L=0;L<p.length;L++)p[L]=p[L]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;let v=this._sizeLods[r],C=3*v*(r>y-fs?r-y+fs:0),R=4*(this._cubeSize-v);ml(t,C,R,3*v,2*v),c.setRenderTarget(t),c.render(h,Hc)}};function h0(n){let e=[],t=[],i=[],r=n,s=n-fs+1+zh.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);t.push(o);let c=1/o;a>n-fs?c=zh[a-n+fs-1]:a===0&&(c=0),i.push(c);let l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,b=new Float32Array(x*g*f),y=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let R=0;R<f;R++){let L=R%3*2/3-1,z=R>2?0:-1,T=[L,z,0,L+2/3,z,0,L+2/3,z+1,0,L,z,0,L+2/3,z+1,0,L,z+1,0];b.set(T,x*g*R),y.set(d,m*g*R);let S=[R,R,R,R,R,R];v.set(S,p*g*R)}let C=new Lt;C.setAttribute("position",new en(b,x)),C.setAttribute("uv",new en(y,m)),C.setAttribute("faceIndex",new en(v,p)),e.push(C),r>fs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function kh(n,e,t){let i=new ri(n,e,t);return i.texture.mapping=sa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ml(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function d0(n,e,t){let i=new Float32Array(vr),r=new k(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:iu(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Vh(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Gh(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function iu(){return`

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
	`}function f0(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===Ro||c===Io,u=c===pr||c===mr;if(l||u){let h=e.get(o),d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new xl(n)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let f=o.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new xl(n)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function p0(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Jr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function m0(n,e,t,i){let r={},s=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function l(h){let d=[],f=h.index,g=h.attributes.position,x=0;if(f!==null){let b=f.array;x=f.version;for(let y=0,v=b.length;y<v;y+=3){let C=b[y+0],R=b[y+1],L=b[y+2];d.push(C,R,R,L,L,C)}}else if(g!==void 0){let b=g.array;x=g.version;for(let y=0,v=b.length/3-1;y<v;y+=3){let C=y+0,R=y+1,L=y+2;d.push(C,R,R,L,L,C)}}else return;let m=new(Oc(d)?Ys:qs)(d,1);m.version=x;let p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){let d=s.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function g0(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){n.drawElements(i,f,s,d*a),t.update(f,i,1)}function l(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,d*a,g),t.update(f,i,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function h(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,x,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*x[b];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function x0(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function _0(n,e,t){let i=new WeakMap,r=new Ct;function s(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(o);if(d===void 0||d.count!==h){let T=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let v=o.attributes.position.count*y,C=1;v>e.maxTextureSize&&(C=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let R=new Float32Array(v*C*4*h),L=new Xs(R,v,C,h);L.type=Qn,L.needsUpdate=!0;let z=y*4;for(let S=0;S<h;S++){let A=m[S],O=p[S],N=b[S],I=v*C*4*S;for(let U=0;U<A.count;U++){let G=U*z;f===!0&&(r.fromBufferAttribute(A,U),R[I+G+0]=r.x,R[I+G+1]=r.y,R[I+G+2]=r.z,R[I+G+3]=0),g===!0&&(r.fromBufferAttribute(O,U),R[I+G+4]=r.x,R[I+G+5]=r.y,R[I+G+6]=r.z,R[I+G+7]=0),x===!0&&(r.fromBufferAttribute(N,U),R[I+G+8]=r.x,R[I+G+9]=r.y,R[I+G+10]=r.z,R[I+G+11]=N.itemSize===4?r.w:1)}}d={count:h,texture:L,size:new We(v,C)},i.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function y0(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function a(){r=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}var od=new gn,Hh=new js(1,1),ld=new Xs,cd=new to,ud=new Js,Wh=[],Xh=[],qh=new Float32Array(16),Yh=new Float32Array(9),Zh=new Float32Array(4);function gs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Wh[r];if(s===void 0&&(s=new Float32Array(r),Wh[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function tn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function nn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _l(n,e){let t=Xh[e];t===void 0&&(t=new Int32Array(e),Xh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function v0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function M0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2fv(this.addr,e),nn(t,e)}}function b0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;n.uniform3fv(this.addr,e),nn(t,e)}}function S0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4fv(this.addr,e),nn(t,e)}}function w0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Zh.set(i),n.uniformMatrix2fv(this.addr,!1,Zh),nn(t,i)}}function T0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Yh.set(i),n.uniformMatrix3fv(this.addr,!1,Yh),nn(t,i)}}function A0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;qh.set(i),n.uniformMatrix4fv(this.addr,!1,qh),nn(t,i)}}function E0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function C0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2iv(this.addr,e),nn(t,e)}}function R0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3iv(this.addr,e),nn(t,e)}}function I0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4iv(this.addr,e),nn(t,e)}}function P0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function D0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2uiv(this.addr,e),nn(t,e)}}function L0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3uiv(this.addr,e),nn(t,e)}}function U0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4uiv(this.addr,e),nn(t,e)}}function N0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Hh.compareFunction=Nc,s=Hh):s=od,t.setTexture2D(e||s,r)}function F0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||cd,r)}function z0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ud,r)}function O0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ld,r)}function B0(n){switch(n){case 5126:return v0;case 35664:return M0;case 35665:return b0;case 35666:return S0;case 35674:return w0;case 35675:return T0;case 35676:return A0;case 5124:case 35670:return E0;case 35667:case 35671:return C0;case 35668:case 35672:return R0;case 35669:case 35673:return I0;case 5125:return P0;case 36294:return D0;case 36295:return L0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return O0}}function k0(n,e){n.uniform1fv(this.addr,e)}function V0(n,e){let t=gs(e,this.size,2);n.uniform2fv(this.addr,t)}function G0(n,e){let t=gs(e,this.size,3);n.uniform3fv(this.addr,t)}function H0(n,e){let t=gs(e,this.size,4);n.uniform4fv(this.addr,t)}function W0(n,e){let t=gs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function X0(n,e){let t=gs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function q0(n,e){let t=gs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Y0(n,e){n.uniform1iv(this.addr,e)}function Z0(n,e){n.uniform2iv(this.addr,e)}function J0(n,e){n.uniform3iv(this.addr,e)}function $0(n,e){n.uniform4iv(this.addr,e)}function K0(n,e){n.uniform1uiv(this.addr,e)}function j0(n,e){n.uniform2uiv(this.addr,e)}function Q0(n,e){n.uniform3uiv(this.addr,e)}function ex(n,e){n.uniform4uiv(this.addr,e)}function tx(n,e,t){let i=this.cache,r=e.length,s=_l(t,r);tn(i,s)||(n.uniform1iv(this.addr,s),nn(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||od,s[a])}function nx(n,e,t){let i=this.cache,r=e.length,s=_l(t,r);tn(i,s)||(n.uniform1iv(this.addr,s),nn(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||cd,s[a])}function ix(n,e,t){let i=this.cache,r=e.length,s=_l(t,r);tn(i,s)||(n.uniform1iv(this.addr,s),nn(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||ud,s[a])}function rx(n,e,t){let i=this.cache,r=e.length,s=_l(t,r);tn(i,s)||(n.uniform1iv(this.addr,s),nn(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ld,s[a])}function sx(n){switch(n){case 5126:return k0;case 35664:return V0;case 35665:return G0;case 35666:return H0;case 35674:return W0;case 35675:return X0;case 35676:return q0;case 5124:case 35670:return Y0;case 35667:case 35671:return Z0;case 35668:case 35672:return J0;case 35669:case 35673:return $0;case 5125:return K0;case 36294:return j0;case 36295:return Q0;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return ix;case 36289:case 36303:case 36311:case 36292:return rx}}var Jc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=B0(t.type)}},$c=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sx(t.type)}},Kc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},Zc=/(\w+)(\])?(\[|\.)?/g;function Jh(n,e){n.seq.push(e),n.map[e.id]=e}function ax(n,e,t){let i=n.name,r=i.length;for(Zc.lastIndex=0;;){let s=Zc.exec(i),a=Zc.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Jh(t,l===void 0?new Jc(o,n,e):new $c(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Kc(o),Jh(t,h)),t=h}}}var ps=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);ax(s,a,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function $h(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var ox=37297,lx=0;function cx(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Kh=new lt;function ux(n){Et._getMatrix(Kh,Et.workingColorSpace,n);let e=`mat3( ${Kh.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(n)){case Hs:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function jh(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+cx(n.getShaderSource(e),o)}else return s}function hx(n,e){let t=ux(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function dx(n,e){let t;switch(e){case mh:t="Linear";break;case gh:t="Reinhard";break;case xh:t="Cineon";break;case os:t="ACESFilmic";break;case yh:t="AgX";break;case vh:t="Neutral";break;case _h:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var gl=new k;function fx(){Et.getLuminanceCoefficients(gl);let n=gl.x.toFixed(4),e=gl.y.toFixed(4),t=gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function px(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function mx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gx(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),a=s.name,o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function da(n){return n!==""}function Qh(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ed(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xx=/^[ \t]*#include +<([\w\d./]+)>/gm;function jc(n){return n.replace(xx,yx)}var _x=new Map;function yx(n,e){let t=ft[e];if(t===void 0){let i=_x.get(e);if(i!==void 0)t=ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jc(t)}var vx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function td(n){return n.replace(vx,Mx)}function Mx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function bx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Mc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===as?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function Sx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case pr:case mr:e="ENVMAP_TYPE_CUBE";break;case sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case mr:e="ENVMAP_MODE_REFRACTION";break}return e}function Tx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Tc:e="ENVMAP_BLENDING_MULTIPLY";break;case fh:e="ENVMAP_BLENDING_MIX";break;case ph:e="ENVMAP_BLENDING_ADD";break}return e}function Ax(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Ex(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=bx(t),l=Sx(t),u=wx(t),h=Tx(t),d=Ax(t),f=px(t),g=mx(s),x=r.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(da).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(da).join(`
`),p.length>0&&(p+=`
`)):(m=[nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),p=[nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?ft.tonemapping_pars_fragment:"",t.toneMapping!==wi?dx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,hx("linearToOutputTexel",t.outputColorSpace),fx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(da).join(`
`)),a=jc(a),a=Qh(a,t),a=ed(a,t),o=jc(o),o=Qh(o,t),o=ed(o,t),a=td(a),o=td(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=b+m+a,v=b+p+o,C=$h(r,r.VERTEX_SHADER,y),R=$h(r,r.FRAGMENT_SHADER,v);r.attachShader(x,C),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function L(A){if(n.debug.checkShaderErrors){let O=r.getProgramInfoLog(x)||"",N=r.getShaderInfoLog(C)||"",I=r.getShaderInfoLog(R)||"",U=O.trim(),G=N.trim(),X=I.trim(),B=!0,ne=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,C,R);else{let ie=jh(r,C,"vertex"),ye=jh(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+U+`
`+ie+`
`+ye)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(G===""||X==="")&&(ne=!1);ne&&(A.diagnostics={runnable:B,programLog:U,vertexShader:{log:G,prefix:m},fragmentShader:{log:X,prefix:p}})}r.deleteShader(C),r.deleteShader(R),z=new ps(r,x),T=gx(r,x)}let z;this.getUniforms=function(){return z===void 0&&L(this),z};let T;this.getAttributes=function(){return T===void 0&&L(this),T};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,ox)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=R,this}var Cx=0,Qc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new eu(e),t.set(e,i)),i}},eu=class{constructor(e){this.id=Cx++,this.code=e,this.usedTimes=0}};function Rx(n,e,t,i,r,s,a){let o=new jr,c=new Qc,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures,f=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,S,A,O,N){let I=O.fog,U=N.geometry,G=T.isMeshStandardMaterial?O.environment:null,X=(T.isMeshStandardMaterial?t:e).get(T.envMap||G),B=X&&X.mapping===sa?X.image.height:null,ne=g[T.type];T.precision!==null&&(f=r.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));let ie=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ye=ie!==void 0?ie.length:0,me=0;U.morphAttributes.position!==void 0&&(me=1),U.morphAttributes.normal!==void 0&&(me=2),U.morphAttributes.color!==void 0&&(me=3);let Oe,pt,tt,$;if(ne){let ut=li[ne];Oe=ut.vertexShader,pt=ut.fragmentShader}else Oe=T.vertexShader,pt=T.fragmentShader,c.update(T),tt=c.getVertexShaderID(T),$=c.getFragmentShaderID(T);let j=n.getRenderTarget(),se=n.state.buffers.depth.getReversed(),Ae=N.isInstancedMesh===!0,Te=N.isBatchedMesh===!0,nt=!!T.map,ot=!!T.matcap,D=!!X,_t=!!T.aoMap,Ke=!!T.lightMap,qe=!!T.bumpMap,Ee=!!T.normalMap,wt=!!T.displacementMap,Re=!!T.emissiveMap,it=!!T.metalnessMap,Pt=!!T.roughnessMap,St=T.anisotropy>0,P=T.clearcoat>0,M=T.dispersion>0,Y=T.iridescence>0,ee=T.sheen>0,oe=T.transmission>0,Q=St&&!!T.anisotropyMap,Pe=P&&!!T.clearcoatMap,he=P&&!!T.clearcoatNormalMap,ve=P&&!!T.clearcoatRoughnessMap,Fe=Y&&!!T.iridescenceMap,le=Y&&!!T.iridescenceThicknessMap,ge=ee&&!!T.sheenColorMap,Be=ee&&!!T.sheenRoughnessMap,be=!!T.specularMap,xe=!!T.specularColorMap,je=!!T.specularIntensityMap,V=oe&&!!T.transmissionMap,ue=oe&&!!T.thicknessMap,pe=!!T.gradientMap,Se=!!T.alphaMap,ae=T.alphaTest>0,te=!!T.alphaHash,Ue=!!T.extensions,Xe=wi;T.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Xe=n.toneMapping);let ct={shaderID:ne,shaderType:T.type,shaderName:T.name,vertexShader:Oe,fragmentShader:pt,defines:T.defines,customVertexShaderID:tt,customFragmentShaderID:$,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Te,batchingColor:Te&&N._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&N.instanceColor!==null,instancingMorph:Ae&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ir,alphaToCoverage:!!T.alphaToCoverage,map:nt,matcap:ot,envMap:D,envMapMode:D&&X.mapping,envMapCubeUVHeight:B,aoMap:_t,lightMap:Ke,bumpMap:qe,normalMap:Ee,displacementMap:d&&wt,emissiveMap:Re,normalMapObjectSpace:Ee&&T.normalMapType===wh,normalMapTangentSpace:Ee&&T.normalMapType===Uc,metalnessMap:it,roughnessMap:Pt,anisotropy:St,anisotropyMap:Q,clearcoat:P,clearcoatMap:Pe,clearcoatNormalMap:he,clearcoatRoughnessMap:ve,dispersion:M,iridescence:Y,iridescenceMap:Fe,iridescenceThicknessMap:le,sheen:ee,sheenColorMap:ge,sheenRoughnessMap:Be,specularMap:be,specularColorMap:xe,specularIntensityMap:je,transmission:oe,transmissionMap:V,thicknessMap:ue,gradientMap:pe,opaque:T.transparent===!1&&T.blending===tr&&T.alphaToCoverage===!1,alphaMap:Se,alphaTest:ae,alphaHash:te,combine:T.combine,mapUv:nt&&x(T.map.channel),aoMapUv:_t&&x(T.aoMap.channel),lightMapUv:Ke&&x(T.lightMap.channel),bumpMapUv:qe&&x(T.bumpMap.channel),normalMapUv:Ee&&x(T.normalMap.channel),displacementMapUv:wt&&x(T.displacementMap.channel),emissiveMapUv:Re&&x(T.emissiveMap.channel),metalnessMapUv:it&&x(T.metalnessMap.channel),roughnessMapUv:Pt&&x(T.roughnessMap.channel),anisotropyMapUv:Q&&x(T.anisotropyMap.channel),clearcoatMapUv:Pe&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:he&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:le&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:Be&&x(T.sheenRoughnessMap.channel),specularMapUv:be&&x(T.specularMap.channel),specularColorMapUv:xe&&x(T.specularColorMap.channel),specularIntensityMapUv:je&&x(T.specularIntensityMap.channel),transmissionMapUv:V&&x(T.transmissionMap.channel),thicknessMapUv:ue&&x(T.thicknessMap.channel),alphaMapUv:Se&&x(T.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Ee||St),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(nt||Se),fog:!!I,useFog:T.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:se,skinning:N.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:me,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xe,decodeVideoTexture:nt&&T.map.isVideoTexture===!0&&Et.getTransfer(T.map.colorSpace)===Ft,decodeVideoTextureEmissive:Re&&T.emissiveMap.isVideoTexture===!0&&Et.getTransfer(T.emissiveMap.colorSpace)===Ft,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Gt,flipSided:T.side===hn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ue&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&T.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ct.vertexUv1s=l.has(1),ct.vertexUv2s=l.has(2),ct.vertexUv3s=l.has(3),l.clear(),ct}function p(T){let S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(let A in T.defines)S.push(A),S.push(T.defines[A]);return T.isRawShaderMaterial===!1&&(b(S,T),y(S,T),S.push(n.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function b(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function y(T,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),T.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),T.push(o.mask)}function v(T){let S=g[T.type],A;if(S){let O=li[S];A=fl.clone(O.uniforms)}else A=T.uniforms;return A}function C(T,S){let A;for(let O=0,N=u.length;O<N;O++){let I=u[O];if(I.cacheKey===S){A=I,++A.usedTimes;break}}return A===void 0&&(A=new Ex(n,S,T,s),u.push(A)),A}function R(T){if(--T.usedTimes===0){let S=u.indexOf(T);u[S]=u[u.length-1],u.pop(),T.destroy()}}function L(T){c.remove(T)}function z(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:C,releaseProgram:R,releaseShaderCache:L,programs:u,dispose:z}}function Ix(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Px(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function id(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function rd(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,d,f,g,x,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function o(h,d,f,g,x,m){let p=a(h,d,f,g,x,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(h,d,f,g,x,m){let p=a(h,d,f,g,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||Px),i.length>1&&i.sort(d||id),r.length>1&&r.sort(d||id)}function u(){for(let h=e,d=n.length;h<d;h++){let f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function Dx(){let n=new WeakMap;function e(i,r){let s=n.get(i),a;return s===void 0?(a=new rd,n.set(i,[a])):r>=s.length?(a=new rd,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Lx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Je};break;case"SpotLight":t={position:new k,direction:new k,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function Ux(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Nx=0;function Fx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function zx(n){let e=new Lx,t=Ux(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new k);let r=new k,s=new Dt,a=new Dt;function o(l){let u=0,h=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,b=0,y=0,v=0,C=0,R=0,L=0;l.sort(Fx);for(let T=0,S=l.length;T<S;T++){let A=l[T],O=A.color,N=A.intensity,I=A.distance,U=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=O.r*N,h+=O.g*N,d+=O.b*N;else if(A.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(A.sh.coefficients[G],N);L++}else if(A.isDirectionalLight){let G=e.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let X=A.shadow,B=t.get(A);B.shadowIntensity=X.intensity,B.shadowBias=X.bias,B.shadowNormalBias=X.normalBias,B.shadowRadius=X.radius,B.shadowMapSize=X.mapSize,i.directionalShadow[f]=B,i.directionalShadowMap[f]=U,i.directionalShadowMatrix[f]=A.shadow.matrix,b++}i.directional[f]=G,f++}else if(A.isSpotLight){let G=e.get(A);G.position.setFromMatrixPosition(A.matrixWorld),G.color.copy(O).multiplyScalar(N),G.distance=I,G.coneCos=Math.cos(A.angle),G.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),G.decay=A.decay,i.spot[x]=G;let X=A.shadow;if(A.map&&(i.spotLightMap[C]=A.map,C++,X.updateMatrices(A),A.castShadow&&R++),i.spotLightMatrix[x]=X.matrix,A.castShadow){let B=t.get(A);B.shadowIntensity=X.intensity,B.shadowBias=X.bias,B.shadowNormalBias=X.normalBias,B.shadowRadius=X.radius,B.shadowMapSize=X.mapSize,i.spotShadow[x]=B,i.spotShadowMap[x]=U,v++}x++}else if(A.isRectAreaLight){let G=e.get(A);G.color.copy(O).multiplyScalar(N),G.halfWidth.set(A.width*.5,0,0),G.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=G,m++}else if(A.isPointLight){let G=e.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),G.distance=A.distance,G.decay=A.decay,A.castShadow){let X=A.shadow,B=t.get(A);B.shadowIntensity=X.intensity,B.shadowBias=X.bias,B.shadowNormalBias=X.normalBias,B.shadowRadius=X.radius,B.shadowMapSize=X.mapSize,B.shadowCameraNear=X.camera.near,B.shadowCameraFar=X.camera.far,i.pointShadow[g]=B,i.pointShadowMap[g]=U,i.pointShadowMatrix[g]=A.shadow.matrix,y++}i.point[g]=G,g++}else if(A.isHemisphereLight){let G=e.get(A);G.skyColor.copy(A.color).multiplyScalar(N),G.groundColor.copy(A.groundColor).multiplyScalar(N),i.hemi[p]=G,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let z=i.hash;(z.directionalLength!==f||z.pointLength!==g||z.spotLength!==x||z.rectAreaLength!==m||z.hemiLength!==p||z.numDirectionalShadows!==b||z.numPointShadows!==y||z.numSpotShadows!==v||z.numSpotMaps!==C||z.numLightProbes!==L)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+C-R,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=L,z.directionalLength=f,z.pointLength=g,z.spotLength=x,z.rectAreaLength=m,z.hemiLength=p,z.numDirectionalShadows=b,z.numPointShadows=y,z.numSpotShadows=v,z.numSpotMaps=C,z.numLightProbes=L,i.version=Nx++)}function c(l,u){let h=0,d=0,f=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){let y=l[p];if(y.isDirectionalLight){let v=i.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(y.isSpotLight){let v=i.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let v=i.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){let v=i.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:i}}function sd(n){let e=new zx(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Ox(n){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new sd(n),e.set(r,[o])):s>=a.length?(o=new sd(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Bx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kx=`uniform sampler2D shadow_pass;
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
}`;function Vx(n,e,t){let i=new is,r=new We,s=new We,a=new Ct,o=new lo({depthPacking:Sh}),c=new co,l={},u=t.maxTextureSize,h={[_i]:hn,[hn]:_i,[Gt]:Gt},d=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Bx,fragmentShader:kx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Lt;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ht(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mc;let p=this.type;this.render=function(R,L,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let T=n.getRenderTarget(),S=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Si),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let N=p!==oi&&this.type===oi,I=p===oi&&this.type!==oi;for(let U=0,G=R.length;U<G;U++){let X=R[U],B=X.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);let ne=B.getFrameExtents();if(r.multiply(ne),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ne.x),r.x=s.x*ne.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ne.y),r.y=s.y*ne.y,B.mapSize.y=s.y)),B.map===null||N===!0||I===!0){let ye=this.type!==oi?{minFilter:bn,magFilter:bn}:{};B.map!==null&&B.map.dispose(),B.map=new ri(r.x,r.y,ye),B.map.texture.name=X.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();let ie=B.getViewportCount();for(let ye=0;ye<ie;ye++){let me=B.getViewport(ye);a.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),O.viewport(a),B.updateMatrices(X,ye),i=B.getFrustum(),v(L,z,B.camera,X,this.type)}B.isPointLightShadow!==!0&&this.type===oi&&b(B,z),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,S,A)};function b(R,L){let z=e.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ri(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(L,null,z,d,x,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(L,null,z,f,x,null)}function y(R,L,z,T){let S=null,A=z.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)S=A;else if(S=z.isPointLight===!0?c:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let O=S.uuid,N=L.uuid,I=l[O];I===void 0&&(I={},l[O]=I);let U=I[N];U===void 0&&(U=S.clone(),I[N]=U,L.addEventListener("dispose",C)),S=U}if(S.visible=L.visible,S.wireframe=L.wireframe,T===oi?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:h[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,z.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let O=n.properties.get(S);O.light=z}return S}function v(R,L,z,T,S){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===oi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,R.matrixWorld);let N=e.update(R),I=R.material;if(Array.isArray(I)){let U=N.groups;for(let G=0,X=U.length;G<X;G++){let B=U[G],ne=I[B.materialIndex];if(ne&&ne.visible){let ie=y(R,ne,T,S);R.onBeforeShadow(n,R,L,z,N,ie,B),n.renderBufferDirect(z,null,N,ie,R,B),R.onAfterShadow(n,R,L,z,N,ie,B)}}}else if(I.visible){let U=y(R,I,T,S);R.onBeforeShadow(n,R,L,z,N,U,null),n.renderBufferDirect(z,null,N,U,R,null),R.onAfterShadow(n,R,L,z,N,U,null)}}let O=R.children;for(let N=0,I=O.length;N<I;N++)v(O[N],L,z,T,S)}function C(R){R.target.removeEventListener("dispose",C);for(let z in l){let T=l[z],S=R.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}var Gx={[bo]:So,[wo]:Eo,[To]:Co,[nr]:Ao,[So]:bo,[Eo]:wo,[Co]:To,[Ao]:nr};function Hx(n,e){function t(){let V=!1,ue=new Ct,pe=null,Se=new Ct(0,0,0,0);return{setMask:function(ae){pe!==ae&&!V&&(n.colorMask(ae,ae,ae,ae),pe=ae)},setLocked:function(ae){V=ae},setClear:function(ae,te,Ue,Xe,ct){ct===!0&&(ae*=Xe,te*=Xe,Ue*=Xe),ue.set(ae,te,Ue,Xe),Se.equals(ue)===!1&&(n.clearColor(ae,te,Ue,Xe),Se.copy(ue))},reset:function(){V=!1,pe=null,Se.set(-1,0,0,0)}}}function i(){let V=!1,ue=!1,pe=null,Se=null,ae=null;return{setReversed:function(te){if(ue!==te){let Ue=e.get("EXT_clip_control");te?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),ue=te;let Xe=ae;ae=null,this.setClear(Xe)}},getReversed:function(){return ue},setTest:function(te){te?j(n.DEPTH_TEST):se(n.DEPTH_TEST)},setMask:function(te){pe!==te&&!V&&(n.depthMask(te),pe=te)},setFunc:function(te){if(ue&&(te=Gx[te]),Se!==te){switch(te){case bo:n.depthFunc(n.NEVER);break;case So:n.depthFunc(n.ALWAYS);break;case wo:n.depthFunc(n.LESS);break;case nr:n.depthFunc(n.LEQUAL);break;case To:n.depthFunc(n.EQUAL);break;case Ao:n.depthFunc(n.GEQUAL);break;case Eo:n.depthFunc(n.GREATER);break;case Co:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=te}},setLocked:function(te){V=te},setClear:function(te){ae!==te&&(ue&&(te=1-te),n.clearDepth(te),ae=te)},reset:function(){V=!1,pe=null,Se=null,ae=null,ue=!1}}}function r(){let V=!1,ue=null,pe=null,Se=null,ae=null,te=null,Ue=null,Xe=null,ct=null;return{setTest:function(ut){V||(ut?j(n.STENCIL_TEST):se(n.STENCIL_TEST))},setMask:function(ut){ue!==ut&&!V&&(n.stencilMask(ut),ue=ut)},setFunc:function(ut,ln,cn){(pe!==ut||Se!==ln||ae!==cn)&&(n.stencilFunc(ut,ln,cn),pe=ut,Se=ln,ae=cn)},setOp:function(ut,ln,cn){(te!==ut||Ue!==ln||Xe!==cn)&&(n.stencilOp(ut,ln,cn),te=ut,Ue=ln,Xe=cn)},setLocked:function(ut){V=ut},setClear:function(ut){ct!==ut&&(n.clearStencil(ut),ct=ut)},reset:function(){V=!1,ue=null,pe=null,Se=null,ae=null,te=null,Ue=null,Xe=null,ct=null}}}let s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,b=null,y=null,v=null,C=null,R=null,L=new Je(0,0,0),z=0,T=!1,S=null,A=null,O=null,N=null,I=null,U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,X=0,B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(B)[1]),G=X>=1):B.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),G=X>=2);let ne=null,ie={},ye=n.getParameter(n.SCISSOR_BOX),me=n.getParameter(n.VIEWPORT),Oe=new Ct().fromArray(ye),pt=new Ct().fromArray(me);function tt(V,ue,pe,Se){let ae=new Uint8Array(4),te=n.createTexture();n.bindTexture(V,te),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<pe;Ue++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(ue+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return te}let $={};$[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(n.DEPTH_TEST),a.setFunc(nr),qe(!1),Ee(vc),j(n.CULL_FACE),_t(Si);function j(V){u[V]!==!0&&(n.enable(V),u[V]=!0)}function se(V){u[V]!==!1&&(n.disable(V),u[V]=!1)}function Ae(V,ue){return h[V]!==ue?(n.bindFramebuffer(V,ue),h[V]=ue,V===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ue),V===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function Te(V,ue){let pe=f,Se=!1;if(V){pe=d.get(ue),pe===void 0&&(pe=[],d.set(ue,pe));let ae=V.textures;if(pe.length!==ae.length||pe[0]!==n.COLOR_ATTACHMENT0){for(let te=0,Ue=ae.length;te<Ue;te++)pe[te]=n.COLOR_ATTACHMENT0+te;pe.length=ae.length,Se=!0}}else pe[0]!==n.BACK&&(pe[0]=n.BACK,Se=!0);Se&&n.drawBuffers(pe)}function nt(V){return g!==V?(n.useProgram(V),g=V,!0):!1}let ot={[Ni]:n.FUNC_ADD,[$u]:n.FUNC_SUBTRACT,[Ku]:n.FUNC_REVERSE_SUBTRACT};ot[ju]=n.MIN,ot[Qu]=n.MAX;let D={[eh]:n.ZERO,[th]:n.ONE,[nh]:n.SRC_COLOR,[Za]:n.SRC_ALPHA,[lh]:n.SRC_ALPHA_SATURATE,[ah]:n.DST_COLOR,[rh]:n.DST_ALPHA,[ih]:n.ONE_MINUS_SRC_COLOR,[Ja]:n.ONE_MINUS_SRC_ALPHA,[oh]:n.ONE_MINUS_DST_COLOR,[sh]:n.ONE_MINUS_DST_ALPHA,[ch]:n.CONSTANT_COLOR,[uh]:n.ONE_MINUS_CONSTANT_COLOR,[hh]:n.CONSTANT_ALPHA,[dh]:n.ONE_MINUS_CONSTANT_ALPHA};function _t(V,ue,pe,Se,ae,te,Ue,Xe,ct,ut){if(V===Si){x===!0&&(se(n.BLEND),x=!1);return}if(x===!1&&(j(n.BLEND),x=!0),V!==Ju){if(V!==m||ut!==T){if((p!==Ni||v!==Ni)&&(n.blendEquation(n.FUNC_ADD),p=Ni,v=Ni),ut)switch(V){case tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bc:n.blendFunc(n.ONE,n.ONE);break;case Sc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Sc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}b=null,y=null,C=null,R=null,L.set(0,0,0),z=0,m=V,T=ut}return}ae=ae||ue,te=te||pe,Ue=Ue||Se,(ue!==p||ae!==v)&&(n.blendEquationSeparate(ot[ue],ot[ae]),p=ue,v=ae),(pe!==b||Se!==y||te!==C||Ue!==R)&&(n.blendFuncSeparate(D[pe],D[Se],D[te],D[Ue]),b=pe,y=Se,C=te,R=Ue),(Xe.equals(L)===!1||ct!==z)&&(n.blendColor(Xe.r,Xe.g,Xe.b,ct),L.copy(Xe),z=ct),m=V,T=!1}function Ke(V,ue){V.side===Gt?se(n.CULL_FACE):j(n.CULL_FACE);let pe=V.side===hn;ue&&(pe=!pe),qe(pe),V.blending===tr&&V.transparent===!1?_t(Si):_t(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),s.setMask(V.colorWrite);let Se=V.stencilWrite;o.setTest(Se),Se&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Re(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):se(n.SAMPLE_ALPHA_TO_COVERAGE)}function qe(V){S!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),S=V)}function Ee(V){V!==Yu?(j(n.CULL_FACE),V!==A&&(V===vc?n.cullFace(n.BACK):V===Zu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):se(n.CULL_FACE),A=V}function wt(V){V!==O&&(G&&n.lineWidth(V),O=V)}function Re(V,ue,pe){V?(j(n.POLYGON_OFFSET_FILL),(N!==ue||I!==pe)&&(n.polygonOffset(ue,pe),N=ue,I=pe)):se(n.POLYGON_OFFSET_FILL)}function it(V){V?j(n.SCISSOR_TEST):se(n.SCISSOR_TEST)}function Pt(V){V===void 0&&(V=n.TEXTURE0+U-1),ne!==V&&(n.activeTexture(V),ne=V)}function St(V,ue,pe){pe===void 0&&(ne===null?pe=n.TEXTURE0+U-1:pe=ne);let Se=ie[pe];Se===void 0&&(Se={type:void 0,texture:void 0},ie[pe]=Se),(Se.type!==V||Se.texture!==ue)&&(ne!==pe&&(n.activeTexture(pe),ne=pe),n.bindTexture(V,ue||$[V]),Se.type=V,Se.texture=ue)}function P(){let V=ie[ne];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Y(){try{n.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ee(){try{n.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function oe(){try{n.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Q(){try{n.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(){try{n.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{n.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{n.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(){try{n.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function le(){try{n.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ge(V){Oe.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),Oe.copy(V))}function Be(V){pt.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),pt.copy(V))}function be(V,ue){let pe=l.get(ue);pe===void 0&&(pe=new WeakMap,l.set(ue,pe));let Se=pe.get(V);Se===void 0&&(Se=n.getUniformBlockIndex(ue,V.name),pe.set(V,Se))}function xe(V,ue){let Se=l.get(ue).get(V);c.get(ue)!==Se&&(n.uniformBlockBinding(ue,Se,V.__bindingPointIndex),c.set(ue,Se))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ne=null,ie={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,b=null,y=null,v=null,C=null,R=null,L=new Je(0,0,0),z=0,T=!1,S=null,A=null,O=null,N=null,I=null,Oe.set(0,0,n.canvas.width,n.canvas.height),pt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:j,disable:se,bindFramebuffer:Ae,drawBuffers:Te,useProgram:nt,setBlending:_t,setMaterial:Ke,setFlipSided:qe,setCullFace:Ee,setLineWidth:wt,setPolygonOffset:Re,setScissorTest:it,activeTexture:Pt,bindTexture:St,unbindTexture:P,compressedTexImage2D:M,compressedTexImage3D:Y,texImage2D:Fe,texImage3D:le,updateUBOMapping:be,uniformBlockBinding:xe,texStorage2D:he,texStorage3D:ve,texSubImage2D:ee,texSubImage3D:oe,compressedTexSubImage2D:Q,compressedTexSubImage3D:Pe,scissor:ge,viewport:Be,reset:je}}function Wx(n,e,t,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new We,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,M){return f?new OffscreenCanvas(P,M):Zr("canvas")}function x(P,M,Y){let ee=1,oe=St(P);if((oe.width>Y||oe.height>Y)&&(ee=Y/Math.max(oe.width,oe.height)),ee<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Q=Math.floor(ee*oe.width),Pe=Math.floor(ee*oe.height);h===void 0&&(h=g(Q,Pe));let he=M?g(Q,Pe):h;return he.width=Q,he.height=Pe,he.getContext("2d").drawImage(P,0,0,Q,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+Q+"x"+Pe+")."),he}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){n.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(P,M,Y,ee,oe=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=M;if(M===n.RED&&(Y===n.FLOAT&&(Q=n.R32F),Y===n.HALF_FLOAT&&(Q=n.R16F),Y===n.UNSIGNED_BYTE&&(Q=n.R8)),M===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(Q=n.R8UI),Y===n.UNSIGNED_SHORT&&(Q=n.R16UI),Y===n.UNSIGNED_INT&&(Q=n.R32UI),Y===n.BYTE&&(Q=n.R8I),Y===n.SHORT&&(Q=n.R16I),Y===n.INT&&(Q=n.R32I)),M===n.RG&&(Y===n.FLOAT&&(Q=n.RG32F),Y===n.HALF_FLOAT&&(Q=n.RG16F),Y===n.UNSIGNED_BYTE&&(Q=n.RG8)),M===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(Q=n.RG8UI),Y===n.UNSIGNED_SHORT&&(Q=n.RG16UI),Y===n.UNSIGNED_INT&&(Q=n.RG32UI),Y===n.BYTE&&(Q=n.RG8I),Y===n.SHORT&&(Q=n.RG16I),Y===n.INT&&(Q=n.RG32I)),M===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),Y===n.UNSIGNED_INT&&(Q=n.RGB32UI),Y===n.BYTE&&(Q=n.RGB8I),Y===n.SHORT&&(Q=n.RGB16I),Y===n.INT&&(Q=n.RGB32I)),M===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),Y===n.UNSIGNED_INT&&(Q=n.RGBA32UI),Y===n.BYTE&&(Q=n.RGBA8I),Y===n.SHORT&&(Q=n.RGBA16I),Y===n.INT&&(Q=n.RGBA32I)),M===n.RGB&&(Y===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),M===n.RGBA){let Pe=oe?Hs:Et.getTransfer(ee);Y===n.FLOAT&&(Q=n.RGBA32F),Y===n.HALF_FLOAT&&(Q=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(Q=Pe===Ft?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(P,M){let Y;return P?M===null||M===Vi||M===us?Y=n.DEPTH24_STENCIL8:M===Qn?Y=n.DEPTH32F_STENCIL8:M===ls&&(Y=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Vi||M===us?Y=n.DEPTH_COMPONENT24:M===Qn?Y=n.DEPTH_COMPONENT32F:M===ls&&(Y=n.DEPTH_COMPONENT16),Y}function C(P,M){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==bn&&P.minFilter!==Jn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function R(P){let M=P.target;M.removeEventListener("dispose",R),z(M),M.isVideoTexture&&u.delete(M)}function L(P){let M=P.target;M.removeEventListener("dispose",L),S(M)}function z(P){let M=i.get(P);if(M.__webglInit===void 0)return;let Y=P.source,ee=d.get(Y);if(ee){let oe=ee[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&T(P),Object.keys(ee).length===0&&d.delete(Y)}i.remove(P)}function T(P){let M=i.get(P);n.deleteTexture(M.__webglTexture);let Y=P.source,ee=d.get(Y);delete ee[M.__cacheKey],a.memory.textures--}function S(P){let M=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let oe=0;oe<M.__webglFramebuffer[ee].length;oe++)n.deleteFramebuffer(M.__webglFramebuffer[ee][oe]);else n.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)n.deleteFramebuffer(M.__webglFramebuffer[ee]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let Y=P.textures;for(let ee=0,oe=Y.length;ee<oe;ee++){let Q=i.get(Y[ee]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(Y[ee])}i.remove(P)}let A=0;function O(){A=0}function N(){let P=A;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),A+=1,P}function I(P){let M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function U(P,M){let Y=i.get(P);if(P.isVideoTexture&&it(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Y.__version!==P.version){let ee=P.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(Y,P,M);return}}else P.isExternalTexture&&(Y.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+M)}function G(P,M){let Y=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){$(Y,P,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+M)}function X(P,M){let Y=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){$(Y,P,M);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+M)}function B(P,M){let Y=i.get(P);if(P.version>0&&Y.__version!==P.version){j(Y,P,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+M)}let ne={[Xr]:n.REPEAT,[Ui]:n.CLAMP_TO_EDGE,[$a]:n.MIRRORED_REPEAT},ie={[bn]:n.NEAREST,[Mh]:n.NEAREST_MIPMAP_NEAREST,[aa]:n.NEAREST_MIPMAP_LINEAR,[Jn]:n.LINEAR,[Po]:n.LINEAR_MIPMAP_NEAREST,[ki]:n.LINEAR_MIPMAP_LINEAR},ye={[Th]:n.NEVER,[Ph]:n.ALWAYS,[Ah]:n.LESS,[Nc]:n.LEQUAL,[Eh]:n.EQUAL,[Ih]:n.GEQUAL,[Ch]:n.GREATER,[Rh]:n.NOTEQUAL};function me(P,M){if(M.type===Qn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Jn||M.magFilter===Po||M.magFilter===aa||M.magFilter===ki||M.minFilter===Jn||M.minFilter===Po||M.minFilter===aa||M.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,ne[M.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ne[M.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ne[M.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,ie[M.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,ie[M.minFilter]),M.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,ye[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===bn||M.minFilter!==aa&&M.minFilter!==ki||M.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Oe(P,M){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",R));let ee=M.source,oe=d.get(ee);oe===void 0&&(oe={},d.set(ee,oe));let Q=I(M);if(Q!==P.__cacheKey){oe[Q]===void 0&&(oe[Q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),oe[Q].usedTimes++;let Pe=oe[P.__cacheKey];Pe!==void 0&&(oe[P.__cacheKey].usedTimes--,Pe.usedTimes===0&&T(M)),P.__cacheKey=Q,P.__webglTexture=oe[Q].texture}return Y}function pt(P,M,Y){return Math.floor(Math.floor(P/Y)/M)}function tt(P,M,Y,ee){let Q=P.updateRanges;if(Q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,Y,ee,M.data);else{Q.sort((le,ge)=>le.start-ge.start);let Pe=0;for(let le=1;le<Q.length;le++){let ge=Q[Pe],Be=Q[le],be=ge.start+ge.count,xe=pt(Be.start,M.width,4),je=pt(ge.start,M.width,4);Be.start<=be+1&&xe===je&&pt(Be.start+Be.count-1,M.width,4)===xe?ge.count=Math.max(ge.count,Be.start+Be.count-ge.start):(++Pe,Q[Pe]=Be)}Q.length=Pe+1;let he=n.getParameter(n.UNPACK_ROW_LENGTH),ve=n.getParameter(n.UNPACK_SKIP_PIXELS),Fe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let le=0,ge=Q.length;le<ge;le++){let Be=Q[le],be=Math.floor(Be.start/4),xe=Math.ceil(Be.count/4),je=be%M.width,V=Math.floor(be/M.width),ue=xe,pe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,je),n.pixelStorei(n.UNPACK_SKIP_ROWS,V),t.texSubImage2D(n.TEXTURE_2D,0,je,V,ue,pe,Y,ee,M.data)}P.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,he),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,Fe)}}function $(P,M,Y){let ee=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=n.TEXTURE_3D);let oe=Oe(P,M),Q=M.source;t.bindTexture(ee,P.__webglTexture,n.TEXTURE0+Y);let Pe=i.get(Q);if(Q.version!==Pe.__version||oe===!0){t.activeTexture(n.TEXTURE0+Y);let he=Et.getPrimaries(Et.workingColorSpace),ve=M.colorSpace===ei?null:Et.getPrimaries(M.colorSpace),Fe=M.colorSpace===ei||he===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let le=x(M.image,!1,r.maxTextureSize);le=Pt(M,le);let ge=s.convert(M.format,M.colorSpace),Be=s.convert(M.type),be=y(M.internalFormat,ge,Be,M.colorSpace,M.isVideoTexture);me(ee,M);let xe,je=M.mipmaps,V=M.isVideoTexture!==!0,ue=Pe.__version===void 0||oe===!0,pe=Q.dataReady,Se=C(M,le);if(M.isDepthTexture)be=v(M.format===hs,M.type),ue&&(V?t.texStorage2D(n.TEXTURE_2D,1,be,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,be,le.width,le.height,0,ge,Be,null));else if(M.isDataTexture)if(je.length>0){V&&ue&&t.texStorage2D(n.TEXTURE_2D,Se,be,je[0].width,je[0].height);for(let ae=0,te=je.length;ae<te;ae++)xe=je[ae],V?pe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,xe.width,xe.height,ge,Be,xe.data):t.texImage2D(n.TEXTURE_2D,ae,be,xe.width,xe.height,0,ge,Be,xe.data);M.generateMipmaps=!1}else V?(ue&&t.texStorage2D(n.TEXTURE_2D,Se,be,le.width,le.height),pe&&tt(M,le,ge,Be)):t.texImage2D(n.TEXTURE_2D,0,be,le.width,le.height,0,ge,Be,le.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){V&&ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,be,je[0].width,je[0].height,le.depth);for(let ae=0,te=je.length;ae<te;ae++)if(xe=je[ae],M.format!==Bn)if(ge!==null)if(V){if(pe)if(M.layerUpdates.size>0){let Ue=Gc(xe.width,xe.height,M.format,M.type);for(let Xe of M.layerUpdates){let ct=xe.data.subarray(Xe*Ue/xe.data.BYTES_PER_ELEMENT,(Xe+1)*Ue/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,Xe,xe.width,xe.height,1,ge,ct)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,xe.width,xe.height,le.depth,ge,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,be,xe.width,xe.height,le.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?pe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,xe.width,xe.height,le.depth,ge,Be,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,be,xe.width,xe.height,le.depth,0,ge,Be,xe.data)}else{V&&ue&&t.texStorage2D(n.TEXTURE_2D,Se,be,je[0].width,je[0].height);for(let ae=0,te=je.length;ae<te;ae++)xe=je[ae],M.format!==Bn?ge!==null?V?pe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,xe.width,xe.height,ge,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,be,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?pe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,xe.width,xe.height,ge,Be,xe.data):t.texImage2D(n.TEXTURE_2D,ae,be,xe.width,xe.height,0,ge,Be,xe.data)}else if(M.isDataArrayTexture)if(V){if(ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,be,le.width,le.height,le.depth),pe)if(M.layerUpdates.size>0){let ae=Gc(le.width,le.height,M.format,M.type);for(let te of M.layerUpdates){let Ue=le.data.subarray(te*ae/le.data.BYTES_PER_ELEMENT,(te+1)*ae/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,le.width,le.height,1,ge,Be,Ue)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ge,Be,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,le.width,le.height,le.depth,0,ge,Be,le.data);else if(M.isData3DTexture)V?(ue&&t.texStorage3D(n.TEXTURE_3D,Se,be,le.width,le.height,le.depth),pe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ge,Be,le.data)):t.texImage3D(n.TEXTURE_3D,0,be,le.width,le.height,le.depth,0,ge,Be,le.data);else if(M.isFramebufferTexture){if(ue)if(V)t.texStorage2D(n.TEXTURE_2D,Se,be,le.width,le.height);else{let ae=le.width,te=le.height;for(let Ue=0;Ue<Se;Ue++)t.texImage2D(n.TEXTURE_2D,Ue,be,ae,te,0,ge,Be,null),ae>>=1,te>>=1}}else if(je.length>0){if(V&&ue){let ae=St(je[0]);t.texStorage2D(n.TEXTURE_2D,Se,be,ae.width,ae.height)}for(let ae=0,te=je.length;ae<te;ae++)xe=je[ae],V?pe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ge,Be,xe):t.texImage2D(n.TEXTURE_2D,ae,be,ge,Be,xe);M.generateMipmaps=!1}else if(V){if(ue){let ae=St(le);t.texStorage2D(n.TEXTURE_2D,Se,be,ae.width,ae.height)}pe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Be,le)}else t.texImage2D(n.TEXTURE_2D,0,be,ge,Be,le);m(M)&&p(ee),Pe.__version=Q.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function j(P,M,Y){if(M.image.length!==6)return;let ee=Oe(P,M),oe=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+Y);let Q=i.get(oe);if(oe.version!==Q.__version||ee===!0){t.activeTexture(n.TEXTURE0+Y);let Pe=Et.getPrimaries(Et.workingColorSpace),he=M.colorSpace===ei?null:Et.getPrimaries(M.colorSpace),ve=M.colorSpace===ei||Pe===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Fe=M.isCompressedTexture||M.image[0].isCompressedTexture,le=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let te=0;te<6;te++)!Fe&&!le?ge[te]=x(M.image[te],!0,r.maxCubemapSize):ge[te]=le?M.image[te].image:M.image[te],ge[te]=Pt(M,ge[te]);let Be=ge[0],be=s.convert(M.format,M.colorSpace),xe=s.convert(M.type),je=y(M.internalFormat,be,xe,M.colorSpace),V=M.isVideoTexture!==!0,ue=Q.__version===void 0||ee===!0,pe=oe.dataReady,Se=C(M,Be);me(n.TEXTURE_CUBE_MAP,M);let ae;if(Fe){V&&ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,je,Be.width,Be.height);for(let te=0;te<6;te++){ae=ge[te].mipmaps;for(let Ue=0;Ue<ae.length;Ue++){let Xe=ae[Ue];M.format!==Bn?be!==null?V?pe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue,0,0,Xe.width,Xe.height,be,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue,je,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue,0,0,Xe.width,Xe.height,be,xe,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue,je,Xe.width,Xe.height,0,be,xe,Xe.data)}}}else{if(ae=M.mipmaps,V&&ue){ae.length>0&&Se++;let te=St(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,je,te.width,te.height)}for(let te=0;te<6;te++)if(le){V?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ge[te].width,ge[te].height,be,xe,ge[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,je,ge[te].width,ge[te].height,0,be,xe,ge[te].data);for(let Ue=0;Ue<ae.length;Ue++){let ct=ae[Ue].image[te].image;V?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue+1,0,0,ct.width,ct.height,be,xe,ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue+1,je,ct.width,ct.height,0,be,xe,ct.data)}}else{V?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,be,xe,ge[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,je,be,xe,ge[te]);for(let Ue=0;Ue<ae.length;Ue++){let Xe=ae[Ue];V?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue+1,0,0,be,xe,Xe.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue+1,je,be,xe,Xe.image[te])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),Q.__version=oe.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function se(P,M,Y,ee,oe,Q){let Pe=s.convert(Y.format,Y.colorSpace),he=s.convert(Y.type),ve=y(Y.internalFormat,Pe,he,Y.colorSpace),Fe=i.get(M),le=i.get(Y);if(le.__renderTarget=M,!Fe.__hasExternalTextures){let ge=Math.max(1,M.width>>Q),Be=Math.max(1,M.height>>Q);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,Q,ve,ge,Be,M.depth,0,Pe,he,null):t.texImage2D(oe,Q,ve,ge,Be,0,Pe,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Re(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,oe,le.__webglTexture,0,wt(M)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,oe,le.__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(P,M,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,P),M.depthBuffer){let ee=M.depthTexture,oe=ee&&ee.isDepthTexture?ee.type:null,Q=v(M.stencilBuffer,oe),Pe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=wt(M);Re(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,Q,M.width,M.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,Q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Q,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pe,n.RENDERBUFFER,P)}else{let ee=M.textures;for(let oe=0;oe<ee.length;oe++){let Q=ee[oe],Pe=s.convert(Q.format,Q.colorSpace),he=s.convert(Q.type),ve=y(Q.internalFormat,Pe,he,Q.colorSpace),Fe=wt(M);Y&&Re(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,ve,M.width,M.height):Re(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,ve,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ve,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=i.get(M.depthTexture);ee.__renderTarget=M,(!ee.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),U(M.depthTexture,0);let oe=ee.__webglTexture,Q=wt(M);if(M.depthTexture.format===qr)Re(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0);else if(M.depthTexture.format===hs)Re(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function nt(P){let M=i.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){let ee=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ee){let oe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ee.removeEventListener("dispose",oe)};ee.addEventListener("dispose",oe),M.__depthDisposeCallback=oe}M.__boundDepthTexture=ee}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");let ee=P.texture.mipmaps;ee&&ee.length>0?Te(M.__webglFramebuffer[0],P):Te(M.__webglFramebuffer,P)}else if(Y){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]===void 0)M.__webglDepthbuffer[ee]=n.createRenderbuffer(),Ae(M.__webglDepthbuffer[ee],P,!1);else{let oe=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,Q)}}else{let ee=P.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Ae(M.__webglDepthbuffer,P,!1);else{let oe=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,Q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(P,M,Y){let ee=i.get(P);M!==void 0&&se(ee.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&nt(P)}function D(P){let M=P.texture,Y=i.get(P),ee=i.get(M);P.addEventListener("dispose",L);let oe=P.textures,Q=P.isWebGLCubeRenderTarget===!0,Pe=oe.length>1;if(Pe||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=M.version,a.memory.textures++),Q){Y.__webglFramebuffer=[];for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[he]=[];for(let ve=0;ve<M.mipmaps.length;ve++)Y.__webglFramebuffer[he][ve]=n.createFramebuffer()}else Y.__webglFramebuffer[he]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)Y.__webglFramebuffer[he]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Pe)for(let he=0,ve=oe.length;he<ve;he++){let Fe=i.get(oe[he]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&Re(P)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let he=0;he<oe.length;he++){let ve=oe[he];Y.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[he]);let Fe=s.convert(ve.format,ve.colorSpace),le=s.convert(ve.type),ge=y(ve.internalFormat,Fe,le,ve.colorSpace,P.isXRRenderTarget===!0),Be=wt(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,ge,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,Y.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),Ae(Y.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),me(n.TEXTURE_CUBE_MAP,M);for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)se(Y.__webglFramebuffer[he][ve],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ve);else se(Y.__webglFramebuffer[he],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let he=0,ve=oe.length;he<ve;he++){let Fe=oe[he],le=i.get(Fe),ge=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ge=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,le.__webglTexture),me(ge,Fe),se(Y.__webglFramebuffer,P,Fe,n.COLOR_ATTACHMENT0+he,ge,0),m(Fe)&&p(ge)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(he=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,ee.__webglTexture),me(he,M),M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)se(Y.__webglFramebuffer[ve],P,M,n.COLOR_ATTACHMENT0,he,ve);else se(Y.__webglFramebuffer,P,M,n.COLOR_ATTACHMENT0,he,0);m(M)&&p(he),t.unbindTexture()}P.depthBuffer&&nt(P)}function _t(P){let M=P.textures;for(let Y=0,ee=M.length;Y<ee;Y++){let oe=M[Y];if(m(oe)){let Q=b(P),Pe=i.get(oe).__webglTexture;t.bindTexture(Q,Pe),p(Q),t.unbindTexture()}}}let Ke=[],qe=[];function Ee(P){if(P.samples>0){if(Re(P)===!1){let M=P.textures,Y=P.width,ee=P.height,oe=n.COLOR_BUFFER_BIT,Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=i.get(P),he=M.length>1;if(he)for(let Fe=0;Fe<M.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);let ve=P.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Fe=0;Fe<M.length;Fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Fe]);let le=i.get(M[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,Y,ee,0,0,Y,ee,oe,n.NEAREST),c===!0&&(Ke.length=0,qe.length=0,Ke.push(n.COLOR_ATTACHMENT0+Fe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ke.push(Q),qe.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,qe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Fe=0;Fe<M.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Fe]);let le=i.get(M[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let M=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function wt(P){return Math.min(r.maxSamples,P.samples)}function Re(P){let M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function it(P){let M=a.render.frame;u.get(P)!==M&&(u.set(P,M),P.update())}function Pt(P,M){let Y=P.colorSpace,ee=P.format,oe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==ir&&Y!==ei&&(Et.getTransfer(Y)===Ft?(ee!==Bn||oe!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),M}function St(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=O,this.setTexture2D=U,this.setTexture2DArray=G,this.setTexture3D=X,this.setTextureCube=B,this.rebindTextures=ot,this.setupRenderTarget=D,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Re}function Xx(n,e){function t(i,r=ei){let s,a=Et.getTransfer(r);if(i===jn)return n.UNSIGNED_BYTE;if(i===Lo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Uo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Rc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ic)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ec)return n.BYTE;if(i===Cc)return n.SHORT;if(i===ls)return n.UNSIGNED_SHORT;if(i===Do)return n.INT;if(i===Vi)return n.UNSIGNED_INT;if(i===Qn)return n.FLOAT;if(i===cs)return n.HALF_FLOAT;if(i===Pc)return n.ALPHA;if(i===Dc)return n.RGB;if(i===Bn)return n.RGBA;if(i===qr)return n.DEPTH_COMPONENT;if(i===hs)return n.DEPTH_STENCIL;if(i===No)return n.RED;if(i===Fo)return n.RED_INTEGER;if(i===Lc)return n.RG;if(i===zo)return n.RG_INTEGER;if(i===Oo)return n.RGBA_INTEGER;if(i===oa||i===la||i===ca||i===ua)if(a===Ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===oa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===oa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===la)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ca)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ua)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bo||i===ko||i===Vo||i===Go)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ko)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Go)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ho||i===Wo||i===Xo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ho||i===Wo)return a===Ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Xo)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qo||i===Yo||i===Zo||i===Jo||i===$o||i===Ko||i===jo||i===Qo||i===el||i===tl||i===nl||i===il||i===rl||i===sl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qo)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yo)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zo)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jo)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$o)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ko)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jo)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qo)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===el)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tl)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nl)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===il)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rl)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sl)return a===Ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===al||i===ol||i===ll)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===al)return a===Ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ol)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ll)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cl||i===ul||i===hl||i===dl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===cl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ul)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===us?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var qx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yx=`
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

}`,tu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Qs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new wn({vertexShader:qx,fragmentShader:Yx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new Ln(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nu=class extends yi{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new tu,p={},b=t.getContextAttributes(),y=null,v=null,C=[],R=[],L=new We,z=null,T=new Qt;T.viewport=new Ct;let S=new Qt;S.viewport=new Ct;let A=[T,S],O=new Mo,N=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let j=C[$];return j===void 0&&(j=new Qr,C[$]=j),j.getTargetRaySpace()},this.getControllerGrip=function($){let j=C[$];return j===void 0&&(j=new Qr,C[$]=j),j.getGripSpace()},this.getHand=function($){let j=C[$];return j===void 0&&(j=new Qr,C[$]=j),j.getHandSpace()};function U($){let j=R.indexOf($.inputSource);if(j===-1)return;let se=C[j];se!==void 0&&(se.update($.inputSource,$.frame,l||a),se.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",X);for(let $=0;$<C.length;$++){let j=R[$];j!==null&&(R[$]=null,C[$].disconnect(j))}N=null,I=null,m.reset();for(let $ in p)delete p[$];e.setRenderTarget(y),f=null,d=null,h=null,r=null,v=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(z),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",G),r.addEventListener("inputsourceschange",X),b.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Ae=null,Te=null;b.depth&&(Te=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=b.stencil?hs:qr,Ae=b.stencil?us:Vi);let nt={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(nt),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new ri(d.textureWidth,d.textureHeight,{format:Bn,type:jn,depthTexture:new js(d.textureWidth,d.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let se={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ri(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),tt.setContext(r),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X($){for(let j=0;j<$.removed.length;j++){let se=$.removed[j],Ae=R.indexOf(se);Ae>=0&&(R[Ae]=null,C[Ae].disconnect(se))}for(let j=0;j<$.added.length;j++){let se=$.added[j],Ae=R.indexOf(se);if(Ae===-1){for(let nt=0;nt<C.length;nt++)if(nt>=R.length){R.push(se),Ae=nt;break}else if(R[nt]===null){R[nt]=se,Ae=nt;break}if(Ae===-1)break}let Te=C[Ae];Te&&Te.connect(se)}}let B=new k,ne=new k;function ie($,j,se){B.setFromMatrixPosition(j.matrixWorld),ne.setFromMatrixPosition(se.matrixWorld);let Ae=B.distanceTo(ne),Te=j.projectionMatrix.elements,nt=se.projectionMatrix.elements,ot=Te[14]/(Te[10]-1),D=Te[14]/(Te[10]+1),_t=(Te[9]+1)/Te[5],Ke=(Te[9]-1)/Te[5],qe=(Te[8]-1)/Te[0],Ee=(nt[8]+1)/nt[0],wt=ot*qe,Re=ot*Ee,it=Ae/(-qe+Ee),Pt=it*-qe;if(j.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Pt),$.translateZ(it),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Te[10]===-1)$.projectionMatrix.copy(j.projectionMatrix),$.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let St=ot+it,P=D+it,M=wt-Pt,Y=Re+(Ae-Pt),ee=_t*D/P*St,oe=Ke*D/P*St;$.projectionMatrix.makePerspective(M,Y,ee,oe,St,P),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ye($,j){j===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(j.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let j=$.near,se=$.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(se=m.depthFar)),O.near=S.near=T.near=j,O.far=S.far=T.far=se,(N!==O.near||I!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),N=O.near,I=O.far),O.layers.mask=$.layers.mask|6,T.layers.mask=O.layers.mask&3,S.layers.mask=O.layers.mask&5;let Ae=$.parent,Te=O.cameras;ye(O,Ae);for(let nt=0;nt<Te.length;nt++)ye(Te[nt],Ae);Te.length===2?ie(O,T,S):O.projectionMatrix.copy(T.projectionMatrix),me($,O,Ae)};function me($,j,se){se===null?$.matrix.copy(j.matrixWorld):($.matrix.copy(se.matrixWorld),$.matrix.invert(),$.matrix.multiply(j.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(j.projectionMatrix),$.projectionMatrixInverse.copy(j.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Yr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function($){return p[$]};let Oe=null;function pt($,j){if(u=j.getViewerPose(l||a),g=j,u!==null){let se=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ae=!1;se.length!==O.cameras.length&&(O.cameras.length=0,Ae=!0);for(let D=0;D<se.length;D++){let _t=se[D],Ke=null;if(f!==null)Ke=f.getViewport(_t);else{let Ee=h.getViewSubImage(d,_t);Ke=Ee.viewport,D===0&&(e.setRenderTargetTextures(v,Ee.colorTexture,Ee.depthStencilTexture),e.setRenderTarget(v))}let qe=A[D];qe===void 0&&(qe=new Qt,qe.layers.enable(D),qe.viewport=new Ct,A[D]=qe),qe.matrix.fromArray(_t.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(_t.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),D===0&&(O.matrix.copy(qe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ae===!0&&O.cameras.push(qe)}let Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let D=h.getDepthInformation(se[0]);D&&D.isValid&&D.texture&&m.init(D,r.renderState)}if(Te&&Te.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let D=0;D<se.length;D++){let _t=se[D].camera;if(_t){let Ke=p[_t];Ke||(Ke=new Qs,p[_t]=Ke);let qe=h.getCameraImage(_t);Ke.sourceTexture=qe}}}}for(let se=0;se<C.length;se++){let Ae=R[se],Te=C[se];Ae!==null&&Te!==void 0&&Te.update(Ae,j,l||a)}Oe&&Oe($,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let tt=new ad;tt.setAnimationLoop(pt),this.setAnimationLoop=function($){Oe=$},this.dispose=function(){}}},_r=new $n,Zx=new Dt;function Jx(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Bc(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,b,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===hn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===hn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),y=b.envMap,v=b.envMapRotation;y&&(m.envMap.value=y,_r.copy(v),_r.x*=-1,_r.y*=-1,_r.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),m.envMapRotation.value.setFromMatrix4(Zx.makeRotationFromEuler(_r)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function $x(n,e,t,i){let r={},s={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,y){let v=y.program;i.uniformBlockBinding(b,v)}function l(b,y){let v=r[b.id];v===void 0&&(g(b),v=u(b),r[b.id]=v,b.addEventListener("dispose",m));let C=y.program;i.updateUBOMapping(b,C);let R=e.render.frame;s[b.id]!==R&&(d(b),s[b.id]=R)}function u(b){let y=h();b.__bindingPointIndex=y;let v=n.createBuffer(),C=b.__size,R=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,C,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let y=r[b.id],v=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let R=0,L=v.length;R<L;R++){let z=Array.isArray(v[R])?v[R]:[v[R]];for(let T=0,S=z.length;T<S;T++){let A=z[T];if(f(A,R,T,C)===!0){let O=A.__offset,N=Array.isArray(A.value)?A.value:[A.value],I=0;for(let U=0;U<N.length;U++){let G=N[U],X=x(G);typeof G=="number"||typeof G=="boolean"?(A.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,O+I,A.__data)):G.isMatrix3?(A.__data[0]=G.elements[0],A.__data[1]=G.elements[1],A.__data[2]=G.elements[2],A.__data[3]=0,A.__data[4]=G.elements[3],A.__data[5]=G.elements[4],A.__data[6]=G.elements[5],A.__data[7]=0,A.__data[8]=G.elements[6],A.__data[9]=G.elements[7],A.__data[10]=G.elements[8],A.__data[11]=0):(G.toArray(A.__data,I),I+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,y,v,C){let R=b.value,L=y+"_"+v;if(C[L]===void 0)return typeof R=="number"||typeof R=="boolean"?C[L]=R:C[L]=R.clone(),!0;{let z=C[L];if(typeof R=="number"||typeof R=="boolean"){if(z!==R)return C[L]=R,!0}else if(z.equals(R)===!1)return z.copy(R),!0}return!1}function g(b){let y=b.uniforms,v=0,C=16;for(let L=0,z=y.length;L<z;L++){let T=Array.isArray(y[L])?y[L]:[y[L]];for(let S=0,A=T.length;S<A;S++){let O=T[S],N=Array.isArray(O.value)?O.value:[O.value];for(let I=0,U=N.length;I<U;I++){let G=N[I],X=x(G),B=v%C,ne=B%X.boundary,ie=B+ne;v+=ne,ie!==0&&C-ie<X.storage&&(v+=C-ie),O.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=X.storage}}}let R=v%C;return R>0&&(v+=C-R),b.__size=v,b.__cache={},this}function x(b){let y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function m(b){let y=b.target;y.removeEventListener("dispose",m);let v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(let b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}var ms=class{constructor(e={}){let{canvas:t=Dh(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,b=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,C=!1;this._outputColorSpace=Yt;let R=0,L=0,z=null,T=-1,S=null,A=new Ct,O=new Ct,N=null,I=new Je(0),U=0,G=t.width,X=t.height,B=1,ne=null,ie=null,ye=new Ct(0,0,G,X),me=new Ct(0,0,G,X),Oe=!1,pt=new is,tt=!1,$=!1,j=new Dt,se=new k,Ae=new Ct,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function ot(){return z===null?B:1}let D=i;function _t(w,W){return t.getContext(w,W)}try{let w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",ae,!1),D===null){let W="webgl2";if(D=_t(W,w),D===null)throw _t(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ke,qe,Ee,wt,Re,it,Pt,St,P,M,Y,ee,oe,Q,Pe,he,ve,Fe,le,ge,Be,be,xe,je;function V(){Ke=new p0(D),Ke.init(),be=new Xx(D,Ke),qe=new o0(D,Ke,e,be),Ee=new Hx(D,Ke),qe.reversedDepthBuffer&&d&&Ee.buffers.depth.setReversed(!0),wt=new x0(D),Re=new Ix,it=new Wx(D,Ke,Ee,Re,qe,be,wt),Pt=new c0(v),St=new f0(v),P=new Sp(D),xe=new s0(D,P),M=new m0(D,P,wt,xe),Y=new y0(D,M,P,wt),le=new _0(D,qe,it),he=new l0(Re),ee=new Rx(v,Pt,St,Ke,qe,xe,he),oe=new Jx(v,Re),Q=new Dx,Pe=new Ox(Ke),Fe=new r0(v,Pt,St,Ee,Y,f,c),ve=new Vx(v,Y,qe),je=new $x(D,wt,qe,Ee),ge=new a0(D,Ke,wt),Be=new g0(D,Ke,wt),wt.programs=ee.programs,v.capabilities=qe,v.extensions=Ke,v.properties=Re,v.renderLists=Q,v.shadowMap=ve,v.state=Ee,v.info=wt}V();let ue=new nu(v,D);this.xr=ue,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=Ke.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ke.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(w){w!==void 0&&(B=w,this.setSize(G,X,!1))},this.getSize=function(w){return w.set(G,X)},this.setSize=function(w,W,J=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,X=W,t.width=Math.floor(w*B),t.height=Math.floor(W*B),J===!0&&(t.style.width=w+"px",t.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(G*B,X*B).floor()},this.setDrawingBufferSize=function(w,W,J){G=w,X=W,B=J,t.width=Math.floor(w*J),t.height=Math.floor(W*J),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(ye)},this.setViewport=function(w,W,J,K){w.isVector4?ye.set(w.x,w.y,w.z,w.w):ye.set(w,W,J,K),Ee.viewport(A.copy(ye).multiplyScalar(B).round())},this.getScissor=function(w){return w.copy(me)},this.setScissor=function(w,W,J,K){w.isVector4?me.set(w.x,w.y,w.z,w.w):me.set(w,W,J,K),Ee.scissor(O.copy(me).multiplyScalar(B).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(w){Ee.setScissorTest(Oe=w)},this.setOpaqueSort=function(w){ne=w},this.setTransparentSort=function(w){ie=w},this.getClearColor=function(w){return w.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,J=!0){let K=0;if(w){let q=!1;if(z!==null){let re=z.texture.format;q=re===Oo||re===zo||re===Fo}if(q){let re=z.texture.type,_e=re===jn||re===Vi||re===ls||re===us||re===Lo||re===Uo,Ie=Fe.getClearColor(),Ce=Fe.getClearAlpha(),De=Ie.r,Ye=Ie.g,Ge=Ie.b;_e?(g[0]=De,g[1]=Ye,g[2]=Ge,g[3]=Ce,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=De,x[1]=Ye,x[2]=Ge,x[3]=Ce,D.clearBufferiv(D.COLOR,0,x))}else K|=D.COLOR_BUFFER_BIT}W&&(K|=D.DEPTH_BUFFER_BIT),J&&(K|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Fe.dispose(),Q.dispose(),Pe.dispose(),Re.dispose(),Pt.dispose(),St.dispose(),Y.dispose(),xe.dispose(),je.dispose(),ee.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",cn),ue.removeEventListener("sessionend",Wi),vn.stop()};function pe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let w=wt.autoReset,W=ve.enabled,J=ve.autoUpdate,K=ve.needsUpdate,q=ve.type;V(),wt.autoReset=w,ve.enabled=W,ve.autoUpdate=J,ve.needsUpdate=K,ve.type=q}function ae(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function te(w){let W=w.target;W.removeEventListener("dispose",te),Ue(W)}function Ue(w){Xe(w),Re.remove(w)}function Xe(w){let W=Re.get(w).programs;W!==void 0&&(W.forEach(function(J){ee.releaseProgram(J)}),w.isShaderMaterial&&ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,J,K,q,re){W===null&&(W=Te);let _e=q.isMesh&&q.matrixWorld.determinant()<0,Ie=Yi(w,W,J,K,q);Ee.setMaterial(K,_e);let Ce=J.index,De=1;if(K.wireframe===!0){if(Ce=M.getWireframeAttribute(J),Ce===void 0)return;De=2}let Ye=J.drawRange,Ge=J.attributes.position,rt=Ye.start*De,Tt=(Ye.start+Ye.count)*De;re!==null&&(rt=Math.max(rt,re.start*De),Tt=Math.min(Tt,(re.start+re.count)*De)),Ce!==null?(rt=Math.max(rt,0),Tt=Math.min(Tt,Ce.count)):Ge!=null&&(rt=Math.max(rt,0),Tt=Math.min(Tt,Ge.count));let Bt=Tt-rt;if(Bt<0||Bt===1/0)return;xe.setup(q,K,Ie,J,Ce);let mt,Mt=ge;if(Ce!==null&&(mt=P.get(Ce),Mt=Be,Mt.setIndex(mt)),q.isMesh)K.wireframe===!0?(Ee.setLineWidth(K.wireframeLinewidth*ot()),Mt.setMode(D.LINES)):Mt.setMode(D.TRIANGLES);else if(q.isLine){let Le=K.linewidth;Le===void 0&&(Le=1),Ee.setLineWidth(Le*ot()),q.isLineSegments?Mt.setMode(D.LINES):q.isLineLoop?Mt.setMode(D.LINE_LOOP):Mt.setMode(D.LINE_STRIP)}else q.isPoints?Mt.setMode(D.POINTS):q.isSprite&&Mt.setMode(D.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Jr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))Mt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Le=q._multiDrawStarts,Ut=q._multiDrawCounts,Qe=q._multiDrawCount,Ht=Ce?P.get(Ce).bytesPerElement:1,Ot=Re.get(K).currentProgram.getUniforms();for(let Jt=0;Jt<Qe;Jt++)Ot.setValue(D,"_gl_DrawID",Jt),Mt.render(Le[Jt]/Ht,Ut[Jt])}else if(q.isInstancedMesh)Mt.renderInstances(rt,Bt,q.count);else if(J.isInstancedBufferGeometry){let Le=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ut=Math.min(J.instanceCount,Le);Mt.renderInstances(rt,Bt,Ut)}else Mt.render(rt,Bt)};function ct(w,W,J){w.transparent===!0&&w.side===Gt&&w.forceSinglePass===!1?(w.side=hn,w.needsUpdate=!0,Cn(w,W,J),w.side=_i,w.needsUpdate=!0,Cn(w,W,J),w.side=Gt):Cn(w,W,J)}this.compile=function(w,W,J=null){J===null&&(J=w),p=Pe.get(J),p.init(W),y.push(p),J.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),w!==J&&w.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();let K=new Set;return w.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let re=q.material;if(re)if(Array.isArray(re))for(let _e=0;_e<re.length;_e++){let Ie=re[_e];ct(Ie,J,q),K.add(Ie)}else ct(re,J,q),K.add(re)}),p=y.pop(),K},this.compileAsync=function(w,W,J=null){let K=this.compile(w,W,J);return new Promise(q=>{function re(){if(K.forEach(function(_e){Re.get(_e).currentProgram.isReady()&&K.delete(_e)}),K.size===0){q(w);return}setTimeout(re,10)}Ke.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let ut=null;function ln(w){ut&&ut(w)}function cn(){vn.stop()}function Wi(){vn.start()}let vn=new ad;vn.setAnimationLoop(ln),typeof self<"u"&&vn.setContext(self),this.setAnimationLoop=function(w){ut=w,ue.setAnimationLoop(w),w===null?vn.stop():vn.start()},ue.addEventListener("sessionstart",cn),ue.addEventListener("sessionend",Wi),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(W),W=ue.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,W,z),p=Pe.get(w,y.length),p.init(W),y.push(p),j.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),pt.setFromProjectionMatrix(j,Zn,W.reversedDepth),$=this.localClippingEnabled,tt=he.init(this.clippingPlanes,$),m=Q.get(w,b.length),m.init(),b.push(m),ue.enabled===!0&&ue.isPresenting===!0){let re=v.xr.getDepthSensingMesh();re!==null&&Ti(re,W,-1/0,v.sortObjects)}Ti(w,W,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ne,ie),nt=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,nt&&Fe.addToRenderList(m,w),this.info.render.frame++,tt===!0&&he.beginShadows();let J=p.state.shadowsArray;ve.render(J,w,W),tt===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=m.opaque,q=m.transmissive;if(p.setupLights(),W.isArrayCamera){let re=W.cameras;if(q.length>0)for(let _e=0,Ie=re.length;_e<Ie;_e++){let Ce=re[_e];kn(K,q,w,Ce)}nt&&Fe.render(w);for(let _e=0,Ie=re.length;_e<Ie;_e++){let Ce=re[_e];wr(m,w,Ce,Ce.viewport)}}else q.length>0&&kn(K,q,w,W),nt&&Fe.render(w),wr(m,w,W);z!==null&&L===0&&(it.updateMultisampleRenderTarget(z),it.updateRenderTargetMipmap(z)),w.isScene===!0&&w.onAfterRender(v,w,W),xe.resetDefaultState(),T=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],tt===!0&&he.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Ti(w,W,J,K){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||pt.intersectsSprite(w)){K&&Ae.setFromMatrixPosition(w.matrixWorld).applyMatrix4(j);let _e=Y.update(w),Ie=w.material;Ie.visible&&m.push(w,_e,Ie,J,Ae.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||pt.intersectsObject(w))){let _e=Y.update(w),Ie=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ae.copy(w.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ae.copy(_e.boundingSphere.center)),Ae.applyMatrix4(w.matrixWorld).applyMatrix4(j)),Array.isArray(Ie)){let Ce=_e.groups;for(let De=0,Ye=Ce.length;De<Ye;De++){let Ge=Ce[De],rt=Ie[Ge.materialIndex];rt&&rt.visible&&m.push(w,_e,rt,J,Ae.z,Ge)}}else Ie.visible&&m.push(w,_e,Ie,J,Ae.z,null)}}let re=w.children;for(let _e=0,Ie=re.length;_e<Ie;_e++)Ti(re[_e],W,J,K)}function wr(w,W,J,K){let q=w.opaque,re=w.transmissive,_e=w.transparent;p.setupLightsView(J),tt===!0&&he.setGlobalState(v.clippingPlanes,J),K&&Ee.viewport(A.copy(K)),q.length>0&&En(q,W,J),re.length>0&&En(re,W,J),_e.length>0&&En(_e,W,J),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function kn(w,W,J,K){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new ri(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?cs:jn,minFilter:ki,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));let re=p.state.transmissionRenderTarget[K.id],_e=K.viewport||A;re.setSize(_e.z*v.transmissionResolutionScale,_e.w*v.transmissionResolutionScale);let Ie=v.getRenderTarget(),Ce=v.getActiveCubeFace(),De=v.getActiveMipmapLevel();v.setRenderTarget(re),v.getClearColor(I),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear(),nt&&Fe.render(J);let Ye=v.toneMapping;v.toneMapping=wi;let Ge=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),tt===!0&&he.setGlobalState(v.clippingPlanes,K),En(w,J,K),it.updateMultisampleRenderTarget(re),it.updateRenderTargetMipmap(re),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Tt=0,Bt=W.length;Tt<Bt;Tt++){let mt=W[Tt],Mt=mt.object,Le=mt.geometry,Ut=mt.material,Qe=mt.group;if(Ut.side===Gt&&Mt.layers.test(K.layers)){let Ht=Ut.side;Ut.side=hn,Ut.needsUpdate=!0,Xi(Mt,J,K,Le,Ut,Qe),Ut.side=Ht,Ut.needsUpdate=!0,rt=!0}}rt===!0&&(it.updateMultisampleRenderTarget(re),it.updateRenderTargetMipmap(re))}v.setRenderTarget(Ie,Ce,De),v.setClearColor(I,U),Ge!==void 0&&(K.viewport=Ge),v.toneMapping=Ye}function En(w,W,J){let K=W.isScene===!0?W.overrideMaterial:null;for(let q=0,re=w.length;q<re;q++){let _e=w[q],Ie=_e.object,Ce=_e.geometry,De=_e.group,Ye=_e.material;Ye.allowOverride===!0&&K!==null&&(Ye=K),Ie.layers.test(J.layers)&&Xi(Ie,W,J,Ce,Ye,De)}}function Xi(w,W,J,K,q,re){w.onBeforeRender(v,W,J,K,q,re),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(v,W,J,K,w,re),q.transparent===!0&&q.side===Gt&&q.forceSinglePass===!1?(q.side=hn,q.needsUpdate=!0,v.renderBufferDirect(J,W,K,q,w,re),q.side=_i,q.needsUpdate=!0,v.renderBufferDirect(J,W,K,q,w,re),q.side=Gt):v.renderBufferDirect(J,W,K,q,w,re),w.onAfterRender(v,W,J,K,q,re)}function Cn(w,W,J){W.isScene!==!0&&(W=Te);let K=Re.get(w),q=p.state.lights,re=p.state.shadowsArray,_e=q.state.version,Ie=ee.getParameters(w,q.state,re,W,J),Ce=ee.getProgramCacheKey(Ie),De=K.programs;K.environment=w.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(w.isMeshStandardMaterial?St:Pt).get(w.envMap||K.environment),K.envMapRotation=K.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,De===void 0&&(w.addEventListener("dispose",te),De=new Map,K.programs=De);let Ye=De.get(Ce);if(Ye!==void 0){if(K.currentProgram===Ye&&K.lightsStateVersion===_e)return Vn(w,Ie),Ye}else Ie.uniforms=ee.getUniforms(w),w.onBeforeCompile(Ie,v),Ye=ee.acquireProgram(Ie,Ce),De.set(Ce,Ye),K.uniforms=Ie.uniforms;let Ge=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ge.clippingPlanes=he.uniform),Vn(w,Ie),K.needsLights=Ai(w),K.lightsStateVersion=_e,K.needsLights&&(Ge.ambientLightColor.value=q.state.ambient,Ge.lightProbe.value=q.state.probe,Ge.directionalLights.value=q.state.directional,Ge.directionalLightShadows.value=q.state.directionalShadow,Ge.spotLights.value=q.state.spot,Ge.spotLightShadows.value=q.state.spotShadow,Ge.rectAreaLights.value=q.state.rectArea,Ge.ltc_1.value=q.state.rectAreaLTC1,Ge.ltc_2.value=q.state.rectAreaLTC2,Ge.pointLights.value=q.state.point,Ge.pointLightShadows.value=q.state.pointShadow,Ge.hemisphereLights.value=q.state.hemi,Ge.directionalShadowMap.value=q.state.directionalShadowMap,Ge.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ge.spotShadowMap.value=q.state.spotShadowMap,Ge.spotLightMatrix.value=q.state.spotLightMatrix,Ge.spotLightMap.value=q.state.spotLightMap,Ge.pointShadowMap.value=q.state.pointShadowMap,Ge.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=Ye,K.uniformsList=null,Ye}function qi(w){if(w.uniformsList===null){let W=w.currentProgram.getUniforms();w.uniformsList=ps.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function Vn(w,W){let J=Re.get(w);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.batchingColor=W.batchingColor,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.instancingMorph=W.instancingMorph,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function Yi(w,W,J,K,q){W.isScene!==!0&&(W=Te),it.resetTextureUnits();let re=W.fog,_e=K.isMeshStandardMaterial?W.environment:null,Ie=z===null?v.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ir,Ce=(K.isMeshStandardMaterial?St:Pt).get(K.envMap||_e),De=K.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ye=!!J.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ge=!!J.morphAttributes.position,rt=!!J.morphAttributes.normal,Tt=!!J.morphAttributes.color,Bt=wi;K.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Bt=v.toneMapping);let mt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Mt=mt!==void 0?mt.length:0,Le=Re.get(K),Ut=p.state.lights;if(tt===!0&&($===!0||w!==S)){let Wt=w===S&&K.id===T;he.setState(K,w,Wt)}let Qe=!1;K.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Ut.state.version||Le.outputColorSpace!==Ie||q.isBatchedMesh&&Le.batching===!1||!q.isBatchedMesh&&Le.batching===!0||q.isBatchedMesh&&Le.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Le.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Le.instancing===!1||!q.isInstancedMesh&&Le.instancing===!0||q.isSkinnedMesh&&Le.skinning===!1||!q.isSkinnedMesh&&Le.skinning===!0||q.isInstancedMesh&&Le.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Le.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Le.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Le.instancingMorph===!1&&q.morphTexture!==null||Le.envMap!==Ce||K.fog===!0&&Le.fog!==re||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==he.numPlanes||Le.numIntersection!==he.numIntersection)||Le.vertexAlphas!==De||Le.vertexTangents!==Ye||Le.morphTargets!==Ge||Le.morphNormals!==rt||Le.morphColors!==Tt||Le.toneMapping!==Bt||Le.morphTargetsCount!==Mt)&&(Qe=!0):(Qe=!0,Le.__version=K.version);let Ht=Le.currentProgram;Qe===!0&&(Ht=Cn(K,W,q));let Ot=!1,Jt=!1,ni=!1,gt=Ht.getUniforms(),rn=Le.uniforms;if(Ee.useProgram(Ht.program)&&(Ot=!0,Jt=!0,ni=!0),K.id!==T&&(T=K.id,Jt=!0),Ot||S!==w){Ee.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),gt.setValue(D,"projectionMatrix",w.projectionMatrix),gt.setValue(D,"viewMatrix",w.matrixWorldInverse);let qt=gt.map.cameraPosition;qt!==void 0&&qt.setValue(D,se.setFromMatrixPosition(w.matrixWorld)),qe.logarithmicDepthBuffer&&gt.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&gt.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,Jt=!0,ni=!0)}if(q.isSkinnedMesh){gt.setOptional(D,q,"bindMatrix"),gt.setOptional(D,q,"bindMatrixInverse");let Wt=q.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),gt.setValue(D,"boneTexture",Wt.boneTexture,it))}q.isBatchedMesh&&(gt.setOptional(D,q,"batchingTexture"),gt.setValue(D,"batchingTexture",q._matricesTexture,it),gt.setOptional(D,q,"batchingIdTexture"),gt.setValue(D,"batchingIdTexture",q._indirectTexture,it),gt.setOptional(D,q,"batchingColorTexture"),q._colorsTexture!==null&&gt.setValue(D,"batchingColorTexture",q._colorsTexture,it));let Xt=J.morphAttributes;if((Xt.position!==void 0||Xt.normal!==void 0||Xt.color!==void 0)&&le.update(q,J,Ht),(Jt||Le.receiveShadow!==q.receiveShadow)&&(Le.receiveShadow=q.receiveShadow,gt.setValue(D,"receiveShadow",q.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(rn.envMap.value=Ce,rn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&W.environment!==null&&(rn.envMapIntensity.value=W.environmentIntensity),Jt&&(gt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Le.needsLights&&Gn(rn,ni),re&&K.fog===!0&&oe.refreshFogUniforms(rn,re),oe.refreshMaterialUniforms(rn,K,B,X,p.state.transmissionRenderTarget[w.id]),ps.upload(D,qi(Le),rn,it)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(ps.upload(D,qi(Le),rn,it),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&gt.setValue(D,"center",q.center),gt.setValue(D,"modelViewMatrix",q.modelViewMatrix),gt.setValue(D,"normalMatrix",q.normalMatrix),gt.setValue(D,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let Wt=K.uniformsGroups;for(let qt=0,Ji=Wt.length;qt<Ji;qt++){let Hn=Wt[qt];je.update(Hn,Ht),je.bind(Hn,Ht)}}return Ht}function Gn(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function Ai(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(w,W,J){let K=Re.get(w);K.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Re.get(w.texture).__webglTexture=W,Re.get(w.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:J,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){let J=Re.get(w);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0};let Ei=D.createFramebuffer();this.setRenderTarget=function(w,W=0,J=0){z=w,R=W,L=J;let K=!0,q=null,re=!1,_e=!1;if(w){let Ce=Re.get(w);if(Ce.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(D.FRAMEBUFFER,null),K=!1;else if(Ce.__webglFramebuffer===void 0)it.setupRenderTarget(w);else if(Ce.__hasExternalTextures)it.rebindTextures(w,Re.get(w.texture).__webglTexture,Re.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ge=w.depthTexture;if(Ce.__boundDepthTexture!==Ge){if(Ge!==null&&Re.has(Ge)&&(w.width!==Ge.image.width||w.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(w)}}let De=w.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(_e=!0);let Ye=Re.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ye[W])?q=Ye[W][J]:q=Ye[W],re=!0):w.samples>0&&it.useMultisampledRTT(w)===!1?q=Re.get(w).__webglMultisampledFramebuffer:Array.isArray(Ye)?q=Ye[J]:q=Ye,A.copy(w.viewport),O.copy(w.scissor),N=w.scissorTest}else A.copy(ye).multiplyScalar(B).floor(),O.copy(me).multiplyScalar(B).floor(),N=Oe;if(J!==0&&(q=Ei),Ee.bindFramebuffer(D.FRAMEBUFFER,q)&&K&&Ee.drawBuffers(w,q),Ee.viewport(A),Ee.scissor(O),Ee.setScissorTest(N),re){let Ce=Re.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ce.__webglTexture,J)}else if(_e){let Ce=W;for(let De=0;De<w.textures.length;De++){let Ye=Re.get(w.textures[De]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+De,Ye.__webglTexture,J,Ce)}}else if(w!==null&&J!==0){let Ce=Re.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ce.__webglTexture,J)}T=-1},this.readRenderTargetPixels=function(w,W,J,K,q,re,_e,Ie=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(Ce=Ce[_e]),Ce){Ee.bindFramebuffer(D.FRAMEBUFFER,Ce);try{let De=w.textures[Ie],Ye=De.format,Ge=De.type;if(!qe.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-K&&J>=0&&J<=w.height-q&&(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ie),D.readPixels(W,J,K,q,be.convert(Ye),be.convert(Ge),re))}finally{let De=z!==null?Re.get(z).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(w,W,J,K,q,re,_e,Ie=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(Ce=Ce[_e]),Ce)if(W>=0&&W<=w.width-K&&J>=0&&J<=w.height-q){Ee.bindFramebuffer(D.FRAMEBUFFER,Ce);let De=w.textures[Ie],Ye=De.format,Ge=De.type;if(!qe.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,rt),D.bufferData(D.PIXEL_PACK_BUFFER,re.byteLength,D.STREAM_READ),w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ie),D.readPixels(W,J,K,q,be.convert(Ye),be.convert(Ge),0);let Tt=z!==null?Re.get(z).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,Tt);let Bt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Lh(D,Bt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,rt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,re),D.deleteBuffer(rt),D.deleteSync(Bt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,J=0){let K=Math.pow(2,-J),q=Math.floor(w.image.width*K),re=Math.floor(w.image.height*K),_e=W!==null?W.x:0,Ie=W!==null?W.y:0;it.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,J,0,0,_e,Ie,q,re),Ee.unbindTexture()};let Zi=D.createFramebuffer(),Mn=D.createFramebuffer();this.copyTextureToTexture=function(w,W,J=null,K=null,q=0,re=null){re===null&&(q!==0?(Jr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=q,q=0):re=0);let _e,Ie,Ce,De,Ye,Ge,rt,Tt,Bt,mt=w.isCompressedTexture?w.mipmaps[re]:w.image;if(J!==null)_e=J.max.x-J.min.x,Ie=J.max.y-J.min.y,Ce=J.isBox3?J.max.z-J.min.z:1,De=J.min.x,Ye=J.min.y,Ge=J.isBox3?J.min.z:0;else{let Xt=Math.pow(2,-q);_e=Math.floor(mt.width*Xt),Ie=Math.floor(mt.height*Xt),w.isDataArrayTexture?Ce=mt.depth:w.isData3DTexture?Ce=Math.floor(mt.depth*Xt):Ce=1,De=0,Ye=0,Ge=0}K!==null?(rt=K.x,Tt=K.y,Bt=K.z):(rt=0,Tt=0,Bt=0);let Mt=be.convert(W.format),Le=be.convert(W.type),Ut;W.isData3DTexture?(it.setTexture3D(W,0),Ut=D.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(it.setTexture2DArray(W,0),Ut=D.TEXTURE_2D_ARRAY):(it.setTexture2D(W,0),Ut=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,W.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,W.unpackAlignment);let Qe=D.getParameter(D.UNPACK_ROW_LENGTH),Ht=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ot=D.getParameter(D.UNPACK_SKIP_PIXELS),Jt=D.getParameter(D.UNPACK_SKIP_ROWS),ni=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,mt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,De),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ye),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ge);let gt=w.isDataArrayTexture||w.isData3DTexture,rn=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){let Xt=Re.get(w),Wt=Re.get(W),qt=Re.get(Xt.__renderTarget),Ji=Re.get(Wt.__renderTarget);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,qt.__webglFramebuffer),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let Hn=0;Hn<Ce;Hn++)gt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.get(w).__webglTexture,q,Ge+Hn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.get(W).__webglTexture,re,Bt+Hn)),D.blitFramebuffer(De,Ye,_e,Ie,rt,Tt,_e,Ie,D.DEPTH_BUFFER_BIT,D.NEAREST);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(q!==0||w.isRenderTargetTexture||Re.has(w)){let Xt=Re.get(w),Wt=Re.get(W);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,Zi),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,Mn);for(let qt=0;qt<Ce;qt++)gt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Xt.__webglTexture,q,Ge+qt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Xt.__webglTexture,q),rn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Wt.__webglTexture,re,Bt+qt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Wt.__webglTexture,re),q!==0?D.blitFramebuffer(De,Ye,_e,Ie,rt,Tt,_e,Ie,D.COLOR_BUFFER_BIT,D.NEAREST):rn?D.copyTexSubImage3D(Ut,re,rt,Tt,Bt+qt,De,Ye,_e,Ie):D.copyTexSubImage2D(Ut,re,rt,Tt,De,Ye,_e,Ie);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else rn?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Ut,re,rt,Tt,Bt,_e,Ie,Ce,Mt,Le,mt.data):W.isCompressedArrayTexture?D.compressedTexSubImage3D(Ut,re,rt,Tt,Bt,_e,Ie,Ce,Mt,mt.data):D.texSubImage3D(Ut,re,rt,Tt,Bt,_e,Ie,Ce,Mt,Le,mt):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,re,rt,Tt,_e,Ie,Mt,Le,mt.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,re,rt,Tt,mt.width,mt.height,Mt,mt.data):D.texSubImage2D(D.TEXTURE_2D,re,rt,Tt,_e,Ie,Mt,Le,mt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Qe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ht),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ot),D.pixelStorei(D.UNPACK_SKIP_ROWS,Jt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ni),re===0&&W.generateMipmaps&&D.generateMipmap(Ut),Ee.unbindTexture()},this.initRenderTarget=function(w){Re.get(w).__webglFramebuffer===void 0&&it.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?it.setTextureCube(w,0):w.isData3DTexture?it.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?it.setTexture2DArray(w,0):it.setTexture2D(w,0),Ee.unbindTexture()},this.resetState=function(){R=0,L=0,z=null,Ee.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}};var Kx={x:1630,y:1160},jx={x:3370,y:430},fa={x:1450,y:1320};function hd(n,e){if(!n||!e)return null;let t=[Kx,jx].filter(g=>Math.hypot(g.x-n.x,g.y-n.y)<400).sort((g,x)=>Math.hypot(g.x-n.x,g.y-n.y)-Math.hypot(x.x-n.x,x.y-n.y))[0],i=0,r=1;if(t){let g=t.x-n.x,x=t.y-n.y;Math.abs(g)>Math.abs(x)?(i=Math.sign(g)||1,r=0):r=Math.sign(x)||1}let s=[0,280,320,360][e],a=[0,220,260,300][e],o=112,c={x:n.x-i*a/2,y:n.y-r*a/2},l=(g,x)=>({x:c.x+r*g+i*x,y:c.y-i*g+r*x}),u=(g,x,m,p)=>{let b=l(g,x);return{x:b.x,y:b.y,w:r?m:p,h:r?p:m}},h=[];if(e>=2){h.push(u(0,-a/2,s,10));for(let g of[-s/2,s/2])h.push(u(g,0,10,a))}if(e>=3){let g=(s-o)/2;for(let x of[-1,1])h.push(u(x*(o/2+g/2),a/2,g,10))}let d=e===1?[-1,1].flatMap(g=>[-1,1].map(x=>({...l(g*(s/2-8),x*(a/2-8)),radius:6}))):[],f=[u(-s/2+53,-a/2+64,52,90)];return e>=3&&f.push(u(s/2-53,-a/2+64,52,90)),{center:c,width:s,depth:a,door:o,fx:i,fy:r,yaw:Math.atan2(i,r),floor:u(0,0,s,a),walls:h,posts:d,beds:f,point:l,wallHeight:224,doorHeight:204,roofRidge:284}}var Qx=["#4c9cba","#df8168","#9974c7","#76b677","#e3b04c","#df71a7"],e_=["#e3b185","#be895f","#efc69d","#a67152"],t_=["#463b32","#24282b","#99673b","#c9a465"];var yl=(n,e,t)=>Number.isInteger(n?.[e])&&n[e]>=0&&n[e]<t?n[e]:0;function ru(n,e){return n.shirt=Qx[yl(e,"shirt",6)],n.skin=e_[yl(e,"skin",4)],n.hair=t_[yl(e,"hair",4)],n.style=yl(e,"style",3),n}function vl(n){return ru({},n)}var dd={gather:1e3,fish:1500,cook:1200,wave:2e3,cheer:2e3};function fd(n,e){let t=Math.sin(e*Math.PI*4);return n==="gather"?{left:-.35,right:-1.1+t*.6,bend:.12}:n==="fish"?{left:-.8,right:-1.3+Math.sin(e*Math.PI)*.3,bend:0}:n==="cook"?{left:-.8,right:-.9+t*.25,bend:.06}:n==="wave"?{left:0,right:-2.4,bend:0,wave:t*.25}:n==="cheer"?{left:-2.4,right:-2.4,bend:0,wave:t*.12}:null}var n_="assets/materials-v018/",su=["paving","sand","grass","plaster","teal","roof","wood","rock","leaf"],i_=new Set(["#a68854","#876742","#845f3f","#7d654b","#866642","#a98961","#765734","#9a743e","#786040","#8a6d49","#927652","#6e5942"]);function Ml(n){return{canvas:n,antialias:!0,stencil:!1,powerPreference:"high-performance"}}function pd(n){let e=document.createElement("canvas");e.width=n.width,e.height=n.height;let t=e.getContext("2d");t.scale(e.width/4600,e.height/2900),t.fillStyle="#0000ff",t.fillRect(0,0,4600,2900),t.fillStyle="#00ff00";for(let[i,r,s,a]of[[1750,1300,1420,840],[3380,500,450,240],[4100,2400,325,225]])t.beginPath(),t.ellipse(i,r,s,a,0,0,Math.PI*2),t.fill();return t.strokeStyle="#ff0000",t.lineWidth=100,t.lineCap="round",t.beginPath(),t.moveTo(1440,1190),t.bezierCurveTo(1520,1080,1750,1190,1980,1280),t.bezierCurveTo(2420,1510,2790,1440,3200,1320),t.stroke(),t.lineWidth=80,t.beginPath(),t.moveTo(1800,1180),t.bezierCurveTo(2100,930,2820,920,3220,730),t.lineTo(3370,480),t.stroke(),t.fillStyle="#ff0000",t.beginPath(),t.ellipse(1570,1160,290,200,0,0,Math.PI*2),t.fill(),e}function bl(n,e=8){let t=new Map,i=new Map,r=new Set,s=0,a=0,o=!0,c=0,l=new ia;for(let g of su){let x=l.load(n_+g+".webp",()=>{s++,o=!0},void 0,()=>{a++,r.add(g),o=!0});x.userData.materialAssetName=g,x.colorSpace=Yt,x.wrapS=x.wrapT=Xr,x.anisotropy=Math.min(e,n.capabilities.getMaxAnisotropy()),t.set(g,x)}function u(g,x="#ffffff",m=1,p=.035){let b=g+x+m+p;if(!i.has(b)){let y=t.get(g).clone();y.repeat.set(m,m);let v=new zt({color:x,map:y,bumpMap:y,bumpScale:p,roughness:g==="leaf"?.78:.93});t.get(g).addEventListener("dispose",()=>y.dispose());let C=t.get(g);v.userData.textureSource=C,i.set(b,v),o=!0}return i.get(b)}function h(g){return i_.has(g)?u("wood","#ded4c4",1,.045):g==="#e2dbc7"?u("plaster","#f8f4e7",1,.027):g==="#ba7655"?u("roof","#e4d6c7",2,.055):g==="#a7c4b7"?u("teal","#e7ede3",1,.035):g==="#92968b"||g==="#777a6b"?u("rock","#ddd9cf",1,.065):null}function d(){if(!o)return;c++;let g=s+a<su.length;for(let x of i.values()){let m=x.userData.textureSource;m.image&&x.map.image!==m.image&&(x.map.source=m.source,x.map.needsUpdate=!0),x.map.image&&!x.userData.uploaded&&(x.map.needsUpdate=!0,x.userData.uploaded=!0),!x.userData.uploaded&&!r.has(m.userData.materialAssetName)&&(g=!0)}o=g}function f(g){g.colorSpace=ei;let x=new zt({color:"#ffffff",map:g,roughness:1});return x.onBeforeCompile=m=>{m.uniforms.uSand={value:t.get("sand")},m.uniforms.uGrass={value:t.get("grass")},m.uniforms.uPaving={value:t.get("paving")},m.fragmentShader=m.fragmentShader.replace("#include <common>",`#include <common>
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
        normal=normalize(normal+vec3(dFdx(relief)*.14,dFdy(relief)*.14,0.));`)},x}return{textures:t,surface:u,forColor:h,ground:f,update:d,stats:()=>({loaded:s,failed:a,total:su.length,materials:i.size,syncPending:o,syncPasses:c}),dispose(){for(let g of i.values())g.map.dispose(),g.dispose();for(let g of t.values())g.dispose()}}}function Sl({x:n,z:e,surface:t,yaw:i,pitch:r,mode:s="first",distance:a=4.8,bob:o=0},c={position:new k,target:new k}){let l=t+1.64+o;return s==="first"?(c.position.set(n,l,e),c.target.set(n-Math.sin(i)*Math.cos(r),l-Math.sin(r),e-Math.cos(i)*Math.cos(r)),c):(c.target.set(n,t+1.3,e),c.position.set(n+Math.sin(i)*Math.cos(r)*a,c.target.y+.65+Math.sin(r)*a,e+Math.cos(i)*Math.cos(r)*a),c)}function au(n,e,t,i){return!(t>0)||!(i>0)?n:n.lerp(e,1-Math.exp(-t*i))}function wl(n,e,t,i){return i.length=0,n.intersectObjects(e,t,i),i}var r_={};function Tl(n,e,t,{height:i=18,offsetX:r=-12,offsetZ:s=-8}=r_){let a=Math.abs(n.shadow.camera.right-n.shadow.camera.left),o=n.shadow.mapSize.width,c=a>0&&o>0?a/o:0,l=c?Math.round(e/c)*c:e,u=c?Math.round(t/c)*c:t;return n.position.set(l+r,i,u+s),n.target.position.set(l,0,u),c}function md(n,e,t,i,r){let s=(()=>{let x=90210;return()=>(x=Math.imul(x,1664525)+1013904223>>>0)/4294967296})(),a=new Lt;a.setAttribute("position",new et([-.015,0,0,.015,0,0,-.012,.08,.01,.012,.08,.01,0,.16,.035],3)),a.setAttribute("uv",new et([0,0,1,0,0,.5,1,.5,.5,1],2)),a.setIndex([0,1,2,1,3,2,2,3,4]),a.computeVertexNormals();let o=new zt({color:"#ffffff",side:Gt,roughness:1});o.defines={USE_UV:""};let c={value:0},l={value:new Ct(0,0,0,0)};o.onBeforeCompile=x=>{x.uniforms.uWind=c,x.uniforms.uBase=l,x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec4 uBase;`),x.vertexShader=x.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec3 grassWorld=(instanceMatrix*vec4(position,1.)).xyz;
      transformed.x+=sin(uWind+grassWorld.x*.8+grassWorld.z)*position.y*.13;
      if(abs(grassWorld.x-uBase.x)<uBase.z&&abs(grassWorld.z-uBase.y)<uBase.w)transformed.y-=100.;`),x.fragmentShader=x.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=.7+.35*vUv.y;`)};let u=r?2800:5500,h=new It(a,o,u);h.receiveShadow=!0,h.frustumCulled=!1;let d=i.getContext("2d").getImageData(0,0,i.width,i.height).data,f=new Rt,g=0;for(let x=0;x<u*8&&g<u;x++){let m=s()*4600,p=s()*2900,b=(Math.min(i.height-1,Math.floor(p/2900*i.height))*i.width+Math.min(i.width-1,Math.floor(m/4600*i.width)))*4;if(d[b+1]<d[b]+12||d[b+1]<85)continue;let y=m/t,v=p/t,C=e(y,v);C<.1||(f.position.set(y,C-.015,v),f.rotation.set(0,s()*Math.PI*2,0),f.scale.setScalar(.7+s()*.8),f.updateMatrix(),h.setMatrixAt(g,f.matrix),h.setColorAt(g,new Je().setHSL(.2+s()*.055,.3+s()*.15,.22+s()*.08)),g++)}return h.count=g,n.add(h),{update(x,m){c.value=x,m?l.value.set(m.floor.x/t,m.floor.y/t,m.floor.w/(t*2)+.1,m.floor.h/(t*2)+.1):l.value.set(0,0,0,0)},dispose(){n.remove(h),a.dispose(),o.dispose(),h.dispose()}}}function gd(n,e,{cube:t,tube:i},r){let s=e.width/80,a=e.depth/80,o=e.wallHeight/80,c=e.roofRidge/80;for(let h of n.children)h.name==="floor"&&(h.material=r.surface("paving","#e5ded0",2,.045)),h.name==="wall"&&(h.material=r.surface("plaster","#f8f4e7",1,.025)),h.name==="roof"&&(h.material=r.surface("roof","#efe2d5",2,.045));for(let h of[-1,1]){let d=t(n,"#876742",[h*s/2,o-.09,0],[.13,.16,a+.18]);if(d.name="trim",e.walls.length){let f=t(n,"#a7c4b7",[h*(s/2+.064),1.55,-a*.16],[.02,.9,.7]);f.name="shutter";for(let g=0;g<8;g++)t(n,"#876742",[h*(s/2+.08),1.17+g*.11,-a*.16],[.025,.035,.69]);for(let g of[-a*.16-.39,-a*.16+.39])t(n,"#e2dbc7",[h*(s/2+.078),1.56,g],[.045,1.02,.065])}}let l=i(n,"#ba7655",[0,c+.02,0],[.09,a+.42,.09]);l.rotation.x=Math.PI/2,l.name="ridge";let u=t(n,"#e2dbc7",[0,o-.05,-a/2-.066],[s+.08,.16,.06]);return u.name="trim",n}var ti=Object.freeze([{id:"home",name:"Main Island",x:0,z:0,radius:480,biome:"mixed",dock:{x:390,z:100},landmarks:["village","player-base","market","harbour"]},{id:"jungle",name:"Jungle Island",x:1150,z:-450,radius:270,biome:"rainforest",dock:{x:930,z:-380},landmarks:["cave","waterfall","hidden-cache"]},{id:"fortress",name:"Fortress Island",x:1900,z:550,radius:240,biome:"rocky",dock:{x:1690,z:490},landmarks:["guarded-estate","rescue-mission"]},{id:"highlands",name:"Highlands Island",x:-1050,z:-850,radius:290,biome:"highlands",dock:{x:-840,z:-710},landmarks:["mine","mountain-trail"]},{id:"smugglers",name:"Smugglers Island",x:-1550,z:250,radius:230,biome:"mangrove",dock:{x:-1340,z:220},landmarks:["warehouse","secret-passage"]},{id:"paradise",name:"Paradise Island",x:700,z:1350,radius:250,biome:"beach",dock:{x:600,z:1120},landmarks:["cabins","reef"]}]),tb=Object.freeze(Object.fromEntries(ti.map(n=>[n.id,n])));function xd(n,e){return!Number.isFinite(n)||!Number.isFinite(e)?null:ti.find(t=>Math.hypot(n-t.x,e-t.z)<=t.radius)??null}function _s(n,e){if(Number.isFinite(n.coastSeed)){let i=n.coastSeed;return .855+.07*Math.sin(e*2+i)+.045*Math.cos(e*3-i)+.025*Math.sin(e*7+i)}let t=n.x*.002+n.z*.001;return .955+.023*Math.sin(e*3+t)+.012*Math.cos(e*5-t)}function Mr(n,e,t){let i=(e-n.x)/n.radius,r=(t-n.z)/n.radius,s=Math.hypot(i,r);if(s>=1)return-.32;let a=Math.atan2(r,i),o=_s(n,a),c=Math.max(0,Math.min(1,(o-s)/.12));if(s>o)return-.32*Math.min(1,(s-o)/.04);if(Number.isFinite(n.relief)){let f=(o-s)*n.radius/20,g=Math.min(1,f/18),x=Math.max(0,Math.min(1,(f-18)/85)),m=Math.exp(-((i+.18)**2*4+(r-.16)**2*5))*.7+Math.exp(-((i-.36)**2*11+(r+.25)**2*8))*.42;return .005+g*.65+x*x*(3-2*x)*m*n.relief}let l=Math.max(0,Math.min(1,(.79-s)/.22)),u=l*l*(3-2*l),h=Math.exp(-((i+.18)**2*4+(r-.16)**2*5))*.7+Math.exp(-((i-.36)**2*11+(r+.25)**2*8))*.42,d=n.biome==="highlands"?8.5:n.biome==="rainforest"?2.2:n.biome==="rocky"?1.6:.55;return .005+c*.35+u*h*d}function ou(n,{segments:e=48}={}){if(!Number.isInteger(e)||e<8||e>256)throw new RangeError("segments must be 8..256");let t=[0,Mr(n,n.x,n.z),0],i=[.5,.5],r=[],s=Math.ceil(e/2);for(let l=1;l<=s;l++)for(let u=0;u<=e;u++){let h=u/e*Math.PI*2,d=Number.isFinite(n.relief)?_s(n,h)+.03:1.02,f=n.radius*d*l/s,g=Math.cos(h)*f,x=Math.sin(h)*f;t.push(g,Mr(n,n.x+g,n.z+x),x),i.push(.5+g/(n.radius*2.04),.5+x/(n.radius*2.04));let m=1+(l-1)*(e+1)+u;if(u!==e)if(l===1)r.push(0,m+1,m);else{let p=m-(e+1);r.push(p,m+1,m,p,p+1,m+1)}}let a=new Lt;a.setAttribute("position",new et(t,3)),a.setAttribute("uv",new et(i,2)),a.setIndex(r),a.computeVertexNormals();let o=new zt({color:n.biome==="beach"?11779972:5538650,roughness:1,side:Gt}),c=new ht(a,o);return c.name="archipelago-"+n.id,c.position.set(n.x,0,n.z),c.receiveShadow=!0,c}function _d(n={}){let e=new Ne;e.name="archipelago-terrain";for(let t of ti)e.add(ou(t,n));return e}function ys(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,c=new Lt,l=0;for(let u=0;u<n.length;++u){let h=n[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(h.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0,h=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=n[d].attributes.position.count}c.setIndex(h)}for(let u in s){let h=yd(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in a){let h=a[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let x=0;x<a[u].length;++x)f.push(a[u][x][d]);let g=yd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function yd(n){let e,t,i,r=-1,s=0;for(let l=0;l<n.length;++l){let u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let a=new e(s),o=new en(a,t,i),c=0;for(let l=0;l<n.length;++l){let u=n[l];if(u.isInterleavedBufferAttribute){let h=c/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){let x=u.getComponent(d,g);o.setComponent(d+h,g,x)}}else a.set(u.array,c);c+=u.count*t}return r!==void 0&&(o.gpuType=r),o}var pa=Object.freeze([{x:95,z:-95,w:105,d:80,h:4.4,color:"#d8b8a3",shutter:"#557f7b"},{x:-55,z:-115,w:110,d:85,h:5.8,color:"#d5dfd4",shutter:"#73868b"},{x:-210,z:-95,w:100,d:90,h:4.5,color:"#e6cf97",shutter:"#426d73"},{x:100,z:110,w:100,d:90,h:5.6,color:"#9fbdac",shutter:"#705b48"},{x:-70,z:130,w:110,d:85,h:4.4,color:"#dfc6b5",shutter:"#587e7c"},{x:-225,z:110,w:90,d:75,h:4.5,color:"#c5d1d0",shutter:"#7a6a58"}]);function br(n,e,t=pa){if(e!=="home")return!1;for(let i of t)if(Math.abs(n.x-i.x)<i.w/2+7&&Math.abs(n.z-i.z)<i.d/2+7)return!0;return!1}var s_=`
float hash21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise21(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hash21(i),hash21(i+vec2(1.,0.)),f.x),mix(hash21(i+vec2(0.,1.)),hash21(i+vec2(1.)),f.x),f.y);}
float fbm21(vec2 p){float f=0.,a=.5;for(int i=0;i<4;i++){f+=a*noise21(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`,lu=`
float hashFast(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noiseFast(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hashFast(i),hashFast(i+vec2(1.,0.)),f.x),mix(hashFast(i+vec2(0.,1.)),hashFast(i+vec2(1.)),f.x),f.y);}
float fbmFast(vec2 p){float f=0.,a=.535714;for(int i=0;i<3;i++){f+=a*noiseFast(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`,Md=`
float hashLite(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noiseLite(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hashLite(i),hashLite(i+vec2(1.,0.)),f.x),mix(hashLite(i+vec2(0.,1.)),hashLite(i+vec2(1.)),f.x),f.y);}
float fbmLite(vec2 p){float f=0.,a=.666667;for(int i=0;i<2;i++){f+=a*noiseLite(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`;function Al(n,{size:e=900,segments:t=72,coastSeeds:i=[],mobile:r=!1}={}){let s=Array.from({length:9},(f,g)=>new Ct(...n[g]||[1e4,1e4,1,1])),a=r?lu:s_,o=r?"fbmFast(p*.52+vec2(uTime*.04,0.))":"fbm21(p*.52+vec2(uTime*.04,0.))",c=r?"0.":"(noise21(p*1.6+vec2(uTime*.09,-uTime*.07))-.5)*.10",l=new wn({fog:!0,uniforms:{...fl.clone(Me.fog),uTime:{value:0},uEye:{value:new k},uCoasts:{value:s},uCoastSeeds:{value:Array.from({length:9},(f,g)=>i[g]??-100)}},vertexShader:`uniform float uTime;varying vec3 vWater;
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
    }`}),u=new Ln(e,e,t,t);u.rotateX(-Math.PI/2),l.userData.fragmentNoiseLayers=r?3:7,l.userData.mobileQuality=r;let h=new ht(u,l);h.name="tropical-ocean",h.position.y=-.045,h.matrixAutoUpdate=!1,h.updateMatrix();let d={ready:!1,x:0,y:0,z:0};return{mesh:h,update(f,g){return l.uniforms.uTime.value=f,d.ready&&d.x===g.x&&d.y===g.y&&d.z===g.z?!1:(d.ready=!0,d.x=g.x,d.y=g.y,d.z=g.z,l.uniforms.uEye.value.copy(g),!0)},dispose(){u.dispose(),l.dispose()}}}function El(n,e){let t=n.userData.cameraFollowState||(n.userData.cameraFollowState={});return t.ready&&t.x===e.x&&t.y===e.y&&t.z===e.z?!1:(t.ready=!0,t.x=e.x,t.y=e.y,t.z=e.z,n.position.copy(e),n.updateMatrix(),!0)}function Cl(n=420,{mobile:e=!1}={}){let t=e?Md:lu,i=e?"fbmLite":"fbmFast",r=new wn({side:hn,depthWrite:!1,uniforms:{uTime:{value:0}},vertexShader:"varying vec3 vSky;void main(){vSky=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float uTime;varying vec3 vSky;${t}
  void main(){vec3 dir=normalize(vSky);float h=dir.y;
    vec3 col=mix(vec3(.65,.79,.84),vec3(.095,.34,.59),smoothstep(-.02,.8,h));
    vec2 p=dir.xz/max(.1,h)*2.3+vec2(uTime*.006,uTime*.0025);float n=${i}(p);
    float cloud=smoothstep(.52,.70,n)*smoothstep(.025,.20,h);
    col=mix(col,mix(vec3(.62,.69,.71),vec3(.98,.96,.89),smoothstep(.50,.70,n)),cloud);
    float sun=pow(max(dot(dir,normalize(vec3(-.55,.82,-.36))),0.),70.);col+=vec3(.35,.24,.12)*sun;
    gl_FragColor=vec4(col,1.);
    #include <colorspace_fragment>
  }`});r.userData.fragmentNoiseLayers=e?2:3,r.userData.mobileQuality=e;let s=new ht(new Tn(n,32,20),r);return s.name="tropical-sky",s.renderOrder=-10,s.frustumCulled=!1,s.matrixAutoUpdate=!1,s.updateMatrix(),s}function Rl(n,e,{mobile:t=!1}={}){let i=new zt({roughness:1,color:"#ffffff",vertexColors:!0});i.userData.fragmentNoiseLayers=t?2:3,i.userData.fragmentTextureSamples=t?3:4,i.userData.mobileQuality=t;let r=t?Md:lu,s=t?"fbmLite":"fbmFast",a=t?"texture2D(uGrass,uv).rgb":"mix(texture2D(uGrass,uv).rgb,texture2D(uGrass,uv*1.37+offset).rgb,.38)";return i.onBeforeCompile=o=>{Object.assign(o.uniforms,{uGrass:{value:n.textures.get("grass")},uSand:{value:n.textures.get("sand")},uRock:{value:n.textures.get("rock")}}),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vIslandPosition;varying vec3 vIslandNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vIslandPosition=position;vIslandNormal=normalize(normal*vec3(${e.toFixed(1)},1.,${e.toFixed(1)}));`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vIslandPosition;varying vec3 vIslandNormal;uniform sampler2D uGrass;uniform sampler2D uSand;uniform sampler2D uRock;${r}`).replace("#include <map_fragment>",`
        vec2 uv=vIslandPosition.xz/${e.toFixed(1)}*.34;
        float n=${s}(uv*.46);vec2 offset=vec2(17.3,8.1);
        vec3 grass=${a};
        vec3 sand=texture2D(uSand,uv*.8).rgb,rock=texture2D(uRock,uv*.62).rgb;
        float beach=1.-smoothstep(.025,.34,vIslandPosition.y);
        float slope=1.-abs(normalize(vIslandNormal).y);float cliff=smoothstep(.44,.76,slope)*(1.-beach);
        diffuseColor.rgb*=mix(mix(grass,sand,beach),rock,cliff)*(.82+n*.28);`)},i.customProgramCacheKey=()=>`tropical-island-${e}-${t?"mobile":"full"}`,i}function vd(n=14){let e=[],t=[],i=[],r=(a,o,c,l)=>{let u=o*2.2,h=Math.sin(o*Math.PI)*.55-o*o*.95;return[Math.sin(a)*u+Math.cos(a)*l*c,h-l*.17,Math.cos(a)*u-Math.sin(a)*l*c]};for(let a=0;a<9;a++){let o=a*Math.PI*2/9;for(let c=1;c<n;c++)for(let l of[-1,1]){let u=c/n,h=Math.sin(u*Math.PI)*.44,d=e.length/3;e.push(...r(o,u-.03,l,.012),...r(o,u-.09,l,h),...r(o,u+.025,l,h*.87),...r(o,u+.03,l,.012)),t.push(u,0,u,.9,u+.03,1,u+.03,0),i.push(d,d+1,d+2,d,d+2,d+3)}}let s=new Lt;return s.setAttribute("position",new et(e,3)),s.setAttribute("uv",new et(t,2)),s.setIndex(i),s.computeVertexNormals(),s}var on=(n,e=0)=>{let t=Math.sin((n+1)*12.9898+(e+1)*78.233)*43758.5453;return t-Math.floor(t)};function a_(n,e){for(let t of n){let i=t.userData.lod,r=i.distance+i.radius,s=e.distanceToSquared(i.center)<=r*r?"high":"low";s!==i.level&&(t.geometry=i[s],i.level=s,i.shadowReceiverLod&&(t.receiveShadow=s==="high"))}}function o_(n,e,t,i=0){if(n.ready){let r=n.x-t.x,s=n.y-t.y,a=n.z-t.z;if(i>0?r*r+s*s+a*a<i*i:r===0&&s===0&&a===0)return!1}return n.ready=!0,n.x=t.x,n.y=t.y,n.z=t.z,a_(e,t),!0}function Il(n,e,{scale:t,height:i,surfaces:r,small:s=!1,clear:a=()=>!1,dense:o=!1,lod:c=!1}={}){let l=(S,A)=>{let O=new Vt(.085,.16,1,S,A);O.translate(0,.5,0);let N=O.attributes.position;for(let I=0;I<N.count;I++)N.setX(I,N.getX(I)+N.getY(I)**2*.2);return O.computeVertexNormals(),O},u=l(8,6),h=c?l(6,3):u,d=r.surface("wood","#bc9c71",2,.03),f=r.surface("leaf","#9cb384",1,.01).clone();f.side=Gt;let g=vd(s?9:12),x=c?vd(s?6:7):g,m=[],p=[],b=new Rt,y=650/t,v=0;for(let S of e){let A=[];for(let N=0;N<(o?S.id==="home"?s?700:1500:s?280:650:s?22:42);N++){let I=N+S.x*.013+S.z*.017,U=N*2.39996+S.x*.001+(on(I,0)-.5)*.72,G=o?Math.min(.93,Math.max(.12,Math.sqrt(N*.6180339%1)*.91+(on(I,1)-.5)*.09)):Math.min(.91,.34+N%7*.075+(on(I,1)-.5)*.08),X=S.radius*G,B=S.x+Math.sin(U)*X,ne=S.z+Math.cos(U)*X;a(S,B,ne)||i(B,ne)<.32||A.push({x:B/t,z:ne/t,y:i(B,ne),a:U,h:3.45+on(I,2)*2.15,size:.7+on(I,3)*.43,leanX:(on(I,4)-.5)*.12,leanZ:(on(I,5)-.5)*.14,index:v++})}if(!A.length)continue;let O=Array.from({length:4},()=>[]);A.forEach(N=>O[(N.x>=S.x/t?1:0)+(N.z>=S.z/t?2:0)].push(N)),O.forEach((N,I)=>{if(!N.length)return;let U=new It(u,d,N.length),G=new It(g,f,N.length);U.name=m.length?`grove-trunks-${S.id}-${I+1}`:"grove-trunks",G.name=p.length?`grove-fronds-${S.id}-${I+1}`:"grove-fronds";for(let X=0;X<N.length;X++){let B=N[X];b.position.set(B.x,B.y,B.z),b.rotation.set(B.leanX,B.a,B.leanZ),b.scale.set(B.size,B.h,B.size),b.updateMatrix(),U.setMatrixAt(X,b.matrix),b.position.set(B.x+.2*B.size*Math.cos(B.a),B.y+B.h,B.z-.2*B.size*Math.sin(B.a)),b.rotation.set(B.leanX*.35,B.a+on(B.index,6)*Math.PI*.35,B.leanZ*.35),b.scale.setScalar(B.size),b.updateMatrix(),G.setMatrixAt(X,b.matrix),G.setColorAt(X,new Je().setHSL(.245+on(B.index,7)*.065,.22+on(B.index,8)*.13,.59+on(B.index,9)*.12))}for(let X of[U,G])X.userData.cullingRegion={island:S.id,sector:I+1},X.castShadow=!0,X.instanceMatrix.needsUpdate=!0,X.computeBoundingSphere(),n.add(X);U.userData.lod={high:u,low:h,distance:y,level:"high",shadowReceiverLod:c,center:U.boundingSphere.center.clone(),radius:U.boundingSphere.radius},G.userData.lod={high:g,low:x,distance:y,level:"high",center:G.boundingSphere.center.clone(),radius:G.boundingSphere.radius},U.receiveShadow=!0,G.receiveShadow=!1,m.push(U),p.push(G)})}let C=new or(1,1),R=r.surface("rock","#a9aaa0",2,.08),L=[];for(let S of e){let A=[];for(let N=0;N<(s?14:24);N++){let I=N+S.x*.019+S.z*.023,U=N*2.399+.6+(on(I,10)-.5)*.62,G=S.radius*(.84+on(I,11)*.1),X=S.x+Math.sin(U)*G,B=S.z+Math.cos(U)*G;a(S,X,B)||A.push({x:X/t,y:i(X,B)-.1,z:B/t,a:U,j:N,seed:I})}if(!A.length)continue;let O=new It(C,R,A.length);O.name=L.length?"shore-rocks-"+S.id:"shore-rocks";for(let N=0;N<A.length;N++){let I=A[N];b.position.set(I.x,I.y,I.z),b.rotation.set(on(I.seed,12)*1.2,I.a,on(I.seed,13)*1.1),b.scale.set(.27+on(I.seed,14)*.5,.2+on(I.seed,15)*.43,.31+on(I.seed,16)*.53),b.updateMatrix(),O.setMatrixAt(N,b.matrix)}O.castShadow=O.receiveShadow=!0,O.instanceMatrix.needsUpdate=!0,O.computeBoundingSphere(),n.add(O),L.push(O)}let z=[...m,...p],T={};return{trees:m[0],foliage:p[0],treeBatches:m,foliageBatches:p,rocks:L[0],rockBatches:L,lodGeometries:[u,h,g,x],update(S,A=0){return o_(T,z,S,A)}}}function Pl(n,{scale:e,height:t,surfaces:i,helpers:r,village:s=pa,paths:a,marketPoint:o={x:290,z:-30}}){let{cube:c,tube:l,ell:u}=r,h=[];function d(A){let O=new Map;A.updateMatrix();for(let N of[...A.children])if(N.isMesh){N.updateMatrix();let I=N.geometry.clone().applyMatrix4(N.matrix);O.has(N.material)||O.set(N.material,[]),O.get(N.material).push(I),A.remove(N)}for(let[N,I]of O){let U=ys(I,!1);I.forEach(X=>X.dispose());let G=new ht(U,N);G.castShadow=G.receiveShadow=!0,A.add(G)}}function f(A,O){let N=new Map,I=0;n.updateMatrixWorld(!0),O.updateMatrixWorld(!0);let U=new Dt().copy(O.matrixWorld).invert(),G=new Dt;for(let X of A)for(let B of[...X.children])if(B.isMesh){B.updateMatrixWorld(!0),G.multiplyMatrices(U,B.matrixWorld);let ne=B.geometry.clone().applyMatrix4(G);N.has(B.material)||N.set(B.material,[]),N.get(B.material).push(ne),I++,X.remove(B),B.geometry.dispose()}for(let[X,B]of N){let ne=ys(B,!1);B.forEach(ye=>ye.dispose()),ne.computeBoundingSphere();let ie=new ht(ne,X);ie.castShadow=ie.receiveShadow=!0,O.add(ie)}return{sourceBatches:I,materialBatches:O.children.length}}function g(A,O=n,N=!0,I=0){let U=new Ne;U.name="village-house",O.add(U),U.position.set(N?A.x/e:A.x,N?t(A.x,A.z):0,N?A.z/e:A.z),U.rotation.y=A.facing??(A.z>60?Math.PI:0);let G=A.w/e,X=A.d/e,B=A.h,ne=c(U,A.color,[0,B/2,0],[G,B,X]);ne.material=i.surface("plaster",A.color,2,.035);let ie=i.surface("roof","#d5bbab",2,.065);for(let $ of[-1,1]){let j=c(U,"#ba7655",[$*G/4,B+.43,0],[Math.hypot(G/2+.25,.85),.13,X+.5]);j.rotation.z=-$*Math.atan2(.85,G/2+.25),j.material=ie,c(U,"#a75f45",[$*(G/2+.13),B+.01,0],[.14,.22,X+.58])}let ye=l(U,"#a75f45",[0,B+.86,0],[.12,X+.62,.12]);ye.rotation.x=Math.PI/2;for(let $ of[.17,B*.52,B-.16])c(U,"#e2dbc7",[0,$,X/2+.035],[G+.16,.14,.1]);let me=B>5?2:1;for(let $=0;$<me;$++)for(let j of[-G*.31,G*.31]){let se=1.5+$*2.35,Ae=X/2+.08,Te=c(U,"#415d63",[j,se,Ae],[.75,1.2,.05]);Te.material.roughness=.24,Te.material.metalness=.1,c(U,"#e2dbc7",[j,se,Ae+.045],[.065,1.15,.075]),c(U,"#e2dbc7",[j,se,Ae+.046],[.7,.065,.076]);for(let nt of[-1,1]){let ot=c(U,A.shutter,[j+nt*.56,se,Ae+.03],[.34,1.3,.07]);ot.rotation.y=nt*.24;for(let D=0;D<9;D++)c(U,"#876742",[j+nt*.56,se-.52+D*.13,Ae+.085],[.33,.024,.04])}if(c(U,"#e2dbc7",[j,se-.68,Ae],[1.7,.1,.16]),c(U,"#e2dbc7",[j,se+.68,Ae],[1.7,.13,.15]),$===0){let nt=c(U,"#876742",[j,.79,X/2+.25],[1.28,.2,.3]);if(nt.rotation.x=-.04,u)for(let ot=-2;ot<=2;ot++){let D=u(U,ot%2?"#6f8f58":"#88a866",[j+ot*.22,.99+Math.abs(ot)*.025,X/2+.27],[.17,.31,.15]);D.rotation.z=ot*.14}if(me===1){let ot=c(U,A.shutter,[j,2.32,X/2+.46],[1.55,.08,.82]);ot.rotation.x=-.15,c(U,A.shutter,[j,2.2,X/2+.83],[1.55,.17,.07])}}}c(U,"#5a4b3d",[0,1.05,X/2+.06],[.78,2.1,.1]);for(let $ of[.55,1.42])for(let j of[-.19,.19])c(U,"#745f4c",[j,$,X/2+.125],[.29,.6,.045]);for(let $ of[-.48,.48])c(U,"#e2dbc7",[$,1.08,X/2+.11],[.16,2.22,.18]);c(U,"#e2dbc7",[0,2.18,X/2+.11],[1.1,.16,.18]),c(U,"#c9baa1",[0,.07,X/2+.34],[1.16,.14,.58]),u&&u(U,"#caa457",[.27,1.04,X/2+.19],[.055,.055,.035]);let Oe=(I%2?-1:1)*G*.42,pt=X/2+.55,tt=l(U,"#e2dbc7",[Oe,2.91,X/2+.34],[.035,.7,.035]);tt.rotation.x=Math.PI/2,c(U,A.shutter,[Oe,2.62,pt],[.09,.56,.64]);for(let $ of[-1,1]){let j=c(U,"#e2dbc7",[Oe+$*.052,2.62,pt],[.018,.22,.24]);j.rotation.x=(I%3-1)*.22}if(me===2){c(U,"#e2dbc7",[0,2.75,X/2+.48],[G+.15,.18,.9]);for(let $=0;$<=10;$++)l(U,"#e2dbc7",[-G/2+$*G/10,3.18,X/2+.84],[.034,.76,.034]);c(U,"#e2dbc7",[0,3.58,X/2+.84],[G+.17,.08,.1])}for(let $ of[-1,1])for(let j=0;j<me;j++)for(let se of[-X*.26,X*.26])c(U,A.shutter,[$*(G/2+.03),1.5+j*2.35,se],[.06,1.22,.8]),c(U,"#e2dbc7",[$*(G/2+.07),.82+j*2.35,se],[.16,.1,1.05]),c(U,"#e2dbc7",[$*(G/2+.07),2.18+j*2.35,se],[.16,.12,1.05]);return U.userData.facadeDetails={planters:2,awnings:me===1?2:0,balcony:me===2,windowPanes:me*8,doorPanels:4,doorway:!0,ridgeCaps:1,eaveFascias:2,hangingSigns:1,signMarks:2,signClearance:!0},d(U),h.push(U),U}s.forEach((A,O)=>g(A,n,!0,O));let x=new Ne;x.name="village-buildings",n.add(x),x.userData.batchDetails={sourceHouses:h.length,...f(h,x)},x.userData.cameraBlocker=!0;let m=new Ne;m.name="village-overhead-laundry",n.add(m);let p=["#bd6f53","#e8d99e","#587e7c","#73868b"],b=[...s].sort((A,O)=>A.z-O.z),y=Math.ceil(b.length/2),v=0,C=0;for(let A of[b.slice(0,y),b.slice(y)]){let O=[...A].sort((N,I)=>N.x-I.x);for(let N=1;N<O.length;N++){let I=O[N-1],U=O[N],G=I.x+I.w/2,X=U.x-U.w/2;if(X<=G)continue;let B=(G+X)/2,ne=(I.z+U.z)/2,ie=Math.max(t(B,ne)+3.35,3.55),ye=(X-G)/e,me=l(m,"#5a4b3d",[B/e,ie,ne/e],[.012,ye,.012]);me.rotation.z=Math.PI/2,v++;for(let Oe=0;Oe<3;Oe++){let pt=(G+(X-G)*(Oe+1)/4)/e,tt=p[(v+Oe)%p.length],$=c(m,tt,[pt,ie-.24-Oe%2*.05,ne/e],[.46,.48+Oe%2*.1,.025]);$.rotation.z=(Oe-1)*.06,C++}}}m.userData.laundryDetails={lines:v,garments:C,clearance:!0},d(m);function R(A,O,N=!1){let I=[],U=[],G=[],X=0;for(let ie=0;ie<A.length;ie++){let ye=A[Math.max(0,ie-1)],me=A[Math.min(A.length-1,ie+1)],Oe=A[ie],pt=me.x-ye.x,tt=me.z-ye.z,$=Math.hypot(pt,tt)||1;ie&&(X+=Math.hypot(Oe.x-A[ie-1].x,Oe.z-A[ie-1].z)/e);for(let j of[-1,1]){let se=Oe.x-tt/$*O/2*j,Ae=Oe.z+pt/$*O/2*j;I.push(se/e,t(se,Ae)+.018,Ae/e),U.push((j+1)/2*O/e,X)}if(ie){let j=ie*2;G.push(j-2,j-1,j,j-1,j+1,j)}}let B=new Lt;B.setAttribute("position",new et(I,3)),B.setAttribute("uv",new et(U,2)),B.setIndex(G),B.computeVertexNormals();let ne=new ht(B,i.surface("paving","#ded9c9",.75,.045));if(ne.name="village-path",ne.receiveShadow=!0,n.add(ne),N){let ie=Math.max(4,O*.08),ye=new un(1,1,1),me=new It(ye,i.surface("rock","#dad4c6",1.2,.025),(A.length-1)*2),Oe=new Rt;me.name="village-curb";let pt=0;for(let tt=1;tt<A.length;tt++){let $=A[tt-1],j=A[tt],se=j.x-$.x,Ae=j.z-$.z,Te=Math.hypot(se,Ae),nt=-Ae/Te,ot=se/Te;for(let D of[-1,1]){let _t=($.x+j.x)/2+nt*(O/2+ie/2)*D,Ke=($.z+j.z)/2+ot*(O/2+ie/2)*D;Oe.position.set(_t/e,t(_t,Ke)+.065,Ke/e),Oe.rotation.set(0,Math.atan2(se,Ae),0),Oe.scale.set(ie/e,.1,Te/e+.025),Oe.updateMatrix(),me.setMatrixAt(pt++,Oe.matrix)}}me.castShadow=me.receiveShadow=!0,me.instanceMatrix.needsUpdate=!0,me.computeBoundingSphere(),n.add(me)}}let L=[];for(let A of a||[{points:Array.from({length:31},(O,N)=>({x:385-N*21,z:36+Math.sin(N*.19)*9})),width:55,curb:!0},{points:Array.from({length:15},(O,N)=>({x:23,z:-280+N*39})),width:40,curb:!0}]){let O=[A.points[0]];for(let N=1;N<A.points.length;N++){let I=A.points[N-1],U=A.points[N],G=Math.ceil(Math.hypot(U.x-I.x,U.z-I.z)/30);for(let X=1;X<=G;X++)O.push({x:I.x+(U.x-I.x)*X/G,z:I.z+(U.z-I.z)*X/G})}if(R(O,A.width,A.curb),A.curb)for(let N=3;N<A.points.length-3;N+=6){let I=A.points[N-1],U=A.points[N+1],G=A.points[N],X=U.x-I.x,B=U.z-I.z,ne=Math.hypot(X,B)||1,ie=Math.floor(N/6)%2?1:-1,ye=A.width/2+9,me=G.x-B/ne*ye*ie,Oe=G.z+X/ne*ye*ie;L.push({x:me/e,y:t(me,Oe),z:Oe/e})}}if(L.length){let A=new Vt(1,1,1,10),O=new Tn(1,12,8),N=new Rt,I=new It(A,new zt({color:"#394447",roughness:.62,metalness:.38}),L.length),U=new It(O,new zt({color:"#ffe4a8",emissive:"#ffb85c",emissiveIntensity:.72,roughness:.34}),L.length);I.name="village-lamp-posts",U.name="village-lamp-globes";for(let G=0;G<L.length;G++){let X=L[G];N.position.set(X.x,X.y+1.35,X.z),N.scale.set(.065,2.7,.065),N.updateMatrix(),I.setMatrixAt(G,N.matrix),N.position.set(X.x,X.y+2.76,X.z),N.scale.set(.18,.22,.18),N.updateMatrix(),U.setMatrixAt(G,N.matrix)}I.castShadow=I.receiveShadow=!0,U.castShadow=!1,U.receiveShadow=!0;for(let G of[I,U])G.instanceMatrix.needsUpdate=!0,G.computeBoundingSphere(),n.add(G)}let z=new Ne;z.name="harbor-market",z.position.set(o.x/e,t(o.x,o.z),o.z/e),n.add(z);for(let A of[-1.4,1.4])for(let O of[-.6,.6])l(z,"#876742",[A,1.2,O],[.045,2.4,.045]);let T=c(z,"#cc8660",[0,2.35,0],[3.2,.07,1.8]);T.rotation.x=.07;for(let A=0;A<6;A++){let O=A%2?"#f3dfbe":"#bd6f53",N=(A-2.5)*.53,I=c(z,O,[N,2.395,0],[.53,.035,1.76]);I.rotation.x=.07,c(z,O,[N,2.27,.92],[.49,.18,.055])}c(z,"#a98961",[0,.7,0],[2.8,.15,.9]);let S=["#ce5949","#e6b64d","#709a55"];for(let A=0;A<5;A++){let O=(A-2)*.5;if(c(z,"#a68854",[O,.88,0],[.43,.2,.68]),u)for(let N=0;N<3;N++)u(z,S[(A+N)%S.length],[O+(N-1)*.11,1.05,N%2?-.11:.11],[.075,.085,.075])}return z.userData.marketDetails={canopyStripes:6,valances:6,produce:15},d(z),{building:g,houses:h,buildings:x}}var at=20;var dn=ti.map((n,e)=>({...n,x:n.x*16,z:n.z*16,dock:{x:n.dock.x*16,z:n.dock.z*16},radius:n.id==="home"?9e3:n.radius*16,coastSeed:1.3+e*1.7,relief:n.id==="home"?24:n.biome==="highlands"?85:n.biome==="rainforest"?42:n.biome==="rocky"?28:12})),uu=Object.fromEntries(dn.map(n=>[n.id,n])),bs={minX:Math.min(...dn.map(n=>n.x-n.radius))-1600,maxX:Math.max(...dn.map(n=>n.x+n.radius))+1600,minZ:Math.min(...dn.map(n=>n.z-n.radius))-1600,maxZ:Math.max(...dn.map(n=>n.z+n.radius))+1600},bd=(n,e)=>dn.find(t=>Math.hypot(n-t.x,e-t.z)<t.radius)||null,vt=Object.fromEntries(dn.map((n,e)=>{let t=ti[e],i=Math.hypot(t.dock.x-t.x,t.dock.z-t.z),r=(t.dock.x-t.x)/i,s=(t.dock.z-t.z)/i,a=n.radius*_s(n,Math.atan2(s,r)),o=u=>({x:n.x+r*u,z:n.z+s*u}),c=o(a-320),l=o(a+240);return[n.id,{id:n.id,...o(a+320),ux:r,uz:s,land:c,end:l,shore:o(a+200),length:Math.hypot(l.x-c.x,l.z-c.z),width:38,deck:.72}]})),Ms={x:vt.home.land.x-385,z:vt.home.land.z-40},Sr=pa.map(n=>({...n,x:n.x+Ms.x,z:n.z+Ms.z,facing:n.z>60?Math.PI:0})),vs=(n,e)=>({x:n+Ms.x,z:e+Ms.z}),ma=[{width:55,curb:!0,points:Array.from({length:31},(n,e)=>e===0?{...vt.home.land}:vs(385-e*21,36+Math.sin(e*.19)*9))},{width:40,curb:!0,points:Array.from({length:15},(n,e)=>vs(23,-280+e*39))},{width:36,points:[vs(-245,40),vs(-600,30),{x:uu.home.radius*.35,z:400},{x:800,z:-700},{x:-1800,z:-2400}]}],Sd=vs(290,-30),Zt={x:vt.fortress.land.x-vt.fortress.ux*800,z:vt.fortress.land.z-vt.fortress.uz*800},wd={x:Zt.x-115,z:Zt.z+145},st={pump:vs(330,65),cave:{x:vt.jungle.land.x-vt.jungle.ux*700,z:vt.jungle.land.z-vt.jungle.uz*700},estate:{x:Zt.x,z:Zt.z+102},paper:{x:0,z:-40},caveExit:{x:0,z:150},estateExit:{x:0,z:130},stairs:{x:70,z:-95},cellarExit:{x:0,z:150},key:{x:0,z:-60}};st.supply={x:st.cave.x+150,z:st.cave.z-105};var l_=[{id:"gate",area:null,...wd,hp:2},{id:"patrol",area:null,x:Zt.x+110,z:Zt.z+85,hp:2},{id:"hall",area:"estate",x:-65,z:15,hp:2},{id:"boss",area:"estate",x:0,z:-60,hp:3}];function cu(n,e,t){return t=Math.max(0,Math.min(1,t)),t=t*t*(3-2*t),n+(e-n)*t}function Gi(n,e,t=bd(n,e)){if(!t)return-.32;let i=Mr(t,n,e);if(i<=.01)return i;if(t.id==="home"){let r=Math.hypot(n-Ms.x+80,e-Ms.z);r<820&&(i=cu(.68,i,(r-470)/350))}if(t.id==="fortress"){let r=Math.max(Math.abs(n-Zt.x),Math.abs(e-Zt.z));r<400&&(i=cu(.85,i,(r-180)/220))}if(t.id==="jungle"){let r=Math.hypot(n-st.cave.x,e-st.cave.z);r<230&&(i=cu(1.2,i,(r-100)/130))}return i}function hu(n,e,t,i){for(let r of i?[vt[i]]:Object.values(vt)){if(!r)continue;let s=e-r.land.x,a=t-r.land.z,o=s*r.ux+a*r.uz,c=s*r.uz-a*r.ux;if(o>=-.5&&o<=r.length+.5&&Math.abs(c)<=r.width/2){let l=Gi(r.land.x,r.land.z);return n.dock=r,n.height=l+(r.deck-l)*Math.max(0,Math.min(1,o/r.length)),n}}return null}var c_={};function ci(n,e){return hu(c_,n,e)?.height??Gi(n,e)}function Dl(n,e){return ma.some(t=>t.points.some((i,r)=>{if(!r)return!1;let s=t.points[r-1],a=i.x-s.x,o=i.z-s.z,c=Math.max(0,Math.min(1,((n-s.x)*a+(e-s.z)*o)/(a*a+o*o)));return Math.hypot(n-s.x-a*c,e-s.z-o*c)<t.width/2+35}))}var pb=Object.fromEntries(ti.map(n=>{let e=Math.hypot(n.dock.x-n.x,n.dock.z-n.z),t=(n.dock.x-n.x)/e,i=(n.dock.z-n.z)/e;return[n.id,{x:n.x+t*n.radius*1.06,z:n.z+i*n.radius*1.06,shore:{x:n.x+t*n.radius*.84,z:n.z+i*n.radius*.84}}]}));var Ss={seatZ:-.28,seatTop:.72,hips:.84,eye:1.65};function u_(n){let e=0;return n.traverse(t=>{t!==n&&(t.updateMatrix(),t.matrixAutoUpdate=!1,e++)}),n.userData.staticPartCount=e,e}function Td(n,e,t,i,r,s,a=0,o=!1){let c=n.userData.motorboatFrameState||(n.userData.motorboatFrameState={}),l=s?Math.sin(a*2)*.015:0,u=!c.ready||c.x!==t||c.z!==i||c.heading!==r||c.roll!==l||c.moving!==s;return n.matrixAutoUpdate=!!s,u&&(n.position.set(t,.02,i),n.rotation.set(0,r,l),s||n.updateMatrix(),c.ready=!0,c.x=t,c.z=i,c.heading=r,c.roll=l,c.moving=!!s),e.visible=!!s&&!!o,u}function Ad(n,{cube:e,ell:t,mat:i}){let r=new Ne;r.name="campaign-boat",n.add(r),t(r,"#233f52",[0,.05,0],[.85,.36,1.9]),t(r,"#dedbd0",[0,.22,0],[.8,.23,1.85]);let s=e(r,"#6e5942",[0,.4,-.15],[1.3,.08,2.7]);s.name="boat-deck";let a=e(r,"#3b5355",[0,.57,Ss.seatZ],[.92,.3,.48]);a.name="boat-seat",e(r,"#e7e0d0",[0,.73,.5],[1,.65,.36]);let o=new ht(new un(1.2,.48,.025),new ta({color:"#b9e4eb",transparent:!0,opacity:.4,roughness:.1}));o.position.set(0,1.15,.68),r.add(o);let c=new ht(new bi(.2,.026,8,20),i("#2e3538"));c.name="boat-wheel",c.position.set(0,1.05,.28),r.add(c);let l=new Vt(1,1,1,8),u=new It(l,i("#d6dedc"),10),h=new Rt;u.name="boat-rails";let d=0;for(let b of[-.68,.68]){for(let y of[.15,.85,1.55])h.position.set(b,.75,y),h.rotation.set(0,0,0),h.scale.set(.025,.5,.025),h.updateMatrix(),u.setMatrixAt(d++,h.matrix);for(let y of[.86,1.01])h.position.set(b,y,.85),h.rotation.set(Math.PI/2,0,0),h.scale.set(.025,1.4,.025),h.updateMatrix(),u.setMatrixAt(d++,h.matrix)}u.castShadow=!0,u.instanceMatrix.needsUpdate=!0,u.computeBoundingSphere(),r.add(u);let f=new zt({color:"#b7d6d8",emissive:"#31545a",emissiveIntensity:.38,roughness:.28}),g=new It(new Vt(.1,.1,.03,16),f,3);g.name="boat-gauges";for(let b=0;b<3;b++)h.position.set((b-1)*.28,.91,.3),h.rotation.set(Math.PI/2,0,0),h.scale.set(b===1?1:.82,b===1?1:.82,1),h.updateMatrix(),g.setMatrixAt(b,h.matrix);g.instanceMatrix.needsUpdate=!0,g.computeBoundingSphere(),r.add(g);let x=t(r,"#d84e46",[-.65,.79,.94],[.075,.075,.075]),m=t(r,"#52b878",[.65,.79,.94],[.075,.075,.075]);x.name="boat-port-light",m.name="boat-starboard-light",x.material=new zt({color:"#d84e46",emissive:"#b32b25",emissiveIntensity:.9}),m.material=new zt({color:"#52b878",emissive:"#238547",emissiveIntensity:.9}),e(r,"#303b40",[0,.35,-1.75],[.42,.6,.38]),e(r,"#303b40",[0,-.12,-1.85],[.22,.65,.25]);let p=new ht(new Ln(1.5,5),new Sn({color:"#d0ebe6",transparent:!0,opacity:.25,depthWrite:!1}));return p.rotation.x=-Math.PI/2,p.position.set(0,.03,-3.3),r.add(p),r.userData.boatDetails={rails:10,gauges:3,navigationLights:2},u_(r),{boat:r,wake:p}}function Ed(n,e){if(n.root.parent===e)return!1;e.add(n.root),n.root.position.set(0,0,Ss.seatZ),n.root.rotation.set(0,0,0),n.rig.rotation.set(0,0,0),n.hips.position.y=Ss.hips;for(let t of n.arms)t.arm.rotation.x=-.85,t.arm.rotation.z=-t.side*.18,t.forearm.rotation.x=-.72;for(let t of n.legs)t.thigh.rotation.x=-1.68,t.calf.rotation.x=1.68,t.shoe.rotation.x=0;return!0}var Cd=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z);var Rd=Object.values(vt),Nn=Array.from({length:5},(n,e)=>({id:e,x:(e-2)*38,z:-80,child:e>2})),h_=Nn.map(n=>"cell-"+n.id),d_=Object.fromEntries(Rd.map(n=>[n.id,"dock-"+n.id]));function f_(n){let e=null,t=15625;for(let i of Rd){let r=i.x-n.p.x,s=i.z-n.p.z,a=r*r+s*s;a<t&&(e=i,t=a)}return e}function An(n,e,t,i,r){let s=n[e]||(n[e]={});return Object.assign(s,i),s.id=t,s.label=r,e+1}function Id(n,e){let t=0;if(e.interior==="cave")return t=An(n,t,"paper",st.paper,e.paper?e.gun?"supplies":"take-gun":"move-paper"),t=An(n,t,"cave-exit",st.caveExit,"leave-cave"),n.length=t,n;if(e.interior==="estate")return t=An(n,t,"key",st.key,"take-key"),t=An(n,t,"stairs",st.stairs,"cellar"),t=An(n,t,"estate-exit",st.estateExit,"leave-estate"),n.length=t,n;if(e.interior==="cellar"){for(let r of Nn)e.released.includes(r.id)||(t=An(n,t,h_[r.id],r,"free-person"));return t=An(n,t,"cellar-exit",st.cellarExit,"upstairs"),n.length=t,n}if(e.boat){let r=f_(e);return r&&(t=An(n,t,d_[r.id],r,"dock")),n.length=t,n}let i=vt[e.island];if(t=An(n,t,"boat",i.shore,e.released.length===5&&!e.boarded?"board-group":"boat"),e.island==="home"&&(t=An(n,t,"pump",st.pump,"refuel")),e.island==="jungle"&&(t=An(n,t,"cave",st.cave,"enter-cave"),t=An(n,t,"supply",st.supply,"supplies")),e.island==="fortress"&&(t=An(n,t,"estate",st.estate,"enter-estate")),["highlands","smugglers","paradise"].includes(e.island)){let r=uu[e.island];t=An(n,t,"supplies",r,"supplies")}return n.length=t,n}function Pd(n,e){let t=null,i=1/0;for(let r of n){let s=r.id.startsWith("cell-")?85:r.id.startsWith("dock-")?125:65,a=r.x-e.x,o=r.z-e.z,c=a*a+o*o;c<s*s&&c<i&&(t=r,i=c)}return t}function p_(n,e){if(e.complete)return n.key="complete",n.target=null,n;if(!e.docked)return n.key="dock-goal",n.target=vt.home,n;if(!e.tanked)return n.key="fuel-goal",n.target=e.boat?vt.home:st.pump,n;if(!e.gun)return e.interior==="cave"?(n.key=e.paper?"gun-goal":"paper-goal",n.target=st.paper,n):(n.key="cave-goal",n.target=e.boat?vt.jungle:e.island==="jungle"?st.cave:vt[e.island].shore,n);if(e.interior==="cave")return n.key="exit-cave-goal",n.target=st.caveExit,n;if(!e.key){if(e.interior==="estate"){let t=e.guards.find(i=>i.id==="boss");return n.key=t.hp>0?"boss-goal":"key-goal",n.target=t.hp>0?t:st.key,n}return n.key="estate-goal",n.target=e.boat?vt.fortress:e.island==="fortress"?st.estate:vt[e.island].shore,n}return e.released.length<5?(n.key=e.interior==="cellar"?"people-goal":"cellar-goal",n.target=e.interior==="cellar"?Nn.find(t=>!e.released.includes(t.id)):e.interior==="estate"?st.stairs:e.boat?vt.fortress:st.estate,n):e.interior?(n.key="escort-goal",n.target=e.interior==="cellar"?st.cellarExit:st.estateExit,n):e.boarded?(n.key="home-goal",n.target=e.boat?vt.home:e.island==="home"?vt.home.shore:vt[e.island].shore,n):(n.key="boat-goal",n.target=vt.fortress.shore,n)}var m_={};function du(n,e){if(p_(n,e),e.boat||e.interior||!n.target)return n;let t=vt[e.island],i=!!hu(m_,e.p.x,e.p.z,e.island);return n.target===t.shore?!i&&Cd(e.p,t.land)>65&&(n.target=t.land):i&&Cd(e.p,t.land)>45&&(n.target=t.land),n}function Ll(n){return du({},n)}function fu(n,e,t,i,r){let s=e.interior?1.8:e.boat?.65:1.3;if(n.fillStyle=e.interior?"#25312d":"#176475",n.fillRect(0,0,t,i),n.save(),n.translate(t/2-e.p.x*s,i/2-e.p.z*s),n.scale(s,s),e.interior){if(n.fillStyle="#6f7568",n.fillRect(-115,-125,230,310),n.strokeStyle="#beb99e",n.lineWidth=8,n.strokeRect(-115,-125,230,310),e.interior==="cave"&&(n.fillStyle="#967756",n.fillRect(-25,-60,50,35),n.fillStyle=e.paper?"#30383a":"#e4d6b8",e.gun||n.fillRect(-17,-55,34,22)),e.interior==="estate"&&(n.fillStyle="#9b7751",n.fillRect(-45,-105,90,25),n.fillStyle="#f0c561",!e.key&&e.guards.find(l=>l.id==="boss").hp===0&&n.fillRect(-5,-65,10,12)),e.interior==="cellar")for(let l of Nn)n.strokeStyle="#bac6bf",e.released.includes(l.id)||n.strokeRect(l.x-18,-112,36,80)}else{for(let l of dn){o(l,1,"#398b8b",-4*at),o(l,1,"#d9cba2"),o(l,1,l.biome==="highlands"?"#8f9882":"#759575",18*at);for(let h=0;h<26;h++){let d=h*2.39996+l.x*.001,f=l.radius*(.36+h%7*.075),g=l.x+Math.sin(d)*f,x=l.z+Math.cos(d)*f;if(!(l.id==="home"&&(br({x:g,z:x},l.id,Sr)||Dl(g,x)))&&!(l.id==="fortress"&&Math.abs(g-Zt.x)<125&&Math.abs(x-Zt.z)<155)){n.strokeStyle="#365e49",n.lineWidth=5;for(let m=0;m<7;m++){let p=m*Math.PI*2/7;n.beginPath(),n.moveTo(g,x),n.quadraticCurveTo(g+Math.sin(p+.25)*13,x+Math.cos(p+.25)*13,g+Math.sin(p)*25,x+Math.cos(p)*25),n.stroke()}}}n.fillStyle="#fff4cc",n.font="18px system-ui",n.textAlign="center",n.fillText(r(l.id),l.x,l.z-l.radius*.58);let u=vt[l.id];n.strokeStyle="#a2865b",n.lineWidth=u.width,n.beginPath(),n.moveTo(u.land.x,u.land.z),n.lineTo(u.end.x,u.end.z),n.stroke()}for(let l of ma)n.strokeStyle="#b7baa5",n.lineWidth=l.width,n.beginPath(),l.points.forEach((u,h)=>h?n.lineTo(u.x,u.z):n.moveTo(u.x,u.z)),n.stroke();for(let l of Sr)n.fillStyle="#304f43",n.fillRect(l.x-l.w/2+7,l.z-l.d/2+9,l.w,l.d),n.fillStyle=l.color,n.fillRect(l.x-l.w/2,l.z-l.d/2,l.w,l.d),n.fillStyle="#ab7861",n.fillRect(l.x-l.w/2-3,l.z-l.d/2+4,l.w+6,l.d-8),n.strokeStyle="#d4aa83",n.lineWidth=4,n.beginPath(),n.moveTo(l.x-l.w/2,l.z),n.lineTo(l.x+l.w/2,l.z),n.stroke();n.fillStyle="#e0d5b9",n.fillRect(Zt.x-80,Zt.z-80,160,160),n.fillStyle="#352e25",n.fillRect(Zt.x-20,Zt.z+76,40,12),n.fillStyle="#404b40",n.fillRect(st.cave.x-36,st.cave.z-30,72,36),n.fillStyle="#d28757",n.fillRect(st.pump.x-15,st.pump.z-16,30,32)}for(let l of e.guards)l.area===e.interior&&l.hp>0&&!e.boat&&(l.area||e.island==="fortress")&&c(l,"#d28b76",12);if(e.interior==="cellar")for(let l of Nn)e.released.includes(l.id)||c(l,"#d3dcbe",10);let a=Ll(e).target;a&&(n.strokeStyle="#f5d281",n.lineWidth=3,n.beginPath(),n.arc(a.x,a.z,20+Math.sin(e.elapsed*3)*3,0,Math.PI*2),n.stroke()),n.save(),n.translate(e.p.x,e.p.z),n.rotate(-e.heading),e.boat?(n.fillStyle="#efe4c9",n.beginPath(),n.moveTo(-18,-32),n.lineTo(18,-32),n.lineTo(22,28),n.lineTo(0,50),n.lineTo(-22,28),n.closePath(),n.fill()):(n.fillStyle="#b6ddd3",n.beginPath(),n.arc(0,0,9,0,Math.PI*2),n.fill()),n.strokeStyle="#fff6c7",n.lineWidth=3,n.beginPath(),n.moveTo(0,6),n.lineTo(0,28),n.stroke(),n.restore(),e.shot&&(n.strokeStyle="#ffeac5",n.lineWidth=2,n.beginPath(),n.moveTo(e.shot.from.x,e.shot.from.z),n.lineTo(e.shot.to.x,e.shot.to.z),n.stroke()),n.restore();function o(l,u,h,d=0){n.fillStyle=h,n.beginPath();for(let f=0;f<=96;f++){let g=f/96*Math.PI*2,x=l.radius*_s(l,g)*u-d,m=l.x+Math.cos(g)*x,p=l.z+Math.sin(g)*x;f?n.lineTo(m,p):n.moveTo(m,p)}n.closePath(),n.fill()}function c(l,u,h){n.fillStyle=u,n.beginPath(),n.arc(l.x,l.z,h,0,Math.PI*2),n.fill()}}function g_(n,e){return e.parent===n?!1:(n.add(e),!0)}function Dd(n,e=[]){let t=new Set(e);n.updateWorldMatrix(!0,!0);let i=0,r=s=>{if(!t.has(s)){s.updateMatrix(),s.matrixAutoUpdate=!1,s.matrixWorldAutoUpdate=!1,i++;for(let a of s.children)r(a)}};return r(n),i}function x_(n,e,t,i,r,s,a,o){if(n.ready&&n.area===e)return!1;n.ready=!0,n.area=e,t.visible=!e,i.visible=!!e;for(let[c,l]of r)l.visible=c===e;return s.background.set(e?"#202c29":"#b9dbe5"),s.fog.color.copy(s.background),a.intensity=e?.65:2,o.intensity=e?.15:2.8,!0}function __(n,e,t,i,r,s){return n?!1:(i.material.uniforms.uTime.value=e,s.update(t.position,.5),r.update(e,t.position),El(i,t.position),!0)}function y_(n,e,t,i,r,s=800,a=200){if(n.ready&&n.area===e){let l=n.x-t.x,u=n.z-t.z;if(l*l+u*u<a*a)return!1}n.ready=!0,n.area=e,n.x=t.x,n.z=t.z;let o=!1,c=0;for(let l=0;l<r.length;l++){let u=i[l],h=t.x-u.x,d=t.z-u.z,f=!e&&h*h+d*d<=(u.radius+s)**2;r[l].receiveShadow!==f&&(r[l].receiveShadow=f,o=!0),f&&c++}return n.active=c,o}function v_(n,e,t,i){let r=n.values||(n.values=[]),s=!n.ready||r.length!==e.length;for(let a=0;a<e.length;a++)r[a]!==e[a]&&(s=!0);if(!s)return!1;n.ready=!0,r.length=e.length,t.fill(0);for(let a=0;a<e.length;a++){let o=e[a];r[a]=o,t[o]=1}for(let a=0;a<i.length;a++)i[a].visible=!t[a];return!0}function M_(n,e,t){let i=e.released||[],r=n.released||(n.released=[]),s=!n.ready||n.x!==e.p.x||n.z!==e.p.z||n.area!==(e.interior||"")||n.island!==e.island||n.boat!==!!e.boat||n.paper!==!!e.paper||n.gun!==!!e.gun||n.boarded!==!!e.boarded||r.length!==i.length;for(let a=0;a<i.length;a++)r[a]!==i[a]&&(s=!0);if(!s)return!1;n.ready=!0,n.x=e.p.x,n.z=e.p.z,n.area=e.interior||"",n.island=e.island,n.boat=!!e.boat,n.paper=!!e.paper,n.gun=!!e.gun,n.boarded=!!e.boarded,r.length=i.length;for(let a=0;a<i.length;a++)r[a]=i[a];return n.nearby=Pd(Id(t,e),e.p),!0}function b_(n,e,t,i=!!e.guards?.find(r=>r.id==="boss"&&r.hp>0)){let r=e.released||[],s=n.released||(n.released=[]),a=!n.ready||n.x!==e.p.x||n.z!==e.p.z||n.area!==(e.interior||"")||n.island!==e.island||n.boat!==!!e.boat||n.complete!==!!e.complete||n.docked!==!!e.docked||n.tanked!==!!e.tanked||n.paper!==!!e.paper||n.gun!==!!e.gun||n.key!==!!e.key||n.boarded!==!!e.boarded||n.bossAlive!==i||s.length!==r.length;for(let o=0;o<r.length;o++)s[o]!==r[o]&&(a=!0);if(!a)return!1;n.ready=!0,n.x=e.p.x,n.z=e.p.z,n.area=e.interior||"",n.island=e.island,n.boat=!!e.boat,n.complete=!!e.complete,n.docked=!!e.docked,n.tanked=!!e.tanked,n.paper=!!e.paper,n.gun=!!e.gun,n.key=!!e.key,n.boarded=!!e.boarded,n.bossAlive=i,s.length=r.length;for(let o=0;o<r.length;o++)s[o]=r[o];return du(t,e),!0}function S_(n,e,t,i,r,s,a,o){return n.ready&&n.area===e?(o.yaw=r,o.pitch=s,!1):(n.ready=!0,n.area=e,o.yaw=e?0:i?Math.atan2(t.x-i.x,t.z-i.z):r,o.pitch=a,!0)}function w_(n,e,t,i){return n.ready&&n.x===t.x&&n.y===t.y&&n.z===t.z&&n.tx===i.x&&n.ty===i.y&&n.tz===i.z?!1:(n.ready=!0,n.x=t.x,n.y=t.y,n.z=t.z,n.tx=i.x,n.ty=i.y,n.tz=i.z,e.position.copy(t),e.lookAt(i),!0)}function T_(n,e,t=!1){let i=e.interior||"",r=!!e.boat,s=Math.round(e.p.x/20),a=Math.round(e.p.z/20),o=Math.round(e.heading*12),c=!!e.boarded,l=e.guards||[],u=e.released||[],h=!n.ready||n.area!==i||n.island!==e.island||n.boat!==r||n.x!==s||n.z!==a||n.heading!==o||n.boarded!==c||n.animated!==t||n.guardCount!==l.length||n.releasedCount!==u.length,d=n.guards||(n.guards=[]),f=n.released||(n.released=[]);for(let g=0;g<l.length;g++){let x=l[g].hp>0;d[g]!==x&&(h=!0),d[g]=x}for(let g=0;g<u.length;g++)f[g]!==u[g]&&(h=!0),f[g]=u[g];return d.length=l.length,f.length=u.length,n.ready=!0,n.area=i,n.island=e.island,n.boat=r,n.x=s,n.z=a,n.heading=o,n.boarded=c,n.animated=t,n.guardCount=l.length,n.releasedCount=u.length,h}function A_(n,e=!1,t=!0){return!n.paused&&!!(e||n.walking&&(n.boat||t))}function E_(n=!1){return 1e3/(n?20:30)}function C_(n,e,t,i){let r=Math.sin(i),s=Math.cos(i);for(let a=0;a<e.length;a++){let o=e[a],c=n[a],l=35+o.id*15,u=o.id%2?16:-16;c.x=t.x-r*l+s*u,c.z=t.z-s*l-r*u}return n}function R_(n,e,t,i,r=at){return n.setXYZ(0,e.x/r,i,e.z/r),n.setXYZ(1,t.x/r,i,t.z/r),n.needsUpdate=!0,n}function I_(n,e,t){let i=e*7;return n.swing=Math.sin(i),n.step=t?.24:0,n.bounce=t?Math.cos(i*2):0,n}function P_(n,e,t,i,r,s=!1,a="standing"){let o=s||r||!n.ready||n.x!==e.x||n.z!==e.z||n.height!==t||n.heading!==i||n.walking!==r||n.pose!==a;return n.ready=!0,n.x=e.x,n.z=e.z,n.height=t,n.heading=i,n.walking=r,n.pose=a,o}function D_(n,e,t,i,r){return r?(i?(n.rig.rotation.x=0,n.arms[1].arm.rotation.x=-1.05,n.arms[1].forearm.rotation.x=-.35):(n.rig.rotation.x=-Math.PI/2,n.root.position.y=e+(t?0:.15),n.root.scale.setScalar(.8)),!0):!1}function L_(n,e,t=!0){let i=!!(t&&n.ready&&(n.x!==e.x||n.z!==e.z));return n.ready=!0,n.x=e.x,n.z=e.z,i}function U_(n,e,t=!0){return(t||!n.headingReady)&&(n.headingReady=!0,n.heading=e),n.heading}function ga(n,e,t,i,r){let s=n.get(e);return s&&s.x===t&&s.z===i||(s||(s={x:0,z:0,height:0},n.set(e,s)),s.x=t,s.z=i,s.height=r(t,i),n.misses=(n.misses||0)+1),s.height}function N_(n,e,t,i,r=!0){if(!r||!n.ready)return n.ready=!0,n.last=e,n.slow=0,n.fast=0,t;let s=e-n.last;return n.last=e,s<=0||s>250?t:(s>34?(n.slow+=s,n.fast=0):s<20?(n.fast+=s,n.slow=Math.max(0,n.slow-s)):(n.slow=Math.max(0,n.slow-s*.5),n.fast=Math.max(0,n.fast-s)),n.slow>=2500&&t>.8?(n.slow=0,n.fast=0,Math.max(.8,Math.round((t-.15)*100)/100)):n.fast>=5e3&&t<i?(n.slow=0,n.fast=0,Math.min(i,Math.round((t+.1)*100)/100)):t)}function F_(n,e,t=0){let i=Math.min(n,e),r=Math.max(n,e);return n<=700||t>0&&(i<=700||r<=1200)}function Ld({canvas:n,getState:e,makeHuman:t,onLost:i,rendererFactory:r=s=>new ms(s)}){let s=r(Ml(n)),a=F_(innerWidth,innerHeight,globalThis.navigator?.maxTouchPoints||0),o=Math.min(devicePixelRatio||1,a?1.1:1.5),c=E_(a);s.setPixelRatio(o),s.setSize(innerWidth,innerHeight,!1),s.outputColorSpace=Yt,s.toneMapping=os,s.shadowMap.enabled=!0,s.shadowMap.type=as,s.shadowMap.autoUpdate=!1;let l=new sr,u=new Qt(68,innerWidth/innerHeight,.04,6e3);l.add(u),l.background=new Je("#b9dbe5"),l.fog=new rr("#b9dbe5",650,2400);let h=new ur("#d5ecfa","#566143",2),d=new dr("#fff2d6",2.8);d.castShadow=!0,d.shadow.mapSize.set(a?1024:2048,a?1024:2048),Object.assign(d.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:.1,far:100}),d.shadow.normalBias=.025,l.add(h,d,d.target);let f=bl(s,a?4:8),g=new Map,x=new Map,m=F=>(g.has(F)||g.set(F,f.forColor(F)||new zt({color:F,roughness:.85})),g.get(F)),p=(F,_)=>(x.has(F)||x.set(F,_()),x.get(F)),b=(F,_,E,H=[0,0,0],Z=[1,1,1])=>{let ce=new ht(_,E);return ce.position.set(...H),ce.scale.set(...Z),ce.castShadow=ce.receiveShadow=!0,F.add(ce),ce},y=(F,_,E,H)=>b(F,p("box",()=>new un),m(_),E,H),v=(F,_,E,H)=>b(F,p("cylinder",()=>new Vt(1,1,1,12)),m(_),E,H),C=(F,_,E,H)=>b(F,p("sphere",()=>new Tn(1,16,12)),m(_),E,H),R={mat:m,geo:p,mesh:b,cube:y,tube:v,ell:C},L=new Ne,z=new Ne,T=F=>{let _=new Map;F.updateMatrix();for(let E of[...F.children])if(E.isMesh){E.updateMatrix();let H=E.geometry.clone().applyMatrix4(E.matrix);_.has(E.material)||_.set(E.material,[]),_.get(E.material).push(H),F.remove(E)}for(let[E,H]of _){let Z=ys(H,!1);H.forEach(fe=>fe.dispose());let ce=new ht(Z,E);ce.castShadow=ce.receiveShadow=!0,F.add(ce)}},S=(F,_)=>{let E=new Set(F.legs.map(de=>de.shoe)),H=0,Z=0,ce=0;F.root.traverse(de=>{de.isMesh&&H++});let fe=de=>{for(let ze of[...de.children])ze.isMesh||fe(ze);let Ze=new Map;for(let ze of[...de.children])ze.isMesh&&!E.has(ze)&&!ze.isInstancedMesh&&(Ze.has(ze.material)||Ze.set(ze.material,[]),Ze.get(ze.material).push(ze));for(let[ze,$e]of Ze)if($e.length>1){let xt=$e.map(He=>(He.updateMatrix(),He.geometry.clone().applyMatrix4(He.matrix))),dt=ys(xt,!1);xt.forEach(He=>He.dispose());let Ve=new ht(dt,ze);Ve.name=`${_}-rigid-batch-${ce++}`,Ve.castShadow=$e.some(He=>He.castShadow),Ve.receiveShadow=$e.some(He=>He.receiveShadow),$e.forEach(He=>de.remove(He)),de.add(Ve)}};fe(F.root),F.root.traverse(de=>{de.isMesh&&Z++}),F.root.userData.rigidBatchProfile={sourceMeshes:H,renderMeshes:Z,batches:ce,animatedShoes:E.size}},A=(F,_,E)=>{let H=new Ne;H.name="campaign-supply-cache-"+F,H.position.set(_/at,ci(_,E),E/at),L.add(H),y(H,"#a98961",[0,.34,0],[1.45,.68,.88]),y(H,"#debb63",[0,.72,0],[1.52,.09,.94]);for(let Z of[-.54,.54])y(H,"#debb63",[Z,.35,.46],[.1,.62,.06]);y(H,"#bd6e4e",[-1.02,.42,.04],[.42,.84,.55]),y(H,"#394447",[-1.02,.87,.04],[.2,.08,.22]);for(let Z of[-1.15,-.89])y(H,"#394447",[Z,.75,.04],[.05,.24,.05]);return y(H,"#394447",[-1.02,.84,.04],[.26,.05,.05]),y(H,"#596b4e",[.93,.23,.04],[.72,.46,.58]),y(H,"#394447",[.93,.48,.04],[.48,.05,.26]),y(H,"#e2dbc7",[.82,.86,-.03],[.7,.34,.5]),y(H,"#bd6e4e",[.82,.87,.235],[.34,.08,.025]),y(H,"#bd6e4e",[.82,.87,.235],[.08,.25,.025]),H.userData.supplyDetails={crate:!0,fuelCan:!0,medkit:!0,ammoBox:!0},T(H),H};l.add(L,z);let O=a?96:192,N=Math.max(...dn.map(F=>F.radius)),I=[];for(let F of dn){let _=Math.max(a?48:72,Math.round(O*F.radius/N/8)*8),E=ou(F,{segments:_});E.userData.terrainSegments=_,I.push(E),E.scale.set(1/at,1,1/at),E.position.set(F.x/at,0,F.z/at);let H=E.geometry.attributes.position;for(let At=0;At<H.count;At++)H.setY(At,Gi(F.x+H.getX(At),F.z+H.getZ(At),F));let Z=new Float32Array(H.count*3),ce=new Je;for(let At=0;At<H.count;At++){let ke=Math.hypot(H.getX(At),H.getZ(At))/F.radius;ce.set(ke>.8?"#fff7e4":F.biome==="rocky"?"#d1d4c5":"#dce2c8"),ce.toArray(Z,At*3)}E.geometry.setAttribute("color",new en(Z,3)),E.geometry.computeVertexNormals(),E.material.dispose(),E.material=Rl(f,at,{mobile:a}),E.material.vertexColors=!0,L.add(E);let fe=vt[F.id],de=new Ne,Ze=Gi(fe.land.x,fe.land.z);de.name="pier-"+F.id,de.position.set(fe.land.x/at,Ze,fe.land.z/at),de.rotation.y=Math.atan2(fe.ux,fe.uz),L.add(de);let ze=Ul(fe.end,fe.land)/at,$e=Math.ceil(ze/.26),xt=new It(p("box",()=>new un),m("#a98961"),$e+1),dt=new Rt;xt.name="pier-deck-"+F.id;for(let At=0;At<=$e;At++){let ke=ze*At/$e;dt.position.set(0,(fe.deck-Ze)*At/$e-.075,ke),dt.scale.set(fe.width/at,.15,ze/$e+.006),dt.updateMatrix(),xt.setMatrixAt(At,dt.matrix)}xt.castShadow=xt.receiveShadow=!0,de.add(xt);let Ve=p("pier-piling",()=>new Vt(1,1,1,12)),He=new It(Ve,m("#876742"),8);He.name="pier-pilings-"+F.id;let fn=0;for(let At of[-.8,.8])for(let ke of[0,ze*.33,ze*.66,ze]){let bt=(fe.deck-Ze)*ke/ze;dt.position.set(At,bt-.65,ke),dt.scale.set(.075,1.6,.075),dt.updateMatrix(),He.setMatrixAt(fn++,dt.matrix)}He.castShadow=He.receiveShadow=!0,He.instanceMatrix.needsUpdate=!0,He.computeBoundingSphere(),de.add(He);let jt=new It(Ve,m("#394447"),8);jt.name="pier-bollards-"+F.id;let Rn=0;for(let At of[-.72,.72])for(let ke of[ze*.78,ze*.98]){let bt=(fe.deck-Ze)*ke/ze;dt.position.set(At,bt+.25,ke),dt.scale.set(.075,.5,.075),dt.updateMatrix(),jt.setMatrixAt(Rn++,dt.matrix),dt.position.set(At,bt+.51,ke),dt.scale.set(.13,.08,.13),dt.updateMatrix(),jt.setMatrixAt(Rn++,dt.matrix)}jt.castShadow=jt.receiveShadow=!0,jt.instanceMatrix.needsUpdate=!0,jt.computeBoundingSphere(),de.add(jt),["paradise","smugglers","highlands"].includes(F.id)&&A(F.id,F.x,F.z)}A("jungle",st.supply.x,st.supply.z);let U=Math.max(bs.maxX-bs.minX,bs.maxZ-bs.minZ)/at+12e3,G=Al(dn.map(F=>[F.x/at,F.z/at,F.radius/at,F.radius/at]),{size:U,segments:a?48:72,coastSeeds:dn.map(F=>F.coastSeed),mobile:a});L.add(G.mesh);let X=Cl(5e3,{mobile:a});L.add(X);let B=Il(L,dn,{scale:at,height:Gi,surfaces:f,small:a,dense:!0,lod:!0,clear:(F,_,E)=>br({x:_,z:E},F.id,Sr)||F.id==="home"&&Dl(_,E)||F.id==="jungle"&&(Ul({x:_,z:E},st.cave)<100||Ul({x:_,z:E},st.supply)<58)||F.id==="fortress"&&Math.abs(_-Zt.x)<125&&Math.abs(E-Zt.z)<155||Ul({x:_,z:E},vt[F.id].land)<90}),ne=Pl(L,{scale:at,height:Gi,surfaces:f,helpers:R,village:Sr,paths:ma,marketPoint:Sd}),{boat:ie,wake:ye}=Ad(L,R),me=new Ne;me.name="harbor-fuel-pump",me.position.set(st.pump.x/at,ci(st.pump.x,st.pump.z),st.pump.z/at),L.add(me),y(me,"#a98961",[0,.06,0],[1.05,.12,.92]),y(me,"#e6d6b8",[0,.68,0],[.75,1.24,.65]),y(me,"#bd6e4e",[0,1.34,0],[.82,.28,.72]),y(me,"#263f41",[0,.99,.34],[.48,.25,.045]),y(me,"#e8d99e",[0,.99,.37],[.31,.1,.018]),v(me,"#2d3435",[.53,.72,0],[.035,1.18,.035]);let Oe=y(me,"#394447",[.53,.39,.29],[.1,.24,.08]);Oe.rotation.z=-.22,y(me,"#bd6e4e",[0,.39,.35],[.3,.1,.055]),v(me,"#e6d6b8",[0,2.18,-.06],[.055,1.42,.055]);let pt=v(me,"#bd6e4e",[0,2.9,-.06],[.42,.1,.42]);pt.rotation.x=Math.PI/2;let tt=v(me,"#f3dfbe",[0,2.9,.005],[.31,.115,.31]);tt.rotation.x=Math.PI/2,me.userData.fuelDetails={display:!0,hose:!0,nozzle:!0,marker:!0},T(me);let $=new Ne;$.name="campaign-cave-entrance",$.position.set(st.cave.x/at,ci(st.cave.x,st.cave.z),st.cave.z/at),L.add($);let j=[[-2,.45,.02,.55,.55,.85,-.12],[-2,1.15,-.02,.58,.7,.95,.08],[-1.9,1.9,.04,.62,.72,.9,-.09],[-1.55,2.55,-.03,.72,.6,.9,.14],[2,.45,-.02,.55,.55,.85,.12],[2,1.15,.03,.58,.7,.95,-.08],[1.9,1.9,-.04,.62,.72,.9,.09],[1.55,2.55,.02,.72,.6,.9,-.14],[-1,2.9,.03,.72,.48,.9,-.1],[-.35,3.05,-.03,.68,.45,.92,.06],[.35,3.05,.02,.68,.45,.92,-.06],[1,2.9,-.02,.72,.48,.9,.1]],se=new Rt,Ae=new It(p("cave-mouth-rock",()=>new Tn(1,12,8)),m("#92968b"),j.length);Ae.name="cave-entrance-rocks",Ae.castShadow=!0,Ae.receiveShadow=!0,j.forEach(([F,_,E,H,Z,ce,fe],de)=>{se.position.set(F,_,E),se.scale.set(H,Z,ce),se.rotation.set(0,0,fe),se.updateMatrix(),Ae.setMatrixAt(de,se.matrix)}),Ae.instanceMatrix.needsUpdate=!0,Ae.computeBoundingSphere(),$.add(Ae),y($,"#171e19",[0,1.25,-.85],[2.8,2.5,.15]);let Te=new It(p("cave-torch-handle",()=>new Vt(1,1,1,7)),m("#4c3525"),2);Te.name="cave-entrance-torches",Te.castShadow=!0;let nt=new zt({color:"#ffcf75",emissive:"#ff7f32",emissiveIntensity:1.15,roughness:.55}),ot=new It(p("cave-torch-flame",()=>new Kn(1,1,7)),nt,2);ot.name="cave-entrance-flames",[-1,1].forEach((F,_)=>{se.position.set(F*1.18,1.15,.18),se.scale.set(.035,.85,.035),se.rotation.set(0,0,-F*.15),se.updateMatrix(),Te.setMatrixAt(_,se.matrix),se.position.set(F*1.18,1.65,.18),se.scale.set(.12,.22,.12),se.rotation.set(0,0,F*.08),se.updateMatrix(),ot.setMatrixAt(_,se.matrix)}),Te.instanceMatrix.needsUpdate=!0,ot.instanceMatrix.needsUpdate=!0,Te.computeBoundingSphere(),ot.computeBoundingSphere(),$.add(Te,ot),$.userData.entranceDetails={archStones:12,torches:2,clearOpening:!0};let D=new Ne;D.name="guarded-estate",D.position.set(Zt.x/at,.85,Zt.z/at),L.add(D),y(D,"#e2dbc7",[0,1.55,0],[8,3.1,8]),y(D,"#a68854",[0,3.2,0],[8.6,.25,8.6]),y(D,"#e2dbc7",[0,4.35,-.4],[6.5,2.3,6.5]);for(let F of[-1,1]){let _=y(D,"#ba7655",[F*1.7,5.9,-.4],[3.7,.15,7.4]);_.rotation.z=-F*.3}y(D,"#313f38",[0,1.2,4.03],[1.65,2.4,.08]);for(let F of[-2.7,2.7])for(let _ of[1.7,4.3])y(D,"#425761",[F,_,4.04],[1.15,1.3,.06]),y(D,"#e2dbc7",[F,_,4.11],[.08,1.38,.08]),y(D,"#e2dbc7",[F,_,4.11],[1.2,.08,.08]);for(let F of[-1.4,1.4])v(D,"#e2dbc7",[F,1.3,4.65],[.16,2.6,.16]);y(D,"#a68854",[0,2.67,4.65],[3.3,.2,1.4]);for(let F=0;F<3;F++)y(D,"#92968b",[0,-.03+F*.06,4.4+F*.4],[2.6,.15,1.25-F*.25]);for(let F of[-3.4,3.4])for(let _ of[1.7,4.3]){y(D,"#587e7c",[F,_,4.07],[.32,1.35,.1]);for(let E=0;E<8;E++)y(D,"#876742",[F,_-.5+E*.14,4.14],[.3,.025,.045])}y(D,"#e2dbc7",[0,3.1,4.55],[8.5,.16,1.25]);for(let F=-10;F<=10;F++)v(D,"#e2dbc7",[F*.39,3.57,5.05],[.033,.83,.033]);y(D,"#e2dbc7",[0,4,5.05],[8.5,.08,.08]);for(let F of[-2.45,2.45]){y(D,"#a98961",[F,.3,4.62],[1.25,.42,.55]);for(let _=-2;_<=2;_++){let E=C(D,_%2?"#6f8f58":"#88a866",[F+_*.2,.67+Math.abs(_)*.025,4.62],[.18,.38,.18]);E.rotation.z=_*.12}}let _t=new zt({color:"#ffe4a8",emissive:"#ffb85c",emissiveIntensity:.72,roughness:.34});for(let F of[-1.03,1.03]){y(D,"#394447",[F,2.05,4.14],[.08,.1,.24]);let _=C(D,"#ffe4a8",[F,1.88,4.27],[.13,.19,.13]);_.material=_t}let Ke=v(D,"#d4a957",[0,3.02,4.11],[.38,.1,.38]);Ke.rotation.x=Math.PI/2,D.userData.estateDetails={planters:2,lanterns:2,crest:!0},T(D),D.userData.cameraBlocker=!0;let qe=[ne.buildings,D];qe.forEach(F=>F.updateWorldMatrix(!0,!0));let Ee={};function wt(F,_=11,E=15){let H=new Ne;H.name=F,z.add(H),Ee[F]=H,y(H,F==="cave"?"#777a6b":"#a68854",[0,-.1,1],[_,.2,E]);let Z=new Ne;Z.name=F+"-walls",H.add(Z);for(let fe of[-_/2,_/2])y(Z,F==="cave"?"#92968b":"#e2dbc7",[fe,1.65,1],[.3,3.3,E]);y(Z,F==="cave"?"#92968b":"#e2dbc7",[0,1.65,1-E/2],[_,3.3,.3]),T(Z),y(H,"#313f38",[0,1.1,E/2-.2],[1.7,2.2,.15]);let ce=new hr(F==="cave"?"#ffd9a0":"#ffeccf",22,18,1.6);return ce.position.set(0,2.7,1),H.add(ce),H.userData.shellDetails={sourceMeshes:5,renderMeshes:3},H}let Re=wt("cave",12,17),it=p("cave-formation",()=>new Kn(1,1,9)),Pt=new It(it,m("#777a6b"),16),St=new Rt;Pt.name="cave-formations";let P=[[-5.2,-5.4,.34,.92],[-5.2,-1.7,.27,.68],[-5.2,2.1,.38,1.06],[-5.2,5.1,.25,.78],[5.2,-4.1,.31,.84],[5.2,-.3,.39,1.12],[5.2,3.4,.28,.72],[3.6,-6.7,.42,1.18]],M=0;for(let[F,_,E,H]of P)St.position.set(F,H/2,_),St.rotation.set(0,M*.71%Math.PI,0),St.scale.set(E,H,E),St.updateMatrix(),Pt.setMatrixAt(M++,St.matrix),St.position.set(-F,3.3-H*.48,_+.55),St.rotation.set(0,M*.53%Math.PI,Math.PI),St.scale.set(E*.82,H*.92,E*.82),St.updateMatrix(),Pt.setMatrixAt(M++,St.matrix);Pt.castShadow=Pt.receiveShadow=!0,Pt.instanceMatrix.needsUpdate=!0,Pt.computeBoundingSphere(),Re.add(Pt),Re.userData.caveDetails={stalactites:8,stalagmites:8,clearCenter:!0};let Y=new Ne;Y.name="cave-evidence-table",Re.add(Y),y(Y,"#a98961",[0,.75,-2],[2,.12,1.2]);for(let F of[-.75,.75])for(let _ of[-2.45,-1.55])v(Y,"#876742",[F,.35,_],[.065,.7,.065]);for(let F of[-2.47,-1.53])y(Y,"#876742",[0,.57,F],[1.72,.2,.07]);y(Y,"#876742",[0,.56,-1.38],[.72,.27,.08]),C(Y,"#394447",[0,.56,-1.32],[.045,.045,.04]),v(Y,"#394447",[.72,.86,-2.18],[.17,.1,.17]);let ee=new zt({color:"#ffe4a8",emissive:"#ff9f45",emissiveIntensity:1.05,roughness:.28,transparent:!0,opacity:.88}),oe=C(Y,"#ffe4a8",[.72,1.08,-2.18],[.14,.22,.14]);oe.material=ee,v(Y,"#394447",[.72,1.31,-2.18],[.12,.07,.12]),Y.userData.evidenceDetails={legs:4,drawer:!0,lantern:!0,newspaper:!0,hiddenGun:!0},T(Y);let Q=document.createElement("canvas");Q.width=256,Q.height=320;let Pe=Q.getContext("2d");Pe.fillStyle="#ddd5bd",Pe.fillRect(0,0,256,320),Pe.fillStyle="#3a3b32",Pe.font="bold 26px serif",Pe.fillText("ISLAND DAILY",18,38),Pe.fillRect(18,51,220,3);for(let F=0;F<20;F++)Pe.fillRect(18,72+F*10,94-F%4*6,2),Pe.fillRect(128,72+F*10,104-F%3*8,2);let he=new zi(Q);he.colorSpace=Yt;let ve=new ht(new Ln(.9,1.05),new zt({map:he,side:Gt}));ve.name="cave-newspaper",ve.rotation.x=-Math.PI/2,ve.position.set(0,.83,-2),Re.add(ve);function Fe(F){let _=new Ne;F.add(_),y(_,"#333a3d",[0,0,.06],[.12,.12,.34]);let E=y(_,"#695646",[0,-.11,-.03],[.1,.23,.13]);return E.rotation.x=-.22,y(_,"#8b9294",[0,.08,.03],[.11,.035,.3]),_}let le=Fe(Re);le.name="cave-hidden-gun",le.position.set(0,.87,-2),le.rotation.y=Math.PI/2;let ge=wt("estate",11,15),Be=new Ne;Be.name="estate-fixtures",ge.add(Be),y(Be,"#816947",[0,.42,-4.6],[2.6,.85,.9]),y(Be,"#decc9f",[0,.05,1],[3,.025,10]);for(let F=0;F<6;F++)y(Be,"#777a6b",[3.5,.06*F,-4.75+F*.28],[1.7,.12,.65]);Be.userData.batchDetails={sourceMeshes:8,renderMeshes:3},T(Be);let be=new Ne;be.name="estate-interior-details",ge.add(be);let xe=["#6f443d","#40626a","#718052"];for(let[F,_]of[-2.7,0,2.7].entries())y(be,"#a68854",[_,1.9,-6.31],[1.42,1.22,.08]),y(be,xe[F],[_,1.9,-6.25],[1.12,.92,.045]);y(be,"#a68854",[0,.93,-6.29],[8.7,.08,.08]);for(let F of[-4.35,4.35]){y(be,"#394447",[F,2.02,-6.24],[.1,.32,.1]);let _=C(be,"#ffe4a8",[F,1.79,-6.15],[.14,.19,.11]);_.material=_t}y(be,"#394447",[0,.86,-4.58],[1.12,.025,.52]);for(let F of[-.52,0,.52])y(be,"#d8d2c3",[F,.88,-4.57],[.4,.012,.3]);v(be,"#394447",[.93,1.08,-4.58],[.035,.42,.035]);let je=C(be,"#ffe4a8",[.93,1.34,-4.58],[.18,.16,.18]);je.material=_t,ge.userData.interiorDetails={portraits:3,sconces:2,documents:3,deskLamp:!0},T(be);let V=new ht(new bi(.13,.036,8,16),new zt({color:"#f8ce60",emissive:"#8c6322",emissiveIntensity:.5}));V.position.set(0,.88,-3),ge.add(V),y(V,"#debb63",[0,-.2,0],[.065,.32,.065]);let ue=wt("cellar",11,15),pe=[],Se=new Ne;Se.name="cellar-static",ue.add(Se);let ae=Object.entries(Ee);for(let F of Nn){let _=new Ne;_.name="cell-door-"+F.id,_.position.set(F.x/at,0,-1.5),ue.add(_),pe[F.id]=_;for(let Z=-2;Z<=2;Z++)v(_,"#475759",[Z*.32,1.3,0],[.025,2.6,.025]);for(let Z of[.1,2.5])y(_,"#475759",[0,Z,0],[1.65,.055,.055]);for(let Z of[.45,2.15])v(_,"#394447",[-.78,Z,.07],[.045,.12,.045]);b(_,p("cell-padlock",()=>new bi(.09,.022,6,12)),m("#a68854"),[.61,1.42,.07]),y(_,"#a68854",[.61,1.27,.07],[.18,.2,.08]),T(_);let E=F.x/at,H=["#738b90","#9b796d"][F.id%2];y(Se,"#a98961",[E,.18,-4.8],[1.55,.36,.8]),y(Se,"#e2dbc7",[E,.4,-4.8],[1.5,.1,.8]),y(Se,H,[E,.47,-4.65],[1.42,.045,.48]),y(Se,"#d8d2c3",[E,.5,-5.08],[.64,.1,.24])}for(let F of[-3.8,0,3.8]){y(Se,"#394447",[F,2.54,-6.28],[.36,.15,.1]);let _=C(Se,"#ffe4a8",[F,2.34,-6.2],[.15,.2,.11]);_.material=_t}ue.userData.cellarDetails={cells:5,hinges:10,padlocks:5,lamps:3,bedding:5},T(Se);let te=Dd(L,[ie,X]),Ue=Dd(z,[V]);function Xe(F,_,E){let H=F.hairStyles[_],Z=new Set;return H.name=`${E}-hair-${_}`,H.visible=!0,H.traverse(ce=>{ce.isMesh&&Z.add(ce)}),F.hairStyles.forEach((ce,fe)=>{fe!==_&&ce.removeFromParent()}),F.hairStyles=[H],F.hairParts=F.hairParts.filter(ce=>Z.has(ce)),F.spear.removeFromParent(),F.raft.removeFromParent(),Object.values(F.props).forEach(ce=>ce.removeFromParent()),F.spear=F.raft=null,F.props={},F.root.userData.renderProfile={hairVariants:1,unusedToolMeshes:0},S(F,E),F}let ct=Xe(t({shirt:"#577c87",skin:"#ddb08c",hair:"#40362f"},"player",R),0,"campaign-player");ct.root.name="campaign-player",l.add(ct.root);let ut=new Map,ln=new Map,cn=new Uint8Array(Nn.length),Wi=Nn.map(()=>({x:0,z:0})),vn={swing:0,step:0,bounce:0},Ti={gate:{shirt:"#526252",skin:"#c29574",hair:"#302e28",style:0},patrol:{shirt:"#59665a",skin:"#a96f55",hair:"#211f1e",style:1},hall:{shirt:"#4b5958",skin:"#d1a17d",hair:"#5b4032",style:2},boss:{shirt:"#34383a",skin:"#b67d60",hair:"#251f1c",style:1}};for(let F of e().guards){let _=Ti[F.id],E=Xe(t(_,"guard",R),_.style,"campaign-guard-"+F.id);if(E.root.name="campaign-guard-"+F.id,E.root.userData.guardProfile={boss:F.id==="boss",style:_.style},F.id==="boss"){let H=new Ne;H.name="campaign-boss-insignia",E.hips.add(H);for(let ce of[-1,1])y(H,"#d2aa58",[ce*.2,.56,.02],[.12,.035,.18]);let Z=y(H,"#8f2f2d",[0,.34,.15],[.055,.52,.025]);Z.rotation.z=-.48,E.root.userData.guardProfile.insignia=!0}l.add(E.root),Fe(E.arms[1].forearm).position.set(0,-.24,.14),ut.set(F.id,E)}let wr=[{shirt:"#8da4b1",skin:"#c99370",hair:"#302d2a",style:0,scale:1.02},{shirt:"#b78876",skin:"#e1b894",hair:"#6a4938",style:1,scale:.96},{shirt:"#9caa8c",skin:"#b98264",hair:"#2f2927",style:2,scale:1},{shirt:"#c3b487",skin:"#dca984",hair:"#704936",style:1,scale:.72},{shirt:"#92b2b6",skin:"#e4bb96",hair:"#3f302b",style:2,scale:.76}];for(let F of Nn){let _=wr[F.id],E=Xe(t(_,"resident",R),_.style,"campaign-prisoner-"+F.id);E.root.name="campaign-prisoner-"+F.id,E.root.scale.setScalar(_.scale),E.root.userData.residentProfile={child:F.child,style:_.style,scale:_.scale},l.add(E.root),ln.set(F.id,E)}let kn=new Ne;u.add(kn),Fe(kn).position.set(.26,-.23,-.48);let En=C(kn,"#ddb08c",[.24,-.32,-.4],[.065,.085,.08]),Xi=v(kn,"#577c87",[.22,-.4,-.3],[.085,.24,.085]);Xi.rotation.x=-.5;let Cn=new ht(new bi(.42,.035,8,32),new Sn({color:"#f3d48a"}));Cn.rotation.x=-Math.PI/2,l.add(Cn);let qi=new et(new Float32Array(6),3),Vn=new ar(new Lt().setAttribute("position",qi),new Fi({color:"#ffe8ad"}));Vn.frustumCulled=!1,l.add(Vn);let Yi=new fr,Gn=new k,Ai={position:new k,target:new k},Ei=[],Zi={position:new k},Mn={},w=0,W=0,J={x:0,z:0,surface:0,yaw:0,pitch:0,mode:"first",distance:4.6},K=F=>F.distance>.2,q={height:25},re={},_e={},Ie={},Ce=[],De=new Map,Ye=new Map;De.misses=0;let Ge=0,rt=0,Tt=0,Bt=0,mt=0,Mt=.05,Le="first",Ut=0,Qe=!0,Ht=!1,Ot=null,Jt=0,ni=0,gt=!1,rn={},Xt={},Wt={},qt={},Ji={},Hn={},_a={},ya=-1/0,Ts=0,As=e(),Es=Ll(As).target;Es&&(mt=Math.atan2(As.p.x-Es.x,As.p.z-Es.z));function Tr(F,_,E,H,Z,ce,fe=!1,de="standing"){Jt++;let Ze=F.root.userData.campaignPoseState||(F.root.userData.campaignPoseState={});if(!P_(Ze,_,E,H,Z,fe,de))return!1;ni++,F.root.position.set(_.x/at,E,_.z/at),F.root.rotation.set(0,0,0),F.rig.rotation.y=H;let ze=I_(vn,ce,Z);for(let $e of F.legs){let xt=($e.side<0?-ze.swing:ze.swing)*ze.step;$e.thigh.rotation.x=xt,$e.calf.rotation.x=Math.max(0,-xt),$e.shoe.rotation.x=-$e.calf.rotation.x*.6}for(let $e of F.arms)$e.arm.rotation.x=Z?($e.side<0?ze.swing:-ze.swing)*.25:0,$e.arm.rotation.z=0,$e.forearm.rotation.x=-.18;return F.hips.position.y=.87+ze.bounce*.009,!0}function zl(F){if(!Qe||Ht)return;let _=e();if(_.paused&&gt)return;gt=!!_.paused;let E=F/1e3;Ut=F,Jt=0,f.update();let H=_.interior;x_(Ji,H,L,z,ae,l,h,d),y_(Xt,H,_.p,dn,I);let Z=H?0:ga(De,ct.root,_.p.x,_.p.z,ci),ce=Le==="third";if(ct.root.visible=ce,!_.boat){let ke=g_(l,ct.root);ce&&Tr(ct,_.p,Z,_.heading,_.walking,E,ke)}ct.rig.visible=ce,Td(ie,ye,(_.boat?_.p.x:vt[_.boatAt].x)/at,(_.boat?_.p.z:vt[_.boatAt].z)/at,_.boat?_.heading:Math.atan2(vt[_.boatAt].ux,vt[_.boatAt].uz),_.boat,E,_.walking),_.boat&&ce&&Ed(ct,ie),ve.visible=!_.paper,le.visible=_.paper&&!_.gun,v_(Hn,_.released,cn,pe);let fe=!1,de=!1;Tt=0;for(let ke of _.guards){ke.id==="boss"&&(de=ke.hp<=0);let bt=ut.get(ke.id),sn=ke.area===H&&!_.boat&&(!ke.area||_.island==="fortress");if(bt.root.visible=sn,!sn)continue;let zn=Ye.get(ke.id);zn||(zn={},Ye.set(ke.id,zn));let In=L_(zn,ke,ke.hp>0),_n=U_(zn,Math.atan2(_.p.x-ke.x,_.p.z-ke.z),ke.hp>0);In&&Tt++,fe||(fe=In);let $t=ke.area?0:ga(De,bt,ke.x,ke.z,ci),Ol=Tr(bt,ke,$t,_n,In,E,!1,ke.hp<=0?"fallen":"armed");D_(bt,$t,!!ke.area,ke.hp>0,Ol)}V.visible=!_.key&&de,V.visible&&(V.rotation.y=E),_.released.length&&!_.boarded&&!_.boat&&(H==="estate"||H==="cellar"||_.island==="fortress")&&C_(Wi,Nn,_.p,_.heading);for(let ke of Nn){let bt=ln.get(ke.id),sn=!!cn[ke.id],zn=_.boarded?!1:sn?!_.boat&&(H==="estate"||H==="cellar"||_.island==="fortress"):H==="cellar";if(bt.root.visible=zn,!zn)continue;let In=sn?Wi[ke.id]:ke;Tr(bt,In,H?0:ga(De,bt,In.x,In.z,ci),_.heading,sn&&_.walking,E+ke.id*.18)}b_(_e,_,re,!de)&&Ge++;let ze=re.target;S_(Wt,H,_.p,ze,mt,Mt,Le==="first"?.05:.22,qt)&&(mt=qt.yaw,Mt=qt.pitch),M_(Ie,_,Ce)&&rt++;let $e=Ie.nearby,xt=$e||ze;Cn.visible=!!xt,xt&&Cn.position.set(xt.x/at,(H?0:ga(De,Cn,xt.x,xt.z,ci))+.08,xt.z/at),xt&&Cn.scale.setScalar(1+Math.sin(E*3)*.1),kn.visible=_.gun&&!_.boat&&Le==="first",kn.position.z=_.shot?.025:0;let dt=_.boat?.02+Ss.eye-1.64:Z,Ve=_.boat?Ss.seatZ:0;J.x=_.p.x/at+Math.sin(_.heading)*Ve,J.z=_.p.z/at+Math.cos(_.heading)*Ve,J.surface=dt,J.yaw=mt,J.pitch=Mt,J.mode=Le,J.distance=_.boat?7.5:4.6;let He=Sl(J,Ai);if(H&&Le==="third"&&(He.position.x=ha.clamp(He.position.x,-5.1,5.1),He.position.z=ha.clamp(He.position.z,-5,8.1)),!H&&Le==="third"){let ke=Zi,bt=He.position,sn=He.target;if(ke.ready&&ke.x===bt.x&&ke.y===bt.y&&ke.z===bt.z&&ke.tx===sn.x&&ke.ty===sn.y&&ke.tz===sn.z)He.position.copy(ke.position);else{ke.ready=!0,ke.x=bt.x,ke.y=bt.y,ke.z=bt.z,ke.tx=sn.x,ke.ty=sn.y,ke.tz=sn.z,Gn.subVectors(bt,sn);let zn=Gn.length();Gn.normalize(),Yi.set(sn,Gn),Yi.far=zn,w++;let In=wl(Yi,qe,!0,Ei).find(K);In&&bt.copy(sn).addScaledVector(Gn,Math.max(.35,In.distance-.22)),bt.y=Math.max(bt.y,ga(De,u,bt.x*at,bt.z*at,ci)+.24),ke.position.copy(bt)}}w_(Mn,u,He.position,He.target)&&W++,__(H,E,u,X,G,B)&&Bt++;let fn=A_(_,fe,Le==="third"),jt=T_(rn,_,fn)||fn&&F-ya>=c;s.shadowMap.needsUpdate=jt,jt&&(Tl(d,_.p.x/at,_.p.z/at,q),ya=F,Ts++),Vn.visible=!!_.shot,_.shot&&R_(qi,_.shot.from,_.shot.to,Z+1.35),s.render(l,u);let Rn=s.getPixelRatio(),At=N_(_a,F,Rn,o,!_.paused);At!==Rn&&(s.setPixelRatio(At),Cs())}function Cs(){gt=!1,u.aspect=innerWidth/innerHeight,u.updateProjectionMatrix(),s.setSize(innerWidth,innerHeight,!1)}function va(F,_=0){e().paused||(mt+=F,Mt=ha.clamp(Mt+_,Le==="first"?-.95:-.05,.75))}n.addEventListener("pointerdown",F=>{e().paused||F.button!==0||(Ot={id:F.pointerId,x:F.clientX,y:F.clientY},n.setPointerCapture(F.pointerId))}),n.addEventListener("pointermove",F=>{Ot?.id===F.pointerId&&(va(-(F.clientX-Ot.x)*.006,(F.clientY-Ot.y)*.005),Ot.x=F.clientX,Ot.y=F.clientY)});for(let F of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(F,()=>Ot=null);return n.addEventListener("webglcontextlost",F=>{F.preventDefault(),Ht=!0,Qe=!1,i?.()}),{frame:zl,resize:Cs,orbit:va,setCamera(F){Le=F==="first"?"first":"third",Mt=Le==="first"?.05:.22,gt=!1},get cameraMode(){return Le},get enabled(){return Qe&&!Ht},vector:(F,_)=>({x:F*Math.cos(mt)+_*Math.sin(mt),z:-F*Math.sin(mt)+_*Math.cos(mt)}),aim:()=>mt+Math.PI,setEnabled(F){Qe=!!F&&!Ht,Qe&&(gt=!1)},stats:()=>({calls:s.info.render.calls,triangles:s.info.render.triangles,pixelRatio:s.getPixelRatio(),eye:u.position.toArray(),camera:Le,cameraBlockers:qe.length,cameraRaycasts:w,cameraUpdates:W,goalSelections:Ge,nearbySelections:rt,movingGuards:Tt,palmBatches:B.treeBatches.length,largestPalmBatch:Math.max(...B.treeBatches.map(F=>F.count)),posedCharacters:Jt,poseUpdates:ni,exteriorUpdates:Bt,frozenStaticTransforms:te+Ue,palmLodDistanceChecks:B.treeBatches.length+B.foliageBatches.length,palmTrunkTriangles:B.treeBatches.reduce((F,_)=>F+_.count*_.geometry.index.count/3,0),unshadowedPalmTrunkTriangles:B.treeBatches.filter(F=>!F.receiveShadow).reduce((F,_)=>F+_.count*_.geometry.index.count/3,0),palmCrownTriangles:B.foliageBatches.reduce((F,_)=>F+_.count*_.geometry.index.count/3,0),lowDetailPalmBatches:B.treeBatches.filter(F=>F.userData.lod.level==="low").length,terrainTriangles:I.reduce((F,_)=>F+_.geometry.index.count/3,0),shadowReceivingTerrains:Xt.active,shadowUpdates:Ts,terrainHeightSamples:De.misses}),dispose(){s.dispose(),f.dispose();let F=new Set([...x.values(),...B.lodGeometries]),_=new Set(g.values());l.traverse(E=>{if(E.geometry&&F.add(E.geometry),E.material)for(let H of Array.isArray(E.material)?E.material:[E.material])_.add(H)}),F.forEach(E=>E.dispose()),_.forEach(E=>E.dispose()),he.dispose()}}}function Ul(n,e){return Math.hypot(n.x-e.x,n.z-e.z)}function z_(n){return Ld({...n,makeHuman:xu})}var we=80,Fd=[[1750,1300,1540,970],[3380,500,520,310],[4100,2400,390,290]],Hi=(n,e,t)=>Math.max(e,Math.min(t,n)),O_=n=>(n=Hi(n,0,1),n*n*(3-2*n)),B_=(n,e)=>Math.atan2(Math.sin(e-n),Math.cos(e-n)),k_=Object.freeze({}),Ud=Math.cos(1),Nd=Math.sin(1);function Fn(n,e){let t=n*we,i=e*we,r=-1;for(let[a,o,c,l]of Fd)r=Math.max(r,1-Math.hypot((t-a)/c,(i-o)/l));return r<=0?-.32:.015+O_(r/.17)*(.25+.28*(1+Math.sin(n*.23+1.3)*Math.cos(e*.27))+.12*Math.sin(n*.7)*Math.sin(e*.6))}function zd(n,e,t){return{x:n*Math.cos(t)+e*Math.sin(t),y:-n*Math.sin(t)+e*Math.cos(t)}}function Od(n,e,t=75){let i,r=t*t;for(let s of n||[]){let a=s.x-e.x,o=s.y-e.y,c=a*a+o*o;c<r&&(i=s,r=c)}return i}function Bd(n,e,t,i=0,r=75){let s=t?.x??null,a=t?.y??null;return n.ready&&n.objects===e&&n.revision===i&&n.x===s&&n.y===a&&n.radius===r?!1:(n.ready=!0,n.objects=e,n.revision=i,n.x=s,n.y=a,n.radius=r,n.nearest=Od(e,t,r),n.scans=(n.scans||0)+1,!0)}function kd(n,e,t,i){let r=e&&e.remaining-(i-t);return r>0?(n.kind=e.kind,n.phase=1-r/(dd[e.kind]||1e3),n):null}function ws(n,e,t=!1){return t&&(n.rendered=!1),e?n.rendered?!1:(n.rendered=!0,!0):(n.rendered=!1,!0)}function pu(n){n.updateWorldMatrix(!0,!0);let e=0;return n.traverse(t=>{t.updateMatrix(),t.matrixAutoUpdate=!1,t.matrixWorldAutoUpdate=!1,e++}),e}function Vd(n="first"){return n!=="first"}function Nl(n,e,t=24){let i=n.x-e.x,r=n.y-e.y,s=t*we;return i*i+r*r<=s*s}function Gd(n,e=!0){if(n.userData.poseLodActive===e)return!1;n.userData.poseLodActive=e;let t=i=>{e||i.updateMatrix(),i.matrixAutoUpdate=e;for(let r of i.children)t(r)};return t(n),!0}function Hd(n,e,t=!0){return n.userData.poseHeading===e?!1:(n.userData.poseHeading=e,n.rotation.y=e,t||n.updateMatrix(),!0)}function Wd(n,e,t){let i=B_(n,e),r=Math.min(1,t*12);return Math.abs(i)*(1-r)<1e-4?e:n+i*r}function Xd(n="first",e=!1,t=!1,i=!1){return n==="first"&&e&&t&&!i}function qd(n,e,t){return n[e]===t?!1:(n[e]=t,t.updateWorldMatrix(!0,!0),!0)}function Yd(n,e,t,i=0){return n.ready&&n.revision===i&&n.x===e.x&&n.y===e.y&&n.z===e.z&&n.tx===t.x&&n.ty===t.y&&n.tz===t.z?!1:(n.ready=!0,n.revision=i,n.x=e.x,n.y=e.y,n.z=e.z,n.tx=t.x,n.ty=t.y,n.tz=t.z,!0)}function Zd(n,e){let t=e*1.3;return n.idleHip=Math.sin(e*1.7),n.idleArmSin=Math.sin(t),n.idleArmCos=Math.cos(t),n}function Jd(n,e){return n!==e}function $d(n,e){let t=Math.sin(e*6)*.15;return n[0]=t,n[1]=-t,n[2]=t,n[3]=-t,n}function Kd(n,e,t,i,r,s=!1){return n.moved=e===null||t===null||Math.hypot(i-e,r-t)>1e-4,n.walking=e!==null&&t!==null&&n.moved,n.pose=n.moved||n.walking!==s,n}function jd(n,e,t,i,r,s){return n.yawSin=Math.sin(t),n.yawCos=Math.cos(t),i||r?(n.phaseSin=Math.sin(e),n.phaseCos=Math.cos(e)):n.phaseSin=n.phaseCos=0,n.hips=(i?.9:.92)+(i?Math.cos(e*2)*.012:s.idleHip*.004),n}function Qd(n,e,t,i=new k){let r=Math.min(240,t*.52),s=e.projectionMatrix.elements[0]*t/2,a=0;for(let o of n){o.userData.signScale||(o.userData.signScale=o.scale.clone()),o.scale.copy(o.userData.signScale),o.getWorldPosition(i);let c=Math.max(.1,i.distanceTo(e.position)),l=o.scale.x*s/c;l>r&&o.scale.multiplyScalar(r/l),a++}return a}function ef(n,e,t={}){let s=Hi(Math.hypot(n,e),.08,.855);return t.hip=-Math.atan2(e,-n)-Math.acos(Hi((.43*.43+s*s-.43*.43)/(2*.43*s),-1,1)),t.knee=Math.PI-Math.acos(Hi((.43*.43+.43*.43-s*s)/(2*.43*.43),-1,1)),t}function tf(n,e={}){let t=e.shirt||"#4c9cba",i=e.skin||"#dda879",r=e.hair||"#43332b",s=e.style||0;return n.lookShirt===t&&n.lookSkin===i&&n.lookHair===r&&n.lookStyle===s?!1:(n.lookShirt=t,n.lookSkin=i,n.lookHair=r,n.lookStyle=s,!0)}function mu(n){return n?Math.max(...[-1,0,1].flatMap(e=>[-1,0,1].map(t=>{let i=n.point(e*n.width/2,t*n.depth/2);return Fn(i.x/we,i.y/we)}))):0}function nf(n,e,t){let i=e?.x??null,r=e?.y??null,s=t||0;return n.ready&&n.x===i&&n.y===r&&n.level===s?!1:(n.ready=!0,n.x=i,n.y=r,n.level=s,n.layout=hd(e,t),n.elevation=mu(n.layout),!0)}function rf(n,e,t,i,r){let s=e?.x??null,a=e?.y??null;return n.ready&&n.pointX===s&&n.pointY===a&&n.sea===t&&n.layout===i&&n.elevation===r?!1:(n.ready=!0,n.pointX=s,n.pointY=a,n.sea=t,n.layout=i,n.elevation=r,n.x=s/we,n.z=a/we,n.wet=t(s,a),n.surface=n.wet?0:gu(n.x,n.z,i,r),!0)}function sf(n,e,t,i,r){return e.ready&&e.x===t&&e.y===i&&e.z===r?!1:(e.ready=!0,e.x=t,e.y=i,e.z=r,n.position.set(t,i,r),n.updateMatrix(),n.matrixAutoUpdate=!1,!0)}function af(n,e={}){let t=e.activities||{},i=t.completed||0,r=e.basePos?.x??null,s=e.basePos?.y??null,a=e.baseLevel??null,o=e.campfire??null,c=e.fire?.x??null,l=e.fire?.y??null,u=i>=1,h=i>=3,d=i>=6,f=h&&t.gardenClaimed<i,g=t.raceWon??null;return n.ready&&n.level===a&&n.baseX===r&&n.baseY===s&&n.campfire===o&&n.fireX===c&&n.fireY===l&&n.first===u&&n.garden===h&&n.flag===d&&n.harvest===f&&n.raceWon===g?!1:(n.ready=!0,n.level=a,n.baseX=r,n.baseY=s,n.campfire=o,n.fireX=c,n.fireY=l,n.first=u,n.garden=h,n.flag=d,n.harvest=f,n.raceWon=g,!0)}function of(n,e=[]){let t=n.values||(n.values=[]),i=!n.ready||n.count!==e.length,r=0;for(let s of e){let a=s.type??null,o=s.x??null,c=s.y??null,l=!!s.done,u=s.symbol??null,h=s.label??null;t[r]!==a&&(i=!0),t[r++]=a,t[r]!==o&&(i=!0),t[r++]=o,t[r]!==c&&(i=!0),t[r++]=c,t[r]!==l&&(i=!0),t[r++]=l,t[r]!==u&&(i=!0),t[r++]=u,t[r]!==h&&(i=!0),t[r++]=h}return t.length=r,n.ready=!0,n.count=e.length,i}function xa(n,e,t=0,i=0){let r=e?.x??null,s=e?.y??null;return n.ready&&n.pointX===r&&n.pointY===s&&n.offsetX===t&&n.offsetZ===i?!1:(n.ready=!0,n.pointX=r,n.pointY=s,n.offsetX=t,n.offsetZ=i,n.valid=r!==null&&s!==null,n.valid&&(n.x=r/we+t,n.z=s/we+i,n.y=Fn(n.x,n.z)),!0)}function gu(n,e,t,i=mu(t)){let r=Fn(n,e);if(!t)return r;let s=t.floor;if(Math.abs(n*we-s.x)<=s.w/2&&Math.abs(e*we-s.y)<=s.h/2)return Math.max(r,i+.16);let a=n*we-t.center.x,o=e*we-t.center.y,c=a*t.fy-o*t.fx,l=a*t.fx+o*t.fy;return Math.abs(c)<t.door/2&&l>t.depth/2&&l<t.depth/2+64?r+(Math.max(r,i+.16)-r)*(1-(l-t.depth/2)/64):r}function lf(n,e,t={}){let i=(d,f,g,x,m)=>{let p=new ht(m,new zt({color:f}));return p.position.set(...g),p.scale.set(...x),d.add(p),p},r=t.cube||((d,f,g,x)=>i(d,f,g,x,new un(1,1,1))),s=t.tube||((d,f,g,x)=>i(d,f,g,x,new Vt(1,1,1,10))),a=new Ne,o=n.width/we,c=n.depth/we,l=n.wallHeight/we,u=n.roofRidge/we,h=n.door/we;a.name="base",a.position.set(n.center.x/we,e,n.center.y/we),a.rotation.y=n.yaw,r(a,"#a68854",[0,.08,0],[o,.16,c]).name="floor";for(let d of[-o/2+.1,o/2-.1])for(let f of[-c/2+.1,c/2-.1])s(a,"#876742",[d,l/2,f],[.075,l,.075]).name="post";for(let d of[-1,1]){let f=r(a,"#ba7655",[d*o/4,(l+u)/2,0],[Math.hypot(o/2+.2,u-l),.1,c+.36]);f.rotation.z=-d*Math.atan2(u-l,o/2+.2),f.name="roof"}for(let d of n.walls){let f=d.x-n.center.x,g=d.y-n.center.y,x=(f*n.fy-g*n.fx)/we,m=(f*n.fx+g*n.fy)/we;r(a,"#e2dbc7",[x,l/2,m],[n.fy?d.w/we:d.h/we,l,n.fy?d.h/we:d.w/we]).name="wall"}if(n.walls.length>=5){let d=n.doorHeight/we;r(a,"#845f3f",[0,(l+d)/2,c/2],[h,l-d,.125]).name="lintel"}for(let d of n.beds){let f=d.x-n.center.x,g=d.y-n.center.y,x=(f*n.fy-g*n.fx)/we,m=(f*n.fx+g*n.fy)/we;r(a,"#7d654b",[x,.17,m],[.65,.34,1.125]).name="bed",r(a,"#cec6a0",[x,.38,m],[.65,.14,1.125]),r(a,"#ede3bd",[x,.49,m-.35],[.5,.09,.26])}return a}function cf(n,e,{cube:t,tube:i,ell:r}){if(n==="gather"&&(i(e,"#8c6944",[0,-.12,.15],[.025,.48,.025]),t(e,"#8e9891",[0,.1,.15],[.27,.1,.075])),n==="fish"){let s=i(e,"#b2915b",[0,.22,.25],[.014,1.25,.014]);s.rotation.x=-.6;let a=i(e,"#d0e6df",[0,.37,.75],[.003,.62,.003]);a.rotation.x=.6}if(n==="cook"){let s=i(e,"#80613d",[0,-.12,.18],[.016,.5,.016]);s.rotation.x=-.6,r(e,"#bb9457",[0,-.26,.3],[.07,.04,.14])}}function xu(n={},e="player",t={}){let i=new Map,r=new Map,s=t.mat||(I=>(i.has(I)||i.set(I,new zt({color:I})),i.get(I))),a=t.geo||((I,U)=>(r.has(I)||r.set(I,U()),r.get(I))),o=t.mesh||((I,U,G,X=[0,0,0],B=[1,1,1])=>{let ne=new ht(U,G);return ne.position.set(...X),ne.scale.set(...B),I.add(ne),ne}),c=t.ell||((I,U,G,X)=>o(I,a("ball",()=>new Tn(1,14,10)),s(U),G,X)),l=t.cube||((I,U,G,X)=>o(I,a("box",()=>new un(1,1,1)),s(U),G,X)),u=t.tube||((I,U,G,X)=>o(I,a("cyl",()=>new Vt(1,1,1,10)),s(U),G,X)),h=new Ne,d=new Ne;h.add(d);let f=n.skin||"#dda879",g=n.hair||"#43332b",x=n.shirt||"#4c9cba",m=new Ne;m.position.y=.87,d.add(m),c(m,"#3f4d4f",[0,.05,0],[.22,.17,.13]);let p=a("human-torso",()=>new ea([new We(.16,.13),new We(.205,.2),new We(.215,.38),new We(.25,.49),new We(.26,.52),new We(.19,.57),new We(.09,.64)],18));o(m,p,s(x),[0,0,0],[1,1,.66]);for(let I of[-1,1]){let U=l(m,x,[I*.065,.6,.071],[.085,.075,.024]);U.rotation.z=-I*.3,l(m,x,[I*.11,.37,.142],[.105,.09,.022])}for(let I=0;I<4;I++)c(m,"#d7d5c2",[0,.24+I*.075,.15],[.009,.01,.005]);e==="guard"&&l(m,"#39483f",[0,.35,.11],[.34,.36,.09]),l(m,"#3b4c48",[0,.135,-.01],[.4,.045,.255]),u(m,f,[0,.64,0],[.064,.13,.064]);let b=new Ne;b.position.y=.79,m.add(b),c(b,f,[0,0,0],[.135,.175,.133]),c(b,f,[-.137,-.005,0],[.025,.048,.025]),c(b,f,[.137,-.005,0],[.025,.048,.025]),c(b,f,[0,-.015,.136],[.026,.033,.036]);for(let I of[-1,1])c(b,"#f6f3df",[I*.052,.02,.115],[.03,.017,.014]),c(b,"#31433e",[I*.053,.02,.128],[.012,.013,.007]),l(b,g,[I*.052,.061,.11],[.062,.01,.014]);l(b,"#af735b",[0,-.071,.117],[.051,.009,.012]);let y=a("hair",()=>new Tn(1,16,10,0,Math.PI*2,0,Math.PI*.56));o(b,y,s(e==="nela"?"#8d4931":g),[0,.015,-.015],[.145,.18,.143]);let v=[new Ne,new Ne,new Ne];v.forEach(I=>b.add(I));let C=b.children.find(I=>I.isMesh&&I.geometry===y);b.remove(C),v[0].add(C),o(v[1],y,s(g),[0,.015,-.015],[.145,.18,.143]),c(v[1],g,[0,-.04,-.17],[.072,.14,.08]);for(let I=0;I<12;I++){let U=I*Math.PI*2/12;c(v[2],g,[Math.sin(U)*.1,.1+I%2*.018,Math.cos(U)*.1-.015],[.066,.067,.066])}if(c(v[2],g,[0,.15,-.015],[.09,.054,.09]),e==="nela"&&c(b,"#8d4931",[0,-.045,-.145],[.125,.21,.07]),v.forEach((I,U)=>I.visible=U===(n.style||0)),e==="leon")u(b,"#c5a775",[0,.15,0],[.16,.12,.16]),u(b,"#c5a775",[0,.095,0],[.22,.028,.22]),l(m,"#e4cda1",[0,.23,.145],[.33,.42,.025]);else if(e==="player"){c(m,"#5d735b",[0,.36,-.17],[.18,.22,.09]);for(let I of[-1,1])l(m,"#b6caa4",[I*.17,.38,-.04],[.034,.35,.029])}let R=[],L=[];for(let I of[-1,1]){let U=new Ne;U.position.set(I*.27,.54,0),m.add(U);let G=c(U,x,[-I*.018,-.025,0],[.105,.13,.11]);G.name="human-shoulder",o(U,a("human-upper-arm",()=>new Vt(.068,.086,.19,12)),s(x),[0,-.105,0]),o(U,a("human-lower-upper-arm",()=>new Vt(.055,.064,.15,12)),s(f),[0,-.24,0]);let X=new Ne;X.position.y=-.31,U.add(X);let B=c(X,f,[0,0,0],[.061,.063,.061]);B.name="human-elbow",o(X,a("human-forearm",()=>new Vt(.057,.04,.26,12)),s(f),[0,-.13,0]),c(X,f,[0,-.28,0],[.06,.082,.046]),R.push({arm:U,forearm:X,side:I});let ne=new Ne;ne.position.set(I*.115,0,0),m.add(ne),o(ne,a("human-thigh",()=>new Vt(.092,.108,.42,12)),s("#52625f"),[0,-.21,0]);let ie=new Ne;ie.position.y=-.43,ne.add(ie);let ye=c(ie,"#52625f",[0,0,.014],[.079,.074,.075]);ye.name="human-knee",o(ie,a("human-calf",()=>new Vt(.069,.046,.36,12)),s("#52625f"),[0,-.18,0]);let me=c(ie,"#52625f",[0,-.36,0],[.052,.06,.052]);me.name="human-ankle";let Oe=c(ie,"#4b3b2e",[0,-.395,.055],[.075,.052,.14]);L.push({thigh:ne,calf:ie,shoe:Oe,side:I})}let z=new Ne;u(z,"#8c6944",[0,.56,0],[.018,1.75,.018]),c(z,"#dad9c5",[0,1.45,0],[.045,.15,.03]),z.position.set(.35,.2,.08),d.add(z),z.visible=!1;let T={};for(let I of["gather","fish","cook"]){let U=new Ne;cf(I,U,{cube:l,tube:u,ell:c}),U.position.set(0,-.28,0),R[1].forearm.add(U),U.visible=!1,T[I]=U}let S=new Ne;h.add(S);for(let I=0;I<5;I++){let U=u(S,"#a17d48",[(I-2)*.25,.08,0],[.115,1.7,.115]);U.rotation.x=Math.PI/2}for(let I of[-.5,.5])l(S,"#6e5937",[0,.19,I],[1.24,.05,.1]);S.visible=!1;let A=[],O=[],N=[];return d.traverse(I=>{I.isMesh&&(I.material===s(x)&&A.push(I),I.material===s(f)&&O.push(I),I.material===s(g)&&N.push(I))}),{root:h,rig:d,hips:m,head:b,arms:R,legs:L,spear:z,raft:S,shirtParts:A,skinParts:O,hairParts:N,hairStyles:v,props:T,yaw:0,lastX:null,lastZ:null,phase:0,surfaceCache:{},rootTransformCache:{}}}function uf(n,e){let t=e&&fd(e.kind,e.phase);n.rig.rotation.x=t?.bend||0;for(let[i,r]of Object.entries(n.props))r.visible=!!t&&e.kind===i;if(t)for(let i of n.arms)i.arm.rotation.x=i.side<0?t.left:t.right,i.forearm.rotation.x=-.25,i.arm.rotation.z=-i.side*.08+((i.side>0||e.kind==="cheer")&&t.wave||0)}function hf(n,e,t,i={}){let r=n.phase||0,s=e*.65+r,a=Math.sin(s),o=Math.cos(s),c=n.x+a*14,l=n.y+o*14;return t(c,l)?(i.x=c/we,i.z=l/we,i.y=.055+Math.sin(e*3+r)*.008,i.yaw=Math.atan2(o,-a),i.yawSin=o,i.yawCos=-a,i):null}function df(n,e,t=20*we){let i=n.x-e.x,r=n.y-e.y;return i*i+r*r<=t*t}function Fl(n,e,t,i,r,s,a,o,c=0){return n.position.set(e.x+e.yawSin*r+e.yawCos*t,e.y+i,e.z+e.yawCos*r-e.yawSin*t),n.rotation.set(c,e.yaw,0),n.scale.set(s,a,o),n.updateMatrix(),n}function ff(n=!1){return 1e3/(n?20:30)}function V_({canvas:n,terrain:e,getState:t,onLost:i}){let r=new ms(Ml(n)),s=innerWidth<=700,a=ff(s);r.setPixelRatio(Math.min(devicePixelRatio||1,s?1.25:1.6)),r.setSize(innerWidth,innerHeight,!1),r.outputColorSpace=Yt,r.toneMapping=os,r.toneMappingExposure=.94,r.shadowMap.enabled=!0,r.shadowMap.type=as,r.shadowMap.autoUpdate=!1;let o=new sr;o.background=new Je("#c5dbe5"),o.fog=new rr("#c5dbe5",70,240);let c=new Qt(72,innerWidth/innerHeight,.04,350);o.add(c);let l=new ur("#c9e3ff","#71694d",1.85);o.add(l);let u=new dr("#fff0d2",3.1);u.castShadow=!0,u.shadow.mapSize.set(s?1024:2048,s?1024:2048),u.shadow.camera.left=-16,u.shadow.camera.right=16,u.shadow.camera.top=16,u.shadow.camera.bottom=-16,u.shadow.camera.near=.5,u.shadow.camera.far=65,u.shadow.bias=-12e-5,u.shadow.normalBias=.012,o.add(u,u.target);let h=bl(r),d=new Map,f=new Map;function g(_,E={}){if(!Object.keys(E).length){let Z=h.forColor(_);if(Z)return Z}let H=_+JSON.stringify(E);return d.has(H)||d.set(H,new zt({color:_,roughness:.86,...E})),d.get(H)}function x(_,E){return f.has(_)||f.set(_,E()),f.get(_)}function m(){return x("ball",()=>new Tn(1,14,10))}function p(){return x("box",()=>new un(1,1,1))}function b(){return x("cyl",()=>new Vt(1,1,1,10))}function y(_,E,H,Z=[0,0,0],ce=[1,1,1],fe=!0){let de=new ht(E,H);return de.position.set(...Z),de.scale.set(...ce),de.castShadow=fe,de.receiveShadow=!0,_.add(de),de}function v(_,E,H,Z){return y(_,m(),g(E),H,Z)}function C(_,E,H,Z){return y(_,p(),g(E),H,Z)}function R(_,E,H,Z){return y(_,b(),g(E),H,Z)}let L=new Rt,z=new Ln(4600/we,2900/we,230,145);z.rotateX(-Math.PI/2),z.translate(2300/we,0,1450/we);let T=z.attributes.position;for(let _=0;_<T.count;_++)T.setY(_,Fn(T.getX(_),T.getZ(_)));z.computeVertexNormals();let S=pd(e),A=new zi(S);A.anisotropy=Math.min(4,r.capabilities.getMaxAnisotropy());let O=h.ground(A),N=new ht(z,O);N.receiveShadow=!0,o.add(N);let I=_d({segments:s?24:48}),U=40;I.scale.set(1/U,1,1/U),I.position.x=6500/we;for(let _ of I.children)_.material.dispose(),_.material=Rl(h,U),_.geometry.setAttribute("color",new et(new Float32Array(_.geometry.attributes.position.count*3).fill(1),3));let G=new Ne;G.scale.set(U,1,U),I.add(G);let X=(_,E)=>{let H=xd(_,E);return H?Mr(H,_,E):-.32};Il(G,ti,{scale:U,height:X,surfaces:h,small:s,clear:(_,E,H)=>br({x:E,z:H},_.id)||_.id==="home"&&(Math.abs(H-40)<55||Math.abs(E-23)<45)}),Pl(G,{scale:U,height:X,surfaces:h,helpers:{cube:C,tube:R,ell:v}}),o.add(I);let B=pu(N)+pu(I),ne=md(o,Fn,we,S,s),ie=Al([...Fd.map(([_,E,H,Z])=>[_/we,E/we,H/we,Z/we]),...ti.map(_=>[I.position.x+_.x/U,_.z/U,_.radius*.955/U,_.radius*.955/U])]);o.add(ie.mesh);let ye=Cl(320);o.add(ye);function me(){let _=[],E=[],H=[],Z=(fe,de,Ze,ze)=>{let $e=de*2.05,xt=Math.sin(de*Math.PI)*.46-de*de*.8;return[Math.sin(fe)*$e+Math.cos(fe)*ze*Ze,xt-ze*.22,Math.cos(fe)*$e-Math.sin(fe)*ze*Ze]};for(let fe=0;fe<11;fe++){let de=fe*Math.PI*2/11;for(let Ze=1;Ze<17;Ze++)for(let ze of[-1,1]){let $e=Ze/18,xt=Math.sin($e*Math.PI)*.42,dt=_.length/3;_.push(...Z(de,$e-.023,ze,.015),...Z(de,$e-.085,ze,xt),...Z(de,$e+.038,ze,xt*.88),...Z(de,$e+.025,ze,.015)),H.push($e,0,$e,.9,$e+.03,1,$e+.03,0),E.push(dt,dt+1,dt+2,dt,dt+2,dt+3)}}let ce=new Lt;return ce.setAttribute("position",new et(_,3)),ce.setAttribute("uv",new et(H,2)),ce.setIndex(E),ce.computeVertexNormals(),ce}let Oe=new Vt(.085,.16,4.35,14,12);Oe.translate(0,2.175,0);for(let _=0;_<Oe.attributes.position.count;_++){let E=Oe.attributes.position;E.setX(_,E.getX(_)+.16*(E.getY(_)/4.35)**2)}Oe.computeVertexNormals();let pt=g("#9d7750",{bumpMap:h.textures.get("rock"),bumpScale:.025});pt.onBeforeCompile=_=>{_.vertexShader=_.vertexShader.replace("#include <common>",`#include <common>
varying float vTrunkY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vTrunkY=position.y;`),_.fragmentShader=_.fragmentShader.replace("#include <common>",`#include <common>
varying float vTrunkY;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=.80+.20*smoothstep(.1,.25,fract(vTrunkY*7.));`)};let tt=me(),$=h.surface("leaf","#ffffff",1,.018).clone();$.side=Gt;let j={value:0};$.onBeforeCompile=_=>{_.uniforms.uWind=j,_.vertexShader=_.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.y+=sin(uWind+position.x*2.0+position.z)*length(position.xz)*.018;`)};let se={tree:new It(Oe,pt,400),leaves:new It(tt,$,400),rock:new It(new or(1,2),g("#92968b"),400),food:new It(m(),g("#7a5638"),400),shell:new It(new Tn(1,12,6,0,Math.PI),g("#f1d0b7"),400)};for(let _ of Object.values(se))_.count=0,_.castShadow=!0,_.receiveShadow=!0,_.frustumCulled=!1,o.add(_);let Ae=-1,Te=0;function nt(_,E){if(Jd(Ae,E)){let H={tree:0,leaves:0,rock:0,food:0,shell:0};for(let Z of _){let ce=Z.x/we,fe=Z.y/we,de=Fn(ce,fe),Ze=Z.phase||0;if(Z.t==="tree"){let ze=Math.sin(Ze),$e=Math.cos(Ze),xt=.84+.17*Math.sin(Z.x*.033+Z.y*.027),dt=1.35+.28*$e;L.position.set(ce,de,fe),L.rotation.set(.03*ze,Ze,.04*$e),L.scale.set(xt,dt,xt),L.updateMatrix(),se.tree.setMatrixAt(H.tree++,L.matrix),L.position.set(ce+.16*xt*$e,de+4.3*dt,fe-.16*xt*ze),L.rotation.set(0,Ze,0),L.scale.set(xt,xt,xt),L.updateMatrix(),se.leaves.setMatrixAt(H.leaves++,L.matrix)}else se[Z.t]&&(L.position.set(ce,de+(Z.t==="rock"?.23:Z.t==="food"?.13:.025),fe),L.rotation.set(0,Ze,0),L.scale.set(...Z.t==="rock"?[.34+.18*Math.abs(Math.sin(Ze)),.3,.4]:Z.t==="food"?[.15,.13,.15]:[.12,.04,.14]),L.updateMatrix(),se[Z.t].setMatrixAt(H[Z.t]++,L.matrix))}for(let Z of["tree","leaves","rock","food","shell"])se[Z].count=H[Z],se[Z].instanceMatrix.needsUpdate=!0;Ae=E,Te++}}let ot=new Set,D=new k;function _t(_,E="#ffe9b5"){let H=document.createElement("canvas");H.width=512,H.height=96;let Z=H.getContext("2d");Z.fillStyle="#123e43",Z.beginPath(),Z.roundRect(6,10,500,76,25),Z.fill(),Z.fillStyle=E,Z.font="700 29px system-ui",Z.textAlign="center",Z.textBaseline="middle",Z.fillText(String(_).slice(0,45),256,48,480);let ce=new zi(H);ce.colorSpace=Yt;let fe=new Ks(new ts({map:ce,depthTest:!0,transparent:!0}));return fe.scale.set(2.45,.46,1),fe.position.y=2.32,ot.add(fe),fe}let Ke=["#4c9cba","#df8168","#9974c7","#76b677"];function qe(_={},E="player",H=""){let Z=xu(_,E,{ell:v,cube:C,tube:R,mesh:y,mat:g,geo:x});return o.add(Z.root),Z.name=H,Z.tag=null,H&&(Z.tag=_t(H,_.shirt),Z.root.add(Z.tag)),Z}let Ee=qe(vl()),wt=new Map,Re=qe({skin:"#d1a074",shirt:"#b49966"},"leon","LEON \xB7 HANDEL"),it=qe({skin:"#edc39a",shirt:"#609991"},"nela","NELA \xB7 ZADANIA");function Pt(_,E,H){!E||E===_.name||(_.tag&&(ot.delete(_.tag),_.root.remove(_.tag),_.tag.material.map.dispose(),_.tag.material.dispose()),_.name=E,_.tag=_t(E,H),_.root.add(_.tag))}function St(_,E){if(tf(_,E)){for(let H of _.shirtParts)H.material=g(_.lookShirt);for(let H of _.skinParts)H.material=g(_.lookSkin);for(let H of _.hairParts)H.material=g(_.lookHair);_.hairStyles.forEach((H,Z)=>H.visible=Z===_.lookStyle)}}let P=null,M=0,Y={},ee={idleHip:0,idleArmSin:0,idleArmCos:0},oe={yawSin:0,yawCos:1,phaseSin:0,phaseCos:1},Q={hip:0,knee:0},Pe={x:0,z:0,y:0,yaw:0,yawSin:0,yawCos:1};function he(_,E,H,Z,ce,fe,de,Ze,ze=!1,$e=null,xt=!1,dt=!1,Ve=!0,He=Ve){let fn=_.surfaceCache||(_.surfaceCache={});rf(fn,E,Ze,P,M);let{x:jt,z:Rn,wet:At,surface:ke}=fn;sf(_.root,_.rootTransformCache||(_.rootTransformCache={}),jt,ke+(At?ze?.18:-.95:0),Rn),_.yaw=Wd(_.yaw,H,fe),Gd(_.rig,Ve),Hd(_.rig,_.yaw,Ve);let bt=Z&&de>.05;if(_.phase+=bt?fe*(de>4?10:7):0,Ve){let sn=bt?de>4?.31:.22:0,zn=_.phase,In=At&&!ze,_n=jd(oe,zn,_.yaw,bt,In,ee);_.hips.position.y=_n.hips;for(let $t of _.legs){let Ol=$t.side<0?-_n.phaseSin:_n.phaseSin,pf=$t.side<0?-_n.phaseCos:_n.phaseCos,Bl=Ol*sn,mf=bt?Math.max(0,pf)*.105:0,gf=jt+_n.yawCos*$t.side*.115+_n.yawSin*Bl,xf=Rn-_n.yawSin*$t.side*.115+_n.yawCos*Bl,_f=At?0:gu(gf,xf,P,M)-ke,Ma=ef(-_.hips.position.y+.07+_f+mf,Bl,Q);$t.thigh.rotation.x=Ma.hip,$t.calf.rotation.x=Ma.knee,$t.shoe.rotation.x=-Ma.hip-Ma.knee}for(let $t of _.arms)$t.arm.rotation.x=bt?($t.side<0?_n.phaseSin:-_n.phaseSin)*.45:(ee.idleArmSin*Ud+ee.idleArmCos*$t.side*Nd)*.025,$t.arm.rotation.z=-$t.side*.07,$t.forearm.rotation.x=bt?-.22:-.08,In&&($t.arm.rotation.x=-Math.PI/2+(_n.phaseSin*Ud+_n.phaseCos*$t.side*Nd)*.35,$t.forearm.rotation.x=-.28);uf(_,$e),dt&&(_.arms[0].arm.rotation.x=-1,_.arms[0].forearm.rotation.x=-1)}_.spear.visible=!!xt&&!At&&!$e,_.rig.visible=He,_.raft.visible=!!(At&&ze),_.raft.rotation.y=_.yaw,_.tag&&(_.tag.visible=Math.hypot(jt-Ee.root.position.x,Rn-Ee.root.position.z)<13),_.lastX=jt,_.lastZ=Rn}let ve=new Ne;o.add(ve);for(let _ of[-.55,.55])for(let E of[-.27,.27])R(ve,"#866642",[_,1.24,E],[.038,2.48,.038]);C(ve,"#a7c4b7",[0,.34,0],[1.24,.68,.67]),C(ve,"#a98961",[0,.69,0],[1.24,.09,.67]);for(let _ of[-1,1]){let E=C(ve,"#ba7655",[_*.39,2.63,0],[.9,.07,1.14]);E.rotation.z=-_*.34}let Fe=R(ve,"#ba7655",[0,2.79,0],[.055,1.18,.055]);Fe.rotation.x=Math.PI/2;for(let _ of[-.5,.5])C(ve,"#e2dbc7",[0,2.4,_],[1.7,.1,.07]);for(let _=0;_<5;_++)C(ve,"#a98961",[(_-2)*.24,.32,.344],[.21,.53,.025]);for(let _=0;_<4;_++)v(ve,"#b1b967",[(_-1.5)*.19,.78,0],[.09,.08,.08]);let le=new Ne;o.add(le),C(le,"#765734",[0,.18,0],[.56,.36,.4]),C(le,"#9a743e",[0,.39,0],[.6,.1,.42]);for(let _ of[-.19,.19])C(le,"#d5b15a",[_,.2,.215],[.045,.35,.026]);C(le,"#ecd178",[0,.32,.22],[.08,.09,.03]);let ge=new ht(new lr(.24,.29,32),new Sn({color:"#ffe087",transparent:!0,opacity:.8,side:Gt,depthWrite:!1}));ge.rotation.x=-Math.PI/2,o.add(ge);let Be={},be={},xe={},je={},V={root:new Ne,tag:null,name:null};o.add(V.root),V.root.position.set(fa.x/we,Fn(fa.x/we,fa.y/we),fa.y/we),R(V.root,"#786040",[0,.95,0],[.12,1.9,.12]),C(V.root,"#234f58",[0,1.65,0],[1.55,.55,.1]);let ue=new Ne;o.add(ue);let pe=new ht(new lr(.93,1.06,40),new Sn({color:"#54e4ef",transparent:!0,opacity:.85,side:Gt,depthWrite:!1}));pe.rotation.x=-Math.PI/2,pe.position.y=.04,ue.add(pe);let Se=y(ue,new Vt(.035,.035,1,8),new Sn({color:"#76eff7",transparent:!0,opacity:.5}),[0,1.25,0],[1,2.5,1],!1),ae=null,te=0,Ue={},Xe=new Ne,ct=null,ut=null,ln=[],cn=0;o.add(Xe);function Wi(_){let E=_.activities?.completed||0,H=E>=3&&_.activities.gardenClaimed<E;if(af(Ue,_)){ut&&(ut.geometry.dispose(),ut.material.dispose());for(let Z of ln)Z.dispose();if(ln=[],o.remove(Xe),Xe=new Ne,o.add(Xe),ut=null,ct=null,_.basePos&&_.baseLevel){let Z=P,ce=gd(lf(Z,M,{cube:C,tube:R}),Z,{cube:C,tube:R},h);if(Xe.add(ce),ce.traverse(fe=>{["roof","wall","lintel"].includes(fe.name)&&(fe.material=fe.material.clone(),fe.material.transparent=!0,ln.push(fe.material))}),E>=1)for(let fe of[-1,1]){let de=v(ce,"#ffdc80",[fe*(Z.width/we/2-.15),2.35,Z.depth/we/2],[.09,.14,.09]);de.material=g("#ffdc80",{emissive:"#dca739",emissiveIntensity:.7})}if(E>=6&&(R(ce,"#6e5942",[Z.width/we/2+.2,1.75,-Z.depth/we/2],[.03,3.5,.03]),C(ce,"#5bbca9",[Z.width/we/2+.55,3.1,-Z.depth/we/2],[.7,.42,.03])),E>=3&&_.garden){let fe=_.garden,de=new Ne;de.position.set(fe.x/we,Fn(fe.x/we,fe.y/we),fe.y/we),Xe.add(de),C(de,"#785d40",[0,.07,0],[1.35,.14,1]);for(let Ze of[-.4,0,.4])for(let ze of[-.25,.25])R(de,"#587b37",[Ze,.21,ze],[.025,.3,.025]),v(de,"#6caa49",[Ze,.35,ze],[.16,.12,.12]),H&&v(de,"#cfa565",[Ze+.055,.27,ze],[.07,.065,.07])}}if(_.campfire&&_.fire){let Z=new Ne,ce=_.fire.x/we,fe=_.fire.y/we;Z.position.set(ce,Fn(ce,fe),fe),Xe.add(Z);for(let de=0;de<8;de++){let Ze=de*Math.PI/4;v(Z,"#777a6b",[Math.sin(Ze)*.3,.07,Math.cos(Ze)*.3],[.095,.07,.105])}for(let de of[.5,-.5]){let Ze=R(Z,"#614b35",[0,.09,0],[.06,.5,.06]);Ze.rotation.z=Math.PI/2,Ze.rotation.y=de}ut=y(Z,new Kn(.17,.46,8),new Sn({color:"#ffb647",transparent:!0,opacity:.88}),[0,.28,0]),ct=new hr("#ffa145",2.5,4),ct.position.y=.5,Z.add(ct)}qd(qt,0,Xe)&&cn++}}let vn=[],Ti=[0,0,0,0];function wr(){let _=new Ne;o.add(_),v(_,"#765745",[0,.29,0],[.24,.25,.43]),v(_,"#765745",[0,.3,.4],[.19,.18,.2]),v(_,"#ae8b68",[0,.26,.58],[.11,.065,.065]);for(let H of[-1,1]){let Z=y(_,new Kn(.08,.17,3),g("#644937"),[H*.13,.47,.43]);Z.rotation.z=H*.45}let E=[];for(let H of[-.17,.17])for(let Z of[-.27,.24])E.push(R(_,"#5e493b",[H,.105,Z],[.037,.2,.037]));return{root:_,legs:E,lastX:null,lastZ:null,walking:!1,frameState:{moved:!0,walking:!1,pose:!0}}}function kn(_,E){for(;vn.length<_.length;)vn.push(wr());let H=!1;for(let Z=0;Z<vn.length;Z++){let ce=vn[Z],fe=_[Z];if(ce.root.visible=!!fe,!fe){ce.lastX=ce.lastZ=null,ce.walking=!1;continue}let de=fe.x/we,Ze=fe.y/we,ze=Kd(ce.frameState,ce.lastX,ce.lastZ,de,Ze,ce.walking),$e=ce.lastX===null?0:de-ce.lastX,xt=ce.lastZ===null?0:Ze-ce.lastZ;if(ze.moved&&(ce.root.position.set(de,Fn(de,Ze),Ze),ze.walking&&(ce.root.rotation.y=Math.atan2($e,xt))),ze.walking&&!H&&($d(Ti,E),H=!0),ze.pose)for(let dt=0;dt<4;dt++)ce.legs[dt].rotation.x=ze.walking?Ti[dt]:0;ce.lastX=de,ce.lastZ=Ze,ce.walking=ze.walking}}let En=[new It(m(),g("#adddd0",{roughness:.4}),96),new It(new Kn(1,1,3),g("#668e93"),96),new It(new Kn(1,1,3),g("#779da0"),96)];for(let _ of En)_.count=0,_.frustumCulled=!1,o.add(_);let Xi=0;function Cn(_,E,H,Z){let ce=0;for(let fe of _||[]){if(!df(fe,Z))continue;let de=hf(fe,E,H,Pe);!de||ce>=96||(Fl(L,de,0,0,0,.09,.045,.22),En[0].setMatrixAt(ce,L.matrix),Fl(L,de,0,0,-.25,.095,.12,.025,Math.PI/2),En[1].setMatrixAt(ce,L.matrix),Fl(L,de,0,.045,-.02,.04,.1,.11),En[2].setMatrixAt(ce,L.matrix),ce++)}for(let fe of En)fe.count=ce,fe.instanceMatrix.needsUpdate=!0}let qi={},Vn=[];function Yi(_,E){if(of(qi,_)){for(let H of Vn)o.remove(H),H.traverse(Z=>{Z.isSprite&&(ot.delete(Z),Z.material.map.dispose(),Z.material.dispose()),Z.userData.privateGeometry&&Z.geometry.dispose()});Vn=[];for(let H of _||[]){if(H.type==="return")continue;let Z=new Ne;Z.position.set(H.x/we,Fn(H.x/we,H.y/we),H.y/we),o.add(Z),Vn.push(Z);let ce=new ht(new lr(.4,.46,28),g(H.done?"#6d9c89":"#8cebd5",{side:Gt}));if(ce.rotation.x=-Math.PI/2,ce.position.y=.03,ce.userData.privateGeometry=!0,Z.add(ce),H.type==="fragment"&&(C(Z,"#e1c587",[0,.38,0],[.37,.45,.06]),C(Z,"#a68752",[0,.18,-.035],[.035,.42,.035]),C(Z,"#826b4d",[0,.4,.035],[.19,.022,.02])),H.type==="rune"){v(Z,"#87998a",[0,.26,0],[.27,.3,.21]);let de=_t(H.symbol,"#ffe29b");de.position.y=.8,de.scale.set(.65,.32,1),Z.add(de)}if(H.type==="chest"){C(Z,"#795a39",[0,.2,0],[.65,.4,.44]),C(Z,"#bb9251",[0,.42,0],[.69,.06,.46]);for(let de of[-.21,.21])C(Z,"#f1d584",[de,.23,.235],[.05,.36,.025])}if(H.type==="signal"){for(let de of[-1,1]){let Ze=R(Z,"#8a6d49",[de*.22,.55,0],[.04,1.1,.04]);Ze.rotation.z=de*.22}if(C(Z,"#927652",[0,1.1,0],[.7,.16,.45]),H.done){let de=v(Z,"#ffe28d",[0,1.34,0],[.16,.21,.16]);de.material=g("#ffe28d",{emissive:"#ffa842",emissiveIntensity:1})}else C(Z,"#344f57",[0,1.3,0],[.3,.18,.24])}let fe=_t(H.label,H.done?"#b5d1c5":"#ffe9b5");fe.position.y=H.type==="signal"?1.95:1.35,Z.add(fe),Z.userData.done=H.done}}for(let H of Vn)H.children[0].scale.setScalar(H.userData.done?1:1+Math.sin(E*2.8)*.05)}let Gn=[];for(let _=0;_<4;_++){let E=new Lt().setFromPoints([new k(-.3,0,0),new k(0,-.08,0),new k(.3,0,0)]),H=new ar(E,new Fi({color:"#fff7de"}));o.add(H),Gn.push(H)}let Ai=Math.atan2(-130,-60),Ei=0,Zi=4.8,Mn=!0,w=!0,W=0,J=null,K=!1,q=0,re="first",_e={},Ie=-1/0,Ce=0,De=new Ne;c.add(De);let Ye=R(De,"#52625f",[.28,-.36,-.42],[.1,.34,.1]);Ye.rotation.x=-.65;let Ge=v(De,"#dda879",[.29,-.27,-.58],[.055,.08,.055]),rt=new Ne;De.add(rt);let Tt=R(rt,"#876742",[.32,-.17,-.75],[.014,1.55,.014]);Tt.rotation.x=-.22;let Bt=v(rt,"#b3b6ac",[.32,.61,-.91],[.039,.12,.025]),mt={};for(let _ of["gather","fish","cook"]){let E=new Ne;E.position.set(.29,-.26,-.61),De.add(E),cf(_,E,{cube:C,tube:R,ell:v}),mt[_]=E}let Mt=Object.entries(mt),Le={down:0,up:Math.PI,left:-Math.PI/2,right:Math.PI/2},Ut=new Set;De.traverse(_=>{_.isMesh&&(_.castShadow=!1,_.receiveShadow=!1,_.frustumCulled=!1)});let Qe=new k,Ht=new k,Ot=new k,Jt=new k,ni={position:Ot,target:Qe},gt={x:0,z:0,surface:0,yaw:0,pitch:0,mode:"first",distance:4.8,bob:0},rn={},Xt=new k,Wt=new fr,qt=[Xe,ve],Ji=[],Hn={position:new k},_a=0,ya=_=>_.object.isMesh&&_.distance>.1;function Ts(_,E=0){!Mn||t().paused||(Ai+=_,Ei=Hi(Ei+E,re==="first"?-1.12:-.05,re==="first"?1.12:.75))}function As(_){re=_==="third"?"third":"first",Ei=_==="third"?.22:0,c.fov=_==="third"?58:72,c.updateProjectionMatrix(),J=null,w=!0,ws(_e,!0,!0)}n.addEventListener("pointerdown",_=>{let E=t();!Mn||!E.play||E.paused||_.button>0||J||(J={id:_.pointerId,x:_.clientX,y:_.clientY},n.setPointerCapture(_.pointerId))}),n.addEventListener("pointermove",_=>{!J||J.id!==_.pointerId||(Ts(-(_.clientX-J.x)*.006,(_.clientY-J.y)*.005),J.x=_.clientX,J.y=_.clientY)});let Es=_=>{J?.id===_.pointerId&&(J=null)};for(let _ of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(_,Es);n.addEventListener("wheel",_=>{!Mn||t().paused||(_.preventDefault(),re==="first"?(c.fov=Hi(c.fov+_.deltaY*.025,58,85),c.updateProjectionMatrix()):Zi=Hi(Zi+_.deltaY*.004,2.5,8))},{passive:!1}),n.addEventListener("webglcontextlost",_=>{_.preventDefault(),K=!0,Mn=!1,J=null,i()}),n.addEventListener("webglcontextrestored",()=>{K=!1,w=!0,Ie=-1/0,ws(_e,!0,!0)});function Tr(){ws(_e,!0,!0),r.setSize(innerWidth,innerHeight,!1),c.aspect=innerWidth/innerHeight,c.updateProjectionMatrix()}function zl(_){if(!Mn||K)return;let E=t();if(!ws(_e,E.paused))return;let H=_/1e3,Z=W?Hi((_-W)/1e3,0,.06):1/60;W=_,Zd(ee,H),nf(Y,E.basePos,E.baseLevel),P=Y.layout,M=Y.elevation,Pt(V,E.labels?.board,"#ffe087"),V.tag&&(V.tag.position.y=1.65,V.tag.scale.set(1.4,.36,1)),ue.visible=!!E.trail,E.trail&&(xa(xe,E.trail)&&ue.position.set(xe.x,xe.y,xe.z),Se.material.opacity=.35+.13*Math.sin(H*3),(te!==E.trailNumber||ae?.userData.text!==(E.trailNumber===4?E.labels?.finish||"4":E.trailNumber?String(E.trailNumber):E.trail.label))&&(ae&&(ot.delete(ae),ue.remove(ae),ae.material.map.dispose(),ae.material.dispose()),te=E.trailNumber,ae=_t(te===4?E.labels?.finish||"4":te?String(te):E.trail.label,"#54e4ef"),ae.userData.text=te===4?E.labels?.finish||"4":te?String(te):E.trail.label,ae.position.y=1.5,ae.scale.set(E.trailNumber?1:2.45,.4,1),ue.add(ae))),Pt(Re,E.labels?.leon,"#b49966"),Pt(it,E.labels?.nela,"#609991");let ce=E.P.x/we,fe=E.P.y/we;h.update(),ne.update(H,P),j.value=H,ye.material.uniforms.uTime.value=H,nt(E.objects,E.resourceRevision),Cn(E.fishes,H,E.sea,E.P),Xi=En[0].count,Yi(E.chapterMarkers,H),he(Ee,E.P,Number.isFinite(E.heading)?E.heading:Le[E.face]||0,E.moving,H,Z,E.fast?5.25:3,E.sea,E.raft,E.motion,E.spear,E.blocked,Vd(re)),Re.root.visible=it.root.visible=!0,he(Re,E.leon,Math.atan2(ce-E.leon.x/we,fe-E.leon.y/we),!1,H,Z,0,E.sea,!1,null,!1,!1,Nl(E.leon,E.P),!0),he(it,E.nela,Math.atan2(ce-E.nela.x/we,fe-E.nela.y/we),!1,H,Z,0,E.sea,!1,null,!1,!1,Nl(E.nela,E.P),!0),Ut.clear();for(let Ve of E.players){if(Ve.id===E.you)continue;Ut.add(Ve.id);let He=wt.get(Ve.id),fn,jt=E.looks[Ve.slot]||k_;!He||He.name!==Ve.name?(fn=Ve.appearance?vl(Ve.appearance):jt,He&&Cs(He),He=qe(fn,"player",Ve.name),He.remoteLook={...fn},He.remoteMotion={kind:null,phase:0},wt.set(Ve.id,He)):fn=Ve.appearance?ru(He.remoteLook,Ve.appearance):jt,St(He,fn);let Rn=He.lastX===null?0:Ve.point.x/we-He.lastX,At=He.lastZ===null?0:Ve.point.y/we-He.lastZ,ke=Ve.moving&&Math.hypot(Rn,At)>.002?Math.atan2(Rn,At):Le[Ve.face]||0,bt=kd(He.remoteMotion,Ve.motion,Ve.received,_);he(He,Ve.point,ke,Ve.moving,H,Z,3,E.sea,!1,bt,E.spearOwned&&!Ve.spearStowed,Ve.blocked,Nl(Ve.point,E.P),!0)}for(let[Ve,He]of wt)Ut.has(Ve)||(Cs(He),wt.delete(Ve));St(Ee,E.appearance||vl()),xa(Be,E.leon,.9,.15)&&(ve.position.set(Be.x,Be.y,Be.z),ve.updateWorldMatrix(!0,!0),cn++),xa(be,E.chest)&&le.position.set(be.x,be.y,be.z),le.visible=!E.treasure,Wi(E),kn(E.enemies,H);let de=P&&Math.abs(E.P.x-P.floor.x)<P.floor.w/2&&Math.abs(E.P.y-P.floor.y)<P.floor.h/2;for(let Ve of ln)Ve.opacity=de&&re==="third"?.23:1,Ve.depthWrite=!(de&&re==="third");ut&&(ut.scale.y=1+Math.sin(H*13)*.18,ct.intensity=2.5+Math.sin(H*17)*.4),Bd(rn,E.objects,E.P,E.resourceRevision);let Ze=rn.nearest;ge.visible=!!(E.play&&!E.paused&&Ze),Ze&&xa(je,Ze)&&ge.position.set(je.x,je.y+.03,je.z);for(let Ve=0;Ve<Gn.length;Ve++){let He=Gn[Ve];He.position.set(19+Math.sin(H*.08+Ve*1.7)*8,7+Math.sin(H*.2+Ve)*.5,12+Math.cos(H*.1+Ve*1.3)*5),He.rotation.y=H*.1+Ve,He.scale.y=1+Math.sin(H*7+Ve)*.5}let ze=E.moving&&!E.paused?Math.sin(Ee.phase*2)*.012:0;if(gt.x=ce,gt.z=fe,gt.surface=Ee.root.position.y,gt.yaw=Ai,gt.pitch=Ei,gt.mode=re,gt.distance=Zi*(c.aspect<.85?1.12:1),gt.bob=ze,Sl(gt,ni),re==="third"){Ot.y=Math.max(Ot.y,Fn(Ot.x,Ot.z)+.55);let Ve=Hn;if(Yd(Ve,Ot,Qe,cn)){Xt.subVectors(Ot,Qe);let He=Xt.length();Xt.normalize(),Wt.set(Qe,Xt),Wt.near=.08,Wt.far=He,_a++;let fn=wl(Wt,qt,!0,Ji).find(ya);fn&&Ot.copy(Qe).addScaledVector(Xt,Math.max(.35,fn.distance-.15)),Ve.position.copy(Ot)}else Ot.copy(Ve.position)}re==="first"||w||Jt.distanceTo(Ee.root.position)>5?(c.position.copy(Ot),Ht.copy(Qe),w=!1):(au(c.position,Ot,Z,8),au(Ht,Qe,Z,12)),c.lookAt(re==="first"?Qe:Ht),Jt.copy(Ee.root.position),Qd(ot,c,innerWidth,D);let $e=!!E.spear||!!E.motion&&(E.motion.kind==="gather"||E.motion.kind==="fish"||E.motion.kind==="cook"),xt=re==="first"&&E.play&&$e&&Xd(re,E.play,$e,E.sea(E.P.x,E.P.y));if(De.visible=xt,xt){rt.visible=!!E.spear&&!E.motion;for(let[Ve,He]of Mt)He.visible=E.motion?.kind===Ve;De.position.y=ze*.4,De.rotation.x=E.motion?Math.sin(E.motion.phase*Math.PI*2)*.07:0,Ge.material=g(E.appearance?.skin||"#dda879"),Ye.material=g(E.appearance?.shirt||"#4c9cba")}let dt=_-Ie>=a;r.shadowMap.needsUpdate=dt,dt&&(Tl(u,ce,fe),Ie=_,Ce++),El(ye,c.position),ie.update(H,c.position),r.render(o,c),E.play&&Z>.038?q+=Z:q=Math.max(0,q-Z),q>3&&r.getPixelRatio()>.85&&(r.setPixelRatio(Math.max(.85,r.getPixelRatio()-.15)),Tr(),q=0)}function Cs(_){o.remove(_.root),_.tag&&(ot.delete(_.tag),_.tag.material.map.dispose(),_.tag.material.dispose())}function va(_){return Mn=!!_&&!K,J=null,w=!0,W=0,Ie=-1/0,Mn&&ws(_e,!0,!0),Mn}function F(){Mn=!1,r.dispose(),z.dispose(),O.dispose(),ie.dispose(),ye.geometry.dispose(),ye.material.dispose(),I.traverse(_=>{_.geometry&&_.geometry.dispose(),_.material&&_.material.dispose()}),A.dispose(),ne.dispose(),h.dispose(),$.dispose();for(let _ of[...Object.values(se),...En])_.geometry.dispose(),_.dispose();for(let _ of f.values())_.dispose();for(let _ of d.values())_.dispose()}return{frame:zl,resize:Tr,orbit:Ts,setEnabled:va,setCamera:As,dispose:F,vector:(_,E)=>zd(_,E,Ai),get enabled(){return Mn},get yaw(){return Ai},get cameraMode(){return re},stats:()=>({calls:r.info.render.calls,triangles:r.info.render.triangles,pixelRatio:r.getPixelRatio(),people:wt.size+3,visibleFish:Xi,camera:re,eye:c.position.toArray(),cameraRaycasts:_a,resourceStaticUpdates:Te,nearbyResourceScans:rn.scans||0,shadowUpdates:Ce,frozenStaticTransforms:B,materials:h.stats()})}}return wf(G_);})();
