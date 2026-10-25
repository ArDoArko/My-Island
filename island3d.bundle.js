var MyIsland3D=(()=>{var Cl=Object.defineProperty;var kd=Object.getOwnPropertyDescriptor;var Vd=Object.getOwnPropertyNames;var Gd=Object.prototype.hasOwnProperty;var Hd=(n,e)=>{for(var t in e)Cl(n,t,{get:e[t],enumerable:!0})},Wd=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Vd(e))!Gd.call(n,r)&&r!==t&&Cl(n,r,{get:()=>e[r],enumerable:!(i=kd(e,r))||i.enumerable});return n};var Xd=n=>Wd(Cl({},"__esModule",{value:!0}),n);var a_={};Hd(a_,{SCALE:()=>Se,actionPose:()=>Fd,baseElevation:()=>ih,buildBase:()=>Ud,buildHuman:()=>rh,cameraVector:()=>Md,create:()=>s_,createCampaign:()=>t_,drawCampaign2D:()=>th,fishPose:()=>zd,legPose:()=>Rd,nearestWithin:()=>bd,scaleWorldLabels:()=>Cd,terrainHeight:()=>Un,updateAppearanceKey:()=>Id,updateAvatarFrameCycle:()=>wd,updateAvatarPoseCycle:()=>Ad,updateBaseFrame:()=>Pd,updateBoarGait:()=>Ed,updateBuildingState:()=>Dd,updateChapterState:()=>Ld,updateFishPart:()=>Tl,updateLeafWindCycle:()=>Td,updateRemoteMotion:()=>Sd,updateTerrainAnchor:()=>ua,walkSurface:()=>nh});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Uh=0,lc=1,Nh=2;var cc=1,rs=2,ni=3,xi=0,ln=1,Ht=2,bi=0,Qi=1,hc=2,uc=3,dc=4,Fh=5,Bi=100,zh=101,Oh=102,Bh=103,kh=104,Vh=200,Gh=201,Hh=202,Wh=203,ka=204,Va=205,Xh=206,qh=207,Yh=208,Zh=209,Jh=210,$h=211,Kh=212,jh=213,Qh=214,po=0,mo=1,go=2,er=3,xo=4,_o=5,yo=6,vo=7,fc=0,eu=1,tu=2,Si=0,nu=1,iu=2,ru=3,ss=4,su=5,au=6,ou=7;var pc=300,dr=301,fr=302,Mo=303,bo=304,Qs=306,Hr=1e3,Oi=1001,Ga=1002,bn=1003,lu=1004;var ea=1005;var Wn=1006,So=1007;var Wi=1008;var Yn=1009,mc=1010,gc=1011,as=1012,wo=1013,Xi=1014,Zn=1015,os=1016,To=1017,Eo=1018,ls=1020,xc=35902,_c=35899,yc=1021,vc=1022,zn=1023,Wr=1026,cs=1027,Ao=1028,Co=1029,Mc=1030,Ro=1031;var Io=1033,ta=33776,na=33777,ia=33778,ra=33779,Po=35840,Do=35841,Lo=35842,Uo=35843,No=36196,Fo=37492,zo=37496,Oo=37808,Bo=37809,ko=37810,Vo=37811,Go=37812,Ho=37813,Wo=37814,Xo=37815,qo=37816,Yo=37817,Zo=37818,Jo=37819,$o=37820,Ko=37821,jo=36492,Qo=36494,el=36495,tl=36283,nl=36284,il=36285,rl=36286;var Fs=2300,Ha=2301,Oa=2302,ec=2400,tc=2401,nc=2402;var cu=3200,hu=3201;var bc=0,uu=1,Jn="",Xt="srgb",tr="srgb-linear",zs="linear",Lt="srgb";var ji=7680;var ic=519,du=512,fu=513,pu=514,Sc=515,mu=516,gu=517,xu=518,_u=519,Wa=35044;var wc="300 es",Hn=2e3,Os=2001;var _i=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sh=1234567,Us=Math.PI/180,Xr=180/Math.PI;function mi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function mt(n,e,t){return Math.max(e,Math.min(t,n))}function Tc(n,e){return(n%e+e)%e}function qd(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Yd(n,e,t){return n!==e?(t-n)/(e-n):0}function Ns(n,e,t){return(1-t)*n+t*e}function Zd(n,e,t,i){return Ns(n,e,1-Math.exp(-t*i))}function Jd(n,e=1){return e-Math.abs(Tc(n,e*2)-e)}function $d(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Kd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function jd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Qd(n,e){return n+Math.random()*(e-n)}function ef(n){return n*(.5-Math.random())}function tf(n){n!==void 0&&(sh=n);let e=sh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nf(n){return n*Us}function rf(n){return n*Xr}function sf(n){return(n&n-1)===0&&n!==0}function af(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function of(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function lf(n,e,t,i,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),f=a((e-i)/2),d=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*h,c*u,c*f,o*l);break;case"YZY":n.set(c*f,o*h,c*u,o*l);break;case"ZXZ":n.set(c*u,c*f,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*d,o*l);break;case"YXY":n.set(c*d,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var sa={DEG2RAD:Us,RAD2DEG:Xr,generateUUID:mi,clamp:mt,euclideanModulo:Tc,mapLinear:qd,inverseLerp:Yd,lerp:Ns,damp:Zd,pingpong:Jd,smoothstep:$d,smootherstep:Kd,randInt:jd,randFloat:Qd,randFloatSpread:ef,seededRandom:tf,degToRad:nf,radToDeg:rf,isPowerOfTwo:sf,ceilPowerOfTwo:af,floorPowerOfTwo:of,setQuaternionFromProperEuler:lf,normalize:Dt,denormalize:Gn},We=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},yi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],f=s[a+0],d=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==f||l!==d||h!==g){let m=1-o,p=c*f+l*d+h*g+u*x,_=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){let P=Math.sqrt(w),C=Math.atan2(P,p*_);m=Math.sin(m*C)/P,o=Math.sin(o*C)/P}let y=o*_;if(c=c*m+f*y,l=l*m+d*y,h=h*m+g*y,u=u*m+x*y,m===1-o){let P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-o*d,e[t+2]=l*g+h*d+o*f-c*u,e[t+3]=h*g-o*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),u=o(s/2),f=c(i/2),d=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ah.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ah.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),h=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-s*u,this.z=r+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rl.copy(this).projectOnVector(e),this.sub(Rl)}reflect(e){return this.sub(Rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rl=new B,ah=new yi,ht=class n{constructor(e,t,i,r,s,a,o,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],x=r[0],m=r[3],p=r[6],_=r[1],w=r[4],y=r[7],P=r[2],C=r[5],F=r[8];return s[0]=a*x+o*_+c*P,s[3]=a*m+o*w+c*C,s[6]=a*p+o*y+c*F,s[1]=l*x+h*_+u*P,s[4]=l*m+h*w+u*C,s[7]=l*p+h*y+u*F,s[2]=f*x+d*_+g*P,s[5]=f*m+d*w+g*C,s[8]=f*p+d*y+g*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*s,d=l*s-a*c,g=t*u+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(r*l-h*i)*x,e[2]=(o*i-r*a)*x,e[3]=f*x,e[4]=(h*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=d*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Il.makeScale(e,t)),this}rotate(e){return this.premultiply(Il.makeRotation(-e)),this}translate(e,t){return this.premultiply(Il.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Il=new ht;function Ec(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function yu(){let n=qr("canvas");return n.style.display="block",n}var oh={};function Yr(n){n in oh||(oh[n]=!0,console.warn(n))}function vu(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var lh=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ch=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cf(){let n={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Lt&&(r.r=gi(r.r),r.g=gi(r.g),r.b=gi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Lt&&(r.r=Gr(r.r),r.g=Gr(r.g),r.b=Gr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Jn?zs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Yr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Yr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[tr]:{primaries:e,whitePoint:i,transfer:zs,toXYZ:lh,fromXYZ:ch,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:i,transfer:Lt,toXYZ:lh,fromXYZ:ch,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),n}var wt=cf();function gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Gr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var wr,Xa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{wr===void 0&&(wr=qr("canvas")),wr.width=e.width,wr.height=e.height;let r=wr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=wr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=gi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(gi(t[i]/255)*255):t[i]=gi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hf=0,Zr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Pl(r[a].image)):s.push(Pl(r[a]))}else s=Pl(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Pl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var uf=0,Dl=new B,mn=class n extends _i{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Oi,r=Oi,s=Wn,a=Wi,o=zn,c=Yn,l=n.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=mi(),this.name="",this.source=new Zr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Dl).x}get height(){return this.source.getSize(Dl).y}get depth(){return this.source.getSize(Dl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hr:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case Ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hr:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case Ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=pc;mn.DEFAULT_ANISOTROPY=1;var Tt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,y=(d+1)/2,P=(p+1)/2,C=(h+f)/4,F=(u+x)/4,z=(g+m)/4;return w>y&&w>P?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=C/i,s=F/i):y>P?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=z/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=F/s,r=z/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-x)/_,this.z=(f-h)/_,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qa=class extends _i{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new mn(r);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Zr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qn=class extends qa{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Bs=class extends mn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ya=class extends mn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ei=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bn):Bn.fromBufferAttribute(s,a),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pa.copy(i.boundingBox)),pa.applyMatrix4(e.matrixWorld),this.union(pa)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ss),ma.subVectors(this.max,Ss),Tr.subVectors(e.a,Ss),Er.subVectors(e.b,Ss),Ar.subVectors(e.c,Ss),Di.subVectors(Er,Tr),Li.subVectors(Ar,Er),Zi.subVectors(Tr,Ar);let t=[0,-Di.z,Di.y,0,-Li.z,Li.y,0,-Zi.z,Zi.y,Di.z,0,-Di.x,Li.z,0,-Li.x,Zi.z,0,-Zi.x,-Di.y,Di.x,0,-Li.y,Li.x,0,-Zi.y,Zi.x,0];return!Ll(t,Tr,Er,Ar,ma)||(t=[1,0,0,0,1,0,0,0,1],!Ll(t,Tr,Er,Ar,ma))?!1:(ga.crossVectors(Di,Li),t=[ga.x,ga.y,ga.z],Ll(t,Tr,Er,Ar,ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ci=[new B,new B,new B,new B,new B,new B,new B,new B],Bn=new B,pa=new ei,Tr=new B,Er=new B,Ar=new B,Di=new B,Li=new B,Zi=new B,Ss=new B,ma=new B,ga=new B,Ji=new B;function Ll(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ji.fromArray(n,s);let o=r.x*Math.abs(Ji.x)+r.y*Math.abs(Ji.y)+r.z*Math.abs(Ji.z),c=e.dot(Ji),l=t.dot(Ji),h=i.dot(Ji);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var df=new ei,ws=new B,Ul=new B,vi=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):df.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ws.subVectors(e,this.center);let t=ws.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ws,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ws.copy(e.center).add(Ul)),this.expandByPoint(ws.copy(e.center).sub(Ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},hi=new B,Nl=new B,xa=new B,Ui=new B,Fl=new B,_a=new B,zl=new B,Jr=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Nl.copy(e).add(t).multiplyScalar(.5),xa.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(Nl);let s=e.distanceTo(t)*.5,a=-this.direction.dot(xa),o=Ui.dot(this.direction),c=-Ui.dot(xa),l=Ui.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*c-o,f=a*o-c,g=s*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Nl).addScaledVector(xa,f),d}intersectSphere(e,t){hi.subVectors(e.center,this.origin);let i=hi.dot(this.direction),r=hi.dot(hi)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,i,r,s){Fl.subVectors(t,e),_a.subVectors(i,e),zl.crossVectors(Fl,_a);let a=this.direction.dot(zl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ui.subVectors(this.origin,e);let c=o*this.direction.dot(_a.crossVectors(Ui,_a));if(c<0)return null;let l=o*this.direction.dot(Fl.cross(Ui));if(l<0||c+l>a)return null;let h=-o*Ui.dot(zl);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},It=class n{constructor(e,t,i,r,s,a,o,c,l,h,u,f,d,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,h,u,f,d,g,x,m)}set(e,t,i,r,s,a,o,c,l,h,u,f,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Cr.setFromMatrixColumn(e,0).length(),s=1/Cr.setFromMatrixColumn(e,1).length(),a=1/Cr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let f=a*h,d=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-x*l,t[9]=-o*c,t[2]=x-f*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,g=l*h,x=l*u;t[0]=f+x*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=x+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,g=l*h,x=l*u;t[0]=f-x*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,d=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+x,t[1]=c*u,t[5]=x*l+f,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,d=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=a*c,d=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+x,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ff,e,pf)}lookAt(e,t,i){let r=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Ni.crossVectors(i,Rn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Ni.crossVectors(i,Rn)),Ni.normalize(),ya.crossVectors(Rn,Ni),r[0]=Ni.x,r[4]=ya.x,r[8]=Rn.x,r[1]=Ni.y,r[5]=ya.y,r[9]=Rn.y,r[2]=Ni.z,r[6]=ya.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],_=i[3],w=i[7],y=i[11],P=i[15],C=r[0],F=r[4],z=r[8],T=r[12],M=r[1],A=r[5],O=r[9],D=r[13],I=r[2],N=r[6],G=r[10],H=r[14],k=r[3],ie=r[7],se=r[11],ue=r[15];return s[0]=a*C+o*M+c*I+l*k,s[4]=a*F+o*A+c*N+l*ie,s[8]=a*z+o*O+c*G+l*se,s[12]=a*T+o*D+c*H+l*ue,s[1]=h*C+u*M+f*I+d*k,s[5]=h*F+u*A+f*N+d*ie,s[9]=h*z+u*O+f*G+d*se,s[13]=h*T+u*D+f*H+d*ue,s[2]=g*C+x*M+m*I+p*k,s[6]=g*F+x*A+m*N+p*ie,s[10]=g*z+x*O+m*G+p*se,s[14]=g*T+x*D+m*H+p*ue,s[3]=_*C+w*M+y*I+P*k,s[7]=_*F+w*A+y*N+P*ie,s[11]=_*z+w*O+y*G+P*se,s[15]=_*T+w*D+y*H+P*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+s*c*u-r*l*u-s*o*f+i*l*f+r*o*d-i*c*d)+x*(+t*c*d-t*l*f+s*a*f-r*a*d+r*l*h-s*c*h)+m*(+t*l*u-t*o*d-s*a*u+i*a*d+s*o*h-i*l*h)+p*(-r*o*h-t*c*u+t*o*f+r*a*u-i*a*f+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],_=u*m*l-x*f*l+x*c*d-o*m*d-u*c*p+o*f*p,w=g*f*l-h*m*l-g*c*d+a*m*d+h*c*p-a*f*p,y=h*x*l-g*u*l+g*o*d-a*x*d-h*o*p+a*u*p,P=g*u*c-h*x*c-g*o*f+a*x*f+h*o*m-a*u*m,C=t*_+i*w+r*y+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/C;return e[0]=_*F,e[1]=(x*f*s-u*m*s-x*r*d+i*m*d+u*r*p-i*f*p)*F,e[2]=(o*m*s-x*c*s+x*r*l-i*m*l-o*r*p+i*c*p)*F,e[3]=(u*c*s-o*f*s-u*r*l+i*f*l+o*r*d-i*c*d)*F,e[4]=w*F,e[5]=(h*m*s-g*f*s+g*r*d-t*m*d-h*r*p+t*f*p)*F,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*p-t*c*p)*F,e[7]=(a*f*s-h*c*s+h*r*l-t*f*l-a*r*d+t*c*d)*F,e[8]=y*F,e[9]=(g*u*s-h*x*s-g*i*d+t*x*d+h*i*p-t*u*p)*F,e[10]=(a*x*s-g*o*s+g*i*l-t*x*l-a*i*p+t*o*p)*F,e[11]=(h*o*s-a*u*s-h*i*l+t*u*l+a*i*d-t*o*d)*F,e[12]=P*F,e[13]=(h*x*r-g*u*r+g*i*f-t*x*f-h*i*m+t*u*m)*F,e[14]=(g*o*r-a*x*r-g*i*c+t*x*c+a*i*m-t*o*m)*F,e[15]=(a*u*r-h*o*r+h*i*c-t*u*c-a*i*f+t*o*f)*F,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,f=s*l,d=s*h,g=s*u,x=a*h,m=a*u,p=o*u,_=c*l,w=c*h,y=c*u,P=i.x,C=i.y,F=i.z;return r[0]=(1-(x+p))*P,r[1]=(d+y)*P,r[2]=(g-w)*P,r[3]=0,r[4]=(d-y)*C,r[5]=(1-(f+p))*C,r[6]=(m+_)*C,r[7]=0,r[8]=(g+w)*F,r[9]=(m-_)*F,r[10]=(1-(f+x))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Cr.set(r[0],r[1],r[2]).length(),a=Cr.set(r[4],r[5],r[6]).length(),o=Cr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kn.copy(this);let l=1/s,h=1/a,u=1/o;return kn.elements[0]*=l,kn.elements[1]*=l,kn.elements[2]*=l,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,t.setFromRotationMatrix(kn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Hn,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r),g,x;if(c)g=s/(a-s),x=a*s/(a-s);else if(o===Hn)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Os)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Hn,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-r),f=-(t+e)/(t-e),d=-(i+r)/(i-r),g,x;if(c)g=1/(a-s),x=a/(a-s);else if(o===Hn)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===Os)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Cr=new B,kn=new It,ff=new B(0,0,0),pf=new B(1,1,1),Ni=new B,ya=new B,Rn=new B,hh=new It,uh=new yi,Xn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uh.setFromEuler(this),this.setFromQuaternion(uh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xn.DEFAULT_ORDER="XYZ";var $r=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},mf=0,dh=new B,Rr=new yi,ui=new It,va=new B,Ts=new B,gf=new B,xf=new yi,fh=new B(1,0,0),ph=new B(0,1,0),mh=new B(0,0,1),gh={type:"added"},_f={type:"removed"},Ir={type:"childadded",child:null},Ol={type:"childremoved",child:null},Et=class n extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new B,t=new Xn,i=new yi,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new It},normalMatrix:{value:new ht}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(fh,e)}rotateY(e){return this.rotateOnAxis(ph,e)}rotateZ(e){return this.rotateOnAxis(mh,e)}translateOnAxis(e,t){return dh.copy(e).applyQuaternion(this.quaternion),this.position.add(dh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fh,e)}translateY(e){return this.translateOnAxis(ph,e)}translateZ(e){return this.translateOnAxis(mh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?va.copy(e):va.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Ts,va,this.up):ui.lookAt(va,Ts,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),Rr.setFromRotationMatrix(ui),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gh),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_f),Ol.child=e,this.dispatchEvent(Ol),Ol.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gh),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,e,gf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,xf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Et.DEFAULT_UP=new B(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vn=new B,di=new B,Bl=new B,fi=new B,Pr=new B,Dr=new B,xh=new B,kl=new B,Vl=new B,Gl=new B,Hl=new Tt,Wl=new Tt,Xl=new Tt,pi=class n{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Vn.subVectors(e,t),r.cross(Vn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Vn.subVectors(r,t),di.subVectors(i,t),Bl.subVectors(e,t);let a=Vn.dot(Vn),o=Vn.dot(di),c=Vn.dot(Bl),l=di.dot(di),h=di.dot(Bl),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(l*c-o*h)*f,g=(a*h-o*c)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,fi.x),c.addScaledVector(a,fi.y),c.addScaledVector(o,fi.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return Hl.setScalar(0),Wl.setScalar(0),Xl.setScalar(0),Hl.fromBufferAttribute(e,t),Wl.fromBufferAttribute(e,i),Xl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Hl,s.x),a.addScaledVector(Wl,s.y),a.addScaledVector(Xl,s.z),a}static isFrontFacing(e,t,i,r){return Vn.subVectors(i,t),di.subVectors(e,t),Vn.cross(di).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Vn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;Pr.subVectors(r,i),Dr.subVectors(s,i),kl.subVectors(e,i);let c=Pr.dot(kl),l=Dr.dot(kl);if(c<=0&&l<=0)return t.copy(i);Vl.subVectors(e,r);let h=Pr.dot(Vl),u=Dr.dot(Vl);if(h>=0&&u<=h)return t.copy(r);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Pr,a);Gl.subVectors(e,s);let d=Pr.dot(Gl),g=Dr.dot(Gl);if(g>=0&&d<=g)return t.copy(s);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Dr,o);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return xh.subVectors(s,r),o=(u-h)/(u-h+(d-g)),t.copy(r).addScaledVector(xh,o);let p=1/(m+x+f);return a=x*p,o=f*p,t.copy(i).addScaledVector(Pr,a).addScaledVector(Dr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function ql(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var it=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=wt.workingColorSpace){return this.r=e,this.g=t,this.b=i,wt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=wt.workingColorSpace){if(e=Tc(e,1),t=mt(t,0,1),i=mt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ql(a,s,e+1/3),this.g=ql(a,s,e),this.b=ql(a,s,e-1/3)}return wt.colorSpaceToWorking(this,r),this}setStyle(e,t=Xt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){let i=Mu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return wt.workingToColorSpace(pn.copy(this),e),Math.round(mt(pn.r*255,0,255))*65536+Math.round(mt(pn.g*255,0,255))*256+Math.round(mt(pn.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(pn.copy(this),t);let i=pn.r,r=pn.g,s=pn.b,a=Math.max(i,r,s),o=Math.min(i,r,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Xt){wt.workingToColorSpace(pn.copy(this),e);let t=pn.r,i=pn.g,r=pn.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(Ma);let i=Ns(Fi.h,Ma.h,t),r=Ns(Fi.s,Ma.s,t),s=Ns(Fi.l,Ma.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new it;it.NAMES=Mu;var yf=0,ti=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Qi,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ka,this.blendDst=Va,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ka&&(i.blendSrc=this.blendSrc),this.blendDst!==Va&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ic&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Sn=class extends ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var $t=new B,ba=new We,vf=0,jt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wa,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ba.fromBufferAttribute(this,t),ba.applyMatrix3(e),this.setXY(t,ba.x,ba.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wa&&(e.usage=this.usage),e}};var ks=class extends jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Vs=class extends jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var at=class extends jt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Mf=0,Fn=new It,Yl=new Et,Lr=new B,In=new ei,Es=new ei,tn=new B,Pt=class n extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ec(e)?Vs:ks)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ht().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,i){return Fn.makeTranslation(e,t,i),this.applyMatrix4(Fn),this}scale(e,t,i){return Fn.makeScale(e,t,i),this.applyMatrix4(Fn),this}lookAt(e){return Yl.lookAt(e),Yl.updateMatrix(),this.applyMatrix4(Yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new at(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];In.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Es.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(In.min,Es.min),In.expandByPoint(tn),tn.addVectors(In.max,Es.max),In.expandByPoint(tn)):(In.expandByPoint(Es.min),In.expandByPoint(Es.max))}In.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)tn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(tn));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)tn.fromBufferAttribute(o,l),c&&(Lr.fromBufferAttribute(e,l),tn.add(Lr)),r=Math.max(r,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let z=0;z<i.count;z++)o[z]=new B,c[z]=new B;let l=new B,h=new B,u=new B,f=new We,d=new We,g=new We,x=new B,m=new B;function p(z,T,M){l.fromBufferAttribute(i,z),h.fromBufferAttribute(i,T),u.fromBufferAttribute(i,M),f.fromBufferAttribute(s,z),d.fromBufferAttribute(s,T),g.fromBufferAttribute(s,M),h.sub(l),u.sub(l),d.sub(f),g.sub(f);let A=1/(d.x*g.y-g.x*d.y);isFinite(A)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(A),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(A),o[z].add(x),o[T].add(x),o[M].add(x),c[z].add(m),c[T].add(m),c[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let z=0,T=_.length;z<T;++z){let M=_[z],A=M.start,O=M.count;for(let D=A,I=A+O;D<I;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let w=new B,y=new B,P=new B,C=new B;function F(z){P.fromBufferAttribute(r,z),C.copy(P);let T=o[z];w.copy(T),w.sub(P.multiplyScalar(P.dot(T))).normalize(),y.crossVectors(C,T);let A=y.dot(c[z])<0?-1:1;a.setXYZW(z,w.x,w.y,w.z,A)}for(let z=0,T=_.length;z<T;++z){let M=_[z],A=M.start,O=M.count;for(let D=A,I=A+O;D<I;D+=3)F(e.getX(D+0)),F(e.getX(D+1)),F(e.getX(D+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let r=new B,s=new B,a=new B,o=new B,c=new B,l=new B,h=new B,u=new B;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?d=c[x]*o.data.stride+o.offset:d=c[x]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new jt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=e(c,i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,i);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_h=new It,$i=new Jr,Sa=new vi,yh=new B,wa=new B,Ta=new B,Ea=new B,Zl=new B,Aa=new B,vh=new B,Ca=new B,ft=class extends Et{constructor(e=new Pt,t=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Aa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(Zl.fromBufferAttribute(u,e),a?Aa.addScaledVector(Zl,h):Aa.addScaledVector(Zl.sub(t),h))}t.add(Aa)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(s),$i.copy(e.ray).recast(e.near),!(Sa.containsPoint($i.origin)===!1&&($i.intersectSphere(Sa,yh)===null||$i.origin.distanceToSquared(yh)>(e.far-e.near)**2))&&(_h.copy(s).invert(),$i.copy(e.ray).applyMatrix4(_h),!(i.boundingBox!==null&&$i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],_=Math.max(m.start,d.start),w=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=_,P=w;y<P;y+=3){let C=o.getX(y),F=o.getX(y+1),z=o.getX(y+2);r=Ra(this,p,e,i,l,h,u,C,F,z),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let _=o.getX(m),w=o.getX(m+1),y=o.getX(m+2);r=Ra(this,a,e,i,l,h,u,_,w,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],_=Math.max(m.start,d.start),w=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=_,P=w;y<P;y+=3){let C=y,F=y+1,z=y+2;r=Ra(this,p,e,i,l,h,u,C,F,z),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let _=m,w=m+1,y=m+2;r=Ra(this,a,e,i,l,h,u,_,w,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function bf(n,e,t,i,r,s,a,o){let c;if(e.side===ln?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===xi,o),c===null)return null;Ca.copy(o),Ca.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Ca);return l<t.near||l>t.far?null:{distance:l,point:Ca.clone(),object:n}}function Ra(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,wa),n.getVertexPosition(c,Ta),n.getVertexPosition(l,Ea);let h=bf(n,e,t,i,wa,Ta,Ea,vh);if(h){let u=new B;pi.getBarycoord(vh,wa,Ta,Ea,u),r&&(h.uv=pi.getInterpolatedAttribute(r,o,c,l,u,new We)),s&&(h.uv1=pi.getInterpolatedAttribute(s,o,c,l,u,new We)),a&&(h.normal=pi.getInterpolatedAttribute(a,o,c,l,u,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new B,materialIndex:0};pi.getNormal(wa,Ta,Ea,f.normal),h.face=f,h.barycoord=u}return h}var on=class n extends Pt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(u,2));function g(x,m,p,_,w,y,P,C,F,z,T){let M=y/F,A=P/z,O=y/2,D=P/2,I=C/2,N=F+1,G=z+1,H=0,k=0,ie=new B;for(let se=0;se<G;se++){let ue=se*A-D;for(let Ie=0;Ie<N;Ie++){let Ge=Ie*M-O;ie[x]=Ge*_,ie[m]=ue*w,ie[p]=I,l.push(ie.x,ie.y,ie.z),ie[x]=0,ie[m]=0,ie[p]=C>0?1:-1,h.push(ie.x,ie.y,ie.z),u.push(Ie/F),u.push(1-se/z),H+=1}}for(let se=0;se<z;se++)for(let ue=0;ue<F;ue++){let Ie=f+ue+N*se,Ge=f+ue+N*(se+1),ut=f+(ue+1)+N*(se+1),Je=f+(ue+1)+N*se;c.push(Ie,Ge,Je),c.push(Ge,ut,Je),k+=6}o.addGroup(d,k,T),d+=k,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function pr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function gn(n){let e={};for(let t=0;t<n.length;t++){let i=pr(n[t]);for(let r in i)e[r]=i[r]}return e}function Sf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ac(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}var sl={clone:pr,merge:gn},wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wf,this.fragmentShader=Tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=Sf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Gs=class extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},zi=new B,Mh=new We,bh=new We,Kt=class extends Gs{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,Mh,bh),t.subVectors(bh,Mh)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Us*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ur=-90,Nr=1,Za=class extends Et{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Kt(Ur,Nr,e,t);r.layers=this.layers,this.add(r);let s=new Kt(Ur,Nr,e,t);s.layers=this.layers,this.add(s);let a=new Kt(Ur,Nr,e,t);a.layers=this.layers,this.add(a);let o=new Kt(Ur,Nr,e,t);o.layers=this.layers,this.add(o);let c=new Kt(Ur,Nr,e,t);c.layers=this.layers,this.add(c);let l=new Kt(Ur,Nr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Hn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Os)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Hs=class extends mn{constructor(e=[],t=dr,i,r,s,a,o,c,l,h){super(e,t,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ja=class extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Hs(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new on(5,5,5),s=new wn({name:"CubemapFromEquirect",uniforms:pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:bi});s.uniforms.tEquirect.value=t;let a=new ft(r,s),o=t.minFilter;return t.minFilter===Wi&&(t.minFilter=Wn),new Za(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}},Oe=class extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ef={type:"move"},Kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ef)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Oe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var nr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new it(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ir=class extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ws=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wa,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},xn=new B,jr=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qr=class extends ti{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fr,As=new B,zr=new B,Or=new B,Br=new We,Cs=new We,bu=new It,Ia=new B,Rs=new B,Pa=new B,Sh=new We,Jl=new We,wh=new We,Xs=class extends Et{constructor(e=new Qr){if(super(),this.isSprite=!0,this.type="Sprite",Fr===void 0){Fr=new Pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ws(t,5);Fr.setIndex([0,1,2,0,2,3]),Fr.setAttribute("position",new jr(i,3,0,!1)),Fr.setAttribute("uv",new jr(i,2,3,!1))}this.geometry=Fr,this.material=e,this.center=new We(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zr.setFromMatrixScale(this.matrixWorld),bu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Or.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zr.multiplyScalar(-Or.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let a=this.center;Da(Ia.set(-.5,-.5,0),Or,a,zr,r,s),Da(Rs.set(.5,-.5,0),Or,a,zr,r,s),Da(Pa.set(.5,.5,0),Or,a,zr,r,s),Sh.set(0,0),Jl.set(1,0),wh.set(1,1);let o=e.ray.intersectTriangle(Ia,Rs,Pa,!1,As);if(o===null&&(Da(Rs.set(-.5,.5,0),Or,a,zr,r,s),Jl.set(0,1),o=e.ray.intersectTriangle(Ia,Pa,Rs,!1,As),o===null))return;let c=e.ray.origin.distanceTo(As);c<e.near||c>e.far||t.push({distance:c,point:As.clone(),uv:pi.getInterpolation(As,Ia,Rs,Pa,Sh,Jl,wh,new We),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Da(n,e,t,i,r,s){Br.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Cs.x=s*Br.x-r*Br.y,Cs.y=r*Br.x+s*Br.y):Cs.copy(Br),n.copy(e),n.x+=Cs.x,n.y+=Cs.y,n.applyMatrix4(bu)}var $a=class extends mn{constructor(e=null,t=1,i=1,r,s,a,o,c,l=bn,h=bn,u,f){super(null,a,o,c,l,h,r,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var es=class extends jt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},kr=new It,Th=new It,La=[],Eh=new ei,Af=new It,Is=new ft,Ps=new vi,At=class extends ft{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new es(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Af)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,kr),Eh.copy(e.boundingBox).applyMatrix4(kr),this.boundingBox.union(Eh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,kr),Ps.copy(e.boundingSphere).applyMatrix4(kr),this.boundingSphere.union(Ps)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Is.geometry=this.geometry,Is.material=this.material,Is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ps.copy(this.boundingSphere),Ps.applyMatrix4(i),e.ray.intersectsSphere(Ps)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,kr),Th.multiplyMatrices(i,kr),Is.matrixWorld=Th,Is.raycast(e,La);for(let a=0,o=La.length;a<o;a++){let c=La[a];c.instanceId=s,c.object=this,t.push(c)}La.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new es(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new $a(new Float32Array(r*this.count),r,this.count,Ao,Zn));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},$l=new B,Cf=new B,Rf=new ht,jn=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=$l.subVectors(i,t).cross(Cf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta($l),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Rf.getNormalMatrix(e),r=this.coplanarPoint($l).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ki=new vi,If=new We(.5,.5),Ua=new B,ts=class{constructor(e=new jn,t=new jn,i=new jn,r=new jn,s=new jn,a=new jn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Hn,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],f=s[6],d=s[7],g=s[8],x=s[9],m=s[10],p=s[11],_=s[12],w=s[13],y=s[14],P=s[15];if(r[0].setComponents(l-a,d-h,p-g,P-_).normalize(),r[1].setComponents(l+a,d+h,p+g,P+_).normalize(),r[2].setComponents(l+o,d+u,p+x,P+w).normalize(),r[3].setComponents(l-o,d-u,p-x,P-w).normalize(),i)r[4].setComponents(c,f,m,y).normalize(),r[5].setComponents(l-c,d-f,p-m,P-y).normalize();else if(r[4].setComponents(l-c,d-f,p-m,P-y).normalize(),t===Hn)r[5].setComponents(l+c,d+f,p+m,P+y).normalize();else if(t===Os)r[5].setComponents(c,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){Ki.center.set(0,0,0);let t=If.distanceTo(e.center);return Ki.radius=.7071067811865476+t,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Ua.x=r.normal.x>0?e.max.x:e.min.x,Ua.y=r.normal.y>0?e.max.y:e.min.y,Ua.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ki=class extends ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ka=new B,ja=new B,Ah=new It,Ds=new Jr,Na=new vi,Kl=new B,Ch=new B,rr=class extends Et{constructor(e=new Pt,t=new ki){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ka.fromBufferAttribute(t,r-1),ja.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ka.distanceTo(ja);e.setAttribute("lineDistance",new at(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Na.copy(i.boundingSphere),Na.applyMatrix4(r),Na.radius+=s,e.ray.intersectsSphere(Na)===!1)return;Ah.copy(r).invert(),Ds.copy(e.ray).applyMatrix4(Ah);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=d,m=g-1;x<m;x+=l){let p=h.getX(x),_=h.getX(x+1),w=Fa(this,e,Ds,c,p,_,x);w&&t.push(w)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(d),p=Fa(this,e,Ds,c,x,m,g-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=d,m=g-1;x<m;x+=l){let p=Fa(this,e,Ds,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Fa(this,e,Ds,c,g-1,d,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Fa(n,e,t,i,r,s,a){let o=n.geometry.attributes.position;if(Ka.fromBufferAttribute(o,r),ja.fromBufferAttribute(o,s),t.distanceSqToSegment(Ka,ja,Kl,Ch)>i)return;Kl.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Kl);if(!(l<e.near||l>e.far))return{distance:l,point:Ch.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Vi=class extends mn{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},qs=class extends mn{constructor(e,t,i=Xi,r,s,a,o=bn,c=bn,l,h=Wr,u=1){if(h!==Wr&&h!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ys=class extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var kt=class n extends Pt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],f=[],d=[],g=0,x=[],m=i/2,p=0;_(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(f,3)),this.setAttribute("uv",new at(d,2));function _(){let y=new B,P=new B,C=0,F=(t-e)/i;for(let z=0;z<=s;z++){let T=[],M=z/s,A=M*(t-e)+e;for(let O=0;O<=r;O++){let D=O/r,I=D*c+o,N=Math.sin(I),G=Math.cos(I);P.x=A*N,P.y=-M*i+m,P.z=A*G,u.push(P.x,P.y,P.z),y.set(N,F,G).normalize(),f.push(y.x,y.y,y.z),d.push(D,1-M),T.push(g++)}x.push(T)}for(let z=0;z<r;z++)for(let T=0;T<s;T++){let M=x[T][z],A=x[T+1][z],O=x[T+1][z+1],D=x[T][z+1];(e>0||T!==0)&&(h.push(M,A,D),C+=3),(t>0||T!==s-1)&&(h.push(A,O,D),C+=3)}l.addGroup(p,C,0),p+=C}function w(y){let P=g,C=new We,F=new B,z=0,T=y===!0?e:t,M=y===!0?1:-1;for(let O=1;O<=r;O++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;let A=g;for(let O=0;O<=r;O++){let I=O/r*c+o,N=Math.cos(I),G=Math.sin(I);F.x=T*G,F.y=m*M,F.z=T*N,u.push(F.x,F.y,F.z),f.push(0,M,0),C.x=N*.5+.5,C.y=G*.5*M+.5,d.push(C.x,C.y),g++}for(let O=0;O<r;O++){let D=P+O,I=A+O;y===!0?h.push(I,I+1,D):h.push(I+1,I,D),z+=3}l.addGroup(p,z,y===!0?1:2),p+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qn=class n extends kt{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Qa=class n extends Pt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];o(r),l(i),h(),this.setAttribute("position",new at(s,3)),this.setAttribute("normal",new at(s.slice(),3)),this.setAttribute("uv",new at(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let w=new B,y=new B,P=new B;for(let C=0;C<t.length;C+=3)d(t[C+0],w),d(t[C+1],y),d(t[C+2],P),c(w,y,P,_)}function c(_,w,y,P){let C=P+1,F=[];for(let z=0;z<=C;z++){F[z]=[];let T=_.clone().lerp(y,z/C),M=w.clone().lerp(y,z/C),A=C-z;for(let O=0;O<=A;O++)O===0&&z===C?F[z][O]=T:F[z][O]=T.clone().lerp(M,O/A)}for(let z=0;z<C;z++)for(let T=0;T<2*(C-z)-1;T++){let M=Math.floor(T/2);T%2===0?(f(F[z][M+1]),f(F[z+1][M]),f(F[z][M])):(f(F[z][M+1]),f(F[z+1][M+1]),f(F[z+1][M]))}}function l(_){let w=new B;for(let y=0;y<s.length;y+=3)w.x=s[y+0],w.y=s[y+1],w.z=s[y+2],w.normalize().multiplyScalar(_),s[y+0]=w.x,s[y+1]=w.y,s[y+2]=w.z}function h(){let _=new B;for(let w=0;w<s.length;w+=3){_.x=s[w+0],_.y=s[w+1],_.z=s[w+2];let y=m(_)/2/Math.PI+.5,P=p(_)/Math.PI+.5;a.push(y,1-P)}g(),u()}function u(){for(let _=0;_<a.length;_+=6){let w=a[_+0],y=a[_+2],P=a[_+4],C=Math.max(w,y,P),F=Math.min(w,y,P);C>.9&&F<.1&&(w<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),P<.2&&(a[_+4]+=1))}}function f(_){s.push(_.x,_.y,_.z)}function d(_,w){let y=_*3;w.x=e[y+0],w.y=e[y+1],w.z=e[y+2]}function g(){let _=new B,w=new B,y=new B,P=new B,C=new We,F=new We,z=new We;for(let T=0,M=0;T<s.length;T+=9,M+=6){_.set(s[T+0],s[T+1],s[T+2]),w.set(s[T+3],s[T+4],s[T+5]),y.set(s[T+6],s[T+7],s[T+8]),C.set(a[M+0],a[M+1]),F.set(a[M+2],a[M+3]),z.set(a[M+4],a[M+5]),P.copy(_).add(w).add(y).divideScalar(3);let A=m(P);x(C,M+0,_,A),x(F,M+2,w,A),x(z,M+4,y,A)}}function x(_,w,y,P){P<0&&_.x===1&&(a[w]=_.x-1),y.x===0&&y.z===0&&(a[w]=P/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var sr=class n extends Qa{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Zs=class n extends Pt{constructor(e=[new We(0,-.5),new We(.5,0),new We(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=mt(r,0,Math.PI*2);let s=[],a=[],o=[],c=[],l=[],h=1/t,u=new B,f=new We,d=new B,g=new B,x=new B,m=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(g)}for(let _=0;_<=t;_++){let w=i+_*h*r,y=Math.sin(w),P=Math.cos(w);for(let C=0;C<=e.length-1;C++){u.x=e[C].x*y,u.y=e[C].y,u.z=e[C].x*P,a.push(u.x,u.y,u.z),f.x=_/t,f.y=C/(e.length-1),o.push(f.x,f.y);let F=c[3*C+0]*y,z=c[3*C+1],T=c[3*C+0]*P;l.push(F,z,T)}}for(let _=0;_<t;_++)for(let w=0;w<e.length-1;w++){let y=w+_*e.length,P=y,C=y+e.length,F=y+e.length+1,z=y+1;s.push(P,C,z),s.push(F,z,C)}this.setIndex(s),this.setAttribute("position",new at(a,3)),this.setAttribute("uv",new at(o,2)),this.setAttribute("normal",new at(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var Pn=class n extends Pt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,u=e/o,f=t/c,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let _=p*f-a;for(let w=0;w<l;w++){let y=w*u-s;g.push(y,-_,0),x.push(0,0,1),m.push(w/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<o;_++){let w=_+l*p,y=_+l*(p+1),P=_+1+l*(p+1),C=_+1+l*p;d.push(w,y,C),d.push(y,P,C)}this.setIndex(d),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ar=class n extends Pt{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);let o=[],c=[],l=[],h=[],u=e,f=(t-e)/r,d=new B,g=new We;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){let p=s+m/i*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<r;x++){let m=x*(i+1);for(let p=0;p<i;p++){let _=p+m,w=_,y=_+i+1,P=_+i+2,C=_+1;o.push(w,y,C),o.push(y,P,C)}}this.setIndex(o),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Tn=class n extends Pt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new B,f=new B,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let _=[],w=p/i,y=0;p===0&&a===0?y=.5/t:p===i&&c===Math.PI&&(y=-.5/t);for(let P=0;P<=t;P++){let C=P/t;u.x=-e*Math.cos(r+C*s)*Math.sin(a+w*o),u.y=e*Math.cos(a+w*o),u.z=e*Math.sin(r+C*s)*Math.sin(a+w*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(C+y,1-w),_.push(l++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<t;_++){let w=h[p][_+1],y=h[p][_],P=h[p+1][_],C=h[p+1][_+1];(p!==0||a>0)&&d.push(w,y,C),(p!==i-1||c<Math.PI)&&d.push(y,P,C)}this.setIndex(d),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Mi=class n extends Pt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let a=[],o=[],c=[],l=[],h=new B,u=new B,f=new B;for(let d=0;d<=i;d++)for(let g=0;g<=r;g++){let x=g/r*s,m=d/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/r),l.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=r;g++){let x=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,p=(r+1)*(d-1)+g,_=(r+1)*d+g;a.push(x,m,_),a.push(m,p,_)}this.setIndex(a),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ut=class extends ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bc,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Js=class extends Ut{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new it(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new it(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new it(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var eo=class extends ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},to=class extends ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function za(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Pf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var or=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},no=class extends or{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ec,endingEnd:ec}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case tc:s=e,o=2*t-i;break;case nc:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case tc:a=e,c=2*i-t;break;case nc:a=1,c=i+r[1]-r[0];break;default:a=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(r-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,_=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,w=(-1-d)*m+(1.5+d)*x+.5*g,y=d*m-d*x;for(let P=0;P!==o;++P)s[P]=p*a[h+P]+_*a[l+P]+w*a[c+P]+y*a[u+P];return s}},io=class extends or{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(r-t),u=1-h;for(let f=0;f!==o;++f)s[f]=a[l+f]*u+a[c+f]*h;return s}},ro=class extends or{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Dn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=za(t,this.TimeBufferType),this.values=za(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:za(e.times,Array),values:za(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new no(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fs:t=this.InterpolantFactoryMethodDiscrete;break;case Ha:t=this.InterpolantFactoryMethodLinear;break;case Oa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fs;case this.InterpolantFactoryMethodLinear:return Ha;case this.InterpolantFactoryMethodSmooth:return Oa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&Pf(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Oa,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(r)c=!0;else{let u=o*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[d+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*i,f=a*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Dn.prototype.ValueTypeName="";Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=Ha;var Gi=class extends Dn{constructor(e,t,i){super(e,t,i)}};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Fs;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var so=class extends Dn{constructor(e,t,i,r){super(e,t,i,r)}};so.prototype.ValueTypeName="color";var ao=class extends Dn{constructor(e,t,i,r){super(e,t,i,r)}};ao.prototype.ValueTypeName="number";var oo=class extends or{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(r-t),l=e*o;for(let h=l+o;l!==h;l+=4)yi.slerpFlat(s,0,a,l-o,a,l,c);return s}},$s=class extends Dn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new oo(this.times,this.values,this.getValueSize(),e)}};$s.prototype.ValueTypeName="quaternion";$s.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends Dn{constructor(e,t,i){super(e,t,i)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Fs;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var lo=class extends Dn{constructor(e,t,i,r){super(e,t,i,r)}};lo.prototype.ValueTypeName="vector";var Ba={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},co=class{constructor(e,t,i){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Su=new co,ns=class{constructor(e){this.manager=e!==void 0?e:Su,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ns.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vr=new WeakMap,ho=class extends ns{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ba.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Vr.get(a);u===void 0&&(u=[],Vr.set(a,u)),u.push({onLoad:t,onError:r})}return a}let o=qr("img");function c(){h(),t&&t(this);let u=Vr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Vr.delete(this),s.manager.itemEnd(e)}function l(u){h(),r&&r(u),Ba.remove(`image:${e}`);let f=Vr.get(this)||[];for(let d=0;d<f.length;d++){let g=f[d];g.onError&&g.onError(u)}Vr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ba.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var Ks=class extends ns{constructor(e){super(e)}load(e,t,i,r){let s=new mn,a=new ho(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},is=class extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},lr=class extends is{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},jl=new It,Rh=new B,Ih=new B,uo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ts,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Rh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rh),Ih.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ih),t.updateMatrixWorld(),jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ph=new It,Ls=new B,Ql=new B,rc=class extends uo{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new Tt(2,1,1,1),new Tt(0,1,1,1),new Tt(3,1,1,1),new Tt(1,1,1,1),new Tt(3,0,1,1),new Tt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ls.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ls),Ql.copy(i.position),Ql.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ql),i.updateMatrixWorld(),r.makeTranslation(-Ls.x,-Ls.y,-Ls.z),Ph.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ph,i.coordinateSystem,i.reversedDepth)}},cr=class extends is{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new rc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},js=class extends Gs{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},sc=class extends uo{constructor(){super(new js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hr=class extends is{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new sc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var fo=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Cc="\\[\\]\\.:\\/",Df=new RegExp("["+Cc+"]","g"),Rc="[^"+Cc+"]",Lf="[^"+Cc.replace("\\.","")+"]",Uf=/((?:WC+[\/:])*)/.source.replace("WC",Rc),Nf=/(WCOD+)?/.source.replace("WCOD",Lf),Ff=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rc),zf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rc),Of=new RegExp("^"+Uf+Nf+Ff+zf+"$"),Bf=["material","materials","bones","map"],ac=class{constructor(e,t,i){let r=i||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Bt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Df,"")}static parseTrackName(e){let t=Of.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Bf.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[r];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=ac;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var l_=new Float32Array(1);var Dh=new It,ur=class{constructor(e,t,i=0,r=1/0){this.ray=new Jr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new $r,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Dh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dh),this}intersectObject(e,t=!0,i=[]){return oc(e,this,i,t),i.sort(Lh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)oc(e[r],this,i,t);return i.sort(Lh),i}};function Lh(n,e){return n.distance-e.distance}function oc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let a=0,o=s.length;a<o;a++)oc(s[a],e,t,!0)}}function Ic(n,e,t,i){let r=kf(i);switch(t){case yc:return n*e;case Ao:return n*e/r.components*r.byteLength;case Co:return n*e/r.components*r.byteLength;case Mc:return n*e*2/r.components*r.byteLength;case Ro:return n*e*2/r.components*r.byteLength;case vc:return n*e*3/r.components*r.byteLength;case zn:return n*e*4/r.components*r.byteLength;case Io:return n*e*4/r.components*r.byteLength;case ta:case na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ia:case ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Do:case Uo:return Math.max(n,16)*Math.max(e,8)/4;case Po:case Lo:return Math.max(n,8)*Math.max(e,8)/2;case No:case Fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ko:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Go:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case qo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Zo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Jo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case $o:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ko:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case jo:case Qo:case el:return Math.ceil(n/4)*Math.ceil(e/4)*16;case tl:case nl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case il:case rl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kf(n){switch(n){case Yn:case mc:return{byteLength:1,components:1};case as:case gc:case os:return{byteLength:2,components:1};case To:case Eo:return{byteLength:2,components:4};case Xi:case wo:case Zn:return{byteLength:4,components:1};case xc:case _c:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yu(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Xf(n){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var qf=`#ifdef USE_ALPHAHASH
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
}`,pt={alphahash_fragment:qf,alphahash_pars_fragment:Yf,alphamap_fragment:Zf,alphamap_pars_fragment:Jf,alphatest_fragment:$f,alphatest_pars_fragment:Kf,aomap_fragment:jf,aomap_pars_fragment:Qf,batching_pars_vertex:ep,batching_vertex:tp,begin_vertex:np,beginnormal_vertex:ip,bsdfs:rp,iridescence_fragment:sp,bumpmap_pars_fragment:ap,clipping_planes_fragment:op,clipping_planes_pars_fragment:lp,clipping_planes_pars_vertex:cp,clipping_planes_vertex:hp,color_fragment:up,color_pars_fragment:dp,color_pars_vertex:fp,color_vertex:pp,common:mp,cube_uv_reflection_fragment:gp,defaultnormal_vertex:xp,displacementmap_pars_vertex:_p,displacementmap_vertex:yp,emissivemap_fragment:vp,emissivemap_pars_fragment:Mp,colorspace_fragment:bp,colorspace_pars_fragment:Sp,envmap_fragment:wp,envmap_common_pars_fragment:Tp,envmap_pars_fragment:Ep,envmap_pars_vertex:Ap,envmap_physical_pars_fragment:Op,envmap_vertex:Cp,fog_vertex:Rp,fog_pars_vertex:Ip,fog_fragment:Pp,fog_pars_fragment:Dp,gradientmap_pars_fragment:Lp,lightmap_pars_fragment:Up,lights_lambert_fragment:Np,lights_lambert_pars_fragment:Fp,lights_pars_begin:zp,lights_toon_fragment:Bp,lights_toon_pars_fragment:kp,lights_phong_fragment:Vp,lights_phong_pars_fragment:Gp,lights_physical_fragment:Hp,lights_physical_pars_fragment:Wp,lights_fragment_begin:Xp,lights_fragment_maps:qp,lights_fragment_end:Yp,logdepthbuf_fragment:Zp,logdepthbuf_pars_fragment:Jp,logdepthbuf_pars_vertex:$p,logdepthbuf_vertex:Kp,map_fragment:jp,map_pars_fragment:Qp,map_particle_fragment:em,map_particle_pars_fragment:tm,metalnessmap_fragment:nm,metalnessmap_pars_fragment:im,morphinstance_vertex:rm,morphcolor_vertex:sm,morphnormal_vertex:am,morphtarget_pars_vertex:om,morphtarget_vertex:lm,normal_fragment_begin:cm,normal_fragment_maps:hm,normal_pars_fragment:um,normal_pars_vertex:dm,normal_vertex:fm,normalmap_pars_fragment:pm,clearcoat_normal_fragment_begin:mm,clearcoat_normal_fragment_maps:gm,clearcoat_pars_fragment:xm,iridescence_pars_fragment:_m,opaque_fragment:ym,packing:vm,premultiplied_alpha_fragment:Mm,project_vertex:bm,dithering_fragment:Sm,dithering_pars_fragment:wm,roughnessmap_fragment:Tm,roughnessmap_pars_fragment:Em,shadowmap_pars_fragment:Am,shadowmap_pars_vertex:Cm,shadowmap_vertex:Rm,shadowmask_pars_fragment:Im,skinbase_vertex:Pm,skinning_pars_vertex:Dm,skinning_vertex:Lm,skinnormal_vertex:Um,specularmap_fragment:Nm,specularmap_pars_fragment:Fm,tonemapping_fragment:zm,tonemapping_pars_fragment:Om,transmission_fragment:Bm,transmission_pars_fragment:km,uv_pars_fragment:Vm,uv_pars_vertex:Gm,uv_vertex:Hm,worldpos_vertex:Wm,background_vert:Xm,background_frag:qm,backgroundCube_vert:Ym,backgroundCube_frag:Zm,cube_vert:Jm,cube_frag:$m,depth_vert:Km,depth_frag:jm,distanceRGBA_vert:Qm,distanceRGBA_frag:eg,equirect_vert:tg,equirect_frag:ng,linedashed_vert:ig,linedashed_frag:rg,meshbasic_vert:sg,meshbasic_frag:ag,meshlambert_vert:og,meshlambert_frag:lg,meshmatcap_vert:cg,meshmatcap_frag:hg,meshnormal_vert:ug,meshnormal_frag:dg,meshphong_vert:fg,meshphong_frag:pg,meshphysical_vert:mg,meshphysical_frag:gg,meshtoon_vert:xg,meshtoon_frag:_g,points_vert:yg,points_frag:vg,shadow_vert:Mg,shadow_frag:bg,sprite_vert:Sg,sprite_frag:wg},ve={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},ii={basic:{uniforms:gn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:gn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new it(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:gn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:gn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:gn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new it(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:gn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:gn([ve.points,ve.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:gn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:gn([ve.common,ve.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:gn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:gn([ve.sprite,ve.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:gn([ve.common,ve.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:gn([ve.lights,ve.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};ii.physical={uniforms:gn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var al={r:0,b:0,g:0},mr=new Xn,Tg=new It;function Eg(n,e,t,i,r,s,a){let o=new it(0),c=s===!0?0:1,l,h,u=null,f=0,d=null;function g(w){let y=w.isScene===!0?w.background:null;return y&&y.isTexture&&(y=(w.backgroundBlurriness>0?t:e).get(y)),y}function x(w){let y=!1,P=g(w);P===null?p(o,c):P&&P.isColor&&(p(P,1),y=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,y){let P=g(y);P&&(P.isCubeTexture||P.mapping===Qs)?(h===void 0&&(h=new ft(new on(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:pr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,F,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),mr.copy(y.backgroundRotation),mr.x*=-1,mr.y*=-1,mr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(mr)),h.material.toneMapped=wt.getTransfer(P.colorSpace)!==Lt,(u!==P||f!==P.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=P,f=P.version,d=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new ft(new Pn(2,2),new wn({name:"BackgroundMaterial",uniforms:pr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=wt.getTransfer(P.colorSpace)!==Lt,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(u!==P||f!==P.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=P,f=P.version,d=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,y){w.getRGB(al,Ac(n)),i.buffers.color.setClear(al.r,al.g,al.b,y,a)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,y=1){o.set(w),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(o,c)},render:x,addToRenderList:m,dispose:_}}function Ag(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,a=!1;function o(M,A,O,D,I){let N=!1,G=u(D,O,A);s!==G&&(s=G,l(s.object)),N=d(M,D,O,I),N&&g(M,D,O,I),I!==null&&e.update(I,n.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,y(M,A,O,D),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,A,O){let D=O.wireframe===!0,I=i[M.id];I===void 0&&(I={},i[M.id]=I);let N=I[A.id];N===void 0&&(N={},I[A.id]=N);let G=N[D];return G===void 0&&(G=f(c()),N[D]=G),G}function f(M){let A=[],O=[],D=[];for(let I=0;I<t;I++)A[I]=0,O[I]=0,D[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:O,attributeDivisors:D,object:M,attributes:{},index:null}}function d(M,A,O,D){let I=s.attributes,N=A.attributes,G=0,H=O.getAttributes();for(let k in H)if(H[k].location>=0){let se=I[k],ue=N[k];if(ue===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),se===void 0||se.attribute!==ue||ue&&se.data!==ue.data)return!0;G++}return s.attributesNum!==G||s.index!==D}function g(M,A,O,D){let I={},N=A.attributes,G=0,H=O.getAttributes();for(let k in H)if(H[k].location>=0){let se=N[k];se===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(se=M.instanceColor));let ue={};ue.attribute=se,se&&se.data&&(ue.data=se.data),I[k]=ue,G++}s.attributes=I,s.attributesNum=G,s.index=D}function x(){let M=s.newAttributes;for(let A=0,O=M.length;A<O;A++)M[A]=0}function m(M){p(M,0)}function p(M,A){let O=s.newAttributes,D=s.enabledAttributes,I=s.attributeDivisors;O[M]=1,D[M]===0&&(n.enableVertexAttribArray(M),D[M]=1),I[M]!==A&&(n.vertexAttribDivisor(M,A),I[M]=A)}function _(){let M=s.newAttributes,A=s.enabledAttributes;for(let O=0,D=A.length;O<D;O++)A[O]!==M[O]&&(n.disableVertexAttribArray(O),A[O]=0)}function w(M,A,O,D,I,N,G){G===!0?n.vertexAttribIPointer(M,A,O,I,N):n.vertexAttribPointer(M,A,O,D,I,N)}function y(M,A,O,D){x();let I=D.attributes,N=O.getAttributes(),G=A.defaultAttributeValues;for(let H in N){let k=N[H];if(k.location>=0){let ie=I[H];if(ie===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor)),ie!==void 0){let se=ie.normalized,ue=ie.itemSize,Ie=e.get(ie);if(Ie===void 0)continue;let Ge=Ie.buffer,ut=Ie.type,Je=Ie.bytesPerElement,$=ut===n.INT||ut===n.UNSIGNED_INT||ie.gpuType===wo;if(ie.isInterleavedBufferAttribute){let K=ie.data,pe=K.stride,Ee=ie.offset;if(K.isInstancedInterleavedBuffer){for(let Ae=0;Ae<k.locationSize;Ae++)p(k.location+Ae,K.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Ae=0;Ae<k.locationSize;Ae++)m(k.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let Ae=0;Ae<k.locationSize;Ae++)w(k.location+Ae,ue/k.locationSize,ut,se,pe*Je,(Ee+ue/k.locationSize*Ae)*Je,$)}else{if(ie.isInstancedBufferAttribute){for(let K=0;K<k.locationSize;K++)p(k.location+K,ie.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let K=0;K<k.locationSize;K++)m(k.location+K);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let K=0;K<k.locationSize;K++)w(k.location+K,ue/k.locationSize,ut,se,ue*Je,ue/k.locationSize*K*Je,$)}}else if(G!==void 0){let se=G[H];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(k.location,se);break;case 3:n.vertexAttrib3fv(k.location,se);break;case 4:n.vertexAttrib4fv(k.location,se);break;default:n.vertexAttrib1fv(k.location,se)}}}}_()}function P(){z();for(let M in i){let A=i[M];for(let O in A){let D=A[O];for(let I in D)h(D[I].object),delete D[I];delete A[O]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;let A=i[M.id];for(let O in A){let D=A[O];for(let I in D)h(D[I].object),delete D[I];delete A[O]}delete i[M.id]}function F(M){for(let A in i){let O=i[A];if(O[M.id]===void 0)continue;let D=O[M.id];for(let I in D)h(D[I].object),delete D[I];delete O[M.id]}}function z(){T(),a=!0,s!==r&&(s=r,l(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:z,resetDefaultState:T,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:F,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function Cg(n,e,t){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function a(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,i,1)}function c(l,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Rg(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let F=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(F){return!(F!==zn&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(F){let z=F===os&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Yn&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Zn&&!z)}function c(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:P,maxSamples:C}}function Ig(n){let e=this,t=null,i=0,r=!1,s=!1,a=new jn,o=new ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||r;return r=f,i=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{let _=s?0:i,w=_*4,y=p.clippingState||null;c.value=y,y=h(g,f,w,d);for(let P=0;P!==w;++P)y[P]=t[P];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=d+x*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,y=d;w!==x;++w,y+=4)a.copy(u[w]).applyMatrix4(_,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Pg(n){let e=new WeakMap;function t(a,o){return o===Mo?a.mapping=dr:o===bo&&(a.mapping=fr),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Mo||o===bo)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Ja(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var us=4,wu=[.125,.215,.35,.446,.526,.582],_r=20,Pc=new js,Tu=new it,Dc=null,Lc=0,Uc=0,Nc=!1,xr=(1+Math.sqrt(5))/2,hs=1/xr,Eu=[new B(-xr,hs,0),new B(xr,hs,0),new B(-hs,0,xr),new B(hs,0,xr),new B(0,xr,-hs),new B(0,xr,hs),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],Dg=new B,cl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:o=Dg}=s;Dc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dc,Lc,Uc),this._renderer.xr.enabled=Nc,e.scissorTest=!1,ol(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:os,format:zn,colorSpace:tr,depthBuffer:!1},r=Au(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Au(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lg(s)),this._blurMaterial=Ug(s,e,t)}return r}_compileMaterial(e){let t=new ft(this._lodPlanes[0],e);this._renderer.compile(t,Pc)}_sceneToCubeUV(e,t,i,r,s){let c=new Kt(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Tu),u.toneMapping=Si,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));let x=new Sn({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),m=new ft(new on,x),p=!1,_=e.background;_?_.isColor&&(x.color.copy(_),e.background=null,p=!0):(x.color.copy(Tu),p=!0);for(let w=0;w<6;w++){let y=w%3;y===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[w],s.y,s.z)):y===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[w]));let P=this._cubeSize;ol(r,y*P,w>2?P:0,P,P),u.setRenderTarget(r),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===dr||e.mapping===fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cu());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new ft(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;ol(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Pc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Eu[(r-s-1)%Eu.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ft(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*_r-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):_r;m>_r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_r}`);let p=[],_=0;for(let F=0;F<_r;++F){let z=F/x,T=Math.exp(-z*z/2);p.push(T),F===0?_+=T:F<m&&(_+=2*T)}for(let F=0;F<p.length;F++)p[F]=p[F]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-i;let y=this._sizeLods[r],P=3*y*(r>w-us?r-w+us:0),C=4*(this._cubeSize-y);ol(t,P,C,3*y,2*y),c.setRenderTarget(t),c.render(u,Pc)}};function Lg(n){let e=[],t=[],i=[],r=n,s=n-us+1+wu.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);t.push(o);let c=1/o;a>n-us?c=wu[a-n+us-1]:a===0&&(c=0),i.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*d),w=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let C=0;C<d;C++){let F=C%3*2/3-1,z=C>2?0:-1,T=[F,z,0,F+2/3,z,0,F+2/3,z+1,0,F,z,0,F+2/3,z+1,0,F,z+1,0];_.set(T,x*g*C),w.set(f,m*g*C);let M=[C,C,C,C,C,C];y.set(M,p*g*C)}let P=new Pt;P.setAttribute("position",new jt(_,x)),P.setAttribute("uv",new jt(w,m)),P.setAttribute("faceIndex",new jt(y,p)),e.push(P),r>us&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Au(n,e,t){let i=new Qn(n,e,t);return i.texture.mapping=Qs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ol(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Ug(n,e,t){let i=new Float32Array(_r),r=new B(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Cu(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Ru(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Xc(){return`

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
	`}function Ng(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===Mo||c===bo,h=c===dr||c===fr;if(l||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new cl(n)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return l&&d&&d.height>0||h&&d&&r(d)?(t===null&&(t=new cl(n)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Fg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Yr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function zg(n,e,t,i){let r={},s=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];let d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let d in f)e.update(f[d],n.ARRAY_BUFFER)}function l(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let _=d.array;x=d.version;for(let w=0,y=_.length;w<y;w+=3){let P=_[w+0],C=_[w+1],F=_[w+2];f.push(P,C,C,F,F,P)}}else if(g!==void 0){let _=g.array;x=g.version;for(let w=0,y=_.length/3-1;w<y;w+=3){let P=w+0,C=w+1,F=w+2;f.push(P,C,C,F,F,P)}}else return;let m=new(Ec(f)?Vs:ks)(f,1);m.version=x;let p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Og(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,d){n.drawElements(i,d,s,f*a),t.update(d,i,1)}function l(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,f*a,g),t.update(d,i,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function u(f,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,x,0,g);let p=0;for(let _=0;_<g;_++)p+=d[_]*x[_];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Bg(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function kg(n,e,t){let i=new WeakMap,r=new Tt;function s(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==u){let T=function(){F.dispose(),i.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],w=0;d===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let y=o.attributes.position.count*w,P=1;y>e.maxTextureSize&&(P=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let C=new Float32Array(y*P*4*u),F=new Bs(C,y,P,u);F.type=Zn,F.needsUpdate=!0;let z=w*4;for(let M=0;M<u;M++){let A=m[M],O=p[M],D=_[M],I=y*P*4*M;for(let N=0;N<A.count;N++){let G=N*z;d===!0&&(r.fromBufferAttribute(A,N),C[I+G+0]=r.x,C[I+G+1]=r.y,C[I+G+2]=r.z,C[I+G+3]=0),g===!0&&(r.fromBufferAttribute(O,N),C[I+G+4]=r.x,C[I+G+5]=r.y,C[I+G+6]=r.z,C[I+G+7]=0),x===!0&&(r.fromBufferAttribute(D,N),C[I+G+8]=r.x,C[I+G+9]=r.y,C[I+G+10]=r.z,C[I+G+11]=D.itemSize===4?r.w:1)}}f={count:u,texture:F,size:new We(y,P)},i.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Vg(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return u}function a(){r=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}var Zu=new mn,Iu=new qs(1,1),Ju=new Bs,$u=new Ya,Ku=new Hs,Pu=[],Du=[],Lu=new Float32Array(16),Uu=new Float32Array(9),Nu=new Float32Array(4);function ps(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Pu[r];if(s===void 0&&(s=new Float32Array(r),Pu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function en(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hl(n,e){let t=Du[e];t===void 0&&(t=new Int32Array(e),Du[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Gg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Hg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2fv(this.addr,e),en(t,e)}}function Wg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;n.uniform3fv(this.addr,e),en(t,e)}}function Xg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4fv(this.addr,e),en(t,e)}}function qg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;Nu.set(i),n.uniformMatrix2fv(this.addr,!1,Nu),en(t,i)}}function Yg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;Uu.set(i),n.uniformMatrix3fv(this.addr,!1,Uu),en(t,i)}}function Zg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;Lu.set(i),n.uniformMatrix4fv(this.addr,!1,Lu),en(t,i)}}function Jg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $g(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2iv(this.addr,e),en(t,e)}}function Kg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3iv(this.addr,e),en(t,e)}}function jg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4iv(this.addr,e),en(t,e)}}function Qg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function e0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2uiv(this.addr,e),en(t,e)}}function t0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3uiv(this.addr,e),en(t,e)}}function n0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4uiv(this.addr,e),en(t,e)}}function i0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Iu.compareFunction=Sc,s=Iu):s=Zu,t.setTexture2D(e||s,r)}function r0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||$u,r)}function s0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ku,r)}function a0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ju,r)}function o0(n){switch(n){case 5126:return Gg;case 35664:return Hg;case 35665:return Wg;case 35666:return Xg;case 35674:return qg;case 35675:return Yg;case 35676:return Zg;case 5124:case 35670:return Jg;case 35667:case 35671:return $g;case 35668:case 35672:return Kg;case 35669:case 35673:return jg;case 5125:return Qg;case 36294:return e0;case 36295:return t0;case 36296:return n0;case 35678:case 36198:case 36298:case 36306:case 35682:return i0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return a0}}function l0(n,e){n.uniform1fv(this.addr,e)}function c0(n,e){let t=ps(e,this.size,2);n.uniform2fv(this.addr,t)}function h0(n,e){let t=ps(e,this.size,3);n.uniform3fv(this.addr,t)}function u0(n,e){let t=ps(e,this.size,4);n.uniform4fv(this.addr,t)}function d0(n,e){let t=ps(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function f0(n,e){let t=ps(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function p0(n,e){let t=ps(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function m0(n,e){n.uniform1iv(this.addr,e)}function g0(n,e){n.uniform2iv(this.addr,e)}function x0(n,e){n.uniform3iv(this.addr,e)}function _0(n,e){n.uniform4iv(this.addr,e)}function y0(n,e){n.uniform1uiv(this.addr,e)}function v0(n,e){n.uniform2uiv(this.addr,e)}function M0(n,e){n.uniform3uiv(this.addr,e)}function b0(n,e){n.uniform4uiv(this.addr,e)}function S0(n,e,t){let i=this.cache,r=e.length,s=hl(t,r);Qt(i,s)||(n.uniform1iv(this.addr,s),en(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Zu,s[a])}function w0(n,e,t){let i=this.cache,r=e.length,s=hl(t,r);Qt(i,s)||(n.uniform1iv(this.addr,s),en(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||$u,s[a])}function T0(n,e,t){let i=this.cache,r=e.length,s=hl(t,r);Qt(i,s)||(n.uniform1iv(this.addr,s),en(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Ku,s[a])}function E0(n,e,t){let i=this.cache,r=e.length,s=hl(t,r);Qt(i,s)||(n.uniform1iv(this.addr,s),en(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ju,s[a])}function A0(n){switch(n){case 5126:return l0;case 35664:return c0;case 35665:return h0;case 35666:return u0;case 35674:return d0;case 35675:return f0;case 35676:return p0;case 5124:case 35670:return m0;case 35667:case 35671:return g0;case 35668:case 35672:return x0;case 35669:case 35673:return _0;case 5125:return y0;case 36294:return v0;case 36295:return M0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return T0;case 36289:case 36303:case 36311:case 36292:return E0}}var zc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=o0(t.type)}},Oc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A0(t.type)}},Bc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},Fc=/(\w+)(\])?(\[|\.)?/g;function Fu(n,e){n.seq.push(e),n.map[e.id]=e}function C0(n,e,t){let i=n.name,r=i.length;for(Fc.lastIndex=0;;){let s=Fc.exec(i),a=Fc.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Fu(t,l===void 0?new zc(o,n,e):new Oc(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Bc(o),Fu(t,u)),t=u}}}var ds=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);C0(s,a,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function zu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var R0=37297,I0=0;function P0(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Ou=new ht;function D0(n){wt._getMatrix(Ou,wt.workingColorSpace,n);let e=`mat3( ${Ou.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(n)){case zs:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Bu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+P0(n.getShaderSource(e),o)}else return s}function L0(n,e){let t=D0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function U0(n,e){let t;switch(e){case nu:t="Linear";break;case iu:t="Reinhard";break;case ru:t="Cineon";break;case ss:t="ACESFilmic";break;case au:t="AgX";break;case ou:t="Neutral";break;case su:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ll=new B;function N0(){wt.getLuminanceCoefficients(ll);let n=ll.x.toFixed(4),e=ll.y.toFixed(4),t=ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function z0(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function O0(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),a=s.name,o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function aa(n){return n!==""}function ku(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var B0=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(n){return n.replace(B0,V0)}var k0=new Map;function V0(n,e){let t=pt[e];if(t===void 0){let i=k0.get(e);if(i!==void 0)t=pt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kc(t)}var G0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gu(n){return n.replace(G0,H0)}function H0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function W0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===cc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===rs?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function X0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case dr:case fr:e="ENVMAP_TYPE_CUBE";break;case Qs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case fr:e="ENVMAP_MODE_REFRACTION";break}return e}function Y0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fc:e="ENVMAP_BLENDING_MULTIPLY";break;case eu:e="ENVMAP_BLENDING_MIX";break;case tu:e="ENVMAP_BLENDING_ADD";break}return e}function Z0(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function J0(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=W0(t),l=X0(t),h=q0(t),u=Y0(t),f=Z0(t),d=F0(t),g=z0(s),x=r.createProgram(),m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(aa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(aa).join(`
`),p.length>0&&(p+=`
`)):(m=[Hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),p=[Hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?pt.tonemapping_pars_fragment:"",t.toneMapping!==Si?U0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,L0("linearToOutputTexel",t.outputColorSpace),N0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(aa).join(`
`)),a=kc(a),a=ku(a,t),a=Vu(a,t),o=kc(o),o=ku(o,t),o=Vu(o,t),a=Gu(a),o=Gu(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=_+m+a,y=_+p+o,P=zu(r,r.VERTEX_SHADER,w),C=zu(r,r.FRAGMENT_SHADER,y);r.attachShader(x,P),r.attachShader(x,C),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function F(A){if(n.debug.checkShaderErrors){let O=r.getProgramInfoLog(x)||"",D=r.getShaderInfoLog(P)||"",I=r.getShaderInfoLog(C)||"",N=O.trim(),G=D.trim(),H=I.trim(),k=!0,ie=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,P,C);else{let se=Bu(r,P,"vertex"),ue=Bu(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+N+`
`+se+`
`+ue)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(G===""||H==="")&&(ie=!1);ie&&(A.diagnostics={runnable:k,programLog:N,vertexShader:{log:G,prefix:m},fragmentShader:{log:H,prefix:p}})}r.deleteShader(P),r.deleteShader(C),z=new ds(r,x),T=O0(r,x)}let z;this.getUniforms=function(){return z===void 0&&F(this),z};let T;this.getAttributes=function(){return T===void 0&&F(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,R0)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=I0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=C,this}var $0=0,Vc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Gc(e),t.set(e,i)),i}},Gc=class{constructor(e){this.id=$0++,this.code=e,this.usedTimes=0}};function K0(n,e,t,i,r,s,a){let o=new $r,c=new Vc,l=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures,d=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,M,A,O,D){let I=O.fog,N=D.geometry,G=T.isMeshStandardMaterial?O.environment:null,H=(T.isMeshStandardMaterial?t:e).get(T.envMap||G),k=H&&H.mapping===Qs?H.image.height:null,ie=g[T.type];T.precision!==null&&(d=r.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));let se=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ue=se!==void 0?se.length:0,Ie=0;N.morphAttributes.position!==void 0&&(Ie=1),N.morphAttributes.normal!==void 0&&(Ie=2),N.morphAttributes.color!==void 0&&(Ie=3);let Ge,ut,Je,$;if(ie){let dt=ii[ie];Ge=dt.vertexShader,ut=dt.fragmentShader}else Ge=T.vertexShader,ut=T.fragmentShader,c.update(T),Je=c.getVertexShaderID(T),$=c.getFragmentShaderID(T);let K=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),Ee=D.isInstancedMesh===!0,Ae=D.isBatchedMesh===!0,tt=!!T.map,Le=!!T.matcap,U=!!H,yt=!!T.aoMap,nt=!!T.lightMap,Ye=!!T.bumpMap,be=!!T.normalMap,xt=!!T.displacementMap,Ue=!!T.emissiveMap,$e=!!T.metalnessMap,St=!!T.roughnessMap,zt=T.anisotropy>0,R=T.clearcoat>0,v=T.dispersion>0,J=T.iridescence>0,ne=T.sheen>0,ae=T.transmission>0,ee=zt&&!!T.anisotropyMap,Be=R&&!!T.clearcoatMap,de=R&&!!T.clearcoatNormalMap,Me=R&&!!T.clearcoatRoughnessMap,Fe=J&&!!T.iridescenceMap,le=J&&!!T.iridescenceThicknessMap,me=ne&&!!T.sheenColorMap,De=ne&&!!T.sheenRoughnessMap,ze=!!T.specularMap,xe=!!T.specularColorMap,Qe=!!T.specularIntensityMap,V=ae&&!!T.transmissionMap,ce=ae&&!!T.thicknessMap,fe=!!T.gradientMap,Pe=!!T.alphaMap,re=T.alphaTest>0,te=!!T.alphaHash,Ne=!!T.extensions,Ze=Si;T.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ze=n.toneMapping);let vt={shaderID:ie,shaderType:T.type,shaderName:T.name,vertexShader:Ge,fragmentShader:ut,defines:T.defines,customVertexShaderID:Je,customFragmentShaderID:$,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:Ae,batchingColor:Ae&&D._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&D.instanceColor!==null,instancingMorph:Ee&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:tr,alphaToCoverage:!!T.alphaToCoverage,map:tt,matcap:Le,envMap:U,envMapMode:U&&H.mapping,envMapCubeUVHeight:k,aoMap:yt,lightMap:nt,bumpMap:Ye,normalMap:be,displacementMap:f&&xt,emissiveMap:Ue,normalMapObjectSpace:be&&T.normalMapType===uu,normalMapTangentSpace:be&&T.normalMapType===bc,metalnessMap:$e,roughnessMap:St,anisotropy:zt,anisotropyMap:ee,clearcoat:R,clearcoatMap:Be,clearcoatNormalMap:de,clearcoatRoughnessMap:Me,dispersion:v,iridescence:J,iridescenceMap:Fe,iridescenceThicknessMap:le,sheen:ne,sheenColorMap:me,sheenRoughnessMap:De,specularMap:ze,specularColorMap:xe,specularIntensityMap:Qe,transmission:ae,transmissionMap:V,thicknessMap:ce,gradientMap:fe,opaque:T.transparent===!1&&T.blending===Qi&&T.alphaToCoverage===!1,alphaMap:Pe,alphaTest:re,alphaHash:te,combine:T.combine,mapUv:tt&&x(T.map.channel),aoMapUv:yt&&x(T.aoMap.channel),lightMapUv:nt&&x(T.lightMap.channel),bumpMapUv:Ye&&x(T.bumpMap.channel),normalMapUv:be&&x(T.normalMap.channel),displacementMapUv:xt&&x(T.displacementMap.channel),emissiveMapUv:Ue&&x(T.emissiveMap.channel),metalnessMapUv:$e&&x(T.metalnessMap.channel),roughnessMapUv:St&&x(T.roughnessMap.channel),anisotropyMapUv:ee&&x(T.anisotropyMap.channel),clearcoatMapUv:Be&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:de&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:le&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:me&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(T.sheenRoughnessMap.channel),specularMapUv:ze&&x(T.specularMap.channel),specularColorMapUv:xe&&x(T.specularColorMap.channel),specularIntensityMapUv:Qe&&x(T.specularIntensityMap.channel),transmissionMapUv:V&&x(T.transmissionMap.channel),thicknessMapUv:ce&&x(T.thicknessMap.channel),alphaMapUv:Pe&&x(T.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(be||zt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!N.attributes.uv&&(tt||Pe),fog:!!I,useFog:T.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pe,skinning:D.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ie,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,decodeVideoTexture:tt&&T.map.isVideoTexture===!0&&wt.getTransfer(T.map.colorSpace)===Lt,decodeVideoTextureEmissive:Ue&&T.emissiveMap.isVideoTexture===!0&&wt.getTransfer(T.emissiveMap.colorSpace)===Lt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ht,flipSided:T.side===ln,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ne&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&T.extensions.multiDraw===!0||Ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return vt.vertexUv1s=l.has(1),vt.vertexUv2s=l.has(2),vt.vertexUv3s=l.has(3),l.clear(),vt}function p(T){let M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(let A in T.defines)M.push(A),M.push(T.defines[A]);return T.isRawShaderMaterial===!1&&(_(M,T),w(M,T),M.push(n.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function _(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function w(T,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),T.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),T.push(o.mask)}function y(T){let M=g[T.type],A;if(M){let O=ii[M];A=sl.clone(O.uniforms)}else A=T.uniforms;return A}function P(T,M){let A;for(let O=0,D=h.length;O<D;O++){let I=h[O];if(I.cacheKey===M){A=I,++A.usedTimes;break}}return A===void 0&&(A=new J0(n,M,T,s),h.push(A)),A}function C(T){if(--T.usedTimes===0){let M=h.indexOf(T);h[M]=h[h.length-1],h.pop(),T.destroy()}}function F(T){c.remove(T)}function z(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:P,releaseProgram:C,releaseShaderCache:F,programs:h,dispose:z}}function j0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Q0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Wu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Xu(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u,f,d,g,x,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function o(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function c(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||Q0),i.length>1&&i.sort(f||Wu),r.length>1&&r.sort(f||Wu)}function h(){for(let u=e,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function ex(){let n=new WeakMap;function e(i,r){let s=n.get(i),a;return s===void 0?(a=new Xu,n.set(i,[a])):r>=s.length?(a=new Xu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function tx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new it};break;case"SpotLight":t={position:new B,direction:new B,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function nx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var ix=0;function rx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function sx(n){let e=new tx,t=nx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new B);let r=new B,s=new It,a=new It;function o(l){let h=0,u=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,_=0,w=0,y=0,P=0,C=0,F=0;l.sort(rx);for(let T=0,M=l.length;T<M;T++){let A=l[T],O=A.color,D=A.intensity,I=A.distance,N=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=O.r*D,u+=O.g*D,f+=O.b*D;else if(A.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(A.sh.coefficients[G],D);F++}else if(A.isDirectionalLight){let G=e.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let H=A.shadow,k=t.get(A);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,i.directionalShadow[d]=k,i.directionalShadowMap[d]=N,i.directionalShadowMatrix[d]=A.shadow.matrix,_++}i.directional[d]=G,d++}else if(A.isSpotLight){let G=e.get(A);G.position.setFromMatrixPosition(A.matrixWorld),G.color.copy(O).multiplyScalar(D),G.distance=I,G.coneCos=Math.cos(A.angle),G.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),G.decay=A.decay,i.spot[x]=G;let H=A.shadow;if(A.map&&(i.spotLightMap[P]=A.map,P++,H.updateMatrices(A),A.castShadow&&C++),i.spotLightMatrix[x]=H.matrix,A.castShadow){let k=t.get(A);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,i.spotShadow[x]=k,i.spotShadowMap[x]=N,y++}x++}else if(A.isRectAreaLight){let G=e.get(A);G.color.copy(O).multiplyScalar(D),G.halfWidth.set(A.width*.5,0,0),G.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=G,m++}else if(A.isPointLight){let G=e.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),G.distance=A.distance,G.decay=A.decay,A.castShadow){let H=A.shadow,k=t.get(A);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,k.shadowCameraNear=H.camera.near,k.shadowCameraFar=H.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=A.shadow.matrix,w++}i.point[g]=G,g++}else if(A.isHemisphereLight){let G=e.get(A);G.skyColor.copy(A.color).multiplyScalar(D),G.groundColor.copy(A.groundColor).multiplyScalar(D),i.hemi[p]=G,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let z=i.hash;(z.directionalLength!==d||z.pointLength!==g||z.spotLength!==x||z.rectAreaLength!==m||z.hemiLength!==p||z.numDirectionalShadows!==_||z.numPointShadows!==w||z.numSpotShadows!==y||z.numSpotMaps!==P||z.numLightProbes!==F)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=y+P-C,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=F,z.directionalLength=d,z.pointLength=g,z.spotLength=x,z.rectAreaLength=m,z.hemiLength=p,z.numDirectionalShadows=_,z.numPointShadows=w,z.numSpotShadows=y,z.numSpotMaps=P,z.numLightProbes=F,i.version=ix++)}function c(l,h){let u=0,f=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){let w=l[p];if(w.isDirectionalLight){let y=i.directional[u];y.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),u++}else if(w.isSpotLight){let y=i.spot[d];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(w.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(w.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){let y=i.point[f];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:i}}function qu(n){let e=new sx(n),t=[],i=[];function r(h){l.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function ax(n){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new qu(n),e.set(r,[o])):s>=a.length?(o=new qu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var ox=`void main() {
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
}`;function cx(n,e,t){let i=new ts,r=new We,s=new We,a=new Tt,o=new eo({depthPacking:hu}),c=new to,l={},h=t.maxTextureSize,u={[xi]:ln,[ln]:xi,[Ht]:Ht},f=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:ox,fragmentShader:lx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Pt;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ft(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cc;let p=this.type;this.render=function(C,F,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let T=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),O=n.state;O.setBlending(bi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let D=p!==ni&&this.type===ni,I=p===ni&&this.type!==ni;for(let N=0,G=C.length;N<G;N++){let H=C[N],k=H.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);let ie=k.getFrameExtents();if(r.multiply(ie),s.copy(k.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ie.x),r.x=s.x*ie.x,k.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ie.y),r.y=s.y*ie.y,k.mapSize.y=s.y)),k.map===null||D===!0||I===!0){let ue=this.type!==ni?{minFilter:bn,magFilter:bn}:{};k.map!==null&&k.map.dispose(),k.map=new Qn(r.x,r.y,ue),k.map.texture.name=H.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();let se=k.getViewportCount();for(let ue=0;ue<se;ue++){let Ie=k.getViewport(ue);a.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),O.viewport(a),k.updateMatrices(H,ue),i=k.getFrustum(),y(F,z,k.camera,H,this.type)}k.isPointLightShadow!==!0&&this.type===ni&&_(k,z),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,M,A)};function _(C,F){let z=e.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Qn(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(F,null,z,f,x,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(F,null,z,d,x,null)}function w(C,F,z,T){let M=null,A=z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(A!==void 0)M=A;else if(M=z.isPointLight===!0?c:o,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){let O=M.uuid,D=F.uuid,I=l[O];I===void 0&&(I={},l[O]=I);let N=I[D];N===void 0&&(N=M.clone(),I[D]=N,F.addEventListener("dispose",P)),M=N}if(M.visible=F.visible,M.wireframe=F.wireframe,T===ni?M.side=F.shadowSide!==null?F.shadowSide:F.side:M.side=F.shadowSide!==null?F.shadowSide:u[F.side],M.alphaMap=F.alphaMap,M.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,M.map=F.map,M.clipShadows=F.clipShadows,M.clippingPlanes=F.clippingPlanes,M.clipIntersection=F.clipIntersection,M.displacementMap=F.displacementMap,M.displacementScale=F.displacementScale,M.displacementBias=F.displacementBias,M.wireframeLinewidth=F.wireframeLinewidth,M.linewidth=F.linewidth,z.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let O=n.properties.get(M);O.light=z}return M}function y(C,F,z,T,M){if(C.visible===!1)return;if(C.layers.test(F.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===ni)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld);let D=e.update(C),I=C.material;if(Array.isArray(I)){let N=D.groups;for(let G=0,H=N.length;G<H;G++){let k=N[G],ie=I[k.materialIndex];if(ie&&ie.visible){let se=w(C,ie,T,M);C.onBeforeShadow(n,C,F,z,D,se,k),n.renderBufferDirect(z,null,D,se,C,k),C.onAfterShadow(n,C,F,z,D,se,k)}}}else if(I.visible){let N=w(C,I,T,M);C.onBeforeShadow(n,C,F,z,D,N,null),n.renderBufferDirect(z,null,D,N,C,null),C.onAfterShadow(n,C,F,z,D,N,null)}}let O=C.children;for(let D=0,I=O.length;D<I;D++)y(O[D],F,z,T,M)}function P(C){C.target.removeEventListener("dispose",P);for(let z in l){let T=l[z],M=C.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}var hx={[po]:mo,[go]:yo,[xo]:vo,[er]:_o,[mo]:po,[yo]:go,[vo]:xo,[_o]:er};function ux(n,e){function t(){let V=!1,ce=new Tt,fe=null,Pe=new Tt(0,0,0,0);return{setMask:function(re){fe!==re&&!V&&(n.colorMask(re,re,re,re),fe=re)},setLocked:function(re){V=re},setClear:function(re,te,Ne,Ze,vt){vt===!0&&(re*=Ze,te*=Ze,Ne*=Ze),ce.set(re,te,Ne,Ze),Pe.equals(ce)===!1&&(n.clearColor(re,te,Ne,Ze),Pe.copy(ce))},reset:function(){V=!1,fe=null,Pe.set(-1,0,0,0)}}}function i(){let V=!1,ce=!1,fe=null,Pe=null,re=null;return{setReversed:function(te){if(ce!==te){let Ne=e.get("EXT_clip_control");te?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ce=te;let Ze=re;re=null,this.setClear(Ze)}},getReversed:function(){return ce},setTest:function(te){te?K(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(te){fe!==te&&!V&&(n.depthMask(te),fe=te)},setFunc:function(te){if(ce&&(te=hx[te]),Pe!==te){switch(te){case po:n.depthFunc(n.NEVER);break;case mo:n.depthFunc(n.ALWAYS);break;case go:n.depthFunc(n.LESS);break;case er:n.depthFunc(n.LEQUAL);break;case xo:n.depthFunc(n.EQUAL);break;case _o:n.depthFunc(n.GEQUAL);break;case yo:n.depthFunc(n.GREATER);break;case vo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=te}},setLocked:function(te){V=te},setClear:function(te){re!==te&&(ce&&(te=1-te),n.clearDepth(te),re=te)},reset:function(){V=!1,fe=null,Pe=null,re=null,ce=!1}}}function r(){let V=!1,ce=null,fe=null,Pe=null,re=null,te=null,Ne=null,Ze=null,vt=null;return{setTest:function(dt){V||(dt?K(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(dt){ce!==dt&&!V&&(n.stencilMask(dt),ce=dt)},setFunc:function(dt,hn,_n){(fe!==dt||Pe!==hn||re!==_n)&&(n.stencilFunc(dt,hn,_n),fe=dt,Pe=hn,re=_n)},setOp:function(dt,hn,_n){(te!==dt||Ne!==hn||Ze!==_n)&&(n.stencilOp(dt,hn,_n),te=dt,Ne=hn,Ze=_n)},setLocked:function(dt){V=dt},setClear:function(dt){vt!==dt&&(n.clearStencil(dt),vt=dt)},reset:function(){V=!1,ce=null,fe=null,Pe=null,re=null,te=null,Ne=null,Ze=null,vt=null}}}let s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,_=null,w=null,y=null,P=null,C=null,F=new it(0,0,0),z=0,T=!1,M=null,A=null,O=null,D=null,I=null,N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,H=0,k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=H>=1):k.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=H>=2);let ie=null,se={},ue=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),Ge=new Tt().fromArray(ue),ut=new Tt().fromArray(Ie);function Je(V,ce,fe,Pe){let re=new Uint8Array(4),te=n.createTexture();n.bindTexture(V,te),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ne=0;Ne<fe;Ne++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(ce+Ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return te}let $={};$[n.TEXTURE_2D]=Je(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=Je(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=Je(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=Je(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(n.DEPTH_TEST),a.setFunc(er),Ye(!1),be(lc),K(n.CULL_FACE),yt(bi);function K(V){h[V]!==!0&&(n.enable(V),h[V]=!0)}function pe(V){h[V]!==!1&&(n.disable(V),h[V]=!1)}function Ee(V,ce){return u[V]!==ce?(n.bindFramebuffer(V,ce),u[V]=ce,V===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ce),V===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ae(V,ce){let fe=d,Pe=!1;if(V){fe=f.get(ce),fe===void 0&&(fe=[],f.set(ce,fe));let re=V.textures;if(fe.length!==re.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let te=0,Ne=re.length;te<Ne;te++)fe[te]=n.COLOR_ATTACHMENT0+te;fe.length=re.length,Pe=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(fe)}function tt(V){return g!==V?(n.useProgram(V),g=V,!0):!1}let Le={[Bi]:n.FUNC_ADD,[zh]:n.FUNC_SUBTRACT,[Oh]:n.FUNC_REVERSE_SUBTRACT};Le[Bh]=n.MIN,Le[kh]=n.MAX;let U={[Vh]:n.ZERO,[Gh]:n.ONE,[Hh]:n.SRC_COLOR,[ka]:n.SRC_ALPHA,[Jh]:n.SRC_ALPHA_SATURATE,[Yh]:n.DST_COLOR,[Xh]:n.DST_ALPHA,[Wh]:n.ONE_MINUS_SRC_COLOR,[Va]:n.ONE_MINUS_SRC_ALPHA,[Zh]:n.ONE_MINUS_DST_COLOR,[qh]:n.ONE_MINUS_DST_ALPHA,[$h]:n.CONSTANT_COLOR,[Kh]:n.ONE_MINUS_CONSTANT_COLOR,[jh]:n.CONSTANT_ALPHA,[Qh]:n.ONE_MINUS_CONSTANT_ALPHA};function yt(V,ce,fe,Pe,re,te,Ne,Ze,vt,dt){if(V===bi){x===!0&&(pe(n.BLEND),x=!1);return}if(x===!1&&(K(n.BLEND),x=!0),V!==Fh){if(V!==m||dt!==T){if((p!==Bi||y!==Bi)&&(n.blendEquation(n.FUNC_ADD),p=Bi,y=Bi),dt)switch(V){case Qi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hc:n.blendFunc(n.ONE,n.ONE);break;case uc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Qi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case uc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}_=null,w=null,P=null,C=null,F.set(0,0,0),z=0,m=V,T=dt}return}re=re||ce,te=te||fe,Ne=Ne||Pe,(ce!==p||re!==y)&&(n.blendEquationSeparate(Le[ce],Le[re]),p=ce,y=re),(fe!==_||Pe!==w||te!==P||Ne!==C)&&(n.blendFuncSeparate(U[fe],U[Pe],U[te],U[Ne]),_=fe,w=Pe,P=te,C=Ne),(Ze.equals(F)===!1||vt!==z)&&(n.blendColor(Ze.r,Ze.g,Ze.b,vt),F.copy(Ze),z=vt),m=V,T=!1}function nt(V,ce){V.side===Ht?pe(n.CULL_FACE):K(n.CULL_FACE);let fe=V.side===ln;ce&&(fe=!fe),Ye(fe),V.blending===Qi&&V.transparent===!1?yt(bi):yt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),s.setMask(V.colorWrite);let Pe=V.stencilWrite;o.setTest(Pe),Pe&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ue(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(V){M!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),M=V)}function be(V){V!==Uh?(K(n.CULL_FACE),V!==A&&(V===lc?n.cullFace(n.BACK):V===Nh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),A=V}function xt(V){V!==O&&(G&&n.lineWidth(V),O=V)}function Ue(V,ce,fe){V?(K(n.POLYGON_OFFSET_FILL),(D!==ce||I!==fe)&&(n.polygonOffset(ce,fe),D=ce,I=fe)):pe(n.POLYGON_OFFSET_FILL)}function $e(V){V?K(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function St(V){V===void 0&&(V=n.TEXTURE0+N-1),ie!==V&&(n.activeTexture(V),ie=V)}function zt(V,ce,fe){fe===void 0&&(ie===null?fe=n.TEXTURE0+N-1:fe=ie);let Pe=se[fe];Pe===void 0&&(Pe={type:void 0,texture:void 0},se[fe]=Pe),(Pe.type!==V||Pe.texture!==ce)&&(ie!==fe&&(n.activeTexture(fe),ie=fe),n.bindTexture(V,ce||$[V]),Pe.type=V,Pe.texture=ce)}function R(){let V=se[ie];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function J(){try{n.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ne(){try{n.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ae(){try{n.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ee(){try{n.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Be(){try{n.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{n.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{n.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(){try{n.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function le(){try{n.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(V){Ge.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),Ge.copy(V))}function De(V){ut.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),ut.copy(V))}function ze(V,ce){let fe=l.get(ce);fe===void 0&&(fe=new WeakMap,l.set(ce,fe));let Pe=fe.get(V);Pe===void 0&&(Pe=n.getUniformBlockIndex(ce,V.name),fe.set(V,Pe))}function xe(V,ce){let Pe=l.get(ce).get(V);c.get(ce)!==Pe&&(n.uniformBlockBinding(ce,Pe,V.__bindingPointIndex),c.set(ce,Pe))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ie=null,se={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,_=null,w=null,y=null,P=null,C=null,F=new it(0,0,0),z=0,T=!1,M=null,A=null,O=null,D=null,I=null,Ge.set(0,0,n.canvas.width,n.canvas.height),ut.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:K,disable:pe,bindFramebuffer:Ee,drawBuffers:Ae,useProgram:tt,setBlending:yt,setMaterial:nt,setFlipSided:Ye,setCullFace:be,setLineWidth:xt,setPolygonOffset:Ue,setScissorTest:$e,activeTexture:St,bindTexture:zt,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:J,texImage2D:Fe,texImage3D:le,updateUBOMapping:ze,uniformBlockBinding:xe,texStorage2D:de,texStorage3D:Me,texSubImage2D:ne,texSubImage3D:ae,compressedTexSubImage2D:ee,compressedTexSubImage3D:Be,scissor:me,viewport:De,reset:Qe}}function dx(n,e,t,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new We,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,v){return d?new OffscreenCanvas(R,v):qr("canvas")}function x(R,v,J){let ne=1,ae=zt(R);if((ae.width>J||ae.height>J)&&(ne=J/Math.max(ae.width,ae.height)),ne<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ee=Math.floor(ne*ae.width),Be=Math.floor(ne*ae.height);u===void 0&&(u=g(ee,Be));let de=v?g(ee,Be):u;return de.width=ee,de.height=Be,de.getContext("2d").drawImage(R,0,0,ee,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ee+"x"+Be+")."),de}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(R,v,J,ne,ae=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ee=v;if(v===n.RED&&(J===n.FLOAT&&(ee=n.R32F),J===n.HALF_FLOAT&&(ee=n.R16F),J===n.UNSIGNED_BYTE&&(ee=n.R8)),v===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&(ee=n.R8UI),J===n.UNSIGNED_SHORT&&(ee=n.R16UI),J===n.UNSIGNED_INT&&(ee=n.R32UI),J===n.BYTE&&(ee=n.R8I),J===n.SHORT&&(ee=n.R16I),J===n.INT&&(ee=n.R32I)),v===n.RG&&(J===n.FLOAT&&(ee=n.RG32F),J===n.HALF_FLOAT&&(ee=n.RG16F),J===n.UNSIGNED_BYTE&&(ee=n.RG8)),v===n.RG_INTEGER&&(J===n.UNSIGNED_BYTE&&(ee=n.RG8UI),J===n.UNSIGNED_SHORT&&(ee=n.RG16UI),J===n.UNSIGNED_INT&&(ee=n.RG32UI),J===n.BYTE&&(ee=n.RG8I),J===n.SHORT&&(ee=n.RG16I),J===n.INT&&(ee=n.RG32I)),v===n.RGB_INTEGER&&(J===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),J===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),J===n.UNSIGNED_INT&&(ee=n.RGB32UI),J===n.BYTE&&(ee=n.RGB8I),J===n.SHORT&&(ee=n.RGB16I),J===n.INT&&(ee=n.RGB32I)),v===n.RGBA_INTEGER&&(J===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),J===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),J===n.UNSIGNED_INT&&(ee=n.RGBA32UI),J===n.BYTE&&(ee=n.RGBA8I),J===n.SHORT&&(ee=n.RGBA16I),J===n.INT&&(ee=n.RGBA32I)),v===n.RGB&&(J===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),J===n.UNSIGNED_INT_10F_11F_11F_REV&&(ee=n.R11F_G11F_B10F)),v===n.RGBA){let Be=ae?zs:wt.getTransfer(ne);J===n.FLOAT&&(ee=n.RGBA32F),J===n.HALF_FLOAT&&(ee=n.RGBA16F),J===n.UNSIGNED_BYTE&&(ee=Be===Lt?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function y(R,v){let J;return R?v===null||v===Xi||v===ls?J=n.DEPTH24_STENCIL8:v===Zn?J=n.DEPTH32F_STENCIL8:v===as&&(J=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Xi||v===ls?J=n.DEPTH_COMPONENT24:v===Zn?J=n.DEPTH_COMPONENT32F:v===as&&(J=n.DEPTH_COMPONENT16),J}function P(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==bn&&R.minFilter!==Wn?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function C(R){let v=R.target;v.removeEventListener("dispose",C),z(v),v.isVideoTexture&&h.delete(v)}function F(R){let v=R.target;v.removeEventListener("dispose",F),M(v)}function z(R){let v=i.get(R);if(v.__webglInit===void 0)return;let J=R.source,ne=f.get(J);if(ne){let ae=ne[v.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&T(R),Object.keys(ne).length===0&&f.delete(J)}i.remove(R)}function T(R){let v=i.get(R);n.deleteTexture(v.__webglTexture);let J=R.source,ne=f.get(J);delete ne[v.__cacheKey],a.memory.textures--}function M(R){let v=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(v.__webglFramebuffer[ne]))for(let ae=0;ae<v.__webglFramebuffer[ne].length;ae++)n.deleteFramebuffer(v.__webglFramebuffer[ne][ae]);else n.deleteFramebuffer(v.__webglFramebuffer[ne]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[ne])}else{if(Array.isArray(v.__webglFramebuffer))for(let ne=0;ne<v.__webglFramebuffer.length;ne++)n.deleteFramebuffer(v.__webglFramebuffer[ne]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ne=0;ne<v.__webglColorRenderbuffer.length;ne++)v.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[ne]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let J=R.textures;for(let ne=0,ae=J.length;ne<ae;ne++){let ee=i.get(J[ne]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),a.memory.textures--),i.remove(J[ne])}i.remove(R)}let A=0;function O(){A=0}function D(){let R=A;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),A+=1,R}function I(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function N(R,v){let J=i.get(R);if(R.isVideoTexture&&$e(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&J.__version!==R.version){let ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(J,R,v);return}}else R.isExternalTexture&&(J.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+v)}function G(R,v){let J=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&J.__version!==R.version){$(J,R,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+v)}function H(R,v){let J=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&J.__version!==R.version){$(J,R,v);return}t.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+v)}function k(R,v){let J=i.get(R);if(R.version>0&&J.__version!==R.version){K(J,R,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+v)}let ie={[Hr]:n.REPEAT,[Oi]:n.CLAMP_TO_EDGE,[Ga]:n.MIRRORED_REPEAT},se={[bn]:n.NEAREST,[lu]:n.NEAREST_MIPMAP_NEAREST,[ea]:n.NEAREST_MIPMAP_LINEAR,[Wn]:n.LINEAR,[So]:n.LINEAR_MIPMAP_NEAREST,[Wi]:n.LINEAR_MIPMAP_LINEAR},ue={[du]:n.NEVER,[_u]:n.ALWAYS,[fu]:n.LESS,[Sc]:n.LEQUAL,[pu]:n.EQUAL,[xu]:n.GEQUAL,[mu]:n.GREATER,[gu]:n.NOTEQUAL};function Ie(R,v){if(v.type===Zn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Wn||v.magFilter===So||v.magFilter===ea||v.magFilter===Wi||v.minFilter===Wn||v.minFilter===So||v.minFilter===ea||v.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,ie[v.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ie[v.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ie[v.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,se[v.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,se[v.minFilter]),v.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ue[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===bn||v.minFilter!==ea&&v.minFilter!==Wi||v.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let J=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ge(R,v){let J=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",C));let ne=v.source,ae=f.get(ne);ae===void 0&&(ae={},f.set(ne,ae));let ee=I(v);if(ee!==R.__cacheKey){ae[ee]===void 0&&(ae[ee]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,J=!0),ae[ee].usedTimes++;let Be=ae[R.__cacheKey];Be!==void 0&&(ae[R.__cacheKey].usedTimes--,Be.usedTimes===0&&T(v)),R.__cacheKey=ee,R.__webglTexture=ae[ee].texture}return J}function ut(R,v,J){return Math.floor(Math.floor(R/J)/v)}function Je(R,v,J,ne){let ee=R.updateRanges;if(ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,J,ne,v.data);else{ee.sort((le,me)=>le.start-me.start);let Be=0;for(let le=1;le<ee.length;le++){let me=ee[Be],De=ee[le],ze=me.start+me.count,xe=ut(De.start,v.width,4),Qe=ut(me.start,v.width,4);De.start<=ze+1&&xe===Qe&&ut(De.start+De.count-1,v.width,4)===xe?me.count=Math.max(me.count,De.start+De.count-me.start):(++Be,ee[Be]=De)}ee.length=Be+1;let de=n.getParameter(n.UNPACK_ROW_LENGTH),Me=n.getParameter(n.UNPACK_SKIP_PIXELS),Fe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let le=0,me=ee.length;le<me;le++){let De=ee[le],ze=Math.floor(De.start/4),xe=Math.ceil(De.count/4),Qe=ze%v.width,V=Math.floor(ze/v.width),ce=xe,fe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Qe),n.pixelStorei(n.UNPACK_SKIP_ROWS,V),t.texSubImage2D(n.TEXTURE_2D,0,Qe,V,ce,fe,J,ne,v.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,de),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Me),n.pixelStorei(n.UNPACK_SKIP_ROWS,Fe)}}function $(R,v,J){let ne=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ne=n.TEXTURE_3D);let ae=Ge(R,v),ee=v.source;t.bindTexture(ne,R.__webglTexture,n.TEXTURE0+J);let Be=i.get(ee);if(ee.version!==Be.__version||ae===!0){t.activeTexture(n.TEXTURE0+J);let de=wt.getPrimaries(wt.workingColorSpace),Me=v.colorSpace===Jn?null:wt.getPrimaries(v.colorSpace),Fe=v.colorSpace===Jn||de===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let le=x(v.image,!1,r.maxTextureSize);le=St(v,le);let me=s.convert(v.format,v.colorSpace),De=s.convert(v.type),ze=w(v.internalFormat,me,De,v.colorSpace,v.isVideoTexture);Ie(ne,v);let xe,Qe=v.mipmaps,V=v.isVideoTexture!==!0,ce=Be.__version===void 0||ae===!0,fe=ee.dataReady,Pe=P(v,le);if(v.isDepthTexture)ze=y(v.format===cs,v.type),ce&&(V?t.texStorage2D(n.TEXTURE_2D,1,ze,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,ze,le.width,le.height,0,me,De,null));else if(v.isDataTexture)if(Qe.length>0){V&&ce&&t.texStorage2D(n.TEXTURE_2D,Pe,ze,Qe[0].width,Qe[0].height);for(let re=0,te=Qe.length;re<te;re++)xe=Qe[re],V?fe&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,xe.width,xe.height,me,De,xe.data):t.texImage2D(n.TEXTURE_2D,re,ze,xe.width,xe.height,0,me,De,xe.data);v.generateMipmaps=!1}else V?(ce&&t.texStorage2D(n.TEXTURE_2D,Pe,ze,le.width,le.height),fe&&Je(v,le,me,De)):t.texImage2D(n.TEXTURE_2D,0,ze,le.width,le.height,0,me,De,le.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){V&&ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,ze,Qe[0].width,Qe[0].height,le.depth);for(let re=0,te=Qe.length;re<te;re++)if(xe=Qe[re],v.format!==zn)if(me!==null)if(V){if(fe)if(v.layerUpdates.size>0){let Ne=Ic(xe.width,xe.height,v.format,v.type);for(let Ze of v.layerUpdates){let vt=xe.data.subarray(Ze*Ne/xe.data.BYTES_PER_ELEMENT,(Ze+1)*Ne/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,Ze,xe.width,xe.height,1,me,vt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,xe.width,xe.height,le.depth,me,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,ze,xe.width,xe.height,le.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,xe.width,xe.height,le.depth,me,De,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,ze,xe.width,xe.height,le.depth,0,me,De,xe.data)}else{V&&ce&&t.texStorage2D(n.TEXTURE_2D,Pe,ze,Qe[0].width,Qe[0].height);for(let re=0,te=Qe.length;re<te;re++)xe=Qe[re],v.format!==zn?me!==null?V?fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,xe.width,xe.height,me,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,re,ze,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?fe&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,xe.width,xe.height,me,De,xe.data):t.texImage2D(n.TEXTURE_2D,re,ze,xe.width,xe.height,0,me,De,xe.data)}else if(v.isDataArrayTexture)if(V){if(ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,ze,le.width,le.height,le.depth),fe)if(v.layerUpdates.size>0){let re=Ic(le.width,le.height,v.format,v.type);for(let te of v.layerUpdates){let Ne=le.data.subarray(te*re/le.data.BYTES_PER_ELEMENT,(te+1)*re/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,le.width,le.height,1,me,De,Ne)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,me,De,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,le.width,le.height,le.depth,0,me,De,le.data);else if(v.isData3DTexture)V?(ce&&t.texStorage3D(n.TEXTURE_3D,Pe,ze,le.width,le.height,le.depth),fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,me,De,le.data)):t.texImage3D(n.TEXTURE_3D,0,ze,le.width,le.height,le.depth,0,me,De,le.data);else if(v.isFramebufferTexture){if(ce)if(V)t.texStorage2D(n.TEXTURE_2D,Pe,ze,le.width,le.height);else{let re=le.width,te=le.height;for(let Ne=0;Ne<Pe;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,ze,re,te,0,me,De,null),re>>=1,te>>=1}}else if(Qe.length>0){if(V&&ce){let re=zt(Qe[0]);t.texStorage2D(n.TEXTURE_2D,Pe,ze,re.width,re.height)}for(let re=0,te=Qe.length;re<te;re++)xe=Qe[re],V?fe&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,me,De,xe):t.texImage2D(n.TEXTURE_2D,re,ze,me,De,xe);v.generateMipmaps=!1}else if(V){if(ce){let re=zt(le);t.texStorage2D(n.TEXTURE_2D,Pe,ze,re.width,re.height)}fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,De,le)}else t.texImage2D(n.TEXTURE_2D,0,ze,me,De,le);m(v)&&p(ne),Be.__version=ee.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function K(R,v,J){if(v.image.length!==6)return;let ne=Ge(R,v),ae=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+J);let ee=i.get(ae);if(ae.version!==ee.__version||ne===!0){t.activeTexture(n.TEXTURE0+J);let Be=wt.getPrimaries(wt.workingColorSpace),de=v.colorSpace===Jn?null:wt.getPrimaries(v.colorSpace),Me=v.colorSpace===Jn||Be===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Fe=v.isCompressedTexture||v.image[0].isCompressedTexture,le=v.image[0]&&v.image[0].isDataTexture,me=[];for(let te=0;te<6;te++)!Fe&&!le?me[te]=x(v.image[te],!0,r.maxCubemapSize):me[te]=le?v.image[te].image:v.image[te],me[te]=St(v,me[te]);let De=me[0],ze=s.convert(v.format,v.colorSpace),xe=s.convert(v.type),Qe=w(v.internalFormat,ze,xe,v.colorSpace),V=v.isVideoTexture!==!0,ce=ee.__version===void 0||ne===!0,fe=ae.dataReady,Pe=P(v,De);Ie(n.TEXTURE_CUBE_MAP,v);let re;if(Fe){V&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Qe,De.width,De.height);for(let te=0;te<6;te++){re=me[te].mipmaps;for(let Ne=0;Ne<re.length;Ne++){let Ze=re[Ne];v.format!==zn?ze!==null?V?fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne,0,0,Ze.width,Ze.height,ze,Ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne,Qe,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne,0,0,Ze.width,Ze.height,ze,xe,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne,Qe,Ze.width,Ze.height,0,ze,xe,Ze.data)}}}else{if(re=v.mipmaps,V&&ce){re.length>0&&Pe++;let te=zt(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Qe,te.width,te.height)}for(let te=0;te<6;te++)if(le){V?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,me[te].width,me[te].height,ze,xe,me[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Qe,me[te].width,me[te].height,0,ze,xe,me[te].data);for(let Ne=0;Ne<re.length;Ne++){let vt=re[Ne].image[te].image;V?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne+1,0,0,vt.width,vt.height,ze,xe,vt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne+1,Qe,vt.width,vt.height,0,ze,xe,vt.data)}}else{V?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ze,xe,me[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Qe,ze,xe,me[te]);for(let Ne=0;Ne<re.length;Ne++){let Ze=re[Ne];V?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne+1,0,0,ze,xe,Ze.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne+1,Qe,ze,xe,Ze.image[te])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),ee.__version=ae.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function pe(R,v,J,ne,ae,ee){let Be=s.convert(J.format,J.colorSpace),de=s.convert(J.type),Me=w(J.internalFormat,Be,de,J.colorSpace),Fe=i.get(v),le=i.get(J);if(le.__renderTarget=v,!Fe.__hasExternalTextures){let me=Math.max(1,v.width>>ee),De=Math.max(1,v.height>>ee);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,ee,Me,me,De,v.depth,0,Be,de,null):t.texImage2D(ae,ee,Me,me,De,0,Be,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Ue(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,ae,le.__webglTexture,0,xt(v)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,ae,le.__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(R,v,J){if(n.bindRenderbuffer(n.RENDERBUFFER,R),v.depthBuffer){let ne=v.depthTexture,ae=ne&&ne.isDepthTexture?ne.type:null,ee=y(v.stencilBuffer,ae),Be=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=xt(v);Ue(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,ee,v.width,v.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,ee,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ee,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Be,n.RENDERBUFFER,R)}else{let ne=v.textures;for(let ae=0;ae<ne.length;ae++){let ee=ne[ae],Be=s.convert(ee.format,ee.colorSpace),de=s.convert(ee.type),Me=w(ee.internalFormat,Be,de,ee.colorSpace),Fe=xt(v);J&&Ue(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,Me,v.width,v.height):Ue(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,Me,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Me,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ne=i.get(v.depthTexture);ne.__renderTarget=v,(!ne.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),N(v.depthTexture,0);let ae=ne.__webglTexture,ee=xt(v);if(v.depthTexture.format===Wr)Ue(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0);else if(v.depthTexture.format===cs)Ue(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function tt(R){let v=i.get(R),J=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let ne=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ne){let ae=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ne.removeEventListener("dispose",ae)};ne.addEventListener("dispose",ae),v.__depthDisposeCallback=ae}v.__boundDepthTexture=ne}if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");let ne=R.texture.mipmaps;ne&&ne.length>0?Ae(v.__webglFramebuffer[0],R):Ae(v.__webglFramebuffer,R)}else if(J){v.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ne]),v.__webglDepthbuffer[ne]===void 0)v.__webglDepthbuffer[ne]=n.createRenderbuffer(),Ee(v.__webglDepthbuffer[ne],R,!1);else{let ae=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=v.__webglDepthbuffer[ne];n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,ee)}}else{let ne=R.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Ee(v.__webglDepthbuffer,R,!1);else{let ae=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(R,v,J){let ne=i.get(R);v!==void 0&&pe(ne.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&tt(R)}function U(R){let v=R.texture,J=i.get(R),ne=i.get(v);R.addEventListener("dispose",F);let ae=R.textures,ee=R.isWebGLCubeRenderTarget===!0,Be=ae.length>1;if(Be||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=v.version,a.memory.textures++),ee){J.__webglFramebuffer=[];for(let de=0;de<6;de++)if(v.mipmaps&&v.mipmaps.length>0){J.__webglFramebuffer[de]=[];for(let Me=0;Me<v.mipmaps.length;Me++)J.__webglFramebuffer[de][Me]=n.createFramebuffer()}else J.__webglFramebuffer[de]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){J.__webglFramebuffer=[];for(let de=0;de<v.mipmaps.length;de++)J.__webglFramebuffer[de]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(Be)for(let de=0,Me=ae.length;de<Me;de++){let Fe=i.get(ae[de]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Ue(R)===!1){J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let de=0;de<ae.length;de++){let Me=ae[de];J.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[de]);let Fe=s.convert(Me.format,Me.colorSpace),le=s.convert(Me.type),me=w(Me.internalFormat,Fe,le,Me.colorSpace,R.isXRRenderTarget===!0),De=xt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,me,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,J.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(J.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,v);for(let de=0;de<6;de++)if(v.mipmaps&&v.mipmaps.length>0)for(let Me=0;Me<v.mipmaps.length;Me++)pe(J.__webglFramebuffer[de][Me],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Me);else pe(J.__webglFramebuffer[de],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let de=0,Me=ae.length;de<Me;de++){let Fe=ae[de],le=i.get(Fe),me=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,le.__webglTexture),Ie(me,Fe),pe(J.__webglFramebuffer,R,Fe,n.COLOR_ATTACHMENT0+de,me,0),m(Fe)&&p(me)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,ne.__webglTexture),Ie(de,v),v.mipmaps&&v.mipmaps.length>0)for(let Me=0;Me<v.mipmaps.length;Me++)pe(J.__webglFramebuffer[Me],R,v,n.COLOR_ATTACHMENT0,de,Me);else pe(J.__webglFramebuffer,R,v,n.COLOR_ATTACHMENT0,de,0);m(v)&&p(de),t.unbindTexture()}R.depthBuffer&&tt(R)}function yt(R){let v=R.textures;for(let J=0,ne=v.length;J<ne;J++){let ae=v[J];if(m(ae)){let ee=_(R),Be=i.get(ae).__webglTexture;t.bindTexture(ee,Be),p(ee),t.unbindTexture()}}}let nt=[],Ye=[];function be(R){if(R.samples>0){if(Ue(R)===!1){let v=R.textures,J=R.width,ne=R.height,ae=n.COLOR_BUFFER_BIT,ee=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Be=i.get(R),de=v.length>1;if(de)for(let Fe=0;Fe<v.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);let Me=R.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Fe=0;Fe<v.length;Fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Be.__webglColorRenderbuffer[Fe]);let le=i.get(v[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,J,ne,0,0,J,ne,ae,n.NEAREST),c===!0&&(nt.length=0,Ye.length=0,nt.push(n.COLOR_ATTACHMENT0+Fe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(nt.push(ee),Ye.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ye)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,nt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let Fe=0;Fe<v.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,Be.__webglColorRenderbuffer[Fe]);let le=i.get(v[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let v=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function xt(R){return Math.min(r.maxSamples,R.samples)}function Ue(R){let v=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function $e(R){let v=a.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function St(R,v){let J=R.colorSpace,ne=R.format,ae=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||J!==tr&&J!==Jn&&(wt.getTransfer(J)===Lt?(ne!==zn||ae!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),v}function zt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=O,this.setTexture2D=N,this.setTexture2DArray=G,this.setTexture3D=H,this.setTextureCube=k,this.rebindTextures=Le,this.setupRenderTarget=U,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Ue}function fx(n,e){function t(i,r=Jn){let s,a=wt.getTransfer(r);if(i===Yn)return n.UNSIGNED_BYTE;if(i===To)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Eo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_c)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===mc)return n.BYTE;if(i===gc)return n.SHORT;if(i===as)return n.UNSIGNED_SHORT;if(i===wo)return n.INT;if(i===Xi)return n.UNSIGNED_INT;if(i===Zn)return n.FLOAT;if(i===os)return n.HALF_FLOAT;if(i===yc)return n.ALPHA;if(i===vc)return n.RGB;if(i===zn)return n.RGBA;if(i===Wr)return n.DEPTH_COMPONENT;if(i===cs)return n.DEPTH_STENCIL;if(i===Ao)return n.RED;if(i===Co)return n.RED_INTEGER;if(i===Mc)return n.RG;if(i===Ro)return n.RG_INTEGER;if(i===Io)return n.RGBA_INTEGER;if(i===ta||i===na||i===ia||i===ra)if(a===Lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ta)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ta)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===na)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ia)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ra)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Po||i===Do||i===Lo||i===Uo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Po)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Do)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Lo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Uo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===No||i===Fo||i===zo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===No||i===Fo)return a===Lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===zo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Oo||i===Bo||i===ko||i===Vo||i===Go||i===Ho||i===Wo||i===Xo||i===qo||i===Yo||i===Zo||i===Jo||i===$o||i===Ko)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Oo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ko)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Go)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ho)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jo)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$o)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ko)return a===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jo||i===Qo||i===el)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===jo)return a===Lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===el)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tl||i===nl||i===il||i===rl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===tl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===nl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===il)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ls?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var px=`
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

}`,Hc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ys(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new wn({vertexShader:px,fragmentShader:mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new Pn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wc=class extends _i{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new Hc,p={},_=t.getContextAttributes(),w=null,y=null,P=[],C=[],F=new We,z=null,T=new Kt;T.viewport=new Tt;let M=new Kt;M.viewport=new Tt;let A=[T,M],O=new fo,D=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let K=P[$];return K===void 0&&(K=new Kr,P[$]=K),K.getTargetRaySpace()},this.getControllerGrip=function($){let K=P[$];return K===void 0&&(K=new Kr,P[$]=K),K.getGripSpace()},this.getHand=function($){let K=P[$];return K===void 0&&(K=new Kr,P[$]=K),K.getHandSpace()};function N($){let K=C.indexOf($.inputSource);if(K===-1)return;let pe=P[K];pe!==void 0&&(pe.update($.inputSource,$.frame,l||a),pe.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",H);for(let $=0;$<P.length;$++){let K=C[$];K!==null&&(C[$]=null,P[$].disconnect(K))}D=null,I=null,m.reset();for(let $ in p)delete p[$];e.setRenderTarget(w),d=null,f=null,u=null,r=null,y=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(z),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",G),r.addEventListener("inputsourceschange",H),_.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(F),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ee=null,Ae=null;_.depth&&(Ae=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=_.stencil?cs:Wr,Ee=_.stencil?ls:Xi);let tt={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(tt),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Qn(f.textureWidth,f.textureHeight,{format:zn,type:Yn,depthTexture:new qs(f.textureWidth,f.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let pe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Qn(d.framebufferWidth,d.framebufferHeight,{format:zn,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Je.setContext(r),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H($){for(let K=0;K<$.removed.length;K++){let pe=$.removed[K],Ee=C.indexOf(pe);Ee>=0&&(C[Ee]=null,P[Ee].disconnect(pe))}for(let K=0;K<$.added.length;K++){let pe=$.added[K],Ee=C.indexOf(pe);if(Ee===-1){for(let tt=0;tt<P.length;tt++)if(tt>=C.length){C.push(pe),Ee=tt;break}else if(C[tt]===null){C[tt]=pe,Ee=tt;break}if(Ee===-1)break}let Ae=P[Ee];Ae&&Ae.connect(pe)}}let k=new B,ie=new B;function se($,K,pe){k.setFromMatrixPosition(K.matrixWorld),ie.setFromMatrixPosition(pe.matrixWorld);let Ee=k.distanceTo(ie),Ae=K.projectionMatrix.elements,tt=pe.projectionMatrix.elements,Le=Ae[14]/(Ae[10]-1),U=Ae[14]/(Ae[10]+1),yt=(Ae[9]+1)/Ae[5],nt=(Ae[9]-1)/Ae[5],Ye=(Ae[8]-1)/Ae[0],be=(tt[8]+1)/tt[0],xt=Le*Ye,Ue=Le*be,$e=Ee/(-Ye+be),St=$e*-Ye;if(K.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(St),$.translateZ($e),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ae[10]===-1)$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let zt=Le+$e,R=U+$e,v=xt-St,J=Ue+(Ee-St),ne=yt*U/R*zt,ae=nt*U/R*zt;$.projectionMatrix.makePerspective(v,J,ne,ae,zt,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ue($,K){K===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(K.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let K=$.near,pe=$.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),O.near=M.near=T.near=K,O.far=M.far=T.far=pe,(D!==O.near||I!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),D=O.near,I=O.far),O.layers.mask=$.layers.mask|6,T.layers.mask=O.layers.mask&3,M.layers.mask=O.layers.mask&5;let Ee=$.parent,Ae=O.cameras;ue(O,Ee);for(let tt=0;tt<Ae.length;tt++)ue(Ae[tt],Ee);Ae.length===2?se(O,T,M):O.projectionMatrix.copy(T.projectionMatrix),Ie($,O,Ee)};function Ie($,K,pe){pe===null?$.matrix.copy(K.matrixWorld):($.matrix.copy(pe.matrixWorld),$.matrix.invert(),$.matrix.multiply(K.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Xr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function($){return p[$]};let Ge=null;function ut($,K){if(h=K.getViewerPose(l||a),g=K,h!==null){let pe=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Ee=!1;pe.length!==O.cameras.length&&(O.cameras.length=0,Ee=!0);for(let U=0;U<pe.length;U++){let yt=pe[U],nt=null;if(d!==null)nt=d.getViewport(yt);else{let be=u.getViewSubImage(f,yt);nt=be.viewport,U===0&&(e.setRenderTargetTextures(y,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(y))}let Ye=A[U];Ye===void 0&&(Ye=new Kt,Ye.layers.enable(U),Ye.viewport=new Tt,A[U]=Ye),Ye.matrix.fromArray(yt.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(yt.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(nt.x,nt.y,nt.width,nt.height),U===0&&(O.matrix.copy(Ye.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ee===!0&&O.cameras.push(Ye)}let Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let U=u.getDepthInformation(pe[0]);U&&U.isValid&&U.texture&&m.init(U,r.renderState)}if(Ae&&Ae.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let U=0;U<pe.length;U++){let yt=pe[U].camera;if(yt){let nt=p[yt];nt||(nt=new Ys,p[yt]=nt);let Ye=u.getCameraImage(yt);nt.sourceTexture=Ye}}}}for(let pe=0;pe<P.length;pe++){let Ee=C[pe],Ae=P[pe];Ee!==null&&Ae!==void 0&&Ae.update(Ee,K,l||a)}Ge&&Ge($,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}let Je=new Yu;Je.setAnimationLoop(ut),this.setAnimationLoop=function($){Ge=$},this.dispose=function(){}}},gr=new Xn,gx=new It;function xx(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ac(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,_,w,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,_,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),w=_.envMap,y=_.envMapRotation;w&&(m.envMap.value=w,gr.copy(y),gr.x*=-1,gr.y*=-1,gr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),m.envMapRotation.value.setFromMatrix4(gx.makeRotationFromEuler(gr)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _x(n,e,t,i){let r={},s={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,w){let y=w.program;i.uniformBlockBinding(_,y)}function l(_,w){let y=r[_.id];y===void 0&&(g(_),y=h(_),r[_.id]=y,_.addEventListener("dispose",m));let P=w.program;i.updateUBOMapping(_,P);let C=e.render.frame;s[_.id]!==C&&(f(_),s[_.id]=C)}function h(_){let w=u();_.__bindingPointIndex=w;let y=n.createBuffer(),P=_.__size,C=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,P,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,y),y}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let w=r[_.id],y=_.uniforms,P=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let C=0,F=y.length;C<F;C++){let z=Array.isArray(y[C])?y[C]:[y[C]];for(let T=0,M=z.length;T<M;T++){let A=z[T];if(d(A,C,T,P)===!0){let O=A.__offset,D=Array.isArray(A.value)?A.value:[A.value],I=0;for(let N=0;N<D.length;N++){let G=D[N],H=x(G);typeof G=="number"||typeof G=="boolean"?(A.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,O+I,A.__data)):G.isMatrix3?(A.__data[0]=G.elements[0],A.__data[1]=G.elements[1],A.__data[2]=G.elements[2],A.__data[3]=0,A.__data[4]=G.elements[3],A.__data[5]=G.elements[4],A.__data[6]=G.elements[5],A.__data[7]=0,A.__data[8]=G.elements[6],A.__data[9]=G.elements[7],A.__data[10]=G.elements[8],A.__data[11]=0):(G.toArray(A.__data,I),I+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(_,w,y,P){let C=_.value,F=w+"_"+y;if(P[F]===void 0)return typeof C=="number"||typeof C=="boolean"?P[F]=C:P[F]=C.clone(),!0;{let z=P[F];if(typeof C=="number"||typeof C=="boolean"){if(z!==C)return P[F]=C,!0}else if(z.equals(C)===!1)return z.copy(C),!0}return!1}function g(_){let w=_.uniforms,y=0,P=16;for(let F=0,z=w.length;F<z;F++){let T=Array.isArray(w[F])?w[F]:[w[F]];for(let M=0,A=T.length;M<A;M++){let O=T[M],D=Array.isArray(O.value)?O.value:[O.value];for(let I=0,N=D.length;I<N;I++){let G=D[I],H=x(G),k=y%P,ie=k%H.boundary,se=k+ie;y+=ie,se!==0&&P-se<H.storage&&(y+=P-se),O.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=H.storage}}}let C=y%P;return C>0&&(y+=P-C),_.__size=y,_.__cache={},this}function x(_){let w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),w}function m(_){let w=_.target;w.removeEventListener("dispose",m);let y=a.indexOf(w.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function p(){for(let _ in r)n.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}var fs=class{constructor(e={}){let{canvas:t=yu(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,_=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,P=!1;this._outputColorSpace=Xt;let C=0,F=0,z=null,T=-1,M=null,A=new Tt,O=new Tt,D=null,I=new it(0),N=0,G=t.width,H=t.height,k=1,ie=null,se=null,ue=new Tt(0,0,G,H),Ie=new Tt(0,0,G,H),Ge=!1,ut=new ts,Je=!1,$=!1,K=new It,pe=new B,Ee=new Tt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},tt=!1;function Le(){return z===null?k:1}let U=i;function yt(S,X){return t.getContext(S,X)}try{let S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",re,!1),U===null){let X="webgl2";if(U=yt(X,S),U===null)throw yt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let nt,Ye,be,xt,Ue,$e,St,zt,R,v,J,ne,ae,ee,Be,de,Me,Fe,le,me,De,ze,xe,Qe;function V(){nt=new Fg(U),nt.init(),ze=new fx(U,nt),Ye=new Rg(U,nt,e,ze),be=new ux(U,nt),Ye.reversedDepthBuffer&&f&&be.buffers.depth.setReversed(!0),xt=new Bg(U),Ue=new j0,$e=new dx(U,nt,be,Ue,Ye,ze,xt),St=new Pg(y),zt=new Ng(y),R=new Xf(U),xe=new Ag(U,R),v=new zg(U,R,xt,xe),J=new Vg(U,v,R,xt),le=new kg(U,Ye,$e),de=new Ig(Ue),ne=new K0(y,St,zt,nt,Ye,xe,de),ae=new xx(y,Ue),ee=new ex,Be=new ax(nt),Fe=new Eg(y,St,zt,be,J,d,c),Me=new cx(y,J,Ye),Qe=new _x(U,xt,Ye,be),me=new Cg(U,nt,xt),De=new Og(U,nt,xt),xt.programs=ne.programs,y.capabilities=Ye,y.extensions=nt,y.properties=Ue,y.renderLists=ee,y.shadowMap=Me,y.state=be,y.info=xt}V();let ce=new Wc(y,U);this.xr=ce,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let S=nt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=nt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(S){S!==void 0&&(k=S,this.setSize(G,H,!1))},this.getSize=function(S){return S.set(G,H)},this.setSize=function(S,X,Q=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,H=X,t.width=Math.floor(S*k),t.height=Math.floor(X*k),Q===!0&&(t.style.width=S+"px",t.style.height=X+"px"),this.setViewport(0,0,S,X)},this.getDrawingBufferSize=function(S){return S.set(G*k,H*k).floor()},this.setDrawingBufferSize=function(S,X,Q){G=S,H=X,k=Q,t.width=Math.floor(S*Q),t.height=Math.floor(X*Q),this.setViewport(0,0,S,X)},this.getCurrentViewport=function(S){return S.copy(A)},this.getViewport=function(S){return S.copy(ue)},this.setViewport=function(S,X,Q,j){S.isVector4?ue.set(S.x,S.y,S.z,S.w):ue.set(S,X,Q,j),be.viewport(A.copy(ue).multiplyScalar(k).round())},this.getScissor=function(S){return S.copy(Ie)},this.setScissor=function(S,X,Q,j){S.isVector4?Ie.set(S.x,S.y,S.z,S.w):Ie.set(S,X,Q,j),be.scissor(O.copy(Ie).multiplyScalar(k).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(S){be.setScissorTest(Ge=S)},this.setOpaqueSort=function(S){ie=S},this.setTransparentSort=function(S){se=S},this.getClearColor=function(S){return S.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(S=!0,X=!0,Q=!0){let j=0;if(S){let W=!1;if(z!==null){let he=z.texture.format;W=he===Io||he===Ro||he===Co}if(W){let he=z.texture.type,ye=he===Yn||he===Xi||he===as||he===ls||he===To||he===Eo,Ce=Fe.getClearColor(),Te=Fe.getClearAlpha(),Ke=Ce.r,Ve=Ce.g,ke=Ce.b;ye?(g[0]=Ke,g[1]=Ve,g[2]=ke,g[3]=Te,U.clearBufferuiv(U.COLOR,0,g)):(x[0]=Ke,x[1]=Ve,x[2]=ke,x[3]=Te,U.clearBufferiv(U.COLOR,0,x))}else j|=U.COLOR_BUFFER_BIT}X&&(j|=U.DEPTH_BUFFER_BIT),Q&&(j|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",re,!1),Fe.dispose(),ee.dispose(),Be.dispose(),Ue.dispose(),St.dispose(),zt.dispose(),J.dispose(),xe.dispose(),Qe.dispose(),ne.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",_n),ce.removeEventListener("sessionend",si),rn.stop()};function fe(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let S=xt.autoReset,X=Me.enabled,Q=Me.autoUpdate,j=Me.needsUpdate,W=Me.type;V(),xt.autoReset=S,Me.enabled=X,Me.autoUpdate=Q,Me.needsUpdate=j,Me.type=W}function re(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function te(S){let X=S.target;X.removeEventListener("dispose",te),Ne(X)}function Ne(S){Ze(S),Ue.remove(S)}function Ze(S){let X=Ue.get(S).programs;X!==void 0&&(X.forEach(function(Q){ne.releaseProgram(Q)}),S.isShaderMaterial&&ne.releaseShaderCache(S))}this.renderBufferDirect=function(S,X,Q,j,W,he){X===null&&(X=Ae);let ye=W.isMesh&&W.matrixWorld.determinant()<0,Ce=Ei(S,X,Q,j,W);be.setMaterial(j,ye);let Te=Q.index,Ke=1;if(j.wireframe===!0){if(Te=v.getWireframeAttribute(Q),Te===void 0)return;Ke=2}let Ve=Q.drawRange,ke=Q.attributes.position,je=Ve.start*Ke,Mt=(Ve.start+Ve.count)*Ke;he!==null&&(je=Math.max(je,he.start*Ke),Mt=Math.min(Mt,(he.start+he.count)*Ke)),Te!==null?(je=Math.max(je,0),Mt=Math.min(Mt,Te.count)):ke!=null&&(je=Math.max(je,0),Mt=Math.min(Mt,ke.count));let _t=Mt-je;if(_t<0||_t===1/0)return;xe.setup(W,j,Ce,Q,Te);let bt,ot=me;if(Te!==null&&(bt=R.get(Te),ot=De,ot.setIndex(bt)),W.isMesh)j.wireframe===!0?(be.setLineWidth(j.wireframeLinewidth*Le()),ot.setMode(U.LINES)):ot.setMode(U.TRIANGLES);else if(W.isLine){let He=j.linewidth;He===void 0&&(He=1),be.setLineWidth(He*Le()),W.isLineSegments?ot.setMode(U.LINES):W.isLineLoop?ot.setMode(U.LINE_LOOP):ot.setMode(U.LINE_STRIP)}else W.isPoints?ot.setMode(U.POINTS):W.isSprite&&ot.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Yr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))ot.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let He=W._multiDrawStarts,Nt=W._multiDrawCounts,rt=W._multiDrawCount,Wt=Te?R.get(Te).bytesPerElement:1,yn=Ue.get(j).currentProgram.getUniforms();for(let sn=0;sn<rt;sn++)yn.setValue(U,"_gl_DrawID",sn),ot.render(He[sn]/Wt,Nt[sn])}else if(W.isInstancedMesh)ot.renderInstances(je,_t,W.count);else if(Q.isInstancedBufferGeometry){let He=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Nt=Math.min(Q.instanceCount,He);ot.renderInstances(je,_t,Nt)}else ot.render(je,_t)};function vt(S,X,Q){S.transparent===!0&&S.side===Ht&&S.forceSinglePass===!1?(S.side=ln,S.needsUpdate=!0,An(S,X,Q),S.side=xi,S.needsUpdate=!0,An(S,X,Q),S.side=Ht):An(S,X,Q)}this.compile=function(S,X,Q=null){Q===null&&(Q=S),p=Be.get(Q),p.init(X),w.push(p),Q.traverseVisible(function(W){W.isLight&&W.layers.test(X.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),S!==Q&&S.traverseVisible(function(W){W.isLight&&W.layers.test(X.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();let j=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let he=W.material;if(he)if(Array.isArray(he))for(let ye=0;ye<he.length;ye++){let Ce=he[ye];vt(Ce,Q,W),j.add(Ce)}else vt(he,Q,W),j.add(he)}),p=w.pop(),j},this.compileAsync=function(S,X,Q=null){let j=this.compile(S,X,Q);return new Promise(W=>{function he(){if(j.forEach(function(ye){Ue.get(ye).currentProgram.isReady()&&j.delete(ye)}),j.size===0){W(S);return}setTimeout(he,10)}nt.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let dt=null;function hn(S){dt&&dt(S)}function _n(){rn.stop()}function si(){rn.start()}let rn=new Yu;rn.setAnimationLoop(hn),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(S){dt=S,ce.setAnimationLoop(S),S===null?rn.stop():rn.start()},ce.addEventListener("sessionstart",_n),ce.addEventListener("sessionend",si),this.render=function(S,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(X),X=ce.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,X,z),p=Be.get(S,w.length),p.init(X),w.push(p),K.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ut.setFromProjectionMatrix(K,Hn,X.reversedDepth),$=this.localClippingEnabled,Je=de.init(this.clippingPlanes,$),m=ee.get(S,_.length),m.init(),_.push(m),ce.enabled===!0&&ce.isPresenting===!0){let he=y.xr.getDepthSensingMesh();he!==null&&br(he,X,-1/0,y.sortObjects)}br(S,X,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ie,se),tt=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,tt&&Fe.addToRenderList(m,S),this.info.render.frame++,Je===!0&&de.beginShadows();let Q=p.state.shadowsArray;Me.render(Q,S,X),Je===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=m.opaque,W=m.transmissive;if(p.setupLights(),X.isArrayCamera){let he=X.cameras;if(W.length>0)for(let ye=0,Ce=he.length;ye<Ce;ye++){let Te=he[ye];un(j,W,S,Te)}tt&&Fe.render(S);for(let ye=0,Ce=he.length;ye<Ce;ye++){let Te=he[ye];Sr(m,S,Te,Te.viewport)}}else W.length>0&&un(j,W,S,X),tt&&Fe.render(S),Sr(m,S,X);z!==null&&F===0&&($e.updateMultisampleRenderTarget(z),$e.updateRenderTargetMipmap(z)),S.isScene===!0&&S.onAfterRender(y,S,X),xe.resetDefaultState(),T=-1,M=null,w.pop(),w.length>0?(p=w[w.length-1],Je===!0&&de.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function br(S,X,Q,j){if(S.visible===!1)return;if(S.layers.test(X.layers)){if(S.isGroup)Q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(X);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ut.intersectsSprite(S)){j&&Ee.setFromMatrixPosition(S.matrixWorld).applyMatrix4(K);let ye=J.update(S),Ce=S.material;Ce.visible&&m.push(S,ye,Ce,Q,Ee.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ut.intersectsObject(S))){let ye=J.update(S),Ce=S.material;if(j&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ee.copy(S.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ee.copy(ye.boundingSphere.center)),Ee.applyMatrix4(S.matrixWorld).applyMatrix4(K)),Array.isArray(Ce)){let Te=ye.groups;for(let Ke=0,Ve=Te.length;Ke<Ve;Ke++){let ke=Te[Ke],je=Ce[ke.materialIndex];je&&je.visible&&m.push(S,ye,je,Q,Ee.z,ke)}}else Ce.visible&&m.push(S,ye,Ce,Q,Ee.z,null)}}let he=S.children;for(let ye=0,Ce=he.length;ye<Ce;ye++)br(he[ye],X,Q,j)}function Sr(S,X,Q,j){let W=S.opaque,he=S.transmissive,ye=S.transparent;p.setupLightsView(Q),Je===!0&&de.setGlobalState(y.clippingPlanes,Q),j&&be.viewport(A.copy(j)),W.length>0&&ai(W,X,Q),he.length>0&&ai(he,X,Q),ye.length>0&&ai(ye,X,Q),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function un(S,X,Q,j){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Qn(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?os:Yn,minFilter:Wi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));let he=p.state.transmissionRenderTarget[j.id],ye=j.viewport||A;he.setSize(ye.z*y.transmissionResolutionScale,ye.w*y.transmissionResolutionScale);let Ce=y.getRenderTarget(),Te=y.getActiveCubeFace(),Ke=y.getActiveMipmapLevel();y.setRenderTarget(he),y.getClearColor(I),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear(),tt&&Fe.render(Q);let Ve=y.toneMapping;y.toneMapping=Si;let ke=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),Je===!0&&de.setGlobalState(y.clippingPlanes,j),ai(S,Q,j),$e.updateMultisampleRenderTarget(he),$e.updateRenderTargetMipmap(he),nt.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Mt=0,_t=X.length;Mt<_t;Mt++){let bt=X[Mt],ot=bt.object,He=bt.geometry,Nt=bt.material,rt=bt.group;if(Nt.side===Ht&&ot.layers.test(j.layers)){let Wt=Nt.side;Nt.side=ln,Nt.needsUpdate=!0,wi(ot,Q,j,He,Nt,rt),Nt.side=Wt,Nt.needsUpdate=!0,je=!0}}je===!0&&($e.updateMultisampleRenderTarget(he),$e.updateRenderTargetMipmap(he))}y.setRenderTarget(Ce,Te,Ke),y.setClearColor(I,N),ke!==void 0&&(j.viewport=ke),y.toneMapping=Ve}function ai(S,X,Q){let j=X.isScene===!0?X.overrideMaterial:null;for(let W=0,he=S.length;W<he;W++){let ye=S[W],Ce=ye.object,Te=ye.geometry,Ke=ye.group,Ve=ye.material;Ve.allowOverride===!0&&j!==null&&(Ve=j),Ce.layers.test(Q.layers)&&wi(Ce,X,Q,Te,Ve,Ke)}}function wi(S,X,Q,j,W,he){S.onBeforeRender(y,X,Q,j,W,he),S.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(y,X,Q,j,S,he),W.transparent===!0&&W.side===Ht&&W.forceSinglePass===!1?(W.side=ln,W.needsUpdate=!0,y.renderBufferDirect(Q,X,j,W,S,he),W.side=xi,W.needsUpdate=!0,y.renderBufferDirect(Q,X,j,W,S,he),W.side=Ht):y.renderBufferDirect(Q,X,j,W,S,he),S.onAfterRender(y,X,Q,j,W,he)}function An(S,X,Q){X.isScene!==!0&&(X=Ae);let j=Ue.get(S),W=p.state.lights,he=p.state.shadowsArray,ye=W.state.version,Ce=ne.getParameters(S,W.state,he,X,Q),Te=ne.getProgramCacheKey(Ce),Ke=j.programs;j.environment=S.isMeshStandardMaterial?X.environment:null,j.fog=X.fog,j.envMap=(S.isMeshStandardMaterial?zt:St).get(S.envMap||j.environment),j.envMapRotation=j.environment!==null&&S.envMap===null?X.environmentRotation:S.envMapRotation,Ke===void 0&&(S.addEventListener("dispose",te),Ke=new Map,j.programs=Ke);let Ve=Ke.get(Te);if(Ve!==void 0){if(j.currentProgram===Ve&&j.lightsStateVersion===ye)return Ti(S,Ce),Ve}else Ce.uniforms=ne.getUniforms(S),S.onBeforeCompile(Ce,y),Ve=ne.acquireProgram(Ce,Te),Ke.set(Te,Ve),j.uniforms=Ce.uniforms;let ke=j.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ke.clippingPlanes=de.uniform),Ti(S,Ce),j.needsLights=Ci(S),j.lightsStateVersion=ye,j.needsLights&&(ke.ambientLightColor.value=W.state.ambient,ke.lightProbe.value=W.state.probe,ke.directionalLights.value=W.state.directional,ke.directionalLightShadows.value=W.state.directionalShadow,ke.spotLights.value=W.state.spot,ke.spotLightShadows.value=W.state.spotShadow,ke.rectAreaLights.value=W.state.rectArea,ke.ltc_1.value=W.state.rectAreaLTC1,ke.ltc_2.value=W.state.rectAreaLTC2,ke.pointLights.value=W.state.point,ke.pointLightShadows.value=W.state.pointShadow,ke.hemisphereLights.value=W.state.hemi,ke.directionalShadowMap.value=W.state.directionalShadowMap,ke.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ke.spotShadowMap.value=W.state.spotShadowMap,ke.spotLightMatrix.value=W.state.spotLightMatrix,ke.spotLightMap.value=W.state.spotLightMap,ke.pointShadowMap.value=W.state.pointShadowMap,ke.pointShadowMatrix.value=W.state.pointShadowMatrix),j.currentProgram=Ve,j.uniformsList=null,Ve}function Kn(S){if(S.uniformsList===null){let X=S.currentProgram.getUniforms();S.uniformsList=ds.seqWithValue(X.seq,S.uniforms)}return S.uniformsList}function Ti(S,X){let Q=Ue.get(S);Q.outputColorSpace=X.outputColorSpace,Q.batching=X.batching,Q.batchingColor=X.batchingColor,Q.instancing=X.instancing,Q.instancingColor=X.instancingColor,Q.instancingMorph=X.instancingMorph,Q.skinning=X.skinning,Q.morphTargets=X.morphTargets,Q.morphNormals=X.morphNormals,Q.morphColors=X.morphColors,Q.morphTargetsCount=X.morphTargetsCount,Q.numClippingPlanes=X.numClippingPlanes,Q.numIntersection=X.numClipIntersection,Q.vertexAlphas=X.vertexAlphas,Q.vertexTangents=X.vertexTangents,Q.toneMapping=X.toneMapping}function Ei(S,X,Q,j,W){X.isScene!==!0&&(X=Ae),$e.resetTextureUnits();let he=X.fog,ye=j.isMeshStandardMaterial?X.environment:null,Ce=z===null?y.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:tr,Te=(j.isMeshStandardMaterial?zt:St).get(j.envMap||ye),Ke=j.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ve=!!Q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ke=!!Q.morphAttributes.position,je=!!Q.morphAttributes.normal,Mt=!!Q.morphAttributes.color,_t=Si;j.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(_t=y.toneMapping);let bt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ot=bt!==void 0?bt.length:0,He=Ue.get(j),Nt=p.state.lights;if(Je===!0&&($===!0||S!==M)){let Zt=S===M&&j.id===T;de.setState(j,S,Zt)}let rt=!1;j.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Nt.state.version||He.outputColorSpace!==Ce||W.isBatchedMesh&&He.batching===!1||!W.isBatchedMesh&&He.batching===!0||W.isBatchedMesh&&He.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&He.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&He.instancing===!1||!W.isInstancedMesh&&He.instancing===!0||W.isSkinnedMesh&&He.skinning===!1||!W.isSkinnedMesh&&He.skinning===!0||W.isInstancedMesh&&He.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&He.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&He.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&He.instancingMorph===!1&&W.morphTexture!==null||He.envMap!==Te||j.fog===!0&&He.fog!==he||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==de.numPlanes||He.numIntersection!==de.numIntersection)||He.vertexAlphas!==Ke||He.vertexTangents!==Ve||He.morphTargets!==ke||He.morphNormals!==je||He.morphColors!==Mt||He.toneMapping!==_t||He.morphTargetsCount!==ot)&&(rt=!0):(rt=!0,He.__version=j.version);let Wt=He.currentProgram;rt===!0&&(Wt=An(j,X,W));let yn=!1,sn=!1,On=!1,Ft=Wt.getUniforms(),an=He.uniforms;if(be.useProgram(Wt.program)&&(yn=!0,sn=!0,On=!0),j.id!==T&&(T=j.id,sn=!0),yn||M!==S){be.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Ft.setValue(U,"projectionMatrix",S.projectionMatrix),Ft.setValue(U,"viewMatrix",S.matrixWorldInverse);let Jt=Ft.map.cameraPosition;Jt!==void 0&&Jt.setValue(U,pe.setFromMatrixPosition(S.matrixWorld)),Ye.logarithmicDepthBuffer&&Ft.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ft.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,sn=!0,On=!0)}if(W.isSkinnedMesh){Ft.setOptional(U,W,"bindMatrix"),Ft.setOptional(U,W,"bindMatrixInverse");let Zt=W.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Ft.setValue(U,"boneTexture",Zt.boneTexture,$e))}W.isBatchedMesh&&(Ft.setOptional(U,W,"batchingTexture"),Ft.setValue(U,"batchingTexture",W._matricesTexture,$e),Ft.setOptional(U,W,"batchingIdTexture"),Ft.setValue(U,"batchingIdTexture",W._indirectTexture,$e),Ft.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&Ft.setValue(U,"batchingColorTexture",W._colorsTexture,$e));let dn=Q.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&le.update(W,Q,Wt),(sn||He.receiveShadow!==W.receiveShadow)&&(He.receiveShadow=W.receiveShadow,Ft.setValue(U,"receiveShadow",W.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(an.envMap.value=Te,an.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&X.environment!==null&&(an.envMapIntensity.value=X.environmentIntensity),sn&&(Ft.setValue(U,"toneMappingExposure",y.toneMappingExposure),He.needsLights&&Ai(an,On),he&&j.fog===!0&&ae.refreshFogUniforms(an,he),ae.refreshMaterialUniforms(an,j,k,H,p.state.transmissionRenderTarget[S.id]),ds.upload(U,Kn(He),an,$e)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ds.upload(U,Kn(He),an,$e),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ft.setValue(U,"center",W.center),Ft.setValue(U,"modelViewMatrix",W.modelViewMatrix),Ft.setValue(U,"normalMatrix",W.normalMatrix),Ft.setValue(U,"modelMatrix",W.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let Zt=j.uniformsGroups;for(let Jt=0,li=Zt.length;Jt<li;Jt++){let vn=Zt[Jt];Qe.update(vn,Wt),Qe.bind(vn,Wt)}}return Wt}function Ai(S,X){S.ambientLightColor.needsUpdate=X,S.lightProbe.needsUpdate=X,S.directionalLights.needsUpdate=X,S.directionalLightShadows.needsUpdate=X,S.pointLights.needsUpdate=X,S.pointLightShadows.needsUpdate=X,S.spotLights.needsUpdate=X,S.spotLightShadows.needsUpdate=X,S.rectAreaLights.needsUpdate=X,S.hemisphereLights.needsUpdate=X}function Ci(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(S,X,Q){let j=Ue.get(S);j.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Ue.get(S.texture).__webglTexture=X,Ue.get(S.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:Q,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,X){let Q=Ue.get(S);Q.__webglFramebuffer=X,Q.__useDefaultFramebuffer=X===void 0};let Yt=U.createFramebuffer();this.setRenderTarget=function(S,X=0,Q=0){z=S,C=X,F=Q;let j=!0,W=null,he=!1,ye=!1;if(S){let Te=Ue.get(S);if(Te.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(U.FRAMEBUFFER,null),j=!1;else if(Te.__webglFramebuffer===void 0)$e.setupRenderTarget(S);else if(Te.__hasExternalTextures)$e.rebindTextures(S,Ue.get(S.texture).__webglTexture,Ue.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let ke=S.depthTexture;if(Te.__boundDepthTexture!==ke){if(ke!==null&&Ue.has(ke)&&(S.width!==ke.image.width||S.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$e.setupDepthRenderbuffer(S)}}let Ke=S.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(ye=!0);let Ve=Ue.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ve[X])?W=Ve[X][Q]:W=Ve[X],he=!0):S.samples>0&&$e.useMultisampledRTT(S)===!1?W=Ue.get(S).__webglMultisampledFramebuffer:Array.isArray(Ve)?W=Ve[Q]:W=Ve,A.copy(S.viewport),O.copy(S.scissor),D=S.scissorTest}else A.copy(ue).multiplyScalar(k).floor(),O.copy(Ie).multiplyScalar(k).floor(),D=Ge;if(Q!==0&&(W=Yt),be.bindFramebuffer(U.FRAMEBUFFER,W)&&j&&be.drawBuffers(S,W),be.viewport(A),be.scissor(O),be.setScissorTest(D),he){let Te=Ue.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+X,Te.__webglTexture,Q)}else if(ye){let Te=X;for(let Ke=0;Ke<S.textures.length;Ke++){let Ve=Ue.get(S.textures[Ke]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ke,Ve.__webglTexture,Q,Te)}}else if(S!==null&&Q!==0){let Te=Ue.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Te.__webglTexture,Q)}T=-1},this.readRenderTargetPixels=function(S,X,Q,j,W,he,ye,Ce=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ue.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){be.bindFramebuffer(U.FRAMEBUFFER,Te);try{let Ke=S.textures[Ce],Ve=Ke.format,ke=Ke.type;if(!Ye.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=S.width-j&&Q>=0&&Q<=S.height-W&&(S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ce),U.readPixels(X,Q,j,W,ze.convert(Ve),ze.convert(ke),he))}finally{let Ke=z!==null?Ue.get(z).__webglFramebuffer:null;be.bindFramebuffer(U.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(S,X,Q,j,W,he,ye,Ce=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Ue.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te)if(X>=0&&X<=S.width-j&&Q>=0&&Q<=S.height-W){be.bindFramebuffer(U.FRAMEBUFFER,Te);let Ke=S.textures[Ce],Ve=Ke.format,ke=Ke.type;if(!Ye.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let je=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,je),U.bufferData(U.PIXEL_PACK_BUFFER,he.byteLength,U.STREAM_READ),S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ce),U.readPixels(X,Q,j,W,ze.convert(Ve),ze.convert(ke),0);let Mt=z!==null?Ue.get(z).__webglFramebuffer:null;be.bindFramebuffer(U.FRAMEBUFFER,Mt);let _t=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await vu(U,_t,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,je),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,he),U.deleteBuffer(je),U.deleteSync(_t),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,X=null,Q=0){let j=Math.pow(2,-Q),W=Math.floor(S.image.width*j),he=Math.floor(S.image.height*j),ye=X!==null?X.x:0,Ce=X!==null?X.y:0;$e.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,Q,0,0,ye,Ce,W,he),be.unbindTexture()};let oi=U.createFramebuffer(),Ri=U.createFramebuffer();this.copyTextureToTexture=function(S,X,Q=null,j=null,W=0,he=null){he===null&&(W!==0?(Yr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=W,W=0):he=0);let ye,Ce,Te,Ke,Ve,ke,je,Mt,_t,bt=S.isCompressedTexture?S.mipmaps[he]:S.image;if(Q!==null)ye=Q.max.x-Q.min.x,Ce=Q.max.y-Q.min.y,Te=Q.isBox3?Q.max.z-Q.min.z:1,Ke=Q.min.x,Ve=Q.min.y,ke=Q.isBox3?Q.min.z:0;else{let dn=Math.pow(2,-W);ye=Math.floor(bt.width*dn),Ce=Math.floor(bt.height*dn),S.isDataArrayTexture?Te=bt.depth:S.isData3DTexture?Te=Math.floor(bt.depth*dn):Te=1,Ke=0,Ve=0,ke=0}j!==null?(je=j.x,Mt=j.y,_t=j.z):(je=0,Mt=0,_t=0);let ot=ze.convert(X.format),He=ze.convert(X.type),Nt;X.isData3DTexture?($e.setTexture3D(X,0),Nt=U.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?($e.setTexture2DArray(X,0),Nt=U.TEXTURE_2D_ARRAY):($e.setTexture2D(X,0),Nt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,X.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,X.unpackAlignment);let rt=U.getParameter(U.UNPACK_ROW_LENGTH),Wt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),yn=U.getParameter(U.UNPACK_SKIP_PIXELS),sn=U.getParameter(U.UNPACK_SKIP_ROWS),On=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,bt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,bt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ke),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ve),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ke);let Ft=S.isDataArrayTexture||S.isData3DTexture,an=X.isDataArrayTexture||X.isData3DTexture;if(S.isDepthTexture){let dn=Ue.get(S),Zt=Ue.get(X),Jt=Ue.get(dn.__renderTarget),li=Ue.get(Zt.__renderTarget);be.bindFramebuffer(U.READ_FRAMEBUFFER,Jt.__webglFramebuffer),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let vn=0;vn<Te;vn++)Ft&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ue.get(S).__webglTexture,W,ke+vn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ue.get(X).__webglTexture,he,_t+vn)),U.blitFramebuffer(Ke,Ve,ye,Ce,je,Mt,ye,Ce,U.DEPTH_BUFFER_BIT,U.NEAREST);be.bindFramebuffer(U.READ_FRAMEBUFFER,null),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||Ue.has(S)){let dn=Ue.get(S),Zt=Ue.get(X);be.bindFramebuffer(U.READ_FRAMEBUFFER,oi),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ri);for(let Jt=0;Jt<Te;Jt++)Ft?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,dn.__webglTexture,W,ke+Jt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,dn.__webglTexture,W),an?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Zt.__webglTexture,he,_t+Jt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Zt.__webglTexture,he),W!==0?U.blitFramebuffer(Ke,Ve,ye,Ce,je,Mt,ye,Ce,U.COLOR_BUFFER_BIT,U.NEAREST):an?U.copyTexSubImage3D(Nt,he,je,Mt,_t+Jt,Ke,Ve,ye,Ce):U.copyTexSubImage2D(Nt,he,je,Mt,Ke,Ve,ye,Ce);be.bindFramebuffer(U.READ_FRAMEBUFFER,null),be.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else an?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(Nt,he,je,Mt,_t,ye,Ce,Te,ot,He,bt.data):X.isCompressedArrayTexture?U.compressedTexSubImage3D(Nt,he,je,Mt,_t,ye,Ce,Te,ot,bt.data):U.texSubImage3D(Nt,he,je,Mt,_t,ye,Ce,Te,ot,He,bt):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,he,je,Mt,ye,Ce,ot,He,bt.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,he,je,Mt,bt.width,bt.height,ot,bt.data):U.texSubImage2D(U.TEXTURE_2D,he,je,Mt,ye,Ce,ot,He,bt);U.pixelStorei(U.UNPACK_ROW_LENGTH,rt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Wt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,yn),U.pixelStorei(U.UNPACK_SKIP_ROWS,sn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,On),he===0&&X.generateMipmaps&&U.generateMipmap(Nt),be.unbindTexture()},this.initRenderTarget=function(S){Ue.get(S).__webglFramebuffer===void 0&&$e.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?$e.setTextureCube(S,0):S.isData3DTexture?$e.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?$e.setTexture2DArray(S,0):$e.setTexture2D(S,0),be.unbindTexture()},this.resetState=function(){C=0,F=0,z=null,be.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}};var yx={x:1630,y:1160},vx={x:3370,y:430},oa={x:1450,y:1320};function ju(n,e){if(!n||!e)return null;let t=[yx,vx].filter(g=>Math.hypot(g.x-n.x,g.y-n.y)<400).sort((g,x)=>Math.hypot(g.x-n.x,g.y-n.y)-Math.hypot(x.x-n.x,x.y-n.y))[0],i=0,r=1;if(t){let g=t.x-n.x,x=t.y-n.y;Math.abs(g)>Math.abs(x)?(i=Math.sign(g)||1,r=0):r=Math.sign(x)||1}let s=[0,280,320,360][e],a=[0,220,260,300][e],o=112,c={x:n.x-i*a/2,y:n.y-r*a/2},l=(g,x)=>({x:c.x+r*g+i*x,y:c.y-i*g+r*x}),h=(g,x,m,p)=>{let _=l(g,x);return{x:_.x,y:_.y,w:r?m:p,h:r?p:m}},u=[];if(e>=2){u.push(h(0,-a/2,s,10));for(let g of[-s/2,s/2])u.push(h(g,0,10,a))}if(e>=3){let g=(s-o)/2;for(let x of[-1,1])u.push(h(x*(o/2+g/2),a/2,g,10))}let f=e===1?[-1,1].flatMap(g=>[-1,1].map(x=>({...l(g*(s/2-8),x*(a/2-8)),radius:6}))):[],d=[h(-s/2+53,-a/2+64,52,90)];return e>=3&&d.push(h(s/2-53,-a/2+64,52,90)),{center:c,width:s,depth:a,door:o,fx:i,fy:r,yaw:Math.atan2(i,r),floor:h(0,0,s,a),walls:u,posts:f,beds:d,point:l,wallHeight:224,doorHeight:204,roofRidge:284}}var Mx=["#4c9cba","#df8168","#9974c7","#76b677","#e3b04c","#df71a7"],bx=["#e3b185","#be895f","#efc69d","#a67152"],Sx=["#463b32","#24282b","#99673b","#c9a465"];var ul=(n,e,t)=>Number.isInteger(n?.[e])&&n[e]>=0&&n[e]<t?n[e]:0;function qc(n,e){return n.shirt=Mx[ul(e,"shirt",6)],n.skin=bx[ul(e,"skin",4)],n.hair=Sx[ul(e,"hair",4)],n.style=ul(e,"style",3),n}function dl(n){return qc({},n)}var Qu={gather:1e3,fish:1500,cook:1200,wave:2e3,cheer:2e3};function ed(n,e){let t=Math.sin(e*Math.PI*4);return n==="gather"?{left:-.35,right:-1.1+t*.6,bend:.12}:n==="fish"?{left:-.8,right:-1.3+Math.sin(e*Math.PI)*.3,bend:0}:n==="cook"?{left:-.8,right:-.9+t*.25,bend:.06}:n==="wave"?{left:0,right:-2.4,bend:0,wave:t*.25}:n==="cheer"?{left:-2.4,right:-2.4,bend:0,wave:t*.12}:null}var wx="assets/materials-v018/",Yc=["paving","sand","grass","plaster","teal","roof","wood","rock","leaf"],Tx=new Set(["#a68854","#876742","#845f3f","#7d654b","#866642","#a98961","#765734","#9a743e","#786040","#8a6d49","#927652","#6e5942"]);function td(n){let e=document.createElement("canvas");e.width=n.width,e.height=n.height;let t=e.getContext("2d");t.scale(e.width/4600,e.height/2900),t.fillStyle="#0000ff",t.fillRect(0,0,4600,2900),t.fillStyle="#00ff00";for(let[i,r,s,a]of[[1750,1300,1420,840],[3380,500,450,240],[4100,2400,325,225]])t.beginPath(),t.ellipse(i,r,s,a,0,0,Math.PI*2),t.fill();return t.strokeStyle="#ff0000",t.lineWidth=100,t.lineCap="round",t.beginPath(),t.moveTo(1440,1190),t.bezierCurveTo(1520,1080,1750,1190,1980,1280),t.bezierCurveTo(2420,1510,2790,1440,3200,1320),t.stroke(),t.lineWidth=80,t.beginPath(),t.moveTo(1800,1180),t.bezierCurveTo(2100,930,2820,920,3220,730),t.lineTo(3370,480),t.stroke(),t.fillStyle="#ff0000",t.beginPath(),t.ellipse(1570,1160,290,200,0,0,Math.PI*2),t.fill(),e}function fl(n,e=8){let t=new Map,i=new Map,r=new Set,s=0,a=0,o=!0,c=0,l=new Ks;for(let g of Yc){let x=l.load(wx+g+".webp",()=>{s++,o=!0},void 0,()=>{a++,r.add(g),o=!0});x.userData.materialAssetName=g,x.colorSpace=Xt,x.wrapS=x.wrapT=Hr,x.anisotropy=Math.min(e,n.capabilities.getMaxAnisotropy()),t.set(g,x)}function h(g,x="#ffffff",m=1,p=.035){let _=g+x+m+p;if(!i.has(_)){let w=t.get(g).clone();w.repeat.set(m,m);let y=new Ut({color:x,map:w,bumpMap:w,bumpScale:p,roughness:g==="leaf"?.78:.93});t.get(g).addEventListener("dispose",()=>w.dispose());let P=t.get(g);y.userData.textureSource=P,i.set(_,y),o=!0}return i.get(_)}function u(g){return Tx.has(g)?h("wood","#ded4c4",1,.045):g==="#e2dbc7"?h("plaster","#f8f4e7",1,.027):g==="#ba7655"?h("roof","#e4d6c7",2,.055):g==="#a7c4b7"?h("teal","#e7ede3",1,.035):g==="#92968b"||g==="#777a6b"?h("rock","#ddd9cf",1,.065):null}function f(){if(!o)return;c++;let g=s+a<Yc.length;for(let x of i.values()){let m=x.userData.textureSource;m.image&&x.map.image!==m.image&&(x.map.source=m.source,x.map.needsUpdate=!0),x.map.image&&!x.userData.uploaded&&(x.map.needsUpdate=!0,x.userData.uploaded=!0),!x.userData.uploaded&&!r.has(m.userData.materialAssetName)&&(g=!0)}o=g}function d(g){g.colorSpace=Jn;let x=new Ut({color:"#ffffff",map:g,roughness:1});return x.onBeforeCompile=m=>{m.uniforms.uSand={value:t.get("sand")},m.uniforms.uGrass={value:t.get("grass")},m.uniforms.uPaving={value:t.get("paving")},m.fragmentShader=m.fragmentShader.replace("#include <common>",`#include <common>
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
        normal=normalize(normal+vec3(dFdx(relief)*.14,dFdy(relief)*.14,0.));`)},x}return{textures:t,surface:h,forColor:u,ground:d,update:f,stats:()=>({loaded:s,failed:a,total:Yc.length,materials:i.size,syncPending:o,syncPasses:c}),dispose(){for(let g of i.values())g.map.dispose(),g.dispose();for(let g of t.values())g.dispose()}}}function pl({x:n,z:e,surface:t,yaw:i,pitch:r,mode:s="first",distance:a=4.8,bob:o=0},c={position:new B,target:new B}){let l=t+1.64+o;return s==="first"?(c.position.set(n,l,e),c.target.set(n-Math.sin(i)*Math.cos(r),l-Math.sin(r),e-Math.cos(i)*Math.cos(r)),c):(c.target.set(n,t+1.3,e),c.position.set(n+Math.sin(i)*Math.cos(r)*a,c.target.y+.65+Math.sin(r)*a,e+Math.cos(i)*Math.cos(r)*a),c)}function Zc(n,e,t,i){return!(t>0)||!(i>0)?n:n.lerp(e,1-Math.exp(-t*i))}function ml(n,e,t,i){return i.length=0,n.intersectObjects(e,t,i),i}var Ex={};function gl(n,e,t,{height:i=18,offsetX:r=-12,offsetZ:s=-8}=Ex){let a=Math.abs(n.shadow.camera.right-n.shadow.camera.left),o=n.shadow.mapSize.width,c=a>0&&o>0?a/o:0,l=c?Math.round(e/c)*c:e,h=c?Math.round(t/c)*c:t;return n.position.set(l+r,i,h+s),n.target.position.set(l,0,h),c}function nd(n,e,t,i,r){let s=(()=>{let x=90210;return()=>(x=Math.imul(x,1664525)+1013904223>>>0)/4294967296})(),a=new Pt;a.setAttribute("position",new at([-.015,0,0,.015,0,0,-.012,.08,.01,.012,.08,.01,0,.16,.035],3)),a.setAttribute("uv",new at([0,0,1,0,0,.5,1,.5,.5,1],2)),a.setIndex([0,1,2,1,3,2,2,3,4]),a.computeVertexNormals();let o=new Ut({color:"#ffffff",side:Ht,roughness:1});o.defines={USE_UV:""};let c={value:0},l={value:new Tt(0,0,0,0)};o.onBeforeCompile=x=>{x.uniforms.uWind=c,x.uniforms.uBase=l,x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec4 uBase;`),x.vertexShader=x.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec3 grassWorld=(instanceMatrix*vec4(position,1.)).xyz;
      transformed.x+=sin(uWind+grassWorld.x*.8+grassWorld.z)*position.y*.13;
      if(abs(grassWorld.x-uBase.x)<uBase.z&&abs(grassWorld.z-uBase.y)<uBase.w)transformed.y-=100.;`),x.fragmentShader=x.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=.7+.35*vUv.y;`)};let h=r?2800:5500,u=new At(a,o,h);u.receiveShadow=!0,u.frustumCulled=!1;let f=i.getContext("2d").getImageData(0,0,i.width,i.height).data,d=new Et,g=0;for(let x=0;x<h*8&&g<h;x++){let m=s()*4600,p=s()*2900,_=(Math.min(i.height-1,Math.floor(p/2900*i.height))*i.width+Math.min(i.width-1,Math.floor(m/4600*i.width)))*4;if(f[_+1]<f[_]+12||f[_+1]<85)continue;let w=m/t,y=p/t,P=e(w,y);P<.1||(d.position.set(w,P-.015,y),d.rotation.set(0,s()*Math.PI*2,0),d.scale.setScalar(.7+s()*.8),d.updateMatrix(),u.setMatrixAt(g,d.matrix),u.setColorAt(g,new it().setHSL(.2+s()*.055,.3+s()*.15,.22+s()*.08)),g++)}return u.count=g,n.add(u),{update(x,m){c.value=x,m?l.value.set(m.floor.x/t,m.floor.y/t,m.floor.w/(t*2)+.1,m.floor.h/(t*2)+.1):l.value.set(0,0,0,0)},dispose(){n.remove(u),a.dispose(),o.dispose(),u.dispose()}}}function id(n,e,{cube:t,tube:i},r){let s=e.width/80,a=e.depth/80,o=e.wallHeight/80,c=e.roofRidge/80;for(let u of n.children)u.name==="floor"&&(u.material=r.surface("paving","#e5ded0",2,.045)),u.name==="wall"&&(u.material=r.surface("plaster","#f8f4e7",1,.025)),u.name==="roof"&&(u.material=r.surface("roof","#efe2d5",2,.045));for(let u of[-1,1]){let f=t(n,"#876742",[u*s/2,o-.09,0],[.13,.16,a+.18]);if(f.name="trim",e.walls.length){let d=t(n,"#a7c4b7",[u*(s/2+.064),1.55,-a*.16],[.02,.9,.7]);d.name="shutter";for(let g=0;g<8;g++)t(n,"#876742",[u*(s/2+.08),1.17+g*.11,-a*.16],[.025,.035,.69]);for(let g of[-a*.16-.39,-a*.16+.39])t(n,"#e2dbc7",[u*(s/2+.078),1.56,g],[.045,1.02,.065])}}let l=i(n,"#ba7655",[0,c+.02,0],[.09,a+.42,.09]);l.rotation.x=Math.PI/2,l.name="ridge";let h=t(n,"#e2dbc7",[0,o-.05,-a/2-.066],[s+.08,.16,.06]);return h.name="trim",n}var $n=Object.freeze([{id:"home",name:"Main Island",x:0,z:0,radius:480,biome:"mixed",dock:{x:390,z:100},landmarks:["village","player-base","market","harbour"]},{id:"jungle",name:"Jungle Island",x:1150,z:-450,radius:270,biome:"rainforest",dock:{x:930,z:-380},landmarks:["cave","waterfall","hidden-cache"]},{id:"fortress",name:"Fortress Island",x:1900,z:550,radius:240,biome:"rocky",dock:{x:1690,z:490},landmarks:["guarded-estate","rescue-mission"]},{id:"highlands",name:"Highlands Island",x:-1050,z:-850,radius:290,biome:"highlands",dock:{x:-840,z:-710},landmarks:["mine","mountain-trail"]},{id:"smugglers",name:"Smugglers Island",x:-1550,z:250,radius:230,biome:"mangrove",dock:{x:-1340,z:220},landmarks:["warehouse","secret-passage"]},{id:"paradise",name:"Paradise Island",x:700,z:1350,radius:250,biome:"beach",dock:{x:600,z:1120},landmarks:["cabins","reef"]}]),yM=Object.freeze(Object.fromEntries($n.map(n=>[n.id,n])));function rd(n,e){return!Number.isFinite(n)||!Number.isFinite(e)?null:$n.find(t=>Math.hypot(n-t.x,e-t.z)<=t.radius)??null}function gs(n,e){if(Number.isFinite(n.coastSeed)){let i=n.coastSeed;return .855+.07*Math.sin(e*2+i)+.045*Math.cos(e*3-i)+.025*Math.sin(e*7+i)}let t=n.x*.002+n.z*.001;return .955+.023*Math.sin(e*3+t)+.012*Math.cos(e*5-t)}function yr(n,e,t){let i=(e-n.x)/n.radius,r=(t-n.z)/n.radius,s=Math.hypot(i,r);if(s>=1)return-.32;let a=Math.atan2(r,i),o=gs(n,a),c=Math.max(0,Math.min(1,(o-s)/.12));if(s>o)return-.32*Math.min(1,(s-o)/.04);if(Number.isFinite(n.relief)){let d=(o-s)*n.radius/20,g=Math.min(1,d/18),x=Math.max(0,Math.min(1,(d-18)/85)),m=Math.exp(-((i+.18)**2*4+(r-.16)**2*5))*.7+Math.exp(-((i-.36)**2*11+(r+.25)**2*8))*.42;return .005+g*.65+x*x*(3-2*x)*m*n.relief}let l=Math.max(0,Math.min(1,(.79-s)/.22)),h=l*l*(3-2*l),u=Math.exp(-((i+.18)**2*4+(r-.16)**2*5))*.7+Math.exp(-((i-.36)**2*11+(r+.25)**2*8))*.42,f=n.biome==="highlands"?8.5:n.biome==="rainforest"?2.2:n.biome==="rocky"?1.6:.55;return .005+c*.35+h*u*f}function Jc(n,{segments:e=48}={}){if(!Number.isInteger(e)||e<8||e>256)throw new RangeError("segments must be 8..256");let t=[0,yr(n,n.x,n.z),0],i=[.5,.5],r=[],s=Math.ceil(e/2);for(let l=1;l<=s;l++)for(let h=0;h<=e;h++){let u=h/e*Math.PI*2,f=Number.isFinite(n.relief)?gs(n,u)+.03:1.02,d=n.radius*f*l/s,g=Math.cos(u)*d,x=Math.sin(u)*d;t.push(g,yr(n,n.x+g,n.z+x),x),i.push(.5+g/(n.radius*2.04),.5+x/(n.radius*2.04));let m=1+(l-1)*(e+1)+h;if(h!==e)if(l===1)r.push(0,m+1,m);else{let p=m-(e+1);r.push(p,m+1,m,p,p+1,m+1)}}let a=new Pt;a.setAttribute("position",new at(t,3)),a.setAttribute("uv",new at(i,2)),a.setIndex(r),a.computeVertexNormals();let o=new Ut({color:n.biome==="beach"?11779972:5538650,roughness:1,side:Ht}),c=new ft(a,o);return c.name="archipelago-"+n.id,c.position.set(n.x,0,n.z),c.receiveShadow=!0,c}function sd(n={}){let e=new Oe;e.name="archipelago-terrain";for(let t of $n)e.add(Jc(t,n));return e}function xs(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,c=new Pt,l=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=n[f].attributes.position.count}c.setIndex(u)}for(let h in s){let u=ad(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<a[h].length;++x)d.push(a[h][x][f]);let g=ad(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function ad(n){let e,t,i,r=-1,s=0;for(let l=0;l<n.length;++l){let h=n[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let a=new e(s),o=new jt(a,t,i),c=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){let x=h.getComponent(f,g);o.setComponent(f+u,g,x)}}else a.set(h.array,c);c+=h.count*t}return r!==void 0&&(o.gpuType=r),o}var la=Object.freeze([{x:95,z:-95,w:105,d:80,h:4.4,color:"#d8b8a3",shutter:"#557f7b"},{x:-55,z:-115,w:110,d:85,h:5.8,color:"#d5dfd4",shutter:"#73868b"},{x:-210,z:-95,w:100,d:90,h:4.5,color:"#e6cf97",shutter:"#426d73"},{x:100,z:110,w:100,d:90,h:5.6,color:"#9fbdac",shutter:"#705b48"},{x:-70,z:130,w:110,d:85,h:4.4,color:"#dfc6b5",shutter:"#587e7c"},{x:-225,z:110,w:90,d:75,h:4.5,color:"#c5d1d0",shutter:"#7a6a58"}]);function vr(n,e,t=la){if(e!=="home")return!1;for(let i of t)if(Math.abs(n.x-i.x)<i.w/2+7&&Math.abs(n.z-i.z)<i.d/2+7)return!0;return!1}var Ax=`
float hash21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise21(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hash21(i),hash21(i+vec2(1.,0.)),f.x),mix(hash21(i+vec2(0.,1.)),hash21(i+vec2(1.)),f.x),f.y);}
float fbm21(vec2 p){float f=0.,a=.5;for(int i=0;i<4;i++){f+=a*noise21(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`,$c=`
float hashFast(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noiseFast(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hashFast(i),hashFast(i+vec2(1.,0.)),f.x),mix(hashFast(i+vec2(0.,1.)),hashFast(i+vec2(1.)),f.x),f.y);}
float fbmFast(vec2 p){float f=0.,a=.535714;for(int i=0;i<3;i++){f+=a*noiseFast(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`;function xl(n,{size:e=900,segments:t=72,coastSeeds:i=[],mobile:r=!1}={}){let s=Array.from({length:9},(f,d)=>new Tt(...n[d]||[1e4,1e4,1,1])),a=r?$c:Ax,o=r?"fbmFast(p*.52+vec2(uTime*.04,0.))":"fbm21(p*.52+vec2(uTime*.04,0.))",c=r?"0.":"(noise21(p*1.6+vec2(uTime*.09,-uTime*.07))-.5)*.10",l=new wn({fog:!0,uniforms:{...sl.clone(ve.fog),uTime:{value:0},uEye:{value:new B},uCoasts:{value:s},uCoastSeeds:{value:Array.from({length:9},(f,d)=>i[d]??-100)}},vertexShader:`uniform float uTime;varying vec3 vWater;
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
    }`}),h=new Pn(e,e,t,t);h.rotateX(-Math.PI/2),l.userData.fragmentNoiseLayers=r?3:7,l.userData.mobileQuality=r;let u=new ft(h,l);return u.name="tropical-ocean",u.position.y=-.045,{mesh:u,update(f,d){l.uniforms.uTime.value=f,l.uniforms.uEye.value.copy(d)},dispose(){h.dispose(),l.dispose()}}}function _l(n=420){let e=new wn({side:ln,depthWrite:!1,uniforms:{uTime:{value:0}},vertexShader:"varying vec3 vSky;void main(){vSky=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float uTime;varying vec3 vSky;${$c}
  void main(){vec3 dir=normalize(vSky);float h=dir.y;
    vec3 col=mix(vec3(.65,.79,.84),vec3(.095,.34,.59),smoothstep(-.02,.8,h));
    vec2 p=dir.xz/max(.1,h)*2.3+vec2(uTime*.006,uTime*.0025);float n=fbmFast(p);
    float cloud=smoothstep(.52,.70,n)*smoothstep(.025,.20,h);
    col=mix(col,mix(vec3(.62,.69,.71),vec3(.98,.96,.89),smoothstep(.50,.70,n)),cloud);
    float sun=pow(max(dot(dir,normalize(vec3(-.55,.82,-.36))),0.),70.);col+=vec3(.35,.24,.12)*sun;
    gl_FragColor=vec4(col,1.);
    #include <colorspace_fragment>
  }`});e.userData.fragmentNoiseLayers=3;let t=new ft(new Tn(n,32,20),e);return t.name="tropical-sky",t.renderOrder=-10,t.frustumCulled=!1,t}function yl(n,e){let t=new Ut({roughness:1,color:"#ffffff",vertexColors:!0});return t.userData.fragmentNoiseLayers=3,t.onBeforeCompile=i=>{Object.assign(i.uniforms,{uGrass:{value:n.textures.get("grass")},uSand:{value:n.textures.get("sand")},uRock:{value:n.textures.get("rock")}}),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vIslandPosition;varying vec3 vIslandNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vIslandPosition=position;vIslandNormal=normalize(normal*vec3(${e.toFixed(1)},1.,${e.toFixed(1)}));`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vIslandPosition;varying vec3 vIslandNormal;uniform sampler2D uGrass;uniform sampler2D uSand;uniform sampler2D uRock;${$c}`).replace("#include <map_fragment>",`
        vec2 uv=vIslandPosition.xz/${e.toFixed(1)}*.34;
        float n=fbmFast(uv*.46);vec2 offset=vec2(17.3,8.1);
        vec3 grass=mix(texture2D(uGrass,uv).rgb,texture2D(uGrass,uv*1.37+offset).rgb,.38);
        vec3 sand=texture2D(uSand,uv*.8).rgb,rock=texture2D(uRock,uv*.62).rgb;
        float beach=1.-smoothstep(.025,.34,vIslandPosition.y);
        float slope=1.-abs(normalize(vIslandNormal).y);float cliff=smoothstep(.44,.76,slope)*(1.-beach);
        diffuseColor.rgb*=mix(mix(grass,sand,beach),rock,cliff)*(.82+n*.28);`)},t.customProgramCacheKey=()=>`tropical-island-${e}`,t}function od(n=14){let e=[],t=[],i=[],r=(a,o,c,l)=>{let h=o*2.2,u=Math.sin(o*Math.PI)*.55-o*o*.95;return[Math.sin(a)*h+Math.cos(a)*l*c,u-l*.17,Math.cos(a)*h-Math.sin(a)*l*c]};for(let a=0;a<9;a++){let o=a*Math.PI*2/9;for(let c=1;c<n;c++)for(let l of[-1,1]){let h=c/n,u=Math.sin(h*Math.PI)*.44,f=e.length/3;e.push(...r(o,h-.03,l,.012),...r(o,h-.09,l,u),...r(o,h+.025,l,u*.87),...r(o,h+.03,l,.012)),t.push(h,0,h,.9,h+.03,1,h+.03,0),i.push(f,f+1,f+2,f,f+2,f+3)}}let s=new Pt;return s.setAttribute("position",new at(e,3)),s.setAttribute("uv",new at(t,2)),s.setIndex(i),s.computeVertexNormals(),s}var nn=(n,e=0)=>{let t=Math.sin((n+1)*12.9898+(e+1)*78.233)*43758.5453;return t-Math.floor(t)};function Cx(n,e){for(let t of n){let i=t.userData.lod,r=i.distance+i.radius,s=e.distanceToSquared(i.center)<=r*r?"high":"low";s!==i.level&&(t.geometry=i[s],i.level=s,i.shadowReceiverLod&&(t.receiveShadow=s==="high"))}}function Rx(n,e,t,i=0){if(n.ready){let r=n.x-t.x,s=n.y-t.y,a=n.z-t.z;if(i>0?r*r+s*s+a*a<i*i:r===0&&s===0&&a===0)return!1}return n.ready=!0,n.x=t.x,n.y=t.y,n.z=t.z,Cx(e,t),!0}function vl(n,e,{scale:t,height:i,surfaces:r,small:s=!1,clear:a=()=>!1,dense:o=!1,lod:c=!1}={}){let l=(M,A)=>{let O=new kt(.085,.16,1,M,A);O.translate(0,.5,0);let D=O.attributes.position;for(let I=0;I<D.count;I++)D.setX(I,D.getX(I)+D.getY(I)**2*.2);return O.computeVertexNormals(),O},h=l(8,6),u=c?l(6,3):h,f=r.surface("wood","#bc9c71",2,.03),d=r.surface("leaf","#9cb384",1,.01).clone();d.side=Ht;let g=od(s?9:12),x=c?od(s?6:7):g,m=[],p=[],_=new Et,w=650/t,y=0;for(let M of e){let A=[];for(let D=0;D<(o?M.id==="home"?s?700:1500:s?280:650:s?22:42);D++){let I=D+M.x*.013+M.z*.017,N=D*2.39996+M.x*.001+(nn(I,0)-.5)*.72,G=o?Math.min(.93,Math.max(.12,Math.sqrt(D*.6180339%1)*.91+(nn(I,1)-.5)*.09)):Math.min(.91,.34+D%7*.075+(nn(I,1)-.5)*.08),H=M.radius*G,k=M.x+Math.sin(N)*H,ie=M.z+Math.cos(N)*H;a(M,k,ie)||i(k,ie)<.32||A.push({x:k/t,z:ie/t,y:i(k,ie),a:N,h:3.45+nn(I,2)*2.15,size:.7+nn(I,3)*.43,leanX:(nn(I,4)-.5)*.12,leanZ:(nn(I,5)-.5)*.14,index:y++})}if(!A.length)continue;let O=Array.from({length:4},()=>[]);A.forEach(D=>O[(D.x>=M.x/t?1:0)+(D.z>=M.z/t?2:0)].push(D)),O.forEach((D,I)=>{if(!D.length)return;let N=new At(h,f,D.length),G=new At(g,d,D.length);N.name=m.length?`grove-trunks-${M.id}-${I+1}`:"grove-trunks",G.name=p.length?`grove-fronds-${M.id}-${I+1}`:"grove-fronds";for(let H=0;H<D.length;H++){let k=D[H];_.position.set(k.x,k.y,k.z),_.rotation.set(k.leanX,k.a,k.leanZ),_.scale.set(k.size,k.h,k.size),_.updateMatrix(),N.setMatrixAt(H,_.matrix),_.position.set(k.x+.2*k.size*Math.cos(k.a),k.y+k.h,k.z-.2*k.size*Math.sin(k.a)),_.rotation.set(k.leanX*.35,k.a+nn(k.index,6)*Math.PI*.35,k.leanZ*.35),_.scale.setScalar(k.size),_.updateMatrix(),G.setMatrixAt(H,_.matrix),G.setColorAt(H,new it().setHSL(.245+nn(k.index,7)*.065,.22+nn(k.index,8)*.13,.59+nn(k.index,9)*.12))}for(let H of[N,G])H.userData.cullingRegion={island:M.id,sector:I+1},H.castShadow=!0,H.instanceMatrix.needsUpdate=!0,H.computeBoundingSphere(),n.add(H);N.userData.lod={high:h,low:u,distance:w,level:"high",shadowReceiverLod:c,center:N.boundingSphere.center.clone(),radius:N.boundingSphere.radius},G.userData.lod={high:g,low:x,distance:w,level:"high",center:G.boundingSphere.center.clone(),radius:G.boundingSphere.radius},N.receiveShadow=!0,G.receiveShadow=!1,m.push(N),p.push(G)})}let P=new sr(1,1),C=r.surface("rock","#a9aaa0",2,.08),F=[];for(let M of e){let A=[];for(let D=0;D<(s?14:24);D++){let I=D+M.x*.019+M.z*.023,N=D*2.399+.6+(nn(I,10)-.5)*.62,G=M.radius*(.84+nn(I,11)*.1),H=M.x+Math.sin(N)*G,k=M.z+Math.cos(N)*G;a(M,H,k)||A.push({x:H/t,y:i(H,k)-.1,z:k/t,a:N,j:D,seed:I})}if(!A.length)continue;let O=new At(P,C,A.length);O.name=F.length?"shore-rocks-"+M.id:"shore-rocks";for(let D=0;D<A.length;D++){let I=A[D];_.position.set(I.x,I.y,I.z),_.rotation.set(nn(I.seed,12)*1.2,I.a,nn(I.seed,13)*1.1),_.scale.set(.27+nn(I.seed,14)*.5,.2+nn(I.seed,15)*.43,.31+nn(I.seed,16)*.53),_.updateMatrix(),O.setMatrixAt(D,_.matrix)}O.castShadow=O.receiveShadow=!0,O.instanceMatrix.needsUpdate=!0,O.computeBoundingSphere(),n.add(O),F.push(O)}let z=[...m,...p],T={};return{trees:m[0],foliage:p[0],treeBatches:m,foliageBatches:p,rocks:F[0],rockBatches:F,lodGeometries:[h,u,g,x],update(M,A=0){return Rx(T,z,M,A)}}}function Ml(n,{scale:e,height:t,surfaces:i,helpers:r,village:s=la,paths:a,marketPoint:o={x:290,z:-30}}){let{cube:c,tube:l,ell:h}=r,u=[];function f(A){let O=new Map;A.updateMatrix();for(let D of[...A.children])if(D.isMesh){D.updateMatrix();let I=D.geometry.clone().applyMatrix4(D.matrix);O.has(D.material)||O.set(D.material,[]),O.get(D.material).push(I),A.remove(D)}for(let[D,I]of O){let N=xs(I,!1);I.forEach(H=>H.dispose());let G=new ft(N,D);G.castShadow=G.receiveShadow=!0,A.add(G)}}function d(A,O){let D=new Map,I=0;n.updateMatrixWorld(!0),O.updateMatrixWorld(!0);let N=new It().copy(O.matrixWorld).invert(),G=new It;for(let H of A)for(let k of[...H.children])if(k.isMesh){k.updateMatrixWorld(!0),G.multiplyMatrices(N,k.matrixWorld);let ie=k.geometry.clone().applyMatrix4(G);D.has(k.material)||D.set(k.material,[]),D.get(k.material).push(ie),I++,H.remove(k),k.geometry.dispose()}for(let[H,k]of D){let ie=xs(k,!1);k.forEach(ue=>ue.dispose()),ie.computeBoundingSphere();let se=new ft(ie,H);se.castShadow=se.receiveShadow=!0,O.add(se)}return{sourceBatches:I,materialBatches:O.children.length}}function g(A,O=n,D=!0,I=0){let N=new Oe;N.name="village-house",O.add(N),N.position.set(D?A.x/e:A.x,D?t(A.x,A.z):0,D?A.z/e:A.z),N.rotation.y=A.facing??(A.z>60?Math.PI:0);let G=A.w/e,H=A.d/e,k=A.h,ie=c(N,A.color,[0,k/2,0],[G,k,H]);ie.material=i.surface("plaster",A.color,2,.035);let se=i.surface("roof","#d5bbab",2,.065);for(let $ of[-1,1]){let K=c(N,"#ba7655",[$*G/4,k+.43,0],[Math.hypot(G/2+.25,.85),.13,H+.5]);K.rotation.z=-$*Math.atan2(.85,G/2+.25),K.material=se,c(N,"#a75f45",[$*(G/2+.13),k+.01,0],[.14,.22,H+.58])}let ue=l(N,"#a75f45",[0,k+.86,0],[.12,H+.62,.12]);ue.rotation.x=Math.PI/2;for(let $ of[.17,k*.52,k-.16])c(N,"#e2dbc7",[0,$,H/2+.035],[G+.16,.14,.1]);let Ie=k>5?2:1;for(let $=0;$<Ie;$++)for(let K of[-G*.31,G*.31]){let pe=1.5+$*2.35,Ee=H/2+.08,Ae=c(N,"#415d63",[K,pe,Ee],[.75,1.2,.05]);Ae.material.roughness=.24,Ae.material.metalness=.1,c(N,"#e2dbc7",[K,pe,Ee+.045],[.065,1.15,.075]),c(N,"#e2dbc7",[K,pe,Ee+.046],[.7,.065,.076]);for(let tt of[-1,1]){let Le=c(N,A.shutter,[K+tt*.56,pe,Ee+.03],[.34,1.3,.07]);Le.rotation.y=tt*.24;for(let U=0;U<9;U++)c(N,"#876742",[K+tt*.56,pe-.52+U*.13,Ee+.085],[.33,.024,.04])}if(c(N,"#e2dbc7",[K,pe-.68,Ee],[1.7,.1,.16]),c(N,"#e2dbc7",[K,pe+.68,Ee],[1.7,.13,.15]),$===0){let tt=c(N,"#876742",[K,.79,H/2+.25],[1.28,.2,.3]);if(tt.rotation.x=-.04,h)for(let Le=-2;Le<=2;Le++){let U=h(N,Le%2?"#6f8f58":"#88a866",[K+Le*.22,.99+Math.abs(Le)*.025,H/2+.27],[.17,.31,.15]);U.rotation.z=Le*.14}if(Ie===1){let Le=c(N,A.shutter,[K,2.32,H/2+.46],[1.55,.08,.82]);Le.rotation.x=-.15,c(N,A.shutter,[K,2.2,H/2+.83],[1.55,.17,.07])}}}c(N,"#5a4b3d",[0,1.05,H/2+.06],[.78,2.1,.1]);for(let $ of[.55,1.42])for(let K of[-.19,.19])c(N,"#745f4c",[K,$,H/2+.125],[.29,.6,.045]);for(let $ of[-.48,.48])c(N,"#e2dbc7",[$,1.08,H/2+.11],[.16,2.22,.18]);c(N,"#e2dbc7",[0,2.18,H/2+.11],[1.1,.16,.18]),c(N,"#c9baa1",[0,.07,H/2+.34],[1.16,.14,.58]),h&&h(N,"#caa457",[.27,1.04,H/2+.19],[.055,.055,.035]);let Ge=(I%2?-1:1)*G*.42,ut=H/2+.55,Je=l(N,"#e2dbc7",[Ge,2.91,H/2+.34],[.035,.7,.035]);Je.rotation.x=Math.PI/2,c(N,A.shutter,[Ge,2.62,ut],[.09,.56,.64]);for(let $ of[-1,1]){let K=c(N,"#e2dbc7",[Ge+$*.052,2.62,ut],[.018,.22,.24]);K.rotation.x=(I%3-1)*.22}if(Ie===2){c(N,"#e2dbc7",[0,2.75,H/2+.48],[G+.15,.18,.9]);for(let $=0;$<=10;$++)l(N,"#e2dbc7",[-G/2+$*G/10,3.18,H/2+.84],[.034,.76,.034]);c(N,"#e2dbc7",[0,3.58,H/2+.84],[G+.17,.08,.1])}for(let $ of[-1,1])for(let K=0;K<Ie;K++)for(let pe of[-H*.26,H*.26])c(N,A.shutter,[$*(G/2+.03),1.5+K*2.35,pe],[.06,1.22,.8]),c(N,"#e2dbc7",[$*(G/2+.07),.82+K*2.35,pe],[.16,.1,1.05]),c(N,"#e2dbc7",[$*(G/2+.07),2.18+K*2.35,pe],[.16,.12,1.05]);return N.userData.facadeDetails={planters:2,awnings:Ie===1?2:0,balcony:Ie===2,windowPanes:Ie*8,doorPanels:4,doorway:!0,ridgeCaps:1,eaveFascias:2,hangingSigns:1,signMarks:2,signClearance:!0},f(N),u.push(N),N}s.forEach((A,O)=>g(A,n,!0,O));let x=new Oe;x.name="village-buildings",n.add(x),x.userData.batchDetails={sourceHouses:u.length,...d(u,x)},x.userData.cameraBlocker=!0;let m=new Oe;m.name="village-overhead-laundry",n.add(m);let p=["#bd6f53","#e8d99e","#587e7c","#73868b"],_=[...s].sort((A,O)=>A.z-O.z),w=Math.ceil(_.length/2),y=0,P=0;for(let A of[_.slice(0,w),_.slice(w)]){let O=[...A].sort((D,I)=>D.x-I.x);for(let D=1;D<O.length;D++){let I=O[D-1],N=O[D],G=I.x+I.w/2,H=N.x-N.w/2;if(H<=G)continue;let k=(G+H)/2,ie=(I.z+N.z)/2,se=Math.max(t(k,ie)+3.35,3.55),ue=(H-G)/e,Ie=l(m,"#5a4b3d",[k/e,se,ie/e],[.012,ue,.012]);Ie.rotation.z=Math.PI/2,y++;for(let Ge=0;Ge<3;Ge++){let ut=(G+(H-G)*(Ge+1)/4)/e,Je=p[(y+Ge)%p.length],$=c(m,Je,[ut,se-.24-Ge%2*.05,ie/e],[.46,.48+Ge%2*.1,.025]);$.rotation.z=(Ge-1)*.06,P++}}}m.userData.laundryDetails={lines:y,garments:P,clearance:!0},f(m);function C(A,O,D=!1){let I=[],N=[],G=[],H=0;for(let se=0;se<A.length;se++){let ue=A[Math.max(0,se-1)],Ie=A[Math.min(A.length-1,se+1)],Ge=A[se],ut=Ie.x-ue.x,Je=Ie.z-ue.z,$=Math.hypot(ut,Je)||1;se&&(H+=Math.hypot(Ge.x-A[se-1].x,Ge.z-A[se-1].z)/e);for(let K of[-1,1]){let pe=Ge.x-Je/$*O/2*K,Ee=Ge.z+ut/$*O/2*K;I.push(pe/e,t(pe,Ee)+.018,Ee/e),N.push((K+1)/2*O/e,H)}if(se){let K=se*2;G.push(K-2,K-1,K,K-1,K+1,K)}}let k=new Pt;k.setAttribute("position",new at(I,3)),k.setAttribute("uv",new at(N,2)),k.setIndex(G),k.computeVertexNormals();let ie=new ft(k,i.surface("paving","#ded9c9",.75,.045));if(ie.name="village-path",ie.receiveShadow=!0,n.add(ie),D){let se=Math.max(4,O*.08),ue=new on(1,1,1),Ie=new At(ue,i.surface("rock","#dad4c6",1.2,.025),(A.length-1)*2),Ge=new Et;Ie.name="village-curb";let ut=0;for(let Je=1;Je<A.length;Je++){let $=A[Je-1],K=A[Je],pe=K.x-$.x,Ee=K.z-$.z,Ae=Math.hypot(pe,Ee),tt=-Ee/Ae,Le=pe/Ae;for(let U of[-1,1]){let yt=($.x+K.x)/2+tt*(O/2+se/2)*U,nt=($.z+K.z)/2+Le*(O/2+se/2)*U;Ge.position.set(yt/e,t(yt,nt)+.065,nt/e),Ge.rotation.set(0,Math.atan2(pe,Ee),0),Ge.scale.set(se/e,.1,Ae/e+.025),Ge.updateMatrix(),Ie.setMatrixAt(ut++,Ge.matrix)}}Ie.castShadow=Ie.receiveShadow=!0,Ie.instanceMatrix.needsUpdate=!0,Ie.computeBoundingSphere(),n.add(Ie)}}let F=[];for(let A of a||[{points:Array.from({length:31},(O,D)=>({x:385-D*21,z:36+Math.sin(D*.19)*9})),width:55,curb:!0},{points:Array.from({length:15},(O,D)=>({x:23,z:-280+D*39})),width:40,curb:!0}]){let O=[A.points[0]];for(let D=1;D<A.points.length;D++){let I=A.points[D-1],N=A.points[D],G=Math.ceil(Math.hypot(N.x-I.x,N.z-I.z)/30);for(let H=1;H<=G;H++)O.push({x:I.x+(N.x-I.x)*H/G,z:I.z+(N.z-I.z)*H/G})}if(C(O,A.width,A.curb),A.curb)for(let D=3;D<A.points.length-3;D+=6){let I=A.points[D-1],N=A.points[D+1],G=A.points[D],H=N.x-I.x,k=N.z-I.z,ie=Math.hypot(H,k)||1,se=Math.floor(D/6)%2?1:-1,ue=A.width/2+9,Ie=G.x-k/ie*ue*se,Ge=G.z+H/ie*ue*se;F.push({x:Ie/e,y:t(Ie,Ge),z:Ge/e})}}if(F.length){let A=new kt(1,1,1,10),O=new Tn(1,12,8),D=new Et,I=new At(A,new Ut({color:"#394447",roughness:.62,metalness:.38}),F.length),N=new At(O,new Ut({color:"#ffe4a8",emissive:"#ffb85c",emissiveIntensity:.72,roughness:.34}),F.length);I.name="village-lamp-posts",N.name="village-lamp-globes";for(let G=0;G<F.length;G++){let H=F[G];D.position.set(H.x,H.y+1.35,H.z),D.scale.set(.065,2.7,.065),D.updateMatrix(),I.setMatrixAt(G,D.matrix),D.position.set(H.x,H.y+2.76,H.z),D.scale.set(.18,.22,.18),D.updateMatrix(),N.setMatrixAt(G,D.matrix)}I.castShadow=I.receiveShadow=!0,N.castShadow=!1,N.receiveShadow=!0;for(let G of[I,N])G.instanceMatrix.needsUpdate=!0,G.computeBoundingSphere(),n.add(G)}let z=new Oe;z.name="harbor-market",z.position.set(o.x/e,t(o.x,o.z),o.z/e),n.add(z);for(let A of[-1.4,1.4])for(let O of[-.6,.6])l(z,"#876742",[A,1.2,O],[.045,2.4,.045]);let T=c(z,"#cc8660",[0,2.35,0],[3.2,.07,1.8]);T.rotation.x=.07;for(let A=0;A<6;A++){let O=A%2?"#f3dfbe":"#bd6f53",D=(A-2.5)*.53,I=c(z,O,[D,2.395,0],[.53,.035,1.76]);I.rotation.x=.07,c(z,O,[D,2.27,.92],[.49,.18,.055])}c(z,"#a98961",[0,.7,0],[2.8,.15,.9]);let M=["#ce5949","#e6b64d","#709a55"];for(let A=0;A<5;A++){let O=(A-2)*.5;if(c(z,"#a68854",[O,.88,0],[.43,.2,.68]),h)for(let D=0;D<3;D++)h(z,M[(A+D)%M.length],[O+(D-1)*.11,1.05,D%2?-.11:.11],[.075,.085,.075])}return z.userData.marketDetails={canopyStripes:6,valances:6,produce:15},f(z),{building:g,houses:u,buildings:x}}var ct=20;var cn=$n.map((n,e)=>({...n,x:n.x*16,z:n.z*16,dock:{x:n.dock.x*16,z:n.dock.z*16},radius:n.id==="home"?9e3:n.radius*16,coastSeed:1.3+e*1.7,relief:n.id==="home"?24:n.biome==="highlands"?85:n.biome==="rainforest"?42:n.biome==="rocky"?28:12})),jc=Object.fromEntries(cn.map(n=>[n.id,n])),vs={minX:Math.min(...cn.map(n=>n.x-n.radius))-1600,maxX:Math.max(...cn.map(n=>n.x+n.radius))+1600,minZ:Math.min(...cn.map(n=>n.z-n.radius))-1600,maxZ:Math.max(...cn.map(n=>n.z+n.radius))+1600},ld=(n,e)=>cn.find(t=>Math.hypot(n-t.x,e-t.z)<t.radius)||null,gt=Object.fromEntries(cn.map((n,e)=>{let t=$n[e],i=Math.hypot(t.dock.x-t.x,t.dock.z-t.z),r=(t.dock.x-t.x)/i,s=(t.dock.z-t.z)/i,a=n.radius*gs(n,Math.atan2(s,r)),o=h=>({x:n.x+r*h,z:n.z+s*h}),c=o(a-320),l=o(a+240);return[n.id,{id:n.id,...o(a+320),ux:r,uz:s,land:c,end:l,shore:o(a+200),length:Math.hypot(l.x-c.x,l.z-c.z),width:38,deck:.72}]})),ys={x:gt.home.land.x-385,z:gt.home.land.z-40},Mr=la.map(n=>({...n,x:n.x+ys.x,z:n.z+ys.z,facing:n.z>60?Math.PI:0})),_s=(n,e)=>({x:n+ys.x,z:e+ys.z}),ca=[{width:55,curb:!0,points:Array.from({length:31},(n,e)=>e===0?{...gt.home.land}:_s(385-e*21,36+Math.sin(e*.19)*9))},{width:40,curb:!0,points:Array.from({length:15},(n,e)=>_s(23,-280+e*39))},{width:36,points:[_s(-245,40),_s(-600,30),{x:jc.home.radius*.35,z:400},{x:800,z:-700},{x:-1800,z:-2400}]}],cd=_s(290,-30),qt={x:gt.fortress.land.x-gt.fortress.ux*800,z:gt.fortress.land.z-gt.fortress.uz*800},hd={x:qt.x-115,z:qt.z+145},lt={pump:_s(330,65),cave:{x:gt.jungle.land.x-gt.jungle.ux*700,z:gt.jungle.land.z-gt.jungle.uz*700},estate:{x:qt.x,z:qt.z+102},paper:{x:0,z:-40},caveExit:{x:0,z:150},estateExit:{x:0,z:130},stairs:{x:70,z:-95},cellarExit:{x:0,z:150},key:{x:0,z:-60}};lt.supply={x:lt.cave.x+150,z:lt.cave.z-105};var Ix=[{id:"gate",area:null,...hd,hp:2},{id:"patrol",area:null,x:qt.x+110,z:qt.z+85,hp:2},{id:"hall",area:"estate",x:-65,z:15,hp:2},{id:"boss",area:"estate",x:0,z:-60,hp:3}];function Kc(n,e,t){return t=Math.max(0,Math.min(1,t)),t=t*t*(3-2*t),n+(e-n)*t}function qi(n,e,t=ld(n,e)){if(!t)return-.32;let i=yr(t,n,e);if(i<=.01)return i;if(t.id==="home"){let r=Math.hypot(n-ys.x+80,e-ys.z);r<820&&(i=Kc(.68,i,(r-470)/350))}if(t.id==="fortress"){let r=Math.max(Math.abs(n-qt.x),Math.abs(e-qt.z));r<400&&(i=Kc(.85,i,(r-180)/220))}if(t.id==="jungle"){let r=Math.hypot(n-lt.cave.x,e-lt.cave.z);r<230&&(i=Kc(1.2,i,(r-100)/130))}return i}function Qc(n,e,t,i){for(let r of i?[gt[i]]:Object.values(gt)){if(!r)continue;let s=e-r.land.x,a=t-r.land.z,o=s*r.ux+a*r.uz,c=s*r.uz-a*r.ux;if(o>=-.5&&o<=r.length+.5&&Math.abs(c)<=r.width/2){let l=qi(r.land.x,r.land.z);return n.dock=r,n.height=l+(r.deck-l)*Math.max(0,Math.min(1,o/r.length)),n}}return null}var Px={};function ri(n,e){return Qc(Px,n,e)?.height??qi(n,e)}function bl(n,e){return ca.some(t=>t.points.some((i,r)=>{if(!r)return!1;let s=t.points[r-1],a=i.x-s.x,o=i.z-s.z,c=Math.max(0,Math.min(1,((n-s.x)*a+(e-s.z)*o)/(a*a+o*o)));return Math.hypot(n-s.x-a*c,e-s.z-o*c)<t.width/2+35}))}var DM=Object.fromEntries($n.map(n=>{let e=Math.hypot(n.dock.x-n.x,n.dock.z-n.z),t=(n.dock.x-n.x)/e,i=(n.dock.z-n.z)/e;return[n.id,{x:n.x+t*n.radius*1.06,z:n.z+i*n.radius*1.06,shore:{x:n.x+t*n.radius*.84,z:n.z+i*n.radius*.84}}]}));var Ms={seatZ:-.28,seatTop:.72,hips:.84,eye:1.65};function ud(n,{cube:e,ell:t,mat:i}){let r=new Oe;r.name="campaign-boat",n.add(r),t(r,"#233f52",[0,.05,0],[.85,.36,1.9]),t(r,"#dedbd0",[0,.22,0],[.8,.23,1.85]);let s=e(r,"#6e5942",[0,.4,-.15],[1.3,.08,2.7]);s.name="boat-deck";let a=e(r,"#3b5355",[0,.57,Ms.seatZ],[.92,.3,.48]);a.name="boat-seat",e(r,"#e7e0d0",[0,.73,.5],[1,.65,.36]);let o=new ft(new on(1.2,.48,.025),new Js({color:"#b9e4eb",transparent:!0,opacity:.4,roughness:.1}));o.position.set(0,1.15,.68),r.add(o);let c=new ft(new Mi(.2,.026,8,20),i("#2e3538"));c.name="boat-wheel",c.position.set(0,1.05,.28),r.add(c);let l=new kt(1,1,1,8),h=new At(l,i("#d6dedc"),10),u=new Et;h.name="boat-rails";let f=0;for(let _ of[-.68,.68]){for(let w of[.15,.85,1.55])u.position.set(_,.75,w),u.rotation.set(0,0,0),u.scale.set(.025,.5,.025),u.updateMatrix(),h.setMatrixAt(f++,u.matrix);for(let w of[.86,1.01])u.position.set(_,w,.85),u.rotation.set(Math.PI/2,0,0),u.scale.set(.025,1.4,.025),u.updateMatrix(),h.setMatrixAt(f++,u.matrix)}h.castShadow=!0,h.instanceMatrix.needsUpdate=!0,h.computeBoundingSphere(),r.add(h);let d=new Ut({color:"#b7d6d8",emissive:"#31545a",emissiveIntensity:.38,roughness:.28}),g=new At(new kt(.1,.1,.03,16),d,3);g.name="boat-gauges";for(let _=0;_<3;_++)u.position.set((_-1)*.28,.91,.3),u.rotation.set(Math.PI/2,0,0),u.scale.set(_===1?1:.82,_===1?1:.82,1),u.updateMatrix(),g.setMatrixAt(_,u.matrix);g.instanceMatrix.needsUpdate=!0,g.computeBoundingSphere(),r.add(g);let x=t(r,"#d84e46",[-.65,.79,.94],[.075,.075,.075]),m=t(r,"#52b878",[.65,.79,.94],[.075,.075,.075]);x.name="boat-port-light",m.name="boat-starboard-light",x.material=new Ut({color:"#d84e46",emissive:"#b32b25",emissiveIntensity:.9}),m.material=new Ut({color:"#52b878",emissive:"#238547",emissiveIntensity:.9}),e(r,"#303b40",[0,.35,-1.75],[.42,.6,.38]),e(r,"#303b40",[0,-.12,-1.85],[.22,.65,.25]);let p=new ft(new Pn(1.5,5),new Sn({color:"#d0ebe6",transparent:!0,opacity:.25,depthWrite:!1}));return p.rotation.x=-Math.PI/2,p.position.set(0,.03,-3.3),r.add(p),r.userData.boatDetails={rails:10,gauges:3,navigationLights:2},{boat:r,wake:p}}function dd(n,e){if(n.root.parent===e)return!1;e.add(n.root),n.root.position.set(0,0,Ms.seatZ),n.root.rotation.set(0,0,0),n.rig.rotation.set(0,0,0),n.hips.position.y=Ms.hips;for(let t of n.arms)t.arm.rotation.x=-.85,t.arm.rotation.z=-t.side*.18,t.forearm.rotation.x=-.72;for(let t of n.legs)t.thigh.rotation.x=-1.68,t.calf.rotation.x=1.68,t.shoe.rotation.x=0;return!0}var fd=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z);var pd=Object.values(gt),Ln=Array.from({length:5},(n,e)=>({id:e,x:(e-2)*38,z:-80,child:e>2})),Dx=Ln.map(n=>"cell-"+n.id),Lx=Object.fromEntries(pd.map(n=>[n.id,"dock-"+n.id]));function Ux(n){let e=null,t=15625;for(let i of pd){let r=i.x-n.p.x,s=i.z-n.p.z,a=r*r+s*s;a<t&&(e=i,t=a)}return e}function En(n,e,t,i,r){let s=n[e]||(n[e]={});return Object.assign(s,i),s.id=t,s.label=r,e+1}function md(n,e){let t=0;if(e.interior==="cave")return t=En(n,t,"paper",lt.paper,e.paper?e.gun?"supplies":"take-gun":"move-paper"),t=En(n,t,"cave-exit",lt.caveExit,"leave-cave"),n.length=t,n;if(e.interior==="estate")return t=En(n,t,"key",lt.key,"take-key"),t=En(n,t,"stairs",lt.stairs,"cellar"),t=En(n,t,"estate-exit",lt.estateExit,"leave-estate"),n.length=t,n;if(e.interior==="cellar"){for(let r of Ln)e.released.includes(r.id)||(t=En(n,t,Dx[r.id],r,"free-person"));return t=En(n,t,"cellar-exit",lt.cellarExit,"upstairs"),n.length=t,n}if(e.boat){let r=Ux(e);return r&&(t=En(n,t,Lx[r.id],r,"dock")),n.length=t,n}let i=gt[e.island];if(t=En(n,t,"boat",i.shore,e.released.length===5&&!e.boarded?"board-group":"boat"),e.island==="home"&&(t=En(n,t,"pump",lt.pump,"refuel")),e.island==="jungle"&&(t=En(n,t,"cave",lt.cave,"enter-cave"),t=En(n,t,"supply",lt.supply,"supplies")),e.island==="fortress"&&(t=En(n,t,"estate",lt.estate,"enter-estate")),["highlands","smugglers","paradise"].includes(e.island)){let r=jc[e.island];t=En(n,t,"supplies",r,"supplies")}return n.length=t,n}function gd(n,e){let t=null,i=1/0;for(let r of n){let s=r.id.startsWith("cell-")?85:r.id.startsWith("dock-")?125:65,a=r.x-e.x,o=r.z-e.z,c=a*a+o*o;c<s*s&&c<i&&(t=r,i=c)}return t}function Nx(n,e){if(e.complete)return n.key="complete",n.target=null,n;if(!e.docked)return n.key="dock-goal",n.target=gt.home,n;if(!e.tanked)return n.key="fuel-goal",n.target=e.boat?gt.home:lt.pump,n;if(!e.gun)return e.interior==="cave"?(n.key=e.paper?"gun-goal":"paper-goal",n.target=lt.paper,n):(n.key="cave-goal",n.target=e.boat?gt.jungle:e.island==="jungle"?lt.cave:gt[e.island].shore,n);if(e.interior==="cave")return n.key="exit-cave-goal",n.target=lt.caveExit,n;if(!e.key){if(e.interior==="estate"){let t=e.guards.find(i=>i.id==="boss");return n.key=t.hp>0?"boss-goal":"key-goal",n.target=t.hp>0?t:lt.key,n}return n.key="estate-goal",n.target=e.boat?gt.fortress:e.island==="fortress"?lt.estate:gt[e.island].shore,n}return e.released.length<5?(n.key=e.interior==="cellar"?"people-goal":"cellar-goal",n.target=e.interior==="cellar"?Ln.find(t=>!e.released.includes(t.id)):e.interior==="estate"?lt.stairs:e.boat?gt.fortress:lt.estate,n):e.interior?(n.key="escort-goal",n.target=e.interior==="cellar"?lt.cellarExit:lt.estateExit,n):e.boarded?(n.key="home-goal",n.target=e.boat?gt.home:e.island==="home"?gt.home.shore:gt[e.island].shore,n):(n.key="boat-goal",n.target=gt.fortress.shore,n)}var Fx={};function eh(n,e){if(Nx(n,e),e.boat||e.interior||!n.target)return n;let t=gt[e.island],i=!!Qc(Fx,e.p.x,e.p.z,e.island);return n.target===t.shore?!i&&fd(e.p,t.land)>65&&(n.target=t.land):i&&fd(e.p,t.land)>45&&(n.target=t.land),n}function Sl(n){return eh({},n)}function th(n,e,t,i,r){let s=e.interior?1.8:e.boat?.65:1.3;if(n.fillStyle=e.interior?"#25312d":"#176475",n.fillRect(0,0,t,i),n.save(),n.translate(t/2-e.p.x*s,i/2-e.p.z*s),n.scale(s,s),e.interior){if(n.fillStyle="#6f7568",n.fillRect(-115,-125,230,310),n.strokeStyle="#beb99e",n.lineWidth=8,n.strokeRect(-115,-125,230,310),e.interior==="cave"&&(n.fillStyle="#967756",n.fillRect(-25,-60,50,35),n.fillStyle=e.paper?"#30383a":"#e4d6b8",e.gun||n.fillRect(-17,-55,34,22)),e.interior==="estate"&&(n.fillStyle="#9b7751",n.fillRect(-45,-105,90,25),n.fillStyle="#f0c561",!e.key&&e.guards.find(l=>l.id==="boss").hp===0&&n.fillRect(-5,-65,10,12)),e.interior==="cellar")for(let l of Ln)n.strokeStyle="#bac6bf",e.released.includes(l.id)||n.strokeRect(l.x-18,-112,36,80)}else{for(let l of cn){o(l,1,"#398b8b",-4*ct),o(l,1,"#d9cba2"),o(l,1,l.biome==="highlands"?"#8f9882":"#759575",18*ct);for(let u=0;u<26;u++){let f=u*2.39996+l.x*.001,d=l.radius*(.36+u%7*.075),g=l.x+Math.sin(f)*d,x=l.z+Math.cos(f)*d;if(!(l.id==="home"&&(vr({x:g,z:x},l.id,Mr)||bl(g,x)))&&!(l.id==="fortress"&&Math.abs(g-qt.x)<125&&Math.abs(x-qt.z)<155)){n.strokeStyle="#365e49",n.lineWidth=5;for(let m=0;m<7;m++){let p=m*Math.PI*2/7;n.beginPath(),n.moveTo(g,x),n.quadraticCurveTo(g+Math.sin(p+.25)*13,x+Math.cos(p+.25)*13,g+Math.sin(p)*25,x+Math.cos(p)*25),n.stroke()}}}n.fillStyle="#fff4cc",n.font="18px system-ui",n.textAlign="center",n.fillText(r(l.id),l.x,l.z-l.radius*.58);let h=gt[l.id];n.strokeStyle="#a2865b",n.lineWidth=h.width,n.beginPath(),n.moveTo(h.land.x,h.land.z),n.lineTo(h.end.x,h.end.z),n.stroke()}for(let l of ca)n.strokeStyle="#b7baa5",n.lineWidth=l.width,n.beginPath(),l.points.forEach((h,u)=>u?n.lineTo(h.x,h.z):n.moveTo(h.x,h.z)),n.stroke();for(let l of Mr)n.fillStyle="#304f43",n.fillRect(l.x-l.w/2+7,l.z-l.d/2+9,l.w,l.d),n.fillStyle=l.color,n.fillRect(l.x-l.w/2,l.z-l.d/2,l.w,l.d),n.fillStyle="#ab7861",n.fillRect(l.x-l.w/2-3,l.z-l.d/2+4,l.w+6,l.d-8),n.strokeStyle="#d4aa83",n.lineWidth=4,n.beginPath(),n.moveTo(l.x-l.w/2,l.z),n.lineTo(l.x+l.w/2,l.z),n.stroke();n.fillStyle="#e0d5b9",n.fillRect(qt.x-80,qt.z-80,160,160),n.fillStyle="#352e25",n.fillRect(qt.x-20,qt.z+76,40,12),n.fillStyle="#404b40",n.fillRect(lt.cave.x-36,lt.cave.z-30,72,36),n.fillStyle="#d28757",n.fillRect(lt.pump.x-15,lt.pump.z-16,30,32)}for(let l of e.guards)l.area===e.interior&&l.hp>0&&!e.boat&&(l.area||e.island==="fortress")&&c(l,"#d28b76",12);if(e.interior==="cellar")for(let l of Ln)e.released.includes(l.id)||c(l,"#d3dcbe",10);let a=Sl(e).target;a&&(n.strokeStyle="#f5d281",n.lineWidth=3,n.beginPath(),n.arc(a.x,a.z,20+Math.sin(e.elapsed*3)*3,0,Math.PI*2),n.stroke()),n.save(),n.translate(e.p.x,e.p.z),n.rotate(-e.heading),e.boat?(n.fillStyle="#efe4c9",n.beginPath(),n.moveTo(-18,-32),n.lineTo(18,-32),n.lineTo(22,28),n.lineTo(0,50),n.lineTo(-22,28),n.closePath(),n.fill()):(n.fillStyle="#b6ddd3",n.beginPath(),n.arc(0,0,9,0,Math.PI*2),n.fill()),n.strokeStyle="#fff6c7",n.lineWidth=3,n.beginPath(),n.moveTo(0,6),n.lineTo(0,28),n.stroke(),n.restore(),e.shot&&(n.strokeStyle="#ffeac5",n.lineWidth=2,n.beginPath(),n.moveTo(e.shot.from.x,e.shot.from.z),n.lineTo(e.shot.to.x,e.shot.to.z),n.stroke()),n.restore();function o(l,h,u,f=0){n.fillStyle=u,n.beginPath();for(let d=0;d<=96;d++){let g=d/96*Math.PI*2,x=l.radius*gs(l,g)*h-f,m=l.x+Math.cos(g)*x,p=l.z+Math.sin(g)*x;d?n.lineTo(m,p):n.moveTo(m,p)}n.closePath(),n.fill()}function c(l,h,u){n.fillStyle=h,n.beginPath(),n.arc(l.x,l.z,u,0,Math.PI*2),n.fill()}}function zx(n,e){return e.parent===n?!1:(n.add(e),!0)}function Ox(n,e,t,i,r,s,a,o){if(n.ready&&n.area===e)return!1;n.ready=!0,n.area=e,t.visible=!e,i.visible=!!e;for(let[c,l]of r)l.visible=c===e;return s.background.set(e?"#202c29":"#b9dbe5"),s.fog.color.copy(s.background),a.intensity=e?.65:2,o.intensity=e?.15:2.8,!0}function Bx(n,e,t,i,r,s){return n?!1:(i.material.uniforms.uTime.value=e,s.update(t.position,.5),r.update(e,t.position),i.position.copy(t.position),!0)}function kx(n,e,t,i,r,s=800,a=200){if(n.ready&&n.area===e){let l=n.x-t.x,h=n.z-t.z;if(l*l+h*h<a*a)return!1}n.ready=!0,n.area=e,n.x=t.x,n.z=t.z;let o=!1,c=0;for(let l=0;l<r.length;l++){let h=i[l],u=t.x-h.x,f=t.z-h.z,d=!e&&u*u+f*f<=(h.radius+s)**2;r[l].receiveShadow!==d&&(r[l].receiveShadow=d,o=!0),d&&c++}return n.active=c,o}function Vx(n,e,t,i){let r=n.values||(n.values=[]),s=!n.ready||r.length!==e.length;for(let a=0;a<e.length;a++)r[a]!==e[a]&&(s=!0);if(!s)return!1;n.ready=!0,r.length=e.length,t.fill(0);for(let a=0;a<e.length;a++){let o=e[a];r[a]=o,t[o]=1}for(let a=0;a<i.length;a++)i[a].visible=!t[a];return!0}function Gx(n,e,t){let i=e.released||[],r=n.released||(n.released=[]),s=!n.ready||n.x!==e.p.x||n.z!==e.p.z||n.area!==(e.interior||"")||n.island!==e.island||n.boat!==!!e.boat||n.paper!==!!e.paper||n.gun!==!!e.gun||n.boarded!==!!e.boarded||r.length!==i.length;for(let a=0;a<i.length;a++)r[a]!==i[a]&&(s=!0);if(!s)return!1;n.ready=!0,n.x=e.p.x,n.z=e.p.z,n.area=e.interior||"",n.island=e.island,n.boat=!!e.boat,n.paper=!!e.paper,n.gun=!!e.gun,n.boarded=!!e.boarded,r.length=i.length;for(let a=0;a<i.length;a++)r[a]=i[a];return n.nearby=gd(md(t,e),e.p),!0}function Hx(n,e,t,i=!!e.guards?.find(r=>r.id==="boss"&&r.hp>0)){let r=e.released||[],s=n.released||(n.released=[]),a=!n.ready||n.x!==e.p.x||n.z!==e.p.z||n.area!==(e.interior||"")||n.island!==e.island||n.boat!==!!e.boat||n.complete!==!!e.complete||n.docked!==!!e.docked||n.tanked!==!!e.tanked||n.paper!==!!e.paper||n.gun!==!!e.gun||n.key!==!!e.key||n.boarded!==!!e.boarded||n.bossAlive!==i||s.length!==r.length;for(let o=0;o<r.length;o++)s[o]!==r[o]&&(a=!0);if(!a)return!1;n.ready=!0,n.x=e.p.x,n.z=e.p.z,n.area=e.interior||"",n.island=e.island,n.boat=!!e.boat,n.complete=!!e.complete,n.docked=!!e.docked,n.tanked=!!e.tanked,n.paper=!!e.paper,n.gun=!!e.gun,n.key=!!e.key,n.boarded=!!e.boarded,n.bossAlive=i,s.length=r.length;for(let o=0;o<r.length;o++)s[o]=r[o];return eh(t,e),!0}function Wx(n,e,t,i,r,s,a,o){return n.ready&&n.area===e?(o.yaw=r,o.pitch=s,!1):(n.ready=!0,n.area=e,o.yaw=e?0:i?Math.atan2(t.x-i.x,t.z-i.z):r,o.pitch=a,!0)}function Xx(n,e,t=!1){let i=e.interior||"",r=!!e.boat,s=Math.round(e.p.x/20),a=Math.round(e.p.z/20),o=Math.round(e.heading*12),c=!!e.boarded,l=e.guards||[],h=e.released||[],u=!n.ready||n.area!==i||n.island!==e.island||n.boat!==r||n.x!==s||n.z!==a||n.heading!==o||n.boarded!==c||n.animated!==t||n.guardCount!==l.length||n.releasedCount!==h.length,f=n.guards||(n.guards=[]),d=n.released||(n.released=[]);for(let g=0;g<l.length;g++){let x=l[g].hp>0;f[g]!==x&&(u=!0),f[g]=x}for(let g=0;g<h.length;g++)d[g]!==h[g]&&(u=!0),d[g]=h[g];return f.length=l.length,d.length=h.length,n.ready=!0,n.area=i,n.island=e.island,n.boat=r,n.x=s,n.z=a,n.heading=o,n.boarded=c,n.animated=t,n.guardCount=l.length,n.releasedCount=h.length,u}function qx(n,e=!1,t=!0){return!n.paused&&!!(e||n.walking&&(n.boat||t))}function Yx(n,e,t,i){let r=Math.sin(i),s=Math.cos(i);for(let a=0;a<e.length;a++){let o=e[a],c=n[a],l=35+o.id*15,h=o.id%2?16:-16;c.x=t.x-r*l+s*h,c.z=t.z-s*l-r*h}return n}function Zx(n,e,t,i,r=ct){return n.setXYZ(0,e.x/r,i,e.z/r),n.setXYZ(1,t.x/r,i,t.z/r),n.needsUpdate=!0,n}function Jx(n,e,t){let i=e*7;return n.swing=Math.sin(i),n.step=t?.24:0,n.bounce=t?Math.cos(i*2):0,n}function $x(n,e,t,i,r,s=!1,a="standing"){let o=s||r||!n.ready||n.x!==e.x||n.z!==e.z||n.height!==t||n.heading!==i||n.walking!==r||n.pose!==a;return n.ready=!0,n.x=e.x,n.z=e.z,n.height=t,n.heading=i,n.walking=r,n.pose=a,o}function Kx(n,e,t=!0){let i=!!(t&&n.ready&&(n.x!==e.x||n.z!==e.z));return n.ready=!0,n.x=e.x,n.z=e.z,i}function jx(n,e,t=!0){return(t||!n.headingReady)&&(n.headingReady=!0,n.heading=e),n.heading}function ha(n,e,t,i,r){let s=n.get(e);return s&&s.x===t&&s.z===i||(s||(s={x:0,z:0,height:0},n.set(e,s)),s.x=t,s.z=i,s.height=r(t,i),n.misses=(n.misses||0)+1),s.height}function Qx(n,e,t,i,r=!0){if(!r||!n.ready)return n.ready=!0,n.last=e,n.slow=0,n.fast=0,t;let s=e-n.last;return n.last=e,s<=0||s>250?t:(s>34?(n.slow+=s,n.fast=0):s<20?(n.fast+=s,n.slow=Math.max(0,n.slow-s)):(n.slow=Math.max(0,n.slow-s*.5),n.fast=Math.max(0,n.fast-s)),n.slow>=2500&&t>.8?(n.slow=0,n.fast=0,Math.max(.8,Math.round((t-.15)*100)/100)):n.fast>=5e3&&t<i?(n.slow=0,n.fast=0,Math.min(i,Math.round((t+.1)*100)/100)):t)}function e_(n,e,t=0){let i=Math.min(n,e),r=Math.max(n,e);return n<=700||t>0&&(i<=700||r<=1200)}function xd({canvas:n,getState:e,makeHuman:t,onLost:i,rendererFactory:r=s=>new fs(s)}){let s=r({canvas:n,antialias:!0,powerPreference:"high-performance"}),a=e_(innerWidth,innerHeight,globalThis.navigator?.maxTouchPoints||0),o=Math.min(devicePixelRatio||1,a?1.1:1.5);s.setPixelRatio(o),s.setSize(innerWidth,innerHeight,!1),s.outputColorSpace=Xt,s.toneMapping=ss,s.shadowMap.enabled=!0,s.shadowMap.type=rs,s.shadowMap.autoUpdate=!1;let c=new ir,l=new Kt(68,innerWidth/innerHeight,.04,6e3);c.add(l),c.background=new it("#b9dbe5"),c.fog=new nr("#b9dbe5",650,2400);let h=new lr("#d5ecfa","#566143",2),u=new hr("#fff2d6",2.8);u.castShadow=!0,u.shadow.mapSize.set(a?1024:2048,a?1024:2048),Object.assign(u.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:.1,far:100}),u.shadow.normalBias=.025,c.add(h,u,u.target);let f=fl(s,a?4:8),d=new Map,g=new Map,x=b=>(d.has(b)||d.set(b,f.forColor(b)||new Ut({color:b,roughness:.85})),d.get(b)),m=(b,E)=>(g.has(b)||g.set(b,E()),g.get(b)),p=(b,E,q,Z=[0,0,0],oe=[1,1,1])=>{let we=new ft(E,q);return we.position.set(...Z),we.scale.set(...oe),we.castShadow=we.receiveShadow=!0,b.add(we),we},_=(b,E,q,Z)=>p(b,m("box",()=>new on),x(E),q,Z),w=(b,E,q,Z)=>p(b,m("cylinder",()=>new kt(1,1,1,12)),x(E),q,Z),y=(b,E,q,Z)=>p(b,m("sphere",()=>new Tn(1,16,12)),x(E),q,Z),P={mat:x,geo:m,mesh:p,cube:_,tube:w,ell:y},C=new Oe,F=new Oe,z=b=>{let E=new Map;b.updateMatrix();for(let q of[...b.children])if(q.isMesh){q.updateMatrix();let Z=q.geometry.clone().applyMatrix4(q.matrix);E.has(q.material)||E.set(q.material,[]),E.get(q.material).push(Z),b.remove(q)}for(let[q,Z]of E){let oe=xs(Z,!1);Z.forEach(Xe=>Xe.dispose());let we=new ft(oe,q);we.castShadow=we.receiveShadow=!0,b.add(we)}},T=(b,E)=>{let q=new Set(b.legs.map(et=>et.shoe)),Z=0,oe=0,we=0;b.root.traverse(et=>{et.isMesh&&Z++});let Xe=et=>{for(let _e of[...et.children])_e.isMesh||Xe(_e);let Re=new Map;for(let _e of[...et.children])_e.isMesh&&!q.has(_e)&&!_e.isInstancedMesh&&(Re.has(_e.material)||Re.set(_e.material,[]),Re.get(_e.material).push(_e));for(let[_e,st]of Re)if(st.length>1){let Ot=st.map(Rt=>(Rt.updateMatrix(),Rt.geometry.clone().applyMatrix4(Rt.matrix))),Ct=xs(Ot,!1);Ot.forEach(Rt=>Rt.dispose());let Vt=new ft(Ct,_e);Vt.name=`${E}-rigid-batch-${we++}`,Vt.castShadow=st.some(Rt=>Rt.castShadow),Vt.receiveShadow=st.some(Rt=>Rt.receiveShadow),st.forEach(Rt=>et.remove(Rt)),et.add(Vt)}};Xe(b.root),b.root.traverse(et=>{et.isMesh&&oe++}),b.root.userData.rigidBatchProfile={sourceMeshes:Z,renderMeshes:oe,batches:we,animatedShoes:q.size}},M=(b,E,q)=>{let Z=new Oe;Z.name="campaign-supply-cache-"+b,Z.position.set(E/ct,ri(E,q),q/ct),C.add(Z),_(Z,"#a98961",[0,.34,0],[1.45,.68,.88]),_(Z,"#debb63",[0,.72,0],[1.52,.09,.94]);for(let oe of[-.54,.54])_(Z,"#debb63",[oe,.35,.46],[.1,.62,.06]);_(Z,"#bd6e4e",[-1.02,.42,.04],[.42,.84,.55]),_(Z,"#394447",[-1.02,.87,.04],[.2,.08,.22]);for(let oe of[-1.15,-.89])_(Z,"#394447",[oe,.75,.04],[.05,.24,.05]);return _(Z,"#394447",[-1.02,.84,.04],[.26,.05,.05]),_(Z,"#596b4e",[.93,.23,.04],[.72,.46,.58]),_(Z,"#394447",[.93,.48,.04],[.48,.05,.26]),_(Z,"#e2dbc7",[.82,.86,-.03],[.7,.34,.5]),_(Z,"#bd6e4e",[.82,.87,.235],[.34,.08,.025]),_(Z,"#bd6e4e",[.82,.87,.235],[.08,.25,.025]),Z.userData.supplyDetails={crate:!0,fuelCan:!0,medkit:!0,ammoBox:!0},z(Z),Z};c.add(C,F);let A=a?96:192,O=Math.max(...cn.map(b=>b.radius)),D=[];for(let b of cn){let E=Math.max(a?48:72,Math.round(A*b.radius/O/8)*8),q=Jc(b,{segments:E});q.userData.terrainSegments=E,D.push(q),q.scale.set(1/ct,1,1/ct),q.position.set(b.x/ct,0,b.z/ct);let Z=q.geometry.attributes.position;for(let ge=0;ge<Z.count;ge++)Z.setY(ge,qi(b.x+Z.getX(ge),b.z+Z.getZ(ge),b));let oe=new Float32Array(Z.count*3),we=new it;for(let ge=0;ge<Z.count;ge++){let qe=Math.hypot(Z.getX(ge),Z.getZ(ge))/b.radius;we.set(qe>.8?"#fff7e4":b.biome==="rocky"?"#d1d4c5":"#dce2c8"),we.toArray(oe,ge*3)}q.geometry.setAttribute("color",new jt(oe,3)),q.geometry.computeVertexNormals(),q.material.dispose(),q.material=yl(f,ct),q.material.vertexColors=!0,C.add(q);let Xe=gt[b.id],et=new Oe,Re=qi(Xe.land.x,Xe.land.z);et.name="pier-"+b.id,et.position.set(Xe.land.x/ct,Re,Xe.land.z/ct),et.rotation.y=Math.atan2(Xe.ux,Xe.uz),C.add(et);let _e=wl(Xe.end,Xe.land)/ct,st=Math.ceil(_e/.26),Ot=new At(m("box",()=>new on),x("#a98961"),st+1),Ct=new Et;Ot.name="pier-deck-"+b.id;for(let ge=0;ge<=st;ge++){let qe=_e*ge/st;Ct.position.set(0,(Xe.deck-Re)*ge/st-.075,qe),Ct.scale.set(Xe.width/ct,.15,_e/st+.006),Ct.updateMatrix(),Ot.setMatrixAt(ge,Ct.matrix)}Ot.castShadow=Ot.receiveShadow=!0,et.add(Ot);let Vt=m("pier-piling",()=>new kt(1,1,1,12)),Rt=new At(Vt,x("#876742"),8);Rt.name="pier-pilings-"+b.id;let Ii=0;for(let ge of[-.8,.8])for(let qe of[0,_e*.33,_e*.66,_e]){let Gt=(Xe.deck-Re)*qe/_e;Ct.position.set(ge,Gt-.65,qe),Ct.scale.set(.075,1.6,.075),Ct.updateMatrix(),Rt.setMatrixAt(Ii++,Ct.matrix)}Rt.castShadow=Rt.receiveShadow=!0,Rt.instanceMatrix.needsUpdate=!0,Rt.computeBoundingSphere(),et.add(Rt);let Cn=new At(Vt,x("#394447"),8);Cn.name="pier-bollards-"+b.id;let Pi=0;for(let ge of[-.72,.72])for(let qe of[_e*.78,_e*.98]){let Gt=(Xe.deck-Re)*qe/_e;Ct.position.set(ge,Gt+.25,qe),Ct.scale.set(.075,.5,.075),Ct.updateMatrix(),Cn.setMatrixAt(Pi++,Ct.matrix),Ct.position.set(ge,Gt+.51,qe),Ct.scale.set(.13,.08,.13),Ct.updateMatrix(),Cn.setMatrixAt(Pi++,Ct.matrix)}Cn.castShadow=Cn.receiveShadow=!0,Cn.instanceMatrix.needsUpdate=!0,Cn.computeBoundingSphere(),et.add(Cn),["paradise","smugglers","highlands"].includes(b.id)&&M(b.id,b.x,b.z)}M("jungle",lt.supply.x,lt.supply.z);let I=Math.max(vs.maxX-vs.minX,vs.maxZ-vs.minZ)/ct+12e3,N=xl(cn.map(b=>[b.x/ct,b.z/ct,b.radius/ct,b.radius/ct]),{size:I,segments:a?48:72,coastSeeds:cn.map(b=>b.coastSeed),mobile:a});C.add(N.mesh);let G=_l(5e3);C.add(G);let H=vl(C,cn,{scale:ct,height:qi,surfaces:f,small:a,dense:!0,lod:!0,clear:(b,E,q)=>vr({x:E,z:q},b.id,Mr)||b.id==="home"&&bl(E,q)||b.id==="jungle"&&(wl({x:E,z:q},lt.cave)<100||wl({x:E,z:q},lt.supply)<58)||b.id==="fortress"&&Math.abs(E-qt.x)<125&&Math.abs(q-qt.z)<155||wl({x:E,z:q},gt[b.id].land)<90}),k=Ml(C,{scale:ct,height:qi,surfaces:f,helpers:P,village:Mr,paths:ca,marketPoint:cd}),{boat:ie,wake:se}=ud(C,P),ue=new Oe;ue.name="harbor-fuel-pump",ue.position.set(lt.pump.x/ct,ri(lt.pump.x,lt.pump.z),lt.pump.z/ct),C.add(ue),_(ue,"#a98961",[0,.06,0],[1.05,.12,.92]),_(ue,"#e6d6b8",[0,.68,0],[.75,1.24,.65]),_(ue,"#bd6e4e",[0,1.34,0],[.82,.28,.72]),_(ue,"#263f41",[0,.99,.34],[.48,.25,.045]),_(ue,"#e8d99e",[0,.99,.37],[.31,.1,.018]),w(ue,"#2d3435",[.53,.72,0],[.035,1.18,.035]);let Ie=_(ue,"#394447",[.53,.39,.29],[.1,.24,.08]);Ie.rotation.z=-.22,_(ue,"#bd6e4e",[0,.39,.35],[.3,.1,.055]),w(ue,"#e6d6b8",[0,2.18,-.06],[.055,1.42,.055]);let Ge=w(ue,"#bd6e4e",[0,2.9,-.06],[.42,.1,.42]);Ge.rotation.x=Math.PI/2;let ut=w(ue,"#f3dfbe",[0,2.9,.005],[.31,.115,.31]);ut.rotation.x=Math.PI/2,ue.userData.fuelDetails={display:!0,hose:!0,nozzle:!0,marker:!0},z(ue);let Je=new Oe;Je.name="campaign-cave-entrance",Je.position.set(lt.cave.x/ct,ri(lt.cave.x,lt.cave.z),lt.cave.z/ct),C.add(Je);let $=[[-2,.45,.02,.55,.55,.85,-.12],[-2,1.15,-.02,.58,.7,.95,.08],[-1.9,1.9,.04,.62,.72,.9,-.09],[-1.55,2.55,-.03,.72,.6,.9,.14],[2,.45,-.02,.55,.55,.85,.12],[2,1.15,.03,.58,.7,.95,-.08],[1.9,1.9,-.04,.62,.72,.9,.09],[1.55,2.55,.02,.72,.6,.9,-.14],[-1,2.9,.03,.72,.48,.9,-.1],[-.35,3.05,-.03,.68,.45,.92,.06],[.35,3.05,.02,.68,.45,.92,-.06],[1,2.9,-.02,.72,.48,.9,.1]],K=new Et,pe=new At(m("cave-mouth-rock",()=>new Tn(1,12,8)),x("#92968b"),$.length);pe.name="cave-entrance-rocks",pe.castShadow=!0,pe.receiveShadow=!0,$.forEach(([b,E,q,Z,oe,we,Xe],et)=>{K.position.set(b,E,q),K.scale.set(Z,oe,we),K.rotation.set(0,0,Xe),K.updateMatrix(),pe.setMatrixAt(et,K.matrix)}),pe.instanceMatrix.needsUpdate=!0,pe.computeBoundingSphere(),Je.add(pe),_(Je,"#171e19",[0,1.25,-.85],[2.8,2.5,.15]);let Ee=new At(m("cave-torch-handle",()=>new kt(1,1,1,7)),x("#4c3525"),2);Ee.name="cave-entrance-torches",Ee.castShadow=!0;let Ae=new Ut({color:"#ffcf75",emissive:"#ff7f32",emissiveIntensity:1.15,roughness:.55}),tt=new At(m("cave-torch-flame",()=>new qn(1,1,7)),Ae,2);tt.name="cave-entrance-flames",[-1,1].forEach((b,E)=>{K.position.set(b*1.18,1.15,.18),K.scale.set(.035,.85,.035),K.rotation.set(0,0,-b*.15),K.updateMatrix(),Ee.setMatrixAt(E,K.matrix),K.position.set(b*1.18,1.65,.18),K.scale.set(.12,.22,.12),K.rotation.set(0,0,b*.08),K.updateMatrix(),tt.setMatrixAt(E,K.matrix)}),Ee.instanceMatrix.needsUpdate=!0,tt.instanceMatrix.needsUpdate=!0,Ee.computeBoundingSphere(),tt.computeBoundingSphere(),Je.add(Ee,tt),Je.userData.entranceDetails={archStones:12,torches:2,clearOpening:!0};let Le=new Oe;Le.name="guarded-estate",Le.position.set(qt.x/ct,.85,qt.z/ct),C.add(Le),_(Le,"#e2dbc7",[0,1.55,0],[8,3.1,8]),_(Le,"#a68854",[0,3.2,0],[8.6,.25,8.6]),_(Le,"#e2dbc7",[0,4.35,-.4],[6.5,2.3,6.5]);for(let b of[-1,1]){let E=_(Le,"#ba7655",[b*1.7,5.9,-.4],[3.7,.15,7.4]);E.rotation.z=-b*.3}_(Le,"#313f38",[0,1.2,4.03],[1.65,2.4,.08]);for(let b of[-2.7,2.7])for(let E of[1.7,4.3])_(Le,"#425761",[b,E,4.04],[1.15,1.3,.06]),_(Le,"#e2dbc7",[b,E,4.11],[.08,1.38,.08]),_(Le,"#e2dbc7",[b,E,4.11],[1.2,.08,.08]);for(let b of[-1.4,1.4])w(Le,"#e2dbc7",[b,1.3,4.65],[.16,2.6,.16]);_(Le,"#a68854",[0,2.67,4.65],[3.3,.2,1.4]);for(let b=0;b<3;b++)_(Le,"#92968b",[0,-.03+b*.06,4.4+b*.4],[2.6,.15,1.25-b*.25]);for(let b of[-3.4,3.4])for(let E of[1.7,4.3]){_(Le,"#587e7c",[b,E,4.07],[.32,1.35,.1]);for(let q=0;q<8;q++)_(Le,"#876742",[b,E-.5+q*.14,4.14],[.3,.025,.045])}_(Le,"#e2dbc7",[0,3.1,4.55],[8.5,.16,1.25]);for(let b=-10;b<=10;b++)w(Le,"#e2dbc7",[b*.39,3.57,5.05],[.033,.83,.033]);_(Le,"#e2dbc7",[0,4,5.05],[8.5,.08,.08]);for(let b of[-2.45,2.45]){_(Le,"#a98961",[b,.3,4.62],[1.25,.42,.55]);for(let E=-2;E<=2;E++){let q=y(Le,E%2?"#6f8f58":"#88a866",[b+E*.2,.67+Math.abs(E)*.025,4.62],[.18,.38,.18]);q.rotation.z=E*.12}}let U=new Ut({color:"#ffe4a8",emissive:"#ffb85c",emissiveIntensity:.72,roughness:.34});for(let b of[-1.03,1.03]){_(Le,"#394447",[b,2.05,4.14],[.08,.1,.24]);let E=y(Le,"#ffe4a8",[b,1.88,4.27],[.13,.19,.13]);E.material=U}let yt=w(Le,"#d4a957",[0,3.02,4.11],[.38,.1,.38]);yt.rotation.x=Math.PI/2,Le.userData.estateDetails={planters:2,lanterns:2,crest:!0},z(Le),Le.userData.cameraBlocker=!0;let nt=[k.buildings,Le];nt.forEach(b=>b.updateWorldMatrix(!0,!0));let Ye={};function be(b,E=11,q=15){let Z=new Oe;Z.name=b,F.add(Z),Ye[b]=Z,_(Z,b==="cave"?"#777a6b":"#a68854",[0,-.1,1],[E,.2,q]);let oe=new Oe;oe.name=b+"-walls",Z.add(oe);for(let Xe of[-E/2,E/2])_(oe,b==="cave"?"#92968b":"#e2dbc7",[Xe,1.65,1],[.3,3.3,q]);_(oe,b==="cave"?"#92968b":"#e2dbc7",[0,1.65,1-q/2],[E,3.3,.3]),z(oe),_(Z,"#313f38",[0,1.1,q/2-.2],[1.7,2.2,.15]);let we=new cr(b==="cave"?"#ffd9a0":"#ffeccf",22,18,1.6);return we.position.set(0,2.7,1),Z.add(we),Z.userData.shellDetails={sourceMeshes:5,renderMeshes:3},Z}let xt=be("cave",12,17),Ue=m("cave-formation",()=>new qn(1,1,9)),$e=new At(Ue,x("#777a6b"),16),St=new Et;$e.name="cave-formations";let zt=[[-5.2,-5.4,.34,.92],[-5.2,-1.7,.27,.68],[-5.2,2.1,.38,1.06],[-5.2,5.1,.25,.78],[5.2,-4.1,.31,.84],[5.2,-.3,.39,1.12],[5.2,3.4,.28,.72],[3.6,-6.7,.42,1.18]],R=0;for(let[b,E,q,Z]of zt)St.position.set(b,Z/2,E),St.rotation.set(0,R*.71%Math.PI,0),St.scale.set(q,Z,q),St.updateMatrix(),$e.setMatrixAt(R++,St.matrix),St.position.set(-b,3.3-Z*.48,E+.55),St.rotation.set(0,R*.53%Math.PI,Math.PI),St.scale.set(q*.82,Z*.92,q*.82),St.updateMatrix(),$e.setMatrixAt(R++,St.matrix);$e.castShadow=$e.receiveShadow=!0,$e.instanceMatrix.needsUpdate=!0,$e.computeBoundingSphere(),xt.add($e),xt.userData.caveDetails={stalactites:8,stalagmites:8,clearCenter:!0};let v=new Oe;v.name="cave-evidence-table",xt.add(v),_(v,"#a98961",[0,.75,-2],[2,.12,1.2]);for(let b of[-.75,.75])for(let E of[-2.45,-1.55])w(v,"#876742",[b,.35,E],[.065,.7,.065]);for(let b of[-2.47,-1.53])_(v,"#876742",[0,.57,b],[1.72,.2,.07]);_(v,"#876742",[0,.56,-1.38],[.72,.27,.08]),y(v,"#394447",[0,.56,-1.32],[.045,.045,.04]),w(v,"#394447",[.72,.86,-2.18],[.17,.1,.17]);let J=new Ut({color:"#ffe4a8",emissive:"#ff9f45",emissiveIntensity:1.05,roughness:.28,transparent:!0,opacity:.88}),ne=y(v,"#ffe4a8",[.72,1.08,-2.18],[.14,.22,.14]);ne.material=J,w(v,"#394447",[.72,1.31,-2.18],[.12,.07,.12]),v.userData.evidenceDetails={legs:4,drawer:!0,lantern:!0,newspaper:!0,hiddenGun:!0},z(v);let ae=document.createElement("canvas");ae.width=256,ae.height=320;let ee=ae.getContext("2d");ee.fillStyle="#ddd5bd",ee.fillRect(0,0,256,320),ee.fillStyle="#3a3b32",ee.font="bold 26px serif",ee.fillText("ISLAND DAILY",18,38),ee.fillRect(18,51,220,3);for(let b=0;b<20;b++)ee.fillRect(18,72+b*10,94-b%4*6,2),ee.fillRect(128,72+b*10,104-b%3*8,2);let Be=new Vi(ae);Be.colorSpace=Xt;let de=new ft(new Pn(.9,1.05),new Ut({map:Be,side:Ht}));de.name="cave-newspaper",de.rotation.x=-Math.PI/2,de.position.set(0,.83,-2),xt.add(de);function Me(b){let E=new Oe;b.add(E),_(E,"#333a3d",[0,0,.06],[.12,.12,.34]);let q=_(E,"#695646",[0,-.11,-.03],[.1,.23,.13]);return q.rotation.x=-.22,_(E,"#8b9294",[0,.08,.03],[.11,.035,.3]),E}let Fe=Me(xt);Fe.name="cave-hidden-gun",Fe.position.set(0,.87,-2),Fe.rotation.y=Math.PI/2;let le=be("estate",11,15),me=new Oe;me.name="estate-fixtures",le.add(me),_(me,"#816947",[0,.42,-4.6],[2.6,.85,.9]),_(me,"#decc9f",[0,.05,1],[3,.025,10]);for(let b=0;b<6;b++)_(me,"#777a6b",[3.5,.06*b,-4.75+b*.28],[1.7,.12,.65]);me.userData.batchDetails={sourceMeshes:8,renderMeshes:3},z(me);let De=new Oe;De.name="estate-interior-details",le.add(De);let ze=["#6f443d","#40626a","#718052"];for(let[b,E]of[-2.7,0,2.7].entries())_(De,"#a68854",[E,1.9,-6.31],[1.42,1.22,.08]),_(De,ze[b],[E,1.9,-6.25],[1.12,.92,.045]);_(De,"#a68854",[0,.93,-6.29],[8.7,.08,.08]);for(let b of[-4.35,4.35]){_(De,"#394447",[b,2.02,-6.24],[.1,.32,.1]);let E=y(De,"#ffe4a8",[b,1.79,-6.15],[.14,.19,.11]);E.material=U}_(De,"#394447",[0,.86,-4.58],[1.12,.025,.52]);for(let b of[-.52,0,.52])_(De,"#d8d2c3",[b,.88,-4.57],[.4,.012,.3]);w(De,"#394447",[.93,1.08,-4.58],[.035,.42,.035]);let xe=y(De,"#ffe4a8",[.93,1.34,-4.58],[.18,.16,.18]);xe.material=U,le.userData.interiorDetails={portraits:3,sconces:2,documents:3,deskLamp:!0},z(De);let Qe=new ft(new Mi(.13,.036,8,16),new Ut({color:"#f8ce60",emissive:"#8c6322",emissiveIntensity:.5}));Qe.position.set(0,.88,-3),le.add(Qe),_(Qe,"#debb63",[0,-.2,0],[.065,.32,.065]);let V=be("cellar",11,15),ce=[],fe=new Oe;fe.name="cellar-static",V.add(fe);let Pe=Object.entries(Ye);for(let b of Ln){let E=new Oe;E.name="cell-door-"+b.id,E.position.set(b.x/ct,0,-1.5),V.add(E),ce[b.id]=E;for(let oe=-2;oe<=2;oe++)w(E,"#475759",[oe*.32,1.3,0],[.025,2.6,.025]);for(let oe of[.1,2.5])_(E,"#475759",[0,oe,0],[1.65,.055,.055]);for(let oe of[.45,2.15])w(E,"#394447",[-.78,oe,.07],[.045,.12,.045]);p(E,m("cell-padlock",()=>new Mi(.09,.022,6,12)),x("#a68854"),[.61,1.42,.07]),_(E,"#a68854",[.61,1.27,.07],[.18,.2,.08]),z(E);let q=b.x/ct,Z=["#738b90","#9b796d"][b.id%2];_(fe,"#a98961",[q,.18,-4.8],[1.55,.36,.8]),_(fe,"#e2dbc7",[q,.4,-4.8],[1.5,.1,.8]),_(fe,Z,[q,.47,-4.65],[1.42,.045,.48]),_(fe,"#d8d2c3",[q,.5,-5.08],[.64,.1,.24])}for(let b of[-3.8,0,3.8]){_(fe,"#394447",[b,2.54,-6.28],[.36,.15,.1]);let E=y(fe,"#ffe4a8",[b,2.34,-6.2],[.15,.2,.11]);E.material=U}V.userData.cellarDetails={cells:5,hinges:10,padlocks:5,lamps:3,bedding:5},z(fe);function re(b,E,q){let Z=b.hairStyles[E],oe=new Set;return Z.name=`${q}-hair-${E}`,Z.visible=!0,Z.traverse(we=>{we.isMesh&&oe.add(we)}),b.hairStyles.forEach((we,Xe)=>{Xe!==E&&we.removeFromParent()}),b.hairStyles=[Z],b.hairParts=b.hairParts.filter(we=>oe.has(we)),b.spear.removeFromParent(),b.raft.removeFromParent(),Object.values(b.props).forEach(we=>we.removeFromParent()),b.spear=b.raft=null,b.props={},b.root.userData.renderProfile={hairVariants:1,unusedToolMeshes:0},T(b,q),b}let te=re(t({shirt:"#577c87",skin:"#ddb08c",hair:"#40362f"},"player",P),0,"campaign-player");te.root.name="campaign-player",c.add(te.root);let Ne=new Map,Ze=new Map,vt=new Uint8Array(Ln.length),dt=Ln.map(()=>({x:0,z:0})),hn={swing:0,step:0,bounce:0},_n={gate:{shirt:"#526252",skin:"#c29574",hair:"#302e28",style:0},patrol:{shirt:"#59665a",skin:"#a96f55",hair:"#211f1e",style:1},hall:{shirt:"#4b5958",skin:"#d1a17d",hair:"#5b4032",style:2},boss:{shirt:"#34383a",skin:"#b67d60",hair:"#251f1c",style:1}};for(let b of e().guards){let E=_n[b.id],q=re(t(E,"guard",P),E.style,"campaign-guard-"+b.id);if(q.root.name="campaign-guard-"+b.id,q.root.userData.guardProfile={boss:b.id==="boss",style:E.style},b.id==="boss"){let Z=new Oe;Z.name="campaign-boss-insignia",q.hips.add(Z);for(let we of[-1,1])_(Z,"#d2aa58",[we*.2,.56,.02],[.12,.035,.18]);let oe=_(Z,"#8f2f2d",[0,.34,.15],[.055,.52,.025]);oe.rotation.z=-.48,q.root.userData.guardProfile.insignia=!0}c.add(q.root),Me(q.arms[1].forearm).position.set(0,-.24,.14),Ne.set(b.id,q)}let si=[{shirt:"#8da4b1",skin:"#c99370",hair:"#302d2a",style:0,scale:1.02},{shirt:"#b78876",skin:"#e1b894",hair:"#6a4938",style:1,scale:.96},{shirt:"#9caa8c",skin:"#b98264",hair:"#2f2927",style:2,scale:1},{shirt:"#c3b487",skin:"#dca984",hair:"#704936",style:1,scale:.72},{shirt:"#92b2b6",skin:"#e4bb96",hair:"#3f302b",style:2,scale:.76}];for(let b of Ln){let E=si[b.id],q=re(t(E,"resident",P),E.style,"campaign-prisoner-"+b.id);q.root.name="campaign-prisoner-"+b.id,q.root.scale.setScalar(E.scale),q.root.userData.residentProfile={child:b.child,style:E.style,scale:E.scale},c.add(q.root),Ze.set(b.id,q)}let rn=new Oe;l.add(rn),Me(rn).position.set(.26,-.23,-.48);let br=y(rn,"#ddb08c",[.24,-.32,-.4],[.065,.085,.08]),Sr=w(rn,"#577c87",[.22,-.4,-.3],[.085,.24,.085]);Sr.rotation.x=-.5;let un=new ft(new Mi(.42,.035,8,32),new Sn({color:"#f3d48a"}));un.rotation.x=-Math.PI/2,c.add(un);let ai=new at(new Float32Array(6),3),wi=new rr(new Pt().setAttribute("position",ai),new ki({color:"#ffe8ad"}));wi.frustumCulled=!1,c.add(wi);let An=new ur,Kn=new B,Ti={position:new B,target:new B},Ei=[],Ai={position:new B},Ci=0,Yt={x:0,z:0,surface:0,yaw:0,pitch:0,mode:"first",distance:4.6},oi=b=>b.distance>.2,Ri={height:25},S={},X={},Q={},j=[],W=new Map,he=new Map;W.misses=0;let ye=0,Ce=0,Te=0,Ke=0,Ve=0,ke=.05,je="first",Mt=0,_t=!0,bt=!1,ot=null,He=0,Nt=0,rt=!1,Wt={},yn={},sn={},On={},Ft={},an={},dn={},Zt=-1/0,Jt=0,li=e(),vn=Sl(li).target;vn&&(Ve=Math.atan2(li.p.x-vn.x,li.p.z-vn.z));function bs(b,E,q,Z,oe,we,Xe=!1,et="standing"){He++;let Re=b.root.userData.campaignPoseState||(b.root.userData.campaignPoseState={});if(!$x(Re,E,q,Z,oe,Xe,et))return;Nt++,b.root.position.set(E.x/ct,q,E.z/ct),b.root.rotation.set(0,0,0),b.rig.rotation.y=Z;let _e=Jx(hn,we,oe);for(let st of b.legs){let Ot=(st.side<0?-_e.swing:_e.swing)*_e.step;st.thigh.rotation.x=Ot,st.calf.rotation.x=Math.max(0,-Ot),st.shoe.rotation.x=-st.calf.rotation.x*.6}for(let st of b.arms)st.arm.rotation.x=oe?(st.side<0?_e.swing:-_e.swing)*.25:0,st.arm.rotation.z=0,st.forearm.rotation.x=-.18;b.hips.position.y=.87+_e.bounce*.009}function El(b){if(!_t||bt)return;let E=e();if(E.paused&&rt)return;rt=!!E.paused;let q=b/1e3;Mt=b,He=0,f.update();let Z=E.interior;Ox(Ft,Z,C,F,Pe,c,h,u),kx(yn,Z,E.p,cn,D);let oe=Z?0:ha(W,te.root,E.p.x,E.p.z,ri);if(te.root.visible=!E.boat||je==="third",!E.boat){let ge=zx(c,te.root);bs(te,E.p,oe,E.heading,E.walking,q,ge)}te.rig.visible=je==="third",ie.position.set((E.boat?E.p.x:gt[E.boatAt].x)/ct,.02,(E.boat?E.p.z:gt[E.boatAt].z)/ct),ie.rotation.y=E.boat?E.heading:Math.atan2(gt[E.boatAt].ux,gt[E.boatAt].uz),ie.rotation.z=E.boat?Math.sin(q*2)*.015:0,se.visible=E.boat&&E.walking,E.boat&&dd(te,ie),de.visible=!E.paper,Fe.visible=E.paper&&!E.gun,Qe.rotation.y=q,Vx(an,E.released,vt,ce);let we=!1,Xe=!1;Te=0;for(let ge of E.guards){ge.id==="boss"&&(Xe=ge.hp<=0);let qe=Ne.get(ge.id),Gt=ge.area===Z&&!E.boat&&(!ge.area||E.island==="fortress");if(qe.root.visible=Gt,!Gt)continue;let Nn=he.get(ge.id);Nn||(Nn={},he.set(ge.id,Nn));let Mn=Kx(Nn,ge,ge.hp>0),Al=jx(Nn,Math.atan2(E.p.x-ge.x,E.p.z-ge.z),ge.hp>0);Mn&&Te++,we||(we=Mn);let da=ge.area?0:ha(W,qe,ge.x,ge.z,ri);bs(qe,ge,da,Al,Mn,q,!1,ge.hp<=0?"fallen":"armed"),ge.hp<=0?(qe.rig.rotation.x=-Math.PI/2,qe.root.position.y=da+(ge.area?0:.15),qe.root.scale.setScalar(.8)):(qe.rig.rotation.x=0,qe.arms[1].arm.rotation.x=-1.05,qe.arms[1].forearm.rotation.x=-.35)}Qe.visible=!E.key&&Xe,E.released.length&&!E.boarded&&!E.boat&&(Z==="estate"||Z==="cellar"||E.island==="fortress")&&Yx(dt,Ln,E.p,E.heading);for(let ge of Ln){let qe=Ze.get(ge.id),Gt=!!vt[ge.id],Nn=E.boarded?!1:Gt?!E.boat&&(Z==="estate"||Z==="cellar"||E.island==="fortress"):Z==="cellar";if(qe.root.visible=Nn,!Nn)continue;let Mn=Gt?dt[ge.id]:ge;bs(qe,Mn,Z?0:ha(W,qe,Mn.x,Mn.z,ri),E.heading,Gt&&E.walking,q+ge.id*.18)}Hx(X,E,S,!Xe)&&ye++;let Re=S.target;Wx(sn,Z,E.p,Re,Ve,ke,je==="first"?.05:.22,On)&&(Ve=On.yaw,ke=On.pitch),Gx(Q,E,j)&&Ce++;let _e=Q.nearby,st=_e||Re;un.visible=!!st,st&&un.position.set(st.x/ct,(Z?0:ha(W,un,st.x,st.z,ri))+.08,st.z/ct),un.scale.setScalar(1+Math.sin(q*3)*.1),rn.visible=E.gun&&!E.boat&&je==="first",rn.position.z=E.shot?.025:0;let Ot=E.boat?.02+Ms.eye-1.64:oe,Ct=E.boat?Ms.seatZ:0;Yt.x=E.p.x/ct+Math.sin(E.heading)*Ct,Yt.z=E.p.z/ct+Math.cos(E.heading)*Ct,Yt.surface=Ot,Yt.yaw=Ve,Yt.pitch=ke,Yt.mode=je,Yt.distance=E.boat?7.5:4.6;let Vt=pl(Yt,Ti);if(Z&&je==="third"&&(Vt.position.x=sa.clamp(Vt.position.x,-5.1,5.1),Vt.position.z=sa.clamp(Vt.position.z,-5,8.1)),!Z&&je==="third"){let ge=Ai,qe=Vt.position,Gt=Vt.target;if(ge.ready&&ge.x===qe.x&&ge.y===qe.y&&ge.z===qe.z&&ge.tx===Gt.x&&ge.ty===Gt.y&&ge.tz===Gt.z)Vt.position.copy(ge.position);else{ge.ready=!0,ge.x=qe.x,ge.y=qe.y,ge.z=qe.z,ge.tx=Gt.x,ge.ty=Gt.y,ge.tz=Gt.z,Kn.subVectors(qe,Gt);let Nn=Kn.length();Kn.normalize(),An.set(Gt,Kn),An.far=Nn,Ci++;let Mn=ml(An,nt,!0,Ei).find(oi);Mn&&qe.copy(Gt).addScaledVector(Kn,Math.max(.35,Mn.distance-.22)),qe.y=Math.max(qe.y,ha(W,l,qe.x*ct,qe.z*ct,ri)+.24),ge.position.copy(qe)}}l.position.copy(Vt.position),l.lookAt(Vt.target),Bx(Z,q,l,G,N,H)&&Ke++;let Rt=qx(E,we,je==="third"),Ii=Xx(Wt,E,Rt)||Rt&&b-Zt>=1e3/30;s.shadowMap.needsUpdate=Ii,Ii&&(gl(u,E.p.x/ct,E.p.z/ct,Ri),Zt=b,Jt++),wi.visible=!!E.shot,E.shot&&Zx(ai,E.shot.from,E.shot.to,oe+1.35),s.render(c,l);let Cn=s.getPixelRatio(),Pi=Qx(dn,b,Cn,o,!E.paused);Pi!==Cn&&(s.setPixelRatio(Pi),L())}function L(){rt=!1,l.aspect=innerWidth/innerHeight,l.updateProjectionMatrix(),s.setSize(innerWidth,innerHeight,!1)}function Y(b,E=0){e().paused||(Ve+=b,ke=sa.clamp(ke+E,je==="first"?-.95:-.05,.75))}n.addEventListener("pointerdown",b=>{e().paused||b.button!==0||(ot={id:b.pointerId,x:b.clientX,y:b.clientY},n.setPointerCapture(b.pointerId))}),n.addEventListener("pointermove",b=>{ot?.id===b.pointerId&&(Y(-(b.clientX-ot.x)*.006,(b.clientY-ot.y)*.005),ot.x=b.clientX,ot.y=b.clientY)});for(let b of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(b,()=>ot=null);return n.addEventListener("webglcontextlost",b=>{b.preventDefault(),bt=!0,_t=!1,i?.()}),{frame:El,resize:L,orbit:Y,setCamera(b){je=b==="first"?"first":"third",ke=je==="first"?.05:.22,rt=!1},get cameraMode(){return je},get enabled(){return _t&&!bt},vector:(b,E)=>({x:b*Math.cos(Ve)+E*Math.sin(Ve),z:-b*Math.sin(Ve)+E*Math.cos(Ve)}),aim:()=>Ve+Math.PI,setEnabled(b){_t=!!b&&!bt,_t&&(rt=!1)},stats:()=>({calls:s.info.render.calls,triangles:s.info.render.triangles,pixelRatio:s.getPixelRatio(),eye:l.position.toArray(),camera:je,cameraBlockers:nt.length,cameraRaycasts:Ci,goalSelections:ye,nearbySelections:Ce,movingGuards:Te,palmBatches:H.treeBatches.length,largestPalmBatch:Math.max(...H.treeBatches.map(b=>b.count)),posedCharacters:He,poseUpdates:Nt,exteriorUpdates:Ke,palmLodDistanceChecks:H.treeBatches.length+H.foliageBatches.length,palmTrunkTriangles:H.treeBatches.reduce((b,E)=>b+E.count*E.geometry.index.count/3,0),unshadowedPalmTrunkTriangles:H.treeBatches.filter(b=>!b.receiveShadow).reduce((b,E)=>b+E.count*E.geometry.index.count/3,0),palmCrownTriangles:H.foliageBatches.reduce((b,E)=>b+E.count*E.geometry.index.count/3,0),lowDetailPalmBatches:H.treeBatches.filter(b=>b.userData.lod.level==="low").length,terrainTriangles:D.reduce((b,E)=>b+E.geometry.index.count/3,0),shadowReceivingTerrains:yn.active,shadowUpdates:Jt,terrainHeightSamples:W.misses}),dispose(){s.dispose(),f.dispose();let b=new Set([...g.values(),...H.lodGeometries]),E=new Set(d.values());c.traverse(q=>{if(q.geometry&&b.add(q.geometry),q.material)for(let Z of Array.isArray(q.material)?q.material:[q.material])E.add(Z)}),b.forEach(q=>q.dispose()),E.forEach(q=>q.dispose()),Be.dispose()}}}function wl(n,e){return Math.hypot(n.x-e.x,n.z-e.z)}function t_(n){return xd({...n,makeHuman:rh})}var Se=80,vd=[[1750,1300,1540,970],[3380,500,520,310],[4100,2400,390,290]],Yi=(n,e,t)=>Math.max(e,Math.min(t,n)),n_=n=>(n=Yi(n,0,1),n*n*(3-2*n)),i_=(n,e)=>Math.atan2(Math.sin(e-n),Math.cos(e-n)),r_=Object.freeze({}),_d=Math.cos(1),yd=Math.sin(1);function Un(n,e){let t=n*Se,i=e*Se,r=-1;for(let[a,o,c,l]of vd)r=Math.max(r,1-Math.hypot((t-a)/c,(i-o)/l));return r<=0?-.32:.015+n_(r/.17)*(.25+.28*(1+Math.sin(n*.23+1.3)*Math.cos(e*.27))+.12*Math.sin(n*.7)*Math.sin(e*.6))}function Md(n,e,t){return{x:n*Math.cos(t)+e*Math.sin(t),y:-n*Math.sin(t)+e*Math.cos(t)}}function bd(n,e,t=75){let i,r=t*t;for(let s of n||[]){let a=s.x-e.x,o=s.y-e.y,c=a*a+o*o;c<r&&(i=s,r=c)}return i}function Sd(n,e,t,i){let r=e&&e.remaining-(i-t);return r>0?(n.kind=e.kind,n.phase=1-r/(Qu[e.kind]||1e3),n):null}function wd(n,e){let t=e*1.3;return n.idleHip=Math.sin(e*1.7),n.idleArmSin=Math.sin(t),n.idleArmCos=Math.cos(t),n}function Td(n,e){let t=e*.7,i=e*.6;return n.xSin=Math.sin(t),n.xCos=Math.cos(t),n.zSin=Math.sin(i),n.zCos=Math.cos(i),n}function Ed(n,e){let t=Math.sin(e*6)*.15;return n[0]=t,n[1]=-t,n[2]=t,n[3]=-t,n}function Ad(n,e,t,i,r,s){return n.yawSin=Math.sin(t),n.yawCos=Math.cos(t),i||r?(n.phaseSin=Math.sin(e),n.phaseCos=Math.cos(e)):n.phaseSin=n.phaseCos=0,n.hips=(i?.9:.92)+(i?Math.cos(e*2)*.012:s.idleHip*.004),n}function Cd(n,e,t,i=new B){let r=Math.min(240,t*.52),s=e.projectionMatrix.elements[0]*t/2,a=0;for(let o of n){o.userData.signScale||(o.userData.signScale=o.scale.clone()),o.scale.copy(o.userData.signScale),o.getWorldPosition(i);let c=Math.max(.1,i.distanceTo(e.position)),l=o.scale.x*s/c;l>r&&o.scale.multiplyScalar(r/l),a++}return a}function Rd(n,e,t={}){let s=Yi(Math.hypot(n,e),.08,.855);return t.hip=-Math.atan2(e,-n)-Math.acos(Yi((.43*.43+s*s-.43*.43)/(2*.43*s),-1,1)),t.knee=Math.PI-Math.acos(Yi((.43*.43+.43*.43-s*s)/(2*.43*.43),-1,1)),t}function Id(n,e={}){let t=e.shirt||"#4c9cba",i=e.skin||"#dda879",r=e.hair||"#43332b",s=e.style||0;return n.lookShirt===t&&n.lookSkin===i&&n.lookHair===r&&n.lookStyle===s?!1:(n.lookShirt=t,n.lookSkin=i,n.lookHair=r,n.lookStyle=s,!0)}function ih(n){return n?Math.max(...[-1,0,1].flatMap(e=>[-1,0,1].map(t=>{let i=n.point(e*n.width/2,t*n.depth/2);return Un(i.x/Se,i.y/Se)}))):0}function Pd(n,e,t){let i=e?.x??null,r=e?.y??null,s=t||0;return n.ready&&n.x===i&&n.y===r&&n.level===s?!1:(n.ready=!0,n.x=i,n.y=r,n.level=s,n.layout=ju(e,t),n.elevation=ih(n.layout),!0)}function Dd(n,e={}){let t=e.activities||{},i=t.completed||0,r=e.basePos?.x??null,s=e.basePos?.y??null,a=e.baseLevel??null,o=e.campfire??null,c=e.fire?.x??null,l=e.fire?.y??null,h=i>=1,u=i>=3,f=i>=6,d=u&&t.gardenClaimed<i,g=t.raceWon??null;return n.ready&&n.level===a&&n.baseX===r&&n.baseY===s&&n.campfire===o&&n.fireX===c&&n.fireY===l&&n.first===h&&n.garden===u&&n.flag===f&&n.harvest===d&&n.raceWon===g?!1:(n.ready=!0,n.level=a,n.baseX=r,n.baseY=s,n.campfire=o,n.fireX=c,n.fireY=l,n.first=h,n.garden=u,n.flag=f,n.harvest=d,n.raceWon=g,!0)}function Ld(n,e=[]){let t=n.values||(n.values=[]),i=!n.ready||n.count!==e.length,r=0;for(let s of e){let a=s.type??null,o=s.x??null,c=s.y??null,l=!!s.done,h=s.symbol??null,u=s.label??null;t[r]!==a&&(i=!0),t[r++]=a,t[r]!==o&&(i=!0),t[r++]=o,t[r]!==c&&(i=!0),t[r++]=c,t[r]!==l&&(i=!0),t[r++]=l,t[r]!==h&&(i=!0),t[r++]=h,t[r]!==u&&(i=!0),t[r++]=u}return t.length=r,n.ready=!0,n.count=e.length,i}function ua(n,e,t=0,i=0){let r=e?.x??null,s=e?.y??null;return n.ready&&n.pointX===r&&n.pointY===s&&n.offsetX===t&&n.offsetZ===i?!1:(n.ready=!0,n.pointX=r,n.pointY=s,n.offsetX=t,n.offsetZ=i,n.valid=r!==null&&s!==null,n.valid&&(n.x=r/Se+t,n.z=s/Se+i,n.y=Un(n.x,n.z)),!0)}function nh(n,e,t,i=ih(t)){let r=Un(n,e);if(!t)return r;let s=t.floor;if(Math.abs(n*Se-s.x)<=s.w/2&&Math.abs(e*Se-s.y)<=s.h/2)return Math.max(r,i+.16);let a=n*Se-t.center.x,o=e*Se-t.center.y,c=a*t.fy-o*t.fx,l=a*t.fx+o*t.fy;return Math.abs(c)<t.door/2&&l>t.depth/2&&l<t.depth/2+64?r+(Math.max(r,i+.16)-r)*(1-(l-t.depth/2)/64):r}function Ud(n,e,t={}){let i=(f,d,g,x,m)=>{let p=new ft(m,new Ut({color:d}));return p.position.set(...g),p.scale.set(...x),f.add(p),p},r=t.cube||((f,d,g,x)=>i(f,d,g,x,new on(1,1,1))),s=t.tube||((f,d,g,x)=>i(f,d,g,x,new kt(1,1,1,10))),a=new Oe,o=n.width/Se,c=n.depth/Se,l=n.wallHeight/Se,h=n.roofRidge/Se,u=n.door/Se;a.name="base",a.position.set(n.center.x/Se,e,n.center.y/Se),a.rotation.y=n.yaw,r(a,"#a68854",[0,.08,0],[o,.16,c]).name="floor";for(let f of[-o/2+.1,o/2-.1])for(let d of[-c/2+.1,c/2-.1])s(a,"#876742",[f,l/2,d],[.075,l,.075]).name="post";for(let f of[-1,1]){let d=r(a,"#ba7655",[f*o/4,(l+h)/2,0],[Math.hypot(o/2+.2,h-l),.1,c+.36]);d.rotation.z=-f*Math.atan2(h-l,o/2+.2),d.name="roof"}for(let f of n.walls){let d=f.x-n.center.x,g=f.y-n.center.y,x=(d*n.fy-g*n.fx)/Se,m=(d*n.fx+g*n.fy)/Se;r(a,"#e2dbc7",[x,l/2,m],[n.fy?f.w/Se:f.h/Se,l,n.fy?f.h/Se:f.w/Se]).name="wall"}if(n.walls.length>=5){let f=n.doorHeight/Se;r(a,"#845f3f",[0,(l+f)/2,c/2],[u,l-f,.125]).name="lintel"}for(let f of n.beds){let d=f.x-n.center.x,g=f.y-n.center.y,x=(d*n.fy-g*n.fx)/Se,m=(d*n.fx+g*n.fy)/Se;r(a,"#7d654b",[x,.17,m],[.65,.34,1.125]).name="bed",r(a,"#cec6a0",[x,.38,m],[.65,.14,1.125]),r(a,"#ede3bd",[x,.49,m-.35],[.5,.09,.26])}return a}function Nd(n,e,{cube:t,tube:i,ell:r}){if(n==="gather"&&(i(e,"#8c6944",[0,-.12,.15],[.025,.48,.025]),t(e,"#8e9891",[0,.1,.15],[.27,.1,.075])),n==="fish"){let s=i(e,"#b2915b",[0,.22,.25],[.014,1.25,.014]);s.rotation.x=-.6;let a=i(e,"#d0e6df",[0,.37,.75],[.003,.62,.003]);a.rotation.x=.6}if(n==="cook"){let s=i(e,"#80613d",[0,-.12,.18],[.016,.5,.016]);s.rotation.x=-.6,r(e,"#bb9457",[0,-.26,.3],[.07,.04,.14])}}function rh(n={},e="player",t={}){let i=new Map,r=new Map,s=t.mat||(I=>(i.has(I)||i.set(I,new Ut({color:I})),i.get(I))),a=t.geo||((I,N)=>(r.has(I)||r.set(I,N()),r.get(I))),o=t.mesh||((I,N,G,H=[0,0,0],k=[1,1,1])=>{let ie=new ft(N,G);return ie.position.set(...H),ie.scale.set(...k),I.add(ie),ie}),c=t.ell||((I,N,G,H)=>o(I,a("ball",()=>new Tn(1,14,10)),s(N),G,H)),l=t.cube||((I,N,G,H)=>o(I,a("box",()=>new on(1,1,1)),s(N),G,H)),h=t.tube||((I,N,G,H)=>o(I,a("cyl",()=>new kt(1,1,1,10)),s(N),G,H)),u=new Oe,f=new Oe;u.add(f);let d=n.skin||"#dda879",g=n.hair||"#43332b",x=n.shirt||"#4c9cba",m=new Oe;m.position.y=.87,f.add(m),c(m,"#3f4d4f",[0,.05,0],[.22,.17,.13]);let p=a("human-torso",()=>new Zs([new We(.16,.13),new We(.205,.2),new We(.215,.38),new We(.25,.49),new We(.26,.52),new We(.19,.57),new We(.09,.64)],18));o(m,p,s(x),[0,0,0],[1,1,.66]);for(let I of[-1,1]){let N=l(m,x,[I*.065,.6,.071],[.085,.075,.024]);N.rotation.z=-I*.3,l(m,x,[I*.11,.37,.142],[.105,.09,.022])}for(let I=0;I<4;I++)c(m,"#d7d5c2",[0,.24+I*.075,.15],[.009,.01,.005]);e==="guard"&&l(m,"#39483f",[0,.35,.11],[.34,.36,.09]),l(m,"#3b4c48",[0,.135,-.01],[.4,.045,.255]),h(m,d,[0,.64,0],[.064,.13,.064]);let _=new Oe;_.position.y=.79,m.add(_),c(_,d,[0,0,0],[.135,.175,.133]),c(_,d,[-.137,-.005,0],[.025,.048,.025]),c(_,d,[.137,-.005,0],[.025,.048,.025]),c(_,d,[0,-.015,.136],[.026,.033,.036]);for(let I of[-1,1])c(_,"#f6f3df",[I*.052,.02,.115],[.03,.017,.014]),c(_,"#31433e",[I*.053,.02,.128],[.012,.013,.007]),l(_,g,[I*.052,.061,.11],[.062,.01,.014]);l(_,"#af735b",[0,-.071,.117],[.051,.009,.012]);let w=a("hair",()=>new Tn(1,16,10,0,Math.PI*2,0,Math.PI*.56));o(_,w,s(e==="nela"?"#8d4931":g),[0,.015,-.015],[.145,.18,.143]);let y=[new Oe,new Oe,new Oe];y.forEach(I=>_.add(I));let P=_.children.find(I=>I.isMesh&&I.geometry===w);_.remove(P),y[0].add(P),o(y[1],w,s(g),[0,.015,-.015],[.145,.18,.143]),c(y[1],g,[0,-.04,-.17],[.072,.14,.08]);for(let I=0;I<12;I++){let N=I*Math.PI*2/12;c(y[2],g,[Math.sin(N)*.1,.1+I%2*.018,Math.cos(N)*.1-.015],[.066,.067,.066])}if(c(y[2],g,[0,.15,-.015],[.09,.054,.09]),e==="nela"&&c(_,"#8d4931",[0,-.045,-.145],[.125,.21,.07]),y.forEach((I,N)=>I.visible=N===(n.style||0)),e==="leon")h(_,"#c5a775",[0,.15,0],[.16,.12,.16]),h(_,"#c5a775",[0,.095,0],[.22,.028,.22]),l(m,"#e4cda1",[0,.23,.145],[.33,.42,.025]);else if(e==="player"){c(m,"#5d735b",[0,.36,-.17],[.18,.22,.09]);for(let I of[-1,1])l(m,"#b6caa4",[I*.17,.38,-.04],[.034,.35,.029])}let C=[],F=[];for(let I of[-1,1]){let N=new Oe;N.position.set(I*.27,.54,0),m.add(N);let G=c(N,x,[-I*.018,-.025,0],[.105,.13,.11]);G.name="human-shoulder",o(N,a("human-upper-arm",()=>new kt(.068,.086,.19,12)),s(x),[0,-.105,0]),o(N,a("human-lower-upper-arm",()=>new kt(.055,.064,.15,12)),s(d),[0,-.24,0]);let H=new Oe;H.position.y=-.31,N.add(H);let k=c(H,d,[0,0,0],[.061,.063,.061]);k.name="human-elbow",o(H,a("human-forearm",()=>new kt(.057,.04,.26,12)),s(d),[0,-.13,0]),c(H,d,[0,-.28,0],[.06,.082,.046]),C.push({arm:N,forearm:H,side:I});let ie=new Oe;ie.position.set(I*.115,0,0),m.add(ie),o(ie,a("human-thigh",()=>new kt(.092,.108,.42,12)),s("#52625f"),[0,-.21,0]);let se=new Oe;se.position.y=-.43,ie.add(se);let ue=c(se,"#52625f",[0,0,.014],[.079,.074,.075]);ue.name="human-knee",o(se,a("human-calf",()=>new kt(.069,.046,.36,12)),s("#52625f"),[0,-.18,0]);let Ie=c(se,"#52625f",[0,-.36,0],[.052,.06,.052]);Ie.name="human-ankle";let Ge=c(se,"#4b3b2e",[0,-.395,.055],[.075,.052,.14]);F.push({thigh:ie,calf:se,shoe:Ge,side:I})}let z=new Oe;h(z,"#8c6944",[0,.56,0],[.018,1.75,.018]),c(z,"#dad9c5",[0,1.45,0],[.045,.15,.03]),z.position.set(.35,.2,.08),f.add(z),z.visible=!1;let T={};for(let I of["gather","fish","cook"]){let N=new Oe;Nd(I,N,{cube:l,tube:h,ell:c}),N.position.set(0,-.28,0),C[1].forearm.add(N),N.visible=!1,T[I]=N}let M=new Oe;u.add(M);for(let I=0;I<5;I++){let N=h(M,"#a17d48",[(I-2)*.25,.08,0],[.115,1.7,.115]);N.rotation.x=Math.PI/2}for(let I of[-.5,.5])l(M,"#6e5937",[0,.19,I],[1.24,.05,.1]);M.visible=!1;let A=[],O=[],D=[];return f.traverse(I=>{I.isMesh&&(I.material===s(x)&&A.push(I),I.material===s(d)&&O.push(I),I.material===s(g)&&D.push(I))}),{root:u,rig:f,hips:m,head:_,arms:C,legs:F,spear:z,raft:M,shirtParts:A,skinParts:O,hairParts:D,hairStyles:y,props:T,yaw:0,lastX:null,lastZ:null,phase:0}}function Fd(n,e){let t=e&&ed(e.kind,e.phase);n.rig.rotation.x=t?.bend||0;for(let[i,r]of Object.entries(n.props))r.visible=!!t&&e.kind===i;if(t)for(let i of n.arms)i.arm.rotation.x=i.side<0?t.left:t.right,i.forearm.rotation.x=-.25,i.arm.rotation.z=-i.side*.08+((i.side>0||e.kind==="cheer")&&t.wave||0)}function zd(n,e,t,i={}){let r=n.phase||0,s=e*.65+r,a=Math.sin(s),o=Math.cos(s),c=n.x+a*14,l=n.y+o*14;return t(c,l)?(i.x=c/Se,i.z=l/Se,i.y=.055+Math.sin(e*3+r)*.008,i.yaw=Math.atan2(o,-a),i.yawSin=o,i.yawCos=-a,i):null}function Tl(n,e,t,i,r,s,a,o,c=0){return n.position.set(e.x+e.yawSin*r+e.yawCos*t,e.y+i,e.z+e.yawCos*r-e.yawSin*t),n.rotation.set(c,e.yaw,0),n.scale.set(s,a,o),n.updateMatrix(),n}function s_({canvas:n,terrain:e,getState:t,onLost:i}){let r=new fs({canvas:n,antialias:!0,powerPreference:"high-performance"}),s=innerWidth<=700;r.setPixelRatio(Math.min(devicePixelRatio||1,s?1.25:1.6)),r.setSize(innerWidth,innerHeight,!1),r.outputColorSpace=Xt,r.toneMapping=ss,r.toneMappingExposure=.94,r.shadowMap.enabled=!0,r.shadowMap.type=rs;let a=new ir;a.background=new it("#c5dbe5"),a.fog=new nr("#c5dbe5",70,240);let o=new Kt(72,innerWidth/innerHeight,.04,350);a.add(o);let c=new lr("#c9e3ff","#71694d",1.85);a.add(c);let l=new hr("#fff0d2",3.1);l.castShadow=!0,l.shadow.mapSize.set(s?1024:2048,s?1024:2048),l.shadow.camera.left=-16,l.shadow.camera.right=16,l.shadow.camera.top=16,l.shadow.camera.bottom=-16,l.shadow.camera.near=.5,l.shadow.camera.far=65,l.shadow.bias=-12e-5,l.shadow.normalBias=.012,a.add(l,l.target);let h=fl(r),u=new Map,f=new Map;function d(L,Y={}){if(!Object.keys(Y).length){let E=h.forColor(L);if(E)return E}let b=L+JSON.stringify(Y);return u.has(b)||u.set(b,new Ut({color:L,roughness:.86,...Y})),u.get(b)}function g(L,Y){return f.has(L)||f.set(L,Y()),f.get(L)}function x(){return g("ball",()=>new Tn(1,14,10))}function m(){return g("box",()=>new on(1,1,1))}function p(){return g("cyl",()=>new kt(1,1,1,10))}function _(L,Y,b,E=[0,0,0],q=[1,1,1],Z=!0){let oe=new ft(Y,b);return oe.position.set(...E),oe.scale.set(...q),oe.castShadow=Z,oe.receiveShadow=!0,L.add(oe),oe}function w(L,Y,b,E){return _(L,x(),d(Y),b,E)}function y(L,Y,b,E){return _(L,m(),d(Y),b,E)}function P(L,Y,b,E){return _(L,p(),d(Y),b,E)}let C=new Et,F=new Pn(4600/Se,2900/Se,230,145);F.rotateX(-Math.PI/2),F.translate(2300/Se,0,1450/Se);let z=F.attributes.position;for(let L=0;L<z.count;L++)z.setY(L,Un(z.getX(L),z.getZ(L)));F.computeVertexNormals();let T=td(e),M=new Vi(T);M.anisotropy=Math.min(4,r.capabilities.getMaxAnisotropy());let A=h.ground(M),O=new ft(F,A);O.receiveShadow=!0,a.add(O);let D=sd({segments:s?24:48}),I=40;D.scale.set(1/I,1,1/I),D.position.x=6500/Se;for(let L of D.children)L.material.dispose(),L.material=yl(h,I),L.geometry.setAttribute("color",new at(new Float32Array(L.geometry.attributes.position.count*3).fill(1),3));let N=new Oe;N.scale.set(I,1,I),D.add(N);let G=(L,Y)=>{let b=rd(L,Y);return b?yr(b,L,Y):-.32};vl(N,$n,{scale:I,height:G,surfaces:h,small:s,clear:(L,Y,b)=>vr({x:Y,z:b},L.id)||L.id==="home"&&(Math.abs(b-40)<55||Math.abs(Y-23)<45)}),Ml(N,{scale:I,height:G,surfaces:h,helpers:{cube:y,tube:P,ell:w}}),a.add(D);let H=nd(a,Un,Se,T,s),k=xl([...vd.map(([L,Y,b,E])=>[L/Se,Y/Se,b/Se,E/Se]),...$n.map(L=>[D.position.x+L.x/I,L.z/I,L.radius*.955/I,L.radius*.955/I])]);a.add(k.mesh);let ie=_l(320);a.add(ie);function se(){let L=[],Y=[],b=[],E=(Z,oe,we,Xe)=>{let et=oe*2.05,Re=Math.sin(oe*Math.PI)*.46-oe*oe*.8;return[Math.sin(Z)*et+Math.cos(Z)*Xe*we,Re-Xe*.22,Math.cos(Z)*et-Math.sin(Z)*Xe*we]};for(let Z=0;Z<11;Z++){let oe=Z*Math.PI*2/11;for(let we=1;we<17;we++)for(let Xe of[-1,1]){let et=we/18,Re=Math.sin(et*Math.PI)*.42,_e=L.length/3;L.push(...E(oe,et-.023,Xe,.015),...E(oe,et-.085,Xe,Re),...E(oe,et+.038,Xe,Re*.88),...E(oe,et+.025,Xe,.015)),b.push(et,0,et,.9,et+.03,1,et+.03,0),Y.push(_e,_e+1,_e+2,_e,_e+2,_e+3)}}let q=new Pt;return q.setAttribute("position",new at(L,3)),q.setAttribute("uv",new at(b,2)),q.setIndex(Y),q.computeVertexNormals(),q}let ue=new kt(.085,.16,4.35,14,12);ue.translate(0,2.175,0);for(let L=0;L<ue.attributes.position.count;L++){let Y=ue.attributes.position;Y.setX(L,Y.getX(L)+.16*(Y.getY(L)/4.35)**2)}ue.computeVertexNormals();let Ie=d("#9d7750",{bumpMap:h.textures.get("rock"),bumpScale:.025});Ie.onBeforeCompile=L=>{L.vertexShader=L.vertexShader.replace("#include <common>",`#include <common>
varying float vTrunkY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vTrunkY=position.y;`),L.fragmentShader=L.fragmentShader.replace("#include <common>",`#include <common>
varying float vTrunkY;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=.80+.20*smoothstep(.1,.25,fract(vTrunkY*7.));`)};let Ge=se(),ut=h.surface("leaf","#ffffff",1,.018).clone();ut.side=Ht;let Je={value:0};ut.onBeforeCompile=L=>{L.uniforms.uWind=Je,L.vertexShader=L.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.y+=sin(uWind+position.x*2.0+position.z)*length(position.xz)*.018;`)};let $={tree:new At(ue,Ie,400),leaves:new At(Ge,ut,400),rock:new At(new sr(1,2),d("#92968b"),400),food:new At(x(),d("#7a5638"),400),shell:new At(new Tn(1,12,6,0,Math.PI),d("#f1d0b7"),400)};for(let L of Object.values($))L.count=0,L.castShadow=!0,L.receiveShadow=!0,L.frustumCulled=!1,a.add(L);let K=-1,pe=[],Ee=0,Ae={xSin:0,xCos:1,zSin:0,zCos:1};function tt(L,Y,b){if(b!==K){let q={tree:0,rock:0,food:0,shell:0};pe=[];for(let Z of L){let oe=Z.x/Se,we=Z.y/Se,Xe=Un(oe,we),et=Z.phase||0;if(Z.t==="tree"){let Re=Math.sin(et),_e=Math.cos(et),st=.84+.17*Math.sin(Z.x*.033+Z.y*.027),Ot=1.35+.28*_e;C.position.set(oe,Xe,we),C.rotation.set(.03*Re,et,.04*_e),C.scale.set(st,Ot,st),C.updateMatrix(),$.tree.setMatrixAt(q.tree++,C.matrix),pe.push({x:oe+.16*st*_e,y:Xe+4.3*Ot,z:we-.16*st*Re,p:et,size:st,phaseSin:Re,phaseCos:_e})}else $[Z.t]&&(C.position.set(oe,Xe+(Z.t==="rock"?.23:Z.t==="food"?.13:.025),we),C.rotation.set(0,et,0),C.scale.set(...Z.t==="rock"?[.34+.18*Math.abs(Math.sin(et)),.3,.4]:Z.t==="food"?[.15,.13,.15]:[.12,.04,.14]),C.updateMatrix(),$[Z.t].setMatrixAt(q[Z.t]++,C.matrix))}for(let Z of["tree","rock","food","shell"])$[Z].count=q[Z],$[Z].instanceMatrix.needsUpdate=!0;K=b,Ee++}Td(Ae,Y);let E=0;for(let q of pe)C.position.set(q.x,q.y,q.z),C.rotation.set((Ae.xSin*q.phaseCos+Ae.xCos*q.phaseSin)*.025,q.p,(Ae.zCos*q.phaseCos-Ae.zSin*q.phaseSin)*.025),C.scale.set(q.size,q.size,q.size),C.updateMatrix(),$.leaves.setMatrixAt(E++,C.matrix);$.leaves.count=E,$.leaves.instanceMatrix.needsUpdate=!0}let Le=new Set,U=new B;function yt(L,Y="#ffe9b5"){let b=document.createElement("canvas");b.width=512,b.height=96;let E=b.getContext("2d");E.fillStyle="#123e43",E.beginPath(),E.roundRect(6,10,500,76,25),E.fill(),E.fillStyle=Y,E.font="700 29px system-ui",E.textAlign="center",E.textBaseline="middle",E.fillText(String(L).slice(0,45),256,48,480);let q=new Vi(b);q.colorSpace=Xt;let Z=new Xs(new Qr({map:q,depthTest:!0,transparent:!0}));return Z.scale.set(2.45,.46,1),Z.position.y=2.32,Le.add(Z),Z}let nt=["#4c9cba","#df8168","#9974c7","#76b677"];function Ye(L={},Y="player",b=""){let E=rh(L,Y,{ell:w,cube:y,tube:P,mesh:_,mat:d,geo:g});return a.add(E.root),E.name=b,E.tag=null,b&&(E.tag=yt(b,L.shirt),E.root.add(E.tag)),E}let be=Ye(dl()),xt=new Map,Ue=Ye({skin:"#d1a074",shirt:"#b49966"},"leon","LEON \xB7 HANDEL"),$e=Ye({skin:"#edc39a",shirt:"#609991"},"nela","NELA \xB7 ZADANIA");function St(L,Y,b){!Y||Y===L.name||(L.tag&&(Le.delete(L.tag),L.root.remove(L.tag),L.tag.material.map.dispose(),L.tag.material.dispose()),L.name=Y,L.tag=yt(Y,b),L.root.add(L.tag))}function zt(L,Y){if(Id(L,Y)){for(let b of L.shirtParts)b.material=d(L.lookShirt);for(let b of L.skinParts)b.material=d(L.lookSkin);for(let b of L.hairParts)b.material=d(L.lookHair);L.hairStyles.forEach((b,E)=>b.visible=E===L.lookStyle)}}let R=null,v=0,J={},ne={idleHip:0,idleArmSin:0,idleArmCos:0},ae={yawSin:0,yawCos:1,phaseSin:0,phaseCos:1},ee={hip:0,knee:0},Be={x:0,z:0,y:0,yaw:0,yawSin:0,yawCos:1};function de(L,Y,b,E,q,Z,oe,we,Xe=!1,et=null,Re=!1,_e=!1){let st=Y.x/Se,Ot=Y.y/Se,Ct=we(Y.x,Y.y),Vt=Ct?0:nh(st,Ot,R,v);L.root.position.set(st,Vt+(Ct?Xe?.18:-.95:0),Ot),L.yaw+=i_(L.yaw,b)*Math.min(1,Z*12),L.rig.rotation.y=L.yaw;let Rt=E&&oe>.05;L.phase+=Rt?Z*(oe>4?10:7):0;let Ii=Rt?oe>4?.31:.22:0,Cn=L.phase,Pi=Ct&&!Xe,ge=Ad(ae,Cn,L.yaw,Rt,Pi,ne);L.hips.position.y=ge.hips;for(let qe of L.legs){let Gt=qe.side<0?-ge.phaseSin:ge.phaseSin,Nn=qe.side<0?-ge.phaseCos:ge.phaseCos,Mn=Gt*Ii,Al=Rt?Math.max(0,Nn)*.105:0,da=st+ge.yawCos*qe.side*.115+ge.yawSin*Mn,Od=Ot-ge.yawSin*qe.side*.115+ge.yawCos*Mn,Bd=Ct?0:nh(da,Od,R,v)-Vt,fa=Rd(-L.hips.position.y+.07+Bd+Al,Mn,ee);qe.thigh.rotation.x=fa.hip,qe.calf.rotation.x=fa.knee,qe.shoe.rotation.x=-fa.hip-fa.knee}for(let qe of L.arms)qe.arm.rotation.x=Rt?(qe.side<0?ge.phaseSin:-ge.phaseSin)*.45:(ne.idleArmSin*_d+ne.idleArmCos*qe.side*yd)*.025,qe.arm.rotation.z=-qe.side*.07,qe.forearm.rotation.x=Rt?-.22:-.08,Pi&&(qe.arm.rotation.x=-Math.PI/2+(ge.phaseSin*_d+ge.phaseCos*qe.side*yd)*.35,qe.forearm.rotation.x=-.28);Fd(L,et),L.raft.visible=!!(Ct&&Xe),L.raft.rotation.y=L.yaw,L.spear.visible=!!Re&&!Ct&&!et,_e&&(L.arms[0].arm.rotation.x=-1,L.arms[0].forearm.rotation.x=-1),L.tag&&(L.tag.visible=Math.hypot(st-be.root.position.x,Ot-be.root.position.z)<13),L.lastX=st,L.lastZ=Ot}let Me=new Oe;a.add(Me);for(let L of[-.55,.55])for(let Y of[-.27,.27])P(Me,"#866642",[L,1.24,Y],[.038,2.48,.038]);y(Me,"#a7c4b7",[0,.34,0],[1.24,.68,.67]),y(Me,"#a98961",[0,.69,0],[1.24,.09,.67]);for(let L of[-1,1]){let Y=y(Me,"#ba7655",[L*.39,2.63,0],[.9,.07,1.14]);Y.rotation.z=-L*.34}let Fe=P(Me,"#ba7655",[0,2.79,0],[.055,1.18,.055]);Fe.rotation.x=Math.PI/2;for(let L of[-.5,.5])y(Me,"#e2dbc7",[0,2.4,L],[1.7,.1,.07]);for(let L=0;L<5;L++)y(Me,"#a98961",[(L-2)*.24,.32,.344],[.21,.53,.025]);for(let L=0;L<4;L++)w(Me,"#b1b967",[(L-1.5)*.19,.78,0],[.09,.08,.08]);let le=new Oe;a.add(le),y(le,"#765734",[0,.18,0],[.56,.36,.4]),y(le,"#9a743e",[0,.39,0],[.6,.1,.42]);for(let L of[-.19,.19])y(le,"#d5b15a",[L,.2,.215],[.045,.35,.026]);y(le,"#ecd178",[0,.32,.22],[.08,.09,.03]);let me=new ft(new ar(.24,.29,32),new Sn({color:"#ffe087",transparent:!0,opacity:.8,side:Ht,depthWrite:!1}));me.rotation.x=-Math.PI/2,a.add(me);let De={},ze={},xe={},Qe={},V={root:new Oe,tag:null,name:null};a.add(V.root),V.root.position.set(oa.x/Se,Un(oa.x/Se,oa.y/Se),oa.y/Se),P(V.root,"#786040",[0,.95,0],[.12,1.9,.12]),y(V.root,"#234f58",[0,1.65,0],[1.55,.55,.1]);let ce=new Oe;a.add(ce);let fe=new ft(new ar(.93,1.06,40),new Sn({color:"#54e4ef",transparent:!0,opacity:.85,side:Ht,depthWrite:!1}));fe.rotation.x=-Math.PI/2,fe.position.y=.04,ce.add(fe);let Pe=_(ce,new kt(.035,.035,1,8),new Sn({color:"#76eff7",transparent:!0,opacity:.5}),[0,1.25,0],[1,2.5,1],!1),re=null,te=0,Ne={},Ze=new Oe,vt=null,dt=null,hn=[];a.add(Ze);function _n(L){let Y=L.activities?.completed||0,b=Y>=3&&L.activities.gardenClaimed<Y;if(Dd(Ne,L)){dt&&(dt.geometry.dispose(),dt.material.dispose());for(let E of hn)E.dispose();if(hn=[],a.remove(Ze),Ze=new Oe,a.add(Ze),dt=null,vt=null,L.basePos&&L.baseLevel){let E=R,q=id(Ud(E,v,{cube:y,tube:P}),E,{cube:y,tube:P},h);if(Ze.add(q),q.traverse(Z=>{["roof","wall","lintel"].includes(Z.name)&&(Z.material=Z.material.clone(),Z.material.transparent=!0,hn.push(Z.material))}),Y>=1)for(let Z of[-1,1]){let oe=w(q,"#ffdc80",[Z*(E.width/Se/2-.15),2.35,E.depth/Se/2],[.09,.14,.09]);oe.material=d("#ffdc80",{emissive:"#dca739",emissiveIntensity:.7})}if(Y>=6&&(P(q,"#6e5942",[E.width/Se/2+.2,1.75,-E.depth/Se/2],[.03,3.5,.03]),y(q,"#5bbca9",[E.width/Se/2+.55,3.1,-E.depth/Se/2],[.7,.42,.03])),Y>=3&&L.garden){let Z=L.garden,oe=new Oe;oe.position.set(Z.x/Se,Un(Z.x/Se,Z.y/Se),Z.y/Se),Ze.add(oe),y(oe,"#785d40",[0,.07,0],[1.35,.14,1]);for(let we of[-.4,0,.4])for(let Xe of[-.25,.25])P(oe,"#587b37",[we,.21,Xe],[.025,.3,.025]),w(oe,"#6caa49",[we,.35,Xe],[.16,.12,.12]),b&&w(oe,"#cfa565",[we+.055,.27,Xe],[.07,.065,.07])}}if(L.campfire&&L.fire){let E=new Oe,q=L.fire.x/Se,Z=L.fire.y/Se;E.position.set(q,Un(q,Z),Z),Ze.add(E);for(let oe=0;oe<8;oe++){let we=oe*Math.PI/4;w(E,"#777a6b",[Math.sin(we)*.3,.07,Math.cos(we)*.3],[.095,.07,.105])}for(let oe of[.5,-.5]){let we=P(E,"#614b35",[0,.09,0],[.06,.5,.06]);we.rotation.z=Math.PI/2,we.rotation.y=oe}dt=_(E,new qn(.17,.46,8),new Sn({color:"#ffb647",transparent:!0,opacity:.88}),[0,.28,0]),vt=new cr("#ffa145",2.5,4),vt.position.y=.5,E.add(vt)}}}let si=[],rn=[0,0,0,0];function br(){let L=new Oe;a.add(L),w(L,"#765745",[0,.29,0],[.24,.25,.43]),w(L,"#765745",[0,.3,.4],[.19,.18,.2]),w(L,"#ae8b68",[0,.26,.58],[.11,.065,.065]);for(let b of[-1,1]){let E=_(L,new qn(.08,.17,3),d("#644937"),[b*.13,.47,.43]);E.rotation.z=b*.45}let Y=[];for(let b of[-.17,.17])for(let E of[-.27,.24])Y.push(P(L,"#5e493b",[b,.105,E],[.037,.2,.037]));return{root:L,legs:Y,lastX:null,lastZ:null}}function Sr(L,Y){for(;si.length<L.length;)si.push(br());let b=!1;for(let E=0;E<si.length;E++){let q=si[E],Z=L[E];if(q.root.visible=!!Z,!Z){q.lastX=q.lastZ=null;continue}let oe=Z.x/Se,we=Z.y/Se,Xe=q.lastX===null?0:oe-q.lastX,et=q.lastZ===null?0:we-q.lastZ,Re=Math.hypot(Xe,et)>1e-4;q.root.position.set(oe,Un(oe,we),we),Re&&(q.root.rotation.y=Math.atan2(Xe,et),b||(Ed(rn,Y),b=!0));for(let _e=0;_e<4;_e++)q.legs[_e].rotation.x=Re?rn[_e]:0;q.lastX=oe,q.lastZ=we}}let un=[new At(x(),d("#adddd0",{roughness:.4}),96),new At(new qn(1,1,3),d("#668e93"),96),new At(new qn(1,1,3),d("#779da0"),96)];for(let L of un)L.count=0,L.frustumCulled=!1,a.add(L);function ai(L,Y,b){let E=0;for(let q of L||[]){let Z=zd(q,Y,b,Be);!Z||E>=96||(Tl(C,Z,0,0,0,.09,.045,.22),un[0].setMatrixAt(E,C.matrix),Tl(C,Z,0,0,-.25,.095,.12,.025,Math.PI/2),un[1].setMatrixAt(E,C.matrix),Tl(C,Z,0,.045,-.02,.04,.1,.11),un[2].setMatrixAt(E,C.matrix),E++)}for(let q of un)q.count=E,q.instanceMatrix.needsUpdate=!0}let wi={},An=[];function Kn(L,Y){if(Ld(wi,L)){for(let b of An)a.remove(b),b.traverse(E=>{E.isSprite&&(Le.delete(E),E.material.map.dispose(),E.material.dispose()),E.userData.privateGeometry&&E.geometry.dispose()});An=[];for(let b of L||[]){if(b.type==="return")continue;let E=new Oe;E.position.set(b.x/Se,Un(b.x/Se,b.y/Se),b.y/Se),a.add(E),An.push(E);let q=new ft(new ar(.4,.46,28),d(b.done?"#6d9c89":"#8cebd5",{side:Ht}));if(q.rotation.x=-Math.PI/2,q.position.y=.03,q.userData.privateGeometry=!0,E.add(q),b.type==="fragment"&&(y(E,"#e1c587",[0,.38,0],[.37,.45,.06]),y(E,"#a68752",[0,.18,-.035],[.035,.42,.035]),y(E,"#826b4d",[0,.4,.035],[.19,.022,.02])),b.type==="rune"){w(E,"#87998a",[0,.26,0],[.27,.3,.21]);let oe=yt(b.symbol,"#ffe29b");oe.position.y=.8,oe.scale.set(.65,.32,1),E.add(oe)}if(b.type==="chest"){y(E,"#795a39",[0,.2,0],[.65,.4,.44]),y(E,"#bb9251",[0,.42,0],[.69,.06,.46]);for(let oe of[-.21,.21])y(E,"#f1d584",[oe,.23,.235],[.05,.36,.025])}if(b.type==="signal"){for(let oe of[-1,1]){let we=P(E,"#8a6d49",[oe*.22,.55,0],[.04,1.1,.04]);we.rotation.z=oe*.22}if(y(E,"#927652",[0,1.1,0],[.7,.16,.45]),b.done){let oe=w(E,"#ffe28d",[0,1.34,0],[.16,.21,.16]);oe.material=d("#ffe28d",{emissive:"#ffa842",emissiveIntensity:1})}else y(E,"#344f57",[0,1.3,0],[.3,.18,.24])}let Z=yt(b.label,b.done?"#b5d1c5":"#ffe9b5");Z.position.y=b.type==="signal"?1.95:1.35,E.add(Z),E.userData.done=b.done}}for(let b of An)b.children[0].scale.setScalar(b.userData.done?1:1+Math.sin(Y*2.8)*.05)}let Ti=[];for(let L=0;L<4;L++){let Y=new Pt().setFromPoints([new B(-.3,0,0),new B(0,-.08,0),new B(.3,0,0)]),b=new rr(Y,new ki({color:"#fff7de"}));a.add(b),Ti.push(b)}let Ei=Math.atan2(-130,-60),Ai=0,Ci=4.8,Yt=!0,oi=!0,Ri=0,S=null,X=!1,Q=0,j="first",W=new Oe;o.add(W);let he=P(W,"#52625f",[.28,-.36,-.42],[.1,.34,.1]);he.rotation.x=-.65;let ye=w(W,"#dda879",[.29,-.27,-.58],[.055,.08,.055]),Ce=new Oe;W.add(Ce);let Te=P(Ce,"#876742",[.32,-.17,-.75],[.014,1.55,.014]);Te.rotation.x=-.22;let Ke=w(Ce,"#b3b6ac",[.32,.61,-.91],[.039,.12,.025]),Ve={};for(let L of["gather","fish","cook"]){let Y=new Oe;Y.position.set(.29,-.26,-.61),W.add(Y),Nd(L,Y,{cube:y,tube:P,ell:w}),Ve[L]=Y}let ke=Object.entries(Ve),je={down:0,up:Math.PI,left:-Math.PI/2,right:Math.PI/2},Mt=new Set;W.traverse(L=>{L.isMesh&&(L.castShadow=!1,L.receiveShadow=!1,L.frustumCulled=!1)});let _t=new B,bt=new B,ot=new B,He=new B,Nt={position:ot,target:_t},rt={x:0,z:0,surface:0,yaw:0,pitch:0,mode:"first",distance:4.8,bob:0},Wt=new B,yn=new ur,sn=[Ze,Me],On=[],Ft=L=>L.object.isMesh&&L.distance>.1;function an(L,Y=0){!Yt||t().paused||(Ei+=L,Ai=Yi(Ai+Y,j==="first"?-1.12:-.05,j==="first"?1.12:.75))}function dn(L){j=L==="third"?"third":"first",Ai=L==="third"?.22:0,o.fov=L==="third"?58:72,o.updateProjectionMatrix(),S=null,oi=!0}n.addEventListener("pointerdown",L=>{let Y=t();!Yt||!Y.play||Y.paused||L.button>0||S||(S={id:L.pointerId,x:L.clientX,y:L.clientY},n.setPointerCapture(L.pointerId))}),n.addEventListener("pointermove",L=>{!S||S.id!==L.pointerId||(an(-(L.clientX-S.x)*.006,(L.clientY-S.y)*.005),S.x=L.clientX,S.y=L.clientY)});let Zt=L=>{S?.id===L.pointerId&&(S=null)};for(let L of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(L,Zt);n.addEventListener("wheel",L=>{!Yt||t().paused||(L.preventDefault(),j==="first"?(o.fov=Yi(o.fov+L.deltaY*.025,58,85),o.updateProjectionMatrix()):Ci=Yi(Ci+L.deltaY*.004,2.5,8))},{passive:!1}),n.addEventListener("webglcontextlost",L=>{L.preventDefault(),X=!0,Yt=!1,S=null,i()}),n.addEventListener("webglcontextrestored",()=>{X=!1,oi=!0});function Jt(){r.setSize(innerWidth,innerHeight,!1),o.aspect=innerWidth/innerHeight,o.updateProjectionMatrix()}function li(L){if(!Yt||X)return;let Y=t(),b=L/1e3,E=Ri?Yi((L-Ri)/1e3,0,.06):1/60;Ri=L,wd(ne,b),Pd(J,Y.basePos,Y.baseLevel),R=J.layout,v=J.elevation,St(V,Y.labels?.board,"#ffe087"),V.tag&&(V.tag.position.y=1.65,V.tag.scale.set(1.4,.36,1)),ce.visible=!!Y.trail,Y.trail&&(ua(xe,Y.trail)&&ce.position.set(xe.x,xe.y,xe.z),Pe.material.opacity=.35+.13*Math.sin(b*3),(te!==Y.trailNumber||re?.userData.text!==(Y.trailNumber===4?Y.labels?.finish||"4":Y.trailNumber?String(Y.trailNumber):Y.trail.label))&&(re&&(Le.delete(re),ce.remove(re),re.material.map.dispose(),re.material.dispose()),te=Y.trailNumber,re=yt(te===4?Y.labels?.finish||"4":te?String(te):Y.trail.label,"#54e4ef"),re.userData.text=te===4?Y.labels?.finish||"4":te?String(te):Y.trail.label,re.position.y=1.5,re.scale.set(Y.trailNumber?1:2.45,.4,1),ce.add(re))),St(Ue,Y.labels?.leon,"#b49966"),St($e,Y.labels?.nela,"#609991");let q=Y.P.x/Se,Z=Y.P.y/Se;h.update(),H.update(b,R),Je.value=b,ie.material.uniforms.uTime.value=b,tt(Y.objects,b,Y.resourceRevision),ai(Y.fishes,b,Y.sea),Kn(Y.chapterMarkers,b),de(be,Y.P,Number.isFinite(Y.heading)?Y.heading:je[Y.face]||0,Y.moving,b,E,Y.fast?5.25:3,Y.sea,Y.raft,Y.motion,Y.spear,Y.blocked),Ue.root.visible=$e.root.visible=!0,de(Ue,Y.leon,Math.atan2(q-Y.leon.x/Se,Z-Y.leon.y/Se),!1,b,E,0,Y.sea),de($e,Y.nela,Math.atan2(q-Y.nela.x/Se,Z-Y.nela.y/Se),!1,b,E,0,Y.sea),Mt.clear();for(let Re of Y.players){if(Re.id===Y.you)continue;Mt.add(Re.id);let _e=xt.get(Re.id),st,Ot=Y.looks[Re.slot]||r_;!_e||_e.name!==Re.name?(st=Re.appearance?dl(Re.appearance):Ot,_e&&vn(_e),_e=Ye(st,"player",Re.name),_e.remoteLook={...st},_e.remoteMotion={kind:null,phase:0},xt.set(Re.id,_e)):st=Re.appearance?qc(_e.remoteLook,Re.appearance):Ot,zt(_e,st);let Ct=_e.lastX===null?0:Re.point.x/Se-_e.lastX,Vt=_e.lastZ===null?0:Re.point.y/Se-_e.lastZ,Rt=Re.moving&&Math.hypot(Ct,Vt)>.002?Math.atan2(Ct,Vt):je[Re.face]||0,Ii=Sd(_e.remoteMotion,Re.motion,Re.received,L);de(_e,Re.point,Rt,Re.moving,b,E,3,Y.sea,!1,Ii,Y.spearOwned&&!Re.spearStowed,Re.blocked)}for(let[Re,_e]of xt)Mt.has(Re)||(vn(_e),xt.delete(Re));zt(be,Y.appearance||dl()),ua(De,Y.leon,.9,.15)&&Me.position.set(De.x,De.y,De.z),ua(ze,Y.chest)&&le.position.set(ze.x,ze.y,ze.z),le.visible=!Y.treasure,_n(Y),Sr(Y.enemies,b);let oe=R&&Math.abs(Y.P.x-R.floor.x)<R.floor.w/2&&Math.abs(Y.P.y-R.floor.y)<R.floor.h/2;for(let Re of hn)Re.opacity=oe&&j==="third"?.23:1,Re.depthWrite=!(oe&&j==="third");dt&&(dt.scale.y=1+Math.sin(b*13)*.18,vt.intensity=2.5+Math.sin(b*17)*.4);let we=bd(Y.objects,Y.P);me.visible=!!(Y.play&&!Y.paused&&we),we&&ua(Qe,we)&&me.position.set(Qe.x,Qe.y+.03,Qe.z);for(let Re=0;Re<Ti.length;Re++){let _e=Ti[Re];_e.position.set(19+Math.sin(b*.08+Re*1.7)*8,7+Math.sin(b*.2+Re)*.5,12+Math.cos(b*.1+Re*1.3)*5),_e.rotation.y=b*.1+Re,_e.scale.y=1+Math.sin(b*7+Re)*.5}be.rig.visible=j!=="first";let Xe=Y.moving&&!Y.paused?Math.sin(be.phase*2)*.012:0;if(rt.x=q,rt.z=Z,rt.surface=be.root.position.y,rt.yaw=Ei,rt.pitch=Ai,rt.mode=j,rt.distance=Ci*(o.aspect<.85?1.12:1),rt.bob=Xe,pl(rt,Nt),j==="third"){ot.y=Math.max(ot.y,Un(ot.x,ot.z)+.55),Wt.subVectors(ot,_t);let Re=Wt.length();Wt.normalize(),yn.set(_t,Wt),yn.near=.08,yn.far=Re;let _e=ml(yn,sn,!0,On).find(Ft);_e&&ot.copy(_t).addScaledVector(Wt,Math.max(.35,_e.distance-.15))}j==="first"||oi||He.distanceTo(be.root.position)>5?(o.position.copy(ot),bt.copy(_t),oi=!1):(Zc(o.position,ot,E,8),Zc(bt,_t,E,12)),o.lookAt(j==="first"?_t:bt),He.copy(be.root.position),Cd(Le,o,innerWidth,U);let et=!!Y.spear||!!Y.motion&&(Y.motion.kind==="gather"||Y.motion.kind==="fish"||Y.motion.kind==="cook");W.visible=j==="first"&&Y.play&&et&&!Y.sea(Y.P.x,Y.P.y),Ce.visible=!!Y.spear&&!Y.motion;for(let[Re,_e]of ke)_e.visible=Y.motion?.kind===Re;W.position.y=Xe*.4,W.rotation.x=Y.motion?Math.sin(Y.motion.phase*Math.PI*2)*.07:0,ye.material=d(Y.appearance?.skin||"#dda879"),he.material=d(Y.appearance?.shirt||"#4c9cba"),gl(l,q,Z),ie.position.copy(o.position),k.update(b,o.position),r.render(a,o),Y.play&&E>.038?Q+=E:Q=Math.max(0,Q-E),Q>3&&r.getPixelRatio()>.85&&(r.setPixelRatio(Math.max(.85,r.getPixelRatio()-.15)),Jt(),Q=0)}function vn(L){a.remove(L.root),L.tag&&(Le.delete(L.tag),L.tag.material.map.dispose(),L.tag.material.dispose())}function bs(L){return Yt=!!L&&!X,S=null,oi=!0,Ri=0,Yt}function El(){Yt=!1,r.dispose(),F.dispose(),A.dispose(),k.dispose(),ie.geometry.dispose(),ie.material.dispose(),D.traverse(L=>{L.geometry&&L.geometry.dispose(),L.material&&L.material.dispose()}),M.dispose(),H.dispose(),h.dispose(),ut.dispose();for(let L of[...Object.values($),...un])L.geometry.dispose(),L.dispose();for(let L of f.values())L.dispose();for(let L of u.values())L.dispose()}return{frame:li,resize:Jt,orbit:an,setEnabled:bs,setCamera:dn,dispose:El,vector:(L,Y)=>Md(L,Y,Ei),get enabled(){return Yt},get yaw(){return Ei},get cameraMode(){return j},stats:()=>({calls:r.info.render.calls,triangles:r.info.render.triangles,pixelRatio:r.getPixelRatio(),people:xt.size+3,camera:j,eye:o.position.toArray(),resourceStaticUpdates:Ee,materials:h.stats()})}}return Xd(a_);})();
