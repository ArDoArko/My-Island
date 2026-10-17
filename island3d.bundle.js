var MyIsland3D=(()=>{var tl=Object.defineProperty;var nd=Object.getOwnPropertyDescriptor;var id=Object.getOwnPropertyNames;var rd=Object.prototype.hasOwnProperty;var sd=(i,e)=>{for(var t in e)tl(i,t,{get:e[t],enumerable:!0})},ad=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of id(e))!rd.call(i,r)&&r!==t&&tl(i,r,{get:()=>e[r],enumerable:!(n=nd(e,r))||n.enumerable});return i};var od=i=>ad(tl({},"__esModule",{value:!0}),i);var j0={};sd(j0,{SCALE:()=>Me,actionPose:()=>Ju,baseElevation:()=>Ac,buildBase:()=>Yu,buildHuman:()=>Cc,cameraVector:()=>Gu,create:()=>K0,createCampaign:()=>Z0,drawCampaign2D:()=>Tc,fishPose:()=>$u,legPose:()=>Xu,nearestWithin:()=>Hu,scaleWorldLabels:()=>Wu,terrainHeight:()=>sn,updateAppearanceKey:()=>qu,walkSurface:()=>Ec});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var sh=0,Nl=1,ah=2;var Fl=1,Fr=2,kn=3,Qn=0,Kt=1,Lt=2,ri=0,Ii=1,zl=2,Ol=3,Bl=4,oh=5,mi=100,lh=101,ch=102,hh=103,uh=104,dh=200,fh=201,ph=202,mh=203,_a=204,ya=205,gh=206,xh=207,_h=208,yh=209,vh=210,Mh=211,bh=212,Sh=213,wh=214,Xa=0,qa=1,Ya=2,Pi=3,Za=4,Ja=5,$a=6,Ka=7,kl=0,Th=1,Eh=2,si=0,Ah=1,Ch=2,Rh=3,zr=4,Ih=5,Ph=6,Dh=7;var Vl=300,Hi=301,Wi=302,ja=303,Qa=304,Ps=306,Mr=1e3,pi=1001,va=1002,cn=1003,Lh=1004;var Ds=1005;var An=1006,eo=1007;var vi=1008;var In=1009,Gl=1010,Hl=1011,Or=1012,to=1013,Mi=1014,Pn=1015,Br=1016,no=1017,io=1018,kr=1020,Wl=35902,Xl=35899,ql=1021,Yl=1022,vn=1023,br=1026,Vr=1027,ro=1028,so=1029,Zl=1030,ao=1031;var oo=1033,Ls=33776,Us=33777,Ns=33778,Fs=33779,lo=35840,co=35841,ho=35842,uo=35843,fo=36196,po=37492,mo=37496,go=37808,xo=37809,_o=37810,yo=37811,vo=37812,Mo=37813,bo=37814,So=37815,wo=37816,To=37817,Eo=37818,Ao=37819,Co=37820,Ro=37821,Io=36492,Po=36494,Do=36495,Lo=36283,Uo=36284,No=36285,Fo=36286;var ps=2300,Ma=2301,ga=2302,Al=2400,Cl=2401,Rl=2402;var Uh=3200,Nh=3201;var Jl=0,Fh=1,Dn="",Ft="srgb",Di="srgb-linear",ms="linear",At="srgb";var Ri=7680;var Il=519,zh=512,Oh=513,Bh=514,$l=515,kh=516,Vh=517,Gh=518,Hh=519,ba=35044;var Kl="300 es",En=2e3,gs=2001;var ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ic=1234567,ds=Math.PI/180,Sr=180/Math.PI;function Kn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function pt(i,e,t){return Math.max(e,Math.min(t,i))}function jl(i,e){return(i%e+e)%e}function ld(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function cd(i,e,t){return i!==e?(t-i)/(e-i):0}function fs(i,e,t){return(1-t)*i+t*e}function hd(i,e,t,n){return fs(i,e,1-Math.exp(-t*n))}function ud(i,e=1){return e-Math.abs(jl(i,e*2)-e)}function dd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function fd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function pd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function md(i,e){return i+Math.random()*(e-i)}function gd(i){return i*(.5-Math.random())}function xd(i){i!==void 0&&(Ic=i);let e=Ic+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _d(i){return i*ds}function yd(i){return i*Sr}function vd(i){return(i&i-1)===0&&i!==0}function Md(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sd(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),d=s((e-n)/2),p=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*h,c*d,c*p,o*l);break;case"YZY":i.set(c*p,o*h,c*d,o*l);break;case"ZXZ":i.set(c*d,c*p,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Tn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var zs={DEG2RAD:ds,RAD2DEG:Sr,generateUUID:Kn,clamp:pt,euclideanModulo:jl,mapLinear:ld,inverseLerp:cd,lerp:fs,damp:hd,pingpong:ud,smoothstep:dd,smootherstep:fd,randInt:pd,randFloat:md,randFloatSpread:gd,seededRandom:xd,degToRad:_d,radToDeg:yd,isPowerOfTwo:vd,ceilPowerOfTwo:Md,floorPowerOfTwo:bd,setQuaternionFromProperEuler:Sd,normalize:Et,denormalize:Tn},We=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ti=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],d=n[r+3],p=s[a+0],f=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(d!==x||c!==p||l!==f||h!==g){let m=1-o,u=c*p+l*f+h*g+d*x,_=u>=0?1:-1,w=1-u*u;if(w>Number.EPSILON){let I=Math.sqrt(w),C=Math.atan2(I,u*_);m=Math.sin(m*C)/I,o=Math.sin(o*C)/I}let y=o*_;if(c=c*m+p*y,l=l*m+f*y,h=h*m+g*y,d=d*m+x*y,m===1-o){let I=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=I,l*=I,h*=I,d*=I}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],d=s[a],p=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*d+c*f-l*p,e[t+1]=c*g+h*p+l*d-o*f,e[t+2]=l*g+h*f+o*p-c*d,e[t+3]=h*g-o*d-c*p-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),d=o(s/2),p=c(n/2),f=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=p*h*d+l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d-p*f*g;break;case"YXZ":this._x=p*h*d+l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d+p*f*g;break;case"ZXY":this._x=p*h*d-l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d-p*f*g;break;case"ZYX":this._x=p*h*d-l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d+p*f*g;break;case"YZX":this._x=p*h*d+l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d-p*f*g;break;case"XZY":this._x=p*h*d-l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],p=n+o+d;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),h=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-s*d,this.z=r+c*d+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nl.copy(this).projectOnVector(e),this.sub(nl)}reflect(e){return this.sub(nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nl=new V,Pc=new ti,lt=class i{constructor(e,t,n,r,s,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],p=n[2],f=n[5],g=n[8],x=r[0],m=r[3],u=r[6],_=r[1],w=r[4],y=r[7],I=r[2],C=r[5],N=r[8];return s[0]=a*x+o*_+c*I,s[3]=a*m+o*w+c*C,s[6]=a*u+o*y+c*N,s[1]=l*x+h*_+d*I,s[4]=l*m+h*w+d*C,s[7]=l*u+h*y+d*N,s[2]=p*x+f*_+g*I,s[5]=p*m+f*w+g*C,s[8]=p*u+f*y+g*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,p=o*c-h*s,f=l*s-a*c,g=t*d+n*p+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(r*l-h*n)*x,e[2]=(o*n-r*a)*x,e[3]=p*x,e[4]=(h*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(il.makeScale(e,t)),this}rotate(e){return this.premultiply(il.makeRotation(-e)),this}translate(e,t){return this.premultiply(il.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},il=new lt;function Ql(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wh(){let i=wr("canvas");return i.style.display="block",i}var Dc={};function Tr(i){i in Dc||(Dc[i]=!0,console.warn(i))}function Xh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Lc=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uc=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wd(){let i={enabled:!0,workingColorSpace:Di,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===At&&(r.r=jn(r.r),r.g=jn(r.g),r.b=jn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===At&&(r.r=vr(r.r),r.g=vr(r.g),r.b=vr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Dn?ms:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Tr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Tr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Di]:{primaries:e,whitePoint:n,transfer:ms,toXYZ:Lc,fromXYZ:Uc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:At,toXYZ:Lc,fromXYZ:Uc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),i}var _t=wd();function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var nr,Sa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{nr===void 0&&(nr=wr("canvas")),nr.width=e.width,nr.height=e.height;let r=nr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=nr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=wr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=jn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Td=0,Er=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Kn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(rl(r[a].image)):s.push(rl(r[a]))}else s=rl(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function rl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ed=0,sl=new V,tn=class i extends ei{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=pi,r=pi,s=An,a=vi,o=vn,c=In,l=i.DEFAULT_ANISOTROPY,h=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Kn(),this.name="",this.source=new Er(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sl).x}get height(){return this.source.getSize(sl).y}get depth(){return this.source.getSize(sl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mr:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mr:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Vl;tn.DEFAULT_ANISOTROPY=1;var yt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],h=c[4],d=c[8],p=c[1],f=c[5],g=c[9],x=c[2],m=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,y=(f+1)/2,I=(u+1)/2,C=(h+p)/4,N=(d+x)/4,U=(g+m)/4;return w>y&&w>I?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=C/n,s=N/n):y>I?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=C/r,s=U/r):I<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),n=N/s,r=U/s),this.set(n,r,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(p-h)*(p-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-x)/_,this.z=(p-h)/_,this.w=Math.acos((l+f+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wa=class extends ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);let r={width:e,height:t,depth:n.depth},s=new tn(r);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Er(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},zn=class extends wa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},xs=class extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ta=class extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var On=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bn):bn.fromBufferAttribute(s,a),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox)),qs.applyMatrix4(e.matrixWorld),this.union(qs)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ts),Ys.subVectors(this.max,ts),ir.subVectors(e.a,ts),rr.subVectors(e.b,ts),sr.subVectors(e.c,ts),li.subVectors(rr,ir),ci.subVectors(sr,rr),Ti.subVectors(ir,sr);let t=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Ti.z,Ti.y,li.z,0,-li.x,ci.z,0,-ci.x,Ti.z,0,-Ti.x,-li.y,li.x,0,-ci.y,ci.x,0,-Ti.y,Ti.x,0];return!al(t,ir,rr,sr,Ys)||(t=[1,0,0,0,1,0,0,0,1],!al(t,ir,rr,sr,Ys))?!1:(Zs.crossVectors(li,ci),t=[Zs.x,Zs.y,Zs.z],al(t,ir,rr,sr,Ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Xn=[new V,new V,new V,new V,new V,new V,new V,new V],bn=new V,qs=new On,ir=new V,rr=new V,sr=new V,li=new V,ci=new V,Ti=new V,ts=new V,Ys=new V,Zs=new V,Ei=new V;function al(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Ei.fromArray(i,s);let o=r.x*Math.abs(Ei.x)+r.y*Math.abs(Ei.y)+r.z*Math.abs(Ei.z),c=e.dot(Ei),l=t.dot(Ei),h=n.dot(Ei);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Ad=new On,ns=new V,ol=new V,ni=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ad.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ns.subVectors(e,this.center);let t=ns.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ns,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ol.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ns.copy(e.center).add(ol)),this.expandByPoint(ns.copy(e.center).sub(ol))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},qn=new V,ll=new V,Js=new V,hi=new V,cl=new V,$s=new V,hl=new V,Ar=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ll.copy(e).add(t).multiplyScalar(.5),Js.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(ll);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Js),o=hi.dot(this.direction),c=-hi.dot(Js),l=hi.lengthSq(),h=Math.abs(1-a*a),d,p,f,g;if(h>0)if(d=a*c-o,p=a*o-c,g=s*h,d>=0)if(p>=-g)if(p<=g){let x=1/h;d*=x,p*=x,f=d*(d+a*p+2*o)+p*(a*d+p+2*c)+l}else p=s,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;else p=-s,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;else p<=-g?(d=Math.max(0,-(-a*s+o)),p=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+p*(p+2*c)+l):p<=g?(d=0,p=Math.min(Math.max(-s,-c),s),f=p*(p+2*c)+l):(d=Math.max(0,-(a*s+o)),p=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+p*(p+2*c)+l);else p=a>0?-s:s,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ll).addScaledVector(Js,p),f}intersectSphere(e,t){qn.subVectors(e.center,this.origin);let n=qn.dot(this.direction),r=qn.dot(qn)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),h>=0?(s=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,r,s){cl.subVectors(t,e),$s.subVectors(n,e),hl.crossVectors(cl,$s);let a=this.direction.dot(hl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hi.subVectors(this.origin,e);let c=o*this.direction.dot($s.crossVectors(hi,$s));if(c<0)return null;let l=o*this.direction.dot(cl.cross(hi));if(l<0||c+l>a)return null;let h=-o*hi.dot(hl);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},St=class i{constructor(e,t,n,r,s,a,o,c,l,h,d,p,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,h,d,p,f,g,x,m)}set(e,t,n,r,s,a,o,c,l,h,d,p,f,g,x,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=p,u[3]=f,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/ar.setFromMatrixColumn(e,0).length(),s=1/ar.setFromMatrixColumn(e,1).length(),a=1/ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let p=a*h,f=a*d,g=o*h,x=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=p-x*l,t[9]=-o*c,t[2]=x-p*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let p=c*h,f=c*d,g=l*h,x=l*d;t[0]=p+x*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+p*o,t[10]=a*c}else if(e.order==="ZXY"){let p=c*h,f=c*d,g=l*h,x=l*d;t[0]=p-x*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let p=a*h,f=a*d,g=o*h,x=o*d;t[0]=c*h,t[4]=g*l-f,t[8]=p*l+x,t[1]=c*d,t[5]=x*l+p,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let p=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-p*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+g,t[10]=p-x*d}else if(e.order==="XZY"){let p=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=p*d+x,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=x*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cd,e,Rd)}lookAt(e,t,n){let r=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),ui.crossVectors(n,fn),ui.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),ui.crossVectors(n,fn)),ui.normalize(),Ks.crossVectors(fn,ui),r[0]=ui.x,r[4]=Ks.x,r[8]=fn.x,r[1]=ui.y,r[5]=Ks.y,r[9]=fn.y,r[2]=ui.z,r[6]=Ks.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],p=n[9],f=n[13],g=n[2],x=n[6],m=n[10],u=n[14],_=n[3],w=n[7],y=n[11],I=n[15],C=r[0],N=r[4],U=r[8],b=r[12],M=r[1],T=r[5],L=r[9],B=r[13],D=r[2],F=r[6],O=r[10],J=r[14],q=r[3],le=r[7],se=r[11],we=r[15];return s[0]=a*C+o*M+c*D+l*q,s[4]=a*N+o*T+c*F+l*le,s[8]=a*U+o*L+c*O+l*se,s[12]=a*b+o*B+c*J+l*we,s[1]=h*C+d*M+p*D+f*q,s[5]=h*N+d*T+p*F+f*le,s[9]=h*U+d*L+p*O+f*se,s[13]=h*b+d*B+p*J+f*we,s[2]=g*C+x*M+m*D+u*q,s[6]=g*N+x*T+m*F+u*le,s[10]=g*U+x*L+m*O+u*se,s[14]=g*b+x*B+m*J+u*we,s[3]=_*C+w*M+y*D+I*q,s[7]=_*N+w*T+y*F+I*le,s[11]=_*U+w*L+y*O+I*se,s[15]=_*b+w*B+y*J+I*we,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],p=e[10],f=e[14],g=e[3],x=e[7],m=e[11],u=e[15];return g*(+s*c*d-r*l*d-s*o*p+n*l*p+r*o*f-n*c*f)+x*(+t*c*f-t*l*p+s*a*p-r*a*f+r*l*h-s*c*h)+m*(+t*l*d-t*o*f-s*a*d+n*a*f+s*o*h-n*l*h)+u*(-r*o*h-t*c*d+t*o*p+r*a*d-n*a*p+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],p=e[10],f=e[11],g=e[12],x=e[13],m=e[14],u=e[15],_=d*m*l-x*p*l+x*c*f-o*m*f-d*c*u+o*p*u,w=g*p*l-h*m*l-g*c*f+a*m*f+h*c*u-a*p*u,y=h*x*l-g*d*l+g*o*f-a*x*f-h*o*u+a*d*u,I=g*d*c-h*x*c-g*o*p+a*x*p+h*o*m-a*d*m,C=t*_+n*w+r*y+s*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/C;return e[0]=_*N,e[1]=(x*p*s-d*m*s-x*r*f+n*m*f+d*r*u-n*p*u)*N,e[2]=(o*m*s-x*c*s+x*r*l-n*m*l-o*r*u+n*c*u)*N,e[3]=(d*c*s-o*p*s-d*r*l+n*p*l+o*r*f-n*c*f)*N,e[4]=w*N,e[5]=(h*m*s-g*p*s+g*r*f-t*m*f-h*r*u+t*p*u)*N,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*u-t*c*u)*N,e[7]=(a*p*s-h*c*s+h*r*l-t*p*l-a*r*f+t*c*f)*N,e[8]=y*N,e[9]=(g*d*s-h*x*s-g*n*f+t*x*f+h*n*u-t*d*u)*N,e[10]=(a*x*s-g*o*s+g*n*l-t*x*l-a*n*u+t*o*u)*N,e[11]=(h*o*s-a*d*s-h*n*l+t*d*l+a*n*f-t*o*f)*N,e[12]=I*N,e[13]=(h*x*r-g*d*r+g*n*p-t*x*p-h*n*m+t*d*m)*N,e[14]=(g*o*r-a*x*r-g*n*c+t*x*c+a*n*m-t*o*m)*N,e[15]=(a*d*r-h*o*r+h*n*c-t*d*c-a*n*p+t*o*p)*N,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,d=o+o,p=s*l,f=s*h,g=s*d,x=a*h,m=a*d,u=o*d,_=c*l,w=c*h,y=c*d,I=n.x,C=n.y,N=n.z;return r[0]=(1-(x+u))*I,r[1]=(f+y)*I,r[2]=(g-w)*I,r[3]=0,r[4]=(f-y)*C,r[5]=(1-(p+u))*C,r[6]=(m+_)*C,r[7]=0,r[8]=(g+w)*N,r[9]=(m-_)*N,r[10]=(1-(p+x))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=ar.set(r[0],r[1],r[2]).length(),a=ar.set(r[4],r[5],r[6]).length(),o=ar.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Sn.copy(this);let l=1/s,h=1/a,d=1/o;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=d,Sn.elements[9]*=d,Sn.elements[10]*=d,t.setFromRotationMatrix(Sn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=En,c=!1){let l=this.elements,h=2*s/(t-e),d=2*s/(n-r),p=(t+e)/(t-e),f=(n+r)/(n-r),g,x;if(c)g=s/(a-s),x=a*s/(a-s);else if(o===En)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===gs)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=En,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-r),p=-(t+e)/(t-e),f=-(n+r)/(n-r),g,x;if(c)g=1/(a-s),x=a/(a-s);else if(o===En)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===gs)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ar=new V,Sn=new St,Cd=new V(0,0,0),Rd=new V(1,1,1),ui=new V,Ks=new V,fn=new V,Nc=new St,Fc=new ti,Cn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],d=r[2],p=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(pt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fc.setFromEuler(this),this.setFromQuaternion(Fc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER="XYZ";var Cr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Id=0,zc=new V,or=new ti,Yn=new St,js=new V,is=new V,Pd=new V,Dd=new ti,Oc=new V(1,0,0),Bc=new V(0,1,0),kc=new V(0,0,1),Vc={type:"added"},Ld={type:"removed"},lr={type:"childadded",child:null},ul={type:"childremoved",child:null},Mt=class i extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new V,t=new Cn,n=new ti,r=new V(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new lt}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(Oc,e)}rotateY(e){return this.rotateOnAxis(Bc,e)}rotateZ(e){return this.rotateOnAxis(kc,e)}translateOnAxis(e,t){return zc.copy(e).applyQuaternion(this.quaternion),this.position.add(zc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oc,e)}translateY(e){return this.translateOnAxis(Bc,e)}translateZ(e){return this.translateOnAxis(kc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?js.copy(e):js.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(is,js,this.up):Yn.lookAt(js,is,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),or.setFromRotationMatrix(Yn),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vc),lr.child=e,this.dispatchEvent(lr),lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ld),ul.child=e,this.dispatchEvent(ul),ul.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vc),lr.child=e,this.dispatchEvent(lr),lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,e,Pd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,Dd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),p=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};Mt.DEFAULT_UP=new V(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=new V,Zn=new V,dl=new V,Jn=new V,cr=new V,hr=new V,Gc=new V,fl=new V,pl=new V,ml=new V,gl=new yt,xl=new yt,_l=new yt,$n=class i{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),wn.subVectors(e,t),r.cross(wn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){wn.subVectors(r,t),Zn.subVectors(n,t),dl.subVectors(e,t);let a=wn.dot(wn),o=wn.dot(Zn),c=wn.dot(dl),l=Zn.dot(Zn),h=Zn.dot(dl),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;let p=1/d,f=(l*c-o*h)*p,g=(a*h-o*c)*p;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Jn.x),c.addScaledVector(a,Jn.y),c.addScaledVector(o,Jn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return gl.setScalar(0),xl.setScalar(0),_l.setScalar(0),gl.fromBufferAttribute(e,t),xl.fromBufferAttribute(e,n),_l.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(gl,s.x),a.addScaledVector(xl,s.y),a.addScaledVector(_l,s.z),a}static isFrontFacing(e,t,n,r){return wn.subVectors(n,t),Zn.subVectors(e,t),wn.cross(Zn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),wn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;cr.subVectors(r,n),hr.subVectors(s,n),fl.subVectors(e,n);let c=cr.dot(fl),l=hr.dot(fl);if(c<=0&&l<=0)return t.copy(n);pl.subVectors(e,r);let h=cr.dot(pl),d=hr.dot(pl);if(h>=0&&d<=h)return t.copy(r);let p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(cr,a);ml.subVectors(e,s);let f=cr.dot(ml),g=hr.dot(ml);if(g>=0&&f<=g)return t.copy(s);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(hr,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Gc.subVectors(s,r),o=(d-h)/(d-h+(f-g)),t.copy(r).addScaledVector(Gc,o);let u=1/(m+x+p);return a=x*u,o=p*u,t.copy(n).addScaledVector(cr,a).addScaledVector(hr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function yl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var et=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=_t.workingColorSpace){if(e=jl(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=yl(a,s,e+1/3),this.g=yl(a,s,e),this.b=yl(a,s,e-1/3)}return _t.colorSpaceToWorking(this,r),this}setStyle(e,t=Ft){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let n=qh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return _t.workingToColorSpace(en.copy(this),e),Math.round(pt(en.r*255,0,255))*65536+Math.round(pt(en.g*255,0,255))*256+Math.round(pt(en.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(en.copy(this),t);let n=en.r,r=en.g,s=en.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Ft){_t.workingToColorSpace(en.copy(this),e);let t=en.r,n=en.g,r=en.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(Qs);let n=fs(di.h,Qs.h,t),r=fs(di.s,Qs.s,t),s=fs(di.l,Qs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new et;et.NAMES=qh;var Ud=0,Bn=class extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=Ii,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_a,this.blendDst=ya,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_a&&(n.blendSrc=this.blendSrc),this.blendDst!==ya&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Il&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},hn=class extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ot=new V,ea=new We,Nd=0,Ht=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ba,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ea.fromBufferAttribute(this,t),ea.applyMatrix3(e),this.setXY(t,ea.x,ea.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ba&&(e.usage=this.usage),e}};var _s=class extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ys=class extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var st=class extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}},Fd=0,yn=new St,vl=new Mt,ur=new V,pn=new On,rs=new On,Yt=new V,Tt=class i extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ql(e)?ys:_s)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new lt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return vl.lookAt(e),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new st(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];rs.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(pn.min,rs.min),pn.expandByPoint(Yt),Yt.addVectors(pn.max,rs.max),pn.expandByPoint(Yt)):(pn.expandByPoint(rs.min),pn.expandByPoint(rs.max))}pn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Yt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Yt.fromBufferAttribute(o,l),c&&(ur.fromBufferAttribute(e,l),Yt.add(ur)),r=Math.max(r,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<n.count;U++)o[U]=new V,c[U]=new V;let l=new V,h=new V,d=new V,p=new We,f=new We,g=new We,x=new V,m=new V;function u(U,b,M){l.fromBufferAttribute(n,U),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,M),p.fromBufferAttribute(s,U),f.fromBufferAttribute(s,b),g.fromBufferAttribute(s,M),h.sub(l),d.sub(l),f.sub(p),g.sub(p);let T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(T),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(T),o[U].add(x),o[b].add(x),o[M].add(x),c[U].add(m),c[b].add(m),c[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let U=0,b=_.length;U<b;++U){let M=_[U],T=M.start,L=M.count;for(let B=T,D=T+L;B<D;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let w=new V,y=new V,I=new V,C=new V;function N(U){I.fromBufferAttribute(r,U),C.copy(I);let b=o[U];w.copy(b),w.sub(I.multiplyScalar(I.dot(b))).normalize(),y.crossVectors(C,b);let T=y.dot(c[U])<0?-1:1;a.setXYZW(U,w.x,w.y,w.z,T)}for(let U=0,b=_.length;U<b;++U){let M=_[U],T=M.start,L=M.count;for(let B=T,D=T+L;B<D;B+=3)N(e.getX(B+0)),N(e.getX(B+1)),N(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let r=new V,s=new V,a=new V,o=new V,c=new V,l=new V,h=new V,d=new V;if(e)for(let p=0,f=e.count;p<f;p+=3){let g=e.getX(p+0),x=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,f=t.count;p<f;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,p=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let u=0;u<h;u++)p[g++]=l[f++]}return new Ht(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){let p=l[h],f=e(p,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],d=s[l];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hc=new St,Ai=new Ar,ta=new ni,Wc=new V,na=new V,ia=new V,ra=new V,Ml=new V,sa=new V,Xc=new V,aa=new V,ht=class extends Mt{constructor(e=new Tt,t=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){sa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],d=s[c];h!==0&&(Ml.fromBufferAttribute(d,e),a?sa.addScaledVector(Ml,h):sa.addScaledVector(Ml.sub(t),h))}t.add(sa)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(s),Ai.copy(e.ray).recast(e.near),!(ta.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(ta,Wc)===null||Ai.origin.distanceToSquared(Wc)>(e.far-e.near)**2))&&(Hc.copy(s).invert(),Ai.copy(e.ray).applyMatrix4(Hc),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,p=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=p.length;g<x;g++){let m=p[g],u=a[m.materialIndex],_=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,I=w;y<I;y+=3){let C=o.getX(y),N=o.getX(y+1),U=o.getX(y+2);r=oa(this,u,e,n,l,h,d,C,N,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,u=x;m<u;m+=3){let _=o.getX(m),w=o.getX(m+1),y=o.getX(m+2);r=oa(this,a,e,n,l,h,d,_,w,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=p.length;g<x;g++){let m=p[g],u=a[m.materialIndex],_=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,I=w;y<I;y+=3){let C=y,N=y+1,U=y+2;r=oa(this,u,e,n,l,h,d,C,N,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,u=x;m<u;m+=3){let _=m,w=m+1,y=m+2;r=oa(this,a,e,n,l,h,d,_,w,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function zd(i,e,t,n,r,s,a,o){let c;if(e.side===Kt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Qn,o),c===null)return null;aa.copy(o),aa.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(aa);return l<t.near||l>t.far?null:{distance:l,point:aa.clone(),object:i}}function oa(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,na),i.getVertexPosition(c,ia),i.getVertexPosition(l,ra);let h=zd(i,e,t,n,na,ia,ra,Xc);if(h){let d=new V;$n.getBarycoord(Xc,na,ia,ra,d),r&&(h.uv=$n.getInterpolatedAttribute(r,o,c,l,d,new We)),s&&(h.uv1=$n.getInterpolatedAttribute(s,o,c,l,d,new We)),a&&(h.normal=$n.getInterpolatedAttribute(a,o,c,l,d,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:c,c:l,normal:new V,materialIndex:0};$n.getNormal(na,ia,ra,p.normal),h.face=p,h.barycoord=d}return h}var $t=class i extends Tt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],d=[],p=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(d,2));function g(x,m,u,_,w,y,I,C,N,U,b){let M=y/N,T=I/U,L=y/2,B=I/2,D=C/2,F=N+1,O=U+1,J=0,q=0,le=new V;for(let se=0;se<O;se++){let we=se*T-B;for(let Ne=0;Ne<F;Ne++){let He=Ne*M-L;le[x]=He*_,le[m]=we*w,le[u]=D,l.push(le.x,le.y,le.z),le[x]=0,le[m]=0,le[u]=C>0?1:-1,h.push(le.x,le.y,le.z),d.push(Ne/N),d.push(1-se/U),J+=1}}for(let se=0;se<U;se++)for(let we=0;we<N;we++){let Ne=p+we+F*se,He=p+we+F*(se+1),it=p+(we+1)+F*(se+1),tt=p+(we+1)+F*se;c.push(Ne,He,tt),c.push(He,it,tt),q+=6}o.addGroup(f,q,b),f+=q,p+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Xi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function nn(i){let e={};for(let t=0;t<i.length;t++){let n=Xi(i[t]);for(let r in n)e[r]=n[r]}return e}function Od(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ec(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}var zo={clone:Xi,merge:nn},Bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,un=class extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bd,this.fragmentShader=kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.uniformsGroups=Od(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},vs=class extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},fi=new V,qc=new We,Yc=new We,Gt=class extends vs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,qc,Yc),t.subVectors(Yc,qc)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ds*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},dr=-90,fr=1,Ea=class extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Gt(dr,fr,e,t);r.layers=this.layers,this.add(r);let s=new Gt(dr,fr,e,t);s.layers=this.layers,this.add(s);let a=new Gt(dr,fr,e,t);a.layers=this.layers,this.add(a);let o=new Gt(dr,fr,e,t);o.layers=this.layers,this.add(o);let c=new Gt(dr,fr,e,t);c.layers=this.layers,this.add(c);let l=new Gt(dr,fr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===En)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,p,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ms=class extends tn{constructor(e=[],t=Hi,n,r,s,a,o,c,l,h){super(e,t,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Aa=class extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ms(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $t(5,5,5),s=new un({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:ri});s.uniforms.tEquirect.value=t;let a=new ht(r,s),o=t.minFilter;return t.minFilter===vi&&(t.minFilter=An),new Ea(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},Ve=class extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vd={type:"move"},Rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),u=this._getHandJoint(l,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&p>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vd)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Li=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new et(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ui=class extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},bs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ba,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ln=new V,Ir=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array),s=Et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Pr=class extends Bn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},pr,ss=new V,mr=new V,gr=new V,xr=new We,as=new We,Yh=new St,la=new V,os=new V,ca=new V,Zc=new We,bl=new We,Jc=new We,Ss=class extends Mt{constructor(e=new Pr){if(super(),this.isSprite=!0,this.type="Sprite",pr===void 0){pr=new Tt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bs(t,5);pr.setIndex([0,1,2,0,2,3]),pr.setAttribute("position",new Ir(n,3,0,!1)),pr.setAttribute("uv",new Ir(n,2,3,!1))}this.geometry=pr,this.material=e,this.center=new We(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mr.setFromMatrixScale(this.matrixWorld),Yh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mr.multiplyScalar(-gr.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let a=this.center;ha(la.set(-.5,-.5,0),gr,a,mr,r,s),ha(os.set(.5,-.5,0),gr,a,mr,r,s),ha(ca.set(.5,.5,0),gr,a,mr,r,s),Zc.set(0,0),bl.set(1,0),Jc.set(1,1);let o=e.ray.intersectTriangle(la,os,ca,!1,ss);if(o===null&&(ha(os.set(-.5,.5,0),gr,a,mr,r,s),bl.set(0,1),o=e.ray.intersectTriangle(la,ca,os,!1,ss),o===null))return;let c=e.ray.origin.distanceTo(ss);c<e.near||c>e.far||t.push({distance:c,point:ss.clone(),uv:$n.getInterpolation(ss,la,os,ca,Zc,bl,Jc,new We),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ha(i,e,t,n,r,s){xr.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(as.x=s*xr.x-r*xr.y,as.y=r*xr.x+s*xr.y):as.copy(xr),i.copy(e),i.x+=as.x,i.y+=as.y,i.applyMatrix4(Yh)}var Ca=class extends tn{constructor(e=null,t=1,n=1,r,s,a,o,c,l=cn,h=cn,d,p){super(null,a,o,c,l,h,r,s,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dr=class extends Ht{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},_r=new St,$c=new St,ua=[],Kc=new On,Gd=new St,ls=new ht,cs=new ni,bt=class extends ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Dr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Gd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new On),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_r),Kc.copy(e.boundingBox).applyMatrix4(_r),this.boundingBox.union(Kc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_r),cs.copy(e.boundingSphere).applyMatrix4(_r),this.boundingSphere.union(cs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ls.geometry=this.geometry,ls.material=this.material,ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cs.copy(this.boundingSphere),cs.applyMatrix4(n),e.ray.intersectsSphere(cs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,_r),$c.multiplyMatrices(n,_r),ls.matrixWorld=$c,ls.raycast(e,ua);for(let a=0,o=ua.length;a<o;a++){let c=ua[a];c.instanceId=s,c.object=this,t.push(c)}ua.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Dr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ca(new Float32Array(r*this.count),r,this.count,ro,Pn));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Sl=new V,Hd=new V,Wd=new lt,Fn=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Sl.subVectors(n,t).cross(Hd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Sl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Wd.getNormalMatrix(e),r=this.coplanarPoint(Sl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ci=new ni,Xd=new We(.5,.5),da=new V,Lr=class{constructor(e=new Fn,t=new Fn,n=new Fn,r=new Fn,s=new Fn,a=new Fn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],d=s[5],p=s[6],f=s[7],g=s[8],x=s[9],m=s[10],u=s[11],_=s[12],w=s[13],y=s[14],I=s[15];if(r[0].setComponents(l-a,f-h,u-g,I-_).normalize(),r[1].setComponents(l+a,f+h,u+g,I+_).normalize(),r[2].setComponents(l+o,f+d,u+x,I+w).normalize(),r[3].setComponents(l-o,f-d,u-x,I-w).normalize(),n)r[4].setComponents(c,p,m,y).normalize(),r[5].setComponents(l-c,f-p,u-m,I-y).normalize();else if(r[4].setComponents(l-c,f-p,u-m,I-y).normalize(),t===En)r[5].setComponents(l+c,f+p,u+m,I+y).normalize();else if(t===gs)r[5].setComponents(c,p,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){Ci.center.set(0,0,0);let t=Xd.distanceTo(e.center);return Ci.radius=.7071067811865476+t,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(da.x=r.normal.x>0?e.max.x:e.min.x,da.y=r.normal.y>0?e.max.y:e.min.y,da.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(da)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var gi=class extends Bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ra=new V,Ia=new V,jc=new St,hs=new Ar,fa=new ni,wl=new V,Qc=new V,Ni=class extends Mt{constructor(e=new Tt,t=new gi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ra.fromBufferAttribute(t,r-1),Ia.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ra.distanceTo(Ia);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(r),fa.radius+=s,e.ray.intersectsSphere(fa)===!1)return;jc.copy(r).invert(),hs.copy(e.ray).applyMatrix4(jc);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let u=h.getX(x),_=h.getX(x+1),w=pa(this,e,hs,c,u,_,x);w&&t.push(w)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),u=pa(this,e,hs,c,x,m,g-1);u&&t.push(u)}}else{let f=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let u=pa(this,e,hs,c,x,x+1,x);u&&t.push(u)}if(this.isLineLoop){let x=pa(this,e,hs,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function pa(i,e,t,n,r,s,a){let o=i.geometry.attributes.position;if(Ra.fromBufferAttribute(o,r),Ia.fromBufferAttribute(o,s),t.distanceSqToSegment(Ra,Ia,wl,Qc)>n)return;wl.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(wl);if(!(l<e.near||l>e.far))return{distance:l,point:Qc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var xi=class extends tn{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ws=class extends tn{constructor(e,t,n=Mi,r,s,a,o=cn,c=cn,l,h=br,d=1){if(h!==br&&h!==Vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:d};super(p,r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Er(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ts=class extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var It=class i extends Tt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],d=[],p=[],f=[],g=0,x=[],m=n/2,u=0;_(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new st(d,3)),this.setAttribute("normal",new st(p,3)),this.setAttribute("uv",new st(f,2));function _(){let y=new V,I=new V,C=0,N=(t-e)/n;for(let U=0;U<=s;U++){let b=[],M=U/s,T=M*(t-e)+e;for(let L=0;L<=r;L++){let B=L/r,D=B*c+o,F=Math.sin(D),O=Math.cos(D);I.x=T*F,I.y=-M*n+m,I.z=T*O,d.push(I.x,I.y,I.z),y.set(F,N,O).normalize(),p.push(y.x,y.y,y.z),f.push(B,1-M),b.push(g++)}x.push(b)}for(let U=0;U<r;U++)for(let b=0;b<s;b++){let M=x[b][U],T=x[b+1][U],L=x[b+1][U+1],B=x[b][U+1];(e>0||b!==0)&&(h.push(M,T,B),C+=3),(t>0||b!==s-1)&&(h.push(T,L,B),C+=3)}l.addGroup(u,C,0),u+=C}function w(y){let I=g,C=new We,N=new V,U=0,b=y===!0?e:t,M=y===!0?1:-1;for(let L=1;L<=r;L++)d.push(0,m*M,0),p.push(0,M,0),f.push(.5,.5),g++;let T=g;for(let L=0;L<=r;L++){let D=L/r*c+o,F=Math.cos(D),O=Math.sin(D);N.x=b*O,N.y=m*M,N.z=b*F,d.push(N.x,N.y,N.z),p.push(0,M,0),C.x=F*.5+.5,C.y=O*.5*M+.5,f.push(C.x,C.y),g++}for(let L=0;L<r;L++){let B=I+L,D=T+L;y===!0?h.push(D,D+1,B):h.push(D+1,D,B),U+=3}l.addGroup(u,U,y===!0?1:2),u+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Rn=class i extends It{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Pa=class i extends Tt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];o(r),l(n),h(),this.setAttribute("position",new st(s,3)),this.setAttribute("normal",new st(s.slice(),3)),this.setAttribute("uv",new st(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let w=new V,y=new V,I=new V;for(let C=0;C<t.length;C+=3)f(t[C+0],w),f(t[C+1],y),f(t[C+2],I),c(w,y,I,_)}function c(_,w,y,I){let C=I+1,N=[];for(let U=0;U<=C;U++){N[U]=[];let b=_.clone().lerp(y,U/C),M=w.clone().lerp(y,U/C),T=C-U;for(let L=0;L<=T;L++)L===0&&U===C?N[U][L]=b:N[U][L]=b.clone().lerp(M,L/T)}for(let U=0;U<C;U++)for(let b=0;b<2*(C-U)-1;b++){let M=Math.floor(b/2);b%2===0?(p(N[U][M+1]),p(N[U+1][M]),p(N[U][M])):(p(N[U][M+1]),p(N[U+1][M+1]),p(N[U+1][M]))}}function l(_){let w=new V;for(let y=0;y<s.length;y+=3)w.x=s[y+0],w.y=s[y+1],w.z=s[y+2],w.normalize().multiplyScalar(_),s[y+0]=w.x,s[y+1]=w.y,s[y+2]=w.z}function h(){let _=new V;for(let w=0;w<s.length;w+=3){_.x=s[w+0],_.y=s[w+1],_.z=s[w+2];let y=m(_)/2/Math.PI+.5,I=u(_)/Math.PI+.5;a.push(y,1-I)}g(),d()}function d(){for(let _=0;_<a.length;_+=6){let w=a[_+0],y=a[_+2],I=a[_+4],C=Math.max(w,y,I),N=Math.min(w,y,I);C>.9&&N<.1&&(w<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),I<.2&&(a[_+4]+=1))}}function p(_){s.push(_.x,_.y,_.z)}function f(_,w){let y=_*3;w.x=e[y+0],w.y=e[y+1],w.z=e[y+2]}function g(){let _=new V,w=new V,y=new V,I=new V,C=new We,N=new We,U=new We;for(let b=0,M=0;b<s.length;b+=9,M+=6){_.set(s[b+0],s[b+1],s[b+2]),w.set(s[b+3],s[b+4],s[b+5]),y.set(s[b+6],s[b+7],s[b+8]),C.set(a[M+0],a[M+1]),N.set(a[M+2],a[M+3]),U.set(a[M+4],a[M+5]),I.copy(_).add(w).add(y).divideScalar(3);let T=m(I);x(C,M+0,_,T),x(N,M+2,w,T),x(U,M+4,y,T)}}function x(_,w,y,I){I<0&&_.x===1&&(a[w]=_.x-1),y.x===0&&y.z===0&&(a[w]=I/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function u(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Fi=class i extends Pa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Es=class i extends Tt{constructor(e=[new We(0,-.5),new We(.5,0),new We(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=pt(r,0,Math.PI*2);let s=[],a=[],o=[],c=[],l=[],h=1/t,d=new V,p=new We,f=new V,g=new V,x=new V,m=0,u=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,u=e[_+1].y-e[_].y,f.x=u*1,f.y=-m,f.z=u*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,u=e[_+1].y-e[_].y,f.x=u*1,f.y=-m,f.z=u*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let _=0;_<=t;_++){let w=n+_*h*r,y=Math.sin(w),I=Math.cos(w);for(let C=0;C<=e.length-1;C++){d.x=e[C].x*y,d.y=e[C].y,d.z=e[C].x*I,a.push(d.x,d.y,d.z),p.x=_/t,p.y=C/(e.length-1),o.push(p.x,p.y);let N=c[3*C+0]*y,U=c[3*C+1],b=c[3*C+0]*I;l.push(N,U,b)}}for(let _=0;_<t;_++)for(let w=0;w<e.length-1;w++){let y=w+_*e.length,I=y,C=y+e.length,N=y+e.length+1,U=y+1;s.push(I,C,U),s.push(N,U,C)}this.setIndex(s),this.setAttribute("position",new st(a,3)),this.setAttribute("uv",new st(o,2)),this.setAttribute("normal",new st(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var mn=class i extends Tt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,d=e/o,p=t/c,f=[],g=[],x=[],m=[];for(let u=0;u<h;u++){let _=u*p-a;for(let w=0;w<l;w++){let y=w*d-s;g.push(y,-_,0),x.push(0,0,1),m.push(w/o),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let _=0;_<o;_++){let w=_+l*u,y=_+l*(u+1),I=_+1+l*(u+1),C=_+1+l*u;f.push(w,y,C),f.push(y,I,C)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},zi=class i extends Tt{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],c=[],l=[],h=[],d=e,p=(t-e)/r,f=new V,g=new We;for(let x=0;x<=r;x++){for(let m=0;m<=n;m++){let u=s+m/n*a;f.x=d*Math.cos(u),f.y=d*Math.sin(u),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=p}for(let x=0;x<r;x++){let m=x*(n+1);for(let u=0;u<n;u++){let _=u+m,w=_,y=_+n+1,I=_+n+2,C=_+1;o.push(w,y,C),o.push(y,I,C)}}this.setIndex(o),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var dn=class i extends Tt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new V,p=new V,f=[],g=[],x=[],m=[];for(let u=0;u<=n;u++){let _=[],w=u/n,y=0;u===0&&a===0?y=.5/t:u===n&&c===Math.PI&&(y=-.5/t);for(let I=0;I<=t;I++){let C=I/t;d.x=-e*Math.cos(r+C*s)*Math.sin(a+w*o),d.y=e*Math.cos(a+w*o),d.z=e*Math.sin(r+C*s)*Math.sin(a+w*o),g.push(d.x,d.y,d.z),p.copy(d).normalize(),x.push(p.x,p.y,p.z),m.push(C+y,1-w),_.push(l++)}h.push(_)}for(let u=0;u<n;u++)for(let _=0;_<t;_++){let w=h[u][_+1],y=h[u][_],I=h[u+1][_],C=h[u+1][_+1];(u!==0||a>0)&&f.push(w,y,C),(u!==n-1||c<Math.PI)&&f.push(y,I,C)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ii=class i extends Tt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],c=[],l=[],h=new V,d=new V,p=new V;for(let f=0;f<=n;f++)for(let g=0;g<=r;g++){let x=g/r*s,m=f/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),p.subVectors(d,h).normalize(),c.push(p.x,p.y,p.z),l.push(g/r),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=r;g++){let x=(r+1)*f+g-1,m=(r+1)*(f-1)+g-1,u=(r+1)*(f-1)+g,_=(r+1)*f+g;a.push(x,m,_),a.push(m,u,_)}this.setIndex(a),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ct=class extends Bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jl,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},As=class extends Ct{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Da=class extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},La=class extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ma(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function qd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Oi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ua=class extends Oi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Al,endingEnd:Al}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Cl:s=e,o=2*t-n;break;case Rl:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Cl:a=e,c=2*n-t;break;case Rl:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,f=this._weightNext,g=(n-t)/(r-t),x=g*g,m=x*g,u=-p*m+2*p*x-p*g,_=(1+p)*m+(-1.5-2*p)*x+(-.5+p)*g+1,w=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let I=0;I!==o;++I)s[I]=u*a[h+I]+_*a[l+I]+w*a[c+I]+y*a[d+I];return s}},Na=class extends Oi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(r-t),d=1-h;for(let p=0;p!==o;++p)s[p]=a[l+p]*d+a[c+p]*h;return s}},Fa=class extends Oi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},gn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ma(t,this.TimeBufferType),this.values=ma(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ma(e.times,Array),values:ma(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Na(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ua(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ps:t=this.InterpolantFactoryMethodDiscrete;break;case Ma:t=this.InterpolantFactoryMethodLinear;break;case ga:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ps;case this.InterpolantFactoryMethodLinear:return Ma;case this.InterpolantFactoryMethodSmooth:return ga}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&qd(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ga,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(r)c=!0;else{let d=o*n,p=d-n,f=d+n;for(let g=0;g!==n;++g){let x=t[d+g];if(x!==t[p+g]||x!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,p=a*n;for(let f=0;f!==n;++f)t[p+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Ma;var _i=class extends gn{constructor(e,t,n){super(e,t,n)}};_i.prototype.ValueTypeName="bool";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=ps;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var za=class extends gn{constructor(e,t,n,r){super(e,t,n,r)}};za.prototype.ValueTypeName="color";var Oa=class extends gn{constructor(e,t,n,r){super(e,t,n,r)}};Oa.prototype.ValueTypeName="number";var Ba=class extends Oi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),l=e*o;for(let h=l+o;l!==h;l+=4)ti.slerpFlat(s,0,a,l-o,a,l,c);return s}},Cs=class extends gn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ba(this.times,this.values,this.getValueSize(),e)}};Cs.prototype.ValueTypeName="quaternion";Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends gn{constructor(e,t,n){super(e,t,n)}};yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=ps;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var ka=class extends gn{constructor(e,t,n,r){super(e,t,n,r)}};ka.prototype.ValueTypeName="vector";var xa={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Va=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=l.length;d<p;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Zh=new Va,Ur=class{constructor(e){this.manager=e!==void 0?e:Zh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ur.DEFAULT_MATERIAL_NAME="__DEFAULT";var yr=new WeakMap,Ga=class extends Ur{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=xa.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=yr.get(a);d===void 0&&(d=[],yr.set(a,d)),d.push({onLoad:t,onError:r})}return a}let o=wr("img");function c(){h(),t&&t(this);let d=yr.get(this)||[];for(let p=0;p<d.length;p++){let f=d[p];f.onLoad&&f.onLoad(this)}yr.delete(this),s.manager.itemEnd(e)}function l(d){h(),r&&r(d),xa.remove(`image:${e}`);let p=yr.get(this)||[];for(let f=0;f<p.length;f++){let g=p[f];g.onError&&g.onError(d)}yr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),xa.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var Rs=class extends Ur{constructor(e){super(e)}load(e,t,n,r){let s=new tn,a=new Ga(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},Nr=class extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Bi=class extends Nr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Tl=new St,eh=new V,th=new V,Ha=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lr,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;eh.setFromMatrixPosition(e.matrixWorld),t.position.copy(eh),th.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(th),t.updateMatrixWorld(),Tl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var nh=new St,us=new V,El=new V,Pl=class extends Ha{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),us.setFromMatrixPosition(e.matrixWorld),n.position.copy(us),El.copy(n.position),El.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(El),n.updateMatrixWorld(),r.makeTranslation(-us.x,-us.y,-us.z),nh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nh,n.coordinateSystem,n.reversedDepth)}},ki=class extends Nr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Pl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Is=class extends vs{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Dl=class extends Ha{constructor(){super(new Is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vi=class extends Nr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Dl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Wa=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var tc="\\[\\]\\.:\\/",Yd=new RegExp("["+tc+"]","g"),nc="[^"+tc+"]",Zd="[^"+tc.replace("\\.","")+"]",Jd=/((?:WC+[\/:])*)/.source.replace("WC",nc),$d=/(WCOD+)?/.source.replace("WCOD",Zd),Kd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nc),jd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nc),Qd=new RegExp("^"+Jd+$d+Kd+jd+"$"),ef=["material","materials","bones","map"],Ll=class{constructor(e,t,n){let r=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yd,"")}static parseTrackName(e){let t=Qd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);ef.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[r];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=Ll;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ex=new Float32Array(1);var ih=new St,Gi=class{constructor(e,t,n=0,r=1/0){this.ray=new Ar(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Cr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ih.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ih),this}intersectObject(e,t=!0,n=[]){return Ul(e,this,n,t),n.sort(rh),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Ul(e[r],this,n,t);return n.sort(rh),n}};function rh(i,e){return i.distance-e.distance}function Ul(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)Ul(s[a],e,t,!0)}}function ic(i,e,t,n){let r=tf(n);switch(t){case ql:return i*e;case ro:return i*e/r.components*r.byteLength;case so:return i*e/r.components*r.byteLength;case Zl:return i*e*2/r.components*r.byteLength;case ao:return i*e*2/r.components*r.byteLength;case Yl:return i*e*3/r.components*r.byteLength;case vn:return i*e*4/r.components*r.byteLength;case oo:return i*e*4/r.components*r.byteLength;case Ls:case Us:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ns:case Fs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case co:case uo:return Math.max(i,16)*Math.max(e,8)/4;case lo:case ho:return Math.max(i,8)*Math.max(e,8)/2;case fo:case po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _o:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case yo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case vo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case bo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case So:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case wo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case To:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Co:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ro:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Io:case Po:case Do:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Lo:case Uo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case No:case Fo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tf(i){switch(i){case In:case Gl:return{byteLength:1,components:1};case Or:case Hl:case Br:return{byteLength:2,components:1};case no:case io:return{byteLength:2,components:4};case Mi:case to:case Pn:return{byteLength:4,components:1};case Wl:case Xl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _u(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function of(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<d.length;f++){let g=d[p],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++p,d[p]=x)}d.length=p+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var lf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cf=`#ifdef USE_ALPHAHASH
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
#endif`,hf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pf=`#ifdef USE_AOMAP
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
#endif`,mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gf=`#ifdef USE_BATCHING
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
#endif`,xf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_f=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mf=`#ifdef USE_IRIDESCENCE
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
#endif`,bf=`#ifdef USE_BUMPMAP
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
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Pf=`#define PI 3.141592653589793
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
} // validated`,Df=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lf=`vec3 transformedNormal = objectNormal;
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
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ff=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Of="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gf=`#ifdef USE_ENVMAP
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
#endif`,Hf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jf=`#ifdef USE_GRADIENTMAP
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
}`,$f=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qf=`uniform bool receiveShadow;
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
#endif`,ep=`#ifdef USE_ENVMAP
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
#endif`,tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sp=`PhysicalMaterial material;
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
#endif`,ap=`struct PhysicalMaterial {
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
}`,op=`
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
#endif`,lp=`#if defined( RE_IndirectDiffuse )
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
#endif`,cp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,up=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xp=`#if defined( USE_POINTS_UV )
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
#endif`,_p=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sp=`#ifdef USE_MORPHTARGETS
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
#endif`,wp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ip=`#ifdef USE_NORMALMAP
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
#endif`,Pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qp=`float getShadowMask() {
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
}`,Yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zp=`#ifdef USE_SKINNING
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
#endif`,Jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$p=`#ifdef USE_SKINNING
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
#endif`,Kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,em=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tm=`#ifdef USE_TRANSMISSION
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
#endif`,nm=`#ifdef USE_TRANSMISSION
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lm=`uniform sampler2D t2D;
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
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`#include <common>
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
}`,pm=`#if DEPTH_PACKING == 3200
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
}`,mm=`#define DISTANCE
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
}`,gm=`#define DISTANCE
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_m=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`uniform float scale;
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
}`,vm=`uniform vec3 diffuse;
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
}`,Mm=`#include <common>
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
}`,bm=`uniform vec3 diffuse;
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
}`,Sm=`#define LAMBERT
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
}`,wm=`#define LAMBERT
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
}`,Tm=`#define MATCAP
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
}`,Em=`#define MATCAP
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
}`,Am=`#define NORMAL
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
}`,Cm=`#define NORMAL
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
}`,Rm=`#define PHONG
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
}`,Im=`#define PHONG
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
}`,Pm=`#define STANDARD
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
}`,Dm=`#define STANDARD
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
}`,Lm=`#define TOON
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
}`,Um=`#define TOON
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
}`,Nm=`uniform float size;
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
}`,Fm=`uniform vec3 diffuse;
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
}`,zm=`#include <common>
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
}`,Om=`uniform vec3 color;
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
}`,Bm=`uniform float rotation;
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
}`,km=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:lf,alphahash_pars_fragment:cf,alphamap_fragment:hf,alphamap_pars_fragment:uf,alphatest_fragment:df,alphatest_pars_fragment:ff,aomap_fragment:pf,aomap_pars_fragment:mf,batching_pars_vertex:gf,batching_vertex:xf,begin_vertex:_f,beginnormal_vertex:yf,bsdfs:vf,iridescence_fragment:Mf,bumpmap_pars_fragment:bf,clipping_planes_fragment:Sf,clipping_planes_pars_fragment:wf,clipping_planes_pars_vertex:Tf,clipping_planes_vertex:Ef,color_fragment:Af,color_pars_fragment:Cf,color_pars_vertex:Rf,color_vertex:If,common:Pf,cube_uv_reflection_fragment:Df,defaultnormal_vertex:Lf,displacementmap_pars_vertex:Uf,displacementmap_vertex:Nf,emissivemap_fragment:Ff,emissivemap_pars_fragment:zf,colorspace_fragment:Of,colorspace_pars_fragment:Bf,envmap_fragment:kf,envmap_common_pars_fragment:Vf,envmap_pars_fragment:Gf,envmap_pars_vertex:Hf,envmap_physical_pars_fragment:ep,envmap_vertex:Wf,fog_vertex:Xf,fog_pars_vertex:qf,fog_fragment:Yf,fog_pars_fragment:Zf,gradientmap_pars_fragment:Jf,lightmap_pars_fragment:$f,lights_lambert_fragment:Kf,lights_lambert_pars_fragment:jf,lights_pars_begin:Qf,lights_toon_fragment:tp,lights_toon_pars_fragment:np,lights_phong_fragment:ip,lights_phong_pars_fragment:rp,lights_physical_fragment:sp,lights_physical_pars_fragment:ap,lights_fragment_begin:op,lights_fragment_maps:lp,lights_fragment_end:cp,logdepthbuf_fragment:hp,logdepthbuf_pars_fragment:up,logdepthbuf_pars_vertex:dp,logdepthbuf_vertex:fp,map_fragment:pp,map_pars_fragment:mp,map_particle_fragment:gp,map_particle_pars_fragment:xp,metalnessmap_fragment:_p,metalnessmap_pars_fragment:yp,morphinstance_vertex:vp,morphcolor_vertex:Mp,morphnormal_vertex:bp,morphtarget_pars_vertex:Sp,morphtarget_vertex:wp,normal_fragment_begin:Tp,normal_fragment_maps:Ep,normal_pars_fragment:Ap,normal_pars_vertex:Cp,normal_vertex:Rp,normalmap_pars_fragment:Ip,clearcoat_normal_fragment_begin:Pp,clearcoat_normal_fragment_maps:Dp,clearcoat_pars_fragment:Lp,iridescence_pars_fragment:Up,opaque_fragment:Np,packing:Fp,premultiplied_alpha_fragment:zp,project_vertex:Op,dithering_fragment:Bp,dithering_pars_fragment:kp,roughnessmap_fragment:Vp,roughnessmap_pars_fragment:Gp,shadowmap_pars_fragment:Hp,shadowmap_pars_vertex:Wp,shadowmap_vertex:Xp,shadowmask_pars_fragment:qp,skinbase_vertex:Yp,skinning_pars_vertex:Zp,skinning_vertex:Jp,skinnormal_vertex:$p,specularmap_fragment:Kp,specularmap_pars_fragment:jp,tonemapping_fragment:Qp,tonemapping_pars_fragment:em,transmission_fragment:tm,transmission_pars_fragment:nm,uv_pars_fragment:im,uv_pars_vertex:rm,uv_vertex:sm,worldpos_vertex:am,background_vert:om,background_frag:lm,backgroundCube_vert:cm,backgroundCube_frag:hm,cube_vert:um,cube_frag:dm,depth_vert:fm,depth_frag:pm,distanceRGBA_vert:mm,distanceRGBA_frag:gm,equirect_vert:xm,equirect_frag:_m,linedashed_vert:ym,linedashed_frag:vm,meshbasic_vert:Mm,meshbasic_frag:bm,meshlambert_vert:Sm,meshlambert_frag:wm,meshmatcap_vert:Tm,meshmatcap_frag:Em,meshnormal_vert:Am,meshnormal_frag:Cm,meshphong_vert:Rm,meshphong_frag:Im,meshphysical_vert:Pm,meshphysical_frag:Dm,meshtoon_vert:Lm,meshtoon_frag:Um,points_vert:Nm,points_frag:Fm,shadow_vert:zm,shadow_frag:Om,sprite_vert:Bm,sprite_frag:km},Ce={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Vn={basic:{uniforms:nn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:nn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new et(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:nn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:nn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:nn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new et(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:nn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:nn([Ce.points,Ce.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:nn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:nn([Ce.common,Ce.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:nn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:nn([Ce.sprite,Ce.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:nn([Ce.common,Ce.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:nn([Ce.lights,Ce.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Vn.physical={uniforms:nn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var Oo={r:0,b:0,g:0},qi=new Cn,Vm=new St;function Gm(i,e,t,n,r,s,a){let o=new et(0),c=s===!0?0:1,l,h,d=null,p=0,f=null;function g(w){let y=w.isScene===!0?w.background:null;return y&&y.isTexture&&(y=(w.backgroundBlurriness>0?t:e).get(y)),y}function x(w){let y=!1,I=g(w);I===null?u(o,c):I&&I.isColor&&(u(I,1),y=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,y){let I=g(y);I&&(I.isCubeTexture||I.mapping===Ps)?(h===void 0&&(h=new ht(new $t(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Xi(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,N,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),qi.copy(y.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(qi)),h.material.toneMapped=_t.getTransfer(I.colorSpace)!==At,(d!==I||p!==I.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=I,p=I.version,f=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new ht(new mn(2,2),new un({name:"BackgroundMaterial",uniforms:Xi(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=_t.getTransfer(I.colorSpace)!==At,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(d!==I||p!==I.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=I,p=I.version,f=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function u(w,y){w.getRGB(Oo,ec(i)),n.buffers.color.setClear(Oo.r,Oo.g,Oo.b,y,a)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,y=1){o.set(w),c=y,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,u(o,c)},render:x,addToRenderList:m,dispose:_}}function Hm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null),s=r,a=!1;function o(M,T,L,B,D){let F=!1,O=d(B,L,T);s!==O&&(s=O,l(s.object)),F=f(M,B,L,D),F&&g(M,B,L,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,y(M,T,L,B),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,T,L){let B=L.wireframe===!0,D=n[M.id];D===void 0&&(D={},n[M.id]=D);let F=D[T.id];F===void 0&&(F={},D[T.id]=F);let O=F[B];return O===void 0&&(O=p(c()),F[B]=O),O}function p(M){let T=[],L=[],B=[];for(let D=0;D<t;D++)T[D]=0,L[D]=0,B[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:L,attributeDivisors:B,object:M,attributes:{},index:null}}function f(M,T,L,B){let D=s.attributes,F=T.attributes,O=0,J=L.getAttributes();for(let q in J)if(J[q].location>=0){let se=D[q],we=F[q];if(we===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(we=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(we=M.instanceColor)),se===void 0||se.attribute!==we||we&&se.data!==we.data)return!0;O++}return s.attributesNum!==O||s.index!==B}function g(M,T,L,B){let D={},F=T.attributes,O=0,J=L.getAttributes();for(let q in J)if(J[q].location>=0){let se=F[q];se===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(se=M.instanceColor));let we={};we.attribute=se,se&&se.data&&(we.data=se.data),D[q]=we,O++}s.attributes=D,s.attributesNum=O,s.index=B}function x(){let M=s.newAttributes;for(let T=0,L=M.length;T<L;T++)M[T]=0}function m(M){u(M,0)}function u(M,T){let L=s.newAttributes,B=s.enabledAttributes,D=s.attributeDivisors;L[M]=1,B[M]===0&&(i.enableVertexAttribArray(M),B[M]=1),D[M]!==T&&(i.vertexAttribDivisor(M,T),D[M]=T)}function _(){let M=s.newAttributes,T=s.enabledAttributes;for(let L=0,B=T.length;L<B;L++)T[L]!==M[L]&&(i.disableVertexAttribArray(L),T[L]=0)}function w(M,T,L,B,D,F,O){O===!0?i.vertexAttribIPointer(M,T,L,D,F):i.vertexAttribPointer(M,T,L,B,D,F)}function y(M,T,L,B){x();let D=B.attributes,F=L.getAttributes(),O=T.defaultAttributeValues;for(let J in F){let q=F[J];if(q.location>=0){let le=D[J];if(le===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),le!==void 0){let se=le.normalized,we=le.itemSize,Ne=e.get(le);if(Ne===void 0)continue;let He=Ne.buffer,it=Ne.type,tt=Ne.bytesPerElement,Y=it===i.INT||it===i.UNSIGNED_INT||le.gpuType===to;if(le.isInterleavedBufferAttribute){let K=le.data,_e=K.stride,Oe=le.offset;if(K.isInstancedInterleavedBuffer){for(let Ue=0;Ue<q.locationSize;Ue++)u(q.location+Ue,K.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Ue=0;Ue<q.locationSize;Ue++)m(q.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,He);for(let Ue=0;Ue<q.locationSize;Ue++)w(q.location+Ue,we/q.locationSize,it,se,_e*tt,(Oe+we/q.locationSize*Ue)*tt,Y)}else{if(le.isInstancedBufferAttribute){for(let K=0;K<q.locationSize;K++)u(q.location+K,le.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let K=0;K<q.locationSize;K++)m(q.location+K);i.bindBuffer(i.ARRAY_BUFFER,He);for(let K=0;K<q.locationSize;K++)w(q.location+K,we/q.locationSize,it,se,we*tt,we/q.locationSize*K*tt,Y)}}else if(O!==void 0){let se=O[J];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(q.location,se);break;case 3:i.vertexAttrib3fv(q.location,se);break;case 4:i.vertexAttrib4fv(q.location,se);break;default:i.vertexAttrib1fv(q.location,se)}}}}_()}function I(){U();for(let M in n){let T=n[M];for(let L in T){let B=T[L];for(let D in B)h(B[D].object),delete B[D];delete T[L]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;let T=n[M.id];for(let L in T){let B=T[L];for(let D in B)h(B[D].object),delete B[D];delete T[L]}delete n[M.id]}function N(M){for(let T in n){let L=n[T];if(L[M.id]===void 0)continue;let B=L[M.id];for(let D in B)h(B[D].object),delete B[D];delete L[M.id]}}function U(){b(),a=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function Wm(i,e,t){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function o(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,n,1)}function c(l,h,d,p){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*p[x];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Xm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(N){return!(N!==vn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(N){let U=N===Br&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==In&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Pn&&!U)}function c(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:_,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:I,maxSamples:C}}function qm(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Fn,o=new lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let f=d.length!==0||p||n!==0||r;return r=p,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{let _=s?0:n,w=_*4,y=u.clippingState||null;c.value=y,y=h(g,p,w,f);for(let I=0;I!==w;++I)y[I]=t[I];u.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,p,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let u=f+x*4,_=p.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let w=0,y=f;w!==x;++w,y+=4)a.copy(d[w]).applyMatrix4(_,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Ym(i){let e=new WeakMap;function t(a,o){return o===ja?a.mapping=Hi:o===Qa&&(a.mapping=Wi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ja||o===Qa)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Aa(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Hr=4,Jh=[.125,.215,.35,.446,.526,.582],Ji=20,rc=new Is,$h=new et,sc=null,ac=0,oc=0,lc=!1,Zi=(1+Math.sqrt(5))/2,Gr=1/Zi,Kh=[new V(-Zi,Gr,0),new V(Zi,Gr,0),new V(-Gr,0,Zi),new V(Gr,0,Zi),new V(0,Zi,-Gr),new V(0,Zi,Gr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],Zm=new V,Vo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=Zm}=s;sc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sc,ac,oc),this._renderer.xr.enabled=lc,e.scissorTest=!1,Bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===Wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:Br,format:vn,colorSpace:Di,depthBuffer:!1},r=jh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jh(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jm(s)),this._blurMaterial=$m(s,e,t)}return r}_compileMaterial(e){let t=new ht(this._lodPlanes[0],e);this._renderer.compile(t,rc)}_sceneToCubeUV(e,t,n,r,s){let c=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor($h),d.toneMapping=si,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));let x=new hn({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),m=new ht(new $t,x),u=!1,_=e.background;_?_.isColor&&(x.color.copy(_),e.background=null,u=!0):(x.color.copy($h),u=!0);for(let w=0;w<6;w++){let y=w%3;y===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[w],s.y,s.z)):y===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[w]));let I=this._cubeSize;Bo(r,y*I,w>2?I:0,I,I),d.setRenderTarget(r),u&&d.render(m,c),d.render(e,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=p,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Hi||e.mapping===Wi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qh());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new ht(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;Bo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,rc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Kh[(r-s-1)%Kh.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new ht(this._lodPlanes[r],l),p=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ji-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):Ji;m>Ji&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ji}`);let u=[],_=0;for(let N=0;N<Ji;++N){let U=N/x,b=Math.exp(-U*U/2);u.push(b),N===0?_+=b:N<m&&(_+=2*b)}for(let N=0;N<u.length;N++)u[N]=u[N]/_;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:w}=this;p.dTheta.value=g,p.mipInt.value=w-n;let y=this._sizeLods[r],I=3*y*(r>w-Hr?r-w+Hr:0),C=4*(this._cubeSize-y);Bo(t,I,C,3*y,2*y),c.setRenderTarget(t),c.render(d,rc)}};function Jm(i){let e=[],t=[],n=[],r=i,s=i-Hr+1+Jh.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);t.push(o);let c=1/o;a>i-Hr?c=Jh[a-i+Hr-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,d=1+l,p=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,x=3,m=2,u=1,_=new Float32Array(x*g*f),w=new Float32Array(m*g*f),y=new Float32Array(u*g*f);for(let C=0;C<f;C++){let N=C%3*2/3-1,U=C>2?0:-1,b=[N,U,0,N+2/3,U,0,N+2/3,U+1,0,N,U,0,N+2/3,U+1,0,N,U+1,0];_.set(b,x*g*C),w.set(p,m*g*C);let M=[C,C,C,C,C,C];y.set(M,u*g*C)}let I=new Tt;I.setAttribute("position",new Ht(_,x)),I.setAttribute("uv",new Ht(w,m)),I.setAttribute("faceIndex",new Ht(y,u)),e.push(I),r>Hr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jh(i,e,t){let n=new zn(i,e,t);return n.texture.mapping=Ps,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function $m(i,e,t){let n=new Float32Array(Ji),r=new V(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_c(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Qh(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function eu(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function _c(){return`

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
	`}function Km(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===ja||c===Qa,h=c===Hi||c===Wi;if(l||h){let d=e.get(o),p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new Vo(i)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&r(f)?(t===null&&(t=new Vo(i)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function jm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Tr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Qm(i,e,t,n){let r={},s=new WeakMap;function a(d){let p=d.target;p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete r[p.id];let f=s.get(p);f&&(e.remove(f),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,t.memory.geometries++),p}function c(d){let p=d.attributes;for(let f in p)e.update(p[f],i.ARRAY_BUFFER)}function l(d){let p=[],f=d.index,g=d.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let w=0,y=_.length;w<y;w+=3){let I=_[w+0],C=_[w+1],N=_[w+2];p.push(I,C,C,N,N,I)}}else if(g!==void 0){let _=g.array;x=g.version;for(let w=0,y=_.length/3-1;w<y;w+=3){let I=w+0,C=w+1,N=w+2;p.push(I,C,C,N,N,I)}}else return;let m=new(Ql(p)?ys:_s)(p,1);m.version=x;let u=s.get(d);u&&e.remove(u),s.set(d,m)}function h(d){let p=s.get(d);if(p){let f=d.index;f!==null&&p.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function eg(i,e,t){let n;function r(p){n=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function c(p,f){i.drawElements(n,f,s,p*a),t.update(f,n,1)}function l(p,f,g){g!==0&&(i.drawElementsInstanced(n,f,s,p*a,g),t.update(f,n,g))}function h(p,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,p,0,g);let m=0;for(let u=0;u<g;u++)m+=f[u];t.update(m,n,1)}function d(p,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)l(p[u]/a,f[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,p,0,x,0,g);let u=0;for(let _=0;_<g;_++)u+=f[_]*x[_];t.update(u,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function tg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ng(i,e,t){let n=new WeakMap,r=new yt;function s(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,p=n.get(o);if(p===void 0||p.count!==d){let b=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",b)};p!==void 0&&p.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let y=o.attributes.position.count*w,I=1;y>e.maxTextureSize&&(I=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let C=new Float32Array(y*I*4*d),N=new xs(C,y,I,d);N.type=Pn,N.needsUpdate=!0;let U=w*4;for(let M=0;M<d;M++){let T=m[M],L=u[M],B=_[M],D=y*I*4*M;for(let F=0;F<T.count;F++){let O=F*U;f===!0&&(r.fromBufferAttribute(T,F),C[D+O+0]=r.x,C[D+O+1]=r.y,C[D+O+2]=r.z,C[D+O+3]=0),g===!0&&(r.fromBufferAttribute(L,F),C[D+O+4]=r.x,C[D+O+5]=r.y,C[D+O+6]=r.z,C[D+O+7]=0),x===!0&&(r.fromBufferAttribute(B,F),C[D+O+8]=r.x,C[D+O+9]=r.y,C[D+O+10]=r.z,C[D+O+11]=B.itemSize===4?r.w:1)}}p={count:d,texture:N,size:new We(y,I)},n.set(o,p),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function ig(i,e,t,n){let r=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return d}function a(){r=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}var yu=new tn,tu=new ws(1,1),vu=new xs,Mu=new Ta,bu=new Ms,nu=[],iu=[],ru=new Float32Array(16),su=new Float32Array(9),au=new Float32Array(4);function qr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=nu[r];if(s===void 0&&(s=new Float32Array(r),nu[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Go(i,e){let t=iu[e];t===void 0&&(t=new Int32Array(e),iu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function rg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function og(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function lg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;au.set(n),i.uniformMatrix2fv(this.addr,!1,au),Xt(t,n)}}function cg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;su.set(n),i.uniformMatrix3fv(this.addr,!1,su),Xt(t,n)}}function hg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;ru.set(n),i.uniformMatrix4fv(this.addr,!1,ru),Xt(t,n)}}function ug(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function mg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function _g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function yg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(tu.compareFunction=$l,s=tu):s=yu,t.setTexture2D(e||s,r)}function vg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Mu,r)}function Mg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||bu,r)}function bg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||vu,r)}function Sg(i){switch(i){case 5126:return rg;case 35664:return sg;case 35665:return ag;case 35666:return og;case 35674:return lg;case 35675:return cg;case 35676:return hg;case 5124:case 35670:return ug;case 35667:case 35671:return dg;case 35668:case 35672:return fg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return xg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return bg}}function wg(i,e){i.uniform1fv(this.addr,e)}function Tg(i,e){let t=qr(e,this.size,2);i.uniform2fv(this.addr,t)}function Eg(i,e){let t=qr(e,this.size,3);i.uniform3fv(this.addr,t)}function Ag(i,e){let t=qr(e,this.size,4);i.uniform4fv(this.addr,t)}function Cg(i,e){let t=qr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Rg(i,e){let t=qr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ig(i,e){let t=qr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Pg(i,e){i.uniform1iv(this.addr,e)}function Dg(i,e){i.uniform2iv(this.addr,e)}function Lg(i,e){i.uniform3iv(this.addr,e)}function Ug(i,e){i.uniform4iv(this.addr,e)}function Ng(i,e){i.uniform1uiv(this.addr,e)}function Fg(i,e){i.uniform2uiv(this.addr,e)}function zg(i,e){i.uniform3uiv(this.addr,e)}function Og(i,e){i.uniform4uiv(this.addr,e)}function Bg(i,e,t){let n=this.cache,r=e.length,s=Go(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||yu,s[a])}function kg(i,e,t){let n=this.cache,r=e.length,s=Go(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Mu,s[a])}function Vg(i,e,t){let n=this.cache,r=e.length,s=Go(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||bu,s[a])}function Gg(i,e,t){let n=this.cache,r=e.length,s=Go(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||vu,s[a])}function Hg(i){switch(i){case 5126:return wg;case 35664:return Tg;case 35665:return Eg;case 35666:return Ag;case 35674:return Cg;case 35675:return Rg;case 35676:return Ig;case 5124:case 35670:return Pg;case 35667:case 35671:return Dg;case 35668:case 35672:return Lg;case 35669:case 35673:return Ug;case 5125:return Ng;case 36294:return Fg;case 36295:return zg;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Vg;case 36289:case 36303:case 36311:case 36292:return Gg}}var hc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Sg(t.type)}},uc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hg(t.type)}},dc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},cc=/(\w+)(\])?(\[|\.)?/g;function ou(i,e){i.seq.push(e),i.map[e.id]=e}function Wg(i,e,t){let n=i.name,r=n.length;for(cc.lastIndex=0;;){let s=cc.exec(n),a=cc.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){ou(t,l===void 0?new hc(o,i,e):new uc(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new dc(o),ou(t,d)),t=d}}}var Wr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Wg(s,a,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function lu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Xg=37297,qg=0;function Yg(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var cu=new lt;function Zg(i){_t._getMatrix(cu,_t.workingColorSpace,i);let e=`mat3( ${cu.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(i)){case ms:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function hu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Yg(i.getShaderSource(e),o)}else return s}function Jg(i,e){let t=Zg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function $g(i,e){let t;switch(e){case Ah:t="Linear";break;case Ch:t="Reinhard";break;case Rh:t="Cineon";break;case zr:t="ACESFilmic";break;case Ph:t="AgX";break;case Dh:t="Neutral";break;case Ih:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ko=new V;function Kg(){_t.getLuminanceCoefficients(ko);let i=ko.x.toFixed(4),e=ko.y.toFixed(4),t=ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function Qg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function e0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Os(i){return i!==""}function uu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function du(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var t0=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(i){return i.replace(t0,i0)}var n0=new Map;function i0(i,e){let t=ut[e];if(t===void 0){let n=n0.get(e);if(n!==void 0)t=ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fc(t)}var r0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fu(i){return i.replace(r0,s0)}function s0(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function a0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fr?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function o0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hi:case Wi:e="ENVMAP_TYPE_CUBE";break;case Ps:e="ENVMAP_TYPE_CUBE_UV";break}return e}function l0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Wi:e="ENVMAP_MODE_REFRACTION";break}return e}function c0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case kl:e="ENVMAP_BLENDING_MULTIPLY";break;case Th:e="ENVMAP_BLENDING_MIX";break;case Eh:e="ENVMAP_BLENDING_ADD";break}return e}function h0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function u0(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=a0(t),l=o0(t),h=l0(t),d=c0(t),p=h0(t),f=jg(t),g=Qg(s),x=r.createProgram(),m,u,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Os).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Os).join(`
`),u.length>0&&(u+=`
`)):(m=[pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),u=[pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?ut.tonemapping_pars_fragment:"",t.toneMapping!==si?$g("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,Jg("linearToOutputTexel",t.outputColorSpace),Kg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Os).join(`
`)),a=fc(a),a=uu(a,t),a=du(a,t),o=fc(o),o=uu(o,t),o=du(o,t),a=fu(a),o=fu(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===Kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let w=_+m+a,y=_+u+o,I=lu(r,r.VERTEX_SHADER,w),C=lu(r,r.FRAGMENT_SHADER,y);r.attachShader(x,I),r.attachShader(x,C),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function N(T){if(i.debug.checkShaderErrors){let L=r.getProgramInfoLog(x)||"",B=r.getShaderInfoLog(I)||"",D=r.getShaderInfoLog(C)||"",F=L.trim(),O=B.trim(),J=D.trim(),q=!0,le=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,I,C);else{let se=hu(r,I,"vertex"),we=hu(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+F+`
`+se+`
`+we)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||J==="")&&(le=!1);le&&(T.diagnostics={runnable:q,programLog:F,vertexShader:{log:O,prefix:m},fragmentShader:{log:J,prefix:u}})}r.deleteShader(I),r.deleteShader(C),U=new Wr(r,x),b=e0(r,x)}let U;this.getUniforms=function(){return U===void 0&&N(this),U};let b;this.getAttributes=function(){return b===void 0&&N(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,Xg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=C,this}var d0=0,pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new mc(e),t.set(e,n)),n}},mc=class{constructor(e){this.id=d0++,this.code=e,this.usedTimes=0}};function f0(i,e,t,n,r,s,a){let o=new Cr,c=new pc,l=new Set,h=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures,f=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,M,T,L,B){let D=L.fog,F=B.geometry,O=b.isMeshStandardMaterial?L.environment:null,J=(b.isMeshStandardMaterial?t:e).get(b.envMap||O),q=J&&J.mapping===Ps?J.image.height:null,le=g[b.type];b.precision!==null&&(f=r.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let se=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,we=se!==void 0?se.length:0,Ne=0;F.morphAttributes.position!==void 0&&(Ne=1),F.morphAttributes.normal!==void 0&&(Ne=2),F.morphAttributes.color!==void 0&&(Ne=3);let He,it,tt,Y;if(le){let xt=Vn[le];He=xt.vertexShader,it=xt.fragmentShader}else He=b.vertexShader,it=b.fragmentShader,c.update(b),tt=c.getVertexShaderID(b),Y=c.getFragmentShaderID(b);let K=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Oe=B.isInstancedMesh===!0,Ue=B.isBatchedMesh===!0,Te=!!b.map,gt=!!b.matcap,z=!!J,vt=!!b.aoMap,Je=!!b.lightMap,Ge=!!b.bumpMap,De=!!b.normalMap,wt=!!b.displacementMap,Ie=!!b.emissiveMap,Ye=!!b.metalnessMap,Pt=!!b.roughnessMap,dt=b.anisotropy>0,R=b.clearcoat>0,v=b.dispersion>0,Z=b.iridescence>0,ie=b.sheen>0,oe=b.transmission>0,te=dt&&!!b.anisotropyMap,Le=R&&!!b.clearcoatMap,pe=R&&!!b.clearcoatNormalMap,ze=R&&!!b.clearcoatRoughnessMap,Be=Z&&!!b.iridescenceMap,he=Z&&!!b.iridescenceThicknessMap,me=ie&&!!b.sheenColorMap,$e=ie&&!!b.sheenRoughnessMap,Fe=!!b.specularMap,be=!!b.specularColorMap,Ke=!!b.specularIntensityMap,G=oe&&!!b.transmissionMap,de=oe&&!!b.thicknessMap,ve=!!b.gradientMap,Re=!!b.alphaMap,fe=b.alphaTest>0,ae=!!b.alphaHash,ke=!!b.extensions,nt=si;b.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(nt=i.toneMapping);let ft={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:He,fragmentShader:it,defines:b.defines,customVertexShaderID:tt,customFragmentShaderID:Y,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Ue,batchingColor:Ue&&B._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&B.instanceColor!==null,instancingMorph:Oe&&B.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Di,alphaToCoverage:!!b.alphaToCoverage,map:Te,matcap:gt,envMap:z,envMapMode:z&&J.mapping,envMapCubeUVHeight:q,aoMap:vt,lightMap:Je,bumpMap:Ge,normalMap:De,displacementMap:p&&wt,emissiveMap:Ie,normalMapObjectSpace:De&&b.normalMapType===Fh,normalMapTangentSpace:De&&b.normalMapType===Jl,metalnessMap:Ye,roughnessMap:Pt,anisotropy:dt,anisotropyMap:te,clearcoat:R,clearcoatMap:Le,clearcoatNormalMap:pe,clearcoatRoughnessMap:ze,dispersion:v,iridescence:Z,iridescenceMap:Be,iridescenceThicknessMap:he,sheen:ie,sheenColorMap:me,sheenRoughnessMap:$e,specularMap:Fe,specularColorMap:be,specularIntensityMap:Ke,transmission:oe,transmissionMap:G,thicknessMap:de,gradientMap:ve,opaque:b.transparent===!1&&b.blending===Ii&&b.alphaToCoverage===!1,alphaMap:Re,alphaTest:fe,alphaHash:ae,combine:b.combine,mapUv:Te&&x(b.map.channel),aoMapUv:vt&&x(b.aoMap.channel),lightMapUv:Je&&x(b.lightMap.channel),bumpMapUv:Ge&&x(b.bumpMap.channel),normalMapUv:De&&x(b.normalMap.channel),displacementMapUv:wt&&x(b.displacementMap.channel),emissiveMapUv:Ie&&x(b.emissiveMap.channel),metalnessMapUv:Ye&&x(b.metalnessMap.channel),roughnessMapUv:Pt&&x(b.roughnessMap.channel),anisotropyMapUv:te&&x(b.anisotropyMap.channel),clearcoatMapUv:Le&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:he&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:me&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:$e&&x(b.sheenRoughnessMap.channel),specularMapUv:Fe&&x(b.specularMap.channel),specularColorMapUv:be&&x(b.specularColorMap.channel),specularIntensityMapUv:Ke&&x(b.specularIntensityMap.channel),transmissionMapUv:G&&x(b.transmissionMap.channel),thicknessMapUv:de&&x(b.thicknessMap.channel),alphaMapUv:Re&&x(b.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(De||dt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!F.attributes.uv&&(Te||Re),fog:!!D,useFog:b.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_e,skinning:B.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:nt,decodeVideoTexture:Te&&b.map.isVideoTexture===!0&&_t.getTransfer(b.map.colorSpace)===At,decodeVideoTextureEmissive:Ie&&b.emissiveMap.isVideoTexture===!0&&_t.getTransfer(b.emissiveMap.colorSpace)===At,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Lt,flipSided:b.side===Kt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ke&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&b.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function u(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let T in b.defines)M.push(T),M.push(b.defines[T]);return b.isRawShaderMaterial===!1&&(_(M,b),w(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function _(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function w(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function y(b){let M=g[b.type],T;if(M){let L=Vn[M];T=zo.clone(L.uniforms)}else T=b.uniforms;return T}function I(b,M){let T;for(let L=0,B=h.length;L<B;L++){let D=h[L];if(D.cacheKey===M){T=D,++T.usedTimes;break}}return T===void 0&&(T=new u0(i,M,b,s),h.push(T)),T}function C(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function N(b){c.remove(b)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:I,releaseProgram:C,releaseShaderCache:N,programs:h,dispose:U}}function p0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function m0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function mu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gu(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d,p,f,g,x,m){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:p,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[e]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=f,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=x,u.group=m),e++,u}function o(d,p,f,g,x,m){let u=a(d,p,f,g,x,m);f.transmission>0?n.push(u):f.transparent===!0?r.push(u):t.push(u)}function c(d,p,f,g,x,m){let u=a(d,p,f,g,x,m);f.transmission>0?n.unshift(u):f.transparent===!0?r.unshift(u):t.unshift(u)}function l(d,p){t.length>1&&t.sort(d||m0),n.length>1&&n.sort(p||mu),r.length>1&&r.sort(p||mu)}function h(){for(let d=e,p=i.length;d<p;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function g0(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new gu,i.set(n,[a])):r>=s.length?(a=new gu,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function x0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new et};break;case"SpotLight":t={position:new V,direction:new V,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function _0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var y0=0;function v0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function M0(i){let e=new x0,t=_0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new V);let r=new V,s=new St,a=new St;function o(l){let h=0,d=0,p=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,x=0,m=0,u=0,_=0,w=0,y=0,I=0,C=0,N=0;l.sort(v0);for(let b=0,M=l.length;b<M;b++){let T=l[b],L=T.color,B=T.intensity,D=T.distance,F=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=L.r*B,d+=L.g*B,p+=L.b*B;else if(T.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(T.sh.coefficients[O],B);N++}else if(T.isDirectionalLight){let O=e.get(T);if(O.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let J=T.shadow,q=t.get(T);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=T.shadow.matrix,_++}n.directional[f]=O,f++}else if(T.isSpotLight){let O=e.get(T);O.position.setFromMatrixPosition(T.matrixWorld),O.color.copy(L).multiplyScalar(B),O.distance=D,O.coneCos=Math.cos(T.angle),O.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),O.decay=T.decay,n.spot[x]=O;let J=T.shadow;if(T.map&&(n.spotLightMap[I]=T.map,I++,J.updateMatrices(T),T.castShadow&&C++),n.spotLightMatrix[x]=J.matrix,T.castShadow){let q=t.get(T);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=F,y++}x++}else if(T.isRectAreaLight){let O=e.get(T);O.color.copy(L).multiplyScalar(B),O.halfWidth.set(T.width*.5,0,0),O.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=O,m++}else if(T.isPointLight){let O=e.get(T);if(O.color.copy(T.color).multiplyScalar(T.intensity),O.distance=T.distance,O.decay=T.decay,T.castShadow){let J=T.shadow,q=t.get(T);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,q.shadowCameraNear=J.camera.near,q.shadowCameraFar=J.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=T.shadow.matrix,w++}n.point[g]=O,g++}else if(T.isHemisphereLight){let O=e.get(T);O.skyColor.copy(T.color).multiplyScalar(B),O.groundColor.copy(T.groundColor).multiplyScalar(B),n.hemi[u]=O,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;let U=n.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==u||U.numDirectionalShadows!==_||U.numPointShadows!==w||U.numSpotShadows!==y||U.numSpotMaps!==I||U.numLightProbes!==N)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=y+I-C,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=N,U.directionalLength=f,U.pointLength=g,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=u,U.numDirectionalShadows=_,U.numPointShadows=w,U.numSpotShadows=y,U.numSpotMaps=I,U.numLightProbes=N,n.version=y0++)}function c(l,h){let d=0,p=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let u=0,_=l.length;u<_;u++){let w=l[u];if(w.isDirectionalLight){let y=n.directional[d];y.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(w.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(w.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(w.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){let y=n.point[p];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),p++}else if(w.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function xu(i){let e=new M0(i),t=[],n=[];function r(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function b0(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new xu(i),e.set(r,[o])):s>=a.length?(o=new xu(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var S0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w0=`uniform sampler2D shadow_pass;
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
}`;function T0(i,e,t){let n=new Lr,r=new We,s=new We,a=new yt,o=new Da({depthPacking:Nh}),c=new La,l={},h=t.maxTextureSize,d={[Qn]:Kt,[Kt]:Qn,[Lt]:Lt},p=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:S0,fragmentShader:w0}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let g=new Tt;g.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ht(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fl;let u=this.type;this.render=function(C,N,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let b=i.getRenderTarget(),M=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),L=i.state;L.setBlending(ri),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let B=u!==kn&&this.type===kn,D=u===kn&&this.type!==kn;for(let F=0,O=C.length;F<O;F++){let J=C[F],q=J.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);let le=q.getFrameExtents();if(r.multiply(le),s.copy(q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/le.x),r.x=s.x*le.x,q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/le.y),r.y=s.y*le.y,q.mapSize.y=s.y)),q.map===null||B===!0||D===!0){let we=this.type!==kn?{minFilter:cn,magFilter:cn}:{};q.map!==null&&q.map.dispose(),q.map=new zn(r.x,r.y,we),q.map.texture.name=J.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let se=q.getViewportCount();for(let we=0;we<se;we++){let Ne=q.getViewport(we);a.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),L.viewport(a),q.updateMatrices(J,we),n=q.getFrustum(),y(N,U,q.camera,J,this.type)}q.isPointLightShadow!==!0&&this.type===kn&&_(q,U),q.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,T)};function _(C,N){let U=e.update(x);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new zn(r.x,r.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(N,null,U,p,x,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(N,null,U,f,x,null)}function w(C,N,U,b){let M=null,T=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)M=T;else if(M=U.isPointLight===!0?c:o,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let L=M.uuid,B=N.uuid,D=l[L];D===void 0&&(D={},l[L]=D);let F=D[B];F===void 0&&(F=M.clone(),D[B]=F,N.addEventListener("dispose",I)),M=F}if(M.visible=N.visible,M.wireframe=N.wireframe,b===kn?M.side=N.shadowSide!==null?N.shadowSide:N.side:M.side=N.shadowSide!==null?N.shadowSide:d[N.side],M.alphaMap=N.alphaMap,M.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,M.map=N.map,M.clipShadows=N.clipShadows,M.clippingPlanes=N.clippingPlanes,M.clipIntersection=N.clipIntersection,M.displacementMap=N.displacementMap,M.displacementScale=N.displacementScale,M.displacementBias=N.displacementBias,M.wireframeLinewidth=N.wireframeLinewidth,M.linewidth=N.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let L=i.properties.get(M);L.light=U}return M}function y(C,N,U,b,M){if(C.visible===!1)return;if(C.layers.test(N.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===kn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);let B=e.update(C),D=C.material;if(Array.isArray(D)){let F=B.groups;for(let O=0,J=F.length;O<J;O++){let q=F[O],le=D[q.materialIndex];if(le&&le.visible){let se=w(C,le,b,M);C.onBeforeShadow(i,C,N,U,B,se,q),i.renderBufferDirect(U,null,B,se,C,q),C.onAfterShadow(i,C,N,U,B,se,q)}}}else if(D.visible){let F=w(C,D,b,M);C.onBeforeShadow(i,C,N,U,B,F,null),i.renderBufferDirect(U,null,B,F,C,null),C.onAfterShadow(i,C,N,U,B,F,null)}}let L=C.children;for(let B=0,D=L.length;B<D;B++)y(L[B],N,U,b,M)}function I(C){C.target.removeEventListener("dispose",I);for(let U in l){let b=l[U],M=C.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var E0={[Xa]:qa,[Ya]:$a,[Za]:Ka,[Pi]:Ja,[qa]:Xa,[$a]:Ya,[Ka]:Za,[Ja]:Pi};function A0(i,e){function t(){let G=!1,de=new yt,ve=null,Re=new yt(0,0,0,0);return{setMask:function(fe){ve!==fe&&!G&&(i.colorMask(fe,fe,fe,fe),ve=fe)},setLocked:function(fe){G=fe},setClear:function(fe,ae,ke,nt,ft){ft===!0&&(fe*=nt,ae*=nt,ke*=nt),de.set(fe,ae,ke,nt),Re.equals(de)===!1&&(i.clearColor(fe,ae,ke,nt),Re.copy(de))},reset:function(){G=!1,ve=null,Re.set(-1,0,0,0)}}}function n(){let G=!1,de=!1,ve=null,Re=null,fe=null;return{setReversed:function(ae){if(de!==ae){let ke=e.get("EXT_clip_control");ae?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),de=ae;let nt=fe;fe=null,this.setClear(nt)}},getReversed:function(){return de},setTest:function(ae){ae?K(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(ae){ve!==ae&&!G&&(i.depthMask(ae),ve=ae)},setFunc:function(ae){if(de&&(ae=E0[ae]),Re!==ae){switch(ae){case Xa:i.depthFunc(i.NEVER);break;case qa:i.depthFunc(i.ALWAYS);break;case Ya:i.depthFunc(i.LESS);break;case Pi:i.depthFunc(i.LEQUAL);break;case Za:i.depthFunc(i.EQUAL);break;case Ja:i.depthFunc(i.GEQUAL);break;case $a:i.depthFunc(i.GREATER);break;case Ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=ae}},setLocked:function(ae){G=ae},setClear:function(ae){fe!==ae&&(de&&(ae=1-ae),i.clearDepth(ae),fe=ae)},reset:function(){G=!1,ve=null,Re=null,fe=null,de=!1}}}function r(){let G=!1,de=null,ve=null,Re=null,fe=null,ae=null,ke=null,nt=null,ft=null;return{setTest:function(xt){G||(xt?K(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(xt){de!==xt&&!G&&(i.stencilMask(xt),de=xt)},setFunc:function(xt,an,Nt){(ve!==xt||Re!==an||fe!==Nt)&&(i.stencilFunc(xt,an,Nt),ve=xt,Re=an,fe=Nt)},setOp:function(xt,an,Nt){(ae!==xt||ke!==an||nt!==Nt)&&(i.stencilOp(xt,an,Nt),ae=xt,ke=an,nt=Nt)},setLocked:function(xt){G=xt},setClear:function(xt){ft!==xt&&(i.clearStencil(xt),ft=xt)},reset:function(){G=!1,de=null,ve=null,Re=null,fe=null,ae=null,ke=null,nt=null,ft=null}}}let s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap,h={},d={},p=new WeakMap,f=[],g=null,x=!1,m=null,u=null,_=null,w=null,y=null,I=null,C=null,N=new et(0,0,0),U=0,b=!1,M=null,T=null,L=null,B=null,D=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,J=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(q)[1]),O=J>=1):q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),O=J>=2);let le=null,se={},we=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),He=new yt().fromArray(we),it=new yt().fromArray(Ne);function tt(G,de,ve,Re){let fe=new Uint8Array(4),ae=i.createTexture();i.bindTexture(G,ae),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<ve;ke++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(de+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return ae}let Y={};Y[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(Pi),Ge(!1),De(Nl),K(i.CULL_FACE),vt(ri);function K(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function _e(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function Oe(G,de){return d[G]!==de?(i.bindFramebuffer(G,de),d[G]=de,G===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=de),G===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=de),!0):!1}function Ue(G,de){let ve=f,Re=!1;if(G){ve=p.get(de),ve===void 0&&(ve=[],p.set(de,ve));let fe=G.textures;if(ve.length!==fe.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,ke=fe.length;ae<ke;ae++)ve[ae]=i.COLOR_ATTACHMENT0+ae;ve.length=fe.length,Re=!0}}else ve[0]!==i.BACK&&(ve[0]=i.BACK,Re=!0);Re&&i.drawBuffers(ve)}function Te(G){return g!==G?(i.useProgram(G),g=G,!0):!1}let gt={[mi]:i.FUNC_ADD,[lh]:i.FUNC_SUBTRACT,[ch]:i.FUNC_REVERSE_SUBTRACT};gt[hh]=i.MIN,gt[uh]=i.MAX;let z={[dh]:i.ZERO,[fh]:i.ONE,[ph]:i.SRC_COLOR,[_a]:i.SRC_ALPHA,[vh]:i.SRC_ALPHA_SATURATE,[_h]:i.DST_COLOR,[gh]:i.DST_ALPHA,[mh]:i.ONE_MINUS_SRC_COLOR,[ya]:i.ONE_MINUS_SRC_ALPHA,[yh]:i.ONE_MINUS_DST_COLOR,[xh]:i.ONE_MINUS_DST_ALPHA,[Mh]:i.CONSTANT_COLOR,[bh]:i.ONE_MINUS_CONSTANT_COLOR,[Sh]:i.CONSTANT_ALPHA,[wh]:i.ONE_MINUS_CONSTANT_ALPHA};function vt(G,de,ve,Re,fe,ae,ke,nt,ft,xt){if(G===ri){x===!0&&(_e(i.BLEND),x=!1);return}if(x===!1&&(K(i.BLEND),x=!0),G!==oh){if(G!==m||xt!==b){if((u!==mi||y!==mi)&&(i.blendEquation(i.FUNC_ADD),u=mi,y=mi),xt)switch(G){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zl:i.blendFunc(i.ONE,i.ONE);break;case Ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ol:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}_=null,w=null,I=null,C=null,N.set(0,0,0),U=0,m=G,b=xt}return}fe=fe||de,ae=ae||ve,ke=ke||Re,(de!==u||fe!==y)&&(i.blendEquationSeparate(gt[de],gt[fe]),u=de,y=fe),(ve!==_||Re!==w||ae!==I||ke!==C)&&(i.blendFuncSeparate(z[ve],z[Re],z[ae],z[ke]),_=ve,w=Re,I=ae,C=ke),(nt.equals(N)===!1||ft!==U)&&(i.blendColor(nt.r,nt.g,nt.b,ft),N.copy(nt),U=ft),m=G,b=!1}function Je(G,de){G.side===Lt?_e(i.CULL_FACE):K(i.CULL_FACE);let ve=G.side===Kt;de&&(ve=!ve),Ge(ve),G.blending===Ii&&G.transparent===!1?vt(ri):vt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),s.setMask(G.colorWrite);let Re=G.stencilWrite;o.setTest(Re),Re&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ie(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(G){M!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),M=G)}function De(G){G!==sh?(K(i.CULL_FACE),G!==T&&(G===Nl?i.cullFace(i.BACK):G===ah?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),T=G}function wt(G){G!==L&&(O&&i.lineWidth(G),L=G)}function Ie(G,de,ve){G?(K(i.POLYGON_OFFSET_FILL),(B!==de||D!==ve)&&(i.polygonOffset(de,ve),B=de,D=ve)):_e(i.POLYGON_OFFSET_FILL)}function Ye(G){G?K(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function Pt(G){G===void 0&&(G=i.TEXTURE0+F-1),le!==G&&(i.activeTexture(G),le=G)}function dt(G,de,ve){ve===void 0&&(le===null?ve=i.TEXTURE0+F-1:ve=le);let Re=se[ve];Re===void 0&&(Re={type:void 0,texture:void 0},se[ve]=Re),(Re.type!==G||Re.texture!==de)&&(le!==ve&&(i.activeTexture(ve),le=ve),i.bindTexture(G,de||Y[G]),Re.type=G,Re.texture=de)}function R(){let G=se[le];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Z(){try{i.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ie(){try{i.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function oe(){try{i.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function te(){try{i.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{i.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ze(){try{i.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Be(){try{i.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(){try{i.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(G){He.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),He.copy(G))}function $e(G){it.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),it.copy(G))}function Fe(G,de){let ve=l.get(de);ve===void 0&&(ve=new WeakMap,l.set(de,ve));let Re=ve.get(G);Re===void 0&&(Re=i.getUniformBlockIndex(de,G.name),ve.set(G,Re))}function be(G,de){let Re=l.get(de).get(G);c.get(de)!==Re&&(i.uniformBlockBinding(de,Re,G.__bindingPointIndex),c.set(de,Re))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},le=null,se={},d={},p=new WeakMap,f=[],g=null,x=!1,m=null,u=null,_=null,w=null,y=null,I=null,C=null,N=new et(0,0,0),U=0,b=!1,M=null,T=null,L=null,B=null,D=null,He.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:K,disable:_e,bindFramebuffer:Oe,drawBuffers:Ue,useProgram:Te,setBlending:vt,setMaterial:Je,setFlipSided:Ge,setCullFace:De,setLineWidth:wt,setPolygonOffset:Ie,setScissorTest:Ye,activeTexture:Pt,bindTexture:dt,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:Z,texImage2D:Be,texImage3D:he,updateUBOMapping:Fe,uniformBlockBinding:be,texStorage2D:pe,texStorage3D:ze,texSubImage2D:ie,texSubImage3D:oe,compressedTexSubImage2D:te,compressedTexSubImage3D:Le,scissor:me,viewport:$e,reset:Ke}}function C0(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new We,h=new WeakMap,d,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,v){return f?new OffscreenCanvas(R,v):wr("canvas")}function x(R,v,Z){let ie=1,oe=dt(R);if((oe.width>Z||oe.height>Z)&&(ie=Z/Math.max(oe.width,oe.height)),ie<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let te=Math.floor(ie*oe.width),Le=Math.floor(ie*oe.height);d===void 0&&(d=g(te,Le));let pe=v?g(te,Le):d;return pe.width=te,pe.height=Le,pe.getContext("2d").drawImage(R,0,0,te,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+te+"x"+Le+")."),pe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),R;return R}function m(R){return R.generateMipmaps}function u(R){i.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(R,v,Z,ie,oe=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let te=v;if(v===i.RED&&(Z===i.FLOAT&&(te=i.R32F),Z===i.HALF_FLOAT&&(te=i.R16F),Z===i.UNSIGNED_BYTE&&(te=i.R8)),v===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(te=i.R8UI),Z===i.UNSIGNED_SHORT&&(te=i.R16UI),Z===i.UNSIGNED_INT&&(te=i.R32UI),Z===i.BYTE&&(te=i.R8I),Z===i.SHORT&&(te=i.R16I),Z===i.INT&&(te=i.R32I)),v===i.RG&&(Z===i.FLOAT&&(te=i.RG32F),Z===i.HALF_FLOAT&&(te=i.RG16F),Z===i.UNSIGNED_BYTE&&(te=i.RG8)),v===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(te=i.RG8UI),Z===i.UNSIGNED_SHORT&&(te=i.RG16UI),Z===i.UNSIGNED_INT&&(te=i.RG32UI),Z===i.BYTE&&(te=i.RG8I),Z===i.SHORT&&(te=i.RG16I),Z===i.INT&&(te=i.RG32I)),v===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(te=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(te=i.RGB16UI),Z===i.UNSIGNED_INT&&(te=i.RGB32UI),Z===i.BYTE&&(te=i.RGB8I),Z===i.SHORT&&(te=i.RGB16I),Z===i.INT&&(te=i.RGB32I)),v===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),Z===i.UNSIGNED_INT&&(te=i.RGBA32UI),Z===i.BYTE&&(te=i.RGBA8I),Z===i.SHORT&&(te=i.RGBA16I),Z===i.INT&&(te=i.RGBA32I)),v===i.RGB&&(Z===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(te=i.R11F_G11F_B10F)),v===i.RGBA){let Le=oe?ms:_t.getTransfer(ie);Z===i.FLOAT&&(te=i.RGBA32F),Z===i.HALF_FLOAT&&(te=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(te=Le===At?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function y(R,v){let Z;return R?v===null||v===Mi||v===kr?Z=i.DEPTH24_STENCIL8:v===Pn?Z=i.DEPTH32F_STENCIL8:v===Or&&(Z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Mi||v===kr?Z=i.DEPTH_COMPONENT24:v===Pn?Z=i.DEPTH_COMPONENT32F:v===Or&&(Z=i.DEPTH_COMPONENT16),Z}function I(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==cn&&R.minFilter!==An?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function C(R){let v=R.target;v.removeEventListener("dispose",C),U(v),v.isVideoTexture&&h.delete(v)}function N(R){let v=R.target;v.removeEventListener("dispose",N),M(v)}function U(R){let v=n.get(R);if(v.__webglInit===void 0)return;let Z=R.source,ie=p.get(Z);if(ie){let oe=ie[v.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&b(R),Object.keys(ie).length===0&&p.delete(Z)}n.remove(R)}function b(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let Z=R.source,ie=p.get(Z);delete ie[v.__cacheKey],a.memory.textures--}function M(R){let v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(v.__webglFramebuffer[ie]))for(let oe=0;oe<v.__webglFramebuffer[ie].length;oe++)i.deleteFramebuffer(v.__webglFramebuffer[ie][oe]);else i.deleteFramebuffer(v.__webglFramebuffer[ie]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[ie])}else{if(Array.isArray(v.__webglFramebuffer))for(let ie=0;ie<v.__webglFramebuffer.length;ie++)i.deleteFramebuffer(v.__webglFramebuffer[ie]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ie=0;ie<v.__webglColorRenderbuffer.length;ie++)v.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[ie]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let Z=R.textures;for(let ie=0,oe=Z.length;ie<oe;ie++){let te=n.get(Z[ie]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),a.memory.textures--),n.remove(Z[ie])}n.remove(R)}let T=0;function L(){T=0}function B(){let R=T;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),T+=1,R}function D(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function F(R,v){let Z=n.get(R);if(R.isVideoTexture&&Ye(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&Z.__version!==R.version){let ie=R.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(Z,R,v);return}}else R.isExternalTexture&&(Z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+v)}function O(R,v){let Z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Z.__version!==R.version){Y(Z,R,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+v)}function J(R,v){let Z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Z.__version!==R.version){Y(Z,R,v);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+v)}function q(R,v){let Z=n.get(R);if(R.version>0&&Z.__version!==R.version){K(Z,R,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+v)}let le={[Mr]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[va]:i.MIRRORED_REPEAT},se={[cn]:i.NEAREST,[Lh]:i.NEAREST_MIPMAP_NEAREST,[Ds]:i.NEAREST_MIPMAP_LINEAR,[An]:i.LINEAR,[eo]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},we={[zh]:i.NEVER,[Hh]:i.ALWAYS,[Oh]:i.LESS,[$l]:i.LEQUAL,[Bh]:i.EQUAL,[Gh]:i.GEQUAL,[kh]:i.GREATER,[Vh]:i.NOTEQUAL};function Ne(R,v){if(v.type===Pn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===An||v.magFilter===eo||v.magFilter===Ds||v.magFilter===vi||v.minFilter===An||v.minFilter===eo||v.minFilter===Ds||v.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,le[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,le[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,le[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,se[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,se[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,we[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===cn||v.minFilter!==Ds&&v.minFilter!==vi||v.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function He(R,v){let Z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",C));let ie=v.source,oe=p.get(ie);oe===void 0&&(oe={},p.set(ie,oe));let te=D(v);if(te!==R.__cacheKey){oe[te]===void 0&&(oe[te]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),oe[te].usedTimes++;let Le=oe[R.__cacheKey];Le!==void 0&&(oe[R.__cacheKey].usedTimes--,Le.usedTimes===0&&b(v)),R.__cacheKey=te,R.__webglTexture=oe[te].texture}return Z}function it(R,v,Z){return Math.floor(Math.floor(R/Z)/v)}function tt(R,v,Z,ie){let te=R.updateRanges;if(te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,Z,ie,v.data);else{te.sort((he,me)=>he.start-me.start);let Le=0;for(let he=1;he<te.length;he++){let me=te[Le],$e=te[he],Fe=me.start+me.count,be=it($e.start,v.width,4),Ke=it(me.start,v.width,4);$e.start<=Fe+1&&be===Ke&&it($e.start+$e.count-1,v.width,4)===be?me.count=Math.max(me.count,$e.start+$e.count-me.start):(++Le,te[Le]=$e)}te.length=Le+1;let pe=i.getParameter(i.UNPACK_ROW_LENGTH),ze=i.getParameter(i.UNPACK_SKIP_PIXELS),Be=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let he=0,me=te.length;he<me;he++){let $e=te[he],Fe=Math.floor($e.start/4),be=Math.ceil($e.count/4),Ke=Fe%v.width,G=Math.floor(Fe/v.width),de=be,ve=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ke),i.pixelStorei(i.UNPACK_SKIP_ROWS,G),t.texSubImage2D(i.TEXTURE_2D,0,Ke,G,de,ve,Z,ie,v.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,pe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,Be)}}function Y(R,v,Z){let ie=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ie=i.TEXTURE_3D);let oe=He(R,v),te=v.source;t.bindTexture(ie,R.__webglTexture,i.TEXTURE0+Z);let Le=n.get(te);if(te.version!==Le.__version||oe===!0){t.activeTexture(i.TEXTURE0+Z);let pe=_t.getPrimaries(_t.workingColorSpace),ze=v.colorSpace===Dn?null:_t.getPrimaries(v.colorSpace),Be=v.colorSpace===Dn||pe===ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let he=x(v.image,!1,r.maxTextureSize);he=Pt(v,he);let me=s.convert(v.format,v.colorSpace),$e=s.convert(v.type),Fe=w(v.internalFormat,me,$e,v.colorSpace,v.isVideoTexture);Ne(ie,v);let be,Ke=v.mipmaps,G=v.isVideoTexture!==!0,de=Le.__version===void 0||oe===!0,ve=te.dataReady,Re=I(v,he);if(v.isDepthTexture)Fe=y(v.format===Vr,v.type),de&&(G?t.texStorage2D(i.TEXTURE_2D,1,Fe,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,Fe,he.width,he.height,0,me,$e,null));else if(v.isDataTexture)if(Ke.length>0){G&&de&&t.texStorage2D(i.TEXTURE_2D,Re,Fe,Ke[0].width,Ke[0].height);for(let fe=0,ae=Ke.length;fe<ae;fe++)be=Ke[fe],G?ve&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,be.width,be.height,me,$e,be.data):t.texImage2D(i.TEXTURE_2D,fe,Fe,be.width,be.height,0,me,$e,be.data);v.generateMipmaps=!1}else G?(de&&t.texStorage2D(i.TEXTURE_2D,Re,Fe,he.width,he.height),ve&&tt(v,he,me,$e)):t.texImage2D(i.TEXTURE_2D,0,Fe,he.width,he.height,0,me,$e,he.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){G&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Fe,Ke[0].width,Ke[0].height,he.depth);for(let fe=0,ae=Ke.length;fe<ae;fe++)if(be=Ke[fe],v.format!==vn)if(me!==null)if(G){if(ve)if(v.layerUpdates.size>0){let ke=ic(be.width,be.height,v.format,v.type);for(let nt of v.layerUpdates){let ft=be.data.subarray(nt*ke/be.data.BYTES_PER_ELEMENT,(nt+1)*ke/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,nt,be.width,be.height,1,me,ft)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,be.width,be.height,he.depth,me,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,Fe,be.width,be.height,he.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,be.width,be.height,he.depth,me,$e,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,Fe,be.width,be.height,he.depth,0,me,$e,be.data)}else{G&&de&&t.texStorage2D(i.TEXTURE_2D,Re,Fe,Ke[0].width,Ke[0].height);for(let fe=0,ae=Ke.length;fe<ae;fe++)be=Ke[fe],v.format!==vn?me!==null?G?ve&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,be.width,be.height,me,be.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,Fe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?ve&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,be.width,be.height,me,$e,be.data):t.texImage2D(i.TEXTURE_2D,fe,Fe,be.width,be.height,0,me,$e,be.data)}else if(v.isDataArrayTexture)if(G){if(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Fe,he.width,he.height,he.depth),ve)if(v.layerUpdates.size>0){let fe=ic(he.width,he.height,v.format,v.type);for(let ae of v.layerUpdates){let ke=he.data.subarray(ae*fe/he.data.BYTES_PER_ELEMENT,(ae+1)*fe/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,he.width,he.height,1,me,$e,ke)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,me,$e,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,he.width,he.height,he.depth,0,me,$e,he.data);else if(v.isData3DTexture)G?(de&&t.texStorage3D(i.TEXTURE_3D,Re,Fe,he.width,he.height,he.depth),ve&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,me,$e,he.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,he.width,he.height,he.depth,0,me,$e,he.data);else if(v.isFramebufferTexture){if(de)if(G)t.texStorage2D(i.TEXTURE_2D,Re,Fe,he.width,he.height);else{let fe=he.width,ae=he.height;for(let ke=0;ke<Re;ke++)t.texImage2D(i.TEXTURE_2D,ke,Fe,fe,ae,0,me,$e,null),fe>>=1,ae>>=1}}else if(Ke.length>0){if(G&&de){let fe=dt(Ke[0]);t.texStorage2D(i.TEXTURE_2D,Re,Fe,fe.width,fe.height)}for(let fe=0,ae=Ke.length;fe<ae;fe++)be=Ke[fe],G?ve&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,me,$e,be):t.texImage2D(i.TEXTURE_2D,fe,Fe,me,$e,be);v.generateMipmaps=!1}else if(G){if(de){let fe=dt(he);t.texStorage2D(i.TEXTURE_2D,Re,Fe,fe.width,fe.height)}ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,$e,he)}else t.texImage2D(i.TEXTURE_2D,0,Fe,me,$e,he);m(v)&&u(ie),Le.__version=te.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function K(R,v,Z){if(v.image.length!==6)return;let ie=He(R,v),oe=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+Z);let te=n.get(oe);if(oe.version!==te.__version||ie===!0){t.activeTexture(i.TEXTURE0+Z);let Le=_t.getPrimaries(_t.workingColorSpace),pe=v.colorSpace===Dn?null:_t.getPrimaries(v.colorSpace),ze=v.colorSpace===Dn||Le===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let Be=v.isCompressedTexture||v.image[0].isCompressedTexture,he=v.image[0]&&v.image[0].isDataTexture,me=[];for(let ae=0;ae<6;ae++)!Be&&!he?me[ae]=x(v.image[ae],!0,r.maxCubemapSize):me[ae]=he?v.image[ae].image:v.image[ae],me[ae]=Pt(v,me[ae]);let $e=me[0],Fe=s.convert(v.format,v.colorSpace),be=s.convert(v.type),Ke=w(v.internalFormat,Fe,be,v.colorSpace),G=v.isVideoTexture!==!0,de=te.__version===void 0||ie===!0,ve=oe.dataReady,Re=I(v,$e);Ne(i.TEXTURE_CUBE_MAP,v);let fe;if(Be){G&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,Ke,$e.width,$e.height);for(let ae=0;ae<6;ae++){fe=me[ae].mipmaps;for(let ke=0;ke<fe.length;ke++){let nt=fe[ke];v.format!==vn?Fe!==null?G?ve&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke,0,0,nt.width,nt.height,Fe,nt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke,Ke,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke,0,0,nt.width,nt.height,Fe,be,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke,Ke,nt.width,nt.height,0,Fe,be,nt.data)}}}else{if(fe=v.mipmaps,G&&de){fe.length>0&&Re++;let ae=dt(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,Ke,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(he){G?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,me[ae].width,me[ae].height,Fe,be,me[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ke,me[ae].width,me[ae].height,0,Fe,be,me[ae].data);for(let ke=0;ke<fe.length;ke++){let ft=fe[ke].image[ae].image;G?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke+1,0,0,ft.width,ft.height,Fe,be,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke+1,Ke,ft.width,ft.height,0,Fe,be,ft.data)}}else{G?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Fe,be,me[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ke,Fe,be,me[ae]);for(let ke=0;ke<fe.length;ke++){let nt=fe[ke];G?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke+1,0,0,Fe,be,nt.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke+1,Ke,Fe,be,nt.image[ae])}}}m(v)&&u(i.TEXTURE_CUBE_MAP),te.__version=oe.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function _e(R,v,Z,ie,oe,te){let Le=s.convert(Z.format,Z.colorSpace),pe=s.convert(Z.type),ze=w(Z.internalFormat,Le,pe,Z.colorSpace),Be=n.get(v),he=n.get(Z);if(he.__renderTarget=v,!Be.__hasExternalTextures){let me=Math.max(1,v.width>>te),$e=Math.max(1,v.height>>te);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,te,ze,me,$e,v.depth,0,Le,pe,null):t.texImage2D(oe,te,ze,me,$e,0,Le,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Ie(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,oe,he.__webglTexture,0,wt(v)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,oe,he.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(R,v,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let ie=v.depthTexture,oe=ie&&ie.isDepthTexture?ie.type:null,te=y(v.stencilBuffer,oe),Le=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=wt(v);Ie(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,te,v.width,v.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,te,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,te,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,R)}else{let ie=v.textures;for(let oe=0;oe<ie.length;oe++){let te=ie[oe],Le=s.convert(te.format,te.colorSpace),pe=s.convert(te.type),ze=w(te.internalFormat,Le,pe,te.colorSpace),Be=wt(v);Z&&Ie(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,ze,v.width,v.height):Ie(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Be,ze,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ze,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ie=n.get(v.depthTexture);ie.__renderTarget=v,(!ie.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),F(v.depthTexture,0);let oe=ie.__webglTexture,te=wt(v);if(v.depthTexture.format===br)Ie(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(v.depthTexture.format===Vr)Ie(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Te(R){let v=n.get(R),Z=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let ie=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ie){let oe=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ie.removeEventListener("dispose",oe)};ie.addEventListener("dispose",oe),v.__depthDisposeCallback=oe}v.__boundDepthTexture=ie}if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");let ie=R.texture.mipmaps;ie&&ie.length>0?Ue(v.__webglFramebuffer[0],R):Ue(v.__webglFramebuffer,R)}else if(Z){v.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ie]),v.__webglDepthbuffer[ie]===void 0)v.__webglDepthbuffer[ie]=i.createRenderbuffer(),Oe(v.__webglDepthbuffer[ie],R,!1);else{let oe=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=v.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,te)}}else{let ie=R.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Oe(v.__webglDepthbuffer,R,!1);else{let oe=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,te)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(R,v,Z){let ie=n.get(R);v!==void 0&&_e(ie.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&Te(R)}function z(R){let v=R.texture,Z=n.get(R),ie=n.get(v);R.addEventListener("dispose",N);let oe=R.textures,te=R.isWebGLCubeRenderTarget===!0,Le=oe.length>1;if(Le||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=v.version,a.memory.textures++),te){Z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(v.mipmaps&&v.mipmaps.length>0){Z.__webglFramebuffer[pe]=[];for(let ze=0;ze<v.mipmaps.length;ze++)Z.__webglFramebuffer[pe][ze]=i.createFramebuffer()}else Z.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){Z.__webglFramebuffer=[];for(let pe=0;pe<v.mipmaps.length;pe++)Z.__webglFramebuffer[pe]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(Le)for(let pe=0,ze=oe.length;pe<ze;pe++){let Be=n.get(oe[pe]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Ie(R)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let pe=0;pe<oe.length;pe++){let ze=oe[pe];Z.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[pe]);let Be=s.convert(ze.format,ze.colorSpace),he=s.convert(ze.type),me=w(ze.internalFormat,Be,he,ze.colorSpace,R.isXRRenderTarget===!0),$e=wt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,me,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,Z.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(Z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,v);for(let pe=0;pe<6;pe++)if(v.mipmaps&&v.mipmaps.length>0)for(let ze=0;ze<v.mipmaps.length;ze++)_e(Z.__webglFramebuffer[pe][ze],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ze);else _e(Z.__webglFramebuffer[pe],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(v)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let pe=0,ze=oe.length;pe<ze;pe++){let Be=oe[pe],he=n.get(Be),me=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,he.__webglTexture),Ne(me,Be),_e(Z.__webglFramebuffer,R,Be,i.COLOR_ATTACHMENT0+pe,me,0),m(Be)&&u(me)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,ie.__webglTexture),Ne(pe,v),v.mipmaps&&v.mipmaps.length>0)for(let ze=0;ze<v.mipmaps.length;ze++)_e(Z.__webglFramebuffer[ze],R,v,i.COLOR_ATTACHMENT0,pe,ze);else _e(Z.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,pe,0);m(v)&&u(pe),t.unbindTexture()}R.depthBuffer&&Te(R)}function vt(R){let v=R.textures;for(let Z=0,ie=v.length;Z<ie;Z++){let oe=v[Z];if(m(oe)){let te=_(R),Le=n.get(oe).__webglTexture;t.bindTexture(te,Le),u(te),t.unbindTexture()}}}let Je=[],Ge=[];function De(R){if(R.samples>0){if(Ie(R)===!1){let v=R.textures,Z=R.width,ie=R.height,oe=i.COLOR_BUFFER_BIT,te=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(R),pe=v.length>1;if(pe)for(let Be=0;Be<v.length;Be++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);let ze=R.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Be=0;Be<v.length;Be++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Be]);let he=n.get(v[Be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,Z,ie,0,0,Z,ie,oe,i.NEAREST),c===!0&&(Je.length=0,Ge.length=0,Je.push(i.COLOR_ATTACHMENT0+Be),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Je.push(te),Ge.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ge)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let Be=0;Be<v.length;Be++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Be]);let he=n.get(v[Be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,he,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function wt(R){return Math.min(r.maxSamples,R.samples)}function Ie(R){let v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ye(R){let v=a.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function Pt(R,v){let Z=R.colorSpace,ie=R.format,oe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Z!==Di&&Z!==Dn&&(_t.getTransfer(Z)===At?(ie!==vn||oe!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),v}function dt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=L,this.setTexture2D=F,this.setTexture2DArray=O,this.setTexture3D=J,this.setTextureCube=q,this.rebindTextures=gt,this.setupRenderTarget=z,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ie}function R0(i,e){function t(n,r=Dn){let s,a=_t.getTransfer(r);if(n===In)return i.UNSIGNED_BYTE;if(n===no)return i.UNSIGNED_SHORT_4_4_4_4;if(n===io)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gl)return i.BYTE;if(n===Hl)return i.SHORT;if(n===Or)return i.UNSIGNED_SHORT;if(n===to)return i.INT;if(n===Mi)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Br)return i.HALF_FLOAT;if(n===ql)return i.ALPHA;if(n===Yl)return i.RGB;if(n===vn)return i.RGBA;if(n===br)return i.DEPTH_COMPONENT;if(n===Vr)return i.DEPTH_STENCIL;if(n===ro)return i.RED;if(n===so)return i.RED_INTEGER;if(n===Zl)return i.RG;if(n===ao)return i.RG_INTEGER;if(n===oo)return i.RGBA_INTEGER;if(n===Ls||n===Us||n===Ns||n===Fs)if(a===At)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ls)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ls)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Us)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ns)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lo||n===co||n===ho||n===uo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===lo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===co)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ho)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fo||n===po||n===mo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===fo||n===po)return a===At?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===mo)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===go||n===xo||n===_o||n===yo||n===vo||n===Mo||n===bo||n===So||n===wo||n===To||n===Eo||n===Ao||n===Co||n===Ro)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===go)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xo)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_o)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yo)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vo)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mo)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bo)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===So)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wo)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===To)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eo)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ao)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Co)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ro)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Io||n===Po||n===Do)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Io)return a===At?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Po)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Do)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lo||n===Uo||n===No||n===Fo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Lo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Uo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===No)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===kr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var I0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P0=`
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

}`,gc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ts(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new un({vertexShader:I0,fragmentShader:P0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xc=class extends ei{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,p=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new gc,u={},_=t.getContextAttributes(),w=null,y=null,I=[],C=[],N=new We,U=null,b=new Gt;b.viewport=new yt;let M=new Gt;M.viewport=new yt;let T=[b,M],L=new Wa,B=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=I[Y];return K===void 0&&(K=new Rr,I[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=I[Y];return K===void 0&&(K=new Rr,I[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=I[Y];return K===void 0&&(K=new Rr,I[Y]=K),K.getHandSpace()};function F(Y){let K=C.indexOf(Y.inputSource);if(K===-1)return;let _e=I[K];_e!==void 0&&(_e.update(Y.inputSource,Y.frame,l||a),_e.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",J);for(let Y=0;Y<I.length;Y++){let K=C[Y];K!==null&&(C[Y]=null,I[Y].disconnect(K))}B=null,D=null,m.reset();for(let Y in u)delete u[Y];e.setRenderTarget(w),f=null,p=null,d=null,r=null,y=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",O),r.addEventListener("inputsourceschange",J),_.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(N),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Oe=null,Ue=null;_.depth&&(Ue=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=_.stencil?Vr:br,Oe=_.stencil?kr:Mi);let Te={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:s};d=this.getBinding(),p=d.createProjectionLayer(Te),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new zn(p.textureWidth,p.textureHeight,{format:vn,type:In,depthTexture:new ws(p.textureWidth,p.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let _e={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new zn(f.framebufferWidth,f.framebufferHeight,{format:vn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),tt.setContext(r),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(Y){for(let K=0;K<Y.removed.length;K++){let _e=Y.removed[K],Oe=C.indexOf(_e);Oe>=0&&(C[Oe]=null,I[Oe].disconnect(_e))}for(let K=0;K<Y.added.length;K++){let _e=Y.added[K],Oe=C.indexOf(_e);if(Oe===-1){for(let Te=0;Te<I.length;Te++)if(Te>=C.length){C.push(_e),Oe=Te;break}else if(C[Te]===null){C[Te]=_e,Oe=Te;break}if(Oe===-1)break}let Ue=I[Oe];Ue&&Ue.connect(_e)}}let q=new V,le=new V;function se(Y,K,_e){q.setFromMatrixPosition(K.matrixWorld),le.setFromMatrixPosition(_e.matrixWorld);let Oe=q.distanceTo(le),Ue=K.projectionMatrix.elements,Te=_e.projectionMatrix.elements,gt=Ue[14]/(Ue[10]-1),z=Ue[14]/(Ue[10]+1),vt=(Ue[9]+1)/Ue[5],Je=(Ue[9]-1)/Ue[5],Ge=(Ue[8]-1)/Ue[0],De=(Te[8]+1)/Te[0],wt=gt*Ge,Ie=gt*De,Ye=Oe/(-Ge+De),Pt=Ye*-Ge;if(K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Pt),Y.translateZ(Ye),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ue[10]===-1)Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let dt=gt+Ye,R=z+Ye,v=wt-Pt,Z=Ie+(Oe-Pt),ie=vt*z/R*dt,oe=Je*z/R*dt;Y.projectionMatrix.makePerspective(v,Z,ie,oe,dt,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function we(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let K=Y.near,_e=Y.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),L.near=M.near=b.near=K,L.far=M.far=b.far=_e,(B!==L.near||D!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),B=L.near,D=L.far),L.layers.mask=Y.layers.mask|6,b.layers.mask=L.layers.mask&3,M.layers.mask=L.layers.mask&5;let Oe=Y.parent,Ue=L.cameras;we(L,Oe);for(let Te=0;Te<Ue.length;Te++)we(Ue[Te],Oe);Ue.length===2?se(L,b,M):L.projectionMatrix.copy(b.projectionMatrix),Ne(Y,L,Oe)};function Ne(Y,K,_e){_e===null?Y.matrix.copy(K.matrixWorld):(Y.matrix.copy(_e.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(K.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Sr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(Y){c=Y,p!==null&&(p.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(Y){return u[Y]};let He=null;function it(Y,K){if(h=K.getViewerPose(l||a),g=K,h!==null){let _e=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Oe=!1;_e.length!==L.cameras.length&&(L.cameras.length=0,Oe=!0);for(let z=0;z<_e.length;z++){let vt=_e[z],Je=null;if(f!==null)Je=f.getViewport(vt);else{let De=d.getViewSubImage(p,vt);Je=De.viewport,z===0&&(e.setRenderTargetTextures(y,De.colorTexture,De.depthStencilTexture),e.setRenderTarget(y))}let Ge=T[z];Ge===void 0&&(Ge=new Gt,Ge.layers.enable(z),Ge.viewport=new yt,T[z]=Ge),Ge.matrix.fromArray(vt.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(vt.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Je.x,Je.y,Je.width,Je.height),z===0&&(L.matrix.copy(Ge.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Oe===!0&&L.cameras.push(Ge)}let Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let z=d.getDepthInformation(_e[0]);z&&z.isValid&&z.texture&&m.init(z,r.renderState)}if(Ue&&Ue.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let z=0;z<_e.length;z++){let vt=_e[z].camera;if(vt){let Je=u[vt];Je||(Je=new Ts,u[vt]=Je);let Ge=d.getCameraImage(vt);Je.sourceTexture=Ge}}}}for(let _e=0;_e<I.length;_e++){let Oe=C[_e],Ue=I[_e];Oe!==null&&Ue!==void 0&&Ue.update(Oe,K,l||a)}He&&He(Y,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let tt=new _u;tt.setAnimationLoop(it),this.setAnimationLoop=function(Y){He=Y},this.dispose=function(){}}},Yi=new Cn,D0=new St;function L0(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,ec(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,_,w,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),p(m,u),u.isMeshPhysicalMaterial&&f(m,u,y)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?c(m,u,_,w):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Kt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Kt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let _=e.get(u),w=_.envMap,y=_.envMapRotation;w&&(m.envMap.value=w,Yi.copy(y),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),m.envMapRotation.value.setFromMatrix4(D0.makeRotationFromEuler(Yi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,_,w){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=w*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Kt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let _=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function U0(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,w){let y=w.program;n.uniformBlockBinding(_,y)}function l(_,w){let y=r[_.id];y===void 0&&(g(_),y=h(_),r[_.id]=y,_.addEventListener("dispose",m));let I=w.program;n.updateUBOMapping(_,I);let C=e.render.frame;s[_.id]!==C&&(p(_),s[_.id]=C)}function h(_){let w=d();_.__bindingPointIndex=w;let y=i.createBuffer(),I=_.__size,C=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,I,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,y),y}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){let w=r[_.id],y=_.uniforms,I=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let C=0,N=y.length;C<N;C++){let U=Array.isArray(y[C])?y[C]:[y[C]];for(let b=0,M=U.length;b<M;b++){let T=U[b];if(f(T,C,b,I)===!0){let L=T.__offset,B=Array.isArray(T.value)?T.value:[T.value],D=0;for(let F=0;F<B.length;F++){let O=B[F],J=x(O);typeof O=="number"||typeof O=="boolean"?(T.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,L+D,T.__data)):O.isMatrix3?(T.__data[0]=O.elements[0],T.__data[1]=O.elements[1],T.__data[2]=O.elements[2],T.__data[3]=0,T.__data[4]=O.elements[3],T.__data[5]=O.elements[4],T.__data[6]=O.elements[5],T.__data[7]=0,T.__data[8]=O.elements[6],T.__data[9]=O.elements[7],T.__data[10]=O.elements[8],T.__data[11]=0):(O.toArray(T.__data,D),D+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,w,y,I){let C=_.value,N=w+"_"+y;if(I[N]===void 0)return typeof C=="number"||typeof C=="boolean"?I[N]=C:I[N]=C.clone(),!0;{let U=I[N];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return I[N]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function g(_){let w=_.uniforms,y=0,I=16;for(let N=0,U=w.length;N<U;N++){let b=Array.isArray(w[N])?w[N]:[w[N]];for(let M=0,T=b.length;M<T;M++){let L=b[M],B=Array.isArray(L.value)?L.value:[L.value];for(let D=0,F=B.length;D<F;D++){let O=B[D],J=x(O),q=y%I,le=q%J.boundary,se=q+le;y+=le,se!==0&&I-se<J.storage&&(y+=I-se),L.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=J.storage}}}let C=y%I;return C>0&&(y+=I-C),_.__size=y,_.__cache={},this}function x(_){let w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),w}function m(_){let w=_.target;w.removeEventListener("dispose",m);let y=a.indexOf(w.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function u(){for(let _ in r)i.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:c,update:l,dispose:u}}var Xr=class{constructor(e={}){let{canvas:t=Wh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,u=null,_=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,I=!1;this._outputColorSpace=Ft;let C=0,N=0,U=null,b=-1,M=null,T=new yt,L=new yt,B=null,D=new et(0),F=0,O=t.width,J=t.height,q=1,le=null,se=null,we=new yt(0,0,O,J),Ne=new yt(0,0,O,J),He=!1,it=new Lr,tt=!1,Y=!1,K=new St,_e=new V,Oe=new yt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function gt(){return U===null?q:1}let z=n;function vt(S,H){return t.getContext(S,H)}try{let S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",fe,!1),z===null){let H="webgl2";if(z=vt(H,S),z===null)throw vt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Je,Ge,De,wt,Ie,Ye,Pt,dt,R,v,Z,ie,oe,te,Le,pe,ze,Be,he,me,$e,Fe,be,Ke;function G(){Je=new jm(z),Je.init(),Fe=new R0(z,Je),Ge=new Xm(z,Je,e,Fe),De=new A0(z,Je),Ge.reversedDepthBuffer&&p&&De.buffers.depth.setReversed(!0),wt=new tg(z),Ie=new p0,Ye=new C0(z,Je,De,Ie,Ge,Fe,wt),Pt=new Ym(y),dt=new Km(y),R=new of(z),be=new Hm(z,R),v=new Qm(z,R,wt,be),Z=new ig(z,v,R,wt),he=new ng(z,Ge,Ye),pe=new qm(Ie),ie=new f0(y,Pt,dt,Je,Ge,be,pe),oe=new L0(y,Ie),te=new g0,Le=new b0(Je),Be=new Gm(y,Pt,dt,De,Z,f,c),ze=new T0(y,Z,Ge),Ke=new U0(z,wt,Ge,De),me=new Wm(z,Je,wt),$e=new eg(z,Je,wt),wt.programs=ie.programs,y.capabilities=Ge,y.extensions=Je,y.properties=Ie,y.renderLists=te,y.shadowMap=ze,y.state=De,y.info=wt}G();let de=new xc(y,z);this.xr=de,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let S=Je.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Je.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(S){S!==void 0&&(q=S,this.setSize(O,J,!1))},this.getSize=function(S){return S.set(O,J)},this.setSize=function(S,H,j=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=S,J=H,t.width=Math.floor(S*q),t.height=Math.floor(H*q),j===!0&&(t.style.width=S+"px",t.style.height=H+"px"),this.setViewport(0,0,S,H)},this.getDrawingBufferSize=function(S){return S.set(O*q,J*q).floor()},this.setDrawingBufferSize=function(S,H,j){O=S,J=H,q=j,t.width=Math.floor(S*j),t.height=Math.floor(H*j),this.setViewport(0,0,S,H)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(we)},this.setViewport=function(S,H,j,Q){S.isVector4?we.set(S.x,S.y,S.z,S.w):we.set(S,H,j,Q),De.viewport(T.copy(we).multiplyScalar(q).round())},this.getScissor=function(S){return S.copy(Ne)},this.setScissor=function(S,H,j,Q){S.isVector4?Ne.set(S.x,S.y,S.z,S.w):Ne.set(S,H,j,Q),De.scissor(L.copy(Ne).multiplyScalar(q).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(S){De.setScissorTest(He=S)},this.setOpaqueSort=function(S){le=S},this.setTransparentSort=function(S){se=S},this.getClearColor=function(S){return S.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(S=!0,H=!0,j=!0){let Q=0;if(S){let X=!1;if(U!==null){let ue=U.texture.format;X=ue===oo||ue===ao||ue===so}if(X){let ue=U.texture.type,E=ue===In||ue===Mi||ue===Or||ue===kr||ue===no||ue===io,P=Be.getClearColor(),W=Be.getClearAlpha(),$=P.r,ge=P.g,xe=P.b;E?(g[0]=$,g[1]=ge,g[2]=xe,g[3]=W,z.clearBufferuiv(z.COLOR,0,g)):(x[0]=$,x[1]=ge,x[2]=xe,x[3]=W,z.clearBufferiv(z.COLOR,0,x))}else Q|=z.COLOR_BUFFER_BIT}H&&(Q|=z.DEPTH_BUFFER_BIT),j&&(Q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Be.dispose(),te.dispose(),Le.dispose(),Ie.dispose(),Pt.dispose(),dt.dispose(),Z.dispose(),be.dispose(),Ke.dispose(),ie.dispose(),de.dispose(),de.removeEventListener("sessionstart",Nt),de.removeEventListener("sessionend",Mn),on.stop()};function ve(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let S=wt.autoReset,H=ze.enabled,j=ze.autoUpdate,Q=ze.needsUpdate,X=ze.type;G(),wt.autoReset=S,ze.enabled=H,ze.autoUpdate=j,ze.needsUpdate=Q,ze.type=X}function fe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ae(S){let H=S.target;H.removeEventListener("dispose",ae),ke(H)}function ke(S){nt(S),Ie.remove(S)}function nt(S){let H=Ie.get(S).programs;H!==void 0&&(H.forEach(function(j){ie.releaseProgram(j)}),S.isShaderMaterial&&ie.releaseShaderCache(S))}this.renderBufferDirect=function(S,H,j,Q,X,ue){H===null&&(H=Ue);let E=X.isMesh&&X.matrixWorld.determinant()<0,P=_n(S,H,j,Q,X);De.setMaterial(Q,E);let W=j.index,$=1;if(Q.wireframe===!0){if(W=v.getWireframeAttribute(j),W===void 0)return;$=2}let ge=j.drawRange,xe=j.attributes.position,Pe=ge.start*$,Xe=(ge.start+ge.count)*$;ue!==null&&(Pe=Math.max(Pe,ue.start*$),Xe=Math.min(Xe,(ue.start+ue.count)*$)),W!==null?(Pe=Math.max(Pe,0),Xe=Math.min(Xe,W.count)):xe!=null&&(Pe=Math.max(Pe,0),Xe=Math.min(Xe,xe.count));let je=Xe-Pe;if(je<0||je===1/0)return;be.setup(X,Q,P,j,W);let Ze,at=me;if(W!==null&&(Ze=R.get(W),at=$e,at.setIndex(Ze)),X.isMesh)Q.wireframe===!0?(De.setLineWidth(Q.wireframeLinewidth*gt()),at.setMode(z.LINES)):at.setMode(z.TRIANGLES);else if(X.isLine){let Ee=Q.linewidth;Ee===void 0&&(Ee=1),De.setLineWidth(Ee*gt()),X.isLineSegments?at.setMode(z.LINES):X.isLineLoop?at.setMode(z.LINE_LOOP):at.setMode(z.LINE_STRIP)}else X.isPoints?at.setMode(z.POINTS):X.isSprite&&at.setMode(z.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Tr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))at.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Ee=X._multiDrawStarts,A=X._multiDrawCounts,k=X._multiDrawCount,re=W?R.get(W).bytesPerElement:1,ee=Ie.get(Q).currentProgram.getUniforms();for(let ne=0;ne<k;ne++)ee.setValue(z,"_gl_DrawID",ne),at.render(Ee[ne]/re,A[ne])}else if(X.isInstancedMesh)at.renderInstances(Pe,je,X.count);else if(j.isInstancedBufferGeometry){let Ee=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,A=Math.min(j.instanceCount,Ee);at.renderInstances(Pe,je,A)}else at.render(Pe,je)};function ft(S,H,j){S.transparent===!0&&S.side===Lt&&S.forceSinglePass===!1?(S.side=Kt,S.needsUpdate=!0,xn(S,H,j),S.side=Qn,S.needsUpdate=!0,xn(S,H,j),S.side=Lt):xn(S,H,j)}this.compile=function(S,H,j=null){j===null&&(j=S),u=Le.get(j),u.init(H),w.push(u),j.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(u.pushLight(X),X.castShadow&&u.pushShadow(X))}),S!==j&&S.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(u.pushLight(X),X.castShadow&&u.pushShadow(X))}),u.setupLights();let Q=new Set;return S.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let ue=X.material;if(ue)if(Array.isArray(ue))for(let E=0;E<ue.length;E++){let P=ue[E];ft(P,j,X),Q.add(P)}else ft(ue,j,X),Q.add(ue)}),u=w.pop(),Q},this.compileAsync=function(S,H,j=null){let Q=this.compile(S,H,j);return new Promise(X=>{function ue(){if(Q.forEach(function(E){Ie.get(E).currentProgram.isReady()&&Q.delete(E)}),Q.size===0){X(S);return}setTimeout(ue,10)}Je.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let xt=null;function an(S){xt&&xt(S)}function Nt(){on.stop()}function Mn(){on.start()}let on=new _u;on.setAnimationLoop(an),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(S){xt=S,de.setAnimationLoop(S),S===null?on.stop():on.start()},de.addEventListener("sessionstart",Nt),de.addEventListener("sessionend",Mn),this.render=function(S,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(H),H=de.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,H,U),u=Le.get(S,w.length),u.init(H),w.push(u),K.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),it.setFromProjectionMatrix(K,En,H.reversedDepth),Y=this.localClippingEnabled,tt=pe.init(this.clippingPlanes,Y),m=te.get(S,_.length),m.init(),_.push(m),de.enabled===!0&&de.isPresenting===!0){let ue=y.xr.getDepthSensingMesh();ue!==null&&Bt(ue,H,-1/0,y.sortObjects)}Bt(S,H,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(le,se),Te=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,Te&&Be.addToRenderList(m,S),this.info.render.frame++,tt===!0&&pe.beginShadows();let j=u.state.shadowsArray;ze.render(j,S,H),tt===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=m.opaque,X=m.transmissive;if(u.setupLights(),H.isArrayCamera){let ue=H.cameras;if(X.length>0)for(let E=0,P=ue.length;E<P;E++){let W=ue[E];qt(Q,X,S,W)}Te&&Be.render(S);for(let E=0,P=ue.length;E<P;E++){let W=ue[E];Un(m,S,W,W.viewport)}}else X.length>0&&qt(Q,X,S,H),Te&&Be.render(S),Un(m,S,H);U!==null&&N===0&&(Ye.updateMultisampleRenderTarget(U),Ye.updateRenderTargetMipmap(U)),S.isScene===!0&&S.onAfterRender(y,S,H),be.resetDefaultState(),b=-1,M=null,w.pop(),w.length>0?(u=w[w.length-1],tt===!0&&pe.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Bt(S,H,j,Q){if(S.visible===!1)return;if(S.layers.test(H.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(H);else if(S.isLight)u.pushLight(S),S.castShadow&&u.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||it.intersectsSprite(S)){Q&&Oe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(K);let E=Z.update(S),P=S.material;P.visible&&m.push(S,E,P,j,Oe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||it.intersectsObject(S))){let E=Z.update(S),P=S.material;if(Q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Oe.copy(S.boundingSphere.center)):(E.boundingSphere===null&&E.computeBoundingSphere(),Oe.copy(E.boundingSphere.center)),Oe.applyMatrix4(S.matrixWorld).applyMatrix4(K)),Array.isArray(P)){let W=E.groups;for(let $=0,ge=W.length;$<ge;$++){let xe=W[$],Pe=P[xe.materialIndex];Pe&&Pe.visible&&m.push(S,E,Pe,j,Oe.z,xe)}}else P.visible&&m.push(S,E,P,j,Oe.z,null)}}let ue=S.children;for(let E=0,P=ue.length;E<P;E++)Bt(ue[E],H,j,Q)}function Un(S,H,j,Q){let X=S.opaque,ue=S.transmissive,E=S.transparent;u.setupLightsView(j),tt===!0&&pe.setGlobalState(y.clippingPlanes,j),Q&&De.viewport(T.copy(Q)),X.length>0&&Dt(X,H,j),ue.length>0&&Dt(ue,H,j),E.length>0&&Dt(E,H,j),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function qt(S,H,j,Q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[Q.id]===void 0&&(u.state.transmissionRenderTarget[Q.id]=new zn(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?Br:In,minFilter:vi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));let ue=u.state.transmissionRenderTarget[Q.id],E=Q.viewport||T;ue.setSize(E.z*y.transmissionResolutionScale,E.w*y.transmissionResolutionScale);let P=y.getRenderTarget(),W=y.getActiveCubeFace(),$=y.getActiveMipmapLevel();y.setRenderTarget(ue),y.getClearColor(D),F=y.getClearAlpha(),F<1&&y.setClearColor(16777215,.5),y.clear(),Te&&Be.render(j);let ge=y.toneMapping;y.toneMapping=si;let xe=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),u.setupLightsView(Q),tt===!0&&pe.setGlobalState(y.clippingPlanes,Q),Dt(S,j,Q),Ye.updateMultisampleRenderTarget(ue),Ye.updateRenderTargetMipmap(ue),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let Xe=0,je=H.length;Xe<je;Xe++){let Ze=H[Xe],at=Ze.object,Ee=Ze.geometry,A=Ze.material,k=Ze.group;if(A.side===Lt&&at.layers.test(Q.layers)){let re=A.side;A.side=Kt,A.needsUpdate=!0,kt(at,j,Q,Ee,A,k),A.side=re,A.needsUpdate=!0,Pe=!0}}Pe===!0&&(Ye.updateMultisampleRenderTarget(ue),Ye.updateRenderTargetMipmap(ue))}y.setRenderTarget(P,W,$),y.setClearColor(D,F),xe!==void 0&&(Q.viewport=xe),y.toneMapping=ge}function Dt(S,H,j){let Q=H.isScene===!0?H.overrideMaterial:null;for(let X=0,ue=S.length;X<ue;X++){let E=S[X],P=E.object,W=E.geometry,$=E.group,ge=E.material;ge.allowOverride===!0&&Q!==null&&(ge=Q),P.layers.test(j.layers)&&kt(P,H,j,W,ge,$)}}function kt(S,H,j,Q,X,ue){S.onBeforeRender(y,H,j,Q,X,ue),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(y,H,j,Q,S,ue),X.transparent===!0&&X.side===Lt&&X.forceSinglePass===!1?(X.side=Kt,X.needsUpdate=!0,y.renderBufferDirect(j,H,Q,X,S,ue),X.side=Qn,X.needsUpdate=!0,y.renderBufferDirect(j,H,Q,X,S,ue),X.side=Lt):y.renderBufferDirect(j,H,Q,X,S,ue),S.onAfterRender(y,H,j,Q,X,ue)}function xn(S,H,j){H.isScene!==!0&&(H=Ue);let Q=Ie.get(S),X=u.state.lights,ue=u.state.shadowsArray,E=X.state.version,P=ie.getParameters(S,X.state,ue,H,j),W=ie.getProgramCacheKey(P),$=Q.programs;Q.environment=S.isMeshStandardMaterial?H.environment:null,Q.fog=H.fog,Q.envMap=(S.isMeshStandardMaterial?dt:Pt).get(S.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&S.envMap===null?H.environmentRotation:S.envMapRotation,$===void 0&&(S.addEventListener("dispose",ae),$=new Map,Q.programs=$);let ge=$.get(W);if(ge!==void 0){if(Q.currentProgram===ge&&Q.lightsStateVersion===E)return Jt(S,P),ge}else P.uniforms=ie.getUniforms(S),S.onBeforeCompile(P,y),ge=ie.acquireProgram(P,W),$.set(W,ge),Q.uniforms=P.uniforms;let xe=Q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(xe.clippingPlanes=pe.uniform),Jt(S,P),Q.needsLights=Nn(S),Q.lightsStateVersion=E,Q.needsLights&&(xe.ambientLightColor.value=X.state.ambient,xe.lightProbe.value=X.state.probe,xe.directionalLights.value=X.state.directional,xe.directionalLightShadows.value=X.state.directionalShadow,xe.spotLights.value=X.state.spot,xe.spotLightShadows.value=X.state.spotShadow,xe.rectAreaLights.value=X.state.rectArea,xe.ltc_1.value=X.state.rectAreaLTC1,xe.ltc_2.value=X.state.rectAreaLTC2,xe.pointLights.value=X.state.point,xe.pointLightShadows.value=X.state.pointShadow,xe.hemisphereLights.value=X.state.hemi,xe.directionalShadowMap.value=X.state.directionalShadowMap,xe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,xe.spotShadowMap.value=X.state.spotShadowMap,xe.spotLightMatrix.value=X.state.spotLightMatrix,xe.spotLightMap.value=X.state.spotLightMap,xe.pointShadowMap.value=X.state.pointShadowMap,xe.pointShadowMatrix.value=X.state.pointShadowMatrix),Q.currentProgram=ge,Q.uniformsList=null,ge}function Ut(S){if(S.uniformsList===null){let H=S.currentProgram.getUniforms();S.uniformsList=Wr.seqWithValue(H.seq,S.uniforms)}return S.uniformsList}function Jt(S,H){let j=Ie.get(S);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function _n(S,H,j,Q,X){H.isScene!==!0&&(H=Ue),Ye.resetTextureUnits();let ue=H.fog,E=Q.isMeshStandardMaterial?H.environment:null,P=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Di,W=(Q.isMeshStandardMaterial?dt:Pt).get(Q.envMap||E),$=Q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ge=!!j.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),xe=!!j.morphAttributes.position,Pe=!!j.morphAttributes.normal,Xe=!!j.morphAttributes.color,je=si;Q.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(je=y.toneMapping);let Ze=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,at=Ze!==void 0?Ze.length:0,Ee=Ie.get(Q),A=u.state.lights;if(tt===!0&&(Y===!0||S!==M)){let Qe=S===M&&Q.id===b;pe.setState(Q,S,Qe)}let k=!1;Q.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==A.state.version||Ee.outputColorSpace!==P||X.isBatchedMesh&&Ee.batching===!1||!X.isBatchedMesh&&Ee.batching===!0||X.isBatchedMesh&&Ee.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ee.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ee.instancing===!1||!X.isInstancedMesh&&Ee.instancing===!0||X.isSkinnedMesh&&Ee.skinning===!1||!X.isSkinnedMesh&&Ee.skinning===!0||X.isInstancedMesh&&Ee.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ee.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ee.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ee.instancingMorph===!1&&X.morphTexture!==null||Ee.envMap!==W||Q.fog===!0&&Ee.fog!==ue||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==pe.numPlanes||Ee.numIntersection!==pe.numIntersection)||Ee.vertexAlphas!==$||Ee.vertexTangents!==ge||Ee.morphTargets!==xe||Ee.morphNormals!==Pe||Ee.morphColors!==Xe||Ee.toneMapping!==je||Ee.morphTargetsCount!==at)&&(k=!0):(k=!0,Ee.__version=Q.version);let re=Ee.currentProgram;k===!0&&(re=xn(Q,H,X));let ee=!1,ne=!1,ye=!1,ce=re.getUniforms(),Se=Ee.uniforms;if(De.useProgram(re.program)&&(ee=!0,ne=!0,ye=!0),Q.id!==b&&(b=Q.id,ne=!0),ee||M!==S){De.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ce.setValue(z,"projectionMatrix",S.projectionMatrix),ce.setValue(z,"viewMatrix",S.matrixWorldInverse);let Ae=ce.map.cameraPosition;Ae!==void 0&&Ae.setValue(z,_e.setFromMatrixPosition(S.matrixWorld)),Ge.logarithmicDepthBuffer&&ce.setValue(z,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&ce.setValue(z,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,ne=!0,ye=!0)}if(X.isSkinnedMesh){ce.setOptional(z,X,"bindMatrix"),ce.setOptional(z,X,"bindMatrixInverse");let Qe=X.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),ce.setValue(z,"boneTexture",Qe.boneTexture,Ye))}X.isBatchedMesh&&(ce.setOptional(z,X,"batchingTexture"),ce.setValue(z,"batchingTexture",X._matricesTexture,Ye),ce.setOptional(z,X,"batchingIdTexture"),ce.setValue(z,"batchingIdTexture",X._indirectTexture,Ye),ce.setOptional(z,X,"batchingColorTexture"),X._colorsTexture!==null&&ce.setValue(z,"batchingColorTexture",X._colorsTexture,Ye));let qe=j.morphAttributes;if((qe.position!==void 0||qe.normal!==void 0||qe.color!==void 0)&&he.update(X,j,re),(ne||Ee.receiveShadow!==X.receiveShadow)&&(Ee.receiveShadow=X.receiveShadow,ce.setValue(z,"receiveShadow",X.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Se.envMap.value=W,Se.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&H.environment!==null&&(Se.envMapIntensity.value=H.environmentIntensity),ne&&(ce.setValue(z,"toneMappingExposure",y.toneMappingExposure),Ee.needsLights&&er(Se,ye),ue&&Q.fog===!0&&oe.refreshFogUniforms(Se,ue),oe.refreshMaterialUniforms(Se,Q,q,J,u.state.transmissionRenderTarget[S.id]),Wr.upload(z,Ut(Ee),Se,Ye)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Wr.upload(z,Ut(Ee),Se,Ye),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&ce.setValue(z,"center",X.center),ce.setValue(z,"modelViewMatrix",X.modelViewMatrix),ce.setValue(z,"normalMatrix",X.normalMatrix),ce.setValue(z,"modelMatrix",X.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let Qe=Q.uniformsGroups;for(let Ae=0,ct=Qe.length;Ae<ct;Ae++){let Vt=Qe[Ae];Ke.update(Vt,re),Ke.bind(Vt,re)}}return re}function er(S,H){S.ambientLightColor.needsUpdate=H,S.lightProbe.needsUpdate=H,S.directionalLights.needsUpdate=H,S.directionalLightShadows.needsUpdate=H,S.pointLights.needsUpdate=H,S.pointLightShadows.needsUpdate=H,S.spotLights.needsUpdate=H,S.spotLightShadows.needsUpdate=H,S.rectAreaLights.needsUpdate=H,S.hemisphereLights.needsUpdate=H}function Nn(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(S,H,j){let Q=Ie.get(S);Q.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Ie.get(S.texture).__webglTexture=H,Ie.get(S.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:j,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,H){let j=Ie.get(S);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0};let tr=z.createFramebuffer();this.setRenderTarget=function(S,H=0,j=0){U=S,C=H,N=j;let Q=!0,X=null,ue=!1,E=!1;if(S){let W=Ie.get(S);if(W.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(z.FRAMEBUFFER,null),Q=!1;else if(W.__webglFramebuffer===void 0)Ye.setupRenderTarget(S);else if(W.__hasExternalTextures)Ye.rebindTextures(S,Ie.get(S.texture).__webglTexture,Ie.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let xe=S.depthTexture;if(W.__boundDepthTexture!==xe){if(xe!==null&&Ie.has(xe)&&(S.width!==xe.image.width||S.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(S)}}let $=S.texture;($.isData3DTexture||$.isDataArrayTexture||$.isCompressedArrayTexture)&&(E=!0);let ge=Ie.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ge[H])?X=ge[H][j]:X=ge[H],ue=!0):S.samples>0&&Ye.useMultisampledRTT(S)===!1?X=Ie.get(S).__webglMultisampledFramebuffer:Array.isArray(ge)?X=ge[j]:X=ge,T.copy(S.viewport),L.copy(S.scissor),B=S.scissorTest}else T.copy(we).multiplyScalar(q).floor(),L.copy(Ne).multiplyScalar(q).floor(),B=He;if(j!==0&&(X=tr),De.bindFramebuffer(z.FRAMEBUFFER,X)&&Q&&De.drawBuffers(S,X),De.viewport(T),De.scissor(L),De.setScissorTest(B),ue){let W=Ie.get(S.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+H,W.__webglTexture,j)}else if(E){let W=H;for(let $=0;$<S.textures.length;$++){let ge=Ie.get(S.textures[$]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+$,ge.__webglTexture,j,W)}}else if(S!==null&&j!==0){let W=Ie.get(S.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,W.__webglTexture,j)}b=-1},this.readRenderTargetPixels=function(S,H,j,Q,X,ue,E,P=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let W=Ie.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&E!==void 0&&(W=W[E]),W){De.bindFramebuffer(z.FRAMEBUFFER,W);try{let $=S.textures[P],ge=$.format,xe=$.type;if(!Ge.textureFormatReadable(ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=S.width-Q&&j>=0&&j<=S.height-X&&(S.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+P),z.readPixels(H,j,Q,X,Fe.convert(ge),Fe.convert(xe),ue))}finally{let $=U!==null?Ie.get(U).__webglFramebuffer:null;De.bindFramebuffer(z.FRAMEBUFFER,$)}}},this.readRenderTargetPixelsAsync=async function(S,H,j,Q,X,ue,E,P=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let W=Ie.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&E!==void 0&&(W=W[E]),W)if(H>=0&&H<=S.width-Q&&j>=0&&j<=S.height-X){De.bindFramebuffer(z.FRAMEBUFFER,W);let $=S.textures[P],ge=$.format,xe=$.type;if(!Ge.textureFormatReadable(ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Pe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Pe),z.bufferData(z.PIXEL_PACK_BUFFER,ue.byteLength,z.STREAM_READ),S.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+P),z.readPixels(H,j,Q,X,Fe.convert(ge),Fe.convert(xe),0);let Xe=U!==null?Ie.get(U).__webglFramebuffer:null;De.bindFramebuffer(z.FRAMEBUFFER,Xe);let je=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Xh(z,je,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Pe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ue),z.deleteBuffer(Pe),z.deleteSync(je),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,H=null,j=0){let Q=Math.pow(2,-j),X=Math.floor(S.image.width*Q),ue=Math.floor(S.image.height*Q),E=H!==null?H.x:0,P=H!==null?H.y:0;Ye.setTexture2D(S,0),z.copyTexSubImage2D(z.TEXTURE_2D,j,0,0,E,P,X,ue),De.unbindTexture()};let es=z.createFramebuffer(),wi=z.createFramebuffer();this.copyTextureToTexture=function(S,H,j=null,Q=null,X=0,ue=null){ue===null&&(X!==0?(Tr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=X,X=0):ue=0);let E,P,W,$,ge,xe,Pe,Xe,je,Ze=S.isCompressedTexture?S.mipmaps[ue]:S.image;if(j!==null)E=j.max.x-j.min.x,P=j.max.y-j.min.y,W=j.isBox3?j.max.z-j.min.z:1,$=j.min.x,ge=j.min.y,xe=j.isBox3?j.min.z:0;else{let qe=Math.pow(2,-X);E=Math.floor(Ze.width*qe),P=Math.floor(Ze.height*qe),S.isDataArrayTexture?W=Ze.depth:S.isData3DTexture?W=Math.floor(Ze.depth*qe):W=1,$=0,ge=0,xe=0}Q!==null?(Pe=Q.x,Xe=Q.y,je=Q.z):(Pe=0,Xe=0,je=0);let at=Fe.convert(H.format),Ee=Fe.convert(H.type),A;H.isData3DTexture?(Ye.setTexture3D(H,0),A=z.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Ye.setTexture2DArray(H,0),A=z.TEXTURE_2D_ARRAY):(Ye.setTexture2D(H,0),A=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);let k=z.getParameter(z.UNPACK_ROW_LENGTH),re=z.getParameter(z.UNPACK_IMAGE_HEIGHT),ee=z.getParameter(z.UNPACK_SKIP_PIXELS),ne=z.getParameter(z.UNPACK_SKIP_ROWS),ye=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ze.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ze.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,$),z.pixelStorei(z.UNPACK_SKIP_ROWS,ge),z.pixelStorei(z.UNPACK_SKIP_IMAGES,xe);let ce=S.isDataArrayTexture||S.isData3DTexture,Se=H.isDataArrayTexture||H.isData3DTexture;if(S.isDepthTexture){let qe=Ie.get(S),Qe=Ie.get(H),Ae=Ie.get(qe.__renderTarget),ct=Ie.get(Qe.__renderTarget);De.bindFramebuffer(z.READ_FRAMEBUFFER,Ae.__webglFramebuffer),De.bindFramebuffer(z.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let Vt=0;Vt<W;Vt++)ce&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ie.get(S).__webglTexture,X,xe+Vt),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ie.get(H).__webglTexture,ue,je+Vt)),z.blitFramebuffer($,ge,E,P,Pe,Xe,E,P,z.DEPTH_BUFFER_BIT,z.NEAREST);De.bindFramebuffer(z.READ_FRAMEBUFFER,null),De.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(X!==0||S.isRenderTargetTexture||Ie.has(S)){let qe=Ie.get(S),Qe=Ie.get(H);De.bindFramebuffer(z.READ_FRAMEBUFFER,es),De.bindFramebuffer(z.DRAW_FRAMEBUFFER,wi);for(let Ae=0;Ae<W;Ae++)ce?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,qe.__webglTexture,X,xe+Ae):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,qe.__webglTexture,X),Se?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Qe.__webglTexture,ue,je+Ae):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Qe.__webglTexture,ue),X!==0?z.blitFramebuffer($,ge,E,P,Pe,Xe,E,P,z.COLOR_BUFFER_BIT,z.NEAREST):Se?z.copyTexSubImage3D(A,ue,Pe,Xe,je+Ae,$,ge,E,P):z.copyTexSubImage2D(A,ue,Pe,Xe,$,ge,E,P);De.bindFramebuffer(z.READ_FRAMEBUFFER,null),De.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Se?S.isDataTexture||S.isData3DTexture?z.texSubImage3D(A,ue,Pe,Xe,je,E,P,W,at,Ee,Ze.data):H.isCompressedArrayTexture?z.compressedTexSubImage3D(A,ue,Pe,Xe,je,E,P,W,at,Ze.data):z.texSubImage3D(A,ue,Pe,Xe,je,E,P,W,at,Ee,Ze):S.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,ue,Pe,Xe,E,P,at,Ee,Ze.data):S.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,ue,Pe,Xe,Ze.width,Ze.height,at,Ze.data):z.texSubImage2D(z.TEXTURE_2D,ue,Pe,Xe,E,P,at,Ee,Ze);z.pixelStorei(z.UNPACK_ROW_LENGTH,k),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,re),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ee),z.pixelStorei(z.UNPACK_SKIP_ROWS,ne),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ye),ue===0&&H.generateMipmaps&&z.generateMipmap(A),De.unbindTexture()},this.initRenderTarget=function(S){Ie.get(S).__webglFramebuffer===void 0&&Ye.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ye.setTextureCube(S,0):S.isData3DTexture?Ye.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ye.setTexture2DArray(S,0):Ye.setTexture2D(S,0),De.unbindTexture()},this.resetState=function(){C=0,N=0,U=null,De.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}};var N0={x:1630,y:1160},F0={x:3370,y:430},Bs={x:1450,y:1320};function Su(i,e){if(!i||!e)return null;let t=[N0,F0].filter(g=>Math.hypot(g.x-i.x,g.y-i.y)<400).sort((g,x)=>Math.hypot(g.x-i.x,g.y-i.y)-Math.hypot(x.x-i.x,x.y-i.y))[0],n=0,r=1;if(t){let g=t.x-i.x,x=t.y-i.y;Math.abs(g)>Math.abs(x)?(n=Math.sign(g)||1,r=0):r=Math.sign(x)||1}let s=[0,280,320,360][e],a=[0,220,260,300][e],o=112,c={x:i.x-n*a/2,y:i.y-r*a/2},l=(g,x)=>({x:c.x+r*g+n*x,y:c.y-n*g+r*x}),h=(g,x,m,u)=>{let _=l(g,x);return{x:_.x,y:_.y,w:r?m:u,h:r?u:m}},d=[];if(e>=2){d.push(h(0,-a/2,s,10));for(let g of[-s/2,s/2])d.push(h(g,0,10,a))}if(e>=3){let g=(s-o)/2;for(let x of[-1,1])d.push(h(x*(o/2+g/2),a/2,g,10))}let p=e===1?[-1,1].flatMap(g=>[-1,1].map(x=>({...l(g*(s/2-8),x*(a/2-8)),radius:6}))):[],f=[h(-s/2+53,-a/2+64,52,90)];return e>=3&&f.push(h(s/2-53,-a/2+64,52,90)),{center:c,width:s,depth:a,door:o,fx:n,fy:r,yaw:Math.atan2(n,r),floor:h(0,0,s,a),walls:d,posts:p,beds:f,point:l,wallHeight:224,doorHeight:204,roofRidge:284}}var z0=["#4c9cba","#df8168","#9974c7","#76b677","#e3b04c","#df71a7"],O0=["#e3b185","#be895f","#efc69d","#a67152"],B0=["#463b32","#24282b","#99673b","#c9a465"];function k0(i){let e={shirt:0,skin:0,hair:0,style:0};for(let[t,n]of[["shirt",6],["skin",4],["hair",4],["style",3]])Number.isInteger(i?.[t])&&i[t]>=0&&i[t]<n&&(e[t]=i[t]);return e}function Ho(i){let e=k0(i);return{shirt:z0[e.shirt],skin:O0[e.skin],hair:B0[e.hair],style:e.style}}var wu={gather:1e3,fish:1500,cook:1200,wave:2e3,cheer:2e3};function Tu(i,e){let t=Math.sin(e*Math.PI*4);return i==="gather"?{left:-.35,right:-1.1+t*.6,bend:.12}:i==="fish"?{left:-.8,right:-1.3+Math.sin(e*Math.PI)*.3,bend:0}:i==="cook"?{left:-.8,right:-.9+t*.25,bend:.06}:i==="wave"?{left:0,right:-2.4,bend:0,wave:t*.25}:i==="cheer"?{left:-2.4,right:-2.4,bend:0,wave:t*.12}:null}var V0="assets/materials-v018/",yc=["paving","sand","grass","plaster","teal","roof","wood","rock","leaf"],G0=new Set(["#a68854","#876742","#845f3f","#7d654b","#866642","#a98961","#765734","#9a743e","#786040","#8a6d49","#927652","#6e5942"]);function Eu(i){let e=document.createElement("canvas");e.width=i.width,e.height=i.height;let t=e.getContext("2d");t.scale(e.width/4600,e.height/2900),t.fillStyle="#0000ff",t.fillRect(0,0,4600,2900),t.fillStyle="#00ff00";for(let[n,r,s,a]of[[1750,1300,1420,840],[3380,500,450,240],[4100,2400,325,225]])t.beginPath(),t.ellipse(n,r,s,a,0,0,Math.PI*2),t.fill();return t.strokeStyle="#ff0000",t.lineWidth=100,t.lineCap="round",t.beginPath(),t.moveTo(1440,1190),t.bezierCurveTo(1520,1080,1750,1190,1980,1280),t.bezierCurveTo(2420,1510,2790,1440,3200,1320),t.stroke(),t.lineWidth=80,t.beginPath(),t.moveTo(1800,1180),t.bezierCurveTo(2100,930,2820,920,3220,730),t.lineTo(3370,480),t.stroke(),t.fillStyle="#ff0000",t.beginPath(),t.ellipse(1570,1160,290,200,0,0,Math.PI*2),t.fill(),e}function Wo(i){let e=new Map,t=new Map,n=new Set,r=0,s=0,a=!0,o=0,c=new Rs;for(let f of yc){let g=c.load(V0+f+".webp",()=>{r++,a=!0},void 0,()=>{s++,n.add(f),a=!0});g.userData.materialAssetName=f,g.colorSpace=Ft,g.wrapS=g.wrapT=Mr,g.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),e.set(f,g)}function l(f,g="#ffffff",x=1,m=.035){let u=f+g+x+m;if(!t.has(u)){let _=e.get(f).clone();_.repeat.set(x,x);let w=new Ct({color:g,map:_,bumpMap:_,bumpScale:m,roughness:f==="leaf"?.78:.93});e.get(f).addEventListener("dispose",()=>_.dispose());let y=e.get(f);w.userData.textureSource=y,t.set(u,w),a=!0}return t.get(u)}function h(f){return G0.has(f)?l("wood","#ded4c4",1,.045):f==="#e2dbc7"?l("plaster","#f8f4e7",1,.027):f==="#ba7655"?l("roof","#e4d6c7",2,.055):f==="#a7c4b7"?l("teal","#e7ede3",1,.035):f==="#92968b"||f==="#777a6b"?l("rock","#ddd9cf",1,.065):null}function d(){if(!a)return;o++;let f=r+s<yc.length;for(let g of t.values()){let x=g.userData.textureSource;x.image&&g.map.image!==x.image&&(g.map.source=x.source,g.map.needsUpdate=!0),g.map.image&&!g.userData.uploaded&&(g.map.needsUpdate=!0,g.userData.uploaded=!0),!g.userData.uploaded&&!n.has(x.userData.materialAssetName)&&(f=!0)}a=f}function p(f){f.colorSpace=Dn;let g=new Ct({color:"#ffffff",map:f,roughness:1});return g.onBeforeCompile=x=>{x.uniforms.uSand={value:e.get("sand")},x.uniforms.uGrass={value:e.get("grass")},x.uniforms.uPaving={value:e.get("paving")},x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
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
        normal=normalize(normal+vec3(dFdx(relief)*.14,dFdy(relief)*.14,0.));`)},g}return{textures:e,surface:l,forColor:h,ground:p,update:d,stats:()=>({loaded:r,failed:s,total:yc.length,materials:t.size,syncPending:a,syncPasses:o}),dispose(){for(let f of t.values())f.map.dispose(),f.dispose();for(let f of e.values())f.dispose()}}}function Xo({x:i,z:e,surface:t,yaw:n,pitch:r,mode:s="first",distance:a=4.8,bob:o=0},c={position:new V,target:new V}){let l=t+1.64+o;return s==="first"?(c.position.set(i,l,e),c.target.set(i-Math.sin(n)*Math.cos(r),l-Math.sin(r),e-Math.cos(n)*Math.cos(r)),c):(c.target.set(i,t+1.3,e),c.position.set(i+Math.sin(n)*Math.cos(r)*a,c.target.y+.65+Math.sin(r)*a,e+Math.cos(n)*Math.cos(r)*a),c)}function vc(i,e,t,n){return!(t>0)||!(n>0)?i:i.lerp(e,1-Math.exp(-t*n))}function qo(i,e,t,{height:n=18,offsetX:r=-12,offsetZ:s=-8}={}){let a=Math.abs(i.shadow.camera.right-i.shadow.camera.left),o=i.shadow.mapSize.width,c=a>0&&o>0?a/o:0,l=c?Math.round(e/c)*c:e,h=c?Math.round(t/c)*c:t;return i.position.set(l+r,n,h+s),i.target.position.set(l,0,h),c}function Au(i,e,t,n,r){let s=(()=>{let x=90210;return()=>(x=Math.imul(x,1664525)+1013904223>>>0)/4294967296})(),a=new Tt;a.setAttribute("position",new st([-.015,0,0,.015,0,0,-.012,.08,.01,.012,.08,.01,0,.16,.035],3)),a.setAttribute("uv",new st([0,0,1,0,0,.5,1,.5,.5,1],2)),a.setIndex([0,1,2,1,3,2,2,3,4]),a.computeVertexNormals();let o=new Ct({color:"#ffffff",side:Lt,roughness:1});o.defines={USE_UV:""};let c={value:0},l={value:new yt(0,0,0,0)};o.onBeforeCompile=x=>{x.uniforms.uWind=c,x.uniforms.uBase=l,x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind; uniform vec4 uBase;`),x.vertexShader=x.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec3 grassWorld=(instanceMatrix*vec4(position,1.)).xyz;
      transformed.x+=sin(uWind+grassWorld.x*.8+grassWorld.z)*position.y*.13;
      if(abs(grassWorld.x-uBase.x)<uBase.z&&abs(grassWorld.z-uBase.y)<uBase.w)transformed.y-=100.;`),x.fragmentShader=x.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=.7+.35*vUv.y;`)};let h=r?2800:5500,d=new bt(a,o,h);d.receiveShadow=!0,d.frustumCulled=!1;let p=n.getContext("2d").getImageData(0,0,n.width,n.height).data,f=new Mt,g=0;for(let x=0;x<h*8&&g<h;x++){let m=s()*4600,u=s()*2900,_=(Math.min(n.height-1,Math.floor(u/2900*n.height))*n.width+Math.min(n.width-1,Math.floor(m/4600*n.width)))*4;if(p[_+1]<p[_]+12||p[_+1]<85)continue;let w=m/t,y=u/t,I=e(w,y);I<.1||(f.position.set(w,I-.015,y),f.rotation.set(0,s()*Math.PI*2,0),f.scale.setScalar(.7+s()*.8),f.updateMatrix(),d.setMatrixAt(g,f.matrix),d.setColorAt(g,new et().setHSL(.2+s()*.055,.3+s()*.15,.22+s()*.08)),g++)}return d.count=g,i.add(d),{update(x,m){c.value=x,m?l.value.set(m.floor.x/t,m.floor.y/t,m.floor.w/(t*2)+.1,m.floor.h/(t*2)+.1):l.value.set(0,0,0,0)},dispose(){i.remove(d),a.dispose(),o.dispose(),d.dispose()}}}function Cu(i,e,{cube:t,tube:n},r){let s=e.width/80,a=e.depth/80,o=e.wallHeight/80,c=e.roofRidge/80;for(let d of i.children)d.name==="floor"&&(d.material=r.surface("paving","#e5ded0",2,.045)),d.name==="wall"&&(d.material=r.surface("plaster","#f8f4e7",1,.025)),d.name==="roof"&&(d.material=r.surface("roof","#efe2d5",2,.045));for(let d of[-1,1]){let p=t(i,"#876742",[d*s/2,o-.09,0],[.13,.16,a+.18]);if(p.name="trim",e.walls.length){let f=t(i,"#a7c4b7",[d*(s/2+.064),1.55,-a*.16],[.02,.9,.7]);f.name="shutter";for(let g=0;g<8;g++)t(i,"#876742",[d*(s/2+.08),1.17+g*.11,-a*.16],[.025,.035,.69]);for(let g of[-a*.16-.39,-a*.16+.39])t(i,"#e2dbc7",[d*(s/2+.078),1.56,g],[.045,1.02,.065])}}let l=n(i,"#ba7655",[0,c+.02,0],[.09,a+.42,.09]);l.rotation.x=Math.PI/2,l.name="ridge";let h=t(i,"#e2dbc7",[0,o-.05,-a/2-.066],[s+.08,.16,.06]);return h.name="trim",i}var Ln=Object.freeze([{id:"home",name:"Main Island",x:0,z:0,radius:480,biome:"mixed",dock:{x:390,z:100},landmarks:["village","player-base","market","harbour"]},{id:"jungle",name:"Jungle Island",x:1150,z:-450,radius:270,biome:"rainforest",dock:{x:930,z:-380},landmarks:["cave","waterfall","hidden-cache"]},{id:"fortress",name:"Fortress Island",x:1900,z:550,radius:240,biome:"rocky",dock:{x:1690,z:490},landmarks:["guarded-estate","rescue-mission"]},{id:"highlands",name:"Highlands Island",x:-1050,z:-850,radius:290,biome:"highlands",dock:{x:-840,z:-710},landmarks:["mine","mountain-trail"]},{id:"smugglers",name:"Smugglers Island",x:-1550,z:250,radius:230,biome:"mangrove",dock:{x:-1340,z:220},landmarks:["warehouse","secret-passage"]},{id:"paradise",name:"Paradise Island",x:700,z:1350,radius:250,biome:"beach",dock:{x:600,z:1120},landmarks:["cabins","reef"]}]),uv=Object.freeze(Object.fromEntries(Ln.map(i=>[i.id,i])));function Ru(i,e){return!Number.isFinite(i)||!Number.isFinite(e)?null:Ln.find(t=>Math.hypot(i-t.x,e-t.z)<=t.radius)??null}function Zr(i,e){if(Number.isFinite(i.coastSeed)){let n=i.coastSeed;return .855+.07*Math.sin(e*2+n)+.045*Math.cos(e*3-n)+.025*Math.sin(e*7+n)}let t=i.x*.002+i.z*.001;return .955+.023*Math.sin(e*3+t)+.012*Math.cos(e*5-t)}function $i(i,e,t){let n=(e-i.x)/i.radius,r=(t-i.z)/i.radius,s=Math.hypot(n,r);if(s>=1)return-.32;let a=Math.atan2(r,n),o=Zr(i,a),c=Math.max(0,Math.min(1,(o-s)/.12));if(s>o)return-.32*Math.min(1,(s-o)/.04);if(Number.isFinite(i.relief)){let f=(o-s)*i.radius/20,g=Math.min(1,f/18),x=Math.max(0,Math.min(1,(f-18)/85)),m=Math.exp(-((n+.18)**2*4+(r-.16)**2*5))*.7+Math.exp(-((n-.36)**2*11+(r+.25)**2*8))*.42;return .005+g*.65+x*x*(3-2*x)*m*i.relief}let l=Math.max(0,Math.min(1,(.79-s)/.22)),h=l*l*(3-2*l),d=Math.exp(-((n+.18)**2*4+(r-.16)**2*5))*.7+Math.exp(-((n-.36)**2*11+(r+.25)**2*8))*.42,p=i.biome==="highlands"?8.5:i.biome==="rainforest"?2.2:i.biome==="rocky"?1.6:.55;return .005+c*.35+h*d*p}function Mc(i,{segments:e=48}={}){if(!Number.isInteger(e)||e<8||e>256)throw new RangeError("segments must be 8..256");let t=[0,$i(i,i.x,i.z),0],n=[.5,.5],r=[],s=Math.ceil(e/2);for(let l=1;l<=s;l++)for(let h=0;h<=e;h++){let d=h/e*Math.PI*2,p=Number.isFinite(i.relief)?Zr(i,d)+.03:1.02,f=i.radius*p*l/s,g=Math.cos(d)*f,x=Math.sin(d)*f;t.push(g,$i(i,i.x+g,i.z+x),x),n.push(.5+g/(i.radius*2.04),.5+x/(i.radius*2.04));let m=1+(l-1)*(e+1)+h;if(h!==e)if(l===1)r.push(0,m+1,m);else{let u=m-(e+1);r.push(u,m+1,m,u,u+1,m+1)}}let a=new Tt;a.setAttribute("position",new st(t,3)),a.setAttribute("uv",new st(n,2)),a.setIndex(r),a.computeVertexNormals();let o=new Ct({color:i.biome==="beach"?11779972:5538650,roughness:1,side:Lt}),c=new ht(a,o);return c.name="archipelago-"+i.id,c.position.set(i.x,0,i.z),c.receiveShadow=!0,c}function Iu(i={}){let e=new Ve;e.name="archipelago-terrain";for(let t of Ln)e.add(Mc(t,i));return e}function Jr(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,c=new Tt,l=0;for(let h=0;h<i.length;++h){let d=i[h],p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,d=[];for(let p=0;p<i.length;++p){let f=i[p].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=i[p].attributes.position.count}c.setIndex(d)}for(let h in s){let d=Pu(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let p=0;p<d;++p){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][p]);let g=Pu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Pu(i){let e,t,n,r=-1,s=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let a=new e(s),o=new Ht(a,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/t;for(let p=0,f=h.count;p<f;p++)for(let g=0;g<t;g++){let x=h.getComponent(p,g);o.setComponent(p+d,g,x)}}else a.set(h.array,c);c+=h.count*t}return r!==void 0&&(o.gpuType=r),o}var ks=Object.freeze([{x:95,z:-95,w:105,d:80,h:4.4,color:"#d8b8a3",shutter:"#557f7b"},{x:-55,z:-115,w:110,d:85,h:5.8,color:"#d5dfd4",shutter:"#73868b"},{x:-210,z:-95,w:100,d:90,h:4.5,color:"#e6cf97",shutter:"#426d73"},{x:100,z:110,w:100,d:90,h:5.6,color:"#9fbdac",shutter:"#705b48"},{x:-70,z:130,w:110,d:85,h:4.4,color:"#dfc6b5",shutter:"#587e7c"},{x:-225,z:110,w:90,d:75,h:4.5,color:"#c5d1d0",shutter:"#7a6a58"}]);function Ki(i,e,t=ks){return e==="home"&&t.some(n=>Math.abs(i.x-n.x)<n.w/2+7&&Math.abs(i.z-n.z)<n.d/2+7)}var H0=`
float hash21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise21(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hash21(i),hash21(i+vec2(1.,0.)),f.x),mix(hash21(i+vec2(0.,1.)),hash21(i+vec2(1.)),f.x),f.y);}
float fbm21(vec2 p){float f=0.,a=.5;for(int i=0;i<4;i++){f+=a*noise21(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`,Lu=`
float hashFast(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noiseFast(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(hashFast(i),hashFast(i+vec2(1.,0.)),f.x),mix(hashFast(i+vec2(0.,1.)),hashFast(i+vec2(1.)),f.x),f.y);}
float fbmFast(vec2 p){float f=0.,a=.535714;for(int i=0;i<3;i++){f+=a*noiseFast(p);p=mat2(.8,-.6,.6,.8)*p*2.07+7.3;a*=.5;}return f;}`;function Yo(i,{size:e=900,segments:t=72,coastSeeds:n=[]}={}){let r=Array.from({length:9},(c,l)=>new yt(...i[l]||[1e4,1e4,1,1])),s=new un({fog:!0,uniforms:{...zo.clone(Ce.fog),uTime:{value:0},uEye:{value:new V},uCoasts:{value:r},uCoastSeeds:{value:Array.from({length:9},(c,l)=>n[l]??-100)}},vertexShader:`uniform float uTime;varying vec3 vWater;
    #include <fog_pars_vertex>
    void main(){vec3 p=position;
    p.y+=sin(dot(p.xz,vec2(.41,.19))+uTime*.75)*.024+sin(dot(p.xz,vec2(-.17,.36))-uTime*.58)*.019;
    vWater=(modelMatrix*vec4(p,1.)).xyz;vec4 mvPosition=viewMatrix*vec4(vWater,1.);gl_Position=projectionMatrix*mvPosition;
    #include <fog_vertex>
    }`,fragmentShader:`uniform float uTime;uniform vec3 uEye;uniform vec4 uCoasts[9];uniform float uCoastSeeds[9];varying vec3 vWater;
    #include <fog_pars_fragment>
    ${H0}
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
    }`}),a=new mn(e,e,t,t);a.rotateX(-Math.PI/2),s.userData.fragmentNoiseLayers=7;let o=new ht(a,s);return o.name="tropical-ocean",o.position.y=-.045,{mesh:o,update(c,l){s.uniforms.uTime.value=c,s.uniforms.uEye.value.copy(l)},dispose(){a.dispose(),s.dispose()}}}function Zo(i=420){let e=new un({side:Kt,depthWrite:!1,uniforms:{uTime:{value:0}},vertexShader:"varying vec3 vSky;void main(){vSky=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform float uTime;varying vec3 vSky;${Lu}
  void main(){vec3 dir=normalize(vSky);float h=dir.y;
    vec3 col=mix(vec3(.65,.79,.84),vec3(.095,.34,.59),smoothstep(-.02,.8,h));
    vec2 p=dir.xz/max(.1,h)*2.3+vec2(uTime*.006,uTime*.0025);float n=fbmFast(p);
    float cloud=smoothstep(.52,.70,n)*smoothstep(.025,.20,h);
    col=mix(col,mix(vec3(.62,.69,.71),vec3(.98,.96,.89),smoothstep(.50,.70,n)),cloud);
    float sun=pow(max(dot(dir,normalize(vec3(-.55,.82,-.36))),0.),70.);col+=vec3(.35,.24,.12)*sun;
    gl_FragColor=vec4(col,1.);
    #include <colorspace_fragment>
  }`});e.userData.fragmentNoiseLayers=3;let t=new ht(new dn(i,32,20),e);return t.name="tropical-sky",t.renderOrder=-10,t.frustumCulled=!1,t}function Jo(i,e){let t=new Ct({roughness:1,color:"#ffffff",vertexColors:!0});return t.userData.fragmentNoiseLayers=3,t.onBeforeCompile=n=>{Object.assign(n.uniforms,{uGrass:{value:i.textures.get("grass")},uSand:{value:i.textures.get("sand")},uRock:{value:i.textures.get("rock")}}),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vIslandPosition;varying vec3 vIslandNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vIslandPosition=position;vIslandNormal=normalize(normal*vec3(${e.toFixed(1)},1.,${e.toFixed(1)}));`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vIslandPosition;varying vec3 vIslandNormal;uniform sampler2D uGrass;uniform sampler2D uSand;uniform sampler2D uRock;${Lu}`).replace("#include <map_fragment>",`
        vec2 uv=vIslandPosition.xz/${e.toFixed(1)}*.34;
        float n=fbmFast(uv*.46);vec2 offset=vec2(17.3,8.1);
        vec3 grass=mix(texture2D(uGrass,uv).rgb,texture2D(uGrass,uv*1.37+offset).rgb,.38);
        vec3 sand=texture2D(uSand,uv*.8).rgb,rock=texture2D(uRock,uv*.62).rgb;
        float beach=1.-smoothstep(.025,.34,vIslandPosition.y);
        float slope=1.-abs(normalize(vIslandNormal).y);float cliff=smoothstep(.44,.76,slope)*(1.-beach);
        diffuseColor.rgb*=mix(mix(grass,sand,beach),rock,cliff)*(.82+n*.28);`)},t.customProgramCacheKey=()=>`tropical-island-${e}`,t}function Du(i=14){let e=[],t=[],n=[],r=(a,o,c,l)=>{let h=o*2.2,d=Math.sin(o*Math.PI)*.55-o*o*.95;return[Math.sin(a)*h+Math.cos(a)*l*c,d-l*.17,Math.cos(a)*h-Math.sin(a)*l*c]};for(let a=0;a<9;a++){let o=a*Math.PI*2/9;for(let c=1;c<i;c++)for(let l of[-1,1]){let h=c/i,d=Math.sin(h*Math.PI)*.44,p=e.length/3;e.push(...r(o,h-.03,l,.012),...r(o,h-.09,l,d),...r(o,h+.025,l,d*.87),...r(o,h+.03,l,.012)),t.push(h,0,h,.9,h+.03,1,h+.03,0),n.push(p,p+1,p+2,p,p+2,p+3)}}let s=new Tt;return s.setAttribute("position",new st(e,3)),s.setAttribute("uv",new st(t,2)),s.setIndex(n),s.computeVertexNormals(),s}var Zt=(i,e=0)=>{let t=Math.sin((i+1)*12.9898+(e+1)*78.233)*43758.5453;return t-Math.floor(t)};function $o(i,e,{scale:t,height:n,surfaces:r,small:s=!1,clear:a=()=>!1,dense:o=!1,lod:c=!1}={}){let l=(U,b)=>{let M=new It(.085,.16,1,U,b);M.translate(0,.5,0);let T=M.attributes.position;for(let L=0;L<T.count;L++)T.setX(L,T.getX(L)+T.getY(L)**2*.2);return M.computeVertexNormals(),M},h=l(8,6),d=c?l(6,3):h,p=r.surface("wood","#bc9c71",2,.03),f=r.surface("leaf","#9cb384",1,.01).clone();f.side=Lt;let g=Du(s?9:12),x=c?Du(s?6:7):g,m=[],u=[],_=new Mt,w=650/t,y=0;for(let U of e){let b=[];for(let T=0;T<(o?U.id==="home"?s?700:1500:s?280:650:s?22:42);T++){let L=T+U.x*.013+U.z*.017,B=T*2.39996+U.x*.001+(Zt(L,0)-.5)*.72,D=o?Math.min(.93,Math.max(.12,Math.sqrt(T*.6180339%1)*.91+(Zt(L,1)-.5)*.09)):Math.min(.91,.34+T%7*.075+(Zt(L,1)-.5)*.08),F=U.radius*D,O=U.x+Math.sin(B)*F,J=U.z+Math.cos(B)*F;a(U,O,J)||n(O,J)<.32||b.push({x:O/t,z:J/t,y:n(O,J),a:B,h:3.45+Zt(L,2)*2.15,size:.7+Zt(L,3)*.43,leanX:(Zt(L,4)-.5)*.12,leanZ:(Zt(L,5)-.5)*.14,index:y++})}if(!b.length)continue;let M=Array.from({length:4},()=>[]);b.forEach(T=>M[(T.x>=U.x/t?1:0)+(T.z>=U.z/t?2:0)].push(T)),M.forEach((T,L)=>{if(!T.length)return;let B=new bt(h,p,T.length),D=new bt(g,f,T.length);B.name=m.length?`grove-trunks-${U.id}-${L+1}`:"grove-trunks",D.name=u.length?`grove-fronds-${U.id}-${L+1}`:"grove-fronds";for(let F=0;F<T.length;F++){let O=T[F];_.position.set(O.x,O.y,O.z),_.rotation.set(O.leanX,O.a,O.leanZ),_.scale.set(O.size,O.h,O.size),_.updateMatrix(),B.setMatrixAt(F,_.matrix),_.position.set(O.x+.2*O.size*Math.cos(O.a),O.y+O.h,O.z-.2*O.size*Math.sin(O.a)),_.rotation.set(O.leanX*.35,O.a+Zt(O.index,6)*Math.PI*.35,O.leanZ*.35),_.scale.setScalar(O.size),_.updateMatrix(),D.setMatrixAt(F,_.matrix),D.setColorAt(F,new et().setHSL(.245+Zt(O.index,7)*.065,.22+Zt(O.index,8)*.13,.59+Zt(O.index,9)*.12))}for(let F of[B,D])F.userData.cullingRegion={island:U.id,sector:L+1},F.castShadow=!0,F.instanceMatrix.needsUpdate=!0,F.computeBoundingSphere(),i.add(F);B.userData.lod={high:h,low:d,distance:w,level:"high",shadowReceiverLod:c,center:B.boundingSphere.center.clone(),radius:B.boundingSphere.radius},D.userData.lod={high:g,low:x,distance:w,level:"high",center:D.boundingSphere.center.clone(),radius:D.boundingSphere.radius},B.receiveShadow=!0,D.receiveShadow=!1,m.push(B),u.push(D)})}let I=new Fi(1,1),C=r.surface("rock","#a9aaa0",2,.08),N=[];for(let U of e){let b=[];for(let T=0;T<(s?14:24);T++){let L=T+U.x*.019+U.z*.023,B=T*2.399+.6+(Zt(L,10)-.5)*.62,D=U.radius*(.84+Zt(L,11)*.1),F=U.x+Math.sin(B)*D,O=U.z+Math.cos(B)*D;a(U,F,O)||b.push({x:F/t,y:n(F,O)-.1,z:O/t,a:B,j:T,seed:L})}if(!b.length)continue;let M=new bt(I,C,b.length);M.name=N.length?"shore-rocks-"+U.id:"shore-rocks";for(let T=0;T<b.length;T++){let L=b[T];_.position.set(L.x,L.y,L.z),_.rotation.set(Zt(L.seed,12)*1.2,L.a,Zt(L.seed,13)*1.1),_.scale.set(.27+Zt(L.seed,14)*.5,.2+Zt(L.seed,15)*.43,.31+Zt(L.seed,16)*.53),_.updateMatrix(),M.setMatrixAt(T,_.matrix)}M.castShadow=M.receiveShadow=!0,M.instanceMatrix.needsUpdate=!0,M.computeBoundingSphere(),i.add(M),N.push(M)}return{trees:m[0],foliage:u[0],treeBatches:m,foliageBatches:u,rocks:N[0],rockBatches:N,lodGeometries:[h,d,g,x],update(U){for(let b of[...m,...u]){let M=b.userData.lod,T=M.distance+M.radius,L=U.distanceToSquared(M.center)<=T*T?"high":"low";L!==M.level&&(b.geometry=M[L],M.level=L,M.shadowReceiverLod&&(b.receiveShadow=L==="high"))}}}}function Ko(i,{scale:e,height:t,surfaces:n,helpers:r,village:s=ks,paths:a,marketPoint:o={x:290,z:-30}}){let{cube:c,tube:l,ell:h}=r,d=[];function p(T){let L=new Map;T.updateMatrix();for(let B of[...T.children])if(B.isMesh){B.updateMatrix();let D=B.geometry.clone().applyMatrix4(B.matrix);L.has(B.material)||L.set(B.material,[]),L.get(B.material).push(D),T.remove(B)}for(let[B,D]of L){let F=Jr(D,!1);D.forEach(J=>J.dispose());let O=new ht(F,B);O.castShadow=O.receiveShadow=!0,T.add(O)}}function f(T,L){let B=new Map,D=0;i.updateMatrixWorld(!0),L.updateMatrixWorld(!0);let F=new St().copy(L.matrixWorld).invert(),O=new St;for(let J of T)for(let q of[...J.children])if(q.isMesh){q.updateMatrixWorld(!0),O.multiplyMatrices(F,q.matrixWorld);let le=q.geometry.clone().applyMatrix4(O);B.has(q.material)||B.set(q.material,[]),B.get(q.material).push(le),D++,J.remove(q),q.geometry.dispose()}for(let[J,q]of B){let le=Jr(q,!1);q.forEach(we=>we.dispose()),le.computeBoundingSphere();let se=new ht(le,J);se.castShadow=se.receiveShadow=!0,L.add(se)}return{sourceBatches:D,materialBatches:L.children.length}}function g(T,L=i,B=!0,D=0){let F=new Ve;F.name="village-house",L.add(F),F.position.set(B?T.x/e:T.x,B?t(T.x,T.z):0,B?T.z/e:T.z),F.rotation.y=T.facing??(T.z>60?Math.PI:0);let O=T.w/e,J=T.d/e,q=T.h,le=c(F,T.color,[0,q/2,0],[O,q,J]);le.material=n.surface("plaster",T.color,2,.035);let se=n.surface("roof","#d5bbab",2,.065);for(let Y of[-1,1]){let K=c(F,"#ba7655",[Y*O/4,q+.43,0],[Math.hypot(O/2+.25,.85),.13,J+.5]);K.rotation.z=-Y*Math.atan2(.85,O/2+.25),K.material=se,c(F,"#a75f45",[Y*(O/2+.13),q+.01,0],[.14,.22,J+.58])}let we=l(F,"#a75f45",[0,q+.86,0],[.12,J+.62,.12]);we.rotation.x=Math.PI/2;for(let Y of[.17,q*.52,q-.16])c(F,"#e2dbc7",[0,Y,J/2+.035],[O+.16,.14,.1]);let Ne=q>5?2:1;for(let Y=0;Y<Ne;Y++)for(let K of[-O*.31,O*.31]){let _e=1.5+Y*2.35,Oe=J/2+.08,Ue=c(F,"#415d63",[K,_e,Oe],[.75,1.2,.05]);Ue.material.roughness=.24,Ue.material.metalness=.1,c(F,"#e2dbc7",[K,_e,Oe+.045],[.065,1.15,.075]),c(F,"#e2dbc7",[K,_e,Oe+.046],[.7,.065,.076]);for(let Te of[-1,1]){let gt=c(F,T.shutter,[K+Te*.56,_e,Oe+.03],[.34,1.3,.07]);gt.rotation.y=Te*.24;for(let z=0;z<9;z++)c(F,"#876742",[K+Te*.56,_e-.52+z*.13,Oe+.085],[.33,.024,.04])}if(c(F,"#e2dbc7",[K,_e-.68,Oe],[1.7,.1,.16]),c(F,"#e2dbc7",[K,_e+.68,Oe],[1.7,.13,.15]),Y===0){let Te=c(F,"#876742",[K,.79,J/2+.25],[1.28,.2,.3]);if(Te.rotation.x=-.04,h)for(let gt=-2;gt<=2;gt++){let z=h(F,gt%2?"#6f8f58":"#88a866",[K+gt*.22,.99+Math.abs(gt)*.025,J/2+.27],[.17,.31,.15]);z.rotation.z=gt*.14}if(Ne===1){let gt=c(F,T.shutter,[K,2.32,J/2+.46],[1.55,.08,.82]);gt.rotation.x=-.15,c(F,T.shutter,[K,2.2,J/2+.83],[1.55,.17,.07])}}}c(F,"#5a4b3d",[0,1.05,J/2+.06],[.78,2.1,.1]);for(let Y of[.55,1.42])for(let K of[-.19,.19])c(F,"#745f4c",[K,Y,J/2+.125],[.29,.6,.045]);for(let Y of[-.48,.48])c(F,"#e2dbc7",[Y,1.08,J/2+.11],[.16,2.22,.18]);c(F,"#e2dbc7",[0,2.18,J/2+.11],[1.1,.16,.18]),c(F,"#c9baa1",[0,.07,J/2+.34],[1.16,.14,.58]),h&&h(F,"#caa457",[.27,1.04,J/2+.19],[.055,.055,.035]);let He=(D%2?-1:1)*O*.42,it=J/2+.55,tt=l(F,"#e2dbc7",[He,2.91,J/2+.34],[.035,.7,.035]);tt.rotation.x=Math.PI/2,c(F,T.shutter,[He,2.62,it],[.09,.56,.64]);for(let Y of[-1,1]){let K=c(F,"#e2dbc7",[He+Y*.052,2.62,it],[.018,.22,.24]);K.rotation.x=(D%3-1)*.22}if(Ne===2){c(F,"#e2dbc7",[0,2.75,J/2+.48],[O+.15,.18,.9]);for(let Y=0;Y<=10;Y++)l(F,"#e2dbc7",[-O/2+Y*O/10,3.18,J/2+.84],[.034,.76,.034]);c(F,"#e2dbc7",[0,3.58,J/2+.84],[O+.17,.08,.1])}for(let Y of[-1,1])for(let K=0;K<Ne;K++)for(let _e of[-J*.26,J*.26])c(F,T.shutter,[Y*(O/2+.03),1.5+K*2.35,_e],[.06,1.22,.8]),c(F,"#e2dbc7",[Y*(O/2+.07),.82+K*2.35,_e],[.16,.1,1.05]),c(F,"#e2dbc7",[Y*(O/2+.07),2.18+K*2.35,_e],[.16,.12,1.05]);return F.userData.facadeDetails={planters:2,awnings:Ne===1?2:0,balcony:Ne===2,windowPanes:Ne*8,doorPanels:4,doorway:!0,ridgeCaps:1,eaveFascias:2,hangingSigns:1,signMarks:2,signClearance:!0},p(F),d.push(F),F}s.forEach((T,L)=>g(T,i,!0,L));let x=new Ve;x.name="village-buildings",i.add(x),x.userData.batchDetails={sourceHouses:d.length,...f(d,x)},x.userData.cameraBlocker=!0;let m=new Ve;m.name="village-overhead-laundry",i.add(m);let u=["#bd6f53","#e8d99e","#587e7c","#73868b"],_=[...s].sort((T,L)=>T.z-L.z),w=Math.ceil(_.length/2),y=0,I=0;for(let T of[_.slice(0,w),_.slice(w)]){let L=[...T].sort((B,D)=>B.x-D.x);for(let B=1;B<L.length;B++){let D=L[B-1],F=L[B],O=D.x+D.w/2,J=F.x-F.w/2;if(J<=O)continue;let q=(O+J)/2,le=(D.z+F.z)/2,se=Math.max(t(q,le)+3.35,3.55),we=(J-O)/e,Ne=l(m,"#5a4b3d",[q/e,se,le/e],[.012,we,.012]);Ne.rotation.z=Math.PI/2,y++;for(let He=0;He<3;He++){let it=(O+(J-O)*(He+1)/4)/e,tt=u[(y+He)%u.length],Y=c(m,tt,[it,se-.24-He%2*.05,le/e],[.46,.48+He%2*.1,.025]);Y.rotation.z=(He-1)*.06,I++}}}m.userData.laundryDetails={lines:y,garments:I,clearance:!0},p(m);function C(T,L,B=!1){let D=[],F=[],O=[],J=0;for(let se=0;se<T.length;se++){let we=T[Math.max(0,se-1)],Ne=T[Math.min(T.length-1,se+1)],He=T[se],it=Ne.x-we.x,tt=Ne.z-we.z,Y=Math.hypot(it,tt)||1;se&&(J+=Math.hypot(He.x-T[se-1].x,He.z-T[se-1].z)/e);for(let K of[-1,1]){let _e=He.x-tt/Y*L/2*K,Oe=He.z+it/Y*L/2*K;D.push(_e/e,t(_e,Oe)+.018,Oe/e),F.push((K+1)/2*L/e,J)}if(se){let K=se*2;O.push(K-2,K-1,K,K-1,K+1,K)}}let q=new Tt;q.setAttribute("position",new st(D,3)),q.setAttribute("uv",new st(F,2)),q.setIndex(O),q.computeVertexNormals();let le=new ht(q,n.surface("paving","#ded9c9",.75,.045));if(le.name="village-path",le.receiveShadow=!0,i.add(le),B){let se=Math.max(4,L*.08),we=new $t(1,1,1),Ne=new bt(we,n.surface("rock","#dad4c6",1.2,.025),(T.length-1)*2),He=new Mt;Ne.name="village-curb";let it=0;for(let tt=1;tt<T.length;tt++){let Y=T[tt-1],K=T[tt],_e=K.x-Y.x,Oe=K.z-Y.z,Ue=Math.hypot(_e,Oe),Te=-Oe/Ue,gt=_e/Ue;for(let z of[-1,1]){let vt=(Y.x+K.x)/2+Te*(L/2+se/2)*z,Je=(Y.z+K.z)/2+gt*(L/2+se/2)*z;He.position.set(vt/e,t(vt,Je)+.065,Je/e),He.rotation.set(0,Math.atan2(_e,Oe),0),He.scale.set(se/e,.1,Ue/e+.025),He.updateMatrix(),Ne.setMatrixAt(it++,He.matrix)}}Ne.castShadow=Ne.receiveShadow=!0,Ne.instanceMatrix.needsUpdate=!0,Ne.computeBoundingSphere(),i.add(Ne)}}let N=[];for(let T of a||[{points:Array.from({length:31},(L,B)=>({x:385-B*21,z:36+Math.sin(B*.19)*9})),width:55,curb:!0},{points:Array.from({length:15},(L,B)=>({x:23,z:-280+B*39})),width:40,curb:!0}]){let L=[T.points[0]];for(let B=1;B<T.points.length;B++){let D=T.points[B-1],F=T.points[B],O=Math.ceil(Math.hypot(F.x-D.x,F.z-D.z)/30);for(let J=1;J<=O;J++)L.push({x:D.x+(F.x-D.x)*J/O,z:D.z+(F.z-D.z)*J/O})}if(C(L,T.width,T.curb),T.curb)for(let B=3;B<T.points.length-3;B+=6){let D=T.points[B-1],F=T.points[B+1],O=T.points[B],J=F.x-D.x,q=F.z-D.z,le=Math.hypot(J,q)||1,se=Math.floor(B/6)%2?1:-1,we=T.width/2+9,Ne=O.x-q/le*we*se,He=O.z+J/le*we*se;N.push({x:Ne/e,y:t(Ne,He),z:He/e})}}if(N.length){let T=new It(1,1,1,10),L=new dn(1,12,8),B=new Mt,D=new bt(T,new Ct({color:"#394447",roughness:.62,metalness:.38}),N.length),F=new bt(L,new Ct({color:"#ffe4a8",emissive:"#ffb85c",emissiveIntensity:.72,roughness:.34}),N.length);D.name="village-lamp-posts",F.name="village-lamp-globes";for(let O=0;O<N.length;O++){let J=N[O];B.position.set(J.x,J.y+1.35,J.z),B.scale.set(.065,2.7,.065),B.updateMatrix(),D.setMatrixAt(O,B.matrix),B.position.set(J.x,J.y+2.76,J.z),B.scale.set(.18,.22,.18),B.updateMatrix(),F.setMatrixAt(O,B.matrix)}D.castShadow=D.receiveShadow=!0,F.castShadow=!1,F.receiveShadow=!0;for(let O of[D,F])O.instanceMatrix.needsUpdate=!0,O.computeBoundingSphere(),i.add(O)}let U=new Ve;U.name="harbor-market",U.position.set(o.x/e,t(o.x,o.z),o.z/e),i.add(U);for(let T of[-1.4,1.4])for(let L of[-.6,.6])l(U,"#876742",[T,1.2,L],[.045,2.4,.045]);let b=c(U,"#cc8660",[0,2.35,0],[3.2,.07,1.8]);b.rotation.x=.07;for(let T=0;T<6;T++){let L=T%2?"#f3dfbe":"#bd6f53",B=(T-2.5)*.53,D=c(U,L,[B,2.395,0],[.53,.035,1.76]);D.rotation.x=.07,c(U,L,[B,2.27,.92],[.49,.18,.055])}c(U,"#a98961",[0,.7,0],[2.8,.15,.9]);let M=["#ce5949","#e6b64d","#709a55"];for(let T=0;T<5;T++){let L=(T-2)*.5;if(c(U,"#a68854",[L,.88,0],[.43,.2,.68]),h)for(let B=0;B<3;B++)h(U,M[(T+B)%M.length],[L+(B-1)*.11,1.05,B%2?-.11:.11],[.075,.085,.075])}return U.userData.marketDetails={canopyStripes:6,valances:6,produce:15},p(U),{building:g,houses:d,buildings:x}}var rt=20;var rn=Ln.map((i,e)=>({...i,x:i.x*16,z:i.z*16,dock:{x:i.dock.x*16,z:i.dock.z*16},radius:i.id==="home"?9e3:i.radius*16,coastSeed:1.3+e*1.7,relief:i.id==="home"?24:i.biome==="highlands"?85:i.biome==="rainforest"?42:i.biome==="rocky"?28:12})),Sc=Object.fromEntries(rn.map(i=>[i.id,i])),jr={minX:Math.min(...rn.map(i=>i.x-i.radius))-1600,maxX:Math.max(...rn.map(i=>i.x+i.radius))+1600,minZ:Math.min(...rn.map(i=>i.z-i.radius))-1600,maxZ:Math.max(...rn.map(i=>i.z+i.radius))+1600},Uu=(i,e)=>rn.find(t=>Math.hypot(i-t.x,e-t.z)<t.radius)||null,mt=Object.fromEntries(rn.map((i,e)=>{let t=Ln[e],n=Math.hypot(t.dock.x-t.x,t.dock.z-t.z),r=(t.dock.x-t.x)/n,s=(t.dock.z-t.z)/n,a=i.radius*Zr(i,Math.atan2(s,r)),o=c=>({x:i.x+r*c,z:i.z+s*c});return[i.id,{id:i.id,...o(a+320),ux:r,uz:s,land:o(a-320),end:o(a+240),shore:o(a+200),width:38,deck:.72}]})),Kr={x:mt.home.land.x-385,z:mt.home.land.z-40},ji=ks.map(i=>({...i,x:i.x+Kr.x,z:i.z+Kr.z,facing:i.z>60?Math.PI:0})),$r=(i,e)=>({x:i+Kr.x,z:e+Kr.z}),Vs=[{width:55,curb:!0,points:Array.from({length:31},(i,e)=>e===0?{...mt.home.land}:$r(385-e*21,36+Math.sin(e*.19)*9))},{width:40,curb:!0,points:Array.from({length:15},(i,e)=>$r(23,-280+e*39))},{width:36,points:[$r(-245,40),$r(-600,30),{x:Sc.home.radius*.35,z:400},{x:800,z:-700},{x:-1800,z:-2400}]}],Nu=$r(290,-30),zt={x:mt.fortress.land.x-mt.fortress.ux*800,z:mt.fortress.land.z-mt.fortress.uz*800},Fu={x:zt.x-115,z:zt.z+145},ot={pump:$r(330,65),cave:{x:mt.jungle.land.x-mt.jungle.ux*700,z:mt.jungle.land.z-mt.jungle.uz*700},estate:{x:zt.x,z:zt.z+102},paper:{x:0,z:-40},caveExit:{x:0,z:150},estateExit:{x:0,z:130},stairs:{x:70,z:-95},cellarExit:{x:0,z:150},key:{x:0,z:-60}};ot.supply={x:ot.cave.x+150,z:ot.cave.z-105};var W0=[{id:"gate",area:null,...Fu,hp:2},{id:"patrol",area:null,x:zt.x+110,z:zt.z+85,hp:2},{id:"hall",area:"estate",x:-65,z:15,hp:2},{id:"boss",area:"estate",x:0,z:-60,hp:3}];function bc(i,e,t){return t=Math.max(0,Math.min(1,t)),t=t*t*(3-2*t),i+(e-i)*t}function Qi(i,e,t=Uu(i,e)){if(!t)return-.32;let n=$i(t,i,e);if(n<=.01)return n;if(t.id==="home"){let r=Math.hypot(i-Kr.x+80,e-Kr.z);r<820&&(n=bc(.68,n,(r-470)/350))}if(t.id==="fortress"){let r=Math.max(Math.abs(i-zt.x),Math.abs(e-zt.z));r<400&&(n=bc(.85,n,(r-180)/220))}if(t.id==="jungle"){let r=Math.hypot(i-ot.cave.x,e-ot.cave.z);r<230&&(n=bc(1.2,n,(r-100)/130))}return n}function wc(i,e,t){for(let n of t?[mt[t]]:Object.values(mt)){if(!n)continue;let r=i-n.land.x,s=e-n.land.z,a=r*n.ux+s*n.uz,o=r*n.uz-s*n.ux,c=Math.hypot(n.end.x-n.land.x,n.end.z-n.land.z);if(a>=-.5&&a<=c+.5&&Math.abs(o)<=n.width/2){let l=Qi(n.land.x,n.land.z);return{dock:n,height:l+(n.deck-l)*Math.max(0,Math.min(1,a/c))}}}return null}function Gn(i,e){return wc(i,e)?.height??Qi(i,e)}function jo(i,e){return Vs.some(t=>t.points.some((n,r)=>{if(!r)return!1;let s=t.points[r-1],a=n.x-s.x,o=n.z-s.z,c=Math.max(0,Math.min(1,((i-s.x)*a+(e-s.z)*o)/(a*a+o*o)));return Math.hypot(i-s.x-a*c,e-s.z-o*c)<t.width/2+35}))}var wv=Object.fromEntries(Ln.map(i=>{let e=Math.hypot(i.dock.x-i.x,i.dock.z-i.z),t=(i.dock.x-i.x)/e,n=(i.dock.z-i.z)/e;return[i.id,{x:i.x+t*i.radius*1.06,z:i.z+n*i.radius*1.06,shore:{x:i.x+t*i.radius*.84,z:i.z+n*i.radius*.84}}]}));var Qr={seatZ:-.28,seatTop:.72,hips:.84,eye:1.65};function zu(i,{cube:e,ell:t,mat:n}){let r=new Ve;r.name="campaign-boat",i.add(r),t(r,"#233f52",[0,.05,0],[.85,.36,1.9]),t(r,"#dedbd0",[0,.22,0],[.8,.23,1.85]);let s=e(r,"#6e5942",[0,.4,-.15],[1.3,.08,2.7]);s.name="boat-deck";let a=e(r,"#3b5355",[0,.57,Qr.seatZ],[.92,.3,.48]);a.name="boat-seat",e(r,"#e7e0d0",[0,.73,.5],[1,.65,.36]);let o=new ht(new $t(1.2,.48,.025),new As({color:"#b9e4eb",transparent:!0,opacity:.4,roughness:.1}));o.position.set(0,1.15,.68),r.add(o);let c=new ht(new ii(.2,.026,8,20),n("#2e3538"));c.name="boat-wheel",c.position.set(0,1.05,.28),r.add(c);let l=new It(1,1,1,8),h=new bt(l,n("#d6dedc"),10),d=new Mt;h.name="boat-rails";let p=0;for(let _ of[-.68,.68]){for(let w of[.15,.85,1.55])d.position.set(_,.75,w),d.rotation.set(0,0,0),d.scale.set(.025,.5,.025),d.updateMatrix(),h.setMatrixAt(p++,d.matrix);for(let w of[.86,1.01])d.position.set(_,w,.85),d.rotation.set(Math.PI/2,0,0),d.scale.set(.025,1.4,.025),d.updateMatrix(),h.setMatrixAt(p++,d.matrix)}h.castShadow=!0,h.instanceMatrix.needsUpdate=!0,h.computeBoundingSphere(),r.add(h);let f=new Ct({color:"#b7d6d8",emissive:"#31545a",emissiveIntensity:.38,roughness:.28}),g=new bt(new It(.1,.1,.03,16),f,3);g.name="boat-gauges";for(let _=0;_<3;_++)d.position.set((_-1)*.28,.91,.3),d.rotation.set(Math.PI/2,0,0),d.scale.set(_===1?1:.82,_===1?1:.82,1),d.updateMatrix(),g.setMatrixAt(_,d.matrix);g.instanceMatrix.needsUpdate=!0,g.computeBoundingSphere(),r.add(g);let x=t(r,"#d84e46",[-.65,.79,.94],[.075,.075,.075]),m=t(r,"#52b878",[.65,.79,.94],[.075,.075,.075]);x.name="boat-port-light",m.name="boat-starboard-light",x.material=new Ct({color:"#d84e46",emissive:"#b32b25",emissiveIntensity:.9}),m.material=new Ct({color:"#52b878",emissive:"#238547",emissiveIntensity:.9}),e(r,"#303b40",[0,.35,-1.75],[.42,.6,.38]),e(r,"#303b40",[0,-.12,-1.85],[.22,.65,.25]);let u=new ht(new mn(1.5,5),new hn({color:"#d0ebe6",transparent:!0,opacity:.25,depthWrite:!1}));return u.rotation.x=-Math.PI/2,u.position.set(0,.03,-3.3),r.add(u),r.userData.boatDetails={rails:10,gauges:3,navigationLights:2},{boat:r,wake:u}}function Ou(i,e){e.add(i.root),i.root.position.set(0,0,Qr.seatZ),i.root.rotation.set(0,0,0),i.rig.rotation.set(0,0,0),i.hips.position.y=Qr.hips;for(let t of i.arms)t.arm.rotation.x=-.85,t.arm.rotation.z=-t.side*.18,t.forearm.rotation.x=-.72;for(let t of i.legs)t.thigh.rotation.x=-1.68,t.calf.rotation.x=1.68,t.shoe.rotation.x=0}var bi=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z);var ai=Array.from({length:5},(i,e)=>({id:e,x:(e-2)*38,z:-80,child:e>2}));function X0(i){return Object.values(mt).filter(e=>bi(e,i.p)<125).sort((e,t)=>bi(e,i.p)-bi(t,i.p))[0]}function q0(i){if(i.interior==="cave")return[{id:"paper",...ot.paper,label:i.paper?i.gun?"supplies":"take-gun":"move-paper"},{id:"cave-exit",...ot.caveExit,label:"leave-cave"}];if(i.interior==="estate")return[{id:"key",...ot.key,label:"take-key"},{id:"stairs",...ot.stairs,label:"cellar"},{id:"estate-exit",...ot.estateExit,label:"leave-estate"}];if(i.interior==="cellar")return[...ai.filter(n=>!i.released.includes(n.id)).map(n=>({...n,id:"cell-"+n.id,label:"free-person"})),{id:"cellar-exit",...ot.cellarExit,label:"upstairs"}];if(i.boat){let n=X0(i);return n?[{...n,id:"dock-"+n.id,label:"dock"}]:[]}let e=mt[i.island],t=[{...e.shore,id:"boat",label:i.released.length===5&&!i.boarded?"board-group":"boat"}];if(i.island==="home"&&t.push({id:"pump",...ot.pump,label:"refuel"}),i.island==="jungle"&&t.push({id:"cave",...ot.cave,label:"enter-cave"},{id:"supply",...ot.supply,label:"supplies"}),i.island==="fortress"&&t.push({id:"estate",...ot.estate,label:"enter-estate"}),["highlands","smugglers","paradise"].includes(i.island)){let n=Sc[i.island];t.push({id:"supplies",x:n.x,z:n.z,label:"supplies"})}return t}function Bu(i){return q0(i).filter(e=>bi(e,i.p)<(e.id.startsWith("cell-")?85:e.id.startsWith("dock-")?125:65)).sort((e,t)=>bi(e,i.p)-bi(t,i.p))[0]||null}function Y0(i){if(i.complete)return{key:"complete",target:null};if(!i.docked)return{key:"dock-goal",target:mt.home};if(!i.tanked)return{key:"fuel-goal",target:i.boat?mt.home:ot.pump};if(!i.gun)return i.interior==="cave"?{key:i.paper?"gun-goal":"paper-goal",target:ot.paper}:{key:"cave-goal",target:i.boat?mt.jungle:i.island==="jungle"?ot.cave:mt[i.island].shore};if(i.interior==="cave")return{key:"exit-cave-goal",target:ot.caveExit};if(!i.key){if(i.interior==="estate"){let e=i.guards.find(t=>t.id==="boss");return{key:e.hp>0?"boss-goal":"key-goal",target:e.hp>0?e:ot.key}}return{key:"estate-goal",target:i.boat?mt.fortress:i.island==="fortress"?ot.estate:mt[i.island].shore}}return i.released.length<5?i.interior==="cellar"?{key:"people-goal",target:ai.find(e=>!i.released.includes(e.id))}:{key:"cellar-goal",target:i.interior==="estate"?ot.stairs:i.boat?mt.fortress:ot.estate}:i.interior?{key:"escort-goal",target:i.interior==="cellar"?ot.cellarExit:ot.estateExit}:i.boarded?{key:"home-goal",target:i.boat?mt.home:i.island==="home"?mt.home.shore:mt[i.island].shore}:{key:"boat-goal",target:mt.fortress.shore}}function Gs(i){let e=Y0(i);if(i.boat||i.interior||!e.target)return e;let t=mt[i.island],n=!!wc(i.p.x,i.p.z,i.island);if(e.target===t.shore){if(!n&&bi(i.p,t.land)>65)return{...e,target:t.land}}else if(n&&bi(i.p,t.land)>45)return{...e,target:t.land};return e}function Tc(i,e,t,n,r){let s=e.interior?1.8:e.boat?.65:1.3;if(i.fillStyle=e.interior?"#25312d":"#176475",i.fillRect(0,0,t,n),i.save(),i.translate(t/2-e.p.x*s,n/2-e.p.z*s),i.scale(s,s),e.interior){if(i.fillStyle="#6f7568",i.fillRect(-115,-125,230,310),i.strokeStyle="#beb99e",i.lineWidth=8,i.strokeRect(-115,-125,230,310),e.interior==="cave"&&(i.fillStyle="#967756",i.fillRect(-25,-60,50,35),i.fillStyle=e.paper?"#30383a":"#e4d6b8",e.gun||i.fillRect(-17,-55,34,22)),e.interior==="estate"&&(i.fillStyle="#9b7751",i.fillRect(-45,-105,90,25),i.fillStyle="#f0c561",!e.key&&e.guards.find(l=>l.id==="boss").hp===0&&i.fillRect(-5,-65,10,12)),e.interior==="cellar")for(let l of ai)i.strokeStyle="#bac6bf",e.released.includes(l.id)||i.strokeRect(l.x-18,-112,36,80)}else{for(let l of rn){o(l,1,"#398b8b",-4*rt),o(l,1,"#d9cba2"),o(l,1,l.biome==="highlands"?"#8f9882":"#759575",18*rt);for(let d=0;d<26;d++){let p=d*2.39996+l.x*.001,f=l.radius*(.36+d%7*.075),g=l.x+Math.sin(p)*f,x=l.z+Math.cos(p)*f;if(!(l.id==="home"&&(Ki({x:g,z:x},l.id,ji)||jo(g,x)))&&!(l.id==="fortress"&&Math.abs(g-zt.x)<125&&Math.abs(x-zt.z)<155)){i.strokeStyle="#365e49",i.lineWidth=5;for(let m=0;m<7;m++){let u=m*Math.PI*2/7;i.beginPath(),i.moveTo(g,x),i.quadraticCurveTo(g+Math.sin(u+.25)*13,x+Math.cos(u+.25)*13,g+Math.sin(u)*25,x+Math.cos(u)*25),i.stroke()}}}i.fillStyle="#fff4cc",i.font="18px system-ui",i.textAlign="center",i.fillText(r(l.id),l.x,l.z-l.radius*.58);let h=mt[l.id];i.strokeStyle="#a2865b",i.lineWidth=h.width,i.beginPath(),i.moveTo(h.land.x,h.land.z),i.lineTo(h.end.x,h.end.z),i.stroke()}for(let l of Vs)i.strokeStyle="#b7baa5",i.lineWidth=l.width,i.beginPath(),l.points.forEach((h,d)=>d?i.lineTo(h.x,h.z):i.moveTo(h.x,h.z)),i.stroke();for(let l of ji)i.fillStyle="#304f43",i.fillRect(l.x-l.w/2+7,l.z-l.d/2+9,l.w,l.d),i.fillStyle=l.color,i.fillRect(l.x-l.w/2,l.z-l.d/2,l.w,l.d),i.fillStyle="#ab7861",i.fillRect(l.x-l.w/2-3,l.z-l.d/2+4,l.w+6,l.d-8),i.strokeStyle="#d4aa83",i.lineWidth=4,i.beginPath(),i.moveTo(l.x-l.w/2,l.z),i.lineTo(l.x+l.w/2,l.z),i.stroke();i.fillStyle="#e0d5b9",i.fillRect(zt.x-80,zt.z-80,160,160),i.fillStyle="#352e25",i.fillRect(zt.x-20,zt.z+76,40,12),i.fillStyle="#404b40",i.fillRect(ot.cave.x-36,ot.cave.z-30,72,36),i.fillStyle="#d28757",i.fillRect(ot.pump.x-15,ot.pump.z-16,30,32)}for(let l of e.guards)l.area===e.interior&&l.hp>0&&!e.boat&&(l.area||e.island==="fortress")&&c(l,"#d28b76",12);if(e.interior==="cellar")for(let l of ai)e.released.includes(l.id)||c(l,"#d3dcbe",10);let a=Gs(e).target;a&&(i.strokeStyle="#f5d281",i.lineWidth=3,i.beginPath(),i.arc(a.x,a.z,20+Math.sin(e.elapsed*3)*3,0,Math.PI*2),i.stroke()),i.save(),i.translate(e.p.x,e.p.z),i.rotate(-e.heading),e.boat?(i.fillStyle="#efe4c9",i.beginPath(),i.moveTo(-18,-32),i.lineTo(18,-32),i.lineTo(22,28),i.lineTo(0,50),i.lineTo(-22,28),i.closePath(),i.fill()):(i.fillStyle="#b6ddd3",i.beginPath(),i.arc(0,0,9,0,Math.PI*2),i.fill()),i.strokeStyle="#fff6c7",i.lineWidth=3,i.beginPath(),i.moveTo(0,6),i.lineTo(0,28),i.stroke(),i.restore(),e.shot&&(i.strokeStyle="#ffeac5",i.lineWidth=2,i.beginPath(),i.moveTo(e.shot.from.x,e.shot.from.z),i.lineTo(e.shot.to.x,e.shot.to.z),i.stroke()),i.restore();function o(l,h,d,p=0){i.fillStyle=d,i.beginPath();for(let f=0;f<=96;f++){let g=f/96*Math.PI*2,x=l.radius*Zr(l,g)*h-p,m=l.x+Math.cos(g)*x,u=l.z+Math.sin(g)*x;f?i.lineTo(m,u):i.moveTo(m,u)}i.closePath(),i.fill()}function c(l,h,d){i.fillStyle=h,i.beginPath(),i.arc(l.x,l.z,d,0,Math.PI*2),i.fill()}}function ku({canvas:i,getState:e,makeHuman:t,onLost:n,rendererFactory:r=s=>new Xr(s)}){let s=r({canvas:i,antialias:!0,powerPreference:"high-performance"}),a=innerWidth<=700;s.setPixelRatio(Math.min(devicePixelRatio||1,a?1.1:1.5)),s.setSize(innerWidth,innerHeight,!1),s.outputColorSpace=Ft,s.toneMapping=zr,s.shadowMap.enabled=!0,s.shadowMap.type=Fr,s.shadowMap.autoUpdate=!1;let o=new Ui,c=new Gt(68,innerWidth/innerHeight,.04,6e3);o.add(c),o.background=new et("#b9dbe5"),o.fog=new Li("#b9dbe5",650,2400);let l=new Bi("#d5ecfa","#566143",2),h=new Vi("#fff2d6",2.8);h.castShadow=!0,h.shadow.mapSize.set(a?1024:2048,a?1024:2048),Object.assign(h.shadow.camera,{left:-22,right:22,top:22,bottom:-22,near:.1,far:100}),h.shadow.normalBias=.025,o.add(l,h,h.target);let d=Wo(s),p=new Map,f=new Map,g=E=>(p.has(E)||p.set(E,d.forColor(E)||new Ct({color:E,roughness:.85})),p.get(E)),x=(E,P)=>(f.has(E)||f.set(E,P()),f.get(E)),m=(E,P,W,$=[0,0,0],ge=[1,1,1])=>{let xe=new ht(P,W);return xe.position.set(...$),xe.scale.set(...ge),xe.castShadow=xe.receiveShadow=!0,E.add(xe),xe},u=(E,P,W,$)=>m(E,x("box",()=>new $t),g(P),W,$),_=(E,P,W,$)=>m(E,x("cylinder",()=>new It(1,1,1,12)),g(P),W,$),w=(E,P,W,$)=>m(E,x("sphere",()=>new dn(1,16,12)),g(P),W,$),y={mat:g,geo:x,mesh:m,cube:u,tube:_,ell:w},I=new Ve,C=new Ve,N=E=>{let P=new Map;E.updateMatrix();for(let W of[...E.children])if(W.isMesh){W.updateMatrix();let $=W.geometry.clone().applyMatrix4(W.matrix);P.has(W.material)||P.set(W.material,[]),P.get(W.material).push($),E.remove(W)}for(let[W,$]of P){let ge=Jr($,!1);$.forEach(Pe=>Pe.dispose());let xe=new ht(ge,W);xe.castShadow=xe.receiveShadow=!0,E.add(xe)}},U=(E,P)=>{let W=new Set(E.legs.map(Xe=>Xe.shoe)),$=0,ge=0,xe=0;E.root.traverse(Xe=>{Xe.isMesh&&$++});let Pe=Xe=>{for(let Ze of[...Xe.children])Ze.isMesh||Pe(Ze);let je=new Map;for(let Ze of[...Xe.children])Ze.isMesh&&!W.has(Ze)&&!Ze.isInstancedMesh&&(je.has(Ze.material)||je.set(Ze.material,[]),je.get(Ze.material).push(Ze));for(let[Ze,at]of je)if(at.length>1){let Ee=at.map(re=>(re.updateMatrix(),re.geometry.clone().applyMatrix4(re.matrix))),A=Jr(Ee,!1);Ee.forEach(re=>re.dispose());let k=new ht(A,Ze);k.name=`${P}-rigid-batch-${xe++}`,k.castShadow=at.some(re=>re.castShadow),k.receiveShadow=at.some(re=>re.receiveShadow),at.forEach(re=>Xe.remove(re)),Xe.add(k)}};Pe(E.root),E.root.traverse(Xe=>{Xe.isMesh&&ge++}),E.root.userData.rigidBatchProfile={sourceMeshes:$,renderMeshes:ge,batches:xe,animatedShoes:W.size}},b=(E,P,W)=>{let $=new Ve;$.name="campaign-supply-cache-"+E,$.position.set(P/rt,Gn(P,W),W/rt),I.add($),u($,"#a98961",[0,.34,0],[1.45,.68,.88]),u($,"#debb63",[0,.72,0],[1.52,.09,.94]);for(let ge of[-.54,.54])u($,"#debb63",[ge,.35,.46],[.1,.62,.06]);u($,"#bd6e4e",[-1.02,.42,.04],[.42,.84,.55]),u($,"#394447",[-1.02,.87,.04],[.2,.08,.22]);for(let ge of[-1.15,-.89])u($,"#394447",[ge,.75,.04],[.05,.24,.05]);return u($,"#394447",[-1.02,.84,.04],[.26,.05,.05]),u($,"#596b4e",[.93,.23,.04],[.72,.46,.58]),u($,"#394447",[.93,.48,.04],[.48,.05,.26]),u($,"#e2dbc7",[.82,.86,-.03],[.7,.34,.5]),u($,"#bd6e4e",[.82,.87,.235],[.34,.08,.025]),u($,"#bd6e4e",[.82,.87,.235],[.08,.25,.025]),$.userData.supplyDetails={crate:!0,fuelCan:!0,medkit:!0,ammoBox:!0},N($),$};o.add(I,C);let M=a?96:192,T=Math.max(...rn.map(E=>E.radius)),L=[];for(let E of rn){let P=Math.max(a?48:72,Math.round(M*E.radius/T/8)*8),W=Mc(E,{segments:P});W.userData.terrainSegments=P,L.push(W),W.scale.set(1/rt,1,1/rt),W.position.set(E.x/rt,0,E.z/rt);let $=W.geometry.attributes.position;for(let ce=0;ce<$.count;ce++)$.setY(ce,Qi(E.x+$.getX(ce),E.z+$.getZ(ce),E));let ge=new Float32Array($.count*3),xe=new et;for(let ce=0;ce<$.count;ce++){let Se=Math.hypot($.getX(ce),$.getZ(ce))/E.radius;xe.set(Se>.8?"#fff7e4":E.biome==="rocky"?"#d1d4c5":"#dce2c8"),xe.toArray(ge,ce*3)}W.geometry.setAttribute("color",new Ht(ge,3)),W.geometry.computeVertexNormals(),W.material.dispose(),W.material=Jo(d,rt),W.material.vertexColors=!0,I.add(W);let Pe=mt[E.id],Xe=new Ve,je=Qi(Pe.land.x,Pe.land.z);Xe.name="pier-"+E.id,Xe.position.set(Pe.land.x/rt,je,Pe.land.z/rt),Xe.rotation.y=Math.atan2(Pe.ux,Pe.uz),I.add(Xe);let Ze=Qo(Pe.end,Pe.land)/rt,at=Math.ceil(Ze/.26),Ee=new bt(x("box",()=>new $t),g("#a98961"),at+1),A=new Mt;Ee.name="pier-deck-"+E.id;for(let ce=0;ce<=at;ce++){let Se=Ze*ce/at;A.position.set(0,(Pe.deck-je)*ce/at-.075,Se),A.scale.set(Pe.width/rt,.15,Ze/at+.006),A.updateMatrix(),Ee.setMatrixAt(ce,A.matrix)}Ee.castShadow=Ee.receiveShadow=!0,Xe.add(Ee);let k=x("pier-piling",()=>new It(1,1,1,12)),re=new bt(k,g("#876742"),8);re.name="pier-pilings-"+E.id;let ee=0;for(let ce of[-.8,.8])for(let Se of[0,Ze*.33,Ze*.66,Ze]){let qe=(Pe.deck-je)*Se/Ze;A.position.set(ce,qe-.65,Se),A.scale.set(.075,1.6,.075),A.updateMatrix(),re.setMatrixAt(ee++,A.matrix)}re.castShadow=re.receiveShadow=!0,re.instanceMatrix.needsUpdate=!0,re.computeBoundingSphere(),Xe.add(re);let ne=new bt(k,g("#394447"),8);ne.name="pier-bollards-"+E.id;let ye=0;for(let ce of[-.72,.72])for(let Se of[Ze*.78,Ze*.98]){let qe=(Pe.deck-je)*Se/Ze;A.position.set(ce,qe+.25,Se),A.scale.set(.075,.5,.075),A.updateMatrix(),ne.setMatrixAt(ye++,A.matrix),A.position.set(ce,qe+.51,Se),A.scale.set(.13,.08,.13),A.updateMatrix(),ne.setMatrixAt(ye++,A.matrix)}ne.castShadow=ne.receiveShadow=!0,ne.instanceMatrix.needsUpdate=!0,ne.computeBoundingSphere(),Xe.add(ne),["paradise","smugglers","highlands"].includes(E.id)&&b(E.id,E.x,E.z)}b("jungle",ot.supply.x,ot.supply.z);let B=Math.max(jr.maxX-jr.minX,jr.maxZ-jr.minZ)/rt+12e3,D=Yo(rn.map(E=>[E.x/rt,E.z/rt,E.radius/rt,E.radius/rt]),{size:B,coastSeeds:rn.map(E=>E.coastSeed)});I.add(D.mesh);let F=Zo(5e3);I.add(F);let O=$o(I,rn,{scale:rt,height:Qi,surfaces:d,small:a,dense:!0,lod:!0,clear:(E,P,W)=>Ki({x:P,z:W},E.id,ji)||E.id==="home"&&jo(P,W)||E.id==="jungle"&&(Qo({x:P,z:W},ot.cave)<100||Qo({x:P,z:W},ot.supply)<58)||E.id==="fortress"&&Math.abs(P-zt.x)<125&&Math.abs(W-zt.z)<155||Qo({x:P,z:W},mt[E.id].land)<90}),J=Ko(I,{scale:rt,height:Qi,surfaces:d,helpers:y,village:ji,paths:Vs,marketPoint:Nu}),{boat:q,wake:le}=zu(I,y),se=new Ve;se.name="harbor-fuel-pump",se.position.set(ot.pump.x/rt,Gn(ot.pump.x,ot.pump.z),ot.pump.z/rt),I.add(se),u(se,"#a98961",[0,.06,0],[1.05,.12,.92]),u(se,"#e6d6b8",[0,.68,0],[.75,1.24,.65]),u(se,"#bd6e4e",[0,1.34,0],[.82,.28,.72]),u(se,"#263f41",[0,.99,.34],[.48,.25,.045]),u(se,"#e8d99e",[0,.99,.37],[.31,.1,.018]),_(se,"#2d3435",[.53,.72,0],[.035,1.18,.035]);let we=u(se,"#394447",[.53,.39,.29],[.1,.24,.08]);we.rotation.z=-.22,u(se,"#bd6e4e",[0,.39,.35],[.3,.1,.055]),_(se,"#e6d6b8",[0,2.18,-.06],[.055,1.42,.055]);let Ne=_(se,"#bd6e4e",[0,2.9,-.06],[.42,.1,.42]);Ne.rotation.x=Math.PI/2;let He=_(se,"#f3dfbe",[0,2.9,.005],[.31,.115,.31]);He.rotation.x=Math.PI/2,se.userData.fuelDetails={display:!0,hose:!0,nozzle:!0,marker:!0},N(se);let it=new Ve;it.name="campaign-cave-entrance",it.position.set(ot.cave.x/rt,Gn(ot.cave.x,ot.cave.z),ot.cave.z/rt),I.add(it);let tt=[[-2,.45,.02,.55,.55,.85,-.12],[-2,1.15,-.02,.58,.7,.95,.08],[-1.9,1.9,.04,.62,.72,.9,-.09],[-1.55,2.55,-.03,.72,.6,.9,.14],[2,.45,-.02,.55,.55,.85,.12],[2,1.15,.03,.58,.7,.95,-.08],[1.9,1.9,-.04,.62,.72,.9,.09],[1.55,2.55,.02,.72,.6,.9,-.14],[-1,2.9,.03,.72,.48,.9,-.1],[-.35,3.05,-.03,.68,.45,.92,.06],[.35,3.05,.02,.68,.45,.92,-.06],[1,2.9,-.02,.72,.48,.9,.1]],Y=new Mt,K=new bt(x("cave-mouth-rock",()=>new dn(1,12,8)),g("#92968b"),tt.length);K.name="cave-entrance-rocks",K.castShadow=!0,K.receiveShadow=!0,tt.forEach(([E,P,W,$,ge,xe,Pe],Xe)=>{Y.position.set(E,P,W),Y.scale.set($,ge,xe),Y.rotation.set(0,0,Pe),Y.updateMatrix(),K.setMatrixAt(Xe,Y.matrix)}),K.instanceMatrix.needsUpdate=!0,K.computeBoundingSphere(),it.add(K),u(it,"#171e19",[0,1.25,-.85],[2.8,2.5,.15]);let _e=new bt(x("cave-torch-handle",()=>new It(1,1,1,7)),g("#4c3525"),2);_e.name="cave-entrance-torches",_e.castShadow=!0;let Oe=new Ct({color:"#ffcf75",emissive:"#ff7f32",emissiveIntensity:1.15,roughness:.55}),Ue=new bt(x("cave-torch-flame",()=>new Rn(1,1,7)),Oe,2);Ue.name="cave-entrance-flames",[-1,1].forEach((E,P)=>{Y.position.set(E*1.18,1.15,.18),Y.scale.set(.035,.85,.035),Y.rotation.set(0,0,-E*.15),Y.updateMatrix(),_e.setMatrixAt(P,Y.matrix),Y.position.set(E*1.18,1.65,.18),Y.scale.set(.12,.22,.12),Y.rotation.set(0,0,E*.08),Y.updateMatrix(),Ue.setMatrixAt(P,Y.matrix)}),_e.instanceMatrix.needsUpdate=!0,Ue.instanceMatrix.needsUpdate=!0,_e.computeBoundingSphere(),Ue.computeBoundingSphere(),it.add(_e,Ue),it.userData.entranceDetails={archStones:12,torches:2,clearOpening:!0};let Te=new Ve;Te.name="guarded-estate",Te.position.set(zt.x/rt,.85,zt.z/rt),I.add(Te),u(Te,"#e2dbc7",[0,1.55,0],[8,3.1,8]),u(Te,"#a68854",[0,3.2,0],[8.6,.25,8.6]),u(Te,"#e2dbc7",[0,4.35,-.4],[6.5,2.3,6.5]);for(let E of[-1,1]){let P=u(Te,"#ba7655",[E*1.7,5.9,-.4],[3.7,.15,7.4]);P.rotation.z=-E*.3}u(Te,"#313f38",[0,1.2,4.03],[1.65,2.4,.08]);for(let E of[-2.7,2.7])for(let P of[1.7,4.3])u(Te,"#425761",[E,P,4.04],[1.15,1.3,.06]),u(Te,"#e2dbc7",[E,P,4.11],[.08,1.38,.08]),u(Te,"#e2dbc7",[E,P,4.11],[1.2,.08,.08]);for(let E of[-1.4,1.4])_(Te,"#e2dbc7",[E,1.3,4.65],[.16,2.6,.16]);u(Te,"#a68854",[0,2.67,4.65],[3.3,.2,1.4]);for(let E=0;E<3;E++)u(Te,"#92968b",[0,-.03+E*.06,4.4+E*.4],[2.6,.15,1.25-E*.25]);for(let E of[-3.4,3.4])for(let P of[1.7,4.3]){u(Te,"#587e7c",[E,P,4.07],[.32,1.35,.1]);for(let W=0;W<8;W++)u(Te,"#876742",[E,P-.5+W*.14,4.14],[.3,.025,.045])}u(Te,"#e2dbc7",[0,3.1,4.55],[8.5,.16,1.25]);for(let E=-10;E<=10;E++)_(Te,"#e2dbc7",[E*.39,3.57,5.05],[.033,.83,.033]);u(Te,"#e2dbc7",[0,4,5.05],[8.5,.08,.08]);for(let E of[-2.45,2.45]){u(Te,"#a98961",[E,.3,4.62],[1.25,.42,.55]);for(let P=-2;P<=2;P++){let W=w(Te,P%2?"#6f8f58":"#88a866",[E+P*.2,.67+Math.abs(P)*.025,4.62],[.18,.38,.18]);W.rotation.z=P*.12}}let gt=new Ct({color:"#ffe4a8",emissive:"#ffb85c",emissiveIntensity:.72,roughness:.34});for(let E of[-1.03,1.03]){u(Te,"#394447",[E,2.05,4.14],[.08,.1,.24]);let P=w(Te,"#ffe4a8",[E,1.88,4.27],[.13,.19,.13]);P.material=gt}let z=_(Te,"#d4a957",[0,3.02,4.11],[.38,.1,.38]);z.rotation.x=Math.PI/2,Te.userData.estateDetails={planters:2,lanterns:2,crest:!0},N(Te),Te.userData.cameraBlocker=!0;let vt=[J.buildings,Te];vt.forEach(E=>E.updateWorldMatrix(!0,!0));let Je={};function Ge(E,P=11,W=15){let $=new Ve;$.name=E,C.add($),Je[E]=$,u($,E==="cave"?"#777a6b":"#a68854",[0,-.1,1],[P,.2,W]);let ge=new Ve;ge.name=E+"-walls",$.add(ge);for(let Pe of[-P/2,P/2])u(ge,E==="cave"?"#92968b":"#e2dbc7",[Pe,1.65,1],[.3,3.3,W]);u(ge,E==="cave"?"#92968b":"#e2dbc7",[0,1.65,1-W/2],[P,3.3,.3]),N(ge),u($,"#313f38",[0,1.1,W/2-.2],[1.7,2.2,.15]);let xe=new ki(E==="cave"?"#ffd9a0":"#ffeccf",22,18,1.6);return xe.position.set(0,2.7,1),$.add(xe),$.userData.shellDetails={sourceMeshes:5,renderMeshes:3},$}let De=Ge("cave",12,17),wt=x("cave-formation",()=>new Rn(1,1,9)),Ie=new bt(wt,g("#777a6b"),16),Ye=new Mt;Ie.name="cave-formations";let Pt=[[-5.2,-5.4,.34,.92],[-5.2,-1.7,.27,.68],[-5.2,2.1,.38,1.06],[-5.2,5.1,.25,.78],[5.2,-4.1,.31,.84],[5.2,-.3,.39,1.12],[5.2,3.4,.28,.72],[3.6,-6.7,.42,1.18]],dt=0;for(let[E,P,W,$]of Pt)Ye.position.set(E,$/2,P),Ye.rotation.set(0,dt*.71%Math.PI,0),Ye.scale.set(W,$,W),Ye.updateMatrix(),Ie.setMatrixAt(dt++,Ye.matrix),Ye.position.set(-E,3.3-$*.48,P+.55),Ye.rotation.set(0,dt*.53%Math.PI,Math.PI),Ye.scale.set(W*.82,$*.92,W*.82),Ye.updateMatrix(),Ie.setMatrixAt(dt++,Ye.matrix);Ie.castShadow=Ie.receiveShadow=!0,Ie.instanceMatrix.needsUpdate=!0,Ie.computeBoundingSphere(),De.add(Ie),De.userData.caveDetails={stalactites:8,stalagmites:8,clearCenter:!0};let R=new Ve;R.name="cave-evidence-table",De.add(R),u(R,"#a98961",[0,.75,-2],[2,.12,1.2]);for(let E of[-.75,.75])for(let P of[-2.45,-1.55])_(R,"#876742",[E,.35,P],[.065,.7,.065]);for(let E of[-2.47,-1.53])u(R,"#876742",[0,.57,E],[1.72,.2,.07]);u(R,"#876742",[0,.56,-1.38],[.72,.27,.08]),w(R,"#394447",[0,.56,-1.32],[.045,.045,.04]),_(R,"#394447",[.72,.86,-2.18],[.17,.1,.17]);let v=new Ct({color:"#ffe4a8",emissive:"#ff9f45",emissiveIntensity:1.05,roughness:.28,transparent:!0,opacity:.88}),Z=w(R,"#ffe4a8",[.72,1.08,-2.18],[.14,.22,.14]);Z.material=v,_(R,"#394447",[.72,1.31,-2.18],[.12,.07,.12]),R.userData.evidenceDetails={legs:4,drawer:!0,lantern:!0,newspaper:!0,hiddenGun:!0},N(R);let ie=document.createElement("canvas");ie.width=256,ie.height=320;let oe=ie.getContext("2d");oe.fillStyle="#ddd5bd",oe.fillRect(0,0,256,320),oe.fillStyle="#3a3b32",oe.font="bold 26px serif",oe.fillText("ISLAND DAILY",18,38),oe.fillRect(18,51,220,3);for(let E=0;E<20;E++)oe.fillRect(18,72+E*10,94-E%4*6,2),oe.fillRect(128,72+E*10,104-E%3*8,2);let te=new xi(ie);te.colorSpace=Ft;let Le=new ht(new mn(.9,1.05),new Ct({map:te,side:Lt}));Le.name="cave-newspaper",Le.rotation.x=-Math.PI/2,Le.position.set(0,.83,-2),De.add(Le);function pe(E){let P=new Ve;E.add(P),u(P,"#333a3d",[0,0,.06],[.12,.12,.34]);let W=u(P,"#695646",[0,-.11,-.03],[.1,.23,.13]);return W.rotation.x=-.22,u(P,"#8b9294",[0,.08,.03],[.11,.035,.3]),P}let ze=pe(De);ze.name="cave-hidden-gun",ze.position.set(0,.87,-2),ze.rotation.y=Math.PI/2;let Be=Ge("estate",11,15),he=new Ve;he.name="estate-fixtures",Be.add(he),u(he,"#816947",[0,.42,-4.6],[2.6,.85,.9]),u(he,"#decc9f",[0,.05,1],[3,.025,10]);for(let E=0;E<6;E++)u(he,"#777a6b",[3.5,.06*E,-4.75+E*.28],[1.7,.12,.65]);he.userData.batchDetails={sourceMeshes:8,renderMeshes:3},N(he);let me=new Ve;me.name="estate-interior-details",Be.add(me);let $e=["#6f443d","#40626a","#718052"];for(let[E,P]of[-2.7,0,2.7].entries())u(me,"#a68854",[P,1.9,-6.31],[1.42,1.22,.08]),u(me,$e[E],[P,1.9,-6.25],[1.12,.92,.045]);u(me,"#a68854",[0,.93,-6.29],[8.7,.08,.08]);for(let E of[-4.35,4.35]){u(me,"#394447",[E,2.02,-6.24],[.1,.32,.1]);let P=w(me,"#ffe4a8",[E,1.79,-6.15],[.14,.19,.11]);P.material=gt}u(me,"#394447",[0,.86,-4.58],[1.12,.025,.52]);for(let E of[-.52,0,.52])u(me,"#d8d2c3",[E,.88,-4.57],[.4,.012,.3]);_(me,"#394447",[.93,1.08,-4.58],[.035,.42,.035]);let Fe=w(me,"#ffe4a8",[.93,1.34,-4.58],[.18,.16,.18]);Fe.material=gt,Be.userData.interiorDetails={portraits:3,sconces:2,documents:3,deskLamp:!0},N(me);let be=new ht(new ii(.13,.036,8,16),new Ct({color:"#f8ce60",emissive:"#8c6322",emissiveIntensity:.5}));be.position.set(0,.88,-3),Be.add(be),u(be,"#debb63",[0,-.2,0],[.065,.32,.065]);let Ke=Ge("cellar",11,15),G=[],de=new Ve;de.name="cellar-static",Ke.add(de);for(let E of ai){let P=new Ve;P.name="cell-door-"+E.id,P.position.set(E.x/rt,0,-1.5),Ke.add(P),G[E.id]=P;for(let ge=-2;ge<=2;ge++)_(P,"#475759",[ge*.32,1.3,0],[.025,2.6,.025]);for(let ge of[.1,2.5])u(P,"#475759",[0,ge,0],[1.65,.055,.055]);for(let ge of[.45,2.15])_(P,"#394447",[-.78,ge,.07],[.045,.12,.045]);m(P,x("cell-padlock",()=>new ii(.09,.022,6,12)),g("#a68854"),[.61,1.42,.07]),u(P,"#a68854",[.61,1.27,.07],[.18,.2,.08]),N(P);let W=E.x/rt,$=["#738b90","#9b796d"][E.id%2];u(de,"#a98961",[W,.18,-4.8],[1.55,.36,.8]),u(de,"#e2dbc7",[W,.4,-4.8],[1.5,.1,.8]),u(de,$,[W,.47,-4.65],[1.42,.045,.48]),u(de,"#d8d2c3",[W,.5,-5.08],[.64,.1,.24])}for(let E of[-3.8,0,3.8]){u(de,"#394447",[E,2.54,-6.28],[.36,.15,.1]);let P=w(de,"#ffe4a8",[E,2.34,-6.2],[.15,.2,.11]);P.material=gt}Ke.userData.cellarDetails={cells:5,hinges:10,padlocks:5,lamps:3,bedding:5},N(de);function ve(E,P,W){let $=E.hairStyles[P],ge=new Set;return $.name=`${W}-hair-${P}`,$.visible=!0,$.traverse(xe=>{xe.isMesh&&ge.add(xe)}),E.hairStyles.forEach((xe,Pe)=>{Pe!==P&&xe.removeFromParent()}),E.hairStyles=[$],E.hairParts=E.hairParts.filter(xe=>ge.has(xe)),E.spear.removeFromParent(),E.raft.removeFromParent(),Object.values(E.props).forEach(xe=>xe.removeFromParent()),E.spear=E.raft=null,E.props={},E.root.userData.renderProfile={hairVariants:1,unusedToolMeshes:0},U(E,W),E}let Re=ve(t({shirt:"#577c87",skin:"#ddb08c",hair:"#40362f"},"player",y),0,"campaign-player");Re.root.name="campaign-player",o.add(Re.root);let fe=new Map,ae=new Map,ke={gate:{shirt:"#526252",skin:"#c29574",hair:"#302e28",style:0},patrol:{shirt:"#59665a",skin:"#a96f55",hair:"#211f1e",style:1},hall:{shirt:"#4b5958",skin:"#d1a17d",hair:"#5b4032",style:2},boss:{shirt:"#34383a",skin:"#b67d60",hair:"#251f1c",style:1}};for(let E of e().guards){let P=ke[E.id],W=ve(t(P,"guard",y),P.style,"campaign-guard-"+E.id);if(W.root.name="campaign-guard-"+E.id,W.root.userData.guardProfile={boss:E.id==="boss",style:P.style},E.id==="boss"){let $=new Ve;$.name="campaign-boss-insignia",W.hips.add($);for(let xe of[-1,1])u($,"#d2aa58",[xe*.2,.56,.02],[.12,.035,.18]);let ge=u($,"#8f2f2d",[0,.34,.15],[.055,.52,.025]);ge.rotation.z=-.48,W.root.userData.guardProfile.insignia=!0}o.add(W.root),pe(W.arms[1].forearm).position.set(0,-.24,.14),fe.set(E.id,W)}let nt=[{shirt:"#8da4b1",skin:"#c99370",hair:"#302d2a",style:0,scale:1.02},{shirt:"#b78876",skin:"#e1b894",hair:"#6a4938",style:1,scale:.96},{shirt:"#9caa8c",skin:"#b98264",hair:"#2f2927",style:2,scale:1},{shirt:"#c3b487",skin:"#dca984",hair:"#704936",style:1,scale:.72},{shirt:"#92b2b6",skin:"#e4bb96",hair:"#3f302b",style:2,scale:.76}];for(let E of ai){let P=nt[E.id],W=ve(t(P,"resident",y),P.style,"campaign-prisoner-"+E.id);W.root.name="campaign-prisoner-"+E.id,W.root.scale.setScalar(P.scale),W.root.userData.residentProfile={child:E.child,style:P.style,scale:P.scale},o.add(W.root),ae.set(E.id,W)}let ft=new Ve;c.add(ft),pe(ft).position.set(.26,-.23,-.48);let xt=w(ft,"#ddb08c",[.24,-.32,-.4],[.065,.085,.08]),an=_(ft,"#577c87",[.22,-.4,-.3],[.085,.24,.085]);an.rotation.x=-.5;let Nt=new ht(new ii(.42,.035,8,32),new hn({color:"#f3d48a"}));Nt.rotation.x=-Math.PI/2,o.add(Nt);let Mn=new Ni(new Tt().setFromPoints([new V,new V]),new gi({color:"#ffe8ad"}));o.add(Mn);let on=new Gi,Bt=new V,Un={position:new V,target:new V},qt=0,Dt=.05,kt="first",xn=0,Ut=!0,Jt=!1,_n=null,er,Nn=0,tr="",es=-1/0,wi=0,S=e(),H=Gs(S).target;H&&(qt=Math.atan2(S.p.x-H.x,S.p.z-H.z));function j(E,P,W,$,ge,xe){Nn++,E.root.position.set(P.x/rt,W,P.z/rt),E.root.rotation.set(0,0,0),E.rig.rotation.y=$;let Pe=xe*7,Xe=ge?.24:0;for(let je of E.legs)je.thigh.rotation.x=Math.sin(Pe+(je.side<0?Math.PI:0))*Xe,je.calf.rotation.x=Math.max(0,-Math.sin(Pe+(je.side<0?Math.PI:0)))*Xe,je.shoe.rotation.x=-je.calf.rotation.x*.6;for(let je of E.arms)je.arm.rotation.x=ge?Math.sin(Pe+(je.side<0?0:Math.PI))*.25:0,je.arm.rotation.z=0,je.forearm.rotation.x=-.18;E.hips.position.y=.87+(ge?Math.cos(Pe*2)*.009:0)}function Q(E){if(!Ut||Jt)return;let P=e(),W=E/1e3;xn=E,Nn=0,d.update(),F.material.uniforms.uTime.value=W;let $=P.interior;I.visible=!$,C.visible=!!$;for(let[ee,ne]of Object.entries(Je))ne.visible=ee===$;o.background.set($?"#202c29":"#b9dbe5"),o.fog.color.copy(o.background),l.intensity=$?.65:2,h.intensity=$?.15:2.8;let ge=$?0:Gn(P.p.x,P.p.z);Re.root.visible=!P.boat||kt==="third",P.boat||(o.add(Re.root),j(Re,P.p,ge,P.heading,P.walking,W)),Re.rig.visible=kt==="third",q.position.set((P.boat?P.p.x:mt[P.boatAt].x)/rt,.02,(P.boat?P.p.z:mt[P.boatAt].z)/rt),q.rotation.y=P.boat?P.heading:Math.atan2(mt[P.boatAt].ux,mt[P.boatAt].uz),q.rotation.z=P.boat?Math.sin(W*2)*.015:0,le.visible=P.boat&&P.walking,P.boat&&Ou(Re,q),Le.visible=!P.paper,ze.visible=P.paper&&!P.gun,be.visible=!P.key&&P.guards.find(ee=>ee.id==="boss").hp===0,be.rotation.y=W,G.forEach((ee,ne)=>ee.visible=!P.released.includes(ne));let xe=!1;for(let ee of P.guards){let ne=fe.get(ee.id),ye=ee.area===$&&!P.boat&&(!ee.area||P.island==="fortress");if(ne.root.visible=ye,!ye)continue;let ce=ee.x-P.p.x,Se=ee.z-P.p.z,qe=ee.hp>0&&ce*ce+Se*Se<44100;xe||(xe=qe),j(ne,ee,ee.area?0:Gn(ee.x,ee.z),Math.atan2(P.p.x-ee.x,P.p.z-ee.z),qe,W),ee.hp<=0?(ne.rig.rotation.x=-Math.PI/2,ne.root.position.y+=ee.area?0:.15,ne.root.scale.setScalar(.8)):(ne.rig.rotation.x=0,ne.arms[1].arm.rotation.x=-1.05,ne.arms[1].forearm.rotation.x=-.35)}for(let ee of ai){let ne=ae.get(ee.id),ye=P.released.includes(ee.id),ce=P.boarded?!1:ye?!P.boat&&($==="estate"||$==="cellar"||P.island==="fortress"):$==="cellar";if(ne.root.visible=ce,!ce)continue;let Se=ye?{x:P.p.x-Math.sin(P.heading)*(35+ee.id*15)+Math.cos(P.heading)*(ee.id%2?16:-16),z:P.p.z-Math.cos(P.heading)*(35+ee.id*15)-Math.sin(P.heading)*(ee.id%2?16:-16)}:ee;j(ne,Se,$?0:Gn(Se.x,Se.z),P.heading,ye&&P.walking,W+ee.id*.18)}let Pe=Gs(P).target,Xe=Bu(P),je=Xe||Pe;Nt.visible=!!je,je&&Nt.position.set(je.x/rt,($?0:Gn(je.x,je.z))+.08,je.z/rt),Nt.scale.setScalar(1+Math.sin(W*3)*.1),ft.visible=P.gun&&!P.boat&&kt==="first",ft.position.z=P.shot?.025:0;let Ze=P.boat?.02+Qr.eye-1.64:ge,at=P.boat?Qr.seatZ:0,Ee=Xo({x:P.p.x/rt+Math.sin(P.heading)*at,z:P.p.z/rt+Math.cos(P.heading)*at,surface:Ze,yaw:qt,pitch:Dt,mode:kt,distance:P.boat?7.5:4.6},Un);if($&&kt==="third"&&(Ee.position.x=zs.clamp(Ee.position.x,-5.1,5.1),Ee.position.z=zs.clamp(Ee.position.z,-5,8.1)),!$&&kt==="third"){Bt.subVectors(Ee.position,Ee.target);let ee=Bt.length();Bt.normalize(),on.set(Ee.target,Bt),on.far=ee;let ne=on.intersectObjects(vt,!0).find(ye=>ye.distance>.2);ne&&Ee.position.copy(Ee.target).addScaledVector(Bt,Math.max(.35,ne.distance-.22)),Ee.position.y=Math.max(Ee.position.y,Gn(Ee.position.x*rt,Ee.position.z*rt)+.24)}c.position.copy(Ee.position),c.lookAt(Ee.target),O.update(c.position),qo(h,P.p.x/rt,P.p.z/rt,{height:25});let A=!P.paused&&(P.walking||P.boat||xe),k=[$||"",P.island,P.boat?1:0,Math.round(P.p.x/20),Math.round(P.p.z/20),Math.round(P.heading*12),P.guards.map(ee=>ee.hp>0?1:0).join(""),P.released.join(","),P.boarded?1:0,A?1:0].join("|"),re=k!==tr||A&&E-es>=1e3/30;if(s.shadowMap.needsUpdate=re,re&&(tr=k,es=E,wi++),D.update(W,c.position),F.position.copy(c.position),Mn.visible=!!P.shot,P.shot){let ee=ge+1.35,ne=P.shot.from,ye=P.shot.to;Mn.geometry.setFromPoints([new V(ne.x/rt,ee,ne.z/rt),new V(ye.x/rt,ee,ye.z/rt)])}er!==$&&(er=$,$?qt=0:Pe&&(qt=Math.atan2(P.p.x-Pe.x,P.p.z-Pe.z))),s.render(o,c)}function X(){c.aspect=innerWidth/innerHeight,c.updateProjectionMatrix(),s.setSize(innerWidth,innerHeight,!1)}function ue(E,P=0){e().paused||(qt+=E,Dt=zs.clamp(Dt+P,kt==="first"?-.95:-.05,.75))}i.addEventListener("pointerdown",E=>{e().paused||E.button!==0||(_n={id:E.pointerId,x:E.clientX,y:E.clientY},i.setPointerCapture(E.pointerId))}),i.addEventListener("pointermove",E=>{_n?.id===E.pointerId&&(ue(-(E.clientX-_n.x)*.006,(E.clientY-_n.y)*.005),_n.x=E.clientX,_n.y=E.clientY)});for(let E of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(E,()=>_n=null);return i.addEventListener("webglcontextlost",E=>{E.preventDefault(),Jt=!0,Ut=!1,n?.()}),{frame:Q,resize:X,orbit:ue,setCamera(E){kt=E==="first"?"first":"third",Dt=kt==="first"?.05:.22},get cameraMode(){return kt},get enabled(){return Ut&&!Jt},vector:(E,P)=>({x:E*Math.cos(qt)+P*Math.sin(qt),z:-E*Math.sin(qt)+P*Math.cos(qt)}),aim:()=>qt+Math.PI,setEnabled(E){Ut=!!E&&!Jt},stats:()=>({calls:s.info.render.calls,triangles:s.info.render.triangles,eye:c.position.toArray(),camera:kt,cameraBlockers:vt.length,palmBatches:O.treeBatches.length,largestPalmBatch:Math.max(...O.treeBatches.map(E=>E.count)),posedCharacters:Nn,palmLodDistanceChecks:O.treeBatches.length+O.foliageBatches.length,palmTrunkTriangles:O.treeBatches.reduce((E,P)=>E+P.count*P.geometry.index.count/3,0),unshadowedPalmTrunkTriangles:O.treeBatches.filter(E=>!E.receiveShadow).reduce((E,P)=>E+P.count*P.geometry.index.count/3,0),palmCrownTriangles:O.foliageBatches.reduce((E,P)=>E+P.count*P.geometry.index.count/3,0),lowDetailPalmBatches:O.treeBatches.filter(E=>E.userData.lod.level==="low").length,terrainTriangles:L.reduce((E,P)=>E+P.geometry.index.count/3,0),shadowUpdates:wi}),dispose(){s.dispose(),d.dispose();let E=new Set([...f.values(),...O.lodGeometries]),P=new Set(p.values());o.traverse(W=>{if(W.geometry&&E.add(W.geometry),W.material)for(let $ of Array.isArray(W.material)?W.material:[W.material])P.add($)}),E.forEach(W=>W.dispose()),P.forEach(W=>W.dispose()),te.dispose()}}}function Qo(i,e){return Math.hypot(i.x-e.x,i.z-e.z)}function Z0(i){return ku({...i,makeHuman:Cc})}var Me=80,Vu=[[1750,1300,1540,970],[3380,500,520,310],[4100,2400,390,290]],Si=(i,e,t)=>Math.max(e,Math.min(t,i)),J0=i=>(i=Si(i,0,1),i*i*(3-2*i)),$0=(i,e)=>Math.atan2(Math.sin(e-i),Math.cos(e-i));function sn(i,e){let t=i*Me,n=e*Me,r=-1;for(let[a,o,c,l]of Vu)r=Math.max(r,1-Math.hypot((t-a)/c,(n-o)/l));return r<=0?-.32:.015+J0(r/.17)*(.25+.28*(1+Math.sin(i*.23+1.3)*Math.cos(e*.27))+.12*Math.sin(i*.7)*Math.sin(e*.6))}function Gu(i,e,t){return{x:i*Math.cos(t)+e*Math.sin(t),y:-i*Math.sin(t)+e*Math.cos(t)}}function Hu(i,e,t=75){let n,r=t*t;for(let s of i||[]){let a=s.x-e.x,o=s.y-e.y,c=a*a+o*o;c<r&&(n=s,r=c)}return n}function Wu(i,e,t,n=new V){let r=Math.min(240,t*.52),s=e.projectionMatrix.elements[0]*t/2,a=0;for(let o of i){o.userData.signScale||(o.userData.signScale=o.scale.clone()),o.scale.copy(o.userData.signScale),o.getWorldPosition(n);let c=Math.max(.1,n.distanceTo(e.position)),l=o.scale.x*s/c;l>r&&o.scale.multiplyScalar(r/l),a++}return a}function Xu(i,e){let r=Si(Math.hypot(i,e),.08,.855);return{hip:-Math.atan2(e,-i)-Math.acos(Si((.43*.43+r*r-.43*.43)/(2*.43*r),-1,1)),knee:Math.PI-Math.acos(Si((.43*.43+.43*.43-r*r)/(2*.43*.43),-1,1))}}function qu(i,e={}){let t=e.shirt||"#4c9cba",n=e.skin||"#dda879",r=e.hair||"#43332b",s=e.style||0;return i.lookShirt===t&&i.lookSkin===n&&i.lookHair===r&&i.lookStyle===s?!1:(i.lookShirt=t,i.lookSkin=n,i.lookHair=r,i.lookStyle=s,!0)}function Ac(i){return i?Math.max(...[-1,0,1].flatMap(e=>[-1,0,1].map(t=>{let n=i.point(e*i.width/2,t*i.depth/2);return sn(n.x/Me,n.y/Me)}))):0}function Ec(i,e,t,n=Ac(t)){let r=sn(i,e);if(!t)return r;let s=t.floor;if(Math.abs(i*Me-s.x)<=s.w/2&&Math.abs(e*Me-s.y)<=s.h/2)return Math.max(r,n+.16);let a=i*Me-t.center.x,o=e*Me-t.center.y,c=a*t.fy-o*t.fx,l=a*t.fx+o*t.fy;return Math.abs(c)<t.door/2&&l>t.depth/2&&l<t.depth/2+64?r+(Math.max(r,n+.16)-r)*(1-(l-t.depth/2)/64):r}function Yu(i,e,t={}){let n=(p,f,g,x,m)=>{let u=new ht(m,new Ct({color:f}));return u.position.set(...g),u.scale.set(...x),p.add(u),u},r=t.cube||((p,f,g,x)=>n(p,f,g,x,new $t(1,1,1))),s=t.tube||((p,f,g,x)=>n(p,f,g,x,new It(1,1,1,10))),a=new Ve,o=i.width/Me,c=i.depth/Me,l=i.wallHeight/Me,h=i.roofRidge/Me,d=i.door/Me;a.name="base",a.position.set(i.center.x/Me,e,i.center.y/Me),a.rotation.y=i.yaw,r(a,"#a68854",[0,.08,0],[o,.16,c]).name="floor";for(let p of[-o/2+.1,o/2-.1])for(let f of[-c/2+.1,c/2-.1])s(a,"#876742",[p,l/2,f],[.075,l,.075]).name="post";for(let p of[-1,1]){let f=r(a,"#ba7655",[p*o/4,(l+h)/2,0],[Math.hypot(o/2+.2,h-l),.1,c+.36]);f.rotation.z=-p*Math.atan2(h-l,o/2+.2),f.name="roof"}for(let p of i.walls){let f=p.x-i.center.x,g=p.y-i.center.y,x=(f*i.fy-g*i.fx)/Me,m=(f*i.fx+g*i.fy)/Me;r(a,"#e2dbc7",[x,l/2,m],[i.fy?p.w/Me:p.h/Me,l,i.fy?p.h/Me:p.w/Me]).name="wall"}if(i.walls.length>=5){let p=i.doorHeight/Me;r(a,"#845f3f",[0,(l+p)/2,c/2],[d,l-p,.125]).name="lintel"}for(let p of i.beds){let f=p.x-i.center.x,g=p.y-i.center.y,x=(f*i.fy-g*i.fx)/Me,m=(f*i.fx+g*i.fy)/Me;r(a,"#7d654b",[x,.17,m],[.65,.34,1.125]).name="bed",r(a,"#cec6a0",[x,.38,m],[.65,.14,1.125]),r(a,"#ede3bd",[x,.49,m-.35],[.5,.09,.26])}return a}function Zu(i,e,{cube:t,tube:n,ell:r}){if(i==="gather"&&(n(e,"#8c6944",[0,-.12,.15],[.025,.48,.025]),t(e,"#8e9891",[0,.1,.15],[.27,.1,.075])),i==="fish"){let s=n(e,"#b2915b",[0,.22,.25],[.014,1.25,.014]);s.rotation.x=-.6;let a=n(e,"#d0e6df",[0,.37,.75],[.003,.62,.003]);a.rotation.x=.6}if(i==="cook"){let s=n(e,"#80613d",[0,-.12,.18],[.016,.5,.016]);s.rotation.x=-.6,r(e,"#bb9457",[0,-.26,.3],[.07,.04,.14])}}function Cc(i={},e="player",t={}){let n=new Map,r=new Map,s=t.mat||(D=>(n.has(D)||n.set(D,new Ct({color:D})),n.get(D))),a=t.geo||((D,F)=>(r.has(D)||r.set(D,F()),r.get(D))),o=t.mesh||((D,F,O,J=[0,0,0],q=[1,1,1])=>{let le=new ht(F,O);return le.position.set(...J),le.scale.set(...q),D.add(le),le}),c=t.ell||((D,F,O,J)=>o(D,a("ball",()=>new dn(1,14,10)),s(F),O,J)),l=t.cube||((D,F,O,J)=>o(D,a("box",()=>new $t(1,1,1)),s(F),O,J)),h=t.tube||((D,F,O,J)=>o(D,a("cyl",()=>new It(1,1,1,10)),s(F),O,J)),d=new Ve,p=new Ve;d.add(p);let f=i.skin||"#dda879",g=i.hair||"#43332b",x=i.shirt||"#4c9cba",m=new Ve;m.position.y=.87,p.add(m),c(m,"#3f4d4f",[0,.05,0],[.22,.17,.13]);let u=a("human-torso",()=>new Es([new We(.16,.13),new We(.205,.2),new We(.215,.38),new We(.25,.49),new We(.26,.52),new We(.19,.57),new We(.09,.64)],18));o(m,u,s(x),[0,0,0],[1,1,.66]);for(let D of[-1,1]){let F=l(m,x,[D*.065,.6,.071],[.085,.075,.024]);F.rotation.z=-D*.3,l(m,x,[D*.11,.37,.142],[.105,.09,.022])}for(let D=0;D<4;D++)c(m,"#d7d5c2",[0,.24+D*.075,.15],[.009,.01,.005]);e==="guard"&&l(m,"#39483f",[0,.35,.11],[.34,.36,.09]),l(m,"#3b4c48",[0,.135,-.01],[.4,.045,.255]),h(m,f,[0,.64,0],[.064,.13,.064]);let _=new Ve;_.position.y=.79,m.add(_),c(_,f,[0,0,0],[.135,.175,.133]),c(_,f,[-.137,-.005,0],[.025,.048,.025]),c(_,f,[.137,-.005,0],[.025,.048,.025]),c(_,f,[0,-.015,.136],[.026,.033,.036]);for(let D of[-1,1])c(_,"#f6f3df",[D*.052,.02,.115],[.03,.017,.014]),c(_,"#31433e",[D*.053,.02,.128],[.012,.013,.007]),l(_,g,[D*.052,.061,.11],[.062,.01,.014]);l(_,"#af735b",[0,-.071,.117],[.051,.009,.012]);let w=a("hair",()=>new dn(1,16,10,0,Math.PI*2,0,Math.PI*.56));o(_,w,s(e==="nela"?"#8d4931":g),[0,.015,-.015],[.145,.18,.143]);let y=[new Ve,new Ve,new Ve];y.forEach(D=>_.add(D));let I=_.children.find(D=>D.isMesh&&D.geometry===w);_.remove(I),y[0].add(I),o(y[1],w,s(g),[0,.015,-.015],[.145,.18,.143]),c(y[1],g,[0,-.04,-.17],[.072,.14,.08]);for(let D=0;D<12;D++){let F=D*Math.PI*2/12;c(y[2],g,[Math.sin(F)*.1,.1+D%2*.018,Math.cos(F)*.1-.015],[.066,.067,.066])}if(c(y[2],g,[0,.15,-.015],[.09,.054,.09]),e==="nela"&&c(_,"#8d4931",[0,-.045,-.145],[.125,.21,.07]),y.forEach((D,F)=>D.visible=F===(i.style||0)),e==="leon")h(_,"#c5a775",[0,.15,0],[.16,.12,.16]),h(_,"#c5a775",[0,.095,0],[.22,.028,.22]),l(m,"#e4cda1",[0,.23,.145],[.33,.42,.025]);else if(e==="player"){c(m,"#5d735b",[0,.36,-.17],[.18,.22,.09]);for(let D of[-1,1])l(m,"#b6caa4",[D*.17,.38,-.04],[.034,.35,.029])}let C=[],N=[];for(let D of[-1,1]){let F=new Ve;F.position.set(D*.27,.54,0),m.add(F);let O=c(F,x,[-D*.018,-.025,0],[.105,.13,.11]);O.name="human-shoulder",o(F,a("human-upper-arm",()=>new It(.068,.086,.19,12)),s(x),[0,-.105,0]),o(F,a("human-lower-upper-arm",()=>new It(.055,.064,.15,12)),s(f),[0,-.24,0]);let J=new Ve;J.position.y=-.31,F.add(J);let q=c(J,f,[0,0,0],[.061,.063,.061]);q.name="human-elbow",o(J,a("human-forearm",()=>new It(.057,.04,.26,12)),s(f),[0,-.13,0]),c(J,f,[0,-.28,0],[.06,.082,.046]),C.push({arm:F,forearm:J,side:D});let le=new Ve;le.position.set(D*.115,0,0),m.add(le),o(le,a("human-thigh",()=>new It(.092,.108,.42,12)),s("#52625f"),[0,-.21,0]);let se=new Ve;se.position.y=-.43,le.add(se);let we=c(se,"#52625f",[0,0,.014],[.079,.074,.075]);we.name="human-knee",o(se,a("human-calf",()=>new It(.069,.046,.36,12)),s("#52625f"),[0,-.18,0]);let Ne=c(se,"#52625f",[0,-.36,0],[.052,.06,.052]);Ne.name="human-ankle";let He=c(se,"#4b3b2e",[0,-.395,.055],[.075,.052,.14]);N.push({thigh:le,calf:se,shoe:He,side:D})}let U=new Ve;h(U,"#8c6944",[0,.56,0],[.018,1.75,.018]),c(U,"#dad9c5",[0,1.45,0],[.045,.15,.03]),U.position.set(.35,.2,.08),p.add(U),U.visible=!1;let b={};for(let D of["gather","fish","cook"]){let F=new Ve;Zu(D,F,{cube:l,tube:h,ell:c}),F.position.set(0,-.28,0),C[1].forearm.add(F),F.visible=!1,b[D]=F}let M=new Ve;d.add(M);for(let D=0;D<5;D++){let F=h(M,"#a17d48",[(D-2)*.25,.08,0],[.115,1.7,.115]);F.rotation.x=Math.PI/2}for(let D of[-.5,.5])l(M,"#6e5937",[0,.19,D],[1.24,.05,.1]);M.visible=!1;let T=[],L=[],B=[];return p.traverse(D=>{D.isMesh&&(D.material===s(x)&&T.push(D),D.material===s(f)&&L.push(D),D.material===s(g)&&B.push(D))}),{root:d,rig:p,hips:m,head:_,arms:C,legs:N,spear:U,raft:M,shirtParts:T,skinParts:L,hairParts:B,hairStyles:y,props:b,yaw:0,lastX:null,lastZ:null,phase:0}}function Ju(i,e){let t=e&&Tu(e.kind,e.phase);i.rig.rotation.x=t?.bend||0;for(let[n,r]of Object.entries(i.props))r.visible=!!t&&e.kind===n;if(t)for(let n of i.arms)n.arm.rotation.x=n.side<0?t.left:t.right,n.forearm.rotation.x=-.25,n.arm.rotation.z=-n.side*.08+((n.side>0||e.kind==="cheer")&&t.wave||0)}function $u(i,e,t){let n=i.phase||0,r=i.x+Math.sin(e*.65+n)*14,s=i.y+Math.cos(e*.65+n)*14;return t(r,s)?{x:r/Me,z:s/Me,y:.055+Math.sin(e*3+n)*.008,yaw:Math.atan2(Math.cos(e*.65+n),-Math.sin(e*.65+n))}:null}function K0({canvas:i,terrain:e,getState:t,onLost:n}){let r=new Xr({canvas:i,antialias:!0,powerPreference:"high-performance"}),s=innerWidth<=700;r.setPixelRatio(Math.min(devicePixelRatio||1,s?1.25:1.6)),r.setSize(innerWidth,innerHeight,!1),r.outputColorSpace=Ft,r.toneMapping=zr,r.toneMappingExposure=.94,r.shadowMap.enabled=!0,r.shadowMap.type=Fr;let a=new Ui;a.background=new et("#c5dbe5"),a.fog=new Li("#c5dbe5",70,240);let o=new Gt(72,innerWidth/innerHeight,.04,350);a.add(o);let c=new Bi("#c9e3ff","#71694d",1.85);a.add(c);let l=new Vi("#fff0d2",3.1);l.castShadow=!0,l.shadow.mapSize.set(s?1024:2048,s?1024:2048),l.shadow.camera.left=-16,l.shadow.camera.right=16,l.shadow.camera.top=16,l.shadow.camera.bottom=-16,l.shadow.camera.near=.5,l.shadow.camera.far=65,l.shadow.bias=-12e-5,l.shadow.normalBias=.012,a.add(l,l.target);let h=Wo(r),d=new Map,p=new Map;function f(A,k={}){if(!Object.keys(k).length){let ee=h.forColor(A);if(ee)return ee}let re=A+JSON.stringify(k);return d.has(re)||d.set(re,new Ct({color:A,roughness:.86,...k})),d.get(re)}function g(A,k){return p.has(A)||p.set(A,k()),p.get(A)}function x(){return g("ball",()=>new dn(1,14,10))}function m(){return g("box",()=>new $t(1,1,1))}function u(){return g("cyl",()=>new It(1,1,1,10))}function _(A,k,re,ee=[0,0,0],ne=[1,1,1],ye=!0){let ce=new ht(k,re);return ce.position.set(...ee),ce.scale.set(...ne),ce.castShadow=ye,ce.receiveShadow=!0,A.add(ce),ce}function w(A,k,re,ee){return _(A,x(),f(k),re,ee)}function y(A,k,re,ee){return _(A,m(),f(k),re,ee)}function I(A,k,re,ee){return _(A,u(),f(k),re,ee)}let C=new Mt,N=new mn(4600/Me,2900/Me,230,145);N.rotateX(-Math.PI/2),N.translate(2300/Me,0,1450/Me);let U=N.attributes.position;for(let A=0;A<U.count;A++)U.setY(A,sn(U.getX(A),U.getZ(A)));N.computeVertexNormals();let b=Eu(e),M=new xi(b);M.anisotropy=Math.min(4,r.capabilities.getMaxAnisotropy());let T=h.ground(M),L=new ht(N,T);L.receiveShadow=!0,a.add(L);let B=Iu({segments:s?24:48}),D=40;B.scale.set(1/D,1,1/D),B.position.x=6500/Me;for(let A of B.children)A.material.dispose(),A.material=Jo(h,D),A.geometry.setAttribute("color",new st(new Float32Array(A.geometry.attributes.position.count*3).fill(1),3));let F=new Ve;F.scale.set(D,1,D),B.add(F);let O=(A,k)=>{let re=Ru(A,k);return re?$i(re,A,k):-.32};$o(F,Ln,{scale:D,height:O,surfaces:h,small:s,clear:(A,k,re)=>Ki({x:k,z:re},A.id)||A.id==="home"&&(Math.abs(re-40)<55||Math.abs(k-23)<45)}),Ko(F,{scale:D,height:O,surfaces:h,helpers:{cube:y,tube:I,ell:w}}),a.add(B);let J=Au(a,sn,Me,b,s),q=Yo([...Vu.map(([A,k,re,ee])=>[A/Me,k/Me,re/Me,ee/Me]),...Ln.map(A=>[B.position.x+A.x/D,A.z/D,A.radius*.955/D,A.radius*.955/D])]);a.add(q.mesh);let le=Zo(320);a.add(le);function se(){let A=[],k=[],re=[],ee=(ye,ce,Se,qe)=>{let Qe=ce*2.05,Ae=Math.sin(ce*Math.PI)*.46-ce*ce*.8;return[Math.sin(ye)*Qe+Math.cos(ye)*qe*Se,Ae-qe*.22,Math.cos(ye)*Qe-Math.sin(ye)*qe*Se]};for(let ye=0;ye<11;ye++){let ce=ye*Math.PI*2/11;for(let Se=1;Se<17;Se++)for(let qe of[-1,1]){let Qe=Se/18,Ae=Math.sin(Qe*Math.PI)*.42,ct=A.length/3;A.push(...ee(ce,Qe-.023,qe,.015),...ee(ce,Qe-.085,qe,Ae),...ee(ce,Qe+.038,qe,Ae*.88),...ee(ce,Qe+.025,qe,.015)),re.push(Qe,0,Qe,.9,Qe+.03,1,Qe+.03,0),k.push(ct,ct+1,ct+2,ct,ct+2,ct+3)}}let ne=new Tt;return ne.setAttribute("position",new st(A,3)),ne.setAttribute("uv",new st(re,2)),ne.setIndex(k),ne.computeVertexNormals(),ne}let we=new It(.085,.16,4.35,14,12);we.translate(0,2.175,0);for(let A=0;A<we.attributes.position.count;A++){let k=we.attributes.position;k.setX(A,k.getX(A)+.16*(k.getY(A)/4.35)**2)}we.computeVertexNormals();let Ne=f("#9d7750",{bumpMap:h.textures.get("rock"),bumpScale:.025});Ne.onBeforeCompile=A=>{A.vertexShader=A.vertexShader.replace("#include <common>",`#include <common>
varying float vTrunkY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vTrunkY=position.y;`),A.fragmentShader=A.fragmentShader.replace("#include <common>",`#include <common>
varying float vTrunkY;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=.80+.20*smoothstep(.1,.25,fract(vTrunkY*7.));`)};let He=se(),it=h.surface("leaf","#ffffff",1,.018).clone();it.side=Lt;let tt={value:0};it.onBeforeCompile=A=>{A.uniforms.uWind=tt,A.vertexShader=A.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.y+=sin(uWind+position.x*2.0+position.z)*length(position.xz)*.018;`)};let Y={tree:new bt(we,Ne,400),leaves:new bt(He,it,400),rock:new bt(new Fi(1,2),f("#92968b"),400),food:new bt(x(),f("#7a5638"),400),shell:new bt(new dn(1,12,6,0,Math.PI),f("#f1d0b7"),400)};for(let A of Object.values(Y))A.count=0,A.castShadow=!0,A.receiveShadow=!0,A.frustumCulled=!1,a.add(A);let K=-1,_e=[],Oe=0;function Ue(A,k,re){if(re!==K){let ne={tree:0,rock:0,food:0,shell:0};_e=[];for(let ye of A){let ce=ye.x/Me,Se=ye.y/Me,qe=sn(ce,Se),Qe=ye.phase||0;if(ye.t==="tree"){let Ae=.84+.17*Math.sin(ye.x*.033+ye.y*.027),ct=1.35+.28*Math.cos(Qe);C.position.set(ce,qe,Se),C.rotation.set(.03*Math.sin(Qe),Qe,.04*Math.cos(Qe)),C.scale.set(Ae,ct,Ae),C.updateMatrix(),Y.tree.setMatrixAt(ne.tree++,C.matrix),_e.push({x:ce+.16*Ae*Math.cos(Qe),y:qe+4.3*ct,z:Se-.16*Ae*Math.sin(Qe),p:Qe,size:Ae})}else Y[ye.t]&&(C.position.set(ce,qe+(ye.t==="rock"?.23:ye.t==="food"?.13:.025),Se),C.rotation.set(0,Qe,0),C.scale.set(...ye.t==="rock"?[.34+.18*Math.abs(Math.sin(Qe)),.3,.4]:ye.t==="food"?[.15,.13,.15]:[.12,.04,.14]),C.updateMatrix(),Y[ye.t].setMatrixAt(ne[ye.t]++,C.matrix))}for(let ye of["tree","rock","food","shell"])Y[ye].count=ne[ye],Y[ye].instanceMatrix.needsUpdate=!0;K=re,Oe++}let ee=0;for(let ne of _e)C.position.set(ne.x,ne.y,ne.z),C.rotation.set(Math.sin(k*.7+ne.p)*.025,ne.p,Math.cos(k*.6+ne.p)*.025),C.scale.set(ne.size,ne.size,ne.size),C.updateMatrix(),Y.leaves.setMatrixAt(ee++,C.matrix);Y.leaves.count=ee,Y.leaves.instanceMatrix.needsUpdate=!0}let Te=new Set,gt=new V;function z(A,k="#ffe9b5"){let re=document.createElement("canvas");re.width=512,re.height=96;let ee=re.getContext("2d");ee.fillStyle="#123e43",ee.beginPath(),ee.roundRect(6,10,500,76,25),ee.fill(),ee.fillStyle=k,ee.font="700 29px system-ui",ee.textAlign="center",ee.textBaseline="middle",ee.fillText(String(A).slice(0,45),256,48,480);let ne=new xi(re);ne.colorSpace=Ft;let ye=new Ss(new Pr({map:ne,depthTest:!0,transparent:!0}));return ye.scale.set(2.45,.46,1),ye.position.y=2.32,Te.add(ye),ye}let vt=["#4c9cba","#df8168","#9974c7","#76b677"];function Je(A={},k="player",re=""){let ee=Cc(A,k,{ell:w,cube:y,tube:I,mesh:_,mat:f,geo:g});return a.add(ee.root),ee.name=re,ee.tag=null,re&&(ee.tag=z(re,A.shirt),ee.root.add(ee.tag)),ee}let Ge=Je(Ho()),De=new Map,wt=Je({skin:"#d1a074",shirt:"#b49966"},"leon","LEON \xB7 HANDEL"),Ie=Je({skin:"#edc39a",shirt:"#609991"},"nela","NELA \xB7 ZADANIA");function Ye(A,k,re){!k||k===A.name||(A.tag&&(Te.delete(A.tag),A.root.remove(A.tag),A.tag.material.map.dispose(),A.tag.material.dispose()),A.name=k,A.tag=z(k,re),A.root.add(A.tag))}function Pt(A,k){if(qu(A,k)){for(let re of A.shirtParts)re.material=f(A.lookShirt);for(let re of A.skinParts)re.material=f(A.lookSkin);for(let re of A.hairParts)re.material=f(A.lookHair);A.hairStyles.forEach((re,ee)=>re.visible=ee===A.lookStyle)}}let dt=null,R=0;function v(A,k,re,ee,ne,ye,ce,Se,qe=!1,Qe=null,Ae=!1,ct=!1){let Vt=k.x/Me,oi=k.y/Me,Hn=Se(k.x,k.y),Hs=Hn?0:Ec(Vt,oi,dt,R);A.root.position.set(Vt,Hs+(Hn?qe?.18:-.95:0),oi),A.yaw+=$0(A.yaw,re)*Math.min(1,ye*12),A.rig.rotation.y=A.yaw;let Wn=ee&&ce>.05;A.phase+=Wn?ye*(ce>4?10:7):0;let Ku=Wn?ce>4?.31:.22:0,Ws=A.phase;A.hips.position.y=(Wn?.9:.92)+(Wn?Math.cos(Ws*2)*.012:Math.sin(ne*1.7)*.004);for(let jt of A.legs){let Rc=Ws+(jt.side<0?Math.PI:0),el=Math.sin(Rc)*Ku,ju=Wn?Math.max(0,Math.cos(Rc))*.105:0,Qu=Vt+Math.cos(A.yaw)*jt.side*.115+Math.sin(A.yaw)*el,ed=oi-Math.sin(A.yaw)*jt.side*.115+Math.cos(A.yaw)*el,td=Hn?0:Ec(Qu,ed,dt,R)-Hs,Xs=Xu(-A.hips.position.y+.07+td+ju,el);jt.thigh.rotation.x=Xs.hip,jt.calf.rotation.x=Xs.knee,jt.shoe.rotation.x=-Xs.hip-Xs.knee}for(let jt of A.arms)jt.arm.rotation.x=Wn?Math.sin(Ws+(jt.side<0?0:Math.PI))*.45:Math.sin(ne*1.3+jt.side)*.025,jt.arm.rotation.z=-jt.side*.07,jt.forearm.rotation.x=Wn?-.22:-.08,Hn&&!qe&&(jt.arm.rotation.x=-Math.PI/2+Math.sin(Ws+jt.side)*.35,jt.forearm.rotation.x=-.28);Ju(A,Qe),A.raft.visible=!!(Hn&&qe),A.raft.rotation.y=A.yaw,A.spear.visible=!!Ae&&!Hn&&!Qe,ct&&(A.arms[0].arm.rotation.x=-1,A.arms[0].forearm.rotation.x=-1),A.tag&&(A.tag.visible=Math.hypot(Vt-Ge.root.position.x,oi-Ge.root.position.z)<13),A.lastX=Vt,A.lastZ=oi}let Z=new Ve;a.add(Z);for(let A of[-.55,.55])for(let k of[-.27,.27])I(Z,"#866642",[A,1.24,k],[.038,2.48,.038]);y(Z,"#a7c4b7",[0,.34,0],[1.24,.68,.67]),y(Z,"#a98961",[0,.69,0],[1.24,.09,.67]);for(let A of[-1,1]){let k=y(Z,"#ba7655",[A*.39,2.63,0],[.9,.07,1.14]);k.rotation.z=-A*.34}let ie=I(Z,"#ba7655",[0,2.79,0],[.055,1.18,.055]);ie.rotation.x=Math.PI/2;for(let A of[-.5,.5])y(Z,"#e2dbc7",[0,2.4,A],[1.7,.1,.07]);for(let A=0;A<5;A++)y(Z,"#a98961",[(A-2)*.24,.32,.344],[.21,.53,.025]);for(let A=0;A<4;A++)w(Z,"#b1b967",[(A-1.5)*.19,.78,0],[.09,.08,.08]);let oe=new Ve;a.add(oe),y(oe,"#765734",[0,.18,0],[.56,.36,.4]),y(oe,"#9a743e",[0,.39,0],[.6,.1,.42]);for(let A of[-.19,.19])y(oe,"#d5b15a",[A,.2,.215],[.045,.35,.026]);y(oe,"#ecd178",[0,.32,.22],[.08,.09,.03]);let te=new ht(new zi(.24,.29,32),new hn({color:"#ffe087",transparent:!0,opacity:.8,side:Lt,depthWrite:!1}));te.rotation.x=-Math.PI/2,a.add(te);let Le={root:new Ve,tag:null,name:null};a.add(Le.root),Le.root.position.set(Bs.x/Me,sn(Bs.x/Me,Bs.y/Me),Bs.y/Me),I(Le.root,"#786040",[0,.95,0],[.12,1.9,.12]),y(Le.root,"#234f58",[0,1.65,0],[1.55,.55,.1]);let pe=new Ve;a.add(pe);let ze=new ht(new zi(.93,1.06,40),new hn({color:"#54e4ef",transparent:!0,opacity:.85,side:Lt,depthWrite:!1}));ze.rotation.x=-Math.PI/2,ze.position.y=.04,pe.add(ze);let Be=_(pe,new It(.035,.035,1,8),new hn({color:"#76eff7",transparent:!0,opacity:.5}),[0,1.25,0],[1,2.5,1],!1),he=null,me=0,$e="",Fe=new Ve,be=null,Ke=null,G=[];a.add(Fe);function de(A){let k=A.activities?.completed||0,re=k>=3&&A.activities.gardenClaimed<k,ee=JSON.stringify([A.baseLevel,A.basePos,A.campfire,A.fire,k>=1,k>=3,k>=6,re,A.activities?.raceWon]);if(ee!==$e){$e=ee,Ke&&(Ke.geometry.dispose(),Ke.material.dispose());for(let ne of G)ne.dispose();if(G=[],a.remove(Fe),Fe=new Ve,a.add(Fe),Ke=null,be=null,A.basePos&&A.baseLevel){let ne=dt,ye=Cu(Yu(ne,R,{cube:y,tube:I}),ne,{cube:y,tube:I},h);if(Fe.add(ye),ye.traverse(ce=>{["roof","wall","lintel"].includes(ce.name)&&(ce.material=ce.material.clone(),ce.material.transparent=!0,G.push(ce.material))}),k>=1)for(let ce of[-1,1]){let Se=w(ye,"#ffdc80",[ce*(ne.width/Me/2-.15),2.35,ne.depth/Me/2],[.09,.14,.09]);Se.material=f("#ffdc80",{emissive:"#dca739",emissiveIntensity:.7})}if(k>=6&&(I(ye,"#6e5942",[ne.width/Me/2+.2,1.75,-ne.depth/Me/2],[.03,3.5,.03]),y(ye,"#5bbca9",[ne.width/Me/2+.55,3.1,-ne.depth/Me/2],[.7,.42,.03])),k>=3&&A.garden){let ce=A.garden,Se=new Ve;Se.position.set(ce.x/Me,sn(ce.x/Me,ce.y/Me),ce.y/Me),Fe.add(Se),y(Se,"#785d40",[0,.07,0],[1.35,.14,1]);for(let qe of[-.4,0,.4])for(let Qe of[-.25,.25])I(Se,"#587b37",[qe,.21,Qe],[.025,.3,.025]),w(Se,"#6caa49",[qe,.35,Qe],[.16,.12,.12]),re&&w(Se,"#cfa565",[qe+.055,.27,Qe],[.07,.065,.07])}}if(A.campfire&&A.fire){let ne=new Ve,ye=A.fire.x/Me,ce=A.fire.y/Me;ne.position.set(ye,sn(ye,ce),ce),Fe.add(ne);for(let Se=0;Se<8;Se++){let qe=Se*Math.PI/4;w(ne,"#777a6b",[Math.sin(qe)*.3,.07,Math.cos(qe)*.3],[.095,.07,.105])}for(let Se of[.5,-.5]){let qe=I(ne,"#614b35",[0,.09,0],[.06,.5,.06]);qe.rotation.z=Math.PI/2,qe.rotation.y=Se}Ke=_(ne,new Rn(.17,.46,8),new hn({color:"#ffb647",transparent:!0,opacity:.88}),[0,.28,0]),be=new ki("#ffa145",2.5,4),be.position.y=.5,ne.add(be)}}}let ve=[];function Re(){let A=new Ve;a.add(A),w(A,"#765745",[0,.29,0],[.24,.25,.43]),w(A,"#765745",[0,.3,.4],[.19,.18,.2]),w(A,"#ae8b68",[0,.26,.58],[.11,.065,.065]);for(let re of[-1,1]){let ee=_(A,new Rn(.08,.17,3),f("#644937"),[re*.13,.47,.43]);ee.rotation.z=re*.45}let k=[];for(let re of[-.17,.17])for(let ee of[-.27,.24])k.push(I(A,"#5e493b",[re,.105,ee],[.037,.2,.037]));return{root:A,legs:k,lastX:null,lastZ:null}}function fe(A,k){for(;ve.length<A.length;)ve.push(Re());for(let re=0;re<ve.length;re++){let ee=ve[re],ne=A[re];if(ee.root.visible=!!ne,!ne){ee.lastX=ee.lastZ=null;continue}let ye=ne.x/Me,ce=ne.y/Me,Se=ee.lastX===null?0:ye-ee.lastX,qe=ee.lastZ===null?0:ce-ee.lastZ,Qe=Math.hypot(Se,qe)>1e-4;ee.root.position.set(ye,sn(ye,ce),ce),Qe&&(ee.root.rotation.y=Math.atan2(Se,qe));for(let Ae=0;Ae<4;Ae++)ee.legs[Ae].rotation.x=Qe?Math.sin(k*6+Ae*Math.PI)*.15:0;ee.lastX=ye,ee.lastZ=ce}}let ae=[new bt(x(),f("#adddd0",{roughness:.4}),96),new bt(new Rn(1,1,3),f("#668e93"),96),new bt(new Rn(1,1,3),f("#779da0"),96)];for(let A of ae)A.count=0,A.frustumCulled=!1,a.add(A);function ke(A,k,re){let ee=0;for(let ne of A||[]){let ye=$u(ne,k,re);if(!ye||ee>=96)continue;let ce=(Se,qe,Qe,Ae,ct=0)=>{C.position.set(ye.x+Math.sin(ye.yaw)*Qe+Math.cos(ye.yaw)*Se,ye.y+qe,ye.z+Math.cos(ye.yaw)*Qe-Math.sin(ye.yaw)*Se),C.rotation.set(ct,ye.yaw,0),C.scale.set(...Ae),C.updateMatrix()};ce(0,0,0,[.09,.045,.22]),ae[0].setMatrixAt(ee,C.matrix),ce(0,0,-.25,[.095,.12,.025],Math.PI/2),ae[1].setMatrixAt(ee,C.matrix),ce(0,.045,-.02,[.04,.1,.11]),ae[2].setMatrixAt(ee,C.matrix),ee++}for(let ne of ae)ne.count=ee,ne.instanceMatrix.needsUpdate=!0}let nt="",ft=[];function xt(A,k){let re=JSON.stringify(A);if(re!==nt){nt=re;for(let ee of ft)a.remove(ee),ee.traverse(ne=>{ne.isSprite&&(Te.delete(ne),ne.material.map.dispose(),ne.material.dispose()),ne.userData.privateGeometry&&ne.geometry.dispose()});ft=[];for(let ee of A||[]){if(ee.type==="return")continue;let ne=new Ve;ne.position.set(ee.x/Me,sn(ee.x/Me,ee.y/Me),ee.y/Me),a.add(ne),ft.push(ne);let ye=new ht(new zi(.4,.46,28),f(ee.done?"#6d9c89":"#8cebd5",{side:Lt}));if(ye.rotation.x=-Math.PI/2,ye.position.y=.03,ye.userData.privateGeometry=!0,ne.add(ye),ee.type==="fragment"&&(y(ne,"#e1c587",[0,.38,0],[.37,.45,.06]),y(ne,"#a68752",[0,.18,-.035],[.035,.42,.035]),y(ne,"#826b4d",[0,.4,.035],[.19,.022,.02])),ee.type==="rune"){w(ne,"#87998a",[0,.26,0],[.27,.3,.21]);let Se=z(ee.symbol,"#ffe29b");Se.position.y=.8,Se.scale.set(.65,.32,1),ne.add(Se)}if(ee.type==="chest"){y(ne,"#795a39",[0,.2,0],[.65,.4,.44]),y(ne,"#bb9251",[0,.42,0],[.69,.06,.46]);for(let Se of[-.21,.21])y(ne,"#f1d584",[Se,.23,.235],[.05,.36,.025])}if(ee.type==="signal"){for(let Se of[-1,1]){let qe=I(ne,"#8a6d49",[Se*.22,.55,0],[.04,1.1,.04]);qe.rotation.z=Se*.22}if(y(ne,"#927652",[0,1.1,0],[.7,.16,.45]),ee.done){let Se=w(ne,"#ffe28d",[0,1.34,0],[.16,.21,.16]);Se.material=f("#ffe28d",{emissive:"#ffa842",emissiveIntensity:1})}else y(ne,"#344f57",[0,1.3,0],[.3,.18,.24])}let ce=z(ee.label,ee.done?"#b5d1c5":"#ffe9b5");ce.position.y=ee.type==="signal"?1.95:1.35,ne.add(ce),ne.userData.done=ee.done}}for(let ee of ft)ee.children[0].scale.setScalar(ee.userData.done?1:1+Math.sin(k*2.8)*.05)}let an=[];for(let A=0;A<4;A++){let k=new Tt().setFromPoints([new V(-.3,0,0),new V(0,-.08,0),new V(.3,0,0)]),re=new Ni(k,new gi({color:"#fff7de"}));a.add(re),an.push(re)}let Nt=Math.atan2(-130,-60),Mn=0,on=4.8,Bt=!0,Un=!0,qt=0,Dt=null,kt=!1,xn=0,Ut="first",Jt=new Ve;o.add(Jt);let _n=I(Jt,"#52625f",[.28,-.36,-.42],[.1,.34,.1]);_n.rotation.x=-.65;let er=w(Jt,"#dda879",[.29,-.27,-.58],[.055,.08,.055]),Nn=new Ve;Jt.add(Nn);let tr=I(Nn,"#876742",[.32,-.17,-.75],[.014,1.55,.014]);tr.rotation.x=-.22;let es=w(Nn,"#b3b6ac",[.32,.61,-.91],[.039,.12,.025]),wi={};for(let A of["gather","fish","cook"]){let k=new Ve;k.position.set(.29,-.26,-.61),Jt.add(k),Zu(A,k,{cube:y,tube:I,ell:w}),wi[A]=k}let S=Object.entries(wi),H={down:0,up:Math.PI,left:-Math.PI/2,right:Math.PI/2},j=new Set;Jt.traverse(A=>{A.isMesh&&(A.castShadow=!1,A.receiveShadow=!1,A.frustumCulled=!1)});let Q=new V,X=new V,ue=new V,E=new V,P={position:ue,target:Q},W=new V,$=new Gi;function ge(A,k=0){!Bt||t().paused||(Nt+=A,Mn=Si(Mn+k,Ut==="first"?-1.12:-.05,Ut==="first"?1.12:.75))}function xe(A){Ut=A==="third"?"third":"first",Mn=A==="third"?.22:0,o.fov=A==="third"?58:72,o.updateProjectionMatrix(),Dt=null,Un=!0}i.addEventListener("pointerdown",A=>{let k=t();!Bt||!k.play||k.paused||A.button>0||Dt||(Dt={id:A.pointerId,x:A.clientX,y:A.clientY},i.setPointerCapture(A.pointerId))}),i.addEventListener("pointermove",A=>{!Dt||Dt.id!==A.pointerId||(ge(-(A.clientX-Dt.x)*.006,(A.clientY-Dt.y)*.005),Dt.x=A.clientX,Dt.y=A.clientY)});let Pe=A=>{Dt?.id===A.pointerId&&(Dt=null)};for(let A of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(A,Pe);i.addEventListener("wheel",A=>{!Bt||t().paused||(A.preventDefault(),Ut==="first"?(o.fov=Si(o.fov+A.deltaY*.025,58,85),o.updateProjectionMatrix()):on=Si(on+A.deltaY*.004,2.5,8))},{passive:!1}),i.addEventListener("webglcontextlost",A=>{A.preventDefault(),kt=!0,Bt=!1,Dt=null,n()}),i.addEventListener("webglcontextrestored",()=>{kt=!1,Un=!0});function Xe(){r.setSize(innerWidth,innerHeight,!1),o.aspect=innerWidth/innerHeight,o.updateProjectionMatrix()}function je(A){if(!Bt||kt)return;let k=t(),re=A/1e3,ee=qt?Si((A-qt)/1e3,0,.06):1/60;qt=A,dt=Su(k.basePos,k.baseLevel),R=Ac(dt),Ye(Le,k.labels?.board,"#ffe087"),Le.tag&&(Le.tag.position.y=1.65,Le.tag.scale.set(1.4,.36,1)),pe.visible=!!k.trail,k.trail&&(pe.position.set(k.trail.x/Me,sn(k.trail.x/Me,k.trail.y/Me),k.trail.y/Me),Be.material.opacity=.35+.13*Math.sin(re*3),(me!==k.trailNumber||he?.userData.text!==(k.trailNumber===4?k.labels?.finish||"4":k.trailNumber?String(k.trailNumber):k.trail.label))&&(he&&(Te.delete(he),pe.remove(he),he.material.map.dispose(),he.material.dispose()),me=k.trailNumber,he=z(me===4?k.labels?.finish||"4":me?String(me):k.trail.label,"#54e4ef"),he.userData.text=me===4?k.labels?.finish||"4":me?String(me):k.trail.label,he.position.y=1.5,he.scale.set(k.trailNumber?1:2.45,.4,1),pe.add(he))),Ye(wt,k.labels?.leon,"#b49966"),Ye(Ie,k.labels?.nela,"#609991");let ne=k.P.x/Me,ye=k.P.y/Me;h.update(),J.update(re,dt),tt.value=re,le.material.uniforms.uTime.value=re,Ue(k.objects,re,k.resourceRevision),ke(k.fishes,re,k.sea),xt(k.chapterMarkers,re),v(Ge,k.P,Number.isFinite(k.heading)?k.heading:H[k.face]||0,k.moving,re,ee,k.fast?5.25:3,k.sea,k.raft,k.motion,k.spear,k.blocked),wt.root.visible=Ie.root.visible=!0,v(wt,k.leon,Math.atan2(ne-k.leon.x/Me,ye-k.leon.y/Me),!1,re,ee,0,k.sea),v(Ie,k.nela,Math.atan2(ne-k.nela.x/Me,ye-k.nela.y/Me),!1,re,ee,0,k.sea),j.clear();for(let Ae of k.players){if(Ae.id===k.you)continue;j.add(Ae.id);let ct=De.get(Ae.id),Vt=Ae.appearance?Ho(Ae.appearance):k.looks[Ae.slot]||{};(!ct||ct.name!==Ae.name)&&(ct&&Ze(ct),ct=Je(Vt,"player",Ae.name),De.set(Ae.id,ct)),Pt(ct,Vt);let oi=ct.lastX===null?0:Ae.point.x/Me-ct.lastX,Hn=ct.lastZ===null?0:Ae.point.y/Me-ct.lastZ,Hs=Ae.moving&&Math.hypot(oi,Hn)>.002?Math.atan2(oi,Hn):H[Ae.face]||0,Wn=Ae.motion&&Ae.motion.remaining-(A-Ae.received)>0?{kind:Ae.motion.kind,phase:1-(Ae.motion.remaining-(A-Ae.received))/(wu[Ae.motion.kind]||1e3)}:null;v(ct,Ae.point,Hs,Ae.moving,re,ee,3,k.sea,!1,Wn,k.spearOwned&&!Ae.spearStowed,Ae.blocked)}for(let[Ae,ct]of De)j.has(Ae)||(Ze(ct),De.delete(Ae));Pt(Ge,k.appearance||Ho()),Z.position.set(k.leon.x/Me+.9,sn(k.leon.x/Me+.9,k.leon.y/Me+.15),k.leon.y/Me+.15),oe.position.set(k.chest.x/Me,sn(k.chest.x/Me,k.chest.y/Me),k.chest.y/Me),oe.visible=!k.treasure,de(k),fe(k.enemies,re);let ce=dt&&Math.abs(k.P.x-dt.floor.x)<dt.floor.w/2&&Math.abs(k.P.y-dt.floor.y)<dt.floor.h/2;for(let Ae of G)Ae.opacity=ce&&Ut==="third"?.23:1,Ae.depthWrite=!(ce&&Ut==="third");Ke&&(Ke.scale.y=1+Math.sin(re*13)*.18,be.intensity=2.5+Math.sin(re*17)*.4);let Se=Hu(k.objects,k.P);te.visible=!!(k.play&&!k.paused&&Se),Se&&te.position.set(Se.x/Me,sn(Se.x/Me,Se.y/Me)+.03,Se.y/Me);for(let Ae=0;Ae<an.length;Ae++){let ct=an[Ae];ct.position.set(19+Math.sin(re*.08+Ae*1.7)*8,7+Math.sin(re*.2+Ae)*.5,12+Math.cos(re*.1+Ae*1.3)*5),ct.rotation.y=re*.1+Ae,ct.scale.y=1+Math.sin(re*7+Ae)*.5}Ge.rig.visible=Ut!=="first";let qe=k.moving&&!k.paused?Math.sin(Ge.phase*2)*.012:0;if(Xo({x:ne,z:ye,surface:Ge.root.position.y,yaw:Nt,pitch:Mn,mode:Ut,distance:on*(o.aspect<.85?1.12:1),bob:qe},P),Ut==="third"){ue.y=Math.max(ue.y,sn(ue.x,ue.z)+.55),W.subVectors(ue,Q);let Ae=W.length();W.normalize(),$.set(Q,W),$.near=.08,$.far=Ae;let ct=$.intersectObjects([Fe,Z],!0).find(Vt=>Vt.object.isMesh&&Vt.distance>.1);ct&&ue.copy(Q).addScaledVector(W,Math.max(.35,ct.distance-.15))}Ut==="first"||Un||E.distanceTo(Ge.root.position)>5?(o.position.copy(ue),X.copy(Q),Un=!1):(vc(o.position,ue,ee,8),vc(X,Q,ee,12)),o.lookAt(Ut==="first"?Q:X),E.copy(Ge.root.position),Wu(Te,o,innerWidth,gt);let Qe=!!k.spear||!!k.motion&&(k.motion.kind==="gather"||k.motion.kind==="fish"||k.motion.kind==="cook");Jt.visible=Ut==="first"&&k.play&&Qe&&!k.sea(k.P.x,k.P.y),Nn.visible=!!k.spear&&!k.motion;for(let[Ae,ct]of S)ct.visible=k.motion?.kind===Ae;Jt.position.y=qe*.4,Jt.rotation.x=k.motion?Math.sin(k.motion.phase*Math.PI*2)*.07:0,er.material=f(k.appearance?.skin||"#dda879"),_n.material=f(k.appearance?.shirt||"#4c9cba"),qo(l,ne,ye),le.position.copy(o.position),q.update(re,o.position),r.render(a,o),k.play&&ee>.038?xn+=ee:xn=Math.max(0,xn-ee),xn>3&&r.getPixelRatio()>.85&&(r.setPixelRatio(Math.max(.85,r.getPixelRatio()-.15)),Xe(),xn=0)}function Ze(A){a.remove(A.root),A.tag&&(Te.delete(A.tag),A.tag.material.map.dispose(),A.tag.material.dispose())}function at(A){return Bt=!!A&&!kt,Dt=null,Un=!0,qt=0,Bt}function Ee(){Bt=!1,r.dispose(),N.dispose(),T.dispose(),q.dispose(),le.geometry.dispose(),le.material.dispose(),B.traverse(A=>{A.geometry&&A.geometry.dispose(),A.material&&A.material.dispose()}),M.dispose(),J.dispose(),h.dispose(),it.dispose();for(let A of[...Object.values(Y),...ae])A.geometry.dispose(),A.dispose();for(let A of p.values())A.dispose();for(let A of d.values())A.dispose()}return{frame:je,resize:Xe,orbit:ge,setEnabled:at,setCamera:xe,dispose:Ee,vector:(A,k)=>Gu(A,k,Nt),get enabled(){return Bt},get yaw(){return Nt},get cameraMode(){return Ut},stats:()=>({calls:r.info.render.calls,triangles:r.info.render.triangles,pixelRatio:r.getPixelRatio(),people:De.size+3,camera:Ut,eye:o.position.toArray(),resourceStaticUpdates:Oe,materials:h.stats()})}}return od(j0);})();
