var MyIsland3D=(()=>{var wl=Object.defineProperty;var kd=Object.getOwnPropertyDescriptor;var Vd=Object.getOwnPropertyNames;var Gd=Object.prototype.hasOwnProperty;var Hd=(n,e)=>{for(var t in e)wl(n,t,{get:e[t],enumerable:!0})},Wd=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Vd(e))!Gd.call(n,r)&&r!==t&&wl(n,r,{get:()=>e[r],enumerable:!(i=kd(e,r))||i.enumerable});return n};var Xd=n=>Wd(wl({},"__esModule",{value:!0}),n);var jx={};Hd(jx,{SCALE:()=>be,actionPose:()=>Dd,baseElevation:()=>jc,buildBase:()=>Id,buildHuman:()=>Qc,cameraVector:()=>xd,create:()=>Kx,createCampaign:()=>Yx,drawCampaign2D:()=>$c,fishPose:()=>Ld,legPose:()=>Td,nearestWithin:()=>_d,scaleWorldLabels:()=>wd,terrainHeight:()=>Nn,updateAppearanceKey:()=>Ed,updateAvatarFrameCycle:()=>vd,updateAvatarPoseCycle:()=>Sd,updateBaseFrame:()=>Ad,updateBoarGait:()=>bd,updateBuildingState:()=>Cd,updateChapterState:()=>Rd,updateFishPart:()=>bl,updateLeafWindCycle:()=>Md,updateRemoteMotion:()=>yd,updateTerrainAnchor:()=>la,walkSurface:()=>Kc});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Rh=0,rc=1,Ih=2;var sc=1,ns=2,ti=3,gi=0,hn=1,Ht=2,Mi=0,$i=1,ac=2,oc=3,lc=4,Ph=5,Fi=100,Dh=101,Lh=102,Uh=103,Nh=104,Fh=200,zh=201,Oh=202,Bh=203,za=204,Oa=205,kh=206,Vh=207,Gh=208,Hh=209,Wh=210,Xh=211,qh=212,Yh=213,Zh=214,ho=0,uo=1,fo=2,Ki=3,po=4,mo=5,go=6,xo=7,cc=0,Jh=1,$h=2,bi=0,Kh=1,jh=2,Qh=3,is=4,eu=5,tu=6,nu=7;var hc=300,cr=301,hr=302,_o=303,yo=304,$s=306,Vr=1e3,Ni=1001,Ba=1002,bn=1003,iu=1004;var Ks=1005;var Hn=1006,vo=1007;var Vi=1008;var qn=1009,uc=1010,dc=1011,rs=1012,Mo=1013,Gi=1014,Yn=1015,ss=1016,bo=1017,So=1018,as=1020,fc=35902,pc=35899,mc=1021,gc=1022,zn=1023,Gr=1026,os=1027,wo=1028,To=1029,xc=1030,Eo=1031;var Ao=1033,js=33776,Qs=33777,ea=33778,ta=33779,Co=35840,Ro=35841,Io=35842,Po=35843,Do=36196,Lo=37492,Uo=37496,No=37808,Fo=37809,zo=37810,Oo=37811,Bo=37812,ko=37813,Vo=37814,Go=37815,Ho=37816,Wo=37817,Xo=37818,qo=37819,Yo=37820,Zo=37821,Jo=36492,$o=36494,Ko=36495,jo=36283,Qo=36284,el=36285,tl=36286;var Ls=2300,ka=2301,Na=2302,$l=2400,Kl=2401,jl=2402;var ru=3200,su=3201;var _c=0,au=1,Zn="",Yt="srgb",ji="srgb-linear",Us="linear",Lt="srgb";var Ji=7680;var Ql=519,ou=512,lu=513,cu=514,yc=515,hu=516,uu=517,du=518,fu=519,Va=35044;var vc="300 es",Gn=2e3,Ns=2001;var xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eh=1234567,Ps=Math.PI/180,Hr=180/Math.PI;function pi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function gt(n,e,t){return Math.max(e,Math.min(t,n))}function Mc(n,e){return(n%e+e)%e}function qd(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Yd(n,e,t){return n!==e?(t-n)/(e-n):0}function Ds(n,e,t){return(1-t)*n+t*e}function Zd(n,e,t,i){return Ds(n,e,1-Math.exp(-t*i))}function Jd(n,e=1){return e-Math.abs(Mc(n,e*2)-e)}function $d(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Kd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function jd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Qd(n,e){return n+Math.random()*(e-n)}function ef(n){return n*(.5-Math.random())}function tf(n){n!==void 0&&(eh=n);let e=eh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nf(n){return n*Ps}function rf(n){return n*Hr}function sf(n){return(n&n-1)===0&&n!==0}function af(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function of(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function lf(n,e,t,i,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),f=a((e-i)/2),d=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*h,c*u,c*f,o*l);break;case"YZY":n.set(c*f,o*h,c*u,o*l);break;case"ZXZ":n.set(c*u,c*f,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*d,o*l);break;case"YXY":n.set(c*d,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Vn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var na={DEG2RAD:Ps,RAD2DEG:Hr,generateUUID:pi,clamp:gt,euclideanModulo:Mc,mapLinear:qd,inverseLerp:Yd,lerp:Ds,damp:Zd,pingpong:Jd,smoothstep:$d,smootherstep:Kd,randInt:jd,randFloat:Qd,randFloatSpread:ef,seededRandom:tf,degToRad:nf,radToDeg:rf,isPowerOfTwo:sf,ceilPowerOfTwo:af,floorPowerOfTwo:of,setQuaternionFromProperEuler:lf,normalize:Dt,denormalize:Vn},Xe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_i=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],f=s[a+0],d=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==f||l!==d||h!==g){let m=1-o,p=c*f+l*d+h*g+u*x,y=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){let P=Math.sqrt(w),A=Math.atan2(P,p*y);m=Math.sin(m*A)/P,o=Math.sin(o*A)/P}let M=o*y;if(c=c*m+f*M,l=l*m+d*M,h=h*m+g*M,u=u*m+x*M,m===1-o){let P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-o*d,e[t+2]=l*g+h*d+o*f-c*u,e[t+3]=h*g-o*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),u=o(s/2),f=c(i/2),d=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(th.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),h=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-s*u,this.z=r+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tl.copy(this).projectOnVector(e),this.sub(Tl)}reflect(e){return this.sub(Tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Tl=new B,th=new _i,ot=class n{constructor(e,t,i,r,s,a,o,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],x=r[0],m=r[3],p=r[6],y=r[1],w=r[4],M=r[7],P=r[2],A=r[5],F=r[8];return s[0]=a*x+o*y+c*P,s[3]=a*m+o*w+c*A,s[6]=a*p+o*M+c*F,s[1]=l*x+h*y+u*P,s[4]=l*m+h*w+u*A,s[7]=l*p+h*M+u*F,s[2]=f*x+d*y+g*P,s[5]=f*m+d*w+g*A,s[8]=f*p+d*M+g*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*s,d=l*s-a*c,g=t*u+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(r*l-h*i)*x,e[2]=(o*i-r*a)*x,e[3]=f*x,e[4]=(h*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=d*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(El.makeScale(e,t)),this}rotate(e){return this.premultiply(El.makeRotation(-e)),this}translate(e,t){return this.premultiply(El.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},El=new ot;function bc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pu(){let n=Wr("canvas");return n.style.display="block",n}var nh={};function Xr(n){n in nh||(nh[n]=!0,console.warn(n))}function mu(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var ih=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rh=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cf(){let n={enabled:!0,workingColorSpace:ji,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Lt&&(r.r=mi(r.r),r.g=mi(r.g),r.b=mi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Lt&&(r.r=kr(r.r),r.g=kr(r.g),r.b=kr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Zn?Us:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Xr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Xr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ji]:{primaries:e,whitePoint:i,transfer:Us,toXYZ:ih,fromXYZ:rh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:i,transfer:Lt,toXYZ:ih,fromXYZ:rh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),n}var Et=cf();function mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function kr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var br,Ga=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{br===void 0&&(br=Wr("canvas")),br.width=e.width,br.height=e.height;let r=br.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=br}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Wr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=mi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mi(t[i]/255)*255):t[i]=mi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hf=0,qr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Al(r[a].image)):s.push(Al(r[a]))}else s=Al(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Al(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ga.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var uf=0,Cl=new B,mn=class n extends xi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ni,r=Ni,s=Hn,a=Vi,o=zn,c=qn,l=n.DEFAULT_ANISOTROPY,h=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=pi(),this.name="",this.source=new qr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cl).x}get height(){return this.source.getSize(Cl).y}get depth(){return this.source.getSize(Cl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vr:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case Ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vr:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case Ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=hc;mn.DEFAULT_ANISOTROPY=1;var At=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,M=(d+1)/2,P=(p+1)/2,A=(h+f)/4,F=(u+x)/4,z=(g+m)/4;return w>M&&w>P?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=A/i,s=F/i):M>P?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=z/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=F/s,r=z/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ha=class extends xi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new mn(r);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new qr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},jn=class extends Ha{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Fs=class extends mn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wa=class extends mn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(s,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ua.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ua.copy(i.boundingBox)),ua.applyMatrix4(e.matrixWorld),this.union(ua)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vs),da.subVectors(this.max,vs),Sr.subVectors(e.a,vs),wr.subVectors(e.b,vs),Tr.subVectors(e.c,vs),Ri.subVectors(wr,Sr),Ii.subVectors(Tr,wr),Xi.subVectors(Sr,Tr);let t=[0,-Ri.z,Ri.y,0,-Ii.z,Ii.y,0,-Xi.z,Xi.y,Ri.z,0,-Ri.x,Ii.z,0,-Ii.x,Xi.z,0,-Xi.x,-Ri.y,Ri.x,0,-Ii.y,Ii.x,0,-Xi.y,Xi.x,0];return!Rl(t,Sr,wr,Tr,da)||(t=[1,0,0,0,1,0,0,0,1],!Rl(t,Sr,wr,Tr,da))?!1:(fa.crossVectors(Ri,Ii),t=[fa.x,fa.y,fa.z],Rl(t,Sr,wr,Tr,da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},li=[new B,new B,new B,new B,new B,new B,new B,new B],On=new B,ua=new Qn,Sr=new B,wr=new B,Tr=new B,Ri=new B,Ii=new B,Xi=new B,vs=new B,da=new B,fa=new B,qi=new B;function Rl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){qi.fromArray(n,s);let o=r.x*Math.abs(qi.x)+r.y*Math.abs(qi.y)+r.z*Math.abs(qi.z),c=e.dot(qi),l=t.dot(qi),h=i.dot(qi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var df=new Qn,Ms=new B,Il=new B,yi=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):df.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);let t=Ms.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ms,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(Il)),this.expandByPoint(Ms.copy(e.center).sub(Il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ci=new B,Pl=new B,pa=new B,Pi=new B,Dl=new B,ma=new B,Ll=new B,Yr=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Pl.copy(e).add(t).multiplyScalar(.5),pa.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(Pl);let s=e.distanceTo(t)*.5,a=-this.direction.dot(pa),o=Pi.dot(this.direction),c=-Pi.dot(pa),l=Pi.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*c-o,f=a*o-c,g=s*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Pl).addScaledVector(pa,f),d}intersectSphere(e,t){ci.subVectors(e.center,this.origin);let i=ci.dot(this.direction),r=ci.dot(ci)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,i,r,s){Dl.subVectors(t,e),ma.subVectors(i,e),Ll.crossVectors(Dl,ma);let a=this.direction.dot(Ll),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pi.subVectors(this.origin,e);let c=o*this.direction.dot(ma.crossVectors(Pi,ma));if(c<0)return null;let l=o*this.direction.dot(Dl.cross(Pi));if(l<0||c+l>a)return null;let h=-o*Pi.dot(Ll);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},It=class n{constructor(e,t,i,r,s,a,o,c,l,h,u,f,d,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,h,u,f,d,g,x,m)}set(e,t,i,r,s,a,o,c,l,h,u,f,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Er.setFromMatrixColumn(e,0).length(),s=1/Er.setFromMatrixColumn(e,1).length(),a=1/Er.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let f=a*h,d=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-x*l,t[9]=-o*c,t[2]=x-f*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,g=l*h,x=l*u;t[0]=f+x*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=x+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,g=l*h,x=l*u;t[0]=f-x*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,d=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+x,t[1]=c*u,t[5]=x*l+f,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,d=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=a*c,d=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+x,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ff,e,pf)}lookAt(e,t,i){let r=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),Di.crossVectors(i,In),Di.lengthSq()===0&&(Math.abs(i.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Di.crossVectors(i,In)),Di.normalize(),ga.crossVectors(In,Di),r[0]=Di.x,r[4]=ga.x,r[8]=In.x,r[1]=Di.y,r[5]=ga.y,r[9]=In.y,r[2]=Di.z,r[6]=ga.z,r[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],y=i[3],w=i[7],M=i[11],P=i[15],A=r[0],F=r[4],z=r[8],T=r[12],b=r[1],E=r[5],O=r[9],D=r[13],R=r[2],N=r[6],G=r[10],W=r[14],k=r[3],ne=r[7],re=r[11],ue=r[15];return s[0]=a*A+o*b+c*R+l*k,s[4]=a*F+o*E+c*N+l*ne,s[8]=a*z+o*O+c*G+l*re,s[12]=a*T+o*D+c*W+l*ue,s[1]=h*A+u*b+f*R+d*k,s[5]=h*F+u*E+f*N+d*ne,s[9]=h*z+u*O+f*G+d*re,s[13]=h*T+u*D+f*W+d*ue,s[2]=g*A+x*b+m*R+p*k,s[6]=g*F+x*E+m*N+p*ne,s[10]=g*z+x*O+m*G+p*re,s[14]=g*T+x*D+m*W+p*ue,s[3]=y*A+w*b+M*R+P*k,s[7]=y*F+w*E+M*N+P*ne,s[11]=y*z+w*O+M*G+P*re,s[15]=y*T+w*D+M*W+P*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+s*c*u-r*l*u-s*o*f+i*l*f+r*o*d-i*c*d)+x*(+t*c*d-t*l*f+s*a*f-r*a*d+r*l*h-s*c*h)+m*(+t*l*u-t*o*d-s*a*u+i*a*d+s*o*h-i*l*h)+p*(-r*o*h-t*c*u+t*o*f+r*a*u-i*a*f+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=u*m*l-x*f*l+x*c*d-o*m*d-u*c*p+o*f*p,w=g*f*l-h*m*l-g*c*d+a*m*d+h*c*p-a*f*p,M=h*x*l-g*u*l+g*o*d-a*x*d-h*o*p+a*u*p,P=g*u*c-h*x*c-g*o*f+a*x*f+h*o*m-a*u*m,A=t*y+i*w+r*M+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/A;return e[0]=y*F,e[1]=(x*f*s-u*m*s-x*r*d+i*m*d+u*r*p-i*f*p)*F,e[2]=(o*m*s-x*c*s+x*r*l-i*m*l-o*r*p+i*c*p)*F,e[3]=(u*c*s-o*f*s-u*r*l+i*f*l+o*r*d-i*c*d)*F,e[4]=w*F,e[5]=(h*m*s-g*f*s+g*r*d-t*m*d-h*r*p+t*f*p)*F,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*p-t*c*p)*F,e[7]=(a*f*s-h*c*s+h*r*l-t*f*l-a*r*d+t*c*d)*F,e[8]=M*F,e[9]=(g*u*s-h*x*s-g*i*d+t*x*d+h*i*p-t*u*p)*F,e[10]=(a*x*s-g*o*s+g*i*l-t*x*l-a*i*p+t*o*p)*F,e[11]=(h*o*s-a*u*s-h*i*l+t*u*l+a*i*d-t*o*d)*F,e[12]=P*F,e[13]=(h*x*r-g*u*r+g*i*f-t*x*f-h*i*m+t*u*m)*F,e[14]=(g*o*r-a*x*r-g*i*c+t*x*c+a*i*m-t*o*m)*F,e[15]=(a*u*r-h*o*r+h*i*c-t*u*c-a*i*f+t*o*f)*F,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,f=s*l,d=s*h,g=s*u,x=a*h,m=a*u,p=o*u,y=c*l,w=c*h,M=c*u,P=i.x,A=i.y,F=i.z;return r[0]=(1-(x+p))*P,r[1]=(d+M)*P,r[2]=(g-w)*P,r[3]=0,r[4]=(d-M)*A,r[5]=(1-(f+p))*A,r[6]=(m+y)*A,r[7]=0,r[8]=(g+w)*F,r[9]=(m-y)*F,r[10]=(1-(f+x))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Er.set(r[0],r[1],r[2]).length(),a=Er.set(r[4],r[5],r[6]).length(),o=Er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);let l=1/s,h=1/a,u=1/o;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,t.setFromRotationMatrix(Bn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Gn,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r),g,x;if(c)g=s/(a-s),x=a*s/(a-s);else if(o===Gn)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Ns)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Gn,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-r),f=-(t+e)/(t-e),d=-(i+r)/(i-r),g,x;if(c)g=1/(a-s),x=a/(a-s);else if(o===Gn)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===Ns)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Er=new B,Bn=new It,ff=new B(0,0,0),pf=new B(1,1,1),Di=new B,ga=new B,In=new B,sh=new It,ah=new _i,Wn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ah.setFromEuler(this),this.setFromQuaternion(ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wn.DEFAULT_ORDER="XYZ";var Zr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},mf=0,oh=new B,Ar=new _i,hi=new It,xa=new B,bs=new B,gf=new B,xf=new _i,lh=new B(1,0,0),ch=new B(0,1,0),hh=new B(0,0,1),uh={type:"added"},_f={type:"removed"},Cr={type:"childadded",child:null},Ul={type:"childremoved",child:null},Ct=class n extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new B,t=new Wn,i=new _i,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new It},normalMatrix:{value:new ot}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(lh,e)}rotateY(e){return this.rotateOnAxis(ch,e)}rotateZ(e){return this.rotateOnAxis(hh,e)}translateOnAxis(e,t){return oh.copy(e).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lh,e)}translateY(e){return this.translateOnAxis(ch,e)}translateZ(e){return this.translateOnAxis(hh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xa.copy(e):xa.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(bs,xa,this.up):hi.lookAt(xa,bs,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),Ar.setFromRotationMatrix(hi),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uh),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_f),Ul.child=e,this.dispatchEvent(Ul),Ul.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uh),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,e,gf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,xf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Ct.DEFAULT_UP=new B(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kn=new B,ui=new B,Nl=new B,di=new B,Rr=new B,Ir=new B,dh=new B,Fl=new B,zl=new B,Ol=new B,Bl=new At,kl=new At,Vl=new At,fi=class n{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),kn.subVectors(e,t),r.cross(kn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){kn.subVectors(r,t),ui.subVectors(i,t),Nl.subVectors(e,t);let a=kn.dot(kn),o=kn.dot(ui),c=kn.dot(Nl),l=ui.dot(ui),h=ui.dot(Nl),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(l*c-o*h)*f,g=(a*h-o*c)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,di.x),c.addScaledVector(a,di.y),c.addScaledVector(o,di.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return Bl.setScalar(0),kl.setScalar(0),Vl.setScalar(0),Bl.fromBufferAttribute(e,t),kl.fromBufferAttribute(e,i),Vl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Bl,s.x),a.addScaledVector(kl,s.y),a.addScaledVector(Vl,s.z),a}static isFrontFacing(e,t,i,r){return kn.subVectors(i,t),ui.subVectors(e,t),kn.cross(ui).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),kn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;Rr.subVectors(r,i),Ir.subVectors(s,i),Fl.subVectors(e,i);let c=Rr.dot(Fl),l=Ir.dot(Fl);if(c<=0&&l<=0)return t.copy(i);zl.subVectors(e,r);let h=Rr.dot(zl),u=Ir.dot(zl);if(h>=0&&u<=h)return t.copy(r);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Rr,a);Ol.subVectors(e,s);let d=Rr.dot(Ol),g=Ir.dot(Ol);if(g>=0&&d<=g)return t.copy(s);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Ir,o);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return dh.subVectors(s,r),o=(u-h)/(u-h+(d-g)),t.copy(r).addScaledVector(dh,o);let p=1/(m+x+f);return a=x*p,o=f*p,t.copy(i).addScaledVector(Rr,a).addScaledVector(Ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Gl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var tt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Et.workingColorSpace){return this.r=e,this.g=t,this.b=i,Et.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Et.workingColorSpace){if(e=Mc(e,1),t=gt(t,0,1),i=gt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Gl(a,s,e+1/3),this.g=Gl(a,s,e),this.b=Gl(a,s,e-1/3)}return Et.colorSpaceToWorking(this,r),this}setStyle(e,t=Yt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){let i=gu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Et.workingToColorSpace(pn.copy(this),e),Math.round(gt(pn.r*255,0,255))*65536+Math.round(gt(pn.g*255,0,255))*256+Math.round(gt(pn.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.workingToColorSpace(pn.copy(this),t);let i=pn.r,r=pn.g,s=pn.b,a=Math.max(i,r,s),o=Math.min(i,r,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Et.workingColorSpace){return Et.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Yt){Et.workingToColorSpace(pn.copy(this),e);let t=pn.r,i=pn.g,r=pn.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(_a);let i=Ds(Li.h,_a.h,t),r=Ds(Li.s,_a.s,t),s=Ds(Li.l,_a.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new tt;tt.NAMES=gu;var yf=0,ei=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=$i,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=Oa,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(i.blending=this.blending),this.side!==gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==za&&(i.blendSrc=this.blendSrc),this.blendDst!==Oa&&(i.blendDst=this.blendDst),this.blendEquation!==Fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ql&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Sn=class extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var $t=new B,ya=new Xe,vf=0,jt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Va,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ya.fromBufferAttribute(this,t),ya.applyMatrix3(e),this.setXY(t,ya.x,ya.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Va&&(e.usage=this.usage),e}};var zs=class extends jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Os=class extends jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var rt=class extends jt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Mf=0,Fn=new It,Hl=new Ct,Pr=new B,Pn=new Qn,Ss=new Qn,rn=new B,Pt=class n extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bc(e)?Os:zs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ot().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,i){return Fn.makeTranslation(e,t,i),this.applyMatrix4(Fn),this}scale(e,t,i){return Fn.makeScale(e,t,i),this.applyMatrix4(Fn),this}lookAt(e){return Hl.lookAt(e),Hl.updateMatrix(),this.applyMatrix4(Hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new rt(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ss.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(Pn.min,Ss.min),Pn.expandByPoint(rn),rn.addVectors(Pn.max,Ss.max),Pn.expandByPoint(rn)):(Pn.expandByPoint(Ss.min),Pn.expandByPoint(Ss.max))}Pn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)rn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(rn));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)rn.fromBufferAttribute(o,l),c&&(Pr.fromBufferAttribute(e,l),rn.add(Pr)),r=Math.max(r,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let z=0;z<i.count;z++)o[z]=new B,c[z]=new B;let l=new B,h=new B,u=new B,f=new Xe,d=new Xe,g=new Xe,x=new B,m=new B;function p(z,T,b){l.fromBufferAttribute(i,z),h.fromBufferAttribute(i,T),u.fromBufferAttribute(i,b),f.fromBufferAttribute(s,z),d.fromBufferAttribute(s,T),g.fromBufferAttribute(s,b),h.sub(l),u.sub(l),d.sub(f),g.sub(f);let E=1/(d.x*g.y-g.x*d.y);isFinite(E)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(E),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(E),o[z].add(x),o[T].add(x),o[b].add(x),c[z].add(m),c[T].add(m),c[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let z=0,T=y.length;z<T;++z){let b=y[z],E=b.start,O=b.count;for(let D=E,R=E+O;D<R;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let w=new B,M=new B,P=new B,A=new B;function F(z){P.fromBufferAttribute(r,z),A.copy(P);let T=o[z];w.copy(T),w.sub(P.multiplyScalar(P.dot(T))).normalize(),M.crossVectors(A,T);let E=M.dot(c[z])<0?-1:1;a.setXYZW(z,w.x,w.y,w.z,E)}for(let z=0,T=y.length;z<T;++z){let b=y[z],E=b.start,O=b.count;for(let D=E,R=E+O;D<R;D+=3)F(e.getX(D+0)),F(e.getX(D+1)),F(e.getX(D+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let r=new B,s=new B,a=new B,o=new B,c=new B,l=new B,h=new B,u=new B;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?d=c[x]*o.data.stride+o.offset:d=c[x]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new jt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=e(c,i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,i);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fh=new It,Yi=new Yr,va=new yi,ph=new B,Ma=new B,ba=new B,Sa=new B,Wl=new B,wa=new B,mh=new B,Ta=new B,ut=class extends Ct{constructor(e=new Pt,t=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){wa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(Wl.fromBufferAttribute(u,e),a?wa.addScaledVector(Wl,h):wa.addScaledVector(Wl.sub(t),h))}t.add(wa)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(s),Yi.copy(e.ray).recast(e.near),!(va.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(va,ph)===null||Yi.origin.distanceToSquared(ph)>(e.far-e.near)**2))&&(fh.copy(s).invert(),Yi.copy(e.ray).applyMatrix4(fh),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),w=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,P=w;M<P;M+=3){let A=o.getX(M),F=o.getX(M+1),z=o.getX(M+2);r=Ea(this,p,e,i,l,h,u,A,F,z),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=o.getX(m),w=o.getX(m+1),M=o.getX(m+2);r=Ea(this,a,e,i,l,h,u,y,w,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),w=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,P=w;M<P;M+=3){let A=M,F=M+1,z=M+2;r=Ea(this,p,e,i,l,h,u,A,F,z),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=m,w=m+1,M=m+2;r=Ea(this,a,e,i,l,h,u,y,w,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function bf(n,e,t,i,r,s,a,o){let c;if(e.side===hn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===gi,o),c===null)return null;Ta.copy(o),Ta.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Ta);return l<t.near||l>t.far?null:{distance:l,point:Ta.clone(),object:n}}function Ea(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Ma),n.getVertexPosition(c,ba),n.getVertexPosition(l,Sa);let h=bf(n,e,t,i,Ma,ba,Sa,mh);if(h){let u=new B;fi.getBarycoord(mh,Ma,ba,Sa,u),r&&(h.uv=fi.getInterpolatedAttribute(r,o,c,l,u,new Xe)),s&&(h.uv1=fi.getInterpolatedAttribute(s,o,c,l,u,new Xe)),a&&(h.normal=fi.getInterpolatedAttribute(a,o,c,l,u,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new B,materialIndex:0};fi.getNormal(Ma,ba,Sa,f.normal),h.face=f,h.barycoord=u}return h}var cn=class n extends Pt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(u,2));function g(x,m,p,y,w,M,P,A,F,z,T){let b=M/F,E=P/z,O=M/2,D=P/2,R=A/2,N=F+1,G=z+1,W=0,k=0,ne=new B;for(let re=0;re<G;re++){let ue=re*E-D;for(let Ce=0;Ce<N;Ce++){let He=Ce*b-O;ne[x]=He*y,ne[m]=ue*w,ne[p]=R,l.push(ne.x,ne.y,ne.z),ne[x]=0,ne[m]=0,ne[p]=A>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(Ce/F),u.push(1-re/z),W+=1}}for(let re=0;re<z;re++)for(let ue=0;ue<F;ue++){let Ce=f+ue+N*re,He=f+ue+N*(re+1),lt=f+(ue+1)+N*(re+1),$e=f+(ue+1)+N*re;c.push(Ce,He,$e),c.push(He,lt,$e),k+=6}o.addGroup(d,k,T),d+=k,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ur(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function gn(n){let e={};for(let t=0;t<n.length;t++){let i=ur(n[t]);for(let r in i)e[r]=i[r]}return e}function Sf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Sc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}var nl={clone:ur,merge:gn},wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wf,this.fragmentShader=Tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ur(e.uniforms),this.uniformsGroups=Sf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Bs=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ui=new B,gh=new Xe,xh=new Xe,Kt=class extends Bs{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,gh,xh),t.subVectors(xh,gh)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ps*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Dr=-90,Lr=1,Xa=class extends Ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Kt(Dr,Lr,e,t);r.layers=this.layers,this.add(r);let s=new Kt(Dr,Lr,e,t);s.layers=this.layers,this.add(s);let a=new Kt(Dr,Lr,e,t);a.layers=this.layers,this.add(a);let o=new Kt(Dr,Lr,e,t);o.layers=this.layers,this.add(o);let c=new Kt(Dr,Lr,e,t);c.layers=this.layers,this.add(c);let l=new Kt(Dr,Lr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ns)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ks=class extends mn{constructor(e=[],t=cr,i,r,s,a,o,c,l,h){super(e,t,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qa=class extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ks(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new cn(5,5,5),s=new wn({name:"CubemapFromEquirect",uniforms:ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Mi});s.uniforms.tEquirect.value=t;let a=new ut(r,s),o=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Hn),new Xa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}},Be=class extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ef={type:"move"},Jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ef)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Be;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Qi=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new tt(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},er=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Va,this.updateRanges=[],this.version=0,this.uuid=pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},_n=new B,$r=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Kr=class extends ei{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ur,ws=new B,Nr=new B,Fr=new B,zr=new Xe,Ts=new Xe,xu=new It,Aa=new B,Es=new B,Ca=new B,_h=new Xe,Xl=new Xe,yh=new Xe,Gs=class extends Ct{constructor(e=new Kr){if(super(),this.isSprite=!0,this.type="Sprite",Ur===void 0){Ur=new Pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Vs(t,5);Ur.setIndex([0,1,2,0,2,3]),Ur.setAttribute("position",new $r(i,3,0,!1)),Ur.setAttribute("uv",new $r(i,2,3,!1))}this.geometry=Ur,this.material=e,this.center=new Xe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Nr.setFromMatrixScale(this.matrixWorld),xu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Nr.multiplyScalar(-Fr.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let a=this.center;Ra(Aa.set(-.5,-.5,0),Fr,a,Nr,r,s),Ra(Es.set(.5,-.5,0),Fr,a,Nr,r,s),Ra(Ca.set(.5,.5,0),Fr,a,Nr,r,s),_h.set(0,0),Xl.set(1,0),yh.set(1,1);let o=e.ray.intersectTriangle(Aa,Es,Ca,!1,ws);if(o===null&&(Ra(Es.set(-.5,.5,0),Fr,a,Nr,r,s),Xl.set(0,1),o=e.ray.intersectTriangle(Aa,Ca,Es,!1,ws),o===null))return;let c=e.ray.origin.distanceTo(ws);c<e.near||c>e.far||t.push({distance:c,point:ws.clone(),uv:fi.getInterpolation(ws,Aa,Es,Ca,_h,Xl,yh,new Xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ra(n,e,t,i,r,s){zr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Ts.x=s*zr.x-r*zr.y,Ts.y=r*zr.x+s*zr.y):Ts.copy(zr),n.copy(e),n.x+=Ts.x,n.y+=Ts.y,n.applyMatrix4(xu)}var Ya=class extends mn{constructor(e=null,t=1,i=1,r,s,a,o,c,l=bn,h=bn,u,f){super(null,a,o,c,l,h,r,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jr=class extends jt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Or=new It,vh=new It,Ia=[],Mh=new Qn,Af=new It,As=new ut,Cs=new yi,Rt=class extends ut{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Af)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Or),Mh.copy(e.boundingBox).applyMatrix4(Or),this.boundingBox.union(Mh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Or),Cs.copy(e.boundingSphere).applyMatrix4(Or),this.boundingSphere.union(Cs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(As.geometry=this.geometry,As.material=this.material,As.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cs.copy(this.boundingSphere),Cs.applyMatrix4(i),e.ray.intersectsSphere(Cs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Or),vh.multiplyMatrices(i,Or),As.matrixWorld=vh,As.raycast(e,Ia);for(let a=0,o=Ia.length;a<o;a++){let c=Ia[a];c.instanceId=s,c.object=this,t.push(c)}Ia.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new jr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ya(new Float32Array(r*this.count),r,this.count,wo,Yn));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ql=new B,Cf=new B,Rf=new ot,Kn=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=ql.subVectors(i,t).cross(Cf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ql),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Rf.getNormalMatrix(e),r=this.coplanarPoint(ql).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zi=new yi,If=new Xe(.5,.5),Pa=new B,Qr=class{constructor(e=new Kn,t=new Kn,i=new Kn,r=new Kn,s=new Kn,a=new Kn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gn,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],f=s[6],d=s[7],g=s[8],x=s[9],m=s[10],p=s[11],y=s[12],w=s[13],M=s[14],P=s[15];if(r[0].setComponents(l-a,d-h,p-g,P-y).normalize(),r[1].setComponents(l+a,d+h,p+g,P+y).normalize(),r[2].setComponents(l+o,d+u,p+x,P+w).normalize(),r[3].setComponents(l-o,d-u,p-x,P-w).normalize(),i)r[4].setComponents(c,f,m,M).normalize(),r[5].setComponents(l-c,d-f,p-m,P-M).normalize();else if(r[4].setComponents(l-c,d-f,p-m,P-M).normalize(),t===Gn)r[5].setComponents(l+c,d+f,p+m,P+M).normalize();else if(t===Ns)r[5].setComponents(c,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){Zi.center.set(0,0,0);let t=If.distanceTo(e.center);return Zi.radius=.7071067811865476+t,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Pa.x=r.normal.x>0?e.max.x:e.min.x,Pa.y=r.normal.y>0?e.max.y:e.min.y,Pa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var zi=class extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Za=new B,Ja=new B,bh=new It,Rs=new Yr,Da=new yi,Yl=new B,Sh=new B,tr=class extends Ct{constructor(e=new Pt,t=new zi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Za.fromBufferAttribute(t,r-1),Ja.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Za.distanceTo(Ja);e.setAttribute("lineDistance",new rt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Da.copy(i.boundingSphere),Da.applyMatrix4(r),Da.radius+=s,e.ray.intersectsSphere(Da)===!1)return;bh.copy(r).invert(),Rs.copy(e.ray).applyMatrix4(bh);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=d,m=g-1;x<m;x+=l){let p=h.getX(x),y=h.getX(x+1),w=La(this,e,Rs,c,p,y,x);w&&t.push(w)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(d),p=La(this,e,Rs,c,x,m,g-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=d,m=g-1;x<m;x+=l){let p=La(this,e,Rs,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=La(this,e,Rs,c,g-1,d,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function La(n,e,t,i,r,s,a){let o=n.geometry.attributes.position;if(Za.fromBufferAttribute(o,r),Ja.fromBufferAttribute(o,s),t.distanceSqToSegment(Za,Ja,Yl,Sh)>i)return;Yl.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Yl);if(!(l<e.near||l>e.far))return{distance:l,point:Sh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Oi=class extends mn{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Hs=class extends mn{constructor(e,t,i=Gi,r,s,a,o=bn,c=bn,l,h=Gr,u=1){if(h!==Gr&&h!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ws=class extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var kt=class n extends Pt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],f=[],d=[],g=0,x=[],m=i/2,p=0;y(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new rt(u,3)),this.setAttribute("normal",new rt(f,3)),this.setAttribute("uv",new rt(d,2));function y(){let M=new B,P=new B,A=0,F=(t-e)/i;for(let z=0;z<=s;z++){let T=[],b=z/s,E=b*(t-e)+e;for(let O=0;O<=r;O++){let D=O/r,R=D*c+o,N=Math.sin(R),G=Math.cos(R);P.x=E*N,P.y=-b*i+m,P.z=E*G,u.push(P.x,P.y,P.z),M.set(N,F,G).normalize(),f.push(M.x,M.y,M.z),d.push(D,1-b),T.push(g++)}x.push(T)}for(let z=0;z<r;z++)for(let T=0;T<s;T++){let b=x[T][z],E=x[T+1][z],O=x[T+1][z+1],D=x[T][z+1];(e>0||T!==0)&&(h.push(b,E,D),A+=3),(t>0||T!==s-1)&&(h.push(E,O,D),A+=3)}l.addGroup(p,A,0),p+=A}function w(M){let P=g,A=new Xe,F=new B,z=0,T=M===!0?e:t,b=M===!0?1:-1;for(let O=1;O<=r;O++)u.push(0,m*b,0),f.push(0,b,0),d.push(.5,.5),g++;let E=g;for(let O=0;O<=r;O++){let R=O/r*c+o,N=Math.cos(R),G=Math.sin(R);F.x=T*G,F.y=m*b,F.z=T*N,u.push(F.x,F.y,F.z),f.push(0,b,0),A.x=N*.5+.5,A.y=G*.5*b+.5,d.push(A.x,A.y),g++}for(let O=0;O<r;O++){let D=P+O,R=E+O;M===!0?h.push(R,R+1,D):h.push(R+1,R,D),z+=3}l.addGroup(p,z,M===!0?1:2),p+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Xn=class n extends kt{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$a=class n extends Pt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];o(r),l(i),h(),this.setAttribute("position",new rt(s,3)),this.setAttribute("normal",new rt(s.slice(),3)),this.setAttribute("uv",new rt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let w=new B,M=new B,P=new B;for(let A=0;A<t.length;A+=3)d(t[A+0],w),d(t[A+1],M),d(t[A+2],P),c(w,M,P,y)}function c(y,w,M,P){let A=P+1,F=[];for(let z=0;z<=A;z++){F[z]=[];let T=y.clone().lerp(M,z/A),b=w.clone().lerp(M,z/A),E=A-z;for(let O=0;O<=E;O++)O===0&&z===A?F[z][O]=T:F[z][O]=T.clone().lerp(b,O/E)}for(let z=0;z<A;z++)for(let T=0;T<2*(A-z)-1;T++){let b=Math.floor(T/2);T%2===0?(f(F[z][b+1]),f(F[z+1][b]),f(F[z][b])):(f(F[z][b+1]),f(F[z+1][b+1]),f(F[z+1][b]))}}function l(y){let w=new B;for(let M=0;M<s.length;M+=3)w.x=s[M+0],w.y=s[M+1],w.z=s[M+2],w.normalize().multiplyScalar(y),s[M+0]=w.x,s[M+1]=w.y,s[M+2]=w.z}function h(){let y=new B;for(let w=0;w<s.length;w+=3){y.x=s[w+0],y.y=s[w+1],y.z=s[w+2];let M=m(y)/2/Math.PI+.5,P=p(y)/Math.PI+.5;a.push(M,1-P)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){let w=a[y+0],M=a[y+2],P=a[y+4],A=Math.max(w,M,P),F=Math.min(w,M,P);A>.9&&F<.1&&(w<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),P<.2&&(a[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function d(y,w){let M=y*3;w.x=e[M+0],w.y=e[M+1],w.z=e[M+2]}function g(){let y=new B,w=new B,M=new B,P=new B,A=new Xe,F=new Xe,z=new Xe;for(let T=0,b=0;T<s.length;T+=9,b+=6){y.set(s[T+0],s[T+1],s[T+2]),w.set(s[T+3],s[T+4],s[T+5]),M.set(s[T+6],s[T+7],s[T+8]),A.set(a[b+0],a[b+1]),F.set(a[b+2],a[b+3]),z.set(a[b+4],a[b+5]),P.copy(y).add(w).add(M).divideScalar(3);let E=m(P);x(A,b+0,y,E),x(F,b+2,w,E),x(z,b+4,M,E)}}function x(y,w,M,P){P<0&&y.x===1&&(a[w]=y.x-1),M.x===0&&M.z===0&&(a[w]=P/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var nr=class n extends $a{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Xs=class n extends Pt{constructor(e=[new Xe(0,-.5),new Xe(.5,0),new Xe(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=gt(r,0,Math.PI*2);let s=[],a=[],o=[],c=[],l=[],h=1/t,u=new B,f=new Xe,d=new B,g=new B,x=new B,m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(g)}for(let y=0;y<=t;y++){let w=i+y*h*r,M=Math.sin(w),P=Math.cos(w);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*M,u.y=e[A].y,u.z=e[A].x*P,a.push(u.x,u.y,u.z),f.x=y/t,f.y=A/(e.length-1),o.push(f.x,f.y);let F=c[3*A+0]*M,z=c[3*A+1],T=c[3*A+0]*P;l.push(F,z,T)}}for(let y=0;y<t;y++)for(let w=0;w<e.length-1;w++){let M=w+y*e.length,P=M,A=M+e.length,F=M+e.length+1,z=M+1;s.push(P,A,z),s.push(F,z,A)}this.setIndex(s),this.setAttribute("position",new rt(a,3)),this.setAttribute("uv",new rt(o,2)),this.setAttribute("normal",new rt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var Dn=class n extends Pt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,u=e/o,f=t/c,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*f-a;for(let w=0;w<l;w++){let M=w*u-s;g.push(M,-y,0),x.push(0,0,1),m.push(w/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){let w=y+l*p,M=y+l*(p+1),P=y+1+l*(p+1),A=y+1+l*p;d.push(w,M,A),d.push(M,P,A)}this.setIndex(d),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ir=class n extends Pt{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);let o=[],c=[],l=[],h=[],u=e,f=(t-e)/r,d=new B,g=new Xe;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){let p=s+m/i*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<r;x++){let m=x*(i+1);for(let p=0;p<i;p++){let y=p+m,w=y,M=y+i+1,P=y+i+2,A=y+1;o.push(w,M,A),o.push(M,P,A)}}this.setIndex(o),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Tn=class n extends Pt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new B,f=new B,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let y=[],w=p/i,M=0;p===0&&a===0?M=.5/t:p===i&&c===Math.PI&&(M=-.5/t);for(let P=0;P<=t;P++){let A=P/t;u.x=-e*Math.cos(r+A*s)*Math.sin(a+w*o),u.y=e*Math.cos(a+w*o),u.z=e*Math.sin(r+A*s)*Math.sin(a+w*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(A+M,1-w),y.push(l++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){let w=h[p][y+1],M=h[p][y],P=h[p+1][y],A=h[p+1][y+1];(p!==0||a>0)&&d.push(w,M,A),(p!==i-1||c<Math.PI)&&d.push(M,P,A)}this.setIndex(d),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var vi=class n extends Pt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let a=[],o=[],c=[],l=[],h=new B,u=new B,f=new B;for(let d=0;d<=i;d++)for(let g=0;g<=r;g++){let x=g/r*s,m=d/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/r),l.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=r;g++){let x=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,p=(r+1)*(d-1)+g,y=(r+1)*d+g;a.push(x,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ut=class extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_c,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qs=class extends Ut{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ka=class extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ja=class extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ua(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Pf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var rr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Qa=class extends rr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$l,endingEnd:$l}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kl:s=e,o=2*t-i;break;case jl:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Kl:a=e,c=2*i-t;break;case jl:a=1,c=i+r[1]-r[0];break;default:a=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(r-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,w=(-1-d)*m+(1.5+d)*x+.5*g,M=d*m-d*x;for(let P=0;P!==o;++P)s[P]=p*a[h+P]+y*a[l+P]+w*a[c+P]+M*a[u+P];return s}},eo=class extends rr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(r-t),u=1-h;for(let f=0;f!==o;++f)s[f]=a[l+f]*u+a[c+f]*h;return s}},to=class extends rr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ln=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ua(t,this.TimeBufferType),this.values=Ua(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ua(e.times,Array),values:Ua(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new to(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ls:t=this.InterpolantFactoryMethodDiscrete;break;case ka:t=this.InterpolantFactoryMethodLinear;break;case Na:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ls;case this.InterpolantFactoryMethodLinear:return ka;case this.InterpolantFactoryMethodSmooth:return Na}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&Pf(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Na,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(r)c=!0;else{let u=o*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[d+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*i,f=a*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=ka;var Bi=class extends Ln{constructor(e,t,i){super(e,t,i)}};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Ls;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var no=class extends Ln{constructor(e,t,i,r){super(e,t,i,r)}};no.prototype.ValueTypeName="color";var io=class extends Ln{constructor(e,t,i,r){super(e,t,i,r)}};io.prototype.ValueTypeName="number";var ro=class extends rr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(r-t),l=e*o;for(let h=l+o;l!==h;l+=4)_i.slerpFlat(s,0,a,l-o,a,l,c);return s}},Ys=class extends Ln{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new ro(this.times,this.values,this.getValueSize(),e)}};Ys.prototype.ValueTypeName="quaternion";Ys.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends Ln{constructor(e,t,i){super(e,t,i)}};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Ls;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var so=class extends Ln{constructor(e,t,i,r){super(e,t,i,r)}};so.prototype.ValueTypeName="vector";var Fa={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},ao=class{constructor(e,t,i){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},_u=new ao,es=class{constructor(e){this.manager=e!==void 0?e:_u,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};es.DEFAULT_MATERIAL_NAME="__DEFAULT";var Br=new WeakMap,oo=class extends es{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Fa.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Br.get(a);u===void 0&&(u=[],Br.set(a,u)),u.push({onLoad:t,onError:r})}return a}let o=Wr("img");function c(){h(),t&&t(this);let u=Br.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Br.delete(this),s.manager.itemEnd(e)}function l(u){h(),r&&r(u),Fa.remove(`image:${e}`);let f=Br.get(this)||[];for(let d=0;d<f.length;d++){let g=f[d];g.onError&&g.onError(u)}Br.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Fa.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var Zs=class extends es{constructor(e){super(e)}load(e,t,i,r){let s=new mn,a=new oo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},ts=class extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},sr=class extends ts{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Zl=new It,wh=new B,Th=new B,lo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=qn,this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qr,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;wh.setFromMatrixPosition(e.matrixWorld),t.position.copy(wh),Th.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Th),t.updateMatrixWorld(),Zl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Eh=new It,Is=new B,Jl=new B,ec=class extends lo{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new At(2,1,1,1),new At(0,1,1,1),new At(3,1,1,1),new At(1,1,1,1),new At(3,0,1,1),new At(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Is.setFromMatrixPosition(e.matrixWorld),i.position.copy(Is),Jl.copy(i.position),Jl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Jl),i.updateMatrixWorld(),r.makeTranslation(-Is.x,-Is.y,-Is.z),Eh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eh,i.coordinateSystem,i.reversedDepth)}},ar=class extends ts{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new ec}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Js=class extends Bs{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},tc=class extends lo{constructor(){super(new Js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},or=class extends ts{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new tc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var co=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var wc="\\[\\]\\.:\\/",Df=new RegExp("["+wc+"]","g"),Tc="[^"+wc+"]",Lf="[^"+wc.replace("\\.","")+"]",Uf=/((?:WC+[\/:])*)/.source.replace("WC",Tc),Nf=/(WCOD+)?/.source.replace("WCOD",Lf),Ff=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tc),zf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tc),Of=new RegExp("^"+Uf+Nf+Ff+zf+"$"),Bf=["material","materials","bones","map"],nc=class{constructor(e,t,i){let r=i||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Bt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Df,"")}static parseTrackName(e){let t=Of.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Bf.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[r];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=nc;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var e_=new Float32Array(1);var Ah=new It,lr=class{constructor(e,t,i=0,r=1/0){this.ray=new Yr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Zr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ah.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ah),this}intersectObject(e,t=!0,i=[]){return ic(e,this,i,t),i.sort(Ch),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ic(e[r],this,i,t);return i.sort(Ch),i}};function Ch(n,e){return n.distance-e.distance}function ic(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let a=0,o=s.length;a<o;a++)ic(s[a],e,t,!0)}}function Ec(n,e,t,i){let r=kf(i);switch(t){case mc:return n*e;case wo:return n*e/r.components*r.byteLength;case To:return n*e/r.components*r.byteLength;case xc:return n*e*2/r.components*r.byteLength;case Eo:return n*e*2/r.components*r.byteLength;case gc:return n*e*3/r.components*r.byteLength;case zn:return n*e*4/r.components*r.byteLength;case Ao:return n*e*4/r.components*r.byteLength;case js:case Qs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ea:case ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ro:case Po:return Math.max(n,16)*Math.max(e,8)/4;case Co:case Io:return Math.max(n,8)*Math.max(e,8)/2;case Do:case Lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case No:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case zo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ko:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Go:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ho:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case qo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Yo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Zo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Jo:case $o:case Ko:return Math.ceil(n/4)*Math.ceil(e/4)*16;case jo:case Qo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case el:case tl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kf(n){switch(n){case qn:case uc:return{byteLength:1,components:1};case rs:case dc:case ss:return{byteLength:2,components:1};case bo:case So:return{byteLength:2,components:4};case Gi:case Mo:case Yn:return{byteLength:4,components:1};case fc:case pc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gu(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Xf(n){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var qf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yf=`#ifdef USE_ALPHAHASH
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
#endif`,Zf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$f=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jf=`#ifdef USE_AOMAP
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
#endif`,Qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ep=`#ifdef USE_BATCHING
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
#endif`,tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sp=`#ifdef USE_IRIDESCENCE
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
#endif`,ap=`#ifdef USE_BUMPMAP
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
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mp=`#define PI 3.141592653589793
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
} // validated`,gp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xp=`vec3 transformedNormal = objectNormal;
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
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wp=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lp=`#ifdef USE_GRADIENTMAP
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
}`,Up=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zp=`uniform bool receiveShadow;
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
#endif`,Op=`#ifdef USE_ENVMAP
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
#endif`,Bp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hp=`PhysicalMaterial material;
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
#endif`,Wp=`struct PhysicalMaterial {
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
}`,Xp=`
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
#endif`,qp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$p=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tm=`#if defined( USE_POINTS_UV )
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
#endif`,nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`#ifdef USE_MORPHTARGETS
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
#endif`,lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pm=`#ifdef USE_NORMALMAP
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
#endif`,mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Im=`float getShadowMask() {
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
}`,Pm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dm=`#ifdef USE_SKINNING
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
#endif`,Lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Um=`#ifdef USE_SKINNING
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
#endif`,Nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Om=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bm=`#ifdef USE_TRANSMISSION
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
#endif`,km=`#ifdef USE_TRANSMISSION
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qm=`uniform sampler2D t2D;
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
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`#include <common>
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
}`,jm=`#if DEPTH_PACKING == 3200
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
}`,Qm=`#define DISTANCE
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
}`,eg=`#define DISTANCE
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
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`uniform float scale;
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
}`,rg=`uniform vec3 diffuse;
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
}`,sg=`#include <common>
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
}`,ag=`uniform vec3 diffuse;
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
}`,og=`#define LAMBERT
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
}`,lg=`#define LAMBERT
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
}`,cg=`#define MATCAP
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
}`,hg=`#define MATCAP
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
}`,ug=`#define NORMAL
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
}`,dg=`#define NORMAL
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
}`,fg=`#define PHONG
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
}`,pg=`#define PHONG
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
}`,mg=`#define STANDARD
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
}`,gg=`#define STANDARD
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
}`,xg=`#define TOON
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
}`,_g=`#define TOON
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
}`,yg=`uniform float size;
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
}`,vg=`uniform vec3 diffuse;
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
}`,Mg=`#include <common>
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
}`,bg=`uniform vec3 color;
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
}`,Sg=`uniform float rotation;
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
}`,wg=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:qf,alphahash_pars_fragment:Yf,alphamap_fragment:Zf,alphamap_pars_fragment:Jf,alphatest_fragment:$f,alphatest_pars_fragment:Kf,aomap_fragment:jf,aomap_pars_fragment:Qf,batching_pars_vertex:ep,batching_vertex:tp,begin_vertex:np,beginnormal_vertex:ip,bsdfs:rp,iridescence_fragment:sp,bumpmap_pars_fragment:ap,clipping_planes_fragment:op,clipping_planes_pars_fragment:lp,clipping_planes_pars_vertex:cp,clipping_planes_vertex:hp,color_fragment:up,color_pars_fragment:dp,color_pars_vertex:fp,color_vertex:pp,common:mp,cube_uv_reflection_fragment:gp,defaultnormal_vertex:xp,displacementmap_pars_vertex:_p,displacementmap_vertex:yp,emissivemap_fragment:vp,emissivemap_pars_fragment:Mp,colorspace_fragment:bp,colorspace_pars_fragment:Sp,envmap_fragment:wp,envmap_common_pars_fragment:Tp,envmap_pars_fragment:Ep,envmap_pars_vertex:Ap,envmap_physical_pars_fragment:Op,envmap_vertex:Cp,fog_vertex:Rp,fog_pars_vertex:Ip,fog_fragment:Pp,fog_pars_fragment:Dp,gradientmap_pars_fragment:Lp,lightmap_pars_fragment:Up,lights_lambert_fragment:Np,lights_lambert_pars_fragment:Fp,lights_pars_begin:zp,lights_toon_fragment:Bp,lights_toon_pars_fragment:kp,lights_phong_fragment:Vp,lights_phong_pars_fragment:Gp,lights_physical_fragment:Hp,lights_physical_pars_fragment:Wp,lights_fragment_begin:Xp,lights_fragment_maps:qp,lights_fragment_end:Yp,logdepthbuf_fragment:Zp,logdepthbuf_pars_fragment:Jp,logdepthbuf_pars_vertex:$p,logdepthbuf_vertex:Kp,map_fragment:jp,map_pars_fragment:Qp,map_particle_fragment:em,map_particle_pars_fragment:tm,metalnessmap_fragment:nm,metalnessmap_pars_fragment:im,morphinstance_vertex:rm,morphcolor_vertex:sm,morphnormal_vertex:am,morphtarget_pars_vertex:om,morphtarget_vertex:lm,normal_fragment_begin:cm,normal_fragment_maps:hm,normal_pars_fragment:um,normal_pars_vertex:dm,normal_vertex:fm,normalmap_pars_fragment:pm,clearcoat_normal_fragment_begin:mm,clearcoat_normal_fragment_maps:gm,clearcoat_pars_fragment:xm,iridescence_pars_fragment:_m,opaque_fragment:ym,packing:vm,premultiplied_alpha_fragment:Mm,project_vertex:bm,dithering_fragment:Sm,dithering_pars_fragment:wm,roughnessmap_fragment:Tm,roughnessmap_pars_fragment:Em,shadowmap_pars_fragment:Am,shadowmap_pars_vertex:Cm,shadowmap_vertex:Rm,shadowmask_pars_fragment:Im,skinbase_vertex:Pm,skinning_pars_vertex:Dm,skinning_vertex:Lm,skinnormal_vertex:Um,specularmap_fragment:Nm,specularmap_pars_fragment:Fm,tonemapping_fragment:zm,tonemapping_pars_fragment:Om,transmission_fragment:Bm,transmission_pars_fragment:km,uv_pars_fragment:Vm,uv_pars_vertex:Gm,uv_vertex:Hm,worldpos_vertex:Wm,background_vert:Xm,background_frag:qm,backgroundCube_vert:Ym,backgroundCube_frag:Zm,cube_vert:Jm,cube_frag:$m,depth_vert:Km,depth_frag:jm,distanceRGBA_vert:Qm,distanceRGBA_frag:eg,equirect_vert:tg,equirect_frag:ng,linedashed_vert:ig,linedashed_frag:rg,meshbasic_vert:sg,meshbasic_frag:ag,meshlambert_vert:og,meshlambert_frag:lg,meshmatcap_vert:cg,meshmatcap_frag:hg,meshnormal_vert:ug,meshnormal_frag:dg,meshphong_vert:fg,meshphong_frag:pg,meshphysical_vert:mg,meshphysical_frag:gg,meshtoon_vert:xg,meshtoon_frag:_g,points_vert:yg,points_frag:vg,shadow_vert:Mg,shadow_frag:bg,sprite_vert:Sg,sprite_frag:wg},ye={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},ni={basic:{uniforms:gn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:gn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new tt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:gn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:gn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:gn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new tt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:gn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:gn([ye.points,ye.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:gn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:gn([ye.common,ye.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:gn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:gn([ye.sprite,ye.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:gn([ye.common,ye.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:gn([ye.lights,ye.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};ni.physical={uniforms:gn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var il={r:0,b:0,g:0},dr=new Wn,Tg=new It;function Eg(n,e,t,i,r,s,a){let o=new tt(0),c=s===!0?0:1,l,h,u=null,f=0,d=null;function g(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?t:e).get(M)),M}function x(w){let M=!1,P=g(w);P===null?p(o,c):P&&P.isColor&&(p(P,1),M=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,M){let P=g(M);P&&(P.isCubeTexture||P.mapping===$s)?(h===void 0&&(h=new ut(new cn(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:ur(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,F,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),dr.copy(M.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(dr)),h.material.toneMapped=Et.getTransfer(P.colorSpace)!==Lt,(u!==P||f!==P.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=P,f=P.version,d=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new ut(new Dn(2,2),new wn({name:"BackgroundMaterial",uniforms:ur(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Et.getTransfer(P.colorSpace)!==Lt,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(u!==P||f!==P.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=P,f=P.version,d=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,M){w.getRGB(il,Sc(n)),i.buffers.color.setClear(il.r,il.g,il.b,M,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,M=1){o.set(w),c=M,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(o,c)},render:x,addToRenderList:m,dispose:y}}function Ag(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,a=!1;function o(b,E,O,D,R){let N=!1,G=u(D,O,E);s!==G&&(s=G,l(s.object)),N=d(b,D,O,R),N&&g(b,D,O,R),R!==null&&e.update(R,n.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,M(b,E,O,D),R!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))}function c(){return n.createVertexArray()}function l(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function u(b,E,O){let D=O.wireframe===!0,R=i[b.id];R===void 0&&(R={},i[b.id]=R);let N=R[E.id];N===void 0&&(N={},R[E.id]=N);let G=N[D];return G===void 0&&(G=f(c()),N[D]=G),G}function f(b){let E=[],O=[],D=[];for(let R=0;R<t;R++)E[R]=0,O[R]=0,D[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:O,attributeDivisors:D,object:b,attributes:{},index:null}}function d(b,E,O,D){let R=s.attributes,N=E.attributes,G=0,W=O.getAttributes();for(let k in W)if(W[k].location>=0){let re=R[k],ue=N[k];if(ue===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor)),re===void 0||re.attribute!==ue||ue&&re.data!==ue.data)return!0;G++}return s.attributesNum!==G||s.index!==D}function g(b,E,O,D){let R={},N=E.attributes,G=0,W=O.getAttributes();for(let k in W)if(W[k].location>=0){let re=N[k];re===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(re=b.instanceColor));let ue={};ue.attribute=re,re&&re.data&&(ue.data=re.data),R[k]=ue,G++}s.attributes=R,s.attributesNum=G,s.index=D}function x(){let b=s.newAttributes;for(let E=0,O=b.length;E<O;E++)b[E]=0}function m(b){p(b,0)}function p(b,E){let O=s.newAttributes,D=s.enabledAttributes,R=s.attributeDivisors;O[b]=1,D[b]===0&&(n.enableVertexAttribArray(b),D[b]=1),R[b]!==E&&(n.vertexAttribDivisor(b,E),R[b]=E)}function y(){let b=s.newAttributes,E=s.enabledAttributes;for(let O=0,D=E.length;O<D;O++)E[O]!==b[O]&&(n.disableVertexAttribArray(O),E[O]=0)}function w(b,E,O,D,R,N,G){G===!0?n.vertexAttribIPointer(b,E,O,R,N):n.vertexAttribPointer(b,E,O,D,R,N)}function M(b,E,O,D){x();let R=D.attributes,N=O.getAttributes(),G=E.defaultAttributeValues;for(let W in N){let k=N[W];if(k.location>=0){let ne=R[W];if(ne===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor)),ne!==void 0){let re=ne.normalized,ue=ne.itemSize,Ce=e.get(ne);if(Ce===void 0)continue;let He=Ce.buffer,lt=Ce.type,$e=Ce.bytesPerElement,Z=lt===n.INT||lt===n.UNSIGNED_INT||ne.gpuType===Mo;if(ne.isInterleavedBufferAttribute){let J=ne.data,pe=J.stride,we=ne.offset;if(J.isInstancedInterleavedBuffer){for(let Te=0;Te<k.locationSize;Te++)p(k.location+Te,J.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Te=0;Te<k.locationSize;Te++)m(k.location+Te);n.bindBuffer(n.ARRAY_BUFFER,He);for(let Te=0;Te<k.locationSize;Te++)w(k.location+Te,ue/k.locationSize,lt,re,pe*$e,(we+ue/k.locationSize*Te)*$e,Z)}else{if(ne.isInstancedBufferAttribute){for(let J=0;J<k.locationSize;J++)p(k.location+J,ne.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let J=0;J<k.locationSize;J++)m(k.location+J);n.bindBuffer(n.ARRAY_BUFFER,He);for(let J=0;J<k.locationSize;J++)w(k.location+J,ue/k.locationSize,lt,re,ue*$e,ue/k.locationSize*J*$e,Z)}}else if(G!==void 0){let re=G[W];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(k.location,re);break;case 3:n.vertexAttrib3fv(k.location,re);break;case 4:n.vertexAttrib4fv(k.location,re);break;default:n.vertexAttrib1fv(k.location,re)}}}}y()}function P(){z();for(let b in i){let E=i[b];for(let O in E){let D=E[O];for(let R in D)h(D[R].object),delete D[R];delete E[O]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;let E=i[b.id];for(let O in E){let D=E[O];for(let R in D)h(D[R].object),delete D[R];delete E[O]}delete i[b.id]}function F(b){for(let E in i){let O=i[E];if(O[b.id]===void 0)continue;let D=O[b.id];for(let R in D)h(D[R].object),delete D[R];delete O[b.id]}}function z(){T(),a=!0,s!==r&&(s=r,l(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:z,resetDefaultState:T,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:F,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Cg(n,e,t){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function a(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,i,1)}function c(l,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Rg(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let F=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(F){return!(F!==zn&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(F){let z=F===ss&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==qn&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Yn&&!z)}function c(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:P,maxSamples:A}}function Ig(n){let e=this,t=null,i=0,r=!1,s=!1,a=new Kn,o=new ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||r;return r=f,i=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{let y=s?0:i,w=y*4,M=p.clippingState||null;c.value=M,M=h(g,f,w,d);for(let P=0;P!==w;++P)M[P]=t[P];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=d+x*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,M=d;w!==x;++w,M+=4)a.copy(u[w]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Pg(n){let e=new WeakMap;function t(a,o){return o===_o?a.mapping=cr:o===yo&&(a.mapping=hr),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===_o||o===yo)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new qa(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var cs=4,yu=[.125,.215,.35,.446,.526,.582],mr=20,Ac=new Js,vu=new tt,Cc=null,Rc=0,Ic=0,Pc=!1,pr=(1+Math.sqrt(5))/2,ls=1/pr,Mu=[new B(-pr,ls,0),new B(pr,ls,0),new B(-ls,0,pr),new B(ls,0,pr),new B(0,pr,-ls),new B(0,pr,ls),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],Dg=new B,al=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:o=Dg}=s;Cc=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),Pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cc,Rc,Ic),this._renderer.xr.enabled=Pc,e.scissorTest=!1,rl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cr||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cc=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),Pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:ss,format:zn,colorSpace:ji,depthBuffer:!1},r=bu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bu(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lg(s)),this._blurMaterial=Ug(s,e,t)}return r}_compileMaterial(e){let t=new ut(this._lodPlanes[0],e);this._renderer.compile(t,Ac)}_sceneToCubeUV(e,t,i,r,s){let c=new Kt(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(vu),u.toneMapping=bi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));let x=new Sn({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),m=new ut(new cn,x),p=!1,y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,p=!0):(x.color.copy(vu),p=!0);for(let w=0;w<6;w++){let M=w%3;M===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[w],s.y,s.z)):M===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[w]));let P=this._cubeSize;rl(r,M*P,w>2?P:0,P,P),u.setRenderTarget(r),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===cr||e.mapping===hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Su());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new ut(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;rl(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Ac)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Mu[(r-s-1)%Mu.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ut(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*mr-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):mr;m>mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mr}`);let p=[],y=0;for(let F=0;F<mr;++F){let z=F/x,T=Math.exp(-z*z/2);p.push(T),F===0?y+=T:F<m&&(y+=2*T)}for(let F=0;F<p.length;F++)p[F]=p[F]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-i;let M=this._sizeLods[r],P=3*M*(r>w-cs?r-w+cs:0),A=4*(this._cubeSize-M);rl(t,P,A,3*M,2*M),c.setRenderTarget(t),c.render(u,Ac)}};function Lg(n){let e=[],t=[],i=[],r=n,s=n-cs+1+yu.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);t.push(o);let c=1/o;a>n-cs?c=yu[a-n+cs-1]:a===0&&(c=0),i.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*d),w=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let A=0;A<d;A++){let F=A%3*2/3-1,z=A>2?0:-1,T=[F,z,0,F+2/3,z,0,F+2/3,z+1,0,F,z,0,F+2/3,z+1,0,F,z+1,0];y.set(T,x*g*A),w.set(f,m*g*A);let b=[A,A,A,A,A,A];M.set(b,p*g*A)}let P=new Pt;P.setAttribute("position",new jt(y,x)),P.setAttribute("uv",new jt(w,m)),P.setAttribute("faceIndex",new jt(M,p)),e.push(P),r>cs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function bu(n,e,t){let i=new jn(n,e,t);return i.texture.mapping=$s,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Ug(n,e,t){let i=new Float32Array(mr),r=new B(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Su(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function wu(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Vc(){return`

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
	`}function Ng(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===_o||c===yo,h=c===cr||c===hr;if(l||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new al(n)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return l&&d&&d.height>0||h&&d&&r(d)?(t===null&&(t=new al(n)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Fg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Xr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function zg(n,e,t,i){let r={},s=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];let d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let d in f)e.update(f[d],n.ARRAY_BUFFER)}function l(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let w=0,M=y.length;w<M;w+=3){let P=y[w+0],A=y[w+1],F=y[w+2];f.push(P,A,A,F,F,P)}}else if(g!==void 0){let y=g.array;x=g.version;for(let w=0,M=y.length/3-1;w<M;w+=3){let P=w+0,A=w+1,F=w+2;f.push(P,A,A,F,F,P)}}else return;let m=new(bc(f)?Os:zs)(f,1);m.version=x;let p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Og(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,d){n.drawElements(i,d,s,f*a),t.update(d,i,1)}function l(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,f*a,g),t.update(d,i,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function u(f,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*x[y];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Bg(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function kg(n,e,t){let i=new WeakMap,r=new At;function s(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==u){let T=function(){F.dispose(),i.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],w=0;d===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let M=o.attributes.position.count*w,P=1;M>e.maxTextureSize&&(P=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let A=new Float32Array(M*P*4*u),F=new Fs(A,M,P,u);F.type=Yn,F.needsUpdate=!0;let z=w*4;for(let b=0;b<u;b++){let E=m[b],O=p[b],D=y[b],R=M*P*4*b;for(let N=0;N<E.count;N++){let G=N*z;d===!0&&(r.fromBufferAttribute(E,N),A[R+G+0]=r.x,A[R+G+1]=r.y,A[R+G+2]=r.z,A[R+G+3]=0),g===!0&&(r.fromBufferAttribute(O,N),A[R+G+4]=r.x,A[R+G+5]=r.y,A[R+G+6]=r.z,A[R+G+7]=0),x===!0&&(r.fromBufferAttribute(D,N),A[R+G+8]=r.x,A[R+G+9]=r.y,A[R+G+10]=r.z,A[R+G+11]=D.itemSize===4?r.w:1)}}f={count:u,texture:F,size:new Xe(M,P)},i.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Vg(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return u}function a(){r=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}var Hu=new mn,Tu=new Hs(1,1),Wu=new Fs,Xu=new Wa,qu=new ks,Eu=[],Au=[],Cu=new Float32Array(16),Ru=new Float32Array(9),Iu=new Float32Array(4);function ds(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Eu[r];if(s===void 0&&(s=new Float32Array(r),Eu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function en(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ol(n,e){let t=Au[e];t===void 0&&(t=new Int32Array(e),Au[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Gg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Hg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2fv(this.addr,e),en(t,e)}}function Wg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;n.uniform3fv(this.addr,e),en(t,e)}}function Xg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4fv(this.addr,e),en(t,e)}}function qg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;Iu.set(i),n.uniformMatrix2fv(this.addr,!1,Iu),en(t,i)}}function Yg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;Ru.set(i),n.uniformMatrix3fv(this.addr,!1,Ru),en(t,i)}}function Zg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;Cu.set(i),n.uniformMatrix4fv(this.addr,!1,Cu),en(t,i)}}function Jg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $g(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2iv(this.addr,e),en(t,e)}}function Kg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3iv(this.addr,e),en(t,e)}}function jg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4iv(this.addr,e),en(t,e)}}function Qg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function e0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2uiv(this.addr,e),en(t,e)}}function t0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3uiv(this.addr,e),en(t,e)}}function n0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4uiv(this.addr,e),en(t,e)}}function i0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Tu.compareFunction=yc,s=Tu):s=Hu,t.setTexture2D(e||s,r)}function r0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Xu,r)}function s0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||qu,r)}function a0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Wu,r)}function o0(n){switch(n){case 5126:return Gg;case 35664:return Hg;case 35665:return Wg;case 35666:return Xg;case 35674:return qg;case 35675:return Yg;case 35676:return Zg;case 5124:case 35670:return Jg;case 35667:case 35671:return $g;case 35668:case 35672:return Kg;case 35669:case 35673:return jg;case 5125:return Qg;case 36294:return e0;case 36295:return t0;case 36296:return n0;case 35678:case 36198:case 36298:case 36306:case 35682:return i0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return a0}}function l0(n,e){n.uniform1fv(this.addr,e)}function c0(n,e){let t=ds(e,this.size,2);n.uniform2fv(this.addr,t)}function h0(n,e){let t=ds(e,this.size,3);n.uniform3fv(this.addr,t)}function u0(n,e){let t=ds(e,this.size,4);n.uniform4fv(this.addr,t)}function d0(n,e){let t=ds(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function f0(n,e){let t=ds(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function p0(n,e){let t=ds(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function m0(n,e){n.uniform1iv(this.addr,e)}function g0(n,e){n.uniform2iv(this.addr,e)}function x0(n,e){n.uniform3iv(this.addr,e)}function _0(n,e){n.uniform4iv(this.addr,e)}function y0(n,e){n.uniform1uiv(this.addr,e)}function v0(n,e){n.uniform2uiv(this.addr,e)}function M0(n,e){n.uniform3uiv(this.addr,e)}function b0(n,e){n.uniform4uiv(this.addr,e)}function S0(n,e,t){let i=this.cache,r=e.length,s=ol(t,r);Qt(i,s)||(n.uniform1iv(this.addr,s),en(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Hu,s[a])}function w0(n,e,t){let i=this.cache,r=e.length,s=ol(t,r);Qt(i,s)||(n.uniform1iv(this.addr,s),en(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Xu,s[a])}function T0(n,e,t){let i=this.cache,r=e.length,s=ol(t,r);Qt(i,s)||(n.uniform1iv(this.addr,s),en(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||qu,s[a])}function E0(n,e,t){let i=this.cache,r=e.length,s=ol(t,r);Qt(i,s)||(n.uniform1iv(this.addr,s),en(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Wu,s[a])}function A0(n){switch(n){case 5126:return l0;case 35664:return c0;case 35665:return h0;case 35666:return u0;case 35674:return d0;case 35675:return f0;case 35676:return p0;case 5124:case 35670:return m0;case 35667:case 35671:return g0;case 35668:case 35672:return x0;case 35669:case 35673:return _0;case 5125:return y0;case 36294:return v0;case 36295:return M0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return T0;case 36289:case 36303:case 36311:case 36292:return E0}}var Lc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=o0(t.type)}},Uc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A0(t.type)}},Nc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},Dc=/(\w+)(\])?(\[|\.)?/g;function Pu(n,e){n.seq.push(e),n.map[e.id]=e}function C0(n,e,t){let i=n.name,r=i.length;for(Dc.lastIndex=0;;){let s=Dc.exec(i),a=Dc.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Pu(t,l===void 0?new Lc(o,n,e):new Uc(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Nc(o),Pu(t,u)),t=u}}}var hs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);C0(s,a,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function Du(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var R0=37297,I0=0;function P0(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Lu=new ot;function D0(n){Et._getMatrix(Lu,Et.workingColorSpace,n);let e=`mat3( ${Lu.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(n)){case Us:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Uu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+P0(n.getShaderSource(e),o)}else return s}function L0(n,e){let t=D0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function U0(n,e){let t;switch(e){case Kh:t="Linear";break;case jh:t="Reinhard";break;case Qh:t="Cineon";break;case is:t="ACESFilmic";break;case tu:t="AgX";break;case nu:t="Neutral";break;case eu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var sl=new B;function N0(){Et.getLuminanceCoefficients(sl);let n=sl.x.toFixed(4),e=sl.y.toFixed(4),t=sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function z0(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function O0(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),a=s.name,o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ia(n){return n!==""}function Nu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var B0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fc(n){return n.replace(B0,V0)}var k0=new Map;function V0(n,e){let t=pt[e];if(t===void 0){let i=k0.get(e);if(i!==void 0)t=pt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fc(t)}var G0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zu(n){return n.replace(G0,H0)}function H0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ou(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function W0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===sc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ns?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function X0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case cr:case hr:e="ENVMAP_TYPE_CUBE";break;case $s:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case hr:e="ENVMAP_MODE_REFRACTION";break}return e}function Y0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case cc:e="ENVMAP_BLENDING_MULTIPLY";break;case Jh:e="ENVMAP_BLENDING_MIX";break;case $h:e="ENVMAP_BLENDING_ADD";break}return e}function Z0(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function J0(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=W0(t),l=X0(t),h=q0(t),u=Y0(t),f=Z0(t),d=F0(t),g=z0(s),x=r.createProgram(),m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ia).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ia).join(`
`),p.length>0&&(p+=`
`)):(m=[Ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),p=[Ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?pt.tonemapping_pars_fragment:"",t.toneMapping!==bi?U0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,L0("linearToOutputTexel",t.outputColorSpace),N0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ia).join(`
`)),a=Fc(a),a=Nu(a,t),a=Fu(a,t),o=Fc(o),o=Nu(o,t),o=Fu(o,t),a=zu(a),o=zu(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=y+m+a,M=y+p+o,P=Du(r,r.VERTEX_SHADER,w),A=Du(r,r.FRAGMENT_SHADER,M);r.attachShader(x,P),r.attachShader(x,A),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function F(E){if(n.debug.checkShaderErrors){let O=r.getProgramInfoLog(x)||"",D=r.getShaderInfoLog(P)||"",R=r.getShaderInfoLog(A)||"",N=O.trim(),G=D.trim(),W=R.trim(),k=!0,ne=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,P,A);else{let re=Uu(r,P,"vertex"),ue=Uu(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+N+`
`+re+`
`+ue)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(G===""||W==="")&&(ne=!1);ne&&(E.diagnostics={runnable:k,programLog:N,vertexShader:{log:G,prefix:m},fragmentShader:{log:W,prefix:p}})}r.deleteShader(P),r.deleteShader(A),z=new hs(r,x),T=O0(r,x)}let z;this.getUniforms=function(){return z===void 0&&F(this),z};let T;this.getAttributes=function(){return T===void 0&&F(this),T};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(x,R0)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=I0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=A,this}var $0=0,zc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Oc(e),t.set(e,i)),i}},Oc=class{constructor(e){this.id=$0++,this.code=e,this.usedTimes=0}};function K0(n,e,t,i,r,s,a){let o=new Zr,c=new zc,l=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures,d=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,b,E,O,D){let R=O.fog,N=D.geometry,G=T.isMeshStandardMaterial?O.environment:null,W=(T.isMeshStandardMaterial?t:e).get(T.envMap||G),k=W&&W.mapping===$s?W.image.height:null,ne=g[T.type];T.precision!==null&&(d=r.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));let re=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ue=re!==void 0?re.length:0,Ce=0;N.morphAttributes.position!==void 0&&(Ce=1),N.morphAttributes.normal!==void 0&&(Ce=2),N.morphAttributes.color!==void 0&&(Ce=3);let He,lt,$e,Z;if(ne){let ct=ni[ne];He=ct.vertexShader,lt=ct.fragmentShader}else He=T.vertexShader,lt=T.fragmentShader,c.update(T),$e=c.getVertexShaderID(T),Z=c.getFragmentShaderID(T);let J=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),we=D.isInstancedMesh===!0,Te=D.isBatchedMesh===!0,Qe=!!T.map,Le=!!T.matcap,L=!!W,vt=!!T.aoMap,et=!!T.lightMap,Ye=!!T.bumpMap,Me=!!T.normalMap,yt=!!T.displacementMap,Ue=!!T.emissiveMap,Ke=!!T.metalnessMap,Tt=!!T.roughnessMap,Ot=T.anisotropy>0,C=T.clearcoat>0,v=T.dispersion>0,Y=T.iridescence>0,te=T.sheen>0,se=T.transmission>0,Q=Ot&&!!T.anisotropyMap,Ve=C&&!!T.clearcoatMap,de=C&&!!T.clearcoatNormalMap,ve=C&&!!T.clearcoatRoughnessMap,ze=Y&&!!T.iridescenceMap,oe=Y&&!!T.iridescenceThicknessMap,me=te&&!!T.sheenColorMap,De=te&&!!T.sheenRoughnessMap,Oe=!!T.specularMap,xe=!!T.specularColorMap,je=!!T.specularIntensityMap,V=se&&!!T.transmissionMap,ce=se&&!!T.thicknessMap,fe=!!T.gradientMap,Ie=!!T.alphaMap,ie=T.alphaTest>0,ee=!!T.alphaHash,Ne=!!T.extensions,Ze=bi;T.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ze=n.toneMapping);let Mt={shaderID:ne,shaderType:T.type,shaderName:T.name,vertexShader:He,fragmentShader:lt,defines:T.defines,customVertexShaderID:$e,customFragmentShaderID:Z,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:Te,batchingColor:Te&&D._colorsTexture!==null,instancing:we,instancingColor:we&&D.instanceColor!==null,instancingMorph:we&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ji,alphaToCoverage:!!T.alphaToCoverage,map:Qe,matcap:Le,envMap:L,envMapMode:L&&W.mapping,envMapCubeUVHeight:k,aoMap:vt,lightMap:et,bumpMap:Ye,normalMap:Me,displacementMap:f&&yt,emissiveMap:Ue,normalMapObjectSpace:Me&&T.normalMapType===au,normalMapTangentSpace:Me&&T.normalMapType===_c,metalnessMap:Ke,roughnessMap:Tt,anisotropy:Ot,anisotropyMap:Q,clearcoat:C,clearcoatMap:Ve,clearcoatNormalMap:de,clearcoatRoughnessMap:ve,dispersion:v,iridescence:Y,iridescenceMap:ze,iridescenceThicknessMap:oe,sheen:te,sheenColorMap:me,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:xe,specularIntensityMap:je,transmission:se,transmissionMap:V,thicknessMap:ce,gradientMap:fe,opaque:T.transparent===!1&&T.blending===$i&&T.alphaToCoverage===!1,alphaMap:Ie,alphaTest:ie,alphaHash:ee,combine:T.combine,mapUv:Qe&&x(T.map.channel),aoMapUv:vt&&x(T.aoMap.channel),lightMapUv:et&&x(T.lightMap.channel),bumpMapUv:Ye&&x(T.bumpMap.channel),normalMapUv:Me&&x(T.normalMap.channel),displacementMapUv:yt&&x(T.displacementMap.channel),emissiveMapUv:Ue&&x(T.emissiveMap.channel),metalnessMapUv:Ke&&x(T.metalnessMap.channel),roughnessMapUv:Tt&&x(T.roughnessMap.channel),anisotropyMapUv:Q&&x(T.anisotropyMap.channel),clearcoatMapUv:Ve&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:de&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:me&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(T.sheenRoughnessMap.channel),specularMapUv:Oe&&x(T.specularMap.channel),specularColorMapUv:xe&&x(T.specularColorMap.channel),specularIntensityMapUv:je&&x(T.specularIntensityMap.channel),transmissionMapUv:V&&x(T.transmissionMap.channel),thicknessMapUv:ce&&x(T.thicknessMap.channel),alphaMapUv:Ie&&x(T.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Me||Ot),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!N.attributes.uv&&(Qe||Ie),fog:!!R,useFog:T.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pe,skinning:D.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ce,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&E.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,decodeVideoTexture:Qe&&T.map.isVideoTexture===!0&&Et.getTransfer(T.map.colorSpace)===Lt,decodeVideoTextureEmissive:Ue&&T.emissiveMap.isVideoTexture===!0&&Et.getTransfer(T.emissiveMap.colorSpace)===Lt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ht,flipSided:T.side===hn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ne&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&T.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function p(T){let b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(let E in T.defines)b.push(E),b.push(T.defines[E]);return T.isRawShaderMaterial===!1&&(y(b,T),w(b,T),b.push(n.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function y(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function w(T,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),T.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),T.push(o.mask)}function M(T){let b=g[T.type],E;if(b){let O=ni[b];E=nl.clone(O.uniforms)}else E=T.uniforms;return E}function P(T,b){let E;for(let O=0,D=h.length;O<D;O++){let R=h[O];if(R.cacheKey===b){E=R,++E.usedTimes;break}}return E===void 0&&(E=new J0(n,b,T,s),h.push(E)),E}function A(T){if(--T.usedTimes===0){let b=h.indexOf(T);h[b]=h[h.length-1],h.pop(),T.destroy()}}function F(T){c.remove(T)}function z(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:P,releaseProgram:A,releaseShaderCache:F,programs:h,dispose:z}}function j0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Q0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Bu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ku(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u,f,d,g,x,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function o(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function c(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||Q0),i.length>1&&i.sort(f||Bu),r.length>1&&r.sort(f||Bu)}function h(){for(let u=e,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function ex(){let n=new WeakMap;function e(i,r){let s=n.get(i),a;return s===void 0?(a=new ku,n.set(i,[a])):r>=s.length?(a=new ku,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function tx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new tt};break;case"SpotLight":t={position:new B,direction:new B,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function nx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var ix=0;function rx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function sx(n){let e=new tx,t=nx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new B);let r=new B,s=new It,a=new It;function o(l){let h=0,u=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,y=0,w=0,M=0,P=0,A=0,F=0;l.sort(rx);for(let T=0,b=l.length;T<b;T++){let E=l[T],O=E.color,D=E.intensity,R=E.distance,N=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=O.r*D,u+=O.g*D,f+=O.b*D;else if(E.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(E.sh.coefficients[G],D);F++}else if(E.isDirectionalLight){let G=e.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let W=E.shadow,k=t.get(E);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,i.directionalShadow[d]=k,i.directionalShadowMap[d]=N,i.directionalShadowMatrix[d]=E.shadow.matrix,y++}i.directional[d]=G,d++}else if(E.isSpotLight){let G=e.get(E);G.position.setFromMatrixPosition(E.matrixWorld),G.color.copy(O).multiplyScalar(D),G.distance=R,G.coneCos=Math.cos(E.angle),G.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),G.decay=E.decay,i.spot[x]=G;let W=E.shadow;if(E.map&&(i.spotLightMap[P]=E.map,P++,W.updateMatrices(E),E.castShadow&&A++),i.spotLightMatrix[x]=W.matrix,E.castShadow){let k=t.get(E);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,i.spotShadow[x]=k,i.spotShadowMap[x]=N,M++}x++}else if(E.isRectAreaLight){let G=e.get(E);G.color.copy(O).multiplyScalar(D),G.halfWidth.set(E.width*.5,0,0),G.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=G,m++}else if(E.isPointLight){let G=e.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),G.distance=E.distance,G.decay=E.decay,E.castShadow){let W=E.shadow,k=t.get(E);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,k.shadowCameraNear=W.camera.near,k.shadowCameraFar=W.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=E.shadow.matrix,w++}i.point[g]=G,g++}else if(E.isHemisphereLight){let G=e.get(E);G.skyColor.copy(E.color).multiplyScalar(D),G.groundColor.copy(E.groundColor).multiplyScalar(D),i.hemi[p]=G,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let z=i.hash;(z.directionalLength!==d||z.pointLength!==g||z.spotLength!==x||z.rectAreaLength!==m||z.hemiLength!==p||z.numDirectionalShadows!==y||z.numPointShadows!==w||z.numSpotShadows!==M||z.numSpotMaps!==P||z.numLightProbes!==F)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=M+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=F,z.directionalLength=d,z.pointLength=g,z.spotLength=x,z.rectAreaLength=m,z.hemiLength=p,z.numDirectionalShadows=y,z.numPointShadows=w,z.numSpotShadows=M,z.numSpotMaps=P,z.numLightProbes=F,i.version=ix++)}function c(l,h){let u=0,f=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){let w=l[p];if(w.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),u++}else if(w.isSpotLight){let M=i.spot[d];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(w.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(w.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){let M=i.hemi[x];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:i}}function Vu(n){let e=new sx(n),t=[],i=[];function r(h){l.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function ax(n){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new Vu(n),e.set(r,[o])):s>=a.length?(o=new Vu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lx=`uniform sampler2D shadow_pass;
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
}`;function cx(n,e,t){let i=new Qr,r=new Xe,s=new Xe,a=new At,o=new Ka({depthPacking:su}),c=new ja,l={},h=t.maxTextureSize,u={[gi]:hn,[hn]:gi,[Ht]:Ht},f=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:ox,fragmentShader:lx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Pt;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ut(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc;let p=this.type;this.render=function(A,F,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let T=n.getRenderTarget(),b=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Mi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let D=p!==ti&&this.type===ti,R=p===ti&&this.type!==ti;for(let N=0,G=A.length;N<G;N++){let W=A[N],k=W.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);let ne=k.getFrameExtents();if(r.multiply(ne),s.copy(k.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ne.x),r.x=s.x*ne.x,k.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ne.y),r.y=s.y*ne.y,k.mapSize.y=s.y)),k.map===null||D===!0||R===!0){let ue=this.type!==ti?{minFilter:bn,magFilter:bn}:{};k.map!==null&&k.map.dispose(),k.map=new jn(r.x,r.y,ue),k.map.texture.name=W.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();let re=k.getViewportCount();for(let ue=0;ue<re;ue++){let Ce=k.getViewport(ue);a.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),O.viewport(a),k.updateMatrices(W,ue),i=k.getFrustum(),M(F,z,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===ti&&y(k,z),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,b,E)};function y(A,F){let z=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new jn(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(F,null,z,f,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(F,null,z,d,x,null)}function w(A,F,z,T){let b=null,E=z.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)b=E;else if(b=z.isPointLight===!0?c:o,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){let O=b.uuid,D=F.uuid,R=l[O];R===void 0&&(R={},l[O]=R);let N=R[D];N===void 0&&(N=b.clone(),R[D]=N,F.addEventListener("dispose",P)),b=N}if(b.visible=F.visible,b.wireframe=F.wireframe,T===ti?b.side=F.shadowSide!==null?F.shadowSide:F.side:b.side=F.shadowSide!==null?F.shadowSide:u[F.side],b.alphaMap=F.alphaMap,b.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,b.map=F.map,b.clipShadows=F.clipShadows,b.clippingPlanes=F.clippingPlanes,b.clipIntersection=F.clipIntersection,b.displacementMap=F.displacementMap,b.displacementScale=F.displacementScale,b.displacementBias=F.displacementBias,b.wireframeLinewidth=F.wireframeLinewidth,b.linewidth=F.linewidth,z.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let O=n.properties.get(b);O.light=z}return b}function M(A,F,z,T,b){if(A.visible===!1)return;if(A.layers.test(F.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===ti)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,A.matrixWorld);let D=e.update(A),R=A.material;if(Array.isArray(R)){let N=D.groups;for(let G=0,W=N.length;G<W;G++){let k=N[G],ne=R[k.materialIndex];if(ne&&ne.visible){let re=w(A,ne,T,b);A.onBeforeShadow(n,A,F,z,D,re,k),n.renderBufferDirect(z,null,D,re,A,k),A.onAfterShadow(n,A,F,z,D,re,k)}}}else if(R.visible){let N=w(A,R,T,b);A.onBeforeShadow(n,A,F,z,D,N,null),n.renderBufferDirect(z,null,D,N,A,null),A.onAfterShadow(n,A,F,z,D,N,null)}}let O=A.children;for(let D=0,R=O.length;D<R;D++)M(O[D],F,z,T,b)}function P(A){A.target.removeEventListener("dispose",P);for(let z in l){let T=l[z],b=A.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}var hx={[ho]:uo,[fo]:go,[po]:xo,[Ki]:mo,[uo]:ho,[go]:fo,[xo]:po,[mo]:Ki};function ux(n,e){function t(){let V=!1,ce=new At,fe=null,Ie=new At(0,0,0,0);return{setMask:function(ie){fe!==ie&&!V&&(n.colorMask(ie,ie,ie,ie),fe=ie)},setLocked:function(ie){V=ie},setClear:function(ie,ee,Ne,Ze,Mt){Mt===!0&&(ie*=Ze,ee*=Ze,Ne*=Ze),ce.set(ie,ee,Ne,Ze),Ie.equals(ce)===!1&&(n.clearColor(ie,ee,Ne,Ze),Ie.copy(ce))},reset:function(){V=!1,fe=null,Ie.set(-1,0,0,0)}}}function i(){let V=!1,ce=!1,fe=null,Ie=null,ie=null;return{setReversed:function(ee){if(ce!==ee){let Ne=e.get("EXT_clip_control");ee?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ce=ee;let Ze=ie;ie=null,this.setClear(Ze)}},getReversed:function(){return ce},setTest:function(ee){ee?J(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(ee){fe!==ee&&!V&&(n.depthMask(ee),fe=ee)},setFunc:function(ee){if(ce&&(ee=hx[ee]),Ie!==ee){switch(ee){case ho:n.depthFunc(n.NEVER);break;case uo:n.depthFunc(n.ALWAYS);break;case fo:n.depthFunc(n.LESS);break;case Ki:n.depthFunc(n.LEQUAL);break;case po:n.depthFunc(n.EQUAL);break;case mo:n.depthFunc(n.GEQUAL);break;case go:n.depthFunc(n.GREATER);break;case xo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=ee}},setLocked:function(ee){V=ee},setClear:function(ee){ie!==ee&&(ce&&(ee=1-ee),n.clearDepth(ee),ie=ee)},reset:function(){V=!1,fe=null,Ie=null,ie=null,ce=!1}}}function r(){let V=!1,ce=null,fe=null,Ie=null,ie=null,ee=null,Ne=null,Ze=null,Mt=null;return{setTest:function(ct){V||(ct?J(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(ct){ce!==ct&&!V&&(n.stencilMask(ct),ce=ct)},setFunc:function(ct,un,yn){(fe!==ct||Ie!==un||ie!==yn)&&(n.stencilFunc(ct,un,yn),fe=ct,Ie=un,ie=yn)},setOp:function(ct,un,yn){(ee!==ct||Ne!==un||Ze!==yn)&&(n.stencilOp(ct,un,yn),ee=ct,Ne=un,Ze=yn)},setLocked:function(ct){V=ct},setClear:function(ct){Mt!==ct&&(n.clearStencil(ct),Mt=ct)},reset:function(){V=!1,ce=null,fe=null,Ie=null,ie=null,ee=null,Ne=null,Ze=null,Mt=null}}}let s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,y=null,w=null,M=null,P=null,A=null,F=new tt(0,0,0),z=0,T=!1,b=null,E=null,O=null,D=null,R=null,N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,W=0,k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=W>=1):k.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=W>=2);let ne=null,re={},ue=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),He=new At().fromArray(ue),lt=new At().fromArray(Ce);function $e(V,ce,fe,Ie){let ie=new Uint8Array(4),ee=n.createTexture();n.bindTexture(V,ee),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ne=0;Ne<fe;Ne++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,ie):n.texImage2D(ce+Ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ie);return ee}let Z={};Z[n.TEXTURE_2D]=$e(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=$e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=$e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=$e(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(n.DEPTH_TEST),a.setFunc(Ki),Ye(!1),Me(rc),J(n.CULL_FACE),vt(Mi);function J(V){h[V]!==!0&&(n.enable(V),h[V]=!0)}function pe(V){h[V]!==!1&&(n.disable(V),h[V]=!1)}function we(V,ce){return u[V]!==ce?(n.bindFramebuffer(V,ce),u[V]=ce,V===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ce),V===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function Te(V,ce){let fe=d,Ie=!1;if(V){fe=f.get(ce),fe===void 0&&(fe=[],f.set(ce,fe));let ie=V.textures;if(fe.length!==ie.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,Ne=ie.length;ee<Ne;ee++)fe[ee]=n.COLOR_ATTACHMENT0+ee;fe.length=ie.length,Ie=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(fe)}function Qe(V){return g!==V?(n.useProgram(V),g=V,!0):!1}let Le={[Fi]:n.FUNC_ADD,[Dh]:n.FUNC_SUBTRACT,[Lh]:n.FUNC_REVERSE_SUBTRACT};Le[Uh]=n.MIN,Le[Nh]=n.MAX;let L={[Fh]:n.ZERO,[zh]:n.ONE,[Oh]:n.SRC_COLOR,[za]:n.SRC_ALPHA,[Wh]:n.SRC_ALPHA_SATURATE,[Gh]:n.DST_COLOR,[kh]:n.DST_ALPHA,[Bh]:n.ONE_MINUS_SRC_COLOR,[Oa]:n.ONE_MINUS_SRC_ALPHA,[Hh]:n.ONE_MINUS_DST_COLOR,[Vh]:n.ONE_MINUS_DST_ALPHA,[Xh]:n.CONSTANT_COLOR,[qh]:n.ONE_MINUS_CONSTANT_COLOR,[Yh]:n.CONSTANT_ALPHA,[Zh]:n.ONE_MINUS_CONSTANT_ALPHA};function vt(V,ce,fe,Ie,ie,ee,Ne,Ze,Mt,ct){if(V===Mi){x===!0&&(pe(n.BLEND),x=!1);return}if(x===!1&&(J(n.BLEND),x=!0),V!==Ph){if(V!==m||ct!==T){if((p!==Fi||M!==Fi)&&(n.blendEquation(n.FUNC_ADD),p=Fi,M=Fi),ct)switch(V){case $i:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ac:n.blendFunc(n.ONE,n.ONE);break;case oc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case $i:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ac:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case oc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}y=null,w=null,P=null,A=null,F.set(0,0,0),z=0,m=V,T=ct}return}ie=ie||ce,ee=ee||fe,Ne=Ne||Ie,(ce!==p||ie!==M)&&(n.blendEquationSeparate(Le[ce],Le[ie]),p=ce,M=ie),(fe!==y||Ie!==w||ee!==P||Ne!==A)&&(n.blendFuncSeparate(L[fe],L[Ie],L[ee],L[Ne]),y=fe,w=Ie,P=ee,A=Ne),(Ze.equals(F)===!1||Mt!==z)&&(n.blendColor(Ze.r,Ze.g,Ze.b,Mt),F.copy(Ze),z=Mt),m=V,T=!1}function et(V,ce){V.side===Ht?pe(n.CULL_FACE):J(n.CULL_FACE);let fe=V.side===hn;ce&&(fe=!fe),Ye(fe),V.blending===$i&&V.transparent===!1?vt(Mi):vt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),s.setMask(V.colorWrite);let Ie=V.stencilWrite;o.setTest(Ie),Ie&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ue(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(V){b!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),b=V)}function Me(V){V!==Rh?(J(n.CULL_FACE),V!==E&&(V===rc?n.cullFace(n.BACK):V===Ih?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),E=V}function yt(V){V!==O&&(G&&n.lineWidth(V),O=V)}function Ue(V,ce,fe){V?(J(n.POLYGON_OFFSET_FILL),(D!==ce||R!==fe)&&(n.polygonOffset(ce,fe),D=ce,R=fe)):pe(n.POLYGON_OFFSET_FILL)}function Ke(V){V?J(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function Tt(V){V===void 0&&(V=n.TEXTURE0+N-1),ne!==V&&(n.activeTexture(V),ne=V)}function Ot(V,ce,fe){fe===void 0&&(ne===null?fe=n.TEXTURE0+N-1:fe=ne);let Ie=re[fe];Ie===void 0&&(Ie={type:void 0,texture:void 0},re[fe]=Ie),(Ie.type!==V||Ie.texture!==ce)&&(ne!==fe&&(n.activeTexture(fe),ne=fe),n.bindTexture(V,ce||Z[V]),Ie.type=V,Ie.texture=ce)}function C(){let V=re[ne];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Y(){try{n.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function te(){try{n.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function se(){try{n.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Q(){try{n.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ve(){try{n.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{n.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{n.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ze(){try{n.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function oe(){try{n.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(V){He.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),He.copy(V))}function De(V){lt.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),lt.copy(V))}function Oe(V,ce){let fe=l.get(ce);fe===void 0&&(fe=new WeakMap,l.set(ce,fe));let Ie=fe.get(V);Ie===void 0&&(Ie=n.getUniformBlockIndex(ce,V.name),fe.set(V,Ie))}function xe(V,ce){let Ie=l.get(ce).get(V);c.get(ce)!==Ie&&(n.uniformBlockBinding(ce,Ie,V.__bindingPointIndex),c.set(ce,Ie))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ne=null,re={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,y=null,w=null,M=null,P=null,A=null,F=new tt(0,0,0),z=0,T=!1,b=null,E=null,O=null,D=null,R=null,He.set(0,0,n.canvas.width,n.canvas.height),lt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:pe,bindFramebuffer:we,drawBuffers:Te,useProgram:Qe,setBlending:vt,setMaterial:et,setFlipSided:Ye,setCullFace:Me,setLineWidth:yt,setPolygonOffset:Ue,setScissorTest:Ke,activeTexture:Tt,bindTexture:Ot,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:Y,texImage2D:ze,texImage3D:oe,updateUBOMapping:Oe,uniformBlockBinding:xe,texStorage2D:de,texStorage3D:ve,texSubImage2D:te,texSubImage3D:se,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ve,scissor:me,viewport:De,reset:je}}function dx(n,e,t,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,v){return d?new OffscreenCanvas(C,v):Wr("canvas")}function x(C,v,Y){let te=1,se=Ot(C);if((se.width>Y||se.height>Y)&&(te=Y/Math.max(se.width,se.height)),te<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Q=Math.floor(te*se.width),Ve=Math.floor(te*se.height);u===void 0&&(u=g(Q,Ve));let de=v?g(Q,Ve):u;return de.width=Q,de.height=Ve,de.getContext("2d").drawImage(C,0,0,Q,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Q+"x"+Ve+")."),de}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(C,v,Y,te,se=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=v;if(v===n.RED&&(Y===n.FLOAT&&(Q=n.R32F),Y===n.HALF_FLOAT&&(Q=n.R16F),Y===n.UNSIGNED_BYTE&&(Q=n.R8)),v===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(Q=n.R8UI),Y===n.UNSIGNED_SHORT&&(Q=n.R16UI),Y===n.UNSIGNED_INT&&(Q=n.R32UI),Y===n.BYTE&&(Q=n.R8I),Y===n.SHORT&&(Q=n.R16I),Y===n.INT&&(Q=n.R32I)),v===n.RG&&(Y===n.FLOAT&&(Q=n.RG32F),Y===n.HALF_FLOAT&&(Q=n.RG16F),Y===n.UNSIGNED_BYTE&&(Q=n.RG8)),v===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(Q=n.RG8UI),Y===n.UNSIGNED_SHORT&&(Q=n.RG16UI),Y===n.UNSIGNED_INT&&(Q=n.RG32UI),Y===n.BYTE&&(Q=n.RG8I),Y===n.SHORT&&(Q=n.RG16I),Y===n.INT&&(Q=n.RG32I)),v===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),Y===n.UNSIGNED_INT&&(Q=n.RGB32UI),Y===n.BYTE&&(Q=n.RGB8I),Y===n.SHORT&&(Q=n.RGB16I),Y===n.INT&&(Q=n.RGB32I)),v===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),Y===n.UNSIGNED_INT&&(Q=n.RGBA32UI),Y===n.BYTE&&(Q=n.RGBA8I),Y===n.SHORT&&(Q=n.RGBA16I),Y===n.INT&&(Q=n.RGBA32I)),v===n.RGB&&(Y===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),v===n.RGBA){let Ve=se?Us:Et.getTransfer(te);Y===n.FLOAT&&(Q=n.RGBA32F),Y===n.HALF_FLOAT&&(Q=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(Q=Ve===Lt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function M(C,v){let Y;return C?v===null||v===Gi||v===as?Y=n.DEPTH24_STENCIL8:v===Yn?Y=n.DEPTH32F_STENCIL8:v===rs&&(Y=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Gi||v===as?Y=n.DEPTH_COMPONENT24:v===Yn?Y=n.DEPTH_COMPONENT32F:v===rs&&(Y=n.DEPTH_COMPONENT16),Y}function P(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==bn&&C.minFilter!==Hn?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function A(C){let v=C.target;v.removeEventListener("dispose",A),z(v),v.isVideoTexture&&h.delete(v)}function F(C){let v=C.target;v.removeEventListener("dispose",F),b(v)}function z(C){let v=i.get(C);if(v.__webglInit===void 0)return;let Y=C.source,te=f.get(Y);if(te){let se=te[v.__cacheKey];se.usedTimes--,se.usedTimes===0&&T(C),Object.keys(te).length===0&&f.delete(Y)}i.remove(C)}function T(C){let v=i.get(C);n.deleteTexture(v.__webglTexture);let Y=C.source,te=f.get(Y);delete te[v.__cacheKey],a.memory.textures--}function b(C){let v=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(v.__webglFramebuffer[te]))for(let se=0;se<v.__webglFramebuffer[te].length;se++)n.deleteFramebuffer(v.__webglFramebuffer[te][se]);else n.deleteFramebuffer(v.__webglFramebuffer[te]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[te])}else{if(Array.isArray(v.__webglFramebuffer))for(let te=0;te<v.__webglFramebuffer.length;te++)n.deleteFramebuffer(v.__webglFramebuffer[te]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let te=0;te<v.__webglColorRenderbuffer.length;te++)v.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[te]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let Y=C.textures;for(let te=0,se=Y.length;te<se;te++){let Q=i.get(Y[te]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(Y[te])}i.remove(C)}let E=0;function O(){E=0}function D(){let C=E;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),E+=1,C}function R(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function N(C,v){let Y=i.get(C);if(C.isVideoTexture&&Ke(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&Y.__version!==C.version){let te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(Y,C,v);return}}else C.isExternalTexture&&(Y.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+v)}function G(C,v){let Y=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){Z(Y,C,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+v)}function W(C,v){let Y=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){Z(Y,C,v);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+v)}function k(C,v){let Y=i.get(C);if(C.version>0&&Y.__version!==C.version){J(Y,C,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+v)}let ne={[Vr]:n.REPEAT,[Ni]:n.CLAMP_TO_EDGE,[Ba]:n.MIRRORED_REPEAT},re={[bn]:n.NEAREST,[iu]:n.NEAREST_MIPMAP_NEAREST,[Ks]:n.NEAREST_MIPMAP_LINEAR,[Hn]:n.LINEAR,[vo]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},ue={[ou]:n.NEVER,[fu]:n.ALWAYS,[lu]:n.LESS,[yc]:n.LEQUAL,[cu]:n.EQUAL,[du]:n.GEQUAL,[hu]:n.GREATER,[uu]:n.NOTEQUAL};function Ce(C,v){if(v.type===Yn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Hn||v.magFilter===vo||v.magFilter===Ks||v.magFilter===Vi||v.minFilter===Hn||v.minFilter===vo||v.minFilter===Ks||v.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,ne[v.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ne[v.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ne[v.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,re[v.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,re[v.minFilter]),v.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ue[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===bn||v.minFilter!==Ks&&v.minFilter!==Vi||v.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function He(C,v){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",A));let te=v.source,se=f.get(te);se===void 0&&(se={},f.set(te,se));let Q=R(v);if(Q!==C.__cacheKey){se[Q]===void 0&&(se[Q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),se[Q].usedTimes++;let Ve=se[C.__cacheKey];Ve!==void 0&&(se[C.__cacheKey].usedTimes--,Ve.usedTimes===0&&T(v)),C.__cacheKey=Q,C.__webglTexture=se[Q].texture}return Y}function lt(C,v,Y){return Math.floor(Math.floor(C/Y)/v)}function $e(C,v,Y,te){let Q=C.updateRanges;if(Q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,Y,te,v.data);else{Q.sort((oe,me)=>oe.start-me.start);let Ve=0;for(let oe=1;oe<Q.length;oe++){let me=Q[Ve],De=Q[oe],Oe=me.start+me.count,xe=lt(De.start,v.width,4),je=lt(me.start,v.width,4);De.start<=Oe+1&&xe===je&&lt(De.start+De.count-1,v.width,4)===xe?me.count=Math.max(me.count,De.start+De.count-me.start):(++Ve,Q[Ve]=De)}Q.length=Ve+1;let de=n.getParameter(n.UNPACK_ROW_LENGTH),ve=n.getParameter(n.UNPACK_SKIP_PIXELS),ze=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let oe=0,me=Q.length;oe<me;oe++){let De=Q[oe],Oe=Math.floor(De.start/4),xe=Math.ceil(De.count/4),je=Oe%v.width,V=Math.floor(Oe/v.width),ce=xe,fe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,je),n.pixelStorei(n.UNPACK_SKIP_ROWS,V),t.texSubImage2D(n.TEXTURE_2D,0,je,V,ce,fe,Y,te,v.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,de),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,ze)}}function Z(C,v,Y){let te=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(te=n.TEXTURE_3D);let se=He(C,v),Q=v.source;t.bindTexture(te,C.__webglTexture,n.TEXTURE0+Y);let Ve=i.get(Q);if(Q.version!==Ve.__version||se===!0){t.activeTexture(n.TEXTURE0+Y);let de=Et.getPrimaries(Et.workingColorSpace),ve=v.colorSpace===Zn?null:Et.getPrimaries(v.colorSpace),ze=v.colorSpace===Zn||de===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let oe=x(v.image,!1,r.maxTextureSize);oe=Tt(v,oe);let me=s.convert(v.format,v.colorSpace),De=s.convert(v.type),Oe=w(v.internalFormat,me,De,v.colorSpace,v.isVideoTexture);Ce(te,v);let xe,je=v.mipmaps,V=v.isVideoTexture!==!0,ce=Ve.__version===void 0||se===!0,fe=Q.dataReady,Ie=P(v,oe);if(v.isDepthTexture)Oe=M(v.format===os,v.type),ce&&(V?t.texStorage2D(n.TEXTURE_2D,1,Oe,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Oe,oe.width,oe.height,0,me,De,null));else if(v.isDataTexture)if(je.length>0){V&&ce&&t.texStorage2D(n.TEXTURE_2D,Ie,Oe,je[0].width,je[0].height);for(let ie=0,ee=je.length;ie<ee;ie++)xe=je[ie],V?fe&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,xe.width,xe.height,me,De,xe.data):t.texImage2D(n.TEXTURE_2D,ie,Oe,xe.width,xe.height,0,me,De,xe.data);v.generateMipmaps=!1}else V?(ce&&t.texStorage2D(n.TEXTURE_2D,Ie,Oe,oe.width,oe.height),fe&&$e(v,oe,me,De)):t.texImage2D(n.TEXTURE_2D,0,Oe,oe.width,oe.height,0,me,De,oe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){V&&ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Oe,je[0].width,je[0].height,oe.depth);for(let ie=0,ee=je.length;ie<ee;ie++)if(xe=je[ie],v.format!==zn)if(me!==null)if(V){if(fe)if(v.layerUpdates.size>0){let Ne=Ec(xe.width,xe.height,v.format,v.type);for(let Ze of v.layerUpdates){let Mt=xe.data.subarray(Ze*Ne/xe.data.BYTES_PER_ELEMENT,(Ze+1)*Ne/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,Ze,xe.width,xe.height,1,me,Mt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,xe.width,xe.height,oe.depth,me,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Oe,xe.width,xe.height,oe.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,xe.width,xe.height,oe.depth,me,De,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Oe,xe.width,xe.height,oe.depth,0,me,De,xe.data)}else{V&&ce&&t.texStorage2D(n.TEXTURE_2D,Ie,Oe,je[0].width,je[0].height);for(let ie=0,ee=je.length;ie<ee;ie++)xe=je[ie],v.format!==zn?me!==null?V?fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,xe.width,xe.height,me,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Oe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?fe&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,xe.width,xe.height,me,De,xe.data):t.texImage2D(n.TEXTURE_2D,ie,Oe,xe.width,xe.height,0,me,De,xe.data)}else if(v.isDataArrayTexture)if(V){if(ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Oe,oe.width,oe.height,oe.depth),fe)if(v.layerUpdates.size>0){let ie=Ec(oe.width,oe.height,v.format,v.type);for(let ee of v.layerUpdates){let Ne=oe.data.subarray(ee*ie/oe.data.BYTES_PER_ELEMENT,(ee+1)*ie/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,oe.width,oe.height,1,me,De,Ne)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,me,De,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,oe.width,oe.height,oe.depth,0,me,De,oe.data);else if(v.isData3DTexture)V?(ce&&t.texStorage3D(n.TEXTURE_3D,Ie,Oe,oe.width,oe.height,oe.depth),fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,me,De,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,oe.width,oe.height,oe.depth,0,me,De,oe.data);else if(v.isFramebufferTexture){if(ce)if(V)t.texStorage2D(n.TEXTURE_2D,Ie,Oe,oe.width,oe.height);else{let ie=oe.width,ee=oe.height;for(let Ne=0;Ne<Ie;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,Oe,ie,ee,0,me,De,null),ie>>=1,ee>>=1}}else if(je.length>0){if(V&&ce){let ie=Ot(je[0]);t.texStorage2D(n.TEXTURE_2D,Ie,Oe,ie.width,ie.height)}for(let ie=0,ee=je.length;ie<ee;ie++)xe=je[ie],V?fe&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,me,De,xe):t.texImage2D(n.TEXTURE_2D,ie,Oe,me,De,xe);v.generateMipmaps=!1}else if(V){if(ce){let ie=Ot(oe);t.texStorage2D(n.TEXTURE_2D,Ie,Oe,ie.width,ie.height)}fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,De,oe)}else t.texImage2D(n.TEXTURE_2D,0,Oe,me,De,oe);m(v)&&p(te),Ve.__version=Q.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function J(C,v,Y){if(v.image.length!==6)return;let te=He(C,v),se=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+Y);let Q=i.get(se);if(se.version!==Q.__version||te===!0){t.activeTexture(n.TEXTURE0+Y);let Ve=Et.getPrimaries(Et.workingColorSpace),de=v.colorSpace===Zn?null:Et.getPrimaries(v.colorSpace),ve=v.colorSpace===Zn||Ve===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let ze=v.isCompressedTexture||v.image[0].isCompressedTexture,oe=v.image[0]&&v.image[0].isDataTexture,me=[];for(let ee=0;ee<6;ee++)!ze&&!oe?me[ee]=x(v.image[ee],!0,r.maxCubemapSize):me[ee]=oe?v.image[ee].image:v.image[ee],me[ee]=Tt(v,me[ee]);let De=me[0],Oe=s.convert(v.format,v.colorSpace),xe=s.convert(v.type),je=w(v.internalFormat,Oe,xe,v.colorSpace),V=v.isVideoTexture!==!0,ce=Q.__version===void 0||te===!0,fe=se.dataReady,Ie=P(v,De);Ce(n.TEXTURE_CUBE_MAP,v);let ie;if(ze){V&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,je,De.width,De.height);for(let ee=0;ee<6;ee++){ie=me[ee].mipmaps;for(let Ne=0;Ne<ie.length;Ne++){let Ze=ie[Ne];v.format!==zn?Oe!==null?V?fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ne,0,0,Ze.width,Ze.height,Oe,Ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ne,je,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ne,0,0,Ze.width,Ze.height,Oe,xe,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ne,je,Ze.width,Ze.height,0,Oe,xe,Ze.data)}}}else{if(ie=v.mipmaps,V&&ce){ie.length>0&&Ie++;let ee=Ot(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,je,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(oe){V?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,me[ee].width,me[ee].height,Oe,xe,me[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,je,me[ee].width,me[ee].height,0,Oe,xe,me[ee].data);for(let Ne=0;Ne<ie.length;Ne++){let Mt=ie[Ne].image[ee].image;V?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ne+1,0,0,Mt.width,Mt.height,Oe,xe,Mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ne+1,je,Mt.width,Mt.height,0,Oe,xe,Mt.data)}}else{V?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Oe,xe,me[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,je,Oe,xe,me[ee]);for(let Ne=0;Ne<ie.length;Ne++){let Ze=ie[Ne];V?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ne+1,0,0,Oe,xe,Ze.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ne+1,je,Oe,xe,Ze.image[ee])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),Q.__version=se.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function pe(C,v,Y,te,se,Q){let Ve=s.convert(Y.format,Y.colorSpace),de=s.convert(Y.type),ve=w(Y.internalFormat,Ve,de,Y.colorSpace),ze=i.get(v),oe=i.get(Y);if(oe.__renderTarget=v,!ze.__hasExternalTextures){let me=Math.max(1,v.width>>Q),De=Math.max(1,v.height>>Q);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,Q,ve,me,De,v.depth,0,Ve,de,null):t.texImage2D(se,Q,ve,me,De,0,Ve,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ue(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,se,oe.__webglTexture,0,yt(v)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,se,oe.__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(C,v,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,C),v.depthBuffer){let te=v.depthTexture,se=te&&te.isDepthTexture?te.type:null,Q=M(v.stencilBuffer,se),Ve=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=yt(v);Ue(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,Q,v.width,v.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,Q,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Q,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ve,n.RENDERBUFFER,C)}else{let te=v.textures;for(let se=0;se<te.length;se++){let Q=te[se],Ve=s.convert(Q.format,Q.colorSpace),de=s.convert(Q.type),ve=w(Q.internalFormat,Ve,de,Q.colorSpace),ze=yt(v);Y&&Ue(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,ve,v.width,v.height):Ue(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ze,ve,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ve,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(C,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let te=i.get(v.depthTexture);te.__renderTarget=v,(!te.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),N(v.depthTexture,0);let se=te.__webglTexture,Q=yt(v);if(v.depthTexture.format===Gr)Ue(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(v.depthTexture.format===os)Ue(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Qe(C){let v=i.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let te=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),te){let se=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,te.removeEventListener("dispose",se)};te.addEventListener("dispose",se),v.__depthDisposeCallback=se}v.__boundDepthTexture=te}if(C.depthTexture&&!v.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");let te=C.texture.mipmaps;te&&te.length>0?Te(v.__webglFramebuffer[0],C):Te(v.__webglFramebuffer,C)}else if(Y){v.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[te]),v.__webglDepthbuffer[te]===void 0)v.__webglDepthbuffer[te]=n.createRenderbuffer(),we(v.__webglDepthbuffer[te],C,!1);else{let se=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer[te];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,Q)}}else{let te=C.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),we(v.__webglDepthbuffer,C,!1);else{let se=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,Q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(C,v,Y){let te=i.get(C);v!==void 0&&pe(te.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&Qe(C)}function L(C){let v=C.texture,Y=i.get(C),te=i.get(v);C.addEventListener("dispose",F);let se=C.textures,Q=C.isWebGLCubeRenderTarget===!0,Ve=se.length>1;if(Ve||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=v.version,a.memory.textures++),Q){Y.__webglFramebuffer=[];for(let de=0;de<6;de++)if(v.mipmaps&&v.mipmaps.length>0){Y.__webglFramebuffer[de]=[];for(let ve=0;ve<v.mipmaps.length;ve++)Y.__webglFramebuffer[de][ve]=n.createFramebuffer()}else Y.__webglFramebuffer[de]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){Y.__webglFramebuffer=[];for(let de=0;de<v.mipmaps.length;de++)Y.__webglFramebuffer[de]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Ve)for(let de=0,ve=se.length;de<ve;de++){let ze=i.get(se[de]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Ue(C)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let de=0;de<se.length;de++){let ve=se[de];Y.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[de]);let ze=s.convert(ve.format,ve.colorSpace),oe=s.convert(ve.type),me=w(ve.internalFormat,ze,oe,ve.colorSpace,C.isXRRenderTarget===!0),De=yt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,me,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,Y.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),we(Y.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,v);for(let de=0;de<6;de++)if(v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)pe(Y.__webglFramebuffer[de][ve],C,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve);else pe(Y.__webglFramebuffer[de],C,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let de=0,ve=se.length;de<ve;de++){let ze=se[de],oe=i.get(ze),me=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(me=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,oe.__webglTexture),Ce(me,ze),pe(Y.__webglFramebuffer,C,ze,n.COLOR_ATTACHMENT0+de,me,0),m(ze)&&p(me)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,te.__webglTexture),Ce(de,v),v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)pe(Y.__webglFramebuffer[ve],C,v,n.COLOR_ATTACHMENT0,de,ve);else pe(Y.__webglFramebuffer,C,v,n.COLOR_ATTACHMENT0,de,0);m(v)&&p(de),t.unbindTexture()}C.depthBuffer&&Qe(C)}function vt(C){let v=C.textures;for(let Y=0,te=v.length;Y<te;Y++){let se=v[Y];if(m(se)){let Q=y(C),Ve=i.get(se).__webglTexture;t.bindTexture(Q,Ve),p(Q),t.unbindTexture()}}}let et=[],Ye=[];function Me(C){if(C.samples>0){if(Ue(C)===!1){let v=C.textures,Y=C.width,te=C.height,se=n.COLOR_BUFFER_BIT,Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ve=i.get(C),de=v.length>1;if(de)for(let ze=0;ze<v.length;ze++)t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer);let ve=C.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let ze=0;ze<v.length;ze++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ve.__webglColorRenderbuffer[ze]);let oe=i.get(v[ze]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,Y,te,0,0,Y,te,se,n.NEAREST),c===!0&&(et.length=0,Ye.length=0,et.push(n.COLOR_ATTACHMENT0+ze),C.depthBuffer&&C.resolveDepthBuffer===!1&&(et.push(Q),Ye.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ye)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let ze=0;ze<v.length;ze++){t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,Ve.__webglColorRenderbuffer[ze]);let oe=i.get(v[ze]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let v=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function yt(C){return Math.min(r.maxSamples,C.samples)}function Ue(C){let v=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ke(C){let v=a.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function Tt(C,v){let Y=C.colorSpace,te=C.format,se=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Y!==ji&&Y!==Zn&&(Et.getTransfer(Y)===Lt?(te!==zn||se!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),v}function Ot(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=O,this.setTexture2D=N,this.setTexture2DArray=G,this.setTexture3D=W,this.setTextureCube=k,this.rebindTextures=Le,this.setupRenderTarget=L,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Ue}function fx(n,e){function t(i,r=Zn){let s,a=Et.getTransfer(r);if(i===qn)return n.UNSIGNED_BYTE;if(i===bo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===So)return n.UNSIGNED_SHORT_5_5_5_1;if(i===fc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===uc)return n.BYTE;if(i===dc)return n.SHORT;if(i===rs)return n.UNSIGNED_SHORT;if(i===Mo)return n.INT;if(i===Gi)return n.UNSIGNED_INT;if(i===Yn)return n.FLOAT;if(i===ss)return n.HALF_FLOAT;if(i===mc)return n.ALPHA;if(i===gc)return n.RGB;if(i===zn)return n.RGBA;if(i===Gr)return n.DEPTH_COMPONENT;if(i===os)return n.DEPTH_STENCIL;if(i===wo)return n.RED;if(i===To)return n.RED_INTEGER;if(i===xc)return n.RG;if(i===Eo)return n.RG_INTEGER;if(i===Ao)return n.RGBA_INTEGER;if(i===js||i===Qs||i===ea||i===ta)if(a===Lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===js)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===js)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ea)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ta)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Co||i===Ro||i===Io||i===Po)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Co)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ro)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Io)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Po)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Do||i===Lo||i===Uo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Do||i===Lo)return a===Lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Uo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===No||i===Fo||i===zo||i===Oo||i===Bo||i===ko||i===Vo||i===Go||i===Ho||i===Wo||i===Xo||i===qo||i===Yo||i===Zo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===No)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ko)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Go)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ho)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jo||i===$o||i===Ko)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Jo)return a===Lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$o)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ko)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jo||i===Qo||i===el||i===tl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===jo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Qo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===el)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===tl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===as?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mx=`
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

}`,Bc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ws(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new wn({vertexShader:px,fragmentShader:mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new Dn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kc=class extends xi{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new Bc,p={},y=t.getContextAttributes(),w=null,M=null,P=[],A=[],F=new Xe,z=null,T=new Kt;T.viewport=new At;let b=new Kt;b.viewport=new At;let E=[T,b],O=new co,D=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let J=P[Z];return J===void 0&&(J=new Jr,P[Z]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Z){let J=P[Z];return J===void 0&&(J=new Jr,P[Z]=J),J.getGripSpace()},this.getHand=function(Z){let J=P[Z];return J===void 0&&(J=new Jr,P[Z]=J),J.getHandSpace()};function N(Z){let J=A.indexOf(Z.inputSource);if(J===-1)return;let pe=P[J];pe!==void 0&&(pe.update(Z.inputSource,Z.frame,l||a),pe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",W);for(let Z=0;Z<P.length;Z++){let J=A[Z];J!==null&&(A[Z]=null,P[Z].disconnect(J))}D=null,R=null,m.reset();for(let Z in p)delete p[Z];e.setRenderTarget(w),d=null,f=null,u=null,r=null,M=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(z),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",G),r.addEventListener("inputsourceschange",W),y.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(F),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,we=null,Te=null;y.depth&&(Te=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=y.stencil?os:Gr,we=y.stencil?as:Gi);let Qe={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(Qe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new jn(f.textureWidth,f.textureHeight,{format:zn,type:qn,depthTexture:new Hs(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let pe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new jn(d.framebufferWidth,d.framebufferHeight,{format:zn,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(Z){for(let J=0;J<Z.removed.length;J++){let pe=Z.removed[J],we=A.indexOf(pe);we>=0&&(A[we]=null,P[we].disconnect(pe))}for(let J=0;J<Z.added.length;J++){let pe=Z.added[J],we=A.indexOf(pe);if(we===-1){for(let Qe=0;Qe<P.length;Qe++)if(Qe>=A.length){A.push(pe),we=Qe;break}else if(A[Qe]===null){A[Qe]=pe,we=Qe;break}if(we===-1)break}let Te=P[we];Te&&Te.connect(pe)}}let k=new B,ne=new B;function re(Z,J,pe){k.setFromMatrixPosition(J.matrixWorld),ne.setFromMatrixPosition(pe.matrixWorld);let we=k.distanceTo(ne),Te=J.projectionMatrix.elements,Qe=pe.projectionMatrix.elements,Le=Te[14]/(Te[10]-1),L=Te[14]/(Te[10]+1),vt=(Te[9]+1)/Te[5],et=(Te[9]-1)/Te[5],Ye=(Te[8]-1)/Te[0],Me=(Qe[8]+1)/Qe[0],yt=Le*Ye,Ue=Le*Me,Ke=we/(-Ye+Me),Tt=Ke*-Ye;if(J.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Tt),Z.translateZ(Ke),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Te[10]===-1)Z.projectionMatrix.copy(J.projectionMatrix),Z.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let Ot=Le+Ke,C=L+Ke,v=yt-Tt,Y=Ue+(we-Tt),te=vt*L/C*Ot,se=et*L/C*Ot;Z.projectionMatrix.makePerspective(v,Y,te,se,Ot,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ue(Z,J){J===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(J.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let J=Z.near,pe=Z.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),O.near=b.near=T.near=J,O.far=b.far=T.far=pe,(D!==O.near||R!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),D=O.near,R=O.far),O.layers.mask=Z.layers.mask|6,T.layers.mask=O.layers.mask&3,b.layers.mask=O.layers.mask&5;let we=Z.parent,Te=O.cameras;ue(O,we);for(let Qe=0;Qe<Te.length;Qe++)ue(Te[Qe],we);Te.length===2?re(O,T,b):O.projectionMatrix.copy(T.projectionMatrix),Ce(Z,O,we)};function Ce(Z,J,pe){pe===null?Z.matrix.copy(J.matrixWorld):(Z.matrix.copy(pe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(J.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(J.projectionMatrix),Z.projectionMatrixInverse.copy(J.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Hr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Z){return p[Z]};let He=null;function lt(Z,J){if(h=J.getViewerPose(l||a),g=J,h!==null){let pe=h.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let we=!1;pe.length!==O.cameras.length&&(O.cameras.length=0,we=!0);for(let L=0;L<pe.length;L++){let vt=pe[L],et=null;if(d!==null)et=d.getViewport(vt);else{let Me=u.getViewSubImage(f,vt);et=Me.viewport,L===0&&(e.setRenderTargetTextures(M,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(M))}let Ye=E[L];Ye===void 0&&(Ye=new Kt,Ye.layers.enable(L),Ye.viewport=new At,E[L]=Ye),Ye.matrix.fromArray(vt.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(vt.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(et.x,et.y,et.width,et.height),L===0&&(O.matrix.copy(Ye.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),we===!0&&O.cameras.push(Ye)}let Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let L=u.getDepthInformation(pe[0]);L&&L.isValid&&L.texture&&m.init(L,r.renderState)}if(Te&&Te.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let L=0;L<pe.length;L++){let vt=pe[L].camera;if(vt){let et=p[vt];et||(et=new Ws,p[vt]=et);let Ye=u.getCameraImage(vt);et.sourceTexture=Ye}}}}for(let pe=0;pe<P.length;pe++){let we=A[pe],Te=P[pe];we!==null&&Te!==void 0&&Te.update(we,J,l||a)}He&&He(Z,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}let $e=new Gu;$e.setAnimationLoop(lt),this.setAnimationLoop=function(Z){He=Z},this.dispose=function(){}}},fr=new Wn,gx=new It;function xx(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Sc(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,w,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===hn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===hn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),w=y.envMap,M=y.envMapRotation;w&&(m.envMap.value=w,fr.copy(M),fr.x*=-1,fr.y*=-1,fr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),m.envMapRotation.value.setFromMatrix4(gx.makeRotationFromEuler(fr)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _x(n,e,t,i){let r={},s={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,w){let M=w.program;i.uniformBlockBinding(y,M)}function l(y,w){let M=r[y.id];M===void 0&&(g(y),M=h(y),r[y.id]=M,y.addEventListener("dispose",m));let P=w.program;i.updateUBOMapping(y,P);let A=e.render.frame;s[y.id]!==A&&(f(y),s[y.id]=A)}function h(y){let w=u();y.__bindingPointIndex=w;let M=n.createBuffer(),P=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,P,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,M),M}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let w=r[y.id],M=y.uniforms,P=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let A=0,F=M.length;A<F;A++){let z=Array.isArray(M[A])?M[A]:[M[A]];for(let T=0,b=z.length;T<b;T++){let E=z[T];if(d(E,A,T,P)===!0){let O=E.__offset,D=Array.isArray(E.value)?E.value:[E.value],R=0;for(let N=0;N<D.length;N++){let G=D[N],W=x(G);typeof G=="number"||typeof G=="boolean"?(E.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,O+R,E.__data)):G.isMatrix3?(E.__data[0]=G.elements[0],E.__data[1]=G.elements[1],E.__data[2]=G.elements[2],E.__data[3]=0,E.__data[4]=G.elements[3],E.__data[5]=G.elements[4],E.__data[6]=G.elements[5],E.__data[7]=0,E.__data[8]=G.elements[6],E.__data[9]=G.elements[7],E.__data[10]=G.elements[8],E.__data[11]=0):(G.toArray(E.__data,R),R+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,w,M,P){let A=y.value,F=w+"_"+M;if(P[F]===void 0)return typeof A=="number"||typeof A=="boolean"?P[F]=A:P[F]=A.clone(),!0;{let z=P[F];if(typeof A=="number"||typeof A=="boolean"){if(z!==A)return P[F]=A,!0}else if(z.equals(A)===!1)return z.copy(A),!0}return!1}function g(y){let w=y.uniforms,M=0,P=16;for(let F=0,z=w.length;F<z;F++){let T=Array.isArray(w[F])?w[F]:[w[F]];for(let b=0,E=T.length;b<E;b++){let O=T[b],D=Array.isArray(O.value)?O.value:[O.value];for(let R=0,N=D.length;R<N;R++){let G=D[R],W=x(G),k=M%P,ne=k%W.boundary,re=k+ne;M+=ne,re!==0&&P-re<W.storage&&(M+=P-re),O.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=W.storage}}}let A=M%P;return A>0&&(M+=P-A),y.__size=M,y.__cache={},this}function x(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),w}function m(y){let w=y.target;w.removeEventListener("dispose",m);let M=a.indexOf(w.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function p(){for(let y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}var us=class{constructor(e={}){let{canvas:t=pu(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,y=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,P=!1;this._outputColorSpace=Yt;let A=0,F=0,z=null,T=-1,b=null,E=new At,O=new At,D=null,R=new tt(0),N=0,G=t.width,W=t.height,k=1,ne=null,re=null,ue=new At(0,0,G,W),Ce=new At(0,0,G,W),He=!1,lt=new Qr,$e=!1,Z=!1,J=new It,pe=new B,we=new At,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function Le(){return z===null?k:1}let L=i;function vt(S,q){return t.getContext(S,q)}try{let S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",ie,!1),L===null){let q="webgl2";if(L=vt(q,S),L===null)throw vt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let et,Ye,Me,yt,Ue,Ke,Tt,Ot,C,v,Y,te,se,Q,Ve,de,ve,ze,oe,me,De,Oe,xe,je;function V(){et=new Fg(L),et.init(),Oe=new fx(L,et),Ye=new Rg(L,et,e,Oe),Me=new ux(L,et),Ye.reversedDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),yt=new Bg(L),Ue=new j0,Ke=new dx(L,et,Me,Ue,Ye,Oe,yt),Tt=new Pg(M),Ot=new Ng(M),C=new Xf(L),xe=new Ag(L,C),v=new zg(L,C,yt,xe),Y=new Vg(L,v,C,yt),oe=new kg(L,Ye,Ke),de=new Ig(Ue),te=new K0(M,Tt,Ot,et,Ye,xe,de),se=new xx(M,Ue),Q=new ex,Ve=new ax(et),ze=new Eg(M,Tt,Ot,Me,Y,d,c),ve=new cx(M,Y,Ye),je=new _x(L,yt,Ye,Me),me=new Cg(L,et,yt),De=new Og(L,et,yt),yt.programs=te.programs,M.capabilities=Ye,M.extensions=et,M.properties=Ue,M.renderLists=Q,M.shadowMap=ve,M.state=Me,M.info=yt}V();let ce=new kc(M,L);this.xr=ce,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let S=et.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=et.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(S){S!==void 0&&(k=S,this.setSize(G,W,!1))},this.getSize=function(S){return S.set(G,W)},this.setSize=function(S,q,j=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,W=q,t.width=Math.floor(S*k),t.height=Math.floor(q*k),j===!0&&(t.style.width=S+"px",t.style.height=q+"px"),this.setViewport(0,0,S,q)},this.getDrawingBufferSize=function(S){return S.set(G*k,W*k).floor()},this.setDrawingBufferSize=function(S,q,j){G=S,W=q,k=j,t.width=Math.floor(S*j),t.height=Math.floor(q*j),this.setViewport(0,0,S,q)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy(ue)},this.setViewport=function(S,q,j,$){S.isVector4?ue.set(S.x,S.y,S.z,S.w):ue.set(S,q,j,$),Me.viewport(E.copy(ue).multiplyScalar(k).round())},this.getScissor=function(S){return S.copy(Ce)},this.setScissor=function(S,q,j,$){S.isVector4?Ce.set(S.x,S.y,S.z,S.w):Ce.set(S,q,j,$),Me.scissor(O.copy(Ce).multiplyScalar(k).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(S){Me.setScissorTest(He=S)},this.setOpaqueSort=function(S){ne=S},this.setTransparentSort=function(S){re=S},this.getClearColor=function(S){return S.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(S=!0,q=!0,j=!0){let $=0;if(S){let X=!1;if(z!==null){let he=z.texture.format;X=he===Ao||he===Eo||he===To}if(X){let he=z.texture.type,_e=he===qn||he===Gi||he===rs||he===as||he===bo||he===So,Ae=ze.getClearColor(),Se=ze.getClearAlpha(),Ge=Ae.r,Je=Ae.g,Pe=Ae.b;_e?(g[0]=Ge,g[1]=Je,g[2]=Pe,g[3]=Se,L.clearBufferuiv(L.COLOR,0,g)):(x[0]=Ge,x[1]=Je,x[2]=Pe,x[3]=Se,L.clearBufferiv(L.COLOR,0,x))}else $|=L.COLOR_BUFFER_BIT}q&&($|=L.DEPTH_BUFFER_BIT),j&&($|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),ze.dispose(),Q.dispose(),Ve.dispose(),Ue.dispose(),Tt.dispose(),Ot.dispose(),Y.dispose(),xe.dispose(),je.dispose(),te.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",yn),ce.removeEventListener("sessionend",ri),an.stop()};function fe(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let S=yt.autoReset,q=ve.enabled,j=ve.autoUpdate,$=ve.needsUpdate,X=ve.type;V(),yt.autoReset=S,ve.enabled=q,ve.autoUpdate=j,ve.needsUpdate=$,ve.type=X}function ie(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ee(S){let q=S.target;q.removeEventListener("dispose",ee),Ne(q)}function Ne(S){Ze(S),Ue.remove(S)}function Ze(S){let q=Ue.get(S).programs;q!==void 0&&(q.forEach(function(j){te.releaseProgram(j)}),S.isShaderMaterial&&te.releaseShaderCache(S))}this.renderBufferDirect=function(S,q,j,$,X,he){q===null&&(q=Te);let _e=X.isMesh&&X.matrixWorld.determinant()<0,Ae=Ti(S,q,j,$,X);Me.setMaterial($,_e);let Se=j.index,Ge=1;if($.wireframe===!0){if(Se=v.getWireframeAttribute(j),Se===void 0)return;Ge=2}let Je=j.drawRange,Pe=j.attributes.position,ht=Je.start*Ge,mt=(Je.start+Je.count)*Ge;he!==null&&(ht=Math.max(ht,he.start*Ge),mt=Math.min(mt,(he.start+he.count)*Ge)),Se!==null?(ht=Math.max(ht,0),mt=Math.min(mt,Se.count)):Pe!=null&&(ht=Math.max(ht,0),mt=Math.min(mt,Pe.count));let bt=mt-ht;if(bt<0||bt===1/0)return;xe.setup(X,$,Ae,j,Se);let xt,dt=me;if(Se!==null&&(xt=C.get(Se),dt=De,dt.setIndex(xt)),X.isMesh)$.wireframe===!0?(Me.setLineWidth($.wireframeLinewidth*Le()),dt.setMode(L.LINES)):dt.setMode(L.TRIANGLES);else if(X.isLine){let We=$.linewidth;We===void 0&&(We=1),Me.setLineWidth(We*Le()),X.isLineSegments?dt.setMode(L.LINES):X.isLineLoop?dt.setMode(L.LINE_LOOP):dt.setMode(L.LINE_STRIP)}else X.isPoints?dt.setMode(L.POINTS):X.isSprite&&dt.setMode(L.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Xr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))dt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let We=X._multiDrawStarts,Nt=X._multiDrawCounts,it=X._multiDrawCount,Wt=Se?C.get(Se).bytesPerElement:1,Cn=Ue.get($).currentProgram.getUniforms();for(let on=0;on<it;on++)Cn.setValue(L,"_gl_DrawID",on),dt.render(We[on]/Wt,Nt[on])}else if(X.isInstancedMesh)dt.renderInstances(ht,bt,X.count);else if(j.isInstancedBufferGeometry){let We=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Nt=Math.min(j.instanceCount,We);dt.renderInstances(ht,bt,Nt)}else dt.render(ht,bt)};function Mt(S,q,j){S.transparent===!0&&S.side===Ht&&S.forceSinglePass===!1?(S.side=hn,S.needsUpdate=!0,An(S,q,j),S.side=gi,S.needsUpdate=!0,An(S,q,j),S.side=Ht):An(S,q,j)}this.compile=function(S,q,j=null){j===null&&(j=S),p=Ve.get(j),p.init(q),w.push(p),j.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),S!==j&&S.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();let $=new Set;return S.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let he=X.material;if(he)if(Array.isArray(he))for(let _e=0;_e<he.length;_e++){let Ae=he[_e];Mt(Ae,j,X),$.add(Ae)}else Mt(he,j,X),$.add(he)}),p=w.pop(),$},this.compileAsync=function(S,q,j=null){let $=this.compile(S,q,j);return new Promise(X=>{function he(){if($.forEach(function(_e){Ue.get(_e).currentProgram.isReady()&&$.delete(_e)}),$.size===0){X(S);return}setTimeout(he,10)}et.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let ct=null;function un(S){ct&&ct(S)}function yn(){an.stop()}function ri(){an.start()}let an=new Gu;an.setAnimationLoop(un),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(S){ct=S,ce.setAnimationLoop(S),S===null?an.stop():an.start()},ce.addEventListener("sessionstart",yn),ce.addEventListener("sessionend",ri),this.render=function(S,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(q),q=ce.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,q,z),p=Ve.get(S,w.length),p.init(q),w.push(p),J.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),lt.setFromProjectionMatrix(J,Gn,q.reversedDepth),Z=this.localClippingEnabled,$e=de.init(this.clippingPlanes,Z),m=Q.get(S,y.length),m.init(),y.push(m),ce.enabled===!0&&ce.isPresenting===!0){let he=M.xr.getDepthSensingMesh();he!==null&&vr(he,q,-1/0,M.sortObjects)}vr(S,q,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ne,re),Qe=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Qe&&ze.addToRenderList(m,S),this.info.render.frame++,$e===!0&&de.beginShadows();let j=p.state.shadowsArray;ve.render(j,S,q),$e===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=m.opaque,X=m.transmissive;if(p.setupLights(),q.isArrayCamera){let he=q.cameras;if(X.length>0)for(let _e=0,Ae=he.length;_e<Ae;_e++){let Se=he[_e];dn($,X,S,Se)}Qe&&ze.render(S);for(let _e=0,Ae=he.length;_e<Ae;_e++){let Se=he[_e];Mr(m,S,Se,Se.viewport)}}else X.length>0&&dn($,X,S,q),Qe&&ze.render(S),Mr(m,S,q);z!==null&&F===0&&(Ke.updateMultisampleRenderTarget(z),Ke.updateRenderTargetMipmap(z)),S.isScene===!0&&S.onAfterRender(M,S,q),xe.resetDefaultState(),T=-1,b=null,w.pop(),w.length>0?(p=w[w.length-1],$e===!0&&de.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function vr(S,q,j,$){if(S.visible===!1)return;if(S.layers.test(q.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(q);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||lt.intersectsSprite(S)){$&&we.setFromMatrixPosition(S.matrixWorld).applyMatrix4(J);let _e=Y.update(S),Ae=S.material;Ae.visible&&m.push(S,_e,Ae,j,we.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||lt.intersectsObject(S))){let _e=Y.update(S),Ae=S.material;if($&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),we.copy(S.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),we.copy(_e.boundingSphere.center)),we.applyMatrix4(S.matrixWorld).applyMatrix4(J)),Array.isArray(Ae)){let Se=_e.groups;for(let Ge=0,Je=Se.length;Ge<Je;Ge++){let Pe=Se[Ge],ht=Ae[Pe.materialIndex];ht&&ht.visible&&m.push(S,_e,ht,j,we.z,Pe)}}else Ae.visible&&m.push(S,_e,Ae,j,we.z,null)}}let he=S.children;for(let _e=0,Ae=he.length;_e<Ae;_e++)vr(he[_e],q,j,$)}function Mr(S,q,j,$){let X=S.opaque,he=S.transmissive,_e=S.transparent;p.setupLightsView(j),$e===!0&&de.setGlobalState(M.clippingPlanes,j),$&&Me.viewport(E.copy($)),X.length>0&&si(X,q,j),he.length>0&&si(he,q,j),_e.length>0&&si(_e,q,j),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function dn(S,q,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new jn(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?ss:qn,minFilter:Vi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));let he=p.state.transmissionRenderTarget[$.id],_e=$.viewport||E;he.setSize(_e.z*M.transmissionResolutionScale,_e.w*M.transmissionResolutionScale);let Ae=M.getRenderTarget(),Se=M.getActiveCubeFace(),Ge=M.getActiveMipmapLevel();M.setRenderTarget(he),M.getClearColor(R),N=M.getClearAlpha(),N<1&&M.setClearColor(16777215,.5),M.clear(),Qe&&ze.render(j);let Je=M.toneMapping;M.toneMapping=bi;let Pe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),$e===!0&&de.setGlobalState(M.clippingPlanes,$),si(S,j,$),Ke.updateMultisampleRenderTarget(he),Ke.updateRenderTargetMipmap(he),et.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let mt=0,bt=q.length;mt<bt;mt++){let xt=q[mt],dt=xt.object,We=xt.geometry,Nt=xt.material,it=xt.group;if(Nt.side===Ht&&dt.layers.test($.layers)){let Wt=Nt.side;Nt.side=hn,Nt.needsUpdate=!0,Si(dt,j,$,We,Nt,it),Nt.side=Wt,Nt.needsUpdate=!0,ht=!0}}ht===!0&&(Ke.updateMultisampleRenderTarget(he),Ke.updateRenderTargetMipmap(he))}M.setRenderTarget(Ae,Se,Ge),M.setClearColor(R,N),Pe!==void 0&&($.viewport=Pe),M.toneMapping=Je}function si(S,q,j){let $=q.isScene===!0?q.overrideMaterial:null;for(let X=0,he=S.length;X<he;X++){let _e=S[X],Ae=_e.object,Se=_e.geometry,Ge=_e.group,Je=_e.material;Je.allowOverride===!0&&$!==null&&(Je=$),Ae.layers.test(j.layers)&&Si(Ae,q,j,Se,Je,Ge)}}function Si(S,q,j,$,X,he){S.onBeforeRender(M,q,j,$,X,he),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(M,q,j,$,S,he),X.transparent===!0&&X.side===Ht&&X.forceSinglePass===!1?(X.side=hn,X.needsUpdate=!0,M.renderBufferDirect(j,q,$,X,S,he),X.side=gi,X.needsUpdate=!0,M.renderBufferDirect(j,q,$,X,S,he),X.side=Ht):M.renderBufferDirect(j,q,$,X,S,he),S.onAfterRender(M,q,j,$,X,he)}function An(S,q,j){q.isScene!==!0&&(q=Te);let $=Ue.get(S),X=p.state.lights,he=p.state.shadowsArray,_e=X.state.version,Ae=te.getParameters(S,X.state,he,q,j),Se=te.getProgramCacheKey(Ae),Ge=$.programs;$.environment=S.isMeshStandardMaterial?q.environment:null,$.fog=q.fog,$.envMap=(S.isMeshStandardMaterial?Ot:Tt).get(S.envMap||$.environment),$.envMapRotation=$.environment!==null&&S.envMap===null?q.environmentRotation:S.envMapRotation,Ge===void 0&&(S.addEventListener("dispose",ee),Ge=new Map,$.programs=Ge);let Je=Ge.get(Se);if(Je!==void 0){if($.currentProgram===Je&&$.lightsStateVersion===_e)return wi(S,Ae),Je}else Ae.uniforms=te.getUniforms(S),S.onBeforeCompile(Ae,M),Je=te.acquireProgram(Ae,Se),Ge.set(Se,Je),$.uniforms=Ae.uniforms;let Pe=$.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pe.clippingPlanes=de.uniform),wi(S,Ae),$.needsLights=Ai(S),$.lightsStateVersion=_e,$.needsLights&&(Pe.ambientLightColor.value=X.state.ambient,Pe.lightProbe.value=X.state.probe,Pe.directionalLights.value=X.state.directional,Pe.directionalLightShadows.value=X.state.directionalShadow,Pe.spotLights.value=X.state.spot,Pe.spotLightShadows.value=X.state.spotShadow,Pe.rectAreaLights.value=X.state.rectArea,Pe.ltc_1.value=X.state.rectAreaLTC1,Pe.ltc_2.value=X.state.rectAreaLTC2,Pe.pointLights.value=X.state.point,Pe.pointLightShadows.value=X.state.pointShadow,Pe.hemisphereLights.value=X.state.hemi,Pe.directionalShadowMap.value=X.state.directionalShadowMap,Pe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Pe.spotShadowMap.value=X.state.spotShadowMap,Pe.spotLightMatrix.value=X.state.spotLightMatrix,Pe.spotLightMap.value=X.state.spotLightMap,Pe.pointShadowMap.value=X.state.pointShadowMap,Pe.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=Je,$.uniformsList=null,Je}function $n(S){if(S.uniformsList===null){let q=S.currentProgram.getUniforms();S.uniformsList=hs.seqWithValue(q.seq,S.uniforms)}return S.uniformsList}function wi(S,q){let j=Ue.get(S);j.outputColorSpace=q.outputColorSpace,j.batching=q.batching,j.batchingColor=q.batchingColor,j.instancing=q.instancing,j.instancingColor=q.instancingColor,j.instancingMorph=q.instancingMorph,j.skinning=q.skinning,j.morphTargets=q.morphTargets,j.morphNormals=q.morphNormals,j.morphColors=q.morphColors,j.morphTargetsCount=q.morphTargetsCount,j.numClippingPlanes=q.numClippingPlanes,j.numIntersection=q.numClipIntersection,j.vertexAlphas=q.vertexAlphas,j.vertexTangents=q.vertexTangents,j.toneMapping=q.toneMapping}function Ti(S,q,j,$,X){q.isScene!==!0&&(q=Te),Ke.resetTextureUnits();let he=q.fog,_e=$.isMeshStandardMaterial?q.environment:null,Ae=z===null?M.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ji,Se=($.isMeshStandardMaterial?Ot:Tt).get($.envMap||_e),Ge=$.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Je=!!j.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Pe=!!j.morphAttributes.position,ht=!!j.morphAttributes.normal,mt=!!j.morphAttributes.color,bt=bi;$.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(bt=M.toneMapping);let xt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,dt=xt!==void 0?xt.length:0,We=Ue.get($),Nt=p.state.lights;if($e===!0&&(Z===!0||S!==b)){let Xt=S===b&&$.id===T;de.setState($,S,Xt)}let it=!1;$.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Nt.state.version||We.outputColorSpace!==Ae||X.isBatchedMesh&&We.batching===!1||!X.isBatchedMesh&&We.batching===!0||X.isBatchedMesh&&We.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&We.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&We.instancing===!1||!X.isInstancedMesh&&We.instancing===!0||X.isSkinnedMesh&&We.skinning===!1||!X.isSkinnedMesh&&We.skinning===!0||X.isInstancedMesh&&We.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&We.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&We.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&We.instancingMorph===!1&&X.morphTexture!==null||We.envMap!==Se||$.fog===!0&&We.fog!==he||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==de.numPlanes||We.numIntersection!==de.numIntersection)||We.vertexAlphas!==Ge||We.vertexTangents!==Je||We.morphTargets!==Pe||We.morphNormals!==ht||We.morphColors!==mt||We.toneMapping!==bt||We.morphTargetsCount!==dt)&&(it=!0):(it=!0,We.__version=$.version);let Wt=We.currentProgram;it===!0&&(Wt=An($,q,X));let Cn=!1,on=!1,oi=!1,Ft=Wt.getUniforms(),tn=We.uniforms;if(Me.useProgram(Wt.program)&&(Cn=!0,on=!0,oi=!0),$.id!==T&&(T=$.id,on=!0),Cn||b!==S){Me.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Ft.setValue(L,"projectionMatrix",S.projectionMatrix),Ft.setValue(L,"viewMatrix",S.matrixWorldInverse);let qt=Ft.map.cameraPosition;qt!==void 0&&qt.setValue(L,pe.setFromMatrixPosition(S.matrixWorld)),Ye.logarithmicDepthBuffer&&Ft.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ft.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,on=!0,oi=!0)}if(X.isSkinnedMesh){Ft.setOptional(L,X,"bindMatrix"),Ft.setOptional(L,X,"bindMatrixInverse");let Xt=X.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),Ft.setValue(L,"boneTexture",Xt.boneTexture,Ke))}X.isBatchedMesh&&(Ft.setOptional(L,X,"batchingTexture"),Ft.setValue(L,"batchingTexture",X._matricesTexture,Ke),Ft.setOptional(L,X,"batchingIdTexture"),Ft.setValue(L,"batchingIdTexture",X._indirectTexture,Ke),Ft.setOptional(L,X,"batchingColorTexture"),X._colorsTexture!==null&&Ft.setValue(L,"batchingColorTexture",X._colorsTexture,Ke));let nn=j.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&oe.update(X,j,Wt),(on||We.receiveShadow!==X.receiveShadow)&&(We.receiveShadow=X.receiveShadow,Ft.setValue(L,"receiveShadow",X.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(tn.envMap.value=Se,tn.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&q.environment!==null&&(tn.envMapIntensity.value=q.environmentIntensity),on&&(Ft.setValue(L,"toneMappingExposure",M.toneMappingExposure),We.needsLights&&Ei(tn,oi),he&&$.fog===!0&&se.refreshFogUniforms(tn,he),se.refreshMaterialUniforms(tn,$,k,W,p.state.transmissionRenderTarget[S.id]),hs.upload(L,$n(We),tn,Ke)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(hs.upload(L,$n(We),tn,Ke),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ft.setValue(L,"center",X.center),Ft.setValue(L,"modelViewMatrix",X.modelViewMatrix),Ft.setValue(L,"normalMatrix",X.normalMatrix),Ft.setValue(L,"modelMatrix",X.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let Xt=$.uniformsGroups;for(let qt=0,Wi=Xt.length;qt<Wi;qt++){let Rn=Xt[qt];je.update(Rn,Wt),je.bind(Rn,Wt)}}return Wt}function Ei(S,q){S.ambientLightColor.needsUpdate=q,S.lightProbe.needsUpdate=q,S.directionalLights.needsUpdate=q,S.directionalLightShadows.needsUpdate=q,S.pointLights.needsUpdate=q,S.pointLightShadows.needsUpdate=q,S.spotLights.needsUpdate=q,S.spotLightShadows.needsUpdate=q,S.rectAreaLights.needsUpdate=q,S.hemisphereLights.needsUpdate=q}function Ai(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(S,q,j){let $=Ue.get(S);$.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Ue.get(S.texture).__webglTexture=q,Ue.get(S.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:j,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,q){let j=Ue.get(S);j.__webglFramebuffer=q,j.__useDefaultFramebuffer=q===void 0};let Jt=L.createFramebuffer();this.setRenderTarget=function(S,q=0,j=0){z=S,A=q,F=j;let $=!0,X=null,he=!1,_e=!1;if(S){let Se=Ue.get(S);if(Se.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(L.FRAMEBUFFER,null),$=!1;else if(Se.__webglFramebuffer===void 0)Ke.setupRenderTarget(S);else if(Se.__hasExternalTextures)Ke.rebindTextures(S,Ue.get(S.texture).__webglTexture,Ue.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Pe=S.depthTexture;if(Se.__boundDepthTexture!==Pe){if(Pe!==null&&Ue.has(Pe)&&(S.width!==Pe.image.width||S.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ke.setupDepthRenderbuffer(S)}}let Ge=S.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(_e=!0);let Je=Ue.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Je[q])?X=Je[q][j]:X=Je[q],he=!0):S.samples>0&&Ke.useMultisampledRTT(S)===!1?X=Ue.get(S).__webglMultisampledFramebuffer:Array.isArray(Je)?X=Je[j]:X=Je,E.copy(S.viewport),O.copy(S.scissor),D=S.scissorTest}else E.copy(ue).multiplyScalar(k).floor(),O.copy(Ce).multiplyScalar(k).floor(),D=He;if(j!==0&&(X=Jt),Me.bindFramebuffer(L.FRAMEBUFFER,X)&&$&&Me.drawBuffers(S,X),Me.viewport(E),Me.scissor(O),Me.setScissorTest(D),he){let Se=Ue.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+q,Se.__webglTexture,j)}else if(_e){let Se=q;for(let Ge=0;Ge<S.textures.length;Ge++){let Je=Ue.get(S.textures[Ge]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ge,Je.__webglTexture,j,Se)}}else if(S!==null&&j!==0){let Se=Ue.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Se.__webglTexture,j)}T=-1},this.readRenderTargetPixels=function(S,q,j,$,X,he,_e,Ae=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ue.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_e!==void 0&&(Se=Se[_e]),Se){Me.bindFramebuffer(L.FRAMEBUFFER,Se);try{let Ge=S.textures[Ae],Je=Ge.format,Pe=Ge.type;if(!Ye.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=S.width-$&&j>=0&&j<=S.height-X&&(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ae),L.readPixels(q,j,$,X,Oe.convert(Je),Oe.convert(Pe),he))}finally{let Ge=z!==null?Ue.get(z).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(S,q,j,$,X,he,_e,Ae=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ue.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_e!==void 0&&(Se=Se[_e]),Se)if(q>=0&&q<=S.width-$&&j>=0&&j<=S.height-X){Me.bindFramebuffer(L.FRAMEBUFFER,Se);let Ge=S.textures[Ae],Je=Ge.format,Pe=Ge.type;if(!Ye.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ht),L.bufferData(L.PIXEL_PACK_BUFFER,he.byteLength,L.STREAM_READ),S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ae),L.readPixels(q,j,$,X,Oe.convert(Je),Oe.convert(Pe),0);let mt=z!==null?Ue.get(z).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,mt);let bt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await mu(L,bt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ht),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,he),L.deleteBuffer(ht),L.deleteSync(bt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,q=null,j=0){let $=Math.pow(2,-j),X=Math.floor(S.image.width*$),he=Math.floor(S.image.height*$),_e=q!==null?q.x:0,Ae=q!==null?q.y:0;Ke.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,j,0,0,_e,Ae,X,he),Me.unbindTexture()};let ai=L.createFramebuffer(),Ci=L.createFramebuffer();this.copyTextureToTexture=function(S,q,j=null,$=null,X=0,he=null){he===null&&(X!==0?(Xr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=X,X=0):he=0);let _e,Ae,Se,Ge,Je,Pe,ht,mt,bt,xt=S.isCompressedTexture?S.mipmaps[he]:S.image;if(j!==null)_e=j.max.x-j.min.x,Ae=j.max.y-j.min.y,Se=j.isBox3?j.max.z-j.min.z:1,Ge=j.min.x,Je=j.min.y,Pe=j.isBox3?j.min.z:0;else{let nn=Math.pow(2,-X);_e=Math.floor(xt.width*nn),Ae=Math.floor(xt.height*nn),S.isDataArrayTexture?Se=xt.depth:S.isData3DTexture?Se=Math.floor(xt.depth*nn):Se=1,Ge=0,Je=0,Pe=0}$!==null?(ht=$.x,mt=$.y,bt=$.z):(ht=0,mt=0,bt=0);let dt=Oe.convert(q.format),We=Oe.convert(q.type),Nt;q.isData3DTexture?(Ke.setTexture3D(q,0),Nt=L.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Ke.setTexture2DArray(q,0),Nt=L.TEXTURE_2D_ARRAY):(Ke.setTexture2D(q,0),Nt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,q.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,q.unpackAlignment);let it=L.getParameter(L.UNPACK_ROW_LENGTH),Wt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Cn=L.getParameter(L.UNPACK_SKIP_PIXELS),on=L.getParameter(L.UNPACK_SKIP_ROWS),oi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,xt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ge),L.pixelStorei(L.UNPACK_SKIP_ROWS,Je),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pe);let Ft=S.isDataArrayTexture||S.isData3DTexture,tn=q.isDataArrayTexture||q.isData3DTexture;if(S.isDepthTexture){let nn=Ue.get(S),Xt=Ue.get(q),qt=Ue.get(nn.__renderTarget),Wi=Ue.get(Xt.__renderTarget);Me.bindFramebuffer(L.READ_FRAMEBUFFER,qt.__webglFramebuffer),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Rn=0;Rn<Se;Rn++)Ft&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ue.get(S).__webglTexture,X,Pe+Rn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ue.get(q).__webglTexture,he,bt+Rn)),L.blitFramebuffer(Ge,Je,_e,Ae,ht,mt,_e,Ae,L.DEPTH_BUFFER_BIT,L.NEAREST);Me.bindFramebuffer(L.READ_FRAMEBUFFER,null),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(X!==0||S.isRenderTargetTexture||Ue.has(S)){let nn=Ue.get(S),Xt=Ue.get(q);Me.bindFramebuffer(L.READ_FRAMEBUFFER,ai),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ci);for(let qt=0;qt<Se;qt++)Ft?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,nn.__webglTexture,X,Pe+qt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,nn.__webglTexture,X),tn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Xt.__webglTexture,he,bt+qt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Xt.__webglTexture,he),X!==0?L.blitFramebuffer(Ge,Je,_e,Ae,ht,mt,_e,Ae,L.COLOR_BUFFER_BIT,L.NEAREST):tn?L.copyTexSubImage3D(Nt,he,ht,mt,bt+qt,Ge,Je,_e,Ae):L.copyTexSubImage2D(Nt,he,ht,mt,Ge,Je,_e,Ae);Me.bindFramebuffer(L.READ_FRAMEBUFFER,null),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else tn?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(Nt,he,ht,mt,bt,_e,Ae,Se,dt,We,xt.data):q.isCompressedArrayTexture?L.compressedTexSubImage3D(Nt,he,ht,mt,bt,_e,Ae,Se,dt,xt.data):L.texSubImage3D(Nt,he,ht,mt,bt,_e,Ae,Se,dt,We,xt):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,he,ht,mt,_e,Ae,dt,We,xt.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,he,ht,mt,xt.width,xt.height,dt,xt.data):L.texSubImage2D(L.TEXTURE_2D,he,ht,mt,_e,Ae,dt,We,xt);L.pixelStorei(L.UNPACK_ROW_LENGTH,it),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Wt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Cn),L.pixelStorei(L.UNPACK_SKIP_ROWS,on),L.pixelStorei(L.UNPACK_SKIP_IMAGES,oi),he===0&&q.generateMipmaps&&L.generateMipmap(Nt),Me.unbindTexture()},this.initRenderTarget=function(S){Ue.get(S).__webglFramebuffer===void 0&&Ke.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ke.setTextureCube(S,0):S.isData3DTexture?Ke.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ke.setTexture2DArray(S,0):Ke.setTexture2D(S,0),Me.unbindTexture()},this.resetState=function(){A=0,F=0,z=null,Me.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}};var yx={x:1630,y:1160},vx={x:3370,y:430},ra={x:1450,y:1320};function Yu(n,e){if(!n||!e)return null;let t=[yx,vx].filter(g=>Math.hypot(g.x-n.x,g.y-n.y)<400).sort((g,x)=>Math.hypot(g.x-n.x,g.y-n.y)-Math.hypot(x.x-n.x,x.y-n.y))[0],i=0,r=1;if(t){let g=t.x-n.x,x=t.y-n.y;Math.abs(g)>Math.abs(x)?(i=Math.sign(g)||1,r=0):r=Math.sign(x)||1}let s=[0,280,320,360][e],a=[0,220,260,300][e],o=112,c={x:n.x-i*a/2,y:n.y-r*a/2},l=(g,x)=>({x:c.x+r*g+i*x,y:c.y-i*g+r*x}),h=(g,x,m,p)=>{let y=l(g,x);return{x:y.x,y:y.y,w:r?m:p,h:r?p:m}},u=[];if(e>=2){u.push(h(0,-a/2,s,10));for(let g of[-s/2,s/2])u.push(h(g,0,10,a))}if(e>=3){let g=(s-o)/2;for(let x of[-1,1])u.push(h(x*(o/2+g/2),a/2,g,10))}let f=e===1?[-1,1].flatMap(g=>[-1,1].map(x=>({...l(g*(s/2-8),x*(a/2-8)),radius:6}))):[],d=[h(-s/2+53,-a/2+64,52,90)];return e>=3&&d.push(h(s/2-53,-a/2+64,52,90)),{center:c,width:s,depth:a,door:o,fx:i,fy:r,yaw:Math.atan2(i,r),floor:h(0,0,s,a),walls:u,posts:f,beds:d,point:l,wallHeight:224,doorHeight:204,roofRidge:284}}var Mx=["#4c9cba","#df8168","#9974c7","#76b677","#e3b04c","#df71a7"],bx=["#e3b185","#be895f","#efc69d","#a67152"],Sx=["#463b32","#24282b","#99673b","#c9a465"];var ll=(n,e,t)=>Number.isInteger(n?.[e])&&n[e]>=0&&n[e]<t?n[e]:0;function Gc(n,e){return n.shirt=Mx[ll(e,"shirt",6)],n.skin=bx[ll(e,"skin",4)],n.hair=Sx[ll(e,"hair",4)],n.style=ll(e,"style",3),n}function cl(n){return Gc({},n)}var Zu={gather:1e3,fish:1500,cook:1200,wave:2e3,cheer:2e3};function Ju(n,e){let t=Math.sin(e*Math.PI*4);return n==="gather"?{left:-.35,right:-1.1+t*.6,bend:.12}:n==="fish"?{left:-.8,right:-1.3+Math.sin(e*Math.PI)*.3,bend:0}:n==="cook"?{left:-.8,right:-.9+t*.25,bend:.06}:n==="wave"?{left:0,right:-2.4,bend:0,wave:t*.25}:n==="cheer"?{left:-2.4,right:-2.4,bend:0,wave:t*.12}:null}var wx="assets/materials-v018/",Hc=["paving","sand","grass","plaster","teal","roof","wood","rock","leaf"],Tx=new Set(["#a68854","#876742","#845f3f","#7d654b","#866642","#a98961","#765734","#9a743e","#786040","#8a6d49","#927652","#6e5942"]);function $u(n){let e=document.createElement("canvas");e.width=n.width,e.height=n.height;let t=e.getContext("2d");t.scale(e.width/4600,e.height/2900),t.fillStyle="#0000ff",t.fillRect(0,0,4600,2900),t.fillStyle="#00ff00";for(let[i,r,s,a]of[[1750,1300,1420,840],[3380,500,450,240],[4100,2400,325,225]])t.beginPath(),t.ellipse(i,r,s,a,0,0,Math.PI*2),t.fill();return t.strokeStyle="#ff0000",t.lineWidth=100,t.lineCap="round",t.beginPath(),t.moveTo(1440,1190),t.bezierCurveTo(1520,1080,1750,1190,1980,1280),t.bezierCurveTo(2420,1510,2790,1440,3200,1320),t.stroke(),t.lineWidth=80,t.beginPath(),t.moveTo(1800,1180),t.bezierCurveTo(2100,930,2820,920,3220,730),t.lineTo(3370,480),t.stroke(),t.fillStyle="#ff0000",t.beginPath(),t.ellipse(1570,1160,290,200,0,0,Math.PI*2),t.fill(),e}function hl(n){let e=new Map,t=new Map,i=new Set,r=0,s=0,a=!0,o=0,c=new Zs;for(let d of Hc){let g=c.load(wx+d+".webp",()=>{r++,a=!0},void 0,()=>{s++,i.add(d),a=!0});g.userData.materialAssetName=d,g.colorSpace=Yt,g.wrapS=g.wrapT=Vr,g.anisotropy=Math.min(8,n.capabilities.getMaxAnisotropy()),e.set(d,g)}function l(d,g="#ffffff",x=1,m=.035){let p=d+g+x+m;if(!t.has(p)){let y=e.get(d).clone();y.repeat.set(x,x);let w=new Ut({color:g,map:y,bumpMap:y,bumpScale:m,roughness:d==="leaf"?.78:.93});e.get(d).addEventListener("dispose",()=>y.dispose());let M=e.get(d);w.userData.textureSource=M,t.set(p,w),a=!0}return t.get(p)}function h(d){return Tx.has(d)?l("wood","#ded4c4",1,.045):d==="#e2dbc7"?l("plaster","#f8f4e7",1,.027):d==="#ba7655"?l("roof","#e4d6c7",2,.055):d==="#a7c4b7"?l("teal","#e7ede3",1,.035):d==="#92968b"||d==="#777a6b"?l("rock","#ddd9cf",1,.065):null}function u(){if(!a)return;o++;let d=r+s<Hc.length;for(let g of t.values()){let x=g.userData.textureSource;x.image&&g.map.image!==x.image&&(g.map.source=x.source,g.map.needsUpdate=!0),g.map.image&&!g.userData.uploaded&&(g.map.needsUpdate=!0,g.userData.uploaded=!0),!g.userData.uploaded&&!i.has(x.userData.materialAssetName)&&(d=!0)}a=d}function f(d){d.colorSpace=Zn;let g=new Ut({color:"#ffffff",map:d,roughness:1});return g.onBeforeCompile=x=>{x.uniforms.uSand={value:e.get("sand")},x.uniforms.uGrass={value:e.get("grass")},x.uniforms.uPaving={value:e.get("paving")},x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
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
        normal=normalize(normal+vec3(dFdx(relief)*.14,dFdy(relief)*.14,0.));`)},g}return{textures:e,surface:l,forColor:h,ground:f,update:u,stats:()=>({loaded:r,failed:s,total:Hc.length,materials:t.size,syncPending:a,syncPasses:o}),dispose(){for(let d of t.values())d.map.dispose(),d.dispose();for(let d of e.values())d.dispose()}}}function ul({x:n,z:e,surface:t,yaw:i,pitch:r,mode:s="first",distance:a=4.8,bob:o=0},c={position:new B,target:new B}){let l=t+1.64+o;return s==="first"?(c.position.set(n,l,e),c.target.set(n-Math.sin(i)*Math.cos(r),l-Math.sin(r),e-Math.cos(i)*Math.cos(r)),c):(c.target.set(n,t+1.3,e),c.position.set(n+Math.sin(i)*Math.cos(r)*a,c.target.y+.65+Math.sin(r)*a,e+Math.cos(i)*Math.cos(r)*a),c)}function Wc(n,e,t,i){return!(t>0)||!(i>0)?n:n.lerp(e,1-Math.exp(-t*i))}function dl(n,e,t,i){return i.length=0,n.intersectObjects(e,t,i),i}var Ex={};function fl(n,e,t,{height:i=18,offsetX:r=-12,offsetZ:s=-8}=Ex){let a=Math.abs(n.shadow.camera.right-n.shadow.camera.left),o=n.shadow.mapSize.width,c=a>0&&o>0?a/o:0,l=c?Math.round(e/c)*c:e,h=c?Math.round(t/c)*c:t;return n.position.set(l+r,i,h+s),n.target.position.set(l,0,h),c}function Ku(n,e,t,i,r){let s=(()=>{let x=90210;return()=>(x=Math.imul(x,1664525)+1013904223>>>0)/4294967296})(),a=new Pt;a.setAttribute("position",new rt([-.015,0,0,.015,0,0,-.012,.08,.01,.012,.08,.01,0,.16,.035],3)),a.setAttribute("uv",new rt([0,0,1,0,0,.5,1,.5,.5,1],2)),a.setIndex([0,1,2,1,3,2,2,3,4]),a.computeVertexNormals();let o=new Ut({color:"#ffffff",side:Ht,roughness:1});o.defines={USE_UV:""};let c={value:0},l={value:new At(0,0,0,0)};o.onBeforeCompile=x=>{x.uniforms.uWind=c,x.uniforms.uBase=l,x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec4 uBase;`),x.vertexShader=x.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec3 grassWorld=(instanceMatrix*vec4(position,1.)).xyz;
      transformed.x+=sin(uWind+grassWorld.x*.8+grassWorld.z)*position.y*.13;
      if(abs(grassWorld.x-uBase.x)<uBase.z&&abs(grassWorld.z-uBase.y)<uBase.w)transformed.y-=100.;`),x.fragmentShader=x.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=.7+.35*vUv.y;`)};let h=r?2800:5500,u=new Rt(a,o,h);u.receiveShadow=!0,u.frustumCulled=!1;let f=i.getContext("2d").getImageData(0,0,i.width,i.height).data,d=new Ct,g=0;for(let x=0;x<h*8&&g<h;x++){let m=s()*4600,p=s()*2900,y=(Math.min(i.height-1,Math.floor(p/2900*i.height))*i.width+Math.min(i.width-1,Math.floor(m/4600*i.width)))*4;if(f[y+1]<f[y]+12||f[y+1]<85)continue;let w=m/t,M=p/t,P=e(w,M);P<.1||(d.position.set(w,P-.015,M),d.rotation.set(0,s()*Math.PI*2,0),d.scale.setScalar(.7+s()*.8),d.updateMatrix(),u.setMatrixAt(g,d.matrix),u.setColorAt(g,new tt().setHSL(.2+s()*.055,.3+s()*.15,.22+s()*.08)),g++)}return u.count=g,n.add(u),{update(x,m){c.value=x,m?l.value.set(m.floor.x/t,m.floor.y/t,m.floor.w/(t*2)+.1,m.floor.h/(t*2)+.1):l.value.set(0,0,0,0)},dispose(){n.remove(u),a.dispose(),o.dispose(),u.dispose()}}}function ju(n,e,{cube:t,tube:i},r){let s=e.width/80,a=e.depth/80,o=e.wallHeight/80,c=e.roofRidge/80;for(let u of n.children)u.name==="floor"&&(u.material=r.surface("paving","#e5ded0",2,.045)),u.name==="wall"&&(u.material=r.surface("plaster","#f8f4e7",1,.025)),u.name==="roof"&&(u.material=r.surface("roof","#efe2d5",2,.045));for(let u of[-1,1]){let f=t(n,"#876742",[u*s/2,o-.09,0],[.13,.16,a+.18]);if(f.name="trim",e.walls.length){let d=t(n,"#a7c4b7",[u*(s/2+.064),1.55,-a*.16],[.02,.9,.7]);d.name="shutter";for(let g=0;g<8;g++)t(n,"#876742",[u*(s/2+.08),1.17+g*.11,-a*.16],[.025,.035,.69]);for(let g of[-a*.16-.39,-a*.16+.39])t(n,"#e2dbc7",[u*(s/2+.078),1.56,g],[.045,1.02,.065])}}let l=i(n,"#ba7655",[0,c+.02,0],[.09,a+.42,.09]);l.rotation.x=Math.PI/2,l.name="ridge";let h=t(n,"#e2dbc7",[0,o-.05,-a/2-.066],[s+.08,.16,.06]);return h.name="trim",n}var Jn=Object.freeze([{id:"home",name:"Main Island",x:0,z:0,radius:480,biome:"mixed",dock:{x:390,z:100},landmarks:["village","player-base","market","harbour"]},{id:"jungle",name:"Jungle Island",x:1150,z:-450,radius:270,biome:"rainforest",dock:{x:930,z:-380},landmarks:["cave","waterfall","hidden-cache"]},{id:"fortress",name:"Fortress Island",x:1900,z:550,radius:240,biome:"rocky",dock:{x:1690,z:490},landmarks:["guarded-estate","rescue-mission"]},{id:"highlands",name:"Highlands Island",x:-1050,z:-850,radius:290,biome:"highlands",dock:{x:-840,z:-710},landmarks:["mine","mountain-trail"]},{id:"smugglers",name:"Smugglers Island",x:-1550,z:250,radius:230,biome:"mangrove",dock:{x:-1340,z:220},landmarks:["warehouse","secret-passage"]},{id:"paradise",name:"Paradise Island",x:700,z:1350,radius:250,biome:"beach",dock:{x:600,z:1120},landmarks:["cabins","reef"]}]),uM=Object.freeze(Object.fromEntries(Jn.map(n=>[n.id,n])));function Qu(n,e){return!Number.isFinite(n)||!Number.isFinite(e)?null:Jn.find(t=>Math.hypot(n-t.x,e-t.z)<=t.radius)??null}function ps(n,e){if(Number.isFinite(n.coastSeed)){let i=n.coastSeed;return .855+.07*Math.sin(e*2+i)+.045*Math.cos(e*3-i)+.025*Math.sin(e*7+i)}let t=n.x*.002+n.z*.001;return .955+.023*Math.sin(e*3+t)+.012*Math.cos(e*5-t)}function gr(n,e,t){let i=(e-n.x)/n.radius,r=(t-n.z)/n.radius,s=Math.hypot(i,r);if(s>=1)return-.32;let a=Math.atan2(r,i),o=ps(n,a),c=Math.max(0,Math.min(1,(o-s)/.12));if(s>o)return-.32*Math.min(1,(s-o)/.04);if(Number.isFinite(n.relief)){let d=(o-s)*n.radius/20,g=Math.min(1,d/18),x=Math.max(0,Math.min(1,(d-18)/85)),m=Math.exp(-((i+.18)**2*4+(r-.16)**2*5))*.7+Math.exp(-((i-.36)**2*11+(r+.25)**2*8))*.42;return .005+g*.65+x*x*(3-2*x)*m*n.relief}let l=Math.max(0,Math.min(1,(.79-s)/.22)),h=l*l*(3-2*l),u=Math.exp(-((i+.18)**2*4+(r-.16)**2*5))*.7+Math.exp(-((i-.36)**2*11+(r+.25)**2*8))*.42,f=n.biome==="highlands"?8.5:n.biome==="rainforest"?2.2:n.biome==="rocky"?1.6:.55;return .005+c*.35+h*u*f}function Xc(n,{segments:e=48}={}){if(!Number.isInteger(e)||e<8||e>256)throw new RangeError("segments must be 8..256");let t=[0,gr(n,n.x,n.z),0],i=[.5,.5],r=[],s=Math.ceil(e/2);for(let l=1;l<=s;l++)for(let h=0;h<=e;h++){let u=h/e*Math.PI*2,f=Number.isFinite(n.relief)?ps(n,u)+.03:1.02,d=n.radius*f*l/s,g=Math.cos(u)*d,x=Math.sin(u)*d;t.push(g,gr(n,n.x+g,n.z+x),x),i.push(.5+g/(n.radius*2.04),.5+x/(n.radius*2.04));let m=1+(l-1)*(e+1)+h;if(h!==e)if(l===1)r.push(0,m+1,m);else{let p=m-(e+1);r.push(p,m+1,m,p,p+1,m+1)}}let a=new Pt;a.setAttribute("position",new rt(t,3)),a.setAttribute("uv",new rt(i,2)),a.setIndex(r),a.computeVertexNormals();let o=new Ut({color:n.biome==="beach"?11779972:5538650,roughness:1,side:Ht}),c=new ut(a,o);return c.name="archipelago-"+n.id,c.position.set(n.x,0,n.z),c.receiveShadow=!0,c}function ed(n={}){let e=new Be;e.name="archipelago-terrain";for(let t of Jn)e.add(Xc(t,n));return e}function ms(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,c=new Pt,l=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=n[f].attributes.position.count}c.setIndex(u)}for(let h in s){let u=td(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<a[h].length;++x)d.push(a[h][x][f]);let g=td(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function td(n){let e,t,i,r=-1,s=0;for(let l=0;l<n.length;++l){let h=n[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let a=new e(s),o=new jt(a,t,i),c=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){let x=h.getComponent(f,g);o.setComponent(f+u,g,x)}}else a.set(h.array,c);c+=h.count*t}return r!==void 0&&(o.gpuType=r),o}var sa=Object.freeze([{x:95,z:-95,w:105,d:80,h:4.4,color:"#d8b8a3",shutter:"#557f7b"},{x:-55,z:-115,w:110,d:85,h:5.8,color:"#d5dfd4",shutter:"#73868b"},{x:-210,z:-95,w:100,d:90,h:4.5,color:"#e6cf97",shutter:"#426d73"},{x:100,z:110,w:100,d:90,h:5.6,color:"#9fbdac",shutter:"#705b48"},{x:-70,z:130,w:110,d:85,h:4.4,color:"#dfc6b5",shutter:"#587e7c"},{x:-225,z:110,w:90,d:75,h:4.5,color:"#c5d1d0",shutter:"#7a6a58"}]);function xr(n,e,t=sa){return e==="home"&&t.some(i=>Math.abs(n.x-i.x)<i.w/2+7&&Math.abs(n.z-i.z)<i.d/2+7)}var Ax=`
float hash21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise21(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hash21(i),hash21(i+vec2(1.,0.)),f.x),mix(hash21(i+vec2(0.,1.)),hash21(i+vec2(1.)),f.x),f.y);}
float fbm21(vec2 p){float f=0.,a=.5;for(int i=0;i<4;i++){f+=a*noise21(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`,id=`
float hashFast(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noiseFast(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hashFast(i),hashFast(i+vec2(1.,0.)),f.x),mix(hashFast(i+vec2(0.,1.)),hashFast(i+vec2(1.)),f.x),f.y);}
float fbmFast(vec2 p){float f=0.,a=.535714;for(int i=0;i<3;i++){f+=a*noiseFast(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`;function pl(n,{size:e=900,segments:t=72,coastSeeds:i=[]}={}){let r=Array.from({length:9},(c,l)=>new At(...n[l]||[1e4,1e4,1,1])),s=new wn({fog:!0,uniforms:{...nl.clone(ye.fog),uTime:{value:0},uEye:{value:new B},uCoasts:{value:r},uCoastSeeds:{value:Array.from({length:9},(c,l)=>i[l]??-100)}},vertexShader:`uniform float uTime;varying vec3 vWater;
    #include <fog_pars_vertex>
    void main(){vec3 p=position;
    p.y+=sin(dot(p.xz,vec2(.41,.19))+uTime*.75)*.024+sin(dot(p.xz,vec2(-.17,.36))-uTime*.58)*.019;
    vWater=(modelMatrix*vec4(p,1.)).xyz;vec4 mvPosition=viewMatrix*vec4(vWater,1.);gl_Position=projectionMatrix*mvPosition;
    #include <fog_vertex>
    }`,fragmentShader:`uniform float uTime;uniform vec3 uEye;uniform vec4 uCoasts[9];uniform float uCoastSeeds[9];varying vec3 vWater;
    #include <fog_pars_fragment>
    ${Ax}
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
    }`}),a=new Dn(e,e,t,t);a.rotateX(-Math.PI/2),s.userData.fragmentNoiseLayers=7;let o=new ut(a,s);return o.name="tropical-ocean",o.position.y=-.045,{mesh:o,update(c,l){s.uniforms.uTime.value=c,s.uniforms.uEye.value.copy(l)},dispose(){a.dispose(),s.dispose()}}}function ml(n=420){let e=new wn({side:hn,depthWrite:!1,uniforms:{uTime:{value:0}},vertexShader:"varying vec3 vSky;void main(){vSky=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float uTime;varying vec3 vSky;${id}
  void main(){vec3 dir=normalize(vSky);float h=dir.y;
    vec3 col=mix(vec3(.65,.79,.84),vec3(.095,.34,.59),smoothstep(-.02,.8,h));
    vec2 p=dir.xz/max(.1,h)*2.3+vec2(uTime*.006,uTime*.0025);float n=fbmFast(p);
    float cloud=smoothstep(.52,.70,n)*smoothstep(.025,.20,h);
    col=mix(col,mix(vec3(.62,.69,.71),vec3(.98,.96,.89),smoothstep(.50,.70,n)),cloud);
    float sun=pow(max(dot(dir,normalize(vec3(-.55,.82,-.36))),0.),70.);col+=vec3(.35,.24,.12)*sun;
    gl_FragColor=vec4(col,1.);
    #include <colorspace_fragment>
  }`});e.userData.fragmentNoiseLayers=3;let t=new ut(new Tn(n,32,20),e);return t.name="tropical-sky",t.renderOrder=-10,t.frustumCulled=!1,t}function gl(n,e){let t=new Ut({roughness:1,color:"#ffffff",vertexColors:!0});return t.userData.fragmentNoiseLayers=3,t.onBeforeCompile=i=>{Object.assign(i.uniforms,{uGrass:{value:n.textures.get("grass")},uSand:{value:n.textures.get("sand")},uRock:{value:n.textures.get("rock")}}),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vIslandPosition;varying vec3 vIslandNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vIslandPosition=position;vIslandNormal=normalize(normal*vec3(${e.toFixed(1)},1.,${e.toFixed(1)}));`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vIslandPosition;varying vec3 vIslandNormal;uniform sampler2D uGrass;uniform sampler2D uSand;uniform sampler2D uRock;${id}`).replace("#include <map_fragment>",`
        vec2 uv=vIslandPosition.xz/${e.toFixed(1)}*.34;
        float n=fbmFast(uv*.46);vec2 offset=vec2(17.3,8.1);
        vec3 grass=mix(texture2D(uGrass,uv).rgb,texture2D(uGrass,uv*1.37+offset).rgb,.38);
        vec3 sand=texture2D(uSand,uv*.8).rgb,rock=texture2D(uRock,uv*.62).rgb;
        float beach=1.-smoothstep(.025,.34,vIslandPosition.y);
        float slope=1.-abs(normalize(vIslandNormal).y);float cliff=smoothstep(.44,.76,slope)*(1.-beach);
        diffuseColor.rgb*=mix(mix(grass,sand,beach),rock,cliff)*(.82+n*.28);`)},t.customProgramCacheKey=()=>`tropical-island-${e}`,t}function nd(n=14){let e=[],t=[],i=[],r=(a,o,c,l)=>{let h=o*2.2,u=Math.sin(o*Math.PI)*.55-o*o*.95;return[Math.sin(a)*h+Math.cos(a)*l*c,u-l*.17,Math.cos(a)*h-Math.sin(a)*l*c]};for(let a=0;a<9;a++){let o=a*Math.PI*2/9;for(let c=1;c<n;c++)for(let l of[-1,1]){let h=c/n,u=Math.sin(h*Math.PI)*.44,f=e.length/3;e.push(...r(o,h-.03,l,.012),...r(o,h-.09,l,u),...r(o,h+.025,l,u*.87),...r(o,h+.03,l,.012)),t.push(h,0,h,.9,h+.03,1,h+.03,0),i.push(f,f+1,f+2,f,f+2,f+3)}}let s=new Pt;return s.setAttribute("position",new rt(e,3)),s.setAttribute("uv",new rt(t,2)),s.setIndex(i),s.computeVertexNormals(),s}var sn=(n,e=0)=>{let t=Math.sin((n+1)*12.9898+(e+1)*78.233)*43758.5453;return t-Math.floor(t)};function Cx(n,e){for(let t of n){let i=t.userData.lod,r=i.distance+i.radius,s=e.distanceToSquared(i.center)<=r*r?"high":"low";s!==i.level&&(t.geometry=i[s],i.level=s,i.shadowReceiverLod&&(t.receiveShadow=s==="high"))}}function Rx(n,e,t,i=0){if(n.ready){let r=n.x-t.x,s=n.y-t.y,a=n.z-t.z;if(i>0?r*r+s*s+a*a<i*i:r===0&&s===0&&a===0)return!1}return n.ready=!0,n.x=t.x,n.y=t.y,n.z=t.z,Cx(e,t),!0}function xl(n,e,{scale:t,height:i,surfaces:r,small:s=!1,clear:a=()=>!1,dense:o=!1,lod:c=!1}={}){let l=(b,E)=>{let O=new kt(.085,.16,1,b,E);O.translate(0,.5,0);let D=O.attributes.position;for(let R=0;R<D.count;R++)D.setX(R,D.getX(R)+D.getY(R)**2*.2);return O.computeVertexNormals(),O},h=l(8,6),u=c?l(6,3):h,f=r.surface("wood","#bc9c71",2,.03),d=r.surface("leaf","#9cb384",1,.01).clone();d.side=Ht;let g=nd(s?9:12),x=c?nd(s?6:7):g,m=[],p=[],y=new Ct,w=650/t,M=0;for(let b of e){let E=[];for(let D=0;D<(o?b.id==="home"?s?700:1500:s?280:650:s?22:42);D++){let R=D+b.x*.013+b.z*.017,N=D*2.39996+b.x*.001+(sn(R,0)-.5)*.72,G=o?Math.min(.93,Math.max(.12,Math.sqrt(D*.6180339%1)*.91+(sn(R,1)-.5)*.09)):Math.min(.91,.34+D%7*.075+(sn(R,1)-.5)*.08),W=b.radius*G,k=b.x+Math.sin(N)*W,ne=b.z+Math.cos(N)*W;a(b,k,ne)||i(k,ne)<.32||E.push({x:k/t,z:ne/t,y:i(k,ne),a:N,h:3.45+sn(R,2)*2.15,size:.7+sn(R,3)*.43,leanX:(sn(R,4)-.5)*.12,leanZ:(sn(R,5)-.5)*.14,index:M++})}if(!E.length)continue;let O=Array.from({length:4},()=>[]);E.forEach(D=>O[(D.x>=b.x/t?1:0)+(D.z>=b.z/t?2:0)].push(D)),O.forEach((D,R)=>{if(!D.length)return;let N=new Rt(h,f,D.length),G=new Rt(g,d,D.length);N.name=m.length?`grove-trunks-${b.id}-${R+1}`:"grove-trunks",G.name=p.length?`grove-fronds-${b.id}-${R+1}`:"grove-fronds";for(let W=0;W<D.length;W++){let k=D[W];y.position.set(k.x,k.y,k.z),y.rotation.set(k.leanX,k.a,k.leanZ),y.scale.set(k.size,k.h,k.size),y.updateMatrix(),N.setMatrixAt(W,y.matrix),y.position.set(k.x+.2*k.size*Math.cos(k.a),k.y+k.h,k.z-.2*k.size*Math.sin(k.a)),y.rotation.set(k.leanX*.35,k.a+sn(k.index,6)*Math.PI*.35,k.leanZ*.35),y.scale.setScalar(k.size),y.updateMatrix(),G.setMatrixAt(W,y.matrix),G.setColorAt(W,new tt().setHSL(.245+sn(k.index,7)*.065,.22+sn(k.index,8)*.13,.59+sn(k.index,9)*.12))}for(let W of[N,G])W.userData.cullingRegion={island:b.id,sector:R+1},W.castShadow=!0,W.instanceMatrix.needsUpdate=!0,W.computeBoundingSphere(),n.add(W);N.userData.lod={high:h,low:u,distance:w,level:"high",shadowReceiverLod:c,center:N.boundingSphere.center.clone(),radius:N.boundingSphere.radius},G.userData.lod={high:g,low:x,distance:w,level:"high",center:G.boundingSphere.center.clone(),radius:G.boundingSphere.radius},N.receiveShadow=!0,G.receiveShadow=!1,m.push(N),p.push(G)})}let P=new nr(1,1),A=r.surface("rock","#a9aaa0",2,.08),F=[];for(let b of e){let E=[];for(let D=0;D<(s?14:24);D++){let R=D+b.x*.019+b.z*.023,N=D*2.399+.6+(sn(R,10)-.5)*.62,G=b.radius*(.84+sn(R,11)*.1),W=b.x+Math.sin(N)*G,k=b.z+Math.cos(N)*G;a(b,W,k)||E.push({x:W/t,y:i(W,k)-.1,z:k/t,a:N,j:D,seed:R})}if(!E.length)continue;let O=new Rt(P,A,E.length);O.name=F.length?"shore-rocks-"+b.id:"shore-rocks";for(let D=0;D<E.length;D++){let R=E[D];y.position.set(R.x,R.y,R.z),y.rotation.set(sn(R.seed,12)*1.2,R.a,sn(R.seed,13)*1.1),y.scale.set(.27+sn(R.seed,14)*.5,.2+sn(R.seed,15)*.43,.31+sn(R.seed,16)*.53),y.updateMatrix(),O.setMatrixAt(D,y.matrix)}O.castShadow=O.receiveShadow=!0,O.instanceMatrix.needsUpdate=!0,O.computeBoundingSphere(),n.add(O),F.push(O)}let z=[...m,...p],T={};return{trees:m[0],foliage:p[0],treeBatches:m,foliageBatches:p,rocks:F[0],rockBatches:F,lodGeometries:[h,u,g,x],update(b,E=0){return Rx(T,z,b,E)}}}function _l(n,{scale:e,height:t,surfaces:i,helpers:r,village:s=sa,paths:a,marketPoint:o={x:290,z:-30}}){let{cube:c,tube:l,ell:h}=r,u=[];function f(E){let O=new Map;E.updateMatrix();for(let D of[...E.children])if(D.isMesh){D.updateMatrix();let R=D.geometry.clone().applyMatrix4(D.matrix);O.has(D.material)||O.set(D.material,[]),O.get(D.material).push(R),E.remove(D)}for(let[D,R]of O){let N=ms(R,!1);R.forEach(W=>W.dispose());let G=new ut(N,D);G.castShadow=G.receiveShadow=!0,E.add(G)}}function d(E,O){let D=new Map,R=0;n.updateMatrixWorld(!0),O.updateMatrixWorld(!0);let N=new It().copy(O.matrixWorld).invert(),G=new It;for(let W of E)for(let k of[...W.children])if(k.isMesh){k.updateMatrixWorld(!0),G.multiplyMatrices(N,k.matrixWorld);let ne=k.geometry.clone().applyMatrix4(G);D.has(k.material)||D.set(k.material,[]),D.get(k.material).push(ne),R++,W.remove(k),k.geometry.dispose()}for(let[W,k]of D){let ne=ms(k,!1);k.forEach(ue=>ue.dispose()),ne.computeBoundingSphere();let re=new ut(ne,W);re.castShadow=re.receiveShadow=!0,O.add(re)}return{sourceBatches:R,materialBatches:O.children.length}}function g(E,O=n,D=!0,R=0){let N=new Be;N.name="village-house",O.add(N),N.position.set(D?E.x/e:E.x,D?t(E.x,E.z):0,D?E.z/e:E.z),N.rotation.y=E.facing??(E.z>60?Math.PI:0);let G=E.w/e,W=E.d/e,k=E.h,ne=c(N,E.color,[0,k/2,0],[G,k,W]);ne.material=i.surface("plaster",E.color,2,.035);let re=i.surface("roof","#d5bbab",2,.065);for(let Z of[-1,1]){let J=c(N,"#ba7655",[Z*G/4,k+.43,0],[Math.hypot(G/2+.25,.85),.13,W+.5]);J.rotation.z=-Z*Math.atan2(.85,G/2+.25),J.material=re,c(N,"#a75f45",[Z*(G/2+.13),k+.01,0],[.14,.22,W+.58])}let ue=l(N,"#a75f45",[0,k+.86,0],[.12,W+.62,.12]);ue.rotation.x=Math.PI/2;for(let Z of[.17,k*.52,k-.16])c(N,"#e2dbc7",[0,Z,W/2+.035],[G+.16,.14,.1]);let Ce=k>5?2:1;for(let Z=0;Z<Ce;Z++)for(let J of[-G*.31,G*.31]){let pe=1.5+Z*2.35,we=W/2+.08,Te=c(N,"#415d63",[J,pe,we],[.75,1.2,.05]);Te.material.roughness=.24,Te.material.metalness=.1,c(N,"#e2dbc7",[J,pe,we+.045],[.065,1.15,.075]),c(N,"#e2dbc7",[J,pe,we+.046],[.7,.065,.076]);for(let Qe of[-1,1]){let Le=c(N,E.shutter,[J+Qe*.56,pe,we+.03],[.34,1.3,.07]);Le.rotation.y=Qe*.24;for(let L=0;L<9;L++)c(N,"#876742",[J+Qe*.56,pe-.52+L*.13,we+.085],[.33,.024,.04])}if(c(N,"#e2dbc7",[J,pe-.68,we],[1.7,.1,.16]),c(N,"#e2dbc7",[J,pe+.68,we],[1.7,.13,.15]),Z===0){let Qe=c(N,"#876742",[J,.79,W/2+.25],[1.28,.2,.3]);if(Qe.rotation.x=-.04,h)for(let Le=-2;Le<=2;Le++){let L=h(N,Le%2?"#6f8f58":"#88a866",[J+Le*.22,.99+Math.abs(Le)*.025,W/2+.27],[.17,.31,.15]);L.rotation.z=Le*.14}if(Ce===1){let Le=c(N,E.shutter,[J,2.32,W/2+.46],[1.55,.08,.82]);Le.rotation.x=-.15,c(N,E.shutter,[J,2.2,W/2+.83],[1.55,.17,.07])}}}c(N,"#5a4b3d",[0,1.05,W/2+.06],[.78,2.1,.1]);for(let Z of[.55,1.42])for(let J of[-.19,.19])c(N,"#745f4c",[J,Z,W/2+.125],[.29,.6,.045]);for(let Z of[-.48,.48])c(N,"#e2dbc7",[Z,1.08,W/2+.11],[.16,2.22,.18]);c(N,"#e2dbc7",[0,2.18,W/2+.11],[1.1,.16,.18]),c(N,"#c9baa1",[0,.07,W/2+.34],[1.16,.14,.58]),h&&h(N,"#caa457",[.27,1.04,W/2+.19],[.055,.055,.035]);let He=(R%2?-1:1)*G*.42,lt=W/2+.55,$e=l(N,"#e2dbc7",[He,2.91,W/2+.34],[.035,.7,.035]);$e.rotation.x=Math.PI/2,c(N,E.shutter,[He,2.62,lt],[.09,.56,.64]);for(let Z of[-1,1]){let J=c(N,"#e2dbc7",[He+Z*.052,2.62,lt],[.018,.22,.24]);J.rotation.x=(R%3-1)*.22}if(Ce===2){c(N,"#e2dbc7",[0,2.75,W/2+.48],[G+.15,.18,.9]);for(let Z=0;Z<=10;Z++)l(N,"#e2dbc7",[-G/2+Z*G/10,3.18,W/2+.84],[.034,.76,.034]);c(N,"#e2dbc7",[0,3.58,W/2+.84],[G+.17,.08,.1])}for(let Z of[-1,1])for(let J=0;J<Ce;J++)for(let pe of[-W*.26,W*.26])c(N,E.shutter,[Z*(G/2+.03),1.5+J*2.35,pe],[.06,1.22,.8]),c(N,"#e2dbc7",[Z*(G/2+.07),.82+J*2.35,pe],[.16,.1,1.05]),c(N,"#e2dbc7",[Z*(G/2+.07),2.18+J*2.35,pe],[.16,.12,1.05]);return N.userData.facadeDetails={planters:2,awnings:Ce===1?2:0,balcony:Ce===2,windowPanes:Ce*8,doorPanels:4,doorway:!0,ridgeCaps:1,eaveFascias:2,hangingSigns:1,signMarks:2,signClearance:!0},f(N),u.push(N),N}s.forEach((E,O)=>g(E,n,!0,O));let x=new Be;x.name="village-buildings",n.add(x),x.userData.batchDetails={sourceHouses:u.length,...d(u,x)},x.userData.cameraBlocker=!0;let m=new Be;m.name="village-overhead-laundry",n.add(m);let p=["#bd6f53","#e8d99e","#587e7c","#73868b"],y=[...s].sort((E,O)=>E.z-O.z),w=Math.ceil(y.length/2),M=0,P=0;for(let E of[y.slice(0,w),y.slice(w)]){let O=[...E].sort((D,R)=>D.x-R.x);for(let D=1;D<O.length;D++){let R=O[D-1],N=O[D],G=R.x+R.w/2,W=N.x-N.w/2;if(W<=G)continue;let k=(G+W)/2,ne=(R.z+N.z)/2,re=Math.max(t(k,ne)+3.35,3.55),ue=(W-G)/e,Ce=l(m,"#5a4b3d",[k/e,re,ne/e],[.012,ue,.012]);Ce.rotation.z=Math.PI/2,M++;for(let He=0;He<3;He++){let lt=(G+(W-G)*(He+1)/4)/e,$e=p[(M+He)%p.length],Z=c(m,$e,[lt,re-.24-He%2*.05,ne/e],[.46,.48+He%2*.1,.025]);Z.rotation.z=(He-1)*.06,P++}}}m.userData.laundryDetails={lines:M,garments:P,clearance:!0},f(m);function A(E,O,D=!1){let R=[],N=[],G=[],W=0;for(let re=0;re<E.length;re++){let ue=E[Math.max(0,re-1)],Ce=E[Math.min(E.length-1,re+1)],He=E[re],lt=Ce.x-ue.x,$e=Ce.z-ue.z,Z=Math.hypot(lt,$e)||1;re&&(W+=Math.hypot(He.x-E[re-1].x,He.z-E[re-1].z)/e);for(let J of[-1,1]){let pe=He.x-$e/Z*O/2*J,we=He.z+lt/Z*O/2*J;R.push(pe/e,t(pe,we)+.018,we/e),N.push((J+1)/2*O/e,W)}if(re){let J=re*2;G.push(J-2,J-1,J,J-1,J+1,J)}}let k=new Pt;k.setAttribute("position",new rt(R,3)),k.setAttribute("uv",new rt(N,2)),k.setIndex(G),k.computeVertexNormals();let ne=new ut(k,i.surface("paving","#ded9c9",.75,.045));if(ne.name="village-path",ne.receiveShadow=!0,n.add(ne),D){let re=Math.max(4,O*.08),ue=new cn(1,1,1),Ce=new Rt(ue,i.surface("rock","#dad4c6",1.2,.025),(E.length-1)*2),He=new Ct;Ce.name="village-curb";let lt=0;for(let $e=1;$e<E.length;$e++){let Z=E[$e-1],J=E[$e],pe=J.x-Z.x,we=J.z-Z.z,Te=Math.hypot(pe,we),Qe=-we/Te,Le=pe/Te;for(let L of[-1,1]){let vt=(Z.x+J.x)/2+Qe*(O/2+re/2)*L,et=(Z.z+J.z)/2+Le*(O/2+re/2)*L;He.position.set(vt/e,t(vt,et)+.065,et/e),He.rotation.set(0,Math.atan2(pe,we),0),He.scale.set(re/e,.1,Te/e+.025),He.updateMatrix(),Ce.setMatrixAt(lt++,He.matrix)}}Ce.castShadow=Ce.receiveShadow=!0,Ce.instanceMatrix.needsUpdate=!0,Ce.computeBoundingSphere(),n.add(Ce)}}let F=[];for(let E of a||[{points:Array.from({length:31},(O,D)=>({x:385-D*21,z:36+Math.sin(D*.19)*9})),width:55,curb:!0},{points:Array.from({length:15},(O,D)=>({x:23,z:-280+D*39})),width:40,curb:!0}]){let O=[E.points[0]];for(let D=1;D<E.points.length;D++){let R=E.points[D-1],N=E.points[D],G=Math.ceil(Math.hypot(N.x-R.x,N.z-R.z)/30);for(let W=1;W<=G;W++)O.push({x:R.x+(N.x-R.x)*W/G,z:R.z+(N.z-R.z)*W/G})}if(A(O,E.width,E.curb),E.curb)for(let D=3;D<E.points.length-3;D+=6){let R=E.points[D-1],N=E.points[D+1],G=E.points[D],W=N.x-R.x,k=N.z-R.z,ne=Math.hypot(W,k)||1,re=Math.floor(D/6)%2?1:-1,ue=E.width/2+9,Ce=G.x-k/ne*ue*re,He=G.z+W/ne*ue*re;F.push({x:Ce/e,y:t(Ce,He),z:He/e})}}if(F.length){let E=new kt(1,1,1,10),O=new Tn(1,12,8),D=new Ct,R=new Rt(E,new Ut({color:"#394447",roughness:.62,metalness:.38}),F.length),N=new Rt(O,new Ut({color:"#ffe4a8",emissive:"#ffb85c",emissiveIntensity:.72,roughness:.34}),F.length);R.name="village-lamp-posts",N.name="village-lamp-globes";for(let G=0;G<F.length;G++){let W=F[G];D.position.set(W.x,W.y+1.35,W.z),D.scale.set(.065,2.7,.065),D.updateMatrix(),R.setMatrixAt(G,D.matrix),D.position.set(W.x,W.y+2.76,W.z),D.scale.set(.18,.22,.18),D.updateMatrix(),N.setMatrixAt(G,D.matrix)}R.castShadow=R.receiveShadow=!0,N.castShadow=!1,N.receiveShadow=!0;for(let G of[R,N])G.instanceMatrix.needsUpdate=!0,G.computeBoundingSphere(),n.add(G)}let z=new Be;z.name="harbor-market",z.position.set(o.x/e,t(o.x,o.z),o.z/e),n.add(z);for(let E of[-1.4,1.4])for(let O of[-.6,.6])l(z,"#876742",[E,1.2,O],[.045,2.4,.045]);let T=c(z,"#cc8660",[0,2.35,0],[3.2,.07,1.8]);T.rotation.x=.07;for(let E=0;E<6;E++){let O=E%2?"#f3dfbe":"#bd6f53",D=(E-2.5)*.53,R=c(z,O,[D,2.395,0],[.53,.035,1.76]);R.rotation.x=.07,c(z,O,[D,2.27,.92],[.49,.18,.055])}c(z,"#a98961",[0,.7,0],[2.8,.15,.9]);let b=["#ce5949","#e6b64d","#709a55"];for(let E=0;E<5;E++){let O=(E-2)*.5;if(c(z,"#a68854",[O,.88,0],[.43,.2,.68]),h)for(let D=0;D<3;D++)h(z,b[(E+D)%b.length],[O+(D-1)*.11,1.05,D%2?-.11:.11],[.075,.085,.075])}return z.userData.marketDetails={canopyStripes:6,valances:6,produce:15},f(z),{building:g,houses:u,buildings:x}}var at=20;var xn=Jn.map((n,e)=>({...n,x:n.x*16,z:n.z*16,dock:{x:n.dock.x*16,z:n.dock.z*16},radius:n.id==="home"?9e3:n.radius*16,coastSeed:1.3+e*1.7,relief:n.id==="home"?24:n.biome==="highlands"?85:n.biome==="rainforest"?42:n.biome==="rocky"?28:12})),Yc=Object.fromEntries(xn.map(n=>[n.id,n])),_s={minX:Math.min(...xn.map(n=>n.x-n.radius))-1600,maxX:Math.max(...xn.map(n=>n.x+n.radius))+1600,minZ:Math.min(...xn.map(n=>n.z-n.radius))-1600,maxZ:Math.max(...xn.map(n=>n.z+n.radius))+1600},rd=(n,e)=>xn.find(t=>Math.hypot(n-t.x,e-t.z)<t.radius)||null,_t=Object.fromEntries(xn.map((n,e)=>{let t=Jn[e],i=Math.hypot(t.dock.x-t.x,t.dock.z-t.z),r=(t.dock.x-t.x)/i,s=(t.dock.z-t.z)/i,a=n.radius*ps(n,Math.atan2(s,r)),o=c=>({x:n.x+r*c,z:n.z+s*c});return[n.id,{id:n.id,...o(a+320),ux:r,uz:s,land:o(a-320),end:o(a+240),shore:o(a+200),width:38,deck:.72}]})),xs={x:_t.home.land.x-385,z:_t.home.land.z-40},_r=sa.map(n=>({...n,x:n.x+xs.x,z:n.z+xs.z,facing:n.z>60?Math.PI:0})),gs=(n,e)=>({x:n+xs.x,z:e+xs.z}),aa=[{width:55,curb:!0,points:Array.from({length:31},(n,e)=>e===0?{..._t.home.land}:gs(385-e*21,36+Math.sin(e*.19)*9))},{width:40,curb:!0,points:Array.from({length:15},(n,e)=>gs(23,-280+e*39))},{width:36,points:[gs(-245,40),gs(-600,30),{x:Yc.home.radius*.35,z:400},{x:800,z:-700},{x:-1800,z:-2400}]}],sd=gs(290,-30),Zt={x:_t.fortress.land.x-_t.fortress.ux*800,z:_t.fortress.land.z-_t.fortress.uz*800},ad={x:Zt.x-115,z:Zt.z+145},st={pump:gs(330,65),cave:{x:_t.jungle.land.x-_t.jungle.ux*700,z:_t.jungle.land.z-_t.jungle.uz*700},estate:{x:Zt.x,z:Zt.z+102},paper:{x:0,z:-40},caveExit:{x:0,z:150},estateExit:{x:0,z:130},stairs:{x:70,z:-95},cellarExit:{x:0,z:150},key:{x:0,z:-60}};st.supply={x:st.cave.x+150,z:st.cave.z-105};var Ix=[{id:"gate",area:null,...ad,hp:2},{id:"patrol",area:null,x:Zt.x+110,z:Zt.z+85,hp:2},{id:"hall",area:"estate",x:-65,z:15,hp:2},{id:"boss",area:"estate",x:0,z:-60,hp:3}];function qc(n,e,t){return t=Math.max(0,Math.min(1,t)),t=t*t*(3-2*t),n+(e-n)*t}function yr(n,e,t=rd(n,e)){if(!t)return-.32;let i=gr(t,n,e);if(i<=.01)return i;if(t.id==="home"){let r=Math.hypot(n-xs.x+80,e-xs.z);r<820&&(i=qc(.68,i,(r-470)/350))}if(t.id==="fortress"){let r=Math.max(Math.abs(n-Zt.x),Math.abs(e-Zt.z));r<400&&(i=qc(.85,i,(r-180)/220))}if(t.id==="jungle"){let r=Math.hypot(n-st.cave.x,e-st.cave.z);r<230&&(i=qc(1.2,i,(r-100)/130))}return i}function Zc(n,e,t){for(let i of t?[_t[t]]:Object.values(_t)){if(!i)continue;let r=n-i.land.x,s=e-i.land.z,a=r*i.ux+s*i.uz,o=r*i.uz-s*i.ux,c=Math.hypot(i.end.x-i.land.x,i.end.z-i.land.z);if(a>=-.5&&a<=c+.5&&Math.abs(o)<=i.width/2){let l=yr(i.land.x,i.land.z);return{dock:i,height:l+(i.deck-l)*Math.max(0,Math.min(1,a/c))}}}return null}function ii(n,e){return Zc(n,e)?.height??yr(n,e)}function yl(n,e){return aa.some(t=>t.points.some((i,r)=>{if(!r)return!1;let s=t.points[r-1],a=i.x-s.x,o=i.z-s.z,c=Math.max(0,Math.min(1,((n-s.x)*a+(e-s.z)*o)/(a*a+o*o)));return Math.hypot(n-s.x-a*c,e-s.z-o*c)<t.width/2+35}))}var wM=Object.fromEntries(Jn.map(n=>{let e=Math.hypot(n.dock.x-n.x,n.dock.z-n.z),t=(n.dock.x-n.x)/e,i=(n.dock.z-n.z)/e;return[n.id,{x:n.x+t*n.radius*1.06,z:n.z+i*n.radius*1.06,shore:{x:n.x+t*n.radius*.84,z:n.z+i*n.radius*.84}}]}));var ys={seatZ:-.28,seatTop:.72,hips:.84,eye:1.65};function od(n,{cube:e,ell:t,mat:i}){let r=new Be;r.name="campaign-boat",n.add(r),t(r,"#233f52",[0,.05,0],[.85,.36,1.9]),t(r,"#dedbd0",[0,.22,0],[.8,.23,1.85]);let s=e(r,"#6e5942",[0,.4,-.15],[1.3,.08,2.7]);s.name="boat-deck";let a=e(r,"#3b5355",[0,.57,ys.seatZ],[.92,.3,.48]);a.name="boat-seat",e(r,"#e7e0d0",[0,.73,.5],[1,.65,.36]);let o=new ut(new cn(1.2,.48,.025),new qs({color:"#b9e4eb",transparent:!0,opacity:.4,roughness:.1}));o.position.set(0,1.15,.68),r.add(o);let c=new ut(new vi(.2,.026,8,20),i("#2e3538"));c.name="boat-wheel",c.position.set(0,1.05,.28),r.add(c);let l=new kt(1,1,1,8),h=new Rt(l,i("#d6dedc"),10),u=new Ct;h.name="boat-rails";let f=0;for(let y of[-.68,.68]){for(let w of[.15,.85,1.55])u.position.set(y,.75,w),u.rotation.set(0,0,0),u.scale.set(.025,.5,.025),u.updateMatrix(),h.setMatrixAt(f++,u.matrix);for(let w of[.86,1.01])u.position.set(y,w,.85),u.rotation.set(Math.PI/2,0,0),u.scale.set(.025,1.4,.025),u.updateMatrix(),h.setMatrixAt(f++,u.matrix)}h.castShadow=!0,h.instanceMatrix.needsUpdate=!0,h.computeBoundingSphere(),r.add(h);let d=new Ut({color:"#b7d6d8",emissive:"#31545a",emissiveIntensity:.38,roughness:.28}),g=new Rt(new kt(.1,.1,.03,16),d,3);g.name="boat-gauges";for(let y=0;y<3;y++)u.position.set((y-1)*.28,.91,.3),u.rotation.set(Math.PI/2,0,0),u.scale.set(y===1?1:.82,y===1?1:.82,1),u.updateMatrix(),g.setMatrixAt(y,u.matrix);g.instanceMatrix.needsUpdate=!0,g.computeBoundingSphere(),r.add(g);let x=t(r,"#d84e46",[-.65,.79,.94],[.075,.075,.075]),m=t(r,"#52b878",[.65,.79,.94],[.075,.075,.075]);x.name="boat-port-light",m.name="boat-starboard-light",x.material=new Ut({color:"#d84e46",emissive:"#b32b25",emissiveIntensity:.9}),m.material=new Ut({color:"#52b878",emissive:"#238547",emissiveIntensity:.9}),e(r,"#303b40",[0,.35,-1.75],[.42,.6,.38]),e(r,"#303b40",[0,-.12,-1.85],[.22,.65,.25]);let p=new ut(new Dn(1.5,5),new Sn({color:"#d0ebe6",transparent:!0,opacity:.25,depthWrite:!1}));return p.rotation.x=-Math.PI/2,p.position.set(0,.03,-3.3),r.add(p),r.userData.boatDetails={rails:10,gauges:3,navigationLights:2},{boat:r,wake:p}}function ld(n,e){if(n.root.parent===e)return!1;e.add(n.root),n.root.position.set(0,0,ys.seatZ),n.root.rotation.set(0,0,0),n.rig.rotation.set(0,0,0),n.hips.position.y=ys.hips;for(let t of n.arms)t.arm.rotation.x=-.85,t.arm.rotation.z=-t.side*.18,t.forearm.rotation.x=-.72;for(let t of n.legs)t.thigh.rotation.x=-1.68,t.calf.rotation.x=1.68,t.shoe.rotation.x=0;return!0}var cd=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z);var hd=Object.values(_t),Un=Array.from({length:5},(n,e)=>({id:e,x:(e-2)*38,z:-80,child:e>2})),Px=Un.map(n=>"cell-"+n.id),Dx=Object.fromEntries(hd.map(n=>[n.id,"dock-"+n.id]));function Lx(n){let e=null,t=15625;for(let i of hd){let r=i.x-n.p.x,s=i.z-n.p.z,a=r*r+s*s;a<t&&(e=i,t=a)}return e}function En(n,e,t,i,r){let s=n[e]||(n[e]={});return Object.assign(s,i),s.id=t,s.label=r,e+1}function ud(n,e){let t=0;if(e.interior==="cave")return t=En(n,t,"paper",st.paper,e.paper?e.gun?"supplies":"take-gun":"move-paper"),t=En(n,t,"cave-exit",st.caveExit,"leave-cave"),n.length=t,n;if(e.interior==="estate")return t=En(n,t,"key",st.key,"take-key"),t=En(n,t,"stairs",st.stairs,"cellar"),t=En(n,t,"estate-exit",st.estateExit,"leave-estate"),n.length=t,n;if(e.interior==="cellar"){for(let r of Un)e.released.includes(r.id)||(t=En(n,t,Px[r.id],r,"free-person"));return t=En(n,t,"cellar-exit",st.cellarExit,"upstairs"),n.length=t,n}if(e.boat){let r=Lx(e);return r&&(t=En(n,t,Dx[r.id],r,"dock")),n.length=t,n}let i=_t[e.island];if(t=En(n,t,"boat",i.shore,e.released.length===5&&!e.boarded?"board-group":"boat"),e.island==="home"&&(t=En(n,t,"pump",st.pump,"refuel")),e.island==="jungle"&&(t=En(n,t,"cave",st.cave,"enter-cave"),t=En(n,t,"supply",st.supply,"supplies")),e.island==="fortress"&&(t=En(n,t,"estate",st.estate,"enter-estate")),["highlands","smugglers","paradise"].includes(e.island)){let r=Yc[e.island];t=En(n,t,"supplies",r,"supplies")}return n.length=t,n}function dd(n,e){let t=null,i=1/0;for(let r of n){let s=r.id.startsWith("cell-")?85:r.id.startsWith("dock-")?125:65,a=r.x-e.x,o=r.z-e.z,c=a*a+o*o;c<s*s&&c<i&&(t=r,i=c)}return t}function Ux(n,e){if(e.complete)return n.key="complete",n.target=null,n;if(!e.docked)return n.key="dock-goal",n.target=_t.home,n;if(!e.tanked)return n.key="fuel-goal",n.target=e.boat?_t.home:st.pump,n;if(!e.gun)return e.interior==="cave"?(n.key=e.paper?"gun-goal":"paper-goal",n.target=st.paper,n):(n.key="cave-goal",n.target=e.boat?_t.jungle:e.island==="jungle"?st.cave:_t[e.island].shore,n);if(e.interior==="cave")return n.key="exit-cave-goal",n.target=st.caveExit,n;if(!e.key){if(e.interior==="estate"){let t=e.guards.find(i=>i.id==="boss");return n.key=t.hp>0?"boss-goal":"key-goal",n.target=t.hp>0?t:st.key,n}return n.key="estate-goal",n.target=e.boat?_t.fortress:e.island==="fortress"?st.estate:_t[e.island].shore,n}return e.released.length<5?(n.key=e.interior==="cellar"?"people-goal":"cellar-goal",n.target=e.interior==="cellar"?Un.find(t=>!e.released.includes(t.id)):e.interior==="estate"?st.stairs:e.boat?_t.fortress:st.estate,n):e.interior?(n.key="escort-goal",n.target=e.interior==="cellar"?st.cellarExit:st.estateExit,n):e.boarded?(n.key="home-goal",n.target=e.boat?_t.home:e.island==="home"?_t.home.shore:_t[e.island].shore,n):(n.key="boat-goal",n.target=_t.fortress.shore,n)}function Jc(n,e){if(Ux(n,e),e.boat||e.interior||!n.target)return n;let t=_t[e.island],i=!!Zc(e.p.x,e.p.z,e.island);return n.target===t.shore?!i&&cd(e.p,t.land)>65&&(n.target=t.land):i&&cd(e.p,t.land)>45&&(n.target=t.land),n}function vl(n){return Jc({},n)}function $c(n,e,t,i,r){let s=e.interior?1.8:e.boat?.65:1.3;if(n.fillStyle=e.interior?"#25312d":"#176475",n.fillRect(0,0,t,i),n.save(),n.translate(t/2-e.p.x*s,i/2-e.p.z*s),n.scale(s,s),e.interior){if(n.fillStyle="#6f7568",n.fillRect(-115,-125,230,310),n.strokeStyle="#beb99e",n.lineWidth=8,n.strokeRect(-115,-125,230,310),e.interior==="cave"&&(n.fillStyle="#967756",n.fillRect(-25,-60,50,35),n.fillStyle=e.paper?"#30383a":"#e4d6b8",e.gun||n.fillRect(-17,-55,34,22)),e.interior==="estate"&&(n.fillStyle="#9b7751",n.fillRect(-45,-105,90,25),n.fillStyle="#f0c561",!e.key&&e.guards.find(l=>l.id==="boss").hp===0&&n.fillRect(-5,-65,10,12)),e.interior==="cellar")for(let l of Un)n.strokeStyle="#bac6bf",e.released.includes(l.id)||n.strokeRect(l.x-18,-112,36,80)}else{for(let l of xn){o(l,1,"#398b8b",-4*at),o(l,1,"#d9cba2"),o(l,1,l.biome==="highlands"?"#8f9882":"#759575",18*at);for(let u=0;u<26;u++){let f=u*2.39996+l.x*.001,d=l.radius*(.36+u%7*.075),g=l.x+Math.sin(f)*d,x=l.z+Math.cos(f)*d;if(!(l.id==="home"&&(xr({x:g,z:x},l.id,_r)||yl(g,x)))&&!(l.id==="fortress"&&Math.abs(g-Zt.x)<125&&Math.abs(x-Zt.z)<155)){n.strokeStyle="#365e49",n.lineWidth=5;for(let m=0;m<7;m++){let p=m*Math.PI*2/7;n.beginPath(),n.moveTo(g,x),n.quadraticCurveTo(g+Math.sin(p+.25)*13,x+Math.cos(p+.25)*13,g+Math.sin(p)*25,x+Math.cos(p)*25),n.stroke()}}}n.fillStyle="#fff4cc",n.font="18px system-ui",n.textAlign="center",n.fillText(r(l.id),l.x,l.z-l.radius*.58);let h=_t[l.id];n.strokeStyle="#a2865b",n.lineWidth=h.width,n.beginPath(),n.moveTo(h.land.x,h.land.z),n.lineTo(h.end.x,h.end.z),n.stroke()}for(let l of aa)n.strokeStyle="#b7baa5",n.lineWidth=l.width,n.beginPath(),l.points.forEach((h,u)=>u?n.lineTo(h.x,h.z):n.moveTo(h.x,h.z)),n.stroke();for(let l of _r)n.fillStyle="#304f43",n.fillRect(l.x-l.w/2+7,l.z-l.d/2+9,l.w,l.d),n.fillStyle=l.color,n.fillRect(l.x-l.w/2,l.z-l.d/2,l.w,l.d),n.fillStyle="#ab7861",n.fillRect(l.x-l.w/2-3,l.z-l.d/2+4,l.w+6,l.d-8),n.strokeStyle="#d4aa83",n.lineWidth=4,n.beginPath(),n.moveTo(l.x-l.w/2,l.z),n.lineTo(l.x+l.w/2,l.z),n.stroke();n.fillStyle="#e0d5b9",n.fillRect(Zt.x-80,Zt.z-80,160,160),n.fillStyle="#352e25",n.fillRect(Zt.x-20,Zt.z+76,40,12),n.fillStyle="#404b40",n.fillRect(st.cave.x-36,st.cave.z-30,72,36),n.fillStyle="#d28757",n.fillRect(st.pump.x-15,st.pump.z-16,30,32)}for(let l of e.guards)l.area===e.interior&&l.hp>0&&!e.boat&&(l.area||e.island==="fortress")&&c(l,"#d28b76",12);if(e.interior==="cellar")for(let l of Un)e.released.includes(l.id)||c(l,"#d3dcbe",10);let a=vl(e).target;a&&(n.strokeStyle="#f5d281",n.lineWidth=3,n.beginPath(),n.arc(a.x,a.z,20+Math.sin(e.elapsed*3)*3,0,Math.PI*2),n.stroke()),n.save(),n.translate(e.p.x,e.p.z),n.rotate(-e.heading),e.boat?(n.fillStyle="#efe4c9",n.beginPath(),n.moveTo(-18,-32),n.lineTo(18,-32),n.lineTo(22,28),n.lineTo(0,50),n.lineTo(-22,28),n.closePath(),n.fill()):(n.fillStyle="#b6ddd3",n.beginPath(),n.arc(0,0,9,0,Math.PI*2),n.fill()),n.strokeStyle="#fff6c7",n.lineWidth=3,n.beginPath(),n.moveTo(0,6),n.lineTo(0,28),n.stroke(),n.restore(),e.shot&&(n.strokeStyle="#ffeac5",n.lineWidth=2,n.beginPath(),n.moveTo(e.shot.from.x,e.shot.from.z),n.lineTo(e.shot.to.x,e.shot.to.z),n.stroke()),n.restore();function o(l,h,u,f=0){n.fillStyle=u,n.beginPath();for(let d=0;d<=96;d++){let g=d/96*Math.PI*2,x=l.radius*ps(l,g)*h-f,m=l.x+Math.cos(g)*x,p=l.z+Math.sin(g)*x;d?n.lineTo(m,p):n.moveTo(m,p)}n.closePath(),n.fill()}function c(l,h,u){n.fillStyle=h,n.beginPath(),n.arc(l.x,l.z,u,0,Math.PI*2),n.fill()}}function Nx(n,e){return e.parent===n?!1:(n.add(e),!0)}function Fx(n,e,t,i,r,s,a,o){if(n.ready&&n.area===e)return!1;n.ready=!0,n.area=e,t.visible=!e,i.visible=!!e;for(let[c,l]of r)l.visible=c===e;return s.background.set(e?"#202c29":"#b9dbe5"),s.fog.color.copy(s.background),a.intensity=e?.65:2,o.intensity=e?.15:2.8,!0}function zx(n,e,t,i){let r=n.values||(n.values=[]),s=!n.ready||r.length!==e.length;for(let a=0;a<e.length;a++)r[a]!==e[a]&&(s=!0);if(!s)return!1;n.ready=!0,r.length=e.length,t.fill(0);for(let a=0;a<e.length;a++){let o=e[a];r[a]=o,t[o]=1}for(let a=0;a<i.length;a++)i[a].visible=!t[a];return!0}function Ox(n,e,t){let i=e.released||[],r=n.released||(n.released=[]),s=!n.ready||n.x!==e.p.x||n.z!==e.p.z||n.area!==(e.interior||"")||n.island!==e.island||n.boat!==!!e.boat||n.paper!==!!e.paper||n.gun!==!!e.gun||n.boarded!==!!e.boarded||r.length!==i.length;for(let a=0;a<i.length;a++)r[a]!==i[a]&&(s=!0);if(!s)return!1;n.ready=!0,n.x=e.p.x,n.z=e.p.z,n.area=e.interior||"",n.island=e.island,n.boat=!!e.boat,n.paper=!!e.paper,n.gun=!!e.gun,n.boarded=!!e.boarded,r.length=i.length;for(let a=0;a<i.length;a++)r[a]=i[a];return n.nearby=dd(ud(t,e),e.p),!0}function Bx(n,e,t,i=!!e.guards?.find(r=>r.id==="boss"&&r.hp>0)){let r=e.released||[],s=n.released||(n.released=[]),a=!n.ready||n.x!==e.p.x||n.z!==e.p.z||n.area!==(e.interior||"")||n.island!==e.island||n.boat!==!!e.boat||n.complete!==!!e.complete||n.docked!==!!e.docked||n.tanked!==!!e.tanked||n.paper!==!!e.paper||n.gun!==!!e.gun||n.key!==!!e.key||n.boarded!==!!e.boarded||n.bossAlive!==i||s.length!==r.length;for(let o=0;o<r.length;o++)s[o]!==r[o]&&(a=!0);if(!a)return!1;n.ready=!0,n.x=e.p.x,n.z=e.p.z,n.area=e.interior||"",n.island=e.island,n.boat=!!e.boat,n.complete=!!e.complete,n.docked=!!e.docked,n.tanked=!!e.tanked,n.paper=!!e.paper,n.gun=!!e.gun,n.key=!!e.key,n.boarded=!!e.boarded,n.bossAlive=i,s.length=r.length;for(let o=0;o<r.length;o++)s[o]=r[o];return Jc(t,e),!0}function kx(n,e,t=!1){let i=e.interior||"",r=!!e.boat,s=Math.round(e.p.x/20),a=Math.round(e.p.z/20),o=Math.round(e.heading*12),c=!!e.boarded,l=e.guards||[],h=e.released||[],u=!n.ready||n.area!==i||n.island!==e.island||n.boat!==r||n.x!==s||n.z!==a||n.heading!==o||n.boarded!==c||n.animated!==t||n.guardCount!==l.length||n.releasedCount!==h.length,f=n.guards||(n.guards=[]),d=n.released||(n.released=[]);for(let g=0;g<l.length;g++){let x=l[g].hp>0;f[g]!==x&&(u=!0),f[g]=x}for(let g=0;g<h.length;g++)d[g]!==h[g]&&(u=!0),d[g]=h[g];return f.length=l.length,d.length=h.length,n.ready=!0,n.area=i,n.island=e.island,n.boat=r,n.x=s,n.z=a,n.heading=o,n.boarded=c,n.animated=t,n.guardCount=l.length,n.releasedCount=h.length,u}function Vx(n,e,t,i){let r=Math.sin(i),s=Math.cos(i);for(let a=0;a<e.length;a++){let o=e[a],c=n[a],l=35+o.id*15,h=o.id%2?16:-16;c.x=t.x-r*l+s*h,c.z=t.z-s*l-r*h}return n}function Gx(n,e,t,i,r=at){return n.setXYZ(0,e.x/r,i,e.z/r),n.setXYZ(1,t.x/r,i,t.z/r),n.needsUpdate=!0,n}function Hx(n,e,t){let i=e*7;return n.swing=Math.sin(i),n.step=t?.24:0,n.bounce=t?Math.cos(i*2):0,n}function Wx(n,e,t,i,r,s=!1){let a=s||r||!n.ready||n.x!==e.x||n.z!==e.z||n.height!==t||n.heading!==i||n.walking!==r;return n.ready=!0,n.x=e.x,n.z=e.z,n.height=t,n.heading=i,n.walking=r,a}function Xx(n,e,t=!0){let i=!!(t&&n.ready&&(n.x!==e.x||n.z!==e.z));return n.ready=!0,n.x=e.x,n.z=e.z,i}function oa(n,e,t,i,r){let s=n.get(e);return s&&s.x===t&&s.z===i||(s||(s={x:0,z:0,height:0},n.set(e,s)),s.x=t,s.z=i,s.height=r(t,i),n.misses=(n.misses||0)+1),s.height}function qx(n,e,t,i,r=!0){if(!r||!n.ready)return n.ready=!0,n.last=e,n.slow=0,n.fast=0,t;let s=e-n.last;return n.last=e,s<=0||s>250?t:(s>34?(n.slow+=s,n.fast=0):s<20?(n.fast+=s,n.slow=Math.max(0,n.slow-s)):(n.slow=Math.max(0,n.slow-s*.5),n.fast=Math.max(0,n.fast-s)),n.slow>=2500&&t>.8?(n.slow=0,n.fast=0,Math.max(.8,Math.round((t-.15)*100)/100)):n.fast>=5e3&&t<i?(n.slow=0,n.fast=0,Math.min(i,Math.round((t+.1)*100)/100)):t)}function fd({canvas:n,getState:e,makeHuman:t,onLost:i,rendererFactory:r=s=>new us(s)}){let s=r({canvas:n,antialias:!0,powerPreference:"high-performance"}),a=innerWidth<=700,o=Math.min(devicePixelRatio||1,a?1.1:1.5);s.setPixelRatio(o),s.setSize(innerWidth,innerHeight,!1),s.outputColorSpace=Yt,s.toneMapping=is,s.shadowMap.enabled=!0,s.shadowMap.type=ns,s.shadowMap.autoUpdate=!1;let c=new er,l=new Kt(68,innerWidth/innerHeight,.04,6e3);c.add(l),c.background=new tt("#b9dbe5"),c.fog=new Qi("#b9dbe5",650,2400);let h=new sr("#d5ecfa","#566143",2),u=new or("#fff2d6",2.8);u.castShadow=!0,u.shadow.mapSize.set(a?1024:2048,a?1024:2048),Object.assign(u.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:.1,far:100}),u.shadow.normalBias=.025,c.add(h,u,u.target);let f=hl(s),d=new Map,g=new Map,x=U=>(d.has(U)||d.set(U,f.forColor(U)||new Ut({color:U,roughness:.85})),d.get(U)),m=(U,_)=>(g.has(U)||g.set(U,_()),g.get(U)),p=(U,_,I,H=[0,0,0],K=[1,1,1])=>{let ae=new ut(_,I);return ae.position.set(...H),ae.scale.set(...K),ae.castShadow=ae.receiveShadow=!0,U.add(ae),ae},y=(U,_,I,H)=>p(U,m("box",()=>new cn),x(_),I,H),w=(U,_,I,H)=>p(U,m("cylinder",()=>new kt(1,1,1,12)),x(_),I,H),M=(U,_,I,H)=>p(U,m("sphere",()=>new Tn(1,16,12)),x(_),I,H),P={mat:x,geo:m,mesh:p,cube:y,tube:w,ell:M},A=new Be,F=new Be,z=U=>{let _=new Map;U.updateMatrix();for(let I of[...U.children])if(I.isMesh){I.updateMatrix();let H=I.geometry.clone().applyMatrix4(I.matrix);_.has(I.material)||_.set(I.material,[]),_.get(I.material).push(H),U.remove(I)}for(let[I,H]of _){let K=ms(H,!1);H.forEach(le=>le.dispose());let ae=new ut(K,I);ae.castShadow=ae.receiveShadow=!0,U.add(ae)}},T=(U,_)=>{let I=new Set(U.legs.map(ge=>ge.shoe)),H=0,K=0,ae=0;U.root.traverse(ge=>{ge.isMesh&&H++});let le=ge=>{for(let ke of[...ge.children])ke.isMesh||le(ke);let qe=new Map;for(let ke of[...ge.children])ke.isMesh&&!I.has(ke)&&!ke.isInstancedMesh&&(qe.has(ke.material)||qe.set(ke.material,[]),qe.get(ke.material).push(ke));for(let[ke,nt]of qe)if(nt.length>1){let Fe=nt.map(wt=>(wt.updateMatrix(),wt.geometry.clone().applyMatrix4(wt.matrix))),Re=ms(Fe,!1);Fe.forEach(wt=>wt.dispose());let St=new ut(Re,ke);St.name=`${_}-rigid-batch-${ae++}`,St.castShadow=nt.some(wt=>wt.castShadow),St.receiveShadow=nt.some(wt=>wt.receiveShadow),nt.forEach(wt=>ge.remove(wt)),ge.add(St)}};le(U.root),U.root.traverse(ge=>{ge.isMesh&&K++}),U.root.userData.rigidBatchProfile={sourceMeshes:H,renderMeshes:K,batches:ae,animatedShoes:I.size}},b=(U,_,I)=>{let H=new Be;H.name="campaign-supply-cache-"+U,H.position.set(_/at,ii(_,I),I/at),A.add(H),y(H,"#a98961",[0,.34,0],[1.45,.68,.88]),y(H,"#debb63",[0,.72,0],[1.52,.09,.94]);for(let K of[-.54,.54])y(H,"#debb63",[K,.35,.46],[.1,.62,.06]);y(H,"#bd6e4e",[-1.02,.42,.04],[.42,.84,.55]),y(H,"#394447",[-1.02,.87,.04],[.2,.08,.22]);for(let K of[-1.15,-.89])y(H,"#394447",[K,.75,.04],[.05,.24,.05]);return y(H,"#394447",[-1.02,.84,.04],[.26,.05,.05]),y(H,"#596b4e",[.93,.23,.04],[.72,.46,.58]),y(H,"#394447",[.93,.48,.04],[.48,.05,.26]),y(H,"#e2dbc7",[.82,.86,-.03],[.7,.34,.5]),y(H,"#bd6e4e",[.82,.87,.235],[.34,.08,.025]),y(H,"#bd6e4e",[.82,.87,.235],[.08,.25,.025]),H.userData.supplyDetails={crate:!0,fuelCan:!0,medkit:!0,ammoBox:!0},z(H),H};c.add(A,F);let E=a?96:192,O=Math.max(...xn.map(U=>U.radius)),D=[];for(let U of xn){let _=Math.max(a?48:72,Math.round(E*U.radius/O/8)*8),I=Xc(U,{segments:_});I.userData.terrainSegments=_,D.push(I),I.scale.set(1/at,1,1/at),I.position.set(U.x/at,0,U.z/at);let H=I.geometry.attributes.position;for(let Ee=0;Ee<H.count;Ee++)H.setY(Ee,yr(U.x+H.getX(Ee),U.z+H.getZ(Ee),U));let K=new Float32Array(H.count*3),ae=new tt;for(let Ee=0;Ee<H.count;Ee++){let ft=Math.hypot(H.getX(Ee),H.getZ(Ee))/U.radius;ae.set(ft>.8?"#fff7e4":U.biome==="rocky"?"#d1d4c5":"#dce2c8"),ae.toArray(K,Ee*3)}I.geometry.setAttribute("color",new jt(K,3)),I.geometry.computeVertexNormals(),I.material.dispose(),I.material=gl(f,at),I.material.vertexColors=!0,A.add(I);let le=_t[U.id],ge=new Be,qe=yr(le.land.x,le.land.z);ge.name="pier-"+U.id,ge.position.set(le.land.x/at,qe,le.land.z/at),ge.rotation.y=Math.atan2(le.ux,le.uz),A.add(ge);let ke=Ml(le.end,le.land)/at,nt=Math.ceil(ke/.26),Fe=new Rt(m("box",()=>new cn),x("#a98961"),nt+1),Re=new Ct;Fe.name="pier-deck-"+U.id;for(let Ee=0;Ee<=nt;Ee++){let ft=ke*Ee/nt;Re.position.set(0,(le.deck-qe)*Ee/nt-.075,ft),Re.scale.set(le.width/at,.15,ke/nt+.006),Re.updateMatrix(),Fe.setMatrixAt(Ee,Re.matrix)}Fe.castShadow=Fe.receiveShadow=!0,ge.add(Fe);let St=m("pier-piling",()=>new kt(1,1,1,12)),wt=new Rt(St,x("#876742"),8);wt.name="pier-pilings-"+U.id;let vn=0;for(let Ee of[-.8,.8])for(let ft of[0,ke*.33,ke*.66,ke]){let Vt=(le.deck-qe)*ft/ke;Re.position.set(Ee,Vt-.65,ft),Re.scale.set(.075,1.6,.075),Re.updateMatrix(),wt.setMatrixAt(vn++,Re.matrix)}wt.castShadow=wt.receiveShadow=!0,wt.instanceMatrix.needsUpdate=!0,wt.computeBoundingSphere(),ge.add(wt);let ln=new Rt(St,x("#394447"),8);ln.name="pier-bollards-"+U.id;let Mn=0;for(let Ee of[-.72,.72])for(let ft of[ke*.78,ke*.98]){let Vt=(le.deck-qe)*ft/ke;Re.position.set(Ee,Vt+.25,ft),Re.scale.set(.075,.5,.075),Re.updateMatrix(),ln.setMatrixAt(Mn++,Re.matrix),Re.position.set(Ee,Vt+.51,ft),Re.scale.set(.13,.08,.13),Re.updateMatrix(),ln.setMatrixAt(Mn++,Re.matrix)}ln.castShadow=ln.receiveShadow=!0,ln.instanceMatrix.needsUpdate=!0,ln.computeBoundingSphere(),ge.add(ln),["paradise","smugglers","highlands"].includes(U.id)&&b(U.id,U.x,U.z)}b("jungle",st.supply.x,st.supply.z);let R=Math.max(_s.maxX-_s.minX,_s.maxZ-_s.minZ)/at+12e3,N=pl(xn.map(U=>[U.x/at,U.z/at,U.radius/at,U.radius/at]),{size:R,coastSeeds:xn.map(U=>U.coastSeed)});A.add(N.mesh);let G=ml(5e3);A.add(G);let W=xl(A,xn,{scale:at,height:yr,surfaces:f,small:a,dense:!0,lod:!0,clear:(U,_,I)=>xr({x:_,z:I},U.id,_r)||U.id==="home"&&yl(_,I)||U.id==="jungle"&&(Ml({x:_,z:I},st.cave)<100||Ml({x:_,z:I},st.supply)<58)||U.id==="fortress"&&Math.abs(_-Zt.x)<125&&Math.abs(I-Zt.z)<155||Ml({x:_,z:I},_t[U.id].land)<90}),k=_l(A,{scale:at,height:yr,surfaces:f,helpers:P,village:_r,paths:aa,marketPoint:sd}),{boat:ne,wake:re}=od(A,P),ue=new Be;ue.name="harbor-fuel-pump",ue.position.set(st.pump.x/at,ii(st.pump.x,st.pump.z),st.pump.z/at),A.add(ue),y(ue,"#a98961",[0,.06,0],[1.05,.12,.92]),y(ue,"#e6d6b8",[0,.68,0],[.75,1.24,.65]),y(ue,"#bd6e4e",[0,1.34,0],[.82,.28,.72]),y(ue,"#263f41",[0,.99,.34],[.48,.25,.045]),y(ue,"#e8d99e",[0,.99,.37],[.31,.1,.018]),w(ue,"#2d3435",[.53,.72,0],[.035,1.18,.035]);let Ce=y(ue,"#394447",[.53,.39,.29],[.1,.24,.08]);Ce.rotation.z=-.22,y(ue,"#bd6e4e",[0,.39,.35],[.3,.1,.055]),w(ue,"#e6d6b8",[0,2.18,-.06],[.055,1.42,.055]);let He=w(ue,"#bd6e4e",[0,2.9,-.06],[.42,.1,.42]);He.rotation.x=Math.PI/2;let lt=w(ue,"#f3dfbe",[0,2.9,.005],[.31,.115,.31]);lt.rotation.x=Math.PI/2,ue.userData.fuelDetails={display:!0,hose:!0,nozzle:!0,marker:!0},z(ue);let $e=new Be;$e.name="campaign-cave-entrance",$e.position.set(st.cave.x/at,ii(st.cave.x,st.cave.z),st.cave.z/at),A.add($e);let Z=[[-2,.45,.02,.55,.55,.85,-.12],[-2,1.15,-.02,.58,.7,.95,.08],[-1.9,1.9,.04,.62,.72,.9,-.09],[-1.55,2.55,-.03,.72,.6,.9,.14],[2,.45,-.02,.55,.55,.85,.12],[2,1.15,.03,.58,.7,.95,-.08],[1.9,1.9,-.04,.62,.72,.9,.09],[1.55,2.55,.02,.72,.6,.9,-.14],[-1,2.9,.03,.72,.48,.9,-.1],[-.35,3.05,-.03,.68,.45,.92,.06],[.35,3.05,.02,.68,.45,.92,-.06],[1,2.9,-.02,.72,.48,.9,.1]],J=new Ct,pe=new Rt(m("cave-mouth-rock",()=>new Tn(1,12,8)),x("#92968b"),Z.length);pe.name="cave-entrance-rocks",pe.castShadow=!0,pe.receiveShadow=!0,Z.forEach(([U,_,I,H,K,ae,le],ge)=>{J.position.set(U,_,I),J.scale.set(H,K,ae),J.rotation.set(0,0,le),J.updateMatrix(),pe.setMatrixAt(ge,J.matrix)}),pe.instanceMatrix.needsUpdate=!0,pe.computeBoundingSphere(),$e.add(pe),y($e,"#171e19",[0,1.25,-.85],[2.8,2.5,.15]);let we=new Rt(m("cave-torch-handle",()=>new kt(1,1,1,7)),x("#4c3525"),2);we.name="cave-entrance-torches",we.castShadow=!0;let Te=new Ut({color:"#ffcf75",emissive:"#ff7f32",emissiveIntensity:1.15,roughness:.55}),Qe=new Rt(m("cave-torch-flame",()=>new Xn(1,1,7)),Te,2);Qe.name="cave-entrance-flames",[-1,1].forEach((U,_)=>{J.position.set(U*1.18,1.15,.18),J.scale.set(.035,.85,.035),J.rotation.set(0,0,-U*.15),J.updateMatrix(),we.setMatrixAt(_,J.matrix),J.position.set(U*1.18,1.65,.18),J.scale.set(.12,.22,.12),J.rotation.set(0,0,U*.08),J.updateMatrix(),Qe.setMatrixAt(_,J.matrix)}),we.instanceMatrix.needsUpdate=!0,Qe.instanceMatrix.needsUpdate=!0,we.computeBoundingSphere(),Qe.computeBoundingSphere(),$e.add(we,Qe),$e.userData.entranceDetails={archStones:12,torches:2,clearOpening:!0};let Le=new Be;Le.name="guarded-estate",Le.position.set(Zt.x/at,.85,Zt.z/at),A.add(Le),y(Le,"#e2dbc7",[0,1.55,0],[8,3.1,8]),y(Le,"#a68854",[0,3.2,0],[8.6,.25,8.6]),y(Le,"#e2dbc7",[0,4.35,-.4],[6.5,2.3,6.5]);for(let U of[-1,1]){let _=y(Le,"#ba7655",[U*1.7,5.9,-.4],[3.7,.15,7.4]);_.rotation.z=-U*.3}y(Le,"#313f38",[0,1.2,4.03],[1.65,2.4,.08]);for(let U of[-2.7,2.7])for(let _ of[1.7,4.3])y(Le,"#425761",[U,_,4.04],[1.15,1.3,.06]),y(Le,"#e2dbc7",[U,_,4.11],[.08,1.38,.08]),y(Le,"#e2dbc7",[U,_,4.11],[1.2,.08,.08]);for(let U of[-1.4,1.4])w(Le,"#e2dbc7",[U,1.3,4.65],[.16,2.6,.16]);y(Le,"#a68854",[0,2.67,4.65],[3.3,.2,1.4]);for(let U=0;U<3;U++)y(Le,"#92968b",[0,-.03+U*.06,4.4+U*.4],[2.6,.15,1.25-U*.25]);for(let U of[-3.4,3.4])for(let _ of[1.7,4.3]){y(Le,"#587e7c",[U,_,4.07],[.32,1.35,.1]);for(let I=0;I<8;I++)y(Le,"#876742",[U,_-.5+I*.14,4.14],[.3,.025,.045])}y(Le,"#e2dbc7",[0,3.1,4.55],[8.5,.16,1.25]);for(let U=-10;U<=10;U++)w(Le,"#e2dbc7",[U*.39,3.57,5.05],[.033,.83,.033]);y(Le,"#e2dbc7",[0,4,5.05],[8.5,.08,.08]);for(let U of[-2.45,2.45]){y(Le,"#a98961",[U,.3,4.62],[1.25,.42,.55]);for(let _=-2;_<=2;_++){let I=M(Le,_%2?"#6f8f58":"#88a866",[U+_*.2,.67+Math.abs(_)*.025,4.62],[.18,.38,.18]);I.rotation.z=_*.12}}let L=new Ut({color:"#ffe4a8",emissive:"#ffb85c",emissiveIntensity:.72,roughness:.34});for(let U of[-1.03,1.03]){y(Le,"#394447",[U,2.05,4.14],[.08,.1,.24]);let _=M(Le,"#ffe4a8",[U,1.88,4.27],[.13,.19,.13]);_.material=L}let vt=w(Le,"#d4a957",[0,3.02,4.11],[.38,.1,.38]);vt.rotation.x=Math.PI/2,Le.userData.estateDetails={planters:2,lanterns:2,crest:!0},z(Le),Le.userData.cameraBlocker=!0;let et=[k.buildings,Le];et.forEach(U=>U.updateWorldMatrix(!0,!0));let Ye={};function Me(U,_=11,I=15){let H=new Be;H.name=U,F.add(H),Ye[U]=H,y(H,U==="cave"?"#777a6b":"#a68854",[0,-.1,1],[_,.2,I]);let K=new Be;K.name=U+"-walls",H.add(K);for(let le of[-_/2,_/2])y(K,U==="cave"?"#92968b":"#e2dbc7",[le,1.65,1],[.3,3.3,I]);y(K,U==="cave"?"#92968b":"#e2dbc7",[0,1.65,1-I/2],[_,3.3,.3]),z(K),y(H,"#313f38",[0,1.1,I/2-.2],[1.7,2.2,.15]);let ae=new ar(U==="cave"?"#ffd9a0":"#ffeccf",22,18,1.6);return ae.position.set(0,2.7,1),H.add(ae),H.userData.shellDetails={sourceMeshes:5,renderMeshes:3},H}let yt=Me("cave",12,17),Ue=m("cave-formation",()=>new Xn(1,1,9)),Ke=new Rt(Ue,x("#777a6b"),16),Tt=new Ct;Ke.name="cave-formations";let Ot=[[-5.2,-5.4,.34,.92],[-5.2,-1.7,.27,.68],[-5.2,2.1,.38,1.06],[-5.2,5.1,.25,.78],[5.2,-4.1,.31,.84],[5.2,-.3,.39,1.12],[5.2,3.4,.28,.72],[3.6,-6.7,.42,1.18]],C=0;for(let[U,_,I,H]of Ot)Tt.position.set(U,H/2,_),Tt.rotation.set(0,C*.71%Math.PI,0),Tt.scale.set(I,H,I),Tt.updateMatrix(),Ke.setMatrixAt(C++,Tt.matrix),Tt.position.set(-U,3.3-H*.48,_+.55),Tt.rotation.set(0,C*.53%Math.PI,Math.PI),Tt.scale.set(I*.82,H*.92,I*.82),Tt.updateMatrix(),Ke.setMatrixAt(C++,Tt.matrix);Ke.castShadow=Ke.receiveShadow=!0,Ke.instanceMatrix.needsUpdate=!0,Ke.computeBoundingSphere(),yt.add(Ke),yt.userData.caveDetails={stalactites:8,stalagmites:8,clearCenter:!0};let v=new Be;v.name="cave-evidence-table",yt.add(v),y(v,"#a98961",[0,.75,-2],[2,.12,1.2]);for(let U of[-.75,.75])for(let _ of[-2.45,-1.55])w(v,"#876742",[U,.35,_],[.065,.7,.065]);for(let U of[-2.47,-1.53])y(v,"#876742",[0,.57,U],[1.72,.2,.07]);y(v,"#876742",[0,.56,-1.38],[.72,.27,.08]),M(v,"#394447",[0,.56,-1.32],[.045,.045,.04]),w(v,"#394447",[.72,.86,-2.18],[.17,.1,.17]);let Y=new Ut({color:"#ffe4a8",emissive:"#ff9f45",emissiveIntensity:1.05,roughness:.28,transparent:!0,opacity:.88}),te=M(v,"#ffe4a8",[.72,1.08,-2.18],[.14,.22,.14]);te.material=Y,w(v,"#394447",[.72,1.31,-2.18],[.12,.07,.12]),v.userData.evidenceDetails={legs:4,drawer:!0,lantern:!0,newspaper:!0,hiddenGun:!0},z(v);let se=document.createElement("canvas");se.width=256,se.height=320;let Q=se.getContext("2d");Q.fillStyle="#ddd5bd",Q.fillRect(0,0,256,320),Q.fillStyle="#3a3b32",Q.font="bold 26px serif",Q.fillText("ISLAND DAILY",18,38),Q.fillRect(18,51,220,3);for(let U=0;U<20;U++)Q.fillRect(18,72+U*10,94-U%4*6,2),Q.fillRect(128,72+U*10,104-U%3*8,2);let Ve=new Oi(se);Ve.colorSpace=Yt;let de=new ut(new Dn(.9,1.05),new Ut({map:Ve,side:Ht}));de.name="cave-newspaper",de.rotation.x=-Math.PI/2,de.position.set(0,.83,-2),yt.add(de);function ve(U){let _=new Be;U.add(_),y(_,"#333a3d",[0,0,.06],[.12,.12,.34]);let I=y(_,"#695646",[0,-.11,-.03],[.1,.23,.13]);return I.rotation.x=-.22,y(_,"#8b9294",[0,.08,.03],[.11,.035,.3]),_}let ze=ve(yt);ze.name="cave-hidden-gun",ze.position.set(0,.87,-2),ze.rotation.y=Math.PI/2;let oe=Me("estate",11,15),me=new Be;me.name="estate-fixtures",oe.add(me),y(me,"#816947",[0,.42,-4.6],[2.6,.85,.9]),y(me,"#decc9f",[0,.05,1],[3,.025,10]);for(let U=0;U<6;U++)y(me,"#777a6b",[3.5,.06*U,-4.75+U*.28],[1.7,.12,.65]);me.userData.batchDetails={sourceMeshes:8,renderMeshes:3},z(me);let De=new Be;De.name="estate-interior-details",oe.add(De);let Oe=["#6f443d","#40626a","#718052"];for(let[U,_]of[-2.7,0,2.7].entries())y(De,"#a68854",[_,1.9,-6.31],[1.42,1.22,.08]),y(De,Oe[U],[_,1.9,-6.25],[1.12,.92,.045]);y(De,"#a68854",[0,.93,-6.29],[8.7,.08,.08]);for(let U of[-4.35,4.35]){y(De,"#394447",[U,2.02,-6.24],[.1,.32,.1]);let _=M(De,"#ffe4a8",[U,1.79,-6.15],[.14,.19,.11]);_.material=L}y(De,"#394447",[0,.86,-4.58],[1.12,.025,.52]);for(let U of[-.52,0,.52])y(De,"#d8d2c3",[U,.88,-4.57],[.4,.012,.3]);w(De,"#394447",[.93,1.08,-4.58],[.035,.42,.035]);let xe=M(De,"#ffe4a8",[.93,1.34,-4.58],[.18,.16,.18]);xe.material=L,oe.userData.interiorDetails={portraits:3,sconces:2,documents:3,deskLamp:!0},z(De);let je=new ut(new vi(.13,.036,8,16),new Ut({color:"#f8ce60",emissive:"#8c6322",emissiveIntensity:.5}));je.position.set(0,.88,-3),oe.add(je),y(je,"#debb63",[0,-.2,0],[.065,.32,.065]);let V=Me("cellar",11,15),ce=[],fe=new Be;fe.name="cellar-static",V.add(fe);let Ie=Object.entries(Ye);for(let U of Un){let _=new Be;_.name="cell-door-"+U.id,_.position.set(U.x/at,0,-1.5),V.add(_),ce[U.id]=_;for(let K=-2;K<=2;K++)w(_,"#475759",[K*.32,1.3,0],[.025,2.6,.025]);for(let K of[.1,2.5])y(_,"#475759",[0,K,0],[1.65,.055,.055]);for(let K of[.45,2.15])w(_,"#394447",[-.78,K,.07],[.045,.12,.045]);p(_,m("cell-padlock",()=>new vi(.09,.022,6,12)),x("#a68854"),[.61,1.42,.07]),y(_,"#a68854",[.61,1.27,.07],[.18,.2,.08]),z(_);let I=U.x/at,H=["#738b90","#9b796d"][U.id%2];y(fe,"#a98961",[I,.18,-4.8],[1.55,.36,.8]),y(fe,"#e2dbc7",[I,.4,-4.8],[1.5,.1,.8]),y(fe,H,[I,.47,-4.65],[1.42,.045,.48]),y(fe,"#d8d2c3",[I,.5,-5.08],[.64,.1,.24])}for(let U of[-3.8,0,3.8]){y(fe,"#394447",[U,2.54,-6.28],[.36,.15,.1]);let _=M(fe,"#ffe4a8",[U,2.34,-6.2],[.15,.2,.11]);_.material=L}V.userData.cellarDetails={cells:5,hinges:10,padlocks:5,lamps:3,bedding:5},z(fe);function ie(U,_,I){let H=U.hairStyles[_],K=new Set;return H.name=`${I}-hair-${_}`,H.visible=!0,H.traverse(ae=>{ae.isMesh&&K.add(ae)}),U.hairStyles.forEach((ae,le)=>{le!==_&&ae.removeFromParent()}),U.hairStyles=[H],U.hairParts=U.hairParts.filter(ae=>K.has(ae)),U.spear.removeFromParent(),U.raft.removeFromParent(),Object.values(U.props).forEach(ae=>ae.removeFromParent()),U.spear=U.raft=null,U.props={},U.root.userData.renderProfile={hairVariants:1,unusedToolMeshes:0},T(U,I),U}let ee=ie(t({shirt:"#577c87",skin:"#ddb08c",hair:"#40362f"},"player",P),0,"campaign-player");ee.root.name="campaign-player",c.add(ee.root);let Ne=new Map,Ze=new Map,Mt=new Uint8Array(Un.length),ct=Un.map(()=>({x:0,z:0})),un={swing:0,step:0,bounce:0},yn={gate:{shirt:"#526252",skin:"#c29574",hair:"#302e28",style:0},patrol:{shirt:"#59665a",skin:"#a96f55",hair:"#211f1e",style:1},hall:{shirt:"#4b5958",skin:"#d1a17d",hair:"#5b4032",style:2},boss:{shirt:"#34383a",skin:"#b67d60",hair:"#251f1c",style:1}};for(let U of e().guards){let _=yn[U.id],I=ie(t(_,"guard",P),_.style,"campaign-guard-"+U.id);if(I.root.name="campaign-guard-"+U.id,I.root.userData.guardProfile={boss:U.id==="boss",style:_.style},U.id==="boss"){let H=new Be;H.name="campaign-boss-insignia",I.hips.add(H);for(let ae of[-1,1])y(H,"#d2aa58",[ae*.2,.56,.02],[.12,.035,.18]);let K=y(H,"#8f2f2d",[0,.34,.15],[.055,.52,.025]);K.rotation.z=-.48,I.root.userData.guardProfile.insignia=!0}c.add(I.root),ve(I.arms[1].forearm).position.set(0,-.24,.14),Ne.set(U.id,I)}let ri=[{shirt:"#8da4b1",skin:"#c99370",hair:"#302d2a",style:0,scale:1.02},{shirt:"#b78876",skin:"#e1b894",hair:"#6a4938",style:1,scale:.96},{shirt:"#9caa8c",skin:"#b98264",hair:"#2f2927",style:2,scale:1},{shirt:"#c3b487",skin:"#dca984",hair:"#704936",style:1,scale:.72},{shirt:"#92b2b6",skin:"#e4bb96",hair:"#3f302b",style:2,scale:.76}];for(let U of Un){let _=ri[U.id],I=ie(t(_,"resident",P),_.style,"campaign-prisoner-"+U.id);I.root.name="campaign-prisoner-"+U.id,I.root.scale.setScalar(_.scale),I.root.userData.residentProfile={child:U.child,style:_.style,scale:_.scale},c.add(I.root),Ze.set(U.id,I)}let an=new Be;l.add(an),ve(an).position.set(.26,-.23,-.48);let vr=M(an,"#ddb08c",[.24,-.32,-.4],[.065,.085,.08]),Mr=w(an,"#577c87",[.22,-.4,-.3],[.085,.24,.085]);Mr.rotation.x=-.5;let dn=new ut(new vi(.42,.035,8,32),new Sn({color:"#f3d48a"}));dn.rotation.x=-Math.PI/2,c.add(dn);let si=new rt(new Float32Array(6),3),Si=new tr(new Pt().setAttribute("position",si),new zi({color:"#ffe8ad"}));Si.frustumCulled=!1,c.add(Si);let An=new lr,$n=new B,wi={position:new B,target:new B},Ti=[],Ei={position:new B},Ai=0,Jt={x:0,z:0,surface:0,yaw:0,pitch:0,mode:"first",distance:4.6},ai=U=>U.distance>.2,Ci={height:25},S={},q={},j={},$=[],X=new Map,he=new Map;X.misses=0;let _e=0,Ae=0,Se=0,Ge=0,Je=.05,Pe="first",ht=0,mt=!0,bt=!1,xt=null,dt,We=0,Nt=0,it=!1,Wt={},Cn={},on={},oi={},Ft=-1/0,tn=0,nn=e(),Xt=vl(nn).target;Xt&&(Ge=Math.atan2(nn.p.x-Xt.x,nn.p.z-Xt.z));function qt(U,_,I,H,K,ae,le=!1){We++;let ge=U.root.userData.campaignPoseState||(U.root.userData.campaignPoseState={});if(!Wx(ge,_,I,H,K,le))return;Nt++,U.root.position.set(_.x/at,I,_.z/at),U.root.rotation.set(0,0,0),U.rig.rotation.y=H;let qe=Hx(un,ae,K);for(let ke of U.legs){let nt=(ke.side<0?-qe.swing:qe.swing)*qe.step;ke.thigh.rotation.x=nt,ke.calf.rotation.x=Math.max(0,-nt),ke.shoe.rotation.x=-ke.calf.rotation.x*.6}for(let ke of U.arms)ke.arm.rotation.x=K?(ke.side<0?qe.swing:-qe.swing)*.25:0,ke.arm.rotation.z=0,ke.forearm.rotation.x=-.18;U.hips.position.y=.87+qe.bounce*.009}function Wi(U){if(!mt||bt)return;let _=e();if(_.paused&&it)return;it=!!_.paused;let I=U/1e3;ht=U,We=0,f.update(),G.material.uniforms.uTime.value=I;let H=_.interior;Fx(Cn,H,A,F,Ie,c,h,u);let K=H?0:oa(X,ee.root,_.p.x,_.p.z,ii);if(ee.root.visible=!_.boat||Pe==="third",!_.boat){let Ee=Nx(c,ee.root);qt(ee,_.p,K,_.heading,_.walking,I,Ee)}ee.rig.visible=Pe==="third",ne.position.set((_.boat?_.p.x:_t[_.boatAt].x)/at,.02,(_.boat?_.p.z:_t[_.boatAt].z)/at),ne.rotation.y=_.boat?_.heading:Math.atan2(_t[_.boatAt].ux,_t[_.boatAt].uz),ne.rotation.z=_.boat?Math.sin(I*2)*.015:0,re.visible=_.boat&&_.walking,_.boat&&ld(ee,ne),de.visible=!_.paper,ze.visible=_.paper&&!_.gun,je.rotation.y=I,zx(on,_.released,Mt,ce);let ae=!1,le=!1;Se=0;for(let Ee of _.guards){Ee.id==="boss"&&(le=Ee.hp<=0);let ft=Ne.get(Ee.id),Vt=Ee.area===H&&!_.boat&&(!Ee.area||_.island==="fortress");if(ft.root.visible=Vt,!Vt)continue;let Gt=he.get(Ee.id);Gt||(Gt={},he.set(Ee.id,Gt));let zt=Xx(Gt,Ee,Ee.hp>0);zt&&Se++,ae||(ae=zt),qt(ft,Ee,Ee.area?0:oa(X,ft,Ee.x,Ee.z,ii),Math.atan2(_.p.x-Ee.x,_.p.z-Ee.z),zt,I,Ee.hp<=0),Ee.hp<=0?(ft.rig.rotation.x=-Math.PI/2,ft.root.position.y+=Ee.area?0:.15,ft.root.scale.setScalar(.8)):(ft.rig.rotation.x=0,ft.arms[1].arm.rotation.x=-1.05,ft.arms[1].forearm.rotation.x=-.35)}je.visible=!_.key&&le,_.released.length&&!_.boarded&&!_.boat&&(H==="estate"||H==="cellar"||_.island==="fortress")&&Vx(ct,Un,_.p,_.heading);for(let Ee of Un){let ft=Ze.get(Ee.id),Vt=!!Mt[Ee.id],Gt=_.boarded?!1:Vt?!_.boat&&(H==="estate"||H==="cellar"||_.island==="fortress"):H==="cellar";if(ft.root.visible=Gt,!Gt)continue;let zt=Vt?ct[Ee.id]:Ee;qt(ft,zt,H?0:oa(X,ft,zt.x,zt.z,ii),_.heading,Vt&&_.walking,I+Ee.id*.18)}Bx(q,_,S,!le)&&_e++;let qe=S.target;Ox(j,_,$)&&Ae++;let ke=j.nearby,nt=ke||qe;dn.visible=!!nt,nt&&dn.position.set(nt.x/at,(H?0:oa(X,dn,nt.x,nt.z,ii))+.08,nt.z/at),dn.scale.setScalar(1+Math.sin(I*3)*.1),an.visible=_.gun&&!_.boat&&Pe==="first",an.position.z=_.shot?.025:0;let Fe=_.boat?.02+ys.eye-1.64:K,Re=_.boat?ys.seatZ:0;Jt.x=_.p.x/at+Math.sin(_.heading)*Re,Jt.z=_.p.z/at+Math.cos(_.heading)*Re,Jt.surface=Fe,Jt.yaw=Ge,Jt.pitch=Je,Jt.mode=Pe,Jt.distance=_.boat?7.5:4.6;let St=ul(Jt,wi);if(H&&Pe==="third"&&(St.position.x=na.clamp(St.position.x,-5.1,5.1),St.position.z=na.clamp(St.position.z,-5,8.1)),!H&&Pe==="third"){let Ee=Ei,ft=St.position,Vt=St.target;if(Ee.ready&&Ee.x===ft.x&&Ee.y===ft.y&&Ee.z===ft.z&&Ee.tx===Vt.x&&Ee.ty===Vt.y&&Ee.tz===Vt.z)St.position.copy(Ee.position);else{Ee.ready=!0,Ee.x=ft.x,Ee.y=ft.y,Ee.z=ft.z,Ee.tx=Vt.x,Ee.ty=Vt.y,Ee.tz=Vt.z,$n.subVectors(ft,Vt);let Gt=$n.length();$n.normalize(),An.set(Vt,$n),An.far=Gt,Ai++;let zt=dl(An,et,!0,Ti).find(ai);zt&&ft.copy(Vt).addScaledVector($n,Math.max(.35,zt.distance-.22)),ft.y=Math.max(ft.y,oa(X,l,ft.x*at,ft.z*at,ii)+.24),Ee.position.copy(ft)}}l.position.copy(St.position),l.lookAt(St.target),W.update(l.position,.5);let wt=!_.paused&&(_.walking||_.boat||ae),vn=kx(Wt,_,wt)||wt&&U-Ft>=1e3/30;s.shadowMap.needsUpdate=vn,vn&&(fl(u,_.p.x/at,_.p.z/at,Ci),Ft=U,tn++),N.update(I,l.position),G.position.copy(l.position),Si.visible=!!_.shot,_.shot&&Gx(si,_.shot.from,_.shot.to,K+1.35),dt!==H&&(dt=H,H?Ge=0:qe&&(Ge=Math.atan2(_.p.x-qe.x,_.p.z-qe.z))),s.render(c,l);let ln=s.getPixelRatio(),Mn=qx(oi,U,ln,o,!_.paused);Mn!==ln&&(s.setPixelRatio(Mn),Rn())}function Rn(){it=!1,l.aspect=innerWidth/innerHeight,l.updateProjectionMatrix(),s.setSize(innerWidth,innerHeight,!1)}function ca(U,_=0){e().paused||(Ge+=U,Je=na.clamp(Je+_,Pe==="first"?-.95:-.05,.75))}n.addEventListener("pointerdown",U=>{e().paused||U.button!==0||(xt={id:U.pointerId,x:U.clientX,y:U.clientY},n.setPointerCapture(U.pointerId))}),n.addEventListener("pointermove",U=>{xt?.id===U.pointerId&&(ca(-(U.clientX-xt.x)*.006,(U.clientY-xt.y)*.005),xt.x=U.clientX,xt.y=U.clientY)});for(let U of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(U,()=>xt=null);return n.addEventListener("webglcontextlost",U=>{U.preventDefault(),bt=!0,mt=!1,i?.()}),{frame:Wi,resize:Rn,orbit:ca,setCamera(U){Pe=U==="first"?"first":"third",Je=Pe==="first"?.05:.22,it=!1},get cameraMode(){return Pe},get enabled(){return mt&&!bt},vector:(U,_)=>({x:U*Math.cos(Ge)+_*Math.sin(Ge),z:-U*Math.sin(Ge)+_*Math.cos(Ge)}),aim:()=>Ge+Math.PI,setEnabled(U){mt=!!U&&!bt,mt&&(it=!1)},stats:()=>({calls:s.info.render.calls,triangles:s.info.render.triangles,pixelRatio:s.getPixelRatio(),eye:l.position.toArray(),camera:Pe,cameraBlockers:et.length,cameraRaycasts:Ai,goalSelections:_e,nearbySelections:Ae,movingGuards:Se,palmBatches:W.treeBatches.length,largestPalmBatch:Math.max(...W.treeBatches.map(U=>U.count)),posedCharacters:We,poseUpdates:Nt,palmLodDistanceChecks:W.treeBatches.length+W.foliageBatches.length,palmTrunkTriangles:W.treeBatches.reduce((U,_)=>U+_.count*_.geometry.index.count/3,0),unshadowedPalmTrunkTriangles:W.treeBatches.filter(U=>!U.receiveShadow).reduce((U,_)=>U+_.count*_.geometry.index.count/3,0),palmCrownTriangles:W.foliageBatches.reduce((U,_)=>U+_.count*_.geometry.index.count/3,0),lowDetailPalmBatches:W.treeBatches.filter(U=>U.userData.lod.level==="low").length,terrainTriangles:D.reduce((U,_)=>U+_.geometry.index.count/3,0),shadowUpdates:tn,terrainHeightSamples:X.misses}),dispose(){s.dispose(),f.dispose();let U=new Set([...g.values(),...W.lodGeometries]),_=new Set(d.values());c.traverse(I=>{if(I.geometry&&U.add(I.geometry),I.material)for(let H of Array.isArray(I.material)?I.material:[I.material])_.add(H)}),U.forEach(I=>I.dispose()),_.forEach(I=>I.dispose()),Ve.dispose()}}}function Ml(n,e){return Math.hypot(n.x-e.x,n.z-e.z)}function Yx(n){return fd({...n,makeHuman:Qc})}var be=80,gd=[[1750,1300,1540,970],[3380,500,520,310],[4100,2400,390,290]],Hi=(n,e,t)=>Math.max(e,Math.min(t,n)),Zx=n=>(n=Hi(n,0,1),n*n*(3-2*n)),Jx=(n,e)=>Math.atan2(Math.sin(e-n),Math.cos(e-n)),$x=Object.freeze({}),pd=Math.cos(1),md=Math.sin(1);function Nn(n,e){let t=n*be,i=e*be,r=-1;for(let[a,o,c,l]of gd)r=Math.max(r,1-Math.hypot((t-a)/c,(i-o)/l));return r<=0?-.32:.015+Zx(r/.17)*(.25+.28*(1+Math.sin(n*.23+1.3)*Math.cos(e*.27))+.12*Math.sin(n*.7)*Math.sin(e*.6))}function xd(n,e,t){return{x:n*Math.cos(t)+e*Math.sin(t),y:-n*Math.sin(t)+e*Math.cos(t)}}function _d(n,e,t=75){let i,r=t*t;for(let s of n||[]){let a=s.x-e.x,o=s.y-e.y,c=a*a+o*o;c<r&&(i=s,r=c)}return i}function yd(n,e,t,i){let r=e&&e.remaining-(i-t);return r>0?(n.kind=e.kind,n.phase=1-r/(Zu[e.kind]||1e3),n):null}function vd(n,e){let t=e*1.3;return n.idleHip=Math.sin(e*1.7),n.idleArmSin=Math.sin(t),n.idleArmCos=Math.cos(t),n}function Md(n,e){let t=e*.7,i=e*.6;return n.xSin=Math.sin(t),n.xCos=Math.cos(t),n.zSin=Math.sin(i),n.zCos=Math.cos(i),n}function bd(n,e){let t=Math.sin(e*6)*.15;return n[0]=t,n[1]=-t,n[2]=t,n[3]=-t,n}function Sd(n,e,t,i,r,s){return n.yawSin=Math.sin(t),n.yawCos=Math.cos(t),i||r?(n.phaseSin=Math.sin(e),n.phaseCos=Math.cos(e)):n.phaseSin=n.phaseCos=0,n.hips=(i?.9:.92)+(i?Math.cos(e*2)*.012:s.idleHip*.004),n}function wd(n,e,t,i=new B){let r=Math.min(240,t*.52),s=e.projectionMatrix.elements[0]*t/2,a=0;for(let o of n){o.userData.signScale||(o.userData.signScale=o.scale.clone()),o.scale.copy(o.userData.signScale),o.getWorldPosition(i);let c=Math.max(.1,i.distanceTo(e.position)),l=o.scale.x*s/c;l>r&&o.scale.multiplyScalar(r/l),a++}return a}function Td(n,e,t={}){let s=Hi(Math.hypot(n,e),.08,.855);return t.hip=-Math.atan2(e,-n)-Math.acos(Hi((.43*.43+s*s-.43*.43)/(2*.43*s),-1,1)),t.knee=Math.PI-Math.acos(Hi((.43*.43+.43*.43-s*s)/(2*.43*.43),-1,1)),t}function Ed(n,e={}){let t=e.shirt||"#4c9cba",i=e.skin||"#dda879",r=e.hair||"#43332b",s=e.style||0;return n.lookShirt===t&&n.lookSkin===i&&n.lookHair===r&&n.lookStyle===s?!1:(n.lookShirt=t,n.lookSkin=i,n.lookHair=r,n.lookStyle=s,!0)}function jc(n){return n?Math.max(...[-1,0,1].flatMap(e=>[-1,0,1].map(t=>{let i=n.point(e*n.width/2,t*n.depth/2);return Nn(i.x/be,i.y/be)}))):0}function Ad(n,e,t){let i=e?.x??null,r=e?.y??null,s=t||0;return n.ready&&n.x===i&&n.y===r&&n.level===s?!1:(n.ready=!0,n.x=i,n.y=r,n.level=s,n.layout=Yu(e,t),n.elevation=jc(n.layout),!0)}function Cd(n,e={}){let t=e.activities||{},i=t.completed||0,r=e.basePos?.x??null,s=e.basePos?.y??null,a=e.baseLevel??null,o=e.campfire??null,c=e.fire?.x??null,l=e.fire?.y??null,h=i>=1,u=i>=3,f=i>=6,d=u&&t.gardenClaimed<i,g=t.raceWon??null;return n.ready&&n.level===a&&n.baseX===r&&n.baseY===s&&n.campfire===o&&n.fireX===c&&n.fireY===l&&n.first===h&&n.garden===u&&n.flag===f&&n.harvest===d&&n.raceWon===g?!1:(n.ready=!0,n.level=a,n.baseX=r,n.baseY=s,n.campfire=o,n.fireX=c,n.fireY=l,n.first=h,n.garden=u,n.flag=f,n.harvest=d,n.raceWon=g,!0)}function Rd(n,e=[]){let t=n.values||(n.values=[]),i=!n.ready||n.count!==e.length,r=0;for(let s of e){let a=s.type??null,o=s.x??null,c=s.y??null,l=!!s.done,h=s.symbol??null,u=s.label??null;t[r]!==a&&(i=!0),t[r++]=a,t[r]!==o&&(i=!0),t[r++]=o,t[r]!==c&&(i=!0),t[r++]=c,t[r]!==l&&(i=!0),t[r++]=l,t[r]!==h&&(i=!0),t[r++]=h,t[r]!==u&&(i=!0),t[r++]=u}return t.length=r,n.ready=!0,n.count=e.length,i}function la(n,e,t=0,i=0){let r=e?.x??null,s=e?.y??null;return n.ready&&n.pointX===r&&n.pointY===s&&n.offsetX===t&&n.offsetZ===i?!1:(n.ready=!0,n.pointX=r,n.pointY=s,n.offsetX=t,n.offsetZ=i,n.valid=r!==null&&s!==null,n.valid&&(n.x=r/be+t,n.z=s/be+i,n.y=Nn(n.x,n.z)),!0)}function Kc(n,e,t,i=jc(t)){let r=Nn(n,e);if(!t)return r;let s=t.floor;if(Math.abs(n*be-s.x)<=s.w/2&&Math.abs(e*be-s.y)<=s.h/2)return Math.max(r,i+.16);let a=n*be-t.center.x,o=e*be-t.center.y,c=a*t.fy-o*t.fx,l=a*t.fx+o*t.fy;return Math.abs(c)<t.door/2&&l>t.depth/2&&l<t.depth/2+64?r+(Math.max(r,i+.16)-r)*(1-(l-t.depth/2)/64):r}function Id(n,e,t={}){let i=(f,d,g,x,m)=>{let p=new ut(m,new Ut({color:d}));return p.position.set(...g),p.scale.set(...x),f.add(p),p},r=t.cube||((f,d,g,x)=>i(f,d,g,x,new cn(1,1,1))),s=t.tube||((f,d,g,x)=>i(f,d,g,x,new kt(1,1,1,10))),a=new Be,o=n.width/be,c=n.depth/be,l=n.wallHeight/be,h=n.roofRidge/be,u=n.door/be;a.name="base",a.position.set(n.center.x/be,e,n.center.y/be),a.rotation.y=n.yaw,r(a,"#a68854",[0,.08,0],[o,.16,c]).name="floor";for(let f of[-o/2+.1,o/2-.1])for(let d of[-c/2+.1,c/2-.1])s(a,"#876742",[f,l/2,d],[.075,l,.075]).name="post";for(let f of[-1,1]){let d=r(a,"#ba7655",[f*o/4,(l+h)/2,0],[Math.hypot(o/2+.2,h-l),.1,c+.36]);d.rotation.z=-f*Math.atan2(h-l,o/2+.2),d.name="roof"}for(let f of n.walls){let d=f.x-n.center.x,g=f.y-n.center.y,x=(d*n.fy-g*n.fx)/be,m=(d*n.fx+g*n.fy)/be;r(a,"#e2dbc7",[x,l/2,m],[n.fy?f.w/be:f.h/be,l,n.fy?f.h/be:f.w/be]).name="wall"}if(n.walls.length>=5){let f=n.doorHeight/be;r(a,"#845f3f",[0,(l+f)/2,c/2],[u,l-f,.125]).name="lintel"}for(let f of n.beds){let d=f.x-n.center.x,g=f.y-n.center.y,x=(d*n.fy-g*n.fx)/be,m=(d*n.fx+g*n.fy)/be;r(a,"#7d654b",[x,.17,m],[.65,.34,1.125]).name="bed",r(a,"#cec6a0",[x,.38,m],[.65,.14,1.125]),r(a,"#ede3bd",[x,.49,m-.35],[.5,.09,.26])}return a}function Pd(n,e,{cube:t,tube:i,ell:r}){if(n==="gather"&&(i(e,"#8c6944",[0,-.12,.15],[.025,.48,.025]),t(e,"#8e9891",[0,.1,.15],[.27,.1,.075])),n==="fish"){let s=i(e,"#b2915b",[0,.22,.25],[.014,1.25,.014]);s.rotation.x=-.6;let a=i(e,"#d0e6df",[0,.37,.75],[.003,.62,.003]);a.rotation.x=.6}if(n==="cook"){let s=i(e,"#80613d",[0,-.12,.18],[.016,.5,.016]);s.rotation.x=-.6,r(e,"#bb9457",[0,-.26,.3],[.07,.04,.14])}}function Qc(n={},e="player",t={}){let i=new Map,r=new Map,s=t.mat||(R=>(i.has(R)||i.set(R,new Ut({color:R})),i.get(R))),a=t.geo||((R,N)=>(r.has(R)||r.set(R,N()),r.get(R))),o=t.mesh||((R,N,G,W=[0,0,0],k=[1,1,1])=>{let ne=new ut(N,G);return ne.position.set(...W),ne.scale.set(...k),R.add(ne),ne}),c=t.ell||((R,N,G,W)=>o(R,a("ball",()=>new Tn(1,14,10)),s(N),G,W)),l=t.cube||((R,N,G,W)=>o(R,a("box",()=>new cn(1,1,1)),s(N),G,W)),h=t.tube||((R,N,G,W)=>o(R,a("cyl",()=>new kt(1,1,1,10)),s(N),G,W)),u=new Be,f=new Be;u.add(f);let d=n.skin||"#dda879",g=n.hair||"#43332b",x=n.shirt||"#4c9cba",m=new Be;m.position.y=.87,f.add(m),c(m,"#3f4d4f",[0,.05,0],[.22,.17,.13]);let p=a("human-torso",()=>new Xs([new Xe(.16,.13),new Xe(.205,.2),new Xe(.215,.38),new Xe(.25,.49),new Xe(.26,.52),new Xe(.19,.57),new Xe(.09,.64)],18));o(m,p,s(x),[0,0,0],[1,1,.66]);for(let R of[-1,1]){let N=l(m,x,[R*.065,.6,.071],[.085,.075,.024]);N.rotation.z=-R*.3,l(m,x,[R*.11,.37,.142],[.105,.09,.022])}for(let R=0;R<4;R++)c(m,"#d7d5c2",[0,.24+R*.075,.15],[.009,.01,.005]);e==="guard"&&l(m,"#39483f",[0,.35,.11],[.34,.36,.09]),l(m,"#3b4c48",[0,.135,-.01],[.4,.045,.255]),h(m,d,[0,.64,0],[.064,.13,.064]);let y=new Be;y.position.y=.79,m.add(y),c(y,d,[0,0,0],[.135,.175,.133]),c(y,d,[-.137,-.005,0],[.025,.048,.025]),c(y,d,[.137,-.005,0],[.025,.048,.025]),c(y,d,[0,-.015,.136],[.026,.033,.036]);for(let R of[-1,1])c(y,"#f6f3df",[R*.052,.02,.115],[.03,.017,.014]),c(y,"#31433e",[R*.053,.02,.128],[.012,.013,.007]),l(y,g,[R*.052,.061,.11],[.062,.01,.014]);l(y,"#af735b",[0,-.071,.117],[.051,.009,.012]);let w=a("hair",()=>new Tn(1,16,10,0,Math.PI*2,0,Math.PI*.56));o(y,w,s(e==="nela"?"#8d4931":g),[0,.015,-.015],[.145,.18,.143]);let M=[new Be,new Be,new Be];M.forEach(R=>y.add(R));let P=y.children.find(R=>R.isMesh&&R.geometry===w);y.remove(P),M[0].add(P),o(M[1],w,s(g),[0,.015,-.015],[.145,.18,.143]),c(M[1],g,[0,-.04,-.17],[.072,.14,.08]);for(let R=0;R<12;R++){let N=R*Math.PI*2/12;c(M[2],g,[Math.sin(N)*.1,.1+R%2*.018,Math.cos(N)*.1-.015],[.066,.067,.066])}if(c(M[2],g,[0,.15,-.015],[.09,.054,.09]),e==="nela"&&c(y,"#8d4931",[0,-.045,-.145],[.125,.21,.07]),M.forEach((R,N)=>R.visible=N===(n.style||0)),e==="leon")h(y,"#c5a775",[0,.15,0],[.16,.12,.16]),h(y,"#c5a775",[0,.095,0],[.22,.028,.22]),l(m,"#e4cda1",[0,.23,.145],[.33,.42,.025]);else if(e==="player"){c(m,"#5d735b",[0,.36,-.17],[.18,.22,.09]);for(let R of[-1,1])l(m,"#b6caa4",[R*.17,.38,-.04],[.034,.35,.029])}let A=[],F=[];for(let R of[-1,1]){let N=new Be;N.position.set(R*.27,.54,0),m.add(N);let G=c(N,x,[-R*.018,-.025,0],[.105,.13,.11]);G.name="human-shoulder",o(N,a("human-upper-arm",()=>new kt(.068,.086,.19,12)),s(x),[0,-.105,0]),o(N,a("human-lower-upper-arm",()=>new kt(.055,.064,.15,12)),s(d),[0,-.24,0]);let W=new Be;W.position.y=-.31,N.add(W);let k=c(W,d,[0,0,0],[.061,.063,.061]);k.name="human-elbow",o(W,a("human-forearm",()=>new kt(.057,.04,.26,12)),s(d),[0,-.13,0]),c(W,d,[0,-.28,0],[.06,.082,.046]),A.push({arm:N,forearm:W,side:R});let ne=new Be;ne.position.set(R*.115,0,0),m.add(ne),o(ne,a("human-thigh",()=>new kt(.092,.108,.42,12)),s("#52625f"),[0,-.21,0]);let re=new Be;re.position.y=-.43,ne.add(re);let ue=c(re,"#52625f",[0,0,.014],[.079,.074,.075]);ue.name="human-knee",o(re,a("human-calf",()=>new kt(.069,.046,.36,12)),s("#52625f"),[0,-.18,0]);let Ce=c(re,"#52625f",[0,-.36,0],[.052,.06,.052]);Ce.name="human-ankle";let He=c(re,"#4b3b2e",[0,-.395,.055],[.075,.052,.14]);F.push({thigh:ne,calf:re,shoe:He,side:R})}let z=new Be;h(z,"#8c6944",[0,.56,0],[.018,1.75,.018]),c(z,"#dad9c5",[0,1.45,0],[.045,.15,.03]),z.position.set(.35,.2,.08),f.add(z),z.visible=!1;let T={};for(let R of["gather","fish","cook"]){let N=new Be;Pd(R,N,{cube:l,tube:h,ell:c}),N.position.set(0,-.28,0),A[1].forearm.add(N),N.visible=!1,T[R]=N}let b=new Be;u.add(b);for(let R=0;R<5;R++){let N=h(b,"#a17d48",[(R-2)*.25,.08,0],[.115,1.7,.115]);N.rotation.x=Math.PI/2}for(let R of[-.5,.5])l(b,"#6e5937",[0,.19,R],[1.24,.05,.1]);b.visible=!1;let E=[],O=[],D=[];return f.traverse(R=>{R.isMesh&&(R.material===s(x)&&E.push(R),R.material===s(d)&&O.push(R),R.material===s(g)&&D.push(R))}),{root:u,rig:f,hips:m,head:y,arms:A,legs:F,spear:z,raft:b,shirtParts:E,skinParts:O,hairParts:D,hairStyles:M,props:T,yaw:0,lastX:null,lastZ:null,phase:0}}function Dd(n,e){let t=e&&Ju(e.kind,e.phase);n.rig.rotation.x=t?.bend||0;for(let[i,r]of Object.entries(n.props))r.visible=!!t&&e.kind===i;if(t)for(let i of n.arms)i.arm.rotation.x=i.side<0?t.left:t.right,i.forearm.rotation.x=-.25,i.arm.rotation.z=-i.side*.08+((i.side>0||e.kind==="cheer")&&t.wave||0)}function Ld(n,e,t,i={}){let r=n.phase||0,s=e*.65+r,a=Math.sin(s),o=Math.cos(s),c=n.x+a*14,l=n.y+o*14;return t(c,l)?(i.x=c/be,i.z=l/be,i.y=.055+Math.sin(e*3+r)*.008,i.yaw=Math.atan2(o,-a),i.yawSin=o,i.yawCos=-a,i):null}function bl(n,e,t,i,r,s,a,o,c=0){return n.position.set(e.x+e.yawSin*r+e.yawCos*t,e.y+i,e.z+e.yawCos*r-e.yawSin*t),n.rotation.set(c,e.yaw,0),n.scale.set(s,a,o),n.updateMatrix(),n}function Kx({canvas:n,terrain:e,getState:t,onLost:i}){let r=new us({canvas:n,antialias:!0,powerPreference:"high-performance"}),s=innerWidth<=700;r.setPixelRatio(Math.min(devicePixelRatio||1,s?1.25:1.6)),r.setSize(innerWidth,innerHeight,!1),r.outputColorSpace=Yt,r.toneMapping=is,r.toneMappingExposure=.94,r.shadowMap.enabled=!0,r.shadowMap.type=ns;let a=new er;a.background=new tt("#c5dbe5"),a.fog=new Qi("#c5dbe5",70,240);let o=new Kt(72,innerWidth/innerHeight,.04,350);a.add(o);let c=new sr("#c9e3ff","#71694d",1.85);a.add(c);let l=new or("#fff0d2",3.1);l.castShadow=!0,l.shadow.mapSize.set(s?1024:2048,s?1024:2048),l.shadow.camera.left=-16,l.shadow.camera.right=16,l.shadow.camera.top=16,l.shadow.camera.bottom=-16,l.shadow.camera.near=.5,l.shadow.camera.far=65,l.shadow.bias=-12e-5,l.shadow.normalBias=.012,a.add(l,l.target);let h=hl(r),u=new Map,f=new Map;function d(_,I={}){if(!Object.keys(I).length){let K=h.forColor(_);if(K)return K}let H=_+JSON.stringify(I);return u.has(H)||u.set(H,new Ut({color:_,roughness:.86,...I})),u.get(H)}function g(_,I){return f.has(_)||f.set(_,I()),f.get(_)}function x(){return g("ball",()=>new Tn(1,14,10))}function m(){return g("box",()=>new cn(1,1,1))}function p(){return g("cyl",()=>new kt(1,1,1,10))}function y(_,I,H,K=[0,0,0],ae=[1,1,1],le=!0){let ge=new ut(I,H);return ge.position.set(...K),ge.scale.set(...ae),ge.castShadow=le,ge.receiveShadow=!0,_.add(ge),ge}function w(_,I,H,K){return y(_,x(),d(I),H,K)}function M(_,I,H,K){return y(_,m(),d(I),H,K)}function P(_,I,H,K){return y(_,p(),d(I),H,K)}let A=new Ct,F=new Dn(4600/be,2900/be,230,145);F.rotateX(-Math.PI/2),F.translate(2300/be,0,1450/be);let z=F.attributes.position;for(let _=0;_<z.count;_++)z.setY(_,Nn(z.getX(_),z.getZ(_)));F.computeVertexNormals();let T=$u(e),b=new Oi(T);b.anisotropy=Math.min(4,r.capabilities.getMaxAnisotropy());let E=h.ground(b),O=new ut(F,E);O.receiveShadow=!0,a.add(O);let D=ed({segments:s?24:48}),R=40;D.scale.set(1/R,1,1/R),D.position.x=6500/be;for(let _ of D.children)_.material.dispose(),_.material=gl(h,R),_.geometry.setAttribute("color",new rt(new Float32Array(_.geometry.attributes.position.count*3).fill(1),3));let N=new Be;N.scale.set(R,1,R),D.add(N);let G=(_,I)=>{let H=Qu(_,I);return H?gr(H,_,I):-.32};xl(N,Jn,{scale:R,height:G,surfaces:h,small:s,clear:(_,I,H)=>xr({x:I,z:H},_.id)||_.id==="home"&&(Math.abs(H-40)<55||Math.abs(I-23)<45)}),_l(N,{scale:R,height:G,surfaces:h,helpers:{cube:M,tube:P,ell:w}}),a.add(D);let W=Ku(a,Nn,be,T,s),k=pl([...gd.map(([_,I,H,K])=>[_/be,I/be,H/be,K/be]),...Jn.map(_=>[D.position.x+_.x/R,_.z/R,_.radius*.955/R,_.radius*.955/R])]);a.add(k.mesh);let ne=ml(320);a.add(ne);function re(){let _=[],I=[],H=[],K=(le,ge,qe,ke)=>{let nt=ge*2.05,Fe=Math.sin(ge*Math.PI)*.46-ge*ge*.8;return[Math.sin(le)*nt+Math.cos(le)*ke*qe,Fe-ke*.22,Math.cos(le)*nt-Math.sin(le)*ke*qe]};for(let le=0;le<11;le++){let ge=le*Math.PI*2/11;for(let qe=1;qe<17;qe++)for(let ke of[-1,1]){let nt=qe/18,Fe=Math.sin(nt*Math.PI)*.42,Re=_.length/3;_.push(...K(ge,nt-.023,ke,.015),...K(ge,nt-.085,ke,Fe),...K(ge,nt+.038,ke,Fe*.88),...K(ge,nt+.025,ke,.015)),H.push(nt,0,nt,.9,nt+.03,1,nt+.03,0),I.push(Re,Re+1,Re+2,Re,Re+2,Re+3)}}let ae=new Pt;return ae.setAttribute("position",new rt(_,3)),ae.setAttribute("uv",new rt(H,2)),ae.setIndex(I),ae.computeVertexNormals(),ae}let ue=new kt(.085,.16,4.35,14,12);ue.translate(0,2.175,0);for(let _=0;_<ue.attributes.position.count;_++){let I=ue.attributes.position;I.setX(_,I.getX(_)+.16*(I.getY(_)/4.35)**2)}ue.computeVertexNormals();let Ce=d("#9d7750",{bumpMap:h.textures.get("rock"),bumpScale:.025});Ce.onBeforeCompile=_=>{_.vertexShader=_.vertexShader.replace("#include <common>",`#include <common>
varying float vTrunkY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vTrunkY=position.y;`),_.fragmentShader=_.fragmentShader.replace("#include <common>",`#include <common>
varying float vTrunkY;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=.80+.20*smoothstep(.1,.25,fract(vTrunkY*7.));`)};let He=re(),lt=h.surface("leaf","#ffffff",1,.018).clone();lt.side=Ht;let $e={value:0};lt.onBeforeCompile=_=>{_.uniforms.uWind=$e,_.vertexShader=_.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.y+=sin(uWind+position.x*2.0+position.z)*length(position.xz)*.018;`)};let Z={tree:new Rt(ue,Ce,400),leaves:new Rt(He,lt,400),rock:new Rt(new nr(1,2),d("#92968b"),400),food:new Rt(x(),d("#7a5638"),400),shell:new Rt(new Tn(1,12,6,0,Math.PI),d("#f1d0b7"),400)};for(let _ of Object.values(Z))_.count=0,_.castShadow=!0,_.receiveShadow=!0,_.frustumCulled=!1,a.add(_);let J=-1,pe=[],we=0,Te={xSin:0,xCos:1,zSin:0,zCos:1};function Qe(_,I,H){if(H!==J){let ae={tree:0,rock:0,food:0,shell:0};pe=[];for(let le of _){let ge=le.x/be,qe=le.y/be,ke=Nn(ge,qe),nt=le.phase||0;if(le.t==="tree"){let Fe=Math.sin(nt),Re=Math.cos(nt),St=.84+.17*Math.sin(le.x*.033+le.y*.027),wt=1.35+.28*Re;A.position.set(ge,ke,qe),A.rotation.set(.03*Fe,nt,.04*Re),A.scale.set(St,wt,St),A.updateMatrix(),Z.tree.setMatrixAt(ae.tree++,A.matrix),pe.push({x:ge+.16*St*Re,y:ke+4.3*wt,z:qe-.16*St*Fe,p:nt,size:St,phaseSin:Fe,phaseCos:Re})}else Z[le.t]&&(A.position.set(ge,ke+(le.t==="rock"?.23:le.t==="food"?.13:.025),qe),A.rotation.set(0,nt,0),A.scale.set(...le.t==="rock"?[.34+.18*Math.abs(Math.sin(nt)),.3,.4]:le.t==="food"?[.15,.13,.15]:[.12,.04,.14]),A.updateMatrix(),Z[le.t].setMatrixAt(ae[le.t]++,A.matrix))}for(let le of["tree","rock","food","shell"])Z[le].count=ae[le],Z[le].instanceMatrix.needsUpdate=!0;J=H,we++}Md(Te,I);let K=0;for(let ae of pe)A.position.set(ae.x,ae.y,ae.z),A.rotation.set((Te.xSin*ae.phaseCos+Te.xCos*ae.phaseSin)*.025,ae.p,(Te.zCos*ae.phaseCos-Te.zSin*ae.phaseSin)*.025),A.scale.set(ae.size,ae.size,ae.size),A.updateMatrix(),Z.leaves.setMatrixAt(K++,A.matrix);Z.leaves.count=K,Z.leaves.instanceMatrix.needsUpdate=!0}let Le=new Set,L=new B;function vt(_,I="#ffe9b5"){let H=document.createElement("canvas");H.width=512,H.height=96;let K=H.getContext("2d");K.fillStyle="#123e43",K.beginPath(),K.roundRect(6,10,500,76,25),K.fill(),K.fillStyle=I,K.font="700 29px system-ui",K.textAlign="center",K.textBaseline="middle",K.fillText(String(_).slice(0,45),256,48,480);let ae=new Oi(H);ae.colorSpace=Yt;let le=new Gs(new Kr({map:ae,depthTest:!0,transparent:!0}));return le.scale.set(2.45,.46,1),le.position.y=2.32,Le.add(le),le}let et=["#4c9cba","#df8168","#9974c7","#76b677"];function Ye(_={},I="player",H=""){let K=Qc(_,I,{ell:w,cube:M,tube:P,mesh:y,mat:d,geo:g});return a.add(K.root),K.name=H,K.tag=null,H&&(K.tag=vt(H,_.shirt),K.root.add(K.tag)),K}let Me=Ye(cl()),yt=new Map,Ue=Ye({skin:"#d1a074",shirt:"#b49966"},"leon","LEON \xB7 HANDEL"),Ke=Ye({skin:"#edc39a",shirt:"#609991"},"nela","NELA \xB7 ZADANIA");function Tt(_,I,H){!I||I===_.name||(_.tag&&(Le.delete(_.tag),_.root.remove(_.tag),_.tag.material.map.dispose(),_.tag.material.dispose()),_.name=I,_.tag=vt(I,H),_.root.add(_.tag))}function Ot(_,I){if(Ed(_,I)){for(let H of _.shirtParts)H.material=d(_.lookShirt);for(let H of _.skinParts)H.material=d(_.lookSkin);for(let H of _.hairParts)H.material=d(_.lookHair);_.hairStyles.forEach((H,K)=>H.visible=K===_.lookStyle)}}let C=null,v=0,Y={},te={idleHip:0,idleArmSin:0,idleArmCos:0},se={yawSin:0,yawCos:1,phaseSin:0,phaseCos:1},Q={hip:0,knee:0},Ve={x:0,z:0,y:0,yaw:0,yawSin:0,yawCos:1};function de(_,I,H,K,ae,le,ge,qe,ke=!1,nt=null,Fe=!1,Re=!1){let St=I.x/be,wt=I.y/be,vn=qe(I.x,I.y),ln=vn?0:Kc(St,wt,C,v);_.root.position.set(St,ln+(vn?ke?.18:-.95:0),wt),_.yaw+=Jx(_.yaw,H)*Math.min(1,le*12),_.rig.rotation.y=_.yaw;let Mn=K&&ge>.05;_.phase+=Mn?le*(ge>4?10:7):0;let Ee=Mn?ge>4?.31:.22:0,ft=_.phase,Vt=vn&&!ke,Gt=Sd(se,ft,_.yaw,Mn,Vt,te);_.hips.position.y=Gt.hips;for(let zt of _.legs){let Ud=zt.side<0?-Gt.phaseSin:Gt.phaseSin,Nd=zt.side<0?-Gt.phaseCos:Gt.phaseCos,Sl=Ud*Ee,Fd=Mn?Math.max(0,Nd)*.105:0,zd=St+Gt.yawCos*zt.side*.115+Gt.yawSin*Sl,Od=wt-Gt.yawSin*zt.side*.115+Gt.yawCos*Sl,Bd=vn?0:Kc(zd,Od,C,v)-ln,ha=Td(-_.hips.position.y+.07+Bd+Fd,Sl,Q);zt.thigh.rotation.x=ha.hip,zt.calf.rotation.x=ha.knee,zt.shoe.rotation.x=-ha.hip-ha.knee}for(let zt of _.arms)zt.arm.rotation.x=Mn?(zt.side<0?Gt.phaseSin:-Gt.phaseSin)*.45:(te.idleArmSin*pd+te.idleArmCos*zt.side*md)*.025,zt.arm.rotation.z=-zt.side*.07,zt.forearm.rotation.x=Mn?-.22:-.08,Vt&&(zt.arm.rotation.x=-Math.PI/2+(Gt.phaseSin*pd+Gt.phaseCos*zt.side*md)*.35,zt.forearm.rotation.x=-.28);Dd(_,nt),_.raft.visible=!!(vn&&ke),_.raft.rotation.y=_.yaw,_.spear.visible=!!Fe&&!vn&&!nt,Re&&(_.arms[0].arm.rotation.x=-1,_.arms[0].forearm.rotation.x=-1),_.tag&&(_.tag.visible=Math.hypot(St-Me.root.position.x,wt-Me.root.position.z)<13),_.lastX=St,_.lastZ=wt}let ve=new Be;a.add(ve);for(let _ of[-.55,.55])for(let I of[-.27,.27])P(ve,"#866642",[_,1.24,I],[.038,2.48,.038]);M(ve,"#a7c4b7",[0,.34,0],[1.24,.68,.67]),M(ve,"#a98961",[0,.69,0],[1.24,.09,.67]);for(let _ of[-1,1]){let I=M(ve,"#ba7655",[_*.39,2.63,0],[.9,.07,1.14]);I.rotation.z=-_*.34}let ze=P(ve,"#ba7655",[0,2.79,0],[.055,1.18,.055]);ze.rotation.x=Math.PI/2;for(let _ of[-.5,.5])M(ve,"#e2dbc7",[0,2.4,_],[1.7,.1,.07]);for(let _=0;_<5;_++)M(ve,"#a98961",[(_-2)*.24,.32,.344],[.21,.53,.025]);for(let _=0;_<4;_++)w(ve,"#b1b967",[(_-1.5)*.19,.78,0],[.09,.08,.08]);let oe=new Be;a.add(oe),M(oe,"#765734",[0,.18,0],[.56,.36,.4]),M(oe,"#9a743e",[0,.39,0],[.6,.1,.42]);for(let _ of[-.19,.19])M(oe,"#d5b15a",[_,.2,.215],[.045,.35,.026]);M(oe,"#ecd178",[0,.32,.22],[.08,.09,.03]);let me=new ut(new ir(.24,.29,32),new Sn({color:"#ffe087",transparent:!0,opacity:.8,side:Ht,depthWrite:!1}));me.rotation.x=-Math.PI/2,a.add(me);let De={},Oe={},xe={},je={},V={root:new Be,tag:null,name:null};a.add(V.root),V.root.position.set(ra.x/be,Nn(ra.x/be,ra.y/be),ra.y/be),P(V.root,"#786040",[0,.95,0],[.12,1.9,.12]),M(V.root,"#234f58",[0,1.65,0],[1.55,.55,.1]);let ce=new Be;a.add(ce);let fe=new ut(new ir(.93,1.06,40),new Sn({color:"#54e4ef",transparent:!0,opacity:.85,side:Ht,depthWrite:!1}));fe.rotation.x=-Math.PI/2,fe.position.y=.04,ce.add(fe);let Ie=y(ce,new kt(.035,.035,1,8),new Sn({color:"#76eff7",transparent:!0,opacity:.5}),[0,1.25,0],[1,2.5,1],!1),ie=null,ee=0,Ne={},Ze=new Be,Mt=null,ct=null,un=[];a.add(Ze);function yn(_){let I=_.activities?.completed||0,H=I>=3&&_.activities.gardenClaimed<I;if(Cd(Ne,_)){ct&&(ct.geometry.dispose(),ct.material.dispose());for(let K of un)K.dispose();if(un=[],a.remove(Ze),Ze=new Be,a.add(Ze),ct=null,Mt=null,_.basePos&&_.baseLevel){let K=C,ae=ju(Id(K,v,{cube:M,tube:P}),K,{cube:M,tube:P},h);if(Ze.add(ae),ae.traverse(le=>{["roof","wall","lintel"].includes(le.name)&&(le.material=le.material.clone(),le.material.transparent=!0,un.push(le.material))}),I>=1)for(let le of[-1,1]){let ge=w(ae,"#ffdc80",[le*(K.width/be/2-.15),2.35,K.depth/be/2],[.09,.14,.09]);ge.material=d("#ffdc80",{emissive:"#dca739",emissiveIntensity:.7})}if(I>=6&&(P(ae,"#6e5942",[K.width/be/2+.2,1.75,-K.depth/be/2],[.03,3.5,.03]),M(ae,"#5bbca9",[K.width/be/2+.55,3.1,-K.depth/be/2],[.7,.42,.03])),I>=3&&_.garden){let le=_.garden,ge=new Be;ge.position.set(le.x/be,Nn(le.x/be,le.y/be),le.y/be),Ze.add(ge),M(ge,"#785d40",[0,.07,0],[1.35,.14,1]);for(let qe of[-.4,0,.4])for(let ke of[-.25,.25])P(ge,"#587b37",[qe,.21,ke],[.025,.3,.025]),w(ge,"#6caa49",[qe,.35,ke],[.16,.12,.12]),H&&w(ge,"#cfa565",[qe+.055,.27,ke],[.07,.065,.07])}}if(_.campfire&&_.fire){let K=new Be,ae=_.fire.x/be,le=_.fire.y/be;K.position.set(ae,Nn(ae,le),le),Ze.add(K);for(let ge=0;ge<8;ge++){let qe=ge*Math.PI/4;w(K,"#777a6b",[Math.sin(qe)*.3,.07,Math.cos(qe)*.3],[.095,.07,.105])}for(let ge of[.5,-.5]){let qe=P(K,"#614b35",[0,.09,0],[.06,.5,.06]);qe.rotation.z=Math.PI/2,qe.rotation.y=ge}ct=y(K,new Xn(.17,.46,8),new Sn({color:"#ffb647",transparent:!0,opacity:.88}),[0,.28,0]),Mt=new ar("#ffa145",2.5,4),Mt.position.y=.5,K.add(Mt)}}}let ri=[],an=[0,0,0,0];function vr(){let _=new Be;a.add(_),w(_,"#765745",[0,.29,0],[.24,.25,.43]),w(_,"#765745",[0,.3,.4],[.19,.18,.2]),w(_,"#ae8b68",[0,.26,.58],[.11,.065,.065]);for(let H of[-1,1]){let K=y(_,new Xn(.08,.17,3),d("#644937"),[H*.13,.47,.43]);K.rotation.z=H*.45}let I=[];for(let H of[-.17,.17])for(let K of[-.27,.24])I.push(P(_,"#5e493b",[H,.105,K],[.037,.2,.037]));return{root:_,legs:I,lastX:null,lastZ:null}}function Mr(_,I){for(;ri.length<_.length;)ri.push(vr());let H=!1;for(let K=0;K<ri.length;K++){let ae=ri[K],le=_[K];if(ae.root.visible=!!le,!le){ae.lastX=ae.lastZ=null;continue}let ge=le.x/be,qe=le.y/be,ke=ae.lastX===null?0:ge-ae.lastX,nt=ae.lastZ===null?0:qe-ae.lastZ,Fe=Math.hypot(ke,nt)>1e-4;ae.root.position.set(ge,Nn(ge,qe),qe),Fe&&(ae.root.rotation.y=Math.atan2(ke,nt),H||(bd(an,I),H=!0));for(let Re=0;Re<4;Re++)ae.legs[Re].rotation.x=Fe?an[Re]:0;ae.lastX=ge,ae.lastZ=qe}}let dn=[new Rt(x(),d("#adddd0",{roughness:.4}),96),new Rt(new Xn(1,1,3),d("#668e93"),96),new Rt(new Xn(1,1,3),d("#779da0"),96)];for(let _ of dn)_.count=0,_.frustumCulled=!1,a.add(_);function si(_,I,H){let K=0;for(let ae of _||[]){let le=Ld(ae,I,H,Ve);!le||K>=96||(bl(A,le,0,0,0,.09,.045,.22),dn[0].setMatrixAt(K,A.matrix),bl(A,le,0,0,-.25,.095,.12,.025,Math.PI/2),dn[1].setMatrixAt(K,A.matrix),bl(A,le,0,.045,-.02,.04,.1,.11),dn[2].setMatrixAt(K,A.matrix),K++)}for(let ae of dn)ae.count=K,ae.instanceMatrix.needsUpdate=!0}let Si={},An=[];function $n(_,I){if(Rd(Si,_)){for(let H of An)a.remove(H),H.traverse(K=>{K.isSprite&&(Le.delete(K),K.material.map.dispose(),K.material.dispose()),K.userData.privateGeometry&&K.geometry.dispose()});An=[];for(let H of _||[]){if(H.type==="return")continue;let K=new Be;K.position.set(H.x/be,Nn(H.x/be,H.y/be),H.y/be),a.add(K),An.push(K);let ae=new ut(new ir(.4,.46,28),d(H.done?"#6d9c89":"#8cebd5",{side:Ht}));if(ae.rotation.x=-Math.PI/2,ae.position.y=.03,ae.userData.privateGeometry=!0,K.add(ae),H.type==="fragment"&&(M(K,"#e1c587",[0,.38,0],[.37,.45,.06]),M(K,"#a68752",[0,.18,-.035],[.035,.42,.035]),M(K,"#826b4d",[0,.4,.035],[.19,.022,.02])),H.type==="rune"){w(K,"#87998a",[0,.26,0],[.27,.3,.21]);let ge=vt(H.symbol,"#ffe29b");ge.position.y=.8,ge.scale.set(.65,.32,1),K.add(ge)}if(H.type==="chest"){M(K,"#795a39",[0,.2,0],[.65,.4,.44]),M(K,"#bb9251",[0,.42,0],[.69,.06,.46]);for(let ge of[-.21,.21])M(K,"#f1d584",[ge,.23,.235],[.05,.36,.025])}if(H.type==="signal"){for(let ge of[-1,1]){let qe=P(K,"#8a6d49",[ge*.22,.55,0],[.04,1.1,.04]);qe.rotation.z=ge*.22}if(M(K,"#927652",[0,1.1,0],[.7,.16,.45]),H.done){let ge=w(K,"#ffe28d",[0,1.34,0],[.16,.21,.16]);ge.material=d("#ffe28d",{emissive:"#ffa842",emissiveIntensity:1})}else M(K,"#344f57",[0,1.3,0],[.3,.18,.24])}let le=vt(H.label,H.done?"#b5d1c5":"#ffe9b5");le.position.y=H.type==="signal"?1.95:1.35,K.add(le),K.userData.done=H.done}}for(let H of An)H.children[0].scale.setScalar(H.userData.done?1:1+Math.sin(I*2.8)*.05)}let wi=[];for(let _=0;_<4;_++){let I=new Pt().setFromPoints([new B(-.3,0,0),new B(0,-.08,0),new B(.3,0,0)]),H=new tr(I,new zi({color:"#fff7de"}));a.add(H),wi.push(H)}let Ti=Math.atan2(-130,-60),Ei=0,Ai=4.8,Jt=!0,ai=!0,Ci=0,S=null,q=!1,j=0,$="first",X=new Be;o.add(X);let he=P(X,"#52625f",[.28,-.36,-.42],[.1,.34,.1]);he.rotation.x=-.65;let _e=w(X,"#dda879",[.29,-.27,-.58],[.055,.08,.055]),Ae=new Be;X.add(Ae);let Se=P(Ae,"#876742",[.32,-.17,-.75],[.014,1.55,.014]);Se.rotation.x=-.22;let Ge=w(Ae,"#b3b6ac",[.32,.61,-.91],[.039,.12,.025]),Je={};for(let _ of["gather","fish","cook"]){let I=new Be;I.position.set(.29,-.26,-.61),X.add(I),Pd(_,I,{cube:M,tube:P,ell:w}),Je[_]=I}let Pe=Object.entries(Je),ht={down:0,up:Math.PI,left:-Math.PI/2,right:Math.PI/2},mt=new Set;X.traverse(_=>{_.isMesh&&(_.castShadow=!1,_.receiveShadow=!1,_.frustumCulled=!1)});let bt=new B,xt=new B,dt=new B,We=new B,Nt={position:dt,target:bt},it={x:0,z:0,surface:0,yaw:0,pitch:0,mode:"first",distance:4.8,bob:0},Wt=new B,Cn=new lr,on=[Ze,ve],oi=[],Ft=_=>_.object.isMesh&&_.distance>.1;function tn(_,I=0){!Jt||t().paused||(Ti+=_,Ei=Hi(Ei+I,$==="first"?-1.12:-.05,$==="first"?1.12:.75))}function nn(_){$=_==="third"?"third":"first",Ei=_==="third"?.22:0,o.fov=_==="third"?58:72,o.updateProjectionMatrix(),S=null,ai=!0}n.addEventListener("pointerdown",_=>{let I=t();!Jt||!I.play||I.paused||_.button>0||S||(S={id:_.pointerId,x:_.clientX,y:_.clientY},n.setPointerCapture(_.pointerId))}),n.addEventListener("pointermove",_=>{!S||S.id!==_.pointerId||(tn(-(_.clientX-S.x)*.006,(_.clientY-S.y)*.005),S.x=_.clientX,S.y=_.clientY)});let Xt=_=>{S?.id===_.pointerId&&(S=null)};for(let _ of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(_,Xt);n.addEventListener("wheel",_=>{!Jt||t().paused||(_.preventDefault(),$==="first"?(o.fov=Hi(o.fov+_.deltaY*.025,58,85),o.updateProjectionMatrix()):Ai=Hi(Ai+_.deltaY*.004,2.5,8))},{passive:!1}),n.addEventListener("webglcontextlost",_=>{_.preventDefault(),q=!0,Jt=!1,S=null,i()}),n.addEventListener("webglcontextrestored",()=>{q=!1,ai=!0});function qt(){r.setSize(innerWidth,innerHeight,!1),o.aspect=innerWidth/innerHeight,o.updateProjectionMatrix()}function Wi(_){if(!Jt||q)return;let I=t(),H=_/1e3,K=Ci?Hi((_-Ci)/1e3,0,.06):1/60;Ci=_,vd(te,H),Ad(Y,I.basePos,I.baseLevel),C=Y.layout,v=Y.elevation,Tt(V,I.labels?.board,"#ffe087"),V.tag&&(V.tag.position.y=1.65,V.tag.scale.set(1.4,.36,1)),ce.visible=!!I.trail,I.trail&&(la(xe,I.trail)&&ce.position.set(xe.x,xe.y,xe.z),Ie.material.opacity=.35+.13*Math.sin(H*3),(ee!==I.trailNumber||ie?.userData.text!==(I.trailNumber===4?I.labels?.finish||"4":I.trailNumber?String(I.trailNumber):I.trail.label))&&(ie&&(Le.delete(ie),ce.remove(ie),ie.material.map.dispose(),ie.material.dispose()),ee=I.trailNumber,ie=vt(ee===4?I.labels?.finish||"4":ee?String(ee):I.trail.label,"#54e4ef"),ie.userData.text=ee===4?I.labels?.finish||"4":ee?String(ee):I.trail.label,ie.position.y=1.5,ie.scale.set(I.trailNumber?1:2.45,.4,1),ce.add(ie))),Tt(Ue,I.labels?.leon,"#b49966"),Tt(Ke,I.labels?.nela,"#609991");let ae=I.P.x/be,le=I.P.y/be;h.update(),W.update(H,C),$e.value=H,ne.material.uniforms.uTime.value=H,Qe(I.objects,H,I.resourceRevision),si(I.fishes,H,I.sea),$n(I.chapterMarkers,H),de(Me,I.P,Number.isFinite(I.heading)?I.heading:ht[I.face]||0,I.moving,H,K,I.fast?5.25:3,I.sea,I.raft,I.motion,I.spear,I.blocked),Ue.root.visible=Ke.root.visible=!0,de(Ue,I.leon,Math.atan2(ae-I.leon.x/be,le-I.leon.y/be),!1,H,K,0,I.sea),de(Ke,I.nela,Math.atan2(ae-I.nela.x/be,le-I.nela.y/be),!1,H,K,0,I.sea),mt.clear();for(let Fe of I.players){if(Fe.id===I.you)continue;mt.add(Fe.id);let Re=yt.get(Fe.id),St,wt=I.looks[Fe.slot]||$x;!Re||Re.name!==Fe.name?(St=Fe.appearance?cl(Fe.appearance):wt,Re&&Rn(Re),Re=Ye(St,"player",Fe.name),Re.remoteLook={...St},Re.remoteMotion={kind:null,phase:0},yt.set(Fe.id,Re)):St=Fe.appearance?Gc(Re.remoteLook,Fe.appearance):wt,Ot(Re,St);let vn=Re.lastX===null?0:Fe.point.x/be-Re.lastX,ln=Re.lastZ===null?0:Fe.point.y/be-Re.lastZ,Mn=Fe.moving&&Math.hypot(vn,ln)>.002?Math.atan2(vn,ln):ht[Fe.face]||0,Ee=yd(Re.remoteMotion,Fe.motion,Fe.received,_);de(Re,Fe.point,Mn,Fe.moving,H,K,3,I.sea,!1,Ee,I.spearOwned&&!Fe.spearStowed,Fe.blocked)}for(let[Fe,Re]of yt)mt.has(Fe)||(Rn(Re),yt.delete(Fe));Ot(Me,I.appearance||cl()),la(De,I.leon,.9,.15)&&ve.position.set(De.x,De.y,De.z),la(Oe,I.chest)&&oe.position.set(Oe.x,Oe.y,Oe.z),oe.visible=!I.treasure,yn(I),Mr(I.enemies,H);let ge=C&&Math.abs(I.P.x-C.floor.x)<C.floor.w/2&&Math.abs(I.P.y-C.floor.y)<C.floor.h/2;for(let Fe of un)Fe.opacity=ge&&$==="third"?.23:1,Fe.depthWrite=!(ge&&$==="third");ct&&(ct.scale.y=1+Math.sin(H*13)*.18,Mt.intensity=2.5+Math.sin(H*17)*.4);let qe=_d(I.objects,I.P);me.visible=!!(I.play&&!I.paused&&qe),qe&&la(je,qe)&&me.position.set(je.x,je.y+.03,je.z);for(let Fe=0;Fe<wi.length;Fe++){let Re=wi[Fe];Re.position.set(19+Math.sin(H*.08+Fe*1.7)*8,7+Math.sin(H*.2+Fe)*.5,12+Math.cos(H*.1+Fe*1.3)*5),Re.rotation.y=H*.1+Fe,Re.scale.y=1+Math.sin(H*7+Fe)*.5}Me.rig.visible=$!=="first";let ke=I.moving&&!I.paused?Math.sin(Me.phase*2)*.012:0;if(it.x=ae,it.z=le,it.surface=Me.root.position.y,it.yaw=Ti,it.pitch=Ei,it.mode=$,it.distance=Ai*(o.aspect<.85?1.12:1),it.bob=ke,ul(it,Nt),$==="third"){dt.y=Math.max(dt.y,Nn(dt.x,dt.z)+.55),Wt.subVectors(dt,bt);let Fe=Wt.length();Wt.normalize(),Cn.set(bt,Wt),Cn.near=.08,Cn.far=Fe;let Re=dl(Cn,on,!0,oi).find(Ft);Re&&dt.copy(bt).addScaledVector(Wt,Math.max(.35,Re.distance-.15))}$==="first"||ai||We.distanceTo(Me.root.position)>5?(o.position.copy(dt),xt.copy(bt),ai=!1):(Wc(o.position,dt,K,8),Wc(xt,bt,K,12)),o.lookAt($==="first"?bt:xt),We.copy(Me.root.position),wd(Le,o,innerWidth,L);let nt=!!I.spear||!!I.motion&&(I.motion.kind==="gather"||I.motion.kind==="fish"||I.motion.kind==="cook");X.visible=$==="first"&&I.play&&nt&&!I.sea(I.P.x,I.P.y),Ae.visible=!!I.spear&&!I.motion;for(let[Fe,Re]of Pe)Re.visible=I.motion?.kind===Fe;X.position.y=ke*.4,X.rotation.x=I.motion?Math.sin(I.motion.phase*Math.PI*2)*.07:0,_e.material=d(I.appearance?.skin||"#dda879"),he.material=d(I.appearance?.shirt||"#4c9cba"),fl(l,ae,le),ne.position.copy(o.position),k.update(H,o.position),r.render(a,o),I.play&&K>.038?j+=K:j=Math.max(0,j-K),j>3&&r.getPixelRatio()>.85&&(r.setPixelRatio(Math.max(.85,r.getPixelRatio()-.15)),qt(),j=0)}function Rn(_){a.remove(_.root),_.tag&&(Le.delete(_.tag),_.tag.material.map.dispose(),_.tag.material.dispose())}function ca(_){return Jt=!!_&&!q,S=null,ai=!0,Ci=0,Jt}function U(){Jt=!1,r.dispose(),F.dispose(),E.dispose(),k.dispose(),ne.geometry.dispose(),ne.material.dispose(),D.traverse(_=>{_.geometry&&_.geometry.dispose(),_.material&&_.material.dispose()}),b.dispose(),W.dispose(),h.dispose(),lt.dispose();for(let _ of[...Object.values(Z),...dn])_.geometry.dispose(),_.dispose();for(let _ of f.values())_.dispose();for(let _ of u.values())_.dispose()}return{frame:Wi,resize:qt,orbit:tn,setEnabled:ca,setCamera:nn,dispose:U,vector:(_,I)=>xd(_,I,Ti),get enabled(){return Jt},get yaw(){return Ti},get cameraMode(){return $},stats:()=>({calls:r.info.render.calls,triangles:r.info.render.triangles,pixelRatio:r.getPixelRatio(),people:yt.size+3,camera:$,eye:o.position.toArray(),resourceStaticUpdates:we,materials:h.stats()})}}return Xd(jx);})();
