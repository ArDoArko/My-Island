var MyIsland3D=(()=>{var Ml=Object.defineProperty;var Bd=Object.getOwnPropertyDescriptor;var kd=Object.getOwnPropertyNames;var Vd=Object.prototype.hasOwnProperty;var Gd=(n,e)=>{for(var t in e)Ml(n,t,{get:e[t],enumerable:!0})},Hd=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of kd(e))!Vd.call(n,r)&&r!==t&&Ml(n,r,{get:()=>e[r],enumerable:!(i=Bd(e,r))||i.enumerable});return n};var Wd=n=>Hd(Ml({},"__esModule",{value:!0}),n);var Yx={};Gd(Yx,{SCALE:()=>Ae,actionPose:()=>Id,baseElevation:()=>Jc,buildBase:()=>Cd,buildHuman:()=>$c,cameraVector:()=>md,create:()=>qx,createCampaign:()=>Gx,drawCampaign2D:()=>Yc,fishPose:()=>Pd,legPose:()=>Sd,nearestWithin:()=>gd,scaleWorldLabels:()=>bd,terrainHeight:()=>Pn,updateAppearanceKey:()=>wd,updateAvatarFrameCycle:()=>_d,updateAvatarPoseCycle:()=>Md,updateBaseFrame:()=>Td,updateBoarGait:()=>vd,updateBuildingState:()=>Ed,updateChapterState:()=>Ad,updateFishPart:()=>_l,updateLeafWindCycle:()=>yd,updateRemoteMotion:()=>xd,updateTerrainAnchor:()=>sa,walkSurface:()=>Zc});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Ah=0,tc=1,Ch=2;var nc=1,Qr=2,ni=3,mi=0,on=1,qt=2,vi=0,Zi=1,ic=2,rc=3,sc=4,Rh=5,Li=100,Ih=101,Ph=102,Dh=103,Lh=104,Uh=200,Nh=201,Fh=202,zh=203,La=204,Ua=205,Oh=206,Bh=207,kh=208,Vh=209,Gh=210,Hh=211,Wh=212,Xh=213,qh=214,ao=0,oo=1,lo=2,Ji=3,co=4,ho=5,uo=6,fo=7,ac=0,Yh=1,Zh=2,Mi=0,Jh=1,$h=2,Kh=3,es=4,jh=5,Qh=6,eu=7;var oc=300,or=301,lr=302,po=303,mo=304,Zs=306,Or=1e3,Di=1001,Na=1002,yn=1003,tu=1004;var Js=1005;var Hn=1006,go=1007;var Oi=1008;var qn=1009,lc=1010,cc=1011,ts=1012,xo=1013,Bi=1014,Yn=1015,ns=1016,_o=1017,yo=1018,is=1020,hc=35902,uc=35899,dc=1021,fc=1022,Nn=1023,Br=1026,rs=1027,vo=1028,Mo=1029,pc=1030,bo=1031;var So=1033,$s=33776,Ks=33777,js=33778,Qs=33779,wo=35840,To=35841,Eo=35842,Ao=35843,Co=36196,Ro=37492,Io=37496,Po=37808,Do=37809,Lo=37810,Uo=37811,No=37812,Fo=37813,zo=37814,Oo=37815,Bo=37816,ko=37817,Vo=37818,Go=37819,Ho=37820,Wo=37821,Xo=36492,qo=36494,Yo=36495,Zo=36283,Jo=36284,$o=36285,Ko=36286;var Ps=2300,Fa=2301,Pa=2302,Yl=2400,Zl=2401,Jl=2402;var nu=3200,iu=3201;var mc=0,ru=1,Zn="",Yt="srgb",$i="srgb-linear",Ds="linear",Ot="srgb";var Yi=7680;var $l=519,su=512,au=513,ou=514,gc=515,lu=516,cu=517,hu=518,uu=519,za=35044;var xc="300 es",Gn=2e3,Ls=2001;var gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jc=1234567,Rs=Math.PI/180,kr=180/Math.PI;function fi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function vt(n,e,t){return Math.max(e,Math.min(t,n))}function _c(n,e){return(n%e+e)%e}function Xd(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function qd(n,e,t){return n!==e?(t-n)/(e-n):0}function Is(n,e,t){return(1-t)*n+t*e}function Yd(n,e,t,i){return Is(n,e,1-Math.exp(-t*i))}function Zd(n,e=1){return e-Math.abs(_c(n,e*2)-e)}function Jd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function $d(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Kd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function jd(n,e){return n+Math.random()*(e-n)}function Qd(n){return n*(.5-Math.random())}function ef(n){n!==void 0&&(jc=n);let e=jc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tf(n){return n*Rs}function nf(n){return n*kr}function rf(n){return(n&n-1)===0&&n!==0}function sf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function af(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function of(n,e,t,i,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),p=a((e-i)/2),f=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*h,c*d,c*p,o*l);break;case"YZY":n.set(c*p,o*h,c*d,o*l);break;case"ZXZ":n.set(c*d,c*p,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*f,o*l);break;case"YXY":n.set(c*f,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Vn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ea={DEG2RAD:Rs,RAD2DEG:kr,generateUUID:fi,clamp:vt,euclideanModulo:_c,mapLinear:Xd,inverseLerp:qd,lerp:Is,damp:Yd,pingpong:Zd,smoothstep:Jd,smootherstep:$d,randInt:Kd,randFloat:jd,randFloatSpread:Qd,seededRandom:ef,degToRad:tf,radToDeg:nf,isPowerOfTwo:rf,ceilPowerOfTwo:sf,floorPowerOfTwo:af,setQuaternionFromProperEuler:of,normalize:zt,denormalize:Vn},Ve=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],d=i[r+3],p=s[a+0],f=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(d!==x||c!==p||l!==f||h!==g){let m=1-o,u=c*p+l*f+h*g+d*x,_=u>=0?1:-1,w=1-u*u;if(w>Number.EPSILON){let R=Math.sqrt(w),A=Math.atan2(R,u*_);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}let y=o*_;if(c=c*m+p*y,l=l*m+f*y,h=h*m+g*y,d=d*m+x*y,m===1-o){let R=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=R,l*=R,h*=R,d*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],d=s[a],p=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*d+c*f-l*p,e[t+1]=c*g+h*p+l*d-o*f,e[t+2]=l*g+h*f+o*p-c*d,e[t+3]=h*g-o*d-c*p-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),d=o(s/2),p=c(i/2),f=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=p*h*d+l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d-p*f*g;break;case"YXZ":this._x=p*h*d+l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d+p*f*g;break;case"ZXY":this._x=p*h*d-l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d-p*f*g;break;case"ZYX":this._x=p*h*d-l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d+p*f*g;break;case"YZX":this._x=p*h*d+l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d-p*f*g;break;case"XZY":this._x=p*h*d-l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],p=i+o+d;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=a*d+this._w*p,this._x=i*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),h=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+c*l+a*d-o*h,this.y=i+c*h+o*l-s*d,this.z=r+c*d+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bl.copy(this).projectOnVector(e),this.sub(bl)}reflect(e){return this.sub(bl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bl=new O,Qc=new xi,dt=class n{constructor(e,t,i,r,s,a,o,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],p=i[2],f=i[5],g=i[8],x=r[0],m=r[3],u=r[6],_=r[1],w=r[4],y=r[7],R=r[2],A=r[5],L=r[8];return s[0]=a*x+o*_+c*R,s[3]=a*m+o*w+c*A,s[6]=a*u+o*y+c*L,s[1]=l*x+h*_+d*R,s[4]=l*m+h*w+d*A,s[7]=l*u+h*y+d*L,s[2]=p*x+f*_+g*R,s[5]=p*m+f*w+g*A,s[8]=p*u+f*y+g*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,p=o*c-h*s,f=l*s-a*c,g=t*d+i*p+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(r*l-h*i)*x,e[2]=(o*i-r*a)*x,e[3]=p*x,e[4]=(h*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=f*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Sl.makeScale(e,t)),this}rotate(e){return this.premultiply(Sl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Sl=new dt;function yc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Vr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function du(){let n=Vr("canvas");return n.style.display="block",n}var eh={};function Gr(n){n in eh||(eh[n]=!0,console.warn(n))}function fu(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var th=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nh=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lf(){let n={enabled:!0,workingColorSpace:$i,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ot&&(r.r=pi(r.r),r.g=pi(r.g),r.b=pi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ot&&(r.r=zr(r.r),r.g=zr(r.g),r.b=zr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Zn?Ds:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Gr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Gr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[$i]:{primaries:e,whitePoint:i,transfer:Ds,toXYZ:th,fromXYZ:nh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:i,transfer:Ot,toXYZ:th,fromXYZ:nh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),n}var At=lf();function pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var yr,Oa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{yr===void 0&&(yr=Vr("canvas")),yr.width=e.width,yr.height=e.height;let r=yr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=yr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Vr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=pi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(pi(t[i]/255)*255):t[i]=pi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cf=0,Hr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(wl(r[a].image)):s.push(wl(r[a]))}else s=wl(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function wl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Oa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var hf=0,Tl=new O,un=class n extends gi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Di,r=Di,s=Hn,a=Oi,o=Nn,c=qn,l=n.DEFAULT_ANISOTROPY,h=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=fi(),this.name="",this.source=new Hr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Tl).x}get height(){return this.source.getSize(Tl).y}get depth(){return this.source.getSize(Tl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Or:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case Na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Or:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case Na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=oc;un.DEFAULT_ANISOTROPY=1;var Ct=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],h=c[4],d=c[8],p=c[1],f=c[5],g=c[9],x=c[2],m=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,y=(f+1)/2,R=(u+1)/2,A=(h+p)/4,L=(d+x)/4,z=(g+m)/4;return w>y&&w>R?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=A/i,s=L/i):y>R?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=z/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=L/s,r=z/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(p-h)*(p-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-x)/_,this.z=(p-h)/_,this.w=Math.acos((l+f+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ba=class extends gi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new un(r);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Hr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qn=class extends Ba{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Us=class extends un{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ka=class extends un{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ei=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(s,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oa.copy(i.boundingBox)),oa.applyMatrix4(e.matrixWorld),this.union(oa)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_s),la.subVectors(this.max,_s),vr.subVectors(e.a,_s),Mr.subVectors(e.b,_s),br.subVectors(e.c,_s),Ei.subVectors(Mr,vr),Ai.subVectors(br,Mr),Hi.subVectors(vr,br);let t=[0,-Ei.z,Ei.y,0,-Ai.z,Ai.y,0,-Hi.z,Hi.y,Ei.z,0,-Ei.x,Ai.z,0,-Ai.x,Hi.z,0,-Hi.x,-Ei.y,Ei.x,0,-Ai.y,Ai.x,0,-Hi.y,Hi.x,0];return!El(t,vr,Mr,br,la)||(t=[1,0,0,0,1,0,0,0,1],!El(t,vr,Mr,br,la))?!1:(ca.crossVectors(Ei,Ai),t=[ca.x,ca.y,ca.z],El(t,vr,Mr,br,la))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},oi=[new O,new O,new O,new O,new O,new O,new O,new O],On=new O,oa=new ei,vr=new O,Mr=new O,br=new O,Ei=new O,Ai=new O,Hi=new O,_s=new O,la=new O,ca=new O,Wi=new O;function El(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Wi.fromArray(n,s);let o=r.x*Math.abs(Wi.x)+r.y*Math.abs(Wi.y)+r.z*Math.abs(Wi.z),c=e.dot(Wi),l=t.dot(Wi),h=i.dot(Wi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var uf=new ei,ys=new O,Al=new O,_i=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):uf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);let t=ys.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ys,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add(Al)),this.expandByPoint(ys.copy(e.center).sub(Al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},li=new O,Cl=new O,ha=new O,Ci=new O,Rl=new O,ua=new O,Il=new O,Wr=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Cl.copy(e).add(t).multiplyScalar(.5),ha.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(Cl);let s=e.distanceTo(t)*.5,a=-this.direction.dot(ha),o=Ci.dot(this.direction),c=-Ci.dot(ha),l=Ci.lengthSq(),h=Math.abs(1-a*a),d,p,f,g;if(h>0)if(d=a*c-o,p=a*o-c,g=s*h,d>=0)if(p>=-g)if(p<=g){let x=1/h;d*=x,p*=x,f=d*(d+a*p+2*o)+p*(a*d+p+2*c)+l}else p=s,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;else p=-s,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;else p<=-g?(d=Math.max(0,-(-a*s+o)),p=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+p*(p+2*c)+l):p<=g?(d=0,p=Math.min(Math.max(-s,-c),s),f=p*(p+2*c)+l):(d=Math.max(0,-(a*s+o)),p=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+p*(p+2*c)+l);else p=a>0?-s:s,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Cl).addScaledVector(ha,p),f}intersectSphere(e,t){li.subVectors(e.center,this.origin);let i=li.dot(this.direction),r=li.dot(li)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),h>=0?(s=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,i,r,s){Rl.subVectors(t,e),ua.subVectors(i,e),Il.crossVectors(Rl,ua);let a=this.direction.dot(Il),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ci.subVectors(this.origin,e);let c=o*this.direction.dot(ua.crossVectors(Ci,ua));if(c<0)return null;let l=o*this.direction.dot(Rl.cross(Ci));if(l<0||c+l>a)return null;let h=-o*Ci.dot(Il);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Lt=class n{constructor(e,t,i,r,s,a,o,c,l,h,d,p,f,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,h,d,p,f,g,x,m)}set(e,t,i,r,s,a,o,c,l,h,d,p,f,g,x,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=p,u[3]=f,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Sr.setFromMatrixColumn(e,0).length(),s=1/Sr.setFromMatrixColumn(e,1).length(),a=1/Sr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let p=a*h,f=a*d,g=o*h,x=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=p-x*l,t[9]=-o*c,t[2]=x-p*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let p=c*h,f=c*d,g=l*h,x=l*d;t[0]=p+x*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+p*o,t[10]=a*c}else if(e.order==="ZXY"){let p=c*h,f=c*d,g=l*h,x=l*d;t[0]=p-x*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let p=a*h,f=a*d,g=o*h,x=o*d;t[0]=c*h,t[4]=g*l-f,t[8]=p*l+x,t[1]=c*d,t[5]=x*l+p,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let p=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-p*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+g,t[10]=p-x*d}else if(e.order==="XZY"){let p=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=p*d+x,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=x*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(df,e,ff)}lookAt(e,t,i){let r=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Ri.crossVectors(i,En),Ri.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Ri.crossVectors(i,En)),Ri.normalize(),da.crossVectors(En,Ri),r[0]=Ri.x,r[4]=da.x,r[8]=En.x,r[1]=Ri.y,r[5]=da.y,r[9]=En.y,r[2]=Ri.z,r[6]=da.z,r[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],p=i[9],f=i[13],g=i[2],x=i[6],m=i[10],u=i[14],_=i[3],w=i[7],y=i[11],R=i[15],A=r[0],L=r[4],z=r[8],S=r[12],M=r[1],T=r[5],F=r[9],D=r[13],C=r[2],U=r[6],B=r[10],q=r[14],k=r[3],re=r[7],ne=r[11],ye=r[15];return s[0]=a*A+o*M+c*C+l*k,s[4]=a*L+o*T+c*U+l*re,s[8]=a*z+o*F+c*B+l*ne,s[12]=a*S+o*D+c*q+l*ye,s[1]=h*A+d*M+p*C+f*k,s[5]=h*L+d*T+p*U+f*re,s[9]=h*z+d*F+p*B+f*ne,s[13]=h*S+d*D+p*q+f*ye,s[2]=g*A+x*M+m*C+u*k,s[6]=g*L+x*T+m*U+u*re,s[10]=g*z+x*F+m*B+u*ne,s[14]=g*S+x*D+m*q+u*ye,s[3]=_*A+w*M+y*C+R*k,s[7]=_*L+w*T+y*U+R*re,s[11]=_*z+w*F+y*B+R*ne,s[15]=_*S+w*D+y*q+R*ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],p=e[10],f=e[14],g=e[3],x=e[7],m=e[11],u=e[15];return g*(+s*c*d-r*l*d-s*o*p+i*l*p+r*o*f-i*c*f)+x*(+t*c*f-t*l*p+s*a*p-r*a*f+r*l*h-s*c*h)+m*(+t*l*d-t*o*f-s*a*d+i*a*f+s*o*h-i*l*h)+u*(-r*o*h-t*c*d+t*o*p+r*a*d-i*a*p+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],p=e[10],f=e[11],g=e[12],x=e[13],m=e[14],u=e[15],_=d*m*l-x*p*l+x*c*f-o*m*f-d*c*u+o*p*u,w=g*p*l-h*m*l-g*c*f+a*m*f+h*c*u-a*p*u,y=h*x*l-g*d*l+g*o*f-a*x*f-h*o*u+a*d*u,R=g*d*c-h*x*c-g*o*p+a*x*p+h*o*m-a*d*m,A=t*_+i*w+r*y+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/A;return e[0]=_*L,e[1]=(x*p*s-d*m*s-x*r*f+i*m*f+d*r*u-i*p*u)*L,e[2]=(o*m*s-x*c*s+x*r*l-i*m*l-o*r*u+i*c*u)*L,e[3]=(d*c*s-o*p*s-d*r*l+i*p*l+o*r*f-i*c*f)*L,e[4]=w*L,e[5]=(h*m*s-g*p*s+g*r*f-t*m*f-h*r*u+t*p*u)*L,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*u-t*c*u)*L,e[7]=(a*p*s-h*c*s+h*r*l-t*p*l-a*r*f+t*c*f)*L,e[8]=y*L,e[9]=(g*d*s-h*x*s-g*i*f+t*x*f+h*i*u-t*d*u)*L,e[10]=(a*x*s-g*o*s+g*i*l-t*x*l-a*i*u+t*o*u)*L,e[11]=(h*o*s-a*d*s-h*i*l+t*d*l+a*i*f-t*o*f)*L,e[12]=R*L,e[13]=(h*x*r-g*d*r+g*i*p-t*x*p-h*i*m+t*d*m)*L,e[14]=(g*o*r-a*x*r-g*i*c+t*x*c+a*i*m-t*o*m)*L,e[15]=(a*d*r-h*o*r+h*i*c-t*d*c-a*i*p+t*o*p)*L,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,d=o+o,p=s*l,f=s*h,g=s*d,x=a*h,m=a*d,u=o*d,_=c*l,w=c*h,y=c*d,R=i.x,A=i.y,L=i.z;return r[0]=(1-(x+u))*R,r[1]=(f+y)*R,r[2]=(g-w)*R,r[3]=0,r[4]=(f-y)*A,r[5]=(1-(p+u))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(g+w)*L,r[9]=(m-_)*L,r[10]=(1-(p+x))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Sr.set(r[0],r[1],r[2]).length(),a=Sr.set(r[4],r[5],r[6]).length(),o=Sr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);let l=1/s,h=1/a,d=1/o;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,t.setFromRotationMatrix(Bn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Gn,c=!1){let l=this.elements,h=2*s/(t-e),d=2*s/(i-r),p=(t+e)/(t-e),f=(i+r)/(i-r),g,x;if(c)g=s/(a-s),x=a*s/(a-s);else if(o===Gn)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Ls)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Gn,c=!1){let l=this.elements,h=2/(t-e),d=2/(i-r),p=-(t+e)/(t-e),f=-(i+r)/(i-r),g,x;if(c)g=1/(a-s),x=a/(a-s);else if(o===Gn)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===Ls)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Sr=new O,Bn=new Lt,df=new O(0,0,0),ff=new O(1,1,1),Ri=new O,da=new O,En=new O,ih=new Lt,rh=new xi,Wn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],d=r[2],p=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ih.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ih,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rh.setFromEuler(this),this.setFromQuaternion(rh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wn.DEFAULT_ORDER="XYZ";var Xr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},pf=0,sh=new O,wr=new xi,ci=new Lt,fa=new O,vs=new O,mf=new O,gf=new xi,ah=new O(1,0,0),oh=new O(0,1,0),lh=new O(0,0,1),ch={type:"added"},xf={type:"removed"},Tr={type:"childadded",child:null},Pl={type:"childremoved",child:null},Pt=class n extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new O,t=new Wn,i=new xi,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new dt}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(ah,e)}rotateY(e){return this.rotateOnAxis(oh,e)}rotateZ(e){return this.rotateOnAxis(lh,e)}translateOnAxis(e,t){return sh.copy(e).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ah,e)}translateY(e){return this.translateOnAxis(oh,e)}translateZ(e){return this.translateOnAxis(lh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fa.copy(e):fa.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(vs,fa,this.up):ci.lookAt(fa,vs,this.up),this.quaternion.setFromRotationMatrix(ci),r&&(ci.extractRotation(r.matrixWorld),wr.setFromRotationMatrix(ci),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ch),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xf),Pl.child=e,this.dispatchEvent(Pl),Pl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ch),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,e,mf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,gf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),p=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Pt.DEFAULT_UP=new O(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kn=new O,hi=new O,Dl=new O,ui=new O,Er=new O,Ar=new O,hh=new O,Ll=new O,Ul=new O,Nl=new O,Fl=new Ct,zl=new Ct,Ol=new Ct,di=class n{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),kn.subVectors(e,t),r.cross(kn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){kn.subVectors(r,t),hi.subVectors(i,t),Dl.subVectors(e,t);let a=kn.dot(kn),o=kn.dot(hi),c=kn.dot(Dl),l=hi.dot(hi),h=hi.dot(Dl),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;let p=1/d,f=(l*c-o*h)*p,g=(a*h-o*c)*p;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ui.x),c.addScaledVector(a,ui.y),c.addScaledVector(o,ui.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return Fl.setScalar(0),zl.setScalar(0),Ol.setScalar(0),Fl.fromBufferAttribute(e,t),zl.fromBufferAttribute(e,i),Ol.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Fl,s.x),a.addScaledVector(zl,s.y),a.addScaledVector(Ol,s.z),a}static isFrontFacing(e,t,i,r){return kn.subVectors(i,t),hi.subVectors(e,t),kn.cross(hi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),kn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;Er.subVectors(r,i),Ar.subVectors(s,i),Ll.subVectors(e,i);let c=Er.dot(Ll),l=Ar.dot(Ll);if(c<=0&&l<=0)return t.copy(i);Ul.subVectors(e,r);let h=Er.dot(Ul),d=Ar.dot(Ul);if(h>=0&&d<=h)return t.copy(r);let p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Er,a);Nl.subVectors(e,s);let f=Er.dot(Nl),g=Ar.dot(Nl);if(g>=0&&f<=g)return t.copy(s);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Ar,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return hh.subVectors(s,r),o=(d-h)/(d-h+(f-g)),t.copy(r).addScaledVector(hh,o);let u=1/(m+x+p);return a=x*u,o=p*u,t.copy(i).addScaledVector(Er,a).addScaledVector(Ar,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},pa={h:0,s:0,l:0};function Bl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=At.workingColorSpace){return this.r=e,this.g=t,this.b=i,At.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=At.workingColorSpace){if(e=_c(e,1),t=vt(t,0,1),i=vt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Bl(a,s,e+1/3),this.g=Bl(a,s,e),this.b=Bl(a,s,e-1/3)}return At.colorSpaceToWorking(this,r),this}setStyle(e,t=Yt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){let i=pu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return At.workingToColorSpace(hn.copy(this),e),Math.round(vt(hn.r*255,0,255))*65536+Math.round(vt(hn.g*255,0,255))*256+Math.round(vt(hn.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(hn.copy(this),t);let i=hn.r,r=hn.g,s=hn.b,a=Math.max(i,r,s),o=Math.min(i,r,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Yt){At.workingToColorSpace(hn.copy(this),e);let t=hn.r,i=hn.g,r=hn.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(pa);let i=Is(Ii.h,pa.h,t),r=Is(Ii.s,pa.s,t),s=Is(Ii.l,pa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new Qe;Qe.NAMES=pu;var _f=0,ti=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=Zi,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Ua,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(i.blending=this.blending),this.side!==mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==La&&(i.blendSrc=this.blendSrc),this.blendDst!==Ua&&(i.blendDst=this.blendDst),this.blendEquation!==Li&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$l&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},vn=class extends ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Jt=new O,ma=new Ve,yf=0,Kt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=za,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ma.fromBufferAttribute(this,t),ma.applyMatrix3(e),this.setXY(t,ma.x,ma.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==za&&(e.usage=this.usage),e}};var Ns=class extends Kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Fs=class extends Kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var it=class extends Kt{constructor(e,t,i){super(new Float32Array(e),t,i)}},vf=0,Un=new Lt,kl=new Pt,Cr=new O,An=new ei,Ms=new ei,en=new O,Ut=class n extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yc(e)?Fs:Ns)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new dt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,i){return Un.makeTranslation(e,t,i),this.applyMatrix4(Un),this}scale(e,t,i){return Un.makeScale(e,t,i),this.applyMatrix4(Un),this}lookAt(e){return kl.lookAt(e),kl.updateMatrix(),this.applyMatrix4(kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new it(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(An.min,Ms.min),An.expandByPoint(en),en.addVectors(An.max,Ms.max),An.expandByPoint(en)):(An.expandByPoint(Ms.min),An.expandByPoint(Ms.max))}An.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)en.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(en));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)en.fromBufferAttribute(o,l),c&&(Cr.fromBufferAttribute(e,l),en.add(Cr)),r=Math.max(r,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let z=0;z<i.count;z++)o[z]=new O,c[z]=new O;let l=new O,h=new O,d=new O,p=new Ve,f=new Ve,g=new Ve,x=new O,m=new O;function u(z,S,M){l.fromBufferAttribute(i,z),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,M),p.fromBufferAttribute(s,z),f.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),h.sub(l),d.sub(l),f.sub(p),g.sub(p);let T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(T),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(T),o[z].add(x),o[S].add(x),o[M].add(x),c[z].add(m),c[S].add(m),c[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let z=0,S=_.length;z<S;++z){let M=_[z],T=M.start,F=M.count;for(let D=T,C=T+F;D<C;D+=3)u(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let w=new O,y=new O,R=new O,A=new O;function L(z){R.fromBufferAttribute(r,z),A.copy(R);let S=o[z];w.copy(S),w.sub(R.multiplyScalar(R.dot(S))).normalize(),y.crossVectors(A,S);let T=y.dot(c[z])<0?-1:1;a.setXYZW(z,w.x,w.y,w.z,T)}for(let z=0,S=_.length;z<S;++z){let M=_[z],T=M.start,F=M.count;for(let D=T,C=T+F;D<C;D+=3)L(e.getX(D+0)),L(e.getX(D+1)),L(e.getX(D+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,f=i.count;p<f;p++)i.setXYZ(p,0,0,0);let r=new O,s=new O,a=new O,o=new O,c=new O,l=new O,h=new O,d=new O;if(e)for(let p=0,f=e.count;p<f;p+=3){let g=e.getX(p+0),x=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,f=t.count;p<f;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,p=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let u=0;u<h;u++)p[g++]=l[f++]}return new Kt(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=e(c,i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){let p=l[h],f=e(p,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],d=s[l];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},uh=new Lt,Xi=new Wr,ga=new _i,dh=new O,xa=new O,_a=new O,ya=new O,Vl=new O,va=new O,fh=new O,Ma=new O,gt=class extends Pt{constructor(e=new Ut,t=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){va.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],d=s[c];h!==0&&(Vl.fromBufferAttribute(d,e),a?va.addScaledVector(Vl,h):va.addScaledVector(Vl.sub(t),h))}t.add(va)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(s),Xi.copy(e.ray).recast(e.near),!(ga.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(ga,dh)===null||Xi.origin.distanceToSquared(dh)>(e.far-e.near)**2))&&(uh.copy(s).invert(),Xi.copy(e.ray).applyMatrix4(uh),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Xi)))}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,p=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=p.length;g<x;g++){let m=p[g],u=a[m.materialIndex],_=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,R=w;y<R;y+=3){let A=o.getX(y),L=o.getX(y+1),z=o.getX(y+2);r=ba(this,u,e,i,l,h,d,A,L,z),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,u=x;m<u;m+=3){let _=o.getX(m),w=o.getX(m+1),y=o.getX(m+2);r=ba(this,a,e,i,l,h,d,_,w,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=p.length;g<x;g++){let m=p[g],u=a[m.materialIndex],_=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,R=w;y<R;y+=3){let A=y,L=y+1,z=y+2;r=ba(this,u,e,i,l,h,d,A,L,z),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,u=x;m<u;m+=3){let _=m,w=m+1,y=m+2;r=ba(this,a,e,i,l,h,d,_,w,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function Mf(n,e,t,i,r,s,a,o){let c;if(e.side===on?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===mi,o),c===null)return null;Ma.copy(o),Ma.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Ma);return l<t.near||l>t.far?null:{distance:l,point:Ma.clone(),object:n}}function ba(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,xa),n.getVertexPosition(c,_a),n.getVertexPosition(l,ya);let h=Mf(n,e,t,i,xa,_a,ya,fh);if(h){let d=new O;di.getBarycoord(fh,xa,_a,ya,d),r&&(h.uv=di.getInterpolatedAttribute(r,o,c,l,d,new Ve)),s&&(h.uv1=di.getInterpolatedAttribute(s,o,c,l,d,new Ve)),a&&(h.normal=di.getInterpolatedAttribute(a,o,c,l,d,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:c,c:l,normal:new O,materialIndex:0};di.getNormal(xa,_a,ya,p.normal),h.face=p,h.barycoord=d}return h}var an=class n extends Ut{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],d=[],p=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(d,2));function g(x,m,u,_,w,y,R,A,L,z,S){let M=y/L,T=R/z,F=y/2,D=R/2,C=A/2,U=L+1,B=z+1,q=0,k=0,re=new O;for(let ne=0;ne<B;ne++){let ye=ne*T-D;for(let De=0;De<U;De++){let ke=De*M-F;re[x]=ke*_,re[m]=ye*w,re[u]=C,l.push(re.x,re.y,re.z),re[x]=0,re[m]=0,re[u]=A>0?1:-1,h.push(re.x,re.y,re.z),d.push(De/L),d.push(1-ne/z),q+=1}}for(let ne=0;ne<z;ne++)for(let ye=0;ye<L;ye++){let De=p+ye+U*ne,ke=p+ye+U*(ne+1),nt=p+(ye+1)+U*(ne+1),tt=p+(ye+1)+U*ne;c.push(De,ke,tt),c.push(ke,nt,tt),k+=6}o.addGroup(f,k,S),f+=k,p+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function cr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function dn(n){let e={};for(let t=0;t<n.length;t++){let i=cr(n[t]);for(let r in i)e[r]=i[r]}return e}function bf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}var jo={clone:cr,merge:dn},Sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sf,this.fragmentShader=wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=bf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},zs=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pi=new O,ph=new Ve,mh=new Ve,$t=class extends zs{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kr*2*Math.atan(Math.tan(Rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,ph,mh),t.subVectors(mh,ph)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Rs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Rr=-90,Ir=1,Va=class extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new $t(Rr,Ir,e,t);r.layers=this.layers,this.add(r);let s=new $t(Rr,Ir,e,t);s.layers=this.layers,this.add(s);let a=new $t(Rr,Ir,e,t);a.layers=this.layers,this.add(a);let o=new $t(Rr,Ir,e,t);o.layers=this.layers,this.add(o);let c=new $t(Rr,Ir,e,t);c.layers=this.layers,this.add(c);let l=new $t(Rr,Ir,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ls)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,p,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Os=class extends un{constructor(e=[],t=or,i,r,s,a,o,c,l,h){super(e,t,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ga=class extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Os(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new an(5,5,5),s=new Mn({name:"CubemapFromEquirect",uniforms:cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:vi});s.uniforms.tEquirect.value=t;let a=new gt(r,s),o=t.minFilter;return t.minFilter===Oi&&(t.minFilter=Hn),new Va(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}},Be=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tf={type:"move"},qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),u=this._getHandJoint(l,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&p>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tf)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Be;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Ki=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Qe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ji=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=za,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},gn=new O,Yr=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array),s=zt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zr=class extends ti{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Pr,bs=new O,Dr=new O,Lr=new O,Ur=new Ve,Ss=new Ve,mu=new Lt,Sa=new O,ws=new O,wa=new O,gh=new Ve,Gl=new Ve,xh=new Ve,ks=class extends Pt{constructor(e=new Zr){if(super(),this.isSprite=!0,this.type="Sprite",Pr===void 0){Pr=new Ut;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Bs(t,5);Pr.setIndex([0,1,2,0,2,3]),Pr.setAttribute("position",new Yr(i,3,0,!1)),Pr.setAttribute("uv",new Yr(i,2,3,!1))}this.geometry=Pr,this.material=e,this.center=new Ve(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Dr.setFromMatrixScale(this.matrixWorld),mu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Lr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Dr.multiplyScalar(-Lr.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let a=this.center;Ta(Sa.set(-.5,-.5,0),Lr,a,Dr,r,s),Ta(ws.set(.5,-.5,0),Lr,a,Dr,r,s),Ta(wa.set(.5,.5,0),Lr,a,Dr,r,s),gh.set(0,0),Gl.set(1,0),xh.set(1,1);let o=e.ray.intersectTriangle(Sa,ws,wa,!1,bs);if(o===null&&(Ta(ws.set(-.5,.5,0),Lr,a,Dr,r,s),Gl.set(0,1),o=e.ray.intersectTriangle(Sa,wa,ws,!1,bs),o===null))return;let c=e.ray.origin.distanceTo(bs);c<e.near||c>e.far||t.push({distance:c,point:bs.clone(),uv:di.getInterpolation(bs,Sa,ws,wa,gh,Gl,xh,new Ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ta(n,e,t,i,r,s){Ur.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Ss.x=s*Ur.x-r*Ur.y,Ss.y=r*Ur.x+s*Ur.y):Ss.copy(Ur),n.copy(e),n.x+=Ss.x,n.y+=Ss.y,n.applyMatrix4(mu)}var Ha=class extends un{constructor(e=null,t=1,i=1,r,s,a,o,c,l=yn,h=yn,d,p){super(null,a,o,c,l,h,r,s,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jr=class extends Kt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Nr=new Lt,_h=new Lt,Ea=[],yh=new ei,Ef=new Lt,Ts=new gt,Es=new _i,Dt=class extends gt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Ef)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Nr),yh.copy(e.boundingBox).applyMatrix4(Nr),this.boundingBox.union(yh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Nr),Es.copy(e.boundingSphere).applyMatrix4(Nr),this.boundingSphere.union(Es)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Ts.geometry=this.geometry,Ts.material=this.material,Ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(i),e.ray.intersectsSphere(Es)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Nr),_h.multiplyMatrices(i,Nr),Ts.matrixWorld=_h,Ts.raycast(e,Ea);for(let a=0,o=Ea.length;a<o;a++){let c=Ea[a];c.instanceId=s,c.object=this,t.push(c)}Ea.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Jr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ha(new Float32Array(r*this.count),r,this.count,vo,Yn));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Hl=new O,Af=new O,Cf=new dt,jn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Hl.subVectors(i,t).cross(Af.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Hl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Cf.getNormalMatrix(e),r=this.coplanarPoint(Hl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qi=new _i,Rf=new Ve(.5,.5),Aa=new O,$r=class{constructor(e=new jn,t=new jn,i=new jn,r=new jn,s=new jn,a=new jn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gn,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],d=s[5],p=s[6],f=s[7],g=s[8],x=s[9],m=s[10],u=s[11],_=s[12],w=s[13],y=s[14],R=s[15];if(r[0].setComponents(l-a,f-h,u-g,R-_).normalize(),r[1].setComponents(l+a,f+h,u+g,R+_).normalize(),r[2].setComponents(l+o,f+d,u+x,R+w).normalize(),r[3].setComponents(l-o,f-d,u-x,R-w).normalize(),i)r[4].setComponents(c,p,m,y).normalize(),r[5].setComponents(l-c,f-p,u-m,R-y).normalize();else if(r[4].setComponents(l-c,f-p,u-m,R-y).normalize(),t===Gn)r[5].setComponents(l+c,f+p,u+m,R+y).normalize();else if(t===Ls)r[5].setComponents(c,p,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){qi.center.set(0,0,0);let t=Rf.distanceTo(e.center);return qi.radius=.7071067811865476+t,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Aa.x=r.normal.x>0?e.max.x:e.min.x,Aa.y=r.normal.y>0?e.max.y:e.min.y,Aa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ui=class extends ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Wa=new O,Xa=new O,vh=new Lt,As=new Wr,Ca=new _i,Wl=new O,Mh=new O,Qi=class extends Pt{constructor(e=new Ut,t=new Ui){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Wa.fromBufferAttribute(t,r-1),Xa.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Wa.distanceTo(Xa);e.setAttribute("lineDistance",new it(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(r),Ca.radius+=s,e.ray.intersectsSphere(Ca)===!1)return;vh.copy(r).invert(),As.copy(e.ray).applyMatrix4(vh);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,p=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let u=h.getX(x),_=h.getX(x+1),w=Ra(this,e,As,c,u,_,x);w&&t.push(w)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),u=Ra(this,e,As,c,x,m,g-1);u&&t.push(u)}}else{let f=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let u=Ra(this,e,As,c,x,x+1,x);u&&t.push(u)}if(this.isLineLoop){let x=Ra(this,e,As,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Ra(n,e,t,i,r,s,a){let o=n.geometry.attributes.position;if(Wa.fromBufferAttribute(o,r),Xa.fromBufferAttribute(o,s),t.distanceSqToSegment(Wa,Xa,Wl,Mh)>i)return;Wl.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Wl);if(!(l<e.near||l>e.far))return{distance:l,point:Mh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Ni=class extends un{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vs=class extends un{constructor(e,t,i=Bi,r,s,a,o=yn,c=yn,l,h=Br,d=1){if(h!==Br&&h!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:d};super(p,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Gs=class extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Ht=class n extends Ut{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],d=[],p=[],f=[],g=0,x=[],m=i/2,u=0;_(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new it(d,3)),this.setAttribute("normal",new it(p,3)),this.setAttribute("uv",new it(f,2));function _(){let y=new O,R=new O,A=0,L=(t-e)/i;for(let z=0;z<=s;z++){let S=[],M=z/s,T=M*(t-e)+e;for(let F=0;F<=r;F++){let D=F/r,C=D*c+o,U=Math.sin(C),B=Math.cos(C);R.x=T*U,R.y=-M*i+m,R.z=T*B,d.push(R.x,R.y,R.z),y.set(U,L,B).normalize(),p.push(y.x,y.y,y.z),f.push(D,1-M),S.push(g++)}x.push(S)}for(let z=0;z<r;z++)for(let S=0;S<s;S++){let M=x[S][z],T=x[S+1][z],F=x[S+1][z+1],D=x[S][z+1];(e>0||S!==0)&&(h.push(M,T,D),A+=3),(t>0||S!==s-1)&&(h.push(T,F,D),A+=3)}l.addGroup(u,A,0),u+=A}function w(y){let R=g,A=new Ve,L=new O,z=0,S=y===!0?e:t,M=y===!0?1:-1;for(let F=1;F<=r;F++)d.push(0,m*M,0),p.push(0,M,0),f.push(.5,.5),g++;let T=g;for(let F=0;F<=r;F++){let C=F/r*c+o,U=Math.cos(C),B=Math.sin(C);L.x=S*B,L.y=m*M,L.z=S*U,d.push(L.x,L.y,L.z),p.push(0,M,0),A.x=U*.5+.5,A.y=B*.5*M+.5,f.push(A.x,A.y),g++}for(let F=0;F<r;F++){let D=R+F,C=T+F;y===!0?h.push(C,C+1,D):h.push(C+1,C,D),z+=3}l.addGroup(u,z,y===!0?1:2),u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Xn=class n extends Ht{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qa=class n extends Ut{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];o(r),l(i),h(),this.setAttribute("position",new it(s,3)),this.setAttribute("normal",new it(s.slice(),3)),this.setAttribute("uv",new it(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let w=new O,y=new O,R=new O;for(let A=0;A<t.length;A+=3)f(t[A+0],w),f(t[A+1],y),f(t[A+2],R),c(w,y,R,_)}function c(_,w,y,R){let A=R+1,L=[];for(let z=0;z<=A;z++){L[z]=[];let S=_.clone().lerp(y,z/A),M=w.clone().lerp(y,z/A),T=A-z;for(let F=0;F<=T;F++)F===0&&z===A?L[z][F]=S:L[z][F]=S.clone().lerp(M,F/T)}for(let z=0;z<A;z++)for(let S=0;S<2*(A-z)-1;S++){let M=Math.floor(S/2);S%2===0?(p(L[z][M+1]),p(L[z+1][M]),p(L[z][M])):(p(L[z][M+1]),p(L[z+1][M+1]),p(L[z+1][M]))}}function l(_){let w=new O;for(let y=0;y<s.length;y+=3)w.x=s[y+0],w.y=s[y+1],w.z=s[y+2],w.normalize().multiplyScalar(_),s[y+0]=w.x,s[y+1]=w.y,s[y+2]=w.z}function h(){let _=new O;for(let w=0;w<s.length;w+=3){_.x=s[w+0],_.y=s[w+1],_.z=s[w+2];let y=m(_)/2/Math.PI+.5,R=u(_)/Math.PI+.5;a.push(y,1-R)}g(),d()}function d(){for(let _=0;_<a.length;_+=6){let w=a[_+0],y=a[_+2],R=a[_+4],A=Math.max(w,y,R),L=Math.min(w,y,R);A>.9&&L<.1&&(w<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),R<.2&&(a[_+4]+=1))}}function p(_){s.push(_.x,_.y,_.z)}function f(_,w){let y=_*3;w.x=e[y+0],w.y=e[y+1],w.z=e[y+2]}function g(){let _=new O,w=new O,y=new O,R=new O,A=new Ve,L=new Ve,z=new Ve;for(let S=0,M=0;S<s.length;S+=9,M+=6){_.set(s[S+0],s[S+1],s[S+2]),w.set(s[S+3],s[S+4],s[S+5]),y.set(s[S+6],s[S+7],s[S+8]),A.set(a[M+0],a[M+1]),L.set(a[M+2],a[M+3]),z.set(a[M+4],a[M+5]),R.copy(_).add(w).add(y).divideScalar(3);let T=m(R);x(A,M+0,_,T),x(L,M+2,w,T),x(z,M+4,y,T)}}function x(_,w,y,R){R<0&&_.x===1&&(a[w]=_.x-1),y.x===0&&y.z===0&&(a[w]=R/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function u(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var er=class n extends qa{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Hs=class n extends Ut{constructor(e=[new Ve(0,-.5),new Ve(.5,0),new Ve(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=vt(r,0,Math.PI*2);let s=[],a=[],o=[],c=[],l=[],h=1/t,d=new O,p=new Ve,f=new O,g=new O,x=new O,m=0,u=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,u=e[_+1].y-e[_].y,f.x=u*1,f.y=-m,f.z=u*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,u=e[_+1].y-e[_].y,f.x=u*1,f.y=-m,f.z=u*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let _=0;_<=t;_++){let w=i+_*h*r,y=Math.sin(w),R=Math.cos(w);for(let A=0;A<=e.length-1;A++){d.x=e[A].x*y,d.y=e[A].y,d.z=e[A].x*R,a.push(d.x,d.y,d.z),p.x=_/t,p.y=A/(e.length-1),o.push(p.x,p.y);let L=c[3*A+0]*y,z=c[3*A+1],S=c[3*A+0]*R;l.push(L,z,S)}}for(let _=0;_<t;_++)for(let w=0;w<e.length-1;w++){let y=w+_*e.length,R=y,A=y+e.length,L=y+e.length+1,z=y+1;s.push(R,A,z),s.push(L,z,A)}this.setIndex(s),this.setAttribute("position",new it(a,3)),this.setAttribute("uv",new it(o,2)),this.setAttribute("normal",new it(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var Cn=class n extends Ut{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,d=e/o,p=t/c,f=[],g=[],x=[],m=[];for(let u=0;u<h;u++){let _=u*p-a;for(let w=0;w<l;w++){let y=w*d-s;g.push(y,-_,0),x.push(0,0,1),m.push(w/o),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let _=0;_<o;_++){let w=_+l*u,y=_+l*(u+1),R=_+1+l*(u+1),A=_+1+l*u;f.push(w,y,A),f.push(y,R,A)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(x,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},tr=class n extends Ut{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);let o=[],c=[],l=[],h=[],d=e,p=(t-e)/r,f=new O,g=new Ve;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){let u=s+m/i*a;f.x=d*Math.cos(u),f.y=d*Math.sin(u),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=p}for(let x=0;x<r;x++){let m=x*(i+1);for(let u=0;u<i;u++){let _=u+m,w=_,y=_+i+1,R=_+i+2,A=_+1;o.push(w,y,A),o.push(y,R,A)}}this.setIndex(o),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var bn=class n extends Ut{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new O,p=new O,f=[],g=[],x=[],m=[];for(let u=0;u<=i;u++){let _=[],w=u/i,y=0;u===0&&a===0?y=.5/t:u===i&&c===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){let A=R/t;d.x=-e*Math.cos(r+A*s)*Math.sin(a+w*o),d.y=e*Math.cos(a+w*o),d.z=e*Math.sin(r+A*s)*Math.sin(a+w*o),g.push(d.x,d.y,d.z),p.copy(d).normalize(),x.push(p.x,p.y,p.z),m.push(A+y,1-w),_.push(l++)}h.push(_)}for(let u=0;u<i;u++)for(let _=0;_<t;_++){let w=h[u][_+1],y=h[u][_],R=h[u+1][_],A=h[u+1][_+1];(u!==0||a>0)&&f.push(w,y,A),(u!==i-1||c<Math.PI)&&f.push(y,R,A)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(x,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var yi=class n extends Ut{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let a=[],o=[],c=[],l=[],h=new O,d=new O,p=new O;for(let f=0;f<=i;f++)for(let g=0;g<=r;g++){let x=g/r*s,m=f/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),p.subVectors(d,h).normalize(),c.push(p.x,p.y,p.z),l.push(g/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=r;g++){let x=(r+1)*f+g-1,m=(r+1)*(f-1)+g-1,u=(r+1)*(f-1)+g,_=(r+1)*f+g;a.push(x,m,_),a.push(m,u,_)}this.setIndex(a),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Bt=class extends ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mc,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ws=class extends Bt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ya=class extends ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Za=class extends ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ia(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function If(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var nr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ja=class extends nr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yl,endingEnd:Yl}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Zl:s=e,o=2*t-i;break;case Jl:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Zl:a=e,c=2*i-t;break;case Jl:a=1,c=i+r[1]-r[0];break;default:a=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,f=this._weightNext,g=(i-t)/(r-t),x=g*g,m=x*g,u=-p*m+2*p*x-p*g,_=(1+p)*m+(-1.5-2*p)*x+(-.5+p)*g+1,w=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let R=0;R!==o;++R)s[R]=u*a[h+R]+_*a[l+R]+w*a[c+R]+y*a[d+R];return s}},$a=class extends nr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(r-t),d=1-h;for(let p=0;p!==o;++p)s[p]=a[l+p]*d+a[c+p]*h;return s}},Ka=class extends nr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Rn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ia(t,this.TimeBufferType),this.values=Ia(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ia(e.times,Array),values:Ia(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ja(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ps:t=this.InterpolantFactoryMethodDiscrete;break;case Fa:t=this.InterpolantFactoryMethodLinear;break;case Pa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ps;case this.InterpolantFactoryMethodLinear:return Fa;case this.InterpolantFactoryMethodSmooth:return Pa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&If(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Pa,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(r)c=!0;else{let d=o*i,p=d-i,f=d+i;for(let g=0;g!==i;++g){let x=t[d+g];if(x!==t[p+g]||x!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*i,p=a*i;for(let f=0;f!==i;++f)t[p+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Rn.prototype.ValueTypeName="";Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=Fa;var Fi=class extends Rn{constructor(e,t,i){super(e,t,i)}};Fi.prototype.ValueTypeName="bool";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Ps;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends Rn{constructor(e,t,i,r){super(e,t,i,r)}};ja.prototype.ValueTypeName="color";var Qa=class extends Rn{constructor(e,t,i,r){super(e,t,i,r)}};Qa.prototype.ValueTypeName="number";var eo=class extends nr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(r-t),l=e*o;for(let h=l+o;l!==h;l+=4)xi.slerpFlat(s,0,a,l-o,a,l,c);return s}},Xs=class extends Rn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new eo(this.times,this.values,this.getValueSize(),e)}};Xs.prototype.ValueTypeName="quaternion";Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends Rn{constructor(e,t,i){super(e,t,i)}};zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Ps;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var to=class extends Rn{constructor(e,t,i,r){super(e,t,i,r)}};to.prototype.ValueTypeName="vector";var Da={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},no=class{constructor(e,t,i){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=l.length;d<p;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},gu=new no,Kr=class{constructor(e){this.manager=e!==void 0?e:gu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Kr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fr=new WeakMap,io=class extends Kr{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Da.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=Fr.get(a);d===void 0&&(d=[],Fr.set(a,d)),d.push({onLoad:t,onError:r})}return a}let o=Vr("img");function c(){h(),t&&t(this);let d=Fr.get(this)||[];for(let p=0;p<d.length;p++){let f=d[p];f.onLoad&&f.onLoad(this)}Fr.delete(this),s.manager.itemEnd(e)}function l(d){h(),r&&r(d),Da.remove(`image:${e}`);let p=Fr.get(this)||[];for(let f=0;f<p.length;f++){let g=p[f];g.onError&&g.onError(d)}Fr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Da.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var qs=class extends Kr{constructor(e){super(e)}load(e,t,i,r){let s=new un,a=new io(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},jr=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ir=class extends jr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Xl=new Lt,bh=new O,Sh=new O,ro=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=qn,this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $r,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;bh.setFromMatrixPosition(e.matrixWorld),t.position.copy(bh),Sh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sh),t.updateMatrixWorld(),Xl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var wh=new Lt,Cs=new O,ql=new O,Kl=class extends ro{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Cs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Cs),ql.copy(i.position),ql.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ql),i.updateMatrixWorld(),r.makeTranslation(-Cs.x,-Cs.y,-Cs.z),wh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh,i.coordinateSystem,i.reversedDepth)}},rr=class extends jr{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Kl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ys=class extends zs{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},jl=class extends ro{constructor(){super(new Ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sr=class extends jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new jl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var so=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Mc="\\[\\]\\.:\\/",Pf=new RegExp("["+Mc+"]","g"),bc="[^"+Mc+"]",Df="[^"+Mc.replace("\\.","")+"]",Lf=/((?:WC+[\/:])*)/.source.replace("WC",bc),Uf=/(WCOD+)?/.source.replace("WCOD",Df),Nf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bc),Ff=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bc),zf=new RegExp("^"+Lf+Uf+Nf+Ff+"$"),Of=["material","materials","bones","map"],Ql=class{constructor(e,t,i){let r=i||Gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Gt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Pf,"")}static parseTrackName(e){let t=zf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Of.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[r];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Gt.Composite=Ql;Gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Gt.prototype.GetterByBindingType=[Gt.prototype._getValue_direct,Gt.prototype._getValue_array,Gt.prototype._getValue_arrayElement,Gt.prototype._getValue_toArray];Gt.prototype.SetterByBindingTypeAndVersioning=[[Gt.prototype._setValue_direct,Gt.prototype._setValue_direct_setNeedsUpdate,Gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_array,Gt.prototype._setValue_array_setNeedsUpdate,Gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_arrayElement,Gt.prototype._setValue_arrayElement_setNeedsUpdate,Gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_fromArray,Gt.prototype._setValue_fromArray_setNeedsUpdate,Gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jx=new Float32Array(1);var Th=new Lt,ar=class{constructor(e,t,i=0,r=1/0){this.ray=new Wr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Xr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Th.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Th),this}intersectObject(e,t=!0,i=[]){return ec(e,this,i,t),i.sort(Eh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ec(e[r],this,i,t);return i.sort(Eh),i}};function Eh(n,e){return n.distance-e.distance}function ec(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let a=0,o=s.length;a<o;a++)ec(s[a],e,t,!0)}}function Sc(n,e,t,i){let r=Bf(i);switch(t){case dc:return n*e;case vo:return n*e/r.components*r.byteLength;case Mo:return n*e/r.components*r.byteLength;case pc:return n*e*2/r.components*r.byteLength;case bo:return n*e*2/r.components*r.byteLength;case fc:return n*e*3/r.components*r.byteLength;case Nn:return n*e*4/r.components*r.byteLength;case So:return n*e*4/r.components*r.byteLength;case $s:case Ks:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case js:case Qs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case To:case Ao:return Math.max(n,16)*Math.max(e,8)/4;case wo:case Eo:return Math.max(n,8)*Math.max(e,8)/2;case Co:case Ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Do:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case No:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case zo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Bo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ko:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Vo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Go:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ho:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Wo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Xo:case qo:case Yo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Zo:case Jo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case $o:case Ko:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bf(n){switch(n){case qn:case lc:return{byteLength:1,components:1};case ts:case cc:case ns:return{byteLength:2,components:1};case _o:case yo:return{byteLength:2,components:4};case Bi:case xo:case Yn:return{byteLength:4,components:1};case hc:case uc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ku(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Wf(n){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){let h=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<d.length;f++){let g=d[p],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++p,d[p]=x)}d.length=p+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Xf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qf=`#ifdef USE_ALPHAHASH
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
#endif`,Yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kf=`#ifdef USE_AOMAP
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
#endif`,jf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qf=`#ifdef USE_BATCHING
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
#endif`,ep=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,np=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ip=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rp=`#ifdef USE_IRIDESCENCE
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
#endif`,sp=`#ifdef USE_BUMPMAP
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
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pp=`#define PI 3.141592653589793
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
} // validated`,mp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gp=`vec3 transformedNormal = objectNormal;
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
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",bp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sp=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dp=`#ifdef USE_GRADIENTMAP
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
}`,Lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fp=`uniform bool receiveShadow;
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
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,Op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gp=`PhysicalMaterial material;
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
#endif`,Hp=`struct PhysicalMaterial {
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
}`,Wp=`
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
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
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
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$p=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,em=`#if defined( USE_POINTS_UV )
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
#endif`,tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,im=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`#ifdef USE_MORPHTARGETS
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
#endif`,om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fm=`#ifdef USE_NORMALMAP
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
#endif`,pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ym=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rm=`float getShadowMask() {
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
}`,Im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pm=`#ifdef USE_SKINNING
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
#endif`,Dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lm=`#ifdef USE_SKINNING
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
#endif`,Um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Om=`#ifdef USE_TRANSMISSION
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
#endif`,Bm=`#ifdef USE_TRANSMISSION
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
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xm=`uniform sampler2D t2D;
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`#include <common>
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
}`,Km=`#if DEPTH_PACKING == 3200
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
}`,jm=`#define DISTANCE
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
}`,Qm=`#define DISTANCE
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`uniform float scale;
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
}`,ig=`uniform vec3 diffuse;
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
}`,rg=`#include <common>
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
}`,sg=`uniform vec3 diffuse;
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
}`,ag=`#define LAMBERT
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
}`,og=`#define LAMBERT
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
}`,lg=`#define MATCAP
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
}`,cg=`#define MATCAP
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
}`,hg=`#define NORMAL
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
}`,ug=`#define NORMAL
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
}`,dg=`#define PHONG
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
}`,fg=`#define PHONG
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
}`,pg=`#define STANDARD
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
}`,mg=`#define STANDARD
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
}`,gg=`#define TOON
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
}`,xg=`#define TOON
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
}`,_g=`uniform float size;
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
}`,yg=`uniform vec3 diffuse;
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
}`,vg=`#include <common>
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
}`,Mg=`uniform vec3 color;
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
}`,bg=`uniform float rotation;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:Xf,alphahash_pars_fragment:qf,alphamap_fragment:Yf,alphamap_pars_fragment:Zf,alphatest_fragment:Jf,alphatest_pars_fragment:$f,aomap_fragment:Kf,aomap_pars_fragment:jf,batching_pars_vertex:Qf,batching_vertex:ep,begin_vertex:tp,beginnormal_vertex:np,bsdfs:ip,iridescence_fragment:rp,bumpmap_pars_fragment:sp,clipping_planes_fragment:ap,clipping_planes_pars_fragment:op,clipping_planes_pars_vertex:lp,clipping_planes_vertex:cp,color_fragment:hp,color_pars_fragment:up,color_pars_vertex:dp,color_vertex:fp,common:pp,cube_uv_reflection_fragment:mp,defaultnormal_vertex:gp,displacementmap_pars_vertex:xp,displacementmap_vertex:_p,emissivemap_fragment:yp,emissivemap_pars_fragment:vp,colorspace_fragment:Mp,colorspace_pars_fragment:bp,envmap_fragment:Sp,envmap_common_pars_fragment:wp,envmap_pars_fragment:Tp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:zp,envmap_vertex:Ap,fog_vertex:Cp,fog_pars_vertex:Rp,fog_fragment:Ip,fog_pars_fragment:Pp,gradientmap_pars_fragment:Dp,lightmap_pars_fragment:Lp,lights_lambert_fragment:Up,lights_lambert_pars_fragment:Np,lights_pars_begin:Fp,lights_toon_fragment:Op,lights_toon_pars_fragment:Bp,lights_phong_fragment:kp,lights_phong_pars_fragment:Vp,lights_physical_fragment:Gp,lights_physical_pars_fragment:Hp,lights_fragment_begin:Wp,lights_fragment_maps:Xp,lights_fragment_end:qp,logdepthbuf_fragment:Yp,logdepthbuf_pars_fragment:Zp,logdepthbuf_pars_vertex:Jp,logdepthbuf_vertex:$p,map_fragment:Kp,map_pars_fragment:jp,map_particle_fragment:Qp,map_particle_pars_fragment:em,metalnessmap_fragment:tm,metalnessmap_pars_fragment:nm,morphinstance_vertex:im,morphcolor_vertex:rm,morphnormal_vertex:sm,morphtarget_pars_vertex:am,morphtarget_vertex:om,normal_fragment_begin:lm,normal_fragment_maps:cm,normal_pars_fragment:hm,normal_pars_vertex:um,normal_vertex:dm,normalmap_pars_fragment:fm,clearcoat_normal_fragment_begin:pm,clearcoat_normal_fragment_maps:mm,clearcoat_pars_fragment:gm,iridescence_pars_fragment:xm,opaque_fragment:_m,packing:ym,premultiplied_alpha_fragment:vm,project_vertex:Mm,dithering_fragment:bm,dithering_pars_fragment:Sm,roughnessmap_fragment:wm,roughnessmap_pars_fragment:Tm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:Am,shadowmap_vertex:Cm,shadowmask_pars_fragment:Rm,skinbase_vertex:Im,skinning_pars_vertex:Pm,skinning_vertex:Dm,skinnormal_vertex:Lm,specularmap_fragment:Um,specularmap_pars_fragment:Nm,tonemapping_fragment:Fm,tonemapping_pars_fragment:zm,transmission_fragment:Om,transmission_pars_fragment:Bm,uv_pars_fragment:km,uv_pars_vertex:Vm,uv_vertex:Gm,worldpos_vertex:Hm,background_vert:Wm,background_frag:Xm,backgroundCube_vert:qm,backgroundCube_frag:Ym,cube_vert:Zm,cube_frag:Jm,depth_vert:$m,depth_frag:Km,distanceRGBA_vert:jm,distanceRGBA_frag:Qm,equirect_vert:eg,equirect_frag:tg,linedashed_vert:ng,linedashed_frag:ig,meshbasic_vert:rg,meshbasic_frag:sg,meshlambert_vert:ag,meshlambert_frag:og,meshmatcap_vert:lg,meshmatcap_frag:cg,meshnormal_vert:hg,meshnormal_frag:ug,meshphong_vert:dg,meshphong_frag:fg,meshphysical_vert:pg,meshphysical_frag:mg,meshtoon_vert:gg,meshtoon_frag:xg,points_vert:_g,points_frag:yg,shadow_vert:vg,shadow_frag:Mg,sprite_vert:bg,sprite_frag:Sg},Me={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},ii={basic:{uniforms:dn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:dn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Qe(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:dn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:dn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:dn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Qe(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:dn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:dn([Me.points,Me.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:dn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:dn([Me.common,Me.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:dn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:dn([Me.sprite,Me.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:dn([Me.common,Me.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:dn([Me.lights,Me.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};ii.physical={uniforms:dn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};var Qo={r:0,b:0,g:0},hr=new Wn,wg=new Lt;function Tg(n,e,t,i,r,s,a){let o=new Qe(0),c=s===!0?0:1,l,h,d=null,p=0,f=null;function g(w){let y=w.isScene===!0?w.background:null;return y&&y.isTexture&&(y=(w.backgroundBlurriness>0?t:e).get(y)),y}function x(w){let y=!1,R=g(w);R===null?u(o,c):R&&R.isColor&&(u(R,1),y=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,y){let R=g(y);R&&(R.isCubeTexture||R.mapping===Zs)?(h===void 0&&(h=new gt(new an(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:cr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,L,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),hr.copy(y.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wg.makeRotationFromEuler(hr)),h.material.toneMapped=At.getTransfer(R.colorSpace)!==Ot,(d!==R||p!==R.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=R,p=R.version,f=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new gt(new Cn(2,2),new Mn({name:"BackgroundMaterial",uniforms:cr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=At.getTransfer(R.colorSpace)!==Ot,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||p!==R.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=R,p=R.version,f=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function u(w,y){w.getRGB(Qo,vc(n)),i.buffers.color.setClear(Qo.r,Qo.g,Qo.b,y,a)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,y=1){o.set(w),c=y,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,u(o,c)},render:x,addToRenderList:m,dispose:_}}function Eg(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null),s=r,a=!1;function o(M,T,F,D,C){let U=!1,B=d(D,F,T);s!==B&&(s=B,l(s.object)),U=f(M,D,F,C),U&&g(M,D,F,C),C!==null&&e.update(C,n.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,y(M,T,F,D),C!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(C).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function d(M,T,F){let D=F.wireframe===!0,C=i[M.id];C===void 0&&(C={},i[M.id]=C);let U=C[T.id];U===void 0&&(U={},C[T.id]=U);let B=U[D];return B===void 0&&(B=p(c()),U[D]=B),B}function p(M){let T=[],F=[],D=[];for(let C=0;C<t;C++)T[C]=0,F[C]=0,D[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:F,attributeDivisors:D,object:M,attributes:{},index:null}}function f(M,T,F,D){let C=s.attributes,U=T.attributes,B=0,q=F.getAttributes();for(let k in q)if(q[k].location>=0){let ne=C[k],ye=U[k];if(ye===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),ne===void 0||ne.attribute!==ye||ye&&ne.data!==ye.data)return!0;B++}return s.attributesNum!==B||s.index!==D}function g(M,T,F,D){let C={},U=T.attributes,B=0,q=F.getAttributes();for(let k in q)if(q[k].location>=0){let ne=U[k];ne===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor));let ye={};ye.attribute=ne,ne&&ne.data&&(ye.data=ne.data),C[k]=ye,B++}s.attributes=C,s.attributesNum=B,s.index=D}function x(){let M=s.newAttributes;for(let T=0,F=M.length;T<F;T++)M[T]=0}function m(M){u(M,0)}function u(M,T){let F=s.newAttributes,D=s.enabledAttributes,C=s.attributeDivisors;F[M]=1,D[M]===0&&(n.enableVertexAttribArray(M),D[M]=1),C[M]!==T&&(n.vertexAttribDivisor(M,T),C[M]=T)}function _(){let M=s.newAttributes,T=s.enabledAttributes;for(let F=0,D=T.length;F<D;F++)T[F]!==M[F]&&(n.disableVertexAttribArray(F),T[F]=0)}function w(M,T,F,D,C,U,B){B===!0?n.vertexAttribIPointer(M,T,F,C,U):n.vertexAttribPointer(M,T,F,D,C,U)}function y(M,T,F,D){x();let C=D.attributes,U=F.getAttributes(),B=T.defaultAttributeValues;for(let q in U){let k=U[q];if(k.location>=0){let re=C[q];if(re===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),re!==void 0){let ne=re.normalized,ye=re.itemSize,De=e.get(re);if(De===void 0)continue;let ke=De.buffer,nt=De.type,tt=De.bytesPerElement,Y=nt===n.INT||nt===n.UNSIGNED_INT||re.gpuType===xo;if(re.isInterleavedBufferAttribute){let $=re.data,fe=$.stride,Ue=re.offset;if($.isInstancedInterleavedBuffer){for(let Te=0;Te<k.locationSize;Te++)u(k.location+Te,$.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Te=0;Te<k.locationSize;Te++)m(k.location+Te);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let Te=0;Te<k.locationSize;Te++)w(k.location+Te,ye/k.locationSize,nt,ne,fe*tt,(Ue+ye/k.locationSize*Te)*tt,Y)}else{if(re.isInstancedBufferAttribute){for(let $=0;$<k.locationSize;$++)u(k.location+$,re.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let $=0;$<k.locationSize;$++)m(k.location+$);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let $=0;$<k.locationSize;$++)w(k.location+$,ye/k.locationSize,nt,ne,ye*tt,ye/k.locationSize*$*tt,Y)}}else if(B!==void 0){let ne=B[q];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(k.location,ne);break;case 3:n.vertexAttrib3fv(k.location,ne);break;case 4:n.vertexAttrib4fv(k.location,ne);break;default:n.vertexAttrib1fv(k.location,ne)}}}}_()}function R(){z();for(let M in i){let T=i[M];for(let F in T){let D=T[F];for(let C in D)h(D[C].object),delete D[C];delete T[F]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;let T=i[M.id];for(let F in T){let D=T[F];for(let C in D)h(D[C].object),delete D[C];delete T[F]}delete i[M.id]}function L(M){for(let T in i){let F=i[T];if(F[M.id]===void 0)continue;let D=F[M.id];for(let C in D)h(D[C].object),delete D[C];delete F[M.id]}}function z(){S(),a=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:z,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function Ag(n,e,t){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function a(l,h,d){d!==0&&(n.drawArraysInstanced(i,l,h,d),t.update(h,i,d))}function o(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,i,1)}function c(l,h,d,p){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,p,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*p[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Cg(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(L){return!(L!==Nn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let z=L===ns&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==qn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Yn&&!z)}function c(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:_,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:R,maxSamples:A}}function Rg(n){let e=this,t=null,i=0,r=!1,s=!1,a=new jn,o=new dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let f=d.length!==0||p||i!==0||r;return r=p,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{let _=s?0:i,w=_*4,y=u.clippingState||null;c.value=y,y=h(g,p,w,f);for(let R=0;R!==w;++R)y[R]=t[R];u.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,p,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let u=f+x*4,_=p.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let w=0,y=f;w!==x;++w,y+=4)a.copy(d[w]).applyMatrix4(_,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Ig(n){let e=new WeakMap;function t(a,o){return o===po?a.mapping=or:o===mo&&(a.mapping=lr),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===po||o===mo)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Ga(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var as=4,xu=[.125,.215,.35,.446,.526,.582],fr=20,wc=new Ys,_u=new Qe,Tc=null,Ec=0,Ac=0,Cc=!1,dr=(1+Math.sqrt(5))/2,ss=1/dr,yu=[new O(-dr,ss,0),new O(dr,ss,0),new O(-ss,0,dr),new O(ss,0,dr),new O(0,dr,-ss),new O(0,dr,ss),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Pg=new O,nl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:o=Pg}=s;Tc=this._renderer.getRenderTarget(),Ec=this._renderer.getActiveCubeFace(),Ac=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tc,Ec,Ac),this._renderer.xr.enabled=Cc,e.scissorTest=!1,el(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tc=this._renderer.getRenderTarget(),Ec=this._renderer.getActiveCubeFace(),Ac=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:ns,format:Nn,colorSpace:$i,depthBuffer:!1},r=vu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vu(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dg(s)),this._blurMaterial=Lg(s,e,t)}return r}_compileMaterial(e){let t=new gt(this._lodPlanes[0],e);this._renderer.compile(t,wc)}_sceneToCubeUV(e,t,i,r,s){let c=new $t(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor(_u),d.toneMapping=Mi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));let x=new vn({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),m=new gt(new an,x),u=!1,_=e.background;_?_.isColor&&(x.color.copy(_),e.background=null,u=!0):(x.color.copy(_u),u=!0);for(let w=0;w<6;w++){let y=w%3;y===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[w],s.y,s.z)):y===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[w]));let R=this._cubeSize;el(r,y*R,w>2?R:0,R,R),d.setRenderTarget(r),u&&d.render(m,c),d.render(e,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=p,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===or||e.mapping===lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mu());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new gt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;el(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,wc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=yu[(r-s-1)%yu.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new gt(this._lodPlanes[r],l),p=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*fr-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):fr;m>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fr}`);let u=[],_=0;for(let L=0;L<fr;++L){let z=L/x,S=Math.exp(-z*z/2);u.push(S),L===0?_+=S:L<m&&(_+=2*S)}for(let L=0;L<u.length;L++)u[L]=u[L]/_;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:w}=this;p.dTheta.value=g,p.mipInt.value=w-i;let y=this._sizeLods[r],R=3*y*(r>w-as?r-w+as:0),A=4*(this._cubeSize-y);el(t,R,A,3*y,2*y),c.setRenderTarget(t),c.render(d,wc)}};function Dg(n){let e=[],t=[],i=[],r=n,s=n-as+1+xu.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);t.push(o);let c=1/o;a>n-as?c=xu[a-n+as-1]:a===0&&(c=0),i.push(c);let l=1/(o-2),h=-l,d=1+l,p=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,x=3,m=2,u=1,_=new Float32Array(x*g*f),w=new Float32Array(m*g*f),y=new Float32Array(u*g*f);for(let A=0;A<f;A++){let L=A%3*2/3-1,z=A>2?0:-1,S=[L,z,0,L+2/3,z,0,L+2/3,z+1,0,L,z,0,L+2/3,z+1,0,L,z+1,0];_.set(S,x*g*A),w.set(p,m*g*A);let M=[A,A,A,A,A,A];y.set(M,u*g*A)}let R=new Ut;R.setAttribute("position",new Kt(_,x)),R.setAttribute("uv",new Kt(w,m)),R.setAttribute("faceIndex",new Kt(y,u)),e.push(R),r>as&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function vu(n,e,t){let i=new Qn(n,e,t);return i.texture.mapping=Zs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function el(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Lg(n,e,t){let i=new Float32Array(fr),r=new O(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Mu(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function bu(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Oc(){return`

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
	`}function Ug(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===po||c===mo,h=c===or||c===lr;if(l||h){let d=e.get(o),p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new nl(n)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&r(f)?(t===null&&(t=new nl(n)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Ng(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Gr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Fg(n,e,t,i){let r={},s=new WeakMap;function a(d){let p=d.target;p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete r[p.id];let f=s.get(p);f&&(e.remove(f),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,t.memory.geometries++),p}function c(d){let p=d.attributes;for(let f in p)e.update(p[f],n.ARRAY_BUFFER)}function l(d){let p=[],f=d.index,g=d.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let w=0,y=_.length;w<y;w+=3){let R=_[w+0],A=_[w+1],L=_[w+2];p.push(R,A,A,L,L,R)}}else if(g!==void 0){let _=g.array;x=g.version;for(let w=0,y=_.length/3-1;w<y;w+=3){let R=w+0,A=w+1,L=w+2;p.push(R,A,A,L,L,R)}}else return;let m=new(yc(p)?Fs:Ns)(p,1);m.version=x;let u=s.get(d);u&&e.remove(u),s.set(d,m)}function h(d){let p=s.get(d);if(p){let f=d.index;f!==null&&p.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function zg(n,e,t){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function c(p,f){n.drawElements(i,f,s,p*a),t.update(f,i,1)}function l(p,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,p*a,g),t.update(f,i,g))}function h(p,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,g);let m=0;for(let u=0;u<g;u++)m+=f[u];t.update(m,i,1)}function d(p,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)l(p[u]/a,f[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,p,0,x,0,g);let u=0;for(let _=0;_<g;_++)u+=f[_]*x[_];t.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Og(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Bg(n,e,t){let i=new WeakMap,r=new Ct;function s(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,p=i.get(o);if(p===void 0||p.count!==d){let S=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",S)};p!==void 0&&p.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let y=o.attributes.position.count*w,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*R*4*d),L=new Us(A,y,R,d);L.type=Yn,L.needsUpdate=!0;let z=w*4;for(let M=0;M<d;M++){let T=m[M],F=u[M],D=_[M],C=y*R*4*M;for(let U=0;U<T.count;U++){let B=U*z;f===!0&&(r.fromBufferAttribute(T,U),A[C+B+0]=r.x,A[C+B+1]=r.y,A[C+B+2]=r.z,A[C+B+3]=0),g===!0&&(r.fromBufferAttribute(F,U),A[C+B+4]=r.x,A[C+B+5]=r.y,A[C+B+6]=r.z,A[C+B+7]=0),x===!0&&(r.fromBufferAttribute(D,U),A[C+B+8]=r.x,A[C+B+9]=r.y,A[C+B+10]=r.z,A[C+B+11]=D.itemSize===4?r.w:1)}}p={count:d,texture:L,size:new Ve(y,R)},i.set(o,p),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:s}}function kg(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return d}function a(){r=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}var Vu=new un,Su=new Vs(1,1),Gu=new Us,Hu=new ka,Wu=new Os,wu=[],Tu=[],Eu=new Float32Array(16),Au=new Float32Array(9),Cu=new Float32Array(4);function cs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=wu[r];if(s===void 0&&(s=new Float32Array(r),wu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function il(n,e){let t=Tu[e];t===void 0&&(t=new Int32Array(e),Tu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Vg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Gg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),Qt(t,e)}}function Hg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),Qt(t,e)}}function Wg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),Qt(t,e)}}function Xg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,i))return;Cu.set(i),n.uniformMatrix2fv(this.addr,!1,Cu),Qt(t,i)}}function qg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,i))return;Au.set(i),n.uniformMatrix3fv(this.addr,!1,Au),Qt(t,i)}}function Yg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,i))return;Eu.set(i),n.uniformMatrix4fv(this.addr,!1,Eu),Qt(t,i)}}function Zg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Jg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),Qt(t,e)}}function $g(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),Qt(t,e)}}function Kg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),Qt(t,e)}}function jg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Qg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),Qt(t,e)}}function e0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),Qt(t,e)}}function t0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),Qt(t,e)}}function n0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Su.compareFunction=gc,s=Su):s=Vu,t.setTexture2D(e||s,r)}function i0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Hu,r)}function r0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Wu,r)}function s0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Gu,r)}function a0(n){switch(n){case 5126:return Vg;case 35664:return Gg;case 35665:return Hg;case 35666:return Wg;case 35674:return Xg;case 35675:return qg;case 35676:return Yg;case 5124:case 35670:return Zg;case 35667:case 35671:return Jg;case 35668:case 35672:return $g;case 35669:case 35673:return Kg;case 5125:return jg;case 36294:return Qg;case 36295:return e0;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return r0;case 36289:case 36303:case 36311:case 36292:return s0}}function o0(n,e){n.uniform1fv(this.addr,e)}function l0(n,e){let t=cs(e,this.size,2);n.uniform2fv(this.addr,t)}function c0(n,e){let t=cs(e,this.size,3);n.uniform3fv(this.addr,t)}function h0(n,e){let t=cs(e,this.size,4);n.uniform4fv(this.addr,t)}function u0(n,e){let t=cs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function d0(n,e){let t=cs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function f0(n,e){let t=cs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function p0(n,e){n.uniform1iv(this.addr,e)}function m0(n,e){n.uniform2iv(this.addr,e)}function g0(n,e){n.uniform3iv(this.addr,e)}function x0(n,e){n.uniform4iv(this.addr,e)}function _0(n,e){n.uniform1uiv(this.addr,e)}function y0(n,e){n.uniform2uiv(this.addr,e)}function v0(n,e){n.uniform3uiv(this.addr,e)}function M0(n,e){n.uniform4uiv(this.addr,e)}function b0(n,e,t){let i=this.cache,r=e.length,s=il(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Qt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Vu,s[a])}function S0(n,e,t){let i=this.cache,r=e.length,s=il(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Qt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Hu,s[a])}function w0(n,e,t){let i=this.cache,r=e.length,s=il(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Qt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Wu,s[a])}function T0(n,e,t){let i=this.cache,r=e.length,s=il(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Qt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Gu,s[a])}function E0(n){switch(n){case 5126:return o0;case 35664:return l0;case 35665:return c0;case 35666:return h0;case 35674:return u0;case 35675:return d0;case 35676:return f0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return x0;case 5125:return _0;case 36294:return y0;case 36295:return v0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return b0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return T0}}var Ic=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=a0(t.type)}},Pc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=E0(t.type)}},Dc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},Rc=/(\w+)(\])?(\[|\.)?/g;function Ru(n,e){n.seq.push(e),n.map[e.id]=e}function A0(n,e,t){let i=n.name,r=i.length;for(Rc.lastIndex=0;;){let s=Rc.exec(i),a=Rc.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Ru(t,l===void 0?new Ic(o,n,e):new Pc(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Dc(o),Ru(t,d)),t=d}}}var os=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);A0(s,a,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function Iu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var C0=37297,R0=0;function I0(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Pu=new dt;function P0(n){At._getMatrix(Pu,At.workingColorSpace,n);let e=`mat3( ${Pu.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(n)){case Ds:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Du(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+I0(n.getShaderSource(e),o)}else return s}function D0(n,e){let t=P0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function L0(n,e){let t;switch(e){case Jh:t="Linear";break;case $h:t="Reinhard";break;case Kh:t="Cineon";break;case es:t="ACESFilmic";break;case Qh:t="AgX";break;case eu:t="Neutral";break;case jh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var tl=new O;function U0(){At.getLuminanceCoefficients(tl);let n=tl.x.toFixed(4),e=tl.y.toFixed(4),t=tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function F0(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function z0(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),a=s.name,o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ta(n){return n!==""}function Lu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var O0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lc(n){return n.replace(O0,k0)}var B0=new Map;function k0(n,e){let t=_t[e];if(t===void 0){let i=B0.get(e);if(i!==void 0)t=_t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Lc(t)}var V0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nu(n){return n.replace(V0,G0)}function G0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Fu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function H0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Qr?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function W0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case or:case lr:e="ENVMAP_TYPE_CUBE";break;case Zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function X0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case lr:e="ENVMAP_MODE_REFRACTION";break}return e}function q0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ac:e="ENVMAP_BLENDING_MULTIPLY";break;case Yh:e="ENVMAP_BLENDING_MIX";break;case Zh:e="ENVMAP_BLENDING_ADD";break}return e}function Y0(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Z0(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=H0(t),l=W0(t),h=X0(t),d=q0(t),p=Y0(t),f=N0(t),g=F0(s),x=r.createProgram(),m,u,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ta).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ta).join(`
`),u.length>0&&(u+=`
`)):(m=[Fu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),u=[Fu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?_t.tonemapping_pars_fragment:"",t.toneMapping!==Mi?L0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,D0("linearToOutputTexel",t.outputColorSpace),U0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ta).join(`
`)),a=Lc(a),a=Lu(a,t),a=Uu(a,t),o=Lc(o),o=Lu(o,t),o=Uu(o,t),a=Nu(a),o=Nu(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let w=_+m+a,y=_+u+o,R=Iu(r,r.VERTEX_SHADER,w),A=Iu(r,r.FRAGMENT_SHADER,y);r.attachShader(x,R),r.attachShader(x,A),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function L(T){if(n.debug.checkShaderErrors){let F=r.getProgramInfoLog(x)||"",D=r.getShaderInfoLog(R)||"",C=r.getShaderInfoLog(A)||"",U=F.trim(),B=D.trim(),q=C.trim(),k=!0,re=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,R,A);else{let ne=Du(r,R,"vertex"),ye=Du(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+U+`
`+ne+`
`+ye)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(B===""||q==="")&&(re=!1);re&&(T.diagnostics={runnable:k,programLog:U,vertexShader:{log:B,prefix:m},fragmentShader:{log:q,prefix:u}})}r.deleteShader(R),r.deleteShader(A),z=new os(r,x),S=z0(r,x)}let z;this.getUniforms=function(){return z===void 0&&L(this),z};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,C0)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=R0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}var J0=0,Uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Nc(e),t.set(e,i)),i}},Nc=class{constructor(e){this.id=J0++,this.code=e,this.usedTimes=0}};function $0(n,e,t,i,r,s,a){let o=new Xr,c=new Uc,l=new Set,h=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures,f=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,T,F,D){let C=F.fog,U=D.geometry,B=S.isMeshStandardMaterial?F.environment:null,q=(S.isMeshStandardMaterial?t:e).get(S.envMap||B),k=q&&q.mapping===Zs?q.image.height:null,re=g[S.type];S.precision!==null&&(f=r.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ne=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ye=ne!==void 0?ne.length:0,De=0;U.morphAttributes.position!==void 0&&(De=1),U.morphAttributes.normal!==void 0&&(De=2),U.morphAttributes.color!==void 0&&(De=3);let ke,nt,tt,Y;if(re){let xt=ii[re];ke=xt.vertexShader,nt=xt.fragmentShader}else ke=S.vertexShader,nt=S.fragmentShader,c.update(S),tt=c.getVertexShaderID(S),Y=c.getFragmentShaderID(S);let $=n.getRenderTarget(),fe=n.state.buffers.depth.getReversed(),Ue=D.isInstancedMesh===!0,Te=D.isBatchedMesh===!0,Ee=!!S.map,ft=!!S.matcap,N=!!q,Mt=!!S.aoMap,et=!!S.lightMap,He=!!S.bumpMap,Se=!!S.normalMap,Rt=!!S.displacementMap,Ce=!!S.emissiveMap,Xe=!!S.metalnessMap,Wt=!!S.roughnessMap,Nt=S.anisotropy>0,E=S.clearcoat>0,v=S.dispersion>0,Z=S.iridescence>0,ee=S.sheen>0,oe=S.transmission>0,Q=Nt&&!!S.anisotropyMap,Fe=E&&!!S.clearcoatMap,pe=E&&!!S.clearcoatNormalMap,we=E&&!!S.clearcoatRoughnessMap,ze=Z&&!!S.iridescenceMap,ce=Z&&!!S.iridescenceThicknessMap,me=ee&&!!S.sheenColorMap,qe=ee&&!!S.sheenRoughnessMap,Oe=!!S.specularMap,xe=!!S.specularColorMap,je=!!S.specularIntensityMap,G=oe&&!!S.transmissionMap,le=oe&&!!S.thicknessMap,ge=!!S.gradientMap,Pe=!!S.alphaMap,se=S.alphaTest>0,ie=!!S.alphaHash,Ne=!!S.extensions,Ye=Mi;S.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ye=n.toneMapping);let St={shaderID:re,shaderType:S.type,shaderName:S.name,vertexShader:ke,fragmentShader:nt,defines:S.defines,customVertexShaderID:tt,customFragmentShaderID:Y,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Te,batchingColor:Te&&D._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&D.instanceColor!==null,instancingMorph:Ue&&D.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:$===null?n.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:$i,alphaToCoverage:!!S.alphaToCoverage,map:Ee,matcap:ft,envMap:N,envMapMode:N&&q.mapping,envMapCubeUVHeight:k,aoMap:Mt,lightMap:et,bumpMap:He,normalMap:Se,displacementMap:p&&Rt,emissiveMap:Ce,normalMapObjectSpace:Se&&S.normalMapType===ru,normalMapTangentSpace:Se&&S.normalMapType===mc,metalnessMap:Xe,roughnessMap:Wt,anisotropy:Nt,anisotropyMap:Q,clearcoat:E,clearcoatMap:Fe,clearcoatNormalMap:pe,clearcoatRoughnessMap:we,dispersion:v,iridescence:Z,iridescenceMap:ze,iridescenceThicknessMap:ce,sheen:ee,sheenColorMap:me,sheenRoughnessMap:qe,specularMap:Oe,specularColorMap:xe,specularIntensityMap:je,transmission:oe,transmissionMap:G,thicknessMap:le,gradientMap:ge,opaque:S.transparent===!1&&S.blending===Zi&&S.alphaToCoverage===!1,alphaMap:Pe,alphaTest:se,alphaHash:ie,combine:S.combine,mapUv:Ee&&x(S.map.channel),aoMapUv:Mt&&x(S.aoMap.channel),lightMapUv:et&&x(S.lightMap.channel),bumpMapUv:He&&x(S.bumpMap.channel),normalMapUv:Se&&x(S.normalMap.channel),displacementMapUv:Rt&&x(S.displacementMap.channel),emissiveMapUv:Ce&&x(S.emissiveMap.channel),metalnessMapUv:Xe&&x(S.metalnessMap.channel),roughnessMapUv:Wt&&x(S.roughnessMap.channel),anisotropyMapUv:Q&&x(S.anisotropyMap.channel),clearcoatMapUv:Fe&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:me&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:qe&&x(S.sheenRoughnessMap.channel),specularMapUv:Oe&&x(S.specularMap.channel),specularColorMapUv:xe&&x(S.specularColorMap.channel),specularIntensityMapUv:je&&x(S.specularIntensityMap.channel),transmissionMapUv:G&&x(S.transmissionMap.channel),thicknessMapUv:le&&x(S.thicknessMap.channel),alphaMapUv:Pe&&x(S.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Se||Nt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!U.attributes.uv&&(Ee||Pe),fog:!!C,useFog:S.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:fe,skinning:D.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:De,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Ee&&S.map.isVideoTexture===!0&&At.getTransfer(S.map.colorSpace)===Ot,decodeVideoTextureEmissive:Ce&&S.emissiveMap.isVideoTexture===!0&&At.getTransfer(S.emissiveMap.colorSpace)===Ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===qt,flipSided:S.side===on,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ne&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&S.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function u(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let T in S.defines)M.push(T),M.push(S.defines[T]);return S.isRawShaderMaterial===!1&&(_(M,S),w(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function _(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function w(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){let M=g[S.type],T;if(M){let F=ii[M];T=jo.clone(F.uniforms)}else T=S.uniforms;return T}function R(S,M){let T;for(let F=0,D=h.length;F<D;F++){let C=h[F];if(C.cacheKey===M){T=C,++T.usedTimes;break}}return T===void 0&&(T=new Z0(n,M,S,s),h.push(T)),T}function A(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function L(S){c.remove(S)}function z(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:R,releaseProgram:A,releaseShaderCache:L,programs:h,dispose:z}}function K0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function j0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function zu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ou(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,p,f,g,x,m){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:p,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},n[e]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=f,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=x,u.group=m),e++,u}function o(d,p,f,g,x,m){let u=a(d,p,f,g,x,m);f.transmission>0?i.push(u):f.transparent===!0?r.push(u):t.push(u)}function c(d,p,f,g,x,m){let u=a(d,p,f,g,x,m);f.transmission>0?i.unshift(u):f.transparent===!0?r.unshift(u):t.unshift(u)}function l(d,p){t.length>1&&t.sort(d||j0),i.length>1&&i.sort(p||zu),r.length>1&&r.sort(p||zu)}function h(){for(let d=e,p=n.length;d<p;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function Q0(){let n=new WeakMap;function e(i,r){let s=n.get(i),a;return s===void 0?(a=new Ou,n.set(i,[a])):r>=s.length?(a=new Ou,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function ex(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Qe};break;case"SpotLight":t={position:new O,direction:new O,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function tx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var nx=0;function ix(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function rx(n){let e=new ex,t=tx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);let r=new O,s=new Lt,a=new Lt;function o(l){let h=0,d=0,p=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,u=0,_=0,w=0,y=0,R=0,A=0,L=0;l.sort(ix);for(let S=0,M=l.length;S<M;S++){let T=l[S],F=T.color,D=T.intensity,C=T.distance,U=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=F.r*D,d+=F.g*D,p+=F.b*D;else if(T.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(T.sh.coefficients[B],D);L++}else if(T.isDirectionalLight){let B=e.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let q=T.shadow,k=t.get(T);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,i.directionalShadow[f]=k,i.directionalShadowMap[f]=U,i.directionalShadowMatrix[f]=T.shadow.matrix,_++}i.directional[f]=B,f++}else if(T.isSpotLight){let B=e.get(T);B.position.setFromMatrixPosition(T.matrixWorld),B.color.copy(F).multiplyScalar(D),B.distance=C,B.coneCos=Math.cos(T.angle),B.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),B.decay=T.decay,i.spot[x]=B;let q=T.shadow;if(T.map&&(i.spotLightMap[R]=T.map,R++,q.updateMatrices(T),T.castShadow&&A++),i.spotLightMatrix[x]=q.matrix,T.castShadow){let k=t.get(T);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,i.spotShadow[x]=k,i.spotShadowMap[x]=U,y++}x++}else if(T.isRectAreaLight){let B=e.get(T);B.color.copy(F).multiplyScalar(D),B.halfWidth.set(T.width*.5,0,0),B.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=B,m++}else if(T.isPointLight){let B=e.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),B.distance=T.distance,B.decay=T.decay,T.castShadow){let q=T.shadow,k=t.get(T);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,k.shadowCameraNear=q.camera.near,k.shadowCameraFar=q.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=U,i.pointShadowMatrix[g]=T.shadow.matrix,w++}i.point[g]=B,g++}else if(T.isHemisphereLight){let B=e.get(T);B.skyColor.copy(T.color).multiplyScalar(D),B.groundColor.copy(T.groundColor).multiplyScalar(D),i.hemi[u]=B,u++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=p;let z=i.hash;(z.directionalLength!==f||z.pointLength!==g||z.spotLength!==x||z.rectAreaLength!==m||z.hemiLength!==u||z.numDirectionalShadows!==_||z.numPointShadows!==w||z.numSpotShadows!==y||z.numSpotMaps!==R||z.numLightProbes!==L)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=y+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=L,z.directionalLength=f,z.pointLength=g,z.spotLength=x,z.rectAreaLength=m,z.hemiLength=u,z.numDirectionalShadows=_,z.numPointShadows=w,z.numSpotShadows=y,z.numSpotMaps=R,z.numLightProbes=L,i.version=nx++)}function c(l,h){let d=0,p=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let u=0,_=l.length;u<_;u++){let w=l[u];if(w.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(w.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(w.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(w.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){let y=i.point[p];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),p++}else if(w.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:i}}function Bu(n){let e=new rx(n),t=[],i=[];function r(h){l.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function sx(n){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new Bu(n),e.set(r,[o])):s>=a.length?(o=new Bu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ox=`uniform sampler2D shadow_pass;
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
}`;function lx(n,e,t){let i=new $r,r=new Ve,s=new Ve,a=new Ct,o=new Ya({depthPacking:iu}),c=new Za,l={},h=t.maxTextureSize,d={[mi]:on,[on]:mi,[qt]:qt},p=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:ax,fragmentShader:ox}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ut;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new gt(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nc;let u=this.type;this.render=function(A,L,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let S=n.getRenderTarget(),M=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),F=n.state;F.setBlending(vi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let D=u!==ni&&this.type===ni,C=u===ni&&this.type!==ni;for(let U=0,B=A.length;U<B;U++){let q=A[U],k=q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);let re=k.getFrameExtents();if(r.multiply(re),s.copy(k.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/re.x),r.x=s.x*re.x,k.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/re.y),r.y=s.y*re.y,k.mapSize.y=s.y)),k.map===null||D===!0||C===!0){let ye=this.type!==ni?{minFilter:yn,magFilter:yn}:{};k.map!==null&&k.map.dispose(),k.map=new Qn(r.x,r.y,ye),k.map.texture.name=q.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();let ne=k.getViewportCount();for(let ye=0;ye<ne;ye++){let De=k.getViewport(ye);a.set(s.x*De.x,s.y*De.y,s.x*De.z,s.y*De.w),F.viewport(a),k.updateMatrices(q,ye),i=k.getFrustum(),y(L,z,k.camera,q,this.type)}k.isPointLightShadow!==!0&&this.type===ni&&_(k,z),k.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,T)};function _(A,L){let z=e.update(x);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Qn(r.x,r.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(L,null,z,p,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(L,null,z,f,x,null)}function w(A,L,z,S){let M=null,T=z.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)M=T;else if(M=z.isPointLight===!0?c:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let F=M.uuid,D=L.uuid,C=l[F];C===void 0&&(C={},l[F]=C);let U=C[D];U===void 0&&(U=M.clone(),C[D]=U,L.addEventListener("dispose",R)),M=U}if(M.visible=L.visible,M.wireframe=L.wireframe,S===ni?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:d[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,z.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let F=n.properties.get(M);F.light=z}return M}function y(A,L,z,S,M){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===ni)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,A.matrixWorld);let D=e.update(A),C=A.material;if(Array.isArray(C)){let U=D.groups;for(let B=0,q=U.length;B<q;B++){let k=U[B],re=C[k.materialIndex];if(re&&re.visible){let ne=w(A,re,S,M);A.onBeforeShadow(n,A,L,z,D,ne,k),n.renderBufferDirect(z,null,D,ne,A,k),A.onAfterShadow(n,A,L,z,D,ne,k)}}}else if(C.visible){let U=w(A,C,S,M);A.onBeforeShadow(n,A,L,z,D,U,null),n.renderBufferDirect(z,null,D,U,A,null),A.onAfterShadow(n,A,L,z,D,U,null)}}let F=A.children;for(let D=0,C=F.length;D<C;D++)y(F[D],L,z,S,M)}function R(A){A.target.removeEventListener("dispose",R);for(let z in l){let S=l[z],M=A.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var cx={[ao]:oo,[lo]:uo,[co]:fo,[Ji]:ho,[oo]:ao,[uo]:lo,[fo]:co,[ho]:Ji};function hx(n,e){function t(){let G=!1,le=new Ct,ge=null,Pe=new Ct(0,0,0,0);return{setMask:function(se){ge!==se&&!G&&(n.colorMask(se,se,se,se),ge=se)},setLocked:function(se){G=se},setClear:function(se,ie,Ne,Ye,St){St===!0&&(se*=Ye,ie*=Ye,Ne*=Ye),le.set(se,ie,Ne,Ye),Pe.equals(le)===!1&&(n.clearColor(se,ie,Ne,Ye),Pe.copy(le))},reset:function(){G=!1,ge=null,Pe.set(-1,0,0,0)}}}function i(){let G=!1,le=!1,ge=null,Pe=null,se=null;return{setReversed:function(ie){if(le!==ie){let Ne=e.get("EXT_clip_control");ie?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),le=ie;let Ye=se;se=null,this.setClear(Ye)}},getReversed:function(){return le},setTest:function(ie){ie?$(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(ie){ge!==ie&&!G&&(n.depthMask(ie),ge=ie)},setFunc:function(ie){if(le&&(ie=cx[ie]),Pe!==ie){switch(ie){case ao:n.depthFunc(n.NEVER);break;case oo:n.depthFunc(n.ALWAYS);break;case lo:n.depthFunc(n.LESS);break;case Ji:n.depthFunc(n.LEQUAL);break;case co:n.depthFunc(n.EQUAL);break;case ho:n.depthFunc(n.GEQUAL);break;case uo:n.depthFunc(n.GREATER);break;case fo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=ie}},setLocked:function(ie){G=ie},setClear:function(ie){se!==ie&&(le&&(ie=1-ie),n.clearDepth(ie),se=ie)},reset:function(){G=!1,ge=null,Pe=null,se=null,le=!1}}}function r(){let G=!1,le=null,ge=null,Pe=null,se=null,ie=null,Ne=null,Ye=null,St=null;return{setTest:function(xt){G||(xt?$(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(xt){le!==xt&&!G&&(n.stencilMask(xt),le=xt)},setFunc:function(xt,ln,xn){(ge!==xt||Pe!==ln||se!==xn)&&(n.stencilFunc(xt,ln,xn),ge=xt,Pe=ln,se=xn)},setOp:function(xt,ln,xn){(ie!==xt||Ne!==ln||Ye!==xn)&&(n.stencilOp(xt,ln,xn),ie=xt,Ne=ln,Ye=xn)},setLocked:function(xt){G=xt},setClear:function(xt){St!==xt&&(n.clearStencil(xt),St=xt)},reset:function(){G=!1,le=null,ge=null,Pe=null,se=null,ie=null,Ne=null,Ye=null,St=null}}}let s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap,h={},d={},p=new WeakMap,f=[],g=null,x=!1,m=null,u=null,_=null,w=null,y=null,R=null,A=null,L=new Qe(0,0,0),z=0,S=!1,M=null,T=null,F=null,D=null,C=null,U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,q=0,k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(k)[1]),B=q>=1):k.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),B=q>=2);let re=null,ne={},ye=n.getParameter(n.SCISSOR_BOX),De=n.getParameter(n.VIEWPORT),ke=new Ct().fromArray(ye),nt=new Ct().fromArray(De);function tt(G,le,ge,Pe){let se=new Uint8Array(4),ie=n.createTexture();n.bindTexture(G,ie),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ne=0;Ne<ge;Ne++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(le+Ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return ie}let Y={};Y[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(n.DEPTH_TEST),a.setFunc(Ji),He(!1),Se(tc),$(n.CULL_FACE),Mt(vi);function $(G){h[G]!==!0&&(n.enable(G),h[G]=!0)}function fe(G){h[G]!==!1&&(n.disable(G),h[G]=!1)}function Ue(G,le){return d[G]!==le?(n.bindFramebuffer(G,le),d[G]=le,G===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=le),G===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=le),!0):!1}function Te(G,le){let ge=f,Pe=!1;if(G){ge=p.get(le),ge===void 0&&(ge=[],p.set(le,ge));let se=G.textures;if(ge.length!==se.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,Ne=se.length;ie<Ne;ie++)ge[ie]=n.COLOR_ATTACHMENT0+ie;ge.length=se.length,Pe=!0}}else ge[0]!==n.BACK&&(ge[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(ge)}function Ee(G){return g!==G?(n.useProgram(G),g=G,!0):!1}let ft={[Li]:n.FUNC_ADD,[Ih]:n.FUNC_SUBTRACT,[Ph]:n.FUNC_REVERSE_SUBTRACT};ft[Dh]=n.MIN,ft[Lh]=n.MAX;let N={[Uh]:n.ZERO,[Nh]:n.ONE,[Fh]:n.SRC_COLOR,[La]:n.SRC_ALPHA,[Gh]:n.SRC_ALPHA_SATURATE,[kh]:n.DST_COLOR,[Oh]:n.DST_ALPHA,[zh]:n.ONE_MINUS_SRC_COLOR,[Ua]:n.ONE_MINUS_SRC_ALPHA,[Vh]:n.ONE_MINUS_DST_COLOR,[Bh]:n.ONE_MINUS_DST_ALPHA,[Hh]:n.CONSTANT_COLOR,[Wh]:n.ONE_MINUS_CONSTANT_COLOR,[Xh]:n.CONSTANT_ALPHA,[qh]:n.ONE_MINUS_CONSTANT_ALPHA};function Mt(G,le,ge,Pe,se,ie,Ne,Ye,St,xt){if(G===vi){x===!0&&(fe(n.BLEND),x=!1);return}if(x===!1&&($(n.BLEND),x=!0),G!==Rh){if(G!==m||xt!==S){if((u!==Li||y!==Li)&&(n.blendEquation(n.FUNC_ADD),u=Li,y=Li),xt)switch(G){case Zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ic:n.blendFunc(n.ONE,n.ONE);break;case rc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ic:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case rc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}_=null,w=null,R=null,A=null,L.set(0,0,0),z=0,m=G,S=xt}return}se=se||le,ie=ie||ge,Ne=Ne||Pe,(le!==u||se!==y)&&(n.blendEquationSeparate(ft[le],ft[se]),u=le,y=se),(ge!==_||Pe!==w||ie!==R||Ne!==A)&&(n.blendFuncSeparate(N[ge],N[Pe],N[ie],N[Ne]),_=ge,w=Pe,R=ie,A=Ne),(Ye.equals(L)===!1||St!==z)&&(n.blendColor(Ye.r,Ye.g,Ye.b,St),L.copy(Ye),z=St),m=G,S=!1}function et(G,le){G.side===qt?fe(n.CULL_FACE):$(n.CULL_FACE);let ge=G.side===on;le&&(ge=!ge),He(ge),G.blending===Zi&&G.transparent===!1?Mt(vi):Mt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),s.setMask(G.colorWrite);let Pe=G.stencilWrite;o.setTest(Pe),Pe&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ce(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?$(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function He(G){M!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),M=G)}function Se(G){G!==Ah?($(n.CULL_FACE),G!==T&&(G===tc?n.cullFace(n.BACK):G===Ch?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),T=G}function Rt(G){G!==F&&(B&&n.lineWidth(G),F=G)}function Ce(G,le,ge){G?($(n.POLYGON_OFFSET_FILL),(D!==le||C!==ge)&&(n.polygonOffset(le,ge),D=le,C=ge)):fe(n.POLYGON_OFFSET_FILL)}function Xe(G){G?$(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function Wt(G){G===void 0&&(G=n.TEXTURE0+U-1),re!==G&&(n.activeTexture(G),re=G)}function Nt(G,le,ge){ge===void 0&&(re===null?ge=n.TEXTURE0+U-1:ge=re);let Pe=ne[ge];Pe===void 0&&(Pe={type:void 0,texture:void 0},ne[ge]=Pe),(Pe.type!==G||Pe.texture!==le)&&(re!==ge&&(n.activeTexture(ge),re=ge),n.bindTexture(G,le||Y[G]),Pe.type=G,Pe.texture=le)}function E(){let G=ne[re];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Z(){try{n.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ee(){try{n.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function oe(){try{n.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Q(){try{n.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{n.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{n.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{n.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ze(){try{n.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{n.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(G){ke.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),ke.copy(G))}function qe(G){nt.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),nt.copy(G))}function Oe(G,le){let ge=l.get(le);ge===void 0&&(ge=new WeakMap,l.set(le,ge));let Pe=ge.get(G);Pe===void 0&&(Pe=n.getUniformBlockIndex(le,G.name),ge.set(G,Pe))}function xe(G,le){let Pe=l.get(le).get(G);c.get(le)!==Pe&&(n.uniformBlockBinding(le,Pe,G.__bindingPointIndex),c.set(le,Pe))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},re=null,ne={},d={},p=new WeakMap,f=[],g=null,x=!1,m=null,u=null,_=null,w=null,y=null,R=null,A=null,L=new Qe(0,0,0),z=0,S=!1,M=null,T=null,F=null,D=null,C=null,ke.set(0,0,n.canvas.width,n.canvas.height),nt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:$,disable:fe,bindFramebuffer:Ue,drawBuffers:Te,useProgram:Ee,setBlending:Mt,setMaterial:et,setFlipSided:He,setCullFace:Se,setLineWidth:Rt,setPolygonOffset:Ce,setScissorTest:Xe,activeTexture:Wt,bindTexture:Nt,unbindTexture:E,compressedTexImage2D:v,compressedTexImage3D:Z,texImage2D:ze,texImage3D:ce,updateUBOMapping:Oe,uniformBlockBinding:xe,texStorage2D:pe,texStorage3D:we,texSubImage2D:ee,texSubImage3D:oe,compressedTexSubImage2D:Q,compressedTexSubImage3D:Fe,scissor:me,viewport:qe,reset:je}}function ux(n,e,t,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ve,h=new WeakMap,d,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return f?new OffscreenCanvas(E,v):Vr("canvas")}function x(E,v,Z){let ee=1,oe=Nt(E);if((oe.width>Z||oe.height>Z)&&(ee=Z/Math.max(oe.width,oe.height)),ee<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let Q=Math.floor(ee*oe.width),Fe=Math.floor(ee*oe.height);d===void 0&&(d=g(Q,Fe));let pe=v?g(Q,Fe):d;return pe.width=Q,pe.height=Fe,pe.getContext("2d").drawImage(E,0,0,Q,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+Q+"x"+Fe+")."),pe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),E;return E}function m(E){return E.generateMipmaps}function u(E){n.generateMipmap(E)}function _(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(E,v,Z,ee,oe=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Q=v;if(v===n.RED&&(Z===n.FLOAT&&(Q=n.R32F),Z===n.HALF_FLOAT&&(Q=n.R16F),Z===n.UNSIGNED_BYTE&&(Q=n.R8)),v===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(Q=n.R8UI),Z===n.UNSIGNED_SHORT&&(Q=n.R16UI),Z===n.UNSIGNED_INT&&(Q=n.R32UI),Z===n.BYTE&&(Q=n.R8I),Z===n.SHORT&&(Q=n.R16I),Z===n.INT&&(Q=n.R32I)),v===n.RG&&(Z===n.FLOAT&&(Q=n.RG32F),Z===n.HALF_FLOAT&&(Q=n.RG16F),Z===n.UNSIGNED_BYTE&&(Q=n.RG8)),v===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(Q=n.RG8UI),Z===n.UNSIGNED_SHORT&&(Q=n.RG16UI),Z===n.UNSIGNED_INT&&(Q=n.RG32UI),Z===n.BYTE&&(Q=n.RG8I),Z===n.SHORT&&(Q=n.RG16I),Z===n.INT&&(Q=n.RG32I)),v===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),Z===n.UNSIGNED_INT&&(Q=n.RGB32UI),Z===n.BYTE&&(Q=n.RGB8I),Z===n.SHORT&&(Q=n.RGB16I),Z===n.INT&&(Q=n.RGB32I)),v===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),Z===n.UNSIGNED_INT&&(Q=n.RGBA32UI),Z===n.BYTE&&(Q=n.RGBA8I),Z===n.SHORT&&(Q=n.RGBA16I),Z===n.INT&&(Q=n.RGBA32I)),v===n.RGB&&(Z===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),Z===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),v===n.RGBA){let Fe=oe?Ds:At.getTransfer(ee);Z===n.FLOAT&&(Q=n.RGBA32F),Z===n.HALF_FLOAT&&(Q=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(Q=Fe===Ot?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function y(E,v){let Z;return E?v===null||v===Bi||v===is?Z=n.DEPTH24_STENCIL8:v===Yn?Z=n.DEPTH32F_STENCIL8:v===ts&&(Z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Bi||v===is?Z=n.DEPTH_COMPONENT24:v===Yn?Z=n.DEPTH_COMPONENT32F:v===ts&&(Z=n.DEPTH_COMPONENT16),Z}function R(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==yn&&E.minFilter!==Hn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function A(E){let v=E.target;v.removeEventListener("dispose",A),z(v),v.isVideoTexture&&h.delete(v)}function L(E){let v=E.target;v.removeEventListener("dispose",L),M(v)}function z(E){let v=i.get(E);if(v.__webglInit===void 0)return;let Z=E.source,ee=p.get(Z);if(ee){let oe=ee[v.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&S(E),Object.keys(ee).length===0&&p.delete(Z)}i.remove(E)}function S(E){let v=i.get(E);n.deleteTexture(v.__webglTexture);let Z=E.source,ee=p.get(Z);delete ee[v.__cacheKey],a.memory.textures--}function M(E){let v=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(v.__webglFramebuffer[ee]))for(let oe=0;oe<v.__webglFramebuffer[ee].length;oe++)n.deleteFramebuffer(v.__webglFramebuffer[ee][oe]);else n.deleteFramebuffer(v.__webglFramebuffer[ee]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[ee])}else{if(Array.isArray(v.__webglFramebuffer))for(let ee=0;ee<v.__webglFramebuffer.length;ee++)n.deleteFramebuffer(v.__webglFramebuffer[ee]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ee=0;ee<v.__webglColorRenderbuffer.length;ee++)v.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[ee]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let Z=E.textures;for(let ee=0,oe=Z.length;ee<oe;ee++){let Q=i.get(Z[ee]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(Z[ee])}i.remove(E)}let T=0;function F(){T=0}function D(){let E=T;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),T+=1,E}function C(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function U(E,v){let Z=i.get(E);if(E.isVideoTexture&&Xe(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&Z.__version!==E.version){let ee=E.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(Z,E,v);return}}else E.isExternalTexture&&(Z.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+v)}function B(E,v){let Z=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&Z.__version!==E.version){Y(Z,E,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+v)}function q(E,v){let Z=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&Z.__version!==E.version){Y(Z,E,v);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+v)}function k(E,v){let Z=i.get(E);if(E.version>0&&Z.__version!==E.version){$(Z,E,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+v)}let re={[Or]:n.REPEAT,[Di]:n.CLAMP_TO_EDGE,[Na]:n.MIRRORED_REPEAT},ne={[yn]:n.NEAREST,[tu]:n.NEAREST_MIPMAP_NEAREST,[Js]:n.NEAREST_MIPMAP_LINEAR,[Hn]:n.LINEAR,[go]:n.LINEAR_MIPMAP_NEAREST,[Oi]:n.LINEAR_MIPMAP_LINEAR},ye={[su]:n.NEVER,[uu]:n.ALWAYS,[au]:n.LESS,[gc]:n.LEQUAL,[ou]:n.EQUAL,[hu]:n.GEQUAL,[lu]:n.GREATER,[cu]:n.NOTEQUAL};function De(E,v){if(v.type===Yn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Hn||v.magFilter===go||v.magFilter===Js||v.magFilter===Oi||v.minFilter===Hn||v.minFilter===go||v.minFilter===Js||v.minFilter===Oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,re[v.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,re[v.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,re[v.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ne[v.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ne[v.minFilter]),v.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ye[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===yn||v.minFilter!==Js&&v.minFilter!==Oi||v.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ke(E,v){let Z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",A));let ee=v.source,oe=p.get(ee);oe===void 0&&(oe={},p.set(ee,oe));let Q=C(v);if(Q!==E.__cacheKey){oe[Q]===void 0&&(oe[Q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),oe[Q].usedTimes++;let Fe=oe[E.__cacheKey];Fe!==void 0&&(oe[E.__cacheKey].usedTimes--,Fe.usedTimes===0&&S(v)),E.__cacheKey=Q,E.__webglTexture=oe[Q].texture}return Z}function nt(E,v,Z){return Math.floor(Math.floor(E/Z)/v)}function tt(E,v,Z,ee){let Q=E.updateRanges;if(Q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,Z,ee,v.data);else{Q.sort((ce,me)=>ce.start-me.start);let Fe=0;for(let ce=1;ce<Q.length;ce++){let me=Q[Fe],qe=Q[ce],Oe=me.start+me.count,xe=nt(qe.start,v.width,4),je=nt(me.start,v.width,4);qe.start<=Oe+1&&xe===je&&nt(qe.start+qe.count-1,v.width,4)===xe?me.count=Math.max(me.count,qe.start+qe.count-me.start):(++Fe,Q[Fe]=qe)}Q.length=Fe+1;let pe=n.getParameter(n.UNPACK_ROW_LENGTH),we=n.getParameter(n.UNPACK_SKIP_PIXELS),ze=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let ce=0,me=Q.length;ce<me;ce++){let qe=Q[ce],Oe=Math.floor(qe.start/4),xe=Math.ceil(qe.count/4),je=Oe%v.width,G=Math.floor(Oe/v.width),le=xe,ge=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,je),n.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,je,G,le,ge,Z,ee,v.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,we),n.pixelStorei(n.UNPACK_SKIP_ROWS,ze)}}function Y(E,v,Z){let ee=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ee=n.TEXTURE_3D);let oe=ke(E,v),Q=v.source;t.bindTexture(ee,E.__webglTexture,n.TEXTURE0+Z);let Fe=i.get(Q);if(Q.version!==Fe.__version||oe===!0){t.activeTexture(n.TEXTURE0+Z);let pe=At.getPrimaries(At.workingColorSpace),we=v.colorSpace===Zn?null:At.getPrimaries(v.colorSpace),ze=v.colorSpace===Zn||pe===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let ce=x(v.image,!1,r.maxTextureSize);ce=Wt(v,ce);let me=s.convert(v.format,v.colorSpace),qe=s.convert(v.type),Oe=w(v.internalFormat,me,qe,v.colorSpace,v.isVideoTexture);De(ee,v);let xe,je=v.mipmaps,G=v.isVideoTexture!==!0,le=Fe.__version===void 0||oe===!0,ge=Q.dataReady,Pe=R(v,ce);if(v.isDepthTexture)Oe=y(v.format===rs,v.type),le&&(G?t.texStorage2D(n.TEXTURE_2D,1,Oe,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Oe,ce.width,ce.height,0,me,qe,null));else if(v.isDataTexture)if(je.length>0){G&&le&&t.texStorage2D(n.TEXTURE_2D,Pe,Oe,je[0].width,je[0].height);for(let se=0,ie=je.length;se<ie;se++)xe=je[se],G?ge&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,xe.width,xe.height,me,qe,xe.data):t.texImage2D(n.TEXTURE_2D,se,Oe,xe.width,xe.height,0,me,qe,xe.data);v.generateMipmaps=!1}else G?(le&&t.texStorage2D(n.TEXTURE_2D,Pe,Oe,ce.width,ce.height),ge&&tt(v,ce,me,qe)):t.texImage2D(n.TEXTURE_2D,0,Oe,ce.width,ce.height,0,me,qe,ce.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){G&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Oe,je[0].width,je[0].height,ce.depth);for(let se=0,ie=je.length;se<ie;se++)if(xe=je[se],v.format!==Nn)if(me!==null)if(G){if(ge)if(v.layerUpdates.size>0){let Ne=Sc(xe.width,xe.height,v.format,v.type);for(let Ye of v.layerUpdates){let St=xe.data.subarray(Ye*Ne/xe.data.BYTES_PER_ELEMENT,(Ye+1)*Ne/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,Ye,xe.width,xe.height,1,me,St)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,xe.width,xe.height,ce.depth,me,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Oe,xe.width,xe.height,ce.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?ge&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,xe.width,xe.height,ce.depth,me,qe,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Oe,xe.width,xe.height,ce.depth,0,me,qe,xe.data)}else{G&&le&&t.texStorage2D(n.TEXTURE_2D,Pe,Oe,je[0].width,je[0].height);for(let se=0,ie=je.length;se<ie;se++)xe=je[se],v.format!==Nn?me!==null?G?ge&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,xe.width,xe.height,me,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Oe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?ge&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,xe.width,xe.height,me,qe,xe.data):t.texImage2D(n.TEXTURE_2D,se,Oe,xe.width,xe.height,0,me,qe,xe.data)}else if(v.isDataArrayTexture)if(G){if(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Oe,ce.width,ce.height,ce.depth),ge)if(v.layerUpdates.size>0){let se=Sc(ce.width,ce.height,v.format,v.type);for(let ie of v.layerUpdates){let Ne=ce.data.subarray(ie*se/ce.data.BYTES_PER_ELEMENT,(ie+1)*se/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,ce.width,ce.height,1,me,qe,Ne)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,me,qe,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,ce.width,ce.height,ce.depth,0,me,qe,ce.data);else if(v.isData3DTexture)G?(le&&t.texStorage3D(n.TEXTURE_3D,Pe,Oe,ce.width,ce.height,ce.depth),ge&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,me,qe,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,ce.width,ce.height,ce.depth,0,me,qe,ce.data);else if(v.isFramebufferTexture){if(le)if(G)t.texStorage2D(n.TEXTURE_2D,Pe,Oe,ce.width,ce.height);else{let se=ce.width,ie=ce.height;for(let Ne=0;Ne<Pe;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,Oe,se,ie,0,me,qe,null),se>>=1,ie>>=1}}else if(je.length>0){if(G&&le){let se=Nt(je[0]);t.texStorage2D(n.TEXTURE_2D,Pe,Oe,se.width,se.height)}for(let se=0,ie=je.length;se<ie;se++)xe=je[se],G?ge&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,me,qe,xe):t.texImage2D(n.TEXTURE_2D,se,Oe,me,qe,xe);v.generateMipmaps=!1}else if(G){if(le){let se=Nt(ce);t.texStorage2D(n.TEXTURE_2D,Pe,Oe,se.width,se.height)}ge&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,qe,ce)}else t.texImage2D(n.TEXTURE_2D,0,Oe,me,qe,ce);m(v)&&u(ee),Fe.__version=Q.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function $(E,v,Z){if(v.image.length!==6)return;let ee=ke(E,v),oe=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+Z);let Q=i.get(oe);if(oe.version!==Q.__version||ee===!0){t.activeTexture(n.TEXTURE0+Z);let Fe=At.getPrimaries(At.workingColorSpace),pe=v.colorSpace===Zn?null:At.getPrimaries(v.colorSpace),we=v.colorSpace===Zn||Fe===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ze=v.isCompressedTexture||v.image[0].isCompressedTexture,ce=v.image[0]&&v.image[0].isDataTexture,me=[];for(let ie=0;ie<6;ie++)!ze&&!ce?me[ie]=x(v.image[ie],!0,r.maxCubemapSize):me[ie]=ce?v.image[ie].image:v.image[ie],me[ie]=Wt(v,me[ie]);let qe=me[0],Oe=s.convert(v.format,v.colorSpace),xe=s.convert(v.type),je=w(v.internalFormat,Oe,xe,v.colorSpace),G=v.isVideoTexture!==!0,le=Q.__version===void 0||ee===!0,ge=oe.dataReady,Pe=R(v,qe);De(n.TEXTURE_CUBE_MAP,v);let se;if(ze){G&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,je,qe.width,qe.height);for(let ie=0;ie<6;ie++){se=me[ie].mipmaps;for(let Ne=0;Ne<se.length;Ne++){let Ye=se[Ne];v.format!==Nn?Oe!==null?G?ge&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne,0,0,Ye.width,Ye.height,Oe,Ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne,je,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne,0,0,Ye.width,Ye.height,Oe,xe,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne,je,Ye.width,Ye.height,0,Oe,xe,Ye.data)}}}else{if(se=v.mipmaps,G&&le){se.length>0&&Pe++;let ie=Nt(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,je,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ce){G?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,me[ie].width,me[ie].height,Oe,xe,me[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,je,me[ie].width,me[ie].height,0,Oe,xe,me[ie].data);for(let Ne=0;Ne<se.length;Ne++){let St=se[Ne].image[ie].image;G?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne+1,0,0,St.width,St.height,Oe,xe,St.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne+1,je,St.width,St.height,0,Oe,xe,St.data)}}else{G?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Oe,xe,me[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,je,Oe,xe,me[ie]);for(let Ne=0;Ne<se.length;Ne++){let Ye=se[Ne];G?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne+1,0,0,Oe,xe,Ye.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne+1,je,Oe,xe,Ye.image[ie])}}}m(v)&&u(n.TEXTURE_CUBE_MAP),Q.__version=oe.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function fe(E,v,Z,ee,oe,Q){let Fe=s.convert(Z.format,Z.colorSpace),pe=s.convert(Z.type),we=w(Z.internalFormat,Fe,pe,Z.colorSpace),ze=i.get(v),ce=i.get(Z);if(ce.__renderTarget=v,!ze.__hasExternalTextures){let me=Math.max(1,v.width>>Q),qe=Math.max(1,v.height>>Q);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,Q,we,me,qe,v.depth,0,Fe,pe,null):t.texImage2D(oe,Q,we,me,qe,0,Fe,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Ce(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,oe,ce.__webglTexture,0,Rt(v)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,oe,ce.__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(E,v,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,E),v.depthBuffer){let ee=v.depthTexture,oe=ee&&ee.isDepthTexture?ee.type:null,Q=y(v.stencilBuffer,oe),Fe=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=Rt(v);Ce(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,Q,v.width,v.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,Q,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Q,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Fe,n.RENDERBUFFER,E)}else{let ee=v.textures;for(let oe=0;oe<ee.length;oe++){let Q=ee[oe],Fe=s.convert(Q.format,Q.colorSpace),pe=s.convert(Q.type),we=w(Q.internalFormat,Fe,pe,Q.colorSpace),ze=Rt(v);Z&&Ce(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,we,v.width,v.height):Ce(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ze,we,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,we,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=i.get(v.depthTexture);ee.__renderTarget=v,(!ee.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),U(v.depthTexture,0);let oe=ee.__webglTexture,Q=Rt(v);if(v.depthTexture.format===Br)Ce(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0);else if(v.depthTexture.format===rs)Ce(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Ee(E){let v=i.get(E),Z=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let ee=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ee){let oe=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ee.removeEventListener("dispose",oe)};ee.addEventListener("dispose",oe),v.__depthDisposeCallback=oe}v.__boundDepthTexture=ee}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");let ee=E.texture.mipmaps;ee&&ee.length>0?Te(v.__webglFramebuffer[0],E):Te(v.__webglFramebuffer,E)}else if(Z){v.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ee]),v.__webglDepthbuffer[ee]===void 0)v.__webglDepthbuffer[ee]=n.createRenderbuffer(),Ue(v.__webglDepthbuffer[ee],E,!1);else{let oe=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,Q)}}else{let ee=E.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Ue(v.__webglDepthbuffer,E,!1);else{let oe=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,Q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ft(E,v,Z){let ee=i.get(E);v!==void 0&&fe(ee.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Ee(E)}function N(E){let v=E.texture,Z=i.get(E),ee=i.get(v);E.addEventListener("dispose",L);let oe=E.textures,Q=E.isWebGLCubeRenderTarget===!0,Fe=oe.length>1;if(Fe||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=v.version,a.memory.textures++),Q){Z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(v.mipmaps&&v.mipmaps.length>0){Z.__webglFramebuffer[pe]=[];for(let we=0;we<v.mipmaps.length;we++)Z.__webglFramebuffer[pe][we]=n.createFramebuffer()}else Z.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){Z.__webglFramebuffer=[];for(let pe=0;pe<v.mipmaps.length;pe++)Z.__webglFramebuffer[pe]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(Fe)for(let pe=0,we=oe.length;pe<we;pe++){let ze=i.get(oe[pe]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Ce(E)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let pe=0;pe<oe.length;pe++){let we=oe[pe];Z.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[pe]);let ze=s.convert(we.format,we.colorSpace),ce=s.convert(we.type),me=w(we.internalFormat,ze,ce,we.colorSpace,E.isXRRenderTarget===!0),qe=Rt(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,me,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,Z.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(Z.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),De(n.TEXTURE_CUBE_MAP,v);for(let pe=0;pe<6;pe++)if(v.mipmaps&&v.mipmaps.length>0)for(let we=0;we<v.mipmaps.length;we++)fe(Z.__webglFramebuffer[pe][we],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,we);else fe(Z.__webglFramebuffer[pe],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(v)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let pe=0,we=oe.length;pe<we;pe++){let ze=oe[pe],ce=i.get(ze),me=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(me=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,ce.__webglTexture),De(me,ze),fe(Z.__webglFramebuffer,E,ze,n.COLOR_ATTACHMENT0+pe,me,0),m(ze)&&u(me)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(pe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,ee.__webglTexture),De(pe,v),v.mipmaps&&v.mipmaps.length>0)for(let we=0;we<v.mipmaps.length;we++)fe(Z.__webglFramebuffer[we],E,v,n.COLOR_ATTACHMENT0,pe,we);else fe(Z.__webglFramebuffer,E,v,n.COLOR_ATTACHMENT0,pe,0);m(v)&&u(pe),t.unbindTexture()}E.depthBuffer&&Ee(E)}function Mt(E){let v=E.textures;for(let Z=0,ee=v.length;Z<ee;Z++){let oe=v[Z];if(m(oe)){let Q=_(E),Fe=i.get(oe).__webglTexture;t.bindTexture(Q,Fe),u(Q),t.unbindTexture()}}}let et=[],He=[];function Se(E){if(E.samples>0){if(Ce(E)===!1){let v=E.textures,Z=E.width,ee=E.height,oe=n.COLOR_BUFFER_BIT,Q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Fe=i.get(E),pe=v.length>1;if(pe)for(let ze=0;ze<v.length;ze++)t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);let we=E.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let ze=0;ze<v.length;ze++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Fe.__webglColorRenderbuffer[ze]);let ce=i.get(v[ze]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,Z,ee,0,0,Z,ee,oe,n.NEAREST),c===!0&&(et.length=0,He.length=0,et.push(n.COLOR_ATTACHMENT0+ze),E.depthBuffer&&E.resolveDepthBuffer===!1&&(et.push(Q),He.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,He)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let ze=0;ze<v.length;ze++){t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,Fe.__webglColorRenderbuffer[ze]);let ce=i.get(v[ze]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let v=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Rt(E){return Math.min(r.maxSamples,E.samples)}function Ce(E){let v=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Xe(E){let v=a.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function Wt(E,v){let Z=E.colorSpace,ee=E.format,oe=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||Z!==$i&&Z!==Zn&&(At.getTransfer(Z)===Ot?(ee!==Nn||oe!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),v}function Nt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=F,this.setTexture2D=U,this.setTexture2DArray=B,this.setTexture3D=q,this.setTextureCube=k,this.rebindTextures=ft,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Ce}function dx(n,e){function t(i,r=Zn){let s,a=At.getTransfer(r);if(i===qn)return n.UNSIGNED_BYTE;if(i===_o)return n.UNSIGNED_SHORT_4_4_4_4;if(i===yo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===uc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===lc)return n.BYTE;if(i===cc)return n.SHORT;if(i===ts)return n.UNSIGNED_SHORT;if(i===xo)return n.INT;if(i===Bi)return n.UNSIGNED_INT;if(i===Yn)return n.FLOAT;if(i===ns)return n.HALF_FLOAT;if(i===dc)return n.ALPHA;if(i===fc)return n.RGB;if(i===Nn)return n.RGBA;if(i===Br)return n.DEPTH_COMPONENT;if(i===rs)return n.DEPTH_STENCIL;if(i===vo)return n.RED;if(i===Mo)return n.RED_INTEGER;if(i===pc)return n.RG;if(i===bo)return n.RG_INTEGER;if(i===So)return n.RGBA_INTEGER;if(i===$s||i===Ks||i===js||i===Qs)if(a===Ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===$s)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===$s)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ks)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===js)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wo||i===To||i===Eo||i===Ao)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===wo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===To)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Eo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ao)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Co||i===Ro||i===Io)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Co||i===Ro)return a===Ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Io)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Po||i===Do||i===Lo||i===Uo||i===No||i===Fo||i===zo||i===Oo||i===Bo||i===ko||i===Vo||i===Go||i===Ho||i===Wo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Po)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Do)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Lo)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Uo)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===No)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fo)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zo)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oo)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bo)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ko)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vo)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Go)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ho)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wo)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xo||i===qo||i===Yo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Xo)return a===Ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zo||i===Jo||i===$o||i===Ko)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Zo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Jo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$o)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ko)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===is?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var fx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,px=`
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

}`,Fc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Gs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Mn({vertexShader:fx,fragmentShader:px,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new Cn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zc=class extends gi{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,p=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new Fc,u={},_=t.getContextAttributes(),w=null,y=null,R=[],A=[],L=new Ve,z=null,S=new $t;S.viewport=new Ct;let M=new $t;M.viewport=new Ct;let T=[S,M],F=new so,D=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let $=R[Y];return $===void 0&&($=new qr,R[Y]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Y){let $=R[Y];return $===void 0&&($=new qr,R[Y]=$),$.getGripSpace()},this.getHand=function(Y){let $=R[Y];return $===void 0&&($=new qr,R[Y]=$),$.getHandSpace()};function U(Y){let $=A.indexOf(Y.inputSource);if($===-1)return;let fe=R[$];fe!==void 0&&(fe.update(Y.inputSource,Y.frame,l||a),fe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",q);for(let Y=0;Y<R.length;Y++){let $=A[Y];$!==null&&(A[Y]=null,R[Y].disconnect($))}D=null,C=null,m.reset();for(let Y in u)delete u[Y];e.setRenderTarget(w),f=null,p=null,d=null,r=null,y=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(z),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",B),r.addEventListener("inputsourceschange",q),_.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ue=null,Te=null;_.depth&&(Te=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=_.stencil?rs:Br,Ue=_.stencil?is:Bi);let Ee={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};d=this.getBinding(),p=d.createProjectionLayer(Ee),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new Qn(p.textureWidth,p.textureHeight,{format:Nn,type:qn,depthTexture:new Vs(p.textureWidth,p.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let fe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Qn(f.framebufferWidth,f.framebufferHeight,{format:Nn,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),tt.setContext(r),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(Y){for(let $=0;$<Y.removed.length;$++){let fe=Y.removed[$],Ue=A.indexOf(fe);Ue>=0&&(A[Ue]=null,R[Ue].disconnect(fe))}for(let $=0;$<Y.added.length;$++){let fe=Y.added[$],Ue=A.indexOf(fe);if(Ue===-1){for(let Ee=0;Ee<R.length;Ee++)if(Ee>=A.length){A.push(fe),Ue=Ee;break}else if(A[Ee]===null){A[Ee]=fe,Ue=Ee;break}if(Ue===-1)break}let Te=R[Ue];Te&&Te.connect(fe)}}let k=new O,re=new O;function ne(Y,$,fe){k.setFromMatrixPosition($.matrixWorld),re.setFromMatrixPosition(fe.matrixWorld);let Ue=k.distanceTo(re),Te=$.projectionMatrix.elements,Ee=fe.projectionMatrix.elements,ft=Te[14]/(Te[10]-1),N=Te[14]/(Te[10]+1),Mt=(Te[9]+1)/Te[5],et=(Te[9]-1)/Te[5],He=(Te[8]-1)/Te[0],Se=(Ee[8]+1)/Ee[0],Rt=ft*He,Ce=ft*Se,Xe=Ue/(-He+Se),Wt=Xe*-He;if($.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Wt),Y.translateZ(Xe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Te[10]===-1)Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let Nt=ft+Xe,E=N+Xe,v=Rt-Wt,Z=Ce+(Ue-Wt),ee=Mt*N/E*Nt,oe=et*N/E*Nt;Y.projectionMatrix.makePerspective(v,Z,ee,oe,Nt,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ye(Y,$){$===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices($.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let $=Y.near,fe=Y.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),F.near=M.near=S.near=$,F.far=M.far=S.far=fe,(D!==F.near||C!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),D=F.near,C=F.far),F.layers.mask=Y.layers.mask|6,S.layers.mask=F.layers.mask&3,M.layers.mask=F.layers.mask&5;let Ue=Y.parent,Te=F.cameras;ye(F,Ue);for(let Ee=0;Ee<Te.length;Ee++)ye(Te[Ee],Ue);Te.length===2?ne(F,S,M):F.projectionMatrix.copy(S.projectionMatrix),De(Y,F,Ue)};function De(Y,$,fe){fe===null?Y.matrix.copy($.matrixWorld):(Y.matrix.copy(fe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply($.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=kr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(Y){c=Y,p!==null&&(p.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Y){return u[Y]};let ke=null;function nt(Y,$){if(h=$.getViewerPose(l||a),g=$,h!==null){let fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ue=!1;fe.length!==F.cameras.length&&(F.cameras.length=0,Ue=!0);for(let N=0;N<fe.length;N++){let Mt=fe[N],et=null;if(f!==null)et=f.getViewport(Mt);else{let Se=d.getViewSubImage(p,Mt);et=Se.viewport,N===0&&(e.setRenderTargetTextures(y,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(y))}let He=T[N];He===void 0&&(He=new $t,He.layers.enable(N),He.viewport=new Ct,T[N]=He),He.matrix.fromArray(Mt.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Mt.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(et.x,et.y,et.width,et.height),N===0&&(F.matrix.copy(He.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ue===!0&&F.cameras.push(He)}let Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let N=d.getDepthInformation(fe[0]);N&&N.isValid&&N.texture&&m.init(N,r.renderState)}if(Te&&Te.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let N=0;N<fe.length;N++){let Mt=fe[N].camera;if(Mt){let et=u[Mt];et||(et=new Gs,u[Mt]=et);let He=d.getCameraImage(Mt);et.sourceTexture=He}}}}for(let fe=0;fe<R.length;fe++){let Ue=A[fe],Te=R[fe];Ue!==null&&Te!==void 0&&Te.update(Ue,$,l||a)}ke&&ke(Y,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}let tt=new ku;tt.setAnimationLoop(nt),this.setAnimationLoop=function(Y){ke=Y},this.dispose=function(){}}},ur=new Wn,mx=new Lt;function gx(n,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,vc(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,_,w,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),p(m,u),u.isMeshPhysicalMaterial&&f(m,u,y)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?c(m,u,_,w):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===on&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===on&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let _=e.get(u),w=_.envMap,y=_.envMapRotation;w&&(m.envMap.value=w,ur.copy(y),ur.x*=-1,ur.y*=-1,ur.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),m.envMapRotation.value.setFromMatrix4(mx.makeRotationFromEuler(ur)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,_,w){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=w*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===on&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let _=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function xx(n,e,t,i){let r={},s={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,w){let y=w.program;i.uniformBlockBinding(_,y)}function l(_,w){let y=r[_.id];y===void 0&&(g(_),y=h(_),r[_.id]=y,_.addEventListener("dispose",m));let R=w.program;i.updateUBOMapping(_,R);let A=e.render.frame;s[_.id]!==A&&(p(_),s[_.id]=A)}function h(_){let w=d();_.__bindingPointIndex=w;let y=n.createBuffer(),R=_.__size,A=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,R,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,y),y}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){let w=r[_.id],y=_.uniforms,R=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let A=0,L=y.length;A<L;A++){let z=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,M=z.length;S<M;S++){let T=z[S];if(f(T,A,S,R)===!0){let F=T.__offset,D=Array.isArray(T.value)?T.value:[T.value],C=0;for(let U=0;U<D.length;U++){let B=D[U],q=x(B);typeof B=="number"||typeof B=="boolean"?(T.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,F+C,T.__data)):B.isMatrix3?(T.__data[0]=B.elements[0],T.__data[1]=B.elements[1],T.__data[2]=B.elements[2],T.__data[3]=0,T.__data[4]=B.elements[3],T.__data[5]=B.elements[4],T.__data[6]=B.elements[5],T.__data[7]=0,T.__data[8]=B.elements[6],T.__data[9]=B.elements[7],T.__data[10]=B.elements[8],T.__data[11]=0):(B.toArray(T.__data,C),C+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,w,y,R){let A=_.value,L=w+"_"+y;if(R[L]===void 0)return typeof A=="number"||typeof A=="boolean"?R[L]=A:R[L]=A.clone(),!0;{let z=R[L];if(typeof A=="number"||typeof A=="boolean"){if(z!==A)return R[L]=A,!0}else if(z.equals(A)===!1)return z.copy(A),!0}return!1}function g(_){let w=_.uniforms,y=0,R=16;for(let L=0,z=w.length;L<z;L++){let S=Array.isArray(w[L])?w[L]:[w[L]];for(let M=0,T=S.length;M<T;M++){let F=S[M],D=Array.isArray(F.value)?F.value:[F.value];for(let C=0,U=D.length;C<U;C++){let B=D[C],q=x(B),k=y%R,re=k%q.boundary,ne=k+re;y+=re,ne!==0&&R-ne<q.storage&&(y+=R-ne),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=q.storage}}}let A=y%R;return A>0&&(y+=R-A),_.__size=y,_.__cache={},this}function x(_){let w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),w}function m(_){let w=_.target;w.removeEventListener("dispose",m);let y=a.indexOf(w.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function u(){for(let _ in r)n.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:c,update:l,dispose:u}}var ls=class{constructor(e={}){let{canvas:t=du(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,u=null,_=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,R=!1;this._outputColorSpace=Yt;let A=0,L=0,z=null,S=-1,M=null,T=new Ct,F=new Ct,D=null,C=new Qe(0),U=0,B=t.width,q=t.height,k=1,re=null,ne=null,ye=new Ct(0,0,B,q),De=new Ct(0,0,B,q),ke=!1,nt=new $r,tt=!1,Y=!1,$=new Lt,fe=new O,Ue=new Ct,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ee=!1;function ft(){return z===null?k:1}let N=i;function Mt(b,H){return t.getContext(b,H)}try{let b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",se,!1),N===null){let H="webgl2";if(N=Mt(H,b),N===null)throw Mt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let et,He,Se,Rt,Ce,Xe,Wt,Nt,E,v,Z,ee,oe,Q,Fe,pe,we,ze,ce,me,qe,Oe,xe,je;function G(){et=new Ng(N),et.init(),Oe=new dx(N,et),He=new Cg(N,et,e,Oe),Se=new hx(N,et),He.reversedDepthBuffer&&p&&Se.buffers.depth.setReversed(!0),Rt=new Og(N),Ce=new K0,Xe=new ux(N,et,Se,Ce,He,Oe,Rt),Wt=new Ig(y),Nt=new Ug(y),E=new Wf(N),xe=new Eg(N,E),v=new Fg(N,E,Rt,xe),Z=new kg(N,v,E,Rt),ce=new Bg(N,He,Xe),pe=new Rg(Ce),ee=new $0(y,Wt,Nt,et,He,xe,pe),oe=new gx(y,Ce),Q=new Q0,Fe=new sx(et),ze=new Tg(y,Wt,Nt,Se,Z,f,c),we=new lx(y,Z,He),je=new xx(N,Rt,He,Se),me=new Ag(N,et,Rt),qe=new zg(N,et,Rt),Rt.programs=ee.programs,y.capabilities=He,y.extensions=et,y.properties=Ce,y.renderLists=Q,y.shadowMap=we,y.state=Se,y.info=Rt}G();let le=new zc(y,N);this.xr=le,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let b=et.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=et.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(b){b!==void 0&&(k=b,this.setSize(B,q,!1))},this.getSize=function(b){return b.set(B,q)},this.setSize=function(b,H,j=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=b,q=H,t.width=Math.floor(b*k),t.height=Math.floor(H*k),j===!0&&(t.style.width=b+"px",t.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(B*k,q*k).floor()},this.setDrawingBufferSize=function(b,H,j){B=b,q=H,k=j,t.width=Math.floor(b*j),t.height=Math.floor(H*j),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(ye)},this.setViewport=function(b,H,j,J){b.isVector4?ye.set(b.x,b.y,b.z,b.w):ye.set(b,H,j,J),Se.viewport(T.copy(ye).multiplyScalar(k).round())},this.getScissor=function(b){return b.copy(De)},this.setScissor=function(b,H,j,J){b.isVector4?De.set(b.x,b.y,b.z,b.w):De.set(b,H,j,J),Se.scissor(F.copy(De).multiplyScalar(k).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(b){Se.setScissorTest(ke=b)},this.setOpaqueSort=function(b){re=b},this.setTransparentSort=function(b){ne=b},this.getClearColor=function(b){return b.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(b=!0,H=!0,j=!0){let J=0;if(b){let X=!1;if(z!==null){let he=z.texture.format;X=he===So||he===bo||he===Mo}if(X){let he=z.texture.type,ve=he===qn||he===Bi||he===ts||he===is||he===_o||he===yo,Re=ze.getClearColor(),Ie=ze.getClearAlpha(),$e=Re.r,Ke=Re.g,Ge=Re.b;ve?(g[0]=$e,g[1]=Ke,g[2]=Ge,g[3]=Ie,N.clearBufferuiv(N.COLOR,0,g)):(x[0]=$e,x[1]=Ke,x[2]=Ge,x[3]=Ie,N.clearBufferiv(N.COLOR,0,x))}else J|=N.COLOR_BUFFER_BIT}H&&(J|=N.DEPTH_BUFFER_BIT),j&&(J|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ze.dispose(),Q.dispose(),Fe.dispose(),Ce.dispose(),Wt.dispose(),Nt.dispose(),Z.dispose(),xe.dispose(),je.dispose(),ee.dispose(),le.dispose(),le.removeEventListener("sessionstart",xn),le.removeEventListener("sessionend",_n),Fn.stop()};function ge(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let b=Rt.autoReset,H=we.enabled,j=we.autoUpdate,J=we.needsUpdate,X=we.type;G(),Rt.autoReset=b,we.enabled=H,we.autoUpdate=j,we.needsUpdate=J,we.type=X}function se(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ie(b){let H=b.target;H.removeEventListener("dispose",ie),Ne(H)}function Ne(b){Ye(b),Ce.remove(b)}function Ye(b){let H=Ce.get(b).programs;H!==void 0&&(H.forEach(function(j){ee.releaseProgram(j)}),b.isShaderMaterial&&ee.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,j,J,X,he){H===null&&(H=Te);let ve=X.isMesh&&X.matrixWorld.determinant()<0,Re=mn(b,H,j,J,X);Se.setMaterial(J,ve);let Ie=j.index,$e=1;if(J.wireframe===!0){if(Ie=v.getWireframeAttribute(j),Ie===void 0)return;$e=2}let Ke=j.drawRange,Ge=j.attributes.position,ht=Ke.start*$e,wt=(Ke.start+Ke.count)*$e;he!==null&&(ht=Math.max(ht,he.start*$e),wt=Math.min(wt,(he.start+he.count)*$e)),Ie!==null?(ht=Math.max(ht,0),wt=Math.min(wt,Ie.count)):Ge!=null&&(ht=Math.max(ht,0),wt=Math.min(wt,Ge.count));let Tt=wt-ht;if(Tt<0||Tt===1/0)return;xe.setup(X,J,Re,j,Ie);let Et,pt=me;if(Ie!==null&&(Et=E.get(Ie),pt=qe,pt.setIndex(Et)),X.isMesh)J.wireframe===!0?(Se.setLineWidth(J.wireframeLinewidth*ft()),pt.setMode(N.LINES)):pt.setMode(N.TRIANGLES);else if(X.isLine){let We=J.linewidth;We===void 0&&(We=1),Se.setLineWidth(We*ft()),X.isLineSegments?pt.setMode(N.LINES):X.isLineLoop?pt.setMode(N.LINE_LOOP):pt.setMode(N.LINE_STRIP)}else X.isPoints?pt.setMode(N.POINTS):X.isSprite&&pt.setMode(N.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Gr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))pt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let We=X._multiDrawStarts,kt=X._multiDrawCounts,at=X._multiDrawCount,P=Ie?E.get(Ie).bytesPerElement:1,V=Ce.get(J).currentProgram.getUniforms();for(let te=0;te<at;te++)V.setValue(N,"_gl_DrawID",te),pt.render(We[te]/P,kt[te])}else if(X.isInstancedMesh)pt.renderInstances(ht,Tt,X.count);else if(j.isInstancedBufferGeometry){let We=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,kt=Math.min(j.instanceCount,We);pt.renderInstances(ht,Tt,kt)}else pt.render(ht,Tt)};function St(b,H,j){b.transparent===!0&&b.side===qt&&b.forceSinglePass===!1?(b.side=on,b.needsUpdate=!0,pn(b,H,j),b.side=mi,b.needsUpdate=!0,pn(b,H,j),b.side=qt):pn(b,H,j)}this.compile=function(b,H,j=null){j===null&&(j=b),u=Fe.get(j),u.init(H),w.push(u),j.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(u.pushLight(X),X.castShadow&&u.pushShadow(X))}),b!==j&&b.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(u.pushLight(X),X.castShadow&&u.pushShadow(X))}),u.setupLights();let J=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let he=X.material;if(he)if(Array.isArray(he))for(let ve=0;ve<he.length;ve++){let Re=he[ve];St(Re,j,X),J.add(Re)}else St(he,j,X),J.add(he)}),u=w.pop(),J},this.compileAsync=function(b,H,j=null){let J=this.compile(b,H,j);return new Promise(X=>{function he(){if(J.forEach(function(ve){Ce.get(ve).currentProgram.isReady()&&J.delete(ve)}),J.size===0){X(b);return}setTimeout(he,10)}et.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let xt=null;function ln(b){xt&&xt(b)}function xn(){Fn.stop()}function _n(){Fn.start()}let Fn=new ku;Fn.setAnimationLoop(ln),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(b){xt=b,le.setAnimationLoop(b),b===null?Fn.stop():Fn.start()},le.addEventListener("sessionstart",xn),le.addEventListener("sessionend",_n),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(H),H=le.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,H,z),u=Fe.get(b,w.length),u.init(H),w.push(u),$.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),nt.setFromProjectionMatrix($,Gn,H.reversedDepth),Y=this.localClippingEnabled,tt=pe.init(this.clippingPlanes,Y),m=Q.get(b,_.length),m.init(),_.push(m),le.enabled===!0&&le.isPresenting===!0){let he=y.xr.getDepthSensingMesh();he!==null&&Vi(he,H,-1/0,y.sortObjects)}Vi(b,H,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(re,ne),Ee=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Ee&&ze.addToRenderList(m,b),this.info.render.frame++,tt===!0&&pe.beginShadows();let j=u.state.shadowsArray;we.render(j,b,H),tt===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=m.opaque,X=m.transmissive;if(u.setupLights(),H.isArrayCamera){let he=H.cameras;if(X.length>0)for(let ve=0,Re=he.length;ve<Re;ve++){let Ie=he[ve];Dn(J,X,b,Ie)}Ee&&ze.render(b);for(let ve=0,Re=he.length;ve<Re;ve++){let Ie=he[ve];$n(m,b,Ie,Ie.viewport)}}else X.length>0&&Dn(J,X,b,H),Ee&&ze.render(b),$n(m,b,H);z!==null&&L===0&&(Xe.updateMultisampleRenderTarget(z),Xe.updateRenderTargetMipmap(z)),b.isScene===!0&&b.onAfterRender(y,b,H),xe.resetDefaultState(),S=-1,M=null,w.pop(),w.length>0?(u=w[w.length-1],tt===!0&&pe.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Vi(b,H,j,J){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||nt.intersectsSprite(b)){J&&Ue.setFromMatrixPosition(b.matrixWorld).applyMatrix4($);let ve=Z.update(b),Re=b.material;Re.visible&&m.push(b,ve,Re,j,Ue.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||nt.intersectsObject(b))){let ve=Z.update(b),Re=b.material;if(J&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ue.copy(b.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ue.copy(ve.boundingSphere.center)),Ue.applyMatrix4(b.matrixWorld).applyMatrix4($)),Array.isArray(Re)){let Ie=ve.groups;for(let $e=0,Ke=Ie.length;$e<Ke;$e++){let Ge=Ie[$e],ht=Re[Ge.materialIndex];ht&&ht.visible&&m.push(b,ve,ht,j,Ue.z,Ge)}}else Re.visible&&m.push(b,ve,Re,j,Ue.z,null)}}let he=b.children;for(let ve=0,Re=he.length;ve<Re;ve++)Vi(he[ve],H,j,J)}function $n(b,H,j,J){let X=b.opaque,he=b.transmissive,ve=b.transparent;u.setupLightsView(j),tt===!0&&pe.setGlobalState(y.clippingPlanes,j),J&&Se.viewport(T.copy(J)),X.length>0&&Kn(X,H,j),he.length>0&&Kn(he,H,j),ve.length>0&&Kn(ve,H,j),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Dn(b,H,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[J.id]===void 0&&(u.state.transmissionRenderTarget[J.id]=new Qn(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?ns:qn,minFilter:Oi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));let he=u.state.transmissionRenderTarget[J.id],ve=J.viewport||T;he.setSize(ve.z*y.transmissionResolutionScale,ve.w*y.transmissionResolutionScale);let Re=y.getRenderTarget(),Ie=y.getActiveCubeFace(),$e=y.getActiveMipmapLevel();y.setRenderTarget(he),y.getClearColor(C),U=y.getClearAlpha(),U<1&&y.setClearColor(16777215,.5),y.clear(),Ee&&ze.render(j);let Ke=y.toneMapping;y.toneMapping=Mi;let Ge=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),u.setupLightsView(J),tt===!0&&pe.setGlobalState(y.clippingPlanes,J),Kn(b,j,J),Xe.updateMultisampleRenderTarget(he),Xe.updateRenderTargetMipmap(he),et.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let wt=0,Tt=H.length;wt<Tt;wt++){let Et=H[wt],pt=Et.object,We=Et.geometry,kt=Et.material,at=Et.group;if(kt.side===qt&&pt.layers.test(J.layers)){let P=kt.side;kt.side=on,kt.needsUpdate=!0,bi(pt,j,J,We,kt,at),kt.side=P,kt.needsUpdate=!0,ht=!0}}ht===!0&&(Xe.updateMultisampleRenderTarget(he),Xe.updateRenderTargetMipmap(he))}y.setRenderTarget(Re,Ie,$e),y.setClearColor(C,U),Ge!==void 0&&(J.viewport=Ge),y.toneMapping=Ke}function Kn(b,H,j){let J=H.isScene===!0?H.overrideMaterial:null;for(let X=0,he=b.length;X<he;X++){let ve=b[X],Re=ve.object,Ie=ve.geometry,$e=ve.group,Ke=ve.material;Ke.allowOverride===!0&&J!==null&&(Ke=J),Re.layers.test(j.layers)&&bi(Re,H,j,Ie,Ke,$e)}}function bi(b,H,j,J,X,he){b.onBeforeRender(y,H,j,J,X,he),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(y,H,j,J,b,he),X.transparent===!0&&X.side===qt&&X.forceSinglePass===!1?(X.side=on,X.needsUpdate=!0,y.renderBufferDirect(j,H,J,X,b,he),X.side=mi,X.needsUpdate=!0,y.renderBufferDirect(j,H,J,X,b,he),X.side=qt):y.renderBufferDirect(j,H,J,X,b,he),b.onAfterRender(y,H,j,J,X,he)}function pn(b,H,j){H.isScene!==!0&&(H=Te);let J=Ce.get(b),X=u.state.lights,he=u.state.shadowsArray,ve=X.state.version,Re=ee.getParameters(b,X.state,he,H,j),Ie=ee.getProgramCacheKey(Re),$e=J.programs;J.environment=b.isMeshStandardMaterial?H.environment:null,J.fog=H.fog,J.envMap=(b.isMeshStandardMaterial?Nt:Wt).get(b.envMap||J.environment),J.envMapRotation=J.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,$e===void 0&&(b.addEventListener("dispose",ie),$e=new Map,J.programs=$e);let Ke=$e.get(Ie);if(Ke!==void 0){if(J.currentProgram===Ke&&J.lightsStateVersion===ve)return Si(b,Re),Ke}else Re.uniforms=ee.getUniforms(b),b.onBeforeCompile(Re,y),Ke=ee.acquireProgram(Re,Ie),$e.set(Ie,Ke),J.uniforms=Re.uniforms;let Ge=J.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ge.clippingPlanes=pe.uniform),Si(b,Re),J.needsLights=Gi(b),J.lightsStateVersion=ve,J.needsLights&&(Ge.ambientLightColor.value=X.state.ambient,Ge.lightProbe.value=X.state.probe,Ge.directionalLights.value=X.state.directional,Ge.directionalLightShadows.value=X.state.directionalShadow,Ge.spotLights.value=X.state.spot,Ge.spotLightShadows.value=X.state.spotShadow,Ge.rectAreaLights.value=X.state.rectArea,Ge.ltc_1.value=X.state.rectAreaLTC1,Ge.ltc_2.value=X.state.rectAreaLTC2,Ge.pointLights.value=X.state.point,Ge.pointLightShadows.value=X.state.pointShadow,Ge.hemisphereLights.value=X.state.hemi,Ge.directionalShadowMap.value=X.state.directionalShadowMap,Ge.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ge.spotShadowMap.value=X.state.spotShadowMap,Ge.spotLightMatrix.value=X.state.spotLightMatrix,Ge.spotLightMap.value=X.state.spotLightMap,Ge.pointShadowMap.value=X.state.pointShadowMap,Ge.pointShadowMatrix.value=X.state.pointShadowMatrix),J.currentProgram=Ke,J.uniformsList=null,Ke}function _r(b){if(b.uniformsList===null){let H=b.currentProgram.getUniforms();b.uniformsList=os.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function Si(b,H){let j=Ce.get(b);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function mn(b,H,j,J,X){H.isScene!==!0&&(H=Te),Xe.resetTextureUnits();let he=H.fog,ve=J.isMeshStandardMaterial?H.environment:null,Re=z===null?y.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:$i,Ie=(J.isMeshStandardMaterial?Nt:Wt).get(J.envMap||ve),$e=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ke=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ge=!!j.morphAttributes.position,ht=!!j.morphAttributes.normal,wt=!!j.morphAttributes.color,Tt=Mi;J.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Tt=y.toneMapping);let Et=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,pt=Et!==void 0?Et.length:0,We=Ce.get(J),kt=u.state.lights;if(tt===!0&&(Y===!0||b!==M)){let mt=b===M&&J.id===S;pe.setState(J,b,mt)}let at=!1;J.version===We.__version?(We.needsLights&&We.lightsStateVersion!==kt.state.version||We.outputColorSpace!==Re||X.isBatchedMesh&&We.batching===!1||!X.isBatchedMesh&&We.batching===!0||X.isBatchedMesh&&We.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&We.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&We.instancing===!1||!X.isInstancedMesh&&We.instancing===!0||X.isSkinnedMesh&&We.skinning===!1||!X.isSkinnedMesh&&We.skinning===!0||X.isInstancedMesh&&We.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&We.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&We.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&We.instancingMorph===!1&&X.morphTexture!==null||We.envMap!==Ie||J.fog===!0&&We.fog!==he||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==pe.numPlanes||We.numIntersection!==pe.numIntersection)||We.vertexAlphas!==$e||We.vertexTangents!==Ke||We.morphTargets!==Ge||We.morphNormals!==ht||We.morphColors!==wt||We.toneMapping!==Tt||We.morphTargetsCount!==pt)&&(at=!0):(at=!0,We.__version=J.version);let P=We.currentProgram;at===!0&&(P=pn(J,H,X));let V=!1,te=!1,ue=!1,Le=P.getUniforms(),Je=We.uniforms;if(Se.useProgram(P.program)&&(V=!0,te=!0,ue=!0),J.id!==S&&(S=J.id,te=!0),V||M!==b){Se.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Le.setValue(N,"projectionMatrix",b.projectionMatrix),Le.setValue(N,"viewMatrix",b.matrixWorldInverse);let yt=Le.map.cameraPosition;yt!==void 0&&yt.setValue(N,fe.setFromMatrixPosition(b.matrixWorld)),He.logarithmicDepthBuffer&&Le.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Le.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,te=!0,ue=!0)}if(X.isSkinnedMesh){Le.setOptional(N,X,"bindMatrix"),Le.setOptional(N,X,"bindMatrixInverse");let mt=X.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),Le.setValue(N,"boneTexture",mt.boneTexture,Xe))}X.isBatchedMesh&&(Le.setOptional(N,X,"batchingTexture"),Le.setValue(N,"batchingTexture",X._matricesTexture,Xe),Le.setOptional(N,X,"batchingIdTexture"),Le.setValue(N,"batchingIdTexture",X._indirectTexture,Xe),Le.setOptional(N,X,"batchingColorTexture"),X._colorsTexture!==null&&Le.setValue(N,"batchingColorTexture",X._colorsTexture,Xe));let ct=j.morphAttributes;if((ct.position!==void 0||ct.normal!==void 0||ct.color!==void 0)&&ce.update(X,j,P),(te||We.receiveShadow!==X.receiveShadow)&&(We.receiveShadow=X.receiveShadow,Le.setValue(N,"receiveShadow",X.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Je.envMap.value=Ie,Je.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&H.environment!==null&&(Je.envMapIntensity.value=H.environmentIntensity),te&&(Le.setValue(N,"toneMappingExposure",y.toneMappingExposure),We.needsLights&&wi(Je,ue),he&&J.fog===!0&&oe.refreshFogUniforms(Je,he),oe.refreshMaterialUniforms(Je,J,k,q,u.state.transmissionRenderTarget[b.id]),os.upload(N,_r(We),Je,Xe)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(os.upload(N,_r(We),Je,Xe),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Le.setValue(N,"center",X.center),Le.setValue(N,"modelViewMatrix",X.modelViewMatrix),Le.setValue(N,"normalMatrix",X.normalMatrix),Le.setValue(N,"modelMatrix",X.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let mt=J.uniformsGroups;for(let yt=0,ut=mt.length;yt<ut;yt++){let It=mt[yt];je.update(It,P),je.bind(It,P)}}return P}function wi(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function Gi(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(b,H,j){let J=Ce.get(b);J.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Ce.get(b.texture).__webglTexture=H,Ce.get(b.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:j,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,H){let j=Ce.get(b);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0};let wn=N.createFramebuffer();this.setRenderTarget=function(b,H=0,j=0){z=b,A=H,L=j;let J=!0,X=null,he=!1,ve=!1;if(b){let Ie=Ce.get(b);if(Ie.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(N.FRAMEBUFFER,null),J=!1;else if(Ie.__webglFramebuffer===void 0)Xe.setupRenderTarget(b);else if(Ie.__hasExternalTextures)Xe.rebindTextures(b,Ce.get(b.texture).__webglTexture,Ce.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ge=b.depthTexture;if(Ie.__boundDepthTexture!==Ge){if(Ge!==null&&Ce.has(Ge)&&(b.width!==Ge.image.width||b.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(b)}}let $e=b.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(ve=!0);let Ke=Ce.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ke[H])?X=Ke[H][j]:X=Ke[H],he=!0):b.samples>0&&Xe.useMultisampledRTT(b)===!1?X=Ce.get(b).__webglMultisampledFramebuffer:Array.isArray(Ke)?X=Ke[j]:X=Ke,T.copy(b.viewport),F.copy(b.scissor),D=b.scissorTest}else T.copy(ye).multiplyScalar(k).floor(),F.copy(De).multiplyScalar(k).floor(),D=ke;if(j!==0&&(X=wn),Se.bindFramebuffer(N.FRAMEBUFFER,X)&&J&&Se.drawBuffers(b,X),Se.viewport(T),Se.scissor(F),Se.setScissorTest(D),he){let Ie=Ce.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ie.__webglTexture,j)}else if(ve){let Ie=H;for(let $e=0;$e<b.textures.length;$e++){let Ke=Ce.get(b.textures[$e]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+$e,Ke.__webglTexture,j,Ie)}}else if(b!==null&&j!==0){let Ie=Ce.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ie.__webglTexture,j)}S=-1},this.readRenderTargetPixels=function(b,H,j,J,X,he,ve,Re=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ve!==void 0&&(Ie=Ie[ve]),Ie){Se.bindFramebuffer(N.FRAMEBUFFER,Ie);try{let $e=b.textures[Re],Ke=$e.format,Ge=$e.type;if(!He.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-J&&j>=0&&j<=b.height-X&&(b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Re),N.readPixels(H,j,J,X,Oe.convert(Ke),Oe.convert(Ge),he))}finally{let $e=z!==null?Ce.get(z).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(b,H,j,J,X,he,ve,Re=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ve!==void 0&&(Ie=Ie[ve]),Ie)if(H>=0&&H<=b.width-J&&j>=0&&j<=b.height-X){Se.bindFramebuffer(N.FRAMEBUFFER,Ie);let $e=b.textures[Re],Ke=$e.format,Ge=$e.type;if(!He.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ht),N.bufferData(N.PIXEL_PACK_BUFFER,he.byteLength,N.STREAM_READ),b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Re),N.readPixels(H,j,J,X,Oe.convert(Ke),Oe.convert(Ge),0);let wt=z!==null?Ce.get(z).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,wt);let Tt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await fu(N,Tt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ht),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,he),N.deleteBuffer(ht),N.deleteSync(Tt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,H=null,j=0){let J=Math.pow(2,-j),X=Math.floor(b.image.width*J),he=Math.floor(b.image.height*J),ve=H!==null?H.x:0,Re=H!==null?H.y:0;Xe.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,j,0,0,ve,Re,X,he),Se.unbindTexture()};let si=N.createFramebuffer(),nn=N.createFramebuffer();this.copyTextureToTexture=function(b,H,j=null,J=null,X=0,he=null){he===null&&(X!==0?(Gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=X,X=0):he=0);let ve,Re,Ie,$e,Ke,Ge,ht,wt,Tt,Et=b.isCompressedTexture?b.mipmaps[he]:b.image;if(j!==null)ve=j.max.x-j.min.x,Re=j.max.y-j.min.y,Ie=j.isBox3?j.max.z-j.min.z:1,$e=j.min.x,Ke=j.min.y,Ge=j.isBox3?j.min.z:0;else{let ct=Math.pow(2,-X);ve=Math.floor(Et.width*ct),Re=Math.floor(Et.height*ct),b.isDataArrayTexture?Ie=Et.depth:b.isData3DTexture?Ie=Math.floor(Et.depth*ct):Ie=1,$e=0,Ke=0,Ge=0}J!==null?(ht=J.x,wt=J.y,Tt=J.z):(ht=0,wt=0,Tt=0);let pt=Oe.convert(H.format),We=Oe.convert(H.type),kt;H.isData3DTexture?(Xe.setTexture3D(H,0),kt=N.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Xe.setTexture2DArray(H,0),kt=N.TEXTURE_2D_ARRAY):(Xe.setTexture2D(H,0),kt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);let at=N.getParameter(N.UNPACK_ROW_LENGTH),P=N.getParameter(N.UNPACK_IMAGE_HEIGHT),V=N.getParameter(N.UNPACK_SKIP_PIXELS),te=N.getParameter(N.UNPACK_SKIP_ROWS),ue=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Et.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Et.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,$e),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ke),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ge);let Le=b.isDataArrayTexture||b.isData3DTexture,Je=H.isDataArrayTexture||H.isData3DTexture;if(b.isDepthTexture){let ct=Ce.get(b),mt=Ce.get(H),yt=Ce.get(ct.__renderTarget),ut=Ce.get(mt.__renderTarget);Se.bindFramebuffer(N.READ_FRAMEBUFFER,yt.__webglFramebuffer),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let It=0;It<Ie;It++)Le&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ce.get(b).__webglTexture,X,Ge+It),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ce.get(H).__webglTexture,he,Tt+It)),N.blitFramebuffer($e,Ke,ve,Re,ht,wt,ve,Re,N.DEPTH_BUFFER_BIT,N.NEAREST);Se.bindFramebuffer(N.READ_FRAMEBUFFER,null),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||Ce.has(b)){let ct=Ce.get(b),mt=Ce.get(H);Se.bindFramebuffer(N.READ_FRAMEBUFFER,si),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,nn);for(let yt=0;yt<Ie;yt++)Le?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ct.__webglTexture,X,Ge+yt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ct.__webglTexture,X),Je?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,mt.__webglTexture,he,Tt+yt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,mt.__webglTexture,he),X!==0?N.blitFramebuffer($e,Ke,ve,Re,ht,wt,ve,Re,N.COLOR_BUFFER_BIT,N.NEAREST):Je?N.copyTexSubImage3D(kt,he,ht,wt,Tt+yt,$e,Ke,ve,Re):N.copyTexSubImage2D(kt,he,ht,wt,$e,Ke,ve,Re);Se.bindFramebuffer(N.READ_FRAMEBUFFER,null),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Je?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(kt,he,ht,wt,Tt,ve,Re,Ie,pt,We,Et.data):H.isCompressedArrayTexture?N.compressedTexSubImage3D(kt,he,ht,wt,Tt,ve,Re,Ie,pt,Et.data):N.texSubImage3D(kt,he,ht,wt,Tt,ve,Re,Ie,pt,We,Et):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,he,ht,wt,ve,Re,pt,We,Et.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,he,ht,wt,Et.width,Et.height,pt,Et.data):N.texSubImage2D(N.TEXTURE_2D,he,ht,wt,ve,Re,pt,We,Et);N.pixelStorei(N.UNPACK_ROW_LENGTH,at),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,P),N.pixelStorei(N.UNPACK_SKIP_PIXELS,V),N.pixelStorei(N.UNPACK_SKIP_ROWS,te),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ue),he===0&&H.generateMipmaps&&N.generateMipmap(kt),Se.unbindTexture()},this.initRenderTarget=function(b){Ce.get(b).__webglFramebuffer===void 0&&Xe.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Xe.setTextureCube(b,0):b.isData3DTexture?Xe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Xe.setTexture2DArray(b,0):Xe.setTexture2D(b,0),Se.unbindTexture()},this.resetState=function(){A=0,L=0,z=null,Se.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}};var _x={x:1630,y:1160},yx={x:3370,y:430},na={x:1450,y:1320};function Xu(n,e){if(!n||!e)return null;let t=[_x,yx].filter(g=>Math.hypot(g.x-n.x,g.y-n.y)<400).sort((g,x)=>Math.hypot(g.x-n.x,g.y-n.y)-Math.hypot(x.x-n.x,x.y-n.y))[0],i=0,r=1;if(t){let g=t.x-n.x,x=t.y-n.y;Math.abs(g)>Math.abs(x)?(i=Math.sign(g)||1,r=0):r=Math.sign(x)||1}let s=[0,280,320,360][e],a=[0,220,260,300][e],o=112,c={x:n.x-i*a/2,y:n.y-r*a/2},l=(g,x)=>({x:c.x+r*g+i*x,y:c.y-i*g+r*x}),h=(g,x,m,u)=>{let _=l(g,x);return{x:_.x,y:_.y,w:r?m:u,h:r?u:m}},d=[];if(e>=2){d.push(h(0,-a/2,s,10));for(let g of[-s/2,s/2])d.push(h(g,0,10,a))}if(e>=3){let g=(s-o)/2;for(let x of[-1,1])d.push(h(x*(o/2+g/2),a/2,g,10))}let p=e===1?[-1,1].flatMap(g=>[-1,1].map(x=>({...l(g*(s/2-8),x*(a/2-8)),radius:6}))):[],f=[h(-s/2+53,-a/2+64,52,90)];return e>=3&&f.push(h(s/2-53,-a/2+64,52,90)),{center:c,width:s,depth:a,door:o,fx:i,fy:r,yaw:Math.atan2(i,r),floor:h(0,0,s,a),walls:d,posts:p,beds:f,point:l,wallHeight:224,doorHeight:204,roofRidge:284}}var vx=["#4c9cba","#df8168","#9974c7","#76b677","#e3b04c","#df71a7"],Mx=["#e3b185","#be895f","#efc69d","#a67152"],bx=["#463b32","#24282b","#99673b","#c9a465"];var rl=(n,e,t)=>Number.isInteger(n?.[e])&&n[e]>=0&&n[e]<t?n[e]:0;function Bc(n,e){return n.shirt=vx[rl(e,"shirt",6)],n.skin=Mx[rl(e,"skin",4)],n.hair=bx[rl(e,"hair",4)],n.style=rl(e,"style",3),n}function sl(n){return Bc({},n)}var qu={gather:1e3,fish:1500,cook:1200,wave:2e3,cheer:2e3};function Yu(n,e){let t=Math.sin(e*Math.PI*4);return n==="gather"?{left:-.35,right:-1.1+t*.6,bend:.12}:n==="fish"?{left:-.8,right:-1.3+Math.sin(e*Math.PI)*.3,bend:0}:n==="cook"?{left:-.8,right:-.9+t*.25,bend:.06}:n==="wave"?{left:0,right:-2.4,bend:0,wave:t*.25}:n==="cheer"?{left:-2.4,right:-2.4,bend:0,wave:t*.12}:null}var Sx="assets/materials-v018/",kc=["paving","sand","grass","plaster","teal","roof","wood","rock","leaf"],wx=new Set(["#a68854","#876742","#845f3f","#7d654b","#866642","#a98961","#765734","#9a743e","#786040","#8a6d49","#927652","#6e5942"]);function Zu(n){let e=document.createElement("canvas");e.width=n.width,e.height=n.height;let t=e.getContext("2d");t.scale(e.width/4600,e.height/2900),t.fillStyle="#0000ff",t.fillRect(0,0,4600,2900),t.fillStyle="#00ff00";for(let[i,r,s,a]of[[1750,1300,1420,840],[3380,500,450,240],[4100,2400,325,225]])t.beginPath(),t.ellipse(i,r,s,a,0,0,Math.PI*2),t.fill();return t.strokeStyle="#ff0000",t.lineWidth=100,t.lineCap="round",t.beginPath(),t.moveTo(1440,1190),t.bezierCurveTo(1520,1080,1750,1190,1980,1280),t.bezierCurveTo(2420,1510,2790,1440,3200,1320),t.stroke(),t.lineWidth=80,t.beginPath(),t.moveTo(1800,1180),t.bezierCurveTo(2100,930,2820,920,3220,730),t.lineTo(3370,480),t.stroke(),t.fillStyle="#ff0000",t.beginPath(),t.ellipse(1570,1160,290,200,0,0,Math.PI*2),t.fill(),e}function al(n){let e=new Map,t=new Map,i=new Set,r=0,s=0,a=!0,o=0,c=new qs;for(let f of kc){let g=c.load(Sx+f+".webp",()=>{r++,a=!0},void 0,()=>{s++,i.add(f),a=!0});g.userData.materialAssetName=f,g.colorSpace=Yt,g.wrapS=g.wrapT=Or,g.anisotropy=Math.min(8,n.capabilities.getMaxAnisotropy()),e.set(f,g)}function l(f,g="#ffffff",x=1,m=.035){let u=f+g+x+m;if(!t.has(u)){let _=e.get(f).clone();_.repeat.set(x,x);let w=new Bt({color:g,map:_,bumpMap:_,bumpScale:m,roughness:f==="leaf"?.78:.93});e.get(f).addEventListener("dispose",()=>_.dispose());let y=e.get(f);w.userData.textureSource=y,t.set(u,w),a=!0}return t.get(u)}function h(f){return wx.has(f)?l("wood","#ded4c4",1,.045):f==="#e2dbc7"?l("plaster","#f8f4e7",1,.027):f==="#ba7655"?l("roof","#e4d6c7",2,.055):f==="#a7c4b7"?l("teal","#e7ede3",1,.035):f==="#92968b"||f==="#777a6b"?l("rock","#ddd9cf",1,.065):null}function d(){if(!a)return;o++;let f=r+s<kc.length;for(let g of t.values()){let x=g.userData.textureSource;x.image&&g.map.image!==x.image&&(g.map.source=x.source,g.map.needsUpdate=!0),g.map.image&&!g.userData.uploaded&&(g.map.needsUpdate=!0,g.userData.uploaded=!0),!g.userData.uploaded&&!i.has(x.userData.materialAssetName)&&(f=!0)}a=f}function p(f){f.colorSpace=Zn;let g=new Bt({color:"#ffffff",map:f,roughness:1});return g.onBeforeCompile=x=>{x.uniforms.uSand={value:e.get("sand")},x.uniforms.uGrass={value:e.get("grass")},x.uniforms.uPaving={value:e.get("paving")},x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
        uniform sampler2D uSand; uniform sampler2D uGrass; uniform sampler2D uPaving;`),x.fragmentShader=x.fragmentShader.replace("#include <map_fragment>",`
        vec3 maskColor=texture2D(map,vMapUv).rgb;
        vec2 detailUV=vMapUv*vec2(57.5,36.25);
        float green=maskColor.g;
        float trail=maskColor.r;
        vec3 sand=texture2D(uSand,detailUV*1.4).rgb;
        vec3 grass=texture2D(uGrass,detailUV*1.15).rgb;
        vec3 paving=texture2D(uPaving,detailUV*.72).rgb;
        diffuseColor.rgb=sand*maskColor.b+paving*trail+grass*green;
        diffuseColor.rgb*=.94+.06*sin(vMapUv.x*170.0)*sin(vMapUv.y*155.0);`),x.fragmentShader=x.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        float relief=dot(texture2D(uSand,vMapUv*vec2(90.,57.)).rgb,vec3(.333));
        normal=normalize(normal+vec3(dFdx(relief)*.14,dFdy(relief)*.14,0.));`)},g}return{textures:e,surface:l,forColor:h,ground:p,update:d,stats:()=>({loaded:r,failed:s,total:kc.length,materials:t.size,syncPending:a,syncPasses:o}),dispose(){for(let f of t.values())f.map.dispose(),f.dispose();for(let f of e.values())f.dispose()}}}function ol({x:n,z:e,surface:t,yaw:i,pitch:r,mode:s="first",distance:a=4.8,bob:o=0},c={position:new O,target:new O}){let l=t+1.64+o;return s==="first"?(c.position.set(n,l,e),c.target.set(n-Math.sin(i)*Math.cos(r),l-Math.sin(r),e-Math.cos(i)*Math.cos(r)),c):(c.target.set(n,t+1.3,e),c.position.set(n+Math.sin(i)*Math.cos(r)*a,c.target.y+.65+Math.sin(r)*a,e+Math.cos(i)*Math.cos(r)*a),c)}function Vc(n,e,t,i){return!(t>0)||!(i>0)?n:n.lerp(e,1-Math.exp(-t*i))}function ll(n,e,t,i){return i.length=0,n.intersectObjects(e,t,i),i}var Tx={};function cl(n,e,t,{height:i=18,offsetX:r=-12,offsetZ:s=-8}=Tx){let a=Math.abs(n.shadow.camera.right-n.shadow.camera.left),o=n.shadow.mapSize.width,c=a>0&&o>0?a/o:0,l=c?Math.round(e/c)*c:e,h=c?Math.round(t/c)*c:t;return n.position.set(l+r,i,h+s),n.target.position.set(l,0,h),c}function Ju(n,e,t,i,r){let s=(()=>{let x=90210;return()=>(x=Math.imul(x,1664525)+1013904223>>>0)/4294967296})(),a=new Ut;a.setAttribute("position",new it([-.015,0,0,.015,0,0,-.012,.08,.01,.012,.08,.01,0,.16,.035],3)),a.setAttribute("uv",new it([0,0,1,0,0,.5,1,.5,.5,1],2)),a.setIndex([0,1,2,1,3,2,2,3,4]),a.computeVertexNormals();let o=new Bt({color:"#ffffff",side:qt,roughness:1});o.defines={USE_UV:""};let c={value:0},l={value:new Ct(0,0,0,0)};o.onBeforeCompile=x=>{x.uniforms.uWind=c,x.uniforms.uBase=l,x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec4 uBase;`),x.vertexShader=x.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec3 grassWorld=(instanceMatrix*vec4(position,1.)).xyz;
      transformed.x+=sin(uWind+grassWorld.x*.8+grassWorld.z)*position.y*.13;
      if(abs(grassWorld.x-uBase.x)<uBase.z&&abs(grassWorld.z-uBase.y)<uBase.w)transformed.y-=100.;`),x.fragmentShader=x.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=.7+.35*vUv.y;`)};let h=r?2800:5500,d=new Dt(a,o,h);d.receiveShadow=!0,d.frustumCulled=!1;let p=i.getContext("2d").getImageData(0,0,i.width,i.height).data,f=new Pt,g=0;for(let x=0;x<h*8&&g<h;x++){let m=s()*4600,u=s()*2900,_=(Math.min(i.height-1,Math.floor(u/2900*i.height))*i.width+Math.min(i.width-1,Math.floor(m/4600*i.width)))*4;if(p[_+1]<p[_]+12||p[_+1]<85)continue;let w=m/t,y=u/t,R=e(w,y);R<.1||(f.position.set(w,R-.015,y),f.rotation.set(0,s()*Math.PI*2,0),f.scale.setScalar(.7+s()*.8),f.updateMatrix(),d.setMatrixAt(g,f.matrix),d.setColorAt(g,new Qe().setHSL(.2+s()*.055,.3+s()*.15,.22+s()*.08)),g++)}return d.count=g,n.add(d),{update(x,m){c.value=x,m?l.value.set(m.floor.x/t,m.floor.y/t,m.floor.w/(t*2)+.1,m.floor.h/(t*2)+.1):l.value.set(0,0,0,0)},dispose(){n.remove(d),a.dispose(),o.dispose(),d.dispose()}}}function $u(n,e,{cube:t,tube:i},r){let s=e.width/80,a=e.depth/80,o=e.wallHeight/80,c=e.roofRidge/80;for(let d of n.children)d.name==="floor"&&(d.material=r.surface("paving","#e5ded0",2,.045)),d.name==="wall"&&(d.material=r.surface("plaster","#f8f4e7",1,.025)),d.name==="roof"&&(d.material=r.surface("roof","#efe2d5",2,.045));for(let d of[-1,1]){let p=t(n,"#876742",[d*s/2,o-.09,0],[.13,.16,a+.18]);if(p.name="trim",e.walls.length){let f=t(n,"#a7c4b7",[d*(s/2+.064),1.55,-a*.16],[.02,.9,.7]);f.name="shutter";for(let g=0;g<8;g++)t(n,"#876742",[d*(s/2+.08),1.17+g*.11,-a*.16],[.025,.035,.69]);for(let g of[-a*.16-.39,-a*.16+.39])t(n,"#e2dbc7",[d*(s/2+.078),1.56,g],[.045,1.02,.065])}}let l=i(n,"#ba7655",[0,c+.02,0],[.09,a+.42,.09]);l.rotation.x=Math.PI/2,l.name="ridge";let h=t(n,"#e2dbc7",[0,o-.05,-a/2-.066],[s+.08,.16,.06]);return h.name="trim",n}var Jn=Object.freeze([{id:"home",name:"Main Island",x:0,z:0,radius:480,biome:"mixed",dock:{x:390,z:100},landmarks:["village","player-base","market","harbour"]},{id:"jungle",name:"Jungle Island",x:1150,z:-450,radius:270,biome:"rainforest",dock:{x:930,z:-380},landmarks:["cave","waterfall","hidden-cache"]},{id:"fortress",name:"Fortress Island",x:1900,z:550,radius:240,biome:"rocky",dock:{x:1690,z:490},landmarks:["guarded-estate","rescue-mission"]},{id:"highlands",name:"Highlands Island",x:-1050,z:-850,radius:290,biome:"highlands",dock:{x:-840,z:-710},landmarks:["mine","mountain-trail"]},{id:"smugglers",name:"Smugglers Island",x:-1550,z:250,radius:230,biome:"mangrove",dock:{x:-1340,z:220},landmarks:["warehouse","secret-passage"]},{id:"paradise",name:"Paradise Island",x:700,z:1350,radius:250,biome:"beach",dock:{x:600,z:1120},landmarks:["cabins","reef"]}]),aM=Object.freeze(Object.fromEntries(Jn.map(n=>[n.id,n])));function Ku(n,e){return!Number.isFinite(n)||!Number.isFinite(e)?null:Jn.find(t=>Math.hypot(n-t.x,e-t.z)<=t.radius)??null}function us(n,e){if(Number.isFinite(n.coastSeed)){let i=n.coastSeed;return .855+.07*Math.sin(e*2+i)+.045*Math.cos(e*3-i)+.025*Math.sin(e*7+i)}let t=n.x*.002+n.z*.001;return .955+.023*Math.sin(e*3+t)+.012*Math.cos(e*5-t)}function pr(n,e,t){let i=(e-n.x)/n.radius,r=(t-n.z)/n.radius,s=Math.hypot(i,r);if(s>=1)return-.32;let a=Math.atan2(r,i),o=us(n,a),c=Math.max(0,Math.min(1,(o-s)/.12));if(s>o)return-.32*Math.min(1,(s-o)/.04);if(Number.isFinite(n.relief)){let f=(o-s)*n.radius/20,g=Math.min(1,f/18),x=Math.max(0,Math.min(1,(f-18)/85)),m=Math.exp(-((i+.18)**2*4+(r-.16)**2*5))*.7+Math.exp(-((i-.36)**2*11+(r+.25)**2*8))*.42;return .005+g*.65+x*x*(3-2*x)*m*n.relief}let l=Math.max(0,Math.min(1,(.79-s)/.22)),h=l*l*(3-2*l),d=Math.exp(-((i+.18)**2*4+(r-.16)**2*5))*.7+Math.exp(-((i-.36)**2*11+(r+.25)**2*8))*.42,p=n.biome==="highlands"?8.5:n.biome==="rainforest"?2.2:n.biome==="rocky"?1.6:.55;return .005+c*.35+h*d*p}function Gc(n,{segments:e=48}={}){if(!Number.isInteger(e)||e<8||e>256)throw new RangeError("segments must be 8..256");let t=[0,pr(n,n.x,n.z),0],i=[.5,.5],r=[],s=Math.ceil(e/2);for(let l=1;l<=s;l++)for(let h=0;h<=e;h++){let d=h/e*Math.PI*2,p=Number.isFinite(n.relief)?us(n,d)+.03:1.02,f=n.radius*p*l/s,g=Math.cos(d)*f,x=Math.sin(d)*f;t.push(g,pr(n,n.x+g,n.z+x),x),i.push(.5+g/(n.radius*2.04),.5+x/(n.radius*2.04));let m=1+(l-1)*(e+1)+h;if(h!==e)if(l===1)r.push(0,m+1,m);else{let u=m-(e+1);r.push(u,m+1,m,u,u+1,m+1)}}let a=new Ut;a.setAttribute("position",new it(t,3)),a.setAttribute("uv",new it(i,2)),a.setIndex(r),a.computeVertexNormals();let o=new Bt({color:n.biome==="beach"?11779972:5538650,roughness:1,side:qt}),c=new gt(a,o);return c.name="archipelago-"+n.id,c.position.set(n.x,0,n.z),c.receiveShadow=!0,c}function ju(n={}){let e=new Be;e.name="archipelago-terrain";for(let t of Jn)e.add(Gc(t,n));return e}function ds(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,c=new Ut,l=0;for(let h=0;h<n.length;++h){let d=n[h],p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,d=[];for(let p=0;p<n.length;++p){let f=n[p].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=n[p].attributes.position.count}c.setIndex(d)}for(let h in s){let d=Qu(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let p=0;p<d;++p){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][p]);let g=Qu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Qu(n){let e,t,i,r=-1,s=0;for(let l=0;l<n.length;++l){let h=n[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let a=new e(s),o=new Kt(a,t,i),c=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute){let d=c/t;for(let p=0,f=h.count;p<f;p++)for(let g=0;g<t;g++){let x=h.getComponent(p,g);o.setComponent(p+d,g,x)}}else a.set(h.array,c);c+=h.count*t}return r!==void 0&&(o.gpuType=r),o}var ia=Object.freeze([{x:95,z:-95,w:105,d:80,h:4.4,color:"#d8b8a3",shutter:"#557f7b"},{x:-55,z:-115,w:110,d:85,h:5.8,color:"#d5dfd4",shutter:"#73868b"},{x:-210,z:-95,w:100,d:90,h:4.5,color:"#e6cf97",shutter:"#426d73"},{x:100,z:110,w:100,d:90,h:5.6,color:"#9fbdac",shutter:"#705b48"},{x:-70,z:130,w:110,d:85,h:4.4,color:"#dfc6b5",shutter:"#587e7c"},{x:-225,z:110,w:90,d:75,h:4.5,color:"#c5d1d0",shutter:"#7a6a58"}]);function mr(n,e,t=ia){return e==="home"&&t.some(i=>Math.abs(n.x-i.x)<i.w/2+7&&Math.abs(n.z-i.z)<i.d/2+7)}var Ex=`
float hash21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise21(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hash21(i),hash21(i+vec2(1.,0.)),f.x),mix(hash21(i+vec2(0.,1.)),hash21(i+vec2(1.)),f.x),f.y);}
float fbm21(vec2 p){float f=0.,a=.5;for(int i=0;i<4;i++){f+=a*noise21(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`,td=`
float hashFast(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noiseFast(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hashFast(i),hashFast(i+vec2(1.,0.)),f.x),mix(hashFast(i+vec2(0.,1.)),hashFast(i+vec2(1.)),f.x),f.y);}
float fbmFast(vec2 p){float f=0.,a=.535714;for(int i=0;i<3;i++){f+=a*noiseFast(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`;function hl(n,{size:e=900,segments:t=72,coastSeeds:i=[]}={}){let r=Array.from({length:9},(c,l)=>new Ct(...n[l]||[1e4,1e4,1,1])),s=new Mn({fog:!0,uniforms:{...jo.clone(Me.fog),uTime:{value:0},uEye:{value:new O},uCoasts:{value:r},uCoastSeeds:{value:Array.from({length:9},(c,l)=>i[l]??-100)}},vertexShader:`uniform float uTime;varying vec3 vWater;
    #include <fog_pars_vertex>
    void main(){vec3 p=position;
    p.y+=sin(dot(p.xz,vec2(.41,.19))+uTime*.75)*.024+sin(dot(p.xz,vec2(-.17,.36))-uTime*.58)*.019;
    vWater=(modelMatrix*vec4(p,1.)).xyz;vec4 mvPosition=viewMatrix*vec4(vWater,1.);gl_Position=projectionMatrix*mvPosition;
    #include <fog_vertex>
    }`,fragmentShader:`uniform float uTime;uniform vec3 uEye;uniform vec4 uCoasts[9];uniform float uCoastSeeds[9];varying vec3 vWater;
    #include <fog_pars_fragment>
    ${Ex}
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
    }`}),a=new Cn(e,e,t,t);a.rotateX(-Math.PI/2),s.userData.fragmentNoiseLayers=7;let o=new gt(a,s);return o.name="tropical-ocean",o.position.y=-.045,{mesh:o,update(c,l){s.uniforms.uTime.value=c,s.uniforms.uEye.value.copy(l)},dispose(){a.dispose(),s.dispose()}}}function ul(n=420){let e=new Mn({side:on,depthWrite:!1,uniforms:{uTime:{value:0}},vertexShader:"varying vec3 vSky;void main(){vSky=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float uTime;varying vec3 vSky;${td}
  void main(){vec3 dir=normalize(vSky);float h=dir.y;
    vec3 col=mix(vec3(.65,.79,.84),vec3(.095,.34,.59),smoothstep(-.02,.8,h));
    vec2 p=dir.xz/max(.1,h)*2.3+vec2(uTime*.006,uTime*.0025);float n=fbmFast(p);
    float cloud=smoothstep(.52,.70,n)*smoothstep(.025,.20,h);
    col=mix(col,mix(vec3(.62,.69,.71),vec3(.98,.96,.89),smoothstep(.50,.70,n)),cloud);
    float sun=pow(max(dot(dir,normalize(vec3(-.55,.82,-.36))),0.),70.);col+=vec3(.35,.24,.12)*sun;
    gl_FragColor=vec4(col,1.);
    #include <colorspace_fragment>
  }`});e.userData.fragmentNoiseLayers=3;let t=new gt(new bn(n,32,20),e);return t.name="tropical-sky",t.renderOrder=-10,t.frustumCulled=!1,t}function dl(n,e){let t=new Bt({roughness:1,color:"#ffffff",vertexColors:!0});return t.userData.fragmentNoiseLayers=3,t.onBeforeCompile=i=>{Object.assign(i.uniforms,{uGrass:{value:n.textures.get("grass")},uSand:{value:n.textures.get("sand")},uRock:{value:n.textures.get("rock")}}),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vIslandPosition;varying vec3 vIslandNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vIslandPosition=position;vIslandNormal=normalize(normal*vec3(${e.toFixed(1)},1.,${e.toFixed(1)}));`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vIslandPosition;varying vec3 vIslandNormal;uniform sampler2D uGrass;uniform sampler2D uSand;uniform sampler2D uRock;${td}`).replace("#include <map_fragment>",`
        vec2 uv=vIslandPosition.xz/${e.toFixed(1)}*.34;
        float n=fbmFast(uv*.46);vec2 offset=vec2(17.3,8.1);
        vec3 grass=mix(texture2D(uGrass,uv).rgb,texture2D(uGrass,uv*1.37+offset).rgb,.38);
        vec3 sand=texture2D(uSand,uv*.8).rgb,rock=texture2D(uRock,uv*.62).rgb;
        float beach=1.-smoothstep(.025,.34,vIslandPosition.y);
        float slope=1.-abs(normalize(vIslandNormal).y);float cliff=smoothstep(.44,.76,slope)*(1.-beach);
        diffuseColor.rgb*=mix(mix(grass,sand,beach),rock,cliff)*(.82+n*.28);`)},t.customProgramCacheKey=()=>`tropical-island-${e}`,t}function ed(n=14){let e=[],t=[],i=[],r=(a,o,c,l)=>{let h=o*2.2,d=Math.sin(o*Math.PI)*.55-o*o*.95;return[Math.sin(a)*h+Math.cos(a)*l*c,d-l*.17,Math.cos(a)*h-Math.sin(a)*l*c]};for(let a=0;a<9;a++){let o=a*Math.PI*2/9;for(let c=1;c<n;c++)for(let l of[-1,1]){let h=c/n,d=Math.sin(h*Math.PI)*.44,p=e.length/3;e.push(...r(o,h-.03,l,.012),...r(o,h-.09,l,d),...r(o,h+.025,l,d*.87),...r(o,h+.03,l,.012)),t.push(h,0,h,.9,h+.03,1,h+.03,0),i.push(p,p+1,p+2,p,p+2,p+3)}}let s=new Ut;return s.setAttribute("position",new it(e,3)),s.setAttribute("uv",new it(t,2)),s.setIndex(i),s.computeVertexNormals(),s}var tn=(n,e=0)=>{let t=Math.sin((n+1)*12.9898+(e+1)*78.233)*43758.5453;return t-Math.floor(t)};function Ax(n,e){for(let t of n){let i=t.userData.lod,r=i.distance+i.radius,s=e.distanceToSquared(i.center)<=r*r?"high":"low";s!==i.level&&(t.geometry=i[s],i.level=s,i.shadowReceiverLod&&(t.receiveShadow=s==="high"))}}function Cx(n,e,t){return n.ready&&n.x===t.x&&n.y===t.y&&n.z===t.z?!1:(n.ready=!0,n.x=t.x,n.y=t.y,n.z=t.z,Ax(e,t),!0)}function fl(n,e,{scale:t,height:i,surfaces:r,small:s=!1,clear:a=()=>!1,dense:o=!1,lod:c=!1}={}){let l=(M,T)=>{let F=new Ht(.085,.16,1,M,T);F.translate(0,.5,0);let D=F.attributes.position;for(let C=0;C<D.count;C++)D.setX(C,D.getX(C)+D.getY(C)**2*.2);return F.computeVertexNormals(),F},h=l(8,6),d=c?l(6,3):h,p=r.surface("wood","#bc9c71",2,.03),f=r.surface("leaf","#9cb384",1,.01).clone();f.side=qt;let g=ed(s?9:12),x=c?ed(s?6:7):g,m=[],u=[],_=new Pt,w=650/t,y=0;for(let M of e){let T=[];for(let D=0;D<(o?M.id==="home"?s?700:1500:s?280:650:s?22:42);D++){let C=D+M.x*.013+M.z*.017,U=D*2.39996+M.x*.001+(tn(C,0)-.5)*.72,B=o?Math.min(.93,Math.max(.12,Math.sqrt(D*.6180339%1)*.91+(tn(C,1)-.5)*.09)):Math.min(.91,.34+D%7*.075+(tn(C,1)-.5)*.08),q=M.radius*B,k=M.x+Math.sin(U)*q,re=M.z+Math.cos(U)*q;a(M,k,re)||i(k,re)<.32||T.push({x:k/t,z:re/t,y:i(k,re),a:U,h:3.45+tn(C,2)*2.15,size:.7+tn(C,3)*.43,leanX:(tn(C,4)-.5)*.12,leanZ:(tn(C,5)-.5)*.14,index:y++})}if(!T.length)continue;let F=Array.from({length:4},()=>[]);T.forEach(D=>F[(D.x>=M.x/t?1:0)+(D.z>=M.z/t?2:0)].push(D)),F.forEach((D,C)=>{if(!D.length)return;let U=new Dt(h,p,D.length),B=new Dt(g,f,D.length);U.name=m.length?`grove-trunks-${M.id}-${C+1}`:"grove-trunks",B.name=u.length?`grove-fronds-${M.id}-${C+1}`:"grove-fronds";for(let q=0;q<D.length;q++){let k=D[q];_.position.set(k.x,k.y,k.z),_.rotation.set(k.leanX,k.a,k.leanZ),_.scale.set(k.size,k.h,k.size),_.updateMatrix(),U.setMatrixAt(q,_.matrix),_.position.set(k.x+.2*k.size*Math.cos(k.a),k.y+k.h,k.z-.2*k.size*Math.sin(k.a)),_.rotation.set(k.leanX*.35,k.a+tn(k.index,6)*Math.PI*.35,k.leanZ*.35),_.scale.setScalar(k.size),_.updateMatrix(),B.setMatrixAt(q,_.matrix),B.setColorAt(q,new Qe().setHSL(.245+tn(k.index,7)*.065,.22+tn(k.index,8)*.13,.59+tn(k.index,9)*.12))}for(let q of[U,B])q.userData.cullingRegion={island:M.id,sector:C+1},q.castShadow=!0,q.instanceMatrix.needsUpdate=!0,q.computeBoundingSphere(),n.add(q);U.userData.lod={high:h,low:d,distance:w,level:"high",shadowReceiverLod:c,center:U.boundingSphere.center.clone(),radius:U.boundingSphere.radius},B.userData.lod={high:g,low:x,distance:w,level:"high",center:B.boundingSphere.center.clone(),radius:B.boundingSphere.radius},U.receiveShadow=!0,B.receiveShadow=!1,m.push(U),u.push(B)})}let R=new er(1,1),A=r.surface("rock","#a9aaa0",2,.08),L=[];for(let M of e){let T=[];for(let D=0;D<(s?14:24);D++){let C=D+M.x*.019+M.z*.023,U=D*2.399+.6+(tn(C,10)-.5)*.62,B=M.radius*(.84+tn(C,11)*.1),q=M.x+Math.sin(U)*B,k=M.z+Math.cos(U)*B;a(M,q,k)||T.push({x:q/t,y:i(q,k)-.1,z:k/t,a:U,j:D,seed:C})}if(!T.length)continue;let F=new Dt(R,A,T.length);F.name=L.length?"shore-rocks-"+M.id:"shore-rocks";for(let D=0;D<T.length;D++){let C=T[D];_.position.set(C.x,C.y,C.z),_.rotation.set(tn(C.seed,12)*1.2,C.a,tn(C.seed,13)*1.1),_.scale.set(.27+tn(C.seed,14)*.5,.2+tn(C.seed,15)*.43,.31+tn(C.seed,16)*.53),_.updateMatrix(),F.setMatrixAt(D,_.matrix)}F.castShadow=F.receiveShadow=!0,F.instanceMatrix.needsUpdate=!0,F.computeBoundingSphere(),n.add(F),L.push(F)}let z=[...m,...u],S={};return{trees:m[0],foliage:u[0],treeBatches:m,foliageBatches:u,rocks:L[0],rockBatches:L,lodGeometries:[h,d,g,x],update(M){return Cx(S,z,M)}}}function pl(n,{scale:e,height:t,surfaces:i,helpers:r,village:s=ia,paths:a,marketPoint:o={x:290,z:-30}}){let{cube:c,tube:l,ell:h}=r,d=[];function p(T){let F=new Map;T.updateMatrix();for(let D of[...T.children])if(D.isMesh){D.updateMatrix();let C=D.geometry.clone().applyMatrix4(D.matrix);F.has(D.material)||F.set(D.material,[]),F.get(D.material).push(C),T.remove(D)}for(let[D,C]of F){let U=ds(C,!1);C.forEach(q=>q.dispose());let B=new gt(U,D);B.castShadow=B.receiveShadow=!0,T.add(B)}}function f(T,F){let D=new Map,C=0;n.updateMatrixWorld(!0),F.updateMatrixWorld(!0);let U=new Lt().copy(F.matrixWorld).invert(),B=new Lt;for(let q of T)for(let k of[...q.children])if(k.isMesh){k.updateMatrixWorld(!0),B.multiplyMatrices(U,k.matrixWorld);let re=k.geometry.clone().applyMatrix4(B);D.has(k.material)||D.set(k.material,[]),D.get(k.material).push(re),C++,q.remove(k),k.geometry.dispose()}for(let[q,k]of D){let re=ds(k,!1);k.forEach(ye=>ye.dispose()),re.computeBoundingSphere();let ne=new gt(re,q);ne.castShadow=ne.receiveShadow=!0,F.add(ne)}return{sourceBatches:C,materialBatches:F.children.length}}function g(T,F=n,D=!0,C=0){let U=new Be;U.name="village-house",F.add(U),U.position.set(D?T.x/e:T.x,D?t(T.x,T.z):0,D?T.z/e:T.z),U.rotation.y=T.facing??(T.z>60?Math.PI:0);let B=T.w/e,q=T.d/e,k=T.h,re=c(U,T.color,[0,k/2,0],[B,k,q]);re.material=i.surface("plaster",T.color,2,.035);let ne=i.surface("roof","#d5bbab",2,.065);for(let Y of[-1,1]){let $=c(U,"#ba7655",[Y*B/4,k+.43,0],[Math.hypot(B/2+.25,.85),.13,q+.5]);$.rotation.z=-Y*Math.atan2(.85,B/2+.25),$.material=ne,c(U,"#a75f45",[Y*(B/2+.13),k+.01,0],[.14,.22,q+.58])}let ye=l(U,"#a75f45",[0,k+.86,0],[.12,q+.62,.12]);ye.rotation.x=Math.PI/2;for(let Y of[.17,k*.52,k-.16])c(U,"#e2dbc7",[0,Y,q/2+.035],[B+.16,.14,.1]);let De=k>5?2:1;for(let Y=0;Y<De;Y++)for(let $ of[-B*.31,B*.31]){let fe=1.5+Y*2.35,Ue=q/2+.08,Te=c(U,"#415d63",[$,fe,Ue],[.75,1.2,.05]);Te.material.roughness=.24,Te.material.metalness=.1,c(U,"#e2dbc7",[$,fe,Ue+.045],[.065,1.15,.075]),c(U,"#e2dbc7",[$,fe,Ue+.046],[.7,.065,.076]);for(let Ee of[-1,1]){let ft=c(U,T.shutter,[$+Ee*.56,fe,Ue+.03],[.34,1.3,.07]);ft.rotation.y=Ee*.24;for(let N=0;N<9;N++)c(U,"#876742",[$+Ee*.56,fe-.52+N*.13,Ue+.085],[.33,.024,.04])}if(c(U,"#e2dbc7",[$,fe-.68,Ue],[1.7,.1,.16]),c(U,"#e2dbc7",[$,fe+.68,Ue],[1.7,.13,.15]),Y===0){let Ee=c(U,"#876742",[$,.79,q/2+.25],[1.28,.2,.3]);if(Ee.rotation.x=-.04,h)for(let ft=-2;ft<=2;ft++){let N=h(U,ft%2?"#6f8f58":"#88a866",[$+ft*.22,.99+Math.abs(ft)*.025,q/2+.27],[.17,.31,.15]);N.rotation.z=ft*.14}if(De===1){let ft=c(U,T.shutter,[$,2.32,q/2+.46],[1.55,.08,.82]);ft.rotation.x=-.15,c(U,T.shutter,[$,2.2,q/2+.83],[1.55,.17,.07])}}}c(U,"#5a4b3d",[0,1.05,q/2+.06],[.78,2.1,.1]);for(let Y of[.55,1.42])for(let $ of[-.19,.19])c(U,"#745f4c",[$,Y,q/2+.125],[.29,.6,.045]);for(let Y of[-.48,.48])c(U,"#e2dbc7",[Y,1.08,q/2+.11],[.16,2.22,.18]);c(U,"#e2dbc7",[0,2.18,q/2+.11],[1.1,.16,.18]),c(U,"#c9baa1",[0,.07,q/2+.34],[1.16,.14,.58]),h&&h(U,"#caa457",[.27,1.04,q/2+.19],[.055,.055,.035]);let ke=(C%2?-1:1)*B*.42,nt=q/2+.55,tt=l(U,"#e2dbc7",[ke,2.91,q/2+.34],[.035,.7,.035]);tt.rotation.x=Math.PI/2,c(U,T.shutter,[ke,2.62,nt],[.09,.56,.64]);for(let Y of[-1,1]){let $=c(U,"#e2dbc7",[ke+Y*.052,2.62,nt],[.018,.22,.24]);$.rotation.x=(C%3-1)*.22}if(De===2){c(U,"#e2dbc7",[0,2.75,q/2+.48],[B+.15,.18,.9]);for(let Y=0;Y<=10;Y++)l(U,"#e2dbc7",[-B/2+Y*B/10,3.18,q/2+.84],[.034,.76,.034]);c(U,"#e2dbc7",[0,3.58,q/2+.84],[B+.17,.08,.1])}for(let Y of[-1,1])for(let $=0;$<De;$++)for(let fe of[-q*.26,q*.26])c(U,T.shutter,[Y*(B/2+.03),1.5+$*2.35,fe],[.06,1.22,.8]),c(U,"#e2dbc7",[Y*(B/2+.07),.82+$*2.35,fe],[.16,.1,1.05]),c(U,"#e2dbc7",[Y*(B/2+.07),2.18+$*2.35,fe],[.16,.12,1.05]);return U.userData.facadeDetails={planters:2,awnings:De===1?2:0,balcony:De===2,windowPanes:De*8,doorPanels:4,doorway:!0,ridgeCaps:1,eaveFascias:2,hangingSigns:1,signMarks:2,signClearance:!0},p(U),d.push(U),U}s.forEach((T,F)=>g(T,n,!0,F));let x=new Be;x.name="village-buildings",n.add(x),x.userData.batchDetails={sourceHouses:d.length,...f(d,x)},x.userData.cameraBlocker=!0;let m=new Be;m.name="village-overhead-laundry",n.add(m);let u=["#bd6f53","#e8d99e","#587e7c","#73868b"],_=[...s].sort((T,F)=>T.z-F.z),w=Math.ceil(_.length/2),y=0,R=0;for(let T of[_.slice(0,w),_.slice(w)]){let F=[...T].sort((D,C)=>D.x-C.x);for(let D=1;D<F.length;D++){let C=F[D-1],U=F[D],B=C.x+C.w/2,q=U.x-U.w/2;if(q<=B)continue;let k=(B+q)/2,re=(C.z+U.z)/2,ne=Math.max(t(k,re)+3.35,3.55),ye=(q-B)/e,De=l(m,"#5a4b3d",[k/e,ne,re/e],[.012,ye,.012]);De.rotation.z=Math.PI/2,y++;for(let ke=0;ke<3;ke++){let nt=(B+(q-B)*(ke+1)/4)/e,tt=u[(y+ke)%u.length],Y=c(m,tt,[nt,ne-.24-ke%2*.05,re/e],[.46,.48+ke%2*.1,.025]);Y.rotation.z=(ke-1)*.06,R++}}}m.userData.laundryDetails={lines:y,garments:R,clearance:!0},p(m);function A(T,F,D=!1){let C=[],U=[],B=[],q=0;for(let ne=0;ne<T.length;ne++){let ye=T[Math.max(0,ne-1)],De=T[Math.min(T.length-1,ne+1)],ke=T[ne],nt=De.x-ye.x,tt=De.z-ye.z,Y=Math.hypot(nt,tt)||1;ne&&(q+=Math.hypot(ke.x-T[ne-1].x,ke.z-T[ne-1].z)/e);for(let $ of[-1,1]){let fe=ke.x-tt/Y*F/2*$,Ue=ke.z+nt/Y*F/2*$;C.push(fe/e,t(fe,Ue)+.018,Ue/e),U.push(($+1)/2*F/e,q)}if(ne){let $=ne*2;B.push($-2,$-1,$,$-1,$+1,$)}}let k=new Ut;k.setAttribute("position",new it(C,3)),k.setAttribute("uv",new it(U,2)),k.setIndex(B),k.computeVertexNormals();let re=new gt(k,i.surface("paving","#ded9c9",.75,.045));if(re.name="village-path",re.receiveShadow=!0,n.add(re),D){let ne=Math.max(4,F*.08),ye=new an(1,1,1),De=new Dt(ye,i.surface("rock","#dad4c6",1.2,.025),(T.length-1)*2),ke=new Pt;De.name="village-curb";let nt=0;for(let tt=1;tt<T.length;tt++){let Y=T[tt-1],$=T[tt],fe=$.x-Y.x,Ue=$.z-Y.z,Te=Math.hypot(fe,Ue),Ee=-Ue/Te,ft=fe/Te;for(let N of[-1,1]){let Mt=(Y.x+$.x)/2+Ee*(F/2+ne/2)*N,et=(Y.z+$.z)/2+ft*(F/2+ne/2)*N;ke.position.set(Mt/e,t(Mt,et)+.065,et/e),ke.rotation.set(0,Math.atan2(fe,Ue),0),ke.scale.set(ne/e,.1,Te/e+.025),ke.updateMatrix(),De.setMatrixAt(nt++,ke.matrix)}}De.castShadow=De.receiveShadow=!0,De.instanceMatrix.needsUpdate=!0,De.computeBoundingSphere(),n.add(De)}}let L=[];for(let T of a||[{points:Array.from({length:31},(F,D)=>({x:385-D*21,z:36+Math.sin(D*.19)*9})),width:55,curb:!0},{points:Array.from({length:15},(F,D)=>({x:23,z:-280+D*39})),width:40,curb:!0}]){let F=[T.points[0]];for(let D=1;D<T.points.length;D++){let C=T.points[D-1],U=T.points[D],B=Math.ceil(Math.hypot(U.x-C.x,U.z-C.z)/30);for(let q=1;q<=B;q++)F.push({x:C.x+(U.x-C.x)*q/B,z:C.z+(U.z-C.z)*q/B})}if(A(F,T.width,T.curb),T.curb)for(let D=3;D<T.points.length-3;D+=6){let C=T.points[D-1],U=T.points[D+1],B=T.points[D],q=U.x-C.x,k=U.z-C.z,re=Math.hypot(q,k)||1,ne=Math.floor(D/6)%2?1:-1,ye=T.width/2+9,De=B.x-k/re*ye*ne,ke=B.z+q/re*ye*ne;L.push({x:De/e,y:t(De,ke),z:ke/e})}}if(L.length){let T=new Ht(1,1,1,10),F=new bn(1,12,8),D=new Pt,C=new Dt(T,new Bt({color:"#394447",roughness:.62,metalness:.38}),L.length),U=new Dt(F,new Bt({color:"#ffe4a8",emissive:"#ffb85c",emissiveIntensity:.72,roughness:.34}),L.length);C.name="village-lamp-posts",U.name="village-lamp-globes";for(let B=0;B<L.length;B++){let q=L[B];D.position.set(q.x,q.y+1.35,q.z),D.scale.set(.065,2.7,.065),D.updateMatrix(),C.setMatrixAt(B,D.matrix),D.position.set(q.x,q.y+2.76,q.z),D.scale.set(.18,.22,.18),D.updateMatrix(),U.setMatrixAt(B,D.matrix)}C.castShadow=C.receiveShadow=!0,U.castShadow=!1,U.receiveShadow=!0;for(let B of[C,U])B.instanceMatrix.needsUpdate=!0,B.computeBoundingSphere(),n.add(B)}let z=new Be;z.name="harbor-market",z.position.set(o.x/e,t(o.x,o.z),o.z/e),n.add(z);for(let T of[-1.4,1.4])for(let F of[-.6,.6])l(z,"#876742",[T,1.2,F],[.045,2.4,.045]);let S=c(z,"#cc8660",[0,2.35,0],[3.2,.07,1.8]);S.rotation.x=.07;for(let T=0;T<6;T++){let F=T%2?"#f3dfbe":"#bd6f53",D=(T-2.5)*.53,C=c(z,F,[D,2.395,0],[.53,.035,1.76]);C.rotation.x=.07,c(z,F,[D,2.27,.92],[.49,.18,.055])}c(z,"#a98961",[0,.7,0],[2.8,.15,.9]);let M=["#ce5949","#e6b64d","#709a55"];for(let T=0;T<5;T++){let F=(T-2)*.5;if(c(z,"#a68854",[F,.88,0],[.43,.2,.68]),h)for(let D=0;D<3;D++)h(z,M[(T+D)%M.length],[F+(D-1)*.11,1.05,D%2?-.11:.11],[.075,.085,.075])}return z.userData.marketDetails={canopyStripes:6,valances:6,produce:15},p(z),{building:g,houses:d,buildings:x}}var lt=20;var fn=Jn.map((n,e)=>({...n,x:n.x*16,z:n.z*16,dock:{x:n.dock.x*16,z:n.dock.z*16},radius:n.id==="home"?9e3:n.radius*16,coastSeed:1.3+e*1.7,relief:n.id==="home"?24:n.biome==="highlands"?85:n.biome==="rainforest"?42:n.biome==="rocky"?28:12})),Wc=Object.fromEntries(fn.map(n=>[n.id,n])),ms={minX:Math.min(...fn.map(n=>n.x-n.radius))-1600,maxX:Math.max(...fn.map(n=>n.x+n.radius))+1600,minZ:Math.min(...fn.map(n=>n.z-n.radius))-1600,maxZ:Math.max(...fn.map(n=>n.z+n.radius))+1600},nd=(n,e)=>fn.find(t=>Math.hypot(n-t.x,e-t.z)<t.radius)||null,bt=Object.fromEntries(fn.map((n,e)=>{let t=Jn[e],i=Math.hypot(t.dock.x-t.x,t.dock.z-t.z),r=(t.dock.x-t.x)/i,s=(t.dock.z-t.z)/i,a=n.radius*us(n,Math.atan2(s,r)),o=c=>({x:n.x+r*c,z:n.z+s*c});return[n.id,{id:n.id,...o(a+320),ux:r,uz:s,land:o(a-320),end:o(a+240),shore:o(a+200),width:38,deck:.72}]})),ps={x:bt.home.land.x-385,z:bt.home.land.z-40},gr=ia.map(n=>({...n,x:n.x+ps.x,z:n.z+ps.z,facing:n.z>60?Math.PI:0})),fs=(n,e)=>({x:n+ps.x,z:e+ps.z}),ra=[{width:55,curb:!0,points:Array.from({length:31},(n,e)=>e===0?{...bt.home.land}:fs(385-e*21,36+Math.sin(e*.19)*9))},{width:40,curb:!0,points:Array.from({length:15},(n,e)=>fs(23,-280+e*39))},{width:36,points:[fs(-245,40),fs(-600,30),{x:Wc.home.radius*.35,z:400},{x:800,z:-700},{x:-1800,z:-2400}]}],id=fs(290,-30),Zt={x:bt.fortress.land.x-bt.fortress.ux*800,z:bt.fortress.land.z-bt.fortress.uz*800},rd={x:Zt.x-115,z:Zt.z+145},ot={pump:fs(330,65),cave:{x:bt.jungle.land.x-bt.jungle.ux*700,z:bt.jungle.land.z-bt.jungle.uz*700},estate:{x:Zt.x,z:Zt.z+102},paper:{x:0,z:-40},caveExit:{x:0,z:150},estateExit:{x:0,z:130},stairs:{x:70,z:-95},cellarExit:{x:0,z:150},key:{x:0,z:-60}};ot.supply={x:ot.cave.x+150,z:ot.cave.z-105};var Rx=[{id:"gate",area:null,...rd,hp:2},{id:"patrol",area:null,x:Zt.x+110,z:Zt.z+85,hp:2},{id:"hall",area:"estate",x:-65,z:15,hp:2},{id:"boss",area:"estate",x:0,z:-60,hp:3}];function Hc(n,e,t){return t=Math.max(0,Math.min(1,t)),t=t*t*(3-2*t),n+(e-n)*t}function xr(n,e,t=nd(n,e)){if(!t)return-.32;let i=pr(t,n,e);if(i<=.01)return i;if(t.id==="home"){let r=Math.hypot(n-ps.x+80,e-ps.z);r<820&&(i=Hc(.68,i,(r-470)/350))}if(t.id==="fortress"){let r=Math.max(Math.abs(n-Zt.x),Math.abs(e-Zt.z));r<400&&(i=Hc(.85,i,(r-180)/220))}if(t.id==="jungle"){let r=Math.hypot(n-ot.cave.x,e-ot.cave.z);r<230&&(i=Hc(1.2,i,(r-100)/130))}return i}function Xc(n,e,t){for(let i of t?[bt[t]]:Object.values(bt)){if(!i)continue;let r=n-i.land.x,s=e-i.land.z,a=r*i.ux+s*i.uz,o=r*i.uz-s*i.ux,c=Math.hypot(i.end.x-i.land.x,i.end.z-i.land.z);if(a>=-.5&&a<=c+.5&&Math.abs(o)<=i.width/2){let l=xr(i.land.x,i.land.z);return{dock:i,height:l+(i.deck-l)*Math.max(0,Math.min(1,a/c))}}}return null}function ri(n,e){return Xc(n,e)?.height??xr(n,e)}function ml(n,e){return ra.some(t=>t.points.some((i,r)=>{if(!r)return!1;let s=t.points[r-1],a=i.x-s.x,o=i.z-s.z,c=Math.max(0,Math.min(1,((n-s.x)*a+(e-s.z)*o)/(a*a+o*o)));return Math.hypot(n-s.x-a*c,e-s.z-o*c)<t.width/2+35}))}var yM=Object.fromEntries(Jn.map(n=>{let e=Math.hypot(n.dock.x-n.x,n.dock.z-n.z),t=(n.dock.x-n.x)/e,i=(n.dock.z-n.z)/e;return[n.id,{x:n.x+t*n.radius*1.06,z:n.z+i*n.radius*1.06,shore:{x:n.x+t*n.radius*.84,z:n.z+i*n.radius*.84}}]}));var gs={seatZ:-.28,seatTop:.72,hips:.84,eye:1.65};function sd(n,{cube:e,ell:t,mat:i}){let r=new Be;r.name="campaign-boat",n.add(r),t(r,"#233f52",[0,.05,0],[.85,.36,1.9]),t(r,"#dedbd0",[0,.22,0],[.8,.23,1.85]);let s=e(r,"#6e5942",[0,.4,-.15],[1.3,.08,2.7]);s.name="boat-deck";let a=e(r,"#3b5355",[0,.57,gs.seatZ],[.92,.3,.48]);a.name="boat-seat",e(r,"#e7e0d0",[0,.73,.5],[1,.65,.36]);let o=new gt(new an(1.2,.48,.025),new Ws({color:"#b9e4eb",transparent:!0,opacity:.4,roughness:.1}));o.position.set(0,1.15,.68),r.add(o);let c=new gt(new yi(.2,.026,8,20),i("#2e3538"));c.name="boat-wheel",c.position.set(0,1.05,.28),r.add(c);let l=new Ht(1,1,1,8),h=new Dt(l,i("#d6dedc"),10),d=new Pt;h.name="boat-rails";let p=0;for(let _ of[-.68,.68]){for(let w of[.15,.85,1.55])d.position.set(_,.75,w),d.rotation.set(0,0,0),d.scale.set(.025,.5,.025),d.updateMatrix(),h.setMatrixAt(p++,d.matrix);for(let w of[.86,1.01])d.position.set(_,w,.85),d.rotation.set(Math.PI/2,0,0),d.scale.set(.025,1.4,.025),d.updateMatrix(),h.setMatrixAt(p++,d.matrix)}h.castShadow=!0,h.instanceMatrix.needsUpdate=!0,h.computeBoundingSphere(),r.add(h);let f=new Bt({color:"#b7d6d8",emissive:"#31545a",emissiveIntensity:.38,roughness:.28}),g=new Dt(new Ht(.1,.1,.03,16),f,3);g.name="boat-gauges";for(let _=0;_<3;_++)d.position.set((_-1)*.28,.91,.3),d.rotation.set(Math.PI/2,0,0),d.scale.set(_===1?1:.82,_===1?1:.82,1),d.updateMatrix(),g.setMatrixAt(_,d.matrix);g.instanceMatrix.needsUpdate=!0,g.computeBoundingSphere(),r.add(g);let x=t(r,"#d84e46",[-.65,.79,.94],[.075,.075,.075]),m=t(r,"#52b878",[.65,.79,.94],[.075,.075,.075]);x.name="boat-port-light",m.name="boat-starboard-light",x.material=new Bt({color:"#d84e46",emissive:"#b32b25",emissiveIntensity:.9}),m.material=new Bt({color:"#52b878",emissive:"#238547",emissiveIntensity:.9}),e(r,"#303b40",[0,.35,-1.75],[.42,.6,.38]),e(r,"#303b40",[0,-.12,-1.85],[.22,.65,.25]);let u=new gt(new Cn(1.5,5),new vn({color:"#d0ebe6",transparent:!0,opacity:.25,depthWrite:!1}));return u.rotation.x=-Math.PI/2,u.position.set(0,.03,-3.3),r.add(u),r.userData.boatDetails={rails:10,gauges:3,navigationLights:2},{boat:r,wake:u}}function ad(n,e){if(n.root.parent===e)return!1;e.add(n.root),n.root.position.set(0,0,gs.seatZ),n.root.rotation.set(0,0,0),n.rig.rotation.set(0,0,0),n.hips.position.y=gs.hips;for(let t of n.arms)t.arm.rotation.x=-.85,t.arm.rotation.z=-t.side*.18,t.forearm.rotation.x=-.72;for(let t of n.legs)t.thigh.rotation.x=-1.68,t.calf.rotation.x=1.68,t.shoe.rotation.x=0;return!0}var od=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z);var ld=Object.values(bt),In=Array.from({length:5},(n,e)=>({id:e,x:(e-2)*38,z:-80,child:e>2})),Ix=In.map(n=>"cell-"+n.id),Px=Object.fromEntries(ld.map(n=>[n.id,"dock-"+n.id]));function Dx(n){let e=null,t=15625;for(let i of ld){let r=i.x-n.p.x,s=i.z-n.p.z,a=r*r+s*s;a<t&&(e=i,t=a)}return e}function Sn(n,e,t,i,r){let s=n[e]||(n[e]={});return Object.assign(s,i),s.id=t,s.label=r,e+1}function cd(n,e){let t=0;if(e.interior==="cave")return t=Sn(n,t,"paper",ot.paper,e.paper?e.gun?"supplies":"take-gun":"move-paper"),t=Sn(n,t,"cave-exit",ot.caveExit,"leave-cave"),n.length=t,n;if(e.interior==="estate")return t=Sn(n,t,"key",ot.key,"take-key"),t=Sn(n,t,"stairs",ot.stairs,"cellar"),t=Sn(n,t,"estate-exit",ot.estateExit,"leave-estate"),n.length=t,n;if(e.interior==="cellar"){for(let r of In)e.released.includes(r.id)||(t=Sn(n,t,Ix[r.id],r,"free-person"));return t=Sn(n,t,"cellar-exit",ot.cellarExit,"upstairs"),n.length=t,n}if(e.boat){let r=Dx(e);return r&&(t=Sn(n,t,Px[r.id],r,"dock")),n.length=t,n}let i=bt[e.island];if(t=Sn(n,t,"boat",i.shore,e.released.length===5&&!e.boarded?"board-group":"boat"),e.island==="home"&&(t=Sn(n,t,"pump",ot.pump,"refuel")),e.island==="jungle"&&(t=Sn(n,t,"cave",ot.cave,"enter-cave"),t=Sn(n,t,"supply",ot.supply,"supplies")),e.island==="fortress"&&(t=Sn(n,t,"estate",ot.estate,"enter-estate")),["highlands","smugglers","paradise"].includes(e.island)){let r=Wc[e.island];t=Sn(n,t,"supplies",r,"supplies")}return n.length=t,n}function hd(n,e){let t=null,i=1/0;for(let r of n){let s=r.id.startsWith("cell-")?85:r.id.startsWith("dock-")?125:65,a=r.x-e.x,o=r.z-e.z,c=a*a+o*o;c<s*s&&c<i&&(t=r,i=c)}return t}function Lx(n,e){if(e.complete)return n.key="complete",n.target=null,n;if(!e.docked)return n.key="dock-goal",n.target=bt.home,n;if(!e.tanked)return n.key="fuel-goal",n.target=e.boat?bt.home:ot.pump,n;if(!e.gun)return e.interior==="cave"?(n.key=e.paper?"gun-goal":"paper-goal",n.target=ot.paper,n):(n.key="cave-goal",n.target=e.boat?bt.jungle:e.island==="jungle"?ot.cave:bt[e.island].shore,n);if(e.interior==="cave")return n.key="exit-cave-goal",n.target=ot.caveExit,n;if(!e.key){if(e.interior==="estate"){let t=e.guards.find(i=>i.id==="boss");return n.key=t.hp>0?"boss-goal":"key-goal",n.target=t.hp>0?t:ot.key,n}return n.key="estate-goal",n.target=e.boat?bt.fortress:e.island==="fortress"?ot.estate:bt[e.island].shore,n}return e.released.length<5?(n.key=e.interior==="cellar"?"people-goal":"cellar-goal",n.target=e.interior==="cellar"?In.find(t=>!e.released.includes(t.id)):e.interior==="estate"?ot.stairs:e.boat?bt.fortress:ot.estate,n):e.interior?(n.key="escort-goal",n.target=e.interior==="cellar"?ot.cellarExit:ot.estateExit,n):e.boarded?(n.key="home-goal",n.target=e.boat?bt.home:e.island==="home"?bt.home.shore:bt[e.island].shore,n):(n.key="boat-goal",n.target=bt.fortress.shore,n)}function qc(n,e){if(Lx(n,e),e.boat||e.interior||!n.target)return n;let t=bt[e.island],i=!!Xc(e.p.x,e.p.z,e.island);return n.target===t.shore?!i&&od(e.p,t.land)>65&&(n.target=t.land):i&&od(e.p,t.land)>45&&(n.target=t.land),n}function gl(n){return qc({},n)}function Yc(n,e,t,i,r){let s=e.interior?1.8:e.boat?.65:1.3;if(n.fillStyle=e.interior?"#25312d":"#176475",n.fillRect(0,0,t,i),n.save(),n.translate(t/2-e.p.x*s,i/2-e.p.z*s),n.scale(s,s),e.interior){if(n.fillStyle="#6f7568",n.fillRect(-115,-125,230,310),n.strokeStyle="#beb99e",n.lineWidth=8,n.strokeRect(-115,-125,230,310),e.interior==="cave"&&(n.fillStyle="#967756",n.fillRect(-25,-60,50,35),n.fillStyle=e.paper?"#30383a":"#e4d6b8",e.gun||n.fillRect(-17,-55,34,22)),e.interior==="estate"&&(n.fillStyle="#9b7751",n.fillRect(-45,-105,90,25),n.fillStyle="#f0c561",!e.key&&e.guards.find(l=>l.id==="boss").hp===0&&n.fillRect(-5,-65,10,12)),e.interior==="cellar")for(let l of In)n.strokeStyle="#bac6bf",e.released.includes(l.id)||n.strokeRect(l.x-18,-112,36,80)}else{for(let l of fn){o(l,1,"#398b8b",-4*lt),o(l,1,"#d9cba2"),o(l,1,l.biome==="highlands"?"#8f9882":"#759575",18*lt);for(let d=0;d<26;d++){let p=d*2.39996+l.x*.001,f=l.radius*(.36+d%7*.075),g=l.x+Math.sin(p)*f,x=l.z+Math.cos(p)*f;if(!(l.id==="home"&&(mr({x:g,z:x},l.id,gr)||ml(g,x)))&&!(l.id==="fortress"&&Math.abs(g-Zt.x)<125&&Math.abs(x-Zt.z)<155)){n.strokeStyle="#365e49",n.lineWidth=5;for(let m=0;m<7;m++){let u=m*Math.PI*2/7;n.beginPath(),n.moveTo(g,x),n.quadraticCurveTo(g+Math.sin(u+.25)*13,x+Math.cos(u+.25)*13,g+Math.sin(u)*25,x+Math.cos(u)*25),n.stroke()}}}n.fillStyle="#fff4cc",n.font="18px system-ui",n.textAlign="center",n.fillText(r(l.id),l.x,l.z-l.radius*.58);let h=bt[l.id];n.strokeStyle="#a2865b",n.lineWidth=h.width,n.beginPath(),n.moveTo(h.land.x,h.land.z),n.lineTo(h.end.x,h.end.z),n.stroke()}for(let l of ra)n.strokeStyle="#b7baa5",n.lineWidth=l.width,n.beginPath(),l.points.forEach((h,d)=>d?n.lineTo(h.x,h.z):n.moveTo(h.x,h.z)),n.stroke();for(let l of gr)n.fillStyle="#304f43",n.fillRect(l.x-l.w/2+7,l.z-l.d/2+9,l.w,l.d),n.fillStyle=l.color,n.fillRect(l.x-l.w/2,l.z-l.d/2,l.w,l.d),n.fillStyle="#ab7861",n.fillRect(l.x-l.w/2-3,l.z-l.d/2+4,l.w+6,l.d-8),n.strokeStyle="#d4aa83",n.lineWidth=4,n.beginPath(),n.moveTo(l.x-l.w/2,l.z),n.lineTo(l.x+l.w/2,l.z),n.stroke();n.fillStyle="#e0d5b9",n.fillRect(Zt.x-80,Zt.z-80,160,160),n.fillStyle="#352e25",n.fillRect(Zt.x-20,Zt.z+76,40,12),n.fillStyle="#404b40",n.fillRect(ot.cave.x-36,ot.cave.z-30,72,36),n.fillStyle="#d28757",n.fillRect(ot.pump.x-15,ot.pump.z-16,30,32)}for(let l of e.guards)l.area===e.interior&&l.hp>0&&!e.boat&&(l.area||e.island==="fortress")&&c(l,"#d28b76",12);if(e.interior==="cellar")for(let l of In)e.released.includes(l.id)||c(l,"#d3dcbe",10);let a=gl(e).target;a&&(n.strokeStyle="#f5d281",n.lineWidth=3,n.beginPath(),n.arc(a.x,a.z,20+Math.sin(e.elapsed*3)*3,0,Math.PI*2),n.stroke()),n.save(),n.translate(e.p.x,e.p.z),n.rotate(-e.heading),e.boat?(n.fillStyle="#efe4c9",n.beginPath(),n.moveTo(-18,-32),n.lineTo(18,-32),n.lineTo(22,28),n.lineTo(0,50),n.lineTo(-22,28),n.closePath(),n.fill()):(n.fillStyle="#b6ddd3",n.beginPath(),n.arc(0,0,9,0,Math.PI*2),n.fill()),n.strokeStyle="#fff6c7",n.lineWidth=3,n.beginPath(),n.moveTo(0,6),n.lineTo(0,28),n.stroke(),n.restore(),e.shot&&(n.strokeStyle="#ffeac5",n.lineWidth=2,n.beginPath(),n.moveTo(e.shot.from.x,e.shot.from.z),n.lineTo(e.shot.to.x,e.shot.to.z),n.stroke()),n.restore();function o(l,h,d,p=0){n.fillStyle=d,n.beginPath();for(let f=0;f<=96;f++){let g=f/96*Math.PI*2,x=l.radius*us(l,g)*h-p,m=l.x+Math.cos(g)*x,u=l.z+Math.sin(g)*x;f?n.lineTo(m,u):n.moveTo(m,u)}n.closePath(),n.fill()}function c(l,h,d){n.fillStyle=h,n.beginPath(),n.arc(l.x,l.z,d,0,Math.PI*2),n.fill()}}function Ux(n,e){return e.parent===n?!1:(n.add(e),!0)}function Nx(n,e,t,i,r,s,a,o){if(n.ready&&n.area===e)return!1;n.ready=!0,n.area=e,t.visible=!e,i.visible=!!e;for(let[c,l]of r)l.visible=c===e;return s.background.set(e?"#202c29":"#b9dbe5"),s.fog.color.copy(s.background),a.intensity=e?.65:2,o.intensity=e?.15:2.8,!0}function Fx(n,e,t,i){let r=n.values||(n.values=[]),s=!n.ready||r.length!==e.length;for(let a=0;a<e.length;a++)r[a]!==e[a]&&(s=!0);if(!s)return!1;n.ready=!0,r.length=e.length,t.fill(0);for(let a=0;a<e.length;a++){let o=e[a];r[a]=o,t[o]=1}for(let a=0;a<i.length;a++)i[a].visible=!t[a];return!0}function zx(n,e,t=!1){let i=e.interior||"",r=!!e.boat,s=Math.round(e.p.x/20),a=Math.round(e.p.z/20),o=Math.round(e.heading*12),c=!!e.boarded,l=e.guards||[],h=e.released||[],d=!n.ready||n.area!==i||n.island!==e.island||n.boat!==r||n.x!==s||n.z!==a||n.heading!==o||n.boarded!==c||n.animated!==t||n.guardCount!==l.length||n.releasedCount!==h.length,p=n.guards||(n.guards=[]),f=n.released||(n.released=[]);for(let g=0;g<l.length;g++){let x=l[g].hp>0;p[g]!==x&&(d=!0),p[g]=x}for(let g=0;g<h.length;g++)f[g]!==h[g]&&(d=!0),f[g]=h[g];return p.length=l.length,f.length=h.length,n.ready=!0,n.area=i,n.island=e.island,n.boat=r,n.x=s,n.z=a,n.heading=o,n.boarded=c,n.animated=t,n.guardCount=l.length,n.releasedCount=h.length,d}function Ox(n,e,t,i){let r=Math.sin(i),s=Math.cos(i);for(let a=0;a<e.length;a++){let o=e[a],c=n[a],l=35+o.id*15,h=o.id%2?16:-16;c.x=t.x-r*l+s*h,c.z=t.z-s*l-r*h}return n}function Bx(n,e,t,i,r=lt){return n.setXYZ(0,e.x/r,i,e.z/r),n.setXYZ(1,t.x/r,i,t.z/r),n.needsUpdate=!0,n}function kx(n,e,t){let i=e*7;return n.swing=Math.sin(i),n.step=t?.24:0,n.bounce=t?Math.cos(i*2):0,n}function Vx(n,e,t,i,r,s=!1){let a=s||r||!n.ready||n.x!==e.x||n.z!==e.z||n.height!==t||n.heading!==i||n.walking!==r;return n.ready=!0,n.x=e.x,n.z=e.z,n.height=t,n.heading=i,n.walking=r,a}function ud({canvas:n,getState:e,makeHuman:t,onLost:i,rendererFactory:r=s=>new ls(s)}){let s=r({canvas:n,antialias:!0,powerPreference:"high-performance"}),a=innerWidth<=700;s.setPixelRatio(Math.min(devicePixelRatio||1,a?1.1:1.5)),s.setSize(innerWidth,innerHeight,!1),s.outputColorSpace=Yt,s.toneMapping=es,s.shadowMap.enabled=!0,s.shadowMap.type=Qr,s.shadowMap.autoUpdate=!1;let o=new ji,c=new $t(68,innerWidth/innerHeight,.04,6e3);o.add(c),o.background=new Qe("#b9dbe5"),o.fog=new Ki("#b9dbe5",650,2400);let l=new ir("#d5ecfa","#566143",2),h=new sr("#fff2d6",2.8);h.castShadow=!0,h.shadow.mapSize.set(a?1024:2048,a?1024:2048),Object.assign(h.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:.1,far:100}),h.shadow.normalBias=.025,o.add(l,h,h.target);let d=al(s),p=new Map,f=new Map,g=P=>(p.has(P)||p.set(P,d.forColor(P)||new Bt({color:P,roughness:.85})),p.get(P)),x=(P,V)=>(f.has(P)||f.set(P,V()),f.get(P)),m=(P,V,te,ue=[0,0,0],Le=[1,1,1])=>{let Je=new gt(V,te);return Je.position.set(...ue),Je.scale.set(...Le),Je.castShadow=Je.receiveShadow=!0,P.add(Je),Je},u=(P,V,te,ue)=>m(P,x("box",()=>new an),g(V),te,ue),_=(P,V,te,ue)=>m(P,x("cylinder",()=>new Ht(1,1,1,12)),g(V),te,ue),w=(P,V,te,ue)=>m(P,x("sphere",()=>new bn(1,16,12)),g(V),te,ue),y={mat:g,geo:x,mesh:m,cube:u,tube:_,ell:w},R=new Be,A=new Be,L=P=>{let V=new Map;P.updateMatrix();for(let te of[...P.children])if(te.isMesh){te.updateMatrix();let ue=te.geometry.clone().applyMatrix4(te.matrix);V.has(te.material)||V.set(te.material,[]),V.get(te.material).push(ue),P.remove(te)}for(let[te,ue]of V){let Le=ds(ue,!1);ue.forEach(ct=>ct.dispose());let Je=new gt(Le,te);Je.castShadow=Je.receiveShadow=!0,P.add(Je)}},z=(P,V)=>{let te=new Set(P.legs.map(mt=>mt.shoe)),ue=0,Le=0,Je=0;P.root.traverse(mt=>{mt.isMesh&&ue++});let ct=mt=>{for(let ut of[...mt.children])ut.isMesh||ct(ut);let yt=new Map;for(let ut of[...mt.children])ut.isMesh&&!te.has(ut)&&!ut.isInstancedMesh&&(yt.has(ut.material)||yt.set(ut.material,[]),yt.get(ut.material).push(ut));for(let[ut,It]of yt)if(It.length>1){let Ln=It.map(W=>(W.updateMatrix(),W.geometry.clone().applyMatrix4(W.matrix))),Xt=ds(Ln,!1);Ln.forEach(W=>W.dispose());let I=new gt(Xt,ut);I.name=`${V}-rigid-batch-${Je++}`,I.castShadow=It.some(W=>W.castShadow),I.receiveShadow=It.some(W=>W.receiveShadow),It.forEach(W=>mt.remove(W)),mt.add(I)}};ct(P.root),P.root.traverse(mt=>{mt.isMesh&&Le++}),P.root.userData.rigidBatchProfile={sourceMeshes:ue,renderMeshes:Le,batches:Je,animatedShoes:te.size}},S=(P,V,te)=>{let ue=new Be;ue.name="campaign-supply-cache-"+P,ue.position.set(V/lt,ri(V,te),te/lt),R.add(ue),u(ue,"#a98961",[0,.34,0],[1.45,.68,.88]),u(ue,"#debb63",[0,.72,0],[1.52,.09,.94]);for(let Le of[-.54,.54])u(ue,"#debb63",[Le,.35,.46],[.1,.62,.06]);u(ue,"#bd6e4e",[-1.02,.42,.04],[.42,.84,.55]),u(ue,"#394447",[-1.02,.87,.04],[.2,.08,.22]);for(let Le of[-1.15,-.89])u(ue,"#394447",[Le,.75,.04],[.05,.24,.05]);return u(ue,"#394447",[-1.02,.84,.04],[.26,.05,.05]),u(ue,"#596b4e",[.93,.23,.04],[.72,.46,.58]),u(ue,"#394447",[.93,.48,.04],[.48,.05,.26]),u(ue,"#e2dbc7",[.82,.86,-.03],[.7,.34,.5]),u(ue,"#bd6e4e",[.82,.87,.235],[.34,.08,.025]),u(ue,"#bd6e4e",[.82,.87,.235],[.08,.25,.025]),ue.userData.supplyDetails={crate:!0,fuelCan:!0,medkit:!0,ammoBox:!0},L(ue),ue};o.add(R,A);let M=a?96:192,T=Math.max(...fn.map(P=>P.radius)),F=[];for(let P of fn){let V=Math.max(a?48:72,Math.round(M*P.radius/T/8)*8),te=Gc(P,{segments:V});te.userData.terrainSegments=V,F.push(te),te.scale.set(1/lt,1,1/lt),te.position.set(P.x/lt,0,P.z/lt);let ue=te.geometry.attributes.position;for(let de=0;de<ue.count;de++)ue.setY(de,xr(P.x+ue.getX(de),P.z+ue.getZ(de),P));let Le=new Float32Array(ue.count*3),Je=new Qe;for(let de=0;de<ue.count;de++){let be=Math.hypot(ue.getX(de),ue.getZ(de))/P.radius;Je.set(be>.8?"#fff7e4":P.biome==="rocky"?"#d1d4c5":"#dce2c8"),Je.toArray(Le,de*3)}te.geometry.setAttribute("color",new Kt(Le,3)),te.geometry.computeVertexNormals(),te.material.dispose(),te.material=dl(d,lt),te.material.vertexColors=!0,R.add(te);let ct=bt[P.id],mt=new Be,yt=xr(ct.land.x,ct.land.z);mt.name="pier-"+P.id,mt.position.set(ct.land.x/lt,yt,ct.land.z/lt),mt.rotation.y=Math.atan2(ct.ux,ct.uz),R.add(mt);let ut=xl(ct.end,ct.land)/lt,It=Math.ceil(ut/.26),Ln=new Dt(x("box",()=>new an),g("#a98961"),It+1),Xt=new Pt;Ln.name="pier-deck-"+P.id;for(let de=0;de<=It;de++){let be=ut*de/It;Xt.position.set(0,(ct.deck-yt)*de/It-.075,be),Xt.scale.set(ct.width/lt,.15,ut/It+.006),Xt.updateMatrix(),Ln.setMatrixAt(de,Xt.matrix)}Ln.castShadow=Ln.receiveShadow=!0,mt.add(Ln);let I=x("pier-piling",()=>new Ht(1,1,1,12)),W=new Dt(I,g("#876742"),8);W.name="pier-pilings-"+P.id;let ae=0;for(let de of[-.8,.8])for(let be of[0,ut*.33,ut*.66,ut]){let rt=(ct.deck-yt)*be/ut;Xt.position.set(de,rt-.65,be),Xt.scale.set(.075,1.6,.075),Xt.updateMatrix(),W.setMatrixAt(ae++,Xt.matrix)}W.castShadow=W.receiveShadow=!0,W.instanceMatrix.needsUpdate=!0,W.computeBoundingSphere(),mt.add(W);let K=new Dt(I,g("#394447"),8);K.name="pier-bollards-"+P.id;let _e=0;for(let de of[-.72,.72])for(let be of[ut*.78,ut*.98]){let rt=(ct.deck-yt)*be/ut;Xt.position.set(de,rt+.25,be),Xt.scale.set(.075,.5,.075),Xt.updateMatrix(),K.setMatrixAt(_e++,Xt.matrix),Xt.position.set(de,rt+.51,be),Xt.scale.set(.13,.08,.13),Xt.updateMatrix(),K.setMatrixAt(_e++,Xt.matrix)}K.castShadow=K.receiveShadow=!0,K.instanceMatrix.needsUpdate=!0,K.computeBoundingSphere(),mt.add(K),["paradise","smugglers","highlands"].includes(P.id)&&S(P.id,P.x,P.z)}S("jungle",ot.supply.x,ot.supply.z);let D=Math.max(ms.maxX-ms.minX,ms.maxZ-ms.minZ)/lt+12e3,C=hl(fn.map(P=>[P.x/lt,P.z/lt,P.radius/lt,P.radius/lt]),{size:D,coastSeeds:fn.map(P=>P.coastSeed)});R.add(C.mesh);let U=ul(5e3);R.add(U);let B=fl(R,fn,{scale:lt,height:xr,surfaces:d,small:a,dense:!0,lod:!0,clear:(P,V,te)=>mr({x:V,z:te},P.id,gr)||P.id==="home"&&ml(V,te)||P.id==="jungle"&&(xl({x:V,z:te},ot.cave)<100||xl({x:V,z:te},ot.supply)<58)||P.id==="fortress"&&Math.abs(V-Zt.x)<125&&Math.abs(te-Zt.z)<155||xl({x:V,z:te},bt[P.id].land)<90}),q=pl(R,{scale:lt,height:xr,surfaces:d,helpers:y,village:gr,paths:ra,marketPoint:id}),{boat:k,wake:re}=sd(R,y),ne=new Be;ne.name="harbor-fuel-pump",ne.position.set(ot.pump.x/lt,ri(ot.pump.x,ot.pump.z),ot.pump.z/lt),R.add(ne),u(ne,"#a98961",[0,.06,0],[1.05,.12,.92]),u(ne,"#e6d6b8",[0,.68,0],[.75,1.24,.65]),u(ne,"#bd6e4e",[0,1.34,0],[.82,.28,.72]),u(ne,"#263f41",[0,.99,.34],[.48,.25,.045]),u(ne,"#e8d99e",[0,.99,.37],[.31,.1,.018]),_(ne,"#2d3435",[.53,.72,0],[.035,1.18,.035]);let ye=u(ne,"#394447",[.53,.39,.29],[.1,.24,.08]);ye.rotation.z=-.22,u(ne,"#bd6e4e",[0,.39,.35],[.3,.1,.055]),_(ne,"#e6d6b8",[0,2.18,-.06],[.055,1.42,.055]);let De=_(ne,"#bd6e4e",[0,2.9,-.06],[.42,.1,.42]);De.rotation.x=Math.PI/2;let ke=_(ne,"#f3dfbe",[0,2.9,.005],[.31,.115,.31]);ke.rotation.x=Math.PI/2,ne.userData.fuelDetails={display:!0,hose:!0,nozzle:!0,marker:!0},L(ne);let nt=new Be;nt.name="campaign-cave-entrance",nt.position.set(ot.cave.x/lt,ri(ot.cave.x,ot.cave.z),ot.cave.z/lt),R.add(nt);let tt=[[-2,.45,.02,.55,.55,.85,-.12],[-2,1.15,-.02,.58,.7,.95,.08],[-1.9,1.9,.04,.62,.72,.9,-.09],[-1.55,2.55,-.03,.72,.6,.9,.14],[2,.45,-.02,.55,.55,.85,.12],[2,1.15,.03,.58,.7,.95,-.08],[1.9,1.9,-.04,.62,.72,.9,.09],[1.55,2.55,.02,.72,.6,.9,-.14],[-1,2.9,.03,.72,.48,.9,-.1],[-.35,3.05,-.03,.68,.45,.92,.06],[.35,3.05,.02,.68,.45,.92,-.06],[1,2.9,-.02,.72,.48,.9,.1]],Y=new Pt,$=new Dt(x("cave-mouth-rock",()=>new bn(1,12,8)),g("#92968b"),tt.length);$.name="cave-entrance-rocks",$.castShadow=!0,$.receiveShadow=!0,tt.forEach(([P,V,te,ue,Le,Je,ct],mt)=>{Y.position.set(P,V,te),Y.scale.set(ue,Le,Je),Y.rotation.set(0,0,ct),Y.updateMatrix(),$.setMatrixAt(mt,Y.matrix)}),$.instanceMatrix.needsUpdate=!0,$.computeBoundingSphere(),nt.add($),u(nt,"#171e19",[0,1.25,-.85],[2.8,2.5,.15]);let fe=new Dt(x("cave-torch-handle",()=>new Ht(1,1,1,7)),g("#4c3525"),2);fe.name="cave-entrance-torches",fe.castShadow=!0;let Ue=new Bt({color:"#ffcf75",emissive:"#ff7f32",emissiveIntensity:1.15,roughness:.55}),Te=new Dt(x("cave-torch-flame",()=>new Xn(1,1,7)),Ue,2);Te.name="cave-entrance-flames",[-1,1].forEach((P,V)=>{Y.position.set(P*1.18,1.15,.18),Y.scale.set(.035,.85,.035),Y.rotation.set(0,0,-P*.15),Y.updateMatrix(),fe.setMatrixAt(V,Y.matrix),Y.position.set(P*1.18,1.65,.18),Y.scale.set(.12,.22,.12),Y.rotation.set(0,0,P*.08),Y.updateMatrix(),Te.setMatrixAt(V,Y.matrix)}),fe.instanceMatrix.needsUpdate=!0,Te.instanceMatrix.needsUpdate=!0,fe.computeBoundingSphere(),Te.computeBoundingSphere(),nt.add(fe,Te),nt.userData.entranceDetails={archStones:12,torches:2,clearOpening:!0};let Ee=new Be;Ee.name="guarded-estate",Ee.position.set(Zt.x/lt,.85,Zt.z/lt),R.add(Ee),u(Ee,"#e2dbc7",[0,1.55,0],[8,3.1,8]),u(Ee,"#a68854",[0,3.2,0],[8.6,.25,8.6]),u(Ee,"#e2dbc7",[0,4.35,-.4],[6.5,2.3,6.5]);for(let P of[-1,1]){let V=u(Ee,"#ba7655",[P*1.7,5.9,-.4],[3.7,.15,7.4]);V.rotation.z=-P*.3}u(Ee,"#313f38",[0,1.2,4.03],[1.65,2.4,.08]);for(let P of[-2.7,2.7])for(let V of[1.7,4.3])u(Ee,"#425761",[P,V,4.04],[1.15,1.3,.06]),u(Ee,"#e2dbc7",[P,V,4.11],[.08,1.38,.08]),u(Ee,"#e2dbc7",[P,V,4.11],[1.2,.08,.08]);for(let P of[-1.4,1.4])_(Ee,"#e2dbc7",[P,1.3,4.65],[.16,2.6,.16]);u(Ee,"#a68854",[0,2.67,4.65],[3.3,.2,1.4]);for(let P=0;P<3;P++)u(Ee,"#92968b",[0,-.03+P*.06,4.4+P*.4],[2.6,.15,1.25-P*.25]);for(let P of[-3.4,3.4])for(let V of[1.7,4.3]){u(Ee,"#587e7c",[P,V,4.07],[.32,1.35,.1]);for(let te=0;te<8;te++)u(Ee,"#876742",[P,V-.5+te*.14,4.14],[.3,.025,.045])}u(Ee,"#e2dbc7",[0,3.1,4.55],[8.5,.16,1.25]);for(let P=-10;P<=10;P++)_(Ee,"#e2dbc7",[P*.39,3.57,5.05],[.033,.83,.033]);u(Ee,"#e2dbc7",[0,4,5.05],[8.5,.08,.08]);for(let P of[-2.45,2.45]){u(Ee,"#a98961",[P,.3,4.62],[1.25,.42,.55]);for(let V=-2;V<=2;V++){let te=w(Ee,V%2?"#6f8f58":"#88a866",[P+V*.2,.67+Math.abs(V)*.025,4.62],[.18,.38,.18]);te.rotation.z=V*.12}}let ft=new Bt({color:"#ffe4a8",emissive:"#ffb85c",emissiveIntensity:.72,roughness:.34});for(let P of[-1.03,1.03]){u(Ee,"#394447",[P,2.05,4.14],[.08,.1,.24]);let V=w(Ee,"#ffe4a8",[P,1.88,4.27],[.13,.19,.13]);V.material=ft}let N=_(Ee,"#d4a957",[0,3.02,4.11],[.38,.1,.38]);N.rotation.x=Math.PI/2,Ee.userData.estateDetails={planters:2,lanterns:2,crest:!0},L(Ee),Ee.userData.cameraBlocker=!0;let Mt=[q.buildings,Ee];Mt.forEach(P=>P.updateWorldMatrix(!0,!0));let et={};function He(P,V=11,te=15){let ue=new Be;ue.name=P,A.add(ue),et[P]=ue,u(ue,P==="cave"?"#777a6b":"#a68854",[0,-.1,1],[V,.2,te]);let Le=new Be;Le.name=P+"-walls",ue.add(Le);for(let ct of[-V/2,V/2])u(Le,P==="cave"?"#92968b":"#e2dbc7",[ct,1.65,1],[.3,3.3,te]);u(Le,P==="cave"?"#92968b":"#e2dbc7",[0,1.65,1-te/2],[V,3.3,.3]),L(Le),u(ue,"#313f38",[0,1.1,te/2-.2],[1.7,2.2,.15]);let Je=new rr(P==="cave"?"#ffd9a0":"#ffeccf",22,18,1.6);return Je.position.set(0,2.7,1),ue.add(Je),ue.userData.shellDetails={sourceMeshes:5,renderMeshes:3},ue}let Se=He("cave",12,17),Rt=x("cave-formation",()=>new Xn(1,1,9)),Ce=new Dt(Rt,g("#777a6b"),16),Xe=new Pt;Ce.name="cave-formations";let Wt=[[-5.2,-5.4,.34,.92],[-5.2,-1.7,.27,.68],[-5.2,2.1,.38,1.06],[-5.2,5.1,.25,.78],[5.2,-4.1,.31,.84],[5.2,-.3,.39,1.12],[5.2,3.4,.28,.72],[3.6,-6.7,.42,1.18]],Nt=0;for(let[P,V,te,ue]of Wt)Xe.position.set(P,ue/2,V),Xe.rotation.set(0,Nt*.71%Math.PI,0),Xe.scale.set(te,ue,te),Xe.updateMatrix(),Ce.setMatrixAt(Nt++,Xe.matrix),Xe.position.set(-P,3.3-ue*.48,V+.55),Xe.rotation.set(0,Nt*.53%Math.PI,Math.PI),Xe.scale.set(te*.82,ue*.92,te*.82),Xe.updateMatrix(),Ce.setMatrixAt(Nt++,Xe.matrix);Ce.castShadow=Ce.receiveShadow=!0,Ce.instanceMatrix.needsUpdate=!0,Ce.computeBoundingSphere(),Se.add(Ce),Se.userData.caveDetails={stalactites:8,stalagmites:8,clearCenter:!0};let E=new Be;E.name="cave-evidence-table",Se.add(E),u(E,"#a98961",[0,.75,-2],[2,.12,1.2]);for(let P of[-.75,.75])for(let V of[-2.45,-1.55])_(E,"#876742",[P,.35,V],[.065,.7,.065]);for(let P of[-2.47,-1.53])u(E,"#876742",[0,.57,P],[1.72,.2,.07]);u(E,"#876742",[0,.56,-1.38],[.72,.27,.08]),w(E,"#394447",[0,.56,-1.32],[.045,.045,.04]),_(E,"#394447",[.72,.86,-2.18],[.17,.1,.17]);let v=new Bt({color:"#ffe4a8",emissive:"#ff9f45",emissiveIntensity:1.05,roughness:.28,transparent:!0,opacity:.88}),Z=w(E,"#ffe4a8",[.72,1.08,-2.18],[.14,.22,.14]);Z.material=v,_(E,"#394447",[.72,1.31,-2.18],[.12,.07,.12]),E.userData.evidenceDetails={legs:4,drawer:!0,lantern:!0,newspaper:!0,hiddenGun:!0},L(E);let ee=document.createElement("canvas");ee.width=256,ee.height=320;let oe=ee.getContext("2d");oe.fillStyle="#ddd5bd",oe.fillRect(0,0,256,320),oe.fillStyle="#3a3b32",oe.font="bold 26px serif",oe.fillText("ISLAND DAILY",18,38),oe.fillRect(18,51,220,3);for(let P=0;P<20;P++)oe.fillRect(18,72+P*10,94-P%4*6,2),oe.fillRect(128,72+P*10,104-P%3*8,2);let Q=new Ni(ee);Q.colorSpace=Yt;let Fe=new gt(new Cn(.9,1.05),new Bt({map:Q,side:qt}));Fe.name="cave-newspaper",Fe.rotation.x=-Math.PI/2,Fe.position.set(0,.83,-2),Se.add(Fe);function pe(P){let V=new Be;P.add(V),u(V,"#333a3d",[0,0,.06],[.12,.12,.34]);let te=u(V,"#695646",[0,-.11,-.03],[.1,.23,.13]);return te.rotation.x=-.22,u(V,"#8b9294",[0,.08,.03],[.11,.035,.3]),V}let we=pe(Se);we.name="cave-hidden-gun",we.position.set(0,.87,-2),we.rotation.y=Math.PI/2;let ze=He("estate",11,15),ce=new Be;ce.name="estate-fixtures",ze.add(ce),u(ce,"#816947",[0,.42,-4.6],[2.6,.85,.9]),u(ce,"#decc9f",[0,.05,1],[3,.025,10]);for(let P=0;P<6;P++)u(ce,"#777a6b",[3.5,.06*P,-4.75+P*.28],[1.7,.12,.65]);ce.userData.batchDetails={sourceMeshes:8,renderMeshes:3},L(ce);let me=new Be;me.name="estate-interior-details",ze.add(me);let qe=["#6f443d","#40626a","#718052"];for(let[P,V]of[-2.7,0,2.7].entries())u(me,"#a68854",[V,1.9,-6.31],[1.42,1.22,.08]),u(me,qe[P],[V,1.9,-6.25],[1.12,.92,.045]);u(me,"#a68854",[0,.93,-6.29],[8.7,.08,.08]);for(let P of[-4.35,4.35]){u(me,"#394447",[P,2.02,-6.24],[.1,.32,.1]);let V=w(me,"#ffe4a8",[P,1.79,-6.15],[.14,.19,.11]);V.material=ft}u(me,"#394447",[0,.86,-4.58],[1.12,.025,.52]);for(let P of[-.52,0,.52])u(me,"#d8d2c3",[P,.88,-4.57],[.4,.012,.3]);_(me,"#394447",[.93,1.08,-4.58],[.035,.42,.035]);let Oe=w(me,"#ffe4a8",[.93,1.34,-4.58],[.18,.16,.18]);Oe.material=ft,ze.userData.interiorDetails={portraits:3,sconces:2,documents:3,deskLamp:!0},L(me);let xe=new gt(new yi(.13,.036,8,16),new Bt({color:"#f8ce60",emissive:"#8c6322",emissiveIntensity:.5}));xe.position.set(0,.88,-3),ze.add(xe),u(xe,"#debb63",[0,-.2,0],[.065,.32,.065]);let je=He("cellar",11,15),G=[],le=new Be;le.name="cellar-static",je.add(le);let ge=Object.entries(et);for(let P of In){let V=new Be;V.name="cell-door-"+P.id,V.position.set(P.x/lt,0,-1.5),je.add(V),G[P.id]=V;for(let Le=-2;Le<=2;Le++)_(V,"#475759",[Le*.32,1.3,0],[.025,2.6,.025]);for(let Le of[.1,2.5])u(V,"#475759",[0,Le,0],[1.65,.055,.055]);for(let Le of[.45,2.15])_(V,"#394447",[-.78,Le,.07],[.045,.12,.045]);m(V,x("cell-padlock",()=>new yi(.09,.022,6,12)),g("#a68854"),[.61,1.42,.07]),u(V,"#a68854",[.61,1.27,.07],[.18,.2,.08]),L(V);let te=P.x/lt,ue=["#738b90","#9b796d"][P.id%2];u(le,"#a98961",[te,.18,-4.8],[1.55,.36,.8]),u(le,"#e2dbc7",[te,.4,-4.8],[1.5,.1,.8]),u(le,ue,[te,.47,-4.65],[1.42,.045,.48]),u(le,"#d8d2c3",[te,.5,-5.08],[.64,.1,.24])}for(let P of[-3.8,0,3.8]){u(le,"#394447",[P,2.54,-6.28],[.36,.15,.1]);let V=w(le,"#ffe4a8",[P,2.34,-6.2],[.15,.2,.11]);V.material=ft}je.userData.cellarDetails={cells:5,hinges:10,padlocks:5,lamps:3,bedding:5},L(le);function Pe(P,V,te){let ue=P.hairStyles[V],Le=new Set;return ue.name=`${te}-hair-${V}`,ue.visible=!0,ue.traverse(Je=>{Je.isMesh&&Le.add(Je)}),P.hairStyles.forEach((Je,ct)=>{ct!==V&&Je.removeFromParent()}),P.hairStyles=[ue],P.hairParts=P.hairParts.filter(Je=>Le.has(Je)),P.spear.removeFromParent(),P.raft.removeFromParent(),Object.values(P.props).forEach(Je=>Je.removeFromParent()),P.spear=P.raft=null,P.props={},P.root.userData.renderProfile={hairVariants:1,unusedToolMeshes:0},z(P,te),P}let se=Pe(t({shirt:"#577c87",skin:"#ddb08c",hair:"#40362f"},"player",y),0,"campaign-player");se.root.name="campaign-player",o.add(se.root);let ie=new Map,Ne=new Map,Ye=new Uint8Array(In.length),St=In.map(()=>({x:0,z:0})),xt={swing:0,step:0,bounce:0},ln={gate:{shirt:"#526252",skin:"#c29574",hair:"#302e28",style:0},patrol:{shirt:"#59665a",skin:"#a96f55",hair:"#211f1e",style:1},hall:{shirt:"#4b5958",skin:"#d1a17d",hair:"#5b4032",style:2},boss:{shirt:"#34383a",skin:"#b67d60",hair:"#251f1c",style:1}};for(let P of e().guards){let V=ln[P.id],te=Pe(t(V,"guard",y),V.style,"campaign-guard-"+P.id);if(te.root.name="campaign-guard-"+P.id,te.root.userData.guardProfile={boss:P.id==="boss",style:V.style},P.id==="boss"){let ue=new Be;ue.name="campaign-boss-insignia",te.hips.add(ue);for(let Je of[-1,1])u(ue,"#d2aa58",[Je*.2,.56,.02],[.12,.035,.18]);let Le=u(ue,"#8f2f2d",[0,.34,.15],[.055,.52,.025]);Le.rotation.z=-.48,te.root.userData.guardProfile.insignia=!0}o.add(te.root),pe(te.arms[1].forearm).position.set(0,-.24,.14),ie.set(P.id,te)}let xn=[{shirt:"#8da4b1",skin:"#c99370",hair:"#302d2a",style:0,scale:1.02},{shirt:"#b78876",skin:"#e1b894",hair:"#6a4938",style:1,scale:.96},{shirt:"#9caa8c",skin:"#b98264",hair:"#2f2927",style:2,scale:1},{shirt:"#c3b487",skin:"#dca984",hair:"#704936",style:1,scale:.72},{shirt:"#92b2b6",skin:"#e4bb96",hair:"#3f302b",style:2,scale:.76}];for(let P of In){let V=xn[P.id],te=Pe(t(V,"resident",y),V.style,"campaign-prisoner-"+P.id);te.root.name="campaign-prisoner-"+P.id,te.root.scale.setScalar(V.scale),te.root.userData.residentProfile={child:P.child,style:V.style,scale:V.scale},o.add(te.root),Ne.set(P.id,te)}let _n=new Be;c.add(_n),pe(_n).position.set(.26,-.23,-.48);let Fn=w(_n,"#ddb08c",[.24,-.32,-.4],[.065,.085,.08]),Vi=_(_n,"#577c87",[.22,-.4,-.3],[.085,.24,.085]);Vi.rotation.x=-.5;let $n=new gt(new yi(.42,.035,8,32),new vn({color:"#f3d48a"}));$n.rotation.x=-Math.PI/2,o.add($n);let Dn=new it(new Float32Array(6),3),Kn=new Qi(new Ut().setAttribute("position",Dn),new Ui({color:"#ffe8ad"}));Kn.frustumCulled=!1,o.add(Kn);let bi=new ar,pn=new O,_r={position:new O,target:new O},Si=[],mn={x:0,z:0,surface:0,yaw:0,pitch:0,mode:"first",distance:4.6},wi=P=>P.distance>.2,Gi={height:25},wn={},si=[],nn=0,b=.05,H="first",j=0,J=!0,X=!1,he=null,ve,Re=0,Ie=0,$e={},Ke={},Ge={},ht=-1/0,wt=0,Tt=e(),Et=gl(Tt).target;Et&&(nn=Math.atan2(Tt.p.x-Et.x,Tt.p.z-Et.z));function pt(P,V,te,ue,Le,Je,ct=!1){Re++;let mt=P.root.userData.campaignPoseState||(P.root.userData.campaignPoseState={});if(!Vx(mt,V,te,ue,Le,ct))return;Ie++,P.root.position.set(V.x/lt,te,V.z/lt),P.root.rotation.set(0,0,0),P.rig.rotation.y=ue;let yt=kx(xt,Je,Le);for(let ut of P.legs){let It=(ut.side<0?-yt.swing:yt.swing)*yt.step;ut.thigh.rotation.x=It,ut.calf.rotation.x=Math.max(0,-It),ut.shoe.rotation.x=-ut.calf.rotation.x*.6}for(let ut of P.arms)ut.arm.rotation.x=Le?(ut.side<0?yt.swing:-yt.swing)*.25:0,ut.arm.rotation.z=0,ut.forearm.rotation.x=-.18;P.hips.position.y=.87+yt.bounce*.009}function We(P){if(!J||X)return;let V=e(),te=P/1e3;j=P,Re=0,d.update(),U.material.uniforms.uTime.value=te;let ue=V.interior;Nx(Ke,ue,R,A,ge,o,l,h);let Le=ue?0:ri(V.p.x,V.p.z);if(se.root.visible=!V.boat||H==="third",!V.boat){let K=Ux(o,se.root);pt(se,V.p,Le,V.heading,V.walking,te,K)}se.rig.visible=H==="third",k.position.set((V.boat?V.p.x:bt[V.boatAt].x)/lt,.02,(V.boat?V.p.z:bt[V.boatAt].z)/lt),k.rotation.y=V.boat?V.heading:Math.atan2(bt[V.boatAt].ux,bt[V.boatAt].uz),k.rotation.z=V.boat?Math.sin(te*2)*.015:0,re.visible=V.boat&&V.walking,V.boat&&ad(se,k),Fe.visible=!V.paper,we.visible=V.paper&&!V.gun,xe.rotation.y=te,Fx(Ge,V.released,Ye,G);let Je=!1,ct=!1;for(let K of V.guards){K.id==="boss"&&(ct=K.hp<=0);let _e=ie.get(K.id),de=K.area===ue&&!V.boat&&(!K.area||V.island==="fortress");if(_e.root.visible=de,!de)continue;let be=K.x-V.p.x,rt=K.z-V.p.z,Ft=K.hp>0&&be*be+rt*rt<44100;Je||(Je=Ft),pt(_e,K,K.area?0:ri(K.x,K.z),Math.atan2(V.p.x-K.x,V.p.z-K.z),Ft,te,K.hp<=0),K.hp<=0?(_e.rig.rotation.x=-Math.PI/2,_e.root.position.y+=K.area?0:.15,_e.root.scale.setScalar(.8)):(_e.rig.rotation.x=0,_e.arms[1].arm.rotation.x=-1.05,_e.arms[1].forearm.rotation.x=-.35)}xe.visible=!V.key&&ct,V.released.length&&!V.boarded&&!V.boat&&(ue==="estate"||ue==="cellar"||V.island==="fortress")&&Ox(St,In,V.p,V.heading);for(let K of In){let _e=Ne.get(K.id),de=!!Ye[K.id],be=V.boarded?!1:de?!V.boat&&(ue==="estate"||ue==="cellar"||V.island==="fortress"):ue==="cellar";if(_e.root.visible=be,!be)continue;let rt=de?St[K.id]:K;pt(_e,rt,ue?0:ri(rt.x,rt.z),V.heading,de&&V.walking,te+K.id*.18)}let yt=qc(wn,V).target,ut=hd(cd(si,V),V.p),It=ut||yt;$n.visible=!!It,It&&$n.position.set(It.x/lt,(ue?0:ri(It.x,It.z))+.08,It.z/lt),$n.scale.setScalar(1+Math.sin(te*3)*.1),_n.visible=V.gun&&!V.boat&&H==="first",_n.position.z=V.shot?.025:0;let Ln=V.boat?.02+gs.eye-1.64:Le,Xt=V.boat?gs.seatZ:0;mn.x=V.p.x/lt+Math.sin(V.heading)*Xt,mn.z=V.p.z/lt+Math.cos(V.heading)*Xt,mn.surface=Ln,mn.yaw=nn,mn.pitch=b,mn.mode=H,mn.distance=V.boat?7.5:4.6;let I=ol(mn,_r);if(ue&&H==="third"&&(I.position.x=ea.clamp(I.position.x,-5.1,5.1),I.position.z=ea.clamp(I.position.z,-5,8.1)),!ue&&H==="third"){pn.subVectors(I.position,I.target);let K=pn.length();pn.normalize(),bi.set(I.target,pn),bi.far=K;let _e=ll(bi,Mt,!0,Si).find(wi);_e&&I.position.copy(I.target).addScaledVector(pn,Math.max(.35,_e.distance-.22)),I.position.y=Math.max(I.position.y,ri(I.position.x*lt,I.position.z*lt)+.24)}c.position.copy(I.position),c.lookAt(I.target),B.update(c.position);let W=!V.paused&&(V.walking||V.boat||Je),ae=zx($e,V,W)||W&&P-ht>=1e3/30;s.shadowMap.needsUpdate=ae,ae&&(cl(h,V.p.x/lt,V.p.z/lt,Gi),ht=P,wt++),C.update(te,c.position),U.position.copy(c.position),Kn.visible=!!V.shot,V.shot&&Bx(Dn,V.shot.from,V.shot.to,Le+1.35),ve!==ue&&(ve=ue,ue?nn=0:yt&&(nn=Math.atan2(V.p.x-yt.x,V.p.z-yt.z))),s.render(o,c)}function kt(){c.aspect=innerWidth/innerHeight,c.updateProjectionMatrix(),s.setSize(innerWidth,innerHeight,!1)}function at(P,V=0){e().paused||(nn+=P,b=ea.clamp(b+V,H==="first"?-.95:-.05,.75))}n.addEventListener("pointerdown",P=>{e().paused||P.button!==0||(he={id:P.pointerId,x:P.clientX,y:P.clientY},n.setPointerCapture(P.pointerId))}),n.addEventListener("pointermove",P=>{he?.id===P.pointerId&&(at(-(P.clientX-he.x)*.006,(P.clientY-he.y)*.005),he.x=P.clientX,he.y=P.clientY)});for(let P of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(P,()=>he=null);return n.addEventListener("webglcontextlost",P=>{P.preventDefault(),X=!0,J=!1,i?.()}),{frame:We,resize:kt,orbit:at,setCamera(P){H=P==="first"?"first":"third",b=H==="first"?.05:.22},get cameraMode(){return H},get enabled(){return J&&!X},vector:(P,V)=>({x:P*Math.cos(nn)+V*Math.sin(nn),z:-P*Math.sin(nn)+V*Math.cos(nn)}),aim:()=>nn+Math.PI,setEnabled(P){J=!!P&&!X},stats:()=>({calls:s.info.render.calls,triangles:s.info.render.triangles,eye:c.position.toArray(),camera:H,cameraBlockers:Mt.length,palmBatches:B.treeBatches.length,largestPalmBatch:Math.max(...B.treeBatches.map(P=>P.count)),posedCharacters:Re,poseUpdates:Ie,palmLodDistanceChecks:B.treeBatches.length+B.foliageBatches.length,palmTrunkTriangles:B.treeBatches.reduce((P,V)=>P+V.count*V.geometry.index.count/3,0),unshadowedPalmTrunkTriangles:B.treeBatches.filter(P=>!P.receiveShadow).reduce((P,V)=>P+V.count*V.geometry.index.count/3,0),palmCrownTriangles:B.foliageBatches.reduce((P,V)=>P+V.count*V.geometry.index.count/3,0),lowDetailPalmBatches:B.treeBatches.filter(P=>P.userData.lod.level==="low").length,terrainTriangles:F.reduce((P,V)=>P+V.geometry.index.count/3,0),shadowUpdates:wt}),dispose(){s.dispose(),d.dispose();let P=new Set([...f.values(),...B.lodGeometries]),V=new Set(p.values());o.traverse(te=>{if(te.geometry&&P.add(te.geometry),te.material)for(let ue of Array.isArray(te.material)?te.material:[te.material])V.add(ue)}),P.forEach(te=>te.dispose()),V.forEach(te=>te.dispose()),Q.dispose()}}}function xl(n,e){return Math.hypot(n.x-e.x,n.z-e.z)}function Gx(n){return ud({...n,makeHuman:$c})}var Ae=80,pd=[[1750,1300,1540,970],[3380,500,520,310],[4100,2400,390,290]],ki=(n,e,t)=>Math.max(e,Math.min(t,n)),Hx=n=>(n=ki(n,0,1),n*n*(3-2*n)),Wx=(n,e)=>Math.atan2(Math.sin(e-n),Math.cos(e-n)),Xx=Object.freeze({}),dd=Math.cos(1),fd=Math.sin(1);function Pn(n,e){let t=n*Ae,i=e*Ae,r=-1;for(let[a,o,c,l]of pd)r=Math.max(r,1-Math.hypot((t-a)/c,(i-o)/l));return r<=0?-.32:.015+Hx(r/.17)*(.25+.28*(1+Math.sin(n*.23+1.3)*Math.cos(e*.27))+.12*Math.sin(n*.7)*Math.sin(e*.6))}function md(n,e,t){return{x:n*Math.cos(t)+e*Math.sin(t),y:-n*Math.sin(t)+e*Math.cos(t)}}function gd(n,e,t=75){let i,r=t*t;for(let s of n||[]){let a=s.x-e.x,o=s.y-e.y,c=a*a+o*o;c<r&&(i=s,r=c)}return i}function xd(n,e,t,i){let r=e&&e.remaining-(i-t);return r>0?(n.kind=e.kind,n.phase=1-r/(qu[e.kind]||1e3),n):null}function _d(n,e){let t=e*1.3;return n.idleHip=Math.sin(e*1.7),n.idleArmSin=Math.sin(t),n.idleArmCos=Math.cos(t),n}function yd(n,e){let t=e*.7,i=e*.6;return n.xSin=Math.sin(t),n.xCos=Math.cos(t),n.zSin=Math.sin(i),n.zCos=Math.cos(i),n}function vd(n,e){let t=Math.sin(e*6)*.15;return n[0]=t,n[1]=-t,n[2]=t,n[3]=-t,n}function Md(n,e,t,i,r,s){return n.yawSin=Math.sin(t),n.yawCos=Math.cos(t),i||r?(n.phaseSin=Math.sin(e),n.phaseCos=Math.cos(e)):n.phaseSin=n.phaseCos=0,n.hips=(i?.9:.92)+(i?Math.cos(e*2)*.012:s.idleHip*.004),n}function bd(n,e,t,i=new O){let r=Math.min(240,t*.52),s=e.projectionMatrix.elements[0]*t/2,a=0;for(let o of n){o.userData.signScale||(o.userData.signScale=o.scale.clone()),o.scale.copy(o.userData.signScale),o.getWorldPosition(i);let c=Math.max(.1,i.distanceTo(e.position)),l=o.scale.x*s/c;l>r&&o.scale.multiplyScalar(r/l),a++}return a}function Sd(n,e,t={}){let s=ki(Math.hypot(n,e),.08,.855);return t.hip=-Math.atan2(e,-n)-Math.acos(ki((.43*.43+s*s-.43*.43)/(2*.43*s),-1,1)),t.knee=Math.PI-Math.acos(ki((.43*.43+.43*.43-s*s)/(2*.43*.43),-1,1)),t}function wd(n,e={}){let t=e.shirt||"#4c9cba",i=e.skin||"#dda879",r=e.hair||"#43332b",s=e.style||0;return n.lookShirt===t&&n.lookSkin===i&&n.lookHair===r&&n.lookStyle===s?!1:(n.lookShirt=t,n.lookSkin=i,n.lookHair=r,n.lookStyle=s,!0)}function Jc(n){return n?Math.max(...[-1,0,1].flatMap(e=>[-1,0,1].map(t=>{let i=n.point(e*n.width/2,t*n.depth/2);return Pn(i.x/Ae,i.y/Ae)}))):0}function Td(n,e,t){let i=e?.x??null,r=e?.y??null,s=t||0;return n.ready&&n.x===i&&n.y===r&&n.level===s?!1:(n.ready=!0,n.x=i,n.y=r,n.level=s,n.layout=Xu(e,t),n.elevation=Jc(n.layout),!0)}function Ed(n,e={}){let t=e.activities||{},i=t.completed||0,r=e.basePos?.x??null,s=e.basePos?.y??null,a=e.baseLevel??null,o=e.campfire??null,c=e.fire?.x??null,l=e.fire?.y??null,h=i>=1,d=i>=3,p=i>=6,f=d&&t.gardenClaimed<i,g=t.raceWon??null;return n.ready&&n.level===a&&n.baseX===r&&n.baseY===s&&n.campfire===o&&n.fireX===c&&n.fireY===l&&n.first===h&&n.garden===d&&n.flag===p&&n.harvest===f&&n.raceWon===g?!1:(n.ready=!0,n.level=a,n.baseX=r,n.baseY=s,n.campfire=o,n.fireX=c,n.fireY=l,n.first=h,n.garden=d,n.flag=p,n.harvest=f,n.raceWon=g,!0)}function Ad(n,e=[]){let t=n.values||(n.values=[]),i=!n.ready||n.count!==e.length,r=0;for(let s of e){let a=s.type??null,o=s.x??null,c=s.y??null,l=!!s.done,h=s.symbol??null,d=s.label??null;t[r]!==a&&(i=!0),t[r++]=a,t[r]!==o&&(i=!0),t[r++]=o,t[r]!==c&&(i=!0),t[r++]=c,t[r]!==l&&(i=!0),t[r++]=l,t[r]!==h&&(i=!0),t[r++]=h,t[r]!==d&&(i=!0),t[r++]=d}return t.length=r,n.ready=!0,n.count=e.length,i}function sa(n,e,t=0,i=0){let r=e?.x??null,s=e?.y??null;return n.ready&&n.pointX===r&&n.pointY===s&&n.offsetX===t&&n.offsetZ===i?!1:(n.ready=!0,n.pointX=r,n.pointY=s,n.offsetX=t,n.offsetZ=i,n.valid=r!==null&&s!==null,n.valid&&(n.x=r/Ae+t,n.z=s/Ae+i,n.y=Pn(n.x,n.z)),!0)}function Zc(n,e,t,i=Jc(t)){let r=Pn(n,e);if(!t)return r;let s=t.floor;if(Math.abs(n*Ae-s.x)<=s.w/2&&Math.abs(e*Ae-s.y)<=s.h/2)return Math.max(r,i+.16);let a=n*Ae-t.center.x,o=e*Ae-t.center.y,c=a*t.fy-o*t.fx,l=a*t.fx+o*t.fy;return Math.abs(c)<t.door/2&&l>t.depth/2&&l<t.depth/2+64?r+(Math.max(r,i+.16)-r)*(1-(l-t.depth/2)/64):r}function Cd(n,e,t={}){let i=(p,f,g,x,m)=>{let u=new gt(m,new Bt({color:f}));return u.position.set(...g),u.scale.set(...x),p.add(u),u},r=t.cube||((p,f,g,x)=>i(p,f,g,x,new an(1,1,1))),s=t.tube||((p,f,g,x)=>i(p,f,g,x,new Ht(1,1,1,10))),a=new Be,o=n.width/Ae,c=n.depth/Ae,l=n.wallHeight/Ae,h=n.roofRidge/Ae,d=n.door/Ae;a.name="base",a.position.set(n.center.x/Ae,e,n.center.y/Ae),a.rotation.y=n.yaw,r(a,"#a68854",[0,.08,0],[o,.16,c]).name="floor";for(let p of[-o/2+.1,o/2-.1])for(let f of[-c/2+.1,c/2-.1])s(a,"#876742",[p,l/2,f],[.075,l,.075]).name="post";for(let p of[-1,1]){let f=r(a,"#ba7655",[p*o/4,(l+h)/2,0],[Math.hypot(o/2+.2,h-l),.1,c+.36]);f.rotation.z=-p*Math.atan2(h-l,o/2+.2),f.name="roof"}for(let p of n.walls){let f=p.x-n.center.x,g=p.y-n.center.y,x=(f*n.fy-g*n.fx)/Ae,m=(f*n.fx+g*n.fy)/Ae;r(a,"#e2dbc7",[x,l/2,m],[n.fy?p.w/Ae:p.h/Ae,l,n.fy?p.h/Ae:p.w/Ae]).name="wall"}if(n.walls.length>=5){let p=n.doorHeight/Ae;r(a,"#845f3f",[0,(l+p)/2,c/2],[d,l-p,.125]).name="lintel"}for(let p of n.beds){let f=p.x-n.center.x,g=p.y-n.center.y,x=(f*n.fy-g*n.fx)/Ae,m=(f*n.fx+g*n.fy)/Ae;r(a,"#7d654b",[x,.17,m],[.65,.34,1.125]).name="bed",r(a,"#cec6a0",[x,.38,m],[.65,.14,1.125]),r(a,"#ede3bd",[x,.49,m-.35],[.5,.09,.26])}return a}function Rd(n,e,{cube:t,tube:i,ell:r}){if(n==="gather"&&(i(e,"#8c6944",[0,-.12,.15],[.025,.48,.025]),t(e,"#8e9891",[0,.1,.15],[.27,.1,.075])),n==="fish"){let s=i(e,"#b2915b",[0,.22,.25],[.014,1.25,.014]);s.rotation.x=-.6;let a=i(e,"#d0e6df",[0,.37,.75],[.003,.62,.003]);a.rotation.x=.6}if(n==="cook"){let s=i(e,"#80613d",[0,-.12,.18],[.016,.5,.016]);s.rotation.x=-.6,r(e,"#bb9457",[0,-.26,.3],[.07,.04,.14])}}function $c(n={},e="player",t={}){let i=new Map,r=new Map,s=t.mat||(C=>(i.has(C)||i.set(C,new Bt({color:C})),i.get(C))),a=t.geo||((C,U)=>(r.has(C)||r.set(C,U()),r.get(C))),o=t.mesh||((C,U,B,q=[0,0,0],k=[1,1,1])=>{let re=new gt(U,B);return re.position.set(...q),re.scale.set(...k),C.add(re),re}),c=t.ell||((C,U,B,q)=>o(C,a("ball",()=>new bn(1,14,10)),s(U),B,q)),l=t.cube||((C,U,B,q)=>o(C,a("box",()=>new an(1,1,1)),s(U),B,q)),h=t.tube||((C,U,B,q)=>o(C,a("cyl",()=>new Ht(1,1,1,10)),s(U),B,q)),d=new Be,p=new Be;d.add(p);let f=n.skin||"#dda879",g=n.hair||"#43332b",x=n.shirt||"#4c9cba",m=new Be;m.position.y=.87,p.add(m),c(m,"#3f4d4f",[0,.05,0],[.22,.17,.13]);let u=a("human-torso",()=>new Hs([new Ve(.16,.13),new Ve(.205,.2),new Ve(.215,.38),new Ve(.25,.49),new Ve(.26,.52),new Ve(.19,.57),new Ve(.09,.64)],18));o(m,u,s(x),[0,0,0],[1,1,.66]);for(let C of[-1,1]){let U=l(m,x,[C*.065,.6,.071],[.085,.075,.024]);U.rotation.z=-C*.3,l(m,x,[C*.11,.37,.142],[.105,.09,.022])}for(let C=0;C<4;C++)c(m,"#d7d5c2",[0,.24+C*.075,.15],[.009,.01,.005]);e==="guard"&&l(m,"#39483f",[0,.35,.11],[.34,.36,.09]),l(m,"#3b4c48",[0,.135,-.01],[.4,.045,.255]),h(m,f,[0,.64,0],[.064,.13,.064]);let _=new Be;_.position.y=.79,m.add(_),c(_,f,[0,0,0],[.135,.175,.133]),c(_,f,[-.137,-.005,0],[.025,.048,.025]),c(_,f,[.137,-.005,0],[.025,.048,.025]),c(_,f,[0,-.015,.136],[.026,.033,.036]);for(let C of[-1,1])c(_,"#f6f3df",[C*.052,.02,.115],[.03,.017,.014]),c(_,"#31433e",[C*.053,.02,.128],[.012,.013,.007]),l(_,g,[C*.052,.061,.11],[.062,.01,.014]);l(_,"#af735b",[0,-.071,.117],[.051,.009,.012]);let w=a("hair",()=>new bn(1,16,10,0,Math.PI*2,0,Math.PI*.56));o(_,w,s(e==="nela"?"#8d4931":g),[0,.015,-.015],[.145,.18,.143]);let y=[new Be,new Be,new Be];y.forEach(C=>_.add(C));let R=_.children.find(C=>C.isMesh&&C.geometry===w);_.remove(R),y[0].add(R),o(y[1],w,s(g),[0,.015,-.015],[.145,.18,.143]),c(y[1],g,[0,-.04,-.17],[.072,.14,.08]);for(let C=0;C<12;C++){let U=C*Math.PI*2/12;c(y[2],g,[Math.sin(U)*.1,.1+C%2*.018,Math.cos(U)*.1-.015],[.066,.067,.066])}if(c(y[2],g,[0,.15,-.015],[.09,.054,.09]),e==="nela"&&c(_,"#8d4931",[0,-.045,-.145],[.125,.21,.07]),y.forEach((C,U)=>C.visible=U===(n.style||0)),e==="leon")h(_,"#c5a775",[0,.15,0],[.16,.12,.16]),h(_,"#c5a775",[0,.095,0],[.22,.028,.22]),l(m,"#e4cda1",[0,.23,.145],[.33,.42,.025]);else if(e==="player"){c(m,"#5d735b",[0,.36,-.17],[.18,.22,.09]);for(let C of[-1,1])l(m,"#b6caa4",[C*.17,.38,-.04],[.034,.35,.029])}let A=[],L=[];for(let C of[-1,1]){let U=new Be;U.position.set(C*.27,.54,0),m.add(U);let B=c(U,x,[-C*.018,-.025,0],[.105,.13,.11]);B.name="human-shoulder",o(U,a("human-upper-arm",()=>new Ht(.068,.086,.19,12)),s(x),[0,-.105,0]),o(U,a("human-lower-upper-arm",()=>new Ht(.055,.064,.15,12)),s(f),[0,-.24,0]);let q=new Be;q.position.y=-.31,U.add(q);let k=c(q,f,[0,0,0],[.061,.063,.061]);k.name="human-elbow",o(q,a("human-forearm",()=>new Ht(.057,.04,.26,12)),s(f),[0,-.13,0]),c(q,f,[0,-.28,0],[.06,.082,.046]),A.push({arm:U,forearm:q,side:C});let re=new Be;re.position.set(C*.115,0,0),m.add(re),o(re,a("human-thigh",()=>new Ht(.092,.108,.42,12)),s("#52625f"),[0,-.21,0]);let ne=new Be;ne.position.y=-.43,re.add(ne);let ye=c(ne,"#52625f",[0,0,.014],[.079,.074,.075]);ye.name="human-knee",o(ne,a("human-calf",()=>new Ht(.069,.046,.36,12)),s("#52625f"),[0,-.18,0]);let De=c(ne,"#52625f",[0,-.36,0],[.052,.06,.052]);De.name="human-ankle";let ke=c(ne,"#4b3b2e",[0,-.395,.055],[.075,.052,.14]);L.push({thigh:re,calf:ne,shoe:ke,side:C})}let z=new Be;h(z,"#8c6944",[0,.56,0],[.018,1.75,.018]),c(z,"#dad9c5",[0,1.45,0],[.045,.15,.03]),z.position.set(.35,.2,.08),p.add(z),z.visible=!1;let S={};for(let C of["gather","fish","cook"]){let U=new Be;Rd(C,U,{cube:l,tube:h,ell:c}),U.position.set(0,-.28,0),A[1].forearm.add(U),U.visible=!1,S[C]=U}let M=new Be;d.add(M);for(let C=0;C<5;C++){let U=h(M,"#a17d48",[(C-2)*.25,.08,0],[.115,1.7,.115]);U.rotation.x=Math.PI/2}for(let C of[-.5,.5])l(M,"#6e5937",[0,.19,C],[1.24,.05,.1]);M.visible=!1;let T=[],F=[],D=[];return p.traverse(C=>{C.isMesh&&(C.material===s(x)&&T.push(C),C.material===s(f)&&F.push(C),C.material===s(g)&&D.push(C))}),{root:d,rig:p,hips:m,head:_,arms:A,legs:L,spear:z,raft:M,shirtParts:T,skinParts:F,hairParts:D,hairStyles:y,props:S,yaw:0,lastX:null,lastZ:null,phase:0}}function Id(n,e){let t=e&&Yu(e.kind,e.phase);n.rig.rotation.x=t?.bend||0;for(let[i,r]of Object.entries(n.props))r.visible=!!t&&e.kind===i;if(t)for(let i of n.arms)i.arm.rotation.x=i.side<0?t.left:t.right,i.forearm.rotation.x=-.25,i.arm.rotation.z=-i.side*.08+((i.side>0||e.kind==="cheer")&&t.wave||0)}function Pd(n,e,t,i={}){let r=n.phase||0,s=e*.65+r,a=Math.sin(s),o=Math.cos(s),c=n.x+a*14,l=n.y+o*14;return t(c,l)?(i.x=c/Ae,i.z=l/Ae,i.y=.055+Math.sin(e*3+r)*.008,i.yaw=Math.atan2(o,-a),i.yawSin=o,i.yawCos=-a,i):null}function _l(n,e,t,i,r,s,a,o,c=0){return n.position.set(e.x+e.yawSin*r+e.yawCos*t,e.y+i,e.z+e.yawCos*r-e.yawSin*t),n.rotation.set(c,e.yaw,0),n.scale.set(s,a,o),n.updateMatrix(),n}function qx({canvas:n,terrain:e,getState:t,onLost:i}){let r=new ls({canvas:n,antialias:!0,powerPreference:"high-performance"}),s=innerWidth<=700;r.setPixelRatio(Math.min(devicePixelRatio||1,s?1.25:1.6)),r.setSize(innerWidth,innerHeight,!1),r.outputColorSpace=Yt,r.toneMapping=es,r.toneMappingExposure=.94,r.shadowMap.enabled=!0,r.shadowMap.type=Qr;let a=new ji;a.background=new Qe("#c5dbe5"),a.fog=new Ki("#c5dbe5",70,240);let o=new $t(72,innerWidth/innerHeight,.04,350);a.add(o);let c=new ir("#c9e3ff","#71694d",1.85);a.add(c);let l=new sr("#fff0d2",3.1);l.castShadow=!0,l.shadow.mapSize.set(s?1024:2048,s?1024:2048),l.shadow.camera.left=-16,l.shadow.camera.right=16,l.shadow.camera.top=16,l.shadow.camera.bottom=-16,l.shadow.camera.near=.5,l.shadow.camera.far=65,l.shadow.bias=-12e-5,l.shadow.normalBias=.012,a.add(l,l.target);let h=al(r),d=new Map,p=new Map;function f(I,W={}){if(!Object.keys(W).length){let K=h.forColor(I);if(K)return K}let ae=I+JSON.stringify(W);return d.has(ae)||d.set(ae,new Bt({color:I,roughness:.86,...W})),d.get(ae)}function g(I,W){return p.has(I)||p.set(I,W()),p.get(I)}function x(){return g("ball",()=>new bn(1,14,10))}function m(){return g("box",()=>new an(1,1,1))}function u(){return g("cyl",()=>new Ht(1,1,1,10))}function _(I,W,ae,K=[0,0,0],_e=[1,1,1],de=!0){let be=new gt(W,ae);return be.position.set(...K),be.scale.set(..._e),be.castShadow=de,be.receiveShadow=!0,I.add(be),be}function w(I,W,ae,K){return _(I,x(),f(W),ae,K)}function y(I,W,ae,K){return _(I,m(),f(W),ae,K)}function R(I,W,ae,K){return _(I,u(),f(W),ae,K)}let A=new Pt,L=new Cn(4600/Ae,2900/Ae,230,145);L.rotateX(-Math.PI/2),L.translate(2300/Ae,0,1450/Ae);let z=L.attributes.position;for(let I=0;I<z.count;I++)z.setY(I,Pn(z.getX(I),z.getZ(I)));L.computeVertexNormals();let S=Zu(e),M=new Ni(S);M.anisotropy=Math.min(4,r.capabilities.getMaxAnisotropy());let T=h.ground(M),F=new gt(L,T);F.receiveShadow=!0,a.add(F);let D=ju({segments:s?24:48}),C=40;D.scale.set(1/C,1,1/C),D.position.x=6500/Ae;for(let I of D.children)I.material.dispose(),I.material=dl(h,C),I.geometry.setAttribute("color",new it(new Float32Array(I.geometry.attributes.position.count*3).fill(1),3));let U=new Be;U.scale.set(C,1,C),D.add(U);let B=(I,W)=>{let ae=Ku(I,W);return ae?pr(ae,I,W):-.32};fl(U,Jn,{scale:C,height:B,surfaces:h,small:s,clear:(I,W,ae)=>mr({x:W,z:ae},I.id)||I.id==="home"&&(Math.abs(ae-40)<55||Math.abs(W-23)<45)}),pl(U,{scale:C,height:B,surfaces:h,helpers:{cube:y,tube:R,ell:w}}),a.add(D);let q=Ju(a,Pn,Ae,S,s),k=hl([...pd.map(([I,W,ae,K])=>[I/Ae,W/Ae,ae/Ae,K/Ae]),...Jn.map(I=>[D.position.x+I.x/C,I.z/C,I.radius*.955/C,I.radius*.955/C])]);a.add(k.mesh);let re=ul(320);a.add(re);function ne(){let I=[],W=[],ae=[],K=(de,be,rt,Ft)=>{let Vt=be*2.05,Ze=Math.sin(be*Math.PI)*.46-be*be*.8;return[Math.sin(de)*Vt+Math.cos(de)*Ft*rt,Ze-Ft*.22,Math.cos(de)*Vt-Math.sin(de)*Ft*rt]};for(let de=0;de<11;de++){let be=de*Math.PI*2/11;for(let rt=1;rt<17;rt++)for(let Ft of[-1,1]){let Vt=rt/18,Ze=Math.sin(Vt*Math.PI)*.42,st=I.length/3;I.push(...K(be,Vt-.023,Ft,.015),...K(be,Vt-.085,Ft,Ze),...K(be,Vt+.038,Ft,Ze*.88),...K(be,Vt+.025,Ft,.015)),ae.push(Vt,0,Vt,.9,Vt+.03,1,Vt+.03,0),W.push(st,st+1,st+2,st,st+2,st+3)}}let _e=new Ut;return _e.setAttribute("position",new it(I,3)),_e.setAttribute("uv",new it(ae,2)),_e.setIndex(W),_e.computeVertexNormals(),_e}let ye=new Ht(.085,.16,4.35,14,12);ye.translate(0,2.175,0);for(let I=0;I<ye.attributes.position.count;I++){let W=ye.attributes.position;W.setX(I,W.getX(I)+.16*(W.getY(I)/4.35)**2)}ye.computeVertexNormals();let De=f("#9d7750",{bumpMap:h.textures.get("rock"),bumpScale:.025});De.onBeforeCompile=I=>{I.vertexShader=I.vertexShader.replace("#include <common>",`#include <common>
varying float vTrunkY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vTrunkY=position.y;`),I.fragmentShader=I.fragmentShader.replace("#include <common>",`#include <common>
varying float vTrunkY;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=.80+.20*smoothstep(.1,.25,fract(vTrunkY*7.));`)};let ke=ne(),nt=h.surface("leaf","#ffffff",1,.018).clone();nt.side=qt;let tt={value:0};nt.onBeforeCompile=I=>{I.uniforms.uWind=tt,I.vertexShader=I.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.y+=sin(uWind+position.x*2.0+position.z)*length(position.xz)*.018;`)};let Y={tree:new Dt(ye,De,400),leaves:new Dt(ke,nt,400),rock:new Dt(new er(1,2),f("#92968b"),400),food:new Dt(x(),f("#7a5638"),400),shell:new Dt(new bn(1,12,6,0,Math.PI),f("#f1d0b7"),400)};for(let I of Object.values(Y))I.count=0,I.castShadow=!0,I.receiveShadow=!0,I.frustumCulled=!1,a.add(I);let $=-1,fe=[],Ue=0,Te={xSin:0,xCos:1,zSin:0,zCos:1};function Ee(I,W,ae){if(ae!==$){let _e={tree:0,rock:0,food:0,shell:0};fe=[];for(let de of I){let be=de.x/Ae,rt=de.y/Ae,Ft=Pn(be,rt),Vt=de.phase||0;if(de.t==="tree"){let Ze=Math.sin(Vt),st=Math.cos(Vt),rn=.84+.17*Math.sin(de.x*.033+de.y*.027),zn=1.35+.28*st;A.position.set(be,Ft,rt),A.rotation.set(.03*Ze,Vt,.04*st),A.scale.set(rn,zn,rn),A.updateMatrix(),Y.tree.setMatrixAt(_e.tree++,A.matrix),fe.push({x:be+.16*rn*st,y:Ft+4.3*zn,z:rt-.16*rn*Ze,p:Vt,size:rn,phaseSin:Ze,phaseCos:st})}else Y[de.t]&&(A.position.set(be,Ft+(de.t==="rock"?.23:de.t==="food"?.13:.025),rt),A.rotation.set(0,Vt,0),A.scale.set(...de.t==="rock"?[.34+.18*Math.abs(Math.sin(Vt)),.3,.4]:de.t==="food"?[.15,.13,.15]:[.12,.04,.14]),A.updateMatrix(),Y[de.t].setMatrixAt(_e[de.t]++,A.matrix))}for(let de of["tree","rock","food","shell"])Y[de].count=_e[de],Y[de].instanceMatrix.needsUpdate=!0;$=ae,Ue++}yd(Te,W);let K=0;for(let _e of fe)A.position.set(_e.x,_e.y,_e.z),A.rotation.set((Te.xSin*_e.phaseCos+Te.xCos*_e.phaseSin)*.025,_e.p,(Te.zCos*_e.phaseCos-Te.zSin*_e.phaseSin)*.025),A.scale.set(_e.size,_e.size,_e.size),A.updateMatrix(),Y.leaves.setMatrixAt(K++,A.matrix);Y.leaves.count=K,Y.leaves.instanceMatrix.needsUpdate=!0}let ft=new Set,N=new O;function Mt(I,W="#ffe9b5"){let ae=document.createElement("canvas");ae.width=512,ae.height=96;let K=ae.getContext("2d");K.fillStyle="#123e43",K.beginPath(),K.roundRect(6,10,500,76,25),K.fill(),K.fillStyle=W,K.font="700 29px system-ui",K.textAlign="center",K.textBaseline="middle",K.fillText(String(I).slice(0,45),256,48,480);let _e=new Ni(ae);_e.colorSpace=Yt;let de=new ks(new Zr({map:_e,depthTest:!0,transparent:!0}));return de.scale.set(2.45,.46,1),de.position.y=2.32,ft.add(de),de}let et=["#4c9cba","#df8168","#9974c7","#76b677"];function He(I={},W="player",ae=""){let K=$c(I,W,{ell:w,cube:y,tube:R,mesh:_,mat:f,geo:g});return a.add(K.root),K.name=ae,K.tag=null,ae&&(K.tag=Mt(ae,I.shirt),K.root.add(K.tag)),K}let Se=He(sl()),Rt=new Map,Ce=He({skin:"#d1a074",shirt:"#b49966"},"leon","LEON \xB7 HANDEL"),Xe=He({skin:"#edc39a",shirt:"#609991"},"nela","NELA \xB7 ZADANIA");function Wt(I,W,ae){!W||W===I.name||(I.tag&&(ft.delete(I.tag),I.root.remove(I.tag),I.tag.material.map.dispose(),I.tag.material.dispose()),I.name=W,I.tag=Mt(W,ae),I.root.add(I.tag))}function Nt(I,W){if(wd(I,W)){for(let ae of I.shirtParts)ae.material=f(I.lookShirt);for(let ae of I.skinParts)ae.material=f(I.lookSkin);for(let ae of I.hairParts)ae.material=f(I.lookHair);I.hairStyles.forEach((ae,K)=>ae.visible=K===I.lookStyle)}}let E=null,v=0,Z={},ee={idleHip:0,idleArmSin:0,idleArmCos:0},oe={yawSin:0,yawCos:1,phaseSin:0,phaseCos:1},Q={hip:0,knee:0},Fe={x:0,z:0,y:0,yaw:0,yawSin:0,yawCos:1};function pe(I,W,ae,K,_e,de,be,rt,Ft=!1,Vt=null,Ze=!1,st=!1){let rn=W.x/Ae,zn=W.y/Ae,ai=rt(W.x,W.y),xs=ai?0:Zc(rn,zn,E,v);I.root.position.set(rn,xs+(ai?Ft?.18:-.95:0),zn),I.yaw+=Wx(I.yaw,ae)*Math.min(1,de*12),I.rig.rotation.y=I.yaw;let Ti=K&&be>.05;I.phase+=Ti?de*(be>4?10:7):0;let yl=Ti?be>4?.31:.22:0,Dd=I.phase,Kc=ai&&!Ft,Tn=Md(oe,Dd,I.yaw,Ti,Kc,ee);I.hips.position.y=Tn.hips;for(let sn of I.legs){let Ld=sn.side<0?-Tn.phaseSin:Tn.phaseSin,Ud=sn.side<0?-Tn.phaseCos:Tn.phaseCos,vl=Ld*yl,Nd=Ti?Math.max(0,Ud)*.105:0,Fd=rn+Tn.yawCos*sn.side*.115+Tn.yawSin*vl,zd=zn-Tn.yawSin*sn.side*.115+Tn.yawCos*vl,Od=ai?0:Zc(Fd,zd,E,v)-xs,aa=Sd(-I.hips.position.y+.07+Od+Nd,vl,Q);sn.thigh.rotation.x=aa.hip,sn.calf.rotation.x=aa.knee,sn.shoe.rotation.x=-aa.hip-aa.knee}for(let sn of I.arms)sn.arm.rotation.x=Ti?(sn.side<0?Tn.phaseSin:-Tn.phaseSin)*.45:(ee.idleArmSin*dd+ee.idleArmCos*sn.side*fd)*.025,sn.arm.rotation.z=-sn.side*.07,sn.forearm.rotation.x=Ti?-.22:-.08,Kc&&(sn.arm.rotation.x=-Math.PI/2+(Tn.phaseSin*dd+Tn.phaseCos*sn.side*fd)*.35,sn.forearm.rotation.x=-.28);Id(I,Vt),I.raft.visible=!!(ai&&Ft),I.raft.rotation.y=I.yaw,I.spear.visible=!!Ze&&!ai&&!Vt,st&&(I.arms[0].arm.rotation.x=-1,I.arms[0].forearm.rotation.x=-1),I.tag&&(I.tag.visible=Math.hypot(rn-Se.root.position.x,zn-Se.root.position.z)<13),I.lastX=rn,I.lastZ=zn}let we=new Be;a.add(we);for(let I of[-.55,.55])for(let W of[-.27,.27])R(we,"#866642",[I,1.24,W],[.038,2.48,.038]);y(we,"#a7c4b7",[0,.34,0],[1.24,.68,.67]),y(we,"#a98961",[0,.69,0],[1.24,.09,.67]);for(let I of[-1,1]){let W=y(we,"#ba7655",[I*.39,2.63,0],[.9,.07,1.14]);W.rotation.z=-I*.34}let ze=R(we,"#ba7655",[0,2.79,0],[.055,1.18,.055]);ze.rotation.x=Math.PI/2;for(let I of[-.5,.5])y(we,"#e2dbc7",[0,2.4,I],[1.7,.1,.07]);for(let I=0;I<5;I++)y(we,"#a98961",[(I-2)*.24,.32,.344],[.21,.53,.025]);for(let I=0;I<4;I++)w(we,"#b1b967",[(I-1.5)*.19,.78,0],[.09,.08,.08]);let ce=new Be;a.add(ce),y(ce,"#765734",[0,.18,0],[.56,.36,.4]),y(ce,"#9a743e",[0,.39,0],[.6,.1,.42]);for(let I of[-.19,.19])y(ce,"#d5b15a",[I,.2,.215],[.045,.35,.026]);y(ce,"#ecd178",[0,.32,.22],[.08,.09,.03]);let me=new gt(new tr(.24,.29,32),new vn({color:"#ffe087",transparent:!0,opacity:.8,side:qt,depthWrite:!1}));me.rotation.x=-Math.PI/2,a.add(me);let qe={},Oe={},xe={},je={},G={root:new Be,tag:null,name:null};a.add(G.root),G.root.position.set(na.x/Ae,Pn(na.x/Ae,na.y/Ae),na.y/Ae),R(G.root,"#786040",[0,.95,0],[.12,1.9,.12]),y(G.root,"#234f58",[0,1.65,0],[1.55,.55,.1]);let le=new Be;a.add(le);let ge=new gt(new tr(.93,1.06,40),new vn({color:"#54e4ef",transparent:!0,opacity:.85,side:qt,depthWrite:!1}));ge.rotation.x=-Math.PI/2,ge.position.y=.04,le.add(ge);let Pe=_(le,new Ht(.035,.035,1,8),new vn({color:"#76eff7",transparent:!0,opacity:.5}),[0,1.25,0],[1,2.5,1],!1),se=null,ie=0,Ne={},Ye=new Be,St=null,xt=null,ln=[];a.add(Ye);function xn(I){let W=I.activities?.completed||0,ae=W>=3&&I.activities.gardenClaimed<W;if(Ed(Ne,I)){xt&&(xt.geometry.dispose(),xt.material.dispose());for(let K of ln)K.dispose();if(ln=[],a.remove(Ye),Ye=new Be,a.add(Ye),xt=null,St=null,I.basePos&&I.baseLevel){let K=E,_e=$u(Cd(K,v,{cube:y,tube:R}),K,{cube:y,tube:R},h);if(Ye.add(_e),_e.traverse(de=>{["roof","wall","lintel"].includes(de.name)&&(de.material=de.material.clone(),de.material.transparent=!0,ln.push(de.material))}),W>=1)for(let de of[-1,1]){let be=w(_e,"#ffdc80",[de*(K.width/Ae/2-.15),2.35,K.depth/Ae/2],[.09,.14,.09]);be.material=f("#ffdc80",{emissive:"#dca739",emissiveIntensity:.7})}if(W>=6&&(R(_e,"#6e5942",[K.width/Ae/2+.2,1.75,-K.depth/Ae/2],[.03,3.5,.03]),y(_e,"#5bbca9",[K.width/Ae/2+.55,3.1,-K.depth/Ae/2],[.7,.42,.03])),W>=3&&I.garden){let de=I.garden,be=new Be;be.position.set(de.x/Ae,Pn(de.x/Ae,de.y/Ae),de.y/Ae),Ye.add(be),y(be,"#785d40",[0,.07,0],[1.35,.14,1]);for(let rt of[-.4,0,.4])for(let Ft of[-.25,.25])R(be,"#587b37",[rt,.21,Ft],[.025,.3,.025]),w(be,"#6caa49",[rt,.35,Ft],[.16,.12,.12]),ae&&w(be,"#cfa565",[rt+.055,.27,Ft],[.07,.065,.07])}}if(I.campfire&&I.fire){let K=new Be,_e=I.fire.x/Ae,de=I.fire.y/Ae;K.position.set(_e,Pn(_e,de),de),Ye.add(K);for(let be=0;be<8;be++){let rt=be*Math.PI/4;w(K,"#777a6b",[Math.sin(rt)*.3,.07,Math.cos(rt)*.3],[.095,.07,.105])}for(let be of[.5,-.5]){let rt=R(K,"#614b35",[0,.09,0],[.06,.5,.06]);rt.rotation.z=Math.PI/2,rt.rotation.y=be}xt=_(K,new Xn(.17,.46,8),new vn({color:"#ffb647",transparent:!0,opacity:.88}),[0,.28,0]),St=new rr("#ffa145",2.5,4),St.position.y=.5,K.add(St)}}}let _n=[],Fn=[0,0,0,0];function Vi(){let I=new Be;a.add(I),w(I,"#765745",[0,.29,0],[.24,.25,.43]),w(I,"#765745",[0,.3,.4],[.19,.18,.2]),w(I,"#ae8b68",[0,.26,.58],[.11,.065,.065]);for(let ae of[-1,1]){let K=_(I,new Xn(.08,.17,3),f("#644937"),[ae*.13,.47,.43]);K.rotation.z=ae*.45}let W=[];for(let ae of[-.17,.17])for(let K of[-.27,.24])W.push(R(I,"#5e493b",[ae,.105,K],[.037,.2,.037]));return{root:I,legs:W,lastX:null,lastZ:null}}function $n(I,W){for(;_n.length<I.length;)_n.push(Vi());let ae=!1;for(let K=0;K<_n.length;K++){let _e=_n[K],de=I[K];if(_e.root.visible=!!de,!de){_e.lastX=_e.lastZ=null;continue}let be=de.x/Ae,rt=de.y/Ae,Ft=_e.lastX===null?0:be-_e.lastX,Vt=_e.lastZ===null?0:rt-_e.lastZ,Ze=Math.hypot(Ft,Vt)>1e-4;_e.root.position.set(be,Pn(be,rt),rt),Ze&&(_e.root.rotation.y=Math.atan2(Ft,Vt),ae||(vd(Fn,W),ae=!0));for(let st=0;st<4;st++)_e.legs[st].rotation.x=Ze?Fn[st]:0;_e.lastX=be,_e.lastZ=rt}}let Dn=[new Dt(x(),f("#adddd0",{roughness:.4}),96),new Dt(new Xn(1,1,3),f("#668e93"),96),new Dt(new Xn(1,1,3),f("#779da0"),96)];for(let I of Dn)I.count=0,I.frustumCulled=!1,a.add(I);function Kn(I,W,ae){let K=0;for(let _e of I||[]){let de=Pd(_e,W,ae,Fe);!de||K>=96||(_l(A,de,0,0,0,.09,.045,.22),Dn[0].setMatrixAt(K,A.matrix),_l(A,de,0,0,-.25,.095,.12,.025,Math.PI/2),Dn[1].setMatrixAt(K,A.matrix),_l(A,de,0,.045,-.02,.04,.1,.11),Dn[2].setMatrixAt(K,A.matrix),K++)}for(let _e of Dn)_e.count=K,_e.instanceMatrix.needsUpdate=!0}let bi={},pn=[];function _r(I,W){if(Ad(bi,I)){for(let ae of pn)a.remove(ae),ae.traverse(K=>{K.isSprite&&(ft.delete(K),K.material.map.dispose(),K.material.dispose()),K.userData.privateGeometry&&K.geometry.dispose()});pn=[];for(let ae of I||[]){if(ae.type==="return")continue;let K=new Be;K.position.set(ae.x/Ae,Pn(ae.x/Ae,ae.y/Ae),ae.y/Ae),a.add(K),pn.push(K);let _e=new gt(new tr(.4,.46,28),f(ae.done?"#6d9c89":"#8cebd5",{side:qt}));if(_e.rotation.x=-Math.PI/2,_e.position.y=.03,_e.userData.privateGeometry=!0,K.add(_e),ae.type==="fragment"&&(y(K,"#e1c587",[0,.38,0],[.37,.45,.06]),y(K,"#a68752",[0,.18,-.035],[.035,.42,.035]),y(K,"#826b4d",[0,.4,.035],[.19,.022,.02])),ae.type==="rune"){w(K,"#87998a",[0,.26,0],[.27,.3,.21]);let be=Mt(ae.symbol,"#ffe29b");be.position.y=.8,be.scale.set(.65,.32,1),K.add(be)}if(ae.type==="chest"){y(K,"#795a39",[0,.2,0],[.65,.4,.44]),y(K,"#bb9251",[0,.42,0],[.69,.06,.46]);for(let be of[-.21,.21])y(K,"#f1d584",[be,.23,.235],[.05,.36,.025])}if(ae.type==="signal"){for(let be of[-1,1]){let rt=R(K,"#8a6d49",[be*.22,.55,0],[.04,1.1,.04]);rt.rotation.z=be*.22}if(y(K,"#927652",[0,1.1,0],[.7,.16,.45]),ae.done){let be=w(K,"#ffe28d",[0,1.34,0],[.16,.21,.16]);be.material=f("#ffe28d",{emissive:"#ffa842",emissiveIntensity:1})}else y(K,"#344f57",[0,1.3,0],[.3,.18,.24])}let de=Mt(ae.label,ae.done?"#b5d1c5":"#ffe9b5");de.position.y=ae.type==="signal"?1.95:1.35,K.add(de),K.userData.done=ae.done}}for(let ae of pn)ae.children[0].scale.setScalar(ae.userData.done?1:1+Math.sin(W*2.8)*.05)}let Si=[];for(let I=0;I<4;I++){let W=new Ut().setFromPoints([new O(-.3,0,0),new O(0,-.08,0),new O(.3,0,0)]),ae=new Qi(W,new Ui({color:"#fff7de"}));a.add(ae),Si.push(ae)}let mn=Math.atan2(-130,-60),wi=0,Gi=4.8,wn=!0,si=!0,nn=0,b=null,H=!1,j=0,J="first",X=new Be;o.add(X);let he=R(X,"#52625f",[.28,-.36,-.42],[.1,.34,.1]);he.rotation.x=-.65;let ve=w(X,"#dda879",[.29,-.27,-.58],[.055,.08,.055]),Re=new Be;X.add(Re);let Ie=R(Re,"#876742",[.32,-.17,-.75],[.014,1.55,.014]);Ie.rotation.x=-.22;let $e=w(Re,"#b3b6ac",[.32,.61,-.91],[.039,.12,.025]),Ke={};for(let I of["gather","fish","cook"]){let W=new Be;W.position.set(.29,-.26,-.61),X.add(W),Rd(I,W,{cube:y,tube:R,ell:w}),Ke[I]=W}let Ge=Object.entries(Ke),ht={down:0,up:Math.PI,left:-Math.PI/2,right:Math.PI/2},wt=new Set;X.traverse(I=>{I.isMesh&&(I.castShadow=!1,I.receiveShadow=!1,I.frustumCulled=!1)});let Tt=new O,Et=new O,pt=new O,We=new O,kt={position:pt,target:Tt},at={x:0,z:0,surface:0,yaw:0,pitch:0,mode:"first",distance:4.8,bob:0},P=new O,V=new ar,te=[Ye,we],ue=[],Le=I=>I.object.isMesh&&I.distance>.1;function Je(I,W=0){!wn||t().paused||(mn+=I,wi=ki(wi+W,J==="first"?-1.12:-.05,J==="first"?1.12:.75))}function ct(I){J=I==="third"?"third":"first",wi=I==="third"?.22:0,o.fov=I==="third"?58:72,o.updateProjectionMatrix(),b=null,si=!0}n.addEventListener("pointerdown",I=>{let W=t();!wn||!W.play||W.paused||I.button>0||b||(b={id:I.pointerId,x:I.clientX,y:I.clientY},n.setPointerCapture(I.pointerId))}),n.addEventListener("pointermove",I=>{!b||b.id!==I.pointerId||(Je(-(I.clientX-b.x)*.006,(I.clientY-b.y)*.005),b.x=I.clientX,b.y=I.clientY)});let mt=I=>{b?.id===I.pointerId&&(b=null)};for(let I of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(I,mt);n.addEventListener("wheel",I=>{!wn||t().paused||(I.preventDefault(),J==="first"?(o.fov=ki(o.fov+I.deltaY*.025,58,85),o.updateProjectionMatrix()):Gi=ki(Gi+I.deltaY*.004,2.5,8))},{passive:!1}),n.addEventListener("webglcontextlost",I=>{I.preventDefault(),H=!0,wn=!1,b=null,i()}),n.addEventListener("webglcontextrestored",()=>{H=!1,si=!0});function yt(){r.setSize(innerWidth,innerHeight,!1),o.aspect=innerWidth/innerHeight,o.updateProjectionMatrix()}function ut(I){if(!wn||H)return;let W=t(),ae=I/1e3,K=nn?ki((I-nn)/1e3,0,.06):1/60;nn=I,_d(ee,ae),Td(Z,W.basePos,W.baseLevel),E=Z.layout,v=Z.elevation,Wt(G,W.labels?.board,"#ffe087"),G.tag&&(G.tag.position.y=1.65,G.tag.scale.set(1.4,.36,1)),le.visible=!!W.trail,W.trail&&(sa(xe,W.trail)&&le.position.set(xe.x,xe.y,xe.z),Pe.material.opacity=.35+.13*Math.sin(ae*3),(ie!==W.trailNumber||se?.userData.text!==(W.trailNumber===4?W.labels?.finish||"4":W.trailNumber?String(W.trailNumber):W.trail.label))&&(se&&(ft.delete(se),le.remove(se),se.material.map.dispose(),se.material.dispose()),ie=W.trailNumber,se=Mt(ie===4?W.labels?.finish||"4":ie?String(ie):W.trail.label,"#54e4ef"),se.userData.text=ie===4?W.labels?.finish||"4":ie?String(ie):W.trail.label,se.position.y=1.5,se.scale.set(W.trailNumber?1:2.45,.4,1),le.add(se))),Wt(Ce,W.labels?.leon,"#b49966"),Wt(Xe,W.labels?.nela,"#609991");let _e=W.P.x/Ae,de=W.P.y/Ae;h.update(),q.update(ae,E),tt.value=ae,re.material.uniforms.uTime.value=ae,Ee(W.objects,ae,W.resourceRevision),Kn(W.fishes,ae,W.sea),_r(W.chapterMarkers,ae),pe(Se,W.P,Number.isFinite(W.heading)?W.heading:ht[W.face]||0,W.moving,ae,K,W.fast?5.25:3,W.sea,W.raft,W.motion,W.spear,W.blocked),Ce.root.visible=Xe.root.visible=!0,pe(Ce,W.leon,Math.atan2(_e-W.leon.x/Ae,de-W.leon.y/Ae),!1,ae,K,0,W.sea),pe(Xe,W.nela,Math.atan2(_e-W.nela.x/Ae,de-W.nela.y/Ae),!1,ae,K,0,W.sea),wt.clear();for(let Ze of W.players){if(Ze.id===W.you)continue;wt.add(Ze.id);let st=Rt.get(Ze.id),rn,zn=W.looks[Ze.slot]||Xx;!st||st.name!==Ze.name?(rn=Ze.appearance?sl(Ze.appearance):zn,st&&It(st),st=He(rn,"player",Ze.name),st.remoteLook={...rn},st.remoteMotion={kind:null,phase:0},Rt.set(Ze.id,st)):rn=Ze.appearance?Bc(st.remoteLook,Ze.appearance):zn,Nt(st,rn);let ai=st.lastX===null?0:Ze.point.x/Ae-st.lastX,xs=st.lastZ===null?0:Ze.point.y/Ae-st.lastZ,Ti=Ze.moving&&Math.hypot(ai,xs)>.002?Math.atan2(ai,xs):ht[Ze.face]||0,yl=xd(st.remoteMotion,Ze.motion,Ze.received,I);pe(st,Ze.point,Ti,Ze.moving,ae,K,3,W.sea,!1,yl,W.spearOwned&&!Ze.spearStowed,Ze.blocked)}for(let[Ze,st]of Rt)wt.has(Ze)||(It(st),Rt.delete(Ze));Nt(Se,W.appearance||sl()),sa(qe,W.leon,.9,.15)&&we.position.set(qe.x,qe.y,qe.z),sa(Oe,W.chest)&&ce.position.set(Oe.x,Oe.y,Oe.z),ce.visible=!W.treasure,xn(W),$n(W.enemies,ae);let be=E&&Math.abs(W.P.x-E.floor.x)<E.floor.w/2&&Math.abs(W.P.y-E.floor.y)<E.floor.h/2;for(let Ze of ln)Ze.opacity=be&&J==="third"?.23:1,Ze.depthWrite=!(be&&J==="third");xt&&(xt.scale.y=1+Math.sin(ae*13)*.18,St.intensity=2.5+Math.sin(ae*17)*.4);let rt=gd(W.objects,W.P);me.visible=!!(W.play&&!W.paused&&rt),rt&&sa(je,rt)&&me.position.set(je.x,je.y+.03,je.z);for(let Ze=0;Ze<Si.length;Ze++){let st=Si[Ze];st.position.set(19+Math.sin(ae*.08+Ze*1.7)*8,7+Math.sin(ae*.2+Ze)*.5,12+Math.cos(ae*.1+Ze*1.3)*5),st.rotation.y=ae*.1+Ze,st.scale.y=1+Math.sin(ae*7+Ze)*.5}Se.rig.visible=J!=="first";let Ft=W.moving&&!W.paused?Math.sin(Se.phase*2)*.012:0;if(at.x=_e,at.z=de,at.surface=Se.root.position.y,at.yaw=mn,at.pitch=wi,at.mode=J,at.distance=Gi*(o.aspect<.85?1.12:1),at.bob=Ft,ol(at,kt),J==="third"){pt.y=Math.max(pt.y,Pn(pt.x,pt.z)+.55),P.subVectors(pt,Tt);let Ze=P.length();P.normalize(),V.set(Tt,P),V.near=.08,V.far=Ze;let st=ll(V,te,!0,ue).find(Le);st&&pt.copy(Tt).addScaledVector(P,Math.max(.35,st.distance-.15))}J==="first"||si||We.distanceTo(Se.root.position)>5?(o.position.copy(pt),Et.copy(Tt),si=!1):(Vc(o.position,pt,K,8),Vc(Et,Tt,K,12)),o.lookAt(J==="first"?Tt:Et),We.copy(Se.root.position),bd(ft,o,innerWidth,N);let Vt=!!W.spear||!!W.motion&&(W.motion.kind==="gather"||W.motion.kind==="fish"||W.motion.kind==="cook");X.visible=J==="first"&&W.play&&Vt&&!W.sea(W.P.x,W.P.y),Re.visible=!!W.spear&&!W.motion;for(let[Ze,st]of Ge)st.visible=W.motion?.kind===Ze;X.position.y=Ft*.4,X.rotation.x=W.motion?Math.sin(W.motion.phase*Math.PI*2)*.07:0,ve.material=f(W.appearance?.skin||"#dda879"),he.material=f(W.appearance?.shirt||"#4c9cba"),cl(l,_e,de),re.position.copy(o.position),k.update(ae,o.position),r.render(a,o),W.play&&K>.038?j+=K:j=Math.max(0,j-K),j>3&&r.getPixelRatio()>.85&&(r.setPixelRatio(Math.max(.85,r.getPixelRatio()-.15)),yt(),j=0)}function It(I){a.remove(I.root),I.tag&&(ft.delete(I.tag),I.tag.material.map.dispose(),I.tag.material.dispose())}function Ln(I){return wn=!!I&&!H,b=null,si=!0,nn=0,wn}function Xt(){wn=!1,r.dispose(),L.dispose(),T.dispose(),k.dispose(),re.geometry.dispose(),re.material.dispose(),D.traverse(I=>{I.geometry&&I.geometry.dispose(),I.material&&I.material.dispose()}),M.dispose(),q.dispose(),h.dispose(),nt.dispose();for(let I of[...Object.values(Y),...Dn])I.geometry.dispose(),I.dispose();for(let I of p.values())I.dispose();for(let I of d.values())I.dispose()}return{frame:ut,resize:yt,orbit:Je,setEnabled:Ln,setCamera:ct,dispose:Xt,vector:(I,W)=>md(I,W,mn),get enabled(){return wn},get yaw(){return mn},get cameraMode(){return J},stats:()=>({calls:r.info.render.calls,triangles:r.info.render.triangles,pixelRatio:r.getPixelRatio(),people:Rt.size+3,camera:J,eye:o.position.toArray(),resourceStaticUpdates:Ue,materials:h.stats()})}}return Wd(Yx);})();
