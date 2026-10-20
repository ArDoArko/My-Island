var MyIsland3D=(()=>{var wl=Object.defineProperty;var kd=Object.getOwnPropertyDescriptor;var Vd=Object.getOwnPropertyNames;var Gd=Object.prototype.hasOwnProperty;var Hd=(n,e)=>{for(var t in e)wl(n,t,{get:e[t],enumerable:!0})},Wd=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Vd(e))!Gd.call(n,r)&&r!==t&&wl(n,r,{get:()=>e[r],enumerable:!(i=kd(e,r))||i.enumerable});return n};var Xd=n=>Wd(wl({},"__esModule",{value:!0}),n);var Kx={};Hd(Kx,{SCALE:()=>Ce,actionPose:()=>Dd,baseElevation:()=>jc,buildBase:()=>Id,buildHuman:()=>Qc,cameraVector:()=>xd,create:()=>$x,createCampaign:()=>qx,drawCampaign2D:()=>$c,fishPose:()=>Ld,legPose:()=>Td,nearestWithin:()=>_d,scaleWorldLabels:()=>wd,terrainHeight:()=>Un,updateAppearanceKey:()=>Ed,updateAvatarFrameCycle:()=>vd,updateAvatarPoseCycle:()=>Sd,updateBaseFrame:()=>Ad,updateBoarGait:()=>bd,updateBuildingState:()=>Cd,updateChapterState:()=>Rd,updateFishPart:()=>bl,updateLeafWindCycle:()=>Md,updateRemoteMotion:()=>yd,updateTerrainAnchor:()=>co,walkSurface:()=>Kc});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Rh=0,rc=1,Ih=2;var sc=1,ns=2,ii=3,xi=0,hn=1,Ht=2,bi=0,$i=1,oc=2,ac=3,lc=4,Ph=5,zi=100,Dh=101,Lh=102,Uh=103,Nh=104,Fh=200,zh=201,Oh=202,Bh=203,Oo=204,Bo=205,kh=206,Vh=207,Gh=208,Hh=209,Wh=210,Xh=211,qh=212,Yh=213,Zh=214,ua=0,da=1,fa=2,Ki=3,pa=4,ma=5,ga=6,xa=7,cc=0,Jh=1,$h=2,Si=0,Kh=1,jh=2,Qh=3,is=4,eu=5,tu=6,nu=7;var hc=300,cr=301,hr=302,_a=303,ya=304,Ks=306,Vr=1e3,Fi=1001,ko=1002,bn=1003,iu=1004;var js=1005;var Xn=1006,va=1007;var Gi=1008;var Zn=1009,uc=1010,dc=1011,rs=1012,Ma=1013,Hi=1014,Jn=1015,ss=1016,ba=1017,Sa=1018,os=1020,fc=35902,pc=35899,mc=1021,gc=1022,Fn=1023,Gr=1026,as=1027,wa=1028,Ta=1029,xc=1030,Ea=1031;var Aa=1033,Qs=33776,eo=33777,to=33778,no=33779,Ca=35840,Ra=35841,Ia=35842,Pa=35843,Da=36196,La=37492,Ua=37496,Na=37808,Fa=37809,za=37810,Oa=37811,Ba=37812,ka=37813,Va=37814,Ga=37815,Ha=37816,Wa=37817,Xa=37818,qa=37819,Ya=37820,Za=37821,Ja=36492,$a=36494,Ka=36495,ja=36283,Qa=36284,el=36285,tl=36286;var Us=2300,Vo=2301,Fo=2302,$l=2400,Kl=2401,jl=2402;var ru=3200,su=3201;var _c=0,ou=1,$n="",Xt="srgb",ji="srgb-linear",Ns="linear",zt="srgb";var Ji=7680;var Ql=519,au=512,lu=513,cu=514,yc=515,hu=516,uu=517,du=518,fu=519,Go=35044;var vc="300 es",Wn=2e3,Fs=2001;var _i=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eh=1234567,Ds=Math.PI/180,Hr=180/Math.PI;function mi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function yt(n,e,t){return Math.max(e,Math.min(t,n))}function Mc(n,e){return(n%e+e)%e}function qd(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Yd(n,e,t){return n!==e?(t-n)/(e-n):0}function Ls(n,e,t){return(1-t)*n+t*e}function Zd(n,e,t,i){return Ls(n,e,1-Math.exp(-t*i))}function Jd(n,e=1){return e-Math.abs(Mc(n,e*2)-e)}function $d(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Kd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function jd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Qd(n,e){return n+Math.random()*(e-n)}function ef(n){return n*(.5-Math.random())}function tf(n){n!==void 0&&(eh=n);let e=eh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nf(n){return n*Ds}function rf(n){return n*Hr}function sf(n){return(n&n-1)===0&&n!==0}function of(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function af(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function lf(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),h=o((e+i)/2),u=s((e-i)/2),f=o((e-i)/2),d=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*h,c*u,c*f,a*l);break;case"YZY":n.set(c*f,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*f,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*d,a*l);break;case"YXY":n.set(c*d,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var io={DEG2RAD:Ds,RAD2DEG:Hr,generateUUID:mi,clamp:yt,euclideanModulo:Mc,mapLinear:qd,inverseLerp:Yd,lerp:Ls,damp:Zd,pingpong:Jd,smoothstep:$d,smootherstep:Kd,randInt:jd,randFloat:Qd,randFloatSpread:ef,seededRandom:tf,degToRad:nf,radToDeg:rf,isPowerOfTwo:sf,ceilPowerOfTwo:of,floorPowerOfTwo:af,setQuaternionFromProperEuler:lf,normalize:Ft,denormalize:Hn},Xe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},yi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],f=s[o+0],d=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==f||l!==d||h!==g){let m=1-a,p=c*f+l*d+h*g+u*x,_=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let I=Math.sqrt(S),T=Math.atan2(I,p*_);m=Math.sin(m*T)/I,a=Math.sin(a*T)/I}let v=a*_;if(c=c*m+f*v,l=l*m+d*v,h=h*m+g*v,u=u*m+x*v,m===1-a){let I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-a*d,e[t+2]=l*g+h*d+a*f-c*u,e[t+3]=h*g-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),u=a(s/2),f=c(i/2),d=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(th.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),h=2*(a*t-s*r),u=2*(s*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tl.copy(this).projectOnVector(e),this.sub(Tl)}reflect(e){return this.sub(Tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Tl=new O,th=new yi,dt=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],x=r[0],m=r[3],p=r[6],_=r[1],S=r[4],v=r[7],I=r[2],T=r[5],N=r[8];return s[0]=o*x+a*_+c*I,s[3]=o*m+a*S+c*T,s[6]=o*p+a*v+c*N,s[1]=l*x+h*_+u*I,s[4]=l*m+h*S+u*T,s[7]=l*p+h*v+u*N,s[2]=f*x+d*_+g*I,s[5]=f*m+d*S+g*T,s[8]=f*p+d*v+g*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*s,d=l*s-o*c,g=t*u+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(r*l-h*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(h*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=d*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(El.makeScale(e,t)),this}rotate(e){return this.premultiply(El.makeRotation(-e)),this}translate(e,t){return this.premultiply(El.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},El=new dt;function bc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pu(){let n=Wr("canvas");return n.style.display="block",n}var nh={};function Xr(n){n in nh||(nh[n]=!0,console.warn(n))}function mu(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var ih=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rh=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cf(){let n={enabled:!0,workingColorSpace:ji,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===zt&&(r.r=gi(r.r),r.g=gi(r.g),r.b=gi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===zt&&(r.r=kr(r.r),r.g=kr(r.g),r.b=kr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===$n?Ns:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Xr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Xr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ji]:{primaries:e,whitePoint:i,transfer:Ns,toXYZ:ih,fromXYZ:rh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:i,transfer:zt,toXYZ:ih,fromXYZ:rh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),n}var At=cf();function gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function kr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var br,Ho=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{br===void 0&&(br=Wr("canvas")),br.width=e.width,br.height=e.height;let r=br.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=br}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Wr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=gi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(gi(t[i]/255)*255):t[i]=gi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hf=0,qr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Al(r[o].image)):s.push(Al(r[o]))}else s=Al(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Al(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ho.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var uf=0,Cl=new O,gn=class n extends _i{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Fi,r=Fi,s=Xn,o=Gi,a=Fn,c=Zn,l=n.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=mi(),this.name="",this.source=new qr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cl).x}get height(){return this.source.getSize(Cl).y}get depth(){return this.source.getSize(Cl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vr:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vr:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=hc;gn.DEFAULT_ANISOTROPY=1;var Ct=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,v=(d+1)/2,I=(p+1)/2,T=(h+f)/4,N=(u+x)/4,F=(g+m)/4;return S>v&&S>I?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=T/i,s=N/i):v>I?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=T/r,s=F/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=N/s,r=F/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-x)/_,this.z=(f-h)/_,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wo=class extends _i{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new gn(r);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new qr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends Wo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},zs=class extends gn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xo=class extends gn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ti=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(s,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uo.copy(i.boundingBox)),uo.applyMatrix4(e.matrixWorld),this.union(uo)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ms),fo.subVectors(this.max,Ms),Sr.subVectors(e.a,Ms),wr.subVectors(e.b,Ms),Tr.subVectors(e.c,Ms),Ii.subVectors(wr,Sr),Pi.subVectors(Tr,wr),Xi.subVectors(Sr,Tr);let t=[0,-Ii.z,Ii.y,0,-Pi.z,Pi.y,0,-Xi.z,Xi.y,Ii.z,0,-Ii.x,Pi.z,0,-Pi.x,Xi.z,0,-Xi.x,-Ii.y,Ii.x,0,-Pi.y,Pi.x,0,-Xi.y,Xi.x,0];return!Rl(t,Sr,wr,Tr,fo)||(t=[1,0,0,0,1,0,0,0,1],!Rl(t,Sr,wr,Tr,fo))?!1:(po.crossVectors(Ii,Pi),t=[po.x,po.y,po.z],Rl(t,Sr,wr,Tr,fo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ci=[new O,new O,new O,new O,new O,new O,new O,new O],kn=new O,uo=new ti,Sr=new O,wr=new O,Tr=new O,Ii=new O,Pi=new O,Xi=new O,Ms=new O,fo=new O,po=new O,qi=new O;function Rl(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){qi.fromArray(n,s);let a=r.x*Math.abs(qi.x)+r.y*Math.abs(qi.y)+r.z*Math.abs(qi.z),c=e.dot(qi),l=t.dot(qi),h=i.dot(qi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var df=new ti,bs=new O,Il=new O,vi=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):df.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bs.subVectors(e,this.center);let t=bs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(bs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bs.copy(e.center).add(Il)),this.expandByPoint(bs.copy(e.center).sub(Il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},hi=new O,Pl=new O,mo=new O,Di=new O,Dl=new O,go=new O,Ll=new O,Yr=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Pl.copy(e).add(t).multiplyScalar(.5),mo.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(Pl);let s=e.distanceTo(t)*.5,o=-this.direction.dot(mo),a=Di.dot(this.direction),c=-Di.dot(mo),l=Di.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=s*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Pl).addScaledVector(mo,f),d}intersectSphere(e,t){hi.subVectors(e.center,this.origin);let i=hi.dot(this.direction),r=hi.dot(hi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,i,r,s){Dl.subVectors(t,e),go.subVectors(i,e),Ll.crossVectors(Dl,go);let o=this.direction.dot(Ll),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,e);let c=a*this.direction.dot(go.crossVectors(Di,go));if(c<0)return null;let l=a*this.direction.dot(Dl.cross(Di));if(l<0||c+l>o)return null;let h=-a*Di.dot(Ll);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pt=class n{constructor(e,t,i,r,s,o,a,c,l,h,u,f,d,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,h,u,f,d,g,x,m)}set(e,t,i,r,s,o,a,c,l,h,u,f,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Er.setFromMatrixColumn(e,0).length(),s=1/Er.setFromMatrixColumn(e,1).length(),o=1/Er.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,g=l*h,x=l*u;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,g=l*h,x=l*u;t[0]=f-x*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+x,t[1]=c*u,t[5]=x*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ff,e,pf)}lookAt(e,t,i){let r=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Li.crossVectors(i,Rn),Li.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Li.crossVectors(i,Rn)),Li.normalize(),xo.crossVectors(Rn,Li),r[0]=Li.x,r[4]=xo.x,r[8]=Rn.x,r[1]=Li.y,r[5]=xo.y,r[9]=Rn.y,r[2]=Li.z,r[6]=xo.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],_=i[3],S=i[7],v=i[11],I=i[15],T=r[0],N=r[4],F=r[8],w=r[12],M=r[1],E=r[5],z=r[9],P=r[13],R=r[2],U=r[6],G=r[10],W=r[14],B=r[3],ie=r[7],ae=r[11],fe=r[15];return s[0]=o*T+a*M+c*R+l*B,s[4]=o*N+a*E+c*U+l*ie,s[8]=o*F+a*z+c*G+l*ae,s[12]=o*w+a*P+c*W+l*fe,s[1]=h*T+u*M+f*R+d*B,s[5]=h*N+u*E+f*U+d*ie,s[9]=h*F+u*z+f*G+d*ae,s[13]=h*w+u*P+f*W+d*fe,s[2]=g*T+x*M+m*R+p*B,s[6]=g*N+x*E+m*U+p*ie,s[10]=g*F+x*z+m*G+p*ae,s[14]=g*w+x*P+m*W+p*fe,s[3]=_*T+S*M+v*R+I*B,s[7]=_*N+S*E+v*U+I*ie,s[11]=_*F+S*z+v*G+I*ae,s[15]=_*w+S*P+v*W+I*fe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+s*c*u-r*l*u-s*a*f+i*l*f+r*a*d-i*c*d)+x*(+t*c*d-t*l*f+s*o*f-r*o*d+r*l*h-s*c*h)+m*(+t*l*u-t*a*d-s*o*u+i*o*d+s*a*h-i*l*h)+p*(-r*a*h-t*c*u+t*a*f+r*o*u-i*o*f+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],_=u*m*l-x*f*l+x*c*d-a*m*d-u*c*p+a*f*p,S=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,v=h*x*l-g*u*l+g*a*d-o*x*d-h*a*p+o*u*p,I=g*u*c-h*x*c-g*a*f+o*x*f+h*a*m-o*u*m,T=t*_+i*S+r*v+s*I;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/T;return e[0]=_*N,e[1]=(x*f*s-u*m*s-x*r*d+i*m*d+u*r*p-i*f*p)*N,e[2]=(a*m*s-x*c*s+x*r*l-i*m*l-a*r*p+i*c*p)*N,e[3]=(u*c*s-a*f*s-u*r*l+i*f*l+a*r*d-i*c*d)*N,e[4]=S*N,e[5]=(h*m*s-g*f*s+g*r*d-t*m*d-h*r*p+t*f*p)*N,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*N,e[7]=(o*f*s-h*c*s+h*r*l-t*f*l-o*r*d+t*c*d)*N,e[8]=v*N,e[9]=(g*u*s-h*x*s-g*i*d+t*x*d+h*i*p-t*u*p)*N,e[10]=(o*x*s-g*a*s+g*i*l-t*x*l-o*i*p+t*a*p)*N,e[11]=(h*a*s-o*u*s-h*i*l+t*u*l+o*i*d-t*a*d)*N,e[12]=I*N,e[13]=(h*x*r-g*u*r+g*i*f-t*x*f-h*i*m+t*u*m)*N,e[14]=(g*a*r-o*x*r-g*i*c+t*x*c+o*i*m-t*a*m)*N,e[15]=(o*u*r-h*a*r+h*i*c-t*u*c-o*i*f+t*a*f)*N,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,f=s*l,d=s*h,g=s*u,x=o*h,m=o*u,p=a*u,_=c*l,S=c*h,v=c*u,I=i.x,T=i.y,N=i.z;return r[0]=(1-(x+p))*I,r[1]=(d+v)*I,r[2]=(g-S)*I,r[3]=0,r[4]=(d-v)*T,r[5]=(1-(f+p))*T,r[6]=(m+_)*T,r[7]=0,r[8]=(g+S)*N,r[9]=(m-_)*N,r[10]=(1-(f+x))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Er.set(r[0],r[1],r[2]).length(),o=Er.set(r[4],r[5],r[6]).length(),a=Er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vn.copy(this);let l=1/s,h=1/o,u=1/a;return Vn.elements[0]*=l,Vn.elements[1]*=l,Vn.elements[2]*=l,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=u,Vn.elements[9]*=u,Vn.elements[10]*=u,t.setFromRotationMatrix(Vn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Wn,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r),g,x;if(c)g=s/(o-s),x=o*s/(o-s);else if(a===Wn)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Fs)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Wn,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-r),f=-(t+e)/(t-e),d=-(i+r)/(i-r),g,x;if(c)g=1/(o-s),x=o/(o-s);else if(a===Wn)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===Fs)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Er=new O,Vn=new Pt,ff=new O(0,0,0),pf=new O(1,1,1),Li=new O,xo=new O,Rn=new O,sh=new Pt,oh=new yi,qn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oh.setFromEuler(this),this.setFromQuaternion(oh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qn.DEFAULT_ORDER="XYZ";var Zr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},mf=0,ah=new O,Ar=new yi,ui=new Pt,_o=new O,Ss=new O,gf=new O,xf=new yi,lh=new O(1,0,0),ch=new O(0,1,0),hh=new O(0,0,1),uh={type:"added"},_f={type:"removed"},Cr={type:"childadded",child:null},Ul={type:"childremoved",child:null},Rt=class n extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new O,t=new qn,i=new yi,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new dt}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(lh,e)}rotateY(e){return this.rotateOnAxis(ch,e)}rotateZ(e){return this.rotateOnAxis(hh,e)}translateOnAxis(e,t){return ah.copy(e).applyQuaternion(this.quaternion),this.position.add(ah.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lh,e)}translateY(e){return this.translateOnAxis(ch,e)}translateZ(e){return this.translateOnAxis(hh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_o.copy(e):_o.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Ss,_o,this.up):ui.lookAt(_o,Ss,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),Ar.setFromRotationMatrix(ui),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uh),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_f),Ul.child=e,this.dispatchEvent(Ul),Ul.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uh),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,e,gf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,xf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Rt.DEFAULT_UP=new O(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gn=new O,di=new O,Nl=new O,fi=new O,Rr=new O,Ir=new O,dh=new O,Fl=new O,zl=new O,Ol=new O,Bl=new Ct,kl=new Ct,Vl=new Ct,pi=class n{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Gn.subVectors(e,t),r.cross(Gn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Gn.subVectors(r,t),di.subVectors(i,t),Nl.subVectors(e,t);let o=Gn.dot(Gn),a=Gn.dot(di),c=Gn.dot(Nl),l=di.dot(di),h=di.dot(Nl),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,fi.x),c.addScaledVector(o,fi.y),c.addScaledVector(a,fi.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Bl.setScalar(0),kl.setScalar(0),Vl.setScalar(0),Bl.fromBufferAttribute(e,t),kl.fromBufferAttribute(e,i),Vl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Bl,s.x),o.addScaledVector(kl,s.y),o.addScaledVector(Vl,s.z),o}static isFrontFacing(e,t,i,r){return Gn.subVectors(i,t),di.subVectors(e,t),Gn.cross(di).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Gn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Rr.subVectors(r,i),Ir.subVectors(s,i),Fl.subVectors(e,i);let c=Rr.dot(Fl),l=Ir.dot(Fl);if(c<=0&&l<=0)return t.copy(i);zl.subVectors(e,r);let h=Rr.dot(zl),u=Ir.dot(zl);if(h>=0&&u<=h)return t.copy(r);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(Rr,o);Ol.subVectors(e,s);let d=Rr.dot(Ol),g=Ir.dot(Ol);if(g>=0&&d<=g)return t.copy(s);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Ir,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return dh.subVectors(s,r),a=(u-h)/(u-h+(d-g)),t.copy(r).addScaledVector(dh,a);let p=1/(m+x+f);return o=x*p,a=f*p,t.copy(i).addScaledVector(Rr,o).addScaledVector(Ir,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},yo={h:0,s:0,l:0};function Gl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var nt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=At.workingColorSpace){return this.r=e,this.g=t,this.b=i,At.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=At.workingColorSpace){if(e=Mc(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Gl(o,s,e+1/3),this.g=Gl(o,s,e),this.b=Gl(o,s,e-1/3)}return At.colorSpaceToWorking(this,r),this}setStyle(e,t=Xt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){let i=gu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return At.workingToColorSpace(mn.copy(this),e),Math.round(yt(mn.r*255,0,255))*65536+Math.round(yt(mn.g*255,0,255))*256+Math.round(yt(mn.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(mn.copy(this),t);let i=mn.r,r=mn.g,s=mn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Xt){At.workingToColorSpace(mn.copy(this),e);let t=mn.r,i=mn.g,r=mn.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+t,Ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ui),e.getHSL(yo);let i=Ls(Ui.h,yo.h,t),r=Ls(Ui.s,yo.s,t),s=Ls(Ui.l,yo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new nt;nt.NAMES=gu;var yf=0,ni=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=$i,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oo,this.blendDst=Bo,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Oo&&(i.blendSrc=this.blendSrc),this.blendDst!==Bo&&(i.blendDst=this.blendDst),this.blendEquation!==zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ql&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Sn=class extends ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var $t=new O,vo=new Xe,vf=0,Qt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Go,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)vo.fromBufferAttribute(this,t),vo.applyMatrix3(e),this.setXY(t,vo.x,vo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Hn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Go&&(e.usage=this.usage),e}};var Os=class extends Qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Bs=class extends Qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var rt=class extends Qt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Mf=0,Nn=new Pt,Hl=new Rt,Pr=new O,In=new ti,ws=new ti,rn=new O,Lt=class n extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bc(e)?Bs:Os)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new dt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,i){return Nn.makeTranslation(e,t,i),this.applyMatrix4(Nn),this}scale(e,t,i){return Nn.makeScale(e,t,i),this.applyMatrix4(Nn),this}lookAt(e){return Hl.lookAt(e),Hl.updateMatrix(),this.applyMatrix4(Hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rt(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];In.setFromBufferAttribute(s),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ws.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(In.min,ws.min),In.expandByPoint(rn),rn.addVectors(In.max,ws.max),In.expandByPoint(rn)):(In.expandByPoint(ws.min),In.expandByPoint(ws.max))}In.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)rn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(rn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)rn.fromBufferAttribute(a,l),c&&(Pr.fromBufferAttribute(e,l),rn.add(Pr)),r=Math.max(r,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let F=0;F<i.count;F++)a[F]=new O,c[F]=new O;let l=new O,h=new O,u=new O,f=new Xe,d=new Xe,g=new Xe,x=new O,m=new O;function p(F,w,M){l.fromBufferAttribute(i,F),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,M),f.fromBufferAttribute(s,F),d.fromBufferAttribute(s,w),g.fromBufferAttribute(s,M),h.sub(l),u.sub(l),d.sub(f),g.sub(f);let E=1/(d.x*g.y-g.x*d.y);isFinite(E)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(E),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(E),a[F].add(x),a[w].add(x),a[M].add(x),c[F].add(m),c[w].add(m),c[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let F=0,w=_.length;F<w;++F){let M=_[F],E=M.start,z=M.count;for(let P=E,R=E+z;P<R;P+=3)p(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let S=new O,v=new O,I=new O,T=new O;function N(F){I.fromBufferAttribute(r,F),T.copy(I);let w=a[F];S.copy(w),S.sub(I.multiplyScalar(I.dot(w))).normalize(),v.crossVectors(T,w);let E=v.dot(c[F])<0?-1:1;o.setXYZW(F,S.x,S.y,S.z,E)}for(let F=0,w=_.length;F<w;++F){let M=_[F],E=M.start,z=M.count;for(let P=E,R=E+z;P<R;P+=3)N(e.getX(P+0)),N(e.getX(P+1)),N(e.getX(P+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let r=new O,s=new O,o=new O,a=new O,c=new O,l=new O,h=new O,u=new O;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Qt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,i);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fh=new Pt,Yi=new Yr,Mo=new vi,ph=new O,bo=new O,So=new O,wo=new O,Wl=new O,To=new O,mh=new O,Eo=new O,mt=class extends Rt{constructor(e=new Lt,t=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){To.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(Wl.fromBufferAttribute(u,e),o?To.addScaledVector(Wl,h):To.addScaledVector(Wl.sub(t),h))}t.add(To)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(s),Yi.copy(e.ray).recast(e.near),!(Mo.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(Mo,ph)===null||Yi.origin.distanceToSquared(ph)>(e.far-e.near)**2))&&(fh.copy(s).invert(),Yi.copy(e.ray).applyMatrix4(fh),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,I=S;v<I;v+=3){let T=a.getX(v),N=a.getX(v+1),F=a.getX(v+2);r=Ao(this,p,e,i,l,h,u,T,N,F),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let _=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);r=Ao(this,o,e,i,l,h,u,_,S,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),S=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,I=S;v<I;v+=3){let T=v,N=v+1,F=v+2;r=Ao(this,p,e,i,l,h,u,T,N,F),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let _=m,S=m+1,v=m+2;r=Ao(this,o,e,i,l,h,u,_,S,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function bf(n,e,t,i,r,s,o,a){let c;if(e.side===hn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===xi,a),c===null)return null;Eo.copy(a),Eo.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Eo);return l<t.near||l>t.far?null:{distance:l,point:Eo.clone(),object:n}}function Ao(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,bo),n.getVertexPosition(c,So),n.getVertexPosition(l,wo);let h=bf(n,e,t,i,bo,So,wo,mh);if(h){let u=new O;pi.getBarycoord(mh,bo,So,wo,u),r&&(h.uv=pi.getInterpolatedAttribute(r,a,c,l,u,new Xe)),s&&(h.uv1=pi.getInterpolatedAttribute(s,a,c,l,u,new Xe)),o&&(h.normal=pi.getInterpolatedAttribute(o,a,c,l,u,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new O,materialIndex:0};pi.getNormal(bo,So,wo,f.normal),h.face=f,h.barycoord=u}return h}var cn=class n extends Lt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(u,2));function g(x,m,p,_,S,v,I,T,N,F,w){let M=v/N,E=I/F,z=v/2,P=I/2,R=T/2,U=N+1,G=F+1,W=0,B=0,ie=new O;for(let ae=0;ae<G;ae++){let fe=ae*E-P;for(let De=0;De<U;De++){let We=De*M-z;ie[x]=We*_,ie[m]=fe*S,ie[p]=R,l.push(ie.x,ie.y,ie.z),ie[x]=0,ie[m]=0,ie[p]=T>0?1:-1,h.push(ie.x,ie.y,ie.z),u.push(De/N),u.push(1-ae/F),W+=1}}for(let ae=0;ae<F;ae++)for(let fe=0;fe<N;fe++){let De=f+fe+U*ae,We=f+fe+U*(ae+1),ft=f+(fe+1)+U*(ae+1),Je=f+(fe+1)+U*ae;c.push(De,We,Je),c.push(We,ft,Je),B+=6}a.addGroup(d,B,w),d+=B,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ur(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function xn(n){let e={};for(let t=0;t<n.length;t++){let i=ur(n[t]);for(let r in i)e[r]=i[r]}return e}function Sf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Sc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}var nl={clone:ur,merge:xn},wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wf,this.fragmentShader=Tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ur(e.uniforms),this.uniformsGroups=Sf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ks=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ni=new O,gh=new Xe,xh=new Xe,jt=class extends ks{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,gh,xh),t.subVectors(xh,gh)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ds*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Dr=-90,Lr=1,qo=class extends Rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new jt(Dr,Lr,e,t);r.layers=this.layers,this.add(r);let s=new jt(Dr,Lr,e,t);s.layers=this.layers,this.add(s);let o=new jt(Dr,Lr,e,t);o.layers=this.layers,this.add(o);let a=new jt(Dr,Lr,e,t);a.layers=this.layers,this.add(a);let c=new jt(Dr,Lr,e,t);c.layers=this.layers,this.add(c);let l=new jt(Dr,Lr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Fs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Vs=class extends gn{constructor(e=[],t=cr,i,r,s,o,a,c,l,h){super(e,t,i,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Yo=class extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Vs(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new cn(5,5,5),s=new wn({name:"CubemapFromEquirect",uniforms:ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:bi});s.uniforms.tEquirect.value=t;let o=new mt(r,s),a=t.minFilter;return t.minFilter===Gi&&(t.minFilter=Xn),new qo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},ke=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ef={type:"move"},Jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ef)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ke;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Qi=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new nt(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},er=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Gs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Go,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yn=new O,$r=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Hn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Hn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Kr=class extends ni{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ur,Ts=new O,Nr=new O,Fr=new O,zr=new Xe,Es=new Xe,xu=new Pt,Co=new O,As=new O,Ro=new O,_h=new Xe,Xl=new Xe,yh=new Xe,Hs=class extends Rt{constructor(e=new Kr){if(super(),this.isSprite=!0,this.type="Sprite",Ur===void 0){Ur=new Lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Gs(t,5);Ur.setIndex([0,1,2,0,2,3]),Ur.setAttribute("position",new $r(i,3,0,!1)),Ur.setAttribute("uv",new $r(i,2,3,!1))}this.geometry=Ur,this.material=e,this.center=new Xe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Nr.setFromMatrixScale(this.matrixWorld),xu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Nr.multiplyScalar(-Fr.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;Io(Co.set(-.5,-.5,0),Fr,o,Nr,r,s),Io(As.set(.5,-.5,0),Fr,o,Nr,r,s),Io(Ro.set(.5,.5,0),Fr,o,Nr,r,s),_h.set(0,0),Xl.set(1,0),yh.set(1,1);let a=e.ray.intersectTriangle(Co,As,Ro,!1,Ts);if(a===null&&(Io(As.set(-.5,.5,0),Fr,o,Nr,r,s),Xl.set(0,1),a=e.ray.intersectTriangle(Co,Ro,As,!1,Ts),a===null))return;let c=e.ray.origin.distanceTo(Ts);c<e.near||c>e.far||t.push({distance:c,point:Ts.clone(),uv:pi.getInterpolation(Ts,Co,As,Ro,_h,Xl,yh,new Xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Io(n,e,t,i,r,s){zr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Es.x=s*zr.x-r*zr.y,Es.y=r*zr.x+s*zr.y):Es.copy(zr),n.copy(e),n.x+=Es.x,n.y+=Es.y,n.applyMatrix4(xu)}var Zo=class extends gn{constructor(e=null,t=1,i=1,r,s,o,a,c,l=bn,h=bn,u,f){super(null,o,a,c,l,h,r,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jr=class extends Qt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Or=new Pt,vh=new Pt,Po=[],Mh=new ti,Af=new Pt,Cs=new mt,Rs=new vi,It=class extends mt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Af)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Or),Mh.copy(e.boundingBox).applyMatrix4(Or),this.boundingBox.union(Mh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Or),Rs.copy(e.boundingSphere).applyMatrix4(Or),this.boundingSphere.union(Rs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Cs.geometry=this.geometry,Cs.material=this.material,Cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rs.copy(this.boundingSphere),Rs.applyMatrix4(i),e.ray.intersectsSphere(Rs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Or),vh.multiplyMatrices(i,Or),Cs.matrixWorld=vh,Cs.raycast(e,Po);for(let o=0,a=Po.length;o<a;o++){let c=Po[o];c.instanceId=s,c.object=this,t.push(c)}Po.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new jr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Zo(new Float32Array(r*this.count),r,this.count,wa,Jn));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ql=new O,Cf=new O,Rf=new dt,Qn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=ql.subVectors(i,t).cross(Cf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ql),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Rf.getNormalMatrix(e),r=this.coplanarPoint(ql).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zi=new vi,If=new Xe(.5,.5),Do=new O,Qr=class{constructor(e=new Qn,t=new Qn,i=new Qn,r=new Qn,s=new Qn,o=new Qn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Wn,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],u=s[5],f=s[6],d=s[7],g=s[8],x=s[9],m=s[10],p=s[11],_=s[12],S=s[13],v=s[14],I=s[15];if(r[0].setComponents(l-o,d-h,p-g,I-_).normalize(),r[1].setComponents(l+o,d+h,p+g,I+_).normalize(),r[2].setComponents(l+a,d+u,p+x,I+S).normalize(),r[3].setComponents(l-a,d-u,p-x,I-S).normalize(),i)r[4].setComponents(c,f,m,v).normalize(),r[5].setComponents(l-c,d-f,p-m,I-v).normalize();else if(r[4].setComponents(l-c,d-f,p-m,I-v).normalize(),t===Wn)r[5].setComponents(l+c,d+f,p+m,I+v).normalize();else if(t===Fs)r[5].setComponents(c,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){Zi.center.set(0,0,0);let t=If.distanceTo(e.center);return Zi.radius=.7071067811865476+t,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Do.x=r.normal.x>0?e.max.x:e.min.x,Do.y=r.normal.y>0?e.max.y:e.min.y,Do.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Do)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Oi=class extends ni{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Jo=new O,$o=new O,bh=new Pt,Is=new Yr,Lo=new vi,Yl=new O,Sh=new O,tr=class extends Rt{constructor(e=new Lt,t=new Oi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Jo.fromBufferAttribute(t,r-1),$o.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Jo.distanceTo($o);e.setAttribute("lineDistance",new rt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Lo.copy(i.boundingSphere),Lo.applyMatrix4(r),Lo.radius+=s,e.ray.intersectsSphere(Lo)===!1)return;bh.copy(r).invert(),Is.copy(e.ray).applyMatrix4(bh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let p=h.getX(x),_=h.getX(x+1),S=Uo(this,e,Is,c,p,_,x);S&&t.push(S)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(d),p=Uo(this,e,Is,c,x,m,g-1);p&&t.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let p=Uo(this,e,Is,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Uo(this,e,Is,c,g-1,d,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Uo(n,e,t,i,r,s,o){let a=n.geometry.attributes.position;if(Jo.fromBufferAttribute(a,r),$o.fromBufferAttribute(a,s),t.distanceSqToSegment(Jo,$o,Yl,Sh)>i)return;Yl.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Yl);if(!(l<e.near||l>e.far))return{distance:l,point:Sh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Bi=class extends gn{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ws=class extends gn{constructor(e,t,i=Hi,r,s,o,a=bn,c=bn,l,h=Gr,u=1){if(h!==Gr&&h!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,r,s,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Xs=class extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Gt=class n extends Lt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],f=[],d=[],g=0,x=[],m=i/2,p=0;_(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new rt(u,3)),this.setAttribute("normal",new rt(f,3)),this.setAttribute("uv",new rt(d,2));function _(){let v=new O,I=new O,T=0,N=(t-e)/i;for(let F=0;F<=s;F++){let w=[],M=F/s,E=M*(t-e)+e;for(let z=0;z<=r;z++){let P=z/r,R=P*c+a,U=Math.sin(R),G=Math.cos(R);I.x=E*U,I.y=-M*i+m,I.z=E*G,u.push(I.x,I.y,I.z),v.set(U,N,G).normalize(),f.push(v.x,v.y,v.z),d.push(P,1-M),w.push(g++)}x.push(w)}for(let F=0;F<r;F++)for(let w=0;w<s;w++){let M=x[w][F],E=x[w+1][F],z=x[w+1][F+1],P=x[w][F+1];(e>0||w!==0)&&(h.push(M,E,P),T+=3),(t>0||w!==s-1)&&(h.push(E,z,P),T+=3)}l.addGroup(p,T,0),p+=T}function S(v){let I=g,T=new Xe,N=new O,F=0,w=v===!0?e:t,M=v===!0?1:-1;for(let z=1;z<=r;z++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;let E=g;for(let z=0;z<=r;z++){let R=z/r*c+a,U=Math.cos(R),G=Math.sin(R);N.x=w*G,N.y=m*M,N.z=w*U,u.push(N.x,N.y,N.z),f.push(0,M,0),T.x=U*.5+.5,T.y=G*.5*M+.5,d.push(T.x,T.y),g++}for(let z=0;z<r;z++){let P=I+z,R=E+z;v===!0?h.push(R,R+1,P):h.push(R+1,R,P),F+=3}l.addGroup(p,F,v===!0?1:2),p+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Yn=class n extends Gt{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ko=class n extends Lt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],o=[];a(r),l(i),h(),this.setAttribute("position",new rt(s,3)),this.setAttribute("normal",new rt(s.slice(),3)),this.setAttribute("uv",new rt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let S=new O,v=new O,I=new O;for(let T=0;T<t.length;T+=3)d(t[T+0],S),d(t[T+1],v),d(t[T+2],I),c(S,v,I,_)}function c(_,S,v,I){let T=I+1,N=[];for(let F=0;F<=T;F++){N[F]=[];let w=_.clone().lerp(v,F/T),M=S.clone().lerp(v,F/T),E=T-F;for(let z=0;z<=E;z++)z===0&&F===T?N[F][z]=w:N[F][z]=w.clone().lerp(M,z/E)}for(let F=0;F<T;F++)for(let w=0;w<2*(T-F)-1;w++){let M=Math.floor(w/2);w%2===0?(f(N[F][M+1]),f(N[F+1][M]),f(N[F][M])):(f(N[F][M+1]),f(N[F+1][M+1]),f(N[F+1][M]))}}function l(_){let S=new O;for(let v=0;v<s.length;v+=3)S.x=s[v+0],S.y=s[v+1],S.z=s[v+2],S.normalize().multiplyScalar(_),s[v+0]=S.x,s[v+1]=S.y,s[v+2]=S.z}function h(){let _=new O;for(let S=0;S<s.length;S+=3){_.x=s[S+0],_.y=s[S+1],_.z=s[S+2];let v=m(_)/2/Math.PI+.5,I=p(_)/Math.PI+.5;o.push(v,1-I)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){let S=o[_+0],v=o[_+2],I=o[_+4],T=Math.max(S,v,I),N=Math.min(S,v,I);T>.9&&N<.1&&(S<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),I<.2&&(o[_+4]+=1))}}function f(_){s.push(_.x,_.y,_.z)}function d(_,S){let v=_*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function g(){let _=new O,S=new O,v=new O,I=new O,T=new Xe,N=new Xe,F=new Xe;for(let w=0,M=0;w<s.length;w+=9,M+=6){_.set(s[w+0],s[w+1],s[w+2]),S.set(s[w+3],s[w+4],s[w+5]),v.set(s[w+6],s[w+7],s[w+8]),T.set(o[M+0],o[M+1]),N.set(o[M+2],o[M+3]),F.set(o[M+4],o[M+5]),I.copy(_).add(S).add(v).divideScalar(3);let E=m(I);x(T,M+0,_,E),x(N,M+2,S,E),x(F,M+4,v,E)}}function x(_,S,v,I){I<0&&_.x===1&&(o[S]=_.x-1),v.x===0&&v.z===0&&(o[S]=I/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var nr=class n extends Ko{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},qs=class n extends Lt{constructor(e=[new Xe(0,-.5),new Xe(.5,0),new Xe(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=yt(r,0,Math.PI*2);let s=[],o=[],a=[],c=[],l=[],h=1/t,u=new O,f=new Xe,d=new O,g=new O,x=new O,m=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(g)}for(let _=0;_<=t;_++){let S=i+_*h*r,v=Math.sin(S),I=Math.cos(S);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*v,u.y=e[T].y,u.z=e[T].x*I,o.push(u.x,u.y,u.z),f.x=_/t,f.y=T/(e.length-1),a.push(f.x,f.y);let N=c[3*T+0]*v,F=c[3*T+1],w=c[3*T+0]*I;l.push(N,F,w)}}for(let _=0;_<t;_++)for(let S=0;S<e.length-1;S++){let v=S+_*e.length,I=v,T=v+e.length,N=v+e.length+1,F=v+1;s.push(I,T,F),s.push(N,F,T)}this.setIndex(s),this.setAttribute("position",new rt(o,3)),this.setAttribute("uv",new rt(a,2)),this.setAttribute("normal",new rt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var Pn=class n extends Lt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,u=e/a,f=t/c,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let _=p*f-o;for(let S=0;S<l;S++){let v=S*u-s;g.push(v,-_,0),x.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){let S=_+l*p,v=_+l*(p+1),I=_+1+l*(p+1),T=_+1+l*p;d.push(S,v,T),d.push(v,I,T)}this.setIndex(d),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ir=class n extends Lt{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);let a=[],c=[],l=[],h=[],u=e,f=(t-e)/r,d=new O,g=new Xe;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){let p=s+m/i*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<r;x++){let m=x*(i+1);for(let p=0;p<i;p++){let _=p+m,S=_,v=_+i+1,I=_+i+2,T=_+1;a.push(S,v,T),a.push(v,I,T)}}this.setIndex(a),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Tn=class n extends Lt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new O,f=new O,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let _=[],S=p/i,v=0;p===0&&o===0?v=.5/t:p===i&&c===Math.PI&&(v=-.5/t);for(let I=0;I<=t;I++){let T=I/t;u.x=-e*Math.cos(r+T*s)*Math.sin(o+S*a),u.y=e*Math.cos(o+S*a),u.z=e*Math.sin(r+T*s)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(T+v,1-S),_.push(l++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<t;_++){let S=h[p][_+1],v=h[p][_],I=h[p+1][_],T=h[p+1][_+1];(p!==0||o>0)&&d.push(S,v,T),(p!==i-1||c<Math.PI)&&d.push(v,I,T)}this.setIndex(d),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Mi=class n extends Lt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let o=[],a=[],c=[],l=[],h=new O,u=new O,f=new O;for(let d=0;d<=i;d++)for(let g=0;g<=r;g++){let x=g/r*s,m=d/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/r),l.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=r;g++){let x=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,p=(r+1)*(d-1)+g,_=(r+1)*d+g;o.push(x,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ot=class extends ni{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_c,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ys=class extends Ot{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var jo=class extends ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Qo=class extends ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function No(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Pf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var rr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ea=class extends rr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$l,endingEnd:$l}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Kl:s=e,a=2*t-i;break;case jl:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Kl:o=e,c=2*i-t;break;case jl:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(r-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,_=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,S=(-1-d)*m+(1.5+d)*x+.5*g,v=d*m-d*x;for(let I=0;I!==a;++I)s[I]=p*o[h+I]+_*o[l+I]+S*o[c+I]+v*o[u+I];return s}},ta=class extends rr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(r-t),u=1-h;for(let f=0;f!==a;++f)s[f]=o[l+f]*u+o[c+f]*h;return s}},na=class extends rr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Dn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=No(t,this.TimeBufferType),this.values=No(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:No(e.times,Array),values:No(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new na(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ta(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ea(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Us:t=this.InterpolantFactoryMethodDiscrete;break;case Vo:t=this.InterpolantFactoryMethodLinear;break;case Fo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Us;case this.InterpolantFactoryMethodLinear:return Vo;case this.InterpolantFactoryMethodSmooth:return Fo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&Pf(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Fo,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(r)c=!0;else{let u=a*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Dn.prototype.ValueTypeName="";Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=Vo;var ki=class extends Dn{constructor(e,t,i){super(e,t,i)}};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Us;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var ia=class extends Dn{constructor(e,t,i,r){super(e,t,i,r)}};ia.prototype.ValueTypeName="color";var ra=class extends Dn{constructor(e,t,i,r){super(e,t,i,r)}};ra.prototype.ValueTypeName="number";var sa=class extends rr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let h=l+a;l!==h;l+=4)yi.slerpFlat(s,0,o,l-a,o,l,c);return s}},Zs=class extends Dn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new sa(this.times,this.values,this.getValueSize(),e)}};Zs.prototype.ValueTypeName="quaternion";Zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Vi=class extends Dn{constructor(e,t,i){super(e,t,i)}};Vi.prototype.ValueTypeName="string";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=Us;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var oa=class extends Dn{constructor(e,t,i,r){super(e,t,i,r)}};oa.prototype.ValueTypeName="vector";var zo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},aa=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},_u=new aa,es=class{constructor(e){this.manager=e!==void 0?e:_u,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};es.DEFAULT_MATERIAL_NAME="__DEFAULT";var Br=new WeakMap,la=class extends es{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=zo.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let u=Br.get(o);u===void 0&&(u=[],Br.set(o,u)),u.push({onLoad:t,onError:r})}return o}let a=Wr("img");function c(){h(),t&&t(this);let u=Br.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Br.delete(this),s.manager.itemEnd(e)}function l(u){h(),r&&r(u),zo.remove(`image:${e}`);let f=Br.get(this)||[];for(let d=0;d<f.length;d++){let g=f[d];g.onError&&g.onError(u)}Br.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),zo.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}};var Js=class extends es{constructor(e){super(e)}load(e,t,i,r){let s=new gn,o=new la(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},ts=class extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},sr=class extends ts{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new nt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Zl=new Pt,wh=new O,Th=new O,ca=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qr,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;wh.setFromMatrixPosition(e.matrixWorld),t.position.copy(wh),Th.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Th),t.updateMatrixWorld(),Zl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Eh=new Pt,Ps=new O,Jl=new O,ec=class extends ca{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ps.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ps),Jl.copy(i.position),Jl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Jl),i.updateMatrixWorld(),r.makeTranslation(-Ps.x,-Ps.y,-Ps.z),Eh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eh,i.coordinateSystem,i.reversedDepth)}},or=class extends ts{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new ec}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},$s=class extends ks{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},tc=class extends ca{constructor(){super(new $s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ar=class extends ts{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new tc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ha=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var wc="\\[\\]\\.:\\/",Df=new RegExp("["+wc+"]","g"),Tc="[^"+wc+"]",Lf="[^"+wc.replace("\\.","")+"]",Uf=/((?:WC+[\/:])*)/.source.replace("WC",Tc),Nf=/(WCOD+)?/.source.replace("WCOD",Lf),Ff=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tc),zf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tc),Of=new RegExp("^"+Uf+Nf+Ff+zf+"$"),Bf=["material","materials","bones","map"],nc=class{constructor(e,t,i){let r=i||Vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Vt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Df,"")}static parseTrackName(e){let t=Of.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Bf.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[r];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Vt.Composite=nc;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qx=new Float32Array(1);var Ah=new Pt,lr=class{constructor(e,t,i=0,r=1/0){this.ray=new Yr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Zr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ah.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ah),this}intersectObject(e,t=!0,i=[]){return ic(e,this,i,t),i.sort(Ch),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ic(e[r],this,i,t);return i.sort(Ch),i}};function Ch(n,e){return n.distance-e.distance}function ic(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)ic(s[o],e,t,!0)}}function Ec(n,e,t,i){let r=kf(i);switch(t){case mc:return n*e;case wa:return n*e/r.components*r.byteLength;case Ta:return n*e/r.components*r.byteLength;case xc:return n*e*2/r.components*r.byteLength;case Ea:return n*e*2/r.components*r.byteLength;case gc:return n*e*3/r.components*r.byteLength;case Fn:return n*e*4/r.components*r.byteLength;case Aa:return n*e*4/r.components*r.byteLength;case Qs:case eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case to:case no:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ra:case Pa:return Math.max(n,16)*Math.max(e,8)/4;case Ca:case Ia:return Math.max(n,8)*Math.max(e,8)/2;case Da:case La:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case za:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ka:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Va:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ha:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case qa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ya:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Za:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ja:case $a:case Ka:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ja:case Qa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case el:case tl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kf(n){switch(n){case Zn:case uc:return{byteLength:1,components:1};case rs:case dc:case ss:return{byteLength:2,components:1};case ba:case Sa:return{byteLength:2,components:4};case Hi:case Ma:case Jn:return{byteLength:4,components:1};case fc:case pc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gu(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Xf(n){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var qf=`#ifdef USE_ALPHAHASH
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
#endif`,op=`#ifdef USE_BUMPMAP
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
#endif`,om=`#ifdef USE_MORPHNORMALS
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
}`,og=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:qf,alphahash_pars_fragment:Yf,alphamap_fragment:Zf,alphamap_pars_fragment:Jf,alphatest_fragment:$f,alphatest_pars_fragment:Kf,aomap_fragment:jf,aomap_pars_fragment:Qf,batching_pars_vertex:ep,batching_vertex:tp,begin_vertex:np,beginnormal_vertex:ip,bsdfs:rp,iridescence_fragment:sp,bumpmap_pars_fragment:op,clipping_planes_fragment:ap,clipping_planes_pars_fragment:lp,clipping_planes_pars_vertex:cp,clipping_planes_vertex:hp,color_fragment:up,color_pars_fragment:dp,color_pars_vertex:fp,color_vertex:pp,common:mp,cube_uv_reflection_fragment:gp,defaultnormal_vertex:xp,displacementmap_pars_vertex:_p,displacementmap_vertex:yp,emissivemap_fragment:vp,emissivemap_pars_fragment:Mp,colorspace_fragment:bp,colorspace_pars_fragment:Sp,envmap_fragment:wp,envmap_common_pars_fragment:Tp,envmap_pars_fragment:Ep,envmap_pars_vertex:Ap,envmap_physical_pars_fragment:Op,envmap_vertex:Cp,fog_vertex:Rp,fog_pars_vertex:Ip,fog_fragment:Pp,fog_pars_fragment:Dp,gradientmap_pars_fragment:Lp,lightmap_pars_fragment:Up,lights_lambert_fragment:Np,lights_lambert_pars_fragment:Fp,lights_pars_begin:zp,lights_toon_fragment:Bp,lights_toon_pars_fragment:kp,lights_phong_fragment:Vp,lights_phong_pars_fragment:Gp,lights_physical_fragment:Hp,lights_physical_pars_fragment:Wp,lights_fragment_begin:Xp,lights_fragment_maps:qp,lights_fragment_end:Yp,logdepthbuf_fragment:Zp,logdepthbuf_pars_fragment:Jp,logdepthbuf_pars_vertex:$p,logdepthbuf_vertex:Kp,map_fragment:jp,map_pars_fragment:Qp,map_particle_fragment:em,map_particle_pars_fragment:tm,metalnessmap_fragment:nm,metalnessmap_pars_fragment:im,morphinstance_vertex:rm,morphcolor_vertex:sm,morphnormal_vertex:om,morphtarget_pars_vertex:am,morphtarget_vertex:lm,normal_fragment_begin:cm,normal_fragment_maps:hm,normal_pars_fragment:um,normal_pars_vertex:dm,normal_vertex:fm,normalmap_pars_fragment:pm,clearcoat_normal_fragment_begin:mm,clearcoat_normal_fragment_maps:gm,clearcoat_pars_fragment:xm,iridescence_pars_fragment:_m,opaque_fragment:ym,packing:vm,premultiplied_alpha_fragment:Mm,project_vertex:bm,dithering_fragment:Sm,dithering_pars_fragment:wm,roughnessmap_fragment:Tm,roughnessmap_pars_fragment:Em,shadowmap_pars_fragment:Am,shadowmap_pars_vertex:Cm,shadowmap_vertex:Rm,shadowmask_pars_fragment:Im,skinbase_vertex:Pm,skinning_pars_vertex:Dm,skinning_vertex:Lm,skinnormal_vertex:Um,specularmap_fragment:Nm,specularmap_pars_fragment:Fm,tonemapping_fragment:zm,tonemapping_pars_fragment:Om,transmission_fragment:Bm,transmission_pars_fragment:km,uv_pars_fragment:Vm,uv_pars_vertex:Gm,uv_vertex:Hm,worldpos_vertex:Wm,background_vert:Xm,background_frag:qm,backgroundCube_vert:Ym,backgroundCube_frag:Zm,cube_vert:Jm,cube_frag:$m,depth_vert:Km,depth_frag:jm,distanceRGBA_vert:Qm,distanceRGBA_frag:eg,equirect_vert:tg,equirect_frag:ng,linedashed_vert:ig,linedashed_frag:rg,meshbasic_vert:sg,meshbasic_frag:og,meshlambert_vert:ag,meshlambert_frag:lg,meshmatcap_vert:cg,meshmatcap_frag:hg,meshnormal_vert:ug,meshnormal_frag:dg,meshphong_vert:fg,meshphong_frag:pg,meshphysical_vert:mg,meshphysical_frag:gg,meshtoon_vert:xg,meshtoon_frag:_g,points_vert:yg,points_frag:vg,shadow_vert:Mg,shadow_frag:bg,sprite_vert:Sg,sprite_frag:wg},we={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},ri={basic:{uniforms:xn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:xn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new nt(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:xn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:xn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:xn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new nt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:xn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:xn([we.points,we.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:xn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:xn([we.common,we.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:xn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:xn([we.sprite,we.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:xn([we.common,we.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:xn([we.lights,we.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};ri.physical={uniforms:xn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};var il={r:0,b:0,g:0},dr=new qn,Tg=new Pt;function Eg(n,e,t,i,r,s,o){let a=new nt(0),c=s===!0?0:1,l,h,u=null,f=0,d=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function x(S){let v=!1,I=g(S);I===null?p(a,c):I&&I.isColor&&(p(I,1),v=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,v){let I=g(v);I&&(I.isCubeTexture||I.mapping===Ks)?(h===void 0&&(h=new mt(new cn(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:ur(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,N,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),dr.copy(v.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(dr)),h.material.toneMapped=At.getTransfer(I.colorSpace)!==zt,(u!==I||f!==I.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=I,f=I.version,d=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new mt(new Pn(2,2),new wn({name:"BackgroundMaterial",uniforms:ur(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=At.getTransfer(I.colorSpace)!==zt,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(u!==I||f!==I.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=I,f=I.version,d=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,v){S.getRGB(il,Sc(n)),i.buffers.color.setClear(il.r,il.g,il.b,v,o)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:x,addToRenderList:m,dispose:_}}function Ag(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(M,E,z,P,R){let U=!1,G=u(P,z,E);s!==G&&(s=G,l(s.object)),U=d(M,P,z,R),U&&g(M,P,z,R),R!==null&&e.update(R,n.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,v(M,E,z,P),R!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,E,z){let P=z.wireframe===!0,R=i[M.id];R===void 0&&(R={},i[M.id]=R);let U=R[E.id];U===void 0&&(U={},R[E.id]=U);let G=U[P];return G===void 0&&(G=f(c()),U[P]=G),G}function f(M){let E=[],z=[],P=[];for(let R=0;R<t;R++)E[R]=0,z[R]=0,P[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:z,attributeDivisors:P,object:M,attributes:{},index:null}}function d(M,E,z,P){let R=s.attributes,U=E.attributes,G=0,W=z.getAttributes();for(let B in W)if(W[B].location>=0){let ae=R[B],fe=U[B];if(fe===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor)),ae===void 0||ae.attribute!==fe||fe&&ae.data!==fe.data)return!0;G++}return s.attributesNum!==G||s.index!==P}function g(M,E,z,P){let R={},U=E.attributes,G=0,W=z.getAttributes();for(let B in W)if(W[B].location>=0){let ae=U[B];ae===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor));let fe={};fe.attribute=ae,ae&&ae.data&&(fe.data=ae.data),R[B]=fe,G++}s.attributes=R,s.attributesNum=G,s.index=P}function x(){let M=s.newAttributes;for(let E=0,z=M.length;E<z;E++)M[E]=0}function m(M){p(M,0)}function p(M,E){let z=s.newAttributes,P=s.enabledAttributes,R=s.attributeDivisors;z[M]=1,P[M]===0&&(n.enableVertexAttribArray(M),P[M]=1),R[M]!==E&&(n.vertexAttribDivisor(M,E),R[M]=E)}function _(){let M=s.newAttributes,E=s.enabledAttributes;for(let z=0,P=E.length;z<P;z++)E[z]!==M[z]&&(n.disableVertexAttribArray(z),E[z]=0)}function S(M,E,z,P,R,U,G){G===!0?n.vertexAttribIPointer(M,E,z,R,U):n.vertexAttribPointer(M,E,z,P,R,U)}function v(M,E,z,P){x();let R=P.attributes,U=z.getAttributes(),G=E.defaultAttributeValues;for(let W in U){let B=U[W];if(B.location>=0){let ie=R[W];if(ie===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor)),ie!==void 0){let ae=ie.normalized,fe=ie.itemSize,De=e.get(ie);if(De===void 0)continue;let We=De.buffer,ft=De.type,Je=De.bytesPerElement,Z=ft===n.INT||ft===n.UNSIGNED_INT||ie.gpuType===Ma;if(ie.isInterleavedBufferAttribute){let J=ie.data,ge=J.stride,Ie=ie.offset;if(J.isInstancedInterleavedBuffer){for(let Pe=0;Pe<B.locationSize;Pe++)p(B.location+Pe,J.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Pe=0;Pe<B.locationSize;Pe++)m(B.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,We);for(let Pe=0;Pe<B.locationSize;Pe++)S(B.location+Pe,fe/B.locationSize,ft,ae,ge*Je,(Ie+fe/B.locationSize*Pe)*Je,Z)}else{if(ie.isInstancedBufferAttribute){for(let J=0;J<B.locationSize;J++)p(B.location+J,ie.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let J=0;J<B.locationSize;J++)m(B.location+J);n.bindBuffer(n.ARRAY_BUFFER,We);for(let J=0;J<B.locationSize;J++)S(B.location+J,fe/B.locationSize,ft,ae,fe*Je,fe/B.locationSize*J*Je,Z)}}else if(G!==void 0){let ae=G[W];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(B.location,ae);break;case 3:n.vertexAttrib3fv(B.location,ae);break;case 4:n.vertexAttrib4fv(B.location,ae);break;default:n.vertexAttrib1fv(B.location,ae)}}}}_()}function I(){F();for(let M in i){let E=i[M];for(let z in E){let P=E[z];for(let R in P)h(P[R].object),delete P[R];delete E[z]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;let E=i[M.id];for(let z in E){let P=E[z];for(let R in P)h(P[R].object),delete P[R];delete E[z]}delete i[M.id]}function N(M){for(let E in i){let z=i[E];if(z[M.id]===void 0)continue;let P=z[M.id];for(let R in P)h(P[R].object),delete P[R];delete z[M.id]}}function F(){w(),o=!0,s!==r&&(s=r,l(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:T,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function Cg(n,e,t){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,i,1)}function c(l,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Rg(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(N){return!(N!==Fn&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){let F=N===ss&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Zn&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Jn&&!F)}function c(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:I,maxSamples:T}}function Ig(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Qn,a=new dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||r;return r=f,i=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{let _=s?0:i,S=_*4,v=p.clippingState||null;c.value=v,v=h(g,f,S,d);for(let I=0;I!==S;++I)v[I]=t[I];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=d+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=d;S!==x;++S,v+=4)o.copy(u[S]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Pg(n){let e=new WeakMap;function t(o,a){return a===_a?o.mapping=cr:a===ya&&(o.mapping=hr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===_a||a===ya)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Yo(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var cs=4,yu=[.125,.215,.35,.446,.526,.582],mr=20,Ac=new $s,vu=new nt,Cc=null,Rc=0,Ic=0,Pc=!1,pr=(1+Math.sqrt(5))/2,ls=1/pr,Mu=[new O(-pr,ls,0),new O(pr,ls,0),new O(-ls,0,pr),new O(ls,0,pr),new O(0,pr,-ls),new O(0,pr,ls),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Dg=new O,ol=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=Dg}=s;Cc=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),Pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cc,Rc,Ic),this._renderer.xr.enabled=Pc,e.scissorTest=!1,rl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cr||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cc=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),Pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:ss,format:Fn,colorSpace:ji,depthBuffer:!1},r=bu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bu(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lg(s)),this._blurMaterial=Ug(s,e,t)}return r}_compileMaterial(e){let t=new mt(this._lodPlanes[0],e);this._renderer.compile(t,Ac)}_sceneToCubeUV(e,t,i,r,s){let c=new jt(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(vu),u.toneMapping=Si,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));let x=new Sn({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),m=new mt(new cn,x),p=!1,_=e.background;_?_.isColor&&(x.color.copy(_),e.background=null,p=!0):(x.color.copy(vu),p=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[S],s.y,s.z)):v===1?(c.up.set(0,0,l[S]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[S],s.z)):(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[S]));let I=this._cubeSize;rl(r,v*I,S>2?I:0,I,I),u.setRenderTarget(r),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===cr||e.mapping===hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Su());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new mt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;rl(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Ac)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Mu[(r-s-1)%Mu.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new mt(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*mr-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):mr;m>mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mr}`);let p=[],_=0;for(let N=0;N<mr;++N){let F=N/x,w=Math.exp(-F*F/2);p.push(w),N===0?_+=w:N<m&&(_+=2*w)}for(let N=0;N<p.length;N++)p[N]=p[N]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;let v=this._sizeLods[r],I=3*v*(r>S-cs?r-S+cs:0),T=4*(this._cubeSize-v);rl(t,I,T,3*v,2*v),c.setRenderTarget(t),c.render(u,Ac)}};function Lg(n){let e=[],t=[],i=[],r=n,s=n-cs+1+yu.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-cs?c=yu[o-n+cs-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*d),S=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let T=0;T<d;T++){let N=T%3*2/3-1,F=T>2?0:-1,w=[N,F,0,N+2/3,F,0,N+2/3,F+1,0,N,F,0,N+2/3,F+1,0,N,F+1,0];_.set(w,x*g*T),S.set(f,m*g*T);let M=[T,T,T,T,T,T];v.set(M,p*g*T)}let I=new Lt;I.setAttribute("position",new Qt(_,x)),I.setAttribute("uv",new Qt(S,m)),I.setAttribute("faceIndex",new Qt(v,p)),e.push(I),r>cs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function bu(n,e,t){let i=new ei(n,e,t);return i.texture.mapping=Ks,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Ug(n,e,t){let i=new Float32Array(mr),r=new O(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Su(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function wu(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Vc(){return`

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
	`}function Ng(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===_a||c===ya,h=c===cr||c===hr;if(l||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ol(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&r(d)?(t===null&&(t=new ol(n)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Fg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Xr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function zg(n,e,t,i){let r={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let d in f)e.update(f[d],n.ARRAY_BUFFER)}function l(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let _=d.array;x=d.version;for(let S=0,v=_.length;S<v;S+=3){let I=_[S+0],T=_[S+1],N=_[S+2];f.push(I,T,T,N,N,I)}}else if(g!==void 0){let _=g.array;x=g.version;for(let S=0,v=_.length/3-1;S<v;S+=3){let I=S+0,T=S+1,N=S+2;f.push(I,T,T,N,N,I)}}else return;let m=new(bc(f)?Bs:Os)(f,1);m.version=x;let p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Og(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,d){n.drawElements(i,d,s,f*o),t.update(d,i,1)}function l(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,f*o,g),t.update(d,i,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function u(f,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,x,0,g);let p=0;for(let _=0;_<g;_++)p+=d[_]*x[_];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Bg(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function kg(n,e,t){let i=new WeakMap,r=new Ct;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let w=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],S=0;d===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let v=a.attributes.position.count*S,I=1;v>e.maxTextureSize&&(I=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*I*4*u),N=new zs(T,v,I,u);N.type=Jn,N.needsUpdate=!0;let F=S*4;for(let M=0;M<u;M++){let E=m[M],z=p[M],P=_[M],R=v*I*4*M;for(let U=0;U<E.count;U++){let G=U*F;d===!0&&(r.fromBufferAttribute(E,U),T[R+G+0]=r.x,T[R+G+1]=r.y,T[R+G+2]=r.z,T[R+G+3]=0),g===!0&&(r.fromBufferAttribute(z,U),T[R+G+4]=r.x,T[R+G+5]=r.y,T[R+G+6]=r.z,T[R+G+7]=0),x===!0&&(r.fromBufferAttribute(P,U),T[R+G+8]=r.x,T[R+G+9]=r.y,T[R+G+10]=r.z,T[R+G+11]=P.itemSize===4?r.w:1)}}f={count:u,texture:N,size:new Xe(v,I)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Vg(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return u}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var Hu=new gn,Tu=new Ws(1,1),Wu=new zs,Xu=new Xo,qu=new Vs,Eu=[],Au=[],Cu=new Float32Array(16),Ru=new Float32Array(9),Iu=new Float32Array(4);function ds(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Eu[r];if(s===void 0&&(s=new Float32Array(r),Eu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function en(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function tn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function al(n,e){let t=Au[e];t===void 0&&(t=new Int32Array(e),Au[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Gg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Hg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2fv(this.addr,e),tn(t,e)}}function Wg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;n.uniform3fv(this.addr,e),tn(t,e)}}function Xg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4fv(this.addr,e),tn(t,e)}}function qg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Iu.set(i),n.uniformMatrix2fv(this.addr,!1,Iu),tn(t,i)}}function Yg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Ru.set(i),n.uniformMatrix3fv(this.addr,!1,Ru),tn(t,i)}}function Zg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Cu.set(i),n.uniformMatrix4fv(this.addr,!1,Cu),tn(t,i)}}function Jg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $g(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2iv(this.addr,e),tn(t,e)}}function Kg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3iv(this.addr,e),tn(t,e)}}function jg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4iv(this.addr,e),tn(t,e)}}function Qg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function e0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2uiv(this.addr,e),tn(t,e)}}function t0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3uiv(this.addr,e),tn(t,e)}}function n0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4uiv(this.addr,e),tn(t,e)}}function i0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Tu.compareFunction=yc,s=Tu):s=Hu,t.setTexture2D(e||s,r)}function r0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Xu,r)}function s0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||qu,r)}function o0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Wu,r)}function a0(n){switch(n){case 5126:return Gg;case 35664:return Hg;case 35665:return Wg;case 35666:return Xg;case 35674:return qg;case 35675:return Yg;case 35676:return Zg;case 5124:case 35670:return Jg;case 35667:case 35671:return $g;case 35668:case 35672:return Kg;case 35669:case 35673:return jg;case 5125:return Qg;case 36294:return e0;case 36295:return t0;case 36296:return n0;case 35678:case 36198:case 36298:case 36306:case 35682:return i0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return o0}}function l0(n,e){n.uniform1fv(this.addr,e)}function c0(n,e){let t=ds(e,this.size,2);n.uniform2fv(this.addr,t)}function h0(n,e){let t=ds(e,this.size,3);n.uniform3fv(this.addr,t)}function u0(n,e){let t=ds(e,this.size,4);n.uniform4fv(this.addr,t)}function d0(n,e){let t=ds(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function f0(n,e){let t=ds(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function p0(n,e){let t=ds(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function m0(n,e){n.uniform1iv(this.addr,e)}function g0(n,e){n.uniform2iv(this.addr,e)}function x0(n,e){n.uniform3iv(this.addr,e)}function _0(n,e){n.uniform4iv(this.addr,e)}function y0(n,e){n.uniform1uiv(this.addr,e)}function v0(n,e){n.uniform2uiv(this.addr,e)}function M0(n,e){n.uniform3uiv(this.addr,e)}function b0(n,e){n.uniform4uiv(this.addr,e)}function S0(n,e,t){let i=this.cache,r=e.length,s=al(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Hu,s[o])}function w0(n,e,t){let i=this.cache,r=e.length,s=al(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Xu,s[o])}function T0(n,e,t){let i=this.cache,r=e.length,s=al(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||qu,s[o])}function E0(n,e,t){let i=this.cache,r=e.length,s=al(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Wu,s[o])}function A0(n){switch(n){case 5126:return l0;case 35664:return c0;case 35665:return h0;case 35666:return u0;case 35674:return d0;case 35675:return f0;case 35676:return p0;case 5124:case 35670:return m0;case 35667:case 35671:return g0;case 35668:case 35672:return x0;case 35669:case 35673:return _0;case 5125:return y0;case 36294:return v0;case 36295:return M0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return T0;case 36289:case 36303:case 36311:case 36292:return E0}}var Lc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=a0(t.type)}},Uc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A0(t.type)}},Nc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Dc=/(\w+)(\])?(\[|\.)?/g;function Pu(n,e){n.seq.push(e),n.map[e.id]=e}function C0(n,e,t){let i=n.name,r=i.length;for(Dc.lastIndex=0;;){let s=Dc.exec(i),o=Dc.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Pu(t,l===void 0?new Lc(a,n,e):new Uc(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Nc(a),Pu(t,u)),t=u}}}var hs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);C0(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function Du(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var R0=37297,I0=0;function P0(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Lu=new dt;function D0(n){At._getMatrix(Lu,At.workingColorSpace,n);let e=`mat3( ${Lu.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(n)){case Ns:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Uu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+P0(n.getShaderSource(e),a)}else return s}function L0(n,e){let t=D0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function U0(n,e){let t;switch(e){case Kh:t="Linear";break;case jh:t="Reinhard";break;case Qh:t="Cineon";break;case is:t="ACESFilmic";break;case tu:t="AgX";break;case nu:t="Neutral";break;case eu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var sl=new O;function N0(){At.getLuminanceCoefficients(sl);let n=sl.x.toFixed(4),e=sl.y.toFixed(4),t=sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ro).join(`
`)}function z0(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function O0(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ro(n){return n!==""}function Nu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var B0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fc(n){return n.replace(B0,V0)}var k0=new Map;function V0(n,e){let t=_t[e];if(t===void 0){let i=k0.get(e);if(i!==void 0)t=_t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fc(t)}var G0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zu(n){return n.replace(G0,H0)}function H0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ou(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function W0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===sc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ns?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function X0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case cr:case hr:e="ENVMAP_TYPE_CUBE";break;case Ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case hr:e="ENVMAP_MODE_REFRACTION";break}return e}function Y0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case cc:e="ENVMAP_BLENDING_MULTIPLY";break;case Jh:e="ENVMAP_BLENDING_MIX";break;case $h:e="ENVMAP_BLENDING_ADD";break}return e}function Z0(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function J0(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=W0(t),l=X0(t),h=q0(t),u=Y0(t),f=Z0(t),d=F0(t),g=z0(s),x=r.createProgram(),m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ro).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ro).join(`
`),p.length>0&&(p+=`
`)):(m=[Ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),p=[Ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?_t.tonemapping_pars_fragment:"",t.toneMapping!==Si?U0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,L0("linearToOutputTexel",t.outputColorSpace),N0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ro).join(`
`)),o=Fc(o),o=Nu(o,t),o=Fu(o,t),a=Fc(a),a=Nu(a,t),a=Fu(a,t),o=zu(o),a=zu(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=_+m+o,v=_+p+a,I=Du(r,r.VERTEX_SHADER,S),T=Du(r,r.FRAGMENT_SHADER,v);r.attachShader(x,I),r.attachShader(x,T),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function N(E){if(n.debug.checkShaderErrors){let z=r.getProgramInfoLog(x)||"",P=r.getShaderInfoLog(I)||"",R=r.getShaderInfoLog(T)||"",U=z.trim(),G=P.trim(),W=R.trim(),B=!0,ie=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,I,T);else{let ae=Uu(r,I,"vertex"),fe=Uu(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+U+`
`+ae+`
`+fe)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(G===""||W==="")&&(ie=!1);ie&&(E.diagnostics={runnable:B,programLog:U,vertexShader:{log:G,prefix:m},fragmentShader:{log:W,prefix:p}})}r.deleteShader(I),r.deleteShader(T),F=new hs(r,x),w=O0(r,x)}let F;this.getUniforms=function(){return F===void 0&&N(this),F};let w;this.getAttributes=function(){return w===void 0&&N(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,R0)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=I0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=T,this}var $0=0,zc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Oc(e),t.set(e,i)),i}},Oc=class{constructor(e){this.id=$0++,this.code=e,this.usedTimes=0}};function K0(n,e,t,i,r,s,o){let a=new Zr,c=new zc,l=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures,d=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,M,E,z,P){let R=z.fog,U=P.geometry,G=w.isMeshStandardMaterial?z.environment:null,W=(w.isMeshStandardMaterial?t:e).get(w.envMap||G),B=W&&W.mapping===Ks?W.image.height:null,ie=g[w.type];w.precision!==null&&(d=r.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));let ae=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,fe=ae!==void 0?ae.length:0,De=0;U.morphAttributes.position!==void 0&&(De=1),U.morphAttributes.normal!==void 0&&(De=2),U.morphAttributes.color!==void 0&&(De=3);let We,ft,Je,Z;if(ie){let pt=ri[ie];We=pt.vertexShader,ft=pt.fragmentShader}else We=w.vertexShader,ft=w.fragmentShader,c.update(w),Je=c.getVertexShaderID(w),Z=c.getFragmentShaderID(w);let J=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),Ie=P.isInstancedMesh===!0,Pe=P.isBatchedMesh===!0,et=!!w.map,Ne=!!w.matcap,L=!!W,bt=!!w.aoMap,tt=!!w.lightMap,Ye=!!w.bumpMap,Ae=!!w.normalMap,Mt=!!w.displacementMap,Fe=!!w.emissiveMap,$e=!!w.metalnessMap,wt=!!w.roughnessMap,kt=w.anisotropy>0,C=w.clearcoat>0,y=w.dispersion>0,Y=w.iridescence>0,ne=w.sheen>0,le=w.transmission>0,ee=kt&&!!w.anisotropyMap,Ve=C&&!!w.clearcoatMap,pe=C&&!!w.clearcoatNormalMap,Ee=C&&!!w.clearcoatRoughnessMap,Oe=Y&&!!w.iridescenceMap,ce=Y&&!!w.iridescenceThicknessMap,_e=ne&&!!w.sheenColorMap,Ue=ne&&!!w.sheenRoughnessMap,Be=!!w.specularMap,ve=!!w.specularColorMap,Ke=!!w.specularIntensityMap,k=le&&!!w.transmissionMap,he=le&&!!w.thicknessMap,me=!!w.gradientMap,Le=!!w.alphaMap,se=w.alphaTest>0,te=!!w.alphaHash,ze=!!w.extensions,Ze=Si;w.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ze=n.toneMapping);let St={shaderID:ie,shaderType:w.type,shaderName:w.name,vertexShader:We,fragmentShader:ft,defines:w.defines,customVertexShaderID:Je,customFragmentShaderID:Z,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Pe,batchingColor:Pe&&P._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&P.instanceColor!==null,instancingMorph:Ie&&P.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ji,alphaToCoverage:!!w.alphaToCoverage,map:et,matcap:Ne,envMap:L,envMapMode:L&&W.mapping,envMapCubeUVHeight:B,aoMap:bt,lightMap:tt,bumpMap:Ye,normalMap:Ae,displacementMap:f&&Mt,emissiveMap:Fe,normalMapObjectSpace:Ae&&w.normalMapType===ou,normalMapTangentSpace:Ae&&w.normalMapType===_c,metalnessMap:$e,roughnessMap:wt,anisotropy:kt,anisotropyMap:ee,clearcoat:C,clearcoatMap:Ve,clearcoatNormalMap:pe,clearcoatRoughnessMap:Ee,dispersion:y,iridescence:Y,iridescenceMap:Oe,iridescenceThicknessMap:ce,sheen:ne,sheenColorMap:_e,sheenRoughnessMap:Ue,specularMap:Be,specularColorMap:ve,specularIntensityMap:Ke,transmission:le,transmissionMap:k,thicknessMap:he,gradientMap:me,opaque:w.transparent===!1&&w.blending===$i&&w.alphaToCoverage===!1,alphaMap:Le,alphaTest:se,alphaHash:te,combine:w.combine,mapUv:et&&x(w.map.channel),aoMapUv:bt&&x(w.aoMap.channel),lightMapUv:tt&&x(w.lightMap.channel),bumpMapUv:Ye&&x(w.bumpMap.channel),normalMapUv:Ae&&x(w.normalMap.channel),displacementMapUv:Mt&&x(w.displacementMap.channel),emissiveMapUv:Fe&&x(w.emissiveMap.channel),metalnessMapUv:$e&&x(w.metalnessMap.channel),roughnessMapUv:wt&&x(w.roughnessMap.channel),anisotropyMapUv:ee&&x(w.anisotropyMap.channel),clearcoatMapUv:Ve&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(w.sheenRoughnessMap.channel),specularMapUv:Be&&x(w.specularMap.channel),specularColorMapUv:ve&&x(w.specularColorMap.channel),specularIntensityMapUv:Ke&&x(w.specularIntensityMap.channel),transmissionMapUv:k&&x(w.transmissionMap.channel),thicknessMapUv:he&&x(w.thicknessMap.channel),alphaMapUv:Le&&x(w.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Ae||kt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(et||Le),fog:!!R,useFog:w.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ge,skinning:P.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:De,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&E.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,decodeVideoTexture:et&&w.map.isVideoTexture===!0&&At.getTransfer(w.map.colorSpace)===zt,decodeVideoTextureEmissive:Fe&&w.emissiveMap.isVideoTexture===!0&&At.getTransfer(w.emissiveMap.colorSpace)===zt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ht,flipSided:w.side===hn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ze&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&w.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function p(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let E in w.defines)M.push(E),M.push(w.defines[E]);return w.isRawShaderMaterial===!1&&(_(M,w),S(M,w),M.push(n.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function _(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function S(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){let M=g[w.type],E;if(M){let z=ri[M];E=nl.clone(z.uniforms)}else E=w.uniforms;return E}function I(w,M){let E;for(let z=0,P=h.length;z<P;z++){let R=h[z];if(R.cacheKey===M){E=R,++E.usedTimes;break}}return E===void 0&&(E=new J0(n,M,w,s),h.push(E)),E}function T(w){if(--w.usedTimes===0){let M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function N(w){c.remove(w)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:I,releaseProgram:T,releaseShaderCache:N,programs:h,dispose:F}}function j0(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Q0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Bu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ku(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u,f,d,g,x,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function a(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function c(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||Q0),i.length>1&&i.sort(f||Bu),r.length>1&&r.sort(f||Bu)}function h(){for(let u=e,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function ex(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new ku,n.set(i,[o])):r>=s.length?(o=new ku,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function tx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new nt};break;case"SpotLight":t={position:new O,direction:new O,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function nx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var ix=0;function rx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function sx(n){let e=new tx,t=nx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);let r=new O,s=new Pt,o=new Pt;function a(l){let h=0,u=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,_=0,S=0,v=0,I=0,T=0,N=0;l.sort(rx);for(let w=0,M=l.length;w<M;w++){let E=l[w],z=E.color,P=E.intensity,R=E.distance,U=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=z.r*P,u+=z.g*P,f+=z.b*P;else if(E.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(E.sh.coefficients[G],P);N++}else if(E.isDirectionalLight){let G=e.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let W=E.shadow,B=t.get(E);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,i.directionalShadow[d]=B,i.directionalShadowMap[d]=U,i.directionalShadowMatrix[d]=E.shadow.matrix,_++}i.directional[d]=G,d++}else if(E.isSpotLight){let G=e.get(E);G.position.setFromMatrixPosition(E.matrixWorld),G.color.copy(z).multiplyScalar(P),G.distance=R,G.coneCos=Math.cos(E.angle),G.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),G.decay=E.decay,i.spot[x]=G;let W=E.shadow;if(E.map&&(i.spotLightMap[I]=E.map,I++,W.updateMatrices(E),E.castShadow&&T++),i.spotLightMatrix[x]=W.matrix,E.castShadow){let B=t.get(E);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,i.spotShadow[x]=B,i.spotShadowMap[x]=U,v++}x++}else if(E.isRectAreaLight){let G=e.get(E);G.color.copy(z).multiplyScalar(P),G.halfWidth.set(E.width*.5,0,0),G.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=G,m++}else if(E.isPointLight){let G=e.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),G.distance=E.distance,G.decay=E.decay,E.castShadow){let W=E.shadow,B=t.get(E);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,B.shadowCameraNear=W.camera.near,B.shadowCameraFar=W.camera.far,i.pointShadow[g]=B,i.pointShadowMap[g]=U,i.pointShadowMatrix[g]=E.shadow.matrix,S++}i.point[g]=G,g++}else if(E.isHemisphereLight){let G=e.get(E);G.skyColor.copy(E.color).multiplyScalar(P),G.groundColor.copy(E.groundColor).multiplyScalar(P),i.hemi[p]=G,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let F=i.hash;(F.directionalLength!==d||F.pointLength!==g||F.spotLength!==x||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==_||F.numPointShadows!==S||F.numSpotShadows!==v||F.numSpotMaps!==I||F.numLightProbes!==N)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=v+I-T,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=N,F.directionalLength=d,F.pointLength=g,F.spotLength=x,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=_,F.numPointShadows=S,F.numSpotShadows=v,F.numSpotMaps=I,F.numLightProbes=N,i.version=ix++)}function c(l,h){let u=0,f=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){let S=l[p];if(S.isDirectionalLight){let v=i.directional[u];v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),u++}else if(S.isSpotLight){let v=i.spot[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(S.isRectAreaLight){let v=i.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function Vu(n){let e=new sx(n),t=[],i=[];function r(h){l.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function ox(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Vu(n),e.set(r,[a])):s>=o.length?(a=new Vu(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var ax=`void main() {
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
}`;function cx(n,e,t){let i=new Qr,r=new Xe,s=new Xe,o=new Ct,a=new jo({depthPacking:su}),c=new Qo,l={},h=t.maxTextureSize,u={[xi]:hn,[hn]:xi,[Ht]:Ht},f=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:ax,fragmentShader:lx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Lt;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new mt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc;let p=this.type;this.render=function(T,N,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let w=n.getRenderTarget(),M=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),z=n.state;z.setBlending(bi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let P=p!==ii&&this.type===ii,R=p===ii&&this.type!==ii;for(let U=0,G=T.length;U<G;U++){let W=T[U],B=W.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);let ie=B.getFrameExtents();if(r.multiply(ie),s.copy(B.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ie.x),r.x=s.x*ie.x,B.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ie.y),r.y=s.y*ie.y,B.mapSize.y=s.y)),B.map===null||P===!0||R===!0){let fe=this.type!==ii?{minFilter:bn,magFilter:bn}:{};B.map!==null&&B.map.dispose(),B.map=new ei(r.x,r.y,fe),B.map.texture.name=W.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();let ae=B.getViewportCount();for(let fe=0;fe<ae;fe++){let De=B.getViewport(fe);o.set(s.x*De.x,s.y*De.y,s.x*De.z,s.y*De.w),z.viewport(o),B.updateMatrices(W,fe),i=B.getFrustum(),v(N,F,B.camera,W,this.type)}B.isPointLightShadow!==!0&&this.type===ii&&_(B,F),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,M,E)};function _(T,N){let F=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ei(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(N,null,F,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(N,null,F,d,x,null)}function S(T,N,F,w){let M=null,E=F.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(E!==void 0)M=E;else if(M=F.isPointLight===!0?c:a,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let z=M.uuid,P=N.uuid,R=l[z];R===void 0&&(R={},l[z]=R);let U=R[P];U===void 0&&(U=M.clone(),R[P]=U,N.addEventListener("dispose",I)),M=U}if(M.visible=N.visible,M.wireframe=N.wireframe,w===ii?M.side=N.shadowSide!==null?N.shadowSide:N.side:M.side=N.shadowSide!==null?N.shadowSide:u[N.side],M.alphaMap=N.alphaMap,M.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,M.map=N.map,M.clipShadows=N.clipShadows,M.clippingPlanes=N.clippingPlanes,M.clipIntersection=N.clipIntersection,M.displacementMap=N.displacementMap,M.displacementScale=N.displacementScale,M.displacementBias=N.displacementBias,M.wireframeLinewidth=N.wireframeLinewidth,M.linewidth=N.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let z=n.properties.get(M);z.light=F}return M}function v(T,N,F,w,M){if(T.visible===!1)return;if(T.layers.test(N.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===ii)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld);let P=e.update(T),R=T.material;if(Array.isArray(R)){let U=P.groups;for(let G=0,W=U.length;G<W;G++){let B=U[G],ie=R[B.materialIndex];if(ie&&ie.visible){let ae=S(T,ie,w,M);T.onBeforeShadow(n,T,N,F,P,ae,B),n.renderBufferDirect(F,null,P,ae,T,B),T.onAfterShadow(n,T,N,F,P,ae,B)}}}else if(R.visible){let U=S(T,R,w,M);T.onBeforeShadow(n,T,N,F,P,U,null),n.renderBufferDirect(F,null,P,U,T,null),T.onAfterShadow(n,T,N,F,P,U,null)}}let z=T.children;for(let P=0,R=z.length;P<R;P++)v(z[P],N,F,w,M)}function I(T){T.target.removeEventListener("dispose",I);for(let F in l){let w=l[F],M=T.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var hx={[ua]:da,[fa]:ga,[pa]:xa,[Ki]:ma,[da]:ua,[ga]:fa,[xa]:pa,[ma]:Ki};function ux(n,e){function t(){let k=!1,he=new Ct,me=null,Le=new Ct(0,0,0,0);return{setMask:function(se){me!==se&&!k&&(n.colorMask(se,se,se,se),me=se)},setLocked:function(se){k=se},setClear:function(se,te,ze,Ze,St){St===!0&&(se*=Ze,te*=Ze,ze*=Ze),he.set(se,te,ze,Ze),Le.equals(he)===!1&&(n.clearColor(se,te,ze,Ze),Le.copy(he))},reset:function(){k=!1,me=null,Le.set(-1,0,0,0)}}}function i(){let k=!1,he=!1,me=null,Le=null,se=null;return{setReversed:function(te){if(he!==te){let ze=e.get("EXT_clip_control");te?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),he=te;let Ze=se;se=null,this.setClear(Ze)}},getReversed:function(){return he},setTest:function(te){te?J(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(te){me!==te&&!k&&(n.depthMask(te),me=te)},setFunc:function(te){if(he&&(te=hx[te]),Le!==te){switch(te){case ua:n.depthFunc(n.NEVER);break;case da:n.depthFunc(n.ALWAYS);break;case fa:n.depthFunc(n.LESS);break;case Ki:n.depthFunc(n.LEQUAL);break;case pa:n.depthFunc(n.EQUAL);break;case ma:n.depthFunc(n.GEQUAL);break;case ga:n.depthFunc(n.GREATER);break;case xa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Le=te}},setLocked:function(te){k=te},setClear:function(te){se!==te&&(he&&(te=1-te),n.clearDepth(te),se=te)},reset:function(){k=!1,me=null,Le=null,se=null,he=!1}}}function r(){let k=!1,he=null,me=null,Le=null,se=null,te=null,ze=null,Ze=null,St=null;return{setTest:function(pt){k||(pt?J(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(pt){he!==pt&&!k&&(n.stencilMask(pt),he=pt)},setFunc:function(pt,un,vn){(me!==pt||Le!==un||se!==vn)&&(n.stencilFunc(pt,un,vn),me=pt,Le=un,se=vn)},setOp:function(pt,un,vn){(te!==pt||ze!==un||Ze!==vn)&&(n.stencilOp(pt,un,vn),te=pt,ze=un,Ze=vn)},setLocked:function(pt){k=pt},setClear:function(pt){St!==pt&&(n.clearStencil(pt),St=pt)},reset:function(){k=!1,he=null,me=null,Le=null,se=null,te=null,ze=null,Ze=null,St=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,_=null,S=null,v=null,I=null,T=null,N=new nt(0,0,0),F=0,w=!1,M=null,E=null,z=null,P=null,R=null,U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,W=0,B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(B)[1]),G=W>=1):B.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),G=W>=2);let ie=null,ae={},fe=n.getParameter(n.SCISSOR_BOX),De=n.getParameter(n.VIEWPORT),We=new Ct().fromArray(fe),ft=new Ct().fromArray(De);function Je(k,he,me,Le){let se=new Uint8Array(4),te=n.createTexture();n.bindTexture(k,te),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<me;ze++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,Le,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(he+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return te}let Z={};Z[n.TEXTURE_2D]=Je(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=Je(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=Je(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=Je(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(n.DEPTH_TEST),o.setFunc(Ki),Ye(!1),Ae(rc),J(n.CULL_FACE),bt(bi);function J(k){h[k]!==!0&&(n.enable(k),h[k]=!0)}function ge(k){h[k]!==!1&&(n.disable(k),h[k]=!1)}function Ie(k,he){return u[k]!==he?(n.bindFramebuffer(k,he),u[k]=he,k===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=he),k===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=he),!0):!1}function Pe(k,he){let me=d,Le=!1;if(k){me=f.get(he),me===void 0&&(me=[],f.set(he,me));let se=k.textures;if(me.length!==se.length||me[0]!==n.COLOR_ATTACHMENT0){for(let te=0,ze=se.length;te<ze;te++)me[te]=n.COLOR_ATTACHMENT0+te;me.length=se.length,Le=!0}}else me[0]!==n.BACK&&(me[0]=n.BACK,Le=!0);Le&&n.drawBuffers(me)}function et(k){return g!==k?(n.useProgram(k),g=k,!0):!1}let Ne={[zi]:n.FUNC_ADD,[Dh]:n.FUNC_SUBTRACT,[Lh]:n.FUNC_REVERSE_SUBTRACT};Ne[Uh]=n.MIN,Ne[Nh]=n.MAX;let L={[Fh]:n.ZERO,[zh]:n.ONE,[Oh]:n.SRC_COLOR,[Oo]:n.SRC_ALPHA,[Wh]:n.SRC_ALPHA_SATURATE,[Gh]:n.DST_COLOR,[kh]:n.DST_ALPHA,[Bh]:n.ONE_MINUS_SRC_COLOR,[Bo]:n.ONE_MINUS_SRC_ALPHA,[Hh]:n.ONE_MINUS_DST_COLOR,[Vh]:n.ONE_MINUS_DST_ALPHA,[Xh]:n.CONSTANT_COLOR,[qh]:n.ONE_MINUS_CONSTANT_COLOR,[Yh]:n.CONSTANT_ALPHA,[Zh]:n.ONE_MINUS_CONSTANT_ALPHA};function bt(k,he,me,Le,se,te,ze,Ze,St,pt){if(k===bi){x===!0&&(ge(n.BLEND),x=!1);return}if(x===!1&&(J(n.BLEND),x=!0),k!==Ph){if(k!==m||pt!==w){if((p!==zi||v!==zi)&&(n.blendEquation(n.FUNC_ADD),p=zi,v=zi),pt)switch(k){case $i:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oc:n.blendFunc(n.ONE,n.ONE);break;case ac:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case $i:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ac:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}_=null,S=null,I=null,T=null,N.set(0,0,0),F=0,m=k,w=pt}return}se=se||he,te=te||me,ze=ze||Le,(he!==p||se!==v)&&(n.blendEquationSeparate(Ne[he],Ne[se]),p=he,v=se),(me!==_||Le!==S||te!==I||ze!==T)&&(n.blendFuncSeparate(L[me],L[Le],L[te],L[ze]),_=me,S=Le,I=te,T=ze),(Ze.equals(N)===!1||St!==F)&&(n.blendColor(Ze.r,Ze.g,Ze.b,St),N.copy(Ze),F=St),m=k,w=!1}function tt(k,he){k.side===Ht?ge(n.CULL_FACE):J(n.CULL_FACE);let me=k.side===hn;he&&(me=!me),Ye(me),k.blending===$i&&k.transparent===!1?bt(bi):bt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);let Le=k.stencilWrite;a.setTest(Le),Le&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Fe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(k){M!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),M=k)}function Ae(k){k!==Rh?(J(n.CULL_FACE),k!==E&&(k===rc?n.cullFace(n.BACK):k===Ih?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),E=k}function Mt(k){k!==z&&(G&&n.lineWidth(k),z=k)}function Fe(k,he,me){k?(J(n.POLYGON_OFFSET_FILL),(P!==he||R!==me)&&(n.polygonOffset(he,me),P=he,R=me)):ge(n.POLYGON_OFFSET_FILL)}function $e(k){k?J(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function wt(k){k===void 0&&(k=n.TEXTURE0+U-1),ie!==k&&(n.activeTexture(k),ie=k)}function kt(k,he,me){me===void 0&&(ie===null?me=n.TEXTURE0+U-1:me=ie);let Le=ae[me];Le===void 0&&(Le={type:void 0,texture:void 0},ae[me]=Le),(Le.type!==k||Le.texture!==he)&&(ie!==me&&(n.activeTexture(me),ie=me),n.bindTexture(k,he||Z[k]),Le.type=k,Le.texture=he)}function C(){let k=ae[ie];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Y(){try{n.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{n.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function le(){try{n.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{n.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ve(){try{n.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{n.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{n.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Oe(){try{n.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ce(){try{n.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(k){We.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),We.copy(k))}function Ue(k){ft.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),ft.copy(k))}function Be(k,he){let me=l.get(he);me===void 0&&(me=new WeakMap,l.set(he,me));let Le=me.get(k);Le===void 0&&(Le=n.getUniformBlockIndex(he,k.name),me.set(k,Le))}function ve(k,he){let Le=l.get(he).get(k);c.get(he)!==Le&&(n.uniformBlockBinding(he,Le,k.__bindingPointIndex),c.set(he,Le))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ie=null,ae={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,_=null,S=null,v=null,I=null,T=null,N=new nt(0,0,0),F=0,w=!1,M=null,E=null,z=null,P=null,R=null,We.set(0,0,n.canvas.width,n.canvas.height),ft.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:ge,bindFramebuffer:Ie,drawBuffers:Pe,useProgram:et,setBlending:bt,setMaterial:tt,setFlipSided:Ye,setCullFace:Ae,setLineWidth:Mt,setPolygonOffset:Fe,setScissorTest:$e,activeTexture:wt,bindTexture:kt,unbindTexture:C,compressedTexImage2D:y,compressedTexImage3D:Y,texImage2D:Oe,texImage3D:ce,updateUBOMapping:Be,uniformBlockBinding:ve,texStorage2D:pe,texStorage3D:Ee,texSubImage2D:ne,texSubImage3D:le,compressedTexSubImage2D:ee,compressedTexSubImage3D:Ve,scissor:_e,viewport:Ue,reset:Ke}}function dx(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,y){return d?new OffscreenCanvas(C,y):Wr("canvas")}function x(C,y,Y){let ne=1,le=kt(C);if((le.width>Y||le.height>Y)&&(ne=Y/Math.max(le.width,le.height)),ne<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ee=Math.floor(ne*le.width),Ve=Math.floor(ne*le.height);u===void 0&&(u=g(ee,Ve));let pe=y?g(ee,Ve):u;return pe.width=ee,pe.height=Ve,pe.getContext("2d").drawImage(C,0,0,ee,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ee+"x"+Ve+")."),pe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function _(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(C,y,Y,ne,le=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ee=y;if(y===n.RED&&(Y===n.FLOAT&&(ee=n.R32F),Y===n.HALF_FLOAT&&(ee=n.R16F),Y===n.UNSIGNED_BYTE&&(ee=n.R8)),y===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ee=n.R8UI),Y===n.UNSIGNED_SHORT&&(ee=n.R16UI),Y===n.UNSIGNED_INT&&(ee=n.R32UI),Y===n.BYTE&&(ee=n.R8I),Y===n.SHORT&&(ee=n.R16I),Y===n.INT&&(ee=n.R32I)),y===n.RG&&(Y===n.FLOAT&&(ee=n.RG32F),Y===n.HALF_FLOAT&&(ee=n.RG16F),Y===n.UNSIGNED_BYTE&&(ee=n.RG8)),y===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ee=n.RG8UI),Y===n.UNSIGNED_SHORT&&(ee=n.RG16UI),Y===n.UNSIGNED_INT&&(ee=n.RG32UI),Y===n.BYTE&&(ee=n.RG8I),Y===n.SHORT&&(ee=n.RG16I),Y===n.INT&&(ee=n.RG32I)),y===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),Y===n.UNSIGNED_INT&&(ee=n.RGB32UI),Y===n.BYTE&&(ee=n.RGB8I),Y===n.SHORT&&(ee=n.RGB16I),Y===n.INT&&(ee=n.RGB32I)),y===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),Y===n.UNSIGNED_INT&&(ee=n.RGBA32UI),Y===n.BYTE&&(ee=n.RGBA8I),Y===n.SHORT&&(ee=n.RGBA16I),Y===n.INT&&(ee=n.RGBA32I)),y===n.RGB&&(Y===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(ee=n.R11F_G11F_B10F)),y===n.RGBA){let Ve=le?Ns:At.getTransfer(ne);Y===n.FLOAT&&(ee=n.RGBA32F),Y===n.HALF_FLOAT&&(ee=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(ee=Ve===zt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(C,y){let Y;return C?y===null||y===Hi||y===os?Y=n.DEPTH24_STENCIL8:y===Jn?Y=n.DEPTH32F_STENCIL8:y===rs&&(Y=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Hi||y===os?Y=n.DEPTH_COMPONENT24:y===Jn?Y=n.DEPTH_COMPONENT32F:y===rs&&(Y=n.DEPTH_COMPONENT16),Y}function I(C,y){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==bn&&C.minFilter!==Xn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function T(C){let y=C.target;y.removeEventListener("dispose",T),F(y),y.isVideoTexture&&h.delete(y)}function N(C){let y=C.target;y.removeEventListener("dispose",N),M(y)}function F(C){let y=i.get(C);if(y.__webglInit===void 0)return;let Y=C.source,ne=f.get(Y);if(ne){let le=ne[y.__cacheKey];le.usedTimes--,le.usedTimes===0&&w(C),Object.keys(ne).length===0&&f.delete(Y)}i.remove(C)}function w(C){let y=i.get(C);n.deleteTexture(y.__webglTexture);let Y=C.source,ne=f.get(Y);delete ne[y.__cacheKey],o.memory.textures--}function M(C){let y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(y.__webglFramebuffer[ne]))for(let le=0;le<y.__webglFramebuffer[ne].length;le++)n.deleteFramebuffer(y.__webglFramebuffer[ne][le]);else n.deleteFramebuffer(y.__webglFramebuffer[ne]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[ne])}else{if(Array.isArray(y.__webglFramebuffer))for(let ne=0;ne<y.__webglFramebuffer.length;ne++)n.deleteFramebuffer(y.__webglFramebuffer[ne]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ne=0;ne<y.__webglColorRenderbuffer.length;ne++)y.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[ne]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let Y=C.textures;for(let ne=0,le=Y.length;ne<le;ne++){let ee=i.get(Y[ne]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(Y[ne])}i.remove(C)}let E=0;function z(){E=0}function P(){let C=E;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),E+=1,C}function R(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function U(C,y){let Y=i.get(C);if(C.isVideoTexture&&$e(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&Y.__version!==C.version){let ne=C.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(Y,C,y);return}}else C.isExternalTexture&&(Y.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+y)}function G(C,y){let Y=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){Z(Y,C,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+y)}function W(C,y){let Y=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){Z(Y,C,y);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+y)}function B(C,y){let Y=i.get(C);if(C.version>0&&Y.__version!==C.version){J(Y,C,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+y)}let ie={[Vr]:n.REPEAT,[Fi]:n.CLAMP_TO_EDGE,[ko]:n.MIRRORED_REPEAT},ae={[bn]:n.NEAREST,[iu]:n.NEAREST_MIPMAP_NEAREST,[js]:n.NEAREST_MIPMAP_LINEAR,[Xn]:n.LINEAR,[va]:n.LINEAR_MIPMAP_NEAREST,[Gi]:n.LINEAR_MIPMAP_LINEAR},fe={[au]:n.NEVER,[fu]:n.ALWAYS,[lu]:n.LESS,[yc]:n.LEQUAL,[cu]:n.EQUAL,[du]:n.GEQUAL,[hu]:n.GREATER,[uu]:n.NOTEQUAL};function De(C,y){if(y.type===Jn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Xn||y.magFilter===va||y.magFilter===js||y.magFilter===Gi||y.minFilter===Xn||y.minFilter===va||y.minFilter===js||y.minFilter===Gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,ie[y.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ie[y.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ie[y.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ae[y.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ae[y.minFilter]),y.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,fe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===bn||y.minFilter!==js&&y.minFilter!==Gi||y.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function We(C,y){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",T));let ne=y.source,le=f.get(ne);le===void 0&&(le={},f.set(ne,le));let ee=R(y);if(ee!==C.__cacheKey){le[ee]===void 0&&(le[ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),le[ee].usedTimes++;let Ve=le[C.__cacheKey];Ve!==void 0&&(le[C.__cacheKey].usedTimes--,Ve.usedTimes===0&&w(y)),C.__cacheKey=ee,C.__webglTexture=le[ee].texture}return Y}function ft(C,y,Y){return Math.floor(Math.floor(C/Y)/y)}function Je(C,y,Y,ne){let ee=C.updateRanges;if(ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,Y,ne,y.data);else{ee.sort((ce,_e)=>ce.start-_e.start);let Ve=0;for(let ce=1;ce<ee.length;ce++){let _e=ee[Ve],Ue=ee[ce],Be=_e.start+_e.count,ve=ft(Ue.start,y.width,4),Ke=ft(_e.start,y.width,4);Ue.start<=Be+1&&ve===Ke&&ft(Ue.start+Ue.count-1,y.width,4)===ve?_e.count=Math.max(_e.count,Ue.start+Ue.count-_e.start):(++Ve,ee[Ve]=Ue)}ee.length=Ve+1;let pe=n.getParameter(n.UNPACK_ROW_LENGTH),Ee=n.getParameter(n.UNPACK_SKIP_PIXELS),Oe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let ce=0,_e=ee.length;ce<_e;ce++){let Ue=ee[ce],Be=Math.floor(Ue.start/4),ve=Math.ceil(Ue.count/4),Ke=Be%y.width,k=Math.floor(Be/y.width),he=ve,me=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,Ke,k,he,me,Y,ne,y.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ee),n.pixelStorei(n.UNPACK_SKIP_ROWS,Oe)}}function Z(C,y,Y){let ne=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ne=n.TEXTURE_3D);let le=We(C,y),ee=y.source;t.bindTexture(ne,C.__webglTexture,n.TEXTURE0+Y);let Ve=i.get(ee);if(ee.version!==Ve.__version||le===!0){t.activeTexture(n.TEXTURE0+Y);let pe=At.getPrimaries(At.workingColorSpace),Ee=y.colorSpace===$n?null:At.getPrimaries(y.colorSpace),Oe=y.colorSpace===$n||pe===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let ce=x(y.image,!1,r.maxTextureSize);ce=wt(y,ce);let _e=s.convert(y.format,y.colorSpace),Ue=s.convert(y.type),Be=S(y.internalFormat,_e,Ue,y.colorSpace,y.isVideoTexture);De(ne,y);let ve,Ke=y.mipmaps,k=y.isVideoTexture!==!0,he=Ve.__version===void 0||le===!0,me=ee.dataReady,Le=I(y,ce);if(y.isDepthTexture)Be=v(y.format===as,y.type),he&&(k?t.texStorage2D(n.TEXTURE_2D,1,Be,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Be,ce.width,ce.height,0,_e,Ue,null));else if(y.isDataTexture)if(Ke.length>0){k&&he&&t.texStorage2D(n.TEXTURE_2D,Le,Be,Ke[0].width,Ke[0].height);for(let se=0,te=Ke.length;se<te;se++)ve=Ke[se],k?me&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,ve.width,ve.height,_e,Ue,ve.data):t.texImage2D(n.TEXTURE_2D,se,Be,ve.width,ve.height,0,_e,Ue,ve.data);y.generateMipmaps=!1}else k?(he&&t.texStorage2D(n.TEXTURE_2D,Le,Be,ce.width,ce.height),me&&Je(y,ce,_e,Ue)):t.texImage2D(n.TEXTURE_2D,0,Be,ce.width,ce.height,0,_e,Ue,ce.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){k&&he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Be,Ke[0].width,Ke[0].height,ce.depth);for(let se=0,te=Ke.length;se<te;se++)if(ve=Ke[se],y.format!==Fn)if(_e!==null)if(k){if(me)if(y.layerUpdates.size>0){let ze=Ec(ve.width,ve.height,y.format,y.type);for(let Ze of y.layerUpdates){let St=ve.data.subarray(Ze*ze/ve.data.BYTES_PER_ELEMENT,(Ze+1)*ze/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,Ze,ve.width,ve.height,1,_e,St)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,ve.width,ve.height,ce.depth,_e,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Be,ve.width,ve.height,ce.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?me&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,ve.width,ve.height,ce.depth,_e,Ue,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Be,ve.width,ve.height,ce.depth,0,_e,Ue,ve.data)}else{k&&he&&t.texStorage2D(n.TEXTURE_2D,Le,Be,Ke[0].width,Ke[0].height);for(let se=0,te=Ke.length;se<te;se++)ve=Ke[se],y.format!==Fn?_e!==null?k?me&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,ve.width,ve.height,_e,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Be,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?me&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,ve.width,ve.height,_e,Ue,ve.data):t.texImage2D(n.TEXTURE_2D,se,Be,ve.width,ve.height,0,_e,Ue,ve.data)}else if(y.isDataArrayTexture)if(k){if(he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Be,ce.width,ce.height,ce.depth),me)if(y.layerUpdates.size>0){let se=Ec(ce.width,ce.height,y.format,y.type);for(let te of y.layerUpdates){let ze=ce.data.subarray(te*se/ce.data.BYTES_PER_ELEMENT,(te+1)*se/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,ce.width,ce.height,1,_e,Ue,ze)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,_e,Ue,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,ce.width,ce.height,ce.depth,0,_e,Ue,ce.data);else if(y.isData3DTexture)k?(he&&t.texStorage3D(n.TEXTURE_3D,Le,Be,ce.width,ce.height,ce.depth),me&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,_e,Ue,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Be,ce.width,ce.height,ce.depth,0,_e,Ue,ce.data);else if(y.isFramebufferTexture){if(he)if(k)t.texStorage2D(n.TEXTURE_2D,Le,Be,ce.width,ce.height);else{let se=ce.width,te=ce.height;for(let ze=0;ze<Le;ze++)t.texImage2D(n.TEXTURE_2D,ze,Be,se,te,0,_e,Ue,null),se>>=1,te>>=1}}else if(Ke.length>0){if(k&&he){let se=kt(Ke[0]);t.texStorage2D(n.TEXTURE_2D,Le,Be,se.width,se.height)}for(let se=0,te=Ke.length;se<te;se++)ve=Ke[se],k?me&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,_e,Ue,ve):t.texImage2D(n.TEXTURE_2D,se,Be,_e,Ue,ve);y.generateMipmaps=!1}else if(k){if(he){let se=kt(ce);t.texStorage2D(n.TEXTURE_2D,Le,Be,se.width,se.height)}me&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Ue,ce)}else t.texImage2D(n.TEXTURE_2D,0,Be,_e,Ue,ce);m(y)&&p(ne),Ve.__version=ee.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function J(C,y,Y){if(y.image.length!==6)return;let ne=We(C,y),le=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+Y);let ee=i.get(le);if(le.version!==ee.__version||ne===!0){t.activeTexture(n.TEXTURE0+Y);let Ve=At.getPrimaries(At.workingColorSpace),pe=y.colorSpace===$n?null:At.getPrimaries(y.colorSpace),Ee=y.colorSpace===$n||Ve===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let Oe=y.isCompressedTexture||y.image[0].isCompressedTexture,ce=y.image[0]&&y.image[0].isDataTexture,_e=[];for(let te=0;te<6;te++)!Oe&&!ce?_e[te]=x(y.image[te],!0,r.maxCubemapSize):_e[te]=ce?y.image[te].image:y.image[te],_e[te]=wt(y,_e[te]);let Ue=_e[0],Be=s.convert(y.format,y.colorSpace),ve=s.convert(y.type),Ke=S(y.internalFormat,Be,ve,y.colorSpace),k=y.isVideoTexture!==!0,he=ee.__version===void 0||ne===!0,me=le.dataReady,Le=I(y,Ue);De(n.TEXTURE_CUBE_MAP,y);let se;if(Oe){k&&he&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,Ke,Ue.width,Ue.height);for(let te=0;te<6;te++){se=_e[te].mipmaps;for(let ze=0;ze<se.length;ze++){let Ze=se[ze];y.format!==Fn?Be!==null?k?me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ze,0,0,Ze.width,Ze.height,Be,Ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ze,Ke,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ze,0,0,Ze.width,Ze.height,Be,ve,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ze,Ke,Ze.width,Ze.height,0,Be,ve,Ze.data)}}}else{if(se=y.mipmaps,k&&he){se.length>0&&Le++;let te=kt(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,Ke,te.width,te.height)}for(let te=0;te<6;te++)if(ce){k?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,_e[te].width,_e[te].height,Be,ve,_e[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ke,_e[te].width,_e[te].height,0,Be,ve,_e[te].data);for(let ze=0;ze<se.length;ze++){let St=se[ze].image[te].image;k?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ze+1,0,0,St.width,St.height,Be,ve,St.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ze+1,Ke,St.width,St.height,0,Be,ve,St.data)}}else{k?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Be,ve,_e[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ke,Be,ve,_e[te]);for(let ze=0;ze<se.length;ze++){let Ze=se[ze];k?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ze+1,0,0,Be,ve,Ze.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ze+1,Ke,Be,ve,Ze.image[te])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),ee.__version=le.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function ge(C,y,Y,ne,le,ee){let Ve=s.convert(Y.format,Y.colorSpace),pe=s.convert(Y.type),Ee=S(Y.internalFormat,Ve,pe,Y.colorSpace),Oe=i.get(y),ce=i.get(Y);if(ce.__renderTarget=y,!Oe.__hasExternalTextures){let _e=Math.max(1,y.width>>ee),Ue=Math.max(1,y.height>>ee);le===n.TEXTURE_3D||le===n.TEXTURE_2D_ARRAY?t.texImage3D(le,ee,Ee,_e,Ue,y.depth,0,Ve,pe,null):t.texImage2D(le,ee,Ee,_e,Ue,0,Ve,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Fe(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,le,ce.__webglTexture,0,Mt(y)):(le===n.TEXTURE_2D||le>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,le,ce.__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(C,y,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,C),y.depthBuffer){let ne=y.depthTexture,le=ne&&ne.isDepthTexture?ne.type:null,ee=v(y.stencilBuffer,le),Ve=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=Mt(y);Fe(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,ee,y.width,y.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,ee,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ee,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ve,n.RENDERBUFFER,C)}else{let ne=y.textures;for(let le=0;le<ne.length;le++){let ee=ne[le],Ve=s.convert(ee.format,ee.colorSpace),pe=s.convert(ee.type),Ee=S(ee.internalFormat,Ve,pe,ee.colorSpace),Oe=Mt(y);Y&&Fe(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,Ee,y.width,y.height):Fe(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Oe,Ee,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pe(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ne=i.get(y.depthTexture);ne.__renderTarget=y,(!ne.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),U(y.depthTexture,0);let le=ne.__webglTexture,ee=Mt(y);if(y.depthTexture.format===Gr)Fe(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0);else if(y.depthTexture.format===as)Fe(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function et(C){let y=i.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let ne=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ne){let le=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ne.removeEventListener("dispose",le)};ne.addEventListener("dispose",le),y.__depthDisposeCallback=le}y.__boundDepthTexture=ne}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");let ne=C.texture.mipmaps;ne&&ne.length>0?Pe(y.__webglFramebuffer[0],C):Pe(y.__webglFramebuffer,C)}else if(Y){y.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[ne]),y.__webglDepthbuffer[ne]===void 0)y.__webglDepthbuffer[ne]=n.createRenderbuffer(),Ie(y.__webglDepthbuffer[ne],C,!1);else{let le=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=y.__webglDepthbuffer[ne];n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,ee)}}else{let ne=C.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Ie(y.__webglDepthbuffer,C,!1);else{let le=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(C,y,Y){let ne=i.get(C);y!==void 0&&ge(ne.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&et(C)}function L(C){let y=C.texture,Y=i.get(C),ne=i.get(y);C.addEventListener("dispose",N);let le=C.textures,ee=C.isWebGLCubeRenderTarget===!0,Ve=le.length>1;if(Ve||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=y.version,o.memory.textures++),ee){Y.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer[pe]=[];for(let Ee=0;Ee<y.mipmaps.length;Ee++)Y.__webglFramebuffer[pe][Ee]=n.createFramebuffer()}else Y.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){Y.__webglFramebuffer=[];for(let pe=0;pe<y.mipmaps.length;pe++)Y.__webglFramebuffer[pe]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Ve)for(let pe=0,Ee=le.length;pe<Ee;pe++){let Oe=i.get(le[pe]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Fe(C)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let pe=0;pe<le.length;pe++){let Ee=le[pe];Y.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[pe]);let Oe=s.convert(Ee.format,Ee.colorSpace),ce=s.convert(Ee.type),_e=S(Ee.internalFormat,Oe,ce,Ee.colorSpace,C.isXRRenderTarget===!0),Ue=Mt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,_e,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,Y.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(Y.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),De(n.TEXTURE_CUBE_MAP,y);for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ee=0;Ee<y.mipmaps.length;Ee++)ge(Y.__webglFramebuffer[pe][Ee],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee);else ge(Y.__webglFramebuffer[pe],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let pe=0,Ee=le.length;pe<Ee;pe++){let Oe=le[pe],ce=i.get(Oe),_e=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(_e=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,ce.__webglTexture),De(_e,Oe),ge(Y.__webglFramebuffer,C,Oe,n.COLOR_ATTACHMENT0+pe,_e,0),m(Oe)&&p(_e)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,ne.__webglTexture),De(pe,y),y.mipmaps&&y.mipmaps.length>0)for(let Ee=0;Ee<y.mipmaps.length;Ee++)ge(Y.__webglFramebuffer[Ee],C,y,n.COLOR_ATTACHMENT0,pe,Ee);else ge(Y.__webglFramebuffer,C,y,n.COLOR_ATTACHMENT0,pe,0);m(y)&&p(pe),t.unbindTexture()}C.depthBuffer&&et(C)}function bt(C){let y=C.textures;for(let Y=0,ne=y.length;Y<ne;Y++){let le=y[Y];if(m(le)){let ee=_(C),Ve=i.get(le).__webglTexture;t.bindTexture(ee,Ve),p(ee),t.unbindTexture()}}}let tt=[],Ye=[];function Ae(C){if(C.samples>0){if(Fe(C)===!1){let y=C.textures,Y=C.width,ne=C.height,le=n.COLOR_BUFFER_BIT,ee=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ve=i.get(C),pe=y.length>1;if(pe)for(let Oe=0;Oe<y.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer);let Ee=C.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Oe=0;Oe<y.length;Oe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(le|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(le|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ve.__webglColorRenderbuffer[Oe]);let ce=i.get(y[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,Y,ne,0,0,Y,ne,le,n.NEAREST),c===!0&&(tt.length=0,Ye.length=0,tt.push(n.COLOR_ATTACHMENT0+Oe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(tt.push(ee),Ye.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ye)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Oe=0;Oe<y.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,Ve.__webglColorRenderbuffer[Oe]);let ce=i.get(y[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Mt(C){return Math.min(r.maxSamples,C.samples)}function Fe(C){let y=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function $e(C){let y=o.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function wt(C,y){let Y=C.colorSpace,ne=C.format,le=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Y!==ji&&Y!==$n&&(At.getTransfer(Y)===zt?(ne!==Fn||le!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),y}function kt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=z,this.setTexture2D=U,this.setTexture2DArray=G,this.setTexture3D=W,this.setTextureCube=B,this.rebindTextures=Ne,this.setupRenderTarget=L,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Fe}function fx(n,e){function t(i,r=$n){let s,o=At.getTransfer(r);if(i===Zn)return n.UNSIGNED_BYTE;if(i===ba)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Sa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===fc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===uc)return n.BYTE;if(i===dc)return n.SHORT;if(i===rs)return n.UNSIGNED_SHORT;if(i===Ma)return n.INT;if(i===Hi)return n.UNSIGNED_INT;if(i===Jn)return n.FLOAT;if(i===ss)return n.HALF_FLOAT;if(i===mc)return n.ALPHA;if(i===gc)return n.RGB;if(i===Fn)return n.RGBA;if(i===Gr)return n.DEPTH_COMPONENT;if(i===as)return n.DEPTH_STENCIL;if(i===wa)return n.RED;if(i===Ta)return n.RED_INTEGER;if(i===xc)return n.RG;if(i===Ea)return n.RG_INTEGER;if(i===Aa)return n.RGBA_INTEGER;if(i===Qs||i===eo||i===to||i===no)if(o===zt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Qs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Qs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===eo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===to)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===no)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ca||i===Ra||i===Ia||i===Pa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ca)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ra)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ia)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Da||i===La||i===Ua)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Da||i===La)return o===zt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ua)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Na||i===Fa||i===za||i===Oa||i===Ba||i===ka||i===Va||i===Ga||i===Ha||i===Wa||i===Xa||i===qa||i===Ya||i===Za)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Na)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fa)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===za)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oa)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ba)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ka)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Va)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ga)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ha)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wa)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xa)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qa)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ya)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Za)return o===zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ja||i===$a||i===Ka)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ja)return o===zt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$a)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ka)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ja||i===Qa||i===el||i===tl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ja)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Qa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===el)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===tl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===os?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var px=`
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

}`,Bc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Xs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new wn({vertexShader:px,fragmentShader:mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new Pn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kc=class extends _i{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new Bc,p={},_=t.getContextAttributes(),S=null,v=null,I=[],T=[],N=new Xe,F=null,w=new jt;w.viewport=new Ct;let M=new jt;M.viewport=new Ct;let E=[w,M],z=new ha,P=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let J=I[Z];return J===void 0&&(J=new Jr,I[Z]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Z){let J=I[Z];return J===void 0&&(J=new Jr,I[Z]=J),J.getGripSpace()},this.getHand=function(Z){let J=I[Z];return J===void 0&&(J=new Jr,I[Z]=J),J.getHandSpace()};function U(Z){let J=T.indexOf(Z.inputSource);if(J===-1)return;let ge=I[J];ge!==void 0&&(ge.update(Z.inputSource,Z.frame,l||o),ge.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",W);for(let Z=0;Z<I.length;Z++){let J=T[Z];J!==null&&(T[Z]=null,I[Z].disconnect(J))}P=null,R=null,m.reset();for(let Z in p)delete p[Z];e.setRenderTarget(S),d=null,f=null,u=null,r=null,v=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",G),r.addEventListener("inputsourceschange",W),_.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(N),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Ie=null,Pe=null;_.depth&&(Pe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=_.stencil?as:Gr,Ie=_.stencil?os:Hi);let et={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(et),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new ei(f.textureWidth,f.textureHeight,{format:Fn,type:Zn,depthTexture:new Ws(f.textureWidth,f.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ge={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new ei(d.framebufferWidth,d.framebufferHeight,{format:Fn,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Je.setContext(r),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(Z){for(let J=0;J<Z.removed.length;J++){let ge=Z.removed[J],Ie=T.indexOf(ge);Ie>=0&&(T[Ie]=null,I[Ie].disconnect(ge))}for(let J=0;J<Z.added.length;J++){let ge=Z.added[J],Ie=T.indexOf(ge);if(Ie===-1){for(let et=0;et<I.length;et++)if(et>=T.length){T.push(ge),Ie=et;break}else if(T[et]===null){T[et]=ge,Ie=et;break}if(Ie===-1)break}let Pe=I[Ie];Pe&&Pe.connect(ge)}}let B=new O,ie=new O;function ae(Z,J,ge){B.setFromMatrixPosition(J.matrixWorld),ie.setFromMatrixPosition(ge.matrixWorld);let Ie=B.distanceTo(ie),Pe=J.projectionMatrix.elements,et=ge.projectionMatrix.elements,Ne=Pe[14]/(Pe[10]-1),L=Pe[14]/(Pe[10]+1),bt=(Pe[9]+1)/Pe[5],tt=(Pe[9]-1)/Pe[5],Ye=(Pe[8]-1)/Pe[0],Ae=(et[8]+1)/et[0],Mt=Ne*Ye,Fe=Ne*Ae,$e=Ie/(-Ye+Ae),wt=$e*-Ye;if(J.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(wt),Z.translateZ($e),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Pe[10]===-1)Z.projectionMatrix.copy(J.projectionMatrix),Z.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let kt=Ne+$e,C=L+$e,y=Mt-wt,Y=Fe+(Ie-wt),ne=bt*L/C*kt,le=tt*L/C*kt;Z.projectionMatrix.makePerspective(y,Y,ne,le,kt,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function fe(Z,J){J===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(J.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let J=Z.near,ge=Z.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),z.near=M.near=w.near=J,z.far=M.far=w.far=ge,(P!==z.near||R!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),P=z.near,R=z.far),z.layers.mask=Z.layers.mask|6,w.layers.mask=z.layers.mask&3,M.layers.mask=z.layers.mask&5;let Ie=Z.parent,Pe=z.cameras;fe(z,Ie);for(let et=0;et<Pe.length;et++)fe(Pe[et],Ie);Pe.length===2?ae(z,w,M):z.projectionMatrix.copy(w.projectionMatrix),De(Z,z,Ie)};function De(Z,J,ge){ge===null?Z.matrix.copy(J.matrixWorld):(Z.matrix.copy(ge.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(J.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(J.projectionMatrix),Z.projectionMatrixInverse.copy(J.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Hr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(Z){return p[Z]};let We=null;function ft(Z,J){if(h=J.getViewerPose(l||o),g=J,h!==null){let ge=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Ie=!1;ge.length!==z.cameras.length&&(z.cameras.length=0,Ie=!0);for(let L=0;L<ge.length;L++){let bt=ge[L],tt=null;if(d!==null)tt=d.getViewport(bt);else{let Ae=u.getViewSubImage(f,bt);tt=Ae.viewport,L===0&&(e.setRenderTargetTextures(v,Ae.colorTexture,Ae.depthStencilTexture),e.setRenderTarget(v))}let Ye=E[L];Ye===void 0&&(Ye=new jt,Ye.layers.enable(L),Ye.viewport=new Ct,E[L]=Ye),Ye.matrix.fromArray(bt.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(bt.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(tt.x,tt.y,tt.width,tt.height),L===0&&(z.matrix.copy(Ye.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ie===!0&&z.cameras.push(Ye)}let Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let L=u.getDepthInformation(ge[0]);L&&L.isValid&&L.texture&&m.init(L,r.renderState)}if(Pe&&Pe.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let L=0;L<ge.length;L++){let bt=ge[L].camera;if(bt){let tt=p[bt];tt||(tt=new Xs,p[bt]=tt);let Ye=u.getCameraImage(bt);tt.sourceTexture=Ye}}}}for(let ge=0;ge<I.length;ge++){let Ie=T[ge],Pe=I[ge];Ie!==null&&Pe!==void 0&&Pe.update(Ie,J,l||o)}We&&We(Z,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}let Je=new Gu;Je.setAnimationLoop(ft),this.setAnimationLoop=function(Z){We=Z},this.dispose=function(){}}},fr=new qn,gx=new Pt;function xx(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Sc(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,_,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,_,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===hn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===hn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),S=_.envMap,v=_.envMapRotation;S&&(m.envMap.value=S,fr.copy(v),fr.x*=-1,fr.y*=-1,fr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),m.envMapRotation.value.setFromMatrix4(gx.makeRotationFromEuler(fr)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _x(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,S){let v=S.program;i.uniformBlockBinding(_,v)}function l(_,S){let v=r[_.id];v===void 0&&(g(_),v=h(_),r[_.id]=v,_.addEventListener("dispose",m));let I=S.program;i.updateUBOMapping(_,I);let T=e.render.frame;s[_.id]!==T&&(f(_),s[_.id]=T)}function h(_){let S=u();_.__bindingPointIndex=S;let v=n.createBuffer(),I=_.__size,T=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,I,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,v),v}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let S=r[_.id],v=_.uniforms,I=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let T=0,N=v.length;T<N;T++){let F=Array.isArray(v[T])?v[T]:[v[T]];for(let w=0,M=F.length;w<M;w++){let E=F[w];if(d(E,T,w,I)===!0){let z=E.__offset,P=Array.isArray(E.value)?E.value:[E.value],R=0;for(let U=0;U<P.length;U++){let G=P[U],W=x(G);typeof G=="number"||typeof G=="boolean"?(E.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,z+R,E.__data)):G.isMatrix3?(E.__data[0]=G.elements[0],E.__data[1]=G.elements[1],E.__data[2]=G.elements[2],E.__data[3]=0,E.__data[4]=G.elements[3],E.__data[5]=G.elements[4],E.__data[6]=G.elements[5],E.__data[7]=0,E.__data[8]=G.elements[6],E.__data[9]=G.elements[7],E.__data[10]=G.elements[8],E.__data[11]=0):(G.toArray(E.__data,R),R+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(_,S,v,I){let T=_.value,N=S+"_"+v;if(I[N]===void 0)return typeof T=="number"||typeof T=="boolean"?I[N]=T:I[N]=T.clone(),!0;{let F=I[N];if(typeof T=="number"||typeof T=="boolean"){if(F!==T)return I[N]=T,!0}else if(F.equals(T)===!1)return F.copy(T),!0}return!1}function g(_){let S=_.uniforms,v=0,I=16;for(let N=0,F=S.length;N<F;N++){let w=Array.isArray(S[N])?S[N]:[S[N]];for(let M=0,E=w.length;M<E;M++){let z=w[M],P=Array.isArray(z.value)?z.value:[z.value];for(let R=0,U=P.length;R<U;R++){let G=P[R],W=x(G),B=v%I,ie=B%W.boundary,ae=B+ie;v+=ie,ae!==0&&I-ae<W.storage&&(v+=I-ae),z.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=W.storage}}}let T=v%I;return T>0&&(v+=I-T),_.__size=v,_.__cache={},this}function x(_){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),S}function m(_){let S=_.target;S.removeEventListener("dispose",m);let v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(let _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var us=class{constructor(e={}){let{canvas:t=pu(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,_=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,I=!1;this._outputColorSpace=Xt;let T=0,N=0,F=null,w=-1,M=null,E=new Ct,z=new Ct,P=null,R=new nt(0),U=0,G=t.width,W=t.height,B=1,ie=null,ae=null,fe=new Ct(0,0,G,W),De=new Ct(0,0,G,W),We=!1,ft=new Qr,Je=!1,Z=!1,J=new Pt,ge=new O,Ie=new Ct,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},et=!1;function Ne(){return F===null?B:1}let L=i;function bt(b,q){return t.getContext(b,q)}try{let b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",se,!1),L===null){let q="webgl2";if(L=bt(q,b),L===null)throw bt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let tt,Ye,Ae,Mt,Fe,$e,wt,kt,C,y,Y,ne,le,ee,Ve,pe,Ee,Oe,ce,_e,Ue,Be,ve,Ke;function k(){tt=new Fg(L),tt.init(),Be=new fx(L,tt),Ye=new Rg(L,tt,e,Be),Ae=new ux(L,tt),Ye.reversedDepthBuffer&&f&&Ae.buffers.depth.setReversed(!0),Mt=new Bg(L),Fe=new j0,$e=new dx(L,tt,Ae,Fe,Ye,Be,Mt),wt=new Pg(v),kt=new Ng(v),C=new Xf(L),ve=new Ag(L,C),y=new zg(L,C,Mt,ve),Y=new Vg(L,y,C,Mt),ce=new kg(L,Ye,$e),pe=new Ig(Fe),ne=new K0(v,wt,kt,tt,Ye,ve,pe),le=new xx(v,Fe),ee=new ex,Ve=new ox(tt),Oe=new Eg(v,wt,kt,Ae,Y,d,c),Ee=new cx(v,Y,Ye),Ke=new _x(L,Mt,Ye,Ae),_e=new Cg(L,tt,Mt),Ue=new Og(L,tt,Mt),Mt.programs=ne.programs,v.capabilities=Ye,v.extensions=tt,v.properties=Fe,v.renderLists=ee,v.shadowMap=Ee,v.state=Ae,v.info=Mt}k();let he=new kc(v,L);this.xr=he,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let b=tt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=tt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(G,W,!1))},this.getSize=function(b){return b.set(G,W)},this.setSize=function(b,q,K=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=b,W=q,t.width=Math.floor(b*B),t.height=Math.floor(q*B),K===!0&&(t.style.width=b+"px",t.style.height=q+"px"),this.setViewport(0,0,b,q)},this.getDrawingBufferSize=function(b){return b.set(G*B,W*B).floor()},this.setDrawingBufferSize=function(b,q,K){G=b,W=q,B=K,t.width=Math.floor(b*K),t.height=Math.floor(q*K),this.setViewport(0,0,b,q)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(fe)},this.setViewport=function(b,q,K,$){b.isVector4?fe.set(b.x,b.y,b.z,b.w):fe.set(b,q,K,$),Ae.viewport(E.copy(fe).multiplyScalar(B).round())},this.getScissor=function(b){return b.copy(De)},this.setScissor=function(b,q,K,$){b.isVector4?De.set(b.x,b.y,b.z,b.w):De.set(b,q,K,$),Ae.scissor(z.copy(De).multiplyScalar(B).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(b){Ae.setScissorTest(We=b)},this.setOpaqueSort=function(b){ie=b},this.setTransparentSort=function(b){ae=b},this.getClearColor=function(b){return b.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(b=!0,q=!0,K=!0){let $=0;if(b){let X=!1;if(F!==null){let ue=F.texture.format;X=ue===Aa||ue===Ea||ue===Ta}if(X){let ue=F.texture.type,Me=ue===Zn||ue===Hi||ue===rs||ue===os||ue===ba||ue===Sa,be=Oe.getClearColor(),Re=Oe.getClearAlpha(),Ge=be.r,je=be.g,He=be.b;Me?(g[0]=Ge,g[1]=je,g[2]=He,g[3]=Re,L.clearBufferuiv(L.COLOR,0,g)):(x[0]=Ge,x[1]=je,x[2]=He,x[3]=Re,L.clearBufferiv(L.COLOR,0,x))}else $|=L.COLOR_BUFFER_BIT}q&&($|=L.DEPTH_BUFFER_BIT),K&&($|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",se,!1),Oe.dispose(),ee.dispose(),Ve.dispose(),Fe.dispose(),wt.dispose(),kt.dispose(),Y.dispose(),ve.dispose(),Ke.dispose(),ne.dispose(),he.dispose(),he.removeEventListener("sessionstart",vn),he.removeEventListener("sessionend",oi),on.stop()};function me(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let b=Mt.autoReset,q=Ee.enabled,K=Ee.autoUpdate,$=Ee.needsUpdate,X=Ee.type;k(),Mt.autoReset=b,Ee.enabled=q,Ee.autoUpdate=K,Ee.needsUpdate=$,Ee.type=X}function se(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function te(b){let q=b.target;q.removeEventListener("dispose",te),ze(q)}function ze(b){Ze(b),Fe.remove(b)}function Ze(b){let q=Fe.get(b).programs;q!==void 0&&(q.forEach(function(K){ne.releaseProgram(K)}),b.isShaderMaterial&&ne.releaseShaderCache(b))}this.renderBufferDirect=function(b,q,K,$,X,ue){q===null&&(q=Pe);let Me=X.isMesh&&X.matrixWorld.determinant()<0,be=Ei(b,q,K,$,X);Ae.setMaterial($,Me);let Re=K.index,Ge=1;if($.wireframe===!0){if(Re=y.getWireframeAttribute(K),Re===void 0)return;Ge=2}let je=K.drawRange,He=K.attributes.position,at=je.start*Ge,gt=(je.start+je.count)*Ge;ue!==null&&(at=Math.max(at,ue.start*Ge),gt=Math.min(gt,(ue.start+ue.count)*Ge)),Re!==null?(at=Math.max(at,0),gt=Math.min(gt,Re.count)):He!=null&&(at=Math.max(at,0),gt=Math.min(gt,He.count));let Tt=gt-at;if(Tt<0||Tt===1/0)return;ve.setup(X,$,be,K,Re);let Et,xt=_e;if(Re!==null&&(Et=C.get(Re),xt=Ue,xt.setIndex(Et)),X.isMesh)$.wireframe===!0?(Ae.setLineWidth($.wireframeLinewidth*Ne()),xt.setMode(L.LINES)):xt.setMode(L.TRIANGLES);else if(X.isLine){let qe=$.linewidth;qe===void 0&&(qe=1),Ae.setLineWidth(qe*Ne()),X.isLineSegments?xt.setMode(L.LINES):X.isLineLoop?xt.setMode(L.LINE_LOOP):xt.setMode(L.LINE_STRIP)}else X.isPoints?xt.setMode(L.POINTS):X.isSprite&&xt.setMode(L.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Xr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))xt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let qe=X._multiDrawStarts,Bt=X._multiDrawCounts,lt=X._multiDrawCount,Wt=Re?C.get(Re).bytesPerElement:1,Mn=Fe.get($).currentProgram.getUniforms();for(let nn=0;nn<lt;nn++)Mn.setValue(L,"_gl_DrawID",nn),xt.render(qe[nn]/Wt,Bt[nn])}else if(X.isInstancedMesh)xt.renderInstances(at,Tt,X.count);else if(K.isInstancedBufferGeometry){let qe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Bt=Math.min(K.instanceCount,qe);xt.renderInstances(at,Tt,Bt)}else xt.render(at,Tt)};function St(b,q,K){b.transparent===!0&&b.side===Ht&&b.forceSinglePass===!1?(b.side=hn,b.needsUpdate=!0,An(b,q,K),b.side=xi,b.needsUpdate=!0,An(b,q,K),b.side=Ht):An(b,q,K)}this.compile=function(b,q,K=null){K===null&&(K=b),p=Ve.get(K),p.init(q),S.push(p),K.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),b!==K&&b.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();let $=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let ue=X.material;if(ue)if(Array.isArray(ue))for(let Me=0;Me<ue.length;Me++){let be=ue[Me];St(be,K,X),$.add(be)}else St(ue,K,X),$.add(ue)}),p=S.pop(),$},this.compileAsync=function(b,q,K=null){let $=this.compile(b,q,K);return new Promise(X=>{function ue(){if($.forEach(function(Me){Fe.get(Me).currentProgram.isReady()&&$.delete(Me)}),$.size===0){X(b);return}setTimeout(ue,10)}tt.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let pt=null;function un(b){pt&&pt(b)}function vn(){on.stop()}function oi(){on.start()}let on=new Gu;on.setAnimationLoop(un),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(b){pt=b,he.setAnimationLoop(b),b===null?on.stop():on.start()},he.addEventListener("sessionstart",vn),he.addEventListener("sessionend",oi),this.render=function(b,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(q),q=he.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,q,F),p=Ve.get(b,S.length),p.init(q),S.push(p),J.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ft.setFromProjectionMatrix(J,Wn,q.reversedDepth),Z=this.localClippingEnabled,Je=pe.init(this.clippingPlanes,Z),m=ee.get(b,_.length),m.init(),_.push(m),he.enabled===!0&&he.isPresenting===!0){let ue=v.xr.getDepthSensingMesh();ue!==null&&vr(ue,q,-1/0,v.sortObjects)}vr(b,q,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ie,ae),et=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,et&&Oe.addToRenderList(m,b),this.info.render.frame++,Je===!0&&pe.beginShadows();let K=p.state.shadowsArray;Ee.render(K,b,q),Je===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=m.opaque,X=m.transmissive;if(p.setupLights(),q.isArrayCamera){let ue=q.cameras;if(X.length>0)for(let Me=0,be=ue.length;Me<be;Me++){let Re=ue[Me];dn($,X,b,Re)}et&&Oe.render(b);for(let Me=0,be=ue.length;Me<be;Me++){let Re=ue[Me];Mr(m,b,Re,Re.viewport)}}else X.length>0&&dn($,X,b,q),et&&Oe.render(b),Mr(m,b,q);F!==null&&N===0&&($e.updateMultisampleRenderTarget(F),$e.updateRenderTargetMipmap(F)),b.isScene===!0&&b.onAfterRender(v,b,q),ve.resetDefaultState(),w=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],Je===!0&&pe.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function vr(b,q,K,$){if(b.visible===!1)return;if(b.layers.test(q.layers)){if(b.isGroup)K=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(q);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ft.intersectsSprite(b)){$&&Ie.setFromMatrixPosition(b.matrixWorld).applyMatrix4(J);let Me=Y.update(b),be=b.material;be.visible&&m.push(b,Me,be,K,Ie.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ft.intersectsObject(b))){let Me=Y.update(b),be=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ie.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ie.copy(Me.boundingSphere.center)),Ie.applyMatrix4(b.matrixWorld).applyMatrix4(J)),Array.isArray(be)){let Re=Me.groups;for(let Ge=0,je=Re.length;Ge<je;Ge++){let He=Re[Ge],at=be[He.materialIndex];at&&at.visible&&m.push(b,Me,at,K,Ie.z,He)}}else be.visible&&m.push(b,Me,be,K,Ie.z,null)}}let ue=b.children;for(let Me=0,be=ue.length;Me<be;Me++)vr(ue[Me],q,K,$)}function Mr(b,q,K,$){let X=b.opaque,ue=b.transmissive,Me=b.transparent;p.setupLightsView(K),Je===!0&&pe.setGlobalState(v.clippingPlanes,K),$&&Ae.viewport(E.copy($)),X.length>0&&ai(X,q,K),ue.length>0&&ai(ue,q,K),Me.length>0&&ai(Me,q,K),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function dn(b,q,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new ei(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?ss:Zn,minFilter:Gi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));let ue=p.state.transmissionRenderTarget[$.id],Me=$.viewport||E;ue.setSize(Me.z*v.transmissionResolutionScale,Me.w*v.transmissionResolutionScale);let be=v.getRenderTarget(),Re=v.getActiveCubeFace(),Ge=v.getActiveMipmapLevel();v.setRenderTarget(ue),v.getClearColor(R),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear(),et&&Oe.render(K);let je=v.toneMapping;v.toneMapping=Si;let He=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),Je===!0&&pe.setGlobalState(v.clippingPlanes,$),ai(b,K,$),$e.updateMultisampleRenderTarget(ue),$e.updateRenderTargetMipmap(ue),tt.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let gt=0,Tt=q.length;gt<Tt;gt++){let Et=q[gt],xt=Et.object,qe=Et.geometry,Bt=Et.material,lt=Et.group;if(Bt.side===Ht&&xt.layers.test($.layers)){let Wt=Bt.side;Bt.side=hn,Bt.needsUpdate=!0,wi(xt,K,$,qe,Bt,lt),Bt.side=Wt,Bt.needsUpdate=!0,at=!0}}at===!0&&($e.updateMultisampleRenderTarget(ue),$e.updateRenderTargetMipmap(ue))}v.setRenderTarget(be,Re,Ge),v.setClearColor(R,U),He!==void 0&&($.viewport=He),v.toneMapping=je}function ai(b,q,K){let $=q.isScene===!0?q.overrideMaterial:null;for(let X=0,ue=b.length;X<ue;X++){let Me=b[X],be=Me.object,Re=Me.geometry,Ge=Me.group,je=Me.material;je.allowOverride===!0&&$!==null&&(je=$),be.layers.test(K.layers)&&wi(be,q,K,Re,je,Ge)}}function wi(b,q,K,$,X,ue){b.onBeforeRender(v,q,K,$,X,ue),b.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(v,q,K,$,b,ue),X.transparent===!0&&X.side===Ht&&X.forceSinglePass===!1?(X.side=hn,X.needsUpdate=!0,v.renderBufferDirect(K,q,$,X,b,ue),X.side=xi,X.needsUpdate=!0,v.renderBufferDirect(K,q,$,X,b,ue),X.side=Ht):v.renderBufferDirect(K,q,$,X,b,ue),b.onAfterRender(v,q,K,$,X,ue)}function An(b,q,K){q.isScene!==!0&&(q=Pe);let $=Fe.get(b),X=p.state.lights,ue=p.state.shadowsArray,Me=X.state.version,be=ne.getParameters(b,X.state,ue,q,K),Re=ne.getProgramCacheKey(be),Ge=$.programs;$.environment=b.isMeshStandardMaterial?q.environment:null,$.fog=q.fog,$.envMap=(b.isMeshStandardMaterial?kt:wt).get(b.envMap||$.environment),$.envMapRotation=$.environment!==null&&b.envMap===null?q.environmentRotation:b.envMapRotation,Ge===void 0&&(b.addEventListener("dispose",te),Ge=new Map,$.programs=Ge);let je=Ge.get(Re);if(je!==void 0){if($.currentProgram===je&&$.lightsStateVersion===Me)return Ti(b,be),je}else be.uniforms=ne.getUniforms(b),b.onBeforeCompile(be,v),je=ne.acquireProgram(be,Re),Ge.set(Re,je),$.uniforms=be.uniforms;let He=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(He.clippingPlanes=pe.uniform),Ti(b,be),$.needsLights=Ci(b),$.lightsStateVersion=Me,$.needsLights&&(He.ambientLightColor.value=X.state.ambient,He.lightProbe.value=X.state.probe,He.directionalLights.value=X.state.directional,He.directionalLightShadows.value=X.state.directionalShadow,He.spotLights.value=X.state.spot,He.spotLightShadows.value=X.state.spotShadow,He.rectAreaLights.value=X.state.rectArea,He.ltc_1.value=X.state.rectAreaLTC1,He.ltc_2.value=X.state.rectAreaLTC2,He.pointLights.value=X.state.point,He.pointLightShadows.value=X.state.pointShadow,He.hemisphereLights.value=X.state.hemi,He.directionalShadowMap.value=X.state.directionalShadowMap,He.directionalShadowMatrix.value=X.state.directionalShadowMatrix,He.spotShadowMap.value=X.state.spotShadowMap,He.spotLightMatrix.value=X.state.spotLightMatrix,He.spotLightMap.value=X.state.spotLightMap,He.pointShadowMap.value=X.state.pointShadowMap,He.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=je,$.uniformsList=null,je}function jn(b){if(b.uniformsList===null){let q=b.currentProgram.getUniforms();b.uniformsList=hs.seqWithValue(q.seq,b.uniforms)}return b.uniformsList}function Ti(b,q){let K=Fe.get(b);K.outputColorSpace=q.outputColorSpace,K.batching=q.batching,K.batchingColor=q.batchingColor,K.instancing=q.instancing,K.instancingColor=q.instancingColor,K.instancingMorph=q.instancingMorph,K.skinning=q.skinning,K.morphTargets=q.morphTargets,K.morphNormals=q.morphNormals,K.morphColors=q.morphColors,K.morphTargetsCount=q.morphTargetsCount,K.numClippingPlanes=q.numClippingPlanes,K.numIntersection=q.numClipIntersection,K.vertexAlphas=q.vertexAlphas,K.vertexTangents=q.vertexTangents,K.toneMapping=q.toneMapping}function Ei(b,q,K,$,X){q.isScene!==!0&&(q=Pe),$e.resetTextureUnits();let ue=q.fog,Me=$.isMeshStandardMaterial?q.environment:null,be=F===null?v.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ji,Re=($.isMeshStandardMaterial?kt:wt).get($.envMap||Me),Ge=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,je=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),He=!!K.morphAttributes.position,at=!!K.morphAttributes.normal,gt=!!K.morphAttributes.color,Tt=Si;$.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Tt=v.toneMapping);let Et=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,xt=Et!==void 0?Et.length:0,qe=Fe.get($),Bt=p.state.lights;if(Je===!0&&(Z===!0||b!==M)){let Zt=b===M&&$.id===w;pe.setState($,b,Zt)}let lt=!1;$.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Bt.state.version||qe.outputColorSpace!==be||X.isBatchedMesh&&qe.batching===!1||!X.isBatchedMesh&&qe.batching===!0||X.isBatchedMesh&&qe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&qe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&qe.instancing===!1||!X.isInstancedMesh&&qe.instancing===!0||X.isSkinnedMesh&&qe.skinning===!1||!X.isSkinnedMesh&&qe.skinning===!0||X.isInstancedMesh&&qe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&qe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&qe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&qe.instancingMorph===!1&&X.morphTexture!==null||qe.envMap!==Re||$.fog===!0&&qe.fog!==ue||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==pe.numPlanes||qe.numIntersection!==pe.numIntersection)||qe.vertexAlphas!==Ge||qe.vertexTangents!==je||qe.morphTargets!==He||qe.morphNormals!==at||qe.morphColors!==gt||qe.toneMapping!==Tt||qe.morphTargetsCount!==xt)&&(lt=!0):(lt=!0,qe.__version=$.version);let Wt=qe.currentProgram;lt===!0&&(Wt=An($,q,X));let Mn=!1,nn=!1,zn=!1,Ut=Wt.getUniforms(),Kt=qe.uniforms;if(Ae.useProgram(Wt.program)&&(Mn=!0,nn=!0,zn=!0),$.id!==w&&(w=$.id,nn=!0),Mn||M!==b){Ae.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ut.setValue(L,"projectionMatrix",b.projectionMatrix),Ut.setValue(L,"viewMatrix",b.matrixWorldInverse);let Jt=Ut.map.cameraPosition;Jt!==void 0&&Jt.setValue(L,ge.setFromMatrixPosition(b.matrixWorld)),Ye.logarithmicDepthBuffer&&Ut.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ut.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,nn=!0,zn=!0)}if(X.isSkinnedMesh){Ut.setOptional(L,X,"bindMatrix"),Ut.setOptional(L,X,"bindMatrixInverse");let Zt=X.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Ut.setValue(L,"boneTexture",Zt.boneTexture,$e))}X.isBatchedMesh&&(Ut.setOptional(L,X,"batchingTexture"),Ut.setValue(L,"batchingTexture",X._matricesTexture,$e),Ut.setOptional(L,X,"batchingIdTexture"),Ut.setValue(L,"batchingIdTexture",X._indirectTexture,$e),Ut.setOptional(L,X,"batchingColorTexture"),X._colorsTexture!==null&&Ut.setValue(L,"batchingColorTexture",X._colorsTexture,$e));let fn=K.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&ce.update(X,K,Wt),(nn||qe.receiveShadow!==X.receiveShadow)&&(qe.receiveShadow=X.receiveShadow,Ut.setValue(L,"receiveShadow",X.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Kt.envMap.value=Re,Kt.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&q.environment!==null&&(Kt.envMapIntensity.value=q.environmentIntensity),nn&&(Ut.setValue(L,"toneMappingExposure",v.toneMappingExposure),qe.needsLights&&Ai(Kt,zn),ue&&$.fog===!0&&le.refreshFogUniforms(Kt,ue),le.refreshMaterialUniforms(Kt,$,B,W,p.state.transmissionRenderTarget[b.id]),hs.upload(L,jn(qe),Kt,$e)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(hs.upload(L,jn(qe),Kt,$e),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ut.setValue(L,"center",X.center),Ut.setValue(L,"modelViewMatrix",X.modelViewMatrix),Ut.setValue(L,"normalMatrix",X.normalMatrix),Ut.setValue(L,"modelMatrix",X.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let Zt=$.uniformsGroups;for(let Jt=0,D=Zt.length;Jt<D;Jt++){let V=Zt[Jt];Ke.update(V,Wt),Ke.bind(V,Wt)}}return Wt}function Ai(b,q){b.ambientLightColor.needsUpdate=q,b.lightProbe.needsUpdate=q,b.directionalLights.needsUpdate=q,b.directionalLightShadows.needsUpdate=q,b.pointLights.needsUpdate=q,b.pointLightShadows.needsUpdate=q,b.spotLights.needsUpdate=q,b.spotLightShadows.needsUpdate=q,b.rectAreaLights.needsUpdate=q,b.hemisphereLights.needsUpdate=q}function Ci(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,q,K){let $=Fe.get(b);$.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Fe.get(b.texture).__webglTexture=q,Fe.get(b.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:K,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,q){let K=Fe.get(b);K.__webglFramebuffer=q,K.__useDefaultFramebuffer=q===void 0};let Yt=L.createFramebuffer();this.setRenderTarget=function(b,q=0,K=0){F=b,T=q,N=K;let $=!0,X=null,ue=!1,Me=!1;if(b){let Re=Fe.get(b);if(Re.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(L.FRAMEBUFFER,null),$=!1;else if(Re.__webglFramebuffer===void 0)$e.setupRenderTarget(b);else if(Re.__hasExternalTextures)$e.rebindTextures(b,Fe.get(b.texture).__webglTexture,Fe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let He=b.depthTexture;if(Re.__boundDepthTexture!==He){if(He!==null&&Fe.has(He)&&(b.width!==He.image.width||b.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$e.setupDepthRenderbuffer(b)}}let Ge=b.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Me=!0);let je=Fe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(je[q])?X=je[q][K]:X=je[q],ue=!0):b.samples>0&&$e.useMultisampledRTT(b)===!1?X=Fe.get(b).__webglMultisampledFramebuffer:Array.isArray(je)?X=je[K]:X=je,E.copy(b.viewport),z.copy(b.scissor),P=b.scissorTest}else E.copy(fe).multiplyScalar(B).floor(),z.copy(De).multiplyScalar(B).floor(),P=We;if(K!==0&&(X=Yt),Ae.bindFramebuffer(L.FRAMEBUFFER,X)&&$&&Ae.drawBuffers(b,X),Ae.viewport(E),Ae.scissor(z),Ae.setScissorTest(P),ue){let Re=Fe.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+q,Re.__webglTexture,K)}else if(Me){let Re=q;for(let Ge=0;Ge<b.textures.length;Ge++){let je=Fe.get(b.textures[Ge]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ge,je.__webglTexture,K,Re)}}else if(b!==null&&K!==0){let Re=Fe.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Re.__webglTexture,K)}w=-1},this.readRenderTargetPixels=function(b,q,K,$,X,ue,Me,be=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Fe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Re=Re[Me]),Re){Ae.bindFramebuffer(L.FRAMEBUFFER,Re);try{let Ge=b.textures[be],je=Ge.format,He=Ge.type;if(!Ye.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=b.width-$&&K>=0&&K<=b.height-X&&(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+be),L.readPixels(q,K,$,X,Be.convert(je),Be.convert(He),ue))}finally{let Ge=F!==null?Fe.get(F).__webglFramebuffer:null;Ae.bindFramebuffer(L.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(b,q,K,$,X,ue,Me,be=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Fe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Re=Re[Me]),Re)if(q>=0&&q<=b.width-$&&K>=0&&K<=b.height-X){Ae.bindFramebuffer(L.FRAMEBUFFER,Re);let Ge=b.textures[be],je=Ge.format,He=Ge.type;if(!Ye.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,at),L.bufferData(L.PIXEL_PACK_BUFFER,ue.byteLength,L.STREAM_READ),b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+be),L.readPixels(q,K,$,X,Be.convert(je),Be.convert(He),0);let gt=F!==null?Fe.get(F).__webglFramebuffer:null;Ae.bindFramebuffer(L.FRAMEBUFFER,gt);let Tt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await mu(L,Tt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,at),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ue),L.deleteBuffer(at),L.deleteSync(Tt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,q=null,K=0){let $=Math.pow(2,-K),X=Math.floor(b.image.width*$),ue=Math.floor(b.image.height*$),Me=q!==null?q.x:0,be=q!==null?q.y:0;$e.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,K,0,0,Me,be,X,ue),Ae.unbindTexture()};let li=L.createFramebuffer(),Ri=L.createFramebuffer();this.copyTextureToTexture=function(b,q,K=null,$=null,X=0,ue=null){ue===null&&(X!==0?(Xr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=X,X=0):ue=0);let Me,be,Re,Ge,je,He,at,gt,Tt,Et=b.isCompressedTexture?b.mipmaps[ue]:b.image;if(K!==null)Me=K.max.x-K.min.x,be=K.max.y-K.min.y,Re=K.isBox3?K.max.z-K.min.z:1,Ge=K.min.x,je=K.min.y,He=K.isBox3?K.min.z:0;else{let fn=Math.pow(2,-X);Me=Math.floor(Et.width*fn),be=Math.floor(Et.height*fn),b.isDataArrayTexture?Re=Et.depth:b.isData3DTexture?Re=Math.floor(Et.depth*fn):Re=1,Ge=0,je=0,He=0}$!==null?(at=$.x,gt=$.y,Tt=$.z):(at=0,gt=0,Tt=0);let xt=Be.convert(q.format),qe=Be.convert(q.type),Bt;q.isData3DTexture?($e.setTexture3D(q,0),Bt=L.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?($e.setTexture2DArray(q,0),Bt=L.TEXTURE_2D_ARRAY):($e.setTexture2D(q,0),Bt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,q.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,q.unpackAlignment);let lt=L.getParameter(L.UNPACK_ROW_LENGTH),Wt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Mn=L.getParameter(L.UNPACK_SKIP_PIXELS),nn=L.getParameter(L.UNPACK_SKIP_ROWS),zn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Et.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Et.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ge),L.pixelStorei(L.UNPACK_SKIP_ROWS,je),L.pixelStorei(L.UNPACK_SKIP_IMAGES,He);let Ut=b.isDataArrayTexture||b.isData3DTexture,Kt=q.isDataArrayTexture||q.isData3DTexture;if(b.isDepthTexture){let fn=Fe.get(b),Zt=Fe.get(q),Jt=Fe.get(fn.__renderTarget),D=Fe.get(Zt.__renderTarget);Ae.bindFramebuffer(L.READ_FRAMEBUFFER,Jt.__webglFramebuffer),Ae.bindFramebuffer(L.DRAW_FRAMEBUFFER,D.__webglFramebuffer);for(let V=0;V<Re;V++)Ut&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Fe.get(b).__webglTexture,X,He+V),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Fe.get(q).__webglTexture,ue,Tt+V)),L.blitFramebuffer(Ge,je,Me,be,at,gt,Me,be,L.DEPTH_BUFFER_BIT,L.NEAREST);Ae.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||Fe.has(b)){let fn=Fe.get(b),Zt=Fe.get(q);Ae.bindFramebuffer(L.READ_FRAMEBUFFER,li),Ae.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ri);for(let Jt=0;Jt<Re;Jt++)Ut?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,fn.__webglTexture,X,He+Jt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,fn.__webglTexture,X),Kt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Zt.__webglTexture,ue,Tt+Jt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Zt.__webglTexture,ue),X!==0?L.blitFramebuffer(Ge,je,Me,be,at,gt,Me,be,L.COLOR_BUFFER_BIT,L.NEAREST):Kt?L.copyTexSubImage3D(Bt,ue,at,gt,Tt+Jt,Ge,je,Me,be):L.copyTexSubImage2D(Bt,ue,at,gt,Ge,je,Me,be);Ae.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Kt?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Bt,ue,at,gt,Tt,Me,be,Re,xt,qe,Et.data):q.isCompressedArrayTexture?L.compressedTexSubImage3D(Bt,ue,at,gt,Tt,Me,be,Re,xt,Et.data):L.texSubImage3D(Bt,ue,at,gt,Tt,Me,be,Re,xt,qe,Et):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ue,at,gt,Me,be,xt,qe,Et.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ue,at,gt,Et.width,Et.height,xt,Et.data):L.texSubImage2D(L.TEXTURE_2D,ue,at,gt,Me,be,xt,qe,Et);L.pixelStorei(L.UNPACK_ROW_LENGTH,lt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Wt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Mn),L.pixelStorei(L.UNPACK_SKIP_ROWS,nn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,zn),ue===0&&q.generateMipmaps&&L.generateMipmap(Bt),Ae.unbindTexture()},this.initRenderTarget=function(b){Fe.get(b).__webglFramebuffer===void 0&&$e.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?$e.setTextureCube(b,0):b.isData3DTexture?$e.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?$e.setTexture2DArray(b,0):$e.setTexture2D(b,0),Ae.unbindTexture()},this.resetState=function(){T=0,N=0,F=null,Ae.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}};var yx={x:1630,y:1160},vx={x:3370,y:430},so={x:1450,y:1320};function Yu(n,e){if(!n||!e)return null;let t=[yx,vx].filter(g=>Math.hypot(g.x-n.x,g.y-n.y)<400).sort((g,x)=>Math.hypot(g.x-n.x,g.y-n.y)-Math.hypot(x.x-n.x,x.y-n.y))[0],i=0,r=1;if(t){let g=t.x-n.x,x=t.y-n.y;Math.abs(g)>Math.abs(x)?(i=Math.sign(g)||1,r=0):r=Math.sign(x)||1}let s=[0,280,320,360][e],o=[0,220,260,300][e],a=112,c={x:n.x-i*o/2,y:n.y-r*o/2},l=(g,x)=>({x:c.x+r*g+i*x,y:c.y-i*g+r*x}),h=(g,x,m,p)=>{let _=l(g,x);return{x:_.x,y:_.y,w:r?m:p,h:r?p:m}},u=[];if(e>=2){u.push(h(0,-o/2,s,10));for(let g of[-s/2,s/2])u.push(h(g,0,10,o))}if(e>=3){let g=(s-a)/2;for(let x of[-1,1])u.push(h(x*(a/2+g/2),o/2,g,10))}let f=e===1?[-1,1].flatMap(g=>[-1,1].map(x=>({...l(g*(s/2-8),x*(o/2-8)),radius:6}))):[],d=[h(-s/2+53,-o/2+64,52,90)];return e>=3&&d.push(h(s/2-53,-o/2+64,52,90)),{center:c,width:s,depth:o,door:a,fx:i,fy:r,yaw:Math.atan2(i,r),floor:h(0,0,s,o),walls:u,posts:f,beds:d,point:l,wallHeight:224,doorHeight:204,roofRidge:284}}var Mx=["#4c9cba","#df8168","#9974c7","#76b677","#e3b04c","#df71a7"],bx=["#e3b185","#be895f","#efc69d","#a67152"],Sx=["#463b32","#24282b","#99673b","#c9a465"];var ll=(n,e,t)=>Number.isInteger(n?.[e])&&n[e]>=0&&n[e]<t?n[e]:0;function Gc(n,e){return n.shirt=Mx[ll(e,"shirt",6)],n.skin=bx[ll(e,"skin",4)],n.hair=Sx[ll(e,"hair",4)],n.style=ll(e,"style",3),n}function cl(n){return Gc({},n)}var Zu={gather:1e3,fish:1500,cook:1200,wave:2e3,cheer:2e3};function Ju(n,e){let t=Math.sin(e*Math.PI*4);return n==="gather"?{left:-.35,right:-1.1+t*.6,bend:.12}:n==="fish"?{left:-.8,right:-1.3+Math.sin(e*Math.PI)*.3,bend:0}:n==="cook"?{left:-.8,right:-.9+t*.25,bend:.06}:n==="wave"?{left:0,right:-2.4,bend:0,wave:t*.25}:n==="cheer"?{left:-2.4,right:-2.4,bend:0,wave:t*.12}:null}var wx="assets/materials-v018/",Hc=["paving","sand","grass","plaster","teal","roof","wood","rock","leaf"],Tx=new Set(["#a68854","#876742","#845f3f","#7d654b","#866642","#a98961","#765734","#9a743e","#786040","#8a6d49","#927652","#6e5942"]);function $u(n){let e=document.createElement("canvas");e.width=n.width,e.height=n.height;let t=e.getContext("2d");t.scale(e.width/4600,e.height/2900),t.fillStyle="#0000ff",t.fillRect(0,0,4600,2900),t.fillStyle="#00ff00";for(let[i,r,s,o]of[[1750,1300,1420,840],[3380,500,450,240],[4100,2400,325,225]])t.beginPath(),t.ellipse(i,r,s,o,0,0,Math.PI*2),t.fill();return t.strokeStyle="#ff0000",t.lineWidth=100,t.lineCap="round",t.beginPath(),t.moveTo(1440,1190),t.bezierCurveTo(1520,1080,1750,1190,1980,1280),t.bezierCurveTo(2420,1510,2790,1440,3200,1320),t.stroke(),t.lineWidth=80,t.beginPath(),t.moveTo(1800,1180),t.bezierCurveTo(2100,930,2820,920,3220,730),t.lineTo(3370,480),t.stroke(),t.fillStyle="#ff0000",t.beginPath(),t.ellipse(1570,1160,290,200,0,0,Math.PI*2),t.fill(),e}function hl(n){let e=new Map,t=new Map,i=new Set,r=0,s=0,o=!0,a=0,c=new Js;for(let d of Hc){let g=c.load(wx+d+".webp",()=>{r++,o=!0},void 0,()=>{s++,i.add(d),o=!0});g.userData.materialAssetName=d,g.colorSpace=Xt,g.wrapS=g.wrapT=Vr,g.anisotropy=Math.min(8,n.capabilities.getMaxAnisotropy()),e.set(d,g)}function l(d,g="#ffffff",x=1,m=.035){let p=d+g+x+m;if(!t.has(p)){let _=e.get(d).clone();_.repeat.set(x,x);let S=new Ot({color:g,map:_,bumpMap:_,bumpScale:m,roughness:d==="leaf"?.78:.93});e.get(d).addEventListener("dispose",()=>_.dispose());let v=e.get(d);S.userData.textureSource=v,t.set(p,S),o=!0}return t.get(p)}function h(d){return Tx.has(d)?l("wood","#ded4c4",1,.045):d==="#e2dbc7"?l("plaster","#f8f4e7",1,.027):d==="#ba7655"?l("roof","#e4d6c7",2,.055):d==="#a7c4b7"?l("teal","#e7ede3",1,.035):d==="#92968b"||d==="#777a6b"?l("rock","#ddd9cf",1,.065):null}function u(){if(!o)return;a++;let d=r+s<Hc.length;for(let g of t.values()){let x=g.userData.textureSource;x.image&&g.map.image!==x.image&&(g.map.source=x.source,g.map.needsUpdate=!0),g.map.image&&!g.userData.uploaded&&(g.map.needsUpdate=!0,g.userData.uploaded=!0),!g.userData.uploaded&&!i.has(x.userData.materialAssetName)&&(d=!0)}o=d}function f(d){d.colorSpace=$n;let g=new Ot({color:"#ffffff",map:d,roughness:1});return g.onBeforeCompile=x=>{x.uniforms.uSand={value:e.get("sand")},x.uniforms.uGrass={value:e.get("grass")},x.uniforms.uPaving={value:e.get("paving")},x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
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
        normal=normalize(normal+vec3(dFdx(relief)*.14,dFdy(relief)*.14,0.));`)},g}return{textures:e,surface:l,forColor:h,ground:f,update:u,stats:()=>({loaded:r,failed:s,total:Hc.length,materials:t.size,syncPending:o,syncPasses:a}),dispose(){for(let d of t.values())d.map.dispose(),d.dispose();for(let d of e.values())d.dispose()}}}function ul({x:n,z:e,surface:t,yaw:i,pitch:r,mode:s="first",distance:o=4.8,bob:a=0},c={position:new O,target:new O}){let l=t+1.64+a;return s==="first"?(c.position.set(n,l,e),c.target.set(n-Math.sin(i)*Math.cos(r),l-Math.sin(r),e-Math.cos(i)*Math.cos(r)),c):(c.target.set(n,t+1.3,e),c.position.set(n+Math.sin(i)*Math.cos(r)*o,c.target.y+.65+Math.sin(r)*o,e+Math.cos(i)*Math.cos(r)*o),c)}function Wc(n,e,t,i){return!(t>0)||!(i>0)?n:n.lerp(e,1-Math.exp(-t*i))}function dl(n,e,t,i){return i.length=0,n.intersectObjects(e,t,i),i}var Ex={};function fl(n,e,t,{height:i=18,offsetX:r=-12,offsetZ:s=-8}=Ex){let o=Math.abs(n.shadow.camera.right-n.shadow.camera.left),a=n.shadow.mapSize.width,c=o>0&&a>0?o/a:0,l=c?Math.round(e/c)*c:e,h=c?Math.round(t/c)*c:t;return n.position.set(l+r,i,h+s),n.target.position.set(l,0,h),c}function Ku(n,e,t,i,r){let s=(()=>{let x=90210;return()=>(x=Math.imul(x,1664525)+1013904223>>>0)/4294967296})(),o=new Lt;o.setAttribute("position",new rt([-.015,0,0,.015,0,0,-.012,.08,.01,.012,.08,.01,0,.16,.035],3)),o.setAttribute("uv",new rt([0,0,1,0,0,.5,1,.5,.5,1],2)),o.setIndex([0,1,2,1,3,2,2,3,4]),o.computeVertexNormals();let a=new Ot({color:"#ffffff",side:Ht,roughness:1});a.defines={USE_UV:""};let c={value:0},l={value:new Ct(0,0,0,0)};a.onBeforeCompile=x=>{x.uniforms.uWind=c,x.uniforms.uBase=l,x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec4 uBase;`),x.vertexShader=x.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec3 grassWorld=(instanceMatrix*vec4(position,1.)).xyz;
      transformed.x+=sin(uWind+grassWorld.x*.8+grassWorld.z)*position.y*.13;
      if(abs(grassWorld.x-uBase.x)<uBase.z&&abs(grassWorld.z-uBase.y)<uBase.w)transformed.y-=100.;`),x.fragmentShader=x.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=.7+.35*vUv.y;`)};let h=r?2800:5500,u=new It(o,a,h);u.receiveShadow=!0,u.frustumCulled=!1;let f=i.getContext("2d").getImageData(0,0,i.width,i.height).data,d=new Rt,g=0;for(let x=0;x<h*8&&g<h;x++){let m=s()*4600,p=s()*2900,_=(Math.min(i.height-1,Math.floor(p/2900*i.height))*i.width+Math.min(i.width-1,Math.floor(m/4600*i.width)))*4;if(f[_+1]<f[_]+12||f[_+1]<85)continue;let S=m/t,v=p/t,I=e(S,v);I<.1||(d.position.set(S,I-.015,v),d.rotation.set(0,s()*Math.PI*2,0),d.scale.setScalar(.7+s()*.8),d.updateMatrix(),u.setMatrixAt(g,d.matrix),u.setColorAt(g,new nt().setHSL(.2+s()*.055,.3+s()*.15,.22+s()*.08)),g++)}return u.count=g,n.add(u),{update(x,m){c.value=x,m?l.value.set(m.floor.x/t,m.floor.y/t,m.floor.w/(t*2)+.1,m.floor.h/(t*2)+.1):l.value.set(0,0,0,0)},dispose(){n.remove(u),o.dispose(),a.dispose(),u.dispose()}}}function ju(n,e,{cube:t,tube:i},r){let s=e.width/80,o=e.depth/80,a=e.wallHeight/80,c=e.roofRidge/80;for(let u of n.children)u.name==="floor"&&(u.material=r.surface("paving","#e5ded0",2,.045)),u.name==="wall"&&(u.material=r.surface("plaster","#f8f4e7",1,.025)),u.name==="roof"&&(u.material=r.surface("roof","#efe2d5",2,.045));for(let u of[-1,1]){let f=t(n,"#876742",[u*s/2,a-.09,0],[.13,.16,o+.18]);if(f.name="trim",e.walls.length){let d=t(n,"#a7c4b7",[u*(s/2+.064),1.55,-o*.16],[.02,.9,.7]);d.name="shutter";for(let g=0;g<8;g++)t(n,"#876742",[u*(s/2+.08),1.17+g*.11,-o*.16],[.025,.035,.69]);for(let g of[-o*.16-.39,-o*.16+.39])t(n,"#e2dbc7",[u*(s/2+.078),1.56,g],[.045,1.02,.065])}}let l=i(n,"#ba7655",[0,c+.02,0],[.09,o+.42,.09]);l.rotation.x=Math.PI/2,l.name="ridge";let h=t(n,"#e2dbc7",[0,a-.05,-o/2-.066],[s+.08,.16,.06]);return h.name="trim",n}var Kn=Object.freeze([{id:"home",name:"Main Island",x:0,z:0,radius:480,biome:"mixed",dock:{x:390,z:100},landmarks:["village","player-base","market","harbour"]},{id:"jungle",name:"Jungle Island",x:1150,z:-450,radius:270,biome:"rainforest",dock:{x:930,z:-380},landmarks:["cave","waterfall","hidden-cache"]},{id:"fortress",name:"Fortress Island",x:1900,z:550,radius:240,biome:"rocky",dock:{x:1690,z:490},landmarks:["guarded-estate","rescue-mission"]},{id:"highlands",name:"Highlands Island",x:-1050,z:-850,radius:290,biome:"highlands",dock:{x:-840,z:-710},landmarks:["mine","mountain-trail"]},{id:"smugglers",name:"Smugglers Island",x:-1550,z:250,radius:230,biome:"mangrove",dock:{x:-1340,z:220},landmarks:["warehouse","secret-passage"]},{id:"paradise",name:"Paradise Island",x:700,z:1350,radius:250,biome:"beach",dock:{x:600,z:1120},landmarks:["cabins","reef"]}]),hM=Object.freeze(Object.fromEntries(Kn.map(n=>[n.id,n])));function Qu(n,e){return!Number.isFinite(n)||!Number.isFinite(e)?null:Kn.find(t=>Math.hypot(n-t.x,e-t.z)<=t.radius)??null}function ps(n,e){if(Number.isFinite(n.coastSeed)){let i=n.coastSeed;return .855+.07*Math.sin(e*2+i)+.045*Math.cos(e*3-i)+.025*Math.sin(e*7+i)}let t=n.x*.002+n.z*.001;return .955+.023*Math.sin(e*3+t)+.012*Math.cos(e*5-t)}function gr(n,e,t){let i=(e-n.x)/n.radius,r=(t-n.z)/n.radius,s=Math.hypot(i,r);if(s>=1)return-.32;let o=Math.atan2(r,i),a=ps(n,o),c=Math.max(0,Math.min(1,(a-s)/.12));if(s>a)return-.32*Math.min(1,(s-a)/.04);if(Number.isFinite(n.relief)){let d=(a-s)*n.radius/20,g=Math.min(1,d/18),x=Math.max(0,Math.min(1,(d-18)/85)),m=Math.exp(-((i+.18)**2*4+(r-.16)**2*5))*.7+Math.exp(-((i-.36)**2*11+(r+.25)**2*8))*.42;return .005+g*.65+x*x*(3-2*x)*m*n.relief}let l=Math.max(0,Math.min(1,(.79-s)/.22)),h=l*l*(3-2*l),u=Math.exp(-((i+.18)**2*4+(r-.16)**2*5))*.7+Math.exp(-((i-.36)**2*11+(r+.25)**2*8))*.42,f=n.biome==="highlands"?8.5:n.biome==="rainforest"?2.2:n.biome==="rocky"?1.6:.55;return .005+c*.35+h*u*f}function Xc(n,{segments:e=48}={}){if(!Number.isInteger(e)||e<8||e>256)throw new RangeError("segments must be 8..256");let t=[0,gr(n,n.x,n.z),0],i=[.5,.5],r=[],s=Math.ceil(e/2);for(let l=1;l<=s;l++)for(let h=0;h<=e;h++){let u=h/e*Math.PI*2,f=Number.isFinite(n.relief)?ps(n,u)+.03:1.02,d=n.radius*f*l/s,g=Math.cos(u)*d,x=Math.sin(u)*d;t.push(g,gr(n,n.x+g,n.z+x),x),i.push(.5+g/(n.radius*2.04),.5+x/(n.radius*2.04));let m=1+(l-1)*(e+1)+h;if(h!==e)if(l===1)r.push(0,m+1,m);else{let p=m-(e+1);r.push(p,m+1,m,p,p+1,m+1)}}let o=new Lt;o.setAttribute("position",new rt(t,3)),o.setAttribute("uv",new rt(i,2)),o.setIndex(r),o.computeVertexNormals();let a=new Ot({color:n.biome==="beach"?11779972:5538650,roughness:1,side:Ht}),c=new mt(o,a);return c.name="archipelago-"+n.id,c.position.set(n.x,0,n.z),c.receiveShadow=!0,c}function ed(n={}){let e=new ke;e.name="archipelago-terrain";for(let t of Kn)e.add(Xc(t,n));return e}function ms(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,c=new Lt,l=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=n[f].attributes.position.count}c.setIndex(u)}for(let h in s){let u=td(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let g=td(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function td(n){let e,t,i,r=-1,s=0;for(let l=0;l<n.length;++l){let h=n[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let o=new e(s),a=new Qt(o,t,i),c=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){let x=h.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(h.array,c);c+=h.count*t}return r!==void 0&&(a.gpuType=r),a}var oo=Object.freeze([{x:95,z:-95,w:105,d:80,h:4.4,color:"#d8b8a3",shutter:"#557f7b"},{x:-55,z:-115,w:110,d:85,h:5.8,color:"#d5dfd4",shutter:"#73868b"},{x:-210,z:-95,w:100,d:90,h:4.5,color:"#e6cf97",shutter:"#426d73"},{x:100,z:110,w:100,d:90,h:5.6,color:"#9fbdac",shutter:"#705b48"},{x:-70,z:130,w:110,d:85,h:4.4,color:"#dfc6b5",shutter:"#587e7c"},{x:-225,z:110,w:90,d:75,h:4.5,color:"#c5d1d0",shutter:"#7a6a58"}]);function xr(n,e,t=oo){return e==="home"&&t.some(i=>Math.abs(n.x-i.x)<i.w/2+7&&Math.abs(n.z-i.z)<i.d/2+7)}var Ax=`
float hash21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise21(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hash21(i),hash21(i+vec2(1.,0.)),f.x),mix(hash21(i+vec2(0.,1.)),hash21(i+vec2(1.)),f.x),f.y);}
float fbm21(vec2 p){float f=0.,a=.5;for(int i=0;i<4;i++){f+=a*noise21(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`,id=`
float hashFast(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noiseFast(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hashFast(i),hashFast(i+vec2(1.,0.)),f.x),mix(hashFast(i+vec2(0.,1.)),hashFast(i+vec2(1.)),f.x),f.y);}
float fbmFast(vec2 p){float f=0.,a=.535714;for(int i=0;i<3;i++){f+=a*noiseFast(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`;function pl(n,{size:e=900,segments:t=72,coastSeeds:i=[]}={}){let r=Array.from({length:9},(c,l)=>new Ct(...n[l]||[1e4,1e4,1,1])),s=new wn({fog:!0,uniforms:{...nl.clone(we.fog),uTime:{value:0},uEye:{value:new O},uCoasts:{value:r},uCoastSeeds:{value:Array.from({length:9},(c,l)=>i[l]??-100)}},vertexShader:`uniform float uTime;varying vec3 vWater;
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
    }`}),o=new Pn(e,e,t,t);o.rotateX(-Math.PI/2),s.userData.fragmentNoiseLayers=7;let a=new mt(o,s);return a.name="tropical-ocean",a.position.y=-.045,{mesh:a,update(c,l){s.uniforms.uTime.value=c,s.uniforms.uEye.value.copy(l)},dispose(){o.dispose(),s.dispose()}}}function ml(n=420){let e=new wn({side:hn,depthWrite:!1,uniforms:{uTime:{value:0}},vertexShader:"varying vec3 vSky;void main(){vSky=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float uTime;varying vec3 vSky;${id}
  void main(){vec3 dir=normalize(vSky);float h=dir.y;
    vec3 col=mix(vec3(.65,.79,.84),vec3(.095,.34,.59),smoothstep(-.02,.8,h));
    vec2 p=dir.xz/max(.1,h)*2.3+vec2(uTime*.006,uTime*.0025);float n=fbmFast(p);
    float cloud=smoothstep(.52,.70,n)*smoothstep(.025,.20,h);
    col=mix(col,mix(vec3(.62,.69,.71),vec3(.98,.96,.89),smoothstep(.50,.70,n)),cloud);
    float sun=pow(max(dot(dir,normalize(vec3(-.55,.82,-.36))),0.),70.);col+=vec3(.35,.24,.12)*sun;
    gl_FragColor=vec4(col,1.);
    #include <colorspace_fragment>
  }`});e.userData.fragmentNoiseLayers=3;let t=new mt(new Tn(n,32,20),e);return t.name="tropical-sky",t.renderOrder=-10,t.frustumCulled=!1,t}function gl(n,e){let t=new Ot({roughness:1,color:"#ffffff",vertexColors:!0});return t.userData.fragmentNoiseLayers=3,t.onBeforeCompile=i=>{Object.assign(i.uniforms,{uGrass:{value:n.textures.get("grass")},uSand:{value:n.textures.get("sand")},uRock:{value:n.textures.get("rock")}}),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vIslandPosition;varying vec3 vIslandNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vIslandPosition=position;vIslandNormal=normalize(normal*vec3(${e.toFixed(1)},1.,${e.toFixed(1)}));`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vIslandPosition;varying vec3 vIslandNormal;uniform sampler2D uGrass;uniform sampler2D uSand;uniform sampler2D uRock;${id}`).replace("#include <map_fragment>",`
        vec2 uv=vIslandPosition.xz/${e.toFixed(1)}*.34;
        float n=fbmFast(uv*.46);vec2 offset=vec2(17.3,8.1);
        vec3 grass=mix(texture2D(uGrass,uv).rgb,texture2D(uGrass,uv*1.37+offset).rgb,.38);
        vec3 sand=texture2D(uSand,uv*.8).rgb,rock=texture2D(uRock,uv*.62).rgb;
        float beach=1.-smoothstep(.025,.34,vIslandPosition.y);
        float slope=1.-abs(normalize(vIslandNormal).y);float cliff=smoothstep(.44,.76,slope)*(1.-beach);
        diffuseColor.rgb*=mix(mix(grass,sand,beach),rock,cliff)*(.82+n*.28);`)},t.customProgramCacheKey=()=>`tropical-island-${e}`,t}function nd(n=14){let e=[],t=[],i=[],r=(o,a,c,l)=>{let h=a*2.2,u=Math.sin(a*Math.PI)*.55-a*a*.95;return[Math.sin(o)*h+Math.cos(o)*l*c,u-l*.17,Math.cos(o)*h-Math.sin(o)*l*c]};for(let o=0;o<9;o++){let a=o*Math.PI*2/9;for(let c=1;c<n;c++)for(let l of[-1,1]){let h=c/n,u=Math.sin(h*Math.PI)*.44,f=e.length/3;e.push(...r(a,h-.03,l,.012),...r(a,h-.09,l,u),...r(a,h+.025,l,u*.87),...r(a,h+.03,l,.012)),t.push(h,0,h,.9,h+.03,1,h+.03,0),i.push(f,f+1,f+2,f,f+2,f+3)}}let s=new Lt;return s.setAttribute("position",new rt(e,3)),s.setAttribute("uv",new rt(t,2)),s.setIndex(i),s.computeVertexNormals(),s}var sn=(n,e=0)=>{let t=Math.sin((n+1)*12.9898+(e+1)*78.233)*43758.5453;return t-Math.floor(t)};function Cx(n,e){for(let t of n){let i=t.userData.lod,r=i.distance+i.radius,s=e.distanceToSquared(i.center)<=r*r?"high":"low";s!==i.level&&(t.geometry=i[s],i.level=s,i.shadowReceiverLod&&(t.receiveShadow=s==="high"))}}function Rx(n,e,t){return n.ready&&n.x===t.x&&n.y===t.y&&n.z===t.z?!1:(n.ready=!0,n.x=t.x,n.y=t.y,n.z=t.z,Cx(e,t),!0)}function xl(n,e,{scale:t,height:i,surfaces:r,small:s=!1,clear:o=()=>!1,dense:a=!1,lod:c=!1}={}){let l=(M,E)=>{let z=new Gt(.085,.16,1,M,E);z.translate(0,.5,0);let P=z.attributes.position;for(let R=0;R<P.count;R++)P.setX(R,P.getX(R)+P.getY(R)**2*.2);return z.computeVertexNormals(),z},h=l(8,6),u=c?l(6,3):h,f=r.surface("wood","#bc9c71",2,.03),d=r.surface("leaf","#9cb384",1,.01).clone();d.side=Ht;let g=nd(s?9:12),x=c?nd(s?6:7):g,m=[],p=[],_=new Rt,S=650/t,v=0;for(let M of e){let E=[];for(let P=0;P<(a?M.id==="home"?s?700:1500:s?280:650:s?22:42);P++){let R=P+M.x*.013+M.z*.017,U=P*2.39996+M.x*.001+(sn(R,0)-.5)*.72,G=a?Math.min(.93,Math.max(.12,Math.sqrt(P*.6180339%1)*.91+(sn(R,1)-.5)*.09)):Math.min(.91,.34+P%7*.075+(sn(R,1)-.5)*.08),W=M.radius*G,B=M.x+Math.sin(U)*W,ie=M.z+Math.cos(U)*W;o(M,B,ie)||i(B,ie)<.32||E.push({x:B/t,z:ie/t,y:i(B,ie),a:U,h:3.45+sn(R,2)*2.15,size:.7+sn(R,3)*.43,leanX:(sn(R,4)-.5)*.12,leanZ:(sn(R,5)-.5)*.14,index:v++})}if(!E.length)continue;let z=Array.from({length:4},()=>[]);E.forEach(P=>z[(P.x>=M.x/t?1:0)+(P.z>=M.z/t?2:0)].push(P)),z.forEach((P,R)=>{if(!P.length)return;let U=new It(h,f,P.length),G=new It(g,d,P.length);U.name=m.length?`grove-trunks-${M.id}-${R+1}`:"grove-trunks",G.name=p.length?`grove-fronds-${M.id}-${R+1}`:"grove-fronds";for(let W=0;W<P.length;W++){let B=P[W];_.position.set(B.x,B.y,B.z),_.rotation.set(B.leanX,B.a,B.leanZ),_.scale.set(B.size,B.h,B.size),_.updateMatrix(),U.setMatrixAt(W,_.matrix),_.position.set(B.x+.2*B.size*Math.cos(B.a),B.y+B.h,B.z-.2*B.size*Math.sin(B.a)),_.rotation.set(B.leanX*.35,B.a+sn(B.index,6)*Math.PI*.35,B.leanZ*.35),_.scale.setScalar(B.size),_.updateMatrix(),G.setMatrixAt(W,_.matrix),G.setColorAt(W,new nt().setHSL(.245+sn(B.index,7)*.065,.22+sn(B.index,8)*.13,.59+sn(B.index,9)*.12))}for(let W of[U,G])W.userData.cullingRegion={island:M.id,sector:R+1},W.castShadow=!0,W.instanceMatrix.needsUpdate=!0,W.computeBoundingSphere(),n.add(W);U.userData.lod={high:h,low:u,distance:S,level:"high",shadowReceiverLod:c,center:U.boundingSphere.center.clone(),radius:U.boundingSphere.radius},G.userData.lod={high:g,low:x,distance:S,level:"high",center:G.boundingSphere.center.clone(),radius:G.boundingSphere.radius},U.receiveShadow=!0,G.receiveShadow=!1,m.push(U),p.push(G)})}let I=new nr(1,1),T=r.surface("rock","#a9aaa0",2,.08),N=[];for(let M of e){let E=[];for(let P=0;P<(s?14:24);P++){let R=P+M.x*.019+M.z*.023,U=P*2.399+.6+(sn(R,10)-.5)*.62,G=M.radius*(.84+sn(R,11)*.1),W=M.x+Math.sin(U)*G,B=M.z+Math.cos(U)*G;o(M,W,B)||E.push({x:W/t,y:i(W,B)-.1,z:B/t,a:U,j:P,seed:R})}if(!E.length)continue;let z=new It(I,T,E.length);z.name=N.length?"shore-rocks-"+M.id:"shore-rocks";for(let P=0;P<E.length;P++){let R=E[P];_.position.set(R.x,R.y,R.z),_.rotation.set(sn(R.seed,12)*1.2,R.a,sn(R.seed,13)*1.1),_.scale.set(.27+sn(R.seed,14)*.5,.2+sn(R.seed,15)*.43,.31+sn(R.seed,16)*.53),_.updateMatrix(),z.setMatrixAt(P,_.matrix)}z.castShadow=z.receiveShadow=!0,z.instanceMatrix.needsUpdate=!0,z.computeBoundingSphere(),n.add(z),N.push(z)}let F=[...m,...p],w={};return{trees:m[0],foliage:p[0],treeBatches:m,foliageBatches:p,rocks:N[0],rockBatches:N,lodGeometries:[h,u,g,x],update(M){return Rx(w,F,M)}}}function _l(n,{scale:e,height:t,surfaces:i,helpers:r,village:s=oo,paths:o,marketPoint:a={x:290,z:-30}}){let{cube:c,tube:l,ell:h}=r,u=[];function f(E){let z=new Map;E.updateMatrix();for(let P of[...E.children])if(P.isMesh){P.updateMatrix();let R=P.geometry.clone().applyMatrix4(P.matrix);z.has(P.material)||z.set(P.material,[]),z.get(P.material).push(R),E.remove(P)}for(let[P,R]of z){let U=ms(R,!1);R.forEach(W=>W.dispose());let G=new mt(U,P);G.castShadow=G.receiveShadow=!0,E.add(G)}}function d(E,z){let P=new Map,R=0;n.updateMatrixWorld(!0),z.updateMatrixWorld(!0);let U=new Pt().copy(z.matrixWorld).invert(),G=new Pt;for(let W of E)for(let B of[...W.children])if(B.isMesh){B.updateMatrixWorld(!0),G.multiplyMatrices(U,B.matrixWorld);let ie=B.geometry.clone().applyMatrix4(G);P.has(B.material)||P.set(B.material,[]),P.get(B.material).push(ie),R++,W.remove(B),B.geometry.dispose()}for(let[W,B]of P){let ie=ms(B,!1);B.forEach(fe=>fe.dispose()),ie.computeBoundingSphere();let ae=new mt(ie,W);ae.castShadow=ae.receiveShadow=!0,z.add(ae)}return{sourceBatches:R,materialBatches:z.children.length}}function g(E,z=n,P=!0,R=0){let U=new ke;U.name="village-house",z.add(U),U.position.set(P?E.x/e:E.x,P?t(E.x,E.z):0,P?E.z/e:E.z),U.rotation.y=E.facing??(E.z>60?Math.PI:0);let G=E.w/e,W=E.d/e,B=E.h,ie=c(U,E.color,[0,B/2,0],[G,B,W]);ie.material=i.surface("plaster",E.color,2,.035);let ae=i.surface("roof","#d5bbab",2,.065);for(let Z of[-1,1]){let J=c(U,"#ba7655",[Z*G/4,B+.43,0],[Math.hypot(G/2+.25,.85),.13,W+.5]);J.rotation.z=-Z*Math.atan2(.85,G/2+.25),J.material=ae,c(U,"#a75f45",[Z*(G/2+.13),B+.01,0],[.14,.22,W+.58])}let fe=l(U,"#a75f45",[0,B+.86,0],[.12,W+.62,.12]);fe.rotation.x=Math.PI/2;for(let Z of[.17,B*.52,B-.16])c(U,"#e2dbc7",[0,Z,W/2+.035],[G+.16,.14,.1]);let De=B>5?2:1;for(let Z=0;Z<De;Z++)for(let J of[-G*.31,G*.31]){let ge=1.5+Z*2.35,Ie=W/2+.08,Pe=c(U,"#415d63",[J,ge,Ie],[.75,1.2,.05]);Pe.material.roughness=.24,Pe.material.metalness=.1,c(U,"#e2dbc7",[J,ge,Ie+.045],[.065,1.15,.075]),c(U,"#e2dbc7",[J,ge,Ie+.046],[.7,.065,.076]);for(let et of[-1,1]){let Ne=c(U,E.shutter,[J+et*.56,ge,Ie+.03],[.34,1.3,.07]);Ne.rotation.y=et*.24;for(let L=0;L<9;L++)c(U,"#876742",[J+et*.56,ge-.52+L*.13,Ie+.085],[.33,.024,.04])}if(c(U,"#e2dbc7",[J,ge-.68,Ie],[1.7,.1,.16]),c(U,"#e2dbc7",[J,ge+.68,Ie],[1.7,.13,.15]),Z===0){let et=c(U,"#876742",[J,.79,W/2+.25],[1.28,.2,.3]);if(et.rotation.x=-.04,h)for(let Ne=-2;Ne<=2;Ne++){let L=h(U,Ne%2?"#6f8f58":"#88a866",[J+Ne*.22,.99+Math.abs(Ne)*.025,W/2+.27],[.17,.31,.15]);L.rotation.z=Ne*.14}if(De===1){let Ne=c(U,E.shutter,[J,2.32,W/2+.46],[1.55,.08,.82]);Ne.rotation.x=-.15,c(U,E.shutter,[J,2.2,W/2+.83],[1.55,.17,.07])}}}c(U,"#5a4b3d",[0,1.05,W/2+.06],[.78,2.1,.1]);for(let Z of[.55,1.42])for(let J of[-.19,.19])c(U,"#745f4c",[J,Z,W/2+.125],[.29,.6,.045]);for(let Z of[-.48,.48])c(U,"#e2dbc7",[Z,1.08,W/2+.11],[.16,2.22,.18]);c(U,"#e2dbc7",[0,2.18,W/2+.11],[1.1,.16,.18]),c(U,"#c9baa1",[0,.07,W/2+.34],[1.16,.14,.58]),h&&h(U,"#caa457",[.27,1.04,W/2+.19],[.055,.055,.035]);let We=(R%2?-1:1)*G*.42,ft=W/2+.55,Je=l(U,"#e2dbc7",[We,2.91,W/2+.34],[.035,.7,.035]);Je.rotation.x=Math.PI/2,c(U,E.shutter,[We,2.62,ft],[.09,.56,.64]);for(let Z of[-1,1]){let J=c(U,"#e2dbc7",[We+Z*.052,2.62,ft],[.018,.22,.24]);J.rotation.x=(R%3-1)*.22}if(De===2){c(U,"#e2dbc7",[0,2.75,W/2+.48],[G+.15,.18,.9]);for(let Z=0;Z<=10;Z++)l(U,"#e2dbc7",[-G/2+Z*G/10,3.18,W/2+.84],[.034,.76,.034]);c(U,"#e2dbc7",[0,3.58,W/2+.84],[G+.17,.08,.1])}for(let Z of[-1,1])for(let J=0;J<De;J++)for(let ge of[-W*.26,W*.26])c(U,E.shutter,[Z*(G/2+.03),1.5+J*2.35,ge],[.06,1.22,.8]),c(U,"#e2dbc7",[Z*(G/2+.07),.82+J*2.35,ge],[.16,.1,1.05]),c(U,"#e2dbc7",[Z*(G/2+.07),2.18+J*2.35,ge],[.16,.12,1.05]);return U.userData.facadeDetails={planters:2,awnings:De===1?2:0,balcony:De===2,windowPanes:De*8,doorPanels:4,doorway:!0,ridgeCaps:1,eaveFascias:2,hangingSigns:1,signMarks:2,signClearance:!0},f(U),u.push(U),U}s.forEach((E,z)=>g(E,n,!0,z));let x=new ke;x.name="village-buildings",n.add(x),x.userData.batchDetails={sourceHouses:u.length,...d(u,x)},x.userData.cameraBlocker=!0;let m=new ke;m.name="village-overhead-laundry",n.add(m);let p=["#bd6f53","#e8d99e","#587e7c","#73868b"],_=[...s].sort((E,z)=>E.z-z.z),S=Math.ceil(_.length/2),v=0,I=0;for(let E of[_.slice(0,S),_.slice(S)]){let z=[...E].sort((P,R)=>P.x-R.x);for(let P=1;P<z.length;P++){let R=z[P-1],U=z[P],G=R.x+R.w/2,W=U.x-U.w/2;if(W<=G)continue;let B=(G+W)/2,ie=(R.z+U.z)/2,ae=Math.max(t(B,ie)+3.35,3.55),fe=(W-G)/e,De=l(m,"#5a4b3d",[B/e,ae,ie/e],[.012,fe,.012]);De.rotation.z=Math.PI/2,v++;for(let We=0;We<3;We++){let ft=(G+(W-G)*(We+1)/4)/e,Je=p[(v+We)%p.length],Z=c(m,Je,[ft,ae-.24-We%2*.05,ie/e],[.46,.48+We%2*.1,.025]);Z.rotation.z=(We-1)*.06,I++}}}m.userData.laundryDetails={lines:v,garments:I,clearance:!0},f(m);function T(E,z,P=!1){let R=[],U=[],G=[],W=0;for(let ae=0;ae<E.length;ae++){let fe=E[Math.max(0,ae-1)],De=E[Math.min(E.length-1,ae+1)],We=E[ae],ft=De.x-fe.x,Je=De.z-fe.z,Z=Math.hypot(ft,Je)||1;ae&&(W+=Math.hypot(We.x-E[ae-1].x,We.z-E[ae-1].z)/e);for(let J of[-1,1]){let ge=We.x-Je/Z*z/2*J,Ie=We.z+ft/Z*z/2*J;R.push(ge/e,t(ge,Ie)+.018,Ie/e),U.push((J+1)/2*z/e,W)}if(ae){let J=ae*2;G.push(J-2,J-1,J,J-1,J+1,J)}}let B=new Lt;B.setAttribute("position",new rt(R,3)),B.setAttribute("uv",new rt(U,2)),B.setIndex(G),B.computeVertexNormals();let ie=new mt(B,i.surface("paving","#ded9c9",.75,.045));if(ie.name="village-path",ie.receiveShadow=!0,n.add(ie),P){let ae=Math.max(4,z*.08),fe=new cn(1,1,1),De=new It(fe,i.surface("rock","#dad4c6",1.2,.025),(E.length-1)*2),We=new Rt;De.name="village-curb";let ft=0;for(let Je=1;Je<E.length;Je++){let Z=E[Je-1],J=E[Je],ge=J.x-Z.x,Ie=J.z-Z.z,Pe=Math.hypot(ge,Ie),et=-Ie/Pe,Ne=ge/Pe;for(let L of[-1,1]){let bt=(Z.x+J.x)/2+et*(z/2+ae/2)*L,tt=(Z.z+J.z)/2+Ne*(z/2+ae/2)*L;We.position.set(bt/e,t(bt,tt)+.065,tt/e),We.rotation.set(0,Math.atan2(ge,Ie),0),We.scale.set(ae/e,.1,Pe/e+.025),We.updateMatrix(),De.setMatrixAt(ft++,We.matrix)}}De.castShadow=De.receiveShadow=!0,De.instanceMatrix.needsUpdate=!0,De.computeBoundingSphere(),n.add(De)}}let N=[];for(let E of o||[{points:Array.from({length:31},(z,P)=>({x:385-P*21,z:36+Math.sin(P*.19)*9})),width:55,curb:!0},{points:Array.from({length:15},(z,P)=>({x:23,z:-280+P*39})),width:40,curb:!0}]){let z=[E.points[0]];for(let P=1;P<E.points.length;P++){let R=E.points[P-1],U=E.points[P],G=Math.ceil(Math.hypot(U.x-R.x,U.z-R.z)/30);for(let W=1;W<=G;W++)z.push({x:R.x+(U.x-R.x)*W/G,z:R.z+(U.z-R.z)*W/G})}if(T(z,E.width,E.curb),E.curb)for(let P=3;P<E.points.length-3;P+=6){let R=E.points[P-1],U=E.points[P+1],G=E.points[P],W=U.x-R.x,B=U.z-R.z,ie=Math.hypot(W,B)||1,ae=Math.floor(P/6)%2?1:-1,fe=E.width/2+9,De=G.x-B/ie*fe*ae,We=G.z+W/ie*fe*ae;N.push({x:De/e,y:t(De,We),z:We/e})}}if(N.length){let E=new Gt(1,1,1,10),z=new Tn(1,12,8),P=new Rt,R=new It(E,new Ot({color:"#394447",roughness:.62,metalness:.38}),N.length),U=new It(z,new Ot({color:"#ffe4a8",emissive:"#ffb85c",emissiveIntensity:.72,roughness:.34}),N.length);R.name="village-lamp-posts",U.name="village-lamp-globes";for(let G=0;G<N.length;G++){let W=N[G];P.position.set(W.x,W.y+1.35,W.z),P.scale.set(.065,2.7,.065),P.updateMatrix(),R.setMatrixAt(G,P.matrix),P.position.set(W.x,W.y+2.76,W.z),P.scale.set(.18,.22,.18),P.updateMatrix(),U.setMatrixAt(G,P.matrix)}R.castShadow=R.receiveShadow=!0,U.castShadow=!1,U.receiveShadow=!0;for(let G of[R,U])G.instanceMatrix.needsUpdate=!0,G.computeBoundingSphere(),n.add(G)}let F=new ke;F.name="harbor-market",F.position.set(a.x/e,t(a.x,a.z),a.z/e),n.add(F);for(let E of[-1.4,1.4])for(let z of[-.6,.6])l(F,"#876742",[E,1.2,z],[.045,2.4,.045]);let w=c(F,"#cc8660",[0,2.35,0],[3.2,.07,1.8]);w.rotation.x=.07;for(let E=0;E<6;E++){let z=E%2?"#f3dfbe":"#bd6f53",P=(E-2.5)*.53,R=c(F,z,[P,2.395,0],[.53,.035,1.76]);R.rotation.x=.07,c(F,z,[P,2.27,.92],[.49,.18,.055])}c(F,"#a98961",[0,.7,0],[2.8,.15,.9]);let M=["#ce5949","#e6b64d","#709a55"];for(let E=0;E<5;E++){let z=(E-2)*.5;if(c(F,"#a68854",[z,.88,0],[.43,.2,.68]),h)for(let P=0;P<3;P++)h(F,M[(E+P)%M.length],[z+(P-1)*.11,1.05,P%2?-.11:.11],[.075,.085,.075])}return F.userData.marketDetails={canopyStripes:6,valances:6,produce:15},f(F),{building:g,houses:u,buildings:x}}var ut=20;var _n=Kn.map((n,e)=>({...n,x:n.x*16,z:n.z*16,dock:{x:n.dock.x*16,z:n.dock.z*16},radius:n.id==="home"?9e3:n.radius*16,coastSeed:1.3+e*1.7,relief:n.id==="home"?24:n.biome==="highlands"?85:n.biome==="rainforest"?42:n.biome==="rocky"?28:12})),Yc=Object.fromEntries(_n.map(n=>[n.id,n])),_s={minX:Math.min(..._n.map(n=>n.x-n.radius))-1600,maxX:Math.max(..._n.map(n=>n.x+n.radius))+1600,minZ:Math.min(..._n.map(n=>n.z-n.radius))-1600,maxZ:Math.max(..._n.map(n=>n.z+n.radius))+1600},rd=(n,e)=>_n.find(t=>Math.hypot(n-t.x,e-t.z)<t.radius)||null,vt=Object.fromEntries(_n.map((n,e)=>{let t=Kn[e],i=Math.hypot(t.dock.x-t.x,t.dock.z-t.z),r=(t.dock.x-t.x)/i,s=(t.dock.z-t.z)/i,o=n.radius*ps(n,Math.atan2(s,r)),a=c=>({x:n.x+r*c,z:n.z+s*c});return[n.id,{id:n.id,...a(o+320),ux:r,uz:s,land:a(o-320),end:a(o+240),shore:a(o+200),width:38,deck:.72}]})),xs={x:vt.home.land.x-385,z:vt.home.land.z-40},_r=oo.map(n=>({...n,x:n.x+xs.x,z:n.z+xs.z,facing:n.z>60?Math.PI:0})),gs=(n,e)=>({x:n+xs.x,z:e+xs.z}),ao=[{width:55,curb:!0,points:Array.from({length:31},(n,e)=>e===0?{...vt.home.land}:gs(385-e*21,36+Math.sin(e*.19)*9))},{width:40,curb:!0,points:Array.from({length:15},(n,e)=>gs(23,-280+e*39))},{width:36,points:[gs(-245,40),gs(-600,30),{x:Yc.home.radius*.35,z:400},{x:800,z:-700},{x:-1800,z:-2400}]}],sd=gs(290,-30),qt={x:vt.fortress.land.x-vt.fortress.ux*800,z:vt.fortress.land.z-vt.fortress.uz*800},od={x:qt.x-115,z:qt.z+145},ht={pump:gs(330,65),cave:{x:vt.jungle.land.x-vt.jungle.ux*700,z:vt.jungle.land.z-vt.jungle.uz*700},estate:{x:qt.x,z:qt.z+102},paper:{x:0,z:-40},caveExit:{x:0,z:150},estateExit:{x:0,z:130},stairs:{x:70,z:-95},cellarExit:{x:0,z:150},key:{x:0,z:-60}};ht.supply={x:ht.cave.x+150,z:ht.cave.z-105};var Ix=[{id:"gate",area:null,...od,hp:2},{id:"patrol",area:null,x:qt.x+110,z:qt.z+85,hp:2},{id:"hall",area:"estate",x:-65,z:15,hp:2},{id:"boss",area:"estate",x:0,z:-60,hp:3}];function qc(n,e,t){return t=Math.max(0,Math.min(1,t)),t=t*t*(3-2*t),n+(e-n)*t}function yr(n,e,t=rd(n,e)){if(!t)return-.32;let i=gr(t,n,e);if(i<=.01)return i;if(t.id==="home"){let r=Math.hypot(n-xs.x+80,e-xs.z);r<820&&(i=qc(.68,i,(r-470)/350))}if(t.id==="fortress"){let r=Math.max(Math.abs(n-qt.x),Math.abs(e-qt.z));r<400&&(i=qc(.85,i,(r-180)/220))}if(t.id==="jungle"){let r=Math.hypot(n-ht.cave.x,e-ht.cave.z);r<230&&(i=qc(1.2,i,(r-100)/130))}return i}function Zc(n,e,t){for(let i of t?[vt[t]]:Object.values(vt)){if(!i)continue;let r=n-i.land.x,s=e-i.land.z,o=r*i.ux+s*i.uz,a=r*i.uz-s*i.ux,c=Math.hypot(i.end.x-i.land.x,i.end.z-i.land.z);if(o>=-.5&&o<=c+.5&&Math.abs(a)<=i.width/2){let l=yr(i.land.x,i.land.z);return{dock:i,height:l+(i.deck-l)*Math.max(0,Math.min(1,o/c))}}}return null}function si(n,e){return Zc(n,e)?.height??yr(n,e)}function yl(n,e){return ao.some(t=>t.points.some((i,r)=>{if(!r)return!1;let s=t.points[r-1],o=i.x-s.x,a=i.z-s.z,c=Math.max(0,Math.min(1,((n-s.x)*o+(e-s.z)*a)/(o*o+a*a)));return Math.hypot(n-s.x-o*c,e-s.z-a*c)<t.width/2+35}))}var SM=Object.fromEntries(Kn.map(n=>{let e=Math.hypot(n.dock.x-n.x,n.dock.z-n.z),t=(n.dock.x-n.x)/e,i=(n.dock.z-n.z)/e;return[n.id,{x:n.x+t*n.radius*1.06,z:n.z+i*n.radius*1.06,shore:{x:n.x+t*n.radius*.84,z:n.z+i*n.radius*.84}}]}));var ys={seatZ:-.28,seatTop:.72,hips:.84,eye:1.65};function ad(n,{cube:e,ell:t,mat:i}){let r=new ke;r.name="campaign-boat",n.add(r),t(r,"#233f52",[0,.05,0],[.85,.36,1.9]),t(r,"#dedbd0",[0,.22,0],[.8,.23,1.85]);let s=e(r,"#6e5942",[0,.4,-.15],[1.3,.08,2.7]);s.name="boat-deck";let o=e(r,"#3b5355",[0,.57,ys.seatZ],[.92,.3,.48]);o.name="boat-seat",e(r,"#e7e0d0",[0,.73,.5],[1,.65,.36]);let a=new mt(new cn(1.2,.48,.025),new Ys({color:"#b9e4eb",transparent:!0,opacity:.4,roughness:.1}));a.position.set(0,1.15,.68),r.add(a);let c=new mt(new Mi(.2,.026,8,20),i("#2e3538"));c.name="boat-wheel",c.position.set(0,1.05,.28),r.add(c);let l=new Gt(1,1,1,8),h=new It(l,i("#d6dedc"),10),u=new Rt;h.name="boat-rails";let f=0;for(let _ of[-.68,.68]){for(let S of[.15,.85,1.55])u.position.set(_,.75,S),u.rotation.set(0,0,0),u.scale.set(.025,.5,.025),u.updateMatrix(),h.setMatrixAt(f++,u.matrix);for(let S of[.86,1.01])u.position.set(_,S,.85),u.rotation.set(Math.PI/2,0,0),u.scale.set(.025,1.4,.025),u.updateMatrix(),h.setMatrixAt(f++,u.matrix)}h.castShadow=!0,h.instanceMatrix.needsUpdate=!0,h.computeBoundingSphere(),r.add(h);let d=new Ot({color:"#b7d6d8",emissive:"#31545a",emissiveIntensity:.38,roughness:.28}),g=new It(new Gt(.1,.1,.03,16),d,3);g.name="boat-gauges";for(let _=0;_<3;_++)u.position.set((_-1)*.28,.91,.3),u.rotation.set(Math.PI/2,0,0),u.scale.set(_===1?1:.82,_===1?1:.82,1),u.updateMatrix(),g.setMatrixAt(_,u.matrix);g.instanceMatrix.needsUpdate=!0,g.computeBoundingSphere(),r.add(g);let x=t(r,"#d84e46",[-.65,.79,.94],[.075,.075,.075]),m=t(r,"#52b878",[.65,.79,.94],[.075,.075,.075]);x.name="boat-port-light",m.name="boat-starboard-light",x.material=new Ot({color:"#d84e46",emissive:"#b32b25",emissiveIntensity:.9}),m.material=new Ot({color:"#52b878",emissive:"#238547",emissiveIntensity:.9}),e(r,"#303b40",[0,.35,-1.75],[.42,.6,.38]),e(r,"#303b40",[0,-.12,-1.85],[.22,.65,.25]);let p=new mt(new Pn(1.5,5),new Sn({color:"#d0ebe6",transparent:!0,opacity:.25,depthWrite:!1}));return p.rotation.x=-Math.PI/2,p.position.set(0,.03,-3.3),r.add(p),r.userData.boatDetails={rails:10,gauges:3,navigationLights:2},{boat:r,wake:p}}function ld(n,e){if(n.root.parent===e)return!1;e.add(n.root),n.root.position.set(0,0,ys.seatZ),n.root.rotation.set(0,0,0),n.rig.rotation.set(0,0,0),n.hips.position.y=ys.hips;for(let t of n.arms)t.arm.rotation.x=-.85,t.arm.rotation.z=-t.side*.18,t.forearm.rotation.x=-.72;for(let t of n.legs)t.thigh.rotation.x=-1.68,t.calf.rotation.x=1.68,t.shoe.rotation.x=0;return!0}var cd=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z);var hd=Object.values(vt),Ln=Array.from({length:5},(n,e)=>({id:e,x:(e-2)*38,z:-80,child:e>2})),Px=Ln.map(n=>"cell-"+n.id),Dx=Object.fromEntries(hd.map(n=>[n.id,"dock-"+n.id]));function Lx(n){let e=null,t=15625;for(let i of hd){let r=i.x-n.p.x,s=i.z-n.p.z,o=r*r+s*s;o<t&&(e=i,t=o)}return e}function En(n,e,t,i,r){let s=n[e]||(n[e]={});return Object.assign(s,i),s.id=t,s.label=r,e+1}function ud(n,e){let t=0;if(e.interior==="cave")return t=En(n,t,"paper",ht.paper,e.paper?e.gun?"supplies":"take-gun":"move-paper"),t=En(n,t,"cave-exit",ht.caveExit,"leave-cave"),n.length=t,n;if(e.interior==="estate")return t=En(n,t,"key",ht.key,"take-key"),t=En(n,t,"stairs",ht.stairs,"cellar"),t=En(n,t,"estate-exit",ht.estateExit,"leave-estate"),n.length=t,n;if(e.interior==="cellar"){for(let r of Ln)e.released.includes(r.id)||(t=En(n,t,Px[r.id],r,"free-person"));return t=En(n,t,"cellar-exit",ht.cellarExit,"upstairs"),n.length=t,n}if(e.boat){let r=Lx(e);return r&&(t=En(n,t,Dx[r.id],r,"dock")),n.length=t,n}let i=vt[e.island];if(t=En(n,t,"boat",i.shore,e.released.length===5&&!e.boarded?"board-group":"boat"),e.island==="home"&&(t=En(n,t,"pump",ht.pump,"refuel")),e.island==="jungle"&&(t=En(n,t,"cave",ht.cave,"enter-cave"),t=En(n,t,"supply",ht.supply,"supplies")),e.island==="fortress"&&(t=En(n,t,"estate",ht.estate,"enter-estate")),["highlands","smugglers","paradise"].includes(e.island)){let r=Yc[e.island];t=En(n,t,"supplies",r,"supplies")}return n.length=t,n}function dd(n,e){let t=null,i=1/0;for(let r of n){let s=r.id.startsWith("cell-")?85:r.id.startsWith("dock-")?125:65,o=r.x-e.x,a=r.z-e.z,c=o*o+a*a;c<s*s&&c<i&&(t=r,i=c)}return t}function Ux(n,e){if(e.complete)return n.key="complete",n.target=null,n;if(!e.docked)return n.key="dock-goal",n.target=vt.home,n;if(!e.tanked)return n.key="fuel-goal",n.target=e.boat?vt.home:ht.pump,n;if(!e.gun)return e.interior==="cave"?(n.key=e.paper?"gun-goal":"paper-goal",n.target=ht.paper,n):(n.key="cave-goal",n.target=e.boat?vt.jungle:e.island==="jungle"?ht.cave:vt[e.island].shore,n);if(e.interior==="cave")return n.key="exit-cave-goal",n.target=ht.caveExit,n;if(!e.key){if(e.interior==="estate"){let t=e.guards.find(i=>i.id==="boss");return n.key=t.hp>0?"boss-goal":"key-goal",n.target=t.hp>0?t:ht.key,n}return n.key="estate-goal",n.target=e.boat?vt.fortress:e.island==="fortress"?ht.estate:vt[e.island].shore,n}return e.released.length<5?(n.key=e.interior==="cellar"?"people-goal":"cellar-goal",n.target=e.interior==="cellar"?Ln.find(t=>!e.released.includes(t.id)):e.interior==="estate"?ht.stairs:e.boat?vt.fortress:ht.estate,n):e.interior?(n.key="escort-goal",n.target=e.interior==="cellar"?ht.cellarExit:ht.estateExit,n):e.boarded?(n.key="home-goal",n.target=e.boat?vt.home:e.island==="home"?vt.home.shore:vt[e.island].shore,n):(n.key="boat-goal",n.target=vt.fortress.shore,n)}function Jc(n,e){if(Ux(n,e),e.boat||e.interior||!n.target)return n;let t=vt[e.island],i=!!Zc(e.p.x,e.p.z,e.island);return n.target===t.shore?!i&&cd(e.p,t.land)>65&&(n.target=t.land):i&&cd(e.p,t.land)>45&&(n.target=t.land),n}function vl(n){return Jc({},n)}function $c(n,e,t,i,r){let s=e.interior?1.8:e.boat?.65:1.3;if(n.fillStyle=e.interior?"#25312d":"#176475",n.fillRect(0,0,t,i),n.save(),n.translate(t/2-e.p.x*s,i/2-e.p.z*s),n.scale(s,s),e.interior){if(n.fillStyle="#6f7568",n.fillRect(-115,-125,230,310),n.strokeStyle="#beb99e",n.lineWidth=8,n.strokeRect(-115,-125,230,310),e.interior==="cave"&&(n.fillStyle="#967756",n.fillRect(-25,-60,50,35),n.fillStyle=e.paper?"#30383a":"#e4d6b8",e.gun||n.fillRect(-17,-55,34,22)),e.interior==="estate"&&(n.fillStyle="#9b7751",n.fillRect(-45,-105,90,25),n.fillStyle="#f0c561",!e.key&&e.guards.find(l=>l.id==="boss").hp===0&&n.fillRect(-5,-65,10,12)),e.interior==="cellar")for(let l of Ln)n.strokeStyle="#bac6bf",e.released.includes(l.id)||n.strokeRect(l.x-18,-112,36,80)}else{for(let l of _n){a(l,1,"#398b8b",-4*ut),a(l,1,"#d9cba2"),a(l,1,l.biome==="highlands"?"#8f9882":"#759575",18*ut);for(let u=0;u<26;u++){let f=u*2.39996+l.x*.001,d=l.radius*(.36+u%7*.075),g=l.x+Math.sin(f)*d,x=l.z+Math.cos(f)*d;if(!(l.id==="home"&&(xr({x:g,z:x},l.id,_r)||yl(g,x)))&&!(l.id==="fortress"&&Math.abs(g-qt.x)<125&&Math.abs(x-qt.z)<155)){n.strokeStyle="#365e49",n.lineWidth=5;for(let m=0;m<7;m++){let p=m*Math.PI*2/7;n.beginPath(),n.moveTo(g,x),n.quadraticCurveTo(g+Math.sin(p+.25)*13,x+Math.cos(p+.25)*13,g+Math.sin(p)*25,x+Math.cos(p)*25),n.stroke()}}}n.fillStyle="#fff4cc",n.font="18px system-ui",n.textAlign="center",n.fillText(r(l.id),l.x,l.z-l.radius*.58);let h=vt[l.id];n.strokeStyle="#a2865b",n.lineWidth=h.width,n.beginPath(),n.moveTo(h.land.x,h.land.z),n.lineTo(h.end.x,h.end.z),n.stroke()}for(let l of ao)n.strokeStyle="#b7baa5",n.lineWidth=l.width,n.beginPath(),l.points.forEach((h,u)=>u?n.lineTo(h.x,h.z):n.moveTo(h.x,h.z)),n.stroke();for(let l of _r)n.fillStyle="#304f43",n.fillRect(l.x-l.w/2+7,l.z-l.d/2+9,l.w,l.d),n.fillStyle=l.color,n.fillRect(l.x-l.w/2,l.z-l.d/2,l.w,l.d),n.fillStyle="#ab7861",n.fillRect(l.x-l.w/2-3,l.z-l.d/2+4,l.w+6,l.d-8),n.strokeStyle="#d4aa83",n.lineWidth=4,n.beginPath(),n.moveTo(l.x-l.w/2,l.z),n.lineTo(l.x+l.w/2,l.z),n.stroke();n.fillStyle="#e0d5b9",n.fillRect(qt.x-80,qt.z-80,160,160),n.fillStyle="#352e25",n.fillRect(qt.x-20,qt.z+76,40,12),n.fillStyle="#404b40",n.fillRect(ht.cave.x-36,ht.cave.z-30,72,36),n.fillStyle="#d28757",n.fillRect(ht.pump.x-15,ht.pump.z-16,30,32)}for(let l of e.guards)l.area===e.interior&&l.hp>0&&!e.boat&&(l.area||e.island==="fortress")&&c(l,"#d28b76",12);if(e.interior==="cellar")for(let l of Ln)e.released.includes(l.id)||c(l,"#d3dcbe",10);let o=vl(e).target;o&&(n.strokeStyle="#f5d281",n.lineWidth=3,n.beginPath(),n.arc(o.x,o.z,20+Math.sin(e.elapsed*3)*3,0,Math.PI*2),n.stroke()),n.save(),n.translate(e.p.x,e.p.z),n.rotate(-e.heading),e.boat?(n.fillStyle="#efe4c9",n.beginPath(),n.moveTo(-18,-32),n.lineTo(18,-32),n.lineTo(22,28),n.lineTo(0,50),n.lineTo(-22,28),n.closePath(),n.fill()):(n.fillStyle="#b6ddd3",n.beginPath(),n.arc(0,0,9,0,Math.PI*2),n.fill()),n.strokeStyle="#fff6c7",n.lineWidth=3,n.beginPath(),n.moveTo(0,6),n.lineTo(0,28),n.stroke(),n.restore(),e.shot&&(n.strokeStyle="#ffeac5",n.lineWidth=2,n.beginPath(),n.moveTo(e.shot.from.x,e.shot.from.z),n.lineTo(e.shot.to.x,e.shot.to.z),n.stroke()),n.restore();function a(l,h,u,f=0){n.fillStyle=u,n.beginPath();for(let d=0;d<=96;d++){let g=d/96*Math.PI*2,x=l.radius*ps(l,g)*h-f,m=l.x+Math.cos(g)*x,p=l.z+Math.sin(g)*x;d?n.lineTo(m,p):n.moveTo(m,p)}n.closePath(),n.fill()}function c(l,h,u){n.fillStyle=h,n.beginPath(),n.arc(l.x,l.z,u,0,Math.PI*2),n.fill()}}function Nx(n,e){return e.parent===n?!1:(n.add(e),!0)}function Fx(n,e,t,i,r,s,o,a){if(n.ready&&n.area===e)return!1;n.ready=!0,n.area=e,t.visible=!e,i.visible=!!e;for(let[c,l]of r)l.visible=c===e;return s.background.set(e?"#202c29":"#b9dbe5"),s.fog.color.copy(s.background),o.intensity=e?.65:2,a.intensity=e?.15:2.8,!0}function zx(n,e,t,i){let r=n.values||(n.values=[]),s=!n.ready||r.length!==e.length;for(let o=0;o<e.length;o++)r[o]!==e[o]&&(s=!0);if(!s)return!1;n.ready=!0,r.length=e.length,t.fill(0);for(let o=0;o<e.length;o++){let a=e[o];r[o]=a,t[a]=1}for(let o=0;o<i.length;o++)i[o].visible=!t[o];return!0}function Ox(n,e,t){let i=e.released||[],r=n.released||(n.released=[]),s=!n.ready||n.x!==e.p.x||n.z!==e.p.z||n.area!==(e.interior||"")||n.island!==e.island||n.boat!==!!e.boat||n.paper!==!!e.paper||n.gun!==!!e.gun||n.boarded!==!!e.boarded||r.length!==i.length;for(let o=0;o<i.length;o++)r[o]!==i[o]&&(s=!0);if(!s)return!1;n.ready=!0,n.x=e.p.x,n.z=e.p.z,n.area=e.interior||"",n.island=e.island,n.boat=!!e.boat,n.paper=!!e.paper,n.gun=!!e.gun,n.boarded=!!e.boarded,r.length=i.length;for(let o=0;o<i.length;o++)r[o]=i[o];return n.nearby=dd(ud(t,e),e.p),!0}function Bx(n,e,t,i=!!e.guards?.find(r=>r.id==="boss"&&r.hp>0)){let r=e.released||[],s=n.released||(n.released=[]),o=!n.ready||n.x!==e.p.x||n.z!==e.p.z||n.area!==(e.interior||"")||n.island!==e.island||n.boat!==!!e.boat||n.complete!==!!e.complete||n.docked!==!!e.docked||n.tanked!==!!e.tanked||n.paper!==!!e.paper||n.gun!==!!e.gun||n.key!==!!e.key||n.boarded!==!!e.boarded||n.bossAlive!==i||s.length!==r.length;for(let a=0;a<r.length;a++)s[a]!==r[a]&&(o=!0);if(!o)return!1;n.ready=!0,n.x=e.p.x,n.z=e.p.z,n.area=e.interior||"",n.island=e.island,n.boat=!!e.boat,n.complete=!!e.complete,n.docked=!!e.docked,n.tanked=!!e.tanked,n.paper=!!e.paper,n.gun=!!e.gun,n.key=!!e.key,n.boarded=!!e.boarded,n.bossAlive=i,s.length=r.length;for(let a=0;a<r.length;a++)s[a]=r[a];return Jc(t,e),!0}function kx(n,e,t=!1){let i=e.interior||"",r=!!e.boat,s=Math.round(e.p.x/20),o=Math.round(e.p.z/20),a=Math.round(e.heading*12),c=!!e.boarded,l=e.guards||[],h=e.released||[],u=!n.ready||n.area!==i||n.island!==e.island||n.boat!==r||n.x!==s||n.z!==o||n.heading!==a||n.boarded!==c||n.animated!==t||n.guardCount!==l.length||n.releasedCount!==h.length,f=n.guards||(n.guards=[]),d=n.released||(n.released=[]);for(let g=0;g<l.length;g++){let x=l[g].hp>0;f[g]!==x&&(u=!0),f[g]=x}for(let g=0;g<h.length;g++)d[g]!==h[g]&&(u=!0),d[g]=h[g];return f.length=l.length,d.length=h.length,n.ready=!0,n.area=i,n.island=e.island,n.boat=r,n.x=s,n.z=o,n.heading=a,n.boarded=c,n.animated=t,n.guardCount=l.length,n.releasedCount=h.length,u}function Vx(n,e,t,i){let r=Math.sin(i),s=Math.cos(i);for(let o=0;o<e.length;o++){let a=e[o],c=n[o],l=35+a.id*15,h=a.id%2?16:-16;c.x=t.x-r*l+s*h,c.z=t.z-s*l-r*h}return n}function Gx(n,e,t,i,r=ut){return n.setXYZ(0,e.x/r,i,e.z/r),n.setXYZ(1,t.x/r,i,t.z/r),n.needsUpdate=!0,n}function Hx(n,e,t){let i=e*7;return n.swing=Math.sin(i),n.step=t?.24:0,n.bounce=t?Math.cos(i*2):0,n}function Wx(n,e,t,i,r,s=!1){let o=s||r||!n.ready||n.x!==e.x||n.z!==e.z||n.height!==t||n.heading!==i||n.walking!==r;return n.ready=!0,n.x=e.x,n.z=e.z,n.height=t,n.heading=i,n.walking=r,o}function lo(n,e,t,i,r){let s=n.get(e);return s&&s.x===t&&s.z===i||(s||(s={x:0,z:0,height:0},n.set(e,s)),s.x=t,s.z=i,s.height=r(t,i),n.misses=(n.misses||0)+1),s.height}function Xx(n,e,t,i){if(!n.ready)return n.ready=!0,n.last=e,n.slow=0,n.fast=0,t;let r=e-n.last;return n.last=e,r<=0||r>250?t:(r>34?(n.slow+=r,n.fast=0):r<20?(n.fast+=r,n.slow=Math.max(0,n.slow-r)):(n.slow=Math.max(0,n.slow-r*.5),n.fast=Math.max(0,n.fast-r)),n.slow>=2500&&t>.8?(n.slow=0,n.fast=0,Math.max(.8,Math.round((t-.15)*100)/100)):n.fast>=5e3&&t<i?(n.slow=0,n.fast=0,Math.min(i,Math.round((t+.1)*100)/100)):t)}function fd({canvas:n,getState:e,makeHuman:t,onLost:i,rendererFactory:r=s=>new us(s)}){let s=r({canvas:n,antialias:!0,powerPreference:"high-performance"}),o=innerWidth<=700,a=Math.min(devicePixelRatio||1,o?1.1:1.5);s.setPixelRatio(a),s.setSize(innerWidth,innerHeight,!1),s.outputColorSpace=Xt,s.toneMapping=is,s.shadowMap.enabled=!0,s.shadowMap.type=ns,s.shadowMap.autoUpdate=!1;let c=new er,l=new jt(68,innerWidth/innerHeight,.04,6e3);c.add(l),c.background=new nt("#b9dbe5"),c.fog=new Qi("#b9dbe5",650,2400);let h=new sr("#d5ecfa","#566143",2),u=new ar("#fff2d6",2.8);u.castShadow=!0,u.shadow.mapSize.set(o?1024:2048,o?1024:2048),Object.assign(u.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:.1,far:100}),u.shadow.normalBias=.025,c.add(h,u,u.target);let f=hl(s),d=new Map,g=new Map,x=D=>(d.has(D)||d.set(D,f.forColor(D)||new Ot({color:D,roughness:.85})),d.get(D)),m=(D,V)=>(g.has(D)||g.set(D,V()),g.get(D)),p=(D,V,re,de=[0,0,0],A=[1,1,1])=>{let H=new mt(V,re);return H.position.set(...de),H.scale.set(...A),H.castShadow=H.receiveShadow=!0,D.add(H),H},_=(D,V,re,de)=>p(D,m("box",()=>new cn),x(V),re,de),S=(D,V,re,de)=>p(D,m("cylinder",()=>new Gt(1,1,1,12)),x(V),re,de),v=(D,V,re,de)=>p(D,m("sphere",()=>new Tn(1,16,12)),x(V),re,de),I={mat:x,geo:m,mesh:p,cube:_,tube:S,ell:v},T=new ke,N=new ke,F=D=>{let V=new Map;D.updateMatrix();for(let re of[...D.children])if(re.isMesh){re.updateMatrix();let de=re.geometry.clone().applyMatrix4(re.matrix);V.has(re.material)||V.set(re.material,[]),V.get(re.material).push(de),D.remove(re)}for(let[re,de]of V){let A=ms(de,!1);de.forEach(j=>j.dispose());let H=new mt(A,re);H.castShadow=H.receiveShadow=!0,D.add(H)}},w=(D,V)=>{let re=new Set(D.legs.map(Q=>Q.shoe)),de=0,A=0,H=0;D.root.traverse(Q=>{Q.isMesh&&de++});let j=Q=>{for(let oe of[...Q.children])oe.isMesh||j(oe);let xe=new Map;for(let oe of[...Q.children])oe.isMesh&&!re.has(oe)&&!oe.isInstancedMesh&&(xe.has(oe.material)||xe.set(oe.material,[]),xe.get(oe.material).push(oe));for(let[oe,ye]of xe)if(ye.length>1){let st=ye.map(Se=>(Se.updateMatrix(),Se.geometry.clone().applyMatrix4(Se.matrix))),it=ms(st,!1);st.forEach(Se=>Se.dispose());let ot=new mt(it,oe);ot.name=`${V}-rigid-batch-${H++}`,ot.castShadow=ye.some(Se=>Se.castShadow),ot.receiveShadow=ye.some(Se=>Se.receiveShadow),ye.forEach(Se=>Q.remove(Se)),Q.add(ot)}};j(D.root),D.root.traverse(Q=>{Q.isMesh&&A++}),D.root.userData.rigidBatchProfile={sourceMeshes:de,renderMeshes:A,batches:H,animatedShoes:re.size}},M=(D,V,re)=>{let de=new ke;de.name="campaign-supply-cache-"+D,de.position.set(V/ut,si(V,re),re/ut),T.add(de),_(de,"#a98961",[0,.34,0],[1.45,.68,.88]),_(de,"#debb63",[0,.72,0],[1.52,.09,.94]);for(let A of[-.54,.54])_(de,"#debb63",[A,.35,.46],[.1,.62,.06]);_(de,"#bd6e4e",[-1.02,.42,.04],[.42,.84,.55]),_(de,"#394447",[-1.02,.87,.04],[.2,.08,.22]);for(let A of[-1.15,-.89])_(de,"#394447",[A,.75,.04],[.05,.24,.05]);return _(de,"#394447",[-1.02,.84,.04],[.26,.05,.05]),_(de,"#596b4e",[.93,.23,.04],[.72,.46,.58]),_(de,"#394447",[.93,.48,.04],[.48,.05,.26]),_(de,"#e2dbc7",[.82,.86,-.03],[.7,.34,.5]),_(de,"#bd6e4e",[.82,.87,.235],[.34,.08,.025]),_(de,"#bd6e4e",[.82,.87,.235],[.08,.25,.025]),de.userData.supplyDetails={crate:!0,fuelCan:!0,medkit:!0,ammoBox:!0},F(de),de};c.add(T,N);let E=o?96:192,z=Math.max(..._n.map(D=>D.radius)),P=[];for(let D of _n){let V=Math.max(o?48:72,Math.round(E*D.radius/z/8)*8),re=Xc(D,{segments:V});re.userData.terrainSegments=V,P.push(re),re.scale.set(1/ut,1,1/ut),re.position.set(D.x/ut,0,D.z/ut);let de=re.geometry.attributes.position;for(let Te=0;Te<de.count;Te++)de.setY(Te,yr(D.x+de.getX(Te),D.z+de.getZ(Te),D));let A=new Float32Array(de.count*3),H=new nt;for(let Te=0;Te<de.count;Te++){let ct=Math.hypot(de.getX(Te),de.getZ(Te))/D.radius;H.set(ct>.8?"#fff7e4":D.biome==="rocky"?"#d1d4c5":"#dce2c8"),H.toArray(A,Te*3)}re.geometry.setAttribute("color",new Qt(A,3)),re.geometry.computeVertexNormals(),re.material.dispose(),re.material=gl(f,ut),re.material.vertexColors=!0,T.add(re);let j=vt[D.id],Q=new ke,xe=yr(j.land.x,j.land.z);Q.name="pier-"+D.id,Q.position.set(j.land.x/ut,xe,j.land.z/ut),Q.rotation.y=Math.atan2(j.ux,j.uz),T.add(Q);let oe=Ml(j.end,j.land)/ut,ye=Math.ceil(oe/.26),st=new It(m("box",()=>new cn),x("#a98961"),ye+1),it=new Rt;st.name="pier-deck-"+D.id;for(let Te=0;Te<=ye;Te++){let ct=oe*Te/ye;it.position.set(0,(j.deck-xe)*Te/ye-.075,ct),it.scale.set(j.width/ut,.15,oe/ye+.006),it.updateMatrix(),st.setMatrixAt(Te,it.matrix)}st.castShadow=st.receiveShadow=!0,Q.add(st);let ot=m("pier-piling",()=>new Gt(1,1,1,12)),Se=new It(ot,x("#876742"),8);Se.name="pier-pilings-"+D.id;let Qe=0;for(let Te of[-.8,.8])for(let ct of[0,oe*.33,oe*.66,oe]){let Dt=(j.deck-xe)*ct/oe;it.position.set(Te,Dt-.65,ct),it.scale.set(.075,1.6,.075),it.updateMatrix(),Se.setMatrixAt(Qe++,it.matrix)}Se.castShadow=Se.receiveShadow=!0,Se.instanceMatrix.needsUpdate=!0,Se.computeBoundingSphere(),Q.add(Se);let Nt=new It(ot,x("#394447"),8);Nt.name="pier-bollards-"+D.id;let an=0;for(let Te of[-.72,.72])for(let ct of[oe*.78,oe*.98]){let Dt=(j.deck-xe)*ct/oe;it.position.set(Te,Dt+.25,ct),it.scale.set(.075,.5,.075),it.updateMatrix(),Nt.setMatrixAt(an++,it.matrix),it.position.set(Te,Dt+.51,ct),it.scale.set(.13,.08,.13),it.updateMatrix(),Nt.setMatrixAt(an++,it.matrix)}Nt.castShadow=Nt.receiveShadow=!0,Nt.instanceMatrix.needsUpdate=!0,Nt.computeBoundingSphere(),Q.add(Nt),["paradise","smugglers","highlands"].includes(D.id)&&M(D.id,D.x,D.z)}M("jungle",ht.supply.x,ht.supply.z);let R=Math.max(_s.maxX-_s.minX,_s.maxZ-_s.minZ)/ut+12e3,U=pl(_n.map(D=>[D.x/ut,D.z/ut,D.radius/ut,D.radius/ut]),{size:R,coastSeeds:_n.map(D=>D.coastSeed)});T.add(U.mesh);let G=ml(5e3);T.add(G);let W=xl(T,_n,{scale:ut,height:yr,surfaces:f,small:o,dense:!0,lod:!0,clear:(D,V,re)=>xr({x:V,z:re},D.id,_r)||D.id==="home"&&yl(V,re)||D.id==="jungle"&&(Ml({x:V,z:re},ht.cave)<100||Ml({x:V,z:re},ht.supply)<58)||D.id==="fortress"&&Math.abs(V-qt.x)<125&&Math.abs(re-qt.z)<155||Ml({x:V,z:re},vt[D.id].land)<90}),B=_l(T,{scale:ut,height:yr,surfaces:f,helpers:I,village:_r,paths:ao,marketPoint:sd}),{boat:ie,wake:ae}=ad(T,I),fe=new ke;fe.name="harbor-fuel-pump",fe.position.set(ht.pump.x/ut,si(ht.pump.x,ht.pump.z),ht.pump.z/ut),T.add(fe),_(fe,"#a98961",[0,.06,0],[1.05,.12,.92]),_(fe,"#e6d6b8",[0,.68,0],[.75,1.24,.65]),_(fe,"#bd6e4e",[0,1.34,0],[.82,.28,.72]),_(fe,"#263f41",[0,.99,.34],[.48,.25,.045]),_(fe,"#e8d99e",[0,.99,.37],[.31,.1,.018]),S(fe,"#2d3435",[.53,.72,0],[.035,1.18,.035]);let De=_(fe,"#394447",[.53,.39,.29],[.1,.24,.08]);De.rotation.z=-.22,_(fe,"#bd6e4e",[0,.39,.35],[.3,.1,.055]),S(fe,"#e6d6b8",[0,2.18,-.06],[.055,1.42,.055]);let We=S(fe,"#bd6e4e",[0,2.9,-.06],[.42,.1,.42]);We.rotation.x=Math.PI/2;let ft=S(fe,"#f3dfbe",[0,2.9,.005],[.31,.115,.31]);ft.rotation.x=Math.PI/2,fe.userData.fuelDetails={display:!0,hose:!0,nozzle:!0,marker:!0},F(fe);let Je=new ke;Je.name="campaign-cave-entrance",Je.position.set(ht.cave.x/ut,si(ht.cave.x,ht.cave.z),ht.cave.z/ut),T.add(Je);let Z=[[-2,.45,.02,.55,.55,.85,-.12],[-2,1.15,-.02,.58,.7,.95,.08],[-1.9,1.9,.04,.62,.72,.9,-.09],[-1.55,2.55,-.03,.72,.6,.9,.14],[2,.45,-.02,.55,.55,.85,.12],[2,1.15,.03,.58,.7,.95,-.08],[1.9,1.9,-.04,.62,.72,.9,.09],[1.55,2.55,.02,.72,.6,.9,-.14],[-1,2.9,.03,.72,.48,.9,-.1],[-.35,3.05,-.03,.68,.45,.92,.06],[.35,3.05,.02,.68,.45,.92,-.06],[1,2.9,-.02,.72,.48,.9,.1]],J=new Rt,ge=new It(m("cave-mouth-rock",()=>new Tn(1,12,8)),x("#92968b"),Z.length);ge.name="cave-entrance-rocks",ge.castShadow=!0,ge.receiveShadow=!0,Z.forEach(([D,V,re,de,A,H,j],Q)=>{J.position.set(D,V,re),J.scale.set(de,A,H),J.rotation.set(0,0,j),J.updateMatrix(),ge.setMatrixAt(Q,J.matrix)}),ge.instanceMatrix.needsUpdate=!0,ge.computeBoundingSphere(),Je.add(ge),_(Je,"#171e19",[0,1.25,-.85],[2.8,2.5,.15]);let Ie=new It(m("cave-torch-handle",()=>new Gt(1,1,1,7)),x("#4c3525"),2);Ie.name="cave-entrance-torches",Ie.castShadow=!0;let Pe=new Ot({color:"#ffcf75",emissive:"#ff7f32",emissiveIntensity:1.15,roughness:.55}),et=new It(m("cave-torch-flame",()=>new Yn(1,1,7)),Pe,2);et.name="cave-entrance-flames",[-1,1].forEach((D,V)=>{J.position.set(D*1.18,1.15,.18),J.scale.set(.035,.85,.035),J.rotation.set(0,0,-D*.15),J.updateMatrix(),Ie.setMatrixAt(V,J.matrix),J.position.set(D*1.18,1.65,.18),J.scale.set(.12,.22,.12),J.rotation.set(0,0,D*.08),J.updateMatrix(),et.setMatrixAt(V,J.matrix)}),Ie.instanceMatrix.needsUpdate=!0,et.instanceMatrix.needsUpdate=!0,Ie.computeBoundingSphere(),et.computeBoundingSphere(),Je.add(Ie,et),Je.userData.entranceDetails={archStones:12,torches:2,clearOpening:!0};let Ne=new ke;Ne.name="guarded-estate",Ne.position.set(qt.x/ut,.85,qt.z/ut),T.add(Ne),_(Ne,"#e2dbc7",[0,1.55,0],[8,3.1,8]),_(Ne,"#a68854",[0,3.2,0],[8.6,.25,8.6]),_(Ne,"#e2dbc7",[0,4.35,-.4],[6.5,2.3,6.5]);for(let D of[-1,1]){let V=_(Ne,"#ba7655",[D*1.7,5.9,-.4],[3.7,.15,7.4]);V.rotation.z=-D*.3}_(Ne,"#313f38",[0,1.2,4.03],[1.65,2.4,.08]);for(let D of[-2.7,2.7])for(let V of[1.7,4.3])_(Ne,"#425761",[D,V,4.04],[1.15,1.3,.06]),_(Ne,"#e2dbc7",[D,V,4.11],[.08,1.38,.08]),_(Ne,"#e2dbc7",[D,V,4.11],[1.2,.08,.08]);for(let D of[-1.4,1.4])S(Ne,"#e2dbc7",[D,1.3,4.65],[.16,2.6,.16]);_(Ne,"#a68854",[0,2.67,4.65],[3.3,.2,1.4]);for(let D=0;D<3;D++)_(Ne,"#92968b",[0,-.03+D*.06,4.4+D*.4],[2.6,.15,1.25-D*.25]);for(let D of[-3.4,3.4])for(let V of[1.7,4.3]){_(Ne,"#587e7c",[D,V,4.07],[.32,1.35,.1]);for(let re=0;re<8;re++)_(Ne,"#876742",[D,V-.5+re*.14,4.14],[.3,.025,.045])}_(Ne,"#e2dbc7",[0,3.1,4.55],[8.5,.16,1.25]);for(let D=-10;D<=10;D++)S(Ne,"#e2dbc7",[D*.39,3.57,5.05],[.033,.83,.033]);_(Ne,"#e2dbc7",[0,4,5.05],[8.5,.08,.08]);for(let D of[-2.45,2.45]){_(Ne,"#a98961",[D,.3,4.62],[1.25,.42,.55]);for(let V=-2;V<=2;V++){let re=v(Ne,V%2?"#6f8f58":"#88a866",[D+V*.2,.67+Math.abs(V)*.025,4.62],[.18,.38,.18]);re.rotation.z=V*.12}}let L=new Ot({color:"#ffe4a8",emissive:"#ffb85c",emissiveIntensity:.72,roughness:.34});for(let D of[-1.03,1.03]){_(Ne,"#394447",[D,2.05,4.14],[.08,.1,.24]);let V=v(Ne,"#ffe4a8",[D,1.88,4.27],[.13,.19,.13]);V.material=L}let bt=S(Ne,"#d4a957",[0,3.02,4.11],[.38,.1,.38]);bt.rotation.x=Math.PI/2,Ne.userData.estateDetails={planters:2,lanterns:2,crest:!0},F(Ne),Ne.userData.cameraBlocker=!0;let tt=[B.buildings,Ne];tt.forEach(D=>D.updateWorldMatrix(!0,!0));let Ye={};function Ae(D,V=11,re=15){let de=new ke;de.name=D,N.add(de),Ye[D]=de,_(de,D==="cave"?"#777a6b":"#a68854",[0,-.1,1],[V,.2,re]);let A=new ke;A.name=D+"-walls",de.add(A);for(let j of[-V/2,V/2])_(A,D==="cave"?"#92968b":"#e2dbc7",[j,1.65,1],[.3,3.3,re]);_(A,D==="cave"?"#92968b":"#e2dbc7",[0,1.65,1-re/2],[V,3.3,.3]),F(A),_(de,"#313f38",[0,1.1,re/2-.2],[1.7,2.2,.15]);let H=new or(D==="cave"?"#ffd9a0":"#ffeccf",22,18,1.6);return H.position.set(0,2.7,1),de.add(H),de.userData.shellDetails={sourceMeshes:5,renderMeshes:3},de}let Mt=Ae("cave",12,17),Fe=m("cave-formation",()=>new Yn(1,1,9)),$e=new It(Fe,x("#777a6b"),16),wt=new Rt;$e.name="cave-formations";let kt=[[-5.2,-5.4,.34,.92],[-5.2,-1.7,.27,.68],[-5.2,2.1,.38,1.06],[-5.2,5.1,.25,.78],[5.2,-4.1,.31,.84],[5.2,-.3,.39,1.12],[5.2,3.4,.28,.72],[3.6,-6.7,.42,1.18]],C=0;for(let[D,V,re,de]of kt)wt.position.set(D,de/2,V),wt.rotation.set(0,C*.71%Math.PI,0),wt.scale.set(re,de,re),wt.updateMatrix(),$e.setMatrixAt(C++,wt.matrix),wt.position.set(-D,3.3-de*.48,V+.55),wt.rotation.set(0,C*.53%Math.PI,Math.PI),wt.scale.set(re*.82,de*.92,re*.82),wt.updateMatrix(),$e.setMatrixAt(C++,wt.matrix);$e.castShadow=$e.receiveShadow=!0,$e.instanceMatrix.needsUpdate=!0,$e.computeBoundingSphere(),Mt.add($e),Mt.userData.caveDetails={stalactites:8,stalagmites:8,clearCenter:!0};let y=new ke;y.name="cave-evidence-table",Mt.add(y),_(y,"#a98961",[0,.75,-2],[2,.12,1.2]);for(let D of[-.75,.75])for(let V of[-2.45,-1.55])S(y,"#876742",[D,.35,V],[.065,.7,.065]);for(let D of[-2.47,-1.53])_(y,"#876742",[0,.57,D],[1.72,.2,.07]);_(y,"#876742",[0,.56,-1.38],[.72,.27,.08]),v(y,"#394447",[0,.56,-1.32],[.045,.045,.04]),S(y,"#394447",[.72,.86,-2.18],[.17,.1,.17]);let Y=new Ot({color:"#ffe4a8",emissive:"#ff9f45",emissiveIntensity:1.05,roughness:.28,transparent:!0,opacity:.88}),ne=v(y,"#ffe4a8",[.72,1.08,-2.18],[.14,.22,.14]);ne.material=Y,S(y,"#394447",[.72,1.31,-2.18],[.12,.07,.12]),y.userData.evidenceDetails={legs:4,drawer:!0,lantern:!0,newspaper:!0,hiddenGun:!0},F(y);let le=document.createElement("canvas");le.width=256,le.height=320;let ee=le.getContext("2d");ee.fillStyle="#ddd5bd",ee.fillRect(0,0,256,320),ee.fillStyle="#3a3b32",ee.font="bold 26px serif",ee.fillText("ISLAND DAILY",18,38),ee.fillRect(18,51,220,3);for(let D=0;D<20;D++)ee.fillRect(18,72+D*10,94-D%4*6,2),ee.fillRect(128,72+D*10,104-D%3*8,2);let Ve=new Bi(le);Ve.colorSpace=Xt;let pe=new mt(new Pn(.9,1.05),new Ot({map:Ve,side:Ht}));pe.name="cave-newspaper",pe.rotation.x=-Math.PI/2,pe.position.set(0,.83,-2),Mt.add(pe);function Ee(D){let V=new ke;D.add(V),_(V,"#333a3d",[0,0,.06],[.12,.12,.34]);let re=_(V,"#695646",[0,-.11,-.03],[.1,.23,.13]);return re.rotation.x=-.22,_(V,"#8b9294",[0,.08,.03],[.11,.035,.3]),V}let Oe=Ee(Mt);Oe.name="cave-hidden-gun",Oe.position.set(0,.87,-2),Oe.rotation.y=Math.PI/2;let ce=Ae("estate",11,15),_e=new ke;_e.name="estate-fixtures",ce.add(_e),_(_e,"#816947",[0,.42,-4.6],[2.6,.85,.9]),_(_e,"#decc9f",[0,.05,1],[3,.025,10]);for(let D=0;D<6;D++)_(_e,"#777a6b",[3.5,.06*D,-4.75+D*.28],[1.7,.12,.65]);_e.userData.batchDetails={sourceMeshes:8,renderMeshes:3},F(_e);let Ue=new ke;Ue.name="estate-interior-details",ce.add(Ue);let Be=["#6f443d","#40626a","#718052"];for(let[D,V]of[-2.7,0,2.7].entries())_(Ue,"#a68854",[V,1.9,-6.31],[1.42,1.22,.08]),_(Ue,Be[D],[V,1.9,-6.25],[1.12,.92,.045]);_(Ue,"#a68854",[0,.93,-6.29],[8.7,.08,.08]);for(let D of[-4.35,4.35]){_(Ue,"#394447",[D,2.02,-6.24],[.1,.32,.1]);let V=v(Ue,"#ffe4a8",[D,1.79,-6.15],[.14,.19,.11]);V.material=L}_(Ue,"#394447",[0,.86,-4.58],[1.12,.025,.52]);for(let D of[-.52,0,.52])_(Ue,"#d8d2c3",[D,.88,-4.57],[.4,.012,.3]);S(Ue,"#394447",[.93,1.08,-4.58],[.035,.42,.035]);let ve=v(Ue,"#ffe4a8",[.93,1.34,-4.58],[.18,.16,.18]);ve.material=L,ce.userData.interiorDetails={portraits:3,sconces:2,documents:3,deskLamp:!0},F(Ue);let Ke=new mt(new Mi(.13,.036,8,16),new Ot({color:"#f8ce60",emissive:"#8c6322",emissiveIntensity:.5}));Ke.position.set(0,.88,-3),ce.add(Ke),_(Ke,"#debb63",[0,-.2,0],[.065,.32,.065]);let k=Ae("cellar",11,15),he=[],me=new ke;me.name="cellar-static",k.add(me);let Le=Object.entries(Ye);for(let D of Ln){let V=new ke;V.name="cell-door-"+D.id,V.position.set(D.x/ut,0,-1.5),k.add(V),he[D.id]=V;for(let A=-2;A<=2;A++)S(V,"#475759",[A*.32,1.3,0],[.025,2.6,.025]);for(let A of[.1,2.5])_(V,"#475759",[0,A,0],[1.65,.055,.055]);for(let A of[.45,2.15])S(V,"#394447",[-.78,A,.07],[.045,.12,.045]);p(V,m("cell-padlock",()=>new Mi(.09,.022,6,12)),x("#a68854"),[.61,1.42,.07]),_(V,"#a68854",[.61,1.27,.07],[.18,.2,.08]),F(V);let re=D.x/ut,de=["#738b90","#9b796d"][D.id%2];_(me,"#a98961",[re,.18,-4.8],[1.55,.36,.8]),_(me,"#e2dbc7",[re,.4,-4.8],[1.5,.1,.8]),_(me,de,[re,.47,-4.65],[1.42,.045,.48]),_(me,"#d8d2c3",[re,.5,-5.08],[.64,.1,.24])}for(let D of[-3.8,0,3.8]){_(me,"#394447",[D,2.54,-6.28],[.36,.15,.1]);let V=v(me,"#ffe4a8",[D,2.34,-6.2],[.15,.2,.11]);V.material=L}k.userData.cellarDetails={cells:5,hinges:10,padlocks:5,lamps:3,bedding:5},F(me);function se(D,V,re){let de=D.hairStyles[V],A=new Set;return de.name=`${re}-hair-${V}`,de.visible=!0,de.traverse(H=>{H.isMesh&&A.add(H)}),D.hairStyles.forEach((H,j)=>{j!==V&&H.removeFromParent()}),D.hairStyles=[de],D.hairParts=D.hairParts.filter(H=>A.has(H)),D.spear.removeFromParent(),D.raft.removeFromParent(),Object.values(D.props).forEach(H=>H.removeFromParent()),D.spear=D.raft=null,D.props={},D.root.userData.renderProfile={hairVariants:1,unusedToolMeshes:0},w(D,re),D}let te=se(t({shirt:"#577c87",skin:"#ddb08c",hair:"#40362f"},"player",I),0,"campaign-player");te.root.name="campaign-player",c.add(te.root);let ze=new Map,Ze=new Map,St=new Uint8Array(Ln.length),pt=Ln.map(()=>({x:0,z:0})),un={swing:0,step:0,bounce:0},vn={gate:{shirt:"#526252",skin:"#c29574",hair:"#302e28",style:0},patrol:{shirt:"#59665a",skin:"#a96f55",hair:"#211f1e",style:1},hall:{shirt:"#4b5958",skin:"#d1a17d",hair:"#5b4032",style:2},boss:{shirt:"#34383a",skin:"#b67d60",hair:"#251f1c",style:1}};for(let D of e().guards){let V=vn[D.id],re=se(t(V,"guard",I),V.style,"campaign-guard-"+D.id);if(re.root.name="campaign-guard-"+D.id,re.root.userData.guardProfile={boss:D.id==="boss",style:V.style},D.id==="boss"){let de=new ke;de.name="campaign-boss-insignia",re.hips.add(de);for(let H of[-1,1])_(de,"#d2aa58",[H*.2,.56,.02],[.12,.035,.18]);let A=_(de,"#8f2f2d",[0,.34,.15],[.055,.52,.025]);A.rotation.z=-.48,re.root.userData.guardProfile.insignia=!0}c.add(re.root),Ee(re.arms[1].forearm).position.set(0,-.24,.14),ze.set(D.id,re)}let oi=[{shirt:"#8da4b1",skin:"#c99370",hair:"#302d2a",style:0,scale:1.02},{shirt:"#b78876",skin:"#e1b894",hair:"#6a4938",style:1,scale:.96},{shirt:"#9caa8c",skin:"#b98264",hair:"#2f2927",style:2,scale:1},{shirt:"#c3b487",skin:"#dca984",hair:"#704936",style:1,scale:.72},{shirt:"#92b2b6",skin:"#e4bb96",hair:"#3f302b",style:2,scale:.76}];for(let D of Ln){let V=oi[D.id],re=se(t(V,"resident",I),V.style,"campaign-prisoner-"+D.id);re.root.name="campaign-prisoner-"+D.id,re.root.scale.setScalar(V.scale),re.root.userData.residentProfile={child:D.child,style:V.style,scale:V.scale},c.add(re.root),Ze.set(D.id,re)}let on=new ke;l.add(on),Ee(on).position.set(.26,-.23,-.48);let vr=v(on,"#ddb08c",[.24,-.32,-.4],[.065,.085,.08]),Mr=S(on,"#577c87",[.22,-.4,-.3],[.085,.24,.085]);Mr.rotation.x=-.5;let dn=new mt(new Mi(.42,.035,8,32),new Sn({color:"#f3d48a"}));dn.rotation.x=-Math.PI/2,c.add(dn);let ai=new rt(new Float32Array(6),3),wi=new tr(new Lt().setAttribute("position",ai),new Oi({color:"#ffe8ad"}));wi.frustumCulled=!1,c.add(wi);let An=new lr,jn=new O,Ti={position:new O,target:new O},Ei=[],Ai={position:new O},Ci=0,Yt={x:0,z:0,surface:0,yaw:0,pitch:0,mode:"first",distance:4.6},li=D=>D.distance>.2,Ri={height:25},b={},q={},K={},$=[],X=new Map;X.misses=0;let ue=0,Me=0,be=0,Re=.05,Ge="first",je=0,He=!0,at=!1,gt=null,Tt,Et=0,xt=0,qe={},Bt={},lt={},Wt={},Mn=-1/0,nn=0,zn=e(),Ut=vl(zn).target;Ut&&(be=Math.atan2(zn.p.x-Ut.x,zn.p.z-Ut.z));function Kt(D,V,re,de,A,H,j=!1){Et++;let Q=D.root.userData.campaignPoseState||(D.root.userData.campaignPoseState={});if(!Wx(Q,V,re,de,A,j))return;xt++,D.root.position.set(V.x/ut,re,V.z/ut),D.root.rotation.set(0,0,0),D.rig.rotation.y=de;let xe=Hx(un,H,A);for(let oe of D.legs){let ye=(oe.side<0?-xe.swing:xe.swing)*xe.step;oe.thigh.rotation.x=ye,oe.calf.rotation.x=Math.max(0,-ye),oe.shoe.rotation.x=-oe.calf.rotation.x*.6}for(let oe of D.arms)oe.arm.rotation.x=A?(oe.side<0?xe.swing:-xe.swing)*.25:0,oe.arm.rotation.z=0,oe.forearm.rotation.x=-.18;D.hips.position.y=.87+xe.bounce*.009}function fn(D){if(!He||at)return;let V=e(),re=D/1e3;je=D,Et=0,f.update(),G.material.uniforms.uTime.value=re;let de=V.interior;Fx(Bt,de,T,N,Le,c,h,u);let A=de?0:lo(X,te.root,V.p.x,V.p.z,si);if(te.root.visible=!V.boat||Ge==="third",!V.boat){let Te=Nx(c,te.root);Kt(te,V.p,A,V.heading,V.walking,re,Te)}te.rig.visible=Ge==="third",ie.position.set((V.boat?V.p.x:vt[V.boatAt].x)/ut,.02,(V.boat?V.p.z:vt[V.boatAt].z)/ut),ie.rotation.y=V.boat?V.heading:Math.atan2(vt[V.boatAt].ux,vt[V.boatAt].uz),ie.rotation.z=V.boat?Math.sin(re*2)*.015:0,ae.visible=V.boat&&V.walking,V.boat&&ld(te,ie),pe.visible=!V.paper,Oe.visible=V.paper&&!V.gun,Ke.rotation.y=re,zx(lt,V.released,St,he);let H=!1,j=!1;for(let Te of V.guards){Te.id==="boss"&&(j=Te.hp<=0);let ct=ze.get(Te.id),Dt=Te.area===de&&!V.boat&&(!Te.area||V.island==="fortress");if(ct.root.visible=Dt,!Dt)continue;let On=Te.x-V.p.x,Bn=Te.z-V.p.z,vs=Te.hp>0&&On*On+Bn*Bn<44100;H||(H=vs),Kt(ct,Te,Te.area?0:lo(X,ct,Te.x,Te.z,si),Math.atan2(V.p.x-Te.x,V.p.z-Te.z),vs,re,Te.hp<=0),Te.hp<=0?(ct.rig.rotation.x=-Math.PI/2,ct.root.position.y+=Te.area?0:.15,ct.root.scale.setScalar(.8)):(ct.rig.rotation.x=0,ct.arms[1].arm.rotation.x=-1.05,ct.arms[1].forearm.rotation.x=-.35)}Ke.visible=!V.key&&j,V.released.length&&!V.boarded&&!V.boat&&(de==="estate"||de==="cellar"||V.island==="fortress")&&Vx(pt,Ln,V.p,V.heading);for(let Te of Ln){let ct=Ze.get(Te.id),Dt=!!St[Te.id],On=V.boarded?!1:Dt?!V.boat&&(de==="estate"||de==="cellar"||V.island==="fortress"):de==="cellar";if(ct.root.visible=On,!On)continue;let Bn=Dt?pt[Te.id]:Te;Kt(ct,Bn,de?0:lo(X,ct,Bn.x,Bn.z,si),V.heading,Dt&&V.walking,re+Te.id*.18)}Bx(q,V,b,!j)&&ue++;let xe=b.target;Ox(K,V,$)&&Me++;let oe=K.nearby,ye=oe||xe;dn.visible=!!ye,ye&&dn.position.set(ye.x/ut,(de?0:lo(X,dn,ye.x,ye.z,si))+.08,ye.z/ut),dn.scale.setScalar(1+Math.sin(re*3)*.1),on.visible=V.gun&&!V.boat&&Ge==="first",on.position.z=V.shot?.025:0;let st=V.boat?.02+ys.eye-1.64:A,it=V.boat?ys.seatZ:0;Yt.x=V.p.x/ut+Math.sin(V.heading)*it,Yt.z=V.p.z/ut+Math.cos(V.heading)*it,Yt.surface=st,Yt.yaw=be,Yt.pitch=Re,Yt.mode=Ge,Yt.distance=V.boat?7.5:4.6;let ot=ul(Yt,Ti);if(de&&Ge==="third"&&(ot.position.x=io.clamp(ot.position.x,-5.1,5.1),ot.position.z=io.clamp(ot.position.z,-5,8.1)),!de&&Ge==="third"){let Te=Ai,ct=ot.position,Dt=ot.target;if(Te.ready&&Te.x===ct.x&&Te.y===ct.y&&Te.z===ct.z&&Te.tx===Dt.x&&Te.ty===Dt.y&&Te.tz===Dt.z)ot.position.copy(Te.position);else{Te.ready=!0,Te.x=ct.x,Te.y=ct.y,Te.z=ct.z,Te.tx=Dt.x,Te.ty=Dt.y,Te.tz=Dt.z,jn.subVectors(ct,Dt);let On=jn.length();jn.normalize(),An.set(Dt,jn),An.far=On,Ci++;let Bn=dl(An,tt,!0,Ei).find(li);Bn&&ct.copy(Dt).addScaledVector(jn,Math.max(.35,Bn.distance-.22)),ct.y=Math.max(ct.y,lo(X,l,ct.x*ut,ct.z*ut,si)+.24),Te.position.copy(ct)}}l.position.copy(ot.position),l.lookAt(ot.target),W.update(l.position);let Se=!V.paused&&(V.walking||V.boat||H),Qe=kx(qe,V,Se)||Se&&D-Mn>=1e3/30;s.shadowMap.needsUpdate=Qe,Qe&&(fl(u,V.p.x/ut,V.p.z/ut,Ri),Mn=D,nn++),U.update(re,l.position),G.position.copy(l.position),wi.visible=!!V.shot,V.shot&&Gx(ai,V.shot.from,V.shot.to,A+1.35),Tt!==de&&(Tt=de,de?be=0:xe&&(be=Math.atan2(V.p.x-xe.x,V.p.z-xe.z))),s.render(c,l);let Nt=s.getPixelRatio(),an=Xx(Wt,D,Nt,a);an!==Nt&&(s.setPixelRatio(an),Zt())}function Zt(){l.aspect=innerWidth/innerHeight,l.updateProjectionMatrix(),s.setSize(innerWidth,innerHeight,!1)}function Jt(D,V=0){e().paused||(be+=D,Re=io.clamp(Re+V,Ge==="first"?-.95:-.05,.75))}n.addEventListener("pointerdown",D=>{e().paused||D.button!==0||(gt={id:D.pointerId,x:D.clientX,y:D.clientY},n.setPointerCapture(D.pointerId))}),n.addEventListener("pointermove",D=>{gt?.id===D.pointerId&&(Jt(-(D.clientX-gt.x)*.006,(D.clientY-gt.y)*.005),gt.x=D.clientX,gt.y=D.clientY)});for(let D of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(D,()=>gt=null);return n.addEventListener("webglcontextlost",D=>{D.preventDefault(),at=!0,He=!1,i?.()}),{frame:fn,resize:Zt,orbit:Jt,setCamera(D){Ge=D==="first"?"first":"third",Re=Ge==="first"?.05:.22},get cameraMode(){return Ge},get enabled(){return He&&!at},vector:(D,V)=>({x:D*Math.cos(be)+V*Math.sin(be),z:-D*Math.sin(be)+V*Math.cos(be)}),aim:()=>be+Math.PI,setEnabled(D){He=!!D&&!at},stats:()=>({calls:s.info.render.calls,triangles:s.info.render.triangles,pixelRatio:s.getPixelRatio(),eye:l.position.toArray(),camera:Ge,cameraBlockers:tt.length,cameraRaycasts:Ci,goalSelections:ue,nearbySelections:Me,palmBatches:W.treeBatches.length,largestPalmBatch:Math.max(...W.treeBatches.map(D=>D.count)),posedCharacters:Et,poseUpdates:xt,palmLodDistanceChecks:W.treeBatches.length+W.foliageBatches.length,palmTrunkTriangles:W.treeBatches.reduce((D,V)=>D+V.count*V.geometry.index.count/3,0),unshadowedPalmTrunkTriangles:W.treeBatches.filter(D=>!D.receiveShadow).reduce((D,V)=>D+V.count*V.geometry.index.count/3,0),palmCrownTriangles:W.foliageBatches.reduce((D,V)=>D+V.count*V.geometry.index.count/3,0),lowDetailPalmBatches:W.treeBatches.filter(D=>D.userData.lod.level==="low").length,terrainTriangles:P.reduce((D,V)=>D+V.geometry.index.count/3,0),shadowUpdates:nn,terrainHeightSamples:X.misses}),dispose(){s.dispose(),f.dispose();let D=new Set([...g.values(),...W.lodGeometries]),V=new Set(d.values());c.traverse(re=>{if(re.geometry&&D.add(re.geometry),re.material)for(let de of Array.isArray(re.material)?re.material:[re.material])V.add(de)}),D.forEach(re=>re.dispose()),V.forEach(re=>re.dispose()),Ve.dispose()}}}function Ml(n,e){return Math.hypot(n.x-e.x,n.z-e.z)}function qx(n){return fd({...n,makeHuman:Qc})}var Ce=80,gd=[[1750,1300,1540,970],[3380,500,520,310],[4100,2400,390,290]],Wi=(n,e,t)=>Math.max(e,Math.min(t,n)),Yx=n=>(n=Wi(n,0,1),n*n*(3-2*n)),Zx=(n,e)=>Math.atan2(Math.sin(e-n),Math.cos(e-n)),Jx=Object.freeze({}),pd=Math.cos(1),md=Math.sin(1);function Un(n,e){let t=n*Ce,i=e*Ce,r=-1;for(let[o,a,c,l]of gd)r=Math.max(r,1-Math.hypot((t-o)/c,(i-a)/l));return r<=0?-.32:.015+Yx(r/.17)*(.25+.28*(1+Math.sin(n*.23+1.3)*Math.cos(e*.27))+.12*Math.sin(n*.7)*Math.sin(e*.6))}function xd(n,e,t){return{x:n*Math.cos(t)+e*Math.sin(t),y:-n*Math.sin(t)+e*Math.cos(t)}}function _d(n,e,t=75){let i,r=t*t;for(let s of n||[]){let o=s.x-e.x,a=s.y-e.y,c=o*o+a*a;c<r&&(i=s,r=c)}return i}function yd(n,e,t,i){let r=e&&e.remaining-(i-t);return r>0?(n.kind=e.kind,n.phase=1-r/(Zu[e.kind]||1e3),n):null}function vd(n,e){let t=e*1.3;return n.idleHip=Math.sin(e*1.7),n.idleArmSin=Math.sin(t),n.idleArmCos=Math.cos(t),n}function Md(n,e){let t=e*.7,i=e*.6;return n.xSin=Math.sin(t),n.xCos=Math.cos(t),n.zSin=Math.sin(i),n.zCos=Math.cos(i),n}function bd(n,e){let t=Math.sin(e*6)*.15;return n[0]=t,n[1]=-t,n[2]=t,n[3]=-t,n}function Sd(n,e,t,i,r,s){return n.yawSin=Math.sin(t),n.yawCos=Math.cos(t),i||r?(n.phaseSin=Math.sin(e),n.phaseCos=Math.cos(e)):n.phaseSin=n.phaseCos=0,n.hips=(i?.9:.92)+(i?Math.cos(e*2)*.012:s.idleHip*.004),n}function wd(n,e,t,i=new O){let r=Math.min(240,t*.52),s=e.projectionMatrix.elements[0]*t/2,o=0;for(let a of n){a.userData.signScale||(a.userData.signScale=a.scale.clone()),a.scale.copy(a.userData.signScale),a.getWorldPosition(i);let c=Math.max(.1,i.distanceTo(e.position)),l=a.scale.x*s/c;l>r&&a.scale.multiplyScalar(r/l),o++}return o}function Td(n,e,t={}){let s=Wi(Math.hypot(n,e),.08,.855);return t.hip=-Math.atan2(e,-n)-Math.acos(Wi((.43*.43+s*s-.43*.43)/(2*.43*s),-1,1)),t.knee=Math.PI-Math.acos(Wi((.43*.43+.43*.43-s*s)/(2*.43*.43),-1,1)),t}function Ed(n,e={}){let t=e.shirt||"#4c9cba",i=e.skin||"#dda879",r=e.hair||"#43332b",s=e.style||0;return n.lookShirt===t&&n.lookSkin===i&&n.lookHair===r&&n.lookStyle===s?!1:(n.lookShirt=t,n.lookSkin=i,n.lookHair=r,n.lookStyle=s,!0)}function jc(n){return n?Math.max(...[-1,0,1].flatMap(e=>[-1,0,1].map(t=>{let i=n.point(e*n.width/2,t*n.depth/2);return Un(i.x/Ce,i.y/Ce)}))):0}function Ad(n,e,t){let i=e?.x??null,r=e?.y??null,s=t||0;return n.ready&&n.x===i&&n.y===r&&n.level===s?!1:(n.ready=!0,n.x=i,n.y=r,n.level=s,n.layout=Yu(e,t),n.elevation=jc(n.layout),!0)}function Cd(n,e={}){let t=e.activities||{},i=t.completed||0,r=e.basePos?.x??null,s=e.basePos?.y??null,o=e.baseLevel??null,a=e.campfire??null,c=e.fire?.x??null,l=e.fire?.y??null,h=i>=1,u=i>=3,f=i>=6,d=u&&t.gardenClaimed<i,g=t.raceWon??null;return n.ready&&n.level===o&&n.baseX===r&&n.baseY===s&&n.campfire===a&&n.fireX===c&&n.fireY===l&&n.first===h&&n.garden===u&&n.flag===f&&n.harvest===d&&n.raceWon===g?!1:(n.ready=!0,n.level=o,n.baseX=r,n.baseY=s,n.campfire=a,n.fireX=c,n.fireY=l,n.first=h,n.garden=u,n.flag=f,n.harvest=d,n.raceWon=g,!0)}function Rd(n,e=[]){let t=n.values||(n.values=[]),i=!n.ready||n.count!==e.length,r=0;for(let s of e){let o=s.type??null,a=s.x??null,c=s.y??null,l=!!s.done,h=s.symbol??null,u=s.label??null;t[r]!==o&&(i=!0),t[r++]=o,t[r]!==a&&(i=!0),t[r++]=a,t[r]!==c&&(i=!0),t[r++]=c,t[r]!==l&&(i=!0),t[r++]=l,t[r]!==h&&(i=!0),t[r++]=h,t[r]!==u&&(i=!0),t[r++]=u}return t.length=r,n.ready=!0,n.count=e.length,i}function co(n,e,t=0,i=0){let r=e?.x??null,s=e?.y??null;return n.ready&&n.pointX===r&&n.pointY===s&&n.offsetX===t&&n.offsetZ===i?!1:(n.ready=!0,n.pointX=r,n.pointY=s,n.offsetX=t,n.offsetZ=i,n.valid=r!==null&&s!==null,n.valid&&(n.x=r/Ce+t,n.z=s/Ce+i,n.y=Un(n.x,n.z)),!0)}function Kc(n,e,t,i=jc(t)){let r=Un(n,e);if(!t)return r;let s=t.floor;if(Math.abs(n*Ce-s.x)<=s.w/2&&Math.abs(e*Ce-s.y)<=s.h/2)return Math.max(r,i+.16);let o=n*Ce-t.center.x,a=e*Ce-t.center.y,c=o*t.fy-a*t.fx,l=o*t.fx+a*t.fy;return Math.abs(c)<t.door/2&&l>t.depth/2&&l<t.depth/2+64?r+(Math.max(r,i+.16)-r)*(1-(l-t.depth/2)/64):r}function Id(n,e,t={}){let i=(f,d,g,x,m)=>{let p=new mt(m,new Ot({color:d}));return p.position.set(...g),p.scale.set(...x),f.add(p),p},r=t.cube||((f,d,g,x)=>i(f,d,g,x,new cn(1,1,1))),s=t.tube||((f,d,g,x)=>i(f,d,g,x,new Gt(1,1,1,10))),o=new ke,a=n.width/Ce,c=n.depth/Ce,l=n.wallHeight/Ce,h=n.roofRidge/Ce,u=n.door/Ce;o.name="base",o.position.set(n.center.x/Ce,e,n.center.y/Ce),o.rotation.y=n.yaw,r(o,"#a68854",[0,.08,0],[a,.16,c]).name="floor";for(let f of[-a/2+.1,a/2-.1])for(let d of[-c/2+.1,c/2-.1])s(o,"#876742",[f,l/2,d],[.075,l,.075]).name="post";for(let f of[-1,1]){let d=r(o,"#ba7655",[f*a/4,(l+h)/2,0],[Math.hypot(a/2+.2,h-l),.1,c+.36]);d.rotation.z=-f*Math.atan2(h-l,a/2+.2),d.name="roof"}for(let f of n.walls){let d=f.x-n.center.x,g=f.y-n.center.y,x=(d*n.fy-g*n.fx)/Ce,m=(d*n.fx+g*n.fy)/Ce;r(o,"#e2dbc7",[x,l/2,m],[n.fy?f.w/Ce:f.h/Ce,l,n.fy?f.h/Ce:f.w/Ce]).name="wall"}if(n.walls.length>=5){let f=n.doorHeight/Ce;r(o,"#845f3f",[0,(l+f)/2,c/2],[u,l-f,.125]).name="lintel"}for(let f of n.beds){let d=f.x-n.center.x,g=f.y-n.center.y,x=(d*n.fy-g*n.fx)/Ce,m=(d*n.fx+g*n.fy)/Ce;r(o,"#7d654b",[x,.17,m],[.65,.34,1.125]).name="bed",r(o,"#cec6a0",[x,.38,m],[.65,.14,1.125]),r(o,"#ede3bd",[x,.49,m-.35],[.5,.09,.26])}return o}function Pd(n,e,{cube:t,tube:i,ell:r}){if(n==="gather"&&(i(e,"#8c6944",[0,-.12,.15],[.025,.48,.025]),t(e,"#8e9891",[0,.1,.15],[.27,.1,.075])),n==="fish"){let s=i(e,"#b2915b",[0,.22,.25],[.014,1.25,.014]);s.rotation.x=-.6;let o=i(e,"#d0e6df",[0,.37,.75],[.003,.62,.003]);o.rotation.x=.6}if(n==="cook"){let s=i(e,"#80613d",[0,-.12,.18],[.016,.5,.016]);s.rotation.x=-.6,r(e,"#bb9457",[0,-.26,.3],[.07,.04,.14])}}function Qc(n={},e="player",t={}){let i=new Map,r=new Map,s=t.mat||(R=>(i.has(R)||i.set(R,new Ot({color:R})),i.get(R))),o=t.geo||((R,U)=>(r.has(R)||r.set(R,U()),r.get(R))),a=t.mesh||((R,U,G,W=[0,0,0],B=[1,1,1])=>{let ie=new mt(U,G);return ie.position.set(...W),ie.scale.set(...B),R.add(ie),ie}),c=t.ell||((R,U,G,W)=>a(R,o("ball",()=>new Tn(1,14,10)),s(U),G,W)),l=t.cube||((R,U,G,W)=>a(R,o("box",()=>new cn(1,1,1)),s(U),G,W)),h=t.tube||((R,U,G,W)=>a(R,o("cyl",()=>new Gt(1,1,1,10)),s(U),G,W)),u=new ke,f=new ke;u.add(f);let d=n.skin||"#dda879",g=n.hair||"#43332b",x=n.shirt||"#4c9cba",m=new ke;m.position.y=.87,f.add(m),c(m,"#3f4d4f",[0,.05,0],[.22,.17,.13]);let p=o("human-torso",()=>new qs([new Xe(.16,.13),new Xe(.205,.2),new Xe(.215,.38),new Xe(.25,.49),new Xe(.26,.52),new Xe(.19,.57),new Xe(.09,.64)],18));a(m,p,s(x),[0,0,0],[1,1,.66]);for(let R of[-1,1]){let U=l(m,x,[R*.065,.6,.071],[.085,.075,.024]);U.rotation.z=-R*.3,l(m,x,[R*.11,.37,.142],[.105,.09,.022])}for(let R=0;R<4;R++)c(m,"#d7d5c2",[0,.24+R*.075,.15],[.009,.01,.005]);e==="guard"&&l(m,"#39483f",[0,.35,.11],[.34,.36,.09]),l(m,"#3b4c48",[0,.135,-.01],[.4,.045,.255]),h(m,d,[0,.64,0],[.064,.13,.064]);let _=new ke;_.position.y=.79,m.add(_),c(_,d,[0,0,0],[.135,.175,.133]),c(_,d,[-.137,-.005,0],[.025,.048,.025]),c(_,d,[.137,-.005,0],[.025,.048,.025]),c(_,d,[0,-.015,.136],[.026,.033,.036]);for(let R of[-1,1])c(_,"#f6f3df",[R*.052,.02,.115],[.03,.017,.014]),c(_,"#31433e",[R*.053,.02,.128],[.012,.013,.007]),l(_,g,[R*.052,.061,.11],[.062,.01,.014]);l(_,"#af735b",[0,-.071,.117],[.051,.009,.012]);let S=o("hair",()=>new Tn(1,16,10,0,Math.PI*2,0,Math.PI*.56));a(_,S,s(e==="nela"?"#8d4931":g),[0,.015,-.015],[.145,.18,.143]);let v=[new ke,new ke,new ke];v.forEach(R=>_.add(R));let I=_.children.find(R=>R.isMesh&&R.geometry===S);_.remove(I),v[0].add(I),a(v[1],S,s(g),[0,.015,-.015],[.145,.18,.143]),c(v[1],g,[0,-.04,-.17],[.072,.14,.08]);for(let R=0;R<12;R++){let U=R*Math.PI*2/12;c(v[2],g,[Math.sin(U)*.1,.1+R%2*.018,Math.cos(U)*.1-.015],[.066,.067,.066])}if(c(v[2],g,[0,.15,-.015],[.09,.054,.09]),e==="nela"&&c(_,"#8d4931",[0,-.045,-.145],[.125,.21,.07]),v.forEach((R,U)=>R.visible=U===(n.style||0)),e==="leon")h(_,"#c5a775",[0,.15,0],[.16,.12,.16]),h(_,"#c5a775",[0,.095,0],[.22,.028,.22]),l(m,"#e4cda1",[0,.23,.145],[.33,.42,.025]);else if(e==="player"){c(m,"#5d735b",[0,.36,-.17],[.18,.22,.09]);for(let R of[-1,1])l(m,"#b6caa4",[R*.17,.38,-.04],[.034,.35,.029])}let T=[],N=[];for(let R of[-1,1]){let U=new ke;U.position.set(R*.27,.54,0),m.add(U);let G=c(U,x,[-R*.018,-.025,0],[.105,.13,.11]);G.name="human-shoulder",a(U,o("human-upper-arm",()=>new Gt(.068,.086,.19,12)),s(x),[0,-.105,0]),a(U,o("human-lower-upper-arm",()=>new Gt(.055,.064,.15,12)),s(d),[0,-.24,0]);let W=new ke;W.position.y=-.31,U.add(W);let B=c(W,d,[0,0,0],[.061,.063,.061]);B.name="human-elbow",a(W,o("human-forearm",()=>new Gt(.057,.04,.26,12)),s(d),[0,-.13,0]),c(W,d,[0,-.28,0],[.06,.082,.046]),T.push({arm:U,forearm:W,side:R});let ie=new ke;ie.position.set(R*.115,0,0),m.add(ie),a(ie,o("human-thigh",()=>new Gt(.092,.108,.42,12)),s("#52625f"),[0,-.21,0]);let ae=new ke;ae.position.y=-.43,ie.add(ae);let fe=c(ae,"#52625f",[0,0,.014],[.079,.074,.075]);fe.name="human-knee",a(ae,o("human-calf",()=>new Gt(.069,.046,.36,12)),s("#52625f"),[0,-.18,0]);let De=c(ae,"#52625f",[0,-.36,0],[.052,.06,.052]);De.name="human-ankle";let We=c(ae,"#4b3b2e",[0,-.395,.055],[.075,.052,.14]);N.push({thigh:ie,calf:ae,shoe:We,side:R})}let F=new ke;h(F,"#8c6944",[0,.56,0],[.018,1.75,.018]),c(F,"#dad9c5",[0,1.45,0],[.045,.15,.03]),F.position.set(.35,.2,.08),f.add(F),F.visible=!1;let w={};for(let R of["gather","fish","cook"]){let U=new ke;Pd(R,U,{cube:l,tube:h,ell:c}),U.position.set(0,-.28,0),T[1].forearm.add(U),U.visible=!1,w[R]=U}let M=new ke;u.add(M);for(let R=0;R<5;R++){let U=h(M,"#a17d48",[(R-2)*.25,.08,0],[.115,1.7,.115]);U.rotation.x=Math.PI/2}for(let R of[-.5,.5])l(M,"#6e5937",[0,.19,R],[1.24,.05,.1]);M.visible=!1;let E=[],z=[],P=[];return f.traverse(R=>{R.isMesh&&(R.material===s(x)&&E.push(R),R.material===s(d)&&z.push(R),R.material===s(g)&&P.push(R))}),{root:u,rig:f,hips:m,head:_,arms:T,legs:N,spear:F,raft:M,shirtParts:E,skinParts:z,hairParts:P,hairStyles:v,props:w,yaw:0,lastX:null,lastZ:null,phase:0}}function Dd(n,e){let t=e&&Ju(e.kind,e.phase);n.rig.rotation.x=t?.bend||0;for(let[i,r]of Object.entries(n.props))r.visible=!!t&&e.kind===i;if(t)for(let i of n.arms)i.arm.rotation.x=i.side<0?t.left:t.right,i.forearm.rotation.x=-.25,i.arm.rotation.z=-i.side*.08+((i.side>0||e.kind==="cheer")&&t.wave||0)}function Ld(n,e,t,i={}){let r=n.phase||0,s=e*.65+r,o=Math.sin(s),a=Math.cos(s),c=n.x+o*14,l=n.y+a*14;return t(c,l)?(i.x=c/Ce,i.z=l/Ce,i.y=.055+Math.sin(e*3+r)*.008,i.yaw=Math.atan2(a,-o),i.yawSin=a,i.yawCos=-o,i):null}function bl(n,e,t,i,r,s,o,a,c=0){return n.position.set(e.x+e.yawSin*r+e.yawCos*t,e.y+i,e.z+e.yawCos*r-e.yawSin*t),n.rotation.set(c,e.yaw,0),n.scale.set(s,o,a),n.updateMatrix(),n}function $x({canvas:n,terrain:e,getState:t,onLost:i}){let r=new us({canvas:n,antialias:!0,powerPreference:"high-performance"}),s=innerWidth<=700;r.setPixelRatio(Math.min(devicePixelRatio||1,s?1.25:1.6)),r.setSize(innerWidth,innerHeight,!1),r.outputColorSpace=Xt,r.toneMapping=is,r.toneMappingExposure=.94,r.shadowMap.enabled=!0,r.shadowMap.type=ns;let o=new er;o.background=new nt("#c5dbe5"),o.fog=new Qi("#c5dbe5",70,240);let a=new jt(72,innerWidth/innerHeight,.04,350);o.add(a);let c=new sr("#c9e3ff","#71694d",1.85);o.add(c);let l=new ar("#fff0d2",3.1);l.castShadow=!0,l.shadow.mapSize.set(s?1024:2048,s?1024:2048),l.shadow.camera.left=-16,l.shadow.camera.right=16,l.shadow.camera.top=16,l.shadow.camera.bottom=-16,l.shadow.camera.near=.5,l.shadow.camera.far=65,l.shadow.bias=-12e-5,l.shadow.normalBias=.012,o.add(l,l.target);let h=hl(r),u=new Map,f=new Map;function d(A,H={}){if(!Object.keys(H).length){let Q=h.forColor(A);if(Q)return Q}let j=A+JSON.stringify(H);return u.has(j)||u.set(j,new Ot({color:A,roughness:.86,...H})),u.get(j)}function g(A,H){return f.has(A)||f.set(A,H()),f.get(A)}function x(){return g("ball",()=>new Tn(1,14,10))}function m(){return g("box",()=>new cn(1,1,1))}function p(){return g("cyl",()=>new Gt(1,1,1,10))}function _(A,H,j,Q=[0,0,0],xe=[1,1,1],oe=!0){let ye=new mt(H,j);return ye.position.set(...Q),ye.scale.set(...xe),ye.castShadow=oe,ye.receiveShadow=!0,A.add(ye),ye}function S(A,H,j,Q){return _(A,x(),d(H),j,Q)}function v(A,H,j,Q){return _(A,m(),d(H),j,Q)}function I(A,H,j,Q){return _(A,p(),d(H),j,Q)}let T=new Rt,N=new Pn(4600/Ce,2900/Ce,230,145);N.rotateX(-Math.PI/2),N.translate(2300/Ce,0,1450/Ce);let F=N.attributes.position;for(let A=0;A<F.count;A++)F.setY(A,Un(F.getX(A),F.getZ(A)));N.computeVertexNormals();let w=$u(e),M=new Bi(w);M.anisotropy=Math.min(4,r.capabilities.getMaxAnisotropy());let E=h.ground(M),z=new mt(N,E);z.receiveShadow=!0,o.add(z);let P=ed({segments:s?24:48}),R=40;P.scale.set(1/R,1,1/R),P.position.x=6500/Ce;for(let A of P.children)A.material.dispose(),A.material=gl(h,R),A.geometry.setAttribute("color",new rt(new Float32Array(A.geometry.attributes.position.count*3).fill(1),3));let U=new ke;U.scale.set(R,1,R),P.add(U);let G=(A,H)=>{let j=Qu(A,H);return j?gr(j,A,H):-.32};xl(U,Kn,{scale:R,height:G,surfaces:h,small:s,clear:(A,H,j)=>xr({x:H,z:j},A.id)||A.id==="home"&&(Math.abs(j-40)<55||Math.abs(H-23)<45)}),_l(U,{scale:R,height:G,surfaces:h,helpers:{cube:v,tube:I,ell:S}}),o.add(P);let W=Ku(o,Un,Ce,w,s),B=pl([...gd.map(([A,H,j,Q])=>[A/Ce,H/Ce,j/Ce,Q/Ce]),...Kn.map(A=>[P.position.x+A.x/R,A.z/R,A.radius*.955/R,A.radius*.955/R])]);o.add(B.mesh);let ie=ml(320);o.add(ie);function ae(){let A=[],H=[],j=[],Q=(oe,ye,st,it)=>{let ot=ye*2.05,Se=Math.sin(ye*Math.PI)*.46-ye*ye*.8;return[Math.sin(oe)*ot+Math.cos(oe)*it*st,Se-it*.22,Math.cos(oe)*ot-Math.sin(oe)*it*st]};for(let oe=0;oe<11;oe++){let ye=oe*Math.PI*2/11;for(let st=1;st<17;st++)for(let it of[-1,1]){let ot=st/18,Se=Math.sin(ot*Math.PI)*.42,Qe=A.length/3;A.push(...Q(ye,ot-.023,it,.015),...Q(ye,ot-.085,it,Se),...Q(ye,ot+.038,it,Se*.88),...Q(ye,ot+.025,it,.015)),j.push(ot,0,ot,.9,ot+.03,1,ot+.03,0),H.push(Qe,Qe+1,Qe+2,Qe,Qe+2,Qe+3)}}let xe=new Lt;return xe.setAttribute("position",new rt(A,3)),xe.setAttribute("uv",new rt(j,2)),xe.setIndex(H),xe.computeVertexNormals(),xe}let fe=new Gt(.085,.16,4.35,14,12);fe.translate(0,2.175,0);for(let A=0;A<fe.attributes.position.count;A++){let H=fe.attributes.position;H.setX(A,H.getX(A)+.16*(H.getY(A)/4.35)**2)}fe.computeVertexNormals();let De=d("#9d7750",{bumpMap:h.textures.get("rock"),bumpScale:.025});De.onBeforeCompile=A=>{A.vertexShader=A.vertexShader.replace("#include <common>",`#include <common>
varying float vTrunkY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vTrunkY=position.y;`),A.fragmentShader=A.fragmentShader.replace("#include <common>",`#include <common>
varying float vTrunkY;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=.80+.20*smoothstep(.1,.25,fract(vTrunkY*7.));`)};let We=ae(),ft=h.surface("leaf","#ffffff",1,.018).clone();ft.side=Ht;let Je={value:0};ft.onBeforeCompile=A=>{A.uniforms.uWind=Je,A.vertexShader=A.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.y+=sin(uWind+position.x*2.0+position.z)*length(position.xz)*.018;`)};let Z={tree:new It(fe,De,400),leaves:new It(We,ft,400),rock:new It(new nr(1,2),d("#92968b"),400),food:new It(x(),d("#7a5638"),400),shell:new It(new Tn(1,12,6,0,Math.PI),d("#f1d0b7"),400)};for(let A of Object.values(Z))A.count=0,A.castShadow=!0,A.receiveShadow=!0,A.frustumCulled=!1,o.add(A);let J=-1,ge=[],Ie=0,Pe={xSin:0,xCos:1,zSin:0,zCos:1};function et(A,H,j){if(j!==J){let xe={tree:0,rock:0,food:0,shell:0};ge=[];for(let oe of A){let ye=oe.x/Ce,st=oe.y/Ce,it=Un(ye,st),ot=oe.phase||0;if(oe.t==="tree"){let Se=Math.sin(ot),Qe=Math.cos(ot),Nt=.84+.17*Math.sin(oe.x*.033+oe.y*.027),an=1.35+.28*Qe;T.position.set(ye,it,st),T.rotation.set(.03*Se,ot,.04*Qe),T.scale.set(Nt,an,Nt),T.updateMatrix(),Z.tree.setMatrixAt(xe.tree++,T.matrix),ge.push({x:ye+.16*Nt*Qe,y:it+4.3*an,z:st-.16*Nt*Se,p:ot,size:Nt,phaseSin:Se,phaseCos:Qe})}else Z[oe.t]&&(T.position.set(ye,it+(oe.t==="rock"?.23:oe.t==="food"?.13:.025),st),T.rotation.set(0,ot,0),T.scale.set(...oe.t==="rock"?[.34+.18*Math.abs(Math.sin(ot)),.3,.4]:oe.t==="food"?[.15,.13,.15]:[.12,.04,.14]),T.updateMatrix(),Z[oe.t].setMatrixAt(xe[oe.t]++,T.matrix))}for(let oe of["tree","rock","food","shell"])Z[oe].count=xe[oe],Z[oe].instanceMatrix.needsUpdate=!0;J=j,Ie++}Md(Pe,H);let Q=0;for(let xe of ge)T.position.set(xe.x,xe.y,xe.z),T.rotation.set((Pe.xSin*xe.phaseCos+Pe.xCos*xe.phaseSin)*.025,xe.p,(Pe.zCos*xe.phaseCos-Pe.zSin*xe.phaseSin)*.025),T.scale.set(xe.size,xe.size,xe.size),T.updateMatrix(),Z.leaves.setMatrixAt(Q++,T.matrix);Z.leaves.count=Q,Z.leaves.instanceMatrix.needsUpdate=!0}let Ne=new Set,L=new O;function bt(A,H="#ffe9b5"){let j=document.createElement("canvas");j.width=512,j.height=96;let Q=j.getContext("2d");Q.fillStyle="#123e43",Q.beginPath(),Q.roundRect(6,10,500,76,25),Q.fill(),Q.fillStyle=H,Q.font="700 29px system-ui",Q.textAlign="center",Q.textBaseline="middle",Q.fillText(String(A).slice(0,45),256,48,480);let xe=new Bi(j);xe.colorSpace=Xt;let oe=new Hs(new Kr({map:xe,depthTest:!0,transparent:!0}));return oe.scale.set(2.45,.46,1),oe.position.y=2.32,Ne.add(oe),oe}let tt=["#4c9cba","#df8168","#9974c7","#76b677"];function Ye(A={},H="player",j=""){let Q=Qc(A,H,{ell:S,cube:v,tube:I,mesh:_,mat:d,geo:g});return o.add(Q.root),Q.name=j,Q.tag=null,j&&(Q.tag=bt(j,A.shirt),Q.root.add(Q.tag)),Q}let Ae=Ye(cl()),Mt=new Map,Fe=Ye({skin:"#d1a074",shirt:"#b49966"},"leon","LEON \xB7 HANDEL"),$e=Ye({skin:"#edc39a",shirt:"#609991"},"nela","NELA \xB7 ZADANIA");function wt(A,H,j){!H||H===A.name||(A.tag&&(Ne.delete(A.tag),A.root.remove(A.tag),A.tag.material.map.dispose(),A.tag.material.dispose()),A.name=H,A.tag=bt(H,j),A.root.add(A.tag))}function kt(A,H){if(Ed(A,H)){for(let j of A.shirtParts)j.material=d(A.lookShirt);for(let j of A.skinParts)j.material=d(A.lookSkin);for(let j of A.hairParts)j.material=d(A.lookHair);A.hairStyles.forEach((j,Q)=>j.visible=Q===A.lookStyle)}}let C=null,y=0,Y={},ne={idleHip:0,idleArmSin:0,idleArmCos:0},le={yawSin:0,yawCos:1,phaseSin:0,phaseCos:1},ee={hip:0,knee:0},Ve={x:0,z:0,y:0,yaw:0,yawSin:0,yawCos:1};function pe(A,H,j,Q,xe,oe,ye,st,it=!1,ot=null,Se=!1,Qe=!1){let Nt=H.x/Ce,an=H.y/Ce,Te=st(H.x,H.y),ct=Te?0:Kc(Nt,an,C,y);A.root.position.set(Nt,ct+(Te?it?.18:-.95:0),an),A.yaw+=Zx(A.yaw,j)*Math.min(1,oe*12),A.rig.rotation.y=A.yaw;let Dt=Q&&ye>.05;A.phase+=Dt?oe*(ye>4?10:7):0;let On=Dt?ye>4?.31:.22:0,Bn=A.phase,vs=Te&&!it,Cn=Sd(le,Bn,A.yaw,Dt,vs,ne);A.hips.position.y=Cn.hips;for(let ln of A.legs){let Ud=ln.side<0?-Cn.phaseSin:Cn.phaseSin,Nd=ln.side<0?-Cn.phaseCos:Cn.phaseCos,Sl=Ud*On,Fd=Dt?Math.max(0,Nd)*.105:0,zd=Nt+Cn.yawCos*ln.side*.115+Cn.yawSin*Sl,Od=an-Cn.yawSin*ln.side*.115+Cn.yawCos*Sl,Bd=Te?0:Kc(zd,Od,C,y)-ct,ho=Td(-A.hips.position.y+.07+Bd+Fd,Sl,ee);ln.thigh.rotation.x=ho.hip,ln.calf.rotation.x=ho.knee,ln.shoe.rotation.x=-ho.hip-ho.knee}for(let ln of A.arms)ln.arm.rotation.x=Dt?(ln.side<0?Cn.phaseSin:-Cn.phaseSin)*.45:(ne.idleArmSin*pd+ne.idleArmCos*ln.side*md)*.025,ln.arm.rotation.z=-ln.side*.07,ln.forearm.rotation.x=Dt?-.22:-.08,vs&&(ln.arm.rotation.x=-Math.PI/2+(Cn.phaseSin*pd+Cn.phaseCos*ln.side*md)*.35,ln.forearm.rotation.x=-.28);Dd(A,ot),A.raft.visible=!!(Te&&it),A.raft.rotation.y=A.yaw,A.spear.visible=!!Se&&!Te&&!ot,Qe&&(A.arms[0].arm.rotation.x=-1,A.arms[0].forearm.rotation.x=-1),A.tag&&(A.tag.visible=Math.hypot(Nt-Ae.root.position.x,an-Ae.root.position.z)<13),A.lastX=Nt,A.lastZ=an}let Ee=new ke;o.add(Ee);for(let A of[-.55,.55])for(let H of[-.27,.27])I(Ee,"#866642",[A,1.24,H],[.038,2.48,.038]);v(Ee,"#a7c4b7",[0,.34,0],[1.24,.68,.67]),v(Ee,"#a98961",[0,.69,0],[1.24,.09,.67]);for(let A of[-1,1]){let H=v(Ee,"#ba7655",[A*.39,2.63,0],[.9,.07,1.14]);H.rotation.z=-A*.34}let Oe=I(Ee,"#ba7655",[0,2.79,0],[.055,1.18,.055]);Oe.rotation.x=Math.PI/2;for(let A of[-.5,.5])v(Ee,"#e2dbc7",[0,2.4,A],[1.7,.1,.07]);for(let A=0;A<5;A++)v(Ee,"#a98961",[(A-2)*.24,.32,.344],[.21,.53,.025]);for(let A=0;A<4;A++)S(Ee,"#b1b967",[(A-1.5)*.19,.78,0],[.09,.08,.08]);let ce=new ke;o.add(ce),v(ce,"#765734",[0,.18,0],[.56,.36,.4]),v(ce,"#9a743e",[0,.39,0],[.6,.1,.42]);for(let A of[-.19,.19])v(ce,"#d5b15a",[A,.2,.215],[.045,.35,.026]);v(ce,"#ecd178",[0,.32,.22],[.08,.09,.03]);let _e=new mt(new ir(.24,.29,32),new Sn({color:"#ffe087",transparent:!0,opacity:.8,side:Ht,depthWrite:!1}));_e.rotation.x=-Math.PI/2,o.add(_e);let Ue={},Be={},ve={},Ke={},k={root:new ke,tag:null,name:null};o.add(k.root),k.root.position.set(so.x/Ce,Un(so.x/Ce,so.y/Ce),so.y/Ce),I(k.root,"#786040",[0,.95,0],[.12,1.9,.12]),v(k.root,"#234f58",[0,1.65,0],[1.55,.55,.1]);let he=new ke;o.add(he);let me=new mt(new ir(.93,1.06,40),new Sn({color:"#54e4ef",transparent:!0,opacity:.85,side:Ht,depthWrite:!1}));me.rotation.x=-Math.PI/2,me.position.y=.04,he.add(me);let Le=_(he,new Gt(.035,.035,1,8),new Sn({color:"#76eff7",transparent:!0,opacity:.5}),[0,1.25,0],[1,2.5,1],!1),se=null,te=0,ze={},Ze=new ke,St=null,pt=null,un=[];o.add(Ze);function vn(A){let H=A.activities?.completed||0,j=H>=3&&A.activities.gardenClaimed<H;if(Cd(ze,A)){pt&&(pt.geometry.dispose(),pt.material.dispose());for(let Q of un)Q.dispose();if(un=[],o.remove(Ze),Ze=new ke,o.add(Ze),pt=null,St=null,A.basePos&&A.baseLevel){let Q=C,xe=ju(Id(Q,y,{cube:v,tube:I}),Q,{cube:v,tube:I},h);if(Ze.add(xe),xe.traverse(oe=>{["roof","wall","lintel"].includes(oe.name)&&(oe.material=oe.material.clone(),oe.material.transparent=!0,un.push(oe.material))}),H>=1)for(let oe of[-1,1]){let ye=S(xe,"#ffdc80",[oe*(Q.width/Ce/2-.15),2.35,Q.depth/Ce/2],[.09,.14,.09]);ye.material=d("#ffdc80",{emissive:"#dca739",emissiveIntensity:.7})}if(H>=6&&(I(xe,"#6e5942",[Q.width/Ce/2+.2,1.75,-Q.depth/Ce/2],[.03,3.5,.03]),v(xe,"#5bbca9",[Q.width/Ce/2+.55,3.1,-Q.depth/Ce/2],[.7,.42,.03])),H>=3&&A.garden){let oe=A.garden,ye=new ke;ye.position.set(oe.x/Ce,Un(oe.x/Ce,oe.y/Ce),oe.y/Ce),Ze.add(ye),v(ye,"#785d40",[0,.07,0],[1.35,.14,1]);for(let st of[-.4,0,.4])for(let it of[-.25,.25])I(ye,"#587b37",[st,.21,it],[.025,.3,.025]),S(ye,"#6caa49",[st,.35,it],[.16,.12,.12]),j&&S(ye,"#cfa565",[st+.055,.27,it],[.07,.065,.07])}}if(A.campfire&&A.fire){let Q=new ke,xe=A.fire.x/Ce,oe=A.fire.y/Ce;Q.position.set(xe,Un(xe,oe),oe),Ze.add(Q);for(let ye=0;ye<8;ye++){let st=ye*Math.PI/4;S(Q,"#777a6b",[Math.sin(st)*.3,.07,Math.cos(st)*.3],[.095,.07,.105])}for(let ye of[.5,-.5]){let st=I(Q,"#614b35",[0,.09,0],[.06,.5,.06]);st.rotation.z=Math.PI/2,st.rotation.y=ye}pt=_(Q,new Yn(.17,.46,8),new Sn({color:"#ffb647",transparent:!0,opacity:.88}),[0,.28,0]),St=new or("#ffa145",2.5,4),St.position.y=.5,Q.add(St)}}}let oi=[],on=[0,0,0,0];function vr(){let A=new ke;o.add(A),S(A,"#765745",[0,.29,0],[.24,.25,.43]),S(A,"#765745",[0,.3,.4],[.19,.18,.2]),S(A,"#ae8b68",[0,.26,.58],[.11,.065,.065]);for(let j of[-1,1]){let Q=_(A,new Yn(.08,.17,3),d("#644937"),[j*.13,.47,.43]);Q.rotation.z=j*.45}let H=[];for(let j of[-.17,.17])for(let Q of[-.27,.24])H.push(I(A,"#5e493b",[j,.105,Q],[.037,.2,.037]));return{root:A,legs:H,lastX:null,lastZ:null}}function Mr(A,H){for(;oi.length<A.length;)oi.push(vr());let j=!1;for(let Q=0;Q<oi.length;Q++){let xe=oi[Q],oe=A[Q];if(xe.root.visible=!!oe,!oe){xe.lastX=xe.lastZ=null;continue}let ye=oe.x/Ce,st=oe.y/Ce,it=xe.lastX===null?0:ye-xe.lastX,ot=xe.lastZ===null?0:st-xe.lastZ,Se=Math.hypot(it,ot)>1e-4;xe.root.position.set(ye,Un(ye,st),st),Se&&(xe.root.rotation.y=Math.atan2(it,ot),j||(bd(on,H),j=!0));for(let Qe=0;Qe<4;Qe++)xe.legs[Qe].rotation.x=Se?on[Qe]:0;xe.lastX=ye,xe.lastZ=st}}let dn=[new It(x(),d("#adddd0",{roughness:.4}),96),new It(new Yn(1,1,3),d("#668e93"),96),new It(new Yn(1,1,3),d("#779da0"),96)];for(let A of dn)A.count=0,A.frustumCulled=!1,o.add(A);function ai(A,H,j){let Q=0;for(let xe of A||[]){let oe=Ld(xe,H,j,Ve);!oe||Q>=96||(bl(T,oe,0,0,0,.09,.045,.22),dn[0].setMatrixAt(Q,T.matrix),bl(T,oe,0,0,-.25,.095,.12,.025,Math.PI/2),dn[1].setMatrixAt(Q,T.matrix),bl(T,oe,0,.045,-.02,.04,.1,.11),dn[2].setMatrixAt(Q,T.matrix),Q++)}for(let xe of dn)xe.count=Q,xe.instanceMatrix.needsUpdate=!0}let wi={},An=[];function jn(A,H){if(Rd(wi,A)){for(let j of An)o.remove(j),j.traverse(Q=>{Q.isSprite&&(Ne.delete(Q),Q.material.map.dispose(),Q.material.dispose()),Q.userData.privateGeometry&&Q.geometry.dispose()});An=[];for(let j of A||[]){if(j.type==="return")continue;let Q=new ke;Q.position.set(j.x/Ce,Un(j.x/Ce,j.y/Ce),j.y/Ce),o.add(Q),An.push(Q);let xe=new mt(new ir(.4,.46,28),d(j.done?"#6d9c89":"#8cebd5",{side:Ht}));if(xe.rotation.x=-Math.PI/2,xe.position.y=.03,xe.userData.privateGeometry=!0,Q.add(xe),j.type==="fragment"&&(v(Q,"#e1c587",[0,.38,0],[.37,.45,.06]),v(Q,"#a68752",[0,.18,-.035],[.035,.42,.035]),v(Q,"#826b4d",[0,.4,.035],[.19,.022,.02])),j.type==="rune"){S(Q,"#87998a",[0,.26,0],[.27,.3,.21]);let ye=bt(j.symbol,"#ffe29b");ye.position.y=.8,ye.scale.set(.65,.32,1),Q.add(ye)}if(j.type==="chest"){v(Q,"#795a39",[0,.2,0],[.65,.4,.44]),v(Q,"#bb9251",[0,.42,0],[.69,.06,.46]);for(let ye of[-.21,.21])v(Q,"#f1d584",[ye,.23,.235],[.05,.36,.025])}if(j.type==="signal"){for(let ye of[-1,1]){let st=I(Q,"#8a6d49",[ye*.22,.55,0],[.04,1.1,.04]);st.rotation.z=ye*.22}if(v(Q,"#927652",[0,1.1,0],[.7,.16,.45]),j.done){let ye=S(Q,"#ffe28d",[0,1.34,0],[.16,.21,.16]);ye.material=d("#ffe28d",{emissive:"#ffa842",emissiveIntensity:1})}else v(Q,"#344f57",[0,1.3,0],[.3,.18,.24])}let oe=bt(j.label,j.done?"#b5d1c5":"#ffe9b5");oe.position.y=j.type==="signal"?1.95:1.35,Q.add(oe),Q.userData.done=j.done}}for(let j of An)j.children[0].scale.setScalar(j.userData.done?1:1+Math.sin(H*2.8)*.05)}let Ti=[];for(let A=0;A<4;A++){let H=new Lt().setFromPoints([new O(-.3,0,0),new O(0,-.08,0),new O(.3,0,0)]),j=new tr(H,new Oi({color:"#fff7de"}));o.add(j),Ti.push(j)}let Ei=Math.atan2(-130,-60),Ai=0,Ci=4.8,Yt=!0,li=!0,Ri=0,b=null,q=!1,K=0,$="first",X=new ke;a.add(X);let ue=I(X,"#52625f",[.28,-.36,-.42],[.1,.34,.1]);ue.rotation.x=-.65;let Me=S(X,"#dda879",[.29,-.27,-.58],[.055,.08,.055]),be=new ke;X.add(be);let Re=I(be,"#876742",[.32,-.17,-.75],[.014,1.55,.014]);Re.rotation.x=-.22;let Ge=S(be,"#b3b6ac",[.32,.61,-.91],[.039,.12,.025]),je={};for(let A of["gather","fish","cook"]){let H=new ke;H.position.set(.29,-.26,-.61),X.add(H),Pd(A,H,{cube:v,tube:I,ell:S}),je[A]=H}let He=Object.entries(je),at={down:0,up:Math.PI,left:-Math.PI/2,right:Math.PI/2},gt=new Set;X.traverse(A=>{A.isMesh&&(A.castShadow=!1,A.receiveShadow=!1,A.frustumCulled=!1)});let Tt=new O,Et=new O,xt=new O,qe=new O,Bt={position:xt,target:Tt},lt={x:0,z:0,surface:0,yaw:0,pitch:0,mode:"first",distance:4.8,bob:0},Wt=new O,Mn=new lr,nn=[Ze,Ee],zn=[],Ut=A=>A.object.isMesh&&A.distance>.1;function Kt(A,H=0){!Yt||t().paused||(Ei+=A,Ai=Wi(Ai+H,$==="first"?-1.12:-.05,$==="first"?1.12:.75))}function fn(A){$=A==="third"?"third":"first",Ai=A==="third"?.22:0,a.fov=A==="third"?58:72,a.updateProjectionMatrix(),b=null,li=!0}n.addEventListener("pointerdown",A=>{let H=t();!Yt||!H.play||H.paused||A.button>0||b||(b={id:A.pointerId,x:A.clientX,y:A.clientY},n.setPointerCapture(A.pointerId))}),n.addEventListener("pointermove",A=>{!b||b.id!==A.pointerId||(Kt(-(A.clientX-b.x)*.006,(A.clientY-b.y)*.005),b.x=A.clientX,b.y=A.clientY)});let Zt=A=>{b?.id===A.pointerId&&(b=null)};for(let A of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(A,Zt);n.addEventListener("wheel",A=>{!Yt||t().paused||(A.preventDefault(),$==="first"?(a.fov=Wi(a.fov+A.deltaY*.025,58,85),a.updateProjectionMatrix()):Ci=Wi(Ci+A.deltaY*.004,2.5,8))},{passive:!1}),n.addEventListener("webglcontextlost",A=>{A.preventDefault(),q=!0,Yt=!1,b=null,i()}),n.addEventListener("webglcontextrestored",()=>{q=!1,li=!0});function Jt(){r.setSize(innerWidth,innerHeight,!1),a.aspect=innerWidth/innerHeight,a.updateProjectionMatrix()}function D(A){if(!Yt||q)return;let H=t(),j=A/1e3,Q=Ri?Wi((A-Ri)/1e3,0,.06):1/60;Ri=A,vd(ne,j),Ad(Y,H.basePos,H.baseLevel),C=Y.layout,y=Y.elevation,wt(k,H.labels?.board,"#ffe087"),k.tag&&(k.tag.position.y=1.65,k.tag.scale.set(1.4,.36,1)),he.visible=!!H.trail,H.trail&&(co(ve,H.trail)&&he.position.set(ve.x,ve.y,ve.z),Le.material.opacity=.35+.13*Math.sin(j*3),(te!==H.trailNumber||se?.userData.text!==(H.trailNumber===4?H.labels?.finish||"4":H.trailNumber?String(H.trailNumber):H.trail.label))&&(se&&(Ne.delete(se),he.remove(se),se.material.map.dispose(),se.material.dispose()),te=H.trailNumber,se=bt(te===4?H.labels?.finish||"4":te?String(te):H.trail.label,"#54e4ef"),se.userData.text=te===4?H.labels?.finish||"4":te?String(te):H.trail.label,se.position.y=1.5,se.scale.set(H.trailNumber?1:2.45,.4,1),he.add(se))),wt(Fe,H.labels?.leon,"#b49966"),wt($e,H.labels?.nela,"#609991");let xe=H.P.x/Ce,oe=H.P.y/Ce;h.update(),W.update(j,C),Je.value=j,ie.material.uniforms.uTime.value=j,et(H.objects,j,H.resourceRevision),ai(H.fishes,j,H.sea),jn(H.chapterMarkers,j),pe(Ae,H.P,Number.isFinite(H.heading)?H.heading:at[H.face]||0,H.moving,j,Q,H.fast?5.25:3,H.sea,H.raft,H.motion,H.spear,H.blocked),Fe.root.visible=$e.root.visible=!0,pe(Fe,H.leon,Math.atan2(xe-H.leon.x/Ce,oe-H.leon.y/Ce),!1,j,Q,0,H.sea),pe($e,H.nela,Math.atan2(xe-H.nela.x/Ce,oe-H.nela.y/Ce),!1,j,Q,0,H.sea),gt.clear();for(let Se of H.players){if(Se.id===H.you)continue;gt.add(Se.id);let Qe=Mt.get(Se.id),Nt,an=H.looks[Se.slot]||Jx;!Qe||Qe.name!==Se.name?(Nt=Se.appearance?cl(Se.appearance):an,Qe&&V(Qe),Qe=Ye(Nt,"player",Se.name),Qe.remoteLook={...Nt},Qe.remoteMotion={kind:null,phase:0},Mt.set(Se.id,Qe)):Nt=Se.appearance?Gc(Qe.remoteLook,Se.appearance):an,kt(Qe,Nt);let Te=Qe.lastX===null?0:Se.point.x/Ce-Qe.lastX,ct=Qe.lastZ===null?0:Se.point.y/Ce-Qe.lastZ,Dt=Se.moving&&Math.hypot(Te,ct)>.002?Math.atan2(Te,ct):at[Se.face]||0,On=yd(Qe.remoteMotion,Se.motion,Se.received,A);pe(Qe,Se.point,Dt,Se.moving,j,Q,3,H.sea,!1,On,H.spearOwned&&!Se.spearStowed,Se.blocked)}for(let[Se,Qe]of Mt)gt.has(Se)||(V(Qe),Mt.delete(Se));kt(Ae,H.appearance||cl()),co(Ue,H.leon,.9,.15)&&Ee.position.set(Ue.x,Ue.y,Ue.z),co(Be,H.chest)&&ce.position.set(Be.x,Be.y,Be.z),ce.visible=!H.treasure,vn(H),Mr(H.enemies,j);let ye=C&&Math.abs(H.P.x-C.floor.x)<C.floor.w/2&&Math.abs(H.P.y-C.floor.y)<C.floor.h/2;for(let Se of un)Se.opacity=ye&&$==="third"?.23:1,Se.depthWrite=!(ye&&$==="third");pt&&(pt.scale.y=1+Math.sin(j*13)*.18,St.intensity=2.5+Math.sin(j*17)*.4);let st=_d(H.objects,H.P);_e.visible=!!(H.play&&!H.paused&&st),st&&co(Ke,st)&&_e.position.set(Ke.x,Ke.y+.03,Ke.z);for(let Se=0;Se<Ti.length;Se++){let Qe=Ti[Se];Qe.position.set(19+Math.sin(j*.08+Se*1.7)*8,7+Math.sin(j*.2+Se)*.5,12+Math.cos(j*.1+Se*1.3)*5),Qe.rotation.y=j*.1+Se,Qe.scale.y=1+Math.sin(j*7+Se)*.5}Ae.rig.visible=$!=="first";let it=H.moving&&!H.paused?Math.sin(Ae.phase*2)*.012:0;if(lt.x=xe,lt.z=oe,lt.surface=Ae.root.position.y,lt.yaw=Ei,lt.pitch=Ai,lt.mode=$,lt.distance=Ci*(a.aspect<.85?1.12:1),lt.bob=it,ul(lt,Bt),$==="third"){xt.y=Math.max(xt.y,Un(xt.x,xt.z)+.55),Wt.subVectors(xt,Tt);let Se=Wt.length();Wt.normalize(),Mn.set(Tt,Wt),Mn.near=.08,Mn.far=Se;let Qe=dl(Mn,nn,!0,zn).find(Ut);Qe&&xt.copy(Tt).addScaledVector(Wt,Math.max(.35,Qe.distance-.15))}$==="first"||li||qe.distanceTo(Ae.root.position)>5?(a.position.copy(xt),Et.copy(Tt),li=!1):(Wc(a.position,xt,Q,8),Wc(Et,Tt,Q,12)),a.lookAt($==="first"?Tt:Et),qe.copy(Ae.root.position),wd(Ne,a,innerWidth,L);let ot=!!H.spear||!!H.motion&&(H.motion.kind==="gather"||H.motion.kind==="fish"||H.motion.kind==="cook");X.visible=$==="first"&&H.play&&ot&&!H.sea(H.P.x,H.P.y),be.visible=!!H.spear&&!H.motion;for(let[Se,Qe]of He)Qe.visible=H.motion?.kind===Se;X.position.y=it*.4,X.rotation.x=H.motion?Math.sin(H.motion.phase*Math.PI*2)*.07:0,Me.material=d(H.appearance?.skin||"#dda879"),ue.material=d(H.appearance?.shirt||"#4c9cba"),fl(l,xe,oe),ie.position.copy(a.position),B.update(j,a.position),r.render(o,a),H.play&&Q>.038?K+=Q:K=Math.max(0,K-Q),K>3&&r.getPixelRatio()>.85&&(r.setPixelRatio(Math.max(.85,r.getPixelRatio()-.15)),Jt(),K=0)}function V(A){o.remove(A.root),A.tag&&(Ne.delete(A.tag),A.tag.material.map.dispose(),A.tag.material.dispose())}function re(A){return Yt=!!A&&!q,b=null,li=!0,Ri=0,Yt}function de(){Yt=!1,r.dispose(),N.dispose(),E.dispose(),B.dispose(),ie.geometry.dispose(),ie.material.dispose(),P.traverse(A=>{A.geometry&&A.geometry.dispose(),A.material&&A.material.dispose()}),M.dispose(),W.dispose(),h.dispose(),ft.dispose();for(let A of[...Object.values(Z),...dn])A.geometry.dispose(),A.dispose();for(let A of f.values())A.dispose();for(let A of u.values())A.dispose()}return{frame:D,resize:Jt,orbit:Kt,setEnabled:re,setCamera:fn,dispose:de,vector:(A,H)=>xd(A,H,Ei),get enabled(){return Yt},get yaw(){return Ei},get cameraMode(){return $},stats:()=>({calls:r.info.render.calls,triangles:r.info.render.triangles,pixelRatio:r.getPixelRatio(),people:Mt.size+3,camera:$,eye:a.position.toArray(),resourceStaticUpdates:Ie,materials:h.stats()})}}return Xd(Kx);})();
