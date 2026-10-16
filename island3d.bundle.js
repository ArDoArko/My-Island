var MyIsland3D=(()=>{var Zo=Object.defineProperty;var Gu=Object.getOwnPropertyDescriptor;var Hu=Object.getOwnPropertyNames;var Wu=Object.prototype.hasOwnProperty;var Xu=(i,e)=>{for(var t in e)Zo(i,t,{get:e[t],enumerable:!0})},qu=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Hu(e))!Wu.call(i,r)&&r!==t&&Zo(i,r,{get:()=>e[r],enumerable:!(n=Gu(e,r))||n.enumerable});return i};var Yu=i=>qu(Zo({},"__esModule",{value:!0}),i);var O0={};Xu(O0,{SCALE:()=>be,actionPose:()=>Bu,baseElevation:()=>vc,buildBase:()=>zu,buildHuman:()=>Mc,cameraVector:()=>Uu,create:()=>z0,createCampaign:()=>U0,drawCampaign2D:()=>_c,fishPose:()=>ku,legPose:()=>Fu,nearestWithin:()=>Nu,terrainHeight:()=>tn,walkSurface:()=>yc});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Kc=0,Cl=1,jc=2;var Rl=1,Dr=2,Fn=3,$n=0,Yt=1,Rt=2,ti=0,Ai=1,Il=2,Pl=3,Dl=4,Qc=5,di=100,eh=101,th=102,nh=103,ih=104,rh=200,sh=201,ah=202,oh=203,da=204,fa=205,lh=206,ch=207,hh=208,uh=209,dh=210,fh=211,ph=212,mh=213,gh=214,Ba=0,ka=1,Va=2,Ci=3,Ga=4,Ha=5,Wa=6,Xa=7,Ll=0,xh=1,_h=2,ni=0,yh=1,vh=2,Mh=3,Lr=4,bh=5,Sh=6,wh=7;var Ul=300,ki=301,Vi=302,qa=303,Ya=304,As=306,xr=1e3,ui=1001,pa=1002,an=1003,Th=1004;var Cs=1005;var Tn=1006,Za=1007;var xi=1008;var Cn=1009,Nl=1010,Fl=1011,Ur=1012,Ja=1013,_i=1014,Rn=1015,Nr=1016,$a=1017,Ka=1018,Fr=1020,zl=35902,Ol=35899,Bl=1021,kl=1022,_n=1023,_r=1026,zr=1027,ja=1028,Qa=1029,Vl=1030,eo=1031;var to=1033,Rs=33776,Is=33777,Ps=33778,Ds=33779,no=35840,io=35841,ro=35842,so=35843,ao=36196,oo=37492,lo=37496,co=37808,ho=37809,uo=37810,fo=37811,po=37812,mo=37813,go=37814,xo=37815,_o=37816,yo=37817,vo=37818,Mo=37819,bo=37820,So=37821,wo=36492,To=36494,Eo=36495,Ao=36283,Co=36284,Ro=36285,Io=36286;var hs=2300,ma=2301,ha=2302,vl=2400,Ml=2401,bl=2402;var Eh=3200,Ah=3201;var Gl=0,Ch=1,In="",Lt="srgb",Ri="srgb-linear",us="linear",wt="srgb";var Ei=7680;var Sl=519,Rh=512,Ih=513,Ph=514,Hl=515,Dh=516,Lh=517,Uh=518,Nh=519,ga=35044;var Wl="300 es",wn=2e3,ds=2001;var Kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bc=1234567,ls=Math.PI/180,yr=180/Math.PI;function Zn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function ht(i,e,t){return Math.max(e,Math.min(t,i))}function Xl(i,e){return(i%e+e)%e}function Zu(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Ju(i,e,t){return i!==e?(t-i)/(e-i):0}function cs(i,e,t){return(1-t)*i+t*e}function $u(i,e,t,n){return cs(i,e,1-Math.exp(-t*n))}function Ku(i,e=1){return e-Math.abs(Xl(i,e*2)-e)}function ju(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Qu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ed(i,e){return i+Math.floor(Math.random()*(e-i+1))}function td(i,e){return i+Math.random()*(e-i)}function nd(i){return i*(.5-Math.random())}function id(i){i!==void 0&&(bc=i);let e=bc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rd(i){return i*ls}function sd(i){return i*yr}function ad(i){return(i&i-1)===0&&i!==0}function od(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ld(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function cd(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),d=s((e-n)/2),p=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*h,c*d,c*p,o*l);break;case"YZY":i.set(c*p,o*h,c*d,o*l);break;case"ZXZ":i.set(c*d,c*p,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function St(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ls={DEG2RAD:ls,RAD2DEG:yr,generateUUID:Zn,clamp:ht,euclideanModulo:Xl,mapLinear:Zu,inverseLerp:Ju,lerp:cs,damp:$u,pingpong:Ku,smoothstep:ju,smootherstep:Qu,randInt:ed,randFloat:td,randFloatSpread:nd,seededRandom:id,degToRad:rd,radToDeg:sd,isPowerOfTwo:ad,ceilPowerOfTwo:od,floorPowerOfTwo:ld,setQuaternionFromProperEuler:cd,normalize:St,denormalize:Sn},Xe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},jn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],d=n[r+3],p=s[a+0],f=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(d!==x||c!==p||l!==f||h!==g){let m=1-o,u=c*p+l*f+h*g+d*x,_=u>=0?1:-1,T=1-u*u;if(T>Number.EPSILON){let I=Math.sqrt(T),C=Math.atan2(I,u*_);m=Math.sin(m*C)/I,o=Math.sin(o*C)/I}let y=o*_;if(c=c*m+p*y,l=l*m+f*y,h=h*m+g*y,d=d*m+x*y,m===1-o){let I=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=I,l*=I,h*=I,d*=I}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],d=s[a],p=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*d+c*f-l*p,e[t+1]=c*g+h*p+l*d-o*f,e[t+2]=l*g+h*f+o*p-c*d,e[t+3]=h*g-o*d-c*p-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),d=o(s/2),p=c(n/2),f=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=p*h*d+l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d-p*f*g;break;case"YXZ":this._x=p*h*d+l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d+p*f*g;break;case"ZXY":this._x=p*h*d-l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d-p*f*g;break;case"ZYX":this._x=p*h*d-l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d+p*f*g;break;case"YZX":this._x=p*h*d+l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d-p*f*g;break;case"XZY":this._x=p*h*d-l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],p=n+o+d;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),h=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-s*d,this.z=r+c*d+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jo.copy(this).projectOnVector(e),this.sub(Jo)}reflect(e){return this.sub(Jo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jo=new V,Sc=new jn,st=class i{constructor(e,t,n,r,s,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],p=n[2],f=n[5],g=n[8],x=r[0],m=r[3],u=r[6],_=r[1],T=r[4],y=r[7],I=r[2],C=r[5],F=r[8];return s[0]=a*x+o*_+c*I,s[3]=a*m+o*T+c*C,s[6]=a*u+o*y+c*F,s[1]=l*x+h*_+d*I,s[4]=l*m+h*T+d*C,s[7]=l*u+h*y+d*F,s[2]=p*x+f*_+g*I,s[5]=p*m+f*T+g*C,s[8]=p*u+f*y+g*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,p=o*c-h*s,f=l*s-a*c,g=t*d+n*p+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(r*l-h*n)*x,e[2]=(o*n-r*a)*x,e[3]=p*x,e[4]=(h*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply($o.makeScale(e,t)),this}rotate(e){return this.premultiply($o.makeRotation(-e)),this}translate(e,t){return this.premultiply($o.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},$o=new st;function ql(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fh(){let i=vr("canvas");return i.style.display="block",i}var wc={};function Mr(i){i in wc||(wc[i]=!0,console.warn(i))}function zh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Tc=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ec=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hd(){let i={enabled:!0,workingColorSpace:Ri,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===wt&&(r.r=Jn(r.r),r.g=Jn(r.g),r.b=Jn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===wt&&(r.r=gr(r.r),r.g=gr(r.g),r.b=gr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===In?us:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Mr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Mr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ri]:{primaries:e,whitePoint:n,transfer:us,toXYZ:Tc,fromXYZ:Ec,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:wt,toXYZ:Tc,fromXYZ:Ec,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),i}var mt=hd();function Jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ji,xa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ji===void 0&&(ji=vr("canvas")),ji.width=e.width,ji.height=e.height;let r=ji.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ji}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=vr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Jn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Jn(t[n]/255)*255):t[n]=Jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ud=0,br=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ko(r[a].image)):s.push(Ko(r[a]))}else s=Ko(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Ko(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var dd=0,jo=new V,jt=class i extends Kn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ui,r=ui,s=Tn,a=xi,o=_n,c=Cn,l=i.DEFAULT_ANISOTROPY,h=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Zn(),this.name="",this.source=new br(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jo).x}get height(){return this.source.getSize(jo).y}get depth(){return this.source.getSize(jo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ul)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xr:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xr:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Ul;jt.DEFAULT_ANISOTROPY=1;var gt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],h=c[4],d=c[8],p=c[1],f=c[5],g=c[9],x=c[2],m=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,y=(f+1)/2,I=(u+1)/2,C=(h+p)/4,F=(d+x)/4,N=(g+m)/4;return T>y&&T>I?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=C/n,s=F/n):y>I?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=C/r,s=N/r):I<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),n=F/s,r=N/s),this.set(n,r,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(p-h)*(p-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-x)/_,this.z=(p-h)/_,this.w=Math.acos((l+f+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_a=class extends Kn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);let r={width:e,height:t,depth:n.depth},s=new jt(r);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new br(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ln=class extends _a{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},fs=class extends jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ya=class extends jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Un=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vn):vn.fromBufferAttribute(s,a),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ks.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(e.matrixWorld),this.union(ks)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kr),Vs.subVectors(this.max,Kr),Qi.subVectors(e.a,Kr),er.subVectors(e.b,Kr),tr.subVectors(e.c,Kr),si.subVectors(er,Qi),ai.subVectors(tr,er),bi.subVectors(Qi,tr);let t=[0,-si.z,si.y,0,-ai.z,ai.y,0,-bi.z,bi.y,si.z,0,-si.x,ai.z,0,-ai.x,bi.z,0,-bi.x,-si.y,si.x,0,-ai.y,ai.x,0,-bi.y,bi.x,0];return!Qo(t,Qi,er,tr,Vs)||(t=[1,0,0,0,1,0,0,0,1],!Qo(t,Qi,er,tr,Vs))?!1:(Gs.crossVectors(si,ai),t=[Gs.x,Gs.y,Gs.z],Qo(t,Qi,er,tr,Vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Gn=[new V,new V,new V,new V,new V,new V,new V,new V],vn=new V,ks=new Un,Qi=new V,er=new V,tr=new V,si=new V,ai=new V,bi=new V,Kr=new V,Vs=new V,Gs=new V,Si=new V;function Qo(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Si.fromArray(i,s);let o=r.x*Math.abs(Si.x)+r.y*Math.abs(Si.y)+r.z*Math.abs(Si.z),c=e.dot(Si),l=t.dot(Si),h=n.dot(Si);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var fd=new Un,jr=new V,el=new V,Qn=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):fd.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jr.subVectors(e,this.center);let t=jr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(jr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(el.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jr.copy(e.center).add(el)),this.expandByPoint(jr.copy(e.center).sub(el))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Hn=new V,tl=new V,Hs=new V,oi=new V,nl=new V,Ws=new V,il=new V,Sr=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){tl.copy(e).add(t).multiplyScalar(.5),Hs.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(tl);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Hs),o=oi.dot(this.direction),c=-oi.dot(Hs),l=oi.lengthSq(),h=Math.abs(1-a*a),d,p,f,g;if(h>0)if(d=a*c-o,p=a*o-c,g=s*h,d>=0)if(p>=-g)if(p<=g){let x=1/h;d*=x,p*=x,f=d*(d+a*p+2*o)+p*(a*d+p+2*c)+l}else p=s,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;else p=-s,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;else p<=-g?(d=Math.max(0,-(-a*s+o)),p=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+p*(p+2*c)+l):p<=g?(d=0,p=Math.min(Math.max(-s,-c),s),f=p*(p+2*c)+l):(d=Math.max(0,-(a*s+o)),p=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+p*(p+2*c)+l);else p=a>0?-s:s,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(tl).addScaledVector(Hs,p),f}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);let n=Hn.dot(this.direction),r=Hn.dot(Hn)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),h>=0?(s=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,r,s){nl.subVectors(t,e),Ws.subVectors(n,e),il.crossVectors(nl,Ws);let a=this.direction.dot(il),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,e);let c=o*this.direction.dot(Ws.crossVectors(oi,Ws));if(c<0)return null;let l=o*this.direction.dot(nl.cross(oi));if(l<0||c+l>a)return null;let h=-o*oi.dot(il);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vt=class i{constructor(e,t,n,r,s,a,o,c,l,h,d,p,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,h,d,p,f,g,x,m)}set(e,t,n,r,s,a,o,c,l,h,d,p,f,g,x,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=p,u[3]=f,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/nr.setFromMatrixColumn(e,0).length(),s=1/nr.setFromMatrixColumn(e,1).length(),a=1/nr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let p=a*h,f=a*d,g=o*h,x=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=p-x*l,t[9]=-o*c,t[2]=x-p*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let p=c*h,f=c*d,g=l*h,x=l*d;t[0]=p+x*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+p*o,t[10]=a*c}else if(e.order==="ZXY"){let p=c*h,f=c*d,g=l*h,x=l*d;t[0]=p-x*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let p=a*h,f=a*d,g=o*h,x=o*d;t[0]=c*h,t[4]=g*l-f,t[8]=p*l+x,t[1]=c*d,t[5]=x*l+p,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let p=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-p*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+g,t[10]=p-x*d}else if(e.order==="XZY"){let p=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=p*d+x,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=x*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pd,e,md)}lookAt(e,t,n){let r=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),li.crossVectors(n,hn),li.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),li.crossVectors(n,hn)),li.normalize(),Xs.crossVectors(hn,li),r[0]=li.x,r[4]=Xs.x,r[8]=hn.x,r[1]=li.y,r[5]=Xs.y,r[9]=hn.y,r[2]=li.z,r[6]=Xs.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],p=n[9],f=n[13],g=n[2],x=n[6],m=n[10],u=n[14],_=n[3],T=n[7],y=n[11],I=n[15],C=r[0],F=r[4],N=r[8],b=r[12],M=r[1],E=r[5],U=r[9],k=r[13],L=r[2],z=r[6],B=r[10],$=r[14],X=r[3],le=r[7],ae=r[11],Ee=r[15];return s[0]=a*C+o*M+c*L+l*X,s[4]=a*F+o*E+c*z+l*le,s[8]=a*N+o*U+c*B+l*ae,s[12]=a*b+o*k+c*$+l*Ee,s[1]=h*C+d*M+p*L+f*X,s[5]=h*F+d*E+p*z+f*le,s[9]=h*N+d*U+p*B+f*ae,s[13]=h*b+d*k+p*$+f*Ee,s[2]=g*C+x*M+m*L+u*X,s[6]=g*F+x*E+m*z+u*le,s[10]=g*N+x*U+m*B+u*ae,s[14]=g*b+x*k+m*$+u*Ee,s[3]=_*C+T*M+y*L+I*X,s[7]=_*F+T*E+y*z+I*le,s[11]=_*N+T*U+y*B+I*ae,s[15]=_*b+T*k+y*$+I*Ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],p=e[10],f=e[14],g=e[3],x=e[7],m=e[11],u=e[15];return g*(+s*c*d-r*l*d-s*o*p+n*l*p+r*o*f-n*c*f)+x*(+t*c*f-t*l*p+s*a*p-r*a*f+r*l*h-s*c*h)+m*(+t*l*d-t*o*f-s*a*d+n*a*f+s*o*h-n*l*h)+u*(-r*o*h-t*c*d+t*o*p+r*a*d-n*a*p+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],p=e[10],f=e[11],g=e[12],x=e[13],m=e[14],u=e[15],_=d*m*l-x*p*l+x*c*f-o*m*f-d*c*u+o*p*u,T=g*p*l-h*m*l-g*c*f+a*m*f+h*c*u-a*p*u,y=h*x*l-g*d*l+g*o*f-a*x*f-h*o*u+a*d*u,I=g*d*c-h*x*c-g*o*p+a*x*p+h*o*m-a*d*m,C=t*_+n*T+r*y+s*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/C;return e[0]=_*F,e[1]=(x*p*s-d*m*s-x*r*f+n*m*f+d*r*u-n*p*u)*F,e[2]=(o*m*s-x*c*s+x*r*l-n*m*l-o*r*u+n*c*u)*F,e[3]=(d*c*s-o*p*s-d*r*l+n*p*l+o*r*f-n*c*f)*F,e[4]=T*F,e[5]=(h*m*s-g*p*s+g*r*f-t*m*f-h*r*u+t*p*u)*F,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*u-t*c*u)*F,e[7]=(a*p*s-h*c*s+h*r*l-t*p*l-a*r*f+t*c*f)*F,e[8]=y*F,e[9]=(g*d*s-h*x*s-g*n*f+t*x*f+h*n*u-t*d*u)*F,e[10]=(a*x*s-g*o*s+g*n*l-t*x*l-a*n*u+t*o*u)*F,e[11]=(h*o*s-a*d*s-h*n*l+t*d*l+a*n*f-t*o*f)*F,e[12]=I*F,e[13]=(h*x*r-g*d*r+g*n*p-t*x*p-h*n*m+t*d*m)*F,e[14]=(g*o*r-a*x*r-g*n*c+t*x*c+a*n*m-t*o*m)*F,e[15]=(a*d*r-h*o*r+h*n*c-t*d*c-a*n*p+t*o*p)*F,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,d=o+o,p=s*l,f=s*h,g=s*d,x=a*h,m=a*d,u=o*d,_=c*l,T=c*h,y=c*d,I=n.x,C=n.y,F=n.z;return r[0]=(1-(x+u))*I,r[1]=(f+y)*I,r[2]=(g-T)*I,r[3]=0,r[4]=(f-y)*C,r[5]=(1-(p+u))*C,r[6]=(m+_)*C,r[7]=0,r[8]=(g+T)*F,r[9]=(m-_)*F,r[10]=(1-(p+x))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=nr.set(r[0],r[1],r[2]).length(),a=nr.set(r[4],r[5],r[6]).length(),o=nr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);let l=1/s,h=1/a,d=1/o;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=d,Mn.elements[9]*=d,Mn.elements[10]*=d,t.setFromRotationMatrix(Mn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=wn,c=!1){let l=this.elements,h=2*s/(t-e),d=2*s/(n-r),p=(t+e)/(t-e),f=(n+r)/(n-r),g,x;if(c)g=s/(a-s),x=a*s/(a-s);else if(o===wn)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===ds)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=wn,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-r),p=-(t+e)/(t-e),f=-(n+r)/(n-r),g,x;if(c)g=1/(a-s),x=a/(a-s);else if(o===wn)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===ds)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},nr=new V,Mn=new vt,pd=new V(0,0,0),md=new V(1,1,1),li=new V,Xs=new V,hn=new V,Ac=new vt,Cc=new jn,En=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],d=r[2],p=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ac.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ac,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cc.setFromEuler(this),this.setFromQuaternion(Cc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER="XYZ";var wr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gd=0,Rc=new V,ir=new jn,Wn=new vt,qs=new V,Qr=new V,xd=new V,_d=new jn,Ic=new V(1,0,0),Pc=new V(0,1,0),Dc=new V(0,0,1),Lc={type:"added"},yd={type:"removed"},rr={type:"childadded",child:null},rl={type:"childremoved",child:null},xt=class i extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new V,t=new En,n=new jn,r=new V(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new st}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.multiply(ir),this}rotateOnWorldAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.premultiply(ir),this}rotateX(e){return this.rotateOnAxis(Ic,e)}rotateY(e){return this.rotateOnAxis(Pc,e)}rotateZ(e){return this.rotateOnAxis(Dc,e)}translateOnAxis(e,t){return Rc.copy(e).applyQuaternion(this.quaternion),this.position.add(Rc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ic,e)}translateY(e){return this.translateOnAxis(Pc,e)}translateZ(e){return this.translateOnAxis(Dc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qs.copy(e):qs.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Qr,qs,this.up):Wn.lookAt(qs,Qr,this.up),this.quaternion.setFromRotationMatrix(Wn),r&&(Wn.extractRotation(r.matrixWorld),ir.setFromRotationMatrix(Wn),this.quaternion.premultiply(ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lc),rr.child=e,this.dispatchEvent(rr),rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yd),rl.child=e,this.dispatchEvent(rl),rl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lc),rr.child=e,this.dispatchEvent(rr),rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,e,xd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,_d,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),p=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};xt.DEFAULT_UP=new V(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bn=new V,Xn=new V,sl=new V,qn=new V,sr=new V,ar=new V,Uc=new V,al=new V,ol=new V,ll=new V,cl=new gt,hl=new gt,ul=new gt,Yn=class i{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),bn.subVectors(e,t),r.cross(bn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){bn.subVectors(r,t),Xn.subVectors(n,t),sl.subVectors(e,t);let a=bn.dot(bn),o=bn.dot(Xn),c=bn.dot(sl),l=Xn.dot(Xn),h=Xn.dot(sl),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;let p=1/d,f=(l*c-o*h)*p,g=(a*h-o*c)*p;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,qn.x),c.addScaledVector(a,qn.y),c.addScaledVector(o,qn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return cl.setScalar(0),hl.setScalar(0),ul.setScalar(0),cl.fromBufferAttribute(e,t),hl.fromBufferAttribute(e,n),ul.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(cl,s.x),a.addScaledVector(hl,s.y),a.addScaledVector(ul,s.z),a}static isFrontFacing(e,t,n,r){return bn.subVectors(n,t),Xn.subVectors(e,t),bn.cross(Xn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),bn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;sr.subVectors(r,n),ar.subVectors(s,n),al.subVectors(e,n);let c=sr.dot(al),l=ar.dot(al);if(c<=0&&l<=0)return t.copy(n);ol.subVectors(e,r);let h=sr.dot(ol),d=ar.dot(ol);if(h>=0&&d<=h)return t.copy(r);let p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(sr,a);ll.subVectors(e,s);let f=sr.dot(ll),g=ar.dot(ll);if(g>=0&&f<=g)return t.copy(s);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(ar,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Uc.subVectors(s,r),o=(d-h)/(d-h+(f-g)),t.copy(r).addScaledVector(Uc,o);let u=1/(m+x+p);return a=x*u,o=p*u,t.copy(n).addScaledVector(sr,a).addScaledVector(ar,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function dl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=mt.workingColorSpace){if(e=Xl(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=dl(a,s,e+1/3),this.g=dl(a,s,e),this.b=dl(a,s,e-1/3)}return mt.colorSpaceToWorking(this,r),this}setStyle(e,t=Lt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let n=Oh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return mt.workingToColorSpace(Kt.copy(this),e),Math.round(ht(Kt.r*255,0,255))*65536+Math.round(ht(Kt.g*255,0,255))*256+Math.round(ht(Kt.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(Kt.copy(this),t);let n=Kt.r,r=Kt.g,s=Kt.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Lt){mt.workingToColorSpace(Kt.copy(this),e);let t=Kt.r,n=Kt.g,r=Kt.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(Ys);let n=cs(ci.h,Ys.h,t),r=cs(ci.s,Ys.s,t),s=cs(ci.l,Ys.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new je;je.NAMES=Oh;var vd=0,Nn=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=Ai,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=da,this.blendDst=fa,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==da&&(n.blendSrc=this.blendSrc),this.blendDst!==fa&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},on=class extends Nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ft=new V,Zs=new Xe,Md=0,Bt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Md++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ga,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zs.fromBufferAttribute(this,t),Zs.applyMatrix3(e),this.setXY(t,Zs.x,Zs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ga&&(e.usage=this.usage),e}};var ps=class extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ms=class extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var it=class extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}},bd=0,xn=new vt,fl=new xt,or=new V,un=new Un,es=new Un,Ht=new V,Mt=class i extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ql(e)?ms:ps)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new st().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return fl.lookAt(e),fl.updateMatrix(),this.applyMatrix4(fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new it(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];es.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(un.min,es.min),un.expandByPoint(Ht),Ht.addVectors(un.max,es.max),un.expandByPoint(Ht)):(un.expandByPoint(es.min),un.expandByPoint(es.max))}un.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ht));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ht.fromBufferAttribute(o,l),c&&(or.fromBufferAttribute(e,l),Ht.add(or)),r=Math.max(r,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<n.count;N++)o[N]=new V,c[N]=new V;let l=new V,h=new V,d=new V,p=new Xe,f=new Xe,g=new Xe,x=new V,m=new V;function u(N,b,M){l.fromBufferAttribute(n,N),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,M),p.fromBufferAttribute(s,N),f.fromBufferAttribute(s,b),g.fromBufferAttribute(s,M),h.sub(l),d.sub(l),f.sub(p),g.sub(p);let E=1/(f.x*g.y-g.x*f.y);isFinite(E)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(E),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(E),o[N].add(x),o[b].add(x),o[M].add(x),c[N].add(m),c[b].add(m),c[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let N=0,b=_.length;N<b;++N){let M=_[N],E=M.start,U=M.count;for(let k=E,L=E+U;k<L;k+=3)u(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let T=new V,y=new V,I=new V,C=new V;function F(N){I.fromBufferAttribute(r,N),C.copy(I);let b=o[N];T.copy(b),T.sub(I.multiplyScalar(I.dot(b))).normalize(),y.crossVectors(C,b);let E=y.dot(c[N])<0?-1:1;a.setXYZW(N,T.x,T.y,T.z,E)}for(let N=0,b=_.length;N<b;++N){let M=_[N],E=M.start,U=M.count;for(let k=E,L=E+U;k<L;k+=3)F(e.getX(k+0)),F(e.getX(k+1)),F(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let r=new V,s=new V,a=new V,o=new V,c=new V,l=new V,h=new V,d=new V;if(e)for(let p=0,f=e.count;p<f;p+=3){let g=e.getX(p+0),x=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,f=t.count;p<f;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,p=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let u=0;u<h;u++)p[g++]=l[f++]}return new Bt(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){let p=l[h],f=e(p,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],d=s[l];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nc=new vt,wi=new Sr,Js=new Qn,Fc=new V,$s=new V,Ks=new V,js=new V,pl=new V,Qs=new V,zc=new V,ea=new V,ot=class extends xt{constructor(e=new Mt,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Qs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],d=s[c];h!==0&&(pl.fromBufferAttribute(d,e),a?Qs.addScaledVector(pl,h):Qs.addScaledVector(pl.sub(t),h))}t.add(Qs)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(s),wi.copy(e.ray).recast(e.near),!(Js.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Js,Fc)===null||wi.origin.distanceToSquared(Fc)>(e.far-e.near)**2))&&(Nc.copy(s).invert(),wi.copy(e.ray).applyMatrix4(Nc),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,p=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=p.length;g<x;g++){let m=p[g],u=a[m.materialIndex],_=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,I=T;y<I;y+=3){let C=o.getX(y),F=o.getX(y+1),N=o.getX(y+2);r=ta(this,u,e,n,l,h,d,C,F,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,u=x;m<u;m+=3){let _=o.getX(m),T=o.getX(m+1),y=o.getX(m+2);r=ta(this,a,e,n,l,h,d,_,T,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=p.length;g<x;g++){let m=p[g],u=a[m.materialIndex],_=Math.max(m.start,f.start),T=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,I=T;y<I;y+=3){let C=y,F=y+1,N=y+2;r=ta(this,u,e,n,l,h,d,C,F,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,u=x;m<u;m+=3){let _=m,T=m+1,y=m+2;r=ta(this,a,e,n,l,h,d,_,T,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function Sd(i,e,t,n,r,s,a,o){let c;if(e.side===Yt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===$n,o),c===null)return null;ea.copy(o),ea.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ea);return l<t.near||l>t.far?null:{distance:l,point:ea.clone(),object:i}}function ta(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,$s),i.getVertexPosition(c,Ks),i.getVertexPosition(l,js);let h=Sd(i,e,t,n,$s,Ks,js,zc);if(h){let d=new V;Yn.getBarycoord(zc,$s,Ks,js,d),r&&(h.uv=Yn.getInterpolatedAttribute(r,o,c,l,d,new Xe)),s&&(h.uv1=Yn.getInterpolatedAttribute(s,o,c,l,d,new Xe)),a&&(h.normal=Yn.getInterpolatedAttribute(a,o,c,l,d,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:c,c:l,normal:new V,materialIndex:0};Yn.getNormal($s,Ks,js,p.normal),h.face=p,h.barycoord=d}return h}var qt=class i extends Mt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],d=[],p=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(d,2));function g(x,m,u,_,T,y,I,C,F,N,b){let M=y/F,E=I/N,U=y/2,k=I/2,L=C/2,z=F+1,B=N+1,$=0,X=0,le=new V;for(let ae=0;ae<B;ae++){let Ee=ae*E-k;for(let Ne=0;Ne<z;Ne++){let He=Ne*M-U;le[x]=He*_,le[m]=Ee*T,le[u]=L,l.push(le.x,le.y,le.z),le[x]=0,le[m]=0,le[u]=C>0?1:-1,h.push(le.x,le.y,le.z),d.push(Ne/F),d.push(1-ae/N),$+=1}}for(let ae=0;ae<N;ae++)for(let Ee=0;Ee<F;Ee++){let Ne=p+Ee+z*ae,He=p+Ee+z*(ae+1),et=p+(Ee+1)+z*(ae+1),Qe=p+(Ee+1)+z*ae;c.push(Ne,He,Qe),c.push(He,et,Qe),X+=6}o.addGroup(f,X,b),f+=X,p+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Gi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Qt(i){let e={};for(let t=0;t<i.length;t++){let n=Gi(i[t]);for(let r in n)e[r]=n[r]}return e}function wd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Yl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}var Po={clone:Gi,merge:Qt},Td=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ed=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends Nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Td,this.fragmentShader=Ed,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=wd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},gs=class extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},hi=new V,Oc=new Xe,Bc=new Xe,Ot=class extends gs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yr*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,Oc,Bc),t.subVectors(Bc,Oc)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ls*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},lr=-90,cr=1,va=class extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ot(lr,cr,e,t);r.layers=this.layers,this.add(r);let s=new Ot(lr,cr,e,t);s.layers=this.layers,this.add(s);let a=new Ot(lr,cr,e,t);a.layers=this.layers,this.add(a);let o=new Ot(lr,cr,e,t);o.layers=this.layers,this.add(o);let c=new Ot(lr,cr,e,t);c.layers=this.layers,this.add(c);let l=new Ot(lr,cr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===wn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,p,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},xs=class extends jt{constructor(e=[],t=ki,n,r,s,a,o,c,l,h){super(e,t,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ma=class extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new xs(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new qt(5,5,5),s=new ln({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:ti});s.uniforms.tEquirect.value=t;let a=new ot(r,s),o=t.minFilter;return t.minFilter===xi&&(t.minFilter=Tn),new va(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},Be=class extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ad={type:"move"},Tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),u=this._getHandJoint(l,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&p>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ad)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Be;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Ii=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new je(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Pi=class extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},_s=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ga,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},rn=new V,Er=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Sn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array),s=St(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ar=class extends Nn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hr,ts=new V,ur=new V,dr=new V,fr=new Xe,ns=new Xe,Bh=new vt,na=new V,is=new V,ia=new V,kc=new Xe,ml=new Xe,Vc=new Xe,ys=class extends xt{constructor(e=new Ar){if(super(),this.isSprite=!0,this.type="Sprite",hr===void 0){hr=new Mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _s(t,5);hr.setIndex([0,1,2,0,2,3]),hr.setAttribute("position",new Er(n,3,0,!1)),hr.setAttribute("uv",new Er(n,2,3,!1))}this.geometry=hr,this.material=e,this.center=new Xe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ur.setFromMatrixScale(this.matrixWorld),Bh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),dr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ur.multiplyScalar(-dr.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let a=this.center;ra(na.set(-.5,-.5,0),dr,a,ur,r,s),ra(is.set(.5,-.5,0),dr,a,ur,r,s),ra(ia.set(.5,.5,0),dr,a,ur,r,s),kc.set(0,0),ml.set(1,0),Vc.set(1,1);let o=e.ray.intersectTriangle(na,is,ia,!1,ts);if(o===null&&(ra(is.set(-.5,.5,0),dr,a,ur,r,s),ml.set(0,1),o=e.ray.intersectTriangle(na,ia,is,!1,ts),o===null))return;let c=e.ray.origin.distanceTo(ts);c<e.near||c>e.far||t.push({distance:c,point:ts.clone(),uv:Yn.getInterpolation(ts,na,is,ia,kc,ml,Vc,new Xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ra(i,e,t,n,r,s){fr.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(ns.x=s*fr.x-r*fr.y,ns.y=r*fr.x+s*fr.y):ns.copy(fr),i.copy(e),i.x+=ns.x,i.y+=ns.y,i.applyMatrix4(Bh)}var ba=class extends jt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=an,h=an,d,p){super(null,a,o,c,l,h,r,s,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cr=class extends Bt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},pr=new vt,Gc=new vt,sa=[],Hc=new Un,Cd=new vt,rs=new ot,ss=new Qn,_t=class extends ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Cd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Un),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pr),Hc.copy(e.boundingBox).applyMatrix4(pr),this.boundingBox.union(Hc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pr),ss.copy(e.boundingSphere).applyMatrix4(pr),this.boundingSphere.union(ss)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(rs.geometry=this.geometry,rs.material=this.material,rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ss.copy(this.boundingSphere),ss.applyMatrix4(n),e.ray.intersectsSphere(ss)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,pr),Gc.multiplyMatrices(n,pr),rs.matrixWorld=Gc,rs.raycast(e,sa);for(let a=0,o=sa.length;a<o;a++){let c=sa[a];c.instanceId=s,c.object=this,t.push(c)}sa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Cr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ba(new Float32Array(r*this.count),r,this.count,ja,Rn));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},gl=new V,Rd=new V,Id=new st,Dn=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=gl.subVectors(n,t).cross(Rd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(gl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Id.getNormalMatrix(e),r=this.coplanarPoint(gl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ti=new Qn,Pd=new Xe(.5,.5),aa=new V,Rr=class{constructor(e=new Dn,t=new Dn,n=new Dn,r=new Dn,s=new Dn,a=new Dn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wn,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],d=s[5],p=s[6],f=s[7],g=s[8],x=s[9],m=s[10],u=s[11],_=s[12],T=s[13],y=s[14],I=s[15];if(r[0].setComponents(l-a,f-h,u-g,I-_).normalize(),r[1].setComponents(l+a,f+h,u+g,I+_).normalize(),r[2].setComponents(l+o,f+d,u+x,I+T).normalize(),r[3].setComponents(l-o,f-d,u-x,I-T).normalize(),n)r[4].setComponents(c,p,m,y).normalize(),r[5].setComponents(l-c,f-p,u-m,I-y).normalize();else if(r[4].setComponents(l-c,f-p,u-m,I-y).normalize(),t===wn)r[5].setComponents(l+c,f+p,u+m,I+y).normalize();else if(t===ds)r[5].setComponents(c,p,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){Ti.center.set(0,0,0);let t=Pd.distanceTo(e.center);return Ti.radius=.7071067811865476+t,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(aa.x=r.normal.x>0?e.max.x:e.min.x,aa.y=r.normal.y>0?e.max.y:e.min.y,aa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(aa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var fi=class extends Nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Sa=new V,wa=new V,Wc=new vt,as=new Sr,oa=new Qn,xl=new V,Xc=new V,Di=class extends xt{constructor(e=new Mt,t=new fi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Sa.fromBufferAttribute(t,r-1),wa.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Sa.distanceTo(wa);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(r),oa.radius+=s,e.ray.intersectsSphere(oa)===!1)return;Wc.copy(r).invert(),as.copy(e.ray).applyMatrix4(Wc);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let u=h.getX(x),_=h.getX(x+1),T=la(this,e,as,c,u,_,x);T&&t.push(T)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),u=la(this,e,as,c,x,m,g-1);u&&t.push(u)}}else{let f=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let u=la(this,e,as,c,x,x+1,x);u&&t.push(u)}if(this.isLineLoop){let x=la(this,e,as,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function la(i,e,t,n,r,s,a){let o=i.geometry.attributes.position;if(Sa.fromBufferAttribute(o,r),wa.fromBufferAttribute(o,s),t.distanceSqToSegment(Sa,wa,xl,Xc)>n)return;xl.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(xl);if(!(l<e.near||l>e.far))return{distance:l,point:Xc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var pi=class extends jt{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},vs=class extends jt{constructor(e,t,n=_i,r,s,a,o=an,c=an,l,h=_r,d=1){if(h!==_r&&h!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:d};super(p,r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new br(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ms=class extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var At=class i extends Mt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],d=[],p=[],f=[],g=0,x=[],m=n/2,u=0;_(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new it(d,3)),this.setAttribute("normal",new it(p,3)),this.setAttribute("uv",new it(f,2));function _(){let y=new V,I=new V,C=0,F=(t-e)/n;for(let N=0;N<=s;N++){let b=[],M=N/s,E=M*(t-e)+e;for(let U=0;U<=r;U++){let k=U/r,L=k*c+o,z=Math.sin(L),B=Math.cos(L);I.x=E*z,I.y=-M*n+m,I.z=E*B,d.push(I.x,I.y,I.z),y.set(z,F,B).normalize(),p.push(y.x,y.y,y.z),f.push(k,1-M),b.push(g++)}x.push(b)}for(let N=0;N<r;N++)for(let b=0;b<s;b++){let M=x[b][N],E=x[b+1][N],U=x[b+1][N+1],k=x[b][N+1];(e>0||b!==0)&&(h.push(M,E,k),C+=3),(t>0||b!==s-1)&&(h.push(E,U,k),C+=3)}l.addGroup(u,C,0),u+=C}function T(y){let I=g,C=new Xe,F=new V,N=0,b=y===!0?e:t,M=y===!0?1:-1;for(let U=1;U<=r;U++)d.push(0,m*M,0),p.push(0,M,0),f.push(.5,.5),g++;let E=g;for(let U=0;U<=r;U++){let L=U/r*c+o,z=Math.cos(L),B=Math.sin(L);F.x=b*B,F.y=m*M,F.z=b*z,d.push(F.x,F.y,F.z),p.push(0,M,0),C.x=z*.5+.5,C.y=B*.5*M+.5,f.push(C.x,C.y),g++}for(let U=0;U<r;U++){let k=I+U,L=E+U;y===!0?h.push(L,L+1,k):h.push(L+1,L,k),N+=3}l.addGroup(u,N,y===!0?1:2),u+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},An=class i extends At{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ta=class i extends Mt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];o(r),l(n),h(),this.setAttribute("position",new it(s,3)),this.setAttribute("normal",new it(s.slice(),3)),this.setAttribute("uv",new it(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let T=new V,y=new V,I=new V;for(let C=0;C<t.length;C+=3)f(t[C+0],T),f(t[C+1],y),f(t[C+2],I),c(T,y,I,_)}function c(_,T,y,I){let C=I+1,F=[];for(let N=0;N<=C;N++){F[N]=[];let b=_.clone().lerp(y,N/C),M=T.clone().lerp(y,N/C),E=C-N;for(let U=0;U<=E;U++)U===0&&N===C?F[N][U]=b:F[N][U]=b.clone().lerp(M,U/E)}for(let N=0;N<C;N++)for(let b=0;b<2*(C-N)-1;b++){let M=Math.floor(b/2);b%2===0?(p(F[N][M+1]),p(F[N+1][M]),p(F[N][M])):(p(F[N][M+1]),p(F[N+1][M+1]),p(F[N+1][M]))}}function l(_){let T=new V;for(let y=0;y<s.length;y+=3)T.x=s[y+0],T.y=s[y+1],T.z=s[y+2],T.normalize().multiplyScalar(_),s[y+0]=T.x,s[y+1]=T.y,s[y+2]=T.z}function h(){let _=new V;for(let T=0;T<s.length;T+=3){_.x=s[T+0],_.y=s[T+1],_.z=s[T+2];let y=m(_)/2/Math.PI+.5,I=u(_)/Math.PI+.5;a.push(y,1-I)}g(),d()}function d(){for(let _=0;_<a.length;_+=6){let T=a[_+0],y=a[_+2],I=a[_+4],C=Math.max(T,y,I),F=Math.min(T,y,I);C>.9&&F<.1&&(T<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),I<.2&&(a[_+4]+=1))}}function p(_){s.push(_.x,_.y,_.z)}function f(_,T){let y=_*3;T.x=e[y+0],T.y=e[y+1],T.z=e[y+2]}function g(){let _=new V,T=new V,y=new V,I=new V,C=new Xe,F=new Xe,N=new Xe;for(let b=0,M=0;b<s.length;b+=9,M+=6){_.set(s[b+0],s[b+1],s[b+2]),T.set(s[b+3],s[b+4],s[b+5]),y.set(s[b+6],s[b+7],s[b+8]),C.set(a[M+0],a[M+1]),F.set(a[M+2],a[M+3]),N.set(a[M+4],a[M+5]),I.copy(_).add(T).add(y).divideScalar(3);let E=m(I);x(C,M+0,_,E),x(F,M+2,T,E),x(N,M+4,y,E)}}function x(_,T,y,I){I<0&&_.x===1&&(a[T]=_.x-1),y.x===0&&y.z===0&&(a[T]=I/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function u(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Li=class i extends Ta{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},bs=class i extends Mt{constructor(e=[new Xe(0,-.5),new Xe(.5,0),new Xe(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=ht(r,0,Math.PI*2);let s=[],a=[],o=[],c=[],l=[],h=1/t,d=new V,p=new Xe,f=new V,g=new V,x=new V,m=0,u=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,u=e[_+1].y-e[_].y,f.x=u*1,f.y=-m,f.z=u*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,u=e[_+1].y-e[_].y,f.x=u*1,f.y=-m,f.z=u*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let _=0;_<=t;_++){let T=n+_*h*r,y=Math.sin(T),I=Math.cos(T);for(let C=0;C<=e.length-1;C++){d.x=e[C].x*y,d.y=e[C].y,d.z=e[C].x*I,a.push(d.x,d.y,d.z),p.x=_/t,p.y=C/(e.length-1),o.push(p.x,p.y);let F=c[3*C+0]*y,N=c[3*C+1],b=c[3*C+0]*I;l.push(F,N,b)}}for(let _=0;_<t;_++)for(let T=0;T<e.length-1;T++){let y=T+_*e.length,I=y,C=y+e.length,F=y+e.length+1,N=y+1;s.push(I,C,N),s.push(F,N,C)}this.setIndex(s),this.setAttribute("position",new it(a,3)),this.setAttribute("uv",new it(o,2)),this.setAttribute("normal",new it(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var dn=class i extends Mt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,d=e/o,p=t/c,f=[],g=[],x=[],m=[];for(let u=0;u<h;u++){let _=u*p-a;for(let T=0;T<l;T++){let y=T*d-s;g.push(y,-_,0),x.push(0,0,1),m.push(T/o),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let _=0;_<o;_++){let T=_+l*u,y=_+l*(u+1),I=_+1+l*(u+1),C=_+1+l*u;f.push(T,y,C),f.push(y,I,C)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(x,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ui=class i extends Mt{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],c=[],l=[],h=[],d=e,p=(t-e)/r,f=new V,g=new Xe;for(let x=0;x<=r;x++){for(let m=0;m<=n;m++){let u=s+m/n*a;f.x=d*Math.cos(u),f.y=d*Math.sin(u),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=p}for(let x=0;x<r;x++){let m=x*(n+1);for(let u=0;u<n;u++){let _=u+m,T=_,y=_+n+1,I=_+n+2,C=_+1;o.push(T,y,C),o.push(y,I,C)}}this.setIndex(o),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var cn=class i extends Mt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new V,p=new V,f=[],g=[],x=[],m=[];for(let u=0;u<=n;u++){let _=[],T=u/n,y=0;u===0&&a===0?y=.5/t:u===n&&c===Math.PI&&(y=-.5/t);for(let I=0;I<=t;I++){let C=I/t;d.x=-e*Math.cos(r+C*s)*Math.sin(a+T*o),d.y=e*Math.cos(a+T*o),d.z=e*Math.sin(r+C*s)*Math.sin(a+T*o),g.push(d.x,d.y,d.z),p.copy(d).normalize(),x.push(p.x,p.y,p.z),m.push(C+y,1-T),_.push(l++)}h.push(_)}for(let u=0;u<n;u++)for(let _=0;_<t;_++){let T=h[u][_+1],y=h[u][_],I=h[u+1][_],C=h[u+1][_+1];(u!==0||a>0)&&f.push(T,y,C),(u!==n-1||c<Math.PI)&&f.push(y,I,C)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(x,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ei=class i extends Mt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],c=[],l=[],h=new V,d=new V,p=new V;for(let f=0;f<=n;f++)for(let g=0;g<=r;g++){let x=g/r*s,m=f/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),p.subVectors(d,h).normalize(),c.push(p.x,p.y,p.z),l.push(g/r),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=r;g++){let x=(r+1)*f+g-1,m=(r+1)*(f-1)+g-1,u=(r+1)*(f-1)+g,_=(r+1)*f+g;a.push(x,m,_),a.push(m,u,_)}this.setIndex(a),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Tt=class extends Nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gl,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ss=class extends Tt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ea=class extends Nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Aa=class extends Nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ca(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Dd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ni=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ca=class extends Ni{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vl,endingEnd:vl}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ml:s=e,o=2*t-n;break;case bl:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ml:a=e,c=2*n-t;break;case bl:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,f=this._weightNext,g=(n-t)/(r-t),x=g*g,m=x*g,u=-p*m+2*p*x-p*g,_=(1+p)*m+(-1.5-2*p)*x+(-.5+p)*g+1,T=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let I=0;I!==o;++I)s[I]=u*a[h+I]+_*a[l+I]+T*a[c+I]+y*a[d+I];return s}},Ra=class extends Ni{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(r-t),d=1-h;for(let p=0;p!==o;++p)s[p]=a[l+p]*d+a[c+p]*h;return s}},Ia=class extends Ni{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},fn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ca(t,this.TimeBufferType),this.values=ca(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ca(e.times,Array),values:ca(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ca(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case hs:t=this.InterpolantFactoryMethodDiscrete;break;case ma:t=this.InterpolantFactoryMethodLinear;break;case ha:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hs;case this.InterpolantFactoryMethodLinear:return ma;case this.InterpolantFactoryMethodSmooth:return ha}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&Dd(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ha,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(r)c=!0;else{let d=o*n,p=d-n,f=d+n;for(let g=0;g!==n;++g){let x=t[d+g];if(x!==t[p+g]||x!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,p=a*n;for(let f=0;f!==n;++f)t[p+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=ma;var mi=class extends fn{constructor(e,t,n){super(e,t,n)}};mi.prototype.ValueTypeName="bool";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=hs;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Pa=class extends fn{constructor(e,t,n,r){super(e,t,n,r)}};Pa.prototype.ValueTypeName="color";var Da=class extends fn{constructor(e,t,n,r){super(e,t,n,r)}};Da.prototype.ValueTypeName="number";var La=class extends Ni{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),l=e*o;for(let h=l+o;l!==h;l+=4)jn.slerpFlat(s,0,a,l-o,a,l,c);return s}},ws=class extends fn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new La(this.times,this.values,this.getValueSize(),e)}};ws.prototype.ValueTypeName="quaternion";ws.prototype.InterpolantFactoryMethodSmooth=void 0;var gi=class extends fn{constructor(e,t,n){super(e,t,n)}};gi.prototype.ValueTypeName="string";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=hs;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ua=class extends fn{constructor(e,t,n,r){super(e,t,n,r)}};Ua.prototype.ValueTypeName="vector";var ua={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Na=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=l.length;d<p;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},kh=new Na,Ir=class{constructor(e){this.manager=e!==void 0?e:kh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ir.DEFAULT_MATERIAL_NAME="__DEFAULT";var mr=new WeakMap,Fa=class extends Ir{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=ua.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=mr.get(a);d===void 0&&(d=[],mr.set(a,d)),d.push({onLoad:t,onError:r})}return a}let o=vr("img");function c(){h(),t&&t(this);let d=mr.get(this)||[];for(let p=0;p<d.length;p++){let f=d[p];f.onLoad&&f.onLoad(this)}mr.delete(this),s.manager.itemEnd(e)}function l(d){h(),r&&r(d),ua.remove(`image:${e}`);let p=mr.get(this)||[];for(let f=0;f<p.length;f++){let g=p[f];g.onError&&g.onError(d)}mr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ua.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var Ts=class extends Ir{constructor(e){super(e)}load(e,t,n,r){let s=new jt,a=new Fa(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},Pr=class extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Fi=class extends Pr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},_l=new vt,qc=new V,Yc=new V,za=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rr,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;qc.setFromMatrixPosition(e.matrixWorld),t.position.copy(qc),Yc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yc),t.updateMatrixWorld(),_l.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_l,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_l)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Zc=new vt,os=new V,yl=new V,wl=class extends za{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),os.setFromMatrixPosition(e.matrixWorld),n.position.copy(os),yl.copy(n.position),yl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(yl),n.updateMatrixWorld(),r.makeTranslation(-os.x,-os.y,-os.z),Zc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zc,n.coordinateSystem,n.reversedDepth)}},zi=class extends Pr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new wl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Es=class extends gs{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Tl=class extends za{constructor(){super(new Es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oi=class extends Pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new Tl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Oa=class extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Zl="\\[\\]\\.:\\/",Ld=new RegExp("["+Zl+"]","g"),Jl="[^"+Zl+"]",Ud="[^"+Zl.replace("\\.","")+"]",Nd=/((?:WC+[\/:])*)/.source.replace("WC",Jl),Fd=/(WCOD+)?/.source.replace("WCOD",Ud),zd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jl),Od=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jl),Bd=new RegExp("^"+Nd+Fd+zd+Od+"$"),kd=["material","materials","bones","map"],El=class{constructor(e,t,n){let r=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ld,"")}static parseTrackName(e){let t=Bd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);kd.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[r];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=El;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var k0=new Float32Array(1);var Jc=new vt,Bi=class{constructor(e,t,n=0,r=1/0){this.ray=new Sr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new wr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Jc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jc),this}intersectObject(e,t=!0,n=[]){return Al(e,this,n,t),n.sort($c),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Al(e[r],this,n,t);return n.sort($c),n}};function $c(i,e){return i.distance-e.distance}function Al(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)Al(s[a],e,t,!0)}}function $l(i,e,t,n){let r=Vd(n);switch(t){case Bl:return i*e;case ja:return i*e/r.components*r.byteLength;case Qa:return i*e/r.components*r.byteLength;case Vl:return i*e*2/r.components*r.byteLength;case eo:return i*e*2/r.components*r.byteLength;case kl:return i*e*3/r.components*r.byteLength;case _n:return i*e*4/r.components*r.byteLength;case to:return i*e*4/r.components*r.byteLength;case Rs:case Is:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ps:case Ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case io:case so:return Math.max(i,16)*Math.max(e,8)/4;case no:case ro:return Math.max(i,8)*Math.max(e,8)/2;case ao:case oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ho:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case uo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case po:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case mo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case go:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case xo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _o:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case yo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case vo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case bo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case So:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case wo:case To:case Eo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ao:case Co:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ro:case Io:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vd(i){switch(i){case Cn:case Nl:return{byteLength:1,components:1};case Ur:case Fl:case Nr:return{byteLength:2,components:1};case $a:case Ka:return{byteLength:2,components:4};case _i:case Ja:case Rn:return{byteLength:4,components:1};case zl:case Ol:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hu(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function qd(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<d.length;f++){let g=d[p],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++p,d[p]=x)}d.length=p+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Yd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zd=`#ifdef USE_ALPHAHASH
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
#endif`,Jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qd=`#ifdef USE_AOMAP
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
#endif`,ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tf=`#ifdef USE_BATCHING
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
#endif`,nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,af=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,of=`#ifdef USE_IRIDESCENCE
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
#endif`,lf=`#ifdef USE_BUMPMAP
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
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xf=`#define PI 3.141592653589793
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
} // validated`,_f=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yf=`vec3 transformedNormal = objectNormal;
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
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ef=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cf=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Df=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nf=`#ifdef USE_GRADIENTMAP
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
}`,Ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bf=`uniform bool receiveShadow;
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
#endif`,kf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xf=`PhysicalMaterial material;
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
#endif`,qf=`struct PhysicalMaterial {
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
}`,Yf=`
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
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$f=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ep=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ip=`#if defined( USE_POINTS_UV )
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
#endif`,rp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ap=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,op=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cp=`#ifdef USE_MORPHTARGETS
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
#endif`,hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gp=`#ifdef USE_NORMALMAP
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
#endif`,xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ep=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dp=`float getShadowMask() {
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
}`,Lp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Up=`#ifdef USE_SKINNING
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
#endif`,Np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fp=`#ifdef USE_SKINNING
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
#endif`,zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vp=`#ifdef USE_TRANSMISSION
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
#endif`,Gp=`#ifdef USE_TRANSMISSION
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zp=`uniform sampler2D t2D;
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
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`#include <common>
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
}`,em=`#if DEPTH_PACKING == 3200
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
}`,tm=`#define DISTANCE
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
}`,nm=`#define DISTANCE
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
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`uniform float scale;
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
}`,am=`uniform vec3 diffuse;
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
}`,om=`#include <common>
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
}`,lm=`uniform vec3 diffuse;
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
}`,cm=`#define LAMBERT
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
}`,hm=`#define LAMBERT
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
}`,um=`#define MATCAP
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
}`,dm=`#define MATCAP
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
}`,fm=`#define NORMAL
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
}`,pm=`#define NORMAL
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
}`,mm=`#define PHONG
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
}`,gm=`#define PHONG
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
}`,xm=`#define STANDARD
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
}`,_m=`#define STANDARD
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
}`,ym=`#define TOON
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
}`,vm=`#define TOON
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
}`,Mm=`uniform float size;
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
}`,bm=`uniform vec3 diffuse;
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
}`,Sm=`#include <common>
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
}`,wm=`uniform vec3 color;
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
}`,Tm=`uniform float rotation;
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
}`,Em=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:Yd,alphahash_pars_fragment:Zd,alphamap_fragment:Jd,alphamap_pars_fragment:$d,alphatest_fragment:Kd,alphatest_pars_fragment:jd,aomap_fragment:Qd,aomap_pars_fragment:ef,batching_pars_vertex:tf,batching_vertex:nf,begin_vertex:rf,beginnormal_vertex:sf,bsdfs:af,iridescence_fragment:of,bumpmap_pars_fragment:lf,clipping_planes_fragment:cf,clipping_planes_pars_fragment:hf,clipping_planes_pars_vertex:uf,clipping_planes_vertex:df,color_fragment:ff,color_pars_fragment:pf,color_pars_vertex:mf,color_vertex:gf,common:xf,cube_uv_reflection_fragment:_f,defaultnormal_vertex:yf,displacementmap_pars_vertex:vf,displacementmap_vertex:Mf,emissivemap_fragment:bf,emissivemap_pars_fragment:Sf,colorspace_fragment:wf,colorspace_pars_fragment:Tf,envmap_fragment:Ef,envmap_common_pars_fragment:Af,envmap_pars_fragment:Cf,envmap_pars_vertex:Rf,envmap_physical_pars_fragment:kf,envmap_vertex:If,fog_vertex:Pf,fog_pars_vertex:Df,fog_fragment:Lf,fog_pars_fragment:Uf,gradientmap_pars_fragment:Nf,lightmap_pars_fragment:Ff,lights_lambert_fragment:zf,lights_lambert_pars_fragment:Of,lights_pars_begin:Bf,lights_toon_fragment:Vf,lights_toon_pars_fragment:Gf,lights_phong_fragment:Hf,lights_phong_pars_fragment:Wf,lights_physical_fragment:Xf,lights_physical_pars_fragment:qf,lights_fragment_begin:Yf,lights_fragment_maps:Zf,lights_fragment_end:Jf,logdepthbuf_fragment:$f,logdepthbuf_pars_fragment:Kf,logdepthbuf_pars_vertex:jf,logdepthbuf_vertex:Qf,map_fragment:ep,map_pars_fragment:tp,map_particle_fragment:np,map_particle_pars_fragment:ip,metalnessmap_fragment:rp,metalnessmap_pars_fragment:sp,morphinstance_vertex:ap,morphcolor_vertex:op,morphnormal_vertex:lp,morphtarget_pars_vertex:cp,morphtarget_vertex:hp,normal_fragment_begin:up,normal_fragment_maps:dp,normal_pars_fragment:fp,normal_pars_vertex:pp,normal_vertex:mp,normalmap_pars_fragment:gp,clearcoat_normal_fragment_begin:xp,clearcoat_normal_fragment_maps:_p,clearcoat_pars_fragment:yp,iridescence_pars_fragment:vp,opaque_fragment:Mp,packing:bp,premultiplied_alpha_fragment:Sp,project_vertex:wp,dithering_fragment:Tp,dithering_pars_fragment:Ep,roughnessmap_fragment:Ap,roughnessmap_pars_fragment:Cp,shadowmap_pars_fragment:Rp,shadowmap_pars_vertex:Ip,shadowmap_vertex:Pp,shadowmask_pars_fragment:Dp,skinbase_vertex:Lp,skinning_pars_vertex:Up,skinning_vertex:Np,skinnormal_vertex:Fp,specularmap_fragment:zp,specularmap_pars_fragment:Op,tonemapping_fragment:Bp,tonemapping_pars_fragment:kp,transmission_fragment:Vp,transmission_pars_fragment:Gp,uv_pars_fragment:Hp,uv_pars_vertex:Wp,uv_vertex:Xp,worldpos_vertex:qp,background_vert:Yp,background_frag:Zp,backgroundCube_vert:Jp,backgroundCube_frag:$p,cube_vert:Kp,cube_frag:jp,depth_vert:Qp,depth_frag:em,distanceRGBA_vert:tm,distanceRGBA_frag:nm,equirect_vert:im,equirect_frag:rm,linedashed_vert:sm,linedashed_frag:am,meshbasic_vert:om,meshbasic_frag:lm,meshlambert_vert:cm,meshlambert_frag:hm,meshmatcap_vert:um,meshmatcap_frag:dm,meshnormal_vert:fm,meshnormal_frag:pm,meshphong_vert:mm,meshphong_frag:gm,meshphysical_vert:xm,meshphysical_frag:_m,meshtoon_vert:ym,meshtoon_frag:vm,points_vert:Mm,points_frag:bm,shadow_vert:Sm,shadow_frag:wm,sprite_vert:Tm,sprite_frag:Em},Re={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},zn={basic:{uniforms:Qt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Qt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new je(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Qt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Qt([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Qt([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new je(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Qt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Qt([Re.points,Re.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Qt([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Qt([Re.common,Re.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Qt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Qt([Re.sprite,Re.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Qt([Re.common,Re.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Qt([Re.lights,Re.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};zn.physical={uniforms:Qt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var Do={r:0,b:0,g:0},Hi=new En,Am=new vt;function Cm(i,e,t,n,r,s,a){let o=new je(0),c=s===!0?0:1,l,h,d=null,p=0,f=null;function g(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?t:e).get(y)),y}function x(T){let y=!1,I=g(T);I===null?u(o,c):I&&I.isColor&&(u(I,1),y=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,y){let I=g(y);I&&(I.isCubeTexture||I.mapping===As)?(h===void 0&&(h=new ot(new qt(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Gi(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,F,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Hi.copy(y.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Am.makeRotationFromEuler(Hi)),h.material.toneMapped=mt.getTransfer(I.colorSpace)!==wt,(d!==I||p!==I.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=I,p=I.version,f=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new ot(new dn(2,2),new ln({name:"BackgroundMaterial",uniforms:Gi(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=mt.getTransfer(I.colorSpace)!==wt,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(d!==I||p!==I.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=I,p=I.version,f=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function u(T,y){T.getRGB(Do,Yl(i)),n.buffers.color.setClear(Do.r,Do.g,Do.b,y,a)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,y=1){o.set(T),c=y,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,u(o,c)},render:x,addToRenderList:m,dispose:_}}function Rm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null),s=r,a=!1;function o(M,E,U,k,L){let z=!1,B=d(k,U,E);s!==B&&(s=B,l(s.object)),z=f(M,k,U,L),z&&g(M,k,U,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,y(M,E,U,k),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,E,U){let k=U.wireframe===!0,L=n[M.id];L===void 0&&(L={},n[M.id]=L);let z=L[E.id];z===void 0&&(z={},L[E.id]=z);let B=z[k];return B===void 0&&(B=p(c()),z[k]=B),B}function p(M){let E=[],U=[],k=[];for(let L=0;L<t;L++)E[L]=0,U[L]=0,k[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:U,attributeDivisors:k,object:M,attributes:{},index:null}}function f(M,E,U,k){let L=s.attributes,z=E.attributes,B=0,$=U.getAttributes();for(let X in $)if($[X].location>=0){let ae=L[X],Ee=z[X];if(Ee===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(Ee=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(Ee=M.instanceColor)),ae===void 0||ae.attribute!==Ee||Ee&&ae.data!==Ee.data)return!0;B++}return s.attributesNum!==B||s.index!==k}function g(M,E,U,k){let L={},z=E.attributes,B=0,$=U.getAttributes();for(let X in $)if($[X].location>=0){let ae=z[X];ae===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor));let Ee={};Ee.attribute=ae,ae&&ae.data&&(Ee.data=ae.data),L[X]=Ee,B++}s.attributes=L,s.attributesNum=B,s.index=k}function x(){let M=s.newAttributes;for(let E=0,U=M.length;E<U;E++)M[E]=0}function m(M){u(M,0)}function u(M,E){let U=s.newAttributes,k=s.enabledAttributes,L=s.attributeDivisors;U[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),L[M]!==E&&(i.vertexAttribDivisor(M,E),L[M]=E)}function _(){let M=s.newAttributes,E=s.enabledAttributes;for(let U=0,k=E.length;U<k;U++)E[U]!==M[U]&&(i.disableVertexAttribArray(U),E[U]=0)}function T(M,E,U,k,L,z,B){B===!0?i.vertexAttribIPointer(M,E,U,L,z):i.vertexAttribPointer(M,E,U,k,L,z)}function y(M,E,U,k){x();let L=k.attributes,z=U.getAttributes(),B=E.defaultAttributeValues;for(let $ in z){let X=z[$];if(X.location>=0){let le=L[$];if(le===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),le!==void 0){let ae=le.normalized,Ee=le.itemSize,Ne=e.get(le);if(Ne===void 0)continue;let He=Ne.buffer,et=Ne.type,Qe=Ne.bytesPerElement,Y=et===i.INT||et===i.UNSIGNED_INT||le.gpuType===Ja;if(le.isInterleavedBufferAttribute){let j=le.data,ge=j.stride,ke=le.offset;if(j.isInstancedInterleavedBuffer){for(let Pe=0;Pe<X.locationSize;Pe++)u(X.location+Pe,j.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Pe=0;Pe<X.locationSize;Pe++)m(X.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,He);for(let Pe=0;Pe<X.locationSize;Pe++)T(X.location+Pe,Ee/X.locationSize,et,ae,ge*Qe,(ke+Ee/X.locationSize*Pe)*Qe,Y)}else{if(le.isInstancedBufferAttribute){for(let j=0;j<X.locationSize;j++)u(X.location+j,le.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let j=0;j<X.locationSize;j++)m(X.location+j);i.bindBuffer(i.ARRAY_BUFFER,He);for(let j=0;j<X.locationSize;j++)T(X.location+j,Ee/X.locationSize,et,ae,Ee*Qe,Ee/X.locationSize*j*Qe,Y)}}else if(B!==void 0){let ae=B[$];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(X.location,ae);break;case 3:i.vertexAttrib3fv(X.location,ae);break;case 4:i.vertexAttrib4fv(X.location,ae);break;default:i.vertexAttrib1fv(X.location,ae)}}}}_()}function I(){N();for(let M in n){let E=n[M];for(let U in E){let k=E[U];for(let L in k)h(k[L].object),delete k[L];delete E[U]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;let E=n[M.id];for(let U in E){let k=E[U];for(let L in k)h(k[L].object),delete k[L];delete E[U]}delete n[M.id]}function F(M){for(let E in n){let U=n[E];if(U[M.id]===void 0)continue;let k=U[M.id];for(let L in k)h(k[L].object),delete k[L];delete U[M.id]}}function N(){b(),a=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:F,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function Im(i,e,t){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function o(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,n,1)}function c(l,h,d,p){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*p[x];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Pm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let F=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(F){return!(F!==_n&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(F){let N=F===Nr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Cn&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Rn&&!N)}function c(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:_,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:I,maxSamples:C}}function Dm(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Dn,o=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let f=d.length!==0||p||n!==0||r;return r=p,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{let _=s?0:n,T=_*4,y=u.clippingState||null;c.value=y,y=h(g,p,T,f);for(let I=0;I!==T;++I)y[I]=t[I];u.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,p,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let u=f+x*4,_=p.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let T=0,y=f;T!==x;++T,y+=4)a.copy(d[T]).applyMatrix4(_,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Lm(i){let e=new WeakMap;function t(a,o){return o===qa?a.mapping=ki:o===Ya&&(a.mapping=Vi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===qa||o===Ya)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Ma(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Br=4,Vh=[.125,.215,.35,.446,.526,.582],qi=20,Kl=new Es,Gh=new je,jl=null,Ql=0,ec=0,tc=!1,Xi=(1+Math.sqrt(5))/2,Or=1/Xi,Hh=[new V(-Xi,Or,0),new V(Xi,Or,0),new V(-Or,0,Xi),new V(Or,0,Xi),new V(0,Xi,-Or),new V(0,Xi,Or),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],Um=new V,No=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=Um}=s;jl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jl,Ql,ec),this._renderer.xr.enabled=tc,e.scissorTest=!1,Lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===Vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Nr,format:_n,colorSpace:Ri,depthBuffer:!1},r=Wh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wh(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nm(s)),this._blurMaterial=Fm(s,e,t)}return r}_compileMaterial(e){let t=new ot(this._lodPlanes[0],e);this._renderer.compile(t,Kl)}_sceneToCubeUV(e,t,n,r,s){let c=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor(Gh),d.toneMapping=ni,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));let x=new on({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),m=new ot(new qt,x),u=!1,_=e.background;_?_.isColor&&(x.color.copy(_),e.background=null,u=!0):(x.color.copy(Gh),u=!0);for(let T=0;T<6;T++){let y=T%3;y===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[T],s.y,s.z)):y===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[T]));let I=this._cubeSize;Lo(r,y*I,T>2?I:0,I,I),d.setRenderTarget(r),u&&d.render(m,c),d.render(e,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=p,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===ki||e.mapping===Vi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xh());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new ot(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;Lo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Kl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Hh[(r-s-1)%Hh.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new ot(this._lodPlanes[r],l),p=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*qi-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):qi;m>qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);let u=[],_=0;for(let F=0;F<qi;++F){let N=F/x,b=Math.exp(-N*N/2);u.push(b),F===0?_+=b:F<m&&(_+=2*b)}for(let F=0;F<u.length;F++)u[F]=u[F]/_;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:T}=this;p.dTheta.value=g,p.mipInt.value=T-n;let y=this._sizeLods[r],I=3*y*(r>T-Br?r-T+Br:0),C=4*(this._cubeSize-y);Lo(t,I,C,3*y,2*y),c.setRenderTarget(t),c.render(d,Kl)}};function Nm(i){let e=[],t=[],n=[],r=i,s=i-Br+1+Vh.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);t.push(o);let c=1/o;a>i-Br?c=Vh[a-i+Br-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,d=1+l,p=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,x=3,m=2,u=1,_=new Float32Array(x*g*f),T=new Float32Array(m*g*f),y=new Float32Array(u*g*f);for(let C=0;C<f;C++){let F=C%3*2/3-1,N=C>2?0:-1,b=[F,N,0,F+2/3,N,0,F+2/3,N+1,0,F,N,0,F+2/3,N+1,0,F,N+1,0];_.set(b,x*g*C),T.set(p,m*g*C);let M=[C,C,C,C,C,C];y.set(M,u*g*C)}let I=new Mt;I.setAttribute("position",new Bt(_,x)),I.setAttribute("uv",new Bt(T,m)),I.setAttribute("faceIndex",new Bt(y,u)),e.push(I),r>Br&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wh(i,e,t){let n=new Ln(i,e,t);return n.texture.mapping=As,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Fm(i,e,t){let n=new Float32Array(qi),r=new V(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uc(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Xh(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function qh(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function uc(){return`

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
	`}function zm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===qa||c===Ya,h=c===ki||c===Vi;if(l||h){let d=e.get(o),p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new No(i)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&r(f)?(t===null&&(t=new No(i)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Om(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Mr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Bm(i,e,t,n){let r={},s=new WeakMap;function a(d){let p=d.target;p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete r[p.id];let f=s.get(p);f&&(e.remove(f),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,t.memory.geometries++),p}function c(d){let p=d.attributes;for(let f in p)e.update(p[f],i.ARRAY_BUFFER)}function l(d){let p=[],f=d.index,g=d.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let T=0,y=_.length;T<y;T+=3){let I=_[T+0],C=_[T+1],F=_[T+2];p.push(I,C,C,F,F,I)}}else if(g!==void 0){let _=g.array;x=g.version;for(let T=0,y=_.length/3-1;T<y;T+=3){let I=T+0,C=T+1,F=T+2;p.push(I,C,C,F,F,I)}}else return;let m=new(ql(p)?ms:ps)(p,1);m.version=x;let u=s.get(d);u&&e.remove(u),s.set(d,m)}function h(d){let p=s.get(d);if(p){let f=d.index;f!==null&&p.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function km(i,e,t){let n;function r(p){n=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function c(p,f){i.drawElements(n,f,s,p*a),t.update(f,n,1)}function l(p,f,g){g!==0&&(i.drawElementsInstanced(n,f,s,p*a,g),t.update(f,n,g))}function h(p,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,p,0,g);let m=0;for(let u=0;u<g;u++)m+=f[u];t.update(m,n,1)}function d(p,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)l(p[u]/a,f[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,p,0,x,0,g);let u=0;for(let _=0;_<g;_++)u+=f[_]*x[_];t.update(u,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Vm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Gm(i,e,t){let n=new WeakMap,r=new gt;function s(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,p=n.get(o);if(p===void 0||p.count!==d){let b=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",b)};p!==void 0&&p.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],T=0;f===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let y=o.attributes.position.count*T,I=1;y>e.maxTextureSize&&(I=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let C=new Float32Array(y*I*4*d),F=new fs(C,y,I,d);F.type=Rn,F.needsUpdate=!0;let N=T*4;for(let M=0;M<d;M++){let E=m[M],U=u[M],k=_[M],L=y*I*4*M;for(let z=0;z<E.count;z++){let B=z*N;f===!0&&(r.fromBufferAttribute(E,z),C[L+B+0]=r.x,C[L+B+1]=r.y,C[L+B+2]=r.z,C[L+B+3]=0),g===!0&&(r.fromBufferAttribute(U,z),C[L+B+4]=r.x,C[L+B+5]=r.y,C[L+B+6]=r.z,C[L+B+7]=0),x===!0&&(r.fromBufferAttribute(k,z),C[L+B+8]=r.x,C[L+B+9]=r.y,C[L+B+10]=r.z,C[L+B+11]=k.itemSize===4?r.w:1)}}p={count:d,texture:F,size:new Xe(y,I)},n.set(o,p),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function Hm(i,e,t,n){let r=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return d}function a(){r=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}var uu=new jt,Yh=new vs(1,1),du=new fs,fu=new ya,pu=new xs,Zh=[],Jh=[],$h=new Float32Array(16),Kh=new Float32Array(9),jh=new Float32Array(4);function Gr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Zh[r];if(s===void 0&&(s=new Float32Array(r),Zh[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fo(i,e){let t=Jh[e];t===void 0&&(t=new Int32Array(e),Jh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Wm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function Ym(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function Zm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(kt(t,n))return;jh.set(n),i.uniformMatrix2fv(this.addr,!1,jh),Vt(t,n)}}function Jm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(kt(t,n))return;Kh.set(n),i.uniformMatrix3fv(this.addr,!1,Kh),Vt(t,n)}}function $m(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(kt(t,n))return;$h.set(n),i.uniformMatrix4fv(this.addr,!1,$h),Vt(t,n)}}function Km(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function Qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function tg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function sg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Yh.compareFunction=Hl,s=Yh):s=uu,t.setTexture2D(e||s,r)}function ag(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||fu,r)}function og(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||pu,r)}function lg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||du,r)}function cg(i){switch(i){case 5126:return Wm;case 35664:return Xm;case 35665:return qm;case 35666:return Ym;case 35674:return Zm;case 35675:return Jm;case 35676:return $m;case 5124:case 35670:return Km;case 35667:case 35671:return jm;case 35668:case 35672:return Qm;case 35669:case 35673:return eg;case 5125:return tg;case 36294:return ng;case 36295:return ig;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return lg}}function hg(i,e){i.uniform1fv(this.addr,e)}function ug(i,e){let t=Gr(e,this.size,2);i.uniform2fv(this.addr,t)}function dg(i,e){let t=Gr(e,this.size,3);i.uniform3fv(this.addr,t)}function fg(i,e){let t=Gr(e,this.size,4);i.uniform4fv(this.addr,t)}function pg(i,e){let t=Gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function mg(i,e){let t=Gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function gg(i,e){let t=Gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function xg(i,e){i.uniform1iv(this.addr,e)}function _g(i,e){i.uniform2iv(this.addr,e)}function yg(i,e){i.uniform3iv(this.addr,e)}function vg(i,e){i.uniform4iv(this.addr,e)}function Mg(i,e){i.uniform1uiv(this.addr,e)}function bg(i,e){i.uniform2uiv(this.addr,e)}function Sg(i,e){i.uniform3uiv(this.addr,e)}function wg(i,e){i.uniform4uiv(this.addr,e)}function Tg(i,e,t){let n=this.cache,r=e.length,s=Fo(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||uu,s[a])}function Eg(i,e,t){let n=this.cache,r=e.length,s=Fo(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||fu,s[a])}function Ag(i,e,t){let n=this.cache,r=e.length,s=Fo(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||pu,s[a])}function Cg(i,e,t){let n=this.cache,r=e.length,s=Fo(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||du,s[a])}function Rg(i){switch(i){case 5126:return hg;case 35664:return ug;case 35665:return dg;case 35666:return fg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return xg;case 35667:case 35671:return _g;case 35668:case 35672:return yg;case 35669:case 35673:return vg;case 5125:return Mg;case 36294:return bg;case 36295:return Sg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Cg}}var ic=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cg(t.type)}},rc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rg(t.type)}},sc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},nc=/(\w+)(\])?(\[|\.)?/g;function Qh(i,e){i.seq.push(e),i.map[e.id]=e}function Ig(i,e,t){let n=i.name,r=n.length;for(nc.lastIndex=0;;){let s=nc.exec(n),a=nc.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Qh(t,l===void 0?new ic(o,i,e):new rc(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new sc(o),Qh(t,d)),t=d}}}var kr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Ig(s,a,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function eu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Pg=37297,Dg=0;function Lg(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var tu=new st;function Ug(i){mt._getMatrix(tu,mt.workingColorSpace,i);let e=`mat3( ${tu.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(i)){case us:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function nu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Lg(i.getShaderSource(e),o)}else return s}function Ng(i,e){let t=Ug(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Fg(i,e){let t;switch(e){case yh:t="Linear";break;case vh:t="Reinhard";break;case Mh:t="Cineon";break;case Lr:t="ACESFilmic";break;case Sh:t="AgX";break;case wh:t="Neutral";break;case bh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Uo=new V;function zg(){mt.getLuminanceCoefficients(Uo);let i=Uo.x.toFixed(4),e=Uo.y.toFixed(4),t=Uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Og(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function Bg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Us(i){return i!==""}function iu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ru(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ac(i){return i.replace(Vg,Hg)}var Gg=new Map;function Hg(i,e){let t=ct[e];if(t===void 0){let n=Gg.get(e);if(n!==void 0)t=ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ac(t)}var Wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function su(i){return i.replace(Wg,Xg)}function Xg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function au(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Dr?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fn&&(e="SHADOWMAP_TYPE_VSM"),e}function Yg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ki:case Vi:e="ENVMAP_TYPE_CUBE";break;case As:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vi:e="ENVMAP_MODE_REFRACTION";break}return e}function Jg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ll:e="ENVMAP_BLENDING_MULTIPLY";break;case xh:e="ENVMAP_BLENDING_MIX";break;case _h:e="ENVMAP_BLENDING_ADD";break}return e}function $g(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Kg(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=qg(t),l=Yg(t),h=Zg(t),d=Jg(t),p=$g(t),f=Og(t),g=Bg(s),x=r.createProgram(),m,u,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Us).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Us).join(`
`),u.length>0&&(u+=`
`)):(m=[au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),u=[au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?ct.tonemapping_pars_fragment:"",t.toneMapping!==ni?Fg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,Ng("linearToOutputTexel",t.outputColorSpace),zg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Us).join(`
`)),a=ac(a),a=iu(a,t),a=ru(a,t),o=ac(o),o=iu(o,t),o=ru(o,t),a=su(a),o=su(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===Wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let T=_+m+a,y=_+u+o,I=eu(r,r.VERTEX_SHADER,T),C=eu(r,r.FRAGMENT_SHADER,y);r.attachShader(x,I),r.attachShader(x,C),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function F(E){if(i.debug.checkShaderErrors){let U=r.getProgramInfoLog(x)||"",k=r.getShaderInfoLog(I)||"",L=r.getShaderInfoLog(C)||"",z=U.trim(),B=k.trim(),$=L.trim(),X=!0,le=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,I,C);else{let ae=nu(r,I,"vertex"),Ee=nu(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+z+`
`+ae+`
`+Ee)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||$==="")&&(le=!1);le&&(E.diagnostics={runnable:X,programLog:z,vertexShader:{log:B,prefix:m},fragmentShader:{log:$,prefix:u}})}r.deleteShader(I),r.deleteShader(C),N=new kr(r,x),b=kg(r,x)}let N;this.getUniforms=function(){return N===void 0&&F(this),N};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,Pg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=C,this}var jg=0,oc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new lc(e),t.set(e,n)),n}},lc=class{constructor(e){this.id=jg++,this.code=e,this.usedTimes=0}};function Qg(i,e,t,n,r,s,a){let o=new wr,c=new oc,l=new Set,h=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures,f=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,M,E,U,k){let L=U.fog,z=k.geometry,B=b.isMeshStandardMaterial?U.environment:null,$=(b.isMeshStandardMaterial?t:e).get(b.envMap||B),X=$&&$.mapping===As?$.image.height:null,le=g[b.type];b.precision!==null&&(f=r.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let ae=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ee=ae!==void 0?ae.length:0,Ne=0;z.morphAttributes.position!==void 0&&(Ne=1),z.morphAttributes.normal!==void 0&&(Ne=2),z.morphAttributes.color!==void 0&&(Ne=3);let He,et,Qe,Y;if(le){let at=zn[le];He=at.vertexShader,et=at.fragmentShader}else He=b.vertexShader,et=b.fragmentShader,c.update(b),Qe=c.getVertexShaderID(b),Y=c.getFragmentShaderID(b);let j=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),ke=k.isInstancedMesh===!0,Pe=k.isBatchedMesh===!0,we=!!b.map,lt=!!b.matcap,O=!!$,ft=!!b.aoMap,Je=!!b.lightMap,Ye=!!b.bumpMap,Ce=!!b.normalMap,yt=!!b.displacementMap,De=!!b.emissiveMap,Ve=!!b.metalnessMap,It=!!b.roughnessMap,pt=b.anisotropy>0,R=b.clearcoat>0,v=b.dispersion>0,J=b.iridescence>0,se=b.sheen>0,ce=b.transmission>0,ie=pt&&!!b.anisotropyMap,Ue=R&&!!b.clearcoatMap,xe=R&&!!b.clearcoatNormalMap,Le=R&&!!b.clearcoatRoughnessMap,Fe=J&&!!b.iridescenceMap,ue=J&&!!b.iridescenceThicknessMap,_e=se&&!!b.sheenColorMap,$e=se&&!!b.sheenRoughnessMap,Oe=!!b.specularMap,Te=!!b.specularColorMap,tt=!!b.specularIntensityMap,G=ce&&!!b.transmissionMap,de=ce&&!!b.thicknessMap,Me=!!b.gradientMap,Ie=!!b.alphaMap,pe=b.alphaTest>0,oe=!!b.alphaHash,ze=!!b.extensions,Ke=ni;b.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ke=i.toneMapping);let ut={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:He,fragmentShader:et,defines:b.defines,customVertexShaderID:Qe,customFragmentShaderID:Y,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Pe,batchingColor:Pe&&k._colorsTexture!==null,instancing:ke,instancingColor:ke&&k.instanceColor!==null,instancingMorph:ke&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ri,alphaToCoverage:!!b.alphaToCoverage,map:we,matcap:lt,envMap:O,envMapMode:O&&$.mapping,envMapCubeUVHeight:X,aoMap:ft,lightMap:Je,bumpMap:Ye,normalMap:Ce,displacementMap:p&&yt,emissiveMap:De,normalMapObjectSpace:Ce&&b.normalMapType===Ch,normalMapTangentSpace:Ce&&b.normalMapType===Gl,metalnessMap:Ve,roughnessMap:It,anisotropy:pt,anisotropyMap:ie,clearcoat:R,clearcoatMap:Ue,clearcoatNormalMap:xe,clearcoatRoughnessMap:Le,dispersion:v,iridescence:J,iridescenceMap:Fe,iridescenceThicknessMap:ue,sheen:se,sheenColorMap:_e,sheenRoughnessMap:$e,specularMap:Oe,specularColorMap:Te,specularIntensityMap:tt,transmission:ce,transmissionMap:G,thicknessMap:de,gradientMap:Me,opaque:b.transparent===!1&&b.blending===Ai&&b.alphaToCoverage===!1,alphaMap:Ie,alphaTest:pe,alphaHash:oe,combine:b.combine,mapUv:we&&x(b.map.channel),aoMapUv:ft&&x(b.aoMap.channel),lightMapUv:Je&&x(b.lightMap.channel),bumpMapUv:Ye&&x(b.bumpMap.channel),normalMapUv:Ce&&x(b.normalMap.channel),displacementMapUv:yt&&x(b.displacementMap.channel),emissiveMapUv:De&&x(b.emissiveMap.channel),metalnessMapUv:Ve&&x(b.metalnessMap.channel),roughnessMapUv:It&&x(b.roughnessMap.channel),anisotropyMapUv:ie&&x(b.anisotropyMap.channel),clearcoatMapUv:Ue&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:xe&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:$e&&x(b.sheenRoughnessMap.channel),specularMapUv:Oe&&x(b.specularMap.channel),specularColorMapUv:Te&&x(b.specularColorMap.channel),specularIntensityMapUv:tt&&x(b.specularIntensityMap.channel),transmissionMapUv:G&&x(b.transmissionMap.channel),thicknessMapUv:de&&x(b.thicknessMap.channel),alphaMapUv:Ie&&x(b.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ce||pt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!z.attributes.uv&&(we||Ie),fog:!!L,useFog:b.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ge,skinning:k.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,decodeVideoTexture:we&&b.map.isVideoTexture===!0&&mt.getTransfer(b.map.colorSpace)===wt,decodeVideoTextureEmissive:De&&b.emissiveMap.isVideoTexture===!0&&mt.getTransfer(b.emissiveMap.colorSpace)===wt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Rt,flipSided:b.side===Yt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ze&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&b.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function u(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let E in b.defines)M.push(E),M.push(b.defines[E]);return b.isRawShaderMaterial===!1&&(_(M,b),T(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function _(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function T(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function y(b){let M=g[b.type],E;if(M){let U=zn[M];E=Po.clone(U.uniforms)}else E=b.uniforms;return E}function I(b,M){let E;for(let U=0,k=h.length;U<k;U++){let L=h[U];if(L.cacheKey===M){E=L,++E.usedTimes;break}}return E===void 0&&(E=new Kg(i,M,b,s),h.push(E)),E}function C(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function F(b){c.remove(b)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:I,releaseProgram:C,releaseShaderCache:F,programs:h,dispose:N}}function e0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function t0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ou(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function lu(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d,p,f,g,x,m){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:p,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[e]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=f,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=x,u.group=m),e++,u}function o(d,p,f,g,x,m){let u=a(d,p,f,g,x,m);f.transmission>0?n.push(u):f.transparent===!0?r.push(u):t.push(u)}function c(d,p,f,g,x,m){let u=a(d,p,f,g,x,m);f.transmission>0?n.unshift(u):f.transparent===!0?r.unshift(u):t.unshift(u)}function l(d,p){t.length>1&&t.sort(d||t0),n.length>1&&n.sort(p||ou),r.length>1&&r.sort(p||ou)}function h(){for(let d=e,p=i.length;d<p;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function n0(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new lu,i.set(n,[a])):r>=s.length?(a=new lu,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function i0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new je};break;case"SpotLight":t={position:new V,direction:new V,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function r0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var s0=0;function a0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function o0(i){let e=new i0,t=r0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new V);let r=new V,s=new vt,a=new vt;function o(l){let h=0,d=0,p=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,x=0,m=0,u=0,_=0,T=0,y=0,I=0,C=0,F=0;l.sort(a0);for(let b=0,M=l.length;b<M;b++){let E=l[b],U=E.color,k=E.intensity,L=E.distance,z=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=U.r*k,d+=U.g*k,p+=U.b*k;else if(E.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(E.sh.coefficients[B],k);F++}else if(E.isDirectionalLight){let B=e.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let $=E.shadow,X=t.get(E);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=E.shadow.matrix,_++}n.directional[f]=B,f++}else if(E.isSpotLight){let B=e.get(E);B.position.setFromMatrixPosition(E.matrixWorld),B.color.copy(U).multiplyScalar(k),B.distance=L,B.coneCos=Math.cos(E.angle),B.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),B.decay=E.decay,n.spot[x]=B;let $=E.shadow;if(E.map&&(n.spotLightMap[I]=E.map,I++,$.updateMatrices(E),E.castShadow&&C++),n.spotLightMatrix[x]=$.matrix,E.castShadow){let X=t.get(E);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=z,y++}x++}else if(E.isRectAreaLight){let B=e.get(E);B.color.copy(U).multiplyScalar(k),B.halfWidth.set(E.width*.5,0,0),B.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=B,m++}else if(E.isPointLight){let B=e.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),B.distance=E.distance,B.decay=E.decay,E.castShadow){let $=E.shadow,X=t.get(E);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,X.shadowCameraNear=$.camera.near,X.shadowCameraFar=$.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=E.shadow.matrix,T++}n.point[g]=B,g++}else if(E.isHemisphereLight){let B=e.get(E);B.skyColor.copy(E.color).multiplyScalar(k),B.groundColor.copy(E.groundColor).multiplyScalar(k),n.hemi[u]=B,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;let N=n.hash;(N.directionalLength!==f||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==u||N.numDirectionalShadows!==_||N.numPointShadows!==T||N.numSpotShadows!==y||N.numSpotMaps!==I||N.numLightProbes!==F)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=y+I-C,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=F,N.directionalLength=f,N.pointLength=g,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=u,N.numDirectionalShadows=_,N.numPointShadows=T,N.numSpotShadows=y,N.numSpotMaps=I,N.numLightProbes=F,n.version=s0++)}function c(l,h){let d=0,p=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let u=0,_=l.length;u<_;u++){let T=l[u];if(T.isDirectionalLight){let y=n.directional[d];y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(T.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(T.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){let y=n.point[p];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),p++}else if(T.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function cu(i){let e=new o0(i),t=[],n=[];function r(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function l0(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new cu(i),e.set(r,[o])):s>=a.length?(o=new cu(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var c0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h0=`uniform sampler2D shadow_pass;
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
}`;function u0(i,e,t){let n=new Rr,r=new Xe,s=new Xe,a=new gt,o=new Ea({depthPacking:Ah}),c=new Aa,l={},h=t.maxTextureSize,d={[$n]:Yt,[Yt]:$n,[Rt]:Rt},p=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:c0,fragmentShader:h0}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let g=new Mt;g.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ot(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rl;let u=this.type;this.render=function(C,F,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let b=i.getRenderTarget(),M=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ti),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let k=u!==Fn&&this.type===Fn,L=u===Fn&&this.type!==Fn;for(let z=0,B=C.length;z<B;z++){let $=C[z],X=$.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);let le=X.getFrameExtents();if(r.multiply(le),s.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/le.x),r.x=s.x*le.x,X.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/le.y),r.y=s.y*le.y,X.mapSize.y=s.y)),X.map===null||k===!0||L===!0){let Ee=this.type!==Fn?{minFilter:an,magFilter:an}:{};X.map!==null&&X.map.dispose(),X.map=new Ln(r.x,r.y,Ee),X.map.texture.name=$.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let ae=X.getViewportCount();for(let Ee=0;Ee<ae;Ee++){let Ne=X.getViewport(Ee);a.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),U.viewport(a),X.updateMatrices($,Ee),n=X.getFrustum(),y(F,N,X.camera,$,this.type)}X.isPointLightShadow!==!0&&this.type===Fn&&_(X,N),X.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,E)};function _(C,F){let N=e.update(x);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ln(r.x,r.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(F,null,N,p,x,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(F,null,N,f,x,null)}function T(C,F,N,b){let M=null,E=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)M=E;else if(M=N.isPointLight===!0?c:o,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){let U=M.uuid,k=F.uuid,L=l[U];L===void 0&&(L={},l[U]=L);let z=L[k];z===void 0&&(z=M.clone(),L[k]=z,F.addEventListener("dispose",I)),M=z}if(M.visible=F.visible,M.wireframe=F.wireframe,b===Fn?M.side=F.shadowSide!==null?F.shadowSide:F.side:M.side=F.shadowSide!==null?F.shadowSide:d[F.side],M.alphaMap=F.alphaMap,M.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,M.map=F.map,M.clipShadows=F.clipShadows,M.clippingPlanes=F.clippingPlanes,M.clipIntersection=F.clipIntersection,M.displacementMap=F.displacementMap,M.displacementScale=F.displacementScale,M.displacementBias=F.displacementBias,M.wireframeLinewidth=F.wireframeLinewidth,M.linewidth=F.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let U=i.properties.get(M);U.light=N}return M}function y(C,F,N,b,M){if(C.visible===!1)return;if(C.layers.test(F.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Fn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);let k=e.update(C),L=C.material;if(Array.isArray(L)){let z=k.groups;for(let B=0,$=z.length;B<$;B++){let X=z[B],le=L[X.materialIndex];if(le&&le.visible){let ae=T(C,le,b,M);C.onBeforeShadow(i,C,F,N,k,ae,X),i.renderBufferDirect(N,null,k,ae,C,X),C.onAfterShadow(i,C,F,N,k,ae,X)}}}else if(L.visible){let z=T(C,L,b,M);C.onBeforeShadow(i,C,F,N,k,z,null),i.renderBufferDirect(N,null,k,z,C,null),C.onAfterShadow(i,C,F,N,k,z,null)}}let U=C.children;for(let k=0,L=U.length;k<L;k++)y(U[k],F,N,b,M)}function I(C){C.target.removeEventListener("dispose",I);for(let N in l){let b=l[N],M=C.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var d0={[Ba]:ka,[Va]:Wa,[Ga]:Xa,[Ci]:Ha,[ka]:Ba,[Wa]:Va,[Xa]:Ga,[Ha]:Ci};function f0(i,e){function t(){let G=!1,de=new gt,Me=null,Ie=new gt(0,0,0,0);return{setMask:function(pe){Me!==pe&&!G&&(i.colorMask(pe,pe,pe,pe),Me=pe)},setLocked:function(pe){G=pe},setClear:function(pe,oe,ze,Ke,ut){ut===!0&&(pe*=Ke,oe*=Ke,ze*=Ke),de.set(pe,oe,ze,Ke),Ie.equals(de)===!1&&(i.clearColor(pe,oe,ze,Ke),Ie.copy(de))},reset:function(){G=!1,Me=null,Ie.set(-1,0,0,0)}}}function n(){let G=!1,de=!1,Me=null,Ie=null,pe=null;return{setReversed:function(oe){if(de!==oe){let ze=e.get("EXT_clip_control");oe?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),de=oe;let Ke=pe;pe=null,this.setClear(Ke)}},getReversed:function(){return de},setTest:function(oe){oe?j(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(oe){Me!==oe&&!G&&(i.depthMask(oe),Me=oe)},setFunc:function(oe){if(de&&(oe=d0[oe]),Ie!==oe){switch(oe){case Ba:i.depthFunc(i.NEVER);break;case ka:i.depthFunc(i.ALWAYS);break;case Va:i.depthFunc(i.LESS);break;case Ci:i.depthFunc(i.LEQUAL);break;case Ga:i.depthFunc(i.EQUAL);break;case Ha:i.depthFunc(i.GEQUAL);break;case Wa:i.depthFunc(i.GREATER);break;case Xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ie=oe}},setLocked:function(oe){G=oe},setClear:function(oe){pe!==oe&&(de&&(oe=1-oe),i.clearDepth(oe),pe=oe)},reset:function(){G=!1,Me=null,Ie=null,pe=null,de=!1}}}function r(){let G=!1,de=null,Me=null,Ie=null,pe=null,oe=null,ze=null,Ke=null,ut=null;return{setTest:function(at){G||(at?j(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(at){de!==at&&!G&&(i.stencilMask(at),de=at)},setFunc:function(at,Xt,Dt){(Me!==at||Ie!==Xt||pe!==Dt)&&(i.stencilFunc(at,Xt,Dt),Me=at,Ie=Xt,pe=Dt)},setOp:function(at,Xt,Dt){(oe!==at||ze!==Xt||Ke!==Dt)&&(i.stencilOp(at,Xt,Dt),oe=at,ze=Xt,Ke=Dt)},setLocked:function(at){G=at},setClear:function(at){ut!==at&&(i.clearStencil(at),ut=at)},reset:function(){G=!1,de=null,Me=null,Ie=null,pe=null,oe=null,ze=null,Ke=null,ut=null}}}let s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap,h={},d={},p=new WeakMap,f=[],g=null,x=!1,m=null,u=null,_=null,T=null,y=null,I=null,C=null,F=new je(0,0,0),N=0,b=!1,M=null,E=null,U=null,k=null,L=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,$=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=$>=1):X.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=$>=2);let le=null,ae={},Ee=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),He=new gt().fromArray(Ee),et=new gt().fromArray(Ne);function Qe(G,de,Me,Ie){let pe=new Uint8Array(4),oe=i.createTexture();i.bindTexture(G,oe),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<Me;ze++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(de+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return oe}let Y={};Y[i.TEXTURE_2D]=Qe(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(Ci),Ye(!1),Ce(Cl),j(i.CULL_FACE),ft(ti);function j(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function ge(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function ke(G,de){return d[G]!==de?(i.bindFramebuffer(G,de),d[G]=de,G===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=de),G===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=de),!0):!1}function Pe(G,de){let Me=f,Ie=!1;if(G){Me=p.get(de),Me===void 0&&(Me=[],p.set(de,Me));let pe=G.textures;if(Me.length!==pe.length||Me[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,ze=pe.length;oe<ze;oe++)Me[oe]=i.COLOR_ATTACHMENT0+oe;Me.length=pe.length,Ie=!0}}else Me[0]!==i.BACK&&(Me[0]=i.BACK,Ie=!0);Ie&&i.drawBuffers(Me)}function we(G){return g!==G?(i.useProgram(G),g=G,!0):!1}let lt={[di]:i.FUNC_ADD,[eh]:i.FUNC_SUBTRACT,[th]:i.FUNC_REVERSE_SUBTRACT};lt[nh]=i.MIN,lt[ih]=i.MAX;let O={[rh]:i.ZERO,[sh]:i.ONE,[ah]:i.SRC_COLOR,[da]:i.SRC_ALPHA,[dh]:i.SRC_ALPHA_SATURATE,[hh]:i.DST_COLOR,[lh]:i.DST_ALPHA,[oh]:i.ONE_MINUS_SRC_COLOR,[fa]:i.ONE_MINUS_SRC_ALPHA,[uh]:i.ONE_MINUS_DST_COLOR,[ch]:i.ONE_MINUS_DST_ALPHA,[fh]:i.CONSTANT_COLOR,[ph]:i.ONE_MINUS_CONSTANT_COLOR,[mh]:i.CONSTANT_ALPHA,[gh]:i.ONE_MINUS_CONSTANT_ALPHA};function ft(G,de,Me,Ie,pe,oe,ze,Ke,ut,at){if(G===ti){x===!0&&(ge(i.BLEND),x=!1);return}if(x===!1&&(j(i.BLEND),x=!0),G!==Qc){if(G!==m||at!==b){if((u!==di||y!==di)&&(i.blendEquation(i.FUNC_ADD),u=di,y=di),at)switch(G){case Ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Il:i.blendFunc(i.ONE,i.ONE);break;case Pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Il:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Pl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}_=null,T=null,I=null,C=null,F.set(0,0,0),N=0,m=G,b=at}return}pe=pe||de,oe=oe||Me,ze=ze||Ie,(de!==u||pe!==y)&&(i.blendEquationSeparate(lt[de],lt[pe]),u=de,y=pe),(Me!==_||Ie!==T||oe!==I||ze!==C)&&(i.blendFuncSeparate(O[Me],O[Ie],O[oe],O[ze]),_=Me,T=Ie,I=oe,C=ze),(Ke.equals(F)===!1||ut!==N)&&(i.blendColor(Ke.r,Ke.g,Ke.b,ut),F.copy(Ke),N=ut),m=G,b=!1}function Je(G,de){G.side===Rt?ge(i.CULL_FACE):j(i.CULL_FACE);let Me=G.side===Yt;de&&(Me=!Me),Ye(Me),G.blending===Ai&&G.transparent===!1?ft(ti):ft(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),s.setMask(G.colorWrite);let Ie=G.stencilWrite;o.setTest(Ie),Ie&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),De(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(G){M!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),M=G)}function Ce(G){G!==Kc?(j(i.CULL_FACE),G!==E&&(G===Cl?i.cullFace(i.BACK):G===jc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),E=G}function yt(G){G!==U&&(B&&i.lineWidth(G),U=G)}function De(G,de,Me){G?(j(i.POLYGON_OFFSET_FILL),(k!==de||L!==Me)&&(i.polygonOffset(de,Me),k=de,L=Me)):ge(i.POLYGON_OFFSET_FILL)}function Ve(G){G?j(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function It(G){G===void 0&&(G=i.TEXTURE0+z-1),le!==G&&(i.activeTexture(G),le=G)}function pt(G,de,Me){Me===void 0&&(le===null?Me=i.TEXTURE0+z-1:Me=le);let Ie=ae[Me];Ie===void 0&&(Ie={type:void 0,texture:void 0},ae[Me]=Ie),(Ie.type!==G||Ie.texture!==de)&&(le!==Me&&(i.activeTexture(Me),le=Me),i.bindTexture(G,de||Y[G]),Ie.type=G,Ie.texture=de)}function R(){let G=ae[le];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function J(){try{i.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function se(){try{i.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{i.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ie(){try{i.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(){try{i.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xe(){try{i.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{i.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{i.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{i.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(G){He.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),He.copy(G))}function $e(G){et.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),et.copy(G))}function Oe(G,de){let Me=l.get(de);Me===void 0&&(Me=new WeakMap,l.set(de,Me));let Ie=Me.get(G);Ie===void 0&&(Ie=i.getUniformBlockIndex(de,G.name),Me.set(G,Ie))}function Te(G,de){let Ie=l.get(de).get(G);c.get(de)!==Ie&&(i.uniformBlockBinding(de,Ie,G.__bindingPointIndex),c.set(de,Ie))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},le=null,ae={},d={},p=new WeakMap,f=[],g=null,x=!1,m=null,u=null,_=null,T=null,y=null,I=null,C=null,F=new je(0,0,0),N=0,b=!1,M=null,E=null,U=null,k=null,L=null,He.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:j,disable:ge,bindFramebuffer:ke,drawBuffers:Pe,useProgram:we,setBlending:ft,setMaterial:Je,setFlipSided:Ye,setCullFace:Ce,setLineWidth:yt,setPolygonOffset:De,setScissorTest:Ve,activeTexture:It,bindTexture:pt,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:J,texImage2D:Fe,texImage3D:ue,updateUBOMapping:Oe,uniformBlockBinding:Te,texStorage2D:xe,texStorage3D:Le,texSubImage2D:se,texSubImage3D:ce,compressedTexSubImage2D:ie,compressedTexSubImage3D:Ue,scissor:_e,viewport:$e,reset:tt}}function p0(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,h=new WeakMap,d,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,v){return f?new OffscreenCanvas(R,v):vr("canvas")}function x(R,v,J){let se=1,ce=pt(R);if((ce.width>J||ce.height>J)&&(se=J/Math.max(ce.width,ce.height)),se<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ie=Math.floor(se*ce.width),Ue=Math.floor(se*ce.height);d===void 0&&(d=g(ie,Ue));let xe=v?g(ie,Ue):d;return xe.width=ie,xe.height=Ue,xe.getContext("2d").drawImage(R,0,0,ie,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ie+"x"+Ue+")."),xe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),R;return R}function m(R){return R.generateMipmaps}function u(R){i.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(R,v,J,se,ce=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ie=v;if(v===i.RED&&(J===i.FLOAT&&(ie=i.R32F),J===i.HALF_FLOAT&&(ie=i.R16F),J===i.UNSIGNED_BYTE&&(ie=i.R8)),v===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(ie=i.R8UI),J===i.UNSIGNED_SHORT&&(ie=i.R16UI),J===i.UNSIGNED_INT&&(ie=i.R32UI),J===i.BYTE&&(ie=i.R8I),J===i.SHORT&&(ie=i.R16I),J===i.INT&&(ie=i.R32I)),v===i.RG&&(J===i.FLOAT&&(ie=i.RG32F),J===i.HALF_FLOAT&&(ie=i.RG16F),J===i.UNSIGNED_BYTE&&(ie=i.RG8)),v===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(ie=i.RG8UI),J===i.UNSIGNED_SHORT&&(ie=i.RG16UI),J===i.UNSIGNED_INT&&(ie=i.RG32UI),J===i.BYTE&&(ie=i.RG8I),J===i.SHORT&&(ie=i.RG16I),J===i.INT&&(ie=i.RG32I)),v===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),J===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),J===i.UNSIGNED_INT&&(ie=i.RGB32UI),J===i.BYTE&&(ie=i.RGB8I),J===i.SHORT&&(ie=i.RGB16I),J===i.INT&&(ie=i.RGB32I)),v===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),J===i.UNSIGNED_INT&&(ie=i.RGBA32UI),J===i.BYTE&&(ie=i.RGBA8I),J===i.SHORT&&(ie=i.RGBA16I),J===i.INT&&(ie=i.RGBA32I)),v===i.RGB&&(J===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(ie=i.R11F_G11F_B10F)),v===i.RGBA){let Ue=ce?us:mt.getTransfer(se);J===i.FLOAT&&(ie=i.RGBA32F),J===i.HALF_FLOAT&&(ie=i.RGBA16F),J===i.UNSIGNED_BYTE&&(ie=Ue===wt?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function y(R,v){let J;return R?v===null||v===_i||v===Fr?J=i.DEPTH24_STENCIL8:v===Rn?J=i.DEPTH32F_STENCIL8:v===Ur&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===_i||v===Fr?J=i.DEPTH_COMPONENT24:v===Rn?J=i.DEPTH_COMPONENT32F:v===Ur&&(J=i.DEPTH_COMPONENT16),J}function I(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==an&&R.minFilter!==Tn?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function C(R){let v=R.target;v.removeEventListener("dispose",C),N(v),v.isVideoTexture&&h.delete(v)}function F(R){let v=R.target;v.removeEventListener("dispose",F),M(v)}function N(R){let v=n.get(R);if(v.__webglInit===void 0)return;let J=R.source,se=p.get(J);if(se){let ce=se[v.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&b(R),Object.keys(se).length===0&&p.delete(J)}n.remove(R)}function b(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let J=R.source,se=p.get(J);delete se[v.__cacheKey],a.memory.textures--}function M(R){let v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(v.__webglFramebuffer[se]))for(let ce=0;ce<v.__webglFramebuffer[se].length;ce++)i.deleteFramebuffer(v.__webglFramebuffer[se][ce]);else i.deleteFramebuffer(v.__webglFramebuffer[se]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[se])}else{if(Array.isArray(v.__webglFramebuffer))for(let se=0;se<v.__webglFramebuffer.length;se++)i.deleteFramebuffer(v.__webglFramebuffer[se]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let se=0;se<v.__webglColorRenderbuffer.length;se++)v.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[se]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let J=R.textures;for(let se=0,ce=J.length;se<ce;se++){let ie=n.get(J[se]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(J[se])}n.remove(R)}let E=0;function U(){E=0}function k(){let R=E;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),E+=1,R}function L(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function z(R,v){let J=n.get(R);if(R.isVideoTexture&&Ve(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&J.__version!==R.version){let se=R.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(J,R,v);return}}else R.isExternalTexture&&(J.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+v)}function B(R,v){let J=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&J.__version!==R.version){Y(J,R,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+v)}function $(R,v){let J=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&J.__version!==R.version){Y(J,R,v);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+v)}function X(R,v){let J=n.get(R);if(R.version>0&&J.__version!==R.version){j(J,R,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+v)}let le={[xr]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[pa]:i.MIRRORED_REPEAT},ae={[an]:i.NEAREST,[Th]:i.NEAREST_MIPMAP_NEAREST,[Cs]:i.NEAREST_MIPMAP_LINEAR,[Tn]:i.LINEAR,[Za]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},Ee={[Rh]:i.NEVER,[Nh]:i.ALWAYS,[Ih]:i.LESS,[Hl]:i.LEQUAL,[Ph]:i.EQUAL,[Uh]:i.GEQUAL,[Dh]:i.GREATER,[Lh]:i.NOTEQUAL};function Ne(R,v){if(v.type===Rn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Tn||v.magFilter===Za||v.magFilter===Cs||v.magFilter===xi||v.minFilter===Tn||v.minFilter===Za||v.minFilter===Cs||v.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,le[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,le[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,le[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ae[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ae[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ee[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===an||v.minFilter!==Cs&&v.minFilter!==xi||v.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function He(R,v){let J=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",C));let se=v.source,ce=p.get(se);ce===void 0&&(ce={},p.set(se,ce));let ie=L(v);if(ie!==R.__cacheKey){ce[ie]===void 0&&(ce[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,J=!0),ce[ie].usedTimes++;let Ue=ce[R.__cacheKey];Ue!==void 0&&(ce[R.__cacheKey].usedTimes--,Ue.usedTimes===0&&b(v)),R.__cacheKey=ie,R.__webglTexture=ce[ie].texture}return J}function et(R,v,J){return Math.floor(Math.floor(R/J)/v)}function Qe(R,v,J,se){let ie=R.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,J,se,v.data);else{ie.sort((ue,_e)=>ue.start-_e.start);let Ue=0;for(let ue=1;ue<ie.length;ue++){let _e=ie[Ue],$e=ie[ue],Oe=_e.start+_e.count,Te=et($e.start,v.width,4),tt=et(_e.start,v.width,4);$e.start<=Oe+1&&Te===tt&&et($e.start+$e.count-1,v.width,4)===Te?_e.count=Math.max(_e.count,$e.start+$e.count-_e.start):(++Ue,ie[Ue]=$e)}ie.length=Ue+1;let xe=i.getParameter(i.UNPACK_ROW_LENGTH),Le=i.getParameter(i.UNPACK_SKIP_PIXELS),Fe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ue=0,_e=ie.length;ue<_e;ue++){let $e=ie[ue],Oe=Math.floor($e.start/4),Te=Math.ceil($e.count/4),tt=Oe%v.width,G=Math.floor(Oe/v.width),de=Te,Me=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),i.pixelStorei(i.UNPACK_SKIP_ROWS,G),t.texSubImage2D(i.TEXTURE_2D,0,tt,G,de,Me,J,se,v.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,xe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Le),i.pixelStorei(i.UNPACK_SKIP_ROWS,Fe)}}function Y(R,v,J){let se=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(se=i.TEXTURE_3D);let ce=He(R,v),ie=v.source;t.bindTexture(se,R.__webglTexture,i.TEXTURE0+J);let Ue=n.get(ie);if(ie.version!==Ue.__version||ce===!0){t.activeTexture(i.TEXTURE0+J);let xe=mt.getPrimaries(mt.workingColorSpace),Le=v.colorSpace===In?null:mt.getPrimaries(v.colorSpace),Fe=v.colorSpace===In||xe===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let ue=x(v.image,!1,r.maxTextureSize);ue=It(v,ue);let _e=s.convert(v.format,v.colorSpace),$e=s.convert(v.type),Oe=T(v.internalFormat,_e,$e,v.colorSpace,v.isVideoTexture);Ne(se,v);let Te,tt=v.mipmaps,G=v.isVideoTexture!==!0,de=Ue.__version===void 0||ce===!0,Me=ie.dataReady,Ie=I(v,ue);if(v.isDepthTexture)Oe=y(v.format===zr,v.type),de&&(G?t.texStorage2D(i.TEXTURE_2D,1,Oe,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Oe,ue.width,ue.height,0,_e,$e,null));else if(v.isDataTexture)if(tt.length>0){G&&de&&t.texStorage2D(i.TEXTURE_2D,Ie,Oe,tt[0].width,tt[0].height);for(let pe=0,oe=tt.length;pe<oe;pe++)Te=tt[pe],G?Me&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,Te.width,Te.height,_e,$e,Te.data):t.texImage2D(i.TEXTURE_2D,pe,Oe,Te.width,Te.height,0,_e,$e,Te.data);v.generateMipmaps=!1}else G?(de&&t.texStorage2D(i.TEXTURE_2D,Ie,Oe,ue.width,ue.height),Me&&Qe(v,ue,_e,$e)):t.texImage2D(i.TEXTURE_2D,0,Oe,ue.width,ue.height,0,_e,$e,ue.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){G&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Oe,tt[0].width,tt[0].height,ue.depth);for(let pe=0,oe=tt.length;pe<oe;pe++)if(Te=tt[pe],v.format!==_n)if(_e!==null)if(G){if(Me)if(v.layerUpdates.size>0){let ze=$l(Te.width,Te.height,v.format,v.type);for(let Ke of v.layerUpdates){let ut=Te.data.subarray(Ke*ze/Te.data.BYTES_PER_ELEMENT,(Ke+1)*ze/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,Ke,Te.width,Te.height,1,_e,ut)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,Te.width,Te.height,ue.depth,_e,Te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pe,Oe,Te.width,Te.height,ue.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,Te.width,Te.height,ue.depth,_e,$e,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,pe,Oe,Te.width,Te.height,ue.depth,0,_e,$e,Te.data)}else{G&&de&&t.texStorage2D(i.TEXTURE_2D,Ie,Oe,tt[0].width,tt[0].height);for(let pe=0,oe=tt.length;pe<oe;pe++)Te=tt[pe],v.format!==_n?_e!==null?G?Me&&t.compressedTexSubImage2D(i.TEXTURE_2D,pe,0,0,Te.width,Te.height,_e,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,pe,Oe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Me&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,Te.width,Te.height,_e,$e,Te.data):t.texImage2D(i.TEXTURE_2D,pe,Oe,Te.width,Te.height,0,_e,$e,Te.data)}else if(v.isDataArrayTexture)if(G){if(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Oe,ue.width,ue.height,ue.depth),Me)if(v.layerUpdates.size>0){let pe=$l(ue.width,ue.height,v.format,v.type);for(let oe of v.layerUpdates){let ze=ue.data.subarray(oe*pe/ue.data.BYTES_PER_ELEMENT,(oe+1)*pe/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,ue.width,ue.height,1,_e,$e,ze)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,_e,$e,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,ue.width,ue.height,ue.depth,0,_e,$e,ue.data);else if(v.isData3DTexture)G?(de&&t.texStorage3D(i.TEXTURE_3D,Ie,Oe,ue.width,ue.height,ue.depth),Me&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,_e,$e,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,ue.width,ue.height,ue.depth,0,_e,$e,ue.data);else if(v.isFramebufferTexture){if(de)if(G)t.texStorage2D(i.TEXTURE_2D,Ie,Oe,ue.width,ue.height);else{let pe=ue.width,oe=ue.height;for(let ze=0;ze<Ie;ze++)t.texImage2D(i.TEXTURE_2D,ze,Oe,pe,oe,0,_e,$e,null),pe>>=1,oe>>=1}}else if(tt.length>0){if(G&&de){let pe=pt(tt[0]);t.texStorage2D(i.TEXTURE_2D,Ie,Oe,pe.width,pe.height)}for(let pe=0,oe=tt.length;pe<oe;pe++)Te=tt[pe],G?Me&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,_e,$e,Te):t.texImage2D(i.TEXTURE_2D,pe,Oe,_e,$e,Te);v.generateMipmaps=!1}else if(G){if(de){let pe=pt(ue);t.texStorage2D(i.TEXTURE_2D,Ie,Oe,pe.width,pe.height)}Me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,$e,ue)}else t.texImage2D(i.TEXTURE_2D,0,Oe,_e,$e,ue);m(v)&&u(se),Ue.__version=ie.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function j(R,v,J){if(v.image.length!==6)return;let se=He(R,v),ce=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+J);let ie=n.get(ce);if(ce.version!==ie.__version||se===!0){t.activeTexture(i.TEXTURE0+J);let Ue=mt.getPrimaries(mt.workingColorSpace),xe=v.colorSpace===In?null:mt.getPrimaries(v.colorSpace),Le=v.colorSpace===In||Ue===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let Fe=v.isCompressedTexture||v.image[0].isCompressedTexture,ue=v.image[0]&&v.image[0].isDataTexture,_e=[];for(let oe=0;oe<6;oe++)!Fe&&!ue?_e[oe]=x(v.image[oe],!0,r.maxCubemapSize):_e[oe]=ue?v.image[oe].image:v.image[oe],_e[oe]=It(v,_e[oe]);let $e=_e[0],Oe=s.convert(v.format,v.colorSpace),Te=s.convert(v.type),tt=T(v.internalFormat,Oe,Te,v.colorSpace),G=v.isVideoTexture!==!0,de=ie.__version===void 0||se===!0,Me=ce.dataReady,Ie=I(v,$e);Ne(i.TEXTURE_CUBE_MAP,v);let pe;if(Fe){G&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,tt,$e.width,$e.height);for(let oe=0;oe<6;oe++){pe=_e[oe].mipmaps;for(let ze=0;ze<pe.length;ze++){let Ke=pe[ze];v.format!==_n?Oe!==null?G?Me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ze,0,0,Ke.width,Ke.height,Oe,Ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ze,tt,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ze,0,0,Ke.width,Ke.height,Oe,Te,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ze,tt,Ke.width,Ke.height,0,Oe,Te,Ke.data)}}}else{if(pe=v.mipmaps,G&&de){pe.length>0&&Ie++;let oe=pt(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,tt,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ue){G?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,_e[oe].width,_e[oe].height,Oe,Te,_e[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,tt,_e[oe].width,_e[oe].height,0,Oe,Te,_e[oe].data);for(let ze=0;ze<pe.length;ze++){let ut=pe[ze].image[oe].image;G?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ze+1,0,0,ut.width,ut.height,Oe,Te,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ze+1,tt,ut.width,ut.height,0,Oe,Te,ut.data)}}else{G?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Oe,Te,_e[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,tt,Oe,Te,_e[oe]);for(let ze=0;ze<pe.length;ze++){let Ke=pe[ze];G?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ze+1,0,0,Oe,Te,Ke.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ze+1,tt,Oe,Te,Ke.image[oe])}}}m(v)&&u(i.TEXTURE_CUBE_MAP),ie.__version=ce.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function ge(R,v,J,se,ce,ie){let Ue=s.convert(J.format,J.colorSpace),xe=s.convert(J.type),Le=T(J.internalFormat,Ue,xe,J.colorSpace),Fe=n.get(v),ue=n.get(J);if(ue.__renderTarget=v,!Fe.__hasExternalTextures){let _e=Math.max(1,v.width>>ie),$e=Math.max(1,v.height>>ie);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,ie,Le,_e,$e,v.depth,0,Ue,xe,null):t.texImage2D(ce,ie,Le,_e,$e,0,Ue,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),De(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ce,ue.__webglTexture,0,yt(v)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,ce,ue.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(R,v,J){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let se=v.depthTexture,ce=se&&se.isDepthTexture?se.type:null,ie=y(v.stencilBuffer,ce),Ue=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=yt(v);De(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,ie,v.width,v.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,ie,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ie,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ue,i.RENDERBUFFER,R)}else{let se=v.textures;for(let ce=0;ce<se.length;ce++){let ie=se[ce],Ue=s.convert(ie.format,ie.colorSpace),xe=s.convert(ie.type),Le=T(ie.internalFormat,Ue,xe,ie.colorSpace),Fe=yt(v);J&&De(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,Le,v.width,v.height):De(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe,Le,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Le,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let se=n.get(v.depthTexture);se.__renderTarget=v,(!se.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),z(v.depthTexture,0);let ce=se.__webglTexture,ie=yt(v);if(v.depthTexture.format===_r)De(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0);else if(v.depthTexture.format===zr)De(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function we(R){let v=n.get(R),J=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let se=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),se){let ce=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,se.removeEventListener("dispose",ce)};se.addEventListener("dispose",ce),v.__depthDisposeCallback=ce}v.__boundDepthTexture=se}if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");let se=R.texture.mipmaps;se&&se.length>0?Pe(v.__webglFramebuffer[0],R):Pe(v.__webglFramebuffer,R)}else if(J){v.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[se]),v.__webglDepthbuffer[se]===void 0)v.__webglDepthbuffer[se]=i.createRenderbuffer(),ke(v.__webglDepthbuffer[se],R,!1);else{let ce=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=v.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,ie)}}else{let se=R.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ke(v.__webglDepthbuffer,R,!1);else{let ce=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(R,v,J){let se=n.get(R);v!==void 0&&ge(se.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&we(R)}function O(R){let v=R.texture,J=n.get(R),se=n.get(v);R.addEventListener("dispose",F);let ce=R.textures,ie=R.isWebGLCubeRenderTarget===!0,Ue=ce.length>1;if(Ue||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=v.version,a.memory.textures++),ie){J.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(v.mipmaps&&v.mipmaps.length>0){J.__webglFramebuffer[xe]=[];for(let Le=0;Le<v.mipmaps.length;Le++)J.__webglFramebuffer[xe][Le]=i.createFramebuffer()}else J.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){J.__webglFramebuffer=[];for(let xe=0;xe<v.mipmaps.length;xe++)J.__webglFramebuffer[xe]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Ue)for(let xe=0,Le=ce.length;xe<Le;xe++){let Fe=n.get(ce[xe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&De(R)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let xe=0;xe<ce.length;xe++){let Le=ce[xe];J.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[xe]);let Fe=s.convert(Le.format,Le.colorSpace),ue=s.convert(Le.type),_e=T(Le.internalFormat,Fe,ue,Le.colorSpace,R.isXRRenderTarget===!0),$e=yt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,_e,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,J.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),ke(J.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,v);for(let xe=0;xe<6;xe++)if(v.mipmaps&&v.mipmaps.length>0)for(let Le=0;Le<v.mipmaps.length;Le++)ge(J.__webglFramebuffer[xe][Le],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Le);else ge(J.__webglFramebuffer[xe],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(v)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let xe=0,Le=ce.length;xe<Le;xe++){let Fe=ce[xe],ue=n.get(Fe),_e=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_e=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,ue.__webglTexture),Ne(_e,Fe),ge(J.__webglFramebuffer,R,Fe,i.COLOR_ATTACHMENT0+xe,_e,0),m(Fe)&&u(_e)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,se.__webglTexture),Ne(xe,v),v.mipmaps&&v.mipmaps.length>0)for(let Le=0;Le<v.mipmaps.length;Le++)ge(J.__webglFramebuffer[Le],R,v,i.COLOR_ATTACHMENT0,xe,Le);else ge(J.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,xe,0);m(v)&&u(xe),t.unbindTexture()}R.depthBuffer&&we(R)}function ft(R){let v=R.textures;for(let J=0,se=v.length;J<se;J++){let ce=v[J];if(m(ce)){let ie=_(R),Ue=n.get(ce).__webglTexture;t.bindTexture(ie,Ue),u(ie),t.unbindTexture()}}}let Je=[],Ye=[];function Ce(R){if(R.samples>0){if(De(R)===!1){let v=R.textures,J=R.width,se=R.height,ce=i.COLOR_BUFFER_BIT,ie=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=n.get(R),xe=v.length>1;if(xe)for(let Fe=0;Fe<v.length;Fe++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);let Le=R.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Fe=0;Fe<v.length;Fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),xe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Fe]);let ue=n.get(v[Fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,J,se,0,0,J,se,ce,i.NEAREST),c===!0&&(Je.length=0,Ye.length=0,Je.push(i.COLOR_ATTACHMENT0+Fe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Je.push(ie),Ye.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ye)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let Fe=0;Fe<v.length;Fe++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Fe]);let ue=n.get(v[Fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function yt(R){return Math.min(r.maxSamples,R.samples)}function De(R){let v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ve(R){let v=a.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function It(R,v){let J=R.colorSpace,se=R.format,ce=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||J!==Ri&&J!==In&&(mt.getTransfer(J)===wt?(se!==_n||ce!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),v}function pt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=U,this.setTexture2D=z,this.setTexture2DArray=B,this.setTexture3D=$,this.setTextureCube=X,this.rebindTextures=lt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=De}function m0(i,e){function t(n,r=In){let s,a=mt.getTransfer(r);if(n===Cn)return i.UNSIGNED_BYTE;if(n===$a)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ol)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nl)return i.BYTE;if(n===Fl)return i.SHORT;if(n===Ur)return i.UNSIGNED_SHORT;if(n===Ja)return i.INT;if(n===_i)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===Nr)return i.HALF_FLOAT;if(n===Bl)return i.ALPHA;if(n===kl)return i.RGB;if(n===_n)return i.RGBA;if(n===_r)return i.DEPTH_COMPONENT;if(n===zr)return i.DEPTH_STENCIL;if(n===ja)return i.RED;if(n===Qa)return i.RED_INTEGER;if(n===Vl)return i.RG;if(n===eo)return i.RG_INTEGER;if(n===to)return i.RGBA_INTEGER;if(n===Rs||n===Is||n===Ps||n===Ds)if(a===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Rs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Rs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Is)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ps)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ds)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===no||n===io||n===ro||n===so)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===no)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===io)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ro)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===so)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ao||n===oo||n===lo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ao||n===oo)return a===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===lo)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===xo||n===_o||n===yo||n===vo||n===Mo||n===bo||n===So)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===co)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ho)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uo)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fo)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===po)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mo)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===go)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xo)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_o)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yo)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vo)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mo)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bo)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===So)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wo||n===To||n===Eo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===wo)return a===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===To)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ao||n===Co||n===Ro||n===Io)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ao)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Co)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ro)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Io)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var g0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x0=`
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

}`,cc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ms(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ln({vertexShader:g0,fragmentShader:x0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hc=class extends Kn{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,p=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new cc,u={},_=t.getContextAttributes(),T=null,y=null,I=[],C=[],F=new Xe,N=null,b=new Ot;b.viewport=new gt;let M=new Ot;M.viewport=new gt;let E=[b,M],U=new Oa,k=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=I[Y];return j===void 0&&(j=new Tr,I[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=I[Y];return j===void 0&&(j=new Tr,I[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=I[Y];return j===void 0&&(j=new Tr,I[Y]=j),j.getHandSpace()};function z(Y){let j=C.indexOf(Y.inputSource);if(j===-1)return;let ge=I[j];ge!==void 0&&(ge.update(Y.inputSource,Y.frame,l||a),ge.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",$);for(let Y=0;Y<I.length;Y++){let j=C[Y];j!==null&&(C[Y]=null,I[Y].disconnect(j))}k=null,L=null,m.reset();for(let Y in u)delete u[Y];e.setRenderTarget(T),f=null,p=null,d=null,r=null,y=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",B),r.addEventListener("inputsourceschange",$),_.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(F),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,ke=null,Pe=null;_.depth&&(Pe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=_.stencil?zr:_r,ke=_.stencil?Fr:_i);let we={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};d=this.getBinding(),p=d.createProjectionLayer(we),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new Ln(p.textureWidth,p.textureHeight,{format:_n,type:Cn,depthTexture:new vs(p.textureWidth,p.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let ge={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ln(f.framebufferWidth,f.framebufferHeight,{format:_n,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Qe.setContext(r),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(Y){for(let j=0;j<Y.removed.length;j++){let ge=Y.removed[j],ke=C.indexOf(ge);ke>=0&&(C[ke]=null,I[ke].disconnect(ge))}for(let j=0;j<Y.added.length;j++){let ge=Y.added[j],ke=C.indexOf(ge);if(ke===-1){for(let we=0;we<I.length;we++)if(we>=C.length){C.push(ge),ke=we;break}else if(C[we]===null){C[we]=ge,ke=we;break}if(ke===-1)break}let Pe=I[ke];Pe&&Pe.connect(ge)}}let X=new V,le=new V;function ae(Y,j,ge){X.setFromMatrixPosition(j.matrixWorld),le.setFromMatrixPosition(ge.matrixWorld);let ke=X.distanceTo(le),Pe=j.projectionMatrix.elements,we=ge.projectionMatrix.elements,lt=Pe[14]/(Pe[10]-1),O=Pe[14]/(Pe[10]+1),ft=(Pe[9]+1)/Pe[5],Je=(Pe[9]-1)/Pe[5],Ye=(Pe[8]-1)/Pe[0],Ce=(we[8]+1)/we[0],yt=lt*Ye,De=lt*Ce,Ve=ke/(-Ye+Ce),It=Ve*-Ye;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(It),Y.translateZ(Ve),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Pe[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let pt=lt+Ve,R=O+Ve,v=yt-It,J=De+(ke-It),se=ft*O/R*pt,ce=Je*O/R*pt;Y.projectionMatrix.makePerspective(v,J,se,ce,pt,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Ee(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let j=Y.near,ge=Y.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),U.near=M.near=b.near=j,U.far=M.far=b.far=ge,(k!==U.near||L!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),k=U.near,L=U.far),U.layers.mask=Y.layers.mask|6,b.layers.mask=U.layers.mask&3,M.layers.mask=U.layers.mask&5;let ke=Y.parent,Pe=U.cameras;Ee(U,ke);for(let we=0;we<Pe.length;we++)Ee(Pe[we],ke);Pe.length===2?ae(U,b,M):U.projectionMatrix.copy(b.projectionMatrix),Ne(Y,U,ke)};function Ne(Y,j,ge){ge===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(ge.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=yr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(Y){c=Y,p!==null&&(p.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Y){return u[Y]};let He=null;function et(Y,j){if(h=j.getViewerPose(l||a),g=j,h!==null){let ge=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ke=!1;ge.length!==U.cameras.length&&(U.cameras.length=0,ke=!0);for(let O=0;O<ge.length;O++){let ft=ge[O],Je=null;if(f!==null)Je=f.getViewport(ft);else{let Ce=d.getViewSubImage(p,ft);Je=Ce.viewport,O===0&&(e.setRenderTargetTextures(y,Ce.colorTexture,Ce.depthStencilTexture),e.setRenderTarget(y))}let Ye=E[O];Ye===void 0&&(Ye=new Ot,Ye.layers.enable(O),Ye.viewport=new gt,E[O]=Ye),Ye.matrix.fromArray(ft.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(ft.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(Je.x,Je.y,Je.width,Je.height),O===0&&(U.matrix.copy(Ye.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ke===!0&&U.cameras.push(Ye)}let Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let O=d.getDepthInformation(ge[0]);O&&O.isValid&&O.texture&&m.init(O,r.renderState)}if(Pe&&Pe.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let O=0;O<ge.length;O++){let ft=ge[O].camera;if(ft){let Je=u[ft];Je||(Je=new Ms,u[ft]=Je);let Ye=d.getCameraImage(ft);Je.sourceTexture=Ye}}}}for(let ge=0;ge<I.length;ge++){let ke=C[ge],Pe=I[ge];ke!==null&&Pe!==void 0&&Pe.update(ke,j,l||a)}He&&He(Y,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let Qe=new hu;Qe.setAnimationLoop(et),this.setAnimationLoop=function(Y){He=Y},this.dispose=function(){}}},Wi=new En,_0=new vt;function y0(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Yl(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,_,T,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),p(m,u),u.isMeshPhysicalMaterial&&f(m,u,y)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?c(m,u,_,T):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Yt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Yt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let _=e.get(u),T=_.envMap,y=_.envMapRotation;T&&(m.envMap.value=T,Wi.copy(y),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),m.envMapRotation.value.setFromMatrix4(_0.makeRotationFromEuler(Wi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,_,T){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=T*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Yt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let _=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function v0(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,T){let y=T.program;n.uniformBlockBinding(_,y)}function l(_,T){let y=r[_.id];y===void 0&&(g(_),y=h(_),r[_.id]=y,_.addEventListener("dispose",m));let I=T.program;n.updateUBOMapping(_,I);let C=e.render.frame;s[_.id]!==C&&(p(_),s[_.id]=C)}function h(_){let T=d();_.__bindingPointIndex=T;let y=i.createBuffer(),I=_.__size,C=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,I,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,y),y}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){let T=r[_.id],y=_.uniforms,I=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let C=0,F=y.length;C<F;C++){let N=Array.isArray(y[C])?y[C]:[y[C]];for(let b=0,M=N.length;b<M;b++){let E=N[b];if(f(E,C,b,I)===!0){let U=E.__offset,k=Array.isArray(E.value)?E.value:[E.value],L=0;for(let z=0;z<k.length;z++){let B=k[z],$=x(B);typeof B=="number"||typeof B=="boolean"?(E.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,U+L,E.__data)):B.isMatrix3?(E.__data[0]=B.elements[0],E.__data[1]=B.elements[1],E.__data[2]=B.elements[2],E.__data[3]=0,E.__data[4]=B.elements[3],E.__data[5]=B.elements[4],E.__data[6]=B.elements[5],E.__data[7]=0,E.__data[8]=B.elements[6],E.__data[9]=B.elements[7],E.__data[10]=B.elements[8],E.__data[11]=0):(B.toArray(E.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,T,y,I){let C=_.value,F=T+"_"+y;if(I[F]===void 0)return typeof C=="number"||typeof C=="boolean"?I[F]=C:I[F]=C.clone(),!0;{let N=I[F];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return I[F]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function g(_){let T=_.uniforms,y=0,I=16;for(let F=0,N=T.length;F<N;F++){let b=Array.isArray(T[F])?T[F]:[T[F]];for(let M=0,E=b.length;M<E;M++){let U=b[M],k=Array.isArray(U.value)?U.value:[U.value];for(let L=0,z=k.length;L<z;L++){let B=k[L],$=x(B),X=y%I,le=X%$.boundary,ae=X+le;y+=le,ae!==0&&I-ae<$.storage&&(y+=I-ae),U.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=$.storage}}}let C=y%I;return C>0&&(y+=I-C),_.__size=y,_.__cache={},this}function x(_){let T={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(T.boundary=4,T.storage=4):_.isVector2?(T.boundary=8,T.storage=8):_.isVector3||_.isColor?(T.boundary=16,T.storage=12):_.isVector4?(T.boundary=16,T.storage=16):_.isMatrix3?(T.boundary=48,T.storage=48):_.isMatrix4?(T.boundary=64,T.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),T}function m(_){let T=_.target;T.removeEventListener("dispose",m);let y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function u(){for(let _ in r)i.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:c,update:l,dispose:u}}var Vr=class{constructor(e={}){let{canvas:t=Fh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,u=null,_=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,I=!1;this._outputColorSpace=Lt;let C=0,F=0,N=null,b=-1,M=null,E=new gt,U=new gt,k=null,L=new je(0),z=0,B=t.width,$=t.height,X=1,le=null,ae=null,Ee=new gt(0,0,B,$),Ne=new gt(0,0,B,$),He=!1,et=new Rr,Qe=!1,Y=!1,j=new vt,ge=new V,ke=new gt,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},we=!1;function lt(){return N===null?X:1}let O=n;function ft(S,H){return t.getContext(S,H)}try{let S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",pe,!1),O===null){let H="webgl2";if(O=ft(H,S),O===null)throw ft(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Je,Ye,Ce,yt,De,Ve,It,pt,R,v,J,se,ce,ie,Ue,xe,Le,Fe,ue,_e,$e,Oe,Te,tt;function G(){Je=new Om(O),Je.init(),Oe=new m0(O,Je),Ye=new Pm(O,Je,e,Oe),Ce=new f0(O,Je),Ye.reversedDepthBuffer&&p&&Ce.buffers.depth.setReversed(!0),yt=new Vm(O),De=new e0,Ve=new p0(O,Je,Ce,De,Ye,Oe,yt),It=new Lm(y),pt=new zm(y),R=new qd(O),Te=new Rm(O,R),v=new Bm(O,R,yt,Te),J=new Hm(O,v,R,yt),ue=new Gm(O,Ye,Ve),xe=new Dm(De),se=new Qg(y,It,pt,Je,Ye,Te,xe),ce=new y0(y,De),ie=new n0,Ue=new l0(Je),Fe=new Cm(y,It,pt,Ce,J,f,c),Le=new u0(y,J,Ye),tt=new v0(O,yt,Ye,Ce),_e=new Im(O,Je,yt),$e=new km(O,Je,yt),yt.programs=se.programs,y.capabilities=Ye,y.extensions=Je,y.properties=De,y.renderLists=ie,y.shadowMap=Le,y.state=Ce,y.info=yt}G();let de=new hc(y,O);this.xr=de,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let S=Je.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Je.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize(B,$,!1))},this.getSize=function(S){return S.set(B,$)},this.setSize=function(S,H,ee=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=S,$=H,t.width=Math.floor(S*X),t.height=Math.floor(H*X),ee===!0&&(t.style.width=S+"px",t.style.height=H+"px"),this.setViewport(0,0,S,H)},this.getDrawingBufferSize=function(S){return S.set(B*X,$*X).floor()},this.setDrawingBufferSize=function(S,H,ee){B=S,$=H,X=ee,t.width=Math.floor(S*ee),t.height=Math.floor(H*ee),this.setViewport(0,0,S,H)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy(Ee)},this.setViewport=function(S,H,ee,te){S.isVector4?Ee.set(S.x,S.y,S.z,S.w):Ee.set(S,H,ee,te),Ce.viewport(E.copy(Ee).multiplyScalar(X).round())},this.getScissor=function(S){return S.copy(Ne)},this.setScissor=function(S,H,ee,te){S.isVector4?Ne.set(S.x,S.y,S.z,S.w):Ne.set(S,H,ee,te),Ce.scissor(U.copy(Ne).multiplyScalar(X).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(S){Ce.setScissorTest(He=S)},this.setOpaqueSort=function(S){le=S},this.setTransparentSort=function(S){ae=S},this.getClearColor=function(S){return S.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(S=!0,H=!0,ee=!0){let te=0;if(S){let q=!1;if(N!==null){let me=N.texture.format;q=me===to||me===eo||me===Qa}if(q){let me=N.texture.type,A=me===Cn||me===_i||me===Ur||me===Fr||me===$a||me===Ka,P=Fe.getClearColor(),W=Fe.getClearAlpha(),Q=P.r,w=P.g,D=P.b;A?(g[0]=Q,g[1]=w,g[2]=D,g[3]=W,O.clearBufferuiv(O.COLOR,0,g)):(x[0]=Q,x[1]=w,x[2]=D,x[3]=W,O.clearBufferiv(O.COLOR,0,x))}else te|=O.COLOR_BUFFER_BIT}H&&(te|=O.DEPTH_BUFFER_BIT),ee&&(te|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Fe.dispose(),ie.dispose(),Ue.dispose(),De.dispose(),It.dispose(),pt.dispose(),J.dispose(),Te.dispose(),tt.dispose(),se.dispose(),de.dispose(),de.removeEventListener("sessionstart",Dt),de.removeEventListener("sessionend",Nt),Zt.stop()};function Me(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let S=yt.autoReset,H=Le.enabled,ee=Le.autoUpdate,te=Le.needsUpdate,q=Le.type;G(),yt.autoReset=S,Le.enabled=H,Le.autoUpdate=ee,Le.needsUpdate=te,Le.type=q}function pe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function oe(S){let H=S.target;H.removeEventListener("dispose",oe),ze(H)}function ze(S){Ke(S),De.remove(S)}function Ke(S){let H=De.get(S).programs;H!==void 0&&(H.forEach(function(ee){se.releaseProgram(ee)}),S.isShaderMaterial&&se.releaseShaderCache(S))}this.renderBufferDirect=function(S,H,ee,te,q,me){H===null&&(H=Pe);let A=q.isMesh&&q.matrixWorld.determinant()<0,P=mn(S,H,ee,te,q);Ce.setMaterial(te,A);let W=ee.index,Q=1;if(te.wireframe===!0){if(W=v.getWireframeAttribute(ee),W===void 0)return;Q=2}let w=ee.drawRange,D=ee.attributes.position,K=w.start*Q,Z=(w.start+w.count)*Q;me!==null&&(K=Math.max(K,me.start*Q),Z=Math.min(Z,(me.start+me.count)*Q)),W!==null?(K=Math.max(K,0),Z=Math.min(Z,W.count)):D!=null&&(K=Math.max(K,0),Z=Math.min(Z,D.count));let re=Z-K;if(re<0||re===1/0)return;Te.setup(q,te,P,ee,W);let he,fe=_e;if(W!==null&&(he=R.get(W),fe=$e,fe.setIndex(he)),q.isMesh)te.wireframe===!0?(Ce.setLineWidth(te.wireframeLinewidth*lt()),fe.setMode(O.LINES)):fe.setMode(O.TRIANGLES);else if(q.isLine){let ne=te.linewidth;ne===void 0&&(ne=1),Ce.setLineWidth(ne*lt()),q.isLineSegments?fe.setMode(O.LINES):q.isLineLoop?fe.setMode(O.LINE_LOOP):fe.setMode(O.LINE_STRIP)}else q.isPoints?fe.setMode(O.POINTS):q.isSprite&&fe.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Mr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))fe.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let ne=q._multiDrawStarts,ye=q._multiDrawCounts,Se=q._multiDrawCount,We=W?R.get(W).bytesPerElement:1,Ge=De.get(te).currentProgram.getUniforms();for(let Ze=0;Ze<Se;Ze++)Ge.setValue(O,"_gl_DrawID",Ze),fe.render(ne[Ze]/We,ye[Ze])}else if(q.isInstancedMesh)fe.renderInstances(K,re,q.count);else if(ee.isInstancedBufferGeometry){let ne=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,ye=Math.min(ee.instanceCount,ne);fe.renderInstances(K,re,ye)}else fe.render(K,re)};function ut(S,H,ee){S.transparent===!0&&S.side===Rt&&S.forceSinglePass===!1?(S.side=Yt,S.needsUpdate=!0,yn(S,H,ee),S.side=$n,S.needsUpdate=!0,yn(S,H,ee),S.side=Rt):yn(S,H,ee)}this.compile=function(S,H,ee=null){ee===null&&(ee=S),u=Ue.get(ee),u.init(H),T.push(u),ee.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(u.pushLight(q),q.castShadow&&u.pushShadow(q))}),S!==ee&&S.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(u.pushLight(q),q.castShadow&&u.pushShadow(q))}),u.setupLights();let te=new Set;return S.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let me=q.material;if(me)if(Array.isArray(me))for(let A=0;A<me.length;A++){let P=me[A];ut(P,ee,q),te.add(P)}else ut(me,ee,q),te.add(me)}),u=T.pop(),te},this.compileAsync=function(S,H,ee=null){let te=this.compile(S,H,ee);return new Promise(q=>{function me(){if(te.forEach(function(A){De.get(A).currentProgram.isReady()&&te.delete(A)}),te.size===0){q(S);return}setTimeout(me,10)}Je.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let at=null;function Xt(S){at&&at(S)}function Dt(){Zt.stop()}function Nt(){Zt.start()}let Zt=new hu;Zt.setAnimationLoop(Xt),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(S){at=S,de.setAnimationLoop(S),S===null?Zt.stop():Zt.start()},de.addEventListener("sessionstart",Dt),de.addEventListener("sessionend",Nt),this.render=function(S,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(H),H=de.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,H,N),u=Ue.get(S,T.length),u.init(H),T.push(u),j.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),et.setFromProjectionMatrix(j,wn,H.reversedDepth),Y=this.localClippingEnabled,Qe=xe.init(this.clippingPlanes,Y),m=ie.get(S,_.length),m.init(),_.push(m),de.enabled===!0&&de.isPresenting===!0){let me=y.xr.getDepthSensingMesh();me!==null&&nn(me,H,-1/0,y.sortObjects)}nn(S,H,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(le,ae),we=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,we&&Fe.addToRenderList(m,S),this.info.render.frame++,Qe===!0&&xe.beginShadows();let ee=u.state.shadowsArray;Le.render(ee,S,H),Qe===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();let te=m.opaque,q=m.transmissive;if(u.setupLights(),H.isArrayCamera){let me=H.cameras;if(q.length>0)for(let A=0,P=me.length;A<P;A++){let W=me[A];Ct(te,q,S,W)}we&&Fe.render(S);for(let A=0,P=me.length;A<P;A++){let W=me[A];zt(m,S,W,W.viewport)}}else q.length>0&&Ct(te,q,S,H),we&&Fe.render(S),zt(m,S,H);N!==null&&F===0&&(Ve.updateMultisampleRenderTarget(N),Ve.updateRenderTargetMipmap(N)),S.isScene===!0&&S.onAfterRender(y,S,H),Te.resetDefaultState(),b=-1,M=null,T.pop(),T.length>0?(u=T[T.length-1],Qe===!0&&xe.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function nn(S,H,ee,te){if(S.visible===!1)return;if(S.layers.test(H.layers)){if(S.isGroup)ee=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(H);else if(S.isLight)u.pushLight(S),S.castShadow&&u.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||et.intersectsSprite(S)){te&&ke.setFromMatrixPosition(S.matrixWorld).applyMatrix4(j);let A=J.update(S),P=S.material;P.visible&&m.push(S,A,P,ee,ke.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||et.intersectsObject(S))){let A=J.update(S),P=S.material;if(te&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ke.copy(S.boundingSphere.center)):(A.boundingSphere===null&&A.computeBoundingSphere(),ke.copy(A.boundingSphere.center)),ke.applyMatrix4(S.matrixWorld).applyMatrix4(j)),Array.isArray(P)){let W=A.groups;for(let Q=0,w=W.length;Q<w;Q++){let D=W[Q],K=P[D.materialIndex];K&&K.visible&&m.push(S,A,K,ee,ke.z,D)}}else P.visible&&m.push(S,A,P,ee,ke.z,null)}}let me=S.children;for(let A=0,P=me.length;A<P;A++)nn(me[A],H,ee,te)}function zt(S,H,ee,te){let q=S.opaque,me=S.transmissive,A=S.transparent;u.setupLightsView(ee),Qe===!0&&xe.setGlobalState(y.clippingPlanes,ee),te&&Ce.viewport(E.copy(te)),q.length>0&&pn(q,H,ee),me.length>0&&pn(me,H,ee),A.length>0&&pn(A,H,ee),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Ct(S,H,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[te.id]===void 0&&(u.state.transmissionRenderTarget[te.id]=new Ln(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?Nr:Cn,minFilter:xi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));let me=u.state.transmissionRenderTarget[te.id],A=te.viewport||E;me.setSize(A.z*y.transmissionResolutionScale,A.w*y.transmissionResolutionScale);let P=y.getRenderTarget(),W=y.getActiveCubeFace(),Q=y.getActiveMipmapLevel();y.setRenderTarget(me),y.getClearColor(L),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),y.clear(),we&&Fe.render(ee);let w=y.toneMapping;y.toneMapping=ni;let D=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),u.setupLightsView(te),Qe===!0&&xe.setGlobalState(y.clippingPlanes,te),pn(S,ee,te),Ve.updateMultisampleRenderTarget(me),Ve.updateRenderTargetMipmap(me),Je.has("WEBGL_multisampled_render_to_texture")===!1){let K=!1;for(let Z=0,re=H.length;Z<re;Z++){let he=H[Z],fe=he.object,ne=he.geometry,ye=he.material,Se=he.group;if(ye.side===Rt&&fe.layers.test(te.layers)){let We=ye.side;ye.side=Yt,ye.needsUpdate=!0,Jt(fe,ee,te,ne,ye,Se),ye.side=We,ye.needsUpdate=!0,K=!0}}K===!0&&(Ve.updateMultisampleRenderTarget(me),Ve.updateRenderTargetMipmap(me))}y.setRenderTarget(P,W,Q),y.setClearColor(L,z),D!==void 0&&(te.viewport=D),y.toneMapping=w}function pn(S,H,ee){let te=H.isScene===!0?H.overrideMaterial:null;for(let q=0,me=S.length;q<me;q++){let A=S[q],P=A.object,W=A.geometry,Q=A.group,w=A.material;w.allowOverride===!0&&te!==null&&(w=te),P.layers.test(ee.layers)&&Jt(P,H,ee,W,w,Q)}}function Jt(S,H,ee,te,q,me){S.onBeforeRender(y,H,ee,te,q,me),S.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),q.onBeforeRender(y,H,ee,te,S,me),q.transparent===!0&&q.side===Rt&&q.forceSinglePass===!1?(q.side=Yt,q.needsUpdate=!0,y.renderBufferDirect(ee,H,te,q,S,me),q.side=$n,q.needsUpdate=!0,y.renderBufferDirect(ee,H,te,q,S,me),q.side=Rt):y.renderBufferDirect(ee,H,te,q,S,me),S.onAfterRender(y,H,ee,te,q,me)}function yn(S,H,ee){H.isScene!==!0&&(H=Pe);let te=De.get(S),q=u.state.lights,me=u.state.shadowsArray,A=q.state.version,P=se.getParameters(S,q.state,me,H,ee),W=se.getProgramCacheKey(P),Q=te.programs;te.environment=S.isMeshStandardMaterial?H.environment:null,te.fog=H.fog,te.envMap=(S.isMeshStandardMaterial?pt:It).get(S.envMap||te.environment),te.envMapRotation=te.environment!==null&&S.envMap===null?H.environmentRotation:S.envMapRotation,Q===void 0&&(S.addEventListener("dispose",oe),Q=new Map,te.programs=Q);let w=Q.get(W);if(w!==void 0){if(te.currentProgram===w&&te.lightsStateVersion===A)return ri(S,P),w}else P.uniforms=se.getUniforms(S),S.onBeforeCompile(P,y),w=se.acquireProgram(P,W),Q.set(W,w),te.uniforms=P.uniforms;let D=te.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(D.clippingPlanes=xe.uniform),ri(S,P),te.needsLights=kn(S),te.lightsStateVersion=A,te.needsLights&&(D.ambientLightColor.value=q.state.ambient,D.lightProbe.value=q.state.probe,D.directionalLights.value=q.state.directional,D.directionalLightShadows.value=q.state.directionalShadow,D.spotLights.value=q.state.spot,D.spotLightShadows.value=q.state.spotShadow,D.rectAreaLights.value=q.state.rectArea,D.ltc_1.value=q.state.rectAreaLTC1,D.ltc_2.value=q.state.rectAreaLTC2,D.pointLights.value=q.state.point,D.pointLightShadows.value=q.state.pointShadow,D.hemisphereLights.value=q.state.hemi,D.directionalShadowMap.value=q.state.directionalShadowMap,D.directionalShadowMatrix.value=q.state.directionalShadowMatrix,D.spotShadowMap.value=q.state.spotShadowMap,D.spotLightMatrix.value=q.state.spotLightMatrix,D.spotLightMap.value=q.state.spotLightMap,D.pointShadowMap.value=q.state.pointShadowMap,D.pointShadowMatrix.value=q.state.pointShadowMatrix),te.currentProgram=w,te.uniformsList=null,w}function Bn(S){if(S.uniformsList===null){let H=S.currentProgram.getUniforms();S.uniformsList=kr.seqWithValue(H.seq,S.uniforms)}return S.uniformsList}function ri(S,H){let ee=De.get(S);ee.outputColorSpace=H.outputColorSpace,ee.batching=H.batching,ee.batchingColor=H.batchingColor,ee.instancing=H.instancing,ee.instancingColor=H.instancingColor,ee.instancingMorph=H.instancingMorph,ee.skinning=H.skinning,ee.morphTargets=H.morphTargets,ee.morphNormals=H.morphNormals,ee.morphColors=H.morphColors,ee.morphTargetsCount=H.morphTargetsCount,ee.numClippingPlanes=H.numClippingPlanes,ee.numIntersection=H.numClipIntersection,ee.vertexAlphas=H.vertexAlphas,ee.vertexTangents=H.vertexTangents,ee.toneMapping=H.toneMapping}function mn(S,H,ee,te,q){H.isScene!==!0&&(H=Pe),Ve.resetTextureUnits();let me=H.fog,A=te.isMeshStandardMaterial?H.environment:null,P=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ri,W=(te.isMeshStandardMaterial?pt:It).get(te.envMap||A),Q=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,w=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),D=!!ee.morphAttributes.position,K=!!ee.morphAttributes.normal,Z=!!ee.morphAttributes.color,re=ni;te.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(re=y.toneMapping);let he=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,fe=he!==void 0?he.length:0,ne=De.get(te),ye=u.state.lights;if(Qe===!0&&(Y===!0||S!==M)){let Pt=S===M&&te.id===b;xe.setState(te,S,Pt)}let Se=!1;te.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==ye.state.version||ne.outputColorSpace!==P||q.isBatchedMesh&&ne.batching===!1||!q.isBatchedMesh&&ne.batching===!0||q.isBatchedMesh&&ne.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&ne.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&ne.instancing===!1||!q.isInstancedMesh&&ne.instancing===!0||q.isSkinnedMesh&&ne.skinning===!1||!q.isSkinnedMesh&&ne.skinning===!0||q.isInstancedMesh&&ne.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&ne.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&ne.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&ne.instancingMorph===!1&&q.morphTexture!==null||ne.envMap!==W||te.fog===!0&&ne.fog!==me||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==xe.numPlanes||ne.numIntersection!==xe.numIntersection)||ne.vertexAlphas!==Q||ne.vertexTangents!==w||ne.morphTargets!==D||ne.morphNormals!==K||ne.morphColors!==Z||ne.toneMapping!==re||ne.morphTargetsCount!==fe)&&(Se=!0):(Se=!0,ne.__version=te.version);let We=ne.currentProgram;Se===!0&&(We=yn(te,H,q));let Ge=!1,Ze=!1,Ae=!1,ve=We.getUniforms(),qe=ne.uniforms;if(Ce.useProgram(We.program)&&(Ge=!0,Ze=!0,Ae=!0),te.id!==b&&(b=te.id,Ze=!0),Ge||M!==S){Ce.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ve.setValue(O,"projectionMatrix",S.projectionMatrix),ve.setValue(O,"viewMatrix",S.matrixWorldInverse);let Gt=ve.map.cameraPosition;Gt!==void 0&&Gt.setValue(O,ge.setFromMatrixPosition(S.matrixWorld)),Ye.logarithmicDepthBuffer&&ve.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&ve.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Ze=!0,Ae=!0)}if(q.isSkinnedMesh){ve.setOptional(O,q,"bindMatrix"),ve.setOptional(O,q,"bindMatrixInverse");let Pt=q.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ve.setValue(O,"boneTexture",Pt.boneTexture,Ve))}q.isBatchedMesh&&(ve.setOptional(O,q,"batchingTexture"),ve.setValue(O,"batchingTexture",q._matricesTexture,Ve),ve.setOptional(O,q,"batchingIdTexture"),ve.setValue(O,"batchingIdTexture",q._indirectTexture,Ve),ve.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&ve.setValue(O,"batchingColorTexture",q._colorsTexture,Ve));let bt=ee.morphAttributes;if((bt.position!==void 0||bt.normal!==void 0||bt.color!==void 0)&&ue.update(q,ee,We),(Ze||ne.receiveShadow!==q.receiveShadow)&&(ne.receiveShadow=q.receiveShadow,ve.setValue(O,"receiveShadow",q.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(qe.envMap.value=W,qe.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&H.environment!==null&&(qe.envMapIntensity.value=H.environmentIntensity),Ze&&(ve.setValue(O,"toneMappingExposure",y.toneMappingExposure),ne.needsLights&&gn(qe,Ae),me&&te.fog===!0&&ce.refreshFogUniforms(qe,me),ce.refreshMaterialUniforms(qe,te,X,$,u.state.transmissionRenderTarget[S.id]),kr.upload(O,Bn(ne),qe,Ve)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(kr.upload(O,Bn(ne),qe,Ve),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&ve.setValue(O,"center",q.center),ve.setValue(O,"modelViewMatrix",q.modelViewMatrix),ve.setValue(O,"normalMatrix",q.normalMatrix),ve.setValue(O,"modelMatrix",q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let Pt=te.uniformsGroups;for(let Gt=0,$r=Pt.length;Gt<$r;Gt++){let Vn=Pt[Gt];tt.update(Vn,We),tt.bind(Vn,We)}}return We}function gn(S,H){S.ambientLightColor.needsUpdate=H,S.lightProbe.needsUpdate=H,S.directionalLights.needsUpdate=H,S.directionalLightShadows.needsUpdate=H,S.pointLights.needsUpdate=H,S.pointLightShadows.needsUpdate=H,S.spotLights.needsUpdate=H,S.spotLightShadows.needsUpdate=H,S.rectAreaLights.needsUpdate=H,S.hemisphereLights.needsUpdate=H}function kn(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(S,H,ee){let te=De.get(S);te.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),De.get(S.texture).__webglTexture=H,De.get(S.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ee,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,H){let ee=De.get(S);ee.__webglFramebuffer=H,ee.__useDefaultFramebuffer=H===void 0};let sn=O.createFramebuffer();this.setRenderTarget=function(S,H=0,ee=0){N=S,C=H,F=ee;let te=!0,q=null,me=!1,A=!1;if(S){let W=De.get(S);if(W.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(O.FRAMEBUFFER,null),te=!1;else if(W.__webglFramebuffer===void 0)Ve.setupRenderTarget(S);else if(W.__hasExternalTextures)Ve.rebindTextures(S,De.get(S.texture).__webglTexture,De.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let D=S.depthTexture;if(W.__boundDepthTexture!==D){if(D!==null&&De.has(D)&&(S.width!==D.image.width||S.height!==D.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(S)}}let Q=S.texture;(Q.isData3DTexture||Q.isDataArrayTexture||Q.isCompressedArrayTexture)&&(A=!0);let w=De.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(w[H])?q=w[H][ee]:q=w[H],me=!0):S.samples>0&&Ve.useMultisampledRTT(S)===!1?q=De.get(S).__webglMultisampledFramebuffer:Array.isArray(w)?q=w[ee]:q=w,E.copy(S.viewport),U.copy(S.scissor),k=S.scissorTest}else E.copy(Ee).multiplyScalar(X).floor(),U.copy(Ne).multiplyScalar(X).floor(),k=He;if(ee!==0&&(q=sn),Ce.bindFramebuffer(O.FRAMEBUFFER,q)&&te&&Ce.drawBuffers(S,q),Ce.viewport(E),Ce.scissor(U),Ce.setScissorTest(k),me){let W=De.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+H,W.__webglTexture,ee)}else if(A){let W=H;for(let Q=0;Q<S.textures.length;Q++){let w=De.get(S.textures[Q]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Q,w.__webglTexture,ee,W)}}else if(S!==null&&ee!==0){let W=De.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,W.__webglTexture,ee)}b=-1},this.readRenderTargetPixels=function(S,H,ee,te,q,me,A,P=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let W=De.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&A!==void 0&&(W=W[A]),W){Ce.bindFramebuffer(O.FRAMEBUFFER,W);try{let Q=S.textures[P],w=Q.format,D=Q.type;if(!Ye.textureFormatReadable(w)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(D)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=S.width-te&&ee>=0&&ee<=S.height-q&&(S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+P),O.readPixels(H,ee,te,q,Oe.convert(w),Oe.convert(D),me))}finally{let Q=N!==null?De.get(N).__webglFramebuffer:null;Ce.bindFramebuffer(O.FRAMEBUFFER,Q)}}},this.readRenderTargetPixelsAsync=async function(S,H,ee,te,q,me,A,P=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let W=De.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&A!==void 0&&(W=W[A]),W)if(H>=0&&H<=S.width-te&&ee>=0&&ee<=S.height-q){Ce.bindFramebuffer(O.FRAMEBUFFER,W);let Q=S.textures[P],w=Q.format,D=Q.type;if(!Ye.textureFormatReadable(w))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(D))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let K=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,K),O.bufferData(O.PIXEL_PACK_BUFFER,me.byteLength,O.STREAM_READ),S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+P),O.readPixels(H,ee,te,q,Oe.convert(w),Oe.convert(D),0);let Z=N!==null?De.get(N).__webglFramebuffer:null;Ce.bindFramebuffer(O.FRAMEBUFFER,Z);let re=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await zh(O,re,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,K),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,me),O.deleteBuffer(K),O.deleteSync(re),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,H=null,ee=0){let te=Math.pow(2,-ee),q=Math.floor(S.image.width*te),me=Math.floor(S.image.height*te),A=H!==null?H.x:0,P=H!==null?H.y:0;Ve.setTexture2D(S,0),O.copyTexSubImage2D(O.TEXTURE_2D,ee,0,0,A,P,q,me),Ce.unbindTexture()};let Mi=O.createFramebuffer(),Ki=O.createFramebuffer();this.copyTextureToTexture=function(S,H,ee=null,te=null,q=0,me=null){me===null&&(q!==0?(Mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=q,q=0):me=0);let A,P,W,Q,w,D,K,Z,re,he=S.isCompressedTexture?S.mipmaps[me]:S.image;if(ee!==null)A=ee.max.x-ee.min.x,P=ee.max.y-ee.min.y,W=ee.isBox3?ee.max.z-ee.min.z:1,Q=ee.min.x,w=ee.min.y,D=ee.isBox3?ee.min.z:0;else{let bt=Math.pow(2,-q);A=Math.floor(he.width*bt),P=Math.floor(he.height*bt),S.isDataArrayTexture?W=he.depth:S.isData3DTexture?W=Math.floor(he.depth*bt):W=1,Q=0,w=0,D=0}te!==null?(K=te.x,Z=te.y,re=te.z):(K=0,Z=0,re=0);let fe=Oe.convert(H.format),ne=Oe.convert(H.type),ye;H.isData3DTexture?(Ve.setTexture3D(H,0),ye=O.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Ve.setTexture2DArray(H,0),ye=O.TEXTURE_2D_ARRAY):(Ve.setTexture2D(H,0),ye=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);let Se=O.getParameter(O.UNPACK_ROW_LENGTH),We=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ge=O.getParameter(O.UNPACK_SKIP_PIXELS),Ze=O.getParameter(O.UNPACK_SKIP_ROWS),Ae=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,he.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,he.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Q),O.pixelStorei(O.UNPACK_SKIP_ROWS,w),O.pixelStorei(O.UNPACK_SKIP_IMAGES,D);let ve=S.isDataArrayTexture||S.isData3DTexture,qe=H.isDataArrayTexture||H.isData3DTexture;if(S.isDepthTexture){let bt=De.get(S),Pt=De.get(H),Gt=De.get(bt.__renderTarget),$r=De.get(Pt.__renderTarget);Ce.bindFramebuffer(O.READ_FRAMEBUFFER,Gt.__webglFramebuffer),Ce.bindFramebuffer(O.DRAW_FRAMEBUFFER,$r.__webglFramebuffer);for(let Vn=0;Vn<W;Vn++)ve&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,De.get(S).__webglTexture,q,D+Vn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,De.get(H).__webglTexture,me,re+Vn)),O.blitFramebuffer(Q,w,A,P,K,Z,A,P,O.DEPTH_BUFFER_BIT,O.NEAREST);Ce.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||S.isRenderTargetTexture||De.has(S)){let bt=De.get(S),Pt=De.get(H);Ce.bindFramebuffer(O.READ_FRAMEBUFFER,Mi),Ce.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ki);for(let Gt=0;Gt<W;Gt++)ve?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,bt.__webglTexture,q,D+Gt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,bt.__webglTexture,q),qe?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pt.__webglTexture,me,re+Gt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Pt.__webglTexture,me),q!==0?O.blitFramebuffer(Q,w,A,P,K,Z,A,P,O.COLOR_BUFFER_BIT,O.NEAREST):qe?O.copyTexSubImage3D(ye,me,K,Z,re+Gt,Q,w,A,P):O.copyTexSubImage2D(ye,me,K,Z,Q,w,A,P);Ce.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else qe?S.isDataTexture||S.isData3DTexture?O.texSubImage3D(ye,me,K,Z,re,A,P,W,fe,ne,he.data):H.isCompressedArrayTexture?O.compressedTexSubImage3D(ye,me,K,Z,re,A,P,W,fe,he.data):O.texSubImage3D(ye,me,K,Z,re,A,P,W,fe,ne,he):S.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,me,K,Z,A,P,fe,ne,he.data):S.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,me,K,Z,he.width,he.height,fe,he.data):O.texSubImage2D(O.TEXTURE_2D,me,K,Z,A,P,fe,ne,he);O.pixelStorei(O.UNPACK_ROW_LENGTH,Se),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,We),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ge),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ze),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ae),me===0&&H.generateMipmaps&&O.generateMipmap(ye),Ce.unbindTexture()},this.initRenderTarget=function(S){De.get(S).__webglFramebuffer===void 0&&Ve.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ve.setTextureCube(S,0):S.isData3DTexture?Ve.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ve.setTexture2DArray(S,0):Ve.setTexture2D(S,0),Ce.unbindTexture()},this.resetState=function(){C=0,F=0,N=null,Ce.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}};var M0={x:1630,y:1160},b0={x:3370,y:430},Ns={x:1450,y:1320};function mu(i,e){if(!i||!e)return null;let t=[M0,b0].filter(g=>Math.hypot(g.x-i.x,g.y-i.y)<400).sort((g,x)=>Math.hypot(g.x-i.x,g.y-i.y)-Math.hypot(x.x-i.x,x.y-i.y))[0],n=0,r=1;if(t){let g=t.x-i.x,x=t.y-i.y;Math.abs(g)>Math.abs(x)?(n=Math.sign(g)||1,r=0):r=Math.sign(x)||1}let s=[0,280,320,360][e],a=[0,220,260,300][e],o=112,c={x:i.x-n*a/2,y:i.y-r*a/2},l=(g,x)=>({x:c.x+r*g+n*x,y:c.y-n*g+r*x}),h=(g,x,m,u)=>{let _=l(g,x);return{x:_.x,y:_.y,w:r?m:u,h:r?u:m}},d=[];if(e>=2){d.push(h(0,-a/2,s,10));for(let g of[-s/2,s/2])d.push(h(g,0,10,a))}if(e>=3){let g=(s-o)/2;for(let x of[-1,1])d.push(h(x*(o/2+g/2),a/2,g,10))}let p=e===1?[-1,1].flatMap(g=>[-1,1].map(x=>({...l(g*(s/2-8),x*(a/2-8)),radius:6}))):[],f=[h(-s/2+53,-a/2+64,52,90)];return e>=3&&f.push(h(s/2-53,-a/2+64,52,90)),{center:c,width:s,depth:a,door:o,fx:n,fy:r,yaw:Math.atan2(n,r),floor:h(0,0,s,a),walls:d,posts:p,beds:f,point:l,wallHeight:224,doorHeight:204,roofRidge:284}}var S0=["#4c9cba","#df8168","#9974c7","#76b677","#e3b04c","#df71a7"],w0=["#e3b185","#be895f","#efc69d","#a67152"],T0=["#463b32","#24282b","#99673b","#c9a465"];function E0(i){let e={shirt:0,skin:0,hair:0,style:0};for(let[t,n]of[["shirt",6],["skin",4],["hair",4],["style",3]])Number.isInteger(i?.[t])&&i[t]>=0&&i[t]<n&&(e[t]=i[t]);return e}function zo(i){let e=E0(i);return{shirt:S0[e.shirt],skin:w0[e.skin],hair:T0[e.hair],style:e.style}}var gu={gather:1e3,fish:1500,cook:1200,wave:2e3,cheer:2e3};function xu(i,e){let t=Math.sin(e*Math.PI*4);return i==="gather"?{left:-.35,right:-1.1+t*.6,bend:.12}:i==="fish"?{left:-.8,right:-1.3+Math.sin(e*Math.PI)*.3,bend:0}:i==="cook"?{left:-.8,right:-.9+t*.25,bend:.06}:i==="wave"?{left:0,right:-2.4,bend:0,wave:t*.25}:i==="cheer"?{left:-2.4,right:-2.4,bend:0,wave:t*.12}:null}var A0="assets/materials-v018/",dc=["paving","sand","grass","plaster","teal","roof","wood","rock","leaf"],C0=new Set(["#a68854","#876742","#845f3f","#7d654b","#866642","#a98961","#765734","#9a743e","#786040","#8a6d49","#927652","#6e5942"]);function _u(i){let e=document.createElement("canvas");e.width=i.width,e.height=i.height;let t=e.getContext("2d");t.scale(e.width/4600,e.height/2900),t.fillStyle="#0000ff",t.fillRect(0,0,4600,2900),t.fillStyle="#00ff00";for(let[n,r,s,a]of[[1750,1300,1420,840],[3380,500,450,240],[4100,2400,325,225]])t.beginPath(),t.ellipse(n,r,s,a,0,0,Math.PI*2),t.fill();return t.strokeStyle="#ff0000",t.lineWidth=100,t.lineCap="round",t.beginPath(),t.moveTo(1440,1190),t.bezierCurveTo(1520,1080,1750,1190,1980,1280),t.bezierCurveTo(2420,1510,2790,1440,3200,1320),t.stroke(),t.lineWidth=80,t.beginPath(),t.moveTo(1800,1180),t.bezierCurveTo(2100,930,2820,920,3220,730),t.lineTo(3370,480),t.stroke(),t.fillStyle="#ff0000",t.beginPath(),t.ellipse(1570,1160,290,200,0,0,Math.PI*2),t.fill(),e}function Oo(i){let e=new Map,t=new Map,n=new Set,r=0,s=0,a=!0,o=0,c=new Ts;for(let f of dc){let g=c.load(A0+f+".webp",()=>{r++,a=!0},void 0,()=>{s++,n.add(f),a=!0});g.userData.materialAssetName=f,g.colorSpace=Lt,g.wrapS=g.wrapT=xr,g.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),e.set(f,g)}function l(f,g="#ffffff",x=1,m=.035){let u=f+g+x+m;if(!t.has(u)){let _=e.get(f).clone();_.repeat.set(x,x);let T=new Tt({color:g,map:_,bumpMap:_,bumpScale:m,roughness:f==="leaf"?.78:.93});e.get(f).addEventListener("dispose",()=>_.dispose());let y=e.get(f);T.userData.textureSource=y,t.set(u,T),a=!0}return t.get(u)}function h(f){return C0.has(f)?l("wood","#ded4c4",1,.045):f==="#e2dbc7"?l("plaster","#f8f4e7",1,.027):f==="#ba7655"?l("roof","#e4d6c7",2,.055):f==="#a7c4b7"?l("teal","#e7ede3",1,.035):f==="#92968b"||f==="#777a6b"?l("rock","#ddd9cf",1,.065):null}function d(){if(!a)return;o++;let f=r+s<dc.length;for(let g of t.values()){let x=g.userData.textureSource;x.image&&g.map.image!==x.image&&(g.map.source=x.source,g.map.needsUpdate=!0),g.map.image&&!g.userData.uploaded&&(g.map.needsUpdate=!0,g.userData.uploaded=!0),!g.userData.uploaded&&!n.has(x.userData.materialAssetName)&&(f=!0)}a=f}function p(f){f.colorSpace=In;let g=new Tt({color:"#ffffff",map:f,roughness:1});return g.onBeforeCompile=x=>{x.uniforms.uSand={value:e.get("sand")},x.uniforms.uGrass={value:e.get("grass")},x.uniforms.uPaving={value:e.get("paving")},x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
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
        normal=normalize(normal+vec3(dFdx(relief)*.14,dFdy(relief)*.14,0.));`)},g}return{textures:e,surface:l,forColor:h,ground:p,update:d,stats:()=>({loaded:r,failed:s,total:dc.length,materials:t.size,syncPending:a,syncPasses:o}),dispose(){for(let f of t.values())f.map.dispose(),f.dispose();for(let f of e.values())f.dispose()}}}function Bo({x:i,z:e,surface:t,yaw:n,pitch:r,mode:s="first",distance:a=4.8,bob:o=0},c={position:new V,target:new V}){let l=t+1.64+o;return s==="first"?(c.position.set(i,l,e),c.target.set(i-Math.sin(n)*Math.cos(r),l-Math.sin(r),e-Math.cos(n)*Math.cos(r)),c):(c.target.set(i,t+1.3,e),c.position.set(i+Math.sin(n)*Math.cos(r)*a,c.target.y+.65+Math.sin(r)*a,e+Math.cos(n)*Math.cos(r)*a),c)}function fc(i,e,t,n){return!(t>0)||!(n>0)?i:i.lerp(e,1-Math.exp(-t*n))}function ko(i,e,t,{height:n=18,offsetX:r=-12,offsetZ:s=-8}={}){let a=Math.abs(i.shadow.camera.right-i.shadow.camera.left),o=i.shadow.mapSize.width,c=a>0&&o>0?a/o:0,l=c?Math.round(e/c)*c:e,h=c?Math.round(t/c)*c:t;return i.position.set(l+r,n,h+s),i.target.position.set(l,0,h),c}function yu(i,e,t,n,r){let s=(()=>{let x=90210;return()=>(x=Math.imul(x,1664525)+1013904223>>>0)/4294967296})(),a=new Mt;a.setAttribute("position",new it([-.015,0,0,.015,0,0,-.012,.08,.01,.012,.08,.01,0,.16,.035],3)),a.setAttribute("uv",new it([0,0,1,0,0,.5,1,.5,.5,1],2)),a.setIndex([0,1,2,1,3,2,2,3,4]),a.computeVertexNormals();let o=new Tt({color:"#ffffff",side:Rt,roughness:1});o.defines={USE_UV:""};let c={value:0},l={value:new gt(0,0,0,0)};o.onBeforeCompile=x=>{x.uniforms.uWind=c,x.uniforms.uBase=l,x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec4 uBase;`),x.vertexShader=x.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec3 grassWorld=(instanceMatrix*vec4(position,1.)).xyz;
      transformed.x+=sin(uWind+grassWorld.x*.8+grassWorld.z)*position.y*.13;
      if(abs(grassWorld.x-uBase.x)<uBase.z&&abs(grassWorld.z-uBase.y)<uBase.w)transformed.y-=100.;`),x.fragmentShader=x.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=.7+.35*vUv.y;`)};let h=r?2800:5500,d=new _t(a,o,h);d.receiveShadow=!0,d.frustumCulled=!1;let p=n.getContext("2d").getImageData(0,0,n.width,n.height).data,f=new xt,g=0;for(let x=0;x<h*8&&g<h;x++){let m=s()*4600,u=s()*2900,_=(Math.min(n.height-1,Math.floor(u/2900*n.height))*n.width+Math.min(n.width-1,Math.floor(m/4600*n.width)))*4;if(p[_+1]<p[_]+12||p[_+1]<85)continue;let T=m/t,y=u/t,I=e(T,y);I<.1||(f.position.set(T,I-.015,y),f.rotation.set(0,s()*Math.PI*2,0),f.scale.setScalar(.7+s()*.8),f.updateMatrix(),d.setMatrixAt(g,f.matrix),d.setColorAt(g,new je().setHSL(.2+s()*.055,.3+s()*.15,.22+s()*.08)),g++)}return d.count=g,i.add(d),{update(x,m){c.value=x,m?l.value.set(m.floor.x/t,m.floor.y/t,m.floor.w/(t*2)+.1,m.floor.h/(t*2)+.1):l.value.set(0,0,0,0)},dispose(){i.remove(d),a.dispose(),o.dispose(),d.dispose()}}}function vu(i,e,{cube:t,tube:n},r){let s=e.width/80,a=e.depth/80,o=e.wallHeight/80,c=e.roofRidge/80;for(let d of i.children)d.name==="floor"&&(d.material=r.surface("paving","#e5ded0",2,.045)),d.name==="wall"&&(d.material=r.surface("plaster","#f8f4e7",1,.025)),d.name==="roof"&&(d.material=r.surface("roof","#efe2d5",2,.045));for(let d of[-1,1]){let p=t(i,"#876742",[d*s/2,o-.09,0],[.13,.16,a+.18]);if(p.name="trim",e.walls.length){let f=t(i,"#a7c4b7",[d*(s/2+.064),1.55,-a*.16],[.02,.9,.7]);f.name="shutter";for(let g=0;g<8;g++)t(i,"#876742",[d*(s/2+.08),1.17+g*.11,-a*.16],[.025,.035,.69]);for(let g of[-a*.16-.39,-a*.16+.39])t(i,"#e2dbc7",[d*(s/2+.078),1.56,g],[.045,1.02,.065])}}let l=n(i,"#ba7655",[0,c+.02,0],[.09,a+.42,.09]);l.rotation.x=Math.PI/2,l.name="ridge";let h=t(i,"#e2dbc7",[0,o-.05,-a/2-.066],[s+.08,.16,.06]);return h.name="trim",i}var Pn=Object.freeze([{id:"home",name:"Main Island",x:0,z:0,radius:480,biome:"mixed",dock:{x:390,z:100},landmarks:["village","player-base","market","harbour"]},{id:"jungle",name:"Jungle Island",x:1150,z:-450,radius:270,biome:"rainforest",dock:{x:930,z:-380},landmarks:["cave","waterfall","hidden-cache"]},{id:"fortress",name:"Fortress Island",x:1900,z:550,radius:240,biome:"rocky",dock:{x:1690,z:490},landmarks:["guarded-estate","rescue-mission"]},{id:"highlands",name:"Highlands Island",x:-1050,z:-850,radius:290,biome:"highlands",dock:{x:-840,z:-710},landmarks:["mine","mountain-trail"]},{id:"smugglers",name:"Smugglers Island",x:-1550,z:250,radius:230,biome:"mangrove",dock:{x:-1340,z:220},landmarks:["warehouse","secret-passage"]},{id:"paradise",name:"Paradise Island",x:700,z:1350,radius:250,biome:"beach",dock:{x:600,z:1120},landmarks:["cabins","reef"]}]),Ky=Object.freeze(Object.fromEntries(Pn.map(i=>[i.id,i])));function Mu(i,e){return!Number.isFinite(i)||!Number.isFinite(e)?null:Pn.find(t=>Math.hypot(i-t.x,e-t.z)<=t.radius)??null}function Wr(i,e){if(Number.isFinite(i.coastSeed)){let n=i.coastSeed;return .855+.07*Math.sin(e*2+n)+.045*Math.cos(e*3-n)+.025*Math.sin(e*7+n)}let t=i.x*.002+i.z*.001;return .955+.023*Math.sin(e*3+t)+.012*Math.cos(e*5-t)}function Yi(i,e,t){let n=(e-i.x)/i.radius,r=(t-i.z)/i.radius,s=Math.hypot(n,r);if(s>=1)return-.32;let a=Math.atan2(r,n),o=Wr(i,a),c=Math.max(0,Math.min(1,(o-s)/.12));if(s>o)return-.32*Math.min(1,(s-o)/.04);if(Number.isFinite(i.relief)){let f=(o-s)*i.radius/20,g=Math.min(1,f/18),x=Math.max(0,Math.min(1,(f-18)/85)),m=Math.exp(-((n+.18)**2*4+(r-.16)**2*5))*.7+Math.exp(-((n-.36)**2*11+(r+.25)**2*8))*.42;return .005+g*.65+x*x*(3-2*x)*m*i.relief}let l=Math.max(0,Math.min(1,(.79-s)/.22)),h=l*l*(3-2*l),d=Math.exp(-((n+.18)**2*4+(r-.16)**2*5))*.7+Math.exp(-((n-.36)**2*11+(r+.25)**2*8))*.42,p=i.biome==="highlands"?8.5:i.biome==="rainforest"?2.2:i.biome==="rocky"?1.6:.55;return .005+c*.35+h*d*p}function pc(i,{segments:e=48}={}){if(!Number.isInteger(e)||e<8||e>256)throw new RangeError("segments must be 8..256");let t=[0,Yi(i,i.x,i.z),0],n=[.5,.5],r=[],s=Math.ceil(e/2);for(let l=1;l<=s;l++)for(let h=0;h<=e;h++){let d=h/e*Math.PI*2,p=Number.isFinite(i.relief)?Wr(i,d)+.03:1.02,f=i.radius*p*l/s,g=Math.cos(d)*f,x=Math.sin(d)*f;t.push(g,Yi(i,i.x+g,i.z+x),x),n.push(.5+g/(i.radius*2.04),.5+x/(i.radius*2.04));let m=1+(l-1)*(e+1)+h;if(h!==e)if(l===1)r.push(0,m+1,m);else{let u=m-(e+1);r.push(u,m+1,m,u,u+1,m+1)}}let a=new Mt;a.setAttribute("position",new it(t,3)),a.setAttribute("uv",new it(n,2)),a.setIndex(r),a.computeVertexNormals();let o=new Tt({color:i.biome==="beach"?11779972:5538650,roughness:1,side:Rt}),c=new ot(a,o);return c.name="archipelago-"+i.id,c.position.set(i.x,0,i.z),c.receiveShadow=!0,c}function bu(i={}){let e=new Be;e.name="archipelago-terrain";for(let t of Pn)e.add(pc(t,i));return e}function Xr(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,c=new Mt,l=0;for(let h=0;h<i.length;++h){let d=i[h],p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,d=[];for(let p=0;p<i.length;++p){let f=i[p].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=i[p].attributes.position.count}c.setIndex(d)}for(let h in s){let d=Su(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let p=0;p<d;++p){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][p]);let g=Su(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Su(i){let e,t,n,r=-1,s=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let a=new e(s),o=new Bt(a,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/t;for(let p=0,f=h.count;p<f;p++)for(let g=0;g<t;g++){let x=h.getComponent(p,g);o.setComponent(p+d,g,x)}}else a.set(h.array,c);c+=h.count*t}return r!==void 0&&(o.gpuType=r),o}var Fs=Object.freeze([{x:95,z:-95,w:105,d:80,h:4.4,color:"#d8b8a3",shutter:"#557f7b"},{x:-55,z:-115,w:110,d:85,h:5.8,color:"#d5dfd4",shutter:"#73868b"},{x:-210,z:-95,w:100,d:90,h:4.5,color:"#e6cf97",shutter:"#426d73"},{x:100,z:110,w:100,d:90,h:5.6,color:"#9fbdac",shutter:"#705b48"},{x:-70,z:130,w:110,d:85,h:4.4,color:"#dfc6b5",shutter:"#587e7c"},{x:-225,z:110,w:90,d:75,h:4.5,color:"#c5d1d0",shutter:"#7a6a58"}]);function Zi(i,e,t=Fs){return e==="home"&&t.some(n=>Math.abs(i.x-n.x)<n.w/2+7&&Math.abs(i.z-n.z)<n.d/2+7)}var R0=`
float hash21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise21(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hash21(i),hash21(i+vec2(1.,0.)),f.x),mix(hash21(i+vec2(0.,1.)),hash21(i+vec2(1.)),f.x),f.y);}
float fbm21(vec2 p){float f=0.,a=.5;for(int i=0;i<4;i++){f+=a*noise21(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`,Tu=`
float hashFast(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noiseFast(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hashFast(i),hashFast(i+vec2(1.,0.)),f.x),mix(hashFast(i+vec2(0.,1.)),hashFast(i+vec2(1.)),f.x),f.y);}
float fbmFast(vec2 p){float f=0.,a=.535714;for(int i=0;i<3;i++){f+=a*noiseFast(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`;function Vo(i,{size:e=900,segments:t=72,coastSeeds:n=[]}={}){let r=Array.from({length:9},(c,l)=>new gt(...i[l]||[1e4,1e4,1,1])),s=new ln({fog:!0,uniforms:{...Po.clone(Re.fog),uTime:{value:0},uEye:{value:new V},uCoasts:{value:r},uCoastSeeds:{value:Array.from({length:9},(c,l)=>n[l]??-100)}},vertexShader:`uniform float uTime;varying vec3 vWater;
    #include <fog_pars_vertex>
    void main(){vec3 p=position;
    p.y+=sin(dot(p.xz,vec2(.41,.19))+uTime*.75)*.024+sin(dot(p.xz,vec2(-.17,.36))-uTime*.58)*.019;
    vWater=(modelMatrix*vec4(p,1.)).xyz;vec4 mvPosition=viewMatrix*vec4(vWater,1.);gl_Position=projectionMatrix*mvPosition;
    #include <fog_vertex>
    }`,fragmentShader:`uniform float uTime;uniform vec3 uEye;uniform vec4 uCoasts[9];uniform float uCoastSeeds[9];varying vec3 vWater;
    #include <fog_pars_fragment>
    ${R0}
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
    }`}),a=new dn(e,e,t,t);a.rotateX(-Math.PI/2),s.userData.fragmentNoiseLayers=7;let o=new ot(a,s);return o.name="tropical-ocean",o.position.y=-.045,{mesh:o,update(c,l){s.uniforms.uTime.value=c,s.uniforms.uEye.value.copy(l)},dispose(){a.dispose(),s.dispose()}}}function Go(i=420){let e=new ln({side:Yt,depthWrite:!1,uniforms:{uTime:{value:0}},vertexShader:"varying vec3 vSky;void main(){vSky=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float uTime;varying vec3 vSky;${Tu}
  void main(){vec3 dir=normalize(vSky);float h=dir.y;
    vec3 col=mix(vec3(.65,.79,.84),vec3(.095,.34,.59),smoothstep(-.02,.8,h));
    vec2 p=dir.xz/max(.1,h)*2.3+vec2(uTime*.006,uTime*.0025);float n=fbmFast(p);
    float cloud=smoothstep(.52,.70,n)*smoothstep(.025,.20,h);
    col=mix(col,mix(vec3(.62,.69,.71),vec3(.98,.96,.89),smoothstep(.50,.70,n)),cloud);
    float sun=pow(max(dot(dir,normalize(vec3(-.55,.82,-.36))),0.),70.);col+=vec3(.35,.24,.12)*sun;
    gl_FragColor=vec4(col,1.);
    #include <colorspace_fragment>
  }`});e.userData.fragmentNoiseLayers=3;let t=new ot(new cn(i,32,20),e);return t.name="tropical-sky",t.renderOrder=-10,t.frustumCulled=!1,t}function Ho(i,e){let t=new Tt({roughness:1,color:"#ffffff",vertexColors:!0});return t.userData.fragmentNoiseLayers=3,t.onBeforeCompile=n=>{Object.assign(n.uniforms,{uGrass:{value:i.textures.get("grass")},uSand:{value:i.textures.get("sand")},uRock:{value:i.textures.get("rock")}}),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vIslandPosition;varying vec3 vIslandNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vIslandPosition=position;vIslandNormal=normalize(normal*vec3(${e.toFixed(1)},1.,${e.toFixed(1)}));`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vIslandPosition;varying vec3 vIslandNormal;uniform sampler2D uGrass;uniform sampler2D uSand;uniform sampler2D uRock;${Tu}`).replace("#include <map_fragment>",`
        vec2 uv=vIslandPosition.xz/${e.toFixed(1)}*.34;
        float n=fbmFast(uv*.46);vec2 offset=vec2(17.3,8.1);
        vec3 grass=mix(texture2D(uGrass,uv).rgb,texture2D(uGrass,uv*1.37+offset).rgb,.38);
        vec3 sand=texture2D(uSand,uv*.8).rgb,rock=texture2D(uRock,uv*.62).rgb;
        float beach=1.-smoothstep(.025,.34,vIslandPosition.y);
        float slope=1.-abs(normalize(vIslandNormal).y);float cliff=smoothstep(.44,.76,slope)*(1.-beach);
        diffuseColor.rgb*=mix(mix(grass,sand,beach),rock,cliff)*(.82+n*.28);`)},t.customProgramCacheKey=()=>`tropical-island-${e}`,t}function wu(i=14){let e=[],t=[],n=[],r=(a,o,c,l)=>{let h=o*2.2,d=Math.sin(o*Math.PI)*.55-o*o*.95;return[Math.sin(a)*h+Math.cos(a)*l*c,d-l*.17,Math.cos(a)*h-Math.sin(a)*l*c]};for(let a=0;a<9;a++){let o=a*Math.PI*2/9;for(let c=1;c<i;c++)for(let l of[-1,1]){let h=c/i,d=Math.sin(h*Math.PI)*.44,p=e.length/3;e.push(...r(o,h-.03,l,.012),...r(o,h-.09,l,d),...r(o,h+.025,l,d*.87),...r(o,h+.03,l,.012)),t.push(h,0,h,.9,h+.03,1,h+.03,0),n.push(p,p+1,p+2,p,p+2,p+3)}}let s=new Mt;return s.setAttribute("position",new it(e,3)),s.setAttribute("uv",new it(t,2)),s.setIndex(n),s.computeVertexNormals(),s}var Wt=(i,e=0)=>{let t=Math.sin((i+1)*12.9898+(e+1)*78.233)*43758.5453;return t-Math.floor(t)};function Wo(i,e,{scale:t,height:n,surfaces:r,small:s=!1,clear:a=()=>!1,dense:o=!1,lod:c=!1}={}){let l=(N,b)=>{let M=new At(.085,.16,1,N,b);M.translate(0,.5,0);let E=M.attributes.position;for(let U=0;U<E.count;U++)E.setX(U,E.getX(U)+E.getY(U)**2*.2);return M.computeVertexNormals(),M},h=l(8,6),d=c?l(6,3):h,p=r.surface("wood","#bc9c71",2,.03),f=r.surface("leaf","#9cb384",1,.01).clone();f.side=Rt;let g=wu(s?9:12),x=c?wu(s?6:7):g,m=[],u=[],_=new xt,T=650/t,y=0;for(let N of e){let b=[];for(let E=0;E<(o?N.id==="home"?s?700:1500:s?280:650:s?22:42);E++){let U=E+N.x*.013+N.z*.017,k=E*2.39996+N.x*.001+(Wt(U,0)-.5)*.72,L=o?Math.min(.93,Math.max(.12,Math.sqrt(E*.6180339%1)*.91+(Wt(U,1)-.5)*.09)):Math.min(.91,.34+E%7*.075+(Wt(U,1)-.5)*.08),z=N.radius*L,B=N.x+Math.sin(k)*z,$=N.z+Math.cos(k)*z;a(N,B,$)||n(B,$)<.32||b.push({x:B/t,z:$/t,y:n(B,$),a:k,h:3.45+Wt(U,2)*2.15,size:.7+Wt(U,3)*.43,leanX:(Wt(U,4)-.5)*.12,leanZ:(Wt(U,5)-.5)*.14,index:y++})}if(!b.length)continue;let M=Array.from({length:4},()=>[]);b.forEach(E=>M[(E.x>=N.x/t?1:0)+(E.z>=N.z/t?2:0)].push(E)),M.forEach((E,U)=>{if(!E.length)return;let k=new _t(h,p,E.length),L=new _t(g,f,E.length);k.name=m.length?`grove-trunks-${N.id}-${U+1}`:"grove-trunks",L.name=u.length?`grove-fronds-${N.id}-${U+1}`:"grove-fronds";for(let z=0;z<E.length;z++){let B=E[z];_.position.set(B.x,B.y,B.z),_.rotation.set(B.leanX,B.a,B.leanZ),_.scale.set(B.size,B.h,B.size),_.updateMatrix(),k.setMatrixAt(z,_.matrix),_.position.set(B.x+.2*B.size*Math.cos(B.a),B.y+B.h,B.z-.2*B.size*Math.sin(B.a)),_.rotation.set(B.leanX*.35,B.a+Wt(B.index,6)*Math.PI*.35,B.leanZ*.35),_.scale.setScalar(B.size),_.updateMatrix(),L.setMatrixAt(z,_.matrix),L.setColorAt(z,new je().setHSL(.245+Wt(B.index,7)*.065,.22+Wt(B.index,8)*.13,.59+Wt(B.index,9)*.12))}for(let z of[k,L])z.userData.cullingRegion={island:N.id,sector:U+1},z.castShadow=!0,z.instanceMatrix.needsUpdate=!0,z.computeBoundingSphere(),i.add(z);k.userData.lod={high:h,low:d,distance:T,level:"high",shadowReceiverLod:c,center:k.boundingSphere.center.clone(),radius:k.boundingSphere.radius},L.userData.lod={high:g,low:x,distance:T,level:"high",center:L.boundingSphere.center.clone(),radius:L.boundingSphere.radius},k.receiveShadow=!0,L.receiveShadow=!1,m.push(k),u.push(L)})}let I=new Li(1,1),C=r.surface("rock","#a9aaa0",2,.08),F=[];for(let N of e){let b=[];for(let E=0;E<(s?14:24);E++){let U=E+N.x*.019+N.z*.023,k=E*2.399+.6+(Wt(U,10)-.5)*.62,L=N.radius*(.84+Wt(U,11)*.1),z=N.x+Math.sin(k)*L,B=N.z+Math.cos(k)*L;a(N,z,B)||b.push({x:z/t,y:n(z,B)-.1,z:B/t,a:k,j:E,seed:U})}if(!b.length)continue;let M=new _t(I,C,b.length);M.name=F.length?"shore-rocks-"+N.id:"shore-rocks";for(let E=0;E<b.length;E++){let U=b[E];_.position.set(U.x,U.y,U.z),_.rotation.set(Wt(U.seed,12)*1.2,U.a,Wt(U.seed,13)*1.1),_.scale.set(.27+Wt(U.seed,14)*.5,.2+Wt(U.seed,15)*.43,.31+Wt(U.seed,16)*.53),_.updateMatrix(),M.setMatrixAt(E,_.matrix)}M.castShadow=M.receiveShadow=!0,M.instanceMatrix.needsUpdate=!0,M.computeBoundingSphere(),i.add(M),F.push(M)}return{trees:m[0],foliage:u[0],treeBatches:m,foliageBatches:u,rocks:F[0],rockBatches:F,lodGeometries:[h,d,g,x],update(N){for(let b of[...m,...u]){let M=b.userData.lod,E=M.distance+M.radius,U=N.distanceToSquared(M.center)<=E*E?"high":"low";U!==M.level&&(b.geometry=M[U],M.level=U,M.shadowReceiverLod&&(b.receiveShadow=U==="high"))}}}}function Xo(i,{scale:e,height:t,surfaces:n,helpers:r,village:s=Fs,paths:a,marketPoint:o={x:290,z:-30}}){let{cube:c,tube:l,ell:h}=r,d=[];function p(E){let U=new Map;E.updateMatrix();for(let k of[...E.children])if(k.isMesh){k.updateMatrix();let L=k.geometry.clone().applyMatrix4(k.matrix);U.has(k.material)||U.set(k.material,[]),U.get(k.material).push(L),E.remove(k)}for(let[k,L]of U){let z=Xr(L,!1);L.forEach($=>$.dispose());let B=new ot(z,k);B.castShadow=B.receiveShadow=!0,E.add(B)}}function f(E,U){let k=new Map,L=0;i.updateMatrixWorld(!0),U.updateMatrixWorld(!0);let z=new vt().copy(U.matrixWorld).invert(),B=new vt;for(let $ of E)for(let X of[...$.children])if(X.isMesh){X.updateMatrixWorld(!0),B.multiplyMatrices(z,X.matrixWorld);let le=X.geometry.clone().applyMatrix4(B);k.has(X.material)||k.set(X.material,[]),k.get(X.material).push(le),L++,$.remove(X),X.geometry.dispose()}for(let[$,X]of k){let le=Xr(X,!1);X.forEach(Ee=>Ee.dispose()),le.computeBoundingSphere();let ae=new ot(le,$);ae.castShadow=ae.receiveShadow=!0,U.add(ae)}return{sourceBatches:L,materialBatches:U.children.length}}function g(E,U=i,k=!0,L=0){let z=new Be;z.name="village-house",U.add(z),z.position.set(k?E.x/e:E.x,k?t(E.x,E.z):0,k?E.z/e:E.z),z.rotation.y=E.facing??(E.z>60?Math.PI:0);let B=E.w/e,$=E.d/e,X=E.h,le=c(z,E.color,[0,X/2,0],[B,X,$]);le.material=n.surface("plaster",E.color,2,.035);let ae=n.surface("roof","#d5bbab",2,.065);for(let Y of[-1,1]){let j=c(z,"#ba7655",[Y*B/4,X+.43,0],[Math.hypot(B/2+.25,.85),.13,$+.5]);j.rotation.z=-Y*Math.atan2(.85,B/2+.25),j.material=ae,c(z,"#a75f45",[Y*(B/2+.13),X+.01,0],[.14,.22,$+.58])}let Ee=l(z,"#a75f45",[0,X+.86,0],[.12,$+.62,.12]);Ee.rotation.x=Math.PI/2;for(let Y of[.17,X*.52,X-.16])c(z,"#e2dbc7",[0,Y,$/2+.035],[B+.16,.14,.1]);let Ne=X>5?2:1;for(let Y=0;Y<Ne;Y++)for(let j of[-B*.31,B*.31]){let ge=1.5+Y*2.35,ke=$/2+.08,Pe=c(z,"#415d63",[j,ge,ke],[.75,1.2,.05]);Pe.material.roughness=.24,Pe.material.metalness=.1,c(z,"#e2dbc7",[j,ge,ke+.045],[.065,1.15,.075]),c(z,"#e2dbc7",[j,ge,ke+.046],[.7,.065,.076]);for(let we of[-1,1]){let lt=c(z,E.shutter,[j+we*.56,ge,ke+.03],[.34,1.3,.07]);lt.rotation.y=we*.24;for(let O=0;O<9;O++)c(z,"#876742",[j+we*.56,ge-.52+O*.13,ke+.085],[.33,.024,.04])}if(c(z,"#e2dbc7",[j,ge-.68,ke],[1.7,.1,.16]),c(z,"#e2dbc7",[j,ge+.68,ke],[1.7,.13,.15]),Y===0){let we=c(z,"#876742",[j,.79,$/2+.25],[1.28,.2,.3]);if(we.rotation.x=-.04,h)for(let lt=-2;lt<=2;lt++){let O=h(z,lt%2?"#6f8f58":"#88a866",[j+lt*.22,.99+Math.abs(lt)*.025,$/2+.27],[.17,.31,.15]);O.rotation.z=lt*.14}if(Ne===1){let lt=c(z,E.shutter,[j,2.32,$/2+.46],[1.55,.08,.82]);lt.rotation.x=-.15,c(z,E.shutter,[j,2.2,$/2+.83],[1.55,.17,.07])}}}c(z,"#5a4b3d",[0,1.05,$/2+.06],[.78,2.1,.1]);for(let Y of[.55,1.42])for(let j of[-.19,.19])c(z,"#745f4c",[j,Y,$/2+.125],[.29,.6,.045]);for(let Y of[-.48,.48])c(z,"#e2dbc7",[Y,1.08,$/2+.11],[.16,2.22,.18]);c(z,"#e2dbc7",[0,2.18,$/2+.11],[1.1,.16,.18]),c(z,"#c9baa1",[0,.07,$/2+.34],[1.16,.14,.58]),h&&h(z,"#caa457",[.27,1.04,$/2+.19],[.055,.055,.035]);let He=(L%2?-1:1)*B*.42,et=$/2+.55,Qe=l(z,"#e2dbc7",[He,2.91,$/2+.34],[.035,.7,.035]);Qe.rotation.x=Math.PI/2,c(z,E.shutter,[He,2.62,et],[.09,.56,.64]);for(let Y of[-1,1]){let j=c(z,"#e2dbc7",[He+Y*.052,2.62,et],[.018,.22,.24]);j.rotation.x=(L%3-1)*.22}if(Ne===2){c(z,"#e2dbc7",[0,2.75,$/2+.48],[B+.15,.18,.9]);for(let Y=0;Y<=10;Y++)l(z,"#e2dbc7",[-B/2+Y*B/10,3.18,$/2+.84],[.034,.76,.034]);c(z,"#e2dbc7",[0,3.58,$/2+.84],[B+.17,.08,.1])}for(let Y of[-1,1])for(let j=0;j<Ne;j++)for(let ge of[-$*.26,$*.26])c(z,E.shutter,[Y*(B/2+.03),1.5+j*2.35,ge],[.06,1.22,.8]),c(z,"#e2dbc7",[Y*(B/2+.07),.82+j*2.35,ge],[.16,.1,1.05]),c(z,"#e2dbc7",[Y*(B/2+.07),2.18+j*2.35,ge],[.16,.12,1.05]);return z.userData.facadeDetails={planters:2,awnings:Ne===1?2:0,balcony:Ne===2,windowPanes:Ne*8,doorPanels:4,doorway:!0,ridgeCaps:1,eaveFascias:2,hangingSigns:1,signMarks:2,signClearance:!0},p(z),d.push(z),z}s.forEach((E,U)=>g(E,i,!0,U));let x=new Be;x.name="village-buildings",i.add(x),x.userData.batchDetails={sourceHouses:d.length,...f(d,x)},x.userData.cameraBlocker=!0;let m=new Be;m.name="village-overhead-laundry",i.add(m);let u=["#bd6f53","#e8d99e","#587e7c","#73868b"],_=[...s].sort((E,U)=>E.z-U.z),T=Math.ceil(_.length/2),y=0,I=0;for(let E of[_.slice(0,T),_.slice(T)]){let U=[...E].sort((k,L)=>k.x-L.x);for(let k=1;k<U.length;k++){let L=U[k-1],z=U[k],B=L.x+L.w/2,$=z.x-z.w/2;if($<=B)continue;let X=(B+$)/2,le=(L.z+z.z)/2,ae=Math.max(t(X,le)+3.35,3.55),Ee=($-B)/e,Ne=l(m,"#5a4b3d",[X/e,ae,le/e],[.012,Ee,.012]);Ne.rotation.z=Math.PI/2,y++;for(let He=0;He<3;He++){let et=(B+($-B)*(He+1)/4)/e,Qe=u[(y+He)%u.length],Y=c(m,Qe,[et,ae-.24-He%2*.05,le/e],[.46,.48+He%2*.1,.025]);Y.rotation.z=(He-1)*.06,I++}}}m.userData.laundryDetails={lines:y,garments:I,clearance:!0},p(m);function C(E,U,k=!1){let L=[],z=[],B=[],$=0;for(let ae=0;ae<E.length;ae++){let Ee=E[Math.max(0,ae-1)],Ne=E[Math.min(E.length-1,ae+1)],He=E[ae],et=Ne.x-Ee.x,Qe=Ne.z-Ee.z,Y=Math.hypot(et,Qe)||1;ae&&($+=Math.hypot(He.x-E[ae-1].x,He.z-E[ae-1].z)/e);for(let j of[-1,1]){let ge=He.x-Qe/Y*U/2*j,ke=He.z+et/Y*U/2*j;L.push(ge/e,t(ge,ke)+.018,ke/e),z.push((j+1)/2*U/e,$)}if(ae){let j=ae*2;B.push(j-2,j-1,j,j-1,j+1,j)}}let X=new Mt;X.setAttribute("position",new it(L,3)),X.setAttribute("uv",new it(z,2)),X.setIndex(B),X.computeVertexNormals();let le=new ot(X,n.surface("paving","#ded9c9",.75,.045));if(le.name="village-path",le.receiveShadow=!0,i.add(le),k){let ae=Math.max(4,U*.08),Ee=new qt(1,1,1),Ne=new _t(Ee,n.surface("rock","#dad4c6",1.2,.025),(E.length-1)*2),He=new xt;Ne.name="village-curb";let et=0;for(let Qe=1;Qe<E.length;Qe++){let Y=E[Qe-1],j=E[Qe],ge=j.x-Y.x,ke=j.z-Y.z,Pe=Math.hypot(ge,ke),we=-ke/Pe,lt=ge/Pe;for(let O of[-1,1]){let ft=(Y.x+j.x)/2+we*(U/2+ae/2)*O,Je=(Y.z+j.z)/2+lt*(U/2+ae/2)*O;He.position.set(ft/e,t(ft,Je)+.065,Je/e),He.rotation.set(0,Math.atan2(ge,ke),0),He.scale.set(ae/e,.1,Pe/e+.025),He.updateMatrix(),Ne.setMatrixAt(et++,He.matrix)}}Ne.castShadow=Ne.receiveShadow=!0,Ne.instanceMatrix.needsUpdate=!0,Ne.computeBoundingSphere(),i.add(Ne)}}let F=[];for(let E of a||[{points:Array.from({length:31},(U,k)=>({x:385-k*21,z:36+Math.sin(k*.19)*9})),width:55,curb:!0},{points:Array.from({length:15},(U,k)=>({x:23,z:-280+k*39})),width:40,curb:!0}]){let U=[E.points[0]];for(let k=1;k<E.points.length;k++){let L=E.points[k-1],z=E.points[k],B=Math.ceil(Math.hypot(z.x-L.x,z.z-L.z)/30);for(let $=1;$<=B;$++)U.push({x:L.x+(z.x-L.x)*$/B,z:L.z+(z.z-L.z)*$/B})}if(C(U,E.width,E.curb),E.curb)for(let k=3;k<E.points.length-3;k+=6){let L=E.points[k-1],z=E.points[k+1],B=E.points[k],$=z.x-L.x,X=z.z-L.z,le=Math.hypot($,X)||1,ae=Math.floor(k/6)%2?1:-1,Ee=E.width/2+9,Ne=B.x-X/le*Ee*ae,He=B.z+$/le*Ee*ae;F.push({x:Ne/e,y:t(Ne,He),z:He/e})}}if(F.length){let E=new At(1,1,1,10),U=new cn(1,12,8),k=new xt,L=new _t(E,new Tt({color:"#394447",roughness:.62,metalness:.38}),F.length),z=new _t(U,new Tt({color:"#ffe4a8",emissive:"#ffb85c",emissiveIntensity:.72,roughness:.34}),F.length);L.name="village-lamp-posts",z.name="village-lamp-globes";for(let B=0;B<F.length;B++){let $=F[B];k.position.set($.x,$.y+1.35,$.z),k.scale.set(.065,2.7,.065),k.updateMatrix(),L.setMatrixAt(B,k.matrix),k.position.set($.x,$.y+2.76,$.z),k.scale.set(.18,.22,.18),k.updateMatrix(),z.setMatrixAt(B,k.matrix)}L.castShadow=L.receiveShadow=!0,z.castShadow=!1,z.receiveShadow=!0;for(let B of[L,z])B.instanceMatrix.needsUpdate=!0,B.computeBoundingSphere(),i.add(B)}let N=new Be;N.name="harbor-market",N.position.set(o.x/e,t(o.x,o.z),o.z/e),i.add(N);for(let E of[-1.4,1.4])for(let U of[-.6,.6])l(N,"#876742",[E,1.2,U],[.045,2.4,.045]);let b=c(N,"#cc8660",[0,2.35,0],[3.2,.07,1.8]);b.rotation.x=.07;for(let E=0;E<6;E++){let U=E%2?"#f3dfbe":"#bd6f53",k=(E-2.5)*.53,L=c(N,U,[k,2.395,0],[.53,.035,1.76]);L.rotation.x=.07,c(N,U,[k,2.27,.92],[.49,.18,.055])}c(N,"#a98961",[0,.7,0],[2.8,.15,.9]);let M=["#ce5949","#e6b64d","#709a55"];for(let E=0;E<5;E++){let U=(E-2)*.5;if(c(N,"#a68854",[U,.88,0],[.43,.2,.68]),h)for(let k=0;k<3;k++)h(N,M[(E+k)%M.length],[U+(k-1)*.11,1.05,k%2?-.11:.11],[.075,.085,.075])}return N.userData.marketDetails={canopyStripes:6,valances:6,produce:15},p(N),{building:g,houses:d,buildings:x}}var nt=20;var en=Pn.map((i,e)=>({...i,x:i.x*16,z:i.z*16,dock:{x:i.dock.x*16,z:i.dock.z*16},radius:i.id==="home"?9e3:i.radius*16,coastSeed:1.3+e*1.7,relief:i.id==="home"?24:i.biome==="highlands"?85:i.biome==="rainforest"?42:i.biome==="rocky"?28:12})),gc=Object.fromEntries(en.map(i=>[i.id,i])),Zr={minX:Math.min(...en.map(i=>i.x-i.radius))-1600,maxX:Math.max(...en.map(i=>i.x+i.radius))+1600,minZ:Math.min(...en.map(i=>i.z-i.radius))-1600,maxZ:Math.max(...en.map(i=>i.z+i.radius))+1600},Eu=(i,e)=>en.find(t=>Math.hypot(i-t.x,e-t.z)<t.radius)||null,dt=Object.fromEntries(en.map((i,e)=>{let t=Pn[e],n=Math.hypot(t.dock.x-t.x,t.dock.z-t.z),r=(t.dock.x-t.x)/n,s=(t.dock.z-t.z)/n,a=i.radius*Wr(i,Math.atan2(s,r)),o=c=>({x:i.x+r*c,z:i.z+s*c});return[i.id,{id:i.id,...o(a+320),ux:r,uz:s,land:o(a-320),end:o(a+240),shore:o(a+200),width:38,deck:.72}]})),Yr={x:dt.home.land.x-385,z:dt.home.land.z-40},Ji=Fs.map(i=>({...i,x:i.x+Yr.x,z:i.z+Yr.z,facing:i.z>60?Math.PI:0})),qr=(i,e)=>({x:i+Yr.x,z:e+Yr.z}),zs=[{width:55,curb:!0,points:Array.from({length:31},(i,e)=>e===0?{...dt.home.land}:qr(385-e*21,36+Math.sin(e*.19)*9))},{width:40,curb:!0,points:Array.from({length:15},(i,e)=>qr(23,-280+e*39))},{width:36,points:[qr(-245,40),qr(-600,30),{x:gc.home.radius*.35,z:400},{x:800,z:-700},{x:-1800,z:-2400}]}],Au=qr(290,-30),Ut={x:dt.fortress.land.x-dt.fortress.ux*800,z:dt.fortress.land.z-dt.fortress.uz*800},Cu={x:Ut.x-115,z:Ut.z+145},rt={pump:qr(330,65),cave:{x:dt.jungle.land.x-dt.jungle.ux*700,z:dt.jungle.land.z-dt.jungle.uz*700},estate:{x:Ut.x,z:Ut.z+102},paper:{x:0,z:-40},caveExit:{x:0,z:150},estateExit:{x:0,z:130},stairs:{x:70,z:-95},cellarExit:{x:0,z:150},key:{x:0,z:-60}};rt.supply={x:rt.cave.x+150,z:rt.cave.z-105};var I0=[{id:"gate",area:null,...Cu,hp:2},{id:"patrol",area:null,x:Ut.x+110,z:Ut.z+85,hp:2},{id:"hall",area:"estate",x:-65,z:15,hp:2},{id:"boss",area:"estate",x:0,z:-60,hp:3}];function mc(i,e,t){return t=Math.max(0,Math.min(1,t)),t=t*t*(3-2*t),i+(e-i)*t}function $i(i,e,t=Eu(i,e)){if(!t)return-.32;let n=Yi(t,i,e);if(n<=.01)return n;if(t.id==="home"){let r=Math.hypot(i-Yr.x+80,e-Yr.z);r<820&&(n=mc(.68,n,(r-470)/350))}if(t.id==="fortress"){let r=Math.max(Math.abs(i-Ut.x),Math.abs(e-Ut.z));r<400&&(n=mc(.85,n,(r-180)/220))}if(t.id==="jungle"){let r=Math.hypot(i-rt.cave.x,e-rt.cave.z);r<230&&(n=mc(1.2,n,(r-100)/130))}return n}function xc(i,e,t){for(let n of t?[dt[t]]:Object.values(dt)){if(!n)continue;let r=i-n.land.x,s=e-n.land.z,a=r*n.ux+s*n.uz,o=r*n.uz-s*n.ux,c=Math.hypot(n.end.x-n.land.x,n.end.z-n.land.z);if(a>=-.5&&a<=c+.5&&Math.abs(o)<=n.width/2){let l=$i(n.land.x,n.land.z);return{dock:n,height:l+(n.deck-l)*Math.max(0,Math.min(1,a/c))}}}return null}function On(i,e){return xc(i,e)?.height??$i(i,e)}function qo(i,e){return zs.some(t=>t.points.some((n,r)=>{if(!r)return!1;let s=t.points[r-1],a=n.x-s.x,o=n.z-s.z,c=Math.max(0,Math.min(1,((i-s.x)*a+(e-s.z)*o)/(a*a+o*o)));return Math.hypot(i-s.x-a*c,e-s.z-o*c)<t.width/2+35}))}var hv=Object.fromEntries(Pn.map(i=>{let e=Math.hypot(i.dock.x-i.x,i.dock.z-i.z),t=(i.dock.x-i.x)/e,n=(i.dock.z-i.z)/e;return[i.id,{x:i.x+t*i.radius*1.06,z:i.z+n*i.radius*1.06,shore:{x:i.x+t*i.radius*.84,z:i.z+n*i.radius*.84}}]}));var Jr={seatZ:-.28,seatTop:.72,hips:.84,eye:1.65};function Ru(i,{cube:e,ell:t,mat:n}){let r=new Be;r.name="campaign-boat",i.add(r),t(r,"#233f52",[0,.05,0],[.85,.36,1.9]),t(r,"#dedbd0",[0,.22,0],[.8,.23,1.85]);let s=e(r,"#6e5942",[0,.4,-.15],[1.3,.08,2.7]);s.name="boat-deck";let a=e(r,"#3b5355",[0,.57,Jr.seatZ],[.92,.3,.48]);a.name="boat-seat",e(r,"#e7e0d0",[0,.73,.5],[1,.65,.36]);let o=new ot(new qt(1.2,.48,.025),new Ss({color:"#b9e4eb",transparent:!0,opacity:.4,roughness:.1}));o.position.set(0,1.15,.68),r.add(o);let c=new ot(new ei(.2,.026,8,20),n("#2e3538"));c.name="boat-wheel",c.position.set(0,1.05,.28),r.add(c);let l=new At(1,1,1,8),h=new _t(l,n("#d6dedc"),10),d=new xt;h.name="boat-rails";let p=0;for(let _ of[-.68,.68]){for(let T of[.15,.85,1.55])d.position.set(_,.75,T),d.rotation.set(0,0,0),d.scale.set(.025,.5,.025),d.updateMatrix(),h.setMatrixAt(p++,d.matrix);for(let T of[.86,1.01])d.position.set(_,T,.85),d.rotation.set(Math.PI/2,0,0),d.scale.set(.025,1.4,.025),d.updateMatrix(),h.setMatrixAt(p++,d.matrix)}h.castShadow=!0,h.instanceMatrix.needsUpdate=!0,h.computeBoundingSphere(),r.add(h);let f=new Tt({color:"#b7d6d8",emissive:"#31545a",emissiveIntensity:.38,roughness:.28}),g=new _t(new At(.1,.1,.03,16),f,3);g.name="boat-gauges";for(let _=0;_<3;_++)d.position.set((_-1)*.28,.91,.3),d.rotation.set(Math.PI/2,0,0),d.scale.set(_===1?1:.82,_===1?1:.82,1),d.updateMatrix(),g.setMatrixAt(_,d.matrix);g.instanceMatrix.needsUpdate=!0,g.computeBoundingSphere(),r.add(g);let x=t(r,"#d84e46",[-.65,.79,.94],[.075,.075,.075]),m=t(r,"#52b878",[.65,.79,.94],[.075,.075,.075]);x.name="boat-port-light",m.name="boat-starboard-light",x.material=new Tt({color:"#d84e46",emissive:"#b32b25",emissiveIntensity:.9}),m.material=new Tt({color:"#52b878",emissive:"#238547",emissiveIntensity:.9}),e(r,"#303b40",[0,.35,-1.75],[.42,.6,.38]),e(r,"#303b40",[0,-.12,-1.85],[.22,.65,.25]);let u=new ot(new dn(1.5,5),new on({color:"#d0ebe6",transparent:!0,opacity:.25,depthWrite:!1}));return u.rotation.x=-Math.PI/2,u.position.set(0,.03,-3.3),r.add(u),r.userData.boatDetails={rails:10,gauges:3,navigationLights:2},{boat:r,wake:u}}function Iu(i,e){e.add(i.root),i.root.position.set(0,0,Jr.seatZ),i.root.rotation.set(0,0,0),i.rig.rotation.set(0,0,0),i.hips.position.y=Jr.hips;for(let t of i.arms)t.arm.rotation.x=-.85,t.arm.rotation.z=-t.side*.18,t.forearm.rotation.x=-.72;for(let t of i.legs)t.thigh.rotation.x=-1.68,t.calf.rotation.x=1.68,t.shoe.rotation.x=0}var yi=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z);var ii=Array.from({length:5},(i,e)=>({id:e,x:(e-2)*38,z:-80,child:e>2}));function P0(i){return Object.values(dt).filter(e=>yi(e,i.p)<125).sort((e,t)=>yi(e,i.p)-yi(t,i.p))[0]}function D0(i){if(i.interior==="cave")return[{id:"paper",...rt.paper,label:i.paper?i.gun?"supplies":"take-gun":"move-paper"},{id:"cave-exit",...rt.caveExit,label:"leave-cave"}];if(i.interior==="estate")return[{id:"key",...rt.key,label:"take-key"},{id:"stairs",...rt.stairs,label:"cellar"},{id:"estate-exit",...rt.estateExit,label:"leave-estate"}];if(i.interior==="cellar")return[...ii.filter(n=>!i.released.includes(n.id)).map(n=>({...n,id:"cell-"+n.id,label:"free-person"})),{id:"cellar-exit",...rt.cellarExit,label:"upstairs"}];if(i.boat){let n=P0(i);return n?[{...n,id:"dock-"+n.id,label:"dock"}]:[]}let e=dt[i.island],t=[{...e.shore,id:"boat",label:i.released.length===5&&!i.boarded?"board-group":"boat"}];if(i.island==="home"&&t.push({id:"pump",...rt.pump,label:"refuel"}),i.island==="jungle"&&t.push({id:"cave",...rt.cave,label:"enter-cave"},{id:"supply",...rt.supply,label:"supplies"}),i.island==="fortress"&&t.push({id:"estate",...rt.estate,label:"enter-estate"}),["highlands","smugglers","paradise"].includes(i.island)){let n=gc[i.island];t.push({id:"supplies",x:n.x,z:n.z,label:"supplies"})}return t}function Pu(i){return D0(i).filter(e=>yi(e,i.p)<(e.id.startsWith("cell-")?85:e.id.startsWith("dock-")?125:65)).sort((e,t)=>yi(e,i.p)-yi(t,i.p))[0]||null}function L0(i){if(i.complete)return{key:"complete",target:null};if(!i.docked)return{key:"dock-goal",target:dt.home};if(!i.tanked)return{key:"fuel-goal",target:i.boat?dt.home:rt.pump};if(!i.gun)return i.interior==="cave"?{key:i.paper?"gun-goal":"paper-goal",target:rt.paper}:{key:"cave-goal",target:i.boat?dt.jungle:i.island==="jungle"?rt.cave:dt[i.island].shore};if(i.interior==="cave")return{key:"exit-cave-goal",target:rt.caveExit};if(!i.key){if(i.interior==="estate"){let e=i.guards.find(t=>t.id==="boss");return{key:e.hp>0?"boss-goal":"key-goal",target:e.hp>0?e:rt.key}}return{key:"estate-goal",target:i.boat?dt.fortress:i.island==="fortress"?rt.estate:dt[i.island].shore}}return i.released.length<5?i.interior==="cellar"?{key:"people-goal",target:ii.find(e=>!i.released.includes(e.id))}:{key:"cellar-goal",target:i.interior==="estate"?rt.stairs:i.boat?dt.fortress:rt.estate}:i.interior?{key:"escort-goal",target:i.interior==="cellar"?rt.cellarExit:rt.estateExit}:i.boarded?{key:"home-goal",target:i.boat?dt.home:i.island==="home"?dt.home.shore:dt[i.island].shore}:{key:"boat-goal",target:dt.fortress.shore}}function Os(i){let e=L0(i);if(i.boat||i.interior||!e.target)return e;let t=dt[i.island],n=!!xc(i.p.x,i.p.z,i.island);if(e.target===t.shore){if(!n&&yi(i.p,t.land)>65)return{...e,target:t.land}}else if(n&&yi(i.p,t.land)>45)return{...e,target:t.land};return e}function _c(i,e,t,n,r){let s=e.interior?1.8:e.boat?.65:1.3;if(i.fillStyle=e.interior?"#25312d":"#176475",i.fillRect(0,0,t,n),i.save(),i.translate(t/2-e.p.x*s,n/2-e.p.z*s),i.scale(s,s),e.interior){if(i.fillStyle="#6f7568",i.fillRect(-115,-125,230,310),i.strokeStyle="#beb99e",i.lineWidth=8,i.strokeRect(-115,-125,230,310),e.interior==="cave"&&(i.fillStyle="#967756",i.fillRect(-25,-60,50,35),i.fillStyle=e.paper?"#30383a":"#e4d6b8",e.gun||i.fillRect(-17,-55,34,22)),e.interior==="estate"&&(i.fillStyle="#9b7751",i.fillRect(-45,-105,90,25),i.fillStyle="#f0c561",!e.key&&e.guards.find(l=>l.id==="boss").hp===0&&i.fillRect(-5,-65,10,12)),e.interior==="cellar")for(let l of ii)i.strokeStyle="#bac6bf",e.released.includes(l.id)||i.strokeRect(l.x-18,-112,36,80)}else{for(let l of en){o(l,1,"#398b8b",-4*nt),o(l,1,"#d9cba2"),o(l,1,l.biome==="highlands"?"#8f9882":"#759575",18*nt);for(let d=0;d<26;d++){let p=d*2.39996+l.x*.001,f=l.radius*(.36+d%7*.075),g=l.x+Math.sin(p)*f,x=l.z+Math.cos(p)*f;if(!(l.id==="home"&&(Zi({x:g,z:x},l.id,Ji)||qo(g,x)))&&!(l.id==="fortress"&&Math.abs(g-Ut.x)<125&&Math.abs(x-Ut.z)<155)){i.strokeStyle="#365e49",i.lineWidth=5;for(let m=0;m<7;m++){let u=m*Math.PI*2/7;i.beginPath(),i.moveTo(g,x),i.quadraticCurveTo(g+Math.sin(u+.25)*13,x+Math.cos(u+.25)*13,g+Math.sin(u)*25,x+Math.cos(u)*25),i.stroke()}}}i.fillStyle="#fff4cc",i.font="18px system-ui",i.textAlign="center",i.fillText(r(l.id),l.x,l.z-l.radius*.58);let h=dt[l.id];i.strokeStyle="#a2865b",i.lineWidth=h.width,i.beginPath(),i.moveTo(h.land.x,h.land.z),i.lineTo(h.end.x,h.end.z),i.stroke()}for(let l of zs)i.strokeStyle="#b7baa5",i.lineWidth=l.width,i.beginPath(),l.points.forEach((h,d)=>d?i.lineTo(h.x,h.z):i.moveTo(h.x,h.z)),i.stroke();for(let l of Ji)i.fillStyle="#304f43",i.fillRect(l.x-l.w/2+7,l.z-l.d/2+9,l.w,l.d),i.fillStyle=l.color,i.fillRect(l.x-l.w/2,l.z-l.d/2,l.w,l.d),i.fillStyle="#ab7861",i.fillRect(l.x-l.w/2-3,l.z-l.d/2+4,l.w+6,l.d-8),i.strokeStyle="#d4aa83",i.lineWidth=4,i.beginPath(),i.moveTo(l.x-l.w/2,l.z),i.lineTo(l.x+l.w/2,l.z),i.stroke();i.fillStyle="#e0d5b9",i.fillRect(Ut.x-80,Ut.z-80,160,160),i.fillStyle="#352e25",i.fillRect(Ut.x-20,Ut.z+76,40,12),i.fillStyle="#404b40",i.fillRect(rt.cave.x-36,rt.cave.z-30,72,36),i.fillStyle="#d28757",i.fillRect(rt.pump.x-15,rt.pump.z-16,30,32)}for(let l of e.guards)l.area===e.interior&&l.hp>0&&!e.boat&&(l.area||e.island==="fortress")&&c(l,"#d28b76",12);if(e.interior==="cellar")for(let l of ii)e.released.includes(l.id)||c(l,"#d3dcbe",10);let a=Os(e).target;a&&(i.strokeStyle="#f5d281",i.lineWidth=3,i.beginPath(),i.arc(a.x,a.z,20+Math.sin(e.elapsed*3)*3,0,Math.PI*2),i.stroke()),i.save(),i.translate(e.p.x,e.p.z),i.rotate(-e.heading),e.boat?(i.fillStyle="#efe4c9",i.beginPath(),i.moveTo(-18,-32),i.lineTo(18,-32),i.lineTo(22,28),i.lineTo(0,50),i.lineTo(-22,28),i.closePath(),i.fill()):(i.fillStyle="#b6ddd3",i.beginPath(),i.arc(0,0,9,0,Math.PI*2),i.fill()),i.strokeStyle="#fff6c7",i.lineWidth=3,i.beginPath(),i.moveTo(0,6),i.lineTo(0,28),i.stroke(),i.restore(),e.shot&&(i.strokeStyle="#ffeac5",i.lineWidth=2,i.beginPath(),i.moveTo(e.shot.from.x,e.shot.from.z),i.lineTo(e.shot.to.x,e.shot.to.z),i.stroke()),i.restore();function o(l,h,d,p=0){i.fillStyle=d,i.beginPath();for(let f=0;f<=96;f++){let g=f/96*Math.PI*2,x=l.radius*Wr(l,g)*h-p,m=l.x+Math.cos(g)*x,u=l.z+Math.sin(g)*x;f?i.lineTo(m,u):i.moveTo(m,u)}i.closePath(),i.fill()}function c(l,h,d){i.fillStyle=h,i.beginPath(),i.arc(l.x,l.z,d,0,Math.PI*2),i.fill()}}function Du({canvas:i,getState:e,makeHuman:t,onLost:n,rendererFactory:r=s=>new Vr(s)}){let s=r({canvas:i,antialias:!0,powerPreference:"high-performance"}),a=innerWidth<=700;s.setPixelRatio(Math.min(devicePixelRatio||1,a?1.1:1.5)),s.setSize(innerWidth,innerHeight,!1),s.outputColorSpace=Lt,s.toneMapping=Lr,s.shadowMap.enabled=!0,s.shadowMap.type=Dr,s.shadowMap.autoUpdate=!1;let o=new Pi,c=new Ot(68,innerWidth/innerHeight,.04,6e3);o.add(c),o.background=new je("#b9dbe5"),o.fog=new Ii("#b9dbe5",650,2400);let l=new Fi("#d5ecfa","#566143",2),h=new Oi("#fff2d6",2.8);h.castShadow=!0,h.shadow.mapSize.set(a?1024:2048,a?1024:2048),Object.assign(h.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:.1,far:100}),h.shadow.normalBias=.025,o.add(l,h,h.target);let d=Oo(s),p=new Map,f=new Map,g=A=>(p.has(A)||p.set(A,d.forColor(A)||new Tt({color:A,roughness:.85})),p.get(A)),x=(A,P)=>(f.has(A)||f.set(A,P()),f.get(A)),m=(A,P,W,Q=[0,0,0],w=[1,1,1])=>{let D=new ot(P,W);return D.position.set(...Q),D.scale.set(...w),D.castShadow=D.receiveShadow=!0,A.add(D),D},u=(A,P,W,Q)=>m(A,x("box",()=>new qt),g(P),W,Q),_=(A,P,W,Q)=>m(A,x("cylinder",()=>new At(1,1,1,12)),g(P),W,Q),T=(A,P,W,Q)=>m(A,x("sphere",()=>new cn(1,16,12)),g(P),W,Q),y={mat:g,geo:x,mesh:m,cube:u,tube:_,ell:T},I=new Be,C=new Be,F=A=>{let P=new Map;A.updateMatrix();for(let W of[...A.children])if(W.isMesh){W.updateMatrix();let Q=W.geometry.clone().applyMatrix4(W.matrix);P.has(W.material)||P.set(W.material,[]),P.get(W.material).push(Q),A.remove(W)}for(let[W,Q]of P){let w=Xr(Q,!1);Q.forEach(K=>K.dispose());let D=new ot(w,W);D.castShadow=D.receiveShadow=!0,A.add(D)}},N=(A,P)=>{let W=new Set(A.legs.map(Z=>Z.shoe)),Q=0,w=0,D=0;A.root.traverse(Z=>{Z.isMesh&&Q++});let K=Z=>{for(let he of[...Z.children])he.isMesh||K(he);let re=new Map;for(let he of[...Z.children])he.isMesh&&!W.has(he)&&!he.isInstancedMesh&&(re.has(he.material)||re.set(he.material,[]),re.get(he.material).push(he));for(let[he,fe]of re)if(fe.length>1){let ne=fe.map(We=>(We.updateMatrix(),We.geometry.clone().applyMatrix4(We.matrix))),ye=Xr(ne,!1);ne.forEach(We=>We.dispose());let Se=new ot(ye,he);Se.name=`${P}-rigid-batch-${D++}`,Se.castShadow=fe.some(We=>We.castShadow),Se.receiveShadow=fe.some(We=>We.receiveShadow),fe.forEach(We=>Z.remove(We)),Z.add(Se)}};K(A.root),A.root.traverse(Z=>{Z.isMesh&&w++}),A.root.userData.rigidBatchProfile={sourceMeshes:Q,renderMeshes:w,batches:D,animatedShoes:W.size}},b=(A,P,W)=>{let Q=new Be;Q.name="campaign-supply-cache-"+A,Q.position.set(P/nt,On(P,W),W/nt),I.add(Q),u(Q,"#a98961",[0,.34,0],[1.45,.68,.88]),u(Q,"#debb63",[0,.72,0],[1.52,.09,.94]);for(let w of[-.54,.54])u(Q,"#debb63",[w,.35,.46],[.1,.62,.06]);u(Q,"#bd6e4e",[-1.02,.42,.04],[.42,.84,.55]),u(Q,"#394447",[-1.02,.87,.04],[.2,.08,.22]);for(let w of[-1.15,-.89])u(Q,"#394447",[w,.75,.04],[.05,.24,.05]);return u(Q,"#394447",[-1.02,.84,.04],[.26,.05,.05]),u(Q,"#596b4e",[.93,.23,.04],[.72,.46,.58]),u(Q,"#394447",[.93,.48,.04],[.48,.05,.26]),u(Q,"#e2dbc7",[.82,.86,-.03],[.7,.34,.5]),u(Q,"#bd6e4e",[.82,.87,.235],[.34,.08,.025]),u(Q,"#bd6e4e",[.82,.87,.235],[.08,.25,.025]),Q.userData.supplyDetails={crate:!0,fuelCan:!0,medkit:!0,ammoBox:!0},F(Q),Q};o.add(I,C);let M=a?96:192,E=Math.max(...en.map(A=>A.radius)),U=[];for(let A of en){let P=Math.max(a?48:72,Math.round(M*A.radius/E/8)*8),W=pc(A,{segments:P});W.userData.terrainSegments=P,U.push(W),W.scale.set(1/nt,1,1/nt),W.position.set(A.x/nt,0,A.z/nt);let Q=W.geometry.attributes.position;for(let ve=0;ve<Q.count;ve++)Q.setY(ve,$i(A.x+Q.getX(ve),A.z+Q.getZ(ve),A));let w=new Float32Array(Q.count*3),D=new je;for(let ve=0;ve<Q.count;ve++){let qe=Math.hypot(Q.getX(ve),Q.getZ(ve))/A.radius;D.set(qe>.8?"#fff7e4":A.biome==="rocky"?"#d1d4c5":"#dce2c8"),D.toArray(w,ve*3)}W.geometry.setAttribute("color",new Bt(w,3)),W.geometry.computeVertexNormals(),W.material.dispose(),W.material=Ho(d,nt),W.material.vertexColors=!0,I.add(W);let K=dt[A.id],Z=new Be,re=$i(K.land.x,K.land.z);Z.name="pier-"+A.id,Z.position.set(K.land.x/nt,re,K.land.z/nt),Z.rotation.y=Math.atan2(K.ux,K.uz),I.add(Z);let he=Yo(K.end,K.land)/nt,fe=Math.ceil(he/.26),ne=new _t(x("box",()=>new qt),g("#a98961"),fe+1),ye=new xt;ne.name="pier-deck-"+A.id;for(let ve=0;ve<=fe;ve++){let qe=he*ve/fe;ye.position.set(0,(K.deck-re)*ve/fe-.075,qe),ye.scale.set(K.width/nt,.15,he/fe+.006),ye.updateMatrix(),ne.setMatrixAt(ve,ye.matrix)}ne.castShadow=ne.receiveShadow=!0,Z.add(ne);let Se=x("pier-piling",()=>new At(1,1,1,12)),We=new _t(Se,g("#876742"),8);We.name="pier-pilings-"+A.id;let Ge=0;for(let ve of[-.8,.8])for(let qe of[0,he*.33,he*.66,he]){let bt=(K.deck-re)*qe/he;ye.position.set(ve,bt-.65,qe),ye.scale.set(.075,1.6,.075),ye.updateMatrix(),We.setMatrixAt(Ge++,ye.matrix)}We.castShadow=We.receiveShadow=!0,We.instanceMatrix.needsUpdate=!0,We.computeBoundingSphere(),Z.add(We);let Ze=new _t(Se,g("#394447"),8);Ze.name="pier-bollards-"+A.id;let Ae=0;for(let ve of[-.72,.72])for(let qe of[he*.78,he*.98]){let bt=(K.deck-re)*qe/he;ye.position.set(ve,bt+.25,qe),ye.scale.set(.075,.5,.075),ye.updateMatrix(),Ze.setMatrixAt(Ae++,ye.matrix),ye.position.set(ve,bt+.51,qe),ye.scale.set(.13,.08,.13),ye.updateMatrix(),Ze.setMatrixAt(Ae++,ye.matrix)}Ze.castShadow=Ze.receiveShadow=!0,Ze.instanceMatrix.needsUpdate=!0,Ze.computeBoundingSphere(),Z.add(Ze),["paradise","smugglers","highlands"].includes(A.id)&&b(A.id,A.x,A.z)}b("jungle",rt.supply.x,rt.supply.z);let k=Math.max(Zr.maxX-Zr.minX,Zr.maxZ-Zr.minZ)/nt+12e3,L=Vo(en.map(A=>[A.x/nt,A.z/nt,A.radius/nt,A.radius/nt]),{size:k,coastSeeds:en.map(A=>A.coastSeed)});I.add(L.mesh);let z=Go(5e3);I.add(z);let B=Wo(I,en,{scale:nt,height:$i,surfaces:d,small:a,dense:!0,lod:!0,clear:(A,P,W)=>Zi({x:P,z:W},A.id,Ji)||A.id==="home"&&qo(P,W)||A.id==="jungle"&&(Yo({x:P,z:W},rt.cave)<100||Yo({x:P,z:W},rt.supply)<58)||A.id==="fortress"&&Math.abs(P-Ut.x)<125&&Math.abs(W-Ut.z)<155||Yo({x:P,z:W},dt[A.id].land)<90}),$=Xo(I,{scale:nt,height:$i,surfaces:d,helpers:y,village:Ji,paths:zs,marketPoint:Au}),{boat:X,wake:le}=Ru(I,y),ae=new Be;ae.name="harbor-fuel-pump",ae.position.set(rt.pump.x/nt,On(rt.pump.x,rt.pump.z),rt.pump.z/nt),I.add(ae),u(ae,"#a98961",[0,.06,0],[1.05,.12,.92]),u(ae,"#e6d6b8",[0,.68,0],[.75,1.24,.65]),u(ae,"#bd6e4e",[0,1.34,0],[.82,.28,.72]),u(ae,"#263f41",[0,.99,.34],[.48,.25,.045]),u(ae,"#e8d99e",[0,.99,.37],[.31,.1,.018]),_(ae,"#2d3435",[.53,.72,0],[.035,1.18,.035]);let Ee=u(ae,"#394447",[.53,.39,.29],[.1,.24,.08]);Ee.rotation.z=-.22,u(ae,"#bd6e4e",[0,.39,.35],[.3,.1,.055]),_(ae,"#e6d6b8",[0,2.18,-.06],[.055,1.42,.055]);let Ne=_(ae,"#bd6e4e",[0,2.9,-.06],[.42,.1,.42]);Ne.rotation.x=Math.PI/2;let He=_(ae,"#f3dfbe",[0,2.9,.005],[.31,.115,.31]);He.rotation.x=Math.PI/2,ae.userData.fuelDetails={display:!0,hose:!0,nozzle:!0,marker:!0},F(ae);let et=new Be;et.name="campaign-cave-entrance",et.position.set(rt.cave.x/nt,On(rt.cave.x,rt.cave.z),rt.cave.z/nt),I.add(et);let Qe=[[-2,.45,.02,.55,.55,.85,-.12],[-2,1.15,-.02,.58,.7,.95,.08],[-1.9,1.9,.04,.62,.72,.9,-.09],[-1.55,2.55,-.03,.72,.6,.9,.14],[2,.45,-.02,.55,.55,.85,.12],[2,1.15,.03,.58,.7,.95,-.08],[1.9,1.9,-.04,.62,.72,.9,.09],[1.55,2.55,.02,.72,.6,.9,-.14],[-1,2.9,.03,.72,.48,.9,-.1],[-.35,3.05,-.03,.68,.45,.92,.06],[.35,3.05,.02,.68,.45,.92,-.06],[1,2.9,-.02,.72,.48,.9,.1]],Y=new xt,j=new _t(x("cave-mouth-rock",()=>new cn(1,12,8)),g("#92968b"),Qe.length);j.name="cave-entrance-rocks",j.castShadow=!0,j.receiveShadow=!0,Qe.forEach(([A,P,W,Q,w,D,K],Z)=>{Y.position.set(A,P,W),Y.scale.set(Q,w,D),Y.rotation.set(0,0,K),Y.updateMatrix(),j.setMatrixAt(Z,Y.matrix)}),j.instanceMatrix.needsUpdate=!0,j.computeBoundingSphere(),et.add(j),u(et,"#171e19",[0,1.25,-.85],[2.8,2.5,.15]);let ge=new _t(x("cave-torch-handle",()=>new At(1,1,1,7)),g("#4c3525"),2);ge.name="cave-entrance-torches",ge.castShadow=!0;let ke=new Tt({color:"#ffcf75",emissive:"#ff7f32",emissiveIntensity:1.15,roughness:.55}),Pe=new _t(x("cave-torch-flame",()=>new An(1,1,7)),ke,2);Pe.name="cave-entrance-flames",[-1,1].forEach((A,P)=>{Y.position.set(A*1.18,1.15,.18),Y.scale.set(.035,.85,.035),Y.rotation.set(0,0,-A*.15),Y.updateMatrix(),ge.setMatrixAt(P,Y.matrix),Y.position.set(A*1.18,1.65,.18),Y.scale.set(.12,.22,.12),Y.rotation.set(0,0,A*.08),Y.updateMatrix(),Pe.setMatrixAt(P,Y.matrix)}),ge.instanceMatrix.needsUpdate=!0,Pe.instanceMatrix.needsUpdate=!0,ge.computeBoundingSphere(),Pe.computeBoundingSphere(),et.add(ge,Pe),et.userData.entranceDetails={archStones:12,torches:2,clearOpening:!0};let we=new Be;we.name="guarded-estate",we.position.set(Ut.x/nt,.85,Ut.z/nt),I.add(we),u(we,"#e2dbc7",[0,1.55,0],[8,3.1,8]),u(we,"#a68854",[0,3.2,0],[8.6,.25,8.6]),u(we,"#e2dbc7",[0,4.35,-.4],[6.5,2.3,6.5]);for(let A of[-1,1]){let P=u(we,"#ba7655",[A*1.7,5.9,-.4],[3.7,.15,7.4]);P.rotation.z=-A*.3}u(we,"#313f38",[0,1.2,4.03],[1.65,2.4,.08]);for(let A of[-2.7,2.7])for(let P of[1.7,4.3])u(we,"#425761",[A,P,4.04],[1.15,1.3,.06]),u(we,"#e2dbc7",[A,P,4.11],[.08,1.38,.08]),u(we,"#e2dbc7",[A,P,4.11],[1.2,.08,.08]);for(let A of[-1.4,1.4])_(we,"#e2dbc7",[A,1.3,4.65],[.16,2.6,.16]);u(we,"#a68854",[0,2.67,4.65],[3.3,.2,1.4]);for(let A=0;A<3;A++)u(we,"#92968b",[0,-.03+A*.06,4.4+A*.4],[2.6,.15,1.25-A*.25]);for(let A of[-3.4,3.4])for(let P of[1.7,4.3]){u(we,"#587e7c",[A,P,4.07],[.32,1.35,.1]);for(let W=0;W<8;W++)u(we,"#876742",[A,P-.5+W*.14,4.14],[.3,.025,.045])}u(we,"#e2dbc7",[0,3.1,4.55],[8.5,.16,1.25]);for(let A=-10;A<=10;A++)_(we,"#e2dbc7",[A*.39,3.57,5.05],[.033,.83,.033]);u(we,"#e2dbc7",[0,4,5.05],[8.5,.08,.08]);for(let A of[-2.45,2.45]){u(we,"#a98961",[A,.3,4.62],[1.25,.42,.55]);for(let P=-2;P<=2;P++){let W=T(we,P%2?"#6f8f58":"#88a866",[A+P*.2,.67+Math.abs(P)*.025,4.62],[.18,.38,.18]);W.rotation.z=P*.12}}let lt=new Tt({color:"#ffe4a8",emissive:"#ffb85c",emissiveIntensity:.72,roughness:.34});for(let A of[-1.03,1.03]){u(we,"#394447",[A,2.05,4.14],[.08,.1,.24]);let P=T(we,"#ffe4a8",[A,1.88,4.27],[.13,.19,.13]);P.material=lt}let O=_(we,"#d4a957",[0,3.02,4.11],[.38,.1,.38]);O.rotation.x=Math.PI/2,we.userData.estateDetails={planters:2,lanterns:2,crest:!0},F(we),we.userData.cameraBlocker=!0;let ft=[$.buildings,we];ft.forEach(A=>A.updateWorldMatrix(!0,!0));let Je={};function Ye(A,P=11,W=15){let Q=new Be;Q.name=A,C.add(Q),Je[A]=Q,u(Q,A==="cave"?"#777a6b":"#a68854",[0,-.1,1],[P,.2,W]);let w=new Be;w.name=A+"-walls",Q.add(w);for(let K of[-P/2,P/2])u(w,A==="cave"?"#92968b":"#e2dbc7",[K,1.65,1],[.3,3.3,W]);u(w,A==="cave"?"#92968b":"#e2dbc7",[0,1.65,1-W/2],[P,3.3,.3]),F(w),u(Q,"#313f38",[0,1.1,W/2-.2],[1.7,2.2,.15]);let D=new zi(A==="cave"?"#ffd9a0":"#ffeccf",22,18,1.6);return D.position.set(0,2.7,1),Q.add(D),Q.userData.shellDetails={sourceMeshes:5,renderMeshes:3},Q}let Ce=Ye("cave",12,17),yt=x("cave-formation",()=>new An(1,1,9)),De=new _t(yt,g("#777a6b"),16),Ve=new xt;De.name="cave-formations";let It=[[-5.2,-5.4,.34,.92],[-5.2,-1.7,.27,.68],[-5.2,2.1,.38,1.06],[-5.2,5.1,.25,.78],[5.2,-4.1,.31,.84],[5.2,-.3,.39,1.12],[5.2,3.4,.28,.72],[3.6,-6.7,.42,1.18]],pt=0;for(let[A,P,W,Q]of It)Ve.position.set(A,Q/2,P),Ve.rotation.set(0,pt*.71%Math.PI,0),Ve.scale.set(W,Q,W),Ve.updateMatrix(),De.setMatrixAt(pt++,Ve.matrix),Ve.position.set(-A,3.3-Q*.48,P+.55),Ve.rotation.set(0,pt*.53%Math.PI,Math.PI),Ve.scale.set(W*.82,Q*.92,W*.82),Ve.updateMatrix(),De.setMatrixAt(pt++,Ve.matrix);De.castShadow=De.receiveShadow=!0,De.instanceMatrix.needsUpdate=!0,De.computeBoundingSphere(),Ce.add(De),Ce.userData.caveDetails={stalactites:8,stalagmites:8,clearCenter:!0};let R=new Be;R.name="cave-evidence-table",Ce.add(R),u(R,"#a98961",[0,.75,-2],[2,.12,1.2]);for(let A of[-.75,.75])for(let P of[-2.45,-1.55])_(R,"#876742",[A,.35,P],[.065,.7,.065]);for(let A of[-2.47,-1.53])u(R,"#876742",[0,.57,A],[1.72,.2,.07]);u(R,"#876742",[0,.56,-1.38],[.72,.27,.08]),T(R,"#394447",[0,.56,-1.32],[.045,.045,.04]),_(R,"#394447",[.72,.86,-2.18],[.17,.1,.17]);let v=new Tt({color:"#ffe4a8",emissive:"#ff9f45",emissiveIntensity:1.05,roughness:.28,transparent:!0,opacity:.88}),J=T(R,"#ffe4a8",[.72,1.08,-2.18],[.14,.22,.14]);J.material=v,_(R,"#394447",[.72,1.31,-2.18],[.12,.07,.12]),R.userData.evidenceDetails={legs:4,drawer:!0,lantern:!0,newspaper:!0,hiddenGun:!0},F(R);let se=document.createElement("canvas");se.width=256,se.height=320;let ce=se.getContext("2d");ce.fillStyle="#ddd5bd",ce.fillRect(0,0,256,320),ce.fillStyle="#3a3b32",ce.font="bold 26px serif",ce.fillText("ISLAND DAILY",18,38),ce.fillRect(18,51,220,3);for(let A=0;A<20;A++)ce.fillRect(18,72+A*10,94-A%4*6,2),ce.fillRect(128,72+A*10,104-A%3*8,2);let ie=new pi(se);ie.colorSpace=Lt;let Ue=new ot(new dn(.9,1.05),new Tt({map:ie,side:Rt}));Ue.name="cave-newspaper",Ue.rotation.x=-Math.PI/2,Ue.position.set(0,.83,-2),Ce.add(Ue);function xe(A){let P=new Be;A.add(P),u(P,"#333a3d",[0,0,.06],[.12,.12,.34]);let W=u(P,"#695646",[0,-.11,-.03],[.1,.23,.13]);return W.rotation.x=-.22,u(P,"#8b9294",[0,.08,.03],[.11,.035,.3]),P}let Le=xe(Ce);Le.name="cave-hidden-gun",Le.position.set(0,.87,-2),Le.rotation.y=Math.PI/2;let Fe=Ye("estate",11,15),ue=new Be;ue.name="estate-fixtures",Fe.add(ue),u(ue,"#816947",[0,.42,-4.6],[2.6,.85,.9]),u(ue,"#decc9f",[0,.05,1],[3,.025,10]);for(let A=0;A<6;A++)u(ue,"#777a6b",[3.5,.06*A,-4.75+A*.28],[1.7,.12,.65]);ue.userData.batchDetails={sourceMeshes:8,renderMeshes:3},F(ue);let _e=new Be;_e.name="estate-interior-details",Fe.add(_e);let $e=["#6f443d","#40626a","#718052"];for(let[A,P]of[-2.7,0,2.7].entries())u(_e,"#a68854",[P,1.9,-6.31],[1.42,1.22,.08]),u(_e,$e[A],[P,1.9,-6.25],[1.12,.92,.045]);u(_e,"#a68854",[0,.93,-6.29],[8.7,.08,.08]);for(let A of[-4.35,4.35]){u(_e,"#394447",[A,2.02,-6.24],[.1,.32,.1]);let P=T(_e,"#ffe4a8",[A,1.79,-6.15],[.14,.19,.11]);P.material=lt}u(_e,"#394447",[0,.86,-4.58],[1.12,.025,.52]);for(let A of[-.52,0,.52])u(_e,"#d8d2c3",[A,.88,-4.57],[.4,.012,.3]);_(_e,"#394447",[.93,1.08,-4.58],[.035,.42,.035]);let Oe=T(_e,"#ffe4a8",[.93,1.34,-4.58],[.18,.16,.18]);Oe.material=lt,Fe.userData.interiorDetails={portraits:3,sconces:2,documents:3,deskLamp:!0},F(_e);let Te=new ot(new ei(.13,.036,8,16),new Tt({color:"#f8ce60",emissive:"#8c6322",emissiveIntensity:.5}));Te.position.set(0,.88,-3),Fe.add(Te),u(Te,"#debb63",[0,-.2,0],[.065,.32,.065]);let tt=Ye("cellar",11,15),G=[],de=new Be;de.name="cellar-static",tt.add(de);for(let A of ii){let P=new Be;P.name="cell-door-"+A.id,P.position.set(A.x/nt,0,-1.5),tt.add(P),G[A.id]=P;for(let w=-2;w<=2;w++)_(P,"#475759",[w*.32,1.3,0],[.025,2.6,.025]);for(let w of[.1,2.5])u(P,"#475759",[0,w,0],[1.65,.055,.055]);for(let w of[.45,2.15])_(P,"#394447",[-.78,w,.07],[.045,.12,.045]);m(P,x("cell-padlock",()=>new ei(.09,.022,6,12)),g("#a68854"),[.61,1.42,.07]),u(P,"#a68854",[.61,1.27,.07],[.18,.2,.08]),F(P);let W=A.x/nt,Q=["#738b90","#9b796d"][A.id%2];u(de,"#a98961",[W,.18,-4.8],[1.55,.36,.8]),u(de,"#e2dbc7",[W,.4,-4.8],[1.5,.1,.8]),u(de,Q,[W,.47,-4.65],[1.42,.045,.48]),u(de,"#d8d2c3",[W,.5,-5.08],[.64,.1,.24])}for(let A of[-3.8,0,3.8]){u(de,"#394447",[A,2.54,-6.28],[.36,.15,.1]);let P=T(de,"#ffe4a8",[A,2.34,-6.2],[.15,.2,.11]);P.material=lt}tt.userData.cellarDetails={cells:5,hinges:10,padlocks:5,lamps:3,bedding:5},F(de);function Me(A,P,W){let Q=A.hairStyles[P],w=new Set;return Q.name=`${W}-hair-${P}`,Q.visible=!0,Q.traverse(D=>{D.isMesh&&w.add(D)}),A.hairStyles.forEach((D,K)=>{K!==P&&D.removeFromParent()}),A.hairStyles=[Q],A.hairParts=A.hairParts.filter(D=>w.has(D)),A.spear.removeFromParent(),A.raft.removeFromParent(),Object.values(A.props).forEach(D=>D.removeFromParent()),A.spear=A.raft=null,A.props={},A.root.userData.renderProfile={hairVariants:1,unusedToolMeshes:0},N(A,W),A}let Ie=Me(t({shirt:"#577c87",skin:"#ddb08c",hair:"#40362f"},"player",y),0,"campaign-player");Ie.root.name="campaign-player",o.add(Ie.root);let pe=new Map,oe=new Map,ze={gate:{shirt:"#526252",skin:"#c29574",hair:"#302e28",style:0},patrol:{shirt:"#59665a",skin:"#a96f55",hair:"#211f1e",style:1},hall:{shirt:"#4b5958",skin:"#d1a17d",hair:"#5b4032",style:2},boss:{shirt:"#34383a",skin:"#b67d60",hair:"#251f1c",style:1}};for(let A of e().guards){let P=ze[A.id],W=Me(t(P,"guard",y),P.style,"campaign-guard-"+A.id);if(W.root.name="campaign-guard-"+A.id,W.root.userData.guardProfile={boss:A.id==="boss",style:P.style},A.id==="boss"){let Q=new Be;Q.name="campaign-boss-insignia",W.hips.add(Q);for(let D of[-1,1])u(Q,"#d2aa58",[D*.2,.56,.02],[.12,.035,.18]);let w=u(Q,"#8f2f2d",[0,.34,.15],[.055,.52,.025]);w.rotation.z=-.48,W.root.userData.guardProfile.insignia=!0}o.add(W.root),xe(W.arms[1].forearm).position.set(0,-.24,.14),pe.set(A.id,W)}let Ke=[{shirt:"#8da4b1",skin:"#c99370",hair:"#302d2a",style:0,scale:1.02},{shirt:"#b78876",skin:"#e1b894",hair:"#6a4938",style:1,scale:.96},{shirt:"#9caa8c",skin:"#b98264",hair:"#2f2927",style:2,scale:1},{shirt:"#c3b487",skin:"#dca984",hair:"#704936",style:1,scale:.72},{shirt:"#92b2b6",skin:"#e4bb96",hair:"#3f302b",style:2,scale:.76}];for(let A of ii){let P=Ke[A.id],W=Me(t(P,"resident",y),P.style,"campaign-prisoner-"+A.id);W.root.name="campaign-prisoner-"+A.id,W.root.scale.setScalar(P.scale),W.root.userData.residentProfile={child:A.child,style:P.style,scale:P.scale},o.add(W.root),oe.set(A.id,W)}let ut=new Be;c.add(ut),xe(ut).position.set(.26,-.23,-.48);let at=T(ut,"#ddb08c",[.24,-.32,-.4],[.065,.085,.08]),Xt=_(ut,"#577c87",[.22,-.4,-.3],[.085,.24,.085]);Xt.rotation.x=-.5;let Dt=new ot(new ei(.42,.035,8,32),new on({color:"#f3d48a"}));Dt.rotation.x=-Math.PI/2,o.add(Dt);let Nt=new Di(new Mt().setFromPoints([new V,new V]),new fi({color:"#ffe8ad"}));o.add(Nt);let Zt=new Bi,nn=new V,zt={position:new V,target:new V},Ct=0,pn=.05,Jt="first",yn=0,Bn=!0,ri=!1,mn=null,gn,kn=0,sn="",Mi=-1/0,Ki=0,S=e(),H=Os(S).target;H&&(Ct=Math.atan2(S.p.x-H.x,S.p.z-H.z));function ee(A,P,W,Q,w,D){kn++,A.root.position.set(P.x/nt,W,P.z/nt),A.root.rotation.set(0,0,0),A.rig.rotation.y=Q;let K=D*7,Z=w?.24:0;for(let re of A.legs)re.thigh.rotation.x=Math.sin(K+(re.side<0?Math.PI:0))*Z,re.calf.rotation.x=Math.max(0,-Math.sin(K+(re.side<0?Math.PI:0)))*Z,re.shoe.rotation.x=-re.calf.rotation.x*.6;for(let re of A.arms)re.arm.rotation.x=w?Math.sin(K+(re.side<0?0:Math.PI))*.25:0,re.arm.rotation.z=0,re.forearm.rotation.x=-.18;A.hips.position.y=.87+(w?Math.cos(K*2)*.009:0)}function te(A){if(!Bn||ri)return;let P=e(),W=A/1e3;yn=A,kn=0,d.update(),z.material.uniforms.uTime.value=W;let Q=P.interior;I.visible=!Q,C.visible=!!Q;for(let[Ge,Ze]of Object.entries(Je))Ze.visible=Ge===Q;o.background.set(Q?"#202c29":"#b9dbe5"),o.fog.color.copy(o.background),l.intensity=Q?.65:2,h.intensity=Q?.15:2.8;let w=Q?0:On(P.p.x,P.p.z);Ie.root.visible=!P.boat||Jt==="third",P.boat||(o.add(Ie.root),ee(Ie,P.p,w,P.heading,P.walking,W)),Ie.rig.visible=Jt==="third",X.position.set((P.boat?P.p.x:dt[P.boatAt].x)/nt,.02,(P.boat?P.p.z:dt[P.boatAt].z)/nt),X.rotation.y=P.boat?P.heading:Math.atan2(dt[P.boatAt].ux,dt[P.boatAt].uz),X.rotation.z=P.boat?Math.sin(W*2)*.015:0,le.visible=P.boat&&P.walking,P.boat&&Iu(Ie,X),Ue.visible=!P.paper,Le.visible=P.paper&&!P.gun,Te.visible=!P.key&&P.guards.find(Ge=>Ge.id==="boss").hp===0,Te.rotation.y=W,G.forEach((Ge,Ze)=>Ge.visible=!P.released.includes(Ze));let D=!1;for(let Ge of P.guards){let Ze=pe.get(Ge.id),Ae=Ge.area===Q&&!P.boat&&(!Ge.area||P.island==="fortress");if(Ze.root.visible=Ae,!Ae)continue;let ve=Ge.x-P.p.x,qe=Ge.z-P.p.z,bt=Ge.hp>0&&ve*ve+qe*qe<44100;D||(D=bt),ee(Ze,Ge,Ge.area?0:On(Ge.x,Ge.z),Math.atan2(P.p.x-Ge.x,P.p.z-Ge.z),bt,W),Ge.hp<=0?(Ze.rig.rotation.x=-Math.PI/2,Ze.root.position.y+=Ge.area?0:.15,Ze.root.scale.setScalar(.8)):(Ze.rig.rotation.x=0,Ze.arms[1].arm.rotation.x=-1.05,Ze.arms[1].forearm.rotation.x=-.35)}for(let Ge of ii){let Ze=oe.get(Ge.id),Ae=P.released.includes(Ge.id),ve=P.boarded?!1:Ae?!P.boat&&(Q==="estate"||Q==="cellar"||P.island==="fortress"):Q==="cellar";if(Ze.root.visible=ve,!ve)continue;let qe=Ae?{x:P.p.x-Math.sin(P.heading)*(35+Ge.id*15)+Math.cos(P.heading)*(Ge.id%2?16:-16),z:P.p.z-Math.cos(P.heading)*(35+Ge.id*15)-Math.sin(P.heading)*(Ge.id%2?16:-16)}:Ge;ee(Ze,qe,Q?0:On(qe.x,qe.z),P.heading,Ae&&P.walking,W+Ge.id*.18)}let K=Os(P).target,Z=Pu(P),re=Z||K;Dt.visible=!!re,re&&Dt.position.set(re.x/nt,(Q?0:On(re.x,re.z))+.08,re.z/nt),Dt.scale.setScalar(1+Math.sin(W*3)*.1),ut.visible=P.gun&&!P.boat&&Jt==="first",ut.position.z=P.shot?.025:0;let he=P.boat?.02+Jr.eye-1.64:w,fe=P.boat?Jr.seatZ:0,ne=Bo({x:P.p.x/nt+Math.sin(P.heading)*fe,z:P.p.z/nt+Math.cos(P.heading)*fe,surface:he,yaw:Ct,pitch:pn,mode:Jt,distance:P.boat?7.5:4.6},zt);if(Q&&Jt==="third"&&(ne.position.x=Ls.clamp(ne.position.x,-5.1,5.1),ne.position.z=Ls.clamp(ne.position.z,-5,8.1)),!Q&&Jt==="third"){nn.subVectors(ne.position,ne.target);let Ge=nn.length();nn.normalize(),Zt.set(ne.target,nn),Zt.far=Ge;let Ze=Zt.intersectObjects(ft,!0).find(Ae=>Ae.distance>.2);Ze&&ne.position.copy(ne.target).addScaledVector(nn,Math.max(.35,Ze.distance-.22)),ne.position.y=Math.max(ne.position.y,On(ne.position.x*nt,ne.position.z*nt)+.24)}c.position.copy(ne.position),c.lookAt(ne.target),B.update(c.position),ko(h,P.p.x/nt,P.p.z/nt,{height:25});let ye=!P.paused&&(P.walking||P.boat||D),Se=[Q||"",P.island,P.boat?1:0,Math.round(P.p.x/20),Math.round(P.p.z/20),Math.round(P.heading*12),P.guards.map(Ge=>Ge.hp>0?1:0).join(""),P.released.join(","),P.boarded?1:0,ye?1:0].join("|"),We=Se!==sn||ye&&A-Mi>=1e3/30;if(s.shadowMap.needsUpdate=We,We&&(sn=Se,Mi=A,Ki++),L.update(W,c.position),z.position.copy(c.position),Nt.visible=!!P.shot,P.shot){let Ge=w+1.35,Ze=P.shot.from,Ae=P.shot.to;Nt.geometry.setFromPoints([new V(Ze.x/nt,Ge,Ze.z/nt),new V(Ae.x/nt,Ge,Ae.z/nt)])}gn!==Q&&(gn=Q,Q?Ct=0:K&&(Ct=Math.atan2(P.p.x-K.x,P.p.z-K.z))),s.render(o,c)}function q(){c.aspect=innerWidth/innerHeight,c.updateProjectionMatrix(),s.setSize(innerWidth,innerHeight,!1)}function me(A,P=0){e().paused||(Ct+=A,pn=Ls.clamp(pn+P,Jt==="first"?-.95:-.05,.75))}i.addEventListener("pointerdown",A=>{e().paused||A.button!==0||(mn={id:A.pointerId,x:A.clientX,y:A.clientY},i.setPointerCapture(A.pointerId))}),i.addEventListener("pointermove",A=>{mn?.id===A.pointerId&&(me(-(A.clientX-mn.x)*.006,(A.clientY-mn.y)*.005),mn.x=A.clientX,mn.y=A.clientY)});for(let A of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(A,()=>mn=null);return i.addEventListener("webglcontextlost",A=>{A.preventDefault(),ri=!0,Bn=!1,n?.()}),{frame:te,resize:q,orbit:me,setCamera(A){Jt=A==="first"?"first":"third",pn=Jt==="first"?.05:.22},get cameraMode(){return Jt},get enabled(){return Bn&&!ri},vector:(A,P)=>({x:A*Math.cos(Ct)+P*Math.sin(Ct),z:-A*Math.sin(Ct)+P*Math.cos(Ct)}),aim:()=>Ct+Math.PI,setEnabled(A){Bn=!!A&&!ri},stats:()=>({calls:s.info.render.calls,triangles:s.info.render.triangles,eye:c.position.toArray(),camera:Jt,cameraBlockers:ft.length,palmBatches:B.treeBatches.length,largestPalmBatch:Math.max(...B.treeBatches.map(A=>A.count)),posedCharacters:kn,palmLodDistanceChecks:B.treeBatches.length+B.foliageBatches.length,palmTrunkTriangles:B.treeBatches.reduce((A,P)=>A+P.count*P.geometry.index.count/3,0),unshadowedPalmTrunkTriangles:B.treeBatches.filter(A=>!A.receiveShadow).reduce((A,P)=>A+P.count*P.geometry.index.count/3,0),palmCrownTriangles:B.foliageBatches.reduce((A,P)=>A+P.count*P.geometry.index.count/3,0),lowDetailPalmBatches:B.treeBatches.filter(A=>A.userData.lod.level==="low").length,terrainTriangles:U.reduce((A,P)=>A+P.geometry.index.count/3,0),shadowUpdates:Ki}),dispose(){s.dispose(),d.dispose();let A=new Set([...f.values(),...B.lodGeometries]),P=new Set(p.values());o.traverse(W=>{if(W.geometry&&A.add(W.geometry),W.material)for(let Q of Array.isArray(W.material)?W.material:[W.material])P.add(Q)}),A.forEach(W=>W.dispose()),P.forEach(W=>W.dispose()),ie.dispose()}}}function Yo(i,e){return Math.hypot(i.x-e.x,i.z-e.z)}function U0(i){return Du({...i,makeHuman:Mc})}var be=80,Lu=[[1750,1300,1540,970],[3380,500,520,310],[4100,2400,390,290]],vi=(i,e,t)=>Math.max(e,Math.min(t,i)),N0=i=>(i=vi(i,0,1),i*i*(3-2*i)),F0=(i,e)=>Math.atan2(Math.sin(e-i),Math.cos(e-i));function tn(i,e){let t=i*be,n=e*be,r=-1;for(let[a,o,c,l]of Lu)r=Math.max(r,1-Math.hypot((t-a)/c,(n-o)/l));return r<=0?-.32:.015+N0(r/.17)*(.25+.28*(1+Math.sin(i*.23+1.3)*Math.cos(e*.27))+.12*Math.sin(i*.7)*Math.sin(e*.6))}function Uu(i,e,t){return{x:i*Math.cos(t)+e*Math.sin(t),y:-i*Math.sin(t)+e*Math.cos(t)}}function Nu(i,e,t=75){let n,r=t*t;for(let s of i||[]){let a=s.x-e.x,o=s.y-e.y,c=a*a+o*o;c<r&&(n=s,r=c)}return n}function Fu(i,e){let r=vi(Math.hypot(i,e),.08,.855);return{hip:-Math.atan2(e,-i)-Math.acos(vi((.43*.43+r*r-.43*.43)/(2*.43*r),-1,1)),knee:Math.PI-Math.acos(vi((.43*.43+.43*.43-r*r)/(2*.43*.43),-1,1))}}function vc(i){return i?Math.max(...[-1,0,1].flatMap(e=>[-1,0,1].map(t=>{let n=i.point(e*i.width/2,t*i.depth/2);return tn(n.x/be,n.y/be)}))):0}function yc(i,e,t,n=vc(t)){let r=tn(i,e);if(!t)return r;let s=t.floor;if(Math.abs(i*be-s.x)<=s.w/2&&Math.abs(e*be-s.y)<=s.h/2)return Math.max(r,n+.16);let a=i*be-t.center.x,o=e*be-t.center.y,c=a*t.fy-o*t.fx,l=a*t.fx+o*t.fy;return Math.abs(c)<t.door/2&&l>t.depth/2&&l<t.depth/2+64?r+(Math.max(r,n+.16)-r)*(1-(l-t.depth/2)/64):r}function zu(i,e,t={}){let n=(p,f,g,x,m)=>{let u=new ot(m,new Tt({color:f}));return u.position.set(...g),u.scale.set(...x),p.add(u),u},r=t.cube||((p,f,g,x)=>n(p,f,g,x,new qt(1,1,1))),s=t.tube||((p,f,g,x)=>n(p,f,g,x,new At(1,1,1,10))),a=new Be,o=i.width/be,c=i.depth/be,l=i.wallHeight/be,h=i.roofRidge/be,d=i.door/be;a.name="base",a.position.set(i.center.x/be,e,i.center.y/be),a.rotation.y=i.yaw,r(a,"#a68854",[0,.08,0],[o,.16,c]).name="floor";for(let p of[-o/2+.1,o/2-.1])for(let f of[-c/2+.1,c/2-.1])s(a,"#876742",[p,l/2,f],[.075,l,.075]).name="post";for(let p of[-1,1]){let f=r(a,"#ba7655",[p*o/4,(l+h)/2,0],[Math.hypot(o/2+.2,h-l),.1,c+.36]);f.rotation.z=-p*Math.atan2(h-l,o/2+.2),f.name="roof"}for(let p of i.walls){let f=p.x-i.center.x,g=p.y-i.center.y,x=(f*i.fy-g*i.fx)/be,m=(f*i.fx+g*i.fy)/be;r(a,"#e2dbc7",[x,l/2,m],[i.fy?p.w/be:p.h/be,l,i.fy?p.h/be:p.w/be]).name="wall"}if(i.walls.length>=5){let p=i.doorHeight/be;r(a,"#845f3f",[0,(l+p)/2,c/2],[d,l-p,.125]).name="lintel"}for(let p of i.beds){let f=p.x-i.center.x,g=p.y-i.center.y,x=(f*i.fy-g*i.fx)/be,m=(f*i.fx+g*i.fy)/be;r(a,"#7d654b",[x,.17,m],[.65,.34,1.125]).name="bed",r(a,"#cec6a0",[x,.38,m],[.65,.14,1.125]),r(a,"#ede3bd",[x,.49,m-.35],[.5,.09,.26])}return a}function Ou(i,e,{cube:t,tube:n,ell:r}){if(i==="gather"&&(n(e,"#8c6944",[0,-.12,.15],[.025,.48,.025]),t(e,"#8e9891",[0,.1,.15],[.27,.1,.075])),i==="fish"){let s=n(e,"#b2915b",[0,.22,.25],[.014,1.25,.014]);s.rotation.x=-.6;let a=n(e,"#d0e6df",[0,.37,.75],[.003,.62,.003]);a.rotation.x=.6}if(i==="cook"){let s=n(e,"#80613d",[0,-.12,.18],[.016,.5,.016]);s.rotation.x=-.6,r(e,"#bb9457",[0,-.26,.3],[.07,.04,.14])}}function Mc(i={},e="player",t={}){let n=new Map,r=new Map,s=t.mat||(L=>(n.has(L)||n.set(L,new Tt({color:L})),n.get(L))),a=t.geo||((L,z)=>(r.has(L)||r.set(L,z()),r.get(L))),o=t.mesh||((L,z,B,$=[0,0,0],X=[1,1,1])=>{let le=new ot(z,B);return le.position.set(...$),le.scale.set(...X),L.add(le),le}),c=t.ell||((L,z,B,$)=>o(L,a("ball",()=>new cn(1,14,10)),s(z),B,$)),l=t.cube||((L,z,B,$)=>o(L,a("box",()=>new qt(1,1,1)),s(z),B,$)),h=t.tube||((L,z,B,$)=>o(L,a("cyl",()=>new At(1,1,1,10)),s(z),B,$)),d=new Be,p=new Be;d.add(p);let f=i.skin||"#dda879",g=i.hair||"#43332b",x=i.shirt||"#4c9cba",m=new Be;m.position.y=.87,p.add(m),c(m,"#3f4d4f",[0,.05,0],[.22,.17,.13]);let u=a("human-torso",()=>new bs([new Xe(.16,.13),new Xe(.205,.2),new Xe(.215,.38),new Xe(.25,.49),new Xe(.26,.52),new Xe(.19,.57),new Xe(.09,.64)],18));o(m,u,s(x),[0,0,0],[1,1,.66]);for(let L of[-1,1]){let z=l(m,x,[L*.065,.6,.071],[.085,.075,.024]);z.rotation.z=-L*.3,l(m,x,[L*.11,.37,.142],[.105,.09,.022])}for(let L=0;L<4;L++)c(m,"#d7d5c2",[0,.24+L*.075,.15],[.009,.01,.005]);e==="guard"&&l(m,"#39483f",[0,.35,.11],[.34,.36,.09]),l(m,"#3b4c48",[0,.135,-.01],[.4,.045,.255]),h(m,f,[0,.64,0],[.064,.13,.064]);let _=new Be;_.position.y=.79,m.add(_),c(_,f,[0,0,0],[.135,.175,.133]),c(_,f,[-.137,-.005,0],[.025,.048,.025]),c(_,f,[.137,-.005,0],[.025,.048,.025]),c(_,f,[0,-.015,.136],[.026,.033,.036]);for(let L of[-1,1])c(_,"#f6f3df",[L*.052,.02,.115],[.03,.017,.014]),c(_,"#31433e",[L*.053,.02,.128],[.012,.013,.007]),l(_,g,[L*.052,.061,.11],[.062,.01,.014]);l(_,"#af735b",[0,-.071,.117],[.051,.009,.012]);let T=a("hair",()=>new cn(1,16,10,0,Math.PI*2,0,Math.PI*.56));o(_,T,s(e==="nela"?"#8d4931":g),[0,.015,-.015],[.145,.18,.143]);let y=[new Be,new Be,new Be];y.forEach(L=>_.add(L));let I=_.children.find(L=>L.isMesh&&L.geometry===T);_.remove(I),y[0].add(I),o(y[1],T,s(g),[0,.015,-.015],[.145,.18,.143]),c(y[1],g,[0,-.04,-.17],[.072,.14,.08]);for(let L=0;L<12;L++){let z=L*Math.PI*2/12;c(y[2],g,[Math.sin(z)*.1,.1+L%2*.018,Math.cos(z)*.1-.015],[.066,.067,.066])}if(c(y[2],g,[0,.15,-.015],[.09,.054,.09]),e==="nela"&&c(_,"#8d4931",[0,-.045,-.145],[.125,.21,.07]),y.forEach((L,z)=>L.visible=z===(i.style||0)),e==="leon")h(_,"#c5a775",[0,.15,0],[.16,.12,.16]),h(_,"#c5a775",[0,.095,0],[.22,.028,.22]),l(m,"#e4cda1",[0,.23,.145],[.33,.42,.025]);else if(e==="player"){c(m,"#5d735b",[0,.36,-.17],[.18,.22,.09]);for(let L of[-1,1])l(m,"#b6caa4",[L*.17,.38,-.04],[.034,.35,.029])}let C=[],F=[];for(let L of[-1,1]){let z=new Be;z.position.set(L*.27,.54,0),m.add(z);let B=c(z,x,[-L*.018,-.025,0],[.105,.13,.11]);B.name="human-shoulder",o(z,a("human-upper-arm",()=>new At(.068,.086,.19,12)),s(x),[0,-.105,0]),o(z,a("human-lower-upper-arm",()=>new At(.055,.064,.15,12)),s(f),[0,-.24,0]);let $=new Be;$.position.y=-.31,z.add($);let X=c($,f,[0,0,0],[.061,.063,.061]);X.name="human-elbow",o($,a("human-forearm",()=>new At(.057,.04,.26,12)),s(f),[0,-.13,0]),c($,f,[0,-.28,0],[.06,.082,.046]),C.push({arm:z,forearm:$,side:L});let le=new Be;le.position.set(L*.115,0,0),m.add(le),o(le,a("human-thigh",()=>new At(.092,.108,.42,12)),s("#52625f"),[0,-.21,0]);let ae=new Be;ae.position.y=-.43,le.add(ae);let Ee=c(ae,"#52625f",[0,0,.014],[.079,.074,.075]);Ee.name="human-knee",o(ae,a("human-calf",()=>new At(.069,.046,.36,12)),s("#52625f"),[0,-.18,0]);let Ne=c(ae,"#52625f",[0,-.36,0],[.052,.06,.052]);Ne.name="human-ankle";let He=c(ae,"#4b3b2e",[0,-.395,.055],[.075,.052,.14]);F.push({thigh:le,calf:ae,shoe:He,side:L})}let N=new Be;h(N,"#8c6944",[0,.56,0],[.018,1.75,.018]),c(N,"#dad9c5",[0,1.45,0],[.045,.15,.03]),N.position.set(.35,.2,.08),p.add(N),N.visible=!1;let b={};for(let L of["gather","fish","cook"]){let z=new Be;Ou(L,z,{cube:l,tube:h,ell:c}),z.position.set(0,-.28,0),C[1].forearm.add(z),z.visible=!1,b[L]=z}let M=new Be;d.add(M);for(let L=0;L<5;L++){let z=h(M,"#a17d48",[(L-2)*.25,.08,0],[.115,1.7,.115]);z.rotation.x=Math.PI/2}for(let L of[-.5,.5])l(M,"#6e5937",[0,.19,L],[1.24,.05,.1]);M.visible=!1;let E=[],U=[],k=[];return p.traverse(L=>{L.isMesh&&(L.material===s(x)&&E.push(L),L.material===s(f)&&U.push(L),L.material===s(g)&&k.push(L))}),{root:d,rig:p,hips:m,head:_,arms:C,legs:F,spear:N,raft:M,shirtParts:E,skinParts:U,hairParts:k,hairStyles:y,props:b,yaw:0,lastX:null,lastZ:null,phase:0}}function Bu(i,e){let t=e&&xu(e.kind,e.phase);i.rig.rotation.x=t?.bend||0;for(let[n,r]of Object.entries(i.props))r.visible=!!t&&e.kind===n;if(t)for(let n of i.arms)n.arm.rotation.x=n.side<0?t.left:t.right,n.forearm.rotation.x=-.25,n.arm.rotation.z=-n.side*.08+((n.side>0||e.kind==="cheer")&&t.wave||0)}function ku(i,e,t){let n=i.phase||0,r=i.x+Math.sin(e*.65+n)*14,s=i.y+Math.cos(e*.65+n)*14;return t(r,s)?{x:r/be,z:s/be,y:.055+Math.sin(e*3+n)*.008,yaw:Math.atan2(Math.cos(e*.65+n),-Math.sin(e*.65+n))}:null}function z0({canvas:i,terrain:e,getState:t,onLost:n}){let r=new Vr({canvas:i,antialias:!0,powerPreference:"high-performance"}),s=innerWidth<=700;r.setPixelRatio(Math.min(devicePixelRatio||1,s?1.25:1.6)),r.setSize(innerWidth,innerHeight,!1),r.outputColorSpace=Lt,r.toneMapping=Lr,r.toneMappingExposure=.94,r.shadowMap.enabled=!0,r.shadowMap.type=Dr;let a=new Pi;a.background=new je("#c5dbe5"),a.fog=new Ii("#c5dbe5",70,240);let o=new Ot(72,innerWidth/innerHeight,.04,350);a.add(o);let c=new Fi("#c9e3ff","#71694d",1.85);a.add(c);let l=new Oi("#fff0d2",3.1);l.castShadow=!0,l.shadow.mapSize.set(s?1024:2048,s?1024:2048),l.shadow.camera.left=-16,l.shadow.camera.right=16,l.shadow.camera.top=16,l.shadow.camera.bottom=-16,l.shadow.camera.near=.5,l.shadow.camera.far=65,l.shadow.bias=-12e-5,l.shadow.normalBias=.012,a.add(l,l.target);let h=Oo(r),d=new Map,p=new Map;function f(w,D={}){if(!Object.keys(D).length){let Z=h.forColor(w);if(Z)return Z}let K=w+JSON.stringify(D);return d.has(K)||d.set(K,new Tt({color:w,roughness:.86,...D})),d.get(K)}function g(w,D){return p.has(w)||p.set(w,D()),p.get(w)}function x(){return g("ball",()=>new cn(1,14,10))}function m(){return g("box",()=>new qt(1,1,1))}function u(){return g("cyl",()=>new At(1,1,1,10))}function _(w,D,K,Z=[0,0,0],re=[1,1,1],he=!0){let fe=new ot(D,K);return fe.position.set(...Z),fe.scale.set(...re),fe.castShadow=he,fe.receiveShadow=!0,w.add(fe),fe}function T(w,D,K,Z){return _(w,x(),f(D),K,Z)}function y(w,D,K,Z){return _(w,m(),f(D),K,Z)}function I(w,D,K,Z){return _(w,u(),f(D),K,Z)}let C=new xt,F=new dn(4600/be,2900/be,230,145);F.rotateX(-Math.PI/2),F.translate(2300/be,0,1450/be);let N=F.attributes.position;for(let w=0;w<N.count;w++)N.setY(w,tn(N.getX(w),N.getZ(w)));F.computeVertexNormals();let b=_u(e),M=new pi(b);M.anisotropy=Math.min(4,r.capabilities.getMaxAnisotropy());let E=h.ground(M),U=new ot(F,E);U.receiveShadow=!0,a.add(U);let k=bu({segments:s?24:48}),L=40;k.scale.set(1/L,1,1/L),k.position.x=6500/be;for(let w of k.children)w.material.dispose(),w.material=Ho(h,L),w.geometry.setAttribute("color",new it(new Float32Array(w.geometry.attributes.position.count*3).fill(1),3));let z=new Be;z.scale.set(L,1,L),k.add(z);let B=(w,D)=>{let K=Mu(w,D);return K?Yi(K,w,D):-.32};Wo(z,Pn,{scale:L,height:B,surfaces:h,small:s,clear:(w,D,K)=>Zi({x:D,z:K},w.id)||w.id==="home"&&(Math.abs(K-40)<55||Math.abs(D-23)<45)}),Xo(z,{scale:L,height:B,surfaces:h,helpers:{cube:y,tube:I,ell:T}}),a.add(k);let $=yu(a,tn,be,b,s),X=Vo([...Lu.map(([w,D,K,Z])=>[w/be,D/be,K/be,Z/be]),...Pn.map(w=>[k.position.x+w.x/L,w.z/L,w.radius*.955/L,w.radius*.955/L])]);a.add(X.mesh);let le=Go(320);a.add(le);function ae(){let w=[],D=[],K=[],Z=(he,fe,ne,ye)=>{let Se=fe*2.05,We=Math.sin(fe*Math.PI)*.46-fe*fe*.8;return[Math.sin(he)*Se+Math.cos(he)*ye*ne,We-ye*.22,Math.cos(he)*Se-Math.sin(he)*ye*ne]};for(let he=0;he<11;he++){let fe=he*Math.PI*2/11;for(let ne=1;ne<17;ne++)for(let ye of[-1,1]){let Se=ne/18,We=Math.sin(Se*Math.PI)*.42,Ge=w.length/3;w.push(...Z(fe,Se-.023,ye,.015),...Z(fe,Se-.085,ye,We),...Z(fe,Se+.038,ye,We*.88),...Z(fe,Se+.025,ye,.015)),K.push(Se,0,Se,.9,Se+.03,1,Se+.03,0),D.push(Ge,Ge+1,Ge+2,Ge,Ge+2,Ge+3)}}let re=new Mt;return re.setAttribute("position",new it(w,3)),re.setAttribute("uv",new it(K,2)),re.setIndex(D),re.computeVertexNormals(),re}let Ee=new At(.085,.16,4.35,14,12);Ee.translate(0,2.175,0);for(let w=0;w<Ee.attributes.position.count;w++){let D=Ee.attributes.position;D.setX(w,D.getX(w)+.16*(D.getY(w)/4.35)**2)}Ee.computeVertexNormals();let Ne=f("#9d7750",{bumpMap:h.textures.get("rock"),bumpScale:.025});Ne.onBeforeCompile=w=>{w.vertexShader=w.vertexShader.replace("#include <common>",`#include <common>
varying float vTrunkY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vTrunkY=position.y;`),w.fragmentShader=w.fragmentShader.replace("#include <common>",`#include <common>
varying float vTrunkY;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=.80+.20*smoothstep(.1,.25,fract(vTrunkY*7.));`)};let He=ae(),et=h.surface("leaf","#ffffff",1,.018).clone();et.side=Rt;let Qe={value:0};et.onBeforeCompile=w=>{w.uniforms.uWind=Qe,w.vertexShader=w.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.y+=sin(uWind+position.x*2.0+position.z)*length(position.xz)*.018;`)};let Y={tree:new _t(Ee,Ne,400),leaves:new _t(He,et,400),rock:new _t(new Li(1,2),f("#92968b"),400),food:new _t(x(),f("#7a5638"),400),shell:new _t(new cn(1,12,6,0,Math.PI),f("#f1d0b7"),400)};for(let w of Object.values(Y))w.count=0,w.castShadow=!0,w.receiveShadow=!0,w.frustumCulled=!1,a.add(w);function j(w,D){let K={tree:0,leaves:0,rock:0,food:0,shell:0};for(let Z of w){let re=Z.x/be,he=Z.y/be,fe=tn(re,he),ne=Z.phase||0;if(Z.t==="tree"){let ye=.84+.17*Math.sin(Z.x*.033+Z.y*.027),Se=1.35+.28*Math.cos(ne);C.position.set(re,fe,he),C.rotation.set(.03*Math.sin(ne),ne,.04*Math.cos(ne)),C.scale.set(ye,Se,ye),C.updateMatrix(),Y.tree.setMatrixAt(K.tree++,C.matrix),C.position.set(re+.16*ye*Math.cos(ne),fe+4.3*Se,he-.16*ye*Math.sin(ne)),C.rotation.set(Math.sin(D*.7+ne)*.025,ne,Math.cos(D*.6+ne)*.025),C.scale.set(ye,ye,ye),C.updateMatrix(),Y.leaves.setMatrixAt(K.leaves++,C.matrix)}else Y[Z.t]&&(C.position.set(re,fe+(Z.t==="rock"?.23:Z.t==="food"?.13:.025),he),C.rotation.set(0,ne,0),C.scale.set(...Z.t==="rock"?[.34+.18*Math.abs(Math.sin(ne)),.3,.4]:Z.t==="food"?[.15,.13,.15]:[.12,.04,.14]),C.updateMatrix(),Y[Z.t].setMatrixAt(K[Z.t]++,C.matrix))}for(let[Z,re]of Object.entries(Y))re.count=K[Z],re.instanceMatrix.needsUpdate=!0}function ge(w,D="#ffe9b5"){let K=document.createElement("canvas");K.width=512,K.height=96;let Z=K.getContext("2d");Z.fillStyle="#123e43",Z.beginPath(),Z.roundRect(6,10,500,76,25),Z.fill(),Z.fillStyle=D,Z.font="700 29px system-ui",Z.textAlign="center",Z.textBaseline="middle",Z.fillText(String(w).slice(0,45),256,48,480);let re=new pi(K);re.colorSpace=Lt;let he=new ys(new Ar({map:re,depthTest:!0,transparent:!0}));return he.scale.set(2.45,.46,1),he.position.y=2.32,he}let ke=["#4c9cba","#df8168","#9974c7","#76b677"];function Pe(w={},D="player",K=""){let Z=Mc(w,D,{ell:T,cube:y,tube:I,mesh:_,mat:f,geo:g});return a.add(Z.root),Z.name=K,Z.tag=null,K&&(Z.tag=ge(K,w.shirt),Z.root.add(Z.tag)),Z}let we=Pe(zo()),lt=new Map,O=Pe({skin:"#d1a074",shirt:"#b49966"},"leon","LEON \xB7 HANDEL"),ft=Pe({skin:"#edc39a",shirt:"#609991"},"nela","NELA \xB7 ZADANIA");function Je(w,D,K){!D||D===w.name||(w.tag&&(w.root.remove(w.tag),w.tag.material.map.dispose(),w.tag.material.dispose()),w.name=D,w.tag=ge(D,K),w.root.add(w.tag))}function Ye(w,D){if(w.lookKey!==JSON.stringify(D)){w.lookKey=JSON.stringify(D);for(let K of w.shirtParts)K.material=f(D.shirt||"#4c9cba");for(let K of w.skinParts)K.material=f(D.skin||"#dda879");for(let K of w.hairParts)K.material=f(D.hair||"#43332b");w.hairStyles.forEach((K,Z)=>K.visible=Z===(D.style||0))}}let Ce=null,yt=0;function De(w,D,K,Z,re,he,fe,ne){let ye=D.x/be,Se=D.y/be,We=ne.sea(D.x,D.y),Ge=We?0:yc(ye,Se,Ce,yt);w.root.position.set(ye,Ge+(We?ne.raft?.18:-.95:0),Se),w.yaw+=F0(w.yaw,K)*Math.min(1,he*12),w.rig.rotation.y=w.yaw;let Ze=Z&&fe>.05;w.phase+=Ze?he*(fe>4?10:7):0;let Ae=Ze?fe>4?.31:.22:0,ve=w.phase;w.hips.position.y=(Ze?.9:.92)+(Ze?Math.cos(ve*2)*.012:Math.sin(re*1.7)*.004);for(let qe of w.legs){let bt=ve+(qe.side<0?Math.PI:0),Pt=Math.sin(bt)*Ae,Gt=Ze?Math.max(0,Math.cos(bt))*.105:0,$r=ye+Math.cos(w.yaw)*qe.side*.115+Math.sin(w.yaw)*Pt,Vn=Se-Math.sin(w.yaw)*qe.side*.115+Math.cos(w.yaw)*Pt,Vu=We?0:yc($r,Vn,Ce,yt)-Ge,Bs=Fu(-w.hips.position.y+.07+Vu+Gt,Pt);qe.thigh.rotation.x=Bs.hip,qe.calf.rotation.x=Bs.knee,qe.shoe.rotation.x=-Bs.hip-Bs.knee}for(let qe of w.arms)qe.arm.rotation.x=Ze?Math.sin(ve+(qe.side<0?0:Math.PI))*.45:Math.sin(re*1.3+qe.side)*.025,qe.arm.rotation.z=-qe.side*.07,qe.forearm.rotation.x=Ze?-.22:-.08,We&&!ne.raft&&(qe.arm.rotation.x=-Math.PI/2+Math.sin(ve+qe.side)*.35,qe.forearm.rotation.x=-.28);Bu(w,ne.motion),w.raft.visible=!!(We&&ne.raft),w.raft.rotation.y=w.yaw,w.spear.visible=!!ne.spear&&!We&&!ne.motion,ne.blocked&&(w.arms[0].arm.rotation.x=-1,w.arms[0].forearm.rotation.x=-1),w.tag&&(w.tag.visible=Math.hypot(ye-we.root.position.x,Se-we.root.position.z)<13),w.lastX=ye,w.lastZ=Se}let Ve=new Be;a.add(Ve);for(let w of[-.55,.55])for(let D of[-.27,.27])I(Ve,"#866642",[w,1.24,D],[.038,2.48,.038]);y(Ve,"#a7c4b7",[0,.34,0],[1.24,.68,.67]),y(Ve,"#a98961",[0,.69,0],[1.24,.09,.67]);for(let w of[-1,1]){let D=y(Ve,"#ba7655",[w*.39,2.63,0],[.9,.07,1.14]);D.rotation.z=-w*.34}let It=I(Ve,"#ba7655",[0,2.79,0],[.055,1.18,.055]);It.rotation.x=Math.PI/2;for(let w of[-.5,.5])y(Ve,"#e2dbc7",[0,2.4,w],[1.7,.1,.07]);for(let w=0;w<5;w++)y(Ve,"#a98961",[(w-2)*.24,.32,.344],[.21,.53,.025]);for(let w=0;w<4;w++)T(Ve,"#b1b967",[(w-1.5)*.19,.78,0],[.09,.08,.08]);let pt=new Be;a.add(pt),y(pt,"#765734",[0,.18,0],[.56,.36,.4]),y(pt,"#9a743e",[0,.39,0],[.6,.1,.42]);for(let w of[-.19,.19])y(pt,"#d5b15a",[w,.2,.215],[.045,.35,.026]);y(pt,"#ecd178",[0,.32,.22],[.08,.09,.03]);let R=new ot(new Ui(.24,.29,32),new on({color:"#ffe087",transparent:!0,opacity:.8,side:Rt,depthWrite:!1}));R.rotation.x=-Math.PI/2,a.add(R);let v={root:new Be,tag:null,name:null};a.add(v.root),v.root.position.set(Ns.x/be,tn(Ns.x/be,Ns.y/be),Ns.y/be),I(v.root,"#786040",[0,.95,0],[.12,1.9,.12]),y(v.root,"#234f58",[0,1.65,0],[1.55,.55,.1]);let J=new Be;a.add(J);let se=new ot(new Ui(.93,1.06,40),new on({color:"#54e4ef",transparent:!0,opacity:.85,side:Rt,depthWrite:!1}));se.rotation.x=-Math.PI/2,se.position.y=.04,J.add(se);let ce=_(J,new At(.035,.035,1,8),new on({color:"#76eff7",transparent:!0,opacity:.5}),[0,1.25,0],[1,2.5,1],!1),ie=null,Ue=0,xe="",Le=new Be,Fe=null,ue=null,_e=[];a.add(Le);function $e(w){let D=w.activities?.completed||0,K=D>=3&&w.activities.gardenClaimed<D,Z=JSON.stringify([w.baseLevel,w.basePos,w.campfire,w.fire,D>=1,D>=3,D>=6,K,w.activities?.raceWon]);if(Z!==xe){xe=Z,ue&&(ue.geometry.dispose(),ue.material.dispose());for(let re of _e)re.dispose();if(_e=[],a.remove(Le),Le=new Be,a.add(Le),ue=null,Fe=null,w.basePos&&w.baseLevel){let re=Ce,he=vu(zu(re,yt,{cube:y,tube:I}),re,{cube:y,tube:I},h);if(Le.add(he),he.traverse(fe=>{["roof","wall","lintel"].includes(fe.name)&&(fe.material=fe.material.clone(),fe.material.transparent=!0,_e.push(fe.material))}),D>=1)for(let fe of[-1,1]){let ne=T(he,"#ffdc80",[fe*(re.width/be/2-.15),2.35,re.depth/be/2],[.09,.14,.09]);ne.material=f("#ffdc80",{emissive:"#dca739",emissiveIntensity:.7})}if(D>=6&&(I(he,"#6e5942",[re.width/be/2+.2,1.75,-re.depth/be/2],[.03,3.5,.03]),y(he,"#5bbca9",[re.width/be/2+.55,3.1,-re.depth/be/2],[.7,.42,.03])),D>=3&&w.garden){let fe=w.garden,ne=new Be;ne.position.set(fe.x/be,tn(fe.x/be,fe.y/be),fe.y/be),Le.add(ne),y(ne,"#785d40",[0,.07,0],[1.35,.14,1]);for(let ye of[-.4,0,.4])for(let Se of[-.25,.25])I(ne,"#587b37",[ye,.21,Se],[.025,.3,.025]),T(ne,"#6caa49",[ye,.35,Se],[.16,.12,.12]),K&&T(ne,"#cfa565",[ye+.055,.27,Se],[.07,.065,.07])}}if(w.campfire&&w.fire){let re=new Be,he=w.fire.x/be,fe=w.fire.y/be;re.position.set(he,tn(he,fe),fe),Le.add(re);for(let ne=0;ne<8;ne++){let ye=ne*Math.PI/4;T(re,"#777a6b",[Math.sin(ye)*.3,.07,Math.cos(ye)*.3],[.095,.07,.105])}for(let ne of[.5,-.5]){let ye=I(re,"#614b35",[0,.09,0],[.06,.5,.06]);ye.rotation.z=Math.PI/2,ye.rotation.y=ne}ue=_(re,new An(.17,.46,8),new on({color:"#ffb647",transparent:!0,opacity:.88}),[0,.28,0]),Fe=new zi("#ffa145",2.5,4),Fe.position.y=.5,re.add(Fe)}}}let Oe=[];function Te(){let w=new Be;a.add(w),T(w,"#765745",[0,.29,0],[.24,.25,.43]),T(w,"#765745",[0,.3,.4],[.19,.18,.2]),T(w,"#ae8b68",[0,.26,.58],[.11,.065,.065]);for(let K of[-1,1]){let Z=_(w,new An(.08,.17,3),f("#644937"),[K*.13,.47,.43]);Z.rotation.z=K*.45}let D=[];for(let K of[-.17,.17])for(let Z of[-.27,.24])D.push(I(w,"#5e493b",[K,.105,Z],[.037,.2,.037]));return{root:w,legs:D,lastX:null,lastZ:null}}function tt(w,D){for(;Oe.length<w.length;)Oe.push(Te());for(let K=0;K<Oe.length;K++){let Z=Oe[K],re=w[K];if(Z.root.visible=!!re,!re){Z.lastX=Z.lastZ=null;continue}let he=re.x/be,fe=re.y/be,ne=Z.lastX===null?0:he-Z.lastX,ye=Z.lastZ===null?0:fe-Z.lastZ,Se=Math.hypot(ne,ye)>1e-4;Z.root.position.set(he,tn(he,fe),fe),Se&&(Z.root.rotation.y=Math.atan2(ne,ye));for(let We=0;We<4;We++)Z.legs[We].rotation.x=Se?Math.sin(D*6+We*Math.PI)*.15:0;Z.lastX=he,Z.lastZ=fe}}let G=[new _t(x(),f("#adddd0",{roughness:.4}),96),new _t(new An(1,1,3),f("#668e93"),96),new _t(new An(1,1,3),f("#779da0"),96)];for(let w of G)w.count=0,w.frustumCulled=!1,a.add(w);function de(w,D,K){let Z=0;for(let re of w||[]){let he=ku(re,D,K);if(!he||Z>=96)continue;let fe=(ne,ye,Se,We,Ge=0)=>{C.position.set(he.x+Math.sin(he.yaw)*Se+Math.cos(he.yaw)*ne,he.y+ye,he.z+Math.cos(he.yaw)*Se-Math.sin(he.yaw)*ne),C.rotation.set(Ge,he.yaw,0),C.scale.set(...We),C.updateMatrix()};fe(0,0,0,[.09,.045,.22]),G[0].setMatrixAt(Z,C.matrix),fe(0,0,-.25,[.095,.12,.025],Math.PI/2),G[1].setMatrixAt(Z,C.matrix),fe(0,.045,-.02,[.04,.1,.11]),G[2].setMatrixAt(Z,C.matrix),Z++}for(let re of G)re.count=Z,re.instanceMatrix.needsUpdate=!0}let Me="",Ie=[];function pe(w,D){let K=JSON.stringify(w);if(K!==Me){Me=K;for(let Z of Ie)a.remove(Z),Z.traverse(re=>{re.isSprite&&(re.material.map.dispose(),re.material.dispose()),re.userData.privateGeometry&&re.geometry.dispose()});Ie=[];for(let Z of w||[]){if(Z.type==="return")continue;let re=new Be;re.position.set(Z.x/be,tn(Z.x/be,Z.y/be),Z.y/be),a.add(re),Ie.push(re);let he=new ot(new Ui(.4,.46,28),f(Z.done?"#6d9c89":"#8cebd5",{side:Rt}));if(he.rotation.x=-Math.PI/2,he.position.y=.03,he.userData.privateGeometry=!0,re.add(he),Z.type==="fragment"&&(y(re,"#e1c587",[0,.38,0],[.37,.45,.06]),y(re,"#a68752",[0,.18,-.035],[.035,.42,.035]),y(re,"#826b4d",[0,.4,.035],[.19,.022,.02])),Z.type==="rune"){T(re,"#87998a",[0,.26,0],[.27,.3,.21]);let ne=ge(Z.symbol,"#ffe29b");ne.position.y=.8,ne.scale.set(.65,.32,1),re.add(ne)}if(Z.type==="chest"){y(re,"#795a39",[0,.2,0],[.65,.4,.44]),y(re,"#bb9251",[0,.42,0],[.69,.06,.46]);for(let ne of[-.21,.21])y(re,"#f1d584",[ne,.23,.235],[.05,.36,.025])}if(Z.type==="signal"){for(let ne of[-1,1]){let ye=I(re,"#8a6d49",[ne*.22,.55,0],[.04,1.1,.04]);ye.rotation.z=ne*.22}if(y(re,"#927652",[0,1.1,0],[.7,.16,.45]),Z.done){let ne=T(re,"#ffe28d",[0,1.34,0],[.16,.21,.16]);ne.material=f("#ffe28d",{emissive:"#ffa842",emissiveIntensity:1})}else y(re,"#344f57",[0,1.3,0],[.3,.18,.24])}let fe=ge(Z.label,Z.done?"#b5d1c5":"#ffe9b5");fe.position.y=Z.type==="signal"?1.95:1.35,re.add(fe),re.userData.done=Z.done}}for(let Z of Ie)Z.children[0].scale.setScalar(Z.userData.done?1:1+Math.sin(D*2.8)*.05)}let oe=[];for(let w=0;w<4;w++){let D=new Mt().setFromPoints([new V(-.3,0,0),new V(0,-.08,0),new V(.3,0,0)]),K=new Di(D,new fi({color:"#fff7de"}));a.add(K),oe.push(K)}let ze=Math.atan2(-130,-60),Ke=0,ut=4.8,at=!0,Xt=!0,Dt=0,Nt=null,Zt=!1,nn=0,zt="first",Ct=new Be;o.add(Ct);let pn=I(Ct,"#52625f",[.28,-.36,-.42],[.1,.34,.1]);pn.rotation.x=-.65;let Jt=T(Ct,"#dda879",[.29,-.27,-.58],[.055,.08,.055]),yn=new Be;Ct.add(yn);let Bn=I(yn,"#876742",[.32,-.17,-.75],[.014,1.55,.014]);Bn.rotation.x=-.22;let ri=T(yn,"#b3b6ac",[.32,.61,-.91],[.039,.12,.025]),mn={};for(let w of["gather","fish","cook"]){let D=new Be;D.position.set(.29,-.26,-.61),Ct.add(D),Ou(w,D,{cube:y,tube:I,ell:T}),mn[w]=D}Ct.traverse(w=>{w.isMesh&&(w.castShadow=!1,w.receiveShadow=!1,w.frustumCulled=!1)});let gn=new V,kn=new V,sn=new V,Mi=new V,Ki={position:sn,target:gn},S=new V,H=new Bi;function ee(w,D=0){!at||t().paused||(ze+=w,Ke=vi(Ke+D,zt==="first"?-1.12:-.05,zt==="first"?1.12:.75))}function te(w){zt=w==="third"?"third":"first",Ke=w==="third"?.22:0,o.fov=w==="third"?58:72,o.updateProjectionMatrix(),Nt=null,Xt=!0}i.addEventListener("pointerdown",w=>{let D=t();!at||!D.play||D.paused||w.button>0||Nt||(Nt={id:w.pointerId,x:w.clientX,y:w.clientY},i.setPointerCapture(w.pointerId))}),i.addEventListener("pointermove",w=>{!Nt||Nt.id!==w.pointerId||(ee(-(w.clientX-Nt.x)*.006,(w.clientY-Nt.y)*.005),Nt.x=w.clientX,Nt.y=w.clientY)});let q=w=>{Nt?.id===w.pointerId&&(Nt=null)};for(let w of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(w,q);i.addEventListener("wheel",w=>{!at||t().paused||(w.preventDefault(),zt==="first"?(o.fov=vi(o.fov+w.deltaY*.025,58,85),o.updateProjectionMatrix()):ut=vi(ut+w.deltaY*.004,2.5,8))},{passive:!1}),i.addEventListener("webglcontextlost",w=>{w.preventDefault(),Zt=!0,at=!1,Nt=null,n()}),i.addEventListener("webglcontextrestored",()=>{Zt=!1,Xt=!0});function me(){r.setSize(innerWidth,innerHeight,!1),o.aspect=innerWidth/innerHeight,o.updateProjectionMatrix()}function A(w){if(!at||Zt)return;let D=t(),K=w/1e3,Z=Dt?vi((w-Dt)/1e3,0,.06):1/60;Dt=w,Ce=mu(D.basePos,D.baseLevel),yt=vc(Ce),Je(v,D.labels?.board,"#ffe087"),v.tag&&(v.tag.position.y=1.65,v.tag.scale.set(1.4,.36,1)),J.visible=!!D.trail,D.trail&&(J.position.set(D.trail.x/be,tn(D.trail.x/be,D.trail.y/be),D.trail.y/be),ce.material.opacity=.35+.13*Math.sin(K*3),(Ue!==D.trailNumber||ie?.userData.text!==(D.trailNumber===4?D.labels?.finish||"4":D.trailNumber?String(D.trailNumber):D.trail.label))&&(ie&&(J.remove(ie),ie.material.map.dispose(),ie.material.dispose()),Ue=D.trailNumber,ie=ge(Ue===4?D.labels?.finish||"4":Ue?String(Ue):D.trail.label,"#54e4ef"),ie.userData.text=Ue===4?D.labels?.finish||"4":Ue?String(Ue):D.trail.label,ie.position.y=1.5,ie.scale.set(D.trailNumber?1:2.45,.4,1),J.add(ie))),Je(O,D.labels?.leon,"#b49966"),Je(ft,D.labels?.nela,"#609991");let re=D.P.x/be,he=D.P.y/be;h.update(),$.update(K,Ce),Qe.value=K,le.material.uniforms.uTime.value=K,j(D.objects,K),de(D.fishes,K,D.sea),pe(D.chapterMarkers,K);let fe={down:0,up:Math.PI,left:-Math.PI/2,right:Math.PI/2};De(we,D.P,Number.isFinite(D.heading)?D.heading:fe[D.face]||0,D.moving,K,Z,D.fast?5.25:3,D),O.root.visible=ft.root.visible=!0;for(let[Ae,ve]of[[O,D.leon],[ft,D.nela]])De(Ae,ve,Math.atan2(re-ve.x/be,he-ve.y/be),!1,K,Z,0,{...D,raft:!1,spear:!1,blocked:!1,motion:null});let ne=new Set;for(let Ae of D.players){if(Ae.id===D.you)continue;ne.add(Ae.id);let ve=lt.get(Ae.id),qe=Ae.appearance?zo(Ae.appearance):D.looks[Ae.slot]||{};(!ve||ve.name!==Ae.name)&&(ve&&P(ve),ve=Pe(qe,"player",Ae.name),lt.set(Ae.id,ve)),Ye(ve,qe);let bt=ve.lastX===null?0:Ae.point.x/be-ve.lastX,Pt=ve.lastZ===null?0:Ae.point.y/be-ve.lastZ,Gt=Ae.moving&&Math.hypot(bt,Pt)>.002?Math.atan2(bt,Pt):fe[Ae.face]||0;De(ve,Ae.point,Gt,Ae.moving,K,Z,3,{...D,spear:D.spearOwned&&!Ae.spearStowed,blocked:Ae.blocked,motion:Ae.motion&&Ae.motion.remaining-(w-Ae.received)>0?{kind:Ae.motion.kind,phase:1-(Ae.motion.remaining-(w-Ae.received))/(gu[Ae.motion.kind]||1e3)}:null})}for(let[Ae,ve]of lt)ne.has(Ae)||(P(ve),lt.delete(Ae));Ye(we,D.appearance||zo()),Ve.position.set(D.leon.x/be+.9,tn(D.leon.x/be+.9,D.leon.y/be+.15),D.leon.y/be+.15),pt.position.set(D.chest.x/be,tn(D.chest.x/be,D.chest.y/be),D.chest.y/be),pt.visible=!D.treasure,$e(D),tt(D.enemies,K);let ye=Ce&&Math.abs(D.P.x-Ce.floor.x)<Ce.floor.w/2&&Math.abs(D.P.y-Ce.floor.y)<Ce.floor.h/2;for(let Ae of _e)Ae.opacity=ye&&zt==="third"?.23:1,Ae.depthWrite=!(ye&&zt==="third");ue&&(ue.scale.y=1+Math.sin(K*13)*.18,Fe.intensity=2.5+Math.sin(K*17)*.4);let Se=Nu(D.objects,D.P);R.visible=!!(D.play&&!D.paused&&Se),Se&&R.position.set(Se.x/be,tn(Se.x/be,Se.y/be)+.03,Se.y/be);for(let Ae=0;Ae<oe.length;Ae++){let ve=oe[Ae];ve.position.set(19+Math.sin(K*.08+Ae*1.7)*8,7+Math.sin(K*.2+Ae)*.5,12+Math.cos(K*.1+Ae*1.3)*5),ve.rotation.y=K*.1+Ae,ve.scale.y=1+Math.sin(K*7+Ae)*.5}we.rig.visible=zt!=="first";let We=D.moving&&!D.paused?Math.sin(we.phase*2)*.012:0;if(Bo({x:re,z:he,surface:we.root.position.y,yaw:ze,pitch:Ke,mode:zt,distance:ut*(o.aspect<.85?1.12:1),bob:We},Ki),zt==="third"){sn.y=Math.max(sn.y,tn(sn.x,sn.z)+.55),S.subVectors(sn,gn);let Ae=S.length();S.normalize(),H.set(gn,S),H.near=.08,H.far=Ae;let ve=H.intersectObjects([Le,Ve],!0).find(qe=>qe.object.isMesh&&qe.distance>.1);ve&&sn.copy(gn).addScaledVector(S,Math.max(.35,ve.distance-.15))}zt==="first"||Xt||Mi.distanceTo(we.root.position)>5?(o.position.copy(sn),kn.copy(gn),Xt=!1):(fc(o.position,sn,Z,8),fc(kn,gn,Z,12)),o.lookAt(zt==="first"?gn:kn),Mi.copy(we.root.position);let Ge=new V;a.updateMatrixWorld(!0),a.traverse(Ae=>{if(!Ae.isSprite)return;Ae.userData.signScale||(Ae.userData.signScale=Ae.scale.clone()),Ae.scale.copy(Ae.userData.signScale),Ae.getWorldPosition(Ge);let ve=Math.max(.1,Ge.distanceTo(o.position)),qe=Ae.scale.x*o.projectionMatrix.elements[0]*innerWidth/(2*ve),bt=Math.min(240,innerWidth*.52);qe>bt&&Ae.scale.multiplyScalar(bt/qe)});let Ze=!!D.spear||!!D.motion&&["gather","fish","cook"].includes(D.motion.kind);Ct.visible=zt==="first"&&D.play&&Ze&&!D.sea(D.P.x,D.P.y),yn.visible=!!D.spear&&!D.motion;for(let[Ae,ve]of Object.entries(mn))ve.visible=D.motion?.kind===Ae;Ct.position.y=We*.4,Ct.rotation.x=D.motion?Math.sin(D.motion.phase*Math.PI*2)*.07:0,Jt.material=f(D.appearance?.skin||"#dda879"),pn.material=f(D.appearance?.shirt||"#4c9cba"),ko(l,re,he),le.position.copy(o.position),X.update(K,o.position),r.render(a,o),D.play&&Z>.038?nn+=Z:nn=Math.max(0,nn-Z),nn>3&&r.getPixelRatio()>.85&&(r.setPixelRatio(Math.max(.85,r.getPixelRatio()-.15)),me(),nn=0)}function P(w){a.remove(w.root),w.tag&&(w.tag.material.map.dispose(),w.tag.material.dispose())}function W(w){return at=!!w&&!Zt,Nt=null,Xt=!0,Dt=0,at}function Q(){at=!1,r.dispose(),F.dispose(),E.dispose(),X.dispose(),le.geometry.dispose(),le.material.dispose(),k.traverse(w=>{w.geometry&&w.geometry.dispose(),w.material&&w.material.dispose()}),M.dispose(),$.dispose(),h.dispose(),et.dispose();for(let w of[...Object.values(Y),...G])w.geometry.dispose(),w.dispose();for(let w of p.values())w.dispose();for(let w of d.values())w.dispose()}return{frame:A,resize:me,orbit:ee,setEnabled:W,setCamera:te,dispose:Q,vector:(w,D)=>Uu(w,D,ze),get enabled(){return at},get yaw(){return ze},get cameraMode(){return zt},stats:()=>({calls:r.info.render.calls,triangles:r.info.render.triangles,pixelRatio:r.getPixelRatio(),people:lt.size+3,camera:zt,eye:o.position.toArray(),materials:h.stats()})}}return Yu(O0);})();
